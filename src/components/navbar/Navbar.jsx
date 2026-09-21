import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Menu, X, Search, PhoneCall, ChevronRight, 
  GraduationCap, BookOpen, Trophy, Compass, Users, 
  Calendar, Layers, HelpCircle, ArrowRight
} from 'lucide-react';

export default function Navbar({ onOpenConsultation, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '3D Sphere', href: '#orb-section' },
    { name: 'Courses', href: '#courses' },
    { name: 'Journey', href: '#journey' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Results', href: '#results' },
    { name: 'Test Series', href: '#test-series' },
    { name: 'Batches', href: '#batches' },
    { name: 'Scholarship', href: '#scholarship' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  NEXORA
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono-tech font-bold uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded">
                  PRO
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono-tech uppercase">
                ACADEMY OF EXCELLENCE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/40 border border-slate-800/60 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-slate-300 hover:text-cyan-400 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              title="Search Courses & Content (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href="#scholarship"
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-full hover:bg-cyan-900/40 transition-all duration-200"
            >
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>NSAT 100% Scholarship</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300"
            >
              <span>Book Counseling</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>

          {/* Mobile Menu & Search Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl text-slate-300 bg-slate-900/80 border border-slate-800"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 bg-slate-900/80 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl px-6 py-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2 mb-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-900/60 rounded-xl border border-slate-800/80 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-xl shadow-lg shadow-cyan-500/20"
              >
                Book Free 1-on-1 Counseling
              </button>
              
              <a
                href="#scholarship"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-semibold text-cyan-400 bg-slate-900 rounded-xl border border-cyan-500/30 flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Take Scholarship Exam (NSAT)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
