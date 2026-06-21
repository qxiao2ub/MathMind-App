import { Dumbbell, BookOpen, ClipboardList } from "lucide-react";
import { curriculum, Category, Topic } from "@/data/curriculum";
import type { PracticeMode } from "@/lib/practiceEngine";

interface Difficulty {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

interface PracticeSetupProps {
  currentStep: number;
  yearLevel: string;
  singleYear?: boolean;
  selectedCategoryId: string | null;
  selectedTopicId: string | null;
  selectedDifficulty: string | null;
  selectedCount: number | null;
  practiceMode: PracticeMode | null;
  categories: Category[];
  topics: Topic[];
  difficulties: Difficulty[];
  onSelectYear: (id: string) => void;
  onSelectCategory: (id: string) => void;
  onSelectPracticeMode: (mode: PracticeMode) => void;
  onSelectTopic: (id: string) => void;
  onSelectDifficulty: (id: string) => void;
  onSelectCount: (n: number) => void;
  onStart: () => void;
  canStart: boolean;
}

const QUESTION_COUNTS = [3, 5, 10, 15, 20];

export function PracticeSetup({
  currentStep,
  yearLevel,
  singleYear = false,
  selectedCategoryId,
  selectedTopicId,
  selectedDifficulty,
  selectedCount,
  practiceMode,
  categories,
  topics,
  difficulties,
  onSelectYear,
  onSelectCategory,
  onSelectPracticeMode,
  onSelectTopic,
  onSelectDifficulty,
  onSelectCount,
  onStart,
  canStart,
}: PracticeSetupProps) {
  // Determine step numbers dynamically based on mode
  const modeStep = 3;
  const topicStep = practiceMode === "subtopic" ? 4 : -1;
  const difficultyStep = practiceMode === "subtopic" ? 5 : 4;
  const countStep = practiceMode === "subtopic" ? 6 : 5;

  // Step counter (display) — subtract 1 if year selection is auto-skipped
  const skipOffset = singleYear ? 1 : 0;
  const totalDisplaySteps = (practiceMode === "subtopic" ? 6 : 5) - skipOffset;
  const displayedStep = Math.max(1, Math.min(totalDisplaySteps, currentStep - skipOffset));
  const diffLabel = difficulties.find((d) => d.id === selectedDifficulty)?.label || "Standard";

  return (
    <div className="space-y-6">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
        Step {displayedStep} of {totalDisplaySteps}
      </div>

      {/* Step 1: Year Level — grouped rows: Junior / Year 11 / Year 12 */}
      {!singleYear && (
      <div className="card-learning animate-slide-up">
        <h2 className="font-display text-lg font-bold mb-4">
          <StepBadge n={1} /> Select Year Level
        </h2>
        {(() => {
          const junior = curriculum.filter((y) => y.id === "year-9" || y.id === "year-10");
          const year11 = curriculum.filter((y) => y.id.startsWith("year-11"));
          const year12 = curriculum.filter((y) => y.id.startsWith("year-12"));

          const renderBtn = (year: typeof curriculum[number]) => {
            const vceBadge = year.id.startsWith("year-11")
              ? "VCE Unit 1/2"
              : year.id.startsWith("year-12")
                ? "VCE Unit 3/4"
                : null;
            return (
              <button
                key={year.id}
                onClick={() => onSelectYear(year.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left h-full flex flex-col justify-center ${
                  yearLevel === year.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                }`}
              >
                <span className="text-xl block mb-1">{year.icon}</span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm leading-tight">{year.name}</span>
                  {vceBadge && (
                    <span className="self-start text-[10px] font-bold px-1.5 py-0.5 rounded bg-secondary/60 text-secondary-foreground whitespace-nowrap">
                      {vceBadge}
                    </span>
                  )}
                </div>
              </button>
            );
          };

          return (
            <div className="space-y-4">
              {junior.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Junior</p>
                  <div className="grid grid-cols-2 gap-3">{junior.map(renderBtn)}</div>
                </div>
              )}
              {year11.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Year 11 — VCE Pathways</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{year11.map(renderBtn)}</div>
                </div>
              )}
              {year12.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Year 12 — VCE Pathways</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{year12.map(renderBtn)}</div>
                </div>
              )}
            </div>
          );
        })()}
      </div>
      )}

      {/* Step 2: Chapter */}
      {currentStep >= 2 && (
        <div className="card-learning animate-slide-up">
          <h2 className="font-display text-lg font-bold mb-4">
            <StepBadge n={2} /> Select Chapter
          </h2>
          {categories.length === 0 ? (
            <p className="text-muted-foreground text-sm">No chapters available for this year.</p>
          ) : (
            <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto pr-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                    selectedCategoryId === cat.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="text-lg flex-shrink-0">{cat.icon}</span>
                  <span className="font-medium text-sm">{cat.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 3: Practice Mode */}
      {currentStep >= 3 && (
        <div className="card-learning animate-slide-up">
          <h2 className="font-display text-lg font-bold mb-4">
            <StepBadge n={modeStep} /> Choose Practice Type
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => onSelectPracticeMode("subtopic")}
              className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left ${
                practiceMode === "subtopic" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
              }`}
            >
              <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <span className="font-bold text-base block">Subtopic Practice</span>
                <span className="text-muted-foreground text-xs">Questions on one specific subtopic</span>
              </div>
            </button>
            <button
              onClick={() => onSelectPracticeMode("chapter-test")}
              className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left ${
                practiceMode === "chapter-test" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
              }`}
            >
              <ClipboardList className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <span className="font-bold text-base block">Chapter Test</span>
                <span className="text-muted-foreground text-xs">Questions across all subtopics in this chapter</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Step 4 (subtopic only): Select Subtopic */}
      {practiceMode === "subtopic" && currentStep >= 4 && (
        <div className="card-learning animate-slide-up">
          <h2 className="font-display text-lg font-bold mb-4">
            <StepBadge n={topicStep} /> Select Subtopic
          </h2>
          {topics.length === 0 ? (
            <p className="text-muted-foreground text-sm">No subtopics available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => onSelectTopic(topic.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                    selectedTopicId === topic.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="text-lg flex-shrink-0">{topic.icon}</span>
                  <span className="font-medium text-sm leading-tight">{topic.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Difficulty step */}
      {currentStep >= difficultyStep && difficultyStep > 0 && (
        <div className="card-learning animate-slide-up">
          <h2 className="font-display text-lg font-bold mb-4">
            <StepBadge n={difficultyStep} /> Select Difficulty
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {difficulties.map((diff) => (
              <button
                key={diff.id}
                onClick={() => onSelectDifficulty(diff.id)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  selectedDifficulty === diff.id ? diff.color : "border-border hover:border-primary/50"
                }`}
              >
                <span className="text-2xl mb-2 block">{diff.emoji}</span>
                <span className="font-semibold text-sm">{diff.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Question Count step */}
      {currentStep >= countStep && (
        <div className="card-learning animate-slide-up">
          <h2 className="font-display text-lg font-bold mb-4">
            <StepBadge n={countStep} /> Number of Questions
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {QUESTION_COUNTS.map((n) => (
              <button
                key={n}
                onClick={() => onSelectCount(n)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  selectedCount === n ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                }`}
              >
                <span className="text-2xl font-bold block">{n}</span>
                <span className="text-xs text-muted-foreground">Questions</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Start Button */}
      <div className="space-y-2">
        <button
          onClick={onStart}
          disabled={!canStart}
          className="btn-primary w-full flex items-center justify-center gap-2 animate-slide-up disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Dumbbell className="w-5 h-5" />
          Start Practice — {selectedCount ?? 10} Questions
        </button>
        {canStart && (
          <p className="text-center text-xs text-muted-foreground">
            ~{Math.max(1, Math.round((selectedCount ?? 10) * 0.5))} min · {selectedCount ?? 10} questions · {diffLabel} mode
          </p>
        )}
      </div>
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
