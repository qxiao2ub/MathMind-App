import { BADGES, BADGE_MAP } from "@/lib/gamification/badges";
import { cn } from "@/lib/utils";

interface Props {
  unlocked: string[];
  className?: string;
}

export function AchievementGrid({ unlocked, className }: Props) {
  const owned = new Set(unlocked);
  return (
    <div className={cn("grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5", className)}>
      {BADGES.map((b) => {
        const has = owned.has(b.key);
        return (
          <div
            key={b.key}
            className={cn(
              "flex flex-col items-center gap-1 rounded-2xl border p-3 text-center transition",
              has
                ? "border-primary/30 bg-primary/5"
                : "border-dashed border-border bg-muted/30 opacity-60 saturate-0",
            )}
            title={b.description}
          >
            <span className="text-2xl" aria-hidden>
              {b.emoji}
            </span>
            <span className="text-[10px] font-semibold leading-tight">{b.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export function RecentBadgesRow({ unlocked }: { unlocked: string[] }) {
  const last = unlocked.slice(-5).reverse();
  if (last.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No badges yet — complete a lesson to earn your first one.</p>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {last.map((k) => {
        const b = BADGE_MAP[k];
        if (!b) return null;
        return (
          <div
            key={k}
            className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold"
          >
            <span aria-hidden>{b.emoji}</span>
            {b.name}
          </div>
        );
      })}
    </div>
  );
}
