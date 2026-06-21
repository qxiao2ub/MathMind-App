import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 3: Investigating and Modelling Linear Associations (VCE Unit 3)

export const year12GeneralCh3Lessons: TopicLessonsMap = {
  // ─── 3A: Least Squares Regression Line ────────────────────────────
  "y12g-ch3-3a-least-squares": [
    {
      title: "Least Squares Regression Line",
      explanation:
        "When two numerical variables show a linear association, we model the relationship with a straight line called the least squares regression line (LSRL). The line is chosen so that the sum of the squared vertical distances (residuals) from the data points to the line is as small as possible — hence ‘least squares’.\n\nVCAA writes the equation in the form\n   ŷ = a + b·x\nwhere\n• x is the explanatory variable (EV)\n• ŷ (read ‘y-hat’) is the PREDICTED value of the response variable\n• a is the y-intercept (predicted ŷ when x = 0)\n• b is the slope (the average change in ŷ for every 1-unit increase in x)\n\nThe least squares line ALWAYS passes through the point (x̄, ȳ).\n\nVCE General does not require by-hand calculation — you compute a, b, r and r² with CAS and focus on interpretation in context.",
      keyPoints: [
        "Equation form: ŷ = a + b·x (NOT y = mx + c in VCE General)",
        "‘Least squares’ = minimises Σ(residuals)²",
        "a = y-intercept (ŷ when x = 0); b = slope",
        "Slope = average change in ŷ per 1-unit increase in x",
        "Line always passes through (x̄, ȳ)",
        "Find a, b, r, r² on CAS — VCE General never asks by-hand",
      ],
      definitions: [
        { term: "Least squares regression line", meaning: "The straight line that minimises the sum of the squared vertical distances (residuals) between the line and the data points." },
        { term: "Slope (b)", meaning: "The average change in the predicted response variable for every one-unit increase in the explanatory variable." },
        { term: "y-intercept (a)", meaning: "The predicted value of the response variable when the explanatory variable equals zero." },
        { term: "Predicted value (ŷ)", meaning: "The value of the response variable obtained from the regression equation for a given x." },
      ],
      formulas: [
        { name: "Regression equation", formula: "ŷ = a + b·x" },
        { name: "Slope from r", formula: "b = r · (Sy ÷ Sx)", note: "Sx, Sy are sample standard deviations." },
        { name: "Intercept from slope", formula: "a = ȳ − b·x̄", note: "Always passes through (x̄, ȳ)." },
      ],
      workedExamples: [
        {
          problem:
            "CAS gives the regression equation ŷ = 20 + 5x for exam score (ŷ) regressed on hours studied (x). Interpret a and b in context.",
          steps: [
            "Slope b = 5: for every additional hour studied, the predicted exam score increases by 5 marks on average.",
            "Intercept a = 20: a student who studies 0 hours is predicted to score 20 marks.",
            "Note: x = 0 is meaningful here (zero study) but not always (e.g. zero height has no real meaning).",
          ],
          answer: "b = 5: +5 marks per extra hour on average. a = 20: predicted score for 0 hours = 20.",
        },
        {
          problem:
            "Given x̄ = 4, ȳ = 50, Sx = 2, Sy = 8, r = 0.75, find the regression equation.",
          steps: [
            "b = r·(Sy ÷ Sx) = 0.75 × (8 ÷ 2) = 0.75 × 4 = 3.",
            "a = ȳ − b·x̄ = 50 − 3(4) = 50 − 12 = 38.",
            "ŷ = 38 + 3x.",
          ],
          answer: "ŷ = 38 + 3x.",
        },
      ],
      tips: [
        "Always write ‘on average’ when interpreting the slope — examiners deduct a mark without it.",
        "Include the units of x and y in every interpretation.",
        "TI-Nspire CAS — LSRL: Lists & Spreadsheet → enter x in column A and y in column B (give them names) → menu → Statistics → Stat Calculations → Linear Regression (a + bx) → X List: A, Y List: B → OK. Read a, b, r and r² from the output.",
        "Casio ClassPad — LSRL: Statistics app → list1 (x), list2 (y) → Calc → Regression → Linear Reg → XList: list1, YList: list2, Formula: y = a + bx → OK. a, b, r, r² appear.",
        "Round a and b to the precision the question asks for; do NOT round prematurely.",
      ],
      examQuestion: {
        problem:
          "A regression of weekly grocery spend ($, y) on household size (x) gives ŷ = 80 + 45x and r = 0.82. (a) Interpret the slope in context. (b) Interpret the y-intercept and comment on whether x = 0 is meaningful. (c) State the value of r² (3 dp). (4 marks)",
        solution: [
          "(a) For every additional person in the household, the predicted weekly grocery spend increases by $45 on average.",
          "(b) ŷ = 80 when x = 0 → a household with 0 people is predicted to spend $80 per week. This is not meaningful in context (a household must have at least one person).",
          "(c) r² = (0.82)² = 0.6724 → 0.672 (3 dp).",
        ],
        answer: "(a) +$45 per person on average. (b) $80 at x = 0 — not meaningful. (c) r² ≈ 0.672.",
        marks: 4,
      },
      commonErrors: [
        "Writing y = mx + c instead of ŷ = a + b·x.",
        "Forgetting ‘on average’ in slope interpretations.",
        "Interpreting the intercept when x = 0 is outside the data or meaningless.",
        "Confusing a and b on CAS output (a is the intercept; b is the slope).",
        "Omitting units when interpreting slope or intercept.",
      ],
      summary: [
        "ŷ = a + b·x; a is the intercept, b is the slope.",
        "Slope = average change in ŷ per unit increase in x.",
        "Line passes through (x̄, ȳ).",
        "Use CAS to find a, b, r, r²; focus on interpretation in context.",
      ],
      practice: [
        { question: "Write the slope interpretation for ŷ = 12 + 7x where x is hours and y is dollars.", answer: "For every additional hour, the predicted earnings increase by $7 on average." },
        { question: "If r = 0.6, Sx = 4, Sy = 10, find b.", answer: "b = 0.6 × (10/4) = 1.5." },
        { question: "Where does the LSRL always pass through?", answer: "(x̄, ȳ) — the mean of x and y." },
        { question: "What does ‘least squares’ minimise?", answer: "The sum of the squared residuals (vertical distances from data to line)." },
      ],
      quiz: [
        {
          question: "In the equation ŷ = a + b·x, the symbol a represents the:",
          options: ["Slope", "Predicted value", "y-intercept", "Correlation coefficient"],
          correctAnswer: 2,
          explanation: "a is the y-intercept — the predicted ŷ when x = 0.",
        },
        {
          question: "The slope b is best interpreted as:",
          options: [
            "The value of y when x = 0",
            "The change in y per unit increase in x, on average",
            "The maximum value of y",
            "The correlation between x and y",
          ],
          correctAnswer: 1,
          explanation: "Slope = average change in ŷ per 1-unit increase in x.",
        },
        {
          question: "The least squares line always passes through:",
          options: ["The origin", "(x̄, ȳ)", "The largest data point", "(0, ȳ)"],
          correctAnswer: 1,
          explanation: "The LSRL passes through the point of means (x̄, ȳ).",
        },
      ],
    },
  ],

  // ─── 3B: Modelling Relationships Using Regression ────────────────
  "y12g-ch3-3b-modelling-regression": [
    {
      title: "Modelling Relationships Using Regression",
      explanation:
        "Once we have the regression equation ŷ = a + b·x we can use it to make predictions and to interpret the relationship in context.\n\nMaking a prediction: substitute the value of x into the equation. The result is the PREDICTED ŷ — the actual observed y will usually differ.\n\nReliability of predictions:\n• Interpolation — predicting INSIDE the range of the observed x values. Predictions are usually reliable.\n• Extrapolation — predicting OUTSIDE the range of the observed x values. Predictions are unreliable because the linear pattern may not continue.\n\nThe coefficient of determination r² (a value between 0 and 1) measures how much of the variation in y the model explains. Quote it as a percentage with the VCAA wording: ‘___% of the variation in [y] can be explained by the variation in [x].’ A high r² and a meaningful, in-range x give the most trustworthy predictions.",
      keyPoints: [
        "Predict by substituting x into ŷ = a + b·x",
        "Interpolation (within data range) → reliable",
        "Extrapolation (outside data range) → unreliable",
        "r² = proportion of variation in y explained by x",
        "Report r² as a percentage using exact VCAA phrasing",
      ],
      definitions: [
        { term: "Interpolation", meaning: "Using the regression line to predict y for an x value within the range of the observed data." },
        { term: "Extrapolation", meaning: "Using the regression line to predict y for an x value outside the range of the observed data — generally unreliable." },
        { term: "Coefficient of determination (r²)", meaning: "The proportion of the variation in the response variable that can be explained by the variation in the explanatory variable, assuming a linear model." },
      ],
      formulas: [
        { name: "Prediction", formula: "ŷ = a + b·x" },
        { name: "Coefficient of determination", formula: "r² = (r)²,  reported as a percentage" },
      ],
      workedExamples: [
        {
          problem:
            "ŷ = 15 + 4x relates exam score (ŷ) to hours studied (x). Data covers x = 1 to x = 8 hours. (a) Predict the score for x = 6. (b) Predict for x = 20. (c) Comment on reliability.",
          steps: [
            "(a) ŷ = 15 + 4(6) = 39 → predicted score 39 marks. x = 6 is within 1–8 → interpolation, reliable.",
            "(b) ŷ = 15 + 4(20) = 95 → predicted score 95 marks.",
            "(c) x = 20 is far outside 1–8 → extrapolation, unreliable. The linear pattern may not continue at high study hours (e.g. score caps at 100).",
          ],
          answer: "(a) 39 (reliable, interpolation). (b) 95 (unreliable, extrapolation).",
        },
        {
          problem:
            "A regression of weekly income on years of education gives r = 0.74. Calculate r² and interpret in context.",
          steps: [
            "r² = (0.74)² = 0.5476 → 0.548 (3 dp) → 54.8%.",
            "Use exact VCAA phrasing.",
          ],
          answer: "r² ≈ 0.548 → 54.8% of the variation in weekly income can be explained by the variation in years of education.",
        },
        {
          problem:
            "A regression of fuel consumption (L/100 km, ŷ) on car mass (tonnes, x) gives ŷ = 2.1 + 4.6x. Predict consumption for a 1.5-tonne car and interpret the slope.",
          steps: [
            "Prediction: ŷ = 2.1 + 4.6(1.5) = 2.1 + 6.9 = 9.0 L/100 km.",
            "Slope: for every additional tonne of car mass, the predicted fuel consumption increases by 4.6 L/100 km on average.",
          ],
          answer: "Predicted 9.0 L/100 km. Slope: +4.6 L/100 km per extra tonne, on average.",
        },
      ],
      tips: [
        "ALWAYS check whether the x value used is inside or outside the data range and comment on reliability.",
        "Quote r² as a percentage with the exact phrase ‘can be explained by the variation in’.",
        "Include units in every prediction and interpretation.",
        "TI-Nspire CAS — predict ŷ: store the equation (e.g. f1(x) := 15 + 4x) then evaluate f1(6); or use the regression output and substitute manually.",
        "Casio ClassPad — predict ŷ: after Linear Reg, tap ‘Copy Formula’ to send ŷ = a + b·x to the Graph app or evaluate by substitution in Main.",
      ],
      examQuestion: {
        problem:
          "A regression of plant height (cm, ŷ) on age (weeks, x) gives ŷ = 2.5 + 1.8x with r = 0.91. Data was collected for plants aged 1 to 12 weeks. (a) Predict the height of a plant aged 8 weeks. (b) A student predicts the height at 30 weeks. Comment on the reliability of this prediction. (c) Calculate r² to 3 dp and interpret it in context. (5 marks)",
        solution: [
          "(a) ŷ = 2.5 + 1.8(8) = 2.5 + 14.4 = 16.9 cm. x = 8 is within the data range (1–12) so this prediction (interpolation) is reliable.",
          "(b) x = 30 is well outside the data range (1–12). This is extrapolation, so the prediction is unreliable — the linear pattern may not continue (real plants slow growth or reach a maximum height).",
          "(c) r² = (0.91)² = 0.8281 → 0.828 (3 dp). Interpretation: 82.8% of the variation in plant height can be explained by the variation in plant age.",
        ],
        answer: "(a) 16.9 cm (reliable interpolation). (b) Unreliable — extrapolation. (c) r² ≈ 0.828 → 82.8% of variation in height explained by age.",
        marks: 5,
      },
      commonErrors: [
        "Treating an extrapolated prediction as reliable.",
        "Forgetting ‘on average’ when interpreting slope.",
        "Saying ‘r² of variation in y is caused by x’ — wrong wording AND implies causation.",
        "Substituting the wrong variable (e.g. y for x).",
        "Omitting units in the predicted value.",
      ],
      summary: [
        "Predict by substitution into ŷ = a + b·x.",
        "Inside data range = interpolation (reliable); outside = extrapolation (unreliable).",
        "r² = (r)², reported as a percentage with exact VCAA phrasing.",
        "Always quote slope ‘on average’ and include units.",
      ],
      practice: [
        { question: "ŷ = 10 + 0.5x. Predict ŷ when x = 12.", answer: "ŷ = 10 + 6 = 16." },
        { question: "Data range x = 5 to x = 25. Is a prediction at x = 40 interpolation or extrapolation?", answer: "Extrapolation — outside the data range, unreliable." },
        { question: "If r = −0.6, find r² and interpret as a percentage.", answer: "r² = 0.36 → 36% of variation in y is explained by x." },
        { question: "ŷ = 50 − 2x. Interpret the slope.", answer: "For every 1-unit increase in x, predicted y decreases by 2 on average." },
      ],
      quiz: [
        {
          question: "Predicting y for an x value INSIDE the observed data range is called:",
          options: ["Extrapolation", "Interpolation", "Regression", "Estimation"],
          correctAnswer: 1,
          explanation: "Inside the range = interpolation (reliable).",
        },
        {
          question: "If r = 0.8, then r² as a percentage is:",
          options: ["80%", "64%", "0.64%", "16%"],
          correctAnswer: 1,
          explanation: "r² = 0.64 = 64%.",
        },
        {
          question: "A prediction made well outside the observed range of x is:",
          options: ["Always accurate", "Reliable if r is high", "Unreliable (extrapolation)", "Independent of the data"],
          correctAnswer: 2,
          explanation: "Extrapolation is unreliable regardless of r.",
        },
      ],
    },
  ],

  // ─── 3C: Conducting a Regression Analysis (Residuals + Suitability) ─
  "y12g-ch3-3c-conducting-regression": [
    {
      title: "Conducting a Regression Analysis — Residuals & Suitability",
      explanation:
        "After fitting a regression line we must check whether a STRAIGHT line is actually a good model for the data. The standard check is the residual plot.\n\nA residual is the vertical distance from an observed point to the regression line:\n   residual = y − ŷ\nA positive residual means the observed value lies above the line; a negative residual means below.\n\nA residual plot graphs the residuals (y-axis) against the explanatory variable x (x-axis), with a horizontal reference line at zero.\n\nInterpreting the residual plot:\n• Random scatter about zero → linear model is appropriate.\n• Clear pattern (curve, U-shape, fanning out) → linear model is NOT appropriate; the underlying form is non-linear or the spread is not constant.\n\nA short regression report combines the equation, slope/intercept interpretation, r² interpretation, and a residual-plot comment about suitability — plus a note about extrapolation and any other limitations.",
      keyPoints: [
        "Residual = y − ŷ (observed minus predicted)",
        "Positive residual → above the line; negative → below",
        "Residual plot: residuals (y-axis) vs x (x-axis)",
        "Random scatter about zero ⇒ linear model appropriate",
        "Curved/U-shaped/fanning pattern ⇒ linear model NOT appropriate",
        "Sum of residuals from a least squares line equals zero",
      ],
      definitions: [
        { term: "Residual", meaning: "The difference between an observed y value and the predicted value from the regression line: residual = y − ŷ." },
        { term: "Residual plot", meaning: "A scatterplot of residuals against x, used to check the assumption of linearity." },
        { term: "Random scatter", meaning: "Residuals spread evenly above and below zero with no systematic pattern, indicating a suitable linear model." },
      ],
      formulas: [
        { name: "Residual", formula: "residual = y − ŷ" },
        { name: "Sum of residuals", formula: "Σ(y − ŷ) = 0", note: "True for any least squares line — useful as a check." },
      ],
      workedExamples: [
        {
          problem:
            "Given ŷ = 5 + 2x, complete the residual for the data point (3, 13).",
          steps: [
            "Predicted: ŷ = 5 + 2(3) = 11.",
            "Residual = y − ŷ = 13 − 11 = +2.",
            "The observed value lies 2 units ABOVE the regression line.",
          ],
          answer: "Residual = +2 (above the line).",
        },
        {
          problem:
            "A residual plot shows residuals scattered randomly above and below zero with no pattern. Comment on the suitability of the linear model.",
          steps: [
            "Random scatter about zero is what we hope to see.",
            "There is no systematic pattern, no curve, no fanning.",
            "Conclusion: a linear model is appropriate for this data.",
          ],
          answer: "Random scatter ⇒ linear model is appropriate.",
        },
        {
          problem:
            "A residual plot shows a clear U-shape (negative, then positive, then negative again across x). Comment.",
          steps: [
            "A U-shape is a SYSTEMATIC pattern, not random scatter.",
            "It suggests the true relationship is curved (non-linear).",
            "A linear model is NOT appropriate; consider a non-linear model or transformation.",
          ],
          answer: "Curved residual pattern ⇒ linear model is not appropriate; the relationship is non-linear.",
        },
      ],
      tips: [
        "Check the residual plot BEFORE quoting r or making predictions — without linearity these are misleading.",
        "Random scatter is the only acceptable pattern for ‘linear model is appropriate’.",
        "A U-shape, an inverted U, or a fan (megaphone) shape all signal that a linear model is unsuitable.",
        "TI-Nspire CAS — residual plot: after running Linear Regression (a + bx), a column called ‘stat.resid’ (or similar) is created automatically. Open Data & Statistics → put x on the horizontal axis and stat.resid on the vertical axis.",
        "Casio ClassPad — residual plot: after Linear Reg, the residuals appear in list3 (or named list). Use SetGraph → Setting → Type: Scatter, XList: list1, YList: residual list, then Graph.",
      ],
      examQuestion: {
        problem:
          "A regression of distance (m, ŷ) on time (s, x) gives ŷ = 1.2 + 4.5x with r² = 0.94. The residual plot shows a clear curved pattern. (a) State the value of one residual if the observation (4, 22) is included. (b) Comment on whether the linear model is appropriate, justifying with reference to the residual plot. (c) State one limitation of using this model for prediction. (5 marks)",
        solution: [
          "(a) ŷ = 1.2 + 4.5(4) = 1.2 + 18 = 19.2. Residual = 22 − 19.2 = +2.8 (the observed point is 2.8 m above the line).",
          "(b) Although r² = 0.94 is high, the residual plot shows a CURVED pattern, not random scatter. This indicates that the relationship between distance and time is non-linear, so the linear model is NOT appropriate.",
          "(c) Predictions outside the observed time range are unreliable (extrapolation); also, because the model is non-linear, even predictions inside the range are biased. A non-linear model would fit better.",
        ],
        answer: "(a) Residual = +2.8 m. (b) Curved residual plot ⇒ linear model not appropriate. (c) Extrapolation unreliable, model misspecified — predictions biased.",
        marks: 5,
      },
      commonErrors: [
        "Computing ŷ − y instead of y − ŷ (sign reversed).",
        "Using a high r or r² alone to declare linearity — must check the residual plot.",
        "Saying ‘the residual plot is random’ without describing the lack of pattern.",
        "Confusing a residual plot (residuals vs x) with the original scatterplot (y vs x).",
        "Forgetting to quote the curved pattern when concluding non-linearity.",
      ],
      summary: [
        "residual = y − ŷ.",
        "Residual plot: random scatter ⇒ linear model is appropriate.",
        "Pattern (curve, U, fan) ⇒ linear model NOT appropriate.",
        "Always combine high r² with a clean residual plot before trusting the model.",
        "Regression report = equation + slope/intercept + r² + residual comment + limitations.",
      ],
      practice: [
        { question: "ŷ = 3 + 2x. Find the residual for (5, 14).", answer: "ŷ = 13; residual = 14 − 13 = +1." },
        { question: "What does a residual of −4 mean?", answer: "The observed value is 4 units BELOW the regression line." },
        { question: "Residual plot shows clear curve. What do you conclude?", answer: "The relationship is non-linear; linear model not appropriate." },
        { question: "What pattern in a residual plot supports a linear model?", answer: "Random scatter about zero with no systematic pattern." },
        { question: "What is Σ(residuals) for any least squares regression line?", answer: "Zero." },
      ],
      quiz: [
        {
          question: "A residual is calculated as:",
          options: ["ŷ − y", "y − ŷ", "x − ȳ", "y − x̄"],
          correctAnswer: 1,
          explanation: "Residual = observed − predicted = y − ŷ.",
        },
        {
          question: "A residual plot shows random scatter about zero. This means:",
          options: [
            "The linear model is not appropriate",
            "The data is non-linear",
            "The linear model is appropriate",
            "There is no association",
          ],
          correctAnswer: 2,
          explanation: "Random scatter is the signal we want — linearity assumption holds.",
        },
        {
          question: "A residual plot showing a clear curved (U-shape) pattern suggests:",
          options: [
            "Strong linear association",
            "A non-linear relationship — linear model unsuitable",
            "The data has no association",
            "An error in the calculator",
          ],
          correctAnswer: 1,
          explanation: "Systematic curve in residuals = relationship is non-linear.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 3 ─────────────────────────────────────────
  "y12g-ch3-review": [
    {
      title: "Review of Chapter 3 — Modelling Linear Associations",
      explanation:
        "Chapter 3 turns the description of a linear association into a working model.\n\n3A: Build the least squares regression line ŷ = a + b·x using CAS. Slope b = average change in ŷ per 1-unit increase in x; intercept a = predicted ŷ when x = 0.\n\n3B: Use the model to predict — interpolation (inside data range) is reliable, extrapolation (outside) is not. Report r² as a percentage using the exact VCAA wording.\n\n3C: Check the model with a residual plot. Random scatter about zero ⇒ linear model is appropriate; a curved or fanning pattern ⇒ linear model is NOT appropriate.\n\nA full regression report combines:\n1. Direction, form, strength of the original scatterplot.\n2. The regression equation ŷ = a + b·x.\n3. Slope interpretation in context (with ‘on average’ and units).\n4. r² interpretation as a percentage.\n5. Residual-plot comment on suitability.\n6. Limitations (extrapolation, lurking variables, sample size).",
      keyPoints: [
        "ŷ = a + b·x (always this form in VCE General)",
        "Slope = average change in ŷ per unit increase in x",
        "Quote r² as a percentage with the VCAA phrasing",
        "Interpolation reliable; extrapolation unreliable",
        "Residual plot = test for linearity (random scatter ⇒ OK)",
        "Correlation does not imply causation",
      ],
      formulas: [
        { name: "Regression line", formula: "ŷ = a + b·x" },
        { name: "Slope from r", formula: "b = r · (Sy ÷ Sx)" },
        { name: "Intercept", formula: "a = ȳ − b·x̄" },
        { name: "Residual", formula: "residual = y − ŷ" },
        { name: "Coefficient of determination", formula: "r² = (r)²,  quoted as a percentage" },
      ],
      workedExamples: [
        {
          problem:
            "A study gives ŷ = −10 + 3.2x and r = 0.76. Data covers x = 5 to x = 40.\n(a) Describe the relationship.\n(b) Interpret the slope.\n(c) Compute and interpret r² to 3 dp.\n(d) The residual plot shows random scatter. Comment on suitability.\n(e) Predict ŷ at x = 60 and comment on reliability.",
          steps: [
            "(a) |r| = 0.76 ≥ 0.75 → strong; sign positive → strong positive linear association between y and x.",
            "(b) Slope = 3.2: for every 1-unit increase in x, predicted y increases by 3.2 units on average.",
            "(c) r² = (0.76)² = 0.5776 → 0.578. ‘57.8% of the variation in y can be explained by the variation in x.’",
            "(d) Random scatter about zero ⇒ the linear model is appropriate.",
            "(e) ŷ = −10 + 3.2(60) = 182. x = 60 is outside 5–40 → extrapolation, prediction unreliable.",
          ],
          answer: "(a) Strong positive linear. (b) +3.2 per unit on average. (c) 57.8% of variation in y explained by x. (d) Linear model appropriate. (e) ŷ = 182 but extrapolation, unreliable.",
        },
        {
          problem:
            "ŷ = 100 − 2.5x. Find the residual for the observation (10, 80) and interpret.",
          steps: [
            "ŷ = 100 − 2.5(10) = 75.",
            "Residual = 80 − 75 = +5.",
            "The observed value lies 5 units above the line.",
          ],
          answer: "Residual = +5 (above the line).",
        },
      ],
      tips: [
        "When asked for a regression report, follow: equation → slope → r² → residual → limitations.",
        "Always include units, ‘on average’, and the response/explanatory variable names.",
        "If the residual plot is curved, do NOT trust r, r², predictions or interpretations from the linear model.",
        "Extrapolation comments are easy marks — never skip them.",
      ],
      examQuestion: {
        problem:
          "A regression of monthly sales ($000, ŷ) on advertising spend ($000, x) gives ŷ = 4 + 2.6x with r² = 0.81. Data covers x = 0 to x = 15. The residual plot shows random scatter about zero.\n(a) Interpret the slope in context. (b) Interpret r². (c) Predict sales for an advertising spend of $8 000 and comment on reliability. (d) The marketing manager wants to predict sales for an advertising spend of $50 000. Why is this prediction unreliable? (6 marks)",
        solution: [
          "(a) Slope = 2.6: for every additional $1 000 spent on advertising, predicted monthly sales increase by $2 600 on average.",
          "(b) r² = 0.81 → 81% of the variation in monthly sales can be explained by the variation in advertising spend.",
          "(c) ŷ = 4 + 2.6(8) = 24.8 → predicted sales = $24 800. x = 8 is within 0–15, so this is interpolation and is reliable. The residual plot showed random scatter, supporting the linear model.",
          "(d) x = 50 lies far outside the observed range (0–15). This is extrapolation, so the prediction is unreliable — the linear pattern may not continue at much higher advertising spend.",
        ],
        answer:
          "(a) +$2 600 sales per extra $1 000 ad spend, on average. (b) 81% of variation in sales explained by ad spend. (c) ŷ = $24 800, reliable (interpolation, residuals OK). (d) x = 50 is extrapolation — pattern may not extend.",
        marks: 6,
      },
      commonErrors: [
        "Forgetting ‘on average’ in slope interpretations.",
        "Wrong wording for r² (saying ‘caused by’ or ‘of y’ instead of ‘of the variation in y’).",
        "Trusting predictions when the residual plot shows a pattern.",
        "Treating extrapolation as reliable because r² is high.",
        "Omitting units, especially in financial or scientific contexts.",
      ],
      summary: [
        "Build with CAS: ŷ = a + b·x.",
        "Slope = average change per unit; intercept = predicted ŷ when x = 0.",
        "Predict by substitution; comment on interpolation vs extrapolation.",
        "Use the residual plot to confirm linearity — random scatter required.",
        "Report = equation + slope + r² + residual comment + limitations.",
      ],
      practice: [
        { question: "ŷ = 8 + 1.5x. Predict ŷ when x = 10.", answer: "ŷ = 23." },
        { question: "If slope = −2.5, what does this mean?", answer: "For every 1-unit increase in x, predicted y decreases by 2.5 on average." },
        { question: "If r = −0.7, find r² as a percentage.", answer: "49%." },
        { question: "Residual plot has a clear U-shape — what does this suggest?", answer: "The relationship is non-linear; a linear model is not appropriate." },
        { question: "Why does the LSRL pass through (x̄, ȳ)?", answer: "Because the residuals sum to zero — a property of least squares fitting." },
      ],
      quiz: [
        {
          question: "Slope = 4 in ŷ = 12 + 4x means:",
          options: [
            "ŷ increases by 12 per unit x",
            "ŷ increases by 4 per unit x, on average",
            "ŷ = 4 when x = 0",
            "x increases by 4 per unit ŷ",
          ],
          correctAnswer: 1,
          explanation: "Slope = average change in ŷ per 1-unit increase in x.",
        },
        {
          question: "Predicting ŷ for an x value far outside the data range is:",
          options: ["Interpolation, reliable", "Extrapolation, unreliable", "Impossible", "Always exact"],
          correctAnswer: 1,
          explanation: "Outside the observed range = extrapolation, unreliable.",
        },
        {
          question: "A residual of +3 means the observed y is:",
          options: ["3 units below the line", "3 units above the line", "Equal to the predicted value", "Equal to x"],
          correctAnswer: 1,
          explanation: "Positive residual ⇒ observation lies above the regression line.",
        },
        {
          question: "If r² = 0.49 with x = study time and y = exam score, the correct interpretation is:",
          options: [
            "49% of exam scores are caused by study time",
            "49% of the variation in exam scores can be explained by the variation in study time",
            "49% of students study effectively",
            "49% of scores equal study time",
          ],
          correctAnswer: 1,
          explanation: "Exact VCAA wording: ‘variation in y explained by variation in x’.",
        },
      ],
    },
  ],
};
