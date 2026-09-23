import { GraduationCap, UserRound, DoorOpen } from 'lucide-react';
import { facultyPlaceholders, environmentPoints, facultyConfig } from '../../data/faculty';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function FacultySection() {
  return (
    <section className="section-padding" aria-labelledby="faculty-heading">
      <div className="container-custom">
        <SectionHeading
          badge={facultyConfig.badge}
          headlineTop={facultyConfig.headlineTop}
          headlineGradient={facultyConfig.headlineGradient}
          support={facultyConfig.support}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {facultyPlaceholders.map((fp, i) => (
            <Reveal key={fp.id} delay={(i % 3) * 0.06}>
              <div className="surface-base surface-hover h-full p-6 flex gap-4 items-start">
                <span className="shrink-0 w-12 h-12 rounded-2xl bg-[#0b2430] text-white flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-extrabold text-[var(--text-primary)]">{fp.role}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-0.5">{fp.focus}</p>
                  <p className="mt-3 text-xs text-[var(--text-tertiary)] flex items-start gap-1.5">
                    <UserRound className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
                    {fp.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="surface-base p-6 sm:p-8">
            <h3 className="font-heading text-lg font-extrabold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <DoorOpen className="w-5 h-5 text-[var(--accent-green-deep)]" aria-hidden="true" />
              Learning environment
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {environmentPoints.map((point) => (
                <div key={point.title} className="p-4 rounded-xl bg-[var(--surface-muted)] border border-[var(--border-subtle)]">
                  <h4 className="font-heading text-sm font-bold text-[var(--text-primary)] mb-1">{point.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}