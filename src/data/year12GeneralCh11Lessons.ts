import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 11: Transition and Leslie Matrices (VCE Unit 4)

export const year12GeneralCh11Lessons: TopicLessonsMap = {
  // ─── 11A: Setting Up Transition Matrices ───────────────────────────
  "y12g-ch11-11a-setting-up": [
    {
      title: "Setting Up Transition Matrices",
      explanation:
        "A TRANSITION MATRIX T models how a population (or quantity) is redistributed among a set of STATES at each time step. Each entry T_ij gives the PROBABILITY (or PROPORTION) of moving FROM state j TO state i during one step.\n\n  T = [ T_ij ],   where T_ij = P(next = i | currently in j).\n\nKEY CONVENTIONS (VCAA):\n  • COLUMNS represent the CURRENT state (j) — read DOWN a column.\n  • ROWS represent the NEXT state (i) — entries in a row are arrival points.\n  • Each COLUMN MUST SUM TO 1 (everything that leaves j must end up somewhere).\n\nCONSTRUCTING T from a worded scenario:\n  • Identify all possible states.\n  • For each starting state, list the proportions moving to every other state.\n  • Place those proportions DOWN the corresponding column.\n  • Verify column sums = 1.\n\nSTATE VECTOR S: column matrix listing the current count or proportion in each state. The initial state is S_0.\n\nTRANSITION RULE: S_{n+1} = T · S_n.",
      keyPoints: [
        "Columns = FROM, rows = TO",
        "Each column sums to 1",
        "S_0 is the initial state vector",
        "S_{n+1} = T · S_n iterates the system",
      ],
      workedExamples: [
        {
          problem:
            "A market has two brands A and B. Each week 80% of A customers stay with A and 20% switch to B. 30% of B customers switch to A and 70% stay with B. Construct T.",
          steps: [
            "States: A, B (rows = next, columns = current)",
            "From A: 80% to A, 20% to B → column A = [0.8; 0.2]",
            "From B: 30% to A, 70% to B → column B = [0.3; 0.7]",
            "T = [ 0.8 0.3 ; 0.2 0.7 ]",
            "Check: 0.8 + 0.2 = 1 ✓ ; 0.3 + 0.7 = 1 ✓",
          ],
          answer: "T = [ 0.8 0.3 ; 0.2 0.7 ].",
        },
      ],
      tips: [
        "When in doubt, write 'FROM' above each column and 'TO' beside each row",
        "Add column sums explicitly as a verification",
        "Convert percentages to decimals before placing into T",
      ],
      definitions: [
        { term: "Transition matrix", meaning: "Square matrix whose columns describe how a state distributes one step later." },
        { term: "State vector", meaning: "Column matrix recording the current quantity in each state." },
      ],
      formulas: [
        { name: "Transition rule", formula: "S_{n+1} = T · S_n" },
        { name: "Column sum", formula: "Σ_i T_ij = 1 for every column j" },
      ],
      examQuestion: {
        problem:
          "Two cinemas: each week, 60% of cinema-A patrons return to A and 40% switch to B; 25% of B switch to A and 75% stay at B. Write T.",
        solution: [
          "Column A: [0.6; 0.4]; Column B: [0.25; 0.75]",
          "T = [ 0.6 0.25 ; 0.4 0.75 ]",
          "Column sums: 1 and 1 ✓",
        ],
        answer: "T = [ 0.6 0.25 ; 0.4 0.75 ].",
        marks: 2,
      },
      commonErrors: [
        "Putting probabilities in rows instead of columns",
        "Forgetting that column sums must equal 1",
        "Mixing percentages and decimals in the same matrix",
      ],
      summary: [
        "Columns = current state, rows = next state",
        "Each column sums to 1",
        "S_{n+1} = T · S_n drives the dynamics",
      ],
      practice: [
        { question: "If P(A→A)=0.7, P(A→B)=0.3, P(B→A)=0.2, P(B→B)=0.8, write T.", answer: "[0.7 0.2; 0.3 0.8]" },
      ],
      quiz: [
        {
          question: "In the convention used by VCAA, the entry T_12 represents:",
          options: ["P(state 1 → state 2)", "P(state 2 → state 1)", "Total in state 1", "Sum of column 2"],
          correctAnswer: 1,
          explanation: "Columns are 'from' and rows are 'to', so T_12 = P(from 2 to 1).",
        },
        {
          question: "Each column of a transition matrix must sum to:",
          options: ["0", "0.5", "1", "n"],
          correctAnswer: 2,
          explanation: "All probability leaves the current state.",
        },
      ],
    },
  ],

  // ─── 11B: Interpreting Transition Matrices ─────────────────────────
  "y12g-ch11-11b-interpreting": [
    {
      title: "Interpreting Transition Matrices and Steady State",
      explanation:
        "Once the matrix is built, the diagonal entries T_ii say what FRACTION of state i STAYS in state i each step. Off-diagonal entries describe DEFECTIONS / TRANSITIONS.\n\nLONG-TERM (STEADY) STATE: As n → ∞, S_n typically tends to a limit S* satisfying\n  T · S* = S*.\nThis is the steady-state equation. S* depends only on T (and the total population), not on S_0 (provided T is regular).\n\nFINDING S* (2-state shortcut):\n  For T = [ a 1−b ; 1−a b ], steady proportions are\n  S* = [ (1−b)/((1−a)+(1−b)) ; (1−a)/((1−a)+(1−b)) ] × total population.\nIn general, solve (T − I) · S* = 0 with the constraint that entries of S* sum to the total population.\n\nIN PRACTICE on CAS: iterate S_n = T^n · S_0 for large n (e.g. n = 50 or 100) and read off the limiting vector — entries usually stabilise to four or more decimal places by n ≈ 50.",
      keyPoints: [
        "Diagonal entries describe loyalty/retention",
        "Off-diagonals describe switching",
        "Steady state S* satisfies T·S* = S*",
        "Iterating S = T^n·S_0 for large n approaches S*",
      ],
      workedExamples: [
        {
          problem:
            "T = [ 0.8 0.3 ; 0.2 0.7 ]. Total population 1000 distributed initially as 600 A and 400 B. Estimate the steady-state distribution.",
          steps: [
            "Iterate using CAS: S_1 = T·S_0 = [0.8(600)+0.3(400); 0.2(600)+0.7(400)] = [600; 400]",
            "Note S_0 already balances — S* = [600; 400]",
            "Verify steady-state formula: a = 0.8, b = 0.7. S* proportions = [0.3/0.5; 0.2/0.5] = [0.6; 0.4]; × 1000 = [600; 400] ✓",
          ],
          answer: "S* = [ 600 ; 400 ].",
        },
      ],
      tips: [
        "If iteration shows S_n unchanging, you're already at steady state",
        "Use 'as n → ∞' phrasing in interpretation",
        "Round steady-state populations to nearest WHOLE individual",
      ],
      definitions: [
        { term: "Steady state", meaning: "The long-term distribution S* satisfying T·S* = S*." },
        { term: "Regular transition matrix", meaning: "Some power of T has all positive entries — guarantees a unique steady state." },
      ],
      formulas: [
        { name: "Steady state equation", formula: "T · S* = S*" },
        { name: "Iteration", formula: "S_n = T^n · S_0" },
      ],
      examQuestion: {
        problem:
          "T = [ 0.6 0.25 ; 0.4 0.75 ], population 4000. Find the long-term distribution.",
        solution: [
          "Use shortcut: a = 0.6, b = 0.75; (1−a) = 0.4, (1−b) = 0.25; total = 0.65",
          "Proportions: S* = [0.25/0.65; 0.4/0.65] ≈ [0.3846; 0.6154]",
          "Multiply by 4000: ≈ [1538; 2462]",
        ],
        answer: "Approximately 1538 in state 1 and 2462 in state 2.",
        marks: 3,
      },
      commonErrors: [
        "Reading T_ij with rows as 'from' (wrong direction)",
        "Forgetting to multiply proportions by total population",
      ],
      summary: [
        "Steady state is the long-run distribution",
        "Iterate or use the steady-state shortcut",
        "Verify by checking T·S* = S*",
      ],
      practice: [
        { question: "If iterating gives S_50 = [200; 800], the steady state is:", answer: "[200; 800] (assuming convergence)" },
      ],
      quiz: [
        {
          question: "The steady-state vector S* satisfies:",
          options: ["T = S*", "T·S* = 0", "T·S* = S*", "T + S* = I"],
          correctAnswer: 2,
          explanation: "S* is fixed under T.",
        },
        {
          question: "If the diagonal entries of T are large (close to 1), the system is best described as:",
          options: ["Highly unstable", "Highly loyal (low switching)", "Always at steady state", "Cyclic"],
          correctAnswer: 1,
          explanation: "Most of each state stays put.",
        },
      ],
    },
  ],

  // ─── 11C: Transition Matrices Using Recursion ──────────────────────
  "y12g-ch11-11c-recursion": [
    {
      title: "Iterating Transition Matrices: S_{n+1} = T · S_n",
      explanation:
        "The recurrence S_{n+1} = T · S_n with initial state S_0 generates the population at every future step. Each multiplication by T applies one period of transitions.\n\nDIRECT POWER FORMULA:\n  S_n = T^n · S_0.\nT^n is computed efficiently by CAS (Calculator → Math → ^).\n\nTYPICAL EXAM TASKS:\n  (a) Compute S_n for a specific n.\n  (b) Find when state j first exceeds (or falls below) a threshold.\n  (c) Estimate the long-term distribution by computing T^n for large n.\n  (d) Compare S_n to S_0 to describe trends.\n\nINTERPRETATION HABITS:\n  • State entries usually rounded to nearest whole number (people, animals, units sold).\n  • Always state which row corresponds to which category.\n  • Use phrases like 'after n weeks' that match the model's time unit.\n\nCAS — TI-Nspire: enter T and S0; compute T^5 · S0. To iterate cell-by-cell use a spreadsheet column with formula = T · A_(n-1).\nCAS — ClassPad: similar; use the matrix tab.",
      keyPoints: [
        "S_n = T^n · S_0 gives state after n steps",
        "Use CAS for T^n with n large",
        "Round to whole units when interpreting populations",
      ],
      workedExamples: [
        {
          problem:
            "T = [ 0.8 0.3 ; 0.2 0.7 ], S_0 = [ 500 ; 500 ]. Find S_3.",
          steps: [
            "S_1 = T·S_0 = [0.8(500)+0.3(500); 0.2(500)+0.7(500)] = [550; 450]",
            "S_2 = T·S_1 = [0.8(550)+0.3(450); 0.2(550)+0.7(450)] = [575; 425]",
            "S_3 = T·S_2 = [0.8(575)+0.3(425); 0.2(575)+0.7(425)] = [587.5; 412.5]",
          ],
          answer: "S_3 ≈ [ 588 ; 412 ] after rounding to whole units.",
        },
      ],
      tips: [
        "Carry full precision in CAS until the final step",
        "Interpret each entry with its label: 'about 588 in state A after 3 weeks'",
        "Use T^n for n ≥ 4 — manual iteration becomes error-prone",
      ],
      definitions: [
        { term: "Iteration", meaning: "Repeated application of the transition rule." },
      ],
      formulas: [
        { name: "Power formula", formula: "S_n = T^n · S_0" },
      ],
      examQuestion: {
        problem:
          "T = [ 0.6 0.25 ; 0.4 0.75 ], S_0 = [ 1000 ; 0 ]. After 2 weeks, how many are in state 2?",
        solution: [
          "S_1 = [0.6(1000) + 0.25(0); 0.4(1000) + 0.75(0)] = [600; 400]",
          "S_2 = [0.6(600) + 0.25(400); 0.4(600) + 0.75(400)] = [460; 540]",
        ],
        answer: "540 in state 2 after 2 weeks.",
        marks: 3,
      },
      commonErrors: [
        "Multiplying T·T instead of T·S",
        "Confusing S_n with S_{n−1}",
      ],
      summary: [
        "S_n = T^n · S_0",
        "CAS handles powers and large n",
        "Always round and label the result in context",
      ],
      practice: [
        { question: "If S_0 = [200; 100] and T·S_0 = [180; 120], what is S_1?", answer: "[180; 120]" },
      ],
      quiz: [
        {
          question: "The recurrence for state vectors is:",
          options: ["S_{n+1} = S_n + T", "S_{n+1} = T·S_n", "S_{n+1} = T^n·S_0 + b", "S_{n+1} = S_n − T"],
          correctAnswer: 1,
          explanation: "Multiply by T each step.",
        },
        {
          question: "S_5 can be computed as:",
          options: ["T^5 + S_0", "5·T·S_0", "T^5 · S_0", "(T + I)·S_0"],
          correctAnswer: 2,
          explanation: "Apply T five times = T^5.",
        },
      ],
    },
  ],

  // ─── 11D: S_{n+1} = T·S_n + B ──────────────────────────────────────
  "y12g-ch11-11d-tsn-plus-b": [
    {
      title: "Transition Matrices With External Effects: S_{n+1} = T · S_n + B",
      explanation:
        "Real systems often have EXTERNAL ADDITIONS or REMOVALS each period that are not captured by T alone:\n  • New animals are added to a population (restocking).\n  • Some animals are culled.\n  • New customers enter a market each week.\n\nThese effects are captured by an EXTERNAL MATRIX (or vector) B with the same shape as S_n. The recurrence becomes\n  S_{n+1} = T · S_n + B,    S_0 given.\n\nCONVENTION:\n  • Positive entries in B represent ADDITIONS to that state.\n  • Negative entries represent REMOVALS.\n  • B can be CONSTANT (same every period) or change with time (less common in VCAA).\n\nSOLVING TYPICAL QUESTIONS:\n  1. Direct iteration: compute S_1, S_2, … using the recurrence.\n  2. Long-term equilibrium S* satisfies S* = T·S* + B, i.e. (I − T)·S* = B; solve when det(I − T) ≠ 0.\n  3. Use CAS sequence/spreadsheet for many iterations.\n\nINTERPRETATION:\n  • If T·S* + B = S* for a particular S*, the population is balanced.\n  • Adding restocking can prevent extinction; culling can cap growth.",
      keyPoints: [
        "S_{n+1} = T·S_n + B handles external add/remove",
        "Positive B = inflow; negative B = outflow",
        "Equilibrium: (I − T)·S* = B",
        "Use CAS for long iterations",
      ],
      workedExamples: [
        {
          problem:
            "An island has fish populations in two regions modelled by T = [0.7 0.1; 0.3 0.9] and B = [50; −20] (50 added to region 1, 20 removed from region 2 each month). S_0 = [100; 200]. Find S_1.",
          steps: [
            "T·S_0 = [0.7(100) + 0.1(200); 0.3(100) + 0.9(200)] = [90; 210]",
            "S_1 = T·S_0 + B = [90 + 50; 210 − 20] = [140; 190]",
          ],
          answer: "S_1 = [140; 190].",
        },
        {
          problem: "Same T and B as above. Find the equilibrium S*.",
          steps: [
            "(I − T) = [0.3 −0.1; −0.3 0.1]",
            "det(I − T) = 0.3(0.1) − (−0.1)(−0.3) = 0.03 − 0.03 = 0 → singular",
            "No unique equilibrium; population either grows or settles depending on B",
          ],
          answer: "(I − T) is singular; the system has no unique steady state with these values of B.",
        },
      ],
      tips: [
        "Compute T·S_n FIRST, then add B",
        "Use CAS sequence command for fast iteration",
        "If (I − T) is singular, equilibrium is non-unique or non-existent",
      ],
      definitions: [
        { term: "External vector B", meaning: "Constant additions/removals applied each step." },
        { term: "Equilibrium state", meaning: "S* with S* = T·S* + B." },
      ],
      formulas: [
        { name: "Recurrence with B", formula: "S_{n+1} = T · S_n + B" },
        { name: "Equilibrium equation", formula: "(I − T) · S* = B" },
      ],
      examQuestion: {
        problem:
          "Two reserves model deer with T = [ 0.9 0.05 ; 0.1 0.95 ] and culling B = [ −10 ; −20 ]. S_0 = [ 500 ; 800 ]. Find S_2.",
        solution: [
          "S_1 = T·S_0 + B = [0.9(500)+0.05(800); 0.1(500)+0.95(800)] + [−10; −20]",
          "= [450 + 40; 50 + 760] + [−10; −20] = [490; 810] + [−10; −20] = [480; 790]",
          "S_2 = T·S_1 + B = [0.9(480)+0.05(790); 0.1(480)+0.95(790)] + [−10; −20]",
          "= [432 + 39.5; 48 + 750.5] + [−10; −20] = [471.5; 798.5] + [−10; −20] = [461.5; 778.5]",
        ],
        answer: "S_2 ≈ [462; 779] (rounded).",
        marks: 4,
      },
      commonErrors: [
        "Adding B before applying T",
        "Treating B as a multiplier instead of an addition",
        "Using B with the wrong sign convention",
      ],
      summary: [
        "Multiply by T, THEN add (or subtract) B",
        "Equilibrium: solve (I − T)·S* = B",
        "Sign of B matches inflow/outflow",
      ],
      practice: [
        { question: "S_0 = [100; 100], T = [1 0; 0 1], B = [10; −5]. S_1?", answer: "[110; 95]" },
      ],
      quiz: [
        {
          question: "The recurrence S_{n+1} = T·S_n + B is used when:",
          options: ["T is singular", "External additions or removals occur each period", "B = 0", "Population is constant"],
          correctAnswer: 1,
          explanation: "B captures inflow/outflow per period.",
        },
        {
          question: "Equilibrium S* satisfies:",
          options: ["S* = T", "S* = B", "(I − T)·S* = B", "T·S* = B − S*"],
          correctAnswer: 2,
          explanation: "Rearrange S* = T·S* + B.",
        },
      ],
    },
  ],

  // ─── 11E: Leslie Matrices ──────────────────────────────────────────
  "y12g-ch11-11e-leslie": [
    {
      title: "Leslie Matrices — Age-Structured Population Models",
      explanation:
        "A LESLIE MATRIX models a population divided into AGE CLASSES of equal width. The state vector S_n records the number of individuals in each age class at time n.\n\nSTRUCTURE — for k age classes:\n  L = [ b_1 b_2 b_3 … b_k ;\n        s_1  0   0  …  0 ;\n         0  s_2  0  …  0 ;\n         …                ;\n         0   0  … s_{k−1} 0 ]\nwhere\n  b_i = average number of female offspring per female of age class i (BIRTH rate),\n  s_i = proportion of age class i that survives to age class i+1 (SURVIVAL rate, 0 ≤ s_i ≤ 1).\n\nThe FIRST ROW captures BIRTHS into the youngest class; the SUB-DIAGONAL captures AGEING/SURVIVAL.\n\nDYNAMICS:  S_{n+1} = L · S_n.\n\nLONG-TERM BEHAVIOUR: The dominant eigenvalue λ of L determines whether the population grows (λ > 1), shrinks (λ < 1) or is stable (λ = 1). For VCAA, identify long-term growth/decline by iterating in CAS and observing the multiplicative factor.\n\nINTERPRETATION TIPS:\n  • Round to whole individuals.\n  • Identify which row holds reproductive ages (b_i > 0).\n  • A zero on the sub-diagonal indicates extinction of that cohort.",
      keyPoints: [
        "First row: birth rates per class",
        "Sub-diagonal: survival rates 0 ≤ s_i ≤ 1",
        "S_{n+1} = L · S_n iterates the population",
        "Long-term: dominant eigenvalue determines growth/decline",
      ],
      workedExamples: [
        {
          problem:
            "A species has 3 age classes (0–1, 1–2, 2–3 yr). Fertilities b = (0, 1.5, 0.8); survivals s_1 = 0.6, s_2 = 0.4. Initial S_0 = [80; 40; 20]. Find S_1.",
          steps: [
            "L = [ 0   1.5  0.8 ;  0.6  0   0   ;  0    0.4  0  ]",
            "S_1 = L·S_0:",
            "  Row 1: 0(80) + 1.5(40) + 0.8(20) = 60 + 16 = 76",
            "  Row 2: 0.6(80) + 0 + 0 = 48",
            "  Row 3: 0 + 0.4(40) + 0 = 16",
          ],
          answer: "S_1 = [ 76 ; 48 ; 16 ].",
        },
      ],
      tips: [
        "Survival entries are PROPORTIONS (0 ≤ s_i ≤ 1)",
        "Birth entries can exceed 1",
        "If overall population grows period-on-period, the dominant eigenvalue > 1",
      ],
      definitions: [
        { term: "Leslie matrix", meaning: "Square matrix with births in row 1 and survival on the sub-diagonal." },
        { term: "Dominant eigenvalue", meaning: "Largest |λ| of L; controls long-term growth rate." },
      ],
      formulas: [
        { name: "Leslie recurrence", formula: "S_{n+1} = L · S_n" },
      ],
      examQuestion: {
        problem:
          "Two age classes: b = (0, 2), s_1 = 0.5. L = [ 0 2 ; 0.5 0 ]. S_0 = [ 100 ; 100 ]. Find S_1, S_2 and describe long-term behaviour.",
        solution: [
          "S_1 = L·S_0 = [0(100) + 2(100); 0.5(100) + 0(100)] = [200; 50]",
          "S_2 = L·S_1 = [0(200) + 2(50); 0.5(200) + 0(50)] = [100; 100]",
          "Cycle of period 2 — population oscillates between [200; 50] and [100; 100]",
          "Total population stays roughly constant at 250 → 250 → 200 → 250 indicating an oscillating but balanced system",
        ],
        answer: "S_1 = [200; 50]; S_2 = [100; 100]; population oscillates, average roughly stable.",
        marks: 4,
      },
      commonErrors: [
        "Placing survival rates on the wrong diagonal",
        "Using survival rates > 1",
        "Forgetting that the first row is birth rates, not survival",
      ],
      summary: [
        "Leslie matrix: row 1 = births, sub-diagonal = survivals",
        "Iterate with S_{n+1} = L·S_n",
        "Long-term behaviour determined by the dominant eigenvalue",
      ],
      practice: [
        { question: "If totals are 100 → 110 → 121 → 133, the growth multiplier is approximately?", answer: "≈ 1.10 per period" },
      ],
      quiz: [
        {
          question: "In a Leslie matrix, the sub-diagonal entries represent:",
          options: ["Birth rates", "Survival proportions", "Mortality probabilities", "Total population"],
          correctAnswer: 1,
          explanation: "Sub-diagonal s_i = fraction surviving from class i to class i+1.",
        },
        {
          question: "If totals grow by factor 1.15 each period, the dominant eigenvalue λ ≈:",
          options: ["0.15", "1.15", "0.85", "Cannot tell"],
          correctAnswer: 1,
          explanation: "Long-term population grows by ≈ λ each step.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 11 ──────────────────────────────────────────
  "y12g-ch11-review": [
    {
      title: "Chapter 11 Review — Transition and Leslie Matrices",
      explanation:
        "This chapter applied matrices to dynamic systems:\n  • Standard transition matrices T with column sums of 1 model probabilistic transitions between states.\n  • Iteration S_n = T^n · S_0 produces the state at step n.\n  • Steady-state vector S* satisfies T·S* = S*; iterate to large n or solve the linear system.\n  • S_{n+1} = T·S_n + B incorporates external additions or removals.\n  • Leslie matrices model age-structured populations using birth and survival rates.\n\nEXAM STRATEGY:\n  • Build T with COLUMNS = current state and check column sums = 1.\n  • Use CAS for T^n when n ≥ 4 or to find equilibria.\n  • Always interpret final answers in context with units and rounded whole numbers (people, animals, units).\n  • When using B, multiply BEFORE adding.\n  • For Leslie matrices, identify reproductive classes and survival pathway clearly.",
      keyPoints: [
        "T columns sum to 1; S_{n+1} = T·S_n",
        "S* satisfies T·S* = S*; iterate or solve",
        "S_{n+1} = T·S_n + B for external effects",
        "Leslie: row 1 = births, sub-diagonal = survivals",
      ],
      workedExamples: [
        {
          problem:
            "Two grocery stores share the market. T = [0.85 0.20; 0.15 0.80]. Total customers 5000, initially S_0 = [4000; 1000]. Find the steady state.",
          steps: [
            "Steady-state shortcut: a = 0.85, b = 0.80; (1−a) = 0.15, (1−b) = 0.20; total = 0.35",
            "S* proportions: [0.20/0.35; 0.15/0.35] ≈ [0.5714; 0.4286]",
            "× 5000: [2857; 2143]",
          ],
          answer: "Steady state ≈ [2857; 2143].",
        },
        {
          problem: "Same T, with B = [50; −50] (50 new customers join store 1, 50 leave store 2 each week). Find S_1.",
          steps: [
            "T·S_0 = [0.85(4000) + 0.20(1000); 0.15(4000) + 0.80(1000)] = [3600; 1400]",
            "S_1 = T·S_0 + B = [3600 + 50; 1400 − 50] = [3650; 1350]",
          ],
          answer: "S_1 = [3650; 1350].",
        },
      ],
      tips: [
        "Always state the convention 'columns = from, rows = to'",
        "Round populations to whole numbers in interpretation",
        "Use CAS sequences for fast iteration and for steady-state estimation",
      ],
      definitions: [
        { term: "Transition matrix", meaning: "Square stochastic matrix with column sums = 1." },
        { term: "Steady state", meaning: "Long-run vector S* with T·S* = S*." },
        { term: "Leslie matrix", meaning: "Age-structured population matrix with births in row 1 and survival on sub-diagonal." },
      ],
      formulas: [
        { name: "Iteration", formula: "S_n = T^n · S_0" },
        { name: "With external", formula: "S_{n+1} = T·S_n + B" },
        { name: "Equilibrium with B", formula: "(I − T)·S* = B" },
      ],
      examQuestion: {
        problem:
          "An animal population has L = [ 0  3  1 ; 0.5  0  0 ; 0  0.4  0 ] and S_0 = [ 60 ; 30 ; 10 ]. Find S_1 and predict whether the population grows.",
        solution: [
          "S_1 = L·S_0:",
          "Row 1: 0(60) + 3(30) + 1(10) = 100",
          "Row 2: 0.5(60) + 0 + 0 = 30",
          "Row 3: 0 + 0.4(30) + 0 = 12",
          "S_1 = [100; 30; 12]; total = 142 vs S_0 total 100 → growing",
        ],
        answer: "S_1 = [100; 30; 12]; population is increasing.",
        marks: 3,
      },
      commonErrors: [
        "Rows-as-from instead of columns-as-from",
        "Using T·S+B in the wrong order",
        "Survival rates outside [0, 1] in Leslie matrices",
      ],
      summary: [
        "Standard, externally-driven and Leslie models all use S_{n+1} = T·S_n (+ B)",
        "Steady state, equilibrium, dominant eigenvalue describe long-term behaviour",
        "Always interpret with units, whole numbers, and time-step language",
      ],
      practice: [
        { question: "If T = [0.5 0.5; 0.5 0.5] and S_0 = [100; 0], what is S_1?", answer: "[50; 50]" },
      ],
      quiz: [
        {
          question: "If iteration of S_{n+1} = T·S_n stabilises to a fixed S*, then S* satisfies:",
          options: ["T = I", "T·S* = S*", "T·S* = 0", "(T − I)·S* = T"],
          correctAnswer: 1,
          explanation: "Steady-state condition.",
        },
        {
          question: "In a Leslie matrix, where do birth rates appear?",
          options: ["Diagonal", "Sub-diagonal", "First row", "First column"],
          correctAnswer: 2,
          explanation: "First row contributes new births to the youngest class.",
        },
        {
          question: "S_{n+1} = T·S_n + B with B = [5; −5] models:",
          options: ["No external effects", "Equal switching between states", "Constant inflow to state 1 and outflow from state 2", "A perpetuity"],
          correctAnswer: 2,
          explanation: "Positive entry adds, negative entry removes.",
        },
      ],
    },
  ],
};
