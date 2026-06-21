import { supabase } from "@/integrations/supabase/client";

export interface LearnActivity {
  id: string;
  user_id: string;
  year_level: string;
  chapter_name: string;
  topic_name: string;
  lesson_name: string;
  lesson_index: number;
  topic_id: string;
  duration_seconds: number;
  completion_percentage: number;
  is_completed: boolean;
  created_at: string;
}

export async function saveLearnActivity(activity: {
  year_level: string;
  chapter_name: string;
  topic_name: string;
  lesson_name: string;
  lesson_index: number;
  topic_id: string;
  duration_seconds: number;
  completion_percentage: number;
  is_completed: boolean;
}): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { error } = await supabase.from("learn_activities").insert({
    user_id: user.id,
    ...activity,
  } as any);
  if (error) console.error("Failed to save learn activity:", error);
}

export async function getLearnHistory(
  filters: { topicName?: string; dateRange?: string } = {},
  limit = 20,
  offset = 0
): Promise<{ data: LearnActivity[]; count: number }> {
  let query = supabase
    .from("learn_activities")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (filters.topicName) {
    query = query.eq("topic_name", filters.topicName);
  }
  if (filters.dateRange && filters.dateRange !== "all") {
    const days = parseInt(filters.dateRange);
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
    query = query.gte("created_at", cutoff);
  }

  const { data, error, count } = await query;
  if (error) throw error;
  return { data: (data || []) as unknown as LearnActivity[], count: count || 0 };
}

export async function getLearnStats(): Promise<{
  totalMinutes: number;
  totalCompleted: number;
  streakDays: number;
  weeklyMinutes: number;
  mostStudiedChapter: string;
  lastActivity: string | null;
}> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { totalMinutes: 0, totalCompleted: 0, streakDays: 0, weeklyMinutes: 0, mostStudiedChapter: "—", lastActivity: null };

  // Get all learn activities
  const { data } = await supabase
    .from("learn_activities")
    .select("*")
    .eq("is_completed", true)
    .order("created_at", { ascending: false });

  const activities = (data || []) as unknown as LearnActivity[];

  const totalSeconds = activities.reduce((s, a) => s + (a.duration_seconds || 0), 0);
  const totalCompleted = activities.length;

  // Weekly minutes
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const weeklySeconds = activities
    .filter(a => a.created_at >= weekAgo)
    .reduce((s, a) => s + (a.duration_seconds || 0), 0);

  // Streak calculation
  const uniqueDays = [...new Set(activities.map(a =>
    new Date(a.created_at).toLocaleDateString("en-AU")
  ))].sort((a, b) => {
    const da = new Date(a.split("/").reverse().join("-"));
    const db = new Date(b.split("/").reverse().join("-"));
    return db.getTime() - da.getTime();
  });

  let streakDays = 0;
  const today = new Date();
  for (let i = 0; i < uniqueDays.length; i++) {
    const expected = new Date(today);
    expected.setDate(today.getDate() - i);
    const expStr = expected.toLocaleDateString("en-AU");
    if (uniqueDays.includes(expStr)) {
      streakDays++;
    } else {
      break;
    }
  }

  // Most studied chapter
  const chapterCounts: Record<string, number> = {};
  activities.forEach(a => {
    chapterCounts[a.chapter_name] = (chapterCounts[a.chapter_name] || 0) + 1;
  });
  const mostStudiedChapter = Object.entries(chapterCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  return {
    totalMinutes: Math.round(totalSeconds / 60),
    totalCompleted,
    streakDays,
    weeklyMinutes: Math.round(weeklySeconds / 60),
    mostStudiedChapter,
    lastActivity: activities[0]?.created_at || null,
  };
}
