/**
 * Shuffle an array using Fisher-Yates algorithm.
 */
export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Shuffle answer options while preserving correct answer mapping.
 */
export function shuffleOptions<T extends { options: string[]; correctAnswer: number }>(q: T): T {
  const indices = q.options.map((_, i) => i);
  const shuffled = shuffleArray(indices);
  return {
    ...q,
    options: shuffled.map(i => q.options[i]),
    correctAnswer: shuffled.indexOf(q.correctAnswer),
  };
}

export type QuizDifficulty = "standard" | "challenge" | "review" | "mixed";

export interface DifficultyTaggedQuestion {
  options: string[];
  correctAnswer: number;
  difficulty?: QuizDifficulty;
}

export const QUIZ_DIFFICULTIES: { id: QuizDifficulty; label: string; description: string }[] = [
  { id: "standard", label: "Standard", description: "Core topic skills" },
  { id: "challenge", label: "Challenge", description: "Exam-style stretch" },
  { id: "review", label: "Review", description: "Mixed revision" },
  { id: "mixed", label: "Mixed", description: "Balanced set" },
];

export function filterQuestionsByDifficulty<T extends DifficultyTaggedQuestion>(
  bank: T[],
  difficulty: QuizDifficulty,
): T[] {
  if (difficulty === "mixed") return bank;
  const filtered = bank.filter((q) => (q.difficulty ?? "standard") === difficulty);
  return filtered.length > 0 ? filtered : bank;
}

/**
 * Build a question pool of exactly `count` questions.
 * If the bank has fewer questions than requested, questions are recycled
 * (reshuffled) to fill the remaining slots.
 */
export function buildQuestionPool<T extends { options: string[]; correctAnswer: number }>(
  bank: T[],
  count: number
): T[] {
  if (bank.length === 0) return [];

  const seen = new Set<string>();
  const unique = bank.filter((q) => {
    const key = "question" in q && typeof q.question === "string"
      ? q.question.trim().toLowerCase()
      : JSON.stringify(q);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const pool = shuffleArray(unique).slice(0, Math.min(count, unique.length));

  // Shuffle options for each question independently
  return pool.map(shuffleOptions);
}
