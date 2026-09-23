// Student journey — five milestones, no scroll-jacking.

export const journeyMilestones = [
  {
    id: "baseline",
    num: "01",
    title: "Baseline assessment",
    short: "A short diagnostic to see where you start",
    text:
      "A timed diagnostic maps current strengths and gaps across the subjects in your target exam. It sets the starting point — not a verdict on you.",
  },
  {
    id: "plan",
    num: "02",
    title: "Study plan",
    short: "A weekly plan built from your gaps",
    text:
      "The diagnostic turns into a weekly plan: which topics, which question sets, and which review days. The plan is adjusted in every review meeting.",
  },
  {
    id: "guided",
    num: "03",
    title: "Guided learning",
    short: "Lessons plus a named mentor",
    text:
      "Each student keeps a named mentor who checks in on plans, tracks progress and helps with doubts routed through the portal.",
  },
  {
    id: "review",
    num: "04",
    title: "Progress review",
    short: "Weekly marker of what improved",
    text:
      "Mocks and practise sets feed a simple progress review: accuracy, time use and the sub-topics that changed. Students see movement, not just marks.",
  },
  {
    id: "ready",
    num: "05",
    title: "Exam readiness",
    short: "Full-length cycles in exam conditions",
    text:
      "Before the real paper, students complete timed full-length mock cycles under exam conditions, with review sheets to settle final-week priorities.",
  },
];

export const journeyConfig = {
  badge: "Student journey",
  headlineTop: "From first assessment to",
  headlineGradient: "exam readiness",
  support:
    "Five milestones in the same order for every student. Nothing is pinned to scroll position — the story is in the steps, not the motion.",
};