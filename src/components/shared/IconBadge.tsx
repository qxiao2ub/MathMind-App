import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "primary" | "accent" | "success" | "warning" | "info" | "muted" | "destructive";
type Size = "sm" | "md" | "lg";

interface IconBadgeProps {
  icon: ReactNode;
  tone?: Tone;
  size?: Size;
  className?: string;
  label?: string;
}

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/15 text-accent-foreground dark:text-accent",
  success: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]",
  warning: "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]",
  info: "bg-[hsl(var(--info))]/15 text-[hsl(var(--info))]",
  muted: "bg-muted text-muted-foreground",
  destructive: "bg-destructive/10 text-destructive",
};

const sizeClasses: Record<Size, string> = {
  sm: "w-8 h-8 rounded-lg [&_svg]:w-4 [&_svg]:h-4",
  md: "w-10 h-10 rounded-xl [&_svg]:w-5 [&_svg]:h-5",
  lg: "w-12 h-12 rounded-2xl [&_svg]:w-6 [&_svg]:h-6",
};

export function IconBadge({ icon, tone = "primary", size = "md", className, label }: IconBadgeProps) {
  return (
    <span
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        toneClasses[tone],
        sizeClasses[size],
        className
      )}
    >
      {icon}
    </span>
  );
}
