import { ArrowLeft, Play, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { QUIZ_DIFFICULTIES, QuizDifficulty } from "@/lib/quizUtils";

const QUESTION_COUNTS = [3, 5, 10, 15, 20] as const;

interface QuizSetupProps {
  topicName: string;
  backLink: string;
  backLabel: string;
  bankSize: number;
  selectedDifficulty: QuizDifficulty;
  selectedCount: number;
  onSelectDifficulty: (difficulty: QuizDifficulty) => void;
  onSelectCount: (count: number) => void;
  onStart: () => void;
}

export default function QuizSetup({
  topicName,
  backLink,
  backLabel,
  bankSize,
  selectedDifficulty,
  selectedCount,
  onSelectDifficulty,
  onSelectCount,
  onStart,
}: QuizSetupProps) {
  useEffect(() => {
    if (!QUESTION_COUNTS.includes(selectedCount as any)) {
      onSelectCount(10);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto space-y-6 py-8">
      <Link
        to={backLink}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> {backLabel}
      </Link>

      <div className="card-learning animate-slide-up text-center space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold mb-1">Quiz Setup</h1>
          <p className="text-muted-foreground text-sm">{topicName}</p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-sm">Select difficulty</p>
          <div className="grid grid-cols-2 gap-2">
            {QUIZ_DIFFICULTIES.map((difficulty) => (
              <button
                key={difficulty.id}
                onClick={() => onSelectDifficulty(difficulty.id)}
                className={cn(
                  "p-3 rounded-xl border-2 transition-all text-left",
                  selectedDifficulty === difficulty.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50",
                )}
              >
                <span className="block text-sm font-bold">{difficulty.label}</span>
                <span className="block text-xs text-muted-foreground">{difficulty.description}</span>
              </button>
            ))}
          </div>

          <p className="font-semibold text-sm">How many questions?</p>
          <div className="grid grid-cols-5 gap-2">
            {QUESTION_COUNTS.map((count) => (
              <button
                key={count}
                onClick={() => onSelectCount(count)}
                className={cn(
                  "p-3 rounded-xl border-2 font-bold text-lg transition-all",
                  selectedCount === count
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
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

        <button
          onClick={onStart}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5" /> Start Quiz ({selectedCount} questions)
        </button>
      </div>
    </div>
  );
}
