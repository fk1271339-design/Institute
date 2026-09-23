import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MonitorPlay, Clock, CheckCircle2, Sparkles, PlayCircle } from "lucide-react";
import {
  testSeriesFeatures,
  demoExam,
  analyticsData,
  weakTopics,
  performanceBars,
  testSeriesConfig,
  toneMap,
} from "../../data/testSeries";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function TestSeriesMock() {
  const [tab, setTab] = useState("live-exam");
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="test-series" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="absolute top-1/3 right-[-6rem] w-[480px] h-[420px] bg-indigo-500/[0.08] blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={testSeriesConfig.badge}
          badgeIcon={MonitorPlay}
          headlineTop={testSeriesConfig.headlineTop}
          headlineGradient={testSeriesConfig.headlineGradient}
          support={testSeriesConfig.support}
        />

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {testSeriesFeatures.map((f) => (
            <div key={f.id} className="surface-base surface-hover p-5 bg-[var(--surface-raised)]/50">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-cyan-300" />
              </div>
              <h3 className="font-heading text-sm font-bold text-white mb-1.5">{f.title}</h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Product preview window */}
        <div className="surface-base overflow-hidden rounded-[1.75rem] bg-[var(--background)] border-[var(--border-strong)] shadow-2xl">
          {/* Window bar */}
          <div className="bg-[var(--surface-raised)] px-5 sm:px-6 py-3.5 border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--danger)]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono-tech text-[11px] text-[var(--text-tertiary)] border-l border-[var(--border)] pl-3 truncate">
                {testSeriesConfig.windowsTitle}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {[
                { key: "live-exam", label: "1. Exam Interface" },
                { key: "analytics", label: "2. AI Analytics" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  aria-pressed={tab === t.key}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    tab === t.key
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#04121f] font-bold shadow-md shadow-cyan-500/20"
                      : "text-[var(--text-secondary)] bg-[var(--surface)] hover:text-white border border-transparent"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {tab === "live-exam" ? (
              <motion.div
                key="exam"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                {/* Question panel */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center justify-between bg-[var(--surface-raised)]/80 p-3.5 rounded-xl border border-[var(--border)] font-mono-tech text-xs">
                    <span className="text-cyan-300 font-bold truncate pr-3">{demoExam.subject}</span>
                    <span className="flex items-center gap-1.5 text-amber-300 font-bold shrink-0">
                      <Clock className="w-4 h-4" />
                      {demoExam.timeLeft}
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[var(--surface-raised)]/50 border border-[var(--border)]">
                    <span className="font-mono-tech text-[11px] text-[var(--text-tertiary)] block mb-2.5">
                      QUESTION {demoExam.questionNumber} OF {demoExam.totalQuestions} ({demoExam.section})
                    </span>
                    <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed mb-5">
                      {demoExam.text}
                    </p>

                    <div className="space-y-2.5" role="radiogroup" aria-label="Answer options">
                      {demoExam.options.map((opt) => {
                        const isSel = selected === opt.id;
                        return (
                          <button
                            key={opt.id}
                            role="radio"
                            aria-checked={isSel}
                            onClick={() => setSelected(opt.id)}
                            className={`w-full p-3.5 rounded-xl text-xs sm:text-sm text-left border transition-all flex items-center justify-between cursor-pointer ${
                              isSel
                                ? "bg-cyan-500/15 border-cyan-500/60 text-white font-semibold"
                                : "bg-[var(--background)]/70 border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center shrink-0 ${isSel ? "bg-cyan-400 text-[#04121f] font-bold" : "bg-[var(--surface)] text-[var(--text-tertiary)]"}`}>
                                {opt.id}
                              </span>
                              <span>{opt.text}</span>
                            </div>
                            {isSel && <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setSelected(null)}
                      className="btn btn-ghost btn-sm !text-xs"
                    >
                      Clear Response
                    </button>
                    <button
                      onClick={() => setSubmitted(true)}
                      className="btn btn-primary btn-sm"
                    >
                      Save & Next →
                    </button>
                  </div>
                  {submitted && (
                    <p className="text-xs text-emerald-400 font-mono-tech flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Response saved. This is a static preview — demo UI only.
                    </p>
                  )}
                </div>

                {/* Palette */}
                <div className="lg:col-span-4 bg-[var(--surface-raised)]/60 p-5 rounded-2xl border border-[var(--border)] flex flex-col">
                  <div>
                    <span className="eyebrow-label block text-[10px] mb-3">Question Palette</span>
                    <div className="grid grid-cols-5 gap-2 mb-5" aria-hidden="true">
                      {Array.from({ length: demoExam.paletteTotal }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-lg font-mono text-[11px] flex items-center justify-center font-bold border ${
                            i === demoExam.currentIndex
                              ? "bg-cyan-400 text-[#04121f] border-cyan-300"
                              : i < demoExam.answeredCount
                                ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                                : "bg-[var(--background)]/60 text-[var(--text-tertiary)] border-[var(--border)]"
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 text-[11px] font-mono-tech text-[var(--text-secondary)]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-emerald-500/30 border border-emerald-500/50" />
                        {demoExam.answeredCount} Answered
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-cyan-400" />
                        Current active question
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-[var(--surface)] border border-[var(--border-strong)]" />
                        {demoExam.paletteTotal - demoExam.answeredCount} Unattempted
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[var(--border)]">
                    <div className="p-3 rounded-xl bg-cyan-500/[0.07] border border-cyan-500/25 text-xs text-cyan-200">
                      💡 {demoExam.aiTip}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="analytics"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                <AnimatePresence>
                  {analyticsData.map((a, i) => (
                    <motion.div
                      key={a.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4, ease: EASE }}
                      className="p-5 rounded-2xl bg-[var(--surface-raised)]/60 border border-[var(--border)]"
                    >
                      <span className={`font-mono-tech text-[11px] uppercase block mb-2 ${toneMap[a.tone]}`}>{a.label}</span>
                      <span className="font-heading text-2xl font-bold text-white block mb-2">{a.value}</span>
                      <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{a.note}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Weak topics + performance */}
                <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 lg:mt-0">
                  <div className="p-5 rounded-2xl bg-[var(--surface-raised)]/60 border border-[var(--border)]">
                    <span className="font-mono-tech text-[11px] uppercase text-[var(--danger)] block mb-4">Weak Topic Detector</span>
                    <div className="space-y-3">
                      {weakTopics.map((w) => (
                        <div key={w.topic}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-200 font-medium">{w.topic}</span>
                            <span className="font-mono-tech text-[var(--text-tertiary)]">{w.weakness}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-[var(--surface-hover)] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${w.weakness}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, ease: EASE }}
                              className="h-full bg-gradient-to-r from-rose-400 to-amber-400 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[var(--surface-raised)]/60 border border-[var(--border)]">
                    <span className="font-mono-tech text-[11px] uppercase text-cyan-300 block mb-4">Performance Tracker</span>
                    <div className="space-y-4">
                      {performanceBars.map((p) => (
                        <div key={p.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-200 font-medium">{p.label}</span>
                            <span className="font-mono-tech text-[var(--text-tertiary)]">{p.value}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-[var(--surface-hover)] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${p.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, ease: EASE }}
                              className={`h-full ${p.tone} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Try Demo CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[var(--surface-raised)]/70 border border-[var(--border)]">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">See the full portal live</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Take a 5-minute guided demo with the complete question palette and AI analytics.
            </p>
          </div>
          <button className="btn btn-primary shrink-0 group" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            <PlayCircle className="w-4 h-4" />
            {testSeriesConfig.ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}