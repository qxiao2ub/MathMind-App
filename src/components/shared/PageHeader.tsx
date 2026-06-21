import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: ReactNode;
  eyebrow?: string;
  action?: ReactNode;
  className?: string;
}

export function PageHeader({ title, description, eyebrow, action, className }: PageHeaderProps) {
  return (
    <header className={cn("flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="min-w-0">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-1.5 text-sm sm:text-base text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}
