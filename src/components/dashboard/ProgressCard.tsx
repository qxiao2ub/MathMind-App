interface ProgressCardProps {
  title: string;
  value: number;
  maxValue: number;
  subtitle: string;
  icon: React.ReactNode;
  color?: "primary" | "accent";
  loading?: boolean;
}

export function ProgressCard({ title, value, maxValue, subtitle, icon, loading = false }: ProgressCardProps) {
  const percentage = Math.min(100, Math.round((value / maxValue) * 100));

  if (loading) {
    return (
      <div className="stat-card h-full flex flex-col p-3 sm:p-4 lg:p-5 animate-pulse">
        <div className="h-9 w-9 rounded-lg bg-muted mb-3" />
        <div className="h-7 w-20 rounded bg-muted mb-2" />
        <div className="h-3 w-24 rounded bg-muted mb-4" />
        <div className="mt-auto h-1.5 w-full rounded-full bg-muted" />
      </div>
    );
  }

  return (
    <div className="stat-card animate-slide-up h-full flex flex-col p-3 sm:p-4 lg:p-5 group hover:shadow-md transition-shadow duration-200">
      {/* Icon row */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
          <span className="[&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-primary">{icon}</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full tabular-nums">
          {percentage}%
        </span>
      </div>

      {/* Value */}
      <div className="flex-1">
        <p className="font-display text-2xl sm:text-3xl font-bold leading-none tabular-nums">
          <span className="tabular-nums">{value}</span>
          <span className="text-sm sm:text-base text-muted-foreground font-normal ml-0.5">/{maxValue}</span>
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug line-clamp-1">{title}</p>
      </div>

      {/* Progress bar + subtitle */}
      <div className="mt-3 pt-3 border-t border-border/50">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] sm:text-xs text-muted-foreground truncate pr-2">{subtitle}</p>
          <span className="text-[10px] sm:text-xs font-semibold text-primary tabular-nums shrink-0">{percentage}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
