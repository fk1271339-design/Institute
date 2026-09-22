import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, X, Sparkles, MessageCircle, PhoneCall } from 'lucide-react';
import { faqsData } from '../../data/mockData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Admissions & Batches', 'Pedagogy & AI Portal', 'Scholarships & Fees', 'Doubt Clearance'];

  const filteredFaqs = faqsData.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 relative z-10 bg-slate-950 overflow-hidden border-t border-slate-800/80">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Everything you need to know about Nexora Academy admissions, scholarship tests, and pedagogy.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. scholarship, doubt solving, live classes)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-800 text-white rounded-2xl pl-11 pr-10 py-3.5 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-all duration-200 shadow-xl focus:ring-2 focus:ring-cyan-500/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden shadow-lg ${
                  isOpen ? 'border-cyan-500/50 bg-slate-900/90 shadow-cyan-950/30' : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left font-heading text-base sm:text-lg font-bold text-white flex items-center justify-between gap-4 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4"
                    >
                      <p>{faq.answer}</p>
                      {faq.category && (
                        <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech uppercase bg-slate-950 text-cyan-400 border border-slate-800">
                          Topic: {faq.category}
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p>No questions found matching "{searchQuery}". Try searching another keyword.</p>
          </div>
        )}

        {/* Bottom Help Card */}
        <div className="glass-card-glow p-6 rounded-2xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-slate-900/80">
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-1">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-300">
              Our academic directors & admissions counselors are available 24/7 to guide you.
            </p>
          </div>

          <a
            href="tel:1800639672"
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 shadow-md shadow-cyan-500/20 shrink-0 flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-slate-950" />
            <span>Call Helpline Free</span>
          </a>
        </div>

      </div>
    </section>
  );
}
