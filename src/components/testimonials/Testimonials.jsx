import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Quote, Sparkles, Trophy, Play, 
  ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, ThumbsUp
} from 'lucide-react';
import { testimonialsData } from '../../data/mockData';

export default function Testimonials({ onPlayVideo }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'JEE Toppers', 'NEET Toppers', 'Parents'];

  const filteredTestimonials = testimonialsData.filter(item => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  // Keep index within bounds when category changes
  const activeList = filteredTestimonials;
  const safeIndex = currentIndex >= activeList.length ? 0 : currentIndex;
  const currentItem = activeList[safeIndex] || testimonialsData[0];

  return (
    <section id="testimonials" className="py-24 relative bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-amber-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
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

        {/* Rating Metrics & Trust Bar */}
        <div className="glass-card-glow p-4 sm:p-6 rounded-2xl border border-slate-800 mb-12 flex flex-wrap items-center justify-around gap-6 text-center bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div className="text-left">
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-white">4.96 / 5.0</div>
              <p className="text-xs text-slate-400 font-mono-tech">Overall Student Rating</p>
            </div>
          </div>

          <div className="w-px h-10 bg-slate-800 hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Trophy className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-left">
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-white">340+ Ranks</div>
              <p className="text-xs text-slate-400 font-mono-tech">Top 100 AIR in JEE & NEET</p>
            </div>
          </div>

          <div className="w-px h-10 bg-slate-800 hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="font-heading text-xl sm:text-2xl font-extrabold text-white">100% Verified</div>
              <p className="text-xs text-slate-400 font-mono-tech">Authentic Student Audits</p>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 shadow-md shadow-cyan-500/30 font-bold scale-105'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Testimonial Carousel Frame */}
        <div className="relative max-w-4xl mx-auto mb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="glass-card-glow p-8 sm:p-12 rounded-3xl border border-cyan-500/40 shadow-2xl relative bg-slate-950/90 overflow-hidden"
            >
              {/* Glowing Accent Corner Tag */}
              <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-cyan-500/20 border-l border-b border-cyan-500/40 text-[11px] font-mono-tech font-bold text-cyan-400 uppercase">
                {currentItem.highlight}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                
                {/* Reviewer Photo with Frame */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-xl shadow-cyan-950/50">
                    <img 
                      src={currentItem.image} 
                      alt={currentItem.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-slate-900 border border-amber-500/50 text-amber-400 shadow-md">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                </div>

                {/* Review Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 mb-3">
                    {Array.from({ length: currentItem.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-xs text-slate-400 font-mono-tech ml-2">5.0 Star Verified Review</span>
                  </div>

                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic mb-6">
                    "{currentItem.text}"
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">
                        {currentItem.name}
                      </h3>
                      <p className="text-xs font-mono-tech text-cyan-400">
                        {currentItem.rank}
                      </p>
                    </div>

                    <button
                      onClick={() => onPlayVideo(currentItem)}
                      className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 hover:text-cyan-300 text-xs font-bold transition-all flex items-center gap-2 group cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-cyan-400 group-hover:scale-110 transition-transform" />
                      <span>Watch Story</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
              title="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {activeList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    safeIndex === idx 
                      ? 'w-8 bg-cyan-400 shadow-md shadow-cyan-500/50' 
                      : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
              title="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Secondary Reviews Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
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
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-tech font-bold uppercase px-2.5 py-1 rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                    {item.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic line-clamp-3">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-10 h-10 rounded-xl object-cover border border-cyan-500/40"
                  />
                  <div>
                    <h4 className="font-heading text-xs font-bold text-white">
                      {item.name}
                    </h4>
                    <span className="text-[10px] font-mono-tech text-slate-400 block line-clamp-1">
                      {item.rank}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onPlayVideo(item)}
                  className="p-2 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 hover:scale-110 transition-transform cursor-pointer"
                  title="Watch Video Review"
                >
                  <Play className="w-3.5 h-3.5 fill-cyan-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
