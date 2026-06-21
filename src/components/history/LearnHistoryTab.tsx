import { useState, useEffect, useCallback } from "react";
import { BookOpen, CheckCircle2, Clock, Loader2, ChevronRight } from "lucide-react";
import { getLearnHistory, type LearnActivity } from "@/lib/learnActivityApi";
import type { HistoryFilters } from "@/types/history";
import { cn } from "@/lib/utils";

export default function LearnHistoryTab({ filters }: { filters: HistoryFilters }) {
  const [activities, setActivities] = useState<LearnActivity[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const LIMIT = 20;

  const load = useCallback(async (reset = false) => {
    setLoading(true);
    try {
      const newOffset = reset ? 0 : offset;
      const { data, count } = await getLearnHistory(filters, LIMIT, newOffset);
      if (reset) {
        setActivities(data);
        setOffset(LIMIT);
      } else {
        setActivities((prev) => [...prev, ...data]);
        setOffset((o) => o + LIMIT);
      }
      setTotal(count);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [filters, offset]);

  useEffect(() => {
    setOffset(0);
    load(true);
  }, [filters]);

  if (loading && activities.length === 0) {
    return <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-muted-foreground" /></div>;
  }

  if (activities.length === 0) {
    return <p className="text-muted-foreground text-center py-12">No learn sessions yet. Complete a lesson to see your history here.</p>;
  }

  // Group by date
  const grouped: Record<string, LearnActivity[]> = {};
  activities.forEach(a => {
    const dateKey = new Date(a.created_at).toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    if (!grouped[dateKey]) grouped[dateKey] = [];
    grouped[dateKey].push(a);
  });

  return (
    <>
      <div className="space-y-6 mt-4">
        {Object.entries(grouped).map(([date, items]) => {
          const dailyMins = Math.round(items.reduce((s, a) => s + (a.duration_seconds || 0), 0) / 60);
          return (
            <div key={date}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-foreground">{date}</h3>
                <span className="text-xs text-muted-foreground">{dailyMins} min{dailyMins !== 1 ? "s" : ""} studied</span>
              </div>
              <div className="space-y-2">
                {items.map(a => (
                  <div
                    key={a.id}
                    className="w-full card-learning flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{a.topic_name}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {a.year_level} → {a.chapter_name} → {a.lesson_name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {Math.round((a.duration_seconds || 0) / 60)} min
                      </div>
                      {a.is_completed ? (
                        <CheckCircle2 className="w-5 h-5 text-[hsl(var(--success))]" />
                      ) : (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">In Progress</span>
                      )}
                      <span className="text-xs text-muted-foreground">
                        {new Date(a.created_at).toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {activities.length < total && (
        <button onClick={() => load(false)} disabled={loading} className="w-full py-3 text-sm font-medium text-primary hover:underline disabled:opacity-50 mt-4">
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
}
