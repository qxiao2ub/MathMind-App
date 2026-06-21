import { useEffect, useState } from "react";
import { Clock, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getLearnHistory, type LearnActivity } from "@/lib/learnActivityApi";
import { Skeleton } from "@/components/ui/skeleton";

interface TopicRow {
  id: string;
  title: string;
  subject: string;
  progress: number;
  lastStudied: string;
  emoji: string;
}

const fallbackTopics: TopicRow[] = [
  { id: "1", title: "Quadratic Equations", subject: "Algebra", progress: 75, lastStudied: "2 hours ago", emoji: "📐" },
  { id: "2", title: "Pythagorean Theorem", subject: "Geometry", progress: 100, lastStudied: "Yesterday", emoji: "📏" },
  { id: "3", title: "Linear Functions", subject: "Functions", progress: 45, lastStudied: "2 days ago", emoji: "📈" },
];

function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const hours = diffMs / (1000 * 60 * 60);
  if (hours < 1) return "Just now";
  if (hours < 24) {
    const h = Math.floor(hours);
    return `${h} hour${h === 1 ? "" : "s"} ago`;
  }
  if (hours < 48) return "Yesterday";
  const days = Math.floor(hours / 24);
  return `${days} days ago`;
}

function mapActivity(a: LearnActivity): TopicRow {
  return {
    id: a.id,
    title: a.topic_name || a.lesson_name || "Topic",
    subject: a.chapter_name || "",
    progress: typeof a.completion_percentage === "number" ? Math.round(a.completion_percentage) : 50,
    lastStudied: relativeTime(a.created_at),
    emoji: "📚",
  };
}

function ProgressPill({ progress }: { progress: number }) {
  const color =
    progress === 100
      ? "bg-success text-success-foreground"
      : progress >= 60
        ? "bg-primary text-primary-foreground"
        : "bg-accent text-accent-foreground";
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold tabular-nums ${color}`}
    >
      {progress === 100 ? "✓ Done" : `${progress}%`}
    </span>
  );
}

export function RecentTopics() {
  const { user } = useAuth();
  const [topics, setTopics] = useState<TopicRow[] | null>(user ? null : fallbackTopics);
  const [loading, setLoading] = useState<boolean>(!!user);

  useEffect(() => {
    if (!user) {
      setTopics(fallbackTopics);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    getLearnHistory({}, 3, 0)
      .then(({ data }) => {
        if (cancelled) return;
        if (data && data.length > 0) {
          setTopics(data.map(mapActivity));
        } else {
          setTopics(fallbackTopics);
        }
      })
      .catch(() => {
        if (!cancelled) setTopics(fallbackTopics);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  return (
    <div className="card-learning animate-slide-up !p-4 sm:!p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h2 className="font-display text-base sm:text-lg font-bold">Recent Topics</h2>
        <Link
          to="/learn"
          className="group inline-flex items-center gap-1 text-xs sm:text-sm text-primary font-semibold hover:opacity-80 transition-opacity"
        >
          View all
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </Link>
      </div>

      {loading ? (
        <div className="space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 sm:p-3">
              <Skeleton className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-3 w-2/5" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-1 sm:space-y-1.5">
          {(topics ?? fallbackTopics).map((topic, i) => (
            <Link
              key={topic.id}
              to={`/learn`}
              className="group flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl hover:bg-muted/50 active:bg-muted transition-colors duration-150"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0 text-base sm:text-lg group-hover:border-primary/30 transition-colors duration-150">
                {topic.emoji}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-semibold text-sm truncate">{topic.title}</h3>
                  <ProgressPill progress={topic.progress} />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/60 truncate">{topic.subject}</span>
                  <span className="hidden sm:inline text-muted-foreground/40">·</span>
                  <span className="hidden sm:inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {topic.lastStudied}
                  </span>
                </div>
                <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden sm:hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-end gap-1 shrink-0 w-20 lg:w-24">
                <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock className="w-2.5 h-2.5" />
                  {topic.lastStudied}
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-muted-foreground shrink-0 -mr-1 transition-colors duration-150" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
