import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Award, Star, CheckCircle, TrendingUp, 
  Calculator, Sparkles, ArrowRight, Building2, Quote, CheckCircle2, Info 
} from 'lucide-react';
import { resultsData, statsOverview } from '../../data/mockData';

export default function ResultsDashboard() {
  const [examType, setExamType] = useState('JEE');
  const [score, setScore] = useState(290);

  // Dynamic rank prediction logic
  const maxScore = examType === 'JEE' ? 360 : 720;
  const normalizedScore = Math.min(score, maxScore);

  let predictedRank = "AIR 1 - 50";
  let eligibleColleges = "IIT Bombay, IIT Delhi, IIT Madras (Computer Science)";
  
  if (examType === 'JEE') {
    if (normalizedScore > 320) {
      predictedRank = "AIR 1 - 50";
      eligibleColleges = "IIT Bombay / IIT Delhi (CS / Electrical)";
    } else if (normalizedScore > 280) {
      predictedRank = "AIR 51 - 250";
      eligibleColleges = "IIT Kharagpur / IIT Kanpur (CS / ECE)";
    } else if (normalizedScore > 240) {
      predictedRank = "AIR 251 - 1,200";
      eligibleColleges = "IIT Roorkee / IIT Guwahati / IIT Hyderabad";
    } else if (normalizedScore > 180) {
      predictedRank = "AIR 1,201 - 5,000";
      eligibleColleges = "Top Tier 1 IITs & NIT Trichy / Surathkal";
    } else {
      predictedRank = "AIR 5,000 - 15,000";
      eligibleColleges = "Established IITs & Top NITs";
    }
  } else {
    if (normalizedScore > 700) {
      predictedRank = "AIR 1 - 30";
      eligibleColleges = "AIIMS New Delhi / JIPMER Puducherry";
    } else if (normalizedScore > 670) {
      predictedRank = "AIR 31 - 300";
      eligibleColleges = "Maulana Azad Medical College / VMMC Delhi";
    } else if (normalizedScore > 640) {
      predictedRank = "AIR 301 - 1,500";
      eligibleColleges = "Top State Government Medical Colleges";
    } else {
      predictedRank = "AIR 1,501 - 8,000";
      eligibleColleges = "Government Medical Colleges Nationwide";
    }
  }

  return (
    <section id="results" className="py-24 relative bg-slate-950/95 border-t border-slate-800/80 bg-dots-pattern overflow-hidden">
      
      {/* Tamed Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase tracking-widest mb-4 shadow-sm">
            <Trophy className="w-3.5 h-3.5" />
            <span>Proven Record of Excellence</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hall of Fame & <span className="text-gradient-gold">AIR Toppers</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Our results speak louder than words. Year after year, Nexora students dominate the top 100 ranks in JEE Advanced and NEET.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statsOverview.map((st, i) => (
            <div key={i} className="glass-card-glow p-6 rounded-3xl border border-slate-800 text-center relative overflow-hidden group bg-slate-950/80">
              <span className="text-xs text-slate-400 font-mono-tech uppercase block mb-1">
                {st.label}
              </span>
              <span className="font-heading text-3xl sm:text-5xl font-extrabold text-gradient-gold inline-block">
                {st.prefix}{st.value.toLocaleString()}{st.suffix}
              </span>
            </div>
          ))}
        </div>

        {/* Topper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {resultsData.map((topper, idx) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card-glow p-5 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl bg-slate-950/90"
            >
              <div>
                <div className="relative mb-4 rounded-2xl overflow-hidden h-52 bg-slate-900 border border-slate-800">
                  <img 
                    src={topper.image} 
                    alt={topper.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Metallic Rank Badge - Gold restricted strictly for ranks */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-slate-950 font-heading font-black text-xs sm:text-sm px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-slate-950" />
                    <span>{topper.rank}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono-tech text-amber-300 block uppercase">
                      {topper.exam}
                    </span>
                    <span className="font-heading text-base font-bold">
                      Score: {topper.score}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {topper.name}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold mb-3">
                  {topper.branch}
                </p>

                <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                  "{topper.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono-tech text-slate-400">
                Enrolled: {topper.courseEnrolled}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Rank Predictor Tool */}
        <div className="glass-card-glow p-6 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden bg-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-tech uppercase mb-4">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive AI Calculator</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-3">
                Predict Your <span className="text-gradient-gold">All India Rank & College</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Drag the score slider to calculate your estimated AIR range based on Nexora's historical dataset of 10+ years of national exam scores.
              </p>

              {/* Exam Switcher */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => {
                    setExamType('JEE');
                    setScore(290);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    examType === 'JEE'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  IIT-JEE Advanced (Max 360)
                </button>

                <button
                  onClick={() => {
                    setExamType('NEET');
                    setScore(680);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    examType === 'NEET'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  NEET UG (Max 720)
                </button>
              </div>

              {/* Slider Input */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-xs font-mono-tech text-slate-300">
                  <span>TARGET SCORE SLIDER</span>
                  <span className="font-bold text-amber-400 text-base">{normalizedScore} / {maxScore}</span>
                </div>
                <input 
                  type="range"
                  min={examType === 'JEE' ? 100 : 400}
                  max={maxScore}
                  value={score}
                  onChange={(e) => setScore(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Demo Disclaimer */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-slate-400 italic">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Illustrative estimate — actual rank depends on examination performance and official results.</span>
              </div>
            </div>

            {/* Prediction Output Card */}
            <div className="lg:col-span-6 bg-slate-900/95 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest block mb-2">
                ESTIMATED RANK PREDICTION
              </span>
              <div className="font-heading text-3xl sm:text-5xl font-black text-amber-400 mb-4 drop-shadow-sm">
                {predictedRank}
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Probable Top Colleges:</span>
                    <span>{eligibleColleges}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Recommended Nexora Program:</span>
                    <span>{examType === 'JEE' ? 'Zenith Super-30 Batch' : 'Apex Medical Fast-Track'}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
