import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 1: Investigating Data Distributions (VCE Unit 3)
// Each subtopic ships as a single comprehensive lesson with full VCE-style content.

export const year12GeneralCh1Lessons: TopicLessonsMap = {
  // ─── 1A: Types of Data ─────────────────────────────────────────────
  "y12g-ch1-1a-types-of-data": [
    {
      title: "Types of Data",
      explanation:
        "In statistics every variable we measure produces data, and the type of data decides which graph, summary statistic, and analysis we can use.\n\nData is first split into categorical (groups or labels) and numerical (counts or measurements). Categorical data is then split into nominal (no natural order, e.g. eye colour) and ordinal (a clear order, e.g. T-shirt size: S, M, L). Numerical data is split into discrete (counted, only certain values, e.g. number of siblings) and continuous (measured, any value in a range, e.g. height in cm).\n\nGetting this classification right is the first thing examiners check, because it determines whether you draw a bar chart or a histogram, and whether you talk about a mode or a mean.",
      keyPoints: [
        "Categorical = labels/groups; Numerical = numbers you can do arithmetic with",
        "Categorical splits into Nominal (no order) and Ordinal (ordered)",
        "Numerical splits into Discrete (counted) and Continuous (measured)",
        "Postcodes and phone numbers are categorical even though they look numeric",
        "The data type controls the graph and summary statistics you may use",
      ],
      definitions: [
        { term: "Categorical variable", meaning: "A variable whose values are labels placing each unit into a group or category." },
        { term: "Numerical variable", meaning: "A variable whose values are numbers for which arithmetic operations are meaningful." },
        { term: "Nominal data", meaning: "Categorical data with no natural order (e.g. blood type, suburb)." },
        { term: "Ordinal data", meaning: "Categorical data with a natural order but no fixed gap between categories (e.g. survey ratings 1–5)." },
        { term: "Discrete numerical data", meaning: "Numerical data that can only take separated values, usually whole numbers obtained by counting." },
        { term: "Continuous numerical data", meaning: "Numerical data that can take any value in an interval, obtained by measurement." },
      ],
      workedExamples: [
        {
          problem: "Classify each variable: (i) Hair colour (ii) Number of pets (iii) Time taken to run 100 m (iv) Star rating of a movie (1–5).",
          steps: [
            "Hair colour — labels with no order → categorical, nominal.",
            "Number of pets — a count with whole-number values → numerical, discrete.",
            "Time taken to run 100 m — measured, can be 12.34 s → numerical, continuous.",
            "Star rating 1–5 — labels with order, fixed categories → categorical, ordinal.",
          ],
          answer: "Nominal, Discrete, Continuous, Ordinal",
        },
        {
          problem: "A survey records postcodes of respondents. Why is postcode treated as categorical even though it is written as a number?",
          steps: [
            "A postcode is used as a label for an area, not for arithmetic.",
            "It does not make sense to add or average postcodes.",
            "Therefore postcode is categorical (nominal).",
          ],
          answer: "Postcode is categorical (nominal) — the digits are a label, not a measurement.",
        },
      ],
      tips: [
        "Ask yourself: ‘Does it make sense to add or average these values?’ If no → categorical.",
        "Ordinal data can be ranked but the gap between categories is not fixed, so don’t treat it as numerical.",
        "Continuous values are always rounded when recorded, but the underlying variable is still continuous.",
      ],
      formulas: [],
      examQuestion: {
        problem:
          "A school records the following information for each Year 12 student: house colour, number of subjects taken, height (cm), and self-rated stress level (Low/Medium/High). Classify each variable as categorical (nominal/ordinal) or numerical (discrete/continuous). (4 marks)",
        solution: [
          "House colour: labels, no order → categorical, nominal.",
          "Number of subjects: counted whole number → numerical, discrete.",
          "Height (cm): measured on a continuous scale → numerical, continuous.",
          "Stress level Low/Medium/High: ordered labels → categorical, ordinal.",
        ],
        answer: "Nominal, discrete, continuous, ordinal (1 mark each).",
        marks: 4,
      },
      commonErrors: [
        "Calling postcodes or phone numbers numerical because they contain digits.",
        "Treating ordinal data as numerical and computing a ‘mean’ rating.",
        "Confusing discrete and continuous: shoe size is discrete (only certain values), not continuous.",
        "Forgetting to specify the sub-type (nominal/ordinal or discrete/continuous) when asked.",
      ],
      summary: [
        "Categorical → labels (nominal or ordinal).",
        "Numerical → numbers (discrete = counted, continuous = measured).",
        "Choose graph and statistic based on data type.",
        "Always state the sub-type in exam responses.",
      ],
      practice: [
        { question: "Classify ‘blood pressure (mmHg)’.", answer: "Numerical, continuous." },
        { question: "Classify ‘favourite social media platform’.", answer: "Categorical, nominal." },
        { question: "Classify ‘number of cars in a household’.", answer: "Numerical, discrete." },
        { question: "Classify ‘education level (primary, secondary, tertiary)’.", answer: "Categorical, ordinal." },
        { question: "Why is ‘year level (7–12)’ usually treated as ordinal categorical even though it is numeric?", answer: "It is a label for the cohort with a clear order, but arithmetic on year levels is not meaningful." },
      ],
      quiz: [
        {
          question: "Which is an example of ordinal categorical data?",
          options: ["Eye colour", "Shirt size (S/M/L)", "Number of children", "Mass in kg"],
          correctAnswer: 1,
          explanation: "Shirt size has labels with a clear order but no fixed numerical gap.",
        },
        {
          question: "‘Time taken to complete a task (seconds)’ is best described as:",
          options: ["Categorical nominal", "Categorical ordinal", "Numerical discrete", "Numerical continuous"],
          correctAnswer: 3,
          explanation: "Time is measured on a continuous scale.",
        },
        {
          question: "Postcodes recorded for survey respondents should be treated as:",
          options: ["Numerical discrete", "Numerical continuous", "Categorical nominal", "Categorical ordinal"],
          correctAnswer: 2,
          explanation: "Postcodes label areas; arithmetic on them is meaningless.",
        },
        {
          question: "Which variable is numerical discrete?",
          options: ["Height (cm)", "Mass (kg)", "Number of goals scored", "Brand of phone"],
          correctAnswer: 2,
          explanation: "Goals scored is counted in whole numbers.",
        },
      ],
    },
  ],

  // ─── 1B: Displaying & Describing Categorical Variables ─────────────
  "y12g-ch1-1b-categorical-display": [
    {
      title: "Displaying & Describing Categorical Variables",
      explanation:
        "Categorical data is summarised with a frequency table and displayed with a bar chart, segmented bar chart, or percentage segmented bar chart.\n\nA frequency table lists each category with its count and (usually) its percentage. A bar chart uses bars of equal width with gaps between them to compare category counts or percentages. A segmented bar chart stacks the categories within a single bar to show the parts of a whole.\n\nWhen describing the distribution we report: the variable, the most common (modal) category, and any noteworthy categories with their percentages.",
      keyPoints: [
        "Use bar charts (with gaps) for categorical data, NOT histograms",
        "Convert counts to percentages with: percentage = (frequency / total) × 100",
        "Always label axes and include a title",
        "Describe the distribution: variable, mode, key percentages",
        "Round percentages to 1 decimal place unless told otherwise",
      ],
      definitions: [
        { term: "Frequency", meaning: "The number of times a value or category occurs." },
        { term: "Relative frequency", meaning: "Frequency divided by the total — often expressed as a percentage." },
        { term: "Modal category", meaning: "The category with the highest frequency." },
        { term: "Segmented bar chart", meaning: "A single bar (often scaled to 100%) divided into segments showing each category’s share." },
      ],
      formulas: [
        { name: "Percentage from frequency", formula: "% = (frequency ÷ total) × 100", note: "Apply to each category to get a percentage frequency table." },
      ],
      workedExamples: [
        {
          problem:
            "120 students were asked their main mode of transport to school. Results: Car 48, Bus 36, Walk 24, Bike 12. Construct a percentage frequency table and identify the modal category.",
          steps: [
            "Total = 48 + 36 + 24 + 12 = 120.",
            "Car: 48/120 × 100 = 40.0%.",
            "Bus: 36/120 × 100 = 30.0%.",
            "Walk: 24/120 × 100 = 20.0%.",
            "Bike: 12/120 × 100 = 10.0%.",
            "Highest frequency is Car → modal category.",
          ],
          answer: "Car 40%, Bus 30%, Walk 20%, Bike 10%. Modal category: Car.",
        },
      ],
      tips: [
        "Percentages in your table should add to 100% (allow ±0.1% for rounding).",
        "On a bar chart, leave gaps between bars to make it clear the variable is categorical.",
        "When describing a distribution, quote actual percentages, not just ‘most’ or ‘least’.",
      ],
      examQuestion: {
        problem:
          "The table shows the favourite sport of 200 students: Football 80, Netball 50, Basketball 40, Other 30. (a) Convert to percentages. (b) Write a sentence describing the distribution. (3 marks)",
        solution: [
          "(a) Football 80/200 = 40%, Netball 50/200 = 25%, Basketball 40/200 = 20%, Other 30/200 = 15%.",
          "(b) Football is the modal category (40%); the next most popular is Netball (25%).",
          "Make sure your sentence names the variable, the mode, and gives at least one percentage.",
        ],
        answer:
          "Football 40%, Netball 25%, Basketball 20%, Other 15%. Football is the modal favourite sport (40%), followed by Netball (25%).",
        marks: 3,
      },
      commonErrors: [
        "Drawing a histogram (no gaps) instead of a bar chart for categorical data.",
        "Forgetting to convert frequencies to percentages when the question asks for a percentage table.",
        "Describing the distribution without quoting any percentages.",
        "Mislabelling the vertical axis (it should say ‘Frequency’ or ‘Percentage’).",
      ],
      summary: [
        "Categorical data → frequency table + bar chart.",
        "% = (frequency ÷ total) × 100.",
        "Identify and report the modal category with its percentage.",
        "Use gaps between bars; never a histogram.",
      ],
      practice: [
        { question: "30 of 200 people prefer tea. What percentage is that?", answer: "15%" },
        { question: "Bar charts and histograms differ in what visible way?", answer: "Bar charts have gaps between bars; histograms do not." },
        { question: "If the modal category is ‘Bus’ at 35%, what does that tell you?", answer: "Bus is the most common category and is chosen by 35% of respondents." },
        { question: "Why use percentages instead of raw frequencies when comparing two groups of different sizes?", answer: "Percentages standardise for total, allowing fair comparison." },
      ],
      quiz: [
        {
          question: "A frequency table shows 45 of 150 people prefer brand A. The percentage is:",
          options: ["3%", "30%", "45%", "67%"],
          correctAnswer: 1,
          explanation: "45/150 × 100 = 30%.",
        },
        {
          question: "Which display is best for a categorical variable with 5 categories?",
          options: ["Histogram", "Bar chart", "Boxplot", "Stem-and-leaf plot"],
          correctAnswer: 1,
          explanation: "Bar charts (with gaps) are used for categorical variables.",
        },
        {
          question: "The ‘modal category’ is:",
          options: ["The mean of the data", "The smallest category", "The category with highest frequency", "The middle category"],
          correctAnswer: 2,
          explanation: "Mode = most frequent.",
        },
      ],
    },
  ],

  // ─── 1C: Displaying & Describing Numerical Data (Histograms) ───────
  "y12g-ch1-1c-numerical-display": [
    {
      title: "Displaying & Describing Numerical Data",
      explanation:
        "Numerical data is grouped into class intervals of equal width and displayed in a histogram. The bars touch (no gaps) because the variable is continuous (or treated as continuous).\n\nWhen describing a histogram we report SOCS:\n• Shape — symmetric, positively skewed (tail to the right) or negatively skewed (tail to the left)\n• Outliers — any values that look isolated from the rest\n• Centre — the middle of the distribution (approximate median or mean)\n• Spread — the range or interquartile range\n\nA frequency histogram has frequency on the vertical axis; a percentage frequency histogram uses percentages, which is useful when comparing two distributions of different total sizes.",
      keyPoints: [
        "Histogram bars touch — used for numerical data only",
        "Always describe Shape, Outliers, Centre, Spread (SOCS)",
        "Choose ~5–15 class intervals of equal width",
        "Positive skew = tail to the right; Negative skew = tail to the left",
        "Use percentage histograms to compare groups of different sizes",
      ],
      definitions: [
        { term: "Class interval", meaning: "A range of values used to group continuous data, e.g. 10–<20." },
        { term: "Frequency", meaning: "The number of data values that fall in a class interval." },
        { term: "Symmetric distribution", meaning: "A distribution where the left and right halves are roughly mirror images." },
        { term: "Positively skewed", meaning: "A distribution with a longer tail on the right (large values)." },
        { term: "Negatively skewed", meaning: "A distribution with a longer tail on the left (small values)." },
      ],
      formulas: [
        { name: "Class width", formula: "width = (max − min) ÷ number of classes", note: "Round up to a convenient number." },
        { name: "Percentage frequency", formula: "% freq = (frequency ÷ total) × 100" },
      ],
      workedExamples: [
        {
          problem:
            "The reaction times (in ms) of 40 students range from 180 to 360. Choose a sensible number of intervals and class width.",
          steps: [
            "Range = 360 − 180 = 180.",
            "Choose ~9 intervals → width = 180 ÷ 9 = 20.",
            "Use intervals 180–<200, 200–<220, …, 340–<360.",
          ],
          answer: "9 intervals of width 20, starting at 180.",
        },
        {
          problem:
            "A histogram of incomes shows most bars on the left, with a long tail to the right. Describe the shape and what statistic best represents the centre.",
          steps: [
            "Tail on the right → positively skewed.",
            "Mean is pulled toward the tail; median is more representative.",
            "Use the median as the measure of centre.",
          ],
          answer: "Positively skewed; report the median as the centre.",
        },
      ],
      tips: [
        "If the question gives raw data, decide on equal-width class intervals before drawing.",
        "When describing, always state the variable in context (‘the distribution of reaction times is …’).",
        "If the shape is skewed, comment on direction of skew and any outliers.",
        "TI-Nspire CAS — histogram: Add Lists & Spreadsheet → enter data in column A, name it (e.g. data) → Add Data & Statistics → click x-axis → choose data → menu → Plot Type → Histogram. Adjust bin width via menu → Plot Properties → Histogram Properties → Bin Settings.",
        "Casio ClassPad — histogram: Statistics app → enter values in list1 → tap SetGraph → Setting → Type: Histogram, XList: list1, Freq: 1 → tap Graph icon → set HStart and HStep when prompted.",
      ],
      examQuestion: {
        problem:
          "A histogram displays the distribution of weekly study hours for 60 students. The bars are highest near 10–15 hours, with a long tail extending to 35 hours. Describe the distribution in terms of shape, centre, spread and outliers. (4 marks)",
        solution: [
          "Shape: positively skewed (long tail to the right).",
          "Centre: approximately 12–13 hours (peak class).",
          "Spread: from about 0 to 35 hours, so range ≈ 35 hours.",
          "Outliers: the values near 35 hours appear isolated and may be outliers.",
        ],
        answer:
          "Positively skewed distribution of weekly study hours, centred around 12–13 hours, with a range of about 35 hours and possible outliers near the upper end.",
        marks: 4,
      },
      commonErrors: [
        "Leaving gaps between bars on a histogram.",
        "Using unequal class widths and treating frequencies as comparable.",
        "Describing only the shape and forgetting centre/spread/outliers.",
        "Mixing up positive and negative skew (positive = tail on the RIGHT).",
      ],
      summary: [
        "Histogram = numerical data, bars touch.",
        "Describe with SOCS: Shape, Outliers, Centre, Spread.",
        "Skewed right = positive; skewed left = negative.",
        "For skewed data, use the median for centre.",
      ],
      practice: [
        { question: "Data ranges from 12 to 84; you want about 8 classes. Suggest a class width.", answer: "(84−12)/8 = 9 → use width 10 for convenience." },
        { question: "Tail on the LEFT means the distribution is …", answer: "negatively skewed." },
        { question: "Why use a percentage histogram when comparing two groups?", answer: "Different totals are standardised, so the shapes can be compared fairly." },
        { question: "What four features should every histogram description mention?", answer: "Shape, outliers, centre, spread." },
      ],
      quiz: [
        {
          question: "A histogram with a long tail to the right is:",
          options: ["Symmetric", "Positively skewed", "Negatively skewed", "Bimodal"],
          correctAnswer: 1,
          explanation: "Tail on the right = positive skew.",
        },
        {
          question: "Which display is appropriate for continuous numerical data?",
          options: ["Bar chart", "Histogram", "Pie chart", "Segmented bar chart"],
          correctAnswer: 1,
          explanation: "Histograms are for grouped numerical data.",
        },
        {
          question: "When data is skewed, the better measure of centre is the:",
          options: ["Mean", "Mode", "Median", "Range"],
          correctAnswer: 2,
          explanation: "Median is robust to skew and outliers.",
        },
      ],
    },
  ],

  // ─── 1D: Dot Plots & Stem Plots ────────────────────────────────────
  "y12g-ch1-1d-dot-stem-plots": [
    {
      title: "Dot Plots & Stem-and-Leaf Plots",
      explanation:
        "Dot plots and stem-and-leaf plots are simple displays for small to medium data sets that keep the original values visible.\n\nA dot plot places one dot above each value on a number line. A stem-and-leaf plot splits each value into a ‘stem’ (the leading digits) and a ‘leaf’ (the final digit). Leaves are written in increasing order along each stem and a key is always included (e.g. ‘2 | 3 means 23’).\n\nBoth displays make shape, clusters, gaps, and outliers easy to spot, and they preserve the raw data so you can read off the median directly.",
      keyPoints: [
        "Dot plots: one dot per value above a number line",
        "Stem-and-leaf: stem = leading digits, leaf = last digit, ordered",
        "Always include a key on a stem plot",
        "Both displays preserve the raw data (good for finding median/mode)",
        "Best for small to medium data sets (≈10–60 values)",
      ],
      definitions: [
        { term: "Dot plot", meaning: "A display where each data value is shown as a dot above its position on a number line." },
        { term: "Stem", meaning: "The leading digit(s) of each value in a stem-and-leaf plot." },
        { term: "Leaf", meaning: "The trailing digit of each value in a stem-and-leaf plot." },
        { term: "Back-to-back stem plot", meaning: "Two distributions sharing a central stem, with leaves extending left and right for comparison." },
      ],
      formulas: [],
      workedExamples: [
        {
          problem:
            "Construct an ordered stem-and-leaf plot for these test scores: 23, 31, 25, 47, 38, 22, 36, 41, 29, 33.",
          steps: [
            "Stems are the tens digit: 2, 3, 4.",
            "Sort the values: 22, 23, 25, 29, 31, 33, 36, 38, 41, 47.",
            "2 | 2 3 5 9",
            "3 | 1 3 6 8",
            "4 | 1 7",
            "Key: 2 | 2 means 22.",
          ],
          answer: "Stem-and-leaf plot as above with key ‘2 | 2 means 22’.",
        },
        {
          problem: "From the dot plot: 2 dots at 5, 5 dots at 6, 3 dots at 7, 1 dot at 9. Find the median and mode.",
          steps: [
            "Total = 2 + 5 + 3 + 1 = 11 values, so median is the 6th when ordered.",
            "Ordered: 5,5,6,6,6,6,6,7,7,7,9 → 6th value = 6.",
            "Most frequent value = 6 → mode = 6.",
          ],
          answer: "Median = 6, Mode = 6.",
        },
      ],
      tips: [
        "Order the leaves; an unordered stem plot will lose marks.",
        "A key is compulsory: ‘3 | 4 means 34’.",
        "Use a back-to-back stem plot to compare two groups quickly.",
      ],
      examQuestion: {
        problem:
          "The following data show resting heart rates (bpm) for 12 people: 62, 70, 58, 75, 68, 72, 64, 80, 66, 59, 74, 68. (a) Construct an ordered stem-and-leaf plot. (b) State the median. (3 marks)",
        solution: [
          "Sort: 58, 59, 62, 64, 66, 68, 68, 70, 72, 74, 75, 80.",
          "Stems 5, 6, 7, 8: 5 | 8 9 ; 6 | 2 4 6 8 8 ; 7 | 0 2 4 5 ; 8 | 0. Key: 5 | 8 means 58.",
          "n = 12 → median = average of 6th and 7th values = (68 + 68)/2 = 68.",
        ],
        answer: "Stem plot as shown; median = 68 bpm.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting the key on a stem-and-leaf plot.",
        "Leaving leaves unordered.",
        "Splitting into stem/leaf incorrectly when values have different numbers of digits.",
        "Confusing dot plot with bar chart — dots must be aligned to a number line.",
      ],
      summary: [
        "Dot plot: dots on a number line.",
        "Stem-and-leaf: ordered leaves + key.",
        "Both preserve raw data — useful for finding median and mode.",
        "Use back-to-back stem plots to compare two groups.",
      ],
      practice: [
        { question: "What is the key for the stem plot ‘1 | 4 5 7’ if these represent the values 14, 15, 17?", answer: "1 | 4 means 14." },
        { question: "When are dot plots most useful?", answer: "For small data sets where you want to see every individual value." },
        { question: "How would 105 be split in a stem-and-leaf plot using 2-digit stems?", answer: "Stem 10, leaf 5." },
        { question: "Which display lets you compare two groups on the same axis?", answer: "Back-to-back stem-and-leaf plot." },
      ],
      quiz: [
        {
          question: "In the stem plot ‘4 | 2 5 7’, the data values are:",
          options: ["4, 2, 5, 7", "42, 45, 47", "425, 427", "4.2, 4.5, 4.7"],
          correctAnswer: 1,
          explanation: "Stem 4 with leaves 2, 5, 7 → 42, 45, 47.",
        },
        {
          question: "A stem-and-leaf plot must always include:",
          options: ["A title only", "A key", "A scale on both axes", "Equal class widths"],
          correctAnswer: 1,
          explanation: "A key is required so the reader can decode the values.",
        },
        {
          question: "Dot plots are most appropriate for:",
          options: ["Large data sets", "Categorical data", "Small numerical data sets", "Time series only"],
          correctAnswer: 2,
          explanation: "Dot plots become messy with large data sets.",
        },
      ],
    },
  ],

  // ─── 1E: Logarithmic (Base 10) Scale ──────────────────────────────
  "y12g-ch1-1e-log-scale": [
    {
      title: "Logarithmic (Base 10) Scale",
      explanation:
        "When data spans many orders of magnitude (e.g. populations of countries, salaries, earthquake energies) a normal scale crowds small values together and lets a few large values dominate. A log₁₀ scale spaces the values by their power of ten so the distribution becomes much easier to read.\n\nOn a log₁₀ scale, equal distances correspond to equal multiplicative changes: every 1 unit increase means ×10. So log(1) = 0, log(10) = 1, log(100) = 2, log(1000) = 3 …\n\nWhen describing a log-scaled histogram, talk about the original variable but use log values to compare. Convert back with x = 10^(log value) when asked for the original.",
      keyPoints: [
        "log₁₀(1) = 0, log₁₀(10) = 1, log₁₀(100) = 2, log₁₀(1000) = 3",
        "Each unit on a log scale = multiplied by 10",
        "Use log scale when data spans several orders of magnitude",
        "Convert back: x = 10^(log x)",
        "Log scale tames positive skew so the distribution becomes more symmetric",
      ],
      definitions: [
        { term: "Logarithm (base 10)", meaning: "The power that 10 must be raised to in order to give a number x: log₁₀(x) = y means 10^y = x." },
        { term: "Order of magnitude", meaning: "A factor of 10. Two numbers differ by one order of magnitude when one is 10 times the other." },
      ],
      formulas: [
        { name: "Log to value", formula: "x = 10^(log₁₀ x)" },
        { name: "Value to log", formula: "log₁₀ x = log of x base 10", note: "Use the LOG button on a calculator." },
      ],
      workedExamples: [
        {
          problem: "Find log₁₀ of: 1, 10, 100, 1000, 50.",
          steps: [
            "log 1 = 0",
            "log 10 = 1",
            "log 100 = 2",
            "log 1000 = 3",
            "log 50 = 1.699 (calculator).",
          ],
          answer: "0, 1, 2, 3, 1.699",
        },
        {
          problem: "A histogram on a log₁₀ scale shows a class centred at log value 4.2. What is the approximate original value?",
          steps: [
            "x = 10^4.2.",
            "10^4 = 10 000; 10^0.2 ≈ 1.585.",
            "x ≈ 10 000 × 1.585 ≈ 15 850.",
          ],
          answer: "Approximately 15 850.",
        },
      ],
      tips: [
        "If a distribution is strongly positively skewed, try a log scale to make it more symmetric.",
        "Always interpret in terms of the original variable and units.",
        "Remember log of 0 or negative numbers is undefined — log scales are only for positive data.",
      ],
      examQuestion: {
        problem:
          "The populations of 100 cities range from 5 000 to 25 000 000. (a) Why is a log₁₀ scale appropriate? (b) Convert a city of population 250 000 to its log value. (3 marks)",
        solution: [
          "(a) Population spans about 4 orders of magnitude (10³ to 10⁷); a linear scale would compress smaller cities and over-emphasise larger ones.",
          "(b) log₁₀(250 000) = log(2.5 × 10⁵) = log 2.5 + 5 ≈ 0.398 + 5 = 5.398.",
          "State value to 3 decimal places.",
        ],
        answer: "(a) Data spans many orders of magnitude. (b) log₁₀(250 000) ≈ 5.398.",
        marks: 3,
      },
      commonErrors: [
        "Trying to take log of 0 or a negative value.",
        "Forgetting to convert back when the question asks for the original value.",
        "Using ln (natural log) instead of log₁₀.",
        "Treating equal log distances as equal additive differences (they’re multiplicative).",
      ],
      summary: [
        "Log₁₀ scale spaces values by their power of 10.",
        "Each unit change = ×10 of the original.",
        "Useful for positively skewed data spanning several orders of magnitude.",
        "Convert back with x = 10^(log x).",
      ],
      practice: [
        { question: "log₁₀(10000) = ?", answer: "4" },
        { question: "Convert log value 2.7 back to the original.", answer: "10^2.7 ≈ 501.2" },
        { question: "Why can’t we apply a log scale to data with zeros or negatives?", answer: "Log of 0 or a negative number is undefined." },
        { question: "Sketch idea: what happens to a positively skewed distribution after log transformation?", answer: "It typically becomes more symmetric." },
      ],
      quiz: [
        {
          question: "log₁₀(1000) equals:",
          options: ["1", "2", "3", "10"],
          correctAnswer: 2,
          explanation: "10^3 = 1000.",
        },
        {
          question: "A log value of 5 corresponds to an original value of:",
          options: ["5", "50", "10 000", "100 000"],
          correctAnswer: 3,
          explanation: "10^5 = 100 000.",
        },
        {
          question: "A log scale is most useful when data:",
          options: ["Spans only one order of magnitude", "Spans many orders of magnitude", "Is categorical", "Is symmetric already"],
          correctAnswer: 1,
          explanation: "Log scales handle large variation.",
        },
      ],
    },
  ],

  // ─── 1F: Measures of Centre & Spread ──────────────────────────────
  "y12g-ch1-1f-centre-spread": [
    {
      title: "Measures of Centre & Spread",
      explanation:
        "Numerical data is summarised with a measure of centre and a measure of spread. The choice depends on the shape of the distribution.\n\nFor symmetric data with no outliers we use the mean and standard deviation. For skewed data or data with outliers we use the median and interquartile range (IQR) because they are not pulled around by extreme values.\n\nCentre: mean (x̄) = sum ÷ n; median = middle value when ordered.\nSpread: range = max − min; IQR = Q₃ − Q₁; standard deviation (s) measures average distance from the mean.",
      keyPoints: [
        "Symmetric, no outliers → mean and standard deviation",
        "Skewed or outliers → median and IQR",
        "Mean is sensitive to outliers; median is resistant",
        "Range = max − min; IQR = Q₃ − Q₁",
        "Standard deviation: roughly the typical distance from the mean",
      ],
      definitions: [
        { term: "Mean (x̄)", meaning: "The sum of all values divided by the number of values." },
        { term: "Median", meaning: "The middle value when data is arranged in order; if n is even, it is the average of the two middle values." },
        { term: "Range", meaning: "The difference between the largest and smallest values." },
        { term: "Interquartile range (IQR)", meaning: "Q₃ − Q₁; the range of the middle 50% of the data." },
        { term: "Standard deviation (s)", meaning: "A measure of how spread out the data is around the mean." },
      ],
      formulas: [
        { name: "Mean", formula: "x̄ = (Σx) ÷ n" },
        { name: "Range", formula: "Range = max − min" },
        { name: "Interquartile range", formula: "IQR = Q₃ − Q₁" },
        { name: "Sample standard deviation", formula: "s = √[ Σ(x − x̄)² ÷ (n − 1) ]", note: "Use the calculator’s 1-Var Stats; quoted as Sx." },
      ],
      workedExamples: [
        {
          problem: "Find the mean, median, range, IQR, and standard deviation of: 4, 7, 8, 10, 12, 15, 18.",
          steps: [
            "n = 7. Mean = (4+7+8+10+12+15+18)/7 = 74/7 ≈ 10.57.",
            "Median = 4th value = 10.",
            "Range = 18 − 4 = 14.",
            "Q₁ = median of lower half (4,7,8) = 7. Q₃ = median of upper half (12,15,18) = 15. IQR = 15 − 7 = 8.",
            "Calculator 1-Var: s ≈ 4.83.",
          ],
          answer: "Mean ≈ 10.57, Median = 10, Range = 14, IQR = 8, s ≈ 4.83.",
        },
        {
          problem: "A dataset has values mostly between 10 and 30, plus one value of 200. Which centre and spread should you report?",
          steps: [
            "200 is an extreme value → distribution likely skewed/outlier.",
            "Mean and standard deviation will be inflated.",
            "Use median and IQR.",
          ],
          answer: "Use the median and IQR.",
        },
      ],
      tips: [
        "When n is odd, median is a single middle value; when n is even, average the two middle values.",
        "For Q₁ and Q₃: split the data at the median, take the median of each half.",
        "Always pair like-with-like: mean with standard deviation, median with IQR.",
        "TI-Nspire CAS — 1-Var Stats: Lists & Spreadsheet → enter data in column A and name it (e.g. data) → menu → Statistics → Stat Calculations → One-Variable Statistics → X1 List: data → OK. Read x̄ (mean), Sx (sample sd), Med, Q1X, Q3X, MinX, MaxX.",
        "Casio ClassPad — 1-Var Stats: Statistics app → enter values in list1 → Calc → One-Variable → XList: list1, Freq: 1 → OK. Read x̄, sx (sample sd), Med, Q1, Q3, minX, maxX.",
        "Always quote Sx (sample standard deviation), not σx, in VCE General.",
      ],
      examQuestion: {
        problem:
          "The five-number summary of a dataset is min = 12, Q₁ = 18, median = 22, Q₃ = 27, max = 95. (a) State the IQR. (b) Recommend an appropriate measure of centre and justify briefly. (3 marks)",
        solution: [
          "(a) IQR = Q₃ − Q₁ = 27 − 18 = 9.",
          "(b) Max = 95 is far above Q₃ = 27 (Q₃ + 1.5×IQR = 40.5), so 95 is an outlier.",
          "Outlier present → use the median (22) as the centre because the mean would be inflated.",
        ],
        answer: "IQR = 9; report the median (22) as centre due to the outlier at 95.",
        marks: 3,
      },
      commonErrors: [
        "Pairing the mean with IQR or the median with standard deviation.",
        "Using the mean when the data is skewed or contains outliers.",
        "Forgetting that for even n the median is the average of the two middle values.",
        "Using sample s when asked for population σ (or vice versa) — VCE General typically uses s.",
      ],
      summary: [
        "Mean + standard deviation for symmetric data without outliers.",
        "Median + IQR for skewed data or with outliers.",
        "IQR = Q₃ − Q₁; Range = max − min.",
        "Use a CAS/scientific calculator for s in 1-Var Stats.",
      ],
      practice: [
        { question: "Compute the median of 3, 5, 8, 9, 12, 14.", answer: "(8 + 9)/2 = 8.5" },
        { question: "Why is the median preferred for income data?", answer: "Income is positively skewed and has high outliers, which inflate the mean." },
        { question: "If IQR = 10 and Q₁ = 25, find Q₃.", answer: "Q₃ = Q₁ + IQR = 35" },
        { question: "What does standard deviation roughly measure?", answer: "The typical distance of a data value from the mean." },
      ],
      quiz: [
        {
          question: "Which pair of statistics best describes a strongly positively skewed distribution?",
          options: ["Mean and range", "Mean and standard deviation", "Median and IQR", "Mode and range"],
          correctAnswer: 2,
          explanation: "Median and IQR are resistant to skew and outliers.",
        },
        {
          question: "If Q₁ = 14 and Q₃ = 22, IQR is:",
          options: ["8", "18", "36", "14"],
          correctAnswer: 0,
          explanation: "IQR = 22 − 14 = 8.",
        },
        {
          question: "Which value is most affected by an outlier?",
          options: ["Median", "Mode", "Mean", "IQR"],
          correctAnswer: 2,
          explanation: "The mean is pulled toward extreme values.",
        },
      ],
    },
  ],

  // ─── 1G: Five-Number Summary & Boxplots ────────────────────────────
  "y12g-ch1-1g-five-number-boxplots": [
    {
      title: "Five-Number Summary & Boxplots",
      explanation:
        "The five-number summary lists: minimum, Q₁, median, Q₃, maximum. A boxplot is a visual display of this summary.\n\nThe box spans Q₁ to Q₃ with a line at the median. Whiskers extend to the smallest and largest values that are NOT outliers. Outliers are values below Q₁ − 1.5×IQR or above Q₃ + 1.5×IQR; they are plotted as separate points.\n\nBoxplots are excellent for comparing two or more groups on the same scale because they show centre, spread and outliers at a glance.",
      keyPoints: [
        "Five-number summary: min, Q₁, median, Q₃, max",
        "Box from Q₁ to Q₃, line at median",
        "Whiskers go to the most extreme value within 1.5×IQR of the box",
        "Outliers: < Q₁ − 1.5×IQR or > Q₃ + 1.5×IQR",
        "Comparing groups: align boxplots on the same axis",
      ],
      definitions: [
        { term: "Five-number summary", meaning: "The five values: minimum, Q₁, median, Q₃, maximum." },
        { term: "Lower fence", meaning: "Q₁ − 1.5 × IQR. Any value below this is an outlier." },
        { term: "Upper fence", meaning: "Q₃ + 1.5 × IQR. Any value above this is an outlier." },
      ],
      formulas: [
        { name: "Lower fence", formula: "Lower = Q₁ − 1.5 × IQR" },
        { name: "Upper fence", formula: "Upper = Q₃ + 1.5 × IQR" },
        { name: "IQR", formula: "IQR = Q₃ − Q₁" },
      ],
      workedExamples: [
        {
          problem:
            "Five-number summary: min = 4, Q₁ = 12, median = 18, Q₃ = 22, max = 50. Identify any outliers.",
          steps: [
            "IQR = 22 − 12 = 10.",
            "Lower fence = 12 − 1.5(10) = −3 → no lower outliers (min is 4).",
            "Upper fence = 22 + 1.5(10) = 37 → max = 50 > 37, so 50 is an outlier.",
            "Whisker on the right extends to the largest non-outlier value (≤ 37).",
          ],
          answer: "Outlier: 50.",
        },
        {
          problem: "Compare two boxplots: Group A (median 30, IQR 10) and Group B (median 45, IQR 25). Comment on centre and spread.",
          steps: [
            "Centre: B is higher (45 vs 30).",
            "Spread: B has larger IQR (25 vs 10), so B is more variable.",
            "Conclusion: Group B values are typically larger and more spread out.",
          ],
          answer: "B has higher centre and greater spread than A.",
        },
      ],
      tips: [
        "Always check both fences, not just the upper one.",
        "When comparing groups, mention both centre AND spread.",
        "If the median is closer to Q₁ than Q₃, the distribution is positively skewed.",
        "TI-Nspire CAS — boxplot: Lists & Spreadsheet, enter and name data → Data & Statistics page → drop variable on x-axis → menu → Plot Type → Box Plot. Outliers appear as separate dots automatically.",
        "Casio ClassPad — boxplot: Statistics app → enter list1 → SetGraph → Setting → Type: MedBox, tick ‘Show Outliers’ → Graph icon.",
        "Comparison paragraph template (use in extended response): ‘The median [variable] for Group A (___) is [higher/lower] than for Group B (___), indicating [context]. The spread, measured by IQR, is [larger/smaller] for Group A (___) than for Group B (___), so Group A values are [more/less] variable. The shape of A is [symmetric/positively/negatively skewed] while B is [...]. [State outliers if present.]’",
      ],
      examQuestion: {
        problem:
          "Data: 5, 7, 9, 10, 12, 13, 15, 18, 22, 30. (a) Find the five-number summary. (b) Determine if 30 is an outlier. (4 marks)",
        solution: [
          "Sort (already sorted). n = 10.",
          "Median = (12 + 13)/2 = 12.5.",
          "Lower half: 5,7,9,10,12 → Q₁ = 9. Upper half: 13,15,18,22,30 → Q₃ = 18.",
          "IQR = 18 − 9 = 9. Upper fence = 18 + 1.5(9) = 31.5. 30 < 31.5, so 30 is NOT an outlier.",
          "Five-number summary: min = 5, Q₁ = 9, median = 12.5, Q₃ = 18, max = 30.",
        ],
        answer: "(5, 9, 12.5, 18, 30); 30 is not an outlier (upper fence = 31.5).",
        marks: 4,
      },
      commonErrors: [
        "Forgetting to compute the fences before declaring an outlier.",
        "Drawing whiskers to the max/min when outliers exist (whiskers should stop at the extreme non-outlier).",
        "Mixing up Q₁ and Q₃ when splitting the data.",
        "Using mean/standard deviation language to compare boxplots — use median/IQR.",
      ],
      summary: [
        "Five-number summary = min, Q₁, median, Q₃, max.",
        "Outliers: outside Q₁ − 1.5 IQR or Q₃ + 1.5 IQR.",
        "Whiskers stop at the largest non-outlier within the fences.",
        "Boxplots make group comparisons fast and clear.",
      ],
      practice: [
        { question: "If Q₁ = 20 and Q₃ = 32, find the upper fence.", answer: "32 + 1.5(12) = 50" },
        { question: "A boxplot has the median much closer to Q₁ than Q₃. What is the shape?", answer: "Positively skewed." },
        { question: "What does an isolated dot beyond the right whisker indicate?", answer: "An outlier above the upper fence." },
        { question: "Why are boxplots good for comparing groups?", answer: "They show centre, spread, and outliers on a common scale." },
      ],
      quiz: [
        {
          question: "An outlier is any value below Q₁ − 1.5×IQR or above:",
          options: ["Q₃ + IQR", "Q₃ + 1.5×IQR", "Q₃ + 2×IQR", "Q₃ + 3×IQR"],
          correctAnswer: 1,
          explanation: "Standard 1.5×IQR rule.",
        },
        {
          question: "If Q₁ = 10, Q₃ = 22, the upper fence is:",
          options: ["28", "32", "40", "44"],
          correctAnswer: 2,
          explanation: "IQR = 12; 22 + 1.5(12) = 40.",
        },
        {
          question: "On a boxplot, the line inside the box represents the:",
          options: ["Mean", "Mode", "Median", "Range"],
          correctAnswer: 2,
          explanation: "Median is shown by a line inside the box.",
        },
      ],
    },
  ],

  // ─── 1H: Normal Distribution & 68–95–99.7 Rule ────────────────────
  "y12g-ch1-1h-normal-68-95-99": [
    {
      title: "Normal Distribution & the 68–95–99.7 Rule",
      explanation:
        "Many naturally occurring variables (heights, exam marks, measurement errors) are approximately normally distributed: a symmetric bell shape centred on the mean.\n\nThe 68–95–99.7 rule states that for any normal distribution:\n• about 68% of values lie within 1 standard deviation of the mean\n• about 95% lie within 2 standard deviations\n• about 99.7% lie within 3 standard deviations\n\nA z-score expresses how many standard deviations a value is from the mean: z = (x − μ)/σ. Positive z = above mean, negative z = below mean. Z-scores let us compare values from different distributions on the same scale.",
      keyPoints: [
        "68–95–99.7 rule applies only to normally distributed data",
        "z = (x − μ)/σ measures distance from mean in standard deviations",
        "z > 0: above mean; z < 0: below mean",
        "About 50% lies above the mean, 50% below",
        "Symmetric: 16% below μ − σ, 16% above μ + σ",
      ],
      definitions: [
        { term: "Normal distribution", meaning: "A symmetric, bell-shaped distribution defined by its mean μ and standard deviation σ." },
        { term: "z-score", meaning: "The number of standard deviations a value is above (positive) or below (negative) the mean." },
      ],
      formulas: [
        { name: "z-score", formula: "z = (x − μ) ÷ σ" },
        { name: "Original from z", formula: "x = μ + z·σ" },
        { name: "68–95–99.7", formula: "P(|x − μ| < σ) ≈ 0.68; P(|x − μ| < 2σ) ≈ 0.95; P(|x − μ| < 3σ) ≈ 0.997" },
      ],
      workedExamples: [
        {
          problem: "IQ scores have μ = 100, σ = 15. (a) What % of people score between 85 and 115? (b) What z-score corresponds to an IQ of 130?",
          steps: [
            "(a) 85 to 115 = μ ± σ → 68%.",
            "(b) z = (130 − 100)/15 = 30/15 = 2.",
          ],
          answer: "(a) 68%; (b) z = 2.",
        },
        {
          problem: "Heights of adult women: μ = 165 cm, σ = 6 cm. What % are taller than 177 cm?",
          steps: [
            "z = (177 − 165)/6 = 2.",
            "Within μ ± 2σ is 95%, so outside is 5%, split evenly.",
            "% above 177 cm = 5%/2 = 2.5%.",
          ],
          answer: "About 2.5%.",
        },
        {
          problem: "Compare two students. Maths: x = 78, μ = 70, σ = 8. English: x = 82, μ = 75, σ = 10. Which is the better relative result?",
          steps: [
            "Maths z = (78−70)/8 = 1.0.",
            "English z = (82−75)/10 = 0.7.",
            "Maths z is higher → relatively stronger in Maths.",
          ],
          answer: "Maths (z = 1.0 vs 0.7).",
        },
      ],
      tips: [
        "Memorise the rule splits: 16/68/16 for ±1σ; 2.5/95/2.5 for ±2σ.",
        "Always check whether the question wants ‘between’, ‘above’, or ‘below’.",
        "Use z-scores to compare values from different normal distributions.",
        "TI-Nspire CAS — normal probabilities: Calculator page → menu → Statistics → Distributions → Normal Cdf → enter Lower, Upper, μ, σ → OK. For ‘above 76 with μ=60, σ=8’: Lower = 76, Upper = 1E99, μ = 60, σ = 8.",
        "Casio ClassPad — normal probabilities: Main → Interactive → Distribution → Continuous → normCDf → enter lower, upper, σ, μ. Use 1E99 for +∞ and −1E99 for −∞.",
        "Inverse normal (find x given a percentage): TI-Nspire menu → Statistics → Distributions → Inverse Normal; ClassPad: Interactive → Distribution → Inverse → invNormCDf.",
      ],
      examQuestion: {
        problem:
          "The marks on a test are normally distributed with mean 60 and standard deviation 8. (a) What percentage of students scored below 76? (b) Find the mark equivalent to z = −1.5. (3 marks)",
        solution: [
          "(a) 76 = 60 + 2(8) = μ + 2σ. Below μ + 2σ is 50% + (95%/2) = 97.5%.",
          "(b) x = μ + zσ = 60 + (−1.5)(8) = 60 − 12 = 48.",
        ],
        answer: "(a) 97.5%; (b) mark = 48.",
        marks: 3,
      },
      commonErrors: [
        "Applying the 68–95–99.7 rule to non-normal (skewed) data.",
        "Forgetting to halve the ‘outside’ percentages when only one tail is required.",
        "Mixing the sign of z (above vs below the mean).",
        "Using x = μ − z·σ instead of x = μ + z·σ.",
      ],
      summary: [
        "Normal = symmetric bell curve.",
        "68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ.",
        "z = (x − μ)/σ; x = μ + z·σ.",
        "Use z-scores to compare across distributions.",
      ],
      practice: [
        { question: "If μ = 50, σ = 5, find the z-score for x = 60.", answer: "z = 2" },
        { question: "What % of normal data lies above μ + σ?", answer: "16%" },
        { question: "Find x if μ = 100, σ = 12, z = −2.", answer: "x = 100 − 24 = 76" },
        { question: "Why use z-scores to compare results from two different tests?", answer: "They standardise to the same scale (mean 0, sd 1)." },
        { question: "What % of normal data lies between μ − 2σ and μ + 2σ?", answer: "95%" },
      ],
      quiz: [
        {
          question: "For a normal distribution, what % lies within ±1 standard deviation of the mean?",
          options: ["50%", "68%", "95%", "99.7%"],
          correctAnswer: 1,
          explanation: "68–95–99.7 rule.",
        },
        {
          question: "If μ = 80 and σ = 4, the z-score of 88 is:",
          options: ["1", "2", "4", "8"],
          correctAnswer: 1,
          explanation: "(88−80)/4 = 2.",
        },
        {
          question: "About what % of values lie above μ + 2σ?",
          options: ["2.5%", "5%", "16%", "32%"],
          correctAnswer: 0,
          explanation: "Outside ±2σ is 5%, split: 2.5% in each tail.",
        },
      ],
    },
  ],

  // ─── 1I: Populations & Samples ────────────────────────────────────
  "y12g-ch1-1i-populations-samples": [
    {
      title: "Populations & Samples",
      explanation:
        "A population is the entire group we are interested in; a sample is the subset of the population we actually measure.\n\nWe collect samples because measuring a whole population is usually impractical. The sample needs to be representative — it should reflect the population so that conclusions drawn from the sample apply to the population.\n\nCommon sampling methods:\n• Simple random sample — every member is equally likely to be chosen (e.g. random number generator)\n• Stratified sample — population is divided into groups (strata) and a proportional random sample is drawn from each\n• Systematic sample — every k-th member from an ordered list\n• Self-selected/convenience samples — likely biased; avoid for inference\n\nBias is any tendency that causes the sample statistic to differ systematically from the true population parameter.",
      keyPoints: [
        "Population = whole group; sample = subset",
        "Statistics describe samples (e.g. x̄, s); parameters describe populations (μ, σ)",
        "Random sampling reduces bias",
        "Stratified sampling ensures sub-groups are represented in proportion",
        "Convenience and self-selected samples are usually biased",
      ],
      definitions: [
        { term: "Population", meaning: "All members of the group of interest." },
        { term: "Sample", meaning: "A subset of the population that is actually observed." },
        { term: "Parameter", meaning: "A numerical summary of a population (e.g. μ, σ)." },
        { term: "Statistic", meaning: "A numerical summary of a sample (e.g. x̄, s)." },
        { term: "Bias", meaning: "Systematic error that causes a statistic to be consistently too high or too low compared with the parameter." },
      ],
      formulas: [
        { name: "Stratified sample size", formula: "n_stratum = (stratum population ÷ total population) × total sample size" },
      ],
      workedExamples: [
        {
          problem:
            "A school has 600 students: 250 in junior, 200 in middle, 150 in senior. A stratified sample of 60 is required. How many from each level?",
          steps: [
            "Junior: 250/600 × 60 = 25.",
            "Middle: 200/600 × 60 = 20.",
            "Senior: 150/600 × 60 = 15.",
            "Check total: 25 + 20 + 15 = 60 ✓.",
          ],
          answer: "25 junior, 20 middle, 15 senior.",
        },
        {
          problem:
            "A radio station asks listeners to phone in their opinion about a new policy. Why is the resulting sample likely to be biased?",
          steps: [
            "Only listeners who feel strongly will phone in (self-selected).",
            "Only people listening to that station are in the pool (under-coverage).",
            "Conclusion: not representative of the wider population.",
          ],
          answer: "Self-selected sample → strong-opinion bias and under-coverage bias.",
        },
      ],
      tips: [
        "Whenever a stratified sample is asked for, check that the sub-totals add to the total sample size.",
        "Random samples remove personal choice from selection; this is what reduces bias.",
        "Comment on potential bias whenever a sampling method is described in plain English.",
      ],
      examQuestion: {
        problem:
          "A company employs 1200 staff: 720 office, 360 factory, 120 sales. It wants a stratified random sample of 80. (a) Determine how many staff to select from each group. (b) State one advantage of stratified over simple random sampling. (4 marks)",
        solution: [
          "(a) Office: 720/1200 × 80 = 48.",
          "Factory: 360/1200 × 80 = 24.",
          "Sales: 120/1200 × 80 = 8. Check: 48 + 24 + 8 = 80 ✓.",
          "(b) Stratified guarantees each sub-group is represented in proportion, reducing the chance of under-representation that random sampling could produce.",
        ],
        answer: "48 office, 24 factory, 8 sales; stratified ensures proportional representation of each group.",
        marks: 4,
      },
      commonErrors: [
        "Confusing population (parameter μ, σ) with sample (statistic x̄, s).",
        "Calling a convenience sample ‘random’.",
        "Forgetting to round stratified sub-samples to whole numbers (and check the total).",
        "Concluding a biased sample produces unbiased estimates.",
      ],
      summary: [
        "Population vs sample; parameter vs statistic.",
        "Random sampling reduces bias; stratified sampling represents sub-groups in proportion.",
        "Self-selected/convenience samples are usually biased.",
        "Always discuss bias when evaluating a sampling method.",
      ],
      practice: [
        { question: "A school has 800 students; you want a sample of 40. If 200 are in Year 12, how many Year 12 students go into a stratified sample?", answer: "200/800 × 40 = 10" },
        { question: "What is the difference between a parameter and a statistic?", answer: "A parameter describes a population; a statistic describes a sample." },
        { question: "Name one source of bias in an internet poll.", answer: "Self-selection — only motivated users respond." },
        { question: "Why is a simple random sample considered unbiased on average?", answer: "Each member of the population has an equal chance of selection." },
      ],
      quiz: [
        {
          question: "A statistic describes a:",
          options: ["Population", "Parameter", "Sample", "Census"],
          correctAnswer: 2,
          explanation: "Statistics summarise samples; parameters summarise populations.",
        },
        {
          question: "Stratified sampling means selecting:",
          options: ["The first n people you see", "A proportional random sample from each sub-group", "A self-selected group", "Every k-th person on a list"],
          correctAnswer: 1,
          explanation: "Stratified sampling is proportional within strata.",
        },
        {
          question: "A radio call-in poll is most likely to suffer from:",
          options: ["Stratification bias", "Self-selection bias", "Undercoverage of motivated voices", "Both B and C"],
          correctAnswer: 3,
          explanation: "Self-selected and limited audience both create bias.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 1 ──────────────────────────────────────────
  "y12g-ch1-review": [
    {
      title: "Review of Chapter 1 — Investigating Data Distributions",
      explanation:
        "This chapter built up the language and tools for describing a single variable.\n\n1A–B established categorical vs numerical data and how to summarise categorical data with frequency tables and bar/segmented bar charts.\n\n1C–D introduced graphical displays for numerical data: histograms, dot plots, and stem-and-leaf plots. We described distributions using SOCS — Shape, Outliers, Centre, Spread.\n\n1E added the log₁₀ scale for data spanning several orders of magnitude.\n\n1F–G developed numerical summaries: mean and standard deviation for symmetric data; median, IQR and the five-number summary (visualised as boxplots) for skewed data or data with outliers.\n\n1H introduced the normal distribution and the 68–95–99.7 rule, and the use of z-scores for comparison.\n\n1I covered populations and samples: choosing samples (simple random, stratified) and discussing bias.\n\nThe key examiner expectations are: choose the correct display and summary for the data type and shape, describe distributions thoroughly, and use z-scores or boxplot fences when asked.",
      keyPoints: [
        "Match data type to display: categorical → bar chart; numerical → histogram/dot/stem",
        "Symmetric → mean & sd; skewed/outliers → median & IQR",
        "Always describe with SOCS: Shape, Outliers, Centre, Spread",
        "Outliers: outside Q₁ − 1.5IQR or Q₃ + 1.5IQR",
        "z = (x − μ)/σ and the 68–95–99.7 rule for normal distributions",
        "Stratified samples are proportional within sub-groups",
      ],
      formulas: [
        { name: "Percentage", formula: "% = (frequency ÷ total) × 100" },
        { name: "Mean", formula: "x̄ = Σx ÷ n" },
        { name: "IQR", formula: "IQR = Q₃ − Q₁" },
        { name: "Outlier fences", formula: "Q₁ − 1.5·IQR  and  Q₃ + 1.5·IQR" },
        { name: "z-score", formula: "z = (x − μ) ÷ σ" },
        { name: "Stratified sample", formula: "n_stratum = (stratum ÷ total) × n" },
      ],
      workedExamples: [
        {
          problem:
            "A class’s test marks have x̄ = 72, s = 8 and are approximately normal. (a) What % of marks lie between 56 and 88? (b) Convert a mark of 84 to a z-score.",
          steps: [
            "(a) 56 = 72 − 2(8) and 88 = 72 + 2(8) → ±2σ → 95%.",
            "(b) z = (84 − 72)/8 = 1.5.",
          ],
          answer: "(a) 95%; (b) z = 1.5.",
        },
        {
          problem:
            "Boxplot summary: min = 3, Q₁ = 9, median = 12, Q₃ = 16, max = 40. Identify outliers and recommend a centre.",
          steps: [
            "IQR = 16 − 9 = 7. Upper fence = 16 + 1.5(7) = 26.5.",
            "Max = 40 > 26.5 → 40 is an outlier.",
            "Outlier present → use median (12) as centre.",
          ],
          answer: "Outlier 40; report median = 12.",
        },
      ],
      tips: [
        "When you finish, sanity-check: does your chosen statistic match the shape?",
        "Quote percentages, not vague words, when describing categorical data.",
        "If the question gives μ and σ, expect the 68–95–99.7 rule or a z-score calculation.",
      ],
      examQuestion: {
        problem:
          "The reaction times (ms) of 200 drivers are approximately normally distributed with mean 250 ms and standard deviation 30 ms. (a) Estimate the % of drivers with reaction time between 220 ms and 280 ms. (b) Estimate how many drivers have reaction time greater than 310 ms. (c) State whether 350 ms would be considered unusual and justify briefly. (5 marks)",
        solution: [
          "(a) 220 = 250 − 30, 280 = 250 + 30 → ±1σ → 68%.",
          "(b) 310 = 250 + 2σ. Above μ + 2σ ≈ 2.5%. Number = 2.5% × 200 = 5 drivers.",
          "(c) 350 = 250 + 100 = μ + (10/3)σ ≈ 3.33σ → beyond 99.7% of values, so 350 ms would be unusual.",
        ],
        answer: "(a) ≈ 68%; (b) ≈ 5 drivers; (c) Yes — beyond 3 standard deviations from the mean.",
        marks: 5,
      },
      commonErrors: [
        "Mixing up which centre/spread pair to quote.",
        "Forgetting to compute outlier fences before declaring outliers.",
        "Applying the 68–95–99.7 rule to non-normal data.",
        "Using ‘average’ when ‘mean’ or ‘median’ is required.",
      ],
      summary: [
        "Pick the right display and summary for the data type and shape.",
        "Describe with SOCS.",
        "Outliers via 1.5 × IQR rule.",
        "Use z-scores and the 68–95–99.7 rule for normal data.",
        "Stratified sampling for proportional representation.",
      ],
      practice: [
        { question: "Convert 8/40 to a percentage.", answer: "20%" },
        { question: "Five-number summary (10, 14, 18, 22, 50). IQR?", answer: "8" },
        { question: "Is 50 (above) an outlier? Show working.", answer: "Upper fence = 22 + 1.5(8) = 34. 50 > 34 → outlier." },
        { question: "z-score for x = 65, μ = 50, σ = 5.", answer: "z = 3" },
        { question: "Stratified sample of 50 from a population of 250 men and 250 women: how many of each?", answer: "25 men, 25 women." },
      ],
      quiz: [
        {
          question: "Which display preserves individual data values?",
          options: ["Histogram", "Stem-and-leaf plot", "Bar chart", "Pie chart"],
          correctAnswer: 1,
          explanation: "Stem-and-leaf plots show every value via stem + leaf.",
        },
        {
          question: "If a distribution is positively skewed with outliers, the best centre to report is the:",
          options: ["Mean", "Mode", "Median", "Range"],
          correctAnswer: 2,
          explanation: "Median is resistant to skew and outliers.",
        },
        {
          question: "For a normal distribution, P(μ − σ < X < μ + σ) ≈",
          options: ["50%", "68%", "95%", "99.7%"],
          correctAnswer: 1,
          explanation: "68–95–99.7 rule.",
        },
        {
          question: "A stratified sample is preferred over simple random sampling when:",
          options: ["The population is very small", "Sub-groups must be represented in proportion", "There is no sampling frame", "Speed is the priority"],
          correctAnswer: 1,
          explanation: "Stratification keeps sub-group proportions.",
        },
      ],
    },
  ],
};
