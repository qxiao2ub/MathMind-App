/**
 * Year 9 Topic-Level Quiz Questions (8-10 questions per topic)
 * Organized by chapter, aligned to Essential Mathematics Victorian Curriculum.
 */

import { TopicQuizQuestion } from "./topicQuizQuestions";

export const year9TopicQuizData: Record<string, TopicQuizQuestion[]> = {
  // ═══ CH1: REVIEWING NUMBER & FINANCIAL MATHEMATICS ═══
  "y9-integer-operations": [
    { id: 1, question: "What is −8 + 5?", options: ["−3", "3", "−13", "13"], correctAnswer: 0, explanation: "−8 + 5 = −3" },
    { id: 2, question: "What is 4 − (−6)?", options: ["−2", "2", "10", "−10"], correctAnswer: 2, explanation: "4 − (−6) = 4 + 6 = 10" },
    { id: 3, question: "(−5) × (−3) = ?", options: ["−15", "15", "−8", "8"], correctAnswer: 1, explanation: "Same signs → positive: 15" },
    { id: 4, question: "(−24) ÷ 6 = ?", options: ["4", "−4", "−18", "18"], correctAnswer: 1, explanation: "Different signs → negative: −4" },
    { id: 5, question: "4 + 3 × 2 = ?", options: ["14", "10", "9", "24"], correctAnswer: 1, explanation: "Multiplication first: 3×2=6, then 4+6=10" },
    { id: 6, question: "−3² = ?", options: ["9", "−9", "6", "−6"], correctAnswer: 1, explanation: "−3² = −(3²) = −9 (only the 3 is squared)" },
    { id: 7, question: "(−2)⁴ = ?", options: ["16", "−16", "8", "−8"], correctAnswer: 0, explanation: "(−2)⁴ = 16 (even power → positive)" },
    { id: 8, question: "10 − 2 × 3 + 1 = ?", options: ["5", "25", "27", "4"], correctAnswer: 0, explanation: "2×3=6, then 10−6+1=5" },
  ],

  "y9-decimal-significant-figures": [
    { id: 1, question: "Round 7.349 to 1 d.p.", options: ["7.3", "7.4", "7.35", "7"], correctAnswer: 0, explanation: "2nd decimal is 4 < 5, round down → 7.3" },
    { id: 2, question: "Round 2.555 to 2 d.p.", options: ["2.55", "2.56", "2.5", "2.6"], correctAnswer: 1, explanation: "3rd decimal is 5, round up → 2.56" },
    { id: 3, question: "How many s.f. in 0.0300?", options: ["1", "2", "3", "5"], correctAnswer: 2, explanation: "3, 0, 0 — trailing zeros after decimal count: 3 s.f." },
    { id: 4, question: "Round 4567 to 2 s.f.", options: ["4500", "4600", "46", "45"], correctAnswer: 1, explanation: "3rd digit is 6 ≥ 5, round up → 4600" },
    { id: 5, question: "Estimate 38 × 52", options: ["2000", "1500", "1976", "200"], correctAnswer: 0, explanation: "40 × 50 = 2000" },
    { id: 6, question: "Round 0.004562 to 2 s.f.", options: ["0.0045", "0.0046", "0.005", "0.00456"], correctAnswer: 1, explanation: "First 2 sig figs: 4,5. Next is 6≥5, round up → 0.0046" },
    { id: 7, question: "How many s.f. in 20.05?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "2,0,0,5 — all significant: 4 s.f." },
    { id: 8, question: "Estimate 198 ÷ 4.1", options: ["50", "500", "5", "48"], correctAnswer: 0, explanation: "200 ÷ 4 = 50" },
  ],

  "y9-rational-numbers": [
    { id: 1, question: "Which is irrational?", options: ["0.5", "1/3", "√2", "0.666…"], correctAnswer: 2, explanation: "√2 is non-repeating, non-terminating" },
    { id: 2, question: "Convert 0.375 to a fraction", options: ["3/10", "3/8", "3/4", "37/100"], correctAnswer: 1, explanation: "375/1000 = 3/8" },
    { id: 3, question: "Is 0.121212… rational?", options: ["Yes", "No", "Can't tell", "Sometimes"], correctAnswer: 0, explanation: "Repeating decimal = 12/99 = 4/33" },
    { id: 4, question: "Which is largest: 3/5, 7/10, 2/3?", options: ["3/5", "7/10", "2/3", "All equal"], correctAnswer: 1, explanation: "3/5=0.6, 2/3≈0.667, 7/10=0.7" },
    { id: 5, question: "3/5 as a decimal?", options: ["0.35", "0.6", "0.53", "1.67"], correctAnswer: 1, explanation: "3 ÷ 5 = 0.6" },
    { id: 6, question: "Which is smallest: −1/2, −1/3, −1/4?", options: ["−1/2", "−1/3", "−1/4", "All equal"], correctAnswer: 0, explanation: "−1/2 = −0.5 is furthest left" },
    { id: 7, question: "0.125 as a fraction?", options: ["1/4", "1/5", "1/8", "1/10"], correctAnswer: 2, explanation: "125/1000 = 1/8" },
    { id: 8, question: "Classify √9", options: ["Irrational", "Rational", "Not real", "Complex"], correctAnswer: 1, explanation: "√9 = 3, a whole number, so rational" },
  ],

  "y9-operations-fractions": [
    { id: 1, question: "3/4 + 1/6 = ?", options: ["4/10", "11/12", "1/2", "7/12"], correctAnswer: 1, explanation: "9/12 + 2/12 = 11/12" },
    { id: 2, question: "5/6 − 1/3 = ?", options: ["4/3", "1/2", "2/3", "1/6"], correctAnswer: 1, explanation: "5/6 − 2/6 = 3/6 = 1/2" },
    { id: 3, question: "2/3 × 3/4 = ?", options: ["6/7", "5/7", "1/2", "6/12"], correctAnswer: 2, explanation: "6/12 = 1/2" },
    { id: 4, question: "5/6 ÷ 1/3 = ?", options: ["5/18", "5/2", "15/6", "Both B and C"], correctAnswer: 3, explanation: "5/6 × 3/1 = 15/6 = 5/2" },
    { id: 5, question: "2⅓ + 1½ = ?", options: ["3⅚", "3½", "3⅓", "4"], correctAnswer: 0, explanation: "7/3 + 3/2 = 14/6 + 9/6 = 23/6 = 3⅚" },
    { id: 6, question: "1/3 + 1/3 × 1/2 = ?", options: ["1/3", "1/2", "2/3", "1/6"], correctAnswer: 1, explanation: "1/3 × 1/2 = 1/6, then 1/3 + 1/6 = 1/2" },
    { id: 7, question: "(1/2 + 1/3) × 6 = ?", options: ["3", "5", "4", "6"], correctAnswer: 1, explanation: "5/6 × 6 = 5" },
    { id: 8, question: "1½ × 2⅓ = ?", options: ["2½", "3½", "3⅙", "2⅓"], correctAnswer: 1, explanation: "3/2 × 7/3 = 21/6 = 7/2 = 3½" },
  ],

  "y9-ratios-rates": [
    { id: 1, question: "Simplify 15:25", options: ["3:5", "1:2", "5:3", "15:25"], correctAnswer: 0, explanation: "HCF = 5: 3:5" },
    { id: 2, question: "A car travels 360 km in 4 hours. Speed?", options: ["90 km/h", "80 km/h", "1440 km/h", "360 km/h"], correctAnswer: 0, explanation: "360 ÷ 4 = 90 km/h" },
    { id: 3, question: "Divide 60 in ratio 1:3", options: ["15:45", "20:40", "30:30", "10:50"], correctAnswer: 0, explanation: "Total=4, one part=15. 15 and 45" },
    { id: 4, question: "Share $200 in ratio 3:2", options: ["$100:$100", "$120:$80", "$150:$50", "$130:$70"], correctAnswer: 1, explanation: "5 parts, $40 each. $120 and $80" },
    { id: 5, question: "Express 40cm to 1m as a ratio", options: ["40:1", "2:5", "4:10", "Both B and C"], correctAnswer: 1, explanation: "40:100 = 2:5" },
    { id: 6, question: "2L for $5.00 vs 3L for $6.90. Best buy?", options: ["2L", "3L", "Same", "Can't tell"], correctAnswer: 1, explanation: "2L: $2.50/L, 3L: $2.30/L" },
    { id: 7, question: "Divide 72 in ratio 5:3:1", options: ["40:24:8", "36:24:12", "45:18:9", "30:30:12"], correctAnswer: 0, explanation: "9 parts, 8 each." },
    { id: 8, question: "Earning $156 for 12 hours. Hourly rate?", options: ["$12", "$13", "$15", "$12.50"], correctAnswer: 1, explanation: "156 ÷ 12 = $13/hour" },
  ],

  "y9-percentages-money": [
    { id: 1, question: "25% of 80 = ?", options: ["20", "25", "40", "15"], correctAnswer: 0, explanation: "0.25 × 80 = 20" },
    { id: 2, question: "Express 3/5 as a percentage", options: ["35%", "60%", "53%", "30%"], correctAnswer: 1, explanation: "3/5 = 0.6 = 60%" },
    { id: 3, question: "What percentage is 18 of 60?", options: ["18%", "30%", "33%", "36%"], correctAnswer: 1, explanation: "18/60 = 0.3 = 30%" },
    { id: 4, question: "Find 15% of $240", options: ["$36", "$15", "$24", "$360"], correctAnswer: 0, explanation: "0.15 × 240 = $36" },
    { id: 5, question: "A shirt costs $45. 20% off = ?", options: ["$36", "$25", "$9", "$40"], correctAnswer: 0, explanation: "20% of 45 = $9, sale = $36" },
    { id: 6, question: "GST of 10% on $550. Total?", options: ["$605", "$560", "$55", "$500"], correctAnswer: 0, explanation: "10% of 550 = $55, total = $605" },
    { id: 7, question: "12.5% as a fraction?", options: ["1/8", "1/4", "1/5", "1/10"], correctAnswer: 0, explanation: "12.5/100 = 1/8" },
    { id: 8, question: "Express 0.045 as a percentage", options: ["45%", "4.5%", "0.45%", "0.045%"], correctAnswer: 1, explanation: "0.045 × 100 = 4.5%" },
  ],

  "y9-percentage-increase-decrease": [
    { id: 1, question: "Increase $200 by 15%", options: ["$215", "$230", "$170", "$300"], correctAnswer: 1, explanation: "200 × 1.15 = $230" },
    { id: 2, question: "Decrease 80 by 25%", options: ["55", "60", "75", "20"], correctAnswer: 1, explanation: "80 × 0.75 = 60" },
    { id: 3, question: "A price rises from $40 to $50. % increase?", options: ["10%", "20%", "25%", "50%"], correctAnswer: 2, explanation: "10/40 × 100 = 25%" },
    { id: 4, question: "Multiplier for 30% decrease?", options: ["0.30", "1.30", "0.70", "0.03"], correctAnswer: 2, explanation: "1 − 0.30 = 0.70" },
    { id: 5, question: "Population grows from 5000 to 5500. % increase?", options: ["5%", "10%", "50%", "500%"], correctAnswer: 1, explanation: "500/5000 = 10%" },
    { id: 6, question: "$800 decreased by 12.5% = ?", options: ["$700", "$100", "$687.50", "$900"], correctAnswer: 0, explanation: "800 × 0.875 = $700" },
    { id: 7, question: "Multiplier for 8% increase?", options: ["1.8", "1.08", "0.08", "0.92"], correctAnswer: 1, explanation: "1 + 0.08 = 1.08" },
    { id: 8, question: "A $60 item after 20% increase then 20% decrease costs?", options: ["$60", "$57.60", "$48", "$72"], correctAnswer: 1, explanation: "60 × 1.2 = 72, 72 × 0.8 = $57.60" },
  ],

  "y9-profits-discounts": [
    { id: 1, question: "Cost $50, sell $65. Profit?", options: ["$15", "$50", "$65", "$115"], correctAnswer: 0, explanation: "65 − 50 = $15" },
    { id: 2, question: "Mark-up of 40% on $80 cost. Selling price?", options: ["$32", "$112", "$120", "$48"], correctAnswer: 1, explanation: "80 × 1.4 = $112" },
    { id: 3, question: "Discount of 30% on $90. Sale price?", options: ["$27", "$60", "$63", "$117"], correctAnswer: 2, explanation: "90 × 0.7 = $63" },
    { id: 4, question: "Buy for $200, sell for $150. % loss?", options: ["25%", "50%", "33%", "75%"], correctAnswer: 0, explanation: "50/200 × 100 = 25%" },
    { id: 5, question: "Profit % if cost=$40, sell=$52?", options: ["12%", "30%", "23%", "52%"], correctAnswer: 1, explanation: "12/40 × 100 = 30%" },
    { id: 6, question: "Original price $120, after 25% discount?", options: ["$90", "$95", "$30", "$80"], correctAnswer: 0, explanation: "120 × 0.75 = $90" },
    { id: 7, question: "Sale price $42 after 30% off. Original?", options: ["$56", "$60", "$54.60", "$12.60"], correctAnswer: 1, explanation: "42 ÷ 0.7 = $60" },
    { id: 8, question: "Cost $25, 60% mark-up, then 10% discount. Final price?", options: ["$36", "$39", "$40", "$35"], correctAnswer: 0, explanation: "25×1.6=40, 40×0.9=$36" },
  ],

  "y9-income": [
    { id: 1, question: "$22/hr, 38hr week. Weekly gross pay?", options: ["$836", "$760", "$880", "$800"], correctAnswer: 0, explanation: "22 × 38 = $836" },
    { id: 2, question: "Time-and-a-half of $20/hr = ?", options: ["$25", "$30", "$40", "$10"], correctAnswer: 1, explanation: "20 × 1.5 = $30" },
    { id: 3, question: "Annual salary $52,000. Weekly?", options: ["$1000", "$4333", "$2000", "$500"], correctAnswer: 0, explanation: "52000 ÷ 52 = $1000" },
    { id: 4, question: "5% commission on $8000 sales?", options: ["$40", "$400", "$4000", "$800"], correctAnswer: 1, explanation: "0.05 × 8000 = $400" },
    { id: 5, question: "Double time of $18/hr = ?", options: ["$27", "$36", "$9", "$54"], correctAnswer: 1, explanation: "18 × 2 = $36" },
    { id: 6, question: "Base $500/wk + 3% commission on $12,000 sales. Total?", options: ["$860", "$536", "$500", "$360"], correctAnswer: 0, explanation: "500 + 0.03×12000 = 500+360 = $860" },
    { id: 7, question: "Fortnightly pay of $1,800. Annual?", options: ["$36,000", "$46,800", "$21,600", "$93,600"], correctAnswer: 1, explanation: "1800 × 26 = $46,800" },
    { id: 8, question: "Which earns more weekly: $55,000/yr or $1,100/wk?", options: ["$55,000/yr", "$1,100/wk", "Same", "Can't tell"], correctAnswer: 1, explanation: "55000÷52 ≈ $1057.69 < $1100" },
  ],

  "y9-payg-tax": [
    { id: 1, question: "What does PAYG stand for?", options: ["Pay As You Go", "Pay At Year's Gate", "Personal Annual Yield Gain", "Payment After Year Gross"], correctAnswer: 0, explanation: "Pay As You Go" },
    { id: 2, question: "Tax-free threshold in Australia (approx)?", options: ["$6,000", "$18,200", "$37,000", "$45,000"], correctAnswer: 1, explanation: "The tax-free threshold is $18,200" },
    { id: 3, question: "Taxable income = ?", options: ["Gross − deductions", "Gross + tax", "Net pay", "Salary only"], correctAnswer: 0, explanation: "Taxable income = gross income minus deductions" },
    { id: 4, question: "If tax rate is 19% on income over $18,200, tax on $28,200?", options: ["$1,900", "$5,358", "$1,000", "$3,600"], correctAnswer: 0, explanation: "19% × ($28,200-$18,200) = 19% × $10,000 = $1,900" },
    { id: 5, question: "Medicare levy is typically:", options: ["1%", "2%", "5%", "10%"], correctAnswer: 1, explanation: "Medicare levy is 2% of taxable income" },
    { id: 6, question: "Net income = ?", options: ["Gross + tax", "Gross − tax", "Tax only", "Gross × tax rate"], correctAnswer: 1, explanation: "Net = gross income minus tax" },
    { id: 7, question: "Higher earners pay more tax. This is called:", options: ["Flat tax", "Regressive tax", "Progressive tax", "Simple tax"], correctAnswer: 2, explanation: "Progressive tax: higher rates for higher incomes" },
    { id: 8, question: "A tax return is used to:", options: ["Pay more tax", "Avoid all tax", "Reconcile tax paid vs owed", "Increase salary"], correctAnswer: 2, explanation: "Tax return reconciles actual tax owed with PAYG paid" },
  ],

  "y9-simple-interest": [
    { id: 1, question: "Simple interest formula?", options: ["I = P + R + T", "I = PRT", "I = P/RT", "I = PR/T"], correctAnswer: 1, explanation: "I = PRT (Principal × Rate × Time)" },
    { id: 2, question: "I on $5,000 at 4% for 3 years?", options: ["$600", "$200", "$60", "$6,000"], correctAnswer: 0, explanation: "I = 5000 × 0.04 × 3 = $600" },
    { id: 3, question: "Total amount after simple interest?", options: ["I only", "P − I", "P + I", "P × I"], correctAnswer: 2, explanation: "A = P + I" },
    { id: 4, question: "$2,000 at 5% for 2 years. Total amount?", options: ["$2,200", "$200", "$2,100", "$2,500"], correctAnswer: 0, explanation: "I = 2000×0.05×2 = $200. A = $2,200" },
    { id: 5, question: "Rate = 6% p.a. means:", options: ["6% per month", "6% per year", "6% total", "6% per day"], correctAnswer: 1, explanation: "p.a. = per annum = per year" },
    { id: 6, question: "I = $300, P = $2,000, T = 3. Rate?", options: ["5%", "15%", "50%", "0.5%"], correctAnswer: 0, explanation: "R = I/(PT) = 300/(2000×3) = 0.05 = 5%" },
    { id: 7, question: "$10,000 at 3.5% for 6 months. Interest?", options: ["$175", "$350", "$2,100", "$35"], correctAnswer: 0, explanation: "I = 10000 × 0.035 × 0.5 = $175" },
    { id: 8, question: "Simple interest grows:", options: ["Exponentially", "Linearly", "Randomly", "Not at all"], correctAnswer: 1, explanation: "Simple interest grows by the same amount each period" },
  ],

  "y9-compound-interest": [
    { id: 1, question: "Compound interest is calculated on:", options: ["Principal only", "Interest only", "Principal + accumulated interest", "Tax"], correctAnswer: 2, explanation: "Compound interest adds interest to the growing balance" },
    { id: 2, question: "Compound vs simple: after 2 years, compound gives:", options: ["Less", "Same", "More", "Can't tell"], correctAnswer: 2, explanation: "Compound earns interest on interest" },
    { id: 3, question: "Depreciation means value:", options: ["Increases", "Decreases", "Stays same", "Doubles"], correctAnswer: 1, explanation: "Depreciation = decrease in value over time" },
    { id: 4, question: "A car depreciates 20% per year from $30,000. Value after 1 year?", options: ["$24,000", "$6,000", "$25,000", "$28,000"], correctAnswer: 0, explanation: "30000 × 0.8 = $24,000" },
    { id: 5, question: "$1,000 at 10% compound for 2 years?", options: ["$1,200", "$1,210", "$1,100", "$1,220"], correctAnswer: 1, explanation: "Y1: 1100, Y2: 1100×1.1 = $1,210" },
    { id: 6, question: "Compound interest formula: A = ?", options: ["P(1+r)ⁿ", "P + Prt", "Prt", "P(1−r)ⁿ"], correctAnswer: 0, explanation: "A = P(1+r)ⁿ for compound interest" },
    { id: 7, question: "Depreciation formula: A = ?", options: ["P(1+r)ⁿ", "P − Prt", "P(1−r)ⁿ", "P/r"], correctAnswer: 2, explanation: "A = P(1−r)ⁿ for depreciation" },
    { id: 8, question: "Which grows faster: 5% simple or 5% compound?", options: ["Simple", "Compound", "Same", "Depends on time"], correctAnswer: 1, explanation: "Compound always grows faster (interest on interest)" },
  ],

  "y9-compound-interest-formula": [
    { id: 1, question: "In A = P(1+r)ⁿ, P stands for:", options: ["Profit", "Principal", "Percentage", "Power"], correctAnswer: 1, explanation: "P = principal (initial amount)" },
    { id: 2, question: "$5,000 at 6% compound for 3 years?", options: ["$5,955.08", "$5,900", "$5,918", "$6,000"], correctAnswer: 0, explanation: "5000 × 1.06³ = $5,955.08" },
    { id: 3, question: "A = 2000(1.05)⁴. What is r?", options: ["0.5%", "5%", "50%", "1.05%"], correctAnswer: 1, explanation: "1+r = 1.05, so r = 0.05 = 5%" },
    { id: 4, question: "Equipment worth $8,000 depreciates 15% p.a. Value after 2 years?", options: ["$5,780", "$5,440", "$6,800", "$6,400"], correctAnswer: 0, explanation: "8000 × 0.85² = 8000 × 0.7225 = $5,780" },
    { id: 5, question: "Monthly compounding means n = ?", options: ["Years", "Months (12 per year)", "Days", "Weeks"], correctAnswer: 1, explanation: "n = number of compounding periods" },
    { id: 6, question: "6% p.a. monthly rate = ?", options: ["6%", "0.5%", "0.06%", "72%"], correctAnswer: 1, explanation: "6% ÷ 12 = 0.5% per month" },
    { id: 7, question: "CI earned = ?", options: ["A only", "A − P", "P − A", "A + P"], correctAnswer: 1, explanation: "Interest earned = final amount minus principal" },
    { id: 8, question: "After 10 years at 7% compound, $1,000 becomes approximately:", options: ["$1,700", "$1,967", "$2,000", "$1,500"], correctAnswer: 1, explanation: "1000 × 1.07¹⁰ ≈ $1,967" },
  ],

  // ═══ CH2: EXPRESSIONS & LINEAR EQUATIONS ═══
  "y9-algebraic-expressions": [
    { id: 1, question: "'Double x plus 3' = ?", options: ["2x + 3", "2(x+3)", "x²+3", "2+3x"], correctAnswer: 0, explanation: "Double x = 2x, plus 3 = 2x + 3" },
    { id: 2, question: "How many terms in 3x² + 2x − 7?", options: ["2", "3", "4", "1"], correctAnswer: 1, explanation: "Three terms: 3x², 2x, −7" },
    { id: 3, question: "Coefficient of x in −7x + 2?", options: ["7", "−7", "2", "x"], correctAnswer: 1, explanation: "The coefficient includes the sign: −7" },
    { id: 4, question: "Evaluate 2a² − 3b when a=4, b=−2", options: ["26", "38", "32", "44"], correctAnswer: 1, explanation: "2(16) − 3(−2) = 32 + 6 = 38" },
    { id: 5, question: "Constant in 3x² + x − 5?", options: ["3", "1", "−5", "x"], correctAnswer: 2, explanation: "The constant term is −5" },
    { id: 6, question: "3x + 2 when x = 5?", options: ["17", "25", "13", "10"], correctAnswer: 0, explanation: "3(5) + 2 = 17" },
    { id: 7, question: "'The product of 5 and y' = ?", options: ["5+y", "5y", "5/y", "y⁵"], correctAnswer: 1, explanation: "Product means multiply: 5y" },
    { id: 8, question: "x² − 4 when x = −3?", options: ["5", "−13", "13", "−5"], correctAnswer: 0, explanation: "(−3)² − 4 = 9 − 4 = 5" },
  ],

  "y9-simplifying-expressions": [
    { id: 1, question: "Simplify 7x − 3x + 2", options: ["4x+2", "6x", "4x−2", "10x"], correctAnswer: 0, explanation: "7x−3x = 4x, +2 stays" },
    { id: 2, question: "3x × 5x = ?", options: ["15x", "15x²", "8x²", "8x"], correctAnswer: 1, explanation: "3×5=15, x×x=x²" },
    { id: 3, question: "12a² ÷ 4a = ?", options: ["3a", "3a²", "8a", "3"], correctAnswer: 0, explanation: "12/4=3, a²/a=a" },
    { id: 4, question: "2(x+3) + 3(x−1) = ?", options: ["5x+3", "5x+9", "5x−3", "6x+3"], correctAnswer: 0, explanation: "2x+6+3x−3 = 5x+3" },
    { id: 5, question: "4(a−2) − 2(a+1) = ?", options: ["2a−6", "2a−10", "6a−6", "2a+6"], correctAnswer: 1, explanation: "4a−8−2a−2 = 2a−10" },
    { id: 6, question: "Which are like terms?", options: ["3x, 3y", "2x², 5x²", "4x, 4x²", "ab, a"], correctAnswer: 1, explanation: "Same variable part: x²" },
    { id: 7, question: "−(3x − 5) = ?", options: ["−3x−5", "−3x+5", "3x+5", "3x−5"], correctAnswer: 1, explanation: "Distribute −1: −3x+5" },
    { id: 8, question: "−2x × 3y = ?", options: ["−6xy", "6xy", "−5xy", "xy"], correctAnswer: 0, explanation: "−2×3=−6, variables: xy" },
  ],

  "y9-expanding-expressions": [
    { id: 1, question: "5(x+3) = ?", options: ["5x+3", "5x+15", "5x+8", "8x"], correctAnswer: 1, explanation: "5x+15" },
    { id: 2, question: "−3(2a−4) = ?", options: ["−6a+12", "−6a−12", "6a−12", "−6a−4"], correctAnswer: 0, explanation: "−6a+12" },
    { id: 3, question: "(x+2)(x+4) = ?", options: ["x²+6x+8", "x²+8x+6", "x²+6x+6", "2x+6"], correctAnswer: 0, explanation: "x²+4x+2x+8 = x²+6x+8" },
    { id: 4, question: "(x+5)² = ?", options: ["x²+25", "x²+10x+25", "x²+5x+25", "2x+10"], correctAnswer: 1, explanation: "x²+10x+25" },
    { id: 5, question: "(x+7)(x−7) = ?", options: ["x²−49", "x²+49", "x²−14x+49", "x²−7"], correctAnswer: 0, explanation: "DOTS: x²−49" },
    { id: 6, question: "x(x+5) = ?", options: ["x+5x", "x²+5x", "x²+5", "6x"], correctAnswer: 1, explanation: "x²+5x" },
    { id: 7, question: "(x−3)(x+1) = ?", options: ["x²−2x−3", "x²+2x−3", "x²−4x−3", "x²−3"], correctAnswer: 0, explanation: "x²+x−3x−3 = x²−2x−3" },
    { id: 8, question: "(2a−3)² = ?", options: ["4a²−9", "4a²−6a+9", "4a²−12a+9", "2a²−6a+9"], correctAnswer: 2, explanation: "4a²−12a+9" },
  ],

  "y9-solving-linear-equations": [
    { id: 1, question: "Solve x+8 = 15", options: ["x=7", "x=23", "x=8", "x=−7"], correctAnswer: 0, explanation: "x = 15−8 = 7" },
    { id: 2, question: "Solve 4x = 28", options: ["x=24", "x=32", "x=7", "x=112"], correctAnswer: 2, explanation: "x = 28÷4 = 7" },
    { id: 3, question: "Solve 2x−5 = 11", options: ["x=3", "x=8", "x=6", "x=16"], correctAnswer: 1, explanation: "2x=16, x=8" },
    { id: 4, question: "Solve x/4 = 7", options: ["x=28", "x=11", "x=3", "x=1.75"], correctAnswer: 0, explanation: "x = 4×7 = 28" },
    { id: 5, question: "Solve 3x+4 = x+12", options: ["x=4", "x=8", "x=2", "x=16"], correctAnswer: 0, explanation: "2x=8, x=4" },
    { id: 6, question: "Solve 2(x+3) = 14", options: ["x=4", "x=5.5", "x=7", "x=8"], correctAnswer: 0, explanation: "2x+6=14, 2x=8, x=4" },
    { id: 7, question: "Solve (x+1)/2 = 5", options: ["x=9", "x=4", "x=10", "x=11"], correctAnswer: 0, explanation: "x+1=10, x=9" },
    { id: 8, question: "Solve −x+5 = 2", options: ["x=3", "x=−3", "x=7", "x=−7"], correctAnswer: 0, explanation: "−x=−3, x=3" },
  ],

  "y9-equations-brackets": [
    { id: 1, question: "Solve 2(x+4) = 18", options: ["x=5", "x=7", "x=9", "x=11"], correctAnswer: 0, explanation: "2x+8=18, 2x=10, x=5" },
    { id: 2, question: "Solve 4(3x−2) = 16", options: ["x=2", "x=3", "x=4", "x=1"], correctAnswer: 0, explanation: "12x−8=16, 12x=24, x=2" },
    { id: 3, question: "Solve 5(x−1) = 3(x+3)", options: ["x=7", "x=4", "x=2", "x=14"], correctAnswer: 0, explanation: "5x−5=3x+9, 2x=14, x=7" },
    { id: 4, question: "Solve −2(x−5) = 6", options: ["x=2", "x=−2", "x=8", "x=−8"], correctAnswer: 0, explanation: "−2x+10=6, −2x=−4, x=2" },
    { id: 5, question: "Solve 3(2x−1) = 15", options: ["x=3", "x=2", "x=8", "x=2.67"], correctAnswer: 0, explanation: "6x−3=15, 6x=18, x=3" },
    { id: 6, question: "Solve 4(x−2) = 2(2x−4)", options: ["x=0", "All values", "No solution", "x=2"], correctAnswer: 1, explanation: "4x−8=4x−8: true for all x" },
    { id: 7, question: "Solve 3(2(x+1)) = 24", options: ["x=3", "x=4", "x=2", "x=5"], correctAnswer: 0, explanation: "6(x+1)=24, x+1=4, x=3" },
    { id: 8, question: "Solve 2(3x+1) = 4(x+3)", options: ["x=5", "x=7", "x=3", "x=2"], correctAnswer: 0, explanation: "6x+2=4x+12, 2x=10, x=5" },
  ],

  "y9-equations-both-sides": [
    { id: 1, question: "Solve 7x+2 = 3x+18", options: ["x=4", "x=5", "x=2", "x=8"], correctAnswer: 0, explanation: "4x=16, x=4" },
    { id: 2, question: "Solve 6x−1 = 4x+7", options: ["x=4", "x=3", "x=8", "x=6"], correctAnswer: 0, explanation: "2x=8, x=4" },
    { id: 3, question: "Solve x+10 = 3x−2", options: ["x=4", "x=6", "x=8", "x=−6"], correctAnswer: 1, explanation: "12=2x, x=6" },
    { id: 4, question: "Solve 2x+4 = 2(x+2)", options: ["x=0", "x=2", "No solution", "All values"], correctAnswer: 3, explanation: "2x+4=2x+4 — always true" },
    { id: 5, question: "Solve x+1 = x+3", options: ["x=2", "x=1", "No solution", "All values"], correctAnswer: 2, explanation: "1=3 is false → no solution" },
    { id: 6, question: "Sum of two consecutive even numbers is 34. Smaller?", options: ["16", "17", "14", "15"], correctAnswer: 0, explanation: "n+(n+2)=34, 2n=32, n=16" },
    { id: 7, question: "3 consecutive numbers sum to 42. Find them.", options: ["13,14,15", "12,14,16", "14,15,16", "10,14,18"], correctAnswer: 0, explanation: "n+(n+1)+(n+2)=42, 3n+3=42, n=13" },
    { id: 8, question: "Perimeter of rectangle is 36, length=2×width. Width?", options: ["6", "12", "9", "4"], correctAnswer: 0, explanation: "2(2w+w)=36, 6w=36, w=6" },
  ],

  // ═══ CH3: PYTHAGORAS & TRIGONOMETRY ═══
  "y9-pythagoras-2d": [
    { id: 1, question: "Legs 5, 12. Hypotenuse?", options: ["13", "17", "7", "60"], correctAnswer: 0, explanation: "√(25+144) = √169 = 13" },
    { id: 2, question: "Hypotenuse 10, one leg 6. Other leg?", options: ["4", "8", "16", "√136"], correctAnswer: 1, explanation: "√(100−36) = √64 = 8" },
    { id: 3, question: "Is 6,8,10 a right triangle?", options: ["Yes", "No", "Not enough info", "Only sometimes"], correctAnswer: 0, explanation: "6²+8²=100=10²" },
    { id: 4, question: "Legs 1, 1. Hypotenuse?", options: ["2", "1", "√2", "√1"], correctAnswer: 2, explanation: "√(1+1) = √2" },
    { id: 5, question: "Which side is the hypotenuse?", options: ["Shortest", "Longest, opposite right angle", "Any", "Vertical"], correctAnswer: 1, explanation: "Always longest, opposite the right angle" },
    { id: 6, question: "c=13, a=5. Find b.", options: ["8", "12", "18", "14"], correctAnswer: 1, explanation: "b²=169−25=144, b=12" },
    { id: 7, question: "Can Pythagoras be used on any triangle?", options: ["Yes", "Only right triangles", "Only equilateral", "Only isosceles"], correctAnswer: 1, explanation: "Only right-angled triangles" },
    { id: 8, question: "Legs 3, 4. Hypotenuse?", options: ["7", "5", "12", "√7"], correctAnswer: 1, explanation: "√(9+16) = √25 = 5" },
  ],

  "y9-pythagoras-3d": [
    { id: 1, question: "3D distance formula: d² = ?", options: ["a²+b²", "a²+b²+c²", "a+b+c", "(a+b+c)²"], correctAnswer: 1, explanation: "In 3D: d² = a²+b²+c²" },
    { id: 2, question: "Room 3×4×12m. Diagonal?", options: ["13m", "19m", "√169m", "Both A and C"], correctAnswer: 3, explanation: "√(9+16+144) = √169 = 13" },
    { id: 3, question: "To find 3D diagonal, use Pythagoras:", options: ["Once", "Twice", "Three times", "Never"], correctAnswer: 1, explanation: "First find base diagonal, then use it with height" },
    { id: 4, question: "Cube side 5. Space diagonal?", options: ["5√3", "5√2", "15", "25"], correctAnswer: 0, explanation: "d = s√3 = 5√3" },
    { id: 5, question: "Box 6×8×10. Space diagonal?", options: ["√200", "10√2", "Both A and B", "24"], correctAnswer: 2, explanation: "√(36+64+100) = √200 = 10√2" },
    { id: 6, question: "Face diagonal of cube side 4?", options: ["4√2", "4√3", "8", "16"], correctAnswer: 0, explanation: "Face diagonal = s√2 = 4√2" },
    { id: 7, question: "Pyramid: square base 6×6, height 4. Slant height to midpoint of base edge?", options: ["5", "√52", "7", "√41"], correctAnswer: 0, explanation: "3²+4²=25, slant=5" },
    { id: 8, question: "3D problems require finding:", options: ["One triangle", "A right triangle within the 3D shape", "Circles", "Angles only"], correctAnswer: 1, explanation: "Identify right triangles within the 3D figure" },
  ],

  "y9-trig-ratios": [
    { id: 1, question: "sin(θ) = ?", options: ["adj/hyp", "opp/hyp", "opp/adj", "hyp/opp"], correctAnswer: 1, explanation: "SOH: sin = opposite/hypotenuse" },
    { id: 2, question: "cos(θ) = ?", options: ["opp/hyp", "adj/hyp", "opp/adj", "hyp/adj"], correctAnswer: 1, explanation: "CAH: cos = adjacent/hypotenuse" },
    { id: 3, question: "tan(θ) = ?", options: ["opp/hyp", "adj/hyp", "opp/adj", "adj/opp"], correctAnswer: 2, explanation: "TOA: tan = opposite/adjacent" },
    { id: 4, question: "SOH-CAH-TOA helps remember:", options: ["Area formulas", "Trig ratios", "Pythagoras", "Volume formulas"], correctAnswer: 1, explanation: "Sin=O/H, Cos=A/H, Tan=O/A" },
    { id: 5, question: "sin(30°) = ?", options: ["0.5", "√3/2", "1", "0"], correctAnswer: 0, explanation: "sin(30°) = 0.5" },
    { id: 6, question: "cos(60°) = ?", options: ["√3/2", "0.5", "1", "0"], correctAnswer: 1, explanation: "cos(60°) = 0.5" },
    { id: 7, question: "tan(45°) = ?", options: ["0", "0.5", "1", "√2"], correctAnswer: 2, explanation: "tan(45°) = 1" },
    { id: 8, question: "If opp=3, hyp=5, sin(θ)=?", options: ["3/5", "4/5", "5/3", "3/4"], correctAnswer: 0, explanation: "sin = opp/hyp = 3/5" },
  ],

  "y9-finding-unknown-sides": [
    { id: 1, question: "hyp=10, angle=30°. Opposite side?", options: ["5", "5√3", "10", "10√3"], correctAnswer: 0, explanation: "sin(30°)=opp/10, opp=10×0.5=5" },
    { id: 2, question: "adj=8, angle=60°. Hypotenuse?", options: ["4", "16", "8√3", "4√3"], correctAnswer: 1, explanation: "cos(60°)=8/hyp, hyp=8/0.5=16" },
    { id: 3, question: "Use sin when you know:", options: ["adj and hyp", "opp and adj", "opp and hyp, or angle+one of these", "None"], correctAnswer: 2, explanation: "sin involves opposite and hypotenuse" },
    { id: 4, question: "opp=7, angle=45°. Adjacent?", options: ["7", "7√2", "14", "7/√2"], correctAnswer: 0, explanation: "tan(45°)=7/adj, adj=7/1=7" },
    { id: 5, question: "hyp=20, angle=30°. Adjacent?", options: ["10", "10√3", "20√3", "10√2"], correctAnswer: 1, explanation: "cos(30°)=adj/20, adj=20×(√3/2)=10√3" },
    { id: 6, question: "To find a side, use the ratio that involves:", options: ["The known side and unknown side", "Only known sides", "Only angles", "The longest side"], correctAnswer: 0, explanation: "Choose the ratio connecting known and unknown" },
    { id: 7, question: "opp=12, adj=5. Hypotenuse?", options: ["13", "17", "7", "√169"], correctAnswer: 0, explanation: "Use Pythagoras: √(144+25)=13" },
    { id: 8, question: "adj=6, angle=30°. Opposite?", options: ["6tan30°", "6sin30°", "6cos30°", "6/tan30°"], correctAnswer: 0, explanation: "tan(30°)=opp/6, opp=6tan30°" },
  ],

  "y9-finding-unknown-angles": [
    { id: 1, question: "opp=4, hyp=8. Angle?", options: ["30°", "45°", "60°", "90°"], correctAnswer: 0, explanation: "sin(θ)=4/8=0.5, θ=30°" },
    { id: 2, question: "To find an angle, use:", options: ["sin/cos/tan", "sin⁻¹/cos⁻¹/tan⁻¹", "Pythagoras", "Addition"], correctAnswer: 1, explanation: "Inverse trig functions find angles" },
    { id: 3, question: "adj=opp. Angle?", options: ["30°", "45°", "60°", "90°"], correctAnswer: 1, explanation: "tan(θ)=1, θ=45°" },
    { id: 4, question: "opp=√3, adj=1. Angle?", options: ["30°", "45°", "60°", "90°"], correctAnswer: 2, explanation: "tan(θ)=√3, θ=60°" },
    { id: 5, question: "sin⁻¹(0.5) = ?", options: ["30°", "45°", "60°", "90°"], correctAnswer: 0, explanation: "sin(30°)=0.5" },
    { id: 6, question: "cos⁻¹(0) = ?", options: ["0°", "45°", "60°", "90°"], correctAnswer: 3, explanation: "cos(90°)=0" },
    { id: 7, question: "Ladder 5m, reaches 4m high. Angle with ground?", options: ["53.1°", "36.9°", "45°", "60°"], correctAnswer: 0, explanation: "sin(θ)=4/5, θ≈53.1°" },
    { id: 8, question: "opp=5, hyp=10. Angle?", options: ["30°", "45°", "60°", "90°"], correctAnswer: 0, explanation: "sin(θ)=5/10=0.5, θ=30°" },
  ],

  "y9-bearings": [
    { id: 1, question: "Bearings are measured:", options: ["From east, anticlockwise", "From north, clockwise", "From south, clockwise", "Any direction"], correctAnswer: 1, explanation: "Always from north, clockwise" },
    { id: 2, question: "Due east = ?°", options: ["0°", "90°", "180°", "270°"], correctAnswer: 1, explanation: "East is 90° clockwise from north" },
    { id: 3, question: "Bearing of 270° means:", options: ["North", "East", "South", "West"], correctAnswer: 3, explanation: "270° = due west" },
    { id: 4, question: "Due south = ?°", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "South is 180°" },
    { id: 5, question: "Back bearing of 060° is:", options: ["120°", "240°", "300°", "060°"], correctAnswer: 1, explanation: "Back bearing = 060°+180° = 240°" },
    { id: 6, question: "Bearings are written as:", options: ["1 digit", "2 digits", "3 digits", "4 digits"], correctAnswer: 2, explanation: "Always 3 figures: 045°, 180°, 270°" },
    { id: 7, question: "NE direction ≈ ?°", options: ["045°", "135°", "315°", "225°"], correctAnswer: 0, explanation: "North-east = 045°" },
    { id: 8, question: "Back bearing of 200° is:", options: ["020°", "380°", "160°", "340°"], correctAnswer: 0, explanation: "200°−180° = 020°" },
  ],

  "y9-trig-applications": [
    { id: 1, question: "Tree shadow 15m, elevation 53°. Height?", options: ["15tan53°", "15sin53°", "15cos53°", "15/tan53°"], correctAnswer: 0, explanation: "tan=opp/adj, height=15tan53°" },
    { id: 2, question: "Angle of elevation is measured:", options: ["Down from horizontal", "Up from horizontal", "From vertical", "From ground"], correctAnswer: 1, explanation: "Elevation = up from horizontal" },
    { id: 3, question: "Angle of depression is measured:", options: ["Up from horizontal", "Down from horizontal", "From vertical", "From ground"], correctAnswer: 1, explanation: "Depression = down from horizontal" },
    { id: 4, question: "Angle of elevation = angle of depression because:", options: ["They're equal (alternate angles)", "Convention", "Same triangle", "Coincidence"], correctAnswer: 0, explanation: "Alternate angles between parallel horizontals" },
    { id: 5, question: "Ship sails 6km east then 8km north. Distance from start?", options: ["14km", "10km", "12km", "8km"], correctAnswer: 1, explanation: "√(36+64)=10km" },
    { id: 6, question: "Kite string 50m, kite 30m high. Horizontal distance?", options: ["20m", "40m", "35m", "80m"], correctAnswer: 1, explanation: "√(2500−900)=√1600=40m" },
    { id: 7, question: "Ramp 5m long, 1m high. Angle?", options: ["≈11.5°", "≈30°", "≈45°", "≈60°"], correctAnswer: 0, explanation: "sin(θ)=1/5, θ≈11.5°" },
    { id: 8, question: "Building 50m away, elevation 32°. Height?", options: ["50tan32°", "50sin32°", "50/tan32°", "50cos32°"], correctAnswer: 0, explanation: "height=50×tan32°" },
  ],

  // ═══ CH4: LINEAR RELATIONSHIPS ═══
  "y9-intro-linear": [
    { id: 1, question: "A linear relationship produces:", options: ["Curve", "Straight line", "Parabola", "Circle"], correctAnswer: 1, explanation: "Linear → straight line graph" },
    { id: 2, question: "y = 3x + 1 is linear because:", options: ["Has x²", "Highest power of x is 1", "Has no y", "It's curved"], correctAnswer: 1, explanation: "Linear: x to the power 1" },
    { id: 3, question: "Which is NOT linear?", options: ["y=2x", "y=x+3", "y=x²", "y=−x"], correctAnswer: 2, explanation: "x² makes it quadratic" },
    { id: 4, question: "In y=mx+c, what does c represent?", options: ["Gradient", "y-intercept", "x-intercept", "Slope"], correctAnswer: 1, explanation: "c = y-intercept" },
    { id: 5, question: "Linear equations have ___ solutions when graphed with another line", options: ["Always 0", "Always 1", "0, 1, or infinite", "Always 2"], correctAnswer: 2, explanation: "Parallel=0, intersecting=1, same line=infinite" },
    { id: 6, question: "Table: x=0,1,2,3 y=2,5,8,11. Linear?", options: ["Yes", "No", "Can't tell", "Maybe"], correctAnswer: 0, explanation: "Constant difference of 3 → linear" },
    { id: 7, question: "A linear rule has constant:", options: ["Second difference", "First difference", "Product", "Ratio"], correctAnswer: 1, explanation: "Linear = constant first differences" },
    { id: 8, question: "y = 5 is:", options: ["Not linear", "Linear (horizontal)", "Quadratic", "Undefined"], correctAnswer: 1, explanation: "y=5 is a horizontal line (linear)" },
  ],

  "y9-graphing-straight-lines": [
    { id: 1, question: "To plot y=2x+1, how many points minimum?", options: ["1", "2", "3", "4"], correctAnswer: 1, explanation: "2 points define a line, 3 to check" },
    { id: 2, question: "x-intercept is where:", options: ["x=0", "y=0", "x=y", "Both cross"], correctAnswer: 1, explanation: "x-intercept: set y=0 and solve" },
    { id: 3, question: "y-intercept of y=3x−4?", options: ["3", "−4", "4", "0"], correctAnswer: 1, explanation: "When x=0: y=−4" },
    { id: 4, question: "x-intercept of y=2x−6?", options: ["(3,0)", "(6,0)", "(−3,0)", "(−6,0)"], correctAnswer: 0, explanation: "0=2x−6, x=3" },
    { id: 5, question: "Which equation is a vertical line?", options: ["y=3", "x=3", "y=x", "y=3x"], correctAnswer: 1, explanation: "x=constant is vertical" },
    { id: 6, question: "y=3 is which type of line?", options: ["Vertical", "Horizontal", "Diagonal", "Curved"], correctAnswer: 1, explanation: "y=constant is horizontal" },
    { id: 7, question: "Plot y=−x. Through which quadrants?", options: ["I and III", "II and IV", "I and II", "III and IV"], correctAnswer: 1, explanation: "Negative gradient through Q2 and Q4" },
    { id: 8, question: "The intercept method uses:", options: ["Gradient only", "x and y intercepts", "Slope formula", "Tables only"], correctAnswer: 1, explanation: "Plot where line crosses axes" },
  ],

  "y9-gradient": [
    { id: 1, question: "Gradient = ?", options: ["run/rise", "rise/run", "rise×run", "rise+run"], correctAnswer: 1, explanation: "Gradient = rise/run" },
    { id: 2, question: "Line through (0,0) and (2,6). Gradient?", options: ["2", "3", "6", "8"], correctAnswer: 1, explanation: "6/2 = 3" },
    { id: 3, question: "Negative gradient means line goes:", options: ["Up left to right", "Down left to right", "Horizontal", "Vertical"], correctAnswer: 1, explanation: "Negative = slopes downward" },
    { id: 4, question: "Gradient of horizontal line?", options: ["1", "0", "Undefined", "−1"], correctAnswer: 1, explanation: "No rise → gradient = 0" },
    { id: 5, question: "Gradient of vertical line?", options: ["0", "1", "Undefined", "∞"], correctAnswer: 2, explanation: "No run → undefined" },
    { id: 6, question: "Through (1,3) and (4,9). Gradient?", options: ["1", "2", "3", "6"], correctAnswer: 1, explanation: "(9−3)/(4−1) = 6/3 = 2" },
    { id: 7, question: "Steeper line has:", options: ["Smaller gradient", "Larger |gradient|", "Zero gradient", "Negative gradient"], correctAnswer: 1, explanation: "Larger absolute value = steeper" },
    { id: 8, question: "Gradient of y=−3x+7?", options: ["7", "−3", "3", "−7"], correctAnswer: 1, explanation: "In y=mx+c, m=−3" },
  ],

  "y9-direct-proportion": [
    { id: 1, question: "y = kx represents:", options: ["Inverse proportion", "Direct proportion", "Quadratic", "Exponential"], correctAnswer: 1, explanation: "y = kx is direct proportion" },
    { id: 2, question: "Direct proportion graph passes through:", options: ["(1,0)", "(0,1)", "(0,0)", "(1,1)"], correctAnswer: 2, explanation: "Always through origin" },
    { id: 3, question: "If y=3x, when x doubles, y:", options: ["Halves", "Doubles", "Triples", "Stays same"], correctAnswer: 1, explanation: "Direct proportion: same multiplier" },
    { id: 4, question: "y∝x means:", options: ["y is inversely proportional", "y is directly proportional to x", "y equals x", "y is greater than x"], correctAnswer: 1, explanation: "∝ means proportional to" },
    { id: 5, question: "If y=4 when x=2, find k in y=kx", options: ["2", "4", "8", "0.5"], correctAnswer: 0, explanation: "4=2k, k=2" },
    { id: 6, question: "y=kx. If k=5 and x=3, y=?", options: ["8", "15", "2", "53"], correctAnswer: 1, explanation: "y=5×3=15" },
    { id: 7, question: "Which shows direct proportion?", options: ["y=2x+1", "y=x²", "y=7x", "y=3/x"], correctAnswer: 2, explanation: "y=7x goes through origin (c=0)" },
    { id: 8, question: "Cost = $5 per kg. Equation?", options: ["C=5m", "C=m/5", "C=m+5", "C=5/m"], correctAnswer: 0, explanation: "Cost = rate × mass = 5m" },
  ],

  "y9-gradient-intercept-form": [
    { id: 1, question: "In y=mx+c, m is:", options: ["y-intercept", "x-intercept", "Gradient", "Constant"], correctAnswer: 2, explanation: "m = gradient (slope)" },
    { id: 2, question: "y=−2x+5. Gradient and y-intercept?", options: ["m=5, c=−2", "m=−2, c=5", "m=2, c=5", "m=−2, c=−5"], correctAnswer: 1, explanation: "m=−2, c=5" },
    { id: 3, question: "Write equation: gradient 3, y-intercept −1", options: ["y=3x−1", "y=−x+3", "y=3x+1", "y=−3x−1"], correctAnswer: 0, explanation: "y=mx+c = 3x−1" },
    { id: 4, question: "Rearrange 2x+y=6 to gradient-intercept form", options: ["y=2x+6", "y=−2x+6", "y=2x−6", "y=6−2x"], correctAnswer: 1, explanation: "y=−2x+6" },
    { id: 5, question: "Gradient of 3x+2y=8?", options: ["3", "−3/2", "3/2", "−3"], correctAnswer: 1, explanation: "2y=−3x+8, y=−3/2x+4" },
    { id: 6, question: "Which lines are parallel: y=2x+1 and y=2x−3?", options: ["Yes", "No", "Perpendicular", "Same line"], correctAnswer: 0, explanation: "Same gradient (m=2) → parallel" },
    { id: 7, question: "y-intercept of 4x−y=7?", options: ["4", "7", "−7", "−4"], correctAnswer: 2, explanation: "y=4x−7, c=−7" },
    { id: 8, question: "A line has y=mx+c with c=0. It passes through:", options: ["(0,m)", "(m,0)", "(0,0)", "(1,1)"], correctAnswer: 2, explanation: "c=0 means through origin" },
  ],

  "y9-equation-of-line": [
    { id: 1, question: "Gradient 3, through (2,7). Find c.", options: ["1", "−1", "13", "0"], correctAnswer: 0, explanation: "7=3(2)+c, c=1" },
    { id: 2, question: "Through (0,4) and (2,10). Equation?", options: ["y=3x+4", "y=2x+4", "y=3x+10", "y=7x"], correctAnswer: 0, explanation: "m=(10−4)/2=3, c=4" },
    { id: 3, question: "Through (1,5) and (3,11). Gradient?", options: ["2", "3", "6", "8"], correctAnswer: 1, explanation: "(11−5)/(3−1)=3" },
    { id: 4, question: "Line through (−1,2) with m=4. Equation?", options: ["y=4x+6", "y=4x−2", "y=4x+2", "y=4x−6"], correctAnswer: 0, explanation: "2=4(−1)+c, c=6" },
    { id: 5, question: "Point-gradient form: y−y₁ = m(x−x₁). If m=2, point (3,5):", options: ["y−5=2(x−3)", "y−3=2(x−5)", "y=2x+5", "y+5=2(x+3)"], correctAnswer: 0, explanation: "y−5=2(x−3)" },
    { id: 6, question: "y−5=2(x−3) in gradient-intercept form:", options: ["y=2x−1", "y=2x+1", "y=2x−6", "y=2x+11"], correctAnswer: 0, explanation: "y=2x−6+5=2x−1" },
    { id: 7, question: "Through (0,0) and (5,15). Equation?", options: ["y=3x", "y=5x", "y=15x", "y=x+10"], correctAnswer: 0, explanation: "m=15/5=3, c=0" },
    { id: 8, question: "Horizontal line through (2,−3)?", options: ["x=2", "y=−3", "y=2", "x=−3"], correctAnswer: 1, explanation: "Horizontal: y=constant=−3" },
  ],

  "y9-midpoint-distance": [
    { id: 1, question: "Midpoint of (2,4) and (6,8)?", options: ["(4,6)", "(8,12)", "(4,4)", "(3,2)"], correctAnswer: 0, explanation: "((2+6)/2, (4+8)/2) = (4,6)" },
    { id: 2, question: "Distance between (0,0) and (3,4)?", options: ["5", "7", "6", "3.5"], correctAnswer: 0, explanation: "√(9+16) = 5" },
    { id: 3, question: "Distance between (1,2) and (4,6)?", options: ["5", "7", "25", "3"], correctAnswer: 0, explanation: "√(9+16)=5" },
    { id: 4, question: "Midpoint of (−2,3) and (4,−1)?", options: ["(1,1)", "(2,2)", "(−3,2)", "(6,−4)"], correctAnswer: 0, explanation: "((-2+4)/2,(3−1)/2)=(1,1)" },
    { id: 5, question: "Distance formula: d = ?", options: ["√((x₂−x₁)²+(y₂−y₁)²)", "|x₂−x₁|+|y₂−y₁|", "(x₂−x₁)(y₂−y₁)", "√(x₂+y₂)"], correctAnswer: 0, explanation: "d=√((x₂−x₁)²+(y₂−y₁)²)" },
    { id: 6, question: "Midpoint formula: M = ?", options: ["(x₁+x₂, y₁+y₂)", "((x₁+x₂)/2, (y₁+y₂)/2)", "(x₂−x₁, y₂−y₁)", "None"], correctAnswer: 1, explanation: "Average of coordinates" },
    { id: 7, question: "Distance between (−1,−1) and (2,3)?", options: ["5", "√25", "Both A and B", "7"], correctAnswer: 2, explanation: "√(9+16)=√25=5" },
    { id: 8, question: "M is (3,5), one endpoint is (1,2). Other endpoint?", options: ["(5,8)", "(4,7)", "(2,3)", "(6,10)"], correctAnswer: 0, explanation: "(1+x)/2=3→x=5, (2+y)/2=5→y=8" },
  ],

  "y9-parallel-perpendicular": [
    { id: 1, question: "Parallel lines have:", options: ["Same y-intercept", "Same gradient", "Product of gradients = −1", "Same x-intercept"], correctAnswer: 1, explanation: "Parallel = equal gradients" },
    { id: 2, question: "Perpendicular gradients satisfy:", options: ["m₁=m₂", "m₁×m₂=−1", "m₁+m₂=0", "m₁×m₂=1"], correctAnswer: 1, explanation: "Perpendicular: m₁×m₂=−1" },
    { id: 3, question: "Perpendicular to gradient 3?", options: ["3", "−3", "1/3", "−1/3"], correctAnswer: 3, explanation: "3×(−1/3)=−1" },
    { id: 4, question: "y=2x+1 ∥ to which?", options: ["y=2x−5", "y=−2x+1", "y=x/2+1", "y=−x/2"], correctAnswer: 0, explanation: "Same gradient m=2" },
    { id: 5, question: "Perpendicular to y=4x?", options: ["y=4x+1", "y=−4x", "y=x/4", "y=−x/4"], correctAnswer: 3, explanation: "4×(−1/4)=−1" },
    { id: 6, question: "Gradient of line ⊥ to m=−2?", options: ["2", "−2", "1/2", "−1/2"], correctAnswer: 2, explanation: "−2×(1/2)=−1" },
    { id: 7, question: "y=x and y=−x are:", options: ["Parallel", "Perpendicular", "Same line", "Neither"], correctAnswer: 1, explanation: "1×(−1)=−1" },
    { id: 8, question: "Two lines with m=5 and m=5:", options: ["Perpendicular", "Parallel", "Intersecting", "Coincident"], correctAnswer: 1, explanation: "Same gradient → parallel (or coincident)" },
  ],

  "y9-simultaneous-graphical": [
    { id: 1, question: "Graphical solution is the:", options: ["y-intercept", "Intersection point", "Gradient", "x-intercept"], correctAnswer: 1, explanation: "Solution = where lines cross" },
    { id: 2, question: "Solve y=x+1 and y=−x+5 graphically. Intersection?", options: ["(2,3)", "(3,2)", "(1,2)", "(4,5)"], correctAnswer: 0, explanation: "x+1=−x+5, 2x=4, x=2, y=3" },
    { id: 3, question: "Parallel lines have ___ solutions", options: ["0", "1", "2", "Infinite"], correctAnswer: 0, explanation: "Parallel lines never meet" },
    { id: 4, question: "Same line has ___ solutions", options: ["0", "1", "2", "Infinite"], correctAnswer: 3, explanation: "Every point is a solution" },
    { id: 5, question: "Two different non-parallel lines have:", options: ["0 solutions", "1 solution", "2 solutions", "Infinite"], correctAnswer: 1, explanation: "One intersection point" },
    { id: 6, question: "y=2x and y=x+3 intersect at:", options: ["(3,6)", "(1,2)", "(6,12)", "(−3,−6)"], correctAnswer: 0, explanation: "2x=x+3, x=3, y=6" },
    { id: 7, question: "Limitation of graphical method:", options: ["Always exact", "Gives approximate answers", "Doesn't work", "Too fast"], correctAnswer: 1, explanation: "Reading from graph gives estimates" },
    { id: 8, question: "Check (2,5) satisfies y=3x−1:", options: ["Yes: 3(2)−1=5", "No: 3(2)−1=7", "Yes: 2+3=5", "Can't check"], correctAnswer: 0, explanation: "3(2)−1 = 5 ✓" },
  ],

  "y9-linear-modelling": [
    { id: 1, question: "Cost = $50 + $20 per hour. Equation?", options: ["C=50h", "C=20h+50", "C=50h+20", "C=70h"], correctAnswer: 1, explanation: "Fixed cost $50 + $20 per hour" },
    { id: 2, question: "In C=20h+50, gradient represents:", options: ["Fixed cost", "Cost per hour", "Total cost", "Hours"], correctAnswer: 1, explanation: "Gradient = rate of change = cost per hour" },
    { id: 3, question: "In C=20h+50, the 50 represents:", options: ["Hourly rate", "Fixed/initial cost", "Total", "Gradient"], correctAnswer: 1, explanation: "y-intercept = fixed/initial value" },
    { id: 4, question: "Water tank drains at 5L/min from 200L. Model?", options: ["V=200+5t", "V=200−5t", "V=5t−200", "V=5t"], correctAnswer: 1, explanation: "Starts at 200, decreases by 5 per minute" },
    { id: 5, question: "When is tank empty (V=200−5t)?", options: ["t=40 min", "t=195 min", "t=205 min", "t=100 min"], correctAnswer: 0, explanation: "0=200−5t, t=40" },
    { id: 6, question: "Break-even occurs when:", options: ["Cost=0", "Revenue=0", "Cost=Revenue", "Profit=Revenue"], correctAnswer: 2, explanation: "Break-even: cost equals revenue" },
    { id: 7, question: "y=100−4x models distance. Speed?", options: ["100 units", "4 units/time", "96 units", "25 units"], correctAnswer: 1, explanation: "Gradient magnitude = speed = 4" },
    { id: 8, question: "Which is NOT suitable for linear modelling?", options: ["Taxi fare", "Population growth", "Petrol cost", "Hourly wages"], correctAnswer: 1, explanation: "Population growth is typically exponential" },
  ],

  // ═══ CH5-11: Generated from makeTopic structure (8 questions each) ═══
  // The remaining chapters use the makeTopic helper which provides basic quiz questions.
  // These topic quiz questions supplement them with proper 8-question sets.

  "y9-errors-accuracy": [
    { id: 1, question: "Absolute error of measuring to nearest cm?", options: ["1cm", "0.5cm", "0.1cm", "2cm"], correctAnswer: 1, explanation: "Half the smallest unit: 0.5cm" },
    { id: 2, question: "Measurement 5.3cm ± 0.05cm. Range?", options: ["5.25–5.35", "5.2–5.4", "5.0–5.6", "5.3–5.35"], correctAnswer: 0, explanation: "5.3−0.05 to 5.3+0.05" },
    { id: 3, question: "Relative error = ?", options: ["absolute/measured", "measured/absolute", "absolute−measured", "absolute+measured"], correctAnswer: 0, explanation: "Relative error = absolute error ÷ measurement" },
    { id: 4, question: "% error if absolute=0.5, measured=10?", options: ["5%", "0.5%", "50%", "20%"], correctAnswer: 0, explanation: "0.5/10 × 100 = 5%" },
    { id: 5, question: "Precision refers to:", options: ["How close to true value", "How close repeated measurements are", "Accuracy", "Exactness"], correctAnswer: 1, explanation: "Precision = consistency of repeated measurements" },
    { id: 6, question: "Accuracy refers to:", options: ["Consistency", "How close to true value", "Number of decimals", "Instrument type"], correctAnswer: 1, explanation: "Accuracy = closeness to actual value" },
    { id: 7, question: "Final answer precision should match:", options: ["Calculator display", "Least precise input", "Most precise input", "Always 2 d.p."], correctAnswer: 1, explanation: "Don't over-report precision" },
    { id: 8, question: "Can measurements be precise but inaccurate?", options: ["Yes", "No", "Sometimes", "Only digital"], correctAnswer: 0, explanation: "A miscalibrated instrument gives precise but inaccurate results" },
  ],

  "y9-length-perimeter": [
    { id: 1, question: "1km = ? m", options: ["100", "1000", "10000", "10"], correctAnswer: 1, explanation: "1km = 1000m" },
    { id: 2, question: "Perimeter of rectangle 8×5?", options: ["13", "26", "40", "80"], correctAnswer: 1, explanation: "P=2(8+5)=26" },
    { id: 3, question: "Perimeter of square side 7?", options: ["14", "28", "49", "7"], correctAnswer: 1, explanation: "P=4×7=28" },
    { id: 4, question: "Circumference of circle r=7 (use π≈22/7)?", options: ["22", "44", "154", "88"], correctAnswer: 1, explanation: "C=2πr=44" },
    { id: 5, question: "1m = ? cm", options: ["10", "100", "1000", "0.01"], correctAnswer: 1, explanation: "1m = 100cm" },
    { id: 6, question: "Perimeter of equilateral triangle side 9?", options: ["18", "27", "36", "81"], correctAnswer: 1, explanation: "P=3×9=27" },
    { id: 7, question: "Semi-circle perimeter (d=10)?", options: ["5π+10", "10π", "5π", "10π+10"], correctAnswer: 0, explanation: "Half circumference + diameter = 5π+10" },
    { id: 8, question: "Convert 350cm to m", options: ["35m", "3.5m", "0.35m", "3500m"], correctAnswer: 1, explanation: "350÷100=3.5m" },
  ],

  "y9-area": [
    { id: 1, question: "Area of rectangle 8×5?", options: ["13", "40", "26", "80"], correctAnswer: 1, explanation: "A=8×5=40" },
    { id: 2, question: "Area of triangle base 10, height 6?", options: ["60", "30", "16", "36"], correctAnswer: 1, explanation: "A=½×10×6=30" },
    { id: 3, question: "Area of circle radius 5?", options: ["10π", "25π", "50π", "5π"], correctAnswer: 1, explanation: "A=πr²=25π" },
    { id: 4, question: "Area of parallelogram base 12, height 4?", options: ["48", "16", "32", "24"], correctAnswer: 0, explanation: "A=bh=48" },
    { id: 5, question: "Area of trapezium: a=5, b=9, h=6?", options: ["42", "84", "54", "45"], correctAnswer: 0, explanation: "½(5+9)×6=42" },
    { id: 6, question: "Convert 2m² to cm²", options: ["200", "2000", "20000", "2"], correctAnswer: 2, explanation: "1m²=10000cm², 2×10000=20000" },
    { id: 7, question: "Semi-circle area, r=4?", options: ["8π", "16π", "4π", "32π"], correctAnswer: 0, explanation: "½πr²=½×16π=8π" },
    { id: 8, question: "Area of rhombus diagonals 6 and 8?", options: ["24", "48", "14", "28"], correctAnswer: 0, explanation: "A=½×d₁×d₂=½×48=24" },
  ],

  "y9-composite-shapes": [
    { id: 1, question: "Composite shape = ?", options: ["Simple shape", "Combination of shapes", "3D shape", "Circle"], correctAnswer: 1, explanation: "Made from multiple simple shapes" },
    { id: 2, question: "Rectangle 10×8 minus circle d=4. Area?", options: ["80−4π", "80−16π", "80−2π", "80−8π"], correctAnswer: 0, explanation: "80−π(2²)=80−4π" },
    { id: 3, question: "L-shape: 10×6 minus 4×3. Area?", options: ["48", "42", "60", "72"], correctAnswer: 0, explanation: "60−12=48" },
    { id: 4, question: "Strategy for composite area:", options: ["Guess", "Add and/or subtract simple shapes", "Use one formula", "Measure only"], correctAnswer: 1, explanation: "Break into simple shapes" },
    { id: 5, question: "Annulus area (R=5, r=3)?", options: ["16π", "2π", "25π", "34π"], correctAnswer: 0, explanation: "π(25−9)=16π" },
    { id: 6, question: "Shaded area = ?", options: ["Large − small", "Large + small", "Large × small", "Large ÷ small"], correctAnswer: 0, explanation: "Subtract the unshaded part" },
    { id: 7, question: "Rectangle 12×8 with semi-circle (r=4) on end. Total area?", options: ["96+8π", "96+16π", "96−8π", "96+4π"], correctAnswer: 0, explanation: "Rectangle + semi-circle = 96+½π(16)=96+8π" },
    { id: 8, question: "When finding composite perimeter:", options: ["Add all edges", "Only count outer edges", "Count inner edges", "Use area formula"], correctAnswer: 1, explanation: "Only measure the outer boundary" },
  ],

  "y9-sa-prisms": [
    { id: 1, question: "SA of cube side 3?", options: ["27", "54", "36", "18"], correctAnswer: 1, explanation: "6×9=54" },
    { id: 2, question: "Rectangular prism has how many faces?", options: ["4", "5", "6", "8"], correctAnswer: 2, explanation: "6 faces" },
    { id: 3, question: "SA of rectangular prism 2×3×5?", options: ["30", "62", "31", "60"], correctAnswer: 1, explanation: "2(6+10+15)=62" },
    { id: 4, question: "Triangular prism has how many faces?", options: ["3", "4", "5", "6"], correctAnswer: 2, explanation: "2 triangles + 3 rectangles = 5" },
    { id: 5, question: "SA is measured in:", options: ["cm", "cm²", "cm³", "m"], correctAnswer: 1, explanation: "Square units" },
    { id: 6, question: "Net of a cube has how many squares?", options: ["4", "5", "6", "8"], correctAnswer: 2, explanation: "6 faces = 6 squares" },
    { id: 7, question: "Open box (no lid) 4×6×3. SA?", options: ["84", "60", "48", "72"], correctAnswer: 0, explanation: "Base+4sides: 24+2(12)+2(18)=84" },
    { id: 8, question: "To find SA, you find:", options: ["Volume of each face", "Area of each face", "Perimeter", "Diagonal"], correctAnswer: 1, explanation: "SA = sum of areas of all faces" },
  ],

  "y9-sa-cylinders": [
    { id: 1, question: "Closed cylinder SA formula?", options: ["2πrh", "2πr²+2πrh", "πr²h", "2πr(r+h)"], correctAnswer: 3, explanation: "SA=2πr²+2πrh=2πr(r+h)" },
    { id: 2, question: "Open-top cylinder SA (r=3, h=5)?", options: ["9π+30π", "18π+30π", "30π", "39π"], correctAnswer: 0, explanation: "πr²+2πrh=9π+30π=39π" },
    { id: 3, question: "Curved surface area of cylinder?", options: ["πr²", "2πr²", "2πrh", "πr²h"], correctAnswer: 2, explanation: "Lateral/curved SA=2πrh" },
    { id: 4, question: "When unrolled, curved surface becomes:", options: ["Circle", "Rectangle", "Triangle", "Square"], correctAnswer: 1, explanation: "Width=circumference, height=h" },
    { id: 5, question: "Pipe (open both ends) r=2, h=10. SA?", options: ["40π", "48π", "8π", "80π"], correctAnswer: 0, explanation: "2πrh only=40π" },
    { id: 6, question: "Closed cylinder r=5, h=10. SA?", options: ["150π", "100π", "200π", "75π"], correctAnswer: 0, explanation: "2π(5)(15)=150π" },
    { id: 7, question: "SA of a can (r=3, h=8)?", options: ["66π", "48π", "18π", "96π"], correctAnswer: 0, explanation: "2π(3)(3+8)=66π" },
    { id: 8, question: "The rectangle height in a cylinder net equals:", options: ["Radius", "Diameter", "Cylinder height", "Circumference"], correctAnswer: 2, explanation: "Height of rectangle = height of cylinder" },
  ],

  "y9-volume-prisms": [
    { id: 1, question: "Volume of cube side 4?", options: ["16", "48", "64", "12"], correctAnswer: 2, explanation: "V=4³=64" },
    { id: 2, question: "V of rectangular prism 3×4×5?", options: ["12", "60", "47", "120"], correctAnswer: 1, explanation: "V=3×4×5=60" },
    { id: 3, question: "V = cross-section area × ?", options: ["Height only", "Length", "Width", "Perimeter"], correctAnswer: 1, explanation: "V=A×L for any prism" },
    { id: 4, question: "Triangular prism: base area 12, length 8. V?", options: ["20", "96", "48", "192"], correctAnswer: 1, explanation: "V=12×8=96" },
    { id: 5, question: "1 litre = ? cm³", options: ["10", "100", "1000", "10000"], correctAnswer: 2, explanation: "1L=1000cm³" },
    { id: 6, question: "1m³ = ? litres", options: ["10", "100", "1000", "10000"], correctAnswer: 2, explanation: "1m³=1,000,000cm³=1000L" },
    { id: 7, question: "Volume units:", options: ["cm", "cm²", "cm³", "cm⁴"], correctAnswer: 2, explanation: "Cubic units for volume" },
    { id: 8, question: "Container 20×30×50cm. Capacity in litres?", options: ["3L", "30L", "300L", "3000L"], correctAnswer: 1, explanation: "30000cm³÷1000=30L" },
  ],

  "y9-volume-cylinders": [
    { id: 1, question: "Volume of cylinder: V = ?", options: ["2πrh", "πr²h", "πd²h", "2πr²h"], correctAnswer: 1, explanation: "V=πr²h" },
    { id: 2, question: "Cylinder r=3, h=10. Volume?", options: ["30π", "90π", "60π", "9π"], correctAnswer: 1, explanation: "V=π(9)(10)=90π" },
    { id: 3, question: "V=πr²h. If V=200π and r=5, find h.", options: ["8", "40", "10", "4"], correctAnswer: 0, explanation: "200π=25πh, h=8" },
    { id: 4, question: "Cylinder r=4, h=7. Volume?", options: ["28π", "56π", "112π", "196π"], correctAnswer: 2, explanation: "V=π(16)(7)=112π" },
    { id: 5, question: "Capacity of cylinder r=10cm, h=20cm in litres?", options: ["2π L", "6.28L", "2000π mL", "All correct"], correctAnswer: 3, explanation: "V=2000π cm³=2000π mL=2π L≈6.28L" },
    { id: 6, question: "Half-filled cylinder (r=5, h=12). Volume of water?", options: ["300π", "150π", "75π", "600π"], correctAnswer: 1, explanation: "½×π(25)(12)=150π" },
    { id: 7, question: "If r doubles but h stays same, volume:", options: ["Doubles", "Triples", "Quadruples", "Same"], correctAnswer: 2, explanation: "r² → (2r)²=4r², volume ×4" },
    { id: 8, question: "Swimming pool 10m×5m×2m deep. Volume?", options: ["100m³", "50m³", "17m³", "200m³"], correctAnswer: 0, explanation: "10×5×2=100m³" },
  ],

  // CH6-11 topic quizzes use same pattern (8 questions each)
  "y9-index-notation": [
    { id: 1, question: "2⁵ = ?", options: ["10", "25", "32", "64"], correctAnswer: 2, explanation: "2×2×2×2×2=32" },
    { id: 2, question: "In 4³, the base is:", options: ["3", "4", "12", "64"], correctAnswer: 1, explanation: "Base=4" },
    { id: 3, question: "Write 6×6×6 in index form:", options: ["6³", "3⁶", "6×3", "18"], correctAnswer: 0, explanation: "6 multiplied 3 times=6³" },
    { id: 4, question: "(−2)³ = ?", options: ["8", "−8", "6", "−6"], correctAnswer: 1, explanation: "(−2)(−2)(−2)=−8" },
    { id: 5, question: "−2³ = ?", options: ["8", "−8", "6", "−6"], correctAnswer: 1, explanation: "−(2³)=−8" },
    { id: 6, question: "10⁴ = ?", options: ["40", "400", "10000", "1000"], correctAnswer: 2, explanation: "10⁴=10000" },
    { id: 7, question: "a¹ = ?", options: ["1", "a", "0", "a²"], correctAnswer: 1, explanation: "Any number to power 1 is itself" },
    { id: 8, question: "3⁴ = ?", options: ["12", "27", "81", "64"], correctAnswer: 2, explanation: "3×3×3×3=81" },
  ],

  "y9-laws-indices": [
    { id: 1, question: "a⁵ × a² = ?", options: ["a⁷", "a¹⁰", "a³", "2a⁷"], correctAnswer: 0, explanation: "Add indices: a⁷" },
    { id: 2, question: "x⁸ ÷ x³ = ?", options: ["x¹¹", "x⁵", "x²⁴", "x⁸"], correctAnswer: 1, explanation: "Subtract: x⁵" },
    { id: 3, question: "(a²)⁵ = ?", options: ["a⁷", "a¹⁰", "a³²", "2a⁵"], correctAnswer: 1, explanation: "Multiply: a¹⁰" },
    { id: 4, question: "3² × 3⁴ = ?", options: ["3⁸", "3⁶", "9⁶", "3²"], correctAnswer: 1, explanation: "3²⁺⁴=3⁶" },
    { id: 5, question: "2⁵ ÷ 2⁸ = ?", options: ["2³", "2⁻³", "2¹³", "0"], correctAnswer: 1, explanation: "2⁵⁻⁸=2⁻³" },
    { id: 6, question: "(x⁴)² = ?", options: ["x⁶", "x⁸", "x²", "4x²"], correctAnswer: 1, explanation: "x⁴ˣ²=x⁸" },
    { id: 7, question: "(a³)² × a⁴ = ?", options: ["a¹⁰", "a⁹", "a²⁴", "a⁶"], correctAnswer: 0, explanation: "a⁶×a⁴=a¹⁰" },
    { id: 8, question: "Can you simplify 2³ × 5²?", options: ["10⁵", "10⁶", "No, different bases", "2⁶"], correctAnswer: 2, explanation: "Different bases can't combine" },
  ],

  "y9-zero-index": [
    { id: 1, question: "5⁰ = ?", options: ["0", "5", "1", "50"], correctAnswer: 2, explanation: "Any non-zero number to power 0=1" },
    { id: 2, question: "Why does a⁰=1?", options: ["Convention", "aⁿ÷aⁿ=a⁰=1", "It's undefined", "It equals a"], correctAnswer: 1, explanation: "Division law: aⁿ÷aⁿ=1=a⁰" },
    { id: 3, question: "(3x)⁰ = ?", options: ["0", "3x", "1", "3"], correctAnswer: 2, explanation: "Anything⁰=1" },
    { id: 4, question: "0⁰ is:", options: ["0", "1", "Undefined", "∞"], correctAnswer: 2, explanation: "0⁰ is undefined" },
    { id: 5, question: "7⁰ + 3⁰ = ?", options: ["10", "0", "2", "1"], correctAnswer: 2, explanation: "1+1=2" },
    { id: 6, question: "x⁰ × x⁵ = ?", options: ["x⁰", "x⁵", "0", "5x"], correctAnswer: 1, explanation: "1×x⁵=x⁵" },
    { id: 7, question: "(−4)⁰ = ?", options: ["−4", "0", "1", "−1"], correctAnswer: 2, explanation: "(−4)⁰=1" },
    { id: 8, question: "2⁰ × 3⁰ × 4⁰ = ?", options: ["0", "24", "1", "3"], correctAnswer: 2, explanation: "1×1×1=1" },
  ],

  "y9-negative-indices": [
    { id: 1, question: "2⁻³ = ?", options: ["−8", "−6", "1/8", "8"], correctAnswer: 2, explanation: "2⁻³=1/2³=1/8" },
    { id: 2, question: "a⁻¹ = ?", options: ["−a", "1/a", "−1", "a"], correctAnswer: 1, explanation: "a⁻¹=1/a (reciprocal)" },
    { id: 3, question: "5⁻² = ?", options: ["−10", "1/25", "−25", "25"], correctAnswer: 1, explanation: "5⁻²=1/25" },
    { id: 4, question: "x⁻¹ × x³ = ?", options: ["x²", "x⁻³", "x⁴", "x⁻⁴"], correctAnswer: 0, explanation: "x⁻¹⁺³=x²" },
    { id: 5, question: "(2/3)⁻¹ = ?", options: ["2/3", "3/2", "−2/3", "6"], correctAnswer: 1, explanation: "Flip: 3/2" },
    { id: 6, question: "(2/3)⁻² = ?", options: ["4/9", "9/4", "−4/9", "6/9"], correctAnswer: 1, explanation: "(3/2)²=9/4" },
    { id: 7, question: "10⁻⁴ = ?", options: ["0.001", "0.0001", "−10000", "−40"], correctAnswer: 1, explanation: "1/10000=0.0001" },
    { id: 8, question: "Negative index means:", options: ["Negative number", "Reciprocal", "Subtract", "Zero"], correctAnswer: 1, explanation: "a⁻ⁿ=1/aⁿ" },
  ],

  "y9-fractional-indices": [
    { id: 1, question: "9^(1/2) = ?", options: ["3", "4.5", "81", "18"], correctAnswer: 0, explanation: "9^(1/2)=√9=3" },
    { id: 2, question: "8^(1/3) = ?", options: ["2", "4", "2.67", "24"], correctAnswer: 0, explanation: "8^(1/3)=³√8=2" },
    { id: 3, question: "a^(1/2) means:", options: ["a÷2", "√a", "a²", "2a"], correctAnswer: 1, explanation: "Fractional index=root" },
    { id: 4, question: "27^(2/3) = ?", options: ["9", "18", "3", "81"], correctAnswer: 0, explanation: "(³√27)²=3²=9" },
    { id: 5, question: "16^(3/4) = ?", options: ["8", "12", "4", "64"], correctAnswer: 0, explanation: "(⁴√16)³=2³=8" },
    { id: 6, question: "x^(1/2) × x^(1/2) = ?", options: ["x^(1/4)", "x", "x²", "2x"], correctAnswer: 1, explanation: "x^(1/2+1/2)=x¹=x" },
    { id: 7, question: "4^(3/2) = ?", options: ["6", "8", "12", "16"], correctAnswer: 1, explanation: "(√4)³=2³=8" },
    { id: 8, question: "125^(1/3) = ?", options: ["5", "25", "41.67", "62.5"], correctAnswer: 0, explanation: "³√125=5" },
  ],

  "y9-scientific-notation": [
    { id: 1, question: "Write 4,500,000 in scientific notation", options: ["4.5×10⁶", "45×10⁵", "4.5×10⁷", "0.45×10⁷"], correctAnswer: 0, explanation: "4.5×10⁶" },
    { id: 2, question: "Write 0.00032 in scientific notation", options: ["3.2×10⁻⁴", "32×10⁻⁵", "3.2×10⁴", "3.2×10⁻³"], correctAnswer: 0, explanation: "3.2×10⁻⁴" },
    { id: 3, question: "2.5×10³ as a number?", options: ["250", "2500", "25000", "25"], correctAnswer: 1, explanation: "2.5×1000=2500" },
    { id: 4, question: "(2×10³)(3×10⁴) = ?", options: ["6×10⁷", "5×10⁷", "6×10¹²", "5×10¹²"], correctAnswer: 0, explanation: "2×3=6, 10³⁺⁴=10⁷" },
    { id: 5, question: "8×10⁵ ÷ 2×10² = ?", options: ["4×10³", "4×10⁷", "6×10³", "4×10²"], correctAnswer: 0, explanation: "8/2=4, 10⁵⁻²=10³" },
    { id: 6, question: "Which is NOT in scientific notation?", options: ["3.1×10⁵", "0.5×10³", "7×10⁻²", "1.0×10⁰"], correctAnswer: 1, explanation: "Coefficient must be 1≤a<10, 0.5 fails" },
    { id: 7, question: "Speed of light ≈ 3×10⁸. Units?", options: ["km/h", "m/s", "mph", "cm/s"], correctAnswer: 1, explanation: "3×10⁸ m/s" },
    { id: 8, question: "Express 3.6×10⁴ + 4×10³ as number", options: ["40000", "40600", "36400", "76000"], correctAnswer: 0, explanation: "36000+4000=40000" },
  ],

  "y9-significant-figures": [
    { id: 1, question: "How many s.f. in 0.0042?", options: ["2", "4", "1", "3"], correctAnswer: 0, explanation: "4 and 2: 2 s.f." },
    { id: 2, question: "Round 3456 to 3 s.f.", options: ["3450", "3460", "346", "3500"], correctAnswer: 1, explanation: "3rd digit=5, next=6≥5, round up: 3460" },
    { id: 3, question: "0.00567 to 2 s.f.?", options: ["0.0056", "0.0057", "0.006", "0.57"], correctAnswer: 1, explanation: "5,6 → next is 7≥5: 0.0057" },
    { id: 4, question: "In multiplication, use:", options: ["Most d.p.", "Fewest s.f.", "Most s.f.", "Always 2 d.p."], correctAnswer: 1, explanation: "Fewest significant figures" },
    { id: 5, question: "How many s.f. in 1000?", options: ["1", "4", "Ambiguous", "3"], correctAnswer: 2, explanation: "Could be 1 or 4 — context dependent" },
    { id: 6, question: "5.00 has how many s.f.?", options: ["1", "2", "3", "0"], correctAnswer: 2, explanation: "Trailing zeros after decimal count: 3 s.f." },
    { id: 7, question: "2.3 × 4.56 = ? (correct s.f.)", options: ["10.488", "10.5", "10", "11"], correctAnswer: 1, explanation: "2 s.f. (from 2.3): 10. → 10.5" },
    { id: 8, question: "Leading zeros are:", options: ["Always significant", "Never significant", "Sometimes", "Only after decimal"], correctAnswer: 1, explanation: "Leading zeros are never significant" },
  ],

  "y9-surds-operations": [
    { id: 1, question: "Simplify √72", options: ["6√2", "8√3", "3√8", "4√9"], correctAnswer: 0, explanation: "√(36×2)=6√2" },
    { id: 2, question: "Simplify √50", options: ["25√2", "5√2", "10√5", "2√25"], correctAnswer: 1, explanation: "√(25×2)=5√2" },
    { id: 3, question: "3√2 + 5√2 = ?", options: ["8√4", "8√2", "15√2", "8"], correctAnswer: 1, explanation: "Like surds: 8√2" },
    { id: 4, question: "√2 × √3 = ?", options: ["√5", "√6", "6", "5"], correctAnswer: 1, explanation: "√(2×3)=√6" },
    { id: 5, question: "Rationalise 1/√3", options: ["√3", "√3/3", "3/√3", "1/3"], correctAnswer: 1, explanation: "1/√3 × √3/√3 = √3/3" },
    { id: 6, question: "√5 × √5 = ?", options: ["√25", "5", "25", "Both A and B"], correctAnswer: 3, explanation: "√5×√5=5=√25" },
    { id: 7, question: "Simplify √200", options: ["10√2", "20√5", "2√100", "5√8"], correctAnswer: 0, explanation: "√(100×2)=10√2" },
    { id: 8, question: "√8 + √2 = ?", options: ["√10", "3√2", "2√2+√2", "Both B and C"], correctAnswer: 3, explanation: "2√2+√2=3√2" },
  ],

  // CH7: GEOMETRY
  "y9-angles-triangles": [
    { id: 1, question: "Angles in a triangle sum to:", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "Always 180°" },
    { id: 2, question: "An equilateral triangle has angles:", options: ["30°,60°,90°", "60°,60°,60°", "45°,45°,90°", "Varies"], correctAnswer: 1, explanation: "All 60°" },
    { id: 3, question: "Exterior angle = ?", options: ["Adjacent interior", "Sum of 2 non-adjacent interiors", "180°", "90°"], correctAnswer: 1, explanation: "Exterior = sum of two remote interiors" },
    { id: 4, question: "Isosceles triangle has:", options: ["No equal sides", "2 equal sides", "3 equal sides", "2 right angles"], correctAnswer: 1, explanation: "2 equal sides and 2 equal base angles" },
    { id: 5, question: "Obtuse triangle has an angle:", options: ["> 90°", "= 90°", "< 90°", "= 180°"], correctAnswer: 0, explanation: "One angle greater than 90°" },
    { id: 6, question: "Two angles are 50° and 70°. Third?", options: ["60°", "120°", "40°", "80°"], correctAnswer: 0, explanation: "180−50−70=60°" },
    { id: 7, question: "A scalene triangle has:", options: ["3 equal sides", "2 equal sides", "No equal sides", "Right angle"], correctAnswer: 2, explanation: "All sides different" },
    { id: 8, question: "Exterior angle is 120°. Non-adjacent interiors could be:", options: ["50°,70°", "60°,60°", "Both A and B", "120°,60°"], correctAnswer: 2, explanation: "Any pair summing to 120°" },
  ],

  "y9-parallel-lines": [
    { id: 1, question: "Corresponding angles are:", options: ["Supplementary", "Equal", "Complementary", "Different"], correctAnswer: 1, explanation: "Corresponding (F-shape) are equal" },
    { id: 2, question: "Alternate angles are:", options: ["Supplementary", "Equal", "90°", "180°"], correctAnswer: 1, explanation: "Alternate (Z-shape) are equal" },
    { id: 3, question: "Co-interior angles sum to:", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "C-shape angles sum to 180°" },
    { id: 4, question: "Vertically opposite angles are:", options: ["Supplementary", "Complementary", "Equal", "90°"], correctAnswer: 2, explanation: "Vertically opposite = equal" },
    { id: 5, question: "If corresponding angles are equal, lines are:", options: ["Perpendicular", "Parallel", "Intersecting", "Skew"], correctAnswer: 1, explanation: "Equal corresponding angles → parallel" },
    { id: 6, question: "A transversal is:", options: ["A parallel line", "A line crossing parallel lines", "A perpendicular", "A ray"], correctAnswer: 1, explanation: "Line crossing two or more lines" },
    { id: 7, question: "Co-interior angle with 65° is:", options: ["65°", "115°", "25°", "295°"], correctAnswer: 1, explanation: "180−65=115°" },
    { id: 8, question: "Alternate angle to 48° is:", options: ["48°", "132°", "42°", "138°"], correctAnswer: 0, explanation: "Alternate angles are equal: 48°" },
  ],

  "y9-quadrilaterals-polygons": [
    { id: 1, question: "Angle sum of quadrilateral?", options: ["180°", "270°", "360°", "540°"], correctAnswer: 2, explanation: "360°" },
    { id: 2, question: "Interior angle sum formula: (n−2)×?", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "(n−2)×180°" },
    { id: 3, question: "Pentagon angle sum?", options: ["360°", "540°", "720°", "900°"], correctAnswer: 1, explanation: "(5−2)×180°=540°" },
    { id: 4, question: "Each angle of regular hexagon?", options: ["120°", "108°", "90°", "135°"], correctAnswer: 0, explanation: "720°/6=120°" },
    { id: 5, question: "Exterior angles of any polygon sum to:", options: ["180°", "360°", "540°", "Varies"], correctAnswer: 1, explanation: "Always 360°" },
    { id: 6, question: "Each exterior angle of regular octagon?", options: ["45°", "135°", "40°", "60°"], correctAnswer: 0, explanation: "360°/8=45°" },
    { id: 7, question: "Parallelogram has:", options: ["4 right angles", "Opposite sides parallel", "All sides equal", "No parallel sides"], correctAnswer: 1, explanation: "Opposite sides parallel and equal" },
    { id: 8, question: "A rhombus has:", options: ["4 right angles", "No equal sides", "4 equal sides", "Only 2 equal sides"], correctAnswer: 2, explanation: "All 4 sides equal" },
  ],

  "y9-congruent-triangles": [
    { id: 1, question: "SSS means:", options: ["3 angles equal", "3 sides equal", "2 sides, 1 angle", "Side-side-sum"], correctAnswer: 1, explanation: "Three sides equal" },
    { id: 2, question: "SAS means:", options: ["Side-angle-side", "Side-any-side", "Sum-angle-sum", "Same-as-similar"], correctAnswer: 0, explanation: "Two sides and included angle" },
    { id: 3, question: "RHS applies to:", options: ["All triangles", "Right triangles only", "Isosceles only", "Equilateral"], correctAnswer: 1, explanation: "Right angle, hypotenuse, side" },
    { id: 4, question: "How many tests for congruence?", options: ["2", "3", "4", "5"], correctAnswer: 2, explanation: "SSS, SAS, ASA, RHS" },
    { id: 5, question: "Congruent triangles have:", options: ["Same shape only", "Same size only", "Same shape AND size", "Neither"], correctAnswer: 2, explanation: "Exactly the same" },
    { id: 6, question: "ASA means:", options: ["Angle-side-angle", "Any-side-any", "Angle-sum-angle", "Always-same-angle"], correctAnswer: 0, explanation: "Two angles and included side" },
    { id: 7, question: "AAA proves:", options: ["Congruence", "Similarity only", "Nothing", "Both"], correctAnswer: 1, explanation: "AAA proves similarity, not congruence" },
    { id: 8, question: "If △ABC ≡ △DEF, then AB = ?", options: ["DE", "EF", "DF", "Any side"], correctAnswer: 0, explanation: "Corresponding sides are equal" },
  ],

  "y9-congruence-proofs": [
    { id: 1, question: "A congruence proof must show:", options: ["1 condition", "2 conditions", "3 conditions matching a test", "4 conditions"], correctAnswer: 2, explanation: "Must satisfy all 3 conditions of a test" },
    { id: 2, question: "CPCT stands for:", options: ["Corresponding Parts of Congruent Triangles", "Common Points Create Triangles", "Congruent Parts of Common Triangles", "None"], correctAnswer: 0, explanation: "Corresponding Parts of Congruent Triangles" },
    { id: 3, question: "Common side means:", options: ["Different lengths", "Shared between two triangles", "Hypotenuse", "Parallel"], correctAnswer: 1, explanation: "A side belonging to both triangles" },
    { id: 4, question: "After proving congruence, use CPCT to:", options: ["Find more congruent triangles", "Prove corresponding parts equal", "Calculate area", "Find volume"], correctAnswer: 1, explanation: "CPCT proves other parts equal" },
    { id: 5, question: "In proof, 'vertically opposite' gives:", options: ["Equal sides", "Equal angles", "Parallel lines", "Right angles"], correctAnswer: 1, explanation: "Vertically opposite angles are equal" },
    { id: 6, question: "In an isosceles triangle proof, the key is:", options: ["All sides equal", "Base angles equal", "No sides equal", "Right angle"], correctAnswer: 1, explanation: "Base angles are equal" },
    { id: 7, question: "Proof ends with:", options: ["∴ (therefore)", "Because", "Maybe", "Probably"], correctAnswer: 0, explanation: "∴ △ABC ≡ △DEF (by test)" },
    { id: 8, question: "Reflexive property means:", options: ["AB = BA", "AB = CD", "AB ≠ AB", "AB > BA"], correctAnswer: 0, explanation: "A segment equals itself" },
  ],

  "y9-enlargement": [
    { id: 1, question: "Scale factor k=2 means:", options: ["Half size", "Double size", "Same size", "Triple"], correctAnswer: 1, explanation: "k=2: all lengths doubled" },
    { id: 2, question: "k=0.5 means:", options: ["Double", "Half size", "Same", "Zero"], correctAnswer: 1, explanation: "Reduction to half" },
    { id: 3, question: "Angles in enlargement:", options: ["Change", "Stay same", "Double", "Halve"], correctAnswer: 1, explanation: "Angles preserved" },
    { id: 4, question: "Area scale factor when k=3?", options: ["3", "6", "9", "27"], correctAnswer: 2, explanation: "Area × k² = 9" },
    { id: 5, question: "Volume scale factor when k=2?", options: ["2", "4", "8", "16"], correctAnswer: 2, explanation: "Volume × k³ = 8" },
    { id: 6, question: "Length × k, Area × k², Volume × ?", options: ["k", "k²", "k³", "k⁴"], correctAnswer: 2, explanation: "Volume scales by k³" },
    { id: 7, question: "Original 5cm, image 15cm. Scale factor?", options: ["2", "3", "5", "10"], correctAnswer: 1, explanation: "15/5=3" },
    { id: 8, question: "k=1 means:", options: ["Enlargement", "Reduction", "No change", "Reflection"], correctAnswer: 2, explanation: "Same size" },
  ],

  "y9-similar-figures": [
    { id: 1, question: "Similar figures have:", options: ["Same size", "Same shape", "Same colour", "Same position"], correctAnswer: 1, explanation: "Same shape, may differ in size" },
    { id: 2, question: "All corresponding angles in similar figures:", options: ["Different", "Equal", "Supplementary", "Complementary"], correctAnswer: 1, explanation: "Angles are equal" },
    { id: 3, question: "Sides in similar figures are:", options: ["Equal", "In proportion", "Random", "Perpendicular"], correctAnswer: 1, explanation: "Corresponding sides in same ratio" },
    { id: 4, question: "Scale factor from 4cm to 12cm?", options: ["3", "8", "4", "48"], correctAnswer: 0, explanation: "12/4=3" },
    { id: 5, question: "Map scale 1:50000. 3cm on map = ?", options: ["150m", "1500m", "15km", "1.5km"], correctAnswer: 1, explanation: "3×50000=150000cm=1500m" },
    { id: 6, question: "If similar and ratio 2:5, and small side=6, large side=?", options: ["12", "15", "30", "10"], correctAnswer: 1, explanation: "6×(5/2)=15" },
    { id: 7, question: "All circles are:", options: ["Congruent", "Similar", "Neither", "Both"], correctAnswer: 1, explanation: "All circles are similar" },
    { id: 8, question: "All squares are:", options: ["Congruent", "Similar", "Neither", "Both"], correctAnswer: 1, explanation: "All squares are similar" },
  ],

  "y9-similar-triangles-proofs": [
    { id: 1, question: "AA test for similarity needs:", options: ["1 angle pair", "2 angle pairs", "3 angle pairs", "No angles"], correctAnswer: 1, explanation: "Two pairs of equal angles" },
    { id: 2, question: "SSS ratio test: all sides:", options: ["Equal", "In same ratio", "Different", "Perpendicular"], correctAnswer: 1, explanation: "All three ratios equal" },
    { id: 3, question: "SAS ratio test needs:", options: ["2 sides proportional + included angle", "2 sides equal", "3 sides", "1 side"], correctAnswer: 0, explanation: "Two sides in proportion with included angle equal" },
    { id: 4, question: "Symbol for similarity:", options: ["≡", "=", "|||", "≈"], correctAnswer: 2, explanation: "△ABC ||| △DEF" },
    { id: 5, question: "If △ABC ||| △DEF with ratio 3, AB=6, DE=?", options: ["2", "18", "9", "6"], correctAnswer: 0, explanation: "DE=6/3=2" },
    { id: 6, question: "In similar triangles, to find unknown:", options: ["Add sides", "Set up proportion", "Subtract angles", "Use area"], correctAnswer: 1, explanation: "Set up ratio equation" },
    { id: 7, question: "Cross-multiply a/b = c/d gives:", options: ["ac=bd", "ad=bc", "a+d=b+c", "a−b=c−d"], correctAnswer: 1, explanation: "ad=bc" },
    { id: 8, question: "All equilateral triangles are:", options: ["Congruent", "Similar", "Neither", "Right-angled"], correctAnswer: 1, explanation: "All have 60° angles → similar" },
  ],

  // CH8: ALGEBRAIC TECHNIQUES
  "y9-expanding-binomials": [
    { id: 1, question: "(x+3)(x+2) = ?", options: ["x²+5x+6", "x²+6x+5", "x²+5x+5", "2x+5"], correctAnswer: 0, explanation: "x²+2x+3x+6=x²+5x+6" },
    { id: 2, question: "(x−4)(x+1) = ?", options: ["x²−3x−4", "x²+3x−4", "x²−5x−4", "x²−4"], correctAnswer: 0, explanation: "x²+x−4x−4=x²−3x−4" },
    { id: 3, question: "(2x+1)(x−3) = ?", options: ["2x²−5x−3", "2x²+5x−3", "2x²−5x+3", "2x²−7x−3"], correctAnswer: 0, explanation: "2x²−6x+x−3=2x²−5x−3" },
    { id: 4, question: "FOIL stands for:", options: ["First Outer Inner Last", "Find Our Initial Lengths", "Factor Or Identify Lines", "None"], correctAnswer: 0, explanation: "First, Outer, Inner, Last" },
    { id: 5, question: "(a+b)(a−b) = ?", options: ["a²+b²", "a²−b²", "2a²−2b²", "a²+2ab+b²"], correctAnswer: 1, explanation: "Difference of squares" },
    { id: 6, question: "(3x−2)(2x+5) = ?", options: ["6x²+11x−10", "6x²−11x−10", "6x²+11x+10", "6x²−11x+10"], correctAnswer: 0, explanation: "6x²+15x−4x−10=6x²+11x−10" },
    { id: 7, question: "(x+4)² = ?", options: ["x²+16", "x²+8x+16", "x²+4x+16", "2x+8"], correctAnswer: 1, explanation: "x²+8x+16" },
    { id: 8, question: "After FOIL, always:", options: ["Stop", "Collect like terms", "Factor", "Divide"], correctAnswer: 1, explanation: "Combine like terms" },
  ],

  "y9-perfect-square-identities": [
    { id: 1, question: "(x+5)² = ?", options: ["x²+25", "x²+10x+25", "x²+5x+25", "2x+10"], correctAnswer: 1, explanation: "x²+10x+25" },
    { id: 2, question: "(x−4)² = ?", options: ["x²−16", "x²−8x+16", "x²+8x+16", "x²−4x+16"], correctAnswer: 1, explanation: "x²−8x+16" },
    { id: 3, question: "(a+b)² = ?", options: ["a²+b²", "a²+2ab+b²", "a²−2ab+b²", "2(a+b)"], correctAnswer: 1, explanation: "a²+2ab+b² (don't forget middle term)" },
    { id: 4, question: "x²−25 = ?", options: ["(x−5)²", "(x+5)(x−5)", "(x−25)(x+1)", "Can't factor"], correctAnswer: 1, explanation: "DOTS: x²−5²=(x+5)(x−5)" },
    { id: 5, question: "4x²−9 = ?", options: ["(2x−3)(2x+3)", "(4x−9)(x+1)", "(2x−9)(2x+1)", "(4x−3)(x+3)"], correctAnswer: 0, explanation: "(2x)²−3²=(2x−3)(2x+3)" },
    { id: 6, question: "(2a−3)² = ?", options: ["4a²−9", "4a²−6a+9", "4a²−12a+9", "2a²−6a+9"], correctAnswer: 2, explanation: "4a²−12a+9" },
    { id: 7, question: "(a+b)² ≠ a²+b². The missing term is:", options: ["ab", "2ab", "−2ab", "a+b"], correctAnswer: 1, explanation: "The middle term 2ab" },
    { id: 8, question: "x²−49 = ?", options: ["(x−7)²", "(x+7)(x−7)", "(x−49)(x+1)", "Can't factor"], correctAnswer: 1, explanation: "x²−7²=(x+7)(x−7)" },
  ],

  "y9-factorising-grouping": [
    { id: 1, question: "First step in factorising: always check for:", options: ["Difference of squares", "Common factor", "Grouping", "Quadratic"], correctAnswer: 1, explanation: "HCF first" },
    { id: 2, question: "Factorise 6x+9", options: ["3(2x+3)", "6(x+9)", "3(2x+9)", "9(x+1)"], correctAnswer: 0, explanation: "HCF=3: 3(2x+3)" },
    { id: 3, question: "Factorise ax+ay+bx+by", options: ["(a+b)(x+y)", "(a−b)(x−y)", "ab+xy", "Can't factor"], correctAnswer: 0, explanation: "a(x+y)+b(x+y)=(a+b)(x+y)" },
    { id: 4, question: "Factorise x²+3x+2x+6", options: ["(x+2)(x+3)", "(x+1)(x+6)", "x(x+5)+6", "Can't factor"], correctAnswer: 0, explanation: "x(x+3)+2(x+3)=(x+2)(x+3)" },
    { id: 5, question: "HCF of 12x² and 8x?", options: ["4x", "2x", "4x²", "8x"], correctAnswer: 0, explanation: "HCF=4x" },
    { id: 6, question: "Factorise 4x²−8x", options: ["4x(x−2)", "4(x²−2x)", "Both", "Neither"], correctAnswer: 2, explanation: "Both valid, 4x(x−2) is fully factored" },
    { id: 7, question: "Grouping works best with:", options: ["2 terms", "3 terms", "4 terms", "5 terms"], correctAnswer: 2, explanation: "Group 4 terms into 2 pairs" },
    { id: 8, question: "Check factorisation by:", options: ["Dividing", "Expanding back", "Adding", "Graphing"], correctAnswer: 1, explanation: "Expand to verify" },
  ],

  "y9-monic-quadratic-trinomials": [
    { id: 1, question: "Factorise x²+7x+12", options: ["(x+3)(x+4)", "(x+2)(x+6)", "(x+1)(x+12)", "(x+4)²"], correctAnswer: 0, explanation: "3+4=7, 3×4=12" },
    { id: 2, question: "Factorise x²−x−6", options: ["(x−3)(x+2)", "(x+3)(x−2)", "(x−6)(x+1)", "(x+6)(x−1)"], correctAnswer: 0, explanation: "−3+2=−1, −3×2=−6" },
    { id: 3, question: "Factorise x²+5x+6", options: ["(x+2)(x+3)", "(x+1)(x+6)", "(x+5)(x+1)", "(x+3)²"], correctAnswer: 0, explanation: "2+3=5, 2×3=6" },
    { id: 4, question: "Factorise x²−5x+6", options: ["(x−2)(x−3)", "(x+2)(x+3)", "(x−1)(x−6)", "(x−6)(x+1)"], correctAnswer: 0, explanation: "−2+(−3)=−5, (−2)(−3)=6" },
    { id: 5, question: "x²+bx+c: if c>0, b>0, both factors are:", options: ["Positive", "Negative", "Mixed", "Zero"], correctAnswer: 0, explanation: "Both positive (add to positive, multiply to positive)" },
    { id: 6, question: "x²+bx+c: if c<0, factors have:", options: ["Same sign", "Different signs", "Both zero", "No factors"], correctAnswer: 1, explanation: "Different signs (multiply to negative)" },
    { id: 7, question: "Factorise x²−9x+20", options: ["(x−4)(x−5)", "(x+4)(x+5)", "(x−2)(x−10)", "(x−20)(x+1)"], correctAnswer: 0, explanation: "−4+(−5)=−9, (−4)(−5)=20" },
    { id: 8, question: "Factorise x²+2x−15", options: ["(x+5)(x−3)", "(x−5)(x+3)", "(x+15)(x−1)", "(x−15)(x+1)"], correctAnswer: 0, explanation: "5+(−3)=2, 5×(−3)=−15" },
  ],

  "y9-factorising-non-monic": [
    { id: 1, question: "Factorise 2x²+5x+3", options: ["(2x+3)(x+1)", "(2x+1)(x+3)", "(x+3)(2x+1)", "Both A and C"], correctAnswer: 0, explanation: "ac=6, factors of 6 summing to 5: 2,3" },
    { id: 2, question: "First step in AC method: multiply:", options: ["a×b", "b×c", "a×c", "a+c"], correctAnswer: 2, explanation: "Multiply a and c" },
    { id: 3, question: "Factorise 3x²+10x+3", options: ["(3x+1)(x+3)", "(3x+3)(x+1)", "(x+1)(3x+3)", "Both A"], correctAnswer: 0, explanation: "ac=9, 1+9=10: 3x²+x+9x+3=(3x+1)(x+3)" },
    { id: 4, question: "4x²−9 = ?", options: ["(2x−3)(2x+3)", "(4x−9)(x+1)", "(2x−9)(2x+1)", "Can't factor"], correctAnswer: 0, explanation: "DOTS: (2x)²−3²" },
    { id: 5, question: "9x²+12x+4 = ?", options: ["(3x+2)²", "(3x+4)(3x+1)", "(9x+4)(x+1)", "(3x+2)(3x+4)"], correctAnswer: 0, explanation: "Perfect square: (3x+2)²" },
    { id: 6, question: "Always check for ___ factor first", options: ["Quadratic", "Common", "Linear", "Cubic"], correctAnswer: 1, explanation: "HCF first" },
    { id: 7, question: "Factorise 6x²−x−2", options: ["(2x+1)(3x−2)", "(3x+2)(2x−1)", "(6x+1)(x−2)", "(3x−1)(2x+2)"], correctAnswer: 0, explanation: "Check: (2x+1)(3x−2)=6x²−4x+3x−2=6x²−x−2 ✓" },
    { id: 8, question: "Non-monic means a:", options: ["= 1", "≠ 1", "= 0", "< 0"], correctAnswer: 1, explanation: "a≠1 in ax²+bx+c" },
  ],

  "y9-simplifying-algebraic-fractions": [
    { id: 1, question: "Simplify 6x/(3x) = ?", options: ["2", "2x", "3", "6"], correctAnswer: 0, explanation: "Cancel: 6x÷3x=2" },
    { id: 2, question: "Simplify (x²−4)/(x+2)", options: ["x−2", "x+2", "x²−2", "Can't simplify"], correctAnswer: 0, explanation: "(x+2)(x−2)/(x+2)=x−2" },
    { id: 3, question: "To simplify, first:", options: ["Cancel terms", "Factor numerator and denominator", "Add", "Cross-multiply"], correctAnswer: 1, explanation: "Factor first, then cancel common factors" },
    { id: 4, question: "x/3 + x/6 = ?", options: ["2x/9", "x/2", "3x/6", "x/9"], correctAnswer: 1, explanation: "2x/6+x/6=3x/6=x/2" },
    { id: 5, question: "2/(x+1) + 3/(x+1) = ?", options: ["5/(x+1)", "5/(2x+2)", "6/(x+1)", "5/2(x+1)"], correctAnswer: 0, explanation: "Same denominator: (2+3)/(x+1)=5/(x+1)" },
    { id: 6, question: "a/b × c/d = ?", options: ["ac/bd", "ad/bc", "(a+c)/(b+d)", "ac+bd"], correctAnswer: 0, explanation: "Multiply tops, multiply bottoms" },
    { id: 7, question: "a/b ÷ c/d = ?", options: ["ac/bd", "ad/bc", "a/b × d/c", "Both B and C"], correctAnswer: 3, explanation: "Flip and multiply: ad/bc" },
    { id: 8, question: "You can cancel ___ but not ___", options: ["Terms, factors", "Factors, terms", "Anything", "Nothing"], correctAnswer: 1, explanation: "Cancel common FACTORS only" },
  ],

  "y9-equations-algebraic-fractions": [
    { id: 1, question: "Solve x/3 = 5", options: ["x=15", "x=5/3", "x=8", "x=2"], correctAnswer: 0, explanation: "x=3×5=15" },
    { id: 2, question: "To solve fraction equations, multiply by:", options: ["Numerator", "LCD", "Any number", "Zero"], correctAnswer: 1, explanation: "LCD eliminates all fractions" },
    { id: 3, question: "Solve x/2 + x/3 = 5", options: ["x=6", "x=5", "x=30", "x=10"], correctAnswer: 0, explanation: "LCD=6: 3x+2x=30, 5x=30, x=6" },
    { id: 4, question: "Cross-multiply a/b = c/d gives:", options: ["ac=bd", "ad=bc", "a+d=b+c", "ab=cd"], correctAnswer: 1, explanation: "ad=bc" },
    { id: 5, question: "Solve 2/x = 6", options: ["x=1/3", "x=3", "x=12", "x=4"], correctAnswer: 0, explanation: "2=6x, x=2/6=1/3" },
    { id: 6, question: "Solve (x+1)/4 = 3", options: ["x=11", "x=12", "x=7", "x=13"], correctAnswer: 0, explanation: "x+1=12, x=11" },
    { id: 7, question: "Extraneous solution is:", options: ["Extra correct answer", "Solution that doesn't work in original", "Best solution", "Approximate"], correctAnswer: 1, explanation: "A 'solution' that makes denominator zero" },
    { id: 8, question: "Solve 3/(x−1) = 6", options: ["x=1.5", "x=3/2", "Both A and B", "x=2"], correctAnswer: 2, explanation: "3=6(x−1), 3=6x−6, 9=6x, x=3/2=1.5" },
  ],

  // CH9: PROBABILITY & STATISTICS
  "y9-review-probability": [
    { id: 1, question: "P(rolling 3 on fair die)?", options: ["1/3", "1/6", "1/2", "3/6"], correctAnswer: 1, explanation: "1 outcome / 6 possible = 1/6" },
    { id: 2, question: "P range is:", options: ["0 to 100", "−1 to 1", "0 to 1", "1 to 10"], correctAnswer: 2, explanation: "Always 0 to 1" },
    { id: 3, question: "Complement of P(A)=0.3?", options: ["0.3", "0.7", "1.3", "−0.3"], correctAnswer: 1, explanation: "1−0.3=0.7" },
    { id: 4, question: "P(heads) fair coin?", options: ["1/4", "1/3", "1/2", "1"], correctAnswer: 2, explanation: "1/2" },
    { id: 5, question: "P=0 means:", options: ["Certain", "Impossible", "Likely", "Unlikely"], correctAnswer: 1, explanation: "Cannot happen" },
    { id: 6, question: "Bag: 3 red, 2 blue. P(red)?", options: ["3/2", "3/5", "2/5", "2/3"], correctAnswer: 1, explanation: "3/5" },
    { id: 7, question: "Sample space is:", options: ["A graph", "All possible outcomes", "Most likely outcome", "A table"], correctAnswer: 1, explanation: "Set of all possible outcomes" },
    { id: 8, question: "Mutually exclusive means:", options: ["Can both happen", "Can't happen together", "Always happen together", "Neither happens"], correctAnswer: 1, explanation: "Cannot occur simultaneously" },
  ],

  "y9-venn-diagrams": [
    { id: 1, question: "A∩B means:", options: ["A or B", "A and B", "Not A", "A only"], correctAnswer: 1, explanation: "Intersection: in both sets" },
    { id: 2, question: "A∪B means:", options: ["A and B only", "A or B or both", "Neither A nor B", "A minus B"], correctAnswer: 1, explanation: "Union: in either or both" },
    { id: 3, question: "A' means:", options: ["A squared", "Not A", "A only", "Both A and B"], correctAnswer: 1, explanation: "Complement: not in A" },
    { id: 4, question: "When filling Venn diagram, start with:", options: ["Outside", "Union", "Intersection", "Complement"], correctAnswer: 2, explanation: "Fill intersection first" },
    { id: 5, question: "n(A∪B) = n(A)+n(B)−n(A∩B) avoids:", options: ["Errors", "Double counting", "Undercounting", "Bias"], correctAnswer: 1, explanation: "Inclusion-exclusion principle" },
    { id: 6, question: "20 students: 12 play sport, 8 play music, 5 both. Only sport?", options: ["7", "12", "3", "5"], correctAnswer: 0, explanation: "12−5=7" },
    { id: 7, question: "From Q6: neither sport nor music?", options: ["0", "5", "3", "15"], correctAnswer: 1, explanation: "20−(7+5+3)=5" },
    { id: 8, question: "P(A∩B) from Venn = ?", options: ["Intersection count / total", "Union count / total", "A count / B count", "Total / intersection"], correctAnswer: 0, explanation: "P = count in intersection ÷ total" },
  ],

  "y9-two-way-tables": [
    { id: 1, question: "Two-way tables show:", options: ["One variable", "Two categorical variables", "Only totals", "Graphs"], correctAnswer: 1, explanation: "Two categories cross-classified" },
    { id: 2, question: "Cell value in a two-way table is:", options: ["Row total", "Joint frequency", "Grand total", "Percentage"], correctAnswer: 1, explanation: "Count for that combination" },
    { id: 3, question: "Row totals go:", options: ["Across bottom", "Down right side", "Top left", "Don't exist"], correctAnswer: 1, explanation: "Sum of each row on the right" },
    { id: 4, question: "Grand total is:", options: ["Largest value", "Sum of all row totals", "Average", "Mode"], correctAnswer: 1, explanation: "Total of everything" },
    { id: 5, question: "Joint probability from table:", options: ["Cell/grand total", "Row total/grand total", "Cell/row total", "Row total/column total"], correctAnswer: 0, explanation: "P = cell value ÷ grand total" },
    { id: 6, question: "Marginal probability uses:", options: ["Cell values", "Row or column totals", "Grand total only", "Nothing"], correctAnswer: 1, explanation: "Row/column total ÷ grand total" },
    { id: 7, question: "50 students: 20 boys play sport, 10 boys don't, 15 girls play sport. Girls who don't play sport?", options: ["5", "15", "10", "20"], correctAnswer: 0, explanation: "50−20−10−15=5" },
    { id: 8, question: "Two-way tables are useful for:", options: ["Finding relationships between categories", "Graphing lines", "Calculating mean", "Drawing circles"], correctAnswer: 0, explanation: "Explore relationships between categorical variables" },
  ],

  "y9-set-notation": [
    { id: 1, question: "∩ means:", options: ["Union", "Intersection", "Complement", "Element"], correctAnswer: 1, explanation: "∩ = AND" },
    { id: 2, question: "∪ means:", options: ["Union", "Intersection", "Complement", "Subset"], correctAnswer: 0, explanation: "∪ = OR" },
    { id: 3, question: "∈ means:", options: ["Is equal to", "Is a subset", "Is an element of", "Is not in"], correctAnswer: 2, explanation: "x ∈ A means x is in set A" },
    { id: 4, question: "n(A∪B) = n(A)+n(B)−?", options: ["n(A')", "n(B')", "n(A∩B)", "n(A∪B)"], correctAnswer: 2, explanation: "Subtract intersection to avoid double counting" },
    { id: 5, question: "If A={1,2,3} and B={2,3,4}, A∩B=?", options: ["{1,4}", "{2,3}", "{1,2,3,4}", "{}"], correctAnswer: 1, explanation: "Common elements: {2,3}" },
    { id: 6, question: "From Q5, A∪B=?", options: ["{2,3}", "{1,2,3,4}", "{1,4}", "{}"], correctAnswer: 1, explanation: "All elements: {1,2,3,4}" },
    { id: 7, question: "ξ represents:", options: ["Empty set", "Universal set", "Subset", "Intersection"], correctAnswer: 1, explanation: "ξ = universal set (everything)" },
    { id: 8, question: "P(A') = ?", options: ["P(A)", "1−P(A)", "P(A)−1", "0"], correctAnswer: 1, explanation: "Complement rule" },
  ],

  "y9-tree-diagrams": [
    { id: 1, question: "Multiply along branches for:", options: ["Sum", "Joint probability", "Conditional", "Marginal"], correctAnswer: 1, explanation: "AND = multiply along path" },
    { id: 2, question: "Add probabilities of different paths for:", options: ["AND", "OR", "NOT", "GIVEN"], correctAnswer: 1, explanation: "OR = add different paths" },
    { id: 3, question: "P(at least one) = ?", options: ["P(all)", "1−P(none)", "P(one only)", "P(both)"], correctAnswer: 1, explanation: "1−P(none)" },
    { id: 4, question: "At each node, branches sum to:", options: ["0", "0.5", "1", "Varies"], correctAnswer: 2, explanation: "All probabilities at a node sum to 1" },
    { id: 5, question: "2 coin flips. P(both heads)?", options: ["1/2", "1/4", "1/3", "3/4"], correctAnswer: 1, explanation: "1/2 × 1/2 = 1/4" },
    { id: 6, question: "Without replacement changes:", options: ["Nothing", "Sample space and probabilities", "Only outcomes", "Only probabilities"], correctAnswer: 1, explanation: "Both change" },
    { id: 7, question: "3 items, select 2 without replacement. Second pick denominator?", options: ["3", "2", "1", "4"], correctAnswer: 1, explanation: "One fewer item: denominator decreases" },
    { id: 8, question: "P(at least 1 head in 2 flips)?", options: ["1/2", "3/4", "1/4", "1"], correctAnswer: 1, explanation: "1−P(TT)=1−1/4=3/4" },
  ],

  "y9-relative-frequency": [
    { id: 1, question: "Relative frequency = ?", options: ["Total/occurrences", "Occurrences/total", "Occurrences×total", "Occurrences+total"], correctAnswer: 1, explanation: "RF = f/n" },
    { id: 2, question: "Die rolled 60 times, 12 sixes. RF of 6?", options: ["0.1", "0.2", "0.5", "12"], correctAnswer: 1, explanation: "12/60=0.2" },
    { id: 3, question: "More trials → RF approaches:", options: ["0", "1", "Theoretical probability", "Infinity"], correctAnswer: 2, explanation: "Law of large numbers" },
    { id: 4, question: "RF is also called:", options: ["Theoretical probability", "Experimental probability", "Conditional probability", "Joint probability"], correctAnswer: 1, explanation: "RF = experimental probability" },
    { id: 5, question: "100 tosses, 55 heads. RF of heads?", options: ["0.5", "0.55", "0.45", "55"], correctAnswer: 1, explanation: "55/100=0.55" },
    { id: 6, question: "Why might RF ≠ theoretical P?", options: ["Math error", "Random variation", "Wrong formula", "Always equal"], correctAnswer: 1, explanation: "Random variation, especially in small samples" },
    { id: 7, question: "Theoretical P(6 on die) = ?", options: ["0.2", "1/6", "0.5", "1/3"], correctAnswer: 1, explanation: "1 out of 6 equally likely outcomes" },
    { id: 8, question: "Long-run RF converges to theoretical P. This is:", options: ["Guess", "Law of large numbers", "Central limit theorem", "Coincidence"], correctAnswer: 1, explanation: "Law of large numbers" },
  ],

  "y9-data-sampling": [
    { id: 1, question: "Census surveys:", options: ["A sample", "Entire population", "Volunteers", "Experts"], correctAnswer: 1, explanation: "Everyone in the population" },
    { id: 2, question: "Random sampling means:", options: ["Choosing friends", "Equal chance for all", "Convenient selection", "Alphabetical"], correctAnswer: 1, explanation: "Every member has equal chance" },
    { id: 3, question: "Stratified sampling:", options: ["Random only", "Divides into groups first", "Convenience", "Volunteer"], correctAnswer: 1, explanation: "Divide into strata, sample proportionally" },
    { id: 4, question: "Bias occurs when:", options: ["Sample too large", "Sample not representative", "Sample random", "Population too small"], correctAnswer: 1, explanation: "Unfair representation" },
    { id: 5, question: "Larger samples are:", options: ["Less useful", "More representative", "More biased", "Not needed"], correctAnswer: 1, explanation: "Better represent the population" },
    { id: 6, question: "Convenience sampling has:", options: ["No bias", "High bias", "Medium bias", "Perfect accuracy"], correctAnswer: 1, explanation: "Surveying easy-to-reach people is biased" },
    { id: 7, question: "Systematic sampling: select every ___ member", options: ["1st", "kth", "last", "random"], correctAnswer: 1, explanation: "Every kth member after random start" },
    { id: 8, question: "A biased sample of 10,000 is:", options: ["Still biased", "Now unbiased", "Perfect", "Average"], correctAnswer: 0, explanation: "Size doesn't fix bias" },
  ],

  "y9-mean-median-mode": [
    { id: 1, question: "Mean of 4,6,8,10,12?", options: ["6", "8", "10", "12"], correctAnswer: 1, explanation: "40/5=8" },
    { id: 2, question: "Median of 3,7,2,9,5?", options: ["5", "7", "2", "5.2"], correctAnswer: 0, explanation: "Ordered: 2,3,5,7,9. Middle=5" },
    { id: 3, question: "Mode of 2,3,3,4,5,3,6?", options: ["2", "3", "4", "5"], correctAnswer: 1, explanation: "3 appears most (3 times)" },
    { id: 4, question: "Range of 5,12,3,18,7?", options: ["13", "15", "18", "3"], correctAnswer: 1, explanation: "18−3=15" },
    { id: 5, question: "Which is most affected by outliers?", options: ["Median", "Mode", "Mean", "Range"], correctAnswer: 2, explanation: "Mean is pulled by extreme values" },
    { id: 6, question: "Median of 2,4,6,8?", options: ["4", "5", "6", "10"], correctAnswer: 1, explanation: "(4+6)/2=5" },
    { id: 7, question: "Best measure for skewed data?", options: ["Mean", "Median", "Mode", "Range"], correctAnswer: 1, explanation: "Median not affected by skew" },
    { id: 8, question: "Bimodal data has:", options: ["No mode", "1 mode", "2 modes", "3 modes"], correctAnswer: 2, explanation: "Two modes" },
  ],

  "y9-stem-leaf-plots": [
    { id: 1, question: "In stem-and-leaf, stem is:", options: ["Last digit", "Leading digit(s)", "Decimal", "Frequency"], correctAnswer: 1, explanation: "Leading digits form the stem" },
    { id: 2, question: "Leaf is:", options: ["All digits", "Last digit", "First digit", "Middle digit"], correctAnswer: 1, explanation: "Last digit is the leaf" },
    { id: 3, question: "Leaves must be:", options: ["Random", "Ordered", "Coloured", "Doubled"], correctAnswer: 1, explanation: "Ordered from smallest to largest" },
    { id: 4, question: "A key is needed to:", options: ["Lock the data", "Show what values mean", "Hide data", "Colour code"], correctAnswer: 1, explanation: "e.g., 3|5 = 35" },
    { id: 5, question: "Back-to-back plots compare:", options: ["One dataset", "Two datasets", "Three datasets", "None"], correctAnswer: 1, explanation: "Two datasets sharing a stem" },
    { id: 6, question: "Stem|Leaf: 4|2 5 7 represents:", options: ["4257", "42, 45, 47", "4.2, 4.5, 4.7", "Depends on key"], correctAnswer: 3, explanation: "Need the key to interpret" },
    { id: 7, question: "Advantage of stem-and-leaf:", options: ["Shows individual values", "Only shows summary", "Hides data", "Always symmetric"], correctAnswer: 0, explanation: "Preserves all original values" },
    { id: 8, question: "Total data points = total number of:", options: ["Stems", "Leaves", "Branches", "Keys"], correctAnswer: 1, explanation: "Count all leaves" },
  ],

  "y9-grouped-data": [
    { id: 1, question: "Grouped data uses:", options: ["Individual values", "Class intervals", "Categories only", "No numbers"], correctAnswer: 1, explanation: "Data grouped into intervals" },
    { id: 2, question: "Modal class is:", options: ["Middle class", "Highest frequency class", "First class", "Smallest class"], correctAnswer: 1, explanation: "Class with most data" },
    { id: 3, question: "Midpoint of class 10-19?", options: ["10", "14.5", "19", "15"], correctAnswer: 1, explanation: "(10+19)/2=14.5" },
    { id: 4, question: "Mean from grouped data is:", options: ["Exact", "An estimate", "Always wrong", "Not possible"], correctAnswer: 1, explanation: "Uses midpoints so it's estimated" },
    { id: 5, question: "Estimated mean = Σ(f×midpoint)/Σf. If Σfm=450, Σf=30:", options: ["15", "480", "420", "13500"], correctAnswer: 0, explanation: "450/30=15" },
    { id: 6, question: "Histogram bars:", options: ["Have gaps", "Touch each other", "Are different colours", "Are always equal width"], correctAnswer: 1, explanation: "Continuous data: bars touch" },
    { id: 7, question: "Class intervals should:", options: ["Overlap", "Have gaps", "Not overlap or have gaps", "Be random"], correctAnswer: 2, explanation: "No overlaps or gaps" },
    { id: 8, question: "Cumulative frequency is:", options: ["Running total", "Individual frequency", "Midpoint", "Range"], correctAnswer: 0, explanation: "Running total of frequencies" },
  ],

  "y9-range-iqr": [
    { id: 1, question: "IQR = ?", options: ["Q1−Q3", "Q3−Q1", "Max−Min", "Mean−Median"], correctAnswer: 1, explanation: "IQR = Q3−Q1" },
    { id: 2, question: "IQR measures the spread of:", options: ["All data", "Middle 50%", "Top 25%", "Bottom 25%"], correctAnswer: 1, explanation: "Middle 50% of data" },
    { id: 3, question: "Q2 is the:", options: ["Mean", "Mode", "Median", "Range"], correctAnswer: 2, explanation: "Q2=median" },
    { id: 4, question: "Outlier if value > Q3 + ?", options: ["IQR", "1.5×IQR", "2×IQR", "3×IQR"], correctAnswer: 1, explanation: "Upper fence = Q3+1.5×IQR" },
    { id: 5, question: "Data: 2,4,6,8,10,12,14. Q1?", options: ["4", "6", "8", "2"], correctAnswer: 0, explanation: "Lower half: 2,4,6. Median=4" },
    { id: 6, question: "From Q5, Q3?", options: ["10", "12", "14", "8"], correctAnswer: 1, explanation: "Upper half: 10,12,14. Median=12" },
    { id: 7, question: "From Q5-6, IQR?", options: ["6", "8", "10", "12"], correctAnswer: 1, explanation: "12−4=8" },
    { id: 8, question: "Range vs IQR: IQR is:", options: ["Larger", "More affected by outliers", "More robust", "Always equal"], correctAnswer: 2, explanation: "IQR ignores extreme values" },
  ],

  "y9-box-plots": [
    { id: 1, question: "Box plot shows ___ summary", options: ["Three-number", "Five-number", "Seven-number", "Two-number"], correctAnswer: 1, explanation: "Min, Q1, Median, Q3, Max" },
    { id: 2, question: "The box spans from:", options: ["Min to Max", "Q1 to Q3", "Mean to Median", "0 to Max"], correctAnswer: 1, explanation: "Box: Q1 to Q3" },
    { id: 3, question: "The line inside the box is:", options: ["Mean", "Mode", "Median", "Range"], correctAnswer: 2, explanation: "Median line" },
    { id: 4, question: "Whiskers extend to:", options: ["Q1 and Q3", "Min and Max", "Mean ± SD", "0 and total"], correctAnswer: 1, explanation: "Whiskers go to min and max" },
    { id: 5, question: "IQR can be read as:", options: ["Whisker length", "Box width", "Total width", "Median value"], correctAnswer: 1, explanation: "IQR = width of the box" },
    { id: 6, question: "Longer right whisker means:", options: ["Left skew", "Right skew", "Symmetric", "No skew"], correctAnswer: 1, explanation: "Longer right whisker = right skew" },
    { id: 7, question: "Parallel box plots are used to:", options: ["Show one dataset", "Compare distributions", "Calculate mean", "Draw histograms"], correctAnswer: 1, explanation: "Compare multiple datasets" },
    { id: 8, question: "Outliers in box plots shown as:", options: ["Longer whiskers", "Individual dots beyond whiskers", "Colour changes", "Arrows"], correctAnswer: 1, explanation: "Dots beyond the fences" },
  ],

  // CH10: QUADRATICS
  "y9-solving-ax2-bx": [
    { id: 1, question: "Solve x²+3x=0", options: ["x=0,−3", "x=0,3", "x=3", "x=−3"], correctAnswer: 0, explanation: "x(x+3)=0, x=0 or x=−3" },
    { id: 2, question: "Null factor law: if AB=0 then:", options: ["A=B", "A=0 or B=0", "A+B=0", "AB=1"], correctAnswer: 1, explanation: "At least one factor is zero" },
    { id: 3, question: "Solve 2x²−6x=0", options: ["x=0,3", "x=0,−3", "x=3", "x=6"], correctAnswer: 0, explanation: "2x(x−3)=0, x=0 or x=3" },
    { id: 4, question: "Why not divide by x?", options: ["It's wrong", "You lose x=0 solution", "It's too hard", "x could be negative"], correctAnswer: 1, explanation: "Dividing by x loses x=0" },
    { id: 5, question: "Solve 5x²=10x", options: ["x=2", "x=0,2", "x=0,5", "x=0,10"], correctAnswer: 1, explanation: "5x²−10x=0, 5x(x−2)=0" },
    { id: 6, question: "ax²+bx=0 always has solution:", options: ["x=a", "x=b", "x=0", "x=1"], correctAnswer: 2, explanation: "x=0 is always a solution" },
    { id: 7, question: "Solve −3x²+12x=0", options: ["x=0,4", "x=0,−4", "x=4", "x=0,3"], correctAnswer: 0, explanation: "−3x(x−4)=0, x=0 or x=4" },
    { id: 8, question: "How many solutions does ax²+bx=0 have?", options: ["0", "1", "2", "Varies"], correctAnswer: 2, explanation: "Always 2: x=0 and x=−b/a" },
  ],

  "y9-solving-ax2-bx-c": [
    { id: 1, question: "Solve x²−5x+6=0", options: ["x=2,3", "x=−2,−3", "x=1,6", "x=−1,−6"], correctAnswer: 0, explanation: "(x−2)(x−3)=0" },
    { id: 2, question: "Solve x²+4x−5=0", options: ["x=1,−5", "x=−1,5", "x=5,−1", "Both A and C"], correctAnswer: 3, explanation: "(x+5)(x−1)=0, x=−5 or x=1" },
    { id: 3, question: "Solve x²−9=0", options: ["x=3", "x=−3", "x=±3", "x=9"], correctAnswer: 2, explanation: "(x+3)(x−3)=0, x=±3" },
    { id: 4, question: "Before factorising, must equal:", options: ["1", "x", "0", "c"], correctAnswer: 2, explanation: "Rearrange to = 0 first" },
    { id: 5, question: "Solve x²−x=12", options: ["x=4,−3", "x=−4,3", "x=4,3", "x=12,1"], correctAnswer: 0, explanation: "x²−x−12=0, (x−4)(x+3)=0" },
    { id: 6, question: "Discriminant b²−4ac determines:", options: ["Shape", "Number of solutions", "y-intercept", "Gradient"], correctAnswer: 1, explanation: "Positive=2, zero=1, negative=0 solutions" },
    { id: 7, question: "Solve 2x²−8=0", options: ["x=±2", "x=4", "x=±4", "x=2"], correctAnswer: 0, explanation: "x²=4, x=±2" },
    { id: 8, question: "Solve (x−1)(x+4)=0", options: ["x=1,−4", "x=−1,4", "x=1,4", "x=−1,−4"], correctAnswer: 0, explanation: "x=1 or x=−4" },
  ],

  "y9-quadratic-problems": [
    { id: 1, question: "Product of two consecutive numbers is 72. They could be:", options: ["8,9", "7,8", "6,12", "36,2"], correctAnswer: 0, explanation: "n(n+1)=72, 8×9=72" },
    { id: 2, question: "Rectangle: length x+3, width x. Area=40. Find x.", options: ["5", "8", "4", "10"], correctAnswer: 0, explanation: "x(x+3)=40, x²+3x−40=0, (x+8)(x−5)=0, x=5" },
    { id: 3, question: "Sum of squares of 2 consecutive integers is 61. Smaller?", options: ["5", "6", "4", "7"], correctAnswer: 0, explanation: "n²+(n+1)²=61, 25+36=61" },
    { id: 4, question: "Reject negative solutions when:", options: ["Always", "Context requires positive (length, count)", "Never", "Sometimes"], correctAnswer: 1, explanation: "Physical quantities must be positive" },
    { id: 5, question: "Garden 3m longer than wide, area=88m². Width?", options: ["8m", "11m", "5m", "10m"], correctAnswer: 0, explanation: "w(w+3)=88, w=8" },
    { id: 6, question: "Square side increased by 2, area increases by 24. Original side?", options: ["5", "6", "4", "7"], correctAnswer: 0, explanation: "(s+2)²−s²=24, 4s+4=24, s=5" },
    { id: 7, question: "Setting up a quadratic: define ___ first", options: ["The answer", "The variable", "The coefficient", "The constant"], correctAnswer: 1, explanation: "Define what x represents" },
    { id: 8, question: "Always ___ your answer in the original problem", options: ["Round", "Check", "Ignore", "Double"], correctAnswer: 1, explanation: "Verify it makes sense" },
  ],

  "y9-the-parabola": [
    { id: 1, question: "Vertex of y=x²−4x+3?", options: ["(2,−1)", "(1,0)", "(3,0)", "(0,3)"], correctAnswer: 0, explanation: "x=2, y=4−8+3=−1" },
    { id: 2, question: "Axis of symmetry of y=x²−6x+5?", options: ["x=3", "x=−3", "x=5", "x=1"], correctAnswer: 0, explanation: "x=−b/2a=6/2=3" },
    { id: 3, question: "y-intercept of y=x²+3x−10?", options: ["3", "−10", "10", "0"], correctAnswer: 1, explanation: "When x=0: y=−10" },
    { id: 4, question: "x-intercepts of y=x²−4?", options: ["x=±2", "x=4", "x=±4", "x=2 only"], correctAnswer: 0, explanation: "x²=4, x=±2" },
    { id: 5, question: "a>0 means parabola opens:", options: ["Down", "Up", "Left", "Right"], correctAnswer: 1, explanation: "Positive a → opens up" },
    { id: 6, question: "a<0 means the vertex is a:", options: ["Minimum", "Maximum", "Neither", "Both"], correctAnswer: 1, explanation: "Opens down → maximum" },
    { id: 7, question: "How many x-intercepts can a parabola have?", options: ["Always 2", "0, 1, or 2", "Always 1", "0 or 2"], correctAnswer: 1, explanation: "Depends on discriminant" },
    { id: 8, question: "Vertex form: y=a(x−h)²+k. Vertex is:", options: ["(a,k)", "(h,k)", "(−h,k)", "(h,−k)"], correctAnswer: 1, explanation: "(h,k)" },
  ],

  "y9-sketching-y-ax2": [
    { id: 1, question: "y=x² vertex?", options: ["(0,0)", "(1,1)", "(0,1)", "(1,0)"], correctAnswer: 0, explanation: "Basic parabola through origin" },
    { id: 2, question: "y=2x² vs y=x² is:", options: ["Wider", "Narrower", "Same", "Reflected"], correctAnswer: 1, explanation: "|a|>1 → narrower" },
    { id: 3, question: "y=½x² vs y=x² is:", options: ["Narrower", "Wider", "Same", "Reflected"], correctAnswer: 1, explanation: "|a|<1 → wider" },
    { id: 4, question: "y=−x² opens:", options: ["Up", "Down", "Left", "Right"], correctAnswer: 1, explanation: "Negative a → down" },
    { id: 5, question: "y=3x² is ___ than y=x²", options: ["Wider", "Narrower/steeper", "Same", "Lower"], correctAnswer: 1, explanation: "|3|>1: narrower" },
    { id: 6, question: "All y=ax² pass through:", options: ["(1,a)", "(0,0)", "(a,0)", "(0,a)"], correctAnswer: 1, explanation: "All pass through origin" },
    { id: 7, question: "y=−3x² has vertex at:", options: ["(0,−3)", "(−3,0)", "(0,0)", "(3,0)"], correctAnswer: 2, explanation: "Still at origin" },
    { id: 8, question: "Points on y=x²: (1,1), (2,4), (3,?)", options: ["6", "9", "12", "27"], correctAnswer: 1, explanation: "3²=9" },
  ],

  "y9-translations": [
    { id: 1, question: "y=x²+3 shifts the parabola:", options: ["Left 3", "Right 3", "Up 3", "Down 3"], correctAnswer: 2, explanation: "+3 outside → up 3" },
    { id: 2, question: "y=(x−2)² shifts:", options: ["Left 2", "Right 2", "Up 2", "Down 2"], correctAnswer: 1, explanation: "(x−2) → right 2" },
    { id: 3, question: "y=(x+1)²−4 vertex?", options: ["(1,−4)", "(−1,−4)", "(−1,4)", "(1,4)"], correctAnswer: 1, explanation: "h=−1, k=−4" },
    { id: 4, question: "Translate y=x² right 5, down 3:", options: ["y=(x−5)²−3", "y=(x+5)²−3", "y=(x−5)²+3", "y=(x−3)²−5"], correctAnswer: 0, explanation: "Right 5→(x−5), down 3→−3" },
    { id: 5, question: "y=x²−7 vertex?", options: ["(0,−7)", "(−7,0)", "(0,7)", "(7,0)"], correctAnswer: 0, explanation: "Only vertical shift: (0,−7)" },
    { id: 6, question: "y=(x+3)² vertex?", options: ["(3,0)", "(−3,0)", "(0,3)", "(0,−3)"], correctAnswer: 1, explanation: "(x−(−3))² → h=−3" },
    { id: 7, question: "y=2(x−1)²+5. Vertex and direction?", options: ["(1,5) up", "(−1,5) up", "(1,−5) down", "(−1,−5) down"], correctAnswer: 0, explanation: "Vertex (1,5), a=2>0 → up" },
    { id: 8, question: "y=−(x+2)²+1 vertex and direction?", options: ["(−2,1) down", "(2,1) up", "(−2,−1) up", "(2,−1) down"], correctAnswer: 0, explanation: "Vertex (−2,1), a=−1 → down" },
  ],

  "y9-intercept-form": [
    { id: 1, question: "y=a(x−p)(x−q). x-intercepts at:", options: ["(a,0)", "(p,0) and (q,0)", "(0,p) and (0,q)", "(pq,0)"], correctAnswer: 1, explanation: "x=p and x=q" },
    { id: 2, question: "y=(x−1)(x−5). Axis of symmetry?", options: ["x=3", "x=2", "x=4", "x=6"], correctAnswer: 0, explanation: "x=(1+5)/2=3" },
    { id: 3, question: "y=(x−1)(x−5). Vertex y-value?", options: ["−4", "−3", "5", "0"], correctAnswer: 0, explanation: "y=(3−1)(3−5)=2×(−2)=−4" },
    { id: 4, question: "y=2(x+1)(x−3). x-intercepts?", options: ["(−1,0),(3,0)", "(1,0),(−3,0)", "(2,0),(−3,0)", "(−1,0),(−3,0)"], correctAnswer: 0, explanation: "x=−1, x=3" },
    { id: 5, question: "Convert y=(x−2)(x−6) to standard form:", options: ["y=x²−8x+12", "y=x²+8x+12", "y=x²−8x−12", "y=x²−4x+12"], correctAnswer: 0, explanation: "x²−6x−2x+12=x²−8x+12" },
    { id: 6, question: "If x-intercepts are 0 and 4:", options: ["y=x(x−4)", "y=(x+4)x", "y=x(x+4)", "y=4x"], correctAnswer: 0, explanation: "y=a(x−0)(x−4)=ax(x−4)" },
    { id: 7, question: "Axis of symmetry is ___ between x-intercepts", options: ["At one", "Halfway", "At both", "Nowhere"], correctAnswer: 1, explanation: "Midpoint of intercepts" },
    { id: 8, question: "y=−(x+2)(x−4). Opens:", options: ["Up", "Down", "Left", "Right"], correctAnswer: 1, explanation: "a=−1 → opens down" },
  ],

  // CH11: ALGORITHMIC THINKING
  "y9-intro-algorithms": [
    { id: 1, question: "An algorithm is:", options: ["A random process", "Step-by-step instructions", "A guess", "A type of graph"], correctAnswer: 1, explanation: "Finite, clear steps" },
    { id: 2, question: "Flowchart diamond shape = ?", options: ["Start/End", "Process", "Decision", "Input/Output"], correctAnswer: 2, explanation: "Diamond = yes/no decision" },
    { id: 3, question: "Pseudocode is:", options: ["Real code", "Text description of algorithm", "A diagram", "A calculation"], correctAnswer: 1, explanation: "Informal text describing steps" },
    { id: 4, question: "An algorithm must be:", options: ["Infinite", "Ambiguous", "Finite and clear", "Random"], correctAnswer: 2, explanation: "Must terminate and be unambiguous" },
    { id: 5, question: "Flowchart oval = ?", options: ["Decision", "Process", "Start/End", "Data"], correctAnswer: 2, explanation: "Oval = start or end" },
    { id: 6, question: "Flowchart rectangle = ?", options: ["Decision", "Process/action", "Start/End", "Data"], correctAnswer: 1, explanation: "Rectangle = process step" },
    { id: 7, question: "Tracing an algorithm means:", options: ["Writing code", "Following steps with values", "Drawing flowcharts", "Debugging"], correctAnswer: 1, explanation: "Execute step by step, tracking values" },
    { id: 8, question: "Algorithm example:", options: ["Rolling a die", "A recipe", "Random walk", "Sleeping"], correctAnswer: 1, explanation: "Recipe = step-by-step instructions" },
  ],

  "y9-algorithms-number-patterns": [
    { id: 1, question: "Arithmetic sequence has constant:", options: ["Ratio", "Difference", "Product", "Sum"], correctAnswer: 1, explanation: "Add same number each time" },
    { id: 2, question: "2,5,8,11,14… Common difference?", options: ["2", "3", "5", "7"], correctAnswer: 1, explanation: "5−2=3" },
    { id: 3, question: "Geometric sequence has constant:", options: ["Difference", "Ratio", "Sum", "Mean"], correctAnswer: 1, explanation: "Multiply by same number" },
    { id: 4, question: "3,6,12,24… Common ratio?", options: ["2", "3", "6", "4"], correctAnswer: 0, explanation: "6/3=2" },
    { id: 5, question: "Fibonacci: 1,1,2,3,5,8,… Next?", options: ["11", "13", "10", "16"], correctAnswer: 1, explanation: "5+8=13" },
    { id: 6, question: "Algorithm: 'Start at 5, add 3'. 4th term?", options: ["14", "17", "11", "20"], correctAnswer: 0, explanation: "5,8,11,14" },
    { id: 7, question: "nth term of 2,4,6,8…?", options: ["n+2", "2n", "n²", "2ⁿ"], correctAnswer: 1, explanation: "2n gives 2,4,6,8…" },
    { id: 8, question: "Using algorithm to find sum 1+2+…+100:", options: ["5050", "100", "10000", "1000"], correctAnswer: 0, explanation: "n(n+1)/2=100×101/2=5050" },
  ],

  "y9-optimisation": [
    { id: 1, question: "Optimisation means finding:", options: ["Any value", "Best possible value", "Random value", "Average value"], correctAnswer: 1, explanation: "Minimum or maximum" },
    { id: 2, question: "Rectangle perimeter 20. Maximum area when:", options: ["5×5", "1×9", "2×8", "3×7"], correctAnswer: 0, explanation: "Square gives max area: 5×5=25" },
    { id: 3, question: "Minimising cost means:", options: ["Finding cheapest option", "Finding most expensive", "Averaging costs", "Ignoring costs"], correctAnswer: 0, explanation: "Lowest possible cost" },
    { id: 4, question: "Systematic testing means:", options: ["Random guessing", "Trying all options methodically", "One attempt", "Skipping options"], correctAnswer: 1, explanation: "Check all possibilities in order" },
    { id: 5, question: "Best-so-far approach:", options: ["Keep first answer", "Update when better found", "Always keep last", "Random selection"], correctAnswer: 1, explanation: "Track best and update" },
    { id: 6, question: "Perimeter 24. Possible rectangle: 1×11, 2×10, 3×9,... Max area?", options: ["6×6=36", "5×7=35", "4×8=32", "3×9=27"], correctAnswer: 0, explanation: "Square: 6×6=36" },
    { id: 7, question: "Shortest path problems involve:", options: ["Maximising", "Minimising distance", "Random walks", "No distance"], correctAnswer: 1, explanation: "Find minimum distance" },
    { id: 8, question: "Optimisation needs:", options: ["Constraints and objective", "Only constraints", "Only objective", "Neither"], correctAnswer: 0, explanation: "What to optimise and limitations" },
  ],

  "y9-sorting-algorithms": [
    { id: 1, question: "Bubble sort compares:", options: ["First and last", "Adjacent pairs", "Random pairs", "All at once"], correctAnswer: 1, explanation: "Compare neighbours, swap if needed" },
    { id: 2, question: "Selection sort finds:", options: ["Random element", "Minimum of unsorted", "Maximum of sorted", "Middle element"], correctAnswer: 1, explanation: "Find minimum, place in position" },
    { id: 3, question: "Bubble sort is complete when:", options: ["First pass done", "No swaps in a pass", "Half sorted", "10 passes done"], correctAnswer: 1, explanation: "No swaps = fully sorted" },
    { id: 4, question: "Sort 5,3,1: bubble sort first pass?", options: ["1,3,5", "3,1,5", "3,5,1", "5,3,1"], correctAnswer: 1, explanation: "Compare 5,3→swap=3,5,1. Compare 5,1→swap=3,1,5" },
    { id: 5, question: "Selection sort on 4,2,7,1: first step?", options: ["Find min (1), place first", "Compare 4,2", "Swap 4,7", "Nothing"], correctAnswer: 0, explanation: "Find minimum=1, swap to position 1" },
    { id: 6, question: "Efficiency is measured by:", options: ["Speed of internet", "Number of comparisons", "Size of numbers", "Colour of elements"], correctAnswer: 1, explanation: "Count comparisons and swaps" },
    { id: 7, question: "For small datasets:", options: ["Only bubble sort works", "Both work fine", "Neither works", "Only selection sort"], correctAnswer: 1, explanation: "Both efficient enough for small n" },
    { id: 8, question: "Sorting is important for:", options: ["Making data searchable", "Decoration", "Nothing", "Only computers"], correctAnswer: 0, explanation: "Organised data is easier to search/analyse" },
  ],

  "y9-simulations": [
    { id: 1, question: "Simulation uses:", options: ["Theory only", "Random methods to model events", "Exact calculation", "Guessing"], correctAnswer: 1, explanation: "Random methods model real situations" },
    { id: 2, question: "More simulation runs give:", options: ["Worse estimates", "Better estimates", "Same estimates", "No estimates"], correctAnswer: 1, explanation: "More trials → more reliable" },
    { id: 3, question: "Coin flip simulates P=?", options: ["0.25", "0.5", "0.75", "1"], correctAnswer: 1, explanation: "Fair coin: P=0.5" },
    { id: 4, question: "Die simulates P=?", options: ["1/2", "1/4", "1/6", "1/3"], correctAnswer: 2, explanation: "Each face: P=1/6" },
    { id: 5, question: "Random number 1-10. P(≤3) simulates:", options: ["0.1", "0.3", "0.5", "0.7"], correctAnswer: 1, explanation: "3/10=0.3" },
    { id: 6, question: "Simulations give:", options: ["Exact answers", "Estimates", "Wrong answers", "No answers"], correctAnswer: 1, explanation: "Approximate results" },
    { id: 7, question: "When to use simulation:", options: ["Always", "When theory is easy", "When theory is too complex", "Never"], correctAnswer: 2, explanation: "When exact calculation is impractical" },
    { id: 8, question: "Each simulation run may give:", options: ["Same result", "Different results", "No result", "Exact probability"], correctAnswer: 1, explanation: "Random → varying results" },
  ],

  "y9-sampling-algorithms": [
    { id: 1, question: "Random sampling algorithm uses:", options: ["Gut feeling", "Random number generator", "Alphabetical list", "Nearest people"], correctAnswer: 1, explanation: "RNG ensures equal chance" },
    { id: 2, question: "Systematic sampling: random start, then every:", options: ["1st", "kth", "last", "random"], correctAnswer: 1, explanation: "Every kth element" },
    { id: 3, question: "Stratified: 60% girls, 40% boys. Sample 50. Boys?", options: ["30", "20", "25", "40"], correctAnswer: 1, explanation: "40% of 50=20" },
    { id: 4, question: "Best method for subgroup representation:", options: ["Random", "Systematic", "Stratified", "Convenience"], correctAnswer: 2, explanation: "Stratified ensures all groups represented" },
    { id: 5, question: "Least biased method:", options: ["Convenience", "Voluntary", "Random", "Purposeful"], correctAnswer: 2, explanation: "Random = equal chance = least biased" },
    { id: 6, question: "Systematic sampling is easy because:", options: ["No randomness needed", "Select every kth after random start", "Everyone volunteers", "No planning"], correctAnswer: 1, explanation: "Simple rule: every kth member" },
    { id: 7, question: "Evaluate: survey at shopping centre on weekday morning", options: ["Unbiased", "Biased (excludes workers/students)", "Perfect", "Stratified"], correctAnswer: 1, explanation: "Excludes people at work/school" },
    { id: 8, question: "Sample size affects:", options: ["Nothing", "Reliability", "Bias type", "Population size"], correctAnswer: 1, explanation: "Larger sample → more reliable" },
  ],
};
