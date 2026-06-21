import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 6: Surds & Measurement
export const year10Ch6Lessons: TopicLessonsMap = {
  "y10-irrational-numbers": [
    {
      title: "Irrational Numbers and Surds",
      explanation:
        "OVERVIEW. Real numbers split into RATIONAL (expressible as p/q) and IRRATIONAL (not). Examples of irrationals: √2, √3, π, e. A SURD is an irrational root such as √n where n is not a perfect square.\n\nSIMPLIFYING SURDS. Factor out the largest perfect square: √72 = √(36·2) = 6√2.",
      keyPoints: ["Surds are irrational", "Simplify by extracting perfect-square factors", "√(ab) = √a·√b"],
      workedExamples: [
        { problem: "Simplify √50.", steps: ["50 = 25·2", "√50 = 5√2"], answer: "5√2" },
        { problem: "Simplify √98.", steps: ["98 = 49·2"], answer: "7√2" },
      ],
      tips: ["Memorise perfect squares up to 20² = 400."],
      commonErrors: ["Missing the largest square factor"],
      summary: ["EXAM INSIGHT: Always simplify surds in the final answer."],
      practice: [
        { question: "Simplify √200.", answer: "10√2" },
        { question: "Simplify √45.", answer: "3√5" },
      ],
      quiz: [
        { question: "√72 = ?", options: ["6√2", "8√3", "12", "9√2"], correctAnswer: 0, explanation: "√(36·2) = 6√2." },
      ],
    },
  ],
  "y10-add-sub-surds": [
    {
      title: "Adding and Subtracting Surds",
      explanation: "Only LIKE surds can be combined: 3√2 + 5√2 = 8√2. Always simplify each surd first to identify like terms.",
      keyPoints: ["Combine coefficients of like surds", "Simplify before combining"],
      workedExamples: [
        { problem: "Simplify √50 + √8.", steps: ["= 5√2 + 2√2", "= 7√2"], answer: "7√2" },
      ],
      tips: ["Treat like surds as algebraic terms."],
      commonErrors: ["Adding √a + √b → √(a+b) (incorrect)"],
      summary: ["EXAM INSIGHT: √a + √b ≠ √(a+b)."],
      practice: [{ question: "√27 − √12.", answer: "√3" }],
      quiz: [{ question: "√18 + √8 = ?", options: ["√26", "5√2", "7√2", "√10"], correctAnswer: 1, explanation: "3√2 + 2√2 = 5√2." }],
    },
  ],
  "y10-mult-div-surds": [
    {
      title: "Multiplying and Dividing Surds",
      explanation: "RULES.  √a · √b = √(ab),  √a / √b = √(a/b),  (a√b)(c√d) = ac√(bd). Simplify the result.",
      keyPoints: ["Multiply coefficients and surds separately", "Quotient rule"],
      workedExamples: [
        { problem: "(2√3)(5√6).", steps: ["= 10√18", "= 30√2"], answer: "30√2" },
        { problem: "√50 / √2.", steps: ["= √25"], answer: "5" },
      ],
      tips: ["Always simplify after multiplying."],
      commonErrors: ["Forgetting to simplify √(ab)"],
      summary: ["EXAM INSIGHT: Combine and then simplify."],
      practice: [{ question: "√12 · √3.", answer: "6" }],
      quiz: [{ question: "(3√2)² = ?", options: ["6", "9√2", "12", "18"], correctAnswer: 3, explanation: "9·2 = 18." }],
    },
  ],
  "y10-rationalising": [
    {
      title: "Rationalising Denominators",
      explanation:
        "Rationalise to remove a surd from the denominator.\n\nMONOMIAL DENOMINATOR: multiply numerator and denominator by the surd.  3/√5 = 3√5/5.\n\nBINOMIAL DENOMINATOR: multiply by the CONJUGATE.  1/(2+√3) → multiply by (2−√3)/(2−√3) → (2−√3)/(4−3) = 2−√3.",
      keyPoints: ["Multiply by surd or conjugate", "Conjugate uses opposite sign", "(a+√b)(a−√b) = a²−b"],
      workedExamples: [
        { problem: "Rationalise 5/√3.", steps: ["× √3/√3", "= 5√3/3"], answer: "5√3/3" },
        { problem: "Rationalise 1/(3 − √2).", steps: ["× (3+√2)/(3+√2)", "= (3+√2)/(9−2)"], answer: "(3+√2)/7" },
      ],
      tips: ["Conjugate: change the sign of the surd term."],
      commonErrors: ["Multiplying numerator only"],
      summary: ["EXAM INSIGHT: Always rationalise final answers when possible."],
      practice: [{ question: "Rationalise 4/√7.", answer: "4√7/7" }],
      quiz: [{ question: "Conjugate of 5 + √2 is…", options: ["−5+√2", "5−√2", "−5−√2", "√2"], correctAnswer: 1, explanation: "Flip surd sign." }],
    },
  ],
  "y10-review-length": [
    {
      title: "Perimeter, Circumference and Unit Conversions",
      explanation:
        "Perimeter = sum of side lengths. Circle circumference C = 2πr = πd. Common conversions: 1 m = 100 cm = 1000 mm; 1 km = 1000 m.",
      keyPoints: ["C = 2πr", "Convert units before computing", "Composite shapes: add sub-perimeters"],
      workedExamples: [
        { problem: "Circumference of a circle with r=7cm.", steps: ["C = 2π·7 = 14π"], answer: "14π cm ≈ 43.98 cm" },
      ],
      tips: ["Express π exactly unless asked otherwise."],
      commonErrors: ["Using diameter instead of radius"],
      summary: ["EXAM INSIGHT: Check unit consistency."],
      practice: [{ question: "Perimeter of square with side 6.5m.", answer: "26 m" }],
      quiz: [{ question: "C of circle r=5? (in terms of π)", options: ["5π", "10π", "25π", "π"], correctAnswer: 1, explanation: "2π·5 = 10π." }],
    },
  ],
  "y10-pythagoras-3d": [
    {
      title: "Pythagoras in 2D and 3D",
      explanation:
        "2D: c² = a² + b² for the right triangle.\n\n3D: For a rectangular box with sides a,b,c the SPACE DIAGONAL d satisfies d² = a² + b² + c². Apply Pythagoras twice if needed (face diagonal then space diagonal).",
      keyPoints: ["c² = a² + b²", "Box space diagonal: d² = a²+b²+c²", "Apply Pythagoras in stages"],
      workedExamples: [
        { problem: "Box 3×4×12. Space diagonal?", steps: ["d² = 9+16+144 = 169"], answer: "13" },
      ],
      tips: ["Sketch and label."],
      commonErrors: ["Mixing 2D and 3D distances"],
      summary: ["EXAM INSIGHT: 3D problems often unfold to 2D right triangles."],
      practice: [{ question: "Box 1×2×2. Space diagonal?", answer: "3" }],
      quiz: [{ question: "Right triangle 5,12,?.", options: ["13", "17", "11", "15"], correctAnswer: 0, explanation: "5²+12²=169=13²." }],
    },
  ],
  "y10-review-area": [
    {
      title: "Area of Standard and Composite Shapes",
      explanation:
        "FORMULAS.\n  Square: s²,  Rectangle: bh,  Triangle: ½bh,  Parallelogram: bh,  Trapezium: ½(a+b)h,  Circle: πr².\n\nFor composite shapes: split into known pieces, add or subtract areas.",
      keyPoints: ["Memorise standard formulas", "Decompose composite shapes"],
      workedExamples: [
        { problem: "Trapezium parallel sides 6,10, height 4.", steps: ["½(6+10)·4 = 32"], answer: "32 sq units" },
      ],
      tips: ["Check perpendicular height (not slant)."],
      commonErrors: ["Using slant height instead of perpendicular"],
      summary: ["EXAM INSIGHT: Decomposition is the key 10A skill."],
      practice: [{ question: "Circle area, r=5. (in π)", answer: "25π" }],
      quiz: [{ question: "Triangle base 8, height 5. Area?", options: ["13", "20", "40", "10"], correctAnswer: 1, explanation: "½·8·5 = 20." }],
    },
  ],
  "y10-measurement-errors": [
    {
      title: "Precision, Accuracy and Percentage Error",
      explanation:
        "ABSOLUTE ERROR = |measured − true|.  RELATIVE ERROR = absolute / true.  PERCENTAGE ERROR = relative · 100%.\n\nMeasurements are accurate to ±½ of the smallest unit on the scale.",
      keyPoints: ["±½ smallest unit", "Percentage error = error/true × 100%"],
      workedExamples: [
        { problem: "Measured 9.8, true 10. % error?", steps: ["|9.8−10|/10 = 0.02", "= 2%"], answer: "2%" },
      ],
      tips: ["Always carry units."],
      commonErrors: ["Dividing by measured rather than true"],
      summary: ["EXAM INSIGHT: Engineering tolerance questions appear here."],
      practice: [{ question: "Ruler to nearest mm. Tolerance?", answer: "±0.5 mm" }],
      quiz: [{ question: "True 50, measured 51. % error?", options: ["1%", "2%", "5%", "0.5%"], correctAnswer: 1, explanation: "1/50 = 2%." }],
    },
  ],
  "y10-sa-prisms-cylinders": [
    {
      title: "Surface Area and Volume of Prisms and Cylinders",
      explanation:
        "PRISM:  V = base area × height; SA = 2·base + perimeter·height.\nCYLINDER:  V = πr²h; SA = 2πr² + 2πrh.",
      keyPoints: ["Prism volume = Bh", "Cylinder V = πr²h", "Cylinder SA includes 2 circles + curved surface"],
      workedExamples: [
        { problem: "Cylinder r=3, h=10. V?", steps: ["V = π·9·10"], answer: "90π" },
      ],
      tips: ["Sketch and label r and h."],
      commonErrors: ["Confusing radius and diameter"],
      summary: ["EXAM INSIGHT: 'Closed' vs 'open' cylinders change SA."],
      practice: [{ question: "Triangular prism, base area 12, h=5. V?", answer: "60" }],
      quiz: [{ question: "Cylinder SA formula:", options: ["πrh", "2πr²+2πrh", "πr²h", "2πr+h"], correctAnswer: 1, explanation: "Two circles + lateral." }],
    },
  ],
  "y10-sa-pyramids-cones": [
    {
      title: "Surface Area and Volume of Pyramids and Cones",
      explanation:
        "PYRAMID:  V = ⅓·base area·height.\nCONE:  V = ⅓πr²h;  curved SA = πr·ℓ (ℓ = slant height); total SA = πr² + πrℓ.\n\nFind ℓ via Pythagoras: ℓ² = r² + h².",
      keyPoints: ["⅓ factor for pyramid/cone volume", "Cone slant ℓ² = r² + h²"],
      workedExamples: [
        { problem: "Cone r=3, h=4. ℓ?", steps: ["ℓ² = 9+16 = 25"], answer: "5" },
        { problem: "Cone r=3, h=4. V?", steps: ["⅓·π·9·4 = 12π"], answer: "12π" },
      ],
      tips: ["Distinguish slant from perpendicular height."],
      commonErrors: ["Using ℓ in volume (wrong — use h)"],
      summary: ["EXAM INSIGHT: Cone problems require Pythagoras for ℓ."],
      practice: [{ question: "Cone r=6, h=8. ℓ?", answer: "10" }],
      quiz: [{ question: "Pyramid V formula:", options: ["Bh", "½Bh", "⅓Bh", "πBh"], correctAnswer: 2, explanation: "⅓·base·height." }],
    },
  ],
  "y10-spheres": [
    {
      title: "Surface Area and Volume of Spheres",
      explanation: "SPHERE:  V = (4/3)πr³;  SA = 4πr².  HEMISPHERE (closed):  V = (2/3)πr³,  SA = 3πr² (curved + circle base).",
      keyPoints: ["V = 4/3 πr³", "SA = 4πr²", "Hemisphere SA = 3πr² (closed)"],
      workedExamples: [
        { problem: "Sphere r=3. V?", steps: ["(4/3)π·27 = 36π"], answer: "36π" },
      ],
      tips: ["Check whether hemisphere is open or closed."],
      commonErrors: ["Forgetting the base circle in closed hemispheres"],
      summary: ["EXAM INSIGHT: Spheres are 10A standard."],
      practice: [{ question: "Sphere r=5. SA?", answer: "100π" }],
      quiz: [{ question: "Sphere V, r=6 (in π) =?", options: ["72π", "144π", "216π", "288π"], correctAnswer: 3, explanation: "(4/3)π·216 = 288π." }],
    },
  ],
};
