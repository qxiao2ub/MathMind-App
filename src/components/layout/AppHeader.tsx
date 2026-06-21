import { useState, useEffect } from "react";
import { Flame, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { MathMindLogo } from "@/components/MathMindLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { getUserStreak } from "@/lib/streakApi";

export function AppHeader() {
  const { user } = useAuth();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (user) {
      getUserStreak(user.id).then((s) => setStreak(s.current_streak)).catch(() => {});
    } else {
      setStreak(0);
    }
  }, [user]);

  return (
    <header className="sticky top-0 z-50 glass-card border-x-0 border-t-0 rounded-none">
      <div className="flex items-center h-12 sm:h-14 lg:h-16 px-4 sm:px-6 lg:px-8">
        {/* Mobile: logo + wordmark (sidebar hidden on mobile) */}
        <div className="flex items-center gap-2 lg:hidden">
          <MathMindLogo size="sm" />
          <span className="font-display text-sm font-bold text-foreground">MathMind</span>
        </div>

        <div className="flex-1" />

        {/* Right side: streak + divider + sign-in (guests) + theme toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {streak > 0 && (
            <div
              title={`${streak}-day streak`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold"
            >
              <Flame className="w-3.5 h-3.5 text-accent-foreground" />
              {streak}
            </div>
          )}
          <span className="hidden sm:inline-block h-5 w-px bg-border/60" aria-hidden="true" />
          {!user && (
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors focus-ring"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign in</span>
            </Link>
          )}
          <span className="focus-ring inline-flex rounded-full">
            <ThemeToggle size="sm" />
          </span>
        </div>
      </div>
    </header>
  );
}
