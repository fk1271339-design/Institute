import React from 'react';
import { 
  Sparkles, ArrowUp, PhoneCall, Mail, MapPin, 
  ShieldCheck, Globe, Video, Share2, MessageCircle, Send 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-extrabold text-white">NEXORA ACADEMY</span>
                <span className="text-[10px] tracking-widest text-slate-400 font-mono-tech uppercase">INSTITUTE OF COMPETITIVE EXCELLENCE</span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              India's premier futuristic EdTech institute for IIT-JEE, NEET-UG, and International Olympiads. Powered by Senior IITians, 3D interactive learning, and 24/7 AI diagnostic portals.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[Video, Share2, MessageCircle, Send, Globe].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1: Programs */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Academic Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#courses" className="hover:text-cyan-400 transition-colors">IIT-JEE Zenith Super-30</a></li>
              <li><a href="#courses" className="hover:text-cyan-400 transition-colors">NEET-UG Apex Medical</a></li>
              <li><a href="#courses" className="hover:text-cyan-400 transition-colors">International Olympiads</a></li>
              <li><a href="#courses" className="hover:text-cyan-400 transition-colors">Nexora STEM & AI Pioneers</a></li>
              <li><a href="#courses" className="hover:text-cyan-400 transition-colors">Junior Foundation (Class 8-10)</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2: Tech & Resources */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Tech & Student Portal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#test-series" className="hover:text-cyan-400 transition-colors">NTA Computer Exam Simulator</a></li>
              <li><a href="#orb-section" className="hover:text-cyan-400 transition-colors">3D Orb Mastery Engine</a></li>
              <li><a href="#results" className="hover:text-cyan-400 transition-colors">Predictive AIR Rank Calculator</a></li>
              <li><a href="#scholarship" className="hover:text-cyan-400 transition-colors">NSAT Scholarship Test Portal</a></li>
              <li><a href="#test-series" className="hover:text-cyan-400 transition-colors">24/7 AI Instant Doubt Engine</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Apex Campus & Helpline
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>Nexora Apex Cyber Tower, Knowledge Corridor, Tech City - 110001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Toll Free: 1800-NEXORA-EDU (+91 1800 639672)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>admissions@nexoraacademy.edu.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-400">
          <p>© {new Date().getFullYear()} Nexora Academy of Competitive Excellence. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
