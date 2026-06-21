import { supabase } from "@/integrations/supabase/client";
import { XP_RULES, XpSource } from "./xpRules";
import { BADGE_MAP } from "./badges";

export interface AwardResult {
  duplicate: boolean;
  awarded: number;
  stars_awarded: number;
  total_xp: number;
  level: number;
  leveled_up: boolean;
  previous_level: number;
  unlockedBadges: string[];
}

interface AwardOptions {
  amount: number;
  source: XpSource;
  stars?: number;
  metadata?: Record<string, unknown>;
  idempotencyKey?: string;
  silent?: boolean;
}

type Listener = (r: AwardResult) => void;
const listeners = new Set<Listener>();

export function onXpAward(fn: Listener) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

async function unlockBadgesIfEarned(_userId: string, totalXp: number): Promise<string[]> {
  const candidates: string[] = [];
  if (totalXp >= 1000) candidates.push("xp_1000");
  if (totalXp >= 5000) candidates.push("xp_5000");
  const unlocked: string[] = [];
  for (const key of candidates) {
    const { data } = await supabase.rpc("unlock_badge", { _badge_key: key });
    if ((data as { unlocked?: boolean } | null)?.unlocked) unlocked.push(key);
  }
  return unlocked;
}

export async function awardXp(opts: AwardOptions): Promise<AwardResult | null> {
  const { data: userResp } = await supabase.auth.getUser();
  const user = userResp?.user;
  if (!user) return null; // Guests don't earn XP.
  if (opts.amount <= 0) return null;

  const { data, error } = await supabase.rpc("award_xp", {
    _amount: opts.amount,
    _source: opts.source,
    _stars: opts.stars ?? 0,
    _metadata: (opts.metadata ?? {}) as never,
    _idempotency_key: opts.idempotencyKey ?? null,
  });
  if (error) {
    console.error("award_xp error", error);
    return null;
  }
  const payload = data as {
    duplicate: boolean;
    awarded?: number;
    stars_awarded?: number;
    total_xp?: number;
    level?: number;
    leveled_up?: boolean;
    previous_level?: number;
  };

  const unlocked = payload.duplicate ? [] : await unlockBadgesIfEarned(user.id, payload.total_xp ?? 0);

  const result: AwardResult = {
    duplicate: payload.duplicate,
    awarded: payload.awarded ?? 0,
    stars_awarded: payload.stars_awarded ?? 0,
    total_xp: payload.total_xp ?? 0,
    level: payload.level ?? 1,
    leveled_up: payload.leveled_up ?? false,
    previous_level: payload.previous_level ?? 1,
    unlockedBadges: unlocked,
  };

  if (!opts.silent && !result.duplicate) {
    listeners.forEach((l) => l(result));
  }
  return result;
}

export async function unlockBadge(key: string) {
  if (!BADGE_MAP[key]) return;
  const { data: userResp } = await supabase.auth.getUser();
  if (!userResp?.user) return;
  const { data } = await supabase.rpc("unlock_badge", { _badge_key: key });
  if (!(data as { unlocked?: boolean } | null)?.unlocked) return;
  listeners.forEach((l) =>
    l({
      duplicate: false,
      awarded: 0,
      stars_awarded: 0,
      total_xp: 0,
      level: 1,
      leveled_up: false,
      previous_level: 1,
      unlockedBadges: [key],
    }),
  );
}

export { XP_RULES };
