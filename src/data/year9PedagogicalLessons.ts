/**
 * Year 9 Pedagogical Section Lessons
 * 7 sections per chapter × 11 chapters = 77 topics
 * Each topic has 3 lessons tailored to its chapter's mathematical content.
 */
import type { TopicLessonsMap, Lesson } from "./topicLessons";

// ─── Chapter metadata for content generation ─────────────────────────
interface ChapterMeta {
  num: number;
  name: string;
  subject: string;
  keyFormulas: string[];
  realWorldContext: string;
  techTool: string;
  investigationPrompt: string;
}

const chapters: ChapterMeta[] = [
  { num: 1, name: "Number & Financial Mathematics", subject: "number operations, fractions, percentages, interest", keyFormulas: ["I = PRT", "A = P(1+r)ⁿ", "% change = (change/original)×100"], realWorldContext: "budgeting, shopping discounts, bank savings", techTool: "spreadsheet for compound interest tables", investigationPrompt: "Which savings plan grows faster over 10 years?" },
  { num: 2, name: "Expressions & Linear Equations", subject: "algebraic expressions, expanding, solving equations", keyFormulas: ["a(b+c) = ab+ac", "balance method for equations"], realWorldContext: "pricing formulas, distance-time problems", techTool: "CAS calculator for solving equations", investigationPrompt: "When do two mobile plans cost the same?" },
  { num: 3, name: "Pythagoras' Theorem & Trigonometry", subject: "right-angled triangles, trig ratios, bearings", keyFormulas: ["a²+b²=c²", "sin θ=O/H", "cos θ=A/H", "tan θ=O/A"], realWorldContext: "building heights, navigation, surveying", techTool: "GeoGebra for triangle construction", investigationPrompt: "How tall is our school building using shadows?" },
  { num: 4, name: "Linear Relationships", subject: "graphing, gradient, y=mx+c, simultaneous equations", keyFormulas: ["y=mx+c", "m=(y₂-y₁)/(x₂-x₁)", "midpoint formula", "distance formula"], realWorldContext: "cost vs quantity, speed-time graphs", techTool: "Desmos for graphing lines", investigationPrompt: "Which streaming service gives best value?" },
  { num: 5, name: "Measurement", subject: "perimeter, area, surface area, volume", keyFormulas: ["A=πr²", "V=Ah (prisms)", "SA=2πrh+2πr² (cylinder)"], realWorldContext: "painting walls, filling tanks, packaging", techTool: "spreadsheet for volume calculators", investigationPrompt: "What container shape holds the most with least material?" },
  { num: 6, name: "Indices & Surds", subject: "index laws, negative/fractional indices, scientific notation, surds", keyFormulas: ["aᵐ×aⁿ=aᵐ⁺ⁿ", "a⁰=1", "a⁻ⁿ=1/aⁿ", "√a×√b=√(ab)"], realWorldContext: "bacteria growth, atomic sizes, computing", techTool: "calculator for scientific notation conversions", investigationPrompt: "How many times can you fold a piece of paper?" },
  { num: 7, name: "Geometry", subject: "angles, congruence, similarity, proofs, enlargement", keyFormulas: ["angle sum of triangle=180°", "angle sum of polygon=(n-2)×180°", "scale factor k"], realWorldContext: "architecture, map scales, engineering blueprints", techTool: "GeoGebra for geometric constructions", investigationPrompt: "Are all regular polygons similar to each other?" },
  { num: 8, name: "Algebraic Techniques", subject: "expanding binomials, factorising, algebraic fractions", keyFormulas: ["(a+b)²=a²+2ab+b²", "(a+b)(a-b)=a²-b²", "x²+bx+c=(x+m)(x+n)"], realWorldContext: "area expressions, optimisation problems", techTool: "CAS for expanding and factorising checks", investigationPrompt: "Can every quadratic trinomial be factorised?" },
  { num: 9, name: "Probability & Statistics", subject: "Venn diagrams, tree diagrams, data analysis, box plots", keyFormulas: ["P(A∪B)=P(A)+P(B)-P(A∩B)", "mean=Σx/n", "IQR=Q₃-Q₁"], realWorldContext: "medical testing, weather forecasting, sports stats", techTool: "spreadsheet for statistical calculations", investigationPrompt: "Is the school canteen queue really random?" },
  { num: 10, name: "Introduction to Quadratics", subject: "solving quadratics, parabolas, vertex form", keyFormulas: ["ax²+bx+c=0", "vertex form y=a(x-h)²+k", "null factor law"], realWorldContext: "projectile motion, bridge arches, profit curves", techTool: "Desmos for parabola exploration", investigationPrompt: "What launch angle gives maximum projectile range?" },
  { num: 11, name: "Algorithmic Thinking", subject: "algorithms, pseudocode, sorting, simulations", keyFormulas: ["bubble sort O(n²)", "selection sort O(n²)", "linear search O(n)"], realWorldContext: "search engines, GPS navigation, game AI", techTool: "Scratch/Python for algorithm implementation", investigationPrompt: "Which sorting algorithm is fastest for nearly-sorted data?" },
];

// ─── Lesson generators for each section type ─────────────────────────

