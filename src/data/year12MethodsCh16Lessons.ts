import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 16: The Normal Distribution

export const year12MethodsCh16Lessons: TopicLessonsMap = {
  // ─── 16A: The Normal Distribution ──────────────────────────────────
  "y12m-ch16-16a-normal": [
    {
      title: "The Normal Distribution",
      explanation:
        "The NORMAL distribution is the most important continuous distribution in mathematics and statistics. A random variable X is normally distributed with mean μ and standard deviation σ if its pdf is\n  f(x) = (1/(σ√(2π))) · e^(−(x − μ)²/(2σ²)).\nWe write X ~ N(μ, σ²).\n\nKEY FEATURES:\n  • Bell-shaped, symmetric about x = μ.\n  • Maximum value of f is at x = μ.\n  • The points x = μ ± σ are points of inflection.\n  • Total area under the curve equals 1.\n  • The curve approaches but never touches the x-axis.\n\nThe parameters μ and σ control the position and spread:\n  • Changing μ shifts the curve horizontally.\n  • Increasing σ flattens and widens the curve; decreasing σ makes it taller and narrower.\n\nFor any X ~ N(μ, σ²), probabilities are\n  P(a ≤ X ≤ b) = ∫_a^b f(x) dx,\nwhich CANNOT be evaluated in closed form. We use technology (CAS normCdf) or standardisation (Section 16B).",
      keyPoints: [
        "Bell-shaped, symmetric about μ",
        "Inflection points at μ ± σ",
        "Total area = 1",
        "Probabilities require technology or standardisation",
      ],
      workedExamples: [
        {
          problem:
            "X ~ N(50, 8²). Sketch the graph and identify the mean, sd, and inflection points.",
          steps: [
            "Mean μ = 50 → axis of symmetry",
            "sd σ = 8",
            "Inflection points at 50 ± 8, i.e. 42 and 58",
            "Curve maximum is at x = 50",
          ],
          answer: "Symmetric about 50, inflection at 42 and 58.",
        },
      ],
      tips: [
        "Always state X ~ N(μ, σ²) before computing",
        "σ² is the variance; σ is the standard deviation",
      ],
      definitions: [
        { term: "Normal distribution", meaning: "Continuous distribution with bell-shaped pdf, parameters μ and σ²." },
        { term: "Inflection point", meaning: "Where curvature changes sign; for the normal pdf at x = μ ± σ." },
      ],
      formulas: [
        { name: "Normal pdf", formula: "f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²))" },
        { name: "Notation", formula: "X ~ N(μ, σ²)" },
      ],
      examQuestion: {
        problem:
          "Given X ~ N(80, 100), state the mean, standard deviation, and the points of inflection.",
        solution: [
          "Mean = 80",
          "σ² = 100 ⇒ σ = 10",
          "Inflection at 80 ± 10 = 70 and 90",
        ],
        answer: "μ=80, σ=10, inflection at 70 and 90.",
        marks: 2,
      },
      commonErrors: [
        "Confusing variance σ² with standard deviation σ",
        "Forgetting symmetry when reasoning about probabilities",
      ],
      summary: [
        "The normal distribution is parameterised by μ and σ²",
        "Symmetry and inflection points come from the bell shape",
      ],
      practice: [
        { question: "If X ~ N(0, 16), what is σ?", answer: "4" },
      ],
      quiz: [
        {
          question: "The normal curve is symmetric about:",
          options: ["x = 0", "x = σ", "x = μ", "x = μ + σ"],
          correctAnswer: 2,
          explanation: "By definition of mean for a symmetric distribution.",
        },
        {
          question: "Inflection points of the normal pdf are at:",
          options: ["μ", "μ ± σ", "μ ± 2σ", "0"],
          correctAnswer: 1,
          explanation: "Curvature changes one σ from the mean.",
        },
      ],
    },
  ],

  // ─── 16B: Standardisation and 68–95–99.7% Rule ────────────────────
  "y12m-ch16-16b-standardisation": [
    {
      title: "Standardisation and the 68–95–99.7% Rule",
      explanation:
        "The STANDARD NORMAL distribution Z ~ N(0, 1) has mean 0 and standard deviation 1. Any X ~ N(μ, σ²) can be converted via the Z-SCORE\n  Z = (X − μ)/σ.\nA z-score measures how many standard deviations a value is from the mean.\n\nThe EMPIRICAL RULE (68–95–99.7) for any normal distribution:\n  • About 68% of values lie within 1 sd of the mean: P(μ − σ ≤ X ≤ μ + σ) ≈ 0.68.\n  • About 95% lie within 2 sd: P(μ − 2σ ≤ X ≤ μ + 2σ) ≈ 0.95.\n  • About 99.7% lie within 3 sd: P(μ − 3σ ≤ X ≤ μ + 3σ) ≈ 0.997.\n\nThese percentages give quick mental estimates and are routinely tested in Exam 1.\n\nUSEFUL CONSEQUENCES (by symmetry):\n  • P(X > μ + σ) ≈ 0.16, P(X > μ + 2σ) ≈ 0.025, P(X > μ + 3σ) ≈ 0.0015.\n  • P(μ ≤ X ≤ μ + σ) ≈ 0.34.",
      keyPoints: [
        "Z = (X − μ)/σ standardises X",
        "Z ~ N(0, 1)",
        "68/95/99.7% lie within 1/2/3 sd",
        "Use symmetry to derive other percentages",
      ],
      workedExamples: [
        {
          problem:
            "X ~ N(60, 25). Use the empirical rule to estimate P(X > 70).",
          steps: [
            "σ = 5, so 70 = μ + 2σ",
            "P(X > μ + 2σ) ≈ (1 − 0.95)/2 = 0.025",
          ],
          answer: "≈ 0.025.",
        },
        {
          problem:
            "X ~ N(100, 10²). Find z-score for X = 115 and use empirical rule to estimate P(X > 115).",
          steps: [
            "z = (115 − 100)/10 = 1.5",
            "Not a clean empirical rule value; closest: z = 2 gives 0.025; z = 1 gives 0.16",
            "Estimate ≈ 0.067 (half-way reasoning, but exact requires CAS)",
          ],
          answer: "Roughly between 0.025 and 0.16; CAS gives ≈ 0.0668.",
        },
      ],
      tips: [
        "The empirical rule is approximate — quote 68/95/99.7 only at exactly 1, 2, 3 sd",
        "Sketch the bell with shaded region for any P(...) question",
      ],
      definitions: [
        { term: "Z-score", meaning: "(X − μ)/σ — measures distance from mean in sd units." },
      ],
      formulas: [
        { name: "Standardisation", formula: "Z = (X − μ)/σ" },
        { name: "68–95–99.7", formula: "P(|Z| ≤ 1) ≈ 0.68; P(|Z| ≤ 2) ≈ 0.95; P(|Z| ≤ 3) ≈ 0.997" },
      ],
      examQuestion: {
        problem:
          "Heights are N(170, 36). Approximate P(158 ≤ X ≤ 182).",
        solution: [
          "σ = 6, range is μ ± 2σ = 170 ± 12",
          "P ≈ 0.95",
        ],
        answer: "≈ 0.95.",
        marks: 1,
      },
      commonErrors: [
        "Applying 68/95/99.7 to non-multiples of σ",
        "Confusing variance and sd when computing z-scores",
      ],
      summary: [
        "Standardisation reduces every normal to N(0, 1)",
        "Empirical rule gives instant estimates for whole-σ ranges",
      ],
      practice: [
        { question: "X ~ N(50, 4). Find z-score for X = 56.", answer: "3" },
      ],
      quiz: [
        {
          question: "P(μ − σ ≤ X ≤ μ + σ) ≈",
          options: ["0.5", "0.68", "0.95", "0.997"],
          correctAnswer: 1,
          explanation: "One-sd empirical rule.",
        },
        {
          question: "Z-score of 110 when μ=100, σ=5:",
          options: ["1", "2", "5", "10"],
          correctAnswer: 1,
          explanation: "(110−100)/5 = 2.",
        },
      ],
    },
  ],

  // ─── 16C: Determining Normal Probabilities ─────────────────────────
  "y12m-ch16-16c-probabilities": [
    {
      title: "Determining Normal Probabilities",
      explanation:
        "For arbitrary z-values, normal probabilities require technology. CAS commands are:\n  • normCdf(lower, upper, μ, σ) for P(lower ≤ X ≤ upper).\n  • Use −∞ as 'small' or 1E99 as '∞' (or specific large values).\n  • For inverse problems use invNorm(area, μ, σ) which returns x with P(X ≤ x) = area.\n\nSYMMETRY TIPS:\n  • P(X ≥ μ) = P(X ≤ μ) = 0.5.\n  • P(X ≥ μ + a) = P(X ≤ μ − a).\n  • P(|X − μ| ≤ a) = 2 P(X ≤ μ + a) − 1.\n\nQUANTILES (inverse normal): given a probability p, find x_p with P(X ≤ x_p) = p. Always state which probability you are inverting and check the result is sensible (greater than μ if p > 0.5, less than μ if p < 0.5).",
      keyPoints: [
        "Use normCdf for areas",
        "Use invNorm for quantiles",
        "Symmetry simplifies many calculations",
        "Always sketch the area being computed",
      ],
      workedExamples: [
        {
          problem: "X ~ N(70, 8²). Find P(X ≤ 75).",
          steps: [
            "Use CAS: normCdf(−∞, 75, 70, 8) ≈ 0.7340",
          ],
          answer: "≈ 0.7340.",
        },
        {
          problem: "X ~ N(70, 8²). Find x with P(X ≤ x) = 0.9.",
          steps: [
            "invNorm(0.9, 70, 8) ≈ 80.25",
          ],
          answer: "x ≈ 80.25.",
        },
        {
          problem: "X ~ N(50, 100). Find P(40 ≤ X ≤ 65).",
          steps: [
            "normCdf(40, 65, 50, 10) ≈ 0.7745",
          ],
          answer: "≈ 0.7745.",
        },
      ],
      tips: [
        "Always quote the CAS command used",
        "Round to 4 decimal places unless told otherwise",
        "Sketch the region first to avoid setup errors",
      ],
      formulas: [
        { name: "CAS normCdf", formula: "P(a ≤ X ≤ b) = normCdf(a, b, μ, σ)" },
        { name: "Inverse", formula: "x with P(X ≤ x) = p uses invNorm(p, μ, σ)" },
      ],
      examQuestion: {
        problem:
          "Battery life X ~ N(40, 16). Find: (a) P(X > 45); (b) the time t such that 90% of batteries last longer than t.",
        solution: [
          "σ = 4",
          "(a) P(X > 45) = 1 − normCdf(−∞, 45, 40, 4) ≈ 0.1056",
          "(b) Need P(X > t) = 0.9 ⇔ P(X ≤ t) = 0.1; t = invNorm(0.1, 40, 4) ≈ 34.87",
        ],
        answer: "(a) ≈ 0.1056; (b) t ≈ 34.87 hours.",
        marks: 4,
      },
      commonErrors: [
        "Putting μ and σ in the wrong order in CAS",
        "Inverting the wrong tail",
      ],
      summary: [
        "Use CAS for non-trivial normal probabilities",
        "Always check direction with a sketch",
      ],
      practice: [
        { question: "X ~ N(0, 1). P(Z ≤ 1.96)?", answer: "≈ 0.975" },
      ],
      quiz: [
        {
          question: "Command for P(X ≤ 50) when X ~ N(40, 4²) is:",
          options: ["normCdf(50, ∞, 40, 4)", "normCdf(−∞, 50, 40, 4)", "invNorm(50, 40, 4)", "binomCdf(50, 40, 4)"],
          correctAnswer: 1,
          explanation: "Lower bound −∞, upper 50.",
        },
        {
          question: "If P(X ≤ x) = 0.5 then x equals:",
          options: ["σ", "μ", "0", "1"],
          correctAnswer: 1,
          explanation: "Median of a normal equals the mean.",
        },
      ],
    },
  ],

  // ─── 16D: Solving Problems ─────────────────────────────────────────
  "y12m-ch16-16d-problems": [
    {
      title: "Solving Problems Using the Normal Distribution",
      explanation:
        "Applied normal-distribution problems usually fall into one of four templates:\n\n  TYPE 1 — Find a probability given μ and σ.\n    Use normCdf directly.\n\n  TYPE 2 — Find a value (quantile) given a probability.\n    Use invNorm.\n\n  TYPE 3 — Find an unknown parameter (μ or σ) given a probability statement.\n    Translate to z-score and solve.\n    Example: 'top 10% exceed 80', X ~ N(μ, 5²) ⇒ (80 − μ)/5 = invNorm(0.9, 0, 1) ≈ 1.2816 ⇒ μ ≈ 73.59.\n\n  TYPE 4 — Use binomial counting on top of normal probabilities.\n    Find p = P(X > k) by normCdf, then use Y ~ Bi(n, p) for repeated sampling.\n\nALWAYS interpret the answer in context. Round sensibly: round counts to integers, retain 4 decimals for probabilities, 2 for measurements.",
      keyPoints: [
        "Translate every word problem to one of four templates",
        "Use z-scores when a parameter is unknown",
        "Combine normal with binomial for sampling problems",
      ],
      workedExamples: [
        {
          problem:
            "Bag fill X ~ N(μ, 2²) g. We want P(X > 500) = 0.99. Find μ.",
          steps: [
            "P(X > 500) = 0.99 ⇔ P(X ≤ 500) = 0.01",
            "z = invNorm(0.01) ≈ −2.3263",
            "(500 − μ)/2 = −2.3263 ⇒ μ = 500 + 2(2.3263) = 504.65",
          ],
          answer: "μ ≈ 504.65 g.",
        },
        {
          problem:
            "Heights X ~ N(170, 64). 5 people are chosen. Find P(at least 2 are over 180).",
          steps: [
            "p = P(X > 180) = normCdf(180, ∞, 170, 8) ≈ 0.1056",
            "Y ~ Bi(5, 0.1056)",
            "P(Y ≥ 2) = 1 − P(0) − P(1) ≈ 1 − 0.572 − 0.337 = 0.091",
          ],
          answer: "≈ 0.091.",
        },
      ],
      tips: [
        "For Type 3, never forget to convert to a z-score",
        "For Type 4, label normal probability as p before plugging into binomial",
      ],
      formulas: [
        { name: "Inverse z", formula: "z = invNorm(p, 0, 1)" },
      ],
      examQuestion: {
        problem:
          "Times X ~ N(30, σ²) min. The slowest 5% take longer than 38 min. Find σ.",
        solution: [
          "P(X > 38) = 0.05 ⇔ z = invNorm(0.95) ≈ 1.6449",
          "(38 − 30)/σ = 1.6449 ⇒ σ ≈ 4.86",
        ],
        answer: "σ ≈ 4.86 min.",
        marks: 3,
      },
      commonErrors: [
        "Inverting the wrong tail when a 'top x%' statement is given",
        "Mixing units (e.g. variance vs sd)",
      ],
      summary: [
        "Identify the question type, set up a sketch, then solve",
      ],
      practice: [
        { question: "X ~ N(50, σ²). P(X > 60) = 0.1. Find σ.", answer: "10/1.2816 ≈ 7.80" },
      ],
      quiz: [
        {
          question: "If 'top 10%' means P(X > x) = 0.1 then z is approximately:",
          options: ["1.28", "1.65", "1.96", "2.33"],
          correctAnswer: 0,
          explanation: "invNorm(0.9) ≈ 1.2816.",
        },
      ],
    },
  ],

  // ─── 16E: Normal Approximation to Binomial ────────────────────────
  "y12m-ch16-16e-binomial-approx": [
    {
      title: "The Normal Approximation to the Binomial Distribution",
      explanation:
        "When n is large and p is not too close to 0 or 1, the binomial distribution Bi(n, p) is well approximated by the normal distribution N(np, np(1−p)).\n\nA common rule of thumb is np ≥ 10 AND n(1 − p) ≥ 10 for the approximation to be reliable.\n\nCONTINUITY CORRECTION: Because we approximate a discrete distribution by a continuous one, we expand each integer by 0.5 in the appropriate direction:\n  • P(X = k) ≈ P(k − 0.5 ≤ Y ≤ k + 0.5)\n  • P(X ≤ k) ≈ P(Y ≤ k + 0.5)\n  • P(X ≥ k) ≈ P(Y ≥ k − 0.5)\n  where Y ~ N(np, np(1−p)).\n\nWHY USE IT? Modern CAS computes binomCdf for any size, so the approximation is rarely a computational necessity. However, it is examinable conceptually and as a connection between the binomial and normal distributions.",
      keyPoints: [
        "Approximation: Bi(n, p) ≈ N(np, npq) for large n",
        "Rule of thumb: np ≥ 10 and nq ≥ 10",
        "Use the continuity correction (±0.5)",
      ],
      workedExamples: [
        {
          problem:
            "X ~ Bi(100, 0.5). Approximate P(X ≤ 55) using a normal distribution.",
          steps: [
            "μ = 50, σ² = 25 ⇒ σ = 5",
            "Continuity correction: P(X ≤ 55) ≈ P(Y ≤ 55.5)",
            "Standardise: z = (55.5 − 50)/5 = 1.1",
            "P(Z ≤ 1.1) ≈ 0.8643",
            "Exact binomCdf ≈ 0.8644 ✓",
          ],
          answer: "≈ 0.8643.",
        },
      ],
      tips: [
        "Always include the ±0.5 correction in Exam 1 working",
        "If working from CAS, you can compute the exact binomial directly",
      ],
      formulas: [
        { name: "Approximation", formula: "Bi(n, p) ≈ N(np, np(1 − p))" },
        { name: "Continuity correction", formula: "Add or subtract 0.5 to each integer bound" },
      ],
      examQuestion: {
        problem:
          "X ~ Bi(200, 0.3). Use the normal approximation to estimate P(X ≥ 70).",
        solution: [
          "μ = 60, σ² = 42 ⇒ σ ≈ 6.48",
          "P(X ≥ 70) ≈ P(Y ≥ 69.5)",
          "z = (69.5 − 60)/6.48 ≈ 1.466",
          "P(Z ≥ 1.466) = 1 − 0.9286 = 0.0714",
        ],
        answer: "≈ 0.0714.",
        marks: 3,
      },
      commonErrors: [
        "Omitting continuity correction",
        "Using sd² instead of sd in the z-score",
      ],
      summary: [
        "Normal approximates binomial for large n",
        "Continuity correction improves accuracy",
      ],
      practice: [
        { question: "X ~ Bi(50, 0.4). Approximate P(X = 22).", answer: "P(21.5 ≤ Y ≤ 22.5), Y ~ N(20, 12) ≈ 0.087" },
      ],
      quiz: [
        {
          question: "Continuity correction for P(X ≤ 10) is:",
          options: ["P(Y ≤ 9.5)", "P(Y ≤ 10.5)", "P(Y ≤ 10)", "P(Y < 10)"],
          correctAnswer: 1,
          explanation: "Expand the integer upward by 0.5.",
        },
        {
          question: "Approximation parameters for Bi(n, p) are:",
          options: ["μ = p, σ² = npq", "μ = np, σ² = np", "μ = np, σ² = np(1−p)", "μ = n, σ = p"],
          correctAnswer: 2,
          explanation: "Same as binomial mean and variance.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 16 ──────────────────────────────────────────
  "y12m-ch16-review": [
    {
      title: "Review of Chapter 16 — The Normal Distribution",
      explanation:
        "Mastery of Chapter 16 requires fluency in:\n  • Reading X ~ N(μ, σ²) and identifying μ, σ.\n  • Standardising via z = (X − μ)/σ.\n  • Quoting the 68–95–99.7 empirical rule.\n  • Using normCdf and invNorm on CAS for forward and inverse problems.\n  • Setting up parameter problems via z-scores.\n  • Normal approximation to the binomial with continuity correction.\n\nThis chapter directly powers Chapter 17 (Sampling and Estimation), where the sampling distribution of the proportion is approximately normal.",
      keyPoints: [
        "Normal pdf, parameters and shape",
        "Standardisation",
        "Empirical rule",
        "CAS computation",
        "Parameter recovery",
        "Normal approximation",
      ],
      workedExamples: [
        {
          problem:
            "X ~ N(60, 100). Find: (a) P(45 ≤ X ≤ 75); (b) the value k with P(X ≤ k) = 0.025.",
          steps: [
            "σ = 10",
            "(a) Range is μ ± 1.5σ; CAS: normCdf(45, 75, 60, 10) ≈ 0.8664",
            "(b) k = invNorm(0.025, 60, 10) ≈ 40.40",
          ],
          answer: "(a) ≈ 0.8664; (b) k ≈ 40.40.",
        },
      ],
      tips: [
        "Use sketches for any normal probability problem",
        "Quote the empirical rule when limits are exact multiples of σ",
      ],
      formulas: [
        { name: "Pdf", formula: "f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²))" },
        { name: "Standardisation", formula: "Z = (X − μ)/σ" },
      ],
      examQuestion: {
        problem:
          "X ~ N(μ, 4²). The probability that X exceeds 60 is 0.2. Find μ.",
        solution: [
          "P(X > 60) = 0.2 ⇒ z = invNorm(0.8) ≈ 0.8416",
          "(60 − μ)/4 = 0.8416 ⇒ μ ≈ 56.63",
        ],
        answer: "μ ≈ 56.63.",
        marks: 3,
      },
      commonErrors: [
        "Confusing variance and sd",
        "Using empirical rule for non-integer-σ ranges",
      ],
      summary: [
        "Move freely between density, probability and quantile",
      ],
      practice: [
        { question: "X ~ N(0, 1). 99th percentile?", answer: "≈ 2.326" },
      ],
      quiz: [
        {
          question: "If X ~ N(μ, σ²) and z = 0, then x =",
          options: ["σ", "μ", "0", "Mode"],
          correctAnswer: 1,
          explanation: "z = 0 ⇒ x − μ = 0.",
        },
      ],
    },
  ],
};
