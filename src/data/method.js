// Learning method — four stage interactive selector.

export const methodSteps = [
  {
    id: "learn",
    num: "01",
    title: "Learn",
    short: "Understand the concept",
    heading: "Concepts taught once, well",
    description:
      "Each topic is introduced with a clear lesson that maps to your exam pattern — what to know, why it matters, and how it is usually tested. Lessons stay recorded for later review.",
    quality: "Clear lessons matched to the exam pattern",
  },
  {
    id: "practice",
    num: "02",
    title: "Practice",
    short: "Apply it under exam conditions",
    heading: "Practice in the exam format",
    description:
      "Right after learning, you practise with questions that match the real interface — single correct, multi-correct, numerical and assertion-reason types, timed like the actual paper.",
    quality: "Timed, exam-format question sets",
  },
  {
    id: "review",
    num: "03",
    title: "Review",
    short: "See what went wrong",
    heading: "Reviews turn mistakes into plans",
    description:
      "Every practice set comes with worked solutions so you can see the correct method. A short weekly review pinpoints which sub-topics cost marks and feeds the next plan.",
    quality: "Worked solutions and a weekly mark map",
  },
  {
    id: "improve",
    num: "04",
    title: "Improve",
    short: "Close the gaps next week",
    heading: "The loop closes and repeats",
    description:
      "Weak sub-topics become the first items of the next cycle. The same loop repeats weekly, so preparation compounds instead of drifting.",
    quality: "Next week's plan starts from your gaps",
  },
];

export const methodConfig = {
  badge: "Learning method",
  headlineTop: "One method, four",
  headlineGradient: "movements",
  support:
    "Pick a stage to see how it works. Learn → Practice → Review → Improve is the same loop across every batch.",
};