import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, Trophy, Play } from 'lucide-react';

export default function Testimonials({ onPlayVideo }) {
  const testimonials = [
    {
      name: 'Aarav K. Sharma',
      rank: 'AIR 01 - JEE Advanced 2025',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
      text: 'The 3D visual physics simulations by Dr. Rajesh Sharma completely transformed my electrodynamics understanding. Whenever I got stuck, the 24/7 AI doubt engine resolved it within minutes.',
      rating: 5,
      type: 'Student'
    },
    {
      name: 'Dr. Ramesh S. Roy',
      rank: 'Father of Ananya Roy (AIR 04 NEET)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      text: 'As a practicing surgeon myself, I was amazed by Nexora’s 3D anatomy modules and NCERT line-by-line micro test series. They gave my daughter absolute confidence on exam day.',
      rating: 5,
      type: 'Parent'
    },
    {
      name: 'Devansh V. Mehta',
      rank: 'AIR 12 - JEE Advanced 2025',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      text: 'I was in a droppers batch and had huge panic issues during mock tests. Nexora’s psychometric stamina drills and 1-on-1 counselor audits turned my weak areas into my strongest points.',
      rating: 5,
      type: 'Student'
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>Voices of Triumph</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hear From Our <span className="text-gradient-cyan">Toppers & Parents</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Real stories of transformation, focus, and national success inside Nexora Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-tech font-bold uppercase px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {item.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-11 h-11 rounded-xl object-cover border border-cyan-500/40"
                  />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-white">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-mono-tech text-cyan-400 block">
                      {item.rank}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onPlayVideo(item)}
                  className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 hover:scale-110 transition-transform"
                  title="Watch Video Testimonial"
                >
                  <Play className="w-4 h-4 fill-cyan-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
