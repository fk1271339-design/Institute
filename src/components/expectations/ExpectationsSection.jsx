import { Quote, PenLine } from 'lucide-react';
import { expectationCards, expectationsConfig } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function ExpectationsSection() {
  return (
    <section className="py-20 text-white relative" aria-labelledby="expect-heading">
      <div className="container-custom">
        <SectionHeading
          badge={expectationsConfig.badge}
          headlineTop={expectationsConfig.headlineTop}
          headlineGradient={expectationsConfig.headlineGradient}
          support={expectationsConfig.support}
        />

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
          {expectationCards.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.06}>
              <figure className="h-full relative p-6 transition-all flex flex-col justify-between">
                <Quote className="w-8 h-8 text-teal-400/20 absolute top-5 right-5" aria-hidden="true" />
                <blockquote className="text-base leading-relaxed text-slate-200 mb-6 relative z-10 font-medium italic">
                  “{card.text}”
                </blockquote>
                <figcaption className="flex items-center gap-2 text-xs font-bold text-[#F2B84B] pt-4 border-t border-white/10">
                  <PenLine className="w-3.5 h-3.5 shrink-0 text-teal-300" aria-hidden="true" />
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