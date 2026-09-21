import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, KeyRound, MonitorCheck, Trophy, Sparkles, 
  ArrowRight, ShieldCheck, ChevronRight, Eye 
} from 'lucide-react';

export default function CinematicJourney() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'outside',
      stageNum: '01',
      title: 'Arrival at Nexora Apex Campus',
      subtitle: 'Outside the Academy',
      tagline: 'The Journey Begins Here',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      description: 'Step through the threshold of India’s premier futuristic coaching sanctuary. Built with acoustic lecture halls, quantum AI study pods, and a community of high-ambition rank aspirants.',
      highlights: [
        'Acoustically tuned soundproof campus layout',
        'Bio-metric digital attendance & Parent alert system',
        '24/7 guarded security & quiet study wings'
      ],
      accentColor: 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
    },
    {
      id: 'gateway',
      stageNum: '02',
      title: 'Digital Portal & AI Assessment',
      subtitle: 'The Entry Gateway',
      tagline: 'Intellectual Profiling',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      description: 'Upon entry, every student undergoes a comprehensive diagnostic evaluation. Our AI engine builds a baseline map of your mathematical logic, physics intuition, and memory recall speed.',
      highlights: [
        'Personalized diagnostic learning index (DLI)',
        'Custom student digital portal & tablet setup',
        'Baseline 1-on-1 counselor orientation session'
      ],
      accentColor: 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
    },
    {
      id: 'classroom',
      stageNum: '03',
      title: 'Interactive 3D Quantum Classroom',
      subtitle: 'Inside the Classroom',
      tagline: 'Experiential Conceptual Mastery',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      description: 'No boring lectures. Concepts in electrodynamics, organic chemistry, and calculus are projected via 3D interactive graphics, allowing students to inspect vector fields and 3D molecular rotations live.',
      highlights: [
        'Dual 4K ultra-wide interactive panel displays',
        'Senior IITian master faculty leading every batch',
        'Instant digital hand-raise & doubt logging'
      ],
      accentColor: 'border-purple-500 text-purple-400 bg-purple-500/10'
    },
    {
      id: 'results',
      stageNum: '04',
      title: 'Hall of Top All-India Ranks',
      subtitle: 'The Result Sanctuary',
      tagline: 'Triumph & National Glory',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      description: 'The final destination. Continuous adaptive testing, 24/7 doubt resolution, and mental stamina conditioning culminate in AIR 1, AIR 4, and 18,500+ top IIT & AIIMS admissions.',
      highlights: [
        'Over 340+ Top 100 AIRs in JEE & NEET',
        'Personal admission counseling for top IITs & AIIMS',
        'Lifetime Nexora Elite Alumni Club membership'
      ],
      accentColor: 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
    }
  ];

  return (
    <section id="journey" className="py-24 relative bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Experience</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Student <span className="text-gradient-cyan">Transformation Journey</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Experience the step-by-step evolution from an eager aspirant to an All-India Rank topper inside Nexora Academy.
          </p>
        </div>

        {/* Stage Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stages.map((stg, idx) => (
            <button
              key={stg.id}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                activeStage === idx 
                  ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-950/40' 
                  : 'bg-slate-950/80 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono-tech font-bold px-2 py-0.5 rounded ${stg.accentColor}`}>
                  STAGE {stg.stageNum}
                </span>
                {activeStage === idx && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                )}
              </div>
              <h4 className="font-heading text-sm font-bold text-white line-clamp-1">
                {stg.subtitle}
              </h4>
            </button>
          ))}
        </div>

        {/* Cinematic Active Stage Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stages[activeStage].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl"
          >
            {/* Visual Screen / Image */}
            <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
              <img 
                src={stages[activeStage].image} 
                alt={stages[activeStage].title} 
                className="w-full h-[320px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest block mb-1">
                    {stages[activeStage].tagline}
                  </span>
                  <h3 className="font-heading text-2xl font-bold">
                    {stages[activeStage].title}
                  </h3>
                </div>
                <div className="p-3 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 hidden sm:block">
                  <Eye className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Description & Key Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className={`text-xs font-mono-tech font-bold px-3 py-1 rounded-full uppercase inline-block mb-4 border ${stages[activeStage].accentColor}`}>
                  {stages[activeStage].subtitle}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                  {stages[activeStage].title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {stages[activeStage].description}
                </p>

                <div className="space-y-3 mb-8">
                  {stages[activeStage].highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition-all"
                >
                  Previous Stage
                </button>

                <div className="flex items-center gap-1 font-mono-tech text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">{activeStage + 1}</span> / {stages.length}
                </div>

                <button
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage(prev => Math.min(stages.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-300 text-slate-950 hover:from-cyan-300 hover:to-indigo-200 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
