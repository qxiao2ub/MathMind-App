import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Chapter 2: Logic and Proof (VCE Unit 3)

export const year12SpecialistCh2Lessons: TopicLessonsMap = {
  "y12s-ch2-2a-revision-proof": [
    {
      title: "Revision of Proof Techniques",
      explanation:
        "A PROOF is a rigorous, step-by-step argument from accepted assumptions (axioms, definitions, theorems) to a conclusion. Three core techniques:\n\n1) DIRECT PROOF: assume P, derive Q.\n2) PROOF BY CONTRAPOSITIVE: prove ¬Q ⇒ ¬P (logically equivalent to P ⇒ Q).\n3) PROOF BY CONTRADICTION: assume P and ¬Q, derive a contradiction.\n\nEvery line must be justified. State your assumption clearly at the start and the conclusion (Q.E.D. or ∎) at the end.",
      keyPoints: [
        "Identify P and Q before starting",
        "Contrapositive ≡ original",
        "Contradiction needs a clear, explicit contradiction (e.g. 0 = 1)",
      ],
      workedExamples: [
        {
          problem: "Prove: if n is odd then n² is odd.",
          steps: ["Let n = 2k + 1, k ∈ ℤ", "n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1", "Of the form 2m + 1, hence odd"],
          answer: "n² is odd ∎",
        },
        {
          problem: "Prove √2 is irrational (contradiction).",
          steps: ["Assume √2 = p/q in lowest terms", "2q² = p² ⇒ p² even ⇒ p even", "p = 2k ⇒ q² = 2k² ⇒ q even", "Contradicts ‘lowest terms’"],
          answer: "√2 irrational ∎",
        },
      ],
      tips: ["State which technique you’re using upfront", "End with a clean concluding sentence"],
      formulas: [],
      examQuestion: {
        problem: "Prove by contrapositive: if n² is even then n is even.",
        solution: ["Contrapositive: if n is odd then n² is odd", "n = 2k+1 ⇒ n² = 4k²+4k+1 = 2(2k²+2k)+1 odd", "Hence original statement holds"],
        answer: "Proven ∎",
        marks: 3,
      },
      quiz: [
        { question: "Contrapositive of P⇒Q is:", options: ["Q⇒P", "¬P⇒¬Q", "¬Q⇒¬P", "P∧¬Q"], correctAnswer: 2, explanation: "Negate and swap." },
        { question: "Contradiction begins by assuming:", options: ["P", "Q", "P and ¬Q", "¬P"], correctAnswer: 2, explanation: "Assume hypothesis and negation of conclusion." },
        { question: "‘QED’ marks:", options: ["start", "middle", "end of proof", "an error"], correctAnswer: 2, explanation: "Latin: ‘which was to be demonstrated’." },
      ],
    },
  ],
  "y12s-ch2-2b-quantifiers": [
    {
      title: "Quantifiers and Counterexamples",
      explanation:
        "∀ means ‘for all’ and ∃ means ‘there exists’. The negation of a quantified statement swaps the quantifier and negates the predicate:\n\n  ¬(∀x P(x)) ≡ ∃x ¬P(x)\n  ¬(∃x P(x)) ≡ ∀x ¬P(x)\n\nA single COUNTEREXAMPLE disproves a universal statement; one example proves an existential statement.",
      keyPoints: [
        "∀ = for all, ∃ = there exists",
        "Negation flips quantifier and predicate",
        "One counterexample disproves ∀",
      ],
      workedExamples: [
        {
          problem: "Disprove: every prime is odd.",
          steps: ["2 is prime", "2 is even"],
          answer: "Counterexample: n = 2",
        },
        {
          problem: "Negate: ∀x ∈ ℝ, x² > 0.",
          steps: ["Negation: ∃x ∈ ℝ, x² ≤ 0", "True: x = 0"],
          answer: "∃x with x²=0 (x=0)",
        },
      ],
      tips: ["Read the statement aloud in English first", "When unsure, try x = 0, ±1, small primes for counterexamples"],
      formulas: [
        { name: "Negation rule", formula: "¬(∀x P) ≡ ∃x ¬P" },
      ],
      examQuestion: {
        problem: "Determine truth and provide proof or counterexample: ∀n ∈ ℕ, n² + n + 41 is prime.",
        solution: ["Try n = 40: 40² + 40 + 41 = 1600 + 40 + 41 = 1681 = 41²", "Composite"],
        answer: "False; n=40 counterexample",
        marks: 3,
      },
      quiz: [
        { question: "Negation of ∃x P(x):", options: ["∀x P(x)", "∀x ¬P(x)", "∃x ¬P(x)", "¬∃x"], correctAnswer: 1, explanation: "Swap quantifier, negate." },
        { question: "Counterexample disproves:", options: ["∃ statement", "∀ statement", "axiom", "definition"], correctAnswer: 1, explanation: "One case kills universal." },
        { question: "‘∀’ means:", options: ["there exists", "for all", "implies", "and"], correctAnswer: 1, explanation: "Universal quantifier." },
      ],
    },
  ],
  "y12s-ch2-2c-inequalities": [
    {
      title: "Proving Inequalities",
      explanation:
        "Standard techniques for proving A ≥ B:\n\n1) Show A − B ≥ 0 (often by writing as a sum of squares).\n2) Apply AM–GM: for non-negative a, b, (a+b)/2 ≥ √(ab) with equality iff a=b.\n3) Use known inequalities (Cauchy–Schwarz, triangle inequality).\n4) Square both sides only when both sides are non-negative.\n\nALWAYS state when equality holds.",
      keyPoints: [
        "Difference-of-squares trick",
        "AM ≥ GM for non-negatives",
        "Specify equality conditions",
        "Never multiply by something whose sign is unknown",
      ],
      workedExamples: [
        {
          problem: "Prove a² + b² ≥ 2ab for all real a, b.",
          steps: ["a² + b² − 2ab = (a − b)² ≥ 0", "Hence a² + b² ≥ 2ab", "Equality ⇔ a = b"],
          answer: "Proven ∎",
        },
        {
          problem: "Prove for x > 0: x + 1/x ≥ 2.",
          steps: ["By AM–GM on x and 1/x: (x + 1/x)/2 ≥ √(x · 1/x) = 1", "Multiply by 2"],
          answer: "x + 1/x ≥ 2, equality at x=1",
        },
      ],
      tips: ["Try (a−b)² ≥ 0 first — it solves a surprising number of problems", "Always check the domain"],
      formulas: [
        { name: "AM–GM", formula: "(a+b)/2 ≥ √(ab), a,b ≥ 0" },
      ],
      examQuestion: {
        problem: "Prove for positive reals a, b, c: a/b + b/c + c/a ≥ 3.",
        solution: ["By AM–GM on the three positive terms", "(a/b + b/c + c/a)/3 ≥ ³√((a/b)(b/c)(c/a)) = ³√1 = 1", "Multiply by 3"],
        answer: "Sum ≥ 3, equality when a=b=c",
        marks: 3,
      },
      quiz: [
        { question: "(a−b)² ≥ 0 implies:", options: ["a²+b²≥2ab", "a²+b²<2ab", "a=b", "a>b"], correctAnswer: 0, explanation: "Expand the square." },
        { question: "AM–GM equality holds when:", options: ["a≠b", "a=b", "ab=0", "always"], correctAnswer: 1, explanation: "Equal values." },
        { question: "Squaring is safe when:", options: ["both sides ≥0", "either negative", "always", "never"], correctAnswer: 0, explanation: "Otherwise can flip inequality." },
      ],
    },
  ],
  "y12s-ch2-2d-telescoping": [
    {
      title: "Telescoping Series",
      explanation:
        "A series TELESCOPES when consecutive terms cancel after partial-fraction decomposition or other algebraic identity. The classic example:\n\n  1/(k(k+1)) = 1/k − 1/(k+1)\n\nHence Σ_{k=1}^{n} 1/(k(k+1)) = 1 − 1/(n+1) = n/(n+1).\n\nGeneral method: write tₖ = aₖ − aₖ₊₁; then Σ tₖ = a₁ − a_{n+1}.",
      keyPoints: [
        "Find a partial-fraction split tₖ = aₖ − aₖ₊₁",
        "Most middle terms cancel",
        "Closed form involves only the first and last partial fractions",
      ],
      workedExamples: [
        {
          problem: "Find Σ_{k=1}^{n} 1/(k(k+1)).",
          steps: ["1/(k(k+1)) = 1/k − 1/(k+1)", "Sum = (1−1/2) + (1/2 − 1/3) + … + (1/n − 1/(n+1))", "= 1 − 1/(n+1)"],
          answer: "n/(n+1)",
        },
        {
          problem: "Find Σ_{k=1}^{n} 1/((2k−1)(2k+1)).",
          steps: ["= ½(1/(2k−1) − 1/(2k+1))", "Sum = ½(1 − 1/(2n+1))", "= n/(2n+1)"],
          answer: "n/(2n+1)",
        },
      ],
      tips: ["Always write out the first 3 and last 2 terms to see the cancellation pattern", "Verify with n=1, 2 numerically"],
      formulas: [
        { name: "Telescoping identity", formula: "Σ (aₖ − aₖ₊₁) = a₁ − a_{n+1}" },
      ],
      examQuestion: {
        problem: "Show Σ_{k=1}^{n} ln((k+1)/k) = ln(n+1).",
        solution: ["Each term = ln(k+1) − ln k", "Sum telescopes to ln(n+1) − ln 1 = ln(n+1)"],
        answer: "ln(n+1)",
        marks: 3,
      },
      quiz: [
        { question: "1/(k(k+1)) = ", options: ["1/k − 1/(k+1)", "1/(k+1) − 1/k", "1/k+1/(k+1)", "k/(k+1)"], correctAnswer: 0, explanation: "Standard split." },
        { question: "Σ_{1}^{∞} 1/(k(k+1)):", options: ["divergent", "1", "1/2", "2"], correctAnswer: 1, explanation: "Limit of n/(n+1)." },
        { question: "Telescope means:", options: ["all terms add", "consecutive cancel", "ratio constant", "geometric"], correctAnswer: 1, explanation: "Inner cancellation." },
      ],
    },
  ],
  "y12s-ch2-2e-induction": [
    {
      title: "Mathematical Induction",
      explanation:
        "To prove a statement P(n) for all integers n ≥ n₀:\n\nBASE CASE: prove P(n₀).\nINDUCTIVE STEP: assume P(k) for some k ≥ n₀ (this is the INDUCTIVE HYPOTHESIS) and prove P(k+1).\n\nThen P(n) holds for all n ≥ n₀ by the Principle of Mathematical Induction.\n\nCommon families: sums (Σ k = n(n+1)/2), divisibility (3 | n³ − n), and inequalities (2ⁿ > n² for n ≥ 5).\n\nIn writing, ALWAYS state the hypothesis explicitly and end the inductive step with ‘which is P(k+1)’.",
      keyPoints: [
        "Base case must be checked",
        "State the inductive hypothesis clearly",
        "Show the (k+1) form before concluding",
        "Conclude with PMI",
      ],
      workedExamples: [
        {
          problem: "Prove Σ_{i=1}^{n} i = n(n+1)/2.",
          steps: [
            "Base n=1: LHS=1, RHS=1·2/2=1 ✓",
            "Assume Σ_{i=1}^{k} i = k(k+1)/2",
            "Σ_{i=1}^{k+1} i = k(k+1)/2 + (k+1) = (k+1)(k+2)/2",
            "P(k+1) ✓; by PMI, true for all n",
          ],
          answer: "Proven ∎",
        },
        {
          problem: "Prove 3 divides n³ − n for all n ∈ ℕ.",
          steps: [
            "Base n=1: 0 ✓",
            "Assume 3 | k³ − k, so k³ − k = 3m",
            "(k+1)³ − (k+1) = k³ + 3k² + 3k + 1 − k − 1 = (k³−k) + 3(k² + k) = 3m + 3(k²+k) = 3(m + k² + k)",
            "Divisible by 3 ✓",
          ],
          answer: "Proven ∎",
        },
      ],
      tips: ["When stuck, factor (k+1) out of the (k+1) expression — almost always works", "Use IH (inductive hypothesis) immediately after expanding"],
      formulas: [],
      examQuestion: {
        problem: "Prove by induction: 2ⁿ ≥ n + 1 for all n ≥ 0.",
        solution: [
          "Base n=0: 1 ≥ 1 ✓",
          "Assume 2ᵏ ≥ k+1",
          "2^(k+1) = 2·2ᵏ ≥ 2(k+1) = 2k+2 ≥ k+2",
          "Therefore 2^(k+1) ≥ (k+1)+1 ✓",
        ],
        answer: "Proven for all n ≥ 0 ∎",
        marks: 4,
      },
      quiz: [
        { question: "Induction proves statements for:", options: ["one n", "finitely many", "all n ≥ n₀", "no n"], correctAnswer: 2, explanation: "All integers from base." },
        { question: "Inductive hypothesis assumes:", options: ["P(0)", "P(k+1)", "P(k)", "all P(n)"], correctAnswer: 2, explanation: "Single k case." },
        { question: "Without base case, induction is:", options: ["valid", "invalid", "stronger", "circular"], correctAnswer: 1, explanation: "Base case anchors the chain." },
      ],
    },
  ],
  "y12s-ch2-review": [
    {
      title: "Review of Chapter 2 — Logic and Proof",
      explanation:
        "Consolidates direct, contrapositive and contradiction proofs; quantifier logic and counterexamples; inequality techniques; telescoping series; and mathematical induction.\n\nFor exams, ALWAYS write proofs in complete sentences with clear logical connectives.",
      keyPoints: [
        "Pick the right technique",
        "Negation rules: ¬∀ ↔ ∃¬",
        "(a−b)² ≥ 0 is the workhorse inequality",
        "Telescoping uses partial fractions",
        "Induction = base + step + conclusion",
      ],
      workedExamples: [
        {
          problem: "Prove √3 is irrational.",
          steps: ["Assume √3 = p/q in lowest terms", "3q² = p² ⇒ 3 | p² ⇒ 3 | p", "p = 3k ⇒ 3q² = 9k² ⇒ q² = 3k² ⇒ 3 | q", "Contradicts coprime ⇒ irrational"],
          answer: "√3 irrational ∎",
        },
      ],
      tips: ["Mark schemes reward clear structure", "Always conclude with the statement you set out to prove"],
      formulas: [],
      examQuestion: {
        problem: "Prove by induction: Σ_{i=1}^{n} (2i−1) = n².",
        solution: ["Base n=1: 1 = 1² ✓", "Assume Σ_{1}^{k}(2i−1) = k²", "Add (2(k+1)−1) = 2k+1: k² + 2k+1 = (k+1)² ✓", "By PMI, holds for all n"],
        answer: "Proven ∎",
        marks: 4,
      },
      quiz: [
        { question: "Best technique for ‘√n irrational’:", options: ["Direct", "Induction", "Contradiction", "Counterexample"], correctAnswer: 2, explanation: "Classic contradiction." },
        { question: "‘There exists’ symbol:", options: ["∀", "∃", "∈", "⇒"], correctAnswer: 1, explanation: "Existential." },
        { question: "Induction step shows:", options: ["P(0)", "P(k)⇒P(k+1)", "P(n)", "all P(n)"], correctAnswer: 1, explanation: "Inductive implication." },
      ],
    },
  ],
};
