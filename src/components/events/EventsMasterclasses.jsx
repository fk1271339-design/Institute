import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, Users, Video, Sparkles, 
  ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { upcomingEvents } from '../../data/mockData';

export default function EventsMasterclasses({ onRegisterEvent }) {
  return (
    <section className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>Interactive Webinars</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Upcoming Mega <span className="text-gradient-cyan">Live Masterclasses</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Attend live interactive webinars hosted by senior IITian directors and doctor mentors. Free registration open for all aspirants.
          </p>
        </div>

        {/* Masterclass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-bold uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {event.type}
                  </span>

                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono-tech">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{event.registeredCount.toLocaleString()} Aspirants Joined</span>
                  </div>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {event.title}
                </h3>

                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono-tech text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Speaker: <strong className="text-white">{event.speaker}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Date & Time: <strong className="text-white">{event.date} • {event.time}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs font-mono-tech text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Free 4K Streaming Access</span>
                </div>

                <button
                  onClick={() => onRegisterEvent(event)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-md shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-1.5"
                >
                  <span>Reserve Free Spot</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
