
-- USER XP AGGREGATE
CREATE TABLE public.user_xp (
  user_id uuid PRIMARY KEY,
  total_xp integer NOT NULL DEFAULT 0,
  level integer NOT NULL DEFAULT 1,
  stars integer NOT NULL DEFAULT 0,
  weekly_xp integer NOT NULL DEFAULT 0,
  monthly_xp integer NOT NULL DEFAULT 0,
  week_start date NOT NULL DEFAULT date_trunc('week', now())::date,
  month_start date NOT NULL DEFAULT date_trunc('month', now())::date,
  last_login_date date,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.user_xp ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own xp" ON public.user_xp FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own xp" ON public.user_xp FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own xp" ON public.user_xp FOR UPDATE USING (auth.uid() = user_id);

CREATE TRIGGER update_user_xp_updated_at BEFORE UPDATE ON public.user_xp
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- XP EVENT LOG
CREATE TABLE public.xp_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  source text NOT NULL,
  amount integer NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  idempotency_key text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX xp_events_idem_uniq ON public.xp_events (user_id, idempotency_key) WHERE idempotency_key IS NOT NULL;
CREATE INDEX xp_events_user_created_idx ON public.xp_events (user_id, created_at DESC);
ALTER TABLE public.xp_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own xp events" ON public.xp_events FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own xp events" ON public.xp_events FOR INSERT WITH CHECK (auth.uid() = user_id);

-- BADGES
CREATE TABLE public.user_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  badge_key text NOT NULL,
  unlocked_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, badge_key)
);
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own badges" ON public.user_badges FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own badges" ON public.user_badges FOR INSERT WITH CHECK (auth.uid() = user_id);

-- DAILY GOALS
CREATE TABLE public.user_daily_goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  goal_date date NOT NULL DEFAULT current_date,
  goal_xp integer NOT NULL DEFAULT 50,
  xp_earned integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, goal_date)
);
ALTER TABLE public.user_daily_goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own goals" ON public.user_daily_goals FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own goals" ON public.user_daily_goals FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own goals" ON public.user_daily_goals FOR UPDATE USING (auth.uid() = user_id);

CREATE TRIGGER update_user_daily_goals_updated_at BEFORE UPDATE ON public.user_daily_goals
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- LEVEL HELPER: level = floor(sqrt(xp/50)) + 1, cap reasonable
CREATE OR REPLACE FUNCTION public.calc_level(_xp integer)
RETURNS integer LANGUAGE sql IMMUTABLE AS $$
  SELECT GREATEST(1, FLOOR(SQRT(GREATEST(_xp,0)::numeric / 50))::int + 1)
$$;

-- AWARD XP (single transaction)
CREATE OR REPLACE FUNCTION public.award_xp(
  _amount integer,
  _source text,
  _stars integer DEFAULT 0,
  _metadata jsonb DEFAULT '{}'::jsonb,
  _idempotency_key text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user uuid := auth.uid();
  v_today date := current_date;
  v_week date := date_trunc('week', now())::date;
  v_month date := date_trunc('month', now())::date;
  v_prev_level int;
  v_new_level int;
  v_row public.user_xp%ROWTYPE;
  v_inserted_event uuid;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Insert event with idempotency. If duplicate, return current state.
  BEGIN
    INSERT INTO public.xp_events (user_id, source, amount, metadata, idempotency_key)
    VALUES (v_user, _source, _amount, _metadata, _idempotency_key)
    RETURNING id INTO v_inserted_event;
  EXCEPTION WHEN unique_violation THEN
    SELECT * INTO v_row FROM public.user_xp WHERE user_id = v_user;
    RETURN jsonb_build_object('duplicate', true, 'total_xp', COALESCE(v_row.total_xp,0), 'level', COALESCE(v_row.level,1));
  END;

  -- Upsert aggregate
  INSERT INTO public.user_xp (user_id, total_xp, level, stars, weekly_xp, monthly_xp, week_start, month_start, last_login_date)
  VALUES (v_user, _amount, public.calc_level(_amount), _stars, _amount, _amount, v_week, v_month, v_today)
  ON CONFLICT (user_id) DO UPDATE SET
    total_xp = public.user_xp.total_xp + EXCLUDED.total_xp,
    stars = public.user_xp.stars + EXCLUDED.stars,
    weekly_xp = CASE WHEN public.user_xp.week_start = v_week
                     THEN public.user_xp.weekly_xp + EXCLUDED.total_xp
                     ELSE EXCLUDED.total_xp END,
    monthly_xp = CASE WHEN public.user_xp.month_start = v_month
                      THEN public.user_xp.monthly_xp + EXCLUDED.total_xp
                      ELSE EXCLUDED.total_xp END,
    week_start = v_week,
    month_start = v_month,
    level = public.calc_level(public.user_xp.total_xp + EXCLUDED.total_xp),
    updated_at = now()
  RETURNING * INTO v_row;

  v_new_level := v_row.level;
  v_prev_level := public.calc_level(v_row.total_xp - _amount);

  -- Daily goal
  INSERT INTO public.user_daily_goals (user_id, goal_date, xp_earned)
  VALUES (v_user, v_today, _amount)
  ON CONFLICT (user_id, goal_date) DO UPDATE SET
    xp_earned = public.user_daily_goals.xp_earned + EXCLUDED.xp_earned,
    updated_at = now();

  RETURN jsonb_build_object(
    'duplicate', false,
    'awarded', _amount,
    'stars_awarded', _stars,
    'total_xp', v_row.total_xp,
    'level', v_new_level,
    'leveled_up', v_new_level > v_prev_level,
    'previous_level', v_prev_level
  );
END;
$$;

-- LEADERBOARD function (security definer for safe public reads)
CREATE OR REPLACE FUNCTION public.get_leaderboard(_scope text DEFAULT 'global', _limit integer DEFAULT 50)
RETURNS TABLE (
  user_id uuid,
  display_name text,
  avatar_url text,
  xp integer,
  level integer,
  stars integer,
  streak integer
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    ux.user_id,
    COALESCE(p.display_name, 'Student') AS display_name,
    p.avatar_url,
    CASE _scope
      WHEN 'weekly' THEN ux.weekly_xp
      WHEN 'monthly' THEN ux.monthly_xp
      ELSE ux.total_xp
    END AS xp,
    ux.level,
    ux.stars,
    COALESCE(us.current_streak, 0) AS streak
  FROM public.user_xp ux
  LEFT JOIN public.profiles p ON p.user_id = ux.user_id
  LEFT JOIN public.user_streaks us ON us.user_id = ux.user_id
  WHERE CASE _scope
          WHEN 'weekly' THEN ux.weekly_xp > 0 AND ux.week_start = date_trunc('week', now())::date
          WHEN 'monthly' THEN ux.monthly_xp > 0 AND ux.month_start = date_trunc('month', now())::date
          ELSE ux.total_xp > 0
        END
  ORDER BY xp DESC NULLS LAST
  LIMIT GREATEST(_limit, 1);
$$;

GRANT EXECUTE ON FUNCTION public.get_leaderboard(text, integer) TO authenticated, anon;
GRANT EXECUTE ON FUNCTION public.award_xp(integer, text, integer, jsonb, text) TO authenticated;
