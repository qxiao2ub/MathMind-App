/**
 * Year 9 Pedagogical Section Topic Quizzes
 * 5-8 questions each for the 77 pedagogical topics (7 sections × 11 chapters)
 */
import type { TopicQuizQuestion } from "./topicQuizQuestions";

interface ChapterQuizMeta {
  num: number;
  name: string;
  formula: string;
  context: string;
}

const chs: ChapterQuizMeta[] = [
  { num: 1, name: "Number & Financial Mathematics", formula: "I = PRT", context: "money and finance" },
  { num: 2, name: "Expressions & Linear Equations", formula: "ax + b = c", context: "algebraic problem-solving" },
  { num: 3, name: "Pythagoras & Trigonometry", formula: "a² + b² = c²", context: "triangles and distances" },
  { num: 4, name: "Linear Relationships", formula: "y = mx + c", context: "graphing and linear models" },
  { num: 5, name: "Measurement", formula: "V = Ah", context: "area, volume, and surface area" },
  { num: 6, name: "Indices & Surds", formula: "aᵐ × aⁿ = aᵐ⁺ⁿ", context: "index laws and surds" },
  { num: 7, name: "Geometry", formula: "angle sum = (n-2)×180°", context: "shapes, congruence, and similarity" },
  { num: 8, name: "Algebraic Techniques", formula: "(a+b)² = a² + 2ab + b²", context: "expanding and factorising" },
  { num: 9, name: "Probability & Statistics", formula: "P(A∪B) = P(A)+P(B)−P(A∩B)", context: "data analysis and probability" },
  { num: 10, name: "Quadratics", formula: "ax² + bx + c = 0", context: "parabolas and quadratic equations" },
  { num: 11, name: "Algorithmic Thinking", formula: "O(n²) for bubble sort", context: "algorithms and pseudocode" },
];

function makeApplicationsQuiz(ch: ChapterQuizMeta): TopicQuizQuestion[] {
  return [
    { id: 1, question: `What is the first step in solving a word problem about ${ch.context}?`, options: ["Calculate immediately", "Identify knowns and unknowns", "Draw a random graph", "Skip to the answer"], correctAnswer: 1, explanation: "Always identify what's given and what's needed before calculating." },
    { id: 2, question: `When solving a multi-step problem in ${ch.name}, why show working?`, options: ["To waste time", "To earn method marks and track your logic", "It's optional", "Only for neat handwriting"], correctAnswer: 1, explanation: "Working shows your reasoning and earns marks even if the final answer has a small error." },
    { id: 3, question: `Which formula from Chapter ${ch.num} would you apply to a real-world problem?`, options: [ch.formula, "E = mc²", "F = ma", "V = IR"], correctAnswer: 0, explanation: `${ch.formula} is the key formula for ${ch.context}.` },
    { id: 4, question: `Why must you check if an answer makes sense in context?`, options: ["It's not necessary", "Negative lengths or impossible values indicate errors", "To use more time", "Checking is bad practice"], correctAnswer: 1, explanation: "Contextual checking catches mathematical results that are physically impossible." },
    { id: 5, question: `"At most 200" in a word problem translates to:`, options: ["x > 200", "x ≥ 200", "x ≤ 200", "x = 200"], correctAnswer: 2, explanation: "'At most' means less than or equal to: x ≤ 200." },
    { id: 6, question: `A multi-step problem is one that:`, options: ["Has many pages", "Requires multiple calculations or concepts", "Is always impossible", "Only has one answer"], correctAnswer: 1, explanation: "Multi-step problems combine several mathematical operations." },
  ];
}

function makeModellingQuiz(ch: ChapterQuizMeta): TopicQuizQuestion[] {
  return [
    { id: 1, question: "A mathematical model is:", options: ["An exact copy of reality", "A simplified representation using mathematics", "A physical scale model", "Always 100% accurate"], correctAnswer: 1, explanation: "Models simplify reality to make predictions using mathematics." },
    { id: 2, question: "Why do models use assumptions?", options: ["To make problems solvable", "Because assumptions are always true", "To hide information", "They don't"], correctAnswer: 0, explanation: "Assumptions simplify complex reality into manageable mathematics." },
    { id: 3, question: "How do you validate a model?", options: ["Assume it works", "Compare predictions with real data", "Make it more complex", "Ask the internet"], correctAnswer: 1, explanation: "Validation compares model predictions against observed data." },
    { id: 4, question: "A model with 3% error is generally:", options: ["Useless", "Reasonably accurate", "Perfect", "Dangerous"], correctAnswer: 1, explanation: "Small percentage errors indicate a useful model." },
    { id: 5, question: `In ${ch.name}, a model might represent:`, options: [ch.context, "The weather in Antarctica", "The taste of food", "Sound frequencies"], correctAnswer: 0, explanation: `Models in this chapter represent ${ch.context}.` },
    { id: 6, question: "What is a limitation of all models?", options: ["They cost too much", "They depend on assumptions that may not hold", "They always fail", "They only work on computers"], correctAnswer: 1, explanation: "When assumptions break down, models become unreliable." },
  ];
}

