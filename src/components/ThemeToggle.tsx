import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

/**
 * Visible light/dark theme toggle.
 * - Uses ThemeContext (persists to localStorage, applies `dark` class to <html>)
 * - Sun shown in dark mode (click to go light), Moon shown in light mode (click to go dark)
 * - Accessible: button with aria-label and aria-pressed
 */
export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const dimensions =
    size === "sm" ? "w-8 h-8" : "w-9 h-9 sm:w-10 sm:h-10";
  const iconSize = size === "sm" ? "w-4 h-4" : "w-4 h-4 sm:w-[18px] sm:h-[18px]";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex items-center justify-center rounded-xl",
        "border border-border bg-card text-muted-foreground",
        "hover:text-foreground hover:bg-muted hover:border-border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "transition-all duration-200",
        dimensions,
        className,
      )}
    >
      {isDark ? (
        <Sun className={cn(iconSize, "text-accent")} aria-hidden="true" />
      ) : (
        <Moon className={cn(iconSize, "text-foreground")} aria-hidden="true" />
      )}
    </button>
  );
}
