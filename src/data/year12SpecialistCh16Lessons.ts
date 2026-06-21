import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 16: Confidence Intervals and Hypothesis Tests for the Mean

export const year12SpecialistCh16Lessons: TopicLessonsMap = {
  "y12s-ch16-16a-ci-mean": [
    {
      title: "Confidence Intervals for the Population Mean",
      explanation:
        "Given a sample of size n with mean x̄ from a population with known σ, an approximate (1 − α) confidence interval for μ is:\n  x̄ ± z*·(σ/√n)\n\nwhere z* is the critical value of the standard normal:\n  • 90%: z* = 1.645\n  • 95%: z* = 1.960\n  • 99%: z* = 2.576\n\nInterpretation: in repeated sampling, (1 − α)% of such intervals would contain the true μ.",
      keyPoints: [
        "Centre at x̄, half-width = z*·σ/√n",
        "Wider interval ⇒ greater confidence",
        "Larger n ⇒ narrower interval",
      ],
      workedExamples: [
        {
          problem: "n = 25, x̄ = 50, σ = 10. Construct 95% CI for μ.",
          steps: [
            "SE = 10/√25 = 2",
            "Margin = 1.96·2 = 3.92",
            "CI: (46.08, 53.92)",
          ],
          answer: "(46.08, 53.92)",
        },
      ],
      tips: ["Memorise z* = 1.96 for 95% CI", "Use σ/√n, NOT σ/n"],
      formulas: [{ name: "CI for μ", formula: "x̄ ± z*·σ/√n" }],
      examQuestion: {
        problem: "A sample of 100 light bulbs has mean lifespan 1200 h, σ = 80 h. Find 99% CI for μ.",
        solution: [
          "SE = 80/10 = 8",
          "Margin = 2.576·8 ≈ 20.61",
          "CI ≈ (1179.4, 1220.6)",
        ],
        answer: "(1179.4, 1220.6) hours",
        marks: 3,
      },
      quiz: [
        { question: "z* for 95% CI:", options: ["1.645", "1.96", "2.33", "2.576"], correctAnswer: 1, explanation: "Standard." },
        { question: "Quadrupling n changes margin by:", options: ["×4", "×2", "÷2", "÷4"], correctAnswer: 2, explanation: "√4 = 2." },
        { question: "Higher confidence ⇒", options: ["Narrower CI", "Wider CI", "Same", "Smaller σ"], correctAnswer: 1, explanation: "Larger z*." },
      ],
    },
  ],
  "y12s-ch16-16b-hypothesis": [
    {
      title: "Hypothesis Testing for the Mean",
      explanation:
        "Five-step framework:\n  1. State hypotheses: H₀ (status quo) and H₁ (alternative)\n  2. Choose significance level α (e.g., 0.05)\n  3. Compute test statistic z = (x̄ − μ₀)/(σ/√n)\n  4. Find p-value (probability of seeing data this extreme under H₀)\n  5. Decision: reject H₀ if p < α; otherwise do not reject",
      keyPoints: [
        "H₀ contains '=' (the value to be challenged)",
        "p-value depends on the alternative direction",
        "Conclusion ALWAYS in terms of evidence, never 'proof'",
      ],
      workedExamples: [
        {
          problem: "Test H₀: μ = 100 vs H₁: μ ≠ 100. n = 36, x̄ = 103, σ = 12, α = 0.05.",
          steps: [
            "z = (103 − 100)/(12/6) = 1.5",
            "Two-tail p = 2·P(Z > 1.5) ≈ 2·0.0668 = 0.1336",
            "p > 0.05 ⇒ do not reject H₀",
          ],
          answer: "Insufficient evidence against μ = 100",
        },
      ],
      tips: ["State conclusion in CONTEXT", "Don't say 'accept H₀' — say 'do not reject H₀'"],
      formulas: [{ name: "z-test", formula: "z = (x̄ − μ₀)/(σ/√n)" }],
      examQuestion: {
        problem: "H₀: μ = 50, H₁: μ > 50. n = 64, x̄ = 51.5, σ = 8, α = 0.05.",
        solution: [
          "z = (51.5 − 50)/(8/8) = 1.5",
          "p = P(Z > 1.5) ≈ 0.0668",
          "p > 0.05 ⇒ do not reject H₀",
        ],
        answer: "Do not reject H₀; insufficient evidence μ > 50",
        marks: 4,
      },
      quiz: [
        { question: "H₀ contains:", options: ["<", ">", "=", "≠"], correctAnswer: 2, explanation: "Status quo equality." },
        { question: "Reject H₀ when:", options: ["p > α", "p < α", "z = 0", "x̄ = μ₀"], correctAnswer: 1, explanation: "Significant evidence." },
        { question: "z-test SE uses:", options: ["s", "σ", "σ/n", "σ/√n"], correctAnswer: 3, explanation: "Standard error." },
      ],
    },
  ],
  "y12s-ch16-16c-one-two-tail": [
    {
      title: "One-Tail and Two-Tail Tests",
      explanation:
        "Choice based on H₁:\n  • H₁: μ > μ₀ ⇒ right-tail; p = P(Z > z_obs)\n  • H₁: μ < μ₀ ⇒ left-tail; p = P(Z < z_obs)\n  • H₁: μ ≠ μ₀ ⇒ two-tail; p = 2·P(Z > |z_obs|)\n\nCritical values for α = 0.05:\n  • One-tail: ±1.645\n  • Two-tail: ±1.96",
      keyPoints: [
        "Direction of H₁ determines tail",
        "Two-tail p-value DOUBLES the one-tail",
        "State direction explicitly in conclusion",
      ],
      workedExamples: [
        {
          problem: "n = 49, x̄ = 102, σ = 14, H₀: μ = 100, H₁: μ > 100, α = 0.05.",
          steps: [
            "z = (102 − 100)/(14/7) = 1",
            "Right-tail p = P(Z > 1) ≈ 0.1587",
            "p > 0.05 ⇒ do not reject H₀",
          ],
          answer: "Insufficient evidence",
        },
      ],
      tips: ["Pick tail BEFORE looking at data (avoid bias)", "Match z_critical to α and tail"],
      examQuestion: {
        problem: "n = 100, x̄ = 25.5, σ = 4, H₀: μ = 25, H₁: μ ≠ 25, α = 0.05.",
        solution: [
          "z = 0.5/(4/10) = 1.25",
          "Two-tail p = 2·P(Z > 1.25) ≈ 0.211",
          "p > 0.05 ⇒ do not reject H₀",
        ],
        answer: "Do not reject H₀",
        marks: 3,
      },
      quiz: [
        { question: "H₁: μ < μ₀ uses:", options: ["Right-tail", "Left-tail", "Two-tail", "Both"], correctAnswer: 1, explanation: "Direction matters." },
        { question: "Two-tail p =", options: ["P(Z>z)", "2·P(Z>|z|)", "P(Z<z)", "1−p"], correctAnswer: 1, explanation: "Both extremes." },
        { question: "α=0.05 two-tail critical:", options: ["±1.645", "±1.96", "±2.33", "±2.576"], correctAnswer: 1, explanation: "Standard." },
      ],
    },
  ],
  "y12s-ch16-16d-two-tail-revisited": [
    {
      title: "Two-Tail Tests Revisited",
      explanation:
        "Two-tail tests detect departure from μ₀ in EITHER direction. Equivalent to checking whether μ₀ lies inside or outside the (1 − α) CI:\n  • If μ₀ ∈ CI ⇒ do not reject H₀\n  • If μ₀ ∉ CI ⇒ reject H₀\n\nThis duality lets you switch between hypothesis tests and confidence intervals at the same level α.",
      keyPoints: [
        "CI–test duality at the same α",
        "Two-tail more conservative than one-tail",
        "Symmetric rejection regions about μ₀",
      ],
      workedExamples: [
        {
          problem: "95% CI is (48.1, 53.9). Test H₀: μ = 50 vs H₁: μ ≠ 50 at 5%.",
          steps: ["50 ∈ (48.1, 53.9) ⇒ do not reject H₀"],
          answer: "Do not reject H₀ at α = 0.05",
        },
      ],
      tips: ["Use CI for fast two-tail conclusions", "The duality only holds for the SAME α and σ"],
      examQuestion: {
        problem: "Sample: n = 64, x̄ = 80, σ = 16. Test H₀: μ = 75 vs H₁: μ ≠ 75 at α = 0.01.",
        solution: [
          "SE = 16/8 = 2",
          "z = (80 − 75)/2 = 2.5",
          "p = 2·P(Z > 2.5) ≈ 0.0124",
          "p > 0.01 ⇒ do not reject H₀ at 1% (would reject at 5%)",
        ],
        answer: "Do not reject at 1%",
        marks: 4,
      },
      quiz: [
        { question: "CI–test duality requires:", options: ["Same μ₀", "Same α", "Same n", "Both 2 and 3"], correctAnswer: 1, explanation: "Same confidence level." },
        { question: "If μ₀ outside 95% CI:", options: ["Accept H₀", "Reject H₀ at 5%", "Cannot decide", "Use 99% CI"], correctAnswer: 1, explanation: "Significant difference." },
        { question: "Two-tail uses:", options: ["One critical value", "Two critical values", "No critical values", "Confidence only"], correctAnswer: 1, explanation: "Symmetric ±z*." },
      ],
    },
  ],
  "y12s-ch16-16e-errors": [
    {
      title: "Errors in Hypothesis Testing",
      explanation:
        "Two types of error:\n  • Type I: Rejecting H₀ when it is TRUE; P(Type I) = α (significance level)\n  • Type II: Failing to reject H₀ when it is FALSE; P(Type II) = β\n  • Power = 1 − β = P(reject H₀ | H₁ true)\n\nTrade-off: lowering α increases β. Increasing n reduces both.",
      keyPoints: [
        "α = significance = P(Type I)",
        "Power = P(correctly rejecting H₀)",
        "Increase sample size to reduce both errors",
      ],
      workedExamples: [
        {
          problem: "Test at α = 0.05 means probability of Type I error is …?",
          steps: ["By definition, P(Type I) = α = 0.05"],
          answer: "0.05",
        },
      ],
      tips: ["Memorise: Type I = false positive; Type II = false negative", "Power calculations require a SPECIFIC value of μ under H₁"],
      formulas: [{ name: "Power", formula: "Power = 1 − β" }],
      examQuestion: {
        problem: "H₀: μ = 100 vs H₁: μ = 105, n = 25, σ = 10, α = 0.05 (one-tail). Find power if true μ = 105.",
        solution: [
          "Reject H₀ when x̄ > 100 + 1.645·(10/5) = 103.29",
          "Under H₁ (μ = 105): X̄ ~ N(105, 4)",
          "P(X̄ > 103.29) = P(Z > (103.29−105)/2) = P(Z > −0.855) ≈ 0.804",
        ],
        answer: "Power ≈ 0.80",
        marks: 4,
      },
      quiz: [
        { question: "Type I error:", options: ["Reject true H₀", "Reject false H₀", "Accept false H₀", "Accept true H₀"], correctAnswer: 0, explanation: "False positive." },
        { question: "Power =", options: ["α", "β", "1 − β", "1 − α"], correctAnswer: 2, explanation: "Detect real effects." },
        { question: "Larger n affects errors by:", options: ["Reducing both", "Increasing both", "No effect", "Reducing α only"], correctAnswer: 0, explanation: "Tightens distribution." },
      ],
    },
  ],
  "y12s-ch16-review": [
    {
      title: "Review of Chapter 16 — Inference for the Mean",
      explanation:
        "Brings together confidence intervals, one- and two-tail z-tests, the CI–test duality, and Type I/II errors. Critical for Exam 2 extended-response inference problems.",
      keyPoints: [
        "CI: x̄ ± z*·σ/√n",
        "z-test: z = (x̄ − μ₀)/(σ/√n)",
        "Match tail to H₁ direction",
        "Decide based on p vs α (or z vs critical)",
      ],
      workedExamples: [
        {
          problem: "n = 50, x̄ = 22, σ = 5. Test H₀: μ = 20 vs H₁: μ > 20 at α = 0.01.",
          steps: [
            "SE = 5/√50 ≈ 0.707",
            "z = 2/0.707 ≈ 2.828",
            "p = P(Z > 2.83) ≈ 0.0023",
            "p < 0.01 ⇒ reject H₀; strong evidence μ > 20",
          ],
          answer: "Reject H₀; evidence μ > 20",
        },
      ],
      tips: ["State conclusion in context", "Check decision against both p-value and critical value"],
      examQuestion: {
        problem: "Sample n = 36 from N(μ, 36) gives x̄ = 21.5. Find 90% CI; then test H₀: μ = 20 vs H₁: μ ≠ 20 at α = 0.10.",
        solution: [
          "SE = 6/6 = 1",
          "90% CI = 21.5 ± 1.645·1 = (19.86, 23.14)",
          "20 ∈ CI ⇒ do not reject H₀ at α = 0.10",
        ],
        answer: "CI (19.86, 23.14); do not reject H₀",
        marks: 4,
      },
      quiz: [
        { question: "p < α leads to:", options: ["Accept H₀", "Reject H₀", "Increase n", "Change H₁"], correctAnswer: 1, explanation: "Significant." },
        { question: "Two-tail critical at α=0.10:", options: ["±1.645", "±1.282", "±1.96", "±2.33"], correctAnswer: 0, explanation: "α/2 = 0.05 ⇒ 1.645." },
        { question: "Power increases when:", options: ["α decreases", "n increases", "σ increases", "μ closer to μ₀"], correctAnswer: 1, explanation: "Tighter sampling distribution." },
      ],
    },
  ],
};
