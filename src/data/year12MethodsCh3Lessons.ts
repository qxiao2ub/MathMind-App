import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 3: Transformations (VCE Unit 3)

export const year12MethodsCh3Lessons: TopicLessonsMap = {
  "y12m-ch3-3a-translations": [
    {
      title: "Translations",
      explanation:
        "A TRANSLATION shifts every point of a graph by a fixed vector without changing shape or orientation.\n\nHORIZONTAL: y = f(x − a) shifts the graph of y = f(x) by a units to the RIGHT (when a > 0). Note the SUBTRACTION inside the bracket — this is a frequent trap.\n\nVERTICAL: y = f(x) + b shifts the graph by b units UP when b > 0.\n\nCOMBINED: y = f(x − a) + b shifts right by a and up by b. The new point corresponding to (x, y) is (x + a, y + b).\n\nMAPPING NOTATION: (x, y) → (x + a, y + b).\n\nKey features that move under translation: x-intercepts shift horizontally by a, y-intercepts shift vertically by b, the vertex of a parabola moves accordingly.",
      keyPoints: [
        "y = f(x − a) shifts right by a (subtract inside)",
        "y = f(x) + b shifts up by b",
        "Mapping: (x, y) → (x + a, y + b)",
      ],
      workedExamples: [
        {
          problem: "Describe the transformation from y = x² to y = (x − 3)² + 2.",
          steps: [
            "Shift right by 3 (because of −3 inside)",
            "Shift up by 2",
            "Vertex moves from (0, 0) to (3, 2)",
          ],
          answer: "Right 3, up 2; new vertex (3, 2).",
        },
      ],
      tips: [
        "The minus sign inside the bracket means RIGHT, not left",
      ],
      formulas: [
        { name: "Translation", formula: "y = f(x − a) + b" },
      ],
      examQuestion: {
        problem: "y = √x is translated 4 units left and 1 unit down. Write the new rule.",
        solution: [
          "Left 4 → replace x with x + 4",
          "Down 1 → subtract 1",
          "y = √(x + 4) − 1",
        ],
        answer: "y = √(x + 4) − 1.",
        marks: 2,
      },
      commonErrors: [
        "Treating y = f(x − a) as a left shift",
        "Forgetting to move both intercepts and key points",
      ],
      summary: [
        "Translations preserve shape",
        "Inside bracket affects x; outside affects y",
      ],
      quiz: [
        { question: "y = (x+2)² shifts y=x²:", options: ["Right 2", "Left 2", "Up 2", "Down 2"], correctAnswer: 1, explanation: "+2 inside → left." },
        { question: "y = x² − 5 shifts y=x²:", options: ["Up 5", "Down 5", "Right 5", "Left 5"], correctAnswer: 1, explanation: "Subtract outside → down." },
        { question: "y = (x−1)² + 4 vertex:", options: ["(1,4)", "(−1,4)", "(1,−4)", "(−1,−4)"], correctAnswer: 0, explanation: "Right 1, up 4." },
      ],
    },
  ],

  "y12m-ch3-3b-dilations": [
    {
      title: "Dilations",
      explanation:
        "A DILATION stretches or compresses a graph from an axis.\n\nDILATION FROM THE x-AXIS by factor a (vertical):\n  y = a · f(x).\n  • |a| > 1 stretches; 0 < |a| < 1 compresses.\n  • a < 0 includes a reflection in the x-axis.\n  • Mapping: (x, y) → (x, ay).\n\nDILATION FROM THE y-AXIS by factor 1/k (horizontal):\n  y = f(kx).\n  • k > 1 compresses horizontally by factor 1/k.\n  • 0 < k < 1 stretches horizontally by factor 1/k.\n  • Mapping: (x, y) → (x/k, y).\n\nUseful interpretation: vertical dilation multiplies y; horizontal dilation divides x.",
      keyPoints: [
        "Vertical: y = a·f(x); (x, y) → (x, ay)",
        "Horizontal: y = f(kx); (x, y) → (x/k, y)",
        "k > 1 means horizontal compression",
      ],
      workedExamples: [
        {
          problem: "Describe the dilation from y = sin(x) to y = sin(2x).",
          steps: [
            "k = 2 → horizontal compression by factor 1/2",
            "Period changes from 2π to π",
          ],
          answer: "Horizontal compression by factor 1/2.",
        },
      ],
      tips: [
        "Read k carefully: y = f(2x) is a SQUEEZE not a stretch",
      ],
      formulas: [
        { name: "Vertical dilation", formula: "y = a·f(x)" },
        { name: "Horizontal dilation", formula: "y = f(kx); horizontal factor = 1/k" },
      ],
      examQuestion: {
        problem: "Describe the transformation y = 3 cos(x/2) of y = cos(x).",
        solution: [
          "Vertical dilation factor 3 (from x-axis)",
          "Horizontal dilation factor 2 (from y-axis), since k = 1/2",
        ],
        answer: "Vertical stretch ×3, horizontal stretch ×2.",
        marks: 2,
      },
      commonErrors: [
        "Confusing horizontal stretch with compression",
        "Treating y = f(2x) as horizontal stretch by 2",
      ],
      summary: [
        "Dilations multiply (y) or divide (x)",
        "Watch direction of stretch carefully",
      ],
      quiz: [
        { question: "y = 4f(x) dilates:", options: ["Horizontally ×4", "Vertically ×4", "Vertically ×1/4", "Horizontally ×1/4"], correctAnswer: 1, explanation: "Multiply y by 4." },
        { question: "y = f(3x) dilates horizontally:", options: ["×3", "×1/3", "×9", "×1/9"], correctAnswer: 1, explanation: "Compression by 1/3." },
        { question: "Reflection occurs when a is:", options: ["0", "Positive", "Negative", "Equal to 1"], correctAnswer: 2, explanation: "Negative coefficient." },
      ],
    },
  ],

  "y12m-ch3-3c-reflections": [
    {
      title: "Reflections",
      explanation:
        "REFLECTION IN THE x-AXIS: y = −f(x). Each y is negated. Mapping (x, y) → (x, −y).\n\nREFLECTION IN THE y-AXIS: y = f(−x). Each x is negated. Mapping (x, y) → (−x, y).\n\nREFLECTION IN ORIGIN: y = −f(−x). Combination of both reflections.\n\nReflections preserve distance and shape but reverse orientation. Even functions are unchanged by y-axis reflection; odd functions are unchanged by origin reflection.",
      keyPoints: [
        "x-axis reflection: y = −f(x)",
        "y-axis reflection: y = f(−x)",
        "Origin reflection: y = −f(−x)",
      ],
      workedExamples: [
        {
          problem: "Reflect y = √x in the y-axis.",
          steps: [
            "Replace x with −x: y = √(−x)",
            "Domain becomes x ≤ 0",
          ],
          answer: "y = √(−x), domain (−∞, 0].",
        },
      ],
      tips: [
        "Reflections may change the domain (especially with radicals/logs)",
      ],
      formulas: [
        { name: "Reflections", formula: "x-axis: −f(x); y-axis: f(−x)" },
      ],
      examQuestion: {
        problem: "y = log(x) is reflected in the x-axis. Write the new rule and state its range.",
        solution: [
          "y = −log(x)",
          "Domain unchanged: (0, ∞)",
          "Range: ℝ (negated logs span all reals)",
        ],
        answer: "y = −log(x), range ℝ.",
        marks: 2,
      },
      commonErrors: [
        "Confusing y- and x-axis reflections",
        "Forgetting domain change after y-axis reflection",
      ],
      summary: [
        "Negative outside reflects in x-axis",
        "Negative inside reflects in y-axis",
      ],
      quiz: [
        { question: "y = −x² is x² reflected in:", options: ["x-axis", "y-axis", "Origin", "Line y=x"], correctAnswer: 0, explanation: "Outside negation." },
        { question: "y = (−x)³ equals:", options: ["x³", "−x³", "x", "−x"], correctAnswer: 1, explanation: "Cube of negative." },
        { question: "Even function is unchanged by:", options: ["x-axis reflection", "y-axis reflection", "Origin reflection", "All"], correctAnswer: 1, explanation: "f(−x) = f(x)." },
      ],
    },
  ],

  "y12m-ch3-3d-combinations": [
    {
      title: "Combinations of Transformations",
      explanation:
        "When multiple transformations apply, the ORDER matters. A safe convention is the DRT order applied to the parent function:\n  D — Dilations (and reflections),\n  R — Reflections (handled with sign of dilation factor),\n  T — Translations LAST.\n\nFor y = a · f(k(x − h)) + b, perform on the parent in order:\n  1. Horizontal dilation by factor 1/k (squeeze if |k| > 1).\n  2. Reflection in y-axis if k < 0.\n  3. Vertical dilation by factor |a|.\n  4. Reflection in x-axis if a < 0.\n  5. Horizontal translation by h.\n  6. Vertical translation by b.\n\nMAPPING: (x, y) → (x/k + h, ay + b).",
      keyPoints: [
        "Dilations and reflections before translations",
        "Horizontal acts on x; vertical acts on y",
        "Mapping: (x, y) → (x/k + h, ay + b)",
      ],
      workedExamples: [
        {
          problem: "Describe transformations from y = f(x) to y = −2f(3(x − 1)) + 4.",
          steps: [
            "Horizontal compression by 1/3",
            "Vertical dilation ×2",
            "Reflection in x-axis (a = −2)",
            "Right 1, up 4",
          ],
          answer: "Squeeze x by 1/3; stretch y by 2; reflect x-axis; right 1; up 4.",
        },
      ],
      tips: [
        "Apply the inside operations to x first, outside operations to y last",
      ],
      formulas: [
        { name: "General transformation", formula: "y = a·f(k(x − h)) + b" },
      ],
      examQuestion: {
        problem: "Find the image of (2, 5) under y = 3f(2(x − 1)) − 4.",
        solution: [
          "k = 2, h = 1, a = 3, b = −4",
          "Mapping: (x, y) → (x/2 + 1, 3y − 4)",
          "(2, 5) → (2/2 + 1, 3·5 − 4) = (2, 11)",
        ],
        answer: "(2, 11).",
        marks: 3,
      },
      commonErrors: [
        "Translating before dilating",
        "Forgetting to apply dilation to translation magnitude",
      ],
      summary: [
        "Use the DRT order",
        "Mapping (x, y) → (x/k + h, ay + b)",
      ],
      quiz: [
        { question: "Order: dilations then translations because:", options: ["Convention only", "Translations affect already-shaped graph", "Doesn't matter", "Reflections are last"], correctAnswer: 1, explanation: "Order changes result." },
        { question: "k = 2 means horizontal:", options: ["Stretch ×2", "Compression ×1/2", "Reflection", "Translation"], correctAnswer: 1, explanation: "Squeeze." },
        { question: "Mapping for y = a f(k(x−h))+b is:", options: ["(x,y)→(kx+h, ay+b)", "(x,y)→(x/k + h, ay + b)", "(x,y)→(x+h, y+b)", "(x,y)→(x−h, y−b)"], correctAnswer: 1, explanation: "Standard formula." },
      ],
    },
  ],

  "y12m-ch3-3e-determining": [
    {
      title: "Determining Transformations",
      explanation:
        "Given two functions or two graphs, determine the SEQUENCE of transformations that maps one to the other.\n\nSTRATEGY:\n  1. Compare equations: factor inside the function to identify h and k.\n  2. Identify amplitude / vertical dilation from the coefficient of f(x).\n  3. Determine reflection from sign.\n  4. Read horizontal translation h from inside the bracket.\n  5. Read vertical translation b from the constant outside.\n\nFor periodic functions, identify period (relates to k) and amplitude (vertical dilation).",
      keyPoints: [
        "Factorise inside the function to expose k and h",
        "Sign determines reflection",
        "Constant outside is vertical translation",
      ],
      workedExamples: [
        {
          problem: "From y = f(x) to y = f(2x − 4). Identify transformations.",
          steps: [
            "Factor inside: 2x − 4 = 2(x − 2)",
            "k = 2 → horizontal compression ×1/2",
            "h = 2 → translate right 2",
          ],
          answer: "Compress x by 1/2; translate right 2.",
        },
      ],
      tips: [
        "Always factor before reading h",
      ],
      examQuestion: {
        problem: "Identify transformations from y = sin(x) to y = −3 sin(2x − π) + 1.",
        solution: [
          "Factor: 2x − π = 2(x − π/2)",
          "k = 2 → horizontal squeeze ×1/2; period π",
          "Amplitude 3; reflection in x-axis (negative)",
          "Translate right π/2 and up 1",
        ],
        answer: "Squeeze ×1/2, ×3 stretch + reflect x-axis, right π/2, up 1.",
        marks: 4,
      },
      commonErrors: [
        "Reading h directly without factoring",
        "Confusing amplitude with period",
      ],
      summary: [
        "Factor inside, read coefficients outside",
      ],
      quiz: [
        { question: "y = f(3x − 6) factors to:", options: ["3(x − 2)", "3(x + 2)", "6(x − 3)", "(x − 2)/3"], correctAnswer: 0, explanation: "Take 3 out." },
        { question: "Amplitude of −5 sin(x) is:", options: ["−5", "5", "1/5", "0"], correctAnswer: 1, explanation: "Absolute value." },
        { question: "Period of sin(2x):", options: ["π", "2π", "π/2", "4π"], correctAnswer: 0, explanation: "2π/k." },
      ],
    },
  ],

  "y12m-ch3-3f-sketching": [
    {
      title: "Using Transformations to Sketch Graphs",
      explanation:
        "To SKETCH y = a·f(k(x − h)) + b from the parent y = f(x):\n  1. Identify three or four KEY POINTS on the parent (often intercepts and turning point).\n  2. Apply the mapping (x, y) → (x/k + h, ay + b) to each key point.\n  3. Plot the new key points.\n  4. Sketch a smooth curve preserving the parent's shape.\n  5. Mark intercepts, asymptotes, and key features on the new graph.\n\nThis approach avoids resketching from a table of values.",
      keyPoints: [
        "Pick 3–4 key points on the parent",
        "Apply mapping to each",
        "Mark intercepts and asymptotes",
      ],
      workedExamples: [
        {
          problem: "Sketch y = 2(x − 1)² − 3 from y = x².",
          steps: [
            "Key points on parent: (−1, 1), (0, 0), (1, 1)",
            "Mapping (x, y) → (x + 1, 2y − 3)",
            "Images: (0, −1), (1, −3), (2, −1)",
            "Vertex at (1, −3), opens upward, x-intercepts: 2(x−1)² = 3 → x = 1 ± √(3/2)",
          ],
          answer: "Parabola, vertex (1, −3), x-intercepts 1 ± √(3/2).",
        },
      ],
      tips: [
        "Always show the vertex/turning point on a transformed parabola",
      ],
      examQuestion: {
        problem: "Sketch y = −√(x + 4) + 2.",
        solution: [
          "Parent y = √x has key points (0, 0), (1, 1), (4, 2)",
          "Reflect in x-axis (negative outside): (0, 0), (1, −1), (4, −2)",
          "Translate left 4, up 2: (−4, 2), (−3, 1), (0, 0)",
          "Endpoint at (−4, 2); curve decreases to the right",
        ],
        answer: "Decreasing curve starting at (−4, 2), passing through (0, 0).",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to apply both reflection and translation in order",
      ],
      summary: [
        "Map key points, sketch carefully",
      ],
      quiz: [
        { question: "Sketching uses:", options: ["Random points", "Key points mapped through transformation", "Only intercepts", "Only asymptotes"], correctAnswer: 1, explanation: "Use few but informative points." },
        { question: "Vertex of y = (x−h)²+k is:", options: ["(0,0)", "(h,k)", "(−h,k)", "(h,−k)"], correctAnswer: 1, explanation: "Direct read-off." },
        { question: "Asymptote of y = 1/(x−2):", options: ["x=0", "x=2", "y=2", "y=−1/2"], correctAnswer: 1, explanation: "Vertical asymptote shifts with x." },
      ],
    },
  ],

  "y12m-ch3-3g-power-positive-int": [
    {
      title: "Transformations of Power Functions With Positive Integer Index",
      explanation:
        "Apply the transformation framework to y = x^n for positive integer n.\n\nFor y = a (x − h)^n + k:\n  • Vertex / turning point: (h, k) for even n; point of inflection (h, k) for odd n.\n  • a controls vertical dilation and reflection.\n  • Even n: U-shape (n = 2) or wider/flatter (higher n).\n  • Odd n: S-shape, monotone increasing or decreasing.\n\nKey behaviours:\n  • As |x| grows, |y| grows like |x|^n.\n  • For higher even n, graph is flatter near the turning point and steeper outside.",
      keyPoints: [
        "Even n → vertex; odd n → inflection",
        "Higher n flattens near (h, k)",
        "Sign of a determines reflection",
      ],
      workedExamples: [
        {
          problem: "Sketch y = (x + 2)³ − 1.",
          steps: [
            "Parent y = x³ has inflection at (0, 0)",
            "Translate left 2, down 1 → inflection at (−2, −1)",
            "Behaviour: increases left to right",
          ],
          answer: "Cubic with inflection (−2, −1), increasing.",
        },
      ],
      tips: [
        "Identify whether parent is even- or odd-powered first",
      ],
      examQuestion: {
        problem: "Find vertex and y-intercept of y = −2(x − 1)⁴ + 5.",
        solution: [
          "Vertex (1, 5)",
          "y-intercept x = 0: y = −2·1 + 5 = 3",
        ],
        answer: "Vertex (1, 5); y-intercept 3.",
        marks: 2,
      },
      commonErrors: [
        "Treating odd-power transformations like even-power",
      ],
      summary: [
        "Higher n = flatter near turning point",
        "Even n has vertex; odd n has inflection",
      ],
      quiz: [
        { question: "Vertex of y = (x−3)² + 1:", options: ["(3,1)", "(−3,1)", "(3,−1)", "(1,3)"], correctAnswer: 0, explanation: "Direct." },
        { question: "y = x³ has at origin:", options: ["Vertex", "Inflection", "Cusp", "Asymptote"], correctAnswer: 1, explanation: "Cubic inflection." },
        { question: "Higher even n behaves near vertex:", options: ["Steeper", "Flatter", "Same", "Reflective"], correctAnswer: 1, explanation: "Wider flat region." },
      ],
    },
  ],

  "y12m-ch3-3h-rule-from-graph": [
    {
      title: "Determining the Rule for a Function From its Graph",
      explanation:
        "Given a graph, recover the rule by:\n  1. Identifying the PARENT type from shape (linear, quadratic, cubic, sqrt, log, exp, etc.).\n  2. Locating the KEY FEATURE (vertex, inflection, asymptote, intercepts).\n  3. Using key feature to read h and k (turning point form).\n  4. Using a SECOND POINT on the graph to solve for the dilation factor a.\n  5. Writing the rule in the appropriate form.\n\nFor y = a (x − h)² + k: substitute (h, k) and another point to solve for a.\nFor y = a (x − h)³ + k: same idea using the inflection.\nFor y = a √(x − h) + k: use endpoint (h, k) and another point.",
      keyPoints: [
        "Identify parent shape first",
        "Read h, k from vertex/inflection/endpoint",
        "Use a second point to find a",
      ],
      workedExamples: [
        {
          problem: "A parabola has vertex (2, −1) and passes through (4, 7). Find its rule.",
          steps: [
            "y = a(x − 2)² − 1",
            "Use (4, 7): 7 = a(4)² − 1 = 4a − 1 → wait, (4−2)²=4 → 7 = 4a − 1 → a = 2",
            "Rule: y = 2(x − 2)² − 1",
          ],
          answer: "y = 2(x − 2)² − 1.",
        },
      ],
      tips: [
        "Always verify with the second point",
      ],
      examQuestion: {
        problem: "A square root function with endpoint (1, 2) passes through (5, 4). Find its rule.",
        solution: [
          "y = a √(x − 1) + 2",
          "At (5, 4): 4 = a √4 + 2 → 2 = 2a → a = 1",
          "Rule: y = √(x − 1) + 2",
        ],
        answer: "y = √(x − 1) + 2.",
        marks: 3,
      },
      commonErrors: [
        "Using the wrong sign for h",
        "Forgetting to verify with a second data point",
      ],
      summary: [
        "Read shape, then h/k, then solve for a",
      ],
      quiz: [
        { question: "Parabola vertex (h,k) form:", options: ["a(x+h)²+k", "a(x−h)²+k", "a(x−h)²−k", "(x−h)²+ak"], correctAnswer: 1, explanation: "Standard." },
        { question: "Cubic inflection at origin:", options: ["y=ax³", "y=ax²", "y=a√x", "y=a/x"], correctAnswer: 0, explanation: "Cubic shape." },
        { question: "To find a we usually need:", options: ["Just vertex", "Another point", "Two vertices", "Infinity"], correctAnswer: 1, explanation: "One extra point fixes scale." },
      ],
    },
  ],

  "y12m-ch3-3i-notation": [
    {
      title: "A Notation for Transformations",
      explanation:
        "MAPPING NOTATION provides a compact description:\n  T : (x, y) → (x', y')\nwhere x' and y' are functions of x and y describing where each point moves.\n\nExamples:\n  • Translation: (x, y) → (x + a, y + b).\n  • Vertical dilation by k from x-axis: (x, y) → (x, ky).\n  • Horizontal dilation by k from y-axis: (x, y) → (kx, y).\n  • Reflection in x-axis: (x, y) → (x, −y).\n  • Reflection in y-axis: (x, y) → (−x, y).\n\nGENERAL TRANSFORMATION  y = a · f(k(x − h)) + b corresponds to mapping\n  (x, y) → (x/k + h, a·y + b).\n\nUse this notation to track image points and to compose transformations algebraically.",
      keyPoints: [
        "(x, y) → (x', y') captures any transformation",
        "Compose by performing one mapping after another",
        "Useful to find images of specific points",
      ],
      workedExamples: [
        {
          problem: "Apply T : (x, y) → (2x − 1, −y + 3) to point (3, 4).",
          steps: [
            "x' = 2(3) − 1 = 5",
            "y' = −4 + 3 = −1",
            "Image: (5, −1)",
          ],
          answer: "(5, −1).",
        },
      ],
      tips: [
        "Compose mappings carefully — order matters",
      ],
      examQuestion: {
        problem: "Find the image of (1, 2) under (x, y) → (x − 3, 2y) followed by (x, y) → (−x, y + 1).",
        solution: [
          "First mapping: (1, 2) → (1 − 3, 4) = (−2, 4)",
          "Second mapping: (−2, 4) → (2, 5)",
        ],
        answer: "(2, 5).",
        marks: 3,
      },
      commonErrors: [
        "Reversing the order of composed mappings",
        "Mixing up x' and y'",
      ],
      summary: [
        "Mapping notation captures transformations cleanly",
        "Compose by sequential application",
      ],
      quiz: [
        { question: "Translation right 2 in mapping notation:", options: ["(x,y)→(x−2,y)", "(x,y)→(x+2,y)", "(x,y)→(x,y+2)", "(x,y)→(x,y−2)"], correctAnswer: 1, explanation: "Add 2 to x." },
        { question: "Reflection in y-axis:", options: ["(x,y)→(x,−y)", "(x,y)→(−x,y)", "(x,y)→(−x,−y)", "(x,y)→(y,x)"], correctAnswer: 1, explanation: "Negate x." },
        { question: "Order matters when composing mappings:", options: ["True", "False", "Only for reflections", "Only for translations"], correctAnswer: 0, explanation: "Generally non-commutative." },
      ],
    },
  ],

  "y12m-ch3-review": [
    {
      title: "Chapter 3 Review — Transformations",
      explanation:
        "REVIEW POINTS for Chapter 3:\n  • Identify and apply translations, dilations and reflections.\n  • Combine transformations using the DRT order.\n  • Use mapping notation to find images of points.\n  • Determine the rule of a function from its graph using key features and a second point.\n  • Sketch transformed graphs by mapping a few key points.\n\nMASTERY CHECK\n  ✔ Distinguish y = f(x − a) from y = f(x) − a.\n  ✔ Convert between equation form and mapping notation.\n  ✔ Recover rules from graphs.\n  ✔ Apply transformations to power functions and basic curves.",
      keyPoints: [
        "Inside vs outside changes affect x or y",
        "Mapping notation is precise and compact",
        "Always verify rules with a second point",
      ],
      workedExamples: [
        {
          problem: "Describe and sketch y = 3 − 2(x − 1)² in terms of y = x².",
          steps: [
            "Rewrite as y = −2(x − 1)² + 3",
            "Vertical stretch ×2; reflect in x-axis; translate right 1, up 3",
            "Vertex (1, 3); opens downward",
          ],
          answer: "Downward parabola, vertex (1, 3), stretched ×2.",
        },
      ],
      tips: [
        "Mark vertex and intercepts on every transformed sketch",
      ],
      summary: [
        "Transformations connect parent and image graphs",
        "Combine carefully and interpret in context",
      ],
      quiz: [
        { question: "Apply DRT order means:", options: ["Translations first", "Dilations/reflections then translations", "Reflections last", "Order doesn't matter"], correctAnswer: 1, explanation: "Standard convention." },
        { question: "Mapping (x,y)→(x/k+h, ay+b) corresponds to:", options: ["y = af(k(x−h))+b", "y = af(kx)+b", "y = f(x−h)+b", "y = a+bx"], correctAnswer: 0, explanation: "General formula." },
        { question: "Vertex of y = −2(x+1)² − 3:", options: ["(1,3)", "(−1,−3)", "(1,−3)", "(−1,3)"], correctAnswer: 1, explanation: "h=−1, k=−3." },
      ],
    },
  ],
};
