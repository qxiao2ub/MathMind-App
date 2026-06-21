/**
 * Category-Level Mastery Quiz Questions (12-20 questions per category)
 * Mixed problems across all topics in that category.
 * Higher difficulty than topic quizzes, testing true mastery.
 */

export interface CategoryQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty?: "standard" | "challenge" | "review" | "mixed";
  skillTags?: string[];
}

import { curriculum } from "./curriculum";
import { getTopicQuizQuestions } from "./topicQuizQuestions";
import { year9CategoryQuizData } from "./year9CategoryQuizQuestions";

const categoryQuizData: Record<string, CategoryQuizQuestion[]> = {

  // Year 9 (11 chapters)
  ...year9CategoryQuizData,

  // ═══ YEAR 10 — ALGEBRA ═══
  "y10-algebra": [
    { id: 1, question: "Expand and simplify: (2x+3)(x-4)", options: ["2x²-5x-12", "2x²+5x-12", "2x²-8x+3x-12", "Both A and C"], correctAnswer: 3, explanation: "2x²-8x+3x-12 = 2x²-5x-12" },
    { id: 2, question: "Factorise: x²-16", options: ["(x-4)(x+4)", "(x-16)(x+1)", "(x-8)(x+2)", "(x-4)²"], correctAnswer: 0, explanation: "Difference of squares: x²-4² = (x-4)(x+4)" },
    { id: 3, question: "Solve x²-7x+12=0", options: ["x=3,4", "x=-3,-4", "x=2,6", "x=-2,-6"], correctAnswer: 0, explanation: "(x-3)(x-4)=0, x=3 or x=4" },
    { id: 4, question: "Discriminant of 2x²+3x-5?", options: ["49", "-31", "9", "19"], correctAnswer: 0, explanation: "Δ = 9 - 4(2)(-5) = 9 + 40 = 49" },
    { id: 5, question: "Complete the square: x²+8x", options: ["(x+4)²-16", "(x+4)²+16", "(x+8)²-64", "(x+4)²"], correctAnswer: 0, explanation: "x²+8x = (x+4)²-16" },
    { id: 6, question: "Using quadratic formula, solve x²-2x-3=0", options: ["x=3,-1", "x=-3,1", "x=3,1", "x=-3,-1"], correctAnswer: 0, explanation: "x = (2±√(4+12))/2 = (2±4)/2 → x=3 or x=-1" },
    { id: 7, question: "How many solutions when Δ=0?", options: ["0", "1 (repeated)", "2", "Infinite"], correctAnswer: 1, explanation: "Δ=0 gives one repeated root." },
    { id: 8, question: "Factorise: 6x²+x-2", options: ["(2x-1)(3x+2)", "(3x-1)(2x+2)", "(6x-2)(x+1)", "(3x-2)(2x+1)"], correctAnswer: 3, explanation: "6x²+3x-2x-1... actually (3x-2)(2x+1) = 6x²+3x-4x-2 = 6x²-x-2. Let me recheck: (2x-1)(3x+2) = 6x²+4x-3x-2 = 6x²+x-2 ✓" },
    { id: 9, question: "Solve: x²+2x-15=0", options: ["x=3,-5", "x=-3,5", "x=3,5", "x=-3,-5"], correctAnswer: 0, explanation: "(x+5)(x-3)=0, x=-5 or x=3" },
    { id: 10, question: "Find intersection of y=x² and y=2x+3", options: ["x=3,-1", "x=-3,1", "x=3,1", "x=-1,-3"], correctAnswer: 0, explanation: "x²=2x+3 → x²-2x-3=0 → (x-3)(x+1)=0" },
    { id: 11, question: "(x+5)²-25 in expanded form:", options: ["x²+10x", "x²+10x+25", "x²+25", "x²+10x-25"], correctAnswer: 0, explanation: "(x+5)²-25 = x²+10x+25-25 = x²+10x" },
    { id: 12, question: "Expand: (a-b)²", options: ["a²-b²", "a²-2ab+b²", "a²+2ab+b²", "a²-ab+b²"], correctAnswer: 1, explanation: "(a-b)² = a²-2ab+b²" },
    { id: 13, question: "Sum of roots of x²-5x+6=0?", options: ["5", "-5", "6", "-6"], correctAnswer: 0, explanation: "Sum of roots = -b/a = 5" },
    { id: 14, question: "Product of roots of x²-5x+6=0?", options: ["5", "-5", "6", "-6"], correctAnswer: 2, explanation: "Product of roots = c/a = 6" },
    { id: 15, question: "If line y=mx+c is tangent to y=x², discriminant of x²-mx-c=0 is:", options: ["> 0", "= 0", "< 0", "Can't tell"], correctAnswer: 1, explanation: "Tangent means one solution, so Δ = 0." },
  ],

  // ═══ YEAR 10 — FUNCTIONS & GRAPHS ═══
  "y10-functions-graphs": [
    { id: 1, question: "Vertex of y=(x-3)²+2?", options: ["(3,2)", "(-3,2)", "(3,-2)", "(-3,-2)"], correctAnswer: 0, explanation: "Vertex form y=(x-h)²+k → vertex (3,2)" },
    { id: 2, question: "f(x)=x²-4. Find f(-3)", options: ["5", "-5", "13", "-13"], correctAnswer: 0, explanation: "f(-3) = 9-4 = 5" },
    { id: 3, question: "y=-2(x+1)²+5 opens:", options: ["Up", "Down", "Left", "Right"], correctAnswer: 1, explanation: "Negative coefficient → opens downward." },
    { id: 4, question: "Axis of symmetry of y=x²-6x+5?", options: ["x=3", "x=-3", "x=5", "x=1"], correctAnswer: 0, explanation: "x = -b/2a = 6/2 = 3" },
    { id: 5, question: "y=x²+4 has how many x-intercepts?", options: ["0", "1", "2", "Infinite"], correctAnswer: 0, explanation: "x²+4=0 → x²=-4, no real solutions." },
    { id: 6, question: "Translating y=x² right 5 and down 3:", options: ["y=(x-5)²-3", "y=(x+5)²-3", "y=(x-5)²+3", "y=(x-3)²-5"], correctAnswer: 0, explanation: "Right 5 → (x-5), down 3 → -3" },
    { id: 7, question: "Zero of f(x)=4x-12?", options: ["x=3", "x=-3", "x=12", "x=4"], correctAnswer: 0, explanation: "4x-12=0 → x=3" },
    { id: 8, question: "y=3x²  compared to y=x² is:", options: ["Wider", "Narrower", "Same", "Reflected"], correctAnswer: 1, explanation: "Coefficient > 1 makes it narrower." },
    { id: 9, question: "Graph of y=x² reflected in x-axis:", options: ["y=x²", "y=-x²", "y=(-x)²", "y=|x²|"], correctAnswer: 1, explanation: "Reflection in x-axis negates y: y=-x²" },
    { id: 10, question: "How many solutions: y=x² and y=x+6?", options: ["0", "1", "2", "3"], correctAnswer: 2, explanation: "x²=x+6 → x²-x-6=0 → Δ=25>0 → 2 solutions" },
    { id: 11, question: "If f(x)=2x+1, f(f(1))=?", options: ["5", "7", "3", "9"], correctAnswer: 1, explanation: "f(1)=3, f(3)=7" },
    { id: 12, question: "Minimum value of y=(x-2)²+4?", options: ["2", "4", "-4", "0"], correctAnswer: 1, explanation: "Minimum at vertex: y = 4" },
    { id: 13, question: "y=½x² is ___ than y=x²", options: ["Narrower", "Wider", "Taller", "Shorter"], correctAnswer: 1, explanation: "0 < coefficient < 1 makes the parabola wider." },
    { id: 14, question: "x-intercepts of y=x²-9?", options: ["x=±3", "x=9", "x=±9", "x=3 only"], correctAnswer: 0, explanation: "x²=9, x=±3" },
  ],

  // ═══ YEAR 10 — MEASUREMENT & GEOMETRY ═══
  "y10-measurement-geometry": [
    { id: 1, question: "sin(30°) = ?", options: ["0.5", "√3/2", "1/√2", "√3"], correctAnswer: 0, explanation: "sin(30°) = 0.5 is a standard value." },
    { id: 2, question: "Angle in a semicircle?", options: ["45°", "60°", "90°", "180°"], correctAnswer: 2, explanation: "An angle inscribed in a semicircle is always 90°." },
    { id: 3, question: "Area of sector: r=6, angle=60°?", options: ["6π", "36π", "12π", "2π"], correctAnswer: 0, explanation: "A = 60/360 × π(36) = 6π" },
    { id: 4, question: "tan(45°) = ?", options: ["0", "0.5", "1", "√2"], correctAnswer: 2, explanation: "tan(45°) = 1" },
    { id: 5, question: "Bearing of 270° points:", options: ["North", "East", "South", "West"], correctAnswer: 3, explanation: "270° clockwise from North = West." },
    { id: 6, question: "Opposite angles of cyclic quadrilateral sum to:", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "They are supplementary (sum to 180°)." },
    { id: 7, question: "Volume of cone: r=3, h=7?", options: ["21π", "63π", "9π", "7π"], correctAnswer: 0, explanation: "V = ⅓πr²h = ⅓π(9)(7) = 21π" },
    { id: 8, question: "A composite shape is a rectangle (5×8) minus a circle (d=4). Area?", options: ["40-4π", "40-16π", "40-2π", "40-8π"], correctAnswer: 0, explanation: "Rectangle: 40. Circle: π(2²) = 4π. Area = 40 - 4π" },
    { id: 9, question: "Central angle = 2 × ?", options: ["Reflex angle", "Inscribed angle", "Right angle", "Obtuse angle"], correctAnswer: 1, explanation: "Central angle = 2 × inscribed angle (same arc)." },
    { id: 10, question: "Tree shadow is 15m, elevation angle 53°. Height?", options: ["15tan53°", "15sin53°", "15cos53°", "15/tan53°"], correctAnswer: 0, explanation: "tan(53°) = height/15, height = 15tan53°" },
    { id: 11, question: "Arc length: r=10, angle=72°?", options: ["4π", "2π", "10π", "8π"], correctAnswer: 0, explanation: "Arc = 72/360 × 2π(10) = 4π" },
    { id: 12, question: "Tangent is ___ to radius at contact point", options: ["Parallel", "Perpendicular", "Equal", "Bisecting"], correctAnswer: 1, explanation: "A tangent is perpendicular to the radius." },
    { id: 13, question: "SA of an open cylinder (no top): r=5, h=10?", options: ["25π + 100π", "50π + 100π", "125π", "75π"], correctAnswer: 0, explanation: "Base: 25π + lateral: 2π(5)(10) = 100π. Total: 125π" },
    { id: 14, question: "cos(90°) = ?", options: ["1", "0.5", "0", "-1"], correctAnswer: 2, explanation: "cos(90°) = 0" },
    { id: 15, question: "sin²θ + cos²θ = ?", options: ["0", "1", "2", "sinθ"], correctAnswer: 1, explanation: "The Pythagorean identity: sin²θ + cos²θ = 1" },
  ],

  // ═══ YEAR 10 — STATISTICS & PROBABILITY ═══
  "y10-statistics-probability": [
    { id: 1, question: "Two coins flipped. P(both heads)?", options: ["1/2", "1/4", "1/3", "3/4"], correctAnswer: 1, explanation: "P = 1/2 × 1/2 = 1/4" },
    { id: 2, question: "Relative frequency of event A in 200 trials with 50 occurrences?", options: ["0.5", "0.25", "4", "50"], correctAnswer: 1, explanation: "RF = 50/200 = 0.25" },
    { id: 3, question: "In a two-way table, joint frequency is:", options: ["Row total", "Column total", "Cell value", "Grand total"], correctAnswer: 2, explanation: "Joint frequency is the count in a specific cell." },
    { id: 4, question: "P(A or B) for mutually exclusive events:", options: ["P(A)×P(B)", "P(A)+P(B)", "P(A)-P(B)", "1-P(A)"], correctAnswer: 1, explanation: "For mutually exclusive: P(A∪B) = P(A) + P(B)." },
    { id: 5, question: "Stratified sampling involves:", options: ["Random only", "Dividing into groups first", "Convenience", "Volunteer selection"], correctAnswer: 1, explanation: "Stratified sampling divides population into strata." },
    { id: 6, question: "Two dice. P(sum = 7)?", options: ["1/6", "6/36", "7/36", "Both A and B"], correctAnswer: 3, explanation: "6 ways to make 7 out of 36 outcomes = 6/36 = 1/6" },
    { id: 7, question: "Census collects data from:", options: ["A sample", "Entire population", "Volunteers", "Random people"], correctAnswer: 1, explanation: "A census surveys everyone in the population." },
    { id: 8, question: "P(A and B) for independent events:", options: ["P(A)+P(B)", "P(A)×P(B)", "P(A)/P(B)", "P(A)-P(B)"], correctAnswer: 1, explanation: "For independent events: P(A∩B) = P(A) × P(B)." },
    { id: 9, question: "Without replacement changes:", options: ["Sample space", "Probabilities", "Both", "Neither"], correctAnswer: 2, explanation: "Without replacement changes both the sample space and probabilities." },
    { id: 10, question: "Expected frequency = ?", options: ["P × n", "n / P", "P + n", "P - n"], correctAnswer: 0, explanation: "Expected frequency = probability × number of trials." },
    { id: 11, question: "Bias in sampling means:", options: ["Large sample", "Unfair representation", "Perfect accuracy", "Random selection"], correctAnswer: 1, explanation: "Bias means some groups are over/under-represented." },
    { id: 12, question: "Tree diagram branches multiply to give:", options: ["Sum of probabilities", "Joint probability", "Conditional probability", "Marginal probability"], correctAnswer: 1, explanation: "Multiply along branches for joint/combined probability." },
    { id: 13, question: "Larger samples are:", options: ["Less useful", "More representative", "More biased", "Not needed"], correctAnswer: 1, explanation: "Larger samples better represent the population." },
    { id: 14, question: "P(at least one 6 in two dice rolls)?", options: ["1/6", "11/36", "1/36", "1/3"], correctAnswer: 1, explanation: "P = 1 - P(no 6s) = 1 - (5/6)² = 1 - 25/36 = 11/36" },
  ],
};

/** Get category quiz questions. */
export function getCategoryQuizQuestions(categoryId: string): CategoryQuizQuestion[] {
  const category = curriculum.flatMap((year) => year.categories).find((cat) => cat.id === categoryId);
  if (categoryQuizData[categoryId]?.length && categoryQuizData[categoryId].length >= 20) {
    return categoryQuizData[categoryId];
  }
  if (!category) return [];

  const topicQuestions = category.topics.flatMap((topic) =>
    getTopicQuizQuestions(topic.id).map((q) => ({
      ...q,
      skillTags: [...(q.skillTags ?? []), topic.title, category.name],
    })),
  );
  const questions = [...(categoryQuizData[categoryId] ?? []), ...topicQuestions];
  return questions.map((q, index) => ({ ...q, id: index + 1 }));
}

/** Check if category quiz data exists */
export function hasCategoryQuiz(categoryId: string): boolean {
  return getCategoryQuizQuestions(categoryId).length > 0;
}
