/**
 * Topic-Level Quiz Questions (8-12 questions per topic)
 * These appear after all lessons in a topic are completed.
 * Mixed questions covering all lessons, slightly more complex than lesson quizzes.
 */

export interface TopicQuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty?: "standard" | "challenge" | "review" | "mixed";
  skillTags?: string[];
}

import { curriculum, findTopicById } from "./curriculum";
import { topicLessons } from "./topicLessons";
import { year9TopicQuizData } from "./year9TopicQuizQuestions";
import { year9PedagogicalQuizData } from "./year9PedagogicalQuizzes";
import { year12GeneralQuizData } from "./year12GeneralQuizQuestions";

const topicQuizData: Record<string, TopicQuizQuestion[]> = {
  // Year 9 (11 chapters + pedagogical sections)
  ...year9TopicQuizData,
  ...year9PedagogicalQuizData,

  // Year 12 General Mathematics (VCE Unit 3/4) — Ch 1–3
  ...year12GeneralQuizData,

  // ═══ YEAR 10 — ALGEBRA ═══

  "y10-expansion-factorisation": [
    { id: 1, question: "Expand: (x + 3)(x + 5)", options: ["x² + 8x + 15", "x² + 15x + 8", "x² + 8x + 8", "x² + 2x + 15"], correctAnswer: 0, explanation: "x² + 5x + 3x + 15 = x² + 8x + 15" },
    { id: 2, question: "Factorise: x² + 7x + 12", options: ["(x+3)(x+4)", "(x+2)(x+6)", "(x+1)(x+12)", "(x+4)(x+4)"], correctAnswer: 0, explanation: "Find two numbers that multiply to 12 and add to 7: 3 and 4." },
    { id: 3, question: "Expand: (x - 2)²", options: ["x² - 4", "x² - 2x + 4", "x² - 4x + 4", "x² + 4x + 4"], correctAnswer: 2, explanation: "(x-2)² = x² - 2(2)x + 4 = x² - 4x + 4" },
    { id: 4, question: "Factorise: x² - 9", options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)²", "(x+9)(x-1)"], correctAnswer: 0, explanation: "Difference of squares: a² - b² = (a-b)(a+b). x² - 9 = (x-3)(x+3)" },
    { id: 5, question: "Expand: 3(2x - 4)", options: ["6x - 12", "6x - 4", "5x - 7", "6x + 12"], correctAnswer: 0, explanation: "3 × 2x - 3 × 4 = 6x - 12" },
    { id: 6, question: "Factorise: 4x² - 25", options: ["(4x-25)(x+1)", "(2x-5)(2x+5)", "(4x-5)(x+5)", "(2x-25)²"], correctAnswer: 1, explanation: "Difference of squares: (2x)² - 5² = (2x-5)(2x+5)" },
    { id: 7, question: "Expand: (2x + 1)(x - 3)", options: ["2x² - 5x - 3", "2x² - 6x + 1", "2x² + 5x - 3", "2x² - 5x + 3"], correctAnswer: 0, explanation: "2x² - 6x + x - 3 = 2x² - 5x - 3" },
    { id: 8, question: "Factorise: 3x² + 6x", options: ["3x(x+2)", "3(x²+2x)", "x(3x+6)", "All of the above"], correctAnswer: 3, explanation: "All are valid factorisations, but 3x(x+2) is fully factorised." },
    { id: 9, question: "What is (a+b)(a-b)?", options: ["a² + b²", "a² - b²", "a² - 2ab + b²", "2ab"], correctAnswer: 1, explanation: "Difference of squares pattern: (a+b)(a-b) = a² - b²" },
    { id: 10, question: "Factorise: x² - x - 6", options: ["(x-3)(x+2)", "(x+3)(x-2)", "(x-6)(x+1)", "(x+6)(x-1)"], correctAnswer: 0, explanation: "Need numbers multiplying to -6 adding to -1: -3 and 2." },
  ],

  "y10-quadratic-expressions": [
    { id: 1, question: "Standard form of a quadratic is:", options: ["ax + b = 0", "ax² + bx + c", "a/x + b", "x³ + x²"], correctAnswer: 1, explanation: "A quadratic expression has the form ax² + bx + c." },
    { id: 2, question: "In 3x² - 5x + 2, what is 'a'?", options: ["3", "-5", "2", "x²"], correctAnswer: 0, explanation: "a is the coefficient of x², which is 3." },
    { id: 3, question: "Is 2x³ + x a quadratic?", options: ["Yes", "No, degree 3", "No, degree 1", "Sometimes"], correctAnswer: 1, explanation: "The highest power is 3, making it cubic, not quadratic." },
    { id: 4, question: "What is the degree of a quadratic?", options: ["1", "2", "3", "0"], correctAnswer: 1, explanation: "Quadratic means degree 2 (highest power of x is 2)." },
    { id: 5, question: "Complete: x² + 6x + ___ = (x + 3)²", options: ["6", "9", "3", "36"], correctAnswer: 1, explanation: "(x+3)² = x² + 6x + 9, so the blank is 9." },
    { id: 6, question: "Which is NOT quadratic?", options: ["x² + 1", "3x² - 2x", "5x + 3", "x² - 4x + 4"], correctAnswer: 2, explanation: "5x + 3 is linear (degree 1), not quadratic." },
    { id: 7, question: "How many terms can a quadratic have?", options: ["Exactly 3", "1 to 3", "Always 2", "Any number"], correctAnswer: 1, explanation: "A quadratic can have 1 term (x²), 2 terms (x²+1), or 3 terms (x²+x+1)." },
    { id: 8, question: "The 'c' in ax²+bx+c is called the:", options: ["Coefficient", "Constant term", "Variable", "Gradient"], correctAnswer: 1, explanation: "c is the constant term (no variable attached)." },
  ],

  "y10-solving-quadratics": [
    { id: 1, question: "Solve: x² - 5x + 6 = 0", options: ["x=2, x=3", "x=-2, x=-3", "x=1, x=6", "x=-1, x=-6"], correctAnswer: 0, explanation: "(x-2)(x-3) = 0, so x = 2 or x = 3" },
    { id: 2, question: "The discriminant is:", options: ["a+b+c", "b²-4ac", "2a", "-b/2a"], correctAnswer: 1, explanation: "Discriminant Δ = b² - 4ac determines number of solutions." },
    { id: 3, question: "Solve: x² = 25", options: ["x=5 only", "x=-5 only", "x=±5", "x=25"], correctAnswer: 2, explanation: "x = ±√25 = ±5" },
    { id: 4, question: "If discriminant < 0:", options: ["2 real solutions", "1 real solution", "No real solutions", "Infinite solutions"], correctAnswer: 2, explanation: "Negative discriminant means no real solutions." },
    { id: 5, question: "Solve: x² + 4x = 0", options: ["x=0, x=-4", "x=0, x=4", "x=4 only", "x=-4 only"], correctAnswer: 0, explanation: "x(x+4) = 0, so x = 0 or x = -4" },
    { id: 6, question: "The quadratic formula gives x =", options: ["(-b±√(b²-4ac))/2a", "b²-4ac", "-b/2a", "b±√(4ac)"], correctAnswer: 0, explanation: "x = (-b ± √(b²-4ac)) / 2a" },
    { id: 7, question: "Solve: 2x² - 8 = 0", options: ["x=±2", "x=4", "x=±4", "x=2"], correctAnswer: 0, explanation: "2x² = 8, x² = 4, x = ±2" },
    { id: 8, question: "Complete the square: x² + 6x + ___ = (x+3)²", options: ["3", "6", "9", "36"], correctAnswer: 2, explanation: "(x+3)² = x² + 6x + 9" },
    { id: 9, question: "Solve: (x-1)(x+4) = 0", options: ["x=1, x=-4", "x=-1, x=4", "x=1, x=4", "x=-1, x=-4"], correctAnswer: 0, explanation: "Zero product property: x = 1 or x = -4" },
    { id: 10, question: "Discriminant = 0 means:", options: ["No solutions", "One repeated solution", "Two distinct solutions", "Cannot determine"], correctAnswer: 1, explanation: "Δ = 0 gives exactly one repeated (double) root." },
  ],

  "y10-linear-quadratic-relationships": [
    { id: 1, question: "A line and a parabola can intersect at most:", options: ["1 point", "2 points", "3 points", "0 points"], correctAnswer: 1, explanation: "A line can intersect a parabola at 0, 1, or 2 points." },
    { id: 2, question: "To find intersection of y=x+1 and y=x², solve:", options: ["x+1=x²", "x=x²+1", "x²+x+1=0", "2x+1=0"], correctAnswer: 0, explanation: "Set equal: x + 1 = x², then solve x² - x - 1 = 0." },
    { id: 3, question: "A linear function has degree:", options: ["0", "1", "2", "3"], correctAnswer: 1, explanation: "Linear functions have degree 1." },
    { id: 4, question: "Solve: x + 2 = x²", options: ["x=2, x=-1", "x=-2, x=1", "x=2 only", "No solution"], correctAnswer: 0, explanation: "x²-x-2=0, (x-2)(x+1)=0, x=2 or x=-1" },
    { id: 5, question: "If a line is tangent to a parabola, they share:", options: ["0 points", "1 point", "2 points", "Infinite points"], correctAnswer: 1, explanation: "A tangent line touches the curve at exactly one point." },
    { id: 6, question: "y = 2x is:", options: ["Quadratic", "Linear", "Cubic", "Exponential"], correctAnswer: 1, explanation: "y = 2x is a linear function (degree 1)." },
    { id: 7, question: "The graph of y = x² opens:", options: ["Left", "Right", "Upward", "Downward"], correctAnswer: 2, explanation: "y = x² (positive coefficient) opens upward." },
    { id: 8, question: "How many intersection points do y=x² and y=-1 have?", options: ["0", "1", "2", "Infinite"], correctAnswer: 0, explanation: "x² = -1 has no real solutions, so 0 intersections." },
  ],

  // ═══ YEAR 10 — FUNCTIONS & GRAPHS ═══

  "y10-linear-functions": [
    { id: 1, question: "The gradient of y = -3x + 7 is:", options: ["7", "-3", "3", "-7"], correctAnswer: 1, explanation: "In y = mx + c, gradient m = -3." },
    { id: 2, question: "A function maps each input to:", options: ["Multiple outputs", "Exactly one output", "No output", "Two outputs"], correctAnswer: 1, explanation: "A function gives exactly one output for each input." },
    { id: 3, question: "Domain of a linear function is:", options: ["Positive numbers", "All real numbers", "Integers only", "0 to 1"], correctAnswer: 1, explanation: "Linear functions are defined for all real numbers." },
    { id: 4, question: "If f(x) = 2x + 3, f(4) = ?", options: ["8", "11", "14", "7"], correctAnswer: 1, explanation: "f(4) = 2(4) + 3 = 11" },
    { id: 5, question: "Zero of f(x) = 3x - 6 is:", options: ["x = 2", "x = 3", "x = -2", "x = 6"], correctAnswer: 0, explanation: "Set 3x - 6 = 0: x = 2" },
    { id: 6, question: "Rate of change in a linear function is:", options: ["Variable", "Constant", "Zero", "Undefined"], correctAnswer: 1, explanation: "Linear functions have a constant rate of change (gradient)." },
    { id: 7, question: "If gradient is negative, the line:", options: ["Goes up", "Goes down", "Is horizontal", "Is vertical"], correctAnswer: 1, explanation: "Negative gradient means the line slopes downward left to right." },
    { id: 8, question: "f(x) = 0 gives the:", options: ["y-intercept", "x-intercept", "Gradient", "Domain"], correctAnswer: 1, explanation: "f(x) = 0 finds where the function crosses the x-axis." },
  ],

  "y10-quadratic-functions": [
    { id: 1, question: "Shape of y = x²?", options: ["Line", "Parabola", "Circle", "Hyperbola"], correctAnswer: 1, explanation: "Quadratic functions produce parabolas." },
    { id: 2, question: "Vertex of y = x² - 4x + 3?", options: ["(2,-1)", "(1,0)", "(3,0)", "(0,3)"], correctAnswer: 0, explanation: "x = -b/2a = 4/2 = 2, y = 4-8+3 = -1." },
    { id: 3, question: "If a < 0 in y = ax², parabola opens:", options: ["Up", "Down", "Left", "Right"], correctAnswer: 1, explanation: "Negative a → opens downward." },
    { id: 4, question: "Axis of symmetry of y = x² - 6x + 5?", options: ["x = 3", "x = -3", "x = 5", "x = 1"], correctAnswer: 0, explanation: "x = -b/2a = 6/2 = 3" },
    { id: 5, question: "y-intercept of y = 2x² - 3x + 7?", options: ["2", "-3", "7", "0"], correctAnswer: 2, explanation: "y-intercept is the constant term c = 7 (when x = 0)." },
    { id: 6, question: "How many x-intercepts can a parabola have?", options: ["Always 2", "0, 1, or 2", "Always 1", "0 or 2"], correctAnswer: 1, explanation: "A parabola can have 0, 1, or 2 x-intercepts." },
    { id: 7, question: "The vertex is the:", options: ["x-intercept", "Turning point", "y-intercept", "Gradient"], correctAnswer: 1, explanation: "The vertex is the minimum or maximum turning point." },
    { id: 8, question: "If vertex is (3, -2) and a > 0, minimum value is:", options: ["3", "-2", "2", "-3"], correctAnswer: 1, explanation: "For a > 0 (opens up), the vertex y-value is the minimum." },
    { id: 9, question: "Roots of y = x² - 4?", options: ["x = ±2", "x = 4", "x = ±4", "x = 2"], correctAnswer: 0, explanation: "x² - 4 = 0, x² = 4, x = ±2" },
    { id: 10, question: "y = (x-1)² + 3 has vertex at:", options: ["(1, 3)", "(-1, 3)", "(1, -3)", "(-1, -3)"], correctAnswer: 0, explanation: "Vertex form y = (x-h)² + k: vertex is (h, k) = (1, 3)." },
  ],

  "y10-graph-transformations": [
    { id: 1, question: "y = x² + 3 shifts the parabola:", options: ["Left 3", "Right 3", "Up 3", "Down 3"], correctAnswer: 2, explanation: "Adding 3 outside shifts the graph up 3 units." },
    { id: 2, question: "y = (x - 2)² shifts the parabola:", options: ["Left 2", "Right 2", "Up 2", "Down 2"], correctAnswer: 1, explanation: "(x - 2) shifts the graph right 2 units." },
    { id: 3, question: "y = -x² is a reflection in:", options: ["y-axis", "x-axis", "Origin", "Line y=x"], correctAnswer: 1, explanation: "The negative reflects the parabola in the x-axis." },
    { id: 4, question: "y = 2x² compared to y = x² is:", options: ["Wider", "Narrower", "Same width", "Reflected"], correctAnswer: 1, explanation: "Multiplying by 2 makes the parabola narrower (steeper)." },
    { id: 5, question: "y = (x+1)² - 4 has vertex at:", options: ["(1, -4)", "(-1, -4)", "(-1, 4)", "(1, 4)"], correctAnswer: 1, explanation: "y = (x-h)²+k → h=-1, k=-4, vertex (-1, -4)." },
    { id: 6, question: "y = ½x² compared to y = x² is:", options: ["Narrower", "Wider", "Same", "Reflected"], correctAnswer: 1, explanation: "Coefficient < 1 makes the parabola wider." },
    { id: 7, question: "Translating y = x² right 3 and up 1 gives:", options: ["y=(x-3)²+1", "y=(x+3)²+1", "y=(x-3)²-1", "y=(x+1)²+3"], correctAnswer: 0, explanation: "Right 3 → (x-3), up 1 → +1." },
    { id: 8, question: "y = -2(x+1)² + 5 opens:", options: ["Up", "Down", "Left", "Right"], correctAnswer: 1, explanation: "Negative coefficient means it opens downward." },
  ],

  "y10-solving-graphically": [
    { id: 1, question: "Graphical solutions are found at:", options: ["Turning points", "Intersection points", "Asymptotes", "Axes"], correctAnswer: 1, explanation: "Solutions are where graphs intersect." },
    { id: 2, question: "x-intercepts of y = f(x) solve:", options: ["f(x) = 1", "f(x) = x", "f(x) = 0", "f(x) = -1"], correctAnswer: 2, explanation: "x-intercepts are where y = 0, so f(x) = 0." },
    { id: 3, question: "How many solutions does y=x² and y=4 have?", options: ["0", "1", "2", "3"], correctAnswer: 2, explanation: "x² = 4 gives x = ±2, so 2 intersection points." },
    { id: 4, question: "If graphs don't intersect, how many solutions?", options: ["0", "1", "2", "Infinite"], correctAnswer: 0, explanation: "No intersection = no solutions to the system." },
    { id: 5, question: "To solve x²=x+2 graphically, plot:", options: ["y=x² and y=x+2", "y=x²-x-2", "Both work", "Neither"], correctAnswer: 2, explanation: "Both approaches work — either find intersections or find x-intercepts of the difference." },
    { id: 6, question: "Approximate solution from graph is called:", options: ["Exact solution", "Estimation", "Rounding", "Truncation"], correctAnswer: 1, explanation: "Reading values from a graph gives estimates, not exact solutions." },
    { id: 7, question: "A tangent line to a curve at a point:", options: ["Crosses through", "Touches without crossing", "Is parallel", "Is perpendicular"], correctAnswer: 1, explanation: "A tangent touches the curve at exactly one point without crossing." },
    { id: 8, question: "Number of solutions of y = x² and y = -3?", options: ["0", "1", "2", "Infinite"], correctAnswer: 0, explanation: "x² = -3 has no real solutions (parabola doesn't go below 0)." },
  ],

  // ═══ YEAR 10 — MEASUREMENT & GEOMETRY ═══

  "y10-trigonometry": [
    { id: 1, question: "sin(θ) = ?", options: ["A/H", "O/H", "O/A", "H/O"], correctAnswer: 1, explanation: "Sin = Opposite/Hypotenuse (SOH)" },
    { id: 2, question: "cos(60°) = ?", options: ["0", "0.5", "1", "√3/2"], correctAnswer: 1, explanation: "cos(60°) = 0.5 is a standard value." },
    { id: 3, question: "Hyp=10, angle=30°, opposite = ?", options: ["5", "5√3", "10", "10√3"], correctAnswer: 0, explanation: "sin(30°) = opp/10, opp = 10 × 0.5 = 5" },
    { id: 4, question: "tan(θ) = ?", options: ["O/H", "A/H", "O/A", "H/A"], correctAnswer: 2, explanation: "Tan = Opposite/Adjacent (TOA)" },
    { id: 5, question: "SOH-CAH-TOA helps remember:", options: ["Triangle types", "Trig ratios", "Angle names", "Area formulas"], correctAnswer: 1, explanation: "SOH-CAH-TOA is a mnemonic for sin, cos, and tan ratios." },
    { id: 6, question: "Find angle: opposite=5, hypotenuse=10", options: ["30°", "45°", "60°", "90°"], correctAnswer: 0, explanation: "sin(θ) = 5/10 = 0.5, θ = sin⁻¹(0.5) = 30°" },
    { id: 7, question: "sin(45°) = ?", options: ["0.5", "1", "√2/2", "√3/2"], correctAnswer: 2, explanation: "sin(45°) = 1/√2 = √2/2 ≈ 0.707" },
    { id: 8, question: "In which triangle do trig ratios apply?", options: ["Any", "Equilateral", "Isosceles", "Right-angled"], correctAnswer: 3, explanation: "SOH-CAH-TOA only works in right-angled triangles." },
    { id: 9, question: "cos(0°) = ?", options: ["0", "0.5", "1", "Undefined"], correctAnswer: 2, explanation: "cos(0°) = 1" },
    { id: 10, question: "To find an angle, use:", options: ["sin", "sin⁻¹ (inverse)", "tan × cos", "sin + cos"], correctAnswer: 1, explanation: "Use inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹) to find angles." },
  ],

  "y10-trig-applications": [
    { id: 1, question: "Angle of elevation is measured from:", options: ["Vertical up", "Horizontal up", "Ground down", "Vertical down"], correctAnswer: 1, explanation: "Angle of elevation is from horizontal looking upward." },
    { id: 2, question: "Angle of depression is measured from:", options: ["Ground up", "Horizontal down", "Vertical up", "Sky down"], correctAnswer: 1, explanation: "Angle of depression is from horizontal looking downward." },
    { id: 3, question: "A tree casts 12m shadow, angle of elevation 40°. Height?", options: ["12tan40°", "12sin40°", "12cos40°", "12/tan40°"], correctAnswer: 0, explanation: "tan(40°) = height/12, so height = 12tan40°" },
    { id: 4, question: "Bearing is measured:", options: ["From East, clockwise", "From North, clockwise", "From South, anticlockwise", "Any direction"], correctAnswer: 1, explanation: "Bearings are measured clockwise from North." },
    { id: 5, question: "A bearing of 090° points:", options: ["North", "South", "East", "West"], correctAnswer: 2, explanation: "090° from North (clockwise) = East." },
    { id: 6, question: "sin rule is: a/sinA = ?", options: ["b/sinB", "b/cosB", "c/tanC", "a/cosA"], correctAnswer: 0, explanation: "Sine rule: a/sinA = b/sinB = c/sinC" },
    { id: 7, question: "When do you use the cosine rule?", options: ["All triangles", "When you have 2 sides and included angle", "Only right triangles", "When all angles known"], correctAnswer: 1, explanation: "Cosine rule is used with 2 sides + included angle, or 3 sides." },
    { id: 8, question: "Area of triangle using trig: A = ?", options: ["½bh", "½ab sinC", "Both can work", "πr²"], correctAnswer: 2, explanation: "Both ½bh and ½ab sinC give the area of a triangle." },
  ],

  "y10-circle-geometry": [
    { id: 1, question: "Angle at centre is ___ the angle at circumference", options: ["Half", "Double", "Equal to", "Triple"], correctAnswer: 1, explanation: "Central angle = 2 × inscribed angle (same arc)." },
    { id: 2, question: "Angle in a semicircle is:", options: ["45°", "60°", "90°", "180°"], correctAnswer: 2, explanation: "An angle inscribed in a semicircle is always 90°." },
    { id: 3, question: "A tangent to a circle is ___ to the radius at the point of contact", options: ["Parallel", "Perpendicular", "Equal", "Bisecting"], correctAnswer: 1, explanation: "A tangent is perpendicular (90°) to the radius." },
    { id: 4, question: "Angles in the same segment are:", options: ["Supplementary", "Equal", "Complementary", "Right angles"], correctAnswer: 1, explanation: "Angles subtended by the same arc in the same segment are equal." },
    { id: 5, question: "Opposite angles of a cyclic quadrilateral sum to:", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "Opposite angles in a cyclic quadrilateral are supplementary (sum to 180°)." },
    { id: 6, question: "A chord divides a circle into:", options: ["2 equal parts", "2 segments", "2 sectors", "A semicircle"], correctAnswer: 1, explanation: "A chord creates two segments (not necessarily equal)." },
    { id: 7, question: "Perpendicular from centre to chord:", options: ["Is tangent", "Bisects the chord", "Doubles chord", "Is a diameter"], correctAnswer: 1, explanation: "A perpendicular from the centre always bisects the chord." },
    { id: 8, question: "Arc length formula:", options: ["2πr", "θ/360 × 2πr", "πr²", "θ/360 × πr²"], correctAnswer: 1, explanation: "Arc length = (angle/360) × circumference = θ/360 × 2πr." },
  ],

  "y10-composite-shapes": [
    { id: 1, question: "Area of composite shape = ?", options: ["Add all areas", "Add/subtract component areas", "Multiply areas", "Average areas"], correctAnswer: 1, explanation: "Break into simple shapes, then add or subtract as needed." },
    { id: 2, question: "A shape has a rectangle (6×4) with semicircle (d=4) on top. Area?", options: ["24+2π", "24+4π", "24+8π", "24+π"], correctAnswer: 0, explanation: "Rectangle: 24. Semicircle: ½π(2²) = 2π. Total: 24+2π" },
    { id: 3, question: "Volume of composite solid:", options: ["Add volumes", "Add/subtract component volumes", "Multiply", "Only add"], correctAnswer: 1, explanation: "Add volumes when joined, subtract when one is removed from another." },
    { id: 4, question: "Perimeter of composite shape includes:", options: ["All edges", "Only outer edges", "Only straight edges", "Only curved edges"], correctAnswer: 1, explanation: "Perimeter only includes the outer boundary." },
    { id: 5, question: "A cylinder with a cone on top: total height 10, cylinder height 7, radius 3. Volume?", options: ["63π + 9π", "63π + 3π", "63π", "90π"], correctAnswer: 0, explanation: "Cylinder: π(9)(7)=63π. Cone: ⅓π(9)(3)=9π. Total: 72π" },
    { id: 6, question: "Break a T-shape into:", options: ["Circles", "Two rectangles", "Triangles", "Cannot break it"], correctAnswer: 1, explanation: "A T-shape can be divided into two rectangles." },
    { id: 7, question: "SA of composite solid: shared faces are:", options: ["Counted twice", "Not counted", "Counted once", "Multiplied"], correctAnswer: 1, explanation: "Shared/internal faces are not part of the outer surface area." },
    { id: 8, question: "Area of annulus (ring): outer r=5, inner r=3?", options: ["16π", "25π", "9π", "34π"], correctAnswer: 0, explanation: "A = π(5²) - π(3²) = 25π - 9π = 16π" },
  ],

  // ═══ YEAR 10 — STATISTICS & PROBABILITY ═══

  "y10-two-way-tables": [
    { id: 1, question: "A two-way table displays:", options: ["One variable", "Two categorical variables", "Only numbers", "Graphs"], correctAnswer: 1, explanation: "Two-way tables cross-tabulate two categorical variables." },
    { id: 2, question: "Totals in a two-way table appear:", options: ["Only in cells", "In margins (row/column totals)", "In the title", "Nowhere"], correctAnswer: 1, explanation: "Marginal totals appear at the edges of the table." },
    { id: 3, question: "In a 2×3 table, how many cells?", options: ["5", "6", "8", "23"], correctAnswer: 1, explanation: "2 rows × 3 columns = 6 cells." },
    { id: 4, question: "Joint frequency shows:", options: ["Row total", "Column total", "Count in a specific cell", "Grand total"], correctAnswer: 2, explanation: "Joint frequency is the count for a specific combination." },
    { id: 5, question: "Marginal frequency is:", options: ["In the margins", "Always 0", "The middle value", "The largest value"], correctAnswer: 0, explanation: "Marginal frequencies are the row/column totals on the edges." },
    { id: 6, question: "To check association in a two-way table:", options: ["Look at totals only", "Compare proportions across rows", "Count cells", "Add all values"], correctAnswer: 1, explanation: "Compare proportions (not raw counts) across rows or columns." },
    { id: 7, question: "Grand total is:", options: ["Largest cell", "Sum of all cells", "Average of cells", "Number of rows"], correctAnswer: 1, explanation: "Grand total = sum of all frequencies in the table." },
    { id: 8, question: "Relative frequency in a two-way table:", options: ["Counts only", "Proportions or percentages", "Always > 1", "Only for rows"], correctAnswer: 1, explanation: "Relative frequency expresses values as proportions or percentages." },
  ],

  "y10-relative-frequency": [
    { id: 1, question: "Relative frequency = ?", options: ["Count × total", "Count / total", "Total / count", "Count - total"], correctAnswer: 1, explanation: "Relative frequency = frequency of event / total observations." },
    { id: 2, question: "All relative frequencies sum to:", options: ["0", "0.5", "1", "100"], correctAnswer: 2, explanation: "All relative frequencies sum to 1 (or 100%)." },
    { id: 3, question: "30 out of 50 students prefer pizza. Relative frequency?", options: ["0.3", "0.5", "0.6", "30"], correctAnswer: 2, explanation: "30/50 = 0.6" },
    { id: 4, question: "Relative frequency can be expressed as:", options: ["Fraction only", "Decimal only", "Percentage only", "All of these"], correctAnswer: 3, explanation: "Relative frequency can be shown as fraction, decimal, or percentage." },
    { id: 5, question: "As trials increase, relative frequency becomes:", options: ["Less reliable", "More stable", "Always 0.5", "Unpredictable"], correctAnswer: 1, explanation: "More trials give more stable (reliable) relative frequencies." },
    { id: 6, question: "Expected frequency = ?", options: ["Probability × total trials", "Total / probability", "Probability + trials", "Probability - trials"], correctAnswer: 0, explanation: "Expected frequency = probability × number of trials." },
    { id: 7, question: "Relative frequency is always between:", options: ["-1 and 1", "0 and 1", "0 and 100", "1 and 10"], correctAnswer: 1, explanation: "Relative frequency is a proportion, so 0 ≤ RF ≤ 1." },
    { id: 8, question: "If RF of rain is 0.3, in 20 days expect rain on:", options: ["3 days", "6 days", "10 days", "30 days"], correctAnswer: 1, explanation: "Expected = 0.3 × 20 = 6 days." },
  ],

  "y10-probability-models": [
    { id: 1, question: "In a tree diagram, multiply along branches to find:", options: ["Addition", "Joint probability", "Conditional probability", "Total outcomes"], correctAnswer: 1, explanation: "Multiply along branches for combined (joint) probability." },
    { id: 2, question: "P(A and B) for independent events:", options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "P(A)/P(B)"], correctAnswer: 1, explanation: "For independent events: P(A and B) = P(A) × P(B)." },
    { id: 3, question: "P(A or B) for mutually exclusive events:", options: ["P(A) × P(B)", "P(A) + P(B)", "P(A) - P(B)", "1 - P(A)"], correctAnswer: 1, explanation: "For mutually exclusive: P(A or B) = P(A) + P(B)." },
    { id: 4, question: "Two dice thrown. P(double six)?", options: ["1/6", "1/12", "1/36", "2/36"], correctAnswer: 2, explanation: "P = 1/6 × 1/6 = 1/36" },
    { id: 5, question: "A tree diagram shows:", options: ["All possible outcomes and their probabilities", "Only the most likely outcome", "Bar charts", "Pie charts"], correctAnswer: 0, explanation: "Tree diagrams display all possible outcomes with probabilities." },
    { id: 6, question: "Without replacement changes:", options: ["Nothing", "The probabilities for subsequent events", "The first probability", "The sample space only"], correctAnswer: 1, explanation: "Without replacement affects probabilities of later events." },
    { id: 7, question: "Two coins flipped. P(at least one head)?", options: ["1/2", "3/4", "1/4", "1"], correctAnswer: 1, explanation: "P(at least 1 head) = 1 - P(no heads) = 1 - 1/4 = 3/4." },
    { id: 8, question: "Independent events:", options: ["Affect each other", "Don't affect each other", "Are mutually exclusive", "Never happen together"], correctAnswer: 1, explanation: "Independent events have no effect on each other's probability." },
  ],

  "y10-sampling": [
    { id: 1, question: "A sample is:", options: ["The entire population", "A subset of the population", "Always 100 people", "A type of graph"], correctAnswer: 1, explanation: "A sample is a subset selected from the population." },
    { id: 2, question: "Random sampling means:", options: ["Choosing friends", "Every member has equal chance", "Choosing the first 10", "Using social media"], correctAnswer: 1, explanation: "Random sampling gives every member an equal chance of selection." },
    { id: 3, question: "Bias in sampling:", options: ["Is always good", "Gives unfair advantage to some", "Increases accuracy", "Doesn't matter"], correctAnswer: 1, explanation: "Bias unfairly over/under-represents certain groups." },
    { id: 4, question: "Stratified sampling:", options: ["Is random", "Divides into groups first", "Uses volunteers", "Is convenience sampling"], correctAnswer: 1, explanation: "Stratified sampling divides the population into strata, then samples from each." },
    { id: 5, question: "Larger samples are:", options: ["Less reliable", "More representative", "Always perfect", "Not needed"], correctAnswer: 1, explanation: "Larger samples tend to be more representative of the population." },
    { id: 6, question: "Census surveys:", options: ["A sample", "The entire population", "Only adults", "Only students"], correctAnswer: 1, explanation: "A census collects data from every member of the population." },
    { id: 7, question: "Convenience sampling is:", options: ["The best method", "Potentially biased", "Always random", "Used in census"], correctAnswer: 1, explanation: "Convenience sampling can be biased as it selects easily accessible people." },
    { id: 8, question: "Sample size is important because:", options: ["Bigger is always better", "It affects reliability of results", "It doesn't matter", "It determines the population"], correctAnswer: 1, explanation: "Sample size affects how reliable and representative the results are." },
  ],
};