function makeApplicationsLessons(ch: ChapterMeta): Lesson[] {
  return [
    {
      title: `Real-World Applications of ${ch.name}`,
      explanation: `Mathematics is most powerful when applied to real problems. In ${ch.subject}, we encounter applications in ${ch.realWorldContext}. This lesson focuses on identifying which mathematical tools to use when faced with real-world scenarios.`,
      keyPoints: [
        `Identify the mathematical concept needed for a real problem`,
        `Translate word problems into mathematical expressions`,
        `Check that your answer makes sense in context`,
      ],
      workedExamples: [{
        problem: `A problem involving ${ch.realWorldContext}: use ${ch.keyFormulas[0]} to find the answer.`,
        steps: [`Read the problem and identify known values`, `Choose the correct formula: ${ch.keyFormulas[0]}`, `Substitute and solve`, `Interpret the answer in context`],
        answer: `The answer is found by applying ${ch.keyFormulas[0]} to the given values.`
      }],
      tips: [`Always re-read the question after solving to check your answer makes sense`, `Draw a diagram if the problem involves shapes or distances`],
      quiz: [
        { question: `Which formula would you use for a problem involving ${ch.realWorldContext}?`, options: [ch.keyFormulas[0], "E = mc²", "F = ma", "V = IR"], correctAnswer: 0, explanation: `${ch.keyFormulas[0]} is the relevant formula for this chapter's applications.` },
        { question: `What is the first step in solving a word problem?`, options: ["Start calculating immediately", "Identify what is given and what is asked", "Look up the answer", "Skip to the end"], correctAnswer: 1, explanation: "Always identify knowns and unknowns before calculating." },
        { question: `Why must we check answers in context?`, options: ["To get extra marks", "Because mathematical answers may not be physically meaningful", "It's not necessary", "To make the work longer"], correctAnswer: 1, explanation: "A negative length or impossible probability means we need to recheck." },
      ]
    },
    {
      title: `Multi-Step Problem Solving in ${ch.name}`,
      explanation: `Many real problems require combining multiple steps and formulas. You need to plan your approach, execute each step carefully, and connect the results. This lesson practises breaking complex problems into manageable parts.`,
      keyPoints: [
        `Break complex problems into smaller steps`,
        `Show clear working for each step`,
        `Use intermediate results to build toward the final answer`,
      ],
      workedExamples: [{
        problem: `A multi-step problem combining concepts from ${ch.subject}.`,
        steps: [`Step 1: Extract the key information`, `Step 2: Apply the first relevant formula`, `Step 3: Use the result in the next calculation`, `Step 4: State the final answer with units`],
        answer: `The final answer combines results from multiple calculations.`
      }],
      tips: [`Label each step clearly`, `Keep track of units throughout`],
      quiz: [
        { question: `What makes a problem "multi-step"?`, options: ["It has many numbers", "It requires more than one calculation or concept", "It's on multiple pages", "It has multiple choice answers"], correctAnswer: 1, explanation: "Multi-step problems require combining several mathematical operations." },
        { question: `When solving multi-step problems, you should:`, options: ["Do everything mentally", "Show working for each step", "Only show the final answer", "Guess and check"], correctAnswer: 1, explanation: "Clear working helps avoid errors and earns method marks." },
        { question: `If your intermediate answer seems wrong, you should:`, options: ["Continue anyway", "Start the whole problem again", "Check that specific step before continuing", "Give up"], correctAnswer: 2, explanation: "Check the step where the error likely occurred rather than redoing everything." },
      ]
    },
    {
      title: `Extended Applications & Word Problems`,
      explanation: `This lesson tackles extended word problems that require careful reading, planning, and execution. These problems often combine ${ch.subject} with logical reasoning.`,
      keyPoints: [
        `Read the entire problem before starting`,
        `Identify all constraints and conditions`,
        `Verify your answer satisfies all conditions`,
      ],
      workedExamples: [{
        problem: `An extended word problem set in the context of ${ch.realWorldContext}.`,
        steps: [`Read and highlight key information`, `Set up the mathematical model`, `Solve using appropriate techniques from ${ch.subject}`, `Verify the answer against all conditions`],
        answer: `The solution satisfies all constraints given in the problem.`
      }],
      tips: [`Underline or highlight key words in the problem`, `Don't forget to answer the actual question asked`],
      quiz: [
        { question: `What should you do FIRST when reading a word problem?`, options: ["Start solving immediately", "Read the entire problem carefully", "Look for numbers only", "Draw a graph"], correctAnswer: 1, explanation: "Reading the full problem prevents missing important information." },
        { question: `"At least" in a word problem means:`, options: ["Less than", "Greater than or equal to", "Exactly", "Approximately"], correctAnswer: 1, explanation: "'At least' translates to ≥ in mathematics." },
        { question: `After solving, you should:`, options: ["Move on immediately", "Check the answer against all conditions in the problem", "Erase your working", "Round to 1 decimal place"], correctAnswer: 1, explanation: "Always verify your answer satisfies every condition stated." },
      ]
    },
  ];
}

