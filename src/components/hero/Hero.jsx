import { ArrowRight, PlayCircle, Sparkles, CheckCircle2, Info, Film } from 'lucide-react';
import { heroConfig, demoNotice } from '../../data/site';
import Reveal from '../ui/Reveal';

export default function Hero({ currentFrame }) {
  const jumpTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="top" className="relative min-h-[90vh] flex flex-col justify-center text-white pt-24 pb-20 overflow-hidden">
      <div className="container-custom relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Floating Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono-tech font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-teal-500/30 text-teal-200 mb-8 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#F2B84B]" aria-hidden="true" />
            <span>{heroConfig.badge.label} · {heroConfig.badge.sub}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A394] ml-1 animate-ping" />
          </div>
        </Reveal>

        {/* Dynamic Frame Counter Highlight in Hero */}
        <Reveal delay={0.04}>
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#087F78]/30 backdrop-blur-md text-[11px] font-mono-tech text-teal-300">
            <Film className="w-3.5 h-3.5 text-[#F2B84B]" />
            <span>INTERACTIVE SCROLLETYLLING · FRAME {String((currentFrame || 0) + 1).padStart(2, '0')} / 39</span>
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={0.08}>
          <h1 className="headline-xl text-white text-balance leading-tight max-w-4xl font-extrabold tracking-tight drop-shadow-lg">
            {heroConfig.headlineTop}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A394] via-teal-200 to-[#F2B84B]">
              {heroConfig.headlineGradient}
            </span>
          </h1>
        </Reveal>

        {/* Subtitle / Support Text */}
        <Reveal delay={0.16}>
          <p className="lead mt-6 max-w-2xl text-slate-200 text-pretty font-medium leading-relaxed drop-shadow">
            {heroConfig.support}
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => jumpTo('#programs')}
              className="btn btn-primary bg-gradient-to-r from-[#087F78] to-[#16A394] text-white hover:shadow-teal-500/30 px-8 py-3.5 text-base cursor-pointer"
            >
              {heroConfig.primaryCta}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => jumpTo('#practice')}
              className="btn text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-7 py-3.5 text-base cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 text-[#F2B84B]" aria-hidden="true" />
              {heroConfig.secondaryCta}
            </button>
          </div>
        </Reveal>

        {/* Key Highlights Row */}
        <Reveal delay={0.30}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-slate-200 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A394]" /> Structured JEE & NEET Prep
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F2B84B]" /> IIT & AIIMS Faculty Led
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A394]" /> 39-Frame Interactive Motion Story
            </span>
          </div>
        </Reveal>

        {/* Notice Bar */}
        <Reveal delay={0.34}>
          <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-teal-500/20 bg-black/40 backdrop-blur-md max-w-xl text-xs text-slate-300">
            <Info className="w-4 h-4 text-[#F2B84B] shrink-0" aria-hidden="true" />
            <p className="leading-relaxed">{demoNotice}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}