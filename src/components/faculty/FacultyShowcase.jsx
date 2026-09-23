import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Trophy, BookOpen, Sparkles, Star, X, Award } from "lucide-react";
import { facultyData, facultyDomains } from "../../data/faculty";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function FacultyShowcase({ onOpenConsultation }) {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("profile");
  const [domain, setDomain] = useState("All");

  const filtered = useMemo(
    () =>
      facultyData.filter(
        (f) => domain === "All" || f.subject === domain
      ),
    [domain]
  );

  const openModal = (f) => {
    setSelected(f);
    setTab("profile");
  };

  return (
    <section id="faculty" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)]">
      <div className="absolute top-1/3 right-[-6rem] w-96 h-96 bg-cyan-500/8 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Senior Master Faculty"
          badgeIcon={GraduationCap}
          headlineTop="Learn From The"
          headlineGradient="Minds Behind Top AIRs"
          support="Our educators aren't just tutors — they are IITians, AIIMS doctors and Ph.D. researchers who have authored reference books and mentored national toppers."
        />

        {/* Subject filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {facultyDomains.map((d) => (
            <button
              key={d}
              onClick={() => setDomain(d)}
              aria-pressed={domain === d}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                domain === d
                  ? "text-[#04121f] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/25 font-bold"
                  : "text-[var(--text-secondary)] bg-[var(--surface-raised)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((f, idx) => (
              <motion.article
                key={f.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: EASE }}
                className="surface-base surface-hover overflow-hidden group flex flex-col bg-[var(--surface-raised)]/50"
              >
                {/* Photo */}
                <div className="relative h-60 overflow-hidden bg-[var(--surface)]">
                  <img
                    src={f.avatar}
                    alt={`${f.name} — ${f.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.05] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" aria-hidden="true" />

                  {/* Node tag */}
                  <span className="absolute top-3 left-3 badge !py-1 !px-2.5 !text-[9px] badge-cyan">
                    Orb Loop · {f.nodeType}
                  </span>

                  {/* Achievement badge */}
                  <div className="absolute bottom-3 inset-x-3 bg-[var(--background)]/80 backdrop-blur-md border border-amber-500/30 rounded-xl p-2.5 text-[11px] text-amber-300 font-semibold flex items-center gap-2">
                    <Trophy className="w-4 h-4 shrink-0" />
                    <span className="line-clamp-1">{f.achievement}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 grow">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {f.name}
                  </h3>
                  <p className="text-xs text-cyan-300 font-medium mt-0.5">{f.role}</p>
                  <p className="font-mono-tech text-[11px] text-[var(--text-tertiary)] mt-1.5">{f.qualification}</p>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="badge !py-0.5 !px-2 !text-[10px]">
                      <BookOpen className="w-3 h-3 text-cyan-300" />
                      {f.subject}
                    </span>
                    <span className="badge !py-0.5 !px-2 !text-[10px]">
                      <Star className="w-3 h-3 text-amber-400" />
                      {f.stats.rating}
                    </span>
                    <span className="badge !py-0.5 !px-2 !text-[10px]">{f.experience}</span>
                  </div>

                  <p className="mt-3 text-xs italic leading-relaxed text-[var(--text-secondary)] line-clamp-2">
                    “{f.philosophy}”
                  </p>
                </div>

                {/* Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button onClick={() => openModal(f)} className="btn btn-ghost btn-sm w-full !text-xs">
                    Read Profile
                  </button>
                  <button
                    onClick={() => {
                      setSelected(f);
                      setTab("achievements");
                    }}
                    className="btn btn-ghost btn-sm w-full !text-xs"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    Achievements
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Faculty modal */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--background)]/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} profile`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.32, ease: EASE }}
              className="glass-panel surface-base max-w-2xl w-full p-6 sm:p-8 rounded-[1.75rem] relative max-h-[88vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close profile"
                className="absolute top-4 right-4 p-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <img
                  src={selected.avatar}
                  alt={selected.name}
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-cyan-500/40 shrink-0"
                />
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">{selected.name}</h3>
                  <p className="text-xs text-cyan-300 font-semibold">{selected.role}</p>
                  <p className="font-mono-tech text-xs text-[var(--text-tertiary)] mt-1">{selected.qualification}</p>
                </div>
              </div>

              {/* Tab switch */}
              <div className="flex gap-2 mb-6 bg-[var(--surface)] p-1 rounded-full w-fit border border-[var(--border-subtle)]">
                <button
                  onClick={() => setTab("profile")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    tab === "profile" ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/30" : "text-[var(--text-secondary)]"
                  }`}
                >
                  Profile & Philosophy
                </button>
                <button
                  onClick={() => setTab("achievements")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    tab === "achievements" ? "bg-amber-500/20 text-amber-200 border border-amber-500/30" : "text-[var(--text-secondary)]"
                  }`}
                >
                  Achievements
                </button>
              </div>

              <AnimatePresence mode="wait">
                {tab === "profile" ? (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-2xl bg-[var(--background)]/60 border border-[var(--border-subtle)]">
                      <span className="eyebrow-label block text-[10px] mb-1.5">Teaching Philosophy</span>
                      <p className="italic text-slate-200 text-sm">“{selected.philosophy}”</p>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{selected.bio}</p>

                    <div className="grid grid-cols-3 gap-3 pt-1">
                      <Stat label="Students Mentored" value={selected.stats.students} tone="text-cyan-300" />
                      <Stat label="Top 100 Ranks" value={selected.stats.top100Ranks} tone="text-amber-300" />
                      <Stat label="Student Rating" value={`★ ${selected.stats.rating}`} tone="text-emerald-300" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="achievements"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <p className="text-xs font-semibold text-amber-300 uppercase font-mono-tech tracking-widest mb-4">
                      Career Highlights
                    </p>
                    {[selected.topRanks, ...selected.achievements].map((a, i) => (
                      <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--background)]/60 border border-[var(--border-subtle)]">
                        <Award className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-200">{a}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => {
                  setSelected(null);
                  onOpenConsultation();
                }}
                className="btn btn-primary w-full mt-6"
              >
                <Sparkles className="w-4 h-4" />
                Book 1-on-1 Mentorship Session
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Stat({ label, value, tone }) {
  return (
    <div className="p-3 rounded-xl bg-[var(--background)]/60 border border-[var(--border-subtle)] text-center">
      <span className={`font-heading text-lg font-bold block ${tone}`}>{value}</span>
      <span className="text-[10px] font-mono-tech uppercase text-[var(--text-tertiary)]">{label}</span>
    </div>
  );
}