function makeTechComputingQuiz(ch: ChapterQuizMeta): TopicQuizQuestion[] {
  return [
    { id: 1, question: "Why verify technology outputs manually?", options: ["Technology is always wrong", "To catch input errors and build understanding", "It's a waste of time", "Never verify"], correctAnswer: 1, explanation: "Manual checking catches data entry errors and builds conceptual understanding." },
    { id: 2, question: "Computational thinking involves:", options: ["Only using computers", "Decomposition, pattern recognition, abstraction, algorithms", "Memorising code", "Avoiding mathematics"], correctAnswer: 1, explanation: "These four pillars form the basis of computational thinking." },
    { id: 3, question: "In a spreadsheet, $A$1 means:", options: ["The cell reference is absolute (won't change when copied)", "The cell contains currency", "The cell is locked", "The cell is empty"], correctAnswer: 0, explanation: "Dollar signs create absolute references that don't shift during copy/fill." },
    { id: 4, question: "An algorithm is:", options: ["A computer virus", "A step-by-step procedure to solve a problem", "A type of graph", "A programming language"], correctAnswer: 1, explanation: "Algorithms are precise sequences of steps for problem-solving." },
    { id: 5, question: "Fill-down in a spreadsheet:", options: ["Deletes data", "Copies formulas adjusting row references", "Formats cells", "Merges cells"], correctAnswer: 1, explanation: "Fill-down replicates formulas while automatically adjusting references." },
    { id: 6, question: "Edge cases in testing include:", options: ["Zero and negative inputs", "Only positive numbers", "Random letters", "Nothing special"], correctAnswer: 0, explanation: "Testing edge cases (0, negatives, extremes) ensures robust solutions." },
  ];
}

function makeInvestigationQuiz(ch: ChapterQuizMeta): TopicQuizQuestion[] {
  return [
    { id: 1, question: "A good investigation question is:", options: ["Very broad", "Specific and testable", "Already answered", "Unrelated to mathematics"], correctAnswer: 1, explanation: "Good questions can be investigated with available mathematical tools." },
    { id: 2, question: "Before collecting data, you should:", options: ["Start calculating", "Plan what data is needed and how to collect it", "Write the conclusion", "Guess the answer"], correctAnswer: 1, explanation: "Planning ensures useful, consistent data collection." },
    { id: 3, question: "Unexpected results in an investigation:", options: ["Should be deleted", "May be the most interesting findings", "Mean you failed", "Are always errors"], correctAnswer: 1, explanation: "Unexpected results can lead to new discoveries and deeper understanding." },
    { id: 4, question: "A conclusion should:", options: ["Introduce new topics", "Directly address the original question with evidence", "Be vague", "Ignore the data"], correctAnswer: 1, explanation: "Conclusions must answer the investigation question using gathered evidence." },
    { id: 5, question: "Why discuss limitations in your investigation?", options: ["To lose marks", "To show awareness of factors affecting reliability", "It's unnecessary", "To seem unsure"], correctAnswer: 1, explanation: "Discussing limitations demonstrates critical thinking." },
  ];
}

function makeProblemsChallengesQuiz(ch: ChapterQuizMeta): TopicQuizQuestion[] {
  return [
    { id: 1, question: "When stuck on a challenge problem:", options: ["Give up", "Try a different approach", "Copy the answer", "Skip it permanently"], correctAnswer: 1, explanation: "Different strategies often unlock solutions to difficult problems." },
    { id: 2, question: "A partial solution is:", options: ["Worthless", "Valuable — shows understanding and earns method marks", "A failure", "Never worth writing"], correctAnswer: 1, explanation: "Partial solutions demonstrate understanding and contribute to your mark." },
    { id: 3, question: `Extension problems in ${ch.name} aim to:`, options: ["Replace standard work", "Develop deeper reasoning beyond the standard curriculum", "Be impossible", "Lower confidence"], correctAnswer: 1, explanation: "Extension problems build skills for mathematical progression." },
    { id: 4, question: "To prove a general result, start by:", options: ["Writing the proof immediately", "Testing specific cases to find patterns", "Assuming it's true", "Asking for help"], correctAnswer: 1, explanation: "Specific cases build intuition before attempting a general argument." },
    { id: 5, question: "Which is NOT a problem-solving strategy?", options: ["Working backwards", "Drawing a diagram", "Random guessing", "Looking for patterns"], correctAnswer: 2, explanation: "Random guessing is not a systematic strategy." },
    { id: 6, question: `"Show that..." requires:`, options: ["One example", "A general argument or proof", "Saying 'it's obvious'", "A calculator"], correctAnswer: 1, explanation: "'Show that' problems require logical arguments, not just examples." },
  ];
}

