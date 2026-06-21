import { SEO } from "@/components/SEO";
import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { findYearById } from "@/data/curriculum";
import { getCategoryQuizQuestions } from "@/data/categoryQuizQuestions";
import { markCategoryQuizComplete } from "@/data/topicLessons";
import { toast } from "sonner";
import QuizResults from "@/components/quiz/QuizResults";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { buildQuestionPool } from "@/lib/quizUtils";
import { awardQuizXp } from "@/lib/gamification/awards";

export default function CategoryQuiz() {
  const { yearId, categoryId } = useParams();
  const { user } = useAuth();
  const year = findYearById(yearId || "");
  const category = year?.categories.find(c => c.id === categoryId);
  const allQuestions = getCategoryQuizQuestions(categoryId || "");
  const [questions, setQuestions] = useState(() => buildQuestionPool(allQuestions, Math.min(20, allQuestions.length)));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const answersRef = useRef<{ question: string; wasCorrect: boolean; chosenAnswer: string; correctAnswer: string; skillTags?: string[] }[]>([]);
  const quizStartTime = useRef<number>(Date.now());

  if (!category || allQuestions.length === 0 || questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="font-display text-2xl font-bold mb-4">Category quiz not available</h1>
        <Link to={`/learn/${yearId}`} className="text-primary hover:underline">← Back to Topics</Link>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsAnswered(true);
    const correct = selectedAnswer === question.correctAnswer;
    if (correct) setScore(s => s + 1);
    answersRef.current.push({
      question: question.question,
      wasCorrect: correct,
      chosenAnswer: question.options[selectedAnswer],
      correctAnswer: question.options[question.correctAnswer],
    });
  };

  const saveToSupabase = async (finalScore: number) => {
    if (!user) return;
    const timeTaken = Math.round((Date.now() - quizStartTime.current) / 1000);
    const percentage = Math.round((finalScore / questions.length) * 100);

    try {
      const { data: attempt, error: attemptError } = await supabase
        .from("quiz_attempts")
        .insert({
          user_id: user.id,
          quiz_type: "category",
          topic_name: category.name,
          topic_id: categoryId || null,
          score: finalScore,
          total: questions.length,
          percentage,
          time_taken_seconds: timeTaken,
        })
        .select("id")
        .single();

      if (attemptError) throw attemptError;

      const questionRows = answersRef.current.map(q => ({
        attempt_id: attempt.id,
        user_id: user.id,
        question_text: q.question,
        chosen_answer: q.chosenAnswer,
        correct_answer: q.correctAnswer,
        was_correct: q.wasCorrect,
        skill_tags: q.skillTags || null,
      }));

      await supabase.from("quiz_attempt_questions").insert(questionRows);
    } catch (e) {
      console.error("Failed to save quiz attempt:", e);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(q => q + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      const finalScore = answersRef.current.filter((a) => a.wasCorrect).length;
      const percentage = Math.round((finalScore / questions.length) * 100);
      setQuizComplete(true);
      markCategoryQuizComplete(categoryId || "", percentage);
      saveToSupabase(finalScore);
      window.dispatchEvent(new Event("lesson-complete"));
      toast.success("Category mastery quiz completed! 🏅");
      const elapsed = Math.round((Date.now() - quizStartTime.current) / 1000);
      awardQuizXp({
        quizId: `category:${categoryId}:${quizStartTime.current}`,
        score: finalScore,
        total: questions.length,
        timeSeconds: elapsed,
      }).catch(console.error);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizComplete(false);
    setQuestions(buildQuestionPool(allQuestions, Math.min(20, allQuestions.length)));
    answersRef.current = [];
    quizStartTime.current = Date.now();
  };

  if (quizComplete) {
    return (
      <QuizResults
        quizType="category"
        topicName={category.name}
        topicId={categoryId}
        score={score}
        total={questions.length}
        questions={answersRef.current}
        timeTakenSeconds={Math.round((Date.now() - quizStartTime.current) / 1000)}
        onRetry={resetQuiz}
        backLink={`/learn/${yearId}`}
        backLabel={`Back to ${year?.name}`}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <SEO title={`${category.name} Quiz — MathMind`} description={`Test your knowledge with the ${category.name} quiz. Aligned to the Victorian Curriculum.`}  noindex />
      <div className="animate-slide-up">
        <Link to={`/learn/${yearId}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to {year?.name}
        </Link>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm font-medium bg-accent/50 px-3 py-1 rounded-full text-accent-foreground">{category.name} — Mastery Quiz</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="card-learning animate-slide-up">
        <h2 className="font-display text-xl font-bold mb-6">{question.question}</h2>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const showCorrect = isAnswered && index === question.correctAnswer;
            const showIncorrect = isAnswered && isSelected && !isCorrect;
            return (
              <button key={index} onClick={() => handleAnswer(index)} disabled={isAnswered}
                className={cn("quiz-option", isSelected && !isAnswered && "quiz-option-selected", showCorrect && "quiz-option-correct", showIncorrect && "quiz-option-incorrect")}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-semibold">{String.fromCharCode(65 + index)}</span>
                  <span className="flex-1 text-left">{option}</span>
                  {showCorrect && <CheckCircle2 className="w-5 h-5 text-[hsl(var(--success))]" />}
                  {showIncorrect && <XCircle className="w-5 h-5 text-destructive" />}
                </div>
              </button>
            );
          })}
        </div>
        {isAnswered && (
          <div className={cn("mt-6 p-4 rounded-xl animate-fade-in", isCorrect ? "bg-[hsl(var(--success))]/10 border border-[hsl(var(--success))]/30" : "bg-destructive/10 border border-destructive/30")}>
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? <CheckCircle2 className="w-5 h-5 text-[hsl(var(--success))]" /> : <XCircle className="w-5 h-5 text-destructive" />}
              <span className="font-semibold">{isCorrect ? "Correct! 🎉" : "Not quite right"}</span>
            </div>
            <p className="text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex gap-4 animate-slide-up">
        {!isAnswered ? (
          <button onClick={handleSubmit} disabled={selectedAnswer === null} className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">Check Answer</button>
        ) : (
          <button onClick={handleNext} className="btn-primary flex-1 flex items-center justify-center gap-2">
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"} <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
