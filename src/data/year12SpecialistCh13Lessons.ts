import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 13: Vector Functions and Vector Calculus

export const year12SpecialistCh13Lessons: TopicLessonsMap = {
  "y12s-ch13-13a-vector-functions": [
    {
      title: "Vector Functions",
      explanation:
        "A vector function r(t) assigns a vector to each scalar t:\n  r(t) = x(t) i + y(t) j + z(t) k\n\nDomain: set of t for which all components are defined.\nRange: the set of vectors traced out (often a curve in 2D/3D).",
      keyPoints: [
        "Components are scalar functions of t",
        "Vector function defines a parametric curve",
        "Domain restricted by smallest valid component domain",
      ],
      workedExamples: [
        {
          problem: "State the domain of r(t) = ln(t) i + √(4 − t) j.",
          steps: ["ln t needs t > 0; √(4−t) needs t ≤ 4", "Domain: 0 < t ≤ 4"],
          answer: "(0, 4]",
        },
      ],
      tips: ["Domain = intersection of component domains", "Sketch parametrically by tabulating (t, r(t))"],
      examQuestion: {
        problem: "Sketch the curve r(t) = (cos t) i + (sin t) j for 0 ≤ t ≤ 2π.",
        solution: ["x = cos t, y = sin t ⇒ x² + y² = 1", "Unit circle traced anticlockwise from (1, 0)"],
        answer: "Unit circle",
        marks: 2,
      },
      quiz: [
        { question: "r(t) outputs:", options: ["A scalar", "A vector", "A matrix", "An angle"], correctAnswer: 1, explanation: "Vector-valued." },
        { question: "Domain rule:", options: ["Largest", "Intersection of components", "Union", "ℝ"], correctAnswer: 1, explanation: "All components must exist." },
        { question: "r(t) = (t, t²) traces:", options: ["Line", "Circle", "Parabola", "Hyperbola"], correctAnswer: 2, explanation: "y = x²." },
      ],
    },
  ],
  "y12s-ch13-13b-position-vectors": [
    {
      title: "Position Vectors as a Function of Time",
      explanation:
        "If r(t) is the position vector of a particle at time t, the path traced is the locus of r(t).\n\nCartesian curve from parametric form:\n  • Eliminate t from the component equations\n\nUseful for identifying conics, lines, and helices.",
      keyPoints: [
        "Position changes with t; the curve is the trajectory",
        "Express in Cartesian by eliminating the parameter",
        "Same curve can have different parametrisations (different speeds)",
      ],
      workedExamples: [
        {
          problem: "r(t) = (2 cos t) i + (3 sin t) j. Find Cartesian equation.",
          steps: ["x/2 = cos t; y/3 = sin t", "(x/2)² + (y/3)² = 1 ⇒ ellipse"],
          answer: "x²/4 + y²/9 = 1",
        },
      ],
      tips: ["Trig identities help eliminate t", "Match Cartesian form to known conic shapes"],
      examQuestion: {
        problem: "Find the Cartesian equation of r(t) = (t + 1) i + (2t − 3) j.",
        solution: ["x = t + 1 ⇒ t = x − 1", "y = 2(x−1) − 3 = 2x − 5"],
        answer: "y = 2x − 5",
        marks: 2,
      },
      quiz: [
        { question: "Position vector traces:", options: ["A point", "A line only", "The particle's path", "A plane"], correctAnswer: 2, explanation: "Locus of r(t)." },
        { question: "Eliminate t to:", options: ["Find speed", "Get Cartesian", "Get vectors", "Solve ODE"], correctAnswer: 1, explanation: "Implicit form." },
        { question: "Different parametrisations may share:", options: ["Domain", "Same curve", "Speed", "Time"], correctAnswer: 1, explanation: "Same path, different traversal." },
      ],
    },
  ],
  "y12s-ch13-13c-vector-calculus": [
    {
      title: "Vector Calculus",
      explanation:
        "Differentiate component-wise:\n  r'(t) = x'(t) i + y'(t) j + z'(t) k\n\nRules:\n  • d/dt(c·r) = c·r'  (c constant)\n  • d/dt(r ± s) = r' ± s'\n  • d/dt(f(t)·r(t)) = f'·r + f·r'  (scalar × vector product rule)\n  • d/dt(r·s) = r'·s + r·s'  (dot product)\n  • d/dt(r × s) = r'×s + r×s'  (cross product, order matters!)\n\nIntegrate component-wise: ∫ r(t) dt = (∫x dt) i + (∫y dt) j + (∫z dt) k + C (vector constant).",
      keyPoints: [
        "Differentiate and integrate component by component",
        "Cross-product rule: order is preserved (anti-commutative)",
        "Constant of integration is a VECTOR",
      ],
      workedExamples: [
        {
          problem: "If r(t) = t² i + sin t j, find r'(t).",
          steps: ["r'(t) = 2t i + cos t j"],
          answer: "2t i + cos t j",
        },
      ],
      tips: ["Don't combine i, j components when differentiating — keep them separate", "Verify dot/cross-product rules with simple examples"],
      formulas: [{ name: "Component derivative", formula: "r'(t) = ⟨x', y', z'⟩" }],
      examQuestion: {
        problem: "Given r(t) = (eᵗ, t², ln t) for t > 0, find r'(t) and ∫ r(t) dt.",
        solution: [
          "r'(t) = (eᵗ, 2t, 1/t)",
          "∫ r dt = (eᵗ, t³/3, t ln t − t) + C",
        ],
        answer: "r' = (eᵗ, 2t, 1/t); ∫ = (eᵗ, t³/3, t ln t − t) + C",
        marks: 4,
      },
      quiz: [
        { question: "r'(t) is found by:", options: ["Magnitude", "Component-wise differentiation", "Implicit differentiation", "Integration"], correctAnswer: 1, explanation: "Each component separately." },
        { question: "∫ r(t) dt has +C of type:", options: ["Scalar", "Vector", "Matrix", "None"], correctAnswer: 1, explanation: "Vector constant." },
        { question: "d/dt (r × s) =", options: ["r'×s + s'×r", "r'×s + r×s'", "r×s'", "r·s'"], correctAnswer: 1, explanation: "Order preserved." },
      ],
    },
  ],
  "y12s-ch13-13d-velocity-acceleration": [
    {
      title: "Velocity and Acceleration on a Curve",
      explanation:
        "For position r(t):\n  • Velocity: v(t) = r'(t) (vector tangent to path)\n  • Speed: |v(t)| = √((dx/dt)² + (dy/dt)² + (dz/dt)²)\n  • Acceleration: a(t) = v'(t) = r''(t)\n  • Distance travelled from t = a to b: ∫_a^b |v(t)| dt (arc length)\n\nVelocity is always tangent; acceleration is generally NOT tangent (has tangential and normal components).",
      keyPoints: [
        "Velocity vector ⇒ direction of motion",
        "Speed = magnitude of velocity (scalar)",
        "Distance ≠ |displacement| (= |r(b) − r(a)|)",
      ],
      workedExamples: [
        {
          problem: "r(t) = (cos t, sin t, t). Find v, a, and speed.",
          steps: [
            "v = (−sin t, cos t, 1)",
            "a = (−cos t, −sin t, 0)",
            "|v| = √(sin²t + cos²t + 1) = √2",
          ],
          answer: "Constant speed √2; helical motion",
        },
      ],
      tips: ["Constant speed does NOT mean zero acceleration", "Direction changes contribute to acceleration"],
      examQuestion: {
        problem: "Particle: r(t) = (t², 2t, t³). Find a(1) and speed at t = 1.",
        solution: [
          "v(t) = (2t, 2, 3t²); v(1) = (2, 2, 3); |v(1)| = √17",
          "a(t) = (2, 0, 6t); a(1) = (2, 0, 6)",
        ],
        answer: "a(1) = (2,0,6); speed = √17",
        marks: 3,
      },
      quiz: [
        { question: "Velocity points:", options: ["Outward", "Tangent to curve", "Normal", "Random"], correctAnswer: 1, explanation: "Always tangent." },
        { question: "Speed is:", options: ["Vector", "Scalar |v|", "Acceleration", "Direction"], correctAnswer: 1, explanation: "Magnitude." },
        { question: "Arc length =", options: ["|r(b)−r(a)|", "∫|v| dt", "∫|a| dt", "∫v dt"], correctAnswer: 1, explanation: "Integrate speed." },
      ],
    },
  ],
  "y12s-ch13-review": [
    {
      title: "Review of Chapter 13 — Vector Calculus",
      explanation:
        "Brings together vector functions, parametric curves, component-wise differentiation/integration, and motion on curves. Foundation for advanced kinematics in Specialist.",
      keyPoints: [
        "r(t) parametrises a curve",
        "v = r', a = r''; speed = |v|",
        "Eliminate t for Cartesian form",
        "Apply product rules for dot and cross products",
      ],
      workedExamples: [
        {
          problem: "r(t) = (2 cos t, 2 sin t) for 0 ≤ t ≤ π. Find distance travelled.",
          steps: [
            "v = (−2 sin t, 2 cos t); |v| = 2",
            "Distance = ∫_0^π 2 dt = 2π",
          ],
          answer: "2π (semicircle of radius 2)",
        },
      ],
      tips: ["Verify constant speed before integrating", "Check trajectory shape from Cartesian elimination"],
      examQuestion: {
        problem: "Particle has r(t) = (eᵗ cos t, eᵗ sin t). Find speed at t = 0.",
        solution: [
          "v = eᵗ(cos t − sin t, sin t + cos t)",
          "|v|² = e^(2t)[(cos − sin)² + (sin + cos)²] = 2 e^(2t)",
          "|v(0)| = √2",
        ],
        answer: "√2",
        marks: 3,
      },
      quiz: [
        { question: "v(t) =", options: ["r(t)", "r'(t)", "r''(t)", "|r(t)|"], correctAnswer: 1, explanation: "First derivative." },
        { question: "Distance vs displacement:", options: ["Always equal", "Distance ≥ |displacement|", "Distance ≤", "Unrelated"], correctAnswer: 1, explanation: "Path length ≥ straight line." },
        { question: "Constant speed means:", options: ["a = 0", "|a| = 0", "v·a = 0", "v constant"], correctAnswer: 2, explanation: "Tangential acceleration zero." },
      ],
    },
  ],
};
