import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 2: Coordinate Geometry & Linear Relations (VCE Unit 3)

export const year12MethodsCh2Lessons: TopicLessonsMap = {
  "y12m-ch2-2a-linear-eq": [
    {
      title: "Linear Equations",
      explanation:
        "A LINEAR EQUATION in one variable has the form ax + b = 0 with a ≠ 0. Its unique solution is x = −b/a.\n\nLINEAR EQUATIONS in two variables have the form y = mx + c (gradient–intercept form) or ax + by + c = 0 (general form).\n  • m is the GRADIENT (rise over run).\n  • c is the y-INTERCEPT.\n\nGRADIENT FORMULA between two points:\n  m = (y₂ − y₁)/(x₂ − x₁), provided x₂ ≠ x₁.\n\nKEY RULES:\n  • Parallel lines have EQUAL gradients.\n  • Perpendicular lines have gradients that multiply to −1: m₁ · m₂ = −1.\n  • Horizontal line: y = constant (gradient 0).\n  • Vertical line: x = constant (gradient undefined).",
      keyPoints: [
        "Solve ax + b = 0 by isolating x",
        "Gradient = rise/run between two points",
        "Parallel: equal gradients; perpendicular: product = −1",
      ],
      workedExamples: [
        {
          problem: "Solve 3(x − 4) = 2x + 1.",
          steps: [
            "3x − 12 = 2x + 1",
            "x = 13",
          ],
          answer: "x = 13.",
        },
        {
          problem: "Find the gradient of the line through (1, 2) and (5, 14).",
          steps: [
            "m = (14 − 2)/(5 − 1) = 12/4 = 3",
          ],
          answer: "m = 3.",
        },
      ],
      tips: [
        "Expand brackets before collecting terms",
        "Always state the gradient with sign",
      ],
      formulas: [
        { name: "Gradient", formula: "m = (y₂ − y₁)/(x₂ − x₁)" },
        { name: "Perpendicular condition", formula: "m₁ · m₂ = −1" },
      ],
      examQuestion: {
        problem: "Find the equation of the line through (2, 5) perpendicular to y = 2x + 1.",
        solution: [
          "Original gradient 2 → perpendicular gradient −1/2",
          "y − 5 = −1/2 (x − 2)",
          "y = −x/2 + 6",
        ],
        answer: "y = −x/2 + 6.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to flip sign for perpendicular gradient",
        "Dropping a negative when distributing",
      ],
      summary: [
        "Linear equations underpin coordinate geometry",
        "Gradient encodes parallel/perpendicular conditions",
      ],
      quiz: [
        { question: "Gradient of line through (0,0) and (4,8):", options: ["1", "2", "1/2", "4"], correctAnswer: 1, explanation: "8/4 = 2." },
        { question: "Perpendicular to gradient 3:", options: ["3", "−3", "1/3", "−1/3"], correctAnswer: 3, explanation: "Negative reciprocal." },
        { question: "Vertical line has gradient:", options: ["0", "1", "Undefined", "−1"], correctAnswer: 2, explanation: "Division by zero." },
      ],
    },
  ],

  "y12m-ch2-2b-literal-simultaneous": [
    {
      title: "Literal Equations and Simultaneous Linear Literal Equations",
      explanation:
        "A LITERAL EQUATION contains letters (parameters) in addition to the unknown. Solving means expressing the unknown in terms of the other letters.\n\nExample: solve ax + b = c for x:\n  ax = c − b → x = (c − b)/a, provided a ≠ 0.\n\nSIMULTANEOUS LINEAR LITERAL EQUATIONS:\n  Two unknowns, two equations, with parameters as coefficients. Use ELIMINATION or SUBSTITUTION just as for numerical systems.\n\nNUMBER OF SOLUTIONS:\n  • Unique solution when the determinant of the coefficient matrix is nonzero.\n  • No or infinitely many solutions when the determinant is zero — analyse separately.\n\nThis topic appears repeatedly in Methods because parameters change behaviour at critical values.",
      keyPoints: [
        "Treat parameters like numbers when solving",
        "State the restriction on parameters (e.g. a ≠ 0)",
        "For 2×2 systems, det = a₁b₂ − a₂b₁",
      ],
      workedExamples: [
        {
          problem: "Solve mx + n = p for x.",
          steps: [
            "mx = p − n",
            "x = (p − n)/m, m ≠ 0",
          ],
          answer: "x = (p − n)/m.",
        },
        {
          problem: "Solve x + ay = 1 and ax + y = a for x and y.",
          steps: [
            "Multiply first by a: ax + a²y = a",
            "Subtract second: (a² − 1)y = 0 → y = 0 (for a² ≠ 1)",
            "From first: x = 1",
            "Special cases: a = 1 → infinite solutions; a = −1 → no solutions",
          ],
          answer: "x = 1, y = 0 for a² ≠ 1.",
        },
      ],
      tips: [
        "Always note parameter restrictions",
        "Check for special cases when determinants vanish",
      ],
      formulas: [
        { name: "Determinant 2×2", formula: "det = a₁b₂ − a₂b₁" },
      ],
      examQuestion: {
        problem: "Find values of k for which kx + 2y = 4 and 3x + ky = 6 have a unique solution.",
        solution: [
          "Determinant = k·k − 2·3 = k² − 6",
          "Unique solution when k² ≠ 6 → k ≠ ±√6",
        ],
        answer: "k ≠ ±√6.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to state parameter restrictions",
        "Missing the no-solution / infinite-solution cases",
      ],
      summary: [
        "Solve literal equations symbolically",
        "Check determinant for solution behaviour",
      ],
      quiz: [
        { question: "Solve kx = 1 for x:", options: ["1/k (k≠0)", "k", "k−1", "0"], correctAnswer: 0, explanation: "Divide by k." },
        { question: "Unique solution requires determinant:", options: ["= 0", "≠ 0", "Positive", "Negative"], correctAnswer: 1, explanation: "Nonzero determinant." },
        { question: "If det = 0, system has:", options: ["Unique solution", "No solution OR infinite solutions", "Always no solution", "Always infinite"], correctAnswer: 1, explanation: "Depends on consistency." },
      ],
    },
  ],

  "y12m-ch2-2c-coord-geom": [
    {
      title: "Linear Coordinate Geometry",
      explanation:
        "Key formulas for two points P₁ = (x₁, y₁) and P₂ = (x₂, y₂):\n  • DISTANCE: d = √((x₂ − x₁)² + (y₂ − y₁)²).\n  • MIDPOINT: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).\n  • GRADIENT: m = (y₂ − y₁)/(x₂ − x₁).\n  • EQUATION OF A LINE through (x₁, y₁) with gradient m: y − y₁ = m(x − x₁).\n\nThese tools combine to solve geometry problems: showing points are collinear, classifying triangles (right-angled, isosceles), finding perpendicular bisectors, and so on.",
      keyPoints: [
        "Distance, midpoint and gradient are the basic toolbox",
        "Use point–gradient form: y − y₁ = m(x − x₁)",
        "Perpendicular bisector passes through midpoint with gradient −1/m",
      ],
      workedExamples: [
        {
          problem: "Find the distance and midpoint of A(1, 2) and B(5, 6).",
          steps: [
            "d = √((5−1)² + (6−2)²) = √(16 + 16) = √32 = 4√2",
            "M = (3, 4)",
          ],
          answer: "d = 4√2; midpoint (3, 4).",
        },
      ],
      tips: [
        "Always simplify surds in distances",
        "When showing perpendicularity, multiply gradients",
      ],
      formulas: [
        { name: "Distance", formula: "d = √((x₂−x₁)² + (y₂−y₁)²)" },
        { name: "Midpoint", formula: "((x₁+x₂)/2, (y₁+y₂)/2)" },
      ],
      examQuestion: {
        problem: "Find the equation of the perpendicular bisector of A(2, 1) and B(8, 5).",
        solution: [
          "Midpoint (5, 3)",
          "Gradient AB = (5−1)/(8−2) = 4/6 = 2/3",
          "Perpendicular gradient = −3/2",
          "y − 3 = −3/2 (x − 5) → y = −3x/2 + 21/2",
        ],
        answer: "y = −3x/2 + 21/2.",
        marks: 3,
      },
      commonErrors: [
        "Subtracting in inconsistent order",
        "Not simplifying final equation",
      ],
      summary: [
        "Distance, midpoint, gradient form the geometry toolbox",
        "Perpendicular bisector: midpoint + −1/m",
      ],
      quiz: [
        { question: "Distance from (0,0) to (3,4):", options: ["5", "7", "12", "25"], correctAnswer: 0, explanation: "√(9+16)=5." },
        { question: "Midpoint of (−2,4) and (6,−2):", options: ["(2,1)", "(4,2)", "(2,−1)", "(0,1)"], correctAnswer: 0, explanation: "Average each coordinate." },
        { question: "Gradient through (1,1) and (4,7):", options: ["1", "2", "3", "6"], correctAnswer: 1, explanation: "6/3=2." },
      ],
    },
  ],

  "y12m-ch2-2d-applications": [
    {
      title: "Applications of Linear Functions",
      explanation:
        "LINEAR MODELS appear whenever a quantity changes by a CONSTANT amount per unit time (or per unit input).\n\nCOMMON CONTEXTS:\n  • COST: C(x) = mx + b where m is unit cost and b is fixed cost.\n  • REVENUE: R(x) = px where p is unit price.\n  • PROFIT: P(x) = R(x) − C(x) = (p − m)x − b.\n  • DEPRECIATION: V(t) = V₀ − dt (flat-rate).\n  • TEMPERATURE conversion, taxi fares, salaries with commission, etc.\n\nKEY QUESTIONS to answer in linear modelling:\n  • Break-even: solve P(x) = 0.\n  • Crossing/equality: solve f(x) = g(x).\n  • Domain restriction: x must be a non-negative integer for items.\n  • Interpret slope and intercept in words.",
      keyPoints: [
        "Linear models have constant rate of change",
        "Slope = rate; intercept = fixed amount",
        "Break-even: revenue = cost",
        "Always interpret with units",
      ],
      workedExamples: [
        {
          problem: "C(x) = 5x + 200, R(x) = 9x. Find break-even and profit at x = 80.",
          steps: [
            "Break even: 5x + 200 = 9x → x = 50",
            "Profit at 80: P(80) = 4(80) − 200 = 120",
          ],
          answer: "Break even at 50 units; profit $120 at 80 units.",
        },
      ],
      tips: [
        "Sketch when contexts overlap",
        "Always restrict x to whole numbers if items are countable",
      ],
      formulas: [
        { name: "Profit", formula: "P(x) = R(x) − C(x)" },
      ],
      examQuestion: {
        problem: "A tank loses water at 4 L/min from an initial 200 L. Write V(t) and find when it is empty.",
        solution: [
          "V(t) = 200 − 4t",
          "Empty: 200 − 4t = 0 → t = 50 minutes",
        ],
        answer: "V(t) = 200 − 4t; empty at t = 50 min.",
        marks: 2,
      },
      commonErrors: [
        "Forgetting to state units",
        "Missing the domain restriction",
      ],
      summary: [
        "Identify slope and intercept in context",
        "Solve linear equations to answer questions",
      ],
      quiz: [
        { question: "C(x)=2x+10. Fixed cost is:", options: ["2", "10", "12", "0"], correctAnswer: 1, explanation: "Intercept = fixed cost." },
        { question: "Break even occurs when:", options: ["R<C", "R=C", "R>C", "x=0"], correctAnswer: 1, explanation: "Profit zero." },
        { question: "Slope of C(x)=3x+5 represents:", options: ["Fixed cost", "Unit cost", "Profit", "Quantity"], correctAnswer: 1, explanation: "Per-unit cost." },
      ],
    },
  ],

  "y12m-ch2-2e-geom-simultaneous": [
    {
      title: "The Geometry of Simultaneous Linear Equations",
      explanation:
        "A 2×2 system of linear equations corresponds to two lines in the plane. There are exactly THREE possibilities:\n  1. UNIQUE SOLUTION: lines intersect at one point. Gradients differ.\n  2. NO SOLUTION: lines are PARALLEL but distinct (same gradient, different intercepts).\n  3. INFINITELY MANY SOLUTIONS: lines coincide (same gradient AND same intercept).\n\nDETERMINANT VIEW: for a₁x + b₁y = c₁ and a₂x + b₂y = c₂, determinant Δ = a₁b₂ − a₂b₁.\n  • Δ ≠ 0 → unique solution.\n  • Δ = 0 → either no solution or infinitely many; check whether right-hand sides match the same ratio as coefficients.",
      keyPoints: [
        "Δ ≠ 0 → unique intersection",
        "Δ = 0, distinct lines → no solution",
        "Δ = 0, identical lines → infinitely many",
      ],
      workedExamples: [
        {
          problem: "Determine the type of solution for 2x + y = 3 and 4x + 2y = 7.",
          steps: [
            "Δ = 2·2 − 1·4 = 0",
            "Ratios of coefficients 2:1 match 4:2 but RHS 3:7 does not",
            "Lines parallel but distinct → NO solution",
          ],
          answer: "No solution.",
        },
      ],
      tips: [
        "Compare both coefficient and constant ratios when Δ = 0",
      ],
      formulas: [
        { name: "Determinant", formula: "Δ = a₁b₂ − a₂b₁" },
      ],
      examQuestion: {
        problem: "Find k so that 3x + ky = 6 and 6x + 2y = 12 have infinitely many solutions.",
        solution: [
          "For coincident lines: 3/6 = k/2 = 6/12 → 1/2 = k/2 = 1/2",
          "Hence k = 1",
        ],
        answer: "k = 1.",
        marks: 3,
      },
      commonErrors: [
        "Confusing parallel-distinct with coincident",
        "Forgetting to check the constants when Δ = 0",
      ],
      summary: [
        "Three solution types correspond to three line configurations",
        "Use the determinant to classify",
      ],
      quiz: [
        { question: "Two lines coincide when:", options: ["Δ≠0", "Δ=0 and constants in same ratio", "Δ=0 and constants differ", "Always"], correctAnswer: 1, explanation: "Same line." },
        { question: "Δ ≠ 0 means:", options: ["Parallel", "Coincident", "Unique intersection", "No info"], correctAnswer: 2, explanation: "Single solution." },
        { question: "Parallel distinct lines have:", options: ["Different gradient", "Same gradient, different intercept", "Same equation", "Δ ≠ 0"], correctAnswer: 1, explanation: "By definition." },
      ],
    },
  ],

  "y12m-ch2-2f-three-variables": [
    {
      title: "Simultaneous Linear Equations With More Than Two Variables",
      explanation:
        "A 3×3 linear system has 3 equations in 3 unknowns x, y, z. Solve using:\n  • SUBSTITUTION: solve one equation for one variable, substitute into the others.\n  • ELIMINATION: combine pairs of equations to remove one variable, reducing to a 2×2 system.\n  • MATRIX METHODS: write A·X = B and apply A⁻¹ on a CAS.\n\nSOLUTION TYPES:\n  • Unique solution: a single point in 3-space.\n  • No solution: planes have empty intersection.\n  • Infinite solutions: planes intersect along a line or coincide.\n\nGEOMETRICALLY each equation is a PLANE in 3-space. Three planes can meet in a point, share a line, or be inconsistent.",
      keyPoints: [
        "Reduce 3×3 to 2×2 by eliminating one variable",
        "CAS solves matrix systems quickly",
        "Each equation = plane in 3-space",
      ],
      workedExamples: [
        {
          problem: "Solve x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2.",
          steps: [
            "Add eq1 and eq3: 2x + 3y = 8",
            "Add eq1 and eq2: 3x + 2z = 9 …(*)",
            "From eq1: z = 6 − x − y; substitute into (*): 3x + 2(6 − x − y) = 9 → x − 2y = −3",
            "Solve 2x + 3y = 8 and x − 2y = −3",
            "From second: x = 2y − 3; sub: 2(2y − 3) + 3y = 8 → 7y = 14 → y = 2",
            "Then x = 1, z = 3",
          ],
          answer: "(x, y, z) = (1, 2, 3).",
        },
      ],
      tips: [
        "Choose pairs that eliminate the easiest variable",
        "Use CAS to verify your answer",
      ],
      examQuestion: {
        problem: "Solve x + 2y + z = 4, 2x − y + 3z = 7, x + y − z = 1.",
        solution: [
          "Add eq1 and eq3: 2x + 3y = 5",
          "Multiply eq3 by 3 and add to eq2: 5x + 2y = 10",
          "Solve: from 2x + 3y = 5 → y = (5 − 2x)/3",
          "Substitute: 5x + 2(5 − 2x)/3 = 10 → 15x + 10 − 4x = 30 → 11x = 20 → x = 20/11",
          "Hence y = (5 − 40/11)/3 = 5/11; z = x + y − 1 = 14/11",
        ],
        answer: "x = 20/11, y = 5/11, z = 14/11.",
        marks: 4,
      },
      commonErrors: [
        "Arithmetic slips in multi-step elimination",
        "Forgetting to substitute back to find all three variables",
      ],
      summary: [
        "Eliminate to reduce to 2×2",
        "Use matrices on CAS for speed",
      ],
      quiz: [
        { question: "3×3 unique solution = ?", options: ["Line", "Plane", "Point", "Empty"], correctAnswer: 2, explanation: "Single intersection point." },
        { question: "If determinant of coefficient matrix = 0, system has:", options: ["Always unique", "No or infinite solutions", "Always no solution", "Always infinite"], correctAnswer: 1, explanation: "Singular case." },
        { question: "CAS command for solving systems is:", options: ["solve()", "factor()", "expand()", "simplify()"], correctAnswer: 0, explanation: "Standard CAS." },
      ],
    },
  ],

  "y12m-ch2-review": [
    {
      title: "Chapter 2 Review — Coordinate Geometry & Linear Relations",
      explanation:
        "REVIEW POINTS:\n  • Solve linear equations including literal ones; state parameter restrictions.\n  • Use distance, midpoint and gradient confidently.\n  • Identify parallel and perpendicular relationships.\n  • Classify simultaneous systems via determinants.\n  • Solve 3×3 systems by elimination or with CAS.\n  • Interpret linear models (cost, revenue, profit, depreciation) in context.",
      keyPoints: [
        "Coordinate toolbox = distance, midpoint, gradient",
        "Determinant classifies simultaneous systems",
        "Always interpret linear models in context",
      ],
      workedExamples: [
        {
          problem: "Show that A(1,1), B(4,5), C(8,2) form a right-angled triangle.",
          steps: [
            "Gradient AB = (5−1)/(4−1) = 4/3",
            "Gradient BC = (2−5)/(8−4) = −3/4",
            "AB·BC = (4/3)(−3/4) = −1 → perpendicular at B",
            "Hence triangle is right-angled at B",
          ],
          answer: "Right angle at B.",
        },
      ],
      tips: [
        "Check perpendicularity by gradient product",
      ],
      summary: [
        "Coordinate geometry consolidates lines, intersections, and modelling",
      ],
      quiz: [
        { question: "Perpendicular gradients multiply to:", options: ["0", "1", "−1", "Anything"], correctAnswer: 2, explanation: "Standard property." },
        { question: "3×3 system with Δ ≠ 0 has:", options: ["No solution", "Unique", "Infinite", "Two solutions"], correctAnswer: 1, explanation: "Cramer-style result." },
        { question: "Linear model has constant:", options: ["Quadratic term", "Rate of change", "Acceleration", "Curvature"], correctAnswer: 1, explanation: "Slope." },
      ],
    },
  ],
};
