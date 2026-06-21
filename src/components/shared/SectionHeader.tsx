import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn("min-w-0", isCenter && "max-w-2xl")}>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {action && !isCenter && <div className="shrink-0">{action}</div>}
    </div>
  );
}
