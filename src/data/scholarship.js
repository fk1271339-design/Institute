export const targetExams = ["IIT-JEE", "NEET-UG", "Olympiad"];

export const targetGrades = ["Class 9 / 10", "Class 11", "Class 12 / Dropper"];

export const scholarshipTiers = [
  { min: 95, value: 100, label: "Full Waiver" },
  { min: 90, value: 85, label: "Elite Band" },
  { min: 85, value: 75, label: "Merit Band" },
  { min: 75, value: 50, label: "Support Band" },
  { min: 0, value: 30, label: "Foundation Band" },
];

export const scholarshipConfig = {
  badge: "Merit-Based Financial Aid",
  headlineTop: "NSAT",
  headlineGradient: "100% Scholarship Test",
  support:
    "No deserving talent should be restricted by financial constraints. Take the online NSAT test to claim up to 100% fee waiver.",
  cta: "Register for NSAT Test Now (Free)",
  confirmedTitle: "Registration Confirmed!",
  confirmedBody: "Your NSAT slot & login credentials have been sent to",
  confirmedMeta: "Exam Date: Next Sunday 10:00 AM IST (Online 1-Hour Test)",
  sliderMin: 60,
  sliderMax: 99,
  gradeDefault: "Class 11",
  examDefault: "IIT-JEE",
  percentageDefault: 88,
  disclaimer:
    "This on-site estimate is illustrative only — your final scholarship band is decided by the actual NSAT result and published scholarship rules.",
};

export const nsatSteps = [
  "Step 1 · Pick your target exam & grade",
  "Step 2 · Register for the free online NSAT",
  "Step 3 · Receive your merit band within 48 hours",
];