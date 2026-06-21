import { supabase } from "@/integrations/supabase/client";

interface SaveQuizParams {
  userId: string;
  topicName: string;
  topicId?: string;
  quizType?: string;
  score: number;
  total: number;
  skipped?: number;
  timeTakenSeconds?: number;
  questions: {
    question_text: string;
    chosen_answer: string;
    correct_answer: string;
    was_correct: boolean;
    skipped?: boolean;
    error_type?: string;
    skill_tags?: string[];
  }[];
}

export async function saveQuizAttempt(params: SaveQuizParams): Promise<string> {
  const percentage = params.total > 0 ? Math.round((params.score / params.total) * 100) : 0;

  const { data: attempt, error: aErr } = await supabase
    .from("quiz_attempts")
    .insert({
      user_id: params.userId,
      topic_name: params.topicName,
      topic_id: params.topicId ?? null,
      quiz_type: params.quizType ?? "lesson",
      score: params.score,
      total: params.total,
      percentage,
      skipped: params.skipped ?? 0,
      time_taken_seconds: params.timeTakenSeconds ?? null,
    })
    .select("id")
    .single();
  if (aErr) throw aErr;

  if (params.questions.length > 0) {
    const rows = params.questions.map((q) => ({
      attempt_id: attempt.id,
      user_id: params.userId,
      question_text: q.question_text,
      chosen_answer: q.chosen_answer,
      correct_answer: q.correct_answer,
      was_correct: q.was_correct,
      skipped: q.skipped ?? false,
      error_type: q.error_type ?? null,
      skill_tags: q.skill_tags ?? null,
    }));
    const { error: qErr } = await supabase
      .from("quiz_attempt_questions")
      .insert(rows);
    if (qErr) throw qErr;
  }

  await supabase.rpc("update_user_streak", { p_user_id: params.userId });
  return attempt.id;
}
