import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 5: Exponential and Logarithmic Functions (VCE Unit 3)

export const year12MethodsCh5Lessons: TopicLessonsMap = {
  "y12m-ch5-5a-exp-functions": [
    {
      title: "Exponential Functions",
      explanation:
        "An EXPONENTIAL FUNCTION has the form f(x) = aˣ where a > 0 and a ≠ 1. The variable sits in the exponent — this is what distinguishes exponential growth from polynomial growth.\n\nDOMAIN: ℝ. RANGE: (0, ∞) — exponentials never reach or cross the x-axis, which acts as a HORIZONTAL ASYMPTOTE.\n\nKEY POINT: every exponential passes through (0, 1) because a⁰ = 1, and through (1, a).\n\nGROWTH vs DECAY:\n  • a > 1 → strictly increasing, growth\n  • 0 < a < 1 → strictly decreasing, decay\n\nINDEX LAWS apply directly:\n  aˣ · aʸ = aˣ⁺ʸ\n  aˣ / aʸ = aˣ⁻ʸ\n  (aˣ)ʸ = aˣʸ\n  a⁻ˣ = 1/aˣ\n  a^(1/n) = ⁿ√a\n\nGENERAL TRANSFORMED FORM: f(x) = A · aᵏ⁽ˣ⁻ʰ⁾ + c. Translations move the asymptote to y = c. Dilations stretch vertically (A) and compress horizontally (k).",
      keyPoints: [
        "f(x) = aˣ, a > 0, a ≠ 1",
        "Domain ℝ, Range (0, ∞)",
        "Always passes through (0, 1) and (1, a)",
        "Asymptote y = 0 (or y = c after vertical translation)",
      ],
      workedExamples: [
        {
          problem: "Sketch f(x) = 2ˣ identifying key features.",
          steps: [
            "Domain ℝ, Range (0, ∞)",
            "Asymptote y = 0",
            "Through (0, 1) and (1, 2)",
            "Increasing, concave up",
          ],
          answer: "Standard growth curve: increasing, asymptote at y = 0, through (0, 1) and (1, 2).",
        },
      ],
      tips: [
        "Negative exponent ⇔ reciprocal: 2⁻ˣ = (1/2)ˣ",
      ],
      formulas: [
        { name: "Exponential", formula: "f(x) = aˣ, a > 0, a ≠ 1" },
        { name: "Index laws", formula: "aˣaʸ = aˣ⁺ʸ; (aˣ)ʸ = aˣʸ" },
      ],
      examQuestion: {
        problem: "Sketch y = 3·2ˣ − 6 stating asymptote and intercepts.",
        solution: [
          "Asymptote: y = −6",
          "y-intercept: 3·1 − 6 = −3",
          "x-intercept: 3·2ˣ = 6 → 2ˣ = 2 → x = 1",
        ],
        answer: "Asymptote y = −6; y-intercept (0, −3); x-intercept (1, 0).",
        marks: 3,
      },
      commonErrors: [
        "Confusing 2ˣ and x²",
        "Forgetting that aˣ > 0 always",
      ],
      summary: [
        "Exponentials grow / decay multiplicatively",
        "Translations shift the asymptote",
      ],
      quiz: [
        { question: "Range of f(x) = 5ˣ:", options: ["ℝ", "(0, ∞)", "[0, ∞)", "(−∞, 0)"], correctAnswer: 1, explanation: "Strictly positive." },
        { question: "y-intercept of y = aˣ:", options: ["0", "1", "a", "Depends on a"], correctAnswer: 1, explanation: "a⁰ = 1." },
        { question: "y = (1/2)ˣ is:", options: ["Growth", "Decay", "Constant", "Linear"], correctAnswer: 1, explanation: "Base < 1." },
      ],
    },
  ],

  "y12m-ch5-5b-e-x": [
    {
      title: "The Exponential Function f(x) = eˣ",
      explanation:
        "EULER'S NUMBER e ≈ 2.71828 is the unique base for which the exponential function equals its own derivative: d/dx(eˣ) = eˣ. This makes eˣ the natural choice for calculus and continuous-growth modelling.\n\nDEFINITION: e = lim_{n→∞} (1 + 1/n)ⁿ.\n\nf(x) = eˣ has the same shape as 2ˣ or 3ˣ — domain ℝ, range (0, ∞), asymptote y = 0, through (0, 1) and (1, e). It sits between 2ˣ and 3ˣ.\n\nThe NATURAL EXPONENTIAL appears whenever a quantity changes at a rate proportional to itself (continuous compound interest, population, radioactive decay, cooling). The general continuous-growth model is N(t) = N₀eᵏᵗ.",
      keyPoints: [
        "e ≈ 2.71828 (Euler's number)",
        "d/dx(eˣ) = eˣ — the unique self-derivative property",
        "N(t) = N₀eᵏᵗ models continuous growth/decay",
      ],
      workedExamples: [
        {
          problem: "Solve eˣ = 5 to two decimal places.",
          steps: [
            "Take natural log: x = ln 5",
            "ln 5 ≈ 1.609",
          ],
          answer: "x ≈ 1.61.",
        },
      ],
      tips: [
        "ln is the natural logarithm — log base e",
      ],
      formulas: [
        { name: "Natural exponential", formula: "f(x) = eˣ, f′(x) = eˣ" },
        { name: "Continuous growth", formula: "N(t) = N₀eᵏᵗ" },
      ],
      examQuestion: {
        problem: "If f(x) = 2e^(3x), find x when f(x) = 14. Give answer in exact form.",
        solution: [
          "2e^(3x) = 14 → e^(3x) = 7",
          "3x = ln 7",
          "x = (ln 7)/3",
        ],
        answer: "x = (ln 7)/3.",
        marks: 2,
      },
      commonErrors: [
        "Writing log instead of ln in CAS — answers may differ by a constant",
      ],
      summary: [
        "eˣ is the bridge from algebra to calculus of growth",
      ],
      quiz: [
        { question: "d/dx(eˣ) = ?", options: ["xe^(x−1)", "eˣ", "ln x", "1/x"], correctAnswer: 1, explanation: "Self-derivative." },
        { question: "e⁰ = ?", options: ["0", "1", "e", "Undefined"], correctAnswer: 1, explanation: "Any base⁰ = 1." },
        { question: "eˣ = 1 ⇒ x = ?", options: ["0", "1", "e", "ln 1"], correctAnswer: 0, explanation: "ln 1 = 0." },
      ],
    },
  ],

  "y12m-ch5-5c-exp-equations": [
    {
      title: "Exponential Equations",
      explanation:
        "An EXPONENTIAL EQUATION has the unknown in the exponent. There are two standard strategies.\n\nSAME-BASE METHOD: rewrite both sides with a common base, then equate exponents using the one-to-one property aˣ = aʸ ⇒ x = y.\n\nFor example, 2ˣ = 8 ⇒ 2ˣ = 2³ ⇒ x = 3. Or 9ˣ = 27 ⇒ 3^(2x) = 3³ ⇒ 2x = 3 ⇒ x = 3/2.\n\nQUADRATIC IN aˣ: equations like 2^(2x) − 5·2ˣ + 4 = 0 are quadratic in u = 2ˣ. Substitute, solve for u, then back-substitute and use logs if needed.\n\nLOGARITHM METHOD: when the bases cannot be matched (e.g. 3ˣ = 7), take logarithms (any base, but ln or log₁₀ are CAS-friendly).",
      keyPoints: [
        "aˣ = aʸ ⇒ x = y (same-base trick)",
        "Substitute u = aˣ for quadratic-in-exponential",
        "Use logs when bases don't match",
      ],
      workedExamples: [
        {
          problem: "Solve 4^(x+1) = 32.",
          steps: [
            "Common base 2: 2^(2(x+1)) = 2⁵",
            "2(x + 1) = 5 → x = 3/2",
          ],
          answer: "x = 3/2.",
        },
        {
          problem: "Solve 3^(2x) − 4·3ˣ + 3 = 0.",
          steps: [
            "Let u = 3ˣ: u² − 4u + 3 = 0",
            "(u − 1)(u − 3) = 0 → u = 1 or u = 3",
            "3ˣ = 1 → x = 0; 3ˣ = 3 → x = 1",
          ],
          answer: "x = 0 or x = 1.",
        },
      ],
      tips: [
        "Always check whether a common base exists before reaching for logs",
      ],
      formulas: [
        { name: "One-to-one", formula: "aˣ = aʸ ⇒ x = y" },
      ],
      examQuestion: {
        problem: "Solve 5·25ˣ = 125^(x−1).",
        solution: [
          "Base 5: 5 · 5^(2x) = 5^(3(x−1))",
          "5^(2x+1) = 5^(3x−3)",
          "2x + 1 = 3x − 3 → x = 4",
        ],
        answer: "x = 4.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to substitute u back to x",
        "Mismatched bracketing of indices",
      ],
      summary: [
        "Same base then equate exponents — first resort always",
      ],
      quiz: [
        { question: "Solve 2ˣ = 16:", options: ["x = 2", "x = 3", "x = 4", "x = 5"], correctAnswer: 2, explanation: "16 = 2⁴." },
        { question: "Solve 9ˣ = 3:", options: ["x = 1/2", "x = 1", "x = 2", "x = 3"], correctAnswer: 0, explanation: "3^(2x) = 3¹." },
        { question: "Substitution for 4ˣ − 2ˣ⁺¹ = 0:", options: ["u = x", "u = 2ˣ", "u = 4ˣ", "u = ln x"], correctAnswer: 1, explanation: "4ˣ = (2ˣ)²." },
      ],
    },
  ],

  "y12m-ch5-5d-logarithms": [
    {
      title: "Logarithms",
      explanation:
        "The LOGARITHM is the inverse of the exponential. log_a(b) = x means aˣ = b. Bases and arguments must be positive and a ≠ 1.\n\nKEY VALUES: log_a(1) = 0, log_a(a) = 1, log_a(aˣ) = x.\n\nLOG LAWS (all derived from index laws):\n  log(MN) = log M + log N\n  log(M/N) = log M − log N\n  log(Mⁿ) = n log M\n\nCHANGE OF BASE: log_a(b) = (log_c b)/(log_c a). This is essential when CAS uses ln or log₁₀ but a problem requires log_2 or log_5.\n\nNATURAL LOG: ln x = log_e x. Common log: log x = log₁₀ x.\n\nThese laws only apply when each logarithm is well-defined — check positivity of arguments after solving.",
      keyPoints: [
        "log_a(b) = x ⇔ aˣ = b",
        "Three log laws: product, quotient, power",
        "Change of base: log_a(b) = ln b / ln a",
        "Always verify arguments remain positive",
      ],
      workedExamples: [
        {
          problem: "Simplify log₂(32) + log₂(4).",
          steps: [
            "Product law: = log₂(32 · 4) = log₂(128)",
            "128 = 2⁷ → answer 7",
          ],
          answer: "7.",
        },
        {
          problem: "Express log₅(20) in terms of natural logs.",
          steps: [
            "Change of base: log₅(20) = ln 20 / ln 5",
          ],
          answer: "log₅(20) = ln 20 / ln 5.",
        },
      ],
      tips: [
        "Combine logs into a single log before solving equations",
      ],
      formulas: [
        { name: "Product", formula: "log(MN) = log M + log N" },
        { name: "Quotient", formula: "log(M/N) = log M − log N" },
        { name: "Power", formula: "log(Mⁿ) = n log M" },
        { name: "Change of base", formula: "log_a(b) = ln b / ln a" },
      ],
      examQuestion: {
        problem: "Solve log₃(x) + log₃(x − 6) = 3.",
        solution: [
          "log₃[x(x − 6)] = 3",
          "x(x − 6) = 27",
          "x² − 6x − 27 = 0 → (x − 9)(x + 3) = 0",
          "x = 9 (reject x = −3 since log requires x > 6)",
        ],
        answer: "x = 9.",
        marks: 4,
      },
      commonErrors: [
        "Accepting negative or out-of-domain solutions",
        "Writing log(M + N) = log M + log N (false)",
      ],
      summary: [
        "Logs convert multiplication into addition",
        "Always check the domain after solving",
      ],
      quiz: [
        { question: "log_a(1) = ?", options: ["0", "1", "a", "Undefined"], correctAnswer: 0, explanation: "a⁰ = 1." },
        { question: "log₂(8) = ?", options: ["2", "3", "4", "8"], correctAnswer: 1, explanation: "2³ = 8." },
        { question: "log(MN) = ?", options: ["log M · log N", "log M + log N", "log M − log N", "M log N"], correctAnswer: 1, explanation: "Product law." },
      ],
    },
  ],

  "y12m-ch5-5e-graphing-log": [
    {
      title: "Graphing Logarithmic Functions",
      explanation:
        "f(x) = log_a(x) is the inverse of f(x) = aˣ. Their graphs are reflections in the line y = x.\n\nKey features of y = log_a(x), a > 1:\n  • DOMAIN: (0, ∞)\n  • RANGE: ℝ\n  • Vertical asymptote at x = 0\n  • Through (1, 0) and (a, 1)\n  • Strictly increasing, concave down\n\nFor 0 < a < 1 the graph is decreasing.\n\nTRANSFORMED FORM: y = A · log_a(k(x − h)) + c. Horizontal translations shift the vertical asymptote to x = h. Vertical translations move the curve up or down.\n\nWhen sketching y = log_a(x − h) + c always start by marking the asymptote x = h, then plot the point where the argument equals 1 (i.e. x − h = 1).",
      keyPoints: [
        "Domain x > 0; asymptote at x = 0",
        "Always passes through (1, 0)",
        "Translation y = log_a(x − h) shifts asymptote to x = h",
        "Reflection of the corresponding exponential in y = x",
      ],
      workedExamples: [
        {
          problem: "Sketch y = ln(x − 2) + 1 stating asymptote and key points.",
          steps: [
            "Asymptote: x = 2",
            "When x − 2 = 1, x = 3, y = 1 → point (3, 1)",
            "When x − 2 = e, x = 2 + e, y = 2 → point (2 + e, 2)",
            "Increasing, concave down",
          ],
          answer: "Asymptote x = 2; through (3, 1) and (2 + e, 2); increasing.",
        },
      ],
      tips: [
        "Pin the asymptote first — the curve never crosses it",
      ],
      formulas: [
        { name: "Logarithmic function", formula: "y = log_a(x), x > 0" },
      ],
      examQuestion: {
        problem: "State the domain, range and asymptote of y = log₂(3 − x) and find any axis intercepts.",
        solution: [
          "Need 3 − x > 0 → x < 3",
          "Domain: (−∞, 3); range: ℝ; asymptote x = 3",
          "x-intercept: 3 − x = 1 → x = 2 → (2, 0)",
          "y-intercept: y = log₂(3) ≈ 1.585",
        ],
        answer: "Domain x < 3; range ℝ; asymptote x = 3; intercepts (2, 0) and (0, log₂ 3).",
        marks: 4,
      },
      commonErrors: [
        "Allowing x ≤ 0 in the domain",
        "Plotting the asymptote as horizontal",
      ],
      summary: [
        "Log graphs are exponential graphs reflected in y = x",
      ],
      quiz: [
        { question: "Domain of y = log(x):", options: ["ℝ", "(0, ∞)", "[0, ∞)", "(−∞, 0)"], correctAnswer: 1, explanation: "Argument must be positive." },
        { question: "Asymptote of y = log_a(x):", options: ["x = 0", "y = 0", "x = 1", "y = 1"], correctAnswer: 0, explanation: "Vertical at x = 0." },
        { question: "Key point of y = ln x:", options: ["(0, 1)", "(1, 0)", "(e, 0)", "(0, e)"], correctAnswer: 1, explanation: "ln 1 = 0." },
      ],
    },
  ],

  "y12m-ch5-5f-rules-from-graphs": [
    {
      title: "Determining Rules for Graphs of Exponential and Logarithmic Functions",
      explanation:
        "From a graph, identify the FORM first.\n\nExponentials usually appear as y = A·aᵏˣ + c. Read:\n  • Asymptote → c\n  • A point on the curve → an equation in A, a, k\n  • A second point or a stated growth rate fixes the remaining unknown.\n\nLogarithms appear as y = A · log_a(k(x − h)) + c. Read:\n  • Vertical asymptote → h\n  • A clearly readable point with a 'nice' argument (so the log evaluates to 0 or 1) → values of A and c.\n\nTwo data points and a known asymptote are usually enough.",
      keyPoints: [
        "Always read the asymptote first",
        "Use convenient points (where logs = 0 or 1) to simplify substitution",
        "Solve a linear or one-variable equation for the remaining parameter",
      ],
      workedExamples: [
        {
          problem: "An exponential of form y = A·2ˣ + c has asymptote y = −1 and passes through (0, 2). Find A and c.",
          steps: [
            "Asymptote → c = −1",
            "(0, 2): 2 = A·1 + (−1) → A = 3",
          ],
          answer: "y = 3·2ˣ − 1.",
        },
        {
          problem: "y = log_a(x) passes through (8, 3). Find a.",
          steps: [
            "log_a(8) = 3 → a³ = 8 → a = 2",
          ],
          answer: "a = 2.",
        },
      ],
      tips: [
        "Pick the easiest point first to isolate one parameter",
      ],
      formulas: [
        { name: "Exponential model", formula: "y = A·aᵏˣ + c" },
        { name: "Logarithmic model", formula: "y = A·log_a(k(x − h)) + c" },
      ],
      examQuestion: {
        problem: "y = A·eᵏˣ has y-intercept 5 and passes through (1, 10). Find A and k in exact form.",
        solution: [
          "(0, 5): A = 5",
          "(1, 10): 10 = 5eᵏ → eᵏ = 2 → k = ln 2",
        ],
        answer: "A = 5, k = ln 2.",
        marks: 3,
      },
      commonErrors: [
        "Confusing asymptote with y-intercept",
        "Assuming a = e by default",
      ],
      summary: [
        "Read graph features → match to model form → substitute → solve",
      ],
      quiz: [
        { question: "Asymptote of y = 2ˣ + 3:", options: ["y = 0", "y = 2", "y = 3", "y = −3"], correctAnswer: 2, explanation: "Vertical translation by 3." },
        { question: "If log_a 81 = 4, then a =", options: ["2", "3", "4", "9"], correctAnswer: 1, explanation: "3⁴ = 81." },
        { question: "y-intercept of y = A·eᵏˣ:", options: ["0", "A", "k", "Ak"], correctAnswer: 1, explanation: "e⁰ = 1." },
      ],
    },
  ],

  "y12m-ch5-5g-exp-using-logs": [
    {
      title: "Solution of Exponential Equations Using Logarithms",
      explanation:
        "When the bases of an exponential equation cannot be matched, take logarithms of both sides — any base will do, but ln gives the cleanest CAS expression.\n\nGENERAL RECIPE:\n  1. Isolate the exponential (e.g. divide off any coefficient).\n  2. Apply ln to both sides.\n  3. Bring the exponent down using log(Mⁿ) = n log M.\n  4. Solve linearly for the unknown.\n\nFor equations involving multiple exponential terms with different bases, sometimes substitution or rearrangement using same-base techniques works better. Mixed equations of form A·aˣ = B·bˣ can be reduced by dividing both sides and using a single log.",
      keyPoints: [
        "Take ln of both sides; bring the exponent down",
        "Always isolate the exponential first",
        "Use change of base when expressing the answer in a particular log",
      ],
      workedExamples: [
        {
          problem: "Solve 3ˣ = 7 to two decimal places.",
          steps: [
            "ln 3ˣ = ln 7",
            "x ln 3 = ln 7",
            "x = ln 7 / ln 3 ≈ 1.7712",
          ],
          answer: "x ≈ 1.77.",
        },
        {
          problem: "Solve 5·2ˣ = 3·7ˣ in exact form.",
          steps: [
            "Divide: (2/7)ˣ = 3/5",
            "x ln(2/7) = ln(3/5)",
            "x = ln(3/5) / ln(2/7)",
          ],
          answer: "x = ln(3/5) / ln(2/7).",
        },
      ],
      tips: [
        "Round only at the final step to preserve accuracy",
      ],
      formulas: [
        { name: "Exponent down", formula: "ln(aˣ) = x ln a" },
      ],
      examQuestion: {
        problem: "Solve 2 · e^(3x) − 5 = 11 in exact form, then to 2 dp.",
        solution: [
          "2e^(3x) = 16 → e^(3x) = 8",
          "3x = ln 8 → x = (ln 8)/3",
          "ln 8 = 3 ln 2 → x = ln 2",
          "x ≈ 0.69",
        ],
        answer: "x = ln 2 ≈ 0.69.",
        marks: 3,
      },
      commonErrors: [
        "Bringing the exponent down before isolating the exponential",
        "Premature rounding",
      ],
      summary: [
        "Logs are the universal solver for unmatched-base exponentials",
      ],
      quiz: [
        { question: "Solve 2ˣ = 10 (exact):", options: ["x = log 5", "x = log₂ 10", "x = ln 10", "x = 5"], correctAnswer: 1, explanation: "Equivalent to ln 10/ln 2." },
        { question: "x · ln 3 = ln 7 ⇒ x = ?", options: ["7/3", "ln 7 / ln 3", "ln 3 / ln 7", "log 7"], correctAnswer: 1, explanation: "Divide both sides." },
        { question: "Isolate first: 4 + 5ˣ = 9. 5ˣ = ?", options: ["5", "4", "13", "9"], correctAnswer: 0, explanation: "5ˣ = 5 → x = 1." },
      ],
    },
  ],

  "y12m-ch5-5h-inverses": [
    {
      title: "Inverses of Exponential and Logarithmic Functions",
      explanation:
        "f(x) = aˣ and g(x) = log_a(x) are INVERSE FUNCTIONS:\n  f(g(x)) = a^(log_a x) = x for x > 0\n  g(f(x)) = log_a(aˣ) = x for x ∈ ℝ.\n\nGraphically each is the reflection of the other in y = x. Domains and ranges swap:\n  • aˣ: domain ℝ, range (0, ∞)\n  • log_a x: domain (0, ∞), range ℝ.\n\nFINDING THE INVERSE OF y = A·a^(k(x − h)) + c algebraically:\n  1. Swap x and y.\n  2. Solve for y using logarithm laws.\n\nThe inverse of a transformed exponential is itself a transformed logarithm, and vice versa. Domain restrictions are preserved through the swap.",
      keyPoints: [
        "Inverse swaps domain and range",
        "Reflection in y = x graphically",
        "log_a and aˣ undo each other",
      ],
      workedExamples: [
        {
          problem: "Find the inverse of f(x) = 2eˣ − 3 and state its domain.",
          steps: [
            "Let y = 2eˣ − 3, swap: x = 2eʸ − 3",
            "eʸ = (x + 3)/2",
            "y = ln((x + 3)/2)",
            "Domain: x + 3 > 0 → x > −3",
          ],
          answer: "f⁻¹(x) = ln((x + 3)/2), domain x > −3.",
        },
      ],
      tips: [
        "Always swap THEN solve",
      ],
      formulas: [
        { name: "Inverse identities", formula: "a^(log_a x) = x; log_a(aˣ) = x" },
      ],
      examQuestion: {
        problem: "If f(x) = log₃(x − 1), find f⁻¹(x), and state its domain and range.",
        solution: [
          "y = log₃(x − 1) → swap: x = log₃(y − 1)",
          "y − 1 = 3ˣ → y = 3ˣ + 1",
          "Domain: ℝ; Range: y > 1",
        ],
        answer: "f⁻¹(x) = 3ˣ + 1, domain ℝ, range y > 1.",
        marks: 3,
      },
      commonErrors: [
        "Confusing inverse with reciprocal (1/f)",
        "Forgetting to update the domain",
      ],
      summary: [
        "Reflect in y = x and swap variables to get the inverse",
      ],
      quiz: [
        { question: "Inverse of y = eˣ:", options: ["1/eˣ", "ln x", "−eˣ", "e⁻ˣ"], correctAnswer: 1, explanation: "Inverse swaps roles." },
        { question: "log₂(2⁵) = ?", options: ["2", "5", "10", "32"], correctAnswer: 1, explanation: "Inverse identity." },
        { question: "Domain of inverse of log x:", options: ["ℝ", "(0,∞)", "[0,∞)", "(−∞,0)"], correctAnswer: 0, explanation: "Inverse is exponential." },
      ],
    },
  ],

  "y12m-ch5-5i-growth-decay": [
    {
      title: "Exponential Growth and Decay",
      explanation:
        "Whenever a quantity changes at a rate proportional to its current value, the model is exponential. The continuous form is N(t) = N₀eᵏᵗ, where:\n  • N₀ is the initial value (at t = 0)\n  • k > 0 means growth, k < 0 means decay\n  • |k| is the relative growth/decay rate per unit time.\n\nEQUIVALENT BASE-FORM: N(t) = N₀aᵗ where a = eᵏ. Useful when the question states the multiplicative rate per period (e.g. 'doubles every 5 years').\n\nDOUBLING TIME (growth): solve 2 = eᵏᵗ → t = (ln 2)/k.\nHALF-LIFE (decay): solve 1/2 = eᵏᵗ → t = (ln 2)/|k|.\n\nApplications: continuously compounded interest A = Pe^(rt), population growth, radioactive decay, Newton's Law of Cooling T(t) = T_∞ + (T₀ − T_∞)e^(−kt).",
      keyPoints: [
        "N(t) = N₀eᵏᵗ — continuous model",
        "Doubling time t = ln 2 / k",
        "Half-life t = ln 2 / |k|",
        "Newton cooling: T(t) = T_∞ + (T₀ − T_∞)e^(−kt)",
      ],
      workedExamples: [
        {
          problem: "A culture of bacteria doubles every 3 hours. Initially there are 500. Find the population after 10 hours.",
          steps: [
            "Doubling: 2 = e^(3k) → k = (ln 2)/3",
            "N(10) = 500 · e^(10·(ln 2)/3) = 500 · 2^(10/3)",
            "2^(10/3) ≈ 10.08",
            "N(10) ≈ 5039",
          ],
          answer: "Approximately 5039 bacteria.",
        },
        {
          problem: "A radioactive isotope has half-life 8 days. What fraction remains after 30 days?",
          steps: [
            "k = (ln 2)/8 in decay model N = N₀e^(−kt)",
            "Fraction = e^(−30·(ln 2)/8) = (1/2)^(30/8) = (1/2)^3.75",
            "≈ 0.0743",
          ],
          answer: "About 7.4%.",
        },
      ],
      tips: [
        "Translate every word problem into 'find k' followed by 'evaluate at t'",
      ],
      formulas: [
        { name: "Continuous model", formula: "N(t) = N₀eᵏᵗ" },
        { name: "Compound interest (continuous)", formula: "A = Pe^(rt)" },
        { name: "Newton's Law of Cooling", formula: "T(t) = T_∞ + (T₀ − T_∞)e^(−kt)" },
      ],
      examQuestion: {
        problem: "Cup of coffee at 90 °C cools in a 20 °C room. After 5 minutes the temperature is 70 °C. Use Newton's Law of Cooling to find the temperature after 15 minutes.",
        solution: [
          "T(t) = 20 + 70e^(−kt)",
          "T(5) = 70: 70 = 20 + 70e^(−5k) → e^(−5k) = 50/70 = 5/7",
          "−5k = ln(5/7) → k = −(ln(5/7))/5 = (ln(7/5))/5",
          "T(15) = 20 + 70e^(−15k) = 20 + 70(5/7)³",
          "(5/7)³ = 125/343 ≈ 0.3644",
          "T(15) ≈ 20 + 25.51 ≈ 45.5 °C",
        ],
        answer: "About 45.5 °C.",
        marks: 5,
      },
      commonErrors: [
        "Confusing doubling-time and half-life formulas",
        "Forgetting the ambient temperature offset in cooling problems",
      ],
      summary: [
        "Identify N₀, find k from one data point, then evaluate at the target time",
      ],
      quiz: [
        { question: "Doubling time formula:", options: ["k/ln 2", "ln 2 / k", "k · ln 2", "1/k"], correctAnswer: 1, explanation: "From 2 = eᵏᵗ." },
        { question: "Half-life of an isotope with k = −0.1/yr:", options: ["ln 2 yr", "10 ln 2 yr", "10 yr", "0.1 yr"], correctAnswer: 1, explanation: "ln 2 / 0.1 = 10 ln 2." },
        { question: "After 2 doubling periods a population grows by factor:", options: ["2", "3", "4", "8"], correctAnswer: 2, explanation: "2² = 4." },
      ],
    },
  ],

  "y12m-ch5-review": [
    {
      title: "Chapter 5 Review — Exponentials and Logarithms",
      explanation:
        "EXPONENTIAL FUNCTIONS aˣ have domain ℝ, range (0, ∞), and the universal point (0, 1). The natural exponential eˣ is its own derivative.\n\nLOGARITHMS log_a invert exponentials. The three log laws (product, quotient, power) plus change of base solve almost everything.\n\nEQUATIONS:\n  • Same-base method first (rewrite both sides with a common base).\n  • Quadratic-in-aˣ via substitution.\n  • Logarithm method when bases don't match.\n\nGRAPHS: aˣ and log_a x are reflections in y = x. Translations move asymptotes.\n\nMODELLING: continuous growth/decay N = N₀eᵏᵗ. Doubling time and half-life both use ln 2 / |k|. Newton's Law of Cooling uses the ambient temperature as the asymptote.\n\nINVERSES: swap x and y, then solve. The domain of the inverse equals the range of the original.",
      keyPoints: [
        "aˣ and log_a x are inverses",
        "Three log laws solve almost all equations",
        "N = N₀eᵏᵗ models continuous change",
        "Cooling has an ambient asymptote",
      ],
      workedExamples: [
        {
          problem: "Solve 2 ln(x) − ln(x + 6) = 0.",
          steps: [
            "ln(x²) − ln(x + 6) = 0",
            "ln(x²/(x + 6)) = 0",
            "x²/(x + 6) = 1 → x² = x + 6",
            "x² − x − 6 = 0 → (x − 3)(x + 2) = 0",
            "x = 3 (reject −2 since ln requires positive)",
          ],
          answer: "x = 3.",
        },
      ],
      tips: [
        "Domain check is mandatory at the end of every log equation",
      ],
      formulas: [
        { name: "Log laws", formula: "log(MN) = log M + log N; log(Mⁿ) = n log M" },
        { name: "Continuous growth", formula: "N(t) = N₀eᵏᵗ" },
      ],
      examQuestion: {
        problem: "A population is modelled by P(t) = 1200 · 1.05ᵗ where t is years from now. (a) Find the doubling time. (b) Express P(t) in the form Aeᵏᵗ.",
        solution: [
          "(a) 2 = 1.05ᵗ → t = ln 2 / ln 1.05 ≈ 14.21 years",
          "(b) 1.05 = e^(ln 1.05) → P(t) = 1200 · e^(t ln 1.05)",
          "k = ln 1.05",
        ],
        answer: "Doubling time ≈ 14.21 years; P(t) = 1200·e^(t ln 1.05).",
        marks: 4,
      },
      commonErrors: [
        "Skipping the domain check on log equations",
        "Mixing logs and natural logs without converting",
      ],
      summary: [
        "Exponentials and logs convert multiplication ↔ addition and form an inverse pair",
      ],
      quiz: [
        { question: "ln 1 = ?", options: ["0", "1", "e", "Undefined"], correctAnswer: 0, explanation: "Any log of 1 is 0." },
        { question: "Half-life formula:", options: ["k ln 2", "ln 2 / |k|", "1 / k", "ln k / 2"], correctAnswer: 1, explanation: "From e^(−kt) = 1/2." },
        { question: "Asymptote of y = log_a x:", options: ["y = 0", "x = 0", "y = 1", "x = 1"], correctAnswer: 1, explanation: "Vertical at the y-axis." },
      ],
    },
  ],
};
