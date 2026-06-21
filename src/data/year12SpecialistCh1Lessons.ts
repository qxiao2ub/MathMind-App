import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 1: Preliminary Topics (VCE Unit 3)

const lesson = (
  id: string,
  title: string,
  explanation: string,
  keyPoints: string[],
  workedExamples: { problem: string; steps: string[]; answer: string }[],
  tips: string[],
  formulas: { name: string; formula: string; note?: string }[],
  examQ: { problem: string; solution: string[]; answer: string; marks?: number },
  quiz: { question: string; options: string[]; correctAnswer: number; explanation: string }[],
) => ({ id, title, explanation, keyPoints, workedExamples, tips, formulas, examQuestion: examQ, quiz });

export const year12SpecialistCh1Lessons: TopicLessonsMap = {
  "y12s-ch1-1a-circular": [
    {
      title: "Review of Circular Functions",
      explanation:
        "The circular functions sin, cos and tan are defined on the unit circle. For an angle θ measured in RADIANS from the positive x-axis, the point on the unit circle has coordinates (cos θ, sin θ), and tan θ = sin θ / cos θ where cos θ ≠ 0.\n\nKey identities (memorise):\n  • sin²θ + cos²θ = 1\n  • Symmetry: sin(−θ) = −sin θ, cos(−θ) = cos θ\n  • Periodicity: sin and cos have period 2π; tan has period π\n  • Complementary: sin(π/2 − θ) = cos θ\n\nExact values at 0, π/6, π/4, π/3, π/2 must be fluent for tech-free Specialist work.",
      keyPoints: [
        "Always work in radians for Specialist",
        "Unit-circle definition: (cos θ, sin θ)",
        "sin²θ + cos²θ = 1 underpins most identities",
        "Quadrant signs follow ASTC (All, Sin, Tan, Cos)",
      ],
      workedExamples: [
        {
          problem: "Solve 2 sin θ = 1 for θ ∈ [0, 2π].",
          steps: ["sin θ = 1/2", "Reference angle π/6", "Quadrants 1 and 2: θ = π/6 or π − π/6"],
          answer: "θ = π/6, 5π/6",
        },
        {
          problem: "If cos θ = −3/5 and θ ∈ (π/2, π), find sin θ and tan θ.",
          steps: ["sin²θ = 1 − 9/25 = 16/25", "Quadrant 2 ⇒ sin θ > 0 ⇒ sin θ = 4/5", "tan θ = (4/5)/(−3/5) = −4/3"],
          answer: "sin θ = 4/5, tan θ = −4/3",
        },
      ],
      tips: ["Sketch the unit circle to fix signs", "Always state the quadrant before taking square roots"],
      formulas: [
        { name: "Pythagorean", formula: "sin²θ + cos²θ = 1" },
        { name: "Tangent", formula: "tan θ = sin θ / cos θ" },
      ],
      examQuestion: {
        problem: "Solve √3 tan θ + 1 = 0 for θ ∈ [−π, π].",
        solution: ["tan θ = −1/√3", "Reference angle π/6", "Negative tan ⇒ Q2 or Q4", "θ = 5π/6 or −π/6"],
        answer: "θ = −π/6, 5π/6",
        marks: 3,
      },
      quiz: [
        { question: "Period of cos(2x):", options: ["π", "2π", "4π", "π/2"], correctAnswer: 0, explanation: "Period = 2π/2 = π." },
        { question: "Exact value of sin(7π/6):", options: ["−1/2", "1/2", "−√3/2", "√3/2"], correctAnswer: 0, explanation: "Q3, reference π/6 ⇒ −1/2." },
        { question: "If sin θ = 3/5 and θ ∈ Q2, then cos θ =", options: ["4/5", "−4/5", "3/5", "−3/5"], correctAnswer: 1, explanation: "Q2: cos negative." },
      ],
    },
  ],
  "y12s-ch1-1b-sine-cosine-rules": [
    {
      title: "The Sine and Cosine Rules",
      explanation:
        "For ANY triangle ABC with sides a, b, c opposite vertices A, B, C:\n\nSINE RULE: a/sin A = b/sin B = c/sin C — used when you know an angle–side opposite pair plus one more piece (AAS, ASA, SSA).\n\nCOSINE RULE: a² = b² + c² − 2bc cos A — used for SAS (find the third side) or SSS (find an angle as cos A = (b² + c² − a²)/(2bc)).\n\nThe AMBIGUOUS CASE arises with SSA when sin gives two valid angles (acute and obtuse) summing with the known angle to less than π.\n\nArea of triangle = ½ ab sin C.",
      keyPoints: [
        "Sine rule: matched pairs",
        "Cosine rule: SAS or SSS",
        "Watch the SSA ambiguous case",
        "Area = ½ ab sin C",
      ],
      workedExamples: [
        {
          problem: "In △ABC, A = 40°, B = 75°, a = 12. Find b.",
          steps: ["b/sin 75° = 12/sin 40°", "b = 12 sin 75°/sin 40°", "b ≈ 18.03"],
          answer: "b ≈ 18.03",
        },
        {
          problem: "In △ABC, a = 7, b = 9, C = 60°. Find c.",
          steps: ["c² = 49 + 81 − 2(63)(1/2) = 67", "c = √67 ≈ 8.185"],
          answer: "c ≈ 8.19",
        },
      ],
      tips: ["Sketch the triangle first", "If the given angle is obtuse, ambiguous case cannot occur"],
      formulas: [
        { name: "Sine rule", formula: "a/sin A = b/sin B = c/sin C" },
        { name: "Cosine rule", formula: "a² = b² + c² − 2bc cos A" },
        { name: "Area", formula: "½ ab sin C" },
      ],
      examQuestion: {
        problem: "Triangle PQR has p = 8, q = 5, R = 112°. Find r and the area.",
        solution: ["r² = 64 + 25 − 80 cos 112°", "cos 112° ≈ −0.3746", "r² ≈ 89 + 29.97 = 118.97", "r ≈ 10.91", "Area = ½(8)(5) sin 112° ≈ 18.54"],
        answer: "r ≈ 10.91, Area ≈ 18.54",
        marks: 4,
      },
      quiz: [
        { question: "Cosine rule is best for:", options: ["AAS", "SAS or SSS", "ASA", "AAA"], correctAnswer: 1, explanation: "Cosine rule: SAS / SSS." },
        { question: "Area of △ with a=6, b=10, C=30°:", options: ["15", "30", "60", "10"], correctAnswer: 0, explanation: "½(6)(10)(0.5)=15." },
        { question: "Ambiguous case occurs in:", options: ["SAS", "SSA", "SSS", "ASA"], correctAnswer: 1, explanation: "SSA can yield two triangles." },
      ],
    },
  ],
  "y12s-ch1-1c-sequences-series": [
    {
      title: "Arithmetic and Geometric Sequences and Series",
      explanation:
        "ARITHMETIC sequence: tₙ = a + (n−1)d, common difference d.\nSum: Sₙ = n/2 (2a + (n−1)d) = n/2 (a + tₙ).\n\nGEOMETRIC sequence: tₙ = a r^(n−1), common ratio r.\nSum: Sₙ = a(rⁿ − 1)/(r − 1) for r ≠ 1.\nINFINITE geometric series: S∞ = a/(1 − r) exists iff |r| < 1.\n\nThese underpin Specialist work in proof by induction and telescoping.",
      keyPoints: [
        "Arithmetic ↔ constant difference",
        "Geometric ↔ constant ratio",
        "S∞ requires |r| < 1",
        "Use Sₙ = n/2(a + tₙ) when last term is known",
      ],
      workedExamples: [
        { problem: "Find S₂₀ for 3, 7, 11, …", steps: ["a=3, d=4", "S₂₀ = 20/2(2·3 + 19·4) = 10(6+76)"], answer: "S₂₀ = 820" },
        { problem: "S∞ of 8, 4, 2, 1, …", steps: ["a=8, r=1/2, |r|<1", "S∞ = 8/(1 − 1/2) = 16"], answer: "16" },
      ],
      tips: ["Check |r| < 1 before claiming a finite limit", "Express recurring decimals as geometric series"],
      formulas: [
        { name: "Arithmetic Sₙ", formula: "Sₙ = n/2 (2a + (n−1)d)" },
        { name: "Geometric Sₙ", formula: "Sₙ = a(rⁿ−1)/(r−1)" },
        { name: "Geometric S∞", formula: "S∞ = a/(1−r), |r|<1" },
      ],
      examQuestion: {
        problem: "Express 0.4̇5̇ (45 recurring) as a fraction using geometric series.",
        solution: ["0.4̇5̇ = 0.45 + 0.0045 + 0.000045 + …", "a = 0.45, r = 0.01", "S∞ = 0.45/0.99 = 45/99 = 5/11"],
        answer: "5/11",
        marks: 3,
      },
      quiz: [
        { question: "S∞ of 1 + 1/3 + 1/9 + …:", options: ["3/2", "2", "4/3", "9/4"], correctAnswer: 0, explanation: "1/(1−1/3)=3/2." },
        { question: "10th term of 5, 8, 11, …:", options: ["32", "35", "29", "30"], correctAnswer: 0, explanation: "5+9·3=32." },
        { question: "S∞ exists when:", options: ["|r|>1", "|r|=1", "|r|<1", "always"], correctAnswer: 2, explanation: "Convergence requires |r|<1." },
      ],
    },
  ],
  "y12s-ch1-1d-modulus": [
    {
      title: "The Modulus (Absolute Value) Function",
      explanation:
        "|x| = x if x ≥ 0, else −x. Properties: |xy| = |x||y|, |x/y| = |x|/|y|, |x| ≥ 0, and the TRIANGLE INEQUALITY |x + y| ≤ |x| + |y|.\n\nGraph of y = |x| is V-shaped with vertex at the origin; y = |f(x)| reflects the negative parts of f above the x-axis.\n\nEquations: |A| = k (k>0) ⇒ A = ±k.\nInequalities: |A| < k ⇔ −k < A < k; |A| > k ⇔ A < −k or A > k.",
      keyPoints: [
        "|x| ≥ 0 always",
        "Solve as cases or square (when both sides ≥ 0)",
        "Triangle inequality: |a+b| ≤ |a|+|b|",
        "y = |f(x)| reflects negatives above x-axis",
      ],
      workedExamples: [
        { problem: "Solve |2x − 3| = 5.", steps: ["2x − 3 = 5 or 2x − 3 = −5", "x = 4 or x = −1"], answer: "x = −1, 4" },
        { problem: "Solve |x + 2| ≤ 3.", steps: ["−3 ≤ x + 2 ≤ 3", "−5 ≤ x ≤ 1"], answer: "x ∈ [−5, 1]" },
      ],
      tips: ["Always check solutions in original equation", "Sketch to confirm inequality direction"],
      formulas: [
        { name: "Definition", formula: "|x| = √(x²)" },
        { name: "Triangle inequality", formula: "|a+b| ≤ |a|+|b|" },
      ],
      examQuestion: {
        problem: "Solve |x − 1| > 2x.",
        solution: ["Case A x ≥ 1: x − 1 > 2x ⇒ x < −1, no solution", "Case B x < 1: 1 − x > 2x ⇒ 1 > 3x ⇒ x < 1/3", "Combined with x < 1: x < 1/3"],
        answer: "x < 1/3",
        marks: 3,
      },
      quiz: [
        { question: "Solutions of |x|=4:", options: ["4", "−4,4", "0,4", "−4"], correctAnswer: 1, explanation: "Both ±4." },
        { question: "Solve |x−2|<1:", options: ["1<x<3", "x>3", "x<1", "x∈ℝ"], correctAnswer: 0, explanation: "−1<x−2<1." },
        { question: "Triangle inequality says:", options: ["|a+b|≥|a|+|b|", "|a+b|≤|a|+|b|", "|a+b|=|a|+|b|", "|a−b|≥|a|+|b|"], correctAnswer: 1, explanation: "Standard inequality." },
      ],
    },
  ],
  "y12s-ch1-1e-circles": [
    {
      title: "Circles",
      explanation:
        "A circle with centre (h, k) and radius r has equation (x − h)² + (y − k)² = r².\n\nGENERAL form: x² + y² + Dx + Ey + F = 0; complete the square to find centre (−D/2, −E/2) and radius √((D/2)² + (E/2)² − F) when this is positive.\n\nLine–circle intersection: substitute and solve a quadratic; discriminant tells whether the line is a secant (Δ > 0), tangent (Δ = 0) or misses (Δ < 0).",
      keyPoints: [
        "Standard form: (x−h)² + (y−k)² = r²",
        "Complete the square from general form",
        "Tangency ⇔ discriminant = 0",
        "Distance from centre to tangent line equals r",
      ],
      workedExamples: [
        { problem: "Find centre and radius of x² + y² − 6x + 4y − 12 = 0.", steps: ["(x−3)² − 9 + (y+2)² − 4 − 12 = 0", "(x−3)² + (y+2)² = 25"], answer: "Centre (3,−2), r=5" },
        { problem: "For what k is y = x + k tangent to x² + y² = 8?", steps: ["x² + (x+k)² = 8", "2x² + 2kx + k² − 8 = 0", "Δ = 4k² − 8(k²−8) = 0", "−4k² + 64 = 0 ⇒ k = ±4"], answer: "k = ±4" },
      ],
      tips: ["Always group x and y terms before completing the square", "If r² < 0 the equation has no real circle"],
      formulas: [
        { name: "Standard circle", formula: "(x−h)² + (y−k)² = r²" },
        { name: "Distance point→line", formula: "d = |Ax₀+By₀+C|/√(A²+B²)" },
      ],
      examQuestion: {
        problem: "Find the equation of the circle with centre (2,−1) tangent to the line 3x − 4y + 5 = 0.",
        solution: ["d = |3(2) − 4(−1) + 5|/5 = |15|/5 = 3", "r = 3", "Equation: (x−2)² + (y+1)² = 9"],
        answer: "(x−2)² + (y+1)² = 9",
        marks: 3,
      },
      quiz: [
        { question: "Centre of (x+1)²+(y−4)²=16:", options: ["(1,−4)", "(−1,4)", "(1,4)", "(−1,−4)"], correctAnswer: 1, explanation: "Read signs from standard form." },
        { question: "Radius of x²+y²=20:", options: ["20", "√20", "10", "4"], correctAnswer: 1, explanation: "r²=20." },
        { question: "Line is tangent when discriminant equals:", options: ["0", ">0", "<0", "1"], correctAnswer: 0, explanation: "Single intersection point." },
      ],
    },
  ],
  "y12s-ch1-1f-ellipses-hyperbolas": [
    {
      title: "Ellipses and Hyperbolas",
      explanation:
        "ELLIPSE centred at (h,k): (x−h)²/a² + (y−k)²/b² = 1, semi-axes a (horizontal) and b (vertical).\n\nHYPERBOLA centred at (h,k): (x−h)²/a² − (y−k)²/b² = 1 opens left/right; (y−k)²/b² − (x−h)²/a² = 1 opens up/down. Asymptotes through (h,k) with gradients ±b/a (or ±a/b respectively).\n\nThese conics are parametric, can be transformed (translation/dilation), and studied without foci/directrix in Specialist Units 3&4.",
      keyPoints: [
        "Ellipse: + sign and = 1",
        "Hyperbola: − sign and = 1",
        "Asymptotes pass through centre",
        "Transformations follow standard f(x) → A f(B(x−h))+k logic",
      ],
      workedExamples: [
        { problem: "Sketch (x−1)²/9 + (y+2)²/4 = 1.", steps: ["Centre (1,−2)", "a=3 (horiz), b=2 (vert)", "Vertices (−2,−2),(4,−2),(1,0),(1,−4)"], answer: "Ellipse centred (1,−2), semi-axes 3 and 2" },
        { problem: "Find asymptotes of x²/16 − y²/9 = 1.", steps: ["a=4, b=3, centre (0,0)", "Asymptotes: y = ±(3/4)x"], answer: "y = ±3x/4" },
      ],
      tips: ["Identify centre first, then semi-axis lengths", "Always plot vertices before sketching curve"],
      formulas: [
        { name: "Ellipse", formula: "(x−h)²/a² + (y−k)²/b² = 1" },
        { name: "Hyperbola", formula: "(x−h)²/a² − (y−k)²/b² = 1" },
      ],
      examQuestion: {
        problem: "Express 4x² + 9y² − 8x + 18y − 23 = 0 in standard form and identify the conic.",
        solution: ["4(x²−2x) + 9(y²+2y) = 23", "4((x−1)²−1) + 9((y+1)²−1) = 23", "4(x−1)² + 9(y+1)² = 36", "(x−1)²/9 + (y+1)²/4 = 1"],
        answer: "Ellipse, centre (1,−1), a=3, b=2",
        marks: 4,
      },
      quiz: [
        { question: "x²/25 − y²/16 = 1 is a:", options: ["Ellipse", "Circle", "Hyperbola", "Parabola"], correctAnswer: 2, explanation: "Minus sign indicates hyperbola." },
        { question: "Centre of (x+3)²/4 + (y−1)²/9 = 1:", options: ["(3,−1)", "(−3,1)", "(3,1)", "(−3,−1)"], correctAnswer: 1, explanation: "Sign-flip read off." },
        { question: "Asymptote slopes of x²/9 − y²/4 = 1:", options: ["±2/3", "±3/2", "±1", "±9/4"], correctAnswer: 0, explanation: "±b/a = ±2/3." },
      ],
    },
  ],
  "y12s-ch1-1g-parametric": [
    {
      title: "Parametric Equations",
      explanation:
        "A curve may be defined by x = f(t), y = g(t) where t is a parameter. To find the CARTESIAN equation, eliminate t.\n\nClassic examples:\n  • Circle: x = r cos t, y = r sin t ⇒ x² + y² = r²\n  • Ellipse: x = a cos t, y = b sin t ⇒ x²/a² + y²/b² = 1\n  • Line: x = x₀ + at, y = y₀ + bt\n\nParametric form is essential for motion problems and is foundational to vectors (Ch 6).",
      keyPoints: [
        "Eliminate t to get a Cartesian equation",
        "Use sin² + cos² = 1 for trigonometric parametrisations",
        "State the domain induced by parameter range",
      ],
      workedExamples: [
        { problem: "Eliminate t: x = 2t − 1, y = t² + 3.", steps: ["t = (x+1)/2", "y = ((x+1)/2)² + 3 = (x+1)²/4 + 3"], answer: "y = (x+1)²/4 + 3" },
        { problem: "Eliminate t: x = 3 cos t, y = 2 sin t.", steps: ["cos t = x/3, sin t = y/2", "(x/3)² + (y/2)² = 1"], answer: "x²/9 + y²/4 = 1 (ellipse)" },
      ],
      tips: ["Watch for restricted ranges of x and y when t is bounded", "Trig parametrisations almost always use the Pythagorean identity"],
      formulas: [
        { name: "Circle", formula: "(r cos t, r sin t)" },
        { name: "Ellipse", formula: "(a cos t, b sin t)" },
      ],
      examQuestion: {
        problem: "A curve has x = 1 + 2 sin t, y = −3 + 2 cos t for t ∈ [0, 2π]. Identify and sketch.",
        solution: ["sin t = (x−1)/2, cos t = (y+3)/2", "((x−1)/2)² + ((y+3)/2)² = 1", "(x−1)² + (y+3)² = 4"],
        answer: "Circle centre (1,−3), radius 2",
        marks: 3,
      },
      quiz: [
        { question: "Cartesian form of x=t+1, y=t²:", options: ["y=(x−1)²", "y=x²−1", "y=x²+1", "y=x²"], correctAnswer: 0, explanation: "Substitute t=x−1." },
        { question: "x=4cos t, y=4sin t describes:", options: ["Line", "Circle r=4", "Ellipse", "Parabola"], correctAnswer: 1, explanation: "Standard circle." },
        { question: "Parametric eliminations rely on:", options: ["Logarithms", "Pythagorean / substitution", "Differentiation", "Limits"], correctAnswer: 1, explanation: "Algebra/trig identities." },
      ],
    },
  ],
  "y12s-ch1-1h-pseudocode": [
    {
      title: "Algorithms and Pseudocode",
      explanation:
        "Pseudocode is a structured, language-independent description of an algorithm. Specialist uses pseudocode for numerical algorithms (bisection, Newton, Euler).\n\nStandard constructs:\n  • Assignment: x ← value\n  • Selection: IF … THEN … ELSE …\n  • Iteration: WHILE condition DO …, FOR i ← 1 TO n DO …\n  • Output: RETURN or PRINT\n\nWhen tracing pseudocode, maintain a TABLE of variable values per iteration.",
      keyPoints: [
        "Use ← for assignment, = for equality test",
        "Trace tables show every iteration",
        "Always state the termination condition",
      ],
      workedExamples: [
        {
          problem: "Trace: x ← 1; FOR i ← 1 TO 3 DO x ← 2x + 1. Output x.",
          steps: ["i=1: x=3", "i=2: x=7", "i=3: x=15"],
          answer: "x = 15",
        },
      ],
      tips: ["Keep a column for each variable", "Distinguish ‘≤’ vs ‘<’ in loop bounds — off-by-one is the most common error"],
      formulas: [],
      examQuestion: {
        problem: "Trace the algorithm: s ← 0; n ← 1; WHILE n ≤ 4 DO { s ← s + n²; n ← n + 1 }. Output s.",
        solution: ["n=1: s=1", "n=2: s=5", "n=3: s=14", "n=4: s=30", "n=5: loop stops"],
        answer: "s = 30",
        marks: 3,
      },
      quiz: [
        { question: "← means:", options: ["equal", "assign", "approximate", "less than"], correctAnswer: 1, explanation: "Assignment operator." },
        { question: "FOR i←1 TO 5 runs:", options: ["4 times", "5 times", "6 times", "1 time"], correctAnswer: 1, explanation: "Inclusive bounds." },
        { question: "Best way to verify pseudocode:", options: ["Guess", "Trace table", "Skip", "Compile"], correctAnswer: 1, explanation: "Trace table is standard." },
      ],
    },
  ],
  "y12s-ch1-review": [
    {
      title: "Review of Chapter 1 — Preliminary Topics",
      explanation:
        "This review consolidates the prerequisite skills needed for the rest of the Specialist course: circular functions in radians, the sine/cosine rules, sequences and series, the modulus function, conics (circles, ellipses, hyperbolas), parametric forms, and pseudocode tracing.\n\nMaster these now — they appear repeatedly in proof, complex numbers, calculus, vectors and mechanics.",
      keyPoints: [
        "Radians always",
        "Sine vs cosine rule selection",
        "Geometric S∞ requires |r|<1",
        "Modulus by cases",
        "Circles/ellipses/hyperbolas in standard form",
        "Parametric ⇔ Cartesian conversions",
        "Trace pseudocode rigorously",
      ],
      workedExamples: [
        {
          problem: "Mixed: solve 2 cos²θ − cos θ − 1 = 0 for θ ∈ [0, 2π].",
          steps: ["Let c = cos θ", "2c² − c − 1 = (2c+1)(c−1) = 0", "c = 1 ⇒ θ = 0, 2π", "c = −1/2 ⇒ θ = 2π/3, 4π/3"],
          answer: "θ = 0, 2π/3, 4π/3, 2π",
        },
      ],
      tips: ["Build a one-page formula sheet for Ch 1", "Practise tech-free arithmetic with exact values"],
      formulas: [
        { name: "Pythagorean", formula: "sin²θ + cos²θ = 1" },
        { name: "Sine rule", formula: "a/sin A = b/sin B = c/sin C" },
        { name: "Cosine rule", formula: "a² = b² + c² − 2bc cos A" },
        { name: "Geometric S∞", formula: "a/(1−r), |r|<1" },
      ],
      examQuestion: {
        problem: "Find the equation of the circle through (0,0), (4,0), (0,6).",
        solution: ["General form x²+y²+Dx+Ey+F=0", "(0,0): F=0", "(4,0): 16+4D=0 ⇒ D=−4", "(0,6): 36+6E=0 ⇒ E=−6", "Equation: x²+y²−4x−6y=0", "Standard: (x−2)²+(y−3)²=13"],
        answer: "(x−2)²+(y−3)²=13",
        marks: 4,
      },
      quiz: [
        { question: "Best chapter-1 study habit:", options: ["Skip exact values", "Sketch unit circle from memory", "Use degrees", "Avoid pseudocode"], correctAnswer: 1, explanation: "Unit-circle fluency is essential." },
        { question: "0.3̇ as a fraction:", options: ["1/3", "3/10", "33/100", "3/9"], correctAnswer: 0, explanation: "Geometric series gives 1/3." },
        { question: "Modulus equation |x|=−2 has:", options: ["x=±2", "no solutions", "x=2", "x=−2"], correctAnswer: 1, explanation: "Modulus is non-negative." },
      ],
    },
  ],
};
