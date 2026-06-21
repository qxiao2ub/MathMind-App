import { useEffect } from "react";
import { PracticeQuestionItem } from "@/lib/practiceEngine";

interface PracticeQuestionProps {
  question: PracticeQuestionItem;
  selectedOption: number | null;
  isChecked: boolean;
  isLastInSet: boolean;
  onSelectOption: (idx: number) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
}

export function PracticeQuestion({
  question,
  selectedOption,
  isChecked,
  isLastInSet,
  onSelectOption,
  onCheckAnswer,
  onNextQuestion,
}: PracticeQuestionProps) {
  const isCorrect = selectedOption === question.correctAnswer;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;

      const key = e.key.toLowerCase();

      if (!isChecked) {
        const numIdx = "1234".indexOf(key);
        const letIdx = "abcd".indexOf(key);
        const idx = numIdx >= 0 ? numIdx : letIdx;
        if (idx >= 0 && idx < question.options.length) {
          e.preventDefault();
          onSelectOption(idx);
          return;
        }
      }

      if (e.key === "Enter") {
        if (!isChecked && selectedOption !== null) {
          e.preventDefault();
          onCheckAnswer();
        } else if (isChecked) {
          e.preventDefault();
          onNextQuestion();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [isChecked, selectedOption, onCheckAnswer, onNextQuestion, question.options.length]);

  return (
    <div className="space-y-4">
      <div className="card-learning animate-slide-up">
        <p className="text-xs text-muted-foreground mb-2">
          From: <span className="font-medium">{question.lessonTitle}</span>
        </p>
        <h2 className="font-display text-xl font-bold mb-6">{question.question}</h2>

        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let optClass = "border-border hover:border-primary/50";
            if (isChecked) {
              if (idx === question.correctAnswer) {
                optClass = "border-success bg-success/10";
              } else if (idx === selectedOption && !isCorrect) {
                optClass = "border-destructive bg-destructive/10";
              }
            } else if (idx === selectedOption) {
              optClass = "border-primary bg-primary/10";
            }

            return (
              <button
                key={idx}
                onClick={() => !isChecked && onSelectOption(idx)}
                disabled={isChecked}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all min-h-[52px] sm:min-h-0 flex items-center gap-3 ${optClass} disabled:cursor-default`}
              >
                <span className="w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0 font-mono text-xs font-semibold text-muted-foreground">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{opt}</span>
              </button>
            );
          })}
        </div>

        <p className="hidden sm:block mt-3 text-[11px] text-muted-foreground">
          Press A–D to select · Enter to confirm
        </p>

        {isChecked && (
          <div className={`mt-4 p-4 rounded-xl animate-fade-scale ${isCorrect ? "bg-success/10 border border-success/30" : "bg-destructive/10 border border-destructive/30"}`}>
            <p className="font-semibold mb-1">{isCorrect ? "Correct! 🎉" : "Not quite right"}</p>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        )}
      </div>

      {!isChecked ? (
        <button
          onClick={onCheckAnswer}
          disabled={selectedOption === null}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
        >
          Check Answer
        </button>
      ) : (
        <button onClick={onNextQuestion} className="btn-primary w-full flex items-center justify-center gap-2">
          {isLastInSet ? "View Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}
