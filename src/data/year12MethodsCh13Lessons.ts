import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 13: Discrete Random Variables and Their Probability Distributions

export const year12MethodsCh13Lessons: TopicLessonsMap = {
  // ─── 13A: Sample Spaces and Probability ────────────────────────────
  "y12m-ch13-13a-sample-spaces": [
    {
      title: "Sample Spaces and Probability",
      explanation:
        "Probability begins with a clear description of the SAMPLE SPACE — the complete set of possible outcomes of a random experiment. An EVENT is any subset of the sample space.\n\nFor equally likely outcomes, P(A) = |A|/|S|, where |A| counts the favourable outcomes and |S| counts all outcomes.\n\nGENERAL RULES OF PROBABILITY:\n  • 0 ≤ P(A) ≤ 1 for every event.\n  • P(S) = 1 (some outcome must occur).\n  • Complement: P(A') = 1 − P(A).\n  • Addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\n  • Mutually exclusive events: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).\n\nVENN DIAGRAMS and KARNAUGH (probability) TABLES are the standard tools for visualising P(A ∩ B), P(A ∪ B), P(A ∩ B') and so on. Translating words ('and', 'or', 'neither', 'at least one') into the correct set operation is one of the most common Exam 1 skills.",
      keyPoints: [
        "Sample space S lists every possible outcome",
        "Event A is a subset of S",
        "Equally likely: P(A) = |A|/|S|",
        "Addition rule subtracts the overlap once",
        "Mutually exclusive ⇒ no overlap ⇒ no subtraction",
      ],
      workedExamples: [
        {
          problem: "Two fair dice are rolled. Find P(sum = 7).",
          steps: [
            "Sample space size: 6 × 6 = 36",
            "Favourable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — six outcomes",
            "P = 6/36 = 1/6",
          ],
          answer: "P(sum = 7) = 1/6.",
        },
        {
          problem:
            "In a class P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. Find P(A ∪ B) and P(A ∩ B').",
          steps: [
            "Addition rule: P(A ∪ B) = 0.6 + 0.5 − 0.3 = 0.8",
            "P(A ∩ B') = P(A) − P(A ∩ B) = 0.6 − 0.3 = 0.3",
          ],
          answer: "P(A ∪ B) = 0.8; P(A ∩ B') = 0.3.",
        },
      ],
      tips: [
        "Always draw a Venn diagram for two-event problems",
        "Translate 'at least one' as P(A ∪ B), not P(A) + P(B)",
        "Use the complement rule when 'at least one' is awkward",
      ],
      definitions: [
        { term: "Sample space S", meaning: "Set of all possible outcomes of the experiment." },
        { term: "Event", meaning: "Subset of the sample space." },
        { term: "Mutually exclusive", meaning: "A and B cannot both occur: A ∩ B = ∅." },
        { term: "Complement A'", meaning: "All outcomes in S that are not in A." },
      ],
      formulas: [
        { name: "Probability of an event", formula: "P(A) = |A|/|S| (equally likely)" },
        { name: "Complement", formula: "P(A') = 1 − P(A)" },
        { name: "Addition rule", formula: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)" },
      ],
      examQuestion: {
        problem:
          "From a standard deck, one card is drawn. Find P(red OR a king).",
        solution: [
          "P(red) = 26/52, P(king) = 4/52, P(red ∩ king) = 2/52",
          "P(red ∪ king) = 26/52 + 4/52 − 2/52 = 28/52 = 7/13",
        ],
        answer: "7/13.",
        marks: 2,
      },
      commonErrors: [
        "Adding probabilities of overlapping events without subtracting the intersection",
        "Treating 'and' as union",
        "Confusing complement with mutually exclusive",
      ],
      summary: [
        "Define S clearly",
        "Use Venn diagrams for two events",
        "Apply addition rule and complement carefully",
      ],
      practice: [
        { question: "P(A) = 0.4, P(B) = 0.3, mutually exclusive. P(A ∪ B)?", answer: "0.7" },
        { question: "If P(A) = 0.7, find P(A').", answer: "0.3" },
      ],
      quiz: [
        {
          question: "P(A ∪ B) = P(A) + P(B) when:",
          options: ["A ⊂ B", "A and B are mutually exclusive", "A = B", "Always"],
          correctAnswer: 1,
          explanation: "No overlap means no subtraction.",
        },
        {
          question: "P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. P(A ∪ B) =",
          options: ["0.7", "0.9", "0.6", "0.5"],
          correctAnswer: 0,
          explanation: "0.5 + 0.4 − 0.2 = 0.7.",
        },
        {
          question: "Two coins tossed. P(at least one head) =",
          options: ["1/4", "1/2", "3/4", "1"],
          correctAnswer: 2,
          explanation: "1 − P(no heads) = 1 − 1/4 = 3/4.",
        },
      ],
    },
  ],

  // ─── 13B: Conditional Probability and Independence ─────────────────
  "y12m-ch13-13b-conditional": [
    {
      title: "Conditional Probability and Independence",
      explanation:
        "CONDITIONAL PROBABILITY measures the probability of A GIVEN that B has already occurred.\n\nFormally: P(A | B) = P(A ∩ B) / P(B), provided P(B) > 0.\n\nThis can be rearranged as the MULTIPLICATION RULE: P(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A).\n\nINDEPENDENCE: Events A and B are INDEPENDENT if knowing B has occurred does not change the probability of A. Equivalently:\n  • P(A | B) = P(A)\n  • P(A ∩ B) = P(A) · P(B)\n\nTREE DIAGRAMS are the workhorse for multi-stage experiments. Each branch carries a conditional probability, and the probability of any path is the product along the branches.\n\nLAW OF TOTAL PROBABILITY:\n  P(A) = P(A | B) · P(B) + P(A | B') · P(B').\n\nMutually exclusive ≠ independent. Mutually exclusive events with non-zero probability are NEVER independent because one occurring forces the other to not occur.",
      keyPoints: [
        "P(A | B) = P(A ∩ B)/P(B)",
        "Multiplication rule: P(A ∩ B) = P(B)·P(A|B)",
        "Independence: P(A ∩ B) = P(A)·P(B)",
        "Mutually exclusive ≠ independent",
        "Use tree diagrams for multi-stage problems",
      ],
      workedExamples: [
        {
          problem:
            "P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. Find P(A | B). Are A and B independent?",
          steps: [
            "P(A | B) = 0.2 / 0.4 = 0.5",
            "Test: P(A)·P(B) = 0.5 × 0.4 = 0.2 = P(A ∩ B) ✓",
            "Therefore A and B are independent.",
          ],
          answer: "P(A | B) = 0.5; A and B are independent.",
        },
        {
          problem:
            "A jar has 4 red and 6 blue marbles. Two are drawn WITHOUT replacement. P(both red)?",
          steps: [
            "P(R₁) = 4/10",
            "P(R₂ | R₁) = 3/9",
            "P(both red) = (4/10)(3/9) = 12/90 = 2/15",
          ],
          answer: "2/15.",
        },
        {
          problem:
            "A test for a disease is 95% accurate. Disease prevalence is 1%. If a person tests positive, what is the probability they actually have the disease?",
          steps: [
            "Let D = disease, T = positive test",
            "P(D) = 0.01, P(T|D) = 0.95, P(T|D') = 0.05",
            "P(T) = 0.95(0.01) + 0.05(0.99) = 0.0095 + 0.0495 = 0.059",
            "P(D | T) = P(T|D)P(D)/P(T) = 0.0095/0.059 ≈ 0.161",
          ],
          answer: "≈ 16.1%.",
        },
      ],
      tips: [
        "Always identify which event is the 'given'",
        "Drawing a tree diagram makes multiplication automatic",
        "Test independence by comparing P(A∩B) with P(A)P(B)",
      ],
      definitions: [
        { term: "Conditional probability", meaning: "P(A | B) = probability of A assuming B has occurred." },
        { term: "Independent events", meaning: "Events for which P(A | B) = P(A)." },
      ],
      formulas: [
        { name: "Conditional", formula: "P(A | B) = P(A ∩ B)/P(B)" },
        { name: "Multiplication rule", formula: "P(A ∩ B) = P(B)·P(A|B)" },
        { name: "Total probability", formula: "P(A) = P(A|B)P(B) + P(A|B')P(B')" },
        { name: "Independence test", formula: "P(A ∩ B) = P(A)·P(B)" },
      ],
      examQuestion: {
        problem:
          "Bag X has 3 red, 2 white. Bag Y has 1 red, 4 white. A bag is chosen at random and a ball drawn. Given the ball is red, find the probability it came from bag X.",
        solution: [
          "P(X) = P(Y) = 1/2",
          "P(R|X) = 3/5, P(R|Y) = 1/5",
          "P(R) = (1/2)(3/5) + (1/2)(1/5) = 4/10 = 2/5",
          "P(X | R) = P(R|X)P(X)/P(R) = (3/10)/(2/5) = 3/4",
        ],
        answer: "3/4.",
        marks: 4,
      },
      commonErrors: [
        "Confusing P(A | B) with P(B | A)",
        "Multiplying probabilities without checking for independence",
        "Using replacement formulas when sampling without replacement",
      ],
      summary: [
        "Conditional probability rescales the sample space to B",
        "Tree diagrams make multi-stage problems visual",
        "Independence is a multiplicative property, not a 'no overlap' property",
      ],
      practice: [
        { question: "P(A)=0.3, P(B)=0.5, independent. P(A∩B)?", answer: "0.15" },
        { question: "If P(A∩B) = 0.12 and P(B) = 0.4, find P(A|B).", answer: "0.3" },
      ],
      quiz: [
        {
          question: "If A and B are independent and P(A) = 0.4, P(B) = 0.5, then P(A ∩ B) =",
          options: ["0.9", "0.1", "0.2", "Cannot tell"],
          correctAnswer: 2,
          explanation: "0.4 × 0.5 = 0.2.",
        },
        {
          question: "P(A | B) = P(A ∩ B) ÷",
          options: ["P(A)", "P(B)", "P(A ∪ B)", "P(A')"],
          correctAnswer: 1,
          explanation: "Definition of conditional probability.",
        },
        {
          question: "Mutually exclusive non-zero events are:",
          options: ["Independent", "Never independent", "Sometimes independent", "Always equal"],
          correctAnswer: 1,
          explanation: "If A excludes B, knowing B occurred forces P(A|B) = 0 ≠ P(A).",
        },
      ],
    },
  ],

  // ─── 13C: Discrete Random Variables ────────────────────────────────
  "y12m-ch13-13c-discrete-rv": [
    {
      title: "Discrete Random Variables",
      explanation:
        "A RANDOM VARIABLE is a function from the sample space to the real numbers. A DISCRETE random variable X takes a countable set of values x₁, x₂, … each with probability p_i = P(X = x_i).\n\nThe table of values together with their probabilities is the PROBABILITY DISTRIBUTION of X. To be a valid distribution it must satisfy:\n  (i) 0 ≤ p_i ≤ 1 for each i.\n  (ii) Σ p_i = 1.\n\nFrom the distribution we can compute:\n  • P(X = a)\n  • P(X ≤ a) (cumulative probability)\n  • P(a < X ≤ b)\n  • Conditional probabilities P(X ≤ a | X ≥ b) using the conditional formula on these events.\n\nDistributions are presented either as a TABLE or as a PROBABILITY FUNCTION p(x). On Exam 2 you should enter the probability table into CAS to compute mean and variance quickly; on Exam 1 you do this by hand.",
      keyPoints: [
        "Probabilities sum to 1",
        "Each probability is in [0, 1]",
        "Cumulative probability adds all values up to a",
        "Use a clear table to set out the distribution",
      ],
      workedExamples: [
        {
          problem:
            "X has P(X = x) = kx for x = 1, 2, 3, 4. Find k and P(X ≥ 3).",
          steps: [
            "Σ kx = k(1+2+3+4) = 10k = 1 ⇒ k = 1/10",
            "P(X ≥ 3) = P(3) + P(4) = 3/10 + 4/10 = 7/10",
          ],
          answer: "k = 0.1; P(X ≥ 3) = 0.7.",
        },
        {
          problem:
            "Distribution: P(0)=0.1, P(1)=0.3, P(2)=0.4, P(3)=0.2. Find P(X ≥ 2 | X ≥ 1).",
          steps: [
            "P(X ≥ 1) = 0.3 + 0.4 + 0.2 = 0.9",
            "P(X ≥ 2 ∩ X ≥ 1) = P(X ≥ 2) = 0.6",
            "P(X ≥ 2 | X ≥ 1) = 0.6/0.9 = 2/3",
          ],
          answer: "2/3.",
        },
      ],
      tips: [
        "Always check Σ p_i = 1 before doing further calculations",
        "Set out a clear table — examiners reward presentation",
      ],
      definitions: [
        { term: "Discrete random variable", meaning: "A variable taking countably many real values, each with assigned probability." },
        { term: "Probability function", meaning: "The rule p(x) = P(X = x)." },
      ],
      formulas: [
        { name: "Validity", formula: "Σ p_i = 1, 0 ≤ p_i ≤ 1" },
        { name: "Cumulative", formula: "P(X ≤ a) = Σ_{x ≤ a} p(x)" },
      ],
      examQuestion: {
        problem:
          "X has probability function p(x) = c(4 − x) for x = 0, 1, 2, 3. Find c and P(X ≤ 2).",
        solution: [
          "p(0)=4c, p(1)=3c, p(2)=2c, p(3)=c; sum = 10c = 1 ⇒ c = 0.1",
          "P(X ≤ 2) = (4 + 3 + 2)c = 9c = 0.9",
        ],
        answer: "c = 0.1; P(X ≤ 2) = 0.9.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to verify probabilities sum to 1",
        "Confusing X ≤ a with X < a in discrete settings",
      ],
      summary: [
        "A discrete distribution is a table of values and probabilities summing to 1",
        "Cumulative probabilities require careful inclusion of endpoints",
      ],
      practice: [
        { question: "If p(1)=0.2, p(2)=0.5, p(3)=k, find k.", answer: "0.3" },
      ],
      quiz: [
        {
          question: "A valid probability distribution must have probabilities that:",
          options: ["sum to 0", "sum to 1", "are equal", "exceed 1"],
          correctAnswer: 1,
          explanation: "By definition of a probability distribution.",
        },
        {
          question: "If P(0)=0.2, P(1)=0.3, P(2)=0.5, then P(X ≤ 1) =",
          options: ["0.2", "0.3", "0.5", "0.8"],
          correctAnswer: 2,
          explanation: "0.2 + 0.3 = 0.5.",
        },
      ],
    },
  ],

  // ─── 13D: Mean, Variance and Standard Deviation ────────────────────
  "y12m-ch13-13d-mean-variance-sd": [
    {
      title: "Expected Value, Variance and Standard Deviation",
      explanation:
        "The EXPECTED VALUE (mean) of a discrete random variable X is the long-run average:\n  E(X) = μ = Σ x · p(x).\n\nThe VARIANCE measures the spread:\n  Var(X) = σ² = E(X²) − [E(X)]² = Σ x² · p(x) − μ².\n\nThe STANDARD DEVIATION is sd(X) = σ = √Var(X).\n\nLINEAR RULES for any constants a and b:\n  • E(aX + b) = a E(X) + b.\n  • Var(aX + b) = a² Var(X).\n  • sd(aX + b) = |a| · sd(X).\n\nFor any function g, E(g(X)) = Σ g(x) · p(x). In particular E(X²) is computed by squaring each x value and weighting by p(x).\n\nINTERPRETATION:\n  • μ is the centre of the distribution.\n  • σ measures how far typical values lie from μ.\n  • Adding a constant shifts the mean but does not change spread.",
      keyPoints: [
        "μ = Σ x p(x)",
        "Var = E(X²) − μ² (computational form)",
        "Var(aX + b) = a² Var(X) — constant b cancels",
        "sd(aX + b) = |a| sd(X)",
      ],
      workedExamples: [
        {
          problem:
            "X: P(0)=0.2, P(1)=0.5, P(2)=0.3. Find E(X), Var(X) and sd(X).",
          steps: [
            "μ = 0(0.2) + 1(0.5) + 2(0.3) = 1.1",
            "E(X²) = 0 + 0.5 + 4(0.3) = 0.5 + 1.2 = 1.7",
            "Var(X) = 1.7 − 1.21 = 0.49",
            "sd(X) = √0.49 = 0.7",
          ],
          answer: "E(X) = 1.1, Var(X) = 0.49, sd(X) = 0.7.",
        },
        {
          problem: "If E(X) = 5 and Var(X) = 4, find E(3X − 2) and Var(3X − 2).",
          steps: [
            "E(3X − 2) = 3·5 − 2 = 13",
            "Var(3X − 2) = 9 · 4 = 36",
          ],
          answer: "13 and 36.",
        },
      ],
      tips: [
        "Use the computational formula E(X²) − μ² — avoids subtraction errors",
        "Constants don't affect variance",
      ],
      definitions: [
        { term: "Expected value", meaning: "Probability-weighted average of all values of X." },
        { term: "Variance", meaning: "Average squared deviation from the mean." },
      ],
      formulas: [
        { name: "Mean", formula: "E(X) = Σ x · p(x)" },
        { name: "Variance (computational)", formula: "Var(X) = E(X²) − [E(X)]²" },
        { name: "Linear transformation", formula: "E(aX+b)=aE(X)+b; Var(aX+b)=a²Var(X)" },
      ],
      examQuestion: {
        problem:
          "X has P(−1)=0.3, P(0)=0.4, P(1)=0.3. Find E(X) and Var(X).",
        solution: [
          "μ = (−1)(0.3) + 0 + 1(0.3) = 0",
          "E(X²) = 1(0.3) + 0 + 1(0.3) = 0.6",
          "Var(X) = 0.6 − 0 = 0.6",
        ],
        answer: "E(X) = 0; Var(X) = 0.6.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting to square the mean in Var(X) = E(X²) − μ²",
        "Treating Var(aX + b) as a Var(X) instead of a² Var(X)",
        "Confusing standard deviation and variance",
      ],
      summary: [
        "Mean is the centre, variance is the spread",
        "Linear rules let you transform without recomputing the table",
      ],
      practice: [
        { question: "If E(X)=2 and Var(X)=5, find sd(2X+3).", answer: "2√5" },
      ],
      quiz: [
        {
          question: "Var(3X − 5) =",
          options: ["3 Var(X)", "9 Var(X) − 5", "9 Var(X)", "Var(X) − 5"],
          correctAnswer: 2,
          explanation: "Constants cancel; coefficient is squared.",
        },
        {
          question: "If μ = 4 and E(X²) = 20, then Var(X) =",
          options: ["4", "16", "20", "0"],
          correctAnswer: 0,
          explanation: "20 − 16 = 4.",
        },
      ],
    },
  ],

  // ─── Review of Chapter 13 ──────────────────────────────────────────
  "y12m-ch13-review": [
    {
      title: "Review of Chapter 13 — Discrete Random Variables",
      explanation:
        "This chapter introduced the formal language of probability — sample spaces, events, conditional probability, independence — and built the framework of a DISCRETE RANDOM VARIABLE with its probability distribution, mean and variance.\n\nMASTERY REQUIRES:\n  • Comfort with set operations (∪, ∩, complement) and their probability interpretations.\n  • Fluent use of tree diagrams, two-way tables and Venn diagrams.\n  • Confident calculation of P(A | B) and recognition of independence.\n  • Constructing probability distributions and verifying Σ p = 1.\n  • Calculating E(X), E(X²), Var(X), sd(X) by hand and on CAS.\n  • Applying linear rules E(aX + b) and Var(aX + b).\n\nThis chapter underpins Chapters 14–17 (binomial, continuous, normal and sampling), so revise it thoroughly.",
      keyPoints: [
        "Sum and complement laws",
        "Conditional and total probability",
        "Independence test",
        "Distribution validity",
        "Mean and variance, including transformation rules",
      ],
      workedExamples: [
        {
          problem:
            "X has p(x) = (x + 1)/10 for x = 0, 1, 2, 3. Compute E(X) and Var(X).",
          steps: [
            "Probabilities: 0.1, 0.2, 0.3, 0.4 — verify sum = 1",
            "μ = 0(0.1) + 1(0.2) + 2(0.3) + 3(0.4) = 2",
            "E(X²) = 0 + 0.2 + 1.2 + 3.6 = 5",
            "Var(X) = 5 − 4 = 1",
          ],
          answer: "E(X) = 2, Var(X) = 1.",
        },
      ],
      tips: [
        "Practise mixing tree diagrams with formal probability rules",
        "Use CAS lists for fast mean/variance computation in Exam 2",
      ],
      formulas: [
        { name: "Mean", formula: "E(X) = Σ x p(x)" },
        { name: "Variance", formula: "Var(X) = E(X²) − μ²" },
        { name: "Conditional", formula: "P(A | B) = P(A ∩ B)/P(B)" },
      ],
      examQuestion: {
        problem:
          "A coin is biased so P(H) = 2/3. It is tossed twice. Let X = number of heads. Tabulate the distribution and find E(X) and Var(X).",
        solution: [
          "P(X=0) = (1/3)² = 1/9",
          "P(X=1) = 2·(2/3)(1/3) = 4/9",
          "P(X=2) = (2/3)² = 4/9",
          "E(X) = 0(1/9) + 1(4/9) + 2(4/9) = 12/9 = 4/3",
          "E(X²) = 0 + 4/9 + 16/9 = 20/9",
          "Var(X) = 20/9 − (4/3)² = 20/9 − 16/9 = 4/9",
        ],
        answer: "E(X) = 4/3; Var(X) = 4/9.",
        marks: 5,
      },
      commonErrors: [
        "Forgetting independence assumptions",
        "Wrong direction in conditional probability",
        "Skipping the validity check Σ p = 1",
      ],
      summary: [
        "Master probability rules first",
        "Then build distributions, mean and variance",
        "Apply linear transformation rules carefully",
      ],
      practice: [
        { question: "Coin tossed thrice; X = heads. Find E(X) by hand.", answer: "1.5" },
      ],
      quiz: [
        {
          question: "Var(X) = 9; sd(X) = ?",
          options: ["3", "9", "81", "1.5"],
          correctAnswer: 0,
          explanation: "sd = √Var.",
        },
        {
          question: "If E(X) = 0 and E(X²) = 2 then Var(X) =",
          options: ["0", "2", "4", "1"],
          correctAnswer: 1,
          explanation: "Var = 2 − 0² = 2.",
        },
      ],
    },
  ],
};
