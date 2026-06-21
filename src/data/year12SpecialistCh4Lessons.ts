import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 4: Vectors

export const year12SpecialistCh4Lessons: TopicLessonsMap = {
  "y12s-ch4-4a-intro": [
    {
      title: "Introduction to Vectors",
      explanation:
        "A vector has BOTH magnitude and direction. Notation: a, ã, or →AB.\n\nKey operations:\n  • Addition: triangle/parallelogram rule\n  • Scalar multiplication: ka stretches by |k|, reverses if k<0\n  • Equality: same magnitude AND direction (position irrelevant)\n\nIn ℝ²/ℝ³ we write a = a₁i + a₂j (+ a₃k) where i, j, k are standard basis unit vectors.",
      keyPoints: [
        "Vectors are translation-invariant",
        "a + b = b + a (commutative)",
        "Magnitude |a| = √(a₁² + a₂² + a₃²)",
      ],
      workedExamples: [
        {
          problem: "If a = 3i − j and b = i + 2j, find 2a − b and |2a − b|.",
          steps: ["2a = 6i − 2j", "2a − b = 5i − 4j", "|2a − b| = √(25 + 16) = √41"],
          answer: "2a − b = 5i − 4j, |·| = √41",
        },
      ],
      tips: ["Sketch arrows to visualise sums", "Use column form for arithmetic"],
      formulas: [{ name: "Magnitude", formula: "|a| = √(a₁² + a₂² + a₃²)" }],
      examQuestion: {
        problem: "Given A(1,2,−1), B(4,0,3), find →AB and a unit vector in its direction.",
        solution: ["→AB = B − A = 3i − 2j + 4k", "|→AB| = √(9+4+16) = √29", "Unit = (1/√29)(3i − 2j + 4k)"],
        answer: "(3i − 2j + 4k)/√29",
        marks: 3,
      },
      quiz: [
        { question: "|3i − 4j| =", options: ["5", "7", "√7", "1"], correctAnswer: 0, explanation: "√(9+16)=5." },
        { question: "Vectors are equal when:", options: ["Same start", "Same magnitude only", "Same magnitude AND direction", "Parallel"], correctAnswer: 2, explanation: "Position-independent." },
        { question: "Unit vector of a is:", options: ["a/|a|", "|a|·a", "a²", "1/a"], correctAnswer: 0, explanation: "Divide by magnitude." },
      ],
    },
  ],
  "y12s-ch4-4b-resolution": [
    {
      title: "Resolution into Rectangular Components",
      explanation:
        "Any vector a making angle θ with the x-axis splits into:\n  • aₓ = |a| cos θ\n  • a_y = |a| sin θ\n\nIn 3D, use direction cosines: cos α, cos β, cos γ along x, y, z with cos²α + cos²β + cos²γ = 1.\n\nUsed in physics for forces, velocities, and equilibrium.",
      keyPoints: [
        "Resolve along perpendicular axes",
        "Sum of squared direction cosines = 1",
        "Equilibrium: ΣFₓ = 0 AND ΣF_y = 0",
      ],
      workedExamples: [
        {
          problem: "A force of 20 N acts at 60° above horizontal. Resolve.",
          steps: ["Fₓ = 20 cos 60° = 10", "F_y = 20 sin 60° = 10√3"],
          answer: "(10, 10√3) N",
        },
      ],
      tips: ["Always draw a free-body diagram", "Direction cosines are components of the unit vector"],
      formulas: [{ name: "Component", formula: "aₓ = |a| cos θ" }],
      examQuestion: {
        problem: "Vector a = 2i + 2j + k. Find direction cosines.",
        solution: ["|a| = √(4+4+1) = 3", "cos α = 2/3, cos β = 2/3, cos γ = 1/3"],
        answer: "(2/3, 2/3, 1/3)",
        marks: 3,
      },
      quiz: [
        { question: "If |a|=10, θ=30°, aₓ=", options: ["5", "5√3", "10", "√3"], correctAnswer: 1, explanation: "10 cos 30°=5√3." },
        { question: "Sum of cos²(direction) =", options: ["0", "1", "|a|", "π"], correctAnswer: 1, explanation: "Pythag in 3D." },
        { question: "Equilibrium requires:", options: ["ΣF=0 vectorially", "Magnitudes equal", "Parallel forces", "One force only"], correctAnswer: 0, explanation: "Net force zero." },
      ],
    },
  ],
  "y12s-ch4-4c-scalar-product": [
    {
      title: "Scalar (Dot) Product",
      explanation:
        "Definition: a·b = a₁b₁ + a₂b₂ + a₃b₃ = |a||b| cos θ.\n\nProperties:\n  • Commutative: a·b = b·a\n  • Distributive: a·(b+c) = a·b + a·c\n  • a·a = |a|²\n  • a ⊥ b ⇔ a·b = 0\n\nAngle between vectors: cos θ = (a·b)/(|a||b|).",
      keyPoints: [
        "Result is a SCALAR",
        "Zero dot product ⇒ perpendicular",
        "Cosine rule connection",
      ],
      workedExamples: [
        {
          problem: "Find the angle between a = i + 2j + 2k and b = 3i + 4k.",
          steps: ["a·b = 3 + 0 + 8 = 11", "|a| = 3, |b| = 5", "cos θ = 11/15", "θ = arccos(11/15) ≈ 42.8°"],
          answer: "≈ 42.8°",
        },
      ],
      tips: ["Use a·a = |a|² to get magnitudes quickly", "Negative dot product ⇒ obtuse angle"],
      formulas: [
        { name: "Dot", formula: "a·b = |a||b| cos θ" },
        { name: "Angle", formula: "cos θ = (a·b)/(|a||b|)" },
      ],
      examQuestion: {
        problem: "Find k so that a = 2i + kj − k and b = i + 3j + 2k are perpendicular.",
        solution: ["a·b = 2 + 3k − 2k = 2 + k", "Set = 0 ⇒ k = −2"],
        answer: "k = −2",
        marks: 2,
      },
      quiz: [
        { question: "(i+j)·(i−j) =", options: ["0", "1", "2", "−1"], correctAnswer: 0, explanation: "1−1=0; perpendicular." },
        { question: "a·a equals:", options: ["|a|", "|a|²", "0", "1"], correctAnswer: 1, explanation: "Standard result." },
        { question: "Perpendicular iff:", options: ["a·b<0", "a·b=0", "a·b=1", "|a|=|b|"], correctAnswer: 1, explanation: "cos 90°=0." },
      ],
    },
  ],
  "y12s-ch4-4d-projections": [
    {
      title: "Vector Projections",
      explanation:
        "The SCALAR projection of a onto b: a·b̂ = (a·b)/|b|.\nThe VECTOR projection of a onto b: ((a·b)/|b|²) b.\n\nGives the 'shadow' of a in the direction of b. Used to decompose a vector into parallel and perpendicular components.",
      keyPoints: [
        "Scalar projection is a number; vector projection is a vector",
        "a = a∥ + a⊥ where a∥ is the projection onto b",
        "a⊥ = a − a∥",
      ],
      workedExamples: [
        {
          problem: "Project a = 4i + j onto b = 2i + 2j.",
          steps: ["a·b = 8 + 2 = 10", "|b|² = 8", "Vector proj = (10/8)(2i+2j) = (5/2)i + (5/2)j"],
          answer: "(5/2)(i + j)",
        },
      ],
      tips: ["Always include the unit vector when expressing a vector projection", "Component perpendicular = a − projection"],
      formulas: [{ name: "Vector projection", formula: "proj_b a = ((a·b)/|b|²) b" }],
      examQuestion: {
        problem: "Resolve a = 3i + 2j + k into components parallel and perpendicular to b = i + j + k.",
        solution: [
          "a·b = 6, |b|² = 3",
          "a∥ = 2(i+j+k) = 2i + 2j + 2k",
          "a⊥ = a − a∥ = i + 0j − k",
        ],
        answer: "a∥ = 2i+2j+2k, a⊥ = i − k",
        marks: 3,
      },
      quiz: [
        { question: "Scalar projection formula:", options: ["a·b", "(a·b)/|b|", "(a·b)/|a|", "|a||b|"], correctAnswer: 1, explanation: "Divide by |b|." },
        { question: "If a ⊥ b then proj_b a =", options: ["a", "b", "0", "|a|"], correctAnswer: 2, explanation: "Dot product is 0." },
        { question: "a⊥ component:", options: ["a + a∥", "a − a∥", "a∥/2", "0"], correctAnswer: 1, explanation: "Subtract parallel part." },
      ],
    },
  ],
  "y12s-ch4-4e-collinearity": [
    {
      title: "Collinearity",
      explanation:
        "Three points A, B, C are COLLINEAR if vectors →AB and →AC are parallel: →AC = k·→AB for some scalar k.\n\nEquivalent test: the vectors have proportional components, or →AB × →AC = 0 (cross product zero).",
      keyPoints: [
        "Parallel vectors are scalar multiples",
        "Use position vectors and subtraction",
        "The scalar k tells you 'how far along'",
      ],
      workedExamples: [
        {
          problem: "Are A(1,2), B(3,5), C(7,11) collinear?",
          steps: ["→AB = (2,3)", "→AC = (6,9) = 3·(2,3)", "Yes — scalar multiple"],
          answer: "Collinear (k = 3)",
        },
      ],
      tips: ["Test the SAME starting point for both vectors", "If components don't all share the same ratio, NOT collinear"],
      examQuestion: {
        problem: "Find m so that A(1,1,1), B(2,3,4), C(4,m,10) are collinear.",
        solution: [
          "→AB = (1,2,3); →AC = (3, m−1, 9) must equal 3·→AB = (3,6,9)",
          "m − 1 = 6 ⇒ m = 7",
        ],
        answer: "m = 7",
        marks: 2,
      },
      quiz: [
        { question: "Vectors are parallel iff:", options: ["Equal magnitude", "One is scalar multiple of the other", "Perpendicular", "Same start"], correctAnswer: 1, explanation: "Definition." },
        { question: "→AB = (2,4); collinear with (1,2)?", options: ["Yes", "No", "Only if 3D", "Cannot tell"], correctAnswer: 0, explanation: "k=2." },
        { question: "If →AC = 0·→AB:", options: ["A=C", "B=C", "Collinear", "Impossible"], correctAnswer: 0, explanation: "Zero vector." },
      ],
    },
  ],
  "y12s-ch4-4f-geometric-proofs": [
    {
      title: "Geometric Proofs Using Vectors",
      explanation:
        "Vector methods elegantly prove classical geometry results:\n  • Diagonals of a parallelogram bisect each other\n  • Midpoint theorem (segment joining midpoints is half and parallel to base)\n  • Concurrence of medians (centroid at 1/3 point)\n\nStrategy: assign position vectors, express required points, then equate or compare.",
      keyPoints: [
        "Choose origin wisely to simplify expressions",
        "Express midpoints as (a+b)/2",
        "Show two expressions for the same point coincide",
      ],
      workedExamples: [
        {
          problem: "Prove the diagonals of a parallelogram bisect each other.",
          steps: [
            "Let A=0, B=b, D=d ⇒ C = b + d",
            "Midpoint of AC = (b+d)/2",
            "Midpoint of BD = (b+d)/2",
            "Same point ⇒ diagonals bisect ∎",
          ],
          answer: "Proven",
        },
      ],
      tips: ["Always state the origin", "Translate every geometric word into a vector statement"],
      examQuestion: {
        problem: "ABCD is a quadrilateral; P,Q,R,S are midpoints of AB, BC, CD, DA. Prove PQRS is a parallelogram.",
        solution: [
          "P=(a+b)/2, Q=(b+c)/2, R=(c+d)/2, S=(d+a)/2",
          "→PQ = (c−a)/2 = →SR",
          "Equal and parallel ⇒ parallelogram ∎",
        ],
        answer: "Proven (Varignon's theorem)",
        marks: 4,
      },
      quiz: [
        { question: "Midpoint of A,B has position:", options: ["a−b", "(a+b)/2", "ab", "(a−b)/2"], correctAnswer: 1, explanation: "Average." },
        { question: "Equal vectors ⇒", options: ["Parallel and same length", "Perpendicular", "Same start", "Zero"], correctAnswer: 0, explanation: "Definition of equality." },
        { question: "Best origin choice:", options: ["Random", "A vertex of figure", "Centre of Earth", "Doesn't matter mathematically"], correctAnswer: 1, explanation: "Simplifies algebra; final result independent." },
      ],
    },
  ],
  "y12s-ch4-review": [
    {
      title: "Review of Chapter 4 — Vectors",
      explanation:
        "Consolidates vector arithmetic, components, dot product, projections, collinearity, and proofs. Vectors underpin Ch 5 (lines and planes) and Ch 9 (kinematics).",
      keyPoints: [
        "|a|² = a·a",
        "Perpendicularity ⇔ a·b = 0",
        "Projection = (a·b/|b|²) b",
        "Collinearity ⇔ scalar multiple",
        "Use position vectors in proofs",
      ],
      workedExamples: [
        {
          problem: "Given a = i + 2j − 2k and b = 2i − j + 2k, find (i) a·b, (ii) angle, (iii) projection of a onto b.",
          steps: [
            "a·b = 2 − 2 − 4 = −4",
            "|a|=3, |b|=3 ⇒ cos θ = −4/9 ⇒ θ ≈ 116.4°",
            "proj = (−4/9) b",
          ],
          answer: "−4; ≈116.4°; (−4/9)(2i−j+2k)",
        },
      ],
      tips: ["Tech-free: keep exact surds", "CAS: build vectors then use dotP / norm functions"],
      examQuestion: {
        problem: "Show A(1,0,2), B(2,3,4), C(3,6,6) are collinear.",
        solution: ["→AB = (1,3,2)", "→AC = (2,6,4) = 2·→AB", "Scalar multiple ⇒ collinear ∎"],
        answer: "Collinear",
        marks: 2,
      },
      quiz: [
        { question: "(2i+3j)·(i−j) =", options: ["−1", "1", "5", "0"], correctAnswer: 0, explanation: "2−3=−1." },
        { question: "Vector projection includes:", options: ["Only magnitude", "Direction unit vector b̂", "Cross product", "Determinant"], correctAnswer: 1, explanation: "Multiplied by b̂ (or b/|b|²·b)." },
        { question: "Centroid of triangle:", options: ["(a+b+c)/3", "(a+b+c)/2", "(a−b+c)/3", "(abc)"], correctAnswer: 0, explanation: "Average of vertices." },
      ],
    },
  ],
};
