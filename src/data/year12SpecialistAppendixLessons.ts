import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Specialist Mathematics — Appendices A–E
// CAS calculator reference guides (TI-Nspire, ClassPad) and coding intros
// (Python, TI-Nspire, ClassPad). Conceptual reference lessons — focus on
// menus, syntax, and pseudocode-equivalents rather than mathematical theory.

export const year12SpecialistAppendixLessons: TopicLessonsMap = {
  // ─── Appendix A: TI-Nspire CAS Guide ──────────────────────────────
  "y12s-appA-ti-nspire": [
    {
      title: "Guide to the TI-Nspire CAS in VCE Specialist Mathematics",
      explanation:
        "The TI-Nspire CAS is a reference tool you may use in Exam 2 (CAS-active). The interface is organised around DOCUMENTS, each containing PROBLEMS made up of PAGES (Calculator, Graphs, Lists & Spreadsheet, Notes, Geometry).\n\nKEY APPLICATIONS FOR SPECIALIST:\n  • Calculator — exact arithmetic, solve(), deSolve(), nSolve(), polyRoots().\n  • Graphs — function, parametric, polar, slope fields (using diffEq plot type), 3D vectors via parametric.\n  • Lists & Spreadsheet — for sample means and CLT simulations.\n  • Notes — for documenting working in CAS-active responses.\n\nESSENTIAL SYNTAX:\n  • solve(equation, variable) — symbolic solution.\n  • solve(equation, var) | domain — restrict domain (e.g. x ≥ 0).\n  • deSolve(y'=f(x,y) and y(x0)=y0, x, y) — analytic ODE solution.\n  • integral: ∫(f(x), x, a, b) — definite integral via template (μ key).\n  • derivative: d/dx(f(x)) — via template.\n  • complex: cSolve(), cFactor() — force complex domain.\n  • vectors: [a,b,c] dotP [d,e,f]; crossP() for cross product.\n\nMODE SETTINGS (critical for Specialist):\n  • Angle: RADIAN by default for calculus. Switch to degree only when explicitly required.\n  • Real or Complex: REAL for general use; switch to RECTANGULAR or POLAR for complex number tasks.\n  • Calculation Mode: AUTO gives exact form; press ctrl+enter to force decimal.",
      keyPoints: [
        "Use solve() for exact, nSolve() for numerical",
        "deSolve() handles separable and linear ODEs",
        "Press ctrl+enter to convert exact ↔ decimal",
        "Set Angle = RADIAN for calculus questions",
      ],
      workedExamples: [
        {
          problem: "Use the TI-Nspire to solve x² − 5x + 6 = 0 exactly.",
          steps: [
            "Open Calculator page",
            "Type: solve(x^2 − 5x + 6 = 0, x)",
            "Press enter — output is x = 2 or x = 3",
          ],
          answer: "x = 2 or x = 3.",
        },
        {
          problem: "Solve dy/dx = xy with y(0) = 1.",
          steps: [
            "Type: deSolve(y' = x·y and y(0) = 1, x, y)",
            "Press enter — output is y = e^(x²/2)",
          ],
          answer: "y = e^(x²/2).",
        },
        {
          problem: "Find ∫₀¹ √(1 + x²) dx to 4 decimal places.",
          steps: [
            "Use the integral template (μ key)",
            "Enter lower 0, upper 1, integrand √(1+x²)",
            "Press ctrl+enter for decimal: ≈ 1.1478",
          ],
          answer: "≈ 1.1478.",
        },
      ],
      tips: [
        "Save common templates in a Notes page for quick reuse",
        "Use undef in cSolve when no solution restriction is needed",
        "Always check angle mode before evaluating trig",
      ],
      definitions: [
        { term: "CAS", meaning: "Computer Algebra System — performs symbolic math." },
        { term: "Document", meaning: "TI-Nspire file containing one or more problems." },
      ],
      formulas: [
        { name: "Solve", formula: "solve(eq, var)", note: "Exact symbolic" },
        { name: "Numerical solve", formula: "nSolve(eq, var = guess)" },
        { name: "ODE", formula: "deSolve(y'=f and y(x0)=y0, x, y)" },
      ],
      commonErrors: [
        "Forgetting · or implicit multiplication: write 2·x not 2x where ambiguous",
        "Using = instead of := for assignment",
      ],
      summary: [
        "TI-Nspire is exam-active in Exam 2",
        "Master solve, deSolve, integral and derivative templates",
        "Always verify angle mode and exact/decimal settings",
      ],
      quiz: [
        {
          question: "Which command gives an exact symbolic solution?",
          options: ["nSolve()", "solve()", "approx()", "evalf()"],
          correctAnswer: 1,
          explanation: "solve() returns exact form; nSolve() returns a numerical approximation.",
        },
        {
          question: "What is the correct command to solve dy/dx = 2y, y(0)=3?",
          options: [
            "solve(y'=2y, y)",
            "deSolve(y'=2·y and y(0)=3, x, y)",
            "integrate(2y, y)",
            "nSolve(y=2y, y)",
          ],
          correctAnswer: 1,
          explanation: "deSolve() solves ODEs given an initial condition.",
        },
        {
          question: "Which mode should be set for calculus questions?",
          options: ["Degree", "Radian", "Gradian", "Polar"],
          correctAnswer: 1,
          explanation: "Calculus formulas (e.g. d/dx[sin x] = cos x) assume radians.",
        },
      ],
    },
  ],

  // ─── Appendix B: Casio ClassPad II Guide ──────────────────────────
  "y12s-appB-classpad": [
    {
      title: "Guide to the Casio ClassPad II in VCE Specialist Mathematics",
      explanation:
        "The Casio ClassPad II is the alternative CAS calculator for VCE. It uses a touch interface and groups tools into APPLICATIONS accessed from the main menu (Main, Graph & Table, Geometry, Statistics, eActivity, Spreadsheet).\n\nMAIN APPLICATION (everyday computation):\n  • The work area is the upper white pane; the soft keyboard is below.\n  • Use the Math1, Math2, Math3 keyboards for symbols (∫, d/dx, Σ, matrices).\n  • Use the abc keyboard for variable names and commands.\n\nESSENTIAL COMMANDS FOR SPECIALIST:\n  • solve(equation, variable) — symbolic solution.\n  • dSolve(y' = f(x,y), x, y, {x0, y0}) — analytic ODE.\n  • diff(expression, variable) — derivative.\n  • ∫(f(x), x, a, b) — definite integral via template.\n  • cSolve(), cExpand(), cFactor() — complex-mode versions.\n  • dotP, crossP — vector operations.\n\nMODE / SETUP:\n  • Tap the Math/Line button to toggle between 2D math and linear input.\n  • Settings → Basic Format: choose Standard for exact, Decimal for approximate.\n  • Settings → Angle: Radian for calculus.\n  • Settings → Complex Format: a+bi or r∠θ for complex number questions.",
      keyPoints: [
        "Math1/Math2/Math3 keyboards hold all calculus and matrix templates",
        "dSolve() (lowercase d, capital S) solves ODEs",
        "Standard format gives exact answers; Decimal forces approximation",
        "Use Geometry app to construct vector diagrams",
      ],
      workedExamples: [
        {
          problem: "Solve x² + x − 6 = 0 exactly.",
          steps: [
            "Open Main; ensure Standard format",
            "Type: solve(x^2 + x − 6 = 0, x)",
            "Tap EXE — output x = −3 or x = 2",
          ],
          answer: "x = −3 or x = 2.",
        },
        {
          problem: "Solve dy/dx = y/x with y(1) = 2.",
          steps: [
            "Type: dSolve(y' = y/x, x, y, {1, 2})",
            "Tap EXE — output y = 2x",
          ],
          answer: "y = 2x.",
        },
        {
          problem: "Differentiate sin(x²) with respect to x.",
          steps: [
            "Use the d/dx template from Math2",
            "Enter sin(x²) and variable x",
            "Output: 2x·cos(x²)",
          ],
          answer: "2x cos(x²).",
        },
      ],
      tips: [
        "Pin frequently used commands to the User keyboard",
        "Use eActivity pages to save reusable templates",
        "Switch to Decimal only at the final step to preserve precision",
      ],
      definitions: [
        { term: "eActivity", meaning: "ClassPad notebook combining text, math and graphs." },
        { term: "Soft keyboard", meaning: "Touchscreen keyboard with Math/abc/cat tabs." },
      ],
      formulas: [
        { name: "Solve", formula: "solve(eq, var)" },
        { name: "ODE", formula: "dSolve(y'=f, x, y, {x0, y0})" },
        { name: "Derivative", formula: "diff(expr, var)" },
      ],
      commonErrors: [
        "Capitalising Solve — the command is lowercase solve()",
        "Forgetting curly braces around initial conditions in dSolve",
      ],
      summary: [
        "ClassPad II groups tools into applications",
        "Master solve, dSolve, diff and integral templates",
        "Always check Standard vs Decimal and Radian vs Degree",
      ],
      quiz: [
        {
          question: "Which command on ClassPad solves an ODE?",
          options: ["deSolve()", "dSolve()", "solveODE()", "ode45()"],
          correctAnswer: 1,
          explanation: "Casio uses dSolve() (lowercase d, capital S).",
        },
        {
          question: "To get exact (surd) answers, set Basic Format to:",
          options: ["Decimal", "Scientific", "Standard", "Engineering"],
          correctAnswer: 2,
          explanation: "Standard format preserves exact form.",
        },
        {
          question: "Where do you find the d/dx template?",
          options: ["abc keyboard", "Math2 keyboard", "cat keyboard", "Settings"],
          correctAnswer: 1,
          explanation: "Calculus templates live on the Math2 keyboard.",
        },
      ],
    },
  ],

  // ─── Appendix C: Coding Using Python ──────────────────────────────
  "y12s-appC-python": [
    {
      title: "Introduction to Coding Using Python",
      explanation:
        "Python is the most widely-used pseudocode-friendly language. In VCE Specialist you must be able to READ Python code, TRACE it, and translate between pseudocode and Python.\n\nCORE SYNTAX MAP:\n  Pseudocode  →  Python\n  x ← 5       →  x = 5\n  if … then   →  if …:\n  else        →  else:\n  for i from a to b  →  for i in range(a, b+1):\n  while cond  →  while cond:\n  define f(x) →  def f(x):\n  return v    →  return v\n\nINDENTATION is significant in Python (4 spaces or 1 tab). Blocks are NOT delimited by braces.\n\nSPECIALIST-RELEVANT LIBRARIES:\n  • math — sqrt, sin, cos, exp, log, pi, e.\n  • cmath — for complex numbers (cmath.sqrt(−1) = 1j).\n  • statistics — mean, stdev for sample mean simulations.\n  • random — random(), gauss(mu, sigma) for CLT and Monte Carlo.\n\nKEY ALGORITHMS YOU MUST READ:\n  • Newton's method (root finding).\n  • Euler's method (ODE step-by-step).\n  • Sample-mean simulation for the CLT.\n  • Monte Carlo confidence-interval coverage.",
      keyPoints: [
        "Python uses : and indentation, not begin/end",
        "range(a, b) is exclusive of b",
        "import math before using sqrt, sin, etc.",
        "Use cmath for complex arithmetic",
      ],
      workedExamples: [
        {
          problem: "Trace:\n  s = 0\n  for i in range(1, 5):\n      s = s + i\n  print(s)",
          steps: [
            "range(1,5) yields i = 1, 2, 3, 4",
            "i=1: s=1; i=2: s=3; i=3: s=6; i=4: s=10",
          ],
          answer: "Prints 10.",
        },
        {
          problem:
            "Newton's method:\n  def newton(x):\n      return x − (x*x − 2)/(2*x)\n  x = 1\n  for _ in range(2):\n      x = newton(x)\n  print(x)",
          steps: [
            "Iter 1: x = 1 − (1−2)/2 = 1.5",
            "Iter 2: x = 1.5 − (2.25−2)/3 = 1.5 − 0.0833... ≈ 1.4167",
          ],
          answer: "≈ 1.4167.",
        },
        {
          problem:
            "Euler's method for y' = y, y(0)=1, h=0.5, two steps:\n  y = 1; x = 0; h = 0.5\n  for _ in range(2):\n      y = y + h*y\n      x = x + h",
          steps: [
            "Step 1: y = 1 + 0.5·1 = 1.5",
            "Step 2: y = 1.5 + 0.5·1.5 = 2.25",
          ],
          answer: "y(1) ≈ 2.25 (exact e ≈ 2.718).",
        },
      ],
      tips: [
        "range(a, b+1) is the Python equivalent of 'for i from a to b'",
        "Use ** for powers (x**2), not ^ (which is XOR in Python)",
        "Always import the library before using its functions",
      ],
      definitions: [
        { term: "Indentation", meaning: "Whitespace at the start of a line that defines block structure in Python." },
        { term: "Library", meaning: "A collection of pre-written functions imported with the import keyword." },
      ],
      formulas: [
        { name: "Power", formula: "x**n" },
        { name: "Square root", formula: "math.sqrt(x)" },
        { name: "Random normal", formula: "random.gauss(mu, sigma)" },
      ],
      commonErrors: [
        "Using ^ for powers — in Python ^ is bitwise XOR",
        "Off-by-one: range(1, n) does NOT include n",
        "Forgetting to import math or random",
      ],
      summary: [
        "Translate pseudocode to Python by mapping ← to =, then to :, indenting blocks",
        "range is exclusive of its upper bound",
        "Use math, cmath, statistics, random for Specialist tasks",
      ],
      quiz: [
        {
          question: "What does range(1, 5) generate?",
          options: ["1,2,3,4,5", "1,2,3,4", "0,1,2,3,4", "2,3,4,5"],
          correctAnswer: 1,
          explanation: "range stops one before the upper bound.",
        },
        {
          question: "Which operator computes 2 to the power 5?",
          options: ["2^5", "2**5", "pow(2)(5)", "2//5"],
          correctAnswer: 1,
          explanation: "Python uses ** for exponentiation.",
        },
        {
          question: "Which library provides random.gauss for simulating normal samples?",
          options: ["math", "statistics", "random", "cmath"],
          correctAnswer: 2,
          explanation: "random.gauss(mu, sigma) draws from a normal distribution.",
        },
      ],
    },
  ],

  // ─── Appendix D: Coding Using the TI-Nspire ───────────────────────
  "y12s-appD-ti-nspire-coding": [
    {
      title: "Introduction to Coding Using the TI-Nspire",
      explanation:
        "The TI-Nspire has a built-in PROGRAM EDITOR and a PYTHON EDITOR. For Specialist you should be able to READ both and translate them to/from pseudocode.\n\nTI-NSPIRE PROGRAM EDITOR (TI-Basic style):\n  • Insert → Program Editor → New.\n  • Programs use Define, Func/EndFunc or Prgm/EndPrgm.\n  • Assignment uses := (e.g. x := 5).\n  • Control structures: If…Then…EndIf, For i, a, b…EndFor, While…EndWhile.\n  • Output via Disp or Return.\n\nTI-NSPIRE PYTHON EDITOR:\n  • Insert → Add Python → New.\n  • Standard Python 3 syntax with extra modules ti_system, ti_plotlib.\n  • from math import * gives sqrt, sin, etc.\n\nWORKED TEMPLATE (TI-Basic):\n  Define newton(x) = Func\n    Local f, df\n    f := x^2 − 2\n    df := 2x\n    Return x − f/df\n  EndFunc",
      keyPoints: [
        "TI-Basic uses := for assignment, Python uses =",
        "For-loops in TI-Basic are inclusive: For i, 1, 4 runs i=1,2,3,4",
        "Local declarations keep variables inside a function",
        "Switch between TI-Basic and Python editors as required",
      ],
      workedExamples: [
        {
          problem:
            "Trace TI-Basic:\n  s := 0\n  For i, 1, 4\n    s := s + i\n  EndFor\n  Disp s",
          steps: [
            "For-loop is inclusive: i = 1,2,3,4",
            "i=1: s=1; i=2: s=3; i=3: s=6; i=4: s=10",
          ],
          answer: "Displays 10.",
        },
        {
          problem:
            "Translate Euler step to TI-Basic:\n  Pseudocode: y ← y + h·f(x,y); x ← x + h.",
          steps: [
            "y := y + h·f(x,y)",
            "x := x + h",
          ],
          answer: "Direct one-to-one mapping with := assignment.",
        },
        {
          problem:
            "Use TI-Nspire Python to print √2 to 6 d.p.",
          steps: [
            "from math import sqrt",
            "print(round(sqrt(2), 6))",
          ],
          answer: "Output 1.414214.",
        },
      ],
      tips: [
        "Press var to insert variable names cleanly in the editor",
        "Save reusable functions in a Library document (LibPub)",
        "Run programs from the Calculator page by typing the program name",
      ],
      definitions: [
        { term: "Prgm", meaning: "TI-Basic keyword starting a program block." },
        { term: "Func", meaning: "TI-Basic keyword for a value-returning function." },
        { term: "Local", meaning: "Restricts variable scope to inside a function." },
      ],
      formulas: [
        { name: "Assignment", formula: "x := value" },
        { name: "For loop", formula: "For i, a, b … EndFor", note: "Inclusive of b" },
      ],
      commonErrors: [
        "Using = instead of := for assignment",
        "Forgetting EndFor / EndIf, which causes a syntax error",
      ],
      summary: [
        "TI-Basic := assignment, inclusive For loops",
        "TI-Python is standard Python 3 with from math import *",
        "Both editors are accessed via Insert in a document",
      ],
      quiz: [
        {
          question: "Which symbol is assignment in TI-Basic?",
          options: ["=", ":=", "←", "=="],
          correctAnswer: 1,
          explanation: "TI-Basic uses := for assignment; = is equality test.",
        },
        {
          question: "How many iterations does 'For i, 2, 5' perform?",
          options: ["3", "4", "5", "2"],
          correctAnswer: 1,
          explanation: "Inclusive range 2,3,4,5 = 4 iterations.",
        },
        {
          question: "Which editor uses standard Python 3 syntax on TI-Nspire?",
          options: ["Program Editor", "Python Editor", "Notes", "Lists & Spreadsheet"],
          correctAnswer: 1,
          explanation: "The Python Editor runs Python 3 with extra ti_* modules.",
        },
      ],
    },
  ],

  // ─── Appendix E: Coding Using the Casio ClassPad ──────────────────
  "y12s-appE-classpad-coding": [
    {
      title: "Introduction to Coding Using the Casio ClassPad",
      explanation:
        "The Casio ClassPad II offers a PROGRAM application and a PYTHON application. You should be able to READ both and translate to/from pseudocode.\n\nPROGRAM APP (ClassPad-Basic):\n  • Open the Program Loader; create a new program with Edit → New.\n  • Statement separators are : (colon) within a line, newline otherwise.\n  • Assignment uses ⇒ (the right-arrow on the keyboard) — e.g. 5 ⇒ x stores 5 into x.\n  • Conditionals: If cond:Then … Else … IfEnd.\n  • Loops: For i, a, To b … Next; While cond … WhileEnd.\n  • Output via Print.\n\nPYTHON APP:\n  • Standard Python 3 with casioplot for graphics.\n  • from math import sqrt, sin, exp, etc.\n\nTYPICAL TEMPLATE (ClassPad-Basic):\n  0 ⇒ s\n  For 1 ⇒ i To 4\n    s + i ⇒ s\n  Next\n  Print s",
      keyPoints: [
        "ClassPad-Basic: assignment uses ⇒ (value first, variable second)",
        "Loops use For…Next or While…WhileEnd",
        "Python app uses standard Python 3 syntax",
        "Save programs as files for reuse across problems",
      ],
      workedExamples: [
        {
          problem:
            "Trace:\n  0 ⇒ s\n  For 1 ⇒ i To 4\n    s + i ⇒ s\n  Next\n  Print s",
          steps: [
            "i=1: s=1; i=2: s=3; i=3: s=6; i=4: s=10",
            "Loop ends after i=4",
          ],
          answer: "Prints 10.",
        },
        {
          problem:
            "Translate the pseudocode 'if x > 0 then return 1 else return −1' to ClassPad-Basic.",
          steps: [
            "If x > 0:Then",
            "  Return 1",
            "Else",
            "  Return −1",
            "IfEnd",
          ],
          answer: "Closed by IfEnd, with : separating cond and Then.",
        },
        {
          problem: "Use the Python app to evaluate e^(0.5).",
          steps: [
            "from math import exp",
            "print(exp(0.5))  # ≈ 1.6487",
          ],
          answer: "≈ 1.6487.",
        },
      ],
      tips: [
        "The ⇒ key is on the soft keyboard's mth or var tab",
        "Use Local to scope variables inside a function",
        "Test on a small input before running long simulations",
      ],
      definitions: [
        { term: "Program Loader", meaning: "ClassPad app for managing and editing programs." },
        { term: "⇒", meaning: "ClassPad assignment arrow: value ⇒ variable." },
      ],
      formulas: [
        { name: "Assignment", formula: "value ⇒ variable" },
        { name: "For loop", formula: "For start ⇒ i To end … Next", note: "Inclusive of end" },
      ],
      commonErrors: [
        "Reversing the assignment direction — value comes BEFORE the arrow",
        "Forgetting IfEnd or Next, which leaves the block unclosed",
        "Using Python ** in ClassPad-Basic — use ^ instead",
      ],
      summary: [
        "ClassPad-Basic uses ⇒ for assignment and For…Next loops",
        "Python app is standard Python 3 with casioplot graphics",
        "Always close blocks with IfEnd / Next / WhileEnd",
      ],
      quiz: [
        {
          question: "Which symbol assigns a value in ClassPad-Basic?",
          options: ["=", ":=", "⇒", "←"],
          correctAnswer: 2,
          explanation: "ClassPad-Basic uses value ⇒ variable.",
        },
        {
          question: "How is a For loop closed in ClassPad-Basic?",
          options: ["EndFor", "Next", "End", "Loop"],
          correctAnswer: 1,
          explanation: "ClassPad-Basic uses Next to close For loops.",
        },
        {
          question: "Which language does the ClassPad Python app run?",
          options: ["Python 2", "Python 3", "MicroPython only", "Lua"],
          correctAnswer: 1,
          explanation: "It runs standard Python 3 with the casioplot module.",
        },
      ],
    },
  ],
};