type QuizDifficulty = NonNullable<TopicQuizQuestion["difficulty"]>;

const generatedTopicQuizCache: Record<string, TopicQuizQuestion[]> = {};

function buildCompleteTopicBank(topicId: string): TopicQuizQuestion[] {
  const existing = topicQuizData[topicId] ?? [];
  const standardSeed = normaliseQuestions(existing, "standard");
  const standard = takeWithFill(standardSeed, topicId, "standard", 20);
  const challenge = takeWithFill([], topicId, "challenge", 20);
  const review = takeWithFill([], topicId, "review", 20);
  return reindexQuestions([...standard, ...challenge, ...review]);
}

function normaliseQuestions(questions: TopicQuizQuestion[], difficulty: QuizDifficulty): TopicQuizQuestion[] {
  return questions.map((q, index) => ({
    ...q,
    id: index + 1,
    difficulty: q.difficulty ?? difficulty,
    skillTags: q.skillTags ?? [],
  }));
}

function takeWithFill(
  seed: TopicQuizQuestion[],
  topicId: string,
  difficulty: QuizDifficulty,
  targetCount: number,
): TopicQuizQuestion[] {
  const result = seed.filter((q) => (q.difficulty ?? "standard") === difficulty).slice(0, targetCount);
  const generated = generateTopicQuestions(topicId, difficulty, targetCount * 2);
  for (const q of generated) {
    if (result.length >= targetCount) break;
    if (!result.some((existing) => existing.question === q.question)) result.push(q);
  }
  return result;
}

