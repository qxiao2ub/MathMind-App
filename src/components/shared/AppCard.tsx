import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds hover lift + border highlight. Use for clickable cards. */
  interactive?: boolean;
  /** Padding preset. `none` = no padding. */
  padding?: "none" | "sm" | "md" | "lg";
  /** Visual elevation. */
  elevation?: "flat" | "card" | "soft";
}

const padMap = {
  none: "",
  sm: "p-3 sm:p-4",
  md: "p-4 sm:p-5",
  lg: "p-5 sm:p-6 lg:p-8",
} as const;

const elevMap = {
  flat: "",
  card: "shadow-[var(--shadow-card)]",
  soft: "shadow-[var(--shadow-soft)]",
} as const;

/**
 * AppCard — canonical surface primitive. Uses semantic tokens so it
 * stays correct in light + dark mode. Add `interactive` for clickable
 * cards to get a subtle border highlight and lift.
 */
export const AppCard = forwardRef<HTMLDivElement, AppCardProps>(
  ({ className, interactive, padding = "none", elevation = "card", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border/60 bg-card text-card-foreground transition-all duration-200",
        elevMap[elevation],
        padMap[padding],
        interactive &&
          "cursor-pointer hover:border-primary/40 hover:shadow-[var(--shadow-soft)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      {...props}
    />
  )
);
AppCard.displayName = "AppCard";
