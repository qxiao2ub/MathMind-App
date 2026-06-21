import { ClipboardList, Info, Play } from "lucide-react";
import { curriculum, Category, Topic } from "@/data/curriculum";
import { hasTopicQuizQuestions } from "@/data/topicQuizQuestions";
import { QUIZ_DIFFICULTIES, QuizDifficulty } from "@/lib/quizUtils";
import { cn } from "@/lib/utils";

const QUESTION_COUNTS = [3, 5, 10, 15, 20] as const;

interface QuizSelectionSetupProps {
  currentStep: number;
  yearLevel: string;
  selectedCategoryId: string | null;
  selectedTopicId: string | null;
  selectedDifficulty: QuizDifficulty;
  selectedCount: number;
  categories: Category[];
  topics: Topic[];
  bankSize: number;
  onSelectYear: (id: string) => void;
  onSelectCategory: (id: string) => void;
  onSelectTopic: (id: string) => void;
  onSelectDifficulty: (difficulty: QuizDifficulty) => void;
  onSelectCount: (count: number) => void;
  onStart: () => void;
  canStart: boolean;
}

/**
 * Quiz selection setup — mirrors the Practice page flow:
 *   1. Year Level
 *   2. Chapter
 *   3. Topic
 *   4. Difficulty
 *   5. Question Count
 *   6. Start Quiz
 */
export function QuizSelectionSetup({
  currentStep,
  yearLevel,
  selectedCategoryId,
  selectedTopicId,
  selectedDifficulty,
  selectedCount,
  categories,
  topics,
  bankSize,
  onSelectYear,
  onSelectCategory,
  onSelectTopic,
  onSelectDifficulty,
  onSelectCount,
  onStart,
  canStart,
}: QuizSelectionSetupProps) {
  return (
    <div className="space-y-6">
      {/* Step 1: Year Level */}
      <div className="card-learning animate-slide-up">
        <h2 className="font-display text-lg font-bold mb-4">
          <StepBadge n={1} /> Select Year Level
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {curriculum.map((year) => (
            <button
              key={year.id}
              onClick={() => onSelectYear(year.id)}
              className={cn(
                "p-4 rounded-xl border-2 transition-all text-left",
                yearLevel === year.id
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50",
              )}
            >
              <span className="text-xl block mb-1">{year.icon}</span>
              <span className="font-semibold text-sm text-foreground">{year.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Chapter */}
      {currentStep >= 2 && (
        <div className="card-learning animate-slide-up">
          <h2 className="font-display text-lg font-bold mb-4">
            <StepBadge n={2} /> Select Chapter
          </h2>
          {categories.length === 0 ? (
            <p className="text-muted-foreground text-sm">No chapters available for this year.</p>
          ) : (
            <div className="grid grid-cols-1 gap-2 max-h-72 overflow-y-auto pr-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left",
                    selectedCategoryId === cat.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  <span className="text-lg flex-shrink-0">{cat.icon}</span>
                  <span className="font-medium text-sm text-foreground">{cat.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 3: Topic */}
      {currentStep >= 3 && (
        <div className="card-learning animate-slide-up">
          <h2 className="font-display text-lg font-bold mb-4">
            <StepBadge n={3} /> Select Topic
          </h2>
          {topics.length === 0 ? (
            <p className="text-muted-foreground text-sm">No topics available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
              {topics.map((topic) => {
                const hasBank = hasTopicQuizQuestions(topic.id);
                const isSelected = selectedTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => hasBank && onSelectTopic(topic.id)}
                    disabled={!hasBank}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left",
                      isSelected
                        ? "border-primary bg-primary/10"
                        : hasBank
                          ? "border-border hover:border-primary/50"
                          : "border-border opacity-50 cursor-not-allowed",
                    )}
                  >
                    <span className="text-lg flex-shrink-0">{topic.icon}</span>
                    <span className="flex-1 min-w-0">
                      <span className="font-medium text-sm text-foreground leading-tight block truncate">
                        {topic.title}
                      </span>
                      {!hasBank && (
                        <span className="text-[10px] text-muted-foreground">Coming soon</span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Step 4: Difficulty */}
      {currentStep >= 4 && (
        <div className="card-learning animate-slide-up space-y-4">
          <h2 className="font-display text-lg font-bold">
            <StepBadge n={4} /> Select Difficulty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {QUIZ_DIFFICULTIES.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => onSelectDifficulty(difficulty.id)}
                className={cn(
                  "p-3 rounded-xl border-2 transition-all text-left",
                  selectedDifficulty === difficulty.id
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50",
                )}
              >
                <span className="font-semibold text-sm text-foreground block">{difficulty.label}</span>
                <span className="text-xs text-muted-foreground">{difficulty.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Question Count */}
      {currentStep >= 4 && (
        <div className="card-learning animate-slide-up text-center space-y-4">
          <h2 className="font-display text-lg font-bold text-left">
            <StepBadge n={5} /> How many questions?
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {QUESTION_COUNTS.map((count) => (
              <button
                key={count}
                onClick={() => onSelectCount(count)}
                className={cn(
                  "p-3 rounded-xl border-2 font-bold text-lg transition-all",
                  selectedCount === count
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground hover:border-primary/50",
                )}
              >
                {count}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Info className="w-3 h-3" />
            Question bank: {bankSize} — quiz can generate up to 20 questions
          </p>
        </div>
      )}

      {/* Start Button */}
      <button
        onClick={onStart}
        disabled={!canStart}
        className="btn-primary w-full flex items-center justify-center gap-2 animate-slide-up disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play className="w-5 h-5" />
        Start Quiz ({selectedCount} questions)
      </button>
    </div>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm mr-2">
      {n}
    </span>
  );
}

// Re-export the Practice breadcrumb idea inline
export { ClipboardList };
