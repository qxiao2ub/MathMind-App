import { SEO } from "@/components/SEO";
import { useState, useRef, useMemo, useCallback } from "react";
import { ArrowRight, RotateCcw, AlertTriangle } from "lucide-react";
import { savePracticeAttempt } from "@/lib/historyApi";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { curriculum } from "@/data/curriculum";
import { PracticeSetup } from "@/components/practice/PracticeSetup";
import { PracticeQuestion } from "@/components/practice/PracticeQuestion";
import { PracticeBreadcrumb } from "@/components/practice/PracticeBreadcrumb";
import { PracticeResults } from "@/components/practice/PracticeResults";
import {
  generateSubtopicPractice,
  generateChapterTest,
  getQuestionPoolSize,
  getChapterPoolSize,
  PracticeQuestionItem,
  PracticeMode,
} from "@/lib/practiceEngine";
import { isChapterMastered } from "@/data/topicLessons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { scrollToPageTop } from "@/lib/scrollToPageTop";
import { awardPracticeXp } from "@/lib/gamification/awards";
import { Zap } from "lucide-react";

const difficulties = [
  { id: "basic", label: "Basic", emoji: "🌱", color: "bg-success/20 text-success border-success/30" },
  { id: "standard", label: "Standard", emoji: "🌿", color: "bg-accent/50 text-accent-foreground border-accent" },
  { id: "challenge", label: "Challenge", emoji: "🌳", color: "bg-destructive/20 text-destructive border-destructive/30" },
  { id: "exam-style", label: "Exam-Style", emoji: "🎓", color: "bg-primary/20 text-primary border-primary/30" },
];

