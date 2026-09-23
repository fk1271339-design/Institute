// Practice preview — a clearly labelled "Sample interface".
// The question is illustrative demo content for the simulator UI.

export const sampleTest = {
  subject: "PHYSICS — SAMPLE QUESTION",
  section: "SINGLE CORRECT",
  timerSeconds: 150,
  question:
    "A ball is dropped from rest from a height h and bounces back to half its original height. What is the fraction of its mechanical energy lost in the impact? (Ignore air resistance, use g = 10 m/s²)",
  options: [
    { id: "A", text: "1/4" },
    { id: "B", text: "1/2" },
    { id: "C", text: "3/4" },
    { id: "D", text: "2/3" },
  ],
  answerId: "B",
  explanation:
    "Before the bounce the ball has energy mgh. After the bounce the highest reachable height is h/2, so the mechanical energy is mg(h/2) = mgh/2. The lost fraction is (mgh - mgh/2) / mgh = 1/2.",
};

export const practiceOutcomes = [
  {
    title: "Familiar exam screens",
    text: "Attempt questions in the same layout, keypad and timer you will meet in the real paper.",
  },
  {
    title: "Immediate explanations",
    text: "Each question carries a worked solution so mistakes become lessons immediately.",
  },
  {
    title: "A review habit",
    text: "End-of-set reviews summarise the sub-topics to revisit — no invisible ranking logic.",
  },
];

export const practiceConfig = {
  badge: "Practice preview",
  headlineTop: "A sample of the",
  headlineGradient: "exam experience",
  support:
    "This is a sample interface for demonstration. Pick an answer, or submit without choosing — no data is collected or sent anywhere.",
  sampleNote: "Sample interface — not a real test and no information is sent.",
  submitDemoLabel: "Submit (demo)",
};