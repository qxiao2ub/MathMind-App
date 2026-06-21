import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 17: Sampling and Estimation

export const year12MethodsCh17Lessons: TopicLessonsMap = {
  // ─── 17A: Populations and Samples ──────────────────────────────────
  "y12m-ch17-17a-populations-samples": [
    {
      title: "Populations and Samples",
      explanation:
        "A POPULATION is the entire group of interest in a study; a SAMPLE is a subset drawn from the population in order to make inferences about it.\n\nA POPULATION PROPORTION (denoted p) is the proportion of all population members possessing the characteristic of interest. A SAMPLE PROPORTION (denoted P̂ or p̂) is the proportion in the sample with that characteristic:\n  P̂ = X / n,\nwhere X = number with the characteristic and n = sample size.\n\nKEY DEFINITIONS:\n  • PARAMETER — a fixed but usually unknown number describing the population (e.g. p, μ).\n  • STATISTIC — a number computed from a sample (e.g. P̂, sample mean).\n\nA SIMPLE RANDOM SAMPLE of size n is one in which every possible sample of size n has equal probability of being chosen. This is the assumption underlying all the binomial and normal sampling theory in Chapter 17.\n\nSAMPLING WITH AND WITHOUT REPLACEMENT:\n  • With replacement: trials are independent, the binomial model applies exactly.\n  • Without replacement: trials are NOT independent, but if the sample is small relative to the population (n ≤ 10% of N) the binomial is still a good approximation.",
      keyPoints: [
        "Population = whole group; sample = chosen subset",
        "Parameter (population) vs statistic (sample)",
        "Random sample assumption underlies the theory",
        "Sample proportion P̂ = X/n",
      ],
      workedExamples: [
        {
          problem:
            "In a school of 1500 students, 60% support a new uniform. A sample of 50 is drawn. Identify the population proportion and the sample proportion (in symbols).",
          steps: [
            "Population proportion p = 0.6",
            "Sample proportion P̂ depends on the random outcome of the survey",
            "Approximate P̂ ≈ p = 0.6 on average",
          ],
          answer: "Parameter p = 0.6; statistic P̂ = X/50.",
        },
      ],
      tips: [
        "Use capital letters for random variables (P̂); lower case for parameters (p)",
        "State the sampling assumption (independence) explicitly",
      ],
      definitions: [
        { term: "Parameter", meaning: "Fixed numerical descriptor of a population." },
        { term: "Statistic", meaning: "Numerical descriptor computed from a sample." },
        { term: "Random sample", meaning: "Sample chosen so every member has equal selection probability." },
      ],
      formulas: [
        { name: "Sample proportion", formula: "P̂ = X/n" },
      ],
      examQuestion: {
        problem:
          "Out of 200 voters surveyed, 124 support a candidate. State the sample size, the sample proportion and explain why p remains unknown.",
        solution: [
          "n = 200; X = 124",
          "P̂ = 124/200 = 0.62",
          "p is the proportion in the entire voting population, which we have not measured directly",
        ],
        answer: "n = 200, P̂ = 0.62, p unknown.",
        marks: 2,
      },
      commonErrors: [
        "Confusing parameter and statistic",
        "Forgetting independence assumption",
      ],
      summary: [
        "Distinguish carefully between population and sample quantities",
      ],
      practice: [
        { question: "If 80 of 320 sampled have feature A, find P̂.", answer: "0.25" },
      ],
      quiz: [
        {
          question: "p denotes:",
          options: ["Sample proportion", "Population proportion", "Mean", "Standard deviation"],
          correctAnswer: 1,
          explanation: "By convention.",
        },
        {
          question: "If the sample is small relative to the population we may use:",
          options: ["Normal exactly", "Binomial as approximation", "Uniform", "Geometric"],
          correctAnswer: 1,
          explanation: "Without-replacement sampling becomes approximately binomial.",
        },
      ],
    },
  ],

  // ─── 17B: Exact Distribution of P̂ ─────────────────────────────────
  "y12m-ch17-17b-exact-distribution": [
    {
      title: "The Exact Distribution of the Sample Proportion",
      explanation:
        "Suppose we draw a sample of size n with replacement from a population in which the true proportion with the characteristic is p. Let X be the number with the characteristic in the sample. Then\n  X ~ Bi(n, p) and P̂ = X/n.\n\nThis is the EXACT DISTRIBUTION of P̂ — every possible value of P̂ is x/n for x = 0, 1, …, n with probability P(X = x) = C(n, x) p^x (1−p)^(n−x).\n\nKey facts (derived from the binomial):\n  • E(P̂) = E(X)/n = p (P̂ is an UNBIASED ESTIMATOR of p).\n  • Var(P̂) = Var(X)/n² = p(1 − p)/n.\n  • sd(P̂) = √(p(1 − p)/n) — this is called the STANDARD ERROR of P̂.\n\nThe SHAPE of P̂'s distribution is a scaled version of the binomial distribution of X. As n grows, the distribution concentrates around p, demonstrating the LAW OF LARGE NUMBERS.",
      keyPoints: [
        "X = nP̂ ~ Bi(n, p)",
        "E(P̂) = p",
        "Var(P̂) = p(1 − p)/n",
        "Spread decreases as n increases",
      ],
      workedExamples: [
        {
          problem:
            "n = 20, p = 0.4. Find E(P̂) and sd(P̂).",
          steps: [
            "E(P̂) = 0.4",
            "Var(P̂) = (0.4)(0.6)/20 = 0.012",
            "sd(P̂) = √0.012 ≈ 0.1095",
          ],
          answer: "E = 0.4; sd ≈ 0.1095.",
        },
        {
          problem:
            "p = 0.3, n = 10. Find P(P̂ ≥ 0.5).",
          steps: [
            "P̂ ≥ 0.5 ⇔ X ≥ 5 with X ~ Bi(10, 0.3)",
            "P(X ≥ 5) = 1 − binomCdf(10, 0.3, 0, 4) ≈ 1 − 0.8497 = 0.1503",
          ],
          answer: "≈ 0.1503.",
        },
      ],
      tips: [
        "Convert P̂ thresholds back to integer X thresholds for binomial calculations",
        "Use exact binomial formula for small n",
      ],
      formulas: [
        { name: "Mean", formula: "E(P̂) = p" },
        { name: "Variance", formula: "Var(P̂) = p(1 − p)/n" },
      ],
      examQuestion: {
        problem:
          "Of voters, p = 0.45 support candidate A. A sample of 8 is taken. Find P(P̂ ≤ 0.25).",
        solution: [
          "P̂ ≤ 0.25 ⇔ X ≤ 2 with X ~ Bi(8, 0.45)",
          "binomCdf(8, 0.45, 0, 2) ≈ 0.2201",
        ],
        answer: "≈ 0.2201.",
        marks: 3,
      },
      commonErrors: [
        "Treating P̂ as continuous in small-sample problems",
        "Forgetting to convert to X for binomial computation",
      ],
      summary: [
        "Exact distribution of P̂ is binomial scaled by 1/n",
      ],
      practice: [
        { question: "n=4, p=0.5. List all values P̂ can take.", answer: "0, 0.25, 0.5, 0.75, 1" },
      ],
      quiz: [
        {
          question: "E(P̂) =",
          options: ["np", "p", "p/n", "1 − p"],
          correctAnswer: 1,
          explanation: "Unbiased estimator.",
        },
        {
          question: "Var(P̂) =",
          options: ["p(1−p)", "np(1−p)", "p(1−p)/n", "n p"],
          correctAnswer: 2,
          explanation: "Divide binomial variance by n².",
        },
      ],
    },
  ],

  // ─── 17C: Approximating the Distribution of P̂ ────────────────────
  "y12m-ch17-17c-approx-distribution": [
    {
      title: "Approximating the Distribution of the Sample Proportion",
      explanation:
        "When n is large, the binomial distribution of X is well approximated by a normal distribution. Dividing by n then gives the NORMAL APPROXIMATION FOR P̂:\n  P̂ ≈ N(p, p(1 − p)/n).\n\nA common rule of thumb is np ≥ 10 AND n(1 − p) ≥ 10, the same condition as for the normal approximation to the binomial.\n\nThis approximation is the foundation of CONFIDENCE INTERVALS in Section 17D, since it lets us write probability statements about P̂ that are independent of the discrete binomial structure.\n\nSTANDARD ERROR of P̂:\n  SE(P̂) = √(p(1 − p)/n)\nWhen p is unknown (the usual case), it is replaced by p̂ to give the ESTIMATED STANDARD ERROR\n  ŜE(P̂) = √(p̂(1 − p̂)/n).",
      keyPoints: [
        "P̂ ≈ N(p, p(1 − p)/n) for large n",
        "Conditions: np ≥ 10 AND n(1 − p) ≥ 10",
        "SE(P̂) = √(p(1 − p)/n)",
        "Replace p by p̂ when p is unknown",
      ],
      workedExamples: [
        {
          problem:
            "n = 200, p = 0.5. Approximate P(P̂ ≥ 0.55).",
          steps: [
            "P̂ ≈ N(0.5, 0.5·0.5/200) = N(0.5, 0.00125)",
            "sd ≈ 0.0354",
            "z = (0.55 − 0.5)/0.0354 ≈ 1.414",
            "P(Z ≥ 1.414) ≈ 0.0786",
          ],
          answer: "≈ 0.0786.",
        },
        {
          problem:
            "Sample of 400 yields p̂ = 0.4. Estimated SE?",
          steps: [
            "ŜE = √(0.4·0.6/400) = √(0.0006) ≈ 0.0245",
          ],
          answer: "≈ 0.0245.",
        },
      ],
      tips: [
        "Use the unrounded sd in the z-score, then round the final probability",
        "If asked, note the rule of thumb is satisfied",
      ],
      formulas: [
        { name: "Approximation", formula: "P̂ ≈ N(p, p(1 − p)/n)" },
        { name: "Estimated SE", formula: "ŜE = √(p̂(1 − p̂)/n)" },
      ],
      examQuestion: {
        problem:
          "Of all light bulbs, 85% pass quality control. A sample of 250 is tested. Approximate P(P̂ < 0.80).",
        solution: [
          "P̂ ≈ N(0.85, 0.85·0.15/250) = N(0.85, 0.00051)",
          "sd ≈ 0.0226",
          "z = (0.80 − 0.85)/0.0226 ≈ −2.214",
          "P(Z < −2.214) ≈ 0.0134",
        ],
        answer: "≈ 0.0134.",
        marks: 3,
      },
      commonErrors: [
        "Using variance where sd is required",
        "Ignoring the rule of thumb when n is small",
      ],
      summary: [
        "Normal approximation gives clean continuous probabilities for P̂",
      ],
      practice: [
        { question: "n = 100, p = 0.2. Mean and sd of P̂?", answer: "0.2 and √(0.0016) = 0.04" },
      ],
      quiz: [
        {
          question: "Standard error of P̂ is:",
          options: ["p(1−p)/n", "√(p(1−p)/n)", "n p(1−p)", "1/√n"],
          correctAnswer: 1,
          explanation: "Square root of variance.",
        },
        {
          question: "The normal approximation works when:",
          options: ["n large only", "n large and np, n(1−p) ≥ 10", "p < 0.5", "Always"],
          correctAnswer: 1,
          explanation: "Both tail conditions must hold.",
        },
      ],
    },
  ],

  // ─── 17D: Confidence Intervals ─────────────────────────────────────
  "y12m-ch17-17d-confidence-intervals": [
    {
      title: "Confidence Intervals for the Population Proportion",
      explanation:
        "An APPROXIMATE C% CONFIDENCE INTERVAL for p is\n  ( p̂ − z* √(p̂(1 − p̂)/n), p̂ + z* √(p̂(1 − p̂)/n) ),\nwhere z* is the value such that P(−z* ≤ Z ≤ z*) = C/100.\n\nCommon critical values:\n  • 90% confidence: z* ≈ 1.6449\n  • 95% confidence: z* ≈ 1.9600\n  • 99% confidence: z* ≈ 2.5758\n\nINTERPRETATION (correct):\n  'We are C% confident that the true proportion p lies in the interval (L, U).'\n  This means: if we repeated the procedure many times, about C% of intervals constructed this way would contain p.\n\nINTERPRETATION (INCORRECT — do not use):\n  'There is a 95% probability that p lies in this particular interval.'\n  p is FIXED; randomness lies in the interval, not in p.\n\nMARGIN OF ERROR (M) is the half-width of the interval:\n  M = z* · √(p̂(1 − p̂)/n).\nGiven a desired margin M, the required sample size is\n  n ≥ z*² p̂(1 − p̂) / M².\nUsing the conservative estimate p̂(1 − p̂) ≤ 1/4 gives the worst-case sample size.",
      keyPoints: [
        "CI = p̂ ± z* √(p̂(1 − p̂)/n)",
        "95% z* ≈ 1.96",
        "Margin of error halves with sample size quadrupling",
        "Interpret in terms of repeated sampling",
      ],
      workedExamples: [
        {
          problem:
            "In a sample of 400, 240 prefer brand A. Construct a 95% CI for p.",
          steps: [
            "p̂ = 240/400 = 0.60",
            "ŜE = √(0.6·0.4/400) = √(0.0006) ≈ 0.02449",
            "Margin = 1.96 · 0.02449 ≈ 0.04800",
            "CI = (0.55, 0.65)",
          ],
          answer: "95% CI: (0.552, 0.648).",
        },
        {
          problem:
            "How large must n be to estimate p to within 0.03 with 95% confidence (use p̂(1 − p̂) ≤ 0.25)?",
          steps: [
            "n ≥ (1.96)²·(0.25)/(0.03)² = 3.8416·0.25/0.0009 ≈ 1067.1",
            "Round up: n = 1068",
          ],
          answer: "n = 1068.",
        },
      ],
      tips: [
        "Always state confidence level and z*",
        "Round endpoints to 4 decimal places unless told otherwise",
        "Round n UP",
      ],
      definitions: [
        { term: "Margin of error", meaning: "Half-width of a confidence interval." },
        { term: "Critical value z*", meaning: "z such that P(−z ≤ Z ≤ z) = C/100." },
      ],
      formulas: [
        { name: "Confidence interval", formula: "p̂ ± z* √(p̂(1 − p̂)/n)" },
        { name: "Sample size", formula: "n ≥ z*² p̂(1 − p̂)/M²" },
      ],
      examQuestion: {
        problem:
          "A random sample of 500 households finds 280 own a pet. (a) Compute a 90% confidence interval for the true proportion. (b) Interpret it.",
        solution: [
          "p̂ = 0.56; ŜE = √(0.56·0.44/500) ≈ 0.02220",
          "Margin = 1.6449·0.02220 ≈ 0.03651",
          "(a) CI = (0.5235, 0.5965)",
          "(b) We are 90% confident the true proportion of households owning a pet lies between 52.4% and 59.7%",
        ],
        answer: "(0.5235, 0.5965); see interpretation.",
        marks: 4,
      },
      commonErrors: [
        "Using z* = 2 instead of 1.96 for 95% (acceptable rough only)",
        "Saying 'p has 95% probability of being in the interval'",
        "Forgetting to round n up",
      ],
      summary: [
        "Compute p̂, ŜE, margin, then interval",
        "Always interpret in context",
      ],
      practice: [
        { question: "n = 100, p̂ = 0.5. Width of 95% CI?", answer: "≈ 0.196" },
      ],
      quiz: [
        {
          question: "z* for 95% confidence is approximately:",
          options: ["1.28", "1.65", "1.96", "2.58"],
          correctAnswer: 2,
          explanation: "Standard 95% critical value.",
        },
        {
          question: "Doubling n approximately changes the margin by factor:",
          options: ["1/2", "1/√2", "2", "√2"],
          correctAnswer: 1,
          explanation: "Margin scales as 1/√n.",
        },
        {
          question: "Correct interpretation of 95% CI is:",
          options: ["p has 95% chance of being inside", "Interval covers p in 95% of repeated samples", "Sample mean is 95%", "p̂ = 0.95"],
          correctAnswer: 1,
          explanation: "Frequency interpretation of confidence.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 17 ──────────────────────────────────────────
  "y12m-ch17-review": [
    {
      title: "Review of Chapter 17 — Sampling and Estimation",
      explanation:
        "Chapter 17 ties together the binomial and normal distributions to the practical task of inferring a population proportion from a sample. After this chapter you should be able to:\n  • Distinguish parameters from statistics, and population proportion p from sample proportion P̂.\n  • Use the exact distribution P̂ = X/n with X ~ Bi(n, p) for small n.\n  • Use the normal approximation P̂ ≈ N(p, p(1 − p)/n) for large n.\n  • Compute estimated standard errors using p̂.\n  • Construct, interpret and modify confidence intervals.\n  • Solve sample-size problems given a desired margin of error.\n\nAlways write out which model (binomial or normal approximation) you are using and why.",
      keyPoints: [
        "Recognise sample vs population quantities",
        "Choose between binomial exact and normal approximation",
        "Construct CIs and interpret them carefully",
      ],
      workedExamples: [
        {
          problem:
            "A poll of 1000 voters shows 540 support a measure. Construct a 99% CI for p and find the margin of error.",
          steps: [
            "p̂ = 0.54; ŜE = √(0.54·0.46/1000) ≈ 0.01576",
            "Margin = 2.5758·0.01576 ≈ 0.04060",
            "CI = (0.499, 0.581)",
          ],
          answer: "99% CI: (0.4994, 0.5806); margin ≈ 0.0406.",
        },
      ],
      tips: [
        "Choose z* matching the confidence level",
        "State the rule of thumb whenever using normal approximation",
      ],
      formulas: [
        { name: "Sampling distribution", formula: "P̂ ≈ N(p, p(1−p)/n)" },
        { name: "CI", formula: "p̂ ± z* √(p̂(1−p̂)/n)" },
      ],
      examQuestion: {
        problem:
          "A market researcher wants to estimate the proportion of adults preferring product X to within 2% with 95% confidence. Find the minimum sample size.",
        solution: [
          "Use conservative p̂(1−p̂) = 0.25",
          "n ≥ (1.96)²·0.25/(0.02)² = 0.9604/0.0004 = 2401",
        ],
        answer: "n = 2401.",
        marks: 3,
      },
      commonErrors: [
        "Using sd in place of SE",
        "Misinterpreting confidence as probability about p",
      ],
      summary: [
        "Sampling theory rests on the binomial model and its normal approximation",
        "Confidence intervals quantify the uncertainty in P̂",
      ],
      practice: [
        { question: "p̂ = 0.7, n = 200. 95% CI?", answer: "(0.636, 0.764)" },
      ],
      quiz: [
        {
          question: "Margin of error for 99% CI uses z* ≈",
          options: ["1.65", "1.96", "2.33", "2.58"],
          correctAnswer: 3,
          explanation: "99% critical value.",
        },
      ],
    },
  ],
};
