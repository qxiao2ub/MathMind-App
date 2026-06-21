import { useGamification } from "@/hooks/useGamification";
import { XPBar } from "./XPBar";
import { StarsChip, StreakChip, LevelChip } from "./StatChip";
import { Star, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { progressToNext } from "@/lib/gamification/levels";

/**
 * Compact gamification summary card — drop into Dashboard and Profile.
 */
export function GamificationPanel() {
  const { user } = useAuth();
  const { xp, streak, goal, loading } = useGamification();
  const isMobile = useIsMobile();

  if (!user) {
    return (
      <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
        <h3 className="font-display text-lg font-bold">Earn XP, climb the ranks</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Sign in to start earning XP, stars, and badges as you study.
        </p>
        <Link
          to="/login"
          className="mt-3 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90"
        >
          Sign in
        </Link>
      </div>
    );
  }

  if (loading || !xp) {
    return <div className="h-32 animate-pulse rounded-3xl border border-border bg-muted/30" />;
  }

  const goalPct = goal && goal.goal_xp > 0 ? Math.min(100, Math.round((goal.xp_earned / goal.goal_xp) * 100)) : 0;
  const next = progressToNext(xp.total_xp);
  const safePct = Math.min(100, Math.max(0, Math.round(next.percent)));

  return (
    <>
      {/* Mobile compact strip */}
      {isMobile && (
        <section className="lg:hidden flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Star className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <p className="font-display text-sm font-bold leading-none">Level {xp.level}</p>
              <p className="text-[11px] text-muted-foreground tabular-nums truncate">
                {xp.total_xp.toLocaleString()} XP
              </p>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
                style={{ width: `${safePct}%` }}
              />
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">
              {next.needed} XP to next
            </p>
          </div>
          <Link
            to="/leaderboard"
            aria-label="View rankings"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary transition hover:bg-muted"
          >
            <Trophy className="h-4 w-4" />
          </Link>
        </section>
      )}

      {/* Desktop full card */}
      <section className="hidden lg:block rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your progression</p>
            <h2 className="mt-1 font-display text-lg font-bold sm:text-xl">
              Level {xp.level} · {xp.total_xp.toLocaleString()} XP
            </h2>
          </div>
          <Link
            to="/leaderboard"
            className="inline-flex items-center gap-1 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-muted"
          >
            <Trophy className="h-3.5 w-3.5" /> Rankings
          </Link>
        </div>

        <div className="mt-4">
          <XPBar totalXp={xp.total_xp} />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <LevelChip value={xp.level} />
          <StarsChip value={xp.stars} />
          <StreakChip value={streak?.current ?? 0} />
        </div>

        {goal && (
          <div className="mt-5 rounded-2xl border border-border/70 bg-background/60 p-3">
            <div className="mb-1.5 flex items-center justify-between text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Target className="h-3.5 w-3.5" /> Daily goal
              </span>
              <span className="font-bold text-foreground tabular-nums">
                {goal.xp_earned} / {goal.goal_xp} XP
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-success transition-all duration-700"
                style={{ width: `${goalPct}%` }}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
