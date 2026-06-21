import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 17: Revision of Inference (Ch 15–16)

export const year12SpecialistCh17Lessons: TopicLessonsMap = {
  "y12s-ch17-17a-tech-free": [
    {
      title: "Technology-Free Revision (Inference)",
      explanation:
        "Tech-free inference focuses on:\n  • Compute SE = σ/√n exactly\n  • Apply standard z* values (1.645, 1.96, 2.576)\n  • Compute z-statistic and compare to critical values\n  • State conclusion in context",
      keyPoints: [
        "Exact SE: σ/√n with surds where needed",
        "Memorise common z* values",
        "State decision and contextual interpretation",
      ],
      workedExamples: [
        {
          problem: "n = 16, σ = 8, x̄ = 52, μ₀ = 50. Compute z exactly.",
          steps: ["SE = 8/4 = 2", "z = (52 − 50)/2 = 1"],
          answer: "z = 1",
        },
      ],
      tips: ["No CAS; use exact arithmetic", "Sketch the standard normal and shade the rejection region"],
      examQuestion: {
        problem: "Construct 95% CI for μ given x̄ = 60, σ = 12, n = 36 (no calculator).",
        solution: [
          "SE = 12/6 = 2",
          "Margin = 1.96·2 = 3.92",
          "CI = (56.08, 63.92)",
        ],
        answer: "(56.08, 63.92)",
        marks: 3,
      },
      quiz: [
        { question: "z* for 99% CI:", options: ["1.645", "1.96", "2.576", "3"], correctAnswer: 2, explanation: "Standard." },
        { question: "SE for n=64, σ=8:", options: ["1", "0.5", "8/√64", "Both 1 and 3"], correctAnswer: 3, explanation: "Equal." },
        { question: "Tech-free implies:", options: ["Decimals", "Exact form", "CAS allowed", "Estimation only"], correctAnswer: 1, explanation: "Exact arithmetic." },
      ],
    },
  ],
  "y12s-ch17-17b-multiple-choice": [
    {
      title: "Multiple-Choice Strategy (Inference)",
      explanation:
        "MCQ tactics for inference:\n  • Eliminate options with wrong CI form (must be x̄ ± z*·SE)\n  • Check direction of tail matches H₁\n  • Reject options that confuse SE with σ\n  • Power > α whenever H₁ is true (sanity check)",
      keyPoints: [
        "CI is symmetric about x̄",
        "Width depends on z* and SE",
        "p-value never exceeds 1",
      ],
      workedExamples: [
        {
          problem: "Which is the 95% CI for μ given x̄ = 30, σ = 4, n = 16? A) (28, 32), B) (29, 31), C) (28.04, 31.96), D) (26.08, 33.92).",
          steps: ["SE = 1; margin = 1.96", "CI = (28.04, 31.96) = C"],
          answer: "C",
        },
      ],
      tips: ["Compute SE first", "Match z* to confidence level"],
      examQuestion: {
        problem: "n = 25, x̄ = 100, σ = 10, H₀: μ = 95, H₁: μ > 95. p-value? A) 0.0062, B) 0.025, C) 0.05, D) 0.5.",
        solution: ["z = 5/2 = 2.5", "p = P(Z > 2.5) ≈ 0.0062"],
        answer: "A",
        marks: 1,
      },
      quiz: [
        { question: "CI symmetric about:", options: ["μ₀", "x̄", "σ", "0"], correctAnswer: 1, explanation: "Sample mean centred." },
        { question: "p-value range:", options: ["[0, 1]", "[0, ∞)", "[−1, 1]", "[α, 1]"], correctAnswer: 0, explanation: "Probability." },
        { question: "Eliminate options that:", options: ["Are too small", "Confuse σ with SE", "Use π", "Use surds"], correctAnswer: 1, explanation: "Common trap." },
      ],
    },
  ],
  "y12s-ch17-17c-extended-response": [
    {
      title: "Extended-Response Strategy (Inference)",
      explanation:
        "Inference extended-response often features:\n  • (a) State hypotheses\n  • (b) Construct CI or compute test statistic\n  • (c) Decision and conclusion in context\n  • (d) Discuss errors or recommend sample size\n\nShow ALL working — including SE calculations and rejection regions.",
      keyPoints: [
        "Define ALL symbols (μ, σ, n, x̄)",
        "Distinguish CI from hypothesis test even if linked",
        "Address Type I/II errors when asked",
      ],
      workedExamples: [
        {
          problem: "Sample n = 81 from N(μ, 81) gives x̄ = 52. Test H₀: μ = 50 vs H₁: μ > 50, α = 0.05.",
          steps: [
            "SE = 9/9 = 1",
            "z = (52 − 50)/1 = 2",
            "p = P(Z > 2) ≈ 0.0228",
            "p < 0.05 ⇒ reject H₀; evidence μ > 50",
          ],
          answer: "Reject H₀ at 5% level",
        },
      ],
      tips: ["Always interpret p-value in plain language", "Mention assumption: σ known and population (or large n via CLT)"],
      examQuestion: {
        problem: "What sample size n is needed so that the 95% CI for μ has half-width ≤ 0.5 when σ = 4?",
        solution: [
          "1.96·(4/√n) ≤ 0.5",
          "4/√n ≤ 0.255",
          "√n ≥ 15.68 ⇒ n ≥ 246",
        ],
        answer: "n ≥ 246",
        marks: 3,
      },
      quiz: [
        { question: "Half-width of CI =", options: ["σ", "z*·σ", "z*·σ/√n", "σ/n"], correctAnswer: 2, explanation: "Margin of error." },
        { question: "Halve margin ⇒", options: ["Halve n", "Quadruple n", "Double n", "Same n"], correctAnswer: 1, explanation: "n grows like 1/m²." },
        { question: "Conclusion should:", options: ["Quote z only", "Be in context", "Be silent", "Use formulas"], correctAnswer: 1, explanation: "Plain language." },
      ],
    },
  ],
  "y12s-ch17-17d-pseudocode": [
    {
      title: "Algorithms and Pseudocode (Inference)",
      explanation:
        "Common inference algorithms:\n  • Computing test statistics from sample data\n  • Constructing CIs across multiple samples\n  • Simulating Type I/II error rates\n\nExample (CI simulation pseudocode):\n  count ← 0\n  for j from 1 to M do\n    draw sample of n from N(μ, σ²)\n    compute CI = x̄ ± 1.96·σ/√n\n    if μ ∈ CI then count ← count + 1\n  return count/M",
      keyPoints: [
        "Trace pseudocode by tracking variables",
        "Coverage rate ≈ 0.95 for 95% CI as M grows",
        "Loops simulate repeated sampling",
      ],
      workedExamples: [
        {
          problem: "Pseudocode produces 950 successes out of 1000 trials. What does 950/1000 estimate?",
          steps: ["The coverage probability of the 95% CI", "Should be ≈ 0.95"],
          answer: "≈ 0.95 (true coverage rate)",
        },
      ],
      tips: ["Simulation results converge to theoretical α and coverage", "Use seeded randomness for reproducibility"],
      examQuestion: {
        problem: "Modify pseudocode to estimate Type I error rate of a one-tail test H₀: μ = 0 vs H₁: μ > 0 at α = 0.05.",
        solution: [
          "count ← 0",
          "for j from 1 to M:",
          "  draw n samples from N(0, σ²)  (under H₀)",
          "  compute z = x̄/(σ/√n)",
          "  if z > 1.645 then count ← count + 1",
          "return count/M ≈ 0.05",
        ],
        answer: "Empirical Type I rate ≈ α",
        marks: 4,
      },
      quiz: [
        { question: "Coverage rate of 95% CI ≈", options: ["0.05", "0.50", "0.95", "1.00"], correctAnswer: 2, explanation: "By construction." },
        { question: "Type I rate ≈", options: ["α", "β", "1−α", "Power"], correctAnswer: 0, explanation: "Definition." },
        { question: "Larger M ⇒", options: ["More noise", "Smoother estimate", "No change", "Bias"], correctAnswer: 1, explanation: "Law of large numbers." },
      ],
    },
  ],
};
