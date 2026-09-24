import { useMemo, useState } from 'react';
import { ArrowRight, Hourglass, UserRound } from 'lucide-react';
import { programsData, programCategories, programsConfig } from '../../data/courses';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Dialog from '../ui/Dialog';

function ProgramCard({ program, onDetails }) {
  return (
    <div className="h-full flex flex-col justify-between p-6 transition-all hover:-translate-y-1">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="badge border-teal-500/30 bg-teal-500/15 text-teal-300">{program.tag}</span>
        </div>
        <h3 className="font-heading text-xl font-extrabold text-white mb-1">{program.title}</h3>
        <p className="text-sm font-bold text-[#F2B84B] mb-3">{program.focus}</p>
        <p className="text-sm leading-relaxed text-slate-300 mb-5">{program.summary}</p>
      </div>

      <div>
        <ul className="space-y-2 mb-6 pt-4 border-t border-white/10">
          {program.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2.5 text-xs font-medium text-slate-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A394] shrink-0" aria-hidden="true" />
              <span>{o}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-2">
          <div className="flex flex-col gap-1 text-xs text-slate-300 font-mono-tech">
            <span className="flex items-center gap-1.5">
              <UserRound className="w-3.5 h-3.5 text-teal-300" aria-hidden="true" /> {program.level}
            </span>
            <span className="flex items-center gap-1.5">
              <Hourglass className="w-3.5 h-3.5 text-teal-300" aria-hidden="true" /> {program.duration}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onDetails(program)}
            className="btn text-white bg-white/10 hover:bg-white/20 border border-white/20 btn-sm shrink-0 cursor-pointer"
          >
            {programsConfig.detailsCta}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
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
    <section id="programs" className="py-20 text-white relative">
      <div className="container-custom">
        <SectionHeading
          badge={programsConfig.badge}
          headlineTop={programsConfig.headlineTop}
          headlineGradient={programsConfig.headlineGradient}
          support={programsConfig.support}
        />

        <div role="group" aria-label="Filter programs" className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {programCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#087F78] text-white border-teal-400 shadow-lg shadow-teal-500/20'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((program, i) => (
            <Reveal key={program.id} delay={(i % 4) * 0.05}>
              <ProgramCard program={program} onDetails={openDetails} />
            </Reveal>
          ))}
        </div>

        {selected && (
          <Dialog open onClose={() => setSelected(null)} labelledBy="program-title" title={selected.title}>
            <p className="text-sm text-slate-200 mb-4 leading-relaxed">{selected.summary}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="badge border-teal-500/40 bg-teal-500/20 text-teal-300">{selected.tag}</span>
              <span className="badge border-white/20 bg-white/10 text-white">
                <UserRound className="w-3.5 h-3.5 text-teal-300" aria-hidden="true" /> {selected.level}
              </span>
              <span className="badge border-white/20 bg-white/10 text-white">
                <Hourglass className="w-3.5 h-3.5 text-teal-300" aria-hidden="true" /> {selected.duration}
              </span>
            </div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-teal-300 mb-3">
              Intended outcomes
            </h3>
            <ul className="space-y-2.5 mb-6">
              {selected.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A394] shrink-0" aria-hidden="true" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-white/10">
              Illustrative demo content — fees, schedules and seats are confirmed by admissions before launch.
            </p>
          </Dialog>
        )}
      </div>
    </section>
  );
}