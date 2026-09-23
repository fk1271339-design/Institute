import { Quote, PenLine } from 'lucide-react';
import { expectationCards, expectationsConfig } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function ExpectationsSection() {
  return (
    <section className="section-padding" aria-labelledby="expect-heading">
      <div className="container-custom">
        <SectionHeading
          badge={expectationsConfig.badge}
          headlineTop={expectationsConfig.headlineTop}
          headlineGradient={expectationsConfig.headlineGradient}
          support={expectationsConfig.support}
        />

        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {expectationCards.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.06}>
              <figure className="surface-base surface-hover h-full relative p-6 pt-8">
                <Quote className="w-8 h-8 text-[rgba(16,185,129,0.3)] absolute top-5 right-5" aria-hidden="true" />
                <blockquote className="text-sm leading-relaxed text-[var(--text-secondary)] mb-5">
                  {card.text}
                </blockquote>
                <figcaption className="flex items-start gap-2 text-xs font-bold text-[var(--text-tertiary)] pt-4 border-t border-[var(--border-subtle)]">
                  <PenLine className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
                  {card.by}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}