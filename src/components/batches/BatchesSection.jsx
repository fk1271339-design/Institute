import { Calendar, Clock, Info } from 'lucide-react';
import { batchCards, batchesConfig } from '../../data/batches';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function BatchesSection({ onEnquire }) {
  return (
    <section id="batches" className="py-20 text-white relative">
      <div className="container-custom">
        <SectionHeading
          badge={batchesConfig.badge}
          headlineTop={batchesConfig.headlineTop}
          headlineGradient={batchesConfig.headlineGradient}
          support={batchesConfig.support}
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
          {batchCards.map((batch, i) => (
            <Reveal key={batch.id} delay={i * 0.06}>
              <div className="h-full flex flex-col p-6 transition-all hover:-translate-y-1">
                <span className="badge border-teal-500/30 bg-teal-500/15 text-teal-300 self-start mb-4">{batch.tag}</span>
                <h3 className="font-heading text-xl font-extrabold text-white mb-1">{batch.title}</h3>
                <p className="text-sm font-bold text-[#F2B84B] mb-4">{batch.focus}</p>
                <p className="flex items-start gap-2 text-sm text-slate-300 mb-4">
                  <Calendar className="w-4 h-4 mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
                  <span>{batch.format}</span>
                </p>
                <p className="flex items-start gap-2 text-xs text-slate-400 mt-auto pt-4 border-t border-white/10">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
                  <span>{batch.note}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <button
            type="button"
            onClick={onEnquire}
            className="btn text-white bg-white/10 hover:bg-white/20 border border-white/20 px-7 py-3 text-sm cursor-pointer"
          >
            <Clock className="w-4 h-4 text-[#F2B84B]" aria-hidden="true" />
            {batchesConfig.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}