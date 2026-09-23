// Scholarship — a non-binding demo illustration of a possible tier model.

export const scholarshipTiers = [
  { min: 90, value: 100, label: "Full waiver" },
  { min: 80, value: 75, label: "Merit band" },
  { min: 70, value: 50, label: "Support band" },
  { min: 0, value: 0, label: "Standard" },
];

export const scholarshipConfig = {
  badge: "Scholarship",
  headlineTop: "Merit-based support, ",
  headlineGradient: "explained simply",
  support:
    "A scholarship test can lead to a fee waiver. The tier model below is an illustrative demo of how bands might look — exact terms, test dates and rules are confirmed by admissions.",
  cta: "Ask about scholarship tests",
  title: "Illustrative estimate",
  sliderMin: 0,
  sliderMax: 100,
  percentDefault: 84,
  tierDisclaimer:
    "Non-binding illustration only. The figure below is a demo estimate and does not promise any award. Actual eligibility and terms require confirmation from admissions.",
  confirmedTitle: "Request noted",
  confirmedBody: "Demo only — no scholarship was applied for and nothing was sent.",
};

export const scholarshipSteps = [
  "1 · Take a short scholarship aptitude test",
  "2 · Receive a band based on the score",
  "3 · Confirm terms directly with admissions",
];