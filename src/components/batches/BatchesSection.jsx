import { Calendar, Clock, Info } from 'lucide-react';
import { batchCards, batchesConfig } from '../../data/batches';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function BatchesSection({ onEnquire }) {
  return (
    <section id="batches" className="section-padding bg-[var(--color-paper)] border-b border-[var(--color-border)]">
      <div className="container-custom">
        <SectionHeading
          badge={batchesConfig.badge}
          headlineTop={batchesConfig.headlineTop}
          headlineGradient={batchesConfig.headlineGradient}
          support={batchesConfig.support}
        />

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {batchCards.map((batch, i) => (
            <Reveal key={batch.id} delay={i * 0.06}>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full flex flex-col p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <span className="badge badge-green self-start mb-4">{batch.tag}</span>
                <h3 className="font-heading text-lg font-extrabold text-[var(--color-ink)] mb-1">{batch.title}</h3>
                <p className="text-sm font-bold text-[var(--color-teal)] mb-4">{batch.focus}</p>
                <p className="flex items-start gap-2 text-sm text-[var(--color-text)] mb-4">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-teal)]" aria-hidden="true" />
                  <span>{batch.format}</span>
                </p>
                <p className="flex items-start gap-2 text-xs text-[var(--color-muted)] mt-auto pt-4 border-t border-[var(--color-border)]">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-teal)]" aria-hidden="true" />
                  <span>{batch.note}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <button type="button" onClick={onEnquire} className="btn btn-ghost border-[var(--color-border)] hover:border-[var(--color-teal)]">
            <Clock className="w-4 h-4 text-[var(--color-teal)]" aria-hidden="true" />
            {batchesConfig.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}