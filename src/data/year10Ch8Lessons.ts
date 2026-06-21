import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 8: Statistics & Data Analysis
export const year10Ch8Lessons: TopicLessonsMap = {
  "y10-collecting-data": [
    {
      title: "Collecting Representative Data",
      explanation:
        "OVERVIEW. The QUALITY of statistical conclusions depends on the quality of the sample. A sample is REPRESENTATIVE when each group in the population is fairly captured.\n\nSAMPLING METHODS.\n  • Simple random — every individual equally likely.\n  • Systematic — every kth individual.\n  • Stratified — random sample from each stratum proportional to size.\n  • Cluster — sample whole groups.\n  • Convenience (biased) — those easy to access.",
      keyPoints: ["Random ≠ haphazard", "Stratified preserves subgroup proportions", "Bias undermines validity"],
      workedExamples: [
        { problem: "School of 600 (300 boys, 300 girls). Stratified sample of 60 — how many of each?", steps: ["Each stratum half → 30 boys, 30 girls"], answer: "30 boys, 30 girls" },
      ],
      tips: ["Larger samples reduce sampling error."],
      commonErrors: ["Using convenience samples and treating them as random"],
      summary: ["EXAM INSIGHT: Identify the sampling method and any bias."],
      practice: [{ question: "Surveying first 50 students entering the gate is what type?", answer: "Convenience (biased)" }],
      quiz: [{ question: "Best for matching subgroup proportions:", options: ["Convenience", "Stratified", "Cluster", "Systematic"], correctAnswer: 1, explanation: "Stratified preserves proportions." }],
    },
  ],
  "y10-data-displays": [
    {
      title: "Histograms, Stem-and-Leaf and Frequency Tables",
      explanation:
        "FREQUENCY TABLE: groups data into class intervals + counts. HISTOGRAM: bar chart with no gaps, area ∝ frequency. STEM-AND-LEAF: preserves original values; tens form 'stem', units form 'leaves'.",
      keyPoints: ["Histogram for continuous data", "Stem-and-leaf retains raw values", "Bars touch (no gaps)"],
      workedExamples: [
        { problem: "Data: 23, 27, 31, 34, 38, 42. Stem-and-leaf?", steps: ["2 | 3 7", "3 | 1 4 8", "4 | 2"], answer: "as shown" },
      ],
      tips: ["Use equal class widths."],
      commonErrors: ["Drawing gaps in histogram bars"],
      summary: ["EXAM INSIGHT: Choose display based on data type."],
      practice: [{ question: "Stem 5, leaves 1 3 7. Values?", answer: "51, 53, 57" }],
      quiz: [{ question: "Histogram bars should:", options: ["Have gaps", "Touch", "Be diagonal", "Overlap"], correctAnswer: 1, explanation: "Continuous data → no gaps." }],
    },
  ],
  "y10-stat-two-way": [
    {
      title: "Two-Way Tables in Statistics",
      explanation: "Two-way tables classify data by two categorical variables. Marginal totals appear on the edges; joint counts in the body. Compute relative frequencies by dividing by row/column/grand total.",
      keyPoints: ["Marginals + joints", "Row, column, grand totals"],
      workedExamples: [
        { problem: "100 people: 60 own a phone of which 40 are smartphones; 40 do not. % phone owners with smartphones?", steps: ["40/60"], answer: "≈ 66.7%" },
      ],
      tips: ["Verify totals before drawing conclusions."],
      commonErrors: ["Confusing row vs column percentages"],
      summary: ["EXAM INSIGHT: Practise reading marginal vs conditional percentages."],
      practice: [{ question: "n(A)=30, n(B)=50, n(A∩B)=20. n(A∪B)?", answer: "60" }],
      quiz: [{ question: "Row total / grand total = …", options: ["P(row)", "P(col)", "P(joint)", "P(cond)"], correctAnswer: 0, explanation: "Marginal probability of the row." }],
    },
  ],
  "y10-summary-stats": [
    {
      title: "Mean, Median, Mode and Range",
      explanation:
        "MEAN x̄ = Σx / n.  MEDIAN = middle value when sorted.  MODE = most frequent value.  RANGE = max − min.\n\nMEAN is sensitive to outliers; MEDIAN is robust.",
      keyPoints: ["Mean = sum/n", "Sort before finding median", "Mode can be multiple or none"],
      workedExamples: [
        { problem: "Data: 4, 6, 7, 9, 14. Mean and median?", steps: ["Mean = 40/5 = 8", "Sorted middle = 7"], answer: "Mean 8, Median 7" },
      ],
      tips: ["For even n, median = average of two middle values."],
      commonErrors: ["Forgetting to sort before finding median"],
      summary: ["EXAM INSIGHT: Recognise when median is the better measure."],
      practice: [{ question: "Median of 3,5,7,9?", answer: "6" }],
      quiz: [{ question: "Best measure if outliers present:", options: ["Mean", "Median", "Range", "Mode"], correctAnswer: 1, explanation: "Median is robust." }],
    },
  ],
  "y10-box-plots": [
    {
      title: "Box-and-Whisker Plots",
      explanation:
        "Five-number summary: Min, Q1, Median, Q3, Max. IQR = Q3 − Q1. OUTLIERS: x < Q1 − 1.5·IQR or x > Q3 + 1.5·IQR.",
      keyPoints: ["5-number summary", "IQR = Q3 − Q1", "Outlier rule: 1.5·IQR"],
      workedExamples: [
        { problem: "Data: 2,4,5,6,7,8,9,10,15. Find IQR.", steps: ["Median = 7", "Q1 = 4.5, Q3 = 9.5", "IQR = 5"], answer: "5" },
      ],
      tips: ["Use small + symbol for outliers."],
      commonErrors: ["Including outliers in whiskers"],
      summary: ["EXAM INSIGHT: Box plots compare distributions cleanly."],
      practice: [{ question: "Q1=20, Q3=35. IQR?", answer: "15" }],
      quiz: [{ question: "Outlier upper bound:", options: ["Q3+IQR", "Q3+1.5·IQR", "Q3+2·IQR", "max"], correctAnswer: 1, explanation: "Standard rule." }],
    },
  ],
  "y10-time-series": [
    {
      title: "Time-Series Data: Trend and Seasonality",
      explanation: "Time-series data plots a variable over time. Patterns: TREND (long-term increase/decrease), SEASONALITY (periodic), CYCLES (longer waves), IRREGULAR (noise). Smooth using moving averages.",
      keyPoints: ["Trend + seasonality + irregular", "Moving averages smooth fluctuations"],
      workedExamples: [
        { problem: "5-month moving average for monthly sales 10,12,11,14,16: ?", steps: ["(10+12+11+14+16)/5 = 12.6"], answer: "12.6" },
      ],
      tips: ["Choose window equal to seasonal period to remove seasonality."],
      commonErrors: ["Using window too small to smooth seasonality"],
      summary: ["EXAM INSIGHT: Identify seasonality before fitting trend."],
      practice: [{ question: "3-pt moving average of 4,8,6,10,2: third point?", answer: "8" }],
      quiz: [{ question: "Long-term increase = …", options: ["Seasonality", "Trend", "Cycle", "Noise"], correctAnswer: 1, explanation: "Trend." }],
    },
  ],
  "y10-scatter-plots": [
    {
      title: "Scatter Plots and Bivariate Data",
      explanation:
        "Plot pairs (x, y) to inspect ASSOCIATION. Describe FORM (linear/non-linear), DIRECTION (positive/negative), STRENGTH (strong/moderate/weak) and OUTLIERS.",
      keyPoints: ["Form, direction, strength, outliers", "Correlation ≠ causation"],
      workedExamples: [
        { problem: "Describe a scatter plot rising tightly from lower-left to upper-right.", steps: ["Linear, positive, strong association"], answer: "Strong positive linear" },
      ],
      tips: ["Always state the four characteristics."],
      commonErrors: ["Inferring causation from correlation"],
      summary: ["EXAM INSIGHT: Describe in full sentences."],
      practice: [{ question: "Negative association means…", answer: "y decreases as x increases" }],
      quiz: [{ question: "Correlation does not imply…", options: ["Association", "Causation", "Pattern", "Trend"], correctAnswer: 1, explanation: "Correlation ≠ causation." }],
    },
  ],
  "y10-line-best-fit": [
    {
      title: "Line of Best Fit and Prediction",
      explanation:
        "A line of best fit summarises the linear trend in bivariate data: y = a + bx (b = gradient/slope, a = y-intercept). Use to PREDICT y from x. INTERPOLATION (within data) is reliable; EXTRAPOLATION (outside data) is risky.",
      keyPoints: ["y = a + bx", "Interpolation > extrapolation", "Slope = rate of change"],
      workedExamples: [
        { problem: "Line: y = 2x + 3. Predict y when x=5.", steps: ["y = 2·5+3"], answer: "13" },
      ],
      tips: ["State units when interpreting slope."],
      commonErrors: ["Extrapolating far beyond data"],
      summary: ["EXAM INSIGHT: State 'interpolation' or 'extrapolation' for predictions."],
      practice: [{ question: "Line y = 0.5x + 4. Slope?", answer: "0.5" }],
      quiz: [{ question: "Predicting outside data is called:", options: ["Interpolation", "Extrapolation", "Regression", "Mean"], correctAnswer: 1, explanation: "Extrapolation." }],
    },
  ],
  "y10-standard-deviation": [
    {
      title: "Standard Deviation",
      explanation:
        "SD measures spread around the mean. Use calculator's σ button (population) or s (sample). Roughly: SD ≈ average distance from mean.\n\n68-95-99.7 rule (approximately normal data): about 68% of data within 1 SD of mean, 95% within 2 SD, 99.7% within 3 SD.",
      keyPoints: ["Spread around mean", "Normal data: 68/95/99.7%"],
      workedExamples: [
        { problem: "Mean=50, SD=5, normal. 68% of data lies in?", steps: ["50 ± 5"], answer: "[45, 55]" },
      ],
      tips: ["Use calculator stats mode for SD."],
      commonErrors: ["Confusing variance and SD"],
      summary: ["EXAM INSIGHT: 68-95-99.7 is exam-standard."],
      practice: [{ question: "Mean=100, SD=10. 95% interval?", answer: "[80, 120]" }],
      quiz: [{ question: "Within 2 SDs of mean: ~?", options: ["50%", "68%", "95%", "99.7%"], correctAnswer: 2, explanation: "Empirical rule." }],
    },
  ],
  "y10-cumulative-frequency": [
    {
      title: "Cumulative Frequency and Ogives",
      explanation:
        "Cumulative frequency = running total of frequencies. Plot cumulative frequency vs upper class boundary to get an OGIVE (S-shaped curve). Use the ogive to read the median (50%), Q1 (25%), Q3 (75%) and percentiles.",
      keyPoints: ["Running total", "Plot at UPPER boundary", "Read percentiles from curve"],
      workedExamples: [
        { problem: "Frequencies 5,8,7,4. Cumulative?", steps: ["5, 13, 20, 24"], answer: "5, 13, 20, 24" },
      ],
      tips: ["Smooth curve through points, not straight lines."],
      commonErrors: ["Plotting at the midpoint instead of upper boundary"],
      summary: ["EXAM INSIGHT: Ogives are useful for reading any percentile."],
      practice: [{ question: "Cumulative of 3,5,2,4 ?", answer: "3,8,10,14" }],
      quiz: [{ question: "Median is found at what % on ogive?", options: ["25", "50", "75", "100"], correctAnswer: 1, explanation: "Median is the 50th percentile." }],
    },
  ],
  "y10-percentiles": [
    {
      title: "Percentiles and Quartiles",
      explanation:
        "The kth percentile is the value below which k% of the data falls. Q1 = 25th, Q2 = 50th (median), Q3 = 75th. Find from sorted data or ogive.",
      keyPoints: ["Quartiles split data into quarters", "Read from sorted data or ogive"],
      workedExamples: [
        { problem: "20 sorted values. Position of 80th percentile?", steps: ["20·0.8 = 16th"], answer: "16th value" },
      ],
      tips: ["Different conventions exist for percentile interpolation."],
      commonErrors: ["Using unsorted data"],
      summary: ["EXAM INSIGHT: Percentile = location-based summary."],
      practice: [{ question: "Q3 in data of 50 sorted values is at position…", answer: "37.5 (interpolate between 37th and 38th)" }],
      quiz: [{ question: "Median = which percentile?", options: ["25", "50", "75", "90"], correctAnswer: 1, explanation: "Median is the 50th percentile." }],
    },
  ],
};
