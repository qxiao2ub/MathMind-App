import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 5: Vector Equations of Lines and Planes

export const year12SpecialistCh5Lessons: TopicLessonsMap = {
  "y12s-ch5-5a-vec-lines": [
    {
      title: "Vector Equations of Lines",
      explanation:
        "A line through point A with direction d:\n  • Vector form: r = a + t·d, t ∈ ℝ\n  • Parametric: x = a₁ + td₁, y = a₂ + td₂, z = a₃ + td₃\n  • Cartesian: (x − a₁)/d₁ = (y − a₂)/d₂ = (z − a₃)/d₃\n\nLine through two points A, B: r = a + t(b − a).",
      keyPoints: [
        "Direction vector is non-zero and unique up to scalar",
        "Parameter t locates a point along the line",
        "Cartesian form fails if any d component = 0 (handle separately)",
      ],
      workedExamples: [
        {
          problem: "Find vector and Cartesian equation of the line through A(1,2,−1) with direction d = 2i + j + 3k.",
          steps: ["r = (i+2j−k) + t(2i+j+3k)", "Cartesian: (x−1)/2 = (y−2)/1 = (z+1)/3"],
          answer: "r = a + td; (x−1)/2 = y−2 = (z+1)/3",
        },
      ],
      tips: ["State the parameter range when restricted (e.g., line segment t ∈ [0,1])", "Pick t = 0, 1 to verify points lie on the line"],
      formulas: [{ name: "Vector line", formula: "r = a + td" }],
      examQuestion: {
        problem: "Find the line through A(2,−1,3) and B(4,1,−1).",
        solution: ["d = b − a = 2i + 2j − 4k", "r = (2,−1,3) + t(2,2,−4)"],
        answer: "r = (2−1+3) + t(2,2,−4)",
        marks: 2,
      },
      quiz: [
        { question: "r = a + td represents:", options: ["A point", "A plane", "A line", "A vector"], correctAnswer: 2, explanation: "One-parameter family." },
        { question: "Direction of line through A,B:", options: ["a+b", "a−b or b−a", "ab", "0"], correctAnswer: 1, explanation: "Either direction." },
        { question: "Setting t=0 gives:", options: ["B", "A", "Origin", "Midpoint"], correctAnswer: 1, explanation: "Returns point a." },
      ],
    },
  ],
  "y12s-ch5-5b-intersection-skew": [
    {
      title: "Intersection of Lines and Skew Lines",
      explanation:
        "Two lines in 3D may be:\n  • INTERSECTING (one common point)\n  • PARALLEL (directions are scalar multiples)\n  • SKEW (neither parallel nor intersecting)\n\nMethod: equate parametric forms ⇒ system in (s, t). If consistent ⇒ intersect; if directions parallel but no common point ⇒ parallel; if no solution and not parallel ⇒ SKEW.",
      keyPoints: [
        "Use DIFFERENT parameters for each line (s, t)",
        "3 equations, 2 unknowns: solve any two then check the third",
        "Skew lines are unique to 3D",
      ],
      workedExamples: [
        {
          problem: "Do r₁ = (1,0,1) + t(1,1,0) and r₂ = (0,1,2) + s(0,1,1) intersect?",
          steps: [
            "x: 1 + t = 0 ⇒ t = −1",
            "y: t = 1 + s ⇒ s = −2",
            "z check: 1 = 2 + s ⇒ s = −1 ✗",
            "Inconsistent and not parallel ⇒ SKEW",
          ],
          answer: "Skew",
        },
      ],
      tips: ["Always verify the third equation", "Parallel test FIRST — saves time"],
      examQuestion: {
        problem: "Find the intersection of r₁ = (1,2,3) + t(1,−1,2) and r₂ = (4,1,1) + s(2,1,−1).",
        solution: [
          "1+t = 4+2s; 2−t = 1+s; 3+2t = 1−s",
          "Solve first two: t = 3 + 2s and 2−(3+2s) = 1+s ⇒ −3s = 2 ⇒ s = −2/3, t = 5/3",
          "Check third: 3+10/3 = 1+2/3 ⇒ 19/3 ≠ 5/3 ✗ ⇒ Skew",
        ],
        answer: "Skew lines",
        marks: 4,
      },
      quiz: [
        { question: "Skew lines exist in:", options: ["2D only", "3D only", "Any dimension", "Never"], correctAnswer: 1, explanation: "Need 3D room." },
        { question: "Parallel test:", options: ["Same direction (scalar mult)", "Same point", "Same magnitude", "Perpendicular"], correctAnswer: 0, explanation: "Direction proportional." },
        { question: "Intersecting non-parallel lines share:", options: ["No points", "All points", "Exactly one point", "Two points"], correctAnswer: 2, explanation: "Single intersection." },
      ],
    },
  ],
  "y12s-ch5-5c-vector-product": [
    {
      title: "Vector (Cross) Product",
      explanation:
        "a × b = |a||b| sin θ · n̂, where n̂ is the unit vector perpendicular to both (right-hand rule).\n\nDeterminant form:\n  a × b = | i  j  k |\n          | a₁ a₂ a₃|\n          | b₁ b₂ b₃|\n\nProperties:\n  • a × b = −(b × a) (anti-commutative)\n  • a × a = 0\n  • |a × b| = area of parallelogram spanned by a, b",
      keyPoints: [
        "Result is a VECTOR (not scalar)",
        "Direction by right-hand rule",
        "Magnitude = parallelogram area; ½|a×b| = triangle area",
      ],
      workedExamples: [
        {
          problem: "If a = i + 2j + k and b = 3i − j + 2k, find a × b.",
          steps: [
            "i: (2)(2) − (1)(−1) = 5",
            "j: −[(1)(2) − (1)(3)] = 1",
            "k: (1)(−1) − (2)(3) = −7",
            "a × b = 5i + j − 7k",
          ],
          answer: "5i + j − 7k",
        },
      ],
      tips: ["Verify by checking (a×b)·a = 0 and (a×b)·b = 0", "Watch signs in the j-component (note the minus)"],
      formulas: [{ name: "Magnitude", formula: "|a×b| = |a||b| sin θ" }],
      examQuestion: {
        problem: "Find the area of triangle with vertices A(1,0,0), B(0,1,0), C(0,0,1).",
        solution: [
          "→AB = −i + j; →AC = −i + k",
          "→AB × →AC = i + j + k",
          "Area = ½|→AB × →AC| = ½√3",
        ],
        answer: "(√3)/2",
        marks: 3,
      },
      quiz: [
        { question: "a × a =", options: ["|a|²", "0 vector", "1", "a"], correctAnswer: 1, explanation: "Parallel to itself." },
        { question: "|a×b| equals area of:", options: ["Triangle", "Parallelogram", "Rectangle", "Circle"], correctAnswer: 1, explanation: "Half is triangle." },
        { question: "a × b is:", options: ["Scalar", "Vector ⟂ both", "Parallel to a", "Magnitude only"], correctAnswer: 1, explanation: "Right-hand rule." },
      ],
    },
  ],
  "y12s-ch5-5d-vec-planes": [
    {
      title: "Vector Equations of Planes",
      explanation:
        "A plane is determined by a point A and a normal vector n.\n\nForms:\n  • Vector: (r − a)·n = 0, i.e., r·n = a·n\n  • Cartesian: n₁x + n₂y + n₃z = d, where d = a·n\n  • Parametric (through A with directions u, v): r = a + s·u + t·v\n\nNormal from two directions in the plane: n = u × v.",
      keyPoints: [
        "Normal vector defines orientation",
        "Three non-collinear points determine a unique plane",
        "Cartesian coefficients ARE the normal components",
      ],
      workedExamples: [
        {
          problem: "Plane through A(1,2,3) with normal n = 2i − j + k.",
          steps: ["d = a·n = 2 − 2 + 3 = 3", "Cartesian: 2x − y + z = 3"],
          answer: "2x − y + z = 3",
        },
      ],
      tips: ["For 3 points: compute two direction vectors, then n = u × v", "Always verify all 3 points satisfy the equation"],
      formulas: [{ name: "Plane", formula: "r·n = a·n" }],
      examQuestion: {
        problem: "Find the equation of the plane through P(1,1,1), Q(2,0,3), R(0,2,2).",
        solution: [
          "u = →PQ = i − j + 2k; v = →PR = −i + j + k",
          "n = u × v = (−1−2)i − (1+2)j + (1−1)k = −3i − 3j + 0k",
          "Simplify n = i + j; d = (1)(1)+(1)(1) = 2",
          "Plane: x + y = 2",
        ],
        answer: "x + y = 2",
        marks: 4,
      },
      quiz: [
        { question: "Normal to plane ax+by+cz=d:", options: ["(d,0,0)", "(a,b,c)", "(0,0,1)", "(1,1,1)"], correctAnswer: 1, explanation: "Coefficients form normal." },
        { question: "Three non-collinear points define:", options: ["A line", "A plane", "Two planes", "Nothing"], correctAnswer: 1, explanation: "Unique plane." },
        { question: "Vector form:", options: ["r·n = a·n", "r×n=0", "r=a+t·n", "|r|=|n|"], correctAnswer: 0, explanation: "Standard." },
      ],
    },
  ],
  "y12s-ch5-5e-distances-angles": [
    {
      title: "Distances, Angles, and Intersections",
      explanation:
        "Key formulas:\n  • Distance from point P to plane n·r=d: |n·p − d|/|n|\n  • Distance from point to line through A with direction d: |→AP × d|/|d|\n  • Angle between two planes (or normals): cos θ = |n₁·n₂|/(|n₁||n₂|)\n  • Angle between line (direction d) and plane (normal n): sin θ = |d·n|/(|d||n|)\n\nIntersections:\n  • Line∩Plane: substitute parametric line into plane equation, solve for t\n  • Plane∩Plane: solve simultaneous equations (often parametric line)",
      keyPoints: [
        "Use absolute value to ensure non-negative distances",
        "Angle between line and plane uses sin (complement of normal angle)",
        "Parallel line + plane: d·n = 0",
      ],
      workedExamples: [
        {
          problem: "Distance from P(1,2,3) to plane 2x − y + 2z = 4.",
          steps: ["n = (2,−1,2); |n| = 3", "Numerator = |2(1) − 2 + 2(3) − 4| = |2| = 2", "Distance = 2/3"],
          answer: "2/3",
        },
      ],
      tips: ["Always normalise the normal vector first when in doubt", "Check parallelism BEFORE solving for intersection"],
      formulas: [
        { name: "Point-plane", formula: "d = |n·p − d|/|n|" },
        { name: "Line-plane angle", formula: "sin θ = |d·n|/(|d||n|)" },
      ],
      examQuestion: {
        problem: "Find the angle between planes Π₁: x + y + z = 1 and Π₂: x − y + 2z = 3.",
        solution: [
          "n₁ = (1,1,1), n₂ = (1,−1,2)",
          "n₁·n₂ = 1 − 1 + 2 = 2",
          "|n₁| = √3, |n₂| = √6",
          "cos θ = 2/√18 = √2/3 ⇒ θ ≈ 61.87°",
        ],
        answer: "≈ 61.9°",
        marks: 3,
      },
      quiz: [
        { question: "Line // plane iff:", options: ["d·n=0", "d×n=0", "|d|=|n|", "d=n"], correctAnswer: 0, explanation: "Direction perpendicular to normal." },
        { question: "Angle between planes uses:", options: ["Directions", "Normals", "Points", "Areas"], correctAnswer: 1, explanation: "cos θ via normals." },
        { question: "Distance point to line uses:", options: ["Dot product", "Cross product magnitude", "Sum", "Determinant 3×3"], correctAnswer: 1, explanation: "|→AP × d|/|d|." },
      ],
    },
  ],
  "y12s-ch5-review": [
    {
      title: "Review of Chapter 5 — Lines and Planes",
      explanation:
        "Brings together vector lines, intersection logic (including skew detection), the cross product, plane equations, and distance/angle formulas. Essential for kinematics and complex-number geometry.",
      keyPoints: [
        "r = a + td (lines) and r·n = a·n (planes)",
        "Cross product gives normal & area",
        "Skew = neither parallel nor intersecting",
        "Distance formulas use |·|/|·|",
      ],
      workedExamples: [
        {
          problem: "Find where line r = (1,0,−1) + t(2,1,3) meets plane x + y + z = 4.",
          steps: [
            "(1+2t) + t + (−1+3t) = 4",
            "6t = 4 ⇒ t = 2/3",
            "r = (1+4/3, 2/3, −1+2) = (7/3, 2/3, 1)",
          ],
          answer: "(7/3, 2/3, 1)",
        },
      ],
      tips: ["Always verify by substituting back into the plane", "Sketch in 2D analog to gain intuition"],
      examQuestion: {
        problem: "Find the shortest distance from the origin to the line r = (1,1,1) + t(1,2,2).",
        solution: [
          "→OA = (1,1,1); d = (1,2,2)",
          "→OA × d = (1·2−1·2, 1·1−1·2, 1·2−1·1) = (0, −1, 1)",
          "|·| = √2; |d| = 3",
          "Distance = √2/3",
        ],
        answer: "√2/3",
        marks: 3,
      },
      quiz: [
        { question: "Lines never meeting in 3D, not parallel, are:", options: ["Skew", "Equal", "Perpendicular", "Coincident"], correctAnswer: 0, explanation: "Definition." },
        { question: "Plane normal from u, v in plane:", options: ["u·v", "u+v", "u×v", "u−v"], correctAnswer: 2, explanation: "Cross product." },
        { question: "Cartesian plane 3x−y+2z=5 normal:", options: ["(3,−1,2)", "(5,0,0)", "(1,1,1)", "(−3,1,−2)"], correctAnswer: 0, explanation: "Coefficients." },
      ],
    },
  ],
};
