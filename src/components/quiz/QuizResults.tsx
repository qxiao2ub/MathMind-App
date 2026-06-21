import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Award, CheckCircle2, RotateCcw, Sparkles, AlertTriangle, BookOpen, Target, Loader2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { Progress } from "@/components/ui/progress";
import type { AISummaryEnriched } from "@/types/history";

interface QuizQuestion {
  question: string;
  wasCorrect: boolean;
  chosenAnswer: string;
  correctAnswer: string;
  skillTags?: string[];
  skipped?: boolean;
}

interface QuizResultsProps {
  quizType: "lesson" | "topic" | "category";
  topicName: string;
  topicId?: string;
  score: number;
  total: number;
  skipped?: number;
  questions: QuizQuestion[];
  onRetry: () => void;
  backLink: string;
  backLabel: string;
  timeTakenSeconds?: number;
  extraAction?: { link: string; label: string; onClick?: () => void };
}

export default function QuizResults({
  quizType,
  topicName,
  topicId,
  score,
  total,
  skipped = 0,
  questions,
  onRetry,
  backLink,
  backLabel,
  timeTakenSeconds,
  extraAction,
}: QuizResultsProps) {
  const safeTotal = Math.max(total, 0);
  const safeScore = Math.min(Math.max(score, 0), safeTotal);
  const percentage = safeTotal > 0 ? Math.round((safeScore / safeTotal) * 100) : 0;
  const incorrectQuestions = questions.filter((q) => !q.wasCorrect || q.skipped);
  const weakestTopic = incorrectQuestions[0]?.skillTags?.[0] || topicName;
  const suggestedReview = incorrectQuestions.length > 0 ? topicName : "Keep practising mixed review questions";
  const skipAiFeedback = safeTotal === 0 || safeScore === 0;
  const [summary, setSummary] = useState<AISummaryEnriched | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(!skipAiFeedback);
  const [summaryError, setSummaryError] = useState(false);

  useEffect(() => {
    if (skipAiFeedback) return;
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("quiz-summary", {
          body: { quizType, topicName, topicId, score, total, questions, timeTakenSeconds },
        });
        if (error) throw error;
        if (!cancelled) setSummary(data as AISummaryEnriched);
      } catch (e) {
        console.error("Failed to fetch AI summary:", e);
        if (!cancelled) setSummaryError(true);
      } finally {
        if (!cancelled) setLoadingSummary(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [skipAiFeedback]);

  const icon = quizType === "category" ? Award : quizType === "topic" ? Trophy : CheckCircle2;
  const Icon = icon;
  const title =
    quizType === "category" ? "Category Mastery!" : quizType === "topic" ? "Topic Quiz Complete!" : "Lesson Complete!";
  const gradientClass = quizType === "category" ? "gradient-accent" : "gradient-primary";

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Score Card */}
      <div className="card-learning text-center py-10 animate-slide-up">
        <div className={cn("w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-6", gradientClass)}>
          <Icon className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl font-bold mb-1">{title}</h1>
        <p className="text-muted-foreground mb-6">{topicName}</p>

        <div className="text-6xl font-bold text-gradient mb-1">{percentage}%</div>
        <p className="text-lg text-muted-foreground mb-2">
          {safeScore} / {safeTotal} correct
          {timeTakenSeconds ? ` • ${Math.round(timeTakenSeconds / 60)} min` : ""}
        </p>
        {skipped > 0 && (
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="text-[hsl(var(--success))]">{safeScore} correct</span>
            <span className="text-destructive">{Math.max(safeTotal - safeScore - skipped, 0)} incorrect</span>
            <span className="text-muted-foreground">↷ {skipped} skipped</span>
          </div>
        )}

        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 text-left mb-6">
          <div className="rounded-xl bg-muted/50 p-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Weakest topic</p>
            <p className="text-sm font-semibold text-foreground mt-1">{weakestTopic}</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Suggested review</p>
            <p className="text-sm font-semibold text-foreground mt-1">{suggestedReview}</p>
          </div>
        </div>

        <div className="max-w-xs mx-auto mb-8">
          <Progress value={percentage} className="h-3" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onRetry} className="btn-accent flex items-center gap-2 justify-center">
            <RotateCcw className="w-5 h-5" /> Try Again
          </button>
          {extraAction && (
            <Link
              to={extraAction.link}
              onClick={extraAction.onClick}
              className="btn-primary flex items-center gap-2 justify-center"
            >
              {extraAction.label}
            </Link>
          )}
          <Link to={backLink} className="btn-primary flex items-center gap-2 justify-center">
            {backLabel}
          </Link>
        </div>
      </div>

      {/* AI Summary Section */}
      <div className="card-learning animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="font-display text-xl font-bold">AI Feedback</h2>
        </div>

        {skipAiFeedback && (
          <div className="space-y-2 py-2">
            <div className="flex items-center gap-2 text-foreground">
              <AlertTriangle className="w-4 h-4 text-primary" />
              <p className="font-semibold">Retake recommended</p>
            </div>
            <p className="text-sm text-muted-foreground">
              You got 0 correct this time, so AI feedback has been skipped. Retake this quiz after reviewing the topic so the system can give you more useful feedback.
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
          <div className="space-y-5">
            {/* Overview */}
            <p className="text-foreground">{summary.overview}</p>

            {/* Trend */}
            {summary.trend && (
              <div className="flex flex-wrap gap-4 text-sm">
                {summary.trend.topicMasteryEstimate > 0 && (
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    Topic mastery: {summary.trend.topicMasteryEstimate}%
                  </div>
                )}
                {summary.trend.recentAveragePercent > 0 && (
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    Recent avg: {summary.trend.recentAveragePercent}%
                  </div>
                )}
                {summary.trend.improving !== undefined && (
                  <span className={cn("text-xs px-2 py-0.5 rounded-full", summary.trend.improving ? "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]" : "bg-destructive/10 text-destructive")}>
                    {summary.trend.improving ? "↑ Improving" : "↓ Needs attention"}
                  </span>
                )}
              </div>
            )}

            {/* Strengths */}
            {summary.strengths && summary.strengths.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--success))]" />
                  <span className="font-semibold text-sm">Strengths</span>
                </div>
                <ul className="space-y-1.5">
                  {summary.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-[hsl(var(--success))]">•</span>
                      <div>
                        <span className="font-medium text-foreground">{typeof s === "string" ? s : s.label}</span>
                        {typeof s !== "string" && s.evidence && (
                          <p className="text-xs mt-0.5">{s.evidence}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Weak Areas */}
            {summary.weakAreas && summary.weakAreas.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span className="font-semibold text-sm">Areas to Improve</span>
                </div>
                <ul className="space-y-2">
                  {summary.weakAreas.map((w, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <div>
                          <span className="font-medium text-foreground">{typeof w === "string" ? w : w.label}</span>
                          {typeof w !== "string" && w.why && <p className="text-xs mt-0.5">{w.why}</p>}
                          {typeof w !== "string" && w.evidence && <p className="text-xs italic mt-0.5">{w.evidence}</p>}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next Steps */}
            {summary.nextSteps && summary.nextSteps.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Next Steps</span>
                </div>
                <ul className="space-y-2">
                  {summary.nextSteps.map((step, i) => (
                    <li key={i} className="text-sm p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-foreground">{typeof step === "string" ? step : step.action}</p>
                      {typeof step !== "string" && (
                        <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                          {step.durationMinutes > 0 && <span>~{step.durationMinutes} min</span>}
                          {step.successCheck && <span>✓ {step.successCheck}</span>}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommended Topics */}
            {summary.recommendedTopics && summary.recommendedTopics.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Recommended Revision</span>
                </div>
                <ul className="space-y-1.5">
                  {summary.recommendedTopics.map((t, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <div>
                        <span className="font-medium text-foreground">{typeof t === "string" ? t : t.topic}</span>
                        {typeof t !== "string" && t.reason && <p className="text-xs mt-0.5">{t.reason}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Practice Questions */}
            {summary.practiceQuestions && summary.practiceQuestions.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-accent-foreground" />
                  <span className="font-semibold text-sm">Practice Questions</span>
                </div>
                <ul className="space-y-2">
                  {summary.practiceQuestions.map((pq, i) => (
                    <li key={i} className="text-sm p-3 rounded-lg bg-muted/50">
                      {typeof pq === "string" ? (
                        pq
                      ) : (
                        <div>
                          <p className="font-medium text-foreground">{pq.question}</p>
                          {pq.hint && <p className="text-xs text-muted-foreground mt-1">💡 {pq.hint}</p>}
                          <details className="mt-1">
                            <summary className="text-xs text-primary cursor-pointer">Show answer</summary>
                            <p className="text-xs mt-1 text-muted-foreground">{pq.answer}</p>
                          </details>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