function makeModellingLessons(ch: ChapterMeta): Lesson[] {
  return [
    {
      title: `Introduction to Mathematical Modelling`,
      explanation: `A mathematical model uses equations, graphs, or formulas to represent a real situation. In ${ch.name}, we can model scenarios like ${ch.realWorldContext} using ${ch.subject}. Models simplify reality to make predictions.`,
      keyPoints: [
        `A model is a simplified mathematical representation of reality`,
        `Models use assumptions to make problems tractable`,
        `All models have limitations`,
      ],
      workedExamples: [{
        problem: `Create a simple model for a scenario involving ${ch.realWorldContext}.`,
        steps: [`Identify the key variables`, `State your assumptions`, `Write the mathematical relationship using ${ch.keyFormulas[0]}`, `Test with known values`],
        answer: `The model captures the essential relationship while simplifying secondary factors.`
      }],
      tips: [`Always state your assumptions clearly`, `A simple model that captures the key relationship is better than a complex one you can't use`],
      quiz: [
        { question: `What is a mathematical model?`, options: ["A 3D physical object", "A simplified mathematical representation of a real situation", "An exact copy of reality", "A type of graph"], correctAnswer: 1, explanation: "Models use mathematics to represent and predict real phenomena." },
        { question: `Why do models use assumptions?`, options: ["To make the problem easier to solve", "Because assumptions are always true", "To confuse students", "They don't use assumptions"], correctAnswer: 0, explanation: "Assumptions simplify the real situation so we can apply mathematics." },
        { question: `What is a limitation of mathematical models?`, options: ["They are always 100% accurate", "They rely on assumptions that may not hold", "They cannot use formulas", "They are only for physics"], correctAnswer: 1, explanation: "If assumptions break down, the model's predictions become unreliable." },
      ]
    },
    {
      title: `Building and Testing Models`,
      explanation: `Building a model involves choosing variables, establishing relationships, and testing predictions against real data. In ${ch.subject}, we test whether our formulas accurately predict outcomes.`,
      keyPoints: [
        `Choose appropriate variables for your model`,
        `Use data to validate your model`,
        `Refine the model if predictions don't match observations`,
      ],
      workedExamples: [{
        problem: `Test a model using ${ch.keyFormulas[0]} against sample data.`,
        steps: [`Set up the model with the formula`, `Predict values for given inputs`, `Compare predictions with actual data`, `Calculate percentage error`],
        answer: `The model predicts values within an acceptable margin of error.`
      }],
      tips: [`Small percentage errors (< 5%) usually indicate a good model`, `Large errors suggest the model needs refinement`],
      quiz: [
        { question: `How do you test a mathematical model?`, options: ["By making it more complex", "By comparing predictions with real data", "By asking a teacher", "You can't test models"], correctAnswer: 1, explanation: "Comparing predicted vs actual values validates the model." },
        { question: `If a model gives 5% error, it is generally:`, options: ["Terrible", "Acceptable", "Perfect", "Impossible to tell"], correctAnswer: 1, explanation: "Small percentage errors often indicate a reasonably good model." },
        { question: `What should you do if predictions don't match data?`, options: ["Ignore the data", "Change the data", "Refine the model's assumptions", "Declare the model perfect"], correctAnswer: 2, explanation: "Revisit assumptions and relationships to improve the model." },
      ]
    },
    {
      title: `Interpreting and Communicating Model Results`,
      explanation: `The final step in modelling is interpreting results in context and communicating findings clearly. What do the numbers mean? What are the model's limitations? How confident can we be in the predictions?`,
      keyPoints: [
        `Interpret mathematical results in the original real-world context`,
        `Acknowledge limitations and assumptions`,
        `Communicate findings with appropriate precision`,
      ],
      workedExamples: [{
        problem: `Interpret the results of a ${ch.name} model and communicate findings.`,
        steps: [`State the model's prediction in plain language`, `Discuss which assumptions affect accuracy`, `Suggest improvements`, `Present results with appropriate rounding`],
        answer: `The model suggests [outcome], with confidence limited by [key assumption].`
      }],
      tips: [`Don't over-state the precision of your model`, `Always mention at least one limitation`],
      quiz: [
        { question: `When presenting model results, you should:`, options: ["Give as many decimal places as possible", "Use appropriate precision and context", "Only give the formula", "Never mention limitations"], correctAnswer: 1, explanation: "Results should match the precision of your data and be in context." },
        { question: `Why mention model limitations?`, options: ["To lose marks", "To show honesty and scientific rigour", "It's not necessary", "To make the model seem bad"], correctAnswer: 1, explanation: "Acknowledging limitations shows mature mathematical thinking." },
        { question: `"The model predicts approximately 150 litres" is better than:`, options: ["'The model predicts 149.87623 litres'", "'The answer is about 150'", "'150'", "All are equally good"], correctAnswer: 0, explanation: "False precision (too many decimal places) implies accuracy the model doesn't have." },
      ]
    },
  ];
}

