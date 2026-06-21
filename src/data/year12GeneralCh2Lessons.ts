import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 2: Investigating Associations Between Two Variables (VCE Unit 3)

export const year12GeneralCh2Lessons: TopicLessonsMap = {
  // ─── 2A: Bivariate Data — Classifying Variables ──────────────────
  "y12g-ch2-2a-bivariate-classify": [
    {
      title: "Bivariate Data — Classifying Variables",
      explanation:
        "Bivariate data records two variables on the same individual or unit (e.g. height AND weight of one person). The first job in any association question is to classify each variable as categorical or numerical, because that decides every later choice — graph, summary, and analysis.\n\nWe also distinguish:\n• Explanatory variable (EV) — the variable that may explain or predict the other; placed on the x-axis.\n• Response variable (RV) — the variable being explained or predicted; placed on the y-axis.\n\nThe combination of variable types determines the appropriate display:\n• Categorical vs Categorical → two-way frequency table (or segmented bar chart).\n• Numerical vs Categorical → parallel boxplots (or back-to-back stem plots).\n• Numerical vs Numerical → scatterplot.\n\nVCAA examiners often award marks for justifying the choice in terms of variable type.",
      keyPoints: [
        "Bivariate data = two variables on the same unit",
        "Explanatory variable (EV) → x-axis; Response variable (RV) → y-axis",
        "Cat vs Cat → two-way table; Num vs Cat → parallel boxplots; Num vs Num → scatterplot",
        "Always classify variables BEFORE choosing a display",
        "Justify graph choice by variable type to secure full marks",
      ],
      definitions: [
        { term: "Bivariate data", meaning: "Data in which two variables are recorded for each individual or unit." },
        { term: "Explanatory variable (EV)", meaning: "The variable thought to explain or predict the other; plotted on the x-axis." },
        { term: "Response variable (RV)", meaning: "The variable being explained or predicted; plotted on the y-axis." },
        { term: "Categorical variable", meaning: "A variable whose values are labels placing units into groups." },
        { term: "Numerical variable", meaning: "A variable whose values are numbers for which arithmetic is meaningful." },
      ],
      formulas: [],
      workedExamples: [
        {
          problem:
            "For each pair, identify the explanatory and response variable and the appropriate graph.\n(i) Hours studied and exam score.\n(ii) Gender and favourite sport.\n(iii) Height and gender.",
          steps: [
            "(i) Hours studied (num) explains exam score (num) → EV: hours, RV: score → Scatterplot.",
            "(ii) Gender (cat) and favourite sport (cat) → Two-way frequency table.",
            "(iii) Gender (cat) explains height (num) → EV: gender, RV: height → Parallel boxplots.",
          ],
          answer: "(i) Scatterplot; (ii) Two-way table; (iii) Parallel boxplots.",
        },
        {
          problem:
            "A researcher records the breed of dog (Labrador, Poodle, Beagle) and average daily food intake (g). Justify the appropriate display.",
          steps: [
            "Breed is categorical (nominal); food intake is numerical (continuous).",
            "Numerical vs Categorical → parallel boxplots are appropriate.",
            "EV: breed (groups), RV: food intake.",
          ],
          answer: "Parallel boxplots, because one variable is categorical and the other numerical.",
        },
      ],
      tips: [
        "‘What predicts what?’ The predictor is the EV.",
        "When the question says ‘compare across groups’, expect parallel boxplots.",
        "Postcodes, phone numbers and house numbers are categorical even though they look numeric.",
      ],
      examQuestion: {
        problem:
          "A study examines whether weekly exercise hours (hours) is associated with resting heart rate (bpm). State the explanatory and response variables and the appropriate display, justifying your choice. (3 marks)",
        solution: [
          "Exercise hours is the explanatory variable (it may explain heart rate).",
          "Resting heart rate is the response variable.",
          "Both variables are numerical, so the appropriate display is a scatterplot with exercise hours on the x-axis and heart rate on the y-axis.",
        ],
        answer: "EV: exercise hours (x); RV: heart rate (y); display: scatterplot (numerical vs numerical).",
        marks: 3,
      },
      commonErrors: [
        "Putting the response variable on the x-axis.",
        "Choosing a scatterplot when one variable is categorical.",
        "Failing to justify the graph choice in terms of variable type.",
        "Treating an ordinal categorical variable as numerical.",
      ],
      summary: [
        "Bivariate data = two variables per unit.",
        "Identify EV (x) and RV (y) first.",
        "Cat–Cat → two-way table; Num–Cat → boxplots; Num–Num → scatterplot.",
        "Always justify the graph choice from variable types.",
      ],
      practice: [
        { question: "Identify EV and RV: number of cigarettes smoked per day and life expectancy.", answer: "EV = cigarettes per day, RV = life expectancy." },
        { question: "Which graph for ‘car colour’ vs ‘suburb’?", answer: "Two-way frequency table (cat vs cat)." },
        { question: "Which graph for ‘school year level’ vs ‘height’?", answer: "Parallel boxplots (cat vs num)." },
        { question: "Which graph for ‘rainfall (mm)’ vs ‘crop yield (kg)’?", answer: "Scatterplot (num vs num)." },
      ],
      quiz: [
        {
          question: "The response variable in a scatterplot is plotted on the:",
          options: ["x-axis", "y-axis", "either axis", "the diagonal"],
          correctAnswer: 1,
          explanation: "RV always goes on the y-axis; EV on the x-axis.",
        },
        {
          question: "For ‘gender’ vs ‘weekly income’, the appropriate display is:",
          options: ["Scatterplot", "Pie chart", "Parallel boxplots", "Two-way table"],
          correctAnswer: 2,
          explanation: "Gender is categorical, income is numerical → parallel boxplots.",
        },
        {
          question: "Which is bivariate data?",
          options: [
            "A list of student heights",
            "A list of student heights and weights",
            "A list of postcodes",
            "A frequency table of eye colour",
          ],
          correctAnswer: 1,
          explanation: "Two variables (height AND weight) on the same student = bivariate.",
        },
      ],
    },
  ],

  // ─── 2B: Cat vs Cat — Two-Way Tables ──────────────────────────────
  "y12g-ch2-2b-cat-cat": [
    {
      title: "Associations Between Two Categorical Variables",
      explanation:
        "When both variables are categorical, organise the data in a two-way frequency table with the explanatory variable as the COLUMNS and the response variable as the ROWS. To detect association we compare CONDITIONAL PROPORTIONS (column percentages), never raw totals — group sizes are usually different.\n\nIf the conditional proportions are noticeably different across the columns, there is evidence of an association. If they are roughly equal, there is no evidence of association.\n\nReporting follows a strict VCAA template:\n‘The percentage of [response category] for [EV group 1] (___%) is [higher/lower] than for [EV group 2] (___%), indicating that [response] is associated with [EV].’",
      keyPoints: [
        "EV = columns, RV = rows in a two-way table",
        "Compare CONDITIONAL proportions (column %), not raw totals",
        "Different proportions across EV groups → evidence of association",
        "Roughly equal proportions → no evidence of association",
        "Quote the actual percentages and the response category in your conclusion",
      ],
      definitions: [
        { term: "Two-way frequency table", meaning: "A table that cross-classifies two categorical variables, showing the count in each combination of categories." },
        { term: "Conditional proportion", meaning: "The proportion of one variable’s category given that the other variable equals a particular value (e.g. P(likes sport | boy))." },
        { term: "Segmented bar chart", meaning: "A bar chart in which each bar (one per EV group) is split by the response variable’s categories, scaled to 100%." },
      ],
      formulas: [
        { name: "Conditional proportion", formula: "P(R | E) = (count in cell) ÷ (column total for E)" },
        { name: "Percentage form", formula: "% = P(R | E) × 100" },
      ],
      workedExamples: [
        {
          problem:
            "A class is surveyed on whether they like sport.\n           Likes Sport | Doesn’t | Total\n  Boys        30      |    10   |  40\n  Girls       20      |    20   |  40\nIs there an association between gender and liking sport?",
          steps: [
            "EV = gender (columns conceptually), RV = likes sport.",
            "P(Likes Sport | Boy) = 30/40 = 0.75 = 75%.",
            "P(Likes Sport | Girl) = 20/40 = 0.50 = 50%.",
            "75% vs 50% — a clear difference of 25 percentage points.",
            "Conclude: yes, there is an association between gender and liking sport.",
          ],
          answer: "Yes — 75% of boys vs 50% of girls like sport, so liking sport is associated with gender.",
        },
        {
          problem:
            "A two-way table shows: 60% of Year 11 students and 58% of Year 12 students prefer online learning. Is there evidence of an association?",
          steps: [
            "Conditional proportions: 60% (Y11) vs 58% (Y12).",
            "Difference is only 2 percentage points — practically equal.",
            "No noticeable difference → no evidence of association.",
          ],
          answer: "No — the conditional proportions are essentially equal, so no association is evident.",
        },
      ],
      tips: [
        "Always state ‘the percentage of [response category]’ in your written answer.",
        "A difference of a few percentage points is usually NOT enough — quote a substantial difference.",
        "Segmented bar charts make differences in conditional proportions easy to see visually.",
      ],
      examQuestion: {
        problem:
          "A survey of 200 adults records gender and whether they support a new policy:\n             Support | Oppose | Total\n  Male           60   |   40   |  100\n  Female         70   |   30   |  100\n(a) Calculate the percentage of males and females who support the policy. (b) State whether there is evidence of an association and justify with reference to the conditional proportions. (4 marks)",
        solution: [
          "(a) % of males who support = 60/100 × 100 = 60%.",
          "% of females who support = 70/100 × 100 = 70%.",
          "(b) The percentage of supporters is higher for females (70%) than for males (60%) — a 10 percentage-point difference.",
          "There is evidence of an association between gender and policy support.",
        ],
        answer: "60% of males vs 70% of females support — yes, evidence of association.",
        marks: 4,
      },
      commonErrors: [
        "Comparing raw counts instead of conditional proportions.",
        "Mixing up rows and columns when computing percentages.",
        "Forgetting to name the response category in the conclusion.",
        "Saying ‘there is association’ without quoting the actual percentages as evidence.",
      ],
      summary: [
        "Two-way table: EV = columns, RV = rows.",
        "Compare COLUMN percentages (conditional on EV).",
        "Different % → association; equal % → no association.",
        "VCAA-style answer must include the percentages and the response category.",
      ],
      practice: [
        { question: "Out of 50 boys, 35 like maths. Out of 50 girls, 30 like maths. Find both conditional proportions.", answer: "Boys: 35/50 = 70%; Girls: 30/50 = 60%." },
        { question: "If the two conditional proportions are 45% and 47%, is there evidence of association?", answer: "No — the proportions are essentially equal." },
        { question: "Why must we compare percentages and not raw counts?", answer: "Group sizes (column totals) usually differ, so raw counts are not directly comparable." },
        { question: "What is the explanatory variable usually placed along in a two-way table?", answer: "The columns." },
      ],
      quiz: [
        {
          question: "To test for association between two categorical variables, compare:",
          options: ["Raw frequencies", "Row totals", "Conditional (column) percentages", "Means"],
          correctAnswer: 2,
          explanation: "Conditional proportions standardise for different group sizes.",
        },
        {
          question: "If 80% of one group and 30% of another like a product, this suggests:",
          options: ["No association", "Weak association", "Clear association", "Causation"],
          correctAnswer: 2,
          explanation: "A 50 percentage-point difference is strong evidence of association.",
        },
        {
          question: "In a two-way table, the explanatory variable is conventionally placed in the:",
          options: ["Rows", "Columns", "Diagonal", "Bottom row only"],
          correctAnswer: 1,
          explanation: "EV in columns; RV in rows. We compare column percentages.",
        },
      ],
    },
  ],

  // ─── 2C: Numerical vs Categorical ─────────────────────────────────
  "y12g-ch2-2c-num-cat": [
    {
      title: "Association Between Numerical and Categorical Variables",
      explanation:
        "When the explanatory variable is categorical and the response is numerical, we compare the distribution of the numerical variable across the categories of the EV. The standard display is parallel (side-by-side) boxplots; back-to-back stem plots also work for two groups.\n\nA structured comparison answer follows the C-S-S-O template:\n• Centre — compare the medians (and quote the values).\n• Spread — compare the IQRs (and quote them).\n• Shape — symmetric, positively or negatively skewed.\n• Outliers — note any and identify them.\n\nIf the centres differ noticeably, there is evidence of association between the numerical variable and the categorical group.",
      keyPoints: [
        "Display: parallel boxplots (or back-to-back stem plot for 2 groups)",
        "Compare Centre (median), Spread (IQR), Shape, Outliers",
        "Quote actual numbers — ‘median 65 vs 50’, not just ‘higher’",
        "Different medians across groups → evidence of association",
        "Use median/IQR (not mean/sd) when comparing boxplots",
      ],
      definitions: [
        { term: "Parallel boxplots", meaning: "Two or more boxplots drawn on the same scale, one per category of the EV, used to compare distributions." },
        { term: "Back-to-back stem plot", meaning: "Two distributions sharing a central stem with leaves extending left and right." },
      ],
      formulas: [
        { name: "IQR", formula: "IQR = Q₃ − Q₁" },
        { name: "Outlier fences", formula: "Q₁ − 1.5·IQR  and  Q₃ + 1.5·IQR" },
      ],
      workedExamples: [
        {
          problem:
            "Parallel boxplots compare exam scores for Class A (median 72, IQR 12) and Class B (median 60, IQR 20). Both look roughly symmetric; B has one upper outlier. Compare and decide if there is association.",
          steps: [
            "Centre: median A (72) > median B (60) — A typically scored higher.",
            "Spread: IQR A (12) < IQR B (20) — A more consistent.",
            "Shape: both roughly symmetric.",
            "Outliers: B has one upper outlier; A has none.",
            "Different medians → evidence of association between class and exam score.",
          ],
          answer: "A is higher and less variable than B → association between class and score.",
        },
        {
          problem:
            "Side-by-side boxplots of weekly screen-time for males and females show: males median 14 h, IQR 6; females median 13 h, IQR 5. Comment on association.",
          steps: [
            "Centres are essentially the same (14 vs 13).",
            "Spreads are similar (6 vs 5).",
            "Shapes similar.",
            "No notable difference → no evidence of association.",
          ],
          answer: "No — distributions are very similar, so no evidence of association.",
        },
      ],
      tips: [
        "Always quote both medians and both IQRs when comparing boxplots.",
        "Use the C-S-S-O template — every part scores marks.",
        "Comment in CONTEXT (‘Class A scored higher than Class B’), not just ‘A > B’.",
        "TI-Nspire CAS — parallel boxplots: enter both groups in two lists → Data & Statistics → drop categorical variable on x-axis (or enter a category column) → menu → Plot Type → Box Plot.",
        "Casio ClassPad — parallel boxplots: enter list1 and list2 → SetGraph → Setting → Type: MedBox for both StatGraph1 and StatGraph2 → Graph icon shows them on the same axis.",
      ],
      examQuestion: {
        problem:
          "Parallel boxplots show test scores for two teaching methods.\n  Method A: min 40, Q₁ 55, median 65, Q₃ 75, max 85.\n  Method B: min 30, Q₁ 45, median 50, Q₃ 65, max 90 (one outlier at 90).\nWrite a paragraph comparing the distributions and stating whether there is evidence of association. (4 marks)",
        solution: [
          "Centre: the median for Method A (65) is higher than for Method B (50), so A typically scored higher.",
          "Spread: IQR for A = 75 − 55 = 20; IQR for B = 65 − 45 = 20 — equal spread.",
          "Shape: A is roughly symmetric; B is slightly positively skewed with an upper outlier at 90.",
          "Conclusion: because the medians differ noticeably, there is evidence of an association between teaching method and test score.",
        ],
        answer:
          "Method A has a higher median (65 vs 50), equal IQRs (20), B is slightly positively skewed with an outlier; evidence of association.",
        marks: 4,
      },
      commonErrors: [
        "Comparing the means from boxplots (boxplots show medians).",
        "Forgetting one of Centre / Spread / Shape / Outliers.",
        "Stating ‘A > B’ without quoting the actual values.",
        "Not putting the comparison into the context of the question.",
      ],
      summary: [
        "Parallel boxplots compare a numerical variable across categorical groups.",
        "Use C-S-S-O: Centre, Spread, Shape, Outliers.",
        "Quote the actual medians and IQRs in context.",
        "Different centres ⇒ evidence of association.",
      ],
      practice: [
        { question: "When comparing two boxplots, which centre statistic do you quote?", answer: "Median." },
        { question: "Which spread statistic pairs with the median?", answer: "IQR." },
        { question: "If both medians and IQRs are similar, is there evidence of association?", answer: "No — the distributions are essentially the same." },
        { question: "What four features should every boxplot comparison include?", answer: "Centre, spread, shape, outliers." },
      ],
      quiz: [
        {
          question: "Comparing parallel boxplots, you should quote which measure of centre?",
          options: ["Mean", "Mode", "Median", "Range"],
          correctAnswer: 2,
          explanation: "Boxplots are built around the median.",
        },
        {
          question: "Which of these belongs in a boxplot comparison answer?",
          options: ["Standard deviation", "IQR", "Variance", "Mean absolute deviation"],
          correctAnswer: 1,
          explanation: "Median pairs with IQR.",
        },
        {
          question: "If medians clearly differ between groups, you should:",
          options: ["Say no association", "Say there is evidence of association", "Need r to decide", "Compare means instead"],
          correctAnswer: 1,
          explanation: "Different centres across categories ⇒ evidence of association.",
        },
      ],
    },
  ],

  // ─── 2D: Numerical vs Numerical — Scatterplots ────────────────────
  "y12g-ch2-2d-num-num": [
    {
      title: "Associations Between Two Numerical Variables — Scatterplots",
      explanation:
        "When both variables are numerical we use a scatterplot. Each point is one unit (e.g. one student) plotted at (EV, RV).\n\nConvention:\n• Explanatory variable on the x-axis.\n• Response variable on the y-axis.\n\nA scatterplot lets us see whether the variables are associated and, if so, the form (linear or non-linear), direction (positive or negative) and strength of that association.\n\nBefore computing any number (such as r) ALWAYS look at the scatterplot first — if the form is non-linear, r is meaningless even if it looks high.",
      keyPoints: [
        "Scatterplot = one point per unit at (EV, RV)",
        "EV → x-axis; RV → y-axis",
        "Use scatterplots only when BOTH variables are numerical",
        "Look at form (linear vs non-linear) BEFORE quoting r",
        "Each point may represent a person, a day, a country — state the unit",
      ],
      definitions: [
        { term: "Scatterplot", meaning: "A two-dimensional plot of points (x, y) used to display the relationship between two numerical variables." },
        { term: "Explanatory variable (x)", meaning: "The variable used to predict or explain the response, plotted on the x-axis." },
        { term: "Response variable (y)", meaning: "The variable being predicted or explained, plotted on the y-axis." },
      ],
      formulas: [],
      workedExamples: [
        {
          problem:
            "Construct a scatterplot from the data: study time (h): 1, 2, 3, 4, 5; exam score: 50, 55, 65, 72, 80.",
          steps: [
            "EV = study time on x-axis; RV = exam score on y-axis.",
            "Plot the five points (1, 50), (2, 55), (3, 65), (4, 72), (5, 80).",
            "Points rise from lower-left to upper-right → positive linear association.",
          ],
          answer: "A scatterplot showing five points in an upward trend — positive linear association.",
        },
        {
          problem:
            "A scatterplot of temperature vs ice-cream sales shows points rising in a curve that flattens at high temperatures. Comment on what r will and will not tell us.",
          steps: [
            "Form is non-linear (curved).",
            "r measures only LINEAR association.",
            "Quoting r here would be misleading — first transform or describe non-linearly.",
          ],
          answer: "r is not appropriate because the form is non-linear.",
        },
      ],
      tips: [
        "If a scatterplot looks like a cloud with no pattern, there is no association.",
        "Time on x-axis is conventional only when time genuinely explains the other variable.",
        "TI-Nspire CAS — scatterplot: Lists & Spreadsheet, name two columns (e.g. x, y) → Add Data & Statistics → drop x on x-axis, y on y-axis.",
        "Casio ClassPad — scatterplot: Statistics app → enter list1 (x) and list2 (y) → SetGraph → Setting → Type: Scatter, XList: list1, YList: list2 → Graph icon.",
      ],
      examQuestion: {
        problem:
          "A researcher records the height (cm) and shoe size (EU) of 30 adults and constructs a scatterplot. The points form an upward, roughly straight pattern. (a) Identify the EV and RV. (b) Justify the choice of a scatterplot. (3 marks)",
        solution: [
          "(a) EV = height (cm) (predicts shoe size); RV = shoe size (EU).",
          "(b) Both height and shoe size are numerical variables, so a scatterplot is the appropriate display for examining the association between them.",
          "Each point represents one adult; the upward straight pattern suggests a positive linear association.",
        ],
        answer: "Height (x) explains shoe size (y); both numerical → scatterplot.",
        marks: 3,
      },
      commonErrors: [
        "Putting the response variable on the x-axis.",
        "Using a scatterplot when one variable is categorical.",
        "Joining the dots — never connect points on a scatterplot.",
        "Quoting r before checking that the form is linear.",
      ],
      summary: [
        "Scatterplot for two numerical variables.",
        "EV on x-axis, RV on y-axis.",
        "Inspect form before computing r.",
        "Each point = one unit (person, day, country, etc.).",
      ],
      practice: [
        { question: "Which axis carries the explanatory variable?", answer: "x-axis." },
        { question: "Why never join the dots on a scatterplot?", answer: "Points are independent observations, not a sequence." },
        { question: "If a scatterplot is curved, is r meaningful?", answer: "No — r only measures linear association." },
        { question: "Which display for ‘arm span (cm)’ vs ‘height (cm)’?", answer: "Scatterplot (both numerical)." },
      ],
      quiz: [
        {
          question: "A scatterplot is appropriate when:",
          options: [
            "Both variables are categorical",
            "One is numerical, one categorical",
            "Both variables are numerical",
            "Data is over time only",
          ],
          correctAnswer: 2,
          explanation: "Scatterplots require two numerical variables.",
        },
        {
          question: "On a scatterplot, the response variable is on the:",
          options: ["x-axis", "y-axis", "Either", "Neither"],
          correctAnswer: 1,
          explanation: "RV always on y-axis.",
        },
        {
          question: "Which is NOT a valid step before computing r?",
          options: ["Check linearity", "Identify outliers", "Join the dots", "Identify EV and RV"],
          correctAnswer: 2,
          explanation: "Never join scatterplot points.",
        },
      ],
    },
  ],

  // ─── 2E: Interpreting Scatterplots ────────────────────────────────
  "y12g-ch2-2e-interpret-scatter": [
    {
      title: "Interpreting Scatterplots",
      explanation:
        "Every scatterplot description in VCE General must address four features in order: Direction, Form, Strength, Outliers (D-F-S-O), and finish in CONTEXT.\n\n• Direction — positive (points rise from left to right), negative (points fall), or none.\n• Form — linear (points follow a straight line) or non-linear (curve).\n• Strength — weak, moderate or strong, depending on how tightly points cluster around a line.\n• Outliers — any points clearly separated from the main pattern.\n\nA full-mark sentence has the structure:\n‘There is a [strength] [direction] [form] association between [RV] and [EV], with [outlier comment].’\n\nExample: ‘There is a strong positive linear association between exam score and study time, with no apparent outliers.’",
      keyPoints: [
        "D-F-S-O: Direction, Form, Strength, Outliers — in that order",
        "Form first: only call it ‘linear’ if points follow a straight line",
        "Strength reflects how tightly points cluster around the trend",
        "Always finish in context naming both variables",
        "Identify outliers explicitly if any are present",
      ],
      definitions: [
        { term: "Direction", meaning: "Whether y tends to increase (positive) or decrease (negative) as x increases." },
        { term: "Form", meaning: "Whether the underlying pattern is linear (straight line) or non-linear (curved)." },
        { term: "Strength", meaning: "How tightly the points cluster around the trend — weak, moderate or strong." },
        { term: "Outlier (in scatterplot)", meaning: "A point clearly separated from the main pattern." },
      ],
      formulas: [],
      workedExamples: [
        {
          problem:
            "A scatterplot of hours of sleep (x) vs reaction time (y) shows points falling from upper-left to lower-right in a tight straight line. Describe the association.",
          steps: [
            "Direction: y decreases as x increases → negative.",
            "Form: tight straight line → linear.",
            "Strength: tight cluster → strong.",
            "Outliers: none mentioned.",
          ],
          answer:
            "There is a strong negative linear association between reaction time and hours of sleep, with no apparent outliers.",
        },
        {
          problem:
            "A scatterplot of age (x) vs daily screen-time (y) shows a loose downward cloud and one isolated point in the upper right. Describe.",
          steps: [
            "Direction: generally downward → negative.",
            "Form: roughly linear (no curve mentioned).",
            "Strength: loose cloud → weak.",
            "Outlier: one isolated point in upper right.",
          ],
          answer: "Weak negative linear association between screen-time and age, with one outlier in the upper right.",
        },
      ],
      tips: [
        "Use the exact phrase ‘there is a [strength] [direction] linear association between … and …’.",
        "Never write ‘correlation’ when you mean ‘association’ — until r is computed.",
        "Always mention outliers, even just to say ‘with no apparent outliers’.",
      ],
      examQuestion: {
        problem:
          "A scatterplot displays the relationship between weekly exercise hours (x) and resting heart rate (y) for 50 adults. The points form a moderately tight downward straight pattern with one isolated point well above the rest. Describe the association in a single full-mark sentence. (3 marks)",
        solution: [
          "Direction: negative (heart rate falls as exercise rises).",
          "Form: linear.",
          "Strength: moderately tight → moderate.",
          "Outlier: one point well above the main pattern.",
        ],
        answer:
          "There is a moderate negative linear association between resting heart rate and weekly exercise hours, with one outlier well above the main pattern.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to say ‘linear’ explicitly.",
        "Confusing ‘negative’ with ‘weak’ — they describe different features.",
        "Using ‘correlation’ before introducing r.",
        "Omitting the outlier comment.",
        "Not finishing in context with both variable names.",
      ],
      summary: [
        "Always D-F-S-O.",
        "Sentence template: strength + direction + linear + association + variables + outliers.",
        "Negative ≠ weak — these describe different things.",
      ],
      practice: [
        { question: "Translate to D-F-S-O: ‘y goes down as x goes up; tight straight band; no isolated points.’", answer: "Strong negative linear association, no outliers." },
        { question: "What word distinguishes a curved pattern from a straight one?", answer: "‘Linear’ vs ‘non-linear’." },
        { question: "Loose cloud with no clear trend — describe.", answer: "No association (or no clear association)." },
        { question: "What four features must every description include?", answer: "Direction, Form, Strength, Outliers." },
      ],
      quiz: [
        {
          question: "Which feature is NOT part of D-F-S-O?",
          options: ["Direction", "Form", "Frequency", "Outliers"],
          correctAnswer: 2,
          explanation: "Frequency is a categorical concept, not a scatterplot feature.",
        },
        {
          question: "Points tightly clustered around a downward straight line indicate:",
          options: [
            "Weak positive linear",
            "Strong negative linear",
            "Strong positive non-linear",
            "No association",
          ],
          correctAnswer: 1,
          explanation: "Tight + downward + straight = strong negative linear.",
        },
        {
          question: "‘Strength’ refers to:",
          options: [
            "Whether the trend goes up or down",
            "Whether the trend is straight or curved",
            "How tightly points cluster around the trend",
            "Whether outliers exist",
          ],
          correctAnswer: 2,
          explanation: "Strength = tightness of clustering.",
        },
      ],
    },
  ],

  // ─── 2F: Correlation Coefficient r ────────────────────────────────
  "y12g-ch2-2f-correlation": [
    {
      title: "Strength of Linear Relationship — Correlation Coefficient (r)",
      explanation:
        "Pearson’s correlation coefficient r measures the strength AND direction of the LINEAR association between two numerical variables. It is a single number between −1 and 1.\n\nKey facts:\n• r = +1: perfect positive linear relationship (all points on an upward straight line).\n• r = −1: perfect negative linear relationship (all points on a downward straight line).\n• r = 0: no linear relationship (but a strong non-linear relationship is still possible).\n\nRequirements before quoting r:\n1. Both variables numerical.\n2. The form must be approximately linear.\n3. No major outliers (they distort r).\n\nStrength guide for VCAA-style answers (sign gives direction):\n• 0.00–0.25: very weak / none\n• 0.25–0.50: weak\n• 0.50–0.75: moderate\n• 0.75–1.00: strong",
      keyPoints: [
        "−1 ≤ r ≤ 1; sign = direction; magnitude = strength",
        "Only for LINEAR relationships between two NUMERICAL variables",
        "Outliers can distort r dramatically",
        "r = 0 means no LINEAR relationship — a curved one may still exist",
        "Always interpret r in CONTEXT (name the two variables)",
      ],
      definitions: [
        { term: "Correlation coefficient (r)", meaning: "A number between −1 and 1 that measures the strength and direction of the linear relationship between two numerical variables." },
      ],
      formulas: [
        { name: "Pearson’s r (formula)", formula: "r = Σ(x − x̄)(y − ȳ) ÷ [(n − 1) · Sx · Sy]", note: "VCE General requires interpretation, not by-hand calculation — use CAS." },
        { name: "Strength bands", formula: "|r| ≥ 0.75 strong; 0.50–0.75 moderate; 0.25–0.50 weak; < 0.25 very weak/none" },
      ],
      workedExamples: [
        {
          problem: "A scatterplot of study time vs exam score gives r = 0.82. Interpret in context.",
          steps: [
            "|r| = 0.82 → strong.",
            "Sign positive → positive direction.",
            "Form linear (we assume linear because r is being used).",
          ],
          answer: "There is a strong positive linear association between exam score and study time.",
        },
        {
          problem: "Two variables have r = −0.30. Describe the relationship.",
          steps: [
            "|r| = 0.30 → weak.",
            "Negative sign → negative direction.",
          ],
          answer: "Weak negative linear association.",
        },
        {
          problem: "A scatterplot is clearly U-shaped and CAS gives r ≈ 0.05. Comment.",
          steps: [
            "r ≈ 0 means no LINEAR association.",
            "But the U-shape shows a strong NON-LINEAR association.",
            "r is misleading here — the form is not linear.",
          ],
          answer: "r near 0 only means no linear association — a strong non-linear pattern still exists.",
        },
      ],
      tips: [
        "Always check linearity FIRST; only then quote r.",
        "Round r to 2 or 3 decimal places, as the question requires.",
        "TI-Nspire CAS — Pearson’s r: Lists & Spreadsheet → enter x in column A, y in column B (named) → menu → Statistics → Stat Calculations → Linear Regression (a + bx) → X List: A, Y List: B → OK. Read r and r².",
        "Casio ClassPad — Pearson’s r: Statistics app → list1 (x), list2 (y) → Calc → Regression → Linear Reg → XList: list1, YList: list2 → OK. r and r² appear in the result.",
        "If a question asks ‘can r be used here?’, comment on linearity, numerical type and outliers.",
      ],
      examQuestion: {
        problem:
          "A linear regression on hours of sleep and reaction time gives r = −0.78. (a) Interpret r in context. (b) State one reason r should not be quoted if the scatterplot showed a clear curve. (3 marks)",
        solution: [
          "(a) |r| = 0.78 ≥ 0.75 → strong; sign negative → negative direction.",
          "‘There is a strong negative linear association between reaction time and hours of sleep.’",
          "(b) r only measures linear relationships; if the form is non-linear, r is misleading and may underestimate or misrepresent the true association.",
        ],
        answer: "(a) Strong negative linear association between reaction time and sleep. (b) r measures only linear association.",
        marks: 3,
      },
      commonErrors: [
        "Quoting r without checking that the form is linear.",
        "Confusing sign with strength (e.g. saying r = −0.9 is ‘weak’ because it is negative).",
        "Ignoring the impact of outliers on r.",
        "Saying r implies causation — it does not.",
      ],
      summary: [
        "−1 ≤ r ≤ 1.",
        "Sign = direction; |r| = strength.",
        "Strength bands: 0.25 / 0.50 / 0.75.",
        "Linearity required; outliers distort r.",
      ],
      practice: [
        { question: "r = 0.91 — interpret strength and direction.", answer: "Strong positive." },
        { question: "r = −0.45 — interpret.", answer: "Weak (or weak-to-moderate) negative linear association." },
        { question: "What does r = 0 mean?", answer: "No linear association (a non-linear one may still exist)." },
        { question: "Name two conditions before quoting r.", answer: "Both variables numerical, approximately linear form, no major outliers." },
      ],
      quiz: [
        {
          question: "Which value of r indicates the strongest linear association?",
          options: ["0.65", "−0.85", "0.40", "0"],
          correctAnswer: 1,
          explanation: "Strength is |r|; |−0.85| = 0.85 is largest.",
        },
        {
          question: "r = 0 implies:",
          options: [
            "No relationship at all",
            "No linear relationship",
            "Strong non-linear relationship",
            "Causation",
          ],
          correctAnswer: 1,
          explanation: "Only linear association is ruled out.",
        },
        {
          question: "Pearson’s r requires both variables to be:",
          options: ["Categorical", "Numerical and roughly linear", "Ordinal", "Time series"],
          correctAnswer: 1,
          explanation: "Numerical and approximately linear, with no major outliers.",
        },
      ],
    },
  ],

  // ─── 2G: Coefficient of Determination r² ──────────────────────────
  "y12g-ch2-2g-r-squared": [
    {
      title: "Coefficient of Determination (r²)",
      explanation:
        "The coefficient of determination, r², is simply the square of the correlation coefficient. It answers: ‘What percentage of the variation in the response variable can be explained by the variation in the explanatory variable, assuming a linear model?’\n\nProperties:\n• 0 ≤ r² ≤ 1 (always non-negative — the sign of the relationship is lost).\n• r² is usually quoted as a percentage.\n• A higher r² means the EV explains more of the variation in the RV.\n\nVCAA-style interpretation template:\n‘r² = ___ , so ___ % of the variation in [RV] can be explained by the variation in [EV].’\n\nThe wording ‘CAN BE EXPLAINED BY THE VARIATION IN’ is examiner-specific — using ‘caused by’ or ‘due to’ loses the mark.",
      keyPoints: [
        "r² = (r)²; always between 0 and 1",
        "Quote as a percentage in interpretations",
        "Use the exact phrase ‘can be explained by the variation in’",
        "r² loses sign — it tells you NOTHING about direction",
        "The remaining (1 − r²) is variation explained by other factors / random variation",
      ],
      definitions: [
        { term: "Coefficient of determination (r²)", meaning: "The proportion of the variation in the response variable that can be explained by the variation in the explanatory variable, assuming a linear model." },
      ],
      formulas: [
        { name: "r² from r", formula: "r² = (r)²" },
        { name: "Percentage form", formula: "% explained = r² × 100" },
      ],
      workedExamples: [
        {
          problem: "If r = 0.8 between study time (x) and exam score (y), find r² and interpret.",
          steps: [
            "r² = 0.8² = 0.64.",
            "As a percentage: 64%.",
            "Interpretation in context with the exact wording.",
          ],
          answer: "r² = 0.64 → 64% of the variation in exam score can be explained by the variation in study time.",
        },
        {
          problem: "A regression of resting heart rate (y) on weekly exercise (x) gives r² = 0.518. Interpret in context.",
          steps: [
            "r² = 0.518 → 51.8% as a percentage.",
            "Use exact VCAA phrasing.",
          ],
          answer: "51.8% of the variation in resting heart rate can be explained by the variation in weekly exercise hours.",
        },
        {
          problem: "Given r = −0.6, find r² and comment on what r² does and does not tell us.",
          steps: [
            "r² = (−0.6)² = 0.36 → 36%.",
            "r² is positive; the sign of the relationship has been lost.",
            "r² explains the proportion of variation; it does NOT prove causation or give direction.",
          ],
          answer: "r² = 0.36 → 36% of variation in y is explained by x; r² does not give direction or imply causation.",
        },
      ],
      tips: [
        "When asked to ‘interpret r²’, always rewrite it as a percentage and use the exact phrase ‘can be explained by the variation in’.",
        "Do not mention direction when interpreting r² — that is what r is for.",
        "TI-Nspire / ClassPad CAS already report r² alongside r in the linear regression output — use it directly.",
        "If asked ‘what % is unexplained?’, answer (1 − r²) × 100.",
      ],
      examQuestion: {
        problem:
          "A linear regression of weekly income (y, dollars) on years of education (x) gives r = 0.74. (a) Calculate r² to 3 decimal places. (b) Interpret r² in the context of this study. (3 marks)",
        solution: [
          "(a) r² = (0.74)² = 0.5476 → 0.548 (3 dp).",
          "(b) Interpretation in context with VCAA phrasing.",
          "‘54.8% of the variation in weekly income can be explained by the variation in years of education.’",
        ],
        answer: "(a) r² ≈ 0.548. (b) 54.8% of variation in weekly income is explained by variation in years of education.",
        marks: 3,
      },
      commonErrors: [
        "Saying ‘64% of exam scores are caused by study time’ — wrong wording AND implies causation.",
        "Saying ‘64% of students’ scores are explained’ — must say ‘variation in scores’.",
        "Forgetting to express r² as a percentage.",
        "Including direction in the r² interpretation.",
      ],
      summary: [
        "r² = r²; 0 ≤ r² ≤ 1.",
        "Quote as a percentage.",
        "‘___ % of the variation in [RV] can be explained by the variation in [EV].’",
        "r² gives proportion explained; r gives strength + direction.",
      ],
      practice: [
        { question: "If r = 0.5, find r² as a percentage.", answer: "25%." },
        { question: "If r² = 0.81, what is |r|?", answer: "0.9 (sign unknown)." },
        { question: "Interpret r² = 0.40 for x = age, y = blood pressure.", answer: "40% of the variation in blood pressure can be explained by the variation in age." },
        { question: "What does the remaining 1 − r² represent?", answer: "Variation in y not explained by x (other factors / random variation)." },
      ],
      quiz: [
        {
          question: "If r = −0.7, then r² equals:",
          options: ["−0.49", "0.49", "0.7", "−0.7"],
          correctAnswer: 1,
          explanation: "r² = (−0.7)² = 0.49 (always non-negative).",
        },
        {
          question: "Which is the correct VCAA-style interpretation of r² = 0.36 (x = study, y = score)?",
          options: [
            "36% of scores are caused by study time.",
            "36% of the variation in scores can be explained by the variation in study time.",
            "36% of students study effectively.",
            "Study time explains 36% of all students.",
          ],
          correctAnswer: 1,
          explanation: "Exact wording: ‘variation in y can be explained by the variation in x’.",
        },
        {
          question: "r² tells you about:",
          options: ["Direction only", "Strength only", "Proportion of variation explained", "Causation"],
          correctAnswer: 2,
          explanation: "r² = proportion of variation in RV explained by EV (assuming linear model).",
        },
      ],
    },
  ],

  // ─── 2H: Correlation vs Causation ─────────────────────────────────
  "y12g-ch2-2h-correlation-causation": [
    {
      title: "Correlation & Causation",
      explanation:
        "A strong correlation between two variables does NOT mean that one causes the other. Even with r close to ±1, there are several non-causal explanations to consider:\n\n1. Coincidence — the relationship is due to chance.\n2. Common response (lurking variable) — a third variable is driving both.\n3. Confounding — another variable is mixed up with the EV and we cannot tell them apart.\n4. Reverse causation — y might actually be causing x, not the other way around.\n\nClassic example: ice-cream sales and drowning rates rise together. The lurking variable is hot weather, which drives both.\n\nVCE answers should always include the phrase ‘correlation does not imply causation’ and name the most plausible alternative explanation in the context of the question.",
      keyPoints: [
        "Strong r ≠ causation",
        "Four alternatives: coincidence, common response, confounding, reverse causation",
        "A controlled experiment (with random assignment) is what establishes causation",
        "Always name a plausible lurking/confounding variable in context",
        "Use the exact phrase ‘correlation does not imply causation’",
      ],
      definitions: [
        { term: "Causation", meaning: "A change in one variable directly produces a change in the other." },
        { term: "Common response variable (lurking variable)", meaning: "A third variable that influences both x and y, producing an apparent association between them." },
        { term: "Confounding variable", meaning: "A variable whose effect on y is mixed up with the effect of x, making it impossible to attribute the change to x alone." },
        { term: "Reverse causation", meaning: "The response variable is in fact causing the explanatory variable, rather than the other way around." },
      ],
      formulas: [],
      workedExamples: [
        {
          problem: "Ice-cream sales (x) and drownings (y) per week in a coastal city are strongly positively correlated. Can we conclude ice-cream consumption causes drowning?",
          steps: [
            "Identify the relationship: strong positive correlation.",
            "Plausibility check: does eating ice-cream cause drowning? No.",
            "Lurking variable: hot weather increases both ice-cream sales AND swimming (hence drownings).",
            "Conclusion: common response — correlation, not causation.",
          ],
          answer: "No — hot weather is a common response variable driving both. Correlation does not imply causation.",
        },
        {
          problem: "Children with bigger feet read better. Does foot size cause reading skill?",
          steps: [
            "Strong correlation observed.",
            "Lurking variable: AGE — older children have bigger feet AND read better.",
            "Common response variable explains the association.",
          ],
          answer: "No — age is the common response variable.",
        },
        {
          problem: "Hospital admissions and number of doctors per region are positively correlated. Suggest a non-causal explanation.",
          steps: [
            "Could be reverse causation: regions with more sick people require more doctors.",
            "Or common response: large population drives both.",
            "Either way, correlation is not enough to prove doctors cause sickness.",
          ],
          answer: "Reverse causation (more illness → more doctors) and/or common response (population size).",
        },
      ],
      tips: [
        "When asked ‘does this prove causation?’, the answer is almost always NO — explain why.",
        "Name the plausible lurking variable in the context of the question to score the justification mark.",
        "Only a properly controlled experiment with random assignment can establish cause and effect.",
      ],
      examQuestion: {
        problem:
          "A study finds a strong positive correlation between the number of fire engines sent to a fire and the amount of damage caused (r = 0.85). Does this mean sending more fire engines causes more damage? Justify with reference to a possible non-causal explanation. (3 marks)",
        solution: [
          "No — correlation does not imply causation.",
          "A plausible explanation is a common response variable: the size of the fire.",
          "Larger fires require more engines AND cause more damage, producing the apparent association.",
        ],
        answer: "No — fire size is a common response variable; correlation does not imply causation.",
        marks: 3,
      },
      commonErrors: [
        "Concluding causation from a high r value.",
        "Failing to name a specific lurking variable in context.",
        "Confusing ‘confounding’ with ‘common response’ — both are valid; either word is fine.",
        "Forgetting to write ‘correlation does not imply causation’.",
      ],
      summary: [
        "Correlation does NOT imply causation.",
        "Four alternatives: coincidence, common response, confounding, reverse causation.",
        "Always identify the plausible lurking variable in context.",
        "Causation requires a controlled experiment.",
      ],
      practice: [
        { question: "Why doesn’t correlation imply causation?", answer: "A third variable, reverse causation, or chance can produce the association." },
        { question: "Name the lurking variable: ‘shoe size and reading ability in children’.", answer: "Age." },
        { question: "What kind of study is needed to establish causation?", answer: "A controlled experiment with random assignment." },
        { question: "What does ‘reverse causation’ mean?", answer: "y actually causes x, not the other way around." },
      ],
      quiz: [
        {
          question: "Strong correlation between x and y means:",
          options: [
            "x causes y",
            "y causes x",
            "There is a linear association — cause is not established",
            "Nothing useful",
          ],
          correctAnswer: 2,
          explanation: "Correlation indicates association only.",
        },
        {
          question: "Ice-cream sales correlated with drownings: best explanation is:",
          options: ["Causation", "Reverse causation", "Common response (hot weather)", "Coincidence"],
          correctAnswer: 2,
          explanation: "Hot weather drives both — common response variable.",
        },
        {
          question: "Causation can only be established by:",
          options: ["A high r", "A high r²", "A controlled experiment with random assignment", "A scatterplot"],
          correctAnswer: 2,
          explanation: "Observational data cannot prove cause; experiments can.",
        },
      ],
    },
  ],

  // ─── 2I: Choosing the Appropriate Graph ──────────────────────────
  "y12g-ch2-2i-choosing-graphs": [
    {
      title: "Choosing the Appropriate Graph",
      explanation:
        "The correct graph for an association study is chosen ENTIRELY from the variable types of the EV and RV. Memorise this table — it appears every year in some form.\n\n• Categorical EV vs Categorical RV → two-way frequency table (or segmented bar chart).\n• Categorical EV vs Numerical RV → parallel boxplots (or back-to-back stem plot for two groups).\n• Numerical EV vs Numerical RV → scatterplot.\n\nWhen justifying your choice, name the variable types explicitly: ‘Both variables are numerical, so a scatterplot is appropriate.’ This single sentence is often worth a mark on its own.",
      keyPoints: [
        "Cat × Cat → two-way table / segmented bar chart",
        "Cat × Num → parallel boxplots",
        "Num × Num → scatterplot",
        "Always justify with ‘[EV] is [type] and [RV] is [type]’",
        "If unsure, classify each variable first, then read off the row in the table",
      ],
      definitions: [
        { term: "Segmented bar chart", meaning: "A bar chart in which each bar (one per EV category) is split into segments showing the response variable, scaled to 100%." },
      ],
      formulas: [],
      workedExamples: [
        {
          problem: "Which graph for ‘year level (Y10/Y11/Y12)’ vs ‘daily screen-time (h)’?",
          steps: [
            "Year level is categorical (3 groups).",
            "Screen-time is numerical.",
            "Categorical vs numerical → parallel boxplots.",
          ],
          answer: "Parallel boxplots — categorical vs numerical.",
        },
        {
          problem: "Which graph for ‘weekly income’ vs ‘weekly spending’?",
          steps: [
            "Both are numerical.",
            "Numerical vs numerical → scatterplot.",
          ],
          answer: "Scatterplot — both numerical.",
        },
        {
          problem: "Which graph for ‘gender’ vs ‘subject preference (Maths/Science/English)’?",
          steps: [
            "Both categorical.",
            "Categorical vs categorical → two-way table or segmented bar chart.",
          ],
          answer: "Two-way frequency table (or segmented bar chart).",
        },
      ],
      tips: [
        "Classify FIRST, then choose the graph — do not guess from context.",
        "Segmented bar charts use percentages — useful when group sizes differ.",
        "When given a choice, parallel boxplots usually beat back-to-back stem plots for more than two groups.",
      ],
      examQuestion: {
        problem:
          "For each pair, name the appropriate display and justify in one sentence:\n(a) Suburb (categorical) vs house price (numerical).\n(b) Hours of sleep (numerical) vs concentration score (numerical).\n(c) Gender (categorical) vs preferred social media platform (categorical). (3 marks)",
        solution: [
          "(a) Categorical vs numerical → parallel boxplots, because we are comparing the distribution of a numerical variable across categorical groups.",
          "(b) Numerical vs numerical → scatterplot, because both variables are numerical.",
          "(c) Categorical vs categorical → two-way frequency table (or segmented bar chart), because both variables are categorical.",
        ],
        answer: "(a) Parallel boxplots; (b) scatterplot; (c) two-way frequency table.",
        marks: 3,
      },
      commonErrors: [
        "Choosing a scatterplot when one variable is categorical.",
        "Choosing a bar chart for two numerical variables.",
        "Failing to justify the choice using variable types.",
        "Confusing a (categorical-only) bar chart with a (numerical-only) histogram.",
      ],
      summary: [
        "Cat × Cat → two-way table.",
        "Cat × Num → parallel boxplots.",
        "Num × Num → scatterplot.",
        "Justify with the variable types.",
      ],
      practice: [
        { question: "Best graph for ‘team’ vs ‘goals scored per game’.", answer: "Parallel boxplots." },
        { question: "Best graph for ‘weight (kg)’ vs ‘1-rep max bench press (kg)’.", answer: "Scatterplot." },
        { question: "Best graph for ‘house style’ vs ‘suburb’.", answer: "Two-way frequency table." },
        { question: "Why justify with variable types?", answer: "It earns the marker’s justification mark and locks in the correct method." },
      ],
      quiz: [
        {
          question: "Both variables are categorical. Best display?",
          options: ["Scatterplot", "Two-way table", "Histogram", "Parallel boxplots"],
          correctAnswer: 1,
          explanation: "Cat × Cat → two-way frequency table.",
        },
        {
          question: "EV is categorical and RV is numerical. Best display?",
          options: ["Scatterplot", "Pie chart", "Parallel boxplots", "Two-way table"],
          correctAnswer: 2,
          explanation: "Cat × Num → parallel boxplots.",
        },
        {
          question: "Both variables are numerical. Best display?",
          options: ["Scatterplot", "Bar chart", "Two-way table", "Segmented bar chart"],
          correctAnswer: 0,
          explanation: "Num × Num → scatterplot.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 2 ─────────────────────────────────────────
  "y12g-ch2-review": [
    {
      title: "Review of Chapter 2 — Investigating Associations",
      explanation:
        "Chapter 2 builds the toolkit for investigating association between two variables.\n\n2A: Identify EV (x) and RV (y); classify each as categorical or numerical.\n2B: Cat × Cat → two-way table; compare CONDITIONAL proportions, never raw counts.\n2C: Cat × Num → parallel boxplots; compare Centre, Spread, Shape, Outliers (C-S-S-O) in context.\n2D: Num × Num → scatterplot with EV on x-axis and RV on y-axis.\n2E: Describe scatterplots using D-F-S-O — Direction, Form, Strength, Outliers.\n2F: Pearson’s r quantifies strength + direction of LINEAR association; check linearity and outliers first.\n2G: r² is the proportion of variation in y explained by x — quote the exact VCAA wording.\n2H: Correlation does NOT imply causation — name a plausible lurking/common response variable.\n2I: Choose the graph from variable types and justify.\n\nVCAA loves: justify the graph from variable types; D-F-S-O for scatterplots; the r² wording template; the ‘correlation ≠ causation’ phrase with a named lurking variable.",
      keyPoints: [
        "EV on x, RV on y — always",
        "Compare conditional proportions, not raw counts (Cat × Cat)",
        "C-S-S-O for parallel boxplots; D-F-S-O for scatterplots",
        "r measures linear strength + direction; outliers and curvature distort it",
        "r² is variation in y explained by x; never include direction or causation here",
        "Correlation ≠ causation: name a lurking variable in context",
      ],
      formulas: [
        { name: "Conditional proportion", formula: "P(R|E) = cell ÷ column total" },
        { name: "Pearson’s r bands", formula: "|r| < 0.25 very weak; 0.25–0.50 weak; 0.50–0.75 moderate; ≥ 0.75 strong" },
        { name: "Coefficient of determination", formula: "r² = (r)²; report as %" },
        { name: "Outlier fences (boxplot)", formula: "Q₁ − 1.5·IQR  and  Q₃ + 1.5·IQR" },
      ],
      workedExamples: [
        {
          problem:
            "A study reports r = 0.72 between hours studied and exam score. (a) Describe the relationship. (b) Compute r² and interpret. (c) Does this prove causation?",
          steps: [
            "(a) |r| = 0.72 → moderate (close to strong); positive sign → moderate-to-strong positive linear association between exam score and hours studied.",
            "(b) r² = 0.72² = 0.5184 → 51.8% of the variation in exam score can be explained by the variation in hours studied.",
            "(c) No — correlation does not imply causation. Lurking variables (e.g. motivation, prior ability) may explain part of the association.",
          ],
          answer: "(a) Moderate-to-strong positive linear association. (b) 51.8% of variation in exam score explained by hours studied. (c) No — correlation does not imply causation.",
        },
        {
          problem:
            "Two-way table: 75% of boys vs 50% of girls like sport. Is there an association? Justify.",
          steps: [
            "Conditional proportions: 75% (boys) vs 50% (girls) — 25 percentage-point difference.",
            "A clear difference in conditional proportions indicates an association.",
          ],
          answer: "Yes — 75% vs 50% shows that liking sport is associated with gender.",
        },
      ],
      tips: [
        "When asked to interpret r² → ‘___% of the variation in [RV] can be explained by the variation in [EV]’.",
        "When asked about causation → ‘Correlation does not imply causation’ + lurking variable in context.",
        "Always classify variables FIRST, then choose the graph and the analysis.",
      ],
      examQuestion: {
        problem:
          "A health study records weekly exercise (hours, x) and resting heart rate (bpm, y) for 80 adults.\n• Both variables are numerical.\n• A scatterplot shows a moderately tight downward straight pattern with no outliers.\n• CAS gives r = −0.82.\n(a) Justify the choice of a scatterplot. (b) Describe the association using D-F-S-O. (c) Compute r² to 3 dp and interpret in context. (d) Can we conclude exercise causes lower heart rate? Justify. (6 marks)",
        solution: [
          "(a) Both variables are numerical, so a scatterplot is appropriate.",
          "(b) Direction: negative; Form: linear; Strength: |r| = 0.82 → strong; Outliers: none. ‘There is a strong negative linear association between resting heart rate and weekly exercise hours, with no outliers.’",
          "(c) r² = (−0.82)² = 0.6724 → 0.672. ‘67.2% of the variation in resting heart rate can be explained by the variation in weekly exercise hours.’",
          "(d) No — correlation does not imply causation. Lurking variables such as overall fitness, age or diet may also influence heart rate.",
        ],
        answer:
          "(a) Both numerical → scatterplot. (b) Strong negative linear association, no outliers. (c) r² ≈ 0.672 → 67.2% of variation in heart rate explained by exercise. (d) No — correlation does not imply causation.",
        marks: 6,
      },
      commonErrors: [
        "Quoting r when the form is non-linear.",
        "Comparing raw counts for two categorical variables.",
        "Wrong wording for r² (‘caused by’ instead of ‘variation in y explained by variation in x’).",
        "Concluding causation from a high r.",
        "Forgetting to justify the graph choice with variable types.",
      ],
      summary: [
        "Pick the display from variable types: Cat-Cat → table; Cat-Num → boxplots; Num-Num → scatter.",
        "Compare conditional proportions; describe boxplots with C-S-S-O; describe scatter with D-F-S-O.",
        "r = strength + direction of linear association; r² = % of variation explained.",
        "Correlation does not imply causation — always name a lurking variable in context.",
      ],
      practice: [
        { question: "r = −0.85 — describe.", answer: "Strong negative linear association." },
        { question: "r² = 0.36 — interpret (x = study, y = score).", answer: "36% of the variation in scores can be explained by the variation in study time." },
        { question: "Best display for height vs gender?", answer: "Parallel boxplots." },
        { question: "Best display for postcode vs car colour?", answer: "Two-way frequency table (both categorical)." },
        { question: "Why doesn’t a high r prove causation?", answer: "Lurking variables, reverse causation or coincidence may explain the association." },
      ],
      quiz: [
        {
          question: "r = −0.9 indicates:",
          options: ["Weak negative", "Strong negative linear", "Strong positive linear", "No relationship"],
          correctAnswer: 1,
          explanation: "|r| = 0.9 ≥ 0.75 → strong; sign negative.",
        },
        {
          question: "If r² = 0.49, what % of the variation in y is NOT explained by x?",
          options: ["49%", "51%", "70%", "30%"],
          correctAnswer: 1,
          explanation: "1 − 0.49 = 0.51 = 51%.",
        },
        {
          question: "Best display for ‘suburb’ vs ‘house price’?",
          options: ["Scatterplot", "Two-way table", "Parallel boxplots", "Pie chart"],
          correctAnswer: 2,
          explanation: "Categorical vs numerical → parallel boxplots.",
        },
        {
          question: "‘Correlation does not imply causation’ because:",
          options: [
            "r is always wrong",
            "There may be a lurking variable, reverse causation, or coincidence",
            "Scatterplots are inaccurate",
            "r² is always small",
          ],
          correctAnswer: 1,
          explanation: "These are the standard non-causal alternatives.",
        },
      ],
    },
  ],
};
