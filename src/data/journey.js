export const journeyStages = [
  {
    id: "outside",
    stageNum: "01",
    title: "Arrival at Nexora Apex Campus",
    subtitle: "Outside the Academy",
    tagline: "The journey begins here",
    image:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Step through the threshold of the campus — acoustic lecture halls, quantum AI study pods and a community of high-ambition rank aspirants.",
    highlights: [
      "Acoustically tuned soundproof campus layout",
      "Biometric attendance with parent alerts",
      "24/7 guarded security & quiet study wings",
    ],
    accent: "cyan",
  },
  {
    id: "gateway",
    stageNum: "02",
    title: "Digital Portal & AI Assessment",
    subtitle: "The Entry Gateway",
    tagline: "Intellectual profiling",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Every student undergoes a diagnostic evaluation. The AI engine maps baseline mathematical logic, physics intuition and memory recall speed.",
    highlights: [
      "Personalized diagnostic learning index (DLI)",
      "Custom student digital portal & tablet setup",
      "Baseline 1-on-1 counselor orientation",
    ],
    accent: "blue",
  },
  {
    id: "classroom",
    stageNum: "03",
    title: "Interactive 3D Quantum Classroom",
    subtitle: "Inside the Classroom",
    tagline: "Experiential mastery",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    description:
      "No boring lectures. Concepts in electrodynamics, organic chemistry and calculus are projected in interactive 3D — inspect vector fields and molecular rotations live.",
    highlights: [
      "Dual 4K ultra-wide interactive panel displays",
      "Senior IITian master faculty in every batch",
      "Instant digital hand-raise & doubt logging",
    ],
    accent: "indigo",
  },
  {
    id: "results",
    stageNum: "04",
    title: "Hall of Top All-India Ranks",
    subtitle: "The Result Sanctuary",
    tagline: "Triumph & national glory",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    description:
      "The destination. Adaptive testing, 24/7 doubt resolution and stamina conditioning culminate in top-100 ranks and premier institute admissions.",
    highlights: [
      "Top 100 AIRs in JEE & NEET track record",
      "Personal admission counseling for top institutes",
      "Lifetime Nexora Elite Alumni membership",
    ],
    accent: "violet",
  },
];

export const journeyConfig = {
  badge: "Cinematic Experience",
  headlineTop: "The Student",
  headlineGradient: "Transformation Journey",
  support:
    "Scroll through the evolution from an eager aspirant to an All-India rank topper inside Nexora Academy.",
};

export const stageAccents = {
  cyan: {
    chip: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
    bar: "bg-cyan-400",
    glow: "rgba(34,211,238,0.16)",
    dot: "bg-cyan-400",
  },
  blue: {
    chip: "border-blue-500/40 bg-blue-500/10 text-blue-400",
    bar: "bg-blue-400",
    glow: "rgba(56,189,248,0.16)",
    dot: "bg-blue-400",
  },
  indigo: {
    chip: "border-indigo-500/40 bg-indigo-500/10 text-indigo-400",
    bar: "bg-indigo-400",
    glow: "rgba(99,102,241,0.16)",
    dot: "bg-indigo-400",
  },
  violet: {
    chip: "border-violet-500/40 bg-violet-500/10 text-violet-400",
    bar: "bg-violet-400",
    glow: "rgba(139,92,246,0.16)",
    dot: "bg-violet-400",
  },
};