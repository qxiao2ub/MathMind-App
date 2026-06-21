import { Star, Flame, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatChip({
  icon: Icon,
  value,
  label,
  tone = "primary",
  className,
}: {
  icon: typeof Star;
  value: number | string;
  label: string;
  tone?: "primary" | "warning" | "success";
  className?: string;
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary/10 text-primary border-primary/20",
    warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    success: "bg-success/10 text-success border-success/20",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold",
        tones[tone],
        className,
      )}
      title={label}
    >
      <Icon className="h-3.5 w-3.5" />
      <span className="tabular-nums">{value}</span>
    </div>
  );
}

export function StarsChip({ value, className }: { value: number; className?: string }) {
  return <StatChip icon={Star} value={value} label="Stars" tone="warning" className={className} />;
}

export function StreakChip({ value, className }: { value: number; className?: string }) {
  return <StatChip icon={Flame} value={value} label="Day streak" tone="warning" className={className} />;
}

export function LevelChip({ value, className }: { value: number; className?: string }) {
  return <StatChip icon={Trophy} value={`Lv ${value}`} label="Level" tone="primary" className={className} />;
}
