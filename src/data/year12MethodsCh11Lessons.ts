import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 11: Integration (VCE Unit 4)

export const year12MethodsCh11Lessons: TopicLessonsMap = {
  "y12m-ch11-11a-estimate-area": [
    {
      title: "Estimating the Area Under a Graph",
      explanation:
        "Before integration is defined formally, the area under y = f(x) on [a, b] can be APPROXIMATED by rectangles.\n\nDivide [a, b] into n equal sub-intervals of width h = (b − a)/n. Three standard rules choose the rectangle height differently on each sub-interval [x_i, x_{i+1}]:\n\n  • LEFT-ENDPOINT: height = f(x_i)\n  • RIGHT-ENDPOINT: height = f(x_{i+1})\n  • MIDPOINT: height = f((x_i + x_{i+1})/2)\n\nThe approximation IMPROVES as n increases (h decreases). For an increasing function, left-endpoint UNDERESTIMATES and right-endpoint OVERESTIMATES; the midpoint is usually closer than either.",
      keyPoints: [
        "Divide [a, b] into n equal strips of width h",
        "Sum rectangle areas: Σ f(x*) · h",
        "Smaller h ⇒ better estimate",
        "Midpoint rule is usually the most accurate of the three",
      ],
      workedExamples: [
        {
          problem: "Estimate the area under y = x² on [0, 2] using 4 left-endpoint rectangles.",
          steps: [
            "h = 0.5; sample points 0, 0.5, 1, 1.5",
            "Heights: 0, 0.25, 1, 2.25",
            "Sum × h = (0 + 0.25 + 1 + 2.25)(0.5) = 1.75",
          ],
          answer: "Area ≈ 1.75 (true value 8/3 ≈ 2.667).",
        },
      ],
      tips: [
        "Sketch first to see whether you'll over- or under-estimate",
        "Right-endpoint sums are easier on calculators because of consistent indexing",
      ],
      formulas: [
        { name: "Rectangle approximation", formula: "Area ≈ Σ_{i=0}^{n−1} f(x*_i) · h" },
      ],
      examQuestion: {
        problem: "Use 3 right-endpoint rectangles to estimate the area under y = √x on [0, 3].",
        solution: [
          "h = 1; right endpoints x = 1, 2, 3",
          "Heights: 1, √2 ≈ 1.414, √3 ≈ 1.732",
          "Sum × h = 4.146",
        ],
        answer: "Area ≈ 4.15 square units.",
        marks: 3,
      },
      commonErrors: [
        "Using the wrong sample point (left vs right vs midpoint)",
        "Forgetting to multiply by h",
      ],
      summary: ["Rectangle sums approximate area; finer partitions = better answer"],
      quiz: [
        {
          question: "For an increasing function, the LEFT-endpoint rule gives an:",
          options: ["Overestimate", "Underestimate", "Exact value", "Cannot tell"],
          correctAnswer: 1,
          explanation: "The smallest f-value on each strip is on the left.",
        },
        {
          question: "Rectangle area approximations improve as:",
          options: ["n decreases", "h increases", "n increases", "f decreases"],
          correctAnswer: 2,
          explanation: "More, narrower strips ⇒ better approximation.",
        },
        {
          question: "Width of each strip when dividing [0, 4] into 8 equal pieces:",
          options: ["0.25", "0.5", "1", "2"],
          correctAnswer: 1,
          explanation: "h = (4 − 0)/8 = 0.5.",
        },
      ],
    },
  ],

  "y12m-ch11-11b-antidiff-indefinite": [
    {
      title: "Antidifferentiation: Indefinite Integrals",
      explanation:
        "ANTIDIFFERENTIATION reverses differentiation. F is an ANTIDERIVATIVE of f if F′(x) = f(x). Because constants differentiate to 0, antiderivatives form a family differing by a constant:\n\n  ∫ f(x) dx = F(x) + C.\n\nBASIC RULES (n ≠ −1):\n\n  ∫ x^n dx = x^{n+1}/(n + 1) + C\n  ∫ k dx = kx + C\n  ∫ e^x dx = e^x + C\n  ∫ 1/x dx = ln|x| + C\n  ∫ cos x dx = sin x + C\n  ∫ sin x dx = −cos x + C\n\nLINEARITY: ∫(af + bg) dx = a∫f dx + b∫g dx.",
      keyPoints: [
        "Always include + C in indefinite integrals",
        "Power rule fails when n = −1; use ln|x|",
        "Integration is linear",
      ],
      workedExamples: [
        {
          problem: "Find ∫ (3x² + 4x − 5) dx.",
          steps: ["Term by term: x³ + 2x² − 5x", "Add + C"],
          answer: "x³ + 2x² − 5x + C.",
        },
        {
          problem: "Find ∫ (2/x + e^x) dx.",
          steps: ["= 2 ln|x| + e^x + C"],
          answer: "2 ln|x| + e^x + C.",
        },
      ],
      tips: [
        "Differentiate your answer to check — you should recover the integrand",
        "Never forget + C on indefinite integrals",
      ],
      formulas: [
        { name: "Power rule", formula: "∫ x^n dx = x^{n+1}/(n + 1) + C, n ≠ −1" },
        { name: "Exponential", formula: "∫ e^x dx = e^x + C" },
        { name: "Reciprocal", formula: "∫ 1/x dx = ln|x| + C" },
      ],
      examQuestion: {
        problem: "Find F(x) such that F′(x) = 4x³ − 6x and F(1) = 2.",
        solution: [
          "Integrate: F(x) = x⁴ − 3x² + C",
          "F(1) = 1 − 3 + C = 2 ⇒ C = 4",
        ],
        answer: "F(x) = x⁴ − 3x² + 4.",
        marks: 3,
      },
      commonErrors: ["Forgetting + C", "Misapplying the power rule when n = −1"],
      summary: ["Antiderivative = reverse of derivative; family differs by constant"],
      quiz: [
        {
          question: "∫ x³ dx =",
          options: ["3x² + C", "x⁴/4 + C", "x⁴ + C", "x²/2 + C"],
          correctAnswer: 1,
          explanation: "Power rule: x^{n+1}/(n+1).",
        },
        {
          question: "∫ 1/x dx =",
          options: ["ln x + C", "ln|x| + C", "−1/x² + C", "x ln x + C"],
          correctAnswer: 1,
          explanation: "Standard result with absolute value.",
        },
        {
          question: "∫ (e^x + 1) dx =",
          options: ["e^x + C", "e^x + x + C", "x e^x + C", "e^x · x + C"],
          correctAnswer: 1,
          explanation: "Integrate term by term.",
        },
      ],
    },
  ],

  "y12m-ch11-11c-ax-b-n": [
    {
      title: "The Antiderivative of (ax + b)ⁿ",
      explanation:
        "When the integrand is a power of a LINEAR expression ax + b (a ≠ 0, n ≠ −1):\n\n  ∫ (ax + b)^n dx = (ax + b)^{n+1} / [a(n + 1)] + C.\n\nThis is the chain rule in reverse — the extra factor 1/a compensates for the inner derivative a. For n = −1 use the logarithm form\n\n  ∫ 1/(ax + b) dx = (1/a) ln|ax + b| + C.",
      keyPoints: [
        "Divide by a(n + 1)",
        "Works only for LINEAR inner functions",
        "n = −1 ⇒ logarithm",
      ],
      workedExamples: [
        {
          problem: "Find ∫ (2x + 1)⁵ dx.",
          steps: [
            "Apply the formula with a = 2, n = 5",
            "= (2x + 1)⁶ / (2 · 6) + C = (2x + 1)⁶/12 + C",
          ],
          answer: "(2x + 1)⁶/12 + C.",
        },
        {
          problem: "Find ∫ 1/(3x − 4) dx.",
          steps: ["= (1/3) ln|3x − 4| + C"],
          answer: "(1/3) ln|3x − 4| + C.",
        },
      ],
      tips: [
        "Check by differentiating mentally — the chain rule must give back the integrand",
      ],
      formulas: [
        { name: "Power rule (linear inside)", formula: "∫ (ax + b)^n dx = (ax + b)^{n+1}/[a(n+1)] + C" },
      ],
      examQuestion: {
        problem: "Evaluate ∫ (5 − 2x)³ dx.",
        solution: [
          "a = −2, n = 3",
          "= (5 − 2x)⁴ / (−2 · 4) + C = −(5 − 2x)⁴/8 + C",
        ],
        answer: "−(5 − 2x)⁴/8 + C.",
        marks: 2,
      },
      commonErrors: [
        "Forgetting to divide by a",
        "Sign error when a is negative",
      ],
      summary: ["Linear-inside power rule: divide by a(n + 1)"],
      quiz: [
        {
          question: "∫ (3x + 2)⁴ dx =",
          options: ["(3x + 2)⁵/5 + C", "(3x + 2)⁵/15 + C", "(3x + 2)⁵/3 + C", "12(3x + 2)³ + C"],
          correctAnswer: 1,
          explanation: "Divide by a(n + 1) = 3 · 5 = 15.",
        },
        {
          question: "∫ 1/(2x + 5) dx =",
          options: ["ln|2x + 5| + C", "(1/2) ln|2x + 5| + C", "2 ln|2x + 5| + C", "1/(2x + 5)² + C"],
          correctAnswer: 1,
          explanation: "Reciprocal-linear: (1/a) ln|ax + b|.",
        },
        {
          question: "Differentiating (2x + 1)⁶/12 gives:",
          options: ["(2x + 1)⁵", "(2x + 1)⁶", "6(2x + 1)⁵", "12(2x + 1)⁵"],
          correctAnswer: 0,
          explanation: "(6 · 2)/12 = 1, leaving (2x + 1)⁵ — confirming the formula.",
        },
      ],
    },
  ],

  "y12m-ch11-11d-e-x": [
    {
      title: "The Antiderivative of e^x and e^{kx}",
      explanation:
        "BASIC RULE: ∫ e^x dx = e^x + C.\n\nFor a LINEAR exponent (k ≠ 0):\n\n  ∫ e^{kx + c} dx = (1/k) e^{kx + c} + C.\n\nThe 1/k compensates for the chain-rule factor k that would appear when differentiating e^{kx + c}. Combine with linearity to handle sums of exponentials.",
      keyPoints: [
        "∫ e^{kx} dx = (1/k) e^{kx} + C",
        "Constant exponent shifts (e^{kx + c}) treat the constant as part of the exponential",
        "Always include + C",
      ],
      workedExamples: [
        {
          problem: "Find ∫ e^{3x} dx.",
          steps: ["= (1/3) e^{3x} + C"],
          answer: "(1/3) e^{3x} + C.",
        },
        {
          problem: "Find ∫ (2 e^{−x} + e^{2x + 1}) dx.",
          steps: ["= −2 e^{−x} + (1/2) e^{2x + 1} + C"],
          answer: "−2 e^{−x} + (1/2) e^{2x + 1} + C.",
        },
      ],
      tips: [
        "Mentally differentiate to confirm: d/dx [(1/k) e^{kx}] = e^{kx}",
      ],
      formulas: [{ name: "Linear exponent", formula: "∫ e^{kx} dx = (1/k) e^{kx} + C" }],
      examQuestion: {
        problem: "Find F(x) if F′(x) = 4 e^{2x} and F(0) = 3.",
        solution: [
          "Integrate: F(x) = 4 · (1/2) e^{2x} + C = 2 e^{2x} + C",
          "F(0) = 2 + C = 3 ⇒ C = 1",
        ],
        answer: "F(x) = 2 e^{2x} + 1.",
        marks: 3,
      },
      commonErrors: ["Forgetting the 1/k factor", "Sign error when k is negative"],
      summary: ["e^{kx} integrates to (1/k) e^{kx} + C"],
      quiz: [
        {
          question: "∫ e^{4x} dx =",
          options: ["4 e^{4x} + C", "(1/4) e^{4x} + C", "e^{4x} + C", "e^{4x}/4x + C"],
          correctAnswer: 1,
          explanation: "Divide by k = 4.",
        },
        {
          question: "∫ e^{−x} dx =",
          options: ["e^{−x} + C", "−e^{−x} + C", "(1/x) e^{−x} + C", "1 − e^{−x}"],
          correctAnswer: 1,
          explanation: "k = −1, so 1/k = −1.",
        },
        {
          question: "Differentiating (1/2) e^{2x} gives:",
          options: ["(1/2) e^{2x}", "e^{2x}", "2 e^{2x}", "e^x"],
          correctAnswer: 1,
          explanation: "Confirms ∫ e^{2x} dx = (1/2) e^{2x} + C.",
        },
      ],
    },
  ],

  "y12m-ch11-11e-ftc-definite": [
    {
      title: "Fundamental Theorem of Calculus & Definite Integrals",
      explanation:
        "FUNDAMENTAL THEOREM OF CALCULUS (Part 2): if F is any antiderivative of f on [a, b], then\n\n  ∫_a^b f(x) dx = F(b) − F(a).\n\nA DEFINITE INTEGRAL therefore evaluates to a NUMBER, with NO + C. Standard properties:\n\n  • ∫_a^a f dx = 0\n  • ∫_a^b f dx = −∫_b^a f dx\n  • ∫_a^b (f + g) dx = ∫_a^b f dx + ∫_a^b g dx\n  • ∫_a^b kf dx = k ∫_a^b f dx\n  • ∫_a^c f dx = ∫_a^b f dx + ∫_b^c f dx",
      keyPoints: [
        "Definite integral = F(b) − F(a)",
        "No constant of integration",
        "Linearity and interval-splitting properties",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫_1^3 2x dx.",
          steps: ["Antiderivative: x²", "Evaluate: 3² − 1² = 9 − 1 = 8"],
          answer: "8.",
        },
        {
          problem: "Evaluate ∫_0^1 (3x² + 1) dx.",
          steps: ["Antiderivative: x³ + x", "= (1 + 1) − 0 = 2"],
          answer: "2.",
        },
      ],
      tips: [
        "Square brackets [F(x)]_a^b are standard VCE notation",
        "Never write + C in a definite integral",
      ],
      formulas: [
        { name: "FTC (Part 2)", formula: "∫_a^b f(x) dx = F(b) − F(a)" },
      ],
      examQuestion: {
        problem: "Evaluate ∫_0^2 (4x³ − 3x²) dx.",
        solution: [
          "Antiderivative: x⁴ − x³",
          "[16 − 8] − [0 − 0] = 8",
        ],
        answer: "8.",
        marks: 3,
      },
      commonErrors: [
        "Including + C in a definite integral",
        "Substituting a before b instead of b first",
      ],
      summary: ["Definite integral = F(b) − F(a); a numeric answer"],
      quiz: [
        {
          question: "∫_0^2 x dx =",
          options: ["2", "1", "4", "0"],
          correctAnswer: 0,
          explanation: "[x²/2]_0^2 = 2.",
        },
        {
          question: "∫_a^a f(x) dx =",
          options: ["f(a)", "0", "1", "Undefined"],
          correctAnswer: 1,
          explanation: "Zero-width interval ⇒ 0.",
        },
        {
          question: "∫_1^4 1/x dx =",
          options: ["ln 4", "ln 5", "ln 3", "4 ln 1"],
          correctAnswer: 0,
          explanation: "[ln|x|]_1^4 = ln 4 − ln 1 = ln 4.",
        },
      ],
    },
  ],

  "y12m-ch11-11f-area-under": [
    {
      title: "Finding the Area Under a Curve",
      explanation:
        "If f(x) ≥ 0 on [a, b], then\n\n  Area = ∫_a^b f(x) dx.\n\nIf f(x) ≤ 0 on [a, b], the integral is NEGATIVE; the AREA (a positive geometric quantity) is\n\n  Area = −∫_a^b f(x) dx = |∫_a^b f(x) dx|.\n\nIf f changes sign on [a, b], SPLIT the interval at each x-intercept and add the absolute value of each piece. The signed integral over the whole interval would otherwise underestimate the true area.",
      keyPoints: [
        "Area is non-negative; integrals can be negative",
        "Split at every sign change",
        "Add absolute values of each segment",
      ],
      workedExamples: [
        {
          problem: "Find the area between y = x² − 1 and the x-axis on [−1, 2].",
          steps: [
            "Roots of x² − 1: x = ±1",
            "On [−1, 1]: f ≤ 0 ⇒ area = −∫_{−1}^{1}(x² − 1) dx = −[x³/3 − x]_{−1}^{1} = −[(1/3 − 1) − (−1/3 + 1)] = 4/3",
            "On [1, 2]: f ≥ 0 ⇒ area = ∫_1^2 (x² − 1) dx = [x³/3 − x]_1^2 = (8/3 − 2) − (1/3 − 1) = 4/3",
            "Total = 4/3 + 4/3 = 8/3",
          ],
          answer: "Area = 8/3 square units.",
        },
      ],
      tips: [
        "Always sketch first to identify sign changes",
        "Forgetting to split is the #1 exam error",
      ],
      formulas: [
        { name: "Area above axis", formula: "A = ∫_a^b f(x) dx, f ≥ 0" },
        { name: "Area below axis", formula: "A = −∫_a^b f(x) dx, f ≤ 0" },
      ],
      examQuestion: {
        problem: "Find the area enclosed between y = x³ − x and the x-axis on [−1, 1].",
        solution: [
          "Roots: x = −1, 0, 1",
          "On [−1, 0]: f ≥ 0 ⇒ ∫_{−1}^0 (x³ − x) dx = [x⁴/4 − x²/2]_{−1}^0 = 0 − (1/4 − 1/2) = 1/4",
          "On [0, 1]: f ≤ 0 ⇒ −∫_0^1 (x³ − x) dx = −[x⁴/4 − x²/2]_0^1 = −(1/4 − 1/2) = 1/4",
          "Total area = 1/2",
        ],
        answer: "Area = 1/2 square units.",
        marks: 4,
      },
      commonErrors: [
        "Failing to split at sign changes",
        "Reporting a negative area",
      ],
      summary: ["Sketch, find roots, split, take absolute values"],
      quiz: [
        {
          question: "If ∫_a^b f(x) dx = −5 and f ≤ 0 on [a, b], the area is:",
          options: ["−5", "5", "0", "Undefined"],
          correctAnswer: 1,
          explanation: "Area = |−5| = 5.",
        },
        {
          question: "Area between y = sin x and the x-axis on [0, 2π] equals:",
          options: ["0", "2", "4", "π"],
          correctAnswer: 2,
          explanation: "Two humps of area 2 each (split at π).",
        },
        {
          question: "Finding area between a curve and x-axis when curve crosses axis requires:",
          options: ["A single integral", "Splitting at each x-intercept", "Differentiating", "Using midpoint rule"],
          correctAnswer: 1,
          explanation: "Sign changes must be handled by splitting.",
        },
      ],
    },
  ],

  "y12m-ch11-11g-circular": [
    {
      title: "Integration of Circular Functions",
      explanation:
        "BASIC ANTIDERIVATIVES (radians):\n\n  ∫ sin x dx = −cos x + C\n  ∫ cos x dx = sin x + C\n\nFor LINEAR arguments (k ≠ 0):\n\n  ∫ sin(kx + c) dx = −(1/k) cos(kx + c) + C\n  ∫ cos(kx + c) dx = (1/k) sin(kx + c) + C\n\nAlways work in radians for calculus. The 1/k accounts for the chain rule.",
      keyPoints: [
        "sin → −cos and cos → sin (note the sign)",
        "Divide by k for sin(kx) or cos(kx)",
        "Use radians",
      ],
      workedExamples: [
        {
          problem: "Find ∫ sin(2x) dx.",
          steps: ["= −(1/2) cos(2x) + C"],
          answer: "−(1/2) cos(2x) + C.",
        },
        {
          problem: "Evaluate ∫_0^{π/2} cos x dx.",
          steps: ["[sin x]_0^{π/2} = 1 − 0 = 1"],
          answer: "1.",
        },
      ],
      tips: [
        "Differentiate your answer to verify the chain-rule factor",
      ],
      formulas: [
        { name: "Sine integral", formula: "∫ sin(kx) dx = −(1/k) cos(kx) + C" },
        { name: "Cosine integral", formula: "∫ cos(kx) dx = (1/k) sin(kx) + C" },
      ],
      examQuestion: {
        problem: "Evaluate ∫_0^π sin(x/2) dx.",
        solution: [
          "Antiderivative: −2 cos(x/2)",
          "[−2 cos(x/2)]_0^π = −2 cos(π/2) − (−2 cos 0) = 0 + 2 = 2",
        ],
        answer: "2.",
        marks: 3,
      },
      commonErrors: [
        "Wrong sign for ∫ sin x dx",
        "Working in degrees by accident",
      ],
      summary: ["Sine ↔ −cos / cos ↔ sin; divide by k for linear arguments"],
      quiz: [
        {
          question: "∫ cos x dx =",
          options: ["−sin x + C", "sin x + C", "cos x + C", "tan x + C"],
          correctAnswer: 1,
          explanation: "Standard result.",
        },
        {
          question: "∫ sin(3x) dx =",
          options: ["−3 cos(3x) + C", "−(1/3) cos(3x) + C", "(1/3) cos(3x) + C", "3 cos(3x) + C"],
          correctAnswer: 1,
          explanation: "Sine integral with k = 3.",
        },
        {
          question: "∫_0^π sin x dx =",
          options: ["0", "1", "2", "π"],
          correctAnswer: 2,
          explanation: "[−cos x]_0^π = 1 + 1 = 2.",
        },
      ],
    },
  ],

  "y12m-ch11-11h-misc": [
    {
      title: "Miscellaneous Integration Practice",
      explanation:
        "This section consolidates every integration technique met so far:\n\n  • Power rule for x^n and (ax + b)^n\n  • Exponentials e^{kx + c}\n  • Reciprocals 1/(ax + b) → ln\n  • Sine and cosine of linear arguments\n  • Linearity to combine terms\n  • Initial-value problems (find F such that F′ = f and F(x₀) = y₀)\n\nApproach each integral by matching it to a known template; a brief mental check by differentiation confirms the result.",
      keyPoints: [
        "Recognise the pattern, then apply the standard rule",
        "Use linearity to split sums",
        "Check by differentiation",
      ],
      workedExamples: [
        {
          problem: "Find ∫ (e^{2x} + 3 cos x − (4x − 1)²) dx.",
          steps: [
            "= (1/2) e^{2x} + 3 sin x − (4x − 1)³/(4 · 3) + C",
            "= (1/2) e^{2x} + 3 sin x − (4x − 1)³/12 + C",
          ],
          answer: "(1/2) e^{2x} + 3 sin x − (4x − 1)³/12 + C.",
        },
      ],
      tips: ["Group similar terms before integrating to avoid algebra slips"],
      formulas: [],
      examQuestion: {
        problem: "Find F such that F′(x) = 6x − 2 sin(2x) and F(0) = 1.",
        solution: [
          "Integrate: F(x) = 3x² + cos(2x) + C",
          "F(0) = 0 + 1 + C = 1 ⇒ C = 0",
        ],
        answer: "F(x) = 3x² + cos(2x).",
        marks: 4,
      },
      commonErrors: ["Mixing up the sign for ∫ sin", "Forgetting initial conditions"],
      summary: ["Mixed practice = pattern recognition + checking by differentiation"],
      quiz: [
        {
          question: "∫ (4 + e^x) dx =",
          options: ["4x + e^x + C", "4 + e^x + C", "4x + x e^x + C", "e^x + C"],
          correctAnswer: 0,
          explanation: "Integrate term by term.",
        },
        {
          question: "∫ 6 sin(2x) dx =",
          options: ["−3 cos(2x) + C", "3 cos(2x) + C", "−12 cos(2x) + C", "−6 cos(2x) + C"],
          correctAnswer: 0,
          explanation: "(6) · −(1/2) cos(2x) = −3 cos(2x).",
        },
        {
          question: "If F′(x) = 2x and F(1) = 5, then F(x) =",
          options: ["x² + 5", "x² + 4", "x² − 4", "x² + 1"],
          correctAnswer: 1,
          explanation: "F(x) = x² + C; 1 + C = 5 ⇒ C = 4.",
        },
      ],
    },
  ],

  "y12m-ch11-11i-area-between": [
    {
      title: "Area Between Two Curves",
      explanation:
        "If f(x) ≥ g(x) on [a, b], the area enclosed between the curves is\n\n  Area = ∫_a^b [f(x) − g(x)] dx.\n\nSTRATEGY:\n\n  1. Find intersection points by solving f(x) = g(x) — these are the limits of integration.\n  2. Determine which curve is on TOP on each subinterval (sketch or test a value).\n  3. Integrate (top − bottom).\n  4. If the curves swap, SPLIT the integral.",
      keyPoints: [
        "Always integrate (top − bottom)",
        "Intersections give the integration limits",
        "Sketch to identify which curve is upper",
      ],
      workedExamples: [
        {
          problem: "Find the area between y = x and y = x² on [0, 1].",
          steps: [
            "Intersections: x = x² ⇒ x = 0, 1",
            "On (0, 1), x > x², so top = x",
            "A = ∫_0^1 (x − x²) dx = [x²/2 − x³/3]_0^1 = 1/2 − 1/3 = 1/6",
          ],
          answer: "Area = 1/6 square units.",
        },
      ],
      tips: ["When unsure which curve is on top, test a midpoint value"],
      formulas: [
        { name: "Area between curves", formula: "A = ∫_a^b [f(x) − g(x)] dx, f ≥ g" },
      ],
      examQuestion: {
        problem: "Find the area enclosed between y = 4 − x² and y = x + 2.",
        solution: [
          "Intersections: 4 − x² = x + 2 ⇒ x² + x − 2 = 0 ⇒ (x + 2)(x − 1) = 0 ⇒ x = −2, 1",
          "On (−2, 1) the parabola is above (test x = 0: 4 vs 2)",
          "A = ∫_{−2}^1 [(4 − x²) − (x + 2)] dx = ∫_{−2}^1 (2 − x − x²) dx",
          "= [2x − x²/2 − x³/3]_{−2}^1 = (2 − 1/2 − 1/3) − (−4 − 2 + 8/3)",
          "= 7/6 − (−10/3) = 7/6 + 10/3 = 27/6 = 9/2",
        ],
        answer: "Area = 9/2 square units.",
        marks: 5,
      },
      commonErrors: [
        "Reversing top and bottom (negative answer)",
        "Skipping the intersection step",
      ],
      summary: ["(top − bottom), integrated between intersection points"],
      quiz: [
        {
          question: "Area between y = f and y = g on [a, b] (f ≥ g) is:",
          options: ["∫(g − f)", "∫(f + g)", "∫(f − g)", "∫f · g"],
          correctAnswer: 2,
          explanation: "Top minus bottom.",
        },
        {
          question: "Area between y = x² and y = x is found by integrating from:",
          options: ["−1 to 1", "0 to 1", "0 to 2", "1 to 2"],
          correctAnswer: 1,
          explanation: "Curves intersect at 0 and 1.",
        },
        {
          question: "If you reverse top and bottom, the integral gives:",
          options: ["Same area", "Negative area", "Zero", "Undefined"],
          correctAnswer: 1,
          explanation: "It produces the negative of the area.",
        },
      ],
    },
  ],

  "y12m-ch11-11j-applications": [
    {
      title: "Applications of Integration",
      explanation:
        "Integration recovers a quantity from its rate of change.\n\nKINEMATICS:\n\n  v(t) = ∫ a(t) dt, s(t) = ∫ v(t) dt.\n\n  • DISPLACEMENT from t = a to t = b: s(b) − s(a) = ∫_a^b v(t) dt (signed).\n  • DISTANCE travelled: ∫_a^b |v(t)| dt — split where v changes sign.\n\nGENERAL ACCUMULATION: if R(t) is a rate (e.g. flow rate), the total accumulation between t = a and t = b is ∫_a^b R(t) dt.\n\nALWAYS interpret the result in context, with units.",
      keyPoints: [
        "Displacement = signed integral; distance = integral of |v|",
        "Total accumulation = integral of rate",
        "Split at sign changes for distance",
      ],
      workedExamples: [
        {
          problem: "A particle has v(t) = 3t² − 12t + 9 m/s. Find displacement and distance from t = 0 to t = 4.",
          steps: [
            "Displacement: ∫_0^4 v dt = [t³ − 6t² + 9t]_0^4 = 64 − 96 + 36 = 4 m",
            "v = 3(t − 1)(t − 3), so v ≥ 0 on [0,1] and [3,4], v ≤ 0 on [1,3]",
            "∫_0^1 v dt = 1 − 6 + 9 − 0 wait: [t³ − 6t² + 9t]_0^1 = 4",
            "∫_1^3 v dt = (27 − 54 + 27) − 4 = −4 ⇒ |·| = 4",
            "∫_3^4 v dt = 4 − 0 = 4",
            "Distance = 4 + 4 + 4 = 12 m",
          ],
          answer: "Displacement = 4 m; distance travelled = 12 m.",
        },
      ],
      tips: [
        "Distance ≥ |displacement|; equal only when v doesn't change sign",
      ],
      formulas: [
        { name: "Displacement", formula: "Δs = ∫_a^b v(t) dt" },
        { name: "Distance", formula: "d = ∫_a^b |v(t)| dt" },
      ],
      examQuestion: {
        problem: "Water flows into a tank at rate R(t) = 6 + 2t L/min. Find the volume added between t = 0 and t = 5 min.",
        solution: [
          "V = ∫_0^5 (6 + 2t) dt = [6t + t²]_0^5 = 30 + 25 = 55",
        ],
        answer: "55 litres.",
        marks: 3,
      },
      commonErrors: [
        "Confusing displacement with distance",
        "Forgetting absolute value for distance",
      ],
      summary: ["Integral of a rate = total change/accumulation"],
      quiz: [
        {
          question: "Displacement from velocity is:",
          options: ["∫|v| dt", "∫v dt", "v · t", "dv/dt"],
          correctAnswer: 1,
          explanation: "Signed integral of v.",
        },
        {
          question: "Distance travelled is:",
          options: ["∫v dt", "v(b) − v(a)", "∫|v| dt", "Always positive displacement"],
          correctAnswer: 2,
          explanation: "Take absolute value of v.",
        },
        {
          question: "If a tap fills at R(t) L/min, total litres in [a, b] is:",
          options: ["R(b) − R(a)", "∫_a^b R(t) dt", "R'(t)", "R(t) · t"],
          correctAnswer: 1,
          explanation: "Integrate the rate.",
        },
      ],
    },
  ],

  "y12m-ch11-11k-ftc": [
    {
      title: "The Fundamental Theorem of Calculus",
      explanation:
        "The FUNDAMENTAL THEOREM OF CALCULUS links differentiation and integration.\n\nPART 1: if f is continuous on [a, b] and we define\n\n  F(x) = ∫_a^x f(t) dt,\n\nthen F is differentiable on (a, b) and F′(x) = f(x).\n\nPART 2 (Evaluation Theorem): if F is any antiderivative of f on [a, b], then\n\n  ∫_a^b f(x) dx = F(b) − F(a).\n\nPart 1 says differentiation undoes the accumulation of an integral; Part 2 says an antiderivative evaluates a definite integral.",
      keyPoints: [
        "Part 1: d/dx ∫_a^x f(t) dt = f(x)",
        "Part 2: ∫_a^b f dx = F(b) − F(a)",
        "Connects integration and differentiation",
      ],
      workedExamples: [
        {
          problem: "If F(x) = ∫_0^x (t² + 1) dt, find F′(x).",
          steps: ["By FTC Part 1: F′(x) = x² + 1"],
          answer: "F′(x) = x² + 1.",
        },
        {
          problem: "Use Part 2 to evaluate ∫_1^4 (2x − 3) dx.",
          steps: [
            "Antiderivative: x² − 3x",
            "[x² − 3x]_1^4 = (16 − 12) − (1 − 3) = 4 + 2 = 6",
          ],
          answer: "6.",
        },
      ],
      tips: ["Part 1 is the key reason antiderivatives evaluate definite integrals"],
      formulas: [
        { name: "FTC Part 1", formula: "d/dx ∫_a^x f(t) dt = f(x)" },
        { name: "FTC Part 2", formula: "∫_a^b f(x) dx = F(b) − F(a)" },
      ],
      examQuestion: {
        problem: "Let G(x) = ∫_2^x (3t² − 1) dt. Find G(3) and G′(x).",
        solution: [
          "G(3) = ∫_2^3 (3t² − 1) dt = [t³ − t]_2^3 = (27 − 3) − (8 − 2) = 24 − 6 = 18",
          "G′(x) = 3x² − 1",
        ],
        answer: "G(3) = 18; G′(x) = 3x² − 1.",
        marks: 4,
      },
      commonErrors: [
        "Differentiating ∫_a^x f(t) dt with respect to t (it's a function of x)",
        "Including + C in a definite integral",
      ],
      summary: ["FTC: differentiation and integration are inverse processes"],
      quiz: [
        {
          question: "If F(x) = ∫_0^x sin t dt, then F′(x) =",
          options: ["cos x", "−cos x", "sin x", "−sin x"],
          correctAnswer: 2,
          explanation: "FTC Part 1: F′(x) = f(x) = sin x.",
        },
        {
          question: "By FTC, ∫_0^2 e^x dx =",
          options: ["e² − 1", "e² + 1", "e² − e", "e²"],
          correctAnswer: 0,
          explanation: "[e^x]_0^2 = e² − 1.",
        },
        {
          question: "FTC Part 1 says ∫_a^x f(t) dt is a function of:",
          options: ["t", "a", "x", "f"],
          correctAnswer: 2,
          explanation: "The upper limit x is the variable.",
        },
      ],
    },
  ],

  "y12m-ch11-review": [
    {
      title: "Review of Chapter 11 — Integration",
      explanation:
        "Chapter 11 develops antidifferentiation and the definite integral.\n\nCORE TOOLS:\n\n  • Power rule, including (ax + b)^n\n  • ∫ e^{kx} dx = (1/k) e^{kx} + C\n  • ∫ 1/(ax + b) dx = (1/a) ln|ax + b| + C\n  • ∫ sin(kx) dx and ∫ cos(kx) dx\n  • Linearity\n  • FTC: ∫_a^b f dx = F(b) − F(a)\n\nAPPLICATIONS: area under a curve, area between curves, kinematics (displacement vs distance), accumulation of a rate.\n\nVCE exam responses must show the antiderivative, the substitution into [F(x)]_a^b, and a clear contextual interpretation with units when modelling.",
      keyPoints: [
        "Match each integrand to a standard template",
        "Split intervals where the integrand changes sign",
        "Use FTC to convert antiderivatives into numerical answers",
        "Interpret applications with units",
      ],
      workedExamples: [
        {
          problem: "Find the area between y = e^x and y = 1 on [0, 1].",
          steps: [
            "On (0, 1] e^x > 1, intersect at x = 0",
            "A = ∫_0^1 (e^x − 1) dx = [e^x − x]_0^1 = (e − 1) − (1 − 0) = e − 2",
          ],
          answer: "e − 2 ≈ 0.718 sq units.",
        },
      ],
      tips: [
        "Always sketch first if the integrand could change sign",
        "Differentiate every antiderivative mentally to verify",
      ],
      formulas: [
        { name: "Power rule", formula: "∫ x^n dx = x^{n+1}/(n + 1) + C, n ≠ −1" },
        { name: "Linear power", formula: "∫ (ax + b)^n dx = (ax + b)^{n+1}/[a(n + 1)] + C" },
        { name: "Exponential", formula: "∫ e^{kx} dx = (1/k) e^{kx} + C" },
        { name: "FTC", formula: "∫_a^b f(x) dx = F(b) − F(a)" },
      ],
      commonErrors: [
        "Forgetting + C in indefinite integrals",
        "Missing absolute value for distance travelled",
        "Failing to split where the integrand changes sign",
      ],
      summary: ["Chapter 11 = antiderivatives + FTC + applications"],
      quiz: [
        {
          question: "∫_0^1 (2x + 1) dx =",
          options: ["1", "2", "3", "4"],
          correctAnswer: 1,
          explanation: "[x² + x]_0^1 = 2.",
        },
        {
          question: "Area between y = x² and y = 4 on [−2, 2]:",
          options: ["8/3", "16/3", "32/3", "16"],
          correctAnswer: 2,
          explanation: "∫_{−2}^2 (4 − x²) dx = [4x − x³/3]_{−2}^2 = 32/3.",
        },
        {
          question: "If v(t) changes sign, distance travelled requires:",
          options: ["∫v dt", "∫|v| dt", "v(b) − v(a)", "Average velocity"],
          correctAnswer: 1,
          explanation: "Use absolute value to count distance positively.",
        },
      ],
    },
  ],
};
