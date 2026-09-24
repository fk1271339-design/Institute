import { ArrowRight, PlayCircle, Sparkles, CheckCircle2, Info } from 'lucide-react';
import { heroConfig, demoNotice } from '../../data/site';
import Reveal from '../ui/Reveal';

function HeroMotif() {
  return (
    <div className="relative w-full max-w-md mx-auto" aria-hidden="true">
      {/* Glow aura */}
      <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(22,163,148,0.3),transparent_70%)] blur-2xl" />

      {/* Main card panel */}
      <div className="relative bg-[#082538]/95 backdrop-blur-md border border-[#16A394]/40 rounded-3xl p-6 shadow-2xl overflow-hidden">
        {/* Decorative ambient grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#16A394] animate-pulse" />
            <span className="text-xs font-mono-tech text-teal-200 uppercase tracking-wider font-bold">Nexora Learning Engine</span>
          </div>
          <span className="text-xs font-mono-tech text-[#C1D2D7]">JEE / NEET Prep</span>
        </div>

        {/* Interactive process cards */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { step: '01', title: 'Concept Mastery', desc: 'Syllabus alignment', tag: 'Core', bg: 'bg-[#087F78]/25 border-[#087F78]/50' },
            { step: '02', title: 'Adaptive Practice', desc: 'Targeted drills', tag: 'Practice', bg: 'bg-[#16A394]/25 border-[#16A394]/50' },
            { step: '03', title: 'Performance Analytics', desc: 'Weak area diagnostics', tag: 'Insights', bg: 'bg-[#F2B84B]/20 border-[#F2B84B]/50' },
            { step: '04', title: 'Exam Readiness', desc: 'Full length mocks', tag: 'Simulate', bg: 'bg-teal-500/25 border-teal-400/50' },
          ].map((c) => (
            <div
              key={c.step}
              className={`p-3.5 rounded-xl border ${c.bg} transition-transform hover:-translate-y-0.5`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono-tech text-teal-300 font-extrabold">{c.step}</span>
                <span className="text-[9px] font-mono-tech px-1.5 py-0.5 rounded bg-white/10 text-white font-semibold">{c.tag}</span>
              </div>
              <h4 className="text-xs font-extrabold text-white leading-tight">{c.title}</h4>
              <p className="text-[10px] text-[#C1D2D7] mt-0.5">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom indicator strip */}
        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#C1D2D7]">
          <span className="flex items-center gap-1.5 text-teal-300 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#16A394]" /> Structured Curriculum
          </span>
          <span className="text-[#F2B84B] text-[11px] font-mono-tech font-bold">IIT & AIIMS Aligned</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const jumpTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="top" className="relative overflow-hidden bg-[#082538] text-[var(--color-on-dark)] pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Subtle overlay grid & glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(22,163,148,0.22),transparent_70%)] blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider bg-[#087F78]/40 border border-[#16A394]/60 text-teal-200 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F2B84B]" aria-hidden="true" />
            {heroConfig.badge.label} · {heroConfig.badge.sub}
          </span>

          <Reveal>
            <h1 className="headline-xl text-white text-balance leading-tight">
              {heroConfig.headlineTop}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] via-teal-200 to-[#F2B84B]">
                {heroConfig.headlineGradient}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="lead mt-6 max-w-xl text-slate-100 text-pretty font-medium leading-relaxed">{heroConfig.support}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => jumpTo('#programs')} className="btn btn-primary bg-gradient-to-r from-[#087F78] to-[#16A394] text-white hover:shadow-teal-500/25">
                {heroConfig.primaryCta}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => jumpTo('#practice')} className="btn text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm">
                <PlayCircle className="w-4 h-4 text-[#F2B84B]" aria-hidden="true" />
                {heroConfig.secondaryCta}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-7 inline-flex items-start gap-2.5 p-3.5 rounded-xl border border-teal-500/25 bg-[#10384A]/60 backdrop-blur-sm max-w-xl">
              <Info className="w-4 h-4 text-[#F2B84B] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-[#C1D2D7]">
                {demoNotice}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12 lg:mt-0">
          <HeroMotif />
          <p className="sr-only">Illustration of the Nexora learning engine approach.</p>
        </Reveal>
      </div>

      {/* Smooth bottom connector transition curve into ProofPoints (pale mint surface) */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-[#E8F4F1]/30 pointer-events-none" aria-hidden="true" />
    </section>
  );
}