// Comprehensive lesson content for Victorian Year 9-10 Mathematics curriculum

export interface LessonContent {
  explanation: string;
  keyFormulas: string[];
  workedExamples: {
    problem: string;
    steps: string[];
    answer: string;
  }[];
  commonMistakes: string[];
  tips: string[];
}

export const lessonContent: Record<string, LessonContent> = {
  // Year 9 - Number & Algebra
  "y9-real-numbers-index-laws": {
    explanation: `Real numbers include all the numbers you use every day: whole numbers (integers like -3, 0, 5), fractions (like ½ or ¾), and decimals (like 3.14). Together, they form a complete number line with no gaps.

Index notation is a shorthand way to write repeated multiplication. Instead of writing 2 × 2 × 2, we write 2³ (read as "2 to the power of 3"). The small number is called the index or exponent.

When multiplying powers with the same base, we ADD the indices: aᵐ × aⁿ = aᵐ⁺ⁿ
When dividing powers with the same base, we SUBTRACT the indices: aᵐ ÷ aⁿ = aᵐ⁻ⁿ
When raising a power to another power, we MULTIPLY the indices: (aᵐ)ⁿ = aᵐˣⁿ`,
    keyFormulas: [
      "aᵐ × aⁿ = aᵐ⁺ⁿ (Multiplication: add indices)",
      "aᵐ ÷ aⁿ = aᵐ⁻ⁿ (Division: subtract indices)",
      "(aᵐ)ⁿ = aᵐˣⁿ (Power of a power: multiply indices)",
      "a⁰ = 1 (Any number to power 0 equals 1)",
      "a⁻ⁿ = 1/aⁿ (Negative index means reciprocal)"
    ],
    workedExamples: [
      {
        problem: "Simplify 2³ × 2⁴",
        steps: [
          "Both terms have the same base (2)",
          "When multiplying, we add the indices",
          "2³ × 2⁴ = 2³⁺⁴ = 2⁷",
          "If you need the value: 2⁷ = 128"
        ],
        answer: "2⁷ = 128"
      },
      {
        problem: "Simplify 5⁶ ÷ 5²",
        steps: [
          "Both terms have the same base (5)",
          "When dividing, we subtract the indices",
          "5⁶ ÷ 5² = 5⁶⁻² = 5⁴",
          "If you need the value: 5⁴ = 625"
        ],
        answer: "5⁴ = 625"
      }
    ],
    commonMistakes: [
      "Multiplying indices instead of adding when multiplying powers",
      "Forgetting that different bases cannot be combined (2³ × 3² cannot be simplified)",
      "Thinking a⁰ = 0 (it actually equals 1)"
    ],
    tips: [
      "Always check that the bases are the same before applying index laws",
      "Write out what the index notation means if you're confused (e.g., 2³ = 2 × 2 × 2)"
    ]
  },

  "y9-surds-scientific-notation": {
    explanation: `A surd is a square root (or other root) that cannot be simplified to a whole number. For example, √2 ≈ 1.414... goes on forever without repeating, so we leave it as √2.

To simplify surds, look for perfect square factors. For example, √12 = √(4 × 3) = √4 × √3 = 2√3.

Scientific notation is a way to write very large or very small numbers compactly. We write them as a number between 1 and 10, multiplied by a power of 10.
• 3,500,000 = 3.5 × 10⁶ (move decimal 6 places left)
• 0.00042 = 4.2 × 10⁻⁴ (move decimal 4 places right)`,
    keyFormulas: [
      "√(a × b) = √a × √b",
      "√(a/b) = √a / √b",
      "a√b + c√b = (a+c)√b (only combine like surds)",
      "Scientific notation: a × 10ⁿ where 1 ≤ a < 10"
    ],
    workedExamples: [
      {
        problem: "Simplify √50",
        steps: [
          "Find the largest perfect square that divides 50",
          "50 = 25 × 2, and 25 is a perfect square",
          "√50 = √(25 × 2) = √25 × √2",
          "√25 = 5, so √50 = 5√2"
        ],
        answer: "5√2"
      },
      {
        problem: "Write 0.00067 in scientific notation",
        steps: [
          "Move the decimal point until you have a number between 1 and 10",
          "0.00067 → 6.7 (moved 4 places to the right)",
          "Moving right means negative exponent",
          "0.00067 = 6.7 × 10⁻⁴"
        ],
        answer: "6.7 × 10⁻⁴"
      }
    ],
    commonMistakes: [
      "Trying to add unlike surds (√2 + √3 ≠ √5)",
      "Confusing the direction of the exponent in scientific notation",
      "Forgetting that √4 = 2, not ±2 (when simplifying surds)"
    ],
    tips: [
      "Memorise perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100",
      "For scientific notation: big numbers = positive exponent, small decimals = negative exponent"
    ]
  },

  "y9-linear-equations": {
    explanation: `A linear equation is an equation where the highest power of the variable is 1 (no x², x³, etc.). They form straight lines when graphed.

To solve a linear equation, we need to find the value of the unknown (usually x) that makes the equation true. The key principle is: whatever you do to one side, you must do to the other side to keep the equation balanced.

Steps to solve:
1. Simplify both sides if needed (expand brackets, collect like terms)
2. Get all terms with x on one side
3. Get all numbers on the other side
4. Divide to find x`,
    keyFormulas: [
      "If a = b, then a + c = b + c (add same to both sides)",
      "If a = b, then a - c = b - c (subtract same from both sides)",
      "If a = b, then a × c = b × c (multiply both sides by same)",
      "If a = b, then a ÷ c = b ÷ c (divide both sides by same, c ≠ 0)"
    ],
    workedExamples: [
      {
        problem: "Solve 3x + 5 = 20",
        steps: [
          "We need to get x by itself",
          "First, subtract 5 from both sides: 3x + 5 - 5 = 20 - 5",
          "This gives us: 3x = 15",
          "Now divide both sides by 3: 3x ÷ 3 = 15 ÷ 3",
          "Therefore: x = 5"
        ],
        answer: "x = 5"
      },
      {
        problem: "Solve 2(x - 3) = 10",
        steps: [
          "Expand the brackets: 2x - 6 = 10",
          "Add 6 to both sides: 2x - 6 + 6 = 10 + 6",
          "This gives us: 2x = 16",
          "Divide both sides by 2: x = 8"
        ],
        answer: "x = 8"
      }
    ],
    commonMistakes: [
      "Forgetting to do the same operation to BOTH sides",
      "Making sign errors when subtracting negative numbers",
      "Not expanding brackets properly before solving"
    ],
    tips: [
      "Always check your answer by substituting it back into the original equation",
      "Write out each step clearly - rushing leads to errors"
    ]
  },

  "y9-linear-graphs": {
    explanation: `A linear graph is a straight line on a coordinate plane. Every linear equation in the form y = mx + c produces a straight line.

In y = mx + c:
• m is the gradient (slope) - how steep the line is
• c is the y-intercept - where the line crosses the y-axis

The gradient tells you how much y changes when x increases by 1:
• Positive gradient: line goes upward (left to right)
• Negative gradient: line goes downward
• Gradient of 0: horizontal line

To plot a line, you only need 2 points (but 3 is safer to check for errors).`,
    keyFormulas: [
      "y = mx + c (gradient-intercept form)",
      "Gradient (m) = rise/run = (y₂ - y₁)/(x₂ - x₁)",
      "y-intercept: the value of y when x = 0",
      "x-intercept: the value of x when y = 0"
    ],
    workedExamples: [
      {
        problem: "Plot the line y = 2x + 1",
        steps: [
          "The y-intercept is 1, so the line passes through (0, 1)",
          "The gradient is 2, meaning for every 1 unit right, go 2 units up",
          "From (0, 1), move right 1 and up 2 to get (1, 3)",
          "Check: when x = 1, y = 2(1) + 1 = 3 ✓",
          "Draw a straight line through these points"
        ],
        answer: "Line passing through (0, 1), (1, 3), (2, 5), etc."
      },
      {
        problem: "Find the gradient of the line through (2, 5) and (4, 11)",
        steps: [
          "Use the gradient formula: m = (y₂ - y₁)/(x₂ - x₁)",
          "m = (11 - 5)/(4 - 2)",
          "m = 6/2",
          "m = 3"
        ],
        answer: "Gradient = 3"
      }
    ],
    commonMistakes: [
      "Confusing gradient and y-intercept",
      "Getting the rise and run mixed up in the gradient formula",
      "Plotting the y-intercept on the x-axis"
    ],
    tips: [
      "The y-intercept is always the 'c' value - just look at the equation",
      "Positive gradient = line going up, negative = going down"
    ]
  },

  "y9-simultaneous-equations": {
    explanation: `Simultaneous equations are two (or more) equations that must be true at the same time. The solution is the point where the lines intersect.

There are two main methods to solve them:

Substitution Method:
1. Rearrange one equation to make one variable the subject
2. Substitute this into the other equation
3. Solve, then find the other variable

Elimination Method:
1. Make the coefficients of one variable the same
2. Add or subtract equations to eliminate that variable
3. Solve, then find the other variable`,
    keyFormulas: [
      "The solution (x, y) satisfies BOTH equations",
      "Graphically: the solution is where the two lines cross",
      "Always check by substituting back into BOTH equations"
    ],
    workedExamples: [
      {
        problem: "Solve: x + y = 10 and x - y = 4",
        steps: [
          "Using elimination - add the equations:",
          "(x + y) + (x - y) = 10 + 4",
          "2x = 14",
          "x = 7",
          "Substitute x = 7 into x + y = 10:",
          "7 + y = 10",
          "y = 3",
          "Check in second equation: 7 - 3 = 4 ✓"
        ],
        answer: "x = 7, y = 3"
      },
      {
        problem: "Solve: y = 2x + 1 and x + y = 7",
        steps: [
          "Using substitution - y is already the subject in equation 1",
          "Substitute y = 2x + 1 into x + y = 7:",
          "x + (2x + 1) = 7",
          "3x + 1 = 7",
          "3x = 6",
          "x = 2",
          "Find y: y = 2(2) + 1 = 5"
        ],
        answer: "x = 2, y = 5"
      }
    ],
    commonMistakes: [
      "Forgetting to find BOTH variables",
      "Making sign errors when subtracting equations",
      "Not checking the answer in BOTH original equations"
    ],
    tips: [
      "Elimination is often faster when coefficients are already similar",
      "Substitution is good when one variable is already isolated (like y = ...)"
    ]
  },

  // Year 9 - Measurement & Geometry
  "y9-pythagoras-theorem": {
    explanation: `Pythagoras' Theorem applies to right-angled triangles only. It describes the relationship between the three sides.

The longest side (opposite the right angle) is called the hypotenuse (c).
The other two sides are called the legs (a and b).

The theorem states: a² + b² = c²

This means: the square of the hypotenuse equals the sum of the squares of the other two sides.

You can use this to:
• Find the hypotenuse when you know both legs
• Find a leg when you know the hypotenuse and one leg`,
    keyFormulas: [
      "a² + b² = c² (c is the hypotenuse)",
      "c = √(a² + b²) (finding hypotenuse)",
      "a = √(c² - b²) (finding a leg)"
    ],
    workedExamples: [
      {
        problem: "Find the hypotenuse of a right triangle with legs 3 cm and 4 cm",
        steps: [
          "Identify: a = 3, b = 4, find c",
          "Use a² + b² = c²",
          "3² + 4² = c²",
          "9 + 16 = c²",
          "25 = c²",
          "c = √25 = 5"
        ],
        answer: "Hypotenuse = 5 cm"
      },
      {
        problem: "A ladder is 10 m long and reaches 8 m up a wall. How far from the wall is the base?",
        steps: [
          "The ladder is the hypotenuse (c = 10)",
          "The wall height is one leg (a = 8)",
          "Find the distance from wall (b)",
          "a² + b² = c²",
          "8² + b² = 10²",
          "64 + b² = 100",
          "b² = 36",
          "b = 6"
        ],
        answer: "6 m from the wall"
      }
    ],
    commonMistakes: [
      "Using the formula on non-right-angled triangles",
      "Forgetting to take the square root at the end",
      "Putting the hypotenuse in the wrong position in the formula"
    ],
    tips: [
      "The hypotenuse is ALWAYS the longest side and ALWAYS opposite the right angle",
      "Common Pythagorean triples to remember: 3-4-5, 5-12-13, 8-15-17"
    ]
  },

  "y9-pythagoras-applications": {
    explanation: `Pythagoras' Theorem has many real-world applications. Any time you have a right angle and know two measurements, you can find the third.

Common applications include:
• Finding diagonal distances (across a rectangle)
• Calculating heights and distances in real-life scenarios
• Navigation and mapping
• Construction and building

The key is to identify the right triangle hidden in the problem.`,
    keyFormulas: [
      "Diagonal of rectangle: d = √(length² + width²)",
      "Distance between two points: d = √((x₂-x₁)² + (y₂-y₁)²)",
      "a² + b² = c² for any right triangle"
    ],
    workedExamples: [
      {
        problem: "Find the diagonal of a 6 m × 8 m rectangular room",
        steps: [
          "The diagonal forms a right triangle with the length and width",
          "Length = 6 m, Width = 8 m",
          "d² = 6² + 8²",
          "d² = 36 + 64",
          "d² = 100",
          "d = 10 m"
        ],
        answer: "Diagonal = 10 m"
      },
      {
        problem: "Find the distance between points (1, 2) and (4, 6)",
        steps: [
          "Use the distance formula based on Pythagoras",
          "Horizontal distance: 4 - 1 = 3",
          "Vertical distance: 6 - 2 = 4",
          "d = √(3² + 4²)",
          "d = √(9 + 16) = √25 = 5"
        ],
        answer: "Distance = 5 units"
      }
    ],
    commonMistakes: [
      "Not identifying which length is the hypotenuse",
      "Forgetting to square the numbers before adding",
      "Using the wrong sides of the shape"
    ],
    tips: [
      "Draw a diagram first and mark the right angle",
      "The diagonal of a rectangle always creates two right triangles"
    ]
  },

  "y9-perimeter-area-volume": {
    explanation: `These are three different ways to measure shapes and objects:

Perimeter is the total distance around a 2D shape. Add up all the sides.

Area is the amount of surface a 2D shape covers. Measured in square units (cm², m²).

Volume is the amount of space a 3D object takes up. Measured in cubic units (cm³, m³).

For rectangular prisms (boxes):
• Volume = length × width × height
• Surface Area = 2(lw + lh + wh)`,
    keyFormulas: [
      "Rectangle: Area = length × width, Perimeter = 2(l + w)",
      "Triangle: Area = ½ × base × height",
      "Circle: Area = πr², Circumference = 2πr",
      "Rectangular prism: Volume = l × w × h",
      "Cylinder: Volume = πr²h"
    ],
    workedExamples: [
      {
        problem: "Find the perimeter and area of a rectangle 8 cm by 5 cm",
        steps: [
          "Perimeter = 2(length + width)",
          "Perimeter = 2(8 + 5) = 2 × 13 = 26 cm",
          "Area = length × width",
          "Area = 8 × 5 = 40 cm²"
        ],
        answer: "Perimeter = 26 cm, Area = 40 cm²"
      },
      {
        problem: "Find the volume of a box 4 m × 3 m × 2 m",
        steps: [
          "Volume = length × width × height",
          "Volume = 4 × 3 × 2",
          "Volume = 24 m³"
        ],
        answer: "Volume = 24 m³"
      }
    ],
    commonMistakes: [
      "Confusing perimeter (distance around) with area (surface)",
      "Forgetting to use square units for area and cubic units for volume",
      "Using diameter instead of radius in circle formulas"
    ],
    tips: [
      "Perimeter uses + (adding sides), Area uses × (multiplying)",
      "Always include the correct units in your answer"
    ]
  },

  "y9-surface-area-prisms": {
    explanation: `Surface area is the total area of all the faces of a 3D shape. Think of it as the amount of wrapping paper needed to cover the object.

For prisms:
1. Identify all the faces
2. Calculate the area of each face
3. Add them all together

A rectangular prism has 6 faces (3 pairs of identical rectangles).
A triangular prism has 5 faces (2 triangular ends + 3 rectangular sides).`,
    keyFormulas: [
      "Surface Area of rectangular prism = 2(lw + lh + wh)",
      "Surface Area of triangular prism = 2(triangle area) + (perimeter of triangle × length)",
      "Surface Area of cylinder = 2πr² + 2πrh"
    ],
    workedExamples: [
      {
        problem: "Find the surface area of a box 5 cm × 4 cm × 3 cm",
        steps: [
          "A box has 6 faces in 3 pairs:",
          "Top and bottom: 2 × (5 × 4) = 40 cm²",
          "Front and back: 2 × (5 × 3) = 30 cm²",
          "Left and right: 2 × (4 × 3) = 24 cm²",
          "Total = 40 + 30 + 24 = 94 cm²"
        ],
        answer: "Surface Area = 94 cm²"
      }
    ],
    commonMistakes: [
      "Forgetting to count all faces",
      "Confusing surface area with volume",
      "Not doubling when there are pairs of identical faces"
    ],
    tips: [
      "Draw or unfold the shape (net) to see all the faces",
      "Check: a rectangular prism always has 6 faces"
    ]
  },

  // Year 9 - Statistics & Probability
  "y9-data-display": {
    explanation: `Data can be displayed in many ways. The best display depends on what you want to show.

Common displays:
• Column/Bar graphs - comparing categories
• Line graphs - showing change over time
• Pie charts - showing parts of a whole
• Histograms - showing distribution of continuous data
• Dot plots - simple display of individual values

When reading graphs:
1. Check the title and axes labels
2. Look at the scale carefully
3. Identify patterns and trends`,
    keyFormulas: [
      "Percentage for pie chart segment = (value ÷ total) × 100",
      "Frequency = number of times a value occurs"
    ],
    workedExamples: [
      {
        problem: "A survey of 20 students found: 8 prefer summer, 6 prefer winter, 4 prefer autumn, 2 prefer spring. Calculate the percentage for a pie chart.",
        steps: [
          "Total = 20 students",
          "Summer: (8 ÷ 20) × 100 = 40%",
          "Winter: (6 ÷ 20) × 100 = 30%",
          "Autumn: (4 ÷ 20) × 100 = 20%",
          "Spring: (2 ÷ 20) × 100 = 10%",
          "Check: 40 + 30 + 20 + 10 = 100% ✓"
        ],
        answer: "Summer 40%, Winter 30%, Autumn 20%, Spring 10%"
      }
    ],
    commonMistakes: [
      "Not reading the scale correctly",
      "Choosing a graph type that doesn't suit the data",
      "Forgetting to include labels and titles"
    ],
    tips: [
      "Use bar graphs for categories, line graphs for time series",
      "Pie charts work best when you have a small number of categories"
    ]
  },

  "y9-mean-median-mode-range": {
    explanation: `These are measures of centre (average) and spread that summarize a data set:

Mean (average): Add all values and divide by how many there are.

Median: The middle value when data is arranged in order.
• If there's an even number of values, take the average of the two middle values.

Mode: The most frequent value (can have no mode, one mode, or multiple modes).

Range: The difference between highest and lowest values. Shows how spread out the data is.`,
    keyFormulas: [
      "Mean = sum of all values ÷ number of values",
      "Median = middle value (after ordering)",
      "Mode = most common value",
      "Range = highest value - lowest value"
    ],
    workedExamples: [
      {
        problem: "Find mean, median, mode, and range: 3, 7, 5, 3, 9, 5, 3",
        steps: [
          "Order the data: 3, 3, 3, 5, 5, 7, 9",
          "Mean = (3+3+3+5+5+7+9) ÷ 7 = 35 ÷ 7 = 5",
          "Median = middle value = 5 (4th value of 7)",
          "Mode = 3 (appears 3 times, most frequent)",
          "Range = 9 - 3 = 6"
        ],
        answer: "Mean = 5, Median = 5, Mode = 3, Range = 6"
      }
    ],
    commonMistakes: [
      "Forgetting to order data before finding median",
      "Finding median position wrong with even number of values",
      "Confusing mean and median"
    ],
    tips: [
      "Mean is affected by extreme values; median is not",
      "A data set can have no mode if all values appear equally"
    ]
  },

  "y9-probability-intro": {
    explanation: `Probability measures how likely something is to happen, expressed as a number from 0 to 1.

• Probability of 0 = impossible (it will never happen)
• Probability of 1 = certain (it will definitely happen)
• Probability of 0.5 = equally likely to happen or not

Probability can be written as a fraction, decimal, or percentage.

Basic probability formula:
P(event) = number of favourable outcomes ÷ total number of possible outcomes`,
    keyFormulas: [
      "P(event) = favourable outcomes ÷ total outcomes",
      "P(not A) = 1 - P(A)",
      "Probabilities of all outcomes add to 1"
    ],
    workedExamples: [
      {
        problem: "What is the probability of rolling an even number on a fair die?",
        steps: [
          "Total outcomes on a die: 1, 2, 3, 4, 5, 6 (6 outcomes)",
          "Favourable outcomes (even): 2, 4, 6 (3 outcomes)",
          "P(even) = 3/6 = 1/2 = 0.5 = 50%"
        ],
        answer: "P(even) = 1/2 or 0.5 or 50%"
      },
      {
        problem: "A bag has 3 red and 5 blue marbles. What's the probability of picking blue?",
        steps: [
          "Total marbles = 3 + 5 = 8",
          "Favourable (blue) = 5",
          "P(blue) = 5/8 = 0.625 = 62.5%"
        ],
        answer: "P(blue) = 5/8"
      }
    ],
    commonMistakes: [
      "Probability greater than 1 or less than 0 is impossible",
      "Not counting all possible outcomes",
      "Confusing probability with odds"
    ],
    tips: [
      "Always express probability as a number between 0 and 1",
      "If asked for P(not happening), subtract from 1"
    ]
  },

  "y9-experimental-theoretical-probability": {
    explanation: `There are two types of probability:

Theoretical probability is what should happen in theory, based on equally likely outcomes.
Example: P(heads) = 1/2 because a fair coin has 2 equally likely outcomes.

Experimental probability is what actually happens when you do an experiment.
It's calculated from real results: successful trials ÷ total trials.

The more trials you do, the closer experimental probability gets to theoretical probability. This is called the Law of Large Numbers.`,
    keyFormulas: [
      "Theoretical P(A) = favourable outcomes ÷ total possible outcomes",
      "Experimental P(A) = number of times A occurred ÷ number of trials",
      "Expected frequency = probability × number of trials"
    ],
    workedExamples: [
      {
        problem: "A coin is flipped 50 times and lands heads 28 times. Find the experimental probability of heads.",
        steps: [
          "Number of heads (successful trials) = 28",
          "Total flips (total trials) = 50",
          "Experimental P(heads) = 28/50 = 0.56 = 56%",
          "Note: Theoretical is 0.5, so our result is close but not exact"
        ],
        answer: "Experimental P(heads) = 28/50 = 56%"
      }
    ],
    commonMistakes: [
      "Expecting experimental probability to exactly equal theoretical",
      "Too few trials leading to unreliable experimental probability",
      "Confusing the two types of probability"
    ],
    tips: [
      "More trials = more reliable experimental probability",
      "Small differences between experimental and theoretical are normal"
    ]
  },

  // Year 10 - Algebra
  "y10-algebraic-expansion-factorisation": {
    explanation: `Expansion is removing brackets by multiplying:
• Distributive law: a(b + c) = ab + ac
• FOIL for two brackets: (a + b)(c + d) = ac + ad + bc + bd

Factorisation is the reverse - putting expressions INTO brackets by finding common factors.

Common factorising:
• Take out the highest common factor (HCF)
• Look for patterns like difference of squares: a² - b² = (a + b)(a - b)`,
    keyFormulas: [
      "a(b + c) = ab + ac",
      "(a + b)(c + d) = ac + ad + bc + bd",
      "(a + b)² = a² + 2ab + b²",
      "(a - b)² = a² - 2ab + b²",
      "a² - b² = (a + b)(a - b) (Difference of squares)"
    ],
    workedExamples: [
      {
        problem: "Expand (x + 3)(x + 5)",
        steps: [
          "Use FOIL: First, Outer, Inner, Last",
          "First: x × x = x²",
          "Outer: x × 5 = 5x",
          "Inner: 3 × x = 3x",
          "Last: 3 × 5 = 15",
          "Combine: x² + 5x + 3x + 15 = x² + 8x + 15"
        ],
        answer: "x² + 8x + 15"
      },
      {
        problem: "Factorise 3x² + 12x",
        steps: [
          "Find the HCF of 3x² and 12x",
          "HCF of 3 and 12 is 3",
          "HCF of x² and x is x",
          "Overall HCF = 3x",
          "3x² + 12x = 3x(x + 4)"
        ],
        answer: "3x(x + 4)"
      }
    ],
    commonMistakes: [
      "Forgetting to multiply all terms when expanding",
      "Not finding the highest common factor when factorising",
      "Sign errors with negative terms"
    ],
    tips: [
      "Check expansion by substituting a number (like x = 1) into both forms",
      "When factorising, always check by expanding your answer"
    ]
  },

  "y10-quadratic-expressions": {
    explanation: `A quadratic expression has the form ax² + bx + c, where a ≠ 0.

Key features:
• The highest power is 2 (that's what makes it quadratic)
• 'a' is the coefficient of x² (leading coefficient)
• 'b' is the coefficient of x
• 'c' is the constant term

Examples:
• x² + 5x + 6 → a = 1, b = 5, c = 6
• 2x² - 3x → a = 2, b = -3, c = 0
• 4x² - 9 → a = 4, b = 0, c = -9`,
    keyFormulas: [
      "Standard form: ax² + bx + c (where a ≠ 0)",
      "Factorised form: a(x - p)(x - q)",
      "Sum of roots: p + q = -b/a",
      "Product of roots: p × q = c/a"
    ],
    workedExamples: [
      {
        problem: "Identify a, b, and c in 3x² - 7x + 2",
        steps: [
          "Compare with ax² + bx + c",
          "The coefficient of x² is 3, so a = 3",
          "The coefficient of x is -7, so b = -7",
          "The constant term is 2, so c = 2"
        ],
        answer: "a = 3, b = -7, c = 2"
      },
      {
        problem: "Factorise x² + 7x + 12",
        steps: [
          "Find two numbers that multiply to 12 and add to 7",
          "Factors of 12: 1×12, 2×6, 3×4",
          "3 + 4 = 7 ✓",
          "x² + 7x + 12 = (x + 3)(x + 4)"
        ],
        answer: "(x + 3)(x + 4)"
      }
    ],
    commonMistakes: [
      "Confusing the coefficients (a, b, c)",
      "Forgetting that a cannot equal 0",
      "Sign errors when identifying negative coefficients"
    ],
    tips: [
      "If there's no x term shown, b = 0",
      "If there's no constant, c = 0"
    ]
  },

  "y10-solving-quadratic-equations": {
    explanation: `A quadratic equation is set equal to something (usually 0): ax² + bx + c = 0

Solving by factorisation:
1. Get all terms on one side (equals 0)
2. Factorise the quadratic
3. Use the zero-product property: if AB = 0, then A = 0 or B = 0
4. Solve each factor

There are usually two solutions (roots), but sometimes one or none.`,
    keyFormulas: [
      "If (x - p)(x - q) = 0, then x = p or x = q",
      "Zero-product property: if AB = 0, then A = 0 or B = 0",
      "Standard form: ax² + bx + c = 0"
    ],
    workedExamples: [
      {
        problem: "Solve x² + 5x + 6 = 0",
        steps: [
          "Factorise: Find numbers that multiply to 6 and add to 5",
          "2 × 3 = 6 and 2 + 3 = 5 ✓",
          "x² + 5x + 6 = (x + 2)(x + 3) = 0",
          "Zero-product property:",
          "x + 2 = 0 → x = -2",
          "x + 3 = 0 → x = -3"
        ],
        answer: "x = -2 or x = -3"
      },
      {
        problem: "Solve x² - 9 = 0",
        steps: [
          "Recognise as difference of squares: a² - b² = (a+b)(a-b)",
          "x² - 9 = x² - 3² = (x + 3)(x - 3) = 0",
          "x + 3 = 0 → x = -3",
          "x - 3 = 0 → x = 3"
        ],
        answer: "x = 3 or x = -3"
      }
    ],
    commonMistakes: [
      "Forgetting there are usually TWO solutions",
      "Dividing by x instead of using zero-product property",
      "Not rearranging to equal 0 first"
    ],
    tips: [
      "Always check answers by substituting back into original equation",
      "Look for difference of squares pattern: a² - b²"
    ]
  },

  "y10-linear-quadratic-relationships": {
    explanation: `Linear relationships create straight-line graphs. The rate of change (gradient) is constant.
• Written as y = mx + c
• Graph is a straight line

Quadratic relationships create curved graphs called parabolas.
• Written as y = ax² + bx + c
• Graph is a U-shape (or upside-down U if a is negative)
• The rate of change is NOT constant - it increases or decreases

Key differences:
• Linear: constant slope, straight line
• Quadratic: changing slope, curved parabola`,
    keyFormulas: [
      "Linear: y = mx + c (straight line)",
      "Quadratic: y = ax² + bx + c (parabola)",
      "Linear rate of change = m (constant)",
      "Quadratic: rate of change varies"
    ],
    workedExamples: [
      {
        problem: "Is y = 3x² + 2 linear or quadratic?",
        steps: [
          "Look for the highest power of x",
          "We have x² (power of 2)",
          "The highest power is 2, so it's quadratic",
          "The graph will be a parabola"
        ],
        answer: "Quadratic (parabola)"
      },
      {
        problem: "Compare the graphs of y = 2x and y = x²",
        steps: [
          "y = 2x is linear (straight line through origin with gradient 2)",
          "y = x² is quadratic (U-shaped parabola with vertex at origin)",
          "They intersect at x = 0 and x = 2",
          "For 0 < x < 2: the line is above the parabola",
          "For x > 2: the parabola is above the line"
        ],
        answer: "Linear is straight; quadratic is curved"
      }
    ],
    commonMistakes: [
      "Assuming quadratic graphs are straight",
      "Forgetting that quadratics curve",
      "Not recognising when a relationship is quadratic"
    ],
    tips: [
      "If there's an x² term, it's quadratic (curved)",
      "Real-world examples: distance fallen (quadratic) vs constant speed (linear)"
    ]
  },

  // Year 10 - Functions & Graphs
  "y10-linear-functions": {
    explanation: `A function is a rule that gives exactly one output for each input. Linear functions have the form f(x) = mx + c.

Function notation: f(x) means "the function of x" or "f at x"
• f(2) means substitute x = 2 into the function
• If f(x) = 3x + 1, then f(2) = 3(2) + 1 = 7

Key features of linear functions:
• Gradient (m) = rate of change
• y-intercept (c) = where the line crosses the y-axis
• Domain = possible x values
• Range = possible y values`,
    keyFormulas: [
      "f(x) = mx + c (linear function)",
      "Gradient = rise/run = (y₂ - y₁)/(x₂ - x₁)",
      "y-intercept: f(0) = c",
      "x-intercept: solve f(x) = 0"
    ],
    workedExamples: [
      {
        problem: "If f(x) = 2x - 5, find f(3) and f(-1)",
        steps: [
          "f(3) = 2(3) - 5 = 6 - 5 = 1",
          "f(-1) = 2(-1) - 5 = -2 - 5 = -7"
        ],
        answer: "f(3) = 1, f(-1) = -7"
      },
      {
        problem: "Find the gradient and y-intercept of f(x) = -3x + 7",
        steps: [
          "Compare with f(x) = mx + c",
          "Gradient (m) = -3",
          "y-intercept (c) = 7",
          "The line goes downward (negative gradient)",
          "It crosses the y-axis at (0, 7)"
        ],
        answer: "Gradient = -3, y-intercept = 7"
      }
    ],
    commonMistakes: [
      "Confusing f(x) with f × x",
      "Sign errors when substituting negative numbers",
      "Mixing up gradient and y-intercept"
    ],
    tips: [
      "f(x) is just another way of writing y",
      "Read f(3) as 'f of 3' - substitute 3 for x"
    ]
  },

  "y10-quadratic-functions": {
    explanation: `Quadratic functions have the form f(x) = ax² + bx + c and create parabola-shaped graphs.

Key features:
• Vertex (turning point): the highest or lowest point
• If a > 0: parabola opens upward (minimum point)
• If a < 0: parabola opens downward (maximum point)
• Axis of symmetry: a vertical line through the vertex at x = -b/(2a)
• The larger |a|, the narrower the parabola`,
    keyFormulas: [
      "Standard form: f(x) = ax² + bx + c",
      "Axis of symmetry: x = -b/(2a)",
      "Vertex x-coordinate: x = -b/(2a)",
      "Vertex y-coordinate: substitute x into f(x)"
    ],
    workedExamples: [
      {
        problem: "Sketch y = x² - 4x + 3",
        steps: [
          "a = 1 > 0, so parabola opens upward",
          "Axis of symmetry: x = -(-4)/(2×1) = 4/2 = 2",
          "Vertex: when x = 2, y = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1",
          "Vertex is at (2, -1)",
          "y-intercept: when x = 0, y = 3, point (0, 3)",
          "x-intercepts: solve x² - 4x + 3 = 0",
          "(x - 1)(x - 3) = 0, so x = 1 or x = 3"
        ],
        answer: "U-shaped parabola, vertex (2, -1), crossing x-axis at 1 and 3"
      }
    ],
    commonMistakes: [
      "Confusing direction based on sign of a",
      "Calculating vertex incorrectly",
      "Plotting too few points"
    ],
    tips: [
      "Always find the vertex first - it's the key point",
      "If a > 0, the parabola smiles; if a < 0, it frowns"
    ]
  },

  "y10-graph-transformations": {
    explanation: `Transformations change the position or shape of a graph:

Translations (sliding):
• y = f(x) + k shifts UP by k units
• y = f(x) - k shifts DOWN by k units
• y = f(x - h) shifts RIGHT by h units
• y = f(x + h) shifts LEFT by h units

Reflections:
• y = -f(x) reflects in the x-axis
• y = f(-x) reflects in the y-axis

Stretches:
• y = af(x) stretches vertically by factor a`,
    keyFormulas: [
      "y = f(x) + k: vertical shift up by k",
      "y = f(x - h): horizontal shift right by h",
      "y = -f(x): reflection in x-axis",
      "y = af(x): vertical stretch by factor a"
    ],
    workedExamples: [
      {
        problem: "Describe the transformation from y = x² to y = (x - 3)² + 2",
        steps: [
          "Compare y = (x - 3)² + 2 with y = x²",
          "The (x - 3) means shift RIGHT by 3",
          "The +2 means shift UP by 2",
          "The vertex moves from (0, 0) to (3, 2)"
        ],
        answer: "Shift right 3 and up 2"
      },
      {
        problem: "The graph of y = x² is transformed to y = -x² + 4. Describe the transformations.",
        steps: [
          "The negative sign reflects the parabola in the x-axis",
          "The +4 shifts the graph up by 4",
          "Original: U-shaped with vertex (0, 0)",
          "Transformed: ∩-shaped with vertex (0, 4)"
        ],
        answer: "Reflect in x-axis and shift up 4"
      }
    ],
    commonMistakes: [
      "Getting horizontal shift direction wrong (it's opposite to the sign)",
      "Confusing vertical and horizontal transformations",
      "Doing transformations in the wrong order"
    ],
    tips: [
      "For horizontal shifts: (x - 3) goes RIGHT, (x + 3) goes LEFT",
      "Changes outside f(x) are vertical; changes inside f(x) are horizontal"
    ]
  },

  "y10-solving-equations-graphically": {
    explanation: `Equations can be solved by finding where graphs intersect.

To solve f(x) = g(x) graphically:
1. Graph both y = f(x) and y = g(x)
2. Find where they intersect
3. The x-coordinates of intersection points are the solutions

To solve f(x) = 0:
• Find where the graph crosses the x-axis
• These are called x-intercepts or zeros`,
    keyFormulas: [
      "Intersection of y = f(x) and y = g(x): solve f(x) = g(x)",
      "x-intercepts: where y = 0 (graph crosses x-axis)",
      "y-intercept: where x = 0"
    ],
    workedExamples: [
      {
        problem: "Solve x² - 2x - 3 = 0 graphically",
        steps: [
          "Graph y = x² - 2x - 3",
          "Find the x-intercepts (where y = 0)",
          "From the graph, the curve crosses at x = -1 and x = 3",
          "Check algebraically: (-1)² - 2(-1) - 3 = 1 + 2 - 3 = 0 ✓",
          "(3)² - 2(3) - 3 = 9 - 6 - 3 = 0 ✓"
        ],
        answer: "x = -1 or x = 3"
      },
      {
        problem: "Use graphs to solve x² = 2x + 3",
        steps: [
          "Graph y = x² and y = 2x + 3 on the same axes",
          "The parabola and line intersect at two points",
          "Read the x-coordinates: x = -1 and x = 3",
          "These are the solutions"
        ],
        answer: "x = -1 or x = 3"
      }
    ],
    commonMistakes: [
      "Reading coordinates incorrectly from the graph",
      "Missing an intersection point",
      "Not graphing accurately enough"
    ],
    tips: [
      "Use a table of values to plot accurately",
      "Graphical solutions are estimates - check algebraically if possible"
    ]
  },

  // Year 10 - Measurement & Geometry
  "y10-trigonometry": {
    explanation: `Trigonometry uses ratios to relate angles and sides in right-angled triangles.

The three main ratios (SOH CAH TOA):
• Sin θ = Opposite / Hypotenuse (SOH)
• Cos θ = Adjacent / Hypotenuse (CAH)
• Tan θ = Opposite / Adjacent (TOA)

Where:
• θ (theta) is the angle you're working with
• Opposite is the side across from θ
• Adjacent is the side next to θ (not the hypotenuse)
• Hypotenuse is the longest side (opposite the right angle)`,
    keyFormulas: [
      "sin θ = opposite/hypotenuse",
      "cos θ = adjacent/hypotenuse",
      "tan θ = opposite/adjacent",
      "To find angle: θ = sin⁻¹(ratio), cos⁻¹(ratio), or tan⁻¹(ratio)"
    ],
    workedExamples: [
      {
        problem: "Find the opposite side if hypotenuse = 10 cm and angle = 30°",
        steps: [
          "We know hypotenuse and angle, want opposite",
          "Use sin (SOH): sin θ = opposite/hypotenuse",
          "sin 30° = opposite/10",
          "opposite = 10 × sin 30°",
          "opposite = 10 × 0.5 = 5 cm"
        ],
        answer: "Opposite = 5 cm"
      },
      {
        problem: "Find angle θ if opposite = 4 and adjacent = 3",
        steps: [
          "We know opposite and adjacent, want angle",
          "Use tan (TOA): tan θ = opposite/adjacent",
          "tan θ = 4/3 = 1.333...",
          "θ = tan⁻¹(1.333)",
          "θ ≈ 53.1°"
        ],
        answer: "θ ≈ 53.1°"
      }
    ],
    commonMistakes: [
      "Confusing opposite and adjacent sides",
      "Calculator in wrong mode (degrees vs radians)",
      "Using the wrong trig ratio"
    ],
    tips: [
      "SOH CAH TOA - memorise this!",
      "Label the triangle with O, A, H first before choosing a ratio",
      "Make sure your calculator is in DEGREE mode"
    ]
  },

  "y10-trigonometry-applications": {
    explanation: `Trigonometry is used to find heights and distances in real-world problems.

Common applications:
• Angles of elevation (looking up)
• Angles of depression (looking down)
• Finding heights of buildings, trees, mountains
• Navigation and surveying

Key terms:
• Angle of elevation: angle above horizontal (looking up)
• Angle of depression: angle below horizontal (looking down)
• These angles are always measured from the horizontal`,
    keyFormulas: [
      "Angle of elevation = angle of depression (alternate angles)",
      "Height = distance × tan(angle of elevation)",
      "Distance = height ÷ tan(angle)"
    ],
    workedExamples: [
      {
        problem: "From a point 50 m from a building, the angle of elevation to the top is 35°. Find the height.",
        steps: [
          "Draw a right triangle",
          "Adjacent (distance) = 50 m",
          "Angle = 35°",
          "Height = opposite",
          "tan 35° = height/50",
          "height = 50 × tan 35°",
          "height = 50 × 0.7002 ≈ 35 m"
        ],
        answer: "Height ≈ 35 m"
      },
      {
        problem: "A pilot at 1000 m altitude sees an airport at a 15° angle of depression. How far away is the airport?",
        steps: [
          "Angle of depression = 15°",
          "Height (opposite) = 1000 m",
          "Want horizontal distance (adjacent)",
          "tan 15° = 1000/distance",
          "distance = 1000/tan 15°",
          "distance = 1000/0.2679 ≈ 3732 m"
        ],
        answer: "Distance ≈ 3.73 km"
      }
    ],
    commonMistakes: [
      "Measuring angle from the wrong line (not horizontal)",
      "Confusing angle of elevation with angle of depression",
      "Not drawing a diagram first"
    ],
    tips: [
      "Always draw a diagram with the right angle marked",
      "Angle of depression from A = angle of elevation from B"
    ]
  },

  "y10-circle-geometry": {
    explanation: `Circle geometry involves understanding parts of circles and their relationships.

Key parts:
• Radius (r): distance from centre to edge
• Diameter (d): distance across through centre (d = 2r)
• Circumference: distance around the circle (C = 2πr = πd)
• Arc: part of the circumference
• Chord: straight line connecting two points on the circle
• Sector: "pizza slice" region
• Segment: region between a chord and arc`,
    keyFormulas: [
      "Circumference: C = 2πr = πd",
      "Area of circle: A = πr²",
      "Arc length: (θ/360) × 2πr (where θ is angle in degrees)",
      "Sector area: (θ/360) × πr²"
    ],
    workedExamples: [
      {
        problem: "Find the circumference and area of a circle with radius 7 cm",
        steps: [
          "Circumference = 2πr = 2 × π × 7 = 14π ≈ 43.98 cm",
          "Area = πr² = π × 7² = 49π ≈ 153.94 cm²"
        ],
        answer: "C ≈ 44 cm, A ≈ 154 cm²"
      },
      {
        problem: "Find the area of a sector with radius 10 cm and angle 72°",
        steps: [
          "Sector area = (θ/360) × πr²",
          "= (72/360) × π × 10²",
          "= 0.2 × 100π",
          "= 20π ≈ 62.83 cm²"
        ],
        answer: "Sector area ≈ 62.8 cm²"
      }
    ],
    commonMistakes: [
      "Confusing radius and diameter",
      "Forgetting to square the radius in area formula",
      "Not using the fraction of the circle for sectors"
    ],
    tips: [
      "Remember: diameter = 2 × radius",
      "π ≈ 3.14159... (use π button on calculator for accuracy)"
    ]
  },

  "y10-composite-shapes": {
    explanation: `Composite shapes are made up of multiple simpler shapes combined together.

To find the area or volume:
1. Break the shape into simple parts (rectangles, triangles, circles, etc.)
2. Calculate each part separately
3. Add or subtract as needed

Sometimes you need to subtract a shape that's been "cut out" from another.`,
    keyFormulas: [
      "Total area = sum of individual areas",
      "Area with hole = outer area - inner area",
      "Volume of prism = base area × height"
    ],
    workedExamples: [
      {
        problem: "Find the area of an L-shaped figure made of a 8×4 rectangle and a 4×3 rectangle joined together",
        steps: [
          "Break into two rectangles",
          "Rectangle 1: 8 × 4 = 32 cm²",
          "Rectangle 2: 4 × 3 = 12 cm²",
          "Total area = 32 + 12 = 44 cm²"
        ],
        answer: "Area = 44 cm²"
      },
      {
        problem: "A square has sides of 10 cm with a circular hole of radius 2 cm. Find the remaining area.",
        steps: [
          "Square area = 10 × 10 = 100 cm²",
          "Circle area = π × 2² = 4π ≈ 12.57 cm²",
          "Remaining area = 100 - 12.57 ≈ 87.43 cm²"
        ],
        answer: "Remaining area ≈ 87.4 cm²"
      }
    ],
    commonMistakes: [
      "Adding when you should subtract (for holes)",
      "Missing part of the composite shape",
      "Not breaking the shape down correctly"
    ],
    tips: [
      "Draw the shape and divide it with dotted lines",
      "Label each part with its dimensions"
    ]
  },

  // Year 10 - Statistics & Probability
  "y10-two-way-tables": {
    explanation: `Two-way tables display data that has been classified by two categories. They help us see relationships between variables.

The table has:
• Rows for one category
• Columns for another category
• Cells showing frequencies (counts)
• Row totals and column totals
• Grand total (bottom right)

From two-way tables, we can calculate conditional probabilities and see patterns in data.`,
    keyFormulas: [
      "Row total = sum of values in that row",
      "Column total = sum of values in that column",
      "Grand total = sum of all values",
      "Probability = frequency ÷ total"
    ],
    workedExamples: [
      {
        problem: "In a survey: 30 boys like sport, 20 boys don't. 25 girls like sport, 15 don't. Create a two-way table.",
        steps: [
          "          | Like | Don't | Total",
          "Boys      |  30  |   20  |   50",
          "Girls     |  25  |   15  |   40",
          "Total     |  55  |   35  |   90",
          "Check: 30+20+25+15 = 90 ✓"
        ],
        answer: "See table above. Total surveyed = 90"
      },
      {
        problem: "Using the table above, what percentage of students like sport?",
        steps: [
          "Students who like sport = 55",
          "Total students = 90",
          "Percentage = (55/90) × 100 ≈ 61.1%"
        ],
        answer: "About 61% of students like sport"
      }
    ],
    commonMistakes: [
      "Adding totals incorrectly",
      "Confusing row and column totals",
      "Using the wrong total for percentage calculations"
    ],
    tips: [
      "Always check that row and column totals add to the grand total",
      "Use the table to organise data before calculating probabilities"
    ]
  },

  "y10-relative-frequency": {
    explanation: `Relative frequency is another way to express how often something occurs, as a proportion or percentage of the total.

Relative frequency = frequency ÷ total number of observations

Unlike raw frequency (count), relative frequency:
• Is always between 0 and 1 (or 0% to 100%)
• Allows comparison between different-sized data sets
• Estimates probability from experimental data`,
    keyFormulas: [
      "Relative frequency = frequency ÷ total",
      "Sum of all relative frequencies = 1 (or 100%)",
      "Relative frequency ≈ probability (with enough trials)"
    ],
    workedExamples: [
      {
        problem: "In 200 coin flips, heads appeared 108 times. Find the relative frequency of heads.",
        steps: [
          "Relative frequency = frequency ÷ total",
          "Relative frequency of heads = 108 ÷ 200",
          "= 0.54 or 54%",
          "This is close to the theoretical 0.5 (50%)"
        ],
        answer: "Relative frequency = 0.54 or 54%"
      },
      {
        problem: "A spinner landed on red 15 times, blue 25 times, green 10 times. Find relative frequencies.",
        steps: [
          "Total spins = 15 + 25 + 10 = 50",
          "Red: 15/50 = 0.30 (30%)",
          "Blue: 25/50 = 0.50 (50%)",
          "Green: 10/50 = 0.20 (20%)",
          "Check: 0.30 + 0.50 + 0.20 = 1.00 ✓"
        ],
        answer: "Red: 30%, Blue: 50%, Green: 20%"
      }
    ],
    commonMistakes: [
      "Forgetting to divide by the total",
      "Relative frequencies not adding to 1",
      "Confusing relative frequency with probability"
    ],
    tips: [
      "Relative frequencies should always add up to 1 (or 100%)",
      "Use relative frequency to estimate probability from experiments"
    ]
  },

  "y10-probability-models": {
    explanation: `A probability model is a mathematical description of a random situation. It includes:
• Sample space: all possible outcomes
• Probability of each outcome

Simple probability rules:
• For equally likely outcomes: P(A) = favourable ÷ total
• For multiple events:
  - "And" (both happen): multiply probabilities
  - "Or" (at least one happens): add probabilities (if mutually exclusive)`,
    keyFormulas: [
      "P(A) = number of favourable outcomes ÷ total outcomes",
      "P(A and B) = P(A) × P(B) (for independent events)",
      "P(A or B) = P(A) + P(B) (for mutually exclusive events)",
      "P(not A) = 1 - P(A)"
    ],
    workedExamples: [
      {
        problem: "Two coins are flipped. Find P(both heads).",
        steps: [
          "Each coin: P(heads) = 1/2",
          "Coins are independent",
          "P(both heads) = P(H) × P(H)",
          "= 1/2 × 1/2 = 1/4 = 0.25"
        ],
        answer: "P(both heads) = 1/4 or 25%"
      },
      {
        problem: "A die is rolled. Find P(even or greater than 4).",
        steps: [
          "Even numbers: 2, 4, 6",
          "Greater than 4: 5, 6",
          "Note: 6 is in both (not mutually exclusive)",
          "Use: P(A or B) = P(A) + P(B) - P(A and B)",
          "= 3/6 + 2/6 - 1/6 = 4/6 = 2/3"
        ],
        answer: "P(even or >4) = 2/3"
      }
    ],
    commonMistakes: [
      "Adding probabilities when events aren't mutually exclusive",
      "Multiplying when events aren't independent",
      "Forgetting to subtract the overlap"
    ],
    tips: [
      "Draw a sample space diagram for complex problems",
      "'And' usually means multiply, 'Or' usually means add"
    ]
  },

  "y10-sampling-intro": {
    explanation: `Sampling is selecting a smaller group (sample) from a larger group (population) to learn about the whole population.

Types of sampling:
• Random sampling: every member has equal chance of selection
• Systematic sampling: select every nth member
• Stratified sampling: divide into groups, sample from each proportionally

Good samples are:
• Representative of the population
• Large enough to be reliable
• Selected without bias`,
    keyFormulas: [
      "Sample proportion ≈ population proportion (if sample is good)",
      "Stratified sample size = (group size/population) × total sample size"
    ],
    workedExamples: [
      {
        problem: "A school has 1000 students. Describe how to take a random sample of 100.",
        steps: [
          "Number all 1000 students from 1 to 1000",
          "Use a random number generator to select 100 different numbers",
          "The students with those numbers form the sample",
          "This ensures every student has equal chance of selection"
        ],
        answer: "Use random number generator to select 100 student numbers"
      },
      {
        problem: "A company has 200 managers and 800 workers. Take a stratified sample of 50.",
        steps: [
          "Total = 200 + 800 = 1000",
          "Managers: (200/1000) × 50 = 10 managers",
          "Workers: (800/1000) × 50 = 40 workers",
          "Sample 10 managers and 40 workers randomly"
        ],
        answer: "10 managers and 40 workers"
      }
    ],
    commonMistakes: [
      "Sample too small to be representative",
      "Selection bias (e.g., only sampling friends)",
      "Not maintaining proportions in stratified sampling"
    ],
    tips: [
      "Random sampling is the gold standard for avoiding bias",
      "Bigger samples are generally more reliable"
    ]
  }
};

// Function to get content for a topic
export function getTopicContent(topicId: string): LessonContent | null {
  return lessonContent[topicId] || null;
}
