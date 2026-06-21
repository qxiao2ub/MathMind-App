import { supabase } from "@/integrations/supabase/client";
import type { QuizAttempt, QuizAttemptQuestion, PracticeAttempt, HistoryFilters } from "@/types/history";

function getDateCutoff(range: string): string | null {
  if (range === "all") return null;
  const days = parseInt(range);
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export async function getQuizHistory(
  filters: HistoryFilters = {},
  limit = 20,
  offset = 0
): Promise<{ data: QuizAttempt[]; count: number }> {
  let query = supabase
    .from("quiz_attempts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (filters.topicName) {
    query = query.eq("topic_name", filters.topicName);
  }
  const cutoff = getDateCutoff(filters.dateRange || "all");
  if (cutoff) {
    query = query.gte("created_at", cutoff);
  }

  const { data, error, count } = await query;
  if (error) throw error;
  return { data: (data || []) as unknown as QuizAttempt[], count: count || 0 };
}

export async function getQuizAttemptDetails(attemptId: string): Promise<QuizAttemptQuestion[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  // Verify ownership before querying questions (defense-in-depth alongside RLS)
  const { data: attempt, error: attemptError } = await supabase
    .from("quiz_attempts")
    .select("id")
    .eq("id", attemptId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (attemptError) throw attemptError;
  if (!attempt) throw new Error("Attempt not found or access denied");

  const { data, error } = await supabase
    .from("quiz_attempt_questions")
    .select("*")
    .eq("attempt_id", attemptId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return (data || []) as unknown as QuizAttemptQuestion[];
}

export async function getPracticeHistory(
  filters: HistoryFilters = {},
  limit = 20,
  offset = 0
): Promise<{ data: PracticeAttempt[]; count: number }> {
  let query = supabase
    .from("practice_attempts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (filters.topicName) {
    query = query.eq("topic_name", filters.topicName);
  }
  const cutoff = getDateCutoff(filters.dateRange || "all");
  if (cutoff) {
    query = query.gte("created_at", cutoff);
  }
  if (filters.correctnessFilter === "correct") {
    query = query.eq("was_correct", true);
  } else if (filters.correctnessFilter === "incorrect") {
    query = query.eq("was_correct", false);
  }

  const { data, error, count } = await query;
  if (error) throw error;
  return { data: (data || []) as unknown as PracticeAttempt[], count: count || 0 };
}

export async function savePracticeAttempt(attempt: {
  topic_name: string;
  difficulty: string;
  question_text: string;
  user_answer: string | null;
  correct_answer: string;
  was_correct: boolean;
  hint_used: boolean;
  solution_viewed: boolean;
  time_taken_seconds: number | null;
}): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { error } = await supabase.from("practice_attempts").insert({
    user_id: user.id,
    ...attempt,
  } as any);
  if (error) throw error;
}

export async function getDistinctTopics(): Promise<string[]> {
  // Get distinct topic names from quiz attempts
  const { data: quizTopics } = await supabase
    .from("quiz_attempts")
    .select("topic_name")
    .order("topic_name");

  const { data: practiceTopics } = await supabase
    .from("practice_attempts")
    .select("topic_name")
    .order("topic_name");

  const all = new Set<string>();
  (quizTopics || []).forEach((r: any) => all.add(r.topic_name));
  (practiceTopics || []).forEach((r: any) => all.add(r.topic_name));
  return Array.from(all).sort();
}
