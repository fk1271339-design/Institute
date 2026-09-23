import { useMemo, useState } from 'react';
import { ArrowRight, Hourglass, UserRound } from 'lucide-react';
import { programsData, programCategories, programsConfig } from '../../data/courses';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Dialog from '../ui/Dialog';

function ProgramCard({ program, onDetails }) {
  return (
    <div className="surface-base surface-hover surface-accent h-full flex flex-col p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="badge badge-green">{program.tag}</span>
      </div>
      <h3 className="font-heading text-xl font-extrabold text-[var(--text-primary)] mb-1">{program.title}</h3>
      <p className="text-sm font-semibold text-[var(--accent-green-deep)] mb-3">{program.focus}</p>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-5">{program.summary}</p>

      <ul className="mt-auto space-y-2 mb-5">
        {program.outcomes.map((o) => (
          <li key={o} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] shrink-0" aria-hidden="true" />
            {o}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
        <div className="flex flex-col gap-1 text-xs text-[var(--text-tertiary)]">
          <span className="flex items-center gap-1.5">
            <UserRound className="w-3.5 h-3.5" aria-hidden="true" /> {program.level}
          </span>
          <span className="flex items-center gap-1.5">
            <Hourglass className="w-3.5 h-3.5" aria-hidden="true" /> {program.duration}
          </span>
        </div>
        <button type="button" onClick={() => onDetails(program)} className="btn btn-ghost btn-sm">
          {programsConfig.detailsCta}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function ProgramExplorer() {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (category === 'All' ? programsData : programsData.filter((p) => p.category === category)),
    [category]
  );

  const openDetails = (p) => setSelected(p);

  return (
    <section id="programs" className="section-padding bg-[var(--surface)] border-y border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeading
          badge={programsConfig.badge}
          headlineTop={programsConfig.headlineTop}
          headlineGradient={programsConfig.headlineGradient}
          support={programsConfig.support}
        />

        <div role="group" aria-label="Filter programs" className="flex flex-wrap justify-center gap-2 mb-10">
          {programCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors cursor-pointer ${
                  active
                    ? 'bg-[var(--accent-green-deep)] text-white border-[var(--accent-green-deep)]'
                    : 'bg-[var(--background)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--border-accent)] hover:text-[var(--accent-green-deep)]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((program, i) => (
            <Reveal key={program.id} delay={(i % 4) * 0.05}>
              <ProgramCard program={program} onDetails={openDetails} />
            </Reveal>
          ))}
        </div>

        {selected && (
          <Dialog open onClose={() => setSelected(null)} labelledBy="program-title" title={selected.title}>
            <p className="text-sm text-[var(--text-secondary)] mb-3">{selected.summary}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="badge badge-green">{selected.tag}</span>
              <span className="badge">
                <UserRound className="w-3 h-3" aria-hidden="true" /> {selected.level}
              </span>
              <span className="badge">
                <Hourglass className="w-3 h-3" aria-hidden="true" /> {selected.duration}
              </span>
            </div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
              Intended outcomes
            </h3>
            <ul className="space-y-2 mb-6">
              {selected.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] shrink-0" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
              Illustrative demo content — fees, schedules and seats are confirmed by admissions before launch.
            </p>
          </Dialog>
        )}
      </div>
    </section>
  );
}