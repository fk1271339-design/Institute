import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, GraduationCap, CheckCircle2 } from "lucide-react";
import { EASE } from "../ui/SectionHeading";

const checklist = [
  "Zero Admission Commitment",
  "Free Study Material Kit",
  "Personalized AIR Analysis",
];

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section id="contact" className="section-padding relative z-10 bg-[var(--background)] overflow-hidden border-t border-[var(--border-subtle)] pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-600/15 via-indigo-600/15 to-purple-600/15 blur-[180px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="glass-panel p-8 sm:p-14 rounded-[2rem] border-cyan-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[var(--surface-raised)] via-[var(--surface)] to-[var(--surface-raised)] text-center"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" aria-hidden="true" />

          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-cyan text-xs font-mono-tech uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Begin Your Rank Journey Today
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Ready to Turn Your Dream of{" "}
              <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">IIT or AIIMS into Reality?</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Book a complimentary 1-on-1 strategy counseling session with our senior IITian academic
              directors or take the NSAT 100% Scholarship Test.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button onClick={onOpenConsultation} className="btn btn-primary !px-8 !py-4 w-full sm:w-auto text-sm group">
                Book Free Strategy Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a href="#scholarship" className="btn btn-ghost !px-8 !py-4 w-full sm:w-auto text-sm">
                <GraduationCap className="w-4 h-4 text-cyan-300" />
                Register for NSAT Test
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono-tech text-[var(--text-tertiary)] border-t border-[var(--border)] pt-6">
              {checklist.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}