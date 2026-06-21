import { ChevronRight, Award, CheckCircle2, Lock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Category } from "@/data/curriculum";
import { TopicCard } from "./TopicCard";
import { getCategoryCompletionPercent, areAllTopicsComplete, isCategoryQuizComplete, isChapterMastered } from "@/data/topicLessons";
import { hasCategoryQuiz } from "@/data/categoryQuizQuestions";
import { isSecondaryGroupMember } from "@/config/topicGroups";

interface CategorySectionProps {
  category: Category;
  yearId: string;
  chapterIndex?: number;
}

export function CategorySection({ category, yearId, chapterIndex }: CategorySectionProps) {
  const categoryProgress = getCategoryCompletionPercent(category.topics);
  const allTopicsDone = areAllTopicsComplete(category.topics);
  const categoryQuizDone = isCategoryQuizComplete(category.id);
  const hasQuiz = hasCategoryQuiz(category.id);
  const mastered = isChapterMastered(category.id, category.topics);

  const chNumMatch = category.name.match(/^Ch\s*(\d+)/i);
  const chapterNum = chNumMatch ? parseInt(chNumMatch[1]) : chapterIndex;

  return (
    <section className="animate-slide-up">
      {/* Chapter card header */}
      <div className="rounded-xl sm:rounded-2xl bg-card border border-border/50 overflow-hidden">
        {/* Chapter heading */}
        <div className="px-3 py-3 sm:px-5 sm:py-4 border-b border-border/30">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
              {category.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-display text-sm sm:text-base font-bold text-foreground truncate max-w-[60vw] sm:max-w-none">{category.name}</h2>
                {mastered && (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] border border-[hsl(var(--success))]/20">
                    <Shield className="w-3 h-3" /> Mastered
                  </span>
                )}
                {categoryQuizDone && !mastered && (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent-foreground border border-accent/20">
                    <Award className="w-3 h-3" /> Completed
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex-1 min-w-0 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      categoryProgress === 100
                        ? "bg-[hsl(var(--success))]"
                        : categoryProgress > 0
                        ? "bg-primary"
                        : "bg-muted-foreground/20"
                    }`}
                    style={{ width: `${categoryProgress}%` }}
                  />
                </div>
                <span className={`text-xs font-semibold tabular-nums shrink-0 ${
                  categoryProgress === 100 ? "text-[hsl(var(--success))]" : "text-muted-foreground"
                }`}>
                  {categoryProgress}%
                </span>
                <span className="text-[10px] text-muted-foreground shrink-0">
                  · {category.topics.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Topic list */}
        <div className="divide-y divide-border/30">
          {category.topics
            .filter((topic) => !isSecondaryGroupMember(topic.id))
            .map((topic) => (
              <TopicCard
                key={topic.id}
                id={topic.id}
                yearId={yearId}
                title={topic.title}
                description={topic.description}
                progress={topic.progress}
                lessons={topic.lessons}
                icon={topic.icon}
                level={topic.level}
                allTopics={category.topics}
              />
            ))}
        </div>

        {/* Category Mastery Quiz */}
        {hasQuiz && (
          <div className="border-t border-border/30">
            {categoryQuizDone ? (
              <div className="px-4 py-3 sm:px-5 sm:py-4 bg-[hsl(var(--success))]/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[hsl(var(--success))]/15 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4.5 h-4.5 text-[hsl(var(--success))]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">{mastered ? "Chapter Mastered ✓" : "Quiz Completed ✓"}</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                      {mastered 
                        ? "All lessons done + ≥85% on review quiz" 
                        : "Score ≥85% with all lessons to earn mastery"}
                    </p>
                  </div>
                  <Link
                    to={`/learn/${yearId}/category-quiz/${category.id}`}
                    className="text-xs font-semibold text-primary hover:underline flex-shrink-0"
                  >
                    Retake
                  </Link>
                </div>
              </div>
            ) : allTopicsDone ? (
              <Link
                to={`/learn/${yearId}/category-quiz/${category.id}`}
                className="block px-4 py-3 sm:px-5 sm:py-4 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">Take Chapter Review Quiz</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                      All topics complete — score ≥85% for mastery
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
              </Link>
            ) : (
              <div className="px-4 py-3 sm:px-5 sm:py-4 opacity-50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-muted-foreground">Chapter Review — Locked</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">Complete all topics to unlock</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
