import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 4: Data Transformation (VCE Unit 3)

export const year12GeneralCh4Lessons: TopicLessonsMap = {
  // ─── 4A: Squared Transformation ──────────────────────────────────
  "y12g-ch4-4a-squared": [
    {
      title: "Squared (x² or y²) Transformation",
      explanation:
        "When a scatterplot is curved we cannot trust a straight-line regression. The strategy is to TRANSFORM one of the variables so the new scatterplot becomes linear, then fit the regression line in the transformed scale.\n\nThe squared transformation is used when the curve looks PARABOLIC — y rises (or falls) faster and faster as x increases.\n\nVCE General uses two squared transformations:\n• x² transformation: replace x with x² and regress y on x². Use when y rises STEEPLY at high x (curve opens UP, increasing rate of increase).\n• y² transformation: replace y with y² and regress y² on x. Use when y rises QUICKLY at first then FLATTENS (the original curve looks like a square-root shape).\n\nThe transformed equation is still ŷ = a + b·x_new, where x_new is x² or y² is the response. Predictions and residuals are computed in the TRANSFORMED variables, but final answers are usually back-converted to the original scale.",
      keyPoints: [
        "Use a squared transformation when the scatterplot looks parabolic",
        "x² transformation: linearises an UPWARD-curving (accelerating) shape",
        "y² transformation: linearises a curve that RISES then FLATTENS",
        "Equation stays linear in form: ŷ = a + b·x²  OR  ŷ² = a + b·x",
        "Always check the residual plot of the transformed model",
      ],
      definitions: [
        { term: "Data transformation", meaning: "Replacing x or y with a function of itself (e.g. x², log(x), 1/x) so that the relationship becomes approximately linear." },
        { term: "x² transformation", meaning: "Replacing x with x² so the scatterplot of y vs x² is linear; appropriate when y increases at an increasing rate as x increases." },
        { term: "y² transformation", meaning: "Replacing y with y² so the scatterplot of y² vs x is linear; appropriate when the original y vs x curve rises steeply then flattens." },
      ],
      formulas: [
        { name: "x² model", formula: "ŷ = a + b·x²" },
        { name: "y² model", formula: "ŷ² = a + b·x", note: "To predict y from x: y = √(a + b·x)." },
        { name: "Residual", formula: "residual = y − ŷ", note: "Computed in the original y scale even after transformation." },
      ],
      workedExamples: [
        {
          problem:
            "A scatterplot of y vs x curves UP (increases faster as x grows). After transforming, ŷ = 4 + 0.5·x² with r² = 0.97. Predict y when x = 6.",
          steps: [
            "x² = 36.",
            "ŷ = 4 + 0.5(36) = 4 + 18 = 22.",
            "r² = 0.97 → 97% of the variation in y is explained by x² — model is excellent.",
          ],
          answer: "Predicted y ≈ 22.",
        },
        {
          problem:
            "Original data shows y rising quickly then flattening (square-root shape). A y² transformation gives ŷ² = 2 + 3x. Predict y when x = 10.",
          steps: [
            "ŷ² = 2 + 3(10) = 32.",
            "ŷ = √32 ≈ 5.66.",
            "Always take the positive root in context.",
          ],
          answer: "Predicted y ≈ 5.66.",
        },
      ],
      tips: [
        "Choose between x² and y² by looking at the SHAPE of the original curve before transforming.",
        "Always remember to BACK-TRANSFORM your prediction (e.g. take √ after a y² model).",
        "TI-Nspire CAS — squared transformation: in Lists & Spreadsheet, name a new column ‘xsq’ and enter formula = x^2 (referring to the x column). Then run Linear Regression on y vs xsq.",
        "Casio ClassPad — squared transformation: in the Statistics app, tap a new list header → Edit → Formula → enter list1^2. Then Linear Reg with XList: new list, YList: list2.",
        "After fitting, ALWAYS plot the residuals of the transformed model — random scatter is required.",
      ],
      examQuestion: {
        problem:
          "A scatterplot of stopping distance (m, y) vs vehicle speed (km/h, x) shows a clear upward curve. After applying the x² transformation, the regression equation is ŷ = 1.5 + 0.008·x² with r² = 0.96 and a residual plot showing random scatter. (a) Justify the use of the x² transformation. (b) Predict the stopping distance for a vehicle travelling at 70 km/h. (c) State what r² tells you about the transformed model. (4 marks)",
        solution: [
          "(a) The original scatterplot curves upward (stopping distance increases faster than speed), so a linear model is inappropriate. Squaring x straightens this kind of accelerating curve.",
          "(b) ŷ = 1.5 + 0.008(70²) = 1.5 + 0.008(4900) = 1.5 + 39.2 = 40.7 m.",
          "(c) r² = 0.96 means 96% of the variation in stopping distance can be explained by the variation in speed-squared, indicating the transformed linear model fits very well.",
        ],
        answer: "(a) Original curves up → x² straightens it. (b) ≈ 40.7 m. (c) 96% of variation in stopping distance explained by speed².",
        marks: 4,
      },
      commonErrors: [
        "Substituting x rather than x² when predicting from a squared model.",
        "Forgetting to take the square root after a y² model.",
        "Choosing the wrong direction (using x² when the curve flattens).",
        "Not checking the residual plot of the transformed model.",
        "Reporting r² as a decimal of y when it’s the proportion of variation in y.",
      ],
      summary: [
        "Squared transformation linearises parabolic curves.",
        "x² model for accelerating curves; y² model for ‘rises then flattens’ curves.",
        "Substitute x² (or square y) and run a linear regression on the transformed data.",
        "Always check residuals after transforming.",
      ],
      practice: [
        { question: "ŷ = 2 + 3·x². Predict ŷ when x = 4.", answer: "ŷ = 2 + 3(16) = 50." },
        { question: "ŷ² = 1 + 5x. Predict y when x = 3.", answer: "ŷ² = 16 → ŷ = 4." },
        { question: "Which curve shape is best linearised by an x² transformation?", answer: "An upward curve where y increases at an increasing rate." },
        { question: "After squaring x, what is the new model equation?", answer: "ŷ = a + b·x², still linear in x²." },
      ],
      quiz: [
        {
          question: "An x² transformation is appropriate when the original scatterplot:",
          options: ["Is already linear", "Curves upward (accelerating)", "Decreases hyperbolically", "Has no association"],
          correctAnswer: 1,
          explanation: "Squaring x straightens an accelerating upward curve.",
        },
        {
          question: "After fitting ŷ² = 4 + 2x, the predicted y at x = 6 is:",
          options: ["4", "8", "16", "12"],
          correctAnswer: 0,
          explanation: "ŷ² = 4 + 12 = 16 → ŷ = 4.",
        },
        {
          question: "What must you check after applying any transformation?",
          options: ["The slope sign", "The residual plot of the transformed model", "Only r", "The data range"],
          correctAnswer: 1,
          explanation: "Random scatter in the residual plot confirms the transformed model is appropriate.",
        },
      ],
    },
  ],

  // ─── 4B: Log Transformation ──────────────────────────────────────
  "y12g-ch4-4b-log": [
    {
      title: "Logarithmic (log₁₀) Transformation",
      explanation:
        "The log₁₀ transformation is used when the data shows EXPONENTIAL behaviour — y rises rapidly (or falls rapidly) and the curve looks ‘steeper than parabolic’.\n\nVCE General uses two log transformations:\n• log(x) transformation: replace x with log₁₀(x). Linearises curves where y rises QUICKLY then FLATTENS as x increases (e.g. learning curves).\n• log(y) transformation: replace y with log₁₀(y). Linearises EXPONENTIAL growth or decay, where y is multiplied by a constant factor for each unit increase in x.\n\nTransformed equations:\n• y vs log(x): ŷ = a + b·log(x)\n• log(y) vs x: log(ŷ) = a + b·x  ⇔  ŷ = 10^(a + b·x) = 10^a · 10^(b·x)\n\nLog transformations are valid only for POSITIVE data — log of zero or a negative number is undefined.",
      keyPoints: [
        "Log transformation linearises rapid growth/decay or learning curves",
        "log(x) model: ŷ = a + b·log(x) — for ‘rises then flattens’ curves",
        "log(y) model: log(ŷ) = a + b·x — for exponential growth/decay",
        "Back-transform from log(y): ŷ = 10^(a + b·x)",
        "Logs require POSITIVE data (no zeros or negatives)",
      ],
      definitions: [
        { term: "log(x) transformation", meaning: "Replacing x with log₁₀(x) so the scatterplot of y vs log(x) is linear." },
        { term: "log(y) transformation", meaning: "Replacing y with log₁₀(y) so the scatterplot of log(y) vs x is linear; this corresponds to an exponential model in the original variables." },
        { term: "Exponential model", meaning: "A model of the form y = A · B^x in which y is multiplied by the constant B for each unit increase in x." },
      ],
      formulas: [
        { name: "log(x) model", formula: "ŷ = a + b·log₁₀(x)" },
        { name: "log(y) model (linear form)", formula: "log₁₀(ŷ) = a + b·x" },
        { name: "log(y) model (exponential form)", formula: "ŷ = 10^(a + b·x) = 10^a · (10^b)^x" },
      ],
      workedExamples: [
        {
          problem:
            "A scatterplot of bacteria count (y) vs time (x hours) shows exponential growth. After taking log(y), the regression is log(ŷ) = 1.2 + 0.3x with r² = 0.99. (a) Predict y when x = 4. (b) Express the model in the original variables.",
          steps: [
            "(a) log(ŷ) = 1.2 + 0.3(4) = 1.2 + 1.2 = 2.4. ŷ = 10^2.4 ≈ 251.2.",
            "(b) ŷ = 10^(1.2 + 0.3x) = 10^1.2 · 10^(0.3x) ≈ 15.85 · (10^0.3)^x ≈ 15.85 · 1.995^x.",
          ],
          answer: "(a) ŷ ≈ 251.2. (b) ŷ ≈ 15.85 · (1.995)^x — bacteria approximately double each hour.",
        },
        {
          problem:
            "A learning curve shows y (test score) vs x (hours practised) rising quickly then flattening. After a log(x) transformation, ŷ = 30 + 25·log(x). Predict y at x = 100.",
          steps: [
            "log(100) = 2.",
            "ŷ = 30 + 25(2) = 30 + 50 = 80.",
          ],
          answer: "Predicted score ≈ 80.",
        },
      ],
      tips: [
        "If you see ‘doubling time’, ‘compound growth’ or ‘half-life’ in the question, expect a log(y) transformation.",
        "If the curve LEVELS OFF at large x, try a log(x) transformation.",
        "TI-Nspire CAS — log column: in Lists & Spreadsheet, name a new column ‘logy’ and enter = log(y) (uses log base 10). Run Linear Regression on x vs logy.",
        "Casio ClassPad — log column: tap a new list header → Edit → Formula → enter log(list2). Run Linear Reg using XList: list1, YList: new list.",
        "When back-transforming, remember 10^(a + bx) = 10^a · 10^(bx) — both forms are accepted, but VCAA usually wants the exponential form ŷ = (10^a)·(10^b)^x.",
        "Log of a negative or zero is undefined — check data is positive before transforming.",
      ],
      examQuestion: {
        problem:
          "A study models the value of an investment (y, $) over t years. After applying a log(y) transformation, log(ŷ) = 3.7 + 0.05t with r² = 0.998 and a residual plot showing random scatter. (a) Predict the investment value at t = 8 years. (b) Write the model in the original variables and interpret the base in context. (c) Why is the log transformation appropriate here? (5 marks)",
        solution: [
          "(a) log(ŷ) = 3.7 + 0.05(8) = 4.1 → ŷ = 10^4.1 ≈ $12 589.",
          "(b) ŷ = 10^(3.7 + 0.05t) = 10^3.7 · (10^0.05)^t ≈ 5012 · 1.122^t. The base 1.122 means the investment grows by about 12.2% per year on average.",
          "(c) The original data shows exponential growth (multiplied by a constant factor each year). Taking log(y) converts this to a linear relationship, so a least squares line is now appropriate. The very high r² (0.998) and random residual plot confirm the transformed model fits well.",
        ],
        answer: "(a) ≈ $12 589. (b) ŷ ≈ 5012 · 1.122^t → ~12.2% annual growth. (c) Exponential growth becomes linear after log(y).",
        marks: 5,
      },
      commonErrors: [
        "Forgetting to back-transform: leaving the answer as log(ŷ).",
        "Using ln (base e) when VCE General requires log₁₀.",
        "Trying to take log of zero or negative data.",
        "Confusing log(x) and log(y) transformations — they linearise different shapes.",
        "Reporting only the linear form when the question asks for the original-variable equation.",
      ],
      summary: [
        "Log(y) linearises exponential growth/decay.",
        "Log(x) linearises ‘rises then flattens’ curves.",
        "Always log base 10 in VCE General.",
        "Back-transform log(ŷ) = a + bx into ŷ = 10^a · (10^b)^x for the original scale.",
      ],
      practice: [
        { question: "log(ŷ) = 0.6 + 0.2x. Predict ŷ at x = 5.", answer: "log(ŷ) = 1.6 → ŷ = 10^1.6 ≈ 39.81." },
        { question: "ŷ = 3 + 2·log(x). Predict ŷ at x = 1000.", answer: "log(1000) = 3 → ŷ = 3 + 6 = 9." },
        { question: "Convert log(ŷ) = 1 + 0.3x into the original variables.", answer: "ŷ = 10·(10^0.3)^x ≈ 10·1.995^x." },
        { question: "Why must y be positive before applying a log transformation?", answer: "log of zero or a negative number is undefined." },
      ],
      quiz: [
        {
          question: "A log(y) transformation linearises:",
          options: ["Linear data", "Exponential growth or decay", "Hyperbolic data", "Quadratic data"],
          correctAnswer: 1,
          explanation: "log(y) is the standard transformation for exponential models y = A·B^x.",
        },
        {
          question: "If log(ŷ) = 2 + 0.5x, then ŷ at x = 4 equals:",
          options: ["10", "100", "1000", "10000"],
          correctAnswer: 3,
          explanation: "log(ŷ) = 2 + 2 = 4 → ŷ = 10^4 = 10 000.",
        },
        {
          question: "Which transformation suits a learning curve that rises quickly then levels off?",
          options: ["x²", "log(x)", "log(y)", "1/x"],
          correctAnswer: 1,
          explanation: "log(x) compresses large x values, straightening the flattening tail.",
        },
      ],
    },
  ],

  // ─── 4C: Reciprocal Transformation ───────────────────────────────
  "y12g-ch4-4c-reciprocal": [
    {
      title: "Reciprocal (1/x or 1/y) Transformation",
      explanation:
        "The reciprocal transformation is used for HYPERBOLIC data — curves that drop steeply at first and then flatten towards an asymptote. This often arises when one variable is inversely proportional to another (e.g. travel time vs speed, pressure vs volume).\n\nVCE General uses two reciprocal transformations:\n• 1/x transformation: replace x with 1/x and regress y on 1/x. Linearises curves of the form y = a + b/x where y FALLS as x rises and flattens at large x.\n• 1/y transformation: replace y with 1/y and regress 1/y on x. Linearises curves where y rises slowly at first then steeply (or falls steeply then plateaus on the other side).\n\nThe reciprocal model in original form is\n   ŷ = a + b/x\nso to predict y, substitute x and compute a + b/x directly. To get y from a 1/y model: ŷ = 1 / (a + b·x).\n\nThe transformation requires NON-ZERO data (1/0 is undefined).",
      keyPoints: [
        "Reciprocal transformation linearises HYPERBOLIC shapes",
        "1/x model: ŷ = a + b/x — y falls steeply then flattens as x grows",
        "1/y model: 1/ŷ = a + b·x — back-convert with ŷ = 1/(a + b·x)",
        "Common context: inversely proportional variables",
        "Data must NOT contain zero (1/0 is undefined)",
      ],
      definitions: [
        { term: "Reciprocal transformation", meaning: "Replacing x with 1/x or y with 1/y to linearise a hyperbolic relationship." },
        { term: "Hyperbolic relationship", meaning: "A relationship of the form y = a + b/x; y changes rapidly at small x and approaches an asymptote at large x." },
      ],
      formulas: [
        { name: "1/x model", formula: "ŷ = a + b · (1/x)" },
        { name: "1/y model (linear form)", formula: "1/ŷ = a + b·x" },
        { name: "Back-transform 1/y model", formula: "ŷ = 1 / (a + b·x)" },
      ],
      workedExamples: [
        {
          problem:
            "Travel time (y, hours) vs average speed (x, km/h) shows a steep drop that flattens. A 1/x transformation gives ŷ = 0.1 + 240·(1/x). Predict y when x = 80 km/h.",
          steps: [
            "1/x = 1/80 = 0.0125.",
            "ŷ = 0.1 + 240(0.0125) = 0.1 + 3 = 3.1 hours.",
            "Interpretation: at 80 km/h the predicted travel time is about 3.1 hours.",
          ],
          answer: "Predicted travel time ≈ 3.1 hours.",
        },
        {
          problem:
            "After fitting a 1/y model, 1/ŷ = 0.05 + 0.01x with r² = 0.95. Predict y when x = 5.",
          steps: [
            "1/ŷ = 0.05 + 0.01(5) = 0.10.",
            "ŷ = 1 / 0.10 = 10.",
          ],
          answer: "Predicted y = 10.",
        },
      ],
      tips: [
        "Recognise the hyperbolic shape: STEEP drop then FLATTENS towards an asymptote.",
        "Always state which axis was transformed (x or y) when reporting the model.",
        "TI-Nspire CAS — reciprocal column: in Lists & Spreadsheet, create a new column ‘invx’ with formula = 1/x. Run Linear Regression on invx (X List) vs y (Y List).",
        "Casio ClassPad — reciprocal column: tap a new list header → Edit → Formula → enter 1/list1. Run Linear Reg using the new list as XList.",
        "Reciprocal transformations FLIP the apparent direction of association — be careful interpreting the slope.",
      ],
      examQuestion: {
        problem:
          "Time taken (y, minutes) to complete a task vs the number of workers (x) shows a steeply falling curve that flattens. A 1/x transformation gives ŷ = 5 + 120·(1/x) with r² = 0.97 and a residual plot showing random scatter. (a) Predict the time taken when x = 6 workers. (b) Predict for x = 24 workers. (c) Comment on the suitability of the model. (4 marks)",
        solution: [
          "(a) ŷ = 5 + 120/6 = 5 + 20 = 25 minutes.",
          "(b) ŷ = 5 + 120/24 = 5 + 5 = 10 minutes.",
          "(c) r² = 0.97 means 97% of the variation in time can be explained by the variation in 1/(number of workers). The residual plot shows random scatter, so the reciprocal model is appropriate.",
        ],
        answer: "(a) 25 min. (b) 10 min. (c) Excellent fit — r² = 0.97 and residuals random.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting to take the reciprocal of x (using x itself in the model).",
        "Forgetting to back-transform 1/ŷ to ŷ = 1/(a + bx).",
        "Trying to apply the reciprocal transformation when x = 0 occurs.",
        "Misreading the slope’s sign — the reciprocal flips the apparent direction.",
      ],
      summary: [
        "Reciprocal transformation linearises hyperbolic data.",
        "1/x model: ŷ = a + b/x.",
        "1/y model: ŷ = 1/(a + b·x) after back-transforming.",
        "Avoid zero values in the reciprocated variable.",
      ],
      practice: [
        { question: "ŷ = 2 + 60·(1/x). Predict ŷ when x = 12.", answer: "ŷ = 2 + 5 = 7." },
        { question: "1/ŷ = 0.2 + 0.05x. Predict ŷ when x = 4.", answer: "1/ŷ = 0.4 → ŷ = 2.5." },
        { question: "What shape does a reciprocal transformation linearise?", answer: "A hyperbolic curve that falls steeply then flattens." },
        { question: "Why must x not equal zero before a 1/x transformation?", answer: "1/0 is undefined." },
      ],
      quiz: [
        {
          question: "A reciprocal (1/x) transformation is most appropriate for:",
          options: ["Linear data", "Exponential growth", "Hyperbolic data", "Quadratic data"],
          correctAnswer: 2,
          explanation: "1/x straightens hyperbolic curves of the form y = a + b/x.",
        },
        {
          question: "ŷ = 4 + 24/x at x = 6 equals:",
          options: ["8", "12", "10", "28"],
          correctAnswer: 0,
          explanation: "ŷ = 4 + 24/6 = 4 + 4 = 8.",
        },
        {
          question: "1/ŷ = 0.1 + 0.05x at x = 4 gives ŷ equal to:",
          options: ["3.33", "1.5", "0.3", "10"],
          correctAnswer: 0,
          explanation: "1/ŷ = 0.3 → ŷ = 1/0.3 ≈ 3.33.",
        },
      ],
    },
  ],

  // ─── 4D: Choosing & Applying Transformations ─────────────────────
  "y12g-ch4-4d-choosing": [
    {
      title: "Choosing & Applying the Right Transformation",
      explanation:
        "Choosing a transformation is a SHAPE-MATCHING exercise. Look at the original scatterplot first, then pick the transformation whose ‘circle of transformations’ matches the curve.\n\nVCE General uses six standard transformations, summarised below.\n\nUpward-curving (y rises faster as x rises):\n• x² transformation (squashes large x values back).\n• log(y) transformation if growth is exponential.\n\nRises quickly then flattens (concave):\n• y² transformation (stretches large y).\n• log(x) transformation (compresses large x).\n\nHyperbolic (steep drop, then flattens):\n• 1/x transformation (most common).\n• 1/y transformation in some cases.\n\nDecision strategy:\n1. Plot the original data.\n2. Identify the shape (curving up, flattening, hyperbolic).\n3. Try the matching transformation; fit a least squares line.\n4. Check the RESIDUAL PLOT of the transformed model — random scatter is required.\n5. Compare r² values: the better model has higher r² AND a clean residual plot.\n6. Report the model in the ORIGINAL variables for predictions and interpretation.\n\nNever choose a transformation by r² alone — always confirm with the residual plot, and check the choice makes contextual sense.",
      keyPoints: [
        "Choose a transformation from the SHAPE of the original curve, not from r² alone",
        "Always check the residual plot of the transformed model",
        "Higher r² + random residuals + meaningful context = best model",
        "Six standard transformations: x², y², log(x), log(y), 1/x, 1/y",
        "Interpret final answers in the ORIGINAL variables, not the transformed ones",
      ],
      definitions: [
        { term: "Circle of transformations", meaning: "A heuristic that links the visible shape of the scatterplot to the appropriate transformation (squared, log, or reciprocal of x or y)." },
      ],
      formulas: [
        { name: "x² model", formula: "ŷ = a + b·x²" },
        { name: "y² model", formula: "ŷ² = a + b·x" },
        { name: "log(x) model", formula: "ŷ = a + b·log₁₀(x)" },
        { name: "log(y) model (back-transformed)", formula: "ŷ = 10^a · (10^b)^x" },
        { name: "1/x model", formula: "ŷ = a + b/x" },
        { name: "1/y model (back-transformed)", formula: "ŷ = 1 / (a + b·x)" },
      ],
      workedExamples: [
        {
          problem:
            "Original regression on y vs x gives r² = 0.62 and a curved residual plot. After a log(y) transformation, log(ŷ) = 1.2 + 0.3x with r² = 0.91 and a random residual plot. Justify which model is better.",
          steps: [
            "Original r² = 0.62 with curved residuals → linear model NOT appropriate.",
            "Transformed r² = 0.91 — much higher → explains 91% of variation in log(y).",
            "Transformed residual plot is random → linearity assumption holds.",
            "Conclusion: the log(y) model is the better choice.",
          ],
          answer: "log(y) model — higher r² and random residuals, so it is the appropriate model.",
        },
        {
          problem:
            "Three candidate models give r² values of 0.78 (linear), 0.94 (log y), 0.93 (1/x). The log(y) and 1/x residual plots are both random. Which should you pick and why?",
          steps: [
            "Both transformed models pass the residual check.",
            "log(y) has the slightly higher r² (0.94 vs 0.93).",
            "Pick the one whose context interpretation makes more sense (e.g. log(y) for exponential growth contexts; 1/x for inverse-proportion contexts).",
            "If the context is exponential growth, choose log(y).",
          ],
          answer: "Choose log(y) — slightly higher r² and best matches an exponential context.",
        },
      ],
      tips: [
        "Plot the original data FIRST — never start by transforming blindly.",
        "Match the curve shape: accelerating up → x² or log(y); flattens → y² or log(x); hyperbolic → 1/x.",
        "When two transformations look similar, prefer the one with the cleaner residual plot.",
        "Always interpret slope, intercept and r² in the ORIGINAL variables for the final report.",
        "If asked for ‘the most suitable model’, you must compare residuals — not just r².",
      ],
      examQuestion: {
        problem:
          "A scatterplot of y vs x shows an upward curving shape. A linear model gives r² = 0.71 with a curved residual plot. After applying an x² transformation, ŷ = 5 + 0.4·x² with r² = 0.96 and a random residual plot. (a) Explain why the linear model is not appropriate. (b) Explain why the x² transformation is suitable. (c) Predict y when x = 9. (d) Comment on what r² = 0.96 means in this context. (5 marks)",
        solution: [
          "(a) The original residual plot shows a CURVED pattern, not random scatter, so the linearity assumption is violated. Despite r² = 0.71, the linear model is not appropriate.",
          "(b) The original scatterplot curves upward (y increases faster as x increases). Squaring x straightens this kind of accelerating curve. The transformed residual plot now shows random scatter, confirming linearity in (x², y).",
          "(c) ŷ = 5 + 0.4(9²) = 5 + 0.4(81) = 5 + 32.4 = 37.4.",
          "(d) 96% of the variation in y can be explained by the variation in x², so the transformed linear model is an excellent fit.",
        ],
        answer: "(a) Curved residuals → linear unsuitable. (b) Upward curve straightened by x²; residuals now random. (c) ŷ = 37.4. (d) 96% of variation in y explained by x².",
        marks: 5,
      },
      commonErrors: [
        "Choosing a transformation based on r² alone without checking residuals.",
        "Forgetting to back-transform when interpreting or predicting.",
        "Ignoring contextual meaning (e.g. negative log argument).",
        "Reporting the transformed equation as the final ‘original-variable’ model.",
        "Not justifying why the chosen transformation matches the curve shape.",
      ],
      summary: [
        "Match transformation to scatterplot SHAPE.",
        "Best model = highest r² + random residual plot + meaningful context.",
        "Six standard transformations: x², y², log(x), log(y), 1/x, 1/y.",
        "Interpret final results in the original variables.",
        "A curved residual plot disqualifies a linear (or transformed-linear) model.",
      ],
      practice: [
        { question: "Scatterplot shows rapid exponential growth. Best transformation?", answer: "log(y)." },
        { question: "Scatterplot shows a steep drop that flattens (hyperbolic). Best transformation?", answer: "1/x." },
        { question: "After transformation, r² rises from 0.62 to 0.91. What does this mean?", answer: "The transformed model explains a much larger proportion of variation and is more suitable, provided residuals are random." },
        { question: "Why is the residual plot more important than r² when choosing a model?", answer: "A curved residual plot reveals that the linear assumption is violated even when r² is high." },
        { question: "A learning curve flattens at large x. Best transformation?", answer: "log(x)." },
      ],
      quiz: [
        {
          question: "If a residual plot shows a clear pattern AFTER transformation, you should:",
          options: [
            "Trust the model — high r² is enough",
            "Try a different transformation",
            "Quote r without checking",
            "Extrapolate freely",
          ],
          correctAnswer: 1,
          explanation: "A patterned residual plot indicates the chosen transformation is still wrong.",
        },
        {
          question: "Best transformation for an exponential growth curve:",
          options: ["x²", "log(y)", "1/y", "y²"],
          correctAnswer: 1,
          explanation: "log(y) linearises y = A·B^x.",
        },
        {
          question: "When two transformed models both have random residuals, choose the one with:",
          options: [
            "The smaller r²",
            "The higher r² and better contextual meaning",
            "The simpler equation only",
            "The shorter calculator output",
          ],
          correctAnswer: 1,
          explanation: "Higher r² + meaningful context wins when residual checks are equal.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 4 ─────────────────────────────────────────
  "y12g-ch4-review": [
    {
      title: "Review of Chapter 4 — Data Transformation",
      explanation:
        "Chapter 4 extends regression to NON-LINEAR data. When the original scatterplot is curved, a straight-line model is unsuitable. We transform x or y so the new scatterplot is approximately linear, run regression on the transformed data, then back-convert for predictions and interpretation.\n\nThe six VCE General transformations:\n• x² — accelerating upward curve.\n• y² — rises quickly then flattens.\n• log(x) — flattens at large x (e.g. learning curve).\n• log(y) — exponential growth or decay.\n• 1/x — hyperbolic, steep drop then flattens.\n• 1/y — alternative hyperbolic form.\n\nWorkflow:\n1. Plot original y vs x.\n2. Identify the curve shape.\n3. Apply the matching transformation in CAS.\n4. Fit ŷ = a + b·(transformed variable).\n5. Check the RESIDUAL plot of the transformed model — must be random scatter.\n6. Compare candidate models by r² AND residual quality.\n7. Report the model in original variables; predict by substituting and back-transforming as needed.\n\nA strong investigation report names the curve shape, justifies the chosen transformation, quotes the regression equation, gives the slope/intercept and r² interpretation, comments on residuals, and notes any limitations such as extrapolation or domain restrictions.",
      keyPoints: [
        "Transform when the scatterplot is curved",
        "Match transformation to shape, not to r² alone",
        "Always check residual plot of transformed model",
        "Back-transform predictions to the original scale",
        "Interpret in ORIGINAL variables, not transformed ones",
      ],
      formulas: [
        { name: "x² model", formula: "ŷ = a + b·x²" },
        { name: "y² model", formula: "ŷ² = a + b·x  →  ŷ = √(a + b·x)" },
        { name: "log(x) model", formula: "ŷ = a + b·log₁₀(x)" },
        { name: "log(y) model", formula: "log₁₀(ŷ) = a + b·x  →  ŷ = 10^a · (10^b)^x" },
        { name: "1/x model", formula: "ŷ = a + b/x" },
        { name: "1/y model", formula: "1/ŷ = a + b·x  →  ŷ = 1/(a + b·x)" },
      ],
      workedExamples: [
        {
          problem:
            "Population (y) vs time (t years) shows exponential growth. A log(y) transformation gives log(ŷ) = 1.2 + 0.3t with r² = 0.99 and random residuals. (a) Predict y at t = 4. (b) Express the model in original variables. (c) Comment on suitability.",
          steps: [
            "(a) log(ŷ) = 1.2 + 0.3(4) = 2.4 → ŷ = 10^2.4 ≈ 251.2.",
            "(b) ŷ = 10^1.2 · (10^0.3)^t ≈ 15.85 · 1.995^t — population approximately doubles each year.",
            "(c) r² = 0.99 with random residuals → the transformed linear model is highly appropriate; the underlying relationship is exponential.",
          ],
          answer: "(a) ≈ 251.2. (b) ŷ ≈ 15.85·1.995^t. (c) Excellent fit; exponential growth is well modelled.",
        },
        {
          problem:
            "Time taken (y, minutes) vs number of workers (x) gives ŷ = 5 + 120/x after a 1/x transformation, r² = 0.97. Predict y at x = 10 and at x = 30.",
          steps: [
            "x = 10: ŷ = 5 + 120/10 = 5 + 12 = 17 minutes.",
            "x = 30: ŷ = 5 + 120/30 = 5 + 4 = 9 minutes.",
          ],
          answer: "ŷ = 17 min at 10 workers; ŷ = 9 min at 30 workers.",
        },
      ],
      tips: [
        "Investigation report structure: shape → transformation justification → equation → slope + r² → residual check → limitations.",
        "Always back-transform before quoting a final prediction in context.",
        "If two transformations look similar, prefer the one whose context makes physical sense.",
        "Never extrapolate from a transformed model without explicit comment — the curve may break down outside the data range.",
      ],
      examQuestion: {
        problem:
          "A scatterplot of cooling time (y, min) vs initial temperature (x, °C) curves DOWN steeply then flattens. A 1/x transformation gives ŷ = 1.2 + 350·(1/x) with r² = 0.96 and a random residual plot. (a) Justify the choice of transformation. (b) Predict ŷ at x = 70. (c) Interpret r² in context. (d) State one limitation of using this model. (6 marks)",
        solution: [
          "(a) The original scatterplot has a hyperbolic shape (steep drop, then flattens). A 1/x transformation linearises this kind of inverse relationship; the transformed residual plot is random, confirming the choice.",
          "(b) ŷ = 1.2 + 350/70 = 1.2 + 5 = 6.2 minutes.",
          "(c) 96% of the variation in cooling time can be explained by the variation in 1/(initial temperature), indicating an excellent fit for the transformed linear model.",
          "(d) Predictions at very low or very high temperatures (outside the observed data range) are extrapolations and unreliable; the model also assumes constant ambient conditions.",
        ],
        answer: "(a) Hyperbolic shape → 1/x; residuals random. (b) ≈ 6.2 min. (c) 96% of variation in cooling time explained by 1/temperature. (d) Extrapolation unreliable.",
        marks: 6,
      },
      commonErrors: [
        "Choosing a transformation by r² alone without checking residuals.",
        "Forgetting to back-transform predictions.",
        "Interpreting log(y) or 1/y values directly instead of in original variables.",
        "Reporting the linear (transformed) equation as the final model in context.",
        "Trying to log a zero or take 1/0.",
      ],
      summary: [
        "Match transformation to curve shape.",
        "x²/log/reciprocal — choose by shape and residual plot.",
        "Higher r² + random residuals + meaningful context = best model.",
        "Always back-transform for predictions; interpret in original variables.",
      ],
      practice: [
        { question: "Scatterplot shows rapid growth. Best transformation?", answer: "log(y)." },
        { question: "Curve flattens at large x. Best transformation?", answer: "log(x)." },
        { question: "Hyperbolic shape (steep drop, plateau). Best transformation?", answer: "1/x." },
        { question: "Accelerating upward curve. Best transformation?", answer: "x² (or log(y) if exponential)." },
        { question: "After transformation r² rises from 0.62 to 0.91 with random residuals. Comment.", answer: "The transformed model is more suitable — explains more variation and the linearity assumption now holds." },
      ],
      quiz: [
        {
          question: "An x² transformation is best for:",
          options: ["Hyperbolic curves", "Exponential decay", "Accelerating upward curves", "Linear data"],
          correctAnswer: 2,
          explanation: "Squaring x straightens curves where y grows faster as x grows.",
        },
        {
          question: "log(ŷ) = 0.5 + 0.4x. The original-variable model is:",
          options: [
            "ŷ = 0.5 · 0.4^x",
            "ŷ = 10^0.5 · (10^0.4)^x",
            "ŷ = 0.5 + 0.4·10^x",
            "ŷ = 10^(0.5·0.4·x)",
          ],
          correctAnswer: 1,
          explanation: "Apply 10^(both sides): ŷ = 10^0.5 · (10^0.4)^x.",
        },
        {
          question: "After transformation, you should always check:",
          options: ["Only r", "Only the slope", "The residual plot of the transformed model", "The original scatterplot only"],
          correctAnswer: 2,
          explanation: "Random scatter in the residual plot confirms the transformed model is appropriate.",
        },
        {
          question: "ŷ = 2 + 60/x at x = 12 gives:",
          options: ["5", "7", "62", "72"],
          correctAnswer: 1,
          explanation: "ŷ = 2 + 60/12 = 2 + 5 = 7.",
        },
      ],
    },
  ],
};
