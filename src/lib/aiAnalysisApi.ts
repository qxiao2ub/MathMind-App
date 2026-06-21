import { supabase } from "@/integrations/supabase/client";

export interface AIAnalysis {
  id: string;
  analysis_type: string;
  topic_id?: string | null;
  attempt_id?: string | null;
  content: Record<string, unknown>;
  created_at: string;
}

export async function saveAnalysis(
  userId: string,
  type: string,
  content: Record<string, unknown>,
  topicId?: string,
  attemptId?: string
): Promise<void> {
  const { error } = await supabase.from("ai_analysis").insert({
    user_id: userId,
    analysis_type: type,
    topic_id: topicId ?? null,
    attempt_id: attemptId ?? null,
    content: content as unknown as import("@/integrations/supabase/types").Json,
  });
  if (error) throw error;
}

export async function getRecentAnalysis(
  userId: string,
  type?: string,
  limit = 5
): Promise<AIAnalysis[]> {
  let query = supabase
    .from("ai_analysis")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);
  if (type) query = query.eq("analysis_type", type);
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as AIAnalysis[];
}
