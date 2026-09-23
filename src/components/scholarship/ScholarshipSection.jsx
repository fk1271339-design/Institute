import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Calculator, Info } from "lucide-react";
import confetti from "canvas-confetti";
import {
  targetExams,
  targetGrades,
  scholarshipTiers,
  scholarshipConfig,
  nsatSteps,
} from "../../data/scholarship";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function ScholarshipSection({ onRegisterSuccess }) {
  const [targetExam, setTargetExam] = useState(scholarshipConfig.examDefault);
  const [grade, setGrade] = useState(scholarshipConfig.gradeDefault);
  const [percentage, setPercentage] = useState(scholarshipConfig.percentageDefault);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const tier = scholarshipTiers.find((t) => percentage >= t.min);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
    confetti({ particleCount: 110, spread: 75, origin: { y: 0.6 } });
    if (onRegisterSuccess) onRegisterSuccess(formData);
  };

  return (
    <section id="scholarship" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)] bg-dots-pattern overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[560px] h-[440px] bg-cyan-500/[0.07] blur-[160px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={scholarshipConfig.badge}
          badgeIcon={Award}
          headlineTop={scholarshipConfig.headlineTop}
          headlineGradient={scholarshipConfig.headlineGradient}
          support={scholarshipConfig.support}
        />

        <div className="surface-base overflow-hidden rounded-[1.75rem] border border-cyan-500/20 bg-[var(--surface-raised)]/60 backdrop-blur">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-start">
            {/* Interactive calculator */}
            <div className="lg:col-span-6 space-y-7">
              <span className="flex items-center gap-2 text-cyan-300 font-mono-tech text-xs uppercase font-bold">
                <Calculator className="w-4 h-4" />
                Instant Scholarship Calculator
              </span>

              {/* Target exam */}
              <div>
                <label className="eyebrow-label block text-[10px] mb-2.5">1. Select target exam</label>
                <div className="grid grid-cols-3 gap-2">
                  {targetExams.map((ex) => (
                    <button
                      key={ex}
                      type="button"
                      onClick={() => setTargetExam(ex)}
                      aria-pressed={targetExam === ex}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        targetExam === ex
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#04121f] shadow-md shadow-cyan-500/20"
                          : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--border-strong)]"
                      }`}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grade */}
              <div>
                <label className="eyebrow-label block text-[10px] mb-2.5">2. Current academic grade</label>
                <div className="grid grid-cols-3 gap-2">
                  {targetGrades.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGrade(g)}
                      aria-pressed={grade === g}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        grade === g
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#04121f] shadow-md shadow-cyan-500/20"
                          : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--border-strong)]"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Percentage slider */}
              <div>
                <div className="flex justify-between items-baseline font-mono-tech text-xs mb-3">
                  <label htmlFor="scholar-pct" className="eyebrow-label text-[10px] !normal-case">
                    3. Previous school / board %
                  </label>
                  <span className="font-bold text-cyan-300 text-lg">{percentage}%</span>
                </div>
                <input
                  id="scholar-pct"
                  type="range"
                  min={scholarshipConfig.sliderMin}
                  max={scholarshipConfig.sliderMax}
                  value={percentage}
                  onChange={(e) => setPercentage(Number(e.target.value))}
                  className="range-input"
                  aria-label="Previous academic percentage"
                />
              </div>

              {/* Estimate card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-[var(--surface)] border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono-tech text-cyan-300 uppercase block">Estimated scholarship</span>
                  <span className="font-heading text-3xl sm:text-4xl font-black text-gradient-cyan">
                    {tier.value}% Fee Waiver
                  </span>
                  <span className="ml-2 text-xs text-amber-300 font-semibold align-middle">{tier.label}</span>
                </div>
                <Award className="w-10 h-10 text-cyan-400 shrink-0" />
              </div>

              {/* Steps */}
              <div className="space-y-2 border-t border-[var(--border)] pt-5">
                {nsatSteps.map((s, i) => (
                  <div key={s} className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {s}
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 text-[11px] font-mono-tech italic text-[var(--text-tertiary)]">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{scholarshipConfig.disclaimer}</span>
              </div>
            </div>

            {/* Registration form */}
            <div className="lg:col-span-6 bg-[var(--surface)]/70 p-6 sm:p-8 rounded-2xl border border-[var(--border)]">
              <AnimatePresence mode="wait">
                {registered ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">{scholarshipConfig.confirmedTitle}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                      {scholarshipConfig.confirmedBody}{" "}
                      <strong className="text-cyan-300">{formData.email || "your email"}</strong>.
                    </p>
                    <div className="p-3 rounded-xl bg-[var(--background)] border border-amber-500/30 text-xs font-mono-tech text-amber-300">
                      {scholarshipConfig.confirmedMeta}
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h3 className="font-heading text-xl font-bold text-white mb-1">
                      Claim Your {tier.value}% Scholarship Slot
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] mb-4">
                      Fill out your details to lock in eligibility for the upcoming free online test.
                    </p>

                    <div>
                      <label htmlFor="nsat-name" className="eyebrow-label block text-[10px] mb-1.5">
                        Full name
                      </label>
                      <input
                        id="nsat-name"
                        type="text"
                        required
                        placeholder="e.g. Aarav Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="field-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="nsat-phone" className="eyebrow-label block text-[10px] mb-1.5">
                        Mobile number (for admit card SMS)
                      </label>
                      <input
                        id="nsat-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="field-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="nsat-email" className="eyebrow-label block text-[10px] mb-1.5">
                        Email address
                      </label>
                      <input
                        id="nsat-email"
                        type="email"
                        required
                        placeholder="aarav@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="field-input"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-full !py-3.5 mt-2">
                      <GraduationCap className="w-4 h-4" />
                      {scholarshipConfig.cta}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}