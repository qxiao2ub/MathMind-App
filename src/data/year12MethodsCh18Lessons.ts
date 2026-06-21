import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 18: Revision of Chapters 13–17
// Probability and statistics revision (discrete + continuous + binomial + normal + sampling).

export const year12MethodsCh18Lessons: TopicLessonsMap = {
  // ─── 18A: Technology-Free Questions ────────────────────────────────
  "y12m-ch18-18a-tech-free": [
    {
      title: "Technology-Free Probability and Statistics",
      explanation:
        "Exam 1 of VCE Mathematical Methods is technology-free. For the probability and statistics strand (Chapters 13–17) you must be fluent with EXACT arithmetic, fractions, surds and small integer binomial computations.\n\nKEY SKILLS NEEDED:\n  • Compute E(X), Var(X), sd(X) for small discrete distributions from a table.\n  • Apply linear-change rules: E(aX + b) = aE(X) + b, Var(aX + b) = a²Var(X).\n  • Evaluate binomial probabilities P(X = k) = C(n, k) p^k (1−p)^(n−k) for small n.\n  • Integrate simple polynomial / exponential / trigonometric pdfs by hand to find P(a < X < b), the mean μ = ∫ x f(x) dx, and the median m where ∫_{-∞}^m f(x) dx = 1/2.\n  • Use the symmetry of the normal distribution and quoted z-values such as 1, 1.96, 2 to evaluate standard probabilities.\n  • Standardise: Z = (X − μ)/σ.\n  • Construct and interpret confidence intervals using a quoted z*.\n\nGENERAL STRATEGY:\n  1. Identify the random variable and its distribution.\n  2. Write the probability statement in symbols before computing.\n  3. Use exact values throughout — do NOT decimalise prematurely.\n  4. Where pdfs are involved, sketch them: it makes set-up errors obvious.",
      keyPoints: [
        "Recognise the distribution before computing",
        "Keep exact values (fractions, surds) until the last step",
        "Use symmetry and standardisation for normal questions",
        "Quote stated z* values; do not approximate",
      ],
      workedExamples: [
        {
          problem:
            "X has pdf f(x) = (3/8) x² for 0 ≤ x ≤ 2. Find E(X) by hand.",
          steps: [
            "E(X) = ∫₀² x · (3/8) x² dx = (3/8) ∫₀² x³ dx",
            "= (3/8) · [x⁴/4]₀² = (3/8) · 4 = 3/2",
          ],
          answer: "E(X) = 3/2.",
        },
        {
          problem:
            "X ~ Bi(4, 1/3). Find P(X = 2) exactly.",
          steps: [
            "P(X = 2) = C(4,2) (1/3)² (2/3)²",
            "= 6 · (1/9) · (4/9) = 24/81 = 8/27",
          ],
          answer: "8/27.",
        },
        {
          problem:
            "X ~ N(50, 100). Use symmetry to find P(40 ≤ X ≤ 60) given P(Z < 1) = 0.8413.",
          steps: [
            "Standardise: Z₁ = −1, Z₂ = 1",
            "P(−1 ≤ Z ≤ 1) = 2(0.8413) − 1 = 0.6826",
          ],
          answer: "≈ 0.6826.",
        },
      ],
      tips: [
        "Sketch pdfs and shade regions to avoid sign errors",
        "Always verify ∫ f(x) dx = 1 over the support",
        "Use exact fractions for binomial answers",
      ],
      formulas: [
        { name: "Discrete mean", formula: "E(X) = Σ x · P(X = x)" },
        { name: "Continuous mean", formula: "E(X) = ∫ x f(x) dx" },
        { name: "Variance shortcut", formula: "Var(X) = E(X²) − (E(X))²" },
        { name: "Linear rule", formula: "Var(aX + b) = a²Var(X)" },
      ],
      examQuestion: {
        problem:
          "X is discrete with P(X=0)=1/2, P(X=1)=1/3, P(X=2)=1/6. Find E(X) and Var(X) exactly.",
        solution: [
          "E(X) = 0·(1/2) + 1·(1/3) + 2·(1/6) = 1/3 + 1/3 = 2/3",
          "E(X²) = 0 + 1·(1/3) + 4·(1/6) = 1/3 + 2/3 = 1",
          "Var(X) = 1 − (2/3)² = 1 − 4/9 = 5/9",
        ],
        answer: "E(X) = 2/3; Var(X) = 5/9.",
        marks: 3,
      },
      commonErrors: [
        "Decimalising too early and losing exact form",
        "Forgetting to subtract (E(X))² in the variance shortcut",
        "Using Φ(z) tables incorrectly for negative z",
      ],
      summary: [
        "Technology-free questions test conceptual fluency, not computation speed",
      ],
      practice: [
        { question: "X ~ Bi(3, 1/2). P(X ≥ 2)?", answer: "1/2" },
        { question: "Z standard normal. P(Z > 0) = ?", answer: "1/2" },
      ],
      quiz: [
        {
          question: "If Var(X) = 9 and Y = 2X + 1, then Var(Y) =",
          options: ["9", "18", "36", "37"],
          correctAnswer: 2,
          explanation: "a²Var(X) = 4·9 = 36.",
        },
        {
          question: "X ~ Bi(2, 1/2). Find P(X = 1).",
          options: ["1/4", "1/3", "1/2", "3/4"],
          correctAnswer: 2,
          explanation: "C(2,1)(1/2)²= 2/4 = 1/2.",
        },
        {
          question: "If pdf f(x) = c on [0, 4], then c =",
          options: ["1/2", "1/3", "1/4", "1"],
          correctAnswer: 2,
          explanation: "Total area must equal 1: 4c = 1.",
        },
      ],
    },
  ],

  // ─── 18B: Multiple-Choice Questions ────────────────────────────────
  "y12m-ch18-18b-multiple-choice": [
    {
      title: "Exam 1 / Exam 2 Style Multiple-Choice — Probability and Statistics",
      explanation:
        "Multiple-choice questions in the probability and statistics strand reward speed AND traps. Common pitfall families:\n  • CONFUSING binomial mean np with variance np(1−p).\n  • CONFUSING the standard error √(p(1−p)/n) with variance p(1−p)/n.\n  • Misreading 'at most' (≤), 'at least' (≥), 'fewer than' (<), 'more than' (>).\n  • Forgetting CONTINUITY corrections when approximating a binomial by a normal.\n  • Misinterpreting confidence: 'we are 95% confident p lies in (L, U)' is correct; 'p has 95% probability of lying in (L, U)' is INCORRECT.\n  • For pdfs, mistaking f(x) for a probability — only ∫ f(x) dx is a probability.\n\nSTRATEGY:\n  1. Read the question twice.\n  2. Identify the distribution and parameters.\n  3. Check for traps in inequality direction.\n  4. Use estimation to ELIMINATE clearly wrong options before computing.",
      keyPoints: [
        "np vs npq: mean vs variance",
        "Standard error = √variance",
        "Watch ≤ vs <",
        "Apply continuity correction when approximating discrete by normal",
      ],
      workedExamples: [
        {
          problem:
            "X ~ Bi(50, 0.4). Approximate the standard deviation. Choose: A) 20 B) 12 C) √12 D) √20.",
          steps: [
            "Var(X) = npq = 50·0.4·0.6 = 12",
            "sd = √12",
          ],
          answer: "C) √12.",
        },
        {
          problem:
            "Sample of n=100, p̂=0.4. The 95% CI half-width is closest to:",
          steps: [
            "ŜE = √(0.4·0.6/100) = √0.0024 ≈ 0.04899",
            "Margin = 1.96 · 0.04899 ≈ 0.0960",
          ],
          answer: "≈ 0.10.",
        },
      ],
      tips: [
        "Pre-compute E and Var for any binomial in one line: np, npq",
        "Use 1.96 ≈ 2 for quick estimation",
      ],
      formulas: [
        { name: "Binomial summary", formula: "E = np, Var = np(1−p)" },
        { name: "CI margin", formula: "z* √(p̂(1−p̂)/n)" },
      ],
      examQuestion: {
        problem:
          "Z ~ N(0,1). P(Z > 1.96) is closest to: A) 0.05 B) 0.025 C) 0.95 D) 0.975.",
        solution: [
          "Two-tailed 95% CI uses ±1.96",
          "Each tail = 0.025",
        ],
        answer: "B) 0.025.",
        marks: 1,
      },
      commonErrors: [
        "Confusing tail and centre probabilities",
        "Mixing up sd and Var",
      ],
      summary: [
        "Eliminate impossible options first; compute precisely only between the survivors",
      ],
      practice: [
        { question: "X~Bi(10,0.5). E(X)=?", answer: "5" },
        { question: "X~N(10,4). sd=?", answer: "2" },
      ],
      quiz: [
        {
          question: "X~Bi(200,0.1). Var(X) =",
          options: ["20", "18", "10", "9"],
          correctAnswer: 1,
          explanation: "200·0.1·0.9 = 18.",
        },
        {
          question: "For 95% CI we use z* ≈",
          options: ["1.28", "1.65", "1.96", "2.58"],
          correctAnswer: 2,
          explanation: "Standard 95% critical value.",
        },
      ],
    },
  ],

  // ─── 18C: Extended-Response Questions ──────────────────────────────
  "y12m-ch18-18c-extended-response": [
    {
      title: "Extended-Response Questions — Probability and Statistics",
      explanation:
        "Extended-response questions integrate several skills from Chapters 13–17 in a single context, often with multiple parts that BUILD on earlier answers. Use a clear, reusable structure:\n  1. State the random variable and its distribution explicitly.\n  2. Write the probability statement, then evaluate.\n  3. When asked to interpret, use full sentences and contextual units.\n  4. Carry exact intermediate values through every part.\n\nTYPICAL CONTEXTS:\n  • Quality control with binomial trials → normal approximation for large batches.\n  • Reaction times modelled by a continuous pdf → mean, median, and percentiles.\n  • Polling and confidence intervals for an unknown population proportion.\n  • Combined discrete + continuous models, e.g. a mixture or a conditional pdf.",
      keyPoints: [
        "State distribution and parameters at the start of every part",
        "Carry exact values through; only round in final answers",
        "Interpret in context with units and sentences",
      ],
      workedExamples: [
        {
          problem:
            "Reaction times T (sec) have pdf f(t) = 4t·e^{-2t²} for t ≥ 0. (a) Verify it is a pdf. (b) Find P(T ≤ 1).",
          steps: [
            "(a) ∫₀^∞ 4t e^{-2t²} dt: substitute u = 2t², du = 4t dt → ∫₀^∞ e^{-u} du = 1 ✓",
            "(b) P(T ≤ 1) = ∫₀¹ 4t e^{-2t²} dt = [−e^{-2t²}]₀¹ = 1 − e^{-2} ≈ 0.8647",
          ],
          answer: "(a) verified; (b) 1 − e^{-2} ≈ 0.8647.",
        },
        {
          problem:
            "A poll of 600 voters yields 348 in favour. Construct a 95% CI for the true proportion in favour and interpret.",
          steps: [
            "p̂ = 348/600 = 0.58",
            "ŜE = √(0.58·0.42/600) ≈ 0.02013",
            "Margin = 1.96·0.02013 ≈ 0.03946",
            "CI = (0.5405, 0.6195)",
            "Interpretation: We are 95% confident that the true proportion of voters in favour lies between 54.1% and 62.0%",
          ],
          answer: "95% CI: (0.5405, 0.6195).",
        },
      ],
      tips: [
        "Parts (b), (c)... usually use the answer from (a) — preserve it exactly",
        "If unsure of a numerical answer, set up the integral or formula clearly for partial marks",
      ],
      formulas: [
        { name: "CI for p", formula: "p̂ ± z* √(p̂(1−p̂)/n)" },
        { name: "Continuous mean", formula: "μ = ∫ x f(x) dx" },
      ],
      examQuestion: {
        problem:
          "A factory produces light bulbs with a 5% defect rate. A box contains 20 bulbs. (a) State the distribution of D, the number of defects. (b) Find P(D ≤ 1). (c) Find the expected number of defects.",
        solution: [
          "(a) D ~ Bi(20, 0.05)",
          "(b) P(D ≤ 1) = (0.95)^20 + 20·0.05·(0.95)^19 ≈ 0.3585 + 0.3774 = 0.7358",
          "(c) E(D) = np = 1",
        ],
        answer: "(a) Bi(20, 0.05); (b) ≈ 0.7358; (c) 1.",
        marks: 5,
      },
      commonErrors: [
        "Switching distributions mid-question",
        "Rounding too early and losing accuracy in later parts",
      ],
      summary: [
        "Extended responses reward STRUCTURE and CLARITY, not just answers",
      ],
      practice: [
        { question: "X ~ Bi(8, 0.25). Find P(X = 2).", answer: "≈ 0.3115" },
      ],
      quiz: [
        {
          question: "First step in any extended-response is:",
          options: ["Compute the integral", "State distribution and parameters", "Sketch", "Apply CLT"],
          correctAnswer: 1,
          explanation: "Always start by defining the model.",
        },
      ],
    },
  ],

  // ─── 18D: Algorithms and Pseudocode ────────────────────────────────
  "y12m-ch18-18d-pseudocode": [
    {
      title: "Algorithms and Pseudocode — Probability and Statistics",
      explanation:
        "VCE Methods now includes ALGORITHMIC questions that require you to read pseudocode and trace its outputs, or to identify what statistical/probabilistic quantity the algorithm computes. Common pseudocode patterns in probability:\n  • SIMULATION loops: generate random Bernoulli trials and tally successes.\n  • CUMULATIVE probability: build a running total to find the smallest k such that P(X ≤ k) ≥ α.\n  • CONFIDENCE INTERVAL: take a sample, compute p̂ and the interval.\n\nWHEN TRACING:\n  • Maintain a small table of variable values after each iteration.\n  • Be careful with `for i = 1 to n` (inclusive) vs `for i = 0 to n − 1`.\n  • Pay attention to whether comparisons are strict (<) or non-strict (≤).",
      keyPoints: [
        "Trace pseudocode line-by-line with a variable table",
        "Distinguish strict and non-strict comparisons",
        "Recognise when a loop computes a cumulative probability",
      ],
      workedExamples: [
        {
          problem:
            "Algorithm: total ← 0; for k = 0 to 4: total ← total + C(10, k)·(0.3)^k·(0.7)^(10−k); print total. What does this compute?",
          steps: [
            "It sums P(X = 0) + P(X = 1) + … + P(X = 4) for X ~ Bi(10, 0.3)",
            "= P(X ≤ 4)",
          ],
          answer: "P(X ≤ 4) for X ~ Bi(10, 0.3).",
        },
        {
          problem:
            "Algorithm: k ← 0; cum ← 0; while cum < 0.95: cum ← cum + P(X = k); k ← k + 1; return k − 1. Explain.",
          steps: [
            "It returns the smallest k such that P(X ≤ k) ≥ 0.95 — the 95th percentile of the distribution",
          ],
          answer: "The 95th percentile of X.",
        },
      ],
      tips: [
        "Always note whether an algorithm uses ≤ or <",
        "Test the algorithm with a small case to confirm its output",
      ],
      definitions: [
        { term: "Pseudocode", meaning: "A semi-formal language for describing algorithms in plain English with control structures." },
      ],
      examQuestion: {
        problem:
          "Trace: x ← 0; for i = 1 to 3: x ← x + i²; print x. Output?",
        solution: [
          "i = 1: x = 1",
          "i = 2: x = 5",
          "i = 3: x = 14",
        ],
        answer: "14.",
        marks: 2,
      },
      commonErrors: [
        "Off-by-one errors in loop bounds",
        "Confusing return location (inside vs outside loop)",
      ],
      summary: [
        "Algorithms test the same concepts in a different language — translate to maths first",
      ],
      practice: [
        { question: "What does 'sum C(n,k)p^k q^{n-k} for k=0..n' compute?", answer: "1 (total binomial probability)" },
      ],
      quiz: [
        {
          question: "while cum < 0.5 with cum increasing by P(X=k) returns:",
          options: ["Mean", "Mode", "Median index", "Variance"],
          correctAnswer: 2,
          explanation: "Smallest k with cumulative ≥ 0.5 is the median.",
        },
      ],
    },
  ],
};
