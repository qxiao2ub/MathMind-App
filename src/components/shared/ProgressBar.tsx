import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: "primary" | "success" | "accent";
  showLabel?: boolean;
  label?: string;
}

const sizeMap = { sm: "h-1.5", md: "h-2", lg: "h-2.5" } as const;
const toneMap = {
  primary: "bg-primary",
  success: "bg-[hsl(var(--success))]",
  accent: "bg-accent",
} as const;

export function ProgressBar({
  value,
  max = 100,
  className,
  size = "md",
  tone = "primary",
  showLabel = false,
  label,
}: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="mb-1 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{label}</span>
          <span className="font-semibold tabular-nums text-foreground">{Math.round(pct)}%</span>
        </div>
      )}
      <div
        className={cn("w-full overflow-hidden rounded-full bg-[hsl(var(--progress-bg))]", sizeMap[size])}
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cn("h-full rounded-full transition-[width] duration-500", toneMap[tone])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
