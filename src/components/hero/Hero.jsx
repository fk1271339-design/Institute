import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Award, Trophy, Users, Zap, Cpu, ChevronRight
} from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  // Synchronized Entrance Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center bg-slate-950 bg-grid-pattern">
      
      {/* Tamed Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-purple-600/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Light Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-cyan-500/10 rounded-full animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-indigo-500/10 rounded-full animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          
          {/* Top Announcement Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div 
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-sm cursor-pointer hover:border-cyan-400/60 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Admissions Open 2026-27 | <span className="text-cyan-400 font-semibold">NSAT 100% Scholarship Test</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Engineering The Next Era Of <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Competitive Excellence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Empowering serious aspirants for <span className="text-white font-semibold underline decoration-cyan-500/40 underline-offset-4">IIT-JEE, NEET-UG & Olympiads</span> with Senior IITian faculty, 3D interactive learning engines, and personalized AI rank diagnostics.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Courses & Batches</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#scholarship"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/90 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Award className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Register for NSAT Scholarship</span>
            </a>
          </motion.div>

          {/* Quick Value Proof Metrics Cards (Data-driven demo numbers) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80"
          >
            <div className="glass-card-glow p-5 rounded-2xl text-left border-l-2 border-l-cyan-500 group bg-slate-950/80">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Trophy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white">340+</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Top 100 AIR in JEE & NEET</p>
            </div>

            <div className="glass-card-glow p-5 rounded-2xl text-left border-l-2 border-l-indigo-500 group bg-slate-950/80">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white">18,500+</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Selections in IITs & AIIMS</p>
            </div>

            <div className="glass-card-glow p-5 rounded-2xl text-left border-l-2 border-l-emerald-500 group bg-slate-950/80">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white">96.4%</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Qualification Success Rate</p>
            </div>

            <div className="glass-card-glow p-5 rounded-2xl text-left border-l-2 border-l-purple-500 group bg-slate-950/80">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <Cpu className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white">24/7 AI</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Instant Doubt Clearance</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