function makeTechComputingLessons(ch: ChapterMeta): Lesson[] {
  return [
    {
      title: `Using Technology for ${ch.name}`,
      explanation: `Technology tools like ${ch.techTool} can help explore ${ch.subject} more efficiently. This lesson covers how to use digital tools to verify calculations, explore patterns, and solve problems.`,
      keyPoints: [
        `Technology is a tool to enhance understanding, not replace it`,
        `Always verify technology outputs with manual checks`,
        `Use technology to explore "what if" scenarios quickly`,
      ],
      workedExamples: [{
        problem: `Use ${ch.techTool} to explore a concept from ${ch.subject}.`,
        steps: [`Set up the tool with the problem data`, `Enter the relevant formula or values`, `Read and interpret the output`, `Verify with a manual calculation`],
        answer: `The technology confirms our manual calculation and allows further exploration.`
      }],
      tips: [`Learn the tool's syntax and conventions`, `Save your work for reference`],
      quiz: [
        { question: `Why should you verify technology outputs manually?`, options: ["Technology is always wrong", "To catch input errors and build understanding", "It's a waste of time", "Teachers require it"], correctAnswer: 1, explanation: "Manual verification catches typos and deepens understanding." },
        { question: `Which tool is useful for ${ch.subject}?`, options: [ch.techTool, "A paint program", "A word processor", "A music player"], correctAnswer: 0, explanation: `${ch.techTool} is designed for mathematical exploration in this area.` },
        { question: `Technology is best used to:`, options: ["Replace all mental maths", "Explore patterns and verify calculations", "Avoid learning formulas", "Do homework automatically"], correctAnswer: 1, explanation: "Technology enhances exploration while you maintain mathematical understanding." },
      ]
    },
    {
      title: `Computational Thinking in ${ch.name}`,
      explanation: `Computational thinking means breaking problems into steps a computer could follow. In ${ch.subject}, this means creating clear algorithms for solving problems — useful for both manual work and programming.`,
      keyPoints: [
        `Decompose: break the problem into smaller parts`,
        `Pattern recognition: identify repeated steps`,
        `Abstraction: focus on what matters, ignore irrelevant details`,
        `Algorithm design: create step-by-step procedures`,
      ],
      workedExamples: [{
        problem: `Design an algorithm for solving a standard ${ch.subject} problem.`,
        steps: [`Step 1: Input the given values`, `Step 2: Check preconditions (e.g., valid inputs)`, `Step 3: Apply the formula ${ch.keyFormulas[0]}`, `Step 4: Output the result with units`],
        answer: `The algorithm produces correct results for any valid input values.`
      }],
      tips: [`Think about edge cases (zero, negative, very large values)`, `Test your algorithm with simple examples first`],
      quiz: [
        { question: `What is decomposition in computational thinking?`, options: ["Breaking a problem into smaller parts", "Making things decompose", "Removing unnecessary parts", "Making the problem harder"], correctAnswer: 0, explanation: "Decomposition means breaking a complex problem into manageable pieces." },
        { question: `What is an algorithm?`, options: ["A type of number", "A step-by-step procedure to solve a problem", "A computer program", "A mathematical formula"], correctAnswer: 1, explanation: "An algorithm is a precise sequence of steps that solves a problem." },
        { question: `Why test with simple examples first?`, options: ["Simple problems are worth more marks", "To verify the algorithm works before tackling complex cases", "Simple examples are the only ones that matter", "To save time"], correctAnswer: 1, explanation: "Testing with known simple cases helps catch errors early." },
      ]
    },
    {
      title: `Spreadsheets and Digital Tools for ${ch.name}`,
      explanation: `Spreadsheets are powerful tools for ${ch.subject}. They allow rapid calculation, graphing, and "what-if" analysis. This lesson covers setting up formulas, creating charts, and using fill-down for repeated calculations.`,
      keyPoints: [
        `Use cell references (e.g., =A1*B1) instead of typing numbers`,
        `Fill-down to repeat calculations for many values`,
        `Create charts to visualise patterns`,
      ],
      workedExamples: [{
        problem: `Set up a spreadsheet to calculate values using ${ch.keyFormulas[0]}.`,
        steps: [`Enter column headers for inputs and outputs`, `Enter the formula in the output cell using cell references`, `Fill down for multiple rows of data`, `Create a chart from the results`],
        answer: `The spreadsheet calculates and visualises results efficiently.`
      }],
      tips: [`Use absolute references ($A$1) when a value shouldn't change during fill-down`, `Format cells appropriately (number, currency, percentage)`],
      quiz: [
        { question: `Why use cell references instead of typing numbers in spreadsheet formulas?`, options: ["It looks professional", "So formulas update automatically when data changes", "It's required by the software", "There's no difference"], correctAnswer: 1, explanation: "Cell references mean the formula recalculates when input values change." },
        { question: `What does 'fill-down' do?`, options: ["Fills cells with colour", "Copies a formula to multiple rows, adjusting references", "Deletes cell contents", "Merges cells"], correctAnswer: 1, explanation: "Fill-down copies formulas while adjusting row references automatically." },
        { question: `An absolute reference like $A$1 means:`, options: ["The cell reference won't change during fill-down", "The cell is locked and can't be edited", "The value is very large", "The cell is formatted as currency"], correctAnswer: 0, explanation: "The $ signs lock the row and column so they don't change when copied." },
      ]
    },
  ];
}

