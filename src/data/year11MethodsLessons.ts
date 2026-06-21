import { Lesson } from "./topicLessons";

export const year11MethodsLessons: Record<string, Lesson[]> = {

  // ═══════════════════════════════════════════════════════════════
  // LINEAR EQUATIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-linear-equations": [
    {
      title: "Constructing Linear Equations",
      explanation: "Translating worded problems into linear equations is a key skill. Identify the unknown, define a variable, and write the equation from the information given.\n\nLook for key phrases: 'more than' (+), 'less than' (-), 'times' (×), 'shared equally' (÷).",
      keyPoints: ["Define the variable clearly", "Translate words to symbols", "'Is' or 'equals' → =", "Check your equation makes sense in context"],
      workedExamples: [
        { problem: "Three consecutive numbers sum to 63. Find them.", steps: ["Let n = first number", "n + (n+1) + (n+2) = 63", "3n + 3 = 63", "3n = 60, n = 20"], answer: "20, 21, 22" }
      ],
      tips: ["Always re-read the problem after solving to check your answer makes sense."],
      quiz: [
        { question: "Twice a number plus 5 equals 21. The number is:", options: ["8", "13", "5.5", "16"], correctAnswer: 0, explanation: "2x + 5 = 21, 2x = 16, x = 8" },
        { question: "'7 less than x' translates to:", options: ["7 - x", "x - 7", "7x", "x/7"], correctAnswer: 1, explanation: "'Less than' means subtract from x." },
        { question: "Sum of two numbers is 50, difference is 10. Larger:", options: ["25", "30", "20", "35"], correctAnswer: 1, explanation: "x+y=50, x-y=10 → 2x=60, x=30." }
      ]
    },
    {
      title: "Simultaneous Equations",
      explanation: "Two equations with two unknowns. Solve by substitution (replace one variable) or elimination (add/subtract equations to remove a variable).\n\nThe solution is the intersection point of the two lines when graphed.",
      keyPoints: ["Substitution: isolate one variable, substitute", "Elimination: match coefficients, add/subtract", "Solution satisfies both equations", "Check answer in both original equations"],
      workedExamples: [
        { problem: "Solve: 2x + 3y = 12, x - y = 1", steps: ["From eq2: x = y + 1", "Substitute: 2(y+1) + 3y = 12", "5y + 2 = 12, y = 2", "x = 2 + 1 = 3"], answer: "x = 3, y = 2" }
      ],
      tips: ["Choose substitution when one variable is easily isolated; elimination when coefficients are convenient."],
      quiz: [
        { question: "x + y = 10, x - y = 4. x =", options: ["3", "7", "5", "6"], correctAnswer: 1, explanation: "Add: 2x = 14, x = 7" },
        { question: "y = 3x, 2x + y = 15. x =", options: ["3", "5", "6", "9"], correctAnswer: 0, explanation: "2x + 3x = 15, x = 3" },
        { question: "No solution means lines are:", options: ["Intersecting", "Parallel", "Identical", "Perpendicular"], correctAnswer: 1, explanation: "Parallel lines never intersect → no solution." }
      ]
    },
    {
      title: "Linear Inequalities",
      explanation: "Inequalities use <, >, ≤, ≥ instead of =. Solve like equations with one key rule: when multiplying or dividing by a negative number, REVERSE the inequality sign.\n\nSolutions are shown on a number line: open circle for < or >, closed circle for ≤ or ≥.",
      keyPoints: ["Solve like equations", "Reverse sign when × or ÷ by negative", "Open circle: < or > (not included)", "Closed circle: ≤ or ≥ (included)"],
      workedExamples: [
        { problem: "Solve: 3 - 2x > 7", steps: ["-2x > 4", "Divide by -2 (reverse!): x < -2"], answer: "x < -2" }
      ],
      tips: ["The most common error is forgetting to flip the sign when dividing by a negative."],
      quiz: [
        { question: "Solve: 2x + 1 > 9", options: ["x > 4", "x > 5", "x < 4", "x < 5"], correctAnswer: 0, explanation: "2x > 8, x > 4" },
        { question: "Solve: -3x ≤ 12", options: ["x ≤ -4", "x ≥ -4", "x ≤ 4", "x ≥ 4"], correctAnswer: 1, explanation: "Divide by -3, reverse: x ≥ -4" },
        { question: "x ≤ 5 shown on number line with:", options: ["Open circle at 5", "Closed circle at 5", "Arrow from 5 right", "No circle"], correctAnswer: 1, explanation: "≤ includes 5 → closed circle." }
      ]
    },
    {
      title: "Worded Problems and Applications",
      explanation: "Apply linear equations to real-world contexts: pricing, distances, mixtures, ages, and work problems.\n\nAlways: (1) define variables, (2) write equations from context, (3) solve, (4) interpret and check.",
      keyPoints: ["Define variables first", "Write equation from context", "Solve algebraically", "Check answer makes sense in context"],
      workedExamples: [
        { problem: "Adult tickets $15, child $8. 200 tickets sold for $2340. How many of each?", steps: ["Let a = adults, c = children", "a + c = 200 → c = 200 - a", "15a + 8c = 2340", "15a + 8(200-a) = 2340", "7a = 740, a = 105.7..."], answer: "Approximately 106 adults, 94 children (rounding may indicate need to recheck)" }
      ],
      tips: ["Always define your variables at the start and state your answer in a sentence."],
      quiz: [
        { question: "Perimeter of rectangle = 40. Length = 2w + 1. Width w =", options: ["6.3", "19/3", "38/6", "Both A and C"], correctAnswer: 3, explanation: "2(2w+1) + 2w = 40, 6w+2=40, w=38/6≈6.3" },
        { question: "In a word problem, 'at most' means:", options: [">", "≥", "≤", "<"], correctAnswer: 2, explanation: "'At most' = less than or equal to (≤)." },
        { question: "The first step in solving word problems is:", options: ["Guess and check", "Define variables", "Draw a graph", "Use a calculator"], correctAnswer: 1, explanation: "Always define what your variables represent." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // COORDINATE GEOMETRY
  // ═══════════════════════════════════════════════════════════════
  "y11m-coordinate-geometry": [
    {
      title: "Distance and Midpoint",
      explanation: "Distance between (x₁, y₁) and (x₂, y₂):\nd = √((x₂-x₁)² + (y₂-y₁)²)\n\nMidpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2)\n\nBoth formulas derive from Pythagoras' theorem.",
      keyPoints: ["Distance formula from Pythagoras", "Midpoint: average of coordinates", "Distance is always positive", "Order of points doesn't matter for distance"],
      workedExamples: [
        { problem: "Find distance and midpoint of (1, 3) and (7, 11).", steps: ["d = √((7-1)² + (11-3)²) = √(36+64) = √100 = 10", "M = ((1+7)/2, (3+11)/2) = (4, 7)"], answer: "Distance = 10, Midpoint = (4, 7)" }
      ],
      tips: ["Sketch points on a grid to verify your answer visually."],
      quiz: [
        { question: "Distance between (0,0) and (3,4):", options: ["5", "7", "1", "25"], correctAnswer: 0, explanation: "√(9+16) = √25 = 5" },
        { question: "Midpoint of (2, 8) and (6, 4):", options: ["(4, 6)", "(8, 12)", "(3, 2)", "(4, 4)"], correctAnswer: 0, explanation: "((2+6)/2, (8+4)/2) = (4, 6)" },
        { question: "Midpoint of (-3, 5) and (7, -1):", options: ["(2, 2)", "(5, 3)", "(4, 4)", "(-5, 3)"], correctAnswer: 0, explanation: "((-3+7)/2, (5-1)/2) = (2, 2)" }
      ]
    },
    {
      title: "Gradient",
      explanation: "The gradient (slope) measures steepness: m = (y₂-y₁)/(x₂-x₁) = rise/run.\n\nPositive gradient → slopes up. Negative → slopes down. Zero → horizontal. Undefined → vertical.",
      keyPoints: ["m = rise/run = Δy/Δx", "Positive: uphill left to right", "Negative: downhill", "Zero: horizontal, Undefined: vertical"],
      workedExamples: [
        { problem: "Find gradient through (-2, 5) and (4, -1).", steps: ["m = (-1-5)/(4-(-2)) = -6/6 = -1"], answer: "m = -1" }
      ],
      tips: ["Be careful with signs — double-check subtraction of negative coordinates."],
      quiz: [
        { question: "Gradient of (1,2) and (3,8):", options: ["3", "2", "6", "1/3"], correctAnswer: 0, explanation: "(8-2)/(3-1) = 6/2 = 3" },
        { question: "A vertical line has gradient:", options: ["0", "1", "Undefined", "-1"], correctAnswer: 2, explanation: "Δx = 0 → division by zero → undefined." },
        { question: "Gradient 0 means:", options: ["Steep line", "Vertical line", "Horizontal line", "Diagonal"], correctAnswer: 2, explanation: "No rise → horizontal." }
      ]
    },
    {
      title: "Graphing Lines and Equations of Lines",
      explanation: "Forms of linear equations:\n• Gradient-intercept: y = mx + c\n• Point-gradient: y - y₁ = m(x - x₁)\n• General: ax + by + c = 0\n\nTo graph: find y-intercept and use gradient, or find two points.",
      keyPoints: ["y = mx + c: read off m and c directly", "y - y₁ = m(x - x₁) when you know a point and gradient", "Find intercepts: set x=0 for y-int, y=0 for x-int", "Convert between forms as needed"],
      workedExamples: [
        { problem: "Line through (2, 5) with gradient 3. Find equation.", steps: ["y - 5 = 3(x - 2)", "y = 3x - 6 + 5", "y = 3x - 1"], answer: "y = 3x - 1" }
      ],
      tips: ["Point-gradient form is versatile — use it whenever you know a point and gradient."],
      quiz: [
        { question: "y = -2x + 5. y-intercept:", options: ["-2", "5", "2", "-5"], correctAnswer: 1, explanation: "c = 5 in y = mx + c." },
        { question: "Line through (0,3) with m=4:", options: ["y = 3x + 4", "y = 4x + 3", "y = 4x - 3", "y = 3x - 4"], correctAnswer: 1, explanation: "y = 4x + 3 (m=4, c=3)." },
        { question: "x-intercept of y = 2x - 6:", options: ["(3, 0)", "(-3, 0)", "(6, 0)", "(0, -6)"], correctAnswer: 0, explanation: "Set y=0: 2x = 6, x = 3." }
      ]
    },
    {
      title: "Parallel and Perpendicular Lines",
      explanation: "Parallel lines have equal gradients: m₁ = m₂.\n\nPerpendicular lines have gradients that multiply to -1: m₁ × m₂ = -1, so m₂ = -1/m₁ (negative reciprocal).",
      keyPoints: ["Parallel: m₁ = m₂", "Perpendicular: m₁ × m₂ = -1", "Perpendicular gradient = negative reciprocal", "Check: product of gradients = -1"],
      workedExamples: [
        { problem: "Line perpendicular to y = 2x + 1 through (4, 3).", steps: ["Original m = 2, perpendicular m = -1/2", "y - 3 = -1/2(x - 4)", "y = -x/2 + 2 + 3 = -x/2 + 5"], answer: "y = -x/2 + 5" }
      ],
      tips: ["Negative reciprocal: flip the fraction and change the sign."],
      quiz: [
        { question: "Perpendicular to m = 3:", options: ["m = 3", "m = -3", "m = 1/3", "m = -1/3"], correctAnswer: 3, explanation: "Negative reciprocal of 3 = -1/3." },
        { question: "Parallel to y = -5x + 2:", options: ["m = 5", "m = -5", "m = 1/5", "m = 2"], correctAnswer: 1, explanation: "Same gradient: m = -5." },
        { question: "m₁ = 2/3. Perpendicular m₂:", options: ["-3/2", "3/2", "-2/3", "2/3"], correctAnswer: 0, explanation: "Flip and negate: -3/2." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // QUADRATICS
  // ═══════════════════════════════════════════════════════════════
  "y11m-quadratics": [
    {
      title: "Expanding and Factorising",
      explanation: "Expanding: multiply each term in one bracket by each term in the other.\n(a+b)(c+d) = ac + ad + bc + bd\n\nSpecial cases:\n(a+b)² = a² + 2ab + b²\n(a-b)² = a² - 2ab + b²\n(a+b)(a-b) = a² - b²\n\nFactorising is the reverse: write an expression as a product of factors.",
      keyPoints: ["FOIL: First, Outer, Inner, Last", "(a+b)² = a² + 2ab + b²", "(a+b)(a-b) = a² - b²", "Factorising: find common factors first"],
      workedExamples: [
        { problem: "Factorise x² + 5x + 6.", steps: ["Find two numbers that multiply to 6 and add to 5", "2 and 3: 2×3=6, 2+3=5", "x² + 5x + 6 = (x+2)(x+3)"], answer: "(x+2)(x+3)" }
      ],
      tips: ["Always check by expanding your factorised answer."],
      quiz: [
        { question: "Expand (x+3)(x-2):", options: ["x²+x-6", "x²-x-6", "x²+5x+6", "x²-5x+6"], correctAnswer: 0, explanation: "x²-2x+3x-6 = x²+x-6" },
        { question: "Factorise x²-9:", options: ["(x-3)²", "(x+3)(x-3)", "(x-9)(x+1)", "Can't factorise"], correctAnswer: 1, explanation: "Difference of squares: a²-b² = (a+b)(a-b)." },
        { question: "(x+4)² expands to:", options: ["x²+16", "x²+4x+16", "x²+8x+16", "x²-8x+16"], correctAnswer: 2, explanation: "x²+2(4)x+16 = x²+8x+16" }
      ]
    },
    {
      title: "Solving Quadratic Equations",
      explanation: "Methods to solve ax² + bx + c = 0:\n\n1. Factorising: if possible, set each factor to zero\n2. Quadratic formula: x = (-b ± √(b²-4ac)) / (2a)\n3. Completing the square\n4. CAS calculator\n\nA quadratic can have 0, 1, or 2 real solutions.",
      keyPoints: ["Null factor law: if ab = 0, then a = 0 or b = 0", "Formula: x = (-b ± √(b²-4ac)) / 2a", "Always set equation to 0 first", "Check solutions by substituting back"],
      workedExamples: [
        { problem: "Solve x² - 5x + 6 = 0.", steps: ["Factorise: (x-2)(x-3) = 0", "x - 2 = 0 or x - 3 = 0", "x = 2 or x = 3"], answer: "x = 2 or x = 3" }
      ],
      tips: ["Try factorising first — it's quicker. Use the formula when factorising is hard."],
      quiz: [
        { question: "Solve x² - 4 = 0:", options: ["x = 2", "x = ±2", "x = 4", "x = -4"], correctAnswer: 1, explanation: "(x-2)(x+2) = 0, x = ±2" },
        { question: "Solve x² + 3x = 0:", options: ["x = 0 or x = 3", "x = 0 or x = -3", "x = 3", "x = -3"], correctAnswer: 1, explanation: "x(x+3) = 0, x = 0 or x = -3" },
        { question: "The quadratic formula denominator is:", options: ["a", "2a", "b", "c"], correctAnswer: 1, explanation: "x = (-b ± √(b²-4ac)) / 2a" }
      ]
    },
    {
      title: "Completing the Square",
      explanation: "Completing the square rewrites ax² + bx + c in the form a(x-h)² + k, where (h, k) is the vertex.\n\nSteps:\n1. Factor out a from x² and x terms\n2. Take half the coefficient of x, square it\n3. Add and subtract this value inside\n4. Simplify",
      keyPoints: ["x² + bx + (b/2)² = (x + b/2)²", "Vertex form: y = a(x-h)² + k", "Vertex at (h, k)", "Useful for finding turning points"],
      workedExamples: [
        { problem: "Write y = x² - 6x + 5 in vertex form.", steps: ["y = (x² - 6x + 9) - 9 + 5", "= (x-3)² - 4"], answer: "y = (x-3)² - 4, vertex (3, -4)" }
      ],
      tips: ["Half of -6 is -3, and (-3)² = 9. Add and subtract 9."],
      quiz: [
        { question: "Complete: x²+8x = (x+?)² - ?", options: ["(x+4)²-16", "(x+8)²-64", "(x+4)²-4", "(x+2)²-4"], correctAnswer: 0, explanation: "Half of 8 = 4. (x+4)²= x²+8x+16. So x²+8x = (x+4)²-16" },
        { question: "Vertex of y = (x-2)²+3:", options: ["(2, 3)", "(-2, 3)", "(2, -3)", "(-2, -3)"], correctAnswer: 0, explanation: "y = (x-h)²+k → vertex (h,k) = (2,3)." },
        { question: "Completing the square helps find:", options: ["x-intercepts only", "The vertex", "The gradient", "The range only"], correctAnswer: 1, explanation: "Vertex form directly shows the turning point." }
      ]
    },
    {
      title: "The Discriminant",
      explanation: "The discriminant Δ = b² - 4ac determines how many real solutions a quadratic has:\n\n• Δ > 0: two distinct real solutions\n• Δ = 0: one repeated (double) solution\n• Δ < 0: no real solutions\n\nIf Δ is a perfect square, solutions are rational.",
      keyPoints: ["Δ = b² - 4ac", "Δ > 0: two solutions", "Δ = 0: one solution", "Δ < 0: no real solutions"],
      workedExamples: [
        { problem: "Find Δ for 2x² - 3x + 5 = 0.", steps: ["a=2, b=-3, c=5", "Δ = (-3)² - 4(2)(5) = 9 - 40 = -31"], answer: "Δ = -31 < 0 → no real solutions" }
      ],
      tips: ["Calculate Δ first to know what to expect before solving."],
      quiz: [
        { question: "Δ = 0 means:", options: ["No solutions", "One solution", "Two solutions", "Infinite solutions"], correctAnswer: 1, explanation: "Δ = 0 → one repeated root." },
        { question: "x²+2x+1=0. Δ =", options: ["0", "4", "-4", "8"], correctAnswer: 0, explanation: "4 - 4(1)(1) = 0" },
        { question: "Δ = 25. Number of solutions:", options: ["0", "1", "2", "5"], correctAnswer: 2, explanation: "Δ > 0 → two distinct real solutions." }
      ]
    },
    {
      title: "Quadratic Models",
      explanation: "Quadratics model real-world situations: projectile motion, area problems, profit/revenue, and bridge arches.\n\nThe vertex gives the maximum or minimum value. x-intercepts may represent starting/ending points or break-even points.",
      keyPoints: ["a > 0: minimum (U-shape)", "a < 0: maximum (∩-shape)", "Vertex = max/min point", "Interpret in context"],
      workedExamples: [
        { problem: "Profit P = -2x² + 40x - 50. Find maximum profit.", steps: ["Vertex: x = -b/(2a) = -40/(2×-2) = 10", "P(10) = -2(100) + 400 - 50 = 150"], answer: "Maximum profit = $150 when x = 10" }
      ],
      tips: ["Since a < 0, the parabola opens down → vertex gives maximum."],
      quiz: [
        { question: "h = -5t² + 20t. Max height at t =", options: ["2", "4", "5", "20"], correctAnswer: 0, explanation: "t = -20/(2×-5) = 2" },
        { question: "a < 0 means the parabola:", options: ["Opens up", "Opens down", "Is a straight line", "Has no vertex"], correctAnswer: 1, explanation: "Negative a → opens downward → maximum." },
        { question: "Revenue R = -x² + 50x. Maximum R =", options: ["625", "50", "250", "2500"], correctAnswer: 0, explanation: "x = 25, R = -625 + 1250 = 625" }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // FUNCTIONS AND RELATIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-functions-relations": [
    {
      title: "Domain, Range, and Function Notation",
      explanation: "A function maps each input to exactly one output. Domain = set of valid inputs. Range = set of possible outputs.\n\nf(x) notation: f(3) means substitute x = 3 into the rule for f.\n\nVertical line test: if any vertical line crosses a graph more than once, it's NOT a function.",
      keyPoints: ["Function: each input → exactly one output", "Domain: valid x-values", "Range: resulting y-values", "f(a) means evaluate f at x = a"],
      workedExamples: [
        { problem: "f(x) = 2x² - 1. Find f(-3).", steps: ["f(-3) = 2(-3)² - 1 = 2(9) - 1 = 17"], answer: "f(-3) = 17" }
      ],
      tips: ["For domain: watch for square roots (≥ 0) and denominators (≠ 0)."],
      quiz: [
        { question: "f(x) = x+5. f(3) =", options: ["8", "15", "3", "5"], correctAnswer: 0, explanation: "3 + 5 = 8" },
        { question: "Domain of f(x) = √(x-4):", options: ["x ≥ 4", "x > 4", "x ≤ 4", "All reals"], correctAnswer: 0, explanation: "x - 4 ≥ 0 → x ≥ 4" },
        { question: "Range of f(x) = x²:", options: ["y ≥ 0", "All reals", "y > 0", "y ≤ 0"], correctAnswer: 0, explanation: "Squares are never negative → y ≥ 0." }
      ]
    },
    {
      title: "Inverse Functions",
      explanation: "The inverse function f⁻¹ reverses f: if f(a) = b, then f⁻¹(b) = a.\n\nTo find f⁻¹:\n1. Write y = f(x)\n2. Swap x and y\n3. Solve for y\n\nA function has an inverse only if it's one-to-one (passes horizontal line test).",
      keyPoints: ["f⁻¹ undoes f", "Swap x and y, then solve for y", "Graph of f⁻¹ is reflection of f in y = x", "Must be one-to-one to have an inverse"],
      workedExamples: [
        { problem: "Find the inverse of f(x) = 2x + 3.", steps: ["y = 2x + 3", "Swap: x = 2y + 3", "x - 3 = 2y", "y = (x-3)/2"], answer: "f⁻¹(x) = (x-3)/2" }
      ],
      tips: ["Check: f(f⁻¹(x)) should equal x."],
      quiz: [
        { question: "Inverse of f(x) = x - 7:", options: ["f⁻¹(x) = x + 7", "f⁻¹(x) = 7 - x", "f⁻¹(x) = x/7", "f⁻¹(x) = 7x"], correctAnswer: 0, explanation: "x = y-7, y = x+7." },
        { question: "The graph of f⁻¹ is the reflection of f in:", options: ["x-axis", "y-axis", "y = x", "Origin"], correctAnswer: 2, explanation: "Inverse reflects across y = x." },
        { question: "f(x) = x² (x ≥ 0). f⁻¹(x) =", options: ["x²", "-√x", "√x", "x/2"], correctAnswer: 2, explanation: "Inverse of squaring is square root (for x ≥ 0)." }
      ]
    },
    {
      title: "Piecewise Functions",
      explanation: "A piecewise function uses different rules for different parts of the domain.\n\nf(x) = { x+1 if x < 0; x² if x ≥ 0 }\n\nTo evaluate, first check which piece applies, then use that rule. The graph may have breaks or corners.",
      keyPoints: ["Different rules for different intervals", "Check which interval x falls in", "Graph each piece on its own interval", "Watch for open vs closed endpoints"],
      workedExamples: [
        { problem: "f(x) = {2x if x<3; 10-x if x≥3}. Find f(1) and f(5).", steps: ["f(1): 1 < 3, use 2x → f(1) = 2", "f(5): 5 ≥ 3, use 10-x → f(5) = 5"], answer: "f(1) = 2, f(5) = 5" }
      ],
      tips: ["Use open circles (○) for excluded endpoints and closed circles (●) for included."],
      quiz: [
        { question: "f(x) = {x if x<2; 5 if x≥2}. f(2) =", options: ["2", "5", "Undefined", "0"], correctAnswer: 1, explanation: "2 ≥ 2, so use the second piece: f(2) = 5." },
        { question: "Piecewise functions can have:", options: ["Only one piece", "Different rules per interval", "No domain", "Only linear pieces"], correctAnswer: 1, explanation: "Each piece has its own rule on its interval." },
        { question: "At a boundary, if both pieces give different values:", options: ["Use the smaller", "There's a jump discontinuity", "Average them", "Error"], correctAnswer: 1, explanation: "Different values at the boundary means a discontinuity." }
      ]
    },
    {
      title: "Composite Functions",
      explanation: "A composite function applies one function after another. f(g(x)) means: first apply g, then apply f to the result.\n\n(f ∘ g)(x) = f(g(x)). Order matters: f(g(x)) ≠ g(f(x)) in general.",
      keyPoints: ["f(g(x)): apply g first, then f", "Order matters: f∘g ≠ g∘f usually", "Domain of f∘g: values where g(x) is in domain of f", "Substitute g(x) into f"],
      workedExamples: [
        { problem: "f(x) = x², g(x) = x+3. Find f(g(2)) and g(f(2)).", steps: ["f(g(2)): g(2) = 5, f(5) = 25", "g(f(2)): f(2) = 4, g(4) = 7"], answer: "f(g(2)) = 25, g(f(2)) = 7" }
      ],
      tips: ["Work from the inside out: evaluate the inner function first."],
      quiz: [
        { question: "f(x)=2x, g(x)=x+1. f(g(3)) =", options: ["7", "8", "6", "9"], correctAnswer: 1, explanation: "g(3)=4, f(4)=8" },
        { question: "f∘g means:", options: ["f + g", "f(g(x))", "g(f(x))", "f × g"], correctAnswer: 1, explanation: "f∘g = f(g(x)), apply g first." },
        { question: "f(x)=√x, g(x)=x-4. Domain of f∘g:", options: ["x ≥ 0", "x ≥ 4", "x > 4", "All reals"], correctAnswer: 1, explanation: "Need g(x) ≥ 0: x-4 ≥ 0 → x ≥ 4." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // POLYNOMIALS
  // ═══════════════════════════════════════════════════════════════
  "y11m-polynomials": [
    {
      title: "Polynomial Operations",
      explanation: "A polynomial is an expression with non-negative integer powers of x. Degree = highest power.\n\nAdd/subtract by combining like terms. Multiply by distributing each term.",
      keyPoints: ["Degree = highest power of x", "Add: combine like terms", "Multiply: distribute each term", "Leading coefficient: coefficient of highest power"],
      workedExamples: [
        { problem: "(2x³ + x - 4) + (x³ - 3x² + 5)", steps: ["Combine like terms: (2x³+x³) + (-3x²) + (x) + (-4+5)", "= 3x³ - 3x² + x + 1"], answer: "3x³ - 3x² + x + 1" }
      ],
      tips: ["Line up like terms vertically to avoid errors."],
      quiz: [
        { question: "Degree of 5x⁴ - 3x + 7:", options: ["5", "4", "3", "7"], correctAnswer: 1, explanation: "Highest power is x⁴ → degree 4." },
        { question: "(x²+3) + (2x²-1) =", options: ["3x²+2", "3x²-2", "x⁴+2", "3x⁴+2"], correctAnswer: 0, explanation: "x²+2x² = 3x², 3-1 = 2." },
        { question: "Leading coefficient of -2x³+5x:", options: ["5", "3", "-2", "x³"], correctAnswer: 2, explanation: "Coefficient of highest power (x³) = -2." }
      ]
    },
    {
      title: "Factorisation Techniques",
      explanation: "Key techniques:\n1. Common factor: ax + ay = a(x+y)\n2. Grouping: ax + ay + bx + by = a(x+y) + b(x+y) = (a+b)(x+y)\n3. Difference of squares: a²-b² = (a+b)(a-b)\n4. Factor theorem: if P(a) = 0, then (x-a) is a factor",
      keyPoints: ["Always look for common factors first", "Factor theorem: P(a)=0 → (x-a) is a factor", "Sum of cubes: a³+b³ = (a+b)(a²-ab+b²)", "Diff of cubes: a³-b³ = (a-b)(a²+ab+b²)"],
      workedExamples: [
        { problem: "Factorise x³ - 6x² + 11x - 6.", steps: ["Try x=1: P(1) = 1-6+11-6 = 0 ✓", "So (x-1) is a factor", "Divide: x³-6x²+11x-6 = (x-1)(x²-5x+6)", "Factorise further: (x-1)(x-2)(x-3)"], answer: "(x-1)(x-2)(x-3)" }
      ],
      tips: ["For factor theorem, try x = ±1, ±2, ±3 (factors of the constant term)."],
      quiz: [
        { question: "P(2) = 0. A factor is:", options: ["(x+2)", "(x-2)", "(2x)", "(x²-2)"], correctAnswer: 1, explanation: "P(a)=0 → (x-a) is a factor." },
        { question: "x³ - 8 factors as:", options: ["(x-2)(x²+2x+4)", "(x-2)(x+2)²", "(x-2)³", "Can't factorise"], correctAnswer: 0, explanation: "Difference of cubes: a³-b³ = (a-b)(a²+ab+b²)." },
        { question: "First step in factorising 6x²-12x:", options: ["Quadratic formula", "Factor out 6x", "Complete the square", "Difference of squares"], correctAnswer: 1, explanation: "Common factor: 6x(x-2)." }
      ]
    },
    {
      title: "Cubic Functions",
      explanation: "A cubic function has the form f(x) = ax³ + bx² + cx + d. Its graph can have 1 or 2 turning points and always has at least one x-intercept.\n\nKey features: y-intercept at d, up to 3 x-intercepts, inflection point where curvature changes.",
      keyPoints: ["Degree 3: at most 2 turning points", "At least 1 real x-intercept", "a > 0: rises right, a < 0: falls right", "Factorise to find x-intercepts"],
      workedExamples: [
        { problem: "Sketch y = (x-1)(x+2)(x-3).", steps: ["x-intercepts: x = 1, -2, 3", "y-intercept: (0-1)(0+2)(0-3) = (-1)(2)(-3) = 6", "Leading coefficient positive → rises right", "Sketch through intercepts with S-curve shape"], answer: "Cubic through (-2,0), (1,0), (3,0) with y-int 6" }
      ],
      tips: ["Find intercepts first, then determine end behaviour from the sign of a."],
      quiz: [
        { question: "A cubic has at most ___ turning points:", options: ["1", "2", "3", "0"], correctAnswer: 1, explanation: "Degree 3 → at most 2 turning points." },
        { question: "y = -x³ for large x:", options: ["Goes to +∞", "Goes to -∞", "Goes to 0", "Stays constant"], correctAnswer: 1, explanation: "Negative leading coefficient → falls right." },
        { question: "x-intercepts of y = x(x-1)(x+4):", options: ["0, 1, -4", "0, -1, 4", "1, -4", "0, 1, 4"], correctAnswer: 0, explanation: "Set each factor to 0: x=0, x=1, x=-4." }
      ]
    },
    {
      title: "Polynomial Division and Remainder Theorem",
      explanation: "Long division or synthetic division divides polynomials. The Remainder Theorem: when P(x) is divided by (x-a), the remainder is P(a).\n\nIf P(a) = 0, then (x-a) divides P(x) exactly (factor theorem).",
      keyPoints: ["Remainder = P(a) when dividing by (x-a)", "P(a) = 0 → (x-a) is a factor", "Long division for full quotient", "Synthetic division is a shortcut"],
      workedExamples: [
        { problem: "Find remainder when x³ + 2x - 5 is divided by (x-1).", steps: ["P(1) = 1 + 2 - 5 = -2"], answer: "Remainder = -2" }
      ],
      tips: ["Remainder theorem saves time — no need to do full division just for the remainder."],
      quiz: [
        { question: "Remainder of x²+3x+1 ÷ (x-2):", options: ["11", "7", "3", "1"], correctAnswer: 0, explanation: "P(2) = 4+6+1 = 11" },
        { question: "If remainder = 0:", options: ["Not a factor", "Is a factor", "Division error", "Can't tell"], correctAnswer: 1, explanation: "Zero remainder → exact division → is a factor." },
        { question: "P(x) ÷ (x+3). Remainder = P(?):", options: ["3", "-3", "0", "x+3"], correctAnswer: 1, explanation: "(x+3) = (x-(-3)), so evaluate at -3." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // TRANSFORMATIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-transformations": [
    {
      title: "Function Transformations",
      explanation: "For y = af(b(x-h)) + k:\n• a: vertical dilation by |a|, reflection in x-axis if a < 0\n• b: horizontal dilation by 1/|b|, reflection in y-axis if b < 0\n• h: translate right h units\n• k: translate up k units\n\nApply dilations and reflections before translations.",
      keyPoints: ["a: vertical stretch/reflect", "1/b: horizontal stretch/reflect", "h: horizontal shift (opposite sign!)", "k: vertical shift"],
      workedExamples: [
        { problem: "Describe transformations: y = -2(x+1)² + 3 from y = x².", steps: ["a = -2: vertical dilation factor 2, reflect in x-axis", "h = -1: translate left 1", "k = 3: translate up 3"], answer: "Reflect in x-axis, dilate vertically by 2, translate left 1 and up 3" }
      ],
      tips: ["Order: dilations/reflections first, then translations."],
      quiz: [
        { question: "y = f(x-4) shifts:", options: ["Left 4", "Right 4", "Up 4", "Down 4"], correctAnswer: 1, explanation: "x-4: opposite sign → right 4." },
        { question: "y = 3f(x) dilates vertically by:", options: ["1/3", "3", "9", "-3"], correctAnswer: 1, explanation: "Multiply y-values by 3." },
        { question: "y = -f(x) is:", options: ["Shift down", "Reflect in y-axis", "Reflect in x-axis", "Dilate by -1"], correctAnswer: 2, explanation: "Negative outside → reflect in x-axis." }
      ]
    },
    {
      title: "Combinations of Transformations",
      explanation: "Multiple transformations can be combined. Read transformations from the equation by comparing to y = af(b(x-h)) + k.\n\nTo find the equation from transformations, apply them in order to the base function.",
      keyPoints: ["Read a, b, h, k from the equation", "Apply in order: dilation/reflection → translation", "Inverse: reverse order, inverse operations", "Mapping: (x,y) → (x/b + h, ay + k)"],
      workedExamples: [
        { problem: "Apply to y = √x: reflect in x-axis, translate right 2, up 1.", steps: ["Reflect: y = -√x", "Right 2: y = -√(x-2)", "Up 1: y = -√(x-2) + 1"], answer: "y = -√(x-2) + 1" }
      ],
      tips: ["Apply transformations step by step — don't try to do them all at once."],
      quiz: [
        { question: "y = 2(x-1)³ + 4 from y=x³. Vertex/inflection at:", options: ["(1, 4)", "(-1, 4)", "(2, 1)", "(1, -4)"], correctAnswer: 0, explanation: "h=1, k=4 → inflection at (1, 4)." },
        { question: "To undo 'translate right 3':", options: ["Translate right 3", "Translate left 3", "Translate up 3", "Reflect"], correctAnswer: 1, explanation: "Inverse of right 3 = left 3." },
        { question: "y = f(2x). Point (4,5) on f maps to:", options: ["(2, 5)", "(8, 5)", "(4, 10)", "(4, 2.5)"], correctAnswer: 0, explanation: "Horizontal dilation 1/2: x → x/2. So (4,5) → (2,5)." }
      ]
    },
    {
      title: "Graphing Transformed Functions",
      explanation: "To graph a transformed function:\n1. Identify the base function\n2. List transformations from the equation\n3. Apply transformations to key points\n4. Plot transformed points and connect\n\nKey points to transform: intercepts, turning points, asymptotes.",
      keyPoints: ["Start with key points of the base function", "Apply each transformation to the coordinates", "Redraw with transformed features", "Label new intercepts and turning points"],
      workedExamples: [
        { problem: "Graph y = 2sin(x) + 1. Key features?", steps: ["Base: y = sin(x), amplitude 1, period 2π", "Vertical dilation by 2: amplitude becomes 2", "Translate up 1: midline at y = 1", "Range: [-2+1, 2+1] = [-1, 3]"], answer: "Amplitude 2, midline y=1, range [-1, 3]" }
      ],
      tips: ["Transform key points (peaks, troughs, intercepts) rather than plotting many points."],
      quiz: [
        { question: "y = f(x)+3 shifts the graph:", options: ["Left 3", "Right 3", "Up 3", "Down 3"], correctAnswer: 2, explanation: "+3 outside: vertical shift up 3." },
        { question: "y = f(x/2) stretches horizontally by:", options: ["2", "1/2", "4", "-2"], correctAnswer: 0, explanation: "f(x/b) with b=1/2 → stretch by 1/(1/2) = 2." },
        { question: "Asymptote y=0 of f(x). After y=f(x)+5, asymptote:", options: ["y = 0", "y = 5", "y = -5", "No asymptote"], correctAnswer: 1, explanation: "Vertical shift moves asymptotes too." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // PROBABILITY
  // ═══════════════════════════════════════════════════════════════
  "y11m-probability": [
    {
      title: "Sample Spaces and Events",
      explanation: "The sample space is the set of all possible outcomes. An event is a subset of the sample space.\n\nList outcomes systematically using lists, tables, or tree diagrams.\n\nP(A) = number of favourable outcomes / total outcomes (equally likely outcomes).",
      keyPoints: ["Sample space: all possible outcomes", "Event: subset of sample space", "P(A) = favourable / total", "0 ≤ P(A) ≤ 1, P(S) = 1"],
      workedExamples: [
        { problem: "Two dice rolled. P(sum = 7)?", steps: ["Total outcomes: 6 × 6 = 36", "Favourable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6", "P = 6/36 = 1/6"], answer: "P(sum=7) = 1/6" }
      ],
      tips: ["Use systematic listing or a table to ensure you count all outcomes."],
      quiz: [
        { question: "P(heads on fair coin):", options: ["0.25", "0.5", "1", "0"], correctAnswer: 1, explanation: "1 favourable out of 2 = 0.5" },
        { question: "Two coins: P(both heads):", options: ["1/4", "1/2", "1/3", "3/4"], correctAnswer: 0, explanation: "HH, HT, TH, TT → 1 out of 4." },
        { question: "P(impossible event) =", options: ["1", "0.5", "0", "-1"], correctAnswer: 2, explanation: "Impossible events have probability 0." }
      ]
    },
    {
      title: "Conditional Probability",
      explanation: "P(A|B) = probability of A given B has occurred = P(A∩B) / P(B).\n\nThe condition changes the sample space. Only consider outcomes where B is true.\n\nIndependent events: P(A|B) = P(A) (knowing B doesn't change A).",
      keyPoints: ["P(A|B) = P(A∩B) / P(B)", "Reduced sample space", "Independent: P(A|B) = P(A)", "Not to be confused with P(B|A)"],
      workedExamples: [
        { problem: "Bag: 3 red, 2 blue. Draw 1 red, then without replacement P(2nd red)?", steps: ["After drawing red: 2 red, 2 blue left", "P(red|first was red) = 2/4 = 1/2"], answer: "P = 1/2" }
      ],
      tips: ["'Given that' always signals conditional probability."],
      quiz: [
        { question: "P(A∩B) = 0.12, P(B) = 0.4. P(A|B) =", options: ["0.3", "0.48", "0.52", "0.12"], correctAnswer: 0, explanation: "0.12/0.4 = 0.3" },
        { question: "If A and B are independent, P(A|B) =", options: ["P(B)", "P(A)", "0", "1"], correctAnswer: 1, explanation: "Independent: knowing B doesn't change P(A)." },
        { question: "P(A|B) = P(B|A) is:", options: ["Always true", "Never true", "Sometimes true", "Only if independent"], correctAnswer: 2, explanation: "Only true in special cases." }
      ]
    },
    {
      title: "Counting Methods: Multiplication Principle",
      explanation: "If there are m ways to do task 1 and n ways to do task 2, the total number of ways to do both = m × n.\n\nThis extends to more tasks: m × n × p × …\n\nPermutations: arrangements where order matters. n! = n × (n-1) × … × 1.",
      keyPoints: ["Multiplication principle: total = m × n × …", "n! = n factorial", "Permutations: order matters", "With repetition: n^r choices"],
      workedExamples: [
        { problem: "3-digit code from digits 1-5, no repetition. How many?", steps: ["1st digit: 5 choices", "2nd digit: 4 choices", "3rd digit: 3 choices", "Total: 5 × 4 × 3 = 60"], answer: "60 codes" }
      ],
      tips: ["Ask: 'Can I reuse items?' This determines if it's with or without repetition."],
      quiz: [
        { question: "4 shirts, 3 pants. Outfit combos:", options: ["7", "12", "1", "43"], correctAnswer: 1, explanation: "4 × 3 = 12" },
        { question: "5! =", options: ["5", "25", "120", "15"], correctAnswer: 2, explanation: "5×4×3×2×1 = 120" },
        { question: "4-letter code, 26 letters, repetition allowed:", options: ["26⁴", "26×25×24×23", "26×4", "104"], correctAnswer: 0, explanation: "26 choices each position, repetition → 26⁴." }
      ]
    },
    {
      title: "Combinations and Applications",
      explanation: "Combinations: selections where order doesn't matter.\n\nⁿCᵣ = n! / (r!(n-r)!)\n\nUse combinations when choosing a group (committee, team) where the arrangement doesn't matter.",
      keyPoints: ["ⁿCᵣ = n!/(r!(n-r)!)", "Order doesn't matter", "ⁿCᵣ = ⁿCₙ₋ᵣ", "Use for 'choose' or 'select' problems"],
      workedExamples: [
        { problem: "Choose 3 from 8. How many ways?", steps: ["⁸C₃ = 8!/(3!×5!) = (8×7×6)/(3×2×1) = 56"], answer: "56 ways" }
      ],
      tips: ["'Choose', 'select', 'committee' → combinations. 'Arrange', 'order' → permutations."],
      quiz: [
        { question: "⁵C₂ =", options: ["10", "20", "25", "60"], correctAnswer: 0, explanation: "5!/(2!×3!) = (5×4)/(2×1) = 10" },
        { question: "⁶C₆ =", options: ["6", "720", "1", "36"], correctAnswer: 2, explanation: "Only one way to choose all 6." },
        { question: "Choosing a team uses:", options: ["Permutations", "Combinations", "Addition", "Factorial"], correctAnswer: 1, explanation: "Team membership doesn't depend on order." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // EXPONENTIALS AND LOGARITHMS
  // ═══════════════════════════════════════════════════════════════
  "y11m-exponentials-logs": [
    {
      title: "Index Laws Review",
      explanation: "Index laws govern operations with powers:\n\naᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁻ⁿ = 1/aⁿ\na^(1/n) = ⁿ√a",
      keyPoints: ["Multiply: add indices", "Divide: subtract indices", "Power of power: multiply", "Negative index: reciprocal", "Fractional index: root"],
      workedExamples: [
        { problem: "Simplify: (2x³)² × x⁻¹", steps: ["(2x³)² = 4x⁶", "4x⁶ × x⁻¹ = 4x⁵"], answer: "4x⁵" }
      ],
      tips: ["Convert roots to fractional indices for easier manipulation."],
      quiz: [
        { question: "8^(2/3) =", options: ["4", "2", "16", "6"], correctAnswer: 0, explanation: "8^(1/3) = 2, then 2² = 4" },
        { question: "x⁻² =", options: ["x²", "-x²", "1/x²", "-2x"], correctAnswer: 2, explanation: "Negative index = reciprocal." },
        { question: "√x in index form:", options: ["x²", "x^(1/2)", "x⁻¹", "2x"], correctAnswer: 1, explanation: "Square root = power of 1/2." }
      ]
    },
    {
      title: "Introduction to Logarithms",
      explanation: "A logarithm answers: 'What power gives this number?'\n\nlog_a(x) = y means aʸ = x.\n\nlog₁₀ is written as log. ln = logₑ (natural log).\n\nKey properties:\nlog(ab) = log a + log b\nlog(a/b) = log a - log b\nlog(aⁿ) = n log a",
      keyPoints: ["log_a(x) = y ↔ aʸ = x", "log(ab) = log a + log b", "log(a/b) = log a - log b", "log(aⁿ) = n log a"],
      workedExamples: [
        { problem: "Solve: log₂(x) = 5", steps: ["2⁵ = x", "x = 32"], answer: "x = 32" }
      ],
      tips: ["Always convert between log and exponential form to understand the relationship."],
      quiz: [
        { question: "log₁₀(1000) =", options: ["10", "3", "100", "30"], correctAnswer: 1, explanation: "10³ = 1000, so log = 3." },
        { question: "log₂(8) =", options: ["2", "3", "4", "8"], correctAnswer: 1, explanation: "2³ = 8" },
        { question: "log(ab) =", options: ["log a × log b", "log a + log b", "a log b", "log(a+b)"], correctAnswer: 1, explanation: "Product rule: log(ab) = log a + log b." }
      ]
    },
    {
      title: "Solving Exponential Equations",
      explanation: "To solve equations like aˣ = b:\n1. If possible, express both sides with the same base\n2. Otherwise, take logarithms of both sides\n\nlog(aˣ) = x log a, so x = log b / log a.",
      keyPoints: ["Same base: equate exponents", "Different bases: use logarithms", "x = log b / log a", "Check solutions in original equation"],
      workedExamples: [
        { problem: "Solve: 3ˣ = 20", steps: ["Take log both sides: x log 3 = log 20", "x = log 20 / log 3", "x = 1.301/0.477 ≈ 2.727"], answer: "x ≈ 2.73" }
      ],
      tips: ["Use the change of base formula: log_a(b) = log b / log a."],
      quiz: [
        { question: "2ˣ = 16. x =", options: ["2", "4", "8", "16"], correctAnswer: 1, explanation: "2⁴ = 16, so x = 4" },
        { question: "To solve 5ˣ = 30:", options: ["x = 30/5", "x = log 30/log 5", "x = 5×30", "x = 30⁵"], correctAnswer: 1, explanation: "Take logs: x = log 30/log 5." },
        { question: "10ˣ = 0.01. x =", options: ["2", "-2", "0.01", "100"], correctAnswer: 1, explanation: "10⁻² = 0.01, so x = -2." }
      ]
    },
    {
      title: "Exponential Modelling",
      explanation: "Exponential models: y = A × bˣ or y = Ae^(kx).\n\nGrowth: b > 1 or k > 0. Decay: 0 < b < 1 or k < 0.\n\nHalf-life: time for quantity to halve. Doubling time: time to double.",
      keyPoints: ["y = Ab^x for discrete growth/decay", "b > 1: growth, 0 < b < 1: decay", "Use logs to find time (x)", "Half-life: solve y = A/2"],
      workedExamples: [
        { problem: "Population P = 1000 × 1.05^t. When does P reach 2000?", steps: ["2000 = 1000 × 1.05^t", "2 = 1.05^t", "t = log 2 / log 1.05 ≈ 14.2 years"], answer: "≈ 14.2 years" }
      ],
      tips: ["For 'when does it reach…' questions, set up the equation and take logs."],
      quiz: [
        { question: "y = 100 × 0.9^t models:", options: ["Growth", "Decay", "Linear change", "No change"], correctAnswer: 1, explanation: "0.9 < 1 → exponential decay." },
        { question: "Half-life means:", options: ["Double time", "Time to reach half", "Half the rate", "Two lives"], correctAnswer: 1, explanation: "Time for quantity to reduce to half." },
        { question: "500 = 250 × 2^t. t =", options: ["0.5", "1", "2", "250"], correctAnswer: 1, explanation: "2 = 2^t, so t = 1." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // CIRCULAR FUNCTIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-circular-functions": [
    {
      title: "Radians",
      explanation: "Radians are an alternative to degrees for measuring angles. One radian is the angle subtended by an arc equal to the radius.\n\n2π radians = 360°, so π radians = 180°.\n\nConversion: degrees × π/180 = radians. Radians × 180/π = degrees.",
      keyPoints: ["π rad = 180°", "To convert: degrees × π/180", "Common: π/6=30°, π/4=45°, π/3=60°, π/2=90°", "Arc length: s = rθ (θ in radians)"],
      workedExamples: [
        { problem: "Convert 120° to radians.", steps: ["120 × π/180 = 2π/3"], answer: "2π/3 radians" }
      ],
      tips: ["Memorise the key conversions: 30°, 45°, 60°, 90°, 180°, 270°, 360° in radians."],
      quiz: [
        { question: "π/4 radians in degrees:", options: ["30°", "45°", "60°", "90°"], correctAnswer: 1, explanation: "π/4 × 180/π = 45°" },
        { question: "180° in radians:", options: ["π/2", "π", "2π", "π/4"], correctAnswer: 1, explanation: "180° = π radians." },
        { question: "2π radians =", options: ["180°", "270°", "360°", "90°"], correctAnswer: 2, explanation: "Full circle = 2π radians = 360°." }
      ]
    },
    {
      title: "Sine and Cosine Graphs",
      explanation: "y = sin(x) and y = cos(x) are periodic functions with period 2π and amplitude 1.\n\nFor y = a sin(bx + c) + d:\n• |a| = amplitude\n• Period = 2π/|b|\n• Phase shift = -c/b\n• d = vertical shift (midline)",
      keyPoints: ["Amplitude = |a|", "Period = 2π/|b|", "Midline at y = d", "sin(0) = 0, cos(0) = 1"],
      workedExamples: [
        { problem: "y = 3sin(2x) + 1. Find amplitude, period, midline.", steps: ["Amplitude = |3| = 3", "Period = 2π/2 = π", "Midline: y = 1", "Range: [1-3, 1+3] = [-2, 4]"], answer: "Amplitude 3, period π, midline y=1" }
      ],
      tips: ["Sketch the midline first, then mark the amplitude above and below it."],
      quiz: [
        { question: "Amplitude of y = 5cos(x):", options: ["1", "5", "10", "2π"], correctAnswer: 1, explanation: "|5| = 5" },
        { question: "Period of y = sin(3x):", options: ["3", "2π/3", "6π", "π/3"], correctAnswer: 1, explanation: "2π/|3| = 2π/3" },
        { question: "y = cos(x) + 2 has midline:", options: ["y = 0", "y = 1", "y = 2", "y = -2"], correctAnswer: 2, explanation: "Vertical shift of 2 → midline at y = 2." }
      ]
    },
    {
      title: "Solving Trigonometric Equations",
      explanation: "To solve sin(x) = k or cos(x) = k:\n1. Find the reference angle using sin⁻¹ or cos⁻¹\n2. Identify all quadrants where the ratio has the correct sign\n3. Write all solutions in the given domain\n\nUse ASTC: All (Q1), Sin (Q2), Tan (Q3), Cos (Q4).",
      keyPoints: ["Find reference angle first", "ASTC for sign of trig ratios", "Multiple solutions in [0, 2π]", "General solution: add 2nπ for all solutions"],
      workedExamples: [
        { problem: "Solve sin(x) = 0.5 for x ∈ [0, 2π].", steps: ["Reference angle: sin⁻¹(0.5) = π/6", "sin positive in Q1 and Q2", "x = π/6 or x = π - π/6 = 5π/6"], answer: "x = π/6 or x = 5π/6" }
      ],
      tips: ["Always check your domain — don't give solutions outside the required interval."],
      quiz: [
        { question: "cos(x) = 0. Solutions in [0, 2π]:", options: ["π/2 only", "π/2 and 3π/2", "0 and π", "π only"], correctAnswer: 1, explanation: "cos = 0 at π/2 and 3π/2." },
        { question: "sin is positive in quadrants:", options: ["1 and 2", "1 and 4", "2 and 3", "3 and 4"], correctAnswer: 0, explanation: "ASTC: sin positive in Q1 and Q2." },
        { question: "sin(x) = 1. x =", options: ["0", "π/2", "π", "2π"], correctAnswer: 1, explanation: "sin = 1 only at π/2." }
      ]
    },
    {
      title: "Applications of Circular Functions",
      explanation: "Circular functions model periodic phenomena: tides, temperatures, daylight hours, sound waves, wheel motion.\n\nSet up the model y = a sin(b(x - c)) + d by identifying:\n• Amplitude = (max - min)/2\n• Period from the context\n• Midline d = (max + min)/2",
      keyPoints: ["Amplitude = (max - min)/2", "Midline = (max + min)/2", "Period from context → find b = 2π/period", "Phase shift from starting point"],
      workedExamples: [
        { problem: "Tide: max 2.4m at 6am, min 0.6m at 12pm. Model.", steps: ["Amplitude = (2.4-0.6)/2 = 0.9", "Midline = (2.4+0.6)/2 = 1.5", "Period = 12 hours, b = 2π/12 = π/6", "Max at t=6 → use cos: h = 0.9cos(π/6(t-6)) + 1.5"], answer: "h = 0.9cos(π(t-6)/6) + 1.5" }
      ],
      tips: ["Use cos if you want max at the start, sin if you want zero at the start."],
      quiz: [
        { question: "Max temp 35°, min 15°. Amplitude:", options: ["10", "20", "25", "50"], correctAnswer: 0, explanation: "(35-15)/2 = 10" },
        { question: "Period of daily temperature cycle:", options: ["12 hours", "24 hours", "365 days", "6 hours"], correctAnswer: 1, explanation: "Temperature repeats every 24 hours." },
        { question: "Midline of max 8, min 2:", options: ["3", "4", "5", "6"], correctAnswer: 2, explanation: "(8+2)/2 = 5" }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // RATES OF CHANGE
  // ═══════════════════════════════════════════════════════════════
  "y11m-rates-change": [
    {
      title: "Average Rate of Change",
      explanation: "The average rate of change of f between x = a and x = b is:\n\nAvg rate = (f(b) - f(a)) / (b - a)\n\nThis is the gradient of the secant line connecting (a, f(a)) and (b, f(b)).",
      keyPoints: ["Average rate = Δy/Δx = (f(b)-f(a))/(b-a)", "Equals gradient of secant line", "Measured over an interval", "Units: [y-units] per [x-units]"],
      workedExamples: [
        { problem: "f(x) = x². Average rate from x=1 to x=3.", steps: ["f(1) = 1, f(3) = 9", "Avg rate = (9-1)/(3-1) = 8/2 = 4"], answer: "Average rate = 4" }
      ],
      tips: ["Average rate of change = slope of the line between two points on the curve."],
      quiz: [
        { question: "f(x) = 2x+1. Avg rate from x=0 to x=5:", options: ["2", "10", "1", "5"], correctAnswer: 0, explanation: "(11-1)/5 = 2. (Linear → constant rate)" },
        { question: "Avg rate of change is the gradient of:", options: ["Tangent", "Secant", "Normal", "Axis"], correctAnswer: 1, explanation: "Secant connects two points on the curve." },
        { question: "Distance 100m in 10s. Avg speed:", options: ["10 m/s", "100 m/s", "1000 m/s", "0.1 m/s"], correctAnswer: 0, explanation: "100/10 = 10 m/s" }
      ]
    },
    {
      title: "Instantaneous Rate of Change",
      explanation: "The instantaneous rate of change at x = a is the gradient of the tangent line at that point.\n\nIt's found by taking the limit as the interval shrinks to zero:\n\nf'(a) = lim[h→0] (f(a+h) - f(a)) / h\n\nThis is the derivative at x = a.",
      keyPoints: ["Gradient of tangent at a point", "Limit of average rate as interval → 0", "f'(a) = derivative at x = a", "Represents rate at an instant"],
      workedExamples: [
        { problem: "f(x) = x². Find f'(3) from first principles.", steps: ["f'(3) = lim[h→0] ((3+h)² - 9)/h", "= lim[h→0] (9+6h+h²-9)/h", "= lim[h→0] (6h+h²)/h = lim[h→0] (6+h) = 6"], answer: "f'(3) = 6" }
      ],
      tips: ["The derivative gives the exact rate of change at one specific point."],
      quiz: [
        { question: "Instantaneous rate is the gradient of:", options: ["Secant", "Tangent", "Normal", "Chord"], correctAnswer: 1, explanation: "Tangent line touches the curve at one point." },
        { question: "As h→0, the secant becomes:", options: ["A chord", "A tangent", "Horizontal", "Vertical"], correctAnswer: 1, explanation: "The secant line approaches the tangent as h→0." },
        { question: "f(x) = 3x. f'(x) everywhere =", options: ["3", "x", "3x", "0"], correctAnswer: 0, explanation: "Linear function: constant gradient of 3." }
      ]
    },
    {
      title: "Interpreting Rates of Change",
      explanation: "In context, the rate of change tells you how fast one quantity changes relative to another.\n\nPositive rate: increasing. Negative rate: decreasing. Zero rate: momentarily stationary.\n\nCommon contexts: velocity (rate of position change), acceleration (rate of velocity change), population growth rate.",
      keyPoints: ["Positive derivative: function increasing", "Negative derivative: function decreasing", "Zero derivative: stationary point", "Units matter: interpret in context"],
      workedExamples: [
        { problem: "Water level h(t) = -2t² + 12t. When is water level rising?", steps: ["h'(t) = -4t + 12", "Rising when h'(t) > 0: -4t + 12 > 0 → t < 3", "Water is rising for 0 < t < 3"], answer: "Rising for 0 < t < 3" }
      ],
      tips: ["Always state what the rate represents in the context of the problem."],
      quiz: [
        { question: "f'(x) < 0 means f is:", options: ["Increasing", "Decreasing", "Constant", "Undefined"], correctAnswer: 1, explanation: "Negative derivative → decreasing function." },
        { question: "Velocity is the rate of change of:", options: ["Acceleration", "Distance/position", "Speed", "Force"], correctAnswer: 1, explanation: "Velocity = derivative of position." },
        { question: "f'(a) = 0 means:", options: ["f is zero", "Stationary point", "f is undefined", "Maximum"], correctAnswer: 1, explanation: "Zero gradient → stationary (could be max, min, or inflection)." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // DIFFERENTIATION
  // ═══════════════════════════════════════════════════════════════
  "y11m-differentiation": [
    {
      title: "The Power Rule",
      explanation: "For f(x) = xⁿ, the derivative is f'(x) = nxⁿ⁻¹.\n\nBring down the power as a coefficient, then reduce the power by 1.\n\nThis works for any real n, including negatives and fractions.",
      keyPoints: ["d/dx(xⁿ) = nxⁿ⁻¹", "d/dx(constant) = 0", "d/dx(kf(x)) = k·f'(x)", "Works for negative and fractional powers"],
      workedExamples: [
        { problem: "Differentiate f(x) = 3x⁴ - 2x² + 5x - 7.", steps: ["f'(x) = 12x³ - 4x + 5 - 0", "= 12x³ - 4x + 5"], answer: "f'(x) = 12x³ - 4x + 5" }
      ],
      tips: ["Rewrite roots and fractions as powers first: √x = x^(1/2), 1/x = x⁻¹."],
      quiz: [
        { question: "d/dx(x⁵) =", options: ["5x⁴", "x⁴", "5x⁵", "4x⁵"], correctAnswer: 0, explanation: "5x⁴ (bring down 5, reduce power to 4)." },
        { question: "d/dx(7) =", options: ["7", "1", "0", "7x"], correctAnswer: 2, explanation: "Derivative of a constant is 0." },
        { question: "d/dx(√x) = d/dx(x^½) =", options: ["½x^(-½)", "½x^(½)", "2√x", "1/(2x)"], correctAnswer: 0, explanation: "½ × x^(½-1) = ½x^(-½) = 1/(2√x)" }
      ]
    },
    {
      title: "Derivative Rules: Chain, Product, Quotient",
      explanation: "Chain rule: d/dx[f(g(x))] = f'(g(x)) × g'(x)\n\nProduct rule: d/dx[uv] = u'v + uv'\n\nQuotient rule: d/dx[u/v] = (u'v - uv')/v²\n\nAt Methods level, the chain rule and product rule are most commonly used.",
      keyPoints: ["Chain: derivative of outer × derivative of inner", "Product: u'v + uv'", "Quotient: (u'v - uv')/v²", "Identify which rule to use based on structure"],
      workedExamples: [
        { problem: "Differentiate y = (2x+1)³.", steps: ["Chain rule: outer = u³, inner = 2x+1", "dy/dx = 3(2x+1)² × 2 = 6(2x+1)²"], answer: "dy/dx = 6(2x+1)²" }
      ],
      tips: ["Chain rule: 'differentiate the outside, keep the inside, multiply by the derivative of the inside'."],
      quiz: [
        { question: "d/dx[(3x-1)⁴] =", options: ["4(3x-1)³", "12(3x-1)³", "3(3x-1)⁴", "4(3x-1)⁴"], correctAnswer: 1, explanation: "4(3x-1)³ × 3 = 12(3x-1)³" },
        { question: "d/dx[x²sinx] uses:", options: ["Chain rule", "Product rule", "Power rule only", "Quotient rule"], correctAnswer: 1, explanation: "Two functions multiplied → product rule." },
        { question: "d/dx[f(g(x))] uses:", options: ["Product rule", "Chain rule", "Quotient rule", "Power rule"], correctAnswer: 1, explanation: "Function inside a function → chain rule." }
      ]
    },
    {
      title: "Equations of Tangent Lines",
      explanation: "The tangent line at x = a has gradient f'(a) and passes through (a, f(a)).\n\nEquation: y - f(a) = f'(a)(x - a)\n\nThe normal line is perpendicular to the tangent: gradient = -1/f'(a).",
      keyPoints: ["Tangent gradient = f'(a)", "Use point-gradient form", "Normal gradient = -1/f'(a)", "Tangent touches curve at one point"],
      workedExamples: [
        { problem: "Find tangent to y = x² at x = 3.", steps: ["f(3) = 9, point (3, 9)", "f'(x) = 2x, f'(3) = 6", "y - 9 = 6(x - 3)", "y = 6x - 9"], answer: "y = 6x - 9" }
      ],
      tips: ["You need both the point AND the gradient to write the tangent equation."],
      quiz: [
        { question: "f(x) = x³, f'(x) = 3x². Tangent gradient at x=2:", options: ["8", "12", "6", "4"], correctAnswer: 1, explanation: "f'(2) = 3(4) = 12" },
        { question: "Normal to a tangent with m=4 has gradient:", options: ["4", "-4", "1/4", "-1/4"], correctAnswer: 3, explanation: "Normal gradient = -1/m = -1/4." },
        { question: "Tangent at (1, 1) with m=2:", options: ["y = 2x-1", "y = 2x+1", "y = x+1", "y = 2x"], correctAnswer: 0, explanation: "y-1 = 2(x-1), y = 2x-1." }
      ]
    },
    {
      title: "Stationary Points and Curve Sketching",
      explanation: "Stationary points occur where f'(x) = 0. To classify:\n\n1. Find f'(x) = 0 → x-values of stationary points\n2. Use sign test or f''(x) to classify:\n   • f''(x) > 0 → local minimum\n   • f''(x) < 0 → local maximum\n   • f''(x) = 0 → possible inflection (test further)",
      keyPoints: ["Stationary: f'(x) = 0", "Local max: f'' < 0", "Local min: f'' > 0", "Inflection: f'' = 0 and changes sign"],
      workedExamples: [
        { problem: "f(x) = x³ - 3x + 2. Find and classify stationary points.", steps: ["f'(x) = 3x² - 3 = 0 → x² = 1 → x = ±1", "f''(x) = 6x", "At x=-1: f''(-1) = -6 < 0 → local max at (-1, 4)", "At x=1: f''(1) = 6 > 0 → local min at (1, 0)"], answer: "Local max (-1, 4), local min (1, 0)" }
      ],
      tips: ["Always find both coordinates: the x from f'=0, then y from f(x)."],
      quiz: [
        { question: "f'(x) = 0 and f''(x) > 0 means:", options: ["Maximum", "Minimum", "Inflection", "Saddle"], correctAnswer: 1, explanation: "Positive second derivative → concave up → minimum." },
        { question: "f(x) = x² - 4x. Stationary at x =", options: ["0", "2", "4", "-2"], correctAnswer: 1, explanation: "f'(x) = 2x-4 = 0 → x = 2" },
        { question: "Number of stationary points of a cubic:", options: ["Always 2", "0 or 2", "Always 1", "0, 1, or 2"], correctAnswer: 3, explanation: "A cubic can have 0, 1, or 2 stationary points." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // INTEGRATION
  // ═══════════════════════════════════════════════════════════════
  "y11m-integration": [
    {
      title: "Area Under a Curve",
      explanation: "The area between a curve y = f(x), the x-axis, and lines x = a and x = b is found using definite integration.\n\nArea = ∫ₐᵇ f(x) dx (when f(x) ≥ 0)\n\nIf f(x) < 0 in some region, split the integral and take absolute values.",
      keyPoints: ["Area = ∫ₐᵇ f(x) dx for f(x) ≥ 0", "Negative areas need absolute value", "Split at x-intercepts if curve crosses axis", "Units: square units"],
      workedExamples: [
        { problem: "Area under y = x² from x = 0 to x = 3.", steps: ["∫₀³ x² dx = [x³/3]₀³", "= 27/3 - 0 = 9"], answer: "Area = 9 square units" }
      ],
      tips: ["Always sketch the curve to check if it goes below the x-axis in the interval."],
      quiz: [
        { question: "∫₀² 3 dx =", options: ["3", "6", "0", "2"], correctAnswer: 1, explanation: "3 × 2 = 6 (rectangle: height 3, width 2)." },
        { question: "Area below x-axis is:", options: ["Positive", "Negative from integral", "Zero", "Undefined"], correctAnswer: 1, explanation: "The integral gives negative values below the axis." },
        { question: "∫₁³ 2x dx =", options: ["4", "8", "6", "12"], correctAnswer: 1, explanation: "[x²]₁³ = 9-1 = 8" }
      ]
    },
    {
      title: "Antidifferentiation (Indefinite Integration)",
      explanation: "Antidifferentiation is the reverse of differentiation. ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1).\n\nC is the constant of integration — it accounts for the family of curves with the same derivative.\n\nAlways add + C for indefinite integrals.",
      keyPoints: ["∫xⁿ dx = xⁿ⁺¹/(n+1) + C", "Add 1 to power, divide by new power", "Always include + C", "∫k dx = kx + C"],
      workedExamples: [
        { problem: "Find ∫(3x² + 4x - 1) dx.", steps: ["= 3x³/3 + 4x²/2 - x + C", "= x³ + 2x² - x + C"], answer: "x³ + 2x² - x + C" }
      ],
      tips: ["Check by differentiating your answer — you should get back the original function."],
      quiz: [
        { question: "∫x⁴ dx =", options: ["4x³", "x⁵/5 + C", "x⁴/4 + C", "5x⁵ + C"], correctAnswer: 1, explanation: "Add 1 to power (5), divide by 5, add C." },
        { question: "∫5 dx =", options: ["5x + C", "5", "0", "5x² + C"], correctAnswer: 0, explanation: "∫k dx = kx + C." },
        { question: "Why add + C?", options: ["Convention", "Many functions have same derivative", "To make it harder", "Only for definite"], correctAnswer: 1, explanation: "F(x) + C all have the same derivative F'(x)." }
      ]
    },
    {
      title: "Definite Integrals and Applications",
      explanation: "A definite integral ∫ₐᵇ f(x) dx has limits of integration. Evaluate by finding the antiderivative F(x), then computing F(b) - F(a).\n\nNo + C needed for definite integrals. Applications include area, displacement, total change.",
      keyPoints: ["∫ₐᵇ f(x) dx = F(b) - F(a)", "No constant C needed", "Represents net area (signed)", "Total distance needs |f(x)|"],
      workedExamples: [
        { problem: "Evaluate ∫₁⁴ (2x + 1) dx.", steps: ["F(x) = x² + x", "F(4) - F(1) = (16+4) - (1+1) = 20 - 2 = 18"], answer: "18" }
      ],
      tips: ["Always substitute the upper limit first, then subtract the lower limit value."],
      quiz: [
        { question: "∫₀¹ x² dx =", options: ["1/3", "1/2", "1", "2/3"], correctAnswer: 0, explanation: "[x³/3]₀¹ = 1/3 - 0 = 1/3" },
        { question: "∫₂⁵ 1 dx =", options: ["5", "2", "3", "7"], correctAnswer: 2, explanation: "[x]₂⁵ = 5-2 = 3 (rectangle of height 1, width 3)." },
        { question: "Definite integrals give:", options: ["A family of functions", "A number", "A derivative", "An equation"], correctAnswer: 1, explanation: "Definite integrals evaluate to a specific number." }
      ]
    }
  ]
};
