import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 8: Revision of Chapters 1–7 (VCE Unit 3)

export const year12MethodsCh8Lessons: TopicLessonsMap = {
  "y12m-ch8-8a-tech-free": [
    {
      title: "Technology-Free Questions",
      explanation:
        "EXAM 1 of VCE Methods is technology-free. Candidates rely on pen-and-paper algebra, exact values, and clean reasoning. Common skills tested:\n\n  • Algebraic manipulation: expansion, factorisation, completing the square\n  • Exact-value trigonometry on the unit circle\n  • Logarithm and exponential laws (e.g. solve 2e^x = 6, ln(x − 1) = 2)\n  • Domain analysis (e.g. ln requires positive argument; even root requires non-negative)\n  • Sketches of standard transformed curves\n  • Solving equations using factorisation, the quadratic formula, or substitution\n\nSTRATEGY:\n  1. Write down what is given in clean notation.\n  2. Choose the simplest form of attack — same-base over logs, factor over formula.\n  3. Show every step compactly; method marks are independent of the final value.\n  4. Verify by domain check whenever logs, roots, or quotients are involved.",
      keyPoints: [
        "Exam 1 is no-CAS — every step is by hand",
        "Exact values, not decimals",
        "Always domain-check log/root/quotient solutions",
      ],
      workedExamples: [
        {
          problem: "Solve ln(x − 1) = 2 exactly.",
          steps: [
            "x − 1 = e²",
            "x = 1 + e²",
            "Check: x − 1 > 0 ✓",
          ],
          answer: "x = 1 + e².",
        },
        {
          problem: "Solve 2 cos(x) = √3 for x ∈ [0, 2π].",
          steps: [
            "cos x = √3/2 → base angle π/6",
            "Cosine positive in Q1 and Q4",
            "x = π/6 or x = 2π − π/6 = 11π/6",
          ],
          answer: "x = π/6 or 11π/6.",
        },
        {
          problem: "Find the maximal domain of f(x) = √(4 − x²).",
          steps: [
            "Need 4 − x² ≥ 0 → x² ≤ 4 → −2 ≤ x ≤ 2",
          ],
          answer: "[−2, 2].",
        },
      ],
      tips: [
        "Keep answers in exact form — π/6, e², √2, ln 3 — never decimals in Exam 1",
      ],
      formulas: [
        { name: "Quadratic formula", formula: "x = (−b ± √(b² − 4ac))/(2a)" },
      ],
      examQuestion: {
        problem: "Solve 3·2^(2x) − 5·2^x − 2 = 0 exactly.",
        solution: [
          "Let u = 2^x: 3u² − 5u − 2 = 0",
          "(3u + 1)(u − 2) = 0 → u = −1/3 or u = 2",
          "Reject u = −1/3 (since 2^x > 0)",
          "2^x = 2 → x = 1",
        ],
        answer: "x = 1.",
        marks: 3,
      },
      commonErrors: [
        "Accepting solutions from the substitution that are negative when the original is strictly positive",
        "Switching to decimal approximations in an exact-answer question",
      ],
      summary: [
        "Tech-free questions reward neat algebra and domain awareness",
      ],
      quiz: [
        { question: "Solve e^x = 5 (exact):", options: ["x = log 5", "x = ln 5", "x = 5", "x = 1/e"], correctAnswer: 1, explanation: "Natural log." },
        { question: "Domain of √(x − 3):", options: ["ℝ", "x > 3", "x ≥ 3", "x ≤ 3"], correctAnswer: 2, explanation: "Argument ≥ 0." },
        { question: "Exact value of sin(π/6):", options: ["1/2", "√2/2", "√3/2", "1"], correctAnswer: 0, explanation: "Standard." },
      ],
    },
  ],

  "y12m-ch8-8b-multiple-choice": [
    {
      title: "Multiple-Choice Questions",
      explanation:
        "EXAM 2 SECTION A presents 20 multiple-choice questions. CAS is permitted. Each question has exactly one correct option from five.\n\nELIMINATION STRATEGIES:\n  • DOMAIN: any answer with an out-of-domain feature is wrong.\n  • SIGN/MAGNITUDE: estimate the answer; eliminate options of the wrong order.\n  • SUBSTITUTE A SIMPLE VALUE: plug x = 0 or x = 1 into a candidate identity.\n  • GRAPH REASONING: sketch on CAS to compare shapes quickly.\n  • LIMITING BEHAVIOUR: examine x → ∞, x → 0, x → asymptote.\n\nCAS TIPS:\n  • Use solve(...) for exact answers; nSolve for numeric.\n  • Use Define for repeated functions.\n  • Verify factorisations by expanding.\n  • Use the function table feature for quick numerical comparisons.\n\nDO NOT spend more than ~90 seconds per multiple-choice. Mark uncertain ones and return.",
      keyPoints: [
        "Exam 2 Section A: 20 multiple-choice with CAS",
        "Eliminate by domain, magnitude, substitution",
        "Use CAS to verify, not derive every answer",
      ],
      workedExamples: [
        {
          problem: "Which of the following is the maximal domain of f(x) = log_2(x² − 4)?",
          steps: [
            "Need x² − 4 > 0 → x² > 4 → x < −2 or x > 2",
            "Domain: (−∞, −2) ∪ (2, ∞)",
          ],
          answer: "(−∞, −2) ∪ (2, ∞).",
        },
      ],
      tips: [
        "If two options are very close numerically, recompute with more precision on CAS",
      ],
      formulas: [],
      examQuestion: {
        problem: "Which function has range [−1, 5]?\nA. y = 3 sin(x) + 2  B. y = 3 cos(x) − 2  C. y = sin(x) + 4  D. y = 5 sin(x)  E. y = 2 sin(x) + 3.",
        solution: [
          "A: amplitude 3, mean 2 → range [−1, 5] ✓",
          "B: range [−5, 1]",
          "C: range [3, 5]",
          "D: range [−5, 5]",
          "E: range [1, 5]",
        ],
        answer: "A.",
        marks: 1,
      },
      commonErrors: [
        "Skipping the domain check in a hurry",
        "Misreading the question's interval/restriction",
      ],
      summary: [
        "Speed + elimination + selective CAS = optimal strategy",
      ],
      quiz: [
        { question: "Best first eliminator on a domain question:", options: ["Substitute x = 0", "Sketch on CAS", "Check positivity of arguments", "Use solve()"], correctAnswer: 2, explanation: "Domain failure rules out instantly." },
        { question: "Range of y = 2 sin x:", options: ["[−1, 1]", "[−2, 2]", "[0, 2]", "ℝ"], correctAnswer: 1, explanation: "Amplitude 2." },
        { question: "If asked for an exact answer, prefer:", options: ["nSolve", "solve()", "Decimal approx", "Graph"], correctAnswer: 1, explanation: "solve() returns exact." },
      ],
    },
  ],

  "y12m-ch8-8c-extended-response": [
    {
      title: "Extended-Response Questions",
      explanation:
        "EXAM 2 SECTION B is extended-response. Each question is multi-part, often building on a single context (function, model, or geometric setting). Marks are awarded for method, working, and final answer.\n\nQUESTION ANATOMY (typical):\n  • Part (a): a 1–2 mark setup (find f(0), state asymptote).\n  • Part (b): a 2–3 mark algebraic step (find inverse, solve f(x) = c).\n  • Part (c): a graph or sketch (often with intercepts).\n  • Part (d): an applied modelling step (find time when …).\n  • Part (e): an inequality or 'show that' question.\n\nSTRATEGY:\n  1. READ the entire question before starting; later parts often follow from earlier ones.\n  2. Use prior parts; do NOT redo work.\n  3. Quote results to FULL stated precision (often exact form unless 'correct to 2 dp').\n  4. State each conclusion in a sentence ('therefore the population first exceeds 10000 at t = 12.4 hours').\n  5. Sketch on the answer booklet using the provided axes; label asymptotes, intercepts, and key points.",
      keyPoints: [
        "Method marks are awarded even with arithmetic slips",
        "Use part (a)'s answer in part (b)",
        "Sketches must label intercepts and asymptotes",
        "State conclusions in full sentences",
      ],
      workedExamples: [
        {
          problem: "Let f(x) = 3 ln(x − 1) + 2.\n(a) State the maximal domain.\n(b) Find f⁻¹.\n(c) Find the x-intercept of f.",
          steps: [
            "(a) x − 1 > 0 → x > 1, domain (1, ∞)",
            "(b) y = 3 ln(x − 1) + 2 → swap: x = 3 ln(y − 1) + 2",
            "(x − 2)/3 = ln(y − 1) → y − 1 = e^((x − 2)/3)",
            "f⁻¹(x) = 1 + e^((x − 2)/3)",
            "(c) f(x) = 0: 3 ln(x − 1) = −2 → ln(x − 1) = −2/3",
            "x − 1 = e^(−2/3) → x = 1 + e^(−2/3)",
          ],
          answer: "(a) (1, ∞); (b) f⁻¹(x) = 1 + e^((x − 2)/3); (c) x = 1 + e^(−2/3).",
        },
      ],
      tips: [
        "Always check that the domain you used in part (b) is consistent with part (a)",
      ],
      formulas: [],
      examQuestion: {
        problem: "A population is modelled by P(t) = 500e^(0.04t).\n(a) Find P(0).\n(b) Find the time when P first exceeds 1000, exactly and to 2 dp.\n(c) Find the doubling time exactly.",
        solution: [
          "(a) P(0) = 500",
          "(b) 500e^(0.04t) = 1000 → e^(0.04t) = 2 → t = (ln 2)/0.04 = 25 ln 2",
          "25 ln 2 ≈ 17.33",
          "(c) Doubling time = 25 ln 2 (same calculation)",
        ],
        answer: "(a) 500; (b) t = 25 ln 2 ≈ 17.33; (c) 25 ln 2.",
        marks: 5,
      },
      commonErrors: [
        "Skipping units (hours, dollars, m²) in a worded answer",
        "Mixing decimals into an exact-form answer",
      ],
      summary: [
        "Build on prior parts; show working clearly; state units and conclusions",
      ],
      quiz: [
        { question: "Best practice in part (c) if part (b) found a value:", options: ["Recompute from scratch", "Use the value from (b)", "Skip", "Quote without justification"], correctAnswer: 1, explanation: "Build on prior parts." },
        { question: "If 'find the exact time', do NOT:", options: ["Use ln", "Round", "Use exact form", "Use π"], correctAnswer: 1, explanation: "Exact = no rounding." },
        { question: "Marks are awarded for:", options: ["Final answer only", "Method as well", "Diagrams only", "Speed"], correctAnswer: 1, explanation: "Method marks are common." },
      ],
    },
  ],

  "y12m-ch8-8d-pseudocode": [
    {
      title: "Algorithms and Pseudocode",
      explanation:
        "VCE Methods now includes ALGORITHMIC THINKING. Pseudocode questions ask you to read or trace short algorithms expressed in a generic, language-neutral style. Common constructs:\n\n  • Assignment: variable ← value\n  • Conditionals: if … then … else if … then … else …\n  • Loops: while/until or for-loops\n  • Functions: define name(args) returning a value\n\nMETHODS-LEVEL ALGORITHMS to know:\n\n  1. NEWTON–RAPHSON iteration for finding a root of f(x) = 0:\n       x_{n+1} = x_n − f(x_n)/f′(x_n)\n     Pseudocode:\n       input x₀, ε\n       while |f(x_n)| > ε:\n         x_{n+1} ← x_n − f(x_n)/f′(x_n)\n       return x_n\n\n  2. BISECTION method for a continuous f with f(a)·f(b) < 0: repeatedly bisect the interval, keeping the half on which the sign change persists, until the interval is shorter than ε.\n\n  3. MONTE-CARLO integration: sample random points and count those under the curve.\n\nQuestions typically ask: trace one or two iterations; identify the algorithm's purpose; state when it fails (e.g. f′(x_n) = 0 in Newton–Raphson).",
      keyPoints: [
        "Read pseudocode top-to-bottom, tracking variable values",
        "Newton–Raphson: x_{n+1} = x_n − f(x_n)/f′(x_n)",
        "Bisection: requires sign change on the interval",
        "Algorithms can fail (Newton: f′ = 0; bisection: no sign change)",
      ],
      workedExamples: [
        {
          problem: "Apply two Newton–Raphson iterations to f(x) = x² − 2 starting at x₀ = 1.",
          steps: [
            "f′(x) = 2x",
            "x₁ = 1 − (1² − 2)/(2·1) = 1 − (−1)/2 = 1.5",
            "f(1.5) = 0.25; f′(1.5) = 3",
            "x₂ = 1.5 − 0.25/3 ≈ 1.4167",
          ],
          answer: "x₁ = 1.5; x₂ ≈ 1.4167 (converging to √2 ≈ 1.4142).",
        },
      ],
      tips: [
        "Trace each iteration in a small table for accuracy",
      ],
      formulas: [
        { name: "Newton–Raphson", formula: "x_{n+1} = x_n − f(x_n)/f′(x_n)" },
      ],
      examQuestion: {
        problem: "Consider the pseudocode:\n  define f(x) = x³ − x − 1\n  x ← 1\n  for k from 1 to 2 do\n    x ← x − f(x)/(3x² − 1)\n  end for\n  return x\nState the value of x returned.",
        solution: [
          "f(x) = x³ − x − 1, f′(x) = 3x² − 1",
          "x₀ = 1; f(1) = −1; f′(1) = 2",
          "x₁ = 1 − (−1)/2 = 1.5",
          "f(1.5) = 3.375 − 1.5 − 1 = 0.875; f′(1.5) = 5.75",
          "x₂ = 1.5 − 0.875/5.75 ≈ 1.3478",
        ],
        answer: "x ≈ 1.3478 (Newton–Raphson converging to ≈ 1.3247).",
        marks: 3,
      },
      commonErrors: [
        "Using f instead of f′ in the denominator",
        "Not tracking x_n versus x_{n+1} carefully",
      ],
      summary: [
        "Trace pseudocode line-by-line; recognise standard numerical algorithms",
      ],
      quiz: [
        { question: "Newton–Raphson uses:", options: ["f only", "f and f′", "f and f″", "f and ∫f"], correctAnswer: 1, explanation: "Tangent-line approximation." },
        { question: "Bisection requires:", options: ["f differentiable", "f(a)·f(b) < 0", "f(a) = 0", "Polynomial only"], correctAnswer: 1, explanation: "Sign change." },
        { question: "Newton fails when:", options: ["x₀ < 0", "f′(x_n) = 0", "f(x_n) > 0", "x_n is integer"], correctAnswer: 1, explanation: "Division by zero." },
      ],
    },
  ],
};
