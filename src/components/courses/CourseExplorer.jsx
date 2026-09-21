import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Search, Star, Users, Calendar, ArrowRight, 
  CheckCircle, Sparkles, Filter, ChevronRight, Award 
} from 'lucide-react';
import { coursesData } from '../../data/mockData';

export default function CourseExplorer({ onSelectCourse }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'IIT-JEE', 'NEET', 'Olympiad', 'Foundation', 'AI & Tech'];

  const filteredCourses = coursesData.filter(course => {
    const matchesCat = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="courses" className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Programs 2026-27</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curated Programs for <span className="text-gradient-cyan">Targeted Ranks</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Choose your target goal. Every program comes equipped with senior faculty, 3D visualization tools, and All-India mock test series.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-900/90 p-1.5 rounded-full border border-slate-800/90 backdrop-blur-xl shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 shadow-md shadow-cyan-500/30 font-bold scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search course or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-cyan-400 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>

        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card-glow p-6 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group shadow-xl hover:shadow-cyan-950/40"
              >
                <div>
                  {/* Card Header Tag & Rating */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono-tech font-bold uppercase border ${course.badgeColor}`}>
                      {course.tag}
                    </span>
                    <div className="flex items-center gap-1 bg-slate-900/90 px-2.5 py-1 rounded-full border border-slate-800 text-xs text-amber-400 font-bold shadow-inner">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Course Title & Level */}
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                  <div className="text-xs font-mono-tech text-slate-400 mb-4 flex items-center gap-3">
                    <span>{course.level}</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Features Bullet List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                    {course.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Details & CTA */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pt-4 border-t border-slate-800/80 font-mono-tech">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.enrolledCount} Aspirants</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{course.successRate} Pass Rate</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono-tech uppercase block">ANNUAL FEE</span>
                      <span className="font-heading text-lg font-extrabold text-white">
                        {course.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectCourse(course)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-md shadow-cyan-500/20 hover:scale-105 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Course Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p>No courses found matching "{searchQuery}". Try selecting another category.</p>
          </div>
        )}

      </div>
    </section>
  );
}

