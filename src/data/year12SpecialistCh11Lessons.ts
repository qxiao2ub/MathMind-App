import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 11: Differential Equations

export const year12SpecialistCh11Lessons: TopicLessonsMap = {
  "y12s-ch11-11a-intro": [
    {
      title: "Introduction to Differential Equations",
      explanation:
        "A differential equation (ODE) involves a function and its derivatives, e.g., dy/dx = 2x.\n\nOrder = highest derivative present.\nGeneral solution contains arbitrary constants; particular solution uses initial conditions to determine them.",
      keyPoints: [
        "Solution is a FUNCTION, not a number",
        "General solution has +C; particular solution fixes C using a point",
        "Verify by differentiating proposed solution",
      ],
      workedExamples: [
        {
          problem: "Verify y = 3e^(2x) solves dy/dx = 2y.",
          steps: ["dy/dx = 6e^(2x)", "2y = 2·3e^(2x) = 6e^(2x) ✓"],
          answer: "Verified",
        },
      ],
      tips: ["Always check initial conditions", "Distinguish dependent vs independent variable"],
      examQuestion: {
        problem: "Find the particular solution of dy/dx = 4x with y(1) = 5.",
        solution: ["y = 2x² + C", "5 = 2(1) + C ⇒ C = 3", "y = 2x² + 3"],
        answer: "y = 2x² + 3",
        marks: 2,
      },
      quiz: [
        { question: "Order of dy/dx = x:", options: ["0", "1", "2", "Infinite"], correctAnswer: 1, explanation: "First derivative." },
        { question: "General solution contains:", options: ["No constants", "Arbitrary constant", "Only x", "Numerical answer"], correctAnswer: 1, explanation: "+C." },
        { question: "Particular solution requires:", options: ["More variables", "Initial condition", "Higher order", "Polynomial"], correctAnswer: 1, explanation: "Fixes constant." },
      ],
    },
  ],
  "y12s-ch11-11b-fn-independent": [
    {
      title: "ODEs of the form dy/dx = f(x)",
      explanation:
        "When the right side depends only on x, integrate directly:\n  y = ∫ f(x) dx + C\n\nApply initial condition to find C.",
      keyPoints: [
        "Integrate both sides w.r.t. x",
        "Always include +C",
        "Use initial condition to find particular solution",
      ],
      workedExamples: [
        {
          problem: "Solve dy/dx = sec²x with y(0) = 1.",
          steps: ["y = tan x + C", "y(0) = 0 + C = 1 ⇒ C = 1", "y = tan x + 1"],
          answer: "y = tan x + 1",
        },
      ],
      tips: ["Recognise standard antiderivatives", "Sketch the family of solutions if asked"],
      examQuestion: {
        problem: "Solve dy/dx = 1/(1 + x²) with y(0) = 0.",
        solution: ["y = arctan x + C", "y(0) = 0 ⇒ C = 0", "y = arctan x"],
        answer: "y = arctan x",
        marks: 2,
      },
      quiz: [
        { question: "Method:", options: ["Differentiate", "Integrate w.r.t. x", "Square both sides", "Square root"], correctAnswer: 1, explanation: "Direct integration." },
        { question: "y' = 2x, y(1)=2 ⇒", options: ["y=x²+1", "y=x²", "y=2x", "y=x²+2"], correctAnswer: 0, explanation: "C=1." },
        { question: "Solution family is:", options: ["Single curve", "Vertical translates", "Horizontal translates", "Lines"], correctAnswer: 1, explanation: "Differ by C." },
      ],
    },
  ],
  "y12s-ch11-11c-fn-dependent": [
    {
      title: "ODEs of the form dy/dx = f(y)",
      explanation:
        "When the right side depends only on y, invert:\n  dx/dy = 1/f(y), then x = ∫ 1/f(y) dy + C.\n\nFinally, solve algebraically for y in terms of x (when possible).",
      keyPoints: [
        "Invert via dx/dy = 1/(dy/dx)",
        "Integrate w.r.t. y to get x = G(y) + C",
        "Implicit solution may be left if y can't be isolated",
      ],
      workedExamples: [
        {
          problem: "Solve dy/dx = y, y(0) = 1.",
          steps: [
            "dx/dy = 1/y ⇒ x = ln|y| + C",
            "x(1) = 0 ⇒ ln 1 + C = 0 ⇒ C = 0",
            "x = ln y ⇒ y = eˣ",
          ],
          answer: "y = eˣ",
        },
      ],
      tips: ["Inversion only valid where f(y) ≠ 0", "Check domain after solving for y"],
      formulas: [{ name: "Inverse rule", formula: "dx/dy = 1/(dy/dx)" }],
      examQuestion: {
        problem: "Solve dy/dx = 1 + y² with y(0) = 0.",
        solution: [
          "dx/dy = 1/(1 + y²)",
          "x = arctan y + C; y(0)=0 ⇒ C = 0",
          "y = tan x",
        ],
        answer: "y = tan x",
        marks: 3,
      },
      quiz: [
        { question: "Method:", options: ["Direct integration", "Invert and integrate w.r.t. y", "Substitute x", "Differentiate"], correctAnswer: 1, explanation: "Use 1/f(y)." },
        { question: "Inversion fails at:", options: ["f(y)=1", "f(y)=0", "f(y)<0", "All y"], correctAnswer: 1, explanation: "Division by zero." },
        { question: "Final answer:", options: ["x in terms of y", "Either form", "y always", "x always"], correctAnswer: 1, explanation: "Implicit allowed." },
      ],
    },
  ],
  "y12s-ch11-11d-applications": [
    {
      title: "Applications of Differential Equations",
      explanation:
        "Common modelling contexts:\n  • Newton's law of cooling: dT/dt = −k(T − T_room)\n  • Exponential growth/decay: dN/dt = kN\n  • Mixing problems: dQ/dt = (rate in) − (rate out)\n  • Falling body with air resistance: dv/dt = g − kv",
      keyPoints: [
        "Translate the word problem into a rate equation",
        "Identify dependent/independent variables and constants",
        "Use given conditions to fix constants",
      ],
      workedExamples: [
        {
          problem: "Bacteria grow at rate proportional to population. N(0) = 100, N(2) = 400. Find N(t).",
          steps: [
            "dN/dt = kN ⇒ N = N₀ eᵏᵗ",
            "100·e^(2k) = 400 ⇒ e^(2k) = 4 ⇒ k = ln 2",
            "N(t) = 100·e^((ln 2)·t) = 100·2ᵗ",
          ],
          answer: "N(t) = 100·2ᵗ",
        },
      ],
      tips: ["Always state model assumptions", "Include units in the final answer"],
      examQuestion: {
        problem: "A cup of coffee at 90°C cools in a 20°C room. After 5 min it is 70°C. Find T(t).",
        solution: [
          "dT/dt = −k(T − 20); solution T = 20 + 70 e^(−kt)",
          "T(5) = 70: 20 + 70 e^(−5k) = 70 ⇒ e^(−5k) = 5/7",
          "k = (1/5) ln(7/5)",
          "T(t) = 20 + 70·(5/7)^(t/5)",
        ],
        answer: "T(t) = 20 + 70·(5/7)^(t/5)",
        marks: 4,
      },
      quiz: [
        { question: "Newton cooling rate ∝", options: ["T", "T − T_room", "T_room only", "t"], correctAnswer: 1, explanation: "Temperature difference." },
        { question: "Exponential growth solution:", options: ["N₀ + kt", "N₀ eᵏᵗ", "kt", "1/t"], correctAnswer: 1, explanation: "dN/dt=kN." },
        { question: "Mixing rate of change:", options: ["In − Out", "In × Out", "In + Out", "Out only"], correctAnswer: 0, explanation: "Net flux." },
      ],
    },
  ],
  "y12s-ch11-11e-logistic": [
    {
      title: "The Logistic Differential Equation",
      explanation:
        "Models population with carrying capacity K:\n  dP/dt = r·P·(1 − P/K)\n\nGeneral solution:\n  P(t) = K / (1 + A·e^(−rt)), where A = (K − P₀)/P₀.\n\nBehaviour:\n  • P → K as t → ∞\n  • Inflection at P = K/2 (fastest growth)",
      keyPoints: [
        "S-shaped (sigmoid) curve",
        "K is the asymptote (carrying capacity)",
        "Inflection at half capacity",
      ],
      workedExamples: [
        {
          problem: "Initial population 50, K = 1000, r = 0.5. Find P(t).",
          steps: [
            "A = (1000 − 50)/50 = 19",
            "P(t) = 1000/(1 + 19·e^(−0.5t))",
          ],
          answer: "P(t) = 1000/(1 + 19 e^(−t/2))",
        },
      ],
      tips: ["A is determined by initial population", "Sketch shows S-curve with horizontal asymptote y = K"],
      formulas: [{ name: "Logistic", formula: "P(t) = K/(1 + A e^(−rt))" }],
      examQuestion: {
        problem: "For dP/dt = 0.1·P·(1 − P/200), P(0) = 50, find when P = 100.",
        solution: [
          "A = (200−50)/50 = 3",
          "P(t) = 200/(1 + 3 e^(−0.1t))",
          "100 = 200/(1 + 3e^(−0.1t)) ⇒ 1 + 3e^(−0.1t) = 2 ⇒ e^(−0.1t) = 1/3",
          "t = 10 ln 3 ≈ 10.99",
        ],
        answer: "t = 10 ln 3 ≈ 11",
        marks: 4,
      },
      quiz: [
        { question: "K represents:", options: ["Initial pop", "Growth rate", "Carrying capacity", "Time"], correctAnswer: 2, explanation: "Asymptote." },
        { question: "Fastest growth at:", options: ["P=0", "P=K/2", "P=K", "P=2K"], correctAnswer: 1, explanation: "Inflection point." },
        { question: "As t→∞, P→", options: ["0", "K/2", "K", "∞"], correctAnswer: 2, explanation: "Carrying capacity." },
      ],
    },
  ],
  "y12s-ch11-11f-separation": [
    {
      title: "Separation of Variables",
      explanation:
        "If dy/dx = g(x)·h(y), separate:\n  (1/h(y)) dy = g(x) dx\n\nIntegrate both sides:\n  ∫ 1/h(y) dy = ∫ g(x) dx + C\n\nSolve for y if possible.",
      keyPoints: [
        "Both sides MUST integrate cleanly",
        "h(y) ≠ 0 for the separation step",
        "Singular solutions y = constant where h(y) = 0",
      ],
      workedExamples: [
        {
          problem: "Solve dy/dx = xy, y(0) = 2.",
          steps: [
            "dy/y = x dx",
            "ln|y| = x²/2 + C₁",
            "y = A e^(x²/2); y(0)=2 ⇒ A = 2",
            "y = 2 e^(x²/2)",
          ],
          answer: "y = 2 e^(x²/2)",
        },
      ],
      tips: ["Combine constants into a single one", "Always verify solution by substitution"],
      examQuestion: {
        problem: "Solve dy/dx = (1 + y²)/x for x > 0, y(1) = 0.",
        solution: [
          "dy/(1+y²) = dx/x",
          "arctan y = ln x + C",
          "y(1)=0 ⇒ C = 0",
          "y = tan(ln x)",
        ],
        answer: "y = tan(ln x)",
        marks: 4,
      },
      quiz: [
        { question: "Separation needs RHS:", options: ["g(x)+h(y)", "g(x)·h(y)", "g(x)−h(y)", "g(x)/h(y)"], correctAnswer: 1, explanation: "Multiplicative form." },
        { question: "After separating, you:", options: ["Differentiate both sides", "Integrate both sides", "Square both sides", "Simplify only"], correctAnswer: 1, explanation: "Standard step." },
        { question: "Constant included:", options: ["On both sides", "Once (combined)", "Never", "On y side only"], correctAnswer: 1, explanation: "Single +C." },
      ],
    },
  ],
  "y12s-ch11-11g-related-rates": [
    {
      title: "ODEs With Related Rates",
      explanation:
        "Combine related-rates relationships with ODE techniques. Steps:\n  1. Use geometric/physical relations to express variables in terms of each other\n  2. Differentiate relevant equation w.r.t. time\n  3. Substitute given rates to form an ODE\n  4. Solve and apply initial conditions",
      keyPoints: [
        "Identify the chain of dependencies",
        "Express ALL rates in compatible variables",
        "Use units consistently",
      ],
      workedExamples: [
        {
          problem: "Spherical balloon volume increases at 100 cm³/s. Find dr/dt as a function of r.",
          steps: [
            "V = (4/3)πr³ ⇒ dV/dt = 4πr²·dr/dt",
            "100 = 4πr²·dr/dt",
            "dr/dt = 25/(πr²)",
          ],
          answer: "dr/dt = 25/(π r²)",
        },
      ],
      tips: ["Relate ALL quantities to time before integrating", "Sketch helps identify geometric relations"],
      examQuestion: {
        problem: "Water leaks from a cylindrical tank (radius 2 m) at rate proportional to depth h: dV/dt = −kh. Express dh/dt.",
        solution: [
          "V = π·r²·h = 4πh ⇒ dV/dt = 4π·dh/dt",
          "4π·dh/dt = −kh",
          "dh/dt = −k h/(4π)",
        ],
        answer: "dh/dt = −kh/(4π)",
        marks: 3,
      },
      quiz: [
        { question: "First step:", options: ["Integrate", "Express geometric relation", "Substitute", "Square both sides"], correctAnswer: 1, explanation: "Set up dependence." },
        { question: "Then differentiate:", options: ["w.r.t. x", "w.r.t. t", "implicitly only", "twice"], correctAnswer: 1, explanation: "Time-based rates." },
        { question: "Negative rate means:", options: ["Increasing", "Decreasing", "Constant", "Zero"], correctAnswer: 1, explanation: "Quantity shrinking." },
      ],
    },
  ],
  "y12s-ch11-11h-definite-integral": [
    {
      title: "Solving ODEs With Definite Integrals",
      explanation:
        "If dy/dx = f(x), integrate from x₀ to x:\n  y(x) − y(x₀) = ∫_(x₀)^x f(t) dt\n  ⇒ y(x) = y(x₀) + ∫_(x₀)^x f(t) dt\n\nThis approach incorporates the initial condition automatically and is useful when an antiderivative is hard to express in closed form.",
      keyPoints: [
        "No arbitrary constant needed — initial condition is in the limit",
        "Useful when f has no elementary antiderivative",
        "Express y as integral if symbolic form unavailable",
      ],
      workedExamples: [
        {
          problem: "Solve dy/dx = e^(−x²), y(0) = 0.",
          steps: [
            "y(x) = 0 + ∫_0^x e^(−t²) dt",
            "Closed form not elementary; expressible via erf",
          ],
          answer: "y(x) = ∫_0^x e^(−t²) dt",
        },
      ],
      tips: ["Use a different dummy variable inside the integral (t, u)", "CAS needed for numerical evaluation"],
      examQuestion: {
        problem: "Solve dy/dx = (sin x)/x, y(1) = 2.",
        solution: ["y(x) = 2 + ∫_1^x (sin t)/t dt"],
        answer: "y(x) = 2 + ∫_1^x (sin t)/t dt",
        marks: 2,
      },
      quiz: [
        { question: "Definite-integral form needs:", options: ["+C", "Initial condition in limit", "Two constants", "Nothing"], correctAnswer: 1, explanation: "Auto-applied." },
        { question: "Useful when f has:", options: ["Easy antiderivative", "No elementary antiderivative", "Constant value", "Infinite limit"], correctAnswer: 1, explanation: "Express implicitly." },
        { question: "Inside integral use:", options: ["Same variable x", "Dummy variable", "y", "Constant"], correctAnswer: 1, explanation: "Avoid clash with limit." },
      ],
    },
  ],
  "y12s-ch11-11i-euler": [
    {
      title: "Euler's Method",
      explanation:
        "Numerical method for dy/dx = f(x, y) with y(x₀) = y₀.\n  • Step size h\n  • Iteration: y_{n+1} = yₙ + h·f(xₙ, yₙ); x_{n+1} = xₙ + h\n\nProduces approximate values at x₀, x₀+h, x₀+2h, …",
      keyPoints: [
        "Smaller h ⇒ greater accuracy (and more steps)",
        "Linear (tangent-line) approximation",
        "Error accumulates over multiple steps",
      ],
      workedExamples: [
        {
          problem: "Use Euler with h = 0.1 to estimate y(0.2) for dy/dx = x + y, y(0) = 1.",
          steps: [
            "x₀=0, y₀=1; f = 1; y₁ = 1 + 0.1·1 = 1.1; x₁=0.1",
            "f(0.1, 1.1) = 1.2; y₂ = 1.1 + 0.1·1.2 = 1.22",
          ],
          answer: "y(0.2) ≈ 1.22",
        },
      ],
      tips: ["Tabulate (n, xₙ, yₙ, f(xₙ, yₙ)) for clarity", "Halving h roughly halves the error"],
      formulas: [{ name: "Euler step", formula: "y_{n+1} = yₙ + h·f(xₙ, yₙ)" }],
      examQuestion: {
        problem: "For dy/dx = y − x with y(0) = 2 and h = 0.5, find y(1).",
        solution: [
          "Step 1: f(0,2) = 2; y₁ = 2 + 0.5·2 = 3; x₁ = 0.5",
          "Step 2: f(0.5,3) = 2.5; y₂ = 3 + 0.5·2.5 = 4.25",
          "y(1) ≈ 4.25",
        ],
        answer: "≈ 4.25",
        marks: 3,
      },
      quiz: [
        { question: "Euler is:", options: ["Exact", "Approximate", "Symbolic", "Implicit"], correctAnswer: 1, explanation: "Numerical." },
        { question: "Smaller h:", options: ["More error", "Less error", "Same", "Diverges"], correctAnswer: 1, explanation: "Better tangent approximation." },
        { question: "Iteration uses:", options: ["yₙ + h·f", "yₙ − h·f", "yₙ·f", "yₙ/h"], correctAnswer: 0, explanation: "Tangent step." },
      ],
    },
  ],
  "y12s-ch11-11j-slope-field": [
    {
      title: "Slope Fields",
      explanation:
        "A slope (direction) field plots short line segments with slope f(x, y) at each grid point of the (x, y)-plane. Solutions to dy/dx = f(x, y) are curves tangent to the field at every point.\n\nUsed to visualise solution behaviour without solving the ODE explicitly.",
      keyPoints: [
        "Slope at each point = f(x, y)",
        "Equilibria where f(x, y) = 0 are horizontal segments",
        "Solutions cannot cross (uniqueness)",
      ],
      workedExamples: [
        {
          problem: "Describe slope field of dy/dx = y.",
          steps: [
            "Slope = y: zero on x-axis (y=0)",
            "Positive slopes for y>0 (curves rise)",
            "Negative for y<0 (curves fall away)",
            "Solutions: y = Aeˣ — exponential curves",
          ],
          answer: "Exponential family",
        },
      ],
      tips: ["Identify equilibrium lines first", "Use isoclines (slope = constant) for sketching"],
      examQuestion: {
        problem: "For dy/dx = x − y, find the equation of the isocline of slope 0.",
        solution: ["x − y = 0 ⇒ y = x", "Along y = x, all field segments are horizontal"],
        answer: "y = x",
        marks: 2,
      },
      quiz: [
        { question: "Slope field shows:", options: ["Exact solutions", "Tangent directions", "Areas", "Volumes"], correctAnswer: 1, explanation: "Direction at each point." },
        { question: "Solution curves are:", options: ["Perpendicular to field", "Tangent to field", "Vertical", "Constant"], correctAnswer: 1, explanation: "By definition." },
        { question: "Isocline = locus where:", options: ["y=0", "Slope = constant", "x=0", "Field undefined"], correctAnswer: 1, explanation: "Helpful sketching tool." },
      ],
    },
  ],
  "y12s-ch11-review": [
    {
      title: "Review of Chapter 11 — Differential Equations",
      explanation:
        "Brings together direct integration, separation of variables, modelling (cooling, growth, logistic, mixing), Euler's method, and slope fields. Pick the technique based on the form of the ODE.",
      keyPoints: [
        "dy/dx = f(x): integrate directly",
        "dy/dx = f(y): invert and integrate w.r.t. y",
        "dy/dx = g(x)·h(y): separate variables",
        "Use Euler when no analytic solution available",
      ],
      workedExamples: [
        {
          problem: "Solve dy/dx = (x+1)/y², y(0) = 1.",
          steps: [
            "y² dy = (x+1) dx",
            "y³/3 = x²/2 + x + C; y(0)=1 ⇒ C = 1/3",
            "y³ = 3x²/2 + 3x + 1",
          ],
          answer: "y³ = 3x²/2 + 3x + 1",
        },
      ],
      tips: ["Check the form before choosing method", "Always apply initial conditions cleanly"],
      examQuestion: {
        problem: "A radioactive substance decays so that dN/dt = −kN. If half-life is 10 years, find k.",
        solution: [
          "N = N₀ e^(−kt); N₀/2 = N₀ e^(−10k)",
          "e^(−10k) = 1/2 ⇒ k = (ln 2)/10",
        ],
        answer: "k = (ln 2)/10 yr⁻¹",
        marks: 3,
      },
      quiz: [
        { question: "Best for dy/dx = e^(−x²):", options: ["Separation", "Definite integral form", "Logistic", "Euler"], correctAnswer: 1, explanation: "No elementary antiderivative." },
        { question: "Logistic asymptote:", options: ["0", "K/2", "K", "∞"], correctAnswer: 2, explanation: "Carrying capacity." },
        { question: "Half-life relates to:", options: ["k via ln 2", "k², no log", "Linear in k", "Independent of k"], correctAnswer: 0, explanation: "T_(1/2) = ln 2 / k." },
      ],
    },
  ],
};
