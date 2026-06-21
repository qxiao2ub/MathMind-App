CREATE TABLE public.learn_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  year_level text NOT NULL,
  chapter_name text NOT NULL,
  topic_name text NOT NULL,
  lesson_name text NOT NULL,
  lesson_index integer NOT NULL DEFAULT 0,
  topic_id text NOT NULL,
  duration_seconds integer NOT NULL DEFAULT 0,
  completion_percentage integer NOT NULL DEFAULT 0,
  is_completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.learn_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own learn activities"
  ON public.learn_activities FOR INSERT TO public
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own learn activities"
  ON public.learn_activities FOR SELECT TO public
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own learn activities"
  ON public.learn_activities FOR UPDATE TO public
  USING (auth.uid() = user_id);