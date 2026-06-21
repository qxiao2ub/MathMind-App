import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 1: Functions and Relations (VCE Unit 3)

export const year12MethodsCh1Lessons: TopicLessonsMap = {
  // ─── 1A ────────────────────────────────────────────────────────────
  "y12m-ch1-1a-set-notation": [
    {
      title: "Set Notation and Sets of Numbers",
      explanation:
        "MATHEMATICAL METHODS uses precise SET NOTATION to describe collections of numbers. The standard sets you must know are:\n  • ℕ — the NATURAL numbers {1, 2, 3, …} (some texts include 0).\n  • ℤ — the INTEGERS {…, −2, −1, 0, 1, 2, …}.\n  • ℚ — the RATIONAL numbers (numbers expressible as a/b with a, b ∈ ℤ, b ≠ 0).\n  • ℝ — the REAL numbers (every point on the number line).\n\nINCLUSION CHAIN: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.\n\nINTERVAL NOTATION represents sets of real numbers between two endpoints:\n  • [a, b] — closed interval, includes both a and b.\n  • (a, b) — open interval, excludes both endpoints.\n  • [a, b), (a, b] — half-open intervals.\n  • [a, ∞), (−∞, b] — unbounded intervals (always open at ∞).\n\nSET-BUILDER NOTATION:\n  • {x : condition on x} reads 'the set of all x such that …'.\n  • Example: {x ∈ ℝ : x ≥ 0} is the set of non-negative reals.\n\nUNION ∪ joins sets; INTERSECTION ∩ keeps common elements; SET DIFFERENCE \\ removes elements.",
      keyPoints: [
        "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",
        "Square bracket = endpoint included; round bracket = excluded",
        "∞ always uses an open bracket",
        "{x : condition} is set-builder notation",
      ],
      workedExamples: [
        {
          problem: "Solve x² < 16 and write the solution in interval notation.",
          steps: [
            "x² < 16 ⇔ |x| < 4",
            "−4 < x < 4",
            "Interval: (−4, 4)",
          ],
          answer: "(−4, 4).",
        },
        {
          problem: "Express {x ∈ ℝ : x ≥ 2} in interval notation.",
          steps: [
            "Endpoint 2 is included (≥) → square bracket",
            "Unbounded above → open at ∞",
            "Result: [2, ∞)",
          ],
          answer: "[2, ∞).",
        },
      ],
      tips: [
        "Always check whether endpoints are included before choosing brackets",
        "Sketch a number line if unsure about strict vs non-strict inequalities",
      ],
      definitions: [
        { term: "Rational number", meaning: "Number expressible as p/q with p, q ∈ ℤ, q ≠ 0." },
        { term: "Interval", meaning: "Connected set of real numbers between two endpoints." },
      ],
      formulas: [
        { name: "Closed interval", formula: "[a, b] = {x ∈ ℝ : a ≤ x ≤ b}" },
        { name: "Open interval", formula: "(a, b) = {x ∈ ℝ : a < x < b}" },
      ],
      examQuestion: {
        problem: "Write the set of solutions of 1 ≤ x < 5 in interval notation and state which standard set it belongs to.",
        solution: [
          "Endpoints: 1 included (≤), 5 excluded (<)",
          "Interval: [1, 5)",
          "Subset of ℝ",
        ],
        answer: "[1, 5), a subset of ℝ.",
        marks: 2,
      },
      commonErrors: [
        "Using [∞] instead of an open bracket at ∞",
        "Mixing up ⊂ and ∈",
        "Choosing [a, b] for strict inequality",
      ],
      summary: [
        "Know ℕ, ℤ, ℚ, ℝ and the inclusion chain",
        "Use brackets correctly for open/closed intervals",
        "Set-builder notation underpins domain work",
      ],
      quiz: [
        { question: "Which set contains √2?", options: ["ℕ", "ℤ", "ℚ", "ℝ only"], correctAnswer: 3, explanation: "√2 is irrational, only ℝ." },
        { question: "Interval (−2, 5] is:", options: ["Open", "Closed", "Half-open", "Empty"], correctAnswer: 2, explanation: "Excludes −2, includes 5." },
        { question: "x² < 9 in interval form is:", options: ["[−3, 3]", "(−3, 3)", "(−9, 9)", "[0, 3)"], correctAnswer: 1, explanation: "Strict inequality → open." },
      ],
    },
  ],

  // ─── 1B ────────────────────────────────────────────────────────────
  "y12m-ch1-1b-relations-functions": [
    {
      title: "Identifying and Describing Relations and Functions",
      explanation:
        "A RELATION is any set of ordered pairs (x, y). Its DOMAIN is the set of all x-values that appear; its RANGE is the set of all y-values that appear.\n\nA FUNCTION is a special relation in which EACH x-value gives EXACTLY ONE y-value. In symbols: if (x, y₁) and (x, y₂) are both in the relation, then y₁ = y₂.\n\nVERTICAL LINE TEST (graphical):\n  • A graph represents a function if and only if every vertical line meets the graph in AT MOST one point.\n\nFUNCTION NOTATION:\n  • f : A → B, x ↦ f(x).\n  • A is the domain, B is the codomain (a set containing the range).\n  • f(x) is the rule.\n\nDESCRIBING A FUNCTION FULLY requires THREE things:\n  1. The DOMAIN.\n  2. The RULE.\n  3. (Often the codomain or stated range.)\n\nIf only a rule is given, the IMPLIED DOMAIN is the largest subset of ℝ for which the rule produces real numbers.",
      keyPoints: [
        "Function: each input → exactly one output",
        "Vertical line test detects functions on a graph",
        "Notation: f : A → B, x ↦ f(x)",
        "A function is determined by domain + rule",
      ],
      workedExamples: [
        {
          problem: "Is the relation {(1, 2), (2, 5), (1, 7)} a function?",
          steps: [
            "Check x-values for repetition: x = 1 appears twice with y = 2 and y = 7",
            "Different y for the same x → NOT a function",
          ],
          answer: "Not a function.",
        },
        {
          problem: "State whether y² = x defines y as a function of x.",
          steps: [
            "Solve for y: y = ±√x",
            "For x = 4, y = 2 or y = −2",
            "Vertical line at x = 4 meets curve twice → fails vertical line test",
          ],
          answer: "Not a function.",
        },
      ],
      tips: [
        "When in doubt, sketch the relation",
        "Check repeated x-values in tables of pairs",
      ],
      definitions: [
        { term: "Relation", meaning: "Any set of ordered pairs." },
        { term: "Function", meaning: "Relation with exactly one output for each input." },
        { term: "Domain", meaning: "Set of all input values." },
        { term: "Range", meaning: "Set of all output values actually achieved." },
      ],
      examQuestion: {
        problem: "State the domain and range of f : [−2, 3] → ℝ, f(x) = x² + 1.",
        solution: [
          "Domain stated: [−2, 3]",
          "Min value at x = 0: f(0) = 1",
          "Max at endpoints: f(−2) = 5, f(3) = 10",
          "Range: [1, 10]",
        ],
        answer: "Domain [−2, 3]; range [1, 10].",
        marks: 3,
      },
      commonErrors: [
        "Confusing range with codomain",
        "Forgetting endpoints in the range when domain is restricted",
      ],
      summary: [
        "Functions are single-valued relations",
        "State domain and rule together",
        "Check the vertical line test on graphs",
      ],
      quiz: [
        { question: "Vertical line test detects:", options: ["One-to-one", "Functions", "Continuity", "Differentiability"], correctAnswer: 1, explanation: "Single output per input." },
        { question: "Domain is the set of:", options: ["Outputs", "Inputs", "Pairs", "Codomain"], correctAnswer: 1, explanation: "All x-values." },
        { question: "y² = x is:", options: ["A function", "Not a function", "Linear", "Constant"], correctAnswer: 1, explanation: "Two y-values for x > 0." },
      ],
    },
  ],

  // ─── 1C ────────────────────────────────────────────────────────────
  "y12m-ch1-1c-types-implied-domains": [
    {
      title: "Types of Functions and Implied Domains",
      explanation:
        "Common FUNCTION TYPES studied in Methods:\n  • POLYNOMIAL: f(x) = a_n x^n + … + a_0. Implied domain: ℝ.\n  • RATIONAL: f(x) = p(x)/q(x). Implied domain: {x ∈ ℝ : q(x) ≠ 0}.\n  • RADICAL (square root and other even roots): f(x) = √(g(x)). Implied domain: {x : g(x) ≥ 0}.\n  • LOGARITHMIC: f(x) = log_a(g(x)). Implied domain: {x : g(x) > 0, a > 0, a ≠ 1}.\n  • EXPONENTIAL: f(x) = a^x. Implied domain: ℝ.\n\nHYBRID (PIECEWISE) FUNCTIONS are defined by different rules on different parts of the domain. Example:\n  f(x) = { x² if x < 1 ; 2x + 1 if x ≥ 1 }.\nFor a hybrid function to be CONTINUOUS at the join, the two rules must agree there.\n\nIMPLIED DOMAIN = the largest subset of ℝ on which the rule produces a real number. It is found by combining ALL restrictions:\n  • Denominators ≠ 0,\n  • Even radicands ≥ 0,\n  • Logarithm arguments > 0.",
      keyPoints: [
        "Polynomials and exponentials have domain ℝ",
        "Rational: exclude zeros of denominator",
        "Even root: radicand ≥ 0",
        "Log: argument > 0",
        "Hybrid functions need agreement at joins for continuity",
      ],
      workedExamples: [
        {
          problem: "Find the implied domain of f(x) = 1/(x − 3).",
          steps: [
            "Denominator zero when x = 3",
            "Domain: ℝ \\ {3}",
          ],
          answer: "ℝ \\ {3}.",
        },
        {
          problem: "Find the implied domain of f(x) = √(x − 2) + log(5 − x).",
          steps: [
            "Radicand: x − 2 ≥ 0 → x ≥ 2",
            "Log argument: 5 − x > 0 → x < 5",
            "Both: 2 ≤ x < 5",
          ],
          answer: "[2, 5).",
        },
      ],
      tips: [
        "List every restriction separately, then intersect",
        "Use a number line for two or more restrictions",
      ],
      definitions: [
        { term: "Implied domain", meaning: "Largest subset of ℝ for which the rule is defined." },
        { term: "Hybrid function", meaning: "Function defined by different rules on different intervals." },
      ],
      examQuestion: {
        problem: "Find the implied domain of f(x) = √(x + 1) / (x − 2).",
        solution: [
          "Radicand: x + 1 ≥ 0 → x ≥ −1",
          "Denominator: x − 2 ≠ 0 → x ≠ 2",
          "Combined: [−1, 2) ∪ (2, ∞)",
        ],
        answer: "[−1, 2) ∪ (2, ∞).",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to exclude zeros of the denominator",
        "Allowing log argument = 0",
        "Allowing even radicand to be negative",
      ],
      summary: [
        "Identify the function type",
        "List all restrictions",
        "Take the intersection for the implied domain",
      ],
      quiz: [
        { question: "Implied domain of √(x − 5):", options: ["ℝ", "[5, ∞)", "(5, ∞)", "(−∞, 5]"], correctAnswer: 1, explanation: "Need x − 5 ≥ 0." },
        { question: "Implied domain of log(x + 1):", options: ["[−1, ∞)", "(−1, ∞)", "ℝ", "(0, ∞)"], correctAnswer: 1, explanation: "Argument strictly positive." },
        { question: "Implied domain of 1/(x² − 4):", options: ["ℝ \\ {2}", "ℝ \\ {−2, 2}", "ℝ", "[−2, 2]"], correctAnswer: 1, explanation: "Exclude x = ±2." },
      ],
    },
  ],

  // ─── 1D ────────────────────────────────────────────────────────────
  "y12m-ch1-1d-sums-products": [
    {
      title: "Sums and Products of Functions",
      explanation:
        "Two functions f and g can be combined to form NEW functions:\n  • SUM: (f + g)(x) = f(x) + g(x).\n  • DIFFERENCE: (f − g)(x) = f(x) − g(x).\n  • PRODUCT: (fg)(x) = f(x) · g(x).\n  • QUOTIENT: (f/g)(x) = f(x)/g(x), provided g(x) ≠ 0.\n\nDOMAIN OF THE COMBINED FUNCTION:\n  • For sum/difference/product: dom(f) ∩ dom(g).\n  • For quotient: dom(f) ∩ dom(g) ∩ {x : g(x) ≠ 0}.\n\nRANGE generally cannot be predicted from f and g alone — sketch or analyse.",
      keyPoints: [
        "(f ± g)(x) = f(x) ± g(x)",
        "(fg)(x) = f(x)·g(x)",
        "Domain of combination = intersection of domains",
        "Quotient also requires g(x) ≠ 0",
      ],
      workedExamples: [
        {
          problem: "f(x) = x², g(x) = 3x. Find (f + g)(x) and (fg)(x).",
          steps: [
            "(f + g)(x) = x² + 3x",
            "(fg)(x) = x² · 3x = 3x³",
          ],
          answer: "f + g = x² + 3x; fg = 3x³.",
        },
        {
          problem: "f(x) = √x (dom [0, ∞)), g(x) = x − 4. Find domain of (f + g).",
          steps: [
            "dom(f) = [0, ∞)",
            "dom(g) = ℝ",
            "Intersection: [0, ∞)",
          ],
          answer: "Domain [0, ∞).",
        },
      ],
      tips: [
        "Always intersect domains before evaluating",
        "Be careful with rational combinations and zeros",
      ],
      formulas: [
        { name: "Sum/product domain", formula: "dom(f ± g) = dom(fg) = dom(f) ∩ dom(g)" },
        { name: "Quotient domain", formula: "dom(f/g) = dom(f) ∩ dom(g) ∩ {g ≠ 0}" },
      ],
      examQuestion: {
        problem: "f(x) = √(x − 1), g(x) = 1/x. Find (f/g)(x) and state its domain.",
        solution: [
          "(f/g)(x) = √(x − 1) · x = x√(x − 1)",
          "Restrictions: x − 1 ≥ 0 → x ≥ 1; x ≠ 0 (already satisfied)",
          "Also g(x) ≠ 0 ⇒ 1/x ≠ 0 — always true",
          "Domain: [1, ∞)",
        ],
        answer: "(f/g)(x) = x√(x − 1); domain [1, ∞).",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to intersect the two domains",
        "Allowing g(x) = 0 in a quotient",
      ],
      summary: [
        "Combine rules pointwise",
        "Always intersect domains",
        "Quotient requires g ≠ 0",
      ],
      quiz: [
        { question: "If f(x)=x and g(x)=1/x, dom(fg) =", options: ["ℝ", "ℝ\\{0}", "(0,∞)", "[0,∞)"], correctAnswer: 1, explanation: "g undefined at 0." },
        { question: "(f − g)(x) when f(x)=2x+1, g(x)=x−3:", options: ["x+4", "3x−2", "x−4", "2x−2"], correctAnswer: 0, explanation: "(2x+1)−(x−3)=x+4." },
        { question: "Domain of f+g where dom(f)=[0,5], dom(g)=[2,7]:", options: ["[0,7]", "[2,5]", "[0,5]", "[2,7]"], correctAnswer: 1, explanation: "Intersection." },
      ],
    },
  ],

  // ─── 1E ────────────────────────────────────────────────────────────
  "y12m-ch1-1e-composite": [
    {
      title: "Composite Functions",
      explanation:
        "The COMPOSITE function f ∘ g is defined by\n  (f ∘ g)(x) = f(g(x)).\n\nWe apply g FIRST, then f to the result. Order matters: in general f ∘ g ≠ g ∘ f.\n\nDOMAIN of f ∘ g:\n  • x must be in dom(g),\n  • AND g(x) must be in dom(f).\nFormally: dom(f ∘ g) = {x ∈ dom(g) : g(x) ∈ dom(f)}.\n\nCONSTRUCTION STEPS:\n  1. Compute g(x).\n  2. Substitute g(x) wherever x appears in f.\n  3. Simplify.\n  4. Determine the domain using the two-condition rule above.\n\nExample: f(x) = √x, g(x) = x² + 1. Then\n  (f ∘ g)(x) = √(x² + 1).\nSince x² + 1 ≥ 1 > 0 for all real x, the implied domain is ℝ.",
      keyPoints: [
        "(f ∘ g)(x) = f(g(x))",
        "Apply g first, then f",
        "Order matters",
        "Domain: x ∈ dom(g) AND g(x) ∈ dom(f)",
      ],
      workedExamples: [
        {
          problem: "f(x) = 2x + 1, g(x) = x². Find (f ∘ g)(x) and (g ∘ f)(x).",
          steps: [
            "(f ∘ g)(x) = f(x²) = 2x² + 1",
            "(g ∘ f)(x) = g(2x + 1) = (2x + 1)²",
          ],
          answer: "f ∘ g = 2x² + 1; g ∘ f = (2x + 1)².",
        },
        {
          problem: "f(x) = √x, g(x) = x − 4. Find dom(f ∘ g).",
          steps: [
            "dom(g) = ℝ",
            "Need g(x) ∈ dom(f) = [0, ∞) → x − 4 ≥ 0 → x ≥ 4",
            "dom(f ∘ g) = [4, ∞)",
          ],
          answer: "[4, ∞).",
        },
      ],
      tips: [
        "Substitute carefully; brackets prevent sign errors",
        "Always check domain of the inner output against the outer domain",
      ],
      formulas: [
        { name: "Composite", formula: "(f ∘ g)(x) = f(g(x))" },
      ],
      examQuestion: {
        problem: "f(x) = 1/x (dom ℝ\\{0}), g(x) = x − 2. Find (f ∘ g)(x) and its domain.",
        solution: [
          "f(g(x)) = 1/(x − 2)",
          "Need g(x) ≠ 0 → x ≠ 2",
          "dom = ℝ \\ {2}",
        ],
        answer: "1/(x − 2); domain ℝ \\ {2}.",
        marks: 3,
      },
      commonErrors: [
        "Computing g(f(x)) instead of f(g(x))",
        "Forgetting that g(x) must lie in dom(f)",
      ],
      summary: [
        "Composition feeds output of g into f",
        "Order matters",
        "Always check the two-step domain condition",
      ],
      quiz: [
        { question: "If f(x)=x² and g(x)=x+3, (f∘g)(x)=", options: ["x²+3", "(x+3)²", "x²+9", "x+9"], correctAnswer: 1, explanation: "Substitute x+3 into f." },
        { question: "(g∘f)(x) for the same:", options: ["x²+3", "(x+3)²", "x²+9", "x+9"], correctAnswer: 0, explanation: "g(x²)=x²+3." },
        { question: "Domain of f∘g requires:", options: ["x∈dom(f)", "g(x)∈dom(f)", "Both A and that x∈dom(g)", "Neither"], correctAnswer: 2, explanation: "Two-condition rule." },
      ],
    },
  ],

  // ─── 1F ────────────────────────────────────────────────────────────
  "y12m-ch1-1f-inverse": [
    {
      title: "Inverse Functions",
      explanation:
        "An INVERSE FUNCTION f⁻¹ undoes f:\n  f⁻¹(f(x)) = x for x ∈ dom(f),\n  f(f⁻¹(y)) = y for y ∈ ran(f).\n\nA function has an inverse function ONLY if it is ONE-TO-ONE: every output corresponds to a unique input. Test graphically with the HORIZONTAL LINE TEST (every horizontal line meets the graph in at most one point).\n\nIf a function is not one-to-one, restrict its domain so that it is, then find the inverse on the restricted domain.\n\nFINDING f⁻¹ algebraically:\n  1. Write y = f(x).\n  2. Swap x and y.\n  3. Solve for y.\n  4. Write y = f⁻¹(x).\n\nDOMAIN/RANGE SWAP:\n  • dom(f⁻¹) = ran(f),\n  • ran(f⁻¹) = dom(f).\n\nGRAPH: y = f⁻¹(x) is the reflection of y = f(x) in the line y = x.",
      keyPoints: [
        "Inverse exists only for one-to-one functions",
        "Swap x and y, solve for y",
        "dom(f⁻¹) = ran(f); ran(f⁻¹) = dom(f)",
        "Graphically: reflection in y = x",
      ],
      workedExamples: [
        {
          problem: "Find the inverse of f(x) = 2x + 7.",
          steps: [
            "y = 2x + 7",
            "Swap: x = 2y + 7",
            "Solve: y = (x − 7)/2",
            "f⁻¹(x) = (x − 7)/2",
          ],
          answer: "f⁻¹(x) = (x − 7)/2.",
        },
        {
          problem: "Restrict f(x) = x² so that f⁻¹ exists, then find f⁻¹.",
          steps: [
            "Restrict to x ≥ 0 (one-to-one)",
            "y = x² → swap → x = y² → y = √x (positive root)",
            "f⁻¹(x) = √x with dom [0, ∞)",
          ],
          answer: "f⁻¹(x) = √x, domain [0, ∞).",
        },
      ],
      tips: [
        "Always state the domain of the inverse",
        "Check by composing: f(f⁻¹(x)) should give x",
      ],
      definitions: [
        { term: "One-to-one", meaning: "Every output corresponds to a unique input." },
        { term: "Inverse function", meaning: "Function that undoes another function." },
      ],
      formulas: [
        { name: "Composition identity", formula: "f(f⁻¹(x)) = x; f⁻¹(f(x)) = x" },
      ],
      examQuestion: {
        problem: "Let f : [1, ∞) → ℝ, f(x) = (x − 1)² + 2. Find f⁻¹.",
        solution: [
          "y = (x − 1)² + 2 → swap → x = (y − 1)² + 2",
          "(y − 1)² = x − 2 → y − 1 = √(x − 2) (positive root since x ≥ 1)",
          "y = 1 + √(x − 2)",
          "dom(f⁻¹) = ran(f) = [2, ∞)",
        ],
        answer: "f⁻¹(x) = 1 + √(x − 2), domain [2, ∞).",
        marks: 4,
      },
      commonErrors: [
        "Failing to restrict the domain when needed",
        "Choosing the wrong sign of the square root",
        "Omitting the domain of f⁻¹",
      ],
      summary: [
        "Inverse needs one-to-one",
        "Swap variables, solve for y",
        "Always state domain",
      ],
      quiz: [
        { question: "If f(x)=3x−6, f⁻¹(x)=", options: ["(x+6)/3", "(x−6)/3", "3x+6", "x/3+6"], correctAnswer: 0, explanation: "Solve x=3y−6 ⇒ y=(x+6)/3." },
        { question: "Horizontal line test confirms:", options: ["Function", "One-to-one", "Continuity", "Differentiability"], correctAnswer: 1, explanation: "Each y once." },
        { question: "y = f⁻¹(x) is reflection of y=f(x) in:", options: ["x-axis", "y-axis", "Origin", "Line y=x"], correctAnswer: 3, explanation: "Standard property." },
      ],
    },
  ],

  // ─── 1G ────────────────────────────────────────────────────────────
  "y12m-ch1-1g-power": [
    {
      title: "Power Functions",
      explanation:
        "A POWER FUNCTION has the form f(x) = x^n for some constant n. Behaviour depends on n:\n\nPOSITIVE INTEGER n:\n  • n even: even function (symmetric about y-axis), shape like y = x², x⁴, …\n  • n odd: odd function (symmetric about origin), shape like y = x³, x⁵, …\n\nNEGATIVE INTEGER n:\n  • f(x) = x^(−n) = 1/x^n.\n  • Discontinuous at x = 0 (vertical asymptote).\n  • n even: y = 1/x², 1/x⁴ — both branches positive; symmetric about y-axis.\n  • n odd: y = 1/x, 1/x³ — branches in opposite quadrants; symmetric about origin.\n\nFRACTIONAL n (rational exponents):\n  • f(x) = x^(1/2) = √x; dom [0, ∞).\n  • f(x) = x^(1/3) = ∛x; dom ℝ (cube root defined for negatives).\n\nKEY FEATURES on a graph:\n  • All pass through (1, 1) and (when defined) through the origin.\n  • Steepness near 0 and near ∞ depends on n.",
      keyPoints: [
        "Even n → symmetric in y-axis",
        "Odd n → symmetric in origin",
        "Negative n → reciprocal with asymptote at 0",
        "All x^n graphs pass through (1, 1)",
      ],
      workedExamples: [
        {
          problem: "Sketch and compare y = x², y = x⁴ for x ∈ [−1, 1].",
          steps: [
            "Both pass through (0, 0), (1, 1), (−1, 1)",
            "x⁴ flatter near 0 and steeper outside [−1, 1]",
            "Both even functions",
          ],
          answer: "x⁴ flatter near 0; both symmetric about y-axis.",
        },
      ],
      tips: [
        "Distinguish behaviour near x = 0 vs x = ±∞",
        "Rational exponents change the domain",
      ],
      definitions: [
        { term: "Even function", meaning: "f(−x) = f(x); symmetric about y-axis." },
        { term: "Odd function", meaning: "f(−x) = −f(x); symmetric about origin." },
      ],
      formulas: [
        { name: "Symmetry test", formula: "Even: f(−x) = f(x); Odd: f(−x) = −f(x)" },
      ],
      examQuestion: {
        problem: "State whether f(x) = x⁵ is odd or even, and give its domain.",
        solution: [
          "f(−x) = (−x)⁵ = −x⁵ = −f(x) → odd",
          "Domain ℝ",
        ],
        answer: "Odd; domain ℝ.",
        marks: 2,
      },
      commonErrors: [
        "Assuming x^(1/2) is defined for negatives",
        "Forgetting asymptote of 1/x at x = 0",
      ],
      summary: [
        "Behaviour determined by sign and parity of n",
        "Negative n → reciprocal shape",
        "Fractional n → restricted domain",
      ],
      quiz: [
        { question: "Symmetry of y = x⁶?", options: ["Origin", "y-axis", "x-axis", "None"], correctAnswer: 1, explanation: "Even power → y-axis." },
        { question: "Domain of y = √x:", options: ["ℝ", "[0,∞)", "(0,∞)", "ℝ\\{0}"], correctAnswer: 1, explanation: "Even root needs x ≥ 0." },
        { question: "y = 1/x has asymptotes at:", options: ["x=0 only", "y=0 only", "x=0 and y=0", "None"], correctAnswer: 2, explanation: "Both axes." },
      ],
    },
  ],

  // ─── 1H ────────────────────────────────────────────────────────────
  "y12m-ch1-1h-applications": [
    {
      title: "Applications of Functions",
      explanation:
        "Functions model REAL-WORLD situations whenever one quantity depends on another:\n  • PROJECTILE MOTION: height as a function of time, h(t).\n  • REVENUE/COST/PROFIT: dollars as a function of units sold.\n  • POPULATION GROWTH: size as a function of time.\n  • TEMPERATURE/COOLING: temperature as a function of time.\n\nAPPLICATION CHECKLIST:\n  1. Identify the variables and their units.\n  2. Choose a sensible domain (often time ≥ 0, or units ≥ 0).\n  3. Identify the rule: linear, quadratic, exponential, etc.\n  4. Solve the question (intercepts, maxima, intersections).\n  5. Interpret the answer in context with units.\n\nTYPICAL QUESTIONS:\n  • What is the maximum height?\n  • When does the object hit the ground?\n  • How many units must be sold to break even?\n  • For what domain is the model realistic?",
      keyPoints: [
        "Translate the situation into f(x)",
        "Choose a realistic domain",
        "Solve algebraically or graphically",
        "Interpret with units and context",
      ],
      workedExamples: [
        {
          problem: "h(t) = −5t² + 20t + 3 (metres, t in seconds). Find maximum height and when the object hits the ground.",
          steps: [
            "Vertex at t = −b/(2a) = −20/(−10) = 2 s",
            "Max height: h(2) = −20 + 40 + 3 = 23 m",
            "Ground: −5t² + 20t + 3 = 0 → t = (−20 ± √(400 + 60))/(−10) = (−20 ± √460)/(−10)",
            "t ≈ (−20 − 21.45)/(−10) ≈ 4.15 s (positive root)",
          ],
          answer: "Max height 23 m; hits ground at t ≈ 4.15 s.",
        },
      ],
      tips: [
        "State units in every answer",
        "Check the domain matches the context",
      ],
      examQuestion: {
        problem: "Cost C(x) = 2x + 50, revenue R(x) = 7x. Find the break-even quantity and profit at x = 20.",
        solution: [
          "Profit P(x) = R(x) − C(x) = 5x − 50",
          "Break even: P(x) = 0 → x = 10",
          "P(20) = 100 − 50 = $50",
        ],
        answer: "Break even x = 10; profit at 20 units = $50.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to interpret the answer",
        "Allowing negative time or negative units",
      ],
      summary: [
        "Functions describe many real systems",
        "Always state units and context",
      ],
      quiz: [
        { question: "Maximum of −5t²+20t+3 is at t=", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "−b/(2a)=2." },
        { question: "Break even occurs when:", options: ["R<C", "R=C", "R>C", "C=0"], correctAnswer: 1, explanation: "Profit zero." },
        { question: "Domain of time variable usually:", options: ["ℝ", "ℝ\\{0}", "[0,∞)", "(−∞,0)"], correctAnswer: 2, explanation: "Time non-negative." },
      ],
    },
  ],

  // ─── 1 Review ──────────────────────────────────────────────────────
  "y12m-ch1-review": [
    {
      title: "Chapter 1 Review — Functions and Relations",
      explanation:
        "REVIEW CHECKLIST for Chapter 1:\n  • Use set and interval notation fluently.\n  • Distinguish relation from function; apply the vertical line test.\n  • Find implied domains for polynomials, rationals, radicals and logs.\n  • Form sums, products and composites and determine their domains.\n  • Find inverse functions, restricting domain when needed.\n  • Recognise and sketch power functions, including symmetry and asymptotes.\n  • Translate worded problems into functions and solve in context.\n\nFINAL TIPS:\n  • Always state domain when defining a function.\n  • Show domain checks for composites and inverses.\n  • In applications, finish with a sentence stating the result with units.",
      keyPoints: [
        "Functions = single-valued relations",
        "Domain rules drive most marks",
        "Composition order matters",
        "Restrict domain to make a function one-to-one",
      ],
      workedExamples: [
        {
          problem: "f(x) = √(x − 1), g(x) = 2x + 3. Find (f ∘ g)(x), its domain, and (f ∘ g)⁻¹.",
          steps: [
            "(f ∘ g)(x) = √(2x + 3 − 1) = √(2x + 2)",
            "Domain: 2x + 2 ≥ 0 → x ≥ −1",
            "Inverse: y = √(2x + 2) → x = (y² − 2)/2",
            "(f ∘ g)⁻¹(x) = (x² − 2)/2, dom [0, ∞)",
          ],
          answer: "f∘g = √(2x + 2), dom [−1, ∞); inverse (x² − 2)/2, dom [0, ∞).",
        },
      ],
      tips: [
        "Practise mixed problems combining domain, composition, and inverse",
      ],
      summary: [
        "Master notation, domains, composition and inverses",
        "Apply to modelling problems",
      ],
      quiz: [
        { question: "Inverse exists when function is:", options: ["Even", "Odd", "One-to-one", "Continuous"], correctAnswer: 2, explanation: "Required for unique outputs." },
        { question: "Implied domain of √(x²−4):", options: ["ℝ", "[−2,2]", "(−∞,−2]∪[2,∞)", "[2,∞)"], correctAnswer: 2, explanation: "Need x²−4 ≥ 0." },
        { question: "(f∘g)(x) requires:", options: ["x∈dom(f)", "g(x)∈dom(f) and x∈dom(g)", "Only x∈dom(g)", "Neither"], correctAnswer: 1, explanation: "Two-step domain rule." },
      ],
    },
  ],
};
