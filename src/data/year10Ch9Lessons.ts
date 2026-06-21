import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 9: Functions & Polynomials (10A)
export const year10Ch9Lessons: TopicLessonsMap = {
  "y10-function-notation": [
    {
      title: "Function Notation f(x)",
      explanation:
        "OVERVIEW. A function assigns to each input x exactly one output. The notation f(x) means 'the value of f at x'. We evaluate by substituting.\n\nDOMAIN: set of allowable inputs. RANGE: set of all outputs. The DOMAIN is restricted by:\n  • Division by zero (denominators ≠ 0)\n  • Square roots of negatives (radicand ≥ 0).",
      keyPoints: ["f(x) = output", "Substitute carefully", "Domain restrictions: denominator, radicand"],
      workedExamples: [
        { problem: "f(x) = 2x² − 3. Find f(−2).", steps: ["= 2·4 − 3"], answer: "5" },
        { problem: "Find domain of g(x) = √(x − 4).", steps: ["x − 4 ≥ 0"], answer: "x ≥ 4" },
      ],
      tips: ["Use brackets when substituting negatives."],
      commonErrors: ["Forgetting brackets: −2² = −4 vs (−2)² = 4"],
      summary: ["EXAM INSIGHT: Domain analysis is critical for VCE Methods."],
      practice: [
        { question: "f(x)=x²+1. f(3)?", answer: "10" },
        { question: "Domain of h(x)=1/(x−2)?", answer: "x ≠ 2" },
      ],
      quiz: [
        { question: "f(x)=3x−4. f(0)?", options: ["−4", "0", "4", "3"], correctAnswer: 0, explanation: "3·0−4 = −4." },
      ],
    },
  ],
  "y10-intro-polynomials": [
    {
      title: "Introducing Polynomials",
      explanation:
        "A polynomial in x is a sum of terms aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₀. The DEGREE is the highest power. The LEADING COEFFICIENT is aₙ.\n\nNAMES: degree 1 = linear, 2 = quadratic, 3 = cubic, 4 = quartic.",
      keyPoints: ["Degree = highest power", "Leading coefficient first", "Constant term = a₀"],
      workedExamples: [
        { problem: "P(x) = 4x³ − 2x + 7. State degree, leading coefficient, constant.", steps: ["Degree 3", "Leading 4", "Constant 7"], answer: "Degree 3, LC 4, const 7" },
      ],
      tips: ["Always rewrite in descending powers."],
      commonErrors: ["Treating −2x as the leading term"],
      summary: ["EXAM INSIGHT: Set up polynomials in descending order before analysis."],
      practice: [{ question: "Degree of 5x⁴ − x⁵ + 2?", answer: "5" }],
      quiz: [{ question: "Constant of 7x² + 3x − 1?", options: ["7", "3", "−1", "x"], correctAnswer: 2, explanation: "Constant term is −1." }],
    },
  ],
  "y10-expanding-polynomials": [
    {
      title: "Expanding Polynomial Products",
      explanation: "Multiply each term in one polynomial by each term in the other, then collect like terms. For three or more factors, expand pair-by-pair.",
      keyPoints: ["Multiply every-by-every", "Collect like terms", "Degrees add"],
      workedExamples: [
        { problem: "Expand (x − 2)(x² + 3x − 1).", steps: ["x³ + 3x² − x − 2x² − 6x + 2", "= x³ + x² − 7x + 2"], answer: "x³ + x² − 7x + 2" },
      ],
      tips: ["Use a grid (table) to track all products."],
      commonErrors: ["Missing a sub-product"],
      summary: ["EXAM INSIGHT: Result degree = sum of factor degrees."],
      practice: [{ question: "(x+1)(x²−x+1) = ?", answer: "x³+1" }],
      quiz: [{ question: "Degree of (x²+1)(x³−x) = ?", options: ["3", "4", "5", "6"], correctAnswer: 2, explanation: "2 + 3 = 5." }],
    },
  ],
  "y10-division-polynomials": [
    {
      title: "Polynomial Long Division",
      explanation:
        "Divide P(x) by D(x) to obtain quotient Q(x) and remainder R(x):  P(x) = D(x)·Q(x) + R(x), with deg R < deg D.\n\nMETHOD. Divide leading terms, multiply, subtract, bring down next term, repeat.",
      keyPoints: ["P = DQ + R", "Subtract carefully (sign change)", "Stop when deg R < deg D"],
      workedExamples: [
        { problem: "Divide x³ − 2x² + x − 5 by x − 1.", steps: ["x² · (x − 1) = x³ − x²; subtract → −x² + x − 5", "−x · (x − 1) = −x² + x; subtract → 0 − 5", "Quotient x² − x, remainder −5"], answer: "Q(x) = x² − x, R = −5" },
      ],
      tips: ["Keep columns of like powers aligned."],
      commonErrors: ["Sign errors when subtracting"],
      summary: ["EXAM INSIGHT: Verify by re-multiplying DQ + R."],
      practice: [{ question: "Divide 2x²+5x+3 by x+1.", answer: "Q=2x+3, R=0" }],
      quiz: [{ question: "If R(x) = 0 then D(x) is…", options: ["A factor", "Linear", "Cubic", "Equal to P"], correctAnswer: 0, explanation: "Zero remainder ⇒ factor." }],
    },
  ],
  "y10-remainder-factor": [
    {
      title: "Remainder and Factor Theorems",
      explanation:
        "REMAINDER THEOREM: When P(x) is divided by (x − a), the remainder is P(a).\n\nFACTOR THEOREM: (x − a) is a factor of P(x) iff P(a) = 0.",
      keyPoints: ["P(a) = remainder", "P(a) = 0 ⇔ (x − a) is a factor", "Useful for finding roots"],
      workedExamples: [
        { problem: "Show (x − 2) is a factor of P(x) = x³ − 4x² + x + 6.", steps: ["P(2) = 8 − 16 + 2 + 6 = 0"], answer: "Yes, factor" },
      ],
      tips: ["Try factors of the constant term as candidate roots."],
      commonErrors: ["Computing P(−a) instead of P(a)"],
      summary: ["EXAM INSIGHT: Use rational root theorem to spot candidate roots."],
      practice: [{ question: "Remainder when x³−1 is divided by x−1?", answer: "0" }],
      quiz: [{ question: "P(3)=0 means…", options: ["x+3 is factor", "x−3 is factor", "P has degree 3", "x=−3 is root"], correctAnswer: 1, explanation: "(x−3) is a factor." }],
    },
  ],
  "y10-solving-polynomial": [
    {
      title: "Solving Polynomial Equations",
      explanation:
        "STRATEGY.\n  1. Use factor theorem to find one root r.\n  2. Divide by (x − r) to reduce degree.\n  3. Solve the resulting quadratic by formula or factoring.\n  4. List all real roots.",
      keyPoints: ["Find root → divide → quadratic", "Test factors of constant", "Roots ↔ x-intercepts"],
      workedExamples: [
        { problem: "Solve x³ − 6x² + 11x − 6 = 0.", steps: ["P(1) = 0 → (x−1) is factor", "Divide: x²−5x+6 = (x−2)(x−3)", "Roots 1, 2, 3"], answer: "x = 1, 2, 3" },
      ],
      tips: ["Check candidate ±factors of constant term."],
      commonErrors: ["Missing roots from incomplete division"],
      summary: ["EXAM INSIGHT: Real roots correspond to x-intercepts."],
      practice: [{ question: "Solve x³ − x = 0.", answer: "x = 0, 1, −1" }],
      quiz: [{ question: "If polynomial has degree n, max real roots:", options: ["n−1", "n", "n+1", "2n"], correctAnswer: 1, explanation: "At most n real roots." }],
    },
  ],
  "y10-cubic-functions": [
    {
      title: "Graphing Cubic Functions",
      explanation:
        "Cubic shape depends on the leading coefficient: positive ⇒ from bottom-left to top-right; negative ⇒ top-left to bottom-right.\n\nUse FACTORED FORM y = a(x − r₁)(x − r₂)(x − r₃) to read x-intercepts. Mark y-intercept (set x=0) and end behaviour.",
      keyPoints: ["3 real roots → 3 x-intercepts", "Repeated root → graph touches x-axis", "End behaviour from leading sign"],
      workedExamples: [
        { problem: "Sketch y = (x+1)(x−2)(x−4).", steps: ["x-intercepts: −1, 2, 4", "y-intercept: (−1)(−2)(−4) = −8", "Positive leading → ∞ as x→∞"], answer: "Sketch with intercepts marked" },
      ],
      tips: ["Check sign of y in each interval between roots."],
      commonErrors: ["Missing the y-intercept"],
      summary: ["EXAM INSIGHT: Indicate end behaviour with arrows."],
      practice: [{ question: "End behaviour of y = −x³?", answer: "From top-left to bottom-right" }],
      quiz: [{ question: "y = (x−1)²(x+2). x-intercepts?", options: ["1, −2", "−1, 2", "1, 2", "1, 1, −2"], correctAnswer: 0, explanation: "Roots 1 (double) and −2." }],
    },
  ],
  "y10-graphs-polynomials": [
    {
      title: "Sketching General Polynomials",
      explanation:
        "STEPS.\n  1. Find x-intercepts via factoring.\n  2. Find y-intercept (P(0)).\n  3. Determine end behaviour (degree + leading sign).\n  4. Note repeated roots: even multiplicity → touch and turn; odd multiplicity → cross.",
      keyPoints: ["Multiplicity controls behaviour at roots", "Even degree: same end direction", "Odd degree: opposite ends"],
      workedExamples: [
        { problem: "Sketch y = (x+1)²(x−2).", steps: ["Roots −1 (double), 2", "y-int = 1·(−2) = −2", "Touches at x=−1, crosses at x=2"], answer: "Touch-turn at −1, cross at 2" },
      ],
      tips: ["Test sign in each interval."],
      commonErrors: ["Drawing 'touch and turn' as a cross"],
      summary: ["EXAM INSIGHT: Multiplicity is a high-yield Methods topic."],
      practice: [{ question: "Multiplicity 3 root behaviour?", answer: "Cross with point of inflection" }],
      quiz: [{ question: "y = (x−1)³. At x=1 the graph…", options: ["Crosses straight", "Touches & turns", "Crosses with inflection", "Vertical asymptote"], correctAnswer: 2, explanation: "Odd multiplicity > 1 → inflection cross." }],
    },
  ],
  "y10-graphs-circles": [
    {
      title: "Graphs of Circles",
      explanation:
        "Standard form: (x − h)² + (y − k)² = r². Centre (h, k), radius r. Convert general form x² + y² + Dx + Ey + F = 0 to standard by completing the square.",
      keyPoints: ["Centre (h, k), radius r", "Complete the square to find centre/radius"],
      workedExamples: [
        { problem: "Centre and radius of (x − 3)² + (y + 2)² = 25.", steps: ["Centre (3, −2), radius 5"], answer: "(3, −2), r=5" },
        { problem: "Convert x² + y² − 4x + 6y − 12 = 0.", steps: ["(x−2)² + (y+3)² = 12 + 4 + 9 = 25"], answer: "Centre (2, −3), r=5" },
      ],
      tips: ["Constants moved to RHS."],
      commonErrors: ["Sign errors in completing the square"],
      summary: ["EXAM INSIGHT: Always state centre and radius."],
      practice: [{ question: "x² + y² = 49 has radius?", answer: "7" }],
      quiz: [{ question: "Centre of (x+5)² + y² = 9?", options: ["(5,0)", "(−5,0)", "(0,5)", "(0,−5)"], correctAnswer: 1, explanation: "h = −5, k = 0." }],
    },
  ],
  "y10-hyperbolic-functions": [
    {
      title: "Hyperbolic Functions y = k/x",
      explanation:
        "y = k/x is a hyperbola with two branches. ASYMPTOTES: x = 0 (vertical) and y = 0 (horizontal). Branches in Q1 & Q3 if k > 0; Q2 & Q4 if k < 0.\n\nGeneral: y = k/(x − h) + c shifts asymptotes to x = h, y = c.",
      keyPoints: ["Asymptotes x=h, y=c", "Branch sign depends on k", "No x or y intercept when h=c=0"],
      workedExamples: [
        { problem: "Asymptotes of y = 2/(x − 3) + 1?", steps: ["Vertical x=3", "Horizontal y=1"], answer: "x=3, y=1" },
      ],
      tips: ["Sketch asymptotes with dashed lines."],
      commonErrors: ["Wrong sign of horizontal asymptote shift"],
      summary: ["EXAM INSIGHT: Always identify both asymptotes."],
      practice: [{ question: "Asymptotes of y = 3/(x+2)?", answer: "x = −2, y = 0" }],
      quiz: [{ question: "y = 5/x is in which quadrants?", options: ["Q1, Q2", "Q1, Q3", "Q2, Q4", "Q3, Q4"], correctAnswer: 1, explanation: "k>0 ⇒ Q1 and Q3." }],
    },
  ],
  "y10-transformations-graphs": [
    {
      title: "Transformations of Graphs",
      explanation:
        "Given y = f(x), transformations:\n  • y = f(x) + c — vertical shift c units up.\n  • y = f(x − h) — horizontal shift h units right.\n  • y = a·f(x) — vertical dilation by factor |a| (reflect if a<0).\n  • y = f(bx) — horizontal dilation by 1/|b|.\n  • y = −f(x) — reflect in x-axis. y = f(−x) — reflect in y-axis.",
      keyPoints: ["Inside brackets: horizontal & opposite", "Outside brackets: vertical & direct"],
      workedExamples: [
        { problem: "Describe y = 2(x − 3)² + 1 from y = x².", steps: ["Right 3", "Vertical dilation 2", "Up 1"], answer: "as listed" },
      ],
      tips: ["Apply order: dilation → reflection → translation."],
      commonErrors: ["Misreading horizontal shift sign"],
      summary: ["EXAM INSIGHT: Methods rests on transformation fluency."],
      practice: [{ question: "y = (x+2)² is y=x² shifted…", answer: "left 2" }],
      quiz: [{ question: "y = −f(x) is a reflection in:", options: ["x-axis", "y-axis", "origin", "y=x"], correctAnswer: 0, explanation: "Negative outside ⇒ reflect across x-axis." }],
    },
  ],
};
