import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 14: Flow, Matching and Scheduling Problems (VCE Unit 4)

export const year12GeneralCh14Lessons: TopicLessonsMap = {
  // ─── 14A: Flow Problems ────────────────────────────────────────────
  "y12g-ch14-14a-flow": [
    {
      title: "Flow Problems — Maximum Flow and Minimum Cut",
      explanation:
        "A FLOW NETWORK is a directed weighted graph with:\n  • A SOURCE vertex (where flow starts).\n  • A SINK vertex (where flow ends).\n  • Each edge has a CAPACITY: the maximum amount that can travel along it per unit time.\n\nGOAL: send as much flow as possible from source to sink, never exceeding capacity on any edge, with flow CONSERVED at every internal vertex (in = out).\n\nINSPECTION METHOD (used in VCE):\n  1. Find any path from source to sink with spare capacity.\n  2. The flow on that path = MINIMUM capacity along it (the BOTTLENECK).\n  3. Subtract that flow from each edge of the path.\n  4. Repeat with another path until no augmenting path remains.\n  5. The TOTAL flow assigned is the MAXIMUM FLOW.\n\nMAX-FLOW MIN-CUT THEOREM:\n  • A CUT is a set of edges whose removal disconnects source from sink.\n  • CAPACITY of a cut = sum of capacities of its forward edges.\n  • MAX FLOW = MIN CUT capacity.\n\nThis gives a quick way to verify your answer: any cut you find provides an UPPER BOUND on the maximum flow.",
      keyPoints: [
        "Capacity limits each edge",
        "Bottleneck of a path = its smallest spare capacity",
        "Repeat until no augmenting path remains",
        "Max flow = min cut (use as a check)",
      ],
      workedExamples: [
        {
          problem: "Source S → A (capacity 6), S → B (4), A → T (5), B → T (3), A → B (2). Find max flow S → T.",
          steps: [
            "Path S–A–T: bottleneck min(6,5)=5. Flow = 5",
            "Remaining: SA=1, AT=0, SB=4, BT=3, AB=2",
            "Path S–B–T: bottleneck min(4,3)=3. Flow = 3",
            "Remaining: SA=1, SB=1, BT=0, AB=2",
            "Path S–A–B–T? BT=0 → blocked",
            "No more augmenting paths",
            "Max flow = 5 + 3 = 8",
            "Check cut {AT, BT}: capacity 5 + 3 = 8 ✓",
          ],
          answer: "Maximum flow = 8.",
        },
      ],
      tips: [
        "Always write remaining capacity after sending flow",
        "Verify with a cut: pick any S/T separation, sum forward capacities",
      ],
      definitions: [
        { term: "Source", meaning: "Vertex where flow originates." },
        { term: "Sink", meaning: "Vertex where flow ends." },
        { term: "Capacity", meaning: "Maximum flow allowed on an edge." },
        { term: "Cut", meaning: "Set of edges separating source from sink." },
      ],
      formulas: [
        { name: "Max-flow min-cut", formula: "max flow(S, T) = min capacity(cut)" },
      ],
      examQuestion: {
        problem: "S→A=8, S→B=5, A→C=4, B→C=6, C→T=10. Find max flow S→T.",
        solution: [
          "Cut {AC, BC}: capacity 4 + 6 = 10",
          "Cut {CT}: capacity 10",
          "Cut {SA, SB}: capacity 8 + 5 = 13",
          "Min cut = 10 ⇒ max flow ≤ 10",
          "Achieve: S–A–C–T sends 4; S–B–C–T sends 6; total 10",
        ],
        answer: "Maximum flow = 10.",
        marks: 3,
      },
      commonErrors: [
        "Sending flow that exceeds remaining capacity",
        "Forgetting flow conservation at internal vertices",
        "Confusing capacity with current flow",
      ],
      summary: [
        "Find augmenting paths; bottleneck sets flow",
        "Max flow = min cut",
        "Always check with a cut",
      ],
      quiz: [
        {
          question: "Bottleneck of a path equals:",
          options: ["Largest capacity", "Smallest capacity along the path", "Sum of capacities", "Sink capacity"],
          correctAnswer: 1,
          explanation: "Flow cannot exceed the tightest edge.",
        },
        {
          question: "Max-flow min-cut theorem states:",
          options: ["Max flow > min cut", "Max flow = min cut", "Min cut = 0", "Cut not relevant"],
          correctAnswer: 1,
          explanation: "Equality is the key result.",
        },
        {
          question: "Flow conservation at an internal vertex means:",
          options: ["In > out", "Out > in", "In = out", "Both equal capacity"],
          correctAnswer: 2,
          explanation: "No flow created or destroyed except at source/sink.",
        },
      ],
    },
  ],

  // ─── 14B: Matching and Allocation ──────────────────────────────────
  "y12g-ch14-14b-matching-allocation": [
    {
      title: "Matching and Allocation Problems",
      explanation:
        "A BIPARTITE GRAPH has two sets of vertices (e.g. workers and tasks) where edges only go BETWEEN the sets, never within.\n\nA MATCHING pairs up vertices using edges so that no vertex appears in more than one pair.\n\nAn ALLOCATION problem asks: assign each worker to one task (and vice versa) such that the assignment is feasible (an edge exists) and OPTIMAL with respect to a cost or score.\n\nBIPARTITE MATCHING (inspection method):\n  • List the available edges (worker–task pairs).\n  • Match obvious unique pairs first (a worker who can only do one task).\n  • Use AUGMENTING PATHS to improve a partial matching: an alternating path from an unmatched vertex to another unmatched vertex.\n  • Repeat until no augmenting path exists.\n\nALLOCATION WITH COSTS:\n  • A cost matrix lists time/cost for each pair.\n  • The HUNGARIAN ALGORITHM (or row-and-column inspection at VCE level) chooses one entry per row and column with minimum total.\n  • Common goal: minimum total time or maximum total benefit.",
      keyPoints: [
        "Bipartite graph: edges only between two sets",
        "Matching: no vertex shared between pairs",
        "Use augmenting paths to extend matchings",
        "Allocation chooses one entry per row and per column",
      ],
      workedExamples: [
        {
          problem: "Workers W1, W2, W3 can do tasks T1, T2, T3. W1 can do T1, T2; W2 can do T2; W3 can do T2, T3. Find a complete matching.",
          steps: [
            "W2 only matches T2 → assign W2–T2",
            "W3 must take T3 (T2 already used)",
            "W1 must take T1",
            "Matching: W1-T1, W2-T2, W3-T3",
          ],
          answer: "Complete matching: W1-T1, W2-T2, W3-T3.",
        },
      ],
      tips: [
        "Identify unique-edge vertices first",
        "If a worker has no allowable task, no full matching exists",
      ],
      definitions: [
        { term: "Bipartite graph", meaning: "Vertices split into two sets; edges only across sets." },
        { term: "Matching", meaning: "Set of edges sharing no vertex." },
        { term: "Allocation", meaning: "One-to-one assignment with cost or benefit considered." },
      ],
      examQuestion: {
        problem:
          "Three workers A, B, C must each do one of three jobs P, Q, R. Times in minutes:\n  A: P=8, Q=4, R=7\n  B: P=5, Q=2, R=3\n  C: P=9, Q=4, R=8\nFind minimum total time.",
        solution: [
          "Try A–R(7), B–Q(2), C–P(9): total 18",
          "Try A–Q(4), B–R(3), C–P(9): total 16",
          "Try A–R(7), B–P(5), C–Q(4): total 16",
          "Try A–Q(4), B–P(5), C–R(8): total 17",
          "Best is 16",
        ],
        answer: "Minimum total time = 16 minutes.",
        marks: 3,
      },
      commonErrors: [
        "Allocating one worker to two tasks",
        "Forgetting that each task must be assigned exactly once",
      ],
      summary: [
        "Match by inspection in small problems",
        "For costs, search systematically for the minimum total",
      ],
      quiz: [
        {
          question: "A bipartite graph has edges:",
          options: ["Only within one set", "Only across two sets", "Both", "None"],
          correctAnswer: 1,
          explanation: "By definition, edges go from one part to the other.",
        },
        {
          question: "In an allocation, each worker is assigned:",
          options: ["No tasks", "One task", "All tasks", "Half a task"],
          correctAnswer: 1,
          explanation: "One-to-one mapping.",
        },
        {
          question: "If a worker has no allowable task:",
          options: ["Match someone else twice", "No complete matching exists", "Add a fake task", "Skip them"],
          correctAnswer: 1,
          explanation: "A complete matching is impossible.",
        },
      ],
    },
  ],

  // ─── 14C: Precedence Tables and Activity Networks ──────────────────
  "y12g-ch14-14c-precedence-activity": [
    {
      title: "Precedence Tables and Activity Networks",
      explanation:
        "Project planning models a sequence of ACTIVITIES that must be completed.\n\nA PRECEDENCE TABLE lists:\n  • Each activity (named A, B, C, …)\n  • Its DURATION (time required)\n  • Its IMMEDIATE PREDECESSORS (activities that must finish before it can start)\n\nFrom a precedence table we draw an ACTIVITY NETWORK (activity-on-edge):\n  • Each activity is an EDGE.\n  • Each vertex is an EVENT (a moment when one or more activities finish or start).\n  • DUMMY ACTIVITIES (dashed edges, duration 0) preserve precedence without implying additional time.\n\nDRAWING TIPS:\n  • Activities with NO predecessors start at the source vertex.\n  • Activities with NO successors end at the sink vertex.\n  • Use a dummy when two activities share only some predecessors.\n\nThe activity network is the foundation for scheduling, critical path analysis, and crashing.",
      keyPoints: [
        "Precedence table lists activity, duration, predecessors",
        "Activity network draws activities as edges",
        "Dummy activities preserve logic without time",
        "Source = start; sink = finish",
      ],
      workedExamples: [
        {
          problem:
            "Activities: A(3), B(2), C(4 — after A), D(5 — after A, B), E(2 — after C, D). Sketch the network and list the order of events.",
          steps: [
            "A and B start from source (no predecessors)",
            "After A finishes: C can start; D needs both A and B",
            "Use a dummy from end-of-A to the join with B if needed for clarity",
            "C and D finish before E starts",
            "E ends at the sink",
            "Network outline: Source → A → (C, D-join) → E → Sink, with B feeding the D-join",
          ],
          answer: "Network drawn with dummy if necessary; events ordered Source, A-end, B-end, C/D-end, E-end, Sink.",
        },
      ],
      tips: [
        "Always add dummies when two activities share only one of several predecessors",
        "Label every edge with its activity name and duration",
      ],
      definitions: [
        { term: "Predecessor", meaning: "Activity that must finish before another can start." },
        { term: "Dummy activity", meaning: "Zero-duration edge used to preserve precedence." },
        { term: "Event", meaning: "Vertex marking a point in time when activities meet." },
      ],
      examQuestion: {
        problem:
          "Activities A(2), B(3), C(4 after A), D(5 after B), E(1 after C, D). Draw the activity network.",
        solution: [
          "A and B start from source",
          "C follows A; D follows B",
          "C and D both end at the same vertex; E starts there",
          "E ends at sink",
          "No dummy required as no shared predecessor conflict exists",
        ],
        answer: "Network: Source-(A=2)-X-(C=4)-Y; Source-(B=3)-Z-(D=5)-Y; Y-(E=1)-Sink.",
        marks: 3,
      },
      commonErrors: [
        "Omitting a dummy when needed",
        "Drawing activities as vertices instead of edges",
        "Mixing up immediate vs all predecessors",
      ],
      summary: [
        "Convert precedence table to activity network",
        "Use dummies sparingly but where needed",
        "Foundation for scheduling and crashing",
      ],
      quiz: [
        {
          question: "In activity-on-edge networks, activities are:",
          options: ["Vertices", "Edges", "Cuts", "Loops"],
          correctAnswer: 1,
          explanation: "Each activity is drawn as a directed edge.",
        },
        {
          question: "A dummy activity has duration:",
          options: ["1", "Equal to predecessor", "0", "Average"],
          correctAnswer: 2,
          explanation: "Dummies preserve precedence with no time cost.",
        },
        {
          question: "Activities with no predecessors start at:",
          options: ["Sink", "Source", "Any event", "A dummy"],
          correctAnswer: 1,
          explanation: "They have nothing to wait for.",
        },
      ],
    },
  ],

  // ─── 14D: Scheduling Problems ──────────────────────────────────────
  "y12g-ch14-14d-scheduling": [
    {
      title: "Scheduling — Critical Path, EST, LST and Float",
      explanation:
        "From the activity network we can compute timing values for every activity.\n\nFORWARD PASS — earliest times:\n  • EST (Earliest Start Time) of an activity = latest EFT of its predecessors.\n  • EFT (Earliest Finish Time) = EST + duration.\n  • Start at source with EST = 0; the EFT of the final activity = MINIMUM PROJECT DURATION.\n\nBACKWARD PASS — latest times:\n  • Set LFT (Latest Finish Time) of the final activity equal to its EFT.\n  • LST (Latest Start Time) = LFT − duration.\n  • Working backwards: LFT of an activity = minimum LST of its successors.\n\nFLOAT (slack):\n  • FLOAT = LST − EST (equivalently LFT − EFT).\n  • Activities with FLOAT = 0 are CRITICAL — any delay extends the project.\n  • The CRITICAL PATH is a chain of critical activities from source to sink. Its total duration = project duration.\n\nUSES:\n  • Identify the activities to monitor most carefully.\n  • Estimate how much non-critical activities can slip without affecting completion.",
      keyPoints: [
        "Forward pass gives EST and EFT",
        "Backward pass gives LST and LFT",
        "Float = LST − EST",
        "Critical activities have float 0",
        "Critical path = longest path = project duration",
      ],
      workedExamples: [
        {
          problem: "Activities A(3), B(2), C(4 after A), D(2 after B), E(1 after C, D). Find project duration and critical path.",
          steps: [
            "Forward: EST_A=0, EFT_A=3; EST_B=0, EFT_B=2; EST_C=3, EFT_C=7; EST_D=2, EFT_D=4; EST_E=max(7,4)=7, EFT_E=8",
            "Project duration = 8",
            "Backward: LFT_E=8, LST_E=7; LFT_C=7, LST_C=3; LFT_D=7, LST_D=5; LFT_A=3, LST_A=0; LFT_B=5, LST_B=3",
            "Floats: A=0, B=3, C=0, D=3, E=0",
            "Critical path: A → C → E",
          ],
          answer: "Project duration 8; critical path A-C-E.",
        },
      ],
      tips: [
        "Box the float column — examiners want it visible",
        "Critical path may not be unique if floats tie",
      ],
      definitions: [
        { term: "EST", meaning: "Earliest start time of an activity." },
        { term: "LST", meaning: "Latest start time without delaying the project." },
        { term: "Float", meaning: "Allowable delay for a non-critical activity." },
        { term: "Critical path", meaning: "Longest path through the network; sets project duration." },
      ],
      formulas: [
        { name: "Float", formula: "Float = LST − EST = LFT − EFT" },
        { name: "Project duration", formula: "EFT of final activity" },
      ],
      examQuestion: {
        problem:
          "Activities P(4), Q(3), R(5 after P), S(2 after Q), T(3 after R, S). Find duration and critical path.",
        solution: [
          "Forward: P EFT=4, Q EFT=3, R EST=4 EFT=9, S EST=3 EFT=5, T EST=max(9,5)=9 EFT=12",
          "Duration = 12",
          "Backward: T LFT=12 LST=9; R LFT=9 LST=4; S LFT=9 LST=7; P LFT=4 LST=0; Q LFT=7 LST=4",
          "Floats: P=0, Q=4, R=0, S=4, T=0",
          "Critical path: P-R-T",
        ],
        answer: "Project duration = 12; critical path P-R-T.",
        marks: 4,
      },
      commonErrors: [
        "Using max instead of min in the backward pass (or vice versa)",
        "Forgetting to take max of predecessors' EFTs",
        "Calling a path with one float-zero activity 'critical'",
      ],
      summary: [
        "Forward/backward passes find timing",
        "Critical activities have zero float",
        "Critical path equals minimum project duration",
      ],
      quiz: [
        {
          question: "Float of a critical activity equals:",
          options: ["0", "Its duration", "EST", "LFT"],
          correctAnswer: 0,
          explanation: "Any delay would extend the project.",
        },
        {
          question: "Project duration equals:",
          options: ["Sum of all durations", "Longest path through the network", "Shortest path", "Average duration"],
          correctAnswer: 1,
          explanation: "Critical path is the longest from source to sink.",
        },
        {
          question: "EST of an activity equals:",
          options: ["Min EFT of predecessors", "Max EFT of predecessors", "Sum of predecessors' floats", "Its duration"],
          correctAnswer: 1,
          explanation: "It cannot start until all predecessors are finished.",
        },
      ],
    },
  ],

  // ─── 14E: Crashing ─────────────────────────────────────────────────
  "y12g-ch14-14e-crashing": [
    {
      title: "Crashing — Reducing Project Duration",
      explanation:
        "CRASHING is the process of REDUCING the duration of a project by shortening individual activity times — usually at extra cost.\n\nBASIC RULE: only crashing CRITICAL activities can shorten the project, because non-critical activities have float and reducing them does not change the longest path.\n\nSTANDARD APPROACH:\n  1. Identify the critical path and project duration.\n  2. List the cost per unit time saved (e.g. $/day) for crashable activities.\n  3. Choose the CHEAPEST critical activity to crash.\n  4. Reduce by one unit (or as allowed); recompute critical path — it may CHANGE.\n  5. Repeat until the desired duration is reached or no further crashing is possible.\n\nIMPORTANT WARNINGS:\n  • If multiple critical paths exist, you may need to crash one activity on EACH simultaneously (or one shared activity).\n  • A non-critical activity may BECOME critical after crashing — recheck floats after each step.\n  • Each activity has a minimum 'crash time' it cannot fall below.\n\nQUESTIONS often ask for the minimum cost to achieve a specified duration.",
      keyPoints: [
        "Only crash critical activities",
        "Pick the cheapest available crash each step",
        "Recompute the critical path after every change",
        "Activities have a minimum crash time",
      ],
      workedExamples: [
        {
          problem:
            "Critical path A-C-E with durations 3, 4, 1 (total 8). Crash costs per day: A=$200, C=$150, E=$300. Find cheapest way to reduce duration to 6.",
          steps: [
            "Need to remove 2 days from critical path",
            "Cheapest = C ($150). Reduce C by 1 → duration 7",
            "Recheck critical path: still A-C-E (assuming no new path emerges)",
            "Crash C again → duration 6",
            "Total extra cost = 2 × $150 = $300",
          ],
          answer: "Crash C by 2 days; extra cost $300.",
        },
      ],
      tips: [
        "After each crash, run the forward/backward passes again",
        "If a parallel path becomes critical, you may need to crash both",
      ],
      definitions: [
        { term: "Crash time", meaning: "Minimum possible duration of an activity." },
        { term: "Crash cost", meaning: "Extra cost per unit of time saved." },
      ],
      examQuestion: {
        problem:
          "Project duration 14 days. Critical path P-Q-R with crash costs $50, $80, $40 per day. Each activity can be crashed by at most 2 days. Find minimum extra cost to finish in 11 days.",
        solution: [
          "Need to save 3 days",
          "Cheapest first: R = $40/day, max 2 days → save 2 days, cost $80",
          "Next cheapest: P = $50/day, max 2 days → save 1 day, cost $50",
          "Recheck: no parallel path interferes",
          "Total cost = $80 + $50 = $130",
        ],
        answer: "$130 extra cost; new duration = 11 days.",
        marks: 3,
      },
      commonErrors: [
        "Crashing a non-critical activity (no benefit)",
        "Forgetting an activity's crash limit",
        "Not rechecking the critical path after each step",
      ],
      summary: [
        "Crash the cheapest critical activity each step",
        "Recheck critical path constantly",
        "Stop at target duration or limit",
      ],
      quiz: [
        {
          question: "Crashing a non-critical activity:",
          options: ["Saves money", "Reduces project duration", "Has no effect on duration", "Always helps"],
          correctAnswer: 2,
          explanation: "Only critical activities determine project length.",
        },
        {
          question: "Choose which critical activity to crash:",
          options: ["Most expensive", "Cheapest per unit time", "Longest", "Random"],
          correctAnswer: 1,
          explanation: "Lower cost per day saved minimises total cost.",
        },
        {
          question: "After crashing, the critical path:",
          options: ["Cannot change", "May change", "Always disappears", "Becomes a cycle"],
          correctAnswer: 1,
          explanation: "A previously non-critical path can become critical.",
        },
      ],
    },
  ],

  // ─── 14 Review ─────────────────────────────────────────────────────
  "y12g-ch14-review": [
    {
      title: "Chapter 14 Review — Flow, Matching and Scheduling",
      explanation:
        "This review consolidates Chapter 14.\n\nKEY METHODS\n  • FLOW: find augmenting paths, send bottleneck flow, repeat; verify with min cut.\n  • MATCHING: pair up bipartite vertices using inspection or augmenting paths.\n  • PRECEDENCE: build an activity network with dummies as needed.\n  • SCHEDULING: forward and backward passes give EST, EFT, LST, LFT, float.\n  • CRITICAL PATH: chain of zero-float activities; sets project duration.\n  • CRASHING: shorten by reducing cheapest critical activity, recheck path.\n\nINTERPRETATION matters in every part: state your answer in real units (litres, dollars, days, jobs).",
      keyPoints: [
        "Pick the right tool: flow, matching, or scheduling",
        "Use inspection methods cleanly and show working",
        "Verify with cuts or recomputation",
        "Always state the practical meaning",
      ],
      workedExamples: [
        {
          problem: "A 5-activity project has critical path A-C-E (duration 12). Crashing A by 1 day costs $60; crashing C by 1 day costs $40; E cannot be crashed. Activity B parallels A-C with duration 9. Find cheapest way to finish in 10 days.",
          steps: [
            "Need to save 2 days from critical path",
            "Crash C by 1 day (cheapest): cost $40, duration 11; check: parallel path B+E still 9+1=10? recompute",
            "Crash C by another day: cost $40, duration 10. But check parallel path: if B+E ≥ 10, parallel path becomes critical",
            "Assuming parallel path = 10 (so still satisfied), total cost = $80",
          ],
          answer: "Cheapest cost ≈ $80 (subject to parallel path check).",
        },
      ],
      tips: [
        "Recompute after each crashing step",
        "When a cut equals your flow, you have proven the maximum",
      ],
      summary: [
        "Flow, matching and scheduling are the decision-maths trio",
        "Critical path drives crashing",
        "Always interpret in context",
      ],
      quiz: [
        {
          question: "Maximum flow in a network equals:",
          options: ["Largest capacity", "Min cut", "Sum of all capacities", "Number of paths"],
          correctAnswer: 1,
          explanation: "Max-flow min-cut theorem.",
        },
        {
          question: "Float of a non-critical activity is:",
          options: ["Negative", "Zero", "Positive", "Always 1"],
          correctAnswer: 2,
          explanation: "Non-critical activities have spare time.",
        },
        {
          question: "Crashing aims to:",
          options: ["Increase cost only", "Shorten project duration", "Add activities", "Lengthen the project"],
          correctAnswer: 1,
          explanation: "Reduce the project's overall time at extra cost.",
        },
      ],
    },
  ],
};