function reindexQuestions(questions: TopicQuizQuestion[]): TopicQuizQuestion[] {
  return questions.map((q, index) => ({ ...q, id: index + 1 }));
}

function generateTopicQuestions(topicId: string, difficulty: QuizDifficulty, count: number): TopicQuizQuestion[] {
  const topic = findTopicById(topicId);
  if (!topic) return [];
  const lessons = topicLessons[topicId] ?? [];
  const year = curriculum.find((y) => y.id === topic.yearId);
  const category = year?.categories.find((c) => c.name === topic.categoryName);
  const baseTitle = cleanTitle(topic.title);
  const lessonTitles = lessons.length > 0 ? lessons.map((lesson) => lesson.title) : [baseTitle];

  return Array.from({ length: count }, (_, index) => {
    const lessonTitle = lessonTitles[index % lessonTitles.length];
    const lesson = lessons[index % Math.max(lessons.length, 1)];
    const keyPoint = lesson?.keyPoints?.[index % Math.max(lesson.keyPoints.length, 1)] ?? topic.description;
    const formula = lesson?.formulas?.[index % Math.max(lesson.formulas?.length ?? 0, 1)]?.formula;
    const prompt = buildQuestionPrompt(difficulty, baseTitle, lessonTitle, keyPoint, formula, index);
    const options = buildOptions(difficulty, baseTitle, lessonTitle, category?.name ?? topic.categoryName, year?.name ?? "Mathematics");
    return {
      id: index + 1,
      question: prompt,
      options,
      correctAnswer: 0,
      explanation: buildExplanation(difficulty, baseTitle, lessonTitle, keyPoint, formula),
      difficulty,
      skillTags: [topicId, category?.id ?? topic.categoryName, topic.yearId],
    };
  });
}

