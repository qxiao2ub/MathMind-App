import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { awardXp } from "@/lib/gamification/awardXp";
import { XP_RULES } from "@/lib/gamification/xpRules";
import { supabase } from "@/integrations/supabase/client";

/**
 * Awards a once-per-day login XP bonus and, when a user just hit a 7-day
 * streak, the streak milestone bonus. Mount once near the app root.
 */
export function DailyLoginRewards() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const today = new Date().toISOString().slice(0, 10);

    awardXp({
      amount: XP_RULES.DAILY_LOGIN,
      source: "daily_login",
      idempotencyKey: `daily_login:${today}`,
    }).then(async () => {
      // Update streak (existing RPC) then check 7-day milestone.
      await supabase.rpc("update_user_streak", { p_user_id: user.id });
      const { data: streak } = await supabase
        .from("user_streaks")
        .select("current_streak")
        .eq("user_id", user.id)
        .maybeSingle();
      const cs = streak?.current_streak ?? 0;
      if (cs > 0 && cs % 7 === 0) {
        // Weekly milestone — idempotent per (user, today).
        await awardXp({
          amount: XP_RULES.STREAK_7_DAY,
          source: "streak_7_day",
          stars: 1,
          idempotencyKey: `streak_7:${today}:${cs}`,
        });
      }
    });
  }, [user]);

  return null;
}
