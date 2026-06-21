import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Appendices A and B
// Pseudocode (A) and Counting / Summation / Binomial Theorem (B).

export const year12MethodsAppendixLessons: TopicLessonsMap = {
  // ─── A1: Introduction to Pseudocode ────────────────────────────────
  "y12m-appA-a1-intro": [
    {
      title: "Introduction to Pseudocode",
      explanation:
        "PSEUDOCODE is a semi-formal language used in VCE Methods to express algorithms. It uses plain English combined with standard control structures. You are not required to write pseudocode in any specific programming language — you just need to READ, TRACE, and reason about it.\n\nCORE CONSTRUCTS:\n  • ASSIGNMENT: x ← 5 (read 'x is set to 5').\n  • SEQUENCE: statements run top to bottom.\n  • CONDITIONALS: if … then … else … end if.\n  • LOOPS:\n      - for i from a to b do … end for (executes for i = a, a+1, …, b inclusive).\n      - while condition do … end while.\n  • FUNCTIONS: define f(x) = …; return value.\n\nTRACING TECHNIQUE:\n  1. Make a table of all variables.\n  2. After EACH line that changes a variable, update the table.\n  3. Stop when the loop condition fails or the function returns.\n\nKEY ALGORITHMS IN METHODS:\n  • Bisection method — halve the interval until f(c) ≈ 0.\n  • Newton's method — iterate x_{n+1} = x_n − f(x_n)/f'(x_n).\n  • Cumulative probability sums.\n  • Linear search of a list.",
      keyPoints: [
        "← is assignment, not equality",
        "for-loops are inclusive of both endpoints",
        "Tracing requires a variable table",
        "Algorithms are MATH first, syntax second",
      ],
      workedExamples: [
        {
          problem:
            "Trace: s ← 0; for i from 1 to 4 do s ← s + i; end for; return s.",
          steps: [
            "i = 1: s = 1",
            "i = 2: s = 3",
            "i = 3: s = 6",
            "i = 4: s = 10",
          ],
          answer: "Returns 10.",
        },
        {
          problem:
            "Newton iteration for f(x) = x² − 2 starting at x₀ = 1: compute x₁ and x₂.",
          steps: [
            "f'(x) = 2x; x₁ = 1 − (1 − 2)/(2·1) = 1 + 0.5 = 1.5",
            "x₂ = 1.5 − (2.25 − 2)/(3) = 1.5 − 0.0833... ≈ 1.4167",
          ],
          answer: "x₁ = 1.5; x₂ ≈ 1.4167.",
        },
        {
          problem:
            "Bisection on f(x) = x³ − 4 with a = 1, b = 2. After one iteration, what is the new interval?",
          steps: [
            "c = 1.5; f(1.5) = 3.375 − 4 = −0.625 < 0",
            "f(2) > 0, so root in (1.5, 2)",
          ],
          answer: "(1.5, 2).",
        },
      ],
      tips: [
        "Always pre-compute f' before Newton's iteration",
        "Use exact fractions when tracing — rounding hides arithmetic errors",
      ],
      definitions: [
        { term: "Algorithm", meaning: "A finite, ordered sequence of unambiguous steps that solves a problem." },
        { term: "Pseudocode", meaning: "Language-independent description of an algorithm." },
        { term: "Assignment", meaning: "Storing a value into a variable: x ← value." },
      ],
      formulas: [
        { name: "Newton iteration", formula: "x_{n+1} = x_n − f(x_n)/f'(x_n)" },
        { name: "Bisection midpoint", formula: "c = (a + b)/2" },
      ],
      examQuestion: {
        problem:
          "Trace: x ← 1; while x < 20 do x ← 2x; end while; return x.",
        solution: [
          "x: 1 → 2 → 4 → 8 → 16 (still < 20) → 32 (now ≥ 20, exit)",
        ],
        answer: "32.",
        marks: 2,
      },
      commonErrors: [
        "Using = instead of ← (or treating ← as comparison)",
        "Confusing for-loop bounds (inclusive vs exclusive)",
        "Returning inside a loop accidentally",
      ],
      summary: [
        "Pseudocode is math expressed step-by-step — translate it back to math when solving",
      ],
      practice: [
        { question: "for i from 1 to 5: sum i. Result?", answer: "15" },
        { question: "Newton on f(x) = x² − 9, x₀ = 4: x₁?", answer: "x₁ = 4 − 7/8 = 25/8 ≈ 3.125" },
      ],
      quiz: [
        {
          question: "x ← 5 means:",
          options: ["x equals 5", "Compare x and 5", "Assign 5 to x", "Print 5"],
          correctAnswer: 2,
          explanation: "← is the assignment operator.",
        },
        {
          question: "Newton's method requires:",
          options: ["Two starting points", "f and f' and one starting point", "An interval where f changes sign", "Sketching only"],
          correctAnswer: 1,
          explanation: "Single point + derivative.",
        },
        {
          question: "Bisection requires:",
          options: ["f differentiable", "f continuous and a sign change", "f linear", "f quadratic"],
          correctAnswer: 1,
          explanation: "Intermediate value theorem.",
        },
      ],
    },
  ],

  // ─── B1: Counting Methods ──────────────────────────────────────────
  "y12m-appB-b1-counting": [
    {
      title: "Counting Methods — Permutations and Combinations",
      explanation:
        "Counting methods underpin probability calculations. Two foundational principles:\n\nMULTIPLICATION PRINCIPLE: If task A can be done in m ways and task B in n ways, then both can be done in m·n ways.\n\nADDITION PRINCIPLE: If A can be done in m ways and B in n ways, and the choices are mutually exclusive, then A or B can be done in m + n ways.\n\nKEY FORMULAS:\n  • PERMUTATIONS (order matters): nPr = n! / (n − r)!\n  • COMBINATIONS (order doesn't matter): nCr = C(n, r) = n! / (r!(n − r)!)\n  • Permutations of n DISTINCT objects: n!\n  • Permutations with REPETITION (n objects with k₁ of type 1, k₂ of type 2, …): n!/(k₁!·k₂!·…)\n  • Circular arrangements of n distinct objects: (n − 1)!\n\nCONNECTION TO BINOMIAL: The coefficient C(n, k) in the binomial expansion equals the number of ways to choose k successes from n trials, which is why it appears in P(X = k) for X ~ Bi(n, p).",
      keyPoints: [
        "Multiplication for AND; addition for OR (mutually exclusive)",
        "Permutations care about order; combinations do not",
        "C(n, k) = C(n, n − k)",
        "Use repetition formula for items with identical copies",
      ],
      workedExamples: [
        {
          problem:
            "How many 3-letter codes can be formed from {A, B, C, D, E} without repetition?",
          steps: [
            "Order matters; permutations: 5P3 = 5·4·3 = 60",
          ],
          answer: "60.",
        },
        {
          problem:
            "From 10 students, choose a committee of 4. How many committees?",
          steps: [
            "Order doesn't matter: C(10, 4) = 10!/(4!·6!) = 210",
          ],
          answer: "210.",
        },
        {
          problem:
            "How many distinct arrangements of the letters in MISSISSIPPI?",
          steps: [
            "11 letters: M(1), I(4), S(4), P(2)",
            "11!/(1!·4!·4!·2!) = 39 916 800/(24·24·2) = 34 650",
          ],
          answer: "34 650.",
        },
      ],
      tips: [
        "Decide order first: matters → permutation; doesn't → combination",
        "Identify items with identical copies and divide by their factorials",
      ],
      definitions: [
        { term: "Permutation", meaning: "An ordered arrangement of distinct items." },
        { term: "Combination", meaning: "An unordered selection of items." },
      ],
      formulas: [
        { name: "Permutations", formula: "nPr = n!/(n−r)!" },
        { name: "Combinations", formula: "nCr = n!/(r!(n−r)!)" },
        { name: "Repetition", formula: "n!/(k₁!·k₂!·…·k_m!)" },
      ],
      examQuestion: {
        problem:
          "From a standard deck of 52 cards, how many 5-card poker hands are possible?",
        solution: [
          "Order doesn't matter: C(52, 5) = 2 598 960",
        ],
        answer: "2 598 960.",
        marks: 2,
      },
      commonErrors: [
        "Using permutation when combination is needed",
        "Forgetting to divide by repetitions",
        "Confusing 'and' (multiply) with 'or' (add)",
      ],
      summary: [
        "Counting reduces complex enumeration to a few standard formulas",
      ],
      practice: [
        { question: "How many ways to arrange 6 books?", answer: "720" },
        { question: "C(8, 3)?", answer: "56" },
      ],
      quiz: [
        {
          question: "C(7, 2) =",
          options: ["14", "21", "42", "5040"],
          correctAnswer: 1,
          explanation: "7·6/2 = 21.",
        },
        {
          question: "Number of arrangements of LETTERS:",
          options: ["7!", "7!/2", "7!/(2!·2!)", "7!/3!"],
          correctAnswer: 2,
          explanation: "T appears twice, E appears twice → divide by 2!·2!.",
        },
        {
          question: "Choose 'order matters' formula:",
          options: ["nCr", "nPr", "n!", "n^r"],
          correctAnswer: 1,
          explanation: "Permutations.",
        },
      ],
    },
  ],

  // ─── B2: Summation Notation ────────────────────────────────────────
  "y12m-appB-b2-summation": [
    {
      title: "Summation Notation",
      explanation:
        "SIGMA NOTATION provides a compact way to write sums:\n  Σ_{i=a}^{b} f(i) = f(a) + f(a+1) + … + f(b).\n\nThe lower limit a is the STARTING INDEX; the upper limit b is the END INDEX; f(i) is the SUMMAND. The number of terms is (b − a + 1).\n\nKEY PROPERTIES:\n  • Σ (f(i) + g(i)) = Σ f(i) + Σ g(i).\n  • Σ c·f(i) = c·Σ f(i) for constant c.\n  • Σ_{i=1}^{n} c = n·c (sum of a constant).\n\nSTANDARD CLOSED-FORM SUMS (often quoted on exam reference sheets):\n  • Σ_{i=1}^{n} i = n(n + 1)/2\n  • Σ_{i=1}^{n} i² = n(n + 1)(2n + 1)/6\n  • Σ_{i=1}^{n} i³ = (n(n + 1)/2)²\n\nGEOMETRIC SUM:\n  Σ_{i=0}^{n-1} ar^i = a(1 − r^n)/(1 − r),  r ≠ 1.\n\nAPPLICATION: Sigma notation appears in Riemann sum approximations of integrals, in expected value formulas for discrete distributions, and in the binomial theorem (next section).",
      keyPoints: [
        "Σ is just shorthand for repeated addition",
        "Linearity: pull out constants and split sums",
        "Memorise sums of i, i², i³",
        "Number of terms = upper − lower + 1",
      ],
      workedExamples: [
        {
          problem:
            "Evaluate Σ_{i=1}^{5} (2i + 3).",
          steps: [
            "= 2·Σi + Σ3 = 2·(5·6/2) + 5·3 = 30 + 15 = 45",
          ],
          answer: "45.",
        },
        {
          problem:
            "Evaluate Σ_{i=1}^{10} i².",
          steps: [
            "= 10·11·21/6 = 2310/6 = 385",
          ],
          answer: "385.",
        },
        {
          problem:
            "Evaluate Σ_{i=0}^{4} 2^i.",
          steps: [
            "Geometric, a = 1, r = 2, n = 5",
            "= (1 − 2⁵)/(1 − 2) = (−31)/(−1) = 31",
          ],
          answer: "31.",
        },
      ],
      tips: [
        "Always check the lower bound — i = 0 vs i = 1 changes the sum",
        "Split complex summands using linearity before substituting formulas",
      ],
      formulas: [
        { name: "Sum of integers", formula: "Σ_{i=1}^{n} i = n(n+1)/2" },
        { name: "Sum of squares", formula: "Σ_{i=1}^{n} i² = n(n+1)(2n+1)/6" },
        { name: "Geometric sum", formula: "Σ_{i=0}^{n-1} ar^i = a(1−r^n)/(1−r)" },
      ],
      examQuestion: {
        problem:
          "Compute Σ_{i=1}^{n} (3i − 2) in closed form.",
        solution: [
          "= 3·Σi − Σ2 = 3·n(n+1)/2 − 2n",
          "= (3n(n+1) − 4n)/2 = (3n² + 3n − 4n)/2 = (3n² − n)/2 = n(3n − 1)/2",
        ],
        answer: "n(3n − 1)/2.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting the lower bound contribution",
        "Misapplying the geometric formula when r = 1",
      ],
      summary: [
        "Sigma notation is essential for compact expressions in calculus and probability",
      ],
      practice: [
        { question: "Σ_{i=1}^{4} i?", answer: "10" },
        { question: "Σ_{i=1}^{3} i³?", answer: "36" },
      ],
      quiz: [
        {
          question: "Σ_{i=1}^{n} c =",
          options: ["c", "n", "nc", "c^n"],
          correctAnswer: 2,
          explanation: "n copies of constant c.",
        },
        {
          question: "Σ_{i=0}^{3} 3^i =",
          options: ["27", "40", "30", "13"],
          correctAnswer: 1,
          explanation: "1 + 3 + 9 + 27 = 40.",
        },
      ],
    },
  ],

  // ─── B3: The Binomial Theorem ──────────────────────────────────────
  "y12m-appB-b3-binomial-thm": [
    {
      title: "The Binomial Theorem",
      explanation:
        "The BINOMIAL THEOREM expresses the expansion of (a + b)^n as a sum of terms involving binomial coefficients:\n  (a + b)^n = Σ_{k=0}^{n} C(n, k) a^{n−k} b^k.\n\nEach term has the form C(n, k) a^{n−k} b^k. The coefficients C(n, k) form PASCAL'S TRIANGLE:\n            1\n           1 1\n          1 2 1\n         1 3 3 1\n        1 4 6 4 1\n        ...\nRow n contains the coefficients of (a + b)^n.\n\nKEY OBSERVATIONS:\n  • There are (n + 1) terms.\n  • The exponents of a decrease from n to 0; those of b increase from 0 to n.\n  • The sum of exponents in any term is n.\n  • Symmetry: C(n, k) = C(n, n − k).\n\nGENERAL TERM (often used in 'find the coefficient of x^r' problems):\n  T_{k+1} = C(n, k) a^{n−k} b^k.\n\nCONNECTION TO PROBABILITY: Setting a = (1 − p) and b = p in (a + b)^n gives ((1 − p) + p)^n = 1^n = 1, decomposed as a sum of binomial probabilities P(X = k). This shows directly that the binomial probabilities sum to 1.",
      keyPoints: [
        "Coefficients are C(n, k); index k runs from 0 to n",
        "Exponents of a + b in each term sum to n",
        "Pascal's triangle gives coefficients quickly for small n",
        "General term formula identifies specific powers",
      ],
      workedExamples: [
        {
          problem:
            "Expand (x + 2)^4.",
          steps: [
            "Coefficients (Row 4): 1, 4, 6, 4, 1",
            "= x⁴ + 4·x³·2 + 6·x²·4 + 4·x·8 + 16",
            "= x⁴ + 8x³ + 24x² + 32x + 16",
          ],
          answer: "x⁴ + 8x³ + 24x² + 32x + 16.",
        },
        {
          problem:
            "Find the coefficient of x³ in (1 + 2x)^5.",
          steps: [
            "T_{k+1} = C(5, k)·1^{5−k}·(2x)^k = C(5, k)·2^k x^k",
            "k = 3: C(5,3)·2³ = 10·8 = 80",
          ],
          answer: "80.",
        },
        {
          problem:
            "Show that ((1 − p) + p)^n = 1 expanded gives Σ P(X = k) = 1 for X ~ Bi(n, p).",
          steps: [
            "(1 − p + p)^n = 1^n = 1",
            "Expanded: Σ_{k=0}^{n} C(n,k) p^k (1 − p)^{n−k} = 1",
            "Each term = P(X = k); total probability is 1 ✓",
          ],
          answer: "Total probability for binomial is 1.",
        },
      ],
      tips: [
        "Use Pascal's triangle for n ≤ 7; use C(n, k) formula for larger n",
        "Identify the desired power, set k accordingly, then read off the coefficient",
      ],
      definitions: [
        { term: "Binomial coefficient", meaning: "C(n, k) = n!/(k!(n−k)!), the count of size-k subsets of an n-set." },
      ],
      formulas: [
        { name: "Binomial theorem", formula: "(a + b)^n = Σ_{k=0}^{n} C(n,k) a^{n−k} b^k" },
        { name: "General term", formula: "T_{k+1} = C(n,k) a^{n−k} b^k" },
        { name: "Symmetry", formula: "C(n, k) = C(n, n−k)" },
      ],
      examQuestion: {
        problem:
          "Find the constant term in the expansion of (x + 2/x)^6.",
        solution: [
          "T_{k+1} = C(6, k) x^{6−k} (2/x)^k = C(6, k) 2^k x^{6−2k}",
          "Constant: 6 − 2k = 0 → k = 3",
          "= C(6, 3)·2³ = 20·8 = 160",
        ],
        answer: "160.",
        marks: 3,
      },
      commonErrors: [
        "Mis-indexing terms (0-based vs 1-based)",
        "Forgetting to raise the entire bracketed term, including its coefficient",
        "Sign errors in (a − b)^n expansions",
      ],
      summary: [
        "The binomial theorem unifies algebra (expansions) and probability (binomial distribution)",
      ],
      practice: [
        { question: "Coefficient of x² in (1 + x)^5?", answer: "10" },
        { question: "Expand (1 − x)³.", answer: "1 − 3x + 3x² − x³" },
      ],
      quiz: [
        {
          question: "Number of terms in (a + b)^7:",
          options: ["6", "7", "8", "14"],
          correctAnswer: 2,
          explanation: "n + 1 = 8.",
        },
        {
          question: "Coefficient of x² in (2 + x)^4:",
          options: ["6", "12", "24", "48"],
          correctAnswer: 2,
          explanation: "C(4,2)·2² = 6·4 = 24.",
        },
        {
          question: "C(n, k) equals:",
          options: ["C(n, n+k)", "C(n, n−k)", "C(n−1, k)", "C(k, n)"],
          correctAnswer: 1,
          explanation: "Symmetry of binomial coefficients.",
        },
      ],
    },
  ],
};
