import { TopicLessonsMap } from "./topicLessons";

export const year9Ch1Lessons: TopicLessonsMap = {
  "y9-integer-operations": [
    {
      title: "Adding and Subtracting Integers",
      explanation: "Integers include positive and negative whole numbers and zero. When adding a negative, move left on the number line. When subtracting a negative, move right.\n\nRules:\n• (+) + (+) = positive\n• (−) + (−) = negative\n• (+) + (−) = subtract, take sign of larger\n• a − (−b) = a + b",
      keyPoints: ["Integers: …, −3, −2, −1, 0, 1, 2, 3, …", "Adding a negative = subtracting", "Subtracting a negative = adding", "Use a number line to visualise"],
      workedExamples: [{ problem: "Evaluate −7 + 3", steps: ["Start at −7 on the number line", "Move 3 to the right", "−7 + 3 = −4"], answer: "−4" }, { problem: "Evaluate 5 − (−2)", steps: ["Subtracting a negative becomes adding", "5 − (−2) = 5 + 2 = 7"], answer: "7" }],
      tips: ["Two negatives next to each other become a positive: −(−3) = +3"],
      quiz: [
        { question: "What is −8 + 5?", options: ["−3", "3", "−13", "13"], correctAnswer: 0, explanation: "−8 + 5 = −3" },
        { question: "What is 4 − (−6)?", options: ["−2", "2", "10", "−10"], correctAnswer: 2, explanation: "4 − (−6) = 4 + 6 = 10" },
        { question: "What is −3 + (−4)?", options: ["7", "−7", "1", "−1"], correctAnswer: 1, explanation: "−3 + (−4) = −7" },
        { question: "What is −12 − (−5)?", options: ["−17", "−7", "7", "17"], correctAnswer: 1, explanation: "−12 − (−5) = −12 + 5 = −7" }
      ]
    },
    {
      title: "Multiplying and Dividing Integers",
      explanation: "When multiplying or dividing integers:\n• Same signs → positive result\n• Different signs → negative result\n\nThis applies to both multiplication and division.",
      keyPoints: ["(+) × (+) = (+)", "(−) × (−) = (+)", "(+) × (−) = (−)", "(−) × (+) = (−)", "Same rules apply for division"],
      workedExamples: [{ problem: "Evaluate (−3) × (−4)", steps: ["Both negative → positive", "(−3) × (−4) = 12"], answer: "12" }, { problem: "Evaluate (−24) ÷ 6", steps: ["Different signs → negative", "(−24) ÷ 6 = −4"], answer: "−4" }],
      tips: ["Count the negatives: even number of negatives = positive, odd = negative"],
      quiz: [
        { question: "(−5) × 3 = ?", options: ["15", "−15", "8", "−8"], correctAnswer: 1, explanation: "Different signs → negative: −15" },
        { question: "(−6) × (−7) = ?", options: ["−42", "42", "−13", "13"], correctAnswer: 1, explanation: "Same signs → positive: 42" },
        { question: "36 ÷ (−9) = ?", options: ["4", "−4", "27", "−27"], correctAnswer: 1, explanation: "Different signs → negative: −4" },
        { question: "(−2)³ = ?", options: ["8", "−8", "6", "−6"], correctAnswer: 1, explanation: "(−2)³ = (−2)(−2)(−2) = 4 × (−2) = −8" }
      ]
    },
    {
      title: "Order of Operations with Integers",
      explanation: "Use BODMAS/BIDMAS:\nBrackets → Orders (indices) → Division/Multiplication (left to right) → Addition/Subtraction (left to right)\n\nAlways work through each level before moving to the next.",
      keyPoints: ["B – Brackets first", "O/I – Orders/Indices next", "DM – Division and Multiplication (left to right)", "AS – Addition and Subtraction (left to right)"],
      workedExamples: [{ problem: "Evaluate 3 + 2 × (−4)", steps: ["Multiplication first: 2 × (−4) = −8", "Then addition: 3 + (−8) = −5"], answer: "−5" }, { problem: "Evaluate (−2)² + 3 × 4 − 1", steps: ["Orders: (−2)² = 4", "Multiplication: 3 × 4 = 12", "Left to right: 4 + 12 − 1 = 15"], answer: "15" }],
      tips: ["Always do multiplication/division BEFORE addition/subtraction unless brackets say otherwise"],
      quiz: [
        { question: "4 + 3 × 2 = ?", options: ["14", "10", "9", "24"], correctAnswer: 1, explanation: "3 × 2 = 6, then 4 + 6 = 10" },
        { question: "(5 − 3)² × 2 = ?", options: ["4", "8", "16", "2"], correctAnswer: 1, explanation: "(2)² × 2 = 4 × 2 = 8" },
        { question: "−3² = ?", options: ["9", "−9", "6", "−6"], correctAnswer: 1, explanation: "−3² = −(3²) = −9 (only the 3 is squared)" },
        { question: "10 − 2 × 3 + 1 = ?", options: ["5", "25", "27", "4"], correctAnswer: 0, explanation: "2 × 3 = 6, then 10 − 6 + 1 = 5" }
      ]
    }
  ],

  "y9-decimal-significant-figures": [
    {
      title: "Rounding to Decimal Places",
      explanation: "Decimal places (d.p.) count the digits after the decimal point. To round to n decimal places:\n1. Look at the (n+1)th digit\n2. If it's 5 or more, round up\n3. If it's less than 5, round down",
      keyPoints: ["1 d.p. = one digit after decimal", "Look at the NEXT digit to decide", "5 or more → round up", "Less than 5 → round down"],
      workedExamples: [{ problem: "Round 3.4567 to 2 decimal places", steps: ["Keep 2 digits after decimal: 3.45...", "Look at 3rd decimal digit: 6", "6 ≥ 5, so round up"], answer: "3.46" }],
      tips: ["Don't drop trailing zeros: 3.40 to 2 d.p. stays as 3.40"],
      quiz: [
        { question: "Round 7.349 to 1 d.p.", options: ["7.3", "7.4", "7.35", "7"], correctAnswer: 0, explanation: "Look at 2nd decimal: 4 < 5, round down → 7.3" },
        { question: "Round 2.555 to 2 d.p.", options: ["2.55", "2.56", "2.5", "2.6"], correctAnswer: 1, explanation: "3rd decimal is 5, round up → 2.56" },
        { question: "Round 0.0482 to 2 d.p.", options: ["0.04", "0.05", "0.048", "0.0"], correctAnswer: 1, explanation: "3rd decimal is 8 ≥ 5, round up → 0.05" }
      ]
    },
    {
      title: "Significant Figures",
      explanation: "Significant figures (s.f.) count all meaningful digits in a number. Rules:\n• Non-zero digits are always significant\n• Zeros between non-zero digits are significant\n• Leading zeros are NOT significant\n• Trailing zeros after a decimal point ARE significant",
      keyPoints: ["Start counting from the first non-zero digit", "305 has 3 s.f.", "0.0042 has 2 s.f.", "2.50 has 3 s.f."],
      workedExamples: [{ problem: "Round 0.004562 to 2 significant figures", steps: ["First significant digit: 4", "Second significant digit: 5", "Next digit: 6 ≥ 5, round up"], answer: "0.0046" }],
      tips: ["Leading zeros (before the first non-zero digit) are never significant"],
      quiz: [
        { question: "How many s.f. in 0.0300?", options: ["1", "2", "3", "5"], correctAnswer: 2, explanation: "3, 0, 0 — trailing zeros after decimal count: 3 s.f." },
        { question: "Round 4567 to 2 s.f.", options: ["4500", "4600", "46", "45"], correctAnswer: 1, explanation: "4567 → 4600 (3rd digit 6 ≥ 5, round up)" },
        { question: "How many s.f. in 20.05?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "2, 0, 0, 5 — all significant: 4 s.f." }
      ]
    },
    {
      title: "Estimation and Rounding in Context",
      explanation: "In real-world problems, we round answers to an appropriate degree of accuracy. The final answer should not be more precise than the measurements used.\n\nEstimation involves rounding each number to 1 s.f. to get a quick approximate answer.",
      keyPoints: ["Round to 1 s.f. for estimation", "Answer precision ≤ input precision", "Use ≈ for approximate answers"],
      workedExamples: [{ problem: "Estimate 4.8 × 21.3", steps: ["Round: 5 × 20", "= 100"], answer: "≈ 100 (actual: 102.24)" }],
      tips: ["Estimation is great for checking calculator answers quickly"],
      quiz: [
        { question: "Estimate 38 × 52", options: ["2000", "1500", "1976", "200"], correctAnswer: 0, explanation: "40 × 50 = 2000" },
        { question: "Estimate 198 ÷ 4.1", options: ["50", "500", "5", "48"], correctAnswer: 0, explanation: "200 ÷ 4 = 50" },
        { question: "A length is 3.4m and width is 2.1m. Area to 2 s.f.?", options: ["7.1m²", "7.14m²", "7.1m²", "7.0m²"], correctAnswer: 0, explanation: "3.4 × 2.1 = 7.14 → 7.1 to 2 s.f." }
      ]
    }
  ],

  "y9-rational-numbers": [
    {
      title: "Understanding Rational Numbers",
      explanation: "A rational number can be written as a fraction a/b where a and b are integers and b ≠ 0. This includes integers, fractions, and terminating or repeating decimals.\n\nExamples: 3 = 3/1, 0.5 = 1/2, 0.333… = 1/3",
      keyPoints: ["Rational = can be written as a fraction", "Integers are rational (e.g., 5 = 5/1)", "Terminating decimals are rational", "Repeating decimals are rational"],
      workedExamples: [{ problem: "Convert 0.375 to a fraction", steps: ["0.375 = 375/1000", "Simplify by dividing by 125", "= 3/8"], answer: "3/8" }],
      tips: ["If a decimal terminates or repeats, it's rational"],
      quiz: [
        { question: "Which is irrational?", options: ["0.5", "1/3", "√2", "0.666…"], correctAnswer: 2, explanation: "√2 is non-repeating, non-terminating" },
        { question: "Is 0.121212… rational?", options: ["Yes", "No"], correctAnswer: 0, explanation: "Repeating decimal = 12/99 = 4/33" },
        { question: "Convert 0.25 to a fraction", options: ["1/5", "1/4", "2/5", "1/25"], correctAnswer: 1, explanation: "0.25 = 25/100 = 1/4" }
      ]
    },
    {
      title: "Converting Between Fractions and Decimals",
      explanation: "Fraction → Decimal: divide numerator by denominator.\nDecimal → Fraction: use place value, then simplify.",
      keyPoints: ["Fraction to decimal: divide top by bottom", "Decimal to fraction: write over place value", "Always simplify the fraction"],
      workedExamples: [{ problem: "Convert 5/8 to a decimal", steps: ["5 ÷ 8 = 0.625"], answer: "0.625" }, { problem: "Convert 0.6 repeating to a fraction", steps: ["Let x = 0.666…", "10x = 6.666…", "10x − x = 6", "9x = 6, x = 2/3"], answer: "2/3" }],
      tips: ["Common conversions to memorise: 1/8 = 0.125, 3/8 = 0.375, 5/8 = 0.625, 7/8 = 0.875"],
      quiz: [
        { question: "3/5 as a decimal?", options: ["0.35", "0.6", "0.53", "1.67"], correctAnswer: 1, explanation: "3 ÷ 5 = 0.6" },
        { question: "0.125 as a fraction?", options: ["1/4", "1/5", "1/8", "1/10"], correctAnswer: 2, explanation: "125/1000 = 1/8" },
        { question: "7/9 as a decimal?", options: ["0.777…", "0.789", "0.78", "0.79"], correctAnswer: 0, explanation: "7 ÷ 9 = 0.777…" }
      ]
    },
    {
      title: "Ordering and Comparing Rational Numbers",
      explanation: "To compare fractions, convert to a common denominator or convert to decimals. Use < (less than), > (greater than), or = (equal to).",
      keyPoints: ["Common denominator method", "Convert to decimals to compare", "Place on a number line"],
      workedExamples: [{ problem: "Order from smallest: 3/4, 2/3, 5/6", steps: ["LCD = 12", "3/4 = 9/12, 2/3 = 8/12, 5/6 = 10/12", "Order: 8/12, 9/12, 10/12"], answer: "2/3, 3/4, 5/6" }],
      tips: ["Converting to decimals is often the quickest way to compare"],
      quiz: [
        { question: "Which is larger: 3/5 or 7/10?", options: ["3/5", "7/10", "Equal", "Can't tell"], correctAnswer: 1, explanation: "3/5 = 6/10 < 7/10" },
        { question: "Order: 0.4, 1/3, 2/5", options: ["1/3, 2/5, 0.4", "1/3, 0.4, 2/5", "2/5, 1/3, 0.4", "0.4, 2/5, 1/3"], correctAnswer: 0, explanation: "1/3 ≈ 0.333, 2/5 = 0.4, 0.4 = 0.4. So 1/3, 2/5 = 0.4" },
        { question: "Which is smallest: −1/2, −1/3, −1/4?", options: ["−1/2", "−1/3", "−1/4", "All equal"], correctAnswer: 0, explanation: "−1/2 = −0.5 is furthest left on number line" }
      ]
    }
  ],

  "y9-operations-fractions": [
    {
      title: "Adding and Subtracting Fractions",
      explanation: "To add or subtract fractions, you need a common denominator.\n1. Find the LCD (lowest common denominator)\n2. Convert each fraction\n3. Add/subtract the numerators\n4. Simplify if possible",
      keyPoints: ["Must have same denominator", "LCD = lowest common denominator", "Only add/subtract numerators", "Simplify the answer"],
      workedExamples: [{ problem: "Calculate 2/3 + 1/4", steps: ["LCD of 3 and 4 = 12", "2/3 = 8/12, 1/4 = 3/12", "8/12 + 3/12 = 11/12"], answer: "11/12" }],
      tips: ["Never add denominators! 1/2 + 1/3 ≠ 2/5"],
      quiz: [
        { question: "3/4 + 1/6 = ?", options: ["4/10", "11/12", "1/2", "7/12"], correctAnswer: 1, explanation: "9/12 + 2/12 = 11/12" },
        { question: "5/6 − 1/3 = ?", options: ["4/3", "1/2", "2/3", "1/6"], correctAnswer: 1, explanation: "5/6 − 2/6 = 3/6 = 1/2" },
        { question: "2⅓ + 1½ = ?", options: ["3⅚", "3½", "3⅓", "4"], correctAnswer: 0, explanation: "7/3 + 3/2 = 14/6 + 9/6 = 23/6 = 3⅚" }
      ]
    },
    {
      title: "Multiplying and Dividing Fractions",
      explanation: "Multiplying: multiply numerators together and denominators together.\nDividing: flip the second fraction (reciprocal) and multiply.\n\na/b × c/d = ac/bd\na/b ÷ c/d = a/b × d/c",
      keyPoints: ["Multiply: top × top, bottom × bottom", "Divide: flip and multiply", "Cancel common factors before multiplying", "Convert mixed numbers to improper first"],
      workedExamples: [{ problem: "Calculate 3/4 ÷ 2/5", steps: ["Flip second fraction: 5/2", "3/4 × 5/2 = 15/8", "= 1⅞"], answer: "15/8 or 1⅞" }],
      tips: ["Cancel before multiplying to keep numbers small"],
      quiz: [
        { question: "2/3 × 3/4 = ?", options: ["6/7", "5/7", "1/2", "6/12"], correctAnswer: 2, explanation: "6/12 = 1/2" },
        { question: "5/6 ÷ 1/3 = ?", options: ["5/18", "5/2", "15/6", "Both B and C"], correctAnswer: 3, explanation: "5/6 × 3/1 = 15/6 = 5/2" },
        { question: "1½ × 2⅓ = ?", options: ["2½", "3½", "3⅙", "2⅓"], correctAnswer: 1, explanation: "3/2 × 7/3 = 21/6 = 7/2 = 3½" }
      ]
    },
    {
      title: "Mixed Operations with Fractions",
      explanation: "When a problem has multiple operations with fractions, follow BODMAS. Do brackets first, then multiplication/division, then addition/subtraction.",
      keyPoints: ["Follow BODMAS with fractions too", "Convert mixed numbers first", "Simplify at each step"],
      workedExamples: [{ problem: "Evaluate 1/2 + 3/4 × 2/3", steps: ["Multiplication first: 3/4 × 2/3 = 6/12 = 1/2", "Then add: 1/2 + 1/2 = 1"], answer: "1" }],
      tips: ["Always do multiplication/division before addition/subtraction, even with fractions"],
      quiz: [
        { question: "1/3 + 1/3 × 1/2 = ?", options: ["1/3", "1/2", "2/3", "1/6"], correctAnswer: 1, explanation: "1/3 × 1/2 = 1/6, then 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2" },
        { question: "(1/2 + 1/3) × 6 = ?", options: ["3", "5", "4", "6"], correctAnswer: 1, explanation: "(3/6 + 2/6) × 6 = 5/6 × 6 = 5" },
        { question: "2/3 ÷ 4/9 − 1/2 = ?", options: ["1", "1/2", "3/2", "2"], correctAnswer: 0, explanation: "2/3 × 9/4 = 18/12 = 3/2, then 3/2 − 1/2 = 1" }
      ]
    }
  ],

  "y9-ratios-rates": [
    {
      title: "Simplifying Ratios",
      explanation: "A ratio compares two or more quantities. To simplify, divide all parts by their HCF. Ratios can be written as a:b or a to b.\n\nBoth parts must be in the same units before simplifying.",
      keyPoints: ["Divide all parts by HCF", "Same units required", "Order matters: a:b ≠ b:a", "Can have 3+ parts"],
      workedExamples: [{ problem: "Simplify 24:36", steps: ["HCF of 24 and 36 = 12", "24 ÷ 12 = 2", "36 ÷ 12 = 3"], answer: "2:3" }],
      tips: ["If ratios involve decimals, multiply to make whole numbers first"],
      quiz: [
        { question: "Simplify 15:25", options: ["3:5", "1:2", "5:3", "15:25"], correctAnswer: 0, explanation: "HCF = 5: 15÷5 : 25÷5 = 3:5" },
        { question: "Simplify 1.5:2.5", options: ["1:2", "3:5", "15:25", "Both B and C"], correctAnswer: 3, explanation: "Multiply by 2: 3:5, or by 10: 15:25" },
        { question: "Express 40 cm to 1 m as a ratio", options: ["40:1", "2:5", "4:10", "Both B and C"], correctAnswer: 1, explanation: "40:100 = 2:5" }
      ]
    },
    {
      title: "Unit Rates and Best Buys",
      explanation: "A rate compares two quantities with different units. A unit rate has 1 in the denominator (e.g., $/kg, km/h).\n\nTo find the best buy, calculate the unit price for each option and compare.",
      keyPoints: ["Rate = quantity per unit", "Unit rate: denominator = 1", "Best buy = lowest unit price", "Divide cost by quantity"],
      workedExamples: [{ problem: "500g for $4.50 vs 750g for $6.30. Best buy?", steps: ["Option A: $4.50 ÷ 500 = $0.009/g = $9/kg", "Option B: $6.30 ÷ 750 = $0.0084/g = $8.40/kg", "Option B is cheaper per kg"], answer: "750g for $6.30 is better value" }],
      tips: ["Always compare using the SAME units"],
      quiz: [
        { question: "A car travels 360 km in 4 hours. Speed?", options: ["90 km/h", "80 km/h", "1440 km/h", "360 km/h"], correctAnswer: 0, explanation: "360 ÷ 4 = 90 km/h" },
        { question: "2L for $5.00 vs 3L for $6.90. Best buy?", options: ["2L", "3L", "Same", "Can't tell"], correctAnswer: 1, explanation: "2L: $2.50/L, 3L: $2.30/L. 3L is cheaper" },
        { question: "Earning $156 for 12 hours. Hourly rate?", options: ["$12", "$13", "$15", "$12.50"], correctAnswer: 1, explanation: "156 ÷ 12 = $13/hour" }
      ]
    },
    {
      title: "Dividing Quantities in a Given Ratio",
      explanation: "To divide a quantity in ratio a:b:\n1. Find total parts: a + b\n2. Find value of one part: total ÷ (a + b)\n3. Multiply each ratio part by the value of one part",
      keyPoints: ["Total parts = sum of ratio", "One part = total ÷ sum", "Check: parts should add to total"],
      workedExamples: [{ problem: "Divide $180 in ratio 2:3:4", steps: ["Total parts: 2+3+4 = 9", "One part: $180 ÷ 9 = $20", "Shares: 2×20=$40, 3×20=$60, 4×20=$80"], answer: "$40, $60, $80" }],
      tips: ["Always check your answers add up to the original total"],
      quiz: [
        { question: "Divide 60 in ratio 1:3", options: ["15:45", "20:40", "30:30", "10:50"], correctAnswer: 0, explanation: "Total parts=4, one part=15. 1×15=15, 3×15=45" },
        { question: "Share $200 in ratio 3:2", options: ["$100:$100", "$120:$80", "$150:$50", "$130:$70"], correctAnswer: 1, explanation: "5 parts, $40 each. 3×40=$120, 2×40=$80" },
        { question: "Divide 72 in ratio 5:3:1", options: ["40:24:8", "36:24:12", "45:18:9", "30:30:12"], correctAnswer: 0, explanation: "9 parts, 8 each. 40, 24, 8" }
      ]
    }
  ],

  "y9-percentages-money": [
    {
      title: "Calculating Percentages of Amounts",
      explanation: "To find a percentage of an amount, convert the percentage to a decimal and multiply.\n\n% → decimal: divide by 100\n25% of 80 = 0.25 × 80 = 20",
      keyPoints: ["Percentage to decimal: ÷ 100", "Of means multiply", "10% = divide by 10", "1% = divide by 100"],
      workedExamples: [{ problem: "Find 35% of $240", steps: ["35% = 0.35", "0.35 × 240 = $84"], answer: "$84" }],
      tips: ["Quick method: find 10% first, then build up"],
      quiz: [
        { question: "15% of 200 = ?", options: ["15", "30", "20", "3"], correctAnswer: 1, explanation: "0.15 × 200 = 30" },
        { question: "What is 8% of $50?", options: ["$4", "$8", "$40", "$0.40"], correctAnswer: 0, explanation: "0.08 × 50 = $4" },
        { question: "Find 120% of 60", options: ["72", "60", "50", "80"], correctAnswer: 0, explanation: "1.20 × 60 = 72" }
      ]
    },
    {
      title: "Expressing One Quantity as a Percentage of Another",
      explanation: "To express A as a percentage of B:\nPercentage = (A/B) × 100\n\nBoth quantities must be in the same units.",
      keyPoints: ["Formula: (part/whole) × 100", "Same units required", "Result can exceed 100%"],
      workedExamples: [{ problem: "Express 45 out of 60 as a percentage", steps: ["45/60 × 100", "= 0.75 × 100 = 75%"], answer: "75%" }],
      tips: ["'What percentage is A of B?' → (A/B) × 100"],
      quiz: [
        { question: "18 out of 24 as a %?", options: ["75%", "72%", "80%", "66%"], correctAnswer: 0, explanation: "18/24 × 100 = 75%" },
        { question: "30 cm out of 2 m as a %?", options: ["15%", "30%", "150%", "1.5%"], correctAnswer: 0, explanation: "30/200 × 100 = 15%" },
        { question: "Score 7/8 as a %?", options: ["78%", "87.5%", "70%", "88%"], correctAnswer: 1, explanation: "7/8 × 100 = 87.5%" }
      ]
    },
    {
      title: "Percentage Problems in Financial Contexts",
      explanation: "Percentages are used widely in money: tax, tips, commissions, and interest. Understanding how to calculate these is essential for financial literacy.",
      keyPoints: ["GST (in Australia): 10% on goods/services", "Tips: usually 10-20%", "Commission: percentage of sales"],
      workedExamples: [{ problem: "A meal costs $85. Add 10% GST.", steps: ["10% of $85 = $8.50", "Total = $85 + $8.50 = $93.50"], answer: "$93.50" }, { problem: "A salesperson earns 5% commission on $12,000 sales", steps: ["5% of $12,000 = 0.05 × 12,000 = $600"], answer: "$600" }],
      tips: ["To add GST (10%), multiply by 1.10"],
      quiz: [
        { question: "Add 10% GST to $120", options: ["$130", "$132", "$12", "$121"], correctAnswer: 1, explanation: "$120 × 1.10 = $132" },
        { question: "8% commission on $5,000 = ?", options: ["$40", "$400", "$4,000", "$80"], correctAnswer: 1, explanation: "0.08 × 5000 = $400" },
        { question: "Price before 10% GST if total is $55?", options: ["$49.50", "$50", "$45", "$44"], correctAnswer: 1, explanation: "$55 ÷ 1.10 = $50" }
      ]
    }
  ],

  "y9-percentage-increase-decrease": [
    {
      title: "Percentage Increase",
      explanation: "To increase by a percentage:\nNew amount = Original × (1 + r/100)\n\nOr: find the percentage of the original, then add it.",
      keyPoints: ["Multiplier for increase: (1 + r/100)", "25% increase → multiply by 1.25", "100% increase = double"],
      workedExamples: [{ problem: "Increase $80 by 15%", steps: ["Multiplier: 1 + 0.15 = 1.15", "$80 × 1.15 = $92"], answer: "$92" }],
      tips: ["Using multipliers is faster than finding the percentage and adding"],
      quiz: [
        { question: "Increase 200 by 30%", options: ["230", "260", "206", "203"], correctAnswer: 1, explanation: "200 × 1.30 = 260" },
        { question: "A $50 item increases by 20%. New price?", options: ["$55", "$60", "$70", "$52"], correctAnswer: 1, explanation: "50 × 1.20 = $60" },
        { question: "What multiplier gives a 45% increase?", options: ["0.45", "1.45", "45", "0.55"], correctAnswer: 1, explanation: "1 + 0.45 = 1.45" }
      ]
    },
    {
      title: "Percentage Decrease",
      explanation: "To decrease by a percentage:\nNew amount = Original × (1 − r/100)\n\nOr: find the percentage, then subtract.",
      keyPoints: ["Multiplier for decrease: (1 − r/100)", "25% decrease → multiply by 0.75", "100% decrease = zero"],
      workedExamples: [{ problem: "Decrease $120 by 35%", steps: ["Multiplier: 1 − 0.35 = 0.65", "$120 × 0.65 = $78"], answer: "$78" }],
      tips: ["A 30% decrease means you keep 70% of the original"],
      quiz: [
        { question: "Decrease 400 by 20%", options: ["380", "320", "360", "300"], correctAnswer: 1, explanation: "400 × 0.80 = 320" },
        { question: "$80 reduced by 15%. New price?", options: ["$68", "$65", "$72", "$75"], correctAnswer: 0, explanation: "80 × 0.85 = $68" },
        { question: "Multiplier for 60% decrease?", options: ["0.60", "0.40", "1.60", "−0.60"], correctAnswer: 1, explanation: "1 − 0.60 = 0.40" }
      ]
    },
    {
      title: "Finding Original Amounts (Reverse Percentages)",
      explanation: "If you know the final amount after a percentage change, work backwards:\n• After increase of r%: Original = Final ÷ (1 + r/100)\n• After decrease of r%: Original = Final ÷ (1 − r/100)",
      keyPoints: ["Divide by the multiplier to reverse", "Don't just subtract the percentage from the new amount", "This is called a reverse percentage"],
      workedExamples: [{ problem: "After a 20% increase, a price is $96. Original?", steps: ["Multiplier: 1.20", "Original = $96 ÷ 1.20 = $80"], answer: "$80" }],
      tips: ["Common error: $96 − 20% of 96 = $76.80 (WRONG). Must divide by multiplier."],
      quiz: [
        { question: "After 25% off, price is $60. Original?", options: ["$75", "$80", "$85", "$72"], correctAnswer: 1, explanation: "$60 ÷ 0.75 = $80" },
        { question: "After 10% rise, value is $110. Original?", options: ["$99", "$100", "$90", "$101"], correctAnswer: 1, explanation: "$110 ÷ 1.10 = $100" },
        { question: "Price after 50% increase is $90. Original?", options: ["$45", "$60", "$40", "$50"], correctAnswer: 1, explanation: "$90 ÷ 1.50 = $60" }
      ]
    }
  ],

  "y9-profits-discounts": [
    {
      title: "Profit, Loss, and Mark-up",
      explanation: "Profit = Selling Price − Cost Price. If negative, it's a loss.\nMark-up is the amount added to cost price to get selling price.\nProfit % = (Profit/Cost Price) × 100",
      keyPoints: ["Profit = SP − CP", "Loss when SP < CP", "Mark-up = SP − CP", "Profit % based on cost price"],
      workedExamples: [{ problem: "Bought for $40, sold for $52. Profit %?", steps: ["Profit = $52 − $40 = $12", "Profit % = 12/40 × 100 = 30%"], answer: "30% profit" }],
      tips: ["Profit percentage is always calculated on the cost price, not selling price"],
      quiz: [
        { question: "CP = $25, SP = $30. Profit?", options: ["$5", "$55", "20%", "$5 and 20%"], correctAnswer: 3, explanation: "Profit = $5, % = 5/25 × 100 = 20%" },
        { question: "CP = $80, 25% mark-up. SP?", options: ["$100", "$105", "$85", "$60"], correctAnswer: 0, explanation: "$80 × 1.25 = $100" },
        { question: "SP = $45, Loss = $15. CP?", options: ["$30", "$60", "$45", "$50"], correctAnswer: 1, explanation: "CP = SP + Loss = $45 + $15 = $60" }
      ]
    },
    {
      title: "Discounts and Sale Prices",
      explanation: "A discount is a reduction in price, usually given as a percentage.\nSale Price = Original Price × (1 − discount%/100)",
      keyPoints: ["Discount = Original × discount%", "Sale Price = Original − Discount", "Multiplier = (1 − discount%/100)"],
      workedExamples: [{ problem: "A $120 jacket is 30% off. Sale price?", steps: ["Discount = 30% of $120 = $36", "Sale price = $120 − $36 = $84", "Or: $120 × 0.70 = $84"], answer: "$84" }],
      tips: ["30% off means you pay 70% of the original"],
      quiz: [
        { question: "$200 item, 15% off. Sale price?", options: ["$170", "$185", "$30", "$150"], correctAnswer: 0, explanation: "$200 × 0.85 = $170" },
        { question: "Original $80, sold for $60. Discount %?", options: ["20%", "25%", "30%", "15%"], correctAnswer: 1, explanation: "Discount = $20, 20/80 × 100 = 25%" },
        { question: "After 40% off, price is $42. Original?", options: ["$70", "$58.80", "$84", "$60"], correctAnswer: 0, explanation: "$42 ÷ 0.60 = $70" }
      ]
    },
    {
      title: "GST and Final Pricing",
      explanation: "In Australia, GST (Goods and Services Tax) is 10%. It's added to the pre-GST price.\nGST-inclusive price = Pre-GST × 1.10\nPre-GST price = Inclusive ÷ 1.10\nGST amount = Inclusive − Pre-GST = Inclusive × 1/11",
      keyPoints: ["GST = 10% in Australia", "Add GST: × 1.10", "Remove GST: ÷ 1.10", "GST portion = price ÷ 11"],
      workedExamples: [{ problem: "Find GST on $220 (GST-inclusive)", steps: ["GST = $220 ÷ 11 = $20", "Pre-GST = $220 − $20 = $200"], answer: "GST = $20, Pre-GST = $200" }],
      tips: ["To find GST in a GST-inclusive price, divide by 11"],
      quiz: [
        { question: "Add GST to $150", options: ["$160", "$165", "$155", "$151.50"], correctAnswer: 1, explanation: "$150 × 1.10 = $165" },
        { question: "GST-inclusive price is $88. Pre-GST?", options: ["$78.80", "$80", "$79.20", "$77"], correctAnswer: 1, explanation: "$88 ÷ 1.10 = $80" },
        { question: "GST on a $330 item (inclusive)?", options: ["$33", "$30", "$3.30", "$300"], correctAnswer: 1, explanation: "$330 ÷ 11 = $30" }
      ]
    }
  ],

  "y9-income": [
    {
      title: "Types of Income",
      explanation: "Income is money earned from work. Common types:\n• Wage: paid per hour\n• Salary: fixed annual amount paid regularly\n• Commission: percentage of sales\n• Overtime: higher rate for extra hours (often 1.5× or 2×)",
      keyPoints: ["Wage = hourly rate × hours", "Salary = annual ÷ pay periods", "Overtime: time-and-a-half (1.5×) or double time (2×)", "Commission = % of sales"],
      workedExamples: [{ problem: "Wage: $22/hr, 38 hrs normal + 4 hrs overtime (1.5×)", steps: ["Normal: 38 × $22 = $836", "Overtime rate: $22 × 1.5 = $33/hr", "Overtime: 4 × $33 = $132", "Total: $836 + $132 = $968"], answer: "$968" }],
      tips: ["Time-and-a-half = normal rate × 1.5, Double time = normal rate × 2"],
      quiz: [
        { question: "Salary of $52,000/year. Monthly gross?", options: ["$4,333", "$1,000", "$2,000", "$5,200"], correctAnswer: 0, explanation: "$52,000 ÷ 12 ≈ $4,333" },
        { question: "$18/hr, 5 hrs overtime at double time. OT pay?", options: ["$90", "$180", "$135", "$36"], correctAnswer: 1, explanation: "5 × $18 × 2 = $180" },
        { question: "6% commission on $8,000 sales = ?", options: ["$480", "$48", "$4,800", "$800"], correctAnswer: 0, explanation: "0.06 × $8,000 = $480" }
      ]
    },
    {
      title: "Deductions and Net Income",
      explanation: "Gross income is total earnings before deductions.\nNet income = Gross − Deductions\n\nCommon deductions: tax, superannuation, union fees, health insurance.",
      keyPoints: ["Gross = total before deductions", "Net = take-home pay", "Common deductions: tax, super, union fees", "Net = Gross − Total deductions"],
      workedExamples: [{ problem: "Gross: $4,200/month. Tax: $840, Super: $420, Union: $35", steps: ["Total deductions: $840 + $420 + $35 = $1,295", "Net = $4,200 − $1,295 = $2,905"], answer: "$2,905 net monthly" }],
      tips: ["Superannuation in Australia is currently 11.5% paid by employer on top of salary"],
      quiz: [
        { question: "Gross $3,500, deductions $980. Net?", options: ["$4,480", "$2,520", "$2,500", "$3,500"], correctAnswer: 1, explanation: "$3,500 − $980 = $2,520" },
        { question: "Net $2,800, deductions $700. Gross?", options: ["$2,100", "$3,500", "$2,800", "$3,000"], correctAnswer: 1, explanation: "Gross = Net + Deductions = $2,800 + $700 = $3,500" },
        { question: "Which is NOT a common deduction?", options: ["Tax", "Superannuation", "Sales revenue", "Union fees"], correctAnswer: 2, explanation: "Sales revenue is income, not a deduction" }
      ]
    },
    {
      title: "Budgeting and Financial Planning",
      explanation: "A budget is a plan for spending and saving. It helps track income vs expenses.\n\nExpenses can be:\n• Fixed: same amount regularly (rent, insurance)\n• Variable: change each period (food, entertainment)",
      keyPoints: ["Income > Expenses = surplus (save)", "Income < Expenses = deficit (problem)", "Fixed vs variable expenses", "50/30/20 rule: needs/wants/savings"],
      workedExamples: [{ problem: "Monthly income $3,000. Rent $900, Food $500, Transport $200, Entertainment $300, Bills $400. Surplus?", steps: ["Total expenses: $2,300", "Surplus: $3,000 − $2,300 = $700"], answer: "$700 surplus" }],
      tips: ["Track spending for a month to create a realistic budget"],
      quiz: [
        { question: "Income $2,400, expenses $2,600. Result?", options: ["$200 surplus", "$200 deficit", "Balanced", "$5,000"], correctAnswer: 1, explanation: "$2,400 − $2,600 = −$200 deficit" },
        { question: "Which is a fixed expense?", options: ["Groceries", "Rent", "Entertainment", "Clothing"], correctAnswer: 1, explanation: "Rent is the same each month" },
        { question: "Using 50/30/20 on $4,000: savings?", options: ["$800", "$2,000", "$1,200", "$400"], correctAnswer: 0, explanation: "20% × $4,000 = $800" }
      ]
    }
  ],

  "y9-payg-tax": [
    {
      title: "Understanding the PAYG Tax System",
      explanation: "PAYG (Pay As You Go) tax is deducted from wages/salary by your employer and sent to the ATO. Australia uses a progressive tax system — higher income = higher tax rate on the portion above each threshold.\n\nThe tax-free threshold is $18,200 (no tax on first $18,200).",
      keyPoints: ["PAYG: employer deducts tax each pay", "Progressive: higher brackets taxed more", "Tax-free threshold: $18,200", "Only income ABOVE each threshold is taxed at that rate"],
      workedExamples: [{ problem: "Taxable income: $50,000. Tax brackets: $0-$18,200 (0%), $18,201-$45,000 (19%), $45,001-$120,000 (32.5%)", steps: ["$0-$18,200: $0 tax", "$18,201-$45,000: $26,800 × 0.19 = $5,092", "$45,001-$50,000: $5,000 × 0.325 = $1,625", "Total tax: $0 + $5,092 + $1,625 = $6,717"], answer: "$6,717 tax" }],
      tips: ["Each bracket only taxes the income in THAT bracket, not all your income"],
      quiz: [
        { question: "Tax-free threshold in Australia?", options: ["$0", "$6,000", "$18,200", "$45,000"], correctAnswer: 2, explanation: "First $18,200 is tax-free" },
        { question: "Progressive tax means:", options: ["Everyone pays same rate", "Higher income pays higher % on extra", "No tax under $45k", "Flat 30%"], correctAnswer: 1, explanation: "Higher brackets taxed at higher rates" },
        { question: "Income $18,200. Tax payable?", options: ["$3,640", "$0", "$1,820", "$18,200"], correctAnswer: 1, explanation: "All within tax-free threshold" }
      ]
    },
    {
      title: "Calculating Income Tax",
      explanation: "Calculate tax using the current marginal tax rates. Work through each bracket, calculating the tax for income falling in that bracket, then sum.",
      keyPoints: ["Work through brackets in order", "Tax per bracket = income in bracket × rate", "Total tax = sum of all bracket taxes", "Medicare levy: additional 2% on taxable income"],
      workedExamples: [{ problem: "Taxable income $75,000", steps: ["$0-$18,200 at 0% = $0", "$18,201-$45,000 at 19% = $26,800 × 0.19 = $5,092", "$45,001-$75,000 at 32.5% = $30,000 × 0.325 = $9,750", "Total: $14,842", "Medicare levy: $75,000 × 0.02 = $1,500", "Total with ML: $16,342"], answer: "$16,342" }],
      tips: ["Don't forget Medicare levy (2%) — it applies to all taxable income"],
      quiz: [
        { question: "Income $30,000. Tax on $18,201-$30,000?", options: ["$5,700", "$2,242", "$5,092", "$11,800"], correctAnswer: 1, explanation: "$11,800 × 0.19 = $2,242" },
        { question: "Medicare levy on $60,000?", options: ["$600", "$1,200", "$6,000", "$120"], correctAnswer: 1, explanation: "2% × $60,000 = $1,200" },
        { question: "Tax on income exactly $18,200?", options: ["$0", "$3,458", "$1,820", "$18,200"], correctAnswer: 0, explanation: "Entirely within tax-free threshold" }
      ]
    },
    {
      title: "Tax Returns and Refunds",
      explanation: "At the end of the financial year (June 30), you lodge a tax return. If you paid more tax than owed, you get a refund. If you paid less, you owe more.\n\nDeductions (work expenses) reduce your taxable income.",
      keyPoints: ["Financial year: July 1 – June 30", "Tax return due by October 31", "Deductions reduce taxable income", "Refund if too much tax was withheld"],
      workedExamples: [{ problem: "Gross $55,000, deductions $3,000, tax withheld $8,500", steps: ["Taxable income: $55,000 − $3,000 = $52,000", "Tax on $52,000 ≈ $5,092 + $2,275 = $7,367", "Refund: $8,500 − $7,367 = $1,133"], answer: "$1,133 refund" }],
      tips: ["Keep receipts for work-related expenses to claim as deductions"],
      quiz: [
        { question: "Deductions reduce your:", options: ["Gross income", "Taxable income", "Net income", "Tax rate"], correctAnswer: 1, explanation: "Deductions reduce taxable income" },
        { question: "Tax withheld $6,000, tax owed $5,200. Result?", options: ["Pay $800", "Refund $800", "Pay $6,000", "No change"], correctAnswer: 1, explanation: "Refund = $6,000 − $5,200 = $800" },
        { question: "Australian financial year ends:", options: ["Dec 31", "June 30", "March 31", "Sep 30"], correctAnswer: 1, explanation: "Australian FY runs July 1 to June 30" }
      ]
    }
  ],

  "y9-simple-interest": [
    {
      title: "Understanding Simple Interest",
      explanation: "Simple interest is calculated on the original principal only. It doesn't compound.\n\nFormula: I = P × R × T\n• I = interest earned\n• P = principal (starting amount)\n• R = rate per year (as decimal)\n• T = time in years",
      keyPoints: ["I = PRT", "R must be a decimal (5% = 0.05)", "T must be in years", "Interest calculated on principal only"],
      workedExamples: [{ problem: "$5,000 at 4% p.a. for 3 years", steps: ["I = P × R × T", "I = 5000 × 0.04 × 3", "I = $600"], answer: "$600 interest" }],
      tips: ["Convert months to years: 6 months = 0.5 years"],
      quiz: [
        { question: "$2,000 at 5% for 2 years. Interest?", options: ["$100", "$200", "$250", "$500"], correctAnswer: 1, explanation: "I = 2000 × 0.05 × 2 = $200" },
        { question: "$8,000 at 3% for 6 months. Interest?", options: ["$240", "$120", "$1,440", "$24"], correctAnswer: 1, explanation: "I = 8000 × 0.03 × 0.5 = $120" },
        { question: "Interest $300 on $5,000 for 2 years. Rate?", options: ["3%", "6%", "15%", "30%"], correctAnswer: 0, explanation: "R = I/(PT) = 300/(5000×2) = 0.03 = 3%" }
      ]
    },
    {
      title: "Finding Unknown Values in I = PRT",
      explanation: "The formula I = PRT can be rearranged to find any unknown:\n• P = I/(R×T)\n• R = I/(P×T)\n• T = I/(P×R)",
      keyPoints: ["Rearrange triangle: I on top, P, R, T on bottom", "Cover the unknown to see the formula", "Always check units match"],
      workedExamples: [{ problem: "Interest of $720 at 6% over how many years if principal is $4,000?", steps: ["T = I/(P×R)", "T = 720/(4000×0.06)", "T = 720/240 = 3"], answer: "3 years" }],
      tips: ["Use the PRT triangle: cover what you want to find"],
      quiz: [
        { question: "I=$150, R=5%, T=3. Find P.", options: ["$1,000", "$2,250", "$500", "$900"], correctAnswer: 0, explanation: "P = 150/(0.05×3) = 150/0.15 = $1,000" },
        { question: "I=$480, P=$6,000, T=2. Find R.", options: ["8%", "4%", "16%", "2%"], correctAnswer: 1, explanation: "R = 480/(6000×2) = 480/12000 = 0.04 = 4%" },
        { question: "Total amount after simple interest:", options: ["A = P + I", "A = P × I", "A = I − P", "A = P − I"], correctAnswer: 0, explanation: "Total = Principal + Interest" }
      ]
    },
    {
      title: "Simple Interest Applications",
      explanation: "Simple interest applies to some loans, bonds, and short-term investments. The total amount (A) = P + I = P + PRT = P(1 + RT).",
      keyPoints: ["Total amount A = P(1 + RT)", "Loans: borrower pays interest", "Investments: saver earns interest", "Compare using total amount"],
      workedExamples: [{ problem: "Borrow $3,000 at 8% simple interest for 4 years. Total repayment?", steps: ["I = 3000 × 0.08 × 4 = $960", "A = $3,000 + $960 = $3,960"], answer: "$3,960 total" }],
      tips: ["For loans, interest is a cost. For savings, interest is earnings."],
      quiz: [
        { question: "Invest $10,000 at 3.5% for 5 years. Total?", options: ["$11,750", "$10,350", "$11,500", "$13,500"], correctAnswer: 0, explanation: "I = 10000 × 0.035 × 5 = $1,750. A = $11,750" },
        { question: "Loan $2,000 at 12% for 3 years. Total repay?", options: ["$2,720", "$2,240", "$2,360", "$2,600"], correctAnswer: 0, explanation: "I = 2000 × 0.12 × 3 = $720. A = $2,720" },
        { question: "Simple interest gives a ___ growth pattern", options: ["Exponential", "Linear", "Quadratic", "Random"], correctAnswer: 1, explanation: "Simple interest grows by same amount each year (linear)" }
      ]
    }
  ],

  "y9-compound-interest": [
    {
      title: "Understanding Compound Interest",
      explanation: "Compound interest is calculated on the principal AND accumulated interest. Each period, interest is added to the principal, and the next period's interest is calculated on this larger amount.\n\nThis leads to exponential growth — the amount grows faster over time.",
      keyPoints: ["Interest on interest", "Grows faster than simple interest", "Exponential growth pattern", "More compounding periods = more interest"],
      workedExamples: [{ problem: "$1,000 at 10% compound interest for 3 years", steps: ["Year 1: $1,000 × 1.10 = $1,100", "Year 2: $1,100 × 1.10 = $1,210", "Year 3: $1,210 × 1.10 = $1,331", "Interest = $1,331 − $1,000 = $331"], answer: "$331 interest (vs $300 simple)" }],
      tips: ["Compound interest always earns MORE than simple interest over multiple periods"],
      quiz: [
        { question: "Compound interest earns interest on:", options: ["Principal only", "Interest only", "Principal + accumulated interest", "Nothing"], correctAnswer: 2, explanation: "Interest is calculated on the growing total" },
        { question: "$500 at 10% compound for 2 years. Amount?", options: ["$600", "$605", "$610", "$550"], correctAnswer: 1, explanation: "500 × 1.1 × 1.1 = $605" },
        { question: "Compound vs simple interest after 1 year?", options: ["Compound is more", "Simple is more", "They're equal", "Depends on rate"], correctAnswer: 2, explanation: "After exactly 1 period, they're the same" }
      ]
    },
    {
      title: "Depreciation",
      explanation: "Depreciation is the decrease in value of an asset over time. It works like compound interest in reverse — each period, the value decreases by a percentage of the current value.\n\nNew value = Original × (1 − r/100)ⁿ",
      keyPoints: ["Value decreases each period", "Multiplier < 1", "Formula: V = P(1 − r/100)ⁿ", "Common for cars, electronics, machinery"],
      workedExamples: [{ problem: "A car worth $30,000 depreciates at 15% per year for 3 years", steps: ["Multiplier: 1 − 0.15 = 0.85", "Year 1: $30,000 × 0.85 = $25,500", "Year 2: $25,500 × 0.85 = $21,675", "Year 3: $21,675 × 0.85 = $18,423.75"], answer: "$18,423.75" }],
      tips: ["Depreciation never reaches zero — the value keeps getting smaller but never quite disappears"],
      quiz: [
        { question: "15% depreciation multiplier?", options: ["1.15", "0.85", "0.15", "−0.15"], correctAnswer: 1, explanation: "1 − 0.15 = 0.85" },
        { question: "$20,000 car, 20% depreciation, 1 year. Value?", options: ["$16,000", "$18,000", "$4,000", "$24,000"], correctAnswer: 0, explanation: "$20,000 × 0.80 = $16,000" },
        { question: "After depreciation, value is always:", options: ["Zero", "Negative", "Less than original", "More than original"], correctAnswer: 2, explanation: "Depreciation reduces value below original" }
      ]
    },
    {
      title: "Comparing Simple and Compound Growth",
      explanation: "Simple interest: A = P(1 + RT) — linear growth\nCompound interest: A = P(1 + R)ᴺ — exponential growth\n\nOver longer periods, compound interest significantly exceeds simple interest.",
      keyPoints: ["Simple: linear (straight line on graph)", "Compound: exponential (curve)", "Difference increases over time", "Compound always wins long-term"],
      workedExamples: [{ problem: "Compare $10,000 at 5% for 10 years: simple vs compound", steps: ["Simple: A = 10,000(1 + 0.05×10) = $15,000", "Compound: A = 10,000(1.05)¹⁰ = $16,288.95", "Difference: $1,288.95 more with compound"], answer: "Compound gives $1,288.95 more" }],
      tips: ["The longer the time, the bigger the advantage of compound interest"],
      quiz: [
        { question: "Which grows faster over time?", options: ["Simple", "Compound", "Same rate", "Depends"], correctAnswer: 1, explanation: "Compound grows exponentially" },
        { question: "After 1 year at same rate, which gives more?", options: ["Simple", "Compound", "Equal", "Can't tell"], correctAnswer: 2, explanation: "After exactly 1 year, they give the same result" },
        { question: "Graph of compound interest is:", options: ["Straight line", "Curve getting steeper", "Horizontal", "Decreasing"], correctAnswer: 1, explanation: "Exponential curve gets steeper over time" }
      ]
    }
  ],

  "y9-compound-interest-formula": [
    {
      title: "The Compound Interest Formula",
      explanation: "A = P(1 + r/100)ⁿ\n\nwhere:\n• A = final amount\n• P = principal (initial investment)\n• r = interest rate per period (%)\n• n = number of compounding periods\n\nInterest earned = A − P",
      keyPoints: ["A = P(1 + r/100)ⁿ", "r as percentage, not decimal in this form", "n = number of periods", "Interest = A − P"],
      workedExamples: [{ problem: "$8,000 invested at 6% p.a. compounded annually for 5 years", steps: ["A = 8000(1 + 6/100)⁵", "A = 8000(1.06)⁵", "A = 8000 × 1.3382...", "A = $10,705.80"], answer: "$10,705.80" }],
      tips: ["Use the power button on your calculator: 1.06^5"],
      quiz: [
        { question: "$5,000 at 4% for 3 years compound. Amount?", options: ["$5,600", "$5,624.32", "$5,200", "$5,612"], correctAnswer: 1, explanation: "5000 × (1.04)³ = 5000 × 1.124864 = $5,624.32" },
        { question: "In A=P(1+r)ⁿ, what does n represent?", options: ["Interest rate", "Number of periods", "Principal", "Amount"], correctAnswer: 1, explanation: "n = number of compounding periods" },
        { question: "$10,000 at 8% compound for 2 years. Interest?", options: ["$1,600", "$1,664", "$800", "$1,800"], correctAnswer: 1, explanation: "A = 10000(1.08)² = $11,664. Interest = $1,664" }
      ]
    },
    {
      title: "Different Compounding Periods",
      explanation: "Interest can compound more than once a year:\n• Annually: once/year (n = years)\n• Semi-annually: twice/year (rate ÷ 2, n × 2)\n• Quarterly: 4 times/year (rate ÷ 4, n × 4)\n• Monthly: 12 times/year (rate ÷ 12, n × 12)",
      keyPoints: ["Divide rate by number of periods per year", "Multiply n by periods per year", "More frequent compounding = more interest", "Annual rate ÷ frequency = period rate"],
      workedExamples: [{ problem: "$6,000 at 12% p.a. compounded monthly for 2 years", steps: ["Monthly rate: 12% ÷ 12 = 1% = 0.01", "Periods: 2 × 12 = 24", "A = 6000(1.01)²⁴", "A = 6000 × 1.2697... = $7,618.45"], answer: "$7,618.45" }],
      tips: ["Always adjust BOTH the rate AND number of periods"],
      quiz: [
        { question: "8% p.a. compounded quarterly. Rate per period?", options: ["8%", "4%", "2%", "0.67%"], correctAnswer: 2, explanation: "8% ÷ 4 = 2% per quarter" },
        { question: "3 years, compounded monthly = how many periods?", options: ["3", "12", "36", "4"], correctAnswer: 2, explanation: "3 × 12 = 36 periods" },
        { question: "Which gives most interest: annual, semi-annual, or monthly compounding?", options: ["Annual", "Semi-annual", "Monthly", "All equal"], correctAnswer: 2, explanation: "More frequent compounding = more interest" }
      ]
    },
    {
      title: "Depreciation Formula",
      explanation: "For depreciation (decreasing value):\nV = P(1 − r/100)ⁿ\n\nSame as compound interest formula but with subtraction instead of addition.",
      keyPoints: ["V = P(1 − r/100)ⁿ", "Minus instead of plus", "Value always decreases", "Can find original value by rearranging"],
      workedExamples: [{ problem: "Equipment worth $50,000 depreciates at 12% p.a. Value after 4 years?", steps: ["V = 50,000(1 − 0.12)⁴", "V = 50,000(0.88)⁴", "V = 50,000 × 0.5997...", "V = $29,986.58"], answer: "$29,986.58" }],
      tips: ["To find how long until value halves, try different values of n"],
      quiz: [
        { question: "$40,000 car, 20% depreciation, 3 years?", options: ["$20,480", "$16,000", "$28,000", "$24,000"], correctAnswer: 0, explanation: "40000 × (0.80)³ = 40000 × 0.512 = $20,480" },
        { question: "Depreciation formula uses:", options: ["(1+r)ⁿ", "(1−r)ⁿ", "PRT", "(1+r)/n"], correctAnswer: 1, explanation: "Depreciation: (1−r)ⁿ decreases value" },
        { question: "After 10% depreciation for 2 years, what fraction remains?", options: ["80%", "81%", "90%", "82%"], correctAnswer: 1, explanation: "(0.9)² = 0.81 = 81%" }
      ]
    }
  ]
};
