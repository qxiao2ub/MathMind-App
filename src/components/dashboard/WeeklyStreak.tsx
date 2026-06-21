import { useState, useEffect } from "react";
import { Flame, Zap } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { getUserStreak } from "@/lib/streakApi";
import { Skeleton } from "@/components/ui/skeleton";

function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);

  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return {
      label: dayLabels[i],
      date: date.getDate(),
      month: monthNames[date.getMonth()],
      fullDate: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
      isToday: dateStart.getTime() === todayStart.getTime(),
      isPast: dateStart < todayStart,
      isFuture: dateStart > todayStart,
    };
  });
}

export function WeeklyStreak() {
  const { user } = useAuth();
  const [currentStreak, setCurrentStreak] = useState(0);
  const [streakDays, setStreakDays] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const weekDates = getWeekDates();

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    getUserStreak(user.id)
      .then((s) => {
        setCurrentStreak(s.current_streak);
        setStreakDays(new Set(s.streak_days));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [user]);

  const weekCompletedCount = weekDates.filter((d) => streakDays.has(d.fullDate)).length;

  if (loading) {
    return (
      <div className="card-learning animate-slide-up space-y-4">
        <Skeleton className="h-10 w-full" />
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="card-learning animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
          </div>
          <div>
            <h2 className="font-display text-base sm:text-lg font-bold leading-tight">Weekly Streak</h2>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              {weekCompletedCount} of 7 days this week
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-display text-2xl sm:text-3xl font-bold text-primary tabular-nums leading-none">
            {currentStreak}
          </span>
          <span className="text-[10px] sm:text-xs text-muted-foreground">day streak</span>
        </div>
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {weekDates.map((day, index) => {
          const completed = streakDays.has(day.fullDate);
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              <span className="text-[9px] sm:text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">
                {day.label}
              </span>

              <div
                className={`
                  relative w-full aspect-square max-w-[44px] rounded-xl flex flex-col items-center justify-center
                  transition-all duration-200
                  ${day.isToday ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
                  ${
                    completed
                      ? "gradient-primary text-primary-foreground shadow-sm"
                      : day.isFuture
                        ? "bg-muted/30 text-muted-foreground/40 border border-dashed border-border"
                        : "bg-muted text-muted-foreground"
                  }
                `}
              >
                <span className="text-xs sm:text-sm font-bold leading-none">{day.date}</span>
                <span className="text-[7px] sm:text-[8px] opacity-70 leading-none mt-0.5">{day.month}</span>
                {completed && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-orange-400 rounded-full flex items-center justify-center shadow-sm">
                    <Zap className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white fill-white" />
                  </span>
                )}
              </div>

              {day.isToday && (
                <span className="text-[8px] sm:text-[9px] font-bold text-primary uppercase tracking-wide">Today</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer message */}
      <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-border/50 flex items-center gap-2">
        <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0" />
        <p className="text-xs sm:text-sm text-muted-foreground">
          {currentStreak > 0
            ? "Study today to keep your streak alive — you're on a roll! 🔥"
            : "Complete a lesson, quiz, or practice to start your streak! 🔥"}
        </p>
      </div>
    </div>
  );
}
