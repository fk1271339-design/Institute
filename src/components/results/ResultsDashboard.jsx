import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Trophy, Calculator, Info, Building2, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { resultsData, statsOverview, predictorExams, rankBrackets, predictorDisclaimer } from "../../data/results";
import Counter from "../ui/Counter";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function ResultsDashboard() {
  const [examKey, setExamKey] = useState("JEE");
  const [score, setScore] = useState(predictorExams.JEE.defaultScore);

  const exam = predictorExams[examKey];
  const normalized = Math.min(score, exam.maxScore);

  const bracket = useMemo(() => {
    const list = rankBrackets[examKey];
    return list.find((b) => normalized >= b.min) || list[list.length - 1];
  }, [examKey, normalized]);

  const switchExam = (key) => {
    setExamKey(key);
    setScore(predictorExams[key].defaultScore);
  };

  return (
    <section id="results" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)] bg-dots-pattern overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[420px] bg-amber-500/[0.07] blur-[160px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Proven Record of Excellence"
          badgeIcon={ShieldCheck}
          headlineTop="Hall of Fame &"
          headlineGradient="AIR Toppers"
          support="Year after year, Nexora students dominate the top ranks in JEE Advanced and NEET UG with a verified culture of precision and mentorship."
          tone="gold"
        />

        {/* Large statistics with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 mb-14">
          {statsOverview.map((st, i) => (
            <motion.div
              key={`${st.label}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
              className="surface-base surface-accent p-5 text-center bg-[var(--surface-raised)]/60"
            >
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-gradient-gold">
                <Counter value={st.value} prefix={st.prefix} suffix={st.suffix} />
              </div>
              <p className="mt-1.5 text-[11px] leading-snug font-mono-tech uppercase tracking-wide text-[var(--text-tertiary)]">
                {st.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hall of Fame AIR cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {resultsData.map((topper, idx) => (
            <motion.article
              key={topper.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: EASE }}
              className="surface-base surface-hover p-5 flex flex-col justify-between bg-[var(--surface-raised)]/60 group"
            >
              <div>
                <div className="relative mb-4 rounded-2xl overflow-hidden h-44 bg-[var(--surface)] border border-[var(--border-subtle)]">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" aria-hidden="true" />

                  {/* Gold rank badge — reserved strictly for ranks */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 text-[#3a2500] font-heading font-black text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    {topper.rank}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="font-mono-tech text-[10px] uppercase text-amber-200 bg-[var(--background)]/70 backdrop-blur px-2 py-0.5 rounded-full border border-amber-500/30">
                      {topper.exam} · {topper.year}
                    </span>
                    <span className="font-heading text-sm font-bold">{topper.score}</span>
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {topper.name}
                </h3>
                <p className="text-xs text-cyan-300 font-medium mt-0.5">{topper.branch}</p>
                <p className="mt-3 text-xs italic leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                  “{topper.quote}”
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[var(--border-subtle)] font-mono-tech text-[11px] text-[var(--text-tertiary)]">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-300" />
                  {topper.courseEnrolled}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* AIR Predictor — DEMO estimator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="surface-base overflow-hidden rounded-[1.75rem] bg-[var(--surface-raised)]/70 backdrop-blur border-amber-500/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            {/* Controls */}
            <div className="lg:col-span-6">
              <span className="badge badge-gold mb-4">
                <Calculator className="w-3.5 h-3.5" />
                Interactive AIR Estimator
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-3 pt-1 leading-tight">
                Estimate Your <span className="text-gradient-gold">All-India Rank</span>
              </h3>
              <p className="text-sm leading-relaxed mb-6 text-[var(--text-secondary)]">
                Select an exam, set your score and get an immediate probability band with likely colleges and a recommended program.
              </p>

              {/* Exam switcher */}
              <div className="flex items-center gap-3 mb-7">
                {Object.entries(predictorExams).map(([key, cfg]) => (
                  <button
                    key={key}
                    onClick={() => switchExam(key)}
                    aria-pressed={examKey === key}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      examKey === key
                        ? "bg-gradient-to-r from-amber-400 to-amber-500 text-[#3a2500] shadow-md shadow-amber-500/25"
                        : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-amber-500/40"
                    }`}
                  >
                    {cfg.label} <span className="opacity-60">(Max {cfg.maxScore})</span>
                  </button>
                ))}
              </div>

              {/* Score slider */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-baseline font-mono-tech text-xs">
                  <span className="text-[var(--text-tertiary)] uppercase tracking-widest">Your Score</span>
                  <span className="font-bold text-amber-300 text-lg">{normalized} / {exam.maxScore}</span>
                </div>
                <input
                  type="range"
                  min={exam.minSliderScore}
                  max={exam.maxScore}
                  value={score}
                  onChange={(e) => setScore(Number(e.target.value))}
                  aria-label={`${exam.label} score slider`}
                  className="range-input [accent-color:var(--accent-gold)]"
                />
              </div>

              <div className="flex items-start gap-2 text-[11px] font-mono-tech italic text-[var(--text-tertiary)]">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{predictorDisclaimer}</span>
              </div>
            </div>

            {/* Result */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-amber-500/25 bg-[var(--background)]/60 p-6 sm:p-8 shadow-xl">
                <span className="eyebrow-label block text-[10px] mb-1 !text-amber-300 !tracking-widest">
                  Estimated Rank Prediction
                </span>
                <div className="font-heading text-3xl sm:text-5xl font-black text-gradient-gold mt-2 mb-5">
                  {bracket.rank}
                </div>

                <div className="pt-4 border-t border-[var(--border)] space-y-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block mb-0.5">Probable top colleges</span>
                      {bracket.colleges}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block mb-0.5">Recommended Nexora program</span>
                      {exam.program}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}