function makeInvestigationLessons(ch: ChapterMeta): Lesson[] {
  return [
    {
      title: `Planning a Mathematical Investigation`,
      explanation: `A mathematical investigation starts with a question or conjecture. For ${ch.name}, we might ask: "${ch.investigationPrompt}" This lesson covers how to design an investigation, gather data, and draw conclusions.`,
      keyPoints: [
        `Start with a clear question or conjecture`,
        `Plan what data you need to collect`,
        `Choose appropriate mathematical tools for analysis`,
      ],
      workedExamples: [{
        problem: `Plan an investigation: "${ch.investigationPrompt}"`,
        steps: [`State the question clearly`, `Identify what data is needed`, `Decide on the mathematical methods to use`, `Plan how to present findings`],
        answer: `A structured investigation plan with clear methods and expected outcomes.`
      }],
      tips: [`A good investigation question is specific and testable`, `Plan before you start collecting data`],
      quiz: [
        { question: `What makes a good investigation question?`, options: ["It's very broad", "It's specific and testable", "It has an obvious answer", "It requires no mathematics"], correctAnswer: 1, explanation: "Good questions are focused enough to investigate with available tools and data." },
        { question: `Before collecting data, you should:`, options: ["Start calculating", "Plan what data you need and how to collect it", "Write the conclusion", "Ask someone else to do it"], correctAnswer: 1, explanation: "Planning ensures you collect the right data in a useful format." },
        { question: `An investigation about "${ch.investigationPrompt}" would use concepts from:`, options: [ch.subject, "History", "English literature", "Art"], correctAnswer: 0, explanation: `This investigation applies ${ch.subject} to a real question.` },
      ]
    },
    {
      title: `Conducting the Investigation`,
      explanation: `During the investigation, you collect data systematically, apply mathematical techniques, and look for patterns. Record everything clearly — both successful and unexpected results.`,
      keyPoints: [
        `Record data in organised tables`,
        `Apply mathematical techniques systematically`,
        `Note any unexpected findings or patterns`,
      ],
      workedExamples: [{
        problem: `Conduct an investigation related to ${ch.subject}: collect and analyse sample data.`,
        steps: [`Collect data in a structured table`, `Calculate relevant values using ${ch.keyFormulas[0]}`, `Look for patterns or trends`, `Record observations`],
        answer: `The data reveals a pattern that supports/contradicts our initial conjecture.`
      }],
      tips: [`Organise data in tables from the start`, `Don't discard "messy" results — they may be the most interesting`],
      quiz: [
        { question: `Why record data in tables?`, options: ["For decoration", "For easy reference and pattern identification", "Because it's required", "To fill space"], correctAnswer: 1, explanation: "Organised tables make it easier to spot patterns and perform calculations." },
        { question: `If your data shows an unexpected result, you should:`, options: ["Delete it", "Investigate why it occurred", "Ignore it", "Change it to fit your hypothesis"], correctAnswer: 1, explanation: "Unexpected results often lead to the most interesting discoveries." },
        { question: `Systematic data collection means:`, options: ["Collecting random data", "Following a planned method to ensure consistency", "Only collecting data that supports your idea", "Copying someone else's data"], correctAnswer: 1, explanation: "Systematic collection ensures reliable, comparable data." },
      ]
    },
    {
      title: `Drawing Conclusions and Presenting Findings`,
      explanation: `The final phase of an investigation involves analysing results, drawing conclusions, and presenting findings. Your conclusion should directly address the original question with evidence from your data.`,
      keyPoints: [
        `Link conclusions directly to your original question`,
        `Support conclusions with specific data and calculations`,
        `Discuss limitations and possible extensions`,
      ],
      workedExamples: [{
        problem: `Write a conclusion for the investigation: "${ch.investigationPrompt}"`,
        steps: [`Restate the original question`, `Summarise key findings with specific data`, `State whether the conjecture was supported`, `Suggest extensions or improvements`],
        answer: `The investigation found [specific result], which [supports/does not support] the original conjecture because [evidence].`
      }],
      tips: [`Use specific numbers and data in your conclusion, not vague statements`, `Always suggest at least one way the investigation could be extended`],
      quiz: [
        { question: `A good conclusion should:`, options: ["Introduce new topics", "Directly address the original question with evidence", "Be as long as possible", "Avoid mentioning data"], correctAnswer: 1, explanation: "Conclusions should answer the question using evidence gathered." },
        { question: `Why discuss limitations?`, options: ["To lower your mark", "To show awareness of factors that may affect reliability", "It's not important", "To make the report longer"], correctAnswer: 1, explanation: "Discussing limitations shows critical thinking and scientific rigour." },
        { question: `Suggesting extensions shows:`, options: ["That you didn't finish", "Curiosity and deeper understanding", "You ran out of ideas", "Nothing useful"], correctAnswer: 1, explanation: "Extensions demonstrate engagement and understanding of the broader topic." },
      ]
    },
  ];
}

