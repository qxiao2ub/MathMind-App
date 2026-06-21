import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 3: Quadratics & Parabolas
// Full textbook-style lessons aligned to Victorian Curriculum Year 10 / 10A.

export const year10Ch3Lessons: TopicLessonsMap = {
  "y10-expanding-expressions": [
    {
      title: "Expanding Single Brackets and Binomials",
      explanation:
        "OVERVIEW. Expanding removes brackets by applying the distributive law a(b + c) = ab + ac. For two binomials we use FOIL (First, Outer, Inner, Last): (a + b)(c + d) = ac + ad + bc + bd.\n\nSECTION A — SINGLE BRACKETS. Multiply every term inside the bracket by the factor outside, taking care with signs.\n\nSECTION B — BINOMIAL PRODUCTS. Apply FOIL, then collect like terms. Always check for like terms in the middle (the Outer + Inner pair).",
      keyPoints: ["Distributive law: a(b+c) = ab+ac", "FOIL for binomials", "Watch signs carefully", "Always collect like terms"],
      workedExamples: [
        { problem: "Expand 3x(2x − 5).", steps: ["3x · 2x = 6x²", "3x · (−5) = −15x"], answer: "6x² − 15x" },
        { problem: "Expand (x + 4)(x − 3).", steps: ["F: x·x = x²", "O: x·(−3) = −3x", "I: 4·x = 4x", "L: 4·(−3) = −12", "Combine: x² + x − 12"], answer: "x² + x − 12" },
        { problem: "Expand (2x − 1)(3x + 5).", steps: ["6x² + 10x − 3x − 5", "= 6x² + 7x − 5"], answer: "6x² + 7x − 5" },
      ],
      tips: ["Underline like terms before collecting them."],
      commonErrors: ["Sign errors with negative factors", "Forgetting to multiply by every term"],
      summary: ["EXAM INSIGHT: Expansion is foundational for every quadratic technique that follows."],
      practice: [
        { question: "Expand −2(x − 4).", answer: "−2x + 8" },
        { question: "Expand (x + 7)(x + 2).", answer: "x² + 9x + 14" },
        { question: "Expand (3x − 2)(x + 5).", answer: "3x² + 13x − 10" },
      ],
      quiz: [
        { question: "(x + 5)(x − 2) = ?", options: ["x² + 3x − 10", "x² − 3x − 10", "x² + 7x − 10", "x² − 10"], correctAnswer: 0, explanation: "Middle term: −2x + 5x = 3x." },
        { question: "−4(2x − 3) = ?", options: ["−8x − 12", "−8x + 12", "8x − 12", "8x + 12"], correctAnswer: 1, explanation: "Distribute −4: −8x + 12." },
      ],
    },
    {
      title: "Special Identities: DOPS and Perfect Squares",
      explanation:
        "Three identities recur constantly:\n  • Difference of perfect squares (DOPS): (a + b)(a − b) = a² − b²\n  • Perfect square (sum):   (a + b)² = a² + 2ab + b²\n  • Perfect square (diff): (a − b)² = a² − 2ab + b²\nRecognising these saves time and prevents algebra errors.",
      keyPoints: ["Memorise the three identities", "(a±b)² has THREE terms, not two", "Middle term sign matches the inner sign"],
      workedExamples: [
        { problem: "Expand (x + 6)(x − 6).", steps: ["DOPS pattern", "= x² − 36"], answer: "x² − 36" },
        { problem: "Expand (2x + 3)².", steps: ["a = 2x, b = 3", "= 4x² + 2(2x)(3) + 9", "= 4x² + 12x + 9"], answer: "4x² + 12x + 9" },
        { problem: "Expand (5 − y)².", steps: ["= 25 − 10y + y²"], answer: "25 − 10y + y²" },
      ],
      tips: ["(a+b)² ≠ a² + b² — never drop the middle term."],
      commonErrors: ["Writing (a+b)² = a² + b²", "Missing the factor of 2 in the cross term"],
      summary: ["EXAM INSIGHT: Identities appear in factorising, completing the square and trigonometry."],
      practice: [
        { question: "Expand (x − 9)(x + 9).", answer: "x² − 81" },
        { question: "Expand (3a − 2)².", answer: "9a² − 12a + 4" },
      ],
      quiz: [
        { question: "(x + 4)² = ?", options: ["x² + 16", "x² + 8x + 16", "x² + 4x + 16", "x² + 8x + 8"], correctAnswer: 1, explanation: "Cross term = 2·x·4 = 8x." },
        { question: "(2y − 5)(2y + 5) = ?", options: ["4y² − 25", "4y² + 25", "2y² − 25", "4y² − 10"], correctAnswer: 0, explanation: "DOPS: (2y)² − 5²." },
      ],
    },
    {
      title: "Expanding Three or More Brackets",
      explanation:
        "When more than two brackets appear, expand two at a time, then multiply the result by the remaining factor. Plan your work and collect like terms after each stage.",
      keyPoints: ["Expand pair-by-pair", "Collect like terms before next multiplication", "Polynomial degrees add"],
      workedExamples: [
        { problem: "Expand (x + 1)(x + 2)(x + 3).", steps: ["First pair: (x+1)(x+2) = x² + 3x + 2", "Multiply by (x+3): x³ + 3x² + 3x² + 9x + 2x + 6", "= x³ + 6x² + 11x + 6"], answer: "x³ + 6x² + 11x + 6" },
        { problem: "Expand 2(x − 1)(x + 4).", steps: ["(x−1)(x+4) = x² + 3x − 4", "Multiply by 2: 2x² + 6x − 8"], answer: "2x² + 6x − 8" },
      ],
      tips: ["Leave the constant multiplier until last to keep numbers small."],
      commonErrors: ["Distributing the constant too early and miscounting"],
      summary: ["EXAM INSIGHT: Useful when sketching cubics in Year 11–12."],
      practice: [
        { question: "Expand (x − 2)(x + 2)(x + 1).", answer: "x³ + x² − 4x − 4" },
      ],
      quiz: [
        { question: "(x + 1)(x + 2)(x − 1) = ?", options: ["x³ + 2x² − x − 2", "x³ − 2x² − x + 2", "x³ + 2x² + x + 2", "x³ − x − 2"], correctAnswer: 0, explanation: "Pair (x+1)(x−1) = x²−1, then ×(x+2)." },
      ],
    },
  ],

  "y10-factorising-expressions": [
    {
      title: "HCF Factorisation",
      explanation:
        "OVERVIEW. Factorising reverses expansion. The first step in EVERY factorisation problem is to take out the highest common factor (HCF) of the coefficients and variables.\n\nMETHOD.\n  1. Find the HCF of all numerical coefficients.\n  2. Find the lowest power of each common variable.\n  3. Write HCF outside a bracket containing the remaining factors.\n  4. Check by expanding.",
      keyPoints: ["Always check HCF first", "Take the LOWEST power of common variables", "Verify by expanding"],
      workedExamples: [
        { problem: "Factorise 6x² + 9x.", steps: ["HCF = 3x", "= 3x(2x + 3)"], answer: "3x(2x + 3)" },
        { problem: "Factorise 12a²b − 8ab².", steps: ["HCF = 4ab", "= 4ab(3a − 2b)"], answer: "4ab(3a − 2b)" },
      ],
      tips: ["If the leading term is negative, factor out a negative HCF."],
      commonErrors: ["Forgetting a variable factor", "Choosing the wrong (higher) power"],
      summary: ["EXAM INSIGHT: HCF is always step 1 — examiners deduct marks for skipping it."],
      practice: [
        { question: "Factorise 15m³ − 10m.", answer: "5m(3m² − 2)" },
      ],
      quiz: [
        { question: "Factorise 8x² − 12x.", options: ["4(2x² − 3x)", "4x(2x − 3)", "2x(4x − 6)", "8x(x − 1.5)"], correctAnswer: 1, explanation: "HCF = 4x." },
      ],
    },
    {
      title: "Factorising by Grouping",
      explanation:
        "When an expression has FOUR terms with no overall HCF, group them in pairs that share a common factor, then factor the resulting binomial.",
      keyPoints: ["Group in pairs", "Each pair must share a factor", "Bracket the common binomial"],
      workedExamples: [
        { problem: "Factorise xy + 2x + 3y + 6.", steps: ["Group: x(y + 2) + 3(y + 2)", "= (y + 2)(x + 3)"], answer: "(y + 2)(x + 3)" },
        { problem: "Factorise 2ab − 6a + b − 3.", steps: ["= 2a(b − 3) + 1(b − 3)", "= (b − 3)(2a + 1)"], answer: "(b − 3)(2a + 1)" },
      ],
      tips: ["If the first grouping fails, swap the middle two terms and try again."],
      commonErrors: ["Sign error in second pair", "Failing to factor +1"],
      summary: ["EXAM INSIGHT: Grouping bridges to non-monic quadratic factorisation in 3E."],
      practice: [
        { question: "Factorise 3xy − 12x + 2y − 8.", answer: "(y − 4)(3x + 2)" },
      ],
      quiz: [
        { question: "ax + ay + bx + by = ?", options: ["(a+b)(x+y)", "(a−b)(x+y)", "(a+x)(b+y)", "Cannot factor"], correctAnswer: 0, explanation: "a(x+y) + b(x+y)." },
      ],
    },
    {
      title: "Factorising DOPS and Perfect Squares",
      explanation:
        "Reverse the special identities:\n  • a² − b² = (a − b)(a + b)\n  • a² + 2ab + b² = (a + b)²\n  • a² − 2ab + b² = (a − b)²\nAlways take out an HCF first if possible — this often EXPOSES a hidden DOPS.",
      keyPoints: ["a² − b² factorises; a² + b² does NOT (over the reals)", "Check the middle term: 2ab confirms a perfect square", "HCF first"],
      workedExamples: [
        { problem: "Factorise x² − 49.", steps: ["= (x − 7)(x + 7)"], answer: "(x − 7)(x + 7)" },
        { problem: "Factorise 2x² − 50.", steps: ["= 2(x² − 25)", "= 2(x − 5)(x + 5)"], answer: "2(x − 5)(x + 5)" },
        { problem: "Factorise x² + 10x + 25.", steps: ["Middle = 2·x·5 ✓", "= (x + 5)²"], answer: "(x + 5)²" },
      ],
      tips: ["DOPS works for any squares: 9x² − 16y² = (3x − 4y)(3x + 4y)."],
      commonErrors: ["Trying to factor a sum of squares", "Forgetting the HCF step"],
      summary: ["EXAM INSIGHT: Two-mark items often hinge on spotting DOPS after HCF."],
      practice: [
        { question: "Factorise 4x² − 81.", answer: "(2x − 9)(2x + 9)" },
        { question: "Factorise x² − 14x + 49.", answer: "(x − 7)²" },
      ],
      quiz: [
        { question: "Factorise x² − 64.", options: ["(x−8)²", "(x−8)(x+8)", "(x+8)²", "Cannot factor"], correctAnswer: 1, explanation: "DOPS." },
      ],
    },
  ],

  "y10-algebraic-fractions": [
    {
      title: "Simplifying Algebraic Fractions",
      explanation:
        "OVERVIEW. An algebraic fraction is in simplest form when the numerator and denominator share no common factor.\n\nMETHOD.\n  1. Factorise numerator and denominator FULLY.\n  2. Cancel any factor common to both.\n  3. State any restrictions (denominator ≠ 0).",
      keyPoints: ["Factorise first", "Cancel FACTORS, never terms", "State restrictions"],
      workedExamples: [
        { problem: "Simplify (x² − 9)/(x + 3).", steps: ["= (x−3)(x+3)/(x+3)", "= x − 3,  x ≠ −3"], answer: "x − 3, x ≠ −3" },
        { problem: "Simplify (2x² + 6x)/(x² − 9).", steps: ["= 2x(x+3)/[(x−3)(x+3)]", "= 2x/(x − 3)"], answer: "2x/(x−3)" },
      ],
      tips: ["Never cancel across a + or − sign — only across multiplication."],
      commonErrors: ["Cancelling x in (x+2)/x"],
      summary: ["EXAM INSIGHT: Mark loss is most often due to incorrect cancellation."],
      practice: [
        { question: "Simplify (x² − 4)/(x − 2).", answer: "x + 2, x ≠ 2" },
      ],
      quiz: [
        { question: "(x² − 25)/(x + 5) simplifies to:", options: ["x − 5", "x + 5", "x² − 5", "1"], correctAnswer: 0, explanation: "DOPS then cancel (x+5)." },
      ],
    },
    {
      title: "Multiplying and Dividing",
      explanation:
        "To multiply: factorise everything, cancel common factors across numerators and denominators, then multiply remaining terms.\nTo divide: multiply by the reciprocal of the divisor (KEEP–CHANGE–FLIP), then proceed as for multiplication.",
      keyPoints: ["Factorise before cancelling", "Divide → multiply by reciprocal", "Cancel diagonally and vertically"],
      workedExamples: [
        { problem: "Simplify (x²−1)/x · 2x/(x+1).", steps: ["= (x−1)(x+1)/x · 2x/(x+1)", "Cancel (x+1) and x", "= 2(x − 1)"], answer: "2(x − 1)" },
        { problem: "Simplify (x+2)/3 ÷ (x²−4)/9.", steps: ["= (x+2)/3 · 9/[(x−2)(x+2)]", "= 3/(x − 2)"], answer: "3/(x − 2)" },
      ],
      tips: ["Always finish with a single, fully-simplified fraction."],
      commonErrors: ["Forgetting to invert when dividing"],
      summary: ["EXAM INSIGHT: Fluency here unlocks rational-function work in Methods."],
      practice: [
        { question: "Simplify (x/2) · (4/x²).", answer: "2/x" },
      ],
      quiz: [
        { question: "(x²/y) ÷ (x/y²) = ?", options: ["xy", "x/y", "y/x", "x²y"], correctAnswer: 0, explanation: "Multiply by reciprocal: x²/y · y²/x = xy." },
      ],
    },
    {
      title: "Adding and Subtracting Algebraic Fractions",
      explanation:
        "Find the lowest common denominator (LCD), rewrite each fraction with the LCD, then combine numerators. Always factorise denominators first.",
      keyPoints: ["LCD = product of all distinct factors at highest power", "Combine numerators only", "Simplify the result"],
      workedExamples: [
        { problem: "Simplify x/3 + (x+1)/4.", steps: ["LCD = 12", "= 4x/12 + 3(x+1)/12", "= (4x + 3x + 3)/12", "= (7x + 3)/12"], answer: "(7x + 3)/12" },
        { problem: "Simplify 2/(x+1) − 1/(x−1).", steps: ["LCD = (x+1)(x−1)", "= [2(x−1) − (x+1)] / (x²−1)", "= (x − 3)/(x² − 1)"], answer: "(x − 3)/(x² − 1)" },
      ],
      tips: ["Keep numerators in brackets to manage signs."],
      commonErrors: ["Subtracting and forgetting to distribute the negative"],
      summary: ["EXAM INSIGHT: Sign management is the most common error."],
      practice: [
        { question: "Simplify 1/x + 1/(x+1).", answer: "(2x + 1)/[x(x+1)]" },
      ],
      quiz: [
        { question: "x/2 + x/3 = ?", options: ["x", "2x/5", "5x/6", "x²/6"], correctAnswer: 2, explanation: "LCD 6: 3x/6 + 2x/6 = 5x/6." },
      ],
    },
  ],

  "y10-monic-quadratics": [
    {
      title: "Factorising x² + bx + c",
      explanation:
        "OVERVIEW. To factorise x² + bx + c, find two numbers p and q such that p + q = b and p · q = c. Then x² + bx + c = (x + p)(x + q).\n\nSIGN RULES.\n  • c > 0, b > 0 → both p, q positive.\n  • c > 0, b < 0 → both negative.\n  • c < 0 → one positive, one negative; the larger magnitude carries the sign of b.",
      keyPoints: ["Find sum b and product c", "Use sign rules to narrow choices", "Verify by expansion"],
      workedExamples: [
        { problem: "Factorise x² + 7x + 12.", steps: ["Need sum 7, product 12 → 3 and 4", "= (x + 3)(x + 4)"], answer: "(x + 3)(x + 4)" },
        { problem: "Factorise x² − 5x + 6.", steps: ["Sum −5, product 6 → −2 and −3", "= (x − 2)(x − 3)"], answer: "(x − 2)(x − 3)" },
        { problem: "Factorise x² + 2x − 15.", steps: ["Sum 2, product −15 → 5 and −3", "= (x + 5)(x − 3)"], answer: "(x + 5)(x − 3)" },
      ],
      tips: ["List factor pairs of c, then check which pair sums to b."],
      commonErrors: ["Confusing signs when c is negative"],
      summary: ["EXAM INSIGHT: Monic quadratic factorisation is essential before solving by null factor law."],
      practice: [
        { question: "Factorise x² + 9x + 20.", answer: "(x + 4)(x + 5)" },
        { question: "Factorise x² − x − 12.", answer: "(x − 4)(x + 3)" },
      ],
      quiz: [
        { question: "x² + 6x + 8 = ?", options: ["(x+2)(x+4)", "(x+1)(x+8)", "(x−2)(x−4)", "(x+3)(x+5)"], correctAnswer: 0, explanation: "2+4=6, 2·4=8." },
      ],
    },
    {
      title: "HCF First, Then Quadratic Pattern",
      explanation:
        "If the leading coefficient appears as a common factor across all three terms, take it out first. The remainder is then a monic quadratic.",
      keyPoints: ["HCF before pattern", "Monic factorisation simplest", "Coefficient stays out front"],
      workedExamples: [
        { problem: "Factorise 3x² + 15x + 18.", steps: ["HCF = 3", "= 3(x² + 5x + 6)", "= 3(x + 2)(x + 3)"], answer: "3(x + 2)(x + 3)" },
      ],
      tips: ["Even a negative HCF can simplify the inside expression."],
      commonErrors: ["Forgetting the HCF in the final answer"],
      summary: ["EXAM INSIGHT: Always inspect for HCF before any factorisation pattern."],
      practice: [
        { question: "Factorise 2x² − 10x + 12.", answer: "2(x − 2)(x − 3)" },
      ],
      quiz: [
        { question: "Factorise −x² + 5x − 6.", options: ["(x−2)(x−3)", "−(x−2)(x−3)", "−(x+2)(x+3)", "(x+2)(x+3)"], correctAnswer: 1, explanation: "Factor −1: −(x²−5x+6) = −(x−2)(x−3)." },
      ],
    },
    {
      title: "Hidden Monic Patterns",
      explanation:
        "Many expressions look more complex but reduce to monic quadratic factorisation after a substitution or rearrangement, e.g. quadratics in x², or expressions in (x + a).",
      keyPoints: ["Substitute u = x² or u = (x + a)", "Factorise in u, then back-substitute"],
      workedExamples: [
        { problem: "Factorise x⁴ − 5x² + 4.", steps: ["Let u = x²", "u² − 5u + 4 = (u − 1)(u − 4)", "= (x² − 1)(x² − 4)", "= (x − 1)(x + 1)(x − 2)(x + 2)"], answer: "(x−1)(x+1)(x−2)(x+2)" },
      ],
      tips: ["Always back-substitute and continue factorising."],
      commonErrors: ["Stopping at the u-form answer"],
      summary: ["EXAM INSIGHT: Quadratic-in-disguise patterns appear in 10A and Year 11."],
      practice: [
        { question: "Factorise x⁴ − 13x² + 36.", answer: "(x − 2)(x + 2)(x − 3)(x + 3)" },
      ],
      quiz: [
        { question: "x⁴ − 16 factorises to:", options: ["(x²−4)²", "(x−2)²(x+2)²", "(x²−4)(x²+4)", "(x−4)(x+4)"], correctAnswer: 2, explanation: "DOPS: (x²)² − 4²." },
      ],
    },
  ],

  "y10-non-monic-quadratics": [
    {
      title: "Splitting the Middle Term (10A)",
      explanation:
        "OVERVIEW. To factorise ax² + bx + c (a ≠ 1):\n  1. Compute a · c.\n  2. Find two numbers p, q with p + q = b and p · q = a · c.\n  3. Split the middle term: ax² + px + qx + c.\n  4. Factorise by grouping.",
      keyPoints: ["Always compute a·c first", "Then sum b, product a·c", "Group in pairs"],
      workedExamples: [
        { problem: "Factorise 2x² + 7x + 3.", steps: ["a·c = 6, sum 7 → 6 and 1", "2x² + 6x + x + 3", "= 2x(x + 3) + 1(x + 3)", "= (x + 3)(2x + 1)"], answer: "(x + 3)(2x + 1)" },
        { problem: "Factorise 6x² − 11x − 10.", steps: ["a·c = −60, sum −11 → −15 and 4", "6x² − 15x + 4x − 10", "= 3x(2x − 5) + 2(2x − 5)", "= (2x − 5)(3x + 2)"], answer: "(2x − 5)(3x + 2)" },
      ],
      tips: ["List factor pairs of |ac| systematically."],
      commonErrors: ["Wrong sign on one of p, q"],
      summary: ["EXAM INSIGHT: 10A favourite — appears in nearly every test."],
      practice: [
        { question: "Factorise 3x² + 10x + 8.", answer: "(x + 2)(3x + 4)" },
        { question: "Factorise 4x² − 4x − 15.", answer: "(2x + 3)(2x − 5)" },
      ],
      quiz: [
        { question: "Factorise 2x² + 5x + 2.", options: ["(2x+1)(x+2)", "(2x+2)(x+1)", "(x+2)(x+1)", "(2x−1)(x−2)"], correctAnswer: 0, explanation: "ac=4, split 4+1; group." },
      ],
    },
    {
      title: "HCF First Then Non-Monic",
      explanation:
        "Always check for a numerical HCF in non-monic problems too — extracting it can sometimes reveal a monic quadratic, dramatically simplifying the work.",
      keyPoints: ["HCF first reduces difficulty", "May convert to monic", "Reapply pattern"],
      workedExamples: [
        { problem: "Factorise 4x² + 8x + 4.", steps: ["HCF = 4", "= 4(x² + 2x + 1)", "= 4(x + 1)²"], answer: "4(x + 1)²" },
      ],
      tips: ["Skipping the HCF check is the #1 source of inflated effort."],
      commonErrors: ["Diving into split-middle without checking HCF"],
      summary: ["EXAM INSIGHT: Saves marks AND time."],
      practice: [
        { question: "Factorise 6x² − 24.", answer: "6(x − 2)(x + 2)" },
      ],
      quiz: [
        { question: "Factorise 9x² − 81.", options: ["9(x−3)(x+3)", "(3x−9)(3x+9)", "9(x²−9)", "All equivalent"], correctAnswer: 0, explanation: "Fully factored form." },
      ],
    },
    {
      title: "Difference of Two Squares with Coefficients",
      explanation:
        "DOPS works for any squares — including expressions with coefficients: a²x² − b² = (ax − b)(ax + b).",
      keyPoints: ["Identify squares: 4 = 2², 25 = 5², 9x² = (3x)²", "Apply DOPS", "Combine with HCF if present"],
      workedExamples: [
        { problem: "Factorise 25x² − 49.", steps: ["= (5x)² − 7²", "= (5x − 7)(5x + 7)"], answer: "(5x − 7)(5x + 7)" },
        { problem: "Factorise 18x² − 50.", steps: ["= 2(9x² − 25)", "= 2(3x − 5)(3x + 5)"], answer: "2(3x − 5)(3x + 5)" },
      ],
      tips: ["Check if both terms are perfect squares before applying DOPS."],
      commonErrors: ["Missing the HCF that exposes a DOPS"],
      summary: ["EXAM INSIGHT: Quick-win technique."],
      practice: [
        { question: "Factorise 16x² − 81.", answer: "(4x − 9)(4x + 9)" },
      ],
      quiz: [
        { question: "Factorise 49 − x².", options: ["(7−x)(7+x)", "(x−7)(x+7)", "(7−x)²", "Cannot factor"], correctAnswer: 0, explanation: "DOPS with order swapped." },
      ],
    },
  ],

  "y10-solve-by-factorisation": [
    {
      title: "The Null Factor Law",
      explanation:
        "OVERVIEW. The Null Factor Law (NFL) states: if A · B = 0 then A = 0 or B = 0. This is the bridge from factorisation to solving quadratic equations.\n\nMETHOD.\n  1. Move all terms to one side so the equation = 0.\n  2. Factorise fully.\n  3. Apply NFL: set each factor to zero and solve.",
      keyPoints: ["Equation MUST equal 0", "Factorise completely", "Each factor → solution"],
      workedExamples: [
        { problem: "Solve x² − 5x + 6 = 0.", steps: ["(x − 2)(x − 3) = 0", "x = 2 or x = 3"], answer: "x = 2, 3" },
        { problem: "Solve 2x² + 3x = 0.", steps: ["x(2x + 3) = 0", "x = 0 or x = −3/2"], answer: "x = 0, −3/2" },
        { problem: "Solve x² = 9.", steps: ["x² − 9 = 0", "(x − 3)(x + 3) = 0", "x = ±3"], answer: "x = ±3" },
      ],
      tips: ["NEVER divide both sides by x — you lose the x = 0 solution."],
      commonErrors: ["Solving when the RHS ≠ 0", "Dividing by a variable"],
      summary: ["EXAM INSIGHT: The cornerstone method for all quadratic solving."],
      practice: [
        { question: "Solve x² − 7x + 12 = 0.", answer: "x = 3, 4" },
        { question: "Solve x² + 4x = 0.", answer: "x = 0, −4" },
      ],
      quiz: [
        { question: "Solve (x − 1)(x + 5) = 0.", options: ["x=1, −5", "x=−1, 5", "x=1, 5", "x=−1, −5"], correctAnswer: 0, explanation: "NFL." },
      ],
    },
    {
      title: "Equations Requiring Rearrangement",
      explanation:
        "If the equation is not already equal to zero, expand, collect like terms, and move everything to one side BEFORE factorising.",
      keyPoints: ["Expand if needed", "All terms one side", "Then factorise"],
      workedExamples: [
        { problem: "Solve x(x + 4) = 12.", steps: ["x² + 4x − 12 = 0", "(x + 6)(x − 2) = 0", "x = −6 or 2"], answer: "x = −6, 2" },
        { problem: "Solve (x + 1)² = 16.", steps: ["x² + 2x + 1 − 16 = 0", "x² + 2x − 15 = 0", "(x + 5)(x − 3) = 0", "x = −5, 3"], answer: "x = −5, 3" },
      ],
      tips: ["Never apply NFL unless the right-hand side is zero."],
      commonErrors: ["Setting each factor equal to the wrong value"],
      summary: ["EXAM INSIGHT: Word problems often give equations needing rearrangement."],
      practice: [
        { question: "Solve x² = 5x + 14.", answer: "x = 7, −2" },
      ],
      quiz: [
        { question: "If (x − 3)² = 25, then x = ?", options: ["8 only", "−2 only", "8 or −2", "5 or −5"], correctAnswer: 2, explanation: "x − 3 = ±5." },
      ],
    },
    {
      title: "Solving Word Problems",
      explanation:
        "Translate the situation into an equation, solve, and reject any solutions that don't fit the context (e.g., negative lengths, non-integer counts).",
      keyPoints: ["Define the variable clearly", "Form an equation", "Reject impossible solutions", "Answer in context"],
      workedExamples: [
        { problem: "A rectangle has length (x + 2) m and width x m, area 24 m². Find x.", steps: ["x(x + 2) = 24", "x² + 2x − 24 = 0", "(x + 6)(x − 4) = 0", "x = 4 (reject −6)"], answer: "x = 4 m" },
      ],
      tips: ["Always say 'reject x = … because length cannot be negative'."],
      commonErrors: ["Listing both solutions when one is impossible"],
      summary: ["EXAM INSIGHT: 1 mark is allocated for rejecting non-physical solutions."],
      practice: [
        { question: "Two consecutive integers have a product of 72. Find them.", answer: "8 and 9 (or −9 and −8)" },
      ],
      quiz: [
        { question: "A square has area 49 m². Side length is:", options: ["±7 m", "7 m", "−7 m", "14 m"], correctAnswer: 1, explanation: "Reject negative." },
      ],
    },
  ],

  "y10-completing-square": [
    {
      title: "Completing the Square",
      explanation:
        "OVERVIEW. Any quadratic x² + bx + c can be rewritten as (x + b/2)² − (b/2)² + c. This converts the expression into a perfect square plus a constant.\n\nMETHOD.\n  1. Halve the coefficient of x.\n  2. Square it and add then subtract inside the expression.\n  3. Group the perfect square trinomial and combine constants.",
      keyPoints: ["Halve, square, add–subtract", "Works only when leading coefficient is 1", "Factor out the leading coefficient first if needed"],
      workedExamples: [
        { problem: "Complete the square for x² + 6x + 1.", steps: ["b/2 = 3", "Add and subtract 9", "= (x² + 6x + 9) − 9 + 1", "= (x + 3)² − 8"], answer: "(x + 3)² − 8" },
        { problem: "Complete the square for x² − 4x + 7.", steps: ["= (x² − 4x + 4) − 4 + 7", "= (x − 2)² + 3"], answer: "(x − 2)² + 3" },
      ],
      tips: ["Memorise the pattern: (x + b/2)² − (b/2)² + c."],
      commonErrors: ["Forgetting to subtract (b/2)²"],
      summary: ["EXAM INSIGHT: Foundation of the quadratic formula derivation and turning-point form."],
      practice: [
        { question: "Complete the square: x² + 10x + 7.", answer: "(x + 5)² − 18" },
      ],
      quiz: [
        { question: "x² − 8x + 5 in completed-square form is:", options: ["(x−4)²−11", "(x−4)²+11", "(x−8)²+5", "(x+4)²−11"], correctAnswer: 0, explanation: "Halve 8, square 16, then 5 − 16 = −11." },
      ],
    },
    {
      title: "Solving by Completing the Square",
      explanation:
        "Once written as (x + h)² = k, take the square root of both sides (remembering ±) and solve for x.",
      keyPoints: ["Isolate (x + h)²", "Apply ±√k", "Surd answers acceptable"],
      workedExamples: [
        { problem: "Solve x² + 6x + 1 = 0.", steps: ["(x + 3)² − 8 = 0", "(x + 3)² = 8", "x + 3 = ±√8 = ±2√2", "x = −3 ± 2√2"], answer: "x = −3 ± 2√2" },
      ],
      tips: ["Always include the ± sign."],
      commonErrors: ["Dropping the negative root"],
      summary: ["EXAM INSIGHT: Required when factorisation is impractical."],
      practice: [
        { question: "Solve x² − 4x − 1 = 0.", answer: "x = 2 ± √5" },
      ],
      quiz: [
        { question: "Solving x² + 2x − 5 = 0 by completing the square gives:", options: ["x = −1 ± √6", "x = 1 ± √6", "x = −2 ± √5", "x = ±√5"], correctAnswer: 0, explanation: "(x+1)² = 6." },
      ],
    },
    {
      title: "Non-Monic Completing the Square (10A)",
      explanation:
        "When the leading coefficient is not 1, factor out a from the x² and x terms first, complete the square inside the bracket, and remember to multiply through by a when extracting.",
      keyPoints: ["Factor a from first two terms only", "Complete inside the bracket", "Distribute carefully"],
      workedExamples: [
        { problem: "Complete the square for 2x² + 8x + 5.", steps: ["= 2(x² + 4x) + 5", "= 2[(x + 2)² − 4] + 5", "= 2(x + 2)² − 8 + 5", "= 2(x + 2)² − 3"], answer: "2(x + 2)² − 3" },
      ],
      tips: ["Keep the factor a in front throughout."],
      commonErrors: ["Failing to distribute a after completing inside"],
      summary: ["EXAM INSIGHT: Required for VCE Methods turning-point form."],
      practice: [
        { question: "Complete the square: 3x² − 12x + 5.", answer: "3(x − 2)² − 7" },
      ],
      quiz: [
        { question: "2x² + 4x − 1 in completed-square form is:", options: ["2(x+1)²−3", "2(x+1)²+1", "(x+2)²−3", "2(x+2)²−5"], correctAnswer: 0, explanation: "= 2(x²+2x) − 1 = 2[(x+1)²−1] − 1 = 2(x+1)² − 3." },
      ],
    },
  ],

  "y10-quadratic-formula": [
    {
      title: "The Quadratic Formula",
      explanation:
        "OVERVIEW. For ax² + bx + c = 0 (a ≠ 0):\n    x = (−b ± √(b² − 4ac)) / (2a)\n\nThis solves ANY quadratic (real or complex roots). It is derived by completing the square in general form.",
      keyPoints: ["Identify a, b, c carefully (with signs)", "Compute discriminant b²−4ac first", "Simplify surds where possible"],
      workedExamples: [
        { problem: "Solve x² − 5x + 6 = 0 using the formula.", steps: ["a=1, b=−5, c=6", "Δ = 25 − 24 = 1", "x = (5 ± 1)/2", "x = 3 or 2"], answer: "x = 2, 3" },
        { problem: "Solve 2x² + 3x − 2 = 0.", steps: ["a=2, b=3, c=−2", "Δ = 9 + 16 = 25", "x = (−3 ± 5)/4", "x = 1/2 or −2"], answer: "x = 1/2, −2" },
      ],
      tips: ["Bracket negative values when substituting."],
      commonErrors: ["Sign error on b", "Forgetting 2a in denominator"],
      summary: ["EXAM INSIGHT: The universal solver — works always."],
      practice: [
        { question: "Solve x² + 4x + 1 = 0.", answer: "x = −2 ± √3" },
      ],
      quiz: [
        { question: "For 3x² − x − 2 = 0, x = ?", options: ["1, −2/3", "−1, 2/3", "1, 2/3", "−1, −2/3"], correctAnswer: 0, explanation: "Δ = 1 + 24 = 25, x = (1±5)/6." },
      ],
    },
    {
      title: "Surd Solutions and Exact Form",
      explanation:
        "When the discriminant is not a perfect square, leave the answer in exact surd form. Simplify the surd and reduce the fraction where possible.",
      keyPoints: ["Simplify √Δ", "Divide numerator/denominator by common factor", "Don't approximate unless asked"],
      workedExamples: [
        { problem: "Solve x² − 6x + 4 = 0.", steps: ["Δ = 36 − 16 = 20", "√20 = 2√5", "x = (6 ± 2√5)/2 = 3 ± √5"], answer: "x = 3 ± √5" },
      ],
      tips: ["Always simplify the surd and the whole fraction."],
      commonErrors: ["Leaving answer as (6±2√5)/2 — must reduce"],
      summary: ["EXAM INSIGHT: Exact form gains marks; decimals lose them unless requested."],
      practice: [
        { question: "Solve 2x² − 4x − 3 = 0.", answer: "x = (2 ± √10)/2 = 1 ± √10/2" },
      ],
      quiz: [
        { question: "Solutions to x² + 2x − 4 = 0:", options: ["−1 ± √5", "1 ± √5", "−2 ± √5", "−1 ± 2√5"], correctAnswer: 0, explanation: "Δ=4+16=20, √20=2√5; x=(−2±2√5)/2." },
      ],
    },
    {
      title: "Choosing the Best Method",
      explanation:
        "Select the most efficient method:\n  • Easy factorisation → null factor law\n  • Has perfect square form → completing the square or square-root method\n  • Otherwise → quadratic formula\nSpeed and accuracy improve with thoughtful method choice.",
      keyPoints: ["Try factorisation first", "Use formula as a fallback", "Spot perfect squares early"],
      workedExamples: [
        { problem: "Solve x² + 2x − 8 = 0.", steps: ["Factorises: (x+4)(x−2) = 0", "x = −4 or 2"], answer: "x = −4, 2" },
      ],
      tips: ["If b² − 4ac > 0 and is a perfect square → factorises nicely."],
      commonErrors: ["Defaulting to formula when factoring is faster"],
      summary: ["EXAM INSIGHT: Method choice is part of fluency."],
      practice: [
        { question: "Solve x² − 9 = 0.", answer: "x = ±3" },
      ],
      quiz: [
        { question: "Best method for x² − 2x = 0:", options: ["Formula", "Factorise (x(x−2))", "Complete the square", "Substitution"], correctAnswer: 1, explanation: "HCF gives instant factor pair." },
      ],
    },
  ],

  "y10-discriminant": [
    {
      title: "The Discriminant Δ = b² − 4ac",
      explanation:
        "OVERVIEW. The DISCRIMINANT Δ = b² − 4ac determines the NATURE of solutions of ax² + bx + c = 0:\n  • Δ > 0 → two distinct real solutions (graph cuts x-axis twice)\n  • Δ = 0 → one repeated real solution (graph touches x-axis)\n  • Δ < 0 → no real solutions (graph does not cross x-axis)\nIf Δ is a perfect square, the solutions are RATIONAL.",
      keyPoints: ["Δ > 0: two real roots", "Δ = 0: repeated root (tangent)", "Δ < 0: no real roots", "Δ perfect square: rational"],
      workedExamples: [
        { problem: "Find the nature of roots of x² − 4x + 4 = 0.", steps: ["Δ = 16 − 16 = 0", "Repeated real root"], answer: "One repeated root: x = 2" },
        { problem: "Nature of roots: 2x² + 3x + 5 = 0.", steps: ["Δ = 9 − 40 = −31 < 0", "No real solutions"], answer: "No real solutions" },
      ],
      tips: ["Compute Δ before deciding which method to use."],
      commonErrors: ["Sign error in 4ac when c is negative"],
      summary: ["EXAM INSIGHT: Standard 'show that' question."],
      practice: [
        { question: "Find the discriminant of 3x² − 5x + 1.", answer: "Δ = 13" },
      ],
      quiz: [
        { question: "x² + 4x + 5 has how many real solutions?", options: ["0", "1", "2", "Infinite"], correctAnswer: 0, explanation: "Δ = 16 − 20 < 0." },
      ],
    },
    {
      title: "Using Δ to Find Unknown Coefficients",
      explanation:
        "Set Δ = 0, > 0 or < 0 to create equations or inequalities in an unknown parameter, then solve.",
      keyPoints: ["Translate condition into equation/inequality", "Solve for the parameter", "Check the boundary"],
      workedExamples: [
        { problem: "Find k such that x² + kx + 9 = 0 has equal roots.", steps: ["Δ = k² − 36 = 0", "k = ±6"], answer: "k = ±6" },
        { problem: "Find values of k for which x² − 4x + k > 0 has no real roots.", steps: ["Δ < 0", "16 − 4k < 0", "k > 4"], answer: "k > 4" },
      ],
      tips: ["Equal roots ⇔ tangent to the x-axis."],
      commonErrors: ["Confusing < and >"],
      summary: ["EXAM INSIGHT: Common 3-mark item in Year 10/11."],
      practice: [
        { question: "Find k for which x² + 8x + k = 0 has equal roots.", answer: "k = 16" },
      ],
      quiz: [
        { question: "If x² + 6x + c = 0 has no real roots, then c is:", options: ["c > 9", "c < 9", "c = 9", "c ≥ 9"], correctAnswer: 0, explanation: "Δ < 0 → 36 − 4c < 0 → c > 9." },
      ],
    },
    {
      title: "Discriminant and the Parabola",
      explanation:
        "Geometrically, Δ tells you how many times the parabola y = ax² + bx + c crosses the x-axis: 2, 1, or 0. Combined with the sign of a, it gives a full picture of the graph's behaviour.",
      keyPoints: ["a > 0: opens up", "a < 0: opens down", "Combine sign of a with Δ"],
      workedExamples: [
        { problem: "Describe y = x² + 4x + 5.", steps: ["a = 1 > 0 (opens up)", "Δ = 16 − 20 < 0", "Always above the x-axis"], answer: "No x-intercepts, opens up" },
      ],
      tips: ["Sketch quickly using these features."],
      commonErrors: ["Forgetting to consider sign of a"],
      summary: ["EXAM INSIGHT: Bridges algebra and graph behaviour."],
      practice: [
        { question: "How many intercepts does y = −x² + 4x − 4 have?", answer: "One (touches x-axis at x = 2)" },
      ],
      quiz: [
        { question: "If a < 0 and Δ < 0, the graph is:", options: ["Always above x-axis", "Always below x-axis", "Crosses twice", "Tangent"], correctAnswer: 1, explanation: "Opens down, never reaches x-axis." },
      ],
    },
  ],

  "y10-quadratic-applications": [
    {
      title: "Modelling with Quadratic Equations",
      explanation:
        "OVERVIEW. Many real-world relationships are quadratic: areas, projectile heights, profit functions, kinematics. Translate the situation into ax² + bx + c, solve, and interpret in context.",
      keyPoints: ["Define variables clearly", "Form quadratic equation", "Solve and interpret", "Reject impossible solutions"],
      workedExamples: [
        { problem: "A ball thrown upward has height h = 20t − 5t². Find when it lands.", steps: ["h = 0: 5t(4 − t) = 0", "t = 0 (throw) or t = 4 s"], answer: "Lands at t = 4 s" },
      ],
      tips: ["Always state units and reject negative time/length."],
      commonErrors: ["Including t = 0 as the answer for landing"],
      summary: ["EXAM INSIGHT: Full marks require contextual interpretation."],
      practice: [
        { question: "Profit P = −x² + 50x − 200. Break-even x?", answer: "x ≈ 4.4 or x ≈ 45.6" },
      ],
      quiz: [
        { question: "If h = −5t² + 30t describes height (m), max height occurs at t = ?", options: ["3", "4", "5", "6"], correctAnswer: 0, explanation: "Vertex t = −b/2a = 30/10 = 3 s." },
      ],
    },
    {
      title: "Geometric Applications",
      explanation:
        "Use quadratic equations to model area, perimeter and dimension problems. Common patterns include rectangles, gardens with paths, and Pythagorean situations.",
      keyPoints: ["Draw a diagram", "Label dimensions in terms of one variable", "Form equation from area/perimeter"],
      workedExamples: [
        { problem: "A rectangle is 5 cm longer than wide; area = 84 cm². Find dimensions.", steps: ["Width x, length x + 5", "x(x + 5) = 84", "x² + 5x − 84 = 0", "(x − 7)(x + 12) = 0", "x = 7 cm"], answer: "7 cm × 12 cm" },
      ],
      tips: ["Always sketch the figure first."],
      commonErrors: ["Algebraic vs context confusion"],
      summary: ["EXAM INSIGHT: Worded geometry is a frequent assessment item."],
      practice: [
        { question: "Square garden expanded by 3 m on each side has area 169 m². Find original side.", answer: "10 m" },
      ],
      quiz: [
        { question: "A rectangle has length 2x and width x; area is 50. Then x = ?", options: ["5", "√25", "5/√2", "10"], correctAnswer: 0, explanation: "2x² = 50 → x² = 25 → x = 5." },
      ],
    },
    {
      title: "Kinematics-Style Quadratics",
      explanation:
        "Projectile motion under gravity yields h = h₀ + v₀t − (g/2)t². Setting h = target_height creates a quadratic in t. Two solutions correspond to going up and coming down.",
      keyPoints: ["Two-solution interpretation: ascent and descent", "Reject negative t", "Maximum at t = v₀/g (or vertex)"],
      workedExamples: [
        { problem: "h = 1 + 8t − 5t². When does it reach 4 m?", steps: ["5t² − 8t + 3 = 0", "(5t − 3)(t − 1) = 0", "t = 0.6 s (rising) or t = 1 s (falling)"], answer: "t = 0.6 s and t = 1 s" },
      ],
      tips: ["Both times are physically meaningful in kinematics."],
      commonErrors: ["Discarding the second solution"],
      summary: ["EXAM INSIGHT: Two-time answers are expected — interpret each."],
      practice: [
        { question: "If h = 20t − 5t², find t when h = 15.", answer: "t = 1 s and t = 3 s" },
      ],
      quiz: [
        { question: "If h(t) = −5t² + 25t and h = 30, t = ?", options: ["2 and 3", "1 and 5", "2 and 5", "3 and 5"], correctAnswer: 0, explanation: "5t² − 25t + 30 = 0 → (t−2)(t−3)=0." },
      ],
    },
  ],

  "y10-exploring-parabolas": [
    {
      title: "Key Features of y = x²",
      explanation:
        "OVERVIEW. The basic parabola y = x² has:\n  • VERTEX (turning point) at (0, 0)\n  • AXIS OF SYMMETRY x = 0\n  • Y-INTERCEPT (0, 0)\n  • Opens upward (concave up)\n  • Range y ≥ 0\n\nAll quadratics share these structural features (with shifts/scaling).",
      keyPoints: ["Vertex, axis, intercepts", "Concavity from sign of a", "Symmetric about its axis"],
      workedExamples: [
        { problem: "State features of y = x² − 4.", steps: ["Vertex (0, −4)", "Axis x = 0", "y-int (0, −4)", "x-ints (±2, 0)"], answer: "Sketch: parabola through (±2,0), min (0,−4)" },
      ],
      tips: ["Identify a, h, k visually before plotting."],
      commonErrors: ["Confusing vertex with y-intercept"],
      summary: ["EXAM INSIGHT: Sketching marks require all key features labelled."],
      practice: [
        { question: "Vertex of y = x² + 6?", answer: "(0, 6)" },
      ],
      quiz: [
        { question: "Range of y = x² is:", options: ["y ∈ ℝ", "y ≥ 0", "y > 0", "y ≤ 0"], correctAnswer: 1, explanation: "Minimum y is 0 at x = 0." },
      ],
    },
    {
      title: "Effect of the Coefficient a",
      explanation:
        "In y = ax², the value of a controls:\n  • Direction: a > 0 opens up; a < 0 opens down\n  • Width: |a| > 1 narrows; 0 < |a| < 1 widens\nVertex remains (0, 0).",
      keyPoints: ["Sign → direction", "Magnitude → width", "Vertex unchanged for y = ax²"],
      workedExamples: [
        { problem: "Compare y = 2x², y = ½x², y = −x².", steps: ["2x² narrower upward", "½x² wider upward", "−x² inverted"], answer: "All share vertex (0,0)" },
      ],
      tips: ["Larger |a| = steeper rise."],
      commonErrors: ["Assuming a affects vertex"],
      summary: ["EXAM INSIGHT: Often tested through multiple-choice."],
      practice: [
        { question: "Which is wider: y = 0.3x² or y = 3x²?", answer: "y = 0.3x²" },
      ],
      quiz: [
        { question: "y = −3x² is:", options: ["Narrow, opens up", "Narrow, opens down", "Wide, opens up", "Wide, opens down"], correctAnswer: 1, explanation: "|a|=3>1 narrow; a<0 down." },
      ],
    },
    {
      title: "Graphing Family Members Quickly",
      explanation:
        "Sketching y = ax² + c: vertex at (0, c), opens per sign of a. To find x-intercepts, set y = 0 and solve. This gives a fast technique for vertical translations of y = ax².",
      keyPoints: ["Vertical shift c", "Same shape", "Solve for x-intercepts"],
      workedExamples: [
        { problem: "Sketch y = 2x² − 8.", steps: ["Vertex (0, −8)", "y = 0: 2x² = 8 → x = ±2", "Opens up, narrow"], answer: "Parabola, vertex (0,−8), x-ints (±2,0)" },
      ],
      tips: ["Always plot vertex AND intercepts."],
      commonErrors: ["Forgetting to find intercepts"],
      summary: ["EXAM INSIGHT: 2 marks for vertex, 1 for each intercept typically."],
      practice: [
        { question: "x-intercepts of y = x² − 16.", answer: "(±4, 0)" },
      ],
      quiz: [
        { question: "y = −x² + 9 vertex is:", options: ["(0,9)", "(0,−9)", "(9,0)", "(3,0)"], correctAnswer: 0, explanation: "h=0, k=9." },
      ],
    },
  ],

  "y10-parabola-transformations": [
    {
      title: "Translations",
      explanation:
        "OVERVIEW. y = (x − h)² + k is a translation of y = x²:\n  • h → horizontal shift (right if h > 0)\n  • k → vertical shift (up if k > 0)\nVertex moves to (h, k); axis becomes x = h.",
      keyPoints: ["Horizontal: opposite sign", "Vertical: same sign", "Vertex (h, k)"],
      workedExamples: [
        { problem: "Sketch y = (x − 2)² + 3.", steps: ["Vertex (2, 3)", "Axis x = 2", "Opens up"], answer: "Vertex (2,3); minimum y = 3" },
      ],
      tips: ["The minus sign inside is deceiving — it shifts RIGHT."],
      commonErrors: ["Mistaking direction of horizontal shift"],
      summary: ["EXAM INSIGHT: Turning-point form gives vertex by inspection."],
      practice: [
        { question: "Vertex of y = (x + 4)² − 1?", answer: "(−4, −1)" },
      ],
      quiz: [
        { question: "y = (x − 5)² has vertex:", options: ["(−5, 0)", "(5, 0)", "(0, 5)", "(0, −5)"], correctAnswer: 1, explanation: "h=5, k=0." },
      ],
    },
    {
      title: "Reflections and Dilations",
      explanation:
        "y = a(x − h)² + k:\n  • a < 0 reflects across the x-axis\n  • |a| > 1 dilates (narrows) parallel to y-axis\n  • 0 < |a| < 1 compresses (widens)",
      keyPoints: ["a controls direction and width", "Vertex (h, k) unchanged", "Range depends on sign of a"],
      workedExamples: [
        { problem: "Sketch y = −2(x − 1)² + 4.", steps: ["Vertex (1, 4), max", "Opens down, narrow", "Range y ≤ 4"], answer: "Downward parabola, vertex (1,4)" },
      ],
      tips: ["Reflection alone changes max ↔ min."],
      commonErrors: ["Stating wrong range after reflection"],
      summary: ["EXAM INSIGHT: Combined transformation questions appear in 10A."],
      practice: [
        { question: "Range of y = −(x + 2)² + 5?", answer: "y ≤ 5" },
      ],
      quiz: [
        { question: "y = ½(x − 3)² + 1 is:", options: ["Wide, up, vertex (3,1)", "Narrow, up, vertex (3,1)", "Wide, down", "Vertex (−3,1)"], correctAnswer: 0, explanation: "|a|=0.5 wide, a>0 up." },
      ],
    },
    {
      title: "Combining All Transformations",
      explanation:
        "Apply transformations in order: reflection/dilation (a), then translation (h, k). Understanding the order helps when describing the transformation as a sequence.",
      keyPoints: ["Apply a before translations", "Use parameters (a, h, k) directly", "Vertex still (h, k)"],
      workedExamples: [
        { problem: "Describe y = −3(x + 2)² − 5 from y = x².", steps: ["Reflect across x-axis", "Dilate by 3 from x-axis", "Translate 2 left, 5 down"], answer: "Vertex (−2,−5), max" },
      ],
      tips: ["Use a clear sequence when describing transformations."],
      commonErrors: ["Listing translations before dilations"],
      summary: ["EXAM INSIGHT: Required for VCE Methods Unit 1."],
      practice: [
        { question: "Describe transformations from y = x² to y = 2(x − 1)² + 3.", answer: "Dilate by 2 from x-axis, translate right 1, up 3" },
      ],
      quiz: [
        { question: "y = 4(x − 2)² + 1 is y = x² translated:", options: ["Right 2, up 1", "Left 2, up 1", "Right 2, down 1", "Up 4"], correctAnswer: 0, explanation: "h=2, k=1." },
      ],
    },
  ],

  "y10-sketch-factorisation": [
    {
      title: "Sketching from Factorised Form",
      explanation:
        "OVERVIEW. Given y = a(x − p)(x − q):\n  • x-intercepts at x = p and x = q\n  • Axis of symmetry at x = (p + q)/2\n  • Vertex on this axis (substitute to find y)\n  • y-intercept at y = a · p · q",
      keyPoints: ["Find x-ints from factors", "Axis of symmetry midpoint", "Find vertex by substitution", "y-intercept by setting x = 0"],
      workedExamples: [
        { problem: "Sketch y = (x − 1)(x − 5).", steps: ["x-ints (1,0), (5,0)", "Axis x = 3", "Vertex y = (3−1)(3−5) = −4 → (3,−4)", "y-int (0, 5)"], answer: "Parabola through given points, min at (3,−4)" },
      ],
      tips: ["Always label the vertex with both coordinates."],
      commonErrors: ["Skipping the vertex calculation"],
      summary: ["EXAM INSIGHT: Sketching marks require all key features."],
      practice: [
        { question: "Vertex of y = (x + 2)(x − 4)?", answer: "(1, −9)" },
      ],
      quiz: [
        { question: "x-intercepts of y = 3(x − 2)(x + 5):", options: ["(2,0),(5,0)", "(−2,0),(5,0)", "(2,0),(−5,0)", "(−2,0),(−5,0)"], correctAnswer: 2, explanation: "Set each factor to 0." },
      ],
    },
    {
      title: "Sketching Factorised Quadratics with HCF",
      explanation:
        "When a ≠ 1, the leading coefficient affects the parabola's width and direction but NOT the x-intercepts. Use a to dictate concavity and steepness.",
      keyPoints: ["a controls concavity", "x-intercepts come from factors", "Compute y-intercept correctly using a"],
      workedExamples: [
        { problem: "Sketch y = −2(x − 1)(x + 3).", steps: ["x-ints (1,0), (−3,0)", "Axis x = −1", "Vertex y = −2(−1−1)(−1+3) = −2·(−2)(2) = 8 → (−1,8)", "Opens down"], answer: "Max at (−1,8)" },
      ],
      tips: ["Negative a reflects → maximum, not minimum."],
      commonErrors: ["Forgetting to multiply by a when finding y-intercept"],
      summary: ["EXAM INSIGHT: Negative-a sketches are common error traps."],
      practice: [
        { question: "y-intercept of y = 2(x − 3)(x + 1)?", answer: "(0, −6)" },
      ],
      quiz: [
        { question: "y = −(x − 2)(x + 4) opens:", options: ["Up, vertex max", "Down, vertex max", "Up, vertex min", "Down, vertex min"], correctAnswer: 1, explanation: "a<0 → opens down → maximum." },
      ],
    },
    {
      title: "Sketching Repeated Roots",
      explanation:
        "If y = a(x − p)², the parabola TOUCHES the x-axis at x = p and turns. The vertex is at (p, 0) and the parabola does not cross.",
      keyPoints: ["Repeated factor = touch", "Vertex on x-axis", "y-int at a·p²"],
      workedExamples: [
        { problem: "Sketch y = (x − 3)².", steps: ["Vertex (3, 0)", "y-int (0, 9)", "Opens up"], answer: "Tangent to x-axis at (3,0)" },
      ],
      tips: ["A perfect square = tangent to the x-axis."],
      commonErrors: ["Drawing two intercepts when there is only one"],
      summary: ["EXAM INSIGHT: Tested via discriminant questions too."],
      practice: [
        { question: "Sketch y = −2(x + 1)². Vertex?", answer: "(−1, 0), opens down" },
      ],
      quiz: [
        { question: "y = (x − 4)² has:", options: ["No x-int", "One x-int", "Two x-ints", "Three x-ints"], correctAnswer: 1, explanation: "Repeated root at x = 4." },
      ],
    },
  ],

  "y10-completing-square-form": [
    {
      title: "Turning-Point Form y = a(x − h)² + k",
      explanation:
        "OVERVIEW. Completed-square (turning-point) form gives the vertex DIRECTLY: vertex (h, k), axis x = h, max/min y = k (per sign of a).",
      keyPoints: ["Vertex (h, k) by inspection", "a sets direction/width", "Read range from k and sign of a"],
      workedExamples: [
        { problem: "State vertex and range of y = 2(x − 3)² − 5.", steps: ["Vertex (3, −5)", "Opens up", "Range y ≥ −5"], answer: "Vertex (3,−5); range y ≥ −5" },
      ],
      tips: ["Sign of a determines whether k is min or max."],
      commonErrors: ["Reading h with wrong sign"],
      summary: ["EXAM INSIGHT: Vertex form is the fastest way to sketch."],
      practice: [
        { question: "Vertex of y = −(x + 1)² + 4?", answer: "(−1, 4)" },
      ],
      quiz: [
        { question: "Min value of y = 3(x − 2)² + 7:", options: ["7", "2", "3", "21"], correctAnswer: 0, explanation: "Min at vertex y = k = 7." },
      ],
    },
    {
      title: "Convert General → Turning-Point Form",
      explanation:
        "Use completing the square to convert y = ax² + bx + c into y = a(x − h)² + k. This makes vertex extraction trivial.",
      keyPoints: ["Factor a from first two terms", "Complete the square inside", "Distribute a"],
      workedExamples: [
        { problem: "Express y = x² − 6x + 11 in turning-point form.", steps: ["= (x − 3)² − 9 + 11", "= (x − 3)² + 2", "Vertex (3, 2)"], answer: "y = (x − 3)² + 2" },
      ],
      tips: ["Vertex (−b/2a, …) gives the same answer."],
      commonErrors: ["Forgetting to add and subtract (b/2)²"],
      summary: ["EXAM INSIGHT: Required to find min/max in worded problems."],
      practice: [
        { question: "Convert y = x² + 4x + 1 to turning-point form.", answer: "y = (x + 2)² − 3" },
      ],
      quiz: [
        { question: "Vertex of y = x² − 8x + 12 is:", options: ["(4,−4)", "(−4,−4)", "(4,4)", "(8,12)"], correctAnswer: 0, explanation: "y = (x−4)²−4." },
      ],
    },
    {
      title: "Sketching Using Turning-Point Form",
      explanation:
        "Use vertex (h, k), y-intercept (substitute x = 0), and x-intercepts (set y = 0). Sketch a smooth symmetric parabola through these points.",
      keyPoints: ["Plot vertex first", "Find y-intercept", "Find x-intercepts (if real)", "Show axis of symmetry"],
      workedExamples: [
        { problem: "Sketch y = (x − 2)² − 9.", steps: ["Vertex (2, −9)", "y-int: 4 − 9 = −5 → (0, −5)", "x-ints: (x−2)² = 9 → x = 5 or −1", "Axis x = 2"], answer: "Parabola through (−1,0),(5,0); vertex (2,−9)" },
      ],
      tips: ["Use symmetry — y-int and its mirror about the axis."],
      commonErrors: ["Forgetting the axis of symmetry on the sketch"],
      summary: ["EXAM INSIGHT: Full sketches require 4 labelled features."],
      practice: [
        { question: "x-intercepts of y = (x + 1)² − 16?", answer: "x = 3, −5" },
      ],
      quiz: [
        { question: "Range of y = 2(x + 3)² − 4 is:", options: ["y ≥ −4", "y ≤ −4", "y ≥ 0", "y ≤ 4"], correctAnswer: 0, explanation: "Min at k=−4, opens up." },
      ],
    },
  ],

  "y10-quadratic-formula-sketch": [
    {
      title: "Using the Quadratic Formula to Find x-Intercepts",
      explanation:
        "OVERVIEW. When a quadratic does not factorise easily, use the formula to find x-intercepts (zeros). Combine with the vertex (axis x = −b/2a) to sketch.",
      keyPoints: ["Use formula for irrational zeros", "Axis of symmetry x = −b/2a", "Substitute to find vertex y"],
      workedExamples: [
        { problem: "Sketch y = x² + 4x + 1.", steps: ["Δ = 16 − 4 = 12", "x = (−4 ± 2√3)/2 = −2 ± √3", "Axis x = −2; vertex (−2, −3)", "y-int (0, 1)"], answer: "Parabola through (−2±√3, 0); vertex (−2,−3)" },
      ],
      tips: ["Sketch always uses exact intercepts."],
      commonErrors: ["Using approximations where exact form is required"],
      summary: ["EXAM INSIGHT: Combines algebra and graphing."],
      practice: [
        { question: "x-intercepts of y = x² − 6x + 4.", answer: "x = 3 ± √5" },
      ],
      quiz: [
        { question: "Axis of symmetry of y = 2x² − 8x + 1:", options: ["x = 2", "x = −2", "x = 4", "x = 1"], correctAnswer: 0, explanation: "x = −b/2a = 8/4 = 2." },
      ],
    },
    {
      title: "Discriminant Check Before Sketching",
      explanation:
        "Compute Δ first to determine whether x-intercepts exist. This avoids wasted effort on quadratics with no real roots and informs the sketch style.",
      keyPoints: ["Δ > 0: two intercepts", "Δ = 0: one (tangent)", "Δ < 0: no intercepts"],
      workedExamples: [
        { problem: "Sketch y = x² + 2x + 5 features.", steps: ["Δ = 4 − 20 < 0 → no x-ints", "Axis x = −1, vertex (−1, 4)", "y-int (0, 5)"], answer: "Above x-axis throughout, vertex (−1,4)" },
      ],
      tips: ["No real roots → parabola sits entirely above or below x-axis."],
      commonErrors: ["Plotting non-existent intercepts"],
      summary: ["EXAM INSIGHT: Discriminant integrates with sketching tasks."],
      practice: [
        { question: "Does y = x² − 4x + 7 cross the x-axis?", answer: "No (Δ = −12)" },
      ],
      quiz: [
        { question: "If Δ = 0, parabola:", options: ["Misses x-axis", "Crosses twice", "Tangent to x-axis", "Vertical line"], correctAnswer: 2, explanation: "Vertex on x-axis." },
      ],
    },
    {
      title: "Worked Sketches with Surd Intercepts",
      explanation:
        "Plot exact surd intercepts to scale, mark the vertex from completed-square form, and sketch a smooth symmetric curve.",
      keyPoints: ["Plot surds approximately on axis", "Label exact values", "Smooth, symmetric curve"],
      workedExamples: [
        { problem: "Sketch y = x² − 2x − 4.", steps: ["Δ = 4 + 16 = 20", "x = (2 ± 2√5)/2 = 1 ± √5", "Vertex (1, −5)", "y-int (0, −4)"], answer: "Parabola: x-ints (1±√5,0), vertex (1,−5)" },
      ],
      tips: ["Estimate √5 ≈ 2.24 to position the intercepts on the axis."],
      commonErrors: ["Marking surds in wrong order"],
      summary: ["EXAM INSIGHT: Examiners look for exact labels."],
      practice: [
        { question: "Sketch features of y = x² + 2x − 1.", answer: "x-ints −1±√2; vertex (−1,−2)" },
      ],
      quiz: [
        { question: "x-intercepts of y = x² − 4x + 1:", options: ["2±√3", "−2±√3", "2±√5", "Cannot find"], correctAnswer: 0, explanation: "Δ=12, x=(4±2√3)/2." },
      ],
    },
  ],

  "y10-parabola-applications": [
    {
      title: "Modelling Real-World Parabolas",
      explanation:
        "OVERVIEW. Parabolas model: projectile paths, suspension bridges, satellite dishes, profit functions and stopping distances. The vertex represents a maximum or minimum value of practical importance.",
      keyPoints: ["Identify variables and units", "Set up quadratic model", "Vertex = optimum", "Interpret in context"],
      workedExamples: [
        { problem: "A bridge cable has shape y = (1/100)x² where −50 ≤ x ≤ 50 (metres). Find sag at the centre.", steps: ["Centre x = 0 → y = 0 (lowest)", "At x = 50: y = 25", "Sag below endpoints = 25 m"], answer: "Sag = 25 m" },
      ],
      tips: ["Always state units in the answer."],
      commonErrors: ["Confusing height with sag"],
      summary: ["EXAM INSIGHT: Worded modelling is highly examined."],
      practice: [
        { question: "Profit P = −x² + 60x − 500. Maximum profit?", answer: "$400 at x = 30" },
      ],
      quiz: [
        { question: "Maximum of h = −5t² + 20t is:", options: ["t=2, h=20", "t=4, h=0", "t=0, h=0", "t=1, h=15"], correctAnswer: 0, explanation: "Vertex t = 2, h = 20." },
      ],
    },
    {
      title: "Optimisation with Quadratics",
      explanation:
        "Use the vertex of a quadratic model to find maximum profit, area, or revenue. The vertex x-coordinate is x = −b/2a; substitute back to find the optimum value.",
      keyPoints: ["Vertex gives optimum", "Substitute back for value", "State both inputs and output"],
      workedExamples: [
        { problem: "A farmer fences a rectangular paddock with 200 m of fencing along three sides (one side is a wall). Find max area.", steps: ["Let x = length perpendicular to wall, 200 − 2x = width", "A = x(200 − 2x) = 200x − 2x²", "Vertex x = 50", "Width 100; A = 5000 m²"], answer: "Max area = 5000 m² (50 × 100)" },
      ],
      tips: ["Always check feasibility (lengths > 0)."],
      commonErrors: ["Solving for x and forgetting to compute A"],
      summary: ["EXAM INSIGHT: Standard 5-mark question."],
      practice: [
        { question: "Revenue R = x(50 − x). Max revenue?", answer: "$625 at x = 25" },
      ],
      quiz: [
        { question: "Vertex of A = 30x − x² is at x =", options: ["10", "15", "20", "30"], correctAnswer: 1, explanation: "x = −b/2a = 30/2." },
      ],
    },
    {
      title: "Interpretation in Context",
      explanation:
        "Always answer in plain English with units and constraints. Identify what x represents, what y represents, and what the vertex/intercepts mean physically.",
      keyPoints: ["Plain-English interpretation", "Units throughout", "State domain restrictions"],
      workedExamples: [
        { problem: "h = 30 + 25t − 5t². Interpret.", steps: ["h: height (m), t: time (s)", "Initial height (t=0) = 30 m", "Max at t = 2.5 s, h = 61.25 m", "Lands when h = 0: t ≈ 6 s"], answer: "Initial 30 m; max 61.25 m at 2.5 s; lands at ~6 s" },
      ],
      tips: ["Always include units in the final statement."],
      commonErrors: ["Numerical answers without context"],
      summary: ["EXAM INSIGHT: 1 mark allocated for context interpretation."],
      practice: [
        { question: "If A = −x² + 20x, what is the maximum and at what value of x?", answer: "Max A = 100 at x = 10" },
      ],
      quiz: [
        { question: "If profit P($) = −x² + 40x − 100, max profit:", options: ["$300", "$400", "$200", "$100"], correctAnswer: 0, explanation: "x=20 → P=300." },
      ],
    },
  ],

  "y10-line-parabola-intersect": [
    {
      title: "Finding Intersection Points (10A)",
      explanation:
        "OVERVIEW. To find intersections of a line y = mx + c and a parabola y = ax² + bx + d, set them equal and solve the resulting quadratic. The discriminant tells you how many intersection points exist.",
      keyPoints: ["Set y_line = y_parabola", "Solve quadratic", "Δ > 0: two; Δ = 0: tangent; Δ < 0: no intersection"],
      workedExamples: [
        { problem: "Find intersections of y = x + 2 and y = x².", steps: ["x² = x + 2", "x² − x − 2 = 0", "(x − 2)(x + 1) = 0", "Points: (2, 4), (−1, 1)"], answer: "(2, 4) and (−1, 1)" },
      ],
      tips: ["Always find BOTH coordinates of each intersection."],
      commonErrors: ["Reporting only x-values"],
      summary: ["EXAM INSIGHT: Intersection problems are core simultaneous-equation skill."],
      practice: [
        { question: "Find intersections of y = 2x − 1 and y = x².", answer: "(1, 1) — tangent" },
      ],
      quiz: [
        { question: "How many intersections do y = x + 5 and y = x² have?", options: ["0", "1", "2", "Infinite"], correctAnswer: 2, explanation: "x²−x−5=0, Δ=21>0." },
      ],
    },
    {
      title: "Tangent Conditions",
      explanation:
        "A line is tangent to a parabola when their equation system has Δ = 0 (one repeated solution). This sets up parameter equations.",
      keyPoints: ["Tangent ⇔ Δ = 0", "Solve for unknown parameter", "Check there is exactly one contact point"],
      workedExamples: [
        { problem: "Find c such that y = 2x + c is tangent to y = x².", steps: ["x² − 2x − c = 0", "Δ = 4 + 4c = 0", "c = −1"], answer: "c = −1" },
      ],
      tips: ["Tangency uses the discriminant condition."],
      commonErrors: ["Setting Δ > 0 instead of Δ = 0"],
      summary: ["EXAM INSIGHT: 10A favourite item linking algebra and geometry."],
      practice: [
        { question: "Find m so y = mx + 1 is tangent to y = x².", answer: "m = ±2" },
      ],
      quiz: [
        { question: "If a line is tangent to a parabola, then Δ =", options: [">0", "<0", "=0", "depends"], correctAnswer: 2, explanation: "Single contact point." },
      ],
    },
    {
      title: "Inequalities and Region Problems",
      explanation:
        "Use the intersection points to determine where the line lies above or below the parabola. This forms quadratic inequalities solvable by sketch or sign analysis.",
      keyPoints: ["Find intersection points", "Test intervals", "Use sign chart"],
      workedExamples: [
        { problem: "Solve x² < x + 2.", steps: ["x² − x − 2 < 0", "(x − 2)(x + 1) < 0", "−1 < x < 2"], answer: "−1 < x < 2" },
      ],
      tips: ["Sketch helps visualise when parabola is below the line."],
      commonErrors: ["Including endpoints of strict inequality"],
      summary: ["EXAM INSIGHT: Inequalities tested in 10A and Methods Unit 1."],
      practice: [
        { question: "Solve x² ≥ 4.", answer: "x ≤ −2 or x ≥ 2" },
      ],
      quiz: [
        { question: "Solve x² − 9 < 0.", options: ["x < ±3", "−3 < x < 3", "x > 3", "x < −3"], correctAnswer: 1, explanation: "Parabola below x-axis between roots." },
      ],
    },
  ],

  "y10-rates-of-change": [
    {
      title: "Understanding Rate of Change (10A)",
      explanation:
        "OVERVIEW. The RATE OF CHANGE of one variable with respect to another measures how quickly the first changes per unit change of the second. Average rate over [a, b] = (f(b) − f(a))/(b − a) — the GRADIENT of the secant line.",
      keyPoints: ["Average = (Δy)/(Δx)", "Geometric meaning: secant gradient", "Units are crucial"],
      workedExamples: [
        { problem: "h(t) = 5t². Average rate over t ∈ [1, 3]?", steps: ["h(1) = 5, h(3) = 45", "Avg rate = (45 − 5)/(3 − 1) = 20 m/s"], answer: "20 m/s" },
      ],
      tips: ["Always include units in the rate."],
      commonErrors: ["Forgetting to divide by Δx"],
      summary: ["EXAM INSIGHT: Foundation for calculus in Year 11/12."],
      practice: [
        { question: "f(x) = x²; average rate from x=2 to x=5.", answer: "7" },
      ],
      quiz: [
        { question: "Average rate of f(x)=2x+3 over [0,4] is:", options: ["2", "4", "8", "11"], correctAnswer: 0, explanation: "Linear function: gradient is constant." },
      ],
    },
    {
      title: "Constant vs Variable Rates",
      explanation:
        "Linear relationships have CONSTANT rates of change (slope is the same everywhere). Non-linear relationships (like quadratics) have VARIABLE rates — different secants give different gradients.",
      keyPoints: ["Linear: constant gradient", "Quadratic: rate varies with x", "Curves require local approximation"],
      workedExamples: [
        { problem: "Compare rates: f(x) = 3x + 2 vs g(x) = x².", steps: ["f': constant 3", "g': 2x — depends on point"], answer: "Linear constant, quadratic variable" },
      ],
      tips: ["Quadratic graphs become steeper away from the vertex."],
      commonErrors: ["Treating quadratic rates as constant"],
      summary: ["EXAM INSIGHT: Sets up gradient-of-curve concept."],
      practice: [
        { question: "Is the rate of f(x) = x³ + x constant?", answer: "No — variable" },
      ],
      quiz: [
        { question: "y = 2x + 7 has rate of change:", options: ["2", "7", "Variable", "0"], correctAnswer: 0, explanation: "Slope of line." },
      ],
    },
    {
      title: "Applications of Rates",
      explanation:
        "Real-world rates include speed (distance/time), filling rates (volume/time), cooling/heating, currency exchange. Always identify the two quantities and the units.",
      keyPoints: ["Identify dependent and independent variables", "Check units", "Average rate vs instantaneous"],
      workedExamples: [
        { problem: "A tank has V(t) = 100 − 4t² (litres). Average rate of emptying over [0, 5]?", steps: ["V(0) = 100, V(5) = 0", "Rate = (0 − 100)/5 = −20 L/s"], answer: "−20 L/s (emptying)" },
      ],
      tips: ["Negative rate = decrease."],
      commonErrors: ["Ignoring sign of rate"],
      summary: ["EXAM INSIGHT: Worded applications appear regularly."],
      practice: [
        { question: "Population P = 200t − t². Avg rate over [0, 10]?", answer: "190 per unit time" },
      ],
      quiz: [
        { question: "If car distance d(t)=20t (m), the rate is:", options: ["20 m/s", "20 m", "10 m/s", "Variable"], correctAnswer: 0, explanation: "Constant slope." },
      ],
    },
  ],

  "y10-avg-instantaneous-rate": [
    {
      title: "Average vs Instantaneous Rate (10A)",
      explanation:
        "OVERVIEW.\n  • AVERAGE rate over [a, b] = gradient of the SECANT joining (a, f(a)) and (b, f(b)).\n  • INSTANTANEOUS rate at x = a = gradient of the TANGENT to the curve at x = a.\n\nAverage rates approximate instantaneous as the interval [a, b] shrinks toward zero — the foundation of differential calculus.",
      keyPoints: ["Secant → average", "Tangent → instantaneous", "Limit process for instantaneous"],
      workedExamples: [
        { problem: "f(x) = x². Estimate instantaneous rate at x = 2 using small intervals.", steps: ["[2, 2.1]: (4.41 − 4)/0.1 = 4.1", "[2, 2.01]: 4.01", "[2, 2.001]: 4.001", "Limit → 4"], answer: "Instantaneous rate = 4" },
      ],
      tips: ["Smaller intervals give better instantaneous estimates."],
      commonErrors: ["Confusing tangent with secant"],
      summary: ["EXAM INSIGHT: Key conceptual bridge to calculus."],
      practice: [
        { question: "Instantaneous rate of f(x) = 3x² at x = 1.", answer: "6 (using small interval)" },
      ],
      quiz: [
        { question: "Tangent line at a point gives:", options: ["Average rate", "Instantaneous rate", "Both", "Neither"], correctAnswer: 1, explanation: "Tangent gradient = instantaneous rate." },
      ],
    },
    {
      title: "Estimating Instantaneous Rate Numerically",
      explanation:
        "Compute average rates over progressively smaller intervals around the point of interest. The values converge to the instantaneous rate.",
      keyPoints: ["Use [a, a + h] with h shrinking", "Tabulate results", "Identify limit"],
      workedExamples: [
        { problem: "Estimate instantaneous rate of f(x) = x² + x at x = 1.", steps: ["h = 0.1: (1.21 + 1.1 − 2)/0.1 = 3.1", "h = 0.01: 3.01", "h = 0.001: 3.001", "Limit ≈ 3"], answer: "≈ 3" },
      ],
      tips: ["Use a calculator for precision."],
      commonErrors: ["Insufficiently small h"],
      summary: ["EXAM INSIGHT: Numerical method common in Methods Unit 1."],
      practice: [
        { question: "Rate of f(x) = x² at x = 3 numerically.", answer: "≈ 6" },
      ],
      quiz: [
        { question: "Instantaneous rate of x³ at x = 1 is approximately:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "Limit of (1+h)³−1)/h → 3." },
      ],
    },
    {
      title: "Geometric Interpretation",
      explanation:
        "Sketch curve and tangent at a point. The slope of this tangent visually represents the instantaneous rate of change. Compare with the secant slope between two points.",
      keyPoints: ["Tangent touches curve at one point", "Secant cuts at two points", "Both have a gradient meaning"],
      workedExamples: [
        { problem: "Sketch f(x) = x² and its tangent at (1, 1).", steps: ["Tangent slope ≈ 2", "Tangent line: y − 1 = 2(x − 1)", "y = 2x − 1"], answer: "Tangent y = 2x − 1" },
      ],
      tips: ["Use derivative reasoning informally to spot tangent gradients."],
      commonErrors: ["Drawing a chord instead of a tangent"],
      summary: ["EXAM INSIGHT: Tangent visualisations matter for sketches."],
      practice: [
        { question: "Equation of tangent to y = x² at x = 0.", answer: "y = 0" },
      ],
      quiz: [
        { question: "The tangent to y = x² at (2, 4) has slope:", options: ["2", "4", "8", "16"], correctAnswer: 1, explanation: "Slope = 2x at x = 2." },
      ],
    },
  ],

  "y10-direct-inverse-variation": [
    {
      title: "Direct Variation (10A)",
      explanation:
        "OVERVIEW. Two variables y and x are in DIRECT variation when y = kx for some constant k (the constant of proportionality). The graph is a straight line through the origin.",
      keyPoints: ["y ∝ x ⇔ y = kx", "Find k from a known pair", "Graph: line through origin"],
      workedExamples: [
        { problem: "If y ∝ x and y = 12 when x = 4, find y when x = 7.", steps: ["k = 12/4 = 3", "y = 3 · 7 = 21"], answer: "y = 21" },
      ],
      tips: ["Always state k explicitly."],
      commonErrors: ["Confusing direct with linear (y = mx + c)"],
      summary: ["EXAM INSIGHT: Common 2-mark item."],
      practice: [
        { question: "y ∝ x; y = 30 when x = 6. Find y when x = 10.", answer: "y = 50" },
      ],
      quiz: [
        { question: "If y = 4x, when x doubles, y:", options: ["Doubles", "Halves", "Squares", "Stays same"], correctAnswer: 0, explanation: "Direct: proportional change." },
      ],
    },
    {
      title: "Inverse Variation",
      explanation:
        "Two variables are in INVERSE variation when y = k/x. As x increases, y decreases (and vice versa). The graph is a hyperbola.",
      keyPoints: ["y ∝ 1/x ⇔ y = k/x", "Product xy = k constant", "Graph is hyperbola in first/third quadrants"],
      workedExamples: [
        { problem: "y inversely proportional to x; y = 6 when x = 4. Find y when x = 8.", steps: ["k = 6 · 4 = 24", "y = 24/8 = 3"], answer: "y = 3" },
      ],
      tips: ["Use xy = k to solve quickly."],
      commonErrors: ["Treating inverse as additive (y = k − x)"],
      summary: ["EXAM INSIGHT: Inverse variation models speed-time, gas pressure-volume."],
      practice: [
        { question: "y ∝ 1/x; y = 20 when x = 5. Find y when x = 4.", answer: "y = 25" },
      ],
      quiz: [
        { question: "If y = 12/x, when x = 3, y =", options: ["3", "4", "9", "12"], correctAnswer: 1, explanation: "12/3 = 4." },
      ],
    },
    {
      title: "Other Variation Types and Applications",
      explanation:
        "Other variations include:\n  • Square: y = kx²  (e.g., area vs side)\n  • Square root: y = k√x\n  • Inverse square: y = k/x²  (e.g., light intensity)\nIdentify the type from data, find k, then apply.",
      keyPoints: ["y ∝ x²: curves upward", "y ∝ 1/x²: drops sharply", "Find k then substitute"],
      workedExamples: [
        { problem: "Light intensity I ∝ 1/d². I = 100 at d = 2. Find I at d = 5.", steps: ["k = 100 · 4 = 400", "I = 400/25 = 16"], answer: "I = 16" },
      ],
      tips: ["Identify variation type before computing k."],
      commonErrors: ["Mixing variation types"],
      summary: ["EXAM INSIGHT: Inverse-square law is a science staple."],
      practice: [
        { question: "y ∝ x², y = 12 when x = 2. Find y when x = 5.", answer: "y = 75" },
      ],
      quiz: [
        { question: "If y ∝ √x and y = 6 when x = 4, then k =", options: ["3", "2", "1.5", "6"], correctAnswer: 0, explanation: "k = 6/2 = 3." },
      ],
    },
  ],
};
