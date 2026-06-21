import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 7: Further Functions (VCE Unit 3)

export const year12MethodsCh7Lessons: TopicLessonsMap = {
  "y12m-ch7-7a-more-power": [
    {
      title: "More Power Functions",
      explanation:
        "A POWER FUNCTION has the form f(x) = xⁿ where n is a real constant. The behaviour depends entirely on n.\n\nPOSITIVE INTEGER n: domain ℝ; even n give an even function symmetric in the y-axis with range [0, ∞); odd n give an odd function symmetric in the origin with range ℝ. As n grows, the curve flattens near zero and steepens beyond x = ±1.\n\nNEGATIVE INTEGER n (write xⁿ = 1/x|n|): the y-axis becomes a vertical asymptote and the x-axis a horizontal asymptote. Even negative powers give a curve sitting entirely above the x-axis with two branches; odd negative powers give branches in opposite quadrants (Q1 and Q3 for x⁻¹; Q2 and Q4 for −x⁻¹).\n\nFRACTIONAL POWERS x^(1/n) = ⁿ√x: when n is even the domain restricts to x ≥ 0; when n is odd the domain is ℝ.\n\nGENERAL FRACTIONAL p/q: x^(p/q) = (x^(1/q))^p; the domain is determined by the q-th root.\n\nKEY POINT every power function passes through (1, 1); for n > 0 it also passes through (0, 0); for n < 0 it passes through (1, 1) and (−1, ±1) only.",
      keyPoints: [
        "f(x) = xⁿ behaviour set by sign and parity of n",
        "Negative powers introduce asymptotes at x = 0 and y = 0",
        "Even-denominator fractional powers restrict to x ≥ 0",
        "All power functions pass through (1, 1)",
      ],
      workedExamples: [
        {
          problem: "Sketch f(x) = x⁻², stating domain, range and asymptotes.",
          steps: [
            "f(x) = 1/x² is even — symmetric in the y-axis",
            "Domain x ≠ 0; range y > 0",
            "Asymptotes x = 0 and y = 0",
            "Through (±1, 1)",
          ],
          answer: "Domain x ≠ 0; range (0, ∞); both branches above the x-axis.",
        },
        {
          problem: "State the domain of f(x) = x^(1/4) and find f(16).",
          steps: [
            "Even denominator → x ≥ 0",
            "f(16) = ⁴√16 = 2",
          ],
          answer: "Domain [0, ∞); f(16) = 2.",
        },
      ],
      tips: [
        "Convert negative or fractional powers into root/reciprocal form to see the domain",
      ],
      formulas: [
        { name: "Power function", formula: "f(x) = xⁿ" },
        { name: "Negative power", formula: "x⁻ⁿ = 1/xⁿ" },
        { name: "Fractional power", formula: "x^(1/n) = ⁿ√x" },
      ],
      examQuestion: {
        problem: "State the maximal domain and range of f(x) = x^(2/3) and sketch its key features.",
        solution: [
          "x^(2/3) = (x^(1/3))² — odd cube root then squared",
          "Domain ℝ; range [0, ∞)",
          "Even function (because of the square): symmetric in y-axis",
          "Through (0, 0) and (±1, 1)",
          "Cusp-like point at the origin (vertical tangent)",
        ],
        answer: "Domain ℝ; range [0, ∞); cusp at origin; passes through (±1, 1).",
        marks: 3,
      },
      commonErrors: [
        "Allowing negative inputs into x^(1/2)",
        "Forgetting asymptotes for negative powers",
      ],
      summary: [
        "Sign and parity of n determine the silhouette and asymptotes",
      ],
      quiz: [
        { question: "Domain of f(x) = √x:", options: ["ℝ", "x ≥ 0", "x > 0", "x ≠ 0"], correctAnswer: 1, explanation: "Even root needs non-negative." },
        { question: "Asymptote of f(x) = 1/x³:", options: ["y = 1", "x = 1", "x = 0 and y = 0", "None"], correctAnswer: 2, explanation: "Negative integer power." },
        { question: "All power functions pass through:", options: ["(0, 0)", "(1, 1)", "(0, 1)", "(−1, 0)"], correctAnswer: 1, explanation: "1ⁿ = 1." },
      ],
    },
  ],

  "y12m-ch7-7b-composite-inverse": [
    {
      title: "Composite and Inverse Functions",
      explanation:
        "COMPOSITE FUNCTION: (f ∘ g)(x) = f(g(x)). Apply g first, then f. The composition is well-defined only when the range of g is a subset of the domain of f.\n\nDOMAIN of f ∘ g: { x ∈ dom g : g(x) ∈ dom f }. Often this is more restrictive than dom g alone.\n\nINVERSE FUNCTION f⁻¹ exists if and only if f is ONE-TO-ONE (injective). Geometrically, the graph of f passes the horizontal line test. To restrict a non-injective function (e.g. f(x) = x²), narrow the domain to a piece on which f is monotonic (e.g. x ≥ 0).\n\nFINDING f⁻¹:\n  1. Write y = f(x).\n  2. Swap x and y.\n  3. Solve for y.\n  4. Domain of f⁻¹ = range of f; range of f⁻¹ = domain of f.\n\nKEY IDENTITIES: f(f⁻¹(x)) = x for x ∈ dom f⁻¹; f⁻¹(f(x)) = x for x ∈ dom f. The graphs of f and f⁻¹ are reflections in y = x.",
      keyPoints: [
        "f ∘ g = f(g(x)) — order matters",
        "Composite domain = subset of dom g forcing g(x) into dom f",
        "Inverse exists ⇔ f is one-to-one",
        "f and f⁻¹ are reflections in y = x",
      ],
      workedExamples: [
        {
          problem: "Given f(x) = 3x + 2 and g(x) = x², find f(g(x)) and g(f(x)) and state their domains.",
          steps: [
            "f(g(x)) = f(x²) = 3x² + 2; domain ℝ",
            "g(f(x)) = g(3x + 2) = (3x + 2)²; domain ℝ",
          ],
          answer: "f(g(x)) = 3x² + 2; g(f(x)) = (3x + 2)²; both have domain ℝ.",
        },
        {
          problem: "Find the inverse of f(x) = (x − 1)/2 + 3.",
          steps: [
            "y = (x − 1)/2 + 3 → swap: x = (y − 1)/2 + 3",
            "x − 3 = (y − 1)/2",
            "2(x − 3) = y − 1",
            "y = 2x − 5",
          ],
          answer: "f⁻¹(x) = 2x − 5; domain ℝ.",
        },
      ],
      tips: [
        "Always check whether the composite domain is restricted by the inner range",
      ],
      formulas: [
        { name: "Composite", formula: "(f ∘ g)(x) = f(g(x))" },
        { name: "Inverse identity", formula: "f(f⁻¹(x)) = x = f⁻¹(f(x))" },
      ],
      examQuestion: {
        problem: "f: [0, ∞) → ℝ, f(x) = √x + 1. Find f⁻¹, stating its domain and range.",
        solution: [
          "Range of f: y ≥ 1",
          "y = √x + 1 → swap: x = √y + 1",
          "x − 1 = √y → y = (x − 1)²",
          "Domain f⁻¹ = range f = [1, ∞); range f⁻¹ = [0, ∞)",
        ],
        answer: "f⁻¹(x) = (x − 1)², domain [1, ∞), range [0, ∞).",
        marks: 4,
      },
      commonErrors: [
        "Confusing f ∘ g with g ∘ f",
        "Forgetting to swap domain and range when taking inverse",
      ],
      summary: [
        "Composition: outside-in evaluation; inverse: swap-and-solve plus swap domain/range",
      ],
      quiz: [
        { question: "(f ∘ g)(x) means:", options: ["f(g(x))", "g(f(x))", "f(x)g(x)", "f(x) + g(x)"], correctAnswer: 0, explanation: "Apply g first." },
        { question: "Inverse exists when f is:", options: ["Continuous", "One-to-one", "Bounded", "Even"], correctAnswer: 1, explanation: "Injective passes horizontal line test." },
        { question: "Graph of f⁻¹ is f reflected in:", options: ["x-axis", "y-axis", "y = x", "origin"], correctAnswer: 2, explanation: "Swap of x and y." },
      ],
    },
  ],

  "y12m-ch7-7c-sums-products-ordinates": [
    {
      title: "Sums and Products of Functions and Addition of Ordinates",
      explanation:
        "SUM (f + g)(x) = f(x) + g(x), PRODUCT (fg)(x) = f(x)g(x), DIFFERENCE and QUOTIENT defined analogously. The domain of any combined function is the intersection of the original domains (with the quotient also requiring the denominator non-zero).\n\nADDITION OF ORDINATES is the graphical technique for sketching y = f(x) + g(x): at each chosen x, add the y-values (ordinates) of the two graphs and plot the result. Useful tactical points:\n  • Where one function is zero, the sum equals the other function.\n  • Where both share a sign, the sum is amplified.\n  • Where they have opposite signs, the sum is partially cancelled.\n  • Where one becomes very negative and the other very positive, look for crossings of the sum with the x-axis.\n\nFor PRODUCT GRAPHS: where one factor is zero the product is zero; the sign of the product is the sign-product of the factors; multiplying by a function tending to zero damps oscillations (e.g. xe⁻ˣ).\n\nThis method is essential for sketching mixed functions like x + sin x, sin x + cos x, x²e⁻ˣ.",
      keyPoints: [
        "Combined domain = intersection of original domains",
        "(f + g)(x) is found pointwise from ordinates",
        "Zero of either function pins behaviour of the combination",
      ],
      workedExamples: [
        {
          problem: "Sketch y = x + sin x using addition of ordinates.",
          steps: [
            "Sketch y = x and y = sin x on the same axes",
            "Where sin x = 0 (x = 0, π, 2π…) the sum equals x",
            "Where sin x = 1 the sum equals x + 1; where sin x = −1 the sum equals x − 1",
            "Result is the line y = x with a 'wobble' of amplitude 1 superimposed",
          ],
          answer: "Slanting wave: line y = x with sinusoidal oscillation of amplitude 1.",
        },
      ],
      tips: [
        "Tabulate a few key x-values to anchor the sketch",
      ],
      formulas: [
        { name: "Sum", formula: "(f + g)(x) = f(x) + g(x)" },
        { name: "Product", formula: "(fg)(x) = f(x)g(x)" },
      ],
      examQuestion: {
        problem: "Let f(x) = x² and g(x) = e⁻ˣ. Sketch h(x) = f(x)·g(x) = x²e⁻ˣ for x ≥ 0, identifying any maximum.",
        solution: [
          "h(0) = 0; h(x) > 0 for x > 0",
          "As x → ∞, e⁻ˣ dominates so h → 0",
          "Differentiate (preview): h′(x) = 2xe⁻ˣ − x²e⁻ˣ = xe⁻ˣ(2 − x)",
          "h′ = 0 at x = 0 or x = 2; max at x = 2",
          "h(2) = 4e⁻² ≈ 0.541",
        ],
        answer: "h(0) = 0, max at (2, 4/e²) ≈ (2, 0.54); decays to 0.",
        marks: 4,
      },
      commonErrors: [
        "Ignoring domain intersection",
        "Multiplying ordinates by adding instead",
      ],
      summary: [
        "Combinations of functions are pointwise; sketches use anchor points + sign analysis",
      ],
      quiz: [
        { question: "Domain of (f/g)(x) requires:", options: ["dom f only", "dom g only", "Intersection and g(x) ≠ 0", "Union"], correctAnswer: 2, explanation: "Quotient adds non-zero condition." },
        { question: "If f(a) = 0, then (fg)(a) = ?", options: ["g(a)", "0", "1", "Undefined"], correctAnswer: 1, explanation: "Product with zero." },
        { question: "Addition of ordinates uses:", options: ["x-values", "y-values", "Slopes", "Areas"], correctAnswer: 1, explanation: "Add ordinates = add y-values." },
      ],
    },
  ],

  "y12m-ch7-7d-notation-identities": [
    {
      title: "Function Notation and Identities",
      explanation:
        "FUNCTION NOTATION uses a symbol (e.g. f, g, h) followed by a domain element in brackets: f(x). The notation hides the rule but reveals structure: f(x + 2) means evaluate the rule at the argument x + 2; f²(x) (in some contexts) means [f(x)]², while f∘f(x) = f(f(x)) is the composition.\n\nA FUNCTION IDENTITY is an equation in functions that holds for every x in the relevant domain. Important identities:\n\n  • Inverse: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x\n  • Even function: f(−x) = f(x)\n  • Odd function: f(−x) = −f(x)\n  • Periodic: f(x + T) = f(x) for some T > 0\n  • Reciprocal: f(1/x) related to f(x) — rare but appears in modelling\n\nIDENTITIES VS EQUATIONS: an equation is solved (find x making it true). An identity is proved (show it holds for all x). Algebraic manipulation must respect domain.\n\nUse function notation cleanly: avoid writing f(x)·f(y) when you mean f(x + y), and never confuse f(x²) with [f(x)]².",
      keyPoints: [
        "f(x + 2) — substitute the entire expression as argument",
        "Identity = always true; equation = sometimes true",
        "Even: f(−x) = f(x); odd: f(−x) = −f(x)",
        "f(f⁻¹(x)) = x identifies inverses",
      ],
      workedExamples: [
        {
          problem: "Determine whether f(x) = x³ − x is even, odd or neither.",
          steps: [
            "f(−x) = (−x)³ − (−x) = −x³ + x = −(x³ − x) = −f(x)",
            "Therefore f is odd",
          ],
          answer: "f is an odd function.",
        },
        {
          problem: "Show that f(x) = e^x and g(x) = ln x satisfy the identity f(g(x)) = x for x > 0.",
          steps: [
            "f(g(x)) = e^(ln x) = x by definition of inverse",
            "Domain restriction: ln x requires x > 0; result is defined there",
          ],
          answer: "f and g are inverses on x > 0.",
        },
      ],
      tips: [
        "Test parity by substituting −x and simplifying carefully",
      ],
      formulas: [
        { name: "Even", formula: "f(−x) = f(x)" },
        { name: "Odd", formula: "f(−x) = −f(x)" },
        { name: "Periodic", formula: "f(x + T) = f(x)" },
      ],
      examQuestion: {
        problem: "Show that for f(x) = (x − 1)/(x + 1), f(f(x)) = −1/x. State any restrictions.",
        solution: [
          "Compute f(x) = (x − 1)/(x + 1); require x ≠ −1",
          "f(f(x)) = (f(x) − 1)/(f(x) + 1)",
          "Numerator: (x − 1)/(x + 1) − 1 = (x − 1 − (x + 1))/(x + 1) = −2/(x + 1)",
          "Denominator: (x − 1)/(x + 1) + 1 = (x − 1 + x + 1)/(x + 1) = 2x/(x + 1)",
          "Ratio: (−2/(x + 1)) / (2x/(x + 1)) = −2/2x = −1/x",
          "Restrictions: x ≠ −1 (for f) and x ≠ 0 (for −1/x)",
        ],
        answer: "f(f(x)) = −1/x for x ≠ 0, x ≠ −1.",
        marks: 4,
      },
      commonErrors: [
        "Treating f(x²) as [f(x)]²",
        "Skipping domain restrictions when proving identities",
      ],
      summary: [
        "Identities are universal statements about a function — verify carefully and state the domain",
      ],
      quiz: [
        { question: "Even function satisfies:", options: ["f(−x) = f(x)", "f(−x) = −f(x)", "f(x + 1) = f(x)", "f(0) = 0"], correctAnswer: 0, explanation: "Symmetric in y-axis." },
        { question: "f(x) = x⁴ + 1 is:", options: ["Odd", "Even", "Neither", "Both"], correctAnswer: 1, explanation: "All even powers." },
        { question: "Period of f(x) = sin x:", options: ["π", "2π", "π/2", "None"], correctAnswer: 1, explanation: "Definition." },
      ],
    },
  ],

  "y12m-ch7-7e-families-literal": [
    {
      title: "Families of Functions and Solving Literal Equations",
      explanation:
        "A FAMILY OF FUNCTIONS is a set of functions parameterised by one or more constants. Common examples:\n\n  • Quadratic family: f(x) = a(x − h)² + k\n  • Exponential family: f(x) = A·e^(kx) + c\n  • Sinusoidal family: f(x) = a·sin(n(x − h)) + b\n  • Power family: f(x) = a·xⁿ\n\nIn modelling, the parameters are determined from given data points (e.g. 'passes through (0, 5) and has maximum 10'). The number of conditions must equal the number of free parameters.\n\nLITERAL EQUATIONS are equations where some letters are parameters and others are unknowns. The strategy is identical to numeric algebra but answers are expressed in terms of the parameters. Common settings:\n\n  • Solve a·x + b = c·x + d for x → x = (d − b)/(a − c).\n  • Make x the subject of y = (px + q)/(rx + s).\n  • Find conditions on parameters under which an equation has a unique, no, or infinitely many solutions.\n\nRESTRICTIONS: always state when the answer is invalid (e.g. denominators ≠ 0, discriminant non-negative).",
      keyPoints: [
        "A family is a single rule with free parameters",
        "Number of data points = number of parameters to fix",
        "Literal equations: solve as if numeric, then state restrictions",
      ],
      workedExamples: [
        {
          problem: "Make x the subject of y = (3x + 2)/5.",
          steps: [
            "Multiply by 5: 5y = 3x + 2",
            "Subtract 2: 5y − 2 = 3x",
            "x = (5y − 2)/3",
          ],
          answer: "x = (5y − 2)/3.",
        },
        {
          problem: "An exponential of form f(x) = A·e^(kx) + 4 passes through (0, 6) and (1, 10). Find A and k.",
          steps: [
            "(0, 6): A + 4 = 6 → A = 2",
            "(1, 10): 2e^k + 4 = 10 → e^k = 3 → k = ln 3",
          ],
          answer: "A = 2, k = ln 3, so f(x) = 2e^(x ln 3) + 4.",
        },
      ],
      tips: [
        "Always state non-zero conditions on denominators",
      ],
      formulas: [
        { name: "Quadratic family", formula: "f(x) = a(x − h)² + k" },
        { name: "Exponential family", formula: "f(x) = A·e^(kx) + c" },
      ],
      examQuestion: {
        problem: "Solve for x in terms of a and b (a ≠ b): a(x − b) = b(x + a).",
        solution: [
          "Expand: ax − ab = bx + ab",
          "Group: ax − bx = 2ab",
          "(a − b)x = 2ab",
          "x = 2ab/(a − b), valid for a ≠ b",
        ],
        answer: "x = 2ab/(a − b), a ≠ b.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to state a ≠ b",
        "Assuming a parameter is non-zero without checking",
      ],
      summary: [
        "Families = parameterised rules; literal equations = symbolic algebra with stated restrictions",
      ],
      quiz: [
        { question: "Solve ax = b for x (a ≠ 0):", options: ["x = a/b", "x = b/a", "x = ab", "x = a + b"], correctAnswer: 1, explanation: "Divide by a." },
        { question: "Number of parameters in y = a(x − h)² + k:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "a, h, k." },
        { question: "Restriction in y = 1/(x − a):", options: ["x > a", "x ≠ a", "x < a", "None"], correctAnswer: 1, explanation: "Denominator non-zero." },
      ],
    },
  ],

  "y12m-ch7-review": [
    {
      title: "Chapter 7 Review — Further Functions",
      explanation:
        "POWER FUNCTIONS f(x) = xⁿ behave very differently for positive integer, negative integer, and fractional n. Always rewrite negative as reciprocal and fractional as a root before stating the domain.\n\nCOMPOSITES (f ∘ g)(x) = f(g(x)) — outer applied to inner. The domain is restricted to those x with g(x) ∈ dom f.\n\nINVERSES require f to be one-to-one (horizontal line test). Find the inverse by swapping x and y, solving for y; the domain and range swap.\n\nSUMS, PRODUCTS, AND ADDITION OF ORDINATES allow construction of complex graphs from simpler components — invaluable for sketching x + sin x, x²e⁻ˣ, etc.\n\nFUNCTION IDENTITIES (even/odd/periodic/inverse) describe universal symmetries; equations are solved while identities are proved.\n\nFAMILIES OF FUNCTIONS are parameterised rules; given enough data, the parameters are determined uniquely. LITERAL EQUATIONS proceed via the same algebra as numeric ones, with explicit restrictions on parameters.",
      keyPoints: [
        "Power functions: rewrite to reveal domain",
        "Composition: outside-in; domain restriction is key",
        "Inverse: swap x and y; swap domain and range",
        "Families of functions parameterise rule shapes",
      ],
      workedExamples: [
        {
          problem: "Given f(x) = ln(x − 2), find f⁻¹ and state its domain and range.",
          steps: [
            "Domain f: x > 2, range ℝ",
            "y = ln(x − 2) → swap: x = ln(y − 2)",
            "y − 2 = e^x → y = e^x + 2",
            "Domain f⁻¹ = range f = ℝ; range f⁻¹ = (2, ∞)",
          ],
          answer: "f⁻¹(x) = e^x + 2, domain ℝ, range (2, ∞).",
        },
      ],
      tips: [
        "When proving identities, always specify the domain of validity",
      ],
      formulas: [
        { name: "Composition", formula: "(f ∘ g)(x) = f(g(x))" },
        { name: "Inverse identity", formula: "f(f⁻¹(x)) = x" },
      ],
      examQuestion: {
        problem: "f(x) = (x − 3)² + 2 with domain x ≥ 3. Find f⁻¹, stating its domain and range.",
        solution: [
          "Range f: y ≥ 2",
          "y = (x − 3)² + 2 → swap: x = (y − 3)² + 2",
          "(y − 3)² = x − 2 → y − 3 = ±√(x − 2)",
          "Domain x ≥ 3 ⇒ y − 3 ≥ 0, take +",
          "y = 3 + √(x − 2)",
          "Domain f⁻¹ = [2, ∞); range f⁻¹ = [3, ∞)",
        ],
        answer: "f⁻¹(x) = 3 + √(x − 2), domain [2, ∞), range [3, ∞).",
        marks: 4,
      },
      commonErrors: [
        "Taking both ± after squaring without checking the original domain",
      ],
      summary: [
        "Algebraic toolkit for functions before calculus begins",
      ],
      quiz: [
        { question: "Inverse of f(x) = 2x − 4:", options: ["x/2 + 2", "(x + 4)/2", "2x + 4", "Both A and B"], correctAnswer: 3, explanation: "(x + 4)/2 = x/2 + 2." },
        { question: "Domain of f(x) = √(x − 5):", options: ["ℝ", "x ≥ 0", "x ≥ 5", "x > 5"], correctAnswer: 2, explanation: "Argument non-negative." },
        { question: "Family y = a sin x has parameter:", options: ["a only", "a and x", "Just x", "None"], correctAnswer: 0, explanation: "x is the variable." },
      ],
    },
  ],
};