function makeProblemsChallengesLessons(ch: ChapterMeta): Lesson[] {
  return [
    {
      title: `Challenge Problems in ${ch.name}`,
      explanation: `Challenge problems push your understanding of ${ch.subject} beyond routine exercises. They often require creative thinking, combining multiple concepts, or approaching familiar problems from a new angle.`,
      keyPoints: [
        `Read carefully — challenge problems often have subtle conditions`,
        `Try different approaches if your first attempt doesn't work`,
        `Partial solutions still earn credit and build understanding`,
      ],
      workedExamples: [{
        problem: `A challenging problem that combines concepts from ${ch.subject}.`,
        steps: [`Identify all the concepts involved`, `Try the most promising approach`, `If stuck, try a different method`, `Verify the answer satisfies all conditions`],
        answer: `The solution requires combining multiple techniques from ${ch.name}.`
      }],
      tips: [`Don't give up after one attempt — try a different approach`, `Draw diagrams and write out what you know`],
      quiz: [
        { question: `When stuck on a challenge problem, you should:`, options: ["Give up immediately", "Try a different approach or strategy", "Copy someone's answer", "Skip all challenge problems"], correctAnswer: 1, explanation: "Multiple approaches often lead to breakthroughs on difficult problems." },
        { question: `Challenge problems in ${ch.name} typically require:`, options: ["Only basic recall", "Combining multiple concepts creatively", "No mathematics", "Memorised answers"], correctAnswer: 1, explanation: "Challenge problems test deeper understanding by combining concepts." },
        { question: `A partial solution is:`, options: ["Worthless", "Still valuable — it shows understanding and earns method marks", "A sign of failure", "Not worth writing down"], correctAnswer: 1, explanation: "Partial solutions demonstrate understanding and earn marks for correct working." },
      ]
    },
    {
      title: `EXTENDING: Advanced Problem Set`,
      explanation: `These extension problems are designed for students seeking academic progression beyond the standard curriculum. They involve higher-order thinking, proof-like reasoning, and connections between ${ch.subject} and other mathematical areas.`,
      keyPoints: [
        `These problems go beyond standard exam expectations`,
        `They develop mathematical reasoning and proof skills`,
        `Persistence and systematic exploration are key`,
      ],
      workedExamples: [{
        problem: `An extension problem requiring proof or generalisation in ${ch.subject}.`,
        steps: [`Understand what needs to be proved or generalised`, `Test with specific cases first`, `Look for a pattern to generalise`, `Write a clear argument or proof`],
        answer: `The general result follows from the pattern observed in specific cases.`
      }],
      tips: [`Start with small specific cases to build intuition`, `"Always", "never", and "for all" signal proof-type questions`],
      quiz: [
        { question: `Extension problems are designed to:`, options: ["Replace standard work", "Challenge and extend beyond the standard curriculum", "Be impossible to solve", "Lower your confidence"], correctAnswer: 1, explanation: "Extension problems build deeper mathematical skills for advanced progression." },
        { question: `When proving a general result, start by:`, options: ["Writing the proof immediately", "Testing specific cases to find patterns", "Assuming it's true", "Looking up the answer"], correctAnswer: 1, explanation: "Specific cases help you discover the pattern before attempting a general proof." },
        { question: `"Show that this is true for all values of n" requires:`, options: ["Testing one example", "A general argument or proof", "Saying 'it's obvious'", "Only checking even numbers"], correctAnswer: 1, explanation: "A general claim requires a general proof, not just examples." },
      ]
    },
    {
      title: `Problem-Solving Strategies Review`,
      explanation: `This lesson reviews key problem-solving strategies that apply across all of ${ch.name}: working backwards, using diagrams, making tables, looking for patterns, and simplifying the problem.`,
      keyPoints: [
        `Try working backwards from the answer`,
        `Draw a diagram whenever possible`,
        `Make an organised list or table`,
        `Look for and use patterns`,
        `Simplify the problem — solve a smaller version first`,
      ],
      workedExamples: [{
        problem: `Apply multiple strategies to solve a problem from ${ch.subject}.`,
        steps: [`Draw a diagram of the situation`, `Make a table of values`, `Identify a pattern`, `Use the pattern to find the general answer`],
        answer: `The combination of diagram + table + pattern leads to the solution.`
      }],
      tips: [`Having multiple strategies means you always have a "Plan B"`, `The best strategy depends on the problem — practice all of them`],
      quiz: [
        { question: `Which is NOT a standard problem-solving strategy?`, options: ["Working backwards", "Drawing a diagram", "Guessing randomly", "Looking for patterns"], correctAnswer: 2, explanation: "Random guessing is not a systematic problem-solving strategy." },
        { question: `When should you draw a diagram?`, options: ["Never", "Whenever the problem involves shapes, distances, or relationships", "Only for geometry", "Only when told to"], correctAnswer: 1, explanation: "Diagrams help visualise many types of problems, not just geometry." },
        { question: `"Solve a simpler version first" means:`, options: ["Make the problem easier by removing conditions", "Solve a smaller case to understand the pattern, then generalise", "Change the question", "Skip the hard parts"], correctAnswer: 1, explanation: "Simpler cases reveal patterns that help solve the full problem." },
      ]
    },
  ];
}

