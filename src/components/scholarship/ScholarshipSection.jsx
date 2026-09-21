import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Award, Sparkles, ArrowRight, 
  CheckCircle2, Calculator, ShieldCheck, Zap 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScholarshipSection({ onRegisterSuccess }) {
  const [targetExam, setTargetExam] = useState('IIT-JEE');
  const [grade, setGrade] = useState('Class 11');
  const [percentage, setPercentage] = useState(88);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  // Calculate scholarship tier
  let scholarshipPct = 50;
  if (percentage >= 95) scholarshipPct = 100;
  else if (percentage >= 90) scholarshipPct = 85;
  else if (percentage >= 85) scholarshipPct = 75;
  else if (percentage >= 75) scholarshipPct = 50;
  else scholarshipPct = 30;

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onRegisterSuccess) onRegisterSuccess(formData);
  };

  return (
    <section id="scholarship" className="py-24 relative bg-slate-950/90 border-t border-slate-800/80 bg-dots-pattern">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[500px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Merit-Based Financial Aid</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nexora SAT <span className="text-gradient-cyan">100% Scholarship Test</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            No deserving talent should be restricted by financial constraints. Take the online NSAT test to claim up to 100% fee waiver.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative bg-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Calculator Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-cyan-400 font-mono-tech text-xs uppercase font-bold">
                <Calculator className="w-4 h-4" />
                <span>INSTANT SCHOLARSHIP CALCULATOR</span>
              </div>

              {/* Target Exam */}
              <div>
                <label className="text-xs font-mono-tech text-slate-300 block mb-2">1. SELECT TARGET EXAM</label>
                <div className="grid grid-cols-3 gap-2">
                  {['IIT-JEE', 'NEET-UG', 'Olympiad'].map((ex) => (
                    <button
                      key={ex}
                      type="button"
                      onClick={() => setTargetExam(ex)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        targetExam === ex 
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' 
                          : 'bg-slate-900 text-slate-300 border border-slate-800'
                      }`}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Grade */}
              <div>
                <label className="text-xs font-mono-tech text-slate-300 block mb-2">2. CURRENT ACADEMIC GRADE</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Class 9/10', 'Class 11', 'Class 12 / Dropper'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGrade(g)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        grade === g 
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' 
                          : 'bg-slate-900 text-slate-300 border border-slate-800'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Percentage Slider */}
              <div>
                <div className="flex justify-between text-xs font-mono-tech text-slate-300 mb-2">
                  <span>3. PREVIOUS SCHOOL/BOARD %</span>
                  <span className="font-bold text-cyan-400 text-base">{percentage}%</span>
                </div>
                <input 
                  type="range" 
                  min="60" 
                  max="99" 
                  value={percentage}
                  onChange={(e) => setPercentage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Instant Estimate Result Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900 border border-cyan-500/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono-tech text-cyan-300 uppercase block">ESTIMATED SCHOLARSHIP</span>
                  <span className="font-heading text-3xl sm:text-4xl font-black text-cyan-400">
                    {scholarshipPct}% Fee Waiver
                  </span>
                </div>
                <Award className="w-10 h-10 text-cyan-400 shrink-0" />
              </div>
            </div>

            {/* Registration Form Right Column */}
            <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800">
              {registered ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Registration Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your NSAT slot & login credentials have been sent to <strong className="text-cyan-400">{formData.email || 'your email'}</strong>.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono-tech text-amber-400">
                    Exam Date: Next Sunday 10:00 AM IST (Online 1-Hour Test)
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Claim Your {scholarshipPct}% Scholarship Slot
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Fill out your details to lock in your eligibility for the upcoming online test.
                  </p>

                  <div>
                    <label className="text-xs font-mono-tech text-slate-300 block mb-1">FULL NAME</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono-tech text-slate-300 block mb-1">MOBILE NUMBER (FOR ADMIT CARD SMS)</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono-tech text-slate-300 block mb-1">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      required
                      placeholder="aarav@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg shadow-cyan-500/25 transition-all text-sm mt-2"
                  >
                    Register for NSAT Test Now (Free)
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
