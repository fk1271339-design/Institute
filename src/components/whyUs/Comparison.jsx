import { Check, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const rows = [
  {
    feature: 'Plans',
    traditional: 'One-size syllabus you chase alone',
    nexora: 'A weekly plan built from a baseline diagnostic and reviewed by a mentor',
  },
  {
    feature: 'Practice',
    traditional: 'Monthly paper-based mocks, slow feedback',
    nexora: 'Timed exam-format practise with worked solutions after each set',
  },
  {
    feature: 'Attention',
    traditional: 'Large batches, contact mainly after results',
    nexora: 'Small batches with a named mentor and regular check-ins',
  },
  {
    feature: 'Doubts',
    traditional: 'Waiting queues, days-long delays',
    nexora: 'Doubts routed to subject mentors with worked answers',
  },
  {
    feature: 'Claims',
    traditional: 'Confident rank promises and vague guarantees',
    nexora: 'Honest, demo-labelled information and no invented stats',
  },
];

export default function Comparison() {
  return (
    <section className="py-20 text-white relative" aria-labelledby="compare-heading">
      <div className="container-custom">
        <SectionHeading
          badge="Comparison"
          headlineTop="Generic coaching vs the"
          headlineGradient="Nexora concept"
          support="Phrased as intended features of the Nexora concept, not independently verified superiority over other coaching centres."
        />

        {/* Floating cards without heavy solid boxes */}
        <div className="grid gap-4 max-w-4xl mx-auto mt-10">
          {rows.map((row, i) => (
            <Reveal key={row.feature} delay={i * 0.05}>
              <div className="p-6 transition-all border-b border-white/10 last:border-0 grid md:grid-cols-[120px_1fr_1fr] gap-4 items-center">
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-[#F2B84B]">
                  {row.feature}
                </h3>

                <div className="flex gap-3 items-start text-slate-300 text-sm">
                  <X className="w-4 h-4 mt-0.5 shrink-0 text-red-400" aria-hidden="true" />
                  <span>{row.traditional}</span>
                </div>

                <div className="flex gap-3 items-start text-white text-sm font-bold">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
                  <span>{row.nexora}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}