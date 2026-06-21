import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { onXpAward } from "@/lib/gamification/awardXp";

export interface XpState {
  total_xp: number;
  level: number;
  stars: number;
  weekly_xp: number;
  monthly_xp: number;
}

export interface DailyGoal {
  goal_xp: number;
  xp_earned: number;
}

export function useGamification() {
  const { user } = useAuth();
  const [xp, setXp] = useState<XpState | null>(null);
  const [badges, setBadges] = useState<string[]>([]);
  const [streak, setStreak] = useState<{ current: number; longest: number } | null>(null);
  const [goal, setGoal] = useState<DailyGoal | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!user) {
      setXp(null);
      setBadges([]);
      setStreak(null);
      setGoal(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    const today = new Date().toISOString().slice(0, 10);
    const [xpRes, badgeRes, streakRes, goalRes] = await Promise.all([
      supabase.from("user_xp").select("total_xp,level,stars,weekly_xp,monthly_xp").eq("user_id", user.id).maybeSingle(),
      supabase.from("user_badges").select("badge_key").eq("user_id", user.id),
      supabase.from("user_streaks").select("current_streak,longest_streak").eq("user_id", user.id).maybeSingle(),
      supabase.from("user_daily_goals").select("goal_xp,xp_earned").eq("user_id", user.id).eq("goal_date", today).maybeSingle(),
    ]);
    setXp((xpRes.data as XpState | null) ?? { total_xp: 0, level: 1, stars: 0, weekly_xp: 0, monthly_xp: 0 });
    setBadges((badgeRes.data ?? []).map((b) => b.badge_key));
    setStreak(
      streakRes.data
        ? { current: streakRes.data.current_streak ?? 0, longest: streakRes.data.longest_streak ?? 0 }
        : { current: 0, longest: 0 },
    );
    setGoal((goalRes.data as DailyGoal | null) ?? { goal_xp: 50, xp_earned: 0 });
    setLoading(false);
  }, [user]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    const off = onXpAward(() => refresh());
    return () => {
      off();
    };
  }, [refresh]);

  return { xp, badges, streak, goal, loading, refresh };
}
