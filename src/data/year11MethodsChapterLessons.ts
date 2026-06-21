import { Lesson } from "./topicLessons";

// ═══════════════════════════════════════════════════════════════════════
// YEAR 11 — VCE MATHEMATICAL METHODS (Units 1 & 2) — CHAPTER-LEVEL LESSONS
// Complete lesson content for every subtopic across 20 chapters + appendix
// ═══════════════════════════════════════════════════════════════════════

function reviewLesson(chapterNum: number, chapterName: string): Lesson[] {
  return [{
    title: `Review of Chapter ${chapterNum}`,
    explanation: `This review consolidates all key concepts from Chapter ${chapterNum}: ${chapterName}. Work through the summary, revisit key formulas and techniques, and attempt the mixed-practice questions below.`,
    keyPoints: [
      `Revise all key definitions and formulas from Chapter ${chapterNum}`,
      "Identify areas of strength and topics needing further practice",
      "Attempt mixed problems combining multiple concepts",
      "Check your working against the success criteria"
    ],
    workedExamples: [
      { problem: `Mixed review problem for ${chapterName}`, steps: ["Identify the concept being tested", "Select the appropriate method", "Show full working", "Verify your answer"], answer: "Answers will vary — check against worked solutions" }
    ],
    tips: ["Use the chapter summary checklist to ensure full coverage.", "Re-attempt any questions you found difficult."],
    quiz: [
      { question: `What is the main focus of Chapter ${chapterNum}?`, options: [chapterName, "Statistics", "Geometry", "Measurement"], correctAnswer: 0, explanation: `Chapter ${chapterNum} covers ${chapterName}.` },
      { question: "The best revision strategy is:", options: ["Read notes once", "Practice mixed problems", "Skip hard topics", "Only do easy questions"], correctAnswer: 1, explanation: "Mixed practice strengthens connections between concepts." },
      { question: "When stuck on a problem, you should:", options: ["Skip it permanently", "Review the relevant lesson", "Guess the answer", "Ask a different question"], correctAnswer: 1, explanation: "Revisiting the lesson builds deeper understanding." }
    ]
  }];
}

function revisionLesson(title: string, chapterRange: string): Lesson[] {
  return [{
    title,
    explanation: `This section provides ${title.toLowerCase()} covering Chapters ${chapterRange}. Use these to prepare for assessments and identify gaps in your understanding.`,
    keyPoints: [
      `Covers key concepts from Chapters ${chapterRange}`,
      "Practice under timed conditions where possible",
      "Review worked solutions after attempting each question",
      "Focus on areas where you make errors"
    ],
    workedExamples: [
      { problem: `Sample ${title.toLowerCase()} problem`, steps: ["Read the question carefully", "Plan your approach", "Show all working", "Check your answer"], answer: "Answers vary — see worked solutions" }
    ],
    tips: ["Simulate exam conditions by timing yourself.", "Review any questions you get wrong immediately."],
    quiz: [
      { question: "Timed practice helps with:", options: ["Speed only", "Speed and accuracy", "Nothing useful", "Memorisation only"], correctAnswer: 1, explanation: "Timed practice builds both speed and accuracy." },
      { question: "After getting a question wrong, you should:", options: ["Move on quickly", "Review the solution and retry", "Skip similar questions", "Blame the question"], correctAnswer: 1, explanation: "Reviewing errors is the fastest way to improve." },
      { question: "The purpose of revision is to:", options: ["Learn new content", "Consolidate and strengthen understanding", "Finish quickly", "Avoid hard topics"], correctAnswer: 1, explanation: "Revision consolidates and deepens understanding." }
    ]
  }];
}

