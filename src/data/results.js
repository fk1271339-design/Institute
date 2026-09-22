// ============================================================
// Results / Hall of Fame + AIR predictor (DEMO data)
// ============================================================

export const resultsData = [
  {
    rank: "AIR 01",
    exam: "JEE Advanced",
    year: "2025",
    name: "Aarav K. Sharma",
    score: "352 / 360",
    branch: "Computer Science - IIT Bombay",
    courseEnrolled: "2-Year Zenith Classroom Program",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    quote:
      "Nexora's AI test analytics identified my weak areas in rotational dynamics within two weeks. The faculty's personal guidance was unmatched.",
  },
  {
    rank: "AIR 04",
    exam: "NEET UG",
    year: "2025",
    name: "Ananya S. Roy",
    score: "715 / 720",
    branch: "MBBS - AIIMS New Delhi",
    courseEnrolled: "Apex Medical 2-Year Program",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    quote:
      "Dr. Sunita Rao's 3D anatomy modules and NCERT micro-tests gave me the speed and accuracy to score 360/360 in Biology.",
  },
  {
    rank: "AIR 12",
    exam: "JEE Advanced",
    year: "2025",
    name: "Devansh V. Mehta",
    score: "338 / 360",
    branch: "Electrical Eng. - IIT Delhi",
    courseEnrolled: "1-Year Super-30 Droppers",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote:
      "The 24/7 instant doubt portal saved hundreds of hours. Whenever I hit a roadblock at midnight, a senior IIT mentor resolved it.",
  },
  {
    rank: "AIR 27",
    exam: "NEET UG",
    year: "2025",
    name: "Riya P. Sen",
    score: "705 / 720",
    branch: "MBBS - Maulana Azad Medical College",
    courseEnrolled: "2-Year Medical Batch",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    quote:
      "Periodic mock tests prepared me for extreme pressure. Nexora made the actual exam day feel like just another practice session.",
  },
];

export const statsOverview = [
  { label: "Top 100 All India Ranks", value: 340, prefix: "", suffix: "+" },
  { label: "Selections in top IITs & AIIMS", value: 18500, prefix: "", suffix: "+" },
  { label: "Score improvement delivered", value: 42, prefix: "+", suffix: "%" },
  { label: "Merit scholarships awarded", value: 12, prefix: "₹", suffix: "Cr+" },
  { label: "Mock tests powered by AI analytics", value: 150, prefix: "", suffix: "+" },
  { label: "Test takers tracked per cycle", value: 45000, prefix: "", suffix: "+" },
];

// ---- AIR Predictor (illustrative DEMO estimator) ----

export const predictorExams = {
  JEE: {
    label: "IIT-JEE Advanced",
    maxScore: 360,
    defaultScore: 290,
    minSliderScore: 100,
    program: "Zenith Super-30 Batch",
  },
  NEET: {
    label: "NEET UG",
    maxScore: 720,
    defaultScore: 680,
    minSliderScore: 400,
    program: "Apex Medical Fast-Track",
  },
};

export const rankBrackets = {
  JEE: [
    { min: 321, rank: "AIR 1 – 50", colleges: "IIT Bombay / IIT Delhi (CS / Electrical)" },
    { min: 281, rank: "AIR 51 – 250", colleges: "IIT Kharagpur / IIT Kanpur (CS / ECE)" },
    { min: 241, rank: "AIR 251 – 1,200", colleges: "IIT Roorkee / IIT Guwahati / IIT Hyderabad" },
    { min: 181, rank: "AIR 1,201 – 5,000", colleges: "Top Tier-1 IITs & NIT Trichy / Surathkal" },
    { min: 0, rank: "AIR 5,000 – 15,000", colleges: "Established IITs & Top NITs" },
  ],
  NEET: [
    { min: 701, rank: "AIR 1 – 30", colleges: "AIIMS New Delhi / JIPMER Puducherry" },
    { min: 671, rank: "AIR 31 – 300", colleges: "Maulana Azad Medical College / VMMC Delhi" },
    { min: 641, rank: "AIR 301 – 1,500", colleges: "Top State Government Medical Colleges" },
    { min: 0, rank: "AIR 1,501 – 8,000", colleges: "Government Medical Colleges Nationwide" },
  ],
};

export const predictorDisclaimer =
  "Illustrative estimate — actual rank depends on examination performance and official results.";

export const predictorTitle = "Estimate Your All-India Rank";