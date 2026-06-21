import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AppCard } from "./AppCard";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <AppCard className={cn("p-8 sm:p-10 text-center", className)}>
      {icon && (
        <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
          {description}
        </p>
      )}
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </AppCard>
  );
}
