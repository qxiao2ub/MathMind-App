import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 10: Algorithmic Thinking
export const year10Ch10Lessons: TopicLessonsMap = {
  "y10-logical-reasoning": [
    {
      title: "Logical Reasoning in Mathematics",
      explanation:
        "OVERVIEW. Logic underpins proof, problem-solving and algorithm design.\n\nKEY IDEAS.\n  • PROPOSITION: a statement that is true or false.\n  • IMPLICATION 'If P then Q' — false only when P true and Q false.\n  • CONVERSE: 'If Q then P' (NOT logically equivalent).\n  • CONTRAPOSITIVE: 'If not Q then not P' (logically equivalent to original).\n  • COUNTEREXAMPLE: a single example that disproves a universal claim.",
      keyPoints: ["P ⇒ Q ≠ converse", "Contrapositive ↔ original", "One counterexample disproves a claim"],
      workedExamples: [
        { problem: "Statement: 'If n is even then n² is even.' Contrapositive?", steps: ["'If n² is odd then n is odd.'"], answer: "If n² odd then n odd" },
        { problem: "Disprove: 'Every prime is odd.'", steps: ["Counterexample: 2 is prime and even"], answer: "n = 2" },
      ],
      tips: ["For proofs, the contrapositive is sometimes easier."],
      commonErrors: ["Treating converse as the same as the original"],
      summary: ["EXAM INSIGHT: Counterexamples are powerful and concise."],
      practice: [{ question: "Contrapositive of 'If raining then wet'?", answer: "If not wet then not raining" }],
      quiz: [{ question: "Logical equivalent of P⇒Q is:", options: ["Q⇒P", "¬Q⇒¬P", "¬P⇒¬Q", "P∧Q"], correctAnswer: 1, explanation: "Contrapositive." }],
    },
  ],
  "y10-flowcharts": [
    {
      title: "Designing and Interpreting Flowcharts",
      explanation:
        "Flowcharts visualise an algorithm:\n  • OVAL — start/end\n  • RECTANGLE — process step\n  • DIAMOND — decision (yes/no)\n  • PARALLELOGRAM — input/output\n  • ARROW — flow direction\n\nLoops are formed by arrows returning from later steps to earlier decisions.",
      keyPoints: ["Use standard shapes", "One entry, one exit", "Decisions branch into yes/no"],
      workedExamples: [
        { problem: "Trace flowchart: read n; if n > 0 print 'positive' else 'non-positive'. n = −3 output?", steps: ["n=−3", "n>0 false → 'non-positive'"], answer: "non-positive" },
      ],
      tips: ["Test edge cases (zero, negatives)."],
      commonErrors: ["Missing arrow back to loop start"],
      summary: ["EXAM INSIGHT: Trace through with sample values."],
      practice: [{ question: "Diamond shape represents…", answer: "Decision" }],
      quiz: [{ question: "Oval represents:", options: ["Process", "Decision", "Start/End", "Input"], correctAnswer: 2, explanation: "Start or end." }],
    },
  ],
  "y10-algorithm-construction": [
    {
      title: "Step-by-Step Algorithm Construction",
      explanation:
        "An ALGORITHM is a finite sequence of unambiguous steps producing an output for any valid input. Good algorithms are CORRECT, EFFICIENT and CLEAR.\n\nCONSTRUCTION STEPS.\n  1. Define inputs and desired outputs.\n  2. Identify the operations required.\n  3. Order steps; include loops/decisions.\n  4. Test with several cases.",
      keyPoints: ["Define I/O", "Decompose problem", "Test edge cases"],
      workedExamples: [
        { problem: "Algorithm to find max of three numbers a, b, c.", steps: ["m ← a", "if b > m then m ← b", "if c > m then m ← c", "Return m"], answer: "as listed" },
      ],
      tips: ["Use ← for assignment."],
      commonErrors: ["Forgetting to initialise variables"],
      summary: ["EXAM INSIGHT: Pseudocode is judged on clarity."],
      practice: [{ question: "Algorithm to compute average of n numbers?", answer: "Sum then divide by n" }],
      quiz: [{ question: "First step of any algorithm:", options: ["Loop", "Output", "Define I/O", "Decision"], correctAnswer: 2, explanation: "Always define inputs/outputs first." }],
    },
  ],
  "y10-pattern-recognition": [
    {
      title: "Recognising and Generalising Patterns",
      explanation:
        "Spot patterns in numerical or visual sequences and write a general formula (often nth term).\n\nARITHMETIC: tₙ = a + (n−1)d.\nGEOMETRIC: tₙ = a·rⁿ⁻¹.\nQUADRATIC PATTERNS: second differences are constant.",
      keyPoints: ["Check first differences (arithmetic)", "Check ratios (geometric)", "Check second differences (quadratic)"],
      workedExamples: [
        { problem: "Find tₙ for 4, 7, 10, 13, …", steps: ["a=4, d=3", "tₙ = 4 + 3(n−1) = 3n + 1"], answer: "tₙ = 3n + 1" },
      ],
      tips: ["Compute t₁ and t₂ to test your formula."],
      commonErrors: ["Off-by-one in n−1 vs n"],
      summary: ["EXAM INSIGHT: State formula AND verify with n=1, 2."],
      practice: [{ question: "tₙ for 2, 6, 18, 54?", answer: "tₙ = 2·3ⁿ⁻¹" }],
      quiz: [{ question: "Constant first differences ⇒", options: ["Geometric", "Arithmetic", "Quadratic", "Cubic"], correctAnswer: 1, explanation: "Arithmetic sequence." }],
    },
  ],
  "y10-computational-thinking": [
    {
      title: "Computational Thinking Problems",
      explanation:
        "Four pillars:\n  • DECOMPOSITION — break problem into smaller sub-problems.\n  • PATTERN RECOGNITION — identify repeating structure.\n  • ABSTRACTION — focus on essential features, ignore details.\n  • ALGORITHM DESIGN — formalise solution as steps.\n\nThese strategies turn vague problems into well-defined algorithmic solutions.",
      keyPoints: ["Decompose, pattern, abstract, algorithm", "Trace and test"],
      workedExamples: [
        { problem: "Design an algorithm to determine if a number n > 1 is prime.", steps: ["For i from 2 to √n: if n divisible by i, return 'not prime'", "If no divisor found, return 'prime'"], answer: "as listed" },
      ],
      tips: ["Stop checking divisors at √n for efficiency."],
      commonErrors: ["Looping all the way to n−1 (inefficient)"],
      summary: ["EXAM INSIGHT: Mention efficiency where relevant (10A)."],
      practice: [{ question: "Decomposition strategy for sorting cards?", answer: "Split into smaller groups, sort each, combine" }],
      quiz: [{ question: "Ignoring details to focus on essentials is:", options: ["Decomposition", "Abstraction", "Pattern recognition", "Algorithm"], correctAnswer: 1, explanation: "Abstraction." }],
    },
  ],
};
