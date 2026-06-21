export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: number;
  progress: number;
  level?: "core" | "10A";
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  topics: Topic[];
}

export interface YearLevel {
  id: string;
  name: string;
  description: string;
  icon: string;
  categories: Category[];
}

export const curriculum: YearLevel[] = [
  {
    id: "year-9",
    name: "Year 9 Mathematics",
    description: "Essential Mathematics — Victorian Curriculum: Number, Algebra, Geometry, Trigonometry, Measurement, Statistics, Probability & Algorithmic Thinking",
    icon: "📘",
    categories: [
      // ── Ch 1: Number & Financial Mathematics ──
      {
        id: "y9-ch1-number-finance",
        name: "Ch 1: Number & Financial Mathematics",
        icon: "💰",
        topics: [
          { id: "y9-integer-operations", title: "1A: Integer Operations", description: "Operations with positive and negative integers, order of operations.", icon: "🔢", lessons: 3, progress: 0 },
          { id: "y9-decimal-significant-figures", title: "1B: Decimal Places & Significant Figures", description: "Rounding to decimal places and significant figures.", icon: "🎯", lessons: 3, progress: 0 },
          { id: "y9-rational-numbers", title: "1C: Rational Numbers", description: "Understanding and working with rational numbers.", icon: "📐", lessons: 3, progress: 0 },
          { id: "y9-operations-fractions", title: "1D: Operations with Fractions", description: "Adding, subtracting, multiplying and dividing fractions.", icon: "🔣", lessons: 3, progress: 0 },
          { id: "y9-ratios-rates", title: "1E: Ratios, Rates & Best Buys", description: "Simplifying ratios, unit rates, and comparing best buys.", icon: "⚖️", lessons: 3, progress: 0 },
          { id: "y9-percentages-money", title: "1F: Percentages & Money", description: "Calculating percentages of amounts and financial applications.", icon: "💵", lessons: 3, progress: 0 },
          { id: "y9-percentage-increase-decrease", title: "1G: Percentage Increase & Decrease", description: "Applying percentage increases and decreases.", icon: "📊", lessons: 3, progress: 0 },
          { id: "y9-profits-discounts", title: "1H: Profits & Discounts", description: "Calculating profit, loss, mark-up and discount.", icon: "🏷️", lessons: 3, progress: 0 },
          { id: "y9-income", title: "1I: Income", description: "Wages, salaries, overtime, commission and allowances.", icon: "💼", lessons: 3, progress: 0 },
          { id: "y9-payg-tax", title: "1J: PAYG Income Tax System", description: "Understanding PAYG tax, tax brackets, and net income.", icon: "🏛️", lessons: 3, progress: 0 },
          { id: "y9-simple-interest", title: "1K: Simple Interest", description: "Calculating simple interest using I = PRT.", icon: "🏦", lessons: 3, progress: 0 },
          { id: "y9-compound-interest", title: "1L: Compound Interest & Depreciation", description: "Understanding compound interest and depreciation concepts.", icon: "📈", lessons: 3, progress: 0 },
          { id: "y9-compound-interest-formula", title: "1M: Using Formulas for Compound Interest", description: "Applying A = P(1 + r)ⁿ and depreciation formulas.", icon: "🧮", lessons: 3, progress: 0 },
        ]
      },
      // ── Ch 2: Algebra, Indices & Surds ──
      {
        id: "y9-ch2-algebra-indices",
        name: "Ch 2: Algebra, Indices & Surds",
        icon: "🔢",
        topics: [
          { id: "y9-algebraic-expressions", title: "2A: Algebraic Expressions", description: "Writing and interpreting algebraic expressions.", icon: "📝", lessons: 3, progress: 0 },
          { id: "y9-simplifying-expressions", title: "2B: Algebraic Manipulation", description: "Simplifying, expanding and factorising algebraic expressions.", icon: "✂️", lessons: 6, progress: 0 },
          { id: "y9-solving-linear-equations", title: "2C: Solving Linear Equations", description: "Solving equations with one variable, including equations with brackets.", icon: "➗", lessons: 6, progress: 0 },
          { id: "y9-equations-both-sides", title: "2D: Equations with Pronumerals on Both Sides", description: "Solving equations with variables on both sides.", icon: "⚖️", lessons: 3, progress: 0 },
          { id: "y9-index-notation", title: "2E: Index Notation", description: "Writing repeated multiplication using index form.", icon: "🔢", lessons: 3, progress: 0 },
          { id: "y9-laws-indices", title: "2F: Index Laws", description: "Multiplication, division, power of a power, zero index and negative indices.", icon: "📜", lessons: 9, progress: 0 },
          { id: "y9-fractional-indices", title: "2G: Fractional Indices", description: "Connecting fractional indices to roots.", icon: "½", lessons: 3, progress: 0 },
          { id: "y9-scientific-notation", title: "2H: Scientific Notation", description: "Expressing very large and very small numbers.", icon: "🔬", lessons: 3, progress: 0 },
          { id: "y9-significant-figures", title: "2I: Significant Figures", description: "Rounding to significant figures in context.", icon: "🎯", lessons: 3, progress: 0 },
          { id: "y9-surds-operations", title: "2J: Surds & Operations", description: "Simplifying surds and operations with surds.", icon: "√", lessons: 3, progress: 0 },
        ]
      },
      // ── Ch 3: Linear Relationships & Equations ──
      {
        id: "y9-ch3-linear",
        name: "Ch 3: Linear Relationships & Equations",
        icon: "📈",
        topics: [
          { id: "y9-intro-linear", title: "3A: Introduction to Linear Relationships", description: "Understanding what makes a relationship linear.", icon: "📊", lessons: 3, progress: 0 },
          { id: "y9-graphing-straight-lines", title: "3B: Linear Graphs", description: "Plotting linear equations, calculating gradient, and working with y = mx + c.", icon: "📉", lessons: 9, progress: 0 },
          { id: "y9-direct-proportion", title: "3C: Direct Proportion", description: "Understanding y = kx and proportional relationships.", icon: "🔗", lessons: 3, progress: 0 },
          { id: "y9-equation-of-line", title: "3D: Equation of a Line", description: "Finding the equation given points or gradient.", icon: "📝", lessons: 3, progress: 0 },
          { id: "y9-midpoint-distance", title: "3E: Midpoint & Distance", description: "Midpoint and distance formulas on the Cartesian plane.", icon: "📍", lessons: 3, progress: 0 },
          { id: "y9-parallel-perpendicular", title: "3F: Parallel & Perpendicular Lines", description: "Gradient conditions for parallel and perpendicular lines.", icon: "➕", lessons: 3, progress: 0 },
          { id: "y9-simultaneous-graphical", title: "3G: Graphical Solutions of Simultaneous Equations", description: "Solving simultaneous equations by graphing.", icon: "🎯", lessons: 3, progress: 0 },
          { id: "y9-linear-modelling", title: "3H: Linear Modelling", description: "Modelling real-world situations with linear equations.", icon: "🏗️", lessons: 3, progress: 0 },
        ]
      },
      // ── Ch 4: Geometry & Trigonometry ──
      {
        id: "y9-ch4-geometry-trig",
        name: "Ch 4: Geometry & Trigonometry",
        icon: "📐",
        topics: [
          { id: "y9-angles-triangles", title: "4A: Angle Properties", description: "Angle properties of triangles, parallel lines and transversals.", icon: "🔺", lessons: 6, progress: 0 },
          { id: "y9-quadrilaterals-polygons", title: "4B: Quadrilaterals & Polygons", description: "Properties and angle sums of polygons.", icon: "⬡", lessons: 3, progress: 0 },
          { id: "y9-congruent-triangles", title: "4C: Congruent Triangles", description: "Tests for congruence: SSS, SAS, ASA, RHS.", icon: "🔷", lessons: 3, progress: 0 },
          { id: "y9-congruence-proofs", title: "4D: Congruence Proofs", description: "Writing formal congruence proofs.", icon: "✅", lessons: 3, progress: 0 },
          { id: "y9-enlargement", title: "4E: Enlargement", description: "Scale factors and enlargement transformations.", icon: "🔎", lessons: 3, progress: 0 },
          { id: "y9-similar-figures", title: "4F: Similar Figures", description: "Properties of similar shapes and scale factors.", icon: "🔲", lessons: 3, progress: 0 },
          { id: "y9-similar-triangles-proofs", title: "4G: Similar Triangles & Proofs", description: "Tests for similarity and writing similarity proofs.", icon: "📋", lessons: 3, progress: 0 },
          { id: "y9-pythagoras-2d", title: "4H: Pythagoras' Theorem in 2D", description: "Finding unknown sides in right-angled triangles.", icon: "📐", lessons: 3, progress: 0 },
          { id: "y9-pythagoras-3d", title: "4I: Pythagoras' Theorem in 3D", description: "Applying Pythagoras in three-dimensional problems.", icon: "🧊", lessons: 3, progress: 0 },
          { id: "y9-trig-ratios", title: "4J: Trigonometric Ratios", description: "Understanding sine, cosine and tangent ratios.", icon: "📊", lessons: 3, progress: 0 },
          { id: "y9-finding-unknown-sides", title: "4K: Finding Unknown Sides", description: "Using trigonometry to find unknown side lengths.", icon: "📏", lessons: 3, progress: 0 },
          { id: "y9-finding-unknown-angles", title: "4L: Finding Unknown Angles", description: "Using inverse trigonometric functions.", icon: "🔍", lessons: 3, progress: 0 },
          { id: "y9-bearings", title: "4M: Bearings", description: "Three-figure bearings and compass bearings.", icon: "🧭", lessons: 3, progress: 0 },
          { id: "y9-trig-applications", title: "4N: Applications of Trigonometry", description: "Solving real-world problems with trigonometry.", icon: "🏔️", lessons: 3, progress: 0 },
        ]
      },
      // ── Ch 5: Measurement & Mensuration ──
      {
        id: "y9-ch5-measurement",
        name: "Ch 5: Measurement & Mensuration",
        icon: "📏",
        topics: [
          { id: "y9-errors-accuracy", title: "5A: Errors & Accuracy", description: "Understanding measurement errors, precision and accuracy.", icon: "🎯", lessons: 3, progress: 0 },
          { id: "y9-length-perimeter", title: "5B: Measurement of Shapes", description: "Calculating perimeter, area and surface area of various shapes.", icon: "📐", lessons: 9, progress: 0 },
          { id: "y9-composite-shapes", title: "5C: Composite Shapes", description: "Area and perimeter of composite figures.", icon: "🧩", lessons: 3, progress: 0 },
          { id: "y9-sa-cylinders", title: "5D: Surface Area of Cylinders", description: "Surface area of open and closed cylinders.", icon: "🥫", lessons: 3, progress: 0 },
          { id: "y9-volume-prisms", title: "5E: Volume of Prisms", description: "Volume of rectangular, triangular and other prisms.", icon: "🧊", lessons: 3, progress: 0 },
          { id: "y9-volume-cylinders", title: "5F: Volume of Cylinders", description: "Calculating volume of cylinders.", icon: "🛢️", lessons: 3, progress: 0 },
        ]
      },
      // ── Ch 6: Algebraic Techniques & Quadratics ──
      {
        id: "y9-ch6-algebraic-quadratics",
        name: "Ch 6: Algebraic Techniques & Quadratics",
        icon: "⛰️",
        topics: [
          { id: "y9-expanding-binomials", title: "6A: Expanding Binomials", description: "Expanding products of two binomials using FOIL.", icon: "✖️", lessons: 3, progress: 0 },
          { id: "y9-perfect-square-identities", title: "6B: Perfect Square Identities", description: "(a+b)² and (a−b)² expansions and applications.", icon: "🔲", lessons: 3, progress: 0 },
          { id: "y9-factorising-grouping", title: "6C: Factorising by Grouping", description: "Factorising four-term expressions by grouping.", icon: "📦", lessons: 3, progress: 0 },
          { id: "y9-monic-quadratic-trinomials", title: "6D: Monic Quadratic Trinomials", description: "Factorising x² + bx + c.", icon: "🎯", lessons: 3, progress: 0 },
          { id: "y9-factorising-non-monic", title: "6E: Factorising ax² + bx + c", description: "Factorising non-monic quadratic trinomials.", icon: "🧩", lessons: 3, progress: 0 },
          { id: "y9-simplifying-algebraic-fractions", title: "6F: Simplifying Algebraic Fractions", description: "Simplifying fractions with algebraic expressions.", icon: "✂️", lessons: 3, progress: 0 },
          { id: "y9-equations-algebraic-fractions", title: "6G: Equations with Algebraic Fractions", description: "Solving equations involving algebraic fractions.", icon: "⚖️", lessons: 3, progress: 0 },
          { id: "y9-solving-ax2-bx", title: "6H: Solving ax² + bx = 0", description: "Factorising and solving by null factor law.", icon: "🎯", lessons: 3, progress: 0 },
          { id: "y9-solving-ax2-bx-c", title: "6I: Solving ax² + bx + c = 0", description: "Solving quadratic equations by factorising.", icon: "🔓", lessons: 3, progress: 0 },
          { id: "y9-quadratic-problems", title: "6J: Quadratic Equations in Problems", description: "Setting up and solving word problems with quadratics.", icon: "📝", lessons: 3, progress: 0 },
          { id: "y9-the-parabola", title: "6K: The Parabola", description: "Key features: vertex, axis of symmetry, intercepts.", icon: "⛰️", lessons: 3, progress: 0 },
          { id: "y9-sketching-y-ax2", title: "6L: Sketching y = ax²", description: "Effect of 'a' on the shape of a parabola.", icon: "✏️", lessons: 3, progress: 0 },
          { id: "y9-translations", title: "6M: Translations of Parabolas", description: "Horizontal and vertical translations: y = a(x−h)² + k.", icon: "🔄", lessons: 3, progress: 0 },
          { id: "y9-intercept-form", title: "6N: Intercept Form", description: "Graphing parabolas using y = a(x−p)(x−q).", icon: "📍", lessons: 3, progress: 0 },
        ]
      },
      // ── Ch 7: Data & Probability ──
      {
        id: "y9-ch7-data-probability",
        name: "Ch 7: Data & Probability",
        icon: "🎲",
        topics: [
          { id: "y9-review-probability", title: "7A: Probability Fundamentals", description: "Reviewing probability basics, notation and relative frequency.", icon: "🎲", lessons: 6, progress: 0 },
          { id: "y9-venn-diagrams", title: "7B: Venn Diagrams", description: "Using Venn diagrams for probability problems.", icon: "⭕", lessons: 3, progress: 0 },
          { id: "y9-two-way-tables", title: "7C: Two-Way Tables", description: "Creating and interpreting two-way frequency tables.", icon: "📋", lessons: 3, progress: 0 },
          { id: "y9-set-notation", title: "7D: Set Notation", description: "Union, intersection, complement using set notation.", icon: "🔠", lessons: 3, progress: 0 },
          { id: "y9-tree-diagrams", title: "7E: Tree Diagrams", description: "Multi-stage probability using tree diagrams.", icon: "🌳", lessons: 3, progress: 0 },
          { id: "y9-data-sampling", title: "7F: Data Sampling", description: "Sampling methods and their applications.", icon: "🔍", lessons: 3, progress: 0 },
          { id: "y9-mean-median-mode", title: "7G: Data Representation & Summary Statistics", description: "Mean, median, mode, stem-and-leaf plots, histograms and grouped data.", icon: "📉", lessons: 9, progress: 0 },
          { id: "y9-range-iqr", title: "7H: Range & Interquartile Range", description: "Measures of spread including IQR.", icon: "↔️", lessons: 3, progress: 0 },
          { id: "y9-box-plots", title: "7I: Box Plots", description: "Creating and interpreting box-and-whisker plots.", icon: "📦", lessons: 3, progress: 0 },
        ]
      },
      // ── Ch 8: Algorithmic Thinking ──
      {
        id: "y9-ch8-algorithmic",
        name: "Ch 8: Algorithmic Thinking",
        icon: "🤖",
        topics: [
          { id: "y9-intro-algorithms", title: "8A: Introduction to Algorithms", description: "What is an algorithm? Flowcharts and pseudocode.", icon: "🔲", lessons: 3, progress: 0 },
          { id: "y9-algorithms-number-patterns", title: "8B: Algorithms for Number Patterns", description: "Using algorithms to generate and analyse number patterns.", icon: "🔢", lessons: 3, progress: 0 },
          { id: "y9-optimisation", title: "8C: Minimising & Maximising Problems", description: "Algorithmic approaches to optimisation.", icon: "📈", lessons: 3, progress: 0 },
          { id: "y9-sorting-algorithms", title: "8D: Sorting Algorithms", description: "Bubble sort, selection sort and comparing efficiency.", icon: "🔄", lessons: 3, progress: 0 },
          { id: "y9-simulations", title: "8E: Simulations", description: "Using algorithms to simulate random events.", icon: "🎰", lessons: 3, progress: 0 },
          { id: "y9-sampling-algorithms", title: "8F: Sampling", description: "Algorithmic approaches to data sampling.", icon: "📊", lessons: 3, progress: 0 },
        ]
      },
    ]
  },
];

