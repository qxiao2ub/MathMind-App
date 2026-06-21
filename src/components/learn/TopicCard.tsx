import { ChevronRight, CheckCircle2, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { getTopicCompletionPercent, isTopicQuizComplete } from "@/data/topicLessons";
import { topicLessons } from "@/data/topicLessons";
import { getTopicGroup } from "@/config/topicGroups";
import { Topic } from "@/data/curriculum";

interface TopicCardProps {
  id: string;
  yearId: string;
  title: string;
  description: string;
  progress: number;
  lessons: number;
  isLocked?: boolean;
  icon: string;
  level?: "core" | "10A";
  allTopics?: Topic[];
}

export function TopicCard({ id, yearId, title, description, progress, lessons, isLocked, icon, level, allTopics }: TopicCardProps) {
  const group = getTopicGroup(id);

  // Resolve display values based on grouping
  let displayTitle = title;
  let displayDescription = description;
  let displayIcon = icon;
  let totalLessons = (topicLessons[id] || []).length || lessons;
  let dynamicProgress: number;
  let topicQuizDone: boolean;
  let displayLevel = level;

  if (group && allTopics) {
    displayTitle = group.displayTitle;
    displayDescription = group.description;
    displayIcon = group.icon;

    // Sum lessons across all grouped topics
    totalLessons = group.topicIds.reduce((sum, tid) => {
      const topicData = allTopics.find((t) => t.id === tid);
      const lessonData = topicLessons[tid] || [];
      return sum + (lessonData.length || topicData?.lessons || 0);
    }, 0);

    // Average progress across grouped topics
    const progresses = group.topicIds.map((tid) => {
      const topicData = allTopics.find((t) => t.id === tid);
      const tLessons = (topicLessons[tid] || []).length || topicData?.lessons || 0;
      return getTopicCompletionPercent(tid, tLessons);
    });
    dynamicProgress = Math.round(progresses.reduce((a, b) => a + b, 0) / progresses.length);
    topicQuizDone = group.topicIds.every((tid) => isTopicQuizComplete(tid));

    // If any grouped topic is 10A, show 10A badge
    if (group.topicIds.some((tid) => allTopics.find((t) => t.id === tid)?.level === "10A")) {
      displayLevel = "10A";
    }
  } else {
    dynamicProgress = getTopicCompletionPercent(id, totalLessons);
    topicQuizDone = isTopicQuizComplete(id);
  }

  const isComplete = dynamicProgress === 100;

  const progressBarColor = isComplete
    ? "bg-[hsl(var(--success))]"
    : dynamicProgress > 0
    ? "bg-primary"
    : "bg-muted-foreground/20";
  
  if (isLocked) {
    return (
      <div className="px-4 py-3 sm:px-5 sm:py-4 opacity-50 cursor-not-allowed">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-muted flex items-center justify-center text-base flex-shrink-0">
            <Lock className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-muted-foreground truncate">{displayTitle}</h3>
            <p className="text-[11px] text-muted-foreground mt-0.5">Complete previous topics to unlock</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Link
      to={`/learn/${yearId}/${id}`}
      className="flex items-center gap-3 px-3 py-3 sm:px-5 sm:py-4 hover:bg-muted/40 active:bg-muted/60 transition-colors group min-w-0"
    >
      {/* Icon */}
      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base sm:text-lg flex-shrink-0 transition-colors ${
        isComplete ? 'bg-[hsl(var(--success))]/15' : 'bg-primary/10'
      }`}>
        {isComplete ? <CheckCircle2 className="w-4.5 h-4.5 text-[hsl(var(--success))]" /> : displayIcon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="text-sm font-semibold text-foreground truncate">{displayTitle}</h3>
          {displayLevel === "10A" && (
            <span className="flex-shrink-0 text-[9px] font-bold px-1.5 py-px rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25">
              10A
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0 h-1 rounded-full bg-muted overflow-hidden sm:max-w-[200px]">
            <div
              className={`h-full rounded-full transition-all duration-500 ${progressBarColor}`}
              style={{ width: `${dynamicProgress}%` }}
            />
          </div>
          <span className={`text-[11px] font-semibold tabular-nums shrink-0 ${
            isComplete ? "text-[hsl(var(--success))]" : "text-muted-foreground"
          }`}>
            {dynamicProgress}%
          </span>
          <span className="hidden xs:inline text-[10px] text-muted-foreground shrink-0">
            · {totalLessons}{topicQuizDone ? " ·✓" : ""}
          </span>
        </div>
      </div>

      {/* Chevron */}
      <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground flex-shrink-0 transition-colors" />
    </Link>
  );
}
