// Central XP reward table — single source of truth.
export const XP_RULES = {
  LESSON_COMPLETE: 10,
  CHAPTER_OPEN: 2,
  CHAPTER_COMPLETE: 25,
  QUIZ_COMPLETE: 15,
  QUIZ_GOOD_BONUS: 10,   // >= 80%
  QUIZ_PERFECT_BONUS: 20, // 100%
  PRACTICE_SET: 10,
  PRACTICE_COMBO_BONUS: 5, // every 3 consecutive correct
  DAILY_LOGIN: 5,
  STREAK_7_DAY: 50,
} as const;

export type XpSource =
  | "lesson_complete"
  | "chapter_open"
  | "chapter_complete"
  | "quiz_complete"
  | "practice_set"
  | "daily_login"
  | "streak_7_day";