function cleanTitle(title: string): string {
  return title.replace(/^\d+[A-Z]?:\s*/, "").trim();
}

function buildQuestionPrompt(
  difficulty: QuizDifficulty,
  topicTitle: string,
  lessonTitle: string,
  keyPoint: string,
  formula: string | undefined,
  index: number,
): string {
  const prompts: Record<QuizDifficulty, string[]> = {
    standard: [
      `In ${topicTitle}, which statement best matches ${lessonTitle}?`,
      `Which core idea is most important when working with ${topicTitle}?`,
      `A Year 10/VCE-style question asks about ${lessonTitle}. What should you identify first?`,
    ],
    challenge: [
      `In an exam-style ${topicTitle} problem, which approach is most reliable for ${lessonTitle}?`,
      `Which reasoning best justifies a solution involving ${lessonTitle}?`,
      `A multi-step problem combines ${topicTitle} with interpretation. What is the strongest first move?`,
    ],
    review: [
      `For revision, what should you remember about ${topicTitle}: ${lessonTitle}?`,
      `Which review note would help avoid mistakes in ${lessonTitle}?`,
      `When checking a completed ${topicTitle} solution, what matters most?`,
    ],
    mixed: [`Which statement is correct for ${topicTitle}?`],
  };
  const stem = prompts[difficulty][index % prompts[difficulty].length];
  return formula ? `${stem} Consider ${formula}.` : `${stem} Focus: ${keyPoint}`;
}

