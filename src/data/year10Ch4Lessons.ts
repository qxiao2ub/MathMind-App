import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 4: Probability & Counting Techniques
// Full textbook-style lessons aligned to Victorian Curriculum Year 10 / 10A.

export const year10Ch4Lessons: TopicLessonsMap = {
  "y10-review-probability": [
    {
      title: "Sample Spaces, Events and Theoretical Probability",
      explanation:
        "OVERVIEW. Probability measures how likely an event is to occur on a scale from 0 (impossible) to 1 (certain). The sample space S is the set of all possible outcomes of an experiment, and an event A is a subset of S.\n\nSECTION A — THEORETICAL PROBABILITY. When all outcomes are equally likely:\n  P(A) = number of favourable outcomes / total number of outcomes = n(A) / n(S).\n\nSECTION B — KEY VOCABULARY. \n  • Trial: one performance of an experiment.\n  • Outcome: a single result of a trial.\n  • Event: a collection of one or more outcomes.\n  • Complement A′: every outcome NOT in A. P(A′) = 1 − P(A).\n\nSECTION C — IMPOSSIBLE / CERTAIN. P(impossible) = 0, P(certain) = 1, and 0 ≤ P(A) ≤ 1 always.",
      keyPoints: ["P(A) = n(A)/n(S)", "0 ≤ P(A) ≤ 1", "P(A′) = 1 − P(A)", "Sample space lists all outcomes"],
      workedExamples: [
        { problem: "A fair die is rolled. Find P(even).", steps: ["S = {1,2,3,4,5,6}, n(S) = 6", "Even = {2,4,6}, n(A) = 3", "P = 3/6 = 1/2"], answer: "1/2" },
        { problem: "A card is drawn from a standard 52-card deck. Find P(king).", steps: ["n(kings) = 4", "P = 4/52 = 1/13"], answer: "1/13" },
        { problem: "If P(rain) = 0.7, find P(no rain).", steps: ["Use complement: 1 − 0.7"], answer: "0.3" },
      ],
      tips: ["Always state the sample space first.", "Express probabilities as fractions in simplest form unless asked otherwise."],
      commonErrors: ["Listing outcomes that are not equally likely", "Confusing the event with its complement"],
      summary: ["EXAM INSIGHT: Most probability questions begin by clearly defining S and the favourable outcomes."],
      practice: [
        { question: "Two coins are tossed. Find P(two heads).", answer: "1/4" },
        { question: "P(A) = 3/8. Find P(A′).", answer: "5/8" },
        { question: "A bag has 5 red and 3 blue balls. Find P(blue).", answer: "3/8" },
      ],
      quiz: [
        { question: "A fair die is rolled. P(prime) = ?", options: ["1/2", "1/3", "2/3", "1/6"], correctAnswer: 0, explanation: "Primes on a die: 2, 3, 5 → 3/6 = 1/2." },
        { question: "If P(A) = 0.45, then P(A′) = ?", options: ["0.45", "0.55", "0.65", "1.45"], correctAnswer: 1, explanation: "1 − 0.45 = 0.55." },
      ],
    },
    {
      title: "Experimental Probability and Long-Run Frequency",
      explanation:
        "When outcomes are not equally likely or theory is unknown, we estimate probability from data:\n  Experimental P(A) = number of times A occurred / total trials.\n\nLAW OF LARGE NUMBERS. As the number of trials increases, experimental probability tends towards the true (theoretical) probability.",
      keyPoints: ["Experimental ≈ frequency / trials", "Accuracy improves with more trials", "Used for biased coins, surveys, real data"],
      workedExamples: [
        { problem: "A drawing pin lands point-up 37 times in 50 trials. Estimate P(point-up).", steps: ["P ≈ 37/50 = 0.74"], answer: "0.74" },
        { problem: "Out of 200 cars surveyed, 86 were SUVs. Estimate P(SUV).", steps: ["86/200 = 0.43"], answer: "0.43" },
      ],
      tips: ["More trials → closer to true probability."],
      commonErrors: ["Treating small samples as definitive"],
      summary: ["EXAM INSIGHT: Watch for questions that mix experimental and theoretical probability."],
      practice: [
        { question: "A spinner lands on red 18 times in 60 spins. Estimate P(red).", answer: "0.3" },
      ],
      quiz: [
        { question: "120 spins gave 84 wins. Experimental P(win) = ?", options: ["0.84", "0.7", "0.42", "0.6"], correctAnswer: 1, explanation: "84/120 = 0.7." },
      ],
    },
    {
      title: "Mini-Assessment: Probability Foundations",
      explanation: "Consolidate sample spaces, theoretical probability, complements and experimental estimation. MASTERY CHECKLIST: define sample space, compute P(A), use complement, interpret experimental data.",
      keyPoints: ["Probability = favourable/total", "Complement rule", "Experimental probability"],
      workedExamples: [
        { problem: "A die is rolled twice. Find P(sum = 7).", steps: ["Favourable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6", "Total: 36", "P = 6/36 = 1/6"], answer: "1/6" },
      ],
      tips: ["Use a 6×6 grid for two-dice problems."],
      commonErrors: ["Forgetting (a,b) ≠ (b,a) when listing outcomes"],
      summary: ["MASTERY: Listing or counting outcomes is half the battle."],
      practice: [{ question: "Two dice rolled. P(double) = ?", answer: "1/6" }],
      quiz: [
        { question: "Two dice. P(sum = 12) = ?", options: ["1/36", "1/6", "1/12", "2/36"], correctAnswer: 0, explanation: "Only (6,6) succeeds: 1/36." },
      ],
    },
  ],

  "y10-venn-two-way": [
    {
      title: "Venn Diagrams for Two Events",
      explanation:
        "A Venn diagram visualises sets and overlaps. For two events A and B inside a sample space S, the overlap A ∩ B contains outcomes in BOTH events. The union A ∪ B is everything in A or B (or both).\n\nKEY REGIONS.\n  • A only: A ∩ B′\n  • B only: B ∩ A′\n  • Both: A ∩ B\n  • Neither: A′ ∩ B′",
      keyPoints: ["∩ = intersection (AND)", "∪ = union (OR)", "Place 'both' first, then 'A only' = n(A) − n(both)"],
      workedExamples: [
        { problem: "In a class of 30: 18 like maths, 14 like science, 8 like both. Draw the Venn diagram.", steps: ["Both: 8", "Maths only: 18 − 8 = 10", "Science only: 14 − 8 = 6", "Neither: 30 − (10+8+6) = 6"], answer: "Maths only 10, Both 8, Science only 6, Neither 6" },
      ],
      tips: ["ALWAYS fill the intersection first."],
      commonErrors: ["Double counting the overlap"],
      summary: ["EXAM INSIGHT: Venn diagrams answer 'how many' and 'probability' questions efficiently."],
      practice: [
        { question: "In 40 people: 22 swim, 18 cycle, 10 both. How many do neither?", answer: "10" },
      ],
      quiz: [
        { question: "n(A) = 12, n(B) = 15, n(A∩B) = 5. n(A∪B) = ?", options: ["22", "27", "32", "20"], correctAnswer: 0, explanation: "12 + 15 − 5 = 22." },
      ],
    },
    {
      title: "Two-Way Tables",
      explanation:
        "A two-way table classifies data by two categorical variables. Row totals + column totals = grand total. Each cell can be converted to a probability by dividing by the grand total.",
      keyPoints: ["Row + column = grand total", "Probability = cell / grand total", "Marginal totals appear on edges"],
      workedExamples: [
        { problem: "Of 100 students: 40 boys 25 wear glasses; 60 girls 18 wear glasses. Find P(girl AND no glasses).", steps: ["Girls no glasses: 60 − 18 = 42", "P = 42/100 = 0.42"], answer: "0.42" },
      ],
      tips: ["Check that all cells sum to the grand total."],
      commonErrors: ["Mixing rows and columns when computing marginals"],
      summary: ["EXAM INSIGHT: Two-way tables and Venn diagrams encode the same information."],
      practice: [
        { question: "Using the table above: P(boy with glasses) = ?", answer: "0.25" },
      ],
      quiz: [
        { question: "Total = 200, A∩B = 50. P(A∩B) = ?", options: ["0.5", "0.25", "0.1", "0.4"], correctAnswer: 1, explanation: "50/200 = 0.25." },
      ],
    },
    {
      title: "Mini-Assessment: Venn & Two-Way",
      explanation: "MASTERY CHECKLIST: build Venn diagram from worded data; convert between Venn and two-way table; compute probabilities from each region.",
      keyPoints: ["Fill overlap first", "Marginal totals", "P(region) = n(region)/n(S)"],
      workedExamples: [{ problem: "20% of 50 people speak both French and Italian. Both languages spoken by how many?", steps: ["20% of 50 = 10"], answer: "10" }],
      tips: ["Convert percentages to counts before drawing."],
      commonErrors: ["Confusing percentage with count"],
      summary: ["MASTERY: Region-by-region accounting prevents double counts."],
      practice: [{ question: "n(S) = 100, A only = 30, B only = 25, both = 15. Neither = ?", answer: "30" }],
      quiz: [
        { question: "Two-way table: 80 total, 50 in row A, 60 in column X. n(A∩X) = 35. n(A′∩X′) = ?", options: ["5", "10", "20", "25"], correctAnswer: 0, explanation: "A only = 15, X only = 25, both = 35; neither = 80−75 = 5." },
      ],
    },
  ],

  "y10-addition-rule": [
    {
      title: "The Addition Rule for Probability",
      explanation:
        "For ANY two events A and B:\n  P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\n\nThe subtraction prevents double counting outcomes in both events. When A and B are MUTUALLY EXCLUSIVE (cannot occur together), P(A ∩ B) = 0 and the formula reduces to P(A ∪ B) = P(A) + P(B).",
      keyPoints: ["P(A∪B) = P(A) + P(B) − P(A∩B)", "Mutually exclusive: P(A∩B)=0", "Subtract overlap to avoid double count"],
      workedExamples: [
        { problem: "P(A) = 0.4, P(B) = 0.3, P(A∩B) = 0.1. Find P(A∪B).", steps: ["= 0.4 + 0.3 − 0.1"], answer: "0.6" },
        { problem: "Card from a deck: P(king or heart)?", steps: ["P(K) = 4/52, P(H) = 13/52, P(K∩H) = 1/52", "= 16/52 = 4/13"], answer: "4/13" },
      ],
      tips: ["Check: are the events mutually exclusive?"],
      commonErrors: ["Forgetting to subtract the overlap"],
      summary: ["EXAM INSIGHT: A king-and-heart style question is a classic."],
      practice: [
        { question: "P(A) = 0.5, P(B) = 0.4, P(A∩B) = 0.2. P(A∪B) = ?", answer: "0.7" },
      ],
      quiz: [
        { question: "Mutually exclusive: P(A) = 0.3, P(B) = 0.45. P(A∪B) = ?", options: ["0.135", "0.75", "0.15", "0.6"], correctAnswer: 1, explanation: "Add directly: 0.75." },
      ],
    },
    {
      title: "Using the Addition Rule with Venn Diagrams",
      explanation: "Apply the addition rule via Venn regions. If the four region counts are known, P(A∪B) is simply the sum of the three regions A only + both + B only divided by n(S).",
      keyPoints: ["Combine Venn regions", "Subtract overlap when adding marginals"],
      workedExamples: [
        { problem: "n(S) = 60, A only = 14, both = 10, B only = 16. P(A∪B)?", steps: ["= (14+10+16)/60", "= 40/60 = 2/3"], answer: "2/3" },
      ],
      tips: ["Add the three coloured regions, NOT n(A) + n(B)."],
      commonErrors: ["Adding marginals without subtracting the overlap"],
      summary: ["EXAM INSIGHT: Visualise before computing."],
      practice: [{ question: "n(S) = 50, A only = 10, both = 5, B only = 12. P(A∪B)?", answer: "27/50" }],
      quiz: [
        { question: "A only 8, both 4, B only 6, neither 2. P(A∪B) = ?", options: ["18/20", "9/10", "Both", "1/2"], correctAnswer: 2, explanation: "(8+4+6)/20 = 18/20 = 9/10." },
      ],
    },
    {
      title: "Mini-Assessment: Addition Rule",
      explanation: "MASTERY CHECKLIST: identify mutual exclusivity, apply the addition rule, work from Venn or two-way tables.",
      keyPoints: ["Inclusion–exclusion", "Mutually exclusive case"],
      workedExamples: [{ problem: "P(A) = 0.6, P(B) = 0.5, P(A∪B) = 0.8. Find P(A∩B).", steps: ["0.8 = 0.6 + 0.5 − x", "x = 0.3"], answer: "0.3" }],
      tips: ["Rearrange the addition rule to find any unknown."],
      commonErrors: ["Sign errors when transposing"],
      summary: ["MASTERY: Pair the formula with a Venn sketch."],
      practice: [{ question: "P(A∪B)=0.9, P(A)=0.5, P(A∩B)=0.2. P(B)=?", answer: "0.6" }],
      quiz: [{ question: "P(A)=0.4, P(B)=0.5, P(A∩B)=0. Then events are…", options: ["Independent", "Mutually exclusive", "Both", "Neither"], correctAnswer: 1, explanation: "Empty intersection means mutually exclusive." }],
    },
  ],

  "y10-conditional-probability": [
    {
      title: "Conditional Probability P(A|B)",
      explanation:
        "Conditional probability measures the probability of A GIVEN that B has occurred:\n  P(A | B) = P(A ∩ B) / P(B),  provided P(B) > 0.\n\nIntuitively, the sample space shrinks to just the outcomes where B occurred.",
      keyPoints: ["P(A|B) = P(A∩B)/P(B)", "Reduce sample space to B", "P(A|B) ≠ P(B|A) in general"],
      workedExamples: [
        { problem: "P(A∩B) = 0.2, P(B) = 0.5. Find P(A|B).", steps: ["= 0.2/0.5"], answer: "0.4" },
        { problem: "Two-way table: 30 students, 18 study maths, 12 study both maths and physics. P(physics | maths)?", steps: ["= 12/18 = 2/3"], answer: "2/3" },
      ],
      tips: ["Condition = denominator."],
      commonErrors: ["Putting the wrong event in the denominator"],
      summary: ["EXAM INSIGHT: Read 'given that' as 'divide by'."],
      practice: [{ question: "P(A∩B) = 0.15, P(B) = 0.3. P(A|B)?", answer: "0.5" }],
      quiz: [{ question: "P(rain) = 0.4, P(rain∩cold) = 0.1. P(rain | cold) when P(cold)=0.25 is…", options: ["0.4", "0.25", "0.4", "0.4"], correctAnswer: 0, explanation: "0.1/0.25 = 0.4." }],
    },
    {
      title: "Conditional Probability from Tables and Venns",
      explanation: "Often the easiest approach is to identify the row, column or Venn region representing the condition, then divide the favourable count by that conditional total.",
      keyPoints: ["Restrict attention to the condition", "Use cell counts directly"],
      workedExamples: [
        { problem: "Of 100 people, 60 are male; 25 of those males own a bike. P(bike | male)?", steps: ["= 25/60 = 5/12"], answer: "5/12" },
      ],
      tips: ["Highlight the conditional row/column on your diagram."],
      commonErrors: ["Dividing by the grand total instead of the condition's marginal"],
      summary: ["EXAM INSIGHT: 'Of those who…' phrases trigger conditional probability."],
      practice: [{ question: "Of 80 voters, 50 are women; 30 voted yes. P(yes | woman)?", answer: "3/5" }],
      quiz: [{ question: "Out of 40 dogs, 25 are large; 10 of those are friendly. P(friendly | large)?", options: ["10/40", "10/25", "25/40", "10/15"], correctAnswer: 1, explanation: "10/25 = 2/5." }],
    },
    {
      title: "Mini-Assessment: Conditional Probability",
      explanation: "MASTERY CHECKLIST: use the formula, read 'given' phrasing, work from tables and Venns, compute reverse conditionals.",
      keyPoints: ["Formula", "Reduced sample space"],
      workedExamples: [{ problem: "P(A) = 0.5, P(B|A) = 0.4. Find P(A∩B).", steps: ["P(A∩B) = P(A)·P(B|A) = 0.5·0.4"], answer: "0.2" }],
      tips: ["Multiplication rule: P(A∩B) = P(A)·P(B|A)."],
      commonErrors: ["Confusing P(A|B) with P(B|A)"],
      summary: ["MASTERY: Conditional probability underpins independence and Bayes' rule."],
      practice: [{ question: "P(B) = 0.6, P(A∩B) = 0.18. P(A|B)?", answer: "0.3" }],
      quiz: [{ question: "P(A|B) = 0.5, P(B) = 0.4. P(A∩B)?", options: ["0.2", "0.9", "0.1", "0.5"], correctAnswer: 0, explanation: "0.5·0.4 = 0.2." }],
    },
  ],

  "y10-tree-diagrams": [
    {
      title: "Tree Diagrams for Multi-Stage Experiments",
      explanation:
        "Tree diagrams display sequential events. Each branch shows an outcome and its probability. To find the probability of a path: MULTIPLY along the branches. To find the probability of an event consisting of several paths: ADD the path probabilities.",
      keyPoints: ["Multiply ALONG branches", "Add ACROSS paths", "Branch probabilities at each node sum to 1"],
      workedExamples: [
        { problem: "Two coins tossed. P(at least one head)?", steps: ["P(HH)=1/4, P(HT)=1/4, P(TH)=1/4, P(TT)=1/4", "At least 1 H = 1 − P(TT) = 1 − 1/4"], answer: "3/4" },
        { problem: "Bag: 3 red, 2 blue, drawn with replacement. P(RR)?", steps: ["3/5 · 3/5"], answer: "9/25" },
      ],
      tips: ["Use complement when 'at least one' appears."],
      commonErrors: ["Adding instead of multiplying along a single path"],
      summary: ["EXAM INSIGHT: Always label branch probabilities and outcomes."],
      practice: [{ question: "Two-stage with replacement: P(red) = 0.6 each. P(both red)?", answer: "0.36" }],
      quiz: [{ question: "Two coins: P(exactly one head) = ?", options: ["1/4", "1/2", "3/4", "1"], correctAnswer: 1, explanation: "HT and TH: 1/4 + 1/4." }],
    },
    {
      title: "Trees with and without Replacement",
      explanation:
        "WITH replacement: the second branch probabilities are unchanged.\n\nWITHOUT replacement: the totals reduce after the first draw, so the second branch probabilities depend on the first outcome (CONDITIONAL).",
      keyPoints: ["Without replacement → conditional probabilities", "Track totals carefully"],
      workedExamples: [
        { problem: "Bag: 4 red, 3 green, drawn WITHOUT replacement. P(both red)?", steps: ["First red: 4/7", "Second red: 3/6", "Multiply: 12/42 = 2/7"], answer: "2/7" },
      ],
      tips: ["Reduce numerator and denominator by 1 after each draw."],
      commonErrors: ["Forgetting to reduce totals when drawing without replacement"],
      summary: ["EXAM INSIGHT: 'Without replacement' is a probability red flag."],
      practice: [{ question: "5 white, 3 black, no replacement. P(WW)?", answer: "5/14" }],
      quiz: [{ question: "Bag of 6 (4 red, 2 blue). No replacement. P(both blue)?", options: ["1/15", "1/9", "2/15", "1/3"], correctAnswer: 0, explanation: "(2/6)(1/5) = 2/30 = 1/15." }],
    },
    {
      title: "Mini-Assessment: Tree Diagrams",
      explanation: "MASTERY CHECKLIST: construct tree, multiply along branches, add across paths, distinguish with/without replacement.",
      keyPoints: ["Conditional branches", "Path arithmetic"],
      workedExamples: [{ problem: "Three-coin toss. P(exactly 2 heads)?", steps: ["HHT, HTH, THH each 1/8", "Sum = 3/8"], answer: "3/8" }],
      tips: ["List paths systematically."],
      commonErrors: ["Forgetting some paths"],
      summary: ["MASTERY: Trees scale to many stages."],
      practice: [{ question: "P(A) = 0.6 each trial, two independent trials. P(at least one A)?", answer: "0.84" }],
      quiz: [{ question: "P(success) = 0.5 per trial, three trials. P(no successes)?", options: ["1/8", "3/8", "1/2", "1/4"], correctAnswer: 0, explanation: "(0.5)³ = 1/8." }],
    },
  ],

  "y10-independent-events": [
    {
      title: "Independent vs Dependent Events",
      explanation:
        "Two events A and B are INDEPENDENT if knowing one occurred does not change the probability of the other:\n  P(A | B) = P(A)  ⇔  P(A ∩ B) = P(A) · P(B).\n\nIf the equality fails, the events are DEPENDENT.",
      keyPoints: ["Independent ⇔ P(A∩B)=P(A)P(B)", "Conditional probability test", "With replacement → typically independent"],
      workedExamples: [
        { problem: "P(A)=0.4, P(B)=0.5, P(A∩B)=0.2. Independent?", steps: ["P(A)P(B) = 0.4·0.5 = 0.2 = P(A∩B)", "Yes — independent"], answer: "Independent" },
        { problem: "Roll two dice. P(both 6)?", steps: ["Independent: (1/6)(1/6)"], answer: "1/36" },
      ],
      tips: ["Test the multiplication condition."],
      commonErrors: ["Confusing 'independent' with 'mutually exclusive' — they are different concepts"],
      summary: ["EXAM INSIGHT: Mutually exclusive non-zero events are NEVER independent."],
      practice: [{ question: "P(A)=1/3, P(B)=1/4, independent. P(A∩B)?", answer: "1/12" }],
      quiz: [{ question: "Independent events with P(A)=0.5, P(B)=0.6. P(A∪B)?", options: ["1.1", "0.8", "0.3", "0.9"], correctAnswer: 1, explanation: "P(A∪B)=0.5+0.6−0.3=0.8." }],
    },
    {
      title: "Mini-Assessment: Independence",
      explanation: "MASTERY CHECKLIST: distinguish independence from mutual exclusivity, test independence numerically, compute joint probabilities.",
      keyPoints: ["Multiplication rule for independence", "Independence ≠ mutually exclusive"],
      workedExamples: [{ problem: "P(A)=0.2, P(B)=0.5, P(A∩B)=0.15. Independent?", steps: ["0.2·0.5=0.1 ≠ 0.15"], answer: "Not independent" }],
      tips: ["Compute P(A)P(B) and compare with P(A∩B)."],
      commonErrors: ["Assuming independence without testing"],
      summary: ["MASTERY: Independence is a strict numerical property."],
      practice: [{ question: "Two coins. P(H on first AND T on second)?", answer: "1/4" }],
      quiz: [{ question: "Independent A,B with P(A)=0.4, P(B)=0.7. P(A∩B)?", options: ["0.28", "0.4", "1.1", "0.3"], correctAnswer: 0, explanation: "0.4·0.7=0.28." }],
    },
  ],

  "y10-counting-principles": [
    {
      title: "The Multiplication and Addition Principles",
      explanation:
        "MULTIPLICATION PRINCIPLE: If a task has m ways to do step 1 AND n ways to do step 2, the total ways = m × n.\n\nADDITION PRINCIPLE: If a task can be done by method A (m ways) OR method B (n ways), and the methods are mutually exclusive, total = m + n.",
      keyPoints: ["AND → multiply", "OR → add (when exclusive)", "Stage by stage analysis"],
      workedExamples: [
        { problem: "A meal has 4 mains and 3 desserts. How many meal combinations?", steps: ["4·3"], answer: "12" },
        { problem: "Travel A→B by train (3 ways) or bus (2 ways). Total ways?", steps: ["3 + 2"], answer: "5" },
      ],
      tips: ["Read 'and' vs 'or' carefully."],
      commonErrors: ["Multiplying when stages are exclusive options"],
      summary: ["EXAM INSIGHT: Underpins permutations and combinations."],
      practice: [{ question: "PIN = 4 digits 0-9 with repetition. How many PINs?", answer: "10000" }],
      quiz: [{ question: "3 shirts, 4 pants, 2 hats. Outfits?", options: ["9", "12", "24", "6"], correctAnswer: 2, explanation: "3·4·2 = 24." }],
    },
  ],

  "y10-factorial-notation": [
    {
      title: "Factorial Notation n!",
      explanation:
        "n! (n factorial) = n × (n−1) × (n−2) × … × 2 × 1, with the convention 0! = 1. Factorials count the number of ways to arrange n distinct objects in a row.\n\nRULES.\n  • n! = n · (n−1)!\n  • Simplify ratios by cancelling: 7!/5! = 7·6 = 42.",
      keyPoints: ["0! = 1", "n! = n(n−1)!", "Cancel before multiplying"],
      workedExamples: [
        { problem: "Compute 5!.", steps: ["5·4·3·2·1"], answer: "120" },
        { problem: "Simplify 8!/6!.", steps: ["= 8·7"], answer: "56" },
      ],
      tips: ["Always cancel before multiplying out."],
      commonErrors: ["Computing huge numbers unnecessarily"],
      summary: ["EXAM INSIGHT: Factorials grow rapidly."],
      practice: [{ question: "10!/8! = ?", answer: "90" }],
      quiz: [{ question: "6! = ?", options: ["120", "360", "720", "5040"], correctAnswer: 2, explanation: "6·5! = 6·120 = 720." }],
    },
  ],

  "y10-arrangements": [
    {
      title: "Permutations: Ordered Arrangements",
      explanation:
        "A permutation is an arrangement where ORDER matters. The number of ways to arrange r objects from n distinct objects:\n  ⁿPᵣ = n! / (n − r)!\n\nSpecial case: arranging all n objects gives n!.",
      keyPoints: ["Order matters → permutation", "ⁿPᵣ = n!/(n−r)!", "All n: n!"],
      workedExamples: [
        { problem: "How many ways can 5 people sit in a row?", steps: ["5! = 120"], answer: "120" },
        { problem: "How many 3-letter codes from 7 letters (no repeats)?", steps: ["⁷P₃ = 7·6·5"], answer: "210" },
      ],
      tips: ["Identify whether order matters before choosing the formula."],
      commonErrors: ["Allowing repeats when not permitted"],
      summary: ["EXAM INSIGHT: 'Arrange', 'order', 'rank' → permutation."],
      practice: [{ question: "Arrange 4 books on a shelf. Ways?", answer: "24" }],
      quiz: [{ question: "⁸P₂ = ?", options: ["16", "28", "56", "64"], correctAnswer: 2, explanation: "8·7 = 56." }],
    },
  ],

  "y10-selections": [
    {
      title: "Combinations: Unordered Selections",
      explanation:
        "A combination is a selection where ORDER does NOT matter. The number of ways to choose r objects from n distinct objects:\n  ⁿCᵣ = n! / (r!(n − r)!)\n\nNote ⁿCᵣ = ⁿCₙ₋ᵣ (symmetry).",
      keyPoints: ["Order doesn't matter → combination", "ⁿCᵣ = ⁿPᵣ / r!", "Symmetry: ⁿCᵣ = ⁿCₙ₋ᵣ"],
      workedExamples: [
        { problem: "How many 3-person committees from 8 people?", steps: ["⁸C₃ = 56"], answer: "56" },
        { problem: "Lotto: choose 6 from 45.", steps: ["⁴⁵C₆ = 8,145,060"], answer: "8 145 060" },
      ],
      tips: ["Calculator: nCr button."],
      commonErrors: ["Using permutation when order is irrelevant"],
      summary: ["EXAM INSIGHT: 'Choose', 'select', 'committee' → combination."],
      practice: [{ question: "⁵C₂ = ?", answer: "10" }],
      quiz: [{ question: "⁷C₃ = ?", options: ["21", "35", "210", "5040"], correctAnswer: 1, explanation: "7!/(3!4!) = 35." }],
    },
  ],

  "y10-counting-applications": [
    {
      title: "Counting Techniques in Probability",
      explanation:
        "When all outcomes are equally likely, P(event) = favourable count / total count, where each count is computed using permutations or combinations.",
      keyPoints: ["Combine counting with P=A/S", "Identify ordered vs unordered context", "Use combinations for committee/lotto problems"],
      workedExamples: [
        { problem: "From 10 cards numbered 1–10, draw 3 (no replacement, order irrelevant). P(all even)?", steps: ["Evens: 5; ⁵C₃ = 10", "Total: ¹⁰C₃ = 120", "P = 10/120 = 1/12"], answer: "1/12" },
        { problem: "Lotto: choose 6 from 45. P(matching all 6)?", steps: ["1 / ⁴⁵C₆"], answer: "1 / 8 145 060" },
      ],
      tips: ["Match the counting method to the description (with/without order)."],
      commonErrors: ["Mixing permutations and combinations in numerator/denominator"],
      summary: ["EXAM INSIGHT: 10A questions often combine counting with conditional probability."],
      practice: [{ question: "From 5 boys, 4 girls, choose 3. P(all girls)?", answer: "4/84 = 1/21" }],
      quiz: [{ question: "Choose 2 from 6 (3 red, 3 blue). P(both red)?", options: ["1/5", "1/4", "1/3", "1/2"], correctAnswer: 0, explanation: "³C₂/⁶C₂ = 3/15 = 1/5." }],
    },
    {
      title: "Mini-Assessment: Counting & Probability",
      explanation: "MASTERY CHECKLIST: combine counting with probability formula, choose nPr vs nCr, simplify lottery-style problems.",
      keyPoints: ["nCr for unordered", "nPr for ordered", "Probability = favourable/total"],
      workedExamples: [{ problem: "Choose 4 from 12. Ways?", steps: ["¹²C₄ = 495"], answer: "495" }],
      tips: ["Double-check whether order matters."],
      commonErrors: ["Forgetting to divide by r! when order is irrelevant"],
      summary: ["MASTERY: Counting fluency unlocks 10A probability."],
      practice: [{ question: "From 7 letters, arrange 4. Ways?", answer: "840" }],
      quiz: [{ question: "10 students, choose 3. Ways?", options: ["30", "120", "720", "1000"], correctAnswer: 1, explanation: "¹⁰C₃ = 120." }],
    },
  ],
};
