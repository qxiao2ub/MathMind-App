import type { TopicLessonsMap } from "./topicLessons";

// Year 12 General Mathematics — Chapter 15: Revision of Networks and Decision Mathematics (VCE Unit 4)

export const year12GeneralCh15Lessons: TopicLessonsMap = {
  // ─── 15A: Exam 1 Style ─────────────────────────────────────────────
  "y12g-ch15-15a-exam1": [
    {
      title: "Exam 1 Style Questions — Networks (Technology Free)",
      explanation:
        "Exam 1 of VCE General Mathematics tests networks and decision mathematics WITHOUT a calculator. Questions are short, focused, and reward clear setting out.\n\nWHAT GETS TESTED:\n  • Reading a graph/network and identifying degrees, cycles, paths.\n  • Constructing or interpreting a small adjacency matrix.\n  • Determining whether an Euler path/circuit exists from degrees.\n  • Performing Dijkstra's algorithm on small networks (up to 5–6 vertices).\n  • Applying Prim or Kruskal to find an MST and stating its total weight.\n  • Reading an activity network and identifying the critical path by inspection.\n  • Doing simple matching for 2–3 workers/tasks.\n\nKEY EXAM 1 STRATEGIES:\n  • Use a TABLE for Dijkstra: vertex | tentative | permanent.\n  • For MST, write the SORTED edge list and tick chosen edges.\n  • For critical path, list each path and pick the longest.\n  • Always include a final sentence: 'The shortest distance is …', 'The minimum cable is …', 'The critical path is … with duration …'.",
      keyPoints: [
        "Show a Dijkstra label table — examiners reward method",
        "Sort edges before Kruskal",
        "List all source-to-sink paths to find critical",
        "End with a sentence answer",
      ],
      workedExamples: [
        {
          problem:
            "Network with edges AB=2, AC=4, BC=1, BD=5, CD=2. Use Dijkstra to find the shortest path A → D.",
          steps: [
            "Initial: A=0, B=∞, C=∞, D=∞",
            "Permanent A. Update B=2, C=4",
            "Permanent B (2). Update C=min(4,2+1)=3, D=2+5=7",
            "Permanent C (3). Update D=min(7,3+2)=5",
            "Permanent D (5). Done",
            "Path A-B-C-D length 5",
          ],
          answer: "Shortest distance A→D = 5 via A-B-C-D.",
        },
        {
          problem:
            "Activities A(3), B(2 after A), C(4 after A), D(2 after B, C). Find critical path by inspection.",
          steps: [
            "Path 1: A-B-D = 3+2+2 = 7",
            "Path 2: A-C-D = 3+4+2 = 9",
            "Critical path = A-C-D, duration 9",
          ],
          answer: "Critical path A-C-D; duration 9.",
        },
      ],
      tips: [
        "Practise Dijkstra until you can do it in under 2 minutes for 5-vertex networks",
        "Underline final answers",
      ],
      examQuestion: {
        problem:
          "Five towns A, B, C, D, E. Edge weights: AB=3, AC=2, BC=4, BD=5, CE=6, DE=1. Find the minimum cable to connect all towns.",
        solution: [
          "Sort: DE=1, AC=2, AB=3, BC=4, BD=5, CE=6",
          "Take DE (1)",
          "Take AC (2)",
          "Take AB (3)",
          "Skip BC (4): forms cycle A-B-C",
          "Take BD (5): joins {A,B,C} to {D,E}",
          "Total = 1+2+3+5 = 11",
        ],
        answer: "Minimum cable length = 11 km.",
        marks: 3,
      },
      commonErrors: [
        "Choosing 'shortest looking' route on the diagram instead of using algorithm",
        "Adding cycle-forming edges in Kruskal",
        "Confusing Euler with Hamilton",
      ],
      summary: [
        "Use algorithms cleanly with tables",
        "State final answer in context",
        "Watch for cycles and dummy activities",
      ],
      quiz: [
        {
          question: "Dijkstra finds:",
          options: ["MST", "Shortest path", "Max flow", "Hamilton cycle"],
          correctAnswer: 1,
          explanation: "Dijkstra computes shortest distances from a chosen source.",
        },
        {
          question: "MST of n vertices has how many edges?",
          options: ["n", "n − 1", "n + 1", "2n"],
          correctAnswer: 1,
          explanation: "A tree on n vertices has n − 1 edges.",
        },
        {
          question: "Critical path is:",
          options: ["Shortest path", "Longest path through activity network", "Smallest cycle", "Bipartite matching"],
          correctAnswer: 1,
          explanation: "It determines minimum project duration.",
        },
      ],
    },
  ],

  // ─── 15B: Exam 2 Style ─────────────────────────────────────────────
  "y12g-ch15-15b-exam2": [
    {
      title: "Exam 2 Style Questions — Networks (Technology Active)",
      explanation:
        "Exam 2 questions on networks are LONGER and connect several skills. CAS may be used, but most network methods are still done by inspection — the calculator helps with arithmetic and storing matrices.\n\nTYPICAL EXAM 2 STRUCTURE:\n  (a) Short setup question (degree, edge count, draw a small network).\n  (b) Apply Dijkstra to find a shortest route.\n  (c) Construct an MST and quote total cost.\n  (d) Build an activity network from a precedence table.\n  (e) Compute EST, LFT, float, identify critical path.\n  (f) Crash the project to a target duration; state minimum extra cost.\n  (g) Maximum flow scenario or matching question.\n\nIN EVERY PART, communicate in the language of the scenario: 'minimum cable length', 'fastest delivery time', 'maximum number of trucks per hour', 'minimum total wages'.",
      keyPoints: [
        "Plan setting-out before computing",
        "Use CAS to store adjacency or transition matrices when relevant",
        "Recompute critical path after every crash",
        "Communicate clearly with units",
      ],
      workedExamples: [
        {
          problem:
            "A delivery network has activities P(4), Q(2 after P), R(5 after P), S(3 after Q, R), T(2 after S). Find duration and critical path; then crash by 2 days at minimum cost given P=$60, R=$40, S=$50 per day.",
          steps: [
            "Forward: P EFT=4; Q EFT=6; R EFT=9; S EST=max(6,9)=9, EFT=12; T EFT=14",
            "Duration 14; critical path P-R-S-T",
            "Crash R by 1 day ($40): new duration 13; check critical path still P-R-S-T",
            "Crash S by 1 day ($50): new duration 12",
            "Total cost saved 2 days = $40 + $50 = $90",
          ],
          answer: "Duration 14; critical path P-R-S-T; crashing cost $90 to reach 12 days.",
        },
      ],
      tips: [
        "Always re-check the critical path after each crash",
        "Use a clear table for EST/LST/float",
      ],
      examQuestion: {
        problem:
          "A water network has source S, sink T, with capacities S→A=8, S→B=6, A→C=5, B→C=7, C→T=10. Find max flow and confirm with a cut.",
        solution: [
          "Path S-A-C-T: bottleneck min(8,5,10) = 5",
          "Path S-B-C-T: remaining edges; bottleneck min(6,7,5)=5 (CT residual 5)",
          "Total = 10",
          "Cut {CT}: capacity 10 → max flow ≤ 10 ✓",
        ],
        answer: "Max flow = 10 units; min cut {CT} = 10 units.",
        marks: 4,
      },
      commonErrors: [
        "Sending more flow than the bottleneck allows",
        "Not rechecking critical path after each crash",
        "Forgetting to verify max flow with a cut",
      ],
      summary: [
        "Exam 2 chains together several network skills",
        "Use CAS for arithmetic, not for the algorithm itself",
        "Always interpret final answers",
      ],
      quiz: [
        {
          question: "Maximum flow can be confirmed by:",
          options: ["Counting paths", "Finding a cut equal to it", "Adding all capacities", "Computing degree"],
          correctAnswer: 1,
          explanation: "Max-flow min-cut equality verifies the answer.",
        },
        {
          question: "After crashing, you must:",
          options: ["Stop", "Recheck the critical path", "Add float", "Remove activities"],
          correctAnswer: 1,
          explanation: "A new critical path may emerge.",
        },
        {
          question: "Project duration equals:",
          options: ["Sum of all durations", "Longest path through activity network", "Average duration", "Max float"],
          correctAnswer: 1,
          explanation: "Critical path = project duration.",
        },
      ],
    },
  ],
};
