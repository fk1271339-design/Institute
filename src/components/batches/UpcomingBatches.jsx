import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Users, Flame, 
  ArrowRight, Sparkles, CheckCircle2, Shield 
} from 'lucide-react';
import { upcomingBatches } from '../../data/mockData';

export default function UpcomingBatches({ onReserveSeat }) {
  return (
    <section id="batches" className="py-24 relative bg-slate-950/90 border-t border-slate-800/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Academic Calendar 2026</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Upcoming <span className="text-gradient-cyan">Super-30 Batches</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Batch sizes are capped strictly at 30 students to maintain 1-on-1 personal mentorship and daily doubt access.
          </p>
        </div>

        {/* Batches Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingBatches.map((batch) => (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card-glow p-6 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Header Tag & Seat Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-bold uppercase bg-slate-900 text-cyan-400 border border-slate-800">
                    {batch.targetYear} • {batch.grade}
                  </span>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono-tech font-bold animate-pulse">
                    <Flame className="w-3.5 h-3.5 text-rose-400" />
                    <span>Only {batch.seatsRemaining} Seats Left!</span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {batch.name}
                </h3>
                
                <div className="space-y-2.5 text-xs text-slate-300 mb-6 font-mono-tech">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Start Date: <strong className="text-white">{batch.startDate}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Timing: <strong className="text-white">{batch.timings}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Mode: <strong className="text-white">{batch.mode}</strong></span>
                  </div>
                </div>
              </div>

              {/* Progress Bar of Seat Filling */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex justify-between text-xs font-mono-tech text-slate-400 mb-1.5">
                  <span>Capacity Filled</span>
                  <span className="text-cyan-400 font-bold">{batch.totalSeats - batch.seatsRemaining} / {batch.totalSeats} Seats</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden mb-5 p-0.5 border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${((batch.totalSeats - batch.seatsRemaining) / batch.totalSeats) * 100}%` }}
                  />
                </div>

                <button
                  onClick={() => onReserveSeat(batch)}
                  className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Reserve Seat in {batch.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

