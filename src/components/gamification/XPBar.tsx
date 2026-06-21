import { progressToNext } from "@/lib/gamification/levels";
import { cn } from "@/lib/utils";

interface XPBarProps {
  totalXp: number;
  compact?: boolean;
  className?: string;
}

export function XPBar({ totalXp, compact, className }: XPBarProps) {
  const p = progressToNext(totalXp);
  return (
    <div className={cn("w-full", className)}>
      <div className="mb-1.5 flex items-center justify-between text-xs font-medium">
        <span className="font-bold text-foreground">Level {p.level}</span>
        <span className="tabular-nums text-muted-foreground">
          {compact ? `${totalXp} XP` : `${p.into} / ${p.span} XP`}
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-700"
          style={{ width: `${p.percent}%` }}
        />
      </div>
      {!compact && (
        <p className="mt-1 text-xs text-muted-foreground">
          {p.needed} XP to Level {p.nextLevel}
        </p>
      )}
    </div>
  );
}
