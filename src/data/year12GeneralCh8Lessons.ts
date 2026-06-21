import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 8: Loans, Investments and Annuities (VCE Unit 4)
// Reducing-balance loans, annuities, perpetuities and amortisation using recursion + finance solver.

export const year12GeneralCh8Lessons: TopicLessonsMap = {
  // ─── 8A: Compound Interest Modelling ───────────────────────────────
  "y12g-ch8-8a-compound-interest": [
    {
      title: "Compound Interest as a Recurrence Relation",
      explanation:
        "Compound interest is interest calculated on the PRINCIPAL plus all previously earned interest. Each compounding period the balance is multiplied by a constant growth multiplier R = 1 + r/100, where r is the interest rate per compounding period.\n\nAs a recurrence relation:\n  V_{n+1} = R · V_n,  V_0 = principal\nwhere V_n is the balance after n compounding periods.\n\nThe explicit (closed) form is:\n  V_n = V_0 · R^n.\n\nINTEREST RATE CONVERSION. VCAA quotes a NOMINAL ANNUAL rate that must be divided by the number of compounding periods per year:\n  r_period = r_annual / k,\nwhere k = 1 (annually), 2 (semi-annually), 4 (quarterly), 12 (monthly), 26 (fortnightly), 52 (weekly), 365 (daily).\n\nCAS — TI-Nspire: Finance Solver (menu → Finance → Finance Solver). For a pure compound investment use PMT = 0.\nCAS — ClassPad: Financial app → Compound Interest. Set N, I%, PV, PMT = 0, FV, P/Y, C/Y.\nSign convention: money OUT of you is NEGATIVE; money IN is POSITIVE. PV is normally entered as a negative number for an investment you make.",
      keyPoints: [
        "R = 1 + r/100 is the growth multiplier per period",
        "V_{n+1} = R · V_n is the recurrence; V_n = V_0·R^n is the explicit form",
        "Always convert annual rate to PER-PERIOD rate first",
        "On the finance solver: PMT = 0 for pure compound interest",
        "Sign convention: PV negative if you invest, FV positive if you receive",
      ],
      workedExamples: [
        {
          problem: "$5000 is invested at 6% per annum compounding monthly. Find the balance after 3 years.",
          steps: [
            "Per-period rate: r = 6/12 = 0.5% per month, so R = 1.005",
            "Number of periods: n = 3 × 12 = 36",
            "Recurrence: V_{n+1} = 1.005·V_n, V_0 = 5000",
            "Explicit: V_36 = 5000 × 1.005^36 = 5000 × 1.196680… = 5983.40",
          ],
          answer: "$5983.40 (to the nearest cent).",
        },
        {
          problem: "An investment of $2000 grows to $2500 after 4 years compounding quarterly. Find the nominal annual interest rate.",
          steps: [
            "n = 4 × 4 = 16 quarters; 2500 = 2000 · R^16",
            "R^16 = 1.25, so R = 1.25^(1/16) = 1.014082…",
            "Per-period rate r_q = 1.4082% per quarter",
            "Nominal annual rate = 1.4082 × 4 = 5.633%",
          ],
          answer: "Approximately 5.63% per annum compounded quarterly.",
        },
      ],
      tips: [
        "Always check P/Y and C/Y match the compounding frequency",
        "Keep full precision in CAS; round only the final dollar value",
        "Cross-check explicit calculation with the finance solver",
      ],
      definitions: [
        { term: "Principal (PV)", meaning: "The initial amount invested or borrowed." },
        { term: "Compounding period", meaning: "The interval over which interest is added to the balance." },
        { term: "Nominal annual rate", meaning: "The yearly rate quoted before compounding adjustment." },
        { term: "Growth multiplier R", meaning: "1 + r/100 where r is the per-period interest rate." },
      ],
      formulas: [
        { name: "Recurrence", formula: "V_{n+1} = R·V_n,  V_0 = P" },
        { name: "Explicit", formula: "V_n = P · R^n" },
        { name: "Per-period rate", formula: "r_period = r_annual / k" },
      ],
      examQuestion: {
        problem: "$10 000 is invested at 4.8% p.a. compounding monthly. Write the recurrence relation and find the balance after 5 years.",
        solution: [
          "Per-period rate: 4.8/12 = 0.4%, so R = 1.004",
          "Recurrence: V_{n+1} = 1.004·V_n, V_0 = 10000",
          "n = 60 months",
          "V_60 = 10000 × 1.004^60 = 10000 × 1.270489… = $12 704.89",
        ],
        answer: "Recurrence V_{n+1} = 1.004·V_n, V_0 = 10 000; balance = $12 704.89.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to divide the annual rate by the number of compounding periods",
        "Using r instead of 1 + r/100 as the growth multiplier",
        "Rounding the multiplier R prematurely",
        "Wrong sign on PV/FV in the finance solver",
      ],
      summary: [
        "Compound interest grows geometrically",
        "R = 1 + r/100 per period; V_n = P·R^n",
        "Convert annual rate to per-period rate before substituting",
        "Finance solver: PMT = 0 for pure compound interest",
      ],
      practice: [
        { question: "$3000 at 5% p.a. compounding annually for 7 years.", answer: "3000 × 1.05^7 ≈ $4221.30" },
        { question: "What multiplier R applies to a 7.2% p.a. rate compounding monthly?", answer: "R = 1 + 0.072/12 = 1.006" },
      ],
      quiz: [
        {
          question: "Which recurrence models $5000 at 9% p.a. compounding monthly?",
          options: ["V_{n+1} = 1.09·V_n", "V_{n+1} = 1.0075·V_n", "V_{n+1} = V_n + 0.09", "V_{n+1} = 1.009·V_n"],
          correctAnswer: 1,
          explanation: "Per-period rate = 9/12 = 0.75%, so R = 1.0075.",
        },
        {
          question: "An investment doubles in 12 years compounding annually. The annual rate is closest to:",
          options: ["4.5%", "5.9%", "7.2%", "8.0%"],
          correctAnswer: 1,
          explanation: "2 = R^12 → R = 2^(1/12) ≈ 1.0595, so r ≈ 5.95%.",
        },
        {
          question: "On a finance solver for a pure compound interest investment, PMT should be:",
          options: ["Equal to PV", "Equal to FV", "Zero", "Negative interest"],
          correctAnswer: 2,
          explanation: "No periodic payment is made for pure compound interest, so PMT = 0.",
        },
      ],
    },
  ],

  // ─── 8B: Recurrence Relations for Loans & Annuities ────────────────
  "y12g-ch8-8b-loans-annuities-recurrence": [
    {
      title: "Recurrence Relations for Reducing-Balance Loans and Annuities",
      explanation:
        "A REDUCING-BALANCE LOAN is a loan where each payment is partly interest on the outstanding balance and partly principal repayment. Each period the balance grows by interest then is reduced by the payment.\n\nLoan recurrence (payment D each period):\n  V_{n+1} = R·V_n − D,  V_0 = principal,\nwhere R = 1 + r/100 is the per-period growth multiplier and D is the regular payment. The balance V_n DECREASES toward zero.\n\nAn ANNUITY is the financial mirror image: a lump sum is invested and equal withdrawals D are made each period. The recurrence is identical:\n  V_{n+1} = R·V_n − D,  V_0 = principal invested.\nThe balance again decreases toward zero (the annuity 'runs out').\n\nAn ANNUITY INVESTMENT (savings plan / superannuation) is the third pattern: a balance grows AND a regular deposit D is added each period:\n  V_{n+1} = R·V_n + D,  V_0 = initial deposit.\nHere the balance INCREASES.\n\nSign-convention rule of thumb on a finance solver:\n  • Reducing-balance loan: PV positive (you receive the loan), PMT negative (you pay), FV ≈ 0.\n  • Annuity (drawdown): PV negative (you invest), PMT positive (you receive), FV = 0.\n  • Savings plan: PV negative (initial deposit), PMT negative (you deposit), FV positive (you withdraw at end).",
      keyPoints: [
        "Loan / drawdown annuity: V_{n+1} = R·V_n − D",
        "Savings annuity (annuity investment): V_{n+1} = R·V_n + D",
        "R = 1 + r/100 per period; r is per-period rate",
        "Convert annual rate before substituting",
        "Sign convention determines whether PMT is + or − on the solver",
      ],
      workedExamples: [
        {
          problem: "Anika borrows $20 000 at 6% p.a. compounding monthly with monthly repayments of $400. Write the recurrence and find the balance after the 1st and 2nd repayments.",
          steps: [
            "Per-period rate: 6/12 = 0.5%, R = 1.005",
            "Recurrence: V_{n+1} = 1.005·V_n − 400, V_0 = 20 000",
            "V_1 = 1.005(20 000) − 400 = 20 100 − 400 = 19 700",
            "V_2 = 1.005(19 700) − 400 = 19 798.50 − 400 = 19 398.50",
          ],
          answer: "Recurrence V_{n+1} = 1.005·V_n − 400, V_0 = 20 000; V_1 = $19 700, V_2 = $19 398.50.",
        },
        {
          problem: "$50 000 is invested at 4.8% p.a. compounding monthly with monthly withdrawals of $500. Find the balance after 3 months.",
          steps: [
            "R = 1.004; V_0 = 50 000",
            "V_1 = 1.004(50 000) − 500 = 50 200 − 500 = 49 700",
            "V_2 = 1.004(49 700) − 500 = 49 898.80 − 500 = 49 398.80",
            "V_3 = 1.004(49 398.80) − 500 = 49 596.40 − 500 = 49 096.40",
          ],
          answer: "$49 096.40 after 3 months.",
        },
      ],
      tips: [
        "If balance is decreasing each step, the recurrence has '− D'",
        "If balance is increasing despite a payment, deposits exceed interest—use '+ D'",
        "Always show V_0 explicitly when writing the recurrence",
      ],
      definitions: [
        { term: "Reducing-balance loan", meaning: "A loan where interest is charged on the outstanding balance and each payment reduces the principal." },
        { term: "Annuity", meaning: "A lump sum invested to fund equal regular withdrawals." },
        { term: "Annuity investment", meaning: "A savings plan where regular deposits are added to a compounding balance." },
      ],
      formulas: [
        { name: "Loan / annuity drawdown", formula: "V_{n+1} = R·V_n − D" },
        { name: "Annuity investment (savings)", formula: "V_{n+1} = R·V_n + D" },
      ],
      examQuestion: {
        problem: "A loan of $15 000 is taken at 7.2% p.a. compounding monthly with monthly repayments of $350. Write the recurrence relation and compute the balance after 2 repayments.",
        solution: [
          "r = 7.2/12 = 0.6%, R = 1.006",
          "V_{n+1} = 1.006·V_n − 350, V_0 = 15 000",
          "V_1 = 1.006(15 000) − 350 = 15 090 − 350 = 14 740",
          "V_2 = 1.006(14 740) − 350 = 14 828.44 − 350 = 14 478.44",
        ],
        answer: "V_2 = $14 478.44.",
        marks: 3,
      },
      commonErrors: [
        "Mixing the loan recurrence (− D) with the savings recurrence (+ D)",
        "Forgetting to convert the annual rate",
        "Subtracting the payment BEFORE applying interest (wrong order)",
      ],
      summary: [
        "Loan / drawdown: balance multiplied by R, then payment subtracted",
        "Savings: balance multiplied by R, then deposit added",
        "Order matters: interest first, payment second",
      ],
      practice: [
        { question: "Loan $10 000, 6% p.a. monthly, payment $200. Balance after 1 month?", answer: "1.005(10 000) − 200 = $9850" },
        { question: "Savings $1000 + $50/month at 12% p.a. monthly. Balance after 1 month?", answer: "1.01(1000) + 50 = $1060" },
      ],
      quiz: [
        {
          question: "Which recurrence models a reducing-balance loan?",
          options: ["V_{n+1} = R·V_n + D", "V_{n+1} = R·V_n − D", "V_{n+1} = V_n − R·D", "V_{n+1} = V_n − D + V_n·R"],
          correctAnswer: 1,
          explanation: "Interest grows the balance by R, then payment D reduces it.",
        },
        {
          question: "On a TI-Nspire finance solver, an annuity drawdown typically has:",
          options: ["PV negative, PMT positive", "PV positive, PMT positive", "PV negative, PMT negative", "PV positive, PMT negative"],
          correctAnswer: 0,
          explanation: "You invest (money out, PV−) and receive payments (money in, PMT+).",
        },
        {
          question: "If a savings plan has balance increasing each month, which recurrence applies?",
          options: ["V_{n+1} = R·V_n − D", "V_{n+1} = D − R·V_n", "V_{n+1} = R·V_n + D", "V_{n+1} = V_n − D"],
          correctAnswer: 2,
          explanation: "Deposits add to the compounding balance.",
        },
      ],
    },
  ],

  // ─── 8C: Amortisation Tables ───────────────────────────────────────
  "y12g-ch8-8c-amortisation-tables": [
    {
      title: "Amortisation Tables",
      explanation:
        "An AMORTISATION TABLE breaks down each payment of a loan or annuity into:\n  • interest charged that period\n  • principal reduction that period\n  • remaining balance.\n\nFor each row n:\n  Interest_n = r · V_{n−1}     (where r is the per-period decimal rate)\n  Principal reduction_n = D − Interest_n\n  Balance_n = V_{n−1} − Principal reduction_n  =  R·V_{n−1} − D\n\nObservations as the table progresses:\n  • Interest portion DECREASES each period (because balance shrinks).\n  • Principal portion INCREASES each period.\n  • Total of all principal reductions = original loan amount.\n  • Total of all interest = total interest paid over the loan.\n\nFor an annuity drawdown, replace 'principal reduction' with 'principal withdrawn' — the structure is identical.\n\nCAS spreadsheet construction (TI-Nspire Lists & Spreadsheet or ClassPad Spreadsheet):\n  Column A: Period n\n  Column B: Payment (constant D)\n  Column C: Interest = rate × previous balance\n  Column D: Principal reduction = B − C\n  Column E: Balance = previous E − D",
      keyPoints: [
        "Interest = r × balance at START of period",
        "Principal reduction = payment − interest",
        "New balance = old balance − principal reduction",
        "Interest portion decreases; principal portion increases",
        "Sum of principal reductions = original loan",
      ],
      workedExamples: [
        {
          problem: "Loan $1000 at 12% p.a. compounding monthly, payment $200/month. Construct the first 3 rows of the amortisation table.",
          steps: [
            "r = 12/12 = 1% per month = 0.01",
            "Period 1: Interest = 0.01(1000) = 10.00; Principal = 200 − 10 = 190.00; Balance = 1000 − 190 = 810.00",
            "Period 2: Interest = 0.01(810) = 8.10; Principal = 200 − 8.10 = 191.90; Balance = 810 − 191.90 = 618.10",
            "Period 3: Interest = 0.01(618.10) = 6.181 ≈ 6.18; Principal = 200 − 6.18 = 193.82; Balance = 618.10 − 193.82 = 424.28",
          ],
          answer: "Balances: $810.00, $618.10, $424.28.",
        },
      ],
      tips: [
        "Always compute interest from the balance at the START of the period",
        "Round only when reporting the final answer; keep CAS precision in the table",
        "Last payment is often slightly different to clear the loan exactly",
      ],
      definitions: [
        { term: "Amortisation", meaning: "The process of paying down a loan with regular payments split between interest and principal." },
        { term: "Principal reduction", meaning: "The portion of a payment that reduces the outstanding balance." },
      ],
      formulas: [
        { name: "Interest each period", formula: "I_n = r · V_{n−1}" },
        { name: "Principal reduction", formula: "P_n = D − I_n" },
        { name: "New balance", formula: "V_n = V_{n−1} − P_n" },
      ],
      examQuestion: {
        problem: "Loan $5000 at 6% p.a. compounding monthly with monthly repayments of $250. Find the interest and principal reduction in the SECOND repayment.",
        solution: [
          "r = 0.005 per month",
          "Period 1: I = 0.005(5000) = 25; P = 250 − 25 = 225; V_1 = 4775",
          "Period 2: I = 0.005(4775) = 23.875 ≈ $23.88; P = 250 − 23.88 = $226.13",
        ],
        answer: "Interest ≈ $23.88, principal reduction ≈ $226.13.",
        marks: 3,
      },
      commonErrors: [
        "Computing interest from the END-of-period balance",
        "Forgetting that principal reduction = payment − interest, not payment − R·V",
        "Rounding mid-table and accumulating errors",
      ],
      summary: [
        "Interest first, principal next, balance last",
        "Interest shrinks, principal grows over time",
        "Total interest = sum of column C",
      ],
      practice: [
        { question: "Loan $2000, 6% p.a. monthly, payment $300. Interest in period 1?", answer: "0.005 × 2000 = $10.00" },
        { question: "Same loan: principal reduction in period 1?", answer: "300 − 10 = $290.00" },
      ],
      quiz: [
        {
          question: "In an amortisation table, the interest portion of each successive payment:",
          options: ["Increases", "Stays constant", "Decreases", "Equals the principal portion"],
          correctAnswer: 2,
          explanation: "Balance falls, so interest = r × balance also falls.",
        },
        {
          question: "Loan balance is $4000, monthly rate 0.5%, payment $300. The principal reduction is:",
          options: ["$20", "$280", "$300", "$320"],
          correctAnswer: 1,
          explanation: "Interest = 0.005 × 4000 = $20; principal = 300 − 20 = $280.",
        },
        {
          question: "The total of all principal reductions in an amortisation table equals:",
          options: ["Total interest paid", "Final payment", "Original loan amount", "Number of payments × payment"],
          correctAnswer: 2,
          explanation: "Every dollar of principal must be repaid by the end.",
        },
      ],
    },
  ],

  // ─── 8D: Financial Problem Solving Using Amortisation ──────────────
  "y12g-ch8-8d-amortisation-problem-solving": [
    {
      title: "Financial Problem Solving Using Amortisation",
      explanation:
        "Many VCAA exam questions describe a financial scenario in words and require you to extract the numeric inputs, choose the appropriate recurrence, and answer in context.\n\nTYPICAL QUESTION TYPES:\n  1. Find balance after n payments.\n  2. Find total interest paid (= total of payments − amount borrowed for a loan).\n  3. Find total amount repaid (= D × number of payments + final adjusted payment).\n  4. Find the principal reduction or interest portion of the kth payment.\n  5. Find the final payment to clear the balance exactly.\n\nA KEY EXAM HABIT: when working from a table, identify Period n, the payment D, the per-period rate r, and use\n  Interest_n = r · V_{n−1},   Principal_n = D − Interest_n,   V_n = V_{n−1} − Principal_n.\n\nFINAL PAYMENT: the last payment is usually slightly less than D because the balance after the second-to-last payment is less than D. Compute the residual balance, then the final payment = balance × R.",
      keyPoints: [
        "Total payments = D × n",
        "Total interest = total payments − amount borrowed",
        "Final payment = (balance after second-last payment) × R",
        "Always answer in context (dollars and cents, units)",
      ],
      workedExamples: [
        {
          problem: "Loan $20 000 at 6% p.a. monthly over 5 years with monthly repayments of $386.66. Find the total interest paid.",
          steps: [
            "Number of payments = 5 × 12 = 60",
            "Total payments ≈ 60 × 386.66 = 23 199.60",
            "Total interest = 23 199.60 − 20 000 = 3199.60",
          ],
          answer: "Approximately $3199.60.",
        },
        {
          problem: "After 23 monthly repayments of $250 on a loan, the balance is $148.32 (rate 0.5% per month). Find the final payment that exactly clears the loan in payment 24.",
          steps: [
            "Apply one more month of interest: 148.32 × 1.005 = 149.06 (to 2 dp)",
            "Final payment = $149.06 (instead of $250)",
          ],
          answer: "Final payment = $149.06.",
        },
      ],
      tips: [
        "Read carefully: 'amount borrowed' vs 'total repaid' vs 'total interest'",
        "Final payment ≠ D — always recompute",
        "Use the finance solver to cross-check",
      ],
      definitions: [
        { term: "Total interest", meaning: "Sum of all interest charges over the life of the loan." },
        { term: "Final payment", meaning: "The adjusted last payment that exactly reduces the balance to zero." },
      ],
      formulas: [
        { name: "Total interest (loan)", formula: "Interest = (D × n + final payment adj) − P" },
        { name: "Final payment", formula: "F = V_{n−1} × R" },
      ],
      examQuestion: {
        problem: "Hannah invests $30 000 in an annuity at 4.2% p.a. compounding monthly and withdraws $600/month. Find the balance after 12 months and the total amount withdrawn in that year.",
        solution: [
          "r = 4.2/12 = 0.35%, R = 1.0035",
          "Recurrence: V_{n+1} = 1.0035·V_n − 600, V_0 = 30 000",
          "Use CAS sequence to compute V_12 ≈ $24 058.45",
          "Total withdrawn = 12 × 600 = $7200",
        ],
        answer: "Balance ≈ $24 058.45; total withdrawn = $7200.",
        marks: 4,
      },
      commonErrors: [
        "Confusing 'amount remaining' with 'amount paid'",
        "Using D as the final payment without adjustment",
        "Missing the final adjusted payment in the total interest calculation",
      ],
      summary: [
        "Identify rate, payment, periods, and recurrence type before computing",
        "Always state answer in context with $ and 2 dp",
        "Cross-check with finance solver",
      ],
      practice: [
        { question: "Loan $5000 paid off in 24 monthly payments of $230. Total interest?", answer: "24 × 230 − 5000 = $520" },
      ],
      quiz: [
        {
          question: "A loan of $10 000 is repaid with 60 monthly payments of $200. Total interest paid is:",
          options: ["$2000", "$1000", "$200", "Cannot be determined without rate"],
          correctAnswer: 0,
          explanation: "Total = 60 × 200 = $12 000; interest = 12 000 − 10 000 = $2000.",
        },
        {
          question: "If the balance after the second-last payment is $97.04 and R = 1.005, the final payment is:",
          options: ["$97.04", "$97.53", "$200", "$97.00"],
          correctAnswer: 1,
          explanation: "97.04 × 1.005 ≈ $97.53.",
        },
      ],
    },
  ],

  // ─── 8E: Finance Solver — Balance & Final Payment ──────────────────
  "y12g-ch8-8e-finance-solver-balance": [
    {
      title: "Using the Finance Solver: Balance & Final Payment",
      explanation:
        "The FINANCE SOLVER (TVM Solver) lets you enter five of the six variables and solve for the unknown:\n  • N = number of compounding periods\n  • I% = nominal annual interest rate\n  • PV = present value\n  • PMT = regular payment\n  • FV = future value\n  • PpY / CpY = payments per year / compounds per year.\n\nSIGN CONVENTION (cash-flow rule):\n  • Money OUT of you is NEGATIVE.\n  • Money IN to you is POSITIVE.\n\nCommon scenarios:\n  • Reducing-balance loan: PV positive (you receive), PMT negative (you pay), FV = 0.\n  • Annuity drawdown: PV negative (you invest), PMT positive (you receive), FV = 0.\n  • Savings plan: PV negative, PMT negative, FV positive.\n\nTo find the BALANCE after k payments, set N = k and solve for FV. The displayed FV (with sign flipped) is the outstanding balance.\n\nTo find the FINAL PAYMENT that clears the loan exactly, set FV = 0 with N = total number of periods and solve for PMT — this gives the EXACT regular payment. If the regular payment is rounded up, the FINAL payment is the residual balance compounded one more period.",
      keyPoints: [
        "Solve for any one of N, I%, PV, PMT, FV with the others fixed",
        "Sign convention is critical: out = negative, in = positive",
        "Balance after k periods = solve for FV with N = k",
        "Final payment = balance after second-last payment × R",
      ],
      workedExamples: [
        {
          problem: "Loan $25 000 at 6% p.a. monthly, repayment $480/month. Find the balance after 24 months.",
          steps: [
            "Set N = 24, I% = 6, PV = 25 000, PMT = −480, P/Y = C/Y = 12",
            "Solve for FV → FV ≈ −16 058.32",
            "Outstanding balance = $16 058.32 (sign flipped)",
          ],
          answer: "Balance after 2 years ≈ $16 058.32.",
        },
        {
          problem: "$15 000 invested as an annuity at 5.4% p.a. monthly, $400/month withdrawals. After 36 withdrawals, what is the balance?",
          steps: [
            "Set N = 36, I% = 5.4, PV = −15 000, PMT = 400, P/Y = C/Y = 12",
            "Solve for FV → FV ≈ 2030.71",
            "Balance ≈ $2030.71",
          ],
          answer: "≈ $2030.71.",
        },
      ],
      tips: [
        "Set P/Y and C/Y BEFORE entering numbers — changing them later may rescale fields",
        "Check sign of PMT; reversed sign gives wildly wrong FV",
        "When a question asks for 'amount still owing', read FV and flip sign",
      ],
      definitions: [
        { term: "FV (Future Value)", meaning: "Balance at the end of N periods. Negative for an outstanding loan when PV positive; positive for a savings target when PV negative." },
        { term: "PMT", meaning: "Regular periodic payment with sign according to cash-flow direction." },
      ],
      formulas: [
        { name: "Final payment", formula: "F = V_{n−1}·R" },
      ],
      examQuestion: {
        problem: "Loan $40 000 at 7.2% p.a. monthly, paid in 60 monthly repayments. Find the regular monthly repayment, then the final payment if the regular payment is rounded UP to the nearest cent.",
        solution: [
          "Solve for PMT: N = 60, I% = 7.2, PV = 40 000, FV = 0, P/Y = C/Y = 12",
          "PMT ≈ −796.184… → rounded up to −$796.19",
          "Re-enter PMT = −796.19 and solve for FV after N = 59 → balance ≈ $791.84",
          "Final payment = 791.84 × 1.006 ≈ $796.59",
        ],
        answer: "Regular payment ≈ $796.19; final payment ≈ $796.59.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting to flip the sign on the displayed FV",
        "Using P/Y ≠ C/Y when the question states they are equal",
        "Treating final payment = regular payment",
      ],
      summary: [
        "Finance solver finds any one unknown of N, I%, PV, PMT, FV",
        "Sign convention: out = −, in = +",
        "Final payment requires recomputing the residual balance",
      ],
      practice: [
        { question: "Loan $8000, 6% p.a. monthly, 24 payments. Find PMT.", answer: "PMT ≈ −$354.61 per month" },
      ],
      quiz: [
        {
          question: "On the finance solver, an outstanding loan balance appears as:",
          options: ["Positive FV", "Negative FV", "Zero FV", "Negative PV"],
          correctAnswer: 1,
          explanation: "If PV was entered positive (money received), the FV (still owing, money still to pay) is negative.",
        },
        {
          question: "The exact final payment of a loan equals:",
          options: ["The regular payment", "The balance one period before, multiplied by R", "Zero", "The total of all interest paid"],
          correctAnswer: 1,
          explanation: "Compound the residual balance one more period.",
        },
      ],
    },
  ],

  // ─── 8F: Finance Solver — Interest Rates & Time ────────────────────
  "y12g-ch8-8f-finance-solver-rate-time": [
    {
      title: "Solving for Interest Rate and Loan Term",
      explanation:
        "When the unknown is the INTEREST RATE or the NUMBER OF PERIODS, the recurrence cannot be solved algebraically without logarithms or iteration. Use the finance solver to solve for I% or N directly.\n\nSolving for I%:\n  Enter N, PV, PMT, FV, P/Y, C/Y. Place the cursor on I% and press SOLVE. The result is the NOMINAL ANNUAL RATE.\n\nSolving for N:\n  Enter I%, PV, PMT, FV, P/Y, C/Y. Solve for N. N is usually NOT an integer — round UP to the next whole period to determine when the loan is fully repaid (the final payment will be smaller).\n\nINTERPRETATION OF NON-INTEGER N:\n  • If N = 47.6, the loan is repaid during the 48th period.\n  • Total time = 48 periods (the final payment is the small residual).\n  • Convert periods to years: divide by P/Y.\n\nA classic VCAA structure: 'After how many full months will the balance first fall below $X?' — set FV = −X and solve for N; round UP.",
      keyPoints: [
        "Finance solver solves for I% or N when other 4 inputs are known",
        "I% is always the NOMINAL ANNUAL rate",
        "N usually rounds UP for total loan term",
        "Convert N to years by dividing by P/Y",
      ],
      workedExamples: [
        {
          problem: "Loan $18 000, 60 monthly repayments of $360. Find the nominal annual interest rate.",
          steps: [
            "Set N = 60, PV = 18 000, PMT = −360, FV = 0, P/Y = C/Y = 12",
            "Solve for I% → I ≈ 7.42%",
          ],
          answer: "Approximately 7.42% p.a. compounding monthly.",
        },
        {
          problem: "Loan $12 000 at 7.2% p.a. monthly, repayments $250/month. After how many months is the loan fully repaid?",
          steps: [
            "Set I = 7.2, PV = 12 000, PMT = −250, FV = 0, P/Y = C/Y = 12",
            "Solve for N → N ≈ 56.4",
            "Round up to 57 months — final payment is smaller",
          ],
          answer: "57 months.",
        },
      ],
      tips: [
        "Always answer N as a whole number of periods",
        "If the question asks for years, divide by P/Y",
        "Sense-check: shorter term should give higher PMT, higher rate gives higher PMT",
      ],
      definitions: [
        { term: "Nominal annual rate", formula: "" } as any,
      ].filter((d) => "meaning" in d) as any,
      formulas: [
        { name: "Periods to years", formula: "Years = N / P/Y" },
      ],
      examQuestion: {
        problem: "An annuity of $50 000 earns 4.8% p.a. monthly with monthly withdrawals of $500. After how many months will the annuity first be exhausted?",
        solution: [
          "Set I = 4.8, PV = −50 000, PMT = 500, FV = 0, P/Y = C/Y = 12",
          "Solve for N → N ≈ 130.5",
          "Round up to 131 months",
        ],
        answer: "After 131 months (≈ 10 years 11 months).",
        marks: 3,
      },
      commonErrors: [
        "Reporting N as a decimal instead of rounding up",
        "Rounding I% before reporting",
        "Forgetting that I% is annual, not per-period",
      ],
      summary: [
        "Finance solver finds I% or N when other inputs are known",
        "Round N UP for total loan term",
        "Convert to years for context where required",
      ],
      practice: [
        { question: "Loan $10 000 at 6% p.a. monthly, payments $300. Find N.", answer: "N ≈ 36.6 → 37 months" },
      ],
      quiz: [
        {
          question: "If the finance solver returns N = 23.8 for a loan, the loan is fully repaid in:",
          options: ["23 periods", "24 periods", "23.8 periods", "Cannot be determined"],
          correctAnswer: 1,
          explanation: "Round up: a partial 24th payment clears the balance.",
        },
        {
          question: "I% on the solver represents:",
          options: ["Per-period rate", "Effective annual rate", "Nominal annual rate", "Monthly decimal rate"],
          correctAnswer: 2,
          explanation: "I% is the nominal annual percentage; CpY converts it to per-period.",
        },
      ],
    },
  ],

  // ─── 8G: Advanced Financial Modelling ──────────────────────────────
  "y12g-ch8-8g-advanced-financial-modelling": [
    {
      title: "Advanced Financial Modelling: Multi-Stage and Variable-Rate Scenarios",
      explanation:
        "Real loans and investments often have multiple stages: the interest rate or payment changes part-way through, or extra lump-sum payments are made.\n\nMULTI-STAGE STRATEGY:\n  1. Compute the balance at the END of stage 1 using the finance solver (FV with stage-1 inputs).\n  2. Use that FV as the NEW PV for stage 2.\n  3. Apply stage-2 inputs and solve for the next required quantity.\n\nLUMP-SUM PAYMENTS: subtract the lump sum from the balance at the moment it is paid, then continue the recurrence with the same payment D and rate.\n\nINTEREST-RATE CHANGES: when a rate rises or falls mid-loan, recompute the new monthly payment to maintain the same final term, OR keep payments the same and let the term change. VCAA usually states which.\n\nINFLATION-LINKED MODELS: the real value of money decreases over time. To compare a future amount to today's value, divide by the inflation factor (1 + i)^n where i is the per-period inflation rate.",
      keyPoints: [
        "Multi-stage problems: stage 1 FV becomes stage 2 PV",
        "Lump sums modify the balance instantly, then continue",
        "Rate changes: either repayment or term must adjust",
        "Inflation reduces real value; divide by (1 + i)^n",
      ],
      workedExamples: [
        {
          problem: "Loan $200 000 at 5% p.a. monthly with $1500/month repayments. After 5 years the rate rises to 6% p.a. monthly; repayments are unchanged. Find the new balance after a further 5 years.",
          steps: [
            "Stage 1: N = 60, I = 5, PV = 200 000, PMT = −1500, P/Y = C/Y = 12 → solve FV ≈ −155 282 (balance ≈ $155 282)",
            "Stage 2: PV = 155 282, I = 6, PMT = −1500, N = 60 → solve FV ≈ −115 460",
            "Balance after 10 years ≈ $115 460",
          ],
          answer: "Approximately $115 460.",
        },
      ],
      tips: [
        "Always restart the solver between stages with fresh PV",
        "Watch sign conventions when transferring FV to next-stage PV",
        "Diagram the timeline: when does each rate apply?",
      ],
      definitions: [
        { term: "Multi-stage loan", meaning: "A loan whose terms (rate, payment) change mid-life." },
        { term: "Lump-sum payment", meaning: "A one-off extra repayment in addition to regular payments." },
      ],
      formulas: [
        { name: "Real value", formula: "Real_n = Nominal_n / (1 + i)^n" },
      ],
      examQuestion: {
        problem: "Loan $150 000 at 6% p.a. monthly, repayments $1100/month. After 3 years a $20 000 lump sum is paid. Repayments remain $1100/month at 6%. Find the balance 1 year after the lump sum.",
        solution: [
          "Stage 1 (36 months): N=36, I=6, PV=150 000, PMT=−1100 → FV ≈ −139 230 (balance ≈ $139 230)",
          "Subtract lump sum: 139 230 − 20 000 = $119 230",
          "Stage 2 (12 months): PV = 119 230, I = 6, PMT = −1100, N = 12 → FV ≈ −113 853",
          "Balance ≈ $113 853",
        ],
        answer: "Approximately $113 853.",
        marks: 5,
      },
      commonErrors: [
        "Forgetting to flip sign when carrying FV to the next stage's PV",
        "Applying the lump sum BEFORE interest in the period",
        "Mixing nominal and real values",
      ],
      summary: [
        "Solve each stage separately; chain the balances together",
        "Lump sums reduce balance instantly",
        "Real value adjusts for inflation",
      ],
      practice: [
        { question: "Stage 1 balance $50 000; lump sum $5000 paid. New balance?", answer: "$45 000" },
      ],
      quiz: [
        {
          question: "When a loan's rate changes mid-term and payments stay the same:",
          options: ["The term must adjust", "The principal changes instantly", "Interest is refunded", "The loan is paid off immediately"],
          correctAnswer: 0,
          explanation: "Higher rate with same payment means more periods; lower rate fewer.",
        },
        {
          question: "To carry an FV from stage 1 into stage 2 PV on a finance solver:",
          options: ["Use FV as-is", "Negate the FV", "Use absolute value of FV", "Divide by R"],
          correctAnswer: 1,
          explanation: "PV and FV have opposite signs in the cash-flow convention.",
        },
      ],
    },
  ],

  // ─── 8H: Interest-Only Loans ───────────────────────────────────────
  "y12g-ch8-8h-interest-only": [
    {
      title: "Interest-Only Loans",
      explanation:
        "An INTEREST-ONLY LOAN charges interest each period, but the borrower pays ONLY the interest — the principal balance does NOT change.\n\nRecurrence:\n  V_{n+1} = R·V_n − D,  with D = r·V_0  (the per-period interest)\nSo V_{n+1} = V_n every period: balance is constant.\n\nKEY FEATURES:\n  • Each payment = r × principal (per-period rate × principal).\n  • Total interest over n periods = D × n.\n  • The principal must be repaid as a single lump sum at the end of the interest-only term.\n\nINTEREST-ONLY PERIODS COMMONLY APPEAR:\n  • As an introductory phase of a property loan (e.g. 5 years interest-only, then reverts to reducing-balance).\n  • In investment property finance.\n\nFINANCE SOLVER:\n  • Set FV = −PV (loan still owed in full).\n  • Solve for PMT — should equal r·PV exactly.",
      keyPoints: [
        "Payment D = r × principal; balance never changes",
        "Total interest = D × number of periods",
        "Finance solver: PMT = −r × PV with FV = −PV",
        "After interest-only phase, principal still owing in full",
      ],
      workedExamples: [
        {
          problem: "Interest-only loan $200 000 at 6% p.a. monthly. Find the monthly payment and total interest over 5 years.",
          steps: [
            "Per-period rate: 0.5% per month",
            "Monthly payment = 0.005 × 200 000 = $1000",
            "Total payments over 60 months = 60 × 1000 = $60 000 (all interest)",
            "Principal still owing = $200 000",
          ],
          answer: "Payment $1000/month; total interest $60 000; principal still $200 000.",
        },
      ],
      tips: [
        "Total cost of interest-only is usually HIGHER than reducing-balance because principal never reduces",
        "Always state that the principal is still owing at the end",
      ],
      definitions: [
        { term: "Interest-only loan", meaning: "A loan in which payments cover interest only and the principal is unchanged." },
      ],
      formulas: [
        { name: "Interest-only payment", formula: "D = r·V_0" },
      ],
      examQuestion: {
        problem: "A $350 000 interest-only loan at 4.8% p.a. monthly is held for 7 years. State the monthly repayment and the principal owing at the end.",
        solution: [
          "Per-period r = 0.4% = 0.004",
          "Monthly payment = 0.004 × 350 000 = $1400",
          "Principal at end = $350 000",
        ],
        answer: "Repayment $1400/month; principal owing = $350 000.",
        marks: 2,
      },
      commonErrors: [
        "Believing the principal decreases (it does not)",
        "Computing payment from the full reducing-balance formula",
      ],
      summary: [
        "Interest-only: D = r·V_0, balance constant",
        "Principal still owed at the end",
        "Total interest = D × n",
      ],
      practice: [
        { question: "Interest-only $100 000 at 6% p.a. monthly. Monthly payment?", answer: "$500" },
      ],
      quiz: [
        {
          question: "On a 5-year interest-only loan of $80 000 at 6% p.a. monthly, monthly payment is:",
          options: ["$400", "$1333", "$80 000", "$500"],
          correctAnswer: 0,
          explanation: "0.005 × 80 000 = $400 per month.",
        },
        {
          question: "After an interest-only phase ends, the principal owing is:",
          options: ["Zero", "Unchanged", "Reduced by total payments", "Reduced by total interest"],
          correctAnswer: 1,
          explanation: "All payments cover interest only.",
        },
      ],
    },
  ],

  // ─── 8I: Perpetuities ──────────────────────────────────────────────
  "y12g-ch8-8i-perpetuities": [
    {
      title: "Perpetuities",
      explanation:
        "A PERPETUITY is an annuity that pays a regular amount FOREVER without depleting the principal. This requires that each payment exactly equals the interest earned in that period.\n\nRecurrence:\n  V_{n+1} = R·V_n − D  with D = r·V_0,\nso V_{n+1} = V_n forever.\n\nKEY FORMULA:\n  D = r · V_0,  equivalently V_0 = D / r,\nwhere r is the per-period rate (decimal) and D is the per-period payment.\n\nWith ANNUAL rate r_annual and frequency k payments per year, the per-period rate is r = r_annual/(100k) (in decimal). The total annual income is k·D = r_annual/100 × V_0.\n\nFINANCE SOLVER:\n  Set N very large, FV = −PV — the PMT solved is effectively the perpetuity payment.\n\nAPPLICATIONS: scholarships, charitable trusts, endowments, pensions paying a fixed real amount from a fixed lump sum.",
      keyPoints: [
        "Perpetuity: payment exactly equals interest earned",
        "D = r × V_0 (per-period rate × principal)",
        "V_0 = D/r gives the principal needed",
        "Payment continues indefinitely; balance never falls",
      ],
      workedExamples: [
        {
          problem: "How much must be invested at 5% p.a. compounding monthly to provide a perpetuity of $400/month?",
          steps: [
            "Per-period rate r = 0.05/12 ≈ 0.004167",
            "V_0 = D/r = 400 / 0.004167 ≈ 96 000",
          ],
          answer: "Approximately $96 000.",
        },
        {
          problem: "$300 000 invested at 4.8% p.a. quarterly. What quarterly perpetuity does it provide?",
          steps: [
            "Per-period r = 0.048/4 = 0.012",
            "D = r × V_0 = 0.012 × 300 000 = $3600",
          ],
          answer: "$3600 per quarter.",
        },
      ],
      tips: [
        "Use the per-period rate in decimal form, not percentage",
        "Cross-check: D × k = annual interest = r_annual/100 × V_0",
      ],
      definitions: [
        { term: "Perpetuity", meaning: "An annuity that pays a fixed amount each period indefinitely without reducing the principal." },
      ],
      formulas: [
        { name: "Perpetuity payment", formula: "D = r·V_0" },
        { name: "Perpetuity principal", formula: "V_0 = D / r" },
      ],
      examQuestion: {
        problem: "A scholarship of $5000 per year is to be funded by a perpetuity at 4% p.a. compounding annually. Find the lump sum required.",
        solution: [
          "Annual rate r = 0.04",
          "V_0 = 5000 / 0.04 = $125 000",
        ],
        answer: "$125 000.",
        marks: 2,
      },
      commonErrors: [
        "Using r_annual instead of per-period r",
        "Forgetting to convert percentage to decimal",
      ],
      summary: [
        "Perpetuity pays interest only; balance never falls",
        "D = r·V_0;  V_0 = D/r",
        "Per-period r = r_annual / k in decimal form",
      ],
      practice: [
        { question: "Perpetuity of $1000/month at 6% p.a. monthly. Principal needed?", answer: "1000 / 0.005 = $200 000" },
      ],
      quiz: [
        {
          question: "A perpetuity of $200/month at 6% p.a. monthly requires a lump sum of:",
          options: ["$24 000", "$40 000", "$3333", "$200 000"],
          correctAnswer: 1,
          explanation: "r = 0.005, V_0 = 200/0.005 = $40 000.",
        },
        {
          question: "In a perpetuity, each payment equals:",
          options: ["The principal", "The interest earned that period", "Zero", "The growth multiplier"],
          correctAnswer: 1,
          explanation: "Otherwise the balance would change.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 8 ───────────────────────────────────────────
  "y12g-ch8-review": [
    {
      title: "Chapter 8 Review — Loans, Investments and Annuities",
      explanation:
        "This chapter applied recursion and the finance solver to four key scenarios:\n  1. Compound interest investments: V_{n+1} = R·V_n.\n  2. Reducing-balance loans and annuity drawdowns: V_{n+1} = R·V_n − D.\n  3. Annuity investments (savings plans): V_{n+1} = R·V_n + D.\n  4. Specialised cases: interest-only loans and perpetuities (D = r·V_0).\n\nCHOOSING THE RIGHT TOOL:\n  • Few periods → use the recurrence directly.\n  • Many periods or unknown rate/term → finance solver.\n  • Detailed breakdown of a payment → amortisation table.\n\nSIGN CONVENTION (cash-flow rule): money OUT is negative, money IN is positive.\n\nEXAM STRATEGY:\n  • Read the problem twice; identify rate, frequency, payment direction.\n  • Convert annual rate to per-period rate.\n  • Choose recurrence type based on direction of balance change.\n  • Use the finance solver to verify any non-trivial calculation.",
      keyPoints: [
        "All scenarios use V_{n+1} = R·V_n ± D",
        "R = 1 + r/100 per period; r = annual/k",
        "Sign convention determines PMT sign on solver",
        "Final payment usually adjusted to clear balance exactly",
      ],
      workedExamples: [
        {
          problem: "Tom borrows $35 000 at 7.2% p.a. monthly to be repaid in 5 years with equal monthly payments. Find the payment, total interest paid, and the interest portion of the first payment.",
          steps: [
            "I = 7.2, PV = 35 000, N = 60, FV = 0, P/Y = C/Y = 12 → PMT ≈ −696.85",
            "Total payments = 60 × 696.85 ≈ $41 811",
            "Total interest ≈ 41 811 − 35 000 = $6811",
            "First-period interest = 0.006 × 35 000 = $210",
          ],
          answer: "Payment ≈ $696.85; total interest ≈ $6811; first-period interest = $210.",
        },
      ],
      tips: [
        "Rehearse the finance-solver workflow for every scenario type",
        "Always answer in dollars and cents, with units",
        "State the recurrence relation when asked, including initial value",
      ],
      definitions: [
        { term: "Reducing balance", meaning: "Loan structure in which interest is charged on the outstanding balance." },
        { term: "Annuity", meaning: "A series of equal payments at equal intervals." },
        { term: "Perpetuity", meaning: "An annuity that pays indefinitely without depleting principal." },
      ],
      formulas: [
        { name: "All recurrences", formula: "V_{n+1} = R·V_n ± D,  R = 1 + r/100" },
        { name: "Perpetuity", formula: "V_0 = D / r" },
      ],
      examQuestion: {
        problem: "An annuity of $80 000 at 4.2% p.a. monthly pays $700/month. After how many full months does the balance first fall below $40 000?",
        solution: [
          "Recurrence V_{n+1} = 1.0035·V_n − 700, V_0 = 80 000",
          "Use CAS sequence/finance solver: solve N when FV = −40 000, PV = −80 000, PMT = 700, I = 4.2 → N ≈ 64.5",
          "Balance first falls below $40 000 in month 65",
        ],
        answer: "65 months.",
        marks: 4,
      },
      commonErrors: [
        "Wrong sign convention on solver",
        "Failing to convert annual rate",
        "Confusing 'amount paid' with 'amount owed'",
      ],
      summary: [
        "Recurrence + finance solver covers all scenarios",
        "Always interpret answers in context",
        "Cross-check with amortisation table for transparency",
      ],
      practice: [
        { question: "Loan $9000 at 6% p.a. monthly over 24 months. Monthly repayment?", answer: "≈ $399.16" },
      ],
      quiz: [
        {
          question: "Which recurrence is used for an annuity drawdown?",
          options: ["V_{n+1} = R·V_n + D", "V_{n+1} = R·V_n − D", "V_{n+1} = D − R·V_n", "V_{n+1} = R·V_n"],
          correctAnswer: 1,
          explanation: "Withdrawals subtract from the compounded balance.",
        },
        {
          question: "If r = 0.5% per month and principal $200 000 is borrowed, the interest for the first month is:",
          options: ["$1000", "$10 000", "$100", "$2000"],
          correctAnswer: 0,
          explanation: "0.005 × 200 000 = $1000.",
        },
        {
          question: "A perpetuity of $600/quarter at 4% p.a. quarterly requires:",
          options: ["$15 000", "$60 000", "$240 000", "$30 000"],
          correctAnswer: 1,
          explanation: "r = 0.01 per quarter; V_0 = 600/0.01 = $60 000.",
        },
      ],
    },
  ],
};
