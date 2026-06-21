// Lightweight helper: award XP for a quiz, based on score percent + perfect-bonus.
// Also unlocks badges for first/perfect quiz.
import { awardXp, unlockBadge } from "@/lib/gamification/awardXp";
import { XP_RULES } from "@/lib/gamification/xpRules";

export async function awardQuizXp(opts: {
  quizId: string; // unique key for idempotency, e.g. attempt id or topic+timestamp
  score: number;
  total: number;
  timeSeconds?: number;
}) {
  const { quizId, score, total, timeSeconds } = opts;
  if (total <= 0) return;
  const pct = Math.round((score / total) * 100);
  let amount = XP_RULES.QUIZ_COMPLETE;
  let stars = 0;
  if (pct >= 80) amount += XP_RULES.QUIZ_GOOD_BONUS;
  if (pct === 100) {
    amount += XP_RULES.QUIZ_PERFECT_BONUS;
    stars += 1;
    unlockBadge("perfect_quiz");
  }
  if (timeSeconds && timeSeconds <= 120 && total >= 5) {
    unlockBadge("speed_solver");
  }
  unlockBadge("first_quiz");
  await awardXp({
    amount,
    source: "quiz_complete",
    stars,
    metadata: { percent: pct, score, total },
    idempotencyKey: `quiz:${quizId}`,
  });
}

export async function awardLessonXp(opts: { topicId: string; lessonIndex: number }) {
  unlockBadge("first_lesson");
  await awardXp({
    amount: XP_RULES.LESSON_COMPLETE,
    source: "lesson_complete",
    stars: 1,
    metadata: opts,
    idempotencyKey: `lesson:${opts.topicId}:${opts.lessonIndex}`,
  });
}

export async function awardPracticeXp(opts: { sessionId: string; correctStreak: number }) {
  let amount = XP_RULES.PRACTICE_SET;
  const combos = Math.floor(opts.correctStreak / 3);
  amount += combos * XP_RULES.PRACTICE_COMBO_BONUS;
  await awardXp({
    amount,
    source: "practice_set",
    metadata: { combo: combos, streak: opts.correctStreak },
    idempotencyKey: `practice:${opts.sessionId}`,
  });
}
