import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 10: Applications of Integration

export const year12SpecialistCh10Lessons: TopicLessonsMap = {
  "y12s-ch10-10a-ftc": [
    {
      title: "The Fundamental Theorem of Calculus",
      explanation:
        "Two parts:\n  Part 1: If F(x) = ∫_a^x f(t) dt, then F'(x) = f(x).\n  Part 2: ∫_a^b f(x) dx = F(b) − F(a), where F is any antiderivative of f.\n\nThis links differentiation and integration as inverse operations.",
      keyPoints: [
        "FTC justifies evaluating definite integrals via antiderivatives",
        "Part 1 uses x as upper limit (variable)",
        "Differentiating an integral with variable limits requires the chain rule",
      ],
      workedExamples: [
        {
          problem: "If F(x) = ∫_1^x √(1 + t³) dt, find F'(x).",
          steps: ["By FTC Part 1: F'(x) = √(1 + x³)"],
          answer: "√(1 + x³)",
        },
      ],
      tips: ["Variable in upper limit only ⇒ direct FTC", "Chain rule needed if upper limit is g(x)"],
      formulas: [{ name: "FTC", formula: "∫_a^b f(x) dx = F(b) − F(a)" }],
      examQuestion: {
        problem: "Find d/dx [∫_0^(x²) sin t dt].",
        solution: ["Let u = x²; du/dx = 2x", "By chain rule: sin(u) · 2x = 2x sin(x²)"],
        answer: "2x sin(x²)",
        marks: 3,
      },
      quiz: [
        { question: "FTC Part 2 evaluates:", options: ["Indefinite integrals", "Definite integrals", "Derivatives", "Limits"], correctAnswer: 1, explanation: "F(b)−F(a)." },
        { question: "d/dx ∫_a^x f(t) dt =", options: ["f(a)", "f(x)", "0", "F(x)"], correctAnswer: 1, explanation: "Part 1." },
        { question: "Variable upper limit g(x) needs:", options: ["Product rule", "Chain rule", "Quotient rule", "FTC alone"], correctAnswer: 1, explanation: "f(g(x))·g'(x)." },
      ],
    },
  ],
  "y12s-ch10-10b-area-between": [
    {
      title: "Area Between Two Curves",
      explanation:
        "If f(x) ≥ g(x) on [a, b], the area between is:\n  A = ∫_a^b [f(x) − g(x)] dx\n\nIf curves cross, split the interval at the intersection points and take absolute values on each piece.",
      keyPoints: [
        "Always subtract LOWER from UPPER",
        "Find intersection points by solving f(x) = g(x)",
        "Split the integral whenever the upper/lower role swaps",
      ],
      workedExamples: [
        {
          problem: "Area between y = x² and y = x on [0, 1].",
          steps: ["x ≥ x² on [0,1]", "A = ∫_0^1 (x − x²) dx = [x²/2 − x³/3]_0^1 = 1/2 − 1/3 = 1/6"],
          answer: "1/6",
        },
      ],
      tips: ["Sketch first to identify upper/lower curves", "Use vertical strips (dx) by default; switch to horizontal (dy) if simpler"],
      examQuestion: {
        problem: "Find the area enclosed by y = x² and y = 4 − x².",
        solution: [
          "Intersect: x² = 4 − x² ⇒ x = ±√2",
          "Upper = 4 − x²; Lower = x²",
          "A = ∫_(−√2)^(√2) (4 − 2x²) dx = 2·∫_0^(√2) (4 − 2x²) dx",
          "= 2[4x − 2x³/3]_0^(√2) = 2(4√2 − (4√2)/3) = 16√2/3",
        ],
        answer: "16√2/3",
        marks: 4,
      },
      quiz: [
        { question: "Area formula:", options: ["∫(g−f)", "∫|f−g|", "∫(f+g)", "∫(f·g)"], correctAnswer: 1, explanation: "Always upper minus lower." },
        { question: "If curves cross:", options: ["Ignore", "Split interval", "Add both", "Use product"], correctAnswer: 1, explanation: "Each subinterval." },
        { question: "First step:", options: ["Integrate", "Sketch and find intersections", "Differentiate", "Guess"], correctAnswer: 1, explanation: "Identify regions." },
      ],
    },
  ],
  "y12s-ch10-10c-cas": [
    {
      title: "Integration Using a CAS Calculator",
      explanation:
        "CAS allows numeric or exact integration of expressions that resist hand methods (e.g., ∫ e^(−x²) dx).\n\nGuidance:\n  • Use exact mode for closed-form answers; decimal mode for numerical estimates\n  • Always check the result is plausible (sign, magnitude, dimension)\n  • In Exam 2, JUSTIFY method even when CAS produces the answer (e.g., set up the integral manually)",
      keyPoints: [
        "CAS doesn't replace setup — it computes",
        "Specify exact vs decimal output",
        "Watch domain restrictions and discontinuities",
      ],
      workedExamples: [
        {
          problem: "Use CAS to estimate ∫_0^1 e^(−x²) dx.",
          steps: ["CAS returns ≈ 0.7468 (no elementary antiderivative exists)", "Exact form involves the error function erf(x)"],
          answer: "≈ 0.7468",
        },
      ],
      tips: ["Always state the integral expression you entered", "Round only at the final step"],
      examQuestion: {
        problem: "Compute ∫_0^2 √(1 + x³) dx using CAS to 4 d.p.",
        solution: ["Set up integral manually: ∫_0^2 √(1+x³) dx", "CAS evaluation ≈ 3.2413"],
        answer: "≈ 3.2413",
        marks: 2,
      },
      quiz: [
        { question: "CAS is best for:", options: ["Setup", "Computation of hard integrals", "Replacing algebra", "Sketching"], correctAnswer: 1, explanation: "Mechanical evaluation." },
        { question: "Show working in Exam 2 because:", options: ["No marks for CAS only", "Method marks needed", "Optional", "CAS is wrong"], correctAnswer: 1, explanation: "Method matters." },
        { question: "e^(−x²) has:", options: ["Elementary antiderivative", "No elementary antiderivative", "Trivial antiderivative", "Polynomial antiderivative"], correctAnswer: 1, explanation: "Uses erf." },
      ],
    },
  ],
  "y12s-ch10-10d-volumes": [
    {
      title: "Volumes of Solids of Revolution",
      explanation:
        "Disc method (rotation about x-axis):\n  V = π ∫_a^b [f(x)]² dx\n\nRotation about y-axis (using x = g(y)):\n  V = π ∫_c^d [g(y)]² dy\n\nWasher method (region between two curves rotated about x-axis):\n  V = π ∫_a^b ([f(x)]² − [g(x)]²) dx, with f ≥ g ≥ 0",
      keyPoints: [
        "Always SQUARE the radius",
        "Identify the axis of rotation correctly",
        "For washers, subtract inner² from outer²",
      ],
      workedExamples: [
        {
          problem: "Volume when y = √x, 0 ≤ x ≤ 4, is rotated about the x-axis.",
          steps: ["V = π ∫_0^4 (√x)² dx = π ∫_0^4 x dx = π·[x²/2]_0^4 = 8π"],
          answer: "8π",
        },
      ],
      tips: ["Sketch the region AND the axis", "Convert to x = g(y) form for y-axis rotations"],
      formulas: [{ name: "Disc", formula: "V = π ∫ [f(x)]² dx" }],
      examQuestion: {
        problem: "Find the volume of the solid formed by rotating y = x² between x = 0 and x = 2 about the y-axis.",
        solution: [
          "Solve: x² = y ⇒ x = √y; y ∈ [0, 4]",
          "V = π ∫_0^4 (√y)² dy = π ∫_0^4 y dy = π·[y²/2]_0^4 = 8π",
        ],
        answer: "8π",
        marks: 3,
      },
      quiz: [
        { question: "Disc volume:", options: ["π∫f", "π∫f²", "2π∫f", "∫f²"], correctAnswer: 1, explanation: "Square the radius." },
        { question: "Washer subtracts:", options: ["Outer−inner", "Outer²−inner²", "Inner²−outer²", "f+g"], correctAnswer: 1, explanation: "Both squared." },
        { question: "Y-axis rotation needs:", options: ["x = g(y)", "y = f(x)", "Polar", "Parametric"], correctAnswer: 0, explanation: "Express x in terms of y." },
      ],
    },
  ],
  "y12s-ch10-10e-arc-length": [
    {
      title: "Arc Length of Curves",
      explanation:
        "For y = f(x) on [a, b]:\n  L = ∫_a^b √(1 + (dy/dx)²) dx\n\nFor x = g(y) on [c, d]:\n  L = ∫_c^d √(1 + (dx/dy)²) dy\n\nFor parametric (x(t), y(t)) on [t₁, t₂]:\n  L = ∫_(t₁)^(t₂) √((dx/dt)² + (dy/dt)²) dt",
      keyPoints: [
        "Square ROOT of squared derivative + 1",
        "Definite integrals — no +C",
        "Often requires CAS or substitution",
      ],
      workedExamples: [
        {
          problem: "Arc length of y = (2/3)x^(3/2) from x = 0 to 3.",
          steps: [
            "dy/dx = √x; (dy/dx)² = x",
            "L = ∫_0^3 √(1 + x) dx = [2/3·(1+x)^(3/2)]_0^3",
            "= (2/3)(8 − 1) = 14/3",
          ],
          answer: "14/3",
        },
      ],
      tips: ["Look for problems where 1 + (dy/dx)² simplifies to a perfect square", "Use parametric form when the curve is naturally parametric"],
      formulas: [{ name: "Arc length", formula: "L = ∫√(1 + (dy/dx)²) dx" }],
      examQuestion: {
        problem: "Arc length of x = cos t, y = sin t, 0 ≤ t ≤ π.",
        solution: [
          "dx/dt = −sin t; dy/dt = cos t",
          "(dx/dt)² + (dy/dt)² = sin²t + cos²t = 1",
          "L = ∫_0^π 1 dt = π",
        ],
        answer: "π (semicircle)",
        marks: 3,
      },
      quiz: [
        { question: "Arc length integrand:", options: ["1 + dy/dx", "√(1 + (dy/dx)²)", "(dy/dx)²", "dy/dx"], correctAnswer: 1, explanation: "Standard formula." },
        { question: "Parametric arc length uses:", options: ["√((dx/dt)² + (dy/dt)²)", "dx/dt + dy/dt", "(dx/dt)·(dy/dt)", "1"], correctAnswer: 0, explanation: "Pythagorean speed." },
        { question: "Definite integral needs +C?", options: ["Yes", "No", "Sometimes", "Only +π"], correctAnswer: 1, explanation: "Cancels." },
      ],
    },
  ],
  "y12s-ch10-10f-surface-areas": [
    {
      title: "Surfaces of Revolution",
      explanation:
        "Surface area when y = f(x) on [a, b] is rotated about the x-axis:\n  S = 2π ∫_a^b f(x)·√(1 + (dy/dx)²) dx\n\nAbout y-axis (with y = f(x)):\n  S = 2π ∫_a^b x·√(1 + (dy/dx)²) dx\n\nIntuition: 2π·radius·arc-length-element.",
      keyPoints: [
        "Radius factor depends on axis (f(x) for x-axis, x for y-axis)",
        "Always include the arc-length factor √(1 + (dy/dx)²)",
        "Require f(x) ≥ 0 on the interval",
      ],
      workedExamples: [
        {
          problem: "Surface area of y = √x rotated about x-axis on [0, 4].",
          steps: [
            "dy/dx = 1/(2√x); (dy/dx)² = 1/(4x)",
            "Integrand: 2π·√x·√(1 + 1/(4x)) = 2π·√(x + 1/4) = π√(4x + 1)",
            "S = π ∫_0^4 √(4x + 1) dx = π · [(4x+1)^(3/2)/6]_0^4 = π(17^(3/2) − 1)/6",
          ],
          answer: "π(17√17 − 1)/6",
        },
      ],
      tips: ["Combine radicals to simplify the integrand", "Check sign of f(x) on the interval"],
      formulas: [{ name: "x-axis surface", formula: "S = 2π ∫ f(x)·√(1+(dy/dx)²) dx" }],
      examQuestion: {
        problem: "Surface area of y = x³ rotated about x-axis on [0, 1].",
        solution: [
          "dy/dx = 3x²; integrand = 2π·x³·√(1 + 9x⁴)",
          "Sub u = 1 + 9x⁴; du = 36x³ dx",
          "S = (2π/36) ∫_1^10 √u du = (π/18)·[2u^(3/2)/3]_1^10",
          "= (π/27)(10√10 − 1)",
        ],
        answer: "π(10√10 − 1)/27",
        marks: 4,
      },
      quiz: [
        { question: "x-axis radius factor:", options: ["x", "f(x)", "1", "dy/dx"], correctAnswer: 1, explanation: "Distance from x-axis." },
        { question: "Y-axis radius factor:", options: ["x", "f(x)", "y", "1"], correctAnswer: 0, explanation: "Horizontal distance." },
        { question: "Always multiply by:", options: ["π", "2π", "4π", "1"], correctAnswer: 1, explanation: "Circumference of revolution." },
      ],
    },
  ],
  "y12s-ch10-review": [
    {
      title: "Review of Chapter 10 — Applications of Integration",
      explanation:
        "Integrates the FTC with applied techniques: areas between curves, volumes by discs/washers, arc length, and surfaces of revolution. Mastery requires fluent setup, sketching, and choice of variable.",
      keyPoints: [
        "Setup is half the marks — sketch and identify the integrand",
        "Square radii for volumes; add 1 inside the radical for arc length",
        "Surface area = 2π·radius·arc-length-element",
        "CAS is for evaluation, not justification",
      ],
      workedExamples: [
        {
          problem: "Region between y = x and y = x² rotated about x-axis. Find volume.",
          steps: [
            "Intersect at x = 0, 1; x ≥ x² on [0,1]",
            "V = π ∫_0^1 (x² − x⁴) dx = π[x³/3 − x⁵/5]_0^1 = π(1/3 − 1/5) = 2π/15",
          ],
          answer: "2π/15",
        },
      ],
      tips: ["Sketch BEFORE choosing dx vs dy", "Check units: area, volume, length"],
      examQuestion: {
        problem: "Find the volume generated by rotating the region bounded by y = sin x, y = 0, on [0, π] about the x-axis.",
        solution: [
          "V = π ∫_0^π sin²x dx",
          "= π ∫_0^π (1 − cos 2x)/2 dx",
          "= (π/2)[x − (sin 2x)/2]_0^π = (π/2)·π = π²/2",
        ],
        answer: "π²/2",
        marks: 4,
      },
      quiz: [
        { question: "Volume of revolution about x-axis:", options: ["π∫f", "π∫f²", "2π∫f", "∫f"], correctAnswer: 1, explanation: "Disc method." },
        { question: "Setup before computation because:", options: ["CAS errors", "Method marks", "Faster", "Avoids sketches"], correctAnswer: 1, explanation: "Earns marks." },
        { question: "sin²x integrates via:", options: ["Direct", "Power-reduction identity", "Substitution", "By parts"], correctAnswer: 1, explanation: "(1−cos 2x)/2." },
      ],
    },
  ],
};
