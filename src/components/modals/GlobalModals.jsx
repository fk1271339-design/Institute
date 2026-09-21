import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Search, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', target: 'IIT-JEE 2027', mode: 'Offline' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="glass-panel max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-cyan-500/40 shadow-2xl relative bg-slate-950"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">Counseling Session Booked!</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our Senior IITian Academic Advisor will call you within <strong className="text-cyan-400">30 minutes</strong> at {formData.phone}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Academic Strategy Session</span>
            </div>

            <h3 className="font-heading text-2xl font-extrabold text-white">
              Book 1-on-1 Counseling
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Get personalized rank projection, batch selection advice, and study kit roadmap.
            </p>

            <div>
              <label className="text-xs font-mono-tech text-slate-300 block mb-1">STUDENT NAME</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Aarav Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-xs font-mono-tech text-slate-300 block mb-1">PHONE NUMBER</label>
              <input 
                type="tel" 
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-mono-tech text-slate-300 block mb-1">TARGET EXAM</label>
                <select 
                  value={formData.target}
                  onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-cyan-500"
                >
                  <option value="IIT-JEE 2027">IIT-JEE 2027</option>
                  <option value="NEET-UG 2027">NEET-UG 2027</option>
                  <option value="Olympiad / Foundation">Olympiad / Foundation</option>
                  <option value="AI & Robotics">AI & Robotics</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono-tech text-slate-300 block mb-1">PREFERRED MODE</label>
                <select 
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-cyan-500"
                >
                  <option value="Offline">Offline Campus</option>
                  <option value="Live 4K Online">Live 4K Online</option>
                  <option value="Hybrid">Hybrid Model</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-xl shadow-cyan-500/25 transition-all text-sm mt-2"
            >
              Confirm Strategy Counseling Session
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export function CourseDetailModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="glass-panel max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-cyan-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto bg-slate-950"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-mono-tech font-bold border ${course.badgeColor}`}>
            {course.category} • {course.tag}
          </span>
          <span className="text-xs text-amber-400 font-bold font-mono-tech">★ {course.rating}</span>
        </div>

        <h3 className="font-heading text-2xl font-bold text-white mb-2">
          {course.title}
        </h3>
        <p className="text-xs text-slate-400 font-mono-tech mb-4">
          Target: {course.level} | Duration: {course.duration}
        </p>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {course.description}
        </p>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-6">
          <h4 className="text-xs font-mono-tech uppercase text-cyan-400 mb-3">PROGRAM HIGHLIGHTS & SYLLABUS</h4>
          <div className="space-y-2">
            {course.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div>
            <span className="text-[10px] text-slate-400 font-mono-tech uppercase block">ANNUAL FEE STRUCTURE</span>
            <span className="font-heading text-2xl font-extrabold text-white">{course.price}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnroll(course);
            }}
            className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg shadow-cyan-500/25"
          >
            Enroll / Reserve Slot
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function QuickSearchModal({ isOpen, onClose, onSelectCourse }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="glass-panel max-w-xl w-full p-4 rounded-2xl border border-slate-800 shadow-2xl relative bg-slate-950"
      >
        <div className="relative mb-3">
          <Search className="w-5 h-5 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            autoFocus
            placeholder="Search courses, mentors, tests (Press Esc to close)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl pl-11 pr-10 py-3 text-sm focus:outline-none focus:border-cyan-500"
          />
          <button 
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono-tech text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        <div className="py-2 space-y-1">
          <div className="text-[10px] font-mono-tech text-slate-400 px-3 uppercase">QUICK SUGGESTIONS</div>
          {['IIT-JEE Advanced Zenith', 'NEET UG Apex Medical', 'Dr. Rajesh Sharma (Physics)', 'NSAT Scholarship Test'].map((s, i) => (
            <button
              key={i}
              onClick={() => {
                onClose();
              }}
              className="w-full px-3 py-2 text-xs text-left text-slate-300 hover:bg-slate-900 hover:text-cyan-400 rounded-lg flex items-center justify-between"
            >
              <span>{s}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
