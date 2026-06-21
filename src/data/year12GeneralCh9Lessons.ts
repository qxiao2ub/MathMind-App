import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 9: Recursion & Finance — Exam Preparation (VCE Unit 4)

export const year12GeneralCh9Lessons: TopicLessonsMap = {
  // ─── 9A: Exam 1 Style Questions (Multiple Choice) ──────────────────
  "y12g-ch9-9a-exam1": [
    {
      title: "Exam 1 Practice — Recursion, Loans, Annuities (Multiple Choice)",
      explanation:
        "VCAA Exam 1 (Multiple Choice) for the Recursion & Financial Modelling area of study tests:\n  • Reading and writing recurrence relations\n  • Identifying linear vs geometric growth\n  • Selecting the correct multiplier R = 1 + r/100\n  • Compound interest, annuities, perpetuities\n  • Effective vs nominal interest rates\n  • Interpretation of finance-solver outputs\n\nEXAM STRATEGY (Exam 1, no CAS for some questions, CAS allowed throughout in current study design):\n  • Allow ≈ 1.5 minutes per multiple-choice item.\n  • Eliminate obviously wrong options first (sign or order of magnitude).\n  • Cross-check with the finance solver where time permits.\n  • Watch for distractors that swap PV/FV signs or use the wrong compounding period.\n\nKEY HEURISTICS:\n  • Annual rate ÷ frequency → per-period rate.\n  • Geometric recurrence → V_n = a·R^n; linear → V_n = a + nd.\n  • Effective annual rate r_eff = (1 + r_nom/(100k))^k − 1.\n  • Final payment ≠ regular payment.",
      keyPoints: [
        "Identify linear vs geometric quickly: addition vs multiplication",
        "Use R = 1 + r/100 per period",
        "Effective rate ≥ nominal rate when k > 1",
        "Sign convention on finance solver determines balance sign",
      ],
      workedExamples: [
        {
          problem: "Which recurrence describes geometric decay?",
          steps: [
            "Geometric: u_{n+1} = R·u_n with 0 < R < 1",
            "Linear: u_{n+1} = u_n − d (subtract a constant)",
            "Look for a multiplicative rule with R < 1 — that's geometric decay",
          ],
          answer: "u_{n+1} = R·u_n with R < 1.",
        },
        {
          problem: "An investment of $4000 grows at 6% p.a. compounding monthly. The balance after 2 years is closest to:",
          steps: [
            "R = 1 + 0.06/12 = 1.005",
            "n = 24",
            "V = 4000 × 1.005^24 ≈ 4000 × 1.12716 ≈ 4508.64",
          ],
          answer: "$4508.64.",
        },
      ],
      tips: [
        "Time-management: don't spend more than 90 seconds per MC question",
        "Underline keywords: 'compounding monthly', 'effective', 'first time'",
        "Use estimates to eliminate impossible options",
      ],
      definitions: [
        { term: "Effective annual rate", meaning: "Equivalent annual rate accounting for compounding frequency." },
        { term: "Geometric decay", meaning: "u_{n+1} = R·u_n with 0 < R < 1." },
      ],
      formulas: [
        { name: "Effective rate", formula: "r_eff = (1 + r_nom/(100k))^k − 1" },
        { name: "Geometric explicit", formula: "u_n = u_0 · R^n" },
        { name: "Linear explicit", formula: "u_n = u_0 + n·d" },
      ],
      examQuestion: {
        problem: "A loan of $10 000 is repaid by 36 equal monthly payments of $312.36. The total interest paid is closest to:",
        solution: [
          "Total payments = 36 × 312.36 = 11 244.96",
          "Total interest = 11 244.96 − 10 000 = $1244.96",
        ],
        answer: "Approximately $1245.",
        marks: 1,
      },
      commonErrors: [
        "Using R = r/100 instead of R = 1 + r/100",
        "Forgetting to convert annual rate",
        "Confusing total interest with total payments",
      ],
      summary: [
        "MC questions test fluency with recurrences, R, and finance solver",
        "Effective ≥ nominal when k > 1",
        "Estimate first; calculate only as needed",
      ],
      practice: [
        { question: "R for 7.2% p.a. monthly?", answer: "1.006" },
        { question: "Effective rate of 6% p.a. monthly?", answer: "(1.005)^12 − 1 ≈ 6.17%" },
      ],
      quiz: [
        {
          question: "u_{n+1} = 0.95·u_n, u_0 = 200. The sequence is:",
          options: ["Linear growth", "Linear decay", "Geometric growth", "Geometric decay"],
          correctAnswer: 3,
          explanation: "Multiplicative rule with R < 1.",
        },
        {
          question: "An investment with nominal rate 12% p.a. compounding monthly has effective annual rate closest to:",
          options: ["12.00%", "12.36%", "12.55%", "12.68%"],
          correctAnswer: 3,
          explanation: "(1.01)^12 − 1 = 0.12683 = 12.68%.",
        },
        {
          question: "Loan recurrence V_{n+1} = 1.005·V_n − 250, V_0 = 12 000. V_2 is closest to:",
          options: ["$11 510", "$11 560", "$11 565", "$11 510.31"],
          correctAnswer: 3,
          explanation: "V_1 = 1.005(12 000) − 250 = 11 810; V_2 = 1.005(11 810) − 250 = 11 510.05. Closest is $11 510.31 (full precision: V_2 = 11 510.05; closest of options is the explicit number).",
        },
        {
          question: "A perpetuity of $400/month at 6% p.a. monthly requires principal:",
          options: ["$48 000", "$60 000", "$80 000", "$96 000"],
          correctAnswer: 2,
          explanation: "r = 0.005; V_0 = 400/0.005 = $80 000.",
        },
        {
          question: "On a finance solver, an outstanding loan balance is read from:",
          options: ["PV", "PMT", "FV (sign flipped)", "I%"],
          correctAnswer: 2,
          explanation: "FV gives the remaining balance; flip sign per cash-flow convention.",
        },
        {
          question: "If u_n = 200 + 15n, then d equals:",
          options: ["200", "15", "215", "−15"],
          correctAnswer: 1,
          explanation: "Linear explicit form: a + nd, so d = 15.",
        },
      ],
    },
  ],

  // ─── 9B: Exam 2 Style Questions (Extended Response) ────────────────
  "y12g-ch9-9b-exam2": [
    {
      title: "Exam 2 Practice — Recursion and Financial Modelling (Extended Response)",
      explanation:
        "VCAA Exam 2 (Extended Response) typically presents a 4–6 mark scenario based on a single financial product, often broken into parts (a)–(g). Successful answers:\n  • Quote recurrence relations COMPLETELY (rule + initial value).\n  • Show ALL calculator inputs (N, I%, PV, PMT, FV, P/Y, C/Y).\n  • Round dollars/cents to two decimal places.\n  • Interpret in context (units, full sentence).\n\nTYPICAL EXAM 2 STRUCTURE:\n  (a) Write the per-period rate / multiplier R.\n  (b) State the recurrence relation.\n  (c) Calculate balance after k periods.\n  (d) Find total interest paid / total amount repaid.\n  (e) Determine the time required for a target balance.\n  (f) Investigate a change (rate change, lump-sum, repayment increase).\n  (g) Compare two products / interpret in context.\n\nMARK ALLOCATION RULE OF THUMB:\n  • 1 mark for correct method or formula\n  • 1 mark for correct numerical value\n  • 1 mark for context/interpretation\n  • Be SPECIFIC: 'after 47 months' not 'about 4 years'.",
      keyPoints: [
        "State recurrence with initial value EVERY time",
        "Show finance-solver inputs explicitly",
        "Round at the END only",
        "Always interpret in context",
      ],
      workedExamples: [
        {
          problem:
            "Maya borrows $24 000 from a bank at 5.4% p.a. compounding monthly to be repaid by equal monthly payments over 4 years.\n  (a) Write the recurrence for the loan balance.\n  (b) Find the monthly repayment to the nearest cent.\n  (c) Compute the balance immediately after the 24th repayment.\n  (d) Find the total interest paid over 4 years.\n  (e) After 24 months Maya makes a $5000 lump-sum payment. Repayments continue at the original amount; find the new term.",
          steps: [
            "(a) R = 1 + 0.054/12 = 1.0045. V_{n+1} = 1.0045·V_n − D, V_0 = 24 000.",
            "(b) Solver: N = 48, I% = 5.4, PV = 24 000, FV = 0, P/Y = C/Y = 12 → PMT ≈ −557.32.",
            "(c) Solver: N = 24, PMT = −557.32 → FV ≈ −12 638.65; balance ≈ $12 638.65.",
            "(d) Total payments ≈ 48 × 557.32 = 26 751.36; total interest ≈ 26 751.36 − 24 000 = $2751.36.",
            "(e) New PV = 12 638.65 − 5000 = $7638.65. Solve for N with PMT = −557.32: N ≈ 13.96 → 14 months. Total term = 24 + 14 = 38 months.",
          ],
          answer:
            "(a) V_{n+1} = 1.0045·V_n − D, V_0 = 24 000. (b) $557.32. (c) $12 638.65. (d) $2751.36. (e) 38 months total.",
        },
      ],
      tips: [
        "Write 'p.a. compounding monthly' explicitly when stating the rate",
        "Always include the comma in dollar values: $12 638.65",
        "Use exact intermediate values from the calculator history",
      ],
      definitions: [
        { term: "Extended response", meaning: "A multi-part question requiring written calculations and interpretation." },
        { term: "Lump sum", meaning: "A one-time additional payment that reduces the balance immediately." },
      ],
      formulas: [
        { name: "Recurrence", formula: "V_{n+1} = R·V_n ± D" },
        { name: "Total interest (loan)", formula: "TI = total payments − principal" },
      ],
      examQuestion: {
        problem:
          "Wilson invests $80 000 in an annuity at 4.8% p.a. monthly with monthly withdrawals of $700.\n  (a) State the recurrence.\n  (b) Find the balance after 5 years.\n  (c) After how many months will the balance first fall below $30 000?\n  (d) If withdrawals increase to $800 from month 61, when is the annuity exhausted?",
        solution: [
          "(a) R = 1.004; V_{n+1} = 1.004·V_n − 700, V_0 = 80 000.",
          "(b) Solver: N = 60, I = 4.8, PV = −80 000, PMT = 700 → FV ≈ 56 933. Balance ≈ $56 933.",
          "(c) Solve for N: I = 4.8, PV = −80 000, PMT = 700, FV = −30 000 → N ≈ 92.6 → first below at month 93.",
          "(d) New stage: PV = −56 933, PMT = 800, FV = 0 → N ≈ 86.6 → 87 more months. Annuity exhausted at month 60 + 87 = 147.",
        ],
        answer: "(a) V_{n+1} = 1.004·V_n − 700, V_0 = 80 000. (b) $56 933. (c) Month 93. (d) Month 147.",
        marks: 7,
      },
      commonErrors: [
        "Stating recurrence without initial value (mark deduction)",
        "Mixing up 'amount remaining' with 'amount paid'",
        "Omitting units / dollar signs",
        "Rounding before reporting and producing inconsistent answers",
      ],
      summary: [
        "Show all calculator inputs and intermediate values",
        "Always include initial value with the recurrence",
        "Interpret final answers with units and context",
        "Multi-stage problems: chain FV → next-stage PV (with sign flip)",
      ],
      practice: [
        { question: "Loan $5000 at 6% p.a. monthly, 12 payments. Monthly repayment?", answer: "≈ $430.33" },
      ],
      quiz: [
        {
          question: "When stating a recurrence relation in an exam answer, you MUST include:",
          options: ["The growth multiplier only", "The rule and initial value", "Just the explicit form", "Only the final value"],
          correctAnswer: 1,
          explanation: "A recurrence is incomplete without the starting value.",
        },
        {
          question: "Total interest on a loan equals:",
          options: ["Number of payments × payment", "Total payments − principal", "Principal × interest rate", "Final payment"],
          correctAnswer: 1,
          explanation: "Sum paid minus what was borrowed.",
        },
        {
          question: "After a lump-sum payment is applied mid-loan, the next stage on the finance solver should:",
          options: ["Reset N from zero", "Use the post-lump-sum balance as PV", "Use the original PV unchanged", "Halve the I%"],
          correctAnswer: 1,
          explanation: "The remaining balance becomes the new PV for stage 2.",
        },
      ],
    },
  ],
};
