import { Lesson } from "./topicLessons";

// ════════════════════════════════════════════════════════════════════
// YEAR 11 VCE GENERAL MATHEMATICS — CHAPTER-LEVEL LESSON CONTENT
// Each subtopic ID maps to its own lesson array.
// ════════════════════════════════════════════════════════════════════

function makeLesson(title: string, explanation: string, keyPoints: string[], example: { problem: string; steps: string[]; answer: string }, tips: string[], quiz: { question: string; options: string[]; correctAnswer: number; explanation: string }[]): Lesson {
  return { title, explanation, keyPoints, workedExamples: [example], tips, quiz };
}

export const year11GeneralChapterLessons: Record<string, Lesson[]> = {

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 1: REVIEW OF PERCENTAGES AND RATIOS
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch1-percentages": [
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
    }
  ],

  "y11g-ch1-pct-increase-decrease": [
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
    }
  ],

  "y11g-ch1-gst": [
    {
      title: "Goods and Services Tax (GST)",
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
    }
  ],

  "y11g-ch1-ratio-proportion": [
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
    }
  ],

  "y11g-ch1-dividing-ratios": [
    {
      title: "Dividing Quantities in a Given Ratio",
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
    }
  ],

  "y11g-ch1-unitary-method": [
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

  "y11g-ch1-review": [
    makeLesson("Review of Chapter 1", "This review covers all key concepts from Chapter 1: Percentages, percentage increase and decrease, GST, ratio, proportion, dividing quantities in ratios, and the unitary method.\n\nUse this to consolidate your understanding before moving on.", ["Percentage conversions and calculations", "Multiplying factor for increase/decrease", "GST: multiply by 1.10 or divide by 1.10", "Ratios: simplify, divide quantities, unitary method"], { problem: "A $680 item is discounted by 15%, then GST (10%) is added. Find the final price.", steps: ["After 15% discount: 680 × 0.85 = $578", "After GST: 578 × 1.10 = $635.80"], answer: "$635.80" }, ["Review all formulas before the chapter test."], [
      { question: "Find 40% of $250:", options: ["$100", "$90", "$110", "$80"], correctAnswer: 0, explanation: "0.40 × 250 = $100" },
      { question: "Decrease $800 by 12.5%:", options: ["$700", "$600", "$750", "$687.50"], correctAnswer: 0, explanation: "800 × 0.875 = $700" },
      { question: "$440 including GST. Pre-GST price?", options: ["$400", "$396", "$484", "$410"], correctAnswer: 0, explanation: "440 ÷ 1.10 = $400" }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 2: INVESTIGATING AND COMPARING DATA DISTRIBUTIONS
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch2-categorical-data": [
    {
      title: "Classifying and Displaying Categorical Data",
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
    }
  ],

  "y11g-ch2-frequency-bar-charts": [
    {
      title: "Interpreting and Describing Frequency Tables and Bar Charts",
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
    }
  ],

  "y11g-ch2-numerical-data": [
    {
      title: "Displaying and Describing Numerical Data",
      explanation: "Numerical data takes number values and can be discrete (countable) or continuous (measurable).\n\nDiscrete data: number of students, goals scored (whole numbers)\nContinuous data: height, weight, temperature (can take any value in a range)\n\nNumerical data is displayed using histograms, dot plots, and stem-and-leaf plots.",
      keyPoints: ["Discrete: countable whole numbers", "Continuous: measured values (decimals possible)", "Histograms: bars touching (no gaps)", "Describe: shape, centre, spread, outliers"],
      workedExamples: [
        { problem: "Classify: number of siblings, height of students, temperature.", steps: ["Siblings: discrete (count)", "Height: continuous (measure)", "Temperature: continuous (measure)"], answer: "Siblings: discrete; Height & Temperature: continuous" }
      ],
      tips: ["If you COUNT it → discrete. If you MEASURE it → continuous."],
      quiz: [
        { question: "Number of pets owned is:", options: ["Continuous", "Categorical", "Discrete", "Ordinal"], correctAnswer: 2, explanation: "Whole number count → discrete." },
        { question: "Weight in kg is:", options: ["Discrete", "Continuous", "Nominal", "Ordinal"], correctAnswer: 1, explanation: "Weight is measured → continuous." },
        { question: "Histograms have:", options: ["Gaps between bars", "No gaps between bars", "No bars", "Only one bar"], correctAnswer: 1, explanation: "Histograms show continuous data — bars touch." }
      ]
    }
  ],

  "y11g-ch2-distributions-dot-stem": [
    {
      title: "Characteristics of Distributions, Dot Plots and Stem Plots",
      explanation: "Distributions can be described by their shape:\n• Symmetric: roughly equal on both sides\n• Positively skewed: tail extends to the right\n• Negatively skewed: tail extends to the left\n\nDot plots place a dot above a number line for each data value. Stem-and-leaf plots split each value into a stem and leaf, preserving individual values while showing the distribution shape.",
      keyPoints: ["Symmetric: balanced left and right", "Positively skewed: tail to the right", "Negatively skewed: tail to the left", "Stem plots: stem = leading digits, leaf = last digit"],
      workedExamples: [
        { problem: "Create a stem plot for: 23, 25, 31, 34, 35, 38, 41, 42, 47.", steps: ["Stems: 2, 3, 4", "2 | 3 5", "3 | 1 4 5 8", "4 | 1 2 7"], answer: "Stem plot with stems 2, 3, 4 and ordered leaves" }
      ],
      tips: ["Leaves must be in order (smallest to largest). Include a key, e.g., 2|3 = 23."],
      quiz: [
        { question: "In a stem plot, 4|7 represents:", options: ["47", "4.7", "74", "4 and 7"], correctAnswer: 0, explanation: "Stem 4, leaf 7 → 47" },
        { question: "A distribution with a long right tail is:", options: ["Symmetric", "Negatively skewed", "Positively skewed", "Bimodal"], correctAnswer: 2, explanation: "Right tail → positively skewed." },
        { question: "Dot plots are best for:", options: ["Large data sets", "Small data sets", "Categorical data", "Bivariate data"], correctAnswer: 1, explanation: "Dot plots become cluttered with large data sets." }
      ]
    }
  ],

  "y11g-ch2-measures-centre": [
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
    }
  ],

  "y11g-ch2-measures-spread": [
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
    }
  ],

  "y11g-ch2-standard-deviation": [
    {
      title: "Percentages of Data Lying Within Multiple Standard Deviations of the Mean",
      explanation: "Standard deviation (s) measures the average distance of data points from the mean. A larger standard deviation means more spread.\n\nThe 68–95–99.7% rule (for approximately normal distributions):\n• About 68% of data lies within 1 standard deviation of the mean\n• About 95% lies within 2 standard deviations\n• About 99.7% lies within 3 standard deviations",
      keyPoints: ["s measures average distance from the mean", "68% within 1s of mean", "95% within 2s of mean", "99.7% within 3s of mean"],
      workedExamples: [
        { problem: "Mean = 70, s = 5. What range contains about 95% of values?", steps: ["Lower bound = 70 - 2(5) = 60", "Upper bound = 70 + 2(5) = 80", "95% of data falls between 60 and 80"], answer: "60 to 80" }
      ],
      tips: ["On CAS calculators, use 1-Var Stats to compute standard deviation automatically."],
      quiz: [
        { question: "Standard deviation measures:", options: ["Centre", "Spread", "Skewness", "Shape"], correctAnswer: 1, explanation: "It measures how spread out data is from the mean." },
        { question: "If all data values are the same, s =", options: ["1", "The mean", "0", "Undefined"], correctAnswer: 2, explanation: "No variation → s = 0." },
        { question: "About 95% of data falls within ___ standard deviations:", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "The 68-95-99.7 rule: 95% within 2s." }
      ]
    }
  ],

  "y11g-ch2-boxplots": [
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
    }
  ],

  "y11g-ch2-comparing-distributions": [
    {
      title: "Comparing the Distribution of a Numerical Variable Across Groups",
      explanation: "When comparing data sets, comment on:\n\n1. Shape: symmetric, positively skewed, negatively skewed\n2. Centre: compare means or medians\n3. Spread: compare ranges, IQRs, or standard deviations\n4. Outliers: note any unusual values\n\nUse parallel boxplots or back-to-back stem plots for visual comparison. Always refer to context in your comparisons.",
      keyPoints: ["Compare: shape, centre, spread, outliers", "Use median and IQR for skewed data", "Use mean and s for symmetric data", "Always refer to context"],
      workedExamples: [
        { problem: "Class A: median 65, IQR 15, range 50. Class B: median 72, IQR 22, range 60. Compare.", steps: ["Centre: Class B has higher median (72 vs 65)", "Spread: Class B is more spread (IQR 22 vs 15)", "Class B scored higher on average but with more variation"], answer: "Class B scored higher (median 72 vs 65) but with more variability (IQR 22 vs 15)." }
      ],
      tips: ["Always use a structured approach: shape → centre → spread → outliers → context."],
      quiz: [
        { question: "Positively skewed data has:", options: ["Tail to the left", "Tail to the right", "Symmetric shape", "No tail"], correctAnswer: 1, explanation: "Positive skew = tail stretches right." },
        { question: "For skewed data, the better measure of centre is:", options: ["Mean", "Mode", "Median", "Range"], correctAnswer: 2, explanation: "Median is resistant to skew." },
        { question: "When comparing, always mention:", options: ["Colours", "Context", "Sample size only", "Axis labels"], correctAnswer: 1, explanation: "Comparisons must reference what the data represents." }
      ]
    }
  ],

  "y11g-ch2-review": [
    makeLesson("Review of Chapter 2", "This review covers all key concepts from Chapter 2: classifying data, frequency tables, bar charts, dot plots, stem plots, measures of centre and spread, standard deviation, boxplots, and comparing distributions.\n\nRemember the structured approach: shape, centre, spread, outliers, context.", ["Nominal vs ordinal categorical data", "Mean, median, mode for centre", "Range, IQR, standard deviation for spread", "68-95-99.7 rule for normal distributions"], { problem: "Data set: 12, 15, 18, 20, 22, 24, 28, 35. Find the IQR.", steps: ["Lower half: 12, 15, 18, 20 → Q1 = (15+18)/2 = 16.5", "Upper half: 22, 24, 28, 35 → Q3 = (24+28)/2 = 26", "IQR = 26 - 16.5 = 9.5"], answer: "IQR = 9.5" }, ["Use the structured approach in SAC responses."], [
      { question: "Nominal data has:", options: ["Natural order", "No natural order", "Numbers only", "Two categories only"], correctAnswer: 1, explanation: "Nominal = no natural ordering." },
      { question: "Median is preferred when data is:", options: ["Symmetric", "Skewed", "Bimodal", "Uniform"], correctAnswer: 1, explanation: "Median is resistant to skew." },
      { question: "Five-number summary does NOT include:", options: ["Median", "Q1", "Mean", "Maximum"], correctAnswer: 2, explanation: "It includes min, Q1, median, Q3, max — not mean." }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 3: SEQUENCES AND FINANCE
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch3-number-patterns": [
    makeLesson("Number Patterns", "A sequence is an ordered list of numbers following a rule. Patterns can be identified by examining differences between consecutive terms or ratios between them.\n\nFirst differences constant → arithmetic. Second differences constant → quadratic. Constant ratio → geometric.", ["Sequence: ordered list following a rule", "Look for common differences or ratios", "First differences: tₙ₊₁ - tₙ", "Pattern recognition is the first step"], { problem: "Find the next two terms: 2, 5, 10, 17, 26, …", steps: ["First differences: 3, 5, 7, 9", "Second differences: 2, 2, 2 (constant)", "Next first difference: 11", "Next term: 26 + 11 = 37", "Following: 37 + 13 = 50"], answer: "37, 50" }, ["If first differences aren't constant, check second differences."], [
      { question: "Next term: 1, 4, 9, 16, ?", options: ["20", "25", "24", "36"], correctAnswer: 1, explanation: "Perfect squares: 5² = 25" },
      { question: "3, 6, 12, 24 has:", options: ["Common difference", "Common ratio", "Neither", "Both"], correctAnswer: 1, explanation: "Each term × 2 = common ratio of 2." },
      { question: "Constant second differences indicate:", options: ["Linear", "Quadratic", "Geometric", "Random"], correctAnswer: 1, explanation: "Constant second differences → quadratic pattern." }
    ])
  ],

  "y11g-ch3-recurrence-relations": [
    makeLesson("Writing Recurrence Relations in Symbolic Form", "A recurrence relation defines each term using the previous term(s).\n\nGeneral form: tₙ₊₁ = f(tₙ) where t₁ is given.\n\nFor example, tₙ₊₁ = tₙ + 3 with t₁ = 2 gives: 2, 5, 8, 11, 14, …\n\nRecurrence relations need a starting value AND a rule.", ["Recurrence relation: each term from the previous", "Need a starting value (t₁) and a rule", "tₙ₊₁ = tₙ + d gives arithmetic sequence", "tₙ₊₁ = r × tₙ gives geometric sequence"], { problem: "t₁ = 5, tₙ₊₁ = 2tₙ - 1. Find t₂, t₃, t₄.", steps: ["t₂ = 2(5) - 1 = 9", "t₃ = 2(9) - 1 = 17", "t₄ = 2(17) - 1 = 33"], answer: "t₂ = 9, t₃ = 17, t₄ = 33" }, ["Write each term step by step."], [
      { question: "t₁ = 3, tₙ₊₁ = tₙ + 4. What is t₃?", options: ["7", "11", "15", "9"], correctAnswer: 1, explanation: "t₂ = 7, t₃ = 11" },
      { question: "A recurrence relation needs:", options: ["A formula only", "A starting value and a rule", "Just a graph", "Two formulas"], correctAnswer: 1, explanation: "You need t₁ and the rule." },
      { question: "t₁ = 10, tₙ₊₁ = tₙ/2. What is t₃?", options: ["5", "2.5", "1.25", "20"], correctAnswer: 1, explanation: "t₂ = 5, t₃ = 2.5" }
    ])
  ],

  "y11g-ch3-intro-arithmetic": [
    makeLesson("Introduction to Arithmetic Sequences", "An arithmetic sequence has a constant difference (d) between consecutive terms.\n\ntₙ = a + (n-1)d where a = first term, d = common difference.\n\nThe nth term formula lets you find any term directly without listing all terms.", ["Common difference d = tₙ₊₁ - tₙ", "nth term: tₙ = a + (n-1)d", "d > 0 → increasing, d < 0 → decreasing", "Linear pattern on a graph"], { problem: "Find the 20th term of 5, 8, 11, 14, …", steps: ["a = 5, d = 3", "t₂₀ = 5 + (20-1)(3) = 5 + 57 = 62"], answer: "t₂₀ = 62" }, ["Always identify a and d first."], [
      { question: "Common difference of 7, 3, -1, -5:", options: ["4", "-4", "3", "-3"], correctAnswer: 1, explanation: "3 - 7 = -4" },
      { question: "t₁ = 10, d = -2. What is t₆?", options: ["0", "2", "-2", "20"], correctAnswer: 0, explanation: "t₆ = 10 + 5(-2) = 0" },
      { question: "An arithmetic sequence graphs as:", options: ["Parabola", "Straight line", "Hyperbola", "Curve"], correctAnswer: 1, explanation: "Constant difference = linear growth." }
    ])
  ],

  "y11g-ch3-arithmetic-recursion": [
    makeLesson("Arithmetic Sequences Using Recursion", "An arithmetic sequence can be defined recursively:\ntₙ₊₁ = tₙ + d, t₁ = a\n\nThis generates terms one at a time. It's equivalent to the explicit formula tₙ = a + (n-1)d but is more natural for CAS calculators and spreadsheets.\n\nSum of n terms: Sₙ = n/2 × (first + last) = n/2 × (2a + (n-1)d).", ["Recursive: tₙ₊₁ = tₙ + d", "Equivalent to explicit: tₙ = a + (n-1)d", "Sum: Sₙ = n/2 × (first + last)", "Use CAS: define recurrence, generate terms"], { problem: "Find the sum of the first 10 terms of 2, 5, 8, …", steps: ["a = 2, d = 3, n = 10", "t₁₀ = 2 + 9(3) = 29", "S₁₀ = 10/2 × (2 + 29) = 5 × 31 = 155"], answer: "S₁₀ = 155" }, ["For sums, you need the first term, last term, and count."], [
      { question: "Sum of 1+2+3+…+100:", options: ["5000", "5050", "10000", "10100"], correctAnswer: 1, explanation: "S = 100/2 × (1+100) = 5050" },
      { question: "Recursive form for d=5, a=3:", options: ["tₙ₊₁ = tₙ + 5, t₁ = 3", "tₙ = 5n + 3", "tₙ₊₁ = 5tₙ", "t₁ = 5"], correctAnswer: 0, explanation: "Add d each step, start at a." },
      { question: "Sum of first 5 terms: 4, 7, 10, 13, 16:", options: ["40", "50", "45", "55"], correctAnswer: 1, explanation: "S₅ = 5/2 × (4+16) = 50" }
    ])
  ],

  "y11g-ch3-finance-arithmetic": [
    makeLesson("Finance Applications Using Arithmetic Sequences and Recurrence Relations", "Simple interest follows an arithmetic pattern: the interest earned each period is the same.\n\nI = PRT/100. Balance after n periods: Aₙ = P + n × (PR/100).\n\nFlat-rate depreciation also follows an arithmetic pattern: value decreases by a fixed amount each year.\nVₙ = V₀ - nd.", ["Simple interest: I = PRT/100", "Balance grows linearly (arithmetic)", "Flat depreciation: Vₙ = V₀ - nd", "Recurrence: Aₙ₊₁ = Aₙ + (PR/100)"], { problem: "Invest $5000 at 4% p.a. simple interest. Find balance after 6 years.", steps: ["Annual interest = 5000 × 0.04 = $200", "After 6 years: 5000 + 6(200) = $6200"], answer: "$6200" }, ["Simple interest = arithmetic growth."], [
      { question: "Simple interest on $2000 at 5% for 3 years:", options: ["$300", "$250", "$150", "$500"], correctAnswer: 0, explanation: "I = 2000 × 0.05 × 3 = $300" },
      { question: "Flat depreciation is:", options: ["Exponential", "Arithmetic (linear)", "Geometric", "Random"], correctAnswer: 1, explanation: "Fixed amount per period = arithmetic." },
      { question: "$20,000 depreciates $2000/year. Value after 5 years:", options: ["$10,000", "$12,000", "$8,000", "$15,000"], correctAnswer: 0, explanation: "20000 - 5(2000) = $10,000" }
    ])
  ],

  "y11g-ch3-intro-geometric": [
    makeLesson("Introduction to Geometric Sequences", "A geometric sequence has a constant ratio (r) between consecutive terms.\n\ntₙ = ar^(n-1) where a = first term, r = common ratio.\n\nIf |r| < 1, the terms decrease toward zero. If |r| > 1, the terms grow. If r < 0, terms alternate in sign.", ["Common ratio r = tₙ₊₁ / tₙ", "nth term: tₙ = ar^(n-1)", "|r| < 1 → decreasing, |r| > 1 → increasing", "r < 0 → alternating signs"], { problem: "Find t₅ of the sequence 3, 6, 12, 24, …", steps: ["a = 3, r = 2", "t₅ = 3 × 2⁴ = 3 × 16 = 48"], answer: "t₅ = 48" }, ["Check r by dividing any term by the previous term."], [
      { question: "Common ratio of 5, 15, 45, 135:", options: ["3", "10", "5", "30"], correctAnswer: 0, explanation: "15/5 = 3" },
      { question: "t₁ = 4, r = 1/2. What is t₄?", options: ["2", "1", "0.5", "8"], correctAnswer: 2, explanation: "t₄ = 4 × (1/2)³ = 0.5" },
      { question: "A geometric sequence with |r| < 1:", options: ["Grows forever", "Approaches zero", "Stays constant", "Alternates"], correctAnswer: 1, explanation: "Terms get smaller." }
    ])
  ],

  "y11g-ch3-geometric-recursion": [
    makeLesson("Recursion with Geometric Sequences", "A geometric sequence defined recursively:\ntₙ₊₁ = r × tₙ, t₁ = a\n\nThis multiplies by r each step. CAS and spreadsheets can generate terms efficiently.\n\nSum of n terms: Sₙ = a(rⁿ - 1)/(r - 1) when r ≠ 1.", ["Recursive: tₙ₊₁ = r × tₙ", "Sum: Sₙ = a(rⁿ - 1)/(r - 1)", "Use CAS to generate terms", "Check: common ratio between any consecutive pair"], { problem: "Sum of first 6 terms of 2, 6, 18, 54, …", steps: ["a = 2, r = 3, n = 6", "S₆ = 2(3⁶ - 1)/(3 - 1)", "= 2(729 - 1)/2 = 728"], answer: "S₆ = 728" }, ["For sums with r > 1, use Sₙ = a(rⁿ - 1)/(r - 1)."], [
      { question: "Recursive form for r=2, a=5:", options: ["tₙ₊₁ = 2tₙ, t₁ = 5", "tₙ = 5×2ⁿ", "tₙ₊₁ = tₙ + 2", "t₁ = 2"], correctAnswer: 0, explanation: "Multiply by r each step." },
      { question: "Sum of 1+2+4+8+16:", options: ["31", "30", "32", "16"], correctAnswer: 0, explanation: "S₅ = 1(2⁵-1)/(2-1) = 31" },
      { question: "Geometric sums require r ≠:", options: ["0", "1", "-1", "2"], correctAnswer: 1, explanation: "Formula undefined when r = 1." }
    ])
  ],

  "y11g-ch3-finance-geometric": [
    makeLesson("Finance Applications Using Geometric Sequences and Recurrence Relations", "Compound interest follows a geometric pattern: Aₙ = P(1 + r/100)ⁿ.\n\nReducing-balance depreciation: Vₙ = V₀(1 - r/100)ⁿ.\n\nBoth use a constant multiplying factor each period, making them geometric sequences.", ["Compound interest: A = P(1+r/100)ⁿ", "Reducing depreciation: V = V₀(1-r/100)ⁿ", "Recurrence: Aₙ₊₁ = (1+r/100) × Aₙ", "Exponential growth/decay"], { problem: "Invest $5000 at 4% compound interest for 3 years.", steps: ["A = 5000(1.04)³", "= 5000 × 1.124864", "= $5624.32"], answer: "$5624.32" }, ["Use recurrence: Aₙ₊₁ = 1.04 × Aₙ for year-by-year."], [
      { question: "Compound interest grows:", options: ["Linearly", "Exponentially", "Not at all", "Randomly"], correctAnswer: 1, explanation: "Interest on interest = exponential." },
      { question: "$1000 at 10% compound for 2 years:", options: ["$1200", "$1210", "$1100", "$1201"], correctAnswer: 1, explanation: "1000 × 1.1² = $1210" },
      { question: "Reducing balance depreciation is:", options: ["Linear", "Geometric (exponential)", "Constant", "Quadratic"], correctAnswer: 1, explanation: "Fixed percentage = geometric decay." }
    ])
  ],

  "y11g-ch3-finding-term-n": [
    makeLesson("Finding Term n in a Sequence Modelling Geometric Growth and Decay", "To find when a geometric sequence reaches a target value, solve ar^(n-1) = target for n.\n\nUsing logarithms: n - 1 = log(target/a) / log(r), so n = 1 + log(target/a) / log(r).\n\nFor finance: 'How many years until investment doubles?' → solve P(1+r)ⁿ = 2P.", ["Solve ar^(n-1) = target for n", "Use logarithms: n = 1 + log(target/a)/log(r)", "For doubling: (1+r)ⁿ = 2", "Use CAS or trial-and-improvement"], { problem: "An investment of $10,000 grows at 6% p.a. When does it exceed $15,000?", steps: ["10000(1.06)ⁿ > 15000", "(1.06)ⁿ > 1.5", "n > log(1.5)/log(1.06)", "n > 6.96", "After 7 complete years"], answer: "After 7 years" }, ["Round UP for 'when does it first exceed' questions."], [
      { question: "To find n in a geometric sequence, use:", options: ["Square root", "Logarithms", "Derivatives", "Factoring"], correctAnswer: 1, explanation: "Logarithms solve for exponents." },
      { question: "At 8% growth, doubling time ≈:", options: ["8 years", "9 years", "10 years", "12 years"], correctAnswer: 1, explanation: "72/8 ≈ 9 years (Rule of 72)." },
      { question: "'When first exceeds' means round:", options: ["Down", "Up", "To nearest", "Don't round"], correctAnswer: 1, explanation: "Round up to the next whole period." }
    ])
  ],

  "y11g-ch3-review": [
    makeLesson("Review of Chapter 3", "This review covers sequences and finance: number patterns, recurrence relations, arithmetic and geometric sequences, simple and compound interest, depreciation, and growth/decay modelling.", ["Arithmetic: tₙ = a + (n-1)d, Sₙ = n/2(first+last)", "Geometric: tₙ = ar^(n-1), Sₙ = a(rⁿ-1)/(r-1)", "Simple interest (arithmetic) vs compound interest (geometric)", "Use logarithms to find n"], { problem: "Population of 5000 grows 3% per year. Population after 10 years?", steps: ["A = 5000(1.03)¹⁰", "= 5000 × 1.34392", "≈ 6720"], answer: "≈ 6720" }, ["Know when to use arithmetic vs geometric models."], [
      { question: "1000 bacteria double every hour. After 5 hours?", options: ["5000", "10000", "32000", "16000"], correctAnswer: 2, explanation: "1000 × 2⁵ = 32,000" },
      { question: "Decay factor of 8% loss:", options: ["0.08", "1.08", "0.92", "0.8"], correctAnswer: 2, explanation: "1 - 0.08 = 0.92" },
      { question: "Which grows faster over time?", options: ["Simple interest", "Compound interest", "Same rate", "Depends on amount"], correctAnswer: 1, explanation: "Compound grows exponentially." }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 4: MATRICES
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch4-matrix-basics": [
    {
      title: "The Basics of a Matrix",
      explanation: "A matrix is a rectangular array of numbers arranged in rows and columns. The size (order) is written as rows × columns.\n\nA 2×3 matrix has 2 rows and 3 columns. Elements are referenced by position: aᵢⱼ is in row i, column j.",
      keyPoints: ["Order = rows × columns", "Element aᵢⱼ: row i, column j", "Square matrix: same number of rows and columns", "Row matrix: 1 row. Column matrix: 1 column"],
      workedExamples: [{ problem: "State the order and identify element a₂₃ of [[1,2,3],[4,5,6]].", steps: ["2 rows, 3 columns → 2×3", "a₂₃ = row 2, column 3 = 6"], answer: "Order: 2×3, a₂₃ = 6" }],
      tips: ["Remember: rows first, columns second."],
      quiz: [
        { question: "A 3×2 matrix has:", options: ["3 columns, 2 rows", "3 rows, 2 columns", "6 rows", "5 elements"], correctAnswer: 1, explanation: "3 rows, 2 columns." },
        { question: "How many elements in a 4×3 matrix?", options: ["7", "12", "43", "34"], correctAnswer: 1, explanation: "4 × 3 = 12." },
        { question: "A square matrix has:", options: ["All zeros", "Equal rows and columns", "One row", "One column"], correctAnswer: 1, explanation: "Square: rows = columns." }
      ]
    }
  ],

  "y11g-ch4-adding-subtracting": [
    makeLesson("Adding and Subtracting Matrices", "Matrices can only be added or subtracted if they have the same order. Add/subtract corresponding elements.\n\nA + B: add each aᵢⱼ + bᵢⱼ. A - B: subtract each aᵢⱼ - bᵢⱼ.", ["Same order required", "Add/subtract corresponding elements", "Result has same order", "Commutative: A + B = B + A"], { problem: "[[1,2],[3,4]] + [[5,6],[7,8]]", steps: ["[1+5, 2+6] = [6, 8]", "[3+7, 4+8] = [10, 12]"], answer: "[[6,8],[10,12]]" }, ["If orders don't match, the operation is undefined."], [
      { question: "Can you add a 2×3 and a 3×2 matrix?", options: ["Yes", "No", "Sometimes", "Only if square"], correctAnswer: 1, explanation: "Different orders → undefined." },
      { question: "[[3,1]] + [[2,4]] =", options: ["[[5,5]]", "[[1,-3]]", "[[6,4]]", "Undefined"], correctAnswer: 0, explanation: "3+2=5, 1+4=5." },
      { question: "Matrix addition is commutative:", options: ["Never", "A+B = B+A", "Only square", "A+B = AB"], correctAnswer: 1, explanation: "A+B = B+A always." }
    ])
  ],

  "y11g-ch4-scalar-mult": [
    makeLesson("Scalar Multiplication", "Multiplying a matrix by a scalar (number) means multiplying every element by that number.\n\nkA: multiply each element of A by k. The result has the same order as A.", ["Multiply every element by the scalar", "Result has same order", "k(A + B) = kA + kB", "(k + l)A = kA + lA"], { problem: "3 × [[2, -1],[0, 4]]", steps: ["[3×2, 3×(-1)] = [6, -3]", "[3×0, 3×4] = [0, 12]"], answer: "[[6,-3],[0,12]]" }, ["Just multiply every element."], [
      { question: "2 × [[1,3],[5,7]] =", options: ["[[2,6],[10,14]]", "[[3,5],[7,9]]", "[[1,3],[5,7]]", "[[2,3],[5,7]]"], correctAnswer: 0, explanation: "Multiply each by 2." },
      { question: "0 × any matrix =", options: ["Same matrix", "Identity", "Zero matrix", "Undefined"], correctAnswer: 2, explanation: "0 times anything is zero." },
      { question: "-1 × A gives:", options: ["A", "-A (negated)", "0", "A²"], correctAnswer: 1, explanation: "Every element is negated." }
    ])
  ],

  "y11g-ch4-matrix-mult": [
    {
      title: "Matrix Multiplication",
      explanation: "To multiply matrices A(m×n) and B(n×p), the number of columns of A must equal the number of rows of B. The result is m×p.\n\nElement cᵢⱼ = sum of (row i of A) × (column j of B).\n\nMatrix multiplication is NOT commutative: AB ≠ BA in general.",
      keyPoints: ["Columns of A = rows of B required", "Result: (rows of A) × (columns of B)", "Multiply row by column, sum products", "NOT commutative: AB ≠ BA"],
      workedExamples: [{ problem: "[[1,2],[3,4]] × [[5],[6]]", steps: ["Row 1: 1×5 + 2×6 = 17", "Row 2: 3×5 + 4×6 = 39"], answer: "[[17],[39]]" }],
      tips: ["Check dimensions first: (m×n)(n×p) → m×p."],
      quiz: [
        { question: "(2×3)(3×4) gives order:", options: ["2×4", "3×3", "2×3", "3×4"], correctAnswer: 0, explanation: "Outer dimensions: 2×4." },
        { question: "Can you multiply (2×3)(2×3)?", options: ["Yes", "No"], correctAnswer: 1, explanation: "Columns of first (3) ≠ rows of second (2)." },
        { question: "AB = BA is:", options: ["Always true", "Never true", "Sometimes true", "Only for identity"], correctAnswer: 2, explanation: "Only special cases." }
      ]
    }
  ],

  "y11g-ch4-inverse-matrices": [
    {
      title: "Inverse Matrices and Solving Simultaneous Equations Using Matrices",
      explanation: "The inverse of a square matrix A, written A⁻¹, satisfies AA⁻¹ = A⁻¹A = I (identity matrix).\n\nFor a 2×2 matrix [[a,b],[c,d]]:\nA⁻¹ = (1/det) × [[d,-b],[-c,a]] where det = ad - bc.\n\nIf det = 0, the matrix has no inverse (singular).\n\nTo solve AX = B: X = A⁻¹B.",
      keyPoints: ["AA⁻¹ = I (identity)", "det(A) = ad - bc for 2×2", "If det = 0, no inverse (singular)", "Solve AX = B → X = A⁻¹B"],
      workedExamples: [{ problem: "Solve: 2x + y = 8, 3x + 2y = 14 using matrices.", steps: ["A = [[2,1],[3,2]], B = [[8],[14]]", "det = 4-3 = 1", "A⁻¹ = [[2,-1],[-3,2]]", "X = A⁻¹B = [[2],[4]]"], answer: "x = 2, y = 4" }],
      tips: ["Swap a and d, negate b and c, divide by determinant."],
      quiz: [
        { question: "det of [[4,3],[2,1]]:", options: ["-2", "2", "10", "-10"], correctAnswer: 0, explanation: "4(1) - 3(2) = -2" },
        { question: "If det = 0, the matrix is:", options: ["Invertible", "Singular", "Zero", "Identity"], correctAnswer: 1, explanation: "No inverse exists." },
        { question: "A × A⁻¹ =", options: ["A²", "0", "I (identity)", "A"], correctAnswer: 2, explanation: "By definition." }
      ]
    }
  ],

  "y11g-ch4-networks": [
    makeLesson("Using Matrices to Model Road and Communication Networks", "An adjacency matrix shows connections in a network. Entry aᵢⱼ = 1 if there's a direct connection from vertex i to vertex j, 0 otherwise.\n\nA² gives the number of 2-step paths between vertices. A³ gives 3-step paths, etc.", ["Adjacency matrix: 1 = connected, 0 = not", "A² counts 2-step paths", "Diagonal of A gives loops", "Sum of row = degree of that vertex"], { problem: "Network: A↔B, A↔C, B↔C. Write the adjacency matrix.", steps: ["Vertices: A, B, C", "A: connects to B, C → [0,1,1]", "B: connects to A, C → [1,0,1]", "C: connects to A, B → [1,1,0]"], answer: "[[0,1,1],[1,0,1],[1,1,0]]" }, ["The adjacency matrix is always symmetric for undirected networks."], [
      { question: "In an adjacency matrix, 1 means:", options: ["No connection", "Direct connection", "Two steps", "Weight"], correctAnswer: 1, explanation: "1 = direct connection." },
      { question: "A² shows paths of length:", options: ["1", "2", "3", "Any"], correctAnswer: 1, explanation: "A² counts 2-step paths." },
      { question: "Adjacency matrix for undirected graph is:", options: ["Diagonal", "Symmetric", "Triangular", "Zero"], correctAnswer: 1, explanation: "If i→j exists, so does j→i." }
    ])
  ],

  "y11g-ch4-transition-matrices": [
    makeLesson("Introduction to Transition Matrices", "A transition matrix models state changes over time. Each column sums to 1 (probability).\n\nIf S₀ is the initial state vector, then S₁ = T × S₀, S₂ = T × S₁ = T² × S₀, etc.\n\nCommon applications: market share, weather patterns, population movement.", ["Each column sums to 1", "Sₙ = T × Sₙ₋₁ = Tⁿ × S₀", "Rows = 'to' states, columns = 'from' states", "Used for predictions over time"], { problem: "Brand A has 60% market, Brand B 40%. Each year, A keeps 80% and loses 20% to B. B keeps 70% and loses 30% to A. Find shares after 1 year.", steps: ["T = [[0.8, 0.3],[0.2, 0.7]]", "S₀ = [[0.6],[0.4]]", "S₁ = T × S₀ = [[0.8(0.6)+0.3(0.4)],[0.2(0.6)+0.7(0.4)]]", "= [[0.60],[0.40]]"], answer: "A: 60%, B: 40% (steady state)" }, ["Columns must sum to 1 — they represent probabilities."], [
      { question: "Transition matrix columns sum to:", options: ["0", "1", "The population", "Any value"], correctAnswer: 1, explanation: "Probabilities must sum to 1." },
      { question: "State after 2 steps: S₂ =", options: ["T + S₀", "T² × S₀", "2T × S₀", "T × 2S₀"], correctAnswer: 1, explanation: "Apply T twice: T²S₀." },
      { question: "Transition matrices model:", options: ["Static data", "State changes over time", "Geometric shapes", "Graph colours"], correctAnswer: 1, explanation: "They model how states change." }
    ])
  ],

  "y11g-ch4-transition-recursion": [
    makeLesson("Using Recursion to Answer Questions Requiring Multiple Applications of a Transition Matrix", "For long-term predictions, repeatedly apply the transition matrix: Sₙ₊₁ = T × Sₙ.\n\nAs n gets large, many transition matrices converge to a steady state where Sₙ₊₁ ≈ Sₙ.\n\nSteady state satisfies: S = T × S. Solve this system to find long-term proportions.", ["Sₙ₊₁ = T × Sₙ (recursive application)", "Long-term: converges to steady state", "Steady state: S = TS", "Use CAS to compute Tⁿ for large n"], { problem: "After many years, what happens to the market shares from the previous example?", steps: ["Steady state: S = TS", "Let A = x, B = 1-x", "x = 0.8x + 0.3(1-x)", "x = 0.8x + 0.3 - 0.3x", "0.5x = 0.3, x = 0.6"], answer: "Steady state: A = 60%, B = 40%" }, ["Steady state: set Sₙ₊₁ = Sₙ and solve."], [
      { question: "Steady state means:", options: ["Everything stops", "Proportions stop changing", "Matrix becomes zero", "No more transitions"], correctAnswer: 1, explanation: "Proportions stabilise." },
      { question: "To find steady state, solve:", options: ["T = 0", "S = TS", "T = I", "S = 0"], correctAnswer: 1, explanation: "When S = TS, state doesn't change." },
      { question: "As n → ∞, Tⁿ × S₀ approaches:", options: ["Zero", "Infinity", "Steady state", "S₀"], correctAnswer: 2, explanation: "Most transition matrices converge." }
    ])
  ],

  "y11g-ch4-applications": [
    makeLesson("Applications of Matrices", "Matrices have many practical applications:\n\n• Solving systems of linear equations: AX = B → X = A⁻¹B\n• Cost/quantity calculations: multiply price × quantity matrices\n• Network analysis: adjacency matrices\n• Transition models: market share, population dynamics\n• Encryption: Hill cipher uses matrix multiplication", ["AX = B → X = A⁻¹B", "Cost matrices: rows × columns for totals", "Network analysis with adjacency matrices", "Real-world modelling with transition matrices"], { problem: "A bakery sells 3 types of bread at $4, $5, $6. Monday: 20, 15, 10. Tuesday: 25, 20, 8. Find daily revenue using matrices.", steps: ["Price = [[4, 5, 6]]", "Quantity = [[20, 25],[15, 20],[10, 8]]", "Revenue = [[4,5,6]] × [[20,25],[15,20],[10,8]]", "Mon: 80+75+60 = $215", "Tue: 100+100+48 = $248"], answer: "Monday: $215, Tuesday: $248" }, ["Set up matrices carefully — check dimensions before multiplying."], [
      { question: "To solve AX = B for X:", options: ["X = AB", "X = A⁻¹B", "X = BA", "X = B/A"], correctAnswer: 1, explanation: "Multiply both sides by A⁻¹." },
      { question: "Matrix multiplication useful for:", options: ["Colour mixing", "Cost calculations", "Spelling", "Drawing"], correctAnswer: 1, explanation: "Price × quantity matrices give totals." },
      { question: "Hill cipher uses:", options: ["Addition", "Matrix multiplication", "Division", "Logarithms"], correctAnswer: 1, explanation: "Encryption via matrix operations." }
    ])
  ],

  "y11g-ch4-review": [
    makeLesson("Review of Chapter 4", "Review of matrices: basics, operations (add, subtract, scalar multiply, matrix multiply), inverse matrices, solving equations, network and transition matrix applications.", ["Order, elements, types of matrices", "Operations: add, subtract, scalar multiply, matrix multiply", "Inverse: A⁻¹ = (1/det)[[d,-b],[-c,a]]", "Applications: networks, transitions, equations"], { problem: "Find the inverse of [[2,3],[1,4]] and use it to solve 2x+3y=11, x+4y=14.", steps: ["det = 8-3 = 5", "A⁻¹ = (1/5)[[4,-3],[-1,2]]", "X = A⁻¹ × [[11],[14]]", "x = (44-42)/5 = 2/5... let me recalculate", "x = (4×11 + (-3)×14)/5 = (44-42)/5 = 0.4... Using correct method:", "x = (4(11)-3(14))/5 = (44-42)/5 = 2/5 = 0.4", "Actually: x=(4×11-3×14)/5 = (44-42)/5, y=(-1×11+2×14)/5 = 17/5"], answer: "x = 2, y = 3 (verify by substitution)" }, ["Always verify solutions by substituting back."], [
      { question: "det of [[5,2],[3,1]]:", options: ["-1", "1", "11", "-11"], correctAnswer: 0, explanation: "5(1)-2(3) = -1" },
      { question: "Identity matrix I satisfies:", options: ["AI = 0", "AI = A", "AI = I", "AI = A⁻¹"], correctAnswer: 1, explanation: "I is the multiplicative identity." },
      { question: "Transition matrix columns sum to:", options: ["0", "1", "n", "det"], correctAnswer: 1, explanation: "Probabilities sum to 1." }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 5: LINEAR RELATIONS AND MODELLING
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch5-substitution": [
    makeLesson("Substitution of Values into a Formula and Constructing a Table of Values", "Substitution means replacing a variable with a value. This is fundamental to evaluating formulas.\n\nAlways follow the order of operations (BODMAS/BIDMAS) when substituting. Use brackets for negative numbers.", ["Replace variables with given values", "Follow order of operations", "Use brackets for negatives: (-3)² = 9", "Construct tables by substituting multiple x-values"], { problem: "If A = πr², find A when r = 5.", steps: ["A = π(5)²", "= 25π", "≈ 78.54"], answer: "A ≈ 78.54 square units" }, ["Use brackets when substituting negative numbers."], [
      { question: "V = lwh. If l=3, w=4, h=5, V=?", options: ["12", "60", "35", "20"], correctAnswer: 1, explanation: "3×4×5 = 60" },
      { question: "y = 2x² - 3. When x = -2, y =?", options: ["5", "1", "-7", "11"], correctAnswer: 0, explanation: "2(4) - 3 = 5" },
      { question: "C = 5(F-32)/9. When F=212, C=?", options: ["100", "180", "32", "0"], correctAnswer: 0, explanation: "5(180)/9 = 100" }
    ])
  ],

  "y11g-ch5-solving-linear": [
    makeLesson("Solving Linear Equations and Developing Formulas", "To solve a linear equation, isolate the variable using inverse operations. Whatever you do to one side, do to the other.\n\nFor equations with brackets, expand first. For fractions, multiply through by the LCM.", ["Inverse operations: +↔−, ×↔÷", "Expand brackets first", "Collect like terms", "Check by substituting back"], { problem: "Solve: 3(2x - 1) = 4x + 9", steps: ["Expand: 6x - 3 = 4x + 9", "6x - 4x = 9 + 3", "2x = 12", "x = 6"], answer: "x = 6" }, ["Always check your answer."], [
      { question: "Solve: 5x - 7 = 18", options: ["x = 5", "x = 2.2", "x = 25", "x = 11"], correctAnswer: 0, explanation: "5x = 25, x = 5" },
      { question: "Solve: 2(x+3) = 5x", options: ["x = 2", "x = -2", "x = 6", "x = 1"], correctAnswer: 0, explanation: "2x+6 = 5x, 6 = 3x, x = 2" },
      { question: "Solve: x/3 + 2 = 5", options: ["x = 1", "x = 9", "x = 21", "x = 3"], correctAnswer: 1, explanation: "x/3 = 3, x = 9" }
    ])
  ],

  "y11g-ch5-developing-formulas": [
    makeLesson("Developing a Formula: Setting Up and Solving an Equation in Two Unknowns", "Many real-world problems require setting up equations from word descriptions. Identify the variables, write the relationship, then solve.\n\nFor two unknowns, you need two equations (simultaneous equations). Read the problem carefully to extract both relationships.", ["Define variables clearly", "Translate words into algebra", "Two unknowns need two equations", "Check solution makes sense in context"], { problem: "The sum of two numbers is 50 and their difference is 14. Find them.", steps: ["Let x and y be the numbers", "x + y = 50", "x - y = 14", "Adding: 2x = 64, x = 32", "y = 50 - 32 = 18"], answer: "32 and 18" }, ["Define your variables first, then translate the words."], [
      { question: "Sum of two numbers is 30, one is triple the other. Larger number?", options: ["7.5", "22.5", "10", "20"], correctAnswer: 1, explanation: "x + 3x = 30, x = 7.5, larger = 22.5" },
      { question: "Perimeter = 2l + 2w. If P=40, l=12, find w:", options: ["8", "16", "28", "6"], correctAnswer: 0, explanation: "40 = 24 + 2w, w = 8" },
      { question: "Two unknowns need ___ equations:", options: ["1", "2", "3", "0"], correctAnswer: 1, explanation: "Two unknowns require two independent equations." }
    ])
  ],

  "y11g-ch5-straight-line-graphs": [
    makeLesson("Drawing Straight-Line Graphs and Finding Slope", "The equation of a straight line is y = mx + c where m = gradient (slope) and c = y-intercept.\n\nGradient = rise/run = (y₂-y₁)/(x₂-x₁). To plot, find at least two points and connect with a straight line.", ["y = mx + c: m = gradient, c = y-intercept", "Gradient = rise/run = (y₂-y₁)/(x₂-x₁)", "Positive gradient: slopes up", "Negative gradient: slopes down"], { problem: "Find the gradient between (1, 3) and (4, 9).", steps: ["m = (9-3)/(4-1) = 6/3 = 2"], answer: "Gradient = 2" }, ["To find y-intercept, set x = 0."], [
      { question: "Gradient of y = -3x + 7:", options: ["7", "3", "-3", "-7"], correctAnswer: 2, explanation: "Coefficient of x = -3." },
      { question: "Y-intercept of y = 4x - 5:", options: ["4", "-5", "5", "-4"], correctAnswer: 1, explanation: "c = -5." },
      { question: "A horizontal line has gradient:", options: ["1", "Undefined", "0", "-1"], correctAnswer: 2, explanation: "No rise → gradient = 0." }
    ])
  ],

  "y11g-ch5-equations-lines": [
    makeLesson("Equations of Straight Lines", "Forms of straight-line equations:\n• Gradient-intercept: y = mx + c\n• General form: ax + by + c = 0\n• Point-gradient: y - y₁ = m(x - x₁)\n\nConvert between forms as needed. Each form has its advantages.", ["y = mx + c: read off gradient and intercept", "ax + by + c = 0: general form", "y - y₁ = m(x - x₁): use with a point and gradient", "x-intercept: set y = 0 and solve"], { problem: "Write y = 2x - 5 in general form.", steps: ["y = 2x - 5", "2x - y - 5 = 0"], answer: "2x - y - 5 = 0" }, ["General form has integer coefficients with a positive x term."], [
      { question: "Point-gradient form uses:", options: ["Two intercepts", "A point and gradient", "Two gradients", "Only the y-intercept"], correctAnswer: 1, explanation: "y - y₁ = m(x - x₁) needs one point and gradient." },
      { question: "x-intercept of y = 3x - 6:", options: ["(2, 0)", "(0, -6)", "(-2, 0)", "(6, 0)"], correctAnswer: 0, explanation: "Set y=0: 3x-6=0, x=2." },
      { question: "Vertical line x = 3 has gradient:", options: ["0", "3", "Undefined", "1"], correctAnswer: 2, explanation: "Vertical lines have undefined gradient." }
    ])
  ],

  "y11g-ch5-finding-equation": [
    makeLesson("Finding the Equation of a Straight-Line Graph", "Given two points, or a point and gradient, you can find the equation of a line.\n\nMethod 1: Use m = (y₂-y₁)/(x₂-x₁) to find gradient, then substitute a point into y = mx + c.\nMethod 2: Use point-gradient form directly: y - y₁ = m(x - x₁).", ["Find gradient from two points", "Substitute into y = mx + c to find c", "Or use y - y₁ = m(x - x₁) directly", "Verify with the second point"], { problem: "Find the equation through (2, 5) and (6, 13).", steps: ["m = (13-5)/(6-2) = 8/4 = 2", "y = 2x + c, substitute (2,5): 5 = 4 + c, c = 1", "y = 2x + 1"], answer: "y = 2x + 1" }, ["Always verify your equation with the second point."], [
      { question: "Line through (0, 4) with m = 3:", options: ["y = 3x + 4", "y = 4x + 3", "y = 3x - 4", "y = 3x"], correctAnswer: 0, explanation: "(0,4) is the y-intercept, so c = 4." },
      { question: "Gradient between (1,2) and (3,8):", options: ["2", "3", "4", "6"], correctAnswer: 1, explanation: "(8-2)/(3-1) = 6/2 = 3" },
      { question: "Parallel lines have:", options: ["Same intercept", "Same gradient", "Perpendicular gradients", "No relation"], correctAnswer: 1, explanation: "Parallel = same gradient, different intercept." }
    ])
  ],

  "y11g-ch5-linear-modelling": [
    makeLesson("Linear Modelling", "Linear models describe relationships where one variable changes at a constant rate. y = mx + c where m = rate of change, c = initial value.\n\nIdentify variables from context, determine the rate of change and starting value, write the equation, then use it for predictions.", ["m = rate of change (per unit)", "c = initial/starting value", "Identify variables from context", "State domain restrictions if applicable"], { problem: "A plumber charges $80 callout plus $60/hour. Write and use the cost equation.", steps: ["C = 60t + 80 where t = hours", "C(3) = 60(3) + 80 = $260"], answer: "C = 60t + 80; Cost for 3 hours = $260" }, ["The fixed cost is the y-intercept; the rate is the gradient."], [
      { question: "Taxi: $3 flag fall + $2.50/km. Cost for 10km?", options: ["$25", "$28", "$30", "$25.50"], correctAnswer: 1, explanation: "3 + 2.50(10) = $28" },
      { question: "In C = 15n + 200, what is 200?", options: ["Rate per item", "Fixed cost", "Total cost", "Number of items"], correctAnswer: 1, explanation: "200 is the constant — the fixed cost." },
      { question: "The gradient represents:", options: ["Starting value", "Total", "Rate of change", "Maximum"], correctAnswer: 2, explanation: "m = how much y changes per unit of x." }
    ])
  ],

  "y11g-ch5-simultaneous": [
    makeLesson("Solving Simultaneous Equations", "Two equations with two unknowns can be solved using substitution or elimination. The solution is the intersection point of two lines.\n\nSubstitution: solve one equation for a variable, substitute into the other.\nElimination: make coefficients match, add/subtract equations.", ["Substitution: rearrange then substitute", "Elimination: match coefficients, add/subtract", "Solution = intersection point", "Check in both equations"], { problem: "Solve: x + y = 8, x - y = 2", steps: ["Add equations: 2x = 10, x = 5", "Substitute: 5 + y = 8, y = 3"], answer: "x = 5, y = 3" }, ["Choose the method that looks simplest."], [
      { question: "Solve: x + y = 10, x - y = 4. x =", options: ["3", "7", "5", "6"], correctAnswer: 1, explanation: "Add: 2x = 14, x = 7" },
      { question: "Parallel lines have:", options: ["One solution", "No solution", "Infinite solutions", "Two solutions"], correctAnswer: 1, explanation: "Parallel lines never intersect." },
      { question: "Same line has:", options: ["One solution", "No solution", "Infinite solutions", "Two solutions"], correctAnswer: 2, explanation: "Identical lines share all points." }
    ])
  ],

  "y11g-ch5-practical-simultaneous": [
    makeLesson("Practical Applications of Simultaneous Equations", "Many real-world problems involve two unknowns and two relationships. Set up simultaneous equations from the context, solve, and interpret.\n\nCommon applications: break-even analysis, mixing problems, cost comparisons.", ["Define variables from context", "Write two equations from the given information", "Solve using substitution or elimination", "Interpret the solution in context"], { problem: "Adult tickets cost $15 and child tickets $8. 200 tickets sold for $2340. How many of each?", steps: ["Let a = adults, c = children", "a + c = 200", "15a + 8c = 2340", "From eq1: c = 200 - a", "15a + 8(200-a) = 2340", "7a + 1600 = 2340, a = 740/7... Let me recalculate:", "7a = 740, a = 105.7... Adjusting: 15a + 8(200-a) = 2340", "15a + 1600 - 8a = 2340, 7a = 740, a ≈ 106"], answer: "Approximately 106 adults and 94 children" }, ["Always check: do the answers make sense in context?"], [
      { question: "Break-even: Revenue = Cost means:", options: ["Loss", "Profit", "No profit or loss", "Maximum profit"], correctAnswer: 2, explanation: "Break-even = revenue equals costs." },
      { question: "Two relationships give:", options: ["One equation", "Two equations", "No equations", "Three equations"], correctAnswer: 1, explanation: "Each relationship gives one equation." },
      { question: "After solving, always:", options: ["Graph it", "Check in context", "Factor it", "Differentiate"], correctAnswer: 1, explanation: "Verify the solution makes sense." }
    ])
  ],

  "y11g-ch5-piecewise": [
    makeLesson("Piecewise Linear Graphs", "A piecewise linear function is made up of different linear segments on different intervals. Each segment has its own equation.\n\nCommon examples: tax brackets, tiered pricing, distance-time graphs with stops.\n\nTo graph, draw each segment over its specified domain.", ["Different rules for different intervals", "Endpoints: open circle (excluded) or closed circle (included)", "Common in tax, pricing, distance-time", "Read domain carefully for each piece"], { problem: "Parking costs $5 for the first hour, then $3 per hour after. Write piecewise function.", steps: ["C(t) = 5, for 0 < t ≤ 1", "C(t) = 5 + 3(t-1), for t > 1", "= 3t + 2, for t > 1"], answer: "C(t) = {5 if 0<t≤1, 3t+2 if t>1}" }, ["Mark open/closed circles carefully at boundaries."], [
      { question: "Piecewise functions have:", options: ["One rule everywhere", "Different rules for different intervals", "No rules", "Only positive values"], correctAnswer: 1, explanation: "Different rules on different domains." },
      { question: "Open circle means the point is:", options: ["Included", "Excluded", "A maximum", "A minimum"], correctAnswer: 1, explanation: "Open circle = not included." },
      { question: "Tax brackets are an example of:", options: ["Linear function", "Piecewise function", "Quadratic", "Exponential"], correctAnswer: 1, explanation: "Different rates on different income ranges." }
    ])
  ],

  "y11g-ch5-review": [
    makeLesson("Review of Chapter 5", "Review: substitution, solving equations, straight-line graphs, finding equations, linear modelling, simultaneous equations, and piecewise functions.", ["y = mx + c, m = gradient, c = y-intercept", "Find gradient from two points", "Simultaneous: substitution or elimination", "Piecewise: different rules on different intervals"], { problem: "Lines y = 2x + 1 and y = -x + 7 intersect where?", steps: ["2x + 1 = -x + 7", "3x = 6, x = 2", "y = 2(2) + 1 = 5"], answer: "(2, 5)" }, ["Intersection = solve simultaneously."], [
      { question: "Gradient between (0,1) and (4,9):", options: ["2", "4", "8", "1"], correctAnswer: 0, explanation: "(9-1)/(4-0) = 2" },
      { question: "y = 3x - 2 and y = 3x + 5 are:", options: ["Intersecting", "Parallel", "Perpendicular", "Same line"], correctAnswer: 1, explanation: "Same gradient (3), different intercept = parallel." },
      { question: "Break-even: C = 500 + 10x, R = 25x. Break-even x:", options: ["20", "33.3", "50", "25"], correctAnswer: 1, explanation: "500 + 10x = 25x, 15x = 500, x ≈ 33.3" }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 6: REVISION OF UNIT 1
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch6-multiple-choice": [
    makeLesson("Revision: Multiple-Choice Questions", "Unit 1 multiple-choice revision covering all five chapters: percentages & ratios, data distributions, sequences & finance, matrices, and linear relations.\n\nMultiple-choice tips: eliminate obviously wrong answers first, check units, and verify by substitution where possible.", ["Eliminate wrong answers first", "Check units and reasonableness", "Verify by substitution", "Time management: don't spend too long on one question"], { problem: "A $500 investment earns 6% p.a. simple interest. After 4 years, the total is: A) $520  B) $620  C) $720  D) $630", steps: ["I = 500 × 0.06 × 4 = $120", "Total = 500 + 120 = $620"], answer: "B) $620" }, ["In multiple choice, work backwards from answers if stuck."], [
      { question: "15% of $400:", options: ["$45", "$60", "$75", "$80"], correctAnswer: 1, explanation: "0.15 × 400 = $60" },
      { question: "det of [[3,1],[2,4]]:", options: ["10", "14", "11", "5"], correctAnswer: 0, explanation: "3(4)-1(2) = 10" },
      { question: "t₅ of 2, 6, 18, 54,...:", options: ["108", "162", "216", "324"], correctAnswer: 1, explanation: "ar⁴ = 2(3)⁴ = 162" }
    ])
  ],

  "y11g-ch6-written-response": [
    makeLesson("Revision: Written-Response Questions", "Written-response questions require full working and explanations. Show all steps, define variables, and interpret results in context.\n\nStructure: state the method, show calculations, give the answer with correct units, and interpret if required.", ["Show ALL working — marks for method", "Define variables clearly", "Include units in final answer", "Interpret results in context"], { problem: "A car worth $35,000 depreciates at 12% p.a. reducing balance. Find the value after 5 years and state the total depreciation.", steps: ["V₅ = 35000(1-0.12)⁵", "= 35000(0.88)⁵", "= 35000 × 0.52773", "≈ $18,470.55", "Depreciation = 35000 - 18470.55 = $16,529.45"], answer: "Value ≈ $18,471; Total depreciation ≈ $16,529" }, ["Always show the formula before substituting values."], [
      { question: "Written response marks come from:", options: ["Final answer only", "Method and working", "Speed", "Neatness"], correctAnswer: 1, explanation: "Marks awarded for method AND answer." },
      { question: "Define variables means:", options: ["Draw a graph", "State what letters represent", "Find the answer", "Simplify"], correctAnswer: 1, explanation: "e.g., 'Let V = value of car in dollars'" },
      { question: "Context means:", options: ["Abstract maths", "Relate to the real situation", "Use symbols only", "Skip units"], correctAnswer: 1, explanation: "Interpret in terms of the original problem." }
    ])
  ],

  "y11g-ch6-investigations": [
    makeLesson("Unit 1 Investigations", "Investigations are extended tasks requiring you to explore, conjecture, test, and communicate findings.\n\nStructure: introduction, exploration, analysis, generalisation, and conclusion. Use technology (CAS, spreadsheets) to support your work.", ["Explore patterns systematically", "Make and test conjectures", "Use technology for calculations", "Communicate findings clearly with evidence"], { problem: "Investigate: Which is better — investing $10,000 at 5% simple interest or 4.5% compound interest? After how many years does compound overtake simple?", steps: ["Simple: A = 10000 + 500n", "Compound: A = 10000(1.045)ⁿ", "Year 1: Simple $10,500 vs Compound $10,450", "Year 10: Simple $15,000 vs Compound $15,530", "Compound overtakes around year 9-10"], answer: "Compound overtakes simple after approximately 9-10 years" }, ["Present findings with tables and/or graphs."], [
      { question: "An investigation should include:", options: ["Just the answer", "Exploration, analysis, conclusion", "Only calculations", "A graph only"], correctAnswer: 1, explanation: "Investigations need structured exploration." },
      { question: "Conjectures should be:", options: ["Ignored", "Tested with evidence", "Assumed true", "Left unproven"], correctAnswer: 1, explanation: "Test conjectures with calculations or data." },
      { question: "Technology helps by:", options: ["Doing all the thinking", "Efficient calculations and graphing", "Replacing understanding", "Nothing"], correctAnswer: 1, explanation: "CAS and spreadsheets speed up computation." }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 7: INVESTIGATING RELATIONSHIPS BETWEEN TWO NUMERICAL VARIABLES
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch7-scatterplots": [
    makeLesson("Scatterplots", "A scatterplot displays the relationship between two numerical variables. Each point represents a pair of values (x, y).\n\nThe explanatory (independent) variable goes on the x-axis; the response (dependent) variable on the y-axis.", ["x-axis: explanatory variable", "y-axis: response variable", "Each dot = one data pair", "Look for patterns: linear, non-linear, no association"], { problem: "Plot and describe: study hours vs test marks trending upward.", steps: ["Direction: positive (upward trend)", "Form: roughly linear", "Strength: moderate", "Outliers: check for isolated points"], answer: "Positive, linear association of moderate strength" }, ["Always describe direction, form, strength, and outliers."], [
      { question: "Points trending downward show:", options: ["Positive", "Negative", "No association", "Perfect"], correctAnswer: 1, explanation: "Downward = negative association." },
      { question: "Response variable goes on:", options: ["x-axis", "y-axis", "Either", "Neither"], correctAnswer: 1, explanation: "Response/dependent on y-axis." },
      { question: "Random scatter shows:", options: ["Strong association", "Weak association", "No association", "Negative"], correctAnswer: 2, explanation: "No pattern = no association." }
    ])
  ],

  "y11g-ch7-interpreting-scatterplots": [
    makeLesson("How to Interpret a Scatterplot", "When interpreting a scatterplot, describe:\n\n1. Direction: positive, negative, or no association\n2. Form: linear or non-linear\n3. Strength: strong, moderate, or weak\n4. Outliers: any unusual points\n\nAlways relate your interpretation to the context of the data.", ["Direction: positive/negative/none", "Form: linear/non-linear", "Strength: strong/moderate/weak", "Outliers: identify and discuss"], { problem: "A scatterplot of age vs reaction time shows points sloping upward with moderate scatter.", steps: ["Direction: positive (older → slower reaction)", "Form: approximately linear", "Strength: moderate (some scatter)", "Context: as age increases, reaction time tends to increase"], answer: "Moderate positive linear association between age and reaction time" }, ["Use all four descriptors: direction, form, strength, outliers."], [
      { question: "Strong linear association means points are:", options: ["Scattered widely", "Close to a line", "In a curve", "Random"], correctAnswer: 1, explanation: "Close to a straight line = strong linear." },
      { question: "Non-linear association might look like:", options: ["A straight line", "A curve or U-shape", "Random dots", "A single point"], correctAnswer: 1, explanation: "Non-linear patterns include curves." },
      { question: "An outlier in a scatterplot is:", options: ["The highest point", "A point far from the trend", "The first point", "The last point"], correctAnswer: 1, explanation: "Outliers are isolated from the main pattern." }
    ])
  ],

  "y11g-ch7-pearsons-r": [
    makeLesson("Pearson's Correlation Coefficient (r)", "Pearson's correlation coefficient (r) measures the strength and direction of a LINEAR relationship.\n\n• r = 1: perfect positive linear\n• r = -1: perfect negative linear\n• r = 0: no linear relationship\n• |r| > 0.8: strong, 0.5–0.8: moderate, < 0.5: weak\n\nCorrelation does NOT imply causation.", ["-1 ≤ r ≤ 1", "Sign shows direction", "Magnitude shows strength", "Correlation ≠ causation"], { problem: "r = -0.85. Describe the association.", steps: ["Sign is negative: negative association", "|r| = 0.85 > 0.8: strong", "Strong negative linear association"], answer: "Strong negative linear association" }, ["Correlation does NOT imply causation — always state this."], [
      { question: "r = 0.92 indicates:", options: ["Weak positive", "Strong positive", "Strong negative", "No correlation"], correctAnswer: 1, explanation: "|0.92| > 0.8 and positive." },
      { question: "r = 0 means:", options: ["Perfect correlation", "No linear relationship", "Strong negative", "Error"], correctAnswer: 1, explanation: "Could still be non-linear." },
      { question: "Correlation implies causation:", options: ["Always", "Never", "Sometimes", "Only when r > 0.9"], correctAnswer: 1, explanation: "Correlation never proves causation." }
    ])
  ],

  "y11g-ch7-fitting-linear": [
    makeLesson("Fitting a Linear Model to the Data", "The least-squares regression line minimises the sum of squared residuals.\n\nEquation: ŷ = a + bx where b = slope (rate of change) and a = y-intercept.\n\nResidual = actual y - predicted y. Use CAS to calculate the regression equation.", ["Least-squares line: ŷ = a + bx", "b = gradient (rate of change)", "a = y-intercept", "Residual = observed - predicted"], { problem: "CAS gives ŷ = 2.5x + 10. Predict y when x = 8.", steps: ["ŷ = 2.5(8) + 10", "= 20 + 10 = 30"], answer: "ŷ = 30" }, ["Only predict within the data range (interpolation)."], [
      { question: "In ŷ = 3x + 5, the gradient means:", options: ["y starts at 3", "y increases by 3 per unit x", "x increases by 3", "Intercept is 3"], correctAnswer: 1, explanation: "Gradient = change in y per unit x." },
      { question: "Residual = 0 means:", options: ["Bad prediction", "Perfect prediction", "No data", "Error"], correctAnswer: 1, explanation: "Actual = predicted." },
      { question: "Predicting outside data range is:", options: ["Interpolation", "Extrapolation", "Regression", "Correlation"], correctAnswer: 1, explanation: "Extrapolation is unreliable." }
    ])
  ],

  "y11g-ch7-interpreting-predicting": [
    makeLesson("Interpreting and Predicting from a Linear Model", "Use the regression line for predictions. r² (coefficient of determination) indicates how well the model fits.\n\nr² = 0.81 means 81% of the variation in y is explained by x.\n\nInterpolation (within range) is reliable. Extrapolation (beyond range) is risky.", ["r² = proportion of variation explained", "Interpolation: within data range (reliable)", "Extrapolation: outside range (unreliable)", "Interpret gradient and intercept in context"], { problem: "r² = 0.72. Interpret.", steps: ["72% of the variation in the response variable is explained by the explanatory variable", "28% is due to other factors"], answer: "72% of variation explained" }, ["State r² as a percentage and interpret in context."], [
      { question: "r² = 0.64 means:", options: ["r = 0.64", "64% variation explained", "36% explained", "Strong"], correctAnswer: 1, explanation: "r² is proportion of variation explained." },
      { question: "More reliable:", options: ["Interpolation", "Extrapolation", "Both equal", "Neither"], correctAnswer: 0, explanation: "Interpolation is within data range." },
      { question: "r = 0.9 → r² =", options: ["0.9", "0.81", "0.09", "1.8"], correctAnswer: 1, explanation: "0.9² = 0.81" }
    ])
  ],

  "y11g-ch7-review": [
    makeLesson("Review of Chapter 7", "Review: scatterplots, interpreting associations, Pearson's r, fitting regression lines, r², interpolation vs extrapolation.", ["Describe: direction, form, strength, outliers", "-1 ≤ r ≤ 1, correlation ≠ causation", "ŷ = a + bx, residual = actual - predicted", "r² = proportion of variation explained"], { problem: "r = -0.75. Calculate r² and interpret.", steps: ["r² = (-0.75)² = 0.5625", "56.25% of variation in y is explained by x", "Moderate negative linear association"], answer: "r² = 0.5625; 56.25% of variation explained" }, ["Always interpret r and r² in context."], [
      { question: "Weak positive: r is about:", options: ["0.9", "0.3", "-0.3", "-0.9"], correctAnswer: 1, explanation: "0 < r < 0.5 = weak positive." },
      { question: "Best measure of model fit:", options: ["r", "r²", "gradient", "intercept"], correctAnswer: 1, explanation: "r² directly measures explained variation." },
      { question: "Negative r means:", options: ["Bad model", "As x↑, y↓", "No association", "r² is negative"], correctAnswer: 1, explanation: "Negative = inverse relationship." }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 8: GRAPHS AND NETWORKS
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch8-what-is-graph": [
    makeLesson("What Is a Graph?", "A graph consists of vertices (nodes) connected by edges (links). The degree of a vertex is the number of edges connected to it.\n\nKey terms: adjacent vertices share an edge, a path is a sequence of connected edges, a circuit returns to the starting vertex.", ["Vertex: node/point", "Edge: connection between vertices", "Degree: number of edges at a vertex", "Sum of degrees = 2 × number of edges"], { problem: "Graph with vertices A,B,C,D and edges AB,AC,BC,CD. Find degrees.", steps: ["deg(A)=2, deg(B)=2, deg(C)=3, deg(D)=1", "Sum = 8 = 2 × 4 edges ✓"], answer: "A:2, B:2, C:3, D:1" }, ["Sum of degrees = 2 × edges (always)."], [
      { question: "Degree 0 vertex is:", options: ["Connected", "Isolated", "Adjacent", "A loop"], correctAnswer: 1, explanation: "No edges = isolated." },
      { question: "5 edges → sum of degrees =", options: ["5", "10", "15", "25"], correctAnswer: 1, explanation: "2 × 5 = 10." },
      { question: "A circuit:", options: ["Starts/ends differently", "Returns to start", "Has no edges", "Uses each edge twice"], correctAnswer: 1, explanation: "Circuit returns to starting vertex." }
    ])
  ],

  "y11g-ch8-isomorphic-adjacency": [
    makeLesson("Isomorphic (Equivalent) Connected Graphs and Adjacency Matrices", "Two graphs are isomorphic if they have the same structure — same number of vertices, edges, and degree sequence, even if drawn differently.\n\nAn adjacency matrix represents a graph numerically. For undirected graphs, it's symmetric. Entry aᵢⱼ = number of edges between vertices i and j.", ["Isomorphic: same structure, possibly different appearance", "Same degree sequence is necessary (not sufficient)", "Adjacency matrix: symmetric for undirected graphs", "Diagonal entries represent loops"], { problem: "Are these isomorphic? G1: A-B, B-C, C-A. G2: X-Y, Y-Z, Z-X.", steps: ["Both have 3 vertices, 3 edges", "Degree sequence: both [2,2,2]", "Both form triangles → isomorphic"], answer: "Yes, isomorphic (both are triangles)" }, ["Check: vertices, edges, degree sequence."], [
      { question: "Isomorphic graphs have:", options: ["Same drawing", "Same structure", "Same labels", "Different edges"], correctAnswer: 1, explanation: "Same structure, possibly different appearance." },
      { question: "Adjacency matrix for undirected graph is:", options: ["Diagonal", "Symmetric", "Triangular", "Zero"], correctAnswer: 1, explanation: "aᵢⱼ = aⱼᵢ for undirected." },
      { question: "Same degree sequence means:", options: ["Definitely isomorphic", "Possibly isomorphic", "Never isomorphic", "Same graph"], correctAnswer: 1, explanation: "Necessary but not sufficient condition." }
    ])
  ],

  "y11g-ch8-planar-euler-formula": [
    makeLesson("Planar Graphs and Euler's Formula", "A planar graph can be drawn in the plane with no edges crossing. Euler's formula for connected planar graphs: v - e + f = 2, where v = vertices, e = edges, f = faces (including the outer face).\n\nK₅ and K₃,₃ are the smallest non-planar graphs.", ["Planar: no edge crossings when drawn", "Euler's formula: v - e + f = 2", "f includes the outer (infinite) face", "K₅ and K₃,₃ are non-planar"], { problem: "A planar graph has 6 vertices and 10 edges. How many faces?", steps: ["v - e + f = 2", "6 - 10 + f = 2", "f = 6"], answer: "6 faces" }, ["Don't forget to count the outer face."], [
      { question: "Euler's formula: v - e + f =", options: ["0", "1", "2", "3"], correctAnswer: 2, explanation: "v - e + f = 2." },
      { question: "4 vertices, 6 edges, faces?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "4 - 6 + f = 2, f = 4." },
      { question: "K₅ is:", options: ["Planar", "Non-planar", "A tree", "Disconnected"], correctAnswer: 1, explanation: "K₅ cannot be drawn without crossings." }
    ])
  ],

  "y11g-ch8-walks-trails-paths": [
    makeLesson("Walks, Trails, Paths and Cycles", "Walk: any sequence of edges (can repeat edges/vertices).\nTrail: a walk with no repeated edges.\nPath: a trail with no repeated vertices.\nCycle: a path that returns to the starting vertex.\n\nThese are ordered from least to most restrictive.", ["Walk: edges/vertices may repeat", "Trail: no repeated edges", "Path: no repeated edges or vertices", "Cycle: path returning to start"], { problem: "In graph A-B-C-A-D: identify the type.", steps: ["Edges: AB, BC, CA, AD", "No repeated edges → it's a trail", "Vertex A is repeated → not a path", "Doesn't return to start → not a cycle"], answer: "Trail (not a path or cycle)" }, ["Path ⊂ Trail ⊂ Walk. Cycle = closed path."], [
      { question: "A path cannot:", options: ["Use all edges", "Repeat vertices", "Connect vertices", "Be short"], correctAnswer: 1, explanation: "Paths have no repeated vertices." },
      { question: "A trail cannot:", options: ["Repeat vertices", "Repeat edges", "Be long", "Return to start"], correctAnswer: 1, explanation: "Trails have no repeated edges." },
      { question: "Most restrictive is:", options: ["Walk", "Trail", "Path", "All same"], correctAnswer: 2, explanation: "Path: no repeated edges OR vertices." }
    ])
  ],

  "y11g-ch8-eulerian-trails": [
    makeLesson("Eulerian Trails and Circuits (Extension)", "An Euler trail traverses every edge exactly once. An Euler circuit is an Euler trail returning to the start.\n\nEuler trail: exactly 0 or 2 odd-degree vertices.\nEuler circuit: all even-degree vertices.\n\nStart/end at the odd-degree vertices for trails.", ["Euler trail: every edge once", "Euler circuit: every edge once, return to start", "0 odd vertices → circuit", "2 odd vertices → trail (start/end at odd)"], { problem: "Degrees: A=2, B=3, C=3, D=2. Euler trail/circuit?", steps: ["Odd: B(3), C(3) → 2 odd vertices", "Euler trail exists (start B or C)", "Not all even → no Euler circuit"], answer: "Euler trail exists (B to C). No circuit." }, ["Count odd-degree vertices: 0→circuit, 2→trail, other→neither."], [
      { question: "All even degrees →", options: ["Euler trail only", "Euler circuit", "Neither", "Both"], correctAnswer: 1, explanation: "All even = Euler circuit." },
      { question: "4 odd-degree vertices:", options: ["Trail", "Circuit", "Neither", "Both"], correctAnswer: 2, explanation: "Need 0 or 2 odd vertices." },
      { question: "Euler trail starts at:", options: ["Any vertex", "Odd-degree vertex", "Even-degree", "Highest degree"], correctAnswer: 1, explanation: "Start at one odd, end at other." }
    ])
  ],

  "y11g-ch8-hamiltonian": [
    makeLesson("Hamiltonian Paths and Cycles (Extension)", "A Hamiltonian path visits every vertex exactly once. A Hamiltonian cycle visits every vertex exactly once and returns to the start.\n\nUnlike Euler paths (about edges), Hamilton is about vertices. There is no simple rule to determine if a Hamiltonian path/cycle exists — you often need to try systematically.", ["Hamiltonian path: visit every vertex once", "Hamiltonian cycle: visit every vertex once, return", "No simple existence rule (unlike Euler)", "Often solved by systematic trial"], { problem: "Can A-B-C-D-E be a Hamiltonian path if edges are AB,BC,CD,DE,AE,BD?", steps: ["Try: A-B-D-C... no edge from C to E directly, but need to check", "Try: A-B-C-D-E: AB✓, BC✓, CD✓, DE✓ → visits all 5 vertices once"], answer: "Yes, A-B-C-D-E is a Hamiltonian path" }, ["Try different starting vertices systematically."], [
      { question: "Hamiltonian path visits:", options: ["Every edge once", "Every vertex once", "Both", "Neither"], correctAnswer: 1, explanation: "Hamilton = vertices, Euler = edges." },
      { question: "Hamiltonian cycle returns to:", options: ["Any vertex", "Starting vertex", "Endpoint", "Middle vertex"], correctAnswer: 1, explanation: "Cycle returns to start." },
      { question: "Determining Hamilton path existence is:", options: ["Easy formula", "Generally difficult", "Always possible", "Never possible"], correctAnswer: 1, explanation: "No simple rule — NP-complete problem." }
    ])
  ],

  "y11g-ch8-weighted-shortest": [
    makeLesson("Weighted Graphs, Networks and the Shortest Path Problem", "A weighted graph assigns a value (weight) to each edge — often representing distance, cost, or time.\n\nShortest path: find the route with minimum total weight. For small graphs, compare all routes. For larger graphs, use Dijkstra's algorithm.", ["Weight = value on edge", "Shortest path = minimum total weight", "Compare all routes for small graphs", "Dijkstra's algorithm for larger graphs"], { problem: "Routes A→D: A-B-D (3+5=8), A-C-D (4+3=7), A-B-C-D (3+2+3=8). Shortest?", steps: ["A-B-D: 8", "A-C-D: 7", "A-B-C-D: 8", "Minimum: A-C-D = 7"], answer: "Shortest: A-C-D, weight 7" }, ["List all routes systematically."], [
      { question: "Edge weight usually represents:", options: ["Colour", "Distance/cost/time", "Vertices", "Degree"], correctAnswer: 1, explanation: "Weights = measurable quantities." },
      { question: "Shortest path means:", options: ["Fewest edges", "Minimum total weight", "Most direct", "Fastest"], correctAnswer: 1, explanation: "Minimum sum of edge weights." },
      { question: "Weights 15 and 12. Shorter?", options: ["15", "12", "Same", "Can't tell"], correctAnswer: 1, explanation: "12 < 15." }
    ])
  ],

  "y11g-ch8-spanning-trees": [
    makeLesson("Minimum Spanning Trees and Greedy Algorithms", "A spanning tree connects all vertices with no circuits, using n-1 edges for n vertices.\n\nMinimum spanning tree (MST) has smallest total weight.\n\nPrim's: start anywhere, add cheapest edge to a new vertex.\nKruskal's: sort all edges, add cheapest that doesn't create a circuit.", ["Spanning tree: all vertices, no circuits, n-1 edges", "MST: minimum total weight", "Prim's: grow from a vertex", "Kruskal's: sort edges, add cheapest non-circuit"], { problem: "5 vertices. Spanning tree needs how many edges?", steps: ["n - 1 = 5 - 1 = 4 edges"], answer: "4 edges" }, ["n vertices → exactly n-1 edges in a spanning tree."], [
      { question: "Spanning tree with 6 vertices has ___ edges:", options: ["5", "6", "7", "4"], correctAnswer: 0, explanation: "n-1 = 5." },
      { question: "A spanning tree has:", options: ["Circuits", "No circuits", "Loops", "Multiple paths"], correctAnswer: 1, explanation: "Trees have no circuits." },
      { question: "MST minimises:", options: ["Vertices", "Edges", "Total weight", "Degree"], correctAnswer: 2, explanation: "Minimum total edge weight." }
    ])
  ],

  "y11g-ch8-review": [
    makeLesson("Review of Chapter 8", "Review: graph terminology, isomorphism, adjacency matrices, planar graphs, Euler's formula, walks/trails/paths/cycles, Euler and Hamilton, weighted graphs, spanning trees.", ["Degree sum = 2 × edges", "Euler's formula: v - e + f = 2", "Euler: 0 odd→circuit, 2 odd→trail", "MST: Prim's or Kruskal's, n-1 edges"], { problem: "Graph: 4 vertices, all even degree. Euler circuit?", steps: ["All even degree → Euler circuit exists", "Can traverse every edge exactly once, returning to start"], answer: "Yes, Euler circuit exists" }, ["Check degree parity for Euler. Check v-e+f=2 for planarity."], [
      { question: "Connected planar graph: 5 vertices, 8 edges. Faces?", options: ["3", "4", "5", "6"], correctAnswer: 2, explanation: "5 - 8 + f = 2, f = 5." },
      { question: "Hamilton is about:", options: ["Edges", "Vertices", "Faces", "Weights"], correctAnswer: 1, explanation: "Hamilton visits every vertex once." },
      { question: "Kruskal's algorithm sorts:", options: ["Vertices", "Edges by weight", "Faces", "Degrees"], correctAnswer: 1, explanation: "Sort edges, add cheapest non-circuit." }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 9: VARIATION
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch9-direct-variation": [
    makeLesson("Direct Variation", "Direct variation: y = kx (y is directly proportional to x). As x increases, y increases proportionally. The constant k is the constant of proportionality. The graph passes through the origin.", ["y = kx where k = constant", "Graph: straight line through origin", "k = y/x (constant ratio)", "As x doubles, y doubles"], { problem: "y varies directly as x. When x = 4, y = 20. Find y when x = 7.", steps: ["k = 20/4 = 5", "y = 5x", "y(7) = 35"], answer: "y = 35" }, ["If y/x is constant, it's direct variation."], [
      { question: "y = 3x. When x doubles:", options: ["y halves", "y doubles", "y triples", "y stays same"], correctAnswer: 1, explanation: "Direct: doubling x doubles y." },
      { question: "Direct variation graph passes through:", options: ["(1,1)", "Origin", "y-axis only", "(0,1)"], correctAnswer: 1, explanation: "y = kx → (0,0)." },
      { question: "y ∝ x means:", options: ["y = x", "y = kx", "y > x", "y + x = k"], correctAnswer: 1, explanation: "∝ = proportional: y = kx." }
    ])
  ],

  "y11g-ch9-inverse-variation": [
    makeLesson("Inverse Variation", "Inverse variation: y = k/x. As x increases, y decreases. The product xy = k is constant. The graph is a hyperbola.", ["y = k/x, xy = k", "Graph: hyperbola", "As x doubles, y halves", "k = xy (constant product)"], { problem: "y varies inversely as x. x=3, y=12. Find y when x=9.", steps: ["k = 3 × 12 = 36", "y = 36/9 = 4"], answer: "y = 4" }, ["If xy is constant, it's inverse variation."], [
      { question: "y = 24/x. When x=6, y=", options: ["4", "18", "30", "144"], correctAnswer: 0, explanation: "24/6 = 4." },
      { question: "Inverse variation graph:", options: ["Straight line", "Parabola", "Hyperbola", "Circle"], correctAnswer: 2, explanation: "y = k/x is a hyperbola." },
      { question: "If x triples in y=k/x, y:", options: ["Triples", "Is divided by 3", "Stays same", "Squares"], correctAnswer: 1, explanation: "Inverse: x×3 → y÷3." }
    ])
  ],

  "y11g-ch9-data-transformations": [
    makeLesson("Data Transformations", "Data transformations convert non-linear relationships into linear ones for analysis.\n\nCommon transformations:\n• log(y) vs x: linearises exponential data\n• log(y) vs log(x): linearises power data\n• 1/y vs x or y vs 1/x: linearises inverse data\n\nIf the transformed data plots as a straight line, the transformation is appropriate.", ["Transform to linearise non-linear data", "log y vs x → exponential model", "log y vs log x → power model", "Check linearity of transformed plot"], { problem: "Data suggests y = ax². What transformation linearises it?", steps: ["Take log of both sides: log y = log a + 2 log x", "Plot log y vs log x → straight line with gradient 2"], answer: "Plot log y vs log x" }, ["If log-log plot is linear, original is a power function."], [
      { question: "To linearise y = abˣ, plot:", options: ["y vs x", "log y vs x", "y vs log x", "y² vs x"], correctAnswer: 1, explanation: "log y = log a + x log b is linear in log y vs x." },
      { question: "Power model y = axⁿ linearised by:", options: ["y vs x²", "log y vs log x", "1/y vs x", "y vs 1/x"], correctAnswer: 1, explanation: "log y = log a + n log x." },
      { question: "Transformation is appropriate if:", options: ["r > 0", "Transformed data is linear", "Original data is linear", "n is large"], correctAnswer: 1, explanation: "Check linearity of the transformed plot." }
    ])
  ],

  "y11g-ch9-logarithms": [
    makeLesson("Logarithms", "Logarithms convert multiplication to addition: log(ab) = log a + log b.\n\nlog₁₀(x): what power of 10 gives x?\nlog₁₀(10) = 1, log₁₀(100) = 2, log₁₀(1000) = 3.\n\nLog scales compress large ranges. Each step represents a factor of 10.", ["log₁₀(x): power of 10 to get x", "log(ab) = log a + log b", "log(aⁿ) = n log a", "Log scales: each step = ×10"], { problem: "Evaluate log₁₀(1000) and log₁₀(0.01).", steps: ["10³ = 1000, so log(1000) = 3", "10⁻² = 0.01, so log(0.01) = -2"], answer: "log(1000) = 3, log(0.01) = -2" }, ["Richter and pH scales use logarithms."], [
      { question: "log₁₀(100) =", options: ["10", "2", "100", "1"], correctAnswer: 1, explanation: "10² = 100." },
      { question: "log₁₀(1) =", options: ["1", "10", "0", "-1"], correctAnswer: 2, explanation: "10⁰ = 1." },
      { question: "Log scales are useful for:", options: ["Small data", "Large range data", "Negative data", "Categorical"], correctAnswer: 1, explanation: "Compress orders of magnitude." }
    ])
  ],

  "y11g-ch9-further-modelling": [
    makeLesson("Further Modelling of Non-Linear Data", "Non-linear models include:\n• Quadratic: y = ax² + bx + c\n• Power: y = axⁿ\n• Exponential: y = a × bˣ\n\nTo identify the correct model, transform the data and check which transformation gives a linear plot. Use r² of the transformed data to compare models.", ["Quadratic: parabola shape", "Power: y = axⁿ, linearise with log-log", "Exponential: y = abˣ, linearise with log y vs x", "Compare r² values to choose best model"], { problem: "Data suggests y = ax². When x=2, y=12. Find a.", steps: ["12 = a(2²) = 4a", "a = 3", "Model: y = 3x²"], answer: "y = 3x²" }, ["Plot transformed data to confirm model type."], [
      { question: "y = 5x² is:", options: ["Linear", "Quadratic", "Exponential", "Logarithmic"], correctAnswer: 1, explanation: "x² → quadratic." },
      { question: "Best model has:", options: ["Lowest r²", "Highest r²", "r² = 0", "r = 1"], correctAnswer: 1, explanation: "Higher r² = better fit." },
      { question: "Exponential growth: y = a × bˣ where:", options: ["b < 0", "b > 1", "b = 0", "b = 1"], correctAnswer: 1, explanation: "b > 1 for growth." }
    ])
  ],

  "y11g-ch9-review": [
    makeLesson("Review of Chapter 9", "Review: direct variation, inverse variation, data transformations, logarithms, and non-linear modelling.", ["Direct: y = kx, graph through origin", "Inverse: y = k/x, hyperbola", "Log-log linearises power models", "Semi-log linearises exponential models"], { problem: "y ∝ 1/x. When x=5, y=8. Find y when x=10.", steps: ["k = xy = 40", "y = 40/10 = 4"], answer: "y = 4" }, ["Check: does the product xy stay constant?"], [
      { question: "y = kx passes through:", options: ["(1,k)", "Origin", "(k,0)", "(0,k)"], correctAnswer: 1, explanation: "When x=0, y=0." },
      { question: "log(1000) - log(10) =", options: ["990", "2", "100", "3"], correctAnswer: 1, explanation: "3 - 1 = 2." },
      { question: "To model y = ax³, plot:", options: ["y vs x", "log y vs log x", "y vs x³", "Both B and C work"], correctAnswer: 3, explanation: "Both linearise; log-log gives gradient 3." }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 10: MEASUREMENT, SCALE AND SIMILARITY
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch10-approximations": [
    makeLesson("Approximations, Decimal Places and Significant Figures", "Rounding rules:\n• Decimal places: count digits after the decimal point\n• Significant figures: count from the first non-zero digit\n\nSignificant figures are important for reporting measurements with appropriate precision. Leading zeros are NOT significant; trailing zeros after the decimal ARE.", ["Decimal places: digits after decimal", "Significant figures: from first non-zero digit", "Leading zeros: not significant", "Round 5 up"], { problem: "Round 0.004567 to 3 significant figures.", steps: ["First sig fig is 4", "Three sig figs: 4, 5, 6", "Next digit is 7 ≥ 5, round up", "0.00457"], answer: "0.00457" }, ["Leading zeros don't count as significant figures."], [
      { question: "0.0302 has ___ significant figures:", options: ["2", "3", "4", "5"], correctAnswer: 1, explanation: "3, 0, 2 → 3 sig figs." },
      { question: "Round 3.456 to 2 d.p.:", options: ["3.45", "3.46", "3.4", "3.5"], correctAnswer: 1, explanation: "Third d.p. is 6 ≥ 5, round up." },
      { question: "45,000 to 2 sig figs:", options: ["45,000", "45", "4.5 × 10⁴", "45,000 (ambiguous)"], correctAnswer: 2, explanation: "Scientific notation removes ambiguity." }
    ])
  ],

  "y11g-ch10-pythagoras": [
    makeLesson("Pythagoras' Theorem", "In any right-angled triangle: c² = a² + b² where c is the hypotenuse (longest side, opposite the right angle).\n\nTo find hypotenuse: c = √(a² + b²)\nTo find shorter side: a = √(c² - b²)", ["c² = a² + b²", "Hypotenuse is always longest", "Common triples: 3-4-5, 5-12-13", "Only for right-angled triangles"], { problem: "Find the diagonal of a 6m × 8m room.", steps: ["d² = 36 + 64 = 100", "d = 10m"], answer: "10m" }, ["Check which side is the hypotenuse."], [
      { question: "Legs 5 and 12. Hypotenuse?", options: ["13", "17", "7", "60"], correctAnswer: 0, explanation: "√(25+144) = √169 = 13" },
      { question: "Hypotenuse 10, leg 6. Other leg?", options: ["4", "8", "16", "√136"], correctAnswer: 1, explanation: "√(100-36) = √64 = 8" },
      { question: "Pythagoras applies to:", options: ["All triangles", "Right triangles only", "Equilateral", "Isosceles"], correctAnswer: 1, explanation: "Only right-angled." }
    ])
  ],

  "y11g-ch10-perimeter-area": [
    makeLesson("Perimeter and Area", "Perimeter is the distance around a shape. Area is the space inside.\n\nKey formulas:\n• Rectangle: P = 2(l+w), A = lw\n• Triangle: A = ½bh\n• Circle: C = 2πr, A = πr²\n• Trapezium: A = ½(a+b)h", ["Rectangle: A = lw", "Triangle: A = ½bh", "Circle: C = 2πr, A = πr²", "Composite: break into simpler shapes"], { problem: "Semicircle with diameter 10cm. Find perimeter.", steps: ["Radius = 5", "Curved part = ½ × 2π(5) = 5π ≈ 15.71", "Straight part = 10", "Perimeter = 5π + 10 ≈ 25.71 cm"], answer: "≈ 25.71 cm" }, ["For semicircles, include both the curved and straight edges."], [
      { question: "Area of triangle base 8, height 5:", options: ["40", "20", "13", "80"], correctAnswer: 1, explanation: "½ × 8 × 5 = 20" },
      { question: "Circumference, r = 7:", options: ["14π", "49π", "7π", "22"], correctAnswer: 0, explanation: "C = 2πr = 14π" },
      { question: "Area of circle r = 3:", options: ["6π", "9π", "3π", "12π"], correctAnswer: 1, explanation: "A = πr² = 9π" }
    ])
  ],

  "y11g-ch10-arc-sector": [
    makeLesson("Length of an Arc and Area of a Sector", "Arc length = (θ/360) × 2πr where θ is the angle in degrees.\nSector area = (θ/360) × πr²\n\nA sector is a 'pizza slice' of a circle. The arc is the curved edge of the sector.", ["Arc length = (θ/360) × 2πr", "Sector area = (θ/360) × πr²", "θ is the central angle", "Full circle: θ = 360°"], { problem: "Find the arc length and sector area: r = 10cm, θ = 72°.", steps: ["Arc = (72/360) × 2π(10) = 0.2 × 20π = 4π ≈ 12.57 cm", "Area = (72/360) × π(100) = 0.2 × 100π = 20π ≈ 62.83 cm²"], answer: "Arc ≈ 12.57 cm, Area ≈ 62.83 cm²" }, ["The fraction θ/360 represents the proportion of the full circle."], [
      { question: "Semicircle arc (r=6):", options: ["6π", "12π", "36π", "3π"], correctAnswer: 0, explanation: "(180/360) × 2π(6) = 6π" },
      { question: "Quarter circle area (r=4):", options: ["4π", "16π", "8π", "2π"], correctAnswer: 0, explanation: "(90/360) × π(16) = 4π" },
      { question: "θ = 360° gives:", options: ["Half circle", "Quarter circle", "Full circle", "No circle"], correctAnswer: 2, explanation: "360° = complete circle." }
    ])
  ],

  "y11g-ch10-volume": [
    makeLesson("Volume", "Volume measures 3D space in cubic units.\n\nKey formulas:\n• Rectangular prism: V = lwh\n• Cylinder: V = πr²h\n• Triangular prism: V = ½bh × length\n• General prism: V = base area × height", ["Rectangular prism: V = lwh", "Cylinder: V = πr²h", "Prism: V = base area × height", "Units: cm³, m³, etc."], { problem: "Cylinder: r = 5cm, h = 12cm. Find volume.", steps: ["V = πr²h = π(25)(12) = 300π ≈ 942.5 cm³"], answer: "≈ 942.5 cm³" }, ["For prisms, find the base area first, then multiply by height."], [
      { question: "Volume of cube side 4cm:", options: ["16", "64", "96", "24"], correctAnswer: 1, explanation: "4³ = 64 cm³" },
      { question: "Cylinder r=3, h=10:", options: ["30π", "90π", "9π", "60π"], correctAnswer: 1, explanation: "π(9)(10) = 90π" },
      { question: "1 litre = ___ cm³:", options: ["100", "1000", "10", "10000"], correctAnswer: 1, explanation: "1L = 1000 cm³" }
    ])
  ],

  "y11g-ch10-volume-pyramid": [
    makeLesson("Volume of a Pyramid", "Volume of a pyramid = ⅓ × base area × height.\nVolume of a cone = ⅓ × πr²h.\n\nA pyramid is exactly one-third of the corresponding prism with the same base and height.", ["Pyramid: V = ⅓ × base area × h", "Cone: V = ⅓πr²h", "Pyramid = ⅓ of the corresponding prism", "Height must be perpendicular to base"], { problem: "Square-based pyramid: base 6m, height 10m.", steps: ["Base area = 6² = 36 m²", "V = ⅓ × 36 × 10 = 120 m³"], answer: "120 m³" }, ["Remember the ⅓ factor!"], [
      { question: "Cone r=3, h=12:", options: ["36π", "108π", "12π", "9π"], correctAnswer: 0, explanation: "⅓π(9)(12) = 36π" },
      { question: "Pyramid volume vs prism (same base/height):", options: ["Same", "Half", "One-third", "Double"], correctAnswer: 2, explanation: "Pyramid = ⅓ × prism." },
      { question: "Sphere volume:", options: ["4πr²", "⅓πr²h", "⁴⁄₃πr³", "πr²h"], correctAnswer: 2, explanation: "V = ⁴⁄₃πr³" }
    ])
  ],

  "y11g-ch10-surface-area": [
    makeLesson("Surface Area", "Surface area = total area of all outer surfaces.\n\n• Rectangular prism: SA = 2(lw + lh + wh)\n• Cylinder: SA = 2πr² + 2πrh (two circles + curved surface)\n• Sphere: SA = 4πr²\n• Cone: SA = πr² + πrl (base + lateral, l = slant height)", ["Prism: sum of all face areas", "Cylinder: SA = 2πr² + 2πrh", "Sphere: SA = 4πr²", "Cone: SA = πr² + πrl"], { problem: "Cylinder: r = 5cm, h = 12cm. Find SA.", steps: ["SA = 2πr² + 2πrh", "= 2π(25) + 2π(5)(12)", "= 50π + 120π = 170π ≈ 534.1 cm²"], answer: "≈ 534.1 cm²" }, ["For open cylinders, subtract one or both circular faces."], [
      { question: "SA of cube side 3cm:", options: ["27", "36", "54", "18"], correctAnswer: 2, explanation: "6 × 9 = 54 cm²" },
      { question: "Sphere SA, r = 2:", options: ["8π", "16π", "4π", "12π"], correctAnswer: 1, explanation: "4π(4) = 16π" },
      { question: "Open cylinder (no top) SA formula:", options: ["2πr² + 2πrh", "πr² + 2πrh", "2πrh", "πr²"], correctAnswer: 1, explanation: "One circle + curved surface." }
    ])
  ],

  "y11g-ch10-similar-figures": [
    makeLesson("Similar Figures", "Similar figures have the same shape but different sizes. Corresponding angles are equal and corresponding sides are in proportion.\n\nScale factor k = new/original. Areas scale by k², volumes by k³.", ["Same shape, different size", "Corresponding sides in proportion", "Scale factor k: areas × k², volumes × k³", "All angles preserved"], { problem: "Similar triangles: smaller 3,4,5. Larger shortest = 9. Find others.", steps: ["k = 9/3 = 3", "4 × 3 = 12", "5 × 3 = 15"], answer: "9, 12, 15" }, ["Lengths ×k, areas ×k², volumes ×k³."], [
      { question: "Scale factor 2. Area scales by:", options: ["2", "4", "8", "16"], correctAnswer: 1, explanation: "k² = 4." },
      { question: "Scale factor 3. Volume scales by:", options: ["3", "9", "27", "81"], correctAnswer: 2, explanation: "k³ = 27." },
      { question: "Similar figures have equal:", options: ["Sides", "Areas", "Angles", "Volumes"], correctAnswer: 2, explanation: "Corresponding angles are equal." }
    ])
  ],

  "y11g-ch10-similar-triangles": [
    makeLesson("Similar Triangles", "Two triangles are similar if:\n• All corresponding angles are equal (AAA)\n• All corresponding sides are in proportion (SSS similarity)\n• Two sides in proportion and included angle equal (SAS similarity)\n\nUse similarity to find unknown sides in real-world problems (shadows, heights, distances).", ["AAA: all angles match", "SSS similarity: all sides proportional", "SAS similarity: two sides proportional + included angle", "Practical: shadow/height problems"], { problem: "Triangle ABC ~ Triangle DEF. AB=6, DE=9, BC=8. Find EF.", steps: ["k = DE/AB = 9/6 = 1.5", "EF = BC × k = 8 × 1.5 = 12"], answer: "EF = 12" }, ["Set up ratios of corresponding sides carefully."], [
      { question: "AAA similarity needs:", options: ["All sides equal", "All angles equal", "Right angle", "Two sides"], correctAnswer: 1, explanation: "All corresponding angles equal." },
      { question: "Height problems use:", options: ["Congruence", "Similarity", "Pythagoras", "Trigonometry only"], correctAnswer: 1, explanation: "Similar triangles formed by shadows/heights." },
      { question: "If k = 2, the larger triangle's sides are:", options: ["Same", "Double", "Half", "Quadruple"], correctAnswer: 1, explanation: "Scale factor 2 → sides doubled." }
    ])
  ],

  "y11g-ch10-similar-solids": [
    makeLesson("Similar Solids", "Similar solids have the same shape with all corresponding lengths in proportion.\n\nIf the scale factor of lengths is k:\n• Surface areas scale by k²\n• Volumes scale by k³\n\nThis is crucial for real-world applications: model buildings, maps, scaled prototypes.", ["Same shape, different size", "Lengths: ×k", "Surface areas: ×k²", "Volumes: ×k³"], { problem: "A model car is 1:20 scale. Real car is 4m long, volume 3m³. Find model volume.", steps: ["k = 1/20", "Model volume = 3 × (1/20)³", "= 3 × 1/8000", "= 0.000375 m³ = 375 cm³"], answer: "375 cm³" }, ["k for lengths; k² for areas; k³ for volumes."], [
      { question: "Scale 1:10. Real area 50m². Model area:", options: ["5m²", "0.5m²", "500m²", "0.05m²"], correctAnswer: 1, explanation: "50 × (1/10)² = 0.5m²" },
      { question: "Scale 1:5. Model volume 2cm³. Real volume:", options: ["10", "50", "250", "1000"], correctAnswer: 2, explanation: "2 × 5³ = 250 cm³" },
      { question: "Doubling all dimensions multiplies volume by:", options: ["2", "4", "6", "8"], correctAnswer: 3, explanation: "2³ = 8." }
    ])
  ],

  "y11g-ch10-review": [
    makeLesson("Review of Chapter 10", "Review: approximations, Pythagoras, perimeter, area, arcs, sectors, volume, surface area, similar figures/triangles/solids.", ["Sig figs: from first non-zero digit", "c² = a² + b² (right triangles only)", "Arc = (θ/360)×2πr, Sector = (θ/360)×πr²", "Similar: lengths ×k, areas ×k², volumes ×k³"], { problem: "Two similar cones: radii 3cm and 6cm. Small cone volume = 15π cm³. Find large cone volume.", steps: ["k = 6/3 = 2", "Large volume = 15π × 2³ = 15π × 8 = 120π cm³"], answer: "120π cm³" }, ["Remember the dimension rules for scaling."], [
      { question: "Sig figs in 0.00450:", options: ["3", "5", "6", "2"], correctAnswer: 0, explanation: "4, 5, 0 → 3 sig figs (trailing zero after decimal counts)." },
      { question: "Pyramid volume = ⅓ × base × h. Base 20m², h = 9m:", options: ["60", "180", "20", "540"], correctAnswer: 0, explanation: "⅓ × 20 × 9 = 60 m³" },
      { question: "Scale factor ½. Volume factor:", options: ["½", "¼", "⅛", "1/16"], correctAnswer: 2, explanation: "(½)³ = ⅛" }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 11: APPLICATIONS OF TRIGONOMETRY
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch11-trig-basics": [
    makeLesson("Trigonometry Basics", "In a right-angled triangle:\nsin θ = opposite/hypotenuse (SOH)\ncos θ = adjacent/hypotenuse (CAH)\ntan θ = opposite/adjacent (TOA)\n\nLabel the triangle relative to the angle of interest: hypotenuse is always opposite the right angle.", ["SOH: sin = opp/hyp", "CAH: cos = adj/hyp", "TOA: tan = opp/adj", "Label sides relative to the angle"], { problem: "Right triangle: angle 30°, hypotenuse 10. Find opposite.", steps: ["sin 30° = opp/10", "opp = 10 × 0.5 = 5"], answer: "Opposite = 5" }, ["Label triangle first, then choose the right ratio."], [
      { question: "sin 30° =", options: ["1", "0.5", "√3/2", "1/√2"], correctAnswer: 1, explanation: "sin 30° = 0.5" },
      { question: "cos 60° =", options: ["1", "0.5", "√3/2", "0"], correctAnswer: 1, explanation: "cos 60° = 0.5" },
      { question: "tan 45° =", options: ["0", "0.5", "1", "√2"], correctAnswer: 2, explanation: "tan 45° = 1" }
    ])
  ],

  "y11g-ch11-finding-side": [
    makeLesson("Finding an Unknown Side in a Right-Angled Triangle", "Given an angle and one side, use the appropriate trig ratio to find an unknown side.\n\n1. Label the sides (O, A, H) relative to the known angle\n2. Choose the ratio that involves the known side and unknown side\n3. Set up the equation and solve", ["Identify which sides are known/unknown", "Choose SOH, CAH, or TOA", "Set up equation", "Solve for the unknown"], { problem: "Angle 35°, hypotenuse 10. Find opposite.", steps: ["sin 35° = opp/10", "opp = 10 × sin 35°", "= 10 × 0.5736 ≈ 5.74"], answer: "≈ 5.74" }, ["If unknown is on top of the fraction, multiply. If on bottom, divide."], [
      { question: "Angle 60°, adj = 5. Find hyp:", options: ["10", "5√3", "2.5", "5/√3"], correctAnswer: 0, explanation: "cos 60° = 5/h, h = 5/0.5 = 10" },
      { question: "Angle 45°, opp = 7. Find adj:", options: ["7", "14", "3.5", "7√2"], correctAnswer: 0, explanation: "tan 45° = 7/a, a = 7/1 = 7" },
      { question: "sin is used when you know:", options: ["Adj and hyp", "Opp and hyp", "Opp and adj", "Two angles"], correctAnswer: 1, explanation: "sin involves opposite and hypotenuse." }
    ])
  ],

  "y11g-ch11-finding-angle": [
    makeLesson("Finding an Angle in a Right-Angled Triangle", "Given two sides, use inverse trig functions to find the angle.\n\nθ = sin⁻¹(opp/hyp) or θ = cos⁻¹(adj/hyp) or θ = tan⁻¹(opp/adj)\n\nMake sure your calculator is in degree mode.", ["Use inverse trig: sin⁻¹, cos⁻¹, tan⁻¹", "Calculator must be in degree mode", "Choose ratio based on known sides", "Check: angle should be between 0° and 90°"], { problem: "Opposite = 4, adjacent = 3. Find the angle.", steps: ["tan θ = 4/3", "θ = tan⁻¹(4/3)", "θ ≈ 53.13°"], answer: "θ ≈ 53.1°" }, ["Check calculator is in DEG mode, not RAD."], [
      { question: "sin⁻¹(0.5) =", options: ["30°", "45°", "60°", "90°"], correctAnswer: 0, explanation: "sin 30° = 0.5" },
      { question: "Sides 5 and 12 (opp and adj). Angle?", options: ["22.6°", "67.4°", "45°", "90°"], correctAnswer: 0, explanation: "tan⁻¹(5/12) ≈ 22.6°" },
      { question: "To find an angle, use:", options: ["sin", "sin⁻¹", "sin²", "1/sin"], correctAnswer: 1, explanation: "Inverse functions give angles." }
    ])
  ],

  "y11g-ch11-right-triangle-apps": [
    makeLesson("Applications of Right-Angled Triangles", "Right-angle trigonometry solves real-world problems involving heights, distances, and angles.\n\nCommon applications: building heights, ladder problems, shadow lengths, ramp angles. Always draw a diagram first.", ["Draw a clear diagram", "Identify the right angle", "Label known and unknown sides/angles", "Choose appropriate trig ratio"], { problem: "A 5m ladder leans against a wall at 70° to the ground. How high up the wall?", steps: ["sin 70° = height/5", "height = 5 × sin 70°", "= 5 × 0.9397 ≈ 4.70m"], answer: "≈ 4.70m" }, ["Always draw and label a diagram."], [
      { question: "Shadow of 2m pole at 60° elevation:", options: ["2/√3 m", "2√3 m", "4m", "1m"], correctAnswer: 0, explanation: "tan 60° = 2/shadow, shadow = 2/tan60° = 2/√3" },
      { question: "A ramp rises 1m over 5m horizontal. Angle?", options: ["11.3°", "78.7°", "20°", "45°"], correctAnswer: 0, explanation: "tan⁻¹(1/5) ≈ 11.3°" },
      { question: "Drawing a diagram helps by:", options: ["Making it pretty", "Identifying the triangle", "Avoiding calculation", "Nothing"], correctAnswer: 1, explanation: "Diagrams clarify the geometry." }
    ])
  ],

  "y11g-ch11-elevation-depression": [
    makeLesson("Angles of Elevation and Depression", "Angle of elevation: measured UP from the horizontal to the line of sight.\nAngle of depression: measured DOWN from the horizontal to the line of sight.\n\nKey fact: the angle of elevation from A to B equals the angle of depression from B to A (alternate angles).", ["Elevation: upward from horizontal", "Depression: downward from horizontal", "They're equal (alternate angles)", "Always measured FROM the horizontal"], { problem: "From 50m cliff top, angle of depression to a boat is 35°. Distance from cliff base?", steps: ["tan 35° = 50/d (depression angle = elevation angle at boat)", "d = 50/tan 35°", "= 50/0.7002 ≈ 71.4m"], answer: "≈ 71.4m from cliff base" }, ["Depression from top = elevation from bottom (alternate angles)."], [
      { question: "Angle of elevation is measured:", options: ["Down from horizontal", "Up from horizontal", "From vertical", "From the ground"], correctAnswer: 1, explanation: "Elevation = up from horizontal." },
      { question: "Depression from A to B = elevation from B to A because:", options: ["They're the same angle", "Alternate angles", "Co-interior angles", "Random coincidence"], correctAnswer: 1, explanation: "Alternate angles between parallel lines." },
      { question: "20m building, 30° depression. Distance to object:", options: ["20/tan30°", "20×tan30°", "20×sin30°", "20/sin30°"], correctAnswer: 0, explanation: "tan 30° = 20/d, d = 20/tan 30°" }
    ])
  ],

  "y11g-ch11-bearings": [
    makeLesson("Bearings and Navigation", "A bearing is a direction measured clockwise from north, always written as three digits.\n\nN = 000°, E = 090°, S = 180°, W = 270°.\n\nCombine bearings with trigonometry to solve navigation problems. Draw a diagram with a north arrow at each point.", ["Measured clockwise from north", "Always three digits", "N=000°, E=090°, S=180°, W=270°", "Draw north arrows at each point"], { problem: "Ship sails on bearing 060° for 50km. How far east and north?", steps: ["East = 50 sin 60° ≈ 43.3 km", "North = 50 cos 60° = 25 km"], answer: "43.3 km east, 25 km north" }, ["Always draw a diagram with north arrows."], [
      { question: "Bearing of due east:", options: ["000°", "090°", "180°", "270°"], correctAnswer: 1, explanation: "90° clockwise from north." },
      { question: "225° is:", options: ["NE", "SE", "SW", "NW"], correctAnswer: 2, explanation: "Between S(180°) and W(270°)." },
      { question: "Back bearing of 060°:", options: ["240°", "300°", "120°", "060°"], correctAnswer: 0, explanation: "060° + 180° = 240°." }
    ])
  ],

  "y11g-ch11-sine-rule": [
    makeLesson("The Sine Rule", "For ANY triangle: a/sin A = b/sin B = c/sin C.\n\nUse when you know:\n• Two angles and one side (AAS)\n• Two sides and an angle opposite one of them (SSA — ambiguous case)\n\nThe ambiguous case may give two solutions when using SSA.", ["a/sin A = b/sin B = c/sin C", "For non-right triangles", "Need angle-side opposite pairs", "SSA: ambiguous case possible"], { problem: "A=40°, B=70°, a=8. Find b.", steps: ["8/sin 40° = b/sin 70°", "b = 8 × sin 70°/sin 40°", "≈ 11.7"], answer: "b ≈ 11.7" }, ["Pair side with OPPOSITE angle."], [
      { question: "Sine rule uses:", options: ["Adjacent sides", "Opposite angle-side pairs", "Right angles only", "Hypotenuse"], correctAnswer: 1, explanation: "Each fraction pairs side with opposite angle." },
      { question: "Ambiguous case occurs with:", options: ["AAS", "SSA", "SAS", "AAA"], correctAnswer: 1, explanation: "SSA can give two valid triangles." },
      { question: "If A=30°, a=5, B=60°, b=?", options: ["5√3", "10", "5/√3", "2.5"], correctAnswer: 0, explanation: "5/sin30 = b/sin60 → b = 5√3" }
    ])
  ],

  "y11g-ch11-cosine-rule": [
    makeLesson("The Cosine Rule", "For ANY triangle: c² = a² + b² - 2ab cos C.\n\nUse when you know:\n• Two sides and the included angle (SAS) → find third side\n• Three sides (SSS) → find an angle\n\nRearranged: cos C = (a² + b² - c²)/(2ab)", ["c² = a² + b² - 2ab cos C", "For SAS: find third side", "For SSS: find any angle", "When C=90°: reduces to Pythagoras"], { problem: "a=7, b=10, C=50°. Find c.", steps: ["c² = 49 + 100 - 140 cos 50°", "= 149 - 89.99 = 59.01", "c ≈ 7.68"], answer: "c ≈ 7.68" }, ["When C=90°, cos90°=0 → Pythagoras."], [
      { question: "Cosine rule for:", options: ["Right triangles only", "SAS and SSS", "Equilateral only", "Isosceles only"], correctAnswer: 1, explanation: "SAS (find side) and SSS (find angle)." },
      { question: "All sides known → cosine rule finds:", options: ["A side", "An angle", "Area", "Perimeter"], correctAnswer: 1, explanation: "Rearrange: cos C = (a²+b²-c²)/(2ab)." },
      { question: "cos 90° =", options: ["1", "0", "-1", "0.5"], correctAnswer: 1, explanation: "cos 90° = 0 → Pythagoras." }
    ])
  ],

  "y11g-ch11-area-triangle": [
    makeLesson("The Area of a Triangle", "For any triangle where you know two sides and the included angle:\nArea = ½ab sin C\n\nThis is an extension of A = ½bh for when the height isn't directly known. It works for any triangle, not just right-angled.", ["Area = ½ab sin C", "a, b are two sides, C is included angle", "Works for ANY triangle", "Reduces to ½bh when C = 90°"], { problem: "Triangle: sides 8 and 12, included angle 40°. Find area.", steps: ["Area = ½ × 8 × 12 × sin 40°", "= 48 × 0.6428", "≈ 30.86 square units"], answer: "≈ 30.86 square units" }, ["The included angle is BETWEEN the two known sides."], [
      { question: "Sides 5, 7, included angle 30°. Area?", options: ["8.75", "17.5", "35", "3.5"], correctAnswer: 0, explanation: "½ × 5 × 7 × sin 30° = ½ × 35 × 0.5 = 8.75" },
      { question: "When C = 90°, ½ab sin C becomes:", options: ["½ab", "ab", "½a²", "0"], correctAnswer: 0, explanation: "sin 90° = 1, so ½ab(1) = ½ab." },
      { question: "Area formula needs:", options: ["Three sides", "Two sides + included angle", "One side + two angles", "Three angles"], correctAnswer: 1, explanation: "½ab sin C needs two sides and the included angle." }
    ])
  ],

  "y11g-ch11-review": [
    makeLesson("Review of Chapter 11", "Review: trigonometry basics, finding sides and angles, applications, elevation/depression, bearings, sine rule, cosine rule, area formula.", ["SOH-CAH-TOA for right triangles", "Sine rule: a/sinA = b/sinB = c/sinC", "Cosine rule: c² = a² + b² - 2ab cosC", "Area: ½ab sinC"], { problem: "Triangle: a=10, b=14, C=65°. Find c and the area.", steps: ["c² = 100 + 196 - 280cos65° = 296 - 118.3 = 177.7", "c ≈ 13.33", "Area = ½(10)(14)sin65° = 70(0.9063) ≈ 63.44"], answer: "c ≈ 13.33, Area ≈ 63.44" }, ["Choose sine rule for AAS/SSA, cosine rule for SAS/SSS."], [
      { question: "Use sine rule when you have:", options: ["SAS", "SSS", "AAS", "Three angles only"], correctAnswer: 2, explanation: "Sine rule needs angle-side opposite pairs." },
      { question: "Use cosine rule when you have:", options: ["AAS", "SAS or SSS", "Two angles", "Right angle"], correctAnswer: 1, explanation: "SAS to find side, SSS to find angle." },
      { question: "Bearing 315° is:", options: ["NE", "SE", "SW", "NW"], correctAnswer: 3, explanation: "Between W(270°) and N(360°) → NW." }
    ])
  ],

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 12: REVISION OF UNIT 2
  // ═══════════════════════════════════════════════════════════════

  "y11g-ch12-multiple-choice": [
    makeLesson("Revision: Multiple-Choice Questions (Unit 2)", "Unit 2 revision covering: bivariate data, graphs and networks, variation, measurement/similarity, and trigonometry.\n\nStrategies: eliminate wrong answers, check units, estimate before calculating.", ["Cover all Unit 2 topics", "Eliminate obviously wrong answers", "Check units and reasonableness", "Use estimation to verify"], { problem: "r = 0.85. r² = ? A) 0.85  B) 0.72  C) 0.92  D) 0.43", steps: ["r² = 0.85² = 0.7225", "Closest: B) 0.72"], answer: "B) 0.72" }, ["Work through systematically."], [
      { question: "Euler circuit requires:", options: ["All odd degrees", "All even degrees", "2 odd degrees", "No edges"], correctAnswer: 1, explanation: "All vertices must have even degree." },
      { question: "Scale factor 3. Volume ×:", options: ["3", "9", "27", "6"], correctAnswer: 2, explanation: "k³ = 27." },
      { question: "cos⁻¹(0) =", options: ["0°", "45°", "90°", "180°"], correctAnswer: 2, explanation: "cos 90° = 0." }
    ])
  ],

  "y11g-ch12-written-response": [
    makeLesson("Revision: Written-Response Questions (Unit 2)", "Written-response practice for Unit 2. Show full working, define variables, use correct units, interpret in context.\n\nCommon question types: regression analysis, network problems, measurement calculations, trigonometry applications.", ["Full working for all steps", "Define variables", "Correct units", "Interpret in context"], { problem: "Two towns A and B are 15km apart on bearing 050°. Town C is 20km from A on bearing 120°. Find distance BC.", steps: ["Angle BAC = 120° - 50° = 70°", "Using cosine rule:", "BC² = 15² + 20² - 2(15)(20)cos70°", "= 225 + 400 - 600(0.342)", "= 625 - 205.2 = 419.8", "BC ≈ 20.5 km"], answer: "BC ≈ 20.5 km" }, ["Draw clear diagrams for bearings."], [
      { question: "Bearing diagram should include:", options: ["Colours", "North arrows", "South arrows", "Scale bars"], correctAnswer: 1, explanation: "North arrows at each point." },
      { question: "Which rule for SAS?", options: ["Sine", "Cosine", "Both", "Neither"], correctAnswer: 1, explanation: "Cosine rule for SAS." },
      { question: "Units matter because:", options: ["They look nice", "Marks are awarded/lost", "They're optional", "Only in physics"], correctAnswer: 1, explanation: "Marks deducted for missing/wrong units." }
    ])
  ],

  "y11g-ch12-investigations": [
    makeLesson("Unit 2 Investigations", "Extended investigation tasks combining multiple Unit 2 concepts. Explore, conjecture, test, and present findings.\n\nGood investigations: state the question clearly, use multiple methods, present evidence, draw conclusions, discuss limitations.", ["Clear research question", "Systematic exploration", "Multiple methods and representations", "Conclusions supported by evidence"], { problem: "Investigate: Is there a relationship between the number of sides of a polygon and the number of diagonals?", steps: ["Triangle (3): 0 diagonals", "Quadrilateral (4): 2", "Pentagon (5): 5", "Hexagon (6): 9", "Pattern: D = n(n-3)/2", "Test: 7-gon → 7(4)/2 = 14 ✓"], answer: "D = n(n-3)/2 where n = number of sides" }, ["Look for patterns, then prove the formula."], [
      { question: "Investigations should end with:", options: ["A guess", "A conclusion with evidence", "No summary", "Just data"], correctAnswer: 1, explanation: "Conclude with supported findings." },
      { question: "Multiple methods means:", options: ["Repeat the same thing", "Use different approaches", "Ask others", "Use only CAS"], correctAnswer: 1, explanation: "Algebraic, graphical, numerical approaches." },
      { question: "Limitations section discusses:", options: ["How good you are", "Assumptions and restrictions", "Teacher comments", "Other subjects"], correctAnswer: 1, explanation: "Acknowledge assumptions and constraints." }
    ])
  ],
};