// ─── Year 10 & Year 11 ─────────────────────────────────────────────
curriculum.push(
  {
    id: "year-10",
    name: "Year 10 Mathematics",
    description: "Victorian Curriculum — Core & 10A Extension: Algebra, Geometry, Trigonometry, Quadratics, Statistics, Polynomials & more",
    icon: "📙",
    categories: [
      // ── Ch 1: Linear Equations & Coordinate Geometry ──
      {
        id: "y10-algebra-linear",
        name: "Ch 1: Linear Equations & Coordinate Geometry",
        icon: "📐",
        topics: [
          { id: "y10-review-algebra", title: "1A: Review of Algebra", description: "Consolidate algebraic skills from Year 9.", icon: "🔢", lessons: 3, progress: 0, level: "core" },
          { id: "y10-solving-linear-eq", title: "1B: Solving Linear Equations", description: "Solve linear equations including with fractions.", icon: "➗", lessons: 3, progress: 0, level: "core" },
          { id: "y10-linear-inequalities", title: "1C: Linear Inequalities", description: "Solve and graph linear inequalities.", icon: "⚖️", lessons: 3, progress: 0, level: "core" },
          { id: "y10-graphing-lines", title: "1D: Graphing Straight Lines", description: "Plot lines using gradient–intercept and intercept methods.", icon: "📉", lessons: 3, progress: 0, level: "core" },
          { id: "y10-equation-of-line", title: "1E: Finding Equation of a Line", description: "Determine equations from points, gradient, or graph.", icon: "✏️", lessons: 3, progress: 0, level: "core" },
          { id: "y10-length-midpoint", title: "1F: Length & Midpoint", description: "Distance and midpoint formulas on the Cartesian plane.", icon: "📍", lessons: 3, progress: 0, level: "core" },
          { id: "y10-parallel-perpendicular", title: "1G: Parallel & Perpendicular Lines", description: "Gradient conditions and applications.", icon: "➕", lessons: 3, progress: 0, level: "core" },
          { id: "y10-regions-cartesian", title: "1H: Regions on Cartesian Plane", description: "Shade regions defined by linear inequalities.", icon: "🗺️", lessons: 3, progress: 0, level: "core" },
          { id: "y10-simult-substitution", title: "1I: Substitution Method", description: "Solve simultaneous equations by substitution.", icon: "🔄", lessons: 3, progress: 0, level: "core" },
          { id: "y10-simult-elimination", title: "1J: Elimination Method", description: "Solve simultaneous equations by elimination.", icon: "✂️", lessons: 3, progress: 0, level: "core" },
          { id: "y10-simult-applications", title: "1K: Applications of Simultaneous Equations", description: "Model and solve real-world problems with simultaneous equations.", icon: "🌍", lessons: 3, progress: 0, level: "core" },
          { id: "y10-linear-complex-fractions", title: "1L: Linear Equations with Complex Algebraic Fractions", description: "Solve linear equations involving complex algebraic fractions.", icon: "🧩", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 2: Indices, Exponentials & Logarithms ──
      {
        id: "y10-indices-exp-log",
        name: "Ch 2: Indices, Exponentials & Logarithms",
        icon: "📊",
        topics: [
          { id: "y10-review-index-laws", title: "2A: Review of Index Laws", description: "Consolidate index law skills from Year 9.", icon: "📜", lessons: 3, progress: 0, level: "core" },
          { id: "y10-negative-indices", title: "2B: Negative Indices", description: "Interpret and simplify negative exponents.", icon: "➖", lessons: 3, progress: 0, level: "core" },
          { id: "y10-scientific-notation", title: "2C: Scientific Notation", description: "Express and compute with scientific notation.", icon: "🔬", lessons: 3, progress: 0, level: "core" },
          { id: "y10-fractional-indices", title: "2D: Fractional Indices", description: "Connect fractional indices to roots.", icon: "½", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-exponential-equations", title: "2E: Exponential Equations", description: "Solve equations involving exponentials.", icon: "🔢", lessons: 3, progress: 0, level: "core" },
          { id: "y10-exponential-graphs", title: "2F: Exponential Graphs", description: "Graph and analyse exponential functions.", icon: "📈", lessons: 3, progress: 0, level: "core" },
          { id: "y10-growth-decay", title: "2G: Growth & Decay", description: "Model exponential growth and decay scenarios.", icon: "🌱", lessons: 3, progress: 0, level: "core" },
          { id: "y10-compound-interest", title: "2H: Compound Interest", description: "Apply compound interest formulas.", icon: "🏦", lessons: 3, progress: 0, level: "core" },
          { id: "y10-intro-logs", title: "2I: Introduction to Logarithms", description: "Define logarithms and convert between forms.", icon: "📝", lessons: 3, progress: 0, level: "core" },
          { id: "y10-log-scales", title: "2J: Logarithmic Scales", description: "Understand and apply logarithmic scales.", icon: "📊", lessons: 3, progress: 0, level: "core" },
          { id: "y10-laws-logs", title: "2K: Laws of Logarithms", description: "Product, quotient, and power rules for logs.", icon: "📜", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-solving-exp-logs", title: "2L: Solving Exponential Equations Using Logs", description: "Use logarithms to solve exponential equations.", icon: "🎯", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 3: Quadratics & Parabolas ──
      {
        id: "y10-quadratics",
        name: "Ch 3: Quadratics & Parabolas",
        icon: "⛰️",
        topics: [
          { id: "y10-expanding-expressions", title: "3A: Expanding Expressions", description: "Expand binomial products and special identities.", icon: "📖", lessons: 3, progress: 0, level: "core" },
          { id: "y10-factorising-expressions", title: "3B: Factorising Expressions", description: "Factorise using HCF, grouping, and identities.", icon: "📦", lessons: 3, progress: 0, level: "core" },
          { id: "y10-algebraic-fractions", title: "3C: Algebraic Fractions", description: "Simplify and operate with algebraic fractions.", icon: "✂️", lessons: 3, progress: 0, level: "core" },
          { id: "y10-monic-quadratics", title: "3D: Monic Quadratics", description: "Factorise x² + bx + c.", icon: "🎯", lessons: 3, progress: 0, level: "core" },
          { id: "y10-non-monic-quadratics", title: "3E: Non-Monic Quadratics", description: "Factorise ax² + bx + c where a ≠ 1.", icon: "🧩", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-solve-by-factorisation", title: "3F: Solving by Factorisation", description: "Solve quadratics using the null factor law.", icon: "🔓", lessons: 3, progress: 0, level: "core" },
          { id: "y10-completing-square", title: "3G: Completing the Square", description: "Solve quadratics by completing the square.", icon: "🔲", lessons: 3, progress: 0, level: "core" },
          { id: "y10-quadratic-formula", title: "3H: Quadratic Formula", description: "Apply x = (−b ± √(b²−4ac)) / 2a.", icon: "📐", lessons: 3, progress: 0, level: "core" },
          { id: "y10-discriminant", title: "3I: The Discriminant", description: "Use Δ to determine the nature of roots.", icon: "🔍", lessons: 3, progress: 0, level: "core" },
          { id: "y10-quadratic-applications", title: "3J: Applications of Quadratic Equations", description: "Model and solve real-world quadratic problems.", icon: "🌍", lessons: 3, progress: 0, level: "core" },
          { id: "y10-exploring-parabolas", title: "3K: Exploring Parabolas", description: "Key features: vertex, axis of symmetry, intercepts.", icon: "⛰️", lessons: 3, progress: 0, level: "core" },
          { id: "y10-parabola-transformations", title: "3L: Transformations of Parabolas", description: "Translate, reflect, and dilate parabolas.", icon: "🔄", lessons: 3, progress: 0, level: "core" },
          { id: "y10-sketch-factorisation", title: "3M: Sketching via Factorisation", description: "Sketch parabolas using factorised form.", icon: "✏️", lessons: 3, progress: 0, level: "core" },
          { id: "y10-completing-square-form", title: "3N: Completing the Square Form", description: "Sketch using y = a(x−h)² + k.", icon: "🔲", lessons: 3, progress: 0, level: "core" },
          { id: "y10-quadratic-formula-sketch", title: "3O: Using Quadratic Formula for Sketching", description: "Find intercepts using the quadratic formula.", icon: "📐", lessons: 3, progress: 0, level: "core" },
          { id: "y10-parabola-applications", title: "3P: Applications of Parabolas", description: "Real-world applications of parabolas.", icon: "🌍", lessons: 3, progress: 0, level: "core" },
          { id: "y10-line-parabola-intersect", title: "3Q: Line–Parabola Intersections", description: "Find intersection points of lines and parabolas.", icon: "✖️", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-rates-of-change", title: "3R: Rates of Change", description: "Understand and calculate rates of change.", icon: "📈", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-avg-instantaneous-rate", title: "3S: Average & Instantaneous Rate", description: "Distinguish average from instantaneous rate of change.", icon: "⚡", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-direct-inverse-variation", title: "3T: Direct & Inverse Variation", description: "Model direct and inverse proportionality.", icon: "🔗", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 4: Probability & Counting Techniques ──
      {
        id: "y10-probability-counting",
        name: "Ch 4: Probability & Counting Techniques",
        icon: "🎲",
        topics: [
          { id: "y10-review-probability", title: "4A: Review of Probability", description: "Consolidate probability fundamentals.", icon: "🎲", lessons: 3, progress: 0, level: "core" },
          { id: "y10-venn-two-way", title: "4B: Venn Diagrams & Two-Way Tables", description: "Organise data with Venn diagrams and two-way tables.", icon: "⭕", lessons: 3, progress: 0, level: "core" },
          { id: "y10-addition-rule", title: "4C: Addition Rule", description: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B).", icon: "➕", lessons: 3, progress: 0, level: "core" },
          { id: "y10-conditional-probability", title: "4D: Conditional Probability", description: "Calculate P(A|B) and interpret conditional events.", icon: "🔀", lessons: 3, progress: 0, level: "core" },
          { id: "y10-tree-diagrams", title: "4E: Tree Diagrams", description: "Multi-stage experiments with tree diagrams.", icon: "🌳", lessons: 3, progress: 0, level: "core" },
          { id: "y10-independent-events", title: "4F: Independent Events", description: "Identify and calculate with independent events.", icon: "🎯", lessons: 3, progress: 0, level: "core" },
          { id: "y10-counting-principles", title: "4G: Counting Principles", description: "Multiplication and addition principles.", icon: "🔢", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-factorial-notation", title: "4H: Factorial Notation", description: "Understand and compute n! expressions.", icon: "❗", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-arrangements", title: "4I: Arrangements", description: "Permutations and ordered selections.", icon: "🔄", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-selections", title: "4J: Selections", description: "Combinations and unordered selections.", icon: "✅", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-counting-applications", title: "4K: Applications in Probability", description: "Apply counting techniques to probability problems.", icon: "📊", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 5: Geometry & Circle Geometry ──
      {
        id: "y10-geometry-networks",
        name: "Ch 5: Geometry & Circle Geometry",
        icon: "📐",
        topics: [
          { id: "y10-review-geometry", title: "5A: Review of Geometry", description: "Angle properties, triangles, and polygons.", icon: "🔺", lessons: 3, progress: 0, level: "core" },
          { id: "y10-congruent-triangles", title: "5B: Congruent Triangles", description: "Tests for congruence and formal proofs.", icon: "🔷", lessons: 3, progress: 0, level: "core" },
          { id: "y10-similar-figures", title: "5C: Similar Figures", description: "Scale factors and properties of similar shapes.", icon: "🔲", lessons: 3, progress: 0, level: "core" },
          { id: "y10-similar-triangles", title: "5D: Similar Triangles", description: "Proof and application of similar triangle tests.", icon: "📋", lessons: 3, progress: 0, level: "core" },
          { id: "y10-chord-properties", title: "5E: Chord Properties", description: "Properties of chords in circles.", icon: "⭕", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-angle-theorems", title: "5F: Angle Theorems 1–4", description: "Central, inscribed, and related angle theorems.", icon: "📐", lessons: 4, progress: 0, level: "10A" },
          { id: "y10-tangent-theorems", title: "5G: Tangent Theorems", description: "Properties of tangent lines to circles.", icon: "➰", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-intersecting-chords", title: "5H: Intersecting Chords, Secants & Tangents", description: "Products and ratios from intersecting lines.", icon: "✖️", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 6: Surds & Measurement ──
      {
        id: "y10-measurement-surds",
        name: "Ch 6: Surds & Measurement",
        icon: "📏",
        topics: [
          { id: "y10-irrational-numbers", title: "6A: Irrational Numbers", description: "Identify and work with irrational numbers.", icon: "∞", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-add-sub-surds", title: "6B: Adding & Subtracting Surds", description: "Simplify and combine like surds.", icon: "➕", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-mult-div-surds", title: "6C: Multiplying & Dividing Surds", description: "Multiply and divide surd expressions.", icon: "✖️", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-rationalising", title: "6D: Rationalising Denominators", description: "Rationalise denominators with surds.", icon: "📐", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-review-length", title: "6E: Review of Length", description: "Perimeter, circumference, and unit conversions.", icon: "📏", lessons: 3, progress: 0, level: "core" },
          { id: "y10-pythagoras-3d", title: "6F: Pythagoras (Including 3D)", description: "Apply Pythagoras' theorem in 2D and 3D contexts.", icon: "🧊", lessons: 3, progress: 0, level: "core" },
          { id: "y10-review-area", title: "6G: Review of Area", description: "Area of standard and composite shapes.", icon: "⬛", lessons: 3, progress: 0, level: "core" },
          { id: "y10-measurement-errors", title: "6H: Measurement Errors & Accuracy", description: "Understand precision, accuracy, and percentage error.", icon: "🎯", lessons: 3, progress: 0, level: "core" },
          { id: "y10-sa-prisms-cylinders", title: "6I: Prisms & Cylinders", description: "Surface area and volume of prisms and cylinders.", icon: "📦", lessons: 3, progress: 0, level: "core" },
          { id: "y10-sa-pyramids-cones", title: "6J: Pyramids & Cones", description: "Surface area and volume of pyramids and cones.", icon: "🔺", lessons: 3, progress: 0, level: "core" },
          { id: "y10-spheres", title: "6K: Spheres", description: "Surface area and volume of spheres.", icon: "🌐", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 7: Trigonometry ──
      {
        id: "y10-trigonometry",
        name: "Ch 7: Trigonometry",
        icon: "📐",
        topics: [
          { id: "y10-trig-ratios", title: "7A: Trigonometric Ratios", description: "Sin, cos, tan in right-angled triangles.", icon: "📐", lessons: 3, progress: 0, level: "core" },
          { id: "y10-finding-angles", title: "7B: Finding Unknown Angles", description: "Use inverse trig to find angles.", icon: "🔍", lessons: 3, progress: 0, level: "core" },
          { id: "y10-2d-applications", title: "7C: Applications in 2D", description: "Solve 2D problems with trigonometry.", icon: "📏", lessons: 3, progress: 0, level: "core" },
          { id: "y10-bearings", title: "7D: Bearings", description: "Three-figure bearings and navigation.", icon: "🧭", lessons: 3, progress: 0, level: "core" },
          { id: "y10-3d-applications", title: "7E: Applications in 3D", description: "Apply trigonometry in 3D contexts.", icon: "🧊", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-sine-rule", title: "7F: Sine Rule", description: "Apply the sine rule in non-right triangles.", icon: "📊", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-cosine-rule", title: "7G: Cosine Rule", description: "Apply the cosine rule in non-right triangles.", icon: "📈", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-area-triangle", title: "7H: Area of a Triangle", description: "Use ½ab sin C to find area.", icon: "🔺", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-unit-circle", title: "7I: Unit Circle", description: "Understand the unit circle and angle measurement.", icon: "⭕", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-trig-graphs", title: "7J: Graphs of Trig Functions", description: "Graph sin, cos, and tan functions.", icon: "📉", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-exact-values-equations", title: "7K: Exact Values & Trig Equations", description: "Use exact values and solve trig equations.", icon: "🎯", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 8: Statistics & Data Analysis ──
      {
        id: "y10-statistics",
        name: "Ch 8: Statistics & Data Analysis",
        icon: "📊",
        topics: [
          { id: "y10-collecting-data", title: "8A: Collecting Representative Data", description: "Sampling methods and representative data.", icon: "🔍", lessons: 3, progress: 0, level: "core" },
          { id: "y10-data-displays", title: "8B: Data Displays", description: "Histograms, stem-and-leaf plots, and frequency tables.", icon: "📊", lessons: 3, progress: 0, level: "core" },
          { id: "y10-stat-two-way", title: "8C: Two-Way Tables", description: "Construct and interpret two-way tables.", icon: "📋", lessons: 3, progress: 0, level: "core" },
          { id: "y10-summary-stats", title: "8D: Summary Statistics", description: "Mean, median, mode, and measures of centre.", icon: "📈", lessons: 3, progress: 0, level: "core" },
          { id: "y10-box-plots", title: "8E: Box Plots", description: "Create and interpret box-and-whisker plots.", icon: "📦", lessons: 3, progress: 0, level: "core" },
          { id: "y10-time-series", title: "8F: Time-Series Data", description: "Analyse trends and seasonality in time-series.", icon: "⏳", lessons: 3, progress: 0, level: "core" },
          { id: "y10-scatter-plots", title: "8G: Scatter Plots", description: "Plot and interpret bivariate data.", icon: "📉", lessons: 3, progress: 0, level: "core" },
          { id: "y10-line-best-fit", title: "8H: Line of Best Fit", description: "Fit and interpret lines of best fit.", icon: "📏", lessons: 3, progress: 0, level: "core" },
          { id: "y10-standard-deviation", title: "8I: Standard Deviation", description: "Calculate and interpret standard deviation.", icon: "σ", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-cumulative-frequency", title: "8J: Cumulative Frequency", description: "Cumulative frequency tables and ogives.", icon: "📊", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-percentiles", title: "8K: Percentiles", description: "Calculate and interpret percentiles.", icon: "📐", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 9: Functions & Polynomials ──
      {
        id: "y10-polynomials-functions",
        name: "Ch 9: Functions & Polynomials",
        icon: "🔬",
        topics: [
          { id: "y10-function-notation", title: "9A: Function Notation", description: "Understand and use f(x) notation.", icon: "📝", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-intro-polynomials", title: "9B: Introducing Polynomials", description: "Degree, leading coefficient, and terminology.", icon: "📖", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-expanding-polynomials", title: "9C: Expanding Polynomials", description: "Expand products of polynomials.", icon: "📖", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-division-polynomials", title: "9D: Division of Polynomials", description: "Long division and synthetic division.", icon: "➗", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-remainder-factor", title: "9E: Remainder & Factor Theorems", description: "Apply the remainder and factor theorems.", icon: "🔍", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-solving-polynomial", title: "9F: Solving Polynomial Equations", description: "Find roots of polynomial equations.", icon: "🎯", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-cubic-functions", title: "9G: Cubic Functions", description: "Graph and analyse cubic functions.", icon: "📈", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-graphs-polynomials", title: "9H: Graphs of Polynomials", description: "Sketch polynomial graphs using key features.", icon: "📉", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-graphs-circles", title: "9I: Graphs of Circles", description: "Equations and graphs of circles.", icon: "⭕", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-hyperbolic-functions", title: "9J: Hyperbolic Functions", description: "Graphs of y = k/x and asymptotic behaviour.", icon: "♾️", lessons: 3, progress: 0, level: "10A" },
          { id: "y10-transformations-graphs", title: "9K: Transformations of Graphs", description: "Apply transformations to function graphs.", icon: "🔄", lessons: 3, progress: 0, level: "10A" },
        ]
      },
      // ── Ch 10: Algorithmic Thinking ──
      {
        id: "y10-algorithmic-thinking",
        name: "Ch 10: Algorithmic Thinking",
        icon: "🤖",
        topics: [
          { id: "y10-logical-reasoning", title: "10A: Logical Reasoning", description: "Develop logical arguments and reasoning skills.", icon: "🧠", lessons: 3, progress: 0, level: "core" },
          { id: "y10-flowcharts", title: "10B: Flowcharts", description: "Design and interpret algorithmic flowcharts.", icon: "🔲", lessons: 3, progress: 0, level: "core" },
          { id: "y10-algorithm-construction", title: "10C: Step-by-Step Algorithm Construction", description: "Build algorithms to solve mathematical problems.", icon: "🏗️", lessons: 3, progress: 0, level: "core" },
          { id: "y10-pattern-recognition", title: "10D: Pattern Recognition", description: "Identify and generalise mathematical patterns.", icon: "🔢", lessons: 3, progress: 0, level: "core" },
          { id: "y10-computational-thinking", title: "10E: Computational Thinking Problems", description: "Apply decomposition, abstraction, and algorithms.", icon: "💻", lessons: 3, progress: 0, level: "core" },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════════════════
  // YEAR 11 — VCE GENERAL MATHEMATICS (Units 1 & 2)
  // 12 chapters with individual subtopics
  // ════════════════════════════════════════════════════════════════════
  {
    id: "year-11-general",
    name: "Year 11 General Mathematics",
    description: "VCE General Mathematics Units 1 & 2 — 12 chapters covering percentages, data, sequences, matrices, linear modelling, networks, variation, measurement, and trigonometry",
    icon: "📗",
    categories: [
      // ── UNIT 1 ──────────────────────────────────────────────────
      {
        id: "y11g-ch1",
        name: "Ch 1: Review of Percentages and Ratios",
        icon: "💯",
        topics: [
          { id: "y11g-ch1-percentages", title: "Percentages", description: "Converting between fractions, decimals and percentages; finding percentages of quantities.", icon: "💯", lessons: 1, progress: 0 },
          { id: "y11g-ch1-pct-increase-decrease", title: "Percentage Increase and Decrease", description: "Multiplying factor method for percentage changes.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11g-ch1-gst", title: "Goods and Services Tax (GST)", description: "Calculating GST-inclusive and GST-exclusive prices.", icon: "🧾", lessons: 1, progress: 0 },
          { id: "y11g-ch1-ratio-proportion", title: "Ratio and Proportion", description: "Simplifying ratios, solving proportions using cross-multiplication.", icon: "⚖️", lessons: 1, progress: 0 },
          { id: "y11g-ch1-dividing-ratios", title: "Dividing Quantities in Given Ratios", description: "Splitting amounts into parts using ratios.", icon: "✂️", lessons: 1, progress: 0 },
          { id: "y11g-ch1-unitary-method", title: "Unitary Method", description: "Finding the value of one unit to solve rate and best-buy problems.", icon: "1️⃣", lessons: 1, progress: 0 },
          { id: "y11g-ch1-review", title: "Review of Chapter 1", description: "Consolidation of all Chapter 1 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch2",
        name: "Ch 2: Investigating and Comparing Data Distributions",
        icon: "📊",
        topics: [
          { id: "y11g-ch2-categorical-data", title: "Classifying and Displaying Categorical Data", description: "Nominal and ordinal data types, bar charts and pie charts.", icon: "📋", lessons: 1, progress: 0 },
          { id: "y11g-ch2-frequency-bar-charts", title: "Interpreting and Describing Frequency Tables and Bar Charts", description: "Frequency tables, relative frequency, interpreting bar charts.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11g-ch2-numerical-data", title: "Displaying and Describing Numerical Data", description: "Discrete and continuous data, histograms.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11g-ch2-distributions-dot-stem", title: "Characteristics of Distributions, Dot Plots and Stem Plots", description: "Shape of distributions, dot plots, stem-and-leaf plots.", icon: "🌿", lessons: 1, progress: 0 },
          { id: "y11g-ch2-measures-centre", title: "Measures of Centre", description: "Mean, median and mode.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11g-ch2-measures-spread", title: "Measures of Spread", description: "Range, IQR, quartiles.", icon: "↔️", lessons: 1, progress: 0 },
          { id: "y11g-ch2-standard-deviation", title: "Percentages of Data Within Standard Deviations", description: "Standard deviation and the 68-95-99.7% rule.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11g-ch2-boxplots", title: "Boxplots", description: "Five-number summary and box-and-whisker plots.", icon: "📦", lessons: 1, progress: 0 },
          { id: "y11g-ch2-comparing-distributions", title: "Comparing Distributions Across Groups", description: "Parallel boxplots and back-to-back stem plots.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11g-ch2-review", title: "Review of Chapter 2", description: "Consolidation of all Chapter 2 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch3",
        name: "Ch 3: Sequences and Finance",
        icon: "🔗",
        topics: [
          { id: "y11g-ch3-number-patterns", title: "Number Patterns", description: "Identifying and extending number patterns.", icon: "🔢", lessons: 1, progress: 0 },
          { id: "y11g-ch3-recurrence-relations", title: "Writing Recurrence Relations in Symbolic Form", description: "Defining sequences recursively with starting value and rule.", icon: "🔁", lessons: 1, progress: 0 },
          { id: "y11g-ch3-intro-arithmetic", title: "Introduction to Arithmetic Sequences", description: "Common difference and nth term formula.", icon: "➕", lessons: 1, progress: 0 },
          { id: "y11g-ch3-arithmetic-recursion", title: "Arithmetic Sequences Using Recursion", description: "Recursive definition and sum formulas.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11g-ch3-finance-arithmetic", title: "Finance Applications Using Arithmetic Sequences", description: "Simple interest and flat-rate depreciation.", icon: "💵", lessons: 1, progress: 0 },
          { id: "y11g-ch3-intro-geometric", title: "Introduction to Geometric Sequences", description: "Common ratio and nth term formula.", icon: "✖️", lessons: 1, progress: 0 },
          { id: "y11g-ch3-geometric-recursion", title: "Recursion with Geometric Sequences", description: "Recursive form and sum formulas.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11g-ch3-finance-geometric", title: "Finance Applications Using Geometric Sequences", description: "Compound interest and reducing-balance depreciation.", icon: "🏦", lessons: 1, progress: 0 },
          { id: "y11g-ch3-finding-term-n", title: "Finding Term n in Geometric Growth and Decay", description: "Using logarithms to find n in geometric models.", icon: "🔍", lessons: 1, progress: 0 },
          { id: "y11g-ch3-review", title: "Review of Chapter 3", description: "Consolidation of all Chapter 3 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch4",
        name: "Ch 4: Matrices",
        icon: "🧮",
        topics: [
          { id: "y11g-ch4-matrix-basics", title: "The Basics of a Matrix", description: "Order, elements, types of matrices.", icon: "🧮", lessons: 1, progress: 0 },
          { id: "y11g-ch4-adding-subtracting", title: "Adding and Subtracting Matrices", description: "Matrix addition and subtraction with same order.", icon: "➕", lessons: 1, progress: 0 },
          { id: "y11g-ch4-scalar-mult", title: "Scalar Multiplication", description: "Multiplying a matrix by a scalar.", icon: "✖️", lessons: 1, progress: 0 },
          { id: "y11g-ch4-matrix-mult", title: "Matrix Multiplication", description: "Row-by-column multiplication, dimension rules.", icon: "🔢", lessons: 1, progress: 0 },
          { id: "y11g-ch4-inverse-matrices", title: "Inverse Matrices and Solving Simultaneous Equations", description: "Determinant, 2×2 inverse, solving AX=B.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11g-ch4-networks", title: "Using Matrices to Model Networks", description: "Adjacency matrices for road and communication networks.", icon: "🕸️", lessons: 1, progress: 0 },
          { id: "y11g-ch4-transition-matrices", title: "Introduction to Transition Matrices", description: "State vectors and transition matrices for modelling change.", icon: "🔀", lessons: 1, progress: 0 },
          { id: "y11g-ch4-transition-recursion", title: "Using Recursion with Transition Matrices", description: "Multiple applications and steady state.", icon: "♾️", lessons: 1, progress: 0 },
          { id: "y11g-ch4-applications", title: "Applications of Matrices", description: "Cost calculations, encryption, and practical problems.", icon: "🌍", lessons: 1, progress: 0 },
          { id: "y11g-ch4-review", title: "Review of Chapter 4", description: "Consolidation of all Chapter 4 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch5",
        name: "Ch 5: Linear Relations and Modelling",
        icon: "📈",
        topics: [
          { id: "y11g-ch5-substitution", title: "Substitution and Constructing Tables of Values", description: "Evaluating formulas by substitution.", icon: "🔣", lessons: 1, progress: 0 },
          { id: "y11g-ch5-solving-linear", title: "Solving Linear Equations and Developing Formulas", description: "Inverse operations and formula development.", icon: "➗", lessons: 1, progress: 0 },
          { id: "y11g-ch5-developing-formulas", title: "Setting Up Equations in Two Unknowns", description: "Translating word problems into equations.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11g-ch5-straight-line-graphs", title: "Drawing Straight-Line Graphs and Finding Slope", description: "Plotting lines and calculating gradient.", icon: "📉", lessons: 1, progress: 0 },
          { id: "y11g-ch5-equations-lines", title: "Equations of Straight Lines", description: "Gradient-intercept, general, and point-gradient forms.", icon: "✏️", lessons: 1, progress: 0 },
          { id: "y11g-ch5-finding-equation", title: "Finding the Equation of a Straight-Line Graph", description: "Finding equations from points and gradients.", icon: "🔍", lessons: 1, progress: 0 },
          { id: "y11g-ch5-linear-modelling", title: "Linear Modelling", description: "Modelling real-world situations with linear equations.", icon: "🏗️", lessons: 1, progress: 0 },
          { id: "y11g-ch5-simultaneous", title: "Solving Simultaneous Equations", description: "Substitution and elimination methods.", icon: "⚖️", lessons: 1, progress: 0 },
          { id: "y11g-ch5-practical-simultaneous", title: "Practical Applications of Simultaneous Equations", description: "Break-even, mixing, and cost comparison problems.", icon: "🌍", lessons: 1, progress: 0 },
          { id: "y11g-ch5-piecewise", title: "Piecewise Linear Graphs", description: "Functions with different rules on different intervals.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11g-ch5-review", title: "Review of Chapter 5", description: "Consolidation of all Chapter 5 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch6",
        name: "Ch 6: Revision of Unit 1",
        icon: "🔄",
        topics: [
          { id: "y11g-ch6-multiple-choice", title: "Multiple-Choice Questions", description: "Unit 1 multiple-choice revision.", icon: "✅", lessons: 1, progress: 0 },
          { id: "y11g-ch6-written-response", title: "Written-Response Questions", description: "Extended response revision for Unit 1.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11g-ch6-investigations", title: "Investigations", description: "Extended investigation tasks for Unit 1.", icon: "🔬", lessons: 1, progress: 0 },
        ]
      },
      // ── UNIT 2 ──────────────────────────────────────────────────
      {
        id: "y11g-ch7",
        name: "Ch 7: Investigating Relationships Between Two Numerical Variables",
        icon: "📉",
        topics: [
          { id: "y11g-ch7-scatterplots", title: "Scatterplots", description: "Displaying bivariate numerical data.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11g-ch7-interpreting-scatterplots", title: "How to Interpret a Scatterplot", description: "Direction, form, strength, and outliers.", icon: "🔍", lessons: 1, progress: 0 },
          { id: "y11g-ch7-pearsons-r", title: "Pearson's Correlation Coefficient (r)", description: "Measuring strength and direction of linear association.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11g-ch7-fitting-linear", title: "Fitting a Linear Model to the Data", description: "Least-squares regression line and residuals.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11g-ch7-interpreting-predicting", title: "Interpreting and Predicting from a Linear Model", description: "r², interpolation vs extrapolation.", icon: "🔮", lessons: 1, progress: 0 },
          { id: "y11g-ch7-review", title: "Review of Chapter 7", description: "Consolidation of all Chapter 7 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch8",
        name: "Ch 8: Graphs and Networks",
        icon: "🕸️",
        topics: [
          { id: "y11g-ch8-what-is-graph", title: "What Is a Graph?", description: "Vertices, edges, degree, and basic terminology.", icon: "🔵", lessons: 1, progress: 0 },
          { id: "y11g-ch8-isomorphic-adjacency", title: "Isomorphic Graphs and Adjacency Matrices", description: "Equivalent graphs and matrix representations.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11g-ch8-planar-euler-formula", title: "Planar Graphs and Euler's Formula", description: "v - e + f = 2 and planarity.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11g-ch8-walks-trails-paths", title: "Walks, Trails, Paths and Cycles", description: "Types of traversals in graphs.", icon: "🚶", lessons: 1, progress: 0 },
          { id: "y11g-ch8-eulerian-trails", title: "Eulerian Trails and Circuits (Extension)", description: "Traversing every edge exactly once.", icon: "🔁", lessons: 1, progress: 0 },
          { id: "y11g-ch8-hamiltonian", title: "Hamiltonian Paths and Cycles (Extension)", description: "Visiting every vertex exactly once.", icon: "🏆", lessons: 1, progress: 0 },
          { id: "y11g-ch8-weighted-shortest", title: "Weighted Graphs and the Shortest Path Problem", description: "Edge weights and finding minimum-weight paths.", icon: "🛤️", lessons: 1, progress: 0 },
          { id: "y11g-ch8-spanning-trees", title: "Minimum Spanning Trees and Greedy Algorithms", description: "Prim's and Kruskal's algorithms.", icon: "🌳", lessons: 1, progress: 0 },
          { id: "y11g-ch8-review", title: "Review of Chapter 8", description: "Consolidation of all Chapter 8 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch9",
        name: "Ch 9: Variation",
        icon: "🔄",
        topics: [
          { id: "y11g-ch9-direct-variation", title: "Direct Variation", description: "y = kx and proportional relationships.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11g-ch9-inverse-variation", title: "Inverse Variation", description: "y = k/x and hyperbolic relationships.", icon: "📉", lessons: 1, progress: 0 },
          { id: "y11g-ch9-data-transformations", title: "Data Transformations", description: "Linearising non-linear data.", icon: "🔀", lessons: 1, progress: 0 },
          { id: "y11g-ch9-logarithms", title: "Logarithms", description: "Log laws and logarithmic scales.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11g-ch9-further-modelling", title: "Further Modelling of Non-Linear Data", description: "Power, exponential, and quadratic models.", icon: "🏗️", lessons: 1, progress: 0 },
          { id: "y11g-ch9-review", title: "Review of Chapter 9", description: "Consolidation of all Chapter 9 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch10",
        name: "Ch 10: Measurement, Scale and Similarity",
        icon: "📐",
        topics: [
          { id: "y11g-ch10-approximations", title: "Approximations, Decimal Places and Significant Figures", description: "Rounding and precision in measurement.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11g-ch10-pythagoras", title: "Pythagoras' Theorem", description: "Finding sides in right-angled triangles.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11g-ch10-perimeter-area", title: "Perimeter and Area", description: "Formulas for common shapes and composites.", icon: "⬛", lessons: 1, progress: 0 },
          { id: "y11g-ch10-arc-sector", title: "Length of an Arc and Area of a Sector", description: "Fractions of circles.", icon: "🥧", lessons: 1, progress: 0 },
          { id: "y11g-ch10-volume", title: "Volume", description: "Prisms, cylinders, and composite solids.", icon: "🧊", lessons: 1, progress: 0 },
          { id: "y11g-ch10-volume-pyramid", title: "Volume of a Pyramid", description: "Pyramids, cones, and spheres.", icon: "🔺", lessons: 1, progress: 0 },
          { id: "y11g-ch10-surface-area", title: "Surface Area", description: "Total outer surface of 3D shapes.", icon: "📦", lessons: 1, progress: 0 },
          { id: "y11g-ch10-similar-figures", title: "Similar Figures", description: "Scale factor and proportional sides.", icon: "🔲", lessons: 1, progress: 0 },
          { id: "y11g-ch10-similar-triangles", title: "Similar Triangles", description: "Tests for similarity and applications.", icon: "🔺", lessons: 1, progress: 0 },
          { id: "y11g-ch10-similar-solids", title: "Similar Solids", description: "Scaling lengths, areas, and volumes.", icon: "🧊", lessons: 1, progress: 0 },
          { id: "y11g-ch10-review", title: "Review of Chapter 10", description: "Consolidation of all Chapter 10 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch11",
        name: "Ch 11: Applications of Trigonometry",
        icon: "📐",
        topics: [
          { id: "y11g-ch11-trig-basics", title: "Trigonometry Basics", description: "SOH-CAH-TOA and labelling triangles.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11g-ch11-finding-side", title: "Finding an Unknown Side", description: "Using trig ratios to find side lengths.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11g-ch11-finding-angle", title: "Finding an Angle", description: "Using inverse trig functions.", icon: "🔍", lessons: 1, progress: 0 },
          { id: "y11g-ch11-right-triangle-apps", title: "Applications of Right-Angled Triangles", description: "Real-world problems with right triangles.", icon: "🏗️", lessons: 1, progress: 0 },
          { id: "y11g-ch11-elevation-depression", title: "Angles of Elevation and Depression", description: "Measuring angles from the horizontal.", icon: "⛰️", lessons: 1, progress: 0 },
          { id: "y11g-ch11-bearings", title: "Bearings and Navigation", description: "Three-figure bearings and navigation problems.", icon: "🧭", lessons: 1, progress: 0 },
          { id: "y11g-ch11-sine-rule", title: "The Sine Rule", description: "a/sinA = b/sinB = c/sinC for any triangle.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11g-ch11-cosine-rule", title: "The Cosine Rule", description: "c² = a² + b² - 2ab cosC for any triangle.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11g-ch11-area-triangle", title: "The Area of a Triangle", description: "Area = ½ab sinC for any triangle.", icon: "🔺", lessons: 1, progress: 0 },
          { id: "y11g-ch11-review", title: "Review of Chapter 11", description: "Consolidation of all Chapter 11 concepts.", icon: "📋", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11g-ch12",
        name: "Ch 12: Revision of Unit 2",
        icon: "🔄",
        topics: [
          { id: "y11g-ch12-multiple-choice", title: "Multiple-Choice Questions", description: "Unit 2 multiple-choice revision.", icon: "✅", lessons: 1, progress: 0 },
          { id: "y11g-ch12-written-response", title: "Written-Response Questions", description: "Extended response revision for Unit 2.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11g-ch12-investigations", title: "Investigations", description: "Extended investigation tasks for Unit 2.", icon: "🔬", lessons: 1, progress: 0 },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════════════════
  // YEAR 11 — VCE MATHEMATICAL METHODS (Units 1 & 2)
  // ════════════════════════════════════════════════════════════════════
  {
    id: "year-11-methods",
    name: "Year 11 Mathematical Methods",
    description: "VCE Mathematical Methods Units 1 & 2 — functions, algebra, calculus, probability, and exponential/circular functions",
    icon: "📕",
    categories: [
      // ──── UNIT 1 ────────────────────────────────────────────────────
      {
        id: "y11m-ch1",
        name: "Ch 1 · Reviewing Linear Equations",
        icon: "➗",
        topics: [
          { id: "y11m-ch1-linear-equations", title: "Linear equations", description: "Solving one-variable linear equations using inverse operations.", icon: "➗", lessons: 1, progress: 0 },
          { id: "y11m-ch1-constructing-linear", title: "Constructing linear equations", description: "Translating worded problems into linear equations.", icon: "🔨", lessons: 1, progress: 0 },
          { id: "y11m-ch1-simultaneous", title: "Simultaneous equations", description: "Solving pairs of equations by substitution and elimination.", icon: "🔀", lessons: 1, progress: 0 },
          { id: "y11m-ch1-constructing-simultaneous", title: "Constructing simultaneous linear equations", description: "Setting up simultaneous equations from real-world contexts.", icon: "🛠️", lessons: 1, progress: 0 },
          { id: "y11m-ch1-inequalities", title: "Solving linear inequalities", description: "Solving and graphing linear inequalities on a number line.", icon: "↔️", lessons: 1, progress: 0 },
          { id: "y11m-ch1-formulas", title: "Using and transposing formulas", description: "Rearranging formulas to make a different variable the subject.", icon: "🔧", lessons: 1, progress: 0 },
          { id: "y11m-ch1-review", title: "Review of Chapter 1", description: "Consolidation and review of linear equations concepts.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch2",
        name: "Ch 2 · Reviewing Coordinate Geometry",
        icon: "📍",
        topics: [
          { id: "y11m-ch2-distance-midpoints", title: "Distance and midpoints", description: "Finding distance and midpoint between two points.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11m-ch2-gradient", title: "The gradient of a straight line", description: "Calculating and interpreting gradient (slope).", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11m-ch2-equation", title: "The equation of a straight line", description: "Gradient-intercept, point-gradient and general forms.", icon: "✏️", lessons: 1, progress: 0 },
          { id: "y11m-ch2-graphing", title: "Graphing straight lines", description: "Plotting linear graphs using intercepts and gradient.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11m-ch2-parallel-perp", title: "Parallel and perpendicular lines", description: "Gradient conditions for parallel and perpendicular lines.", icon: "⊥", lessons: 1, progress: 0 },
          { id: "y11m-ch2-families", title: "Families of straight lines", description: "Exploring lines with shared properties using parameters.", icon: "👪", lessons: 1, progress: 0 },
          { id: "y11m-ch2-linear-models", title: "Linear models", description: "Using linear equations to model real-world relationships.", icon: "🏗️", lessons: 1, progress: 0 },
          { id: "y11m-ch2-simult-linear", title: "Simultaneous linear equations", description: "Graphical and algebraic solutions to simultaneous equations.", icon: "🔀", lessons: 1, progress: 0 },
          { id: "y11m-ch2-review", title: "Review of Chapter 2", description: "Consolidation and review of coordinate geometry.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch3",
        name: "Ch 3 · Quadratics",
        icon: "⛰️",
        topics: [
          { id: "y11m-ch3-expanding", title: "Expanding and collecting like terms", description: "Expanding brackets and simplifying quadratic expressions.", icon: "📖", lessons: 1, progress: 0 },
          { id: "y11m-ch3-factorising", title: "Factorising", description: "Factorising quadratic trinomials and special products.", icon: "🔗", lessons: 1, progress: 0 },
          { id: "y11m-ch3-equations", title: "Quadratic equations", description: "Solving by factorisation, formula and CAS.", icon: "🧮", lessons: 1, progress: 0 },
          { id: "y11m-ch3-graphing", title: "Graphing quadratics", description: "Plotting parabolas, identifying vertex and intercepts.", icon: "📉", lessons: 1, progress: 0 },
          { id: "y11m-ch3-completing-square", title: "Completing the square and turning points", description: "Rewriting in vertex form to find the turning point.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11m-ch3-graphing-poly", title: "Graphing quadratics in polynomial form", description: "Sketching from y = ax² + bx + c using axis of symmetry.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch3-inequalities", title: "Solving quadratic inequalities", description: "Using graphs and sign diagrams for quadratic inequalities.", icon: "↔️", lessons: 1, progress: 0 },
          { id: "y11m-ch3-formula", title: "The general quadratic formula", description: "Deriving and applying x = (-b ± √Δ) / 2a.", icon: "📜", lessons: 1, progress: 0 },
          { id: "y11m-ch3-discriminant", title: "The discriminant", description: "Using Δ = b² − 4ac to determine the nature of roots.", icon: "🔍", lessons: 1, progress: 0 },
          { id: "y11m-ch3-simult-quad", title: "Solving simultaneous linear and quadratic equations", description: "Finding intersections of lines and parabolas.", icon: "✖️", lessons: 1, progress: 0 },
          { id: "y11m-ch3-families", title: "Families of quadratic polynomial functions", description: "Exploring quadratics with shared features via parameters.", icon: "👪", lessons: 1, progress: 0 },
          { id: "y11m-ch3-models", title: "Quadratic models", description: "Applying quadratics to projectile motion and optimisation.", icon: "🚀", lessons: 1, progress: 0 },
          { id: "y11m-ch3-review", title: "Review of Chapter 3", description: "Consolidation and review of quadratics.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch4",
        name: "Ch 4 · A Gallery of Graphs",
        icon: "🎨",
        topics: [
          { id: "y11m-ch4-hyperbolas", title: "Rectangular hyperbolas", description: "Graphing y = a/(x − h) + k and identifying asymptotes.", icon: "〰️", lessons: 1, progress: 0 },
          { id: "y11m-ch4-truncus", title: "The truncus", description: "Graphing y = a/(x − h)² + k and its properties.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch4-y2x", title: "The graph of y² = x", description: "Sketching and interpreting the sideways parabola.", icon: "↩️", lessons: 1, progress: 0 },
          { id: "y11m-ch4-sqrt", title: "The graph of y = √x", description: "Graphing the square root function and transformations.", icon: "√", lessons: 1, progress: 0 },
          { id: "y11m-ch4-circles", title: "Circles", description: "Equation (x − h)² + (y − k)² = r² and graphing circles.", icon: "⭕", lessons: 1, progress: 0 },
          { id: "y11m-ch4-determining-rules", title: "Determining rules", description: "Finding equations of graphs from given information.", icon: "🔎", lessons: 1, progress: 0 },
          { id: "y11m-ch4-review", title: "Review of Chapter 4", description: "Consolidation and review of the gallery of graphs.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch5",
        name: "Ch 5 · Functions and Relations",
        icon: "🔗",
        topics: [
          { id: "y11m-ch5-set-notation", title: "Set notation and sets of numbers", description: "Using set-builder and interval notation for domains.", icon: "{ }", lessons: 1, progress: 0 },
          { id: "y11m-ch5-relations", title: "Relations, domain and range", description: "Defining relations and identifying domain and range.", icon: "↔️", lessons: 1, progress: 0 },
          { id: "y11m-ch5-functions", title: "Functions", description: "The vertical line test and function definition.", icon: "ƒ", lessons: 1, progress: 0 },
          { id: "y11m-ch5-one-to-one", title: "One-to-one functions and implied domains", description: "Horizontal line test and natural domain of expressions.", icon: "1:1", lessons: 1, progress: 0 },
          { id: "y11m-ch5-piecewise", title: "Piecewise-defined functions", description: "Functions defined by different rules on different intervals.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11m-ch5-notation", title: "Applying function notation", description: "Evaluating f(a), f(x+h) and composite expressions.", icon: "f(x)", lessons: 1, progress: 0 },
          { id: "y11m-ch5-inverse", title: "Inverse functions", description: "Finding and graphing inverse functions; reflection in y = x.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11m-ch5-modelling", title: "Functions and modelling exercises", description: "Applying function concepts to real-world modelling.", icon: "🌍", lessons: 1, progress: 0 },
          { id: "y11m-ch5-review", title: "Review of Chapter 5", description: "Consolidation and review of functions and relations.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch6",
        name: "Ch 6 · Polynomials",
        icon: "📐",
        topics: [
          { id: "y11m-ch6-language", title: "The language of polynomials", description: "Degree, leading coefficient, and polynomial terminology.", icon: "🗣️", lessons: 1, progress: 0 },
          { id: "y11m-ch6-division", title: "Division of polynomials", description: "Long division and synthetic division of polynomials.", icon: "➗", lessons: 1, progress: 0 },
          { id: "y11m-ch6-factorisation", title: "Factorisation of polynomials", description: "Factor theorem, remainder theorem and factorising cubics.", icon: "🔗", lessons: 1, progress: 0 },
          { id: "y11m-ch6-cubic-equations", title: "Solving cubic equations", description: "Finding solutions to cubic equations algebraically.", icon: "🧮", lessons: 1, progress: 0 },
          { id: "y11m-ch6-cubic-form", title: "Cubic functions of the form f(x) = a(x − h)³ + k", description: "Graphing cubics in turning-point form.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11m-ch6-cubic-graphs", title: "Graphs of factorised cubic functions", description: "Sketching cubics from factorised form using intercepts.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch6-cubic-inequalities", title: "Solving cubic inequalities", description: "Using sign diagrams and graphs for cubic inequalities.", icon: "↔️", lessons: 1, progress: 0 },
          { id: "y11m-ch6-cubic-families", title: "Families of cubic polynomial functions", description: "Exploring cubics with shared features via parameters.", icon: "👪", lessons: 1, progress: 0 },
          { id: "y11m-ch6-quartic", title: "Quartic and other polynomial functions", description: "Graphing and analysing degree-4 and higher polynomials.", icon: "📉", lessons: 1, progress: 0 },
          { id: "y11m-ch6-applications", title: "Applications of polynomial functions", description: "Modelling with polynomials in real-world contexts.", icon: "🌍", lessons: 1, progress: 0 },
          { id: "y11m-ch6-bisection", title: "The bisection method", description: "Numerical method for approximating roots of polynomials.", icon: "🔪", lessons: 1, progress: 0 },
          { id: "y11m-ch6-review", title: "Review of Chapter 6", description: "Consolidation and review of polynomials.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch7",
        name: "Ch 7 · Transformations",
        icon: "🔄",
        topics: [
          { id: "y11m-ch7-translations", title: "Translations of functions", description: "Horizontal and vertical translations of graphs.", icon: "➡️", lessons: 1, progress: 0 },
          { id: "y11m-ch7-dilations", title: "Dilations and reflections", description: "Stretching, compressing and reflecting function graphs.", icon: "↕️", lessons: 1, progress: 0 },
          { id: "y11m-ch7-combinations", title: "Combinations of transformations", description: "Applying multiple transformations in sequence.", icon: "🔀", lessons: 1, progress: 0 },
          { id: "y11m-ch7-determining", title: "Determining transformations", description: "Identifying transformations from graph comparisons.", icon: "🔍", lessons: 1, progress: 0 },
          { id: "y11m-ch7-graphs", title: "Transformations of graphs of functions", description: "Applying transformations to non-standard functions.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch7-review", title: "Review of Chapter 7", description: "Consolidation and review of transformations.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch8",
        name: "Ch 8 · Revision of Chapters 2–7",
        icon: "📋",
        topics: [
          { id: "y11m-ch8-tech-free", title: "Technology-free questions", description: "Practice without calculator for Unit 1 topics.", icon: "🚫", lessons: 1, progress: 0 },
          { id: "y11m-ch8-mcq", title: "Multiple-choice questions", description: "Multiple-choice revision for Unit 1.", icon: "☑️", lessons: 1, progress: 0 },
          { id: "y11m-ch8-extended", title: "Extended-response questions", description: "Extended-response practice for Unit 1.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11m-ch8-investigations", title: "Investigations", description: "Investigative tasks linking Unit 1 concepts.", icon: "🔬", lessons: 1, progress: 0 },
        ]
      },
      // ──── UNIT 2 ────────────────────────────────────────────────────
      {
        id: "y11m-ch9",
        name: "Ch 9 · Probability",
        icon: "🎲",
        topics: [
          { id: "y11m-ch9-sample-spaces", title: "Sample spaces and probability", description: "Defining sample spaces and calculating probabilities.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11m-ch9-estimating", title: "Estimating probabilities", description: "Relative frequency and experimental probability.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch9-multi-stage", title: "Multi-stage experiments", description: "Tree diagrams and sequential probability.", icon: "🌳", lessons: 1, progress: 0 },
          { id: "y11m-ch9-combining", title: "Combining events", description: "Union, intersection and complement of events.", icon: "∪", lessons: 1, progress: 0 },
          { id: "y11m-ch9-tables", title: "Probability tables", description: "Two-way tables and Karnaugh maps.", icon: "📋", lessons: 1, progress: 0 },
          { id: "y11m-ch9-conditional", title: "Conditional probability", description: "P(A|B) and restricted sample spaces.", icon: "❓", lessons: 1, progress: 0 },
          { id: "y11m-ch9-independent", title: "Independent events", description: "Testing and applying independence of events.", icon: "🔗", lessons: 1, progress: 0 },
          { id: "y11m-ch9-simulation", title: "Solving probability problems using simulation", description: "Using random number generators to estimate probabilities.", icon: "🎮", lessons: 1, progress: 0 },
          { id: "y11m-ch9-pseudocode", title: "Pseudocode for probability and simulation", description: "Writing algorithms for probability simulations.", icon: "💻", lessons: 1, progress: 0 },
          { id: "y11m-ch9-review", title: "Review of Chapter 9", description: "Consolidation and review of probability.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch10",
        name: "Ch 10 · Counting Methods",
        icon: "🔢",
        topics: [
          { id: "y11m-ch10-principles", title: "Addition and multiplication principles", description: "Fundamental counting principles for combined events.", icon: "➕", lessons: 1, progress: 0 },
          { id: "y11m-ch10-arrangements", title: "Arrangements", description: "Permutations and ordered arrangements.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11m-ch10-selections", title: "Selections", description: "Combinations and unordered selections.", icon: "✅", lessons: 1, progress: 0 },
          { id: "y11m-ch10-applications", title: "Applications to probability", description: "Using counting methods to solve probability problems.", icon: "🎲", lessons: 1, progress: 0 },
          { id: "y11m-ch10-review", title: "Review of Chapter 10", description: "Consolidation and review of counting methods.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch11",
        name: "Ch 11 · Discrete Probability Distributions",
        icon: "📊",
        topics: [
          { id: "y11m-ch11-discrete-rv", title: "Discrete random variables", description: "Defining and working with discrete random variables.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11m-ch11-without-replacement", title: "Sampling without replacement", description: "Hypergeometric-style problems and dependent draws.", icon: "📦", lessons: 1, progress: 0 },
          { id: "y11m-ch11-binomial", title: "Sampling with replacement: the binomial distribution", description: "Binomial probability formula and applications.", icon: "🔔", lessons: 1, progress: 0 },
          { id: "y11m-ch11-review", title: "Review of Chapter 11", description: "Consolidation and review of discrete distributions.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch12",
        name: "Ch 12 · Revision of Chapters 9–11",
        icon: "📋",
        topics: [
          { id: "y11m-ch12-tech-free", title: "Technology-free questions", description: "Practice without calculator for probability topics.", icon: "🚫", lessons: 1, progress: 0 },
          { id: "y11m-ch12-mcq", title: "Multiple-choice questions", description: "Multiple-choice revision for probability and counting.", icon: "☑️", lessons: 1, progress: 0 },
          { id: "y11m-ch12-extended", title: "Extended-response questions", description: "Extended-response practice for probability topics.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11m-ch12-investigations", title: "Investigations", description: "Investigative tasks linking probability concepts.", icon: "🔬", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch13",
        name: "Ch 13 · Exponential Functions and Logarithms",
        icon: "📊",
        topics: [
          { id: "y11m-ch13-index-laws", title: "The index laws", description: "Revising and extending index law operations.", icon: "🔢", lessons: 1, progress: 0 },
          { id: "y11m-ch13-rational-indices", title: "Rational indices", description: "Fractional and negative indices and their meaning.", icon: "½", lessons: 1, progress: 0 },
          { id: "y11m-ch13-exp-graphs", title: "Graphs of exponential functions", description: "Graphing y = aˣ and transformations.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11m-ch13-exp-equations", title: "Solving exponential equations and inequalities", description: "Equating indices and solving exponential inequalities.", icon: "🧮", lessons: 1, progress: 0 },
          { id: "y11m-ch13-logarithms", title: "Logarithms", description: "Definition, laws, and evaluating logarithms.", icon: "📋", lessons: 1, progress: 0 },
          { id: "y11m-ch13-log-solving", title: "Using logarithms to solve exponential equations and inequalities", description: "Applying log rules to solve exponential problems.", icon: "🔍", lessons: 1, progress: 0 },
          { id: "y11m-ch13-log-graphs", title: "Graphs of logarithm functions", description: "Graphing y = log_a(x) and transformations.", icon: "📉", lessons: 1, progress: 0 },
          { id: "y11m-ch13-exp-models", title: "Exponential models and applications", description: "Growth, decay and compound interest modelling.", icon: "🌍", lessons: 1, progress: 0 },
          { id: "y11m-ch13-review", title: "Review of Chapter 13", description: "Consolidation and review of exponentials and logarithms.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch14",
        name: "Ch 14 · Circular Functions",
        icon: "🔵",
        topics: [
          { id: "y11m-ch14-radians", title: "Measuring angles in degrees and radians", description: "Converting between degrees and radians.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11m-ch14-sin-cos", title: "Defining circular functions: sine and cosine", description: "Unit circle definitions of sin and cos.", icon: "⭕", lessons: 1, progress: 0 },
          { id: "y11m-ch14-tangent", title: "Another circular function: tangent", description: "Definition and properties of the tangent function.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11m-ch14-symmetry", title: "Symmetry properties of circular functions", description: "Complementary, supplementary and other symmetries.", icon: "🪞", lessons: 1, progress: 0 },
          { id: "y11m-ch14-values", title: "Values of circular functions", description: "Exact values for special angles (0°, 30°, 45°, 60°, 90°).", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11m-ch14-sin-cos-graphs", title: "Graphs of sine and cosine", description: "Graphing y = sin x and y = cos x; amplitude and period.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11m-ch14-trig-equations", title: "Solution of trigonometric equations", description: "Solving sin x = a, cos x = a, tan x = a.", icon: "🧮", lessons: 1, progress: 0 },
          { id: "y11m-ch14-sketch-sin-cos", title: "Sketch graphs of y = a sin(n(t ± ε)) and y = a cos(n(t ± ε))", description: "Amplitude, period and phase shift transformations.", icon: "〰️", lessons: 1, progress: 0 },
          { id: "y11m-ch14-sketch-shifted", title: "Sketch graphs of y = a sin(n(t ± ε)) ± b and y = a cos(n(t ± ε)) ± b", description: "Adding vertical translation to trigonometric graphs.", icon: "↕️", lessons: 1, progress: 0 },
          { id: "y11m-ch14-further-symmetry", title: "Further symmetry properties and the Pythagorean identity", description: "sin²θ + cos²θ = 1 and related identities.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11m-ch14-tan-function", title: "The tangent function", description: "Graphing y = tan x; period, asymptotes and properties.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch14-numerical", title: "Numerical methods with a CAS calculator", description: "Using CAS to solve trigonometric equations numerically.", icon: "💻", lessons: 1, progress: 0 },
          { id: "y11m-ch14-general-solution", title: "General solution of trigonometric equations", description: "Finding all solutions using general solution formulas.", icon: "♾️", lessons: 1, progress: 0 },
          { id: "y11m-ch14-applications", title: "Applications of circular functions", description: "Modelling periodic phenomena with trigonometric functions.", icon: "🌊", lessons: 1, progress: 0 },
          { id: "y11m-ch14-review", title: "Review of Chapter 14", description: "Consolidation and review of circular functions.", icon: "📝", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch15",
        name: "Ch 15 · Revision of Chapters 13–14",
        icon: "📋",
        topics: [
          { id: "y11m-ch15-tech-free", title: "Technology-free questions", description: "Practice without calculator for exponentials and trig.", icon: "🚫", lessons: 1, progress: 0 },
          { id: "y11m-ch15-mcq", title: "Multiple-choice questions", description: "Multiple-choice revision for exponentials and circular functions.", icon: "☑️", lessons: 1, progress: 0 },
          { id: "y11m-ch15-extended", title: "Extended-response questions", description: "Extended-response practice for exponentials and trig.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11m-ch15-investigations", title: "Investigations", description: "Investigative tasks linking exponential and circular function concepts.", icon: "🔬", lessons: 1, progress: 0 },
        ]
      },
      // ──── EXTENDED CALCULUS (Units 1 & 2 platform preview) ──────────
      {
        id: "y11m-ch16",
        name: "Ch 16 · Rates of Change",
        icon: "📊",
        topics: [
          { id: "y11m-ch16-recognising", title: "Recognising relationships", description: "Identifying functional relationships from data and context.", icon: "🔍", lessons: 1, progress: 0 },
          { id: "y11m-ch16-constant", title: "Constant rate of change", description: "Linear functions and constant gradients.", icon: "➡️", lessons: 1, progress: 0 },
          { id: "y11m-ch16-average", title: "Average rate of change", description: "Secant gradient between two points on a curve.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11m-ch16-instantaneous", title: "Instantaneous rate of change", description: "Tangent gradient as a limit of secant gradients.", icon: "⚡", lessons: 1, progress: 0 },
          { id: "y11m-ch16-velocity", title: "Position and average velocity", description: "Displacement, velocity and motion on a line.", icon: "🚗", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch17",
        name: "Ch 17 · Differentiation and Antidifferentiation of Polynomials",
        icon: "∫",
        topics: [
          { id: "y11m-ch17-derivative", title: "The derivative", description: "First-principles definition of the derivative.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11m-ch17-rules", title: "Rules for differentiation", description: "Power rule, constant multiple, sum and difference rules.", icon: "📜", lessons: 1, progress: 0 },
          { id: "y11m-ch17-neg-powers", title: "Differentiating xⁿ where n is a negative integer", description: "Extending the power rule to negative indices.", icon: "⁻¹", lessons: 1, progress: 0 },
          { id: "y11m-ch17-deriv-graphs", title: "Graphs of the derivative function", description: "Sketching f′(x) from f(x) and vice versa.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch17-antidiff", title: "Antidifferentiation of polynomial functions", description: "Finding the general antiderivative of polynomials.", icon: "∫", lessons: 1, progress: 0 },
          { id: "y11m-ch17-limits", title: "Limits and continuity", description: "Evaluating limits and testing continuity of functions.", icon: "→", lessons: 1, progress: 0 },
          { id: "y11m-ch17-differentiable", title: "When is a function differentiable?", description: "Conditions for differentiability; corners and cusps.", icon: "❓", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch18",
        name: "Ch 18 · Applications of Differentiation of Polynomials",
        icon: "📈",
        topics: [
          { id: "y11m-ch18-tangents", title: "Tangents and normals", description: "Finding equations of tangent and normal lines.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11m-ch18-rates", title: "Rates of change", description: "Using derivatives to find rates in applied contexts.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch18-stationary", title: "Stationary points", description: "Finding where f′(x) = 0 and classifying.", icon: "⏸️", lessons: 1, progress: 0 },
          { id: "y11m-ch18-types", title: "Types of stationary points", description: "Local max, local min and points of inflection.", icon: "🏔️", lessons: 1, progress: 0 },
          { id: "y11m-ch18-max-min", title: "Applications to maximum and minimum problems", description: "Optimisation problems using differentiation.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11m-ch18-motion", title: "Applications to motion in a straight line", description: "Position, velocity and acceleration functions.", icon: "🚗", lessons: 1, progress: 0 },
          { id: "y11m-ch18-families", title: "Families of functions and transformations", description: "Differentiating transformed function families.", icon: "👪", lessons: 1, progress: 0 },
          { id: "y11m-ch18-newton", title: "Newton's method", description: "Iterative numerical method for finding roots.", icon: "🔄", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch19",
        name: "Ch 19 · Further Differentiation and Antidifferentiation",
        icon: "∫",
        topics: [
          { id: "y11m-ch19-chain", title: "The chain rule", description: "Differentiating composite functions.", icon: "🔗", lessons: 1, progress: 0 },
          { id: "y11m-ch19-rational-powers", title: "Differentiating rational powers", description: "Power rule for fractional exponents.", icon: "½", lessons: 1, progress: 0 },
          { id: "y11m-ch19-antidiff-rational", title: "Antidifferentiating rational powers", description: "Antiderivatives of xⁿ for rational n.", icon: "∫", lessons: 1, progress: 0 },
          { id: "y11m-ch19-second-deriv", title: "The second derivative", description: "f″(x), concavity and points of inflection.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11m-ch19-sketch", title: "Sketch graphs", description: "Using derivatives to produce accurate function sketches.", icon: "✏️", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-ch20",
        name: "Ch 20 · Integration",
        icon: "∫",
        topics: [
          { id: "y11m-ch20-estimating", title: "Estimating area under a graph", description: "Upper/lower rectangles and trapezoidal approximation.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-ch20-definite", title: "Finding exact area: definite integral", description: "Evaluating definite integrals using antiderivatives.", icon: "∫", lessons: 1, progress: 0 },
          { id: "y11m-ch20-signed", title: "Signed area", description: "Positive and negative area below and above the x-axis.", icon: "±", lessons: 1, progress: 0 },
        ]
      },
      {
        id: "y11m-appendix",
        name: "Appendix · Algorithms and Pseudocode",
        icon: "💻",
        topics: [
          { id: "y11m-app-flowcharts", title: "Algorithms and flowcharts", description: "Representing mathematical processes with flowcharts.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11m-app-iteration", title: "Iteration and selection", description: "Loops and conditional statements in algorithms.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11m-app-pseudocode", title: "Introduction to pseudocode", description: "Writing structured pseudocode for mathematical algorithms.", icon: "💻", lessons: 1, progress: 0 },
        ]
      },
    ]
  },

  // ════════════════════════════════════════════════════════════════════
  // YEAR 11 — VCE SPECIALIST MATHEMATICS (Units 1 & 2)
  // ════════════════════════════════════════════════════════════════════
  {
    id: "year-11-specialist",
    name: "Year 11 Specialist Mathematics",
    description: "VCE Specialist Mathematics Units 1 & 2 — proof, complex numbers, vectors, matrices, combinatorics, and advanced algebra",
    icon: "📓",
    categories: [
      // ══════════════ UNIT 1 ══════════════
      {
        id: "y11s-ch1-reviewing-algebra",
        name: "Ch 1: Reviewing Algebra",
        icon: "🔢",
        topics: [
          { id: "y11s-ch1-indices", title: "Indices", description: "Index laws and simplification of expressions with indices.", icon: "🔢", lessons: 1, progress: 0 },
          { id: "y11s-ch1-standard-form", title: "Standard Form", description: "Expressing numbers in standard form (scientific notation).", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11s-ch1-linear-simul", title: "Solving Linear Equations and Simultaneous Linear Equations", description: "Solving linear equations and systems of two linear equations.", icon: "➗", lessons: 1, progress: 0 },
          { id: "y11s-ch1-problems-linear", title: "Solving Problems with Linear Equations", description: "Applying linear equations to word problems.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11s-ch1-problems-simul", title: "Solving Problems with Simultaneous Linear Equations", description: "Modelling and solving word problems with simultaneous equations.", icon: "⚖️", lessons: 1, progress: 0 },
          { id: "y11s-ch1-substitution-transposition", title: "Substitution and Transposition of Formulas", description: "Substituting into and rearranging formulas.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11s-ch1-algebraic-fractions", title: "Algebraic Fractions", description: "Simplifying, adding, subtracting, multiplying and dividing algebraic fractions.", icon: "✂️", lessons: 1, progress: 0 },
          { id: "y11s-ch1-literal-equations", title: "Literal Equations", description: "Solving equations where unknowns are represented by letters.", icon: "🔠", lessons: 1, progress: 0 },
          { id: "y11s-ch1-cas-algebra", title: "Using a CAS Calculator for Algebra", description: "Using CAS technology for algebraic manipulation and solving.", icon: "🖩", lessons: 1, progress: 0 },
          { id: "y11s-ch1-review", title: "Review of Chapter 1", description: "Consolidation and review of reviewing algebra.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch2-number-systems-sets",
        name: "Ch 2: Number Systems and Sets",
        icon: "🔠",
        topics: [
          { id: "y11s-ch2-set-notation", title: "Set Notation", description: "Set builder notation, element notation, subsets, and Venn diagrams.", icon: "🔠", lessons: 1, progress: 0 },
          { id: "y11s-ch2-sets-of-numbers", title: "Sets of Numbers", description: "Natural, integer, rational, irrational, and real number sets.", icon: "🔢", lessons: 1, progress: 0 },
          { id: "y11s-ch2-surds", title: "Surds", description: "Simplifying surds, rationalising denominators, and operations with surds.", icon: "√", lessons: 1, progress: 0 },
          { id: "y11s-ch2-natural-numbers", title: "Natural Numbers", description: "Properties of natural numbers, primes, and divisibility.", icon: "🔟", lessons: 1, progress: 0 },
          { id: "y11s-ch2-problems-sets", title: "Problems Involving Sets", description: "Applying set operations to solve problems.", icon: "🧩", lessons: 1, progress: 0 },
          { id: "y11s-ch2-review", title: "Review of Chapter 2", description: "Consolidation and review of number systems and sets.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch3-sequences-series",
        name: "Ch 3: Sequences and Series",
        icon: "📊",
        topics: [
          { id: "y11s-ch3-intro-sequences", title: "Introduction to Sequences", description: "Defining sequences, terms, and notation.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11s-ch3-arithmetic-sequences", title: "Arithmetic Sequences", description: "Common difference, nth term formula, and properties.", icon: "➕", lessons: 1, progress: 0 },
          { id: "y11s-ch3-arithmetic-series", title: "Arithmetic Series", description: "Sum of arithmetic sequences using Sₙ formulas.", icon: "∑", lessons: 1, progress: 0 },
          { id: "y11s-ch3-geometric-sequences", title: "Geometric Sequences", description: "Common ratio, nth term, and properties.", icon: "✖️", lessons: 1, progress: 0 },
          { id: "y11s-ch3-geometric-series", title: "Geometric Series", description: "Sum of geometric sequences.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11s-ch3-applications-geometric", title: "Applications of Geometric Sequences", description: "Growth, decay, and financial applications.", icon: "💰", lessons: 1, progress: 0 },
          { id: "y11s-ch3-recurrence-relations", title: "Recurrence Relations of the Form tₙ = r·tₙ₋₁ + d", description: "First-order linear recurrence relations.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11s-ch3-zeno-infinite-series", title: "Zeno's Paradox and Infinite Geometric Series", description: "Convergent geometric series and sum to infinity.", icon: "♾️", lessons: 1, progress: 0 },
          { id: "y11s-ch3-review", title: "Review of Chapter 3", description: "Consolidation and review of sequences and series.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch4-additional-algebra",
        name: "Ch 4: Additional Algebra",
        icon: "📐",
        topics: [
          { id: "y11s-ch4-polynomial-identities", title: "Polynomial Identities", description: "Expanding and manipulating polynomial identities.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11s-ch4-quadratic-equations", title: "Quadratic Equations", description: "Solving quadratics by factorising, completing the square, and the formula.", icon: "⛰️", lessons: 1, progress: 0 },
          { id: "y11s-ch4-rate-problems", title: "Applying Quadratic Equations to Rate Problems", description: "Using quadratics to model and solve rate problems.", icon: "⏱️", lessons: 1, progress: 0 },
          { id: "y11s-ch4-partial-fractions", title: "Partial Fractions", description: "Decomposing rational expressions into partial fractions.", icon: "✂️", lessons: 1, progress: 0 },
          { id: "y11s-ch4-simultaneous-equations", title: "Simultaneous Equations", description: "Solving systems including non-linear simultaneous equations.", icon: "⚖️", lessons: 1, progress: 0 },
          { id: "y11s-ch4-review", title: "Review of Chapter 4", description: "Consolidation and review of additional algebra.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch5-revision-unit1a",
        name: "Ch 5: Revision of Chapters 1–4",
        icon: "📝",
        topics: [
          { id: "y11s-ch5-tech-free", title: "Technology-Free Questions", description: "Non-calculator revision questions for Chapters 1–4.", icon: "✏️", lessons: 1, progress: 0 },
          { id: "y11s-ch5-multiple-choice", title: "Multiple-Choice Questions", description: "Multiple-choice revision for Chapters 1–4.", icon: "🔘", lessons: 1, progress: 0 },
          { id: "y11s-ch5-extended-response", title: "Extended-Response Questions", description: "Extended-response revision for Chapters 1–4.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11s-ch5-investigations", title: "Investigations", description: "Investigation tasks for Chapters 1–4.", icon: "🔍", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch6-proof",
        name: "Ch 6: Proof",
        icon: "✅",
        topics: [
          { id: "y11s-ch6-direct-proof", title: "Direct Proof", description: "Proving statements directly from definitions and axioms.", icon: "✅", lessons: 1, progress: 0 },
          { id: "y11s-ch6-contrapositive", title: "Proof by Contrapositive", description: "Proving statements by proving the contrapositive.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11s-ch6-contradiction", title: "Proof by Contradiction", description: "Assuming the negation and deriving a contradiction.", icon: "❌", lessons: 1, progress: 0 },
          { id: "y11s-ch6-equivalent-statements", title: "Equivalent Statements", description: "If and only if proofs and logical equivalence.", icon: "↔️", lessons: 1, progress: 0 },
          { id: "y11s-ch6-disproving", title: "Disproving Statements", description: "Using counterexamples to disprove mathematical claims.", icon: "🚫", lessons: 1, progress: 0 },
          { id: "y11s-ch6-induction", title: "Mathematical Induction", description: "Proof by mathematical induction: base case and inductive step.", icon: "🔁", lessons: 1, progress: 0 },
          { id: "y11s-ch6-review", title: "Review of Chapter 6", description: "Consolidation and review of proof techniques.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch7-logic",
        name: "Ch 7: Logic",
        icon: "🧠",
        topics: [
          { id: "y11s-ch7-algebra-of-sets", title: "The Algebra of Sets", description: "Set operations, De Morgan's laws, and distributive laws.", icon: "🔠", lessons: 1, progress: 0 },
          { id: "y11s-ch7-switching-circuits", title: "Switching Circuits", description: "Representing logical expressions as switching circuits.", icon: "💡", lessons: 1, progress: 0 },
          { id: "y11s-ch7-boolean-algebra", title: "Boolean Algebra", description: "Boolean operations, simplification, and laws.", icon: "🔲", lessons: 1, progress: 0 },
          { id: "y11s-ch7-truth-tables", title: "Logical Connectives and Truth Tables", description: "Conjunction, disjunction, negation, implication, and truth tables.", icon: "📋", lessons: 1, progress: 0 },
          { id: "y11s-ch7-valid-arguments", title: "Valid Arguments", description: "Validity, soundness, and common argument forms.", icon: "⚖️", lessons: 1, progress: 0 },
          { id: "y11s-ch7-logic-circuits", title: "Logic Circuits", description: "AND, OR, NOT gates and circuit design.", icon: "🔌", lessons: 1, progress: 0 },
          { id: "y11s-ch7-karnaugh-maps", title: "Karnaugh Maps", description: "Simplifying Boolean expressions using Karnaugh maps.", icon: "🗺️", lessons: 1, progress: 0 },
          { id: "y11s-ch7-review", title: "Review of Chapter 7", description: "Consolidation and review of logic.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch8-algorithms",
        name: "Ch 8: Algorithms",
        icon: "🔲",
        topics: [
          { id: "y11s-ch8-intro-algorithms", title: "Introduction to Algorithms", description: "What is an algorithm? Flowcharts and step-by-step processes.", icon: "🔲", lessons: 1, progress: 0 },
          { id: "y11s-ch8-iteration-selection", title: "Iteration and Selection", description: "Loops and conditional branching in algorithms.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11s-ch8-intro-pseudocode", title: "Introduction to Pseudocode", description: "Writing algorithms in structured pseudocode.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11s-ch8-further-pseudocode", title: "Further Pseudocode", description: "Advanced pseudocode techniques and nested structures.", icon: "🧩", lessons: 1, progress: 0 },
          { id: "y11s-ch8-review", title: "Review of Chapter 8", description: "Consolidation and review of algorithms.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch9-combinatorics",
        name: "Ch 9: Combinatorics",
        icon: "🎯",
        topics: [
          { id: "y11s-ch9-basic-counting", title: "Basic Counting Methods", description: "Addition and multiplication principles for counting.", icon: "🔢", lessons: 1, progress: 0 },
          { id: "y11s-ch9-factorial-permutations", title: "Factorial Notation and Permutations", description: "n! notation and permutations of distinct objects.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11s-ch9-permutations-restrictions", title: "Permutations with Restrictions", description: "Counting arrangements with constraints.", icon: "🚧", lessons: 1, progress: 0 },
          { id: "y11s-ch9-permutations-like", title: "Permutations of Like Objects", description: "Counting arrangements when objects are repeated.", icon: "🔁", lessons: 1, progress: 0 },
          { id: "y11s-ch9-combinations", title: "Combinations", description: "Choosing r objects from n: ⁿCᵣ formula.", icon: "🎲", lessons: 1, progress: 0 },
          { id: "y11s-ch9-combinations-restrictions", title: "Combinations with Restrictions", description: "Counting selections with constraints.", icon: "🚧", lessons: 1, progress: 0 },
          { id: "y11s-ch9-pascal-triangle", title: "Pascal's Triangle", description: "Properties and applications of Pascal's triangle.", icon: "🔺", lessons: 1, progress: 0 },
          { id: "y11s-ch9-pigeonhole", title: "The Pigeonhole Principle", description: "If n items in m containers with n > m, at least one has ≥ 2.", icon: "🐦", lessons: 1, progress: 0 },
          { id: "y11s-ch9-inclusion-exclusion", title: "The Inclusion–Exclusion Principle", description: "|A ∪ B| = |A| + |B| − |A ∩ B| and extensions.", icon: "⭕", lessons: 1, progress: 0 },
          { id: "y11s-ch9-review", title: "Review of Chapter 9", description: "Consolidation and review of combinatorics.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch10-revision-unit1b",
        name: "Ch 10: Revision of Chapters 6–9",
        icon: "📝",
        topics: [
          { id: "y11s-ch10-tech-free", title: "Technology-Free Questions", description: "Non-calculator revision questions for Chapters 6–9.", icon: "✏️", lessons: 1, progress: 0 },
          { id: "y11s-ch10-multiple-choice", title: "Multiple-Choice Questions", description: "Multiple-choice revision for Chapters 6–9.", icon: "🔘", lessons: 1, progress: 0 },
          { id: "y11s-ch10-extended-response", title: "Extended-Response Questions", description: "Extended-response revision for Chapters 6–9.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11s-ch10-investigations", title: "Investigations", description: "Investigation tasks for Chapters 6–9.", icon: "🔍", lessons: 1, progress: 0 }
        ]
      },
      // ══════════════ UNIT 2 ══════════════
      {
        id: "y11s-ch11-matrices",
        name: "Ch 11: Matrices",
        icon: "🧮",
        topics: [
          { id: "y11s-ch11-matrix-notation", title: "Matrix Notation", description: "Order, elements, and types of matrices.", icon: "🧮", lessons: 1, progress: 0 },
          { id: "y11s-ch11-add-subtract-scalar", title: "Addition, Subtraction and Multiplication by a Real Number", description: "Matrix addition, subtraction, and scalar multiplication.", icon: "➕", lessons: 1, progress: 0 },
          { id: "y11s-ch11-multiplication", title: "Multiplication of Matrices", description: "Matrix multiplication rules and properties.", icon: "✖️", lessons: 1, progress: 0 },
          { id: "y11s-ch11-inverses-2x2", title: "Identities, Inverses and Determinants for 2×2 Matrices", description: "Identity matrix, finding inverses, and determinants for 2×2.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11s-ch11-simul-2x2", title: "Solution of Simultaneous Equations Using Matrices", description: "Solving 2×2 systems using inverse matrices.", icon: "⚖️", lessons: 1, progress: 0 },
          { id: "y11s-ch11-inverses-nxn", title: "Inverses and Determinants for n×n Matrices", description: "Extending inverse and determinant concepts to larger matrices.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11s-ch11-simul-3plus", title: "Simultaneous Linear Equations with More Than Two Variables", description: "Solving 3×3 and larger systems using matrices.", icon: "🔢", lessons: 1, progress: 0 },
          { id: "y11s-ch11-review", title: "Review of Chapter 11", description: "Consolidation and review of matrices.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch12-graph-theory",
        name: "Ch 12: Graph Theory",
        icon: "🕸️",
        topics: [
          { id: "y11s-ch12-graphs-adjacency", title: "Graphs and Adjacency Matrices", description: "Vertices, edges, degree, and adjacency matrix representation.", icon: "🕸️", lessons: 1, progress: 0 },
          { id: "y11s-ch12-euler-circuits", title: "Euler Circuits", description: "Euler paths, circuits, and conditions for existence.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11s-ch12-hamiltonian-cycles", title: "Hamiltonian Cycles", description: "Hamiltonian paths and cycles in graphs.", icon: "🔁", lessons: 1, progress: 0 },
          { id: "y11s-ch12-matrix-powers", title: "Using Matrix Powers to Count Walks in Graphs", description: "Aⁿ entries count walks of length n between vertices.", icon: "🧮", lessons: 1, progress: 0 },
          { id: "y11s-ch12-special-graphs", title: "Regular, Cycle, Complete and Bipartite Graphs", description: "Properties and examples of special graph types.", icon: "⭕", lessons: 1, progress: 0 },
          { id: "y11s-ch12-trees", title: "Trees", description: "Tree properties, spanning trees, and applications.", icon: "🌳", lessons: 1, progress: 0 },
          { id: "y11s-ch12-euler-formula", title: "Euler's Formula and the Platonic Solids", description: "v − e + f = 2 and its applications to planar graphs.", icon: "🔷", lessons: 1, progress: 0 },
          { id: "y11s-ch12-even-degree", title: "Appendix: When Every Vertex Has Even Degree", description: "Properties of graphs where all vertices have even degree.", icon: "📎", lessons: 1, progress: 0 },
          { id: "y11s-ch12-review", title: "Review of Chapter 12", description: "Consolidation and review of graph theory.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch13-revision-unit2a",
        name: "Ch 13: Revision of Chapters 11–12",
        icon: "📝",
        topics: [
          { id: "y11s-ch13-tech-free", title: "Technology-Free Questions", description: "Non-calculator revision for Chapters 11–12.", icon: "✏️", lessons: 1, progress: 0 },
          { id: "y11s-ch13-multiple-choice", title: "Multiple-Choice Questions", description: "Multiple-choice revision for Chapters 11–12.", icon: "🔘", lessons: 1, progress: 0 },
          { id: "y11s-ch13-extended-response", title: "Extended-Response Questions", description: "Extended-response revision for Chapters 11–12.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11s-ch13-investigations", title: "Investigations", description: "Investigation tasks for Chapters 11–12.", icon: "🔍", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch14-sampling-distributions",
        name: "Ch 14: Simulation, Sampling and Sampling Distributions",
        icon: "📊",
        topics: [
          { id: "y11s-ch14-expected-variance", title: "Expected Value and Variance for Discrete Random Variables", description: "E(X), Var(X), and standard deviation for discrete distributions.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11s-ch14-sums-random", title: "Distribution of Sums of Random Variables", description: "Properties of sums of independent random variables.", icon: "➕", lessons: 1, progress: 0 },
          { id: "y11s-ch14-populations-samples", title: "Populations and Samples", description: "Population parameters vs sample statistics.", icon: "👥", lessons: 1, progress: 0 },
          { id: "y11s-ch14-sample-mean-simulation", title: "Investigating the Distribution of the Sample Mean Using Simulation", description: "Central Limit Theorem exploration through simulation.", icon: "🎲", lessons: 1, progress: 0 },
          { id: "y11s-ch14-review", title: "Review of Chapter 14", description: "Consolidation and review of sampling distributions.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch15-trig-ratios-applications",
        name: "Ch 15: Trigonometric Ratios and Applications",
        icon: "📐",
        topics: [
          { id: "y11s-ch15-reviewing-trig", title: "Reviewing Trigonometry", description: "Review of sine, cosine, and tangent ratios.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11s-ch15-sine-rule", title: "The Sine Rule", description: "a/sin A = b/sin B = c/sin C and applications.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11s-ch15-cosine-rule", title: "The Cosine Rule", description: "c² = a² + b² − 2ab cos C and applications.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11s-ch15-area-triangle", title: "The Area of a Triangle", description: "Area = ½ab sin C and Heron's formula.", icon: "🔺", lessons: 1, progress: 0 },
          { id: "y11s-ch15-circle-mensuration", title: "Circle Mensuration", description: "Arc length, sector area, and segment area.", icon: "⭕", lessons: 1, progress: 0 },
          { id: "y11s-ch15-elevation-depression-bearings", title: "Angles of Elevation, Angles of Depression and Bearings", description: "Applying trigonometry to elevation, depression, and bearings.", icon: "🧭", lessons: 1, progress: 0 },
          { id: "y11s-ch15-3d-problems", title: "Problems in Three Dimensions", description: "Trigonometry in 3D contexts.", icon: "🧊", lessons: 1, progress: 0 },
          { id: "y11s-ch15-angles-between-planes", title: "Angles Between Planes and More Difficult 3D Problems", description: "Finding angles between planes and complex 3D applications.", icon: "📦", lessons: 1, progress: 0 },
          { id: "y11s-ch15-review", title: "Review of Chapter 15", description: "Consolidation and review of trigonometric ratios.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch16-trig-identities",
        name: "Ch 16: Trigonometric Identities",
        icon: "🔁",
        topics: [
          { id: "y11s-ch16-reciprocal-pythagorean", title: "Reciprocal Circular Functions and the Pythagorean Identity", description: "sec, csc, cot and sin²θ + cos²θ = 1.", icon: "🔁", lessons: 1, progress: 0 },
          { id: "y11s-ch16-compound-double", title: "Compound and Double Angle Formulas", description: "sin(A±B), cos(A±B), tan(A±B), sin 2A, cos 2A, tan 2A.", icon: "✖️", lessons: 1, progress: 0 },
          { id: "y11s-ch16-acosx-bsinx", title: "Simplifying a cos x + b sin x", description: "Writing a cos x + b sin x in the form R cos(x ± α).", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11s-ch16-sums-products", title: "Sums and Products of Sines and Cosines", description: "Sum-to-product and product-to-sum formulas.", icon: "➕", lessons: 1, progress: 0 },
          { id: "y11s-ch16-review", title: "Review of Chapter 16", description: "Consolidation and review of trigonometric identities.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch17-graphing-functions",
        name: "Ch 17: Graphing Functions and Relations",
        icon: "📈",
        topics: [
          { id: "y11s-ch17-inverse-circular", title: "The Inverse Circular Functions", description: "sin⁻¹, cos⁻¹, tan⁻¹: domains, ranges, and graphs.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11s-ch17-reciprocal-functions", title: "Reciprocal Functions", description: "Graphs of y = 1/f(x) from y = f(x).", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11s-ch17-reciprocal-circular", title: "Graphing the Reciprocal Circular Functions", description: "Graphs of sec, csc, and cot.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11s-ch17-modulus", title: "The Modulus Function", description: "|x| definition, properties, and graphing.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11s-ch17-locus", title: "Locus of Points", description: "Describing sets of points satisfying given conditions.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11s-ch17-parabolas", title: "Parabolas", description: "Focus-directrix definition and graphing parabolas.", icon: "⛰️", lessons: 1, progress: 0 },
          { id: "y11s-ch17-ellipses", title: "Ellipses", description: "Standard form, foci, and graphing ellipses.", icon: "⭕", lessons: 1, progress: 0 },
          { id: "y11s-ch17-hyperbolas", title: "Hyperbolas", description: "Standard form, asymptotes, and graphing hyperbolas.", icon: "〰️", lessons: 1, progress: 0 },
          { id: "y11s-ch17-parametric", title: "Parametric Equations", description: "Representing curves using parametric form.", icon: "🔗", lessons: 1, progress: 0 },
          { id: "y11s-ch17-polar-coords", title: "Polar Coordinates", description: "Converting between Cartesian and polar coordinates.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11s-ch17-polar-graphing", title: "Graphing Using Polar Coordinates", description: "Plotting curves in polar form.", icon: "🌀", lessons: 1, progress: 0 },
          { id: "y11s-ch17-review", title: "Review of Chapter 17", description: "Consolidation and review of graphing functions and relations.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch18-complex-numbers",
        name: "Ch 18: Complex Numbers",
        icon: "🔵",
        topics: [
          { id: "y11s-ch18-building-complex", title: "Starting to Build the Complex Numbers", description: "The imaginary unit i, and complex number form a + bi.", icon: "🔵", lessons: 1, progress: 0 },
          { id: "y11s-ch18-multiply-divide", title: "Multiplication and Division of Complex Numbers", description: "Multiplying and dividing complex numbers.", icon: "✖️", lessons: 1, progress: 0 },
          { id: "y11s-ch18-argand", title: "Argand Diagrams", description: "Representing complex numbers on the Argand plane.", icon: "📊", lessons: 1, progress: 0 },
          { id: "y11s-ch18-quadratic-complex", title: "Solving Quadratic Equations over the Complex Numbers", description: "Using the discriminant and complex roots.", icon: "⛰️", lessons: 1, progress: 0 },
          { id: "y11s-ch18-polynomial-complex", title: "Solving Polynomial Equations over the Complex Numbers", description: "Factor theorem and conjugate root theorem.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11s-ch18-polar-form", title: "Polar Form of a Complex Number", description: "r cis θ, modulus, and argument.", icon: "🎯", lessons: 1, progress: 0 },
          { id: "y11s-ch18-sketching-subsets", title: "Sketching Subsets of the Complex Plane", description: "Regions and curves in the complex plane.", icon: "✏️", lessons: 1, progress: 0 },
          { id: "y11s-ch18-review", title: "Review of Chapter 18", description: "Consolidation and review of complex numbers.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch19-revision-unit2b",
        name: "Ch 19: Revision of Chapters 15–18",
        icon: "📝",
        topics: [
          { id: "y11s-ch19-tech-free", title: "Technology-Free Questions", description: "Non-calculator revision for Chapters 15–18.", icon: "✏️", lessons: 1, progress: 0 },
          { id: "y11s-ch19-multiple-choice", title: "Multiple-Choice Questions", description: "Multiple-choice revision for Chapters 15–18.", icon: "🔘", lessons: 1, progress: 0 },
          { id: "y11s-ch19-extended-response", title: "Extended-Response Questions", description: "Extended-response revision for Chapters 15–18.", icon: "📝", lessons: 1, progress: 0 },
          { id: "y11s-ch19-investigations", title: "Investigations", description: "Investigation tasks for Chapters 15–18.", icon: "🔍", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch20-transformations-plane",
        name: "Ch 20: Transformations of the Plane",
        icon: "🔄",
        topics: [
          { id: "y11s-ch20-linear-transformations", title: "Linear Transformations", description: "Definition and properties of linear transformations.", icon: "🔄", lessons: 1, progress: 0 },
          { id: "y11s-ch20-geometric", title: "Geometric Transformations", description: "Reflections, rotations, and dilations as matrices.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11s-ch20-rotations-reflections", title: "Rotations and General Reflections", description: "Rotation and reflection matrices and their properties.", icon: "🔁", lessons: 1, progress: 0 },
          { id: "y11s-ch20-composition", title: "Composition of Transformations", description: "Combining transformations using matrix multiplication.", icon: "🔗", lessons: 1, progress: 0 },
          { id: "y11s-ch20-inverse", title: "Inverse Transformations", description: "Finding and applying inverse transformations.", icon: "↩️", lessons: 1, progress: 0 },
          { id: "y11s-ch20-transforming-graphs", title: "Transformations of Straight Lines and Other Graphs", description: "Applying transformations to graph equations.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11s-ch20-area-determinant", title: "Area and Determinant", description: "Relationship between area scale factor and determinant.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11s-ch20-general", title: "General Transformations", description: "Affine and other general transformations.", icon: "🔀", lessons: 1, progress: 0 },
          { id: "y11s-ch20-review", title: "Review of Chapter 20", description: "Consolidation and review of transformations.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch21-vectors",
        name: "Ch 21: Vectors in the Plane",
        icon: "➡️",
        topics: [
          { id: "y11s-ch21-intro-vectors", title: "Introduction to Vectors", description: "Magnitude, direction, and vector notation.", icon: "➡️", lessons: 1, progress: 0 },
          { id: "y11s-ch21-components", title: "Components of Vectors", description: "Resolving vectors into i and j components.", icon: "📐", lessons: 1, progress: 0 },
          { id: "y11s-ch21-scalar-product", title: "Scalar Product of Vectors", description: "Dot product: a·b = |a||b|cos θ.", icon: "✖️", lessons: 1, progress: 0 },
          { id: "y11s-ch21-projections", title: "Vector Projections", description: "Scalar and vector projections.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11s-ch21-geometric-proofs", title: "Geometric Proofs", description: "Using vectors to prove geometric results.", icon: "✅", lessons: 1, progress: 0 },
          { id: "y11s-ch21-displacement-velocity", title: "Applications of Vectors: Displacement and Velocity", description: "Position vectors, displacement, and velocity.", icon: "🏃", lessons: 1, progress: 0 },
          { id: "y11s-ch21-relative-velocity", title: "Applications of Vectors: Relative Velocity", description: "Relative velocity and navigation problems.", icon: "🚢", lessons: 1, progress: 0 },
          { id: "y11s-ch21-forces-equilibrium", title: "Applications of Vectors: Forces and Equilibrium", description: "Force vectors, resultants, and equilibrium conditions.", icon: "⚖️", lessons: 1, progress: 0 },
          { id: "y11s-ch21-3d-vectors", title: "Vectors in Three Dimensions", description: "Extending vector concepts to 3D space.", icon: "🧊", lessons: 1, progress: 0 },
          { id: "y11s-ch21-review", title: "Review of Chapter 21", description: "Consolidation and review of vectors.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch22-revision-unit2c",
        name: "Ch 22: Revision of Chapters 20–21",
        icon: "📝",
        topics: [
          { id: "y11s-ch22-tech-free", title: "Technology-Free Questions", description: "Non-calculator revision for Chapters 20–21.", icon: "✏️", lessons: 1, progress: 0 },
          { id: "y11s-ch22-multiple-choice", title: "Multiple-Choice Questions", description: "Multiple-choice revision for Chapters 20–21.", icon: "🔘", lessons: 1, progress: 0 },
          { id: "y11s-ch22-extended-response", title: "Extended-Response Questions", description: "Extended-response revision for Chapters 20–21.", icon: "📝", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-ch23-kinematics",
        name: "Ch 23: Kinematics (Online Chapter)",
        icon: "🏃",
        topics: [
          { id: "y11s-ch23-position-velocity-accel", title: "Position, Velocity and Acceleration", description: "Defining position, velocity, and acceleration as functions of time.", icon: "🏃", lessons: 1, progress: 0 },
          { id: "y11s-ch23-antidiff-kinematics", title: "Applications of Antidifferentiation to Kinematics", description: "Finding displacement and velocity from acceleration.", icon: "∫", lessons: 1, progress: 0 },
          { id: "y11s-ch23-constant-acceleration", title: "Constant Acceleration", description: "SUVAT equations and applications.", icon: "📏", lessons: 1, progress: 0 },
          { id: "y11s-ch23-velocity-time-graphs", title: "Velocity-Time Graphs", description: "Interpreting v-t graphs for displacement and acceleration.", icon: "📈", lessons: 1, progress: 0 },
          { id: "y11s-ch23-review", title: "Review of Chapter 23", description: "Consolidation and review of kinematics.", icon: "📋", lessons: 1, progress: 0 }
        ]
      },
      {
        id: "y11s-appendix-cas",
        name: "Appendix: CAS & Coding Guides",
        icon: "💻",
        topics: [
          { id: "y11s-app-ti-nspire", title: "Guide to TI-Nspire CAS Calculator in VCE Mathematics", description: "Using the TI-Nspire for VCE mathematics.", icon: "🖩", lessons: 1, progress: 0 },
          { id: "y11s-app-casio-classpad", title: "Guide to Casio ClassPad II CAS Calculator in VCE Mathematics", description: "Using the Casio ClassPad for VCE mathematics.", icon: "🖩", lessons: 1, progress: 0 },
          { id: "y11s-app-python", title: "Introduction to Coding Using Python", description: "Python programming basics for mathematics.", icon: "🐍", lessons: 1, progress: 0 },
          { id: "y11s-app-ti-coding", title: "Introduction to Coding Using the TI-Nspire", description: "Programming on the TI-Nspire calculator.", icon: "💻", lessons: 1, progress: 0 },
          { id: "y11s-app-casio-coding", title: "Introduction to Coding Using the Casio ClassPad", description: "Programming on the Casio ClassPad.", icon: "💻", lessons: 1, progress: 0 }
        ]
      }
    ]
  }
);

// ════════════════════════════════════════════════════════════════════
// YEAR 12 — VCE GENERAL MATHEMATICS (Units 3 & 4)
// 16 chapters: Data Analysis, Recursion & Financial Modelling,
// Matrices, Networks & Decision Mathematics + revision/exam chapters.
// ════════════════════════════════════════════════════════════════════
curriculum.push({
  id: "year-12-general",
  name: "Year 12 General Mathematics",
  description: "VCE General Mathematics Units 3 & 4 — Data Analysis, Recursion & Financial Modelling, Matrices, and Networks & Decision Mathematics, with full exam revision chapters.",
  icon: "📕",
  categories: [
    // ── AREA OF STUDY 1: DATA ANALYSIS ──────────────────────────────
    {
      id: "y12g-ch1",
      name: "Ch 1: Investigating Data Distributions",
      icon: "📊",
      topics: [
        { id: "y12g-ch1-1a-types-of-data", title: "1A: Types of Data", description: "Categorical vs numerical, discrete vs continuous data.", icon: "🗂️", lessons: 1, progress: 0 },
        { id: "y12g-ch1-1b-categorical-display", title: "1B: Displaying & Describing Categorical Variables", description: "Frequency tables, bar charts and segmented bar charts.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12g-ch1-1c-numerical-display", title: "1C: Displaying & Describing Numerical Data", description: "Histograms and describing distribution shape.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12g-ch1-1d-dot-stem-plots", title: "1D: Dot Plots & Stem Plots", description: "Constructing and interpreting dot plots and stem-and-leaf plots.", icon: "🔘", lessons: 1, progress: 0 },
        { id: "y12g-ch1-1e-log-scale", title: "1E: Logarithmic (Base 10) Scale", description: "Using log scales to display data spanning many orders of magnitude.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12g-ch1-1f-centre-spread", title: "1F: Measures of Centre & Spread", description: "Mean, median, range, IQR and standard deviation.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12g-ch1-1g-five-number-boxplots", title: "1G: Five-Number Summary & Boxplots", description: "Constructing boxplots and identifying outliers.", icon: "📦", lessons: 1, progress: 0 },
        { id: "y12g-ch1-1h-normal-68-95-99", title: "1H: Normal Distribution & the 68–95–99.7 Rule", description: "Standard deviations and z-scores in normal distributions.", icon: "🔔", lessons: 1, progress: 0 },
        { id: "y12g-ch1-1i-populations-samples", title: "1I: Populations & Samples", description: "Sampling methods and inference about populations.", icon: "👥", lessons: 1, progress: 0 },
        { id: "y12g-ch1-review", title: "Review of Chapter 1", description: "Consolidation of investigating data distributions.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch2",
      name: "Ch 2: Investigating Associations Between Two Variables",
      icon: "🔗",
      topics: [
        { id: "y12g-ch2-2a-bivariate-classify", title: "2A: Bivariate Data — Classifying Variables", description: "Identifying explanatory and response variables.", icon: "🧭", lessons: 1, progress: 0 },
        { id: "y12g-ch2-2b-cat-cat", title: "2B: Associations Between Categorical Variables", description: "Two-way frequency tables and percentaged tables.", icon: "📋", lessons: 1, progress: 0 },
        { id: "y12g-ch2-2c-num-cat", title: "2C: Association Between Numerical & Categorical Variables", description: "Parallel boxplots and back-to-back stem plots.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12g-ch2-2d-num-num", title: "2D: Associations Between Two Numerical Variables", description: "Constructing scatterplots.", icon: "✳️", lessons: 1, progress: 0 },
        { id: "y12g-ch2-2e-interpret-scatter", title: "2E: Interpreting Scatterplots", description: "Direction, form, strength and outliers.", icon: "🔍", lessons: 1, progress: 0 },
        { id: "y12g-ch2-2f-correlation", title: "2F: Strength of Linear Relationship — Correlation Coefficient", description: "Pearson's r and its interpretation.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12g-ch2-2g-r-squared", title: "2G: Coefficient of Determination", description: "Calculating and interpreting r².", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12g-ch2-2h-correlation-causation", title: "2H: Correlation & Causation", description: "Distinguishing association from cause.", icon: "⚠️", lessons: 1, progress: 0 },
        { id: "y12g-ch2-2i-choosing-graphs", title: "2I: Choosing Appropriate Graphs", description: "Matching graph type to data type and purpose.", icon: "🎯", lessons: 1, progress: 0 },
        { id: "y12g-ch2-review", title: "Review of Chapter 2", description: "Consolidation of associations between two variables.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch3",
      name: "Ch 3: Investigating & Modelling Linear Associations",
      icon: "📈",
      topics: [
        { id: "y12g-ch3-3a-least-squares", title: "3A: Least Squares Regression Line", description: "Calculating slope and intercept using technology.", icon: "📏", lessons: 1, progress: 0 },
        { id: "y12g-ch3-3b-modelling-regression", title: "3B: Modelling Relationships Using Regression", description: "Interpreting slope and intercept in context.", icon: "🧱", lessons: 1, progress: 0 },
        { id: "y12g-ch3-3c-conducting-regression", title: "3C: Conducting a Regression Analysis", description: "Residual plots and assessing fit.", icon: "🔬", lessons: 1, progress: 0 },
        { id: "y12g-ch3-review", title: "Review of Chapter 3", description: "Consolidation of linear regression analysis.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch4",
      name: "Ch 4: Data Transformation",
      icon: "🔄",
      topics: [
        { id: "y12g-ch4-4a-squared", title: "4A: Squared Transformation", description: "Linearising data using x² or y² transformations.", icon: "²️⃣", lessons: 1, progress: 0 },
        { id: "y12g-ch4-4b-log", title: "4B: Log Transformation", description: "Using log₁₀ to linearise non-linear data.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12g-ch4-4c-reciprocal", title: "4C: Reciprocal Transformation", description: "Using 1/x or 1/y transformations.", icon: "➗", lessons: 1, progress: 0 },
        { id: "y12g-ch4-4d-choosing", title: "4D: Choosing & Applying Transformations", description: "Selecting the appropriate transformation for the data.", icon: "🎯", lessons: 1, progress: 0 },
        { id: "y12g-ch4-review", title: "Review of Chapter 4", description: "Consolidation of data transformations.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch5",
      name: "Ch 5: Investigating & Modelling Time Series",
      icon: "⏱️",
      topics: [
        { id: "y12g-ch5-5a-time-series-data", title: "5A: Time Series Data", description: "Identifying trend, seasonality, cycles and irregular variation.", icon: "📅", lessons: 1, progress: 0 },
        { id: "y12g-ch5-5b-moving-mean", title: "5B: Moving Mean Smoothing", description: "Smoothing time series with moving means.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12g-ch5-5c-moving-median", title: "5C: Moving Median Smoothing", description: "Smoothing using moving medians and graphical methods.", icon: "📉", lessons: 1, progress: 0 },
        { id: "y12g-ch5-5d-seasonal-indices", title: "5D: Seasonal Indices", description: "Calculating and applying seasonal indices.", icon: "🌦️", lessons: 1, progress: 0 },
        { id: "y12g-ch5-5e-trend-forecast", title: "5E: Trend Lines & Forecasting", description: "Fitting trend lines and forecasting future values.", icon: "🔮", lessons: 1, progress: 0 },
        { id: "y12g-ch5-review", title: "Review of Chapter 5", description: "Consolidation of time series modelling.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch6",
      name: "Ch 6: Revision — Data Analysis",
      icon: "📝",
      topics: [
        { id: "y12g-ch6-6a-exam1-univariate", title: "6A: Exam 1 Style Questions — Univariate Data", description: "Multiple-choice practice on univariate data.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12g-ch6-6b-exam1-associations", title: "6B: Exam 1 Style Questions — Associations", description: "Multiple-choice practice on associations.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12g-ch6-6c-exam1-regression", title: "6C: Exam 1 Style Questions — Regression & Transformation", description: "Multiple-choice practice on regression and transformations.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12g-ch6-6d-exam1-time-series", title: "6D: Exam 1 Style Questions — Time Series", description: "Multiple-choice practice on time series.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12g-ch6-6e-exam2", title: "6E: Exam 2 Style Questions", description: "Extended-response Exam 2 practice on Data Analysis.", icon: "📝", lessons: 1, progress: 0 },
      ]
    },

    // ── AREA OF STUDY 2: RECURSION & FINANCIAL MODELLING ────────────
    {
      id: "y12g-ch7",
      name: "Ch 7: Modelling Growth & Decay Using Recursion",
      icon: "🌱",
      topics: [
        { id: "y12g-ch7-7a-sequences-recurrence", title: "7A: Sequences & Recurrence Relations", description: "Defining sequences with recurrence relations.", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12g-ch7-7b-linear-growth-decay", title: "7B: Linear Growth & Decay", description: "Modelling arithmetic growth and decay.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12g-ch7-7c-explicit-linear", title: "7C: Explicit Rule for Linear Growth/Decay", description: "Finding the nth term of a linear sequence.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12g-ch7-7d-geometric-growth-decay", title: "7D: Geometric Growth & Decay", description: "Modelling geometric growth and decay.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12g-ch7-7e-explicit-geometric", title: "7E: Explicit Rule for Geometric Growth/Decay", description: "Finding the nth term of a geometric sequence.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12g-ch7-7f-interest-effective", title: "7F: Interest Rates & Effective Interest", description: "Nominal vs effective interest rates.", icon: "🏦", lessons: 1, progress: 0 },
        { id: "y12g-ch7-review", title: "Review of Chapter 7", description: "Consolidation of recursion-based growth and decay.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch8",
      name: "Ch 8: Reducing Balance Loans, Annuities & Investments",
      icon: "💰",
      topics: [
        { id: "y12g-ch8-8a-compound-interest", title: "8A: Compound Interest Modelling", description: "Compound interest as a recurrence relation.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12g-ch8-8b-loans-annuities-recurrence", title: "8B: Recurrence Relations for Loans & Annuities", description: "Setting up recurrence relations for loans and annuities.", icon: "🧾", lessons: 1, progress: 0 },
        { id: "y12g-ch8-8c-amortisation-tables", title: "8C: Amortisation Tables", description: "Reading and constructing amortisation tables.", icon: "📋", lessons: 1, progress: 0 },
        { id: "y12g-ch8-8d-amortisation-problem-solving", title: "8D: Financial Problem Solving Using Amortisation", description: "Solving worded loan and annuity problems.", icon: "🧠", lessons: 1, progress: 0 },
        { id: "y12g-ch8-8e-finance-solver-balance", title: "8E: Finance Solver — Balance & Final Payment", description: "Using a finance solver to find balance and payments.", icon: "💻", lessons: 1, progress: 0 },
        { id: "y12g-ch8-8f-finance-solver-rate-time", title: "8F: Finance Solver — Interest Rates & Time", description: "Solving for interest rate or term length.", icon: "💻", lessons: 1, progress: 0 },
        { id: "y12g-ch8-8g-advanced-financial-modelling", title: "8G: Advanced Financial Modelling", description: "Multi-stage and changing-rate financial models.", icon: "🏗️", lessons: 1, progress: 0 },
        { id: "y12g-ch8-8h-interest-only", title: "8H: Interest-Only Loans", description: "Modelling interest-only loan repayments.", icon: "💸", lessons: 1, progress: 0 },
        { id: "y12g-ch8-8i-perpetuities", title: "8I: Perpetuities", description: "Perpetuities and indefinite annuities.", icon: "♾️", lessons: 1, progress: 0 },
        { id: "y12g-ch8-review", title: "Review of Chapter 8", description: "Consolidation of loans, annuities and investments.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch9",
      name: "Ch 9: Revision — Recursion & Financial Modelling",
      icon: "📝",
      topics: [
        { id: "y12g-ch9-9a-exam1", title: "9A: Exam 1 Style Questions", description: "Multiple-choice practice on recursion and finance.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12g-ch9-9b-exam2", title: "9B: Exam 2 Style Questions", description: "Extended-response practice on recursion and finance.", icon: "📝", lessons: 1, progress: 0 },
      ]
    },

    // ── AREA OF STUDY 3: MATRICES ───────────────────────────────────
    {
      id: "y12g-ch10",
      name: "Ch 10: Matrices",
      icon: "🔢",
      topics: [
        { id: "y12g-ch10-10a-what-is-matrix", title: "10A: What is a Matrix?", description: "Order, elements and notation of matrices.", icon: "🟦", lessons: 1, progress: 0 },
        { id: "y12g-ch10-10b-representing-info", title: "10B: Representing Information Using Matrices", description: "Using matrices to organise data.", icon: "🗃️", lessons: 1, progress: 0 },
        { id: "y12g-ch10-10c-arithmetic", title: "10C: Matrix Arithmetic — Addition, Subtraction, Scalar Multiplication", description: "Performing basic matrix operations.", icon: "➕", lessons: 1, progress: 0 },
        { id: "y12g-ch10-10d-multiplication", title: "10D: Matrix Multiplication", description: "Multiplying matrices and conditions for compatibility.", icon: "✖️", lessons: 1, progress: 0 },
        { id: "y12g-ch10-10e-inverse-determinant", title: "10E: Matrix Inverse, Determinant & Equations", description: "Determinants, inverses and solving matrix equations.", icon: "🧩", lessons: 1, progress: 0 },
        { id: "y12g-ch10-10f-binary-permutation-comm", title: "10F: Binary, Permutation & Communication Matrices", description: "Specialised matrices and their applications.", icon: "🔗", lessons: 1, progress: 0 },
        { id: "y12g-ch10-10g-dominance", title: "10G: Dominance Matrices", description: "Ranking using dominance matrices.", icon: "🏆", lessons: 1, progress: 0 },
        { id: "y12g-ch10-review", title: "Review of Chapter 10", description: "Consolidation of matrices.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch11",
      name: "Ch 11: Transition Matrices & Leslie Matrices",
      icon: "🔁",
      topics: [
        { id: "y12g-ch11-11a-setting-up", title: "11A: Setting Up Transition Matrices", description: "Constructing transition matrices from context.", icon: "🛠️", lessons: 1, progress: 0 },
        { id: "y12g-ch11-11b-interpreting", title: "11B: Interpreting Transition Matrices", description: "Reading probabilities and steady states.", icon: "🔍", lessons: 1, progress: 0 },
        { id: "y12g-ch11-11c-recursion", title: "11C: Transition Matrices Using Recursion", description: "Iterating Sn+1 = T·Sn.", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12g-ch11-11d-tsn-plus-b", title: "11D: Transition Matrices Using Sn+1 = T·Sn + B", description: "Modelling with culling, restocking and external effects.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12g-ch11-11e-leslie", title: "11E: Leslie Matrices", description: "Population modelling using Leslie matrices.", icon: "👥", lessons: 1, progress: 0 },
        { id: "y12g-ch11-review", title: "Review of Chapter 11", description: "Consolidation of transition and Leslie matrices.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch12",
      name: "Ch 12: Revision — Matrices",
      icon: "📝",
      topics: [
        { id: "y12g-ch12-12a-exam1", title: "12A: Exam 1 Style Questions", description: "Multiple-choice practice on matrices.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12g-ch12-12b-exam2", title: "12B: Exam 2 Style Questions", description: "Extended-response practice on matrices.", icon: "📝", lessons: 1, progress: 0 },
      ]
    },

    // ── AREA OF STUDY 4: NETWORKS & DECISION MATHEMATICS ────────────
    {
      id: "y12g-ch13",
      name: "Ch 13: Graphs, Networks & Trees",
      icon: "🕸️",
      topics: [
        { id: "y12g-ch13-13a-graphs-networks", title: "13A: Graphs & Networks", description: "Vertices, edges and types of graphs.", icon: "🔗", lessons: 1, progress: 0 },
        { id: "y12g-ch13-13b-adjacency", title: "13B: Adjacency Matrices", description: "Representing graphs with adjacency matrices.", icon: "🔢", lessons: 1, progress: 0 },
        { id: "y12g-ch13-13c-exploring-travelling", title: "13C: Exploring & Travelling", description: "Eulerian and Hamiltonian paths and circuits.", icon: "🚶", lessons: 1, progress: 0 },
        { id: "y12g-ch13-13d-weighted", title: "13D: Weighted Graphs & Networks", description: "Weighted edges and shortest path problems.", icon: "⚖️", lessons: 1, progress: 0 },
        { id: "y12g-ch13-13e-dijkstra", title: "13E: Dijkstra's Algorithm", description: "Finding shortest paths using Dijkstra's algorithm.", icon: "🧭", lessons: 1, progress: 0 },
        { id: "y12g-ch13-13f-trees-mst", title: "13F: Trees & Minimum Connector Problems", description: "Spanning trees and minimum spanning trees.", icon: "🌳", lessons: 1, progress: 0 },
        { id: "y12g-ch13-review", title: "Review of Chapter 13", description: "Consolidation of graphs, networks and trees.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch14",
      name: "Ch 14: Flow, Matching & Scheduling Problems",
      icon: "🔀",
      topics: [
        { id: "y12g-ch14-14a-flow", title: "14A: Flow Problems", description: "Maximum flow and minimum cut in networks.", icon: "💧", lessons: 1, progress: 0 },
        { id: "y12g-ch14-14b-matching-allocation", title: "14B: Matching & Allocation Problems", description: "Bipartite matching and the Hungarian algorithm.", icon: "🤝", lessons: 1, progress: 0 },
        { id: "y12g-ch14-14c-precedence-activity", title: "14C: Precedence Tables & Activity Networks", description: "Constructing activity networks from precedence tables.", icon: "📋", lessons: 1, progress: 0 },
        { id: "y12g-ch14-14d-scheduling", title: "14D: Scheduling Problems", description: "Critical path analysis, EST, LST and float times.", icon: "⏰", lessons: 1, progress: 0 },
        { id: "y12g-ch14-14e-crashing", title: "14E: Crashing", description: "Reducing project duration through crashing.", icon: "⚡", lessons: 1, progress: 0 },
        { id: "y12g-ch14-review", title: "Review of Chapter 14", description: "Consolidation of flow, matching and scheduling.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12g-ch15",
      name: "Ch 15: Revision — Networks & Decision Mathematics",
      icon: "📝",
      topics: [
        { id: "y12g-ch15-15a-exam1", title: "15A: Exam 1 Style Questions", description: "Multiple-choice practice on networks and decision maths.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12g-ch15-15b-exam2", title: "15B: Exam 2 Style Questions", description: "Extended-response practice on networks and decision maths.", icon: "📝", lessons: 1, progress: 0 },
      ]
    },

    // ── FINAL REVISION ──────────────────────────────────────────────
    {
      id: "y12g-ch16",
      name: "Ch 16: Revision of Chapters 1–15",
      icon: "🎯",
      topics: [
        { id: "y12g-ch16-16a-exam1", title: "16A: Exam 1 Questions", description: "Cumulative Exam 1 multiple-choice practice.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12g-ch16-16b-exam2", title: "16B: Exam 2 Questions", description: "Cumulative Exam 2 extended-response practice.", icon: "📝", lessons: 1, progress: 0 },
      ]
    },
  ]
});

// ════════════════════════════════════════════════════════════════════
// YEAR 12 — VCE MATHEMATICAL METHODS (Units 3 & 4)
// 19 chapters + 2 appendices: Functions, Calculus, Probability,
// Distributions, Sampling & Estimation, with full revision chapters.
// ════════════════════════════════════════════════════════════════════
curriculum.push({
  id: "year-12-methods",
  name: "Year 12 Mathematical Methods",
  description: "VCE Mathematical Methods Units 3 & 4 — Functions & relations, calculus (differentiation and integration), probability, discrete and continuous distributions, the normal distribution, and sampling & estimation.",
  icon: "📕",
  categories: [
    // ── AREA OF STUDY 1: FUNCTIONS, RELATIONS & GRAPHS ──────────────
    {
      id: "y12m-ch1",
      name: "Ch 1: Functions and Relations",
      icon: "🔣",
      topics: [
        { id: "y12m-ch1-1a-set-notation", title: "1A: Set Notation & Sets of Numbers", description: "Set notation, intervals, and sets of real numbers.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12m-ch1-1b-relations-functions", title: "1B: Identifying & Describing Relations and Functions", description: "Domain, range, and the vertical line test.", icon: "🔗", lessons: 1, progress: 0 },
        { id: "y12m-ch1-1c-types-implied-domains", title: "1C: Types of Functions & Implied Domains", description: "Hybrid functions and finding implied domains.", icon: "🧩", lessons: 1, progress: 0 },
        { id: "y12m-ch1-1d-sums-products", title: "1D: Sums and Products of Functions", description: "Combining functions through addition and multiplication.", icon: "➕", lessons: 1, progress: 0 },
        { id: "y12m-ch1-1e-composite", title: "1E: Composite Functions", description: "Forming and evaluating f(g(x)).", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12m-ch1-1f-inverse", title: "1F: Inverse Functions", description: "Existence of inverses and finding f⁻¹(x).", icon: "↔️", lessons: 1, progress: 0 },
        { id: "y12m-ch1-1g-power", title: "1G: Power Functions", description: "Behaviour of power functions y = xⁿ.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12m-ch1-1h-applications", title: "1H: Applications of Functions", description: "Modelling real-world situations with functions.", icon: "🏗️", lessons: 1, progress: 0 },
        { id: "y12m-ch1-review", title: "Review of Chapter 1", description: "Consolidation of functions and relations.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch2",
      name: "Ch 2: Coordinate Geometry",
      icon: "📐",
      topics: [
        { id: "y12m-ch2-2a-linear-eq", title: "2A: Linear Equations", description: "Solving linear equations in one variable.", icon: "➗", lessons: 1, progress: 0 },
        { id: "y12m-ch2-2b-literal-simultaneous", title: "2B: Linear Literal Equations & Simultaneous Linear Literal Equations", description: "Solving equations with parameters.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12m-ch2-2c-coord-geom", title: "2C: Linear Coordinate Geometry", description: "Gradient, distance, midpoint and equation of a line.", icon: "📍", lessons: 1, progress: 0 },
        { id: "y12m-ch2-2d-applications", title: "2D: Applications of Linear Functions", description: "Linear modelling in context.", icon: "🏗️", lessons: 1, progress: 0 },
        { id: "y12m-ch2-2e-geom-simultaneous", title: "2E: The Geometry of Simultaneous Linear Equations", description: "Unique, no, and infinite solution cases.", icon: "🔀", lessons: 1, progress: 0 },
        { id: "y12m-ch2-2f-three-variables", title: "2F: Simultaneous Linear Equations With More Than Two Variables", description: "Solving 3x3 systems.", icon: "🧩", lessons: 1, progress: 0 },
        { id: "y12m-ch2-review", title: "Review of Chapter 2", description: "Consolidation of coordinate geometry.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch3",
      name: "Ch 3: Transformations",
      icon: "🔄",
      topics: [
        { id: "y12m-ch3-3a-translations", title: "3A: Translations", description: "Horizontal and vertical translations of graphs.", icon: "↔️", lessons: 1, progress: 0 },
        { id: "y12m-ch3-3b-dilations", title: "3B: Dilations", description: "Stretching graphs from the axes.", icon: "🔍", lessons: 1, progress: 0 },
        { id: "y12m-ch3-3c-reflections", title: "3C: Reflections", description: "Reflections in the x- and y-axes.", icon: "🪞", lessons: 1, progress: 0 },
        { id: "y12m-ch3-3d-combinations", title: "3D: Combinations of Transformations", description: "Applying multiple transformations in order.", icon: "🧩", lessons: 1, progress: 0 },
        { id: "y12m-ch3-3e-determining", title: "3E: Determining Transformations", description: "Identifying transformations from equations or graphs.", icon: "🔎", lessons: 1, progress: 0 },
        { id: "y12m-ch3-3f-sketching", title: "3F: Using Transformations to Sketch Graphs", description: "Sketching from a parent function.", icon: "✏️", lessons: 1, progress: 0 },
        { id: "y12m-ch3-3g-power-positive-int", title: "3G: Transformations of Power Functions With Positive Integer Index", description: "Transforming y = xⁿ for n ∈ ℤ⁺.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12m-ch3-3h-rule-from-graph", title: "3H: Determining the Rule for a Function From its Graph", description: "Reverse engineering equations from graphs.", icon: "🧠", lessons: 1, progress: 0 },
        { id: "y12m-ch3-3i-notation", title: "3I: A Notation for Transformations", description: "Mapping notation for transformations.", icon: "🔤", lessons: 1, progress: 0 },
        { id: "y12m-ch3-review", title: "Review of Chapter 3", description: "Consolidation of transformations.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch4",
      name: "Ch 4: Polynomial Functions",
      icon: "📈",
      topics: [
        { id: "y12m-ch4-4a-quadratic", title: "4A: Quadratic Functions", description: "Properties and graphs of quadratics.", icon: "⛰️", lessons: 1, progress: 0 },
        { id: "y12m-ch4-4b-rule-parabola", title: "4B: Determining the Rule for a Parabola", description: "Finding equations of parabolas from key features.", icon: "🧠", lessons: 1, progress: 0 },
        { id: "y12m-ch4-4c-language", title: "4C: The Language of Polynomials", description: "Degree, leading term and coefficients.", icon: "🔤", lessons: 1, progress: 0 },
        { id: "y12m-ch4-4d-division-factorisation", title: "4D: Division and Factorisation of Polynomials", description: "Long division, remainder and factor theorems.", icon: "✂️", lessons: 1, progress: 0 },
        { id: "y12m-ch4-4e-cubic", title: "4E: The General Cubic Function", description: "Graphs and key features of cubics.", icon: "🔺", lessons: 1, progress: 0 },
        { id: "y12m-ch4-4f-higher-degree", title: "4F: Polynomials of Higher Degree", description: "Quartics and beyond.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12m-ch4-4g-rule-from-graph", title: "4G: Determining the Rule for the Graph of a Polynomial", description: "Finding equations from graphs.", icon: "🧠", lessons: 1, progress: 0 },
        { id: "y12m-ch4-4h-literal", title: "4H: Solution of Literal Equations and Systems of Equations", description: "Solving equations with parameters.", icon: "🧩", lessons: 1, progress: 0 },
        { id: "y12m-ch4-review", title: "Review of Chapter 4", description: "Consolidation of polynomial functions.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch5",
      name: "Ch 5: Exponential and Logarithmic Functions",
      icon: "🌱",
      topics: [
        { id: "y12m-ch5-5a-exp-functions", title: "5A: Exponential Functions", description: "Properties and graphs of y = aˣ.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12m-ch5-5b-e-x", title: "5B: The Exponential Function f(x) = eˣ", description: "Euler's number and the natural exponential.", icon: "🌱", lessons: 1, progress: 0 },
        { id: "y12m-ch5-5c-exp-equations", title: "5C: Exponential Equations", description: "Solving equations with the same base.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12m-ch5-5d-logarithms", title: "5D: Logarithms", description: "Logarithm laws and properties.", icon: "📜", lessons: 1, progress: 0 },
        { id: "y12m-ch5-5e-graphing-log", title: "5E: Graphing Logarithmic Functions", description: "Graphs of y = logₐ(x).", icon: "📉", lessons: 1, progress: 0 },
        { id: "y12m-ch5-5f-rules-from-graphs", title: "5F: Determining Rules for Graphs of Exponential and Logarithmic Functions", description: "Finding equations from graphs.", icon: "🧠", lessons: 1, progress: 0 },
        { id: "y12m-ch5-5g-exp-using-logs", title: "5G: Solution of Exponential Equations Using Logarithms", description: "Using logs to solve exponential equations.", icon: "🔓", lessons: 1, progress: 0 },
        { id: "y12m-ch5-5h-inverses", title: "5H: Inverses", description: "Inverse relationship between exp and log functions.", icon: "↔️", lessons: 1, progress: 0 },
        { id: "y12m-ch5-5i-growth-decay", title: "5I: Exponential Growth and Decay", description: "Modelling growth and decay phenomena.", icon: "🌿", lessons: 1, progress: 0 },
        { id: "y12m-ch5-review", title: "Review of Chapter 5", description: "Consolidation of exponentials and logarithms.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch6",
      name: "Ch 6: Circular Functions",
      icon: "🌀",
      topics: [
        { id: "y12m-ch6-6a-degrees-radians", title: "6A: Measuring Angles in Degrees and Radians", description: "Converting between degrees and radians.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6b-defining", title: "6B: Defining Circular Functions: Sine, Cosine and Tangent", description: "Unit circle definitions.", icon: "⭕", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6c-symmetry-pythag", title: "6C: Further Symmetry Properties and the Pythagorean Identity", description: "sin²θ + cos²θ = 1 and symmetry.", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6d-graphs-sin-cos", title: "6D: Graphs of Sine and Cosine", description: "Period, amplitude, and key features.", icon: "🌊", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6e-trig-eq", title: "6E: Solution of Trigonometric Equations", description: "Solving trig equations over a given domain.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6f-a-sin-n", title: "6F: Sketch Graphs of y = a sin n(t ± ε) and y = a cos n(t ± ε)", description: "Amplitude, period and phase shifts.", icon: "📉", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6g-a-sin-n-plus-b", title: "6G: Sketch Graphs of y = a sin n(t ± ε) ± b and y = a cos n(t ± ε) ± b", description: "Vertical translations of trig graphs.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6h-addition-ordinates", title: "6H: Addition of Ordinates for Circular Functions", description: "Combining trig graphs by adding y-values.", icon: "➕", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6i-rules-from-graphs", title: "6I: Determining Rules for Graphs of Circular Functions", description: "Finding equations from trig graphs.", icon: "🧠", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6j-tangent", title: "6J: The Tangent Function", description: "Graph and properties of tan(x).", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6k-general-solutions", title: "6K: General Solution of Trigonometric Equations", description: "All solutions over the real line.", icon: "♾️", lessons: 1, progress: 0 },
        { id: "y12m-ch6-6l-applications", title: "6L: Applications of Circular Functions", description: "Modelling periodic phenomena.", icon: "🌊", lessons: 1, progress: 0 },
        { id: "y12m-ch6-review", title: "Review of Chapter 6", description: "Consolidation of circular functions.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch7",
      name: "Ch 7: Further Functions",
      icon: "🧩",
      topics: [
        { id: "y12m-ch7-7a-more-power", title: "7A: More Power Functions", description: "Further analysis of power functions.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12m-ch7-7b-composite-inverse", title: "7B: Composite and Inverse Functions", description: "Advanced work with composites and inverses.", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12m-ch7-7c-sums-products-ordinates", title: "7C: Sums and Products of Functions and Addition of Ordinates", description: "Combining functions graphically and algebraically.", icon: "➕", lessons: 1, progress: 0 },
        { id: "y12m-ch7-7d-notation-identities", title: "7D: Function Notation and Identities", description: "Working with function identities.", icon: "🔤", lessons: 1, progress: 0 },
        { id: "y12m-ch7-7e-families-literal", title: "7E: Families of Functions and Solving Literal Equations", description: "Parameter-dependent families of functions.", icon: "👪", lessons: 1, progress: 0 },
        { id: "y12m-ch7-review", title: "Review of Chapter 7", description: "Consolidation of further functions.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch8",
      name: "Ch 8: Revision of Chapters 1–7",
      icon: "📝",
      topics: [
        { id: "y12m-ch8-8a-tech-free", title: "8A: Technology-Free Questions", description: "Practice without calculator or CAS.", icon: "✍️", lessons: 1, progress: 0 },
        { id: "y12m-ch8-8b-multiple-choice", title: "8B: Multiple-Choice Questions", description: "Exam 1 style multiple-choice practice.", icon: "✅", lessons: 1, progress: 0 },
        { id: "y12m-ch8-8c-extended-response", title: "8C: Extended-Response Questions", description: "Exam 2 style extended-response practice.", icon: "📝", lessons: 1, progress: 0 },
        { id: "y12m-ch8-8d-pseudocode", title: "8D: Algorithms and Pseudocode", description: "Algorithmic thinking and pseudocode questions.", icon: "🤖", lessons: 1, progress: 0 },
      ]
    },

    // ── AREA OF STUDY 2: CALCULUS ───────────────────────────────────
    {
      id: "y12m-ch9",
      name: "Ch 9: Differentiation",
      icon: "📉",
      topics: [
        { id: "y12m-ch9-9a-derivative", title: "9A: The Derivative", description: "Limit definition of the derivative.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9b-rules", title: "9B: Rules for Differentiation", description: "Power rule and basic differentiation rules.", icon: "📜", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9c-negative-int", title: "9C: Differentiating xⁿ Where n is a Negative Integer", description: "Differentiating reciprocal-power functions.", icon: "➗", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9d-graph-derivative", title: "9D: The Graph of the Derivative Function", description: "Sketching f′(x) from f(x).", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9e-chain-rule", title: "9E: The Chain Rule", description: "Differentiating composite functions.", icon: "🔗", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9f-rational-powers", title: "9F: Differentiating Rational Powers", description: "Derivatives of x^(p/q).", icon: "½", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9g-e-x", title: "9G: Differentiation of eˣ", description: "Derivative of the natural exponential.", icon: "🌱", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9h-ln", title: "9H: Differentiation of the Natural Logarithm Function", description: "Derivative of ln(x).", icon: "📜", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9i-circular", title: "9I: Derivatives of Circular Functions", description: "Derivatives of sin, cos and tan.", icon: "🌀", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9j-product", title: "9J: The Product Rule", description: "Differentiating products of functions.", icon: "✖️", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9k-quotient", title: "9K: The Quotient Rule", description: "Differentiating quotients of functions.", icon: "➗", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9l-limits-continuity", title: "9L: Limits and Continuity", description: "Formal treatment of limits and continuity.", icon: "♾️", lessons: 1, progress: 0 },
        { id: "y12m-ch9-9m-differentiable", title: "9M: When is a Function Differentiable?", description: "Conditions for differentiability.", icon: "🔍", lessons: 1, progress: 0 },
        { id: "y12m-ch9-review", title: "Review of Chapter 9", description: "Consolidation of differentiation.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch10",
      name: "Ch 10: Applications of Differentiation",
      icon: "🎯",
      topics: [
        { id: "y12m-ch10-10a-tangents-normals", title: "10A: Tangents and Normals", description: "Equations of tangents and normals.", icon: "📏", lessons: 1, progress: 0 },
        { id: "y12m-ch10-10b-rates-of-change", title: "10B: Rates of Change", description: "Average and instantaneous rates.", icon: "⏱️", lessons: 1, progress: 0 },
        { id: "y12m-ch10-10c-stationary", title: "10C: Stationary Points", description: "Finding stationary points.", icon: "📍", lessons: 1, progress: 0 },
        { id: "y12m-ch10-10d-types-stationary", title: "10D: Types of Stationary Points", description: "Maxima, minima and inflexion points.", icon: "🔺", lessons: 1, progress: 0 },
        { id: "y12m-ch10-10e-absolute-max-min", title: "10E: Absolute Maximum and Minimum Values", description: "Endpoints and interior maxima/minima.", icon: "🏔️", lessons: 1, progress: 0 },
        { id: "y12m-ch10-10f-max-min-problems", title: "10F: Maximum and Minimum Problems", description: "Optimisation in context.", icon: "🎯", lessons: 1, progress: 0 },
        { id: "y12m-ch10-10g-families", title: "10G: Families of Functions", description: "Parameter-dependent families.", icon: "👪", lessons: 1, progress: 0 },
        { id: "y12m-ch10-10h-newtons-method", title: "10H: Newton's Method for Finding Solutions to Equations", description: "Iterative root-finding via Newton's method.", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12m-ch10-review", title: "Review of Chapter 10", description: "Consolidation of applications of differentiation.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch11",
      name: "Ch 11: Integration",
      icon: "∫",
      topics: [
        { id: "y12m-ch11-11a-estimate-area", title: "11A: Estimating the Area Under a Graph", description: "Left, right and midpoint rectangle approximations.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11b-antidiff-indefinite", title: "11B: Antidifferentiation: Indefinite Integrals", description: "Reversing differentiation.", icon: "↩️", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11c-ax-b-n", title: "11C: The Antiderivative of (ax + b)ⁿ", description: "Integrating linear-power expressions.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11d-e-x", title: "11D: The Antiderivative of eˣ", description: "Integrating the natural exponential.", icon: "🌱", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11e-ftc-definite", title: "11E: The Fundamental Theorem of Calculus and the Definite Integral", description: "Connecting integration and area.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11f-area-under", title: "11F: Finding the Area Under a Curve", description: "Definite integrals as signed area.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11g-circular", title: "11G: Integration of Circular Functions", description: "Integrating sin and cos.", icon: "🌀", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11h-misc", title: "11H: Miscellaneous Exercises", description: "Mixed integration practice.", icon: "🧩", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11i-area-between", title: "11I: The Area of a Region Between Two Curves", description: "Integrating differences of functions.", icon: "🪟", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11j-applications", title: "11J: Applications of Integration", description: "Real-world applications including kinematics.", icon: "🚗", lessons: 1, progress: 0 },
        { id: "y12m-ch11-11k-ftc", title: "11K: The Fundamental Theorem of Calculus", description: "Formal treatment of the FTC.", icon: "🎓", lessons: 1, progress: 0 },
        { id: "y12m-ch11-review", title: "Review of Chapter 11", description: "Consolidation of integration.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch12",
      name: "Ch 12: Revision of Chapters 9–11",
      icon: "📝",
      topics: [
        { id: "y12m-ch12-12a-tech-free", title: "12A: Technology-Free Questions", description: "Calculus practice without technology.", icon: "✍️", lessons: 1, progress: 0 },
        { id: "y12m-ch12-12b-multiple-choice", title: "12B: Multiple-Choice Questions", description: "Exam 1 style calculus practice.", icon: "✅", lessons: 1, progress: 0 },
        { id: "y12m-ch12-12c-extended-response", title: "12C: Extended-Response Questions", description: "Exam 2 style calculus practice.", icon: "📝", lessons: 1, progress: 0 },
        { id: "y12m-ch12-12d-pseudocode", title: "12D: Algorithms and Pseudocode", description: "Algorithmic calculus questions.", icon: "🤖", lessons: 1, progress: 0 },
      ]
    },

    // ── AREA OF STUDY 3: PROBABILITY & STATISTICS ───────────────────
    {
      id: "y12m-ch13",
      name: "Ch 13: Discrete Random Variables and Their Probability Distributions",
      icon: "🎲",
      topics: [
        { id: "y12m-ch13-13a-sample-spaces", title: "13A: Sample Spaces and Probability", description: "Foundations of probability.", icon: "🎯", lessons: 1, progress: 0 },
        { id: "y12m-ch13-13b-conditional", title: "13B: Conditional Probability and Independence", description: "P(A|B) and independence of events.", icon: "🔗", lessons: 1, progress: 0 },
        { id: "y12m-ch13-13c-discrete-rv", title: "13C: Discrete Random Variables", description: "Probability distributions of discrete variables.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12m-ch13-13d-mean-variance-sd", title: "13D: Expected Value (Mean), Variance and Standard Deviation", description: "Summary measures for discrete distributions.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12m-ch13-review", title: "Review of Chapter 13", description: "Consolidation of discrete random variables.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch14",
      name: "Ch 14: The Binomial Distribution",
      icon: "🪙",
      topics: [
        { id: "y12m-ch14-14a-bernoulli", title: "14A: Bernoulli Sequences and the Binomial Probability Distribution", description: "Bernoulli trials and the binomial distribution.", icon: "🪙", lessons: 1, progress: 0 },
        { id: "y12m-ch14-14b-graph-mean-var", title: "14B: The Graph, Expectation and Variance of a Binomial Distribution", description: "Shape, mean np and variance npq.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12m-ch14-14c-sample-size", title: "14C: Finding the Sample Size", description: "Determining n from probability conditions.", icon: "🔢", lessons: 1, progress: 0 },
        { id: "y12m-ch14-14d-proofs", title: "14D: Proofs for the Expectation and Variance", description: "Deriving formulas for E(X) and Var(X).", icon: "🎓", lessons: 1, progress: 0 },
        { id: "y12m-ch14-review", title: "Review of Chapter 14", description: "Consolidation of the binomial distribution.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch15",
      name: "Ch 15: Continuous Random Variables and Their Probability Distributions",
      icon: "📈",
      topics: [
        { id: "y12m-ch15-15a-continuous-rv", title: "15A: Continuous Random Variables", description: "Probability density functions.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12m-ch15-15b-mean-percentiles", title: "15B: Mean and Percentiles for a Continuous Random Variable", description: "Computing mean and percentiles via integration.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12m-ch15-15c-spread", title: "15C: Measures of Spread", description: "Variance and standard deviation for continuous variables.", icon: "↔️", lessons: 1, progress: 0 },
        { id: "y12m-ch15-15d-properties", title: "15D: Properties of Mean and Variance", description: "Linear transformations of random variables.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12m-ch15-15e-cdf", title: "15E: Cumulative Distribution Functions", description: "Definition and properties of CDFs.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12m-ch15-review", title: "Review of Chapter 15", description: "Consolidation of continuous random variables.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch16",
      name: "Ch 16: The Normal Distribution",
      icon: "🔔",
      topics: [
        { id: "y12m-ch16-16a-normal", title: "16A: The Normal Distribution", description: "Properties of the normal distribution.", icon: "🔔", lessons: 1, progress: 0 },
        { id: "y12m-ch16-16b-standardisation", title: "16B: Standardisation and the 68–95–99.7% Rule", description: "z-scores and the empirical rule.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12m-ch16-16c-probabilities", title: "16C: Determining Normal Probabilities", description: "Using technology to find P(X ≤ x).", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12m-ch16-16d-problems", title: "16D: Solving Problems Using the Normal Distribution", description: "Applied normal-distribution problems.", icon: "🎯", lessons: 1, progress: 0 },
        { id: "y12m-ch16-16e-binomial-approx", title: "16E: The Normal Approximation to the Binomial Distribution", description: "Approximating binomial with normal.", icon: "🪙", lessons: 1, progress: 0 },
        { id: "y12m-ch16-review", title: "Review of Chapter 16", description: "Consolidation of the normal distribution.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch17",
      name: "Ch 17: Sampling and Estimation",
      icon: "🧪",
      topics: [
        { id: "y12m-ch17-17a-populations-samples", title: "17A: Populations and Samples", description: "Sampling concepts and notation.", icon: "👥", lessons: 1, progress: 0 },
        { id: "y12m-ch17-17b-exact-distribution", title: "17B: The Exact Distribution of the Sample Proportion", description: "Distribution of P̂ from a binomial population.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12m-ch17-17c-approx-distribution", title: "17C: Approximating the Distribution of the Sample Proportion", description: "Normal approximation for P̂.", icon: "🔔", lessons: 1, progress: 0 },
        { id: "y12m-ch17-17d-confidence-intervals", title: "17D: Confidence Intervals for the Population Proportion", description: "Constructing and interpreting confidence intervals.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12m-ch17-review", title: "Review of Chapter 17", description: "Consolidation of sampling and estimation.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-ch18",
      name: "Ch 18: Revision of Chapters 13–17",
      icon: "📝",
      topics: [
        { id: "y12m-ch18-18a-tech-free", title: "18A: Technology-Free Questions", description: "Probability and statistics without technology.", icon: "✍️", lessons: 1, progress: 0 },
        { id: "y12m-ch18-18b-multiple-choice", title: "18B: Multiple-Choice Questions", description: "Exam 1 style probability practice.", icon: "✅", lessons: 1, progress: 0 },
        { id: "y12m-ch18-18c-extended-response", title: "18C: Extended-Response Questions", description: "Exam 2 style probability practice.", icon: "📝", lessons: 1, progress: 0 },
        { id: "y12m-ch18-18d-pseudocode", title: "18D: Algorithms and Pseudocode", description: "Algorithmic probability questions.", icon: "🤖", lessons: 1, progress: 0 },
      ]
    },

    // ── FINAL REVISION ──────────────────────────────────────────────
    {
      id: "y12m-ch19",
      name: "Ch 19: Revision of Chapters 1–18",
      icon: "🎯",
      topics: [
        { id: "y12m-ch19-19a-tech-free", title: "19A: Technology-Free Questions", description: "Cumulative technology-free practice.", icon: "✍️", lessons: 1, progress: 0 },
        { id: "y12m-ch19-19b-multiple-choice", title: "19B: Multiple-Choice Questions", description: "Cumulative Exam 1 style practice.", icon: "✅", lessons: 1, progress: 0 },
        { id: "y12m-ch19-19c-extended-response", title: "19C: Extended-Response Questions", description: "Cumulative Exam 2 style practice.", icon: "📝", lessons: 1, progress: 0 },
      ]
    },

    // ── APPENDICES ──────────────────────────────────────────────────
    {
      id: "y12m-appA",
      name: "Appendix A: Pseudocode",
      icon: "🤖",
      topics: [
        { id: "y12m-appA-a1-intro", title: "A1: Introduction to Pseudocode", description: "Reading and writing pseudocode for VCE Methods.", icon: "📜", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12m-appB",
      name: "Appendix B: Counting",
      icon: "🔢",
      topics: [
        { id: "y12m-appB-b1-counting", title: "B1: Counting Methods", description: "Permutations, combinations and counting principles.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12m-appB-b2-summation", title: "B2: Summation Notation", description: "Sigma notation and summation rules.", icon: "Σ", lessons: 1, progress: 0 },
        { id: "y12m-appB-b3-binomial-thm", title: "B3: The Binomial Theorem", description: "Expanding (a + b)ⁿ using the binomial theorem.", icon: "📜", lessons: 1, progress: 0 },
      ]
    },
  ]
});

// ════════════════════════════════════════════════════════════════════
// YEAR 12 — VCE SPECIALIST MATHEMATICS (Units 3 & 4)
// 18 chapters + appendices: Logic & Proof, Vectors, Complex Numbers,
// Calculus (advanced), Differential Equations, Kinematics,
// Statistical Inference for the Sample Mean.
// ════════════════════════════════════════════════════════════════════
curriculum.push({
  id: "year-12-specialist",
  name: "Year 12 Specialist Mathematics",
  description: "VCE Specialist Mathematics Units 3 & 4 — Logic and proof, vectors and vector calculus, complex numbers, advanced differentiation and integration, differential equations, kinematics, and statistical inference for the sample mean.",
  icon: "📕",
  categories: [
    {
      id: "y12s-ch1",
      name: "Ch 1: Preliminary Topics",
      icon: "🧰",
      topics: [
        { id: "y12s-ch1-1a-circular", title: "1A: Circular Functions", description: "Review of sine, cosine and tangent functions.", icon: "🌀", lessons: 1, progress: 0 },
        { id: "y12s-ch1-1b-sine-cosine-rules", title: "1B: The Sine and Cosine Rules", description: "Solving non-right triangles.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12s-ch1-1c-sequences-series", title: "1C: Sequences and Series", description: "Arithmetic and geometric sequences and series.", icon: "🔢", lessons: 1, progress: 0 },
        { id: "y12s-ch1-1d-modulus", title: "1D: The Modulus Function", description: "Properties and graphs of |x|.", icon: "📏", lessons: 1, progress: 0 },
        { id: "y12s-ch1-1e-circles", title: "1E: Circles", description: "Equations and properties of circles.", icon: "⭕", lessons: 1, progress: 0 },
        { id: "y12s-ch1-1f-ellipses-hyperbolas", title: "1F: Ellipses and Hyperbolas", description: "Conic sections — ellipses and hyperbolas.", icon: "🥚", lessons: 1, progress: 0 },
        { id: "y12s-ch1-1g-parametric", title: "1G: Parametric Equations", description: "Curves defined parametrically.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12s-ch1-1h-pseudocode", title: "1H: Algorithms and Pseudocode", description: "Algorithmic thinking and pseudocode basics.", icon: "🤖", lessons: 1, progress: 0 },
        { id: "y12s-ch1-review", title: "Review of Chapter 1", description: "Consolidation of preliminary topics.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch2",
      name: "Ch 2: Logic and Proof",
      icon: "🧠",
      topics: [
        { id: "y12s-ch2-2a-revision-proof", title: "2A: Revision of Proof Techniques", description: "Direct, contrapositive and contradiction proofs.", icon: "📜", lessons: 1, progress: 0 },
        { id: "y12s-ch2-2b-quantifiers", title: "2B: Quantifiers and Counterexamples", description: "Universal and existential quantifiers.", icon: "∀", lessons: 1, progress: 0 },
        { id: "y12s-ch2-2c-inequalities", title: "2C: Proving Inequalities", description: "Techniques for proving inequalities.", icon: "≤", lessons: 1, progress: 0 },
        { id: "y12s-ch2-2d-telescoping", title: "2D: Telescoping Series", description: "Summing series via cancellation.", icon: "🔭", lessons: 1, progress: 0 },
        { id: "y12s-ch2-2e-induction", title: "2E: Mathematical Induction", description: "Principle of mathematical induction.", icon: "🪜", lessons: 1, progress: 0 },
        { id: "y12s-ch2-review", title: "Review of Chapter 2", description: "Consolidation of logic and proof.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch3",
      name: "Ch 3: Circular Functions",
      icon: "🌀",
      topics: [
        { id: "y12s-ch3-3a-reciprocal", title: "3A: The Reciprocal Circular Functions", description: "sec, cosec and cot functions.", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12s-ch3-3b-compound-double", title: "3B: Compound and Double Angle Formulas", description: "Identities for sums and double angles.", icon: "➕", lessons: 1, progress: 0 },
        { id: "y12s-ch3-3c-inverse", title: "3C: The Inverse Circular Functions", description: "arcsin, arccos and arctan.", icon: "↔️", lessons: 1, progress: 0 },
        { id: "y12s-ch3-3d-equations", title: "3D: Solution of Equations", description: "Solving trigonometric equations.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12s-ch3-3e-sums-products", title: "3E: Sums and Products of Sines and Cosines", description: "Sum-to-product and product-to-sum identities.", icon: "✖️", lessons: 1, progress: 0 },
        { id: "y12s-ch3-review", title: "Review of Chapter 3", description: "Consolidation of circular functions.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch4",
      name: "Ch 4: Vectors",
      icon: "➡️",
      topics: [
        { id: "y12s-ch4-4a-intro", title: "4A: Introduction to Vectors", description: "Vector notation, addition and scalar multiplication.", icon: "📍", lessons: 1, progress: 0 },
        { id: "y12s-ch4-4b-resolution", title: "4B: Resolution of a Vector into Rectangular Components", description: "Resolving vectors along axes.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12s-ch4-4c-scalar-product", title: "4C: Scalar Product of Vectors", description: "Dot product and its properties.", icon: "•", lessons: 1, progress: 0 },
        { id: "y12s-ch4-4d-projections", title: "4D: Vector Projections", description: "Projecting one vector onto another.", icon: "🎯", lessons: 1, progress: 0 },
        { id: "y12s-ch4-4e-collinearity", title: "4E: Collinearity", description: "Conditions for vectors to be collinear.", icon: "📏", lessons: 1, progress: 0 },
        { id: "y12s-ch4-4f-geometric-proofs", title: "4F: Geometric Proofs", description: "Vector methods for geometric proofs.", icon: "📜", lessons: 1, progress: 0 },
        { id: "y12s-ch4-review", title: "Review of Chapter 4", description: "Consolidation of vectors.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch5",
      name: "Ch 5: Vector Equations of Lines and Planes",
      icon: "📏",
      topics: [
        { id: "y12s-ch5-5a-vec-lines", title: "5A: Vector Equations of Lines", description: "Parametric and vector forms of lines.", icon: "📍", lessons: 1, progress: 0 },
        { id: "y12s-ch5-5b-intersection-skew", title: "5B: Intersection of Lines and Skew Lines", description: "Finding intersections; identifying skew lines.", icon: "✖️", lessons: 1, progress: 0 },
        { id: "y12s-ch5-5c-vector-product", title: "5C: Vector Product", description: "Cross product and its properties.", icon: "⊗", lessons: 1, progress: 0 },
        { id: "y12s-ch5-5d-vec-planes", title: "5D: Vector Equations of Planes", description: "Equations of planes in vector form.", icon: "🟦", lessons: 1, progress: 0 },
        { id: "y12s-ch5-5e-distances-angles", title: "5E: Distances, Angles and Intersections", description: "Geometry of lines and planes in 3D.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12s-ch5-review", title: "Review of Chapter 5", description: "Consolidation of lines and planes.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch6",
      name: "Ch 6: Complex Numbers",
      icon: "🔢",
      topics: [
        { id: "y12s-ch6-6a-build", title: "6A: Starting to Build the Complex Numbers", description: "Introduction to i and complex arithmetic.", icon: "🧱", lessons: 1, progress: 0 },
        { id: "y12s-ch6-6b-modulus-conjugate", title: "6B: Modulus, Conjugate and Division", description: "|z|, conjugate, and division of complex numbers.", icon: "📏", lessons: 1, progress: 0 },
        { id: "y12s-ch6-6c-polar-form", title: "6C: Polar Form of a Complex Number", description: "Modulus-argument form.", icon: "🧭", lessons: 1, progress: 0 },
        { id: "y12s-ch6-6d-polar-ops", title: "6D: Basic Operations on Complex Numbers in Polar Form", description: "Multiplication and division in polar form.", icon: "✖️", lessons: 1, progress: 0 },
        { id: "y12s-ch6-6e-quadratic", title: "6E: Solving Quadratic Equations Over the Complex Numbers", description: "Quadratics with complex roots.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12s-ch6-6f-polynomial", title: "6F: Solving Polynomial Equations Over the Complex Numbers", description: "Conjugate root theorem and factorisation.", icon: "📜", lessons: 1, progress: 0 },
        { id: "y12s-ch6-6g-de-moivre", title: "6G: Using De Moivre's Theorem to Solve Equations", description: "Roots of unity and complex equations.", icon: "🎓", lessons: 1, progress: 0 },
        { id: "y12s-ch6-6h-subsets", title: "6H: Sketching Subsets of the Complex Plane", description: "Loci and regions in the Argand plane.", icon: "🗺️", lessons: 1, progress: 0 },
        { id: "y12s-ch6-review", title: "Review of Chapter 6", description: "Consolidation of complex numbers.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch7",
      name: "Ch 7: Revision of Chapters 1–6",
      icon: "📝",
      topics: [
        { id: "y12s-ch7-7a-tech-free", title: "7A: Technology-Free Questions", description: "Practice without calculator or CAS.", icon: "✍️", lessons: 1, progress: 0 },
        { id: "y12s-ch7-7b-multiple-choice", title: "7B: Multiple-Choice Questions", description: "Exam 1 style multiple-choice practice.", icon: "✅", lessons: 1, progress: 0 },
        { id: "y12s-ch7-7c-extended-response", title: "7C: Extended-Response Questions", description: "Exam 2 style extended-response practice.", icon: "📝", lessons: 1, progress: 0 },
        { id: "y12s-ch7-7d-pseudocode", title: "7D: Algorithms and Pseudocode", description: "Algorithmic thinking and pseudocode questions.", icon: "🤖", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch8",
      name: "Ch 8: Differentiation and Rational Functions",
      icon: "📉",
      topics: [
        { id: "y12s-ch8-8a-differentiation", title: "8A: Differentiation", description: "Review of differentiation rules.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12s-ch8-8b-x-fy", title: "8B: Derivatives of x = f(y)", description: "Differentiating implicitly defined relations.", icon: "↔️", lessons: 1, progress: 0 },
        { id: "y12s-ch8-8c-inverse-circular", title: "8C: Derivatives of Inverse Circular Functions", description: "Derivatives of arcsin, arccos and arctan.", icon: "↩️", lessons: 1, progress: 0 },
        { id: "y12s-ch8-8d-second-derivatives", title: "8D: Second Derivatives", description: "Concavity and the second derivative.", icon: "²", lessons: 1, progress: 0 },
        { id: "y12s-ch8-8e-inflection", title: "8E: Points of Inflection", description: "Locating points of inflection.", icon: "📍", lessons: 1, progress: 0 },
        { id: "y12s-ch8-8f-related-rates", title: "8F: Related Rates", description: "Solving related-rate problems.", icon: "⏱️", lessons: 1, progress: 0 },
        { id: "y12s-ch8-8g-rational", title: "8G: Rational Functions", description: "Sketching rational functions and asymptotes.", icon: "➗", lessons: 1, progress: 0 },
        { id: "y12s-ch8-8h-summary", title: "8H: A Summary of Differentiation", description: "Consolidating differentiation techniques.", icon: "📚", lessons: 1, progress: 0 },
        { id: "y12s-ch8-8i-implicit", title: "8I: Implicit Differentiation", description: "Differentiating implicitly defined curves.", icon: "🔍", lessons: 1, progress: 0 },
        { id: "y12s-ch8-review", title: "Review of Chapter 8", description: "Consolidation of differentiation and rational functions.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch9",
      name: "Ch 9: Techniques of Integration",
      icon: "∫",
      topics: [
        { id: "y12s-ch9-9a-antidiff", title: "9A: Antidifferentiation", description: "Standard antiderivatives.", icon: "↩️", lessons: 1, progress: 0 },
        { id: "y12s-ch9-9b-inverse-circular", title: "9B: Antiderivatives Involving Inverse Circular Functions", description: "Integrating to obtain arcsin, arctan, etc.", icon: "🌀", lessons: 1, progress: 0 },
        { id: "y12s-ch9-9c-substitution", title: "9C: Integration by Substitution", description: "u-substitution method.", icon: "🔄", lessons: 1, progress: 0 },
        { id: "y12s-ch9-9d-definite-substitution", title: "9D: Definite Integrals by Substitution", description: "Changing limits in substitution.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12s-ch9-9e-trig-identities", title: "9E: Use of Trigonometric Identities for Integration", description: "Integrating trigonometric powers.", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12s-ch9-9f-further-substitution", title: "9F: Further Substitution", description: "Advanced substitution techniques.", icon: "🔍", lessons: 1, progress: 0 },
        { id: "y12s-ch9-9g-partial-fractions", title: "9G: Partial Fractions", description: "Decomposing rational functions.", icon: "✂️", lessons: 1, progress: 0 },
        { id: "y12s-ch9-9h-by-parts", title: "9H: Integration by Parts", description: "∫u dv = uv − ∫v du.", icon: "🤝", lessons: 1, progress: 0 },
        { id: "y12s-ch9-9i-misc", title: "9I: Further Techniques and Miscellaneous Exercises", description: "Mixed integration practice.", icon: "🧩", lessons: 1, progress: 0 },
        { id: "y12s-ch9-review", title: "Review of Chapter 9", description: "Consolidation of integration techniques.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch10",
      name: "Ch 10: Applications of Integration",
      icon: "🎯",
      topics: [
        { id: "y12s-ch10-10a-ftc", title: "10A: The Fundamental Theorem of Calculus", description: "Statement and applications of the FTC.", icon: "🎓", lessons: 1, progress: 0 },
        { id: "y12s-ch10-10b-area-between", title: "10B: Area of a Region Between Two Curves", description: "Computing areas via definite integrals.", icon: "🪟", lessons: 1, progress: 0 },
        { id: "y12s-ch10-10c-cas", title: "10C: Integration Using a CAS Calculator", description: "Using technology for complex integrals.", icon: "🖩", lessons: 1, progress: 0 },
        { id: "y12s-ch10-10d-volumes", title: "10D: Volumes of Solids of Revolution", description: "Disc and shell methods for volumes.", icon: "🥫", lessons: 1, progress: 0 },
        { id: "y12s-ch10-10e-arc-length", title: "10E: Lengths of Curves in the Plane", description: "Arc length via integration.", icon: "📏", lessons: 1, progress: 0 },
        { id: "y12s-ch10-10f-surface-areas", title: "10F: Areas of Surfaces of Revolution", description: "Surface area of revolved curves.", icon: "🥏", lessons: 1, progress: 0 },
        { id: "y12s-ch10-review", title: "Review of Chapter 10", description: "Consolidation of applications of integration.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch11",
      name: "Ch 11: Differential Equations",
      icon: "🌱",
      topics: [
        { id: "y12s-ch11-11a-intro", title: "11A: An Introduction to Differential Equations", description: "First look at ODEs.", icon: "📖", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11b-fn-independent", title: "11B: Differential Equations Involving a Function of the Independent Variable", description: "dy/dx = f(x) form.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11c-fn-dependent", title: "11C: Differential Equations Involving a Function of the Dependent Variable", description: "dy/dx = f(y) form.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11d-applications", title: "11D: Applications of Differential Equations", description: "Modelling with ODEs.", icon: "🏗️", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11e-logistic", title: "11E: The Logistic Differential Equation", description: "Logistic growth model.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11f-separation", title: "11F: Separation of Variables", description: "Separable ODE technique.", icon: "✂️", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11g-related-rates", title: "11G: Differential Equations With Related Rates", description: "Combining ODEs with related rates.", icon: "⏱️", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11h-definite-integral", title: "11H: Using a Definite Integral to Solve a Differential Equation", description: "Solving ODEs with definite integrals.", icon: "∫", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11i-euler", title: "11I: Using Euler's Method to Solve a Differential Equation", description: "Numerical ODE solutions via Euler's method.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12s-ch11-11j-slope-field", title: "11J: Slope Field for a Differential Equation", description: "Visualising ODE solutions.", icon: "🗺️", lessons: 1, progress: 0 },
        { id: "y12s-ch11-review", title: "Review of Chapter 11", description: "Consolidation of differential equations.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch12",
      name: "Ch 12: Kinematics",
      icon: "🚗",
      topics: [
        { id: "y12s-ch12-12a-pos-vel-acc", title: "12A: Position, Velocity and Acceleration", description: "Kinematic relationships.", icon: "📍", lessons: 1, progress: 0 },
        { id: "y12s-ch12-12b-constant-acc", title: "12B: Constant Acceleration", description: "Equations of motion under constant acceleration.", icon: "⏱️", lessons: 1, progress: 0 },
        { id: "y12s-ch12-12c-vt-graphs", title: "12C: Velocity–Time Graphs", description: "Interpreting v–t graphs.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12s-ch12-12d-v-fx-a-fv", title: "12D: Differential Equations of the Form v = f(x) and a = f(v)", description: "Kinematics ODEs.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12s-ch12-12e-other-acc", title: "12E: Other Expressions for Acceleration", description: "Acceleration in different forms.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12s-ch12-review", title: "Review of Chapter 12", description: "Consolidation of kinematics.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch13",
      name: "Ch 13: Vector Functions and Vector Calculus",
      icon: "➡️",
      topics: [
        { id: "y12s-ch13-13a-vector-functions", title: "13A: Vector Functions", description: "Vector-valued functions.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12s-ch13-13b-position-vectors", title: "13B: Position Vectors as a Function of Time", description: "Curves traced by position vectors.", icon: "⏱️", lessons: 1, progress: 0 },
        { id: "y12s-ch13-13c-vector-calculus", title: "13C: Vector Calculus", description: "Differentiating vector functions.", icon: "🧮", lessons: 1, progress: 0 },
        { id: "y12s-ch13-13d-velocity-acceleration", title: "13D: Velocity and Acceleration for Motion Along a Curve", description: "Kinematics of curved motion.", icon: "🛤️", lessons: 1, progress: 0 },
        { id: "y12s-ch13-review", title: "Review of Chapter 13", description: "Consolidation of vector calculus.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch14",
      name: "Ch 14: Revision of Chapters 8–13",
      icon: "📝",
      topics: [
        { id: "y12s-ch14-14a-tech-free", title: "14A: Technology-Free Questions", description: "Calculus and vectors without technology.", icon: "✍️", lessons: 1, progress: 0 },
        { id: "y12s-ch14-14b-multiple-choice", title: "14B: Multiple-Choice Questions", description: "Exam 1 style practice.", icon: "✅", lessons: 1, progress: 0 },
        { id: "y12s-ch14-14c-extended-response", title: "14C: Extended-Response Questions", description: "Exam 2 style practice.", icon: "📝", lessons: 1, progress: 0 },
        { id: "y12s-ch14-14d-pseudocode", title: "14D: Algorithms and Pseudocode", description: "Algorithmic questions for Specialist topics.", icon: "🤖", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch15",
      name: "Ch 15: Linear Combinations of Random Variables and the Sample Mean",
      icon: "🎲",
      topics: [
        { id: "y12s-ch15-15a-linear-fn", title: "15A: Linear Functions of a Random Variable", description: "Mean and variance of aX + b.", icon: "📊", lessons: 1, progress: 0 },
        { id: "y12s-ch15-15b-linear-comb", title: "15B: Linear Combinations of Random Variables", description: "Mean and variance of aX + bY.", icon: "➕", lessons: 1, progress: 0 },
        { id: "y12s-ch15-15c-normal-comb", title: "15C: Linear Combinations of Normal Random Variables", description: "Distributions of normal combinations.", icon: "🔔", lessons: 1, progress: 0 },
        { id: "y12s-ch15-15d-sample-mean-normal", title: "15D: The Sample Mean of a Normal Random Variable", description: "Distribution of X̄ for normal data.", icon: "📈", lessons: 1, progress: 0 },
        { id: "y12s-ch15-15e-simulation", title: "15E: Investigating the Distribution of the Sample Mean Using Simulation", description: "Simulating sampling distributions.", icon: "🎲", lessons: 1, progress: 0 },
        { id: "y12s-ch15-15f-distribution-mean", title: "15F: The Distribution of the Sample Mean", description: "Central Limit Theorem.", icon: "🔔", lessons: 1, progress: 0 },
        { id: "y12s-ch15-review", title: "Review of Chapter 15", description: "Consolidation of sample mean distributions.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch16",
      name: "Ch 16: Confidence Intervals and Hypothesis Testing for the Mean",
      icon: "🧪",
      topics: [
        { id: "y12s-ch16-16a-ci-mean", title: "16A: Confidence Intervals for the Population Mean", description: "Constructing confidence intervals for μ.", icon: "📐", lessons: 1, progress: 0 },
        { id: "y12s-ch16-16b-hypothesis", title: "16B: Hypothesis Testing for the Mean", description: "Null and alternative hypotheses.", icon: "🧠", lessons: 1, progress: 0 },
        { id: "y12s-ch16-16c-one-two-tail", title: "16C: One-Tail and Two-Tail Tests", description: "Choosing the correct test direction.", icon: "↔️", lessons: 1, progress: 0 },
        { id: "y12s-ch16-16d-two-tail-revisited", title: "16D: Two-Tail Tests Revisited", description: "Further work with two-tail tests.", icon: "🔁", lessons: 1, progress: 0 },
        { id: "y12s-ch16-16e-errors", title: "16E: Errors in Hypothesis Testing", description: "Type I and Type II errors.", icon: "⚠️", lessons: 1, progress: 0 },
        { id: "y12s-ch16-review", title: "Review of Chapter 16", description: "Consolidation of inference for the mean.", icon: "📋", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch17",
      name: "Ch 17: Revision of Chapters 15–16",
      icon: "📝",
      topics: [
        { id: "y12s-ch17-17a-tech-free", title: "17A: Technology-Free Questions", description: "Inference practice without technology.", icon: "✍️", lessons: 1, progress: 0 },
        { id: "y12s-ch17-17b-multiple-choice", title: "17B: Multiple-Choice Questions", description: "Exam 1 style inference practice.", icon: "✅", lessons: 1, progress: 0 },
        { id: "y12s-ch17-17c-extended-response", title: "17C: Extended-Response Questions", description: "Exam 2 style inference practice.", icon: "📝", lessons: 1, progress: 0 },
        { id: "y12s-ch17-17d-pseudocode", title: "17D: Algorithms and Pseudocode", description: "Algorithmic inference questions.", icon: "🤖", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-ch18",
      name: "Ch 18: Revision of Chapters 1–17",
      icon: "🎯",
      topics: [
        { id: "y12s-ch18-18a-tech-free", title: "18A: Technology-Free Questions", description: "Cumulative technology-free practice.", icon: "✍️", lessons: 1, progress: 0 },
        { id: "y12s-ch18-18b-multiple-choice", title: "18B: Multiple-Choice Questions", description: "Cumulative Exam 1 style practice.", icon: "✅", lessons: 1, progress: 0 },
        { id: "y12s-ch18-18c-extended-response", title: "18C: Extended-Response Questions", description: "Cumulative Exam 2 style practice.", icon: "📝", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-appA",
      name: "Appendix A: TI-Nspire CAS Guide",
      icon: "🖩",
      topics: [
        { id: "y12s-appA-ti-nspire", title: "A: Guide to the TI-Nspire CAS Calculator in VCE Mathematics", description: "Reference guide for using the TI-Nspire CAS.", icon: "📘", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-appB",
      name: "Appendix B: Casio ClassPad II Guide",
      icon: "🖩",
      topics: [
        { id: "y12s-appB-classpad", title: "B: Guide to the Casio ClassPad II CAS Calculator in VCE Mathematics", description: "Reference guide for using the Casio ClassPad II.", icon: "📘", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-appC",
      name: "Appendix C: Coding with Python",
      icon: "🐍",
      topics: [
        { id: "y12s-appC-python", title: "C: Introduction to Coding Using Python", description: "Python coding for VCE Specialist Mathematics.", icon: "🐍", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-appD",
      name: "Appendix D: Coding with TI-Nspire",
      icon: "🖩",
      topics: [
        { id: "y12s-appD-ti-nspire-coding", title: "D: Introduction to Coding Using the TI-Nspire", description: "TI-Nspire coding for VCE Specialist Mathematics.", icon: "📘", lessons: 1, progress: 0 },
      ]
    },
    {
      id: "y12s-appE",
      name: "Appendix E: Coding with Casio ClassPad",
      icon: "🖩",
      topics: [
        { id: "y12s-appE-classpad-coding", title: "E: Introduction to Coding Using the Casio ClassPad", description: "Casio ClassPad coding for VCE Specialist Mathematics.", icon: "📘", lessons: 1, progress: 0 },
      ]
    },
  ]
});

// Get all topics as a flat list
export function getAllTopics(): (Topic & { yearId: string; categoryName: string })[] {
  const allTopics: (Topic & { yearId: string; categoryName: string })[] = [];
  
  curriculum.forEach(year => {
    year.categories.forEach(category => {
      category.topics.forEach(topic => {
        allTopics.push({
          ...topic,
          yearId: year.id,
          categoryName: category.name
        });
      });
    });
  });
  
  return allTopics;
}

// Find topic by ID
export function findTopicById(topicId: string): (Topic & { yearId: string; categoryName: string }) | undefined {
  return getAllTopics().find(t => t.id === topicId);
}

// Find year by ID
export function findYearById(yearId: string): YearLevel | undefined {
  return curriculum.find(y => y.id === yearId);
}
