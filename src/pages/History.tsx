import { SEO } from "@/components/SEO";
import { useState, useEffect, useCallback } from "react";
import {
  ClipboardList,
  Dumbbell,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Eye,
  Lightbulb,
  Loader2,
  Calendar,
  Filter,
  BookOpen,
  LayoutGrid,
  Clock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getQuizHistory, getQuizAttemptDetails, getPracticeHistory, getDistinctTopics } from "@/lib/historyApi";
import type { QuizAttempt, QuizAttemptQuestion, PracticeAttempt, HistoryFilters } from "@/types/history";
import { cn } from "@/lib/utils";
import LearnHistoryTab from "@/components/history/LearnHistoryTab";
import LearnStatsSummary from "@/components/history/LearnStatsSummary";

/* ── Score badge helper ─────────────────────────────────── */
function ScoreBadge({ percentage }: { percentage: number }) {
  const color =
    percentage >= 80
      ? "bg-success/15 text-success"
      : percentage >= 50
        ? "bg-accent/40 text-accent-foreground"
        : "bg-destructive/15 text-destructive";
  return (
    <span className={cn("tabular-nums font-bold text-sm sm:text-base px-2 py-0.5 rounded-lg", color)}>
      {percentage}%
    </span>
  );
}

/* ── Main page ──────────────────────────────────────────── */
export default function HistoryPage() {
  const [tab, setTab] = useState("all");
  const [filters, setFilters] = useState<HistoryFilters>({ dateRange: "30" });
  const [topics, setTopics] = useState<string[]>([]);

  useEffect(() => {
    getDistinctTopics().then(setTopics).catch(console.error);
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 pb-8">
      <SEO title="Learning History | MathMind" description="Review your past quiz and practice attempts, scores and progress." noindex />
      {/* ── Header ── */}
      <div className="animate-slide-up pt-1">
        <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-widest mb-0.5">
          Activity
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold">History</h1>
        <p className="text-muted-foreground text-sm sm:text-base mt-1">
          Review your learning activity, quizzes and practice sessions
        </p>
      </div>

      {/* ── Stats summary ── */}
      <LearnStatsSummary />

      {/* ── Filters row ── */}
      <div className="flex flex-wrap gap-2 sm:gap-3 animate-slide-up">
        <Select
          value={filters.topicName || "all"}
          onValueChange={(v) => setFilters((f) => ({ ...f, topicName: v === "all" ? undefined : v }))}
        >
          <SelectTrigger className="h-9 sm:h-10 w-auto min-w-[140px] sm:w-48 text-xs sm:text-sm gap-1.5">
            <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <SelectValue placeholder="All topics" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All topics</SelectItem>
            {topics.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.dateRange || "30"}
          onValueChange={(v) => setFilters((f) => ({ ...f, dateRange: v as any }))}
        >
          <SelectTrigger className="h-9 sm:h-10 w-auto min-w-[130px] sm:w-40 text-xs sm:text-sm gap-1.5">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
            <SelectItem value="all">All time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ── Tabs ── */}
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="w-full sm:w-auto sm:inline-flex h-9 sm:h-10">
          <TabsTrigger value="all" className="flex-1 sm:flex-none gap-1 sm:gap-1.5 text-xs sm:text-sm px-2.5 sm:px-4">
            <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>All</span>
          </TabsTrigger>
          <TabsTrigger value="learn" className="flex-1 sm:flex-none gap-1 sm:gap-1.5 text-xs sm:text-sm px-2.5 sm:px-4">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Learn</span>
          </TabsTrigger>
          <TabsTrigger
            value="practice"
            className="flex-1 sm:flex-none gap-1 sm:gap-1.5 text-xs sm:text-sm px-2.5 sm:px-4"
          >
            <Dumbbell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Practice</span>
          </TabsTrigger>
          <TabsTrigger
            value="quizzes"
            className="flex-1 sm:flex-none gap-1 sm:gap-1.5 text-xs sm:text-sm px-2.5 sm:px-4"
          >
            <ClipboardList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Quizzes</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 sm:mt-5">
          <AllActivityTab filters={filters} />
        </TabsContent>
        <TabsContent value="learn" className="mt-4 sm:mt-5">
          <LearnHistoryTab filters={filters} />
        </TabsContent>
        <TabsContent value="practice" className="mt-4 sm:mt-5">
          <PracticeHistoryTab filters={filters} />
        </TabsContent>
        <TabsContent value="quizzes" className="mt-4 sm:mt-5">
          <QuizHistoryTab filters={filters} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

/* ── Section heading helper ─────────────────────────────── */
function SectionHeading({
  icon: Icon,
  label,
  hasBorder,
}: {
  icon: React.ElementType;
  label: string;
  hasBorder?: boolean;
}) {
  return (
    <h3
      className={cn(
        "flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground mb-3",
        hasBorder && "pt-4 sm:pt-5 border-t border-border mt-1",
      )}
    >
      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
      {label}
    </h3>
  );
}

/* ── All Activity Tab ───────────────────────────────────── */
function AllActivityTab({ filters }: { filters: HistoryFilters }) {
  return (
    <div className="space-y-1">
      <SectionHeading icon={BookOpen} label="Recent Learn Activity" />
      <LearnHistoryTab filters={filters} />
      <SectionHeading icon={Dumbbell} label="Recent Practice" hasBorder />
      <PracticeHistoryTab filters={filters} />
      <SectionHeading icon={ClipboardList} label="Recent Quizzes" hasBorder />
      <QuizHistoryTab filters={filters} />
    </div>
  );
}

/* ── Empty state ────────────────────────────────────────── */
function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center gap-2">
      <p className="text-2xl sm:text-3xl">📭</p>
      <p className="text-sm sm:text-base font-semibold text-muted-foreground">{message}</p>
    </div>
  );
}

