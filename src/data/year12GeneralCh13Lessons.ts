import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 13: Graphs, Networks and Trees (VCE Unit 4)

export const year12GeneralCh13Lessons: TopicLessonsMap = {
  // ─── 13A: Graphs and Networks ──────────────────────────────────────
  "y12g-ch13-13a-graphs-networks": [
    {
      title: "Graphs and Networks — Terminology",
      explanation:
        "A GRAPH is a mathematical object made of two sets:\n  • VERTICES (or nodes) — the dots, often representing places, people, or events.\n  • EDGES — the lines joining pairs of vertices, representing a connection or relationship.\n\nA NETWORK is a graph where edges (and sometimes vertices) carry extra INFORMATION such as distance, time, capacity, or cost.\n\nKEY TERMINOLOGY:\n  • DEGREE of a vertex: number of edge-ends meeting at it. A loop counts twice.\n  • PATH: a sequence of distinct vertices connected by edges; no vertex revisited.\n  • CYCLE: a path that returns to its starting vertex.\n  • CONNECTED graph: every pair of vertices is joined by some path.\n  • SIMPLE graph: no loops and no multiple edges between the same pair.\n  • PLANAR graph: can be drawn so no edges cross.\n  • SUBGRAPH: any graph formed using some of the vertices and edges of a larger graph.\n\nHANDSHAKE LEMMA: the sum of the degrees of all vertices equals twice the number of edges.",
      keyPoints: [
        "Graph = vertices + edges; network adds weights",
        "Degree counts edge-ends, loop counts twice",
        "Path: no repeated vertex; cycle: returns to start",
        "Sum of degrees = 2 × (number of edges)",
      ],
      workedExamples: [
        {
          problem: "A graph has vertices A, B, C, D and edges AB, AC, BC, CD. Find the degree of each vertex and verify the handshake lemma.",
          steps: [
            "deg(A) = 2 (AB, AC)",
            "deg(B) = 2 (AB, BC)",
            "deg(C) = 3 (AC, BC, CD)",
            "deg(D) = 1 (CD)",
            "Sum = 2 + 2 + 3 + 1 = 8",
            "Edges = 4, so 2·E = 8 ✓",
          ],
          answer: "Degrees 2, 2, 3, 1; sum = 2·E.",
        },
      ],
      tips: [
        "Always count loops twice when computing degree",
        "Use the handshake lemma to check your edge count",
      ],
      definitions: [
        { term: "Vertex", meaning: "A node in a graph." },
        { term: "Edge", meaning: "A connection joining two vertices." },
        { term: "Degree", meaning: "The number of edge-ends incident to a vertex." },
        { term: "Connected", meaning: "Every pair of vertices is joined by a path." },
      ],
      formulas: [
        { name: "Handshake lemma", formula: "Σ deg(v) = 2·E" },
      ],
      examQuestion: {
        problem: "A simple connected graph has 6 vertices each of degree 3. How many edges does it have?",
        solution: [
          "Sum of degrees = 6 × 3 = 18",
          "By handshake: 2E = 18, so E = 9",
        ],
        answer: "9 edges.",
        marks: 2,
      },
      commonErrors: [
        "Forgetting loops contribute 2 to degree",
        "Confusing 'connected' with 'complete'",
      ],
      summary: [
        "Vertices and edges define a graph",
        "Degree, path, cycle, connectedness are core terms",
        "Handshake: Σ degrees = 2E",
      ],
      quiz: [
        {
          question: "A loop at a vertex contributes how much to its degree?",
          options: ["0", "1", "2", "Depends"],
          correctAnswer: 2,
          explanation: "A loop has both endpoints at the same vertex, so it adds 2.",
        },
        {
          question: "If a graph has 5 vertices of degrees 1, 2, 2, 3, 4, how many edges?",
          options: ["6", "12", "5", "7"],
          correctAnswer: 0,
          explanation: "Sum = 12; edges = 12/2 = 6.",
        },
        {
          question: "A path of length 4 visits how many distinct vertices?",
          options: ["3", "4", "5", "6"],
          correctAnswer: 2,
          explanation: "Length counts edges; vertices = edges + 1.",
        },
      ],
    },
  ],

  // ─── 13B: Adjacency Matrices ───────────────────────────────────────
  "y12g-ch13-13b-adjacency": [
    {
      title: "Adjacency Matrices",
      explanation:
        "An ADJACENCY MATRIX A is a square matrix that records the connections of a graph. If the graph has n vertices labelled 1, 2, …, n, then A is n×n and:\n\n  A_ij = number of edges joining vertex i and vertex j.\n\nFOR SIMPLE UNDIRECTED GRAPHS:\n  • A is SYMMETRIC: A_ij = A_ji.\n  • Diagonal entries are 0 (no loops).\n  • Each entry is 0 or 1.\n\nFOR GRAPHS WITH LOOPS:\n  • A loop at vertex i contributes 1 to A_ii in directed conventions (or 2 in some undirected conventions; VCAA uses 1 unless otherwise stated).\n\nPOWERS OF A:\n  • (A^k)_ij counts the number of WALKS of length exactly k from vertex i to vertex j.\n  • A^2 reveals 2-step connections, A^3 reveals 3-step, and so on.\n\nUSE CASES:\n  • Storing a graph in a calculator or computer.\n  • Quickly checking whether vertices are joined.\n  • Counting walks and analysing reachability.",
      keyPoints: [
        "A is n×n; A_ij = number of edges between i and j",
        "Undirected graph → A is symmetric",
        "Diagonal = 0 for simple graphs",
        "(A^k)_ij = number of walks of length k from i to j",
      ],
      workedExamples: [
        {
          problem: "Graph has edges A–B, B–C, A–C. Construct the adjacency matrix.",
          steps: [
            "Order vertices A, B, C",
            "A–B: A_12 = A_21 = 1",
            "B–C: A_23 = A_32 = 1",
            "A–C: A_13 = A_31 = 1",
            "Diagonal = 0",
            "A = [0 1 1; 1 0 1; 1 1 0]",
          ],
          answer: "A = [0 1 1; 1 0 1; 1 1 0].",
        },
      ],
      tips: [
        "Always fix the order of vertices before writing A",
        "Symmetry is a quick check for undirected graphs",
      ],
      definitions: [
        { term: "Adjacency matrix", meaning: "Matrix recording connections between vertices." },
        { term: "Walk", meaning: "Sequence of edges; vertices may be repeated." },
      ],
      formulas: [
        { name: "Walk count", formula: "(A^k)_ij = number of walks of length k from i to j" },
      ],
      examQuestion: {
        problem: "Given A = [0 1 1; 1 0 0; 1 0 0], how many vertices and edges does the graph have?",
        solution: [
          "A is 3×3 → 3 vertices",
          "Sum of upper triangle = 1 + 1 + 0 = 2",
          "Hence 2 edges",
        ],
        answer: "3 vertices, 2 edges.",
        marks: 2,
      },
      commonErrors: [
        "Forgetting symmetry for undirected graphs",
        "Confusing (A^2)_ii with degree",
      ],
      summary: [
        "Adjacency matrix encodes the graph",
        "Symmetric for undirected graphs",
        "Powers count walks of given length",
      ],
      quiz: [
        {
          question: "For an undirected graph, the adjacency matrix is:",
          options: ["Diagonal", "Triangular", "Symmetric", "Identity"],
          correctAnswer: 2,
          explanation: "A_ij = A_ji because edges are unordered.",
        },
        {
          question: "If A^2 has entry (1,3) equal to 4, then there are:",
          options: ["4 edges from 1 to 3", "4 walks of length 2 from 1 to 3", "4 vertices", "No connection"],
          correctAnswer: 1,
          explanation: "(A^k)_ij counts walks of length k.",
        },
        {
          question: "Diagonal entries of A for a simple graph are:",
          options: ["1", "0", "Equal to degree", "Negative"],
          correctAnswer: 1,
          explanation: "No loops means no self-edges.",
        },
      ],
    },
  ],

  // ─── 13C: Exploring and Travelling ─────────────────────────────────
  "y12g-ch13-13c-exploring-travelling": [
    {
      title: "Exploring and Travelling — Euler and Hamilton",
      explanation:
        "Two big questions in graph theory ask about how to traverse a graph efficiently.\n\nEULER PATHS AND CIRCUITS — about EDGES.\n  • An EULER PATH uses every EDGE exactly once.\n  • An EULER CIRCUIT is an Euler path that returns to the start.\n  • Existence rules (connected graph):\n     – Euler CIRCUIT exists iff EVERY vertex has EVEN degree.\n     – Euler PATH (not closed) exists iff EXACTLY TWO vertices have ODD degree; the path must start at one and finish at the other.\n\nHAMILTON PATHS AND CYCLES — about VERTICES.\n  • A HAMILTON PATH visits every VERTEX exactly once.\n  • A HAMILTON CYCLE is a Hamilton path that returns to the start.\n  • There is NO simple degree rule. Existence is determined by inspection or trial.\n\nTYPICAL APPLICATIONS:\n  • Euler: postman, street-cleaning, road inspection — every edge.\n  • Hamilton: travelling salesperson, delivery to every site — every vertex.",
      keyPoints: [
        "Euler = every edge once; Hamilton = every vertex once",
        "Euler circuit ⇔ all even degrees",
        "Euler path ⇔ exactly two odd-degree vertices",
        "Hamilton has no easy rule — try systematically",
      ],
      workedExamples: [
        {
          problem: "Vertices A, B, C, D with degrees 2, 2, 3, 3. Does an Euler circuit or Euler path exist?",
          steps: [
            "Even degrees: A, B (count 2)",
            "Odd degrees: C, D (count 2)",
            "Exactly two odd vertices → Euler PATH exists",
            "It must start at C and end at D (or vice versa)",
            "No Euler circuit (because not all even)",
          ],
          answer: "Euler path exists from C to D; no Euler circuit.",
        },
      ],
      tips: [
        "Count odd-degree vertices first — it answers Euler instantly",
        "For Hamilton, label visited vertices and backtrack on dead ends",
      ],
      definitions: [
        { term: "Euler path", meaning: "Uses every edge exactly once." },
        { term: "Euler circuit", meaning: "Euler path that returns to its start." },
        { term: "Hamilton path", meaning: "Visits every vertex exactly once." },
      ],
      formulas: [
        { name: "Euler circuit rule", formula: "All vertices have even degree" },
        { name: "Euler path rule", formula: "Exactly two vertices have odd degree" },
      ],
      examQuestion: {
        problem: "A connected graph has 5 vertices with degrees 4, 4, 2, 3, 3. Which traversal is possible?",
        solution: [
          "Odd-degree vertices: two (the 3s)",
          "Even-degree: three (the 4s and 2)",
          "Exactly two odd → Euler path, not circuit",
        ],
        answer: "Euler path between the two odd-degree vertices.",
        marks: 2,
      },
      commonErrors: [
        "Mixing up edge-traversal (Euler) with vertex-traversal (Hamilton)",
        "Forgetting graph must be connected",
      ],
      summary: [
        "Euler ↔ edges, decided by degrees",
        "Hamilton ↔ vertices, decided by inspection",
      ],
      quiz: [
        {
          question: "Euler circuit exists when:",
          options: ["All degrees odd", "All degrees even", "Two odd degrees", "Graph is a tree"],
          correctAnswer: 1,
          explanation: "Every vertex must have even degree.",
        },
        {
          question: "A Hamilton cycle visits:",
          options: ["Every edge once", "Every vertex once and returns", "Every face once", "Only odd vertices"],
          correctAnswer: 1,
          explanation: "Each vertex exactly once, ending at the start.",
        },
        {
          question: "If a graph has four odd-degree vertices, an Euler path:",
          options: ["Exists", "Does not exist", "Equals a Hamilton path", "Equals a circuit"],
          correctAnswer: 1,
          explanation: "Need exactly 0 or 2 odd vertices.",
        },
      ],
    },
  ],

  // ─── 13D: Weighted Graphs ──────────────────────────────────────────
  "y12g-ch13-13d-weighted": [
    {
      title: "Weighted Graphs and Networks",
      explanation:
        "A WEIGHTED GRAPH attaches a NUMBER (weight) to each edge. The number can represent:\n  • Distance between two locations (km, m)\n  • Time taken to travel (minutes, hours)\n  • Cost of using a connection (dollars)\n  • Capacity of a pipe or cable (litres/sec, vehicles/hour)\n\nWEIGHTS turn pure graph problems into REAL-WORLD MODELS.\n\nKEY PROBLEMS that weights enable:\n  • SHORTEST PATH: minimum total weight from a start to an end vertex.\n  • MINIMUM SPANNING TREE: connect all vertices using least total weight.\n  • MAXIMUM FLOW: most that can move from a source to a sink under capacity limits.\n  • PROJECT SCHEDULING: longest path through a time-weighted activity network.\n\nTYPICAL CONVENTIONS:\n  • Weights are written next to each edge.\n  • The TOTAL weight of a path/tree/route is the sum of its edge weights.\n  • Some problems require minimum, others require maximum — read carefully.",
      keyPoints: [
        "Weights model real quantities (distance, cost, time)",
        "Sum of weights gives total of a path or tree",
        "Different problems ask for minimum or maximum",
      ],
      workedExamples: [
        {
          problem: "Network with edges AB=4, BC=2, AC=5, CD=3. Find the total weight of path A → B → C → D.",
          steps: [
            "AB = 4",
            "BC = 2",
            "CD = 3",
            "Total = 4 + 2 + 3 = 9",
          ],
          answer: "Total weight 9.",
        },
      ],
      tips: [
        "Always sum weights, not edges — they are different",
        "Read the question: is shorter, cheaper, or faster better?",
      ],
      definitions: [
        { term: "Weighted graph", meaning: "Graph where each edge has a numerical weight." },
        { term: "Total weight", meaning: "Sum of weights along a chosen set of edges." },
      ],
      examQuestion: {
        problem: "A weighted graph has edges PQ=6, QR=4, PR=11, RS=2. What is the shortest route from P to S?",
        solution: [
          "Option 1: P→Q→R→S = 6+4+2 = 12",
          "Option 2: P→R→S = 11+2 = 13",
          "Shortest: Option 1",
        ],
        answer: "Shortest route P→Q→R→S, weight 12.",
        marks: 2,
      },
      commonErrors: [
        "Counting edges instead of summing weights",
        "Picking the visually shortest line rather than the lowest-weight one",
      ],
      summary: [
        "Weights add real meaning to a graph",
        "Path total = sum of edge weights",
        "Many algorithms exist on weighted graphs",
      ],
      quiz: [
        {
          question: "A weight on an edge usually represents:",
          options: ["Vertex degree", "Distance, time or cost", "The label", "A probability"],
          correctAnswer: 1,
          explanation: "Weights model a real quantity along the edge.",
        },
        {
          question: "Total weight of a path is:",
          options: ["Number of edges", "Largest weight", "Sum of edge weights", "Average weight"],
          correctAnswer: 2,
          explanation: "Add all weights along the chosen edges.",
        },
        {
          question: "Which problem maximises rather than minimises?",
          options: ["Shortest path", "Minimum spanning tree", "Maximum flow", "Cheapest route"],
          correctAnswer: 2,
          explanation: "Max flow seeks the largest feasible flow.",
        },
      ],
    },
  ],

  // ─── 13E: Dijkstra's Algorithm ─────────────────────────────────────
  "y12g-ch13-13e-dijkstra": [
    {
      title: "Dijkstra's Algorithm — Shortest Paths",
      explanation:
        "DIJKSTRA'S ALGORITHM finds the shortest path from a chosen START vertex to every other vertex in a weighted graph with NON-NEGATIVE weights.\n\nIDEA:\n  • Maintain a TENTATIVE distance for every vertex (starting at ∞ except the start, which is 0).\n  • At each step, choose the UNVISITED vertex with the smallest tentative distance and PERMANENTLY label it.\n  • Use that vertex to UPDATE distances to its neighbours: new distance = (current label) + (edge weight). Keep the smaller value.\n  • Repeat until all vertices are labelled.\n\nSTEP-BY-STEP TEMPLATE:\n  1. Label start as 0; all others ∞.\n  2. Mark start as permanent.\n  3. From the latest permanent vertex, update each neighbour: new = label + weight. Replace if smaller.\n  4. Choose the smallest unvisited tentative label; make it permanent.\n  5. Repeat steps 3–4.\n  6. Read off the shortest distance from the labels; trace back along the updates to recover the path.\n\nThe algorithm GUARANTEES the shortest path provided weights are non-negative.",
      keyPoints: [
        "Works on non-negative weighted graphs",
        "Permanent labels never change once set",
        "Update each neighbour with current label + edge weight",
        "Trace backwards along updates to recover the path",
      ],
      workedExamples: [
        {
          problem: "Find the shortest path A → D in the network with edges AB=2, AC=5, BC=1, BD=7, CD=3.",
          steps: [
            "Initial: A=0, B=∞, C=∞, D=∞",
            "Make A permanent. Update B = 0+2 = 2, C = 0+5 = 5",
            "Smallest unvisited: B = 2. Make permanent. Update C = min(5, 2+1)=3, D = 2+7 = 9",
            "Smallest unvisited: C = 3. Make permanent. Update D = min(9, 3+3) = 6",
            "Smallest unvisited: D = 6. Done",
            "Shortest distance A → D = 6 via A → B → C → D",
          ],
          answer: "Shortest distance 6, route A → B → C → D.",
        },
      ],
      tips: [
        "Re-write the label table after each step — it is examiner-friendly",
        "Underline or box permanent labels",
        "If two distances tie, either choice works",
      ],
      definitions: [
        { term: "Tentative label", meaning: "Current best distance found, may still decrease." },
        { term: "Permanent label", meaning: "Confirmed shortest distance from start." },
      ],
      formulas: [
        { name: "Update rule", formula: "new = label(u) + weight(u, v)" },
      ],
      examQuestion: {
        problem:
          "Network: AB=3, AC=1, BC=1, BD=4, CD=5. Find the shortest distance from A to D.",
        solution: [
          "A=0; update B=3, C=1",
          "C permanent (1); update B=min(3,1+1)=2, D=1+5=6",
          "B permanent (2); update D=min(6,2+4)=6",
          "D permanent at 6",
        ],
        answer: "Shortest distance = 6 via A→C→D or A→C→B→D (tied).",
        marks: 3,
      },
      commonErrors: [
        "Updating from a non-permanent vertex",
        "Forgetting to retain the smaller label after comparison",
        "Stopping early before all relevant vertices are processed",
      ],
      summary: [
        "Maintain tentative labels, lock in smallest each step",
        "Update neighbours using current permanent label",
        "Trace back to recover the route",
      ],
      quiz: [
        {
          question: "Dijkstra requires edge weights to be:",
          options: ["Integers", "Non-negative", "All equal", "Symmetric"],
          correctAnswer: 1,
          explanation: "Negative weights can break the greedy choice.",
        },
        {
          question: "When updating neighbour v from u, new label is:",
          options: ["weight(u,v)", "label(u) + weight(u,v)", "label(v) − weight(u,v)", "min(u, v)"],
          correctAnswer: 1,
          explanation: "Add the weight to the latest permanent label.",
        },
        {
          question: "Permanent labels:",
          options: ["May decrease later", "Are final shortest distances", "Are always 0", "Equal degree"],
          correctAnswer: 1,
          explanation: "Once permanent, they record the true shortest distance.",
        },
      ],
    },
  ],

  // ─── 13F: Trees and Minimum Spanning Trees ─────────────────────────
  "y12g-ch13-13f-trees-mst": [
    {
      title: "Trees and Minimum Connector Problems",
      explanation:
        "A TREE is a connected graph with NO cycles. For n vertices a tree has exactly (n − 1) edges.\n\nA SPANNING TREE of a connected graph G is a subgraph that:\n  • Includes EVERY vertex of G,\n  • Is itself a tree (connected, no cycles),\n  • Contains exactly (n − 1) edges.\n\nA MINIMUM SPANNING TREE (MST) is the spanning tree with the SMALLEST total weight. MSTs answer minimum-connector problems such as 'lay cable to every town as cheaply as possible'.\n\nTWO ALGORITHMS BUILD AN MST:\n\n1. PRIM'S ALGORITHM (grow from a vertex):\n   • Pick any starting vertex.\n   • Repeatedly add the SHORTEST edge that joins an UNCONNECTED vertex to the growing tree.\n   • Stop when all vertices are included.\n\n2. KRUSKAL'S ALGORITHM (sort the edges):\n   • List all edges in ASCENDING weight.\n   • Add each edge in order, SKIPPING any edge that would create a cycle.\n   • Stop when (n − 1) edges have been added.\n\nBoth algorithms produce an MST. Prim's is convenient when starting from a fixed vertex; Kruskal's is convenient when an edge list is already sorted.",
      keyPoints: [
        "Tree: connected, no cycles, n−1 edges",
        "Spanning tree includes every vertex of G",
        "MST minimises total weight of a spanning tree",
        "Prim grows from a vertex; Kruskal sorts edges",
        "Skip cycle-forming edges in Kruskal",
      ],
      workedExamples: [
        {
          problem: "Vertices A, B, C, D with edges AB=1, AC=4, BC=2, BD=3, CD=5. Find the MST.",
          steps: [
            "Sort edges: AB=1, BC=2, BD=3, AC=4, CD=5",
            "Take AB (1) — tree {A,B}",
            "Take BC (2) — tree {A,B,C}, no cycle",
            "Take BD (3) — tree {A,B,C,D}, no cycle",
            "Have n−1 = 3 edges, stop",
            "Total = 1 + 2 + 3 = 6",
          ],
          answer: "MST edges AB, BC, BD; total weight 6.",
        },
      ],
      tips: [
        "Always check the cycle test before adding an edge in Kruskal",
        "Stop once n−1 edges are chosen",
        "Total weight is the answer most exams want",
      ],
      definitions: [
        { term: "Tree", meaning: "Connected graph with no cycles." },
        { term: "Spanning tree", meaning: "Subgraph that is a tree containing every vertex." },
        { term: "Minimum spanning tree", meaning: "Spanning tree of least total weight." },
      ],
      formulas: [
        { name: "Edges in a tree", formula: "E = V − 1" },
      ],
      examQuestion: {
        problem:
          "Five towns A, B, C, D, E need to be connected by cable. Edge weights (km): AB=2, AC=3, BC=4, BD=5, CE=6, DE=1. Find the minimum total cable length.",
        solution: [
          "Sort: DE=1, AB=2, AC=3, BC=4, BD=5, CE=6",
          "Take DE (1)",
          "Take AB (2)",
          "Take AC (3)",
          "Skip BC (4): would form cycle A-B-C",
          "Take BD (5): connects D-E component to A-B-C",
          "Have 4 edges = n−1 ✓",
          "Total = 1 + 2 + 3 + 5 = 11 km",
        ],
        answer: "Minimum cable = 11 km.",
        marks: 3,
      },
      commonErrors: [
        "Adding an edge that creates a cycle",
        "Not stopping at n−1 edges",
        "Confusing MST with shortest path",
      ],
      summary: [
        "MST connects all vertices with least total weight",
        "Use Prim or Kruskal",
        "Result has n − 1 edges",
      ],
      quiz: [
        {
          question: "A spanning tree of a graph with 8 vertices has how many edges?",
          options: ["7", "8", "9", "16"],
          correctAnswer: 0,
          explanation: "n − 1 = 7.",
        },
        {
          question: "In Kruskal's algorithm we skip an edge if it:",
          options: ["Has weight 0", "Forms a cycle", "Repeats a vertex", "Is the largest"],
          correctAnswer: 1,
          explanation: "Adding it would create a cycle, breaking the tree property.",
        },
        {
          question: "Prim's algorithm starts by:",
          options: ["Sorting all edges", "Picking any vertex", "Removing largest edge", "Choosing a cycle"],
          correctAnswer: 1,
          explanation: "Prim grows from a chosen starting vertex.",
        },
      ],
    },
  ],

  // ─── 13 Review ─────────────────────────────────────────────────────
  "y12g-ch13-review": [
    {
      title: "Chapter 13 Review — Graphs, Networks and Trees",
      explanation:
        "This review consolidates Chapter 13.\n\nCORE IDEAS\n  • Graphs have vertices and edges; networks have weights.\n  • Degree and the handshake lemma describe local structure.\n  • Adjacency matrices encode the graph and powers count walks.\n  • Euler traversals use every edge; Hamilton traversals visit every vertex.\n  • Dijkstra finds shortest paths; Prim and Kruskal build minimum spanning trees.\n\nCHECKLIST\n  • Can you compute degrees and use the handshake lemma?\n  • Can you build an adjacency matrix and read its entries?\n  • Can you decide whether an Euler path or circuit exists from degrees?\n  • Can you run Dijkstra cleanly with a label table?\n  • Can you build an MST using Prim or Kruskal and quote the total weight?",
      keyPoints: [
        "Master vocabulary first — it underpins every question",
        "Use a labelled table for Dijkstra",
        "Always state the total weight for MST answers",
        "Interpret your numerical answer in context",
      ],
      workedExamples: [
        {
          problem: "Network: AB=2, AC=4, BC=1, BD=7, CD=3, DE=2, CE=5. Find shortest path A→E and the MST total weight.",
          steps: [
            "Dijkstra from A: A=0, B=2, C=3 (via B), D=6, E=8 (via D)",
            "Shortest A→E = 8 via A-B-C-D-E",
            "MST: sort BC=1, AB=2, DE=2, CD=3, AC=4, CE=5, BD=7",
            "Take BC, AB, DE; need to connect {A,B,C} to {D,E}: take CD (3)",
            "Total = 1 + 2 + 2 + 3 = 8",
          ],
          answer: "Shortest A→E = 8; MST total = 8.",
        },
      ],
      tips: [
        "Write algorithm tables clearly — examiners award method marks",
        "Always check: tree has n − 1 edges",
      ],
      summary: [
        "Vocabulary, matrices, traversals, shortest path, MST",
        "Pick the right algorithm for the question",
        "Communicate answers in context",
      ],
      quiz: [
        {
          question: "Best tool for shortest path with non-negative weights?",
          options: ["Prim", "Kruskal", "Dijkstra", "Euler"],
          correctAnswer: 2,
          explanation: "Dijkstra is designed for shortest paths.",
        },
        {
          question: "Best tool for connecting all towns with least cable?",
          options: ["Dijkstra", "Hamilton", "MST (Prim/Kruskal)", "Euler"],
          correctAnswer: 2,
          explanation: "Minimum spanning tree problem.",
        },
        {
          question: "An Euler circuit requires:",
          options: ["All odd degrees", "All even degrees", "Two odd degrees", "Tree structure"],
          correctAnswer: 1,
          explanation: "Every vertex must have even degree.",
        },
      ],
    },
  ],
};
