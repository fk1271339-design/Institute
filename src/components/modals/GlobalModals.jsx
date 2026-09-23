import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Search, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { coursesData } from "../../data/courses";
import { EASE } from "../ui/SectionHeading";

function ModalShell({ isOpen = true, onClose, labelledBy, children, className = "", initialFocusRef }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    (initialFocusRef?.current ?? closeRef.current)?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, initialFocusRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--background)]/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ duration: 0.3, ease: EASE }}
            className={`glass-panel surface-base rounded-[1.75rem] border-cyan-500/25 shadow-2xl relative bg-[var(--surface-raised)] max-h-[90vh] overflow-y-auto ${className}`}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 p-2 text-[var(--text-secondary)] hover:text-white bg-[var(--surface)] rounded-full border border-[var(--border)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", target: "IIT-JEE 2027", mode: "Offline" });

  const resetOnClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <ModalShell isOpen={isOpen} onClose={resetOnClose} labelledBy="consultation-title" className="max-w-lg w-full p-6 sm:p-8">
      {submitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 id="consultation-title" className="font-heading text-2xl font-bold text-white">
            Counseling Session Booked!
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Our senior IITian academic advisor will call you within{" "}
            <strong className="text-cyan-300">30 minutes</strong> at {formData.phone}.
          </p>
          <button onClick={resetOnClose} className="btn btn-primary btn-sm mx-auto">
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-cyan text-[10px] font-mono-tech uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Free Academic Strategy Session
          </div>

          <h3 id="consultation-title" className="font-heading text-2xl font-extrabold text-white">
            Book 1-on-1 Counseling
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mb-2">
            Get a personalized rank projection, batch selection advice and study kit roadmap.
          </p>

          <div>
            <label htmlFor="c-name" className="eyebrow-label block text-[10px] mb-1.5">Student name</label>
            <input
              id="c-name"
              type="text"
              required
              placeholder="e.g. Aarav Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="field-input"
            />
          </div>

          <div>
            <label htmlFor="c-phone" className="eyebrow-label block text-[10px] mb-1.5">Phone number</label>
            <input
              id="c-phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="field-input"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="c-target" className="eyebrow-label block text-[10px] mb-1.5">Target exam</label>
              <select
                id="c-target"
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                className="field-input"
              >
                <option>IIT-JEE 2027</option>
                <option>NEET-UG 2027</option>
                <option>Olympiad / Foundation</option>
                <option>AI & Robotics</option>
              </select>
            </div>

            <div>
              <label htmlFor="c-mode" className="eyebrow-label block text-[10px] mb-1.5">Preferred mode</label>
              <select
                id="c-mode"
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                className="field-input"
              >
                <option>Offline</option>
                <option>Live 4K Online</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full !py-3.5 mt-1">
            Confirm Strategy Counseling Session
          </button>
        </form>
      )}
    </ModalShell>
  );
}

export function CourseDetailModal({ course, onClose, onEnroll }) {
  return (
    <ModalShell isOpen={!!course} onClose={onClose} labelledBy="course-title" className="max-w-2xl w-full p-6 sm:p-8">
      {course && (
        <>
          <div className="flex items-center gap-2 mb-3 mr-10">
            <span className="badge badge-cyan !text-[10px] !normal-case">
              {course.category} • {course.tag}
            </span>
            <span className="text-xs text-amber-300 font-bold font-mono-tech">★ {course.rating}</span>
          </div>

          <h3 id="course-title" className="font-heading text-2xl font-bold text-white mb-2">
            {course.title}
          </h3>
          <p className="text-xs text-[var(--text-tertiary)] font-mono-tech mb-4">
            Target: {course.level} | Duration: {course.duration}
          </p>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">{course.description}</p>

          <div className="p-4 rounded-2xl bg-[var(--surface)]/60 border border-[var(--border)] mb-6">
            <h4 className="text-[10px] font-mono-tech uppercase text-cyan-300 tracking-widest mb-3">
              Program highlights & syllabus
            </h4>
            <div className="space-y-2">
              {course.features?.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
            <div>
              <span className="text-[10px] text-[var(--text-tertiary)] font-mono-tech uppercase block">
                Annual fee structure
              </span>
              <span className="font-heading text-2xl font-extrabold text-white">{course.price}</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="btn btn-primary"
            >
              Enroll / Reserve Slot
            </button>
          </div>
        </>
      )}
    </ModalShell>
  );
}

export function QuickSearchModal({ isOpen, onClose, onSelectCourse }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const results = coursesData.filter((c) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return [c.title, c.category, c.tag, c.level].some((v) => v?.toLowerCase().includes(q));
  });

  const pick = (course) => {
    setQuery("");
    onClose();
    onSelectCourse(course);
  };

  return (
    <ModalShell isOpen={isOpen} onClose={onClose} labelledBy="search-title" className="max-w-xl w-full p-5" initialFocusRef={inputRef}>
      <div className="relative mb-4">
        <Search className="w-5 h-5 text-cyan-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          id="search-title"
          ref={inputRef}
          type="text"
          autoFocus
          placeholder="Search courses, exams, levels (Press Esc to close)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="field-input !pl-11"
          aria-label="Search courses"
        />
      </div>

      <div className="py-2 space-y-1 max-h-[50vh] overflow-y-auto">
        <div className="text-[10px] font-mono-tech text-[var(--text-tertiary)] px-3 uppercase mb-2">
          {query.trim() ? `${results.length} result(s)` : "Quick suggestions"}
        </div>
        {results.slice(0, 8).map((c) => (
          <button
            key={c.id}
            onClick={() => pick(c)}
            className="w-full px-3 py-2.5 text-xs text-left text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-cyan-300 rounded-lg flex items-center justify-between cursor-pointer"
          >
            <span>
              <strong className="text-slate-100 font-semibold">{c.tag}</strong> — {c.title}
              <span className="block text-[10px] font-mono-tech uppercase text-[var(--text-tertiary)] mt-0.5">{c.level}</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        ))}
        {results.length === 0 && (
          <div className="px-3 py-4 text-xs text-[var(--text-tertiary)]">No courses match “{query}”.</div>
        )}
      </div>
    </ModalShell>
  );
}