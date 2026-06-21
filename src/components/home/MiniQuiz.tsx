import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const question = {
  text: "Simplify: 2³ × 2⁴",
  options: [
    { label: "2⁷ = 128", correct: true },
    { label: "2¹² = 4096", correct: false },
    { label: "4⁷ = 16384", correct: false },
    { label: "2⁷ = 64", correct: false },
  ],
};

export function MiniQuiz() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
  };

  return (
    <div className="card-learning max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Try it yourself
        </span>
      </div>
      <p className="font-display text-lg font-bold mb-4 text-foreground">
        {question.text}
      </p>
      <div className="space-y-2">
        {question.options.map((opt, i) => {
          let cls = "quiz-option";
          if (selected !== null) {
            if (opt.correct) cls += " quiz-option-correct";
            else if (i === selected) cls += " quiz-option-incorrect";
          } else {
            cls += " cursor-pointer";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={cls}
              disabled={selected !== null}
            >
              <span className="flex items-center justify-between">
                <span>{opt.label}</span>
                {selected !== null && opt.correct && (
                  <CheckCircle2 className="w-5 h-5 text-success" />
                )}
                {selected === i && !opt.correct && (
                  <XCircle className="w-5 h-5 text-destructive" />
                )}
              </span>
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <p className="mt-4 text-sm text-muted-foreground animate-fade-in">
          {question.options[selected].correct
            ? "✅ Correct! When multiplying with the same base, add the exponents: 3 + 4 = 7."
            : "Not quite — remember, when multiplying with the same base you add the exponents: 2³ × 2⁴ = 2⁷ = 128."}
        </p>
      )}
      {selected !== null && (
        <button
          onClick={() => setSelected(null)}
          className="mt-3 text-sm font-medium text-primary hover:underline"
        >
          Try again
        </button>
      )}
    </div>
  );
}
