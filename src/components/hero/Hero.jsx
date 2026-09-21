import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, ShieldCheck, Play, Award, 
  Target, Cpu, Users, Zap, CheckCircle2 
} from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center bg-slate-950 bg-grid-pattern">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/20 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-950/40 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Admissions Open for 2026-27 | <span className="text-cyan-400 font-bold">NSAT 100% Scholarship Test</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Pioneering The Next Era Of <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Competitive Excellence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Empowering serious aspirants for <span className="text-white font-semibold">IIT-JEE, NEET-UG & Olympiads</span> with Senior IITian faculty, 3D interactive learning engines, and personalized AI rank diagnostics.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Courses & Batches</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href="#scholarship"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/80 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Register for NSAT Scholarship</span>
            </a>
          </motion.div>

          {/* Quick Value Proof Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80"
          >
            <div className="glass-panel p-4 rounded-2xl text-left border-l-2 border-l-cyan-500">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Trophy className="w-4 h-4" />
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white">340+</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Top 100 AIR in JEE & NEET</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left border-l-2 border-l-indigo-500">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <Users className="w-4 h-4" />
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white">18,500+</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Selections in IITs & AIIMS</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left border-l-2 border-l-emerald-500">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white">96.4%</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Success Rate in Qualification</p>
            </div>

            <div className="glass-panel p-4 rounded-2xl text-left border-l-2 border-l-purple-500">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <Cpu className="w-4 h-4" />
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white">24/7 AI</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Instant Doubt Engine</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
