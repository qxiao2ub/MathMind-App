import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 7: Revision of Chapters 1–6

export const year12SpecialistCh7Lessons: TopicLessonsMap = {
  "y12s-ch7-7a-tech-free": [
    {
      title: "Technology-Free Revision (Ch 1–6)",
      explanation:
        "Exam 1 demands exact arithmetic and tidy algebra without CAS. Focus on:\n  • Exact circular values (π/6, π/4, π/3 multiples)\n  • Surds, rationalising denominators, exact trig identities\n  • Vector arithmetic, dot/cross products by hand\n  • Modulus–argument form and z = r cis θ manipulations\n  • Proof by induction, contradiction, contrapositive structure",
      keyPoints: [
        "Always leave answers in exact form (surds, π, e, ln)",
        "Use identities to AVOID large numerical evaluations",
        "Verify proofs by checking the base case explicitly",
      ],
      workedExamples: [
        {
          problem: "Simplify (1 + i)^8 exactly.",
          steps: [
            "1 + i = √2 cis(π/4)",
            "(1+i)^8 = (√2)^8 cis(8·π/4) = 16 cis(2π)",
            "= 16(1 + 0i) = 16",
          ],
          answer: "16",
        },
      ],
      tips: ["Convert to polar form before raising to powers", "Sketch quickly to check signs of cos/sin"],
      examQuestion: {
        problem: "Without CAS, find the exact value of cos(75°).",
        solution: [
          "cos(75°) = cos(45° + 30°)",
          "= cos45°cos30° − sin45°sin30°",
          "= (√2/2)(√3/2) − (√2/2)(1/2)",
          "= (√6 − √2)/4",
        ],
        answer: "(√6 − √2)/4",
        marks: 2,
      },
      quiz: [
        { question: "(1+i)² equals:", options: ["2i", "2", "1+2i", "0"], correctAnswer: 0, explanation: "1+2i+i² = 2i." },
        { question: "Exact value of sin(π/3):", options: ["1/2", "√2/2", "√3/2", "1"], correctAnswer: 2, explanation: "60° standard." },
        { question: "Best Exam 1 strategy:", options: ["Decimal everything", "Exact form & identities", "Skip proofs", "Use CAS"], correctAnswer: 1, explanation: "Tech-free." },
      ],
    },
  ],
  "y12s-ch7-7b-multiple-choice": [
    {
      title: "Multiple-Choice Strategy (Ch 1–6)",
      explanation:
        "Exam 2 Section A: 20 MCQs in ~40 minutes. Strategies:\n  • Eliminate impossible options (sign, magnitude, range)\n  • Test specific values (e.g., x = 0, 1, π) to reject distractors\n  • Match dimension/units (vectors, scalars)\n  • For complex numbers: check |z| and arg(z) separately\n  • Trust patterns: 4 plausible distractors are designed around common errors",
      keyPoints: [
        "Spend ≤2 minutes per MCQ",
        "Substitute easy values to eliminate options",
        "Read units/range carefully (radians vs degrees)",
      ],
      workedExamples: [
        {
          problem: "If z = 2 cis(π/3), then z³ equals: A) 8, B) 8 cis(π), C) 8i, D) −8.",
          steps: [
            "z³ = 8 cis(π) (De Moivre)",
            "8 cis(π) = −8 = D",
            "Both B and D are equivalent — pick the simplest representation D",
          ],
          answer: "D (=B)",
        },
      ],
      tips: ["Beware unit traps (degrees vs radians)", "If two options look equivalent, the simpler form is usually intended"],
      examQuestion: {
        problem: "Which is a unit vector parallel to 3i + 4j? A) (3,4), B) (3/5, 4/5), C) (1,1), D) (4,3).",
        solution: ["|3i+4j| = 5", "Unit = (3/5, 4/5)"],
        answer: "B",
        marks: 1,
      },
      quiz: [
        { question: "First MCQ step:", options: ["Solve fully", "Eliminate impossibles", "Skip", "Guess"], correctAnswer: 1, explanation: "Reject obviously wrong." },
        { question: "Time per MCQ:", options: ["~2 min", "~10 min", "~30 sec", "Unlimited"], correctAnswer: 0, explanation: "20 in 40 min." },
        { question: "Polar power uses:", options: ["Distributivity", "De Moivre", "FOIL", "Conjugate"], correctAnswer: 1, explanation: "(r cis θ)^n = r^n cis(nθ)." },
      ],
    },
  ],
  "y12s-ch7-7c-extended-response": [
    {
      title: "Extended-Response Strategy (Ch 1–6)",
      explanation:
        "Section B questions chain multiple skills: vectors → planes → distance, or complex numbers → loci → algebra. Strategies:\n  • Read ALL parts before starting — later parts often unlock earlier ideas\n  • Show clear working for method marks (CAS results need justification)\n  • State assumptions and define notation\n  • Always answer in the requested form (exact/decimal, vector/parametric)",
      keyPoints: [
        "Method marks > final-answer marks in scaling",
        "Communicate context (e.g., 'velocity vector', 'distance in metres')",
        "Carry exact values; round ONLY at final step",
      ],
      workedExamples: [
        {
          problem: "Find the shortest distance from P(1,2,3) to the line r = (0,0,0)+t(1,1,1).",
          steps: [
            "→OP = (1,2,3), d = (1,1,1)",
            "→OP × d = (2−3, 3−1, 1−2) = (−1, 2, −1)",
            "|·| = √6; |d| = √3",
            "Distance = √6/√3 = √2",
          ],
          answer: "√2",
        },
      ],
      tips: ["Label each part (a), (b)... clearly", "Re-read the question after each part to check what's being asked"],
      examQuestion: {
        problem: "Plane Π: x + 2y − 2z = 6. (a) Find distance from origin. (b) Find foot of perpendicular from O.",
        solution: [
          "(a) |0+0−0−6|/√(1+4+4) = 6/3 = 2",
          "(b) Line: r = t(1,2,−2); sub into plane: t+4t+4t = 6 ⇒ 9t = 6 ⇒ t = 2/3",
          "Foot = (2/3, 4/3, −4/3)",
        ],
        answer: "(a) 2; (b) (2/3, 4/3, −4/3)",
        marks: 4,
      },
      quiz: [
        { question: "First action in extended-response:", options: ["Answer (a) fast", "Read all parts", "Skip", "Use CAS only"], correctAnswer: 1, explanation: "Plan ahead." },
        { question: "Marks heavily favour:", options: ["Final answer", "Method/working", "Speed", "Diagrams only"], correctAnswer: 1, explanation: "Method marks dominate." },
        { question: "Round at:", options: ["Each step", "Halfway", "Final step only", "Never"], correctAnswer: 2, explanation: "Avoid rounding error." },
      ],
    },
  ],
  "y12s-ch7-7d-pseudocode": [
    {
      title: "Algorithms and Pseudocode (Ch 1–6)",
      explanation:
        "Pseudocode questions test algorithmic understanding without specific syntax. Key constructs:\n  • assignment: x ← value\n  • conditional: if … then … else\n  • loop: for i from a to b do / while condition do\n  • output: print / return\n\nCommon Specialist algorithms:\n  • Bisection method (root-finding via interval halving)\n  • Newton's method iteration\n  • Sum a series until tolerance reached",
      keyPoints: [
        "Trace the algorithm by tabulating variables at each step",
        "Watch off-by-one in for-loops",
        "Convergence: iterate until |xₙ₊₁ − xₙ| < tolerance",
      ],
      workedExamples: [
        {
          problem: "Trace: x ← 2; for i from 1 to 3 do x ← (x + 2/x)/2; print x. (Computes √2.)",
          steps: [
            "i=1: x = (2+1)/2 = 1.5",
            "i=2: x = (1.5 + 2/1.5)/2 = (1.5 + 1.333…)/2 ≈ 1.4167",
            "i=3: x ≈ (1.4167 + 1.4118)/2 ≈ 1.4142",
          ],
          answer: "x ≈ 1.4142 (≈ √2)",
        },
      ],
      tips: ["Use a table: |i|x_old|x_new|", "Newton's iteration: xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)"],
      examQuestion: {
        problem: "Bisection on f(x) = x² − 3 in [1, 2]. Two iterations.",
        solution: [
          "Mid = 1.5; f(1.5) = −0.75 < 0 ⇒ root in [1.5, 2]",
          "Mid = 1.75; f(1.75) = 0.0625 > 0 ⇒ root in [1.5, 1.75]",
          "After 2 iterations: root ∈ [1.5, 1.75]",
        ],
        answer: "Interval [1.5, 1.75]",
        marks: 3,
      },
      quiz: [
        { question: "← in pseudocode means:", options: ["Equality test", "Assignment", "Subtraction", "Pointer"], correctAnswer: 1, explanation: "Assignment." },
        { question: "Bisection requires f(a)·f(b):", options: ["= 0", "> 0", "< 0", "Any sign"], correctAnswer: 2, explanation: "Sign change ⇒ root." },
        { question: "Newton iteration:", options: ["xₙ − f/f'", "xₙ + f", "f(xₙ)", "xₙ·f"], correctAnswer: 0, explanation: "Standard formula." },
      ],
    },
  ],
};
