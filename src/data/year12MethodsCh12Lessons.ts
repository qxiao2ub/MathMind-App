import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 12: Revision of Chapters 9–11 (Calculus)

export const year12MethodsCh12Lessons: TopicLessonsMap = {
  // ─── 12A: Technology-Free Questions ────────────────────────────────
  "y12m-ch12-12a-tech-free": [
    {
      title: "Technology-Free Calculus Revision",
      explanation:
        "Exam 1 of VCE Mathematical Methods is the SHORT-ANSWER, technology-free paper. Calculus questions are designed to be done by hand in 60–90 seconds each, which means you must have the standard derivative and antiderivative results memorised and you must be able to manipulate algebra cleanly under time pressure.\n\nWHAT GETS TESTED IN 12A:\n  • Differentiation by rule: power, product, quotient and chain rules.\n  • Standard derivatives of e^x, ln(x), sin(x), cos(x), tan(x).\n  • Tangent and normal lines at a given point.\n  • Stationary points and their nature using a sign table.\n  • Antiderivatives of polynomial, exponential, logarithmic and circular forms.\n  • Definite integrals using the Fundamental Theorem of Calculus.\n  • Areas under curves, including signed area on intervals where f(x) < 0.\n\nGENERAL STRATEGY:\n  • Quote the rule you are using before you compute. Examiners look for evidence of method.\n  • Simplify the function BEFORE differentiating where possible (combine fractions, expand products of two factors).\n  • Always include the constant of integration + c on indefinite integrals.\n  • Substitute the limits in the order F(b) − F(a); never the reverse.",
      keyPoints: [
        "Memorise the table of standard derivatives and antiderivatives",
        "Quote the rule (chain, product, quotient) before applying it",
        "Always include + c on indefinite integrals",
        "Definite integral = F(b) − F(a) in that order",
        "Use a sign table for the nature of stationary points",
      ],
      workedExamples: [
        {
          problem: "Differentiate f(x) = x² · e^(3x).",
          steps: [
            "Identify product: u = x², v = e^(3x)",
            "u' = 2x, v' = 3e^(3x) (chain rule on inner 3x)",
            "f'(x) = u'v + uv' = 2x·e^(3x) + x²·3e^(3x)",
            "Factor: f'(x) = x·e^(3x)(2 + 3x)",
          ],
          answer: "f'(x) = x·e^(3x)(3x + 2).",
        },
        {
          problem: "Find the equation of the tangent to y = ln(x) at x = e.",
          steps: [
            "y = ln(x) ⇒ dy/dx = 1/x",
            "Gradient at x = e: m = 1/e",
            "Point: (e, ln e) = (e, 1)",
            "Tangent: y − 1 = (1/e)(x − e)",
            "y = (1/e)x − 1 + 1 = (1/e)x",
          ],
          answer: "y = x/e.",
        },
        {
          problem: "Evaluate ∫₀^(π/2) cos(2x) dx.",
          steps: [
            "Antiderivative of cos(2x) is (1/2) sin(2x)",
            "Evaluate at limits: (1/2)[sin(π) − sin(0)] = (1/2)[0 − 0] = 0",
          ],
          answer: "0.",
        },
        {
          problem: "Find the stationary points of f(x) = x³ − 3x and classify them.",
          steps: [
            "f'(x) = 3x² − 3 = 3(x − 1)(x + 1)",
            "f'(x) = 0 at x = ±1",
            "Sign table: x < −1: f' > 0; −1 < x < 1: f' < 0; x > 1: f' > 0",
            "x = −1: max, f(−1) = 2 ⇒ (−1, 2)",
            "x = 1: min, f(1) = −2 ⇒ (1, −2)",
          ],
          answer: "Local maximum (−1, 2); local minimum (1, −2).",
        },
      ],
      tips: [
        "Convert √x = x^(1/2) and 1/x^n = x^(−n) BEFORE differentiating",
        "On Exam 1 you are not penalised for showing too much work — show every rule",
        "Keep brackets around composite arguments to avoid sign errors",
      ],
      definitions: [
        { term: "Tangent line", meaning: "Line through (a, f(a)) with gradient f'(a); equation y − f(a) = f'(a)(x − a)." },
        { term: "Stationary point", meaning: "A point where f'(x) = 0." },
        { term: "Definite integral", meaning: "∫_a^b f(x) dx = F(b) − F(a) where F'(x) = f(x)." },
      ],
      formulas: [
        { name: "Chain rule", formula: "d/dx[f(g(x))] = f'(g(x)) · g'(x)" },
        { name: "Product rule", formula: "(uv)' = u'v + uv'" },
        { name: "Quotient rule", formula: "(u/v)' = (u'v − uv')/v²" },
        { name: "Standard derivatives", formula: "d/dx[e^(kx)] = k e^(kx); d/dx[ln(x)] = 1/x; d/dx[sin(kx)] = k cos(kx)" },
        { name: "Standard antiderivatives", formula: "∫ e^(kx) dx = (1/k)e^(kx) + c; ∫ 1/x dx = ln|x| + c" },
      ],
      examQuestion: {
        problem:
          "Let f(x) = (2x − 1)⁴. Find f'(x) and hence the equation of the tangent at x = 1.",
        solution: [
          "Chain rule: outer power 4, inner 2x − 1",
          "f'(x) = 4(2x − 1)³ · 2 = 8(2x − 1)³",
          "At x = 1: f(1) = 1, f'(1) = 8(1)³ = 8",
          "Tangent: y − 1 = 8(x − 1) ⇒ y = 8x − 7",
        ],
        answer: "f'(x) = 8(2x − 1)³; tangent y = 8x − 7.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting the +c on an indefinite integral",
        "Reversing the order of limits: F(a) − F(b)",
        "Differentiating composite functions without the chain factor",
        "Treating ln(x) as undefined for negative x in indefinite integrals (use ln|x|)",
      ],
      summary: [
        "Differentiation rules must be quoted and applied carefully",
        "Tangents and normals reduce to point-gradient form",
        "Antidifferentiation is the reverse of differentiation, plus + c",
        "Definite integrals use F(b) − F(a)",
      ],
      practice: [
        { question: "Differentiate y = sin(3x).", answer: "3 cos(3x)" },
        { question: "∫ (4x³ − 2) dx", answer: "x⁴ − 2x + c" },
        { question: "Stationary point of f(x) = x² − 6x + 5.", answer: "(3, −4), minimum" },
        { question: "Evaluate ∫₁^e (1/x) dx.", answer: "1" },
      ],
      quiz: [
        {
          question: "d/dx[e^(−2x)] equals:",
          options: ["e^(−2x)", "−2 e^(−2x)", "2 e^(−2x)", "−e^(−2x)"],
          correctAnswer: 1,
          explanation: "Chain rule on the inner −2x.",
        },
        {
          question: "∫ cos(3x) dx equals:",
          options: ["sin(3x) + c", "(1/3) sin(3x) + c", "−(1/3) sin(3x) + c", "3 sin(3x) + c"],
          correctAnswer: 1,
          explanation: "Reverse of d/dx[sin(3x)] = 3 cos(3x).",
        },
        {
          question: "If f(x) = x ln(x), then f'(x) =",
          options: ["ln(x)", "1 + ln(x)", "x/(x)", "1/x"],
          correctAnswer: 1,
          explanation: "Product rule: 1·ln(x) + x·(1/x) = ln(x) + 1.",
        },
        {
          question: "∫₀² 2x dx equals:",
          options: ["2", "4", "8", "1"],
          correctAnswer: 1,
          explanation: "x² evaluated 0 to 2 is 4 − 0 = 4.",
        },
      ],
    },
  ],

  // ─── 12B: Multiple-Choice Questions ────────────────────────────────
  "y12m-ch12-12b-multiple-choice": [
    {
      title: "Multiple-Choice Calculus Practice",
      explanation:
        "Multiple-choice questions in Exam 2 reward speed and pattern recognition. Each question is worth one mark and must be completed in roughly 90 seconds. CAS is allowed but for routine derivatives and integrals it is usually faster to work by hand.\n\nKEY TECHNIQUES:\n  • Eliminate distractors by checking signs, leading coefficients and units.\n  • For tangent equations, quickly compute f(a) and f'(a) and check which option matches the y-intercept.\n  • For definite integrals, use CAS to confirm rather than compute from scratch.\n  • For 'which is true' questions about stationary points, sketch a quick sign table mentally.\n  • For composite/chain derivatives, check that the derivative of the inner function appears as a multiplier.\n\nREMEMBER: distractors are usually crafted from common errors — sign mistakes, missing chain factor, forgetting + c. Knowing the typical traps gives you back time.",
      keyPoints: [
        "Eliminate options using sign and constant checks",
        "Use CAS only when arithmetic is heavy",
        "Watch for the 'missing chain factor' distractor",
        "Read carefully: derivative vs antiderivative wording",
      ],
      workedExamples: [
        {
          problem: "Which is the derivative of f(x) = sin²(x)?",
          steps: [
            "Rewrite as (sin x)²; chain rule",
            "f'(x) = 2 sin x · cos x",
            "Equivalent form: sin(2x)",
          ],
          answer: "2 sin(x) cos(x), i.e. sin(2x).",
        },
        {
          problem: "The function f(x) = x³ − 12x has a local minimum at:",
          steps: [
            "f'(x) = 3x² − 12 = 0 ⇒ x = ±2",
            "f''(x) = 6x; at x = 2 ⇒ f'' > 0 ⇒ minimum",
            "f(2) = 8 − 24 = −16",
          ],
          answer: "(2, −16).",
        },
      ],
      tips: [
        "Check the sign of the leading coefficient before picking an option",
        "If two options differ only by sign, slow down and check carefully",
      ],
      definitions: [
        { term: "Distractor", meaning: "An incorrect option deliberately written to match a common error." },
      ],
      formulas: [
        { name: "Second derivative test", formula: "If f'(a) = 0 and f''(a) > 0, local min; f''(a) < 0, local max" },
      ],
      examQuestion: {
        problem:
          "The gradient of y = x e^x at x = 0 is:\nA. 0   B. 1   C. e   D. 2   E. e − 1",
        solution: [
          "Product rule: dy/dx = e^x + x e^x",
          "At x = 0: 1 + 0 = 1",
        ],
        answer: "B. 1.",
        marks: 1,
      },
      commonErrors: [
        "Choosing the antiderivative when asked for the derivative",
        "Missing the chain factor in a composite",
        "Misreading 'minimum' vs 'maximum' option labels",
      ],
      summary: [
        "Multiple-choice questions are usually faster by hand than CAS",
        "Use distractor analysis to eliminate quickly",
      ],
      practice: [
        { question: "Antiderivative of 1/(2x + 1) is …", answer: "(1/2) ln|2x + 1| + c" },
        { question: "Derivative of (x² + 1)⁵ is …", answer: "10x(x² + 1)⁴" },
      ],
      quiz: [
        {
          question: "d/dx[ln(3x)] =",
          options: ["1/(3x)", "1/x", "3/x", "ln 3"],
          correctAnswer: 1,
          explanation: "ln(3x) = ln 3 + ln x; derivative is 1/x.",
        },
        {
          question: "∫ sin(2x) dx =",
          options: ["cos(2x) + c", "−cos(2x) + c", "−(1/2) cos(2x) + c", "(1/2) cos(2x) + c"],
          correctAnswer: 2,
          explanation: "Reverse of d/dx[−(1/2) cos(2x)] = sin(2x).",
        },
        {
          question: "If f'(x) = (x − 3)(x + 1), the local maximum is at:",
          options: ["x = 3", "x = −1", "x = 1", "x = 0"],
          correctAnswer: 1,
          explanation: "f' changes from + to − at x = −1.",
        },
      ],
    },
  ],

  // ─── 12C: Extended-Response Questions ──────────────────────────────
  "y12m-ch12-12c-extended-response": [
    {
      title: "Extended-Response Calculus Modelling",
      explanation:
        "Extended-response questions in Exam 2 are multi-part scenarios that reward clear setting out, contextual interpretation and CAS proficiency. A single question can chain together graphing, differentiation, optimisation and integration.\n\nTYPICAL STRUCTURE:\n  (a) Define a function modelling a real situation (volume, profit, height).\n  (b) Sketch or describe key features.\n  (c) Differentiate to find rate of change at a point.\n  (d) Solve f'(x) = 0 to optimise; check using sign or second derivative.\n  (e) Compute a definite integral for area, displacement or accumulated quantity.\n  (f) Interpret all numerical answers IN CONTEXT with appropriate units.\n\nMARK ALLOCATION CLUES:\n  • 1 mark = quick computation.\n  • 2–3 marks = derive, then evaluate, then interpret.\n  • 4+ marks = full optimisation including justification of the nature of the stationary point.",
      keyPoints: [
        "Set out steps clearly — examiners follow your method marks",
        "Always justify a maximum or minimum",
        "Interpret with units in every applied part",
        "Use CAS efficiently and store models as variables",
      ],
      workedExamples: [
        {
          problem:
            "A box has square base of side x cm and height h cm. The total surface area is 600 cm². Find the dimensions that maximise volume.",
          steps: [
            "Surface area constraint: x² + 4xh = 600 ⇒ h = (600 − x²)/(4x)",
            "Volume V(x) = x²h = x² · (600 − x²)/(4x) = (600x − x³)/4",
            "V'(x) = (600 − 3x²)/4 = 0 ⇒ x² = 200 ⇒ x = √200 = 10√2",
            "V''(x) = −6x/4 < 0 ⇒ maximum",
            "h = (600 − 200)/(4·10√2) = 400/(40√2) = 5√2",
          ],
          answer: "x = 10√2 cm, h = 5√2 cm; max volume V = (600·10√2 − (10√2)³)/4 = 1000√2 cm³.",
        },
      ],
      tips: [
        "Start each part on a new line and label (a), (b)…",
        "Use CAS to factor cubic derivatives quickly",
        "Round only at the final step",
      ],
      definitions: [
        { term: "Constraint", meaning: "An equation linking variables that lets you reduce a multi-variable optimisation to one variable." },
      ],
      formulas: [
        { name: "Optimisation method", formula: "Express objective in one variable, set f'(x) = 0, justify max/min, evaluate" },
        { name: "Mean value (average)", formula: "Average of f on [a, b] = (1/(b−a)) ∫_a^b f(x) dx" },
      ],
      examQuestion: {
        problem:
          "A particle moves along a line with velocity v(t) = 6 − 2t m/s, t ≥ 0. (a) When is it at rest? (b) Find the displacement from t = 0 to t = 5. (c) Find the total distance travelled.",
        solution: [
          "(a) v = 0 ⇒ t = 3 s",
          "(b) Displacement = ∫₀⁵ (6 − 2t) dt = [6t − t²]₀⁵ = 30 − 25 = 5 m",
          "(c) Distance = ∫₀³ |v| dt + ∫₃⁵ |v| dt = 9 + 4 = 13 m",
        ],
        answer: "(a) t = 3 s. (b) 5 m. (c) 13 m.",
        marks: 6,
      },
      commonErrors: [
        "Confusing displacement and distance",
        "Failing to justify a maximum",
        "Dropping units in the final answer",
        "Rounding too early during a chain of calculations",
      ],
      summary: [
        "Optimisation: constraint → one-variable objective → derivative → justify",
        "Definite integrals model accumulated quantities",
        "Always interpret final answer in context with units",
      ],
      practice: [
        { question: "Max area of a rectangle with perimeter 40 m.", answer: "100 m² (square 10×10)" },
      ],
      quiz: [
        {
          question: "To justify a maximum at x = a you can show:",
          options: ["f(a) > 0", "f'(a) > 0 and f''(a) > 0", "f'(a) = 0 and f''(a) < 0", "f'(a) > 0"],
          correctAnswer: 2,
          explanation: "Second derivative test: f'' < 0 means concave down ⇒ max.",
        },
        {
          question: "Total distance travelled is computed using:",
          options: ["∫ v dt", "∫ |v| dt", "v(b) − v(a)", "∫ a dt"],
          correctAnswer: 1,
          explanation: "Distance ignores direction, so use absolute value.",
        },
      ],
    },
  ],

  // ─── 12D: Algorithms and Pseudocode ────────────────────────────────
  "y12m-ch12-12d-pseudocode": [
    {
      title: "Algorithms and Pseudocode for Calculus",
      explanation:
        "VCE Methods now requires fluency in algorithmic thinking. You must read pseudocode that implements numerical methods (Newton–Raphson, Bisection, Trapezoidal Rule, Riemann sums) and predict their output, identify errors, or modify them.\n\nPSEUDOCODE CONVENTIONS YOU MUST KNOW:\n  • assignment: x ← 1 (or x := 1)\n  • for-loop: for i from 1 to n do … end for\n  • while-loop: while condition do … end while\n  • if-then-else: if cond then … else … end if\n  • function definition: define f(x): return x² − 2\n\nKEY NUMERICAL METHODS YOU MUST RECOGNISE:\n  • Newton–Raphson: x_{n+1} = x_n − f(x_n)/f'(x_n).\n  • Bisection: repeatedly halve the interval [a, b] where f(a) and f(b) have opposite signs.\n  • Riemann sum: approximate ∫_a^b f(x) dx by sum f(x_i) · Δx.\n  • Trapezoidal rule: ∫ ≈ (Δx/2) · (f(x_0) + 2f(x_1) + … + 2f(x_{n−1}) + f(x_n)).",
      keyPoints: [
        "Trace each variable through each loop iteration",
        "Newton–Raphson needs f and f' both defined",
        "Bisection needs a sign change to start",
        "Trapezoidal rule overestimates concave-down regions",
      ],
      workedExamples: [
        {
          problem:
            "Trace the pseudocode:\n x ← 2\n for i from 1 to 3 do\n   x ← x − (x² − 5)/(2x)\n end for\n return x",
          steps: [
            "Start x = 2",
            "i=1: x ← 2 − (4 − 5)/4 = 2 − (−0.25) = 2.25",
            "i=2: x ← 2.25 − (5.0625 − 5)/4.5 = 2.25 − 0.01389 ≈ 2.23611",
            "i=3: x ≈ 2.23607",
            "Recognise this is Newton–Raphson on x² − 5 ⇒ converges to √5",
          ],
          answer: "x ≈ 2.23607 (an approximation to √5).",
        },
        {
          problem:
            "Write pseudocode for the bisection method to solve f(x) = 0 on [a, b] to tolerance ε.",
          steps: [
            "while (b − a) > ε do",
            "  m ← (a + b)/2",
            "  if f(a)·f(m) < 0 then b ← m else a ← m end if",
            "end while",
            "return (a + b)/2",
          ],
          answer: "See pseudocode above.",
        },
      ],
      tips: [
        "Make a table with columns for each variable when tracing",
        "Round only at the final step of a numerical method",
        "Check direction of convergence after one iteration",
      ],
      definitions: [
        { term: "Iteration", meaning: "One pass through the body of a loop." },
        { term: "Tolerance ε", meaning: "Acceptable error; the loop stops when the interval width is below ε." },
      ],
      formulas: [
        { name: "Newton–Raphson", formula: "x_{n+1} = x_n − f(x_n)/f'(x_n)" },
        { name: "Trapezoidal rule (n strips)", formula: "T = (Δx/2)·[f(x₀) + 2(f(x₁)+…+f(x_{n−1})) + f(x_n)]" },
      ],
      examQuestion: {
        problem:
          "Use one Newton–Raphson iteration with x₀ = 1 to approximate the solution of x³ − 2 = 0.",
        solution: [
          "f(x) = x³ − 2, f'(x) = 3x²",
          "x₁ = 1 − (1 − 2)/(3) = 1 + 1/3 = 4/3",
        ],
        answer: "x₁ = 4/3.",
        marks: 2,
      },
      commonErrors: [
        "Using f''(x) instead of f'(x) in Newton–Raphson",
        "Updating a and b incorrectly in bisection",
        "Off-by-one errors in 'for i from 0 to n'",
      ],
      summary: [
        "Pseudocode is examinable — practise tracing iterations",
        "Newton–Raphson converges quickly when started near a root",
        "Bisection is robust but slow, halving the interval each step",
      ],
      practice: [
        { question: "How many iterations does bisection need on [0, 1] to reach ε = 0.01?", answer: "Solve (1/2)^n < 0.01 ⇒ n ≥ 7" },
      ],
      quiz: [
        {
          question: "Newton–Raphson updates x using:",
          options: ["x − f(x)", "x + f(x)/f'(x)", "x − f(x)/f'(x)", "x − f'(x)/f(x)"],
          correctAnswer: 2,
          explanation: "Standard update formula.",
        },
        {
          question: "Bisection requires:",
          options: ["f differentiable", "A sign change on [a, b]", "f monotonic", "x₀ close to a root"],
          correctAnswer: 1,
          explanation: "Intermediate value theorem guarantees a root.",
        },
      ],
    },
  ],
};
