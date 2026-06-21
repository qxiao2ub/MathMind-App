import { Lesson } from "./topicLessons";

export const year11GeneralLessons: Record<string, Lesson[]> = {

  // ═══════════════════════════════════════════════════════════════
  // REVIEW OF PERCENTAGES AND RATIOS
  // ═══════════════════════════════════════════════════════════════
  "y11g-percentages-ratios": [
    {
      title: "Percentages",
      explanation: "A percentage is a fraction out of 100. To convert a fraction to a percentage, divide and multiply by 100. To convert a percentage to a decimal, divide by 100.\n\nPercentages are used everywhere: discounts, taxes, interest rates, statistics. Being fluent with percentage conversions is essential for General Maths.",
      keyPoints: ["Percentage = (part / whole) × 100", "To convert % to decimal: divide by 100", "To convert decimal to %: multiply by 100", "To find x% of a quantity: multiply by x/100"],
      workedExamples: [
        { problem: "Find 35% of $240.", steps: ["35% = 35/100 = 0.35", "0.35 × 240 = $84"], answer: "$84" },
        { problem: "Express 18 out of 45 as a percentage.", steps: ["18 ÷ 45 = 0.4", "0.4 × 100 = 40%"], answer: "40%" }
      ],
      tips: ["'Of' in maths usually means multiply."],
      quiz: [
        { question: "What is 25% of 360?", options: ["80", "90", "72", "100"], correctAnswer: 1, explanation: "0.25 × 360 = 90" },
        { question: "Express 3/8 as a percentage:", options: ["37.5%", "38%", "33.3%", "30%"], correctAnswer: 0, explanation: "3 ÷ 8 = 0.375 = 37.5%" },
        { question: "0.06 as a percentage is:", options: ["60%", "0.6%", "6%", "0.06%"], correctAnswer: 2, explanation: "0.06 × 100 = 6%" }
      ]
    },
    {
      title: "Percentage Increase and Decrease",
      explanation: "To increase a quantity by x%, multiply by (1 + x/100). To decrease by x%, multiply by (1 - x/100).\n\nThe multiplying factor approach is the most efficient method. For example, increasing by 15% uses a factor of 1.15; decreasing by 20% uses a factor of 0.80.",
      keyPoints: ["Increase by x%: new = original × (1 + x/100)", "Decrease by x%: new = original × (1 - x/100)", "% change = ((new - original) / original) × 100"],
      workedExamples: [
        { problem: "A $450 item is increased by 12%. Find the new price.", steps: ["Multiplying factor = 1 + 0.12 = 1.12", "New price = 450 × 1.12 = $504"], answer: "$504" },
        { problem: "A population of 8000 decreases by 5%. Find the new population.", steps: ["Factor = 1 - 0.05 = 0.95", "8000 × 0.95 = 7600"], answer: "7600" }
      ],
      tips: ["The multiplying factor is the quickest method — no need to calculate the change separately."],
      quiz: [
        { question: "Increase $200 by 30%. New amount?", options: ["$230", "$260", "$270", "$300"], correctAnswer: 1, explanation: "200 × 1.30 = $260" },
        { question: "Decrease 500 by 15%. Result?", options: ["425", "485", "375", "450"], correctAnswer: 0, explanation: "500 × 0.85 = 425" },
        { question: "A shirt goes from $80 to $100. % increase?", options: ["20%", "25%", "80%", "125%"], correctAnswer: 1, explanation: "(100-80)/80 × 100 = 25%" }
      ]
    },
    {
      title: "GST (Goods and Services Tax)",
      explanation: "In Australia, GST is 10% added to the price of most goods and services. The price including GST is 1.10 times the pre-GST price.\n\nTo find the pre-GST price from a GST-inclusive price, divide by 1.10. The GST component is the difference between the inclusive and exclusive prices.",
      keyPoints: ["GST rate in Australia = 10%", "Price including GST = pre-GST price × 1.10", "Pre-GST price = GST-inclusive price ÷ 1.10", "GST amount = inclusive price - exclusive price"],
      workedExamples: [
        { problem: "An item costs $150 before GST. What is the price including GST?", steps: ["GST-inclusive = 150 × 1.10 = $165"], answer: "$165" },
        { problem: "A bill is $220 including GST. What is the pre-GST amount?", steps: ["Pre-GST = 220 ÷ 1.10 = $200", "GST amount = 220 - 200 = $20"], answer: "Pre-GST: $200, GST: $20" }
      ],
      tips: ["To find GST from an inclusive price: GST = price ÷ 11 (since 1/11 of the inclusive price is the GST component)."],
      quiz: [
        { question: "Price before GST is $90. Including GST?", options: ["$99", "$100", "$90.10", "$81"], correctAnswer: 0, explanation: "90 × 1.10 = $99" },
        { question: "GST-inclusive price is $330. Pre-GST price?", options: ["$297", "$300", "$363", "$320"], correctAnswer: 1, explanation: "330 ÷ 1.10 = $300" },
        { question: "GST component of a $55 inclusive price?", options: ["$5.50", "$5.00", "$4.50", "$6.00"], correctAnswer: 1, explanation: "55 ÷ 1.10 = 50, GST = 55 - 50 = $5" }
      ]
    },
    {
      title: "Ratio and Proportion",
      explanation: "A ratio compares two or more quantities of the same kind. Ratios can be simplified like fractions by dividing by the highest common factor.\n\nA proportion states that two ratios are equal. Cross-multiplication is the key technique for solving proportions: if a/b = c/d, then ad = bc.",
      keyPoints: ["Ratio a:b means 'a to b'", "Simplify ratios by dividing by HCF", "Proportion: a/b = c/d → ad = bc", "Ratios compare same units only"],
      workedExamples: [
        { problem: "Simplify the ratio 45:60.", steps: ["HCF of 45 and 60 is 15", "45 ÷ 15 : 60 ÷ 15 = 3:4"], answer: "3:4" },
        { problem: "If 3:5 = x:20, find x.", steps: ["3/5 = x/20", "Cross multiply: 3 × 20 = 5x", "60 = 5x, x = 12"], answer: "x = 12" }
      ],
      tips: ["Make sure both quantities have the same units before writing a ratio."],
      quiz: [
        { question: "Simplify 24:36:", options: ["2:3", "4:6", "12:18", "3:2"], correctAnswer: 0, explanation: "HCF = 12. 24÷12 : 36÷12 = 2:3" },
        { question: "4:7 = 12:?", options: ["21", "28", "14", "19"], correctAnswer: 0, explanation: "4/7 = 12/x, x = 12×7/4 = 21" },
        { question: "Ratio of 500mL to 2L:", options: ["1:4", "5:2", "1:2", "500:2"], correctAnswer: 0, explanation: "Convert: 500mL to 2000mL = 1:4" }
      ]
    },
    {
      title: "Dividing Quantities in a Ratio",
      explanation: "To divide a quantity in a given ratio, find the total number of parts, then allocate accordingly.\n\nSteps: (1) Add the parts of the ratio. (2) Divide the total quantity by this sum to find one part. (3) Multiply each ratio component by the value of one part.",
      keyPoints: ["Total parts = sum of ratio numbers", "One part = total ÷ total parts", "Each share = ratio number × one part"],
      workedExamples: [
        { problem: "Divide $600 in the ratio 2:3.", steps: ["Total parts = 2 + 3 = 5", "One part = 600 ÷ 5 = $120", "First share: 2 × 120 = $240", "Second share: 3 × 120 = $360"], answer: "$240 and $360" }
      ],
      tips: ["Always check: the shares should add up to the original total."],
      quiz: [
        { question: "Divide 150 in ratio 1:4. Smaller share?", options: ["30", "37.5", "120", "50"], correctAnswer: 0, explanation: "5 parts, one part = 30. Smaller = 1×30 = 30" },
        { question: "Divide $1000 in ratio 3:2. Larger share?", options: ["$400", "$500", "$600", "$700"], correctAnswer: 2, explanation: "5 parts, one = 200. Larger = 3×200 = $600" },
        { question: "$480 split 1:2:3. Middle share?", options: ["$80", "$160", "$240", "$120"], correctAnswer: 1, explanation: "6 parts, one = 80. Middle = 2×80 = $160" }
      ]
    },
    {
      title: "The Unitary Method",
      explanation: "The unitary method finds the value of one unit first, then scales to find the required amount.\n\nStep 1: Divide to find the value of one item/unit.\nStep 2: Multiply to find the value of the required number of items/units.\n\nThis method works for rate problems, cost comparisons, and best-buy calculations.",
      keyPoints: ["Find the value of ONE unit first", "Then multiply to find the required amount", "Useful for 'best buy' comparisons", "Works with any rate or ratio problem"],
      workedExamples: [
        { problem: "If 5 pens cost $12, how much do 8 pens cost?", steps: ["Cost of 1 pen = 12 ÷ 5 = $2.40", "Cost of 8 pens = 2.40 × 8 = $19.20"], answer: "$19.20" },
        { problem: "Which is better value: 750mL for $3.60 or 1.25L for $5.50?", steps: ["750mL: $3.60 ÷ 750 = $0.0048/mL", "1250mL: $5.50 ÷ 1250 = $0.0044/mL", "1.25L is cheaper per mL"], answer: "1.25L for $5.50 is better value" }
      ],
      tips: ["For best-buy problems, always compare price per unit (per mL, per gram, per item)."],
      quiz: [
        { question: "3 kg costs $15. Cost of 7 kg?", options: ["$30", "$35", "$45", "$21"], correctAnswer: 1, explanation: "1 kg = $5, 7 kg = $35" },
        { question: "200g for $4 or 350g for $6.30. Better value?", options: ["200g", "350g", "Same", "Can't tell"], correctAnswer: 1, explanation: "200g: $0.02/g. 350g: $0.018/g. 350g is cheaper." },
        { question: "8 workers finish in 6 days. How many days for 12 workers?", options: ["4", "9", "3", "2"], correctAnswer: 0, explanation: "Total work = 48 worker-days. 48 ÷ 12 = 4 days." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // INVESTIGATING AND COMPARING DATA DISTRIBUTIONS
  // ═══════════════════════════════════════════════════════════════
  "y11g-data-distributions": [
    {
      title: "Categorical Data",
      explanation: "Categorical data can be divided into groups or categories. There are two types:\n\n• Nominal: categories with no natural order (e.g., colour, gender, suburb)\n• Ordinal: categories with a natural order (e.g., strongly agree → strongly disagree, small/medium/large)\n\nCategorical data is summarised using frequency tables and displayed with bar charts or pie charts.",
      keyPoints: ["Nominal: no natural order", "Ordinal: natural order exists", "Summarise with frequency tables", "Display with bar charts or pie charts"],
      workedExamples: [
        { problem: "Classify: eye colour, education level, favourite sport.", steps: ["Eye colour: nominal (no order)", "Education level: ordinal (primary < secondary < tertiary)", "Favourite sport: nominal (no order)"], answer: "Eye colour: nominal, Education: ordinal, Sport: nominal" }
      ],
      tips: ["Ask: 'Can I rank these categories?' If yes → ordinal. If no → nominal."],
      quiz: [
        { question: "Which is ordinal?", options: ["Hair colour", "Shirt size (S, M, L)", "Suburb", "Car brand"], correctAnswer: 1, explanation: "Shirt sizes have a natural order: S < M < L." },
        { question: "Categorical data is best shown with:", options: ["Histograms", "Boxplots", "Bar charts", "Stem plots"], correctAnswer: 2, explanation: "Bar charts display categorical frequencies." },
        { question: "Favourite food type is:", options: ["Ordinal", "Numerical", "Nominal", "Continuous"], correctAnswer: 2, explanation: "Food types have no natural ordering." }
      ]
    },
    {
      title: "Frequency Tables and Bar Charts",
      explanation: "A frequency table lists each category and how often it occurs. The relative frequency (proportion) is frequency ÷ total.\n\nBar charts display categorical data with bars. Key features:\n• Bars have equal width\n• Gaps between bars (unlike histograms)\n• Height represents frequency or percentage\n• Bars can be vertical or horizontal",
      keyPoints: ["Frequency = count of each category", "Relative frequency = frequency ÷ total", "Bar charts have gaps between bars", "Bars should have equal width"],
      workedExamples: [
        { problem: "25 students: Red=8, Blue=6, Green=5, Yellow=4, Other=2. Find relative frequencies.", steps: ["Red: 8/25 = 0.32", "Blue: 6/25 = 0.24", "Green: 5/25 = 0.20", "Yellow: 4/25 = 0.16", "Other: 2/25 = 0.08", "Total: 1.00 ✓"], answer: "Red 32%, Blue 24%, Green 20%, Yellow 16%, Other 8%" }
      ],
      tips: ["All relative frequencies must sum to 1 (or percentages to 100%)."],
      quiz: [
        { question: "30 people: A=12, B=10, C=8. Relative frequency of A?", options: ["0.30", "0.40", "0.12", "12"], correctAnswer: 1, explanation: "12/30 = 0.40" },
        { question: "Bar charts differ from histograms because:", options: ["They use colours", "Bars don't touch", "They show continuous data", "No axis labels"], correctAnswer: 1, explanation: "Bar charts have gaps; histograms don't." },
        { question: "Sum of all relative frequencies equals:", options: ["0", "0.5", "1", "100"], correctAnswer: 2, explanation: "All proportions must sum to 1." }
      ]
    },
    {
      title: "Numerical Data: Dot Plots and Stem Plots",
      explanation: "Numerical data takes number values and can be discrete (countable) or continuous (measurable).\n\nDot plots place a dot above a number line for each data value. They work best for small data sets.\n\nStem-and-leaf plots (stem plots) split each value into a stem and leaf. They preserve individual values while showing the shape of the distribution.",
      keyPoints: ["Discrete: countable whole numbers", "Continuous: measured values (decimals possible)", "Dot plots: dots above number line", "Stem plots: stem = leading digits, leaf = last digit"],
      workedExamples: [
        { problem: "Create a stem plot for: 23, 25, 31, 34, 35, 38, 41, 42, 47.", steps: ["Stems: 2, 3, 4", "2 | 3 5", "3 | 1 4 5 8", "4 | 1 2 7"], answer: "Stem plot with stems 2, 3, 4 and ordered leaves" }
      ],
      tips: ["Leaves must be in order (smallest to largest). Include a key, e.g., 2|3 = 23."],
      quiz: [
        { question: "In a stem plot, 4|7 represents:", options: ["47", "4.7", "74", "4 and 7"], correctAnswer: 0, explanation: "Stem 4, leaf 7 → 47" },
        { question: "Number of pets owned is:", options: ["Continuous", "Categorical", "Discrete", "Ordinal"], correctAnswer: 2, explanation: "Whole number count → discrete." },
        { question: "Dot plots are best for:", options: ["Large data sets", "Small data sets", "Categorical data", "Bivariate data"], correctAnswer: 1, explanation: "Dot plots become cluttered with large data sets." }
      ]
    },
    {
      title: "Measures of Centre",
      explanation: "Measures of centre describe the 'typical' value in a data set.\n\n• Mean = sum of all values ÷ number of values\n• Median = middle value when data is ordered\n• Mode = most frequent value\n\nThe mean is affected by outliers; the median is more resistant. Use the median for skewed distributions.",
      keyPoints: ["Mean = Σx / n", "Median = middle value (order first!)", "Mode = most common value", "Mean is sensitive to outliers; median is resistant"],
      workedExamples: [
        { problem: "Find the mean, median, and mode of: 3, 5, 5, 7, 8, 9, 15.", steps: ["Mean = (3+5+5+7+8+9+15)/7 = 52/7 ≈ 7.4", "Median = 4th value = 7 (already ordered)", "Mode = 5 (appears twice)"], answer: "Mean ≈ 7.4, Median = 7, Mode = 5" }
      ],
      tips: ["Always order data before finding the median. For even-sized data, average the two middle values."],
      quiz: [
        { question: "Mean of 2, 4, 6, 8, 10:", options: ["5", "6", "7", "8"], correctAnswer: 1, explanation: "30/5 = 6" },
        { question: "Median of 1, 3, 7, 9:", options: ["3", "5", "7", "4"], correctAnswer: 1, explanation: "Even count: (3+7)/2 = 5" },
        { question: "Which is NOT affected by outliers?", options: ["Mean", "Median", "Sum", "Range"], correctAnswer: 1, explanation: "Median is resistant to extreme values." }
      ]
    },
    {
      title: "Measures of Spread",
      explanation: "Spread describes how much the data values vary from each other.\n\n• Range = maximum - minimum (simplest but affected by outliers)\n• IQR (Interquartile Range) = Q3 - Q1 (spread of the middle 50%)\n\nQ1 is the median of the lower half; Q3 is the median of the upper half. The IQR is resistant to outliers.",
      keyPoints: ["Range = max - min", "Q1 = median of lower half", "Q3 = median of upper half", "IQR = Q3 - Q1 (middle 50%)"],
      workedExamples: [
        { problem: "Find range and IQR: 2, 4, 5, 7, 8, 10, 12, 15.", steps: ["Range = 15 - 2 = 13", "Lower half: 2, 4, 5, 7 → Q1 = (4+5)/2 = 4.5", "Upper half: 8, 10, 12, 15 → Q3 = (10+12)/2 = 11", "IQR = 11 - 4.5 = 6.5"], answer: "Range = 13, IQR = 6.5" }
      ],
      tips: ["IQR is more reliable than range because it ignores extreme values."],
      quiz: [
        { question: "Range of 3, 5, 8, 12, 20:", options: ["17", "15", "12", "8"], correctAnswer: 0, explanation: "20 - 3 = 17" },
        { question: "IQR measures the spread of:", options: ["All data", "Top 25%", "Middle 50%", "Bottom 50%"], correctAnswer: 2, explanation: "Q1 to Q3 contains the middle 50%." },
        { question: "An outlier most affects the:", options: ["IQR", "Median", "Range", "Mode"], correctAnswer: 2, explanation: "Range uses max and min, which outliers change." }
      ]
    },
    {
      title: "Standard Deviation",
      explanation: "Standard deviation (s) measures the average distance of data points from the mean. A larger standard deviation means more spread.\n\nFor a sample: s = √[Σ(xᵢ - x̄)² / (n - 1)]\n\nIn practice, use your calculator's statistics mode. Interpret standard deviation in context: a standard deviation of 5 marks on a test means scores typically vary by about 5 marks from the mean.",
      keyPoints: ["s measures average distance from the mean", "Larger s = more spread out", "s = 0 means all values are identical", "Use calculator for computation"],
      workedExamples: [
        { problem: "Data: 4, 6, 8, 10, 12. Mean = 8. Find standard deviation.", steps: ["Deviations: -4, -2, 0, 2, 4", "Squared: 16, 4, 0, 4, 16", "Sum = 40", "Variance = 40/4 = 10 (using n-1)", "s = √10 ≈ 3.16"], answer: "s ≈ 3.16" }
      ],
      tips: ["On CAS calculators, use 1-Var Stats to compute standard deviation automatically."],
      quiz: [
        { question: "Standard deviation measures:", options: ["Centre", "Spread", "Skewness", "Shape"], correctAnswer: 1, explanation: "It measures how spread out data is from the mean." },
        { question: "If all data values are the same, s =", options: ["1", "The mean", "0", "Undefined"], correctAnswer: 2, explanation: "No variation → s = 0." },
        { question: "A larger standard deviation means:", options: ["More clustered", "More spread out", "Higher values", "More data"], correctAnswer: 1, explanation: "Larger s = data more spread from the mean." }
      ]
    },
    {
      title: "Boxplots",
      explanation: "A boxplot (box-and-whisker plot) displays the five-number summary: minimum, Q1, median, Q3, maximum.\n\nThe box spans Q1 to Q3 (IQR). A line inside the box marks the median. Whiskers extend to the min and max (or to 1.5 × IQR, with outliers shown as dots).\n\nBoxplots are excellent for comparing distributions side by side.",
      keyPoints: ["Five-number summary: min, Q1, median, Q3, max", "Box = Q1 to Q3 (IQR)", "Line in box = median", "Outliers: beyond Q1 - 1.5×IQR or Q3 + 1.5×IQR"],
      workedExamples: [
        { problem: "Five-number summary: 5, 12, 18, 25, 40. Describe the boxplot.", steps: ["Min = 5, Q1 = 12, Median = 18, Q3 = 25, Max = 40", "Box from 12 to 25, line at 18", "Left whisker to 5, right whisker to 40", "IQR = 13, 1.5×IQR = 19.5", "Upper fence = 25 + 19.5 = 44.5 → 40 is within → no outliers"], answer: "Boxplot with box 12–25, median 18, whiskers 5–40, no outliers" }
      ],
      tips: ["To identify outliers: any value below Q1 - 1.5×IQR or above Q3 + 1.5×IQR is an outlier."],
      quiz: [
        { question: "The box in a boxplot represents:", options: ["All data", "The IQR", "Min to max", "Mean ± s"], correctAnswer: 1, explanation: "The box spans Q1 to Q3 = IQR." },
        { question: "The line inside the box is the:", options: ["Mean", "Mode", "Median", "Range"], correctAnswer: 2, explanation: "The line marks the median." },
        { question: "An outlier is a point beyond:", options: ["The mean", "Q1-1.5×IQR or Q3+1.5×IQR", "The median", "The mode"], correctAnswer: 1, explanation: "Standard outlier fences are 1.5 × IQR from Q1 and Q3." }
      ]
    },
    {
      title: "Comparing Distributions",
      explanation: "When comparing data sets, comment on:\n\n1. Shape: symmetric, positively skewed, negatively skewed\n2. Centre: compare means or medians\n3. Spread: compare ranges, IQRs, or standard deviations\n4. Outliers: note any unusual values\n\nUse parallel boxplots or back-to-back stem plots for visual comparison. Always refer to context in your comparisons.",
      keyPoints: ["Compare: shape, centre, spread, outliers", "Use median and IQR for skewed data", "Use mean and s for symmetric data", "Always refer to context"],
      workedExamples: [
        { problem: "Class A: median 65, IQR 15, range 50. Class B: median 72, IQR 22, range 60. Compare.", steps: ["Centre: Class B has higher median (72 vs 65)", "Spread: Class B is more spread (IQR 22 vs 15)", "Class B scored higher on average but with more variation"], answer: "Class B scored higher (median 72 vs 65) but with more variability (IQR 22 vs 15)." }
      ],
      tips: ["Always use a structured approach: shape → centre → spread → outliers → context."],
      quiz: [
        { question: "Positively skewed data has:", options: ["Tail to the left", "Tail to the right", "Symmetric shape", "No tail"], correctAnswer: 1, explanation: "Positive skew = tail stretches right (toward higher values)." },
        { question: "For skewed data, the better measure of centre is:", options: ["Mean", "Mode", "Median", "Range"], correctAnswer: 2, explanation: "Median is resistant to skew; mean is pulled by the tail." },
        { question: "When comparing, always mention:", options: ["Colours", "Context", "Sample size only", "Axis labels"], correctAnswer: 1, explanation: "Comparisons must reference what the data represents." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // SEQUENCES AND FINANCE
  // ═══════════════════════════════════════════════════════════════
  "y11g-sequences-finance": [
    {
      title: "Number Patterns and Recurrence Relations",
      explanation: "A sequence is an ordered list of numbers following a rule. A recurrence relation defines each term using the previous term(s).\n\nGeneral form: tₙ₊₁ = f(tₙ) where t₁ is given.\n\nFor example, tₙ₊₁ = tₙ + 3 with t₁ = 2 gives: 2, 5, 8, 11, 14, …",
      keyPoints: ["Sequence: ordered list following a rule", "Recurrence relation: each term from the previous", "Need a starting value (t₁) and a rule", "tₙ₊₁ = tₙ + d gives arithmetic sequence"],
      workedExamples: [
        { problem: "t₁ = 5, tₙ₊₁ = 2tₙ - 1. Find t₂, t₃, t₄.", steps: ["t₂ = 2(5) - 1 = 9", "t₃ = 2(9) - 1 = 17", "t₄ = 2(17) - 1 = 33"], answer: "t₂ = 9, t₃ = 17, t₄ = 33" }
      ],
      tips: ["Write each term step by step — don't try to jump ahead."],
      quiz: [
        { question: "t₁ = 3, tₙ₊₁ = tₙ + 4. What is t₃?", options: ["7", "11", "15", "9"], correctAnswer: 1, explanation: "t₂ = 7, t₃ = 11" },
        { question: "A recurrence relation needs:", options: ["A formula only", "A starting value and a rule", "Just a graph", "Two formulas"], correctAnswer: 1, explanation: "You need t₁ and the rule to generate terms." },
        { question: "t₁ = 10, tₙ₊₁ = tₙ/2. What is t₃?", options: ["5", "2.5", "1.25", "20"], correctAnswer: 1, explanation: "t₂ = 5, t₃ = 2.5" }
      ]
    },
    {
      title: "Arithmetic Sequences",
      explanation: "An arithmetic sequence has a constant difference (d) between consecutive terms.\n\ntₙ = a + (n-1)d where a = first term, d = common difference.\n\nSum of n terms: Sₙ = n/2 × (2a + (n-1)d) or Sₙ = n/2 × (a + l) where l is the last term.",
      keyPoints: ["Common difference d = tₙ₊₁ - tₙ", "nth term: tₙ = a + (n-1)d", "Sum: Sₙ = n/2 × (first + last)", "d > 0 → increasing, d < 0 → decreasing"],
      workedExamples: [
        { problem: "Find the 20th term of 5, 8, 11, 14, …", steps: ["a = 5, d = 3", "t₂₀ = 5 + (20-1)(3) = 5 + 57 = 62"], answer: "t₂₀ = 62" },
        { problem: "Find the sum of the first 10 terms of 2, 5, 8, …", steps: ["a = 2, d = 3, n = 10", "t₁₀ = 2 + 9(3) = 29", "S₁₀ = 10/2 × (2 + 29) = 5 × 31 = 155"], answer: "S₁₀ = 155" }
      ],
      tips: ["Always identify a and d first, then substitute into the formula."],
      quiz: [
        { question: "Common difference of 7, 3, -1, -5:", options: ["4", "-4", "3", "-3"], correctAnswer: 1, explanation: "3 - 7 = -4" },
        { question: "t₁ = 10, d = -2. What is t₆?", options: ["0", "2", "-2", "20"], correctAnswer: 0, explanation: "t₆ = 10 + 5(-2) = 0" },
        { question: "Sum of 1+2+3+…+100:", options: ["5000", "5050", "10000", "10100"], correctAnswer: 1, explanation: "S = 100/2 × (1+100) = 5050" }
      ]
    },
    {
      title: "Geometric Sequences",
      explanation: "A geometric sequence has a constant ratio (r) between consecutive terms.\n\ntₙ = ar^(n-1) where a = first term, r = common ratio.\n\nSum of n terms: Sₙ = a(rⁿ - 1)/(r - 1) when r ≠ 1.\n\nIf |r| < 1, the terms decrease toward zero. If |r| > 1, the terms grow.",
      keyPoints: ["Common ratio r = tₙ₊₁ / tₙ", "nth term: tₙ = ar^(n-1)", "Sum: Sₙ = a(rⁿ - 1)/(r - 1)", "|r| < 1 → decreasing, |r| > 1 → increasing"],
      workedExamples: [
        { problem: "Find t₅ of the sequence 3, 6, 12, 24, …", steps: ["a = 3, r = 2", "t₅ = 3 × 2⁴ = 3 × 16 = 48"], answer: "t₅ = 48" }
      ],
      tips: ["Check r by dividing any term by the previous term."],
      quiz: [
        { question: "Common ratio of 5, 15, 45, 135:", options: ["3", "10", "5", "30"], correctAnswer: 0, explanation: "15/5 = 3" },
        { question: "t₁ = 4, r = 1/2. What is t₄?", options: ["2", "1", "0.5", "8"], correctAnswer: 2, explanation: "t₄ = 4 × (1/2)³ = 4/8 = 0.5" },
        { question: "A geometric sequence with |r| < 1:", options: ["Grows forever", "Approaches zero", "Stays constant", "Alternates"], correctAnswer: 1, explanation: "Terms get smaller and approach 0." }
      ]
    },
    {
      title: "Finance: Simple and Compound Interest",
      explanation: "Simple interest: I = PRT/100 where P = principal, R = rate per year, T = time in years. Interest is calculated on the original amount only.\n\nCompound interest: A = P(1 + r/100)ⁿ where n = number of compounding periods. Interest is earned on the accumulated total, creating exponential growth.",
      keyPoints: ["Simple: I = PRT/100, grows linearly", "Compound: A = P(1 + r/100)ⁿ, grows exponentially", "Compound earns 'interest on interest'", "More frequent compounding → more interest"],
      workedExamples: [
        { problem: "Invest $5000 at 4% compound interest for 3 years.", steps: ["A = 5000(1 + 4/100)³", "= 5000(1.04)³", "= 5000 × 1.124864", "= $5624.32"], answer: "$5624.32" }
      ],
      tips: ["Use recurrence relation: Aₙ₊₁ = 1.04 × Aₙ for year-by-year calculation."],
      quiz: [
        { question: "Simple interest on $2000 at 5% for 3 years:", options: ["$300", "$250", "$150", "$500"], correctAnswer: 0, explanation: "I = 2000 × 0.05 × 3 = $300" },
        { question: "Compound interest grows:", options: ["Linearly", "Exponentially", "Not at all", "Constantly"], correctAnswer: 1, explanation: "Interest on interest creates exponential growth." },
        { question: "$1000 at 10% compound for 2 years:", options: ["$1200", "$1210", "$1100", "$1201"], correctAnswer: 1, explanation: "1000 × 1.1² = 1000 × 1.21 = $1210" }
      ]
    },
    {
      title: "Depreciation and Reducing Balance",
      explanation: "Depreciation models how assets lose value over time. Flat-rate depreciation reduces by a fixed amount each year (arithmetic). Reducing-balance depreciation reduces by a fixed percentage each year (geometric).\n\nFlat rate: Vₙ = V₀ - nd\nReducing balance: Vₙ = V₀(1 - r/100)ⁿ",
      keyPoints: ["Flat rate: linear decrease", "Reducing balance: exponential decrease", "Reducing balance: Vₙ = V₀(1-r/100)ⁿ", "Asset value never truly reaches zero with reducing balance"],
      workedExamples: [
        { problem: "Car worth $30,000 depreciates at 15% p.a. reducing balance. Value after 4 years?", steps: ["V₄ = 30000(1 - 0.15)⁴", "= 30000(0.85)⁴", "= 30000 × 0.52200625", "≈ $15,660.19"], answer: "≈ $15,660" }
      ],
      tips: ["Reducing balance depreciation is a geometric sequence with r < 1."],
      quiz: [
        { question: "$20,000 flat depreciation $2000/year. Value after 5 years?", options: ["$10,000", "$12,000", "$8,000", "$15,000"], correctAnswer: 0, explanation: "20000 - 5(2000) = $10,000" },
        { question: "Reducing balance depreciation is:", options: ["Linear", "Exponential", "Constant", "Quadratic"], correctAnswer: 1, explanation: "Fixed percentage each year = exponential decay." },
        { question: "$50,000 at 20% reducing balance. After 1 year?", options: ["$40,000", "$30,000", "$45,000", "$10,000"], correctAnswer: 0, explanation: "50000 × 0.80 = $40,000" }
      ]
    },
    {
      title: "Growth and Decay Modelling",
      explanation: "Many real-world situations follow exponential growth or decay patterns.\n\nGrowth: A = A₀(1 + r)ⁿ (population growth, investments)\nDecay: A = A₀(1 - r)ⁿ (depreciation, radioactive decay)\n\nThese can be modelled using recurrence relations or explicit formulas.",
      keyPoints: ["Growth factor > 1 → exponential growth", "Decay factor < 1 → exponential decay", "A = A₀ × (factor)ⁿ", "Recurrence: Aₙ₊₁ = factor × Aₙ"],
      workedExamples: [
        { problem: "Population of 5000 grows 3% per year. Population after 10 years?", steps: ["A = 5000(1.03)¹⁰", "= 5000 × 1.34392", "≈ 6720"], answer: "≈ 6720" }
      ],
      tips: ["Growth → multiply by (1 + r). Decay → multiply by (1 - r)."],
      quiz: [
        { question: "1000 bacteria double every hour. After 5 hours?", options: ["5000", "10000", "32000", "16000"], correctAnswer: 2, explanation: "1000 × 2⁵ = 32,000" },
        { question: "Decay factor of 8% loss:", options: ["0.08", "1.08", "0.92", "0.8"], correctAnswer: 2, explanation: "1 - 0.08 = 0.92" },
        { question: "A quantity halving each year has factor:", options: ["2", "0.5", "1.5", "0.25"], correctAnswer: 1, explanation: "Halving = multiplying by 0.5." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // MATRICES
  // ═══════════════════════════════════════════════════════════════
  "y11g-matrices": [
    {
      title: "Basics of Matrices",
      explanation: "A matrix is a rectangular array of numbers arranged in rows and columns. The size (order) is written as rows × columns.\n\nA 2×3 matrix has 2 rows and 3 columns. Elements are referenced by position: aᵢⱼ is in row i, column j.",
      keyPoints: ["Order = rows × columns", "Element aᵢⱼ: row i, column j", "Square matrix: same number of rows and columns", "Row matrix: 1 row. Column matrix: 1 column"],
      workedExamples: [
        { problem: "State the order and identify element a₂₃ of [[1,2,3],[4,5,6]].", steps: ["2 rows, 3 columns → 2×3", "a₂₃ = row 2, column 3 = 6"], answer: "Order: 2×3, a₂₃ = 6" }
      ],
      tips: ["Remember: rows first, columns second (RC = Roman Catholic helps some students remember)."],
      quiz: [
        { question: "A 3×2 matrix has:", options: ["3 columns, 2 rows", "3 rows, 2 columns", "6 rows", "5 elements"], correctAnswer: 1, explanation: "Rows × columns: 3 rows, 2 columns." },
        { question: "How many elements in a 4×3 matrix?", options: ["7", "12", "43", "34"], correctAnswer: 1, explanation: "4 × 3 = 12 elements." },
        { question: "A square matrix has:", options: ["All zeros", "Equal rows and columns", "One row", "One column"], correctAnswer: 1, explanation: "Square: rows = columns." }
      ]
    },
    {
      title: "Matrix Addition and Subtraction",
      explanation: "Matrices can only be added or subtracted if they have the same order. Add/subtract corresponding elements.\n\nA + B: add each aᵢⱼ + bᵢⱼ\nA - B: subtract each aᵢⱼ - bᵢⱼ",
      keyPoints: ["Same order required", "Add/subtract corresponding elements", "Result has same order as originals", "Commutative: A + B = B + A"],
      workedExamples: [
        { problem: "[[1,2],[3,4]] + [[5,6],[7,8]]", steps: ["[1+5, 2+6] = [6, 8]", "[3+7, 4+8] = [10, 12]"], answer: "[[6,8],[10,12]]" }
      ],
      tips: ["If orders don't match, the operation is undefined."],
      quiz: [
        { question: "Can you add a 2×3 and a 3×2 matrix?", options: ["Yes", "No", "Sometimes", "Only if square"], correctAnswer: 1, explanation: "Different orders → undefined." },
        { question: "[[3,1]] + [[2,4]] =", options: ["[[5,5]]", "[[1,-3]]", "[[6,4]]", "Undefined"], correctAnswer: 0, explanation: "3+2=5, 1+4=5." },
        { question: "Matrix addition is commutative means:", options: ["Order matters", "A+B = B+A", "Only square matrices", "A+B = AB"], correctAnswer: 1, explanation: "A+B = B+A for matrices." }
      ]
    },
    {
      title: "Scalar Multiplication",
      explanation: "Multiplying a matrix by a scalar (number) means multiplying every element by that number.\n\nkA: multiply each element of A by k.",
      keyPoints: ["Multiply every element by the scalar", "Result has same order", "k(A + B) = kA + kB", "(k + l)A = kA + lA"],
      workedExamples: [
        { problem: "3 × [[2, -1],[0, 4]]", steps: ["[3×2, 3×(-1)] = [6, -3]", "[3×0, 3×4] = [0, 12]"], answer: "[[6,-3],[0,12]]" }
      ],
      tips: ["Scalar multiplication is straightforward — just multiply every element."],
      quiz: [
        { question: "2 × [[1,3],[5,7]] =", options: ["[[2,6],[10,14]]", "[[3,5],[7,9]]", "[[1,3],[5,7]]", "[[2,3],[5,7]]"], correctAnswer: 0, explanation: "Multiply each element by 2." },
        { question: "0 × any matrix =", options: ["The same matrix", "Identity matrix", "Zero matrix", "Undefined"], correctAnswer: 2, explanation: "0 times anything is zero." },
        { question: "-1 × A gives:", options: ["A", "-A (negated elements)", "0", "A²"], correctAnswer: 1, explanation: "Every element is negated." }
      ]
    },
    {
      title: "Matrix Multiplication",
      explanation: "To multiply matrices A(m×n) and B(n×p), the number of columns of A must equal the number of rows of B. The result is m×p.\n\nElement cᵢⱼ = sum of (row i of A) × (column j of B).\n\nMatrix multiplication is NOT commutative: AB ≠ BA in general.",
      keyPoints: ["Columns of A = rows of B required", "Result order: (rows of A) × (columns of B)", "Multiply row by column, sum products", "NOT commutative: AB ≠ BA generally"],
      workedExamples: [
        { problem: "[[1,2],[3,4]] × [[5],[6]]", steps: ["Row 1: 1×5 + 2×6 = 5+12 = 17", "Row 2: 3×5 + 4×6 = 15+24 = 39"], answer: "[[17],[39]]" }
      ],
      tips: ["Check dimensions first: (m×n)(n×p) → m×p. If inner numbers don't match, multiplication is undefined."],
      quiz: [
        { question: "(2×3)(3×4) gives order:", options: ["2×4", "3×3", "2×3", "3×4"], correctAnswer: 0, explanation: "Outer dimensions: 2×4." },
        { question: "Can you multiply (2×3)(2×3)?", options: ["Yes", "No"], correctAnswer: 1, explanation: "Columns of first (3) ≠ rows of second (2)." },
        { question: "AB = BA is:", options: ["Always true", "Never true", "Sometimes true", "Only for identity"], correctAnswer: 2, explanation: "Only special cases like identity matrix." }
      ]
    },
    {
      title: "Inverse Matrices",
      explanation: "The inverse of a square matrix A, written A⁻¹, satisfies AA⁻¹ = A⁻¹A = I (identity matrix).\n\nFor a 2×2 matrix [[a,b],[c,d]]:\nA⁻¹ = (1/det) × [[d,-b],[-c,a]] where det = ad - bc.\n\nIf det = 0, the matrix has no inverse (singular).",
      keyPoints: ["AA⁻¹ = I (identity matrix)", "det(A) = ad - bc for 2×2", "If det = 0, no inverse exists", "A⁻¹ = (1/det)[[d,-b],[-c,a]]"],
      workedExamples: [
        { problem: "Find the inverse of [[3,1],[5,2]].", steps: ["det = 3(2) - 1(5) = 6-5 = 1", "A⁻¹ = 1/1 × [[2,-1],[-5,3]]", "= [[2,-1],[-5,3]]"], answer: "A⁻¹ = [[2,-1],[-5,3]]" }
      ],
      tips: ["Swap a and d, negate b and c, divide by determinant."],
      quiz: [
        { question: "det of [[4,3],[2,1]]:", options: ["-2", "2", "10", "-10"], correctAnswer: 0, explanation: "4(1) - 3(2) = 4-6 = -2" },
        { question: "If det = 0, the matrix is:", options: ["Invertible", "Singular", "Zero", "Identity"], correctAnswer: 1, explanation: "det = 0 means no inverse — the matrix is singular." },
        { question: "A × A⁻¹ =", options: ["A²", "0", "I (identity)", "A"], correctAnswer: 2, explanation: "By definition, AA⁻¹ = identity matrix." }
      ]
    },
    {
      title: "Applications of Matrices",
      explanation: "Matrices model real-world situations:\n\n• Communication networks: adjacency matrices show connections\n• Transition matrices: model state changes (e.g., market share)\n• Solving systems of equations: AX = B → X = A⁻¹B\n• Cost/quantity calculations: multiply price × quantity matrices",
      keyPoints: ["Adjacency matrix: 1 if connected, 0 if not", "A² gives number of 2-step paths", "AX = B solved by X = A⁻¹B", "Practical applications in business and networks"],
      workedExamples: [
        { problem: "Solve using matrices: 2x + y = 8, 3x + 2y = 14.", steps: ["A = [[2,1],[3,2]], X = [[x],[y]], B = [[8],[14]]", "det = 4-3 = 1", "A⁻¹ = [[2,-1],[-3,2]]", "X = A⁻¹B = [[2(8)+(-1)(14)],[(-3)(8)+2(14)]] = [[2],[2]]"], answer: "x = 2, y = 4" }
      ],
      tips: ["For solving equations, set up AX = B carefully — A is the coefficient matrix."],
      quiz: [
        { question: "In an adjacency matrix, 1 means:", options: ["No connection", "Direct connection exists", "Two steps", "Weight"], correctAnswer: 1, explanation: "1 indicates a direct connection between nodes." },
        { question: "A² shows paths of length:", options: ["1", "2", "3", "Any"], correctAnswer: 1, explanation: "A² counts 2-step paths." },
        { question: "To solve AX = B:", options: ["X = AB", "X = A⁻¹B", "X = BA", "X = B/A"], correctAnswer: 1, explanation: "Multiply both sides by A⁻¹: X = A⁻¹B." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LINEAR RELATIONS AND MODELLING
  // ═══════════════════════════════════════════════════════════════
  "y11g-linear-relations": [
    {
      title: "Substitution and Formulas",
      explanation: "Substitution means replacing a variable with a value. This is fundamental to evaluating formulas.\n\nAlways follow the order of operations (BODMAS/BIDMAS) when substituting.",
      keyPoints: ["Replace variables with given values", "Follow order of operations", "Show all working", "Check units match"],
      workedExamples: [
        { problem: "If A = πr², find A when r = 5.", steps: ["A = π(5)²", "= 25π", "≈ 78.54"], answer: "A ≈ 78.54 square units" }
      ],
      tips: ["Use brackets when substituting negative numbers: e.g., (-3)² = 9, not -3² = -9."],
      quiz: [
        { question: "V = lwh. If l=3, w=4, h=5, V=?", options: ["12", "60", "35", "20"], correctAnswer: 1, explanation: "3×4×5 = 60" },
        { question: "y = 2x² - 3. When x = -2, y =?", options: ["5", "1", "-7", "11"], correctAnswer: 0, explanation: "2(4) - 3 = 5" },
        { question: "C = 5(F-32)/9. When F=212, C=?", options: ["100", "180", "32", "0"], correctAnswer: 0, explanation: "5(180)/9 = 100" }
      ]
    },
    {
      title: "Solving Linear Equations",
      explanation: "To solve a linear equation, isolate the variable using inverse operations. Whatever you do to one side, do to the other.\n\nFor equations with brackets, expand first. For equations with fractions, multiply through by the LCM of denominators.",
      keyPoints: ["Inverse operations: +↔−, ×↔÷", "Expand brackets first", "Collect like terms", "Check by substituting back"],
      workedExamples: [
        { problem: "Solve: 3(2x - 1) = 4x + 9", steps: ["Expand: 6x - 3 = 4x + 9", "6x - 4x = 9 + 3", "2x = 12", "x = 6"], answer: "x = 6" }
      ],
      tips: ["Always check your answer by substituting back into the original equation."],
      quiz: [
        { question: "Solve: 5x - 7 = 18", options: ["x = 5", "x = 2.2", "x = 25", "x = 11"], correctAnswer: 0, explanation: "5x = 25, x = 5" },
        { question: "Solve: 2(x+3) = 5x", options: ["x = 2", "x = -2", "x = 6", "x = 1"], correctAnswer: 0, explanation: "2x+6 = 5x, 6 = 3x, x = 2" },
        { question: "Solve: x/3 + 2 = 5", options: ["x = 1", "x = 9", "x = 21", "x = 3"], correctAnswer: 1, explanation: "x/3 = 3, x = 9" }
      ]
    },
    {
      title: "Straight-Line Graphs",
      explanation: "The equation of a straight line is y = mx + c where m = gradient and c = y-intercept.\n\nGradient = rise/run = (y₂-y₁)/(x₂-x₁). To plot, find two points and connect.",
      keyPoints: ["y = mx + c: m = gradient, c = y-intercept", "Gradient = rise/run", "Positive gradient: slopes up", "Negative gradient: slopes down"],
      workedExamples: [
        { problem: "Find the equation of the line through (1, 3) and (4, 9).", steps: ["m = (9-3)/(4-1) = 6/3 = 2", "y = 2x + c, substitute (1,3): 3 = 2(1) + c → c = 1", "y = 2x + 1"], answer: "y = 2x + 1" }
      ],
      tips: ["To find the y-intercept, set x = 0. To find the x-intercept, set y = 0."],
      quiz: [
        { question: "Gradient of y = -3x + 7:", options: ["7", "3", "-3", "-7"], correctAnswer: 2, explanation: "Coefficient of x = -3." },
        { question: "Y-intercept of y = 4x - 5:", options: ["4", "-5", "5", "-4"], correctAnswer: 1, explanation: "c = -5." },
        { question: "A horizontal line has gradient:", options: ["1", "Undefined", "0", "-1"], correctAnswer: 2, explanation: "No rise → gradient = 0." }
      ]
    },
    {
      title: "Simultaneous Equations",
      explanation: "Two equations with two unknowns can be solved simultaneously using substitution or elimination. The solution is the intersection point of two lines.",
      keyPoints: ["Substitution: solve one equation for a variable, substitute", "Elimination: make coefficients match, add/subtract", "Solution = intersection point", "Check answer in both equations"],
      workedExamples: [
        { problem: "Solve: x + 2y = 10 and 3x - y = 5", steps: ["From eq1: x = 10 - 2y", "Substitute: 3(10-2y) - y = 5", "30 - 6y - y = 5", "7y = 25, y = 25/7 ≈ 3.57", "x = 10 - 2(25/7) = 20/7 ≈ 2.86"], answer: "x = 20/7, y = 25/7" }
      ],
      tips: ["Choose the method that looks simplest for the given equations."],
      quiz: [
        { question: "Solve: x + y = 8, x - y = 2. What is x?", options: ["3", "5", "6", "4"], correctAnswer: 1, explanation: "Add: 2x = 10, x = 5." },
        { question: "Parallel lines have:", options: ["One solution", "No solution", "Infinite solutions", "Two solutions"], correctAnswer: 1, explanation: "Parallel lines never intersect." },
        { question: "Same line has:", options: ["One solution", "No solution", "Infinite solutions", "Two solutions"], correctAnswer: 2, explanation: "Identical lines share all points." }
      ]
    },
    {
      title: "Linear Modelling",
      explanation: "Linear models describe relationships where one variable changes at a constant rate relative to another. The equation y = mx + c models these situations where m is the rate of change and c is the initial value.",
      keyPoints: ["m = rate of change (per unit)", "c = initial/starting value", "Identify variables from context", "State domain restrictions if applicable"],
      workedExamples: [
        { problem: "A plumber charges $80 callout plus $60/hour. Write the cost equation and find cost for 3 hours.", steps: ["C = 60t + 80 where t = hours", "C(3) = 60(3) + 80 = 180 + 80 = $260"], answer: "C = 60t + 80; Cost for 3 hours = $260" }
      ],
      tips: ["The fixed cost is the y-intercept; the rate is the gradient."],
      quiz: [
        { question: "Taxi: $3 flag fall + $2.50/km. Cost for 10km?", options: ["$25", "$28", "$30", "$25.50"], correctAnswer: 1, explanation: "3 + 2.50(10) = $28" },
        { question: "In C = 15n + 200, what is 200?", options: ["Rate per item", "Fixed cost", "Total cost", "Number of items"], correctAnswer: 1, explanation: "200 is the constant — the fixed cost." },
        { question: "The gradient represents:", options: ["Starting value", "Total", "Rate of change", "Maximum"], correctAnswer: 2, explanation: "m = how much y changes per unit of x." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // INVESTIGATING RELATIONSHIPS BETWEEN VARIABLES
  // ═══════════════════════════════════════════════════════════════
  "y11g-relationships-variables": [
    {
      title: "Scatterplots",
      explanation: "A scatterplot displays the relationship between two numerical variables. Each point represents a pair of values (x, y).\n\nThe explanatory (independent) variable goes on the x-axis; the response (dependent) variable on the y-axis.",
      keyPoints: ["x-axis: explanatory variable", "y-axis: response variable", "Each dot = one data pair", "Look for patterns: linear, non-linear, no association"],
      workedExamples: [
        { problem: "Describe a scatterplot showing study hours vs test marks with points trending upward.", steps: ["Direction: positive (upward trend)", "Form: roughly linear", "Strength: moderate (points not too scattered)", "Outliers: check for any isolated points"], answer: "Positive, linear association of moderate strength" }
      ],
      tips: ["Always describe direction, form, strength, and outliers."],
      quiz: [
        { question: "Points trending downward show:", options: ["Positive association", "Negative association", "No association", "Perfect correlation"], correctAnswer: 1, explanation: "Downward = negative association." },
        { question: "The response variable goes on:", options: ["x-axis", "y-axis", "Either axis", "Neither"], correctAnswer: 1, explanation: "Response/dependent variable on y-axis." },
        { question: "Scattered points with no pattern show:", options: ["Strong association", "Weak association", "No association", "Negative association"], correctAnswer: 2, explanation: "Random scatter = no association." }
      ]
    },
    {
      title: "Correlation",
      explanation: "Pearson's correlation coefficient (r) measures the strength and direction of a linear relationship.\n\n• r = 1: perfect positive linear\n• r = -1: perfect negative linear\n• r = 0: no linear relationship\n• |r| > 0.8: strong, 0.5–0.8: moderate, < 0.5: weak",
      keyPoints: ["-1 ≤ r ≤ 1", "Sign shows direction", "Magnitude shows strength", "Correlation ≠ causation"],
      workedExamples: [
        { problem: "r = -0.85. Describe the association.", steps: ["Sign is negative: negative association", "|r| = 0.85 > 0.8: strong", "Strong negative linear association"], answer: "Strong negative linear association" }
      ],
      tips: ["Correlation does NOT imply causation — always state this in SAC responses."],
      quiz: [
        { question: "r = 0.92 indicates:", options: ["Weak positive", "Strong positive", "Strong negative", "No correlation"], correctAnswer: 1, explanation: "|0.92| > 0.8 and positive → strong positive." },
        { question: "r = 0 means:", options: ["Perfect correlation", "No linear relationship", "Strong negative", "Error"], correctAnswer: 1, explanation: "r = 0 means no linear relationship (could still be non-linear)." },
        { question: "Correlation implies causation:", options: ["Always", "Never", "Sometimes", "Only when r > 0.9"], correctAnswer: 1, explanation: "Correlation never proves causation." }
      ]
    },
    {
      title: "Linear Modelling of Bivariate Data",
      explanation: "The least-squares regression line is the line of best fit that minimises the sum of squared residuals.\n\nEquation: ŷ = a + bx where b = slope and a = y-intercept. Use CAS to calculate.\n\nResidual = actual y - predicted y. A good model has residuals randomly scattered around zero.",
      keyPoints: ["Least-squares line: ŷ = a + bx", "b = gradient (rate of change)", "a = y-intercept (value when x = 0)", "Residual = observed - predicted"],
      workedExamples: [
        { problem: "Regression equation: ŷ = 2.5x + 10. Predict y when x = 8.", steps: ["ŷ = 2.5(8) + 10", "= 20 + 10 = 30"], answer: "ŷ = 30" }
      ],
      tips: ["Only predict within the range of the original data (interpolation). Extrapolation is unreliable."],
      quiz: [
        { question: "In ŷ = 3x + 5, the gradient means:", options: ["y starts at 3", "y increases by 3 for each unit increase in x", "x increases by 3", "The intercept is 3"], correctAnswer: 1, explanation: "Gradient = change in y per unit change in x." },
        { question: "Residual = 0 means:", options: ["Bad prediction", "Perfect prediction", "No data", "Error"], correctAnswer: 1, explanation: "Actual equals predicted → residual = 0." },
        { question: "Predicting outside the data range is called:", options: ["Interpolation", "Extrapolation", "Regression", "Correlation"], correctAnswer: 1, explanation: "Extrapolation is predicting beyond the data range." }
      ]
    },
    {
      title: "Making Predictions",
      explanation: "Use the regression line to make predictions. Interpolation (within data range) is reliable. Extrapolation (beyond data range) is risky.\n\nAlways state the coefficient of determination (r²) to indicate how well the model fits. r² = 0.81 means 81% of the variation in y is explained by x.",
      keyPoints: ["Interpolation: within data range (reliable)", "Extrapolation: outside data range (unreliable)", "r² = proportion of variation explained", "Always interpret in context"],
      workedExamples: [
        { problem: "r² = 0.72. Interpret.", steps: ["72% of the variation in the response variable is explained by the explanatory variable", "28% is due to other factors"], answer: "72% of variation explained by the linear model" }
      ],
      tips: ["Always state r² as a percentage and interpret in the context of the variables."],
      quiz: [
        { question: "r² = 0.64 means:", options: ["r = 0.64", "64% of variation explained", "36% of variation explained", "Strong correlation"], correctAnswer: 1, explanation: "r² = proportion of variation explained." },
        { question: "Which is more reliable?", options: ["Interpolation", "Extrapolation", "Both equal", "Neither"], correctAnswer: 0, explanation: "Interpolation is within data range → more reliable." },
        { question: "r = 0.9 → r² =", options: ["0.9", "0.81", "0.09", "1.8"], correctAnswer: 1, explanation: "0.9² = 0.81" }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // GRAPHS AND NETWORKS
  // ═══════════════════════════════════════════════════════════════
  "y11g-graphs-networks": [
    {
      title: "Graph Theory Basics",
      explanation: "A graph consists of vertices (nodes) connected by edges (links). The degree of a vertex is the number of edges connected to it.\n\nKey terms: adjacent vertices share an edge, a path is a sequence of connected edges, a circuit is a path that returns to the start.",
      keyPoints: ["Vertex: node/point", "Edge: connection between vertices", "Degree: number of edges at a vertex", "Sum of degrees = 2 × number of edges"],
      workedExamples: [
        { problem: "A graph has vertices A, B, C, D with edges AB, AC, BC, CD. Find degrees.", steps: ["deg(A) = 2 (AB, AC)", "deg(B) = 2 (AB, BC)", "deg(C) = 3 (AC, BC, CD)", "deg(D) = 1 (CD)", "Sum = 8 = 2 × 4 edges ✓"], answer: "A:2, B:2, C:3, D:1" }
      ],
      tips: ["The sum of all degrees always equals twice the number of edges."],
      quiz: [
        { question: "A vertex with degree 0 is:", options: ["Connected", "Isolated", "Adjacent", "A loop"], correctAnswer: 1, explanation: "No edges connected = isolated vertex." },
        { question: "5 edges → sum of degrees =", options: ["5", "10", "15", "25"], correctAnswer: 1, explanation: "Sum of degrees = 2 × edges = 10." },
        { question: "A circuit:", options: ["Starts and ends at different vertices", "Starts and ends at same vertex", "Has no edges", "Uses each edge twice"], correctAnswer: 1, explanation: "A circuit returns to its starting vertex." }
      ]
    },
    {
      title: "Euler Paths and Circuits",
      explanation: "An Euler path traverses every edge exactly once. An Euler circuit is an Euler path that starts and ends at the same vertex.\n\nEuler path exists if: exactly 0 or 2 vertices have odd degree.\nEuler circuit exists if: all vertices have even degree.",
      keyPoints: ["Euler path: traverse every edge once", "Euler circuit: Euler path returning to start", "0 odd-degree vertices → Euler circuit exists", "2 odd-degree vertices → Euler path exists (start/end at odd vertices)"],
      workedExamples: [
        { problem: "Degrees: A=2, B=3, C=3, D=2. Does an Euler path/circuit exist?", steps: ["Odd-degree vertices: B(3), C(3) → 2 odd vertices", "2 odd vertices → Euler path exists (start at B or C)", "Not all even → no Euler circuit"], answer: "Euler path exists (B to C or C to B). No Euler circuit." }
      ],
      tips: ["Count odd-degree vertices: 0 → circuit, 2 → path, other → neither."],
      quiz: [
        { question: "All even degrees → exists:", options: ["Euler path only", "Euler circuit", "Neither", "Both"], correctAnswer: 1, explanation: "All even degrees guarantees an Euler circuit." },
        { question: "4 odd-degree vertices:", options: ["Euler path", "Euler circuit", "Neither exists", "Both"], correctAnswer: 2, explanation: "Need 0 or 2 odd-degree vertices." },
        { question: "Euler path starts at:", options: ["Any vertex", "Odd-degree vertex", "Even-degree vertex", "Highest degree"], correctAnswer: 1, explanation: "Start at one odd-degree vertex, end at the other." }
      ]
    },
    {
      title: "Weighted Graphs and Shortest Paths",
      explanation: "A weighted graph assigns a value (weight) to each edge — often representing distance, cost, or time.\n\nTo find the shortest path, consider all possible routes and compare total weights. For larger graphs, use systematic methods.",
      keyPoints: ["Weight = value on edge (distance, cost, time)", "Shortest path: minimum total weight", "Compare all possible routes", "Dijkstra's algorithm for larger graphs"],
      workedExamples: [
        { problem: "Find shortest path A→D. Routes: A-B-D (3+5=8), A-C-D (4+3=7), A-B-C-D (3+2+3=8).", steps: ["A-B-D: 8", "A-C-D: 7", "A-B-C-D: 8", "Shortest: A-C-D = 7"], answer: "Shortest path: A-C-D, weight 7" }
      ],
      tips: ["List all possible routes systematically to avoid missing the shortest one."],
      quiz: [
        { question: "In a weighted graph, edge weight usually represents:", options: ["Colour", "Distance/cost/time", "Number of vertices", "Degree"], correctAnswer: 1, explanation: "Weights represent measurable quantities." },
        { question: "Shortest path means:", options: ["Fewest edges", "Minimum total weight", "Most direct", "Fastest"], correctAnswer: 1, explanation: "Minimum sum of edge weights along the path." },
        { question: "Two paths have weights 15 and 12. Shorter path?", options: ["Weight 15", "Weight 12", "Same", "Can't tell"], correctAnswer: 1, explanation: "12 < 15, so weight 12 is shorter." }
      ]
    },
    {
      title: "Spanning Trees",
      explanation: "A spanning tree connects all vertices with no circuits, using minimum edges. A minimum spanning tree has the smallest possible total weight.\n\nPrim's algorithm: start at any vertex, repeatedly add the cheapest edge that connects a new vertex.\nKruskal's algorithm: sort edges by weight, add cheapest edge that doesn't create a circuit.",
      keyPoints: ["Spanning tree: connects all vertices, no circuits", "n vertices → n-1 edges in spanning tree", "Minimum spanning tree: smallest total weight", "Prim's and Kruskal's algorithms"],
      workedExamples: [
        { problem: "5 vertices, edges with weights. A spanning tree needs how many edges?", steps: ["n = 5 vertices", "Edges needed = n - 1 = 4"], answer: "4 edges" }
      ],
      tips: ["A spanning tree with n vertices always has exactly n-1 edges."],
      quiz: [
        { question: "A spanning tree with 6 vertices has ___ edges:", options: ["5", "6", "7", "4"], correctAnswer: 0, explanation: "n-1 = 6-1 = 5 edges." },
        { question: "A spanning tree has:", options: ["Circuits", "No circuits", "Loops", "Multiple paths"], correctAnswer: 1, explanation: "By definition, a tree has no circuits." },
        { question: "Minimum spanning tree minimises:", options: ["Vertices", "Edges", "Total weight", "Degree"], correctAnswer: 2, explanation: "MST has minimum total edge weight." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // VARIATION
  // ═══════════════════════════════════════════════════════════════
  "y11g-variation": [
    {
      title: "Direct Variation",
      explanation: "Direct variation: y = kx (y is directly proportional to x). As x increases, y increases proportionally. The constant k is the constant of proportionality.\n\nThe graph of direct variation passes through the origin.",
      keyPoints: ["y = kx where k = constant", "Graph: straight line through origin", "k = y/x (constant ratio)", "As x doubles, y doubles"],
      workedExamples: [
        { problem: "y varies directly as x. When x = 4, y = 20. Find y when x = 7.", steps: ["k = y/x = 20/4 = 5", "y = 5x", "When x = 7: y = 5(7) = 35"], answer: "y = 35" }
      ],
      tips: ["If y/x is constant for all data pairs, the relationship is direct variation."],
      quiz: [
        { question: "y = 3x. When x doubles:", options: ["y halves", "y doubles", "y triples", "y stays same"], correctAnswer: 1, explanation: "Direct variation: doubling x doubles y." },
        { question: "Direct variation graph passes through:", options: ["(1,1)", "The origin", "y-axis only", "(0,1)"], correctAnswer: 1, explanation: "y = kx passes through (0,0)." },
        { question: "y ∝ x means:", options: ["y = x", "y = kx for some constant k", "y > x", "y + x = k"], correctAnswer: 1, explanation: "∝ means proportional: y = kx." }
      ]
    },
    {
      title: "Inverse Variation",
      explanation: "Inverse variation: y = k/x (y is inversely proportional to x). As x increases, y decreases. The product xy = k is constant.\n\nThe graph is a hyperbola.",
      keyPoints: ["y = k/x where k = constant", "xy = k (constant product)", "Graph: hyperbola", "As x doubles, y halves"],
      workedExamples: [
        { problem: "y varies inversely as x. When x = 3, y = 12. Find y when x = 9.", steps: ["k = xy = 3 × 12 = 36", "y = 36/x", "When x = 9: y = 36/9 = 4"], answer: "y = 4" }
      ],
      tips: ["If xy is constant, it's inverse variation."],
      quiz: [
        { question: "y = 24/x. When x = 6, y =", options: ["4", "18", "30", "144"], correctAnswer: 0, explanation: "24/6 = 4" },
        { question: "Inverse variation graph shape:", options: ["Straight line", "Parabola", "Hyperbola", "Circle"], correctAnswer: 2, explanation: "y = k/x produces a hyperbola." },
        { question: "If x triples in y = k/x, y:", options: ["Triples", "Is divided by 3", "Stays same", "Squares"], correctAnswer: 1, explanation: "Inverse: x×3 → y÷3." }
      ]
    },
    {
      title: "Logarithmic Scales",
      explanation: "Logarithms convert multiplication to addition: log(ab) = log a + log b. A log scale is useful when data spans many orders of magnitude.\n\nlog₁₀(10) = 1, log₁₀(100) = 2, log₁₀(1000) = 3. Each step on a log scale represents a factor of 10.",
      keyPoints: ["log₁₀(x): what power of 10 gives x?", "log(ab) = log a + log b", "log(aⁿ) = n log a", "Log scales compress large ranges"],
      workedExamples: [
        { problem: "Evaluate log₁₀(1000) and log₁₀(0.01).", steps: ["10³ = 1000, so log₁₀(1000) = 3", "10⁻² = 0.01, so log₁₀(0.01) = -2"], answer: "log(1000) = 3, log(0.01) = -2" }
      ],
      tips: ["The Richter scale and pH scale are everyday examples of log scales."],
      quiz: [
        { question: "log₁₀(100) =", options: ["10", "2", "100", "1"], correctAnswer: 1, explanation: "10² = 100, so log = 2." },
        { question: "log₁₀(1) =", options: ["1", "10", "0", "-1"], correctAnswer: 2, explanation: "10⁰ = 1, so log = 0." },
        { question: "Log scales are useful for:", options: ["Small data", "Large range data", "Negative data", "Categorical data"], correctAnswer: 1, explanation: "Log scales compress data spanning many orders of magnitude." }
      ]
    },
    {
      title: "Non-linear Modelling",
      explanation: "Not all relationships are linear. Common non-linear models include:\n\n• Quadratic: y = ax² + bx + c (parabola)\n• Power: y = axⁿ\n• Exponential: y = a × bˣ\n\nTo linearise data, take logarithms or transform variables. If log y vs log x is linear, the original relationship is a power function.",
      keyPoints: ["Quadratic: y = ax² + bx + c", "Power: y = axⁿ → log y = log a + n log x", "Exponential: y = abˣ → log y = log a + x log b", "Linearising helps identify the model type"],
      workedExamples: [
        { problem: "Data suggests y = ax². When x = 2, y = 12. Find a.", steps: ["12 = a(2²) = 4a", "a = 3", "Model: y = 3x²"], answer: "y = 3x²" }
      ],
      tips: ["Plot transformed data to check if it's linear — this confirms your model type."],
      quiz: [
        { question: "y = 5x² is what type of model?", options: ["Linear", "Quadratic", "Exponential", "Logarithmic"], correctAnswer: 1, explanation: "Highest power is x² → quadratic." },
        { question: "To linearise y = axⁿ, plot:", options: ["y vs x", "log y vs log x", "y vs x²", "x vs y"], correctAnswer: 1, explanation: "log y = log a + n log x is linear in log y vs log x." },
        { question: "Exponential growth has form:", options: ["y = ax + b", "y = ax²", "y = a × bˣ", "y = a/x"], correctAnswer: 2, explanation: "y = a × bˣ with b > 1 gives exponential growth." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // MEASUREMENT, SCALE AND SIMILARITY
  // ═══════════════════════════════════════════════════════════════
  "y11g-measurement-scale": [
    {
      title: "Pythagoras' Theorem Revision",
      explanation: "In any right-angled triangle: c² = a² + b² where c is the hypotenuse.\n\nTo find c: c = √(a² + b²). To find a shorter side: a = √(c² - b²).\n\nApplications include finding diagonal distances, heights, and real-world measurements.",
      keyPoints: ["c² = a² + b²", "Hypotenuse is always the longest side", "Common triples: 3-4-5, 5-12-13, 8-15-17", "Works only for right-angled triangles"],
      workedExamples: [
        { problem: "Find the diagonal of a 6m × 8m room.", steps: ["d² = 6² + 8² = 36 + 64 = 100", "d = √100 = 10m"], answer: "Diagonal = 10m" }
      ],
      tips: ["Always check which side is the hypotenuse before applying the formula."],
      quiz: [
        { question: "Legs 5 and 12. Hypotenuse?", options: ["13", "17", "7", "60"], correctAnswer: 0, explanation: "5² + 12² = 169, √169 = 13" },
        { question: "Hypotenuse 10, one leg 6. Other leg?", options: ["4", "8", "16", "√136"], correctAnswer: 1, explanation: "√(100-36) = √64 = 8" },
        { question: "Pythagoras applies to:", options: ["All triangles", "Right triangles only", "Equilateral only", "Isosceles only"], correctAnswer: 1, explanation: "Only right-angled triangles." }
      ]
    },
    {
      title: "Volume and Surface Area",
      explanation: "Volume measures 3D space (cubic units). Surface area measures the total outer surface (square units).\n\nKey formulas:\n• Rectangular prism: V = lwh, SA = 2(lw + lh + wh)\n• Cylinder: V = πr²h, SA = 2πr² + 2πrh\n• Sphere: V = 4πr³/3, SA = 4πr²\n• Cone: V = πr²h/3",
      keyPoints: ["Volume → cubic units (cm³, m³)", "Surface area → square units (cm², m²)", "Composite shapes: break into simpler shapes", "Use appropriate formula for each shape"],
      workedExamples: [
        { problem: "Cylinder: radius 5cm, height 12cm. Find V and SA.", steps: ["V = πr²h = π(25)(12) = 300π ≈ 942.5 cm³", "SA = 2πr² + 2πrh = 2π(25) + 2π(5)(12) = 50π + 120π = 170π ≈ 534.1 cm²"], answer: "V ≈ 942.5 cm³, SA ≈ 534.1 cm²" }
      ],
      tips: ["For composite shapes, break them into basic shapes and add/subtract volumes."],
      quiz: [
        { question: "Volume of cube side 4cm:", options: ["16cm³", "64cm³", "96cm³", "24cm³"], correctAnswer: 1, explanation: "4³ = 64 cm³" },
        { question: "SA of cube side 3cm:", options: ["27cm²", "36cm²", "54cm²", "18cm²"], correctAnswer: 2, explanation: "6 × 3² = 54 cm²" },
        { question: "Volume of sphere radius 3:", options: ["36π", "27π", "12π", "108π"], correctAnswer: 0, explanation: "V = 4π(27)/3 = 36π" }
      ]
    },
    {
      title: "Similar Figures",
      explanation: "Similar figures have the same shape but different sizes. Corresponding angles are equal and corresponding sides are in proportion.\n\nScale factor k = new length / original length.\n\nFor similar figures: areas scale by k², volumes scale by k³.",
      keyPoints: ["Same shape, different size", "Corresponding sides in proportion", "Scale factor k: lengths × k, areas × k², volumes × k³", "All angles preserved"],
      workedExamples: [
        { problem: "Two similar triangles. Smaller has sides 3, 4, 5. Larger has shortest side 9. Find other sides.", steps: ["Scale factor k = 9/3 = 3", "Second side: 4 × 3 = 12", "Third side: 5 × 3 = 15"], answer: "Sides: 9, 12, 15" }
      ],
      tips: ["If lengths scale by k, areas scale by k² and volumes by k³."],
      quiz: [
        { question: "Scale factor 2. Area scales by:", options: ["2", "4", "8", "16"], correctAnswer: 1, explanation: "Area scales by k² = 2² = 4." },
        { question: "Scale factor 3. Volume scales by:", options: ["3", "9", "27", "81"], correctAnswer: 2, explanation: "Volume scales by k³ = 3³ = 27." },
        { question: "Similar figures have equal:", options: ["Side lengths", "Areas", "Angles", "Volumes"], correctAnswer: 2, explanation: "Corresponding angles are equal in similar figures." }
      ]
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // APPLICATIONS OF TRIGONOMETRY
  // ═══════════════════════════════════════════════════════════════
  "y11g-trig-applications": [
    {
      title: "Right-Angle Trigonometry",
      explanation: "In a right-angled triangle, the three trigonometric ratios relate angles to side lengths:\n\nsin θ = opposite/hypotenuse\ncos θ = adjacent/hypotenuse\ntan θ = opposite/adjacent\n\nUse SOH-CAH-TOA to remember. Use inverse functions (sin⁻¹, cos⁻¹, tan⁻¹) to find angles.",
      keyPoints: ["SOH: sin = opp/hyp", "CAH: cos = adj/hyp", "TOA: tan = opp/adj", "Inverse trig to find angles"],
      workedExamples: [
        { problem: "Right triangle: angle 35°, hypotenuse 10. Find the opposite side.", steps: ["sin 35° = opp/10", "opp = 10 × sin 35°", "= 10 × 0.5736 ≈ 5.74"], answer: "Opposite ≈ 5.74" }
      ],
      tips: ["Label the triangle first: identify hypotenuse, opposite, and adjacent relative to the angle."],
      quiz: [
        { question: "sin 30° =", options: ["1", "0.5", "√3/2", "1/√2"], correctAnswer: 1, explanation: "sin 30° = 0.5 (exact value)." },
        { question: "To find an angle, use:", options: ["sin", "sin⁻¹", "sin²", "1/sin"], correctAnswer: 1, explanation: "Inverse sin (sin⁻¹) gives the angle from a ratio." },
        { question: "tan θ = opp/adj. If opp=4, adj=3:", options: ["tan θ = 3/4", "tan θ = 4/3", "tan θ = 7", "tan θ = 12"], correctAnswer: 1, explanation: "tan = opposite/adjacent = 4/3." }
      ]
    },
    {
      title: "The Sine Rule",
      explanation: "The sine rule works for ANY triangle (not just right-angled):\n\na/sin A = b/sin B = c/sin C\n\nUse it when you know:\n• Two angles and one side (AAS)\n• Two sides and an angle opposite one of them (SSA — watch for the ambiguous case)",
      keyPoints: ["a/sin A = b/sin B = c/sin C", "Use for non-right triangles", "Need angle-side opposite pairs", "Ambiguous case: SSA may give two solutions"],
      workedExamples: [
        { problem: "Triangle: A = 40°, B = 70°, a = 8. Find b.", steps: ["a/sin A = b/sin B", "8/sin 40° = b/sin 70°", "b = 8 × sin 70° / sin 40°", "b = 8 × 0.9397 / 0.6428 ≈ 11.7"], answer: "b ≈ 11.7" }
      ],
      tips: ["Always pair a side with its OPPOSITE angle."],
      quiz: [
        { question: "Sine rule uses:", options: ["Adjacent sides", "Opposite angle-side pairs", "Right angles only", "Hypotenuse"], correctAnswer: 1, explanation: "Each fraction pairs a side with its opposite angle." },
        { question: "If A=30°, a=5, B=60°, find b:", options: ["5√3", "10", "5/√3", "2.5"], correctAnswer: 0, explanation: "5/sin30 = b/sin60 → b = 5×sin60/sin30 = 5√3." },
        { question: "The ambiguous case occurs with:", options: ["AAS", "SSA", "SAS", "AAA"], correctAnswer: 1, explanation: "SSA can sometimes give two valid triangles." }
      ]
    },
    {
      title: "The Cosine Rule",
      explanation: "The cosine rule also works for any triangle:\n\nc² = a² + b² - 2ab cos C\n\nUse it when you know:\n• Two sides and the included angle (SAS)\n• Three sides (SSS) — to find an angle\n\nRearranged to find an angle: cos C = (a² + b² - c²) / (2ab)",
      keyPoints: ["c² = a² + b² - 2ab cos C", "For SAS: find the third side", "For SSS: find any angle", "Reduces to Pythagoras when C = 90°"],
      workedExamples: [
        { problem: "Triangle: a = 7, b = 10, C = 50°. Find c.", steps: ["c² = 7² + 10² - 2(7)(10)cos 50°", "= 49 + 100 - 140(0.6428)", "= 149 - 89.99 = 59.01", "c = √59.01 ≈ 7.68"], answer: "c ≈ 7.68" }
      ],
      tips: ["When C = 90°, cos 90° = 0, so the formula becomes c² = a² + b² (Pythagoras)."],
      quiz: [
        { question: "Cosine rule is used for:", options: ["Right triangles only", "SAS and SSS", "Only equilateral", "Only isosceles"], correctAnswer: 1, explanation: "SAS to find side, SSS to find angle." },
        { question: "If all sides known, cosine rule finds:", options: ["A side", "An angle", "The area", "The perimeter"], correctAnswer: 1, explanation: "Rearrange to find cos C = (a²+b²-c²)/(2ab)." },
        { question: "cos 90° =", options: ["1", "0", "-1", "0.5"], correctAnswer: 1, explanation: "cos 90° = 0, which gives Pythagoras' theorem." }
      ]
    },
    {
      title: "Bearings",
      explanation: "A bearing is a direction measured clockwise from north, written as a three-digit angle (e.g., 045°, 120°, 270°).\n\nBearings are always:\n• Measured from north\n• Measured clockwise\n• Written as three digits\n\nCombine bearings with trigonometry to solve navigation problems.",
      keyPoints: ["Measured clockwise from north", "Always three digits (e.g., 045° not 45°)", "North = 000°, East = 090°, South = 180°, West = 270°", "Draw clear diagrams with north arrows"],
      workedExamples: [
        { problem: "A ship sails on bearing 060° for 50 km. How far east and north?", steps: ["East component = 50 sin 60° = 50 × 0.866 ≈ 43.3 km", "North component = 50 cos 60° = 50 × 0.5 = 25 km"], answer: "43.3 km east, 25 km north" }
      ],
      tips: ["Always draw a diagram with a north arrow at each relevant point."],
      quiz: [
        { question: "Bearing of due east:", options: ["000°", "090°", "180°", "270°"], correctAnswer: 1, explanation: "East is 90° clockwise from north." },
        { question: "Bearing 225° is:", options: ["NE", "SE", "SW", "NW"], correctAnswer: 2, explanation: "225° is between south (180°) and west (270°) → southwest." },
        { question: "Bearings are measured:", options: ["Anticlockwise from east", "Clockwise from north", "From south", "From west"], correctAnswer: 1, explanation: "Always clockwise from north." }
      ]
    }
  ]
};
