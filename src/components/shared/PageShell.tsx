import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg";
}

const spaceMap = {
  sm: "space-y-3",
  md: "space-y-4 sm:space-y-5",
  lg: "space-y-5 sm:space-y-6 lg:space-y-8",
} as const;

/** Standard vertical-stack container used to space sections inside a page. */
export function ContentSection({ children, className, spacing = "md" }: ContentSectionProps) {
  return <section className={cn(spaceMap[spacing], className)}>{children}</section>;
}

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

/** Page-level wrapper that gives every screen the same vertical rhythm. */
export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={cn("space-y-5 sm:space-y-6 lg:space-y-8 pb-8", className)}>
      {children}
    </div>
  );
}
