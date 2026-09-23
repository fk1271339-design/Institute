import { Calendar, Clock, Info } from 'lucide-react';
import { batchCards, batchesConfig } from '../../data/batches';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function BatchesSection({ onEnquire }) {
  return (
    <section id="batches" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge={batchesConfig.badge}
          headlineTop={batchesConfig.headlineTop}
          headlineGradient={batchesConfig.headlineGradient}
          support={batchesConfig.support}
        />

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {batchCards.map((batch, i) => (
            <Reveal key={batch.id} delay={i * 0.06}>
              <div className="surface-base surface-hover h-full flex flex-col p-6">
                <span className="badge badge-green self-start mb-4">{batch.tag}</span>
                <h3 className="font-heading text-lg font-extrabold text-[var(--text-primary)] mb-0.5">{batch.title}</h3>
                <p className="text-sm font-semibold text-[var(--accent-green-deep)] mb-4">{batch.focus}</p>
                <p className="flex items-start gap-2 text-sm text-[var(--text-secondary)] mb-3">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0 text-[var(--text-tertiary)]" aria-hidden="true" />
                  {batch.format}
                </p>
                <p className="flex items-start gap-2 text-xs text-[var(--text-tertiary)] mt-auto">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
                  {batch.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <button type="button" onClick={onEnquire} className="btn btn-ghost">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {batchesConfig.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}