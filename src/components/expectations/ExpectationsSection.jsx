import { Quote, PenLine } from 'lucide-react';
import { expectationCards, expectationsConfig } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function ExpectationsSection() {
  return (
    <section className="section-padding bg-[var(--color-mint)] border-b border-[var(--color-border)]" aria-labelledby="expect-heading">
      <div className="container-custom">
        <SectionHeading
          badge={expectationsConfig.badge}
          headlineTop={expectationsConfig.headlineTop}
          headlineGradient={expectationsConfig.headlineGradient}
          support={expectationsConfig.support}
        />

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {expectationCards.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.06}>
              <figure className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full relative p-6 pt-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between">
                <Quote className="w-8 h-8 text-[var(--color-teal)]/20 absolute top-5 right-5" aria-hidden="true" />
                <blockquote className="text-sm leading-relaxed text-[var(--color-text)] mb-6 relative z-10">
                  “{card.text}”
                </blockquote>
                <figcaption className="flex items-center gap-2 text-xs font-bold text-[var(--color-ink)] pt-4 border-t border-[var(--color-border)]">
                  <PenLine className="w-3.5 h-3.5 shrink-0 text-[var(--color-teal)]" aria-hidden="true" />
                  <span>{card.by}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}