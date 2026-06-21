/**
 * Year 9 Category-Level Mastery Quiz Questions (12-15 questions per chapter)
 * Aligned to 11-chapter Essential Mathematics structure.
 */

import { CategoryQuizQuestion } from "./categoryQuizQuestions";

export const year9CategoryQuizData: Record<string, CategoryQuizQuestion[]> = {
  // ═══ CH1: NUMBER & FINANCIAL MATHS ═══
  "y9-ch1-number-finance": [
    { id: 1, question: "−8 + 5 − (−3) = ?", options: ["0", "−6", "−10", "6"], correctAnswer: 0, explanation: "−8+5+3=0" },
    { id: 2, question: "Round 0.04567 to 3 s.f.", options: ["0.0457", "0.046", "0.0456", "0.04567"], correctAnswer: 0, explanation: "4,5,6→next is 7≥5: 0.0457" },
    { id: 3, question: "Simplify 24:36:48", options: ["2:3:4", "4:6:8", "1:2:3", "6:9:12"], correctAnswer: 0, explanation: "HCF=12: 2:3:4" },
    { id: 4, question: "25% of $360?", options: ["$90", "$72", "$100", "$250"], correctAnswer: 0, explanation: "0.25×360=$90" },
    { id: 5, question: "Increase $450 by 20%?", options: ["$540", "$500", "$470", "$360"], correctAnswer: 0, explanation: "450×1.2=$540" },
    { id: 6, question: "Cost $40, sell $52. Profit %?", options: ["12%", "30%", "23%", "52%"], correctAnswer: 1, explanation: "12/40×100=30%" },
    { id: 7, question: "Annual salary $65,000. Fortnightly gross?", options: ["$2,500", "$5,416.67", "$1,250", "$5,000"], correctAnswer: 0, explanation: "65000÷26=$2,500" },
    { id: 8, question: "Simple interest: $8,000 at 5% for 3 years?", options: ["$1,200", "$400", "$2,400", "$600"], correctAnswer: 0, explanation: "8000×0.05×3=$1,200" },
    { id: 9, question: "Compound interest: $10,000 at 6% for 2 years?", options: ["$11,200", "$11,236", "$11,260", "$12,000"], correctAnswer: 1, explanation: "10000×1.06²=$11,236" },
    { id: 10, question: "Car $30,000 depreciates 15% p.a. Value after 2 years?", options: ["$21,675", "$25,500", "$24,000", "$20,000"], correctAnswer: 0, explanation: "30000×0.85²=$21,675" },
    { id: 11, question: "Tax-free threshold is $18,200. Tax on $28,200 at 19%?", options: ["$1,900", "$5,358", "$1,000", "$3,600"], correctAnswer: 0, explanation: "19%×$10,000=$1,900" },
    { id: 12, question: "3/4 + 2/3 = ?", options: ["5/7", "17/12", "5/12", "1⁵⁄₁₂"], correctAnswer: 3, explanation: "9/12+8/12=17/12=1⁵⁄₁₂" },
    { id: 13, question: "$800 decreased by 12.5%?", options: ["$700", "$100", "$687.50", "$900"], correctAnswer: 0, explanation: "800×0.875=$700" },
    { id: 14, question: "Best buy: 500g for $4.50 or 750g for $6.30?", options: ["500g ($9/kg)", "750g ($8.40/kg)", "Same", "Can't tell"], correctAnswer: 1, explanation: "750g is $8.40/kg vs $9/kg" },
    { id: 15, question: "After 20% increase then 20% decrease, original $100 becomes:", options: ["$100", "$96", "$104", "$80"], correctAnswer: 1, explanation: "100×1.2×0.8=$96" },
  ],

  // ═══ CH2: EXPRESSIONS & LINEAR EQUATIONS ═══
  "y9-ch2-expressions-equations": [
    { id: 1, question: "Simplify 5a−3b+2a−b", options: ["7a−4b", "3a−4b", "7a−2b", "4a−4b"], correctAnswer: 0, explanation: "7a−4b" },
    { id: 2, question: "Expand −3(2x−5)", options: ["−6x+15", "−6x−15", "6x+15", "−6x−5"], correctAnswer: 0, explanation: "−6x+15" },
    { id: 3, question: "Solve 3x+7=22", options: ["x=5", "x=7", "x=3", "x=15"], correctAnswer: 0, explanation: "3x=15, x=5" },
    { id: 4, question: "(x+3)(x−5) = ?", options: ["x²−2x−15", "x²+2x−15", "x²−8x−15", "x²−15"], correctAnswer: 0, explanation: "x²−5x+3x−15=x²−2x−15" },
    { id: 5, question: "Solve 5(x−2)=3(x+4)−1", options: ["x=4", "x=26/7", "x=2", "x=3"], correctAnswer: 1, explanation: "10x−15=3x+11, 7x=26" },
    { id: 6, question: "Solve 4(3x−2)=16", options: ["x=2", "x=3", "x=4", "x=1"], correctAnswer: 0, explanation: "12x−8=16, 12x=24, x=2" },
    { id: 7, question: "Evaluate 3a²−2b when a=−2, b=5", options: ["2", "22", "−2", "7"], correctAnswer: 0, explanation: "3(4)−10=12−10=2" },
    { id: 8, question: "(2a−3)² = ?", options: ["4a²−9", "4a²−12a+9", "4a²−6a+9", "2a²−6a+9"], correctAnswer: 1, explanation: "4a²−12a+9" },
    { id: 9, question: "Solve x+1=x+3", options: ["x=2", "x=1", "No solution", "All values"], correctAnswer: 2, explanation: "1=3 is false" },
    { id: 10, question: "Solve 2(x+3)=14", options: ["x=4", "x=5.5", "x=7", "x=8"], correctAnswer: 0, explanation: "2x+6=14, x=4" },
    { id: 11, question: "3x×5x = ?", options: ["15x", "15x²", "8x²", "8x"], correctAnswer: 1, explanation: "15x²" },
    { id: 12, question: "Consecutive numbers sum to 42: 3n+3=42. n=?", options: ["13", "14", "12", "15"], correctAnswer: 0, explanation: "3n=39, n=13" },
  ],

  // ═══ CH3: PYTHAGORAS & TRIGONOMETRY ═══
  "y9-ch3-pythagoras-trig": [
    { id: 1, question: "Legs 5,12. Hypotenuse?", options: ["13", "17", "7", "60"], correctAnswer: 0, explanation: "√(25+144)=13" },
    { id: 2, question: "sin(30°)=?", options: ["0.5", "√3/2", "1", "0"], correctAnswer: 0, explanation: "sin(30°)=0.5" },
    { id: 3, question: "tan(45°)=?", options: ["0", "0.5", "1", "√2"], correctAnswer: 2, explanation: "tan(45°)=1" },
    { id: 4, question: "Due south bearing?", options: ["090°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "180°" },
    { id: 5, question: "Room 3×4×12m. Space diagonal?", options: ["13m", "19m", "17m", "√169"], correctAnswer: 0, explanation: "√(9+16+144)=13" },
    { id: 6, question: "hyp=20, angle=30°. Opposite?", options: ["10", "10√3", "20√3", "5"], correctAnswer: 0, explanation: "sin(30°)=opp/20, opp=10" },
    { id: 7, question: "opp=4, hyp=8. Angle?", options: ["30°", "45°", "60°", "90°"], correctAnswer: 0, explanation: "sin⁻¹(0.5)=30°" },
    { id: 8, question: "Ship sails 6km east, 8km north. Distance from start?", options: ["14km", "10km", "12km", "8km"], correctAnswer: 1, explanation: "√(36+64)=10" },
    { id: 9, question: "Back bearing of 060°?", options: ["120°", "240°", "300°", "060°"], correctAnswer: 1, explanation: "060°+180°=240°" },
    { id: 10, question: "Tree shadow 15m, elevation 53°. Height?", options: ["15tan53°", "15sin53°", "15cos53°", "15/tan53°"], correctAnswer: 0, explanation: "height=15tan53°" },
    { id: 11, question: "cos(60°)=?", options: ["√3/2", "0.5", "1", "0"], correctAnswer: 1, explanation: "cos(60°)=0.5" },
    { id: 12, question: "Angle of depression = angle of elevation because:", options: ["Convention", "Alternate angles", "Same triangle", "Coincidence"], correctAnswer: 1, explanation: "Alternate angles between parallel lines" },
  ],

  // ═══ CH4: LINEAR RELATIONSHIPS ═══
  "y9-ch4-linear-relationships": [
    { id: 1, question: "Gradient of y=−3x+7?", options: ["7", "−3", "3", "−7"], correctAnswer: 1, explanation: "m=−3" },
    { id: 2, question: "y-intercept of y=4x−5?", options: ["4", "−5", "5", "−4"], correctAnswer: 1, explanation: "c=−5" },
    { id: 3, question: "Gradient through (1,3) and (4,9)?", options: ["1", "2", "3", "6"], correctAnswer: 1, explanation: "6/3=2" },
    { id: 4, question: "Parallel lines have:", options: ["Same c", "Same m", "m₁×m₂=−1", "Same x-int"], correctAnswer: 1, explanation: "Equal gradients" },
    { id: 5, question: "Perpendicular to m=3?", options: ["3", "−3", "1/3", "−1/3"], correctAnswer: 3, explanation: "3×(−1/3)=−1" },
    { id: 6, question: "y=kx represents:", options: ["Inverse proportion", "Direct proportion", "Quadratic", "Exponential"], correctAnswer: 1, explanation: "Through origin" },
    { id: 7, question: "Midpoint of (2,4) and (6,8)?", options: ["(4,6)", "(8,12)", "(4,4)", "(3,2)"], correctAnswer: 0, explanation: "((2+6)/2,(4+8)/2)" },
    { id: 8, question: "Distance (0,0) to (3,4)?", options: ["5", "7", "6", "3.5"], correctAnswer: 0, explanation: "√(9+16)=5" },
    { id: 9, question: "y=2x and y=x+3 intersect at:", options: ["(3,6)", "(1,2)", "(6,12)", "(−3,−6)"], correctAnswer: 0, explanation: "2x=x+3, x=3" },
    { id: 10, question: "Cost=$50+$20h. The 50 is:", options: ["Hourly rate", "Fixed cost", "Total", "Gradient"], correctAnswer: 1, explanation: "y-intercept=fixed cost" },
    { id: 11, question: "V=200−5t. Tank empty at:", options: ["t=40", "t=195", "t=205", "t=100"], correctAnswer: 0, explanation: "200/5=40" },
    { id: 12, question: "Gradient 3, through (2,7). Equation?", options: ["y=3x+1", "y=3x−1", "y=3x+13", "y=3x+7"], correctAnswer: 0, explanation: "7=6+c, c=1" },
  ],

  // ═══ CH5: MEASUREMENT ═══
  "y9-ch5-measurement": [
    { id: 1, question: "Area of circle r=7?", options: ["14π", "49π", "7π", "196π"], correctAnswer: 1, explanation: "πr²=49π" },
    { id: 2, question: "Volume of cylinder r=3, h=10?", options: ["30π", "90π", "60π", "9π"], correctAnswer: 1, explanation: "πr²h=90π" },
    { id: 3, question: "SA of cube side 5?", options: ["125", "150", "100", "75"], correctAnswer: 1, explanation: "6×25=150" },
    { id: 4, question: "Area of trapezium a=5, b=9, h=6?", options: ["42", "84", "54", "45"], correctAnswer: 0, explanation: "½(14)(6)=42" },
    { id: 5, question: "1m³ = ? litres", options: ["10", "100", "1000", "10000"], correctAnswer: 2, explanation: "1m³=1000L" },
    { id: 6, question: "Absolute error measuring to nearest cm?", options: ["1cm", "0.5cm", "0.1cm", "2cm"], correctAnswer: 1, explanation: "Half the unit" },
    { id: 7, question: "Open cylinder (no top) r=3, h=5. SA?", options: ["9π+30π", "18π+30π", "30π", "39π"], correctAnswer: 0, explanation: "πr²+2πrh=39π" },
    { id: 8, question: "Composite: rectangle 10×8 minus circle d=4. Area?", options: ["80−4π", "80−16π", "80−2π", "80−8π"], correctAnswer: 0, explanation: "80−π(4)=80−4π" },
    { id: 9, question: "Container 20×30×50cm. Litres?", options: ["3L", "30L", "300L", "3000L"], correctAnswer: 1, explanation: "30000÷1000=30L" },
    { id: 10, question: "Semi-circle perimeter (d=10)?", options: ["5π+10", "10π", "5π", "10π+10"], correctAnswer: 0, explanation: "Half circumference+diameter" },
    { id: 11, question: "SA of rectangular prism 2×3×5?", options: ["30", "62", "31", "60"], correctAnswer: 1, explanation: "2(6+10+15)=62" },
    { id: 12, question: "Triangular prism: base area 12, length 8. Volume?", options: ["20", "96", "48", "192"], correctAnswer: 1, explanation: "12×8=96" },
  ],

  // ═══ CH6: INDICES & SURDS ═══
  "y9-ch6-indices-surds": [
    { id: 1, question: "(x³)² × x⁴ ÷ x⁵ = ?", options: ["x⁵", "x⁴", "x⁹", "x³"], correctAnswer: 0, explanation: "x⁶×x⁴÷x⁵=x⁵" },
    { id: 2, question: "Simplify √128", options: ["8√2", "4√8", "2√32", "16√2"], correctAnswer: 0, explanation: "√(64×2)=8√2" },
    { id: 3, question: "0.000045 in scientific notation?", options: ["4.5×10⁻⁵", "45×10⁻⁶", "4.5×10⁵", "0.45×10⁻⁴"], correctAnswer: 0, explanation: "4.5×10⁻⁵" },
    { id: 4, question: "2⁻³ × 2⁷ = ?", options: ["2⁴", "2¹⁰", "2⁻²¹", "2⁻⁴"], correctAnswer: 0, explanation: "2⁴=16" },
    { id: 5, question: "27^(2/3) = ?", options: ["9", "18", "3", "81"], correctAnswer: 0, explanation: "(³√27)²=9" },
    { id: 6, question: "√18 + √50 = ?", options: ["8√2", "√68", "3√2+5√2", "Both A and C"], correctAnswer: 3, explanation: "3√2+5√2=8√2" },
    { id: 7, question: "5⁰ + 3⁻¹ = ?", options: ["1⅓", "8", "0", "2"], correctAnswer: 0, explanation: "1+1/3=1⅓" },
    { id: 8, question: "(2/3)⁻² = ?", options: ["4/9", "9/4", "−4/9", "6/9"], correctAnswer: 1, explanation: "(3/2)²=9/4" },
    { id: 9, question: "Rationalise 1/√5", options: ["√5/5", "5/√5", "√5", "1/5"], correctAnswer: 0, explanation: "√5/5" },
    { id: 10, question: "16^(3/4) = ?", options: ["8", "12", "4", "64"], correctAnswer: 0, explanation: "(⁴√16)³=2³=8" },
    { id: 11, question: "3.6×10⁴ + 4×10³ = ?", options: ["40000", "40600", "36400", "76000"], correctAnswer: 0, explanation: "36000+4000=40000" },
    { id: 12, question: "If x⁻² = 1/25, x = ?", options: ["5", "±5", "25", "−5"], correctAnswer: 1, explanation: "x²=25, x=±5" },
  ],

  // ═══ CH7: GEOMETRY ═══
  "y9-ch7-geometry": [
    { id: 1, question: "Interior angle sum of hexagon?", options: ["540°", "720°", "360°", "900°"], correctAnswer: 1, explanation: "(6−2)×180°=720°" },
    { id: 2, question: "Each exterior angle of regular pentagon?", options: ["72°", "108°", "60°", "36°"], correctAnswer: 0, explanation: "360°/5=72°" },
    { id: 3, question: "Congruence test SSS needs:", options: ["3 angles", "3 sides", "2 sides + angle", "Right angle"], correctAnswer: 1, explanation: "Three pairs of equal sides" },
    { id: 4, question: "Scale factor k=3. Area multiplied by:", options: ["3", "6", "9", "27"], correctAnswer: 2, explanation: "Area×k²=9" },
    { id: 5, question: "AAA proves:", options: ["Congruence", "Similarity", "Nothing", "Both"], correctAnswer: 1, explanation: "Only similarity" },
    { id: 6, question: "Co-interior angles sum to:", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "C-shape=180°" },
    { id: 7, question: "All circles are:", options: ["Congruent", "Similar", "Neither", "Both"], correctAnswer: 1, explanation: "Always similar" },
    { id: 8, question: "CPCT stands for:", options: ["Corresponding Parts of Congruent Triangles", "Common Points", "Congruent Parts", "None"], correctAnswer: 0, explanation: "Use after proving congruence" },
    { id: 9, question: "Alternate angles on parallel lines are:", options: ["Supplementary", "Equal", "90°", "180°"], correctAnswer: 1, explanation: "Z-shape: equal" },
    { id: 10, question: "Volume scale factor when k=2?", options: ["2", "4", "8", "16"], correctAnswer: 2, explanation: "k³=8" },
    { id: 11, question: "Rhombus has:", options: ["4 right angles", "No equal sides", "4 equal sides", "Only 2 equal"], correctAnswer: 2, explanation: "All sides equal" },
    { id: 12, question: "SAS similarity needs:", options: ["3 sides proportional", "2 sides proportional + included angle", "2 angles", "1 side"], correctAnswer: 1, explanation: "Two proportional sides with included angle equal" },
  ],

  // ═══ CH8: ALGEBRAIC TECHNIQUES ═══
  "y9-ch8-algebraic-techniques": [
    { id: 1, question: "(x+5)(x−5) = ?", options: ["x²−25", "x²+25", "x²−10x+25", "x²−5"], correctAnswer: 0, explanation: "DOTS" },
    { id: 2, question: "Factorise x²+7x+12", options: ["(x+3)(x+4)", "(x+2)(x+6)", "(x+1)(x+12)", "(x+4)²"], correctAnswer: 0, explanation: "3+4=7, 3×4=12" },
    { id: 3, question: "Factorise 4x²−9", options: ["(2x−3)(2x+3)", "(4x−9)(x+1)", "(2x−9)(2x+1)", "Can't"], correctAnswer: 0, explanation: "DOTS: (2x)²−3²" },
    { id: 4, question: "(x−4)² = ?", options: ["x²−16", "x²−8x+16", "x²+8x+16", "x²−4x+16"], correctAnswer: 1, explanation: "x²−8x+16" },
    { id: 5, question: "Factorise x²−x−6", options: ["(x−3)(x+2)", "(x+3)(x−2)", "(x−6)(x+1)", "(x+6)(x−1)"], correctAnswer: 0, explanation: "−3+2=−1, −3×2=−6" },
    { id: 6, question: "Simplify (x²−4)/(x+2)", options: ["x−2", "x+2", "x²−2", "Can't"], correctAnswer: 0, explanation: "(x+2)(x−2)/(x+2)=x−2" },
    { id: 7, question: "Solve x/2 + x/3 = 5", options: ["x=6", "x=5", "x=30", "x=10"], correctAnswer: 0, explanation: "5x/6=5, x=6" },
    { id: 8, question: "Factorise 6x²+x−2 (AC method)", options: ["(2x−1)(3x+2)", "(3x−1)(2x+2)", "(6x−2)(x+1)", "(3x−2)(2x+1)"], correctAnswer: 0, explanation: "(2x−1)(3x+2)=6x²+4x−3x−2=6x²+x−2" },
    { id: 9, question: "Factorise by grouping: ax+ay+bx+by", options: ["(a+b)(x+y)", "(a−b)(x−y)", "ab+xy", "Can't"], correctAnswer: 0, explanation: "a(x+y)+b(x+y)=(a+b)(x+y)" },
    { id: 10, question: "9x²+12x+4 = ?", options: ["(3x+2)²", "(3x+4)(3x+1)", "(9x+4)(x+1)", "(3x+2)(3x+4)"], correctAnswer: 0, explanation: "Perfect square" },
    { id: 11, question: "x/3 + x/6 = ?", options: ["2x/9", "x/2", "3x/6", "x/9"], correctAnswer: 1, explanation: "2x/6+x/6=3x/6=x/2" },
    { id: 12, question: "Cross-multiply a/b=c/d gives:", options: ["ac=bd", "ad=bc", "a+d=b+c", "ab=cd"], correctAnswer: 1, explanation: "ad=bc" },
  ],

  // ═══ CH9: PROBABILITY & STATISTICS ═══
  "y9-ch9-probability-statistics": [
    { id: 1, question: "Mean of 3,5,7,9,11?", options: ["5", "7", "9", "35"], correctAnswer: 1, explanation: "35/5=7" },
    { id: 2, question: "P(rolling even on die)?", options: ["1/6", "1/3", "1/2", "2/3"], correctAnswer: 2, explanation: "3/6=1/2" },
    { id: 3, question: "Median of 2,4,4,5,7,8?", options: ["4", "4.5", "5", "5.5"], correctAnswer: 1, explanation: "(4+5)/2=4.5" },
    { id: 4, question: "Complement of P(A)=0.35?", options: ["0.35", "0.65", "1.35", "−0.35"], correctAnswer: 1, explanation: "1−0.35=0.65" },
    { id: 5, question: "n(A∪B) = n(A)+n(B)−?", options: ["n(A')", "n(B')", "n(A∩B)", "n(Total)"], correctAnswer: 2, explanation: "Inclusion-exclusion" },
    { id: 6, question: "IQR = Q3−Q1 measures:", options: ["All spread", "Middle 50%", "Top 25%", "Mean"], correctAnswer: 1, explanation: "Spread of middle half" },
    { id: 7, question: "Die rolled 120 times. Expected 3s?", options: ["3", "10", "20", "60"], correctAnswer: 2, explanation: "120×1/6=20" },
    { id: 8, question: "Stratified sampling:", options: ["Random only", "Groups first", "Convenience", "Volunteer"], correctAnswer: 1, explanation: "Divide into strata" },
    { id: 9, question: "P(at least 1 head in 2 flips)?", options: ["1/2", "3/4", "1/4", "1"], correctAnswer: 1, explanation: "1−1/4=3/4" },
    { id: 10, question: "Box plot shows ___ summary", options: ["3-number", "5-number", "7-number", "2-number"], correctAnswer: 1, explanation: "Min,Q1,Med,Q3,Max" },
    { id: 11, question: "Bag: 4 red, 6 blue. P(blue)?", options: ["2/5", "3/5", "4/10", "6/4"], correctAnswer: 1, explanation: "6/10=3/5" },
    { id: 12, question: "Larger samples are:", options: ["Less useful", "More representative", "More biased", "Not needed"], correctAnswer: 1, explanation: "Better represent population" },
    { id: 13, question: "Modal class is:", options: ["Middle class", "Highest frequency", "First class", "Smallest"], correctAnswer: 1, explanation: "Most data points" },
    { id: 14, question: "Relative frequency converges to theoretical P via:", options: ["Guess", "Law of large numbers", "Luck", "Coincidence"], correctAnswer: 1, explanation: "More trials → closer" },
  ],

  // ═══ CH10: QUADRATICS ═══
  "y9-ch10-quadratics": [
    { id: 1, question: "Solve x²+3x=0", options: ["x=0,−3", "x=0,3", "x=3", "x=−3"], correctAnswer: 0, explanation: "x(x+3)=0" },
    { id: 2, question: "Solve x²−5x+6=0", options: ["x=2,3", "x=−2,−3", "x=1,6", "x=−1,−6"], correctAnswer: 0, explanation: "(x−2)(x−3)=0" },
    { id: 3, question: "Vertex of y=x²−4x+3?", options: ["(2,−1)", "(1,0)", "(3,0)", "(0,3)"], correctAnswer: 0, explanation: "x=2, y=−1" },
    { id: 4, question: "y=−x² opens:", options: ["Up", "Down", "Left", "Right"], correctAnswer: 1, explanation: "Negative a" },
    { id: 5, question: "y=(x−3)²+2 vertex?", options: ["(3,2)", "(−3,2)", "(3,−2)", "(−3,−2)"], correctAnswer: 0, explanation: "(h,k)=(3,2)" },
    { id: 6, question: "y=2x² vs y=x²:", options: ["Wider", "Narrower", "Same", "Reflected"], correctAnswer: 1, explanation: "|a|>1: narrower" },
    { id: 7, question: "y=(x−1)(x−5) axis of symmetry?", options: ["x=3", "x=2", "x=4", "x=6"], correctAnswer: 0, explanation: "(1+5)/2=3" },
    { id: 8, question: "Product of 2 consecutive: n(n+1)=72. They are:", options: ["8,9", "7,8", "6,12", "9,10"], correctAnswer: 0, explanation: "8×9=72" },
    { id: 9, question: "Translate y=x² right 5, down 3:", options: ["y=(x−5)²−3", "y=(x+5)²−3", "y=(x−5)²+3", "y=(x−3)²−5"], correctAnswer: 0, explanation: "Right→(x−5), down→−3" },
    { id: 10, question: "y=a(x−p)(x−q). x-intercepts at:", options: ["(a,0)", "(p,0),(q,0)", "(0,p),(0,q)", "(pq,0)"], correctAnswer: 1, explanation: "x=p and x=q" },
    { id: 11, question: "Null factor law: AB=0 means:", options: ["A=B", "A=0 or B=0", "A+B=0", "AB=1"], correctAnswer: 1, explanation: "At least one is zero" },
    { id: 12, question: "y=½x² vs y=x²:", options: ["Narrower", "Wider", "Same", "Reflected"], correctAnswer: 1, explanation: "|a|<1: wider" },
  ],

  // ═══ CH11: ALGORITHMIC THINKING ═══
  "y9-ch11-algorithmic-thinking": [
    { id: 1, question: "An algorithm must be:", options: ["Infinite", "Random", "Finite and unambiguous", "Secret"], correctAnswer: 2, explanation: "Clear, finite steps" },
    { id: 2, question: "Flowchart diamond = ?", options: ["Start", "Process", "Decision", "End"], correctAnswer: 2, explanation: "Yes/no decision" },
    { id: 3, question: "Bubble sort compares:", options: ["First/last", "Adjacent pairs", "Random", "All"], correctAnswer: 1, explanation: "Neighbouring elements" },
    { id: 4, question: "2,5,8,11,14... Common difference?", options: ["2", "3", "5", "7"], correctAnswer: 1, explanation: "5−2=3" },
    { id: 5, question: "Fibonacci next after 5,8:", options: ["11", "13", "10", "16"], correctAnswer: 1, explanation: "5+8=13" },
    { id: 6, question: "Rectangle P=20. Max area when:", options: ["5×5", "1×9", "2×8", "3×7"], correctAnswer: 0, explanation: "Square: 25" },
    { id: 7, question: "Simulation estimates:", options: ["Exact values", "Probabilities", "Nothing", "Errors"], correctAnswer: 1, explanation: "Approximate probabilities" },
    { id: 8, question: "Stratified sampling algorithm:", options: ["Random only", "Divide + proportional sample", "Convenience", "None"], correctAnswer: 1, explanation: "Groups then proportional" },
    { id: 9, question: "Selection sort finds ___ first:", options: ["Maximum", "Minimum", "Middle", "Random"], correctAnswer: 1, explanation: "Find min, place in order" },
    { id: 10, question: "More simulation trials give:", options: ["Worse", "Better", "Same", "No"], correctAnswer: 1, explanation: "More reliable estimates" },
    { id: 11, question: "Pseudocode is:", options: ["Real code", "Informal algorithm description", "A diagram", "Machine code"], correctAnswer: 1, explanation: "Text-based algorithm description" },
    { id: 12, question: "Sum 1+2+...+100 = ?", options: ["5050", "100", "10000", "1000"], correctAnswer: 0, explanation: "n(n+1)/2=5050" },
  ],
};
