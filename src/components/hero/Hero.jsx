import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { heroConfig, demoNotice } from '../../data/site';
import Reveal from '../ui/Reveal';

function HeroMotif() {
  return (
    <div className="relative w-full max-w-md mx-auto" aria-hidden="true">
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_65%)]" />
      <div className="absolute inset-0 -z-0 bg-grid-pattern rounded-[2rem]" />

      <div className="relative grid grid-cols-3 gap-3">
        {[
          { label: 'Learn', order: '01', tint: 'bg-[#0b2430]' },
          { label: 'Practice', order: '02', tint: 'bg-[var(--accent-green-deep)]' },
          { label: 'Review', order: '03', tint: 'bg-[var(--accent-green)]' },
          { label: 'Improve', order: '04', tint: 'bg-[var(--accent-mint)]' },
          { label: 'Repeat', order: '05', tint: 'bg-[#0b2430]' },
          { label: 'Ready', order: '06', tint: 'bg-[var(--accent-green-deep)]' },
        ].map((c) => (
          <span
            key={c.order}
            className={`aspect-square rounded-2xl ${c.tint} text-white flex flex-col items-center justify-center shadow-lg`}
          >
            <span className="text-[10px] font-mono-tech opacity-70">{c.order}</span>
            <span className="text-sm md:text-base font-bold tracking-tight">{c.label}</span>
          </span>
        ))}
      </div>

      <svg className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] pointer-events-none opacity-70" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="170" stroke="rgba(16,185,129,0.18)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="120" stroke="rgba(16,185,129,0.12)" strokeWidth="1.5" />
        <path d="M200 30 v340 M30 200 h340" stroke="rgba(16,185,129,0.1)" strokeWidth="1" />
        <circle cx="200" cy="30" r="4" fill="var(--accent-green)" />
        <circle cx="370" cy="200" r="4" fill="var(--accent-mint)" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const jumpTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />
      <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12),transparent_62%)]" aria-hidden="true" />

      <div className="container-custom relative pt-12 pb-16 md:pt-20 md:pb-24 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
        <div>
          <span className="badge badge-green mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            {heroConfig.badge.label} · {heroConfig.badge.sub}
          </span>

          <Reveal>
            <h1 className="headline-xl text-[var(--text-primary)] text-balance">
              {heroConfig.headlineTop}{' '}
              <span className="text-gradient-green">{heroConfig.headlineGradient}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="lead mt-6 max-w-xl text-pretty">{heroConfig.support}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => jumpTo('#programs')} className="btn btn-primary">
                {heroConfig.primaryCta}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => jumpTo('#practice')} className="btn btn-ghost">
                <PlayCircle className="w-4 h-4" aria-hidden="true" />
                {heroConfig.secondaryCta}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-[var(--text-tertiary)]">
              {demoNotice}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 lg:mt-0">
          <HeroMotif />
          <p className="sr-only">Illustration of the Learn, Practice, Review, Improve loop.</p>
        </Reveal>
      </div>
    </section>
  );
}