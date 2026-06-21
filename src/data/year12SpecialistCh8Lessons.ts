import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 8: Differentiation and Rational Functions

export const year12SpecialistCh8Lessons: TopicLessonsMap = {
  "y12s-ch8-8a-differentiation": [
    {
      title: "Review of Differentiation",
      explanation:
        "Core differentiation rules carried into Specialist:\n  • Power: d/dx(xⁿ) = n·xⁿ⁻¹\n  • Product: (uv)' = u'v + uv'\n  • Quotient: (u/v)' = (u'v − uv')/v²\n  • Chain: dy/dx = dy/du · du/dx\n  • Standard: d/dx(eˣ) = eˣ; d/dx(ln x) = 1/x; d/dx(sin x) = cos x; d/dx(cos x) = −sin x; d/dx(tan x) = sec² x.",
      keyPoints: [
        "Identify outer/inner functions before applying chain rule",
        "Quotient rule sign: numerator is u'v − uv', NOT uv' − u'v",
        "Simplify before differentiating when possible (e.g., split fractions)",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = x²·sin(3x).",
          steps: [
            "u = x², v = sin(3x); u' = 2x, v' = 3cos(3x)",
            "y' = 2x·sin(3x) + x²·3cos(3x)",
            "= 2x sin(3x) + 3x² cos(3x)",
          ],
          answer: "2x sin(3x) + 3x² cos(3x)",
        },
      ],
      tips: ["Always factor common terms in the answer", "For ln-quotients use ln a − ln b BEFORE differentiating"],
      formulas: [{ name: "Chain", formula: "(f∘g)'(x) = f'(g(x))·g'(x)" }],
      examQuestion: {
        problem: "Differentiate y = ln((x²+1)/x).",
        solution: [
          "y = ln(x²+1) − ln x",
          "y' = 2x/(x²+1) − 1/x",
          "Combine: (2x² − (x²+1))/(x(x²+1)) = (x² − 1)/(x(x²+1))",
        ],
        answer: "(x² − 1)/(x(x²+1))",
        marks: 3,
      },
      quiz: [
        { question: "d/dx(tan x) =", options: ["sec² x", "−csc² x", "sec x tan x", "cot x"], correctAnswer: 0, explanation: "Standard." },
        { question: "Chain rule:", options: ["f'·g'", "f'(g)·g'", "f(g')", "f+g"], correctAnswer: 1, explanation: "Outer of inner times inner derivative." },
        { question: "d/dx(eˣ²) =", options: ["eˣ²", "2x·eˣ²", "x·eˣ²", "2·eˣ²"], correctAnswer: 1, explanation: "Chain rule." },
      ],
    },
  ],
  "y12s-ch8-8b-x-fy": [
    {
      title: "Derivatives of x = f(y)",
      explanation:
        "When x is given as a function of y (rather than y of x), use:\n  dy/dx = 1 / (dx/dy), provided dx/dy ≠ 0.\n\nUseful for inverse functions and curves where y is the natural independent variable.",
      keyPoints: [
        "Compute dx/dy directly, then reciprocate",
        "Express the result in terms of x by substituting y = f⁻¹(x) if required",
        "Result is undefined where dx/dy = 0 (vertical tangents on the original curve)",
      ],
      workedExamples: [
        {
          problem: "If x = y³ + y, find dy/dx.",
          steps: [
            "dx/dy = 3y² + 1",
            "dy/dx = 1/(3y² + 1)",
          ],
          answer: "1/(3y² + 1)",
        },
      ],
      tips: ["Reciprocate ONLY when dx/dy ≠ 0", "Useful when y cannot be made the subject"],
      formulas: [{ name: "Inverse rule", formula: "dy/dx = 1/(dx/dy)" }],
      examQuestion: {
        problem: "If x = sin y for y ∈ (−π/2, π/2), find dy/dx in terms of x.",
        solution: [
          "dx/dy = cos y",
          "dy/dx = 1/cos y",
          "cos y = √(1 − sin² y) = √(1 − x²)",
          "dy/dx = 1/√(1 − x²) (this is d/dx of arcsin x)",
        ],
        answer: "1/√(1 − x²)",
        marks: 3,
      },
      quiz: [
        { question: "If dx/dy = 5, then dy/dx =", options: ["5", "1/5", "−5", "0"], correctAnswer: 1, explanation: "Reciprocate." },
        { question: "Method fails when dx/dy =", options: ["1", "−1", "0", "∞"], correctAnswer: 2, explanation: "Vertical tangent." },
        { question: "Useful for finding derivatives of:", options: ["Polynomials", "Inverse functions", "Constants", "Lines"], correctAnswer: 1, explanation: "Inverses naturally have x = f(y)." },
      ],
    },
  ],
  "y12s-ch8-8c-inverse-circular": [
    {
      title: "Derivatives of Inverse Circular Functions",
      explanation:
        "Standard derivatives:\n  • d/dx(arcsin(x/a)) = 1/√(a² − x²)\n  • d/dx(arccos(x/a)) = −1/√(a² − x²)\n  • d/dx(arctan(x/a)) = a/(a² + x²)\n\nGeneral chain-rule form:\n  • d/dx(arcsin u) = u'/√(1 − u²)\n  • d/dx(arctan u) = u'/(1 + u²)",
      keyPoints: [
        "arccos derivative is the NEGATIVE of arcsin's",
        "Domain restrictions matter: arcsin(x/a) needs |x| < a",
        "Always apply chain rule when argument is a function",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = arctan(2x).",
          steps: [
            "u = 2x; u' = 2",
            "y' = 2/(1 + (2x)²) = 2/(1 + 4x²)",
          ],
          answer: "2/(1 + 4x²)",
        },
      ],
      tips: ["Memorise both 'standard' (with a) and 'unit' versions", "arccos has a minus sign — easy to forget"],
      formulas: [
        { name: "arcsin", formula: "1/√(a² − x²)" },
        { name: "arctan", formula: "a/(a² + x²)" },
      ],
      examQuestion: {
        problem: "Differentiate y = arcsin(x/3) + arctan(x/3).",
        solution: [
          "d/dx arcsin(x/3) = 1/√(9 − x²)",
          "d/dx arctan(x/3) = 3/(9 + x²)",
          "Sum: 1/√(9 − x²) + 3/(9 + x²)",
        ],
        answer: "1/√(9 − x²) + 3/(9 + x²)",
        marks: 3,
      },
      quiz: [
        { question: "d/dx arccos x =", options: ["1/√(1−x²)", "−1/√(1−x²)", "−1/(1+x²)", "1/(1+x²)"], correctAnswer: 1, explanation: "Negative of arcsin." },
        { question: "d/dx arctan(x/2) =", options: ["1/(4+x²)", "2/(4+x²)", "1/(1+x²)", "2/(1+x²)"], correctAnswer: 1, explanation: "a=2 form." },
        { question: "Domain of arcsin(x/5):", options: ["ℝ", "[−5,5]", "(−5,5)", "(0,5)"], correctAnswer: 1, explanation: "|x| ≤ 5." },
      ],
    },
  ],
  "y12s-ch8-8d-second-derivatives": [
    {
      title: "Second Derivatives and Concavity",
      explanation:
        "f''(x) measures curvature:\n  • f''(x) > 0 ⇒ concave UP (smile)\n  • f''(x) < 0 ⇒ concave DOWN (frown)\n  • f''(x) = 0 may indicate a point of inflection (further test required)\n\nSecond Derivative Test: at a stationary point x = c with f'(c)=0:\n  • f''(c) > 0 ⇒ local MIN\n  • f''(c) < 0 ⇒ local MAX\n  • f''(c) = 0 ⇒ inconclusive (use sign test)",
      keyPoints: [
        "f''(x) > 0: graph lies ABOVE its tangents",
        "Concavity reveals shape between turning points",
        "f''=0 alone doesn't guarantee an inflection — check sign change",
      ],
      workedExamples: [
        {
          problem: "f(x) = x³ − 3x. Find concavity intervals.",
          steps: [
            "f'(x) = 3x² − 3; f''(x) = 6x",
            "f''(x) > 0 for x > 0 (concave up)",
            "f''(x) < 0 for x < 0 (concave down)",
          ],
          answer: "Concave up: x > 0; concave down: x < 0",
        },
      ],
      tips: ["Sketch f'' to read concavity at a glance", "Use second derivative test only if f' is easy to differentiate again"],
      examQuestion: {
        problem: "Classify stationary points of f(x) = x⁴ − 4x³.",
        solution: [
          "f'(x) = 4x³ − 12x² = 4x²(x − 3); zeros: x = 0, 3",
          "f''(x) = 12x² − 24x",
          "f''(0) = 0 (inconclusive, use sign test → horizontal inflection)",
          "f''(3) = 36 > 0 ⇒ local minimum at x = 3",
        ],
        answer: "Inflection at 0; min at 3",
        marks: 4,
      },
      quiz: [
        { question: "f''>0 means:", options: ["Increasing", "Concave up", "Maximum", "Inflection"], correctAnswer: 1, explanation: "Smile shape." },
        { question: "Second derivative test fails when f''=", options: ["1", "0", "∞", "Negative"], correctAnswer: 1, explanation: "Inconclusive — use sign test." },
        { question: "f''<0 at stationary point ⇒", options: ["Min", "Max", "Inflection", "Saddle"], correctAnswer: 1, explanation: "Concave down ⇒ max." },
      ],
    },
  ],
  "y12s-ch8-8e-inflection": [
    {
      title: "Points of Inflection",
      explanation:
        "An inflection point is where concavity CHANGES (f'' changes sign).\n\nProcedure:\n  1. Find candidates: solve f''(x) = 0 (or where f'' undefined)\n  2. Test sign of f'' on either side\n  3. If sign changes ⇒ inflection point\n  4. Stationary inflection: also has f'(x) = 0",
      keyPoints: [
        "Not every f''=0 is an inflection (need sign change)",
        "Stationary inflection vs non-stationary inflection",
        "On a sketch, inflection is where the curve transitions concavity",
      ],
      workedExamples: [
        {
          problem: "Find inflection points of f(x) = x⁴ − 6x².",
          steps: [
            "f''(x) = 12x² − 12 = 12(x²−1)",
            "f''(x) = 0 ⇒ x = ±1",
            "Sign test: f''>0 for |x|>1, f''<0 for |x|<1 ⇒ both are inflection points",
            "f(1) = −5; f(−1) = −5",
          ],
          answer: "(1, −5) and (−1, −5)",
        },
      ],
      tips: ["Always include the y-coordinate when stating inflection points", "Indicate concavity on either side in the answer"],
      examQuestion: {
        problem: "Show that y = x³ has a stationary inflection at the origin.",
        solution: [
          "y' = 3x², y'(0) = 0 ⇒ stationary",
          "y'' = 6x, y''(0) = 0",
          "Sign test: y''<0 for x<0, y''>0 for x>0 ⇒ concavity changes",
          "∴ Stationary inflection at (0, 0)",
        ],
        answer: "Stationary inflection at origin",
        marks: 3,
      },
      quiz: [
        { question: "Inflection requires f'' to:", options: ["Be zero", "Change sign", "Be positive", "Equal f'"], correctAnswer: 1, explanation: "Concavity changes." },
        { question: "Stationary inflection also has:", options: ["f''=1", "f'=0", "f=0", "Tangent vertical"], correctAnswer: 1, explanation: "Both f' and f'' = 0 with sign change." },
        { question: "y=x⁴ at x=0 is:", options: ["Min", "Max", "Stationary inflection", "Discontinuity"], correctAnswer: 0, explanation: "f''(0)=0 but no sign change ⇒ minimum." },
      ],
    },
  ],
  "y12s-ch8-8f-related-rates": [
    {
      title: "Related Rates",
      explanation:
        "When several quantities change with time, their rates are linked via the chain rule:\n  dQ/dt = (dQ/dx) · (dx/dt)\n\nGeneral procedure:\n  1. Identify variables and their relationship\n  2. Differentiate IMPLICITLY with respect to time\n  3. Substitute given numerical values\n  4. Solve for the unknown rate",
      keyPoints: [
        "Differentiate FIRST, substitute LATER",
        "Include UNITS in the final answer",
        "Use a clear diagram for geometric problems",
      ],
      workedExamples: [
        {
          problem: "A spherical balloon inflates at 50 cm³/s. Find the rate of radius increase when r = 5 cm.",
          steps: [
            "V = 4/3 πr³ ⇒ dV/dr = 4πr²",
            "dV/dt = 4πr²·dr/dt",
            "50 = 4π(25)·dr/dt ⇒ dr/dt = 50/(100π) = 1/(2π)",
          ],
          answer: "dr/dt = 1/(2π) cm/s",
        },
      ],
      tips: ["Re-read the question to identify the GIVEN rate and the WANTED rate", "Cross-check units"],
      examQuestion: {
        problem: "A 5 m ladder slides down a wall. The base moves OUT at 0.2 m/s. How fast does the top descend when the base is 3 m from the wall?",
        solution: [
          "x² + y² = 25 ⇒ 2x dx/dt + 2y dy/dt = 0",
          "x = 3 ⇒ y = 4",
          "2(3)(0.2) + 2(4) dy/dt = 0",
          "dy/dt = −1.2/8 = −0.15 m/s (top descends at 0.15 m/s)",
        ],
        answer: "0.15 m/s",
        marks: 4,
      },
      quiz: [
        { question: "Related rates rely on:", options: ["Product rule", "Chain rule", "Quotient rule", "L'Hôpital"], correctAnswer: 1, explanation: "Linking variables via t." },
        { question: "Substitute values:", options: ["Before differentiating", "After differentiating", "Never", "Twice"], correctAnswer: 1, explanation: "Differentiate symbolically first." },
        { question: "Negative rate means:", options: ["Error", "Decreasing", "Faster", "Stationary"], correctAnswer: 1, explanation: "Quantity is shrinking." },
      ],
    },
  ],
  "y12s-ch8-8g-rational": [
    {
      title: "Sketching Rational Functions",
      explanation:
        "For y = P(x)/Q(x):\n  • Vertical asymptotes: where Q(x) = 0 (and P(x) ≠ 0)\n  • Horizontal asymptote: y = leading coefficient ratio if deg P = deg Q; y = 0 if deg P < deg Q\n  • Oblique (slant) asymptote: if deg P = deg Q + 1 — perform polynomial division\n  • x-intercepts: P(x) = 0\n  • y-intercept: substitute x = 0\n  • Stationary points and concavity using calculus",
      keyPoints: [
        "Asymptotes guide the END behaviour",
        "Holes appear when a common factor cancels (removable discontinuity)",
        "Always check behaviour as x → asymptote from BOTH sides",
      ],
      workedExamples: [
        {
          problem: "Sketch features of y = (x² + 1)/(x − 1).",
          steps: [
            "Polynomial division: y = x + 1 + 2/(x−1)",
            "Vertical asymptote: x = 1",
            "Oblique asymptote: y = x + 1",
            "y-intercept: y = (1)/(−1) = −1; no real x-intercepts (x²+1>0)",
          ],
          answer: "VA x=1; oblique y=x+1; (0,−1)",
        },
      ],
      tips: ["Long division is essential for oblique asymptotes", "Mark intercepts and asymptotes BEFORE plotting curve segments"],
      examQuestion: {
        problem: "Find all asymptotes of y = (2x² − 3)/(x² + 1).",
        solution: [
          "Denominator never zero ⇒ no vertical asymptote",
          "deg P = deg Q ⇒ horizontal y = 2/1 = 2",
          "No oblique asymptote",
        ],
        answer: "y = 2 (horizontal only)",
        marks: 2,
      },
      quiz: [
        { question: "Vertical asymptote at:", options: ["P(x)=0", "Q(x)=0 with P≠0", "x=0", "y=0"], correctAnswer: 1, explanation: "Denominator zero." },
        { question: "Oblique asymptote requires:", options: ["deg P = deg Q", "deg P = deg Q + 1", "deg P < deg Q", "Always"], correctAnswer: 1, explanation: "One degree higher." },
        { question: "Hole occurs when:", options: ["P(0)=0", "Common factor cancels", "Q(x)>0", "y=0"], correctAnswer: 1, explanation: "Removable discontinuity." },
      ],
    },
  ],
  "y12s-ch8-8h-summary": [
    {
      title: "Summary of Differentiation",
      explanation:
        "Toolkit for Specialist differentiation:\n  • Rules: power, product, quotient, chain\n  • Standard derivatives: polynomial, exp, log, trig, inverse trig\n  • Implicit and inverse-function differentiation\n  • Second derivative ⇒ concavity, inflection, classification of stationary points\n  • Applications: related rates, optimisation, curve sketching",
      keyPoints: [
        "Choose the most efficient rule (rewrite expressions first)",
        "Combine first and second derivative analysis for sketching",
        "Always verify domain and range on the sketch",
      ],
      workedExamples: [
        {
          problem: "Differentiate y = arctan(eˣ).",
          steps: [
            "u = eˣ; u' = eˣ",
            "y' = eˣ/(1 + e²ˣ)",
          ],
          answer: "eˣ/(1 + e²ˣ)",
        },
      ],
      tips: ["Re-write before differentiating (e.g., logs of products)", "Practice mixed-rule problems for fluency"],
      examQuestion: {
        problem: "Find dy/dx if y = x·ln(arcsin x).",
        solution: [
          "Product rule: y' = ln(arcsin x) + x·(1/arcsin x)·(1/√(1−x²))",
          "= ln(arcsin x) + x/((arcsin x)·√(1−x²))",
        ],
        answer: "ln(arcsin x) + x/(arcsin x · √(1−x²))",
        marks: 4,
      },
      quiz: [
        { question: "Best first step for y = ln(x²·sin x):", options: ["Quotient rule", "Expand ln", "Square root", "Skip"], correctAnswer: 1, explanation: "ln(ab) = ln a + ln b." },
        { question: "Implicit differentiation needs:", options: ["x explicit", "y as function of t", "d/dx of both sides", "y=0"], correctAnswer: 2, explanation: "Differentiate F(x,y)=0 implicitly." },
        { question: "Most general rule:", options: ["Power", "Chain", "Product", "Quotient"], correctAnswer: 1, explanation: "Underlies all composite differentiation." },
      ],
    },
  ],
  "y12s-ch8-8i-implicit": [
    {
      title: "Implicit Differentiation",
      explanation:
        "When a curve is defined by F(x, y) = 0 (e.g., x² + y² = 25), differentiate both sides with respect to x, treating y as a function of x:\n  • d/dx(yⁿ) = n·yⁿ⁻¹·dy/dx\n  • d/dx(xy) = y + x·dy/dx (product rule)\n\nThen solve algebraically for dy/dx.",
      keyPoints: [
        "Every y term gains a factor of dy/dx",
        "Group dy/dx terms on one side and factor",
        "Result is usually a function of BOTH x and y",
      ],
      workedExamples: [
        {
          problem: "Find dy/dx for x² + y² = 25.",
          steps: [
            "2x + 2y·dy/dx = 0",
            "dy/dx = −x/y",
          ],
          answer: "−x/y",
        },
      ],
      tips: ["Watch for product/chain when y appears inside compounds", "Substitute the point AFTER finding dy/dx symbolically"],
      formulas: [{ name: "Implicit step", formula: "d/dx[g(y)] = g'(y)·dy/dx" }],
      examQuestion: {
        problem: "Find dy/dx for x² + xy + y² = 7 at the point (1, 2).",
        solution: [
          "2x + (y + x·dy/dx) + 2y·dy/dx = 0",
          "(x + 2y) dy/dx = −(2x + y)",
          "dy/dx = −(2x + y)/(x + 2y)",
          "At (1,2): −(2+2)/(1+4) = −4/5",
        ],
        answer: "−4/5",
        marks: 3,
      },
      quiz: [
        { question: "Implicit needs:", options: ["y as f(x)", "Treating y as f(x)", "y constant", "Polynomial only"], correctAnswer: 1, explanation: "Apply chain rule to y-terms." },
        { question: "d/dx(y³) =", options: ["3y²", "3y²·dy/dx", "y²", "0"], correctAnswer: 1, explanation: "Chain rule." },
        { question: "Result usually depends on:", options: ["x only", "y only", "Both x and y", "Neither"], correctAnswer: 2, explanation: "Implicit relations." },
      ],
    },
  ],
  "y12s-ch8-review": [
    {
      title: "Review of Chapter 8 — Differentiation",
      explanation:
        "Consolidates differentiation rules, inverse-function derivatives, second-derivative analysis, related rates, rational-function sketching, and implicit differentiation. Mastery here underpins all of Chapter 9 (integration) and modelling questions.",
      keyPoints: [
        "Pick the right rule; rewrite expressions first if needed",
        "Use second-derivative information for full curve sketches",
        "Communicate rates with units and direction",
        "Implicit differentiation handles relations not solved for y",
      ],
      workedExamples: [
        {
          problem: "Find equation of tangent to x² + y² = 25 at (3, 4).",
          steps: [
            "dy/dx = −x/y = −3/4",
            "y − 4 = −3/4 (x − 3)",
            "y = −3x/4 + 9/4 + 4 = −3x/4 + 25/4",
          ],
          answer: "y = −3x/4 + 25/4",
        },
      ],
      tips: ["Re-check sign and reciprocal traps", "Always double-check by substituting the point"],
      examQuestion: {
        problem: "Show that y = arctan x satisfies (1 + x²) y'' + 2x y' = 0.",
        solution: [
          "y' = 1/(1+x²)",
          "y'' = −2x/(1+x²)²",
          "(1+x²) y'' = −2x/(1+x²)",
          "2x y' = 2x/(1+x²)",
          "Sum = 0 ✓",
        ],
        answer: "Identity verified",
        marks: 4,
      },
      quiz: [
        { question: "d/dx arctan x =", options: ["1/(1+x²)", "1/√(1−x²)", "1/x", "−1/(1+x²)"], correctAnswer: 0, explanation: "Standard." },
        { question: "Implicit at (a,b) requires:", options: ["Solving y first", "Differentiating then sub (a,b)", "Only x", "Only y"], correctAnswer: 1, explanation: "Symbolic then numeric." },
        { question: "Oblique asymptote method:", options: ["Quadratic formula", "Long division", "Factoring", "Substitution"], correctAnswer: 1, explanation: "Polynomial long division." },
      ],
    },
  ],
};