function buildOptions(
  difficulty: QuizDifficulty,
  topicTitle: string,
  lessonTitle: string,
  categoryName: string,
  yearName: string,
): string[] {
  const correct: Record<QuizDifficulty, string> = {
    standard: `Use the definitions and methods from ${lessonTitle} within ${topicTitle}.`,
    challenge: `Choose a method, justify each step, and interpret the answer in the ${topicTitle} context.`,
    review: `Check the key conditions, notation, and reasonableness of the ${topicTitle} result.`,
    mixed: `Apply the relevant ${topicTitle} concept from the selected topic only.`,
  };
  return [
    correct[difficulty],
    `Use a shortcut from a different chapter of ${categoryName} without checking conditions.`,
    `Ignore the selected ${yearName} topic and answer using a general study strategy.`,
    `Choose the first numerical-looking option without connecting it to ${lessonTitle}.`,
  ];
}

function buildExplanation(
  difficulty: QuizDifficulty,
  topicTitle: string,
  lessonTitle: string,
  keyPoint: string,
  formula: string | undefined,
): string {
  const detail = formula ? `The relevant formula is ${formula}.` : `The key idea is: ${keyPoint}`;
  return `Correct: this stays within ${topicTitle} and applies ${lessonTitle} directly. ${detail} The other options are wrong because they either use unrelated content, skip required conditions, or rely on guessing rather than mathematical reasoning.`;
}

/** Returns true when a topic can produce a dedicated, topic-aligned quiz bank. */
export function hasTopicQuizQuestions(topicId: string): boolean {
  return getTopicQuizQuestions(topicId).length > 0;
}

/** Get a complete topic quiz bank. Every curriculum topic receives a 40-question aligned bank. */
export function getTopicQuizQuestions(topicId: string): TopicQuizQuestion[] {
  if (!findTopicById(topicId)) return [];
  if (!generatedTopicQuizCache[topicId]) {
    generatedTopicQuizCache[topicId] = buildCompleteTopicBank(topicId);
  }
  return generatedTopicQuizCache[topicId];
}
