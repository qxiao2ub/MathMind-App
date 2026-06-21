export interface QuizAttempt {
  id: string;
  user_id: string;
  quiz_type: string;
  topic_id: string | null;
  topic_name: string;
  score: number;
  total: number;
  percentage: number;
  time_taken_seconds: number | null;
  created_at: string;
}

export interface QuizAttemptQuestion {
  id: string;
  attempt_id: string;
  user_id: string;
  question_text: string;
  chosen_answer: string | null;
  correct_answer: string;
  was_correct: boolean;
  skill_tags: string[] | null;
  error_type: string | null;
  created_at: string;
}

export interface PracticeAttempt {
  id: string;
  user_id: string;
  topic_name: string;
  difficulty: string;
  question_text: string;
  user_answer: string | null;
  correct_answer: string;
  was_correct: boolean;
  hint_used: boolean;
  solution_viewed: boolean;
  time_taken_seconds: number | null;
  created_at: string;
}

export interface StudentSkillProfile {
  user_id: string;
  mastery_by_topic: Record<string, {
    mastery: number;
    last10: number[];
    common_errors: string[];
  }>;
  weak_skills: string[];
  strength_skills: string[];
  streak_days: number;
  last_activity_at: string | null;
  updated_at: string;
}

export interface AISummaryEnriched {
  overview: string;
  trend: {
    recentAveragePercent: number;
    topicMasteryEstimate: number;
    improving: boolean;
  };
  strengths: Array<{ label: string; evidence: string }>;
  weakAreas: Array<{ label: string; why: string; evidence: string }>;
  nextSteps: Array<{ action: string; durationMinutes: number; successCheck: string }>;
  recommendedTopics: Array<{ topic: string; reason: string }>;
  practiceQuestions: Array<{ question: string; hint: string; answer: string }>;
  attemptId?: string;
  percentage?: number;
}

export interface HistoryFilters {
  topicName?: string;
  dateRange?: "7" | "30" | "90" | "all";
  correctnessFilter?: "all" | "correct" | "incorrect";
}
