import { supabase } from "@/integrations/supabase/client";

export async function markLessonComplete(
  userId: string,
  topicId: string,
  lessonIndex: number,
  score?: number,
  maxScore?: number
): Promise<void> {
  await supabase.from("user_progress").upsert({
    user_id: userId,
    topic_id: topicId,
    lesson_index: lessonIndex,
    completed: true,
    score: score ?? null,
    max_score: maxScore ?? null,
    updated_at: new Date().toISOString(),
  });
  await supabase.rpc("update_user_streak", { p_user_id: userId });
}

export async function getUserProgress(userId: string): Promise<
  { topic_id: string; lesson_index: number | null; completed: boolean | null; score: number | null }[]
> {
  const { data, error } = await supabase
    .from("user_progress")
    .select("topic_id, lesson_index, completed, score")
    .eq("user_id", userId);
  if (error) throw error;
  return data ?? [];
}
