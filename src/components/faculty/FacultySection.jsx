import { GraduationCap, UserRound, DoorOpen } from 'lucide-react';
import { facultyPlaceholders, environmentPoints, facultyConfig } from '../../data/faculty';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function FacultySection() {
  return (
    <section className="section-padding bg-[var(--color-mint)] border-b border-[var(--color-border)]" aria-labelledby="faculty-heading">
      <div className="container-custom">
        <SectionHeading
          badge={facultyConfig.badge}
          headlineTop={facultyConfig.headlineTop}
          headlineGradient={facultyConfig.headlineGradient}
          support={facultyConfig.support}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {facultyPlaceholders.map((fp, i) => (
            <Reveal key={fp.id} delay={(i % 3) * 0.06}>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full p-6 flex gap-4 items-start shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <span className="shrink-0 w-12 h-12 rounded-2xl bg-[var(--color-navy)] text-white flex items-center justify-center shadow-md">
                  <GraduationCap className="w-5 h-5 text-teal-300" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-extrabold text-[var(--color-ink)]">{fp.role}</h3>
                  <p className="text-sm font-bold text-[var(--color-teal)] mt-0.5">{fp.focus}</p>
                  <p className="mt-3 text-xs text-[var(--color-muted)] flex items-start gap-1.5 leading-relaxed">
                    <UserRound className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-teal)]" aria-hidden="true" />
                    <span>{fp.note}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-heading text-lg font-extrabold text-[var(--color-ink)] mb-4 flex items-center gap-2">
              <DoorOpen className="w-5 h-5 text-[var(--color-teal)]" aria-hidden="true" />
              Learning environment
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {environmentPoints.map((point) => (
                <div key={point.title} className="p-4 rounded-xl bg-[var(--color-mint)]/60 border border-[var(--color-border)]">
                  <h4 className="font-heading text-sm font-bold text-[var(--color-ink)] mb-1">{point.title}</h4>
                  <p className="text-sm text-[var(--color-text)]">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}