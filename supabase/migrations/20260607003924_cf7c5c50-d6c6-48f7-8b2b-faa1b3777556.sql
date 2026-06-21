
-- 1. Remove duplicate broad community-images INSERT policy
DROP POLICY IF EXISTS "Authenticated users can upload community images" ON storage.objects;

-- 2. Lock down direct writes to gamification tables
DROP POLICY IF EXISTS "Users insert own xp" ON public.user_xp;
DROP POLICY IF EXISTS "Users update own xp" ON public.user_xp;
DROP POLICY IF EXISTS "Users insert own xp events" ON public.xp_events;
DROP POLICY IF EXISTS "Users insert own badges" ON public.user_badges;

-- 3. Server-side badge unlock function (callable by authenticated users)
CREATE OR REPLACE FUNCTION public.unlock_badge(_badge_key text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user uuid := auth.uid();
  v_total int;
  v_already boolean;
  v_allowed boolean := false;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT EXISTS(SELECT 1 FROM public.user_badges WHERE user_id = v_user AND badge_key = _badge_key)
    INTO v_already;
  IF v_already THEN
    RETURN jsonb_build_object('unlocked', false, 'already', true);
  END IF;

  SELECT COALESCE(total_xp,0) INTO v_total FROM public.user_xp WHERE user_id = v_user;
  v_total := COALESCE(v_total, 0);

  -- Server-validated unlock rules
  IF _badge_key = 'first_lesson' THEN
    v_allowed := EXISTS(SELECT 1 FROM public.xp_events WHERE user_id = v_user AND source = 'lesson_complete' LIMIT 1);
  ELSIF _badge_key = 'first_quiz' THEN
    v_allowed := EXISTS(SELECT 1 FROM public.xp_events WHERE user_id = v_user AND source = 'quiz_complete' LIMIT 1);
  ELSIF _badge_key = 'perfect_quiz' THEN
    v_allowed := EXISTS(
      SELECT 1 FROM public.quiz_attempts
      WHERE user_id = v_user AND total > 0 AND score = total LIMIT 1
    );
  ELSIF _badge_key = 'speed_solver' THEN
    v_allowed := EXISTS(
      SELECT 1 FROM public.quiz_attempts
      WHERE user_id = v_user AND time_taken_seconds IS NOT NULL
        AND time_taken_seconds <= 120 AND total >= 5 LIMIT 1
    );
  ELSIF _badge_key = 'streak_7' THEN
    v_allowed := EXISTS(SELECT 1 FROM public.user_streaks WHERE user_id = v_user AND current_streak >= 7);
  ELSIF _badge_key = 'xp_1000' THEN
    v_allowed := v_total >= 1000;
  ELSIF _badge_key = 'xp_5000' THEN
    v_allowed := v_total >= 5000;
  ELSE
    v_allowed := false;
  END IF;

  IF NOT v_allowed THEN
    RETURN jsonb_build_object('unlocked', false, 'allowed', false);
  END IF;

  INSERT INTO public.user_badges (user_id, badge_key) VALUES (v_user, _badge_key)
  ON CONFLICT DO NOTHING;

  RETURN jsonb_build_object('unlocked', true);
END;
$$;

REVOKE EXECUTE ON FUNCTION public.unlock_badge(text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.unlock_badge(text) TO authenticated;