function makeSummaryQuiz(ch: ChapterQuizMeta): TopicQuizQuestion[] {
  return [
    { id: 1, question: `Chapter ${ch.num} covers:`, options: [ch.name, "Physical Education", "English Literature", "Music Theory"], correctAnswer: 0, explanation: `Chapter ${ch.num} is about ${ch.name}.` },
    { id: 2, question: `Which formula belongs to this chapter?`, options: [ch.formula, "E = mc²", "F = ma", "PV = nRT"], correctAnswer: 0, explanation: `${ch.formula} is a key formula from ${ch.name}.` },
    { id: 3, question: "The most common mathematical error is:", options: ["Wrong textbook", "Sign and arithmetic mistakes", "Neat handwriting", "Using a ruler"], correctAnswer: 1, explanation: "Sign errors and arithmetic mistakes are the most frequent errors." },
    { id: 4, question: "To reduce errors, you should:", options: ["Work faster", "Check work systematically", "Skip difficult parts", "Hide your working"], correctAnswer: 1, explanation: "Systematic checking catches most errors." },
    { id: 5, question: "Why include units in answers?", options: ["Decoration", "Units give meaning to numbers", "Units are optional", "Only in science"], correctAnswer: 1, explanation: "Without units, a number like '42' has no meaning in context." },
    { id: 6, question: "Mathematics topics are best understood as:", options: ["Separate subjects", "Interconnected ideas that build on each other", "Random formulas", "Only exam material"], correctAnswer: 1, explanation: "Mathematical topics reinforce and connect to each other." },
  ];
}

function makeChecklistQuiz(ch: ChapterQuizMeta): TopicQuizQuestion[] {
  return [
    { id: 1, question: "Self-assessment helps you:", options: ["Feel bad", "Identify strengths and areas for improvement", "Compare to others", "Skip revision"], correctAnswer: 1, explanation: "Honest self-assessment directs your revision effectively." },
    { id: 2, question: "If you rate yourself '?' on a skill:", options: ["Ignore it", "Practice that skill specifically", "Mark it as mastered", "Give up"], correctAnswer: 1, explanation: "Partly confident skills benefit most from targeted practice." },
    { id: 3, question: "Mastery means:", options: ["Memorising everything", "Understanding, applying, and explaining concepts", "Getting 100% once", "Reading notes"], correctAnswer: 1, explanation: "True mastery involves deep understanding and flexible application." },
    { id: 4, question: "The most effective revision strategy is:", options: ["Reading notes once", "Spaced practice with active recall", "Highlighting everything", "8-hour sessions"], correctAnswer: 1, explanation: "Spaced, active practice produces the strongest long-term learning." },
    { id: 5, question: "'Interleaving' means:", options: ["Studying one topic all day", "Mixing different topics within study sessions", "Studying with friends", "Only using flashcards"], correctAnswer: 1, explanation: "Mixing topics builds flexibility in choosing the right approach." },
    { id: 6, question: "Before an exam:", options: ["Learn new material", "Practice problems under timed conditions", "Stay up all night", "Only revise strengths"], correctAnswer: 1, explanation: "Timed practice builds exam skills and reveals remaining gaps." },
  ];
}

// ─── Generate all quizzes ────────────────────────────────────────────

const quizGenerators: Record<string, (ch: ChapterQuizMeta) => TopicQuizQuestion[]> = {
  "applications": makeApplicationsQuiz,
  "modelling": makeModellingQuiz,
  "tech-computing": makeTechComputingQuiz,
  "investigation": makeInvestigationQuiz,
  "problems-challenges": makeProblemsChallengesQuiz,
  "summary": makeSummaryQuiz,
  "checklist": makeChecklistQuiz,
};

export const year9PedagogicalQuizData: Record<string, TopicQuizQuestion[]> = {};

chs.forEach(ch => {
  Object.entries(quizGenerators).forEach(([suffix, generator]) => {
    const id = `y9-ch${ch.num}-${suffix}`;
    year9PedagogicalQuizData[id] = generator(ch);
  });
});
