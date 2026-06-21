import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 16: Revision of Chapters 1–15 (VCE Unit 4)

export const year12GeneralCh16Lessons: TopicLessonsMap = {
  // ─── 16A: Exam 1 Cumulative ────────────────────────────────────────
  "y12g-ch16-16a-exam1": [
    {
      title: "Exam 1 Cumulative Revision (Technology Free)",
      explanation:
        "This chapter pulls together the entire Unit 3 & 4 General Mathematics course for technology-free Exam 1 practice.\n\nTOPIC AREAS YOU SHOULD MASTER FOR EXAM 1:\n  • DATA ANALYSIS — five-number summary, mean, standard deviation, z-scores, boxplots.\n  • BIVARIATE STATISTICS — interpret r and r²; identify response/explanatory variables.\n  • TIME SERIES — recognise trend, seasonality, irregular components; compute simple moving averages.\n  • RECURSION & FINANCE — arithmetic vs geometric models; simple/compound interest; reducing-balance loans.\n  • MATRICES — multiplication, transition matrices, steady state condition.\n  • NETWORKS — degrees, Euler/Hamilton, Dijkstra, MST, critical path.\n\nEXAM 1 STRATEGY:\n  • Read the WHOLE question before writing.\n  • Identify the TOPIC area in the first 10 seconds.\n  • Pick the correct FORMULA from the formula sheet.\n  • Show enough working that a marker can follow your reasoning.\n  • Always interpret a final number with units and context.",
      keyPoints: [
        "Identify the topic area immediately",
        "Use the formula sheet — but choose the right formula",
        "Show short, complete working",
        "Always state units and context in your answer",
      ],
      workedExamples: [
        {
          problem: "z-score: a student scored 78 in a test with mean 72 and standard deviation 4. Find their z-score.",
          steps: [
            "z = (x − mean)/sd = (78 − 72)/4 = 6/4 = 1.5",
            "Interpretation: 1.5 standard deviations above mean",
          ],
          answer: "z = 1.5.",
        },
        {
          problem: "Compound interest: $1000 at 6% p.a. compounded annually for 3 years. Find balance.",
          steps: [
            "R = 1.06",
            "Balance = 1000 × 1.06³ = 1000 × 1.191016 = 1191.02",
          ],
          answer: "$1191.02.",
        },
        {
          problem: "Critical path: activities A(3), B(2 after A), C(4 after A), D(1 after B, C). Find duration.",
          steps: [
            "Path A-B-D = 3+2+1 = 6",
            "Path A-C-D = 3+4+1 = 8",
            "Duration = 8",
          ],
          answer: "Project duration = 8.",
        },
      ],
      tips: [
        "Practise picking the topic from the question wording",
        "If stuck, write what you know — partial marks add up",
      ],
      definitions: [
        { term: "z-score", meaning: "Number of standard deviations a value is from the mean." },
        { term: "Critical path", meaning: "Longest path through an activity network." },
      ],
      formulas: [
        { name: "z-score", formula: "z = (x − mean)/sd" },
        { name: "Compound interest", formula: "A = P(1 + r)^n" },
        { name: "Steady state", formula: "T·v = v" },
      ],
      examQuestion: {
        problem: "A loan of $5000 is taken at 12% p.a. compounding monthly. Write the recurrence relation.",
        solution: [
          "Monthly rate r = 0.12/12 = 0.01",
          "R = 1 + 0.01 = 1.01",
          "V_{n+1} = 1.01 · V_n − D, V_0 = 5000",
        ],
        answer: "V_{n+1} = 1.01·V_n − D, V_0 = 5000.",
        marks: 2,
      },
      commonErrors: [
        "Mis-identifying the topic and using the wrong formula",
        "Rounding too early",
        "Forgetting units",
      ],
      summary: [
        "Cumulative practice across all Unit 3 & 4 areas",
        "Identify topic, apply formula, interpret result",
        "Show clear working",
      ],
      quiz: [
        {
          question: "z = 0 means:",
          options: ["Below average", "Equal to mean", "Above average", "Cannot tell"],
          correctAnswer: 1,
          explanation: "z = 0 ↔ x = mean.",
        },
        {
          question: "Geometric model is appropriate when:",
          options: ["Equal additions each step", "Equal multiplications each step", "Constant subtractions", "No pattern"],
          correctAnswer: 1,
          explanation: "Each term is a constant multiple of the previous.",
        },
        {
          question: "Critical activities have float:",
          options: ["Largest", "Negative", "Zero", "Equal to duration"],
          correctAnswer: 2,
          explanation: "By definition.",
        },
      ],
    },
  ],

  // ─── 16B: Exam 2 Cumulative ────────────────────────────────────────
  "y12g-ch16-16b-exam2": [
    {
      title: "Exam 2 Cumulative Revision (Technology Active)",
      explanation:
        "Exam 2 in VCE General Mathematics is structured around EXTENDED-RESPONSE scenarios that draw on multiple topic areas. CAS is allowed and expected for arithmetic-heavy parts.\n\nTYPICAL SCENARIOS:\n  • A small business analysing sales (data + bivariate + time series + finance).\n  • A council planning roadworks (networks + scheduling + crashing).\n  • A delivery company optimising routes (matrices + flow + matching).\n  • A retirement plan modelled by an annuity (recursion + finance).\n\nGENERAL EXAM 2 STRATEGY:\n  • Read the whole scenario before answering part (a).\n  • Re-use stored matrices and amortisation tables across parts.\n  • State assumptions when modelling.\n  • End every numerical answer with a sentence containing units (dollars, days, customers).\n  • Watch for 'SHOW THAT' parts — they need full algebraic working, not just a CAS output.\n\nFINAL MASTERY CHECKLIST:\n  ✔ Perform Dijkstra on 6+ vertex networks\n  ✔ Solve maximum flow with cut verification\n  ✔ Identify critical path and crash projects optimally\n  ✔ Build and interpret transition and Leslie matrices\n  ✔ Use CAS to compute T^n and amortisation tables\n  ✔ Communicate reasoning clearly with units and context",
      keyPoints: [
        "Use CAS for heavy arithmetic, not for proofs",
        "Store matrices and tables; reuse across parts",
        "Always answer in units and context",
        "'Show that' requires algebraic working",
      ],
      workedExamples: [
        {
          problem:
            "A loan of $20 000 at 6% p.a. compounding monthly is repaid by $400/month. Find balance after 12 months and total interest paid.",
          steps: [
            "Monthly rate = 0.06/12 = 0.005; R = 1.005",
            "V_{n+1} = 1.005·V_n − 400, V_0 = 20000",
            "Use CAS amortisation: V_12 ≈ $16 309.07",
            "Total paid in year = 12 × 400 = $4800",
            "Principal reduction = 20000 − 16309.07 = $3690.93",
            "Interest paid = 4800 − 3690.93 = $1109.07",
          ],
          answer: "Balance ≈ $16 309.07; interest paid ≈ $1109.07.",
        },
        {
          problem:
            "T = [0.7 0.2; 0.3 0.8], S0 = [400; 600]. Find S5 and long-term distribution.",
          steps: [
            "Use CAS: S5 = T^5 · S0 ≈ [410; 590]",
            "Long-term: T^50 · S0 ≈ [400; 600] (already at steady)",
            "Verify: T·[400; 600] = [400; 600] ✓",
          ],
          answer: "S5 ≈ [410; 590]; long-term [400; 600].",
        },
      ],
      tips: [
        "Annotate CAS outputs in your written answer",
        "If parts are connected, plan how to reuse computations",
      ],
      definitions: [
        { term: "Annuity", meaning: "Series of equal payments earning compound interest." },
        { term: "Reducing-balance loan", meaning: "Loan where each payment reduces both interest and principal." },
        { term: "Steady state", meaning: "State vector that does not change under T." },
      ],
      formulas: [
        { name: "Reducing-balance loan", formula: "V_{n+1} = R·V_n − D" },
        { name: "Annuity recurrence", formula: "V_{n+1} = R·V_n − D (or +D for accumulating)" },
        { name: "Transition n-step", formula: "S_n = T^n · S_0" },
      ],
      examQuestion: {
        problem:
          "A council project has activities A(4), B(3 after A), C(5 after A), D(2 after B, C), E(3 after D). (i) Find duration and critical path. (ii) If C can be crashed by up to 2 days at $300/day and B at $200/day, find the cheapest way to reduce duration to 12 days.",
        solution: [
          "(i) Forward: A=4, B=7, C=9, D=11, E=14. Duration 14; critical path A-C-D-E",
          "(ii) Need to save 2 days from critical path",
          "Crash C (cheapest critical) by 2 days at $300 each = $600; new duration 12",
          "Check parallel path A-B-D-E = 4+3+2+3 = 12 — equally critical now, but target met",
        ],
        answer: "Duration 14; critical path A-C-D-E; minimum cost $600.",
        marks: 5,
      },
      commonErrors: [
        "Skipping 'show that' algebra",
        "Rounding intermediate CAS results too aggressively",
        "Forgetting parallel paths can become critical after crashing",
      ],
      summary: [
        "Exam 2 = scenario + connected parts",
        "Combine topics fluently",
        "Always interpret with units",
      ],
      quiz: [
        {
          question: "For a 'show that' question you should:",
          options: ["Quote CAS output only", "Provide algebraic working", "Skip the question", "Round to 1 decimal"],
          correctAnswer: 1,
          explanation: "Show full reasoning, not just a calculator answer.",
        },
        {
          question: "Long-term state vector for a regular T is:",
          options: ["Always zero", "Unique steady state", "Equal to S0", "Depends on T^2 only"],
          correctAnswer: 1,
          explanation: "Regular ⇒ unique steady state independent of S0.",
        },
        {
          question: "After crashing critical activities, parallel paths:",
          options: ["Cannot become critical", "May become critical", "Always remain non-critical", "Disappear"],
          correctAnswer: 1,
          explanation: "Always recheck critical path after each crash.",
        },
      ],
    },
  ],
};
