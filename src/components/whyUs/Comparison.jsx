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
    <section className="section-padding bg-[var(--color-paper)] border-b border-[var(--color-border)]" aria-labelledby="compare-heading">
      <div className="container-custom">
        <SectionHeading
          badge="Comparison"
          headlineTop="Generic coaching vs the"
          headlineGradient="Nexora concept"
          support="Phrased as intended features of the Nexora concept, not independently verified superiority over other coaching centres."
        />

        {/* Cards for small screens */}
        <div className="lg:hidden grid gap-4">
          {rows.map((row, i) => (
            <Reveal key={row.feature} delay={i * 0.05}>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
                <h3 className="font-heading text-xs font-extrabold uppercase tracking-wider text-[var(--color-teal)] mb-3">
                  {row.feature}
                </h3>
                <div className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[var(--danger)]/10 text-[var(--danger)] flex items-center justify-center font-bold">
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm text-[var(--color-muted)]">{row.traditional}</p>
                </div>
                <span className="block h-px bg-[var(--color-border)] my-3" aria-hidden="true" />
                <div className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[var(--color-mint)] text-[var(--color-teal)] flex items-center justify-center font-bold border border-[var(--color-mint-strong)]">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-bold text-[var(--color-ink)]">{row.nexora}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Table for larger screens */}
        <Reveal className="hidden lg:block">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <caption className="sr-only">Comparison of generic coaching patterns with the Nexora concept</caption>
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-mint)]/40">
                  <th scope="col" className="p-5 w-1/6 font-heading text-sm font-extrabold text-[var(--color-ink)]">
                    Feature
                  </th>
                  <th scope="col" className="p-5 font-heading text-sm font-extrabold text-[var(--color-muted)]">
                    Generic coaching pattern
                  </th>
                  <th scope="col" className="p-5 font-heading text-sm font-extrabold text-[var(--color-teal)]">
                    The Nexora concept
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-paper)]/50 transition-colors">
                    <th scope="row" className="p-5 font-bold text-sm text-[var(--color-ink)]">
                      {row.feature}
                    </th>
                    <td className="p-5 text-sm text-[var(--color-muted)]">
                      <span className="flex items-start gap-2.5">
                        <X className="w-4 h-4 mt-0.5 shrink-0 text-[var(--danger)]" aria-hidden="true" />
                        <span>{row.traditional}</span>
                      </span>
                    </td>
                    <td className="p-5 text-sm font-bold text-[var(--color-ink)] bg-[var(--color-mint)]/30">
                      <span className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-teal)]" aria-hidden="true" />
                        <span>{row.nexora}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="sr-only" id="compare-heading">
          Comparison section
        </p>
      </div>
    </section>
  );
}