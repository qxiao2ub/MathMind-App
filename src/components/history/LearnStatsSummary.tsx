import { useState, useEffect } from "react";
import { BookOpen, Clock, Flame, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getLearnStats } from "@/lib/learnActivityApi";

export default function LearnStatsSummary() {
  const [stats, setStats] = useState<{
    totalMinutes: number;
    totalCompleted: number;
    streakDays: number;
    weeklyMinutes: number;
    mostStudiedChapter: string;
    lastActivity: string | null;
  } | null>(null);

  useEffect(() => {
    getLearnStats().then(setStats).catch(console.error);
  }, []);

  if (!stats) return null;

  const cards = [
    { icon: Clock, label: "Total Learn Time", value: `${stats.totalMinutes} min`, color: "text-primary" },
    { icon: Trophy, label: "Lessons Completed", value: String(stats.totalCompleted), color: "text-[hsl(var(--success))]" },
    { icon: Flame, label: "Learning Streak", value: `${stats.streakDays} day${stats.streakDays !== 1 ? "s" : ""}`, color: "text-destructive" },
    { icon: BookOpen, label: "This Week", value: `${stats.weeklyMinutes} min`, color: "text-accent-foreground dark:text-accent" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-slide-up">
      {cards.map(c => (
        <Card key={c.label} className="border-border/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <c.icon className={`w-4 h-4 ${c.color}`} />
            </div>
            <div>
              <p className={`text-lg font-bold ${c.color}`}>{c.value}</p>
              <p className="text-xs text-muted-foreground">{c.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
