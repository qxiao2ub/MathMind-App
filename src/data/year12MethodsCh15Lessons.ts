import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 15: Continuous Random Variables and Their Probability Distributions

export const year12MethodsCh15Lessons: TopicLessonsMap = {
  // ─── 15A: Continuous Random Variables ──────────────────────────────
  "y12m-ch15-15a-continuous-rv": [
    {
      title: "Continuous Random Variables and Probability Density Functions",
      explanation:
        "A CONTINUOUS random variable X takes any real value in some interval. Unlike the discrete case, P(X = a) = 0 for every single point. Instead, probabilities are measured over intervals via a PROBABILITY DENSITY FUNCTION (pdf) f(x).\n\nFor f(x) to be a valid pdf:\n  (i) f(x) ≥ 0 for all x.\n  (ii) ∫_{−∞}^{∞} f(x) dx = 1 (the total area under the curve is 1).\n\nProbabilities are AREAS:\n  P(a ≤ X ≤ b) = ∫_a^b f(x) dx.\n\nBecause individual points carry zero probability:\n  P(X = a) = 0,\n  P(a < X < b) = P(a ≤ X ≤ b) = P(a ≤ X < b) = P(a < X ≤ b).\n\nThe support of X is the set of values where f(x) > 0; outside the support f(x) = 0 and X cannot occur there.\n\nDETERMINING UNKNOWN CONSTANTS: a typical question gives f(x) = k g(x) on [a, b] and asks for k. Solve ∫_a^b k g(x) dx = 1.",
      keyPoints: [
        "f(x) ≥ 0 and ∫ f = 1",
        "Probabilities are integrals (areas)",
        "P(X = a) = 0 for continuous X",
        "Find unknown k by enforcing total area = 1",
      ],
      workedExamples: [
        {
          problem:
            "Let f(x) = k(4 − x²) for −2 ≤ x ≤ 2 and 0 elsewhere. Find k.",
          steps: [
            "∫_{−2}^{2} k(4 − x²) dx = 1",
            "= k[4x − x³/3]_{−2}^{2} = k[(8 − 8/3) − (−8 + 8/3)]",
            "= k(16 − 16/3) = k(32/3)",
            "k = 3/32",
          ],
          answer: "k = 3/32.",
        },
        {
          problem:
            "f(x) = 3x² for 0 ≤ x ≤ 1. Find P(0.5 ≤ X ≤ 1).",
          steps: [
            "P = ∫_{0.5}^{1} 3x² dx = [x³]_{0.5}^{1} = 1 − 0.125 = 0.875",
          ],
          answer: "0.875.",
        },
      ],
      tips: [
        "Always sketch f(x) to check it is non-negative",
        "Verify ∫ f = 1 before using it",
        "Be careful with piecewise definitions and their supports",
      ],
      definitions: [
        { term: "Probability density function", meaning: "Non-negative function f whose total integral is 1; probabilities are areas under f." },
        { term: "Support", meaning: "The set of x values where f(x) > 0." },
      ],
      formulas: [
        { name: "Probability of an interval", formula: "P(a ≤ X ≤ b) = ∫_a^b f(x) dx" },
        { name: "Validity", formula: "f(x) ≥ 0 and ∫_{−∞}^{∞} f(x) dx = 1" },
      ],
      examQuestion: {
        problem:
          "f(x) = (1/2) sin(x) for 0 ≤ x ≤ π. Find P(0 ≤ X ≤ π/2).",
        solution: [
          "Verify pdf: ∫₀^π (1/2) sin x dx = (1/2)[−cos x]₀^π = (1/2)(2) = 1 ✓",
          "P(0 ≤ X ≤ π/2) = (1/2)[−cos x]₀^(π/2) = (1/2)(0 − (−1)) = 1/2",
        ],
        answer: "1/2.",
        marks: 3,
      },
      commonErrors: [
        "Treating f(x) itself as a probability",
        "Forgetting that f must be non-negative",
        "Integrating outside the support",
      ],
      summary: [
        "Continuous probabilities live in intervals, not points",
        "Density × width = approximate probability",
        "Total area = 1 is the master constraint",
      ],
      practice: [
        { question: "f(x) = kx, 0 ≤ x ≤ 2. Find k.", answer: "1/2" },
      ],
      quiz: [
        {
          question: "For a continuous X, P(X = 3) is:",
          options: ["f(3)", "1", "0", "Cannot tell"],
          correctAnswer: 2,
          explanation: "Probability at a single point is zero.",
        },
        {
          question: "A valid pdf must satisfy:",
          options: ["f(x) ≤ 1", "Σ f = 1", "∫ f = 1 and f ≥ 0", "f differentiable"],
          correctAnswer: 2,
          explanation: "Total area equals 1, density non-negative.",
        },
      ],
    },
  ],

  // ─── 15B: Mean and Percentiles ─────────────────────────────────────
  "y12m-ch15-15b-mean-percentiles": [
    {
      title: "Mean and Percentiles for a Continuous Random Variable",
      explanation:
        "The MEAN (expected value) of a continuous random variable X with pdf f is\n  E(X) = μ = ∫_{−∞}^{∞} x · f(x) dx.\n\nMore generally, E(g(X)) = ∫ g(x) f(x) dx.\n\nThe MEDIAN m satisfies\n  ∫_{−∞}^{m} f(x) dx = 1/2.\n\nThe pth PERCENTILE x_p satisfies\n  ∫_{−∞}^{x_p} f(x) dx = p/100.\n\nMODE: the value of x where f(x) is maximised on the support. For differentiable pdfs, set f'(x) = 0 and check it is a maximum.\n\nCAS USE:\n  • mean: ∫(x · f(x), x, a, b)\n  • median: solve ∫(f(x), x, a, m) = 0.5 for m\n  • percentile: solve ∫(f(x), x, a, x_p) = p/100 for x_p",
      keyPoints: [
        "Mean = ∫ x f(x) dx",
        "Median splits the area in half",
        "Mode = maximum of f",
        "Percentiles solve a cumulative integral equation",
      ],
      workedExamples: [
        {
          problem: "f(x) = 2x for 0 ≤ x ≤ 1. Find E(X) and the median.",
          steps: [
            "E(X) = ∫₀¹ x · 2x dx = ∫₀¹ 2x² dx = 2/3",
            "Median: ∫₀^m 2x dx = m² = 0.5 ⇒ m = 1/√2 ≈ 0.707",
          ],
          answer: "E(X) = 2/3; median ≈ 0.707.",
        },
        {
          problem:
            "f(x) = 3x² for 0 ≤ x ≤ 1. Find the 90th percentile.",
          steps: [
            "∫₀^x_p 3t² dt = x_p³ = 0.9 ⇒ x_p = 0.9^(1/3) ≈ 0.9655",
          ],
          answer: "x_{0.9} ≈ 0.9655.",
        },
      ],
      tips: [
        "Always integrate over the support — outside, f = 0",
        "Median ≠ mean unless the distribution is symmetric",
      ],
      definitions: [
        { term: "Median", meaning: "Value where cumulative probability equals 0.5." },
        { term: "Percentile", meaning: "Value below which a given proportion of the distribution lies." },
      ],
      formulas: [
        { name: "Mean", formula: "μ = ∫ x f(x) dx" },
        { name: "Median equation", formula: "∫_{−∞}^{m} f(x) dx = 1/2" },
        { name: "Mode", formula: "argmax_x f(x)" },
      ],
      examQuestion: {
        problem:
          "f(x) = (3/8)x² for 0 ≤ x ≤ 2. Find E(X) and the median.",
        solution: [
          "E(X) = ∫₀² x(3/8)x² dx = (3/8)·[x⁴/4]₀² = (3/8)(4) = 3/2",
          "Median: (3/8)·[x³/3]₀^m = m³/8 = 0.5 ⇒ m³ = 4 ⇒ m = ∛4 ≈ 1.587",
        ],
        answer: "E(X) = 3/2; median = ∛4 ≈ 1.587.",
        marks: 4,
      },
      commonErrors: [
        "Computing E(X) without the factor of x",
        "Solving cumulative equation but using the wrong limit",
      ],
      summary: [
        "Mean uses x f(x); median uses cumulative integral = 1/2",
      ],
      practice: [
        { question: "f(x) = 1/4 on [0, 4]. Mean and median?", answer: "Both 2 (uniform distribution)" },
      ],
      quiz: [
        {
          question: "Median of a continuous X is:",
          options: ["argmax f", "Value with cumulative area 1/2", "∫ x f", "f(0.5)"],
          correctAnswer: 1,
          explanation: "Halves the total area.",
        },
        {
          question: "For f(x) = 2x on [0,1], E(X) =",
          options: ["1/2", "2/3", "1", "1/3"],
          correctAnswer: 1,
          explanation: "∫ 2x² dx from 0 to 1 = 2/3.",
        },
      ],
    },
  ],

  // ─── 15C: Measures of Spread ───────────────────────────────────────
  "y12m-ch15-15c-spread": [
    {
      title: "Measures of Spread — Variance and Standard Deviation",
      explanation:
        "The VARIANCE of a continuous random variable X with pdf f and mean μ is\n  Var(X) = E((X − μ)²) = ∫ (x − μ)² f(x) dx.\n\nThe equivalent COMPUTATIONAL FORM (almost always faster) is\n  Var(X) = E(X²) − μ²,\nwhere E(X²) = ∫ x² f(x) dx.\n\nThe STANDARD DEVIATION is sd(X) = σ = √Var(X). It is in the same units as X and is the natural measure of spread.\n\nThe INTERQUARTILE RANGE (IQR) is x_{0.75} − x_{0.25}; it measures the central 50% spread, useful for skewed distributions.\n\nSKEWNESS: if the long tail is to the right (mean > median) the distribution is positively skewed; if left (mean < median), negatively skewed.",
      keyPoints: [
        "Var = E(X²) − μ²",
        "sd = √Var",
        "IQR = upper quartile − lower quartile",
        "Use sd when the distribution is roughly symmetric",
      ],
      workedExamples: [
        {
          problem: "f(x) = 2x for 0 ≤ x ≤ 1. Compute Var(X) and sd(X).",
          steps: [
            "μ = 2/3 (from earlier)",
            "E(X²) = ∫₀¹ x² · 2x dx = ∫ 2x³ dx = 1/2",
            "Var = 1/2 − 4/9 = 9/18 − 8/18 = 1/18",
            "sd = √(1/18) = 1/(3√2) ≈ 0.236",
          ],
          answer: "Var = 1/18; sd ≈ 0.236.",
        },
      ],
      tips: [
        "Always use the computational formula for variance",
        "Round only at the final step",
      ],
      formulas: [
        { name: "Variance", formula: "Var(X) = ∫ x² f(x) dx − μ²" },
        { name: "Standard deviation", formula: "σ = √Var(X)" },
      ],
      examQuestion: {
        problem:
          "f(x) = 3x²/8 for 0 ≤ x ≤ 2. Find Var(X).",
        solution: [
          "μ = 3/2 (from 15B)",
          "E(X²) = ∫₀² x²(3x²/8) dx = (3/8)·[x⁵/5]₀² = (3/8)(32/5) = 12/5 = 2.4",
          "Var = 2.4 − 2.25 = 0.15",
        ],
        answer: "Var(X) = 0.15.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to subtract μ² in the computational formula",
        "Computing sd directly without the square root step",
      ],
      summary: [
        "Variance and sd extend the discrete formulas using integration",
      ],
      practice: [
        { question: "f(x) = 1/4 on [0,4]. Var?", answer: "16/12 = 4/3" },
      ],
      quiz: [
        {
          question: "If E(X) = 1 and E(X²) = 5, Var(X) =",
          options: ["4", "5", "6", "1"],
          correctAnswer: 0,
          explanation: "5 − 1 = 4.",
        },
      ],
    },
  ],

  // ─── 15D: Properties of Mean and Variance ──────────────────────────
  "y12m-ch15-15d-properties": [
    {
      title: "Properties of Mean and Variance under Linear Transformations",
      explanation:
        "If X is a random variable (discrete or continuous) and a, b are constants, then for Y = aX + b we have:\n  E(Y) = a E(X) + b\n  Var(Y) = a² Var(X)\n  sd(Y) = |a| sd(X)\n\nThese rules follow from the linearity of expectation and the definition of variance. The ADDITIVE constant b shifts the mean but does not affect spread; the MULTIPLICATIVE constant a scales both mean and spread (variance by a²).\n\nFor SUMS of independent random variables X and Y:\n  E(X + Y) = E(X) + E(Y)\n  Var(X + Y) = Var(X) + Var(Y) (only if independent)\n\nThese identities are foundational for the sampling theory in Chapter 17.",
      keyPoints: [
        "E is linear: E(aX + b) = a E(X) + b",
        "Variance kills constants: Var(aX + b) = a² Var(X)",
        "sd scales by |a|",
        "Variances add for independent variables",
      ],
      workedExamples: [
        {
          problem: "X has E(X) = 4 and Var(X) = 9. Find E(2X − 5) and sd(2X − 5).",
          steps: [
            "E(2X − 5) = 2(4) − 5 = 3",
            "Var(2X − 5) = 4 · 9 = 36",
            "sd(2X − 5) = 6",
          ],
          answer: "E = 3; sd = 6.",
        },
        {
          problem:
            "X and Y are independent with E(X) = 5, E(Y) = 3, Var(X) = 2, Var(Y) = 4. Find E(X + Y) and Var(X + Y).",
          steps: [
            "E(X + Y) = 5 + 3 = 8",
            "Independence ⇒ Var(X + Y) = 2 + 4 = 6",
          ],
          answer: "E = 8; Var = 6.",
        },
      ],
      tips: [
        "Variance always squares the multiplier",
        "The +b never affects variance",
      ],
      formulas: [
        { name: "Linearity of mean", formula: "E(aX + b) = aE(X) + b" },
        { name: "Variance scaling", formula: "Var(aX + b) = a²Var(X)" },
        { name: "Independent sums", formula: "Var(X + Y) = Var(X) + Var(Y)" },
      ],
      examQuestion: {
        problem:
          "If E(X) = 10, Var(X) = 4, find E(−3X + 7) and sd(−3X + 7).",
        solution: [
          "E(−3X + 7) = −3(10) + 7 = −23",
          "Var(−3X + 7) = 9 · 4 = 36",
          "sd = 6",
        ],
        answer: "−23 and 6.",
        marks: 2,
      },
      commonErrors: [
        "Forgetting to square the coefficient",
        "Adding sd's instead of variances for independent sums",
      ],
      summary: [
        "Linear rules are fast and exam-friendly",
        "Independence is required for variance addition",
      ],
      practice: [
        { question: "E(X)=2, Var(X)=3. E(5X)?", answer: "10; Var = 75" },
      ],
      quiz: [
        {
          question: "Var(2X + 7) =",
          options: ["2 Var(X) + 7", "4 Var(X)", "4 Var(X) + 7", "Var(X) + 49"],
          correctAnswer: 1,
          explanation: "Constants vanish; 2² = 4.",
        },
      ],
    },
  ],

  // ─── 15E: Cumulative Distribution Functions ────────────────────────
  "y12m-ch15-15e-cdf": [
    {
      title: "Cumulative Distribution Functions",
      explanation:
        "The CUMULATIVE DISTRIBUTION FUNCTION (cdf) of a continuous random variable X is\n  F(x) = P(X ≤ x) = ∫_{−∞}^{x} f(t) dt.\n\nProperties:\n  • F is non-decreasing.\n  • lim_{x → −∞} F(x) = 0 and lim_{x → ∞} F(x) = 1.\n  • For continuous X, F is continuous.\n  • The pdf is recovered as f(x) = F'(x), wherever F is differentiable.\n\nUSES OF F:\n  • P(a ≤ X ≤ b) = F(b) − F(a).\n  • Median m solves F(m) = 0.5.\n  • pth percentile solves F(x_p) = p/100.\n\nThe cdf is particularly useful for piecewise pdfs because F naturally accumulates piece by piece.",
      keyPoints: [
        "F(x) = ∫_{−∞}^x f(t) dt",
        "F is non-decreasing from 0 to 1",
        "f(x) = F'(x)",
        "P(a ≤ X ≤ b) = F(b) − F(a)",
      ],
      workedExamples: [
        {
          problem: "f(x) = 3x² for 0 ≤ x ≤ 1. Find F(x).",
          steps: [
            "F(x) = 0 for x < 0",
            "F(x) = ∫₀^x 3t² dt = x³ for 0 ≤ x ≤ 1",
            "F(x) = 1 for x > 1",
          ],
          answer: "F(x) = x³ on [0,1], 0 below, 1 above.",
        },
        {
          problem:
            "Use F(x) above to compute P(0.4 ≤ X ≤ 0.8) and the median.",
          steps: [
            "P(0.4 ≤ X ≤ 0.8) = F(0.8) − F(0.4) = 0.512 − 0.064 = 0.448",
            "Median: m³ = 0.5 ⇒ m = 0.5^(1/3) ≈ 0.7937",
          ],
          answer: "0.448 and ≈ 0.7937.",
        },
      ],
      tips: [
        "Always state F piecewise: 0, formula, 1",
        "Differentiate F to recover pdf if needed",
      ],
      formulas: [
        { name: "cdf", formula: "F(x) = P(X ≤ x) = ∫_{−∞}^x f(t) dt" },
        { name: "Interval probability", formula: "P(a ≤ X ≤ b) = F(b) − F(a)" },
      ],
      examQuestion: {
        problem:
          "X has cdf F(x) = 1 − e^{−x} for x ≥ 0 (exponential). Find: (a) f(x); (b) P(1 ≤ X ≤ 3).",
        solution: [
          "(a) f(x) = F'(x) = e^{−x} for x ≥ 0",
          "(b) F(3) − F(1) = (1 − e^{−3}) − (1 − e^{−1}) = e^{−1} − e^{−3} ≈ 0.318",
        ],
        answer: "(a) f(x) = e^{−x}; (b) ≈ 0.318.",
        marks: 4,
      },
      commonErrors: [
        "Stopping the cdf at 1 too early or too late on the support",
        "Forgetting that F is constant outside the support",
      ],
      summary: [
        "cdf accumulates probability up to x",
        "All interval probabilities reduce to F differences",
      ],
      practice: [
        { question: "If f(x) = 1 on [0,1], state F(x).", answer: "F(x) = x on [0,1]" },
      ],
      quiz: [
        {
          question: "F'(x) equals:",
          options: ["μ", "f(x)", "Var(X)", "1"],
          correctAnswer: 1,
          explanation: "Differentiating cdf gives pdf.",
        },
        {
          question: "If F(2) = 0.4 and F(5) = 0.9, then P(2 ≤ X ≤ 5) =",
          options: ["1.3", "0.5", "0.4", "0.9"],
          correctAnswer: 1,
          explanation: "0.9 − 0.4 = 0.5.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 15 ──────────────────────────────────────────
  "y12m-ch15-review": [
    {
      title: "Review of Chapter 15 — Continuous Random Variables",
      explanation:
        "This chapter introduced continuous random variables and their probability density functions. You should now be able to:\n  • Verify a function is a valid pdf and find unknown constants.\n  • Compute interval probabilities by integration.\n  • Calculate mean, median, percentiles and mode.\n  • Compute variance and standard deviation using the computational formula.\n  • Apply the linear-transformation rules for E and Var.\n  • Construct the cumulative distribution function and use it for probabilities and percentiles.\n\nThis chapter is the natural bridge to the NORMAL distribution in Chapter 16: the normal pdf is simply one specific (very important) continuous distribution.",
      keyPoints: [
        "Validity, probability, mean, median, percentiles",
        "Variance via E(X²) − μ²",
        "Linear transformation rules",
        "cdf properties and uses",
      ],
      workedExamples: [
        {
          problem:
            "f(x) = (1/9) x² for 0 ≤ x ≤ 3. Find E(X), Var(X) and the median.",
          steps: [
            "Verify ∫₀³ (1/9)x² dx = (1/9)(9) = 1 ✓",
            "E(X) = ∫₀³ x · (x²/9) dx = (1/9)·(81/4) = 9/4 = 2.25",
            "E(X²) = ∫₀³ x² · (x²/9) dx = (1/9)·(243/5) = 27/5 = 5.4",
            "Var = 5.4 − 5.0625 = 0.3375",
            "Median: ∫₀^m (t²/9) dt = m³/27 = 0.5 ⇒ m = (13.5)^(1/3) ≈ 2.381",
          ],
          answer: "E = 2.25; Var = 0.3375; median ≈ 2.38.",
        },
      ],
      tips: [
        "On Exam 2, store f(x) on CAS once and reuse",
        "Always verify pdf validity before computing further",
      ],
      formulas: [
        { name: "Validity", formula: "∫ f = 1 with f ≥ 0" },
        { name: "Mean", formula: "E(X) = ∫ x f dx" },
        { name: "Variance", formula: "Var(X) = ∫ x² f dx − μ²" },
      ],
      examQuestion: {
        problem:
          "f(x) = k(2 − x) for 0 ≤ x ≤ 2. Find k, then compute E(X) and Var(X).",
        solution: [
          "∫₀² k(2 − x) dx = k(4 − 2) = 2k = 1 ⇒ k = 1/2",
          "E(X) = ∫₀² x · (1/2)(2 − x) dx = (1/2)·[x² − x³/3]₀² = (1/2)(4 − 8/3) = 2/3",
          "E(X²) = (1/2)∫₀² x²(2 − x) dx = (1/2)·[2x³/3 − x⁴/4]₀² = (1/2)(16/3 − 4) = 2/3",
          "Var = 2/3 − 4/9 = 2/9",
        ],
        answer: "k = 1/2, E(X) = 2/3, Var(X) = 2/9.",
        marks: 5,
      },
      commonErrors: [
        "Treating f as a probability",
        "Forgetting to verify validity",
        "Using wrong support in integration",
      ],
      summary: [
        "Continuous probability is the area under the pdf",
        "Means, variances and percentiles are integrals",
      ],
      practice: [
        { question: "Uniform on [a, b]: mean and variance?", answer: "(a+b)/2 and (b−a)²/12" },
      ],
      quiz: [
        {
          question: "For uniform X on [0, 6], Var(X) =",
          options: ["3", "6", "3", "3"],
          correctAnswer: 0,
          explanation: "Var = (6−0)²/12 = 3.",
        },
      ],
    },
  ],
};
