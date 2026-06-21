import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronRight, BookOpen, Sparkles, Trophy } from "lucide-react";
import { findTopicById } from "@/data/curriculum";
import { topicLessons, getTopicCompletionPercent, isLessonComplete, areAllLessonsComplete, isTopicQuizComplete } from "@/data/topicLessons";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";


export default function TopicDetail() {
  const { yearId, topicId } = useParams();
  const navigate = useNavigate();
  const { updateLastStudiedTopic } = useAuth();
  const [, forceUpdate] = useState(0);

  const topic = findTopicById(topicId || "");
  const lessons = topicLessons[topicId || ""] || [];

  useEffect(() => {
    if (topicId) {
      updateLastStudiedTopic(topicId);
      localStorage.setItem('lastStudiedTopic', JSON.stringify({
        id: topicId,
        title: topic?.title || '',
        yearId: yearId
      }));
    }
  }, [topicId, topic?.title, yearId, updateLastStudiedTopic]);

  useEffect(() => {
    const handler = () => forceUpdate(n => n + 1);
    window.addEventListener('storage', handler);
    window.addEventListener('lesson-complete', handler);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('lesson-complete', handler);
    };
  }, []);

  if (!topic) {
    return (
      <div className="text-center py-12">
        <h1 className="font-display text-2xl font-bold mb-4">Topic not found</h1>
        <Link to="/learn" className="text-primary hover:underline">← Back to Learn</Link>
      </div>
    );
  }

  const completionPercent = getTopicCompletionPercent(topicId || "", lessons.length);
  const allLessonsDone = areAllLessonsComplete(topicId || "", lessons.length);
  const topicQuizDone = isTopicQuizComplete(topicId || "");

  return (
    <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
      <SEO
        title={`${topic.title} — MathMind`}
        description={topic.description}
      />

      <Link
        to={`/learn/${yearId}`}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-slide-up text-sm"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Topics</span>
      </Link>

      {/* Header */}
      <div className="card-learning animate-slide-up !p-4 sm:!p-6">
        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
            {topic.icon}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs sm:text-sm text-muted-foreground truncate block">{topic.categoryName}</span>
            <h1 className="font-display text-lg sm:text-2xl font-bold mb-1 sm:mb-2 leading-tight">{topic.title}</h1>
            <p className="text-sm text-muted-foreground line-clamp-3">{topic.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex justify-between text-xs sm:text-sm mb-2 gap-2">
              <span className="text-muted-foreground truncate">{lessons.length} lessons + quiz</span>
              <span className="font-medium text-primary shrink-0">{completionPercent}% complete</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${completionPercent}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Lesson List */}
      <div className="space-y-3 animate-slide-up">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Lessons
        </h2>
        {lessons.map((lesson, index) => {
          const completed = isLessonComplete(topicId || "", index);
          return (
            <Link
              key={index}
              to={`/learn/${yearId}/${topicId}/lesson/${index}`}
              className="topic-card block"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  completed
                    ? 'gradient-primary text-primary-foreground'
                    : 'bg-primary/10 text-primary'
                }`}>
                  {completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{lesson.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {completed ? "Completed ✓" : `Lesson ${index + 1} of ${lessons.length}`}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Topic Quiz Section */}
      <div className="space-y-3 animate-slide-up">
        <h2 className="font-display text-xl font-bold flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          Topic Quiz
        </h2>
        
        {topicQuizDone ? (
          <div className="card-learning bg-[hsl(var(--success))]/10 border-[hsl(var(--success))]/30">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Topic Quiz — Completed ✓</h3>
                <p className="text-xs text-muted-foreground">You've mastered this topic!</p>
              </div>
              <Link 
                to={`/learn/${yearId}/${topicId}/topic-quiz`}
                className="text-sm text-primary hover:underline"
              >
                Retake →
              </Link>
            </div>
          </div>
        ) : allLessonsDone ? (
          <Link
            to={`/learn/${yearId}/${topicId}/topic-quiz`}
            className="card-learning block bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Take Topic Quiz</h3>
                <p className="text-xs text-muted-foreground">
                  All lessons complete! Test your understanding of the entire topic.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
          </Link>
        ) : (
          <div className="card-learning opacity-60">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-muted-foreground">Topic Quiz — Locked</h3>
                <p className="text-xs text-muted-foreground">Complete all {lessons.length} lessons to unlock</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI Help */}
      <Link
        to="/chat"
        className="card-learning bg-accent/30 border-accent/50 flex items-center gap-4 hover:bg-accent/40 transition-colors animate-slide-up"
      >
        <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-6 h-6 text-accent-foreground" />
        </div>
        <div className="flex-1">
          <p className="font-semibold">Need help with this topic?</p>
          <p className="text-sm text-muted-foreground">Ask the AI Tutor for explanations</p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </Link>
    </div>
  );
}
