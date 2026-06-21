import type { TopicLessonsMap } from "./topicLessons";

// Year 10 — Chapter 5: Geometry & Circle Geometry
export const year10Ch5Lessons: TopicLessonsMap = {
  "y10-review-geometry": [
    {
      title: "Angle Properties, Triangles and Polygons",
      explanation:
        "OVERVIEW. Geometry begins with angle facts at a point and on parallel lines.\n\nKEY ANGLE FACTS.\n  • Angles on a straight line sum to 180°.\n  • Angles at a point sum to 360°.\n  • Vertically opposite angles are equal.\n  • Co-interior angles on parallel lines sum to 180°; alternate and corresponding angles are equal.\n\nTRIANGLES & POLYGONS.\n  • Interior angles of a triangle sum to 180°.\n  • Exterior angle = sum of the two opposite interior angles.\n  • Interior-angle sum of an n-gon = (n − 2) · 180°.",
      keyPoints: ["Straight line = 180°", "Triangle sum = 180°", "Polygon sum = (n−2)·180°", "Parallel-line angle pairs"],
      workedExamples: [
        { problem: "Find the missing angle in a triangle with angles 65° and 47°.", steps: ["180 − 65 − 47"], answer: "68°" },
        { problem: "Sum of interior angles of a hexagon.", steps: ["(6−2)·180"], answer: "720°" },
      ],
      tips: ["Always state the rule used."],
      commonErrors: ["Confusing co-interior and alternate angles"],
      summary: ["EXAM INSIGHT: Reasoning steps must cite the relevant rule."],
      practice: [
        { question: "Pentagon interior-angle sum?", answer: "540°" },
        { question: "Triangle has 90° and 35°. Third angle?", answer: "55°" },
      ],
      quiz: [
        { question: "Octagon interior-angle sum = ?", options: ["1080°", "1440°", "720°", "900°"], correctAnswer: 0, explanation: "(8−2)·180 = 1080°." },
      ],
    },
  ],
  "y10-congruent-triangles": [
    {
      title: "Tests for Congruent Triangles",
      explanation:
        "Two triangles are CONGRUENT if all corresponding sides and angles are equal. Tests:\n  • SSS — three sides equal.\n  • SAS — two sides + INCLUDED angle equal.\n  • ASA / AAS — two angles + a corresponding side equal.\n  • RHS — right angle, hypotenuse, one other side equal.\n\nWrite proofs naming corresponding vertices and citing the test.",
      keyPoints: ["SSS, SAS, ASA, AAS, RHS", "Order vertices to match", "State the test by abbreviation"],
      workedExamples: [
        { problem: "△ABC and △DEF have AB=DE, BC=EF, AC=DF. Prove congruence.", steps: ["All three pairs of sides equal", "Therefore △ABC ≅ △DEF (SSS)"], answer: "△ABC ≅ △DEF (SSS)" },
      ],
      tips: ["The angle in SAS must be BETWEEN the two equal sides."],
      commonErrors: ["Using SSA (does not guarantee congruence)"],
      summary: ["EXAM INSIGHT: Always write 'congruent because…' citing the test."],
      practice: [{ question: "Which test: two right triangles with equal hypotenuse and one equal leg?", answer: "RHS" }],
      quiz: [{ question: "Valid congruence test?", options: ["SSA", "AAA", "AAS", "Both A and B"], correctAnswer: 2, explanation: "AAS works; SSA and AAA do not (AAA gives similarity)." }],
    },
  ],
  "y10-similar-figures": [
    {
      title: "Similar Figures and Scale Factors",
      explanation:
        "Two figures are SIMILAR if corresponding angles are equal and corresponding sides are in the same ratio (the scale factor k).\n  Length ratio = k\n  Area ratio = k²\n  Volume ratio = k³",
      keyPoints: ["Same shape, possibly different size", "Length k, area k², volume k³"],
      workedExamples: [
        { problem: "Two similar rectangles have scale factor 3. Area ratio?", steps: ["3² = 9"], answer: "9 : 1" },
      ],
      tips: ["Square the linear ratio for area."],
      commonErrors: ["Forgetting to square or cube the ratio"],
      summary: ["EXAM INSIGHT: Volume ratio is the cube of the linear scale."],
      practice: [{ question: "k=2. Volume ratio?", answer: "8:1" }],
      quiz: [{ question: "Linear scale 4. Area scale = ?", options: ["4", "8", "16", "64"], correctAnswer: 2, explanation: "4² = 16." }],
    },
  ],
  "y10-similar-triangles": [
    {
      title: "Tests for Similar Triangles",
      explanation:
        "Triangles are similar if any of the following hold:\n  • AAA — corresponding angles equal.\n  • SAS (similar) — two sides in proportion + INCLUDED angle equal.\n  • SSS (similar) — all three pairs of sides in proportion.",
      keyPoints: ["AAA, SAS, SSS for similarity", "Notation: △ABC ~ △DEF"],
      workedExamples: [
        { problem: "△ABC has AB=4, BC=6. △DEF has DE=6, EF=9. Same included angle. Similar?", steps: ["4/6 = 6/9 = 2/3", "SAS similar"], answer: "Similar (SAS)" },
      ],
      tips: ["Corresponding sides match opposite equal angles."],
      commonErrors: ["Mismatching corresponding vertices"],
      summary: ["EXAM INSIGHT: Set up ratios consistently."],
      practice: [{ question: "Sides 3,4,5 and 6,8,10. Similar by which test?", answer: "SSS" }],
      quiz: [{ question: "AAA implies…", options: ["Congruence", "Similarity", "Both", "Neither"], correctAnswer: 1, explanation: "AAA gives similarity, not congruence." }],
    },
  ],
  "y10-chord-properties": [
    {
      title: "Properties of Chords in a Circle",
      explanation:
        "KEY THEOREMS.\n  1. The perpendicular from the centre to a chord BISECTS the chord.\n  2. Equal chords are equidistant from the centre.\n  3. The line from the centre that bisects a chord is perpendicular to the chord.",
      keyPoints: ["Perpendicular from centre bisects chord", "Equal chords ↔ equal distance from centre"],
      workedExamples: [
        { problem: "Chord 16cm, distance from centre 6cm. Find radius.", steps: ["Half chord = 8", "r² = 8² + 6² = 100", "r = 10"], answer: "10 cm" },
      ],
      tips: ["Pythagoras + chord bisection is the standard tactic."],
      commonErrors: ["Using full chord length instead of half"],
      summary: ["EXAM INSIGHT: Always drop a perpendicular from the centre."],
      practice: [{ question: "Chord 24, r=13. Distance from centre?", answer: "5" }],
      quiz: [{ question: "Perpendicular from centre to chord…", options: ["Trisects", "Bisects", "Passes through endpoint", "Equals radius"], correctAnswer: 1, explanation: "Bisects the chord." }],
    },
  ],
  "y10-angle-theorems": [
    {
      title: "Circle Angle Theorems 1–4",
      explanation:
        "FOUR KEY THEOREMS.\n  1. Angle at centre = 2 × angle at circumference (subtended by same arc).\n  2. Angles in the same segment are equal.\n  3. Angle in a semicircle = 90°.\n  4. Opposite angles of a cyclic quadrilateral sum to 180°.",
      keyPoints: ["Centre angle is double", "Same segment → equal angles", "Semicircle → 90°", "Cyclic quad opposite angles = 180°"],
      workedExamples: [
        { problem: "Angle at centre is 80°. Angle at circumference (same arc)?", steps: ["80/2"], answer: "40°" },
        { problem: "Cyclic quad has opposite angle 110°. Find the other.", steps: ["180 − 110"], answer: "70°" },
      ],
      tips: ["Identify which arc subtends each angle."],
      commonErrors: ["Confusing the two angles at the same arc"],
      summary: ["EXAM INSIGHT: Naming the theorem is required for full marks."],
      practice: [{ question: "Angle in semicircle = ?", answer: "90°" }],
      quiz: [{ question: "Cyclic quad: opposite angles sum to…", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, explanation: "Always 180°." }],
    },
  ],
  "y10-tangent-theorems": [
    {
      title: "Tangent Theorems",
      explanation:
        "1. A tangent is perpendicular to the radius at the point of contact.\n2. Two tangents from the same external point are equal in length.\n3. Alternate Segment Theorem: angle between tangent and chord = angle in the alternate segment.",
      keyPoints: ["Tangent ⟂ radius", "Equal tangents from external point", "Alternate segment theorem"],
      workedExamples: [
        { problem: "Tangent length 12 from external point. Other tangent from same point?", steps: ["Equal tangents"], answer: "12" },
      ],
      tips: ["Mark right angles where tangent meets radius."],
      commonErrors: ["Forgetting tangent ⟂ radius"],
      summary: ["EXAM INSIGHT: The alternate segment theorem appears in 10A proofs."],
      practice: [{ question: "Angle between tangent and chord = 35°. Angle in alternate segment?", answer: "35°" }],
      quiz: [{ question: "Tangent meets radius at angle…", options: ["45°", "60°", "90°", "180°"], correctAnswer: 2, explanation: "Tangent is perpendicular to the radius." }],
    },
  ],
  "y10-intersecting-chords": [
    {
      title: "Intersecting Chords, Secants and Tangents",
      explanation:
        "INTERSECTING CHORDS: If two chords intersect inside a circle, AE·EC = BE·ED (where E is the intersection point).\n\nSECANT–SECANT: From external point P, PA·PB = PC·PD.\n\nTANGENT–SECANT: PT² = PA·PB, where PT is tangent length.",
      keyPoints: ["Inside: products equal", "External secants product equal", "Tangent² = secant product"],
      workedExamples: [
        { problem: "AE=4, EC=6, BE=3. Find ED.", steps: ["4·6 = 3·ED", "ED = 8"], answer: "8" },
        { problem: "PT tangent, PA=4, PB=9. PT?", steps: ["PT² = 4·9 = 36"], answer: "PT = 6" },
      ],
      tips: ["Identify which line is tangent vs secant."],
      commonErrors: ["Mixing internal and external segment products"],
      summary: ["EXAM INSIGHT: Quote 'power of a point' if asked."],
      practice: [{ question: "PT=10, PA=5. Find PB.", answer: "20" }],
      quiz: [{ question: "Chords meet inside: AE·EC = ?", options: ["BE·ED", "BE+ED", "AE+EC", "BE/ED"], correctAnswer: 0, explanation: "Products of segments equal." }],
    },
  ],
};
