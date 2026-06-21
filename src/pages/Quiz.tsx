import { SEO } from "@/components/SEO";
import { useState, useRef, useMemo } from "react";
import { ArrowRight, CheckCircle2, XCircle, Sparkles, ArrowLeft, SkipForward } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getTopicQuizQuestions, hasTopicQuizQuestions, TopicQuizQuestion } from "@/data/topicQuizQuestions";
import QuizResults from "@/components/quiz/QuizResults";
import { QuizSelectionSetup } from "@/components/quiz/QuizSelectionSetup";
import { PracticeBreadcrumb } from "@/components/practice/PracticeBreadcrumb";
import { buildQuestionPool, filterQuestionsByDifficulty, QuizDifficulty } from "@/lib/quizUtils";
import { saveQuizAttempt } from "@/lib/quizApi";
import { useAuth } from "@/contexts/AuthContext";
import { curriculum } from "@/data/curriculum";
import { scrollToPageTop } from "@/lib/scrollToPageTop";

type Question = TopicQuizQuestion;

const OPTION_LABELS = ["A", "B", "C", "D", "E", "F"];

export default function Quiz() {
  const { user, yearLevel } = useAuth();

  // ── Selection state (mirrors Practice) ──
  const [selectedYearId, setSelectedYearId] = useState<string>(yearLevel || "year-9");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuizDifficulty>("standard");
  const [questionCount, setQuestionCount] = useState(10);

  // ── Quiz runtime state ──
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const answersRef = useRef<
    {
      question: string;
      wasCorrect: boolean;
      chosenAnswer: string;
      correctAnswer: string;
      skipped?: boolean;
      skillTags?: string[];
    }[]
  >([]);
  const quizStartTime = useRef<number>(Date.now());

  // ── Derived data (mirrors Practice) ──
  const selectedYear = useMemo(
    () => curriculum.find((y) => y.id === selectedYearId) || null,
    [selectedYearId],
  );
  const categories = selectedYear?.categories || [];
  const selectedCategory = useMemo(
    () => categories.find((c) => c.id === selectedCategoryId) || null,
    [categories, selectedCategoryId],
  );
  const topics = selectedCategory?.topics || [];
  const selectedTopic = useMemo(
    () => topics.find((t) => t.id === selectedTopicId) || null,
    [topics, selectedTopicId],
  );

  // Live bank size for the selected topic (drives the "question bank" hint)
  const bankSize = useMemo(() => {
    if (!selectedTopicId) return 0;
    return filterQuestionsByDifficulty(getTopicQuizQuestions(selectedTopicId), selectedDifficulty).length;
  }, [selectedDifficulty, selectedTopicId]);

  // Step calculation
  const currentStep = useMemo(() => {
    if (!selectedYearId) return 1;
    if (!selectedCategoryId) return 2;
    if (!selectedTopicId) return 3;
    return 4;
  }, [selectedYearId, selectedCategoryId, selectedTopicId]);

  const canStart =
    selectedTopicId !== null &&
    hasTopicQuizQuestions(selectedTopicId) &&
    bankSize > 0 &&
    questionCount > 0;

  const breadcrumbParts = [
    selectedYear?.name,
    selectedCategory?.name,
    selectedTopic?.title,
    selectedTopicId ? selectedDifficulty : null,
    selectedTopicId ? `${questionCount} questions` : null,
  ].filter(Boolean) as string[];

  // ── Handlers ──
  const handleStart = () => {
    if (!selectedTopicId || !hasTopicQuizQuestions(selectedTopicId)) return;

    const bank = filterQuestionsByDifficulty(getTopicQuizQuestions(selectedTopicId), selectedDifficulty);
    setAllQuestions(bank);
    const pool = buildQuestionPool(bank, questionCount);

    // Strict topic-alignment validation: every question in the pool must come
    // from the loaded topic bank. If anything slips through, abort generation.
    const bankTexts = new Set(bank.map((q) => q.question));
    const allFromTopic = pool.every((q) => bankTexts.has(q.question));
    if (!allFromTopic || pool.length === 0) {
      console.error("[Quiz] Topic mismatch detected — aborting quiz generation.", {
        topicId: selectedTopicId,
        bankSize: bank.length,
        poolSize: pool.length,
      });
      return;
    }

    setQuestions(pool);
    setQuizStarted(true);
    scrollToPageTop();
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setSkippedCount(0);
    setQuizComplete(false);
    answersRef.current = [];
    quizStartTime.current = Date.now();
  };

  const question = questions[currentQuestion];
  const isCorrect = question && selectedAnswer === question.correctAnswer;

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || !question) return;
    setIsAnswered(true);
    const correct = selectedAnswer === question.correctAnswer;
    if (correct) setScore(score + 1);
    answersRef.current.push({
      question: question.question,
      wasCorrect: correct,
      chosenAnswer: question.options[selectedAnswer],
      correctAnswer: question.options[question.correctAnswer],
      skillTags: question.skillTags,
    });
  };

  const handleSkip = () => {
    if (!question) return;
    setSkippedCount((s) => s + 1);
    answersRef.current.push({
      question: question.question,
      wasCorrect: false,
      chosenAnswer: "Skipped",
      correctAnswer: question.options[question.correctAnswer],
      skipped: true,
      skillTags: question.skillTags,
    });
    goNext();
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      const finalScore = answersRef.current.filter((a) => a.wasCorrect).length;
      const finalSkipped = answersRef.current.filter((a) => a.skipped).length;
      setScore(finalScore);
      setSkippedCount(finalSkipped);
      setQuizComplete(true);
      if (user) {
        saveQuizAttempt({
          userId: user.id,
          topicName: selectedTopic?.title ?? "Practice Quiz",
          topicId: selectedTopicId ?? undefined,
          quizType: "topic",
          score: finalScore,
          total: questions.length,
          skipped: finalSkipped,
          timeTakenSeconds: Math.round((Date.now() - quizStartTime.current) / 1000),
          questions: answersRef.current.map((a) => ({
            question_text: a.question,
            chosen_answer: a.chosenAnswer,
            correct_answer: a.correctAnswer,
            was_correct: a.wasCorrect,
            skipped: a.skipped,
            skill_tags: a.skillTags,
          })),
        }).catch((e) => console.error("Failed to save quiz:", e));
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setSkippedCount(0);
    setQuizComplete(false);
    setQuizStarted(false);
    answersRef.current = [];
    quizStartTime.current = Date.now();
  };

  const resetSelection = () => {
    resetQuiz();
    setSelectedCategoryId(null);
    setSelectedTopicId(null);
  };

  /* ── Setup flow ── */
  if (!quizStarted) {
    return (
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <div className="animate-slide-up">
          <h1 className="font-display text-3xl font-bold mb-2">Quiz</h1>
          <p className="text-muted-foreground">
            Pick a year, chapter and topic — then choose how many questions you want.
          </p>
        </div>
        {breadcrumbParts.length > 0 && <PracticeBreadcrumb parts={breadcrumbParts} />}

        <QuizSelectionSetup
          currentStep={currentStep}
          yearLevel={selectedYearId}
          selectedCategoryId={selectedCategoryId}
          selectedTopicId={selectedTopicId}
          selectedDifficulty={selectedDifficulty}
          selectedCount={questionCount}
          categories={categories}
          topics={topics}
          bankSize={bankSize}
          onSelectYear={(id) => {
            setSelectedYearId(id);
            setSelectedCategoryId(null);
            setSelectedTopicId(null);
          }}
          onSelectCategory={(id) => {
            setSelectedCategoryId(id);
            setSelectedTopicId(null);
          }}
          onSelectTopic={(id) => setSelectedTopicId(id)}
          onSelectDifficulty={setSelectedDifficulty}
          onSelectCount={setQuestionCount}
          onStart={handleStart}
          canStart={canStart}
        />
      </div>
    );
  }

  /* ── Results ── */
  if (quizComplete) {
    return (
      <QuizResults
        quizType="lesson"
        topicName={selectedTopic?.title || "Practice Quiz"}
        topicId={selectedTopicId ?? undefined}
        score={score}
        total={questions.length}
        skipped={skippedCount}
        questions={answersRef.current}
        timeTakenSeconds={Math.round((Date.now() - quizStartTime.current) / 1000)}
        onRetry={() => {
          // Re-build a fresh pool from the same selection
          resetQuiz();
          handleStart();
        }}
        backLink="/quiz"
        backLabel="Back to Quiz"
      />
    );
  }

  /* ── Active quiz ── */
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 sm:space-y-5 pb-6">
      <SEO title="Maths Quiz | MathMind" description="Test your maths knowledge with topic and chapter quizzes aligned to the Victorian Curriculum." noindex />
      {/* ── Header / Progress ── */}

      <div className="animate-slide-up">
        <button
          onClick={resetSelection}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 min-h-[40px] -ml-1 px-1 rounded-lg hover:bg-muted/40 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Change topic
        </button>

        {/* Meta row */}
        <div className="flex items-center justify-between mb-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground tabular-nums">
              {currentQuestion + 1}
              <span className="font-normal"> / {questions.length}</span>
            </span>
            {selectedTopic && (
              <span className="hidden sm:inline-flex text-xs font-medium bg-accent/40 text-accent-foreground px-2.5 py-1 rounded-full">
                {selectedTopic.title}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-success/10 text-success px-2 py-0.5 rounded-full tabular-nums">
              <CheckCircle2 className="w-3 h-3" />
              {score} correct
            </span>
            {skippedCount > 0 && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-muted text-muted-foreground px-2 py-0.5 rounded-full tabular-nums">
                {skippedCount} skipped
              </span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-2 sm:h-2.5 rounded-full bg-muted overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {selectedTopic && (
          <p className="sm:hidden text-xs text-muted-foreground mt-1.5 font-medium">
            {selectedTopic.title}
          </p>
        )}
      </div>

      {/* ── Question card ── */}
      <div className="card-learning animate-slide-up">
        <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4">
          Question {currentQuestion + 1}
        </p>
        <h2 className="font-display text-lg sm:text-xl font-bold mb-4 sm:mb-6 leading-snug">
          {question.question}
        </h2>

        {/* Answer options */}
        <div className="space-y-2 sm:space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const showCorrect = isAnswered && index === question.correctAnswer;
            const showWrong = isAnswered && isSelected && !isCorrect;
            const isPending = isSelected && !isAnswered;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={cn(
                  "quiz-option w-full text-left transition-all duration-150 active:scale-[0.99]",
                  isPending && "quiz-option-selected",
                  showCorrect && "quiz-option-correct",
                  showWrong && "quiz-option-incorrect",
                  isAnswered && !showCorrect && !showWrong && "opacity-50",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold shrink-0 transition-colors",
                      isPending
                        ? "bg-primary text-primary-foreground"
                        : showCorrect
                          ? "bg-success text-success-foreground"
                          : showWrong
                            ? "bg-destructive text-destructive-foreground"
                            : "bg-muted text-muted-foreground",
                    )}
                  >
                    {OPTION_LABELS[index]}
                  </span>
                  <span className="flex-1 text-sm sm:text-base leading-snug">{option}</span>
                  {showCorrect && (
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success shrink-0" />
                  )}
                  {showWrong && (
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback panel */}
        {isAnswered && (
          <div
            className={cn(
              "mt-5 sm:mt-6 p-3.5 sm:p-4 rounded-xl animate-fade-in border",
              isCorrect ? "bg-success/8 border-success/30" : "bg-destructive/8 border-destructive/30",
            )}
          >
            <div className="flex items-center gap-2 mb-1.5">
              {isCorrect ? (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive shrink-0" />
              )}
              <span className="font-semibold text-sm sm:text-base">
                {isCorrect ? "Correct! 🎉" : "Not quite right"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      {/* ── Action buttons ── */}
      <div className="flex gap-2 sm:gap-3 animate-slide-up">
        {!isAnswered ? (
          <>
            <button
              onClick={handleSkip}
              className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-3 rounded-xl border-2 border-border text-muted-foreground hover:border-muted-foreground/50 hover:text-foreground active:scale-[0.98] transition-all text-sm font-medium min-h-[48px]"
            >
              <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Skip</span>
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="btn-primary flex-1 flex items-center justify-center gap-2 min-h-[48px] text-sm sm:text-base font-semibold disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-transform"
            >
              Check Answer
            </button>
          </>
        ) : (
          <button
            onClick={goNext}
            className="btn-primary flex-1 flex items-center justify-center gap-2 min-h-[48px] text-sm sm:text-base font-semibold active:scale-[0.98] transition-transform"
          >
            {isLastQuestion ? "See Results" : "Next Question"}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>

      {/* ── AI Tutor hint link ── */}
      <Link
        to="/chat"
        className="group w-full flex items-center justify-center gap-2 sm:gap-2.5 p-3.5 sm:p-4 rounded-xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 transition-all animate-slide-up"
      >
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform duration-150" />
        <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">
          Need help? Ask the AI Tutor
        </span>
      </Link>

      {/* Note: allQuestions is referenced to keep state coherent for future regen */}
      {allQuestions.length === 0 && null}
    </div>
  );
}
