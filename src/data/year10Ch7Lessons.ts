import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 7: Trigonometry
export const year10Ch7Lessons: TopicLessonsMap = {
  "y10-trig-ratios": [
    {
      title: "Trigonometric Ratios in Right Triangles",
      explanation:
        "OVERVIEW. In a right triangle, the three primary ratios are:\n  sin θ = Opposite / Hypotenuse\n  cos θ = Adjacent / Hypotenuse\n  tan θ = Opposite / Adjacent\nMnemonic: SOH-CAH-TOA.\n\nUSAGE. Identify the angle, label the three sides, choose the ratio that uses the two known/unknown sides.",
      keyPoints: ["SOH-CAH-TOA", "Hypotenuse = longest side, opposite the right angle", "Opposite is across from the angle"],
      workedExamples: [
        { problem: "Right triangle, hypotenuse 10, angle 30°. Find opposite.", steps: ["sin 30° = opp/10", "opp = 10·0.5"], answer: "5" },
        { problem: "Adjacent 8, angle 25°. Find hypotenuse.", steps: ["cos 25° = 8/h", "h = 8/cos25° ≈ 8.83"], answer: "≈ 8.83" },
      ],
      tips: ["Set calculator to DEGREES."],
      commonErrors: ["Wrong calculator mode (radians vs degrees)"],
      summary: ["EXAM INSIGHT: Always label sides before choosing the ratio."],
      practice: [
        { question: "tan 45° = ?", answer: "1" },
        { question: "Hypotenuse 20, angle 60°. Opposite?", answer: "10√3 ≈ 17.32" },
      ],
      quiz: [
        { question: "sin 30° = ?", options: ["0", "0.5", "√3/2", "1"], correctAnswer: 1, explanation: "Standard exact value." },
      ],
    },
  ],
  "y10-finding-angles": [
    {
      title: "Finding Unknown Angles with Inverse Trig",
      explanation:
        "When two sides are known, find the angle using inverse trig:\n  θ = sin⁻¹(opp/hyp), cos⁻¹(adj/hyp), or tan⁻¹(opp/adj).",
      keyPoints: ["Use sin⁻¹/cos⁻¹/tan⁻¹", "Calculator must be in DEG mode", "Round to required precision"],
      workedExamples: [
        { problem: "Opp=5, hyp=10. Find angle.", steps: ["sin θ = 0.5", "θ = sin⁻¹(0.5)"], answer: "30°" },
      ],
      tips: ["Inverse trig keys are 2nd functions on most calculators."],
      commonErrors: ["Confusing sin⁻¹ with 1/sin"],
      summary: ["EXAM INSIGHT: Always state which ratio you used."],
      practice: [{ question: "tan θ = 1. θ?", answer: "45°" }],
      quiz: [{ question: "cos⁻¹(1/2) = ?", options: ["30°", "45°", "60°", "90°"], correctAnswer: 2, explanation: "Standard exact value." }],
    },
  ],
  "y10-2d-applications": [
    {
      title: "2D Applications of Trigonometry",
      explanation:
        "Apply trig to ladders, ramps, towers, shadows, and angles of elevation/depression. ANGLE OF ELEVATION: looking up from horizontal. ANGLE OF DEPRESSION: looking down from horizontal. They are equal (alternate angles) when measured between the same horizontal lines.",
      keyPoints: ["Sketch a clearly labelled right triangle", "Elevation = depression (alternate angles)"],
      workedExamples: [
        { problem: "Tower 50m. Angle of elevation 25° from a point. Distance to base?", steps: ["tan 25° = 50/d", "d = 50/tan25° ≈ 107.2"], answer: "≈ 107.2 m" },
      ],
      tips: ["Always sketch the situation first."],
      commonErrors: ["Mixing elevation and depression"],
      summary: ["EXAM INSIGHT: Diagrams earn marks even when not asked."],
      practice: [{ question: "Ramp rises 1m over 4m horizontal. Angle of incline?", answer: "tan⁻¹(1/4) ≈ 14.04°" }],
      quiz: [{ question: "Angle of elevation 30°, height 100. Distance?", options: ["50", "100√3", "100/√3", "200"], correctAnswer: 1, explanation: "tan 30° = 100/d → d = 100·√3." }],
    },
  ],
  "y10-bearings": [
    {
      title: "Bearings and Navigation",
      explanation:
        "Three-figure bearings are measured CLOCKWISE from NORTH (0–360°), e.g. 075°, 200°. Use trig with right triangles formed by N–S and E–W components.",
      keyPoints: ["Always 3 digits", "Clockwise from north", "Sketch N as up arrow"],
      workedExamples: [
        { problem: "Walk 5 km on bearing 060°. East and north components?", steps: ["East = 5 sin60° = 5(√3/2)", "North = 5 cos60° = 2.5"], answer: "East ≈ 4.33 km, North = 2.5 km" },
      ],
      tips: ["Bearing 090° = due East."],
      commonErrors: ["Measuring anticlockwise"],
      summary: ["EXAM INSIGHT: Always include a clear N arrow on diagrams."],
      practice: [{ question: "Bearing of east?", answer: "090°" }],
      quiz: [{ question: "Bearing 270° = ?", options: ["North", "East", "South", "West"], correctAnswer: 3, explanation: "270° clockwise from N is West." }],
    },
  ],
  "y10-3d-applications": [
    {
      title: "3D Applications of Trigonometry",
      explanation:
        "3D trig problems are solved by identifying right triangles within solids (e.g., box diagonals, pyramid heights). Often: solve a 2D problem to find an unknown side, then use that in another 2D right triangle.",
      keyPoints: ["Decompose 3D into 2D right triangles", "Use Pythagoras for diagonals", "Trig for angles"],
      workedExamples: [
        { problem: "Box 3×4×12. Angle between space diagonal and base?", steps: ["Base diagonal = 5", "Height = 12, Diagonal = 13", "tan θ = 12/5", "θ ≈ 67.4°"], answer: "≈ 67.4°" },
      ],
      tips: ["Build a clear 3D sketch with right angles marked."],
      commonErrors: ["Mixing slant and perpendicular heights"],
      summary: ["EXAM INSIGHT: Two-step calculations are standard 10A."],
      practice: [{ question: "Cube side 6. Angle between space diagonal and a face diagonal?", answer: "tan⁻¹(1/√2) ≈ 35.26°" }],
      quiz: [{ question: "Cube side 1. Space diagonal length?", options: ["√2", "√3", "2", "1"], correctAnswer: 1, explanation: "√(1+1+1) = √3." }],
    },
  ],
  "y10-sine-rule": [
    {
      title: "The Sine Rule",
      explanation:
        "For any triangle: a / sin A = b / sin B = c / sin C.\n\nUSE WHEN: you know AAS, ASA, or SSA (ambiguous).\n\nAMBIGUOUS CASE: SSA may give two valid triangles when the given side opposite the angle is shorter than the other given side.",
      keyPoints: ["Pair side with OPPOSITE angle", "Use for AAS/ASA/SSA", "Watch ambiguous case"],
      workedExamples: [
        { problem: "Triangle: A=40°, a=10, B=70°. Find b.", steps: ["b/sin70° = 10/sin40°", "b = 10·sin70°/sin40° ≈ 14.62"], answer: "≈ 14.62" },
      ],
      tips: ["Check if angle could be obtuse in SSA."],
      commonErrors: ["Pairing the wrong side and angle"],
      summary: ["EXAM INSIGHT: Always justify using the sine rule."],
      practice: [{ question: "A=30°, a=5, B=90°. b?", answer: "10" }],
      quiz: [{ question: "Sine rule pairs:", options: ["side with adjacent angle", "side with opposite angle", "any pair", "longest side only"], correctAnswer: 1, explanation: "Side opposite its angle." }],
    },
  ],
  "y10-cosine-rule": [
    {
      title: "The Cosine Rule",
      explanation:
        "For any triangle: c² = a² + b² − 2ab cos C.\n\nUSE WHEN: SAS (find third side) or SSS (find an angle):\n  cos C = (a² + b² − c²) / (2ab).",
      keyPoints: ["SAS or SSS", "Generalises Pythagoras", "Rearrange for angles"],
      workedExamples: [
        { problem: "a=7, b=10, C=60°. Find c.", steps: ["c² = 49+100 − 2·7·10·0.5", "= 149 − 70 = 79", "c = √79 ≈ 8.89"], answer: "≈ 8.89" },
      ],
      tips: ["Cosine rule reduces to Pythagoras when C=90°."],
      commonErrors: ["Calculator order of operations"],
      summary: ["EXAM INSIGHT: SAS triangles need cosine rule."],
      practice: [{ question: "a=3, b=4, C=90°. c?", answer: "5" }],
      quiz: [{ question: "Cosine rule when SSS gives:", options: ["Side", "Area", "Angle", "Perimeter"], correctAnswer: 2, explanation: "Solve for an angle." }],
    },
  ],
  "y10-area-triangle": [
    {
      title: "Area of a Triangle Using ½ab sin C",
      explanation: "When you know two sides and the included angle: Area = ½ab sin C.",
      keyPoints: ["Two sides + included angle", "Angle must be BETWEEN the two sides"],
      workedExamples: [
        { problem: "a=6, b=8, C=30°. Area?", steps: ["½·6·8·sin30° = 24·0.5 = 12"], answer: "12 sq units" },
      ],
      tips: ["Convert to degree mode."],
      commonErrors: ["Using non-included angle"],
      summary: ["EXAM INSIGHT: Common in mixed trig problems."],
      practice: [{ question: "a=10, b=10, C=60°. Area?", answer: "25√3 ≈ 43.30" }],
      quiz: [{ question: "Area formula needs:", options: ["3 sides", "2 sides + included angle", "1 side + 2 angles", "Hypotenuse"], correctAnswer: 1, explanation: "½ab sin C." }],
    },
  ],
  "y10-unit-circle": [
    {
      title: "The Unit Circle",
      explanation:
        "The unit circle has radius 1 centred at the origin. For angle θ measured anticlockwise from the positive x-axis, the point on the circle is (cos θ, sin θ). This DEFINES sin and cos for any angle, including > 90° and negative.\n\nQUADRANT SIGNS (ASTC): All positive in Q1, Sin in Q2, Tan in Q3, Cos in Q4.",
      keyPoints: ["Point = (cos θ, sin θ)", "ASTC mnemonic", "Reference angle in each quadrant"],
      workedExamples: [
        { problem: "sin 150° = ?", steps: ["Q2: sin positive, reference 30°"], answer: "0.5" },
      ],
      tips: ["Sketch the unit circle for every problem."],
      commonErrors: ["Wrong sign in Q2-Q4"],
      summary: ["EXAM INSIGHT: Foundation for VCE Methods."],
      practice: [{ question: "cos 180° = ?", answer: "−1" }],
      quiz: [{ question: "tan 225° sign?", options: ["Positive", "Negative", "Zero", "Undefined"], correctAnswer: 0, explanation: "Q3: tan positive." }],
    },
  ],
  "y10-trig-graphs": [
    {
      title: "Graphs of Trigonometric Functions",
      explanation:
        "y = sin x: period 360°, range [−1,1].\ny = cos x: period 360°, range [−1,1], shifted 90° left of sine.\ny = tan x: period 180°, asymptotes at 90° + 180°n.\n\nTransformations y = a sin(b(x − c)) + d:\n  amplitude = |a|, period = 360°/|b|, phase shift = c, vertical shift = d.",
      keyPoints: ["sin/cos period 360°", "tan period 180°", "Amplitude = |a|", "Period = 360°/|b|"],
      workedExamples: [
        { problem: "y = 2 sin(2x). Amplitude and period?", steps: ["Amp = 2, period = 360/2 = 180°"], answer: "Amp 2, period 180°" },
      ],
      tips: ["Mark x-intercepts and turning points clearly."],
      commonErrors: ["Confusing horizontal stretch with shift"],
      summary: ["EXAM INSIGHT: Sketch over at least one full period."],
      practice: [{ question: "Period of y = cos(3x)?", answer: "120°" }],
      quiz: [{ question: "Amplitude of y = −4 sin x?", options: ["−4", "4", "1", "8"], correctAnswer: 1, explanation: "|a| = 4." }],
    },
  ],
  "y10-exact-values-equations": [
    {
      title: "Exact Values and Solving Trigonometric Equations",
      explanation:
        "EXACT VALUES (memorise):\n  sin 30°=½, cos 30°=√3/2, tan 30°=1/√3\n  sin 45°=cos 45°=√2/2, tan 45°=1\n  sin 60°=√3/2, cos 60°=½, tan 60°=√3\n\nSOLVING. For sin x = k in [0°, 360°]: find reference angle, then add solutions in each quadrant where sin is positive.",
      keyPoints: ["Standard exact values", "Reference angle method", "Multiple solutions in [0°, 360°]"],
      workedExamples: [
        { problem: "Solve sin x = ½ for x ∈ [0°, 360°].", steps: ["Reference = 30°", "Q1: 30°, Q2: 180−30=150°"], answer: "x = 30° or 150°" },
      ],
      tips: ["Always state the domain."],
      commonErrors: ["Giving only one solution"],
      summary: ["EXAM INSIGHT: Use ASTC + reference angle systematically."],
      practice: [{ question: "Solve cos x = −½ in [0°, 360°].", answer: "120°, 240°" }],
      quiz: [{ question: "tan 60° exact value?", options: ["1", "√3", "1/√3", "2"], correctAnswer: 1, explanation: "tan 60° = √3." }],
    },
  ],
};
