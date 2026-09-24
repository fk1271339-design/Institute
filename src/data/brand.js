import { Cpu, ShieldCheck, Brain, MessageSquare } from "lucide-react";

export const pillars = [
  {
    icon: Cpu,
    title: "Diagnostic Learning Analytics",
    badge: "Methodology",
    color: "text-teal-500",
    border: "hover:border-teal-500/50",
    desc: "Tracks question pacing, mistake patterns, and conceptual gaps to build personalized revision recommendations.",
  },
  {
    icon: ShieldCheck,
    title: "1-on-1 Academic Mentorship",
    badge: "Pedagogy",
    color: "text-teal-600",
    border: "hover:border-teal-600/50",
    desc: "Every student is supported by experienced academic mentors for weekly strategy check-ins and progress audits.",
  },
  {
    icon: Brain,
    title: "Exam Stamina & Pacing",
    badge: "Mindset",
    color: "text-amber-500",
    border: "hover:border-amber-500/50",
    desc: "Simulated exam conditions, time-management drills, and test strategy workshops prepare students for exam day.",
  },
  {
    icon: MessageSquare,
    title: "Structured Doubt Support",
    badge: "Support",
    color: "text-teal-500",
    border: "hover:border-teal-500/50",
    desc: "Submit questions through the student dashboard to receive clear step-by-step explanations from faculty.",
  },
];

export const brandConfig = {
  badge: "The Nexora Methodology",
  headlineTop: "Structured Learning Built for",
  headlineGradient: "Consistency & Mastery",
  support:
    "We combine rigorous curriculum design with performance diagnostics to keep student preparation focused and stress-free.",
};