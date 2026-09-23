export const testSeriesFeatures = [
  {
    id: "live-mocks",
    title: "Real Exam Simulator",
    desc: "Exact UI replication of NTA JEE Main, JEE Advanced & NEET portals with identical keypads, timers and marking schemes.",
  },
  {
    id: "ai-analytics",
    title: "AI Diagnostic Engine",
    desc: "Pinpoint accuracy on speed vs accuracy, time-wasted per question, conceptual weakness tags and peer benchmarking.",
  },
  {
    id: "rank-predictor",
    title: "Predictive AIR Calculator",
    desc: "An ML model calibrated on years of historical test data predicts your probable All-India Rank range.",
  },
  {
    id: "doubt-vault",
    title: "Instant Video Solutions",
    desc: "Line-by-line step video walkthroughs for every single mock question by senior master faculty.",
  },
];

export const demoExam = {
  subject: "PHYSICS — SECTION A (JEE ADVANCED MOCK 04)",
  timeLeft: "02:45:18",
  questionNumber: 14,
  totalQuestions: 30,
  section: "SINGLE CORRECT",
  text:
    "A uniform solid sphere of mass M = 4.0 kg and radius R = 0.5 m rolls without slipping down an inclined plane of angle θ = 30°. Calculate the linear acceleration of the center of mass of the sphere. (Take g = 10 m/s²)",
  options: [
    { id: "A", text: "3.57 m/s² (5g / 7)" },
    { id: "B", text: "2.50 m/s² (g / 4)" },
    { id: "C", text: "4.20 m/s² (3g / 7)" },
    { id: "D", text: "5.00 m/s² (g / 2)" },
  ],
  paletteTotal: 20,
  answeredCount: 13,
  currentIndex: 13,
  aiTip:
    "AI Tip: You spend 1.8 mins on each physics question. Tackle numericals first to maximise marks per minute.",
};

export const analyticsData = [
  {
    label: "SPEED VS ACCURACY",
    value: "94.2%",
    note: "High accuracy maintained on Rotational Mechanics & Electrostatics.",
    tone: "cyan",
  },
  {
    label: "TIME WASTED AUDIT",
    value: "4.5 Mins",
    note: "Lost on Question 8 to a calculation slip. Target mental-speed math.",
    tone: "amber",
  },
  {
    label: "PREDICTED AIR RANGE",
    value: "AIR 140 – 280",
    note: "Based on the all-India peer benchmark of 45,000+ test takers this week.",
    tone: "success",
  },
];

export const weakTopics = [
  { topic: "Rotational Dynamics", weakness: 34 },
  { topic: "Electrostatics", weakness: 28 },
  { topic: "Thermodynamics", weakness: 19 },
  { topic: "Ray Optics", weakness: 12 },
];

export const performanceBars = [
  { label: "Accuracy", value: 94, tone: "bg-emerald-400" },
  { label: "Speed", value: 78, tone: "bg-cyan-400" },
  { label: "Stamina", value: 86, tone: "bg-blue-400" },
];

export const testSeriesConfig = {
  badge: "Nexora Test Portal",
  headlineTop: "Quantum All-India",
  headlineGradient: "Test Series & AI Analytics",
  support:
    "Experience the exact NTA computer-based interface coupled with instant machine-learning diagnostics.",
  ctaLabel: "Try Demo",
  windowsTitle: "Nexora NTA Exam Portal v4.2 — Live Simulation",
};

export const toneMap = {
  cyan: "text-cyan-400",
  amber: "text-amber-400",
  success: "text-emerald-400",
};