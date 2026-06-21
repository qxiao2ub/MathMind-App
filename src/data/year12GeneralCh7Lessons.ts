import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 7: Modelling Growth and Decay Using Recursion (VCE Unit 4)

export const year12GeneralCh7Lessons: TopicLessonsMap = {
  // ─── 7A: Sequences & Recurrence Relations ───────────────────────
  "y12g-ch7-7a-sequences-recurrence": [
    {
      title: "Sequences and Recurrence Relations",
      explanation:
        "A SEQUENCE is an ordered list of numbers u₀, u₁, u₂, … where uₙ is the term at step n.\n\nA RECURRENCE RELATION (or recursive rule) defines each new term using the PREVIOUS term:\n  u_{n+1} = f(uₙ),  with a STARTING VALUE u₀ (or sometimes u₁).\n\nA recurrence relation is incomplete without the starting value. To generate the sequence, substitute repeatedly:\n  u₀ = given,  u₁ = f(u₀),  u₂ = f(u₁), …\n\nVCAA notation often uses subscript-after style, e.g. u_{n+1} = 1.05·uₙ + 100, u₀ = 200. Read this as: 'the next term equals 1.05 times the current term plus 100, starting at 200.'\n\nCAS — TI-Nspire: Calculator → seq(formula, n, start, end) or use a Lists & Spreadsheet column with =1.05*B1+100.\nCAS — ClassPad: Sequence app → enter u_{n+1} as the recursion rule and u₀ as the initial value, then view the table.",
      keyPoints: [
        "A recurrence relation needs BOTH a rule and a starting value",
        "u_{n+1} is the next term; uₙ is the current term",
        "Generate terms by substituting forward one step at a time",
        "Use full precision in CAS; only round the final answer",
        "Spreadsheet: each row = previous row + rule",
      ],
      workedExamples: [
        {
          problem: "Given u_{n+1} = 1.05·uₙ + 100, u₀ = 200. Find u₁, u₂ and u₃.",
          steps: [
            "u₁ = 1.05(200) + 100 = 210 + 100 = 310",
            "u₂ = 1.05(310) + 100 = 325.5 + 100 = 425.5",
            "u₃ = 1.05(425.5) + 100 = 446.775 + 100 = 546.775",
          ],
          answer: "u₁ = 310, u₂ = 425.5, u₃ = 546.775",
        },
      ],
      tips: [
        "Always write the starting value next to the rule",
        "Don't round mid-sequence — it compounds errors",
        "Read u_{n+1} = … as 'NEXT term = … current term'",
      ],
      definitions: [
        { term: "Sequence", meaning: "An ordered list of numbers indexed by 0, 1, 2, …" },
        { term: "Recurrence relation", meaning: "A rule that defines u_{n+1} in terms of uₙ together with a starting value." },
        { term: "Initial value", meaning: "The first term (u₀ or u₁) needed to generate the sequence." },
      ],
      formulas: [
        { name: "Generic recurrence", formula: "u_{n+1} = f(uₙ),  u₀ = a" },
      ],
      examQuestion: {
        problem: "u_{n+1} = 0.9·uₙ + 20, u₀ = 100. Find u₁ and u₂.",
        solution: [
          "u₁ = 0.9(100) + 20 = 90 + 20 = 110",
          "u₂ = 0.9(110) + 20 = 99 + 20 = 119",
        ],
        answer: "u₁ = 110, u₂ = 119.",
        marks: 2,
      },
      commonErrors: [
        "Forgetting the starting value",
        "Confusing u_{n+1} with uₙ in the rule",
        "Rounding intermediate terms",
      ],
      summary: [
        "A recurrence is rule + starting value",
        "Substitute one step at a time to generate terms",
        "Use CAS sequence/table tools for many terms",
      ],
      practice: [
        { question: "u_{n+1} = uₙ + 5, u₀ = 2. Find u₃.", answer: "2, 7, 12, 17 → u₃ = 17." },
        { question: "u_{n+1} = 2·uₙ, u₀ = 3. Find u₄.", answer: "3, 6, 12, 24, 48 → u₄ = 48." },
        { question: "Why is the starting value essential?", answer: "Without it, the rule cannot generate any terms." },
      ],
      quiz: [
        { question: "u_{n+1} = uₙ + 4, u₀ = 1. u₂ = ?", options: ["5", "9", "13", "1"], correctAnswer: 1, explanation: "1 → 5 → 9." },
        { question: "Which is needed besides the rule?", options: ["Final value", "Starting value", "Average", "Common ratio"], correctAnswer: 1, explanation: "An initial term is required." },
        { question: "u_{n+1} represents:", options: ["Previous term", "Current term", "Next term", "Sum"], correctAnswer: 2, explanation: "It is the term after uₙ." },
      ],
    },
  ],

  // ─── 7B: Linear Growth & Decay ──────────────────────────────────
  "y12g-ch7-7b-linear-growth-decay": [
    {
      title: "Linear (Arithmetic) Growth and Decay",
      explanation:
        "A sequence shows LINEAR GROWTH or DECAY when the SAME amount is added (growth) or subtracted (decay) each step. The recurrence is:\n  u_{n+1} = uₙ + d,  u₀ = a,\nwhere d > 0 is growth and d < 0 is decay. d is the COMMON DIFFERENCE.\n\nGraphically, the points lie on a STRAIGHT LINE. This corresponds to SIMPLE INTEREST in finance and to constant-rate change in many real contexts (saving the same amount each week, depreciating by a fixed dollar amount each year).\n\nCAS: enter u₀ and the rule into the Sequence/Spreadsheet app to see successive values; identify d as the constant added each step.",
      keyPoints: [
        "Linear ⇒ same constant d added (or subtracted) each step",
        "u_{n+1} = uₙ + d is arithmetic; d = common difference",
        "Graph is a straight line",
        "Models simple interest and flat-rate depreciation",
        "If d > 0 growth; if d < 0 decay",
      ],
      workedExamples: [
        {
          problem: "A car worth $24 000 depreciates by $1500 per year (flat rate). Write the recurrence and find the value after 3 years.",
          steps: [
            "u₀ = 24 000, d = −1500",
            "Recurrence: u_{n+1} = uₙ − 1500",
            "u₁ = 22 500, u₂ = 21 000, u₃ = 19 500",
          ],
          answer: "Recurrence u_{n+1} = uₙ − 1500, u₀ = 24 000; value after 3 years = $19 500.",
        },
      ],
      tips: [
        "Linear growth ↔ same DOLLAR (or unit) change each step, not same percentage",
        "If rate is given as a percentage of the ORIGINAL, that's also flat — converts to a fixed amount",
        "Graph stays straight no matter how many steps",
      ],
      definitions: [
        { term: "Common difference (d)", meaning: "The constant amount added (or subtracted) at each step in an arithmetic sequence." },
        { term: "Simple interest", meaning: "Interest calculated on the original principal only; produces linear growth." },
        { term: "Flat-rate depreciation", meaning: "An asset loses the SAME dollar amount each period; produces linear decay." },
      ],
      formulas: [
        { name: "Linear recurrence", formula: "u_{n+1} = uₙ + d,  u₀ = a" },
        { name: "Simple interest growth", formula: "u_{n+1} = uₙ + r·u₀ (interest = r × original principal)" },
      ],
      examQuestion: {
        problem: "An investment of $5000 earns simple interest at 4% p.a. Write the recurrence for the balance after each year and find the balance after 3 years.",
        solution: [
          "Annual interest = 0.04 × 5000 = $200 (constant)",
          "u_{n+1} = uₙ + 200, u₀ = 5000",
          "u₁ = 5200, u₂ = 5400, u₃ = $5600",
        ],
        answer: "Recurrence u_{n+1} = uₙ + 200, u₀ = 5000; balance after 3 years = $5600.",
        marks: 3,
      },
      commonErrors: [
        "Mixing simple-interest growth with compound (percentage of CURRENT, not original)",
        "Forgetting to make d negative for decay",
        "Switching units (e.g. months vs years) without adjusting d",
      ],
      summary: [
        "Linear growth/decay = constant ± d per step",
        "Models simple interest and flat-rate depreciation",
        "Plot is a straight line",
      ],
      practice: [
        { question: "u₀ = 50, d = 8. Find u₅.", answer: "50, 58, 66, 74, 82, 90 → u₅ = 90." },
        { question: "Asset $10 000 falls $750/yr. Value after 4 years?", answer: "$10 000 − 4(750) = $7000." },
        { question: "Is u_{n+1} = uₙ − 5 growth or decay?", answer: "Decay (d = −5)." },
      ],
      quiz: [
        { question: "Linear means each step changes by:", options: ["Same %", "Same amount", "Doubling", "Halving"], correctAnswer: 1, explanation: "Common difference d is constant." },
        { question: "Simple interest produces:", options: ["Linear growth", "Geometric growth", "Decay", "Steady state"], correctAnswer: 0, explanation: "Interest is on original principal each year." },
        { question: "u₀=20, d=−3. u₂?", options: ["14", "17", "23", "26"], correctAnswer: 0, explanation: "20→17→14." },
      ],
    },
  ],

  // ─── 7C: Explicit Rule for Linear ───────────────────────────────
  "y12g-ch7-7c-explicit-linear": [
    {
      title: "Explicit Rule for Linear Growth and Decay",
      explanation:
        "The recurrence u_{n+1} = uₙ + d, u₀ = a, gives an EXPLICIT (closed) rule:\n  uₙ = a + n·d.\n\nThis lets you find ANY term DIRECTLY without iterating. It is the same idea as the nth term of an arithmetic sequence.\n\nExplicit rule advantages:\n• Predict uₙ for large n in one step.\n• Solve 'when does uₙ reach a target?' by setting a + n·d = target and solving for n.\n\nVCAA note: 'after n years' usually corresponds to uₙ when u₀ is the value NOW. Check carefully whether the question uses u₀ or u₁ as the starting time.",
      keyPoints: [
        "Explicit rule: uₙ = a + n·d (a is starting term, d is common difference)",
        "Lets you find any term directly without listing them",
        "Solve for n to find when a target is reached",
        "Check whether u₀ or u₁ is 'now'",
        "d can be negative (decay)",
      ],
      workedExamples: [
        {
          problem: "An asset is worth $30 000 and depreciates by $2000 per year (flat rate). Write the explicit rule and find the value after 7 years.",
          steps: [
            "a = 30 000, d = −2000",
            "Explicit: uₙ = 30 000 − 2000n",
            "u₇ = 30 000 − 2000(7) = 30 000 − 14 000 = 16 000",
          ],
          answer: "uₙ = 30 000 − 2000n; value after 7 years = $16 000.",
        },
        {
          problem: "Using the rule above, when does the asset's value first fall to $0?",
          steps: [
            "Set 30 000 − 2000n ≤ 0",
            "n ≥ 30 000 ÷ 2000 = 15",
            "First time at or below $0: n = 15 years",
          ],
          answer: "After 15 years.",
        },
      ],
      tips: [
        "Explicit ↔ recursive: a + n·d ↔ u_{n+1} = uₙ + d",
        "When solving for n, round UP if you need the first time the target is hit",
      ],
      definitions: [
        { term: "Explicit rule", meaning: "A formula giving uₙ directly in terms of n, without using the previous term." },
        { term: "Common difference (d)", meaning: "The constant added each step in an arithmetic sequence." },
      ],
      formulas: [
        { name: "Explicit linear", formula: "uₙ = a + n·d" },
      ],
      examQuestion: {
        problem: "u₀ = 800, d = −60. (a) Write the explicit rule. (b) Find u₁₀. (c) Find the smallest n with uₙ ≤ 200.",
        solution: [
          "(a) uₙ = 800 − 60n",
          "(b) u₁₀ = 800 − 600 = 200",
          "(c) 800 − 60n ≤ 200 → 60n ≥ 600 → n ≥ 10; smallest n = 10",
        ],
        answer: "(a) uₙ = 800 − 60n; (b) u₁₀ = 200; (c) n = 10.",
        marks: 3,
      },
      commonErrors: [
        "Using uₙ = a + (n−1)d when the question indexes from u₀ (then uₙ = a + n·d)",
        "Forgetting to round up when finding the first n that meets a target",
      ],
      summary: [
        "Explicit rule: uₙ = a + n·d",
        "Use it for direct predictions and target-time problems",
        "Switch between recursive and explicit at will",
      ],
      practice: [
        { question: "u₀ = 12, d = 4. u₂₀?", answer: "12 + 80 = 92." },
        { question: "uₙ = 50 − 5n. When uₙ = 0?", answer: "n = 10." },
        { question: "Smallest n with 100 − 7n < 30?", answer: "7n > 70 → n > 10 → n = 11." },
      ],
      quiz: [
        { question: "Explicit rule for u_{n+1} = uₙ + 6, u₀ = 4:", options: ["uₙ = 4 + 6n", "uₙ = 6 + 4n", "uₙ = 4·6ⁿ", "uₙ = 4n + 6n"], correctAnswer: 0, explanation: "uₙ = a + n·d = 4 + 6n." },
        { question: "uₙ = 100 − 8n. u₅ = ?", options: ["60", "92", "40", "100"], correctAnswer: 0, explanation: "100 − 40 = 60." },
        { question: "If d < 0 the sequence:", options: ["Grows", "Decays", "Constant", "Oscillates"], correctAnswer: 1, explanation: "Negative common difference = decay." },
      ],
    },
  ],

  // ─── 7D: Geometric Growth & Decay ───────────────────────────────
  "y12g-ch7-7d-geometric-growth-decay": [
    {
      title: "Geometric Growth and Decay",
      explanation:
        "A sequence shows GEOMETRIC GROWTH or DECAY when each term is MULTIPLIED by the same constant (the COMMON RATIO R). The recurrence is:\n  u_{n+1} = R·uₙ,  u₀ = a.\n\nIf R > 1, growth (e.g. R = 1.05 ↔ 5% growth per period).\nIf 0 < R < 1, decay (e.g. R = 0.88 ↔ 12% loss per period).\n\nThe percentage form converts to R as:\n  growth at r%  →  R = 1 + r/100\n  decay at r%   →  R = 1 − r/100.\n\nGEOMETRIC GROWTH models COMPOUND INTEREST and REDUCING-BALANCE DEPRECIATION; the graph is curved (exponential), not linear.\n\nIf there is also a CONSTANT added each step, the recurrence becomes u_{n+1} = R·uₙ + b — see 7E and Chapter 8 for finance applications.",
      keyPoints: [
        "Geometric ⇒ same MULTIPLIER R each step (not same amount)",
        "Recurrence: u_{n+1} = R·uₙ",
        "R = 1 + r/100 for growth; R = 1 − r/100 for decay",
        "Compound interest and reducing-balance depreciation are geometric",
        "Graph is curved, not straight",
      ],
      workedExamples: [
        {
          problem: "A population of 1000 grows by 5% each year. Write the recurrence and find the population after 2 years.",
          steps: [
            "R = 1 + 5/100 = 1.05",
            "u_{n+1} = 1.05·uₙ, u₀ = 1000",
            "u₁ = 1050; u₂ = 1.05(1050) = 1102.5",
          ],
          answer: "Recurrence u_{n+1} = 1.05·uₙ, u₀ = 1000; population ≈ 1102 after 2 years.",
        },
        {
          problem: "A laptop worth $2000 loses 12% of its value each year (reducing-balance). Write the recurrence and find the value after 3 years.",
          steps: [
            "R = 1 − 0.12 = 0.88",
            "u_{n+1} = 0.88·uₙ, u₀ = 2000",
            "u₁ = 1760, u₂ = 1548.8, u₃ = 1362.94",
          ],
          answer: "Recurrence u_{n+1} = 0.88·uₙ, u₀ = 2000; value after 3 years ≈ $1362.94.",
        },
      ],
      tips: [
        "If percentages are given, convert to a multiplier R first",
        "Compound interest grows FASTER over time than simple interest",
        "Reducing-balance never reaches zero exactly; values get arbitrarily small",
      ],
      definitions: [
        { term: "Common ratio (R)", meaning: "The constant multiplier applied each step in a geometric sequence." },
        { term: "Compound interest", meaning: "Interest calculated on the CURRENT balance each period; produces geometric growth." },
        { term: "Reducing-balance depreciation", meaning: "An asset loses a constant PERCENTAGE of its current value each period." },
      ],
      formulas: [
        { name: "Geometric recurrence", formula: "u_{n+1} = R·uₙ,  u₀ = a" },
        { name: "Growth percentage to R", formula: "R = 1 + r/100" },
        { name: "Decay percentage to R", formula: "R = 1 − r/100" },
      ],
      examQuestion: {
        problem: "$3000 is invested at 6% p.a. compounded annually. Write the recurrence and find the balance after 2 years.",
        solution: [
          "R = 1.06; recurrence: u_{n+1} = 1.06·uₙ, u₀ = 3000",
          "u₁ = 3180; u₂ = 1.06(3180) = 3370.80",
        ],
        answer: "Recurrence u_{n+1} = 1.06·uₙ, u₀ = 3000; balance after 2 years = $3370.80.",
        marks: 3,
      },
      commonErrors: [
        "Adding the percentage instead of multiplying by 1 + r/100",
        "Confusing simple (linear) interest with compound (geometric)",
        "Using R = 12% instead of R = 0.88 for 12% decay",
      ],
      summary: [
        "Geometric = constant multiplier R per step",
        "R = 1 + r/100 (growth) or R = 1 − r/100 (decay)",
        "Models compound interest and reducing-balance depreciation",
      ],
      practice: [
        { question: "8% annual growth → R?", answer: "R = 1.08." },
        { question: "15% decay → R?", answer: "R = 0.85." },
        { question: "u₀ = 500, R = 1.10. u₂?", answer: "500·1.10² = 605." },
      ],
      quiz: [
        { question: "10% growth means R =", options: ["0.10", "1.10", "0.90", "10"], correctAnswer: 1, explanation: "R = 1 + 0.10." },
        { question: "Geometric decay needs R:", options: ["= 1", "> 1", "between 0 and 1", "< 0"], correctAnswer: 2, explanation: "Multiplier less than 1 reduces value." },
        { question: "Compound interest is:", options: ["Linear", "Geometric", "Arithmetic", "Constant"], correctAnswer: 1, explanation: "Each year multiplies the current balance." },
      ],
    },
  ],

  // ─── 7E: Explicit Rule for Geometric ────────────────────────────
  "y12g-ch7-7e-explicit-geometric": [
    {
      title: "Explicit Rule for Geometric Growth and Decay",
      explanation:
        "The recurrence u_{n+1} = R·uₙ, u₀ = a, has the EXPLICIT rule:\n  uₙ = a · Rⁿ.\n\nThis is the standard COMPOUND-INTEREST formula in disguise: balance after n years at rate r% per year compounded annually is\n  uₙ = a · (1 + r/100)ⁿ\nand reducing-balance depreciation is\n  uₙ = a · (1 − r/100)ⁿ.\n\nUse it to find any term directly, or to solve for n given a target value (using logs or CAS solve).",
      keyPoints: [
        "Explicit rule: uₙ = a · Rⁿ",
        "Compound interest: uₙ = a · (1 + r/100)ⁿ",
        "Reducing-balance: uₙ = a · (1 − r/100)ⁿ",
        "Solve target problems by setting uₙ = target and using logs/CAS",
        "Plot is exponential — curved",
      ],
      workedExamples: [
        {
          problem: "$2000 invested at 6% p.a. compounded annually. Find the balance after 5 years.",
          steps: [
            "a = 2000, R = 1.06, n = 5",
            "u₅ = 2000 · 1.06⁵",
            "= 2000 · 1.3382255… = 2676.45 (to 2 d.p.)",
          ],
          answer: "Balance after 5 years ≈ $2676.45.",
        },
        {
          problem: "A car worth $20 000 depreciates at 15% p.a. (reducing balance). Find its value after 4 years.",
          steps: [
            "R = 0.85, n = 4",
            "u₄ = 20 000 · 0.85⁴",
            "= 20 000 · 0.52200625 ≈ 10 440.13",
          ],
          answer: "Value after 4 years ≈ $10 440.13.",
        },
      ],
      tips: [
        "Don't round R — keep full precision",
        "When R > 1 the sequence grows without bound",
        "When 0 < R < 1 the sequence approaches 0 but never reaches it",
      ],
      definitions: [
        { term: "Common ratio (R)", meaning: "The constant multiplier in a geometric sequence." },
        { term: "Compound interest", meaning: "Interest paid on the current balance each period; explicit form a(1 + r/100)ⁿ." },
      ],
      formulas: [
        { name: "Explicit geometric", formula: "uₙ = a · Rⁿ" },
        { name: "Compound interest", formula: "uₙ = a · (1 + r/100)ⁿ" },
        { name: "Reducing-balance depreciation", formula: "uₙ = a · (1 − r/100)ⁿ" },
      ],
      examQuestion: {
        problem: "A $5000 investment grows at 4.8% p.a. compounded annually. Find the balance after 6 years.",
        solution: [
          "R = 1.048, n = 6",
          "u₆ = 5000 · 1.048⁶",
          "≈ 5000 · 1.32414… ≈ $6620.69",
        ],
        answer: "Balance ≈ $6620.69.",
        marks: 2,
      },
      commonErrors: [
        "Multiplying by 1 + r instead of 1 + r/100 when r is a percentage",
        "Using simple-interest formula for compound problems",
        "Rounding R before computing the power",
      ],
      summary: [
        "Geometric explicit rule: uₙ = a · Rⁿ",
        "Compound interest and reducing-balance fit this form",
        "Use logs or CAS solve for target-time problems",
      ],
      practice: [
        { question: "a = 100, R = 1.05, n = 3. uₙ?", answer: "100·1.05³ ≈ 115.7625." },
        { question: "a = 800, R = 0.9, n = 4. uₙ?", answer: "800·0.9⁴ = 524.88." },
        { question: "$1000 at 7% p.a. compound, after 10 years?", answer: "1000·1.07¹⁰ ≈ $1967.15." },
      ],
      quiz: [
        { question: "Explicit form of u_{n+1} = R·uₙ, u₀ = a:", options: ["uₙ = a + nR", "uₙ = a·Rⁿ", "uₙ = aR + n", "uₙ = R·n + a"], correctAnswer: 1, explanation: "Each step multiplies by R, so n steps give Rⁿ." },
        { question: "$1000 at 5% compound, 2 yrs:", options: ["$1100", "$1102.50", "$1050", "$1100.25"], correctAnswer: 1, explanation: "1000·1.05² = 1102.5." },
        { question: "If R = 0.95 and n large:", options: ["Sequence grows", "Reaches 0", "Approaches 0", "Stays constant"], correctAnswer: 2, explanation: "0 < R < 1 → values approach 0 but never reach it." },
      ],
    },
  ],

  // ─── 7F: Interest Rates & Effective Interest ────────────────────
  "y12g-ch7-7f-interest-effective": [
    {
      title: "Nominal vs Effective Interest Rates",
      explanation:
        "Interest rates are usually quoted as ANNUAL or NOMINAL (per year), but compounding can happen MORE OFTEN than once a year — monthly, weekly, daily.\n\nIf the nominal annual rate is r% and there are n compounding periods per year, the PERIODIC rate is r/n % and the recurrence per period is\n  u_{k+1} = (1 + r/(100·n)) · u_k.\n\nThe EFFECTIVE ANNUAL RATE is the SINGLE annual rate that gives the same balance after one year as the more frequent compounding. It is always larger than the nominal rate (when n > 1):\n  Effective rate = [(1 + r/(100·n))ⁿ − 1] × 100 %.\n\nUse the effective rate to FAIRLY COMPARE products with different compounding frequencies.\n\nCAS — TI-Nspire: Finance → tvmI() / tvmFV() or Eff(nominal, n). ClassPad: Financial app → Interest Conversion.",
      keyPoints: [
        "Nominal rate is quoted PER YEAR; compounding may be more frequent",
        "Periodic rate = nominal ÷ number of periods per year",
        "Effective annual rate = (1 + r/(100·n))ⁿ − 1, expressed as a percentage",
        "Effective > nominal whenever n > 1",
        "Use the effective rate to compare different products fairly",
      ],
      workedExamples: [
        {
          problem: "A loan is quoted at 6% p.a. compounding MONTHLY. Find the periodic rate and the effective annual rate.",
          steps: [
            "Periodic rate = 6 / 12 = 0.5% per month",
            "Effective = (1 + 0.06/12)¹² − 1",
            "= 1.005¹² − 1 ≈ 1.06168 − 1 = 0.06168",
            "Effective annual rate ≈ 6.17%",
          ],
          answer: "Periodic rate 0.5% per month; effective annual rate ≈ 6.17%.",
        },
        {
          problem: "Compare 5.9% p.a. compounded monthly with 6.0% p.a. compounded annually.",
          steps: [
            "Effective of 5.9% monthly = (1 + 0.059/12)¹² − 1 ≈ 0.06064 = 6.064%",
            "Effective of 6.0% annually = 6.000%",
            "5.9% monthly has higher effective rate",
          ],
          answer: "5.9% p.a. compounded monthly is the higher effective rate (≈ 6.06%).",
        },
      ],
      tips: [
        "Always convert to PERIODIC rate before iterating the recurrence",
        "When choosing between products, compare EFFECTIVE annual rates",
        "The more frequent the compounding, the higher the effective rate",
      ],
      definitions: [
        { term: "Nominal rate", meaning: "The annual interest rate quoted, before adjusting for compounding frequency." },
        { term: "Periodic rate", meaning: "The interest rate applied each compounding period: nominal ÷ number of periods per year." },
        { term: "Effective annual rate", meaning: "The single annual rate that gives the same outcome as the actual compounding scheme." },
      ],
      formulas: [
        { name: "Periodic rate", formula: "i = r / (100 · n)  per period (decimal)" },
        { name: "Periodic recurrence", formula: "u_{k+1} = (1 + i) · u_k" },
        { name: "Effective annual rate", formula: "Effective = (1 + r/(100·n))ⁿ − 1, ×100%" },
      ],
      examQuestion: {
        problem: "A bank advertises 7.2% p.a. compounding quarterly. (a) State the quarterly rate. (b) Find the effective annual rate.",
        solution: [
          "(a) Quarterly rate = 7.2 / 4 = 1.8% per quarter",
          "(b) Effective = (1 + 0.072/4)⁴ − 1 = 1.018⁴ − 1",
          "≈ 1.07396 − 1 = 0.07396",
          "Effective annual rate ≈ 7.40%",
        ],
        answer: "(a) 1.8% per quarter; (b) effective ≈ 7.40% p.a.",
        marks: 3,
      },
      commonErrors: [
        "Using the nominal rate as the periodic rate without dividing by n",
        "Comparing two products on nominal rates alone",
        "Forgetting to convert the answer back to a percentage",
      ],
      summary: [
        "Periodic rate = nominal ÷ periods per year",
        "Effective rate accounts for compounding frequency",
        "Compare products using effective rates, not nominal",
      ],
      practice: [
        { question: "12% p.a. compounded monthly: periodic rate?", answer: "1% per month." },
        { question: "Effective rate for 8% p.a. compounded quarterly?", answer: "(1.02)⁴ − 1 ≈ 8.24%." },
        { question: "Why use effective rate?", answer: "To fairly compare loans/investments with different compounding frequencies." },
      ],
      quiz: [
        { question: "6% p.a. compounded monthly → monthly rate:", options: ["6%", "0.6%", "0.5%", "0.06%"], correctAnswer: 2, explanation: "6/12 = 0.5%." },
        { question: "Effective rate is always:", options: ["= nominal", "< nominal", "≥ nominal", "Negative"], correctAnswer: 2, explanation: "Equal when n=1, larger when n>1." },
        { question: "Better effective rate?", options: ["5% monthly", "5% annually"], correctAnswer: 0, explanation: "More frequent compounding → higher effective rate." },
      ],
    },
  ],

  // ─── Chapter 7 Review ───────────────────────────────────────────
  "y12g-ch7-review": [
    {
      title: "Chapter 7 Review — Recursion, Growth and Decay",
      explanation:
        "Chapter 7 develops two families of models defined by recurrence relations: ARITHMETIC (u_{n+1} = uₙ + d) and GEOMETRIC (u_{n+1} = R·uₙ). Each has an explicit (closed) rule and a financial interpretation.\n\nWORKFLOW for any problem:\n1) Identify the type — same amount added each step (arithmetic) or same multiplier (geometric)?\n2) State the starting value and the rule.\n3) Use the explicit rule for a single value or CAS for many.\n4) For percentages, convert to a multiplier or to a periodic rate first.\n5) For comparisons, convert to the EFFECTIVE annual rate.\n\nFINANCIAL applications:\n• Simple interest / flat-rate depreciation → arithmetic\n• Compound interest / reducing-balance depreciation → geometric\n• Quoted nominal rates with sub-annual compounding → use periodic rate and effective rate.",
      keyPoints: [
        "Arithmetic: constant addition d each step (linear, simple interest)",
        "Geometric: constant multiplier R each step (exponential, compound interest)",
        "Explicit rules: uₙ = a + n·d  or  uₙ = a·Rⁿ",
        "Convert percentages: R = 1 ± r/100",
        "Effective annual rate = (1 + r/(100·n))ⁿ − 1",
      ],
      workedExamples: [
        {
          problem: "$10 000 invested at 4.8% p.a. compounded MONTHLY. Find the balance after 3 years and the effective annual rate.",
          steps: [
            "Periodic rate = 4.8/12 = 0.4% per month → R = 1.004",
            "Number of periods in 3 years = 36",
            "Balance = 10 000 · 1.004³⁶ ≈ 10 000 · 1.15469 ≈ $11 546.93",
            "Effective annual = (1.004)¹² − 1 ≈ 0.04907 = 4.91%",
          ],
          answer: "Balance ≈ $11 546.93; effective annual rate ≈ 4.91%.",
        },
      ],
      tips: [
        "Identify type FIRST — arithmetic or geometric",
        "Convert percentages and time periods carefully before using CAS",
        "Explicit rule is fastest for one value; spreadsheet for many",
      ],
      definitions: [
        { term: "Arithmetic sequence", meaning: "A sequence with a constant common difference d each step." },
        { term: "Geometric sequence", meaning: "A sequence with a constant common ratio R each step." },
        { term: "Effective annual rate", meaning: "The annual rate equivalent to the actual compounding scheme; used for fair comparison." },
      ],
      formulas: [
        { name: "Arithmetic recurrence", formula: "u_{n+1} = uₙ + d,  uₙ = a + n·d" },
        { name: "Geometric recurrence", formula: "u_{n+1} = R·uₙ,  uₙ = a·Rⁿ" },
        { name: "Compound interest", formula: "uₙ = a·(1 + r/100)ⁿ" },
        { name: "Reducing-balance", formula: "uₙ = a·(1 − r/100)ⁿ" },
        { name: "Effective annual rate", formula: "(1 + r/(100·n))ⁿ − 1" },
      ],
      examQuestion: {
        problem: "A laptop bought for $2400 depreciates at 18% p.a. (reducing balance). (a) Write the recurrence. (b) Use the explicit rule to find its value after 4 years. (c) State the type of model.",
        solution: [
          "(a) R = 0.82; u_{n+1} = 0.82·uₙ, u₀ = 2400",
          "(b) u₄ = 2400 · 0.82⁴ ≈ 2400 · 0.45212 ≈ $1085.08",
          "(c) Geometric (reducing-balance) decay model",
        ],
        answer: "(a) u_{n+1} = 0.82·uₙ, u₀ = 2400; (b) ≈ $1085.08; (c) geometric decay.",
        marks: 4,
      },
      commonErrors: [
        "Mixing up arithmetic and geometric models",
        "Adding the percentage instead of converting to multiplier",
        "Comparing nominal rates with different compounding frequencies",
        "Rounding R or i too early",
      ],
      summary: [
        "Arithmetic ↔ simple interest, flat depreciation",
        "Geometric ↔ compound interest, reducing-balance",
        "Explicit rules speed up direct predictions",
        "Use effective annual rate for fair comparisons",
      ],
      practice: [
        { question: "u_{n+1} = uₙ + 25, u₀ = 100. u₆?", answer: "100 + 6(25) = 250." },
        { question: "u_{n+1} = 1.04·uₙ, u₀ = 5000. u₃?", answer: "5000 · 1.04³ ≈ 5624.32." },
        { question: "Effective for 9% p.a. monthly?", answer: "(1 + 0.09/12)¹² − 1 ≈ 9.38%." },
        { question: "Type of model: $50 added every week to a jar?", answer: "Arithmetic (linear)." },
      ],
      quiz: [
        { question: "Compound interest is which type?", options: ["Arithmetic", "Geometric", "Constant", "Mixed"], correctAnswer: 1, explanation: "Each year multiplies the current balance." },
        { question: "Explicit form of u_{n+1} = uₙ + 7, u₀ = 3:", options: ["uₙ = 3·7ⁿ", "uₙ = 3 + 7n", "uₙ = 7 + 3n", "uₙ = 7n"], correctAnswer: 1, explanation: "uₙ = a + n·d." },
        { question: "Effective rate is used to:", options: ["Hide cost", "Compare fairly", "Reduce interest", "Replace nominal"], correctAnswer: 1, explanation: "Lets you compare different compounding frequencies." },
        { question: "Reducing-balance over many years approaches:", options: ["Negative", "Zero", "Constant", "Original"], correctAnswer: 1, explanation: "Geometric decay with 0 < R < 1 approaches 0." },
      ],
    },
  ],
};