function makeSummaryLessons(ch: ChapterMeta): Lesson[] {
  return [
    {
      title: `${ch.name} — Key Concepts Review`,
      explanation: `This summary reviews the essential concepts from ${ch.name}. The chapter covered ${ch.subject}. Understanding these concepts is fundamental to progressing in mathematics.`,
      keyPoints: [
        `Chapter ${ch.num} covered: ${ch.subject}`,
        `Key formulas: ${ch.keyFormulas.join(", ")}`,
        `Real-world applications include: ${ch.realWorldContext}`,
      ],
      workedExamples: [{
        problem: `Summarise the key ideas of ${ch.name} and how they connect.`,
        steps: [`List the main topics covered`, `Identify the key formulas and when to use them`, `Explain how the topics connect to each other`, `Note connections to other chapters`],
        answer: `${ch.name} provides essential tools in ${ch.subject} that connect to later topics.`
      }],
      tips: [`Create your own summary sheet with key formulas`, `Practice explaining concepts in your own words`],
      quiz: [
        { question: `Chapter ${ch.num} is about:`, options: [ch.name, "English Literature", "Physical Education", "Music Theory"], correctAnswer: 0, explanation: `Chapter ${ch.num} covers ${ch.name}.` },
        { question: `Which formula is from this chapter?`, options: [ch.keyFormulas[0], "E = mc²", "F = ma", "PV = nRT"], correctAnswer: 0, explanation: `${ch.keyFormulas[0]} is a key formula from ${ch.name}.` },
        { question: `A good chapter summary includes:`, options: ["Every single detail", "Key concepts, formulas, and connections", "Only worked examples", "Nothing — summaries aren't useful"], correctAnswer: 1, explanation: "An effective summary captures the essential ideas and their relationships." },
      ]
    },
    {
      title: `${ch.name} — Common Mistakes & Misconceptions`,
      explanation: `This lesson addresses the most common errors students make in ${ch.subject}. Recognising these mistakes helps you avoid them in assessments and build stronger mathematical habits.`,
      keyPoints: [
        `Watch for sign errors in calculations`,
        `Don't confuse similar-looking formulas`,
        `Always include units in your final answer`,
        `Read questions carefully — they often contain important constraints`,
      ],
      workedExamples: [{
        problem: `Identify and correct a common mistake in ${ch.subject}.`,
        steps: [`Examine the incorrect working`, `Identify where the error occurred`, `Explain why the error is wrong`, `Show the correct solution`],
        answer: `The corrected working avoids the common mistake and gives the right answer.`
      }],
      tips: [`Keep a "mistake journal" to track errors you commonly make`, `Before submitting work, specifically check for your known weak spots`],
      quiz: [
        { question: `Which is the most common type of mathematical error?`, options: ["Using the wrong textbook", "Sign errors and arithmetic mistakes", "Writing too neatly", "Using a calculator"], correctAnswer: 1, explanation: "Sign errors and basic arithmetic mistakes are the most frequent errors." },
        { question: `How can you reduce errors?`, options: ["Work faster", "Check your work systematically", "Skip difficult questions", "Don't show working"], correctAnswer: 1, explanation: "Systematic checking catches most errors before they affect your final answer." },
        { question: `Why include units in answers?`, options: ["For decoration", "Units give meaning to numbers and are required in applied problems", "Units are optional", "Only in science"], correctAnswer: 1, explanation: "Units ensure your answer is meaningful — '42' means nothing without context." },
      ]
    },
    {
      title: `${ch.name} — Connections to Other Topics`,
      explanation: `Mathematics is interconnected. ${ch.name} connects to many other areas. This lesson explores how ${ch.subject} relates to earlier and later topics, and how mastering this chapter prepares you for more advanced mathematics.`,
      keyPoints: [
        `${ch.name} builds on earlier foundations`,
        `It connects forward to more advanced topics`,
        `Cross-topic connections deepen understanding`,
      ],
      workedExamples: [{
        problem: `Show how a concept from ${ch.name} connects to another mathematical area.`,
        steps: [`Identify the concept`, `Show how it was used in an earlier topic`, `Show how it will be extended in a later topic`, `Explain the connection`],
        answer: `The concept bridges earlier and later mathematics, showing the connected nature of the subject.`
      }],
      tips: [`Look for connections between chapters — mathematics is a web, not a list`, `Understanding connections helps you remember and apply concepts`],
      quiz: [
        { question: `Mathematics topics are best understood as:`, options: ["Completely separate subjects", "Interconnected ideas that build on each other", "Random collections of formulas", "Only useful for exams"], correctAnswer: 1, explanation: "Mathematical topics connect and reinforce each other." },
        { question: `Understanding connections between topics helps you:`, options: ["Nothing", "Remember and apply concepts more effectively", "Confuse yourself", "Take longer on exams"], correctAnswer: 1, explanation: "Seeing connections creates a richer, more memorable understanding." },
        { question: `${ch.name} prepares you for:`, options: ["No future topics", "More advanced mathematics that extends these concepts", "Only repeat work", "Completely unrelated topics"], correctAnswer: 1, explanation: `The skills from ${ch.name} are foundations for advanced mathematical study.` },
      ]
    },
  ];
}

