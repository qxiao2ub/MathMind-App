
-- ============================================================
-- Quiz Attempts
-- ============================================================
CREATE TABLE public.quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  quiz_type text NOT NULL,
  topic_id text,
  topic_name text NOT NULL,
  score int NOT NULL,
  total int NOT NULL,
  percentage int NOT NULL,
  time_taken_seconds int,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_quiz_attempts_user_date ON public.quiz_attempts (user_id, created_at DESC);
CREATE INDEX idx_quiz_attempts_user_topic ON public.quiz_attempts (user_id, topic_name);

ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own quiz attempts" ON public.quiz_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz attempts" ON public.quiz_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- Quiz Attempt Questions
-- ============================================================
CREATE TABLE public.quiz_attempt_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id uuid NOT NULL REFERENCES public.quiz_attempts(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  question_text text NOT NULL,
  chosen_answer text,
  correct_answer text NOT NULL,
  was_correct boolean NOT NULL,
  skill_tags text[],
  error_type text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_quiz_attempt_questions_user_date ON public.quiz_attempt_questions (user_id, created_at DESC);
CREATE INDEX idx_quiz_attempt_questions_attempt ON public.quiz_attempt_questions (attempt_id);

ALTER TABLE public.quiz_attempt_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own quiz questions" ON public.quiz_attempt_questions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz questions" ON public.quiz_attempt_questions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- Practice Attempts
-- ============================================================
CREATE TABLE public.practice_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  topic_name text NOT NULL,
  difficulty text NOT NULL,
  question_text text NOT NULL,
  user_answer text,
  correct_answer text NOT NULL,
  was_correct boolean NOT NULL,
  hint_used boolean NOT NULL DEFAULT false,
  solution_viewed boolean NOT NULL DEFAULT false,
  time_taken_seconds int,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_practice_attempts_user_date ON public.practice_attempts (user_id, created_at DESC);
CREATE INDEX idx_practice_attempts_user_topic ON public.practice_attempts (user_id, topic_name);

ALTER TABLE public.practice_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own practice attempts" ON public.practice_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own practice attempts" ON public.practice_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- Student Skill Profile
-- ============================================================
CREATE TABLE public.student_skill_profile (
  user_id uuid PRIMARY KEY,
  mastery_by_topic jsonb NOT NULL DEFAULT '{}'::jsonb,
  weak_skills jsonb NOT NULL DEFAULT '[]'::jsonb,
  strength_skills jsonb NOT NULL DEFAULT '[]'::jsonb,
  streak_days int NOT NULL DEFAULT 0,
  last_activity_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.student_skill_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own skill profile" ON public.student_skill_profile FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own skill profile" ON public.student_skill_profile FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own skill profile" ON public.student_skill_profile FOR UPDATE USING (auth.uid() = user_id);

-- ============================================================
-- AI Feedback Logs
-- ============================================================
CREATE TABLE public.ai_feedback_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  source text NOT NULL,
  topic_name text NOT NULL,
  attempt_id uuid,
  model text NOT NULL,
  status int NOT NULL,
  latency_ms int,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_ai_feedback_logs_user_date ON public.ai_feedback_logs (user_id, created_at DESC);

ALTER TABLE public.ai_feedback_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own ai logs" ON public.ai_feedback_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own ai logs" ON public.ai_feedback_logs FOR INSERT WITH CHECK (auth.uid() = user_id);
