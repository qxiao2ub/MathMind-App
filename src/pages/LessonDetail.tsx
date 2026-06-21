import { SEO } from "@/components/SEO";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Calculator,
  Lightbulb,
  FileText,
  Sigma,
  GraduationCap,
  AlertTriangle,
  ListChecks,
  PenLine,
  ChevronRight,
  Trophy,
  Clock,
  Sparkles,
  RotateCcw,
} from "lucide-react";
import { findTopicById } from "@/data/curriculum";
import { topicLessons, markLessonComplete, isLessonComplete, Lesson, LessonQuizQuestion } from "@/data/topicLessons";
import { useState, useRef } from "react";
import { toast } from "sonner";
import QuizResults from "@/components/quiz/QuizResults";
import { saveLearnActivity } from "@/lib/learnActivityApi";
import { awardLessonXp, awardQuizXp } from "@/lib/gamification/awards";

function getYearDisplayName(yearId?: string) {
  if (!yearId) return "";
  return yearId.split("-").join(" ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function SectionCard({
  icon,
  title,
  children,
  eyebrow,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-4 shadow-sm animate-slide-up sm:p-5 lg:p-6">
      <div className="mb-4 flex items-start gap-3 sm:items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-11 sm:w-11">
          {icon}
        </div>

        <div className="min-w-0">
          {eyebrow && (
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
          )}
          <h2 className="font-display text-lg font-bold leading-tight sm:text-xl">{title}</h2>
        </div>
      </div>

      {children}
    </section>
  );
}

function NumberBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
      {children}
    </span>
  );
}

