import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AppCard } from "./AppCard";

interface StatCardProps {
  title: string;
  value: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trend?: { value: string; positive?: boolean };
  className?: string;
}

export function StatCard({ title, value, description, icon, trend, className }: StatCardProps) {
  return (
    <AppCard className={cn("p-4 sm:p-5", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate">{title}</p>
          <p className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
            {value}
          </p>
          {description && (
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {icon && (
          <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      {trend && (
        <p
          className={cn(
            "mt-3 inline-flex items-center gap-1 text-xs font-semibold rounded-full px-2 py-0.5",
            trend.positive
              ? "bg-success/15 text-success"
              : "bg-destructive/15 text-destructive"
          )}
        >
          {trend.value}
        </p>
      )}
    </AppCard>
  );
}
