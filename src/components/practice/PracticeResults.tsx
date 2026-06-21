import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Trophy, CheckCircle2, XCircle, RotateCcw, ArrowRight,
  Sparkles, AlertTriangle, BookOpen, Target, Loader2, TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import type { PracticeQuestionItem } from "@/lib/practiceEngine";
import type { AISummaryEnriched } from "@/types/history";

interface PracticeResultsProps {
  questions: PracticeQuestionItem[];
  userAnswers: (number | null)[];
  difficulty: string;
  modeLabel: string;
  onRetry: () => void;
  onNewSet: () => void;
  onReset: () => void;
  timeTakenSeconds?: number;
}

function getPerformanceCategory(pct: number) {
  if (pct >= 90) return { label: "Excellent", color: "text-primary", bg: "bg-primary/10 border-primary/30" };
  if (pct >= 75) return { label: "Strong", color: "text-[hsl(var(--success))]", bg: "bg-[hsl(var(--success))]/10 border-[hsl(var(--success))]/30" };
  if (pct >= 60) return { label: "Developing", color: "text-yellow-500", bg: "bg-yellow-500/10 border-yellow-500/30" };
  return { label: "Needs Review", color: "text-destructive", bg: "bg-destructive/10 border-destructive/30" };
}

export function PracticeResults({
  questions,
  userAnswers,
  difficulty,
  modeLabel,
  onRetry,
  onNewSet,
  onReset,
  timeTakenSeconds,
}: PracticeResultsProps) {
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [summary, setSummary] = useState<AISummaryEnriched | null>(null);
  const [summaryError, setSummaryError] = useState(false);
  // Initial loading state is set after results are computed (see effect below).
  const [loadingSummary, setLoadingSummary] = useState(true);

  const results = useMemo(() => {
    const correct: number[] = [];
    const incorrect: number[] = [];
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) correct.push(i);
      else incorrect.push(i);
    });
    const score = correct.length;
    const total = questions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    // Group by topic for skill analysis
    const byTopic = new Map<string, { correct: number; total: number }>();
    questions.forEach((q, i) => {
      const key = q.topicTitle;
      if (!byTopic.has(key)) byTopic.set(key, { correct: 0, total: 0 });
      const entry = byTopic.get(key)!;
      entry.total++;
      if (userAnswers[i] === q.correctAnswer) entry.correct++;
    });

    const strengths: string[] = [];
    const weaknesses: string[] = [];
    byTopic.forEach((v, k) => {
      const acc = v.total > 0 ? (v.correct / v.total) * 100 : 0;
      if (acc >= 70) strengths.push(k);
      else if (acc < 60) weaknesses.push(k);
    });

    return { correct, incorrect, score, total, percentage, strengths, weaknesses, byTopic };
  }, [questions, userAnswers]);

  const perf = getPerformanceCategory(results.percentage);

  const skipAiFeedback = results.total === 0 || results.score === 0;

  useEffect(() => {
    if (skipAiFeedback) {
      setLoadingSummary(false);
      return;
    }
    let cancelled = false;
    const fetchSummary = async () => {
      try {
        const mappedQuestions = questions.map((q, i) => ({
          question: q.question,
          wasCorrect: userAnswers[i] === q.correctAnswer,
          chosenAnswer: userAnswers[i] !== null ? q.options[userAnswers[i]!] : "No answer",
          correctAnswer: q.options[q.correctAnswer],
          skillTags: [q.topicTitle],
        }));

        const topicName = questions[0]?.topicTitle || "Practice";
        const { data, error } = await supabase.functions.invoke("quiz-summary", {
          body: {
            quizType: "practice",
            topicName,
            score: results.score,
            total: results.total,
            questions: mappedQuestions,
            timeTakenSeconds,
          },
        });
        if (error) throw error;
        if (!cancelled) setSummary(data as AISummaryEnriched);
      } catch {
        if (!cancelled) setSummaryError(true);
      } finally {
        if (!cancelled) setLoadingSummary(false);
      }
    };
    fetchSummary();
    return () => {
      cancelled = true;
    };
  }, [skipAiFeedback]);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Score Card */}
      <div className="card-learning text-center py-10 animate-slide-up">
        <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-6 gradient-primary">
          <Trophy className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl font-bold mb-1">{modeLabel} Complete!</h1>
        <p className="text-muted-foreground mb-4">Difficulty: {difficulty}</p>

        <div className="text-6xl font-bold text-gradient mb-1">{results.percentage}%</div>
        <p className="text-lg text-muted-foreground mb-2">
          {results.score} / {results.total} correct
          {timeTakenSeconds ? ` • ${Math.round(timeTakenSeconds / 60)} min` : ""}
        </p>

        <span className={cn("inline-block px-4 py-1.5 rounded-full text-sm font-semibold border", perf.bg, perf.color)}>
          {perf.label}
        </span>

        <div className="max-w-xs mx-auto mt-6">
          <Progress value={results.percentage} className="h-3" />
        </div>
      </div>

      {/* Skill Analysis */}
      <div className="card-learning animate-slide-up">
        <h2 className="font-display text-lg font-bold mb-4">Skill Analysis</h2>

        {results.strengths.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--success))]" />
              <span className="font-semibold text-sm">Strengths</span>
            </div>
            <ul className="space-y-1">
              {results.strengths.map((s) => (
                <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-[hsl(var(--success))]">•</span> {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {results.weaknesses.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="font-semibold text-sm">Needs Improvement</span>
            </div>
            <ul className="space-y-1">
              {results.weaknesses.map((w) => (
                <li key={w} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-destructive">•</span> {w}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Per-topic breakdown */}
        <div className="space-y-2 mt-4">
          {Array.from(results.byTopic.entries()).map(([topic, stats]) => {
            const acc = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            return (
              <div key={topic} className="flex items-center gap-3">
                <span className="text-sm font-medium flex-1 truncate">{topic}</span>
                <span className="text-xs text-muted-foreground">{stats.correct}/{stats.total}</span>
                <div className="w-24">
                  <Progress value={acc} className="h-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Incorrect Questions Review */}
      {results.incorrect.length > 0 && (
        <div className="card-learning animate-slide-up">
          <button
            onClick={() => setShowIncorrect(!showIncorrect)}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-destructive" />
              <h2 className="font-display text-lg font-bold">
                Review Incorrect ({results.incorrect.length})
              </h2>
            </div>
            <ArrowRight className={cn("w-5 h-5 transition-transform", showIncorrect && "rotate-90")} />
          </button>

          {showIncorrect && (
            <div className="mt-4 space-y-4">
              {results.incorrect.map((idx) => {
                const q = questions[idx];
                const chosen = userAnswers[idx];
                return (
                  <div key={idx} className="p-4 rounded-xl bg-muted/50 space-y-2">
                    <p className="text-xs text-muted-foreground">From: {q.lessonTitle}</p>
                    <p className="font-medium text-sm">{q.question}</p>
                    {chosen !== null && (
                      <p className="text-sm text-destructive">
                        Your answer: {q.options[chosen]}
                      </p>
                    )}
                    <p className="text-sm text-[hsl(var(--success))]">
                      Correct: {q.options[q.correctAnswer]}
                    </p>
                    <p className="text-xs text-muted-foreground">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Recommendations */}
      <div className="card-learning animate-slide-up">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-primary" />
          <h2 className="font-display text-lg font-bold">Recommended Next Steps</h2>
        </div>
        <ul className="space-y-2">
          {results.weaknesses.length > 0 && (
            <li className="text-sm p-3 rounded-lg bg-muted/50 flex items-start gap-2">
              <BookOpen className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Revisit the lesson on <strong>{results.weaknesses[0]}</strong> in the Learn section.</span>
            </li>
          )}
          <li className="text-sm p-3 rounded-lg bg-muted/50 flex items-start gap-2">
            <RotateCcw className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
            <span>Retry this practice to reinforce your understanding.</span>
          </li>
          {results.percentage < 50 && (
            <li className="text-sm p-3 rounded-lg bg-muted/50 flex items-start gap-2">
              <TrendingUp className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Try a lower difficulty level to build confidence first.</span>
            </li>
          )}
        </ul>
      </div>

      {/* AI Summary */}
      <div className="card-learning animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="font-display text-xl font-bold">AI Performance Summary</h2>
        </div>

        {skipAiFeedback && (
          <div className="space-y-2 py-2">
            <div className="flex items-center gap-2 text-foreground">
              <AlertTriangle className="w-4 h-4 text-primary" />
              <p className="font-semibold">Retake recommended</p>
            </div>
            <p className="text-sm text-muted-foreground">
              You got 0 correct this time, so AI feedback has been skipped. Try reviewing the skill first, then retake the practice set.
            </p>
          </div>
        )}

        {!skipAiFeedback && loadingSummary && (
          <div className="flex items-center gap-3 py-6 justify-center text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Generating personalised feedback...</span>
          </div>
        )}

        {summaryError && !loadingSummary && (
          <p className="text-muted-foreground text-sm py-4">
            Unable to generate AI feedback right now. Your score has been recorded.
          </p>
        )}

        {summary && !loadingSummary && (
          <div className="space-y-4">
            <p className="text-foreground">{summary.overview}</p>

            {summary.nextSteps && summary.nextSteps.length > 0 && (
              <ul className="space-y-2">
                {summary.nextSteps.map((step, i) => (
                  <li key={i} className="text-sm p-3 rounded-lg bg-muted/50">
                    <p className="font-medium text-foreground">{typeof step === "string" ? step : step.action}</p>
                    {typeof step !== "string" && step.durationMinutes > 0 && (
                      <span className="text-xs text-muted-foreground">~{step.durationMinutes} min</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 animate-slide-up">
        <button onClick={onRetry} className="btn-accent flex-1 flex items-center justify-center gap-2">
          <RotateCcw className="w-5 h-5" /> Retry Incorrect
        </button>
        <button onClick={onNewSet} className="btn-primary flex-1 flex items-center justify-center gap-2">
          <ArrowRight className="w-5 h-5" /> New Set
        </button>
      </div>
      <button onClick={onReset} className="w-full py-3 rounded-xl border border-border hover:bg-muted transition-colors text-sm text-muted-foreground">
        Back to Setup
      </button>
    </div>
  );
}
