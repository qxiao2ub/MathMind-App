import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 9: Integration Techniques

export const year12SpecialistCh9Lessons: TopicLessonsMap = {
  "y12s-ch9-9a-antidiff": [
    {
      title: "Antidifferentiation",
      explanation:
        "An antiderivative F(x) of f(x) satisfies F'(x) = f(x). General antiderivative includes +C.\n\nStandard antiderivatives:\n  • ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ −1\n  • ∫ 1/x dx = ln|x| + C\n  • ∫ eˣ dx = eˣ + C\n  • ∫ sin x dx = −cos x + C\n  • ∫ cos x dx = sin x + C\n  • ∫ sec² x dx = tan x + C",
      keyPoints: [
        "ALWAYS include +C for indefinite integrals",
        "Use absolute value for ln|x|",
        "Linearity: ∫(af + bg) = a∫f + b∫g",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫ (3x² − 2/x + e^(2x)) dx.",
          steps: [
            "= x³ − 2 ln|x| + (1/2)e^(2x) + C",
          ],
          answer: "x³ − 2 ln|x| + ½e^(2x) + C",
        },
      ],
      tips: ["Differentiate the answer to verify", "Re-write radicals as fractional powers before integrating"],
      formulas: [{ name: "Power", formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n≠−1" }],
      examQuestion: {
        problem: "Find ∫ (x + 1)/x² dx.",
        solution: [
          "Split: ∫ (1/x + 1/x²) dx",
          "= ln|x| − 1/x + C",
        ],
        answer: "ln|x| − 1/x + C",
        marks: 2,
      },
      quiz: [
        { question: "∫ x⁻¹ dx =", options: ["ln x + C", "ln|x| + C", "x⁰ + C", "1 + C"], correctAnswer: 1, explanation: "Absolute value required." },
        { question: "∫ cos x dx =", options: ["−sin x + C", "sin x + C", "tan x + C", "cos x + C"], correctAnswer: 1, explanation: "Standard." },
        { question: "Forgetting +C costs:", options: ["No marks", "1 mark typically", "All marks", "Bonus"], correctAnswer: 1, explanation: "Standard penalty." },
      ],
    },
  ],
  "y12s-ch9-9b-inverse-circular": [
    {
      title: "Antiderivatives Involving Inverse Circular Functions",
      explanation:
        "Standard forms (a > 0):\n  • ∫ 1/√(a² − x²) dx = arcsin(x/a) + C\n  • ∫ −1/√(a² − x²) dx = arccos(x/a) + C\n  • ∫ a/(a² + x²) dx = arctan(x/a) + C\n  • Equivalently: ∫ 1/(a² + x²) dx = (1/a) arctan(x/a) + C",
      keyPoints: [
        "Identify the form a² ± x² in the denominator",
        "Match coefficient for the 1/a factor in arctan",
        "arccos rarely appears — usually use arcsin and adjust constant",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫ 1/(9 + x²) dx.",
          steps: [
            "Form: 1/(a² + x²) with a = 3",
            "= (1/3) arctan(x/3) + C",
          ],
          answer: "(1/3) arctan(x/3) + C",
        },
      ],
      tips: ["Factor out leading constants to match standard form", "Always verify by differentiation"],
      formulas: [
        { name: "arcsin form", formula: "∫ 1/√(a²−x²) dx = arcsin(x/a)+C" },
        { name: "arctan form", formula: "∫ 1/(a²+x²) dx = (1/a) arctan(x/a)+C" },
      ],
      examQuestion: {
        problem: "Evaluate ∫ 1/√(4 − 9x²) dx.",
        solution: [
          "Re-write: 1/√(4 − (3x)²)",
          "Let u = 3x, du = 3dx",
          "= (1/3) ∫ 1/√(4 − u²) du = (1/3) arcsin(u/2) + C",
          "= (1/3) arcsin(3x/2) + C",
        ],
        answer: "(1/3) arcsin(3x/2) + C",
        marks: 3,
      },
      quiz: [
        { question: "∫ 1/(1+x²) dx =", options: ["arctan x + C", "arcsin x + C", "ln x + C", "1/x + C"], correctAnswer: 0, explanation: "Standard form." },
        { question: "∫ 1/√(1−x²) dx =", options: ["arctan x + C", "arcsin x + C", "ln|x| + C", "−x + C"], correctAnswer: 1, explanation: "arcsin form." },
        { question: "∫ 1/(4+x²) dx =", options: ["arctan(x/2)+C", "(1/2) arctan(x/2)+C", "(1/4) arctan x+C", "arctan(2x)+C"], correctAnswer: 1, explanation: "Factor 1/a." },
      ],
    },
  ],
  "y12s-ch9-9c-substitution": [
    {
      title: "Integration by Substitution",
      explanation:
        "If u = g(x) and du = g'(x) dx, then:\n  ∫ f(g(x))·g'(x) dx = ∫ f(u) du\n\nSteps:\n  1. Choose u so du matches part of the integrand\n  2. Replace x-expression entirely with u\n  3. Integrate in u\n  4. Substitute back to x",
      keyPoints: [
        "Pick u = inner function or expression whose derivative appears",
        "Solve for dx if necessary: dx = du/g'(x)",
        "All x's must disappear before integrating",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫ 2x·(x² + 1)⁵ dx.",
          steps: [
            "Let u = x² + 1; du = 2x dx",
            "∫ u⁵ du = u⁶/6 + C",
            "= (x² + 1)⁶/6 + C",
          ],
          answer: "(x² + 1)⁶/6 + C",
        },
      ],
      tips: ["Look for derivative of inner function as a factor", "If du has extra constants, divide them out"],
      examQuestion: {
        problem: "Evaluate ∫ x·sin(x²) dx.",
        solution: [
          "u = x²; du = 2x dx ⇒ x dx = du/2",
          "= (1/2) ∫ sin u du = −(1/2) cos u + C",
          "= −(1/2) cos(x²) + C",
        ],
        answer: "−½ cos(x²) + C",
        marks: 3,
      },
      quiz: [
        { question: "Best u for ∫ 3x²·(x³+5)⁴ dx:", options: ["x³", "x³+5", "x²", "5"], correctAnswer: 1, explanation: "Derivative 3x² appears." },
        { question: "After sub, integrand should contain:", options: ["x and u", "u only", "x only", "neither"], correctAnswer: 1, explanation: "Convert fully to u." },
        { question: "Final step:", options: ["Stop in u", "Back-substitute u→x", "Differentiate", "Multiply"], correctAnswer: 1, explanation: "Return to original variable." },
      ],
    },
  ],
  "y12s-ch9-9d-definite-substitution": [
    {
      title: "Definite Integrals by Substitution",
      explanation:
        "When evaluating ∫_a^b f(g(x))·g'(x) dx by substitution, EITHER:\n  (a) Change limits: u(a) and u(b) become the new bounds, OR\n  (b) Integrate, back-substitute to x, then evaluate from a to b.\n\nMethod (a) is cleaner and avoids back-substitution.",
      keyPoints: [
        "Limits MUST be transformed when changing variable",
        "Always state new limits explicitly",
        "Definite integrals do NOT require +C",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫₀¹ 2x·(x² + 1)³ dx.",
          steps: [
            "u = x² + 1; du = 2x dx",
            "x = 0 ⇒ u = 1; x = 1 ⇒ u = 2",
            "∫₁² u³ du = [u⁴/4]₁² = (16/4) − (1/4) = 15/4",
          ],
          answer: "15/4",
        },
      ],
      tips: ["Double-check transformed limits with substitution", "Method (b) safer when limits become awkward (e.g., negative)"],
      examQuestion: {
        problem: "Evaluate ∫₀^(π/2) sin x · cos x dx.",
        solution: [
          "u = sin x; du = cos x dx",
          "x=0 ⇒ u=0; x=π/2 ⇒ u=1",
          "∫₀¹ u du = [u²/2]₀¹ = 1/2",
        ],
        answer: "1/2",
        marks: 3,
      },
      quiz: [
        { question: "When substituting in definite integral:", options: ["Keep old limits", "Change limits to u-values", "Multiply by 2", "Skip"], correctAnswer: 1, explanation: "Limits transform with variable." },
        { question: "Need +C in definite integral?", options: ["Yes", "No", "Sometimes", "Only if x=0"], correctAnswer: 1, explanation: "Cancels in subtraction." },
        { question: "Cleanest approach:", options: ["Back-substitute to x", "Change limits", "Use CAS only", "Avoid sub"], correctAnswer: 1, explanation: "Direct evaluation." },
      ],
    },
  ],
  "y12s-ch9-9e-trig-identities": [
    {
      title: "Trigonometric Identities for Integration",
      explanation:
        "Useful identities:\n  • sin²x = (1 − cos 2x)/2\n  • cos²x = (1 + cos 2x)/2\n  • sin x cos x = (sin 2x)/2\n  • 1 + tan²x = sec²x\n  • Product-to-sum: 2 sin A cos B = sin(A+B) + sin(A−B)\n\nUse identities BEFORE integrating powers/products of trig functions.",
      keyPoints: [
        "Reduce sin²/cos² via double-angle identities",
        "Convert products into sums where possible",
        "For odd powers of sin/cos, save one factor and substitute",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫ cos²x dx.",
          steps: [
            "= ∫ (1 + cos 2x)/2 dx",
            "= x/2 + (sin 2x)/4 + C",
          ],
          answer: "x/2 + (sin 2x)/4 + C",
        },
      ],
      tips: ["Memorise the half-angle (power-reduction) forms", "Always look for an identity before resorting to harder methods"],
      formulas: [{ name: "Power reduction", formula: "sin²x = (1−cos 2x)/2" }],
      examQuestion: {
        problem: "Evaluate ∫ sin³x dx.",
        solution: [
          "sin³x = sin x · sin²x = sin x (1 − cos²x)",
          "Let u = cos x, du = −sin x dx",
          "= −∫ (1 − u²) du = −(u − u³/3) + C",
          "= −cos x + (cos³x)/3 + C",
        ],
        answer: "−cos x + (cos³x)/3 + C",
        marks: 4,
      },
      quiz: [
        { question: "sin²x equals:", options: ["(1−cos 2x)/2", "(1+cos 2x)/2", "cos²x", "1−cos²x only"], correctAnswer: 0, explanation: "Power reduction." },
        { question: "For odd power of sin x, sub:", options: ["u=sin x", "u=cos x", "u=tan x", "u=x"], correctAnswer: 1, explanation: "Save one sin for du." },
        { question: "1 + tan²x =", options: ["sec²x", "csc²x", "cot²x", "1"], correctAnswer: 0, explanation: "Pythagorean identity." },
      ],
    },
  ],
  "y12s-ch9-9f-further-substitution": [
    {
      title: "Further Substitution",
      explanation:
        "Beyond direct chain-rule reversal:\n  • Trigonometric substitution for √(a²−x²) (let x = a sin θ), √(a²+x²) (let x = a tan θ), √(x²−a²) (let x = a sec θ)\n  • Algebraic substitution to simplify radicals (e.g., u = √(x+1))\n  • Rationalising substitutions",
      keyPoints: [
        "Trig sub linked to inverse-trig antiderivatives",
        "Always state the domain restriction implied by substitution",
        "Convert dx and any radical fully before integrating",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫ √(4 − x²) dx.",
          steps: [
            "x = 2 sin θ; dx = 2 cos θ dθ; √(4−x²) = 2 cos θ",
            "= ∫ 4 cos²θ dθ = 2(θ + (sin 2θ)/2) + C",
            "= 2 arcsin(x/2) + (x √(4−x²))/2 + C  (after back-substitution)",
          ],
          answer: "2 arcsin(x/2) + ½ x √(4−x²) + C",
        },
      ],
      tips: ["Sketch a right triangle to back-substitute", "Choose substitution based on which inverse trig appears"],
      formulas: [{ name: "Trig sub", formula: "√(a²−x²) ↔ x = a sin θ" }],
      examQuestion: {
        problem: "Evaluate ∫ 1/(x²·√(x²−1)) dx for x > 1.",
        solution: [
          "x = sec θ; dx = sec θ tan θ dθ; √(x²−1) = tan θ",
          "= ∫ (sec θ tan θ)/(sec²θ · tan θ) dθ = ∫ cos θ dθ",
          "= sin θ + C = √(x²−1)/x + C",
        ],
        answer: "√(x²−1)/x + C",
        marks: 4,
      },
      quiz: [
        { question: "For √(a²+x²) use:", options: ["x=a sin θ", "x=a tan θ", "x=a sec θ", "x=a cos θ"], correctAnswer: 1, explanation: "1+tan²=sec²." },
        { question: "Back-substitution helped by:", options: ["Triangle", "Memory only", "CAS", "Guessing"], correctAnswer: 0, explanation: "Right triangle diagram." },
        { question: "After x = a sin θ, √(a²−x²) =", options: ["a tan θ", "a cos θ", "a sec θ", "a sin θ"], correctAnswer: 1, explanation: "Pythagorean identity." },
      ],
    },
  ],
  "y12s-ch9-9g-partial-fractions": [
    {
      title: "Partial Fractions",
      explanation:
        "Decompose a proper rational function P(x)/Q(x) as a sum of simpler fractions:\n  • Distinct linear factor (x − a): A/(x − a)\n  • Repeated linear (x − a)²: A/(x − a) + B/(x − a)²\n  • Irreducible quadratic (x² + bx + c): (Ax + B)/(x² + bx + c)\n\nIntegrate each piece using ln, power, or arctan forms.",
      keyPoints: [
        "Ensure degree(P) < degree(Q); else divide first",
        "Solve for unknowns by substituting strategic x-values or comparing coefficients",
        "Quadratic factors lead to arctan and ln contributions",
      ],
      workedExamples: [
        {
          problem: "Decompose 1/((x−1)(x+2)) and integrate.",
          steps: [
            "1/((x−1)(x+2)) = A/(x−1) + B/(x+2)",
            "x=1: 1 = 3A ⇒ A = 1/3; x=−2: 1 = −3B ⇒ B = −1/3",
            "∫ = (1/3) ln|x−1| − (1/3) ln|x+2| + C",
            "= (1/3) ln|(x−1)/(x+2)| + C",
          ],
          answer: "⅓ ln|(x−1)/(x+2)| + C",
        },
      ],
      tips: ["Always factor the denominator FIRST", "Cover-up method works fast for distinct linear factors"],
      examQuestion: {
        problem: "Evaluate ∫ (3x + 4)/(x² + x − 2) dx.",
        solution: [
          "Factor: x² + x − 2 = (x+2)(x−1)",
          "(3x+4)/((x+2)(x−1)) = A/(x+2) + B/(x−1)",
          "x=1: 7 = 3B ⇒ B = 7/3; x=−2: −2 = −3A ⇒ A = 2/3",
          "∫ = (2/3) ln|x+2| + (7/3) ln|x−1| + C",
        ],
        answer: "⅔ ln|x+2| + 7/3 ln|x−1| + C",
        marks: 4,
      },
      quiz: [
        { question: "Repeated factor (x−a)² needs:", options: ["1 term", "2 terms", "3 terms", "0 terms"], correctAnswer: 1, explanation: "A/(x−a) + B/(x−a)²." },
        { question: "Improper fraction first step:", options: ["Decompose", "Polynomial division", "Substitute", "Skip"], correctAnswer: 1, explanation: "Reduce to proper form." },
        { question: "Quadratic factor numerator form:", options: ["A", "Ax+B", "Ax²+B", "B/x"], correctAnswer: 1, explanation: "Linear over quadratic." },
      ],
    },
  ],
  "y12s-ch9-9h-by-parts": [
    {
      title: "Integration by Parts",
      explanation:
        "From the product rule:\n  ∫ u dv = uv − ∫ v du\n\nChoose u and dv using LIATE priority (Logarithm, Inverse trig, Algebraic, Trigonometric, Exponential): pick u as the leftmost type present.\n\nMay need to apply repeatedly (e.g., ∫ x² eˣ dx) or in a self-referential way (e.g., ∫ eˣ sin x dx).",
      keyPoints: [
        "u should become simpler when differentiated",
        "dv should be easy to integrate",
        "Definite version: [uv]_a^b − ∫_a^b v du",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫ x·eˣ dx.",
          steps: [
            "u = x ⇒ du = dx; dv = eˣ dx ⇒ v = eˣ",
            "= x·eˣ − ∫ eˣ dx",
            "= x·eˣ − eˣ + C = eˣ(x − 1) + C",
          ],
          answer: "eˣ(x − 1) + C",
        },
      ],
      tips: ["LIATE picks u (Log first, Exponential last)", "If repeated, use a tabular shortcut for polynomials × eˣ"],
      formulas: [{ name: "By parts", formula: "∫u dv = uv − ∫v du" }],
      examQuestion: {
        problem: "Evaluate ∫ ln x dx.",
        solution: [
          "u = ln x ⇒ du = dx/x; dv = dx ⇒ v = x",
          "= x·ln x − ∫ x·(1/x) dx",
          "= x ln x − x + C",
        ],
        answer: "x ln x − x + C",
        marks: 3,
      },
      quiz: [
        { question: "By parts comes from:", options: ["Chain rule", "Product rule", "Quotient rule", "FTC"], correctAnswer: 1, explanation: "Reverses product rule." },
        { question: "LIATE selects u as:", options: ["Leftmost present", "Rightmost", "Random", "Always log"], correctAnswer: 0, explanation: "Standard heuristic." },
        { question: "For ∫ x cos x dx pick u =", options: ["cos x", "x", "x cos x", "1"], correctAnswer: 1, explanation: "Algebraic before trig." },
      ],
    },
  ],
  "y12s-ch9-9i-misc": [
    {
      title: "Further Techniques and Mixed Practice",
      explanation:
        "Mixed integration problems often require combining techniques:\n  • Substitution then by parts\n  • Partial fractions then logarithms\n  • Trig identity then substitution\n\nAlways start with the SIMPLEST move that reduces complexity. Common heuristics:\n  • Radicals → trig substitution\n  • Logs/inverse trig × polynomial → by parts\n  • Rational functions → partial fractions",
      keyPoints: [
        "Identify the dominant structure first",
        "Combine multiple techniques as needed",
        "Verify by differentiating the answer",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫ x · arctan x dx.",
          steps: [
            "u = arctan x, dv = x dx ⇒ du = dx/(1+x²), v = x²/2",
            "= (x²/2) arctan x − (1/2) ∫ x²/(1+x²) dx",
            "x²/(1+x²) = 1 − 1/(1+x²)",
            "= (x²/2) arctan x − (1/2)(x − arctan x) + C",
            "= (1/2)[(x² + 1) arctan x − x] + C",
          ],
          answer: "½[(x²+1) arctan x − x] + C",
        },
      ],
      tips: ["Re-write rational expressions BEFORE integrating", "Don't be afraid to switch techniques mid-solution"],
      examQuestion: {
        problem: "Evaluate ∫ (e^√x)/√x dx.",
        solution: [
          "u = √x ⇒ du = 1/(2√x) dx ⇒ dx/√x = 2 du",
          "= ∫ eᵘ · 2 du = 2eᵘ + C",
          "= 2 e^√x + C",
        ],
        answer: "2 e^√x + C",
        marks: 3,
      },
      quiz: [
        { question: "First step on ∫ x²/(1+x²) dx:", options: ["By parts", "Polynomial division (1−1/(1+x²))", "Sub u=x²", "Trig sub"], correctAnswer: 1, explanation: "Algebraic simplification." },
        { question: "Best for radical √(a²−x²):", options: ["By parts", "Trig sub x=a sin θ", "Partial fractions", "Logs"], correctAnswer: 1, explanation: "Standard." },
        { question: "Verify integration by:", options: ["CAS only", "Differentiating answer", "Plotting", "Guessing"], correctAnswer: 1, explanation: "FTC." },
      ],
    },
  ],
  "y12s-ch9-review": [
    {
      title: "Review of Chapter 9 — Integration",
      explanation:
        "Complete integration toolkit: standard antiderivatives, inverse-trig forms, substitution (basic, definite, trig), trig identities, partial fractions, and integration by parts. Recognise the structure of each integrand and pick the most efficient technique.",
      keyPoints: [
        "Match form to method (radical → trig sub; rational → partial fractions; product → by parts)",
        "Always check via differentiation",
        "Definite integrals: change limits OR back-substitute",
        "Combine techniques when needed",
      ],
      workedExamples: [
        {
          problem: "Evaluate ∫₀¹ x/(1 + x²) dx.",
          steps: [
            "u = 1 + x²; du = 2x dx",
            "x=0⇒u=1; x=1⇒u=2",
            "= (1/2) ∫₁² 1/u du = (1/2) ln 2",
          ],
          answer: "(ln 2)/2",
        },
      ],
      tips: ["Build a 'method first' habit", "Practise tech-free integration extensively"],
      examQuestion: {
        problem: "Find ∫ 1/(x² + 4x + 13) dx.",
        solution: [
          "Complete the square: x² + 4x + 13 = (x+2)² + 9",
          "Sub u = x + 2",
          "∫ 1/(u² + 9) du = (1/3) arctan(u/3) + C",
          "= (1/3) arctan((x+2)/3) + C",
        ],
        answer: "⅓ arctan((x+2)/3) + C",
        marks: 4,
      },
      quiz: [
        { question: "x²+bx+c → arctan via:", options: ["Factor", "Complete the square", "Trig sub", "By parts"], correctAnswer: 1, explanation: "Reduces to a²+u² form." },
        { question: "∫ ln x dx by:", options: ["Substitution", "By parts", "Partial fractions", "Standard form"], correctAnswer: 1, explanation: "u=ln x, dv=dx." },
        { question: "Definite integral needs +C?", options: ["Yes", "No", "Only positive", "Only odd"], correctAnswer: 1, explanation: "Cancels." },
      ],
    },
  ],
};
