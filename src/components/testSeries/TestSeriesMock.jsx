import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MonitorPlay, Cpu, TrendingUp, FileCheck, Clock, 
  CheckCircle2, AlertTriangle, Sparkles, BarChart2, Shield 
} from 'lucide-react';
import { testSeriesFeatures } from '../../data/mockData';

export default function TestSeriesMock() {
  const [activeTab, setActiveTab] = useState('live-exam');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="test-series" className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <MonitorPlay className="w-3.5 h-3.5" />
            <span>Nexora Test Portal</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Quantum All-India <span className="text-gradient-cyan">Test Series & AI Analytics</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Experience the exact NTA computer-based testing interface coupled with instant machine-learning diagnostics.
          </p>
        </div>

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testSeriesFeatures.map((feat) => (
            <div key={feat.id} className="glass-panel p-5 rounded-2xl border border-slate-800 text-left">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 w-fit mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Student Portal Mock Window */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-950">
          
          {/* Portal Top Bar Window Controls */}
          <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono-tech text-slate-400 border-l border-slate-800 pl-3">
                Nexora NTA Exam Portal v4.2 - Live Simulation
              </span>
            </div>

            {/* Portal Tab Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('live-exam')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'live-exam' 
                    ? 'bg-cyan-500 text-slate-950 font-bold' 
                    : 'text-slate-400 hover:text-white bg-slate-800/50'
                }`}
              >
                1. Exam Interface
              </button>

              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'analytics' 
                    ? 'bg-cyan-500 text-slate-950 font-bold' 
                    : 'text-slate-400 hover:text-white bg-slate-800/50'
                }`}
              >
                2. AI Analytics Radar
              </button>
            </div>
          </div>

          {/* Tab Content 1: Live Exam Simulator */}
          {activeTab === 'live-exam' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Question Main Panel */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-xs font-mono-tech">
                  <span className="text-cyan-400 font-bold">PHYSICS - SECTION A (JEE ADVANCED MOCK 04)</span>
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Clock className="w-4 h-4" />
                    <span>Time Left: 02:45:18</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono-tech text-slate-400 block mb-2">QUESTION 14 OF 30 (SINGLE CORRECT)</span>
                  <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed mb-4">
                    A uniform solid sphere of mass <span className="font-mono text-cyan-400">M = 4.0 kg</span> and radius <span className="font-mono text-cyan-400">R = 0.5 m</span> rolls without slipping down an inclined plane of angle <span className="font-mono text-cyan-400">θ = 30°</span>. Calculate the linear acceleration of the center of mass of the sphere. (Take g = 10 m/s²)
                  </p>

                  {/* Options */}
                  <div className="space-y-3">
                    {[
                      { id: 'A', text: '3.57 m/s² (5g / 7)' },
                      { id: 'B', text: '2.50 m/s² (g / 4)' },
                      { id: 'C', text: '4.20 m/s² (3g / 7)' },
                      { id: 'D', text: '5.00 m/s² (g / 2)' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedOption(opt.id)}
                        className={`w-full p-3.5 rounded-xl text-xs sm:text-sm font-medium text-left border transition-all flex items-center justify-between ${
                          selectedOption === opt.id
                            ? 'bg-cyan-500/20 border-cyan-500 text-white font-bold'
                            : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center ${selectedOption === opt.id ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'}`}>
                            {opt.id}
                          </span>
                          <span>{opt.text}</span>
                        </div>
                        {selectedOption === opt.id && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button className="px-4 py-2 text-xs font-semibold text-slate-400 bg-slate-900 rounded-xl border border-slate-800">
                    Clear Response
                  </button>
                  <button 
                    onClick={() => setIsSubmitted(true)}
                    className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 rounded-xl shadow-lg shadow-cyan-500/20"
                  >
                    Save & Next Question →
                  </button>
                </div>
              </div>

              {/* Question Palette Right Panel */}
              <div className="lg:col-span-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono-tech text-slate-400 uppercase block mb-3">QUESTION PALETTE</span>
                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-9 h-9 rounded-lg font-mono text-xs flex items-center justify-center font-bold border ${
                          i === 13 
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400 ring-2 ring-cyan-400/40' 
                            : i < 13 
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                            : 'bg-slate-950 text-slate-500 border-slate-800'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-[11px] text-slate-400 font-mono-tech">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-emerald-500/40 border border-emerald-500" />
                      <span>13 Answered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-cyan-500 border border-cyan-400" />
                      <span>Current Active Question</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-slate-950 border border-slate-800" />
                      <span>7 Unattempted</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-300">
                    💡 AI Tip: You spend 1.8 mins on physics. Rotate to numerical questions first to maximize marks per minute.
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab Content 2: AI Analytics Radar */}
          {activeTab === 'analytics' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono-tech text-cyan-400 uppercase block mb-2">SPEED VS ACCURACY</span>
                <span className="font-heading text-3xl font-bold text-white mb-2 block">94.2%</span>
                <p className="text-xs text-slate-400">High accuracy maintained on Rotational Mechanics & Electrostatics.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono-tech text-amber-400 uppercase block mb-2">TIME WASTED AUDIT</span>
                <span className="font-heading text-3xl font-bold text-white mb-2 block">4.5 Mins</span>
                <p className="text-xs text-slate-400">Lost on Question 8 due to calculation mistake. Target focus on mental speed math.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono-tech text-emerald-400 uppercase block mb-2">PREDICTED AIR RANGE</span>
                <span className="font-heading text-3xl font-bold text-white mb-2 block">AIR 140 - 280</span>
                <p className="text-xs text-slate-400">Based on All-India peer benchmark of 45,000+ test takers this week.</p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
