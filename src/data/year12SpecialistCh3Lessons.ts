import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 3: Circular Functions (VCE Unit 3)

export const year12SpecialistCh3Lessons: TopicLessonsMap = {
  "y12s-ch3-3a-reciprocal": [
    {
      title: "Reciprocal Circular Functions: sec, cosec, cot",
      explanation:
        "Definitions:\n  • sec θ = 1/cos θ (cos θ ≠ 0)\n  • cosec θ = 1/sin θ (sin θ ≠ 0)\n  • cot θ = cos θ/sin θ (sin θ ≠ 0)\n\nDerived Pythagorean identities (divide sin²+cos²=1 by cos² or sin²):\n  • 1 + tan²θ = sec²θ\n  • 1 + cot²θ = cosec²θ\n\nGraphs of sec and cosec are U-shaped between vertical asymptotes; cot is decreasing between asymptotes at multiples of π.",
      keyPoints: [
        "sec, cosec, cot are reciprocals — NOT inverses",
        "Asymptotes wherever the denominator = 0",
        "1+tan²=sec²; 1+cot²=cosec²",
      ],
      workedExamples: [
        {
          problem: "If cos θ = 3/5 and θ ∈ Q4, find sec θ, cosec θ, cot θ.",
          steps: ["sec θ = 5/3", "sin θ = −4/5 (Q4)", "cosec θ = −5/4", "cot θ = (3/5)/(−4/5) = −3/4"],
          answer: "sec=5/3, cosec=−5/4, cot=−3/4",
        },
        {
          problem: "Simplify (sec²θ − 1)/sec²θ.",
          steps: ["sec²θ − 1 = tan²θ", "tan²θ/sec²θ = (sin²θ/cos²θ)·(cos²θ) = sin²θ"],
          answer: "sin²θ",
        },
      ],
      tips: ["Convert everything to sin and cos when stuck", "sec is positive when cos is positive (Q1, Q4)"],
      formulas: [
        { name: "Pythag (sec)", formula: "1 + tan²θ = sec²θ" },
        { name: "Pythag (cosec)", formula: "1 + cot²θ = cosec²θ" },
      ],
      examQuestion: {
        problem: "Solve 2 sec²θ − 3 tan θ − 1 = 0 for θ ∈ [0, 2π].",
        solution: [
          "Replace sec²θ = 1 + tan²θ",
          "2(1 + tan²θ) − 3 tan θ − 1 = 0 ⇒ 2tan²θ − 3 tan θ + 1 = 0",
          "(2tan θ − 1)(tan θ − 1) = 0",
          "tan θ = 1/2 or tan θ = 1",
          "tan θ = 1: θ = π/4, 5π/4",
          "tan θ = 1/2: θ = arctan(1/2), π + arctan(1/2)",
        ],
        answer: "θ = π/4, 5π/4, arctan(1/2), π + arctan(1/2)",
        marks: 4,
      },
      quiz: [
        { question: "1 + tan²θ =", options: ["sin²θ", "cos²θ", "sec²θ", "cosec²θ"], correctAnswer: 2, explanation: "Divide Pythag by cos²." },
        { question: "cot θ asymptotes at:", options: ["π/2 + kπ", "kπ", "kπ/2", "0 only"], correctAnswer: 1, explanation: "Where sin θ=0." },
        { question: "If sin θ=1/2, cosec θ:", options: ["1/2", "2", "−2", "√3/2"], correctAnswer: 1, explanation: "Reciprocal." },
      ],
    },
  ],
  "y12s-ch3-3b-compound-double": [
    {
      title: "Compound and Double Angle Formulas",
      explanation:
        "COMPOUND angle:\n  • sin(A ± B) = sin A cos B ± cos A sin B\n  • cos(A ± B) = cos A cos B ∓ sin A sin B\n  • tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)\n\nDOUBLE angle (A = B):\n  • sin 2A = 2 sin A cos A\n  • cos 2A = cos²A − sin²A = 1 − 2 sin²A = 2 cos²A − 1\n  • tan 2A = 2 tan A/(1 − tan²A)\n\nThese identities are the engine of Specialist trig algebra.",
      keyPoints: [
        "Three forms of cos 2A — pick the most useful one",
        "Sign rules: sin keeps the ±, cos flips it",
        "Half-angle: sin²A = (1 − cos 2A)/2",
      ],
      workedExamples: [
        {
          problem: "Find exact value of sin 75° using compound angle.",
          steps: ["75° = 45°+30°", "sin 45 cos 30 + cos 45 sin 30", "(√2/2)(√3/2) + (√2/2)(1/2)", "(√6 + √2)/4"],
          answer: "(√6 + √2)/4",
        },
        {
          problem: "If sin θ = 3/5 and θ ∈ Q1, find sin 2θ and cos 2θ.",
          steps: ["cos θ = 4/5", "sin 2θ = 2·(3/5)·(4/5) = 24/25", "cos 2θ = 1 − 2(9/25) = 7/25"],
          answer: "sin 2θ=24/25, cos 2θ=7/25",
        },
      ],
      tips: ["Memorise (cos 30, cos 45, cos 60) cold", "Rewrite cos²θ as (1+cos 2θ)/2 to integrate later"],
      formulas: [
        { name: "sin sum", formula: "sin(A+B) = sin A cos B + cos A sin B" },
        { name: "cos sum", formula: "cos(A+B) = cos A cos B − sin A sin B" },
        { name: "Double sin", formula: "sin 2A = 2 sin A cos A" },
        { name: "Double cos", formula: "cos 2A = 2cos²A − 1" },
      ],
      examQuestion: {
        problem: "Express cos 3θ in terms of cos θ.",
        solution: [
          "cos 3θ = cos(2θ + θ) = cos 2θ cos θ − sin 2θ sin θ",
          "= (2cos²θ − 1) cos θ − 2 sin θ cos θ · sin θ",
          "= 2cos³θ − cos θ − 2 sin²θ cos θ",
          "= 2cos³θ − cos θ − 2(1 − cos²θ) cos θ",
          "= 4 cos³θ − 3 cos θ",
        ],
        answer: "cos 3θ = 4cos³θ − 3cos θ",
        marks: 4,
      },
      quiz: [
        { question: "sin 2A =", options: ["sin²A", "2 sin A cos A", "1−cos 2A", "2 cos²A"], correctAnswer: 1, explanation: "Standard identity." },
        { question: "cos 2A in terms of sin A:", options: ["1−2sin²A", "2sin²A−1", "2sin A cos A", "sin²A−cos²A"], correctAnswer: 0, explanation: "Use sin²+cos²=1." },
        { question: "tan(A+B) denominator:", options: ["1+tan A tan B", "1−tan A tan B", "tan A + tan B", "tan A tan B"], correctAnswer: 1, explanation: "Standard formula." },
      ],
    },
  ],
  "y12s-ch3-3c-inverse": [
    {
      title: "Inverse Circular Functions",
      explanation:
        "Because sin, cos, tan are not one-to-one, INVERSES require restricted domains:\n  • arcsin: [−1,1] → [−π/2, π/2]\n  • arccos: [−1,1] → [0, π]\n  • arctan: ℝ → (−π/2, π/2)\n\nKey identities:\n  • sin(arcsin x) = x for x ∈ [−1,1]\n  • arcsin(sin x) = x ONLY when x ∈ [−π/2, π/2]\n  • arcsin x + arccos x = π/2\n\nDerivatives (Specialist Unit 4): d/dx arcsin x = 1/√(1−x²); d/dx arctan x = 1/(1+x²).",
      keyPoints: [
        "Restricted domains are essential",
        "Output range = principal value",
        "Composition pitfalls outside the principal range",
      ],
      workedExamples: [
        { problem: "Evaluate arcsin(−1/2).", steps: ["sin θ = −1/2 with θ ∈ [−π/2, π/2]", "θ = −π/6"], answer: "−π/6" },
        {
          problem: "Simplify cos(arcsin x).",
          steps: ["Let θ = arcsin x ⇒ sin θ = x, θ ∈ [−π/2, π/2]", "cos θ ≥ 0 ⇒ cos θ = √(1−x²)"],
          answer: "√(1 − x²)",
        },
      ],
      tips: ["Always sketch the right triangle when composing", "Watch the principal range — it traps many students"],
      formulas: [
        { name: "Complementary", formula: "arcsin x + arccos x = π/2" },
        { name: "Derivative arcsin", formula: "(arcsin x)' = 1/√(1−x²)" },
        { name: "Derivative arctan", formula: "(arctan x)' = 1/(1+x²)" },
      ],
      examQuestion: {
        problem: "Solve 2 arcsin x = arccos x for x ∈ [−1,1].",
        solution: [
          "Use arccos x = π/2 − arcsin x",
          "2 arcsin x = π/2 − arcsin x ⇒ 3 arcsin x = π/2 ⇒ arcsin x = π/6",
          "x = sin(π/6) = 1/2",
        ],
        answer: "x = 1/2",
        marks: 3,
      },
      quiz: [
        { question: "Range of arccos:", options: ["[−π/2,π/2]", "[0,π]", "(−π/2,π/2)", "[−π,π]"], correctAnswer: 1, explanation: "Standard principal range." },
        { question: "arctan(1):", options: ["π/4", "π/2", "π/3", "π/6"], correctAnswer: 0, explanation: "tan(π/4)=1." },
        { question: "arcsin x + arccos x =", options: ["π", "π/2", "0", "π/4"], correctAnswer: 1, explanation: "Complementary." },
      ],
    },
  ],
  "y12s-ch3-3d-equations": [
    {
      title: "Solution of Trigonometric Equations",
      explanation:
        "General strategy:\n1) Reduce to a single trig function (use identities).\n2) Solve algebraically (factorise, substitute u = sin x etc.).\n3) Find principal solutions, then add periodicity for the domain.\n\nGeneral solutions:\n  • sin x = k ⇒ x = arcsin k + 2nπ or π − arcsin k + 2nπ\n  • cos x = k ⇒ x = ±arccos k + 2nπ\n  • tan x = k ⇒ x = arctan k + nπ",
      keyPoints: [
        "Always state the domain you’re solving over",
        "Factorise — never divide by sin x or cos x (you may lose roots)",
        "Use general solution form when domain is unbounded",
      ],
      workedExamples: [
        {
          problem: "Solve sin 2x = sin x for x ∈ [0, 2π].",
          steps: [
            "2 sin x cos x − sin x = 0",
            "sin x (2 cos x − 1) = 0",
            "sin x = 0 ⇒ x = 0, π, 2π",
            "cos x = 1/2 ⇒ x = π/3, 5π/3",
          ],
          answer: "x = 0, π/3, π, 5π/3, 2π",
        },
        {
          problem: "Solve 2 cos²x + cos x − 1 = 0 for x ∈ [0, 2π].",
          steps: [
            "(2 cos x − 1)(cos x + 1) = 0",
            "cos x = 1/2 ⇒ x = π/3, 5π/3",
            "cos x = −1 ⇒ x = π",
          ],
          answer: "x = π/3, π, 5π/3",
        },
      ],
      tips: ["Always check x = 0 and the endpoints", "Sketch y = LHS − RHS to anticipate the number of roots"],
      formulas: [
        { name: "Gen sol cos", formula: "x = ±arccos k + 2nπ" },
        { name: "Gen sol tan", formula: "x = arctan k + nπ" },
      ],
      examQuestion: {
        problem: "Solve √3 sin x + cos x = 1 for x ∈ [0, 2π].",
        solution: [
          "Express as R sin(x + α): R = 2, tan α = 1/√3 ⇒ α = π/6",
          "2 sin(x + π/6) = 1 ⇒ sin(x + π/6) = 1/2",
          "x + π/6 = π/6 or 5π/6 (+2nπ)",
          "x = 0 or 2π/3 (within domain)",
        ],
        answer: "x = 0, 2π/3",
        marks: 4,
      },
      quiz: [
        { question: "sin x = 0 over [0,2π]:", options: ["0,π", "0,π,2π", "π only", "0,2π"], correctAnswer: 1, explanation: "Three roots inclusive." },
        { question: "Why never divide by cos x?", options: ["Always 0", "May lose solutions", "Hard", "Wrong sign"], correctAnswer: 1, explanation: "Roots where cos x=0 are dropped." },
        { question: "General solution of tan x=1:", options: ["π/4 + 2nπ", "π/4 + nπ", "π/2 + nπ", "nπ"], correctAnswer: 1, explanation: "Period π." },
      ],
    },
  ],
  "y12s-ch3-3e-sums-products": [
    {
      title: "Sums and Products of Sines and Cosines",
      explanation:
        "PRODUCT-TO-SUM:\n  • sin A cos B = ½[sin(A+B) + sin(A−B)]\n  • cos A cos B = ½[cos(A−B) + cos(A+B)]\n  • sin A sin B = ½[cos(A−B) − cos(A+B)]\n\nSUM-TO-PRODUCT (with P = (A+B)/2, Q = (A−B)/2):\n  • sin A + sin B = 2 sin P cos Q\n  • sin A − sin B = 2 cos P sin Q\n  • cos A + cos B = 2 cos P cos Q\n  • cos A − cos B = −2 sin P sin Q\n\nUseful for solving equations, integrating, and proving identities.",
      keyPoints: [
        "Product↔sum forms convert multiplications into additions",
        "Half-sum and half-difference appear in sum-to-product",
        "Watch the minus sign in cos A − cos B",
      ],
      workedExamples: [
        {
          problem: "Express 2 sin 3x cos x as a sum.",
          steps: ["= sin(3x + x) + sin(3x − x)", "= sin 4x + sin 2x"],
          answer: "sin 4x + sin 2x",
        },
        {
          problem: "Solve sin 5x + sin x = 0 for x ∈ [0, π].",
          steps: ["= 2 sin 3x cos 2x = 0", "sin 3x = 0 ⇒ x = 0, π/3, 2π/3, π", "cos 2x = 0 ⇒ x = π/4, 3π/4"],
          answer: "x = 0, π/4, π/3, 2π/3, 3π/4, π",
        },
      ],
      tips: ["Sum-to-product is excellent for solving sums of trig equal to zero", "Verify with one numeric value before moving on"],
      formulas: [
        { name: "Sum to product", formula: "sin A + sin B = 2 sin((A+B)/2) cos((A−B)/2)" },
        { name: "Product to sum", formula: "2 sin A cos B = sin(A+B) + sin(A−B)" },
      ],
      examQuestion: {
        problem: "Prove (sin 3x + sin x)/(cos 3x + cos x) = tan 2x.",
        solution: [
          "Numerator = 2 sin 2x cos x",
          "Denominator = 2 cos 2x cos x",
          "Ratio = sin 2x/cos 2x = tan 2x",
        ],
        answer: "Identity proven ∎",
        marks: 3,
      },
      quiz: [
        { question: "sin A + sin B = ", options: ["2 sin((A+B)/2) cos((A−B)/2)", "2 cos((A+B)/2) sin((A−B)/2)", "sin(A+B)", "2 sin A sin B"], correctAnswer: 0, explanation: "Sum-to-product." },
        { question: "cos A − cos B = ", options: ["2 sin P sin Q", "−2 sin P sin Q", "2 cos P cos Q", "0"], correctAnswer: 1, explanation: "Note the minus." },
        { question: "Best use of product↔sum:", options: ["Adding fractions", "Solving sums = 0", "Differentiation", "Logs"], correctAnswer: 1, explanation: "Factorisable form." },
      ],
    },
  ],
  "y12s-ch3-review": [
    {
      title: "Review of Chapter 3 — Circular Functions",
      explanation:
        "Consolidates reciprocal trig (sec/cosec/cot), compound and double angle identities, inverse trig functions, equation solving, and sum/product transformations. Mastery here unlocks calculus on trig functions in Ch 8 and complex-number applications in Ch 4.",
      keyPoints: [
        "Convert to sin/cos when stuck",
        "Memorise compound and double-angle formulas",
        "Respect inverse trig domains",
        "Factorise — never divide by trig expressions",
        "Sum-to-product solves many equations",
      ],
      workedExamples: [
        {
          problem: "Solve 2 cos 2x + 4 sin x = 3 for x ∈ [0, 2π].",
          steps: [
            "cos 2x = 1 − 2 sin²x",
            "2(1 − 2 sin²x) + 4 sin x = 3",
            "−4 sin²x + 4 sin x − 1 = 0 ⇒ 4 sin²x − 4 sin x + 1 = 0",
            "(2 sin x − 1)² = 0 ⇒ sin x = 1/2",
            "x = π/6, 5π/6",
          ],
          answer: "x = π/6, 5π/6",
        },
      ],
      tips: ["Build a personal identity sheet", "Practise tech-free exact values daily"],
      formulas: [
        { name: "Pythag (sec)", formula: "1 + tan²θ = sec²θ" },
        { name: "Double cos", formula: "cos 2A = 1 − 2sin²A" },
        { name: "Sum to product", formula: "sin A + sin B = 2 sin((A+B)/2) cos((A−B)/2)" },
      ],
      examQuestion: {
        problem: "If tan θ = 2, find tan 2θ and sin 2θ in exact form.",
        solution: [
          "tan 2θ = 2(2)/(1−4) = −4/3",
          "sin θ = 2/√5, cos θ = 1/√5 (assume θ in Q1)",
          "sin 2θ = 2·(2/√5)·(1/√5) = 4/5",
        ],
        answer: "tan 2θ = −4/3, sin 2θ = 4/5",
        marks: 3,
      },
      quiz: [
        { question: "sec²θ − tan²θ =", options: ["0", "1", "−1", "2"], correctAnswer: 1, explanation: "Pythagorean rearranged." },
        { question: "Factorise sin 2x − sin x:", options: ["sin x(2 cos x − 1)", "sin x(cos x − 1)", "2 sin x cos x", "0"], correctAnswer: 0, explanation: "Use double-angle." },
        { question: "arctan(0):", options: ["0", "π/4", "π/2", "π"], correctAnswer: 0, explanation: "tan 0 = 0." },
      ],
    },
  ],
};
