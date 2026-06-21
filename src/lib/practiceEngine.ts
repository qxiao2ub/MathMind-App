import { topicLessons, Lesson, LessonQuizQuestion } from "@/data/topicLessons";
import { curriculum, Topic, Category } from "@/data/curriculum";

export type PracticeMode = "subtopic" | "chapter-test";

export interface PracticeQuestionItem {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topicId: string;
  topicTitle: string;
  categoryId: string;
  lessonTitle: string;
  difficulty: string;
}

/**
 * Extract all quiz questions from lesson data for a given topic.
 */
function getQuestionsForTopic(topicId: string, categoryId: string): PracticeQuestionItem[] {
  const lessons = topicLessons[topicId];
  if (!lessons || lessons.length === 0) return [];

  let topicTitle = topicId;
  for (const year of curriculum) {
    for (const cat of year.categories) {
      const t = cat.topics.find((tp) => tp.id === topicId);
      if (t) { topicTitle = t.title; break; }
    }
  }

  const all: PracticeQuestionItem[] = [];
  lessons.forEach((lesson, lessonIdx) => {
    if (!lesson.quiz || lesson.quiz.length === 0) return;
    lesson.quiz.forEach((q, qIdx) => {
      all.push({
        id: `${topicId}-L${lessonIdx}-Q${qIdx}`,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        topicId,
        topicTitle,
        categoryId,
        lessonTitle: lesson.title,
        difficulty: inferDifficulty(lessonIdx, lessons.length, qIdx, lesson.quiz.length),
      });
    });
  });
  return all;
}

function inferDifficulty(lessonIdx: number, totalLessons: number, qIdx: number, totalQs: number): string {
  const ratio = (totalLessons > 1 ? lessonIdx / (totalLessons - 1) : 0) * 0.6
    + (totalQs > 1 ? qIdx / (totalQs - 1) : 0) * 0.4;
  if (ratio < 0.33) return "basic";
  if (ratio < 0.66) return "standard";
  return "challenge";
}

function filterByDifficulty(questions: PracticeQuestionItem[], difficulty: string): PracticeQuestionItem[] {
  if (difficulty === "basic") return questions.filter(q => q.difficulty === "basic");
  if (difficulty === "standard") return questions.filter(q => q.difficulty === "basic" || q.difficulty === "standard");
  if (difficulty === "challenge") return questions.filter(q => q.difficulty === "standard" || q.difficulty === "challenge");
  return questions; // exam-style = all
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Generate exactly `count` questions for SUBTOPIC practice.
 */
export function generateSubtopicPractice(
  topicId: string,
  categoryId: string,
  difficulty: string,
  excludeIds: Set<string>,
  count: number = 10,
): { questions: PracticeQuestionItem[]; poolExhausted: boolean; totalPool: number } {
  const pool = filterByDifficulty(getQuestionsForTopic(topicId, categoryId), difficulty);
  const available = pool.filter(q => !excludeIds.has(q.id));
  const shuffled = shuffle(available);
  const selected = shuffled.slice(0, count);

  // If not enough unique questions, fill from full pool (allow repeats)
  if (selected.length < count) {
    const usedIds = new Set(selected.map(q => q.id));
    const extras = shuffle(pool.filter(q => !usedIds.has(q.id))).slice(0, count - selected.length);
    selected.push(...extras);
  }

  // Last resort: if topic pool itself is smaller than count, allow duplicates from pool
  while (selected.length < count && pool.length > 0) {
    selected.push(pool[selected.length % pool.length]);
  }

  return {
    questions: selected.slice(0, count),
    poolExhausted: pool.length <= count,
    totalPool: pool.length,
  };
}

/**
 * Generate exactly `count` questions for CHAPTER TEST.
 */
export function generateChapterTest(
  category: Category,
  difficulty: string,
  excludeIds: Set<string>,
  count: number = 10,
): { questions: PracticeQuestionItem[]; poolExhausted: boolean; totalPool: number } {
  let allQuestions: PracticeQuestionItem[] = [];
  for (const topic of category.topics) {
    allQuestions.push(...getQuestionsForTopic(topic.id, category.id));
  }
  const filtered = filterByDifficulty(allQuestions, difficulty);
  const available = filtered.filter(q => !excludeIds.has(q.id));

  const byTopic = new Map<string, PracticeQuestionItem[]>();
  for (const q of available) {
    if (!byTopic.has(q.topicId)) byTopic.set(q.topicId, []);
    byTopic.get(q.topicId)!.push(q);
  }

  const selected: PracticeQuestionItem[] = [];
  const topicKeys = [...byTopic.keys()];

  let round = 0;
  while (selected.length < count && topicKeys.length > 0) {
    for (const key of topicKeys) {
      if (selected.length >= count) break;
      const topicQs = byTopic.get(key)!;
      if (round < topicQs.length) selected.push(topicQs[round]);
    }
    round++;
    if (round > 200) break;
  }

  if (selected.length < count) {
    const usedIds = new Set(selected.map(q => q.id));
    const extras = shuffle(filtered.filter(q => !usedIds.has(q.id))).slice(0, count - selected.length);
    selected.push(...extras);
  }

  while (selected.length < count && filtered.length > 0) {
    selected.push(filtered[selected.length % filtered.length]);
  }

  const basics = selected.filter(q => q.difficulty === "basic");
  const standards = selected.filter(q => q.difficulty === "standard");
  const challenges = selected.filter(q => q.difficulty === "challenge");
  const ordered = [...shuffle(basics), ...shuffle(standards), ...shuffle(challenges)].slice(0, count);

  return {
    questions: ordered.length >= count ? ordered : shuffle(selected).slice(0, count),
    poolExhausted: filtered.length <= count,
    totalPool: filtered.length,
  };
}

/**
 * Count total available questions for a topic/difficulty combo.
 */
export function getQuestionPoolSize(
  topicId: string,
  categoryId: string,
  difficulty: string
): number {
  return filterByDifficulty(getQuestionsForTopic(topicId, categoryId), difficulty).length;
}

/**
 * Count total questions across all topics in a category for a given difficulty.
 */
export function getChapterPoolSize(category: Category, difficulty: string): number {
  let total = 0;
  for (const topic of category.topics) {
    total += filterByDifficulty(getQuestionsForTopic(topic.id, category.id), difficulty).length;
  }
  return total;
}
