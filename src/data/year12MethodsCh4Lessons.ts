import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 4: Polynomial Functions (VCE Unit 3)

export const year12MethodsCh4Lessons: TopicLessonsMap = {
  "y12m-ch4-4a-quadratic": [
    {
      title: "Quadratic Functions",
      explanation:
        "A QUADRATIC FUNCTION has the general form f(x) = ax² + bx + c, where a ≠ 0. Its graph is a parabola — concave up when a > 0 and concave down when a < 0.\n\nVERTEX FORM: f(x) = a(x − h)² + k. The turning point sits at (h, k) and the axis of symmetry is the vertical line x = h.\n\nCOMPLETING THE SQUARE converts general form to vertex form. From f(x) = ax² + bx + c we factor a from the first two terms, halve the resulting linear coefficient, square it, add and subtract, and reorganise into a perfect square plus a constant.\n\nKEY FEATURES of any quadratic graph:\n  • Axis of symmetry: x = −b/(2a)\n  • Turning point: substitute x = −b/(2a) back into f to obtain y\n  • y-intercept: (0, c)\n  • x-intercepts: solve ax² + bx + c = 0 (factor, complete the square, or use the quadratic formula)\n  • Discriminant Δ = b² − 4ac determines how many real roots exist (Δ > 0 two distinct, Δ = 0 one repeated, Δ < 0 none).\n\nThe parabola is symmetric, so any chord parallel to the x-axis is bisected by the axis of symmetry — a useful property when the vertex is not given but two equal y-values are.",
      keyPoints: [
        "f(x) = ax² + bx + c with a ≠ 0",
        "Vertex form: f(x) = a(x − h)² + k, vertex (h, k)",
        "Axis of symmetry: x = −b/(2a)",
        "Discriminant Δ = b² − 4ac classifies roots",
      ],
      workedExamples: [
        {
          problem: "Express f(x) = x² + 6x + 5 in vertex form and state the turning point.",
          steps: [
            "Half of 6 is 3; square it to get 9",
            "x² + 6x + 5 = (x² + 6x + 9) − 9 + 5",
            "= (x + 3)² − 4",
            "Vertex (h, k) = (−3, −4)",
          ],
          answer: "f(x) = (x + 3)² − 4; turning point (−3, −4).",
        },
        {
          problem: "Find the x-intercepts of f(x) = 2x² − 5x − 3.",
          steps: [
            "Δ = (−5)² − 4(2)(−3) = 25 + 24 = 49",
            "x = (5 ± 7)/4",
            "x = 3 or x = −1/2",
          ],
          answer: "x-intercepts at x = 3 and x = −1/2.",
        },
      ],
      tips: [
        "Always factor 'a' before completing the square if a ≠ 1",
        "Use the discriminant before attempting to factor",
      ],
      formulas: [
        { name: "Vertex form", formula: "f(x) = a(x − h)² + k" },
        { name: "Axis of symmetry", formula: "x = −b/(2a)" },
        { name: "Quadratic formula", formula: "x = (−b ± √(b² − 4ac))/(2a)" },
        { name: "Discriminant", formula: "Δ = b² − 4ac" },
      ],
      examQuestion: {
        problem: "For f(x) = −2x² + 8x − 3, find the coordinates of the turning point and state the maximum value.",
        solution: [
          "Axis: x = −8/(2·−2) = 2",
          "f(2) = −2(4) + 16 − 3 = 5",
          "Turning point (2, 5); since a < 0 it is a maximum",
        ],
        answer: "Turning point (2, 5); maximum value 5.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting the negative sign in x = −b/(2a)",
        "Not factoring 'a' before completing the square",
        "Confusing maximum and minimum when a < 0",
      ],
      summary: [
        "Vertex form reveals the turning point immediately",
        "Sign of a determines concavity",
        "The discriminant predicts the number of x-intercepts",
      ],
      quiz: [
        { question: "Vertex of f(x) = (x − 4)² + 1?", options: ["(−4, 1)", "(4, −1)", "(4, 1)", "(1, 4)"], correctAnswer: 2, explanation: "h = 4, k = 1." },
        { question: "Discriminant of x² − 4x + 4?", options: ["0", "16", "−16", "8"], correctAnswer: 0, explanation: "16 − 16 = 0; one repeated root." },
        { question: "Axis of symmetry of f(x) = 3x² − 12x + 7?", options: ["x = −2", "x = 2", "x = 4", "x = 6"], correctAnswer: 1, explanation: "x = 12/6 = 2." },
      ],
    },
  ],

  "y12m-ch4-4b-rule-parabola": [
    {
      title: "Determining the Rule for a Parabola",
      explanation:
        "Three pieces of information are needed to fix a quadratic: the three coefficients a, b, c (or equivalently a, h, k in vertex form). The form you choose should match the information given.\n\nVERTEX KNOWN: use f(x) = a(x − h)² + k and substitute one extra point to find a.\n\nx-INTERCEPTS KNOWN: use the factor form f(x) = a(x − p)(x − q) where p and q are the roots, then substitute another point to find a.\n\nTHREE GENERAL POINTS: substitute into f(x) = ax² + bx + c to obtain a 3×3 linear system in a, b, c and solve.\n\nALL TURNING-POINT PROBLEMS reduce to: choose the form, substitute, solve. Watch for symmetry — two points sharing a y-value are equidistant from the axis of symmetry, which can give h directly.",
      keyPoints: [
        "Vertex given → vertex form needs one more point",
        "Roots given → factor form needs one more point",
        "Three arbitrary points → general form, solve 3×3 system",
        "Symmetric points share equal y-values either side of x = h",
      ],
      workedExamples: [
        {
          problem: "A parabola has vertex (2, 3) and passes through (0, 7). Find its rule.",
          steps: [
            "Vertex form: f(x) = a(x − 2)² + 3",
            "Sub (0, 7): 7 = a(4) + 3 → 4a = 4 → a = 1",
            "Rule: f(x) = (x − 2)² + 3",
          ],
          answer: "f(x) = (x − 2)² + 3.",
        },
        {
          problem: "A parabola cuts the x-axis at x = −1 and x = 5 and passes through (2, −18). Find the rule in expanded form.",
          steps: [
            "Factor form: f(x) = a(x + 1)(x − 5)",
            "Sub (2, −18): −18 = a(3)(−3) = −9a → a = 2",
            "f(x) = 2(x + 1)(x − 5) = 2x² − 8x − 10",
          ],
          answer: "f(x) = 2x² − 8x − 10.",
        },
      ],
      tips: [
        "Always check by substituting an unused point",
        "If the vertex is on the y-axis, h = 0 simplifies the algebra",
      ],
      formulas: [
        { name: "Vertex form", formula: "f(x) = a(x − h)² + k" },
        { name: "Factor form", formula: "f(x) = a(x − p)(x − q)" },
        { name: "General form", formula: "f(x) = ax² + bx + c" },
      ],
      examQuestion: {
        problem: "A quadratic has axis of symmetry x = 3, passes through (1, 0) and (5, 0), and through (3, −8). Find its rule.",
        solution: [
          "Roots 1 and 5: f(x) = a(x − 1)(x − 5)",
          "Sub (3, −8): −8 = a(2)(−2) = −4a → a = 2",
          "f(x) = 2(x − 1)(x − 5)",
        ],
        answer: "f(x) = 2(x − 1)(x − 5).",
      },
      commonErrors: [
        "Using vertex form when only roots are known",
        "Forgetting the leading coefficient a (assuming a = 1)",
      ],
      summary: [
        "Match the form to the given information",
        "Always solve for a last using a substituted point",
      ],
      quiz: [
        { question: "Vertex (1, 4) and passes through (0, 6). a = ?", options: ["1", "2", "−2", "4"], correctAnswer: 1, explanation: "6 = a(1) + 4 → a = 2." },
        { question: "Roots −2, 3 and y-intercept −12. a = ?", options: ["1", "2", "−2", "3"], correctAnswer: 1, explanation: "−12 = a(−2)(3)·… checking: f(0)=a(2)(−3)=−6a=−12 → a=2." },
        { question: "Axis of symmetry between roots 4 and 10:", options: ["x = 6", "x = 7", "x = 14", "x = 5"], correctAnswer: 1, explanation: "(4+10)/2 = 7." },
      ],
    },
  ],

  "y12m-ch4-4c-language": [
    {
      title: "The Language of Polynomials",
      explanation:
        "A POLYNOMIAL of degree n is f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀, with aₙ ≠ 0. The aᵢ are called COEFFICIENTS, aₙ is the LEADING COEFFICIENT, aₙxⁿ is the LEADING TERM, and a₀ is the CONSTANT TERM.\n\nDEGREE classification: 0 constant, 1 linear, 2 quadratic, 3 cubic, 4 quartic, 5 quintic, n ≥ 6 just degree-n.\n\nEND BEHAVIOUR depends on the degree's parity and the sign of the leading coefficient:\n  • Even degree, aₙ > 0 → both ends point UP.\n  • Even degree, aₙ < 0 → both ends point DOWN.\n  • Odd degree, aₙ > 0 → left DOWN, right UP.\n  • Odd degree, aₙ < 0 → left UP, right DOWN.\n\nTHE NUMBER OF TURNING POINTS of a polynomial of degree n is at most n − 1. The number of x-intercepts is at most n.\n\nMULTIPLICITY of a root determines local behaviour: a simple root crosses the x-axis, a double root touches and bounces, a triple root crosses with a flat inflection.",
      keyPoints: [
        "Degree = highest power of x with non-zero coefficient",
        "Leading coefficient + degree determine end behaviour",
        "At most n − 1 turning points, at most n x-intercepts",
        "Multiplicity controls cross/touch/inflect behaviour",
      ],
      workedExamples: [
        {
          problem: "State the degree, leading coefficient and end behaviour of f(x) = −3x⁴ + 2x³ − 5.",
          steps: [
            "Degree = 4 (even)",
            "Leading coefficient = −3 (negative)",
            "Even degree, negative leading → both ends down",
          ],
          answer: "Degree 4, leading coefficient −3, both ends point downward.",
        },
      ],
      tips: [
        "Sketches start with end behaviour, then intercepts",
      ],
      formulas: [
        { name: "Polynomial", formula: "f(x) = aₙxⁿ + … + a₁x + a₀" },
      ],
      examQuestion: {
        problem: "A polynomial has degree 5, positive leading coefficient, and roots at x = −2 (simple), x = 0 (double) and x = 3 (double). Sketch its key features.",
        solution: [
          "End behaviour: left down, right up",
          "x = −2: crosses",
          "x = 0: touches and bounces",
          "x = 3: touches and bounces",
        ],
        answer: "Degree 5 cubic-ish shape: rises from bottom-left, crosses at −2, touches and bounces at 0 and 3, exits top-right.",
      },
      commonErrors: [
        "Using the constant term as the leading coefficient",
        "Ignoring multiplicity when sketching",
      ],
      summary: [
        "Degree + leading sign = the silhouette",
        "Multiplicity = local behaviour at roots",
      ],
      quiz: [
        { question: "End behaviour of f(x) = 2x³ − x:", options: ["Both up", "Both down", "Left down, right up", "Left up, right down"], correctAnswer: 2, explanation: "Odd degree, +ve leading." },
        { question: "Max turning points of a degree-7 polynomial:", options: ["5", "6", "7", "8"], correctAnswer: 1, explanation: "n − 1 = 6." },
        { question: "Behaviour at a double root:", options: ["Cross", "Touch and bounce", "Flat inflection", "Asymptote"], correctAnswer: 1, explanation: "Even multiplicity touches." },
      ],
    },
  ],

  "y12m-ch4-4d-division-factorisation": [
    {
      title: "Division and Factorisation of Polynomials",
      explanation:
        "POLYNOMIAL LONG DIVISION mirrors numerical long division. Dividing f(x) by d(x) gives f(x) = d(x)·q(x) + r(x), where deg r < deg d. The REMAINDER THEOREM says the remainder when f(x) is divided by (x − a) is f(a).\n\nFACTOR THEOREM: (x − a) is a factor of f(x) if and only if f(a) = 0. To factorise a cubic, search rational roots a using factors of the constant term divided by factors of the leading coefficient. Once one root a is found, divide f by (x − a) to obtain a quadratic factor and finish with the quadratic formula or further factoring.\n\nKey strategy for cubic factorisation:\n  1. Try small integer roots first (±1, ±2, ±factors of constant/leading).\n  2. Confirm using the factor theorem.\n  3. Long-divide or use synthetic division.\n  4. Factorise the remaining quadratic.",
      keyPoints: [
        "f(x) = d(x)q(x) + r(x), deg r < deg d",
        "Remainder theorem: r = f(a) for divisor (x − a)",
        "Factor theorem: f(a) = 0 ⇔ (x − a) is a factor",
        "Search rational roots from ±(factors of constant)/(factors of leading)",
      ],
      workedExamples: [
        {
          problem: "Factorise f(x) = x³ − 4x.",
          steps: [
            "x³ − 4x = x(x² − 4)",
            "= x(x − 2)(x + 2)",
          ],
          answer: "f(x) = x(x − 2)(x + 2).",
        },
        {
          problem: "Factorise f(x) = x³ − 6x² + 11x − 6.",
          steps: [
            "Try x = 1: 1 − 6 + 11 − 6 = 0 ✓ so (x − 1) is a factor",
            "Divide: x³ − 6x² + 11x − 6 ÷ (x − 1) = x² − 5x + 6",
            "x² − 5x + 6 = (x − 2)(x − 3)",
            "Therefore f(x) = (x − 1)(x − 2)(x − 3)",
          ],
          answer: "f(x) = (x − 1)(x − 2)(x − 3).",
        },
      ],
      tips: [
        "Try x = 1 and x = −1 first — they are the cheapest tests",
      ],
      formulas: [
        { name: "Division identity", formula: "f(x) = d(x)q(x) + r(x)" },
        { name: "Remainder theorem", formula: "r = f(a)" },
      ],
      examQuestion: {
        problem: "Find all real solutions of x³ + 2x² − 5x − 6 = 0.",
        solution: [
          "Try x = −1: −1 + 2 + 5 − 6 = 0 ✓",
          "Divide: x³ + 2x² − 5x − 6 = (x + 1)(x² + x − 6)",
          "x² + x − 6 = (x + 3)(x − 2)",
          "Roots: x = −1, −3, 2",
        ],
        answer: "x = −3, −1, 2.",
        marks: 4,
      },
      commonErrors: [
        "Algebra slips during long division (sign errors)",
        "Stopping after finding one root and forgetting to factor the quadratic",
      ],
      summary: [
        "Use factor theorem to find one root, then divide",
        "Always finish by factoring the quotient quadratic",
      ],
      quiz: [
        { question: "If f(2) = 0 then a factor of f(x) is:", options: ["(x + 2)", "(x − 2)", "(2x − 1)", "(2x + 1)"], correctAnswer: 1, explanation: "Factor theorem." },
        { question: "Remainder when x³ − 1 is divided by (x − 1):", options: ["0", "1", "2", "−1"], correctAnswer: 0, explanation: "f(1) = 0." },
        { question: "x³ − x = ", options: ["x(x−1)(x+1)", "(x−1)³", "x²(x−1)", "x(x²+1)"], correctAnswer: 0, explanation: "Difference of squares inside." },
      ],
    },
  ],

  "y12m-ch4-4e-cubic": [
    {
      title: "The General Cubic Function",
      explanation:
        "A CUBIC FUNCTION has the form f(x) = ax³ + bx² + cx + d with a ≠ 0. Its graph always has end behaviour determined by a: a > 0 means the curve rises from bottom-left to top-right; a < 0 reverses both ends.\n\nNUMBER OF REAL ROOTS: between 1 and 3. A cubic always has at least one real root because complex roots come in conjugate pairs.\n\nNUMBER OF TURNING POINTS: 0 or 2. When the cubic is monotonic (e.g. f(x) = x³) it has a STATIONARY POINT OF INFLECTION.\n\nTRANSFORMED CUBIC: y = a(x − h)³ + k has a stationary point of inflection at (h, k). This form is analogous to the vertex form of a parabola.\n\nFor sketching a fully factored cubic y = a(x − p)(x − q)(x − r):\n  • x-intercepts at x = p, q, r\n  • y-intercept at f(0) = −apqr\n  • End behaviour from sign of a\n  • Use a sign table to determine where the curve is above or below the x-axis between roots.",
      keyPoints: [
        "f(x) = ax³ + bx² + cx + d, a ≠ 0",
        "1, 2 or 3 real roots",
        "0 or 2 turning points",
        "y = a(x − h)³ + k has stationary inflection at (h, k)",
      ],
      workedExamples: [
        {
          problem: "Sketch y = (x − 1)(x + 2)(x − 3), labelling intercepts.",
          steps: [
            "x-intercepts: x = 1, −2, 3",
            "y-intercept: y = (−1)(2)(−3) = 6",
            "Leading coefficient = 1 (positive) → up to the right, down to the left",
            "Sign chart confirms below axis for x < −2, above for −2 < x < 1, below for 1 < x < 3, above for x > 3",
          ],
          answer: "Cuts x-axis at −2, 1, 3; y-intercept 6; rises to right, falls to left.",
        },
      ],
      tips: [
        "Sketch end behaviour first to anchor the curve",
      ],
      formulas: [
        { name: "Inflection form", formula: "y = a(x − h)³ + k" },
      ],
      examQuestion: {
        problem: "Sketch y = −2(x + 1)(x − 2)², showing all intercepts and key features.",
        solution: [
          "Roots x = −1 (simple) and x = 2 (double — touch and bounce)",
          "y-intercept: −2(1)(4) = −8",
          "Leading sign negative → top-left to bottom-right end behaviour",
          "Curve crosses at −1, touches and bounces at 2",
        ],
        answer: "Crosses at (−1, 0), touches at (2, 0), y-intercept (0, −8); top-left to bottom-right.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting the y-intercept includes the leading coefficient and a sign",
        "Treating a double root as a normal crossing",
      ],
      summary: [
        "End behaviour + multiplicity + intercepts = sketch",
      ],
      quiz: [
        { question: "Number of turning points of y = x³:", options: ["0", "1", "2", "3"], correctAnswer: 0, explanation: "Stationary inflection only." },
        { question: "y = (x − 1)³ inflection at:", options: ["(0, 0)", "(1, 0)", "(−1, 0)", "(0, 1)"], correctAnswer: 1, explanation: "h = 1, k = 0." },
        { question: "y-intercept of y = 2(x − 1)(x + 2)(x − 3):", options: ["12", "−12", "6", "−6"], correctAnswer: 0, explanation: "2·(−1)·2·(−3) = 12." },
      ],
    },
  ],

  "y12m-ch4-4f-higher-degree": [
    {
      title: "Polynomials of Higher Degree",
      explanation:
        "QUARTIC FUNCTIONS (degree 4) and higher generalise the same ideas. End behaviour follows the same parity rule: even degree → both ends agree, odd degree → ends disagree.\n\nA quartic has 0, 2 or 4 real roots and at most 3 turning points. A quintic (degree 5) has 1, 3 or 5 real roots and at most 4 turning points.\n\nSPECIAL FACTORED FORMS:\n  • y = a(x − h)⁴ + k: 'flat-bottomed' parabola-like curve with vertex (h, k)\n  • y = (x − p)²(x − q)²: touches at both roots\n  • y = (x − p)³(x − q): flat inflection at p, simple cross at q\n\nQUADRATIC IN DISGUISE: equations like x⁴ − 5x² + 4 = 0 can be solved by the substitution u = x², solving u² − 5u + 4 = 0, then back-substituting and taking square roots.",
      keyPoints: [
        "Even degree polynomials have matching end behaviour",
        "y = a(x − h)⁴ + k has vertex (h, k)",
        "Use u = x² substitution for quartic-in-disguise equations",
      ],
      workedExamples: [
        {
          problem: "Solve x⁴ − 5x² + 4 = 0.",
          steps: [
            "Let u = x²: u² − 5u + 4 = 0",
            "(u − 1)(u − 4) = 0 → u = 1 or 4",
            "x² = 1 → x = ±1; x² = 4 → x = ±2",
          ],
          answer: "x = −2, −1, 1, 2.",
        },
      ],
      tips: [
        "Always check the substitution domain: u = x² requires u ≥ 0",
      ],
      formulas: [
        { name: "Quartic vertex form", formula: "y = a(x − h)⁴ + k" },
      ],
      examQuestion: {
        problem: "Sketch y = (x − 1)²(x + 2)² indicating all intercepts and behaviour.",
        solution: [
          "Both roots are double → touch and bounce at x = 1 and x = −2",
          "y-intercept: (−1)²(2)² = 4",
          "Even degree, positive leading → both ends up",
          "Curve sits at or above the x-axis (product of squares)",
        ],
        answer: "Touches at (−2, 0) and (1, 0); y-intercept (0, 4); both ends up; curve ≥ 0 everywhere.",
      },
      commonErrors: [
        "Taking only positive roots from x² = c",
        "Treating y = (x − 1)⁴ as a cubic",
      ],
      summary: [
        "Substitution turns even quartics into quadratics",
        "Multiplicity rules from cubics carry over directly",
      ],
      quiz: [
        { question: "Maximum turning points of a degree-6 polynomial:", options: ["3", "4", "5", "6"], correctAnswer: 2, explanation: "n − 1 = 5." },
        { question: "x⁴ = 16 has solutions:", options: ["x = 2", "x = ±2", "x = ±4", "x = 4"], correctAnswer: 1, explanation: "Real solutions only." },
        { question: "End behaviour of y = −x⁴:", options: ["Both up", "Both down", "Up/down", "Down/up"], correctAnswer: 1, explanation: "Even degree, negative leading." },
      ],
    },
  ],

  "y12m-ch4-4g-rule-from-graph": [
    {
      title: "Determining the Rule for the Graph of a Polynomial",
      explanation:
        "Working backwards from a graph requires reading off three pieces of information: ROOTS (with multiplicity), one EXTRA POINT, and the END BEHAVIOUR (sign of a).\n\nSTEP-BY-STEP:\n  1. Identify each x-intercept and decide whether the graph crosses (odd multiplicity) or touches and bounces (even multiplicity), or shows a flat inflection (triple).\n  2. Write y = a · (x − r₁)^{m₁} · (x − r₂)^{m₂} · …\n  3. Substitute another known point — often the y-intercept — to determine a.\n  4. Confirm the end behaviour matches the sign of a.\n\nWhen the degree is not directly visible, use the SUM OF MULTIPLICITIES rule: the degree equals the total of all multiplicities. For Methods, Year 12 graphs are typically degree 3 or 4.",
      keyPoints: [
        "Multiplicity is read from the graph's local behaviour at each root",
        "Extra point gives the leading coefficient a",
        "Sign of a must agree with the end behaviour",
      ],
      workedExamples: [
        {
          problem: "A cubic crosses the x-axis at x = −2 and touches at x = 1, with y-intercept (0, −4). Find its rule.",
          steps: [
            "Form: y = a(x + 2)(x − 1)²",
            "Sub (0, −4): −4 = a(2)(1) = 2a → a = −2",
            "y = −2(x + 2)(x − 1)²",
          ],
          answer: "y = −2(x + 2)(x − 1)².",
        },
      ],
      tips: [
        "Always verify the leading sign against the sketch",
      ],
      formulas: [
        { name: "Factored form", formula: "y = a(x − r₁)^{m₁}(x − r₂)^{m₂}…" },
      ],
      examQuestion: {
        problem: "A quartic touches the x-axis at x = −1 and at x = 3 and has y-intercept (0, 9). Find the rule.",
        solution: [
          "Form: y = a(x + 1)²(x − 3)²",
          "Sub (0, 9): 9 = a(1)(9) = 9a → a = 1",
          "y = (x + 1)²(x − 3)²",
        ],
        answer: "y = (x + 1)²(x − 3)².",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to square the bracket at a touch-and-bounce root",
        "Using the wrong sign for a",
      ],
      summary: [
        "Roots + multiplicity + one extra point uniquely determines a polynomial",
      ],
      quiz: [
        { question: "Touch-and-bounce at x = 4 means a factor of:", options: ["(x − 4)", "(x − 4)²", "(x + 4)²", "(x − 4)³"], correctAnswer: 1, explanation: "Even multiplicity." },
        { question: "If a cubic touches at one root, total multiplicity is:", options: ["2", "3", "4", "5"], correctAnswer: 1, explanation: "1 + 2 = 3." },
        { question: "Cross at x = 5 (simple) means factor:", options: ["(x − 5)²", "(x + 5)", "(x − 5)", "(x − 5)³"], correctAnswer: 2, explanation: "Odd multiplicity = 1." },
      ],
    },
  ],

  "y12m-ch4-4h-literal": [
    {
      title: "Solution of Literal Equations and Systems of Equations",
      explanation:
        "A LITERAL EQUATION contains parameters as well as the variable. The strategy is identical to numerical work, but the answer is expressed in terms of the parameters.\n\nSYSTEMS OF EQUATIONS combining a polynomial and a linear equation are solved by SUBSTITUTION: rearrange the linear equation for one variable and substitute into the polynomial. Solving the resulting one-variable polynomial gives the intersection x-values; substitute back to obtain y.\n\nFor a line y = mx + c and a parabola y = ax² + bx + c, the equation ax² + (b − m)x + (c − c) = 0 has discriminant determining the number of intersections (two, one tangent, or none). This is a crucial idea for tangent problems.",
      keyPoints: [
        "Literal equations: treat parameters as constants",
        "Polynomial-line systems: substitute the linear into the polynomial",
        "Discriminant of the resulting quadratic = number of intersections",
      ],
      workedExamples: [
        {
          problem: "Find the values of k for which y = kx − 4 is a tangent to y = x² − 3x.",
          steps: [
            "Equate: x² − 3x = kx − 4 → x² − (3 + k)x + 4 = 0",
            "Tangent ⇒ Δ = 0 → (3 + k)² − 16 = 0",
            "(3 + k)² = 16 → 3 + k = ±4",
            "k = 1 or k = −7",
          ],
          answer: "k = 1 or k = −7.",
        },
      ],
      tips: [
        "Δ > 0 two intersections, Δ = 0 tangent, Δ < 0 no intersection",
      ],
      formulas: [
        { name: "Discriminant", formula: "Δ = b² − 4ac" },
      ],
      examQuestion: {
        problem: "Find the value(s) of m for which the line y = mx + 2 is a tangent to y = x² + 3x + 6.",
        solution: [
          "x² + 3x + 6 = mx + 2 → x² + (3 − m)x + 4 = 0",
          "Δ = (3 − m)² − 16 = 0",
          "3 − m = ±4 → m = −1 or m = 7",
        ],
        answer: "m = −1 or m = 7.",
        marks: 3,
      },
      commonErrors: [
        "Solving for x first instead of using the discriminant",
        "Forgetting both ± solutions when taking square roots",
      ],
      summary: [
        "Tangency conditions become discriminant equations",
      ],
      quiz: [
        { question: "Δ = 0 means:", options: ["Two roots", "Tangent / one root", "No real roots", "Complex roots"], correctAnswer: 1, explanation: "Repeated root = tangent." },
        { question: "If x² − 4x + k = 0 has one solution, k = ?", options: ["2", "4", "0", "16"], correctAnswer: 1, explanation: "Δ = 16 − 4k = 0." },
        { question: "Solve for x: ax + b = 0 (a ≠ 0):", options: ["x = b/a", "x = −b/a", "x = a/b", "x = −a/b"], correctAnswer: 1, explanation: "Standard literal." },
      ],
    },
  ],

  "y12m-ch4-review": [
    {
      title: "Chapter 4 Review — Polynomial Functions",
      explanation:
        "A consolidation of the polynomial toolkit for VCE Methods Unit 3.\n\nQUADRATICS: vertex form for turning points, factor form for roots, general form for derivatives. The discriminant decides root count, and completing the square is the universal converter.\n\nPOLYNOMIAL LANGUAGE: degree controls turning-point count and root count; multiplicity controls local behaviour at each root; leading coefficient controls end behaviour.\n\nFACTORISATION: try rational roots, confirm with the factor theorem, divide using long division, finish with the quadratic formula.\n\nCUBICS AND QUARTICS: sketch using end behaviour + intercepts + multiplicity. Use vertex/inflection forms when the special structure is given.\n\nDETERMINING RULES: choose the form that minimises unknowns; substitute remaining points to fix the leading coefficient.\n\nLITERAL AND SYSTEM PROBLEMS: substitution + discriminant is the universal recipe.",
      keyPoints: [
        "Vertex form ⇄ general form via completing the square",
        "Factor + Remainder Theorems are the workhorses for cubics",
        "Multiplicity controls local behaviour at roots",
        "Δ classifies root count; tangency ⇔ Δ = 0",
      ],
      workedExamples: [
        {
          problem: "Factorise f(x) = 2x³ − 7x² + 2x + 3 completely.",
          steps: [
            "Try x = 3: 54 − 63 + 6 + 3 = 0 ✓",
            "Divide: 2x³ − 7x² + 2x + 3 = (x − 3)(2x² − x − 1)",
            "2x² − x − 1 = (2x + 1)(x − 1)",
            "Therefore f(x) = (x − 3)(2x + 1)(x − 1)",
          ],
          answer: "f(x) = (x − 3)(2x + 1)(x − 1).",
        },
      ],
      tips: [
        "Read the question style first: roots? rule? sketch? tangent?",
      ],
      formulas: [
        { name: "Quadratic formula", formula: "x = (−b ± √Δ)/(2a)" },
        { name: "Discriminant", formula: "Δ = b² − 4ac" },
      ],
      examQuestion: {
        problem: "Find the values of k for which kx² + (k − 4)x + 1 has exactly one real solution.",
        solution: [
          "Δ = (k − 4)² − 4k(1) = 0",
          "k² − 8k + 16 − 4k = 0",
          "k² − 12k + 16 = 0",
          "k = (12 ± √(144 − 64))/2 = 6 ± 2√5",
        ],
        answer: "k = 6 + 2√5 or k = 6 − 2√5.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting the leading coefficient when k is itself the parameter",
        "Sign slips in completing the square",
      ],
      summary: [
        "Polynomials are about: degree, multiplicity, end behaviour, and the discriminant",
      ],
      quiz: [
        { question: "Completing the square of x² − 8x:", options: ["(x − 4)² − 16", "(x − 4)² + 16", "(x + 4)² − 16", "(x + 4)² + 16"], correctAnswer: 0, explanation: "Half of −8 is −4." },
        { question: "Number of real roots of x² + 1 = 0:", options: ["0", "1", "2", "Infinite"], correctAnswer: 0, explanation: "Δ = −4 < 0." },
        { question: "(x − 2)³ has root behaviour:", options: ["Cross", "Touch", "Flat inflection", "Asymptote"], correctAnswer: 2, explanation: "Triple root → flat inflection." },
      ],
    },
  ],
};
