import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 14: The Binomial Distribution

export const year12MethodsCh14Lessons: TopicLessonsMap = {
  // ─── 14A: Bernoulli Sequences and the Binomial Distribution ────────
  "y12m-ch14-14a-bernoulli": [
    {
      title: "Bernoulli Sequences and the Binomial Distribution",
      explanation:
        "A BERNOULLI TRIAL is a single experiment with exactly two outcomes — usually labelled 'success' (probability p) and 'failure' (probability q = 1 − p).\n\nA BERNOULLI SEQUENCE is n independent, identical Bernoulli trials. The four conditions for a binomial setting are:\n  (i) Fixed number of trials n.\n  (ii) Two possible outcomes per trial.\n  (iii) Constant probability of success p.\n  (iv) Trials are independent.\n\nLet X = number of successes in n trials. Then X has the BINOMIAL DISTRIBUTION:\n  X ~ Bi(n, p),\nwith probability function\n  P(X = x) = C(n, x) · p^x · (1 − p)^(n − x), x = 0, 1, …, n,\nwhere C(n, x) = n!/[x!(n−x)!] is the binomial coefficient.\n\nThe term C(n, x) counts the number of ways to choose which x of the n trials are successes; p^x · (1−p)^(n−x) is the probability of any one specific sequence with x successes.\n\nCAS USE: command syntax such as binomPdf(n, p, x) and binomCdf(n, p, lower, upper) computes single and cumulative probabilities directly.",
      keyPoints: [
        "Four conditions: fixed n, two outcomes, constant p, independent trials",
        "X ~ Bi(n, p)",
        "P(X = x) = C(n,x) p^x (1−p)^(n−x)",
        "Use binomPdf for single probability, binomCdf for cumulative",
      ],
      workedExamples: [
        {
          problem:
            "A multiple-choice quiz has 5 questions, each with 4 options. A student guesses every question. Find P(exactly 2 correct).",
          steps: [
            "X ~ Bi(5, 0.25)",
            "P(X = 2) = C(5, 2)(0.25)²(0.75)³",
            "= 10 · 0.0625 · 0.421875",
            "= 0.2637 (4 d.p.)",
          ],
          answer: "P(X = 2) ≈ 0.2637.",
        },
        {
          problem:
            "A fair die is rolled 8 times. Find P(at least 2 sixes).",
          steps: [
            "X ~ Bi(8, 1/6)",
            "P(X ≥ 2) = 1 − P(X = 0) − P(X = 1)",
            "P(X = 0) = (5/6)^8 ≈ 0.2326",
            "P(X = 1) = 8(1/6)(5/6)^7 ≈ 0.3721",
            "P(X ≥ 2) ≈ 1 − 0.2326 − 0.3721 = 0.3953",
          ],
          answer: "≈ 0.3953.",
        },
      ],
      tips: [
        "'At least one' is best handled via 1 − P(X = 0)",
        "Verify all four conditions before applying the binomial formula",
        "Always state X ~ Bi(n, p) before computing",
      ],
      definitions: [
        { term: "Bernoulli trial", meaning: "Single trial with two outcomes." },
        { term: "Binomial coefficient", meaning: "C(n, x) = n!/(x!(n−x)!) — counts the arrangements." },
      ],
      formulas: [
        { name: "Binomial probability", formula: "P(X = x) = C(n, x) p^x (1−p)^(n−x)" },
        { name: "At least one", formula: "P(X ≥ 1) = 1 − (1−p)^n" },
      ],
      examQuestion: {
        problem:
          "A factory produces items 92% of which are non-defective. In a sample of 10, find P(at most 1 defective).",
        solution: [
          "X = number defective ~ Bi(10, 0.08)",
          "P(X ≤ 1) = (0.92)^10 + 10(0.08)(0.92)^9",
          "≈ 0.4344 + 0.3777 = 0.8121",
        ],
        answer: "≈ 0.8121.",
        marks: 3,
      },
      commonErrors: [
        "Confusing p and q",
        "Omitting C(n, x)",
        "Applying binomial when trials are not independent",
      ],
      summary: [
        "Identify the trial, success, n and p",
        "Apply formula or CAS",
        "Use complement for 'at least' problems",
      ],
      practice: [
        { question: "X ~ Bi(6, 0.5). P(X = 3)?", answer: "20·0.5^6 = 0.3125" },
      ],
      quiz: [
        {
          question: "X ~ Bi(4, 0.5). P(X = 2) =",
          options: ["3/8", "1/2", "1/4", "5/8"],
          correctAnswer: 0,
          explanation: "C(4,2)(0.5)^4 = 6/16 = 3/8.",
        },
        {
          question: "Binomial requires:",
          options: ["Continuous outcomes", "Independent trials", "Variable p", "Unknown n"],
          correctAnswer: 1,
          explanation: "Independence is one of the four conditions.",
        },
      ],
    },
  ],

  // ─── 14B: Graph, Expectation and Variance ─────────────────────────
  "y12m-ch14-14b-graph-mean-var": [
    {
      title: "The Graph, Expectation and Variance of a Binomial Distribution",
      explanation:
        "For X ~ Bi(n, p) the expected value (mean), variance and standard deviation are:\n  E(X) = np\n  Var(X) = np(1 − p) = npq\n  sd(X) = √(npq)\n\nSHAPE OF THE DISTRIBUTION:\n  • If p = 0.5, the distribution is SYMMETRIC about n/2.\n  • If p < 0.5, the distribution is SKEWED RIGHT (positive skew).\n  • If p > 0.5, the distribution is SKEWED LEFT (negative skew).\n  • As n increases, the histogram approaches a bell shape — this is the basis for the normal approximation in Chapter 16.\n\nThe MODE (most likely value) is approximately ⌊(n + 1)p⌋. It is always within 1 of the mean.\n\nCAS lets you plot the probability histogram quickly: tabulate P(X = x) for x = 0, …, n then graph as a bar chart.",
      keyPoints: [
        "Mean = np",
        "Variance = npq",
        "sd = √(npq)",
        "Symmetric when p = 0.5; skewed otherwise",
      ],
      workedExamples: [
        {
          problem:
            "X ~ Bi(20, 0.3). Find E(X), Var(X), sd(X) and the mode.",
          steps: [
            "E(X) = 20(0.3) = 6",
            "Var(X) = 20(0.3)(0.7) = 4.2",
            "sd(X) = √4.2 ≈ 2.05",
            "Mode ≈ ⌊21·0.3⌋ = ⌊6.3⌋ = 6",
          ],
          answer: "E = 6, Var = 4.2, sd ≈ 2.05, mode = 6.",
        },
        {
          problem: "Find n if X ~ Bi(n, 0.4) has variance 9.6.",
          steps: [
            "n(0.4)(0.6) = 9.6",
            "0.24 n = 9.6 ⇒ n = 40",
          ],
          answer: "n = 40.",
        },
      ],
      tips: [
        "Always quote the formula μ = np before computing",
        "If asked for shape, compute and compare to 0.5",
      ],
      formulas: [
        { name: "Binomial mean", formula: "E(X) = np" },
        { name: "Binomial variance", formula: "Var(X) = np(1 − p)" },
      ],
      examQuestion: {
        problem:
          "An archer hits the target on 80% of shots. In 25 shots, find the expected number and standard deviation of hits.",
        solution: [
          "X ~ Bi(25, 0.8)",
          "E(X) = 20",
          "Var(X) = 25(0.8)(0.2) = 4 ⇒ sd = 2",
        ],
        answer: "E(X) = 20; sd = 2.",
        marks: 2,
      },
      commonErrors: [
        "Computing Var as np instead of npq",
        "Forgetting to take the square root for sd",
      ],
      summary: [
        "Mean and variance of Bi(n, p) are np and npq",
        "Shape depends on p relative to 0.5",
      ],
      practice: [
        { question: "X ~ Bi(50, 0.1). Mean and sd?", answer: "5 and √4.5 ≈ 2.12" },
      ],
      quiz: [
        {
          question: "Var(X) for Bi(10, 0.5) is:",
          options: ["5", "2.5", "1.58", "10"],
          correctAnswer: 1,
          explanation: "10·0.5·0.5 = 2.5.",
        },
        {
          question: "The distribution Bi(n, 0.5) is:",
          options: ["Skewed right", "Skewed left", "Symmetric", "Uniform"],
          correctAnswer: 2,
          explanation: "p = 0.5 gives symmetry about n/2.",
        },
      ],
    },
  ],

  // ─── 14C: Finding the Sample Size ─────────────────────────────────
  "y12m-ch14-14c-sample-size": [
    {
      title: "Finding the Sample Size",
      explanation:
        "A common Exam 2 task is: find the smallest n such that a probability statement is satisfied. For example, 'find the smallest n so that P(X ≥ 1) > 0.99' where X ~ Bi(n, p).\n\nGENERAL APPROACH:\n  1. Translate the condition into an inequality involving (1 − p)^n or a binomial cumulative.\n  2. Solve algebraically using logarithms when only (1 − p)^n is involved.\n  3. Otherwise, evaluate the cumulative function on CAS for successive values of n until the condition first holds.\n  4. Round n UP to the next integer because n must be a whole number.\n\nLOG SOLVE TEMPLATE:\n  P(X ≥ 1) > 0.99 ⇔ 1 − (1 − p)^n > 0.99 ⇔ (1 − p)^n < 0.01\n  ⇒ n · ln(1 − p) < ln(0.01)\n  ⇒ n > ln(0.01) / ln(1 − p) (inequality flips because ln(1−p) < 0)",
      keyPoints: [
        "Translate condition into inequality",
        "Use logs when (1−p)^n is the only term",
        "Use CAS for general binomial cumulative inequalities",
        "Always round n UP",
      ],
      workedExamples: [
        {
          problem:
            "A drug is effective with probability 0.6 per patient. What is the smallest number n of patients to give P(at least one success) > 0.999?",
          steps: [
            "Failure each trial: 0.4",
            "1 − (0.4)^n > 0.999 ⇒ (0.4)^n < 0.001",
            "n > ln(0.001)/ln(0.4) = −6.908/−0.916 ≈ 7.54",
            "Smallest integer n = 8",
          ],
          answer: "n = 8.",
        },
        {
          problem:
            "A coin lands heads with p = 0.4. Find smallest n so P(X ≥ 5) > 0.5 where X ~ Bi(n, 0.4).",
          steps: [
            "Use CAS: try n = 12 ⇒ P(X ≥ 5) ≈ 0.438",
            "n = 13 ⇒ P(X ≥ 5) ≈ 0.516",
            "Smallest n = 13",
          ],
          answer: "n = 13.",
        },
      ],
      tips: [
        "When inequality involves only (1 − p)^n, logs give exact answers",
        "Otherwise step CAS up by 1",
      ],
      formulas: [
        { name: "At least one", formula: "P(X ≥ 1) = 1 − (1 − p)^n" },
      ],
      examQuestion: {
        problem:
          "A student answers a True/False question correctly with probability 0.7. Find the minimum number of questions so that the probability of getting at least one wrong exceeds 0.95.",
        solution: [
          "P(all correct) = 0.7^n",
          "P(at least one wrong) = 1 − 0.7^n > 0.95 ⇒ 0.7^n < 0.05",
          "n > ln(0.05)/ln(0.7) ≈ −2.996/−0.357 ≈ 8.40",
          "n = 9",
        ],
        answer: "n = 9.",
        marks: 3,
      },
      commonErrors: [
        "Not flipping the inequality when dividing by ln(1 − p) < 0",
        "Rounding n down",
      ],
      summary: [
        "Set up the inequality precisely",
        "Solve via logs or CAS step-up",
        "Always round up",
      ],
      practice: [
        { question: "p = 0.2, find n so P(X ≥ 1) > 0.9.", answer: "11" },
      ],
      quiz: [
        {
          question: "P(X ≥ 1) > 0.95 for p = 0.5 needs n at least:",
          options: ["3", "4", "5", "6"],
          correctAnswer: 2,
          explanation: "0.5^5 = 0.03125 < 0.05.",
        },
        {
          question: "When solving (0.8)^n < 0.1, the inequality:",
          options: ["Stays the same after taking ln", "Flips after dividing by ln 0.8", "Becomes equality", "Has no solution"],
          correctAnswer: 1,
          explanation: "ln 0.8 < 0 so dividing flips the inequality.",
        },
      ],
    },
  ],

  // ─── 14D: Proofs for E(X) and Var(X) ──────────────────────────────
  "y12m-ch14-14d-proofs": [
    {
      title: "Proofs of Expectation and Variance for the Binomial Distribution",
      explanation:
        "We prove E(X) = np and Var(X) = np(1 − p) for X ~ Bi(n, p).\n\nPROOF OF MEAN:\n  E(X) = Σ_{x=0}^{n} x · C(n, x) p^x q^(n−x), with q = 1 − p\n  The x = 0 term is zero, so start at x = 1.\n  Use the identity x · C(n, x) = n · C(n − 1, x − 1).\n  E(X) = Σ_{x=1}^{n} n · C(n − 1, x − 1) p^x q^(n − x)\n       = np · Σ_{x=1}^{n} C(n − 1, x − 1) p^(x − 1) q^(n − x)\n  Let k = x − 1: sum becomes Σ_{k=0}^{n − 1} C(n − 1, k) p^k q^(n − 1 − k) = (p + q)^(n − 1) = 1.\n  Therefore E(X) = np.\n\nPROOF OF VARIANCE:\n  Compute E(X(X − 1)) using the identity x(x − 1)C(n, x) = n(n − 1) · C(n − 2, x − 2).\n  E(X(X − 1)) = n(n − 1) p² · Σ_{k=0}^{n−2} C(n−2, k) p^k q^(n−2−k) = n(n − 1) p²\n  E(X²) = E(X(X − 1)) + E(X) = n(n − 1)p² + np\n  Var(X) = E(X²) − [E(X)]² = n(n − 1)p² + np − n²p² = np − np² = np(1 − p).",
      keyPoints: [
        "Use the identity xC(n,x) = nC(n−1, x−1)",
        "Re-index the sum to recognise (p + q)^(n−1) = 1",
        "For variance, compute E(X(X − 1)) first",
      ],
      workedExamples: [
        {
          problem: "Verify E(X) = np for n = 3, p = 1/2 from first principles.",
          steps: [
            "P(X=0)=1/8, P(X=1)=3/8, P(X=2)=3/8, P(X=3)=1/8",
            "E(X) = 0 + 3/8 + 6/8 + 3/8 = 12/8 = 3/2",
            "np = 3·(1/2) = 3/2 ✓",
          ],
          answer: "Confirmed.",
        },
      ],
      tips: [
        "Memorise the two combinatorial identities used here",
        "These proofs are formally examinable — practise them",
      ],
      definitions: [
        { term: "Binomial coefficient identity", meaning: "x · C(n,x) = n · C(n−1, x−1)." },
      ],
      formulas: [
        { name: "Mean", formula: "E(X) = np" },
        { name: "Variance", formula: "Var(X) = np(1 − p)" },
      ],
      examQuestion: {
        problem:
          "Show that E(X) = np for X ~ Bi(n, p), starting from the definition E(X) = Σ x P(X = x).",
        solution: [
          "Write E(X) = Σ_{x=0}^n x · C(n,x) p^x q^(n−x)",
          "x=0 term vanishes; for x ≥ 1 use x C(n,x) = n C(n−1, x−1)",
          "Factor np: E(X) = np · Σ_{x=1}^n C(n−1, x−1) p^(x−1) q^(n−x)",
          "Substitute k = x−1: sum = Σ_{k=0}^{n−1} C(n−1, k) p^k q^(n−1−k) = (p+q)^(n−1) = 1",
          "Therefore E(X) = np",
        ],
        answer: "E(X) = np (proven).",
        marks: 4,
      },
      commonErrors: [
        "Forgetting to factor np before re-indexing",
        "Misapplying the identity x(x−1)C(n,x) for variance",
      ],
      summary: [
        "Two identities reduce the binomial sums to (p+q)^(n−1) and (p+q)^(n−2)",
        "These derivations are clean if set out methodically",
      ],
      practice: [
        { question: "Compute E(X(X−1)) for Bi(4, 0.5).", answer: "3 (since n(n−1)p² = 12·0.25 = 3)" },
      ],
      quiz: [
        {
          question: "The identity used in the mean proof is:",
          options: ["x C(n,x) = (n−1) C(n,x−1)", "x C(n,x) = n C(n−1, x−1)", "C(n,x) = C(n−1,x)", "x! = n!"],
          correctAnswer: 1,
          explanation: "Standard binomial coefficient identity.",
        },
        {
          question: "After re-indexing the mean sum becomes:",
          options: ["np · (p − q)^(n−1)", "np · (p + q)^(n−1)", "n · (p + q)^n", "p^n"],
          correctAnswer: 1,
          explanation: "(p + q)^(n−1) = 1 since p + q = 1.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 14 ──────────────────────────────────────────
  "y12m-ch14-review": [
    {
      title: "Review of Chapter 14 — The Binomial Distribution",
      explanation:
        "Chapter 14 introduced the binomial distribution as the model for counting successes in independent identical trials. You should now be able to:\n  • Recognise when a situation is binomial.\n  • Compute P(X = x), P(X ≤ x) and P(a ≤ X ≤ b) by hand and on CAS.\n  • Apply the formulas E(X) = np and Var(X) = np(1 − p).\n  • Use logs and CAS to solve for n in 'find the smallest sample size' problems.\n  • Reproduce the proofs of mean and variance using binomial-coefficient identities.\n\nThe binomial distribution underpins Chapter 16 (normal approximation) and Chapter 17 (sampling distribution of the proportion). Make sure you can move freely between the binomial formula, technology and contextual interpretation.",
      keyPoints: [
        "Identify and verify binomial conditions",
        "Use formula and technology for probabilities",
        "Apply mean and variance results",
        "Solve for n via logs or CAS",
      ],
      workedExamples: [
        {
          problem:
            "Of voters surveyed, 55% favour a candidate. In a random sample of 12, find: (a) P(exactly 8 favour); (b) P(at most 4); (c) the expected number favouring.",
          steps: [
            "(a) P(X=8) = C(12,8)(0.55)^8(0.45)^4 ≈ 0.1700",
            "(b) Use binomCdf(12, 0.55, 0, 4) ≈ 0.0769",
            "(c) E(X) = 12·0.55 = 6.6",
          ],
          answer: "(a) ≈ 0.1700; (b) ≈ 0.0769; (c) 6.6.",
        },
      ],
      tips: [
        "State X ~ Bi(n, p) at the start of every binomial answer",
        "Use complement for 'at least' wording",
      ],
      formulas: [
        { name: "Binomial probability", formula: "P(X=x) = C(n,x) p^x (1−p)^(n−x)" },
        { name: "Mean and variance", formula: "E(X) = np, Var(X) = np(1 − p)" },
      ],
      examQuestion: {
        problem:
          "A test has 10 multiple-choice questions, each with 5 options. A student guesses every question. Find the probability of passing (at least 5 correct).",
        solution: [
          "X ~ Bi(10, 0.2)",
          "P(X ≥ 5) = 1 − binomCdf(10, 0.2, 0, 4) ≈ 1 − 0.9672 = 0.0328",
        ],
        answer: "≈ 0.0328.",
        marks: 2,
      },
      commonErrors: [
        "Failing to verify independence",
        "Ignoring rounding instructions in Exam 2",
      ],
      summary: [
        "Master the formula and technology",
        "Know the proofs of mean and variance",
        "Be able to solve for n",
      ],
      practice: [
        { question: "X ~ Bi(15, 0.3). Mean and variance?", answer: "4.5 and 3.15" },
      ],
      quiz: [
        {
          question: "X ~ Bi(20, 0.1). E(X) =",
          options: ["1", "2", "10", "20"],
          correctAnswer: 1,
          explanation: "20·0.1 = 2.",
        },
      ],
    },
  ],
};
