import { supabase } from "@/integrations/supabase/client";

export interface UserStreak {
  current_streak: number;
  longest_streak: number;
  last_activity_date: string | null;
  streak_days: string[];
}

export async function getUserStreak(userId: string): Promise<UserStreak> {
  const { data, error } = await supabase
    .from("user_streaks")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  return data ?? {
    current_streak: 0,
    longest_streak: 0,
    last_activity_date: null,
    streak_days: [],
  };
}

export async function recordActivity(userId: string): Promise<void> {
  await supabase.rpc("update_user_streak", { p_user_id: userId });
}
