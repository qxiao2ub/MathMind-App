import { Lesson } from "./topicLessons";

export const year11SpecialistLessons: Record<string, Lesson[]> = {

  // ═══════════════════════════════════════════════════════════════
  // ALGEBRA REVIEW
  // ═══════════════════════════════════════════════════════════════
  "y11s-algebra-review": [
    {
      title: "Indices and Surds Review",
      explanation: "Review of index laws and surd manipulation for Specialist Mathematics.\n\nKey index laws: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ, a^(m/n) = ⁿ√(aᵐ).\n\nSurd rules: √a × √b = √(ab), √a/√b = √(a/b). Rationalise denominators by multiplying by conjugate.",
      keyPoints: ["All index laws apply to rational exponents", "Rationalise: multiply by conjugate", "√a × √a = a", "a^(1/n) = ⁿ√a"],
      workedExamples: [
        { problem: "Simplify: (8x⁶)^(2/3)", steps: ["= 8^(2/3) × x^(6×2/3)", "8^(2/3) = (∛8)² = 2² = 4", "x^4", "= 4x⁴"], answer: "4x⁴" }
      ],
      tips: ["Break fractional indices into root then power: a^(m/n) = (ⁿ√a)ᵐ."],
      quiz: [
        { question: "27^(1/3) =", options: ["3", "9", "27", "1/3"], correctAnswer: 0, explanation: "∛27 = 3" },
        { question: "Rationalise 1/√3:", options: ["√3", "√3/3", "3/√3", "1/3"], correctAnswer: 1, explanation: "1/√3 × √3/√3 = √3/3" },
        { question: "Simplify √50:", options: ["25√2", "5√2", "√50", "10√5"], correctAnswer: 1, explanation: "√(25×2) = 5√2" }
      ]
    },
    {
      title: "Simultaneous Equations (3 Variables)",
      explanation: "Systems of three linear equations with three unknowns can be solved by systematic elimination or substitution.\n\nReduce to 2 equations in 2 unknowns, then to 1 equation in 1 unknown. Back-substitute to find all variables.",
      keyPoints: ["Eliminate one variable from two pairs", "Reduce to 2×2 system", "Back-substitute for remaining variables", "Matrix methods also work"],
      workedExamples: [
        { problem: "x + y + z = 6, 2x - y + z = 3, x + 2y - z = 5. Solve.", steps: ["Eq1 + Eq3: 2x + 3y = 11", "Eq1 + Eq2: 3x + 2z = 9... (continue elimination)", "Solve the reduced 2×2 system", "Back-substitute"], answer: "x = 1, y = 3, z = 2" }
      ],
      tips: ["Choose the variable that's easiest to eliminate first."],
      quiz: [
        { question: "3 equations, 3 unknowns typically have:", options: ["No solution", "One unique solution", "Infinite solutions", "Three solutions"], correctAnswer: 1, explanation: "Usually one unique solution (three planes intersecting at a point)." },
        { question: "First step in solving a 3×3 system:", options: ["Guess values", "Eliminate one variable", "Add all equations", "Graph all three"], correctAnswer: 1, explanation: "Eliminate one variable to reduce to 2×2." },
        { question: "If two equations are inconsistent:", options: ["Unique solution", "No solution", "Infinite solutions", "Two solutions"], correctAnswer: 1, explanation: "Inconsistent equations have no solution." }
      ]
    },
    {
      title: "Algebraic Fractions",
      explanation: "Algebraic fractions follow the same rules as numerical fractions.\n\nTo add/subtract: find common denominator. To multiply: multiply numerators and denominators. To divide: multiply by reciprocal.\n\nAlways factorise first to simplify.",
      keyPoints: ["Factorise before simplifying", "Common denominator for +/-", "Multiply: top×top, bottom×bottom", "Divide: multiply by reciprocal"],
      workedExamples: [
        { problem: "Simplify: x/(x+1) + 2/(x-1)", steps: ["LCD = (x+1)(x-1)", "= x(x-1)/[(x+1)(x-1)] + 2(x+1)/[(x+1)(x-1)]", "= (x²-x+2x+2)/[(x+1)(x-1)]", "= (x²+x+2)/(x²-1)"], answer: "(x²+x+2)/(x²-1)" }
      ],
      tips: ["Factorise denominators first — you might find common factors to cancel."],
      quiz: [
        { question: "1/x + 1/y =", options: ["1/(x+y)", "2/(xy)", "(x+y)/(xy)", "xy"], correctAnswer: 2, explanation: "LCD = xy: y/(xy) + x/(xy) = (x+y)/(xy)" },
        { question: "(x²-4)/(x+2) simplifies to:", options: ["x-2", "x+2", "x²-2", "Can't simplify"], correctAnswer: 0, explanation: "(x+2)(x-2)/(x+2) = x-2" },
        { question: "To divide fractions:", options: ["Cross multiply", "Multiply by reciprocal", "Add denominators", "Subtract numerators"], correctAnswer: 1, explanation: "Dividing = multiplying by the reciprocal." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // NUMBER SYSTEMS AND SETS
  // ═══════════════════════════════════════════════════════════════
  "y11s-number-systems": [
    {
      title: "Set Notation and Operations",
      explanation: "Sets are collections of objects. Key notation: ∈ (element of), ⊂ (subset), ∪ (union), ∩ (intersection), ' or ᶜ (complement).\n\nNumber sets: ℕ (naturals), ℤ (integers), ℚ (rationals), ℝ (reals).\nℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.",
      keyPoints: ["∪: union (in A or B or both)", "∩: intersection (in both A and B)", "A': complement (not in A)", "∅: empty set (no elements)"],
      workedExamples: [
        { problem: "A = {1,2,3,4,5}, B = {3,4,5,6,7}. Find A∪B, A∩B.", steps: ["A∪B = {1,2,3,4,5,6,7}", "A∩B = {3,4,5}"], answer: "A∪B = {1,2,3,4,5,6,7}, A∩B = {3,4,5}" }
      ],
      tips: ["Draw Venn diagrams to visualise set operations."],
      quiz: [
        { question: "A = {1,2,3}, B = {2,3,4}. A∩B =", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "∅"], correctAnswer: 1, explanation: "Common elements: 2 and 3." },
        { question: "ℤ includes:", options: ["Only positives", "Integers (positive, negative, zero)", "Fractions", "Irrationals"], correctAnswer: 1, explanation: "ℤ = {..., -2, -1, 0, 1, 2, ...}" },
        { question: "A∪∅ =", options: ["∅", "A", "Universal set", "Undefined"], correctAnswer: 1, explanation: "Union with empty set gives A." }
      ]
    },
    {
      title: "Surds and Exact Values",
      explanation: "Surds are irrational roots left in exact form. Simplify by extracting perfect square factors.\n\nOperations: a√b + c√b = (a+c)√b. Multiply: √a × √b = √(ab).\n\nRationalising: for 1/(a+√b), multiply by (a-√b)/(a-√b) (conjugate).",
      keyPoints: ["Simplify: extract perfect squares", "Add/subtract like surds only", "Rationalise using conjugate", "Exact values preferred in Specialist"],
      workedExamples: [
        { problem: "Rationalise: 3/(2+√5)", steps: ["Multiply by (2-√5)/(2-√5)", "= 3(2-√5)/(4-5)", "= 3(2-√5)/(-1)", "= -3(2-√5) = -6+3√5"], answer: "3√5 - 6" }
      ],
      tips: ["The conjugate of (a+√b) is (a-√b). Their product eliminates the surd."],
      quiz: [
        { question: "√12 + √27 =", options: ["√39", "5√3", "3√3", "7√3"], correctAnswer: 1, explanation: "2√3 + 3√3 = 5√3" },
        { question: "Conjugate of (3-√2):", options: ["3+√2", "√2-3", "-3+√2", "-(3-√2)"], correctAnswer: 0, explanation: "Change the sign of the surd term." },
        { question: "(√5)² =", options: ["√5", "25", "5", "10"], correctAnswer: 2, explanation: "√5 × √5 = 5" }
      ]
    },
    {
      title: "Interval Notation",
      explanation: "Intervals describe sets of real numbers between bounds.\n\n[a, b] = a ≤ x ≤ b (closed: includes endpoints)\n(a, b) = a < x < b (open: excludes endpoints)\n[a, b) = a ≤ x < b (half-open)\n(-∞, a] = x ≤ a\n\nUse ∪ to combine intervals: (-∞, 2) ∪ (5, ∞).",
      keyPoints: ["[ ] = included (closed)", "( ) = excluded (open)", "∞ always gets ( )", "Use ∪ to join separate intervals"],
      workedExamples: [
        { problem: "Write {x: -3 < x ≤ 7} in interval notation.", steps: ["Left bound -3 excluded: (", "Right bound 7 included: ]", "(-3, 7]"], answer: "(-3, 7]" }
      ],
      tips: ["Infinity is never 'reached', so always use open brackets with ∞."],
      quiz: [
        { question: "[2, 5) means:", options: ["2 ≤ x < 5", "2 < x ≤ 5", "2 ≤ x ≤ 5", "2 < x < 5"], correctAnswer: 0, explanation: "[ = included, ) = excluded." },
        { question: "x > 3 in interval notation:", options: ["[3, ∞)", "(3, ∞)", "(3, ∞]", "[3, ∞]"], correctAnswer: 1, explanation: "Strictly greater: exclude 3 with (, ∞ always (." },
        { question: "(-∞, 1) ∪ (4, ∞) excludes:", options: ["x < 1", "1 ≤ x ≤ 4", "x > 4", "Nothing"], correctAnswer: 1, explanation: "The gap between the intervals is [1, 4]." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // SEQUENCES AND SERIES
  // ═══════════════════════════════════════════════════════════════
  "y11s-sequences-series": [
    {
      title: "Arithmetic Sequences and Series",
      explanation: "Arithmetic sequence: constant difference d. tₙ = a + (n-1)d.\n\nArithmetic series (sum): Sₙ = n/2(2a + (n-1)d) = n/2(first + last).\n\nProve properties using the general term formula.",
      keyPoints: ["tₙ = a + (n-1)d", "Sₙ = n/2(first + last)", "d = tₙ₊₁ - tₙ (constant)", "Can find a, d, n, or S from given info"],
      workedExamples: [
        { problem: "Find S₂₀ of 3, 7, 11, 15, …", steps: ["a = 3, d = 4, n = 20", "t₂₀ = 3 + 19(4) = 79", "S₂₀ = 20/2(3 + 79) = 10 × 82 = 820"], answer: "S₂₀ = 820" }
      ],
      tips: ["Two formulas for Sₙ — use whichever is more convenient with given information."],
      quiz: [
        { question: "t₁₀ of 5, 8, 11, …:", options: ["32", "35", "29", "38"], correctAnswer: 0, explanation: "t₁₀ = 5 + 9(3) = 32" },
        { question: "Sum 1+2+3+…+50:", options: ["1225", "1275", "2500", "2550"], correctAnswer: 1, explanation: "S = 50/2(1+50) = 1275" },
        { question: "d can be:", options: ["Only positive", "Only negative", "Any real number", "Only whole numbers"], correctAnswer: 2, explanation: "d can be positive, negative, or zero." }
      ]
    },
    {
      title: "Geometric Sequences and Series",
      explanation: "Geometric sequence: constant ratio r. tₙ = arⁿ⁻¹.\n\nGeometric series: Sₙ = a(rⁿ-1)/(r-1) when r ≠ 1.\n\nInfinite series (|r| < 1): S∞ = a/(1-r).",
      keyPoints: ["tₙ = arⁿ⁻¹", "Sₙ = a(rⁿ-1)/(r-1)", "S∞ = a/(1-r) when |r| < 1", "r = tₙ₊₁/tₙ (constant ratio)"],
      workedExamples: [
        { problem: "Find S∞ of 12, 6, 3, 1.5, …", steps: ["a = 12, r = 6/12 = 0.5", "|r| = 0.5 < 1 → converges", "S∞ = 12/(1-0.5) = 12/0.5 = 24"], answer: "S∞ = 24" }
      ],
      tips: ["Infinite sum only exists when |r| < 1."],
      quiz: [
        { question: "r of 2, 6, 18, 54:", options: ["3", "4", "2", "6"], correctAnswer: 0, explanation: "6/2 = 3" },
        { question: "S∞ exists when:", options: ["|r| > 1", "|r| = 1", "|r| < 1", "r > 0"], correctAnswer: 2, explanation: "Series converges only when |r| < 1." },
        { question: "S∞ of 1 + 1/2 + 1/4 + …:", options: ["1", "1.5", "2", "∞"], correctAnswer: 2, explanation: "a=1, r=1/2: 1/(1-0.5) = 2" }
      ]
    },
    {
      title: "Recurrence Relations",
      explanation: "A recurrence relation defines each term from previous terms. tₙ₊₁ = f(tₙ) with initial condition.\n\nFirst-order linear: tₙ₊₁ = atₙ + b. When a=1: arithmetic. When b=0: geometric.",
      keyPoints: ["Need starting value and rule", "First-order: depends on one previous term", "Second-order: depends on two previous terms (e.g., Fibonacci)", "Can model growth, decay, finance"],
      workedExamples: [
        { problem: "t₁ = 100, tₙ₊₁ = 0.9tₙ + 5. Find t₂, t₃.", steps: ["t₂ = 0.9(100) + 5 = 95", "t₃ = 0.9(95) + 5 = 90.5"], answer: "t₂ = 95, t₃ = 90.5" }
      ],
      tips: ["These model real situations: medicine dosage, loan repayments, population with migration."],
      quiz: [
        { question: "t₁ = 1, tₙ₊₁ = tₙ + 3. This is:", options: ["Geometric", "Arithmetic", "Fibonacci", "Quadratic"], correctAnswer: 1, explanation: "Adding constant → arithmetic." },
        { question: "Fibonacci: tₙ₊₂ = tₙ₊₁ + tₙ is:", options: ["First order", "Second order", "Third order", "Zero order"], correctAnswer: 1, explanation: "Depends on two previous terms → second order." },
        { question: "t₁=2, tₙ₊₁=3tₙ. t₃=", options: ["6", "18", "54", "8"], correctAnswer: 1, explanation: "t₂=6, t₃=18" }
      ]
    },
    {
      title: "Infinite Series and Convergence",
      explanation: "An infinite series is the sum of infinitely many terms. It converges if the partial sums approach a finite limit.\n\nGeometric: converges when |r| < 1 to S∞ = a/(1-r).\nDivergent: the sum grows without bound.",
      keyPoints: ["Convergent: partial sums approach a limit", "Divergent: partial sums grow without bound", "Geometric converges iff |r| < 1", "Telescoping series can also converge"],
      workedExamples: [
        { problem: "Does Σ(1/2ⁿ) from n=1 to ∞ converge?", steps: ["This is geometric: a = 1/2, r = 1/2", "|r| = 1/2 < 1 → converges", "S∞ = (1/2)/(1-1/2) = 1"], answer: "Converges to 1" }
      ],
      tips: ["Always check |r| < 1 before claiming a geometric series converges."],
      quiz: [
        { question: "Σ(2ⁿ) diverges because:", options: ["|r| < 1", "|r| > 1", "r = 1", "r = 0"], correctAnswer: 1, explanation: "r = 2 > 1 → diverges." },
        { question: "1 + 1/3 + 1/9 + … converges to:", options: ["3/2", "2", "3", "∞"], correctAnswer: 0, explanation: "a=1, r=1/3: 1/(1-1/3) = 1/(2/3) = 3/2" },
        { question: "A convergent series has a finite:", options: ["First term", "Common ratio", "Sum", "Number of terms"], correctAnswer: 2, explanation: "Convergent = finite sum (even with infinite terms)." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL ALGEBRA
  // ═══════════════════════════════════════════════════════════════
  "y11s-additional-algebra": [
    {
      title: "Polynomial Identities",
      explanation: "Key identities:\n(a+b)² = a² + 2ab + b²\n(a-b)² = a² - 2ab + b²\n(a+b)(a-b) = a² - b²\n(a+b)³ = a³ + 3a²b + 3ab² + b³\na³ + b³ = (a+b)(a² - ab + b²)\na³ - b³ = (a-b)(a² + ab + b²)",
      keyPoints: ["Perfect square expansions", "Difference/sum of squares and cubes", "Use to factorise and simplify", "Pascal's triangle for higher powers"],
      workedExamples: [
        { problem: "Factorise 8x³ - 27.", steps: ["= (2x)³ - 3³", "Difference of cubes: (2x-3)((2x)² + (2x)(3) + 3²)", "= (2x-3)(4x² + 6x + 9)"], answer: "(2x-3)(4x²+6x+9)" }
      ],
      tips: ["Recognise cube patterns: 8=2³, 27=3³, 64=4³, 125=5³."],
      quiz: [
        { question: "x³+1 = (x+1)(?):", options: ["x²+x+1", "x²-x+1", "x²+1", "(x+1)²"], correctAnswer: 1, explanation: "Sum of cubes: (a+b)(a²-ab+b²) with a=x, b=1." },
        { question: "(a+b)³ has how many terms?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "a³ + 3a²b + 3ab² + b³ = 4 terms." },
        { question: "(x-2)³ =", options: ["x³-8", "x³-6x²+12x-8", "x³-2x²+4x-8", "x³+6x²+12x+8"], correctAnswer: 1, explanation: "x³ - 3(x²)(2) + 3(x)(4) - 8 = x³-6x²+12x-8" }
      ]
    },
    {
      title: "Partial Fractions",
      explanation: "Partial fractions decompose a complex fraction into simpler ones.\n\nFor distinct linear factors: A/(x-a) + B/(x-b).\nFor repeated factors: A/(x-a) + B/(x-a)².\n\nMultiply through by the denominator and solve for A, B by substituting convenient values or comparing coefficients.",
      keyPoints: ["Factorise denominator first", "One fraction per factor", "Repeated factor: include all powers", "Solve for constants by substitution or comparison"],
      workedExamples: [
        { problem: "Express 5x+1/((x+1)(x-2)) in partial fractions.", steps: ["5x+1/((x+1)(x-2)) = A/(x+1) + B/(x-2)", "5x+1 = A(x-2) + B(x+1)", "x=2: 11 = 3B → B = 11/3", "x=-1: -4 = -3A → A = 4/3"], answer: "4/(3(x+1)) + 11/(3(x-2))" }
      ],
      tips: ["Substitute values that make factors zero — this eliminates unknowns one at a time."],
      quiz: [
        { question: "1/((x-1)(x+1)) decomposes into:", options: ["A/(x-1) + B/(x+1)", "A/(x²-1)", "A/x + B/1", "Can't decompose"], correctAnswer: 0, explanation: "One fraction per distinct linear factor." },
        { question: "For (x-3)², include:", options: ["A/(x-3) only", "A/(x-3) + B/(x-3)²", "A/(x-3)²only", "No decomposition"], correctAnswer: 1, explanation: "Repeated factor: include both powers." },
        { question: "To find A in A/(x-1) + B/(x+2):", options: ["Set x=0", "Set x=1", "Set x=-2", "Set x=A"], correctAnswer: 1, explanation: "x=1 eliminates B, leaving A alone." }
      ]
    },
    {
      title: "Inequalities with Absolute Values",
      explanation: "|x| = x if x ≥ 0, |x| = -x if x < 0. Distance interpretation: |x-a| is the distance from x to a.\n\n|x| < a means -a < x < a.\n|x| > a means x < -a or x > a.\n\nFor |f(x)| < g(x), solve -g(x) < f(x) < g(x).",
      keyPoints: ["|x| < a: -a < x < a", "|x| > a: x < -a or x > a", "|x-c| < d: c-d < x < c+d", "Square both sides to remove |  | (carefully)"],
      workedExamples: [
        { problem: "Solve |2x - 3| < 5.", steps: ["-5 < 2x - 3 < 5", "-2 < 2x < 8", "-1 < x < 4"], answer: "-1 < x < 4 or (-1, 4)" }
      ],
      tips: ["For < : AND (intersection). For > : OR (union)."],
      quiz: [
        { question: "|x| < 3 means:", options: ["x < 3", "x > -3", "-3 < x < 3", "x < -3 or x > 3"], correctAnswer: 2, explanation: "|x| < 3 → -3 < x < 3." },
        { question: "|x| > 5 means:", options: ["-5 < x < 5", "x > 5", "x < -5 or x > 5", "x = ±5"], correctAnswer: 2, explanation: "|x| > 5 → x < -5 or x > 5." },
        { question: "|x - 2| < 1 means:", options: ["1 < x < 3", "x > 1", "x < 3", "-1 < x < 1"], correctAnswer: 0, explanation: "-1 < x-2 < 1 → 1 < x < 3." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // PROOF
  // ═══════════════════════════════════════════════════════════════
  "y11s-proof": [
    {
      title: "Direct Proof",
      explanation: "A direct proof starts from known facts and uses logical steps to reach the conclusion.\n\nStructure: Assume hypothesis → Apply definitions/theorems → Arrive at conclusion.\n\nCommon techniques: algebraic manipulation, using definitions (even = 2k, odd = 2k+1).",
      keyPoints: ["Start with hypothesis", "Use definitions and known results", "Each step must follow logically", "State conclusion clearly"],
      workedExamples: [
        { problem: "Prove: the sum of two even numbers is even.", steps: ["Let 2a and 2b be even numbers", "Sum = 2a + 2b = 2(a+b)", "Since a+b is an integer, 2(a+b) is even"], answer: "Sum is even (QED)" }
      ],
      tips: ["Write 'Let' at the start and 'Therefore'/'QED' at the end."],
      quiz: [
        { question: "An even number can be written as:", options: ["2k+1", "2k", "k²", "k/2"], correctAnswer: 1, explanation: "Even = 2k for integer k." },
        { question: "Direct proof starts with:", options: ["Conclusion", "Hypothesis", "Contradiction", "Example"], correctAnswer: 1, explanation: "Assume the hypothesis, derive the conclusion." },
        { question: "Product of two odd numbers is:", options: ["Even", "Odd", "Could be either", "Zero"], correctAnswer: 1, explanation: "(2a+1)(2b+1) = 4ab+2a+2b+1 = 2(2ab+a+b)+1 → odd." }
      ]
    },
    {
      title: "Proof by Contradiction",
      explanation: "Assume the opposite of what you want to prove. Show this leads to a logical contradiction. Therefore the original statement must be true.\n\nClassic example: proving √2 is irrational.",
      keyPoints: ["Assume the negation", "Derive a contradiction", "Conclude original is true", "Useful for 'there is no…' or 'it's impossible…'"],
      workedExamples: [
        { problem: "Prove √2 is irrational.", steps: ["Assume √2 = p/q in lowest terms", "Then 2 = p²/q², so p² = 2q²", "p² is even → p is even → p = 2k", "4k² = 2q² → q² = 2k² → q is even", "Both p, q even contradicts 'lowest terms'"], answer: "√2 is irrational (by contradiction)" }
      ],
      tips: ["Clearly state what you're assuming and clearly identify the contradiction."],
      quiz: [
        { question: "Proof by contradiction assumes:", options: ["The statement is true", "The opposite is true", "Nothing", "A specific case"], correctAnswer: 1, explanation: "Assume the negation, then find a contradiction." },
        { question: "A contradiction proves:", options: ["The assumption is true", "The assumption is false", "Nothing", "Both sides"], correctAnswer: 1, explanation: "Contradiction → assumption must be wrong → original is true." },
        { question: "√3 irrational can be proved by:", options: ["Direct proof", "Contradiction", "Example", "Substitution"], correctAnswer: 1, explanation: "Same method as √2: assume rational, derive contradiction." }
      ]
    },
    {
      title: "Mathematical Induction",
      explanation: "Mathematical induction proves statements for all natural numbers n ≥ n₀.\n\nStep 1 (Base case): Show the statement is true for n = n₀.\nStep 2 (Inductive step): Assume true for n = k, prove true for n = k+1.\n\nConclusion: By induction, the statement holds for all n ≥ n₀.",
      keyPoints: ["Base case: verify for n = 1 (or n₀)", "Inductive hypothesis: assume for n = k", "Inductive step: prove for n = k+1", "Both steps required"],
      workedExamples: [
        { problem: "Prove: 1+2+…+n = n(n+1)/2 for all n ≥ 1.", steps: ["Base: n=1: LHS=1, RHS=1(2)/2=1 ✓", "Assume true for n=k: 1+2+…+k = k(k+1)/2", "For n=k+1: 1+2+…+k+(k+1) = k(k+1)/2 + (k+1)", "= (k+1)(k/2 + 1) = (k+1)(k+2)/2", "This is the formula with n=k+1 ✓"], answer: "Proved by induction for all n ≥ 1" }
      ],
      tips: ["The inductive step must use the inductive hypothesis — don't prove from scratch."],
      quiz: [
        { question: "Induction requires ___ steps:", options: ["1", "2", "3", "n"], correctAnswer: 1, explanation: "Base case and inductive step." },
        { question: "In the inductive step, we assume true for:", options: ["n = 1", "n = k", "n = k+1", "All n"], correctAnswer: 1, explanation: "Assume for k, prove for k+1." },
        { question: "Without a base case, induction:", options: ["Still works", "Is incomplete", "Proves nothing", "Only needs assumption"], correctAnswer: 2, explanation: "Both steps are essential; without base case, nothing is established." }
      ]
    },
    {
      title: "Proof by Contrapositive",
      explanation: "The contrapositive of 'if P then Q' is 'if not Q then not P'. They are logically equivalent.\n\nSometimes the contrapositive is easier to prove than the original statement.",
      keyPoints: ["P → Q ≡ ¬Q → ¬P", "Logically equivalent: proving one proves the other", "Useful when direct proof is difficult", "Different from converse (Q → P)"],
      workedExamples: [
        { problem: "Prove: if n² is odd, then n is odd.", steps: ["Contrapositive: if n is even, then n² is even", "n = 2k → n² = 4k² = 2(2k²)", "n² is even ✓", "Contrapositive proved → original proved"], answer: "Proved by contrapositive" }
      ],
      tips: ["The converse (Q→P) is NOT the same as the contrapositive (¬Q→¬P)."],
      quiz: [
        { question: "Contrapositive of 'if it rains, ground is wet':", options: ["If ground is wet, it rained", "If ground not wet, it didn't rain", "If no rain, ground is dry", "If dry, then rain"], correctAnswer: 1, explanation: "¬Q → ¬P: not wet → didn't rain." },
        { question: "Statement and contrapositive are:", options: ["Sometimes equivalent", "Always equivalent", "Never equivalent", "Converses"], correctAnswer: 1, explanation: "A statement and its contrapositive are logically equivalent." },
        { question: "Converse of P→Q is:", options: ["¬Q→¬P", "Q→P", "¬P→¬Q", "P↔Q"], correctAnswer: 1, explanation: "Converse swaps P and Q: Q→P." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LOGIC
  // ═══════════════════════════════════════════════════════════════
  "y11s-logic": [
    {
      title: "Boolean Algebra",
      explanation: "Boolean algebra deals with variables that are TRUE (1) or FALSE (0).\n\nOperations: AND (∧), OR (∨), NOT (¬).\n\nLaws: commutative, associative, distributive, De Morgan's laws:\n¬(A ∧ B) = ¬A ∨ ¬B\n¬(A ∨ B) = ¬A ∧ ¬B",
      keyPoints: ["AND (∧): both must be true", "OR (∨): at least one true", "NOT (¬): reverses truth value", "De Morgan's: distribute NOT, swap AND/OR"],
      workedExamples: [
        { problem: "Simplify: ¬(A ∧ ¬B)", steps: ["Apply De Morgan's: ¬A ∨ ¬(¬B)", "= ¬A ∨ B"], answer: "¬A ∨ B" }
      ],
      tips: ["De Morgan's: break the bar, change the sign (AND↔OR)."],
      quiz: [
        { question: "T AND F =", options: ["T", "F", "Undefined", "Both"], correctAnswer: 1, explanation: "AND requires both true; one is false → false." },
        { question: "¬(A ∨ B) =", options: ["¬A ∨ ¬B", "¬A ∧ ¬B", "A ∧ B", "A ∨ B"], correctAnswer: 1, explanation: "De Morgan's: NOT OR → AND with NOTs." },
        { question: "T OR F =", options: ["T", "F", "Undefined", "Neither"], correctAnswer: 0, explanation: "OR: at least one true → true." }
      ]
    },
    {
      title: "Truth Tables",
      explanation: "A truth table lists all possible combinations of inputs and the resulting output for a logical expression.\n\nFor n variables, there are 2ⁿ rows. Evaluate the expression for each combination.\n\nUseful for: verifying equivalences, checking tautologies, and analysing circuits.",
      keyPoints: ["2ⁿ rows for n variables", "List all T/F combinations", "Evaluate column by column", "Tautology: all true. Contradiction: all false"],
      workedExamples: [
        { problem: "Truth table for A ∧ (A ∨ B).", steps: ["A=T,B=T: T∧T=T", "A=T,B=F: T∧T=T", "A=F,B=T: F∧T=F", "A=F,B=F: F∧F=F"], answer: "Result column: T, T, F, F (same as A — this is absorption law)" }
      ],
      tips: ["Build complex expressions column by column, evaluating intermediate results."],
      quiz: [
        { question: "3 variables need ___ rows:", options: ["3", "6", "8", "9"], correctAnswer: 2, explanation: "2³ = 8 rows." },
        { question: "A tautology is:", options: ["Always false", "Always true", "Sometimes true", "Undefined"], correctAnswer: 1, explanation: "Every row is true." },
        { question: "How many rows for 2 variables?", options: ["2", "4", "8", "16"], correctAnswer: 1, explanation: "2² = 4 rows." }
      ]
    },
    {
      title: "Logical Equivalence and Implications",
      explanation: "Two expressions are logically equivalent if they have identical truth tables.\n\nImplication P → Q is false ONLY when P is true and Q is false.\nBiconditional P ↔ Q is true when P and Q have the same truth value.",
      keyPoints: ["P → Q: false only when P true, Q false", "P ↔ Q: true when both same", "Equivalence: same truth table", "Contrapositive: always equivalent to original"],
      workedExamples: [
        { problem: "When is P → Q false?", steps: ["P=T, Q=T: T→T = T", "P=T, Q=F: T→F = F ← only false case", "P=F, Q=T: F→T = T", "P=F, Q=F: F→F = T"], answer: "Only when P is true and Q is false" }
      ],
      tips: ["'If P then Q' is vacuously true when P is false."],
      quiz: [
        { question: "F → T =", options: ["T", "F", "Undefined", "F→T is invalid"], correctAnswer: 0, explanation: "Implication is false only when T→F." },
        { question: "P ↔ Q when P=T, Q=F:", options: ["T", "F", "Undefined", "Both"], correctAnswer: 1, explanation: "Biconditional needs same truth values." },
        { question: "Logical equivalence means:", options: ["Same variables", "Same truth table", "Same length", "Same letters"], correctAnswer: 1, explanation: "Identical truth tables = logically equivalent." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // ALGORITHMS AND PSEUDOCODE
  // ═══════════════════════════════════════════════════════════════
  "y11s-algorithms": [
    {
      title: "Flowcharts and Algorithm Design",
      explanation: "An algorithm is a step-by-step procedure to solve a problem. Flowcharts use standard symbols:\n\n• Oval: start/end\n• Rectangle: process/instruction\n• Diamond: decision (yes/no)\n• Parallelogram: input/output\n• Arrows: flow direction",
      keyPoints: ["Algorithms must be finite and unambiguous", "Flowchart symbols have specific meanings", "Decisions create branches", "Every path must lead to an end"],
      workedExamples: [
        { problem: "Describe a flowchart to find the larger of two numbers.", steps: ["Start", "Input A, B", "Decision: Is A > B?", "Yes → Output A", "No → Output B", "End"], answer: "Simple comparison flowchart with one decision" }
      ],
      tips: ["Always test your algorithm with specific values to verify it works."],
      quiz: [
        { question: "A diamond in a flowchart represents:", options: ["Input", "Process", "Decision", "Output"], correctAnswer: 2, explanation: "Diamonds are decision points (yes/no)." },
        { question: "An algorithm must be:", options: ["Infinite", "Ambiguous", "Finite and clear", "Complex"], correctAnswer: 2, explanation: "Must terminate and have unambiguous steps." },
        { question: "A rectangle represents:", options: ["Start/end", "Decision", "Process/calculation", "Input"], correctAnswer: 2, explanation: "Rectangles show processes or calculations." }
      ]
    },
    {
      title: "Iteration and Loops",
      explanation: "Iteration repeats a set of instructions. Two main types:\n\n• For loop: repeat a fixed number of times\n• While loop: repeat while a condition is true\n\nIterative algorithms are essential for sequences, searching, and sorting.",
      keyPoints: ["For loop: known number of repetitions", "While loop: unknown repetitions (condition-based)", "Counter variable tracks iterations", "Must avoid infinite loops"],
      workedExamples: [
        { problem: "Pseudocode to sum 1 to n.", steps: ["SET sum = 0", "FOR i = 1 TO n", "  sum = sum + i", "END FOR", "OUTPUT sum"], answer: "Iterative sum using a for loop" }
      ],
      tips: ["Always ensure your loop has a termination condition to avoid infinite loops."],
      quiz: [
        { question: "A while loop continues until:", options: ["A counter reaches max", "Its condition becomes false", "It runs out of memory", "The user stops it"], correctAnswer: 1, explanation: "While loop checks condition each iteration." },
        { question: "FOR i = 1 TO 5 runs ___ times:", options: ["4", "5", "6", "1"], correctAnswer: 1, explanation: "1, 2, 3, 4, 5 = 5 iterations." },
        { question: "An infinite loop is caused by:", options: ["Too few iterations", "Condition never false", "Using FOR instead of WHILE", "Large numbers"], correctAnswer: 1, explanation: "If the condition is always true, the loop never stops." }
      ]
    },
    {
      title: "Pseudocode for Mathematical Problems",
      explanation: "Pseudocode describes algorithms in structured English, not a specific programming language.\n\nCommon operations: IF-THEN-ELSE, FOR-NEXT, WHILE-END WHILE, INPUT, OUTPUT, SET.\n\nUseful for: GCD (Euclidean algorithm), primality testing, numerical methods.",
      keyPoints: ["Pseudocode is language-independent", "Use standard structures: IF, FOR, WHILE", "Variables store values", "Step through with trace tables to verify"],
      workedExamples: [
        { problem: "Pseudocode for Euclidean algorithm (GCD).", steps: ["INPUT a, b", "WHILE b ≠ 0", "  SET temp = b", "  SET b = a MOD b", "  SET a = temp", "END WHILE", "OUTPUT a"], answer: "GCD algorithm using modular arithmetic" }
      ],
      tips: ["Use trace tables (tracking variable values each step) to debug algorithms."],
      quiz: [
        { question: "a MOD b gives:", options: ["Quotient", "Remainder", "Product", "Difference"], correctAnswer: 1, explanation: "MOD returns the remainder of a ÷ b." },
        { question: "Pseudocode is:", options: ["A programming language", "Language-independent description", "Machine code", "A flowchart"], correctAnswer: 1, explanation: "Pseudocode describes logic without specific syntax." },
        { question: "A trace table tracks:", options: ["Errors only", "Variable values each step", "Memory usage", "Time taken"], correctAnswer: 1, explanation: "Trace tables show how variables change through execution." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // COMBINATORICS
  // ═══════════════════════════════════════════════════════════════
  "y11s-combinatorics": [
    {
      title: "Permutations",
      explanation: "A permutation is an ordered arrangement. The number of ways to arrange r items from n is:\n\nⁿPᵣ = n!/(n-r)!\n\nAll n items: n! arrangements.",
      keyPoints: ["Order matters in permutations", "ⁿPᵣ = n!/(n-r)!", "n! = n × (n-1) × … × 1", "0! = 1 by definition"],
      workedExamples: [
        { problem: "How many 3-letter arrangements from ABCDE?", steps: ["n=5, r=3", "⁵P₃ = 5!/2! = 5×4×3 = 60"], answer: "60 arrangements" }
      ],
      tips: ["If order matters (first, second, third), use permutations."],
      quiz: [
        { question: "⁴P₂ =", options: ["6", "8", "12", "24"], correctAnswer: 2, explanation: "4×3 = 12" },
        { question: "5! =", options: ["5", "25", "120", "720"], correctAnswer: 2, explanation: "5×4×3×2×1 = 120" },
        { question: "Arranging 3 books on a shelf uses:", options: ["Combinations", "Permutations", "Addition", "Neither"], correctAnswer: 1, explanation: "Order matters on a shelf → permutations." }
      ]
    },
    {
      title: "Combinations",
      explanation: "A combination is a selection where order doesn't matter.\n\nⁿCᵣ = n!/(r!(n-r)!)\n\nⁿCᵣ = ⁿCₙ₋ᵣ (choosing r is the same as leaving out n-r).",
      keyPoints: ["Order doesn't matter", "ⁿCᵣ = n!/(r!(n-r)!)", "ⁿCᵣ = ⁿCₙ₋ᵣ", "ⁿC₀ = ⁿCₙ = 1"],
      workedExamples: [
        { problem: "Choose 4 from 10 people for a committee.", steps: ["¹⁰C₄ = 10!/(4!×6!)", "= (10×9×8×7)/(4×3×2×1)", "= 5040/24 = 210"], answer: "210 ways" }
      ],
      tips: ["Committee/team/group → combinations. Arrangement/order → permutations."],
      quiz: [
        { question: "⁶C₂ =", options: ["12", "15", "30", "720"], correctAnswer: 1, explanation: "(6×5)/(2×1) = 15" },
        { question: "⁸C₈ =", options: ["0", "1", "8", "40320"], correctAnswer: 1, explanation: "Only one way to choose all 8." },
        { question: "⁷C₃ = ⁷C_?:", options: ["3", "4", "7", "0"], correctAnswer: 1, explanation: "⁷C₃ = ⁷C₄ (complementary)" }
      ]
    },
    {
      title: "Pascal's Triangle and Binomial Theorem",
      explanation: "Pascal's triangle gives binomial coefficients. Row n gives coefficients of (a+b)ⁿ.\n\nBinomial theorem: (a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ for r = 0 to n.\n\nEach entry = sum of two entries above it.",
      keyPoints: ["Row n: ⁿC₀, ⁿC₁, …, ⁿCₙ", "(a+b)ⁿ uses row n as coefficients", "Each entry = sum of two above", "Symmetric: ⁿCᵣ = ⁿCₙ₋ᵣ"],
      workedExamples: [
        { problem: "Expand (x+2)³ using binomial theorem.", steps: ["Coefficients from row 3: 1, 3, 3, 1", "(x+2)³ = 1·x³·2⁰ + 3·x²·2¹ + 3·x¹·2² + 1·x⁰·2³", "= x³ + 6x² + 12x + 8"], answer: "x³ + 6x² + 12x + 8" }
      ],
      tips: ["Row 0: 1. Row 1: 1,1. Row 2: 1,2,1. Row 3: 1,3,3,1. Row 4: 1,4,6,4,1."],
      quiz: [
        { question: "Row 4 of Pascal's triangle:", options: ["1,4,6,4,1", "1,3,3,1", "1,4,4,1", "1,5,10,10,5,1"], correctAnswer: 0, explanation: "Row 4: 1, 4, 6, 4, 1." },
        { question: "Coefficient of x² in (x+1)⁴:", options: ["4", "6", "1", "3"], correctAnswer: 1, explanation: "⁴C₂ = 6." },
        { question: "Sum of entries in row n:", options: ["n", "n²", "2ⁿ", "n!"], correctAnswer: 2, explanation: "Sum of row n = 2ⁿ (set a=b=1 in (a+b)ⁿ)." }
      ]
    },
    {
      title: "Combinatorics and Probability",
      explanation: "Combine counting techniques with probability:\nP(event) = favourable outcomes / total outcomes.\n\nUse permutations/combinations to count both numerator and denominator.",
      keyPoints: ["Count favourable using P or C", "Count total using P or C", "P = favourable / total", "Break complex events into cases"],
      workedExamples: [
        { problem: "5 cards from a standard 52-card deck. P(all hearts)?", steps: ["Favourable: ¹³C₅ = 1287 (choosing 5 hearts from 13)", "Total: ⁵²C₅ = 2598960", "P = 1287/2598960 ≈ 0.000495"], answer: "P ≈ 0.000495" }
      ],
      tips: ["For 'at least one' problems, use P(at least 1) = 1 - P(none)."],
      quiz: [
        { question: "P(choosing 2 aces from 4 in a hand of 5 from 52):", options: ["⁴C₂/⁵²C₅ only", "(⁴C₂ × ⁴⁸C₃)/⁵²C₅", "4/52 × 3/51", "2/52"], correctAnswer: 1, explanation: "Choose 2 aces AND 3 non-aces, divide by total hands." },
        { question: "P(at least 1) = 1 - P(?):", options: ["Exactly 1", "None", "All", "More than 1"], correctAnswer: 1, explanation: "Complement: at least 1 = 1 - none." },
        { question: "Order matters in probability when:", options: ["Never", "Dealing cards", "Arrangement matters", "Always"], correctAnswer: 2, explanation: "Use permutations when the order of selection matters." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // MATRICES
  // ═══════════════════════════════════════════════════════════════
  "y11s-matrices": [
    {
      title: "Matrix Operations Review",
      explanation: "Addition/subtraction: same order, element-wise. Scalar multiplication: multiply every element. Matrix multiplication: columns of A = rows of B.\n\nIdentity matrix I: AI = IA = A. Zero matrix O: A + O = A.",
      keyPoints: ["Add/subtract: same dimensions", "Multiply: inner dimensions match", "Identity: I acts like 1", "AB ≠ BA generally"],
      workedExamples: [
        { problem: "A = [[1,2],[3,4]], I = [[1,0],[0,1]]. Show AI = A.", steps: ["[[1(1)+2(0), 1(0)+2(1)],[3(1)+4(0), 3(0)+4(1)]]", "= [[1,2],[3,4]] = A ✓"], answer: "AI = A confirmed" }
      ],
      tips: ["The identity matrix has 1s on the diagonal and 0s elsewhere."],
      quiz: [
        { question: "I₃ is:", options: ["3×3 zeros", "3×3 with 1s on diagonal", "3×1 column", "1×3 row"], correctAnswer: 1, explanation: "Identity matrix: 1s on diagonal, 0s elsewhere." },
        { question: "A(BC) = (AB)C is:", options: ["Commutative", "Associative", "Distributive", "Not always true"], correctAnswer: 1, explanation: "Matrix multiplication is associative." },
        { question: "Can (3×2)(2×4) multiply?", options: ["No", "Yes, result 3×4", "Yes, result 2×2", "Yes, result 3×2"], correctAnswer: 1, explanation: "Inner dims match (2=2), result = 3×4." }
      ]
    },
    {
      title: "Determinants",
      explanation: "For a 2×2 matrix [[a,b],[c,d]], det = ad - bc.\n\nProperties: det(AB) = det(A)·det(B). If det = 0, the matrix is singular (no inverse).\n\nFor 3×3 matrices, use cofactor expansion along a row or column.",
      keyPoints: ["2×2: det = ad - bc", "det = 0 → singular (no inverse)", "det(AB) = det(A)·det(B)", "det(kA) = kⁿ·det(A) for n×n"],
      workedExamples: [
        { problem: "det of [[3, -1],[2, 5]]", steps: ["det = 3(5) - (-1)(2) = 15 + 2 = 17"], answer: "det = 17" }
      ],
      tips: ["Remember: main diagonal minus other diagonal for 2×2."],
      quiz: [
        { question: "det [[2,3],[1,4]] =", options: ["5", "11", "8", "-5"], correctAnswer: 0, explanation: "2(4) - 3(1) = 5" },
        { question: "det = 0 means:", options: ["Invertible", "Not invertible", "Identity", "Zero matrix"], correctAnswer: 1, explanation: "Singular matrix: no inverse exists." },
        { question: "det(2A) for 2×2 A with det(A)=3:", options: ["6", "12", "3", "8"], correctAnswer: 1, explanation: "det(kA) = k²·det(A) for 2×2: 4×3 = 12" }
      ]
    },
    {
      title: "Inverse Matrices and Systems",
      explanation: "A⁻¹ exists only if det(A) ≠ 0. For 2×2: A⁻¹ = (1/det)[[d,-b],[-c,a]].\n\nTo solve AX = B: X = A⁻¹B.\n\nThis method works for systems of linear equations written in matrix form.",
      keyPoints: ["A⁻¹ = (1/det)[[d,-b],[-c,a]] for 2×2", "AX = B → X = A⁻¹B", "Check: AA⁻¹ = I", "No inverse if det = 0"],
      workedExamples: [
        { problem: "Solve: 2x + y = 5, 3x + 2y = 8 using matrices.", steps: ["A = [[2,1],[3,2]], B = [[5],[8]]", "det = 4-3 = 1", "A⁻¹ = [[2,-1],[-3,2]]", "X = A⁻¹B = [[2(5)+(-1)(8)],[(-3)(5)+2(8)]] = [[2],[1]]"], answer: "x = 2, y = 1" }
      ],
      tips: ["Matrix method is efficient for 2×2 and essential for larger systems."],
      quiz: [
        { question: "Inverse of [[1,0],[0,1]] is:", options: ["[[0,1],[1,0]]", "[[1,0],[0,1]]", "[[-1,0],[0,-1]]", "Doesn't exist"], correctAnswer: 1, explanation: "Identity is its own inverse." },
        { question: "To solve AX = B, multiply both sides by:", options: ["A", "B", "A⁻¹ (on left)", "B⁻¹"], correctAnswer: 2, explanation: "A⁻¹AX = A⁻¹B → IX = A⁻¹B → X = A⁻¹B" },
        { question: "If det(A) = 0, the system has:", options: ["Unique solution", "No solution or infinite", "Two solutions", "Always infinite"], correctAnswer: 1, explanation: "Singular → either no solution or infinitely many." }
      ]
    },
    {
      title: "Matrix Transformations",
      explanation: "2×2 matrices can represent geometric transformations:\n• Rotation by θ: [[cosθ, -sinθ],[sinθ, cosθ]]\n• Reflection in x-axis: [[1,0],[0,-1]]\n• Dilation by k: [[k,0],[0,k]]\n\nApply by multiplying: new point = M × old point.",
      keyPoints: ["Transformation = matrix × position vector", "Rotation, reflection, dilation all have standard matrices", "Composition: apply M₂ after M₁ = M₂M₁", "det gives area scale factor"],
      workedExamples: [
        { problem: "Rotate (3, 1) by 90° anticlockwise.", steps: ["M = [[0,-1],[1,0]]", "[[0,-1],[1,0]][[3],[1]] = [[-1],[3]]"], answer: "New point: (-1, 3)" }
      ],
      tips: ["The order of matrix multiplication matters — last transformation goes first."],
      quiz: [
        { question: "Reflection in y-axis matrix:", options: ["[[1,0],[0,-1]]", "[[-1,0],[0,1]]", "[[0,1],[1,0]]", "[[0,-1],[1,0]]"], correctAnswer: 1, explanation: "Negates x: [[-1,0],[0,1]]." },
        { question: "|det| of transformation matrix gives:", options: ["Angle", "Area scale factor", "Length", "Number of reflections"], correctAnswer: 1, explanation: "|det| = factor by which areas are scaled." },
        { question: "Two transformations M₁ then M₂ gives:", options: ["M₁M₂", "M₂M₁", "M₁+M₂", "M₁-M₂"], correctAnswer: 1, explanation: "Apply M₁ first, then M₂: result = M₂M₁." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // GRAPH THEORY
  // ═══════════════════════════════════════════════════════════════
  "y11s-graph-theory": [
    {
      title: "Euler Circuits and Paths",
      explanation: "An Euler path traverses every edge exactly once. An Euler circuit does so and returns to the start.\n\nEuler circuit: all vertices even degree. Euler path: exactly 2 odd-degree vertices.",
      keyPoints: ["All even → Euler circuit", "Exactly 2 odd → Euler path", "Other → neither", "Count odd-degree vertices first"],
      workedExamples: [
        { problem: "Graph with degrees: A=4, B=2, C=3, D=3, E=2. Euler path/circuit?", steps: ["Odd-degree: C(3), D(3) = 2 vertices", "Exactly 2 odd → Euler path exists", "Start at C (or D), end at D (or C)"], answer: "Euler path exists (C to D or D to C)" }
      ],
      tips: ["Quick check: count odd-degree vertices. 0→circuit, 2→path, other→neither."],
      quiz: [
        { question: "Degrees: all even. Exists:", options: ["Euler path only", "Euler circuit", "Neither", "Both separately"], correctAnswer: 1, explanation: "All even → Euler circuit." },
        { question: "3 odd-degree vertices:", options: ["Euler path", "Euler circuit", "Neither", "Hamiltonian"], correctAnswer: 2, explanation: "Need 0 or 2 odd vertices." },
        { question: "Euler path uses every:", options: ["Vertex once", "Edge once", "Path once", "Vertex and edge once"], correctAnswer: 1, explanation: "Every edge exactly once." }
      ]
    },
    {
      title: "Hamiltonian Paths and Cycles",
      explanation: "A Hamiltonian path visits every vertex exactly once. A Hamiltonian cycle does so and returns to the start.\n\nUnlike Euler paths, there's no simple theorem to determine existence. Often requires systematic trial or clever reasoning.",
      keyPoints: ["Visit every vertex exactly once", "Edges may be skipped", "No simple existence theorem", "Related to Travelling Salesman Problem"],
      workedExamples: [
        { problem: "Square graph ABCD with diagonal AC. Find a Hamiltonian cycle.", steps: ["Try: A→B→C→D→A", "Visits all vertices once and returns ✓"], answer: "A-B-C-D-A is a Hamiltonian cycle" }
      ],
      tips: ["Try different starting points and paths systematically."],
      quiz: [
        { question: "Hamiltonian path visits every:", options: ["Edge once", "Vertex once", "Both once", "Neither"], correctAnswer: 1, explanation: "Every vertex exactly once." },
        { question: "Euler vs Hamiltonian:", options: ["Same thing", "Euler=edges, Hamiltonian=vertices", "Euler=vertices, Hamiltonian=edges", "Both are edges"], correctAnswer: 1, explanation: "Euler: every edge. Hamiltonian: every vertex." },
        { question: "Travelling Salesman relates to:", options: ["Euler circuits", "Hamiltonian cycles", "Spanning trees", "Shortest paths"], correctAnswer: 1, explanation: "TSP seeks minimum-weight Hamiltonian cycle." }
      ]
    },
    {
      title: "Planar Graphs and Euler's Formula",
      explanation: "A planar graph can be drawn without edges crossing. Euler's formula for connected planar graphs:\n\nV - E + F = 2\n\nwhere V = vertices, E = edges, F = faces (regions, including the outer infinite region).",
      keyPoints: ["Planar: can draw without crossings", "V - E + F = 2 (Euler's formula)", "F includes the outer face", "K₅ and K₃,₃ are not planar"],
      workedExamples: [
        { problem: "A planar graph has 6 vertices and 9 edges. How many faces?", steps: ["V - E + F = 2", "6 - 9 + F = 2", "F = 5"], answer: "5 faces" }
      ],
      tips: ["Remember to count the outer (unbounded) region as a face."],
      quiz: [
        { question: "V=4, E=6, F=? (planar):", options: ["2", "4", "6", "8"], correctAnswer: 1, explanation: "4 - 6 + F = 2 → F = 4" },
        { question: "Euler's formula: V - E + F =", options: ["0", "1", "2", "3"], correctAnswer: 2, explanation: "V - E + F = 2 for connected planar graphs." },
        { question: "K₅ (complete graph on 5 vertices) is:", options: ["Planar", "Not planar", "A tree", "Bipartite"], correctAnswer: 1, explanation: "K₅ cannot be drawn without crossings." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // VECTORS IN THE PLANE
  // ═══════════════════════════════════════════════════════════════
  "y11s-vectors": [
    {
      title: "Vector Components and Operations",
      explanation: "A vector has magnitude and direction. In 2D, a vector can be written as (x, y) or xi + yj.\n\nAddition: (a,b) + (c,d) = (a+c, b+d). Scalar multiplication: k(a,b) = (ka, kb).\nMagnitude: |v| = √(x² + y²).",
      keyPoints: ["Vector = magnitude + direction", "Components: (x, y) or xi + yj", "Add: component-wise", "|v| = √(x² + y²)"],
      workedExamples: [
        { problem: "u = (3, 4). Find |u| and 2u.", steps: ["|u| = √(9+16) = √25 = 5", "2u = (6, 8)"], answer: "|u| = 5, 2u = (6, 8)" }
      ],
      tips: ["Vectors are equal if they have the same components, regardless of starting point."],
      quiz: [
        { question: "|(3, 4)| =", options: ["7", "5", "25", "12"], correctAnswer: 1, explanation: "√(9+16) = √25 = 5" },
        { question: "(2,3) + (4,-1) =", options: ["(6,2)", "(8,-3)", "(2,4)", "(-2,4)"], correctAnswer: 0, explanation: "(2+4, 3+(-1)) = (6, 2)" },
        { question: "Unit vector has magnitude:", options: ["0", "1", "Any", "2"], correctAnswer: 1, explanation: "Unit vector: |v| = 1." }
      ]
    },
    {
      title: "Scalar (Dot) Product",
      explanation: "The scalar product (dot product) of a = (a₁,a₂) and b = (b₁,b₂):\n\na · b = a₁b₁ + a₂b₂ = |a||b|cos θ\n\nwhere θ is the angle between them.\n\nKey result: a · b = 0 if and only if a ⊥ b (perpendicular).",
      keyPoints: ["a · b = a₁b₁ + a₂b₂", "a · b = |a||b|cos θ", "a · b = 0 ↔ perpendicular", "a · a = |a|²"],
      workedExamples: [
        { problem: "a = (1, 3), b = (4, -2). Find a · b and determine if perpendicular.", steps: ["a · b = 1(4) + 3(-2) = 4 - 6 = -2", "Not zero → not perpendicular", "cos θ = -2/(√10 × √20) = -2/√200"], answer: "a · b = -2, not perpendicular" }
      ],
      tips: ["If dot product = 0, vectors are perpendicular (90° angle)."],
      quiz: [
        { question: "(2,1) · (3,4) =", options: ["10", "11", "14", "6"], correctAnswer: 0, explanation: "2(3) + 1(4) = 10" },
        { question: "a · b = 0 means:", options: ["Parallel", "Perpendicular", "Equal", "Zero vector"], correctAnswer: 1, explanation: "Zero dot product → 90° angle." },
        { question: "(1,0) · (0,1) =", options: ["1", "0", "2", "-1"], correctAnswer: 1, explanation: "1(0) + 0(1) = 0 (i and j are perpendicular)." }
      ]
    },
    {
      title: "Vector Projections and Applications",
      explanation: "The scalar projection of a onto b: proj = (a · b)/|b|.\nThe vector projection: proj_b(a) = ((a · b)/|b|²) × b.\n\nApplications: resolving forces, work done (W = F · d), and navigation.",
      keyPoints: ["Scalar projection: (a·b)/|b|", "Vector projection: ((a·b)/(b·b)) × b", "Work = F · d (dot product)", "Resolve into components along given directions"],
      workedExamples: [
        { problem: "Force F = (6, 4) moves object along d = (3, 0). Work done?", steps: ["W = F · d = 6(3) + 4(0) = 18"], answer: "Work = 18 units" }
      ],
      tips: ["Work is the component of force in the direction of displacement."],
      quiz: [
        { question: "Work done = F · d. If F ⊥ d:", options: ["Maximum work", "Zero work", "Negative work", "Infinite work"], correctAnswer: 1, explanation: "F · d = 0 when perpendicular." },
        { question: "Projection of (4,3) onto (1,0):", options: ["(4,0)", "(0,3)", "(4,3)", "(3,4)"], correctAnswer: 0, explanation: "Component along x-axis: 4. Vector: (4,0)." },
        { question: "Scalar projection is:", options: ["A vector", "A number", "A matrix", "An angle"], correctAnswer: 1, explanation: "Scalar projection gives a number (length along direction)." }
      ]
    },
    {
      title: "Geometric Applications of Vectors",
      explanation: "Vectors solve geometric problems:\n• Midpoint: M = (A + B)/2\n• Position vector: P = A + t(B - A) for points on line AB\n• Parallel vectors: a = kb for some scalar k\n• Prove properties using vector algebra",
      keyPoints: ["Midpoint: (A+B)/2", "Line through A and B: r = A + t(B-A)", "Parallel: one is scalar multiple of other", "Triangle rule: AB + BC = AC"],
      workedExamples: [
        { problem: "A = (1,2), B = (5,8). Find midpoint and parametric equation of line AB.", steps: ["M = ((1+5)/2, (2+8)/2) = (3, 5)", "Direction: B-A = (4, 6)", "Line: r = (1,2) + t(4,6)"], answer: "Midpoint (3,5), line: r = (1,2) + t(4,6)" }
      ],
      tips: ["t=0 gives point A, t=1 gives point B, t=0.5 gives midpoint."],
      quiz: [
        { question: "Midpoint of (0,0) and (6,4):", options: ["(3,2)", "(6,4)", "(0,0)", "(12,8)"], correctAnswer: 0, explanation: "((0+6)/2, (0+4)/2) = (3,2)" },
        { question: "Vectors (2,4) and (1,2) are:", options: ["Perpendicular", "Parallel", "Equal", "Opposite"], correctAnswer: 1, explanation: "(2,4) = 2(1,2) → parallel." },
        { question: "AB + BC =", options: ["BA", "AC", "CA", "0"], correctAnswer: 1, explanation: "Triangle rule: A to B to C = A to C." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // COMPLEX NUMBERS
  // ═══════════════════════════════════════════════════════════════
  "y11s-complex-numbers": [
    {
      title: "Introduction to Complex Numbers",
      explanation: "Complex numbers extend the reals by defining i = √(-1), so i² = -1.\n\nA complex number: z = a + bi where a = real part (Re(z)), b = imaginary part (Im(z)).\n\nOperations follow normal algebra with i² = -1.",
      keyPoints: ["i = √(-1), i² = -1", "z = a + bi (a real, b imaginary part)", "Add/subtract: combine real and imaginary separately", "Multiply: use FOIL, replace i² with -1"],
      workedExamples: [
        { problem: "(3 + 2i)(1 - 4i)", steps: ["= 3(1) + 3(-4i) + 2i(1) + 2i(-4i)", "= 3 - 12i + 2i - 8i²", "= 3 - 10i - 8(-1)", "= 3 - 10i + 8 = 11 - 10i"], answer: "11 - 10i" }
      ],
      tips: ["Always replace i² with -1 and simplify."],
      quiz: [
        { question: "i² =", options: ["1", "-1", "i", "-i"], correctAnswer: 1, explanation: "By definition, i² = -1." },
        { question: "(2+3i) + (4-i) =", options: ["6+2i", "6+4i", "6-2i", "2+4i"], correctAnswer: 0, explanation: "(2+4) + (3-1)i = 6+2i" },
        { question: "Real part of 5-7i:", options: ["7", "-7", "5", "5i"], correctAnswer: 2, explanation: "Re(5-7i) = 5" }
      ]
    },
    {
      title: "Argand Diagrams and Modulus",
      explanation: "An Argand diagram plots complex numbers on a plane: x-axis = real, y-axis = imaginary.\n\nModulus: |z| = √(a² + b²) (distance from origin).\nConjugate: z̄ = a - bi (reflect in real axis).\n\nKey property: z × z̄ = |z|² = a² + b².",
      keyPoints: ["Argand plane: horizontal = real, vertical = imaginary", "|z| = √(a² + b²)", "Conjugate z̄: negate imaginary part", "z·z̄ = |z|²"],
      workedExamples: [
        { problem: "z = 3 + 4i. Find |z| and z̄.", steps: ["|z| = √(9+16) = √25 = 5", "z̄ = 3 - 4i", "z·z̄ = (3+4i)(3-4i) = 9-16i² = 9+16 = 25 = |z|² ✓"], answer: "|z| = 5, z̄ = 3-4i" }
      ],
      tips: ["The conjugate is essential for dividing complex numbers: multiply top and bottom by the conjugate."],
      quiz: [
        { question: "|1+i| =", options: ["1", "2", "√2", "√3"], correctAnswer: 2, explanation: "√(1+1) = √2" },
        { question: "Conjugate of 2-5i:", options: ["2+5i", "-2+5i", "-2-5i", "5-2i"], correctAnswer: 0, explanation: "Negate imaginary: 2+5i." },
        { question: "z·z̄ always gives:", options: ["A complex number", "A real number", "Zero", "An imaginary number"], correctAnswer: 1, explanation: "z·z̄ = a²+b² which is always real." }
      ]
    },
    {
      title: "Polar Form of Complex Numbers",
      explanation: "Polar form: z = r(cos θ + i sin θ) = r cis θ, where r = |z| and θ = arg(z) (argument).\n\nConvert: r = √(a²+b²), θ = tan⁻¹(b/a) (adjust for quadrant).\n\nMultiplication in polar: r₁ cis θ₁ × r₂ cis θ₂ = r₁r₂ cis(θ₁+θ₂).",
      keyPoints: ["z = r cis θ = r(cos θ + i sin θ)", "r = |z|, θ = arg(z)", "Multiply: multiply moduli, add arguments", "Divide: divide moduli, subtract arguments"],
      workedExamples: [
        { problem: "Convert z = 1 + i to polar form.", steps: ["r = √(1+1) = √2", "θ = tan⁻¹(1/1) = π/4 (Q1)", "z = √2 cis(π/4)"], answer: "z = √2 cis(π/4)" }
      ],
      tips: ["Always check the quadrant when finding θ — tan⁻¹ alone may give wrong quadrant."],
      quiz: [
        { question: "Polar form of -1:", options: ["1 cis 0", "1 cis π", "1 cis π/2", "-1 cis 0"], correctAnswer: 1, explanation: "r=1, θ=π (on negative real axis)." },
        { question: "2 cis 30° × 3 cis 60° =", options: ["6 cis 90°", "5 cis 90°", "6 cis 30°", "6 cis 1800°"], correctAnswer: 0, explanation: "Multiply moduli (6), add angles (90°)." },
        { question: "arg(i) =", options: ["0", "π/4", "π/2", "π"], correctAnswer: 2, explanation: "i = 0+1i is on positive imaginary axis: θ = π/2." }
      ]
    },
    {
      title: "De Moivre's Theorem and Applications",
      explanation: "De Moivre's Theorem: (r cis θ)ⁿ = rⁿ cis(nθ).\n\nThis makes powers of complex numbers easy in polar form. It also helps find nth roots:\n\nThe nth roots of z form a regular n-gon on the Argand diagram.",
      keyPoints: ["(r cis θ)ⁿ = rⁿ cis(nθ)", "Useful for powers and roots", "nth roots: n equally spaced points on a circle", "Roots of unity: solutions to zⁿ = 1"],
      workedExamples: [
        { problem: "Find (1+i)⁶.", steps: ["1+i = √2 cis(π/4)", "(√2)⁶ cis(6π/4) = 8 cis(3π/2)", "= 8(cos(3π/2) + i sin(3π/2))", "= 8(0 + i(-1)) = -8i"], answer: "(1+i)⁶ = -8i" }
      ],
      tips: ["Convert to polar form first, then apply De Moivre's — much easier than expanding."],
      quiz: [
        { question: "(cis π/6)⁶ =", options: ["cis π", "cis 6", "1", "-1"], correctAnswer: 0, explanation: "cis(6 × π/6) = cis π = -1. Wait, cis π = -1, so answer is cis π which equals -1." },
        { question: "Cube roots of 8:", options: ["2 only", "2, 2cis(2π/3), 2cis(4π/3)", "-2 only", "2 and -2"], correctAnswer: 1, explanation: "Three cube roots equally spaced on circle of radius 2." },
        { question: "De Moivre's works best in:", options: ["Rectangular form", "Polar form", "Either form", "Matrix form"], correctAnswer: 1, explanation: "Polar form makes the theorem straightforward." }
      ]
    }
  ]
};
