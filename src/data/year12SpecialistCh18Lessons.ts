import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 18: Cumulative Revision (All Chapters)

export const year12SpecialistCh18Lessons: TopicLessonsMap = {
  "y12s-ch18-18a-tech-free": [
    {
      title: "Cumulative Tech-Free Revision",
      explanation:
        "Final-exam-ready tech-free revision spans the entire Specialist syllabus:\n  • Proof and induction (Ch 2)\n  • Circular functions and identities (Ch 3)\n  • Vectors, lines and planes (Ch 4–5)\n  • Complex numbers (Ch 6)\n  • Differentiation, integration (Ch 8–10)\n  • Differential equations (Ch 11)\n  • Kinematics and vector calculus (Ch 12–13)\n  • Statistical inference (Ch 15–16)\n\nFocus on EXACT arithmetic, identity manipulation, and clean algebra.",
      keyPoints: [
        "Memorise key identities and standard antiderivatives",
        "Practice mental conversions: π/6, π/4, π/3 trig values",
        "Always answer in exact form (surds, π, e, ln)",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫_0^1 1/(1 + x²) dx exactly.",
          steps: ["= [arctan x]_0^1 = π/4 − 0 = π/4"],
          answer: "π/4",
        },
      ],
      tips: ["Build a one-page formula sheet for quick recall", "Solve at least one tech-free question per topic per week"],
      examQuestion: {
        problem: "Show that 1 + cos 2θ = 2 cos²θ, and use it to integrate ∫ cos²θ dθ.",
        solution: [
          "cos 2θ = 2 cos²θ − 1 ⇒ 1 + cos 2θ = 2 cos²θ ✓",
          "∫ cos²θ dθ = ∫ (1 + cos 2θ)/2 dθ = θ/2 + (sin 2θ)/4 + C",
        ],
        answer: "θ/2 + (sin 2θ)/4 + C",
        marks: 3,
      },
      quiz: [
        { question: "∫ sec² x dx =", options: ["sec x", "tan x + C", "−cot x", "ln|sec x|"], correctAnswer: 1, explanation: "Standard." },
        { question: "Sum of independent normals is:", options: ["Uniform", "Normal", "Skewed", "Discrete"], correctAnswer: 1, explanation: "Closed under addition." },
        { question: "Tech-free answers should be:", options: ["Decimal", "Exact", "Approximate", "Rounded"], correctAnswer: 1, explanation: "Exact form." },
      ],
    },
  ],
  "y12s-ch18-18b-multiple-choice": [
    {
      title: "Cumulative MCQ Revision",
      explanation:
        "Section A MCQ across the syllabus:\n  • Time pressure: ~2 minutes per question\n  • Eliminate impossible options first\n  • Use special values to verify\n  • Recognise common distractor patterns (off-by-π, sign errors, σ vs SE)",
      keyPoints: [
        "Trust the elimination strategy",
        "Skip and return for unfamiliar items",
        "Read every option before deciding",
      ],
      workedExamples: [
        {
          problem: "Which is a unit vector parallel to 6i + 8j? A) (3, 4), B) (3/5, 4/5), C) (6/10, 8/10), D) Both B and C.",
          steps: ["|6i+8j|=10; unit = (3/5, 4/5)", "B = C = (0.6, 0.8)"],
          answer: "D",
        },
      ],
      tips: ["Watch options that are mathematically equivalent", "Compute SE not σ for inference items"],
      examQuestion: {
        problem: "If z = 1 + i, then z⁴ equals: A) 4, B) −4, C) 4i, D) 16.",
        solution: ["z² = 2i; z⁴ = (2i)² = −4"],
        answer: "B",
        marks: 1,
      },
      quiz: [
        { question: "Time per MCQ:", options: ["~5 min", "~30 sec", "~2 min", "Unlimited"], correctAnswer: 2, explanation: "20 in 40 min." },
        { question: "First MCQ tactic:", options: ["Skip", "Eliminate impossibles", "Solve fully", "Guess C"], correctAnswer: 1, explanation: "Save time." },
        { question: "(1+i)² =", options: ["2i", "1+2i", "0", "2"], correctAnswer: 0, explanation: "1+2i+i²." },
      ],
    },
  ],
  "y12s-ch18-18c-extended-response": [
    {
      title: "Cumulative Extended-Response Revision",
      explanation:
        "Section B questions integrate multiple topics:\n  • Vector kinematics + integration\n  • Complex numbers + locus + algebra\n  • DEs + modelling + interpretation\n  • Inference + decision-making\n\nGeneral approach:\n  1. Read ALL parts before starting\n  2. Set up clearly with definitions and assumptions\n  3. Show every algebraic step\n  4. Interpret results in context\n  5. Reuse earlier parts in later answers",
      keyPoints: [
        "Method marks dominate scoring",
        "Use exact values throughout; round only at the end",
        "Communicate physical meaning where applicable",
      ],
      workedExamples: [
        {
          problem: "Particle: r(t) = (cos t) i + (sin t) j + t k, t ≥ 0. Find velocity, speed, and arc length from t=0 to π.",
          steps: [
            "v(t) = (−sin t, cos t, 1); |v| = √2",
            "Arc length = ∫_0^π √2 dt = √2·π",
          ],
          answer: "v = (−sin t, cos t, 1); speed √2; length √2 π",
        },
      ],
      tips: ["Sketch where helpful (loci, motion paths)", "Cite earlier results explicitly: 'From part (a)…'"],
      examQuestion: {
        problem: "For dy/dx = 2xy with y(0) = 3, find y(x). Then find x where y = 12.",
        solution: [
          "Separate: dy/y = 2x dx ⇒ ln|y| = x² + C",
          "y(0) = 3 ⇒ C = ln 3 ⇒ y = 3 e^(x²)",
          "12 = 3 e^(x²) ⇒ e^(x²) = 4 ⇒ x² = ln 4 ⇒ x = ±√(ln 4)",
        ],
        answer: "y = 3 e^(x²); x = ±√(ln 4)",
        marks: 5,
      },
      quiz: [
        { question: "Best first action in extended-response:", options: ["Read all parts", "Guess (a)", "Skip", "Use CAS"], correctAnswer: 0, explanation: "Plan ahead." },
        { question: "Round at:", options: ["Each step", "End only", "Halfway", "Never"], correctAnswer: 1, explanation: "Avoid drift." },
        { question: "Cite earlier results to:", options: ["Save time", "Earn method marks", "Both", "Never"], correctAnswer: 2, explanation: "Standard practice." },
      ],
    },
  ],
};