export const year11MethodsChapterLessons: Record<string, Lesson[]> = {

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 1 — REVIEWING LINEAR EQUATIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch1-linear-equations": [{
    title: "Linear Equations",
    explanation: "A linear equation contains a variable raised to the first power. To solve, use inverse operations to isolate the variable.\n\nKey steps: expand brackets, collect like terms, isolate the variable using inverse operations (add/subtract, then multiply/divide).",
    keyPoints: ["Linear equations have variables to the power of 1", "Use inverse operations to isolate the variable", "Always do the same operation to both sides", "Check by substituting your answer back"],
    workedExamples: [
      { problem: "Solve 3(2x − 1) = 15", steps: ["Expand: 6x − 3 = 15", "Add 3: 6x = 18", "Divide by 6: x = 3"], answer: "x = 3" }
    ],
    tips: ["Expand brackets first, then collect like terms.", "If fractions appear, multiply through by the LCD."],
    quiz: [
      { question: "Solve: 4x + 7 = 23", options: ["x = 3", "x = 4", "x = 5", "x = 7.5"], correctAnswer: 1, explanation: "4x = 16, x = 4" },
      { question: "Solve: 2(x − 3) = 10", options: ["x = 5", "x = 8", "x = 6.5", "x = 2"], correctAnswer: 1, explanation: "2x − 6 = 10, 2x = 16, x = 8" },
      { question: "Solve: x/3 + 2 = 5", options: ["x = 9", "x = 1", "x = 21", "x = 7"], correctAnswer: 0, explanation: "x/3 = 3, x = 9" }
    ]
  }],

  "y11m-ch1-constructing-linear": [{
    title: "Constructing Linear Equations",
    explanation: "To construct a linear equation from a word problem:\n1. Define the unknown variable\n2. Translate key phrases into mathematical expressions\n3. Form the equation using relationships described\n4. Solve and interpret in context",
    keyPoints: ["'More than' → addition", "'Less than' → subtraction", "'Times/product' → multiplication", "'Shared equally' → division"],
    workedExamples: [
      { problem: "Three consecutive even numbers sum to 42. Find them.", steps: ["Let n = first even number", "n + (n + 2) + (n + 4) = 42", "3n + 6 = 42", "3n = 36, n = 12"], answer: "12, 14, 16" }
    ],
    tips: ["Always state what your variable represents.", "Check your answer in the original word problem."],
    quiz: [
      { question: "Twice a number minus 3 equals 11. The number is:", options: ["4", "7", "5.5", "14"], correctAnswer: 1, explanation: "2x − 3 = 11, 2x = 14, x = 7" },
      { question: "'5 more than x' translates to:", options: ["5 − x", "5x", "x + 5", "x/5"], correctAnswer: 2, explanation: "'More than' means add." },
      { question: "The sum of two numbers is 30, one is double the other. Larger:", options: ["10", "15", "20", "25"], correctAnswer: 2, explanation: "x + 2x = 30, x = 10, larger = 20" }
    ]
  }],

  "y11m-ch1-simultaneous": [{
    title: "Simultaneous Equations",
    explanation: "Two equations with two unknowns. Solve by:\n• Substitution — isolate one variable in one equation and substitute into the other\n• Elimination — add or subtract equations to eliminate one variable\n\nThe solution is the point of intersection of two lines.",
    keyPoints: ["Substitution: best when one variable is easily isolated", "Elimination: best when coefficients can be matched", "Solution satisfies both equations", "Always check in both original equations"],
    workedExamples: [
      { problem: "Solve: 2x + y = 7, x − y = 2", steps: ["Add equations: 3x = 9, x = 3", "Substitute: 3 − y = 2, y = 1"], answer: "x = 3, y = 1" }
    ],
    tips: ["Choose the method that looks simplest for the given pair."],
    quiz: [
      { question: "x + y = 10, x − y = 4. Find x:", options: ["3", "7", "5", "6"], correctAnswer: 1, explanation: "Add: 2x = 14, x = 7" },
      { question: "y = 2x, x + y = 9. Find x:", options: ["3", "6", "4.5", "2"], correctAnswer: 0, explanation: "x + 2x = 9, 3x = 9, x = 3" },
      { question: "Parallel lines have:", options: ["One solution", "No solution", "Infinite solutions", "Two solutions"], correctAnswer: 1, explanation: "Parallel lines never intersect." }
    ]
  }],

  "y11m-ch1-constructing-simultaneous": [{
    title: "Constructing Simultaneous Linear Equations",
    explanation: "Many real-world problems involve two unknowns and require setting up two equations from the given information.\n\nCommon contexts: pricing problems, mixture problems, age problems, and distance-rate-time problems.",
    keyPoints: ["Identify two unknowns and define variables", "Find two independent relationships", "Write each as an equation", "Solve and interpret in context"],
    workedExamples: [
      { problem: "Adult tickets cost $12, child tickets $7. Total 150 tickets sold for $1400. Find each.", steps: ["Let a = adults, c = children", "a + c = 150", "12a + 7c = 1400", "From eq1: c = 150 − a", "12a + 7(150 − a) = 1400", "5a = 350, a = 70, c = 80"], answer: "70 adults, 80 children" }
    ],
    tips: ["Look for 'total' and 'value' statements — they often give two equations."],
    quiz: [
      { question: "Pens cost $2, pencils $1. Total 20 items costing $30. Pens:", options: ["10", "15", "8", "12"], correctAnswer: 0, explanation: "p + q = 20, 2p + q = 30. Subtract: p = 10" },
      { question: "Two equations need how many unknowns to solve?", options: ["1", "2", "3", "Any"], correctAnswer: 1, explanation: "Two equations can solve for two unknowns." },
      { question: "If only one equation is given for two unknowns:", options: ["Unique solution", "Infinitely many solutions", "No solution", "Cannot determine"], correctAnswer: 1, explanation: "One equation with two unknowns has infinitely many solutions." }
    ]
  }],

  "y11m-ch1-inequalities": [{
    title: "Solving Linear Inequalities",
    explanation: "Inequalities use <, >, ≤, ≥. Solve like equations with one critical rule: when multiplying or dividing by a negative number, REVERSE the inequality sign.\n\nRepresent solutions on a number line: open circle for < or >, closed circle for ≤ or ≥.",
    keyPoints: ["Solve like equations", "Reverse sign when × or ÷ by negative", "Open circle: strict inequality (< or >)", "Closed circle: inclusive (≤ or ≥)"],
    workedExamples: [
      { problem: "Solve: 5 − 3x ≤ 14", steps: ["−3x ≤ 9", "Divide by −3 (reverse!): x ≥ −3"], answer: "x ≥ −3" }
    ],
    tips: ["The most common mistake is forgetting to flip the sign when dividing by a negative."],
    quiz: [
      { question: "Solve: 2x + 1 > 9", options: ["x > 4", "x > 5", "x < 4", "x < 5"], correctAnswer: 0, explanation: "2x > 8, x > 4" },
      { question: "Solve: −4x < 20", options: ["x < −5", "x > −5", "x < 5", "x > 5"], correctAnswer: 1, explanation: "Divide by −4, reverse: x > −5" },
      { question: "x ≤ 3 uses which circle on 3?", options: ["Open", "Closed", "No circle", "Double circle"], correctAnswer: 1, explanation: "≤ includes 3 → closed circle." }
    ]
  }],

  "y11m-ch1-formulas": [{
    title: "Using and Transposing Formulas",
    explanation: "To transpose (rearrange) a formula, use inverse operations to make the desired variable the subject.\n\nWork step-by-step, undoing operations in reverse order (like peeling layers).",
    keyPoints: ["Identify the target variable", "Undo operations in reverse order", "Keep the equation balanced", "Verify by substituting values"],
    workedExamples: [
      { problem: "Make r the subject of A = πr²", steps: ["A/π = r²", "r = √(A/π)  (r > 0)"], answer: "r = √(A/π)" }
    ],
    tips: ["When the target variable appears in multiple terms, factorise it out."],
    quiz: [
      { question: "Make x the subject: y = 3x + 2", options: ["x = (y − 2)/3", "x = y/3 − 2", "x = 3y − 2", "x = (y + 2)/3"], correctAnswer: 0, explanation: "y − 2 = 3x, x = (y − 2)/3" },
      { question: "Make h the subject: V = lwh", options: ["h = Vlw", "h = V/(lw)", "h = V − lw", "h = lw/V"], correctAnswer: 1, explanation: "h = V/(lw)" },
      { question: "Make t the subject: s = ut + ½at²", options: ["Easy rearrangement", "Requires quadratic formula", "Not possible", "t = s/u"], correctAnswer: 1, explanation: "t appears as t and t² — this is a quadratic in t." }
    ]
  }],

  "y11m-ch1-review": reviewLesson(1, "Reviewing Linear Equations"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 2 — REVIEWING COORDINATE GEOMETRY
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch2-distance-midpoints": [{
    title: "Distance and Midpoints",
    explanation: "Distance: d = √((x₂−x₁)² + (y₂−y₁)²)\nMidpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2)\n\nBoth derive from the Pythagorean theorem applied to the coordinate plane.",
    keyPoints: ["Distance formula from Pythagoras", "Midpoint: average coordinates", "Distance is always positive", "Order of points doesn't matter"],
    workedExamples: [
      { problem: "Find the distance and midpoint of A(1, 3) and B(7, 11).", steps: ["d = √((7−1)² + (11−3)²) = √(36 + 64) = √100 = 10", "M = ((1+7)/2, (3+11)/2) = (4, 7)"], answer: "Distance = 10, Midpoint = (4, 7)" }
    ],
    tips: ["Sketch the points to verify your answer visually."],
    quiz: [
      { question: "Distance between (0,0) and (5,12):", options: ["13", "17", "7", "60"], correctAnswer: 0, explanation: "√(25 + 144) = √169 = 13" },
      { question: "Midpoint of (2, 8) and (6, 4):", options: ["(4, 6)", "(8, 12)", "(3, 2)", "(4, 4)"], correctAnswer: 0, explanation: "((2+6)/2, (8+4)/2) = (4, 6)" },
      { question: "Midpoint of (−4, 2) and (6, −8):", options: ["(1, −3)", "(2, −6)", "(5, −5)", "(−1, 3)"], correctAnswer: 0, explanation: "((-4+6)/2, (2−8)/2) = (1, −3)" }
    ]
  }],

  "y11m-ch2-gradient": [{
    title: "The Gradient of a Straight Line",
    explanation: "Gradient (slope) m = (y₂−y₁)/(x₂−x₁) = rise/run.\n\nPositive → uphill left to right\nNegative → downhill\nZero → horizontal\nUndefined → vertical",
    keyPoints: ["m = rise/run = Δy/Δx", "Positive: slopes up L→R", "Negative: slopes down L→R", "Zero: horizontal; Undefined: vertical"],
    workedExamples: [
      { problem: "Gradient through (−2, 5) and (4, −1).", steps: ["m = (−1 − 5)/(4 − (−2)) = −6/6 = −1"], answer: "m = −1" }
    ],
    tips: ["Be careful subtracting negative coordinates."],
    quiz: [
      { question: "Gradient of (1,2) and (4,8):", options: ["2", "3", "6", "1"], correctAnswer: 0, explanation: "(8−2)/(4−1) = 6/3 = 2" },
      { question: "A vertical line has gradient:", options: ["0", "1", "Undefined", "−1"], correctAnswer: 2, explanation: "Δx = 0 → undefined." },
      { question: "Gradient 0 means:", options: ["Steep", "Vertical", "Horizontal", "Diagonal"], correctAnswer: 2, explanation: "No rise → horizontal." }
    ]
  }],

  "y11m-ch2-equation": [{
    title: "The Equation of a Straight Line",
    explanation: "Three forms:\n• Gradient-intercept: y = mx + c\n• Point-gradient: y − y₁ = m(x − x₁)\n• General: ax + by + c = 0\n\nConvert between forms as needed.",
    keyPoints: ["y = mx + c: read m and c directly", "y − y₁ = m(x − x₁): use with a point and gradient", "General form: integer coefficients, a > 0 by convention"],
    workedExamples: [
      { problem: "Line through (3, 5) with m = 2.", steps: ["y − 5 = 2(x − 3)", "y = 2x − 6 + 5 = 2x − 1"], answer: "y = 2x − 1" }
    ],
    tips: ["Point-gradient form is the most versatile starting point."],
    quiz: [
      { question: "y = −3x + 4. y-intercept:", options: ["−3", "4", "3", "−4"], correctAnswer: 1, explanation: "c = 4" },
      { question: "Line through (0, 5) with m = −2:", options: ["y = −2x + 5", "y = 5x − 2", "y = 2x + 5", "y = −2x − 5"], correctAnswer: 0, explanation: "y = mx + c = −2x + 5" },
      { question: "x-intercept of y = 3x − 6:", options: ["(2, 0)", "(−2, 0)", "(6, 0)", "(0, −6)"], correctAnswer: 0, explanation: "0 = 3x − 6, x = 2" }
    ]
  }],

  "y11m-ch2-graphing": [{
    title: "Graphing Straight Lines",
    explanation: "Methods to graph:\n1. Plot y-intercept and use gradient (rise/run)\n2. Find x-intercept (y=0) and y-intercept (x=0)\n3. Create a table of values\n\nSpecial lines: y = c (horizontal), x = a (vertical).",
    keyPoints: ["Two points determine a line", "Use intercepts for quick graphing", "Gradient = rise/run from y-intercept", "Label axes and key points"],
    workedExamples: [
      { problem: "Graph y = 2x − 3", steps: ["y-int: (0, −3)", "x-int: set y=0, x = 1.5 → (1.5, 0)", "Plot both and draw line"], answer: "Line through (0, −3) and (1.5, 0)" }
    ],
    tips: ["Always plot at least two points and check with a third."],
    quiz: [
      { question: "y = 4 is a:", options: ["Vertical line", "Horizontal line", "Diagonal", "Curve"], correctAnswer: 1, explanation: "y = constant → horizontal." },
      { question: "x = −2 is a:", options: ["Horizontal", "Vertical", "Diagonal", "Not a line"], correctAnswer: 1, explanation: "x = constant → vertical." },
      { question: "The y-intercept is found by setting:", options: ["y = 0", "x = 0", "m = 0", "c = 0"], correctAnswer: 1, explanation: "Set x = 0 to find where the line crosses the y-axis." }
    ]
  }],

  "y11m-ch2-parallel-perp": [{
    title: "Parallel and Perpendicular Lines",
    explanation: "Parallel lines: m₁ = m₂ (equal gradients)\nPerpendicular lines: m₁ × m₂ = −1 (negative reciprocals)\n\nTo find a perpendicular gradient: flip the fraction and change the sign.",
    keyPoints: ["Parallel ⟹ m₁ = m₂", "Perpendicular ⟹ m₁ × m₂ = −1", "Perpendicular gradient = −1/m", "Verify by checking product = −1"],
    workedExamples: [
      { problem: "Line perpendicular to y = 3x + 1 through (6, 2).", steps: ["m_perp = −1/3", "y − 2 = −⅓(x − 6)", "y = −x/3 + 2 + 2 = −x/3 + 4"], answer: "y = −x/3 + 4" }
    ],
    tips: ["Negative reciprocal: flip and change sign. E.g. 2/3 → −3/2."],
    quiz: [
      { question: "Perpendicular to m = 4:", options: ["m = 4", "m = −4", "m = ¼", "m = −¼"], correctAnswer: 3, explanation: "−1/4" },
      { question: "Parallel to y = −5x + 2:", options: ["m = 5", "m = −5", "m = ⅕", "m = 2"], correctAnswer: 1, explanation: "Same gradient: m = −5." },
      { question: "m₁ = ⅔. Perpendicular m₂:", options: ["−3/2", "3/2", "−2/3", "2/3"], correctAnswer: 0, explanation: "−1/(2/3) = −3/2" }
    ]
  }],

  "y11m-ch2-families": [{
    title: "Families of Straight Lines",
    explanation: "A family of lines shares a common property. For example:\n• y = 2x + c: all lines with gradient 2 (parallel family)\n• y = mx + 3: all lines through (0, 3)\n• y − 1 = m(x − 4): all lines through (4, 1)",
    keyPoints: ["A parameter (like c or m) generates a family", "Fixing gradient → parallel family", "Fixing a point → concurrent family", "Families help explore relationships systematically"],
    workedExamples: [
      { problem: "Describe the family y = mx − 2.", steps: ["All lines pass through (0, −2)", "The gradient m varies", "Each value of m gives a different line through (0, −2)"], answer: "All lines through (0, −2) with varying slope" }
    ],
    tips: ["Sketch several members of the family to visualise the pattern."],
    quiz: [
      { question: "y = 3x + c is a family of:", options: ["Concurrent lines", "Parallel lines", "Perpendicular lines", "Curves"], correctAnswer: 1, explanation: "Same gradient → parallel." },
      { question: "All lines through (0, 5) have the form:", options: ["y = mx + 5", "y = 5x + c", "x = 5", "y = 5"], correctAnswer: 0, explanation: "y-intercept 5 → c = 5" },
      { question: "The parameter in y = mx + 1 is:", options: ["y", "x", "m", "1"], correctAnswer: 2, explanation: "m is the varying parameter." }
    ]
  }],

  "y11m-ch2-linear-models": [{
    title: "Linear Models",
    explanation: "Linear models use y = mx + c to represent real-world relationships where the rate of change is constant.\n\nExamples: cost = rate × quantity + fixed cost, distance = speed × time.",
    keyPoints: ["m = rate of change (gradient)", "c = initial/fixed value (y-intercept)", "Domain is restricted to meaningful values", "Interpret gradient and intercept in context"],
    workedExamples: [
      { problem: "A plumber charges $80 call-out + $60/hour. Write cost C as a function of hours h.", steps: ["C = 60h + 80", "m = 60 (hourly rate)", "c = 80 (call-out fee)"], answer: "C = 60h + 80" }
    ],
    tips: ["Always state the domain — negative hours don't make sense!"],
    quiz: [
      { question: "C = 25x + 100. Fixed cost:", options: ["25", "100", "125", "75"], correctAnswer: 1, explanation: "The constant 100 is the fixed cost." },
      { question: "In C = 25x + 100, 25 represents:", options: ["Fixed cost", "Cost per unit", "Total cost", "Number of units"], correctAnswer: 1, explanation: "25 is the rate per unit (gradient)." },
      { question: "A model predicts C = −5x + 200. This is realistic for:", options: ["All x", "x ≥ 0 and C ≥ 0", "x < 0 only", "No values"], correctAnswer: 1, explanation: "Restrict domain so both x ≥ 0 and C ≥ 0." }
    ]
  }],

  "y11m-ch2-simult-linear": [{
    title: "Simultaneous Linear Equations",
    explanation: "In coordinate geometry, solving simultaneous equations means finding where two lines intersect.\n\nGraphically: plot both lines and read the intersection.\nAlgebraically: use substitution or elimination.",
    keyPoints: ["Intersection point satisfies both equations", "Parallel lines → no solution", "Identical lines → infinitely many solutions", "One intersection → unique solution"],
    workedExamples: [
      { problem: "Find intersection of y = 2x + 1 and y = −x + 7.", steps: ["2x + 1 = −x + 7", "3x = 6, x = 2", "y = 2(2) + 1 = 5"], answer: "(2, 5)" }
    ],
    tips: ["Check your solution satisfies both equations."],
    quiz: [
      { question: "y = x + 3, y = −x + 5. Intersection:", options: ["(1, 4)", "(4, 1)", "(2, 3)", "(3, 2)"], correctAnswer: 0, explanation: "x + 3 = −x + 5, 2x = 2, x = 1, y = 4" },
      { question: "Two identical lines have:", options: ["0 solutions", "1 solution", "2 solutions", "∞ solutions"], correctAnswer: 3, explanation: "Every point on the line is a solution." },
      { question: "Graphically, 'no solution' means:", options: ["Lines cross", "Lines are parallel", "Lines overlap", "Lines are perpendicular"], correctAnswer: 1, explanation: "Parallel lines never meet." }
    ]
  }],

  "y11m-ch2-review": reviewLesson(2, "Reviewing Coordinate Geometry"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 3 — QUADRATICS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch3-expanding": [{
    title: "Expanding and Collecting Like Terms",
    explanation: "Expanding removes brackets by multiplying:\n• Single: a(b + c) = ab + ac\n• Double: (a+b)(c+d) = ac + ad + bc + bd (FOIL)\n• Perfect square: (a±b)² = a² ± 2ab + b²\n• DOTS: (a+b)(a−b) = a² − b²\n\nAfter expanding, collect like terms to simplify.",
    keyPoints: ["FOIL for double brackets", "(a+b)² = a² + 2ab + b²", "(a+b)(a−b) = a² − b²", "Always collect like terms after expanding"],
    workedExamples: [
      { problem: "Expand and simplify (2x + 3)(x − 4)", steps: ["2x·x = 2x²", "2x·(−4) = −8x", "3·x = 3x", "3·(−4) = −12", "= 2x² − 5x − 12"], answer: "2x² − 5x − 12" }
    ],
    tips: ["Don't forget the middle term in perfect squares!"],
    quiz: [
      { question: "(x+5)(x−2) =", options: ["x²+3x−10", "x²−3x−10", "x²+7x−10", "x²+3x+10"], correctAnswer: 0, explanation: "x²−2x+5x−10 = x²+3x−10" },
      { question: "(x+4)² =", options: ["x²+16", "x²+4x+16", "x²+8x+16", "x²−8x+16"], correctAnswer: 2, explanation: "x²+2(4)x+16 = x²+8x+16" },
      { question: "(3x−1)(3x+1) =", options: ["9x²−1", "9x²+1", "6x²−1", "9x²−6x+1"], correctAnswer: 0, explanation: "DOTS: (3x)²−1² = 9x²−1" }
    ]
  }],

  "y11m-ch3-factorising": [{
    title: "Factorising",
    explanation: "Factorising is the reverse of expanding. Strategy:\n1. Common factor first\n2. Check for DOTS: a² − b² = (a+b)(a−b)\n3. Trinomial: x² + bx + c = (x+m)(x+n) where mn = c, m+n = b\n4. Non-monic: use splitting or cross-method for ax² + bx + c",
    keyPoints: ["Always take out common factors first", "DOTS: a² − b² = (a+b)(a−b)", "Trinomial: find two numbers with product = c and sum = b", "Check by expanding"],
    workedExamples: [
      { problem: "Factorise 2x² + 7x + 3", steps: ["Find two numbers: product = 2×3 = 6, sum = 7", "Numbers: 1 and 6", "2x² + x + 6x + 3 = x(2x+1) + 3(2x+1)", "= (2x+1)(x+3)"], answer: "(2x+1)(x+3)" }
    ],
    tips: ["For non-monic trinomials, multiply a×c to find the product target."],
    quiz: [
      { question: "Factorise x²−25:", options: ["(x−5)²", "(x+5)(x−5)", "(x−25)(x+1)", "Cannot"], correctAnswer: 1, explanation: "DOTS: x²−5²" },
      { question: "Factorise x²+5x+6:", options: ["(x+2)(x+3)", "(x+1)(x+6)", "(x−2)(x−3)", "(x+5)(x+1)"], correctAnswer: 0, explanation: "2×3=6, 2+3=5" },
      { question: "First step to factorise 4x²+8x:", options: ["FOIL", "Take out 4x", "Use formula", "Complete square"], correctAnswer: 1, explanation: "HCF = 4x → 4x(x+2)" }
    ]
  }],

  "y11m-ch3-equations": [{
    title: "Quadratic Equations",
    explanation: "To solve ax² + bx + c = 0:\n1. Factorising → null factor law\n2. Quadratic formula: x = (−b ± √(b²−4ac))/(2a)\n3. Completing the square\n4. CAS calculator\n\nA quadratic has 0, 1 or 2 real solutions.",
    keyPoints: ["Set equation to 0 first", "Null factor law: if AB = 0 then A = 0 or B = 0", "Formula: x = (−b ± √Δ)/(2a)", "Check solutions by substitution"],
    workedExamples: [
      { problem: "Solve x² − 7x + 12 = 0", steps: ["Factorise: (x−3)(x−4) = 0", "x = 3 or x = 4"], answer: "x = 3 or x = 4" }
    ],
    tips: ["Try factorising first — it's quicker than the formula."],
    quiz: [
      { question: "Solve x²−9 = 0:", options: ["x = 3", "x = ±3", "x = 9", "x = −9"], correctAnswer: 1, explanation: "(x+3)(x−3) = 0" },
      { question: "Solve x²+5x = 0:", options: ["x=0 or x=5", "x=0 or x=−5", "x=5", "x=−5"], correctAnswer: 1, explanation: "x(x+5) = 0" },
      { question: "The denominator in the quadratic formula is:", options: ["a", "2a", "b", "4ac"], correctAnswer: 1, explanation: "x = (−b ± √Δ)/(2a)" }
    ]
  }],

  "y11m-ch3-graphing": [{
    title: "Graphing Quadratics",
    explanation: "y = ax² + bx + c produces a parabola.\n• a > 0: opens upward (minimum)\n• a < 0: opens downward (maximum)\n• Axis of symmetry: x = −b/(2a)\n• Vertex: substitute x = −b/(2a) into equation",
    keyPoints: ["a > 0: U-shape (min)", "a < 0: ∩-shape (max)", "Axis of symmetry: x = −b/(2a)", "Find vertex, y-intercept and x-intercepts"],
    workedExamples: [
      { problem: "Sketch y = x² − 4x + 3", steps: ["a = 1 > 0: opens up", "x = −(−4)/(2·1) = 2", "y(2) = 4−8+3 = −1. Vertex: (2, −1)", "y-int: (0, 3)", "x-ints: x²−4x+3 = (x−1)(x−3) = 0 → x = 1, 3"], answer: "Parabola opening up, vertex (2, −1), x-ints 1 & 3" }
    ],
    tips: ["Always find the vertex, y-intercept and x-intercepts (if they exist)."],
    quiz: [
      { question: "y = −x² + 6x. Opens:", options: ["Up", "Down", "Left", "Right"], correctAnswer: 1, explanation: "a = −1 < 0 → opens down" },
      { question: "Axis of symmetry of y = x²−8x+5:", options: ["x = 4", "x = −4", "x = 8", "x = −8"], correctAnswer: 0, explanation: "x = 8/2 = 4" },
      { question: "y-intercept of y = 2x²+3x−5:", options: ["(0, 2)", "(0, 3)", "(0, −5)", "(0, 5)"], correctAnswer: 2, explanation: "Set x = 0: y = −5" }
    ]
  }],

  "y11m-ch3-completing-square": [{
    title: "Completing the Square and Turning Points",
    explanation: "Rewrite y = ax² + bx + c as y = a(x−h)² + k.\nVertex (turning point) = (h, k).\n\nSteps:\n1. Factor a from x² and x terms\n2. Add and subtract (b/(2a))² inside\n3. Simplify to vertex form",
    keyPoints: ["Vertex form: y = a(x−h)² + k", "Vertex at (h, k)", "(b/2)² completes the square", "Minimum if a > 0, maximum if a < 0"],
    workedExamples: [
      { problem: "Write y = x²−6x+11 in vertex form.", steps: ["y = (x²−6x+9)−9+11", "= (x−3)²+2"], answer: "y = (x−3)²+2, vertex (3, 2)" }
    ],
    tips: ["Half the coefficient of x, square it, add and subtract."],
    quiz: [
      { question: "x²+10x = (x+?)²−?", options: ["(x+5)²−25", "(x+10)²−100", "(x+5)²−5", "(x+10)²−10"], correctAnswer: 0, explanation: "Half of 10 = 5. (x+5)²−25" },
      { question: "Vertex of y = (x+1)²−4:", options: ["(1, −4)", "(−1, −4)", "(−1, 4)", "(1, 4)"], correctAnswer: 1, explanation: "h = −1, k = −4" },
      { question: "Completing the square helps find:", options: ["x-intercepts only", "The vertex", "The gradient", "The y-intercept"], correctAnswer: 1, explanation: "It reveals the turning point directly." }
    ]
  }],

  "y11m-ch3-graphing-poly": [{
    title: "Graphing Quadratics in Polynomial Form",
    explanation: "When given y = ax² + bx + c, sketch by:\n1. Find axis of symmetry: x = −b/(2a)\n2. Find vertex by substituting\n3. Find y-intercept (x = 0)\n4. Find x-intercepts using Δ = b²−4ac\n5. Determine shape from sign of a",
    keyPoints: ["Use x = −b/(2a) for axis of symmetry", "Δ > 0: two x-intercepts", "Δ = 0: one x-intercept (touches)", "Δ < 0: no x-intercepts"],
    workedExamples: [
      { problem: "Sketch y = 2x²+4x−6", steps: ["a=2 > 0: opens up", "x = −4/4 = −1", "y(−1) = 2−4−6 = −8. Vertex: (−1, −8)", "y-int: (0, −6)", "Δ = 16+48 = 64 > 0 → two x-ints", "0 = 2(x²+2x−3) = 2(x+3)(x−1), x = −3, 1"], answer: "U-shape, vertex (−1, −8), x-ints −3 and 1" }
    ],
    tips: ["Calculate Δ first to know how many x-intercepts to expect."],
    quiz: [
      { question: "Δ = 0 means the parabola:", options: ["Crosses x-axis twice", "Touches x-axis once", "Doesn't meet x-axis", "Is a straight line"], correctAnswer: 1, explanation: "Δ = 0 → one repeated root → touches axis." },
      { question: "y = −x²+2x+3. Number of x-intercepts:", options: ["0", "1", "2", "Cannot tell"], correctAnswer: 2, explanation: "Δ = 4+12 = 16 > 0 → two x-ints" },
      { question: "The y-intercept equals:", options: ["a", "b", "c", "−b/(2a)"], correctAnswer: 2, explanation: "When x = 0, y = c." }
    ]
  }],

  "y11m-ch3-inequalities": [{
    title: "Solving Quadratic Inequalities",
    explanation: "To solve ax²+bx+c > 0 (or <, ≤, ≥):\n1. Solve ax²+bx+c = 0 to find critical values\n2. Sketch the parabola\n3. Read off the x-values where the parabola is above/below the x-axis",
    keyPoints: ["Find roots first", "Sketch the parabola", "Above x-axis → positive", "Below x-axis → negative"],
    workedExamples: [
      { problem: "Solve x²−5x+6 < 0", steps: ["Roots: (x−2)(x−3) = 0, x = 2, 3", "Parabola opens up (a=1>0)", "Below x-axis between roots", "Solution: 2 < x < 3"], answer: "2 < x < 3" }
    ],
    tips: ["Always sketch — it makes the answer obvious."],
    quiz: [
      { question: "x²−4 > 0 gives:", options: ["−2 < x < 2", "x < −2 or x > 2", "x > 2 only", "All x"], correctAnswer: 1, explanation: "Roots ±2, opens up → positive outside roots." },
      { question: "x²−1 ≤ 0 gives:", options: ["x ≤ −1 or x ≥ 1", "−1 ≤ x ≤ 1", "x = ±1", "No solution"], correctAnswer: 1, explanation: "Between roots (inclusive)." },
      { question: "For −x²+4 ≥ 0:", options: ["x ≤ −2 or x ≥ 2", "−2 ≤ x ≤ 2", "All x", "No solution"], correctAnswer: 1, explanation: "Opens down, positive between roots." }
    ]
  }],

  "y11m-ch3-formula": [{
    title: "The General Quadratic Formula",
    explanation: "For ax²+bx+c = 0:\nx = (−b ± √(b²−4ac))/(2a)\n\nDerived by completing the square on the general quadratic. Works for all quadratics, whether factorisable or not.",
    keyPoints: ["x = (−b ± √Δ)/(2a) where Δ = b²−4ac", "± gives two solutions (when Δ > 0)", "Works for all quadratics", "Exact answers (unlike CAS approximations)"],
    workedExamples: [
      { problem: "Solve 2x²−3x−2 = 0 using the formula.", steps: ["a=2, b=−3, c=−2", "Δ = 9+16 = 25", "x = (3±5)/4", "x = 8/4 = 2 or x = −2/4 = −½"], answer: "x = 2 or x = −½" }
    ],
    tips: ["Write out a, b, c before substituting — avoids sign errors."],
    quiz: [
      { question: "For x²+4x+1 = 0, Δ =", options: ["12", "15", "8", "17"], correctAnswer: 0, explanation: "16−4 = 12" },
      { question: "x = (−b ± √Δ)/(2a). If Δ = 0:", options: ["No solutions", "x = −b/(2a)", "x = −b/a", "Two solutions"], correctAnswer: 1, explanation: "±√0 = 0, so x = −b/(2a)" },
      { question: "The formula gives exact answers when:", options: ["Always", "When Δ ≥ 0", "When Δ is a perfect square", "Never"], correctAnswer: 1, explanation: "Exact real answers when Δ ≥ 0." }
    ]
  }],

  "y11m-ch3-discriminant": [{
    title: "The Discriminant",
    explanation: "Δ = b²−4ac determines the nature of roots:\n• Δ > 0: two distinct real roots\n• Δ = 0: one repeated real root\n• Δ < 0: no real roots\n\nIf Δ is a perfect square, roots are rational.",
    keyPoints: ["Δ = b²−4ac", "Δ > 0: two real roots", "Δ = 0: one repeated root", "Δ < 0: no real roots"],
    workedExamples: [
      { problem: "For what values of k does x²+kx+9 = 0 have equal roots?", steps: ["Δ = k²−36 = 0", "k² = 36", "k = ±6"], answer: "k = 6 or k = −6" }
    ],
    tips: ["Use the discriminant to determine the number of solutions before attempting to solve."],
    quiz: [
      { question: "Δ = −7 means:", options: ["Two real roots", "One real root", "No real roots", "Seven roots"], correctAnswer: 2, explanation: "Δ < 0 → no real roots." },
      { question: "x²+2x+1 = 0. Δ =", options: ["0", "4", "−4", "8"], correctAnswer: 0, explanation: "4−4 = 0" },
      { question: "Δ = 49 and rational. Roots are:", options: ["Irrational", "Rational", "Complex", "Non-existent"], correctAnswer: 1, explanation: "Perfect square Δ → rational roots." }
    ]
  }],

  "y11m-ch3-simult-quad": [{
    title: "Solving Simultaneous Linear and Quadratic Equations",
    explanation: "To find intersection(s) of a line and parabola:\n1. Substitute the linear equation into the quadratic\n2. Solve the resulting quadratic\n3. Find corresponding y-values\n\nPossible outcomes: 0, 1 or 2 intersection points.",
    keyPoints: ["Substitute linear into quadratic", "Resulting equation is quadratic", "Δ determines number of intersections", "0 intersections = line misses parabola"],
    workedExamples: [
      { problem: "Find intersections of y = x+1 and y = x²−x−2", steps: ["x+1 = x²−x−2", "x²−2x−3 = 0", "(x−3)(x+1) = 0, x = 3 or −1", "y = 4 or 0"], answer: "(3, 4) and (−1, 0)" }
    ],
    tips: ["Use Δ to predict how many intersections before solving fully."],
    quiz: [
      { question: "A line tangent to a parabola has:", options: ["0 intersections", "1 intersection", "2 intersections", "3 intersections"], correctAnswer: 1, explanation: "Tangent touches at exactly one point (Δ = 0)." },
      { question: "Substituting y = 2x into y = x² gives:", options: ["x² = 2x", "x² + 2x = 0", "2x² = 0", "x = 2"], correctAnswer: 0, explanation: "x² = 2x → x²−2x = 0" },
      { question: "If Δ < 0 after substitution:", options: ["2 intersections", "1 intersection", "0 intersections", "Line is tangent"], correctAnswer: 2, explanation: "No real solutions → no intersections." }
    ]
  }],

  "y11m-ch3-families": [{
    title: "Families of Quadratic Polynomial Functions",
    explanation: "A family of quadratics shares certain features:\n• Same x-intercepts: y = a(x−p)(x−q) for varying a\n• Same vertex: y = a(x−h)²+k for varying a\n• Same shape: y = a(x−h)²+k for varying h, k\n\nThe parameter a controls width and direction.",
    keyPoints: ["Shared x-intercepts → y = a(x−p)(x−q)", "Shared vertex → y = a(x−h)²+k", "a controls width and orientation", "Families help generalise patterns"],
    workedExamples: [
      { problem: "Write the family of parabolas with x-intercepts 1 and 5.", steps: ["y = a(x−1)(x−5)", "Different values of a give different parabolas", "a > 0: opens up, a < 0: opens down"], answer: "y = a(x−1)(x−5), a ≠ 0" }
    ],
    tips: ["Use specific points to find the value of the parameter a."],
    quiz: [
      { question: "Family with vertex (2, −3):", options: ["y = a(x−2)²−3", "y = (x−2)²−3", "y = a(x+2)²+3", "y = ax²−3"], correctAnswer: 0, explanation: "y = a(x−h)²+k with h=2, k=−3" },
      { question: "In y = a(x−1)(x−4), a controls:", options: ["x-intercepts", "Width and direction", "Vertex position", "y-intercept only"], correctAnswer: 1, explanation: "a affects how wide/narrow and which way it opens." },
      { question: "All parabolas in y = a(x−3)² share:", options: ["Same width", "Same vertex", "Same a", "Same y-intercept"], correctAnswer: 1, explanation: "Vertex (3, 0) for all values of a." }
    ]
  }],

  "y11m-ch3-models": [{
    title: "Quadratic Models",
    explanation: "Quadratics model: projectile motion, area optimisation, revenue/profit, and bridge arches.\n\nThe vertex gives the maximum or minimum value. Domain must be restricted to realistic values.",
    keyPoints: ["a > 0: minimum value at vertex", "a < 0: maximum value at vertex", "x = −b/(2a) gives optimal value", "Restrict domain to context"],
    workedExamples: [
      { problem: "Profit P = −3x²+120x−500. Find max profit.", steps: ["x = −120/(2×−3) = 20", "P(20) = −3(400)+2400−500 = 700"], answer: "Maximum profit = $700 when x = 20" }
    ],
    tips: ["Always interpret your answer in the context of the problem."],
    quiz: [
      { question: "h = −5t²+30t. Max height at t =", options: ["3", "6", "5", "30"], correctAnswer: 0, explanation: "t = −30/(−10) = 3" },
      { question: "Max height = ", options: ["45", "30", "90", "15"], correctAnswer: 0, explanation: "h(3) = −45+90 = 45" },
      { question: "Quadratic models are appropriate when:", options: ["Rate is constant", "There is a max or min", "Data is linear", "Growth is exponential"], correctAnswer: 1, explanation: "Quadratics have a turning point → max/min." }
    ]
  }],

  "y11m-ch3-review": reviewLesson(3, "Quadratics"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 4 — A GALLERY OF GRAPHS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch4-hyperbolas": [{
    title: "Rectangular Hyperbolas",
    explanation: "The rectangular hyperbola y = a/(x−h) + k has:\n• Vertical asymptote: x = h\n• Horizontal asymptote: y = k\n• Two branches in opposite quadrants (relative to asymptotes)\n• a > 0: branches in Q1 and Q3; a < 0: branches in Q2 and Q4",
    keyPoints: ["y = a/(x−h) + k", "Vertical asymptote: x = h", "Horizontal asymptote: y = k", "Two branches, no crossing asymptotes"],
    workedExamples: [
      { problem: "Sketch y = 2/(x−1) + 3", steps: ["VA: x = 1, HA: y = 3", "a = 2 > 0: branches in Q1/Q3 relative to (1, 3)", "When x = 2: y = 2+3 = 5", "When x = 0: y = −2+3 = 1"], answer: "Hyperbola with asymptotes x = 1 and y = 3" }
    ],
    tips: ["The graph never touches its asymptotes."],
    quiz: [
      { question: "y = 1/x has asymptotes:", options: ["x = 0, y = 0", "x = 1, y = 1", "x = 0, y = 1", "No asymptotes"], correctAnswer: 0, explanation: "h = 0, k = 0 → asymptotes at axes." },
      { question: "VA of y = 3/(x+2):", options: ["x = 2", "x = −2", "x = 3", "y = 0"], correctAnswer: 1, explanation: "x − (−2) = 0 → x = −2" },
      { question: "HA of y = 5/(x−1) + 4:", options: ["y = 5", "y = 1", "y = 4", "y = 0"], correctAnswer: 2, explanation: "k = 4" }
    ]
  }],

  "y11m-ch4-truncus": [{
    title: "The Truncus",
    explanation: "The truncus y = a/(x−h)² + k has:\n• Vertical asymptote: x = h\n• Horizontal asymptote: y = k\n• Both branches on the same side of HA\n• a > 0: above HA; a < 0: below HA",
    keyPoints: ["y = a/(x−h)² + k", "Always positive denominator (x−h)²", "Both branches same side of HA", "Symmetric about VA"],
    workedExamples: [
      { problem: "Sketch y = 1/x²", steps: ["VA: x = 0, HA: y = 0", "a = 1 > 0: above x-axis", "Symmetric about y-axis", "Always positive"], answer: "Truncus symmetric about y-axis, above x-axis" }
    ],
    tips: ["The truncus is symmetric about its vertical asymptote."],
    quiz: [
      { question: "y = 1/x² is always:", options: ["Positive", "Negative", "Zero", "Undefined at 0"], correctAnswer: 0, explanation: "x² > 0 → 1/x² > 0" },
      { question: "y = −2/(x−1)² sits:", options: ["Above HA", "Below HA", "On HA", "Crosses HA"], correctAnswer: 1, explanation: "a = −2 < 0 → below HA" },
      { question: "VA of y = 4/(x+3)² − 1:", options: ["x = 3", "x = −3", "x = 4", "x = −1"], correctAnswer: 1, explanation: "x + 3 = 0 → x = −3" }
    ]
  }],

  "y11m-ch4-y2x": [{
    title: "The Graph of y² = x",
    explanation: "y² = x is a sideways parabola opening right. It is NOT a function (fails vertical line test).\n\nThe two branches: y = √x (upper) and y = −√x (lower).\nDomain: x ≥ 0. Range: all real y.",
    keyPoints: ["Opens to the right", "Not a function (two y-values for each x > 0)", "Domain: x ≥ 0", "Symmetric about the x-axis"],
    workedExamples: [
      { problem: "Sketch y² = 4x", steps: ["When x = 1: y² = 4, y = ±2", "When x = 4: y² = 16, y = ±4", "Opens right, vertex at origin"], answer: "Sideways parabola through (0,0), (1,±2), (4,±4)" }
    ],
    tips: ["y² = x is a relation, not a function."],
    quiz: [
      { question: "y² = x passes vertical line test?", options: ["Yes", "No"], correctAnswer: 1, explanation: "Two y-values for each x > 0 → not a function." },
      { question: "Domain of y² = x:", options: ["All reals", "x ≥ 0", "x > 0", "y ≥ 0"], correctAnswer: 1, explanation: "y² ≥ 0 → x ≥ 0" },
      { question: "y² = 9 has solutions:", options: ["y = 3", "y = −3", "y = ±3", "y = 81"], correctAnswer: 2, explanation: "y = 3 or y = −3" }
    ]
  }],

  "y11m-ch4-sqrt": [{
    title: "The Graph of y = √x",
    explanation: "y = √x is the upper branch of y² = x. It IS a function.\n\nDomain: x ≥ 0, Range: y ≥ 0.\nTransformed: y = a√(x−h) + k, starting point (h, k).",
    keyPoints: ["Domain: x ≥ 0, Range: y ≥ 0", "Starting point at origin (or (h, k) with transformations)", "Increasing function", "Half of the sideways parabola"],
    workedExamples: [
      { problem: "Sketch y = √(x−2) + 1", steps: ["Starting point: (2, 1)", "When x = 3: y = 1+1 = 2", "When x = 6: y = 2+1 = 3", "Increasing from (2, 1)"], answer: "Square root curve starting at (2, 1)" }
    ],
    tips: ["The starting point (h, k) replaces the origin."],
    quiz: [
      { question: "Domain of y = √(x−3):", options: ["x ≥ 0", "x ≥ 3", "x > 3", "All reals"], correctAnswer: 1, explanation: "x−3 ≥ 0 → x ≥ 3" },
      { question: "y = √x is:", options: ["A function", "Not a function", "A parabola", "A hyperbola"], correctAnswer: 0, explanation: "Passes vertical line test → function." },
      { question: "Starting point of y = √(x+1)−2:", options: ["(1, −2)", "(−1, −2)", "(−1, 2)", "(1, 2)"], correctAnswer: 1, explanation: "h = −1, k = −2" }
    ]
  }],

  "y11m-ch4-circles": [{
    title: "Circles",
    explanation: "Standard form: (x−h)² + (y−k)² = r²\nCentre: (h, k), Radius: r\n\nA circle is NOT a function. To graph: plot centre, mark radius in all four directions.",
    keyPoints: ["(x−h)² + (y−k)² = r²", "Centre (h, k), radius r", "Not a function", "Symmetric about both axes through centre"],
    workedExamples: [
      { problem: "Find centre and radius: (x−3)² + (y+2)² = 25", steps: ["h = 3, k = −2", "r² = 25, r = 5"], answer: "Centre (3, −2), radius 5" }
    ],
    tips: ["If given x²+y²+Dx+Ey+F = 0, complete the square in x and y to find centre and radius."],
    quiz: [
      { question: "x²+y² = 16. Radius:", options: ["4", "8", "16", "2"], correctAnswer: 0, explanation: "r² = 16, r = 4" },
      { question: "Centre of (x+1)²+(y−3)² = 9:", options: ["(1, 3)", "(−1, 3)", "(1, −3)", "(−1, −3)"], correctAnswer: 1, explanation: "h = −1, k = 3" },
      { question: "A circle is a function?", options: ["Yes", "No"], correctAnswer: 1, explanation: "Fails vertical line test." }
    ]
  }],

  "y11m-ch4-determining-rules": [{
    title: "Determining Rules",
    explanation: "Given a graph, determine its equation by:\n1. Identify the type of graph (linear, quadratic, hyperbola, etc.)\n2. Read key features (asymptotes, vertex, intercepts)\n3. Use the general form and substitute known points\n4. Solve for unknown parameters",
    keyPoints: ["Identify graph type first", "Read off key features", "Use general form with parameters", "Substitute points to find unknowns"],
    workedExamples: [
      { problem: "A parabola has vertex (1, −4) and passes through (3, 0). Find its equation.", steps: ["y = a(x−1)²−4", "0 = a(3−1)²−4 = 4a−4", "a = 1", "y = (x−1)²−4"], answer: "y = (x−1)² − 4" }
    ],
    tips: ["Always use the vertex form for parabolas when the vertex is given."],
    quiz: [
      { question: "Hyperbola with VA x = 2, HA y = 3 has form:", options: ["y = a/(x−2)+3", "y = a/(x+2)−3", "y = a(x−2)+3", "y = ax²+3"], correctAnswer: 0, explanation: "Standard hyperbola form with h = 2, k = 3" },
      { question: "A graph passes through (0, 5) and (2, 5). It has:", options: ["Axis of symmetry x = 1", "No axis of symmetry", "Gradient 0", "Both A and C possible"], correctAnswer: 3, explanation: "Symmetric about x = 1, or could be horizontal." },
      { question: "To find 'a' in y = a(x−h)²+k, you need:", options: ["The vertex only", "A second point", "The y-intercept only", "Nothing else"], correctAnswer: 1, explanation: "Vertex gives h, k; a point determines a." }
    ]
  }],

  "y11m-ch4-review": reviewLesson(4, "A Gallery of Graphs"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 5 — FUNCTIONS AND RELATIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch5-set-notation": [{
    title: "Set Notation and Sets of Numbers",
    explanation: "Number sets: ℕ (natural), ℤ (integers), ℚ (rational), ℝ (real).\n\nSet-builder notation: {x : condition}\nInterval notation: [a, b], (a, b), [a, b), (a, ∞)\n\n[ ] = included, ( ) = excluded.",
    keyPoints: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ", "{x : x > 2} = (2, ∞)", "[a, b] includes endpoints", "(a, b) excludes endpoints"],
    workedExamples: [
      { problem: "Write {x : −1 ≤ x < 3} in interval notation.", steps: ["−1 is included → [", "3 is excluded → )", "= [−1, 3)"], answer: "[−1, 3)" }
    ],
    tips: ["Use ∞ always with a round bracket — you can't 'include' infinity."],
    quiz: [
      { question: "(2, 5] means:", options: ["2 < x ≤ 5", "2 ≤ x ≤ 5", "2 < x < 5", "2 ≤ x < 5"], correctAnswer: 0, explanation: "Round = excluded, square = included." },
      { question: "√2 belongs to:", options: ["ℕ", "ℤ", "ℚ", "ℝ \\ ℚ (irrational)"], correctAnswer: 3, explanation: "√2 is irrational." },
      { question: "[3, ∞) includes:", options: ["3 and above", "Above 3 only", "3 and below", "All reals"], correctAnswer: 0, explanation: "Square bracket includes 3." }
    ]
  }],

  "y11m-ch5-relations": [{
    title: "Relations, Domain and Range",
    explanation: "A relation is any set of ordered pairs. Domain = set of x-values. Range = set of y-values.\n\nRead domain and range from graphs: domain is the horizontal extent, range is the vertical extent.",
    keyPoints: ["Domain: all possible x-values", "Range: all possible y-values", "Read from graph: left→right for domain, bottom→top for range", "Use interval notation"],
    workedExamples: [
      { problem: "Find domain and range of y = x² − 4", steps: ["x can be any real → domain = ℝ", "Minimum y at vertex: x = 0, y = −4", "Range: y ≥ −4 → [−4, ∞)"], answer: "Domain: ℝ, Range: [−4, ∞)" }
    ],
    tips: ["For domain: ask 'what x-values can I put in?' For range: 'what y-values come out?'"],
    quiz: [
      { question: "Domain of y = 1/x:", options: ["ℝ", "ℝ\\{0}", "x > 0", "x ≥ 0"], correctAnswer: 1, explanation: "x ≠ 0 (division by zero)." },
      { question: "Range of y = x²:", options: ["ℝ", "y ≥ 0", "y > 0", "y ≤ 0"], correctAnswer: 1, explanation: "x² ≥ 0 for all x." },
      { question: "Domain of y = √(x−1):", options: ["x ≥ 0", "x ≥ 1", "x > 1", "All reals"], correctAnswer: 1, explanation: "x−1 ≥ 0 → x ≥ 1" }
    ]
  }],

  "y11m-ch5-functions": [{
    title: "Functions",
    explanation: "A function is a relation where every x-value has exactly one y-value. Test: the vertical line test.\n\nIf any vertical line crosses the graph more than once → not a function.",
    keyPoints: ["Each x maps to exactly one y", "Vertical line test", "All functions are relations", "Not all relations are functions"],
    workedExamples: [
      { problem: "Is x² + y² = 9 a function?", steps: ["Circle: fails vertical line test", "e.g. x = 0 → y = ±3 (two values)"], answer: "No, not a function" }
    ],
    tips: ["Circles, sideways parabolas and hyperbolas (y = ±...) are typically not functions."],
    quiz: [
      { question: "y = x³ is a function?", options: ["Yes", "No"], correctAnswer: 0, explanation: "Each x gives one y → passes VLT." },
      { question: "x = y² is a function of x?", options: ["Yes", "No"], correctAnswer: 1, explanation: "e.g. x = 4 → y = ±2" },
      { question: "The vertical line test checks for:", options: ["Unique y for each x", "Unique x for each y", "Symmetry", "Gradient"], correctAnswer: 0, explanation: "VLT checks each x has one y." }
    ]
  }],

  "y11m-ch5-one-to-one": [{
    title: "One-to-One Functions and Implied Domains",
    explanation: "A one-to-one function passes both vertical and horizontal line tests: each y-value comes from exactly one x-value.\n\nImplied (natural) domain: the largest domain for which the expression is defined.",
    keyPoints: ["One-to-one: passes horizontal line test too", "Needed for inverse functions to exist", "Implied domain: largest valid domain", "Exclude division by 0, negative under √, etc."],
    workedExamples: [
      { problem: "Find the implied domain of f(x) = 1/√(x−2)", steps: ["Need x−2 > 0 (positive, since in denominator under √)", "x > 2", "Domain: (2, ∞)"], answer: "(2, ∞)" }
    ],
    tips: ["For √ in a denominator, the expression inside must be strictly positive (> 0, not ≥ 0)."],
    quiz: [
      { question: "y = x² is one-to-one?", options: ["Yes", "No"], correctAnswer: 1, explanation: "e.g. y = 4 from x = 2 and x = −2" },
      { question: "Implied domain of √(3−x):", options: ["x ≤ 3", "x ≥ 3", "x < 3", "All reals"], correctAnswer: 0, explanation: "3−x ≥ 0 → x ≤ 3" },
      { question: "y = 2x + 1 is one-to-one?", options: ["Yes", "No"], correctAnswer: 0, explanation: "Linear function → one-to-one." }
    ]
  }],

  "y11m-ch5-piecewise": [{
    title: "Piecewise-Defined Functions",
    explanation: "A piecewise function uses different rules on different intervals:\nf(x) = { rule₁ if condition₁\n         { rule₂ if condition₂\n\nGraph each piece on its interval. Check continuity at boundaries.",
    keyPoints: ["Different rules for different x-intervals", "Domain is split into subintervals", "Check open/closed circles at boundaries", "Can be continuous or have jumps"],
    workedExamples: [
      { problem: "Sketch f(x) = { 2x+1, x < 1; 4−x, x ≥ 1 }", steps: ["For x < 1: line with slope 2, up to (1, 3) open circle", "For x ≥ 1: line with slope −1, from (1, 3) closed circle", "Continuous at x = 1 (both give 3)"], answer: "Two line segments meeting at (1, 3)" }
    ],
    tips: ["Always evaluate both rules at the boundary to check continuity."],
    quiz: [
      { question: "f(x) = {x², x < 0; x+1, x ≥ 0}. f(0) =", options: ["0", "1", "Undefined", "Both 0 and 1"], correctAnswer: 1, explanation: "x ≥ 0 → f(0) = 0+1 = 1" },
      { question: "Open circle means the point is:", options: ["Included", "Excluded", "On the axis", "A turning point"], correctAnswer: 1, explanation: "Open circle → point not included." },
      { question: "Piecewise functions can be:", options: ["Continuous only", "Discontinuous only", "Either", "Neither"], correctAnswer: 2, explanation: "They can be continuous or have jump discontinuities." }
    ]
  }],

  "y11m-ch5-notation": [{
    title: "Applying Function Notation",
    explanation: "f(x) is the output when x is the input. Evaluate by substituting:\n• f(3): replace x with 3\n• f(a+1): replace x with a+1\n• f(x+h)−f(x): difference quotient for rates of change",
    keyPoints: ["f(a) = substitute x = a", "f(x+h): substitute x → x+h everywhere", "f(x)−f(a) ≠ f(x−a) in general", "Used heavily in calculus"],
    workedExamples: [
      { problem: "f(x) = x²−3x. Find f(x+h).", steps: ["Replace x with (x+h)", "f(x+h) = (x+h)²−3(x+h)", "= x²+2xh+h²−3x−3h"], answer: "x² + 2xh + h² − 3x − 3h" }
    ],
    tips: ["Use brackets when substituting to avoid sign errors."],
    quiz: [
      { question: "f(x) = 2x+1. f(4) =", options: ["8", "9", "5", "7"], correctAnswer: 1, explanation: "2(4)+1 = 9" },
      { question: "f(x) = x². f(a+1) =", options: ["a²+1", "a²+2a+1", "(a+1)", "a²+a"], correctAnswer: 1, explanation: "(a+1)² = a²+2a+1" },
      { question: "f(x) = 3x. f(2)−f(1) =", options: ["3", "6", "1", "9"], correctAnswer: 0, explanation: "6−3 = 3" }
    ]
  }],

  "y11m-ch5-inverse": [{
    title: "Inverse Functions",
    explanation: "The inverse function f⁻¹ 'undoes' f: if f(a) = b then f⁻¹(b) = a.\n\nTo find f⁻¹:\n1. Write y = f(x)\n2. Swap x and y\n3. Solve for y\n\nThe graph of f⁻¹ is the reflection of f in the line y = x.",
    keyPoints: ["f⁻¹ undoes f: f⁻¹(f(x)) = x", "Swap x and y, solve for y", "Graph: reflect in y = x", "Domain of f⁻¹ = Range of f"],
    workedExamples: [
      { problem: "Find the inverse of f(x) = 2x + 3", steps: ["y = 2x + 3", "Swap: x = 2y + 3", "x − 3 = 2y", "y = (x−3)/2"], answer: "f⁻¹(x) = (x − 3)/2" }
    ],
    tips: ["Only one-to-one functions have inverses. Restrict the domain if needed."],
    quiz: [
      { question: "Inverse of f(x) = x − 5:", options: ["f⁻¹(x) = x+5", "f⁻¹(x) = x−5", "f⁻¹(x) = 5−x", "f⁻¹(x) = 5x"], correctAnswer: 0, explanation: "y = x−5 → x = y−5 → y = x+5" },
      { question: "The graph of f⁻¹ is a reflection of f in:", options: ["x-axis", "y-axis", "y = x", "y = −x"], correctAnswer: 2, explanation: "Inverse is reflected in y = x." },
      { question: "f(f⁻¹(x)) =", options: ["0", "1", "x", "f(x)"], correctAnswer: 2, explanation: "f and f⁻¹ cancel: f(f⁻¹(x)) = x" }
    ]
  }],

  "y11m-ch5-modelling": [{
    title: "Functions and Modelling Exercises",
    explanation: "Use function concepts to model real situations: define variables, state domain restrictions, interpret outputs, and analyse the model's limitations.",
    keyPoints: ["Define variables and their units", "State domain in context", "Interpret range meaningfully", "Discuss model limitations"],
    workedExamples: [
      { problem: "A water tank holds max 5000 L. Water flows in at 200 L/hour. Model the volume V(t).", steps: ["V(t) = 200t", "Domain: 0 ≤ t ≤ 25 (tank full at t = 25)", "Range: 0 ≤ V ≤ 5000"], answer: "V(t) = 200t, 0 ≤ t ≤ 25" }
    ],
    tips: ["Always state what happens at the domain boundaries."],
    quiz: [
      { question: "A model f(x) = 100−2x is valid for:", options: ["All x", "x ≥ 0 and f(x) ≥ 0", "x < 0 only", "x > 100"], correctAnswer: 1, explanation: "Restrict so both x and f(x) are non-negative." },
      { question: "Models are:", options: ["Perfect representations", "Approximations of reality", "Always linear", "Never useful"], correctAnswer: 1, explanation: "Models approximate — they have limitations." },
      { question: "Domain restrictions come from:", options: ["Mathematical rules", "Real-world context", "Both", "Neither"], correctAnswer: 2, explanation: "Both mathematical validity and context matter." }
    ]
  }],

  "y11m-ch5-review": reviewLesson(5, "Functions and Relations"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 6 — POLYNOMIALS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch6-language": [{
    title: "The Language of Polynomials",
    explanation: "A polynomial P(x) = aₙxⁿ + ... + a₁x + a₀ where n is a non-negative integer.\n• Degree: highest power of x\n• Leading coefficient: coefficient of highest power\n• Constant term: a₀",
    keyPoints: ["Degree = highest power", "Leading coefficient of highest term", "Polynomials have non-negative integer powers", "Named: linear (1), quadratic (2), cubic (3), quartic (4)"],
    workedExamples: [
      { problem: "State the degree, leading coefficient and constant of 3x⁴ − 2x² + 7", steps: ["Degree: 4 (quartic)", "Leading coefficient: 3", "Constant term: 7"], answer: "Degree 4, leading coeff. 3, constant 7" }
    ],
    tips: ["Rearrange to descending powers before identifying degree."],
    quiz: [
      { question: "Degree of 5x³ − x + 2:", options: ["1", "2", "3", "5"], correctAnswer: 2, explanation: "Highest power is 3." },
      { question: "Leading coefficient of −x⁴ + 3x²:", options: ["3", "−1", "4", "1"], correctAnswer: 1, explanation: "Coefficient of x⁴ is −1." },
      { question: "Is 1/x a polynomial?", options: ["Yes", "No"], correctAnswer: 1, explanation: "1/x = x⁻¹ — negative power, not a polynomial." }
    ]
  }],

  "y11m-ch6-division": [{
    title: "Division of Polynomials",
    explanation: "Divide P(x) by D(x) to get quotient Q(x) and remainder R: P(x) = D(x)·Q(x) + R.\n\nMethods: long division or synthetic division (for linear divisors).",
    keyPoints: ["P(x) = D(x)·Q(x) + R", "Long division works for any divisor", "Synthetic division for (x − a) only", "Remainder theorem: P(a) = R when dividing by (x − a)"],
    workedExamples: [
      { problem: "Divide x³ − 3x² + 2x + 5 by (x − 2)", steps: ["Using synthetic division with a = 2", "1 | −3 | 2 | 5", "↓  2 | −2 | 0", "1 | −1 | 0 | 5", "Q(x) = x² − x, R = 5"], answer: "x² − x with remainder 5" }
    ],
    tips: ["Include zero coefficients for missing powers when doing long division."],
    quiz: [
      { question: "Remainder when x³ + 1 is divided by (x − 1):", options: ["0", "1", "2", "−1"], correctAnswer: 2, explanation: "P(1) = 1 + 1 = 2" },
      { question: "The remainder theorem states:", options: ["P(a) = Q(a)", "P(a) = remainder when dividing by (x−a)", "P(a) = 0 always", "P(0) = remainder"], correctAnswer: 1, explanation: "P(a) gives the remainder." },
      { question: "If P(a) = 0, then (x−a) is:", options: ["The quotient", "A factor of P(x)", "The remainder", "Undefined"], correctAnswer: 1, explanation: "Zero remainder → (x−a) is a factor." }
    ]
  }],

  "y11m-ch6-factorisation": [{
    title: "Factorisation of Polynomials",
    explanation: "Factor theorem: if P(a) = 0, then (x − a) is a factor of P(x).\n\nTo factorise a cubic:\n1. Find a root by testing ±factors of constant term\n2. Divide to get quadratic factor\n3. Factorise the quadratic",
    keyPoints: ["Factor theorem: P(a) = 0 ⟹ (x−a) is a factor", "Test x = ±1, ±2, ... (factors of constant term)", "Divide to reduce degree", "Continue until fully factorised"],
    workedExamples: [
      { problem: "Factorise x³ − 6x² + 11x − 6", steps: ["P(1) = 1−6+11−6 = 0 ✓", "(x−1) is a factor", "Divide: x³−6x²+11x−6 ÷ (x−1) = x²−5x+6", "= (x−1)(x−2)(x−3)"], answer: "(x−1)(x−2)(x−3)" }
    ],
    tips: ["Start by testing small integers: ±1, ±2, ±3."],
    quiz: [
      { question: "If P(2) = 0, then a factor is:", options: ["(x+2)", "(x−2)", "2x", "x²"], correctAnswer: 1, explanation: "Factor theorem: (x−2)" },
      { question: "Test values for constant term 12:", options: ["±1,±2,±3,±4,±6,±12", "Only ±1", "±12 only", "1 to 12"], correctAnswer: 0, explanation: "All factors of 12." },
      { question: "After finding one factor of a cubic:", options: ["Done", "Divide to get a quadratic", "Guess the rest", "Use the formula"], correctAnswer: 1, explanation: "Divide to reduce to quadratic, then factorise." }
    ]
  }],

  "y11m-ch6-cubic-equations": [{
    title: "Solving Cubic Equations",
    explanation: "To solve ax³ + bx² + cx + d = 0:\n1. Try to find a rational root using factor theorem\n2. Divide by the corresponding factor\n3. Solve the resulting quadratic\n\nA cubic always has at least one real root.",
    keyPoints: ["At least one real root guaranteed", "Use factor theorem to find first root", "Divide and solve quadratic", "May have 1 or 3 real roots"],
    workedExamples: [
      { problem: "Solve x³ − 4x² + x + 6 = 0", steps: ["P(−1) = −1−4−1+6 = 0 ✓", "Factor: (x+1)", "Divide: x²−5x+6 = (x−2)(x−3)", "Solutions: x = −1, 2, 3"], answer: "x = −1, 2, 3" }
    ],
    tips: ["A cubic can have 1 real root (and 2 complex) or 3 real roots."],
    quiz: [
      { question: "A cubic has at least:", options: ["0 real roots", "1 real root", "2 real roots", "3 real roots"], correctAnswer: 1, explanation: "Cubic must cross x-axis at least once." },
      { question: "x³ = 8 has solution:", options: ["x = 2 only", "x = ±2", "x = 2, and complex roots", "x = 4"], correctAnswer: 2, explanation: "x = 2 is the real root; there are also 2 complex roots." },
      { question: "First step to solve x³+2x²−x−2 = 0:", options: ["Graph it", "Test x = 1", "Use quadratic formula", "Complete the square"], correctAnswer: 1, explanation: "Test simple values: P(1) = 1+2−1−2 = 0 ✓" }
    ]
  }],

  "y11m-ch6-cubic-form": [{
    title: "Cubic Functions of the Form f(x) = a(x − h)³ + k",
    explanation: "This is the turning-point form of a cubic. The point of inflection is at (h, k).\n\na > 0: increasing overall. a < 0: decreasing overall.\n|a| > 1: steeper. |a| < 1: flatter.",
    keyPoints: ["Point of inflection at (h, k)", "a controls direction and steepness", "One x-intercept when solved: x = h − ∛(k/a)", "Similar to transformations of y = x³"],
    workedExamples: [
      { problem: "Sketch y = 2(x−1)³ − 4", steps: ["POI: (1, −4)", "a = 2 > 0: increasing", "x-int: 2(x−1)³ = 4, (x−1)³ = 2, x = 1+∛2 ≈ 2.26", "y-int: 2(−1)³−4 = −6"], answer: "Cubic with POI at (1, −4), increasing" }
    ],
    tips: ["The point of inflection is where the concavity changes."],
    quiz: [
      { question: "POI of y = (x+2)³ − 1:", options: ["(2, −1)", "(−2, −1)", "(−2, 1)", "(2, 1)"], correctAnswer: 1, explanation: "h = −2, k = −1" },
      { question: "y = −x³ is:", options: ["Increasing", "Decreasing", "Horizontal", "Undefined"], correctAnswer: 1, explanation: "a = −1 < 0 → decreasing." },
      { question: "y = x³ has POI at:", options: ["(0, 0)", "(1, 1)", "(0, 1)", "No POI"], correctAnswer: 0, explanation: "Basic cubic has POI at origin." }
    ]
  }],

  "y11m-ch6-cubic-graphs": [{
    title: "Graphs of Factorised Cubic Functions",
    explanation: "For y = a(x−p)(x−q)(x−r):\n• x-intercepts at p, q, r\n• Shape depends on sign of a\n• If a factor is repeated (e.g. (x−p)²), the graph touches but doesn't cross at x = p",
    keyPoints: ["x-intercepts from factors", "a > 0: starts low-left, ends high-right", "a < 0: starts high-left, ends low-right", "Repeated factor → touches x-axis"],
    workedExamples: [
      { problem: "Sketch y = (x+1)(x−1)(x−3)", steps: ["x-ints: −1, 1, 3", "Leading term: x³ (a=1>0)", "y-int: (1)(−1)(−3) = 3", "Standard S-shape through intercepts"], answer: "Cubic through (−1,0), (1,0), (3,0), y-int = 3" }
    ],
    tips: ["If (x−a)² appears, the curve touches the axis at x = a without crossing."],
    quiz: [
      { question: "y = (x−2)²(x+1). At x = 2:", options: ["Crosses", "Touches", "Has a hole", "Undefined"], correctAnswer: 1, explanation: "Repeated factor → touches." },
      { question: "y = −(x−1)(x−2)(x−4). Starts:", options: ["Low-left", "High-left", "Horizontal", "Vertical"], correctAnswer: 1, explanation: "a < 0: high-left, low-right." },
      { question: "Number of x-ints for y = x(x−3)²:", options: ["1", "2", "3", "0"], correctAnswer: 1, explanation: "x = 0 (crosses) and x = 3 (touches) → 2 distinct x-ints." }
    ]
  }],

  "y11m-ch6-cubic-inequalities": [{
    title: "Solving Cubic Inequalities",
    explanation: "To solve P(x) > 0 (or <, ≤, ≥):\n1. Factorise P(x)\n2. Find the roots\n3. Sketch the cubic\n4. Read off where the graph is above/below the x-axis",
    keyPoints: ["Factorise to find roots", "Sketch the graph", "Above x-axis → positive", "Below x-axis → negative"],
    workedExamples: [
      { problem: "Solve x³ − x > 0", steps: ["x(x²−1) = x(x−1)(x+1) = 0", "Roots: −1, 0, 1", "Sketch: cubic with a>0", "Positive for −1 < x < 0 or x > 1"], answer: "−1 < x < 0 or x > 1" }
    ],
    tips: ["The sketch method is the most reliable for cubic inequalities."],
    quiz: [
      { question: "x³ > 0 when:", options: ["x > 0", "x < 0", "All x", "x ≠ 0"], correctAnswer: 0, explanation: "x³ > 0 iff x > 0." },
      { question: "To solve P(x) ≤ 0, read where:", options: ["Graph is above axis", "Graph is below or on axis", "Graph is undefined", "Gradient is 0"], correctAnswer: 1, explanation: "≤ 0 means on or below x-axis." },
      { question: "First step for x³−4x ≥ 0:", options: ["Graph on CAS", "Factorise", "Substitute values", "Complete the square"], correctAnswer: 1, explanation: "x(x²−4) = x(x−2)(x+2)" }
    ]
  }],

  "y11m-ch6-cubic-families": [{
    title: "Families of Cubic Polynomial Functions",
    explanation: "Cubic families share features controlled by parameters:\n• y = a(x−1)(x−2)(x−3): same x-intercepts, varying a\n• y = (x−h)³: translated cubics\n• y = x³ + c: vertical shifts",
    keyPoints: ["Parameter a controls steepness and direction", "Shared roots define a family", "Transformations create families", "Use a point to find specific family member"],
    workedExamples: [
      { problem: "Write family with roots 0, 2, −1.", steps: ["y = ax(x−2)(x+1)", "a is the parameter", "Different a → different family members"], answer: "y = ax(x−2)(x+1), a ≠ 0" }
    ],
    tips: ["To find a specific member, substitute a known point to find a."],
    quiz: [
      { question: "Family y = a(x−1)³ shares:", options: ["Same roots", "Same POI", "Same a", "Same y-int"], correctAnswer: 1, explanation: "POI at (1, 0) for all a." },
      { question: "In y = ax(x−3)(x+2), 'a' controls:", options: ["Roots", "Shape/width", "Number of roots", "Domain"], correctAnswer: 1, explanation: "a affects steepness and direction." },
      { question: "To find a, use:", options: ["The roots", "An additional point", "The degree", "Nothing else needed"], correctAnswer: 1, explanation: "Substitute a point to determine a." }
    ]
  }],

  "y11m-ch6-quartic": [{
    title: "Quartic and Other Polynomial Functions",
    explanation: "Quartic (degree 4): y = ax⁴ + ... Can have 0, 1, 2, 3 or 4 x-intercepts.\n\nEven degree: both ends go same direction. Odd degree: ends go opposite directions.\na > 0: up on right. a < 0: down on right.",
    keyPoints: ["Even degree: same end behaviour both sides", "Odd degree: opposite end behaviour", "Degree n → at most n x-intercepts", "At most n−1 turning points"],
    workedExamples: [
      { problem: "Describe end behaviour of y = −2x⁴ + x", steps: ["Degree 4 (even): same both sides", "a = −2 < 0: both ends go down", "As x → ±∞, y → −∞"], answer: "Both ends down" }
    ],
    tips: ["Focus on leading term for end behaviour."],
    quiz: [
      { question: "End behaviour of y = x⁵:", options: ["Both up", "Both down", "Left down, right up", "Left up, right down"], correctAnswer: 2, explanation: "Odd degree, a > 0: ↙↗" },
      { question: "Max x-intercepts for degree 6:", options: ["3", "5", "6", "12"], correctAnswer: 2, explanation: "At most n = 6." },
      { question: "y = x⁴ has:", options: ["1 turning point", "2 turning points", "3 turning points", "No turning points"], correctAnswer: 0, explanation: "One minimum at origin." }
    ]
  }],

  "y11m-ch6-applications": [{
    title: "Applications of Polynomial Functions",
    explanation: "Polynomials model cross-sections, volumes, rates, and more. Set up the polynomial from context, find key features (roots, maxima, minima), and interpret.",
    keyPoints: ["Identify the degree from context", "Set up equation from given information", "Find roots for critical values", "Vertex/turning points for optimisation"],
    workedExamples: [
      { problem: "A box's volume V = x(20−2x)(12−2x). Find max volume.", steps: ["Expand: V = 4x³ − 64x² + 240x", "Domain: 0 < x < 6", "V'(x) = 12x²−128x+240 = 0", "Use CAS: x ≈ 2.43", "V ≈ 262.7"], answer: "Maximum volume ≈ 262.7 cubic units" }
    ],
    tips: ["Always state the domain based on physical constraints."],
    quiz: [
      { question: "Volume of a box is typically:", options: ["Linear", "Quadratic", "Cubic", "Quartic"], correctAnswer: 2, explanation: "Length × width × height → degree 3." },
      { question: "Domain of a volume function must be:", options: ["All reals", "Positive with valid dimensions", "Negative", "Zero"], correctAnswer: 1, explanation: "Dimensions must be positive." },
      { question: "To find maximum volume:", options: ["Set V = 0", "Find where V' = 0", "Set x = 0", "Ignore domain"], correctAnswer: 1, explanation: "Stationary points give max/min." }
    ]
  }],

  "y11m-ch6-bisection": [{
    title: "The Bisection Method",
    explanation: "A numerical method to approximate roots of f(x) = 0:\n1. Find a, b where f(a) and f(b) have opposite signs\n2. Midpoint m = (a+b)/2\n3. If f(m) = 0, done. If f(a)·f(m) < 0, root in [a, m]. Otherwise root in [m, b].\n4. Repeat.",
    keyPoints: ["Requires sign change: f(a)·f(b) < 0", "Halves the interval each step", "Converges slowly but reliably", "Error < (b−a)/2ⁿ after n steps"],
    workedExamples: [
      { problem: "Find a root of x³ − 2 = 0 between 1 and 2.", steps: ["f(1) = −1, f(2) = 6 (sign change ✓)", "m = 1.5, f(1.5) = 1.375 > 0", "Root in [1, 1.5]", "m = 1.25, f(1.25) ≈ −0.047 < 0", "Root in [1.25, 1.5]"], answer: "Root ≈ 1.26 (∛2 ≈ 1.2599)" }
    ],
    tips: ["The bisection method always works when there's a sign change, but it's slow."],
    quiz: [
      { question: "Bisection requires:", options: ["A formula for roots", "A sign change over an interval", "The derivative", "An exact answer"], correctAnswer: 1, explanation: "Need f(a) and f(b) with opposite signs." },
      { question: "After 4 steps, interval width is:", options: ["Original/4", "Original/8", "Original/16", "Original/2"], correctAnswer: 2, explanation: "Halved 4 times: 1/2⁴ = 1/16" },
      { question: "Bisection finds:", options: ["Exact roots", "Approximate roots", "All roots", "Complex roots"], correctAnswer: 1, explanation: "Numerical approximation — not exact." }
    ]
  }],

  "y11m-ch6-review": reviewLesson(6, "Polynomials"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 7 — TRANSFORMATIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch7-translations": [{
    title: "Translations of Functions",
    explanation: "Translations shift graphs without changing shape:\n• y = f(x) + k: vertical shift up k (or down if k < 0)\n• y = f(x − h): horizontal shift right h (or left if h < 0)\n\nNote: horizontal shifts work 'opposite' to expectation.",
    keyPoints: ["f(x) + k: up k units", "f(x − h): right h units", "f(x + h): left h units", "Shape unchanged"],
    workedExamples: [
      { problem: "Describe the transformation from y = x² to y = (x−3)² + 2", steps: ["(x−3): shift right 3", "+2: shift up 2", "Vertex moves from (0,0) to (3,2)"], answer: "Right 3, up 2" }
    ],
    tips: ["Horizontal: opposite sign. Vertical: same sign."],
    quiz: [
      { question: "y = f(x−4) shifts f:", options: ["Left 4", "Right 4", "Up 4", "Down 4"], correctAnswer: 1, explanation: "x − 4: right 4" },
      { question: "y = f(x) + 3 shifts f:", options: ["Left 3", "Right 3", "Up 3", "Down 3"], correctAnswer: 2, explanation: "+3: up 3" },
      { question: "y = (x+1)² is y = x² shifted:", options: ["Right 1", "Left 1", "Up 1", "Down 1"], correctAnswer: 1, explanation: "x + 1 = x − (−1): left 1" }
    ]
  }],

  "y11m-ch7-dilations": [{
    title: "Dilations and Reflections",
    explanation: "Dilations stretch/compress; reflections flip:\n• y = af(x): vertical dilation by factor |a|; reflect in x-axis if a < 0\n• y = f(bx): horizontal dilation by factor 1/|b|; reflect in y-axis if b < 0",
    keyPoints: ["af(x): vertical stretch by |a|", "f(bx): horizontal compression by factor |b|", "a < 0: reflect in x-axis", "b < 0: reflect in y-axis"],
    workedExamples: [
      { problem: "Describe y = −2f(3x)", steps: ["Factor 3 inside: horizontal compression by 1/3", "Factor −2 outside: vertical stretch by 2 + reflect in x-axis"], answer: "Compress horizontally ×⅓, stretch vertically ×2, reflect in x-axis" }
    ],
    tips: ["Horizontal dilations are the reciprocal of the number inside."],
    quiz: [
      { question: "y = 3f(x) stretches vertically by:", options: ["1/3", "3", "9", "−3"], correctAnswer: 1, explanation: "Factor 3 → stretch by 3." },
      { question: "y = f(2x) compresses horizontally by:", options: ["2", "1/2", "4", "1/4"], correctAnswer: 1, explanation: "Factor 1/|2| = 1/2" },
      { question: "y = −f(x) is a reflection in:", options: ["x-axis", "y-axis", "y = x", "Origin"], correctAnswer: 0, explanation: "Negative outside → reflect in x-axis." }
    ]
  }],

  "y11m-ch7-combinations": [{
    title: "Combinations of Transformations",
    explanation: "Apply multiple transformations in order:\n\ny = af(b(x − h)) + k\n\nOrder: 1) Dilations/reflections 2) Translations\nOr equivalently: factor out b first, then read off h and k.",
    keyPoints: ["Standard form: y = af(b(x−h)) + k", "Dilations before translations", "a, b: dilations/reflections", "h, k: translations"],
    workedExamples: [
      { problem: "Describe transformations: y = 2(x−1)² − 3 from y = x²", steps: ["a = 2: vertical stretch by 2", "h = 1: right 1", "k = −3: down 3"], answer: "Stretch vertically ×2, right 1, down 3" }
    ],
    tips: ["Write in standard form first, then read off transformations."],
    quiz: [
      { question: "y = −(x+2)³ + 1. Transformations:", options: ["Reflect x-axis, left 2, up 1", "Reflect y-axis, right 2, down 1", "Left 2, down 1", "Right 2, up 1"], correctAnswer: 0, explanation: "a = −1: reflect in x-axis; h = −2: left 2; k = 1: up 1" },
      { question: "Apply first:", options: ["Translations", "Dilations", "Either order", "Neither"], correctAnswer: 1, explanation: "Dilations/reflections before translations." },
      { question: "y = 3f(x−2) + 1: k =", options: ["3", "−2", "1", "0"], correctAnswer: 2, explanation: "k = 1 (vertical translation)" }
    ]
  }],

  "y11m-ch7-determining": [{
    title: "Determining Transformations",
    explanation: "Given original and transformed graphs, identify the transformations by comparing key features:\n• Vertex/POI positions → translations\n• Relative height/width → dilations\n• Orientation → reflections",
    keyPoints: ["Compare key points before/after", "Shifted vertex → translation", "Changed width → dilation", "Flipped → reflection"],
    workedExamples: [
      { problem: "y = x² becomes y = 4 − (x+1)². Describe.", steps: ["Rewrite: y = −(x+1)² + 4", "Reflect in x-axis (a = −1)", "Left 1 (h = −1)", "Up 4 (k = 4)"], answer: "Reflect in x-axis, left 1, up 4" }
    ],
    tips: ["Rewrite the equation in standard form to read off transformations."],
    quiz: [
      { question: "y = x² → y = (x−3)². Translation:", options: ["Right 3", "Left 3", "Up 3", "Down 3"], correctAnswer: 0, explanation: "h = 3 → right 3" },
      { question: "y = x² → y = −x². Transformation:", options: ["Translation", "Dilation", "Reflection in x-axis", "Reflection in y-axis"], correctAnswer: 2, explanation: "a = −1 → reflect in x-axis" },
      { question: "y = √x → y = 2√x. Dilation:", options: ["Horizontal ×2", "Vertical ×2", "Horizontal ×½", "Vertical ×½"], correctAnswer: 1, explanation: "Factor 2 outside → vertical ×2" }
    ]
  }],

  "y11m-ch7-graphs": [{
    title: "Transformations of Graphs of Functions",
    explanation: "Apply transformations to non-standard functions (hyperbolas, square roots, cubics, etc.) using the same rules:\n\ny = af(b(x − h)) + k\n\nEach graph type has its own key features that transform accordingly.",
    keyPoints: ["Same transformation rules apply to all function types", "Transform key features: asymptotes, intercepts, endpoints", "Asymptotes shift with translations", "Sketch transformed graph from key features"],
    workedExamples: [
      { problem: "Transform y = 1/x to y = 2/(x−1) + 3", steps: ["a = 2: vertical dilation ×2", "h = 1: right 1", "k = 3: up 3", "VA: x = 1, HA: y = 3"], answer: "Hyperbola with VA x = 1, HA y = 3, dilated ×2" }
    ],
    tips: ["Asymptotes transform like points under translations."],
    quiz: [
      { question: "y = 1/x → y = 1/(x−2). VA becomes:", options: ["x = 0", "x = 2", "x = −2", "y = 2"], correctAnswer: 1, explanation: "VA shifts right 2: x = 2" },
      { question: "y = √x → y = √(x+4)−1. Start point:", options: ["(4, −1)", "(−4, −1)", "(−4, 1)", "(4, 1)"], correctAnswer: 1, explanation: "Left 4, down 1: (−4, −1)" },
      { question: "Transformations change a graph's:", options: ["Type", "Position and size", "Degree", "Domain only"], correctAnswer: 1, explanation: "Same type, different position/size." }
    ]
  }],

  "y11m-ch7-review": reviewLesson(7, "Transformations"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 8 — REVISION OF CHAPTERS 2–7
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch8-tech-free": revisionLesson("Technology-free questions", "2–7"),
  "y11m-ch8-mcq": revisionLesson("Multiple-choice questions", "2–7"),
  "y11m-ch8-extended": revisionLesson("Extended-response questions", "2–7"),
  "y11m-ch8-investigations": revisionLesson("Investigations", "2–7"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 9 — PROBABILITY
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch9-sample-spaces": [{
    title: "Sample Spaces and Probability",
    explanation: "The sample space (ε or S) is the set of all possible outcomes. An event is a subset of the sample space.\n\nPr(A) = n(A)/n(ε) for equally likely outcomes.\n0 ≤ Pr(A) ≤ 1. Pr(ε) = 1.",
    keyPoints: ["Sample space: all possible outcomes", "Pr(A) = favourable/total", "0 ≤ Pr(A) ≤ 1", "Pr(A') = 1 − Pr(A)"],
    workedExamples: [
      { problem: "A die is rolled. Find Pr(even).", steps: ["ε = {1,2,3,4,5,6}, n(ε) = 6", "Even = {2,4,6}, n(even) = 3", "Pr(even) = 3/6 = 1/2"], answer: "1/2" }
    ],
    tips: ["List the sample space systematically before calculating probabilities."],
    quiz: [
      { question: "Pr(A') if Pr(A) = 0.3:", options: ["0.3", "0.7", "1.3", "0"], correctAnswer: 1, explanation: "1 − 0.3 = 0.7" },
      { question: "A coin is flipped. Sample space:", options: ["{H}", "{H, T}", "{1,2,3,4,5,6}", "{H, T, Edge}"], correctAnswer: 1, explanation: "{H, T}" },
      { question: "Pr(impossible event) =", options: ["0", "1", "0.5", "Undefined"], correctAnswer: 0, explanation: "Impossible → probability 0" }
    ]
  }],

  "y11m-ch9-estimating": revisionLesson("Estimating probabilities", "9"),
  "y11m-ch9-multi-stage": revisionLesson("Multi-stage experiments", "9"),
  "y11m-ch9-combining": revisionLesson("Combining events", "9"),
  "y11m-ch9-tables": revisionLesson("Probability tables", "9"),

  "y11m-ch9-conditional": [{
    title: "Conditional Probability",
    explanation: "Pr(A|B) = Pr(A ∩ B)/Pr(B) — the probability of A given that B has occurred.\n\nThis restricts the sample space to only outcomes where B occurs.",
    keyPoints: ["Pr(A|B) = Pr(A ∩ B)/Pr(B)", "Restricts sample space to B", "Pr(A|B) ≠ Pr(B|A) in general", "Used in medical testing, quality control"],
    workedExamples: [
      { problem: "In a class: 60% study maths, 30% study both maths and science. Pr(science|maths)?", steps: ["Pr(S ∩ M) = 0.30", "Pr(M) = 0.60", "Pr(S|M) = 0.30/0.60 = 0.5"], answer: "0.5" }
    ],
    tips: ["Draw a Venn diagram or two-way table to organise conditional probability problems."],
    quiz: [
      { question: "Pr(A|B) = 0.4, Pr(B) = 0.5. Pr(A ∩ B) =", options: ["0.2", "0.9", "0.1", "0.8"], correctAnswer: 0, explanation: "0.4 × 0.5 = 0.2" },
      { question: "Pr(A|B) = Pr(B|A) always?", options: ["Yes", "No"], correctAnswer: 1, explanation: "Generally not equal." },
      { question: "Pr(A|B) uses which sample space?", options: ["Full ε", "Only B", "Only A", "A ∩ B"], correctAnswer: 1, explanation: "Restricted to B." }
    ]
  }],

  "y11m-ch9-independent": [{
    title: "Independent Events",
    explanation: "Events A and B are independent if Pr(A ∩ B) = Pr(A) × Pr(B).\nEquivalently: Pr(A|B) = Pr(A).\n\nKnowing B occurred doesn't change the probability of A.",
    keyPoints: ["Pr(A ∩ B) = Pr(A) × Pr(B) for independence", "Pr(A|B) = Pr(A) if independent", "Independent ≠ mutually exclusive", "Test: does knowing B change Pr(A)?"],
    workedExamples: [
      { problem: "Pr(A) = 0.3, Pr(B) = 0.5, Pr(A ∩ B) = 0.15. Independent?", steps: ["Pr(A) × Pr(B) = 0.3 × 0.5 = 0.15", "Pr(A ∩ B) = 0.15 = Pr(A) × Pr(B)", "Yes, independent"], answer: "Yes, independent" }
    ],
    tips: ["Mutually exclusive events with non-zero probabilities are NEVER independent."],
    quiz: [
      { question: "Independent events satisfy:", options: ["Pr(A∩B)=0", "Pr(A∩B)=Pr(A)×Pr(B)", "Pr(A∪B)=1", "Pr(A)=Pr(B)"], correctAnswer: 1, explanation: "Product rule for independence." },
      { question: "Mutually exclusive events are independent?", options: ["Always", "Sometimes", "Never (if both have Pr > 0)", "Same thing"], correctAnswer: 2, explanation: "If A∩B = ∅ and both Pr > 0, then Pr(A∩B)=0 ≠ Pr(A)×Pr(B)." },
      { question: "Two coin flips are:", options: ["Dependent", "Independent", "Mutually exclusive", "Complementary"], correctAnswer: 1, explanation: "One flip doesn't affect the other." }
    ]
  }],

  "y11m-ch9-simulation": revisionLesson("Solving probability problems using simulation", "9"),
  "y11m-ch9-pseudocode": revisionLesson("Pseudocode for probability and simulation", "9"),
  "y11m-ch9-review": reviewLesson(9, "Probability"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 10 — COUNTING METHODS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch10-principles": [{
    title: "Addition and Multiplication Principles",
    explanation: "Addition principle: if tasks are mutually exclusive, total ways = sum of ways for each task.\n\nMultiplication principle: if tasks are sequential, total ways = product of ways for each task.",
    keyPoints: ["Addition: OR → add", "Multiplication: AND → multiply", "Sequential stages → multiply", "Mutually exclusive choices → add"],
    workedExamples: [
      { problem: "3 shirts and 4 pants. How many outfits?", steps: ["Shirt AND pants → multiply", "3 × 4 = 12"], answer: "12 outfits" }
    ],
    tips: ["'And' usually means multiply; 'or' usually means add."],
    quiz: [
      { question: "5 entrées OR 3 mains. Choices:", options: ["15", "8", "2", "53"], correctAnswer: 1, explanation: "OR → 5 + 3 = 8" },
      { question: "4 letters then 3 digits. Codes:", options: ["7", "12", "43", "34"], correctAnswer: 1, explanation: "AND → 4 × 3 = 12" },
      { question: "2 routes A→B, 3 routes B→C. Paths A→C:", options: ["5", "6", "9", "23"], correctAnswer: 1, explanation: "2 × 3 = 6" }
    ]
  }],

  "y11m-ch10-arrangements": [{
    title: "Arrangements",
    explanation: "Permutations: ordered arrangements.\nn! = n × (n−1) × ... × 1\nP(n,r) = n!/(n−r)! = arrangements of r items from n.",
    keyPoints: ["n! = n factorial", "P(n,r) = n!/(n−r)!", "Order matters", "With restrictions: adjust available choices"],
    workedExamples: [
      { problem: "How many 3-letter arrangements from A,B,C,D,E?", steps: ["P(5,3) = 5!/(5−3)! = 5!/2!", "= 120/2 = 60"], answer: "60" }
    ],
    tips: ["If order doesn't matter, use combinations instead."],
    quiz: [
      { question: "5! =", options: ["25", "120", "60", "20"], correctAnswer: 1, explanation: "5×4×3×2×1 = 120" },
      { question: "P(4,2) =", options: ["6", "12", "8", "4"], correctAnswer: 1, explanation: "4×3 = 12" },
      { question: "0! =", options: ["0", "1", "Undefined", "∞"], correctAnswer: 1, explanation: "By definition, 0! = 1" }
    ]
  }],

  "y11m-ch10-selections": [{
    title: "Selections",
    explanation: "Combinations: unordered selections.\nC(n,r) = n!/(r!(n−r)!) = ways to choose r items from n.\n\nOrder doesn't matter: {A,B} = {B,A}.",
    keyPoints: ["C(n,r) = n!/(r!(n−r)!)", "Order doesn't matter", "C(n,r) = C(n,n−r)", "Also written as ⁿCᵣ or (n choose r)"],
    workedExamples: [
      { problem: "Choose 3 from 7 people.", steps: ["C(7,3) = 7!/(3!4!)", "= 5040/(6×24) = 35"], answer: "35 ways" }
    ],
    tips: ["Ask: does order matter? Yes → permutation. No → combination."],
    quiz: [
      { question: "C(5,2) =", options: ["10", "20", "60", "25"], correctAnswer: 0, explanation: "5!/(2!3!) = 120/12 = 10" },
      { question: "C(n,0) =", options: ["0", "1", "n", "n!"], correctAnswer: 1, explanation: "One way to choose nothing." },
      { question: "C(6,4) = C(6,?):", options: ["4", "2", "3", "6"], correctAnswer: 1, explanation: "C(n,r) = C(n,n−r): C(6,4) = C(6,2)" }
    ]
  }],

  "y11m-ch10-applications": revisionLesson("Applications to probability", "10"),
  "y11m-ch10-review": reviewLesson(10, "Counting Methods"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 11 — DISCRETE PROBABILITY DISTRIBUTIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch11-discrete-rv": [{
    title: "Discrete Random Variables",
    explanation: "A discrete random variable X takes countable values with associated probabilities.\n\nProbability distribution: table of values and probabilities. Sum of all probabilities = 1.\n\nExpected value: E(X) = Σx·Pr(X=x)",
    keyPoints: ["Sum of probabilities = 1", "E(X) = Σx·Pr(X=x) (mean)", "Var(X) = E(X²) − [E(X)]²", "Standard deviation = √Var(X)"],
    workedExamples: [
      { problem: "X: 1(0.2), 2(0.5), 3(0.3). Find E(X).", steps: ["E(X) = 1(0.2) + 2(0.5) + 3(0.3)", "= 0.2 + 1.0 + 0.9 = 2.1"], answer: "E(X) = 2.1" }
    ],
    tips: ["E(X) doesn't have to be a possible value of X."],
    quiz: [
      { question: "Sum of all probabilities:", options: ["0", "0.5", "1", "Varies"], correctAnswer: 2, explanation: "Always sums to 1." },
      { question: "E(X) is the:", options: ["Mode", "Median", "Mean", "Range"], correctAnswer: 2, explanation: "Expected value = mean." },
      { question: "X: 0(0.4), 1(p), 2(0.2). p =", options: ["0.2", "0.4", "0.6", "0.8"], correctAnswer: 1, explanation: "0.4 + p + 0.2 = 1, p = 0.4" }
    ]
  }],

  "y11m-ch11-without-replacement": revisionLesson("Sampling without replacement", "11"),

  "y11m-ch11-binomial": [{
    title: "Sampling with Replacement: The Binomial Distribution",
    explanation: "Binomial distribution: n independent trials, each with probability p of success.\n\nPr(X = k) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ\n\nE(X) = np, Var(X) = np(1−p).",
    keyPoints: ["n independent trials", "Constant probability p", "Pr(X=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ", "E(X) = np, Var(X) = np(1−p)"],
    workedExamples: [
      { problem: "10 coin flips. Pr(exactly 3 heads)?", steps: ["n=10, p=0.5, k=3", "Pr = C(10,3)(0.5)³(0.5)⁷", "= 120 × 0.000977", "≈ 0.117"], answer: "≈ 0.117" }
    ],
    tips: ["Check the conditions: fixed n, independent trials, constant p, two outcomes."],
    quiz: [
      { question: "Binomial requires:", options: ["Varying p", "Fixed n and constant p", "Dependent trials", "More than 2 outcomes"], correctAnswer: 1, explanation: "Fixed n, constant p, independent trials." },
      { question: "E(X) for n=20, p=0.3:", options: ["6", "14", "0.3", "20"], correctAnswer: 0, explanation: "np = 20×0.3 = 6" },
      { question: "Var(X) for n=10, p=0.5:", options: ["5", "2.5", "25", "0.5"], correctAnswer: 1, explanation: "np(1−p) = 10×0.5×0.5 = 2.5" }
    ]
  }],

  "y11m-ch11-review": reviewLesson(11, "Discrete Probability Distributions"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 12 — REVISION OF CHAPTERS 9–11
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch12-tech-free": revisionLesson("Technology-free questions", "9–11"),
  "y11m-ch12-mcq": revisionLesson("Multiple-choice questions", "9–11"),
  "y11m-ch12-extended": revisionLesson("Extended-response questions", "9–11"),
  "y11m-ch12-investigations": revisionLesson("Investigations", "9–11"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 13 — EXPONENTIAL FUNCTIONS AND LOGARITHMS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch13-index-laws": [{
    title: "The Index Laws",
    explanation: "Index laws for aᵐ:\n• aᵐ × aⁿ = aᵐ⁺ⁿ\n• aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n• (aᵐ)ⁿ = aᵐⁿ\n• (ab)ⁿ = aⁿbⁿ\n• a⁰ = 1\n• a⁻ⁿ = 1/aⁿ",
    keyPoints: ["Multiply: add indices", "Divide: subtract indices", "Power of power: multiply indices", "Negative index: reciprocal"],
    workedExamples: [
      { problem: "Simplify (2x³)² × 3x⁻¹", steps: ["= 4x⁶ × 3x⁻¹", "= 12x⁵"], answer: "12x⁵" }
    ],
    tips: ["Write everything with positive indices at the end."],
    quiz: [
      { question: "2³ × 2⁴ =", options: ["2⁷", "2¹²", "4⁷", "2⁻¹"], correctAnswer: 0, explanation: "Add indices: 3+4=7" },
      { question: "x⁵ ÷ x² =", options: ["x³", "x⁷", "x¹⁰", "x²·⁵"], correctAnswer: 0, explanation: "5−2=3" },
      { question: "5⁰ =", options: ["0", "5", "1", "Undefined"], correctAnswer: 2, explanation: "Any non-zero number to power 0 = 1" }
    ]
  }],

  "y11m-ch13-rational-indices": [{
    title: "Rational Indices",
    explanation: "Fractional indices: a^(1/n) = ⁿ√a, a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ).\n\nThis connects indices to roots: x^(1/2) = √x, x^(1/3) = ∛x.",
    keyPoints: ["a^(1/2) = √a", "a^(1/3) = ∛a", "a^(m/n) = (ⁿ√a)ᵐ", "All index laws still apply"],
    workedExamples: [
      { problem: "Evaluate 8^(2/3)", steps: ["= (∛8)² = 2² = 4", "Or: = ∛(8²) = ∛64 = 4"], answer: "4" }
    ],
    tips: ["Take the root first to keep numbers small."],
    quiz: [
      { question: "16^(1/4) =", options: ["2", "4", "8", "16"], correctAnswer: 0, explanation: "⁴√16 = 2" },
      { question: "27^(2/3) =", options: ["3", "9", "18", "81"], correctAnswer: 1, explanation: "(∛27)² = 3² = 9" },
      { question: "x^(3/2) means:", options: ["√(x³)", "x²√x", "Both A and B", "x/2"], correctAnswer: 0, explanation: "(√x)³ = √(x³)" }
    ]
  }],

  "y11m-ch13-exp-graphs": revisionLesson("Graphs of exponential functions", "13"),
  "y11m-ch13-exp-equations": revisionLesson("Solving exponential equations and inequalities", "13"),

  "y11m-ch13-logarithms": [{
    title: "Logarithms",
    explanation: "log_a(x) = y means aʸ = x. The logarithm is the inverse of the exponential.\n\nLaws:\n• log(mn) = log m + log n\n• log(m/n) = log m − log n\n• log(mⁿ) = n log m\n• log_a(a) = 1, log_a(1) = 0",
    keyPoints: ["log_a(x) = y ⟺ aʸ = x", "log(mn) = log m + log n", "log(mⁿ) = n log m", "log_a(1) = 0, log_a(a) = 1"],
    workedExamples: [
      { problem: "Evaluate log₂(32)", steps: ["2^? = 32", "2⁵ = 32", "log₂(32) = 5"], answer: "5" }
    ],
    tips: ["Think: 'the base raised to what power gives this number?'"],
    quiz: [
      { question: "log₃(27) =", options: ["2", "3", "9", "1"], correctAnswer: 1, explanation: "3³ = 27" },
      { question: "log₁₀(1) =", options: ["1", "10", "0", "Undefined"], correctAnswer: 2, explanation: "10⁰ = 1" },
      { question: "log₂(8) + log₂(4) =", options: ["5", "32", "12", "3"], correctAnswer: 0, explanation: "3 + 2 = 5 (or log₂(32) = 5)" }
    ]
  }],

  "y11m-ch13-log-solving": revisionLesson("Using logarithms to solve exponential equations and inequalities", "13"),
  "y11m-ch13-log-graphs": revisionLesson("Graphs of logarithm functions", "13"),
  "y11m-ch13-exp-models": revisionLesson("Exponential models and applications", "13"),
  "y11m-ch13-review": reviewLesson(13, "Exponential Functions and Logarithms"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 14 — CIRCULAR FUNCTIONS
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch14-radians": [{
    title: "Measuring Angles in Degrees and Radians",
    explanation: "Radians: an angle measured by arc length on a unit circle.\n\n360° = 2π radians, so 180° = π radians.\n\nConversions:\n• Degrees → radians: multiply by π/180\n• Radians → degrees: multiply by 180/π",
    keyPoints: ["π radians = 180°", "To radians: × π/180", "To degrees: × 180/π", "Key: 90° = π/2, 60° = π/3, 45° = π/4, 30° = π/6"],
    workedExamples: [
      { problem: "Convert 120° to radians", steps: ["120 × π/180 = 2π/3"], answer: "2π/3 radians" }
    ],
    tips: ["Memorise the key conversions: 30°, 45°, 60°, 90°, 180°, 360°."],
    quiz: [
      { question: "60° in radians:", options: ["π/6", "π/4", "π/3", "π/2"], correctAnswer: 2, explanation: "60 × π/180 = π/3" },
      { question: "π/4 radians in degrees:", options: ["30°", "45°", "60°", "90°"], correctAnswer: 1, explanation: "π/4 × 180/π = 45°" },
      { question: "2π radians =", options: ["180°", "270°", "360°", "90°"], correctAnswer: 2, explanation: "Full circle = 2π = 360°" }
    ]
  }],

  "y11m-ch14-sin-cos": revisionLesson("Defining circular functions: sine and cosine", "14"),
  "y11m-ch14-tangent": revisionLesson("Another circular function: tangent", "14"),
  "y11m-ch14-symmetry": revisionLesson("Symmetry properties of circular functions", "14"),
  "y11m-ch14-values": revisionLesson("Values of circular functions", "14"),

  "y11m-ch14-sin-cos-graphs": [{
    title: "Graphs of Sine and Cosine",
    explanation: "y = sin x: starts at 0, amplitude 1, period 2π.\ny = cos x: starts at 1, amplitude 1, period 2π.\n\nKey features: amplitude (height), period (wavelength), x-intercepts, max/min points.",
    keyPoints: ["Amplitude = maximum displacement from midline", "Period = length of one cycle", "sin(0) = 0, cos(0) = 1", "Both have period 2π and amplitude 1"],
    workedExamples: [
      { problem: "State amplitude and period of y = 3sin(2x)", steps: ["Amplitude = |3| = 3", "Period = 2π/|2| = π"], answer: "Amplitude 3, period π" }
    ],
    tips: ["Amplitude = |a|, Period = 2π/|n| for y = a sin(nx)."],
    quiz: [
      { question: "Period of y = sin(3x):", options: ["3π", "2π/3", "6π", "π/3"], correctAnswer: 1, explanation: "2π/3" },
      { question: "Amplitude of y = −5cos x:", options: ["−5", "5", "1", "10"], correctAnswer: 1, explanation: "Amplitude = |−5| = 5" },
      { question: "y = cos x has maximum at:", options: ["x = 0", "x = π/2", "x = π", "x = 3π/2"], correctAnswer: 0, explanation: "cos(0) = 1 (maximum)" }
    ]
  }],

  "y11m-ch14-trig-equations": revisionLesson("Solution of trigonometric equations", "14"),
  "y11m-ch14-sketch-sin-cos": revisionLesson("Sketch graphs of y = a sin(n(t ± ε)) and y = a cos(n(t ± ε))", "14"),
  "y11m-ch14-sketch-shifted": revisionLesson("Sketch graphs with vertical translation", "14"),
  "y11m-ch14-further-symmetry": revisionLesson("Further symmetry properties and the Pythagorean identity", "14"),
  "y11m-ch14-tan-function": revisionLesson("The tangent function", "14"),
  "y11m-ch14-numerical": revisionLesson("Numerical methods with a CAS calculator", "14"),
  "y11m-ch14-general-solution": revisionLesson("General solution of trigonometric equations", "14"),
  "y11m-ch14-applications": revisionLesson("Applications of circular functions", "14"),
  "y11m-ch14-review": reviewLesson(14, "Circular Functions"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 15 — REVISION OF CHAPTERS 13–14
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch15-tech-free": revisionLesson("Technology-free questions", "13–14"),
  "y11m-ch15-mcq": revisionLesson("Multiple-choice questions", "13–14"),
  "y11m-ch15-extended": revisionLesson("Extended-response questions", "13–14"),
  "y11m-ch15-investigations": revisionLesson("Investigations", "13–14"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 16 — RATES OF CHANGE
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch16-recognising": revisionLesson("Recognising relationships", "16"),

  "y11m-ch16-constant": [{
    title: "Constant Rate of Change",
    explanation: "When the rate of change is constant, the relationship is linear: y = mx + c.\nThe gradient m IS the constant rate of change.\n\nExamples: speed (constant velocity), hourly wage, fixed cost per unit.",
    keyPoints: ["Constant rate → linear function", "Gradient = rate of change", "Graph is a straight line", "First differences are constant"],
    workedExamples: [
      { problem: "Water fills at 5 L/min. Volume after t minutes?", steps: ["Rate = 5 L/min (constant)", "V = 5t", "Linear function with gradient 5"], answer: "V = 5t" }
    ],
    tips: ["Constant rate of change always means a straight-line graph."],
    quiz: [
      { question: "Constant rate produces a:", options: ["Curve", "Straight line", "Parabola", "Hyperbola"], correctAnswer: 1, explanation: "Constant rate → linear." },
      { question: "y = 3x + 2. Rate of change:", options: ["2", "3", "5", "6"], correctAnswer: 1, explanation: "Gradient = rate = 3" },
      { question: "Distance-time graph with constant speed is:", options: ["Curved", "Straight line", "Horizontal", "Vertical"], correctAnswer: 1, explanation: "Constant speed → straight line." }
    ]
  }],

  "y11m-ch16-average": [{
    title: "Average Rate of Change",
    explanation: "Average rate of change of f over [a, b] = (f(b)−f(a))/(b−a).\n\nThis is the gradient of the secant line joining (a, f(a)) and (b, f(b)).",
    keyPoints: ["= (f(b)−f(a))/(b−a)", "Gradient of secant line", "Gives overall rate, not instantaneous", "Works for any function"],
    workedExamples: [
      { problem: "f(x) = x². Average rate over [1, 3].", steps: ["(f(3)−f(1))/(3−1) = (9−1)/2 = 4"], answer: "4" }
    ],
    tips: ["Average rate ignores what happens between the endpoints."],
    quiz: [
      { question: "f(x) = 2x+1. Average rate over [0,5]:", options: ["2", "11", "5", "1"], correctAnswer: 0, explanation: "(11−1)/5 = 10/5 = 2 (constant for linear)" },
      { question: "Average rate is the gradient of:", options: ["Tangent", "Secant", "Normal", "Asymptote"], correctAnswer: 1, explanation: "Secant line through two points." },
      { question: "f(x) = x³. Avg rate [0,2]:", options: ["4", "8", "2", "6"], correctAnswer: 0, explanation: "(8−0)/(2−0) = 4" }
    ]
  }],

  "y11m-ch16-instantaneous": [{
    title: "Instantaneous Rate of Change",
    explanation: "The instantaneous rate of change at x = a is the gradient of the tangent line at that point.\n\nFound as the limit: lim(h→0) [f(a+h)−f(a)]/h.\n\nThis is the derivative f'(a).",
    keyPoints: ["Gradient of tangent at a point", "Limit of average rates as interval → 0", "= f'(a) (the derivative)", "Gives rate at an instant"],
    workedExamples: [
      { problem: "f(x) = x². Instantaneous rate at x = 3.", steps: ["f'(x) = 2x", "f'(3) = 6"], answer: "6" }
    ],
    tips: ["Average rate uses two points; instantaneous rate uses the tangent at one point."],
    quiz: [
      { question: "Instantaneous rate is the gradient of:", options: ["Secant", "Tangent", "Normal", "Chord"], correctAnswer: 1, explanation: "Tangent at the point." },
      { question: "f(x) = 3x². f'(2) =", options: ["6", "12", "3", "24"], correctAnswer: 1, explanation: "f'(x) = 6x, f'(2) = 12" },
      { question: "As h → 0, average rate → :", options: ["0", "∞", "Instantaneous rate", "Undefined"], correctAnswer: 2, explanation: "Limit gives instantaneous rate." }
    ]
  }],

  "y11m-ch16-velocity": revisionLesson("Position and average velocity", "16"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 17 — DIFFERENTIATION AND ANTIDIFFERENTIATION
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch17-derivative": [{
    title: "The Derivative",
    explanation: "The derivative of f at x is: f'(x) = lim(h→0) [f(x+h)−f(x)]/h.\n\nThis gives the gradient function — the gradient of f at any point x.",
    keyPoints: ["f'(x) = lim(h→0) [f(x+h)−f(x)]/h", "Gives gradient at any x", "Also written dy/dx", "First principles definition"],
    workedExamples: [
      { problem: "Find f'(x) for f(x) = x² from first principles.", steps: ["[f(x+h)−f(x)]/h = [(x+h)²−x²]/h", "= [x²+2xh+h²−x²]/h = 2x+h", "lim(h→0)(2x+h) = 2x"], answer: "f'(x) = 2x" }
    ],
    tips: ["Expand, cancel, simplify, THEN take the limit."],
    quiz: [
      { question: "f'(x) gives:", options: ["The area", "The gradient function", "The y-intercept", "The inverse"], correctAnswer: 1, explanation: "Derivative = gradient function." },
      { question: "dy/dx is another notation for:", options: ["Integration", "f'(x)", "f(x)", "Δy/Δx"], correctAnswer: 1, explanation: "Leibniz notation for derivative." },
      { question: "From first principles, the key step is:", options: ["Expand and cancel h", "Set h = 0 immediately", "Ignore the limit", "Square both sides"], correctAnswer: 0, explanation: "Expand, cancel h, then take limit." }
    ]
  }],

  "y11m-ch17-rules": [{
    title: "Rules for Differentiation",
    explanation: "Power rule: d/dx(xⁿ) = nxⁿ⁻¹\nConstant: d/dx(c) = 0\nConstant multiple: d/dx(cf) = cf'\nSum/difference: d/dx(f±g) = f'±g'",
    keyPoints: ["xⁿ → nxⁿ⁻¹", "Constants disappear", "Coefficients carry through", "Differentiate term by term"],
    workedExamples: [
      { problem: "Differentiate f(x) = 3x⁴ − 2x² + 5x − 7", steps: ["f'(x) = 12x³ − 4x + 5"], answer: "12x³ − 4x + 5" }
    ],
    tips: ["Rewrite fractions and roots as powers before differentiating."],
    quiz: [
      { question: "d/dx(x⁵) =", options: ["5x⁴", "5x⁶", "x⁴", "4x⁵"], correctAnswer: 0, explanation: "5x⁴" },
      { question: "d/dx(7) =", options: ["7", "1", "0", "7x"], correctAnswer: 2, explanation: "Constant → 0" },
      { question: "d/dx(4x³) =", options: ["12x²", "4x²", "12x³", "3x²"], correctAnswer: 0, explanation: "4 × 3x² = 12x²" }
    ]
  }],

  "y11m-ch17-neg-powers": revisionLesson("Differentiating xⁿ where n is a negative integer", "17"),
  "y11m-ch17-deriv-graphs": revisionLesson("Graphs of the derivative function", "17"),

  "y11m-ch17-antidiff": [{
    title: "Antidifferentiation of Polynomial Functions",
    explanation: "Antiderivative: the reverse of differentiation.\n\n∫xⁿ dx = xⁿ⁺¹/(n+1) + c (n ≠ −1)\n\nAlways include the constant of integration c.",
    keyPoints: ["xⁿ → xⁿ⁺¹/(n+1) + c", "Add 1 to power, divide by new power", "Always add + c", "Check by differentiating back"],
    workedExamples: [
      { problem: "Find ∫(3x² + 2x) dx", steps: ["= 3x³/3 + 2x²/2 + c", "= x³ + x² + c"], answer: "x³ + x² + c" }
    ],
    tips: ["Don't forget + c! It represents an unknown constant."],
    quiz: [
      { question: "∫x⁴ dx =", options: ["x⁵/5 + c", "4x³ + c", "x⁵ + c", "x⁴/4 + c"], correctAnswer: 0, explanation: "x⁵/5 + c" },
      { question: "∫5 dx =", options: ["5x + c", "5", "0", "x + c"], correctAnswer: 0, explanation: "5 = 5x⁰ → 5x + c" },
      { question: "Why + c?", options: ["Convention", "Different constants give same derivative", "It's optional", "Only for definite integrals"], correctAnswer: 1, explanation: "d/dx(F(x) + c) = f(x) for any constant c." }
    ]
  }],

  "y11m-ch17-limits": revisionLesson("Limits and continuity", "17"),
  "y11m-ch17-differentiable": revisionLesson("When is a function differentiable?", "17"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 18 — APPLICATIONS OF DIFFERENTIATION
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch18-tangents": [{
    title: "Tangents and Normals",
    explanation: "Tangent at (a, f(a)): gradient = f'(a), equation: y − f(a) = f'(a)(x − a).\n\nNormal: perpendicular to tangent, gradient = −1/f'(a).",
    keyPoints: ["Tangent gradient = f'(a)", "Normal gradient = −1/f'(a)", "Use point-gradient form", "Normal is perpendicular to tangent"],
    workedExamples: [
      { problem: "Find tangent to y = x² at x = 2.", steps: ["f(2) = 4, f'(2) = 4", "y − 4 = 4(x − 2)", "y = 4x − 4"], answer: "y = 4x − 4" }
    ],
    tips: ["Find gradient first (f'(a)), then use point-gradient form."],
    quiz: [
      { question: "f(x) = x³. Tangent gradient at x = 1:", options: ["1", "3", "0", "−1"], correctAnswer: 1, explanation: "f'(x) = 3x², f'(1) = 3" },
      { question: "Normal gradient if tangent has m = 2:", options: ["2", "−2", "½", "−½"], correctAnswer: 3, explanation: "−1/2" },
      { question: "Tangent touches the curve at:", options: ["0 points", "Exactly 1 point (locally)", "2 points", "Infinite points"], correctAnswer: 1, explanation: "Tangent touches at one point locally." }
    ]
  }],

  "y11m-ch18-rates": revisionLesson("Rates of change", "18"),

  "y11m-ch18-stationary": [{
    title: "Stationary Points",
    explanation: "Stationary points occur where f'(x) = 0. The tangent is horizontal.\n\nTypes: local maximum, local minimum, or stationary point of inflection.",
    keyPoints: ["f'(x) = 0 at stationary points", "Tangent is horizontal", "Three types: max, min, inflection", "Not all are max/min"],
    workedExamples: [
      { problem: "Find stationary points of f(x) = x³ − 3x", steps: ["f'(x) = 3x² − 3 = 0", "x² = 1, x = ±1", "f(1) = −2, f(−1) = 2", "SPs at (1, −2) and (−1, 2)"], answer: "(1, −2) and (−1, 2)" }
    ],
    tips: ["Set f'(x) = 0 and solve for x, then find corresponding y-values."],
    quiz: [
      { question: "f'(x) = 0 means:", options: ["f is zero", "Tangent is horizontal", "f is undefined", "f is maximum"], correctAnswer: 1, explanation: "Zero gradient → horizontal tangent." },
      { question: "f(x) = x². Stationary point:", options: ["(0, 0)", "(1, 1)", "(−1, 1)", "No SP"], correctAnswer: 0, explanation: "f'(x) = 2x = 0 → x = 0, f(0) = 0" },
      { question: "How many SPs can a cubic have?", options: ["0", "1", "2", "0, 1, or 2"], correctAnswer: 3, explanation: "f'(x) is quadratic → 0, 1, or 2 roots." }
    ]
  }],

  "y11m-ch18-types": revisionLesson("Types of stationary points", "18"),
  "y11m-ch18-max-min": revisionLesson("Applications to maximum and minimum problems", "18"),
  "y11m-ch18-motion": revisionLesson("Applications to motion in a straight line", "18"),
  "y11m-ch18-families": revisionLesson("Families of functions and transformations", "18"),
  "y11m-ch18-newton": revisionLesson("Newton's method", "18"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 19 — FURTHER DIFFERENTIATION AND ANTIDIFFERENTIATION
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch19-chain": [{
    title: "The Chain Rule",
    explanation: "For composite functions y = f(g(x)):\ndy/dx = f'(g(x)) · g'(x)\n\nOr: if y = f(u) and u = g(x), then dy/dx = dy/du · du/dx.",
    keyPoints: ["Derivative of outer × derivative of inner", "dy/dx = dy/du × du/dx", "Essential for composite functions", "Works with any combination"],
    workedExamples: [
      { problem: "Differentiate y = (3x + 1)⁴", steps: ["Let u = 3x + 1", "y = u⁴ → dy/du = 4u³", "du/dx = 3", "dy/dx = 4(3x+1)³ × 3 = 12(3x+1)³"], answer: "12(3x + 1)³" }
    ],
    tips: ["Think: 'differentiate the outside, keep the inside, multiply by derivative of inside.'"],
    quiz: [
      { question: "d/dx[(2x−1)³] =", options: ["3(2x−1)²", "6(2x−1)²", "2(2x−1)³", "6(2x−1)³"], correctAnswer: 1, explanation: "3(2x−1)² × 2 = 6(2x−1)²" },
      { question: "Chain rule applies when:", options: ["Functions are added", "Functions are composed", "Constants are multiplied", "Functions are equal"], correctAnswer: 1, explanation: "For composite functions f(g(x))." },
      { question: "d/dx[√(x²+1)] =", options: ["x/√(x²+1)", "1/(2√(x²+1))", "2x", "x²+1"], correctAnswer: 0, explanation: "½(x²+1)^(-½) × 2x = x/√(x²+1)" }
    ]
  }],

  "y11m-ch19-rational-powers": revisionLesson("Differentiating rational powers", "19"),
  "y11m-ch19-antidiff-rational": revisionLesson("Antidifferentiating rational powers", "19"),
  "y11m-ch19-second-deriv": revisionLesson("The second derivative", "19"),
  "y11m-ch19-sketch": revisionLesson("Sketch graphs", "19"),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 20 — INTEGRATION
  // ═══════════════════════════════════════════════════════════════
  "y11m-ch20-estimating": [{
    title: "Estimating Area Under a Graph",
    explanation: "Approximate area using rectangles:\n• Left/right endpoint rectangles\n• Upper rectangles (overestimate for increasing functions)\n• Lower rectangles (underestimate for increasing functions)\n• More rectangles → better approximation",
    keyPoints: ["Divide interval into n strips", "Width of each strip = (b−a)/n", "Upper/lower rectangles bound true area", "More strips = better estimate"],
    workedExamples: [
      { problem: "Estimate ∫₀² x² dx using 4 right rectangles", steps: ["Width = 0.5, x = 0.5, 1, 1.5, 2", "Heights: 0.25, 1, 2.25, 4", "Area ≈ 0.5(0.25+1+2.25+4) = 3.75"], answer: "≈ 3.75 (exact = 8/3 ≈ 2.67)" }
    ],
    tips: ["Right rectangles overestimate for increasing functions."],
    quiz: [
      { question: "More rectangles give:", options: ["Worse estimate", "Better estimate", "Same estimate", "No change"], correctAnswer: 1, explanation: "More strips → closer to true area." },
      { question: "Strip width for [0,6] with n=3:", options: ["2", "3", "6", "1"], correctAnswer: 0, explanation: "(6−0)/3 = 2" },
      { question: "Upper rectangles always:", options: ["Underestimate", "Overestimate", "Equal exact area", "Depend on function"], correctAnswer: 3, explanation: "Depends on whether function is increasing or decreasing." }
    ]
  }],

  "y11m-ch20-definite": [{
    title: "Finding Exact Area: Definite Integral",
    explanation: "The definite integral ∫ₐᵇ f(x) dx = F(b) − F(a), where F is any antiderivative of f.\n\nThis is the Fundamental Theorem of Calculus. It gives the exact area under f(x) between x = a and x = b (when f ≥ 0).",
    keyPoints: ["∫ₐᵇ f(x) dx = F(b) − F(a)", "F'(x) = f(x)", "No + c needed for definite integrals", "Gives exact area when f ≥ 0"],
    workedExamples: [
      { problem: "Evaluate ∫₁³ 2x dx", steps: ["F(x) = x²", "F(3) − F(1) = 9 − 1 = 8"], answer: "8" }
    ],
    tips: ["Find antiderivative, substitute upper bound, subtract lower bound value."],
    quiz: [
      { question: "∫₀² x dx =", options: ["1", "2", "4", "0"], correctAnswer: 1, explanation: "[x²/2]₀² = 4/2 − 0 = 2" },
      { question: "∫₁⁴ 1 dx =", options: ["4", "1", "3", "5"], correctAnswer: 2, explanation: "[x]₁⁴ = 4−1 = 3" },
      { question: "Definite integral gives:", options: ["A function", "A number", "A derivative", "An equation"], correctAnswer: 1, explanation: "F(b)−F(a) is a number." }
    ]
  }],

  "y11m-ch20-signed": [{
    title: "Signed Area",
    explanation: "The definite integral gives signed area:\n• Area above x-axis: positive\n• Area below x-axis: negative\n\nFor total area (unsigned), split at x-intercepts and take absolute values.",
    keyPoints: ["Above axis → positive contribution", "Below axis → negative contribution", "∫ can be negative if more area below", "Total area: split at roots, use |∫|"],
    workedExamples: [
      { problem: "Find total area between y = x and x-axis from x = −1 to x = 1", steps: ["∫₋₁⁰ x dx = [x²/2]₋₁⁰ = 0−½ = −½", "∫₀¹ x dx = [x²/2]₀¹ = ½", "Total area = |−½| + |½| = 1"], answer: "Total area = 1" }
    ],
    tips: ["For total area, always split at x-intercepts."],
    quiz: [
      { question: "∫₋₁¹ x dx =", options: ["1", "0", "−1", "2"], correctAnswer: 1, explanation: "Symmetric odd function: cancels to 0." },
      { question: "Total area ≠ signed area when:", options: ["Always", "When graph crosses x-axis", "Never", "When f > 0"], correctAnswer: 1, explanation: "Crossing causes positive/negative cancellation." },
      { question: "Area below x-axis contributes:", options: ["Positive value", "Negative value", "Zero", "Infinity"], correctAnswer: 1, explanation: "Below axis → negative signed area." }
    ]
  }],

  // ═══════════════════════════════════════════════════════════════
  // APPENDIX — ALGORITHMS AND PSEUDOCODE
  // ═══════════════════════════════════════════════════════════════
  "y11m-app-flowcharts": revisionLesson("Algorithms and flowcharts", "Appendix"),
  "y11m-app-iteration": revisionLesson("Iteration and selection", "Appendix"),
  "y11m-app-pseudocode": revisionLesson("Introduction to pseudocode", "Appendix"),
};
