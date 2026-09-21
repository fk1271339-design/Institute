import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Cpu, MessageSquare, Brain, Lightbulb, 
  Sparkles, CheckCircle2, ArrowUpRight 
} from 'lucide-react';

export default function BrandStory() {
  const pillars = [
    {
      icon: Cpu,
      title: 'AI Quantum Diagnostics',
      badge: 'Technology',
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/50',
      desc: 'Our proprietary algorithm tracks your time-spent per question, mistake patterns, and subject conceptual gaps to build personalized daily revision plans.'
    },
    {
      icon: ShieldCheck,
      title: '1-on-1 Daily Mentorship',
      badge: 'Pedagogy',
      color: 'text-indigo-400',
      border: 'hover:border-indigo-500/50',
      desc: 'Every student is paired with a dedicated IITian or AIIMS doctor mentor who conducts weekly strategy audits and psychological motivation checks.'
    },
    {
      icon: Brain,
      title: 'Psychometric Stamina Training',
      badge: 'Mindset',
      color: 'text-purple-400',
      border: 'hover:border-purple-500/50',
      desc: 'Simulated exam pressure rooms, breathwork drills, and timing strategy workshops ensure zero panic during the 3-hour high-stakes exam day.'
    },
    {
      icon: MessageSquare,
      title: '24/7 Instant Doubt Engine',
      badge: 'Support',
      color: 'text-emerald-400',
      border: 'hover:border-emerald-500/50',
      desc: 'Snap a photo of any tough problem at 1 AM. Receive a verified step-by-step video solution or connect to an online teaching assistant in <3 minutes.'
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950/60 bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Nexora Philosophy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Generic Coaching Fails & <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">How Nexora Solves It</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            We combined world-class IIT/AIIMS teaching minds with cutting-edge learning science to eliminate student burn-out and maximize output.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel p-6 rounded-3xl border border-slate-800/80 ${pillar.border} transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <span className="text-[10px] font-mono-tech uppercase px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                <span>Standard of Excellence</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
