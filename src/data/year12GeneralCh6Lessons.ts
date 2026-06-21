import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 6: Revision — Data Analysis (VCE Unit 3)
// Exam-style practice that consolidates Chapters 1–5 (Univariate, Associations,
// Regression, Data Transformation, Time Series).

export const year12GeneralCh6Lessons: TopicLessonsMap = {
  // ─── 6A: Exam 1 — Univariate Data ────────────────────────────────
  "y12g-ch6-6a-exam1-univariate": [
    {
      title: "Exam 1 Style — Univariate Data",
      explanation:
        "Exam 1 questions on univariate data are short multiple-choice items testing FAST recall and CAS use. Expect:\n• Choosing the correct display (dot plot, stem plot, histogram, boxplot) for the variable type and sample size.\n• Reading the median, quartiles and IQR from a boxplot.\n• Identifying possible outliers using the 1.5×IQR fences: lower fence = Q1 − 1.5·IQR, upper fence = Q3 + 1.5·IQR.\n• Comparing two distributions by SHAPE (symmetric/skewed), CENTRE (median or mean) and SPREAD (IQR or standard deviation).\n• Using the 68–95–99.7 rule for approximately normal data.\n• Computing z-scores: z = (x − x̄)/s and interpreting (positive = above mean).\n\nStrategy: identify the variable type (categorical/numerical), pick centre & spread that match (median/IQR for skewed, mean/sd for symmetric), and never confuse percentage of values with number of values.",
      keyPoints: [
        "Categorical → bar chart / segmented bar; numerical → histogram, dot plot, boxplot",
        "Median & IQR for skewed data; mean & sd for symmetric data",
        "Outlier fences: Q1 − 1.5·IQR and Q3 + 1.5·IQR",
        "68–95–99.7 rule applies only to APPROXIMATELY NORMAL data",
        "z = (x − x̄)/s; same z means same number of sd's from mean",
      ],
      workedExamples: [
        {
          problem: "A boxplot has Q1 = 12, median = 18, Q3 = 24. Determine whether x = 40 is an outlier.",
          steps: [
            "IQR = Q3 − Q1 = 24 − 12 = 12",
            "Upper fence = Q3 + 1.5·IQR = 24 + 18 = 42",
            "x = 40 < 42, so x is NOT an outlier",
          ],
          answer: "40 is not an outlier (below the upper fence of 42).",
        },
        {
          problem: "Heights are approximately normal with mean 170 cm and sd 8 cm. What percentage of heights are between 162 and 178 cm?",
          steps: [
            "162 = 170 − 8 = mean − 1 sd; 178 = mean + 1 sd",
            "By 68–95–99.7 rule, about 68% lie within 1 sd of the mean",
          ],
          answer: "Approximately 68%.",
        },
      ],
      tips: [
        "Skewed → median/IQR. Symmetric → mean/sd. Don't mix",
        "1.5·IQR is the only outlier rule for boxplots",
        "Compare distributions in three sentences: SHAPE, CENTRE, SPREAD",
      ],
      definitions: [
        { term: "Outlier (boxplot)", meaning: "A value outside the fences Q1 − 1.5·IQR or Q3 + 1.5·IQR." },
        { term: "z-score", meaning: "z = (x − x̄)/s; the number of standard deviations a value is from the mean." },
      ],
      formulas: [
        { name: "IQR", formula: "IQR = Q3 − Q1" },
        { name: "Outlier fences", formula: "Lower = Q1 − 1.5·IQR, Upper = Q3 + 1.5·IQR" },
        { name: "z-score", formula: "z = (x − x̄)/s" },
      ],
      examQuestion: {
        problem: "Test scores are approximately normal with mean 60 and sd 8. Approximately what percentage of scores are above 76?",
        solution: [
          "76 = 60 + 2(8) = mean + 2 sd",
          "By 68–95–99.7, about 95% lie within 2 sd, so 5% lie outside",
          "Symmetry → about 2.5% above 76",
        ],
        answer: "Approximately 2.5%.",
        marks: 2,
      },
      commonErrors: [
        "Using mean/sd for clearly skewed data",
        "Forgetting to halve the 5% tail when finding 'above two sd'",
        "Reading the median as the mean from a boxplot",
      ],
      summary: [
        "Match display and summary to variable type and shape",
        "Use 1.5·IQR fences for outliers; 68–95–99.7 for normal data",
        "Always compare distributions on shape, centre and spread",
      ],
      practice: [
        { question: "Q1=10, Q3=20. Is x = 35 an outlier?", answer: "IQR=10, upper fence=20+15=35; x=35 not strictly an outlier (boundary)." },
        { question: "Mean 50, sd 5. z-score of 60?", answer: "z = (60−50)/5 = 2." },
        { question: "Symmetric data — best centre measure?", answer: "Mean." },
      ],
      quiz: [
        { question: "Best summary for skewed data:", options: ["Mean & sd", "Median & IQR", "Mode & range", "Mean & range"], correctAnswer: 1, explanation: "Median and IQR are resistant to skew." },
        { question: "Outlier fence formula:", options: ["Q1 − IQR", "Q1 − 1.5·IQR", "Mean − 2sd", "Q3 + 2·IQR"], correctAnswer: 1, explanation: "Standard 1.5·IQR rule." },
        { question: "Within 2 sd of the mean (normal data):", options: ["68%", "95%", "99.7%", "50%"], correctAnswer: 1, explanation: "68–95–99.7 rule." },
      ],
    },
  ],

  // ─── 6B: Exam 1 — Associations ───────────────────────────────────
  "y12g-ch6-6b-exam1-associations": [
    {
      title: "Exam 1 Style — Associations",
      explanation:
        "These items test your ability to choose the correct DISPLAY and SUMMARY for two-variable problems and to interpret association strength.\n\n• Two CATEGORICAL variables → two-way frequency table + percentaged segmented bar chart (always percentage by the EXPLANATORY variable).\n• Numerical RESPONSE vs categorical EXPLANATORY → parallel boxplots.\n• Two NUMERICAL variables → scatterplot; describe Direction, Form, Strength, Outliers (D-F-S-O).\n\nStrength of linear association from Pearson's r:\n|r| ≥ 0.75 strong, 0.5 ≤ |r| < 0.75 moderate, 0.25 ≤ |r| < 0.5 weak, < 0.25 none.\n\nNever claim CAUSATION from correlation. Only describe LINEAR association — non-linear scatterplots can have small r even with a clear pattern.",
      keyPoints: [
        "Two categorical → percentaged segmented bar (percent by explanatory)",
        "Numerical vs categorical → parallel boxplots",
        "Two numerical → scatterplot; describe D-F-S-O",
        "|r| thresholds: 0.25 / 0.5 / 0.75",
        "Correlation ≠ causation; r measures LINEAR strength only",
      ],
      workedExamples: [
        {
          problem: "Two-way table: Smokers — 40 sick out of 100; Non-smokers — 30 sick out of 200. Is there an association?",
          steps: [
            "Smokers % sick = 40/100 = 40%",
            "Non-smokers % sick = 30/200 = 15%",
            "40% ≠ 15% → there IS an association between smoking status and sickness",
          ],
          answer: "Yes — smokers are more likely to be sick (40% vs 15%).",
        },
        {
          problem: "A scatterplot of x vs y has r = −0.82. Describe the association.",
          steps: [
            "Sign negative → as x increases, y tends to decrease",
            "|r| = 0.82 ≥ 0.75 → strong",
            "Form linear (assumed from r being meaningful)",
          ],
          answer: "Strong, negative, linear association between x and y.",
        },
      ],
      tips: [
        "Always percentage by the EXPLANATORY variable in two-way tables",
        "Don't say 'causes' — say 'associated with'",
        "If a scatterplot is curved, r is not a reliable strength measure",
      ],
      definitions: [
        { term: "Pearson's r", meaning: "A number between −1 and 1 measuring the strength and direction of a LINEAR association." },
        { term: "Explanatory variable", meaning: "The variable used to explain or predict the response variable; goes on the x-axis." },
      ],
      formulas: [
        { name: "Strength bands (|r|)", formula: "<0.25 none, 0.25–0.5 weak, 0.5–0.75 moderate, ≥0.75 strong" },
      ],
      examQuestion: {
        problem: "A study finds r = 0.6 between weekly hours of study and test score. Describe the association and state one limitation.",
        solution: [
          "Sign positive → more study tends to mean higher score",
          "|r| = 0.6 → moderate linear association",
          "Limitation: correlation does not imply causation; other factors may be involved",
        ],
        answer: "Moderate, positive, linear association. Correlation does not imply that study causes higher scores.",
        marks: 3,
      },
      commonErrors: [
        "Percentaging by the response instead of the explanatory",
        "Saying 'r is high so x causes y'",
        "Calling a curved relationship 'weak' just because r is small",
      ],
      summary: [
        "Match display and summary to variable types",
        "Describe scatterplots with D-F-S-O",
        "Use |r| thresholds and never claim causation",
      ],
      practice: [
        { question: "r = 0.45, sign and strength?", answer: "Positive, weak." },
        { question: "Best display for two categorical variables?", answer: "Percentaged segmented bar chart." },
        { question: "Numerical vs three categories?", answer: "Parallel boxplots." },
      ],
      quiz: [
        { question: "r = −0.95 indicates:", options: ["Strong positive", "Strong negative", "Weak negative", "No association"], correctAnswer: 1, explanation: "Sign negative, |r|≥0.75 strong." },
        { question: "Best display for two categorical variables:", options: ["Scatterplot", "Boxplot", "Segmented bar", "Histogram"], correctAnswer: 2, explanation: "Percentaged segmented bar by explanatory." },
        { question: "Correlation implies causation:", options: ["True", "False"], correctAnswer: 1, explanation: "Never assume causation from r." },
      ],
    },
  ],

  // ─── 6C: Exam 1 — Regression & Transformation ────────────────────
  "y12g-ch6-6c-exam1-regression": [
    {
      title: "Exam 1 Style — Regression & Transformation",
      explanation:
        "Exam 1 regression items test the standard wording and CAS reading. Memorise these templates:\n\n• Slope b: 'On average, [response] changes by b [units] for every 1 [unit] increase in [explanatory].'\n• Intercept a: '[Response] when [explanatory] = 0 is a [units]' (only meaningful in context).\n• r²: 'r²×100% of the variation in [response] is explained by the variation in [explanatory].'\n• Residual = actual − predicted. Random scatter in residual plot → linear model is appropriate. Pattern (curve, U-shape) → non-linear, try a transformation.\n\nTransformations (VCE General):\n• x² or y² for parabolic shapes.\n• log(x) or log(y) when growth is rapid (compresses big values).\n• 1/x or 1/y when y rises then flattens or vice versa.\nAlways re-check the residual plot AFTER transforming.",
      keyPoints: [
        "Slope = average change in y per 1-unit increase in x",
        "r² is a percentage of variation EXPLAINED",
        "Residual = actual − predicted; random scatter = good linear fit",
        "Choose transformation by curve SHAPE; verify with residual plot",
        "Predict in transformed scale, then back-transform if needed",
      ],
      workedExamples: [
        {
          problem: "Regression: ŷ = 12 + 0.4x with r² = 0.64. Interpret slope and r².",
          steps: [
            "Slope 0.4: on average, y increases by 0.4 units for every 1-unit increase in x",
            "r² = 0.64 → 64% of the variation in y is explained by the variation in x",
          ],
          answer: "Slope: y rises 0.4 per unit of x. r²: 64% of variation in y explained by x.",
        },
        {
          problem: "A residual plot of ŷ = a + bx shows a clear U-shape. Suggest a transformation.",
          steps: [
            "U-shape means model misses curvature → not linear",
            "Try squaring x (x² transformation) for an upward-curving relationship",
            "Refit and re-check the residual plot for random scatter",
          ],
          answer: "Apply an x² transformation and re-check residuals.",
        },
      ],
      tips: [
        "Quote slope and r² in CONTEXT, with units",
        "Extrapolation = predicting outside the data range; flag reliability",
        "After transforming, residuals should look RANDOM",
      ],
      definitions: [
        { term: "Residual", meaning: "Actual y − predicted y. Negative = model overestimates, positive = underestimates." },
        { term: "Coefficient of determination (r²)", meaning: "Proportion (0–1) of variation in y explained by the regression on x." },
      ],
      formulas: [
        { name: "Regression line", formula: "ŷ = a + bx" },
        { name: "Residual", formula: "residual = y − ŷ" },
        { name: "Squared transformation", formula: "ŷ = a + b·x²  or  ŷ² = a + b·x" },
        { name: "Log transformation", formula: "ŷ = a + b·log(x)  or  log(ŷ) = a + b·x" },
        { name: "Reciprocal transformation", formula: "ŷ = a + b·(1/x)  or  1/ŷ = a + b·x" },
      ],
      examQuestion: {
        problem: "ŷ = 5 + 1.2x with r² = 0.81 models test score (y) vs hours studied (x). Interpret r² and use the model to predict the score for 6 hours of study.",
        solution: [
          "r² = 0.81 → 81% of variation in test score is explained by variation in study hours",
          "Predicted score = 5 + 1.2(6) = 12.2",
        ],
        answer: "81% of variation in score explained by study hours; predicted score for 6 hours = 12.2.",
        marks: 3,
      },
      commonErrors: [
        "Saying 'r² explains the relationship' instead of 'variation'",
        "Forgetting context/units in interpretation",
        "Using a linear model when residuals show a pattern",
      ],
      summary: [
        "Memorise slope, intercept and r² wording templates",
        "Use the residual plot to judge model fit",
        "Pick transformations based on the SHAPE of the curve",
      ],
      practice: [
        { question: "ŷ = 20 − 0.5x. Interpret slope.", answer: "On average, y decreases by 0.5 for every 1-unit increase in x." },
        { question: "r² = 0.49. Interpretation?", answer: "49% of variation in y is explained by x." },
        { question: "Residual plot has random scatter. Conclusion?", answer: "Linear model is appropriate." },
      ],
      quiz: [
        { question: "Residual = ?", options: ["ŷ − y", "y − ŷ", "y + ŷ", "y/ŷ"], correctAnswer: 1, explanation: "Actual minus predicted." },
        { question: "U-shape residual plot suggests:", options: ["Linear OK", "Try transformation", "Outlier", "Done"], correctAnswer: 1, explanation: "Pattern means non-linear; transform." },
        { question: "r² = 0.36 means:", options: ["36% of y is x", "36% of variation in y explained by x", "r = 0.36", "Strong fit"], correctAnswer: 1, explanation: "r² is the proportion of variation explained." },
      ],
    },
  ],

  // ─── 6D: Exam 1 — Time Series ────────────────────────────────────
  "y12g-ch6-6d-exam1-time-series": [
    {
      title: "Exam 1 Style — Time Series",
      explanation:
        "Exam 1 time series items test SPEED on the standard workflow:\n• Identify components (trend / seasonal / cyclical / irregular).\n• Compute or use moving means (centre even windows; match window to seasonal period).\n• Use seasonal indices: deseasonalise = actual ÷ SI; reseasonalise = trend × SI.\n• Apply a deseasonalised trend line and back-multiply by SI to forecast.\n\nQuick checks:\n• Quarterly SIs sum to 4; monthly SIs sum to 12.\n• SI > 1 above average season; SI < 1 below.\n• Forecasts beyond the data are EXTRAPOLATION — flag reliability.",
      keyPoints: [
        "Seasonal indices sum to the number of seasons (4 quarterly, 12 monthly)",
        "Deseasonalise = actual ÷ SI; reseasonalise = trend × SI",
        "Always centre an even-point moving mean",
        "Trend line is fitted to DESEASONALISED data",
        "Far-future forecasts are extrapolations",
      ],
      workedExamples: [
        {
          problem: "Trend line: deseasonalised sales = 200 + 5·t (t = quarter). SI for Q4 = 1.2. Forecast actual Q4 sales when t = 14.",
          steps: [
            "Trend value at t = 14: 200 + 5(14) = 270",
            "Reseasonalise with SI₄ = 1.2: 270 × 1.2 = 324",
          ],
          answer: "Forecast actual Q4 sales = 324.",
        },
        {
          problem: "Monthly SI for July = 0.85. Actual July value = 170. Find the deseasonalised value and interpret the SI.",
          steps: [
            "Deseasonalised = 170 ÷ 0.85 = 200",
            "SI = 0.85 → July values are typically 15% below the monthly average",
          ],
          answer: "Deseasonalised July = 200; July is typically 15% below average.",
        },
      ],
      tips: [
        "Match window length to seasonal period (4 quarterly, 12 monthly)",
        "Reseasonalise AFTER predicting from the trend line — don't forget",
        "If indices don't sum correctly, multiply each by (n ÷ sum) to adjust",
      ],
      definitions: [
        { term: "Seasonal index", meaning: "A number measuring how a season compares to the average season." },
        { term: "Reseasonalising", meaning: "Multiplying a deseasonalised trend value by the seasonal index to get an actual forecast." },
      ],
      formulas: [
        { name: "Deseasonalise", formula: "deseasonalised = actual ÷ SI" },
        { name: "Reseasonalise", formula: "actual forecast = (a + b·t) × SI" },
        { name: "Adjustment", formula: "SI_adj = SI_raw × (n ÷ sum of raw SIs)" },
      ],
      examQuestion: {
        problem: "Quarterly SIs are 1.30, 0.80, 0.70, ?. Find the missing SI and interpret it.",
        solution: [
          "Sum must equal 4 (quarterly)",
          "Missing SI = 4 − (1.30 + 0.80 + 0.70) = 1.20",
          "Interpret: Q4 values are typically 20% above the quarterly average",
        ],
        answer: "Missing SI = 1.20; Q4 is typically 20% above average.",
        marks: 2,
      },
      commonErrors: [
        "Multiplying when deseasonalising (must divide)",
        "Forgetting to reseasonalise the forecast",
        "Using the wrong SI for the forecast season",
      ],
      summary: [
        "Components: trend, seasonal, cyclical, irregular",
        "Deseasonalise → fit trend → forecast → reseasonalise",
        "Indices for one cycle sum to the number of seasons",
      ],
      practice: [
        { question: "Trend = 80 + 2t at t=10, SI=1.10. Forecast?", answer: "(80+20)·1.10 = 110." },
        { question: "Sum of monthly SIs?", answer: "12." },
        { question: "Actual=420, SI=1.05. Deseasonalised?", answer: "420÷1.05 = 400." },
      ],
      quiz: [
        { question: "To deseasonalise:", options: ["Multiply by SI", "Divide by SI", "Add SI", "Subtract SI"], correctAnswer: 1, explanation: "Deseasonalised = actual ÷ SI." },
        { question: "Quarterly SIs sum to:", options: ["1", "4", "12", "100"], correctAnswer: 1, explanation: "Four quarters averaging 1." },
        { question: "Final step of forecasting:", options: ["Smooth", "Calculate SI", "Reseasonalise", "Plot residuals"], correctAnswer: 2, explanation: "Multiply trend × SI." },
      ],
    },
  ],

  // ─── 6E: Exam 2 Style Questions ──────────────────────────────────
  "y12g-ch6-6e-exam2": [
    {
      title: "Exam 2 Style — Extended Response on Data Analysis",
      explanation:
        "Exam 2 extended-response questions on Data Analysis combine multiple chapters in one context. A typical question gives a dataset (table, scatterplot or time series) and asks you to:\n\n1) Describe a distribution (centre, spread, shape, outliers).\n2) Describe an association (D-F-S-O for scatterplots; percentaged comparison for tables).\n3) Fit a regression line and interpret slope, intercept and r² in context with units.\n4) Use a residual plot to check the linear model and propose a transformation if needed.\n5) Apply a time series workflow: identify components, compute moving means, calculate or use seasonal indices, deseasonalise, fit a trend, then reseasonalise to forecast.\n\nMARKING TIPS\n• Always quote answers IN CONTEXT with UNITS.\n• Round only the FINAL answer; carry full precision in CAS.\n• When predicting, state whether it is interpolation or extrapolation and comment on reliability.\n• When transforming, justify the choice with the SHAPE of the original scatterplot or residual plot.",
      keyPoints: [
        "Always answer in context with units",
        "Round only at the final step",
        "Justify model choice using the residual plot",
        "Comment on extrapolation when forecasting beyond the data",
        "Use VCAA wording templates for slope, r² and SI",
      ],
      workedExamples: [
        {
          problem: "Quarterly café sales (× $1000) over 3 years are deseasonalised. The least-squares regression gives: deseasonalised sales = 18 + 0.5·t, where t = 1 corresponds to Q1 of year 1. The adjusted seasonal indices are SI₁=0.80, SI₂=1.05, SI₃=1.10, SI₄=1.05. Forecast actual Q3 sales for year 4 (t = 15) and comment.",
          steps: [
            "Trend value: 18 + 0.5(15) = 25.5 (× $1000)",
            "Reseasonalise with SI₃ = 1.10: 25.5 × 1.10 = 28.05",
            "Forecast ≈ $28 050",
            "This is an extrapolation; reliability assumes the linear trend and seasonal pattern continue",
          ],
          answer: "Forecast ≈ $28 050; reliability depends on trend and seasonality continuing.",
        },
      ],
      tips: [
        "Read the question stem fully BEFORE touching the calculator",
        "Underline 'in context' instructions and UNITS",
        "If asked 'comment on reliability', mention extrapolation explicitly",
      ],
      definitions: [
        { term: "Extrapolation", meaning: "Predicting outside the range of the observed data; reliability is reduced." },
        { term: "Interpolation", meaning: "Predicting within the range of the data; generally more reliable." },
      ],
      formulas: [
        { name: "Forecast", formula: "actual forecast = (a + b·t) × SI" },
        { name: "Slope wording", formula: "On average, [y] changes by b [units] per 1 [unit] increase in [x]" },
        { name: "r² wording", formula: "r²×100% of the variation in [y] is explained by the variation in [x]" },
      ],
      examQuestion: {
        problem: "A scatterplot of weekly sales (y, $1000) against advertising spend (x, $100) has ŷ = 4 + 1.6x with r = 0.9. (a) Interpret r² in context. (b) Predict sales when x = 5 and state if this is interpolation or extrapolation, given x ranges from 1 to 8.",
        solution: [
          "r² = 0.81; 81% of the variation in weekly sales is explained by variation in advertising spend",
          "Predicted sales = 4 + 1.6(5) = 12 → $12 000",
          "x = 5 is within 1–8, so interpolation; prediction is reliable",
        ],
        answer: "(a) 81% of variation in weekly sales explained by advertising spend. (b) $12 000; interpolation, reliable.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting units or context in interpretation",
        "Rounding intermediate steps",
        "Skipping reseasonalisation in time series forecasts",
        "Calling a transformation without checking residuals",
      ],
      summary: [
        "Exam 2 blends distributions, associations, regression, transformations and time series",
        "Always state answers in CONTEXT with UNITS",
        "Use the residual plot to defend your model choice",
        "Flag interpolation vs extrapolation explicitly",
      ],
      practice: [
        { question: "ŷ = 50 − 2x. Predict y at x = 12 and interpret slope.", answer: "y = 26; on average, y decreases by 2 per 1-unit increase in x." },
        { question: "Adjusted quarterly SIs: 1.10, 0.95, ?, 1.05. Missing value?", answer: "0.90." },
        { question: "x ranges 5–20, predict at x = 30. Type of prediction?", answer: "Extrapolation; reliability reduced." },
      ],
      quiz: [
        { question: "Predicting outside the data range is:", options: ["Interpolation", "Extrapolation", "Smoothing", "Centring"], correctAnswer: 1, explanation: "Outside the data range = extrapolation." },
        { question: "Best practice for rounding in Exam 2:", options: ["Round each step", "Round only at the end", "Round to 1 d.p. always", "Don't round"], correctAnswer: 1, explanation: "Carry full precision; round only the final answer." },
        { question: "r² of 0.49 means in context:", options: ["49% of y is x", "49% of variation in y explained by x", "r = 0.49", "Weak fit"], correctAnswer: 1, explanation: "r² is the proportion of variation explained." },
        { question: "Final time-series forecasting step:", options: ["Smooth", "Reseasonalise", "Plot residuals", "Re-centre"], correctAnswer: 1, explanation: "Multiply trend forecast by SI." },
      ],
    },
  ],
};
