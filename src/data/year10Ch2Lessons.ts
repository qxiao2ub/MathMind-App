import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 2: Indices, Exponentials and Logarithms
// Full textbook-style lessons aligned to Victorian Curriculum Year 10 / 10A.

export const year10Ch2Lessons: TopicLessonsMap = {
  "y10-review-index-laws": [
    {
      title: "Review of Index Laws",
      explanation:
        "OVERVIEW. Index laws govern how powers behave under multiplication, division and further exponentiation. Mastery here is essential before negative, fractional, exponential and logarithmic work.\n\nSECTION A — CORE LAWS (a ≠ 0).\n  • Product:  aᵐ · aⁿ = aᵐ⁺ⁿ\n  • Quotient: aᵐ / aⁿ = aᵐ⁻ⁿ\n  • Power of a power: (aᵐ)ⁿ = aᵐⁿ\n  • Power of a product: (ab)ⁿ = aⁿ · bⁿ\n  • Power of a quotient: (a/b)ⁿ = aⁿ / bⁿ\n  • Zero index: a⁰ = 1\n\nSECTION B — METHOD. Identify the law(s) involved, apply them one step at a time, simplify coefficients separately from variables.",
      keyPoints: ["Same base for product/quotient laws", "Add or subtract indices, never multiply", "Power of a power → multiply indices", "a⁰ = 1 (a ≠ 0)"],
      workedExamples: [
        { problem: "Simplify x⁵ · x³.", steps: ["Same base x", "Add indices: 5 + 3 = 8"], answer: "x⁸" },
        { problem: "Simplify (2a²b)³.", steps: ["Apply power to each factor", "= 2³ · a⁶ · b³", "= 8a⁶b³"], answer: "8a⁶b³" },
        { problem: "Simplify (12x⁵y³) ÷ (4x²y).", steps: ["12/4 = 3", "x⁵⁻² = x³, y³⁻¹ = y²"], answer: "3x³y²" },
      ],
      tips: ["Always check the bases match before adding indices."],
      commonErrors: ["Adding indices when bases differ (2³ · 3² ≠ 6⁵)", "Multiplying instead of adding when applying the product law"],
      summary: ["EXAM INSIGHT: Index manipulation underpins every exponential and log question in Years 10–12."],
      practice: [
        { question: "Simplify a⁷ · a².", answer: "a⁹" },
        { question: "Simplify (3m²n)².", answer: "9m⁴n²" },
        { question: "Simplify 20p⁵ ÷ 4p².", answer: "5p³" },
      ],
      quiz: [
        { question: "x⁴ · x⁵ = ?", options: ["x⁹", "x²⁰", "x", "2x⁹"], correctAnswer: 0, explanation: "Add indices: 4 + 5 = 9." },
        { question: "(a³)⁴ = ?", options: ["a⁷", "a¹²", "a⁶⁴", "4a³"], correctAnswer: 1, explanation: "Power of a power: 3 × 4." },
        { question: "5⁰ = ?", options: ["0", "1", "5", "Undefined"], correctAnswer: 1, explanation: "Any non-zero base to the zero index is 1." },
      ],
    },
    {
      title: "Combining Multiple Laws",
      explanation:
        "Many simplifications require several laws applied in sequence. Work from inside outward (innermost brackets first) and group like factors.",
      keyPoints: ["Innermost brackets first", "Coefficients separately from variables", "Re-check final indices"],
      workedExamples: [
        { problem: "Simplify (3x²y)³ × (2xy²)².", steps: ["= 27x⁶y³ × 4x²y⁴", "= 108x⁸y⁷"], answer: "108x⁸y⁷" },
        { problem: "Simplify (4a³b²)² ÷ (8a⁴b).", steps: ["Numerator: 16a⁶b⁴", "16/8 = 2; a⁶⁻⁴ = a²; b⁴⁻¹ = b³"], answer: "2a²b³" },
      ],
      tips: ["Compute powers of coefficients separately to avoid arithmetic mistakes."],
      commonErrors: ["Forgetting to apply the outer power to the coefficient"],
      summary: ["EXAM INSIGHT: Multi-step simplifications appear frequently in 2–3 mark items."],
      practice: [
        { question: "Simplify (2a²)³ · 3a.", answer: "24a⁷" },
        { question: "Simplify (6x³y) ÷ (3xy)².", answer: "2x/(3y)" },
      ],
      quiz: [
        { question: "(2x)³ · x² = ?", options: ["6x⁶", "8x⁵", "8x⁶", "6x⁵"], correctAnswer: 1, explanation: "8x³ · x² = 8x⁵." },
      ],
    },
    {
      title: "Index Notation in Real Contexts",
      explanation:
        "Indices model repeated multiplication: bacterial growth, computer memory (powers of 2), area (squared units), volume (cubed units).",
      keyPoints: ["Power notation = repeated multiplication", "Units: m² area, m³ volume", "Computer memory: 1 KiB = 2¹⁰ bytes"],
      workedExamples: [
        { problem: "A bacterium splits every hour starting from 1. How many after 6 hours?", steps: ["After n hours: 2ⁿ", "2⁶ = 64"], answer: "64 bacteria" },
      ],
      tips: ["Identify what is being doubled (or scaled) and how many times."],
      commonErrors: ["Confusing 2 × 6 with 2⁶"],
      summary: ["EXAM INSIGHT: Linked to growth/decay and compound interest questions."],
      practice: [
        { question: "How much memory in bytes is 2¹⁵?", answer: "32 768 bytes" },
      ],
      quiz: [
        { question: "Volume of a cube with side 5 cm is:", options: ["15 cm³", "25 cm³", "125 cm³", "75 cm³"], correctAnswer: 2, explanation: "5³ = 125." },
      ],
    },
  ],

  "y10-negative-indices": [
    {
      title: "Negative Indices",
      explanation:
        "OVERVIEW. A negative index represents a RECIPROCAL: a⁻ⁿ = 1/aⁿ (a ≠ 0).\n\nSECTION A — CORE IDEA. Negative indices arise from extending the quotient law: aᵐ/aᵐ⁺ᵏ = a⁻ᵏ. They are NOT negative numbers — they are reciprocals.\n\nSECTION B — METHOD.\n  1. Convert each negative index to a reciprocal.\n  2. Move factors with negative indices between numerator and denominator (changing sign of index).\n  3. Simplify using positive-index laws.",
      keyPoints: ["a⁻ⁿ = 1/aⁿ", "Negative index ≠ negative number", "Move factor up/down to flip the sign of its index"],
      workedExamples: [
        { problem: "Evaluate 2⁻³.", steps: ["= 1/2³ = 1/8"], answer: "1/8" },
        { problem: "Simplify x⁻²y³.", steps: ["= y³/x²"], answer: "y³/x²" },
        { problem: "Simplify (3x⁻²)/(6x⁻⁵).", steps: ["= 3/6 · x⁻²⁺⁵", "= ½ · x³ = x³/2"], answer: "x³/2" },
      ],
      tips: ["When asked to write WITH POSITIVE INDICES, every negative index must be moved across the fraction line."],
      commonErrors: ["Treating x⁻² as −x²", "Forgetting to flip the sign when moving factors across the fraction bar"],
      summary: ["EXAM INSIGHT: A standard 2-mark simplification; needed for scientific notation and fractional indices."],
      practice: [
        { question: "Evaluate 5⁻²", answer: "1/25" },
        { question: "Simplify a⁻¹b² with positive indices.", answer: "b²/a" },
        { question: "Simplify 8x⁻³ / 4x⁻⁵.", answer: "2x²" },
      ],
      quiz: [
        { question: "3⁻² = ?", options: ["−9", "1/9", "−6", "9"], correctAnswer: 1, explanation: "Reciprocal of 3² = 1/9." },
        { question: "Write x⁻⁴ with positive index.", options: ["−x⁴", "1/x⁴", "x⁴", "1/(−x⁴)"], correctAnswer: 1, explanation: "By definition." },
      ],
    },
    {
      title: "Combined Positive and Negative Indices",
      explanation:
        "Apply the same index laws as before; treat negative indices algebraically (add or subtract them).",
      keyPoints: ["Add indices in product law (with sign)", "Subtract indices in quotient law (with sign)"],
      workedExamples: [
        { problem: "Simplify x³ · x⁻⁵.", steps: ["3 + (−5) = −2", "= x⁻² = 1/x²"], answer: "1/x²" },
        { problem: "Simplify (2a⁻²)⁻³.", steps: ["= 2⁻³ · a⁶ = a⁶/8"], answer: "a⁶/8" },
      ],
      tips: ["Apply the outer index to BOTH the coefficient AND each variable inside the bracket."],
      commonErrors: ["Forgetting the bracket carries to the coefficient"],
      summary: ["EXAM INSIGHT: 2-mark items combining product, quotient and negative-index rules."],
      practice: [
        { question: "Simplify (3x⁻²)².", answer: "9/x⁴" },
        { question: "Simplify (a⁻³b²)/(a²b⁻¹).", answer: "b³/a⁵" },
      ],
      quiz: [
        { question: "x² · x⁻⁵ = ?", options: ["x⁷", "x⁻³", "x⁻⁷", "x³"], correctAnswer: 1, explanation: "2 + (−5) = −3." },
      ],
    },
    {
      title: "Negative Indices in Calculations",
      explanation:
        "Negative indices appear in scientific notation (small numbers) and rate problems where the denominator grows.",
      keyPoints: ["3.2 × 10⁻⁴ is small, not negative", "Rates of decay use negative exponents"],
      workedExamples: [
        { problem: "Write 0.0025 in index form.", steps: ["= 25 × 10⁻⁴ = 2.5 × 10⁻³"], answer: "2.5 × 10⁻³" },
      ],
      tips: ["Power of 10 negative ↔ value less than 1."],
      commonErrors: ["Treating 10⁻³ as a negative number instead of 0.001"],
      summary: ["EXAM INSIGHT: Bridges into scientific notation."],
      practice: [
        { question: "Write 0.00007 in scientific notation.", answer: "7 × 10⁻⁵" },
      ],
      quiz: [
        { question: "10⁻² = ?", options: ["−100", "0.01", "−0.01", "100"], correctAnswer: 1, explanation: "1/100." },
      ],
    },
  ],

  "y10-scientific-notation": [
    {
      title: "Writing Numbers in Scientific Notation",
      explanation:
        "OVERVIEW. Scientific notation expresses numbers as a × 10ⁿ where 1 ≤ |a| < 10 and n is an integer. It is essential for very large (astronomy) or very small (atomic) quantities.\n\nMETHOD.\n  1. Move the decimal point so only one non-zero digit lies to its left.\n  2. Count the number of places moved — this is n.\n  3. n is positive if the original number is ≥ 10; negative if 0 < |original| < 1.",
      keyPoints: ["1 ≤ |a| < 10", "n = decimal-place shift", "Positive n: large; negative n: small"],
      workedExamples: [
        { problem: "Write 56 700 in scientific notation.", steps: ["a = 5.67 (decimal moved 4 places left)", "n = 4"], answer: "5.67 × 10⁴" },
        { problem: "Write 0.000 084 in scientific notation.", steps: ["a = 8.4 (decimal moved 5 places right)", "n = −5"], answer: "8.4 × 10⁻⁵" },
      ],
      tips: ["Never include 10⁰ unnecessarily; 7.5 = 7.5, not 7.5 × 10⁰ unless asked."],
      commonErrors: ["a outside [1, 10)", "Wrong sign for n"],
      summary: ["EXAM INSIGHT: Standard 1-mark items; exponent sign error is the most common mistake."],
      practice: [
        { question: "Write 1 200 000 in scientific notation.", answer: "1.2 × 10⁶" },
        { question: "Write 0.000 000 095 in scientific notation.", answer: "9.5 × 10⁻⁸" },
      ],
      quiz: [
        { question: "6 400 in scientific notation:", options: ["6.4 × 10²", "6.4 × 10³", "64 × 10²", "0.64 × 10⁴"], correctAnswer: 1, explanation: "Decimal moved 3 places." },
        { question: "0.00029:", options: ["2.9 × 10⁻³", "2.9 × 10⁻⁴", "29 × 10⁻⁵", "2.9 × 10⁴"], correctAnswer: 1, explanation: "Moved 4 places right." },
      ],
    },
    {
      title: "Computing in Scientific Notation",
      explanation:
        "Multiply or divide the a-parts; add or subtract the indices for the powers of 10. Adjust the result so 1 ≤ |a| < 10.",
      keyPoints: ["Multiply: aᵢ multiply, indices add", "Divide: aᵢ divide, indices subtract", "Re-normalise the answer"],
      workedExamples: [
        { problem: "(3 × 10⁴) × (2 × 10⁵).", steps: ["3·2 = 6; 4 + 5 = 9"], answer: "6 × 10⁹" },
        { problem: "(8 × 10⁵) / (2 × 10⁻²).", steps: ["8/2 = 4; 5 − (−2) = 7"], answer: "4 × 10⁷" },
        { problem: "(4 × 10⁶) × (5 × 10⁻³).", steps: ["4·5 = 20; 6 + (−3) = 3", "20 × 10³ = 2 × 10⁴ (re-normalise)"], answer: "2 × 10⁴" },
      ],
      tips: ["Always re-normalise: if a ≥ 10, increase the exponent; if a < 1, decrease it."],
      commonErrors: ["Leaving 20 × 10³ instead of normalising to 2 × 10⁴"],
      summary: ["EXAM INSIGHT: Calculator questions still require students to normalise the displayed result."],
      practice: [
        { question: "(6 × 10⁻³) × (5 × 10²).", answer: "3 × 10⁰ = 3" },
        { question: "(9 × 10⁵) / (3 × 10⁸).", answer: "3 × 10⁻³" },
      ],
      quiz: [
        { question: "(2 × 10³)² = ?", options: ["2 × 10⁶", "4 × 10⁶", "4 × 10⁹", "2 × 10⁹"], correctAnswer: 1, explanation: "(2)² = 4; (10³)² = 10⁶." },
      ],
    },
    {
      title: "Applications of Scientific Notation",
      explanation:
        "Used across science: distances in space (km), wavelengths (m), masses (kg), times (s).",
      keyPoints: ["Compare orders of magnitude by comparing exponents first", "Use scientific notation for clarity in extreme values"],
      workedExamples: [
        { problem: "Earth–Sun distance ≈ 1.5 × 10⁸ km. Express in metres.", steps: ["1 km = 10³ m", "1.5 × 10⁸ × 10³ = 1.5 × 10¹¹ m"], answer: "1.5 × 10¹¹ m" },
      ],
      tips: ["Convert units BEFORE re-normalising."],
      commonErrors: ["Mixing units without converting"],
      summary: ["EXAM INSIGHT: Cross-curricular questions worth 2 marks."],
      practice: [
        { question: "Speed of light is 3 × 10⁸ m/s. Express in km/s.", answer: "3 × 10⁵ km/s" },
      ],
      quiz: [
        { question: "Which is larger: 5 × 10⁻³ or 8 × 10⁻⁴?", options: ["5 × 10⁻³", "8 × 10⁻⁴", "Equal", "Cannot tell"], correctAnswer: 0, explanation: "−3 > −4 → larger." },
      ],
    },
  ],

  "y10-fractional-indices": [
    {
      title: "Fractional Indices and Roots (10A)",
      explanation:
        "OVERVIEW. A fractional index represents a ROOT. Specifically, a^(1/n) = ⁿ√a. More generally, a^(m/n) = (ⁿ√a)^m = ⁿ√(aᵐ).\n\nThe denominator gives the root; the numerator gives the power.",
      keyPoints: ["a^(1/n) = ⁿ√a", "a^(m/n) = (ⁿ√a)^m", "Apply roots to positive numbers in real domain"],
      workedExamples: [
        { problem: "Evaluate 27^(1/3).", steps: ["= ³√27 = 3"], answer: "3" },
        { problem: "Evaluate 16^(3/4).", steps: ["= (⁴√16)³ = 2³ = 8"], answer: "8" },
        { problem: "Simplify x^(1/2) · x^(1/3).", steps: ["1/2 + 1/3 = 5/6", "= x^(5/6)"], answer: "x^(5/6)" },
      ],
      tips: ["Take the root FIRST when the base is large — easier arithmetic."],
      commonErrors: ["Confusing a^(m/n) with (a^m)/n"],
      summary: ["EXAM INSIGHT: Bridges to surds and to logarithm definitions."],
      practice: [
        { question: "Evaluate 64^(1/2).", answer: "8" },
        { question: "Evaluate 8^(2/3).", answer: "4" },
        { question: "Simplify y^(2/3) · y^(1/3).", answer: "y" },
      ],
      quiz: [
        { question: "9^(1/2) = ?", options: ["3", "4.5", "81", "1/9"], correctAnswer: 0, explanation: "Square root." },
        { question: "8^(1/3) = ?", options: ["2", "3", "4", "8/3"], correctAnswer: 0, explanation: "Cube root of 8." },
        { question: "32^(2/5) = ?", options: ["2", "4", "8", "16"], correctAnswer: 1, explanation: "(⁵√32)² = 2² = 4." },
      ],
    },
    {
      title: "Combining Fractional, Negative and Integer Indices",
      explanation:
        "All previous laws apply. Convert between root form and fractional-index form whenever convenient.",
      keyPoints: ["Same index laws still apply", "Convert √x = x^(1/2) when multiplying with other powers"],
      workedExamples: [
        { problem: "Simplify x^(1/2) ÷ x^(−1/4).", steps: ["1/2 − (−1/4) = 3/4", "= x^(3/4)"], answer: "x^(3/4)" },
        { problem: "Simplify (√x)³ · x^(−2).", steps: ["= x^(3/2) · x^(−2)", "= x^(3/2 − 2)", "= x^(−1/2) = 1/√x"], answer: "1/√x" },
      ],
      tips: ["Use a common denominator when adding/subtracting fractional indices."],
      commonErrors: ["Sign errors when subtracting a negative fractional index"],
      summary: ["EXAM INSIGHT: Standard 2-mark items in 10A and Methods Year 11."],
      practice: [
        { question: "Simplify x^(2/3) · x^(1/6).", answer: "x^(5/6)" },
      ],
      quiz: [
        { question: "x^(1/2) · x^(1/2) = ?", options: ["x", "x¼", "x²", "1"], correctAnswer: 0, explanation: "Sum of indices = 1." },
      ],
    },
    {
      title: "Solving Equations with Fractional Indices",
      explanation:
        "To solve x^(m/n) = k, raise both sides to the reciprocal power n/m. Equivalently, take the m-th root then the n-th power.",
      keyPoints: ["Reciprocal exponent isolates x", "Always check feasibility (real-domain restrictions)"],
      workedExamples: [
        { problem: "Solve x^(3/2) = 27.", steps: ["Raise both sides to 2/3: x = 27^(2/3) = (³√27)² = 9"], answer: "x = 9" },
      ],
      tips: ["Verify the answer by substitution to catch domain issues."],
      commonErrors: ["Forgetting that even-root solutions admit a ± when 1/even index is involved"],
      summary: ["EXAM INSIGHT: Foundational for solving exponential and surd equations."],
      practice: [
        { question: "Solve x^(2/3) = 4.", answer: "x = 8" },
      ],
      quiz: [
        { question: "Solve x^(1/2) = 5.", options: ["10", "25", "5", "1/5"], correctAnswer: 1, explanation: "Square both sides: x = 25." },
      ],
    },
  ],

  "y10-exponential-equations": [
    {
      title: "Solving Exponential Equations",
      explanation:
        "OVERVIEW. An exponential equation has the variable in the exponent, e.g. 2ˣ = 32. The standard strategy is to express both sides as powers of the SAME BASE and then equate the exponents.\n\nSECTION B — METHOD.\n  1. Rewrite each side using a common base.\n  2. Equate exponents: aᵐ = aⁿ ⇒ m = n (a > 0, a ≠ 1).\n  3. Solve the resulting equation.",
      keyPoints: ["Same base on both sides", "Equate exponents", "Use index laws to combine factors first"],
      workedExamples: [
        { problem: "Solve 2ˣ = 32.", steps: ["32 = 2⁵", "x = 5"], answer: "x = 5" },
        { problem: "Solve 9ˣ = 27.", steps: ["9 = 3², 27 = 3³", "(3²)ˣ = 3³ → 3²ˣ = 3³", "2x = 3, x = 3/2"], answer: "x = 3/2" },
        { problem: "Solve 4 · 2ˣ = 64.", steps: ["2ˣ = 16", "16 = 2⁴ → x = 4"], answer: "x = 4" },
      ],
      tips: ["List the small powers (2, 3, 5) of common bases to recognise quickly."],
      commonErrors: ["Equating bases instead of exponents"],
      summary: ["EXAM INSIGHT: Most common 2-mark item in this chapter; logarithm method comes next."],
      practice: [
        { question: "Solve 5ˣ = 125.", answer: "x = 3" },
        { question: "Solve 8ˣ = 4.", answer: "x = 2/3" },
      ],
      quiz: [
        { question: "Solve 3ˣ = 81.", options: ["3", "4", "27", "9"], correctAnswer: 1, explanation: "81 = 3⁴." },
        { question: "Solve 2ˣ⁺¹ = 16.", options: ["3", "4", "5", "8"], correctAnswer: 0, explanation: "x + 1 = 4 → x = 3." },
      ],
    },
    {
      title: "Equations Requiring Algebraic Rearrangement",
      explanation:
        "Some equations need division, factoring or a substitution u = aˣ before applying the equal-base technique.",
      keyPoints: ["Divide common factors first", "Substitute u = aˣ for quadratic-in-aˣ equations"],
      workedExamples: [
        { problem: "Solve 2ˣ⁺² = 8 · 2ˣ⁻¹.", steps: ["LHS = 2ˣ · 4; RHS = 8 · 2ˣ / 2 = 4 · 2ˣ", "Both sides equal → identity (true for all x)"], answer: "All real x" },
        { problem: "Solve 2²ˣ − 6 · 2ˣ + 8 = 0.", steps: ["Let u = 2ˣ", "u² − 6u + 8 = 0 → (u−2)(u−4) = 0", "u = 2 → x = 1; u = 4 → x = 2"], answer: "x = 1 or 2" },
      ],
      tips: ["Spotting a 'quadratic in aˣ' is a common Methods technique."],
      commonErrors: ["Failing to back-substitute u = aˣ"],
      summary: ["EXAM INSIGHT: 10A problem; common bridge to Year 11 Methods."],
      practice: [
        { question: "Solve 3²ˣ − 4·3ˣ + 3 = 0.", answer: "x = 0 or x = 1" },
      ],
      quiz: [
        { question: "Substitute u = 2ˣ in 2²ˣ + 2ˣ − 6 = 0:", options: ["u² + u − 6 = 0", "u + u − 6 = 0", "u² + 1 − 6 = 0", "2u + u − 6 = 0"], correctAnswer: 0, explanation: "2²ˣ = u²." },
      ],
    },
    {
      title: "Word Problems with Exponentials",
      explanation:
        "Population growth, half-lives and compound interest produce exponential equations.",
      keyPoints: ["Exponential growth: doubling/tripling", "Half-life decay", "Compound interest is exponential"],
      workedExamples: [
        { problem: "A population doubles every 4 years. If it starts at 1000, after how many years will it reach 8000?", steps: ["8000 = 1000 · 2^(t/4)", "8 = 2^(t/4)", "2³ = 2^(t/4) → t/4 = 3 → t = 12"], answer: "12 years" },
      ],
      tips: ["Translate the doubling time into the exponent denominator."],
      commonErrors: ["Confusing 'every 4 years' with 'in 4 years total'"],
      summary: ["EXAM INSIGHT: 3-mark modelling questions; setup carries weight."],
      practice: [
        { question: "A radioactive sample halves every 10 days. After how many days is 1/8 left?", answer: "30 days" },
      ],
      quiz: [
        { question: "If P doubles every year and starts at 100, value after 3 years:", options: ["200", "400", "600", "800"], correctAnswer: 3, explanation: "100 × 2³." },
      ],
    },
  ],

  "y10-exponential-graphs": [
    {
      title: "Graphs of Exponential Functions",
      explanation:
        "OVERVIEW. y = aˣ (a > 0, a ≠ 1) has a HORIZONTAL ASYMPTOTE at y = 0, passes through (0, 1), and is always positive.\n\nKEY FEATURES.\n  • a > 1 → growth (curve rises rapidly to the right).\n  • 0 < a < 1 → decay (curve falls from left to right).\n  • Domain: all real x. Range: y > 0.",
      keyPoints: ["y-intercept (0, 1)", "Asymptote y = 0", "a > 1 grows; 0 < a < 1 decays", "Always positive"],
      workedExamples: [
        { problem: "Sketch y = 2ˣ.", steps: ["y-intercept (0, 1)", "Plot (1, 2), (2, 4), (−1, 0.5)", "Asymptote y = 0"], answer: "Smooth increasing curve through (0,1)" },
        { problem: "Sketch y = (1/2)ˣ.", steps: ["y-intercept (0, 1)", "Plot (1, 0.5), (−1, 2)", "Decreasing curve approaching y = 0"], answer: "Decay curve" },
      ],
      tips: ["Always plot at least three points: (−1, 1/a), (0, 1), (1, a)."],
      commonErrors: ["Drawing the curve crossing the x-axis"],
      summary: ["EXAM INSIGHT: Sketching plus key feature labels is a 3-mark item."],
      practice: [
        { question: "Sketch y = 3ˣ and label the y-intercept.", answer: "(0, 1); asymptote y = 0" },
      ],
      quiz: [
        { question: "y-intercept of y = 5ˣ:", options: ["(0,5)", "(0,1)", "(1,0)", "(0,0)"], correctAnswer: 1, explanation: "5⁰ = 1." },
      ],
    },
    {
      title: "Transformations of Exponential Graphs",
      explanation:
        "Translations and dilations of y = aˣ:\n  • y = aˣ + k shifts vertically by k (asymptote becomes y = k).\n  • y = a^(x − h) shifts horizontally by h.\n  • y = c · aˣ dilates vertically by factor c.\n  • y = a^(−x) reflects in the y-axis.",
      keyPoints: ["+k vertical shift; new asymptote y = k", "x − h shift right by h", "c·aˣ dilates by c", "a^(−x) reflects in y-axis"],
      workedExamples: [
        { problem: "Sketch y = 2ˣ + 3.", steps: ["Asymptote y = 3", "y-intercept (0, 1+3) = (0, 4)", "Same shape as y = 2ˣ shifted up 3"], answer: "Shifted curve, asymptote y = 3" },
      ],
      tips: ["Identify the asymptote first — it anchors the sketch."],
      commonErrors: ["Forgetting to update the y-intercept after translation"],
      summary: ["EXAM INSIGHT: Common 3-mark sketching."],
      practice: [
        { question: "Sketch y = 2^(x − 1) − 4.", answer: "Asymptote y = −4; shifted right 1 and down 4" },
      ],
      quiz: [
        { question: "Asymptote of y = 3ˣ − 2:", options: ["y = 0", "y = −2", "y = 3", "y = 2"], correctAnswer: 1, explanation: "Vertical shift by −2." },
      ],
    },
    {
      title: "Reading Exponential Graphs",
      explanation:
        "Use plotted points to determine a (base) and any vertical shift. Two well-chosen points usually suffice.",
      keyPoints: ["Use the y-intercept", "Use a second point to find a", "Identify asymptote first"],
      workedExamples: [
        { problem: "Curve passes through (0, 2) and (1, 6) with asymptote y = 0. Form?", steps: ["y = c · aˣ", "x = 0: c = 2", "x = 1: 6 = 2a → a = 3", "y = 2 · 3ˣ"], answer: "y = 2 · 3ˣ" },
      ],
      tips: ["Identify the dilation constant c from the y-intercept."],
      commonErrors: ["Ignoring the asymptote when present"],
      summary: ["EXAM INSIGHT: Reverse-engineering an equation from a graph is a Methods skill foreshadowed here."],
      practice: [
        { question: "Curve through (0, 1), (1, 4), asymptote y = 0. Equation?", answer: "y = 4ˣ" },
      ],
      quiz: [
        { question: "y = aˣ passes through (1, 5). a = ?", options: ["1", "5", "1/5", "0"], correctAnswer: 1, explanation: "5 = a¹." },
      ],
    },
  ],

  "y10-growth-decay": [
    {
      title: "Exponential Growth and Decay",
      explanation:
        "OVERVIEW. Many real-world quantities change by a constant PERCENTAGE per period rather than a constant amount. The general model is\n  A(t) = A₀ · r^t\nwhere A₀ is the initial value, t the number of periods, and r the per-period growth (r > 1) or decay (0 < r < 1) factor.\n\nIf the rate is p% per period, then r = 1 + p/100 (growth) or r = 1 − p/100 (decay).",
      keyPoints: ["A(t) = A₀ · r^t", "Growth: r > 1; Decay: 0 < r < 1", "r = 1 + p/100 or 1 − p/100"],
      workedExamples: [
        { problem: "A town has 5000 people growing at 4% per year. Population in 10 years?", steps: ["A = 5000 · 1.04¹⁰", "= 5000 · 1.4802...", "≈ 7401"], answer: "≈ 7401 people" },
        { problem: "A car worth $30 000 depreciates 15% per year. Value after 5 years?", steps: ["A = 30000 · 0.85⁵", "= 30000 · 0.4437...", "≈ $13 311"], answer: "≈ $13 311" },
      ],
      tips: ["Always state whether the model is growth or decay before substituting values."],
      commonErrors: ["Using p% as r directly (e.g. 0.04 instead of 1.04)"],
      summary: ["EXAM INSIGHT: 3-mark questions with multiple compounding periods."],
      practice: [
        { question: "Population of 8000 grows 3% per year. After 6 years?", answer: "≈ 9551" },
        { question: "$50000 car depreciates 12% per year. Value after 4 years?", answer: "≈ $29 992" },
      ],
      quiz: [
        { question: "Growth factor for 8% per year:", options: ["0.08", "1.08", "0.92", "8"], correctAnswer: 1, explanation: "1 + 0.08." },
        { question: "Decay factor for 25% per year:", options: ["0.25", "1.25", "0.75", "−0.25"], correctAnswer: 2, explanation: "1 − 0.25 = 0.75." },
      ],
    },
    {
      title: "Half-Life and Doubling Time",
      explanation:
        "HALF-LIFE is the time for a quantity to halve; DOUBLING TIME is the time for it to double. Used heavily in biology, chemistry and finance.",
      keyPoints: ["Half-life: A = A₀ · (1/2)^(t/h)", "Doubling: A = A₀ · 2^(t/d)", "Solve for t with logs (covered later) or by inspection"],
      workedExamples: [
        { problem: "Substance halves every 5 hours. Initial 80 g. Mass after 15 hours?", steps: ["A = 80 · (1/2)^(15/5)", "= 80 · (1/2)³ = 80 · 1/8 = 10"], answer: "10 g" },
      ],
      tips: ["Express t in the same unit as the half-life (hours match hours)."],
      commonErrors: ["Confusing total time with number of half-lives"],
      summary: ["EXAM INSIGHT: Common biology/physics context worth 2–3 marks."],
      practice: [
        { question: "Population doubles every 2 years. Start 500. After 8 years?", answer: "8000" },
      ],
      quiz: [
        { question: "Half-life of 4 hours, after 12 hours fraction left:", options: ["1/2", "1/4", "1/8", "1/16"], correctAnswer: 2, explanation: "(1/2)³ = 1/8." },
      ],
    },
    {
      title: "Comparing Growth and Decay Models",
      explanation:
        "Two contrasting models can be compared by computing values at chosen times or by noting the long-term behaviour: growth → ∞, decay → 0.",
      keyPoints: ["Compare values at meaningful times", "Growth diverges; decay converges to 0"],
      workedExamples: [
        { problem: "Bank A pays 5% per year compounded; Bank B pays 4.5% but compounded twice yearly. Which yields more after 10 years?", steps: ["A: (1.05)¹⁰ ≈ 1.6289", "B: (1.0225)²⁰ ≈ 1.5605", "A wins"], answer: "Bank A" },
      ],
      tips: ["When comparing, always evaluate at the same time t."],
      commonErrors: ["Comparing factors r without raising to the relevant power"],
      summary: ["EXAM INSIGHT: Reasoning marks reward clear comparison logic."],
      practice: [
        { question: "Compare growth at 6%/yr vs 5.8% compounded monthly over 5 years.", answer: "Monthly compounding wins by ~0.1%" },
      ],
      quiz: [
        { question: "Long-term behaviour of decay (r < 1):", options: ["→ ∞", "→ 0", "Constant", "Oscillates"], correctAnswer: 1, explanation: "Approaches zero asymptotically." },
      ],
    },
  ],

  "y10-compound-interest": [
    {
      title: "Compound Interest Formula",
      explanation:
        "OVERVIEW. Compound interest pays interest on previously accumulated interest. The formula is\n  A = P(1 + r/n)^(n·t)\nwhere\n  P = principal\n  r = annual interest rate (decimal)\n  n = compounding periods per year\n  t = time in years\n  A = final amount.\n\nINTEREST EARNED = A − P.",
      keyPoints: ["A = P(1 + r/n)^(nt)", "Annual: n = 1; Quarterly: n = 4; Monthly: n = 12", "Interest = A − P"],
      workedExamples: [
        { problem: "$10 000 invested at 6% p.a. compounded annually for 5 years.", steps: ["A = 10000(1.06)⁵", "= 10000 · 1.3382...", "≈ $13 382"], answer: "≈ $13 382" },
        { problem: "$5000 at 4% compounded quarterly for 3 years.", steps: ["A = 5000(1 + 0.04/4)^(4·3)", "= 5000(1.01)¹²", "≈ 5000 · 1.1268", "≈ $5634"], answer: "≈ $5634" },
      ],
      tips: ["Convert percentages to decimals BEFORE substitution."],
      commonErrors: ["Using r as a percentage instead of a decimal", "Forgetting to multiply n by t in the exponent"],
      summary: ["EXAM INSIGHT: Standard 3-mark item; clearly state values for each variable."],
      practice: [
        { question: "$8000 at 5% compounded monthly for 4 years.", answer: "≈ $9764" },
        { question: "$1500 at 8% compounded annually for 7 years.", answer: "≈ $2570" },
      ],
      quiz: [
        { question: "Quarterly compounding has n = ?", options: ["1", "4", "6", "12"], correctAnswer: 1, explanation: "4 quarters per year." },
        { question: "$1000 at 10% p.a. annual for 2 years gives:", options: ["$1100", "$1200", "$1210", "$1300"], correctAnswer: 2, explanation: "1000 · 1.1² = 1210." },
      ],
    },
    {
      title: "Comparing Compound and Simple Interest",
      explanation:
        "Simple interest: I = Prt (constant per year). Compound interest grows faster than simple interest because it earns interest on interest.",
      keyPoints: ["Simple: I = Prt", "Compound > Simple over time", "Difference grows with t"],
      workedExamples: [
        { problem: "$2000 for 5 years at 6%. Simple vs annually compounded?", steps: ["Simple: I = 2000·0.06·5 = $600 → A = $2600", "Compound: A = 2000(1.06)⁵ ≈ $2676.45", "Compound is $76.45 more"], answer: "Compound earns $76.45 more" },
      ],
      tips: ["For short t and small r, simple ≈ compound; for large t the gap widens dramatically."],
      commonErrors: ["Forgetting to add P to interest in simple-interest problems"],
      summary: ["EXAM INSIGHT: Direct comparison questions worth 3 marks."],
      practice: [
        { question: "$1000 for 10 years at 5%. Compute both totals.", answer: "Simple $1500; Compound ≈ $1628.89" },
      ],
      quiz: [
        { question: "Simple interest grows:", options: ["Exponentially", "Linearly", "Quadratically", "Logarithmically"], correctAnswer: 1, explanation: "I = Prt is linear in t." },
      ],
    },
    {
      title: "Solving for Time or Principal",
      explanation:
        "Rearrange A = P(1 + r/n)^(nt) for the unknown variable. Solving for t requires logarithms (covered next sections); solving for P uses simple division.",
      keyPoints: ["Solve for P: divide by the bracket factor", "Solve for r: take nt-th root", "Solve for t: requires logs"],
      workedExamples: [
        { problem: "How much P should be invested at 5% annually compounded to reach $20 000 in 10 years?", steps: ["20000 = P · (1.05)¹⁰", "P = 20000 / 1.6289 ≈ $12 278"], answer: "≈ $12 278" },
      ],
      tips: ["Compute the bracket factor first, then divide."],
      commonErrors: ["Forgetting to use the FULL exponent nt"],
      summary: ["EXAM INSIGHT: Sets up the log-based time questions in section 2L."],
      practice: [
        { question: "Find P invested at 4% annually for 8 years to give $10 000.", answer: "≈ $7307" },
      ],
      quiz: [
        { question: "If A = 2P for one period at rate r, then 1 + r = ?", options: ["1", "2", "P", "0.5"], correctAnswer: 1, explanation: "P(1+r) = 2P → 1+r = 2." },
      ],
    },
  ],

  "y10-intro-logs": [
    {
      title: "Introduction to Logarithms",
      explanation:
        "OVERVIEW. A LOGARITHM answers the question: 'To what power must I raise the base to get this number?' Formally,\n  log_a(N) = x  ⇔  aˣ = N\nwhere a > 0, a ≠ 1, N > 0.\n\nKEY VALUES.\n  • log_a(1) = 0 (since a⁰ = 1).\n  • log_a(a) = 1.\n  • log_a(aⁿ) = n.",
      keyPoints: ["log_a N = x ⇔ aˣ = N", "log_a 1 = 0; log_a a = 1", "Argument N must be positive"],
      workedExamples: [
        { problem: "Evaluate log₂ 8.", steps: ["2^? = 8 → 2³ = 8", "= 3"], answer: "3" },
        { problem: "Evaluate log₅ (1/25).", steps: ["5^? = 1/25 = 5⁻²", "= −2"], answer: "−2" },
        { problem: "Convert 3⁴ = 81 to log form.", steps: ["log₃ 81 = 4"], answer: "log₃ 81 = 4" },
      ],
      tips: ["Negative argument has NO real log: log_a(−2) is undefined."],
      commonErrors: ["Forgetting the base in the exponential conversion", "Treating log_a(0) as defined"],
      summary: ["EXAM INSIGHT: Conversion between exponential and log form is a 1-mark must-have."],
      practice: [
        { question: "Evaluate log₃ 27.", answer: "3" },
        { question: "Evaluate log₁₀ 0.001.", answer: "−3" },
        { question: "Convert 2⁵ = 32 to log form.", answer: "log₂ 32 = 5" },
      ],
      quiz: [
        { question: "log₁₀ 1000 = ?", options: ["1", "2", "3", "10"], correctAnswer: 2, explanation: "10³ = 1000." },
        { question: "log_a 1 = ?", options: ["0", "1", "a", "Undefined"], correctAnswer: 0, explanation: "a⁰ = 1." },
        { question: "log₂ (−4) is:", options: ["−2", "2", "Undefined", "0"], correctAnswer: 2, explanation: "Logs of negative arguments are undefined." },
      ],
    },
    {
      title: "Common and Natural Logarithms",
      explanation:
        "log without a stated base usually means log₁₀ (the common logarithm). ln means log_e (the natural logarithm), where e ≈ 2.71828 is Euler's number. These appear on calculators directly.",
      keyPoints: ["log = log₁₀", "ln = log_e", "Calculator buttons: log and ln"],
      workedExamples: [
        { problem: "Use a calculator: log 200 to 3 d.p.", steps: ["log 200 ≈ 2.301"], answer: "≈ 2.301" },
        { problem: "Use a calculator: ln 5 to 3 d.p.", steps: ["≈ 1.609"], answer: "≈ 1.609" },
      ],
      tips: ["Always identify which base your calculator key uses."],
      commonErrors: ["Using ln when the problem asks for log₁₀"],
      summary: ["EXAM INSIGHT: Calculator answers must be quoted to the precision required."],
      practice: [
        { question: "Compute log 50 to 2 d.p.", answer: "≈ 1.70" },
        { question: "Compute ln 10 to 2 d.p.", answer: "≈ 2.30" },
      ],
      quiz: [
        { question: "log 100 = ?", options: ["1", "2", "10", "100"], correctAnswer: 1, explanation: "10² = 100." },
      ],
    },
    {
      title: "Logarithms as Inverse of Exponentials",
      explanation:
        "Because aˣ and log_a are inverse functions, applying one undoes the other:\n  log_a(aˣ) = x and a^(log_a x) = x.",
      keyPoints: ["log_a(aˣ) = x", "a^(log_a x) = x", "Useful for solving exponential equations"],
      workedExamples: [
        { problem: "Simplify log₅(5⁷).", steps: ["= 7"], answer: "7" },
        { problem: "Simplify 3^(log₃ 11).", steps: ["= 11"], answer: "11" },
      ],
      tips: ["Recognise the inverse pair to skip lengthy calculation."],
      commonErrors: ["Not recognising that log and exponential undo each other"],
      summary: ["EXAM INSIGHT: Quick 1-mark gainers."],
      practice: [
        { question: "Simplify log₂(2¹⁰).", answer: "10" },
      ],
      quiz: [
        { question: "Simplify e^(ln 7).", options: ["1", "7", "e⁷", "ln 7"], correctAnswer: 1, explanation: "Inverse functions cancel." },
      ],
    },
  ],

  "y10-log-scales": [
    {
      title: "Logarithmic Scales",
      explanation:
        "Some quantities span MANY orders of magnitude. A log scale shows the LOGARITHM of the quantity rather than the quantity itself, compressing the range.\n\nEXAMPLES.\n  • Richter scale (earthquakes): each unit ≈ ×10 amplitude.\n  • pH scale (acidity): pH = −log[H⁺].\n  • Decibel scale (sound): each 10 dB ≈ ×10 intensity.",
      keyPoints: ["Each unit on a log₁₀ scale = ×10", "Useful for huge ranges (1 to 10⁹)", "Differences become ratios"],
      workedExamples: [
        { problem: "An earthquake of magnitude 6 vs 4 — how many times stronger in amplitude?", steps: ["Difference 6 − 4 = 2 → 10² = 100", "100 times stronger"], answer: "100×" },
        { problem: "Lemon juice has pH 2; pure water pH 7. Ratio of [H⁺]?", steps: ["Difference 5 → 10⁵", "Lemon juice is 100 000× more acidic"], answer: "100 000×" },
      ],
      tips: ["Subtract the log values to find the ratio of original quantities."],
      commonErrors: ["Subtracting the original quantities instead of taking the difference of log values"],
      summary: ["EXAM INSIGHT: Conceptual understanding worth 2 marks."],
      practice: [
        { question: "Magnitude 7 vs 5 earthquake — how much stronger?", answer: "100×" },
      ],
      quiz: [
        { question: "Each unit on the Richter scale represents what factor change in amplitude?", options: ["×2", "×5", "×10", "×100"], correctAnswer: 2, explanation: "Log base 10 scale." },
      ],
    },
    {
      title: "Reading Log-Scale Graphs",
      explanation:
        "On a log-scale axis, equal spacings represent equal RATIOS, not equal differences. Each major gridline is typically ×10 of the previous one.",
      keyPoints: ["Equal spacing = equal multiplicative factor", "Useful for exponential data", "Straight line on log scale = exponential"],
      workedExamples: [
        { problem: "If a quantity is plotted at 10², 10³, 10⁴ at equal spacing, what is between 10² and 10³?", steps: ["Geometric midpoint: 10^2.5 ≈ 316"], answer: "≈ 316" },
      ],
      tips: ["Read tick labels carefully — they are NOT equally spaced in linear value."],
      commonErrors: ["Linear interpolation between log gridlines"],
      summary: ["EXAM INSIGHT: Often paired with growth/decay."],
      practice: [
        { question: "Between 10⁰ and 10¹, what value sits at the geometric midpoint?", answer: "10^0.5 ≈ 3.16" },
      ],
      quiz: [
        { question: "On a log₁₀ scale, ten units up means a factor of:", options: ["10", "100", "10¹⁰", "1"], correctAnswer: 2, explanation: "Each unit = ×10; ten units = 10¹⁰." },
      ],
    },
    {
      title: "Applications of Log Scales",
      explanation:
        "Used in engineering (Bode plots), seismology, chemistry, music (octaves) and astronomy (apparent magnitudes).",
      keyPoints: ["Octave doubling: log₂", "Stellar magnitudes: log₁₀ scale", "Decibels in audio engineering"],
      workedExamples: [
        { problem: "How many octaves above middle A (440 Hz) is 1760 Hz?", steps: ["1760 / 440 = 4 = 2²", "Two octaves"], answer: "2 octaves" },
      ],
      tips: ["Music doubling = one octave; that is base-2 logarithmic."],
      commonErrors: ["Treating doubling as linear addition"],
      summary: ["EXAM INSIGHT: Real-world applications appear in extended response."],
      practice: [
        { question: "How many octaves between 220 Hz and 880 Hz?", answer: "2" },
      ],
      quiz: [
        { question: "60 dB compared to 30 dB — intensity ratio?", options: ["2", "30", "1000", "10⁶"], correctAnswer: 2, explanation: "Difference 30 → 10³." },
      ],
    },
  ],

  "y10-laws-logs": [
    {
      title: "Laws of Logarithms (10A)",
      explanation:
        "OVERVIEW. Logarithm laws mirror the index laws.\n  • Product:  log_a(MN) = log_a M + log_a N\n  • Quotient: log_a(M/N) = log_a M − log_a N\n  • Power:    log_a(Mᵏ) = k · log_a M\n  • Change of base: log_a M = log_b M / log_b a\n\nThese let us condense or expand log expressions.",
      keyPoints: ["Product → sum", "Quotient → difference", "Power → coefficient", "Change of base for calculator use"],
      workedExamples: [
        { problem: "Simplify log₂ 3 + log₂ 5.", steps: ["= log₂ 15"], answer: "log₂ 15" },
        { problem: "Simplify log₁₀ 200 − log₁₀ 2.", steps: ["= log₁₀ (200/2) = log₁₀ 100 = 2"], answer: "2" },
        { problem: "Express 3 log₅ 2 as a single log.", steps: ["= log₅ 2³ = log₅ 8"], answer: "log₅ 8" },
      ],
      tips: ["Combine into a single logarithm before evaluating numerically."],
      commonErrors: ["Treating log(a + b) as log a + log b (FALSE)"],
      summary: ["EXAM INSIGHT: 2–3 mark items; all three laws often appear in one question."],
      practice: [
        { question: "Simplify log 8 + log 125.", answer: "3" },
        { question: "Simplify 2 log 5 + log 4.", answer: "2" },
        { question: "Simplify log₃ 27 − log₃ 3.", answer: "2" },
      ],
      quiz: [
        { question: "log 6 + log 5 = ?", options: ["log 30", "log 11", "30", "1"], correctAnswer: 0, explanation: "Product law." },
        { question: "log₂ 16 − log₂ 4 = ?", options: ["1", "2", "4", "8"], correctAnswer: 1, explanation: "log₂ 4 = 2." },
        { question: "3 log₂ 5 = ?", options: ["log₂ 15", "log₂ 125", "log₂ 8", "5 log₂ 3"], correctAnswer: 1, explanation: "Power law: 5³ = 125." },
      ],
    },
    {
      title: "Expanding Single Logs",
      explanation:
        "The laws can be reversed to break a single log into a sum of simpler logs.",
      keyPoints: ["Reverse the laws to expand", "Useful for showing all working"],
      workedExamples: [
        { problem: "Expand log(x²y/z).", steps: ["= log x² + log y − log z", "= 2 log x + log y − log z"], answer: "2 log x + log y − log z" },
      ],
      tips: ["Order: factor out the powers first, then split products and quotients."],
      commonErrors: ["Splitting log(x + y) as log x + log y (false)"],
      summary: ["EXAM INSIGHT: Useful for simplifying calculus expressions later."],
      practice: [
        { question: "Expand log(a³b² / c).", answer: "3 log a + 2 log b − log c" },
      ],
      quiz: [
        { question: "Expand log(xy):", options: ["log x · log y", "log x + log y", "log(x + y)", "x log y"], correctAnswer: 1, explanation: "Product law." },
      ],
    },
    {
      title: "Change of Base Formula",
      explanation:
        "When a calculator only computes log₁₀ or ln, use\n  log_a M = ln M / ln a.\nThis converts a log of any base into a ratio of common (or natural) logs.",
      keyPoints: ["log_a M = ln M / ln a", "Use any base for the new logs", "Divides outside, not inside"],
      workedExamples: [
        { problem: "Compute log₃ 50 to 3 d.p.", steps: ["= ln 50 / ln 3", "≈ 3.912 / 1.099", "≈ 3.561"], answer: "≈ 3.561" },
      ],
      tips: ["Numerator and denominator must use the SAME new base."],
      commonErrors: ["Dividing the arguments rather than the logs"],
      summary: ["EXAM INSIGHT: Routine 2-mark calculator question."],
      practice: [
        { question: "Compute log₂ 30 to 3 d.p.", answer: "≈ 4.907" },
      ],
      quiz: [
        { question: "log₅ 25 by change of base = ln 25 / ln 5 = ?", options: ["1", "2", "5", "25"], correctAnswer: 1, explanation: "= 2 since 5² = 25." },
      ],
    },
  ],

  "y10-solving-exp-logs": [
    {
      title: "Solving Exponential Equations Using Logs (10A)",
      explanation:
        "OVERVIEW. When the bases on each side cannot be matched (e.g. 2ˣ = 7), apply a logarithm to BOTH sides and use the power law to bring x out of the exponent.\n\nMETHOD.\n  1. Isolate the exponential term.\n  2. Take log (or ln) of both sides.\n  3. Use log(aˣ) = x log a.\n  4. Solve linearly for x.",
      keyPoints: ["Take log of BOTH sides", "Power law brings x down", "Use ln for natural; log for base-10"],
      workedExamples: [
        { problem: "Solve 2ˣ = 7.", steps: ["Take log: x log 2 = log 7", "x = log 7 / log 2 ≈ 2.807"], answer: "x ≈ 2.807" },
        { problem: "Solve 3 · 5ˣ = 60.", steps: ["5ˣ = 20", "x = log 20 / log 5 ≈ 1.861"], answer: "x ≈ 1.861" },
        { problem: "Solve 2^(x+1) = 5.", steps: ["(x + 1) log 2 = log 5", "x + 1 = log 5 / log 2 ≈ 2.322", "x ≈ 1.322"], answer: "x ≈ 1.322" },
      ],
      tips: ["Always isolate the exponential term FIRST."],
      commonErrors: ["Dividing the bases instead of dividing the logs"],
      summary: ["EXAM INSIGHT: Standard 3-mark item that combines algebra + log laws."],
      practice: [
        { question: "Solve 4ˣ = 11.", answer: "x ≈ 1.730" },
        { question: "Solve 2^(x-1) = 50.", answer: "x ≈ 6.644" },
        { question: "Solve 100 · 1.05ᵗ = 200.", answer: "t ≈ 14.21" },
      ],
      quiz: [
        { question: "Solve 2ˣ = 10. x = ?", options: ["log 10 / log 2", "log 2 / log 10", "log 5", "5"], correctAnswer: 0, explanation: "Power law applied." },
        { question: "Step 1 in solving 3 · 4ˣ = 48:", options: ["Divide by 3", "Take log first", "Add 3", "Divide by 4ˣ"], correctAnswer: 0, explanation: "Isolate 4ˣ first." },
      ],
    },
    {
      title: "Solving Real-World Exponential Equations",
      explanation:
        "Compound interest, half-life and population growth equations often require logs to solve for time t.",
      keyPoints: ["Use logs to extract t from exponent", "State assumptions clearly", "Round sensibly for the context"],
      workedExamples: [
        { problem: "$1000 grows at 5% p.a. compounded annually. When does it reach $2000?", steps: ["2000 = 1000 · 1.05ᵗ", "2 = 1.05ᵗ", "t = log 2 / log 1.05 ≈ 14.21 years"], answer: "≈ 14.21 years" },
        { problem: "A 100 g radioactive sample halves every 8 days. When is 25 g left?", steps: ["25 = 100 · (1/2)^(t/8)", "(1/2)^(t/8) = 1/4 = (1/2)²", "t/8 = 2 → t = 16 days"], answer: "16 days" },
      ],
      tips: ["Recognise common ratio cases (1/2, 1/4, etc.) where logs aren't needed."],
      commonErrors: ["Forgetting to bring the exponent down with the log law"],
      summary: ["EXAM INSIGHT: 4-mark modelling question typical in revision exams."],
      practice: [
        { question: "$5000 at 6% compounded annually doubles when?", answer: "≈ 11.9 years" },
      ],
      quiz: [
        { question: "Doubling time at 7% p.a. (annual compounding) ≈", options: ["7 years", "10 years", "12 years", "14 years"], correctAnswer: 1, explanation: "≈ ln 2 / ln 1.07 ≈ 10.24." },
      ],
    },
    {
      title: "Logarithmic Equations",
      explanation:
        "To solve an equation containing logs, combine into a SINGLE log on each side using the laws, then convert to exponential form.",
      keyPoints: ["Combine logs into one", "Convert to exponential form", "Check for excluded values (positive arguments)"],
      workedExamples: [
        { problem: "Solve log₂ x + log₂ (x − 2) = 3.", steps: ["log₂ [x(x−2)] = 3", "x² − 2x = 8 → x² − 2x − 8 = 0", "(x − 4)(x + 2) = 0 → x = 4 or x = −2", "Reject x = −2 (log undefined)"], answer: "x = 4" },
      ],
      tips: ["Always check final answers in the original equation — log domain restrictions matter."],
      commonErrors: ["Accepting negative roots that lie outside the log domain"],
      summary: ["EXAM INSIGHT: 'Reject extraneous solutions' is a common comment in marking schemes."],
      practice: [
        { question: "Solve log x + log (x − 3) = 1.", answer: "x = 5 (reject x = −2)" },
      ],
      quiz: [
        { question: "log_a x = b is equivalent to:", options: ["x = bᵃ", "x = aᵇ", "a = xᵇ", "b = xᵃ"], correctAnswer: 1, explanation: "Exponential form." },
      ],
    },
  ],
};
