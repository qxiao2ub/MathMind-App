import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 10: Matrices (VCE Unit 4)

export const year12GeneralCh10Lessons: TopicLessonsMap = {
  // ─── 10A: What is a Matrix? ────────────────────────────────────────
  "y12g-ch10-10a-what-is-matrix": [
    {
      title: "What is a Matrix?",
      explanation:
        "A MATRIX is a rectangular array of numbers arranged in ROWS and COLUMNS. Matrices are written using square brackets, e.g.\n  A = [ 2  −1 ;  0  3 ;  4  5 ].\n\nORDER (or DIMENSION) of a matrix is written 'rows × columns' (row count first). The matrix above is a 3×2 matrix.\n\nELEMENT NOTATION: a_ij denotes the element in row i, column j (1-indexed). For the matrix above, a_31 = 4 (row 3, column 1).\n\nSPECIAL MATRIX TYPES:\n  • ROW matrix: a single row, order 1×n.\n  • COLUMN matrix: a single column, order n×1.\n  • SQUARE matrix: same number of rows and columns (n×n).\n  • DIAGONAL matrix: square with non-zero entries only on the leading diagonal.\n  • IDENTITY matrix I: square with 1s on the diagonal and 0s elsewhere; A·I = I·A = A.\n  • ZERO matrix O: every entry is 0; A + O = A.\n\nMatrices ARE EQUAL only when they have the same order AND identical corresponding elements.\n\nCAS — TI-Nspire: Calculator → templates → matrix template (m × n). Or use the Math Box.\nCAS — ClassPad: Keyboard → 2D → Matrix; specify rows and columns then enter elements.",
      keyPoints: [
        "Order is rows × columns (in that order)",
        "a_ij = element in row i, column j",
        "Identity I behaves like '1' under multiplication",
        "Two matrices equal ⇔ same order and same elements",
      ],
      workedExamples: [
        {
          problem: "Given A = [ 3  1  −2 ;  0  4  5 ], state the order, a_12 and a_23.",
          steps: [
            "Rows: 2, Columns: 3 → order 2 × 3",
            "a_12 = row 1, column 2 = 1",
            "a_23 = row 2, column 3 = 5",
          ],
          answer: "Order 2×3; a_12 = 1; a_23 = 5.",
        },
        {
          problem: "Write the 3×3 identity matrix I_3.",
          steps: [
            "Identity has 1s on the leading diagonal and 0 elsewhere",
            "I_3 = [ 1 0 0 ; 0 1 0 ; 0 0 1 ]",
          ],
          answer: "I_3 = [ 1 0 0 ; 0 1 0 ; 0 0 1 ].",
        },
      ],
      tips: [
        "Always state order ROWS × COLUMNS (never the reverse)",
        "Subscripts are i (row) then j (column)",
        "The identity exists only for SQUARE matrices",
      ],
      definitions: [
        { term: "Matrix", meaning: "Rectangular array of numbers in rows and columns." },
        { term: "Order", meaning: "Rows × columns of a matrix." },
        { term: "Identity matrix", meaning: "Square matrix with 1s on diagonal, 0 elsewhere; multiplicative identity." },
        { term: "Zero matrix", meaning: "Matrix with every element zero." },
      ],
      formulas: [
        { name: "Identity property", formula: "A·I = I·A = A" },
        { name: "Zero property", formula: "A + O = A" },
      ],
      examQuestion: {
        problem: "B is a 4×2 matrix. State the number of elements and the meaning of b_31.",
        solution: [
          "Elements = rows × columns = 4 × 2 = 8",
          "b_31 is the entry in row 3, column 1",
        ],
        answer: "8 elements; b_31 is the row-3 column-1 entry.",
        marks: 2,
      },
      commonErrors: [
        "Writing order as columns × rows",
        "Indexing as (column, row) instead of (row, column)",
        "Treating non-square matrix as having an identity",
      ],
      summary: [
        "Matrix = rows × columns array",
        "a_ij is row i, column j",
        "Identity and zero matrices are the multiplicative and additive identities",
      ],
      practice: [
        { question: "Order of [ 1 2 ; 3 4 ; 5 6 ]?", answer: "3 × 2" },
        { question: "Number of elements in a 5×3 matrix?", answer: "15" },
      ],
      quiz: [
        {
          question: "The order of the matrix [ 1 2 3 ; 4 5 6 ] is:",
          options: ["3 × 2", "2 × 3", "6 × 1", "1 × 6"],
          correctAnswer: 1,
          explanation: "Two rows, three columns.",
        },
        {
          question: "The 2×2 identity matrix is:",
          options: ["[ 0 0 ; 0 0 ]", "[ 1 1 ; 1 1 ]", "[ 1 0 ; 0 1 ]", "[ 2 0 ; 0 2 ]"],
          correctAnswer: 2,
          explanation: "Diagonal of 1s, zeros elsewhere.",
        },
      ],
    },
  ],

  // ─── 10B: Representing Information Using Matrices ──────────────────
  "y12g-ch10-10b-representing-info": [
    {
      title: "Representing Information Using Matrices",
      explanation:
        "Matrices are highly efficient for storing tabular data. Each ROW typically represents a category (a person, a product, a location) and each COLUMN represents an attribute (price, quantity, time period).\n\nEXAMPLE — Sales table:\n  Product    Mon  Tue  Wed\n  Apple       12   15   10\n  Banana       8    9   11\n  Cherry      14   12   13\nis stored as the 3×3 matrix\n  S = [ 12 15 10 ; 8 9 11 ; 14 12 13 ].\n\nROW & COLUMN VECTORS:\n  • Row matrix [a b c] is useful for prices, weights, or multipliers.\n  • Column matrix [a; b; c] is useful for quantities or states.\n\nIMPORTANT INTERPRETATION: when reading a question, FIRST identify what the rows and columns represent — this drives every later operation. Mislabelling rows and columns is the most common matrix error in VCE exams.\n\nCONSISTENCY RULE: when constructing a matrix from a worded scenario, list the same categories in the same order across all related matrices so that addition, subtraction and multiplication are valid.",
      keyPoints: [
        "Rows = categories; columns = attributes (or vice versa, but choose and stick)",
        "Row vectors carry multipliers (price, weighting)",
        "Column vectors carry quantities (state vector)",
        "Always label rows and columns to avoid order errors",
      ],
      workedExamples: [
        {
          problem:
            "A shop sells 3 sandwiches at $6, $7 and $8 and sells 10, 5 and 8 of each in one day. Construct a price row matrix P and a quantity column matrix Q. What product gives total revenue?",
          steps: [
            "P = [ 6 7 8 ] (1×3)",
            "Q = [ 10 ; 5 ; 8 ] (3×1)",
            "Total revenue = P × Q = 6(10) + 7(5) + 8(8) = 60 + 35 + 64 = 159",
          ],
          answer: "P × Q = $159.",
        },
      ],
      tips: [
        "Order matters: P (1×3) × Q (3×1) gives a 1×1 = scalar",
        "If the order is reversed: Q (3×1) × P (1×3) gives a 3×3 outer product (different meaning)",
        "Always write the labels next to rows and columns when setting up",
      ],
      definitions: [
        { term: "Row matrix", meaning: "1 × n matrix; one row of values." },
        { term: "Column matrix", meaning: "n × 1 matrix; one column of values." },
        { term: "State vector", meaning: "Column matrix recording the current value/quantity in each category." },
      ],
      formulas: [
        { name: "Revenue formula", formula: "R = P × Q where P is row prices, Q is column quantities" },
      ],
      examQuestion: {
        problem: "A factory produces 3 products with weekly outputs of 200, 150 and 100, sold at $5, $7 and $9 respectively. Use matrices to compute total weekly revenue.",
        solution: [
          "P = [ 5 7 9 ] (1×3); Q = [ 200 ; 150 ; 100 ] (3×1)",
          "P × Q = 5(200) + 7(150) + 9(100) = 1000 + 1050 + 900 = 2950",
        ],
        answer: "Total weekly revenue = $2950.",
        marks: 3,
      },
      commonErrors: [
        "Mixing the order of rows or columns between linked matrices",
        "Forgetting to label rows/columns and computing the wrong product",
      ],
      summary: [
        "Matrices store tables compactly",
        "Row × column inner product gives totals",
        "Always label rows and columns",
      ],
      practice: [
        { question: "Three items at $4, $5, $6; quantities 2, 3, 4. Total cost?", answer: "[4 5 6] × [2;3;4] = 8+15+24 = $47" },
      ],
      quiz: [
        {
          question: "Which product gives a single (scalar) total cost?",
          options: ["3×1 × 1×3", "1×3 × 3×1", "3×3 × 1×3", "2×2 × 1×2"],
          correctAnswer: 1,
          explanation: "1×3 times 3×1 yields a 1×1 result.",
        },
      ],
    },
  ],

  // ─── 10C: Matrix Arithmetic ────────────────────────────────────────
  "y12g-ch10-10c-arithmetic": [
    {
      title: "Matrix Arithmetic — Addition, Subtraction, Scalar Multiplication",
      explanation:
        "Two matrices can be ADDED or SUBTRACTED only if they have the SAME ORDER. The result has the same order, with corresponding elements added/subtracted:\n  (A + B)_ij = a_ij + b_ij,    (A − B)_ij = a_ij − b_ij.\n\nSCALAR MULTIPLICATION: multiplying a matrix by a number k multiplies EVERY element by k:\n  (k·A)_ij = k · a_ij.\n\nPROPERTIES (matching ordinary algebra where shapes allow):\n  • Commutative: A + B = B + A.\n  • Associative: (A + B) + C = A + (B + C).\n  • Distributive: k(A + B) = kA + kB and (k + m)A = kA + mA.\n\nCONTEXT MEANING:\n  • Adding two sales matrices for two weeks gives the two-week total.\n  • Subtracting opening from closing inventory gives change in stock.\n  • Multiplying by 1.10 inflates every price by 10%.",
      keyPoints: [
        "Add/subtract only same-order matrices; element-wise",
        "Scalar multiplies every entry",
        "Commutative and associative under addition",
        "Distributive across scalar and matrix",
      ],
      workedExamples: [
        {
          problem: "A = [ 2 1 ; 0 3 ], B = [ −1 4 ; 2 1 ]. Find A + B, A − B and 3A.",
          steps: [
            "A + B = [ 2+(−1)  1+4 ; 0+2  3+1 ] = [ 1 5 ; 2 4 ]",
            "A − B = [ 2−(−1)  1−4 ; 0−2  3−1 ] = [ 3 −3 ; −2 2 ]",
            "3A = [ 6 3 ; 0 9 ]",
          ],
          answer: "A+B = [1 5; 2 4];  A−B = [3 −3; −2 2];  3A = [6 3; 0 9].",
        },
      ],
      tips: [
        "Check orders FIRST: if they differ, addition is undefined",
        "Scalar always distributes over every entry",
        "Use CAS for large matrices to avoid arithmetic slips",
      ],
      definitions: [
        { term: "Conformable for addition", meaning: "Two matrices having the same order so they can be added/subtracted." },
        { term: "Scalar", meaning: "An ordinary number used to multiply every element of a matrix." },
      ],
      formulas: [
        { name: "Addition", formula: "(A + B)_ij = a_ij + b_ij" },
        { name: "Scalar mult", formula: "(kA)_ij = k·a_ij" },
      ],
      examQuestion: {
        problem: "Given A = [3 −2; 1 5] and B = [0 4; −1 2], find 2A − B.",
        solution: [
          "2A = [6 −4; 2 10]",
          "2A − B = [6−0  −4−4 ; 2−(−1)  10−2] = [6 −8 ; 3 8]",
        ],
        answer: "2A − B = [ 6 −8 ; 3 8 ].",
        marks: 2,
      },
      commonErrors: [
        "Trying to add matrices of different orders",
        "Multiplying only the first row/column by the scalar",
      ],
      summary: [
        "Add/subtract element-wise (same order required)",
        "Scalar multiplies every entry",
        "Standard algebraic properties hold",
      ],
      practice: [
        { question: "[1 2] + [3 4] = ?", answer: "[4 6]" },
        { question: "5 × [2 −1; 0 4] = ?", answer: "[10 −5; 0 20]" },
      ],
      quiz: [
        {
          question: "Which is undefined?",
          options: ["[1 2] + [3 4]", "[1;2] + [3;4]", "[1 2] + [3;4]", "3 × [1 2]"],
          correctAnswer: 2,
          explanation: "1×2 + 2×1 — orders differ.",
        },
        {
          question: "If A is 2×3, the order of −2A is:",
          options: ["3×2", "2×3", "1×6", "6×1"],
          correctAnswer: 1,
          explanation: "Scalar multiplication preserves order.",
        },
      ],
    },
  ],

  // ─── 10D: Matrix Multiplication ────────────────────────────────────
  "y12g-ch10-10d-multiplication": [
    {
      title: "Matrix Multiplication",
      explanation:
        "Matrix multiplication is more subtle than addition. The product A·B is defined ONLY when the number of COLUMNS of A equals the number of ROWS of B. If A is m×n and B is n×p, then A·B is m×p.\n\n  A (m×n) × B (n×p) = AB (m×p)\n\nCOMPUTING THE ENTRY (i,j) of AB:\n  (AB)_ij = sum over k of a_ik · b_kj\n           = (row i of A) · (column j of B)  — an inner product.\n\nKEY PROPERTIES:\n  • NOT commutative: in general AB ≠ BA. (Often one is defined and the other is not.)\n  • Associative: (AB)C = A(BC).\n  • Distributive: A(B + C) = AB + AC.\n  • Identity: A·I = I·A = A (when shapes allow).\n  • Zero: A·O = O.\n\nCONTEXT EXAMPLE — Cost matrix:\n  Quantity matrix Q (1×n) × Price matrix P (n×1) = total cost (1×1).\nReverse the order and you get an n×n outer product, which is a different object entirely.",
      keyPoints: [
        "Inner dimensions must match: (m×n)(n×p) = m×p",
        "Entry (i,j) of AB is row i of A dotted with column j of B",
        "AB ≠ BA in general",
        "Identity I and zero O behave like 1 and 0 under multiplication",
      ],
      workedExamples: [
        {
          problem: "A = [ 1 2 ; 3 4 ], B = [ 5 6 ; 7 8 ]. Find AB.",
          steps: [
            "(AB)_11 = 1·5 + 2·7 = 5 + 14 = 19",
            "(AB)_12 = 1·6 + 2·8 = 6 + 16 = 22",
            "(AB)_21 = 3·5 + 4·7 = 15 + 28 = 43",
            "(AB)_22 = 3·6 + 4·8 = 18 + 32 = 50",
          ],
          answer: "AB = [ 19 22 ; 43 50 ].",
        },
        {
          problem: "Show that AB ≠ BA for A = [ 1 0 ; 0 0 ] and B = [ 0 1 ; 0 0 ].",
          steps: [
            "AB = [ 1·0+0·0  1·1+0·0 ; 0·0+0·0  0·1+0·0 ] = [ 0 1 ; 0 0 ]",
            "BA = [ 0·1+1·0  0·0+1·0 ; 0·1+0·0  0·0+0·0 ] = [ 0 0 ; 0 0 ]",
            "AB ≠ BA",
          ],
          answer: "AB = [0 1; 0 0]; BA = O.",
        },
      ],
      tips: [
        "Write down the orders before multiplying",
        "Cover everything except row i of A and column j of B when computing entry (i,j)",
        "Use CAS to verify hand-calculated results",
      ],
      definitions: [
        { term: "Conformable for multiplication", meaning: "Inner dimensions equal: A is m×n and B is n×p." },
        { term: "Outer product", meaning: "n×1 times 1×p = n×p (every element is a product of one entry from each)." },
      ],
      formulas: [
        { name: "Matrix product entry", formula: "(AB)_ij = Σ_k a_ik·b_kj" },
        { name: "Order rule", formula: "(m×n)(n×p) = m×p" },
      ],
      examQuestion: {
        problem: "Given A = [2 1; −1 3], compute A² (= A·A).",
        solution: [
          "A·A_11 = 2·2 + 1·(−1) = 4 − 1 = 3",
          "A·A_12 = 2·1 + 1·3 = 5",
          "A·A_21 = −1·2 + 3·(−1) = −5",
          "A·A_22 = −1·1 + 3·3 = 8",
        ],
        answer: "A² = [ 3 5 ; −5 8 ].",
        marks: 2,
      },
      commonErrors: [
        "Multiplying element-wise (Hadamard product) instead of doing the row × column inner product",
        "Reversing the order: BA when AB is required",
        "Trying to multiply when inner dimensions don't match",
      ],
      summary: [
        "AB defined ⇔ cols(A) = rows(B)",
        "AB has order rows(A) × cols(B)",
        "Order matters; multiplication is non-commutative",
      ],
      practice: [
        { question: "Can a 3×4 multiply a 4×2? Result order?", answer: "Yes; 3×2" },
        { question: "Can a 2×3 multiply a 4×2? ", answer: "No (inner dims 3 ≠ 4)" },
      ],
      quiz: [
        {
          question: "The product of a 2×3 and a 3×4 matrix has order:",
          options: ["3×3", "2×4", "4×2", "Undefined"],
          correctAnswer: 1,
          explanation: "(2×3)(3×4) → 2×4.",
        },
        {
          question: "Which is generally TRUE for matrices?",
          options: ["AB = BA", "A(BC) = (AB)C", "A + B = AB", "AB always defined"],
          correctAnswer: 1,
          explanation: "Multiplication is associative but not commutative.",
        },
      ],
    },
  ],

  // ─── 10E: Inverse, Determinant, Equations ──────────────────────────
  "y12g-ch10-10e-inverse-determinant": [
    {
      title: "Determinant, Inverse and Matrix Equations",
      explanation:
        "DETERMINANT (2×2 only is required for VCAA):\n  For A = [ a b ; c d ], det(A) = ad − bc.\n\nA matrix is INVERTIBLE (or non-singular) iff det(A) ≠ 0. If det(A) = 0, A is SINGULAR and has no inverse.\n\nINVERSE of a 2×2 matrix:\n  A^(−1) = (1/det(A)) · [ d −b ; −c a ].\n\nProperties:\n  • A·A^(−1) = A^(−1)·A = I.\n  • (AB)^(−1) = B^(−1)·A^(−1) (note reversed order).\n  • (A^(−1))^(−1) = A.\n\nSOLVING MATRIX EQUATIONS:\n  • A·X = B → X = A^(−1)·B (multiply LEFT by A^(−1)).\n  • X·A = B → X = B·A^(−1) (multiply RIGHT by A^(−1)).\n  Order is critical because matrix multiplication is non-commutative.\n\nFor 3×3 and larger: use CAS (det() and ^(−1) operators).",
      keyPoints: [
        "det(2×2) = ad − bc",
        "Inverse exists iff determinant ≠ 0",
        "A^(−1) = (1/det) · [d −b; −c a]",
        "A·X = B → X = A^(−1)·B (left-multiply)",
        "X·A = B → X = B·A^(−1) (right-multiply)",
      ],
      workedExamples: [
        {
          problem: "Find det(A) and A^(−1) for A = [ 4 3 ; 2 1 ].",
          steps: [
            "det(A) = 4·1 − 3·2 = 4 − 6 = −2",
            "A^(−1) = (1/−2) · [ 1 −3 ; −2 4 ] = [ −0.5 1.5 ; 1 −2 ]",
          ],
          answer: "det(A) = −2; A^(−1) = [ −0.5 1.5 ; 1 −2 ].",
        },
        {
          problem: "Solve A·X = B where A = [ 1 2 ; 3 4 ] and B = [ 5 ; 11 ].",
          steps: [
            "det(A) = 1·4 − 2·3 = −2",
            "A^(−1) = (1/−2)·[ 4 −2 ; −3 1 ] = [ −2 1 ; 1.5 −0.5 ]",
            "X = A^(−1)·B = [ −2(5) + 1(11) ; 1.5(5) + (−0.5)(11) ] = [ 1 ; 2 ]",
          ],
          answer: "X = [ 1 ; 2 ].",
        },
      ],
      tips: [
        "Check det ≠ 0 BEFORE computing inverse",
        "Always verify A·A^(−1) = I when working by hand",
        "For X·A = B, RIGHT-multiply by A^(−1)",
      ],
      definitions: [
        { term: "Singular matrix", meaning: "Square matrix with determinant zero — no inverse." },
        { term: "Determinant", meaning: "Scalar value det(A); for 2×2: ad − bc." },
        { term: "Inverse matrix", meaning: "A^(−1) such that A·A^(−1) = I." },
      ],
      formulas: [
        { name: "Determinant 2×2", formula: "det([a b; c d]) = ad − bc" },
        { name: "Inverse 2×2", formula: "A^(−1) = (1/det)·[d −b; −c a]" },
        { name: "Solve A·X=B", formula: "X = A^(−1)·B" },
      ],
      examQuestion: {
        problem: "Use matrix methods to solve the system 2x + y = 7,  x + 3y = 11.",
        solution: [
          "Write A·X = B with A = [2 1; 1 3], X = [x; y], B = [7; 11]",
          "det(A) = 2·3 − 1·1 = 5",
          "A^(−1) = (1/5)·[3 −1; −1 2]",
          "X = A^(−1)·B = (1/5)·[3(7) + (−1)(11); −1(7) + 2(11)] = (1/5)·[10; 15] = [2; 3]",
        ],
        answer: "x = 2, y = 3.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting to reverse signs of b and c in the inverse formula",
        "Multiplying B on the wrong side of A^(−1)",
        "Not checking that det ≠ 0",
      ],
      summary: [
        "det = ad − bc; non-zero ⇒ invertible",
        "Inverse 'swap diagonal, negate off-diagonal, divide by det'",
        "Use A^(−1) on the correct side to solve matrix equations",
      ],
      practice: [
        { question: "det([5 2; 3 1])?", answer: "5·1 − 2·3 = −1" },
        { question: "Inverse of [2 0; 0 4]?", answer: "[0.5 0; 0 0.25]" },
      ],
      quiz: [
        {
          question: "det([6 4; 3 2]) =",
          options: ["0", "12", "24", "6"],
          correctAnswer: 0,
          explanation: "6·2 − 4·3 = 0 → singular.",
        },
        {
          question: "A·X = B is solved by:",
          options: ["X = B·A^(−1)", "X = A^(−1)·B", "X = (A·B)^(−1)", "X = det(A)·B"],
          correctAnswer: 1,
          explanation: "Left-multiply by A^(−1).",
        },
      ],
    },
  ],

  // ─── 10F: Binary, Permutation, Communication Matrices ──────────────
  "y12g-ch10-10f-binary-permutation-comm": [
    {
      title: "Binary, Permutation and Communication Matrices",
      explanation:
        "A BINARY MATRIX has every entry equal to 0 or 1. Binary matrices encode YES/NO information: connection / no connection, present / absent, link / no link.\n\nPERMUTATION MATRIX: a square binary matrix with exactly ONE 1 in each row and ONE 1 in each column. When P multiplies a column vector v, it permutes (rearranges) the entries of v according to the position of the 1s.\n\nUseful identities:\n  • P^T · P = I (permutation matrices are orthogonal).\n  • P^k applied repeatedly gives a cyclic permutation; eventually P^k = I for some k.\n\nCOMMUNICATION MATRIX C: square binary matrix where C_ij = 1 means 'i can directly send a message to j' and 0 otherwise. Diagonal is usually 0 (no self-loops).\n\nPOWER OF C:\n  • (C²)_ij counts the NUMBER OF 2-STEP PATHWAYS from i to j.\n  • (C^n)_ij counts the n-step pathways.\n\nTOTAL COMMUNICATION MATRIX:\n  T = C + C² + C³ + …  (up to required path length)\nA non-zero T_ij means there is some pathway (of any length up to that limit) from i to j.",
      keyPoints: [
        "Binary matrix: entries 0 or 1",
        "Permutation matrix permutes the entries of any vector it multiplies",
        "C^n_ij counts the number of length-n communication paths",
        "Sum of powers T = C + C² + ... captures total reachability",
      ],
      workedExamples: [
        {
          problem: "A 3-person network has C = [ 0 1 0 ; 0 0 1 ; 1 0 0 ]. List all 1-step and all 2-step paths from person 1.",
          steps: [
            "1-step from 1: row 1 = [0 1 0] → 1→2",
            "C² = C·C; compute row 1: (0·0+1·0+0·1 ;  0·1+1·0+0·0 ;  0·0+1·1+0·0) = [0 0 1]",
            "2-step from 1: 1→3 (via 2)",
          ],
          answer: "1-step: 1→2;  2-step: 1→3.",
        },
      ],
      tips: [
        "Always state diagonal = 0 unless self-loops are explicitly allowed",
        "Compute C² rather than C·C twice",
        "Larger entries in C^n correspond to multiple distinct pathways",
      ],
      definitions: [
        { term: "Binary matrix", meaning: "Matrix with all entries 0 or 1." },
        { term: "Permutation matrix", meaning: "Square binary matrix with exactly one 1 in each row and column." },
        { term: "Communication matrix", meaning: "Binary matrix C with C_ij = 1 if i sends to j directly." },
      ],
      formulas: [
        { name: "n-step paths", formula: "(C^n)_ij = number of length-n directed paths from i to j" },
        { name: "Total reachability", formula: "T = C + C² + C³ + … + C^k" },
      ],
      examQuestion: {
        problem: "C = [ 0 1 1 ; 0 0 1 ; 1 0 0 ]. Find C² and identify all 2-step paths from 1 to 3.",
        solution: [
          "C² = [ 0·0+1·0+1·1  0·1+1·0+1·0  0·1+1·1+1·0 ;  0·0+0·0+1·1  0·1+0·0+1·0  0·1+0·1+1·0 ;  1·0+0·0+0·1  1·1+0·0+0·0  1·1+0·1+0·0 ]",
          "= [ 1 0 1 ; 1 0 0 ; 0 1 1 ]",
          "(C²)_13 = 1: there is exactly one 2-step path from 1 to 3 (1 → 2 → 3)",
        ],
        answer: "C² shown; one 2-step path 1→2→3.",
        marks: 3,
      },
      commonErrors: [
        "Computing element-wise instead of matrix product",
        "Counting direct paths in C as 2-step paths",
      ],
      summary: [
        "Binary matrices encode yes/no; permutation matrices reorder vectors",
        "C^n_ij = number of n-step pathways",
        "T = sum of powers = total reachability up to chosen depth",
      ],
      practice: [
        { question: "What does (C³)_25 = 4 mean?", answer: "Four distinct 3-step paths from person 2 to person 5" },
      ],
      quiz: [
        {
          question: "If C is a communication matrix, the entries of C² represent:",
          options: ["Number of direct links", "Number of two-step links", "Total messages", "Total people"],
          correctAnswer: 1,
          explanation: "(C²)_ij counts length-2 paths from i to j.",
        },
        {
          question: "A permutation matrix multiplied by its transpose equals:",
          options: ["The zero matrix", "Itself", "The identity matrix", "A scalar multiple of itself"],
          correctAnswer: 2,
          explanation: "Permutation matrices are orthogonal: P^T·P = I.",
        },
      ],
    },
  ],

  // ─── 10G: Dominance Matrices ───────────────────────────────────────
  "y12g-ch10-10g-dominance": [
    {
      title: "Dominance Matrices",
      explanation:
        "A DOMINANCE MATRIX D is a square binary matrix used to rank competitors. Entry D_ij = 1 if competitor i 'dominates' (beat, defeated, ranked above) competitor j; 0 otherwise. Diagonal is 0 (no one dominates themselves).\n\nFIRST-ORDER DOMINANCE: row sums of D give the number of direct wins.\n\nSECOND-ORDER DOMINANCE: row sums of (D + D²) account for both direct and indirect (one-step) dominance — i.e. 'I beat j; j beat k → I dominate k indirectly'. This breaks ties and gives a much fairer ranking.\n\nRANKING PROCEDURE:\n  1. Construct D from results table.\n  2. Compute D + D².\n  3. Sum each row.\n  4. Rank competitors by descending row sum.\n  5. Where ties remain, look at higher orders D + D² + D³, but VCAA usually stops at order 2.\n\nINTERPRETATION: a higher second-order dominance score reflects strong wins (against opponents who themselves performed well), not just many wins.",
      keyPoints: [
        "D_ij = 1 if i beats j",
        "Row sum of D = number of direct wins",
        "Row sum of (D + D²) = 1st + 2nd order dominance",
        "Higher row sum ⇒ higher rank",
      ],
      workedExamples: [
        {
          problem:
            "Results: A beat B, A beat C, B beat C, D beat A, D beat B. Construct D, compute D + D², and rank A, B, C, D.",
          steps: [
            "Order rows/columns A, B, C, D. D = [ 0 1 1 0 ; 0 0 1 0 ; 0 0 0 0 ; 1 1 0 0 ]",
            "Direct row sums: A=2, B=1, C=0, D=2",
            "D² = D·D = [ 0 0 1 0 ; 0 0 0 0 ; 0 0 0 0 ; 0 1 2 0 ]",
            "D + D² = [ 0 1 2 0 ; 0 0 1 0 ; 0 0 0 0 ; 1 2 2 0 ]",
            "Second-order row sums: A=3, B=1, C=0, D=5",
            "Ranking: D, A, B, C",
          ],
          answer: "Ranking using D + D²: D, A, B, C.",
        },
      ],
      tips: [
        "Use the same row/column ORDER throughout",
        "Direct comparison alone often produces ties; D + D² usually breaks them",
        "Always state which order of dominance you used",
      ],
      definitions: [
        { term: "Dominance matrix", meaning: "Binary matrix D with D_ij = 1 if i dominates j." },
        { term: "Second-order dominance", meaning: "Sum of direct (D) and one-step indirect (D²) dominance." },
      ],
      formulas: [
        { name: "Total dominance score", formula: "S_i = row sum of (D + D²)" },
      ],
      examQuestion: {
        problem: "Three teams P, Q, R have results: P beat Q, Q beat R, R beat P. Construct D and rank using D + D².",
        solution: [
          "D = [ 0 1 0 ; 0 0 1 ; 1 0 0 ]",
          "D² = [ 0 0 1 ; 1 0 0 ; 0 1 0 ]",
          "D + D² = [ 0 1 1 ; 1 0 1 ; 1 1 0 ]",
          "All row sums = 2 → all teams equal",
        ],
        answer: "All three teams tied (cyclic outcome).",
        marks: 3,
      },
      commonErrors: [
        "Forgetting that diagonal is 0",
        "Adding D and D² element-wise but forgetting to compute D² as matrix product",
      ],
      summary: [
        "Dominance matrix encodes who beats whom",
        "Use D + D² to break ties from direct results",
        "Row sums give the ranking score",
      ],
      practice: [
        { question: "If row sum of (D + D²) for X is 7 and for Y is 5, who ranks higher?", answer: "X" },
      ],
      quiz: [
        {
          question: "D_ij = 1 means:",
          options: ["i and j drew", "i beat j", "j beat i", "i and j played"],
          correctAnswer: 1,
          explanation: "Row beats column in dominance matrices.",
        },
        {
          question: "Why is D + D² usually preferred over D alone for ranking?",
          options: ["It gives bigger numbers", "It accounts for indirect wins via stronger opponents", "It is easier to compute", "It avoids zeros"],
          correctAnswer: 1,
          explanation: "Second-order dominance captures the strength of opponents you beat.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 10 ──────────────────────────────────────────
  "y12g-ch10-review": [
    {
      title: "Chapter 10 Review — Matrices",
      explanation:
        "This chapter covered matrix structure and arithmetic:\n  • Order, elements and special matrices (identity, zero, square, diagonal).\n  • Representing tabular information in matrix form.\n  • Addition, subtraction and scalar multiplication (element-wise; same order required).\n  • Matrix multiplication (inner dimensions match; non-commutative).\n  • Determinant, inverse, and solving matrix equations (2×2).\n  • Specialised matrices: binary, permutation, communication and dominance.\n\nEXAM SKILLS:\n  • Identify the order of any matrix immediately.\n  • Decide whether a sum or product is defined before computing.\n  • Use CAS for inverse and large products; show set-up by hand.\n  • Interpret entries in context — what does (C²)_25 = 3 mean for the scenario?\n  • Use D + D² for ranking problems.",
      keyPoints: [
        "Order check is the first step in every matrix problem",
        "AB ≠ BA in general",
        "det(2×2) = ad − bc; inverse exists iff non-zero",
        "Communication: powers count paths; Dominance: D + D² ranks competitors",
      ],
      workedExamples: [
        {
          problem: "A clothing shop sells 3 shirt types in 2 colours. Sales matrix S (3×2) and price matrix P (1×3). Set up the matrix expression for revenue per colour and compute it for S = [4 6; 3 5; 2 7] and P = [20 25 30].",
          steps: [
            "Revenue per colour = P · S (1×3)·(3×2) = 1×2",
            "P·S column 1: 20·4 + 25·3 + 30·2 = 80 + 75 + 60 = 215",
            "P·S column 2: 20·6 + 25·5 + 30·7 = 120 + 125 + 210 = 455",
          ],
          answer: "Revenue: $215 (colour 1), $455 (colour 2).",
        },
      ],
      tips: [
        "Always sketch the orders before multiplying",
        "Use CAS for inverse and powers; verify the order is non-singular",
        "Interpret the answer in context, not as raw numbers",
      ],
      definitions: [
        { term: "Conformable", meaning: "Matrix shapes compatible for the operation in question." },
      ],
      formulas: [
        { name: "Order rule", formula: "(m×n)(n×p) = m×p" },
        { name: "Inverse 2×2", formula: "A^(−1) = (1/det)·[d −b; −c a]" },
      ],
      examQuestion: {
        problem: "Given A = [3 1; 2 4], find det(A), A^(−1) and use it to solve A·X = [7; 10].",
        solution: [
          "det(A) = 3·4 − 1·2 = 10",
          "A^(−1) = (1/10)·[4 −1; −2 3] = [0.4 −0.1; −0.2 0.3]",
          "X = A^(−1)·[7; 10] = [0.4(7) + (−0.1)(10); −0.2(7) + 0.3(10)] = [1.8; 1.6]",
        ],
        answer: "det = 10; X = [1.8; 1.6].",
        marks: 4,
      },
      commonErrors: [
        "Multiplying matrices element-wise",
        "Confusing order: AB vs BA",
        "Computing inverse without checking determinant",
      ],
      summary: [
        "Matrices store and transform structured data efficiently",
        "Multiplication is shape-sensitive and non-commutative",
        "Inverses solve matrix equations; determinant indicates whether the inverse exists",
      ],
      practice: [
        { question: "Order of (2×3)(3×5)?", answer: "2×5" },
      ],
      quiz: [
        {
          question: "Which is true for ALL matrices A and B with appropriate orders?",
          options: ["AB = BA", "(A + B)^T = A^T + B^T", "AB = 0 ⇒ A = 0 or B = 0", "A is invertible ⇔ A is square"],
          correctAnswer: 1,
          explanation: "Transpose distributes over addition; the others are false in general.",
        },
        {
          question: "A 2×2 matrix with det = 0 is called:",
          options: ["Identity", "Singular", "Symmetric", "Orthogonal"],
          correctAnswer: 1,
          explanation: "Singular ⇒ no inverse.",
        },
      ],
    },
  ],
};