export default function LessonDetail() {
  const { yearId, topicId, lessonIndex } = useParams();
  const navigate = useNavigate();

  const idx = parseInt(lessonIndex || "0", 10);
  const topic = findTopicById(topicId || "");
  const lessons = topicLessons[topicId || ""] || [];
  const lesson: Lesson | undefined = lessons[idx];

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const answersRef = useRef<
    {
      question: string;
      wasCorrect: boolean;
      chosenAnswer: string;
      correctAnswer: string;
    }[]
  >([]);

  const startTimeRef = useRef<number>(Date.now());

  if (!topic || !lesson) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-12 text-center">
        <SEO title="Lesson not found — MathMind" description="This lesson may have been moved or is not available."  noindex />
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-muted">
          <BookOpen className="h-8 w-8 text-muted-foreground" />
        </div>

        <h1 className="font-display text-2xl font-bold">Lesson not found</h1>

        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          This lesson may have been moved, deleted, or is not available for your current year level.
        </p>

        <Link
          to="/learn"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 active:scale-[0.98]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Learn
        </Link>
      </main>
    );
  }

  const quiz = lesson.quiz;
  const q: LessonQuizQuestion | undefined = quiz[currentQ];
  const completed = isLessonComplete(topicId || "", idx);
  const hasNext = idx < lessons.length - 1;

  const progressPercent = lessons.length > 0 ? Math.round(((idx + 1) / lessons.length) * 100) : 0;

  const quizProgressPercent = quiz.length > 0 ? Math.round(((currentQ + 1) / quiz.length) * 100) : 0;

  const handleAnswer = (ansIdx: number) => {
    if (showExplanation || !q) return;

    setSelectedAnswer(ansIdx);
    setShowExplanation(true);

    const correct = ansIdx === q.correctAnswer;

    if (correct) {
      setCorrectCount((count) => count + 1);
    }

    answersRef.current.push({
      question: q.question,
      wasCorrect: correct,
      chosenAnswer: q.options[ansIdx],
      correctAnswer: q.options[q.correctAnswer],
    });
  };

  const handleNext = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ((questionIndex) => questionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      return;
    }

    setQuizFinished(true);
    markLessonComplete(topicId || "", idx);
    window.dispatchEvent(new Event("lesson-complete"));
    toast.success("Lesson completed! 🎉");
    awardLessonXp({ topicId: topicId || "", lessonIndex: idx }).catch(console.error);
    // Bonus XP if this was a strong score on the embedded quiz.
    if (quiz.length > 0) {
      awardQuizXp({
        quizId: `lesson:${topicId}:${idx}`,
        score: correctCount,
        total: quiz.length,
      }).catch(console.error);
    }

    const durationSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);

    const yearName = topic.yearId ? getYearDisplayName(topic.yearId) : yearId || "";

    const chapterName = "categoryName" in topic ? (topic as any).categoryName : "";

    saveLearnActivity({
      year_level: yearName,
      chapter_name: chapterName,
      topic_name: topic.title,
      lesson_name: lesson.title,
      lesson_index: idx,
      topic_id: topicId || "",
      duration_seconds: durationSeconds,
      completion_percentage: 100,
      is_completed: true,
    }).catch(console.error);
  };

  const resetLessonQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectCount(0);
    answersRef.current = [];
    startTimeRef.current = Date.now();
  };

  if (quizFinished) {
    return (
      <main className="mx-auto w-full max-w-4xl px-3 pb-28 sm:px-4 sm:pb-10 lg:px-0">
        <SEO title={`${lesson.title} Quiz Results — MathMind`} description={`You scored ${correctCount} out of ${quiz.length} on the ${lesson.title} quiz.`}  noindex />
        <div className="mb-5">
          <Link
            to={`/learn/${yearId}/${topicId}`}
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="max-w-[220px] truncate sm:max-w-none">Back to {topic.title}</span>
          </Link>
        </div>

        <QuizResults
          quizType="lesson"
          topicName={lesson.title}
          score={correctCount}
          total={quiz.length}
          questions={answersRef.current}
          onRetry={resetLessonQuiz}
          backLink={`/learn/${yearId}/${topicId}`}
          backLabel="Back to Topic"
          extraAction={
            hasNext
              ? {
                  link: `/learn/${yearId}/${topicId}/lesson/${idx + 1}`,
                  label: "Next Lesson →",
                  onClick: resetLessonQuiz,
                }
              : undefined
          }
        />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-3 pb-[calc(env(safe-area-inset-bottom)+112px)] sm:px-4 sm:pb-10 lg:px-0">
      <SEO title={`${lesson.title} — MathMind`} description={`Learn ${lesson.title} with worked examples and a quiz. Aligned to the Victorian Curriculum.`}  noindex />
      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        {/* Back Button */}
        <Link
          to={`/learn/${yearId}/${topicId}`}
          className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground animate-slide-up"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span className="truncate">Back to {topic.title}</span>
        </Link>

        {/* Header */}
        <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-muted/40 p-4 shadow-sm animate-slide-up sm:p-6 lg:p-8">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Lesson {idx + 1} of {lessons.length}
                </span>

                {completed && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-bold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Completed
                  </span>
                )}
              </div>

              <h1 className="font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{lesson.title}</h1>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Learn the concept, review worked examples, then complete the quiz to lock in your progress.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm backdrop-blur-sm lg:min-w-[260px]">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-muted-foreground">Topic progress</span>
                <span>{progressPercent}%</span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{quiz.length} quiz questions included</span>
              </div>
            </div>
          </div>
        </section>

        {!quizStarted && (
          <>
            {/* Explanation */}
            <SectionCard icon={<BookOpen className="h-5 w-5" />} title="Explanation" eyebrow="Learn">
              <div className="space-y-4">
                {lesson.explanation.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SectionCard>

            {/* Key Points */}
            <SectionCard icon={<Calculator className="h-5 w-5" />} title="Key Points" eyebrow="Remember">
              <ul className="grid gap-3 sm:grid-cols-2">
                {lesson.keyPoints.map((keyPoint, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="min-w-0 break-words font-mono text-sm leading-6">{keyPoint}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Worked Examples */}
            {lesson.workedExamples.map((example, exampleIndex) => (
              <SectionCard
                key={exampleIndex}
                icon={<span className="font-display text-base font-bold">{exampleIndex + 1}</span>}
                title="Worked Example"
                eyebrow="Apply"
              >
                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Problem</p>
                  <p className="break-words text-sm font-medium leading-6 sm:text-base">{example.problem}</p>
                </div>

                <div className="mt-4 space-y-3">
                  {example.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start gap-3 rounded-2xl bg-primary/5 p-3">
                      <NumberBadge>{stepIndex + 1}</NumberBadge>
                      <p className="min-w-0 break-words text-sm leading-6 text-foreground/90 sm:text-base">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-[hsl(var(--success))]/30 bg-[hsl(var(--success))]/10 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[hsl(var(--success))]">Answer</p>
                  <p className="break-words font-semibold leading-6">{example.answer}</p>
                </div>
              </SectionCard>
            ))}

            {/* Tips */}
            {lesson.tips.length > 0 && (
              <SectionCard icon={<Lightbulb className="h-5 w-5" />} title="Tips" eyebrow="Helpful hints">
                <ul className="space-y-3">
                  {lesson.tips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/15 p-3"
                    >
                      <span className="mt-0.5 shrink-0">💡</span>
                      <span className="text-sm leading-6 sm:text-base">{tip}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            )}

            {/* Definitions */}
            {lesson.definitions && lesson.definitions.length > 0 && (
              <SectionCard icon={<FileText className="h-5 w-5" />} title="Key Definitions" eyebrow="Vocabulary">
                <dl className="grid gap-3 sm:grid-cols-2">
                  {lesson.definitions.map((definition, index) => (
                    <div key={index} className="rounded-2xl border border-border bg-muted/30 p-4">
                      <dt className="font-bold">{definition.term}</dt>
                      <dd className="mt-1 text-sm leading-6 text-muted-foreground">{definition.meaning}</dd>
                    </div>
                  ))}
                </dl>
              </SectionCard>
            )}

            {/* Formulas */}
            {lesson.formulas && lesson.formulas.length > 0 && (
              <SectionCard icon={<Sigma className="h-5 w-5" />} title="Important Formulas" eyebrow="Math tools">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {lesson.formulas.map((formula, index) => (
                    <li key={index} className="rounded-2xl border border-primary/10 bg-primary/5 p-4">
                      <p className="text-sm font-bold">{formula.name}</p>

                      <p className="mt-2 overflow-x-auto whitespace-nowrap rounded-xl bg-background/70 px-3 py-2 font-mono text-sm sm:text-base">
                        {formula.formula}
                      </p>

                      {formula.note && <p className="mt-2 text-xs leading-5 text-muted-foreground">{formula.note}</p>}
                    </li>
                  ))}
                </ul>
              </SectionCard>
            )}

            {/* Exam Question */}
            {lesson.examQuestion && (
              <SectionCard
                icon={<GraduationCap className="h-5 w-5" />}
                title={`Exam-Style Question${lesson.examQuestion.marks ? ` (${lesson.examQuestion.marks} marks)` : ""}`}
                eyebrow="Test yourself"
              >
                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Question</p>
                  <p className="break-words text-sm font-medium leading-6 sm:text-base">
                    {lesson.examQuestion.problem}
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  {lesson.examQuestion.solution.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start gap-3 rounded-2xl bg-primary/5 p-3">
                      <NumberBadge>{stepIndex + 1}</NumberBadge>
                      <p className="min-w-0 break-words text-sm leading-6">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-[hsl(var(--success))]/30 bg-[hsl(var(--success))]/10 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[hsl(var(--success))]">Answer</p>
                  <p className="break-words font-semibold leading-6">{lesson.examQuestion.answer}</p>
                </div>
              </SectionCard>
            )}

            {/* Common Errors */}
            {lesson.commonErrors && lesson.commonErrors.length > 0 && (
              <SectionCard
                icon={<AlertTriangle className="h-5 w-5 text-destructive" />}
                title="Common Errors"
                eyebrow="Avoid these"
              >
                <ul className="space-y-3">
                  {lesson.commonErrors.map((error, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-destructive/10 bg-destructive/10 p-3"
                    >
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span className="text-sm leading-6">{error}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            )}

            {/* Summary */}
            {lesson.summary && lesson.summary.length > 0 && (
              <SectionCard icon={<ListChecks className="h-5 w-5" />} title="Summary" eyebrow="Final check">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {lesson.summary.map((summaryItem, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm leading-6">{summaryItem}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            )}

            {/* Practice */}
            {lesson.practice && lesson.practice.length > 0 && (
              <SectionCard icon={<PenLine className="h-5 w-5" />} title="Quick Practice" eyebrow="Try it">
                <ol className="space-y-3">
                  {lesson.practice.map((practiceItem, index) => (
                    <li key={index} className="rounded-2xl border border-border bg-muted/30 p-4">
                      <div className="flex items-start gap-3">
                        <NumberBadge>{index + 1}</NumberBadge>
                        <p className="min-w-0 break-words text-sm font-medium leading-6 sm:text-base">
                          {practiceItem.question}
                        </p>
                      </div>

                      <details className="mt-3 rounded-xl bg-background/80 px-3 py-2">
                        <summary className="cursor-pointer text-xs font-bold text-primary">Show answer</summary>
                        <p className="mt-2 overflow-x-auto whitespace-nowrap font-mono text-sm">
                          {practiceItem.answer}
                        </p>
                      </details>
                    </li>
                  ))}
                </ol>
              </SectionCard>
            )}

            {/* Desktop CTA */}
            <div className="hidden sm:block">
              <button
                onClick={() => {
                  setQuizStarted(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex w-full items-center justify-center gap-3 rounded-3xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-sm transition hover:opacity-90 active:scale-[0.99] animate-slide-up"
              >
                Start Lesson Quiz
                <span className="rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs">
                  {quiz.length} questions
                </span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Floating CTA */}
            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/85 p-3 pb-[calc(env(safe-area-inset-bottom)+12px)] shadow-[0_-12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:hidden">
              <button
                onClick={() => {
                  setQuizStarted(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition active:scale-[0.98]"
              >
                Start Quiz
                <span className="rounded-full bg-primary-foreground/20 px-2 py-0.5 text-[11px]">{quiz.length} Qs</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </>
        )}

        {/* Quiz Section */}
        {quizStarted && !quizFinished && q && (
          <section className="rounded-3xl border border-border bg-card p-4 shadow-sm animate-slide-up sm:p-5 lg:p-6">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Question {currentQ + 1} of {quiz.length}
                </p>
                <h2 className="mt-2 font-display text-lg font-bold leading-tight sm:text-2xl">{q.question}</h2>
              </div>

              <button
                onClick={resetLessonQuiz}
                className="inline-flex w-fit items-center gap-2 rounded-2xl border border-border bg-background px-3 py-2 text-xs font-bold text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Restart
              </button>
            </div>

            <div className="mb-5">
              <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
                <span className="text-muted-foreground">Quiz progress</span>
                <span>{quizProgressPercent}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${quizProgressPercent}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              {q.options.map((option, optionIndex) => {
                const isCorrect = optionIndex === q.correctAnswer;
                const isSelected = optionIndex === selectedAnswer;

                let optionClass =
                  "flex w-full items-start gap-3 rounded-2xl border p-4 text-left text-sm leading-6 transition-all duration-200 active:scale-[0.99] sm:text-base";

                if (showExplanation && isCorrect) {
                  optionClass += " border-[hsl(var(--success))]/40 bg-[hsl(var(--success))]/10 text-foreground";
                } else if (showExplanation && isSelected) {
                  optionClass += " border-destructive/40 bg-destructive/10 text-foreground";
                } else if (isSelected) {
                  optionClass += " border-primary bg-primary/10";
                } else {
                  optionClass += " border-border bg-background hover:border-primary/30 hover:bg-primary/5";
                }

                return (
                  <button
                    key={optionIndex}
                    onClick={() => handleAnswer(optionIndex)}
                    className={optionClass}
                    disabled={showExplanation}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        showExplanation && isCorrect
                          ? "bg-[hsl(var(--success))] text-white"
                          : showExplanation && isSelected
                            ? "bg-destructive text-destructive-foreground"
                            : "bg-muted text-foreground"
                      }`}
                    >
                      {String.fromCharCode(65 + optionIndex)}
                    </span>

                    <span className="min-w-0 flex-1 break-words">{option}</span>

                    {showExplanation && isCorrect && (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--success))]" />
                    )}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mt-5 rounded-3xl border border-border bg-muted/40 p-4 sm:p-5">
                <p className="mb-2 flex items-center gap-2 font-bold">
                  {selectedAnswer === q.correctAnswer ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-[hsl(var(--success))]" />
                      Correct
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      Not quite
                    </>
                  )}
                </p>

                <p className="text-sm leading-6 text-muted-foreground sm:text-base">{q.explanation}</p>

                <button
                  onClick={handleNext}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 active:scale-[0.98] sm:w-fit"
                >
                  {currentQ < quiz.length - 1 ? "Next Question" : "Finish Quiz"}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
