import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Award, Star, BookOpen, Quote, Trophy,
  ArrowRight, Sparkles, CheckCircle, GraduationCap, Calendar 
} from 'lucide-react';
import { facultyData } from '../../data/mockData';

export default function FacultyShowcase({ onOpenConsultation }) {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [filterDomain, setFilterDomain] = useState('All');

  const domains = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'];

  const filteredFaculty = facultyData.filter(f => {
    if (filterDomain === 'All') return true;
    return f.role.toLowerCase().includes(filterDomain.toLowerCase()) || 
           f.specialty.toLowerCase().includes(filterDomain.toLowerCase());
  });

  return (
    <section id="faculty" className="py-24 relative bg-slate-950 border-t border-slate-800/80">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Senior Master Faculty</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Learn From The <span className="text-gradient-cyan">Minds Behind Top AIRs</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Our educators aren't just tutors — they are IITians, AIIMS Doctors, and Ph.D. researchers who have authored top reference books and trained national toppers.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setFilterDomain(dom)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filterDomain === dom
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((faculty) => (
            <motion.div
              key={faculty.id}
              id={faculty.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl border border-slate-800 overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Faculty Photo */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img 
                    src={faculty.avatar} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Node Type Tag */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-500/40 text-[10px] font-mono-tech font-bold text-cyan-400">
                    ORB NODE: {faculty.nodeType}
                  </div>

                  {/* Top Rank Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-800 text-xs text-amber-400 font-semibold flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="line-clamp-1">{faculty.topRanks}</span>
                  </div>
                </div>

                {/* Faculty Info */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {faculty.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-2">
                    {faculty.role}
                  </p>
                  <p className="text-xs text-slate-400 font-mono-tech mb-4">
                    {faculty.qualification}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    "{faculty.quote}"
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedFaculty(faculty)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>Read Profile & Bio</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal for Faculty Bio */}
      <AnimatePresence>
        {selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedFaculty.avatar} 
                    alt={selectedFaculty.name} 
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-500/40"
                  />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold">
                      {selectedFaculty.role}
                    </p>
                    <p className="text-xs text-slate-400 font-mono-tech mt-1">
                      {selectedFaculty.qualification}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedFaculty(null)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-slate-800"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-mono-tech text-slate-400 uppercase block mb-1">EDUCATOR PHILOSOPHY</span>
                  <p className="italic text-slate-200">"{selectedFaculty.quote}"</p>
                </div>

                <p>{selectedFaculty.bio}</p>
                
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">STUDENTS MENTORED</span>
                    <span className="font-heading text-lg font-bold text-cyan-400">{selectedFaculty.stats.students}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">TOP 100 RANKS</span>
                    <span className="font-heading text-lg font-bold text-amber-400">{selectedFaculty.stats.top100Ranks}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono-tech text-slate-400 block uppercase">STUDENT RATING</span>
                    <span className="font-heading text-lg font-bold text-emerald-400">★ {selectedFaculty.stats.rating}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedFaculty(null);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-xl shadow-cyan-500/20"
              >
                Book 1-on-1 Mentorship Session with {selectedFaculty.name.split(' ')[1]}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
