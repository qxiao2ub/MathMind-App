import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 12: Kinematics (1D Rectilinear Motion)

export const year12SpecialistCh12Lessons: TopicLessonsMap = {
  "y12s-ch12-12a-pos-vel-acc": [
    {
      title: "Position, Velocity and Acceleration",
      explanation:
        "For a particle moving along a line:\n  • Position: x(t)\n  • Velocity: v(t) = dx/dt\n  • Acceleration: a(t) = dv/dt = d²x/dt²\n\nReverse via integration:\n  • x(t) = ∫ v dt + C₁\n  • v(t) = ∫ a dt + C₂\n\nSpeed = |v|; distance travelled = ∫|v| dt; displacement = ∫ v dt.",
      keyPoints: [
        "Velocity is signed; speed is magnitude",
        "Distance ≠ displacement when direction changes",
        "Use initial conditions to fix integration constants",
      ],
      workedExamples: [
        {
          problem: "v(t) = 3t² − 6t, x(0) = 1. Find x(t).",
          steps: ["x = ∫(3t² − 6t) dt + C = t³ − 3t² + C", "x(0)=1 ⇒ C=1", "x(t) = t³ − 3t² + 1"],
          answer: "t³ − 3t² + 1",
        },
      ],
      tips: ["Sketch v(t) to identify direction changes", "Split distance integral at zeros of v(t)"],
      formulas: [{ name: "Distance", formula: "d = ∫_a^b |v(t)| dt" }],
      examQuestion: {
        problem: "v(t) = t − 2 m/s for 0 ≤ t ≤ 4. Find displacement and total distance.",
        solution: [
          "Displacement = ∫_0^4 (t−2) dt = [t²/2 − 2t]_0^4 = 8 − 8 = 0",
          "v=0 at t=2; |v| split: ∫_0^2 (2−t) dt + ∫_2^4 (t−2) dt = 2 + 2 = 4 m",
        ],
        answer: "Displacement 0; distance 4 m",
        marks: 4,
      },
      quiz: [
        { question: "Velocity is:", options: ["dx/dt", "x·t", "d²x/dt²", "∫x dt"], correctAnswer: 0, explanation: "Rate of position change." },
        { question: "Distance uses:", options: ["∫v dt", "∫|v| dt", "max v", "v(b)−v(a)"], correctAnswer: 1, explanation: "Magnitude integral." },
        { question: "Acceleration =", options: ["dx/dt", "dv/dt", "x²", "∫v dt"], correctAnswer: 1, explanation: "Rate of velocity change." },
      ],
    },
  ],
  "y12s-ch12-12b-constant-acc": [
    {
      title: "Constant Acceleration",
      explanation:
        "When a is constant, the SUVAT equations apply (u = initial velocity, v = final velocity, s = displacement, t = time, a = acceleration):\n  • v = u + at\n  • s = ut + ½at²\n  • v² = u² + 2as\n  • s = ½(u + v)t",
      keyPoints: [
        "Use only when acceleration is constant",
        "Sign convention: choose positive direction consistently",
        "Pick the equation that uses your three knowns and one unknown",
      ],
      workedExamples: [
        {
          problem: "Car accelerates uniformly from rest at 2 m/s² for 5 s. Find distance.",
          steps: ["u = 0, a = 2, t = 5", "s = 0 + ½·2·25 = 25 m"],
          answer: "25 m",
        },
      ],
      tips: ["List u, v, a, s, t and circle the unknown", "Use g = 9.8 m/s² downward (or as stated) for free fall"],
      examQuestion: {
        problem: "Object thrown UP at 20 m/s from ground; g = 10 m/s² down. Find max height and time.",
        solution: [
          "At top v = 0: 0 = 20 − 10t ⇒ t = 2 s",
          "s = 20·2 − ½·10·4 = 40 − 20 = 20 m",
        ],
        answer: "20 m at t = 2 s",
        marks: 3,
      },
      quiz: [
        { question: "Valid equation only when:", options: ["v constant", "a constant", "s = 0", "t = 0"], correctAnswer: 1, explanation: "SUVAT requires constant a." },
        { question: "v² = u² + 2as gives:", options: ["Time", "Final velocity squared", "Acceleration", "Displacement only"], correctAnswer: 1, explanation: "Velocity from displacement." },
        { question: "Free fall a (downward positive):", options: ["0", "g", "2g", "−g"], correctAnswer: 1, explanation: "Standard." },
      ],
    },
  ],
  "y12s-ch12-12c-vt-graphs": [
    {
      title: "Velocity–Time Graphs",
      explanation:
        "On a v(t) graph:\n  • Slope = acceleration\n  • Signed area under curve = displacement\n  • Total area between curve and t-axis = distance travelled\n  • Crossings of t-axis indicate direction changes\n\nPiecewise-linear v(t) corresponds to piecewise-constant acceleration.",
      keyPoints: [
        "Read slopes for accelerations",
        "Trapezoidal areas give displacements",
        "Sign of v indicates direction",
      ],
      workedExamples: [
        {
          problem: "v(t) increases linearly from 0 to 10 m/s over 5 s, then constant. Find displacement at t = 5.",
          steps: ["Triangle area = ½·5·10 = 25 m"],
          answer: "25 m",
        },
      ],
      tips: ["Use geometric formulas (triangle/trapezium) when v(t) is linear", "Watch sign — area below t-axis is negative displacement"],
      examQuestion: {
        problem: "v(t) = 4 m/s for 0≤t≤3, drops linearly to −2 m/s by t=6. Find displacement and distance.",
        solution: [
          "Phase 1: rectangle 4·3 = 12",
          "Phase 2: line from 4 to −2; crosses zero at t = 5",
          "Triangle 3 to 5: ½·2·4 = 4; triangle 5 to 6: ½·1·2 = −1",
          "Displacement = 12 + 4 − 1 = 15 m; Distance = 12 + 4 + 1 = 17 m",
        ],
        answer: "Displacement 15 m; distance 17 m",
        marks: 4,
      },
      quiz: [
        { question: "Slope of v(t) =", options: ["Position", "Acceleration", "Distance", "Speed"], correctAnswer: 1, explanation: "dv/dt." },
        { question: "Area under v(t):", options: ["Speed", "Acceleration", "Displacement", "Force"], correctAnswer: 2, explanation: "Signed integral of v." },
        { question: "v(t) = 0 means:", options: ["Stationary", "Maximum speed", "Direction change point", "Both 1 & 3"], correctAnswer: 3, explanation: "Often a turning point." },
      ],
    },
  ],
  "y12s-ch12-12d-v-fx-a-fv": [
    {
      title: "ODEs of the form v = f(x) and a = f(v)",
      explanation:
        "When velocity depends on position, use:\n  v·(dv/dx) = a (since dv/dt = (dv/dx)·(dx/dt) = v·dv/dx).\n\nWhen acceleration depends on velocity:\n  • a = dv/dt = f(v): separate dv/f(v) = dt\n  • OR a = v·dv/dx = f(v): separate v dv/f(v) = dx",
      keyPoints: [
        "Two useful forms: dv/dt and v·dv/dx",
        "Choose based on whether t or x appears explicitly",
        "Use initial conditions to fix constants",
      ],
      workedExamples: [
        {
          problem: "If v = 2x and x(0) = 1, find x(t).",
          steps: [
            "dx/dt = 2x; dx/x = 2 dt",
            "ln|x| = 2t + C; x(0)=1 ⇒ C = 0",
            "x(t) = e^(2t)",
          ],
          answer: "x = e^(2t)",
        },
      ],
      tips: ["Choose form based on independent variable in expression", "Verify by re-deriving v"],
      formulas: [{ name: "Acceleration", formula: "a = v·dv/dx" }],
      examQuestion: {
        problem: "If a = −2v and v(0) = 4, find v(t) and x(t) given x(0) = 0.",
        solution: [
          "dv/dt = −2v ⇒ v = 4 e^(−2t)",
          "x = ∫_0^t 4 e^(−2s) ds = 2(1 − e^(−2t))",
        ],
        answer: "v = 4 e^(−2t); x = 2(1 − e^(−2t))",
        marks: 4,
      },
      quiz: [
        { question: "If a = f(v) only, separate:", options: ["dx/v = dt", "dv/f(v) = dt", "f(v) dv = dx", "v dv = dt"], correctAnswer: 1, explanation: "Separation in t." },
        { question: "v·dv/dx = a comes from:", options: ["Product rule", "Chain rule", "Quotient rule", "FTC"], correctAnswer: 1, explanation: "Time chain rule." },
        { question: "Useful when expression contains:", options: ["t only", "x only", "Both", "Neither"], correctAnswer: 1, explanation: "Position-dependent." },
      ],
    },
  ],
  "y12s-ch12-12e-other-acc": [
    {
      title: "Other Expressions for Acceleration",
      explanation:
        "Acceleration can be written in several equivalent forms:\n  • a = dv/dt (rate w.r.t. time)\n  • a = v·dv/dx (rate w.r.t. position)\n  • a = d²x/dt² (second derivative of position)\n  • a = d/dx(½v²) — useful for energy-style problems\n\nChoose the form that matches the variables in the problem.",
      keyPoints: [
        "All four expressions are equivalent",
        "d/dx(½v²) = v·dv/dx",
        "Pick the form matching given/required variables",
      ],
      workedExamples: [
        {
          problem: "If a = 3x² and v(0) = 0 at x = 0, find v(x).",
          steps: [
            "v·dv/dx = 3x² ⇒ ∫v dv = ∫3x² dx",
            "v²/2 = x³ + C; v=0 at x=0 ⇒ C=0",
            "v² = 2x³ ⇒ v = √(2x³) (taking +ve root)",
          ],
          answer: "v = √(2x³)",
        },
      ],
      tips: ["The 'energy' form ½v² is essential when integrating w.r.t. x", "Always state the sign of the square root from context"],
      formulas: [{ name: "Energy form", formula: "a = d/dx(½v²)" }],
      examQuestion: {
        problem: "Acceleration a = −9x (SHM-like). If v = 4 at x = 0, find v as a function of x.",
        solution: [
          "v dv/dx = −9x ⇒ ∫v dv = −9 ∫x dx",
          "v²/2 = −9x²/2 + C; v=4 at x=0 ⇒ C = 8",
          "v² = 16 − 9x²",
        ],
        answer: "v² = 16 − 9x²",
        marks: 3,
      },
      quiz: [
        { question: "d/dx(½v²) =", options: ["v", "v·dv/dx", "dv/dx", "v²"], correctAnswer: 1, explanation: "Chain rule." },
        { question: "For a = f(x) with v given, use:", options: ["dv/dt", "v·dv/dx", "d²x/dt²", "Euler"], correctAnswer: 1, explanation: "Position dependence." },
        { question: "v² = ... gives:", options: ["Speed only", "Direction", "Both via ±√", "Time"], correctAnswer: 2, explanation: "Choose sign from context." },
      ],
    },
  ],
  "y12s-ch12-review": [
    {
      title: "Review of Chapter 12 — Kinematics",
      explanation:
        "Consolidates 1D motion: position, velocity, acceleration, SUVAT, v–t graph reading, and ODEs in kinematics. Recognise which technique fits each scenario.",
      keyPoints: [
        "Differentiate to go x → v → a; integrate to reverse",
        "SUVAT only when a is constant",
        "Use v·dv/dx when expression depends on position",
        "Distance ≠ displacement when v changes sign",
      ],
      workedExamples: [
        {
          problem: "Particle has a(t) = 6t − 4 m/s², v(0) = 2, x(0) = 0. Find x(2).",
          steps: [
            "v(t) = 3t² − 4t + 2; v(2) = 12 − 8 + 2 = 6 m/s",
            "x(t) = t³ − 2t² + 2t; x(2) = 8 − 8 + 4 = 4 m",
          ],
          answer: "x(2) = 4 m",
        },
      ],
      tips: ["Always state initial conditions", "Verify using SUVAT for constant-a problems"],
      examQuestion: {
        problem: "A particle has a = −kv with v(0) = v₀ > 0, x(0) = 0. Find limiting position as t→∞.",
        solution: [
          "dv/dt = −kv ⇒ v = v₀ e^(−kt)",
          "x(t) = ∫_0^t v₀ e^(−ks) ds = (v₀/k)(1 − e^(−kt))",
          "As t→∞, x → v₀/k",
        ],
        answer: "x_∞ = v₀/k",
        marks: 4,
      },
      quiz: [
        { question: "a = f(t): integrate w.r.t.", options: ["x", "t", "v", "Either"], correctAnswer: 1, explanation: "Time-based." },
        { question: "Constant a, asked v² from s:", options: ["v=u+at", "s=ut+½at²", "v²=u²+2as", "s=½(u+v)t"], correctAnswer: 2, explanation: "Direct relation." },
        { question: "Direction change at:", options: ["a=0", "v=0", "x=0", "t=0"], correctAnswer: 1, explanation: "Velocity sign change." },
      ],
    },
  ],
};
