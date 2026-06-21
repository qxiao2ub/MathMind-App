import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 9: Differentiation (VCE Unit 3)

export const year12MethodsCh9Lessons: TopicLessonsMap = {
  "y12m-ch9-9a-derivative": [
    {
      title: "The Derivative",
      explanation:
        "The DERIVATIVE of f at x is the INSTANTANEOUS RATE OF CHANGE — the limiting slope of secant lines through (x, f(x)) and (x + h, f(x + h)) as h → 0.\n\nFIRST-PRINCIPLES DEFINITION:\n\n  f′(x) = lim_{h→0} [f(x + h) − f(x)]/h\n\nGEOMETRIC INTERPRETATION: f′(a) is the slope of the TANGENT LINE to y = f(x) at the point (a, f(a)).\n\nPHYSICAL INTERPRETATION: if x represents time and f(x) represents position, then f′(x) is velocity.\n\nNOTATIONS: f′(x), df/dx, dy/dx, d/dx[f(x)] all refer to the same derivative.\n\nThe limit must exist for the derivative to be defined. A function can be continuous but not differentiable (e.g. |x| at x = 0).",
      keyPoints: [
        "f′(x) = lim_{h→0} (f(x + h) − f(x))/h",
        "Geometric meaning: slope of the tangent",
        "Physical meaning: instantaneous rate of change",
        "Continuous ⇍ differentiable",
      ],
      workedExamples: [
        {
          problem: "Use first principles to find the derivative of f(x) = x².",
          steps: [
            "f(x + h) − f(x) = (x + h)² − x² = 2xh + h²",
            "Divide by h: 2x + h",
            "Take limit h → 0: f′(x) = 2x",
          ],
          answer: "f′(x) = 2x.",
        },
        {
          problem: "Find from first principles the derivative of f(x) = 1/x.",
          steps: [
            "f(x + h) − f(x) = 1/(x + h) − 1/x = (x − (x + h))/(x(x + h)) = −h/(x(x + h))",
            "Divide by h: −1/(x(x + h))",
            "Limit h → 0: −1/x²",
          ],
          answer: "f′(x) = −1/x².",
        },
      ],
      tips: [
        "First-principles workings are standard — always start by writing f(x + h) − f(x)",
      ],
      formulas: [
        { name: "First principles", formula: "f′(x) = lim_{h→0} [f(x + h) − f(x)]/h" },
      ],
      examQuestion: {
        problem: "Find f′(x) from first principles for f(x) = 3x² + 2x.",
        solution: [
          "f(x + h) − f(x) = 3(x + h)² + 2(x + h) − 3x² − 2x",
          "= 3(2xh + h²) + 2h = 6xh + 3h² + 2h",
          "Divide by h: 6x + 3h + 2",
          "Limit h → 0: 6x + 2",
        ],
        answer: "f′(x) = 6x + 2.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to expand (x + h)² fully",
        "Cancelling h before dividing",
      ],
      summary: [
        "Derivative = limit of secant slope; foundational definition for all calculus",
      ],
      quiz: [
        { question: "f′(x) is the slope of:", options: ["Secant", "Chord", "Tangent", "Normal"], correctAnswer: 2, explanation: "Tangent line." },
        { question: "From first principles, derivative of x:", options: ["0", "1", "x", "2x"], correctAnswer: 1, explanation: "((x+h)−x)/h = 1." },
        { question: "Notation for derivative:", options: ["f′(x)", "df/dx", "dy/dx", "All of these"], correctAnswer: 3, explanation: "Equivalent." },
      ],
    },
  ],

  "y12m-ch9-9b-rules": [
    {
      title: "Rules for Differentiation",
      explanation:
        "Once a few derivatives are derived from first principles, RULES short-cut the rest.\n\nPOWER RULE (positive integer n):\n\n  d/dx[xⁿ] = n·xⁿ⁻¹\n\nCONSTANT MULTIPLE: d/dx[c·f(x)] = c·f′(x).\nSUM/DIFFERENCE: d/dx[f ± g] = f′ ± g′.\nCONSTANT: d/dx[c] = 0.\n\nThe power rule applies to any real exponent (proved later for negative and rational n). Combined with linearity, polynomials are differentiated term-by-term.\n\nEvery polynomial of degree n has derivative of degree n − 1. The derivative of a constant is zero — geometric meaning: a horizontal line has zero slope.",
      keyPoints: [
        "d/dx[xⁿ] = n xⁿ⁻¹",
        "Constants come outside the derivative",
        "Sum/difference: differentiate term by term",
      ],
      workedExamples: [
        {
          problem: "Differentiate f(x) = 4x³ − 7x² + 2x − 5.",
          steps: [
            "f′(x) = 12x² − 14x + 2",
          ],
          answer: "f′(x) = 12x² − 14x + 2.",
        },
      ],
      tips: [
        "Bring the exponent down, reduce the exponent by 1 — same recipe every time",
      ],
      formulas: [
        { name: "Power rule", formula: "d/dx[xⁿ] = nxⁿ⁻¹" },
        { name: "Linearity", formula: "(af + bg)′ = af′ + bg′" },
      ],
      examQuestion: {
        problem: "Find the equation of the tangent to y = x³ − 3x at x = 2.",
        solution: [
          "y′ = 3x² − 3",
          "Slope at x = 2: 12 − 3 = 9",
          "y(2) = 8 − 6 = 2",
          "Point–slope: y − 2 = 9(x − 2) → y = 9x − 16",
        ],
        answer: "y = 9x − 16.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to reduce the exponent",
        "Differentiating a constant to itself",
      ],
      summary: [
        "Polynomial differentiation = power rule + linearity",
      ],
      quiz: [
        { question: "d/dx[x⁵]:", options: ["x⁴", "5x⁴", "x⁵/5", "5x⁵"], correctAnswer: 1, explanation: "Power rule." },
        { question: "d/dx[7] =", options: ["7", "0", "1", "x"], correctAnswer: 1, explanation: "Constant." },
        { question: "d/dx[3x² − 2x] =", options: ["6x − 2", "6x", "3x − 2", "3x²"], correctAnswer: 0, explanation: "Term by term." },
      ],
    },
  ],

  "y12m-ch9-9c-negative-int": [
    {
      title: "Differentiating xⁿ Where n is a Negative Integer",
      explanation:
        "The power rule d/dx[xⁿ] = n·xⁿ⁻¹ extends to negative integer exponents:\n\n  d/dx[x⁻¹] = −x⁻² = −1/x²\n  d/dx[x⁻²] = −2x⁻³ = −2/x³\n\nGeneral form for negative integer n:\n\n  d/dx[xⁿ] = n·xⁿ⁻¹  (still valid, but xⁿ⁻¹ has even more negative exponent)\n\nALWAYS rewrite expressions like 3/x² as 3x⁻² before differentiating; never attempt to differentiate a fraction directly using the power rule.\n\nDOMAIN REMINDER: x ≠ 0 throughout. The derivative does not exist at x = 0 because the function itself doesn't.",
      keyPoints: [
        "Rewrite as a power before differentiating",
        "Power rule still applies for negative integer n",
        "Domain x ≠ 0",
      ],
      workedExamples: [
        {
          problem: "Differentiate f(x) = 5/x³.",
          steps: [
            "Rewrite: f(x) = 5x⁻³",
            "f′(x) = 5 · (−3)x⁻⁴ = −15x⁻⁴ = −15/x⁴",
          ],
          answer: "f′(x) = −15/x⁴.",
        },
      ],
      tips: [
        "Negative powers always give negative derivative coefficients (because of the n in front)",
      ],
      formulas: [
        { name: "Power rule (negative)", formula: "d/dx[x⁻ⁿ] = −n·x⁻ⁿ⁻¹" },
      ],
      examQuestion: {
        problem: "Find the slope of y = 2/x − 3/x² at x = 1.",
        solution: [
          "y = 2x⁻¹ − 3x⁻²",
          "y′ = −2x⁻² + 6x⁻³ = −2/x² + 6/x³",
          "At x = 1: y′ = −2 + 6 = 4",
        ],
        answer: "Slope = 4.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting the minus sign from the power coming down",
        "Differentiating 1/x as 1/(differentiated denominator)",
      ],
      summary: [
        "Convert 1/xⁿ → x⁻ⁿ; apply the power rule; restate as a fraction",
      ],
      quiz: [
        { question: "d/dx[x⁻¹]:", options: ["x⁻²", "−x⁻²", "−1/x", "0"], correctAnswer: 1, explanation: "−1/x²." },
        { question: "d/dx[3/x]:", options: ["3/x²", "−3/x²", "1/x²", "0"], correctAnswer: 1, explanation: "Negative power rule." },
        { question: "Domain of d/dx[1/x²]:", options: ["ℝ", "x > 0", "x ≠ 0", "x < 0"], correctAnswer: 2, explanation: "Same as original function." },
      ],
    },
  ],

  "y12m-ch9-9d-graph-derivative": [
    {
      title: "The Graph of the Derivative Function",
      explanation:
        "Given the graph of y = f(x), the graph of y = f′(x) can be sketched directly from features of f.\n\nKEY CORRESPONDENCES:\n  • Where f has a TURNING POINT (max or min), f′ has an X-INTERCEPT.\n  • Where f is INCREASING, f′ > 0 (graph above the x-axis).\n  • Where f is DECREASING, f′ < 0.\n  • Where f has an INFLECTION POINT, f′ has a turning point.\n  • Where f has a sharp corner or vertical tangent, f′ is undefined (gap, asymptote).\n\nSHAPE TRANSITIONS:\n  • A linear f gives a constant f′.\n  • A quadratic f gives a linear f′.\n  • A cubic f gives a quadratic f′.\n\nThis 'graph from graph' skill is heavily tested in Exam 1 multiple-choice and short-response questions.",
      keyPoints: [
        "Turning points of f ⇄ x-intercepts of f′",
        "f increasing ⇄ f′ > 0",
        "Inflection of f ⇄ turning point of f′",
        "Degree of f′ = degree of f − 1 (for polynomials)",
      ],
      workedExamples: [
        {
          problem: "Sketch f′ given f(x) = x³ − 3x.",
          steps: [
            "f′(x) = 3x² − 3",
            "Zeros at x = ±1 (where f has its turning points)",
            "f′ is a parabola opening upward, minimum at (0, −3)",
            "f′ > 0 for |x| > 1; f′ < 0 for |x| < 1",
          ],
          answer: "f′(x) = 3x² − 3, parabola with min (0, −3) and zeros at x = ±1.",
        },
      ],
      tips: [
        "Sketch f′ above f directly: align the x-axes vertically",
      ],
      formulas: [],
      examQuestion: {
        problem: "Given a cubic f with turning points at x = −1 and x = 2 and decreasing between them, sketch f′ identifying its key features.",
        solution: [
          "f′ has zeros at x = −1 and x = 2",
          "f decreasing between → f′ < 0 between → f′ is a downward-or-upward parabola crossing axis at −1 and 2 with negative between",
          "Negative-between requires f′ to be an upward parabola (positive leading coefficient)",
          "f′(x) = a(x + 1)(x − 2), a > 0",
        ],
        answer: "f′ is an upward parabola through (−1, 0) and (2, 0), negative between them.",
      },
      commonErrors: [
        "Mistaking inflection for turning",
        "Drawing f′ with the wrong sign in the middle interval",
      ],
      summary: [
        "Read f's slope at every x to plot f′; align axes for clarity",
      ],
      quiz: [
        { question: "Where f is decreasing, f′ is:", options: ["Positive", "Negative", "Zero", "Undefined"], correctAnswer: 1, explanation: "Negative slope." },
        { question: "At a maximum of f, f′ =", options: ["1", "0", "Maximum", "Undefined"], correctAnswer: 1, explanation: "Stationary." },
        { question: "If f is a cubic, f′ is a:", options: ["Cubic", "Quadratic", "Linear", "Constant"], correctAnswer: 1, explanation: "Degree drops by 1." },
      ],
    },
  ],

  "y12m-ch9-9e-chain-rule": [
    {
      title: "The Chain Rule",
      explanation:
        "The CHAIN RULE differentiates a COMPOSITE function f(g(x)):\n\n  d/dx[f(g(x))] = f′(g(x)) · g′(x)\n\nIn Leibniz form: if y = f(u) and u = g(x), then\n\n  dy/dx = (dy/du)·(du/dx).\n\nIDENTIFY the inner and outer functions:\n  • Outer: the 'last' operation (e.g. ln, sin, ⁵√, raise to power).\n  • Inner: everything inside the outer.\n\nFor (3x + 2)⁵: outer is ()⁵, inner is 3x + 2; derivative = 5(3x + 2)⁴ · 3 = 15(3x + 2)⁴.\n\nFor sin(x²): outer is sin, inner is x²; derivative = cos(x²) · 2x.\n\nFor e^(2x − 1): outer is exp, inner is 2x − 1; derivative = e^(2x − 1) · 2.\n\nThe chain rule chains repeatedly: d/dx[f(g(h(x)))] = f′(g(h(x))) · g′(h(x)) · h′(x).",
      keyPoints: [
        "Outer derivative evaluated at the inner, times derivative of the inner",
        "Identify outer and inner BEFORE differentiating",
        "Chains can be longer than two functions",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = (2x − 1)⁴.",
          steps: [
            "Outer: u⁴, derivative 4u³; inner u = 2x − 1, derivative 2",
            "dy/dx = 4(2x − 1)³ · 2 = 8(2x − 1)³",
          ],
          answer: "dy/dx = 8(2x − 1)³.",
        },
        {
          problem: "Differentiate y = sin(3x + 1).",
          steps: [
            "Outer sin, derivative cos; inner 3x + 1, derivative 3",
            "dy/dx = 3 cos(3x + 1)",
          ],
          answer: "3 cos(3x + 1).",
        },
      ],
      tips: [
        "Write the inner derivative explicitly — never skip multiplying by g′(x)",
      ],
      formulas: [
        { name: "Chain rule", formula: "d/dx[f(g(x))] = f′(g(x))·g′(x)" },
        { name: "Leibniz", formula: "dy/dx = (dy/du)(du/dx)" },
      ],
      examQuestion: {
        problem: "Differentiate y = √(x² + 1) and find the slope at x = 1.",
        solution: [
          "Rewrite: y = (x² + 1)^(1/2)",
          "dy/dx = (1/2)(x² + 1)^(−1/2) · 2x = x/√(x² + 1)",
          "At x = 1: 1/√2 = √2/2",
        ],
        answer: "dy/dx = x/√(x² + 1); slope = √2/2 at x = 1.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting the inner derivative",
        "Differentiating only the outer function (a 'half-chain')",
      ],
      summary: [
        "Outer′(inner) × inner′ — never forget the second factor",
      ],
      quiz: [
        { question: "d/dx[(x² + 1)³]:", options: ["3(x² + 1)²", "6x(x² + 1)²", "2x · 3(x² + 1)²", "Both B and C"], correctAnswer: 3, explanation: "Same answer either way." },
        { question: "d/dx[sin(2x)]:", options: ["cos 2x", "2 cos 2x", "2 sin 2x", "−2 cos 2x"], correctAnswer: 1, explanation: "Inner derivative 2." },
        { question: "Chain rule needs:", options: ["Two functions composed", "Two functions added", "Quotient", "Inverse"], correctAnswer: 0, explanation: "Composition." },
      ],
    },
  ],

  "y12m-ch9-9f-rational-powers": [
    {
      title: "Differentiating Rational Powers",
      explanation:
        "The power rule extends to RATIONAL exponents p/q:\n\n  d/dx[x^(p/q)] = (p/q) · x^(p/q − 1)\n\nFor √x = x^(1/2):\n  d/dx[x^(1/2)] = (1/2)x^(−1/2) = 1/(2√x)\n\nFor ³√x = x^(1/3):\n  d/dx[x^(1/3)] = (1/3)x^(−2/3) = 1/(3·x^(2/3))\n\nALWAYS convert roots to fractional exponents before differentiating, then convert back if a clean form is required.\n\nDomain considerations: even-denominator rational powers require x ≥ 0; the derivative may have a more restricted domain (e.g. x > 0 because of the negative exponent in the result).",
      keyPoints: [
        "Convert √x to x^(1/2) before differentiating",
        "Power rule unchanged for fractional exponents",
        "Even denominator → domain x ≥ 0; derivative often x > 0",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = √(x³).",
          steps: [
            "Rewrite: y = x^(3/2)",
            "dy/dx = (3/2)x^(1/2) = (3/2)√x",
          ],
          answer: "dy/dx = (3√x)/2.",
        },
        {
          problem: "Differentiate y = 1/⁴√x.",
          steps: [
            "Rewrite: y = x^(−1/4)",
            "dy/dx = (−1/4)x^(−5/4)",
          ],
          answer: "dy/dx = −1/(4·x^(5/4)).",
        },
      ],
      tips: [
        "Always convert roots → fractional exponents → differentiate → simplify",
      ],
      formulas: [
        { name: "Rational power rule", formula: "d/dx[x^(p/q)] = (p/q) x^(p/q − 1)" },
      ],
      examQuestion: {
        problem: "Find the equation of the tangent to y = √x at x = 4.",
        solution: [
          "y = x^(1/2); dy/dx = 1/(2√x)",
          "At x = 4: slope = 1/(2·2) = 1/4",
          "y(4) = 2",
          "Tangent: y − 2 = (1/4)(x − 4) → y = x/4 + 1",
        ],
        answer: "y = x/4 + 1.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting the negative result when the exponent becomes negative after the rule",
        "Leaving roots in the differentiation step rather than converting first",
      ],
      summary: [
        "Convert, differentiate, simplify — and restate the domain if it tightens",
      ],
      quiz: [
        { question: "d/dx[√x]:", options: ["1/√x", "1/(2√x)", "2√x", "√x/2"], correctAnswer: 1, explanation: "Power rule on x^(1/2)." },
        { question: "d/dx[x^(1/3)]:", options: ["1/3·x^(−2/3)", "x^(−1/3)", "3x^(−2/3)", "1/3"], correctAnswer: 0, explanation: "Bring exponent down, subtract 1." },
        { question: "d/dx[x^(5/2)]:", options: ["(5/2)x^(3/2)", "(5/2)x^(7/2)", "x^(3/2)", "5x^(3/2)"], correctAnswer: 0, explanation: "Power rule." },
      ],
    },
  ],

  "y12m-ch9-9g-e-x": [
    {
      title: "Differentiation of eˣ",
      explanation:
        "The natural exponential is the unique non-zero function equal to its own derivative:\n\n  d/dx[eˣ] = eˣ\n\nFor any real constant k:\n\n  d/dx[e^(kx)] = k·e^(kx)\n\nMore generally, by the chain rule, if u = g(x):\n\n  d/dx[e^(g(x))] = g′(x) · e^(g(x))\n\nSpecial cases:\n  • d/dx[e^(2x)] = 2e^(2x)\n  • d/dx[e^(−x)] = −e^(−x)\n  • d/dx[e^(x²)] = 2x·e^(x²)\n\nFor a^x with a > 0, a ≠ e: rewrite a^x = e^(x ln a), then\n\n  d/dx[a^x] = (ln a)·a^x.",
      keyPoints: [
        "d/dx[eˣ] = eˣ (self-derivative)",
        "d/dx[e^(g(x))] = g′(x) · e^(g(x))",
        "d/dx[a^x] = (ln a) · a^x",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = e^(3x² + 1).",
          steps: [
            "Inner g(x) = 3x² + 1, g′(x) = 6x",
            "dy/dx = 6x · e^(3x² + 1)",
          ],
          answer: "dy/dx = 6x·e^(3x² + 1).",
        },
        {
          problem: "Find d/dx[2^x] and evaluate at x = 3.",
          steps: [
            "d/dx[2^x] = (ln 2) · 2^x",
            "At x = 3: 8 ln 2 ≈ 5.545",
          ],
          answer: "(ln 2)·2^x; at x = 3 it is 8 ln 2.",
        },
      ],
      tips: [
        "Always factor out the e^(...) — its coefficient is the inner derivative",
      ],
      formulas: [
        { name: "Self-derivative", formula: "d/dx[eˣ] = eˣ" },
        { name: "Chain", formula: "d/dx[e^(g(x))] = g′(x)e^(g(x))" },
        { name: "Other base", formula: "d/dx[a^x] = (ln a)a^x" },
      ],
      examQuestion: {
        problem: "Find the gradient of y = e^(2x) − e^(−x) at x = 0.",
        solution: [
          "y′ = 2e^(2x) + e^(−x)",
          "At x = 0: y′ = 2 + 1 = 3",
        ],
        answer: "Gradient = 3.",
        marks: 2,
      },
      commonErrors: [
        "Treating e^(2x) as e^x · 2",
        "Differentiating a^x as x·a^(x−1)",
      ],
      summary: [
        "eˣ self-derives; everything else uses the chain rule",
      ],
      quiz: [
        { question: "d/dx[e^x]:", options: ["x e^(x−1)", "e^x", "1", "x e^x"], correctAnswer: 1, explanation: "Self-derivative." },
        { question: "d/dx[e^(5x)]:", options: ["e^(5x)", "5e^(5x)", "5x e^(5x)", "e^(5x)/5"], correctAnswer: 1, explanation: "Inner derivative 5." },
        { question: "d/dx[3^x]:", options: ["3^x", "(ln 3)3^x", "x 3^(x−1)", "3·3^x"], correctAnswer: 1, explanation: "General base rule." },
      ],
    },
  ],

  "y12m-ch9-9h-ln": [
    {
      title: "Differentiation of the Natural Logarithm",
      explanation:
        "The natural logarithm has a particularly simple derivative:\n\n  d/dx[ln x] = 1/x  for x > 0.\n\nVia the chain rule, for u = g(x) > 0:\n\n  d/dx[ln(g(x))] = g′(x)/g(x)\n\nThis is the LOGARITHMIC DIFFERENTIATION pattern — the derivative of the inner over the inner.\n\nFor logarithms in other bases, use the change of base ln-form:\n\n  log_a(x) = (ln x)/(ln a)  ⇒  d/dx[log_a x] = 1/(x ln a)\n\nBe alert to domain restrictions: ln(x − a) requires x > a, and the derivative inherits this restriction.",
      keyPoints: [
        "d/dx[ln x] = 1/x for x > 0",
        "d/dx[ln(g(x))] = g′(x)/g(x)",
        "d/dx[log_a x] = 1/(x ln a)",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = ln(3x + 5).",
          steps: [
            "g(x) = 3x + 5, g′(x) = 3",
            "dy/dx = 3/(3x + 5)",
          ],
          answer: "dy/dx = 3/(3x + 5).",
        },
        {
          problem: "Differentiate y = ln(x² + 1).",
          steps: [
            "g(x) = x² + 1, g′(x) = 2x",
            "dy/dx = 2x/(x² + 1)",
          ],
          answer: "dy/dx = 2x/(x² + 1).",
        },
      ],
      tips: [
        "Always check whether g(x) > 0 across the domain you're working in",
      ],
      formulas: [
        { name: "ln derivative", formula: "d/dx[ln x] = 1/x" },
        { name: "Chain log", formula: "d/dx[ln(g(x))] = g′(x)/g(x)" },
      ],
      examQuestion: {
        problem: "Find the equation of the tangent to y = ln(x) at x = e.",
        solution: [
          "y′ = 1/x; at x = e, slope = 1/e",
          "y(e) = ln e = 1",
          "Tangent: y − 1 = (1/e)(x − e) → y = x/e",
        ],
        answer: "y = x/e.",
        marks: 3,
      },
      commonErrors: [
        "Writing d/dx[ln x] as ln 1 or x · ln(x − 1)",
        "Ignoring the chain rule on ln(g(x))",
      ],
      summary: [
        "Inner derivative over inner — simple, fast, foolproof for ln(g(x))",
      ],
      quiz: [
        { question: "d/dx[ln x]:", options: ["x", "1/x", "ln 1", "1"], correctAnswer: 1, explanation: "Natural log derivative." },
        { question: "d/dx[ln(2x)]:", options: ["1/x", "2/x", "1/(2x)", "2/(2x)"], correctAnswer: 0, explanation: "2/(2x) = 1/x." },
        { question: "d/dx[log_10(x)]:", options: ["1/x", "1/(x ln 10)", "ln 10/x", "10/x"], correctAnswer: 1, explanation: "Change of base." },
      ],
    },
  ],

  "y12m-ch9-9i-circular": [
    {
      title: "Derivatives of Circular Functions",
      explanation:
        "STANDARD DERIVATIVES (with x in radians):\n\n  d/dx[sin x] = cos x\n  d/dx[cos x] = −sin x\n  d/dx[tan x] = sec²x = 1/cos²x\n\nThese are valid only when x is in RADIANS — calculus rules in degrees would carry an extra π/180 factor.\n\nWith the chain rule, for u = g(x):\n\n  d/dx[sin(g(x))] = g′(x)·cos(g(x))\n  d/dx[cos(g(x))] = −g′(x)·sin(g(x))\n  d/dx[tan(g(x))] = g′(x)·sec²(g(x))\n\nSpecial cases:\n  • d/dx[sin(2x)] = 2cos(2x)\n  • d/dx[cos(πx)] = −π sin(πx)\n  • d/dx[tan(x²)] = 2x sec²(x²)\n\nThe minus sign on cos′ and the chain factor are the most common errors.",
      keyPoints: [
        "d/dx[sin x] = cos x",
        "d/dx[cos x] = −sin x (note the sign)",
        "d/dx[tan x] = sec²x",
        "Always in radians for calculus",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = sin(3x) and find the slope at x = π/6.",
          steps: [
            "y′ = 3 cos(3x)",
            "At x = π/6: 3 cos(π/2) = 0",
          ],
          answer: "y′ = 3 cos(3x); slope at π/6 is 0.",
        },
        {
          problem: "Differentiate y = cos²(x).",
          steps: [
            "y = (cos x)² — chain rule with outer u² and inner cos x",
            "y′ = 2 cos x · (−sin x) = −2 sin x cos x",
            "= −sin(2x) (double-angle identity)",
          ],
          answer: "y′ = −sin(2x).",
        },
      ],
      tips: [
        "When the answer is messy, try a trig identity to simplify",
      ],
      formulas: [
        { name: "sin", formula: "d/dx[sin x] = cos x" },
        { name: "cos", formula: "d/dx[cos x] = −sin x" },
        { name: "tan", formula: "d/dx[tan x] = sec² x" },
      ],
      examQuestion: {
        problem: "Find d/dx[x · sin x] and evaluate at x = π/2.",
        solution: [
          "Product rule: d/dx[x sin x] = sin x + x cos x",
          "At π/2: sin(π/2) + (π/2)cos(π/2) = 1 + 0 = 1",
        ],
        answer: "Slope = 1.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting the minus sign in d/dx[cos x]",
        "Working in degrees rather than radians",
      ],
      summary: [
        "Memorise the three derivatives; combine with chain/product/quotient rules as needed",
      ],
      quiz: [
        { question: "d/dx[cos x]:", options: ["sin x", "−sin x", "cos x", "−cos x"], correctAnswer: 1, explanation: "Standard." },
        { question: "d/dx[sin(πx)]:", options: ["π cos(πx)", "cos(πx)", "−π sin(πx)", "π sin(πx)"], correctAnswer: 0, explanation: "Chain rule." },
        { question: "d/dx[tan x]:", options: ["sec x", "sec² x", "1/tan x", "−sin x/cos²x"], correctAnswer: 1, explanation: "Standard." },
      ],
    },
  ],

  "y12m-ch9-9j-product": [
    {
      title: "The Product Rule",
      explanation:
        "When y = u(x)·v(x), the derivative is:\n\n  d/dx[uv] = u′v + uv′\n\nIN WORDS: differentiate the first, leave the second; PLUS leave the first, differentiate the second.\n\nKEY USES:\n  • y = x²·eˣ → y′ = 2x·eˣ + x²·eˣ = eˣ(2x + x²)\n  • y = x·sin x → y′ = sin x + x·cos x\n  • y = ln(x)·cos(x) → y′ = (1/x)·cos x + ln(x)·(−sin x)\n\nALWAYS factor the result if possible. Product-rule answers often share a common factor that simplifies further work (e.g. solving y′ = 0).\n\nThe product rule extends to three or more factors:\n  d/dx[uvw] = u′vw + uv′w + uvw′.",
      keyPoints: [
        "(uv)′ = u′v + uv′",
        "Identify u and v before differentiating",
        "Factor the result for cleaner downstream work",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = x²·eˣ.",
          steps: [
            "u = x², u′ = 2x; v = eˣ, v′ = eˣ",
            "y′ = 2x·eˣ + x²·eˣ = eˣ(2x + x²) = x·eˣ(2 + x)",
          ],
          answer: "y′ = x·eˣ(x + 2).",
        },
        {
          problem: "Find the stationary points of y = x·eˣ.",
          steps: [
            "y′ = eˣ + x·eˣ = eˣ(1 + x)",
            "y′ = 0 when 1 + x = 0 (since eˣ ≠ 0) → x = −1",
            "y(−1) = −e⁻¹",
          ],
          answer: "Stationary point at (−1, −1/e).",
        },
      ],
      tips: [
        "Always factor common terms after differentiating",
      ],
      formulas: [
        { name: "Product rule", formula: "(uv)′ = u′v + uv′" },
      ],
      examQuestion: {
        problem: "Differentiate y = (x² + 1)·ln(x) and evaluate the derivative at x = 1.",
        solution: [
          "u = x² + 1, u′ = 2x; v = ln x, v′ = 1/x",
          "y′ = 2x·ln x + (x² + 1)/x",
          "At x = 1: 0 + 2/1 = 2",
        ],
        answer: "y′ = 2x ln x + (x² + 1)/x; y′(1) = 2.",
        marks: 3,
      },
      commonErrors: [
        "Differentiating (uv) as u′v′",
        "Mismatching u and v after the rule",
      ],
      summary: [
        "Product rule: u′v + uv′; always factor common terms",
      ],
      quiz: [
        { question: "d/dx[x·sin x]:", options: ["sin x + x cos x", "x cos x", "sin x", "cos x"], correctAnswer: 0, explanation: "Product rule." },
        { question: "(uv)′ =", options: ["u′v′", "u′v + uv′", "uv′ − u′v", "u/v"], correctAnswer: 1, explanation: "Product rule." },
        { question: "d/dx[x²eˣ] factors as:", options: ["xeˣ(x + 2)", "x²(2 + eˣ)", "eˣ(x² + 2)", "(x² + 2x)eˣ"], correctAnswer: 0, explanation: "Common eˣ and x." },
      ],
    },
  ],

  "y12m-ch9-9k-quotient": [
    {
      title: "The Quotient Rule",
      explanation:
        "When y = u(x)/v(x) with v(x) ≠ 0:\n\n  d/dx[u/v] = (u′v − uv′)/v²\n\nIN WORDS: 'low D high minus high D low, all over low squared'.\n\nWatch the order — it matters because of the minus sign. Common applications:\n  • y = x/(x + 1) → y′ = ((1)(x + 1) − x(1))/(x + 1)² = 1/(x + 1)²\n  • y = sin x / x → y′ = (x cos x − sin x)/x²\n  • y = eˣ/(x² + 1) → y′ = (eˣ(x² + 1) − eˣ(2x))/(x² + 1)² = eˣ(x² − 2x + 1)/(x² + 1)² = eˣ(x − 1)²/(x² + 1)²\n\nIf the quotient can be rewritten as a product (e.g. (x + 1)/x = 1 + 1/x), differentiating term by term is often easier.",
      keyPoints: [
        "(u/v)′ = (u′v − uv′)/v²",
        "Order matters — u′v first, then minus uv′",
        "Sometimes simpler to rewrite as product before differentiating",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = (2x + 1)/(x − 3).",
          steps: [
            "u = 2x + 1, u′ = 2; v = x − 3, v′ = 1",
            "y′ = (2(x − 3) − (2x + 1)·1)/(x − 3)²",
            "= (2x − 6 − 2x − 1)/(x − 3)² = −7/(x − 3)²",
          ],
          answer: "y′ = −7/(x − 3)².",
        },
      ],
      tips: [
        "Check the simplification by expanding once — sign errors are common",
      ],
      formulas: [
        { name: "Quotient rule", formula: "(u/v)′ = (u′v − uv′)/v²" },
      ],
      examQuestion: {
        problem: "Differentiate y = sin x / x and find the slope at x = π.",
        solution: [
          "u = sin x, u′ = cos x; v = x, v′ = 1",
          "y′ = (x cos x − sin x)/x²",
          "At x = π: (π cos π − sin π)/π² = (−π − 0)/π² = −1/π",
        ],
        answer: "y′ = (x cos x − sin x)/x²; slope at π is −1/π.",
        marks: 3,
      },
      commonErrors: [
        "Reversing the order to give uv′ − u′v",
        "Forgetting to square the denominator",
      ],
      summary: [
        "Low-D-high minus high-D-low, all over low squared",
      ],
      quiz: [
        { question: "(u/v)′ =", options: ["(u′v − uv′)/v²", "(u′v + uv′)/v²", "(u′ − v′)/v²", "u′/v′"], correctAnswer: 0, explanation: "Quotient rule." },
        { question: "d/dx[1/x]:", options: ["1/x²", "−1/x²", "x", "ln x"], correctAnswer: 1, explanation: "Negative power." },
        { question: "Order matters because of:", options: ["The square", "The minus sign", "The fraction", "The variable"], correctAnswer: 1, explanation: "u′v − uv′." },
      ],
    },
  ],

  "y12m-ch9-9l-limits-continuity": [
    {
      title: "Limits and Continuity",
      explanation:
        "The LIMIT lim_{x→a} f(x) = L means that f(x) can be made arbitrarily close to L by taking x sufficiently close to a (but not equal to a). The limit exists only when the left-hand limit equals the right-hand limit.\n\nCONTINUITY at x = a requires three conditions:\n  1. f(a) is defined\n  2. lim_{x→a} f(x) exists\n  3. lim_{x→a} f(x) = f(a)\n\nA function continuous on an interval has no breaks, jumps, or holes there.\n\nLIMIT LAWS (when each individual limit exists):\n  • lim(f + g) = lim f + lim g\n  • lim(f·g) = lim f · lim g\n  • lim(f/g) = lim f / lim g, provided lim g ≠ 0\n\nFor 0/0 INDETERMINATE FORMS, simplify algebraically first (factor and cancel), then take the limit.\n\nSTANDARD LIMITS:\n  • lim_{x→0} sin x / x = 1\n  • lim_{x→∞} (1 + 1/x)^x = e",
      keyPoints: [
        "Left-hand and right-hand limits must agree for the limit to exist",
        "Continuity = defined + limit exists + values match",
        "Indeterminate 0/0: simplify first",
        "lim_{x→0} sin x / x = 1",
      ],
      workedExamples: [
        {
          problem: "Evaluate lim_{x→3} (x² − 9)/(x − 3).",
          steps: [
            "Direct substitution gives 0/0",
            "Factor: (x − 3)(x + 3)/(x − 3) = x + 3 (x ≠ 3)",
            "Limit = 3 + 3 = 6",
          ],
          answer: "6.",
        },
        {
          problem: "Is f(x) = (x² − 1)/(x − 1) continuous at x = 1?",
          steps: [
            "f(1) is undefined (0/0)",
            "Limit exists: lim → 2 by simplification",
            "Discontinuous at x = 1 (removable discontinuity)",
          ],
          answer: "Discontinuous at x = 1; removable.",
        },
      ],
      tips: [
        "When asked about continuity, check each of the three conditions explicitly",
      ],
      formulas: [
        { name: "Standard trig limit", formula: "lim_{x→0} sin x / x = 1" },
      ],
      examQuestion: {
        problem: "Find the value of k that makes f continuous at x = 2:\n  f(x) = { (x² − 4)/(x − 2) if x ≠ 2; k if x = 2 }.",
        solution: [
          "lim_{x→2}(x² − 4)/(x − 2) = lim_{x→2}(x + 2) = 4",
          "Continuity requires k = 4",
        ],
        answer: "k = 4.",
        marks: 3,
      },
      commonErrors: [
        "Substituting blindly and accepting 0/0",
        "Confusing continuity with differentiability",
      ],
      summary: [
        "Limit existence requires both side-limits to agree; continuity adds a value check",
      ],
      quiz: [
        { question: "Continuous at a requires:", options: ["f(a) defined only", "Limit exists only", "Both equal and defined", "f differentiable"], correctAnswer: 2, explanation: "Three conditions." },
        { question: "lim_{x→0} sin x / x =", options: ["0", "1", "x", "Undefined"], correctAnswer: 1, explanation: "Standard limit." },
        { question: "0/0 means:", options: ["Limit is 0", "Limit doesn't exist", "Indeterminate — simplify", "Infinity"], correctAnswer: 2, explanation: "Algebraic manipulation needed." },
      ],
    },
  ],

  "y12m-ch9-9m-differentiable": [
    {
      title: "When is a Function Differentiable?",
      explanation:
        "f is DIFFERENTIABLE at x = a if the derivative limit\n\n  f′(a) = lim_{h→0} (f(a + h) − f(a))/h\n\nexists. This requires that the LEFT and RIGHT difference quotients agree.\n\nNECESSARY CONDITION: f must be CONTINUOUS at a. If f is not continuous, it cannot be differentiable.\n\nCONTINUITY IS NOT SUFFICIENT. Common ways a continuous function fails to be differentiable:\n  1. CORNER (sharp turn): e.g. |x| at x = 0 has slope −1 from the left and +1 from the right.\n  2. CUSP: a corner where both side-derivatives are infinite of opposite signs (e.g. x^(2/3) at 0).\n  3. VERTICAL TANGENT: derivative tends to ±∞ (e.g. x^(1/3) at 0).\n  4. DISCONTINUITY: any kind of jump or hole.\n\nFor PIECEWISE FUNCTIONS, check both continuity AND that the side-derivatives agree at the join.",
      keyPoints: [
        "Differentiable ⇒ continuous (not the converse)",
        "Corners, cusps, vertical tangents kill differentiability",
        "Piecewise functions: check both side-values and side-derivatives",
      ],
      workedExamples: [
        {
          problem: "Show that f(x) = |x| is not differentiable at x = 0.",
          steps: [
            "From the right: (f(0 + h) − f(0))/h = h/h = 1",
            "From the left: (f(0 − h) − f(0))/(−h) = h/(−h) wait — using h < 0: (|h| − 0)/h = −1",
            "Side derivatives differ; limit does not exist",
          ],
          answer: "f′(0) does not exist; corner at the origin.",
        },
        {
          problem: "Determine whether f(x) = { x² if x ≤ 1; 2x − 1 if x > 1 } is differentiable at x = 1.",
          steps: [
            "Continuity: f(1) = 1, lim from right = 2(1) − 1 = 1 ✓",
            "Left derivative: 2x at x = 1 → 2",
            "Right derivative: 2",
            "Sides agree → differentiable at 1, with f′(1) = 2",
          ],
          answer: "Differentiable at x = 1; f′(1) = 2.",
        },
      ],
      tips: [
        "Piecewise differentiability check: continuity first, then side-derivatives",
      ],
      formulas: [
        { name: "Differentiability", formula: "Side-derivatives at a must exist and agree" },
      ],
      examQuestion: {
        problem: "For what value of a is f(x) = { x² if x ≤ 2; ax − 4 if x > 2 } differentiable at x = 2?",
        solution: [
          "Continuity: f(2) = 4; from right 2a − 4 = 4 → a = 4",
          "Left derivative: 2x at 2 → 4",
          "Right derivative: a",
          "Differentiability: a = 4 ✓",
        ],
        answer: "a = 4.",
        marks: 4,
      },
      commonErrors: [
        "Stopping at continuity and skipping the slope check",
        "Assuming continuous = differentiable",
      ],
      summary: [
        "Continuous + smooth slopes from both sides = differentiable",
      ],
      quiz: [
        { question: "If f differentiable at a, f is:", options: ["Continuous at a", "Periodic", "Bounded", "Linear"], correctAnswer: 0, explanation: "Necessary condition." },
        { question: "|x| at x = 0 fails because of:", options: ["Discontinuity", "Cusp", "Corner", "Vertical tangent"], correctAnswer: 2, explanation: "Sharp corner." },
        { question: "Continuous but not differentiable example:", options: ["x²", "|x|", "eˣ", "x³"], correctAnswer: 1, explanation: "Corner." },
      ],
    },
  ],

  "y12m-ch9-review": [
    {
      title: "Chapter 9 Review — Differentiation",
      explanation:
        "FIRST PRINCIPLES: f′(x) = lim_{h→0} (f(x + h) − f(x))/h.\n\nRULES:\n  • Power: d/dx[xⁿ] = nxⁿ⁻¹ (any real n)\n  • Constant multiple, sum/difference: linear\n  • Product: (uv)′ = u′v + uv′\n  • Quotient: (u/v)′ = (u′v − uv′)/v²\n  • Chain: (f(g(x)))′ = f′(g(x))·g′(x)\n\nSTANDARD DERIVATIVES:\n  • d/dx[eˣ] = eˣ; d/dx[a^x] = (ln a)·a^x\n  • d/dx[ln x] = 1/x\n  • d/dx[sin x] = cos x; d/dx[cos x] = −sin x; d/dx[tan x] = sec²x\n\nCONTINUITY AND DIFFERENTIABILITY:\n  • Differentiable ⇒ continuous (not the converse).\n  • Corners, cusps, vertical tangents and discontinuities all kill differentiability.\n\nGRAPH OF f′: turning points of f ↔ zeros of f′; sign of f′ matches monotonicity of f.\n\nApplications follow in Chapter 10 (tangents, normals, optimisation).",
      keyPoints: [
        "Memorise the rules — they cover almost every Methods problem",
        "Always identify outer/inner before applying chain rule",
        "Check differentiability by side-derivatives for piecewise functions",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = x²·sin(2x) and simplify.",
          steps: [
            "Product rule with u = x², v = sin(2x)",
            "u′ = 2x; v′ = 2cos(2x) (chain)",
            "y′ = 2x·sin(2x) + x²·2cos(2x)",
            "= 2x sin(2x) + 2x² cos(2x)",
            "= 2x(sin(2x) + x cos(2x))",
          ],
          answer: "y′ = 2x(sin(2x) + x cos(2x)).",
        },
      ],
      tips: [
        "Combine product and chain in one go; factor at the end",
      ],
      formulas: [
        { name: "Power rule", formula: "d/dx[xⁿ] = nxⁿ⁻¹" },
        { name: "Product rule", formula: "(uv)′ = u′v + uv′" },
        { name: "Quotient rule", formula: "(u/v)′ = (u′v − uv′)/v²" },
        { name: "Chain rule", formula: "(f∘g)′(x) = f′(g(x))g′(x)" },
      ],
      examQuestion: {
        problem: "Find the equation of the tangent to y = ln(x² + 1) at x = 1.",
        solution: [
          "y′ = 2x/(x² + 1) (chain rule on ln)",
          "At x = 1: slope = 2/2 = 1",
          "y(1) = ln 2",
          "Tangent: y − ln 2 = 1(x − 1) → y = x − 1 + ln 2",
        ],
        answer: "y = x − 1 + ln 2.",
        marks: 4,
      },
      commonErrors: [
        "Mixing product and quotient rule signs",
        "Forgetting the inner derivative (chain rule slip)",
      ],
      summary: [
        "Differentiation in Methods = power, product, quotient, chain + standard table",
      ],
      quiz: [
        { question: "d/dx[x²eˣ]:", options: ["2xeˣ", "x²eˣ", "(2x + x²)eˣ", "x·eˣ"], correctAnswer: 2, explanation: "Product rule." },
        { question: "Chain rule for ln(g(x)):", options: ["1/g(x)", "g′(x)/g(x)", "g(x)/g′(x)", "ln g′(x)"], correctAnswer: 1, explanation: "Inner over inner." },
        { question: "d/dx[cos(2x)]:", options: ["−2sin(2x)", "2sin(2x)", "−sin(2x)", "−cos(2x)"], correctAnswer: 0, explanation: "Chain + sign." },
      ],
    },
  ],
};
