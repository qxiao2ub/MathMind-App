import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 12: Revision of Matrices (VCE Unit 4)

export const year12GeneralCh12Lessons: TopicLessonsMap = {
  // ─── 12A: Exam 1 Style — Technology Free ───────────────────────────
  "y12g-ch12-12a-exam1": [
    {
      title: "Exam 1 Style Questions — Matrices (Technology Free)",
      explanation:
        "Exam 1 of VCE General Mathematics is the SHORT-ANSWER, MULTIPLE-CHOICE, technology-free section. Matrix questions in Exam 1 test whether you can manipulate small matrices BY HAND, read information correctly, and reason about transition matrices without a CAS.\n\nThe core skills examined are:\n  • Adding, subtracting and scalar-multiplying matrices.\n  • Multiplying small matrices (typically 2×2 by 2×2 or 2×2 by 2×1).\n  • Recognising when a product is DEFINED (inner dimensions must match).\n  • Reading a transition matrix and computing one or two steps.\n  • Interpreting an entry of T or of T·S in context.\n  • Identifying the steady-state condition T·v = v.\n\nGENERAL STRATEGY for Exam 1:\n  • Write the dimensions of every matrix BEFORE multiplying. Confirm m×n by n×p gives m×p.\n  • Multiply rows of the LEFT matrix by columns of the RIGHT matrix.\n  • Keep arithmetic neat: line up partial products vertically.\n  • For transition matrices, always check that columns sum to 1 — if they do not, reread the question.\n  • Translate any answer back into the language of the problem (people, dollars, animals, customers).",
      keyPoints: [
        "Exam 1 is technology free — practise hand multiplication",
        "Always confirm matrices are conformable before multiplying",
        "Columns of a transition matrix sum to 1",
        "Steady state satisfies T·v = v",
        "Always interpret final numbers in context",
      ],
      workedExamples: [
        {
          problem: "Multiply A·B where A = [1 2; 3 4] and B = [2 0; 1 5].",
          steps: [
            "A is 2×2, B is 2×2 → product is 2×2 ✓",
            "Top-left: 1·2 + 2·1 = 4",
            "Top-right: 1·0 + 2·5 = 10",
            "Bottom-left: 3·2 + 4·1 = 10",
            "Bottom-right: 3·0 + 4·5 = 20",
            "AB = [4 10; 10 20]",
          ],
          answer: "AB = [4 10; 10 20].",
        },
        {
          problem: "Given T = [0.8 0.3; 0.2 0.7] and S0 = [100; 0], compute S1 = T·S0.",
          steps: [
            "Row 1: 0.8·100 + 0.3·0 = 80",
            "Row 2: 0.2·100 + 0.7·0 = 20",
            "S1 = [80; 20]",
            "Interpretation: after one step, 80 are in state 1 and 20 in state 2.",
          ],
          answer: "S1 = [80; 20].",
        },
      ],
      tips: [
        "Write dimensions in pencil above each matrix",
        "If a product is asked for and is undefined, state 'undefined' clearly",
        "For transition questions, always re-check column sums = 1",
      ],
      definitions: [
        { term: "Conformable", meaning: "Two matrices can be multiplied when the columns of the first equal the rows of the second." },
        { term: "Steady state", meaning: "A state vector v with T·v = v; the system no longer changes." },
      ],
      formulas: [
        { name: "Matrix product dimensions", formula: "(m×n) · (n×p) = (m×p)" },
        { name: "Transition rule", formula: "S_{n+1} = T · S_n" },
        { name: "Steady state condition", formula: "(T − I) · v = 0" },
      ],
      examQuestion: {
        problem: "A 2×3 matrix is multiplied by a 2×2 matrix. State whether the product is defined and, if so, give its order.",
        solution: [
          "Left matrix is 2×3, right is 2×2",
          "Inner dimensions: 3 and 2 — they do not match",
          "Therefore the product is NOT defined",
        ],
        answer: "Not defined (3 ≠ 2).",
        marks: 1,
      },
      commonErrors: [
        "Multiplying when inner dimensions do not match",
        "Treating rows as 'from' instead of columns",
        "Dropping a negative sign during scalar multiplication",
      ],
      summary: [
        "Check dimensions before multiplying",
        "Compute row × column products carefully",
        "Interpret the answer in context",
      ],
      practice: [
        { question: "If A = [2 1; 0 3], compute 2A.", answer: "[4 2; 0 6]" },
        { question: "If T = [0.6 0.4; 0.4 0.6] and S0 = [50; 50], find S1.", answer: "[50; 50] (already steady)" },
      ],
      quiz: [
        {
          question: "Which product is defined?",
          options: ["(2×3)(2×2)", "(3×2)(2×4)", "(2×2)(3×3)", "(1×4)(2×1)"],
          correctAnswer: 1,
          explanation: "Inner dimensions 2 and 2 match, giving a 3×4 product.",
        },
        {
          question: "Columns of a transition matrix sum to:",
          options: ["0", "1", "n", "depends on rows"],
          correctAnswer: 1,
          explanation: "All probability leaving the current state must arrive somewhere.",
        },
        {
          question: "Steady state v satisfies:",
          options: ["T·v = 0", "T·v = v", "v·T = I", "T² = I"],
          correctAnswer: 1,
          explanation: "By definition, the next state equals the current state.",
        },
      ],
    },
  ],

  // ─── 12B: Exam 2 Style — Technology Active ─────────────────────────
  "y12g-ch12-12b-exam2": [
    {
      title: "Exam 2 Style Questions — Matrices (Technology Active)",
      explanation:
        "Exam 2 is the EXTENDED-RESPONSE, technology-active section. Matrix questions are usually embedded inside a real-world scenario (populations, customers, traffic, sport results) and are split into several connected parts.\n\nWhat CAS does for you in Exam 2:\n  • Computes T^n for any whole number n quickly.\n  • Multiplies non-trivial matrices without arithmetic slips.\n  • Stores T, S0, and reuses them as you progress through parts.\n\nWhat YOU still must do:\n  • Set the matrix up correctly from words.\n  • Decide WHICH calculation answers the question.\n  • Round answers to whole units when appropriate (people, animals).\n  • Communicate the meaning of each result.\n\nLONG-TERM behaviour:\n  • Compute T^n · S0 for a large n (e.g. n = 50 or n = 100).\n  • If the matrix is REGULAR (all entries of some power are positive), the state vector approaches a UNIQUE steady state independent of S0.\n  • Confirm the long-term answer by checking T · v ≈ v.\n\nINTERPRETATION: always restate matrix answers in the language of the question.",
      keyPoints: [
        "Use CAS to compute T^n efficiently",
        "Round populations to whole numbers in context",
        "Regular matrices have a unique long-term state",
        "Always interpret the meaning of each entry",
      ],
      workedExamples: [
        {
          problem:
            "T = [0.85 0.10; 0.15 0.90], S0 = [200; 100]. Find S5 and the long-term state.",
          steps: [
            "Enter T and S0 into CAS",
            "S5 = T^5 · S0 ≈ [129.5; 170.5]",
            "Long-term: compute T^50 · S0 ≈ [120; 180]",
            "Check: T · [120; 180] = [120; 180] ✓",
            "Interpretation: in the long run, state 1 holds 120 and state 2 holds 180.",
          ],
          answer: "S5 ≈ [130; 170]; long-term ≈ [120; 180].",
        },
      ],
      tips: [
        "Store T and S0 in CAS variables — do not retype each part",
        "Try T^n for n = 10, 20, 50 to see when entries stabilise",
        "Always sense-check that totals are conserved",
      ],
      definitions: [
        { term: "Regular matrix", meaning: "Some power of T has all positive entries; guarantees a unique steady state." },
        { term: "Long-term state", meaning: "The limit of T^n · S0 as n grows large." },
      ],
      formulas: [
        { name: "n-step state", formula: "S_n = T^n · S_0" },
        { name: "Steady state", formula: "T · v = v with Σ entries of v = total population" },
      ],
      examQuestion: {
        problem:
          "A bus company has two depots. Each day 90% of buses based at depot 1 return there, 10% relocate to depot 2. From depot 2, 20% relocate to 1 and 80% stay. There are 300 buses total, with 200 starting at depot 1. Find the long-term distribution.",
        solution: [
          "T = [0.9 0.2; 0.1 0.8], S0 = [200; 100]",
          "Compute T^50 · S0 using CAS",
          "Result ≈ [200; 100] — already at steady state",
          "Verify: T · [200; 100] = [200; 100] ✓",
        ],
        answer: "Long-term: 200 buses at depot 1, 100 at depot 2.",
        marks: 3,
      },
      commonErrors: [
        "Rounding too early during multi-step calculations",
        "Forgetting that totals must be preserved",
        "Confusing column-stochastic and row-stochastic conventions",
      ],
      summary: [
        "Use CAS for T^n",
        "Long-term: regular matrices reach a unique v",
        "Always interpret in context and round sensibly",
      ],
      practice: [
        { question: "If T = [0.7 0.4; 0.3 0.6] is regular, what is the form of the long-term state?", answer: "A unique vector v independent of S0" },
      ],
      quiz: [
        {
          question: "To find the state after 10 steps you should compute:",
          options: ["10·T·S0", "T·S0 + 10", "T^10 · S0", "S0 / 10"],
          correctAnswer: 2,
          explanation: "Repeated application of T is matrix exponentiation.",
        },
        {
          question: "A regular transition matrix guarantees:",
          options: ["No steady state", "A unique long-term state", "T = I", "Equal entries"],
          correctAnswer: 1,
          explanation: "Regularity ensures convergence to a unique steady state.",
        },
        {
          question: "Best round for a population matrix entry of 129.6 buses:",
          options: ["129", "130", "129.6", "Cannot say"],
          correctAnswer: 1,
          explanation: "Buses are whole units; round to the nearest whole number.",
        },
      ],
    },
  ],
};
