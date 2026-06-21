import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { YearLevel } from "@/data/curriculum";
import { getYearCompletionPercent } from "@/data/topicLessons";

interface YearCardProps {
  year: YearLevel;
  defaultOpen?: boolean;
}

function getVceBadge(id: string): string | null {
  if (id.startsWith("year-11")) return "VCE Unit 1/2";
  if (id.startsWith("year-12")) return "VCE Unit 3/4";
  return null;
}

export function YearCard({ year }: YearCardProps) {
  const totalTopics = year.categories.reduce((sum, cat) => sum + cat.topics.length, 0);
  const yearProgress = getYearCompletionPercent(year.categories);
  const vceBadge = getVceBadge(year.id);

  return (
    <Link
      to={`/learn/${year.id}`}
      className="card-learning block group hover:border-primary/30 transition-all duration-200 active:scale-[0.98]"
    >
      {/* Mobile: stacked layout / Desktop: row layout */}
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:scale-105 transition-transform">
          {year.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-center gap-2 mb-0.5">
            <h2 className="font-display text-base sm:text-xl font-bold truncate">{year.name}</h2>
            {vceBadge && (
              <span className="text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded bg-secondary/60 text-secondary-foreground shrink-0">
                {vceBadge}
              </span>
            )}
          </div>

          {/* Description – clamped */}
          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3 leading-relaxed">
            {year.description}
          </p>

          {/* Stats chips */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
            <span className="text-[11px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary font-semibold">
              {year.categories.length} chapters
            </span>
            <span className="text-[11px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full bg-accent/40 text-accent-foreground font-semibold">
              {totalTopics} topics
            </span>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2.5">
            <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${yearProgress}%`,
                  background: yearProgress === 0
                    ? "hsl(var(--muted-foreground) / 0.3)"
                    : yearProgress === 100
                      ? "hsl(var(--success))"
                      : "hsl(var(--primary))",
                }}
              />
            </div>
            <span className="text-xs font-semibold text-primary tabular-nums w-8 text-right">
              {yearProgress}%
            </span>
          </div>
        </div>

        {/* Chevron */}
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1 sm:mt-2" />
      </div>
    </Link>
  );
}
