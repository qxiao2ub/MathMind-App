import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 5: Investigating and Modelling Time Series (VCE Unit 4)

export const year12GeneralCh5Lessons: TopicLessonsMap = {
  // ─── 5A: Time Series Data ───────────────────────────────────────
  "y12g-ch5-5a-time-series-data": [
    {
      title: "Components of a Time Series",
      explanation:
        "A time series is a set of observations recorded at regular intervals in chronological order — for example monthly sales, quarterly unemployment or daily temperature. The horizontal axis is ALWAYS time and points are joined in time order.\n\nVCAA recognises four components that may be present:\n\n1) TREND — the long-term direction (increasing, decreasing or none).\n2) SEASONAL — a regular pattern that repeats within ONE YEAR (e.g. quarterly, monthly).\n3) CYCLICAL — long-term wave-like fluctuations longer than one year (e.g. business cycle).\n4) IRREGULAR — random one-off fluctuations (storms, pandemic).\n\nA single time series can show several components at once. When describing a plot you must address every relevant component.",
      keyPoints: [
        "Time series = observations in chronological order at equal intervals",
        "Four components: trend, seasonal, cyclical, irregular",
        "Seasonal repeats within a year; cyclical repeats over more than a year",
        "Irregular variation cannot be predicted",
        "Always plot time on the horizontal axis and join points in time order",
      ],
      workedExamples: [
        {
          problem: "Monthly ice-cream sales (Jan 2018 – Dec 2023) rise overall, with peaks every Dec–Jan and troughs every Jun–Jul. Identify the components present.",
          steps: [
            "Long-term direction is upward → TREND is increasing",
            "Peaks every Dec–Jan repeat each year → SEASONAL (period 12 months)",
            "No multi-year wave → no clear cyclical component",
            "Small one-off spikes remain → IRREGULAR variation",
          ],
          answer: "Trend (increasing) + seasonal (period 12) + irregular.",
        },
      ],
      tips: [
        "Don't call a multi-year wave 'seasonal' — that's cyclical",
        "Use the seasonal period (4 quarterly, 12 monthly) when smoothing later",
      ],
      definitions: [
        { term: "Time series", meaning: "A sequence of numerical values recorded at regular time intervals in chronological order." },
        { term: "Trend", meaning: "The long-term increasing or decreasing direction of the data." },
        { term: "Seasonal variation", meaning: "A pattern repeating at fixed intervals within one year." },
        { term: "Cyclical variation", meaning: "Long-term wave-like rises and falls that take longer than one year." },
        { term: "Irregular variation", meaning: "Random, unpredictable one-off fluctuations." },
      ],
      examQuestion: {
        problem: "Quarterly sales over 5 years show a steady increase and a peak in Q4 each year. Identify and describe the components present.",
        solution: [
          "1 mark: identifies an increasing TREND",
          "1 mark: identifies SEASONAL variation with period 4 (quarterly), peak in Q4",
          "1 mark: states no obvious cyclical component or notes minor irregular variation",
        ],
        answer: "Increasing trend + quarterly seasonal variation peaking in Q4 + minor irregular variation; no cyclical pattern.",
        marks: 3,
      },
      commonErrors: [
        "Confusing cyclical (>1 year) with seasonal (within 1 year)",
        "Describing only the trend and ignoring seasonality",
        "Joining points out of time order",
      ],
      summary: [
        "Time series have up to four components: trend, seasonal, cyclical, irregular",
        "Seasonal patterns repeat within a year; cyclical patterns are longer",
        "Always describe every component visible in the plot",
      ],
      practice: [
        { question: "Monthly tourist numbers peak every December for 6 years and gradually rise overall. Components?", answer: "Increasing trend + seasonal variation (period 12)." },
        { question: "Annual GDP shows wave-like booms and recessions over 15 years. Component?", answer: "Cyclical variation." },
        { question: "Daily website hits drop sharply on the day of an outage. Component?", answer: "Irregular variation." },
      ],
      quiz: [
        { question: "A repeating pattern within one year is called:", options: ["Cyclical", "Seasonal", "Irregular", "Trend"], correctAnswer: 1, explanation: "Seasonal patterns repeat at fixed intervals within one year." },
        { question: "A boom-and-bust pattern lasting several years is:", options: ["Seasonal", "Trend", "Cyclical", "Irregular"], correctAnswer: 2, explanation: "Cyclical variation lasts longer than one year." },
        { question: "A one-off spike caused by a flood is:", options: ["Seasonal", "Cyclical", "Irregular", "Trend"], correctAnswer: 2, explanation: "One-off events are irregular variation." },
      ],
    },
  ],

  // ─── 5B: Moving Mean Smoothing ──────────────────────────────────
  "y12g-ch5-5b-moving-mean": [
    {
      title: "Moving Mean Smoothing",
      explanation:
        "Smoothing removes short-term fluctuations so the underlying TREND becomes visible. The moving mean replaces each value with the mean of itself and an equal number of neighbours.\n\nODD-point moving mean (3, 5, 7…): the smoothed value sits at the middle time point — no centring needed.\n\nEVEN-point moving mean (2, 4, 6…): the smoothed value falls BETWEEN two time points, so we must CENTRE it by averaging two consecutive moving means. A 4-point centred moving mean is standard for QUARTERLY data; a 12-point centred moving mean is used for MONTHLY data.\n\nThe number of points should equal the SEASONAL PERIOD so that the seasonal effect cancels out.\n\nCAS — TI-Nspire: in Lists & Spreadsheet enter time and data, then in a new column use =mean(b1:b3) (3-point) or build 4-point means then centre with =(c1+c2)/2.\nCAS — ClassPad: Statistics → place data in lists, use mean(list2[1..3]) for moving means and create a centred-mean list.",
      keyPoints: [
        "Moving mean smooths short-term variation to reveal trend",
        "Odd window → no centring required",
        "Even window → must CENTRE the moving mean",
        "Window size = seasonal period (4 quarterly, 12 monthly)",
        "Smoothing loses values at each end of the series",
      ],
      workedExamples: [
        {
          problem: "Quarterly sales: 10, 14, 18, 22, 12, 16. Calculate the 4-point CENTRED moving mean at Q4.",
          steps: [
            "First 4-point mean (Q1–Q4) = (10+14+18+22)/4 = 16, sits between Q2 and Q3",
            "Second (Q2–next-Q1) = (14+18+22+12)/4 = 16.5, sits between Q3 and Q4",
            "Third (Q3–next-Q2) = (18+22+12+16)/4 = 17, sits between Q4 and next-Q1",
            "Centred at Q4 = (16.5 + 17)/2 = 16.75",
          ],
          answer: "Centred 4-point moving mean at Q4 ≈ 16.75.",
        },
        {
          problem: "Daily temperatures (°C): 22, 25, 24, 27, 26. Find the 3-point moving mean for day 3.",
          steps: ["3-point mean at day 3 = (25 + 24 + 27)/3", "= 76/3 ≈ 25.33"],
          answer: "≈ 25.3 °C",
        },
      ],
      tips: [
        "Match window length to the seasonal period — that's why quarterly uses 4-point",
        "Don't round moving means until the final step",
      ],
      definitions: [
        { term: "Smoothing", meaning: "Removing short-term fluctuations from a time series to highlight the underlying trend." },
        { term: "Moving mean", meaning: "The mean of a fixed number of consecutive values, recalculated as the window slides through the series." },
        { term: "Centred moving mean", meaning: "An even-point moving mean re-positioned at a real time point by averaging two consecutive moving means." },
      ],
      formulas: [
        { name: "3-point moving mean at t", formula: "(y_{t-1} + y_t + y_{t+1}) / 3" },
        { name: "4-point centred moving mean", formula: "Average of two consecutive 4-point means either side of t" },
      ],
      examQuestion: {
        problem: "Monthly rainfall (mm) for Jan–Jul: 80, 95, 60, 70, 55, 40, 50. Calculate the 3-point moving mean for March, April and May.",
        solution: [
          "March = (80 + 95 + 60)/3 = 78.33",
          "April = (95 + 60 + 70)/3 = 75",
          "May = (60 + 70 + 55)/3 = 61.67",
        ],
        answer: "March ≈ 78.3, April = 75, May ≈ 61.7.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to centre an even-point moving mean",
        "Using a window that doesn't match the seasonal period",
        "Plotting the smoothed value at the wrong time point",
      ],
      summary: [
        "Moving means smooth a series to reveal trend",
        "Use odd window for a direct value, even window plus centring otherwise",
        "Match window length to the seasonal period",
      ],
      practice: [
        { question: "Why must a 4-point moving mean be centred?", answer: "Because the mean falls between two time points; centring places it at a real point." },
        { question: "What window suits monthly data with yearly seasonality?", answer: "12-point centred moving mean." },
        { question: "5-point moving mean at t=3 for 4, 6, 5, 8, 7?", answer: "(4+6+5+8+7)/5 = 6." },
      ],
      quiz: [
        { question: "Centring is required for:", options: ["3-point mean", "5-point mean", "4-point mean", "7-point mean"], correctAnswer: 2, explanation: "Even-point moving means must be centred." },
        { question: "Best window for quarterly data with seasonality:", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "Use a window equal to the seasonal period (4)." },
        { question: "Smoothing primarily reveals:", options: ["Seasonality", "Spikes", "Trend", "Outliers"], correctAnswer: 2, explanation: "The purpose of smoothing is to expose the trend." },
      ],
    },
  ],

  // ─── 5C: Moving Median Smoothing ────────────────────────────────
  "y12g-ch5-5c-moving-median": [
    {
      title: "Moving Median Smoothing",
      explanation:
        "Moving MEDIAN smoothing replaces each value with the median of itself and a fixed number of neighbours. It is used in VCE General when the data contains OUTLIERS, because the median is RESISTANT to extreme values (the mean is pulled by them).\n\nMoving medians are usually done with an ODD number of points (3 or 5) and can be done graphically — find the middle value of three consecutive plotted points and plot it at the middle time.\n\nLike moving means, moving medians LOSE values at each end.\n\nCAS — TI-Nspire: =median(b1:b3) in a new column, fill down. ClassPad: median({list2[1],list2[2],list2[3]}) and copy down.",
      keyPoints: [
        "Moving median = median of a fixed window of consecutive values",
        "Resistant to outliers — preferred when data has spikes",
        "Usually uses an ODD window (3-point or 5-point)",
        "Can be done graphically by reading off the middle value",
        "Loses (n−1)/2 values at each end",
      ],
      workedExamples: [
        {
          problem: "Daily values: 12, 18, 15, 40, 17, 19, 16. Find the 3-point moving medians.",
          steps: [
            "Day 2: median(12,18,15) = 15",
            "Day 3: median(18,15,40) = 18",
            "Day 4: median(15,40,17) = 17",
            "Day 5: median(40,17,19) = 19",
            "Day 6: median(17,19,16) = 17",
          ],
          answer: "15, 18, 17, 19, 17 — the outlier 40 is suppressed.",
        },
      ],
      tips: [
        "Sort the three values before reading the middle one",
        "Use moving median when one or two extreme values would distort a moving mean",
      ],
      definitions: [
        { term: "Moving median", meaning: "The median of a fixed number of consecutive values, recalculated as the window moves through the series." },
        { term: "Graphical smoothing", meaning: "Visually identifying the median of consecutive plotted points and joining them to reveal the trend." },
      ],
      formulas: [
        { name: "3-point moving median at t", formula: "median(y_{t-1}, y_t, y_{t+1})" },
        { name: "5-point moving median at t", formula: "median(y_{t-2}, …, y_{t+2})" },
      ],
      examQuestion: {
        problem: "Explain why a moving median may be preferred over a moving mean.",
        solution: [
          "1 mark: states the median is resistant to outliers",
          "1 mark: explains the moving mean is distorted by extreme values",
        ],
        answer: "The median is resistant to outliers, so when extreme values are present it gives a more reliable picture of the trend than the moving mean, which is pulled towards the extremes.",
        marks: 2,
      },
      commonErrors: [
        "Computing the mean instead of the median",
        "Forgetting to sort the values first",
        "Plotting the median at the wrong time point",
      ],
      summary: [
        "Moving medians smooth data using the median of a window",
        "They are robust to outliers and can be done graphically",
        "Use an odd window length",
      ],
      practice: [
        { question: "When is a moving median preferred?", answer: "When outliers are present." },
        { question: "3-point moving median at t=2 for 4, 9, 5?", answer: "median(4,9,5) = 5." },
        { question: "Values lost from each end with a 5-point moving median?", answer: "(5−1)/2 = 2." },
      ],
      quiz: [
        { question: "Moving median is preferred because it is:", options: ["Faster", "Resistant to outliers", "More accurate always", "Easier"], correctAnswer: 1, explanation: "The median is not affected by extreme values." },
        { question: "Standard window for moving median is:", options: ["Even", "Odd", "Random", "Always 4"], correctAnswer: 1, explanation: "Odd windows let the median sit at a real time point." },
        { question: "A 3-point moving median loses how many values per end?", options: ["0", "1", "2", "3"], correctAnswer: 1, explanation: "(3−1)/2 = 1." },
      ],
    },
  ],

  // ─── 5D: Seasonal Indices ───────────────────────────────────────
  "y12g-ch5-5d-seasonal-indices": [
    {
      title: "Seasonal Indices and Deseasonalising",
      explanation:
        "A SEASONAL INDEX measures how a season compares to the average season. By construction, the seasonal indices for one full year SUM to the number of seasons (4 for quarterly, 12 for monthly) and AVERAGE 1.00.\n\nTo CALCULATE seasonal indices using the centred moving mean:\n1) Compute the centred moving mean.\n2) Ratio = actual ÷ centred mean for each time.\n3) Average the ratios for each season across years.\n4) ADJUST so the indices sum exactly to the number of seasons.\n\nUse seasonal indices to:\n• DESEASONALISE: deseasonalised = actual ÷ SI.\n• RESEASONALISE: actual estimate = trend × SI.\n\nInterpretation: SI = 1.20 means values in that season are typically 20% ABOVE the seasonal average; SI = 0.85 means 15% BELOW.\n\nCAS: build centred means and ratio columns, average ratios per season, then multiply each by (n_seasons ÷ sum) to adjust.",
      keyPoints: [
        "Seasonal indices sum to the number of seasons (4 quarterly, 12 monthly)",
        "SI > 1 → above average season; SI < 1 → below average",
        "Deseasonalised value = actual ÷ SI",
        "Reseasonalised value = trend × SI",
        "Always adjust raw indices so they sum correctly",
      ],
      workedExamples: [
        {
          problem: "Quarterly seasonal indices: SI₁=1.30, SI₂=0.80, SI₃=0.70, SI₄=1.20. Q3 actual sales are $42 000. Find the deseasonalised Q3 value and interpret SI₁ and SI₃.",
          steps: [
            "Check sum = 1.30 + 0.80 + 0.70 + 1.20 = 4.00 ✓",
            "Deseasonalise Q3: 42 000 ÷ 0.70 = $60 000",
            "SI₁ = 1.30 → Q1 typically 30% above average",
            "SI₃ = 0.70 → Q3 typically 30% below average",
          ],
          answer: "Deseasonalised Q3 = $60 000.",
        },
        {
          problem: "Q4 trend value forecast = $55 000, SI₄ = 1.20. Find the reseasonalised forecast.",
          steps: ["Reseasonalised = trend × SI", "= 55 000 × 1.20"],
          answer: "$66 000",
        },
      ],
      tips: [
        "DIVIDE to deseasonalise, MULTIPLY to reseasonalise — don't mix them up",
        "If SIs are given as percentages (e.g. 120), divide by 100 in formulas",
      ],
      definitions: [
        { term: "Seasonal index", meaning: "A number that measures the seasonal effect for a season; the SIs for one cycle average 1." },
        { term: "Deseasonalising", meaning: "Removing the seasonal component: actual ÷ seasonal index." },
        { term: "Reseasonalising", meaning: "Putting the seasonal effect back into a forecast: trend × seasonal index." },
      ],
      formulas: [
        { name: "Seasonal index", formula: "SI = mean(actual ÷ centred mean) for that season" },
        { name: "Adjustment", formula: "SI_adj = SI_raw × (n ÷ sum of raw SIs)" },
        { name: "Deseasonalise", formula: "deseasonalised = actual ÷ SI" },
        { name: "Reseasonalise", formula: "estimated actual = trend × SI" },
      ],
      examQuestion: {
        problem: "A monthly seasonal index for December is 1.45. Sales in December 2025 were $87 000. Calculate the deseasonalised December sales and interpret the SI in context.",
        solution: [
          "Deseasonalised = 87 000 ÷ 1.45 = $60 000",
          "Interpret SI = 1.45 as December sales typically 45% above the monthly average",
          "Write the answer in context (sales, December)",
        ],
        answer: "Deseasonalised December sales = $60 000. December sales are typically 45% above the average monthly sales.",
        marks: 3,
      },
      commonErrors: [
        "Multiplying when deseasonalising (must divide)",
        "Dividing when reseasonalising (must multiply)",
        "Forgetting to adjust raw indices to sum correctly",
      ],
      summary: [
        "Seasonal indices show how each season compares to the average",
        "Divide actuals by SI to deseasonalise; multiply trend by SI to reseasonalise",
        "Indices for one full cycle sum to the number of seasons",
      ],
      practice: [
        { question: "Adjusted quarterly SIs are 1.10, 0.90, 0.80, ?. Missing value?", answer: "Sum must be 4 → 1.20." },
        { question: "Actual = 240, SI = 1.20. Deseasonalised value?", answer: "240 ÷ 1.20 = 200." },
        { question: "Trend = 500, SI = 0.85. Reseasonalised forecast?", answer: "500 × 0.85 = 425." },
      ],
      quiz: [
        { question: "To deseasonalise, you:", options: ["Multiply by SI", "Divide by SI", "Add SI", "Subtract SI"], correctAnswer: 1, explanation: "Deseasonalised = actual ÷ SI." },
        { question: "Quarterly seasonal indices must sum to:", options: ["1", "4", "12", "100"], correctAnswer: 1, explanation: "One per quarter, average 1." },
        { question: "SI = 0.75 means values are typically:", options: ["75% above average", "25% below average", "75% below average", "25% above average"], correctAnswer: 1, explanation: "1 − 0.75 = 0.25 below average." },
      ],
    },
  ],

  // ─── 5E: Trend Lines & Forecasting ──────────────────────────────
  "y12g-ch5-5e-trend-forecast": [
    {
      title: "Trend Lines and Forecasting",
      explanation:
        "Once a series is DESEASONALISED, fit a least-squares regression line to the deseasonalised values against time. This line models the underlying TREND.\n\nEquation form: deseasonalised value = a + b × time, where 'time' is a time number (e.g. quarter number 1, 2, 3, …).\n\nTo FORECAST an actual future value:\n1) Substitute the future time number into the trend line for a deseasonalised forecast.\n2) RESEASONALISE by multiplying by the seasonal index for that season.\n\nForecasting beyond the data range is EXTRAPOLATION and reduces reliability — assumptions are that the trend continues and the seasonal pattern is unchanged.\n\nCAS: place time vs deseasonalised values, run Linear Regression (a+bx), substitute future time, multiply by SI.",
      keyPoints: [
        "Fit the trend line to DESEASONALISED data, not raw data",
        "Equation: deseasonalised = a + b × time",
        "Forecast = trend value × seasonal index (reseasonalise!)",
        "Forecasts far ahead are extrapolation — less reliable",
        "Slope b = average change per time unit in the deseasonalised series",
      ],
      workedExamples: [
        {
          problem: "Trend line: deseasonalised sales = 50 + 2 × quarter number. Q1 has SI = 1.30. Forecast actual Q1 sales for quarter number 21.",
          steps: [
            "Trend value = 50 + 2(21) = 92 (× $1000)",
            "Reseasonalise: 92 × 1.30 = 119.6",
            "Forecast actual Q1 sales ≈ $119 600",
            "Note: extrapolation, reliability depends on patterns continuing",
          ],
          answer: "≈ $119 600",
        },
        {
          problem: "Interpret slope b = 2 in the regression above.",
          steps: ["b is the change in deseasonalised sales per quarter"],
          answer: "On average, deseasonalised quarterly sales increase by $2 (thousand) per quarter.",
        },
      ],
      tips: [
        "Always reseasonalise after predicting — easy mark to lose",
        "When forecasting far ahead, comment on extrapolation",
      ],
      definitions: [
        { term: "Trend line", meaning: "A least-squares regression line fitted to deseasonalised data with time as the explanatory variable." },
        { term: "Forecast", meaning: "A predicted future value obtained by substituting future time into the trend line and reseasonalising." },
        { term: "Extrapolation", meaning: "Using a model to predict outside the range of the data; reduces reliability." },
      ],
      formulas: [
        { name: "Trend line", formula: "deseasonalised = a + b × time" },
        { name: "Forecast", formula: "actual forecast = (a + b × time) × SI" },
      ],
      examQuestion: {
        problem: "Trend line: revenue = 120 + 0.8 × month number (month 1 = Jan 2020). SI for August = 0.90. Forecast actual August 2026 revenue (month number 80) and comment on reliability.",
        solution: [
          "Trend value = 120 + 0.8(80) = 184",
          "Actual forecast = 184 × 0.90 = 165.6",
          "Comment: extrapolation, assumes trend and seasonal pattern continue",
        ],
        answer: "Forecast ≈ 165.6 (thousand). It is an extrapolation, so reliable only if the linear trend and seasonal pattern continue.",
        marks: 3,
      },
      commonErrors: [
        "Fitting the trend line to raw (still seasonal) data",
        "Forgetting to reseasonalise the forecast",
        "Using the wrong seasonal index for the forecast season",
      ],
      summary: [
        "Workflow: deseasonalise → fit trend line → predict trend value → reseasonalise",
        "Comment on reliability when extrapolating",
        "Slope interprets as average change per time unit in deseasonalised values",
      ],
      practice: [
        { question: "Trend = 100 + 5t. Quarter 12 has SI = 1.10. Forecast actual?", answer: "(100 + 5·12)·1.10 = 176." },
        { question: "Why deseasonalise before fitting?", answer: "So the regression captures the true trend, not the seasonal swings." },
        { question: "What does it mean to reseasonalise?", answer: "Multiply the trend forecast by the seasonal index." },
      ],
      quiz: [
        { question: "Fit the trend line to:", options: ["Raw data", "Deseasonalised data", "Smoothed median", "Seasonal indices"], correctAnswer: 1, explanation: "The trend line models the deseasonalised series." },
        { question: "After predicting the trend, the next step is:", options: ["Divide by SI", "Add SI", "Multiply by SI", "Ignore SI"], correctAnswer: 2, explanation: "Reseasonalise by multiplying by the SI." },
        { question: "Forecasting many years ahead is:", options: ["Interpolation", "Extrapolation", "Smoothing", "Centring"], correctAnswer: 1, explanation: "Beyond the data range is extrapolation." },
      ],
    },
  ],

  // ─── Chapter 5 Review ───────────────────────────────────────────
  "y12g-ch5-review": [
    {
      title: "Chapter 5 Review — Time Series",
      explanation:
        "Chapter 5 builds an end-to-end workflow for analysing a time series: identify components → smooth to expose trend → calculate seasonal indices → deseasonalise → fit a regression trend line → forecast and reseasonalise. Each step has standard VCAA wording and a CAS routine.",
      keyPoints: [
        "Components: trend, seasonal, cyclical, irregular",
        "Smoothing: moving mean (centre if even), moving median (resistant to outliers)",
        "Seasonal indices sum to number of seasons; SI > 1 above, < 1 below average",
        "Deseasonalised = actual ÷ SI; reseasonalised = trend × SI",
        "Trend line is fitted to DESEASONALISED data; forecast then reseasonalise",
      ],
      workedExamples: [
        {
          problem: "Adjusted quarterly SIs are 0.75, 1.00, 1.10, 1.15. Trend line: deseasonalised sales = 28 + 0.6 × quarter number. Forecast actual Q3 in year 3 (quarter 11).",
          steps: [
            "Trend value = 28 + 0.6(11) = 34.6",
            "SI₃ = 1.10",
            "Reseasonalise: 34.6 × 1.10 = 38.06",
          ],
          answer: "≈ $38 060",
        },
      ],
      tips: [
        "Remember the chain: smooth → SI → deseasonalise → regress → forecast → reseasonalise",
        "Indices summing to the wrong number signals an arithmetic slip",
      ],
      definitions: [
        { term: "Centred moving mean", meaning: "An even-point moving mean averaged with its neighbour to sit at a real time point." },
        { term: "Seasonal index", meaning: "A number measuring how a season compares to the average season." },
        { term: "Deseasonalised value", meaning: "An actual value with the seasonal effect removed: actual ÷ SI." },
      ],
      formulas: [
        { name: "Centred 4-point moving mean", formula: "Average of two consecutive 4-point means either side of t" },
        { name: "Seasonal index", formula: "Mean(actual ÷ centred mean) per season, adjusted to sum to n" },
        { name: "Deseasonalise", formula: "deseasonalised = actual ÷ SI" },
        { name: "Reseasonalise", formula: "actual forecast = (a + b·time) × SI" },
      ],
      examQuestion: {
        problem: "A monthly café revenue series shows an upward trend, peaks every December, and a sharp drop in March 2020 due to lockdown. (a) Identify the components present. (b) State which smoothing window you would use and why. (c) Suggest one limitation of forecasting.",
        solution: [
          "1 mark: identifies increasing trend and yearly seasonal peak in December",
          "1 mark: identifies irregular component (March 2020 drop)",
          "1 mark: 12-point centred moving mean (matches yearly seasonal period)",
          "1 mark: limitation — forecasts assume trend and seasonal pattern continue; irregular shocks cannot be predicted",
        ],
        answer: "(a) Increasing trend, yearly seasonal peak in December, irregular drop in March 2020. (b) 12-point centred moving mean. (c) Forecasts assume trend and seasonality continue and cannot account for shocks like another lockdown.",
        marks: 4,
      },
      commonErrors: [
        "Confusing seasonal with cyclical variation",
        "Forgetting to centre even-point moving means",
        "Fitting regression to raw rather than deseasonalised data",
        "Forgetting to reseasonalise the forecast",
      ],
      summary: [
        "Master the chain: components → smoothing → SI → deseasonalise → trend line → forecast → reseasonalise",
        "Use VCAA wording for each step",
        "Always check seasonal indices sum to the number of seasons",
      ],
      practice: [
        { question: "Sum of monthly seasonal indices?", answer: "12." },
        { question: "SI = 1.25, actual = 250. Deseasonalised value?", answer: "250 ÷ 1.25 = 200." },
        { question: "Trend = 480, SI = 0.90. Reseasonalised forecast?", answer: "480 × 0.90 = 432." },
        { question: "Best smoothing for data with extreme outliers?", answer: "Moving median." },
      ],
      quiz: [
        { question: "A pattern repeating every 7 days is:", options: ["Cyclical", "Seasonal", "Trend", "Irregular"], correctAnswer: 1, explanation: "Within-year repeating pattern = seasonal." },
        { question: "Adjusted quarterly SIs must sum to:", options: ["1", "4", "12", "100"], correctAnswer: 1, explanation: "Four quarters, each averaging 1." },
        { question: "Final step of forecasting:", options: ["Smooth data", "Calculate SI", "Reseasonalise", "Plot residuals"], correctAnswer: 2, explanation: "Multiply trend forecast by SI to get the actual forecast." },
        { question: "Moving median is preferred when data:", options: ["Has no trend", "Has outliers", "Is monthly", "Is short"], correctAnswer: 1, explanation: "Median is resistant to outliers." },
      ],
    },
  ],
};
