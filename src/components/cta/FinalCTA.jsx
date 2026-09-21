import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, ShieldCheck, PhoneCall, 
  MapPin, GraduationCap, CheckCircle2 
} from 'lucide-react';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-24 relative bg-slate-950 overflow-hidden border-t border-slate-800/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-600/25 via-indigo-600/20 to-purple-600/25 blur-[180px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card-glow p-8 sm:p-14 rounded-3xl border border-cyan-500/50 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-center">
          
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin Your Rank Journey Today</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Ready to Turn Your Dream of <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">IIT or AIIMS into Reality?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Book a complimentary 1-on-1 strategy counseling session with our Senior IITian academic directors or take the NSAT 100% Scholarship Test.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-xl shadow-cyan-500/25 hover:scale-[1.03] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Book Free Strategy Session</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#scholarship"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all flex items-center justify-center gap-2 group"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Register for NSAT Test</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono-tech border-t border-slate-800/80 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Zero Admission Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Free Study Material Kit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Personalized AIR Analysis</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