function makeChecklistLessons(ch: ChapterMeta): Lesson[] {
  return [
    {
      title: `Self-Assessment: Can I Do This?`,
      explanation: `Use this checklist to assess your mastery of ${ch.name}. For each skill, honestly rate yourself: confident (✓), partly confident (?), or not yet (✗). This helps you target your revision effectively.`,
      keyPoints: [
        `Honest self-assessment is the first step to improvement`,
        `Focus revision on "partly confident" and "not yet" areas`,
        `Re-assess after targeted practice to track improvement`,
      ],
      workedExamples: [{
        problem: `Complete a self-assessment for ${ch.name} skills.`,
        steps: [`Read each skill statement`, `Try a quick mental example`, `Rate yourself honestly: ✓, ?, or ✗`, `Create a revision plan for ? and ✗ areas`],
        answer: `A completed self-assessment with a targeted revision plan.`
      }],
      tips: [`Being honest about weaknesses is a strength, not a weakness`, `Revisit this checklist after each study session`],
      quiz: [
        { question: `The purpose of self-assessment is:`, options: ["To feel bad about mistakes", "To identify strengths and areas for improvement", "To compare yourself to others", "To skip revision"], correctAnswer: 1, explanation: "Self-assessment helps you focus revision where it's most needed." },
        { question: `If you rate yourself "?" (partly confident) on a skill, you should:`, options: ["Ignore it", "Practice that skill with targeted exercises", "Mark it as ✓ anyway", "Give up"], correctAnswer: 1, explanation: "Partly confident skills are the best targets for improvement." },
        { question: `How often should you re-assess?`, options: ["Never", "After each targeted practice session", "Only before exams", "Every year"], correctAnswer: 1, explanation: "Regular re-assessment tracks progress and motivates continued improvement." },
      ]
    },
    {
      title: `Success Criteria for ${ch.name}`,
      explanation: `These success criteria define what mastery of ${ch.name} looks like. You should be able to: use all key formulas correctly, solve multi-step problems, explain concepts in your own words, and apply skills to unfamiliar contexts.`,
      keyPoints: [
        `Mastery means correct application in both familiar and unfamiliar contexts`,
        `You should be able to explain WHY, not just HOW`,
        `Speed and accuracy both matter — practice builds both`,
      ],
      workedExamples: [{
        problem: `Demonstrate mastery of a key skill from ${ch.name}.`,
        steps: [`Solve the problem correctly`, `Explain your method in your own words`, `Apply the same skill to an unfamiliar context`, `Identify potential errors and how to avoid them`],
        answer: `Mastery is demonstrated by correct solutions, clear explanations, and transferable skills.`
      }],
      tips: [`If you can teach it to someone else, you've mastered it`, `Practice with unfamiliar problems, not just textbook exercises`],
      quiz: [
        { question: `Mastery of a topic means:`, options: ["Memorising everything", "Understanding, applying, and explaining concepts", "Getting 100% once", "Reading the textbook"], correctAnswer: 1, explanation: "True mastery involves understanding, application, and the ability to explain." },
        { question: `The best way to prove mastery is:`, options: ["Reciting formulas", "Solving unfamiliar problems and explaining your reasoning", "Copying worked examples", "Getting help from a friend"], correctAnswer: 1, explanation: "Unfamiliar problems test genuine understanding, not just memorisation." },
        { question: `"Explain why, not just how" means:`, options: ["Write longer answers", "Understand the reasoning behind methods, not just the steps", "Give multiple methods", "Avoid showing working"], correctAnswer: 1, explanation: "Understanding WHY a method works leads to deeper, more transferable knowledge." },
      ]
    },
    {
      title: `Revision Planning & Exam Preparation`,
      explanation: `Effective revision for ${ch.name} requires a structured plan. This lesson helps you create a revision schedule, choose effective study strategies, and prepare for assessments with confidence.`,
      keyPoints: [
        `Space your revision over multiple sessions (spaced practice)`,
        `Mix topics within a session (interleaving)`,
        `Practice under timed conditions before exams`,
        `Focus on understanding, not just memorisation`,
      ],
      workedExamples: [{
        problem: `Create a revision plan for ${ch.name} assessment preparation.`,
        steps: [`List all topics and rate your confidence`, `Allocate more time to weak areas`, `Plan 3-4 short sessions rather than one long one`, `Include practice problems in each session`],
        answer: `A structured revision plan with balanced coverage and extra focus on weak areas.`
      }],
      tips: [`Short, frequent study sessions are more effective than marathon cramming`, `Do practice problems, not just re-reading notes`],
      quiz: [
        { question: `Which revision strategy is most effective?`, options: ["Reading notes once before the exam", "Spaced practice over multiple sessions", "Highlighting everything", "Studying for 8 hours straight"], correctAnswer: 1, explanation: "Spaced practice with active recall is the most effective study strategy." },
        { question: `"Interleaving" means:`, options: ["Studying one topic for hours", "Mixing different topics within a study session", "Studying with friends", "Using flashcards"], correctAnswer: 1, explanation: "Mixing topics forces your brain to choose the right approach, building flexibility." },
        { question: `Before an exam, you should:`, options: ["Learn new material", "Practice problems under timed conditions", "Stay up all night", "Only revise your strongest topics"], correctAnswer: 1, explanation: "Timed practice builds exam skills and identifies remaining gaps." },
      ]
    },
  ];
}

// ─── Generate all lessons ────────────────────────────────────────────

const sectionGenerators: Record<string, (ch: ChapterMeta) => Lesson[]> = {
  "applications": makeApplicationsLessons,
  "modelling": makeModellingLessons,
  "tech-computing": makeTechComputingLessons,
  "investigation": makeInvestigationLessons,
  "problems-challenges": makeProblemsChallengesLessons,
  "summary": makeSummaryLessons,
  "checklist": makeChecklistLessons,
};

export const year9PedagogicalLessons: TopicLessonsMap = {};

chapters.forEach(ch => {
  Object.entries(sectionGenerators).forEach(([suffix, generator]) => {
    const id = `y9-ch${ch.num}-${suffix}`;
    year9PedagogicalLessons[id] = generator(ch);
  });
});
