
-- 1. Add bio to profiles (if not exists)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' AND table_name = 'profiles' AND column_name = 'bio'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN bio text;
  END IF;
END $$;

-- 2. Add skipped to quiz_attempts
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' AND table_name = 'quiz_attempts' AND column_name = 'skipped'
  ) THEN
    ALTER TABLE public.quiz_attempts ADD COLUMN skipped int DEFAULT 0;
  END IF;
END $$;

-- 3. Add skipped to quiz_attempt_questions
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' AND table_name = 'quiz_attempt_questions' AND column_name = 'skipped'
  ) THEN
    ALTER TABLE public.quiz_attempt_questions ADD COLUMN skipped boolean DEFAULT false;
  END IF;
END $$;

-- 4. Add topic_id to practice_attempts (if not exists)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' AND table_name = 'practice_attempts' AND column_name = 'topic_id'
  ) THEN
    ALTER TABLE public.practice_attempts ADD COLUMN topic_id text;
  END IF;
END $$;

-- 5. Create user_progress table
CREATE TABLE IF NOT EXISTS public.user_progress (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL,
  topic_id      text NOT NULL,
  lesson_index  int,
  completed     boolean DEFAULT false,
  score         int,
  max_score     int,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now(),
  UNIQUE(user_id, topic_id, lesson_index)
);

ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can select own progress"
  ON public.user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON public.user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON public.user_progress FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON public.user_progress FOR DELETE
  USING (auth.uid() = user_id);

-- 6. Create user_streaks table
CREATE TABLE IF NOT EXISTS public.user_streaks (
  user_id             uuid PRIMARY KEY,
  current_streak      int DEFAULT 0,
  longest_streak      int DEFAULT 0,
  last_activity_date  date,
  streak_days         date[] DEFAULT '{}',
  updated_at          timestamptz DEFAULT now()
);

ALTER TABLE public.user_streaks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can select own streak"
  ON public.user_streaks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own streak"
  ON public.user_streaks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own streak"
  ON public.user_streaks FOR UPDATE
  USING (auth.uid() = user_id);

-- 7. Create ai_chat_sessions table
CREATE TABLE IF NOT EXISTS public.ai_chat_sessions (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL,
  topic_id    text,
  topic_name  text,
  title       text,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);

ALTER TABLE public.ai_chat_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can select own chat sessions"
  ON public.ai_chat_sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own chat sessions"
  ON public.ai_chat_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own chat sessions"
  ON public.ai_chat_sessions FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own chat sessions"
  ON public.ai_chat_sessions FOR DELETE
  USING (auth.uid() = user_id);

-- 8. Create ai_chat_messages table
CREATE TABLE IF NOT EXISTS public.ai_chat_messages (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id  uuid NOT NULL REFERENCES public.ai_chat_sessions(id) ON DELETE CASCADE,
  user_id     uuid NOT NULL,
  role        text NOT NULL CHECK (role IN ('user', 'assistant')),
  content     text NOT NULL,
  created_at  timestamptz DEFAULT now()
);

ALTER TABLE public.ai_chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can select own messages"
  ON public.ai_chat_messages FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own messages"
  ON public.ai_chat_messages FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own messages"
  ON public.ai_chat_messages FOR DELETE
  USING (auth.uid() = user_id);

-- 9. Create ai_analysis table
CREATE TABLE IF NOT EXISTS public.ai_analysis (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         uuid NOT NULL,
  analysis_type   text NOT NULL,
  topic_id        text,
  attempt_id      uuid,
  content         jsonb NOT NULL,
  created_at      timestamptz DEFAULT now()
);

ALTER TABLE public.ai_analysis ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can select own analysis"
  ON public.ai_analysis FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own analysis"
  ON public.ai_analysis FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 10. Streak updater function (security definer so it can be called via RPC)
CREATE OR REPLACE FUNCTION public.update_user_streak(p_user_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_today      date := current_date;
  v_row        public.user_streaks%rowtype;
  v_new_streak int;
BEGIN
  SELECT * INTO v_row FROM public.user_streaks WHERE user_id = p_user_id;

  IF NOT FOUND THEN
    INSERT INTO public.user_streaks (user_id, current_streak, longest_streak, last_activity_date, streak_days)
    VALUES (p_user_id, 1, 1, v_today, ARRAY[v_today]);
    RETURN;
  END IF;

  -- Already updated today
  IF v_row.last_activity_date = v_today THEN RETURN; END IF;

  -- Continuing streak (yesterday)
  IF v_row.last_activity_date = v_today - interval '1 day' THEN
    v_new_streak := v_row.current_streak + 1;
  ELSE
    v_new_streak := 1;
  END IF;

  UPDATE public.user_streaks SET
    current_streak     = v_new_streak,
    longest_streak     = GREATEST(v_row.longest_streak, v_new_streak),
    last_activity_date = v_today,
    streak_days        = array_append(v_row.streak_days, v_today),
    updated_at         = now()
  WHERE user_id = p_user_id;
END;
$$;
