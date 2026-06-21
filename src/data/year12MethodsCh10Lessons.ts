import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 10: Applications of Differentiation (VCE Unit 3)

export const year12MethodsCh10Lessons: TopicLessonsMap = {
  "y12m-ch10-10a-tangents-normals": [
    {
      title: "Tangents and Normals",
      explanation:
        "The TANGENT to y = f(x) at x = a is the line through (a, f(a)) with gradient m = f′(a). Its equation is\n\n  y − f(a) = f′(a)(x − a).\n\nThe NORMAL is perpendicular to the tangent at the same point, so its gradient is −1/f′(a) (provided f′(a) ≠ 0). Its equation is\n\n  y − f(a) = −1/f′(a) · (x − a).\n\nIf f′(a) = 0 the tangent is horizontal (y = f(a)) and the normal is vertical (x = a). Always state the point and the gradient clearly before writing the line.",
      keyPoints: [
        "Tangent gradient = f′(a)",
        "Normal gradient = −1/f′(a)",
        "Both lines pass through (a, f(a))",
        "Horizontal tangent ⇒ vertical normal",
      ],
      workedExamples: [
        {
          problem: "Find the tangent and normal to f(x) = x³ at x = 2.",
          steps: [
            "f(2) = 8, f′(x) = 3x², f′(2) = 12",
            "Tangent: y − 8 = 12(x − 2) ⇒ y = 12x − 16",
            "Normal gradient: −1/12",
            "Normal: y − 8 = −1/12 (x − 2) ⇒ y = −x/12 + 49/6",
          ],
          answer: "Tangent y = 12x − 16; normal y = −x/12 + 49/6.",
        },
        {
          problem: "Find the tangent to y = e^x at x = 0.",
          steps: [
            "y(0) = 1, dy/dx = e^x, slope at 0 = 1",
            "y − 1 = 1(x − 0) ⇒ y = x + 1",
          ],
          answer: "y = x + 1.",
        },
      ],
      tips: [
        "Compute f(a) and f′(a) FIRST, then substitute",
        "Check perpendicularity: m₁ · m₂ = −1",
      ],
      formulas: [
        { name: "Tangent line", formula: "y − f(a) = f′(a)(x − a)" },
        { name: "Normal line", formula: "y − f(a) = −1/f′(a) · (x − a)" },
      ],
      examQuestion: {
        problem: "Find the equation of the normal to y = x² − 4x + 5 at the point where x = 3.",
        solution: [
          "y(3) = 9 − 12 + 5 = 2",
          "dy/dx = 2x − 4, slope at x = 3 is 2",
          "Normal gradient = −1/2",
          "y − 2 = −1/2(x − 3) ⇒ y = −x/2 + 7/2",
        ],
        answer: "y = −x/2 + 7/2.",
        marks: 3,
      },
      commonErrors: [
        "Using f(a) as the gradient instead of f′(a)",
        "Forgetting the negative sign in the normal gradient",
      ],
      summary: ["Tangent uses f′(a); normal uses −1/f′(a)"],
      quiz: [
        {
          question: "The tangent to f(x) = x² at x = 3 has equation:",
          options: ["y = 6x − 9", "y = 9x − 6", "y = 6x + 9", "y = 3x"],
          correctAnswer: 0,
          explanation: "f(3) = 9, f′(3) = 6, so y − 9 = 6(x − 3) ⇒ y = 6x − 9.",
        },
        {
          question: "If the tangent to y = f(x) at x = 1 has gradient 4, the normal has gradient:",
          options: ["4", "−4", "1/4", "−1/4"],
          correctAnswer: 3,
          explanation: "Normal gradient is the negative reciprocal: −1/4.",
        },
        {
          question: "The tangent to y = ln(x) at x = 1 is:",
          options: ["y = x", "y = x − 1", "y = 1 − x", "y = 1/x"],
          correctAnswer: 1,
          explanation: "y(1) = 0, dy/dx = 1/x, slope = 1. y − 0 = 1(x − 1).",
        },
      ],
    },
  ],

  "y12m-ch10-10b-rates-of-change": [
    {
      title: "Rates of Change",
      explanation:
        "The derivative dy/dx measures the INSTANTANEOUS RATE of change of y with respect to x. The AVERAGE rate over [a, b] is (f(b) − f(a))/(b − a).\n\nKINEMATICS APPLICATION: if s(t) is displacement, then\n\n  v(t) = s′(t) (velocity)\n  a(t) = v′(t) = s″(t) (acceleration).\n\nUnits matter: state them in context (e.g. m/s, °C/min). Always interpret sign: positive rate ⇒ increasing; negative ⇒ decreasing.",
      keyPoints: [
        "Average rate = Δy/Δx; instantaneous rate = dy/dx",
        "v(t) = ds/dt, a(t) = dv/dt",
        "Sign of derivative indicates increase/decrease",
        "Always include units when interpreting",
      ],
      workedExamples: [
        {
          problem: "A particle has position s(t) = t³ − 6t² + 9t metres. Find velocity and acceleration at t = 2.",
          steps: [
            "v(t) = 3t² − 12t + 9",
            "v(2) = 12 − 24 + 9 = −3 m/s",
            "a(t) = 6t − 12",
            "a(2) = 0 m/s²",
          ],
          answer: "v(2) = −3 m/s, a(2) = 0 m/s².",
        },
        {
          problem: "A balloon's volume is V(t) = 4t² + 5 cm³. Find dV/dt at t = 3.",
          steps: ["dV/dt = 8t", "At t = 3: dV/dt = 24 cm³/s"],
          answer: "24 cm³/s.",
        },
      ],
      tips: [
        "When asked 'how fast', differentiate then evaluate",
        "Velocity zero ⇒ particle momentarily at rest, not necessarily stopped permanently",
      ],
      formulas: [
        { name: "Velocity", formula: "v(t) = ds/dt" },
        { name: "Acceleration", formula: "a(t) = dv/dt = d²s/dt²" },
      ],
      examQuestion: {
        problem: "The temperature of a liquid is T(t) = 80 − 5t² °C. Find the rate of cooling at t = 2.",
        solution: ["T′(t) = −10t", "T′(2) = −20", "Liquid cools at 20 °C/min"],
        answer: "Rate of change is −20 °C/min (cooling at 20 °C/min).",
        marks: 2,
      },
      commonErrors: [
        "Confusing average and instantaneous rate",
        "Omitting units or sign in the final interpretation",
      ],
      summary: ["dy/dx = instantaneous rate; in kinematics it gives velocity"],
      quiz: [
        {
          question: "If s(t) = t² + 3t, the velocity at t = 4 is:",
          options: ["7", "11", "8", "16"],
          correctAnswer: 1,
          explanation: "v(t) = 2t + 3 ⇒ v(4) = 11.",
        },
        {
          question: "Acceleration is the derivative of:",
          options: ["Position", "Velocity", "Time", "Speed²"],
          correctAnswer: 1,
          explanation: "a(t) = dv/dt.",
        },
        {
          question: "If V(t) = πt³, then dV/dt at t = 2 is:",
          options: ["6π", "12π", "8π", "4π"],
          correctAnswer: 1,
          explanation: "dV/dt = 3πt² ⇒ at t = 2 gives 12π.",
        },
      ],
    },
  ],

  "y12m-ch10-10c-stationary": [
    {
      title: "Stationary Points",
      explanation:
        "A STATIONARY POINT of f occurs where f′(x) = 0 — the tangent is horizontal. To FIND stationary points:\n\n  1. Compute f′(x).\n  2. Solve f′(x) = 0 for x.\n  3. Substitute back into f to get y-coordinates.\n\nStationary points include LOCAL MAXIMA, LOCAL MINIMA, and STATIONARY POINTS OF INFLECTION. Classification is done in 10D.",
      keyPoints: [
        "Stationary ⇔ f′(x) = 0",
        "Solve, then substitute back for y",
        "All three types share f′ = 0",
      ],
      workedExamples: [
        {
          problem: "Find the stationary points of f(x) = x³ − 3x.",
          steps: [
            "f′(x) = 3x² − 3",
            "3x² − 3 = 0 ⇒ x = ±1",
            "f(1) = −2, f(−1) = 2",
          ],
          answer: "(1, −2) and (−1, 2).",
        },
        {
          problem: "Find stationary points of f(x) = x⁴ − 4x³.",
          steps: [
            "f′(x) = 4x³ − 12x² = 4x²(x − 3)",
            "f′ = 0 ⇒ x = 0 or x = 3",
            "f(0) = 0, f(3) = 81 − 108 = −27",
          ],
          answer: "(0, 0) and (3, −27).",
        },
      ],
      tips: [
        "Factor f′(x) before solving — saves time",
        "Always give BOTH coordinates of each stationary point",
      ],
      formulas: [{ name: "Stationary condition", formula: "f′(x) = 0" }],
      examQuestion: {
        problem: "Find all stationary points of f(x) = 2x³ − 9x² + 12x.",
        solution: [
          "f′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2)",
          "x = 1: f(1) = 2 − 9 + 12 = 5",
          "x = 2: f(2) = 16 − 36 + 24 = 4",
        ],
        answer: "(1, 5) and (2, 4).",
        marks: 3,
      },
      commonErrors: [
        "Solving f(x) = 0 instead of f′(x) = 0",
        "Giving only x-values without y-values",
      ],
      summary: ["Stationary points: solve f′ = 0, then back-substitute"],
      quiz: [
        {
          question: "Stationary points of f(x) = x² − 4x + 1 occur at x =",
          options: ["0", "2", "−2", "4"],
          correctAnswer: 1,
          explanation: "f′ = 2x − 4 = 0 ⇒ x = 2.",
        },
        {
          question: "f(x) = x³ has a stationary point at:",
          options: ["x = 1", "x = 0", "x = −1", "Nowhere"],
          correctAnswer: 1,
          explanation: "f′ = 3x² = 0 ⇒ x = 0.",
        },
        {
          question: "How many stationary points does f(x) = x⁴ − 2x² have?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 2,
          explanation: "f′ = 4x³ − 4x = 4x(x² − 1) = 0 ⇒ x = 0, ±1: three points.",
        },
      ],
    },
  ],

  "y12m-ch10-10d-types-stationary": [
    {
      title: "Types of Stationary Points",
      explanation:
        "After locating stationary points, classify them using either the SECOND DERIVATIVE TEST or a SIGN TABLE for f′.\n\nSECOND DERIVATIVE TEST at a stationary point a:\n\n  • f″(a) > 0  ⇒ LOCAL MINIMUM\n  • f″(a) < 0  ⇒ LOCAL MAXIMUM\n  • f″(a) = 0  ⇒ INCONCLUSIVE — fall back to the sign table.\n\nSIGN TABLE: examine the sign of f′ on either side of the stationary point.\n\n  +/−  ⇒ local maximum\n  −/+  ⇒ local minimum\n  +/+ or −/−  ⇒ stationary point of inflection",
      keyPoints: [
        "Use f″ to classify when convenient",
        "If f″ = 0, use a sign table",
        "Inflection: f′ = 0 with no sign change",
      ],
      workedExamples: [
        {
          problem: "Classify the stationary points of f(x) = x³ − 3x.",
          steps: [
            "f′(x) = 3x² − 3 = 0 ⇒ x = ±1",
            "f″(x) = 6x",
            "f″(1) = 6 > 0 ⇒ local min at (1, −2)",
            "f″(−1) = −6 < 0 ⇒ local max at (−1, 2)",
          ],
          answer: "Local max (−1, 2); local min (1, −2).",
        },
        {
          problem: "Classify the stationary point of f(x) = x⁴ at x = 0.",
          steps: [
            "f′ = 4x³, f″ = 12x²; f″(0) = 0 — inconclusive",
            "Sign of f′: negative for x < 0, positive for x > 0",
            "−/+ ⇒ local minimum at (0, 0)",
          ],
          answer: "Local minimum at (0, 0).",
        },
      ],
      tips: [
        "Try the second derivative test first; revert to sign table when it fails",
        "Always state the TYPE explicitly (max/min/inflection)",
      ],
      formulas: [
        { name: "Second derivative test", formula: "f″(a) > 0 ⇒ min; f″(a) < 0 ⇒ max" },
      ],
      examQuestion: {
        problem: "Find and classify the stationary points of f(x) = x³ − 6x² + 9x.",
        solution: [
          "f′ = 3x² − 12x + 9 = 3(x − 1)(x − 3)",
          "Stationary points: x = 1, f(1) = 4; x = 3, f(3) = 0",
          "f″ = 6x − 12",
          "f″(1) = −6 < 0 ⇒ local max (1, 4)",
          "f″(3) = 6 > 0 ⇒ local min (3, 0)",
        ],
        answer: "Local max (1, 4); local min (3, 0).",
        marks: 4,
      },
      commonErrors: [
        "Concluding 'inflection' from f″ = 0 without checking the sign table",
        "Mixing up which sign of f″ gives max vs min",
      ],
      summary: ["f″ > 0 = min; f″ < 0 = max; f″ = 0 ⇒ test sign of f′"],
      quiz: [
        {
          question: "If f′(2) = 0 and f″(2) = 5, then x = 2 is a:",
          options: ["Local maximum", "Local minimum", "Inflection point", "Cannot tell"],
          correctAnswer: 1,
          explanation: "Positive second derivative ⇒ local minimum.",
        },
        {
          question: "If f′(a) = 0 and f″(a) < 0, the point is a:",
          options: ["Local minimum", "Local maximum", "Inflection", "Endpoint"],
          correctAnswer: 1,
          explanation: "Negative second derivative ⇒ local maximum.",
        },
        {
          question: "f(x) = x³ at x = 0 is a:",
          options: ["Local max", "Local min", "Stationary inflection", "Not stationary"],
          correctAnswer: 2,
          explanation: "f′ = 0 but no sign change in f′ — inflection.",
        },
      ],
    },
  ],

  "y12m-ch10-10e-absolute-max-min": [
    {
      title: "Absolute Maximum and Minimum Values",
      explanation:
        "On a CLOSED interval [a, b], a continuous function always attains an absolute maximum and absolute minimum. To find them:\n\n  1. Find all stationary points in (a, b).\n  2. Evaluate f at each stationary point AND at the endpoints x = a and x = b.\n  3. The largest value is the absolute maximum; the smallest is the absolute minimum.\n\nDo not classify type — just compare numerical values. Endpoints are often the answer, so they MUST be checked.",
      keyPoints: [
        "Closed interval ⇒ absolute extrema always exist",
        "Check stationary points AND endpoints",
        "Compare y-values to identify max/min",
      ],
      workedExamples: [
        {
          problem: "Find the absolute extrema of f(x) = x³ − 3x on [−2, 2].",
          steps: [
            "f′ = 3x² − 3 = 0 ⇒ x = ±1 (both in interval)",
            "f(−2) = −8 + 6 = −2",
            "f(−1) = 2",
            "f(1) = −2",
            "f(2) = 8 − 6 = 2",
            "Compare: max = 2 at x = −1 and x = 2; min = −2 at x = −2 and x = 1",
          ],
          answer: "Absolute max = 2; absolute min = −2.",
        },
      ],
      tips: [
        "List all candidate points first, then tabulate values",
        "Endpoints often beat interior stationary points",
      ],
      formulas: [],
      examQuestion: {
        problem: "Find the absolute maximum and minimum of f(x) = x² − 4x on [0, 5].",
        solution: [
          "f′ = 2x − 4 = 0 ⇒ x = 2",
          "f(0) = 0, f(2) = −4, f(5) = 5",
          "Max = 5 at x = 5; min = −4 at x = 2",
        ],
        answer: "Absolute max = 5 at x = 5; absolute min = −4 at x = 2.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to evaluate at endpoints",
        "Ignoring stationary points outside the interval",
      ],
      summary: ["Absolute extrema = best of endpoints + interior stationary values"],
      quiz: [
        {
          question: "On a closed interval, where can absolute extrema occur?",
          options: ["Stationary points only", "Endpoints only", "Stationary points or endpoints", "Inflection points"],
          correctAnswer: 2,
          explanation: "Both must be checked.",
        },
        {
          question: "f(x) = x² on [−1, 3]: absolute maximum is at:",
          options: ["x = 0", "x = −1", "x = 3", "x = 1"],
          correctAnswer: 2,
          explanation: "f(3) = 9 is the largest.",
        },
        {
          question: "f(x) = 4 − x² on [−2, 1]: absolute minimum is:",
          options: ["0 at x = −2", "0 at x = 2", "3 at x = 1", "4 at x = 0"],
          correctAnswer: 0,
          explanation: "f(−2) = 0, f(1) = 3, f(0) = 4. Min is 0.",
        },
      ],
    },
  ],

  "y12m-ch10-10f-max-min-problems": [
    {
      title: "Maximum and Minimum Problems (Optimisation)",
      explanation:
        "OPTIMISATION turns a real-world question into a single-variable calculus problem.\n\nSTANDARD PROCEDURE:\n\n  1. Draw a diagram and define variables.\n  2. Write the OBJECTIVE function (what you maximise/minimise).\n  3. Use a CONSTRAINT to express it in ONE variable.\n  4. State the natural DOMAIN.\n  5. Differentiate and solve f′ = 0.\n  6. Verify it is a maximum/minimum (second derivative test or endpoint check).\n  7. Interpret the answer in context with units.",
      keyPoints: [
        "Identify objective and constraint",
        "Reduce to one variable using the constraint",
        "Always state and respect the domain",
        "Justify max/min before answering",
      ],
      workedExamples: [
        {
          problem: "Find the rectangle of maximum area with perimeter 20 cm.",
          steps: [
            "Let sides x and y. Constraint: 2x + 2y = 20 ⇒ y = 10 − x",
            "Area: A(x) = x(10 − x) = 10x − x², domain 0 < x < 10",
            "A′ = 10 − 2x = 0 ⇒ x = 5",
            "A″ = −2 < 0 ⇒ maximum",
            "y = 5, A = 25",
          ],
          answer: "5 cm × 5 cm; maximum area 25 cm².",
        },
        {
          problem: "An open box with square base x cm has volume 32 cm³. Minimise surface area.",
          steps: [
            "Volume: x²h = 32 ⇒ h = 32/x²",
            "Surface area: S = x² + 4xh = x² + 128/x",
            "S′ = 2x − 128/x² = 0 ⇒ 2x³ = 128 ⇒ x = 4",
            "S″ = 2 + 256/x³ > 0 ⇒ minimum",
            "S(4) = 16 + 32 = 48 cm²",
          ],
          answer: "x = 4 cm; minimum surface area 48 cm².",
        },
      ],
      tips: [
        "If the answer makes physical sense, you are probably right",
        "Always quote units in the conclusion",
      ],
      formulas: [],
      examQuestion: {
        problem: "A farmer has 60 m of fencing to enclose a rectangular paddock against a wall (so only three sides need fencing). Find the maximum area.",
        solution: [
          "Let width x, length y. Constraint: 2x + y = 60 ⇒ y = 60 − 2x",
          "A(x) = x(60 − 2x) = 60x − 2x²",
          "A′ = 60 − 4x = 0 ⇒ x = 15",
          "A″ = −4 < 0 ⇒ maximum",
          "y = 30, A = 450 m²",
        ],
        answer: "Maximum area = 450 m² with x = 15 m, y = 30 m.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting the constraint",
        "Failing to check domain endpoints",
        "Differentiating the constraint instead of the objective",
      ],
      summary: ["Optimisation: write objective in one variable, then differentiate"],
      quiz: [
        {
          question: "Two positive numbers sum to 10. Their product is maximised when they are:",
          options: ["1 and 9", "2 and 8", "5 and 5", "4 and 6"],
          correctAnswer: 2,
          explanation: "P = x(10 − x); P′ = 10 − 2x = 0 ⇒ x = 5.",
        },
        {
          question: "First step in any optimisation problem is to:",
          options: ["Differentiate", "Write objective and constraint", "Solve = 0", "Draw graph"],
          correctAnswer: 1,
          explanation: "Set up objective and constraint before calculus.",
        },
        {
          question: "After finding f′ = 0, you must:",
          options: ["Stop", "Verify it's a max/min and interpret in context", "Take third derivative", "Integrate"],
          correctAnswer: 1,
          explanation: "Justify the nature of the stationary point and interpret.",
        },
      ],
    },
  ],

  "y12m-ch10-10g-families": [
    {
      title: "Families of Functions",
      explanation:
        "A FAMILY of functions depends on one or more PARAMETERS (e.g. a, k). Investigating a family means finding how features (stationary points, intercepts, asymptotes) change with the parameter.\n\nGeneral approach:\n\n  1. Differentiate, treating the parameter as a constant.\n  2. Solve f′(x) = 0; the result depends on the parameter.\n  3. Classify each stationary point (often using a sign table because f″ may also depend on the parameter).\n  4. Describe how the location/nature of features varies with the parameter.",
      keyPoints: [
        "Treat parameters as constants when differentiating",
        "Stationary points are functions of the parameter",
        "Classification may depend on the parameter sign",
      ],
      workedExamples: [
        {
          problem: "For f(x) = x³ − 3a²x (a > 0), find and classify stationary points in terms of a.",
          steps: [
            "f′(x) = 3x² − 3a² = 3(x − a)(x + a)",
            "Stationary at x = ±a",
            "f″(x) = 6x; f″(a) = 6a > 0 ⇒ min",
            "f″(−a) = −6a < 0 ⇒ max",
            "f(a) = a³ − 3a³ = −2a³; f(−a) = 2a³",
          ],
          answer: "Local max (−a, 2a³); local min (a, −2a³).",
        },
      ],
      tips: ["Keep the parameter symbolic — never substitute a number too early"],
      formulas: [],
      examQuestion: {
        problem: "Show that f(x) = x² − 2kx + k² has its minimum at x = k for any k.",
        solution: [
          "f′(x) = 2x − 2k = 0 ⇒ x = k",
          "f″ = 2 > 0 ⇒ minimum",
          "f(k) = 0, so vertex (k, 0)",
        ],
        answer: "Minimum is (k, 0) for every k.",
        marks: 3,
      },
      commonErrors: ["Substituting a numerical value too early", "Forgetting that the sign of the parameter affects classification"],
      summary: ["Family problems = generic differentiation with parameters carried through"],
      quiz: [
        {
          question: "For f(x) = x² + 2bx + 1, the stationary point is at x =",
          options: ["b", "−b", "2b", "−2b"],
          correctAnswer: 1,
          explanation: "f′ = 2x + 2b = 0 ⇒ x = −b.",
        },
        {
          question: "For f(x) = ax² (a ≠ 0), the stationary point at x = 0 is a max when:",
          options: ["a > 0", "a < 0", "a = 0", "Always a min"],
          correctAnswer: 1,
          explanation: "f″ = 2a; max when 2a < 0.",
        },
        {
          question: "When investigating a family, parameters are treated as:",
          options: ["Variables", "Constants", "Zero", "Roots"],
          correctAnswer: 1,
          explanation: "Constants when differentiating with respect to x.",
        },
      ],
    },
  ],

  "y12m-ch10-10h-newtons-method": [
    {
      title: "Newton's Method",
      explanation:
        "NEWTON'S METHOD is an iterative algorithm for approximating a root of f(x) = 0. Starting from an initial estimate x₀ near the root, the next estimate is\n\n  x_{n+1} = x_n − f(x_n)/f′(x_n).\n\nGEOMETRIC IDEA: x_{n+1} is the x-intercept of the tangent to y = f(x) at x = x_n.\n\nThe method usually converges QUADRATICALLY (very fast) but may FAIL if:\n\n  • f′(x_n) = 0 (tangent horizontal),\n  • the initial estimate is far from the root,\n  • the function has multiple roots or sharp features near x_n.\n\nIn VCE, you typically perform 2–3 iterations and report values to a stated number of decimal places.",
      keyPoints: [
        "Iteration: x_{n+1} = x_n − f(x_n)/f′(x_n)",
        "Each new estimate is a tangent x-intercept",
        "Converges fast when starting near a root",
        "Fails if f′ = 0 or starting estimate is poor",
      ],
      workedExamples: [
        {
          problem: "Use Newton's method with x₀ = 2 to approximate √3 (root of f(x) = x² − 3) — give x₂ to 4 dp.",
          steps: [
            "f(x) = x² − 3, f′(x) = 2x",
            "x₁ = 2 − (4 − 3)/4 = 2 − 0.25 = 1.75",
            "f(1.75) = 0.0625, f′(1.75) = 3.5",
            "x₂ = 1.75 − 0.0625/3.5 ≈ 1.7321",
          ],
          answer: "x₂ ≈ 1.7321 (≈ √3).",
        },
      ],
      tips: [
        "Show the formula with values substituted at every iteration",
        "Carry extra decimal places during iteration; round only the final answer",
      ],
      formulas: [{ name: "Newton iteration", formula: "x_{n+1} = x_n − f(x_n)/f′(x_n)" }],
      examQuestion: {
        problem: "Use Newton's method with x₀ = 1 on f(x) = x³ − x − 1 to find x₂ correct to 3 dp.",
        solution: [
          "f′(x) = 3x² − 1",
          "f(1) = −1, f′(1) = 2; x₁ = 1 − (−1)/2 = 1.5",
          "f(1.5) = 3.375 − 1.5 − 1 = 0.875; f′(1.5) = 5.75",
          "x₂ = 1.5 − 0.875/5.75 ≈ 1.348",
        ],
        answer: "x₂ ≈ 1.348.",
        marks: 4,
      },
      commonErrors: [
        "Sign error in f(x_n)/f′(x_n)",
        "Rounding intermediate values too aggressively",
        "Choosing x₀ where f′ = 0",
      ],
      summary: ["Newton's method: iterate tangent x-intercepts; converges quickly near a root"],
      quiz: [
        {
          question: "The Newton iteration formula is:",
          options: [
            "x_{n+1} = x_n + f(x_n)/f′(x_n)",
            "x_{n+1} = x_n − f(x_n)/f′(x_n)",
            "x_{n+1} = f(x_n)/f′(x_n)",
            "x_{n+1} = f′(x_n) − f(x_n)",
          ],
          correctAnswer: 1,
          explanation: "Subtract f(x_n)/f′(x_n).",
        },
        {
          question: "Newton's method may FAIL when:",
          options: ["f(x_n) = 0", "f′(x_n) = 0", "x_n > 0", "f is linear"],
          correctAnswer: 1,
          explanation: "Division by zero — horizontal tangent.",
        },
        {
          question: "Geometrically, x_{n+1} is the x-intercept of:",
          options: ["The chord", "The normal", "The tangent at x_n", "The x-axis"],
          correctAnswer: 2,
          explanation: "Tangent line at x_n meets the x-axis at x_{n+1}.",
        },
      ],
    },
  ],

  "y12m-ch10-review": [
    {
      title: "Review of Chapter 10 — Applications of Differentiation",
      explanation:
        "Chapter 10 ties together every use of the derivative:\n\n  • TANGENTS / NORMALS — y − f(a) = f′(a)(x − a) and the perpendicular form\n  • RATES OF CHANGE — instantaneous rate, kinematics (v = s′, a = v′)\n  • STATIONARY POINTS — solve f′(x) = 0\n  • CLASSIFICATION — second derivative test or sign table\n  • ABSOLUTE EXTREMA — compare stationary points and endpoints\n  • OPTIMISATION — objective + constraint reduced to one variable\n  • FAMILIES OF FUNCTIONS — parameters carried through differentiation\n  • NEWTON'S METHOD — x_{n+1} = x_n − f(x_n)/f′(x_n)\n\nExam questions normally combine optimisation with modelling and require justification of the maximum/minimum.",
      keyPoints: [
        "Differentiate, then INTERPRET in context",
        "Always justify max/min, not just locate it",
        "Endpoints matter on closed intervals",
        "Newton's method needs f′ ≠ 0",
      ],
      workedExamples: [
        {
          problem: "A cylindrical can with volume 1000 cm³ has surface area S = 2πr² + 2000/r. Find r minimising S.",
          steps: [
            "dS/dr = 4πr − 2000/r² = 0",
            "4πr³ = 2000 ⇒ r³ = 500/π",
            "r = (500/π)^(1/3) ≈ 5.42 cm",
            "d²S/dr² = 4π + 4000/r³ > 0 ⇒ minimum",
          ],
          answer: "r ≈ 5.42 cm minimises surface area.",
        },
      ],
      tips: [
        "Use the second derivative test where possible — it's faster",
        "Show the formula and substitution in optimisation problems",
      ],
      formulas: [
        { name: "Tangent", formula: "y − f(a) = f′(a)(x − a)" },
        { name: "Normal", formula: "y − f(a) = −1/f′(a) · (x − a)" },
        { name: "Newton", formula: "x_{n+1} = x_n − f(x_n)/f′(x_n)" },
      ],
      commonErrors: [
        "Forgetting endpoints in absolute extrema",
        "Misclassifying when f″ = 0",
        "Failing to interpret in context with units",
      ],
      summary: ["Chapter 10 = derivatives in action; justify and interpret every result"],
      quiz: [
        {
          question: "Maximum area of a rectangle with perimeter 40 is:",
          options: ["50", "75", "100", "200"],
          correctAnswer: 2,
          explanation: "Square of side 10 ⇒ area 100.",
        },
        {
          question: "If f′(a) = 0 and f″(a) = 0, you should:",
          options: ["Conclude inflection", "Use a sign table for f′", "Stop", "Try Newton's method"],
          correctAnswer: 1,
          explanation: "Second derivative inconclusive — sign analysis required.",
        },
        {
          question: "Tangent at (1, 3) to a curve with f′(1) = 2:",
          options: ["y = 2x − 1", "y = 2x + 1", "y = −2x + 5", "y = x + 2"],
          correctAnswer: 1,
          explanation: "y − 3 = 2(x − 1) ⇒ y = 2x + 1.",
        },
      ],
    },
  ],
};
