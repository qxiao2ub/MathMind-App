export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TopicQuestions {
  [topicId: string]: Question[];
}

// Quiz questions organized by topic
export const quizQuestions: TopicQuestions = {
  // Year 9 - Number & Algebra
  "y9-real-numbers-index-laws": [
    {
      id: 1,
      question: "Simplify: 2³ × 2⁴",
      options: ["2⁷", "2¹²", "4⁷", "2¹"],
      correctAnswer: 0,
      explanation: "When multiplying with the same base, add the indices: 2³ × 2⁴ = 2^(3+4) = 2⁷"
    },
    {
      id: 2,
      question: "What is the value of 5⁰?",
      options: ["0", "5", "1", "Undefined"],
      correctAnswer: 2,
      explanation: "Any non-zero number raised to the power of 0 equals 1. So 5⁰ = 1"
    },
    {
      id: 3,
      question: "Simplify: (3²)³",
      options: ["3⁵", "3⁶", "9³", "3⁸"],
      correctAnswer: 1,
      explanation: "When raising a power to a power, multiply the indices: (3²)³ = 3^(2×3) = 3⁶"
    }
  ],
  
  "y9-linear-equations": [
    {
      id: 1,
      question: "Solve for x: 3x + 7 = 22",
      options: ["x = 5", "x = 7", "x = 3", "x = 15"],
      correctAnswer: 0,
      explanation: "3x + 7 = 22 → 3x = 22 - 7 → 3x = 15 → x = 5"
    },
    {
      id: 2,
      question: "Solve for x: 2(x - 3) = 10",
      options: ["x = 5", "x = 8", "x = 6.5", "x = 4"],
      correctAnswer: 1,
      explanation: "2(x - 3) = 10 → x - 3 = 5 → x = 8"
    },
    {
      id: 3,
      question: "What is the first step to solve: 5x - 3 = 2x + 9?",
      options: ["Add 3 to both sides", "Subtract 2x from both sides", "Divide by 5", "Multiply by 2"],
      correctAnswer: 1,
      explanation: "To isolate x, first collect x terms on one side by subtracting 2x from both sides."
    }
  ],

  "y9-pythagoras-theorem": [
    {
      id: 1,
      question: "In a right triangle, if one leg is 3 cm and the other is 4 cm, what is the hypotenuse?",
      options: ["6 cm", "5 cm", "7 cm", "8 cm"],
      correctAnswer: 1,
      explanation: "Using Pythagoras: c² = 3² + 4² = 9 + 16 = 25, so c = √25 = 5 cm"
    },
    {
      id: 2,
      question: "What does Pythagoras' theorem state?",
      options: ["a + b = c", "a² + b² = c²", "a × b = c", "a² - b² = c²"],
      correctAnswer: 1,
      explanation: "Pythagoras' theorem: In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides."
    },
    {
      id: 3,
      question: "A ladder is 5m long and reaches 4m up a wall. How far is the base from the wall?",
      options: ["1m", "2m", "3m", "4m"],
      correctAnswer: 2,
      explanation: "Using Pythagoras: 5² = 4² + x² → 25 = 16 + x² → x² = 9 → x = 3m"
    }
  ],

  "y9-central-tendency": [
    {
      id: 1,
      question: "Find the mean of: 4, 6, 8, 10, 12",
      options: ["6", "8", "10", "12"],
      correctAnswer: 1,
      explanation: "Mean = (4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8"
    },
    {
      id: 2,
      question: "What is the median of: 3, 7, 2, 9, 5?",
      options: ["5", "7", "2", "5.2"],
      correctAnswer: 0,
      explanation: "First order the data: 2, 3, 5, 7, 9. The middle value is 5."
    },
    {
      id: 3,
      question: "What is the mode of: 2, 3, 3, 4, 5, 3, 6?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      explanation: "The mode is the most frequent value. 3 appears 3 times, more than any other number."
    }
  ],

  // Year 10 - Algebra
  "y10-solving-quadratics": [
    {
      id: 1,
      question: "What is the solution to x² - 5x + 6 = 0?",
      options: ["x = 2 and x = 3", "x = -2 and x = -3", "x = 1 and x = 6", "x = -1 and x = -6"],
      correctAnswer: 0,
      explanation: "Using factoring: (x-2)(x-3) = 0, so x = 2 or x = 3"
    },
    {
      id: 2,
      question: "In the quadratic formula, what is the discriminant?",
      options: ["a + b + c", "b² - 4ac", "2a", "-b/2a"],
      correctAnswer: 1,
      explanation: "The discriminant is b² - 4ac. It tells us how many solutions the quadratic has."
    },
    {
      id: 3,
      question: "Solve: x² = 25",
      options: ["x = 5 only", "x = -5 only", "x = 5 or x = -5", "x = 25"],
      correctAnswer: 2,
      explanation: "Taking the square root of both sides gives x = ±5, so x = 5 or x = -5"
    }
  ],

  "y10-trigonometry": [
    {
      id: 1,
      question: "In a right triangle, what is sin(θ)?",
      options: ["Adjacent/Hypotenuse", "Opposite/Hypotenuse", "Opposite/Adjacent", "Hypotenuse/Opposite"],
      correctAnswer: 1,
      explanation: "Sin = Opposite/Hypotenuse (SOH from SOH-CAH-TOA)"
    },
    {
      id: 2,
      question: "What is cos(60°)?",
      options: ["0", "0.5", "1", "√3/2"],
      correctAnswer: 1,
      explanation: "cos(60°) = 0.5 is a standard angle value to remember."
    },
    {
      id: 3,
      question: "In a right triangle with angle 30°, if the hypotenuse is 10, what is the opposite side?",
      options: ["5", "5√3", "10", "10√3"],
      correctAnswer: 0,
      explanation: "sin(30°) = opposite/10, and sin(30°) = 0.5, so opposite = 10 × 0.5 = 5"
    }
  ],

  "y10-quadratic-functions": [
    {
      id: 1,
      question: "What is the shape of the graph of y = x²?",
      options: ["Straight line", "Parabola", "Circle", "Hyperbola"],
      correctAnswer: 1,
      explanation: "Quadratic functions always produce parabola-shaped graphs."
    },
    {
      id: 2,
      question: "What is the vertex of y = x² - 4x + 3?",
      options: ["(2, -1)", "(1, 0)", "(3, 0)", "(0, 3)"],
      correctAnswer: 0,
      explanation: "Using x = -b/2a = 4/2 = 2, then y = 4 - 8 + 3 = -1. Vertex is (2, -1)"
    },
    {
      id: 3,
      question: "For y = ax², if a < 0, the parabola opens:",
      options: ["Upward", "Downward", "Left", "Right"],
      correctAnswer: 1,
      explanation: "When a is negative, the parabola opens downward (like an upside-down U)."
    }
  ]
};

// Default questions for topics without specific questions
export const defaultQuestions: Question[] = [
  {
    id: 1,
    question: "This topic quiz is being prepared. Which strategy helps when learning new math concepts?",
    options: ["Skip the hard parts", "Practice regularly", "Only read without doing examples", "Rush through quickly"],
    correctAnswer: 1,
    explanation: "Regular practice is key to mastering mathematical concepts."
  },
  {
    id: 2,
    question: "What should you do if you're stuck on a problem?",
    options: ["Give up immediately", "Review the worked examples", "Skip it forever", "Guess randomly"],
    correctAnswer: 1,
    explanation: "Reviewing worked examples helps you understand the method and apply it to new problems."
  },
  {
    id: 3,
    question: "Why is it important to show your working?",
    options: ["It's not important", "To find and fix mistakes easily", "To make it look longer", "Teachers like longer answers"],
    correctAnswer: 1,
    explanation: "Showing your working helps you catch errors and understand where you went wrong."
  }
];

export function getQuestionsForTopic(topicId: string): Question[] {
  return quizQuestions[topicId] || defaultQuestions;
}