export default function Practice() {
  const { yearLevel } = useAuth();
  const [selectedYearId, setSelectedYearId] = useState<string>(yearLevel);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [practiceMode, setPracticeMode] = useState<PracticeMode | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [practiceStarted, setPracticeStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [currentQuestions, setCurrentQuestions] = useState<PracticeQuestionItem[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [poolExhausted, setPoolExhausted] = useState(false);
  const [shownIds, setShownIds] = useState<Set<string>>(new Set());
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const questionStartTime = useRef<number>(Date.now());
  const sessionStartTime = useRef<number>(Date.now());

  // Derived data
  const selectedYear = useMemo(() => curriculum.find((y) => y.id === selectedYearId) || null, [selectedYearId]);
  const categories = selectedYear?.categories || [];
  const selectedCategory = useMemo(() => categories.find((c) => c.id === selectedCategoryId) || null, [categories, selectedCategoryId]);
  const topics = selectedCategory?.topics || [];
  const selectedTopic = useMemo(() => topics.find((t) => t.id === selectedTopicId) || null, [topics, selectedTopicId]);

  // Step calculation
  const currentStep = useMemo(() => {
    if (!selectedYearId) return 1;
    if (!selectedCategoryId) return 2;
    if (!practiceMode) return 3;
    if (practiceMode === "subtopic" && !selectedTopicId) return 4;
    if (!selectedDifficulty) return practiceMode === "subtopic" ? 5 : 4;
    if (!selectedCount) return practiceMode === "subtopic" ? 6 : 5;
    return practiceMode === "subtopic" ? 7 : 6;
  }, [selectedYearId, selectedCategoryId, practiceMode, selectedTopicId, selectedDifficulty, selectedCount]);

  const poolSize = useMemo(() => {
    if (!selectedDifficulty) return 0;
    if (practiceMode === "chapter-test" && selectedCategory) {
      return getChapterPoolSize(selectedCategory, selectedDifficulty);
    }
    if (practiceMode === "subtopic" && selectedTopicId && selectedCategoryId) {
      return getQuestionPoolSize(selectedTopicId, selectedCategoryId, selectedDifficulty);
    }
    return 0;
  }, [practiceMode, selectedCategory, selectedTopicId, selectedCategoryId, selectedDifficulty]);

  const canStart = selectedDifficulty !== null && selectedCount !== null && poolSize > 0 && (
    practiceMode === "chapter-test" || (practiceMode === "subtopic" && selectedTopicId !== null)
  );

  const generateSet = useCallback((excludeIds: Set<string>) => {
    if (!selectedDifficulty || !selectedCount) return;

    let result: { questions: PracticeQuestionItem[]; poolExhausted: boolean };

    if (practiceMode === "chapter-test" && selectedCategory) {
      result = generateChapterTest(selectedCategory, selectedDifficulty, excludeIds, selectedCount);
    } else if (practiceMode === "subtopic" && selectedTopicId && selectedCategoryId) {
      result = generateSubtopicPractice(selectedTopicId, selectedCategoryId, selectedDifficulty, excludeIds, selectedCount);
    } else return;

    setCurrentQuestions(result.questions);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsChecked(false);
    setPoolExhausted(result.poolExhausted);
    const newShown = new Set(excludeIds);
    result.questions.forEach((q) => newShown.add(q.id));
    setShownIds(newShown);
    questionStartTime.current = Date.now();
  }, [practiceMode, selectedCategory, selectedTopicId, selectedCategoryId, selectedDifficulty, selectedCount]);

  const handleStartPractice = () => {
    setPracticeStarted(true);
    setShowResults(false);
    setTotalAttempts(0);
    setCorrectCount(0);
    setUserAnswers([]);
    const fresh = new Set<string>();
    setShownIds(fresh);
    generateSet(fresh);
    sessionStartTime.current = Date.now();
    scrollToPageTop();
  };

  const handleQuickStart = () => {
    const year = curriculum.find((y) => y.id === selectedYearId) || curriculum[0];
    if (!year) return;
    const cat = year.categories.find((c) => !isChapterMastered(c.id, c.topics)) || year.categories[0];
    const topic = cat?.topics[0];
    if (!cat || !topic) return;

    setSelectedYearId(year.id);
    setSelectedCategoryId(cat.id);
    setPracticeMode("subtopic");
    setSelectedTopicId(topic.id);
    setSelectedDifficulty("standard");
    setSelectedCount(10);
    setPracticeStarted(true);
    setShowResults(false);
    setTotalAttempts(0);
    setCorrectCount(0);
    setUserAnswers([]);

    const fresh = new Set<string>();
    const result = generateSubtopicPractice(topic.id, cat.id, "standard", fresh, 10);
    setCurrentQuestions(result.questions);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsChecked(false);
    setPoolExhausted(result.poolExhausted);
    const newShown = new Set<string>();
    result.questions.forEach((q) => newShown.add(q.id));
    setShownIds(newShown);
    sessionStartTime.current = Date.now();
    questionStartTime.current = Date.now();
    scrollToPageTop();
  };



  const handleCheckAnswer = async () => {
    const q = currentQuestions[currentQIndex];
    if (!q || selectedOption === null) return;
    setIsChecked(true);
    const wasCorrect = selectedOption === q.correctAnswer;
    const timeTaken = Math.round((Date.now() - questionStartTime.current) / 1000);
    setTotalAttempts((p) => p + 1);
    if (wasCorrect) setCorrectCount((p) => p + 1);
    setUserAnswers((prev) => {
      const next = [...prev];
      next[currentQIndex] = selectedOption;
      return next;
    });

    try {
      await savePracticeAttempt({
        topic_name: q.topicTitle,
        difficulty: selectedDifficulty || "standard",
        question_text: q.question,
        user_answer: q.options[selectedOption] || null,
        correct_answer: q.options[q.correctAnswer],
        was_correct: wasCorrect,
        hint_used: false,
        solution_viewed: false,
        time_taken_seconds: timeTaken,
      });
    } catch (e) {
      console.error("Failed to save practice attempt:", e);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < currentQuestions.length - 1) {
      setCurrentQIndex((i) => i + 1);
      setSelectedOption(null);
      setIsChecked(false);
      questionStartTime.current = Date.now();
    } else {
      // Last question answered — show results
      setShowResults(true);
      const finalCorrect = correctCount + (selectedOption === currentQuestions[currentQIndex]?.correctAnswer ? 1 : 0);
      awardPracticeXp({
        sessionId: `practice:${sessionStartTime.current}`,
        correctStreak: finalCorrect,
      }).catch(console.error);
    }
  };

  const handleRetryIncorrect = () => {
    const incorrect = currentQuestions.filter((q, i) => userAnswers[i] !== q.correctAnswer);
    if (incorrect.length === 0) {
      toast.success("You got everything right! Generating a new set.");
      generateSet(shownIds);
      return;
    }
    setCurrentQuestions(incorrect);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsChecked(false);
    setUserAnswers([]);
    setShowResults(false);
    setTotalAttempts(0);
    setCorrectCount(0);
    sessionStartTime.current = Date.now();
    questionStartTime.current = Date.now();
    scrollToPageTop();
  };

  const handleNewSetFromResults = () => {
    setShowResults(false);
    setUserAnswers([]);
    setTotalAttempts(0);
    setCorrectCount(0);
    generateSet(shownIds);
    sessionStartTime.current = Date.now();
    scrollToPageTop();
  };

  const handleReset = () => {
    setPracticeStarted(false);
    setShowResults(false);
    setSelectedOption(null);
    setIsChecked(false);
    setSelectedDifficulty(null);
    setSelectedCount(null);
    setSelectedTopicId(null);
    setSelectedCategoryId(null);
    setPracticeMode(null);
    setCurrentQuestions([]);
    setShownIds(new Set());
    setPoolExhausted(false);
    setUserAnswers([]);
  };

  const modeLabel = practiceMode === "chapter-test" ? "Chapter Test" : "Subtopic Practice";
  const breadcrumbParts = [
    selectedYear?.name,
    selectedCategory?.name,
    practiceMode ? modeLabel : null,
    practiceMode === "subtopic" ? selectedTopic?.title : null,
    selectedDifficulty ? difficulties.find((d) => d.id === selectedDifficulty)?.label : null,
  ].filter(Boolean) as string[];

  // Setup flow
  if (!practiceStarted) {
    return (
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <div className="animate-slide-up">
          <h1 className="font-display text-3xl font-bold mb-2">Practice</h1>
          <p className="text-muted-foreground">Choose your topic, difficulty and question count to sharpen your skills</p>
        </div>
        {breadcrumbParts.length > 0 && <PracticeBreadcrumb parts={breadcrumbParts} />}

        {/* Quick Practice */}
        <div className="rounded-2xl border-2 border-primary/30 bg-primary/10 p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between animate-slide-up">
          <div className="flex items-start gap-3 min-w-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h2 className="font-display text-base sm:text-lg font-bold">Jump right in</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">10-question session · Standard difficulty · Your current chapter</p>
            </div>
          </div>
          <button
            onClick={handleQuickStart}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
          >
            Start Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>


        {selectedDifficulty && poolSize === 0 && (
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              No questions available for this selection. Try a different topic or difficulty.
            </AlertDescription>
          </Alert>
        )}

        <PracticeSetup
          currentStep={currentStep}
          yearLevel={selectedYearId}
          singleYear={curriculum.filter((y) => y.id === selectedYearId).length === 1}
          selectedCategoryId={selectedCategoryId}
          selectedTopicId={selectedTopicId}
          selectedDifficulty={selectedDifficulty}
          selectedCount={selectedCount}
          practiceMode={practiceMode}
          categories={categories}
          topics={topics}
          difficulties={difficulties}
          onSelectYear={(id) => { setSelectedYearId(id); setSelectedCategoryId(null); setPracticeMode(null); setSelectedTopicId(null); setSelectedDifficulty(null); setSelectedCount(null); }}
          onSelectCategory={(id) => { setSelectedCategoryId(id); setPracticeMode(null); setSelectedTopicId(null); setSelectedDifficulty(null); setSelectedCount(null); }}
          onSelectPracticeMode={(mode) => { setPracticeMode(mode); setSelectedTopicId(null); setSelectedDifficulty(null); setSelectedCount(null); }}
          onSelectTopic={(id) => { setSelectedTopicId(id); setSelectedDifficulty(null); setSelectedCount(null); }}
          onSelectDifficulty={(id) => { setSelectedDifficulty(id); setSelectedCount(null); }}
          onSelectCount={setSelectedCount}
          onStart={handleStartPractice}
          canStart={canStart}
        />
      </div>
    );
  }

  // Show results after completing all questions
  if (showResults) {
    const sessionTime = Math.round((Date.now() - sessionStartTime.current) / 1000);
    return (
      <div>
        <PracticeBreadcrumb parts={breadcrumbParts} />
        <PracticeResults
          questions={currentQuestions}
          userAnswers={userAnswers}
          difficulty={difficulties.find((d) => d.id === selectedDifficulty)?.label || "Standard"}
          modeLabel={modeLabel}
          onRetry={handleRetryIncorrect}
          onNewSet={handleNewSetFromResults}
          onReset={handleReset}
          timeTakenSeconds={sessionTime}
        />
      </div>
    );
  }

  // Active practice
  const currentQ = currentQuestions[currentQIndex] || null;
  const isLastInSet = currentQIndex >= currentQuestions.length - 1;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <SEO title="Maths Practice | MathMind" description="Targeted maths practice sessions with instant feedback and mastery tracking." noindex />
      <PracticeBreadcrumb parts={breadcrumbParts} />


      <div className="flex items-center justify-between animate-slide-up">
        <div>
          <span className="text-sm text-muted-foreground">{modeLabel}</span>
          <h1 className="font-display text-2xl font-bold">Practice Mode</h1>
        </div>
        <div className="flex items-center gap-2">
          {totalAttempts > 0 && (
            <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              {Math.round((correctCount / totalAttempts) * 100)}% accuracy
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficulties.find((d) => d.id === selectedDifficulty)?.color}`}>
            {difficulties.find((d) => d.id === selectedDifficulty)?.emoji}{" "}
            {difficulties.find((d) => d.id === selectedDifficulty)?.label}
          </span>
        </div>
      </div>

      {currentQuestions.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Question {currentQIndex + 1} of {currentQuestions.length}
        </div>
      )}

      {poolExhausted && (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            You have attempted most available questions. Some questions may repeat.
          </AlertDescription>
        </Alert>
      )}

      {currentQ ? (
        <PracticeQuestion
          question={currentQ}
          selectedOption={selectedOption}
          isChecked={isChecked}
          onSelectOption={setSelectedOption}
          onCheckAnswer={handleCheckAnswer}
          onNextQuestion={handleNextQuestion}
          isLastInSet={isLastInSet}
        />
      ) : (
        <div className="card-learning text-center py-8">
          <p className="text-muted-foreground">No questions available. Try generating a new set.</p>
        </div>
      )}

      <div className="flex gap-4 animate-slide-up">
        <button onClick={() => generateSet(shownIds)} className="btn-primary flex-1 flex items-center justify-center gap-2">
          Generate New Set
          <ArrowRight className="w-5 h-5" />
        </button>
        <button onClick={handleReset} className="px-4 py-3 rounded-xl border border-border hover:bg-muted transition-colors">
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
