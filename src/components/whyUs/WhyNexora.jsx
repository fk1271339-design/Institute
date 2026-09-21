import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, X, Sparkles, Zap, ShieldCheck, 
  Cpu, Users, Flame, Award, CheckCircle2 
} from 'lucide-react';

export default function WhyNexora() {
  const comparisonData = [
    {
      feature: 'Faculty Pedagogy & Quality',
      traditional: 'Rotational local tutors with varying experience',
      nexora: 'Senior IITians & M.D. Doctors with 15+ Yrs experience',
      badge: 'TOP 1% FACULTY'
    },
    {
      feature: 'Doubt Resolution Time',
      traditional: 'Overcrowded doubt counters, 24 to 48 hr delay',
      nexora: 'Instant 24/7 AI-Faculty Hybrid Portal (< 3 mins)',
      badge: 'INSTANT AI'
    },
    {
      feature: 'Test Performance Analytics',
      traditional: 'Basic offline scorecards with simple total marks',
      nexora: 'AI Weakness Heatmaps, Time-per-question & AIR Predictor',
      badge: 'PROPRIETARY'
    },
    {
      feature: 'Batch Size & Personalization',
      traditional: 'Massive halls with 200+ students per batch',
      nexora: 'Focused Super-30 Batches with 1-on-1 Personal Mentors',
      badge: 'SUPER-30'
    },
    {
      feature: 'Exam Hall Conditioning',
      traditional: 'Paper-based mock tests only',
      nexora: 'Exact NTA Computer-Based Simulator & Stress Drills',
      badge: 'REAL EXAM PORTAL'
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950/90 bg-grid-pattern border-t border-slate-800/80">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-600/15 blur-[140px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>The Nexora Edge</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Top Rankers Choose <span className="text-gradient-cyan">Nexora Academy</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            See how our tech-integrated pedagogy outperforms legacy coaching formats in every measurable dimension.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="glass-card-glow rounded-3xl border border-slate-800 overflow-hidden shadow-2xl mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/95">
                  <th className="p-5 font-heading text-sm font-bold text-slate-300 uppercase tracking-wider w-1/3">
                    Key Feature / Dimension
                  </th>
                  <th className="p-5 font-heading text-sm font-bold text-slate-400 uppercase tracking-wider w-1/3">
                    Traditional Coaching Institutes
                  </th>
                  <th className="p-5 font-heading text-sm font-bold text-cyan-400 uppercase tracking-wider w-1/3 bg-cyan-950/40 border-l border-cyan-500/40">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Nexora Academy Pro</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/60 transition-colors group">
                    <td className="p-5 font-semibold text-sm text-slate-200">
                      <div className="flex items-center gap-2">
                        <span>{row.feature}</span>
                        {row.badge && (
                          <span className="hidden sm:inline-block text-[9px] font-mono-tech px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                            {row.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-5 text-xs sm:text-sm text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-5 text-xs sm:text-sm text-slate-100 font-semibold bg-cyan-950/30 border-l border-cyan-500/30 group-hover:bg-cyan-950/40 transition-colors">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="text-white">{row.nexora}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

