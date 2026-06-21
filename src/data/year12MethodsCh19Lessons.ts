import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 19: Revision of Chapters 1–18
// Final cumulative revision before VCE exams.

export const year12MethodsCh19Lessons: TopicLessonsMap = {
  // ─── 19A: Technology-Free Questions ────────────────────────────────
  "y12m-ch19-19a-tech-free": [
    {
      title: "Cumulative Technology-Free Revision",
      explanation:
        "Exam 1 of VCE Methods is a 1-hour, technology-free, 40-mark paper. It tests algebraic fluency across the WHOLE course. The expected skill set:\n  • POLYNOMIALS — factorisation, remainder/factor theorem, sketching with intercepts and end behaviour.\n  • TRANSFORMATIONS — translations, dilations, reflections of f(x), and the inverse function.\n  • EXPONENTIALS, LOGARITHMS, CIRCULAR — solving exact equations, including general solutions of trig equations.\n  • DIFFERENTIATION — power, product, quotient, chain rules; tangent lines; stationary points.\n  • INTEGRATION — antidifferentiation by inspection, definite integrals exactly, area between curves.\n  • PROBABILITY — discrete tables, simple binomial, simple pdf integrals, normal symmetry.\n\nGENERAL EXAM 1 STRATEGY:\n  1. Allocate ~1.5 minutes per mark.\n  2. Attempt every part — partial credit is awarded.\n  3. Keep exact form (fractions, surds, e, ln, π) throughout.\n  4. Show all working — derivative rules and integration steps must be visible.",
      keyPoints: [
        "Exact form throughout — no decimals",
        "Show working for every rule applied",
        "Sketch where it helps you set up integrals or solve equations",
        "Manage time: 1.5 min/mark",
      ],
      workedExamples: [
        {
          problem:
            "Differentiate y = x² · ln(x) and evaluate dy/dx at x = e.",
          steps: [
            "Product rule: dy/dx = 2x ln(x) + x²·(1/x) = 2x ln(x) + x",
            "At x = e: 2e·1 + e = 3e",
          ],
          answer: "dy/dx|_{x=e} = 3e.",
        },
        {
          problem:
            "Find ∫₀^{π/2} sin(2x) dx exactly.",
          steps: [
            "Antiderivative: −(1/2) cos(2x)",
            "Evaluate: −(1/2)[cos(π) − cos(0)] = −(1/2)(−1 − 1) = 1",
          ],
          answer: "1.",
        },
        {
          problem:
            "Solve 2 sin(x) = 1 for x ∈ [0, 2π].",
          steps: [
            "sin(x) = 1/2",
            "x = π/6 or x = π − π/6 = 5π/6",
          ],
          answer: "x = π/6, 5π/6.",
        },
      ],
      tips: [
        "Memorise key exact values: cos(π/6), sin(π/3), tan(π/4), e^0, ln(1)",
        "Always check the domain when solving trig equations",
      ],
      formulas: [
        { name: "Product rule", formula: "(uv)' = u'v + uv'" },
        { name: "Chain rule", formula: "(f(g(x)))' = f'(g(x))·g'(x)" },
        { name: "FTC", formula: "∫_a^b f'(x) dx = f(b) − f(a)" },
      ],
      examQuestion: {
        problem:
          "Let f(x) = e^{2x}. (a) Find f'(x). (b) Find the equation of the tangent at x = 0.",
        solution: [
          "(a) f'(x) = 2e^{2x}",
          "(b) f(0) = 1; f'(0) = 2; tangent: y − 1 = 2(x − 0) → y = 2x + 1",
        ],
        answer: "y = 2x + 1.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting +C in indefinite integrals",
        "Dropping brackets in chain rule applications",
        "Sign errors with cos(π) = −1",
      ],
      summary: [
        "Exam 1 rewards accuracy and clean algebra under time pressure",
      ],
      practice: [
        { question: "d/dx(ln(3x))?", answer: "1/x" },
        { question: "∫(2x + 3) dx?", answer: "x² + 3x + C" },
      ],
      quiz: [
        {
          question: "d/dx[sin(2x)] =",
          options: ["cos(2x)", "2 cos(2x)", "−cos(2x)", "−2 cos(2x)"],
          correctAnswer: 1,
          explanation: "Chain rule with inner derivative 2.",
        },
        {
          question: "∫ e^{3x} dx =",
          options: ["e^{3x} + C", "(1/3) e^{3x} + C", "3 e^{3x} + C", "e^x + C"],
          correctAnswer: 1,
          explanation: "Reverse chain rule.",
        },
      ],
    },
  ],

  // ─── 19B: Multiple-Choice Questions ────────────────────────────────
  "y12m-ch19-19b-multiple-choice": [
    {
      title: "Cumulative Multiple-Choice Revision",
      explanation:
        "Exam 2 of Methods includes 20 multiple-choice questions, each worth one mark. Strategy:\n  • Aim for 1 minute per multiple-choice question.\n  • Use ELIMINATION aggressively — usually 1–2 options can be discarded by inspection.\n  • Use the CALCULATOR to verify, not to solve from scratch (set up the maths first).\n  • Watch for SIGN, DOMAIN, and TRANSFORMATION traps — many questions test attention to detail.\n\nCOMMON TRAP CATEGORIES:\n  1. Transformations: 'shift right by 3' is f(x − 3), not f(x + 3).\n  2. Inverse functions: swap x and y, then solve.\n  3. Probability: 'at least one' = 1 − P(none).\n  4. Calculus: 'increasing' means f'(x) > 0; do not confuse with f(x) > 0.\n  5. Definite integrals: bounds matter. ∫_a^b = −∫_b^a.",
      keyPoints: [
        "1 minute per MCQ; don't get stuck",
        "Eliminate first, compute second",
        "Read 'increasing/decreasing' relative to derivative SIGN, not function value",
      ],
      workedExamples: [
        {
          problem:
            "y = (x − 2)² has vertex at: A) (−2, 0) B) (2, 0) C) (0, 2) D) (0, −2).",
          steps: [
            "Vertex form (x − h)² has vertex at (h, 0)",
            "Here h = 2",
          ],
          answer: "B) (2, 0).",
        },
        {
          problem:
            "If f'(x) = 3x² − 12, the function is decreasing on:",
          steps: [
            "f'(x) < 0 ⇔ x² < 4 ⇔ −2 < x < 2",
          ],
          answer: "(−2, 2).",
        },
      ],
      tips: [
        "Sketch quickly to confirm transformation direction",
        "Use boundary values to test interval answers",
      ],
      examQuestion: {
        problem:
          "The inverse of f(x) = 2x + 3 is: A) (x − 3)/2 B) (x + 3)/2 C) (3 − x)/2 D) 2(x − 3).",
        solution: [
          "Swap: x = 2y + 3 → y = (x − 3)/2",
        ],
        answer: "A) (x − 3)/2.",
        marks: 1,
      },
      commonErrors: [
        "Direction of horizontal translation",
        "Confusing inverse with reciprocal",
      ],
      summary: [
        "Stay disciplined: read carefully, eliminate, then compute",
      ],
      practice: [
        { question: "P(at least one head in 3 tosses)?", answer: "1 − (1/2)³ = 7/8" },
      ],
      quiz: [
        {
          question: "Inverse of f(x) = e^x is:",
          options: ["1/e^x", "ln(x)", "e^{-x}", "−e^x"],
          correctAnswer: 1,
          explanation: "Inverse of exponential is the natural log.",
        },
        {
          question: "f(x) = (x − 1)³ has stationary point at x =",
          options: ["−1", "0", "1", "no stationary point"],
          correctAnswer: 2,
          explanation: "f'(x) = 3(x−1)² = 0 at x = 1 (horizontal inflection).",
        },
      ],
    },
  ],

  // ─── 19C: Extended-Response Questions ──────────────────────────────
  "y12m-ch19-19c-extended-response": [
    {
      title: "Cumulative Extended-Response Revision",
      explanation:
        "Section B of Exam 2 contains four to five extended-response questions. They demand:\n  • CAS proficiency for solving equations, finding roots, computing definite integrals, and evaluating probability functions.\n  • Clear COMMUNICATION — define functions, label variables, state assumptions.\n  • A modelling mindset — read the context, translate to mathematics, solve, then INTERPRET in the context.\n\nFRAMEWORK FOR EXTENDED-RESPONSE:\n  1. SET UP — define variables, units, domain.\n  2. TRANSLATE — write the equation, integral or probability.\n  3. SOLVE — use CAS where allowed; show command/setup.\n  4. INTERPRET — convert the answer back to the context with appropriate units and full sentences.\n\nUse the LAST PART of each question as a guide: it usually requires synthesis of all prior parts.",
      keyPoints: [
        "Define variables clearly with units",
        "Show the maths, then the CAS command",
        "Interpret in plain English with units",
        "Use earlier parts in later parts",
      ],
      workedExamples: [
        {
          problem:
            "Population P(t) = 1000 e^{0.05t} thousand, t years. (a) Find the rate dP/dt at t = 10. (b) When does the population reach 2000 thousand?",
          steps: [
            "(a) dP/dt = 1000·0.05·e^{0.05t} = 50 e^{0.05t}; at t=10: 50 e^{0.5} ≈ 82.44 thousand/year",
            "(b) 1000 e^{0.05t} = 2000 → e^{0.05t} = 2 → t = ln(2)/0.05 ≈ 13.86 years",
          ],
          answer: "(a) ≈ 82.4 thousand/year; (b) ≈ 13.86 years.",
        },
        {
          problem:
            "Cost C(x) = x² − 6x + 25 for 0 ≤ x ≤ 8. Find x minimising C(x), and the minimum cost.",
          steps: [
            "C'(x) = 2x − 6 = 0 → x = 3",
            "C(3) = 9 − 18 + 25 = 16",
            "Confirm minimum: C''(x) = 2 > 0",
          ],
          answer: "Minimum cost 16 at x = 3.",
        },
      ],
      tips: [
        "Always end extended-response questions with a sentence interpreting the answer",
        "If CAS is required, briefly state which command/feature was used",
      ],
      examQuestion: {
        problem:
          "Container has volume V(h) = πh²(3 − h)/3 for 0 ≤ h ≤ 3. (a) Find dV/dh. (b) Find h maximising V.",
        solution: [
          "(a) V(h) = π(h² − h³/3); dV/dh = π(2h − h²)",
          "(b) dV/dh = 0 → h(2 − h) = 0 → h = 0 or h = 2",
          "Test: h = 2 gives V = π(4·1/3) = 4π/3 (maximum)",
        ],
        answer: "(a) π(2h − h²); (b) h = 2.",
        marks: 4,
      },
      commonErrors: [
        "Skipping the interpretation step",
        "Using degrees in trig calculus",
        "Not checking endpoints in optimisation problems",
      ],
      summary: [
        "Extended responses are the highest-value items — pace yourself accordingly",
      ],
      practice: [
        { question: "If f(x) = x³ − 3x, find stationary points.", answer: "x = ±1" },
      ],
      quiz: [
        {
          question: "Last step in any extended-response is:",
          options: ["Round", "Interpret", "Differentiate", "Integrate"],
          correctAnswer: 1,
          explanation: "Always interpret the result in context.",
        },
      ],
    },
  ],
};
