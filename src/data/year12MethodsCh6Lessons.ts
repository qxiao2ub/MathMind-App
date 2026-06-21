import type { TopicLessonsMap } from "./topicLessons";

// Year 12 Mathematical Methods — Chapter 6: Circular Functions (VCE Unit 3)

export const year12MethodsCh6Lessons: TopicLessonsMap = {
  "y12m-ch6-6a-degrees-radians": [
    {
      title: "Measuring Angles in Degrees and Radians",
      explanation:
        "An angle of one RADIAN subtends an arc of length equal to the radius of the circle. Because the full circumference of a unit circle is 2π, a full revolution of 360° equals 2π radians. The conversion identity is:\n\nπ radians = 180°.\n\nFROM DEGREES TO RADIANS multiply by π/180.\nFROM RADIANS TO DEGREES multiply by 180/π.\n\nCommon equivalences worth memorising:\n  30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π, 270° = 3π/2, 360° = 2π.\n\nIn VCE Methods every Unit 3/4 trigonometric function is in radians by default. Calculus rules (e.g. d/dx(sin x) = cos x) only hold in radian measure.\n\nARC LENGTH on a circle of radius r subtended by an angle θ in radians is s = rθ. SECTOR AREA is A = (1/2)r²θ.",
      keyPoints: [
        "π rad = 180°",
        "Multiply by π/180 to convert degrees → radians",
        "Methods uses radians by default; switch CAS off DEG mode",
        "Arc length s = rθ; sector area A = ½r²θ",
      ],
      workedExamples: [
        {
          problem: "Convert 75° to radians and 7π/12 radians to degrees.",
          steps: [
            "75 × π/180 = 75π/180 = 5π/12",
            "7π/12 × 180/π = 7·15 = 105°",
          ],
          answer: "75° = 5π/12 rad; 7π/12 rad = 105°.",
        },
        {
          problem: "Find the arc length of a circle of radius 8 cm subtended by an angle of π/3 rad.",
          steps: [
            "s = rθ = 8 × π/3 = 8π/3 cm",
            "≈ 8.38 cm",
          ],
          answer: "8π/3 cm ≈ 8.38 cm.",
        },
      ],
      tips: [
        "Always check your CAS is in RAD mode before sketching or solving",
      ],
      formulas: [
        { name: "Conversion", formula: "π rad = 180°" },
        { name: "Arc length", formula: "s = rθ" },
        { name: "Sector area", formula: "A = ½ r² θ" },
      ],
      examQuestion: {
        problem: "A sector of a circle has radius 12 cm and arc length 9π cm. Find the angle subtended at the centre and the area of the sector.",
        solution: [
          "θ = s/r = 9π/12 = 3π/4 rad",
          "A = ½ r² θ = ½ × 144 × 3π/4 = 54π cm²",
        ],
        answer: "θ = 3π/4 rad; area 54π cm².",
        marks: 3,
      },
      commonErrors: [
        "Mixing degrees and radians in the same calculation",
        "Using A = πr²θ instead of ½r²θ for a sector",
      ],
      summary: [
        "Radians are the natural unit for calculus and circle geometry",
      ],
      quiz: [
        { question: "180° in radians:", options: ["π/2", "π", "2π", "π/4"], correctAnswer: 1, explanation: "Definition." },
        { question: "Arc length formula:", options: ["s = r²θ", "s = rθ", "s = θ/r", "s = 2πr"], correctAnswer: 1, explanation: "Direct from radian definition." },
        { question: "60° in radians:", options: ["π/4", "π/3", "π/6", "π/2"], correctAnswer: 1, explanation: "60 × π/180." },
      ],
    },
  ],

  "y12m-ch6-6b-defining": [
    {
      title: "Defining Circular Functions: Sine, Cosine and Tangent",
      explanation:
        "On the UNIT CIRCLE x² + y² = 1, for any angle θ measured anti-clockwise from the positive x-axis the point on the circle has coordinates (cos θ, sin θ). This extends sin and cos to all real angles, not just acute ones.\n\nFROM THE UNIT CIRCLE:\n  cos θ = x-coordinate\n  sin θ = y-coordinate\n  tan θ = sin θ / cos θ = y/x (undefined when x = 0)\n\nQUADRANT SIGNS (CAST/ASTC mnemonic):\n  • Q1 (0, π/2): all positive\n  • Q2 (π/2, π): sin positive\n  • Q3 (π, 3π/2): tan positive\n  • Q4 (3π/2, 2π): cos positive\n\nEXACT VALUES TABLE:\n  sin 0 = 0, sin π/6 = 1/2, sin π/4 = √2/2, sin π/3 = √3/2, sin π/2 = 1\n  cos values mirror in reverse\n  tan π/6 = 1/√3, tan π/4 = 1, tan π/3 = √3\n\nPERIODICITY: sin and cos have period 2π; tan has period π.",
      keyPoints: [
        "(cos θ, sin θ) = unit-circle point at angle θ",
        "Use CAST diagram for sign in each quadrant",
        "Memorise exact values for π/6, π/4, π/3",
        "Period: sin/cos = 2π, tan = π",
      ],
      workedExamples: [
        {
          problem: "Find the exact values of sin(2π/3) and cos(2π/3).",
          steps: [
            "2π/3 is in Q2",
            "Reference angle = π − 2π/3 = π/3",
            "sin(2π/3) = +sin(π/3) = √3/2",
            "cos(2π/3) = −cos(π/3) = −1/2",
          ],
          answer: "sin(2π/3) = √3/2, cos(2π/3) = −1/2.",
        },
      ],
      tips: [
        "Always identify the quadrant first, then the reference angle",
      ],
      formulas: [
        { name: "Tangent", formula: "tan θ = sin θ / cos θ" },
        { name: "Pythagorean", formula: "sin² θ + cos² θ = 1" },
      ],
      examQuestion: {
        problem: "Without a calculator, evaluate sin(7π/6) + cos(11π/6).",
        solution: [
          "7π/6 in Q3: reference π/6 → sin(7π/6) = −1/2",
          "11π/6 in Q4: reference π/6 → cos(11π/6) = +√3/2",
          "Sum = −1/2 + √3/2 = (√3 − 1)/2",
        ],
        answer: "(√3 − 1)/2.",
        marks: 3,
      },
      commonErrors: [
        "Wrong quadrant signs",
        "Using degree exact values when in radians",
      ],
      summary: [
        "Quadrant + reference angle = exact value",
      ],
      quiz: [
        { question: "sin(π/2) =", options: ["0", "1/2", "1", "−1"], correctAnswer: 2, explanation: "Top of unit circle." },
        { question: "cos(π) =", options: ["1", "0", "−1", "1/2"], correctAnswer: 2, explanation: "Leftmost of unit circle." },
        { question: "Period of tan:", options: ["π/2", "π", "2π", "4π"], correctAnswer: 1, explanation: "Half of sin/cos period." },
      ],
    },
  ],

  "y12m-ch6-6c-symmetry-pythag": [
    {
      title: "Further Symmetry Properties and the Pythagorean Identity",
      explanation:
        "The unit-circle definitions deliver immediate SYMMETRY IDENTITIES:\n\nNEGATIVE-ANGLE (parity):\n  sin(−θ) = −sin θ (odd)\n  cos(−θ) = cos θ (even)\n  tan(−θ) = −tan θ (odd)\n\nSUPPLEMENTARY (reflection in π/2):\n  sin(π − θ) = sin θ\n  cos(π − θ) = −cos θ\n\nROTATIONAL:\n  sin(π + θ) = −sin θ\n  cos(π + θ) = −cos θ\n  sin(2π − θ) = −sin θ\n  cos(2π − θ) = cos θ\n\nCO-FUNCTION:\n  sin(π/2 − θ) = cos θ\n  cos(π/2 − θ) = sin θ\n\nPYTHAGOREAN IDENTITY: sin²θ + cos²θ = 1. This rearranges to sin²θ = 1 − cos²θ and cos²θ = 1 − sin²θ — used constantly in equation-solving and integration.\n\nThese identities are the key to simplifying expressions and solving equations algebraically.",
      keyPoints: [
        "sin is odd; cos is even",
        "Co-function: sin(π/2 − θ) = cos θ",
        "sin² θ + cos² θ = 1",
      ],
      workedExamples: [
        {
          problem: "If sin θ = 3/5 and θ ∈ (π/2, π), find cos θ exactly.",
          steps: [
            "cos² θ = 1 − sin² θ = 1 − 9/25 = 16/25",
            "cos θ = ±4/5",
            "θ in Q2 → cos negative",
            "cos θ = −4/5",
          ],
          answer: "cos θ = −4/5.",
        },
      ],
      tips: [
        "The Pythagorean identity converts between sin² and cos² seamlessly",
      ],
      formulas: [
        { name: "Pythagorean", formula: "sin² θ + cos² θ = 1" },
        { name: "Parity", formula: "sin(−θ) = −sin θ; cos(−θ) = cos θ" },
        { name: "Co-function", formula: "sin(π/2 − θ) = cos θ" },
      ],
      examQuestion: {
        problem: "Simplify sin(π − x)·cos(−x) + cos(π − x)·sin(−x).",
        solution: [
          "sin(π − x) = sin x; cos(−x) = cos x; cos(π − x) = −cos x; sin(−x) = −sin x",
          "= sin x · cos x + (−cos x)(−sin x)",
          "= sin x cos x + sin x cos x",
          "= 2 sin x cos x",
        ],
        answer: "2 sin x cos x (i.e. sin 2x).",
        marks: 3,
      },
      commonErrors: [
        "Treating cos as odd",
        "Missing sign changes in supplementary identities",
      ],
      summary: [
        "Symmetry identities + Pythagorean identity solve most algebraic trig problems",
      ],
      quiz: [
        { question: "cos(−x) =", options: ["−cos x", "cos x", "sin x", "−sin x"], correctAnswer: 1, explanation: "cos is even." },
        { question: "sin² θ + cos² θ =", options: ["0", "1", "θ", "tan² θ"], correctAnswer: 1, explanation: "Pythagorean identity." },
        { question: "sin(π/2 − θ) =", options: ["sin θ", "cos θ", "−sin θ", "−cos θ"], correctAnswer: 1, explanation: "Co-function identity." },
      ],
    },
  ],

  "y12m-ch6-6d-graphs-sin-cos": [
    {
      title: "Graphs of Sine and Cosine",
      explanation:
        "y = sin(x):\n  • Domain ℝ, Range [−1, 1]\n  • Period 2π, Amplitude 1\n  • Through (0, 0), max at (π/2, 1), zero at (π, 0), min at (3π/2, −1)\n\ny = cos(x):\n  • Same domain and range, period 2π\n  • Maximum at (0, 1) — cos starts at the top\n  • Zero at π/2, minimum at π, zero at 3π/2\n\nCosine is sine shifted left by π/2: cos x = sin(x + π/2).\n\nFor y = a sin(nx) and y = a cos(nx):\n  • Amplitude = |a|\n  • Period = 2π/|n|\n  • Frequency in [0, 2π] = n complete cycles\n\nSketching protocol:\n  1. Mark amplitude on y-axis (±|a|).\n  2. Mark one full period on x-axis (length 2π/n).\n  3. Divide period into quarters; plot zeros, max, min in turn.",
      keyPoints: [
        "Period of y = a sin(nx) is 2π/|n|",
        "Amplitude is |a| (always positive)",
        "Cosine = sine translated left by π/2",
      ],
      workedExamples: [
        {
          problem: "State the period and amplitude of y = 3 sin(2x), then sketch one full period from 0.",
          steps: [
            "Amplitude = 3; Period = 2π/2 = π",
            "Quarter period = π/4",
            "Key points: (0, 0), (π/4, 3), (π/2, 0), (3π/4, −3), (π, 0)",
          ],
          answer: "Amplitude 3, period π; one cycle spans [0, π].",
        },
      ],
      tips: [
        "Quarter the period for fast plotting of key points",
      ],
      formulas: [
        { name: "Period", formula: "T = 2π/|n|" },
      ],
      examQuestion: {
        problem: "y = −2 cos(3x). State amplitude and period and sketch one period from x = 0.",
        solution: [
          "Amplitude = 2; period = 2π/3",
          "Negative coefficient flips cosine: starts at (0, −2)",
          "Quarters at x = 0, π/6, π/3, π/2, 2π/3",
          "Key points: (0, −2), (π/6, 0), (π/3, 2), (π/2, 0), (2π/3, −2)",
        ],
        answer: "Amplitude 2, period 2π/3; one full inverted cosine wave.",
        marks: 4,
      },
      commonErrors: [
        "Stating amplitude as negative",
        "Forgetting to flip the curve when a < 0",
      ],
      summary: [
        "Read amplitude and period straight from the equation; flip if a < 0",
      ],
      quiz: [
        { question: "Period of y = sin(4x):", options: ["π/2", "π", "2π", "4π"], correctAnswer: 0, explanation: "2π/4 = π/2." },
        { question: "Amplitude of y = −5 cos x:", options: ["−5", "5", "1/5", "10"], correctAnswer: 1, explanation: "Always positive |a|." },
        { question: "Range of y = 2 sin x:", options: ["[−1, 1]", "[−2, 2]", "[0, 2]", "ℝ"], correctAnswer: 1, explanation: "Amplitude scales the range." },
      ],
    },
  ],

  "y12m-ch6-6e-trig-eq": [
    {
      title: "Solution of Trigonometric Equations",
      explanation:
        "To solve a trigonometric equation over a stated interval (e.g. [0, 2π]):\n  1. Get the equation into the form sin x = c, cos x = c or tan x = c (use identities or factoring if needed).\n  2. Find the BASE ANGLE α from the corresponding inverse function (always in Q1).\n  3. Use quadrant signs and symmetry to find all solutions in the interval.\n\nBASE ANGLE patterns:\n  sin x = c (positive): x = α or π − α\n  sin x = c (negative): x = π + α or 2π − α\n  cos x = c (positive): x = α or 2π − α\n  cos x = c (negative): x = π − α or π + α\n  tan x = c (positive): x = α or π + α (period π)\n  tan x = c (negative): x = π − α or 2π − α\n\nFor equations like sin(2x) = c, FIRST expand the domain (e.g. 2x ∈ [0, 4π]), solve, then halve. For sin(x − π/3) = c, shift the domain (let u = x − π/3, expand, solve, then shift back).",
      keyPoints: [
        "Base angle is always in Q1 from the inverse",
        "Use quadrant signs to extend to all solutions",
        "For sin(nx) etc., expand the domain before solving",
      ],
      workedExamples: [
        {
          problem: "Solve sin x = 1/2 for x ∈ [0, 2π].",
          steps: [
            "Base angle α = π/6",
            "sin positive in Q1 and Q2 → x = π/6 or π − π/6 = 5π/6",
          ],
          answer: "x = π/6 or 5π/6.",
        },
        {
          problem: "Solve 2cos(2x) = √3 for x ∈ [0, 2π].",
          steps: [
            "cos(2x) = √3/2 → base angle α = π/6",
            "Let u = 2x ∈ [0, 4π]",
            "cos positive: u = π/6, 11π/6, 13π/6, 23π/6",
            "x = u/2: π/12, 11π/12, 13π/12, 23π/12",
          ],
          answer: "x = π/12, 11π/12, 13π/12, 23π/12.",
        },
      ],
      tips: [
        "Always expand the domain before solving multi-angle equations",
      ],
      formulas: [
        { name: "Base angle", formula: "α = sin⁻¹|c|, cos⁻¹|c|, tan⁻¹|c|" },
      ],
      examQuestion: {
        problem: "Solve 2 sin²(x) + sin x − 1 = 0 for x ∈ [0, 2π].",
        solution: [
          "Let u = sin x: 2u² + u − 1 = 0",
          "(2u − 1)(u + 1) = 0 → u = 1/2 or u = −1",
          "sin x = 1/2 → x = π/6 or 5π/6",
          "sin x = −1 → x = 3π/2",
        ],
        answer: "x = π/6, 5π/6, 3π/2.",
        marks: 4,
      },
      commonErrors: [
        "Stopping after the principal value",
        "Forgetting to halve x after solving for 2x",
      ],
      summary: [
        "Base angle + quadrant signs = all solutions over any interval",
      ],
      quiz: [
        { question: "Number of solutions of sin x = 0 for x ∈ [0, 2π]:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "x = 0, π, 2π." },
        { question: "tan x = 1, x ∈ [0, 2π]:", options: ["π/4", "π/4 only", "π/4 and 5π/4", "π/4 and 3π/4"], correctAnswer: 2, explanation: "Period π." },
        { question: "cos x = −1/2 first positive solution:", options: ["π/6", "π/3", "2π/3", "5π/6"], correctAnswer: 2, explanation: "Q2 reference π/3." },
      ],
    },
  ],

  "y12m-ch6-6f-a-sin-n": [
    {
      title: "Graphs of y = a sin n(t ± ε) and y = a cos n(t ± ε)",
      explanation:
        "Adding a horizontal shift introduces PHASE TRANSLATION. The full transformed form is:\n\n  y = a sin(n(t − h)) and y = a cos(n(t − h)),\n\nwhere h is the horizontal shift (positive h means RIGHT shift).\n\nKey features:\n  • Amplitude = |a|\n  • Period = 2π/|n|\n  • Phase shift = h (read SIGNS carefully — y = sin(n(t + h)) is shifted LEFT by h)\n  • Starting key point shifts from t = 0 to t = h.\n\nSKETCHING ORDER:\n  1. Mark the amplitude on the y-axis.\n  2. Mark the new starting point t = h.\n  3. Step forward by quarter-period four times to complete one cycle.\n  4. Continue periodically as the domain demands.\n\nWhen the equation is given as y = a sin(nt + b), factor n out of the bracket: y = a sin(n(t + b/n)) so the shift = −b/n.",
      keyPoints: [
        "y = a sin(n(t − h)) shifts right by h",
        "Period = 2π/|n|; Amplitude = |a|",
        "Always factor n before reading the shift",
      ],
      workedExamples: [
        {
          problem: "Sketch y = 2 sin(2(t − π/4)) for one period from t = π/4.",
          steps: [
            "Amplitude 2, period π, shift right π/4",
            "Quarter-period = π/4",
            "Key points: (π/4, 0), (π/2, 2), (3π/4, 0), (π, −2), (5π/4, 0)",
          ],
          answer: "One full sine wave starting at (π/4, 0), amplitude 2.",
        },
      ],
      tips: [
        "If the equation is sin(2t + π/2), factor: sin(2(t + π/4)) → shift left π/4",
      ],
      formulas: [
        { name: "Phase form", formula: "y = a sin(n(t − h))" },
      ],
      examQuestion: {
        problem: "Sketch y = 3 cos(2t + π) for t ∈ [0, 2π].",
        solution: [
          "Factor: y = 3 cos(2(t + π/2))",
          "Amplitude 3, period π, shift left π/2",
          "First max at t = −π/2 (outside) — instead use periodicity: max at t = π/2, 3π/2",
          "Two full cycles in [0, 2π]: zeros at π/4, 3π/4, 5π/4, 7π/4; mins at 0, π, 2π",
        ],
        answer: "Amplitude 3, period π; mins at t = 0, π, 2π and maxes at π/2, 3π/2.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting to factor n from the bracket",
        "Reading the wrong direction for the shift",
      ],
      summary: [
        "Phase shift is read from the FACTORED form: n(t − h)",
      ],
      quiz: [
        { question: "Phase of y = sin(t − π/3):", options: ["Left π/3", "Right π/3", "Up π/3", "Down π/3"], correctAnswer: 1, explanation: "Subtract inside → right." },
        { question: "Period of y = cos(3t + π):", options: ["π/3", "2π/3", "π", "2π"], correctAnswer: 1, explanation: "2π/3." },
        { question: "Amplitude of y = −4 sin(2t − 1):", options: ["−4", "4", "2", "1"], correctAnswer: 1, explanation: "|a|." },
      ],
    },
  ],

  "y12m-ch6-6g-a-sin-n-plus-b": [
    {
      title: "Graphs of y = a sin n(t ± ε) ± b and y = a cos n(t ± ε) ± b",
      explanation:
        "Adding a vertical translation lifts (or lowers) the entire wave:\n\n  y = a sin(n(t − h)) + b\n\nKey features:\n  • Amplitude = |a|\n  • Period = 2π/|n|\n  • Mean line (equilibrium) y = b — replaces the x-axis as the centre of oscillation\n  • Range = [b − |a|, b + |a|]\n  • Maximum value = b + |a|; minimum = b − |a|.\n\nSKETCHING ORDER:\n  1. Draw the mean line y = b as a dashed horizontal reference.\n  2. Mark amplitude bands at y = b ± |a|.\n  3. Plot the unshifted wave's key points relative to the mean line.\n  4. Apply the horizontal shift.\n\nThis form models real-world oscillation around a non-zero baseline (tides above sea level, average daily temperature, vibrating systems).",
      keyPoints: [
        "Vertical shift moves the mean line to y = b",
        "Range becomes [b − |a|, b + |a|]",
        "Mean line is the centre of oscillation",
      ],
      workedExamples: [
        {
          problem: "State the amplitude, period, mean line and range of y = 4 sin(πt) + 5.",
          steps: [
            "Amplitude = 4; Period = 2π/π = 2",
            "Mean line y = 5",
            "Range = [5 − 4, 5 + 4] = [1, 9]",
          ],
          answer: "Amplitude 4, period 2, mean y = 5, range [1, 9].",
        },
      ],
      tips: [
        "Always identify the mean line first; everything else is symmetric about it",
      ],
      formulas: [
        { name: "Full form", formula: "y = a sin(n(t − h)) + b" },
        { name: "Range", formula: "[b − |a|, b + |a|]" },
      ],
      examQuestion: {
        problem: "Tide depth in metres is modelled by D(t) = 3 cos(π t/6) + 7, t in hours from midnight. Find the maximum and minimum depths and times in a 24-hour period.",
        solution: [
          "Amplitude 3; mean 7 → max 10 m, min 4 m",
          "Period = 2π/(π/6) = 12 hours",
          "Maxes when cos = 1 → t = 0, 12, 24",
          "Mins when cos = −1 → t = 6, 18",
        ],
        answer: "Max depth 10 m at t = 0, 12, 24; min 4 m at t = 6, 18.",
        marks: 4,
      },
      commonErrors: [
        "Forgetting to add b to the maximum",
        "Stating the amplitude as the maximum value",
      ],
      summary: [
        "b is the centre line; |a| is the swing either side",
      ],
      quiz: [
        { question: "Range of y = 2 cos x − 1:", options: ["[−1, 3]", "[−3, 1]", "[−2, 2]", "[1, 3]"], correctAnswer: 1, explanation: "Mean −1 ± 2." },
        { question: "Max of y = 5 sin x + 4:", options: ["4", "5", "9", "20"], correctAnswer: 2, explanation: "b + |a|." },
        { question: "Mean line of y = 3 sin(2x) + 7:", options: ["y = 0", "y = 3", "y = 7", "y = 10"], correctAnswer: 2, explanation: "Vertical shift = 7." },
      ],
    },
  ],

  "y12m-ch6-6h-addition-ordinates": [
    {
      title: "Addition of Ordinates for Circular Functions",
      explanation:
        "ADDITION OF ORDINATES is a graphical method for sketching the sum y = f(x) + g(x) of two known functions by adding the y-values at each x.\n\nFor circular functions this is most useful for:\n  • y = sin x + cos x — produces a single sinusoid of larger amplitude.\n  • y = x + sin x — a slanting wave around the line y = x.\n  • y = sin x + sin 2x — produces a more complex periodic shape.\n\nPROCEDURE:\n  1. Sketch each component lightly.\n  2. At several key x-values (zeros, maxes, mins of each part), add the y-coordinates.\n  3. Smooth the result through these new points.\n\nUseful checks:\n  • Where one component is zero, the sum equals the other component.\n  • Where both components share a sign, the sum is amplified.\n  • Where they have opposite signs, the sum partially cancels.\n\nThe sum of two sinusoids of the same frequency is again a sinusoid; differing frequencies produce a non-sinusoidal periodic wave.",
      keyPoints: [
        "Sum of ordinates: add y-values pointwise",
        "Sketch components first, then add at key x-values",
        "Same-frequency sum = sinusoid; different = compound wave",
      ],
      workedExamples: [
        {
          problem: "Sketch y = sin x + cos x for x ∈ [0, 2π] using addition of ordinates.",
          steps: [
            "Key x-values: 0, π/4, π/2, π, 5π/4, 3π/2, 2π",
            "(0): 0 + 1 = 1",
            "(π/4): √2/2 + √2/2 = √2 ≈ 1.41 (max)",
            "(π/2): 1 + 0 = 1",
            "(π): 0 − 1 = −1",
            "(5π/4): −√2 (min)",
            "(3π/2): −1 + 0 = −1",
            "(2π): 0 + 1 = 1",
            "Result is a sinusoid with amplitude √2, period 2π, shifted left π/4",
          ],
          answer: "y = √2 sin(x + π/4); amplitude √2 ≈ 1.41.",
        },
      ],
      tips: [
        "Always identify zeros first — they pin the sum to the other component's value",
      ],
      formulas: [
        { name: "Same-frequency sum", formula: "a sin x + b cos x = R sin(x + α), R = √(a² + b²)" },
      ],
      examQuestion: {
        problem: "Express √3 sin x + cos x in the form R sin(x + α) where R > 0 and 0 < α < π/2.",
        solution: [
          "R = √(3 + 1) = 2",
          "tan α = 1/√3 → α = π/6",
          "√3 sin x + cos x = 2 sin(x + π/6)",
        ],
        answer: "2 sin(x + π/6).",
        marks: 3,
      },
      commonErrors: [
        "Adding the amplitudes instead of using R = √(a² + b²)",
        "Forgetting that addition of ordinates is approximate, not algebraic",
      ],
      summary: [
        "Pointwise addition for sketches; R-formula for algebraic sums",
      ],
      quiz: [
        { question: "Amplitude of 3 sin x + 4 cos x:", options: ["3", "4", "5", "7"], correctAnswer: 2, explanation: "√(9+16)=5." },
        { question: "Where component f = 0, the sum equals:", options: ["0", "g(x)", "f(x)", "f+g"], correctAnswer: 1, explanation: "Other ordinate." },
        { question: "sin x + sin x =", options: ["sin 2x", "2 sin x", "sin x", "0"], correctAnswer: 1, explanation: "Doubling." },
      ],
    },
  ],

  "y12m-ch6-6i-rules-from-graphs": [
    {
      title: "Determining Rules for Graphs of Circular Functions",
      explanation:
        "From a sinusoidal graph, identify:\n  • MEAN LINE → b = (max + min)/2\n  • AMPLITUDE → |a| = (max − min)/2\n  • PERIOD → distance between consecutive maxes (or zeros of the same type) → n = 2π/period\n  • PHASE SHIFT → x-coordinate of a chosen 'starting' key point.\n\nDecide whether to use sin or cos based on which is more convenient: cos starts at a maximum if there's no shift; sin starts at the mean line going up. Choose whichever simplifies the phase.\n\nGENERAL FORM: y = a sin(n(t − h)) + b or y = a cos(n(t − h)) + b. The sign of a is decided by whether the chosen starting point reaches the max (positive) or min (negative).",
      keyPoints: [
        "b = average of max and min",
        "|a| = half the swing",
        "n = 2π / period",
        "Choose sin or cos to minimise phase shift",
      ],
      workedExamples: [
        {
          problem: "A sinusoid has max 9 at t = 1 and the next min 1 at t = 5. Find a rule.",
          steps: [
            "Mean b = (9 + 1)/2 = 5",
            "Amplitude |a| = (9 − 1)/2 = 4",
            "Half-period = 5 − 1 = 4 → period = 8 → n = 2π/8 = π/4",
            "Choose cos starting at max → y = 4 cos((π/4)(t − 1)) + 5",
          ],
          answer: "y = 4 cos((π/4)(t − 1)) + 5.",
        },
      ],
      tips: [
        "Use cos at a maximum and sin at a midline-up-crossing for the cleanest answer",
      ],
      formulas: [
        { name: "Sinusoidal model", formula: "y = a sin(n(t − h)) + b" },
      ],
      examQuestion: {
        problem: "From a graph: amplitude 3, period 4, mean y = 2, first max at t = 0.5. Find a rule.",
        solution: [
          "n = 2π/4 = π/2",
          "Use cos with phase h = 0.5",
          "y = 3 cos((π/2)(t − 0.5)) + 2",
        ],
        answer: "y = 3 cos((π/2)(t − 0.5)) + 2.",
        marks: 3,
      },
      commonErrors: [
        "Using max value as amplitude",
        "Mixing 2π and 360 when computing n",
      ],
      summary: [
        "Mean, amplitude, period, then phase — in that order",
      ],
      quiz: [
        { question: "Mean line if max 6 and min 2:", options: ["y = 2", "y = 4", "y = 6", "y = 8"], correctAnswer: 1, explanation: "(6+2)/2 = 4." },
        { question: "Amplitude if max 6 and min 2:", options: ["1", "2", "4", "6"], correctAnswer: 1, explanation: "(6−2)/2 = 2." },
        { question: "Period 6 ⇒ n =", options: ["π/3", "π/6", "2π/3", "π"], correctAnswer: 0, explanation: "n = 2π/6." },
      ],
    },
  ],

  "y12m-ch6-6j-tangent": [
    {
      title: "The Tangent Function",
      explanation:
        "y = tan x = sin x / cos x has very different graph behaviour from sin and cos.\n\nKEY FEATURES:\n  • Domain: all real x except x = π/2 + kπ (where cos x = 0)\n  • Range: ℝ\n  • Period: π (half of sin/cos)\n  • Vertical asymptotes at x = π/2 + kπ\n  • Through the origin; passes (π/4, 1) and (−π/4, −1)\n  • Strictly increasing on each branch\n\nFor y = a tan(n(x − h)) + c:\n  • Period = π/|n|\n  • Asymptotes shift to x = h + π/(2n) + kπ/n\n  • Vertical translation by c moves the entire graph up/down (no 'mean line' but a centre value).\n\nTangent equations: tan x = c has base angle α = tan⁻¹|c| and solutions x = α + kπ (positive c) or x = π − α + kπ (negative c).",
      keyPoints: [
        "Period of tan is π",
        "Asymptotes at x = π/2 + kπ for tan x",
        "Period of y = a tan(nx) is π/|n|",
      ],
      workedExamples: [
        {
          problem: "Sketch y = tan(2x) on [0, π], showing asymptotes.",
          steps: [
            "Period = π/2 → two cycles fit in [0, π]",
            "Asymptotes where 2x = π/2 + kπ → x = π/4, 3π/4",
            "Zeros at x = 0, π/2, π",
            "Each branch increases from −∞ to +∞",
          ],
          answer: "Two tangent branches in [0, π]; asymptotes at π/4 and 3π/4.",
        },
      ],
      tips: [
        "Period π/|n| — half the sine/cosine equivalent",
      ],
      formulas: [
        { name: "Period", formula: "T = π/|n|" },
        { name: "Asymptotes (basic)", formula: "x = π/2 + kπ" },
      ],
      examQuestion: {
        problem: "Solve tan x = √3 for x ∈ [0, 2π].",
        solution: [
          "Base angle α = π/3",
          "Period π → x = π/3, π/3 + π = 4π/3",
        ],
        answer: "x = π/3 or 4π/3.",
        marks: 2,
      },
      commonErrors: [
        "Using the sin/cos period (2π) for tangent",
        "Forgetting to mark asymptotes when sketching",
      ],
      summary: [
        "Tangent: period π, asymptotes at the cosine zeros",
      ],
      quiz: [
        { question: "Period of y = tan(3x):", options: ["π/3", "π", "2π/3", "2π"], correctAnswer: 0, explanation: "π/|n|." },
        { question: "tan(π/4) =", options: ["0", "1", "√3", "Undefined"], correctAnswer: 1, explanation: "Standard value." },
        { question: "tan x undefined at:", options: ["0", "π", "π/2", "2π"], correctAnswer: 2, explanation: "cos = 0 there." },
      ],
    },
  ],

  "y12m-ch6-6k-general-solutions": [
    {
      title: "General Solution of Trigonometric Equations",
      explanation:
        "When no domain is specified, trig equations have INFINITELY MANY solutions. The general solution captures all of them with an integer parameter k ∈ ℤ.\n\nGENERAL SOLUTION TEMPLATES (let α be the base angle from the inverse function, k ∈ ℤ):\n\n  sin x = c (|c| ≤ 1):\n    x = α + 2kπ  or  x = (π − α) + 2kπ\n\n  cos x = c (|c| ≤ 1):\n    x = α + 2kπ  or  x = −α + 2kπ  (equivalently x = ±α + 2kπ)\n\n  tan x = c (any real c):\n    x = α + kπ\n\nFor sin and cos, the negative-c case uses the same templates but with α taken as the reference angle and the appropriate sign adjustment.\n\nFor compound arguments like sin(2x) = c, write the general solution for u = 2x then divide everything (including the kπ terms) by 2.",
      keyPoints: [
        "sin: x = α + 2kπ or (π − α) + 2kπ",
        "cos: x = ±α + 2kπ",
        "tan: x = α + kπ",
        "k ∈ ℤ throughout",
      ],
      workedExamples: [
        {
          problem: "Find the general solution of sin x = √3/2.",
          steps: [
            "α = π/3",
            "x = π/3 + 2kπ or x = π − π/3 + 2kπ = 2π/3 + 2kπ",
          ],
          answer: "x = π/3 + 2kπ or x = 2π/3 + 2kπ, k ∈ ℤ.",
        },
        {
          problem: "Find the general solution of cos(2x) = 1/2.",
          steps: [
            "Let u = 2x: cos u = 1/2 → α = π/3",
            "u = ±π/3 + 2kπ",
            "x = u/2 = ±π/6 + kπ",
          ],
          answer: "x = π/6 + kπ or x = −π/6 + kπ, k ∈ ℤ.",
        },
      ],
      tips: [
        "Always state k ∈ ℤ explicitly",
      ],
      formulas: [
        { name: "General sin", formula: "sin x = c ⇒ x = α + 2kπ or (π − α) + 2kπ" },
        { name: "General cos", formula: "cos x = c ⇒ x = ±α + 2kπ" },
        { name: "General tan", formula: "tan x = c ⇒ x = α + kπ" },
      ],
      examQuestion: {
        problem: "Find the general solution of 2 sin(x − π/4) = 1.",
        solution: [
          "sin(x − π/4) = 1/2 → α = π/6",
          "x − π/4 = π/6 + 2kπ or 5π/6 + 2kπ",
          "x = π/6 + π/4 + 2kπ = 5π/12 + 2kπ",
          "x = 5π/6 + π/4 + 2kπ = 13π/12 + 2kπ",
        ],
        answer: "x = 5π/12 + 2kπ or x = 13π/12 + 2kπ, k ∈ ℤ.",
        marks: 3,
      },
      commonErrors: [
        "Forgetting the second branch for sin and cos",
        "Forgetting to divide kπ by n in compound arguments",
      ],
      summary: [
        "Two branches for sin/cos, one for tan, all with integer parameter k",
      ],
      quiz: [
        { question: "General sol. of tan x = 1:", options: ["π/4 + 2kπ", "π/4 + kπ", "±π/4 + 2kπ", "(π − π/4) + 2kπ"], correctAnswer: 1, explanation: "Period π." },
        { question: "Set of integers k is denoted:", options: ["ℕ", "ℤ", "ℚ", "ℝ"], correctAnswer: 1, explanation: "Integers." },
        { question: "General sol. of cos x = 1:", options: ["2kπ", "π + 2kπ", "kπ", "π/2 + 2kπ"], correctAnswer: 0, explanation: "α = 0." },
      ],
    },
  ],

  "y12m-ch6-6l-applications": [
    {
      title: "Applications of Circular Functions",
      explanation:
        "Periodic phenomena are everywhere: tides, daylight hours, temperature, sound, vibrations, blood pressure, biorhythms.\n\nA standard model is:\n\n  Q(t) = a sin(n(t − h)) + b   or   Q(t) = a cos(n(t − h)) + b\n\nwhere\n  • t is time (often in hours, days, or seconds)\n  • a > 0 is amplitude\n  • n = 2π/period\n  • h is phase shift (when a max/min occurs)\n  • b is the equilibrium / mean value.\n\nMODELLING WORKFLOW:\n  1. Identify max, min and the time between them.\n  2. b = (max + min)/2; a = (max − min)/2.\n  3. period = 2 × (time from max to next min); n = 2π/period.\n  4. Choose sin or cos for the cleanest phase.\n  5. Verify with another given data point.\n\nQUESTIONS often ask: at what times does Q reach a particular value? This is solved with general or interval-restricted trig equations.",
      keyPoints: [
        "Mean + amplitude come from max/min",
        "Period = 2 × (max-to-min time)",
        "Choose sin or cos to minimise the phase",
      ],
      workedExamples: [
        {
          problem: "Daylight hours in a city are modelled by D(t) = 12 + 4 sin((π/6)(t − 3)), with t in months from January.\n\nFind the maximum and minimum daylight, the months they occur, and the months in which D > 14.",
          steps: [
            "Amplitude 4, mean 12 → max 16, min 8",
            "Period = 2π / (π/6) = 12 months",
            "Max when sin = 1 → (π/6)(t − 3) = π/2 → t = 6 (June)",
            "Min at t = 12 (December)",
            "D > 14 ⇒ sin((π/6)(t − 3)) > 1/2 ⇒ (π/6)(t − 3) ∈ (π/6, 5π/6)",
            "t − 3 ∈ (1, 5) → t ∈ (4, 8) → May, June, July",
          ],
          answer: "Max 16 h in June; min 8 h in December; D > 14 from May to July.",
        },
      ],
      tips: [
        "Convert calendar contexts using t = month − reference month",
      ],
      formulas: [
        { name: "Sinusoidal model", formula: "Q(t) = a sin(n(t − h)) + b" },
      ],
      examQuestion: {
        problem: "Tide depth at a port (metres) is D(t) = 6 + 2 cos(π t/6), t hours after midnight. (a) State the maximum and minimum depths. (b) Find the times in [0, 24] when the depth first exceeds 7 m.",
        solution: [
          "(a) Max 8 at cos = 1 (t = 0, 12, 24); min 4 at t = 6, 18",
          "(b) D > 7 ⇒ cos(π t/6) > 1/2 ⇒ π t/6 ∈ (−π/3, π/3) (mod 2π)",
          "Within [0, 24]: t/6 ∈ (−1/3, 1/3) ∪ (11/3, 13/3) ∪ (23/3, 25/3)",
          "t ∈ [0, 2) ∪ (10, 14) ∪ (22, 24]",
          "First exceeds 7 m at t = 0 and remains above until t = 2",
        ],
        answer: "Max 8 m, min 4 m; depth exceeds 7 m on [0, 2), (10, 14), (22, 24].",
        marks: 5,
      },
      commonErrors: [
        "Forgetting to convert period to n via 2π/period",
        "Not stating the unit of time in the answer",
      ],
      summary: [
        "Real-world periodic problems = read max/min/period → build the sinusoid → solve",
      ],
      quiz: [
        { question: "If max = 10, min = 2, mean is:", options: ["4", "6", "8", "12"], correctAnswer: 1, explanation: "(10+2)/2." },
        { question: "Period 24 ⇒ n =", options: ["π/12", "π/24", "2π/24", "Both A and C"], correctAnswer: 3, explanation: "π/12 = 2π/24." },
        { question: "If sin component used and starts at mean rising, phase h represents:", options: ["The max time", "The first zero rising", "The min time", "Half the period"], correctAnswer: 1, explanation: "Sin starts at zero rising." },
      ],
    },
  ],

  "y12m-ch6-review": [
    {
      title: "Chapter 6 Review — Circular Functions",
      explanation:
        "RADIANS are mandatory in VCE Methods. Conversions: π rad = 180°. Arc s = rθ, sector A = ½r²θ.\n\nUNIT-CIRCLE DEFINITIONS provide sin, cos, tan for all real angles, with quadrant signs given by the CAST diagram.\n\nKEY IDENTITIES:\n  sin² + cos² = 1\n  Parity: sin odd, cos even, tan odd\n  Co-function: sin(π/2 − θ) = cos θ\n\nGRAPHS:\n  y = a sin(n(t − h)) + b — amplitude |a|, period 2π/|n|, mean b, phase h\n  y = a cos(...) — analogous, starts at max if h = 0 and a > 0\n  y = a tan(n(t − h)) + c — period π/|n|, asymptotes from cos zeros\n\nEQUATIONS:\n  • Find base angle α from inverse\n  • Use quadrant signs for interval solutions\n  • General solutions: sin → α, π−α (+ 2kπ); cos → ±α (+ 2kπ); tan → α (+ kπ)\n  • For nx, expand domain or apply general solution to nx then divide.\n\nMODELLING: identify max, min, period; build a sin/cos rule with mean and amplitude; verify with a data point.",
      keyPoints: [
        "Always work in radians for Methods Unit 3/4",
        "Pythagorean and parity identities are used everywhere",
        "Period: sin/cos = 2π/n; tan = π/n",
        "General solution requires k ∈ ℤ",
      ],
      workedExamples: [
        {
          problem: "Solve cos(2x) = sin x for x ∈ [0, 2π].",
          steps: [
            "Use cos(2x) = 1 − 2 sin² x",
            "1 − 2 sin² x = sin x → 2 sin² x + sin x − 1 = 0",
            "Let u = sin x: 2u² + u − 1 = 0 → (2u − 1)(u + 1) = 0",
            "u = 1/2: x = π/6 or 5π/6",
            "u = −1: x = 3π/2",
          ],
          answer: "x = π/6, 5π/6, 3π/2.",
        },
      ],
      tips: [
        "Convert double-angle expressions back to a single trig ratio before solving",
      ],
      formulas: [
        { name: "Pythagorean", formula: "sin² θ + cos² θ = 1" },
        { name: "Double-angle (cos)", formula: "cos 2θ = 1 − 2sin² θ = 2cos² θ − 1" },
      ],
      examQuestion: {
        problem: "Find the general solution of 2 cos²(x) − 1 = 0.",
        solution: [
          "cos²(x) = 1/2 → cos x = ±1/√2",
          "Equivalently cos(2x) = 0 (using double-angle)",
          "2x = π/2 + kπ → x = π/4 + kπ/2",
        ],
        answer: "x = π/4 + kπ/2, k ∈ ℤ.",
        marks: 3,
      },
      commonErrors: [
        "Mixing degrees with the Methods radian framework",
        "Reporting only Q1 solutions for sin x = c",
      ],
      summary: [
        "Radians + unit circle + identities + general solution = the entire chapter",
      ],
      quiz: [
        { question: "sin² x + cos² x = ?", options: ["0", "1", "tan² x", "x"], correctAnswer: 1, explanation: "Pythagorean." },
        { question: "Period of y = sin(πx):", options: ["1", "2", "π", "2π"], correctAnswer: 1, explanation: "2π/π = 2." },
        { question: "Number of solutions of cos x = 1 in [0, 4π]:", options: ["1", "2", "3", "4"], correctAnswer: 2, explanation: "x = 0, 2π, 4π." },
      ],
    },
  ],
};
