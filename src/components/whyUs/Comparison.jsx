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
    <section className="section-padding bg-[var(--surface)] border-y border-[var(--border-subtle)]" aria-labelledby="compare-heading">
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
              <div className="surface-base p-5">
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-wide text-[var(--accent-green-deep)] mb-3">
                  {row.feature}
                </h3>
                <div className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[var(--danger)]/10 text-[var(--danger)] flex items-center justify-center">
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm text-[var(--text-secondary)]">{row.traditional}</p>
                </div>
                <span className="block h-px bg-[var(--border)] my-3" aria-hidden="true" />
                <div className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[rgba(16,185,129,0.12)] text-[var(--accent-green-deep)] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{row.nexora}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Table for larger screens */}
        <Reveal className="hidden lg:block">
          <div className="surface-base overflow-hidden">
            <table className="w-full text-left">
              <caption className="sr-only">Comparison of generic coaching patterns with the Nexora concept</caption>
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th scope="col" className="p-5 w-1/6 font-heading text-sm font-extrabold text-[var(--text-primary)]">
                    Feature
                  </th>
                  <th scope="col" className="p-5 font-heading text-sm font-extrabold text-[var(--text-secondary)]">
                    Generic coaching pattern
                  </th>
                  <th scope="col" className="p-5 font-heading text-sm font-extrabold text-[var(--accent-green-deep)]">
                    The Nexora concept
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-[var(--border-subtle)] last:border-0">
                    <th scope="row" className="p-5 font-semibold text-sm text-[var(--text-primary)]">
                      {row.feature}
                    </th>
                    <td className="p-5 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-start gap-2">
                        <X className="w-4 h-4 mt-0.5 shrink-0 text-[var(--danger)]" aria-hidden="true" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="p-5 text-sm font-medium text-[var(--text-primary)] bg-[rgba(16,185,129,0.05)]">
                      <span className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--accent-green-deep)]" aria-hidden="true" />
                        {row.nexora}
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