import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 14: Revision of Chapters 8–13

export const year12SpecialistCh14Lessons: TopicLessonsMap = {
  "y12s-ch14-14a-tech-free": [
    {
      title: "Technology-Free Revision (Ch 8–13)",
      explanation:
        "Tech-free Specialist demands fluent calculus and vector arithmetic:\n  • Differentiation: chain, product, quotient, implicit, inverse trig\n  • Integration: standard antiderivatives, by parts (small cases), simple substitutions\n  • Vector calculus: differentiate component-wise\n  • Differential equations: separation, simple ODEs solvable by inspection",
      keyPoints: [
        "Leave answers in exact form",
        "Practice mental arithmetic for trig and log values",
        "Memorise inverse-trig derivatives and antiderivatives",
      ],
      workedExamples: [
        {
          problem: "Find ∫ 1/(1 + x²) dx, evaluated from 0 to 1.",
          steps: ["= [arctan x]_0^1 = π/4 − 0 = π/4"],
          answer: "π/4",
        },
      ],
      tips: ["Use identities to avoid heavy computation", "Verify by differentiating answers"],
      examQuestion: {
        problem: "Solve dy/dx = y/x for x > 0 with y(1) = 2.",
        solution: [
          "Separate: dy/y = dx/x",
          "ln|y| = ln|x| + C ⇒ y = Ax",
          "y(1) = 2 ⇒ A = 2",
          "y = 2x",
        ],
        answer: "y = 2x",
        marks: 3,
      },
      quiz: [
        { question: "Tech-free integral form:", options: ["Decimal", "Exact (e.g. π/4)", "Approximation", "Skip"], correctAnswer: 1, explanation: "Exact required." },
        { question: "d/dx arctan x =", options: ["1/√(1−x²)", "1/(1+x²)", "−1/(1+x²)", "1/x"], correctAnswer: 1, explanation: "Standard." },
        { question: "Simplify before differentiating:", options: ["Never", "Always when possible", "Only at end", "Only logs"], correctAnswer: 1, explanation: "Reduces error." },
      ],
    },
  ],
  "y12s-ch14-14b-multiple-choice": [
    {
      title: "Multiple-Choice Strategy (Ch 8–13)",
      explanation:
        "Section A MCQ tactics for calculus and motion topics:\n  • Test special values (t = 0, x = 1) to eliminate distractors\n  • Check dimensions (rate vs quantity, vector vs scalar)\n  • For ODE answers, differentiate options and verify\n  • Eliminate by sign: e.g., decreasing function ⇒ negative slope",
      keyPoints: [
        "Differentiate or integrate to verify",
        "Eliminate by domain/range mismatch",
        "Watch units (m/s vs m/s²)",
      ],
      workedExamples: [
        {
          problem: "Which is dy/dx for y = arcsin(x²)? A) 2x/√(1−x⁴), B) 2x/√(1−x²), C) 1/√(1−x²), D) x/√(1−x²).",
          steps: ["u = x²; u' = 2x", "dy/dx = 2x/√(1 − u²) = 2x/√(1 − x⁴)"],
          answer: "A",
        },
      ],
      tips: ["Memorise the chain-rule version of inverse-trig derivatives", "Watch quartic vs quadratic under the radical"],
      examQuestion: {
        problem: "Speed of particle r(t) = (3t, t², 2t³) at t=1: A) √14, B) √20, C) √27, D) √49.",
        solution: ["v(1) = (3, 2, 6); |v|² = 9+4+36 = 49; |v| = 7"],
        answer: "D (√49 = 7)",
        marks: 1,
      },
      quiz: [
        { question: "Speed at point uses:", options: ["r(t)", "|r'(t)|", "r''(t)", "r·v"], correctAnswer: 1, explanation: "Magnitude of velocity." },
        { question: "MCQ first move:", options: ["Solve fully", "Eliminate impossible", "Skip", "Random"], correctAnswer: 1, explanation: "Save time." },
        { question: "ODE solution check by:", options: ["Substituting back", "Sketching", "Reading", "Differentiating answer"], correctAnswer: 3, explanation: "Verify dy/dx form." },
      ],
    },
  ],
  "y12s-ch14-14c-extended-response": [
    {
      title: "Extended-Response Strategy (Ch 8–13)",
      explanation:
        "Calculus and motion problems often span multiple parts:\n  • Set up integral or ODE in (a)\n  • Solve in (b)\n  • Interpret physical/graphical meaning in (c)\n  • Generalise or extend in (d)\n\nShow algebra clearly even when CAS is allowed.",
      keyPoints: [
        "Method marks > final-answer marks",
        "State physical interpretation explicitly",
        "Carry exact values through; round only at end",
      ],
      workedExamples: [
        {
          problem: "Particle has velocity v(t) = 6 − 2t. (a) When at rest? (b) Position from t = 0 to rest if x(0) = 0?",
          steps: [
            "(a) 6 − 2t = 0 ⇒ t = 3",
            "(b) x(t) = ∫(6−2s) ds = 6t − t²; x(3) = 18 − 9 = 9 m",
          ],
          answer: "Rest at t = 3 s; position 9 m",
        },
      ],
      tips: ["Read all parts before starting", "Re-use earlier results explicitly"],
      examQuestion: {
        problem: "Tank with V = πr²h, h decreases via dV/dt = −2 m³/min. Radius 5 m. Find dh/dt.",
        solution: [
          "V = 25π h ⇒ dV/dt = 25π·dh/dt",
          "−2 = 25π·dh/dt ⇒ dh/dt = −2/(25π) m/min",
        ],
        answer: "dh/dt = −2/(25π) m/min",
        marks: 3,
      },
      quiz: [
        { question: "First action:", options: ["Solve (a)", "Read all parts", "Skip", "Use CAS"], correctAnswer: 1, explanation: "Plan." },
        { question: "Method marks reward:", options: ["Final answer", "Working steps", "Speed", "Diagrams"], correctAnswer: 1, explanation: "Show process." },
        { question: "Round at:", options: ["Each step", "End only", "Halfway", "Never"], correctAnswer: 1, explanation: "Avoid drift." },
      ],
    },
  ],
  "y12s-ch14-14d-pseudocode": [
    {
      title: "Algorithms and Pseudocode (Ch 8–13)",
      explanation:
        "Pseudocode questions in calculus contexts test:\n  • Tracing iterative methods (Newton's, Euler's)\n  • Sum/integral approximations (trapezoidal, midpoint)\n  • Updating vector states in motion problems\n\nUse a tabular approach to track variables across iterations.",
      keyPoints: [
        "Tabulate variables row by row",
        "Watch loop bounds carefully",
        "State convergence criteria explicitly",
      ],
      workedExamples: [
        {
          problem: "Trace Euler with h = 0.5 for dy/dx = y, y(0) = 1, two steps.",
          steps: [
            "Step 1: y₁ = 1 + 0.5·1 = 1.5; x₁ = 0.5",
            "Step 2: y₂ = 1.5 + 0.5·1.5 = 2.25; x₂ = 1",
          ],
          answer: "y(1) ≈ 2.25 (true e ≈ 2.718)",
        },
      ],
      tips: ["Compare numerical answer with exact when possible", "Smaller h ⇒ better accuracy"],
      examQuestion: {
        problem: "Pseudocode: x ← 1; for i from 1 to 3: x ← x − (x² − 2)/(2x). Trace x.",
        solution: [
          "i=1: x = 1 − (−1)/2 = 1.5",
          "i=2: x = 1.5 − (0.25)/3 ≈ 1.4167",
          "i=3: x ≈ 1.4142 (Newton's method for √2)",
        ],
        answer: "x ≈ 1.4142 ≈ √2",
        marks: 3,
      },
      quiz: [
        { question: "Newton iteration:", options: ["x − f/f'", "x + f", "f/f'", "x·f"], correctAnswer: 0, explanation: "Standard." },
        { question: "Smaller h in Euler:", options: ["Larger error", "Smaller error", "No effect", "Diverges"], correctAnswer: 1, explanation: "Better tangent." },
        { question: "Best tracing tool:", options: ["Diagram", "Variable table", "Graph", "Memory only"], correctAnswer: 1, explanation: "Tabulate steps." },
      ],
    },
  ],
};