/* ── Load more button ───────────────────────────────────── */
function LoadMoreButton({ loading, onClick }: { loading: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full mt-3 sm:mt-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-primary hover:bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all disabled:opacity-50"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="w-3.5 h-3.5 animate-spin" /> Loading…
        </span>
      ) : (
        "Load more"
      )}
    </button>
  );
}

/* ── Quiz History Tab ───────────────────────────────────── */
function QuizHistoryTab({ filters }: { filters: HistoryFilters }) {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [selectedAttempt, setSelectedAttempt] = useState<QuizAttempt | null>(null);
  const LIMIT = 20;

  const load = useCallback(
    async (reset = false) => {
      setLoading(true);
      try {
        const newOffset = reset ? 0 : offset;
        const { data, count } = await getQuizHistory(filters, LIMIT, newOffset);
        if (reset) {
          setAttempts(data);
          setOffset(LIMIT);
        } else {
          setAttempts((prev) => [...prev, ...data]);
          setOffset((o) => o + LIMIT);
        }
        setTotal(count);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [filters, offset],
  );

  useEffect(() => {
    setOffset(0);
    load(true);
  }, [filters]);

  if (loading && attempts.length === 0) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (attempts.length === 0) {
    return <EmptyState message="No quiz sessions yet. Complete a quiz to see your history here." />;
  }

  return (
    <>
      <div className="space-y-2 sm:space-y-2.5">
        {attempts.map((a) => (
          <button
            key={a.id}
            onClick={() => setSelectedAttempt(a)}
            className="group w-full card-learning flex items-center gap-3 sm:gap-4 hover:border-primary/30 hover:shadow-sm active:scale-[0.99] transition-all text-left"
          >
            {/* Score ring */}
            <div
              className={cn(
                "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 tabular-nums",
                a.percentage >= 80
                  ? "bg-success/15 text-success"
                  : a.percentage >= 50
                    ? "bg-accent/40 text-accent-foreground"
                    : "bg-destructive/15 text-destructive",
              )}
            >
              {a.percentage}%
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm sm:text-base truncate leading-tight">{a.topic_name}</p>
              <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                <span className="text-xs text-muted-foreground capitalize">{a.quiz_type}</span>
                <span className="text-muted-foreground/40 text-xs">·</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(a.created_at).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                {a.time_taken_seconds ? (
                  <>
                    <span className="text-muted-foreground/40 text-xs">·</span>
                    <span className="hidden sm:inline-flex items-center gap-0.5 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {Math.round(a.time_taken_seconds / 60)}min
                    </span>
                  </>
                ) : null}
              </div>
            </div>

            {/* Right meta */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="hidden sm:block text-xs text-muted-foreground tabular-nums">
                {a.score}/{a.total}
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {attempts.length < total && <LoadMoreButton loading={loading} onClick={() => load(false)} />}

      {selectedAttempt && <QuizDetailDialog attempt={selectedAttempt} onClose={() => setSelectedAttempt(null)} />}
    </>
  );
}

/* ── Quiz Detail Dialog ─────────────────────────────────── */
function QuizDetailDialog({ attempt, onClose }: { attempt: QuizAttempt; onClose: () => void }) {
  const [questions, setQuestions] = useState<QuizAttemptQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuizAttemptDetails(attempt.id)
      .then(setQuestions)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [attempt.id]);

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-base sm:text-lg leading-snug">{attempt.topic_name}</DialogTitle>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <ScoreBadge percentage={attempt.percentage} />
            <span className="text-xs sm:text-sm text-muted-foreground">
              {attempt.score}/{attempt.total} correct
            </span>
            <span className="text-muted-foreground/40 text-xs">·</span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              {new Date(attempt.created_at).toLocaleDateString("en-AU")}
            </span>
            {attempt.time_taken_seconds ? (
              <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {Math.round(attempt.time_taken_seconds / 60)}min
              </span>
            ) : null}
          </div>
        </DialogHeader>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="space-y-2.5 sm:space-y-3 mt-3">
            {questions.map((q, i) => (
              <div
                key={q.id}
                className={cn(
                  "p-3 sm:p-3.5 rounded-xl border text-sm",
                  q.was_correct ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5",
                )}
              >
                <div className="flex items-start gap-2 sm:gap-2.5">
                  {q.was_correct ? (
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs sm:text-sm mb-1.5 leading-snug">
                      Q{i + 1}: {q.question_text}
                    </p>
                    {!q.was_correct && (
                      <div className="space-y-0.5 text-xs text-muted-foreground">
                        <p>
                          Your answer: <span className="text-destructive font-medium">{q.chosen_answer || "—"}</span>
                        </p>
                        <p>
                          Correct: <span className="text-success font-medium">{q.correct_answer}</span>
                        </p>
                        {q.error_type && (
                          <p className="italic text-muted-foreground/70">Pattern: {q.error_type.replace(/_/g, " ")}</p>
                        )}
                      </div>
                    )}
                    {q.skill_tags && q.skill_tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {q.skill_tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ── Practice History Tab ───────────────────────────────── */
function PracticeHistoryTab({ filters }: { filters: HistoryFilters }) {
  const [attempts, setAttempts] = useState<PracticeAttempt[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<PracticeAttempt | null>(null);
  const LIMIT = 20;

  const load = useCallback(
    async (reset = false) => {
      setLoading(true);
      try {
        const newOffset = reset ? 0 : offset;
        const { data, count } = await getPracticeHistory(filters, LIMIT, newOffset);
        if (reset) {
          setAttempts(data);
          setOffset(LIMIT);
        } else {
          setAttempts((prev) => [...prev, ...data]);
          setOffset((o) => o + LIMIT);
        }
        setTotal(count);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [filters, offset],
  );

  useEffect(() => {
    setOffset(0);
    load(true);
  }, [filters]);

  if (loading && attempts.length === 0) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (attempts.length === 0) {
    return <EmptyState message="No practice sessions yet. Answer some questions to see your history here." />;
  }

  return (
    <>
      <div className="space-y-2 sm:space-y-2.5">
        {attempts.map((a) => (
          <button
            key={a.id}
            onClick={() => setSelected(a)}
            className="group w-full card-learning flex items-center gap-3 sm:gap-4 hover:border-primary/30 hover:shadow-sm active:scale-[0.99] transition-all text-left"
          >
            {/* Result icon */}
            <div
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0",
                a.was_correct ? "bg-success/15" : "bg-destructive/15",
              )}
            >
              {a.was_correct ? (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
              ) : (
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
              )}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm sm:text-base truncate leading-tight">{a.topic_name}</p>
              <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                <span className="text-xs text-muted-foreground capitalize">{a.difficulty}</span>
                <span className="text-muted-foreground/40 text-xs">·</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(a.created_at).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                {a.time_taken_seconds ? (
                  <>
                    <span className="text-muted-foreground/40 text-xs">·</span>
                    <span className="text-xs text-muted-foreground">{a.time_taken_seconds}s</span>
                  </>
                ) : null}
              </div>
            </div>

            {/* Indicator icons */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {a.hint_used && <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" aria-label="Hint used" />}
              {a.solution_viewed && (
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" aria-label="Solution viewed" />
              )}
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {attempts.length < total && <LoadMoreButton loading={loading} onClick={() => load(false)} />}

      {selected && (
        <Dialog open onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-base sm:text-lg">{selected.topic_name}</DialogTitle>
              <div className="flex items-center gap-2 mt-1 flex-wrap text-xs sm:text-sm text-muted-foreground">
                <span className="capitalize font-medium">{selected.difficulty}</span>
                <span className="text-muted-foreground/40">·</span>
                <span>{new Date(selected.created_at).toLocaleDateString("en-AU")}</span>
              </div>
            </DialogHeader>

            <div className="space-y-3 sm:space-y-4 mt-2 text-sm">
              {/* Question */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Question</p>
                <p className="text-sm sm:text-base leading-relaxed">{selected.question_text}</p>
              </div>

              {/* Answers */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="p-3 rounded-xl bg-muted/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Your answer
                  </p>
                  <p
                    className={cn(
                      "font-semibold text-sm sm:text-base",
                      selected.was_correct ? "text-success" : "text-destructive",
                    )}
                  >
                    {selected.user_answer || "—"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-success/8">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Correct answer
                  </p>
                  <p className="font-semibold text-sm sm:text-base text-success">{selected.correct_answer}</p>
                </div>
              </div>

              {/* Flags */}
              {(selected.hint_used || selected.solution_viewed || selected.time_taken_seconds) && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {selected.hint_used && (
                    <span className="inline-flex items-center gap-1 text-xs bg-amber-400/10 text-amber-600 px-2 py-1 rounded-lg font-medium">
                      <Lightbulb className="w-3 h-3" /> Hint used
                    </span>
                  )}
                  {selected.solution_viewed && (
                    <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg font-medium">
                      <Eye className="w-3 h-3" /> Solution viewed
                    </span>
                  )}
                  {selected.time_taken_seconds && (
                    <span className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2 py-1 rounded-lg font-medium">
                      <Clock className="w-3 h-3" /> {selected.time_taken_seconds}s
                    </span>
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
