import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 6: Complex Numbers

export const year12SpecialistCh6Lessons: TopicLessonsMap = {
  "y12s-ch6-6a-build": [
    {
      title: "Building the Complex Numbers",
      explanation:
        "Define i with i² = −1. A complex number z = a + bi has Real part Re(z)=a, Imaginary part Im(z)=b.\n\nOperations:\n  • (a+bi) + (c+di) = (a+c) + (b+d)i\n  • (a+bi)(c+di) = (ac−bd) + (ad+bc)i\n\nThe complex plane (Argand diagram) plots z as the point (a,b).",
      keyPoints: [
        "i² = −1 (the only new rule)",
        "Add componentwise; multiply with FOIL + i² = −1",
        "Equality: a+bi = c+di ⇔ a=c AND b=d",
      ],
      workedExamples: [
        {
          problem: "Compute (3 + 2i)(1 − 4i).",
          steps: ["= 3 − 12i + 2i − 8i²", "= 3 − 10i − 8(−1)", "= 11 − 10i"],
          answer: "11 − 10i",
        },
      ],
      tips: ["Keep i out of denominators (multiply by conjugate)", "Real ≠ Imaginary: equate parts independently"],
      formulas: [{ name: "i power cycle", formula: "i, −1, −i, 1, …" }],
      examQuestion: {
        problem: "If (a + bi)² = 3 + 4i, find a, b ∈ ℝ.",
        solution: [
          "(a²−b²) + 2abi = 3 + 4i",
          "a² − b² = 3 and 2ab = 4 ⇒ b = 2/a",
          "a² − 4/a² = 3 ⇒ a⁴ − 3a² − 4 = 0 ⇒ a² = 4 ⇒ a = ±2",
          "(a,b) = (2,1) or (−2,−1)",
        ],
        answer: "z = 2+i or −2−i",
        marks: 3,
      },
      quiz: [
        { question: "i⁴ =", options: ["−1", "1", "i", "−i"], correctAnswer: 1, explanation: "(i²)² = 1." },
        { question: "Re(3 − 2i):", options: ["3", "−2", "−3", "2"], correctAnswer: 0, explanation: "Real part." },
        { question: "(1+i)(1−i) =", options: ["0", "1", "2", "2i"], correctAnswer: 2, explanation: "Difference of squares with i²." },
      ],
    },
  ],
  "y12s-ch6-6b-modulus-conjugate": [
    {
      title: "Modulus, Conjugate and Division",
      explanation:
        "For z = a + bi:\n  • Conjugate: z̄ = a − bi\n  • Modulus: |z| = √(a² + b²)\n  • z·z̄ = |z|² (real, non-negative)\n\nDivision: (z₁/z₂) = (z₁ · z̄₂)/|z₂|² — multiply numerator and denominator by the denominator's conjugate.\n\nProperties: |z₁z₂| = |z₁||z₂|, conj(z₁ + z₂) = z̄₁ + z̄₂.",
      keyPoints: [
        "Conjugate flips the sign of Im(z)",
        "Modulus = distance from origin in the Argand plane",
        "Division ALWAYS multiply by conjugate of denominator",
      ],
      workedExamples: [
        {
          problem: "Express (3 + 2i)/(1 − i) in form a + bi.",
          steps: [
            "Multiply by (1+i)/(1+i)",
            "= (3 + 3i + 2i + 2i²)/(1 − i²)",
            "= (1 + 5i)/2",
          ],
          answer: "1/2 + (5/2)i",
        },
      ],
      tips: ["Always rationalise — never leave i in the denominator", "|z|² is real and easy to compute"],
      formulas: [{ name: "Modulus", formula: "|z| = √(a² + b²)" }],
      examQuestion: {
        problem: "If z = 2 + i, evaluate z + 2/z.",
        solution: [
          "1/z = (2 − i)/5",
          "2/z = (4 − 2i)/5",
          "z + 2/z = (2 + 4/5) + (1 − 2/5)i = 14/5 + 3i/5",
        ],
        answer: "14/5 + 3i/5",
        marks: 3,
      },
      quiz: [
        { question: "Conjugate of 3 − 4i:", options: ["3 + 4i", "−3 + 4i", "−3 − 4i", "4 − 3i"], correctAnswer: 0, explanation: "Flip Im sign." },
        { question: "|3 + 4i| =", options: ["7", "5", "1", "25"], correctAnswer: 1, explanation: "√(9+16)." },
        { question: "z·z̄ =", options: ["|z|", "|z|²", "Re(z)²", "0"], correctAnswer: 1, explanation: "Always real ≥ 0." },
      ],
    },
  ],
  "y12s-ch6-6c-polar-form": [
    {
      title: "Polar (Modulus–Argument) Form",
      explanation:
        "z = r(cos θ + i sin θ) = r cis θ, where r = |z| and θ = arg(z) is the angle from positive Real axis (principal value θ ∈ (−π, π]).\n\nConversion:\n  • a = r cos θ, b = r sin θ\n  • r = √(a²+b²), tan θ = b/a (CHECK quadrant)\n\nEuler form: z = r·e^(iθ).",
      keyPoints: [
        "Always specify the quadrant when finding arg",
        "Principal argument is in (−π, π]",
        "cis is shorthand for cos+i·sin",
      ],
      workedExamples: [
        {
          problem: "Write z = −1 + i in polar form.",
          steps: ["r = √2", "Quadrant 2: arg = π − π/4 = 3π/4", "z = √2 cis(3π/4)"],
          answer: "√2 cis(3π/4)",
        },
      ],
      tips: ["Sketch first to identify the quadrant", "Use exact angles for π/6, π/4, π/3"],
      formulas: [{ name: "Polar", formula: "z = r cis θ" }],
      examQuestion: {
        problem: "Convert z = √3 − i to polar form.",
        solution: ["r = 2; tan θ = −1/√3, Q4", "θ = −π/6", "z = 2 cis(−π/6)"],
        answer: "2 cis(−π/6)",
        marks: 2,
      },
      quiz: [
        { question: "cis(0) =", options: ["0", "1", "i", "−1"], correctAnswer: 1, explanation: "cos 0 + i sin 0 = 1." },
        { question: "Principal arg of −1:", options: ["0", "π", "−π", "π/2"], correctAnswer: 1, explanation: "Lies on negative real axis." },
        { question: "If z=2 cis(π/3), Re(z)=", options: ["1", "√3", "2", "0"], correctAnswer: 0, explanation: "2·cos(π/3)=1." },
      ],
    },
  ],
  "y12s-ch6-6d-polar-ops": [
    {
      title: "Operations in Polar Form",
      explanation:
        "If z₁ = r₁ cis θ₁, z₂ = r₂ cis θ₂:\n  • z₁z₂ = r₁r₂ cis(θ₁ + θ₂)\n  • z₁/z₂ = (r₁/r₂) cis(θ₁ − θ₂)\n  • zⁿ = rⁿ cis(nθ)  (De Moivre)\n\nMultiplication scales modulus and rotates argument — geometrically a spiral similarity.",
      keyPoints: [
        "Add args when multiplying; subtract when dividing",
        "Reduce final arg to principal range",
        "Geometric meaning: scale + rotate",
      ],
      workedExamples: [
        {
          problem: "Compute (2 cis π/6)(3 cis π/4).",
          steps: ["r = 6", "θ = π/6 + π/4 = 5π/12", "Result = 6 cis(5π/12)"],
          answer: "6 cis(5π/12)",
        },
      ],
      tips: ["Always reduce arg to (−π, π]", "Polar form is hugely faster than Cartesian for products and powers"],
      formulas: [{ name: "De Moivre", formula: "(r cis θ)ⁿ = rⁿ cis(nθ)" }],
      examQuestion: {
        problem: "Express (1 + i)⁸ in Cartesian form.",
        solution: [
          "1+i = √2 cis(π/4)",
          "(1+i)⁸ = (√2)⁸ cis(8π/4) = 16 cis(2π) = 16",
        ],
        answer: "16",
        marks: 2,
      },
      quiz: [
        { question: "When multiplying in polar form:", options: ["Add args, multiply r", "Multiply args, add r", "Subtract both", "Add both"], correctAnswer: 0, explanation: "Standard rule." },
        { question: "(cis θ)ⁿ =", options: ["cis(nθ)", "n cis θ", "cis θ + n", "cis(θ/n)"], correctAnswer: 0, explanation: "De Moivre." },
        { question: "Division of mod-arg forms:", options: ["Divide moduli, subtract args", "Divide both", "Multiply args", "Add args"], correctAnswer: 0, explanation: "Reverse of multiplication." },
      ],
    },
  ],
  "y12s-ch6-6e-quadratic": [
    {
      title: "Solving Quadratic Equations Over ℂ",
      explanation:
        "Quadratics with real coefficients have either real or COMPLEX CONJUGATE roots.\n\nUse the quadratic formula:\n  z = (−b ± √(b² − 4ac))/(2a)\n\nIf b² − 4ac < 0, write √(−k) = i√k. Always present roots in standard a + bi form.",
      keyPoints: [
        "Discriminant < 0 ⇒ complex conjugate pair",
        "Sum of roots = −b/a; product = c/a (Vieta)",
        "Always simplify imaginary surds",
      ],
      workedExamples: [
        {
          problem: "Solve z² − 4z + 13 = 0.",
          steps: ["Discriminant = 16 − 52 = −36", "z = (4 ± 6i)/2 = 2 ± 3i"],
          answer: "z = 2 ± 3i",
        },
      ],
      tips: ["Never write √(−9) — always 3i", "Check by expanding (z − r₁)(z − r₂)"],
      formulas: [{ name: "Quadratic", formula: "z = (−b ± √Δ)/(2a)" }],
      examQuestion: {
        problem: "Find z so that z² = −7 + 24i.",
        solution: [
          "Let z = a + bi: a² − b² = −7, 2ab = 24",
          "b = 12/a ⇒ a² − 144/a² = −7 ⇒ a⁴ + 7a² − 144 = 0",
          "a² = 9 ⇒ a = ±3, b = ±4",
          "z = 3 + 4i or −3 − 4i",
        ],
        answer: "z = ±(3 + 4i)",
        marks: 4,
      },
      quiz: [
        { question: "If discriminant = −16, roots:", options: ["Two real", "Repeated", "Complex conjugates", "None"], correctAnswer: 2, explanation: "Negative ⇒ complex pair." },
        { question: "Sum of roots of z²+pz+q:", options: ["p", "−p", "q", "−q"], correctAnswer: 1, explanation: "Vieta." },
        { question: "Roots of z² + 1 = 0:", options: ["±1", "±i", "0,1", "1±i"], correctAnswer: 1, explanation: "z² = −1." },
      ],
    },
  ],
  "y12s-ch6-6f-polynomial": [
    {
      title: "Polynomial Equations Over ℂ",
      explanation:
        "FUNDAMENTAL THEOREM OF ALGEBRA: every degree-n polynomial has exactly n complex roots (with multiplicity).\n\nCONJUGATE ROOT THEOREM: real-coefficient polynomials have complex roots in CONJUGATE PAIRS.\n\nStrategy:\n1) Use given/rational root.\n2) Divide to reduce degree.\n3) Solve resulting quadratic over ℂ.",
      keyPoints: [
        "Real-coeff cubic has at least one real root",
        "Real-coeff quartic with no real roots ⇒ two conjugate pairs",
        "If a + bi is a root, so is a − bi (real coeffs)",
      ],
      workedExamples: [
        {
          problem: "Given 1 + 2i is a root of P(z) = z³ − 5z² + 11z − 15, find all roots.",
          steps: [
            "Conjugate 1 − 2i is also a root",
            "(z − (1+2i))(z − (1−2i)) = z² − 2z + 5",
            "Divide: P(z) = (z² − 2z + 5)(z − 3)",
            "Roots: 1±2i, 3",
          ],
          answer: "z = 3, 1±2i",
        },
      ],
      tips: ["Always pair complex roots with their conjugates", "Use polynomial long division or compare coefficients"],
      formulas: [{ name: "Conjugate factor", formula: "(z − (a+bi))(z − (a−bi)) = z² − 2az + (a²+b²)" }],
      examQuestion: {
        problem: "Solve z⁴ + 4 = 0 over ℂ.",
        solution: [
          "z⁴ = −4 = 4 cis(π + 2kπ)",
          "z = 4^(1/4) cis((π + 2kπ)/4), k = 0,1,2,3",
          "= √2 cis(π/4), √2 cis(3π/4), √2 cis(−3π/4), √2 cis(−π/4)",
          "= 1+i, −1+i, −1−i, 1−i",
        ],
        answer: "z = ±1 ± i (all 4 combos)",
        marks: 4,
      },
      quiz: [
        { question: "Real cubic always has:", options: ["3 real", "≥1 real", "0 real", "Only complex"], correctAnswer: 1, explanation: "Conjugate pairs leave odd one real." },
        { question: "If 2−i is a root (real coeffs), another root is:", options: ["2+i", "−2+i", "−2−i", "i"], correctAnswer: 0, explanation: "Conjugate." },
        { question: "Degree n ⇒ # complex roots:", options: ["n−1", "n", "n+1", "Variable"], correctAnswer: 1, explanation: "FTA." },
      ],
    },
  ],
  "y12s-ch6-6g-de-moivre": [
    {
      title: "De Moivre's Theorem & Roots of Unity",
      explanation:
        "(r cis θ)ⁿ = rⁿ cis(nθ).\n\nROOTS: zⁿ = w = R cis φ has n distinct solutions:\n  z_k = R^(1/n) cis((φ + 2kπ)/n), k = 0, 1, …, n−1\n\nThese roots are equally spaced around a circle of radius R^(1/n). Roots of unity (zⁿ = 1) sit on the unit circle at angles 2kπ/n.",
      keyPoints: [
        "n distinct nth roots, evenly spaced",
        "Sum of nth roots of unity = 0 (n ≥ 2)",
        "Product of nth roots of unity = (−1)^(n+1)",
      ],
      workedExamples: [
        {
          problem: "Find all cube roots of 8i.",
          steps: [
            "8i = 8 cis(π/2)",
            "z_k = 2 cis((π/2 + 2kπ)/3)",
            "k=0: 2 cis(π/6); k=1: 2 cis(5π/6); k=2: 2 cis(−π/2) = −2i",
          ],
          answer: "2 cis(π/6), 2 cis(5π/6), −2i",
        },
      ],
      tips: ["Sketch the roots as a regular polygon to verify", "Always reduce angles to (−π, π]"],
      formulas: [{ name: "nth roots", formula: "z_k = R^{1/n} cis((φ + 2kπ)/n)" }],
      examQuestion: {
        problem: "Solve z⁵ = 1.",
        solution: [
          "z_k = cis(2kπ/5), k = 0,1,2,3,4",
          "= 1, cis(72°), cis(144°), cis(216°), cis(288°)",
        ],
        answer: "Five 5th roots of unity",
        marks: 3,
      },
      quiz: [
        { question: "How many 4th roots of 16?", options: ["1", "2", "4", "8"], correctAnswer: 2, explanation: "n distinct roots." },
        { question: "Sum of nth roots of unity (n≥2):", options: ["0", "1", "n", "−1"], correctAnswer: 0, explanation: "Geometric series." },
        { question: "Roots of unity lie on:", options: ["x-axis", "Unit circle", "y=x", "Parabola"], correctAnswer: 1, explanation: "Modulus 1." },
      ],
    },
  ],
  "y12s-ch6-6h-subsets": [
    {
      title: "Sketching Subsets of the Complex Plane",
      explanation:
        "Common loci:\n  • |z − z₀| = r → circle centre z₀, radius r\n  • |z − z₁| = |z − z₂| → perpendicular bisector of segment z₁z₂\n  • arg(z − z₀) = α → ray from z₀ at angle α (excluding z₀)\n  • Re(z) = a, Im(z) = b → vertical/horizontal lines\n  • Inequalities (≤, ≥) give regions (closed/open).\n\nAlways sketch on the Argand plane and indicate boundary inclusion.",
      keyPoints: [
        "Modulus → distance",
        "Argument → angle (ray, NOT line)",
        "Strict inequality ⇒ dashed boundary",
      ],
      workedExamples: [
        {
          problem: "Sketch {z : |z − (1 + i)| ≤ 2}.",
          steps: ["Closed disk centre (1,1), radius 2", "Boundary included (≤)"],
          answer: "Closed circular disk",
        },
        {
          problem: "Sketch {z : |z − 1| = |z + i|}.",
          steps: [
            "Set z = x + iy",
            "(x−1)² + y² = x² + (y+1)²",
            "−2x + 1 = 2y + 1 ⇒ y = −x",
            "Perpendicular bisector of segment from (1,0) to (0,−1)",
          ],
          answer: "Line y = −x",
        },
      ],
      tips: ["Translate modulus equations into Cartesian if stuck", "For arg loci: open dot at the vertex point"],
      examQuestion: {
        problem: "Sketch {z : |z| ≤ 2 AND arg(z) ∈ [0, π/2]}.",
        solution: [
          "Quarter-disk in Q1 of radius 2",
          "Boundary on real axis included; ray at π/2 included",
          "Origin excluded for argument (undefined at 0)",
        ],
        answer: "Closed quarter-disk in Q1, origin omitted",
        marks: 3,
      },
      quiz: [
        { question: "|z − 3| = 5 is a:", options: ["Line", "Circle", "Ray", "Parabola"], correctAnswer: 1, explanation: "Distance from a fixed point." },
        { question: "arg(z) = π/4 is a:", options: ["Full line y=x", "Ray from origin in Q1", "Circle", "Parabola"], correctAnswer: 1, explanation: "Half-line from origin." },
        { question: "|z−a|=|z−b| is a:", options: ["Circle", "Ellipse", "Perp. bisector of ab", "Hyperbola"], correctAnswer: 2, explanation: "Equidistant points." },
      ],
    },
  ],
  "y12s-ch6-review": [
    {
      title: "Review of Chapter 6 — Complex Numbers",
      explanation:
        "Pulls together arithmetic, conjugate/modulus algebra, polar form & De Moivre, roots of equations, and Argand-plane geometry. Foundational for Specialist Ch 7 (functions and graphs) and integration techniques.",
      keyPoints: [
        "i² = −1, all else follows",
        "Multiply/divide via conjugate or polar form",
        "Conjugate-root theorem for real polynomials",
        "De Moivre for powers and roots",
        "Argand sketches: circles, lines, rays, regions",
      ],
      workedExamples: [
        {
          problem: "Express (1 − i√3)⁶ in Cartesian form.",
          steps: [
            "1 − i√3 = 2 cis(−π/3)",
            "(·)⁶ = 64 cis(−2π) = 64",
          ],
          answer: "64",
        },
      ],
      tips: ["Use polar form whenever powers ≥ 3 appear", "For sketching, label axes Re and Im"],
      examQuestion: {
        problem: "Solve z² − (3 + i)z + (2 + i) = 0.",
        solution: [
          "Δ = (3+i)² − 4(2+i) = 9 + 6i − 1 − 8 − 4i = 0 + 2i",
          "√(2i) = 1 + i (since (1+i)² = 2i)",
          "z = ((3+i) ± (1+i))/2",
          "z = (4 + 2i)/2 = 2 + i  or  (2 + 0i)/2 = 1",
        ],
        answer: "z = 1, 2 + i",
        marks: 4,
      },
      quiz: [
        { question: "i¹⁰⁰ =", options: ["1", "−1", "i", "−i"], correctAnswer: 0, explanation: "100 mod 4 = 0." },
        { question: "Modulus of 2 cis(5π/3):", options: ["2", "5π/3", "1", "10π/3"], correctAnswer: 0, explanation: "r = 2." },
        { question: "Roots of z³ = −1:", options: ["1 only", "Three on unit circle", "−1, 1", "None real"], correctAnswer: 1, explanation: "Three cube roots of −1." },
      ],
    },
  ],
};
