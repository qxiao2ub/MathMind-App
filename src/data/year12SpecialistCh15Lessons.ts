import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 15: Distributions of Sample Means

export const year12SpecialistCh15Lessons: TopicLessonsMap = {
  "y12s-ch15-15a-linear-fn": [
    {
      title: "Linear Functions of a Random Variable",
      explanation:
        "If X is a random variable with E(X) = μ and Var(X) = σ², then for constants a, b:\n  • E(aX + b) = a·μ + b\n  • Var(aX + b) = a²·σ²\n  • SD(aX + b) = |a|·σ\n\nNote: adding a constant shifts the mean but not the variance; multiplying scales both.",
      keyPoints: [
        "Linearity of expectation: scaling and shifting are simple",
        "Variance ignores additive constants",
        "Variance uses a², not a",
      ],
      workedExamples: [
        {
          problem: "X has μ = 5, σ² = 4. Find E(3X − 2) and Var(3X − 2).",
          steps: ["E = 3·5 − 2 = 13", "Var = 9·4 = 36"],
          answer: "E = 13, Var = 36",
        },
      ],
      tips: ["Square the multiplier when transforming variance", "Constants don't affect spread"],
      formulas: [
        { name: "Mean", formula: "E(aX+b) = aμ+b" },
        { name: "Variance", formula: "Var(aX+b) = a²σ²" },
      ],
      examQuestion: {
        problem: "X has mean 100 and SD 15. Find mean and SD of Y = 0.2X + 5.",
        solution: ["E(Y) = 0.2·100 + 5 = 25", "SD(Y) = 0.2·15 = 3"],
        answer: "Mean 25, SD 3",
        marks: 2,
      },
      quiz: [
        { question: "Var(3X) =", options: ["3 Var(X)", "9 Var(X)", "Var(X)", "3X"], correctAnswer: 1, explanation: "a² scaling." },
        { question: "E(X + 5) =", options: ["E(X) + 5", "E(X)·5", "E(X)/5", "5"], correctAnswer: 0, explanation: "Linear shift." },
        { question: "Var(X − 7) =", options: ["Var(X) − 7", "Var(X)", "Var(X) + 49", "0"], correctAnswer: 1, explanation: "Constant ignored." },
      ],
    },
  ],
  "y12s-ch15-15b-linear-comb": [
    {
      title: "Linear Combinations of Random Variables",
      explanation:
        "For independent X, Y:\n  • E(aX + bY) = a·E(X) + b·E(Y)\n  • Var(aX + bY) = a²·Var(X) + b²·Var(Y)\n  • Var(X − Y) = Var(X) + Var(Y) (variances ALWAYS add)\n\nWithout independence, Var includes a covariance term (not in syllabus).",
      keyPoints: [
        "Means are always linear (independence not required)",
        "Variances add ONLY when X and Y are independent",
        "Subtraction does not subtract variances — it ADDS them",
      ],
      workedExamples: [
        {
          problem: "X, Y independent with means 4, 6 and variances 1, 2. Find E(2X − Y) and Var(2X − Y).",
          steps: [
            "E = 2·4 − 6 = 2",
            "Var = 4·1 + 1·2 = 6",
          ],
          answer: "E = 2, Var = 6",
        },
      ],
      tips: ["Always state the independence assumption", "Sign of coefficient doesn't change variance contribution"],
      formulas: [{ name: "Variance combo", formula: "Var(aX±bY) = a²Var(X) + b²Var(Y)" }],
      examQuestion: {
        problem: "Independent X, Y both have mean 50 and SD 10. Find SD of (X + Y)/2.",
        solution: [
          "Var(X+Y) = 100 + 100 = 200",
          "Var((X+Y)/2) = 200/4 = 50",
          "SD = √50 ≈ 7.07",
        ],
        answer: "≈ 7.07",
        marks: 3,
      },
      quiz: [
        { question: "Var(X − Y), independent:", options: ["Var(X) − Var(Y)", "Var(X) + Var(Y)", "0", "Var(X)·Var(Y)"], correctAnswer: 1, explanation: "Always add variances." },
        { question: "E(aX + bY) =", options: ["aE(X) + bE(Y)", "abE(X)E(Y)", "(a+b)E(X)", "Mean"], correctAnswer: 0, explanation: "Linearity." },
        { question: "Independence needed for:", options: ["Mean", "Variance addition", "Both", "Neither"], correctAnswer: 1, explanation: "Without it, covariance enters." },
      ],
    },
  ],
  "y12s-ch15-15c-normal-comb": [
    {
      title: "Linear Combinations of Normal Random Variables",
      explanation:
        "If X ~ N(μ_X, σ_X²) and Y ~ N(μ_Y, σ_Y²) are independent, then:\n  aX + bY ~ N(aμ_X + bμ_Y, a²σ_X² + b²σ_Y²)\n\nThe distribution remains NORMAL — only the parameters change.",
      keyPoints: [
        "Closure: linear combination of normals is normal",
        "Compute mean and variance via standard rules",
        "Standardise to Z to find probabilities",
      ],
      workedExamples: [
        {
          problem: "X ~ N(5, 4), Y ~ N(3, 9), independent. Distribution of X + Y?",
          steps: ["Mean = 8; Var = 4 + 9 = 13", "X + Y ~ N(8, 13)"],
          answer: "N(8, 13)",
        },
      ],
      tips: ["Always state independence", "Use Z = (W − μ)/σ for probabilities"],
      examQuestion: {
        problem: "Heights men ~ N(175, 7²), women ~ N(162, 6²). Find P(man > woman).",
        solution: [
          "D = M − W ~ N(13, 49 + 36) = N(13, 85)",
          "P(D > 0) = P(Z > −13/√85) = P(Z > −1.41) ≈ 0.921",
        ],
        answer: "≈ 0.921",
        marks: 4,
      },
      quiz: [
        { question: "Sum of independent normals is:", options: ["Uniform", "Normal", "Binomial", "Poisson"], correctAnswer: 1, explanation: "Closed under addition." },
        { question: "Variance of X − Y:", options: ["σ_X² − σ_Y²", "σ_X² + σ_Y²", "σ_X·σ_Y", "0"], correctAnswer: 1, explanation: "Always add." },
        { question: "Standardise via:", options: ["(X−μ)/σ", "Xσ + μ", "X·μ", "X/μ"], correctAnswer: 0, explanation: "Z-score." },
      ],
    },
  ],
  "y12s-ch15-15d-sample-mean-normal": [
    {
      title: "Sample Mean of a Normal Random Variable",
      explanation:
        "Let X₁, …, Xₙ be a random sample from N(μ, σ²). Then the sample mean:\n  X̄ = (X₁ + … + Xₙ)/n ~ N(μ, σ²/n)\n\nKey: spread of X̄ is σ/√n (the STANDARD ERROR), which decreases as n increases.",
      keyPoints: [
        "X̄ has the SAME mean as X",
        "Variance shrinks by factor 1/n",
        "Standard error = σ/√n",
      ],
      workedExamples: [
        {
          problem: "X ~ N(50, 100). Distribution of X̄ for n = 25?",
          steps: ["μ = 50; σ²/n = 100/25 = 4", "X̄ ~ N(50, 4); SE = 2"],
          answer: "N(50, 4)",
        },
      ],
      tips: ["Larger n ⇒ tighter sampling distribution", "SE = σ/√n, not σ/n"],
      formulas: [{ name: "X̄ distribution", formula: "X̄ ~ N(μ, σ²/n)" }],
      examQuestion: {
        problem: "X ~ N(100, 36), n = 9. Find P(X̄ > 102).",
        solution: [
          "X̄ ~ N(100, 4); SE = 2",
          "Z = (102 − 100)/2 = 1",
          "P(Z > 1) ≈ 0.1587",
        ],
        answer: "≈ 0.1587",
        marks: 3,
      },
      quiz: [
        { question: "Mean of X̄ =", options: ["μ", "μ/n", "μ·n", "0"], correctAnswer: 0, explanation: "Unbiased." },
        { question: "Variance of X̄ =", options: ["σ²", "σ²/n", "σ²·n", "σ"], correctAnswer: 1, explanation: "Shrinks." },
        { question: "Standard error =", options: ["σ", "σ/n", "σ/√n", "σ²/n"], correctAnswer: 2, explanation: "Square root of variance/n." },
      ],
    },
  ],
  "y12s-ch15-15e-simulation": [
    {
      title: "Simulating the Sampling Distribution",
      explanation:
        "Procedure for simulating the distribution of X̄:\n  1. Specify the parent distribution (e.g., uniform, exponential)\n  2. Draw n random observations and compute X̄\n  3. Repeat M times to obtain M sample means\n  4. Plot histogram and compute summary statistics\n\nObservation: even when the parent is non-normal, the histogram of X̄ becomes approximately normal as n grows (precursor to CLT).",
      keyPoints: [
        "Repeated random sampling reveals distribution shape",
        "Larger M (replications) ⇒ smoother histogram",
        "Larger n (sample size) ⇒ closer to normality",
      ],
      workedExamples: [
        {
          problem: "Pseudocode: simulate X̄ for U[0,1], n = 30, M = 1000.",
          steps: [
            "for j from 1 to 1000:",
            "  draw x_1,…,x_30 ~ U(0,1)",
            "  store mean(x)",
            "Plot histogram ≈ Normal centred at 0.5",
          ],
          answer: "Histogram approximately N(0.5, 1/12·1/30)",
        },
      ],
      tips: ["Theoretical mean of U(0,1) = 1/2; var = 1/12", "Compare simulation mean/SD to theoretical predictions"],
      examQuestion: {
        problem: "Parent distribution has μ = 10, σ = 4. With n = 16 and M = 500, predict mean and SD of the histogram of X̄.",
        solution: [
          "Mean of X̄ = μ = 10",
          "SD of X̄ = σ/√n = 4/4 = 1",
        ],
        answer: "Mean 10, SD 1",
        marks: 2,
      },
      quiz: [
        { question: "M (replications) controls:", options: ["Smoothness of histogram", "Mean", "Sample shape", "n"], correctAnswer: 0, explanation: "More reps = smoother." },
        { question: "n (sample size) controls:", options: ["Centre", "Spread of X̄ and normality", "M", "Replications"], correctAnswer: 1, explanation: "Affects SE and CLT." },
        { question: "As n grows, X̄ becomes:", options: ["Uniform", "Normal", "Skewed", "Discrete"], correctAnswer: 1, explanation: "CLT." },
      ],
    },
  ],
  "y12s-ch15-15f-distribution-mean": [
    {
      title: "Central Limit Theorem (CLT)",
      explanation:
        "Central Limit Theorem: For ANY parent distribution with finite mean μ and variance σ², the sample mean X̄ from a sample of size n satisfies:\n  X̄ ≈ N(μ, σ²/n) for large n (typically n ≥ 30)\n\nThis is the foundation of statistical inference — it justifies using normal-based confidence intervals and tests even when the parent is non-normal.",
      keyPoints: [
        "Works for ANY distribution with finite variance",
        "Better approximation as n increases",
        "n ≥ 30 is common threshold (smaller if parent is roughly normal)",
      ],
      workedExamples: [
        {
          problem: "Parent has μ = 20, σ = 5, unknown shape. n = 50. P(X̄ > 21)?",
          steps: [
            "By CLT: X̄ ≈ N(20, 25/50) = N(20, 0.5)",
            "SE = √0.5 ≈ 0.707",
            "Z = 1/0.707 ≈ 1.414",
            "P(Z > 1.414) ≈ 0.0786",
          ],
          answer: "≈ 0.079",
        },
      ],
      tips: ["State 'by CLT' explicitly in working", "n ≥ 30 — smaller for nearly-normal parents"],
      formulas: [{ name: "CLT", formula: "X̄ ≈ N(μ, σ²/n) for large n" }],
      examQuestion: {
        problem: "Service times have μ = 6 min, σ = 3 min (skewed). For 36 customers, P(mean > 7)?",
        solution: [
          "X̄ ≈ N(6, 9/36) = N(6, 0.25); SE = 0.5",
          "Z = (7 − 6)/0.5 = 2",
          "P(Z > 2) ≈ 0.0228",
        ],
        answer: "≈ 0.023",
        marks: 4,
      },
      quiz: [
        { question: "CLT requires:", options: ["Normal parent", "Finite mean & variance", "n < 30", "Discrete parent"], correctAnswer: 1, explanation: "Mild assumptions." },
        { question: "Approximation improves with:", options: ["Smaller n", "Larger n", "Smaller σ", "Smaller μ"], correctAnswer: 1, explanation: "n grows." },
        { question: "X̄ approximately:", options: ["Uniform", "Normal", "Binomial", "Skewed"], correctAnswer: 1, explanation: "By CLT." },
      ],
    },
  ],
  "y12s-ch15-review": [
    {
      title: "Review of Chapter 15 — Sample Mean Distributions",
      explanation:
        "Brings together linear transformations, combinations of independent variables, distribution of X̄ for normal parents, simulation, and the Central Limit Theorem. Foundation for confidence intervals (Chapter 16) and hypothesis testing.",
      keyPoints: [
        "E and Var rules: linearity always; independence for variances to add",
        "X̄ ~ N(μ, σ²/n) exactly when parent is normal",
        "CLT extends approximately to any parent for large n",
        "SE = σ/√n",
      ],
      workedExamples: [
        {
          problem: "X ~ N(80, 144). n = 36. Find P(X̄ < 78).",
          steps: [
            "X̄ ~ N(80, 144/36) = N(80, 4); SE = 2",
            "Z = (78−80)/2 = −1",
            "P(Z < −1) ≈ 0.1587",
          ],
          answer: "≈ 0.1587",
        },
      ],
      tips: ["Sketch the normal curve and shade the required area", "Always state distribution of X̄ before computing"],
      examQuestion: {
        problem: "Independent X ~ N(60, 25), Y ~ N(40, 16). Find P(X − Y > 25).",
        solution: [
          "X − Y ~ N(20, 41)",
          "Z = (25 − 20)/√41 ≈ 5/6.40 ≈ 0.781",
          "P(Z > 0.781) ≈ 0.2174",
        ],
        answer: "≈ 0.217",
        marks: 4,
      },
      quiz: [
        { question: "SE for n=100, σ=20:", options: ["2", "0.2", "20", "200"], correctAnswer: 0, explanation: "20/√100." },
        { question: "Variances add for:", options: ["Any X, Y", "Independent X, Y", "X = Y", "Never"], correctAnswer: 1, explanation: "Independence required." },
        { question: "CLT cutoff often:", options: ["n ≥ 5", "n ≥ 10", "n ≥ 30", "n ≥ 1000"], correctAnswer: 2, explanation: "Standard threshold." },
      ],
    },
  ],
};
