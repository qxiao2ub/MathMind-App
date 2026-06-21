/**
 * UI-only topic grouping configuration.
 * Combines closely related subtopics into a single display row.
 * Internal topicIds remain unchanged — this only affects presentation.
 *
 * The first topic in `topicIds` is the "primary" used for navigation.
 * Progress is averaged across all constituent topics.
 * Lesson counts are summed.
 */

export interface TopicGroup {
  /** Combined display title, e.g. "4H–I: Pythagoras' Theorem" */
  displayTitle: string;
  /** Combined description shown in the UI */
  description: string;
  /** The constituent topic IDs (order matters — first = nav target) */
  topicIds: string[];
  /** Icon for the combined card */
  icon: string;
}

/** Keyed by the FIRST topicId in the group */
const topicGroupsMap: Record<string, TopicGroup> = {
  // ═══ YEAR 9 ═══

  // Ch 2: Linear Equations
  "y9-solving-linear-equations": {
    displayTitle: "2C–D: Solving Linear Equations",
    description: "Solving equations with one variable, including with brackets and pronumerals on both sides.",
    topicIds: ["y9-solving-linear-equations", "y9-equations-both-sides"],
    icon: "➗",
  },

  // Ch 4: Congruence
  "y9-congruent-triangles": {
    displayTitle: "4C–D: Congruence & Proofs",
    description: "Tests for congruence (SSS, SAS, ASA, RHS) and writing formal proofs.",
    topicIds: ["y9-congruent-triangles", "y9-congruence-proofs"],
    icon: "🔷",
  },

  // Ch 4: Similarity
  "y9-similar-figures": {
    displayTitle: "4F–G: Similar Figures & Proofs",
    description: "Properties of similar shapes, scale factors, and similarity proofs.",
    topicIds: ["y9-similar-figures", "y9-similar-triangles-proofs"],
    icon: "🔲",
  },

  // Ch 4: Pythagoras
  "y9-pythagoras-2d": {
    displayTitle: "4H–I: Pythagoras' Theorem",
    description: "Finding unknown sides in right-angled triangles in 2D and 3D contexts.",
    topicIds: ["y9-pythagoras-2d", "y9-pythagoras-3d"],
    icon: "📐",
  },

  // Ch 4: Trig unknowns
  "y9-finding-unknown-sides": {
    displayTitle: "4K–L: Finding Unknown Sides & Angles",
    description: "Using trigonometry and inverse trig functions to find unknowns.",
    topicIds: ["y9-finding-unknown-sides", "y9-finding-unknown-angles"],
    icon: "📏",
  },

  // Ch 5: Volume
  "y9-volume-prisms": {
    displayTitle: "5E–F: Volume of Prisms & Cylinders",
    description: "Volume of rectangular, triangular prisms and cylinders.",
    topicIds: ["y9-volume-prisms", "y9-volume-cylinders"],
    icon: "🧊",
  },

  // Ch 6: Solving quadratics
  "y9-solving-ax2-bx": {
    displayTitle: "6H–I: Solving Quadratic Equations",
    description: "Factorising and solving ax² + bx = 0 and ax² + bx + c = 0 using null factor law.",
    topicIds: ["y9-solving-ax2-bx", "y9-solving-ax2-bx-c"],
    icon: "🎯",
  },

  // Ch 6: Sketching parabolas
  "y9-sketching-y-ax2": {
    displayTitle: "6L–M: Sketching & Translating Parabolas",
    description: "Effect of 'a' on parabolas and horizontal/vertical translations.",
    topicIds: ["y9-sketching-y-ax2", "y9-translations"],
    icon: "✏️",
  },

  // Ch 7: Spread & Box Plots
  "y9-range-iqr": {
    displayTitle: "7H–I: Spread & Box Plots",
    description: "Measures of spread (IQR) and box-and-whisker plots.",
    topicIds: ["y9-range-iqr", "y9-box-plots"],
    icon: "📦",
  },

  // ═══ YEAR 10 ═══

  // Ch 3: Expanding & Factorising
  "y10-expanding-expressions": {
    displayTitle: "3A–B: Expanding & Factorising",
    description: "Expand binomial products and factorise using HCF, grouping, and identities.",
    topicIds: ["y10-expanding-expressions", "y10-factorising-expressions"],
    icon: "📖",
  },

  // Ch 3: Factorising Quadratics
  "y10-monic-quadratics": {
    displayTitle: "3D–E: Factorising Quadratics",
    description: "Factorise monic and non-monic quadratic trinomials.",
    topicIds: ["y10-monic-quadratics", "y10-non-monic-quadratics"],
    icon: "🎯",
  },

  // Ch 3: Parabolas
  "y10-exploring-parabolas": {
    displayTitle: "3K–L: Parabolas & Transformations",
    description: "Key features of parabolas and applying transformations.",
    topicIds: ["y10-exploring-parabolas", "y10-parabola-transformations"],
    icon: "⛰️",
  },

  // Ch 4: Counting techniques
  "y10-factorial-notation": {
    displayTitle: "4H–J: Factorials, Permutations & Combinations",
    description: "Factorial notation, ordered arrangements and unordered selections.",
    topicIds: ["y10-factorial-notation", "y10-arrangements", "y10-selections"],
    icon: "❗",
  },

  // Ch 6: Surd operations
  "y10-add-sub-surds": {
    displayTitle: "6B–C: Operations with Surds",
    description: "Adding, subtracting, multiplying and dividing surd expressions.",
    topicIds: ["y10-add-sub-surds", "y10-mult-div-surds"],
    icon: "➕",
  },

  // Ch 6: 3D solids
  "y10-sa-prisms-cylinders": {
    displayTitle: "6I–J: Surface Area & Volume of 3D Solids",
    description: "Surface area and volume of prisms, cylinders, pyramids and cones.",
    topicIds: ["y10-sa-prisms-cylinders", "y10-sa-pyramids-cones"],
    icon: "📦",
  },

  // ═══ YEAR 11 GENERAL MATHEMATICS ═══

  // Ch 2: Data Analysis Foundations
  "y11g-ch2-measures-centre": {
    displayTitle: "Measures of Centre & Spread",
    description: "Mean, median, mode, range, IQR, and quartiles.",
    topicIds: ["y11g-ch2-measures-centre", "y11g-ch2-measures-spread"],
    icon: "🎯",
  },

  // Ch 2: Box Plots & Comparing
  "y11g-ch2-boxplots": {
    displayTitle: "Boxplots & Comparing Distributions",
    description: "Five-number summary, box plots, and parallel comparison across groups.",
    topicIds: ["y11g-ch2-boxplots", "y11g-ch2-comparing-distributions"],
    icon: "📦",
  },

  // Ch 3: Finance — Arithmetic sequences
  "y11g-ch3-intro-arithmetic": {
    displayTitle: "Arithmetic Sequences & Recursion",
    description: "Common difference, nth term, recursive definition, and sum formulas.",
    topicIds: ["y11g-ch3-intro-arithmetic", "y11g-ch3-arithmetic-recursion"],
    icon: "➕",
  },

  // Ch 3: Finance — Geometric sequences
  "y11g-ch3-intro-geometric": {
    displayTitle: "Geometric Sequences & Recursion",
    description: "Common ratio, nth term, recursive form, and sum formulas.",
    topicIds: ["y11g-ch3-intro-geometric", "y11g-ch3-geometric-recursion"],
    icon: "✖️",
  },

  // Ch 3: Finance applications
  "y11g-ch3-finance-arithmetic": {
    displayTitle: "Finance Applications",
    description: "Simple interest, flat-rate depreciation, compound interest, and reducing-balance depreciation.",
    topicIds: ["y11g-ch3-finance-arithmetic", "y11g-ch3-finance-geometric"],
    icon: "💵",
  },

  // Ch 4: Matrix operations
  "y11g-ch4-adding-subtracting": {
    displayTitle: "Matrix Operations",
    description: "Adding, subtracting matrices and scalar multiplication.",
    topicIds: ["y11g-ch4-adding-subtracting", "y11g-ch4-scalar-mult"],
    icon: "➕",
  },

  // Ch 4: Transition matrices
  "y11g-ch4-transition-matrices": {
    displayTitle: "Transition Matrices & Recursion",
    description: "State vectors, transition matrices, multiple applications and steady state.",
    topicIds: ["y11g-ch4-transition-matrices", "y11g-ch4-transition-recursion"],
    icon: "🔀",
  },

  // Ch 5: Equations of lines
  "y11g-ch5-equations-lines": {
    displayTitle: "Equations & Graphs of Lines",
    description: "Gradient-intercept, general, point-gradient forms and finding equations.",
    topicIds: ["y11g-ch5-equations-lines", "y11g-ch5-finding-equation"],
    icon: "✏️",
  },

  // Ch 5: Simultaneous equations
  "y11g-ch5-simultaneous": {
    displayTitle: "Simultaneous Equations & Applications",
    description: "Substitution, elimination, break-even, mixing, and cost comparison problems.",
    topicIds: ["y11g-ch5-simultaneous", "y11g-ch5-practical-simultaneous"],
    icon: "⚖️",
  },

  // Ch 8: Network foundations
  "y11g-ch8-what-is-graph": {
    displayTitle: "Graphs & Adjacency Matrices",
    description: "Vertices, edges, degree, isomorphic graphs and matrix representations.",
    topicIds: ["y11g-ch8-what-is-graph", "y11g-ch8-isomorphic-adjacency"],
    icon: "🔵",
  },

  // Ch 8: Euler & Hamilton
  "y11g-ch8-eulerian-trails": {
    displayTitle: "Eulerian & Hamiltonian Traversals",
    description: "Traversing every edge or visiting every vertex exactly once.",
    topicIds: ["y11g-ch8-eulerian-trails", "y11g-ch8-hamiltonian"],
    icon: "🔁",
  },

  // Ch 8: Weighted graphs
  "y11g-ch8-weighted-shortest": {
    displayTitle: "Shortest Paths & Spanning Trees",
    description: "Edge weights, minimum-weight paths, Prim's and Kruskal's algorithms.",
    topicIds: ["y11g-ch8-weighted-shortest", "y11g-ch8-spanning-trees"],
    icon: "🛤️",
  },

  // Ch 9: Variation
  "y11g-ch9-direct-variation": {
    displayTitle: "Direct & Inverse Variation",
    description: "y = kx proportional and y = k/x hyperbolic relationships.",
    topicIds: ["y11g-ch9-direct-variation", "y11g-ch9-inverse-variation"],
    icon: "📈",
  },

  // Ch 10: Volume
  "y11g-ch10-volume": {
    displayTitle: "Volume of Solids",
    description: "Volume of prisms, cylinders, pyramids, cones, and spheres.",
    topicIds: ["y11g-ch10-volume", "y11g-ch10-volume-pyramid"],
    icon: "🧊",
  },

  // Ch 10: Similar figures
  "y11g-ch10-similar-figures": {
    displayTitle: "Similar Figures & Triangles",
    description: "Scale factor, proportional sides, and similarity tests.",
    topicIds: ["y11g-ch10-similar-figures", "y11g-ch10-similar-triangles"],
    icon: "🔲",
  },

  // Ch 11: Trig basics
  "y11g-ch11-finding-side": {
    displayTitle: "Finding Unknown Sides & Angles",
    description: "Using trig ratios and inverse trig functions.",
    topicIds: ["y11g-ch11-finding-side", "y11g-ch11-finding-angle"],
    icon: "📏",
  },

  // Ch 11: Sine & Cosine rules
  "y11g-ch11-sine-rule": {
    displayTitle: "Sine Rule, Cosine Rule & Area",
    description: "Non-right triangle rules and area = ½ab sinC.",
    topicIds: ["y11g-ch11-sine-rule", "y11g-ch11-cosine-rule", "y11g-ch11-area-triangle"],
    icon: "📊",
  },

  // ═══ YEAR 11 MATHEMATICAL METHODS ═══

  // Ch 1: Linear systems
  "y11m-ch1-linear-equations": {
    displayTitle: "Linear Equations & Simultaneous Systems",
    description: "Solving one-variable linear equations and pairs of equations by substitution and elimination.",
    topicIds: ["y11m-ch1-linear-equations", "y11m-ch1-constructing-linear", "y11m-ch1-simultaneous", "y11m-ch1-constructing-simultaneous"],
    icon: "➗",
  },

  // Ch 2: Distance, midpoint & gradient
  "y11m-ch2-distance-midpoints": {
    displayTitle: "Distance, Midpoints & Gradient",
    description: "Finding distance, midpoint and calculating gradient between points.",
    topicIds: ["y11m-ch2-distance-midpoints", "y11m-ch2-gradient"],
    icon: "📏",
  },

  // Ch 2: Equation & graphing lines
  "y11m-ch2-equation": {
    displayTitle: "Equations & Graphing of Lines",
    description: "Gradient-intercept, point-gradient and general forms; plotting linear graphs.",
    topicIds: ["y11m-ch2-equation", "y11m-ch2-graphing"],
    icon: "✏️",
  },

  // Ch 3: Expanding & factorising quadratics
  "y11m-ch3-expanding": {
    displayTitle: "Expanding & Factorising Quadratics",
    description: "Expanding brackets, simplifying, and factorising quadratic trinomials.",
    topicIds: ["y11m-ch3-expanding", "y11m-ch3-factorising"],
    icon: "📖",
  },

  // Ch 3: Quadratic techniques
  "y11m-ch3-completing-square": {
    displayTitle: "Completing the Square & Quadratic Formula",
    description: "Vertex form, turning points, and applying the general quadratic formula.",
    topicIds: ["y11m-ch3-completing-square", "y11m-ch3-formula", "y11m-ch3-discriminant"],
    icon: "🎯",
  },

  // Ch 3: Graphing quadratics
  "y11m-ch3-graphing": {
    displayTitle: "Graphing Quadratics",
    description: "Plotting parabolas, vertex, intercepts, and sketching from polynomial form.",
    topicIds: ["y11m-ch3-graphing", "y11m-ch3-graphing-poly"],
    icon: "📉",
  },

  // Ch 5: Relations & functions
  "y11m-ch5-relations": {
    displayTitle: "Relations, Functions & Domain/Range",
    description: "Defining relations, domain/range, vertical line test, and one-to-one functions.",
    topicIds: ["y11m-ch5-relations", "y11m-ch5-functions", "y11m-ch5-one-to-one"],
    icon: "↔️",
  },

  // Ch 6: Polynomial factorisation
  "y11m-ch6-division": {
    displayTitle: "Division & Factorisation of Polynomials",
    description: "Long division, synthetic division, factor theorem, and factorising cubics.",
    topicIds: ["y11m-ch6-division", "y11m-ch6-factorisation"],
    icon: "➗",
  },

  // Ch 6: Cubic equations & graphs
  "y11m-ch6-cubic-equations": {
    displayTitle: "Cubic Equations & Graphs",
    description: "Solving cubics algebraically and graphing in turning-point and factorised forms.",
    topicIds: ["y11m-ch6-cubic-equations", "y11m-ch6-cubic-form", "y11m-ch6-cubic-graphs"],
    icon: "📈",
  },

  // Ch 7: Transformations
  "y11m-ch7-translations": {
    displayTitle: "Translations, Dilations & Reflections",
    description: "Horizontal/vertical translations, stretching, compressing and reflecting graphs.",
    topicIds: ["y11m-ch7-translations", "y11m-ch7-dilations", "y11m-ch7-combinations"],
    icon: "➡️",
  },

  // Ch 9: Probability combining events
  "y11m-ch9-combining": {
    displayTitle: "Combining Events & Probability Tables",
    description: "Union, intersection, complement, two-way tables, and Karnaugh maps.",
    topicIds: ["y11m-ch9-combining", "y11m-ch9-tables"],
    icon: "∪",
  },

  // Ch 9: Conditional & independent
  "y11m-ch9-conditional": {
    displayTitle: "Conditional Probability & Independence",
    description: "P(A|B), restricted sample spaces, and testing independence.",
    topicIds: ["y11m-ch9-conditional", "y11m-ch9-independent"],
    icon: "❓",
  },

  // Ch 10: Counting methods
  "y11m-ch10-arrangements": {
    displayTitle: "Arrangements & Selections",
    description: "Permutations, ordered arrangements, combinations, and unordered selections.",
    topicIds: ["y11m-ch10-arrangements", "y11m-ch10-selections"],
    icon: "🔄",
  },

  // Ch 13: Exponentials & logarithms
  "y11m-ch13-exp-equations": {
    displayTitle: "Exponential Equations & Graphs",
    description: "Solving exponential equations, inequalities, and graphing y = aˣ.",
    topicIds: ["y11m-ch13-exp-equations", "y11m-ch13-exp-graphs"],
    icon: "🧮",
  },

  // Ch 13: Logarithms
  "y11m-ch13-logarithms": {
    displayTitle: "Logarithms & Solving Exponential Equations",
    description: "Definition, laws of logarithms, and applying logs to solve exponentials.",
    topicIds: ["y11m-ch13-logarithms", "y11m-ch13-log-solving", "y11m-ch13-log-graphs"],
    icon: "📋",
  },

  // Ch 16: Rates of change
  "y11m-ch16-average": {
    displayTitle: "Average & Instantaneous Rate of Change",
    description: "Secant gradient and tangent gradient as a limit.",
    topicIds: ["y11m-ch16-average", "y11m-ch16-instantaneous"],
    icon: "📏",
  },

  // Ch 17: Differentiation rules
  "y11m-ch17-derivative": {
    displayTitle: "The Derivative & Differentiation Rules",
    description: "First-principles definition, power rule, constant multiple, sum and difference rules.",
    topicIds: ["y11m-ch17-derivative", "y11m-ch17-rules"],
    icon: "📐",
  },

  // Ch 18: Stationary points
  "y11m-ch18-stationary": {
    displayTitle: "Stationary Points & Classification",
    description: "Finding f′(x) = 0, local max, local min, and points of inflection.",
    topicIds: ["y11m-ch18-stationary", "y11m-ch18-types"],
    icon: "⏸️",
  },

  // ═══ YEAR 11 SPECIALIST MATHEMATICS ═══

  // Ch 1: Linear equations
  "y11s-ch1-linear-simul": {
    displayTitle: "Linear & Simultaneous Equations",
    description: "Solving linear equations, systems, and word problems.",
    topicIds: ["y11s-ch1-linear-simul", "y11s-ch1-problems-linear", "y11s-ch1-problems-simul"],
    icon: "➗",
  },

  // Ch 2: Sets of numbers & surds
  "y11s-ch2-sets-of-numbers": {
    displayTitle: "Number Sets & Surds",
    description: "Natural, integer, rational, irrational, real numbers and surd operations.",
    topicIds: ["y11s-ch2-sets-of-numbers", "y11s-ch2-surds"],
    icon: "🔢",
  },

  // Ch 3: Arithmetic sequences & series
  "y11s-ch3-arithmetic-sequences": {
    displayTitle: "Arithmetic Sequences & Series",
    description: "Common difference, nth term, and sum formulas.",
    topicIds: ["y11s-ch3-arithmetic-sequences", "y11s-ch3-arithmetic-series"],
    icon: "➕",
  },

  // Ch 3: Geometric sequences & series
  "y11s-ch3-geometric-sequences": {
    displayTitle: "Geometric Sequences & Series",
    description: "Common ratio, nth term, sum formulas, and applications.",
    topicIds: ["y11s-ch3-geometric-sequences", "y11s-ch3-geometric-series", "y11s-ch3-applications-geometric"],
    icon: "✖️",
  },

  // Ch 6: Proof techniques
  "y11s-ch6-direct-proof": {
    displayTitle: "Direct Proof & Contrapositive",
    description: "Proving statements directly and by proving the contrapositive.",
    topicIds: ["y11s-ch6-direct-proof", "y11s-ch6-contrapositive", "y11s-ch6-contradiction"],
    icon: "✅",
  },

  // Ch 8: Algorithms
  "y11s-ch8-intro-algorithms": {
    displayTitle: "Algorithms & Iteration",
    description: "Flowcharts, step-by-step processes, loops and conditional branching.",
    topicIds: ["y11s-ch8-intro-algorithms", "y11s-ch8-iteration-selection"],
    icon: "🔲",
  },

  // Ch 8: Pseudocode
  "y11s-ch8-intro-pseudocode": {
    displayTitle: "Pseudocode Techniques",
    description: "Writing structured pseudocode and advanced nested structures.",
    topicIds: ["y11s-ch8-intro-pseudocode", "y11s-ch8-further-pseudocode"],
    icon: "📝",
  },

  // Ch 9: Permutations
  "y11s-ch9-factorial-permutations": {
    displayTitle: "Permutations & Restrictions",
    description: "Factorials, permutations of distinct objects, and arrangements with constraints.",
    topicIds: ["y11s-ch9-factorial-permutations", "y11s-ch9-permutations-restrictions", "y11s-ch9-permutations-like"],
    icon: "🎯",
  },

  // Ch 9: Combinations
  "y11s-ch9-combinations": {
    displayTitle: "Combinations & Restrictions",
    description: "ⁿCᵣ formula, counting selections with and without constraints.",
    topicIds: ["y11s-ch9-combinations", "y11s-ch9-combinations-restrictions"],
    icon: "🎲",
  },

  // Ch 11: Matrix operations
  "y11s-ch11-add-subtract-scalar": {
    displayTitle: "Matrix Operations",
    description: "Addition, subtraction, scalar multiplication, and matrix multiplication.",
    topicIds: ["y11s-ch11-add-subtract-scalar", "y11s-ch11-multiplication"],
    icon: "➕",
  },

  // Ch 11: Inverse matrices
  "y11s-ch11-inverses-2x2": {
    displayTitle: "Inverses, Determinants & Simultaneous Equations",
    description: "2×2 inverses, determinants, and solving systems using matrices.",
    topicIds: ["y11s-ch11-inverses-2x2", "y11s-ch11-simul-2x2"],
    icon: "🔄",
  },

  // Ch 11: n×n matrices
  "y11s-ch11-inverses-nxn": {
    displayTitle: "n×n Matrices & Larger Systems",
    description: "Extending inverses/determinants to n×n and solving 3+ variable systems.",
    topicIds: ["y11s-ch11-inverses-nxn", "y11s-ch11-simul-3plus"],
    icon: "📐",
  },

  // Ch 12: Graph theory
  "y11s-ch12-euler-circuits": {
    displayTitle: "Euler & Hamiltonian Traversals",
    description: "Euler paths/circuits and Hamiltonian cycles in graphs.",
    topicIds: ["y11s-ch12-euler-circuits", "y11s-ch12-hamiltonian-cycles"],
    icon: "🔄",
  },

  // Ch 15: Sine & Cosine rules
  "y11s-ch15-sine-rule": {
    displayTitle: "Sine Rule, Cosine Rule & Area",
    description: "Non-right triangle rules: a/sinA = b/sinB, c² = a²+b²−2ab cosC, and ½ab sinC.",
    topicIds: ["y11s-ch15-sine-rule", "y11s-ch15-cosine-rule", "y11s-ch15-area-triangle"],
    icon: "📏",
  },

  // Ch 15: 3D trigonometry
  "y11s-ch15-3d-problems": {
    displayTitle: "3D Trigonometry & Angles Between Planes",
    description: "Trigonometry in 3D contexts and finding angles between planes.",
    topicIds: ["y11s-ch15-3d-problems", "y11s-ch15-angles-between-planes"],
    icon: "🧊",
  },

  // Ch 17: Parabolas & Conics
  "y11s-ch17-ellipses": {
    displayTitle: "Ellipses & Hyperbolas",
    description: "Standard forms, foci, asymptotes, and graphing conics.",
    topicIds: ["y11s-ch17-ellipses", "y11s-ch17-hyperbolas"],
    icon: "⭕",
  },

  // Ch 17: Polar coordinates
  "y11s-ch17-polar-coords": {
    displayTitle: "Polar Coordinates & Graphing",
    description: "Converting coordinates and plotting curves in polar form.",
    topicIds: ["y11s-ch17-polar-coords", "y11s-ch17-polar-graphing"],
    icon: "🎯",
  },

  // Ch 18: Complex number basics
  "y11s-ch18-building-complex": {
    displayTitle: "Complex Numbers: Basics & Operations",
    description: "The imaginary unit i, form a + bi, and multiplication/division.",
    topicIds: ["y11s-ch18-building-complex", "y11s-ch18-multiply-divide", "y11s-ch18-argand"],
    icon: "🔵",
  },

  // Ch 18: Complex equations
  "y11s-ch18-quadratic-complex": {
    displayTitle: "Solving Equations over Complex Numbers",
    description: "Quadratic and polynomial equations with complex roots.",
    topicIds: ["y11s-ch18-quadratic-complex", "y11s-ch18-polynomial-complex"],
    icon: "⛰️",
  },

  // Ch 20: Geometric transformations
  "y11s-ch20-geometric": {
    displayTitle: "Geometric Transformations & Rotations",
    description: "Reflections, rotations, dilations as matrices and their properties.",
    topicIds: ["y11s-ch20-geometric", "y11s-ch20-rotations-reflections"],
    icon: "📐",
  },

  // Ch 20: Composition & inverse
  "y11s-ch20-composition": {
    displayTitle: "Composition & Inverse Transformations",
    description: "Combining transformations and finding inverse transformations.",
    topicIds: ["y11s-ch20-composition", "y11s-ch20-inverse"],
    icon: "🔗",
  },

  // Ch 21: Vector basics
  "y11s-ch21-intro-vectors": {
    displayTitle: "Vectors: Introduction & Components",
    description: "Magnitude, direction, notation, and resolving into i and j components.",
    topicIds: ["y11s-ch21-intro-vectors", "y11s-ch21-components"],
    icon: "➡️",
  },

  // Ch 21: Scalar product & projections
  "y11s-ch21-scalar-product": {
    displayTitle: "Scalar Product & Projections",
    description: "Dot product a·b = |a||b|cos θ and scalar/vector projections.",
    topicIds: ["y11s-ch21-scalar-product", "y11s-ch21-projections"],
    icon: "✖️",
  },

  // Ch 21: Vector applications
  "y11s-ch21-displacement-velocity": {
    displayTitle: "Vectors: Displacement, Velocity & Forces",
    description: "Position vectors, displacement, velocity, relative velocity, and equilibrium.",
    topicIds: ["y11s-ch21-displacement-velocity", "y11s-ch21-relative-velocity", "y11s-ch21-forces-equilibrium"],
    icon: "🏃",
  },
};

/**
 * Look up whether a topic is the PRIMARY (first) of a group.
 * Returns the group definition or undefined.
 */
export function getTopicGroup(topicId: string): TopicGroup | undefined {
  return topicGroupsMap[topicId];
}

/**
 * Check if a topic is a SECONDARY member of a group (should be hidden).
 */
export function isSecondaryGroupMember(topicId: string): boolean {
  return Object.values(topicGroupsMap).some(
    (g) => g.topicIds.indexOf(topicId) > 0
  );
}
