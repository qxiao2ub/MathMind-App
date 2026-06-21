import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 1: Linear Relationships
// Full textbook-style lessons aligned to Victorian Curriculum Year 10 / 10A.

export const year10Ch1Lessons: TopicLessonsMap = {
  "y10-review-algebra": [
    {
      title: "Review of Algebra",
      explanation:
        "OVERVIEW. This lesson consolidates Year 9 algebra so the rest of Year 10 builds on a stable foundation.\n\nSECTION A — CORE CONCEPTS. A pronumeral represents an unknown number. A term is a single algebraic expression (e.g. 3x, −5y², 7). Like terms have identical variable parts (3x and −2x are like; 3x and 3x² are not). The coefficient is the numerical part of a term.\n\nSECTION B — METHODS AND SKILLS.\n  1. Combine like terms: add or subtract coefficients only, keep the variable part.\n  2. Multiply: multiply coefficients, then variables, applying index laws (xᵃ × xᵇ = xᵃ⁺ᵇ).\n  3. Divide: divide coefficients, subtract indices.\n  4. Expand: distribute the term outside the bracket over each term inside.\n  5. Substitute: replace each pronumeral with its value, then evaluate using order of operations (BIDMAS).",
      keyPoints: [
        "Only LIKE terms can be combined",
        "Coefficient × coefficient, variable × variable",
        "xᵃ × xᵇ = xᵃ⁺ᵇ; xᵃ ÷ xᵇ = xᵃ⁻ᵇ",
        "Distribute carefully across all inside terms",
      ],
      workedExamples: [
        { problem: "Simplify 4x + 3 − 2x + 7.", steps: ["Group like terms: (4x − 2x) + (3 + 7)", "= 2x + 10"], answer: "2x + 10" },
        { problem: "Simplify 5a²b · 3ab³.", steps: ["Coefficients: 5 × 3 = 15", "a-powers: a² · a = a³", "b-powers: b · b³ = b⁴"], answer: "15a³b⁴" },
        { problem: "Expand and simplify 3(2x − 1) − 2(x + 4).", steps: ["= 6x − 3 − 2x − 8", "= 4x − 11"], answer: "4x − 11" },
        { problem: "Evaluate 2x² − 3x + 1 when x = −2.", steps: ["= 2(−2)² − 3(−2) + 1", "= 2(4) + 6 + 1", "= 15"], answer: "15" },
      ],
      tips: [
        "Treat the sign in front of a term as part of the coefficient",
        "Always wrap negative substitutions in brackets: (−2)² ≠ −2²",
      ],
      definitions: [
        { term: "Like terms", meaning: "Terms with identical variable parts." },
        { term: "Coefficient", meaning: "The numerical multiplier of the variables in a term." },
      ],
      formulas: [
        { name: "Index multiplication", formula: "xᵃ · xᵇ = xᵃ⁺ᵇ" },
        { name: "Distributive law", formula: "a(b + c) = ab + ac" },
      ],
      commonErrors: [
        "Adding unlike terms: 3x + 2x² ≠ 5x³",
        "Forgetting to distribute the negative across every term",
        "Computing −2² as 4 (it equals −4; only (−2)² = 4)",
      ],
      summary: [
        "EXAM INSIGHT: Algebra simplification carries marks throughout Year 10 — every quadratic, log and trig question relies on it.",
        "Mastery checklist: combine like terms; apply index laws; expand single brackets; substitute negatives correctly.",
      ],
      practice: [
        { question: "Simplify 7y − 4 + 2y + 9.", answer: "9y + 5" },
        { question: "Simplify (3a²b)(−2ab²).", answer: "−6a³b³" },
        { question: "Expand −4(2x − 5).", answer: "−8x + 20" },
        { question: "Evaluate x² − 5x when x = −3.", answer: "24" },
      ],
      quiz: [
        { question: "Simplify 6m − 4 + m + 2.", options: ["7m − 6", "7m − 2", "6m − 2", "5m − 2"], correctAnswer: 1, explanation: "(6m + m) + (−4 + 2) = 7m − 2." },
        { question: "Simplify 4x² · 2x³.", options: ["6x⁵", "8x⁵", "8x⁶", "6x⁶"], correctAnswer: 1, explanation: "Coefficients 4·2 = 8; indices 2 + 3 = 5." },
        { question: "Expand −3(2y − 4).", options: ["−6y + 12", "−6y − 12", "6y + 12", "−6y − 4"], correctAnswer: 0, explanation: "−3·2y = −6y; −3·(−4) = +12." },
      ],
    },
    {
      title: "Adding and Subtracting Algebraic Fractions",
      explanation:
        "OVERVIEW. Algebraic fractions follow the same rules as numerical fractions: a common denominator is required to add or subtract.\n\nSECTION A — CORE CONCEPTS. The lowest common denominator (LCD) is the LCM of the denominators. Once denominators agree, combine numerators and simplify.\n\nSECTION B — METHODS AND SKILLS.\n  1. Find the LCD.\n  2. Rewrite each fraction with the LCD by multiplying numerator and denominator by the same factor.\n  3. Combine numerators over the common denominator.\n  4. Expand and simplify the numerator; cancel common factors if possible.",
      keyPoints: [
        "Common denominator BEFORE combining",
        "Multiply top and bottom by the same factor",
        "Simplify the numerator after combining",
      ],
      workedExamples: [
        { problem: "Simplify x/3 + x/4.", steps: ["LCD = 12", "= 4x/12 + 3x/12", "= 7x/12"], answer: "7x/12" },
        { problem: "Simplify (x + 1)/2 − (x − 3)/5.", steps: ["LCD = 10", "= 5(x+1)/10 − 2(x−3)/10", "= [5x + 5 − 2x + 6]/10", "= (3x + 11)/10"], answer: "(3x + 11)/10" },
      ],
      tips: ["Place the second numerator in brackets when subtracting to handle the sign correctly."],
      commonErrors: [
        "Forgetting to multiply the numerator when changing the denominator",
        "Distributing the minus sign over only the first term of the second numerator",
      ],
      summary: [
        "EXAM INSIGHT: Reappears constantly in solving linear equations with fractions and in calculus simplification.",
      ],
      practice: [
        { question: "Simplify 2x/5 + x/3.", answer: "11x/15" },
        { question: "Simplify (x+2)/3 − (x−1)/4.", answer: "(x + 11)/12" },
      ],
      quiz: [
        { question: "x/2 + x/3 = ?", options: ["x/5", "5x/6", "2x/5", "x/6"], correctAnswer: 1, explanation: "LCD 6 → 3x/6 + 2x/6 = 5x/6." },
        { question: "(x+1)/2 − x/2 = ?", options: ["1/2", "x + 1/2", "1", "0"], correctAnswer: 0, explanation: "Same denom; (x+1−x)/2 = 1/2." },
      ],
    },
    {
      title: "Multiplying and Dividing Algebraic Fractions",
      explanation:
        "OVERVIEW. Multiply numerators and denominators directly. Divide by multiplying by the reciprocal. Cancel common factors before multiplying for efficiency.\n\nSECTION B — METHOD.\n  1. Factorise where possible.\n  2. Cancel common factors across numerator and denominator.\n  3. Multiply remaining factors.",
      keyPoints: [
        "a/b × c/d = ac/bd",
        "a/b ÷ c/d = a/b × d/c",
        "Cancel BEFORE multiplying",
      ],
      workedExamples: [
        { problem: "Simplify 3x/4 · 8/(9x).", steps: ["Cancel 3 and 9 → 1 and 3; cancel x with x; cancel 4 and 8 → 1 and 2", "= 1·2/(3·1) = 2/3"], answer: "2/3" },
        { problem: "Simplify (x²)/(2y) ÷ x/(4y²).", steps: ["= x²/(2y) × 4y²/x", "= 4x²y²/(2xy)", "= 2xy"], answer: "2xy" },
      ],
      tips: ["Always check whether a numerator or denominator can be FACTORISED before cancelling."],
      commonErrors: ["Cancelling across a + sign (only factors can be cancelled)"],
      summary: ["EXAM INSIGHT: Combined with factorisation in algebraic-fraction questions worth 2–3 marks."],
      practice: [
        { question: "Simplify 2a/3 · 9/(4a).", answer: "3/2" },
        { question: "Simplify (6x²y)/5 ÷ (3xy)/10.", answer: "4x" },
      ],
      quiz: [
        { question: "x/2 ÷ x/4 = ?", options: ["x²/8", "2", "1/2", "x/8"], correctAnswer: 1, explanation: "x/2 × 4/x = 4/2 = 2." },
        { question: "Cancel 6x/(8x²).", options: ["3/(4x)", "3x/4", "6/(8x)", "3/4"], correctAnswer: 0, explanation: "6/8 = 3/4; x/x² = 1/x." },
      ],
    },
  ],

  "y10-solving-linear-eq": [
    {
      title: "Solving Simple Linear Equations",
      explanation:
        "OVERVIEW. A linear equation has the variable raised only to the first power. The aim is to ISOLATE the variable using inverse operations applied equally to both sides.\n\nSECTION A — CORE CONCEPTS. Whatever you do to the left side you must do to the right side. The order of inverse operations is generally: undo addition/subtraction first, then multiplication/division.\n\nSECTION B — METHOD.\n  1. Simplify each side (expand brackets, collect like terms).\n  2. Move all variable terms to one side.\n  3. Move constants to the other side.\n  4. Divide by the coefficient of the variable.\n  5. Verify by substituting back.",
      keyPoints: [
        "Same operation on BOTH sides",
        "Undo + and − before × and ÷",
        "Collect variables on the side with the larger coefficient",
        "Always check your solution",
      ],
      workedExamples: [
        { problem: "Solve 3x + 7 = 22.", steps: ["3x = 22 − 7 = 15", "x = 15/3 = 5"], answer: "x = 5" },
        { problem: "Solve 5x − 4 = 2x + 11.", steps: ["5x − 2x = 11 + 4", "3x = 15", "x = 5"], answer: "x = 5" },
        { problem: "Solve 2(x − 3) = 4x + 6.", steps: ["2x − 6 = 4x + 6", "−2x = 12", "x = −6"], answer: "x = −6" },
      ],
      tips: ["Substitute your answer back into the ORIGINAL equation to detect arithmetic slips."],
      commonErrors: [
        "Forgetting to apply the operation to every term on both sides",
        "Sign errors when moving terms across the equals sign",
      ],
      summary: ["EXAM INSIGHT: Foundational; every coordinate-geometry, simultaneous and quadratic question depends on this skill."],
      practice: [
        { question: "Solve 4x + 9 = 25.", answer: "x = 4" },
        { question: "Solve 7 − 2x = 1.", answer: "x = 3" },
        { question: "Solve 3(x + 2) = 2x + 5.", answer: "x = −1" },
      ],
      quiz: [
        { question: "Solve 2x + 5 = 17.", options: ["x = 6", "x = 11", "x = 12", "x = 22"], correctAnswer: 0, explanation: "2x = 12 → x = 6." },
        { question: "Solve 4x − 3 = x + 9.", options: ["x = 2", "x = 3", "x = 4", "x = 12"], correctAnswer: 2, explanation: "3x = 12 → x = 4." },
        { question: "Solve 5(x − 1) = 15.", options: ["x = 2", "x = 3", "x = 4", "x = 5"], correctAnswer: 2, explanation: "x − 1 = 3 → x = 4." },
      ],
    },
    {
      title: "Equations with Brackets and Variables on Both Sides",
      explanation:
        "When equations contain brackets, expand first; when the variable appears on both sides, gather variables on the side that gives a positive coefficient to avoid sign errors.",
      keyPoints: ["Expand brackets first", "Collect variables on one side", "Aim for a positive coefficient"],
      workedExamples: [
        { problem: "Solve 3(2x − 1) = 4(x + 2).", steps: ["6x − 3 = 4x + 8", "2x = 11", "x = 11/2"], answer: "x = 11/2" },
        { problem: "Solve 5 − 2(x + 1) = 3x − 7.", steps: ["5 − 2x − 2 = 3x − 7", "3 − 2x = 3x − 7", "10 = 5x", "x = 2"], answer: "x = 2" },
      ],
      tips: ["Distribute the negative carefully when a bracket is preceded by a minus."],
      commonErrors: ["Distributing across only the first term", "Sign error when removing the bracket"],
      summary: ["EXAM INSIGHT: Common 1–2 mark questions; a sign error here destroys multi-part working."],
      practice: [
        { question: "Solve 2(x − 4) + 3 = x + 1.", answer: "x = 6" },
        { question: "Solve 4(2x − 1) = 2(x + 5).", answer: "x = 7/3" },
      ],
      quiz: [
        { question: "Solve 2(x + 3) = x + 10.", options: ["x = 4", "x = 5", "x = 7", "x = 10"], correctAnswer: 0, explanation: "2x + 6 = x + 10 → x = 4." },
        { question: "Solve 3(x − 2) = 2(x + 1).", options: ["x = 4", "x = 6", "x = 8", "x = 10"], correctAnswer: 2, explanation: "3x − 6 = 2x + 2 → x = 8." },
      ],
    },
    {
      title: "Equations Involving Fractions",
      explanation:
        "Eliminate fractions FIRST by multiplying every term on both sides by the LCD. Then solve as a normal linear equation.",
      keyPoints: ["Multiply EVERY term by the LCD", "Then solve normally", "Bracket numerators that are expressions"],
      workedExamples: [
        { problem: "Solve x/3 + 2 = 5.", steps: ["Multiply by 3: x + 6 = 15", "x = 9"], answer: "x = 9" },
        { problem: "Solve (x + 1)/2 = (2x − 3)/5.", steps: ["LCD = 10; multiply both sides by 10", "5(x+1) = 2(2x−3)", "5x + 5 = 4x − 6", "x = −11"], answer: "x = −11" },
        { problem: "Solve x/2 + x/3 = 5.", steps: ["LCD = 6", "3x + 2x = 30", "5x = 30, x = 6"], answer: "x = 6" },
      ],
      tips: ["Always bracket binomial numerators before multiplying."],
      commonErrors: ["Multiplying only one term by the LCD", "Forgetting to bracket (x + 1) before multiplying"],
      summary: ["EXAM INSIGHT: Frequent 2-mark items; clearing fractions early avoids repeated common-denominator work."],
      practice: [
        { question: "Solve x/4 − 1 = 2.", answer: "x = 12" },
        { question: "Solve (2x − 1)/3 = (x + 4)/2.", answer: "x = 14" },
        { question: "Solve x/2 + (x + 1)/3 = 4.", answer: "x = 22/5" },
      ],
      quiz: [
        { question: "Solve x/5 = 3.", options: ["x = 8", "x = 15", "x = 3/5", "x = 5/3"], correctAnswer: 1, explanation: "Multiply by 5." },
        { question: "Solve (x + 2)/3 = 4.", options: ["x = 10", "x = 12", "x = 14", "x = 6"], correctAnswer: 0, explanation: "x + 2 = 12 → x = 10." },
        { question: "Solve x/2 + x/4 = 6.", options: ["x = 4", "x = 6", "x = 8", "x = 12"], correctAnswer: 2, explanation: "Multiply by 4: 2x + x = 24 → x = 8." },
      ],
    },
  ],

  "y10-linear-inequalities": [
    {
      title: "Solving Linear Inequalities",
      explanation:
        "OVERVIEW. An inequality compares two expressions using <, >, ≤ or ≥. Solving uses the same operations as equations with ONE crucial rule: when you multiply or divide both sides by a NEGATIVE number, the inequality sign REVERSES.\n\nSECTION A — CORE CONCEPTS.\n  • a < b means a is strictly less than b.\n  • a ≤ b includes equality (a = b allowed).\n  • Solutions are typically intervals, not single values.\n\nSECTION B — METHOD. Identical to equations: simplify, isolate, solve. Reverse the sign whenever multiplying or dividing by a negative.",
      keyPoints: [
        "Same steps as equations…",
        "…BUT flip the sign when × or ÷ by a negative",
        "Solutions are intervals (e.g. x > 3)",
      ],
      workedExamples: [
        { problem: "Solve 3x − 4 < 11.", steps: ["3x < 15", "x < 5"], answer: "x < 5" },
        { problem: "Solve −2x + 7 ≥ 1.", steps: ["−2x ≥ −6", "Divide by −2 (flip!): x ≤ 3"], answer: "x ≤ 3" },
        { problem: "Solve 5 − 3x > 2x − 10.", steps: ["5 + 10 > 2x + 3x", "15 > 5x", "3 > x, i.e. x < 3"], answer: "x < 3" },
      ],
      tips: ["If you avoid dividing by a negative, you avoid the flip — gather variables on the positive-coefficient side."],
      commonErrors: ["Forgetting to flip the inequality sign", "Confusing < with ≤ in word problems"],
      summary: ["EXAM INSIGHT: Most marks lost on inequality questions come from the missed flip."],
      practice: [
        { question: "Solve 2x + 1 ≤ 9.", answer: "x ≤ 4" },
        { question: "Solve −x + 3 < 7.", answer: "x > −4" },
        { question: "Solve 4 − 2x ≥ x − 5.", answer: "x ≤ 3" },
      ],
      quiz: [
        { question: "Solve x + 5 > 8.", options: ["x > 3", "x < 3", "x ≥ 3", "x ≤ 3"], correctAnswer: 0, explanation: "Subtract 5." },
        { question: "Solve −3x ≥ 12.", options: ["x ≥ −4", "x ≤ −4", "x ≥ 4", "x ≤ 4"], correctAnswer: 1, explanation: "Divide by −3 and FLIP." },
        { question: "Which value satisfies x < 2?", options: ["3", "2", "1", "5"], correctAnswer: 2, explanation: "1 < 2." },
      ],
    },
    {
      title: "Graphing Inequalities on a Number Line",
      explanation:
        "Use an OPEN circle (○) for strict inequalities (<, >) and a CLOSED circle (●) for inclusive ones (≤, ≥). Shade the half-line in the direction of the solution.",
      keyPoints: ["Open = not included", "Closed = included", "Arrow shows direction"],
      workedExamples: [
        { problem: "Graph x ≥ −2.", steps: ["Closed circle at −2", "Shade to the right"], answer: "Closed circle at −2 with arrow right" },
        { problem: "Graph x < 4.", steps: ["Open circle at 4", "Shade to the left"], answer: "Open circle at 4 with arrow left" },
      ],
      tips: ["Always read the inequality from the variable's side: 5 > x means x < 5."],
      commonErrors: ["Shading the wrong direction when variable is on the right"],
      summary: ["EXAM INSIGHT: Often a 1-mark visual that confirms whether the algebra was set up correctly."],
      practice: [
        { question: "Graph x ≤ 1.", answer: "Closed circle at 1, arrow left" },
        { question: "Graph −1 < x ≤ 3.", answer: "Open at −1, closed at 3, shaded between" },
      ],
      quiz: [
        { question: "Open circle at 5 with arrow right represents:", options: ["x ≤ 5", "x < 5", "x > 5", "x ≥ 5"], correctAnswer: 2, explanation: "Open and right of 5." },
        { question: "Closed circle at −3, arrow right:", options: ["x > −3", "x ≥ −3", "x ≤ −3", "x < −3"], correctAnswer: 1, explanation: "Closed = inclusive." },
      ],
    },
    {
      title: "Compound Inequalities and Word Problems",
      explanation:
        "A compound inequality combines two conditions, e.g. −1 ≤ x < 4. Solve each part by performing the same operation on ALL three regions.\n\nWord problems require translating phrases: 'at least' → ≥, 'at most' → ≤, 'more than' → >, 'fewer than' → <.",
      keyPoints: ["Apply each operation to all three regions", "Translate keywords carefully", "Check answers in context"],
      workedExamples: [
        { problem: "Solve −5 ≤ 2x − 1 < 7.", steps: ["Add 1: −4 ≤ 2x < 8", "Divide by 2: −2 ≤ x < 4"], answer: "−2 ≤ x < 4" },
        { problem: "A taxi charges $4 plus $2/km. For what distances is the fare at most $20?", steps: ["4 + 2d ≤ 20", "2d ≤ 16", "d ≤ 8 km"], answer: "Distances up to 8 km" },
      ],
      tips: ["For compound inequalities, never split into 'two equations' — operate on all parts at once."],
      commonErrors: ["Mistranslating 'at least' as > instead of ≥"],
      summary: ["EXAM INSIGHT: Word inequalities appear in linear modelling and statistics contexts."],
      practice: [
        { question: "Solve 1 < 3x − 2 ≤ 10.", answer: "1 < x ≤ 4" },
        { question: "I have $50 and want to buy pens at $3 each plus a $5 notebook. How many pens can I buy?", answer: "n ≤ 15" },
      ],
      quiz: [
        { question: "Solve 0 ≤ x + 2 < 5.", options: ["−2 ≤ x < 3", "0 ≤ x < 5", "−2 ≤ x ≤ 3", "−2 < x < 3"], correctAnswer: 0, explanation: "Subtract 2 from each part." },
        { question: "'At least 18 years old' becomes:", options: ["age > 18", "age ≥ 18", "age < 18", "age ≤ 18"], correctAnswer: 1, explanation: "'At least' includes the value." },
      ],
    },
  ],

  "y10-graphing-lines": [
    {
      title: "Graphing Lines from y = mx + c",
      explanation:
        "OVERVIEW. The gradient–intercept form y = mx + c reveals two useful pieces of information at a glance: m is the gradient (slope), c is the y-intercept (where the line crosses the y-axis).\n\nSECTION A — GRADIENT meaning.\n  • m > 0 → line rises left to right.\n  • m < 0 → line falls left to right.\n  • m = 0 → horizontal line.\n\nSECTION B — METHOD.\n  1. Plot the y-intercept (0, c).\n  2. From there, use the gradient as RISE/RUN to find a second point.\n  3. Draw the straight line through both points.",
      keyPoints: ["m = rise / run", "c = y-intercept", "Two points define a unique line"],
      workedExamples: [
        { problem: "Sketch y = 2x − 3.", steps: ["y-intercept (0, −3)", "Gradient 2 = 2/1: from (0, −3) move right 1, up 2 → (1, −1)", "Draw line through both points"], answer: "Line through (0, −3) and (1, −1)" },
        { problem: "Sketch y = −x/2 + 1.", steps: ["y-intercept (0, 1)", "Gradient −1/2: right 2, down 1 → (2, 0)", "Draw line"], answer: "Line through (0, 1) and (2, 0)" },
      ],
      tips: ["A negative gradient slopes 'down hill' from left to right."],
      commonErrors: ["Reading c as the x-intercept", "Reversing rise and run"],
      summary: ["EXAM INSIGHT: Gradient–intercept sketching is a 1–2 mark item; speed comes from confidently identifying c first."],
      practice: [
        { question: "State the gradient and y-intercept of y = −3x + 4.", answer: "m = −3, c = 4" },
        { question: "Sketch y = (2/3)x − 1.", answer: "(0, −1) and (3, 1)" },
      ],
      quiz: [
        { question: "y-intercept of y = 5x − 7?", options: ["5", "−7", "7", "0"], correctAnswer: 1, explanation: "c = −7." },
        { question: "Gradient of y = 4 − 2x?", options: ["4", "2", "−2", "−4"], correctAnswer: 2, explanation: "Coefficient of x is −2." },
      ],
    },
    {
      title: "Graphing Using x- and y-Intercepts",
      explanation:
        "For lines in standard form ax + by = c, the intercept method is fastest. Set y = 0 to find the x-intercept; set x = 0 to find the y-intercept; join the two points.",
      keyPoints: ["x-intercept: let y = 0", "y-intercept: let x = 0", "Two intercepts → straight line"],
      workedExamples: [
        { problem: "Sketch 2x + 3y = 12.", steps: ["x-int: y = 0 → 2x = 12 → x = 6", "y-int: x = 0 → 3y = 12 → y = 4", "Line through (6, 0) and (0, 4)"], answer: "(6, 0) and (0, 4)" },
        { problem: "Sketch x − y = 3.", steps: ["x-int (3, 0); y-int (0, −3)"], answer: "(3, 0) and (0, −3)" },
      ],
      tips: ["Use the intercept method whenever both x and y appear on the same side."],
      commonErrors: ["Forgetting the sign when y-intercept is negative"],
      summary: ["EXAM INSIGHT: Intercept method appears in network/region questions and as a setup for inequalities."],
      practice: [
        { question: "Find both intercepts of 4x − y = 8.", answer: "x-int (2, 0); y-int (0, −8)" },
        { question: "Find both intercepts of 3x + 5y = 15.", answer: "(5, 0) and (0, 3)" },
      ],
      quiz: [
        { question: "x-intercept of 2x + y = 6?", options: ["3", "6", "2", "0"], correctAnswer: 0, explanation: "y = 0 → 2x = 6 → x = 3." },
        { question: "y-intercept of x − 2y = 4?", options: ["4", "−2", "2", "−4"], correctAnswer: 1, explanation: "x = 0 → −2y = 4 → y = −2." },
      ],
    },
    {
      title: "Horizontal, Vertical and Special Lines",
      explanation:
        "y = k is HORIZONTAL (gradient 0). x = k is VERTICAL (gradient undefined). y = x and y = −x are the two diagonals through the origin with gradients ±1.",
      keyPoints: ["y = k → horizontal", "x = k → vertical (gradient undefined)", "y = x: gradient 1"],
      workedExamples: [
        { problem: "Sketch y = 3.", steps: ["Horizontal line through every point with y = 3"], answer: "Horizontal line at height 3" },
        { problem: "Sketch x = −2.", steps: ["Vertical line through every point with x = −2"], answer: "Vertical line at x = −2" },
      ],
      tips: ["x = k is NOT a function (fails the vertical line test) — it is still a valid line."],
      commonErrors: ["Saying gradient of x = 4 is 0 (it is undefined)"],
      summary: ["EXAM INSIGHT: Examiners often test the difference between horizontal (zero gradient) and vertical (undefined gradient)."],
      practice: [
        { question: "Sketch y = −1.", answer: "Horizontal line at y = −1" },
        { question: "Gradient of x = 7?", answer: "Undefined" },
      ],
      quiz: [
        { question: "Gradient of y = −5?", options: ["−5", "0", "Undefined", "1"], correctAnswer: 1, explanation: "Horizontal lines have gradient 0." },
        { question: "x = 0 is the:", options: ["x-axis", "y-axis", "Line y = x", "Origin"], correctAnswer: 1, explanation: "x = 0 is the y-axis." },
      ],
    },
  ],

  "y10-equation-of-line": [
    {
      title: "Finding Equations Using Gradient and Point",
      explanation:
        "Given a gradient m and a point (x₁, y₁), use point–gradient form: y − y₁ = m(x − x₁). Rearrange to y = mx + c if required.",
      keyPoints: ["Point–gradient: y − y₁ = m(x − x₁)", "Gradient–intercept: y = mx + c", "Always state the form requested"],
      workedExamples: [
        { problem: "Line with gradient 3 through (2, −1).", steps: ["y − (−1) = 3(x − 2)", "y + 1 = 3x − 6", "y = 3x − 7"], answer: "y = 3x − 7" },
        { problem: "Line with gradient −1/2 through (4, 5).", steps: ["y − 5 = −½(x − 4)", "y = −½x + 2 + 5", "y = −½x + 7"], answer: "y = −x/2 + 7" },
      ],
      tips: ["When the question asks for ax + by = c form, multiply through to clear fractions."],
      commonErrors: ["Sign error when distributing across (x − x₁)"],
      summary: ["EXAM INSIGHT: Standard 1–2 mark item that underpins parallel/perpendicular questions."],
      practice: [
        { question: "Equation through (1, 2) with gradient 4.", answer: "y = 4x − 2" },
        { question: "Equation through (−3, 0) with gradient 2/3.", answer: "y = 2x/3 + 2" },
      ],
      quiz: [
        { question: "Through (0, 4), m = 2.", options: ["y = 2x + 4", "y = 2x − 4", "y = 4x + 2", "y = 4x − 2"], correctAnswer: 0, explanation: "c = 4." },
        { question: "Through (1, 1), m = −3.", options: ["y = −3x + 4", "y = −3x − 2", "y = −3x + 2", "y = 3x − 2"], correctAnswer: 0, explanation: "y − 1 = −3(x − 1) → y = −3x + 4." },
      ],
    },
    {
      title: "Equation of a Line from Two Points",
      explanation:
        "First compute the gradient m = (y₂ − y₁)/(x₂ − x₁). Then substitute m and either point into y − y₁ = m(x − x₁).",
      keyPoints: ["m = (y₂ − y₁)/(x₂ − x₁)", "Order of subtraction must match in numerator and denominator"],
      workedExamples: [
        { problem: "Line through (1, 2) and (4, 11).", steps: ["m = (11 − 2)/(4 − 1) = 9/3 = 3", "y − 2 = 3(x − 1) → y = 3x − 1"], answer: "y = 3x − 1" },
        { problem: "Line through (−2, 5) and (3, −5).", steps: ["m = (−5 − 5)/(3 − (−2)) = −10/5 = −2", "y − 5 = −2(x + 2) → y = −2x + 1"], answer: "y = −2x + 1" },
      ],
      tips: ["Match the order: if you subtract y₁ from y₂, you must subtract x₁ from x₂."],
      commonErrors: ["Inconsistent subtraction order produces wrong sign for m"],
      summary: ["EXAM INSIGHT: Combine with midpoint and length in coordinate-geometry questions."],
      practice: [
        { question: "Through (0, −3) and (2, 1).", answer: "y = 2x − 3" },
        { question: "Through (−1, 4) and (3, −4).", answer: "y = −2x + 2" },
      ],
      quiz: [
        { question: "Gradient through (1,3) and (4,9)?", options: ["1", "2", "3", "6"], correctAnswer: 1, explanation: "(9 − 3)/(4 − 1) = 2." },
        { question: "Line through (0,0) and (5,10)?", options: ["y = x/2", "y = 2x", "y = x + 5", "y = 5x"], correctAnswer: 1, explanation: "m = 2, c = 0." },
      ],
    },
    {
      title: "Reading Equations from a Graph",
      explanation:
        "Identify two clear lattice points on the line. Compute the gradient, then read or compute the y-intercept.",
      keyPoints: ["Pick clear grid points", "Calculate m", "Read or compute c"],
      workedExamples: [
        { problem: "Graph passes through (0, 1) and (2, 5). Find equation.", steps: ["m = (5 − 1)/(2 − 0) = 2", "c = 1", "y = 2x + 1"], answer: "y = 2x + 1" },
      ],
      tips: ["If the y-intercept is hard to read, find c by substituting one point into y = mx + c."],
      commonErrors: ["Estimating the gradient instead of computing it from two grid points"],
      summary: ["EXAM INSIGHT: Worth 1–2 marks; choose lattice points, not estimates."],
      practice: [
        { question: "Line through (0, −2) and (3, 4). Equation?", answer: "y = 2x − 2" },
        { question: "Line through (1, 0) and (4, 6). Equation?", answer: "y = 2x − 2" },
      ],
      quiz: [
        { question: "Line through (0, 5) and (1, 8). Equation?", options: ["y = 3x + 5", "y = 5x + 3", "y = 8x", "y = x + 5"], correctAnswer: 0, explanation: "m = 3, c = 5." },
      ],
    },
  ],

  "y10-length-midpoint": [
    {
      title: "Distance Between Two Points",
      explanation:
        "OVERVIEW. The distance formula d = √((x₂ − x₁)² + (y₂ − y₁)²) is Pythagoras applied to the horizontal and vertical separations between two points.\n\nSECTION B — METHOD. Compute the horizontal distance Δx, the vertical distance Δy, square both, sum, square-root.",
      keyPoints: ["d = √(Δx² + Δy²)", "Order of subtraction does not matter (squared)", "Distance is always positive"],
      workedExamples: [
        { problem: "Distance between (1, 2) and (4, 6).", steps: ["Δx = 3, Δy = 4", "d = √(9 + 16) = √25 = 5"], answer: "5" },
        { problem: "Distance between (−2, 3) and (3, −1).", steps: ["Δx = 5, Δy = −4", "d = √(25 + 16) = √41 ≈ 6.40"], answer: "√41" },
      ],
      tips: ["Keep answers as exact surds unless a decimal is requested."],
      commonErrors: ["Subtracting after squaring", "Forgetting the square root"],
      summary: ["EXAM INSIGHT: Distance often appears with parallel/perpendicular and Pythagoras-in-3D questions."],
      practice: [
        { question: "Distance from (0, 0) to (6, 8).", answer: "10" },
        { question: "Distance from (−1, 4) to (2, 0).", answer: "5" },
      ],
      quiz: [
        { question: "Distance (3,0) to (0,4)?", options: ["3", "4", "5", "7"], correctAnswer: 2, explanation: "√(9+16) = 5." },
        { question: "Distance (1,1) to (4,5)?", options: ["3", "4", "5", "7"], correctAnswer: 2, explanation: "√(9+16) = 5." },
      ],
    },
    {
      title: "Midpoint of a Line Segment",
      explanation:
        "Midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2). Average of x-coordinates and average of y-coordinates separately.",
      keyPoints: ["M = ((x₁+x₂)/2, (y₁+y₂)/2)", "Compute the two averages independently"],
      workedExamples: [
        { problem: "Midpoint of (2, 3) and (8, 7).", steps: ["x-mid = (2+8)/2 = 5", "y-mid = (3+7)/2 = 5"], answer: "(5, 5)" },
        { problem: "Midpoint of (−4, 2) and (6, −8).", steps: ["x-mid = 1; y-mid = −3"], answer: "(1, −3)" },
      ],
      tips: ["If asked for a missing endpoint given the midpoint, set up two equations and solve."],
      commonErrors: ["Subtracting instead of adding"],
      summary: ["EXAM INSIGHT: Often combined with length to test perpendicular bisector setup."],
      practice: [
        { question: "Midpoint of (0, 0) and (10, 6).", answer: "(5, 3)" },
        { question: "If midpoint of A and B is (3, 4) and A = (1, 2), find B.", answer: "(5, 6)" },
      ],
      quiz: [
        { question: "Midpoint (2,4) and (6,10)?", options: ["(4,7)", "(8,14)", "(2,3)", "(4,6)"], correctAnswer: 0, explanation: "Averages." },
      ],
    },
    {
      title: "Combined Length & Midpoint Problems",
      explanation:
        "Many problems require both formulas: e.g. find the length and midpoint of a chord, then determine whether a triangle is isosceles or scalene by comparing side lengths.",
      keyPoints: ["Use both formulas where needed", "Compare exact lengths to classify triangles", "Midpoint can locate centres of squares/rectangles"],
      workedExamples: [
        { problem: "A(1, 2), B(5, 2), C(3, 6). Is ΔABC isosceles?", steps: ["|AB| = 4", "|AC| = √(4 + 16) = √20", "|BC| = √(4 + 16) = √20", "Two sides equal → isosceles"], answer: "Yes — AC = BC" },
      ],
      tips: ["Surds make comparison easy — keep answers exact."],
      commonErrors: ["Comparing approximations rather than exact values"],
      summary: ["EXAM INSIGHT: Triangle classification is a typical 3-mark coordinate question."],
      practice: [
        { question: "A(0,0), B(6,0), C(3,3√3). Show triangle is equilateral.", answer: "All sides = 6" },
      ],
      quiz: [
        { question: "Sides 5, 5, 7 form a/an:", options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"], correctAnswer: 1, explanation: "Two equal sides." },
      ],
    },
  ],

  "y10-parallel-perpendicular": [
    {
      title: "Gradients of Parallel Lines",
      explanation:
        "Two non-vertical lines are PARALLEL if and only if their gradients are EQUAL: m₁ = m₂. Vertical lines (undefined gradient) are parallel to other vertical lines.",
      keyPoints: ["Parallel ⇔ same gradient", "Different y-intercepts otherwise lines coincide"],
      workedExamples: [
        { problem: "Find the line through (1, 5) parallel to y = 3x − 2.", steps: ["Gradient = 3", "y − 5 = 3(x − 1)", "y = 3x + 2"], answer: "y = 3x + 2" },
        { problem: "Are y = 2x + 1 and 4x − 2y = 7 parallel?", steps: ["Rearrange second: 2y = 4x − 7 → y = 2x − 7/2", "Both gradients = 2 → parallel"], answer: "Yes" },
      ],
      tips: ["Always rewrite each line in y = mx + c form before comparing gradients."],
      commonErrors: ["Comparing equations without first rearranging to y = mx + c"],
      summary: ["EXAM INSIGHT: Recurring 1–2 mark item; rearrangement is the time-saver."],
      practice: [
        { question: "Line through (0, 0) parallel to y = −x + 4.", answer: "y = −x" },
        { question: "Are 6x − 3y = 9 and y = 2x + 5 parallel?", answer: "Yes (both m = 2)" },
      ],
      quiz: [
        { question: "Parallel to y = 5x − 2 has gradient:", options: ["−1/5", "5", "−5", "1/5"], correctAnswer: 1, explanation: "Same m." },
      ],
    },
    {
      title: "Gradients of Perpendicular Lines",
      explanation:
        "Two non-vertical lines are PERPENDICULAR if and only if m₁ × m₂ = −1. Equivalently, m₂ = −1/m₁ — the negative reciprocal.",
      keyPoints: ["m₁ · m₂ = −1", "Negative reciprocal of m₁", "Vertical and horizontal lines are perpendicular as a special case"],
      workedExamples: [
        { problem: "Line perpendicular to y = (1/2)x + 3 through (4, −1).", steps: ["Perpendicular gradient = −2", "y − (−1) = −2(x − 4)", "y = −2x + 7"], answer: "y = −2x + 7" },
        { problem: "Show 2x + 3y = 6 ⊥ 3x − 2y = 4.", steps: ["First: y = −(2/3)x + 2 → m₁ = −2/3", "Second: y = (3/2)x − 2 → m₂ = 3/2", "m₁·m₂ = −1 ⇒ perpendicular"], answer: "Perpendicular" },
      ],
      tips: ["Negative reciprocal: flip the fraction AND change the sign."],
      commonErrors: ["Forgetting the sign change", "Reciprocal of a whole number m is 1/m"],
      summary: ["EXAM INSIGHT: Perpendicular bisectors and altitudes use this directly."],
      practice: [
        { question: "Gradient perpendicular to m = 4.", answer: "−1/4" },
        { question: "Gradient perpendicular to m = −2/3.", answer: "3/2" },
      ],
      quiz: [
        { question: "Perpendicular to y = 3x + 1 has gradient:", options: ["−3", "3", "1/3", "−1/3"], correctAnswer: 3, explanation: "Negative reciprocal of 3." },
      ],
    },
    {
      title: "Applications: Quadrilaterals and Right Triangles",
      explanation:
        "Use parallel and perpendicular gradient tests together with distance to classify quadrilaterals (rectangle, rhombus, square, parallelogram) and to verify right angles in triangles.",
      keyPoints: ["Parallelogram: opposite sides parallel", "Rectangle: parallelogram with one right angle", "Rhombus: parallelogram with all sides equal", "Square: both"],
      workedExamples: [
        { problem: "Show A(0,0), B(4,0), C(4,3), D(0,3) is a rectangle.", steps: ["AB has gradient 0 (horizontal); CD same → AB ∥ CD", "BC vertical; AD vertical → BC ∥ AD", "AB ⊥ BC (horizontal · vertical)", "Therefore rectangle"], answer: "Rectangle" },
      ],
      tips: ["For a square, also verify equal side lengths."],
      commonErrors: ["Concluding 'parallelogram' without showing both pairs of opposite sides parallel"],
      summary: ["EXAM INSIGHT: Coordinate-proof questions worth 3–4 marks; structure your answer with bullet justifications."],
      practice: [
        { question: "Show A(1,1), B(4,2), C(3,5), D(0,4) is a parallelogram.", answer: "AB ∥ DC (both gradient 1/3) and AD ∥ BC (both gradient 3)" },
      ],
      quiz: [
        { question: "Quadrilateral with all 4 sides equal but no right angle:", options: ["Square", "Rectangle", "Rhombus", "Trapezium"], correctAnswer: 2, explanation: "Rhombus." },
      ],
    },
  ],

  "y10-regions-cartesian": [
    {
      title: "Regions Defined by Linear Inequalities",
      explanation:
        "OVERVIEW. A linear inequality such as y > 2x − 1 defines a HALF-PLANE — a region of the Cartesian plane on one side of the boundary line y = 2x − 1.\n\nMETHOD.\n  1. Sketch the boundary line. Use a SOLID line for ≤ or ≥, a DASHED line for < or >.\n  2. Test a convenient point not on the line (often the origin).\n  3. Shade the region containing the point if the inequality is satisfied; otherwise shade the other side.",
      keyPoints: ["Solid line: includes boundary", "Dashed line: excludes boundary", "Use a TEST POINT", "Shade the satisfying half-plane"],
      workedExamples: [
        { problem: "Sketch y ≥ x + 2.", steps: ["Boundary y = x + 2 (solid)", "Test (0, 0): is 0 ≥ 0 + 2? No", "Shade the side NOT containing the origin (above the line)"], answer: "Solid line, shade above" },
        { problem: "Sketch 2x + y < 4.", steps: ["Boundary 2x + y = 4 (dashed)", "Test (0, 0): 0 < 4 ✓", "Shade the side containing the origin"], answer: "Dashed line, shade below-left" },
      ],
      tips: ["If the boundary passes through the origin, choose a different test point such as (1, 0)."],
      commonErrors: ["Using a solid line for a strict inequality", "Forgetting to test a point"],
      summary: ["EXAM INSIGHT: Linear-programming style questions overlap with this skill."],
      practice: [
        { question: "Sketch y < −x + 3.", answer: "Dashed line, shade below" },
        { question: "Sketch x ≥ 2.", answer: "Solid vertical line at x = 2, shade right" },
      ],
      quiz: [
        { question: "y > 2x has boundary line:", options: ["Solid", "Dashed", "Vertical", "Horizontal"], correctAnswer: 1, explanation: "Strict inequality → dashed." },
        { question: "Test (0,0) in y < x − 1:", options: ["True", "False"], correctAnswer: 1, explanation: "0 < −1 is false." },
      ],
    },
    {
      title: "Intersection of Multiple Inequalities",
      explanation:
        "Several inequalities together define an INTERSECTION region — the overlap of the half-planes. Useful for modelling constraints such as resource limits.",
      keyPoints: ["Sketch each boundary", "Shade each region (lightly)", "Final region is the COMMON overlap"],
      workedExamples: [
        { problem: "Sketch the region: y ≥ 0, x ≥ 0, x + y ≤ 4.", steps: ["First quadrant only", "Below or on the line x + y = 4", "Triangle with vertices (0,0), (4,0), (0,4)"], answer: "Right triangle in first quadrant" },
      ],
      tips: ["Identify the corner points (vertices) — they often matter in optimisation."],
      commonErrors: ["Mistakenly shading union instead of intersection"],
      summary: ["EXAM INSIGHT: Sets up Year 11/12 linear programming where vertex testing is the key skill."],
      practice: [
        { question: "Find vertices of: x ≥ 0, y ≥ 0, 2x + y ≤ 6, x + y ≤ 4.", answer: "(0,0), (3,0), (2,2), (0,4)" },
      ],
      quiz: [
        { question: "Intersection of x ≥ 1 and y ≥ 1 is in:", options: ["First quadrant subset", "Whole plane", "Below x = 1", "Left of y-axis"], correctAnswer: 0, explanation: "Both above and right of (1, 1)." },
      ],
    },
    {
      title: "Region Word Problems",
      explanation:
        "Translate constraints into inequalities, sketch the feasible region, then identify whether specific points satisfy all conditions.",
      keyPoints: ["List variables", "Translate each constraint", "Sketch all inequalities together"],
      workedExamples: [
        { problem: "A factory makes x chairs and y tables. Constraints: x ≥ 0, y ≥ 0, 2x + 3y ≤ 60, x + y ≤ 25. Is (10, 10) feasible?", steps: ["Check 10 ≥ 0 ✓ and 10 ≥ 0 ✓", "2(10)+3(10) = 50 ≤ 60 ✓", "10+10 = 20 ≤ 25 ✓", "All satisfied"], answer: "Yes, (10, 10) is feasible" },
      ],
      tips: ["Always include the implicit non-negativity constraints when modelling quantities."],
      commonErrors: ["Forgetting x ≥ 0 or y ≥ 0 in real-world problems"],
      summary: ["EXAM INSIGHT: Modelling questions worth 3–4 marks — clear translation of conditions earns method marks."],
      practice: [
        { question: "Is (5, 10) feasible for 2x + y ≤ 30, x + 2y ≤ 25, x ≥ 0, y ≥ 0?", answer: "Yes" },
      ],
      quiz: [
        { question: "'No more than 10 of item A' translates to:", options: ["x > 10", "x ≥ 10", "x ≤ 10", "x < 10"], correctAnswer: 2, explanation: "'No more than' = ≤." },
      ],
    },
  ],

  "y10-simult-substitution": [
    {
      title: "The Substitution Method",
      explanation:
        "OVERVIEW. Simultaneous equations are two or more equations that must be true at the same time. SUBSTITUTION works best when one equation already has y (or x) made the subject.\n\nMETHOD.\n  1. Make one variable the subject of one equation.\n  2. Substitute that expression into the other equation.\n  3. Solve the resulting single-variable equation.\n  4. Substitute back to find the second variable.\n  5. Verify in BOTH original equations.",
      keyPoints: ["Choose the equation easiest to rearrange", "Replace using brackets", "Always verify in both equations"],
      workedExamples: [
        { problem: "Solve y = 2x + 1 and 3x + y = 11.", steps: ["Substitute y = 2x + 1 into 3x + y = 11", "3x + (2x + 1) = 11", "5x = 10, x = 2", "y = 2(2) + 1 = 5"], answer: "(2, 5)" },
        { problem: "Solve x = 4 − y and 2x + 3y = 11.", steps: ["2(4 − y) + 3y = 11", "8 − 2y + 3y = 11", "y = 3, x = 1"], answer: "(1, 3)" },
      ],
      tips: ["Bracket the substituted expression so the next step uses correct distribution."],
      commonErrors: ["Substituting into the SAME equation by accident", "Forgetting to find the second variable"],
      summary: ["EXAM INSIGHT: Substitution is fastest when one variable is already isolated."],
      practice: [
        { question: "Solve y = x + 4 and 2x + y = 13.", answer: "(3, 7)" },
        { question: "Solve x = 2y − 1 and 3x + 4y = 17.", answer: "(3, 2)" },
      ],
      quiz: [
        { question: "If y = x + 1 and y = 2x − 1, then x = ?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "x + 1 = 2x − 1 → x = 2." },
      ],
    },
    {
      title: "Substitution with Rearrangement",
      explanation:
        "When neither equation has a variable already isolated, choose the equation where rearrangement creates the simplest expression (look for coefficient ±1).",
      keyPoints: ["Pick the easiest variable to isolate", "Coefficient ±1 makes life easier"],
      workedExamples: [
        { problem: "Solve x + 2y = 7 and 3x − y = 7.", steps: ["From equation 1: x = 7 − 2y", "Substitute: 3(7 − 2y) − y = 7", "21 − 6y − y = 7 → −7y = −14 → y = 2", "x = 7 − 4 = 3"], answer: "(3, 2)" },
      ],
      tips: ["Look for coefficient 1 to avoid fractions during rearrangement."],
      commonErrors: ["Choosing the harder equation and creating fractions unnecessarily"],
      summary: ["EXAM INSIGHT: Examiners construct questions where one variable is intentionally easy to isolate."],
      practice: [
        { question: "Solve 2x + y = 10 and x − y = 2.", answer: "(4, 2)" },
      ],
      quiz: [
        { question: "Best variable to isolate from x + 3y = 7 and 5x − 2y = 1?", options: ["x in eq 1", "y in eq 1", "x in eq 2", "y in eq 2"], correctAnswer: 0, explanation: "x has coefficient 1 in equation 1." },
      ],
    },
    {
      title: "Word Problems Using Substitution",
      explanation:
        "Define two variables, set up two equations from the problem context, then solve. Always answer in the units and context of the problem.",
      keyPoints: ["Define variables clearly", "Translate each sentence into an equation", "Answer the original question"],
      workedExamples: [
        { problem: "Two numbers add to 30. The larger is 6 more than the smaller. Find both.", steps: ["Let smaller = x, larger = y", "x + y = 30; y = x + 6", "x + (x + 6) = 30 → x = 12, y = 18"], answer: "12 and 18" },
      ],
      tips: ["Re-read the question after solving to confirm you answered what was asked."],
      commonErrors: ["Solving but failing to interpret the answer in the given context"],
      summary: ["EXAM INSIGHT: Word problems test setup as much as algebra; the equations themselves earn method marks."],
      practice: [
        { question: "Sum of two numbers is 25; one is double the other. Find both.", answer: "25/3 and 50/3" },
      ],
      quiz: [
        { question: "If x + y = 10 and x = y + 4, then x = ?", options: ["3", "5", "7", "8"], correctAnswer: 2, explanation: "(y+4)+y=10 → y=3, x=7." },
      ],
    },
  ],

  "y10-simult-elimination": [
    {
      title: "The Elimination Method",
      explanation:
        "OVERVIEW. ELIMINATION removes one variable by adding or subtracting the equations after scaling them so the coefficients of one variable are equal in magnitude.\n\nMETHOD.\n  1. Multiply each equation by a constant so one variable's coefficients are equal in magnitude.\n  2. Add (if signs are opposite) or subtract (if signs are the same) to eliminate that variable.\n  3. Solve for the remaining variable.\n  4. Substitute back to find the other.",
      keyPoints: ["Scale to match coefficients", "Add for opposite signs, subtract for same", "Substitute back for second variable"],
      workedExamples: [
        { problem: "Solve 2x + y = 7 and x − y = 2.", steps: ["Coefficients of y are 1 and −1", "ADD: 3x = 9, x = 3", "Sub into 2x + y = 7: y = 1"], answer: "(3, 1)" },
        { problem: "Solve 3x + 2y = 12 and 5x − 4y = −2.", steps: ["Multiply equation 1 by 2: 6x + 4y = 24", "ADD to equation 2: 11x = 22 → x = 2", "Sub: 6 + 2y = 12 → y = 3"], answer: "(2, 3)" },
      ],
      tips: ["Find the LCM of the coefficients you wish to eliminate."],
      commonErrors: ["Adding when you should subtract (sign error)"],
      summary: ["EXAM INSIGHT: Most efficient when no variable is already isolated."],
      practice: [
        { question: "Solve 3x + y = 11 and 2x − y = 4.", answer: "(3, 2)" },
        { question: "Solve 4x + 3y = 22 and 2x + y = 10.", answer: "(4, 2)" },
      ],
      quiz: [
        { question: "Add 2x + y = 5 and 3x − y = 5: what equation results?", options: ["5x = 10", "x = 0", "y = 5", "5x = 0"], correctAnswer: 0, explanation: "y eliminated; 5x = 10." },
      ],
    },
    {
      title: "Elimination with Scaling Both Equations",
      explanation:
        "Sometimes both equations must be scaled. Multiply by the smallest constants that make a chosen variable's coefficients equal in magnitude.",
      keyPoints: ["Find LCM of the two coefficients", "Scale each equation accordingly"],
      workedExamples: [
        { problem: "Solve 3x + 5y = 19 and 2x + 3y = 12.", steps: ["LCM of 3 and 2 is 6", "Multiply eq1 by 2: 6x + 10y = 38", "Multiply eq2 by 3: 6x + 9y = 36", "Subtract: y = 2", "Sub: 3x + 10 = 19 → x = 3"], answer: "(3, 2)" },
      ],
      tips: ["Choose the variable that yields the smaller LCM to keep arithmetic light."],
      commonErrors: ["Forgetting to scale BOTH sides of an equation"],
      summary: ["EXAM INSIGHT: Standard 3-mark item; show all multiplications clearly."],
      practice: [
        { question: "Solve 5x + 2y = 16 and 3x + 4y = 18.", answer: "(2, 3)" },
      ],
      quiz: [
        { question: "LCM of 4 and 6 is:", options: ["10", "12", "24", "2"], correctAnswer: 1, explanation: "Smallest multiple of both is 12." },
      ],
    },
    {
      title: "Choosing Substitution vs Elimination",
      explanation:
        "Substitution is best when one variable is already isolated. Elimination is best when coefficients can be matched easily by scaling. Both methods always give the same answer.",
      keyPoints: ["Isolated variable → substitution", "Easy scaling → elimination", "Either method valid"],
      workedExamples: [
        { problem: "Choose method for y = 3x and 2x + y = 10.", steps: ["y is isolated → substitution: 2x + 3x = 10 → x = 2"], answer: "Substitution; (2, 6)" },
        { problem: "Choose method for 2x + 3y = 12 and 4x − 3y = 6.", steps: ["y coefficients are ±3 → elimination by ADDING", "6x = 18 → x = 3, y = 2"], answer: "Elimination; (3, 2)" },
      ],
      tips: ["If you spot opposite-signed equal coefficients, elimination by ADDING is fastest."],
      commonErrors: ["Spending time on substitution when elimination would be one step"],
      summary: ["EXAM INSIGHT: Method choice can save 30+ seconds per question — practise spotting cues."],
      practice: [
        { question: "Best method for x = 4 − 2y and 3x + y = 7?", answer: "Substitution" },
      ],
      quiz: [
        { question: "Best for y = 2x + 1 and 4x − y = 5?", options: ["Substitution", "Elimination", "Graphing", "Either"], correctAnswer: 0, explanation: "y already isolated." },
      ],
    },
  ],

  "y10-simult-applications": [
    {
      title: "Modelling with Simultaneous Equations",
      explanation:
        "OVERVIEW. Many real-world situations involve TWO unknowns linked by TWO conditions: ticket sales, mixtures, distance/speed, and pricing.\n\nMETHOD.\n  1. Identify the two unknowns; assign variables.\n  2. Translate each condition into an equation.\n  3. Solve using substitution or elimination.\n  4. Interpret the solution in context.",
      keyPoints: ["TWO unknowns require TWO equations", "Define variables explicitly", "Interpret in context"],
      workedExamples: [
        { problem: "Adult tickets cost $12, child tickets $8. 100 tickets sold for $1040. Find the number of each.",
          steps: ["Let a = adults, c = children", "a + c = 100", "12a + 8c = 1040", "From eq1: c = 100 − a", "12a + 8(100 − a) = 1040 → 4a = 240 → a = 60, c = 40"],
          answer: "60 adults, 40 children" },
        { problem: "A rectangular garden has perimeter 30 m. Length is 3 m more than width. Find dimensions.",
          steps: ["2L + 2W = 30; L = W + 3", "2(W+3) + 2W = 30 → 4W = 24 → W = 6", "L = 9"],
          answer: "6 m by 9 m" },
      ],
      tips: ["Always state your variable definitions before any equations."],
      commonErrors: ["Mixing up variables (assigning to the wrong quantity)", "Not converting all units consistently"],
      summary: ["EXAM INSIGHT: Modelling questions worth 3–5 marks; setup earns up to half the marks even if arithmetic falters."],
      practice: [
        { question: "Two numbers differ by 10. Sum is 50. Find them.", answer: "20 and 30" },
        { question: "5 pens and 3 pencils cost $19. 2 pens and 4 pencils cost $12. Cost of each?", answer: "Pen $3.07, pencil $1.43" },
      ],
      quiz: [
        { question: "If 2 apples + 1 banana = $3 and 1 apple + 1 banana = $2, what is one apple?", options: ["$1", "$2", "$0.50", "$1.50"], correctAnswer: 0, explanation: "Subtract: 1 apple = $1." },
      ],
    },
    {
      title: "Mixture and Rate Problems",
      explanation:
        "Mixture problems combine two quantities with different concentrations or unit prices. Rate problems involve speed × time = distance with two unknowns.",
      keyPoints: ["Use unit price × quantity = total cost", "Speed × time = distance", "Two equations from two conditions"],
      workedExamples: [
        { problem: "A chemist mixes a 30% solution with a 60% solution to get 12 L of 50% solution. How many litres of each?",
          steps: ["Let x L of 30% and y L of 60%", "x + y = 12", "0.30x + 0.60y = 0.50(12) = 6", "From eq1: x = 12 − y", "0.30(12−y) + 0.6y = 6 → 0.3y = 2.4 → y = 8, x = 4"],
          answer: "4 L of 30%, 8 L of 60%" },
      ],
      tips: ["Multiply percentage equations through by 10 or 100 to clear decimals before solving."],
      commonErrors: ["Forgetting to multiply percentage by quantity to get the amount of substance"],
      summary: ["EXAM INSIGHT: Mixture problems are common in chemistry and finance contexts."],
      practice: [
        { question: "200 g of coffee at $20/kg is mixed with another at $30/kg to get a blend at $24/kg. How much of each?", answer: "120 g cheaper, 80 g pricier" },
      ],
      quiz: [
        { question: "Distance = ?", options: ["speed + time", "speed × time", "speed / time", "time / speed"], correctAnswer: 1, explanation: "d = v · t." },
      ],
    },
    {
      title: "Geometric and Number Applications",
      explanation:
        "Many geometric problems give two facts (e.g. perimeter and a relationship between sides). Number problems involve digits, age comparisons, or consecutive integers.",
      keyPoints: ["Use known geometric formulas", "Express age 'k years ago' as (current − k)", "Two-digit number = 10·tens + units"],
      workedExamples: [
        { problem: "Sara is twice as old as Tom. In 5 years, the sum of their ages will be 40. Find their current ages.",
          steps: ["Let Tom = t, Sara = 2t", "(t+5) + (2t+5) = 40 → 3t = 30 → t = 10", "Sara = 20"],
          answer: "Tom 10, Sara 20" },
      ],
      tips: ["For two-digit number questions, write the number as 10a + b where a is tens digit and b is units digit."],
      commonErrors: ["Using the same variable for two different age points"],
      summary: ["EXAM INSIGHT: Geometric and age problems test setup precision."],
      practice: [
        { question: "Perimeter of rectangle is 42 cm and length is 3 cm more than width. Find dimensions.", answer: "9 cm × 12 cm" },
      ],
      quiz: [
        { question: "Two consecutive integers sum to 47. The smaller is:", options: ["22", "23", "24", "25"], correctAnswer: 1, explanation: "x + (x+1) = 47 → x = 23." },
      ],
    },
  ],

  "y10-linear-complex-fractions": [
    {
      title: "Linear Equations with Complex Algebraic Fractions (10A)",
      explanation:
        "OVERVIEW. Some linear equations involve nested or two-term denominators such as (x − 1)/3 + 4/(x + 2) = … . The strategy is to multiply through by the LCD of all denominators (which now contain variables) and then solve.\n\nIMPORTANT — when a denominator contains a variable, NOTE the values of x that would make it zero (excluded values) and reject any solution equal to them.",
      keyPoints: ["Multiply by the LCD of ALL denominators", "Note excluded values BEFORE solving", "Reject any solution equal to an excluded value"],
      workedExamples: [
        { problem: "Solve (x + 2)/3 − (x − 1)/4 = 5/6.",
          steps: ["LCD = 12", "Multiply through by 12: 4(x+2) − 3(x−1) = 10", "4x + 8 − 3x + 3 = 10", "x + 11 = 10", "x = −1"],
          answer: "x = −1" },
        { problem: "Solve 2/(x − 3) = 5/(x + 1).",
          steps: ["Excluded: x ≠ 3 and x ≠ −1", "Cross-multiply: 2(x + 1) = 5(x − 3)", "2x + 2 = 5x − 15 → 17 = 3x → x = 17/3", "Not excluded, accept"],
          answer: "x = 17/3" },
        { problem: "Solve x/(x − 2) + 3 = 2/(x − 2).",
          steps: ["Excluded: x ≠ 2", "Multiply by (x − 2): x + 3(x − 2) = 2", "x + 3x − 6 = 2 → 4x = 8 → x = 2", "Excluded → REJECT", "No solution"],
          answer: "No solution" },
      ],
      tips: ["List excluded values FIRST so you remember to check at the end."],
      commonErrors: [
        "Accepting an excluded value as a solution",
        "Forgetting to bracket multi-term numerators when multiplying through",
      ],
      summary: ["EXAM INSIGHT: Watch for the 'no solution' trap — the algebra produces a number, but the number is excluded."],
      practice: [
        { question: "Solve (x − 1)/2 + (x + 3)/5 = 4.", answer: "x = 31/7" },
        { question: "Solve 3/(x + 1) = 4/(x − 2).", answer: "x = −10" },
        { question: "Solve x/(x − 4) = 4/(x − 4) + 1.", answer: "No solution (x = 4 excluded)" },
      ],
      quiz: [
        { question: "Excluded values for 1/(x − 5):", options: ["x = 5", "x = −5", "x = 0", "None"], correctAnswer: 0, explanation: "Denominator zero at x = 5." },
        { question: "Multiply (x + 2)/3 = 4 by 3:", options: ["x + 2 = 12", "x + 6 = 12", "x = 12", "3x + 2 = 12"], correctAnswer: 0, explanation: "LHS becomes x + 2; RHS becomes 12." },
        { question: "Cross-multiply 2/(x+1) = 3/x:", options: ["2x = 3(x+1)", "2x = 3x + 1", "2 = 3x + 1", "x = 3"], correctAnswer: 0, explanation: "Cross-multiplication gives 2x = 3(x+1)." },
      ],
    },
  ],
};
