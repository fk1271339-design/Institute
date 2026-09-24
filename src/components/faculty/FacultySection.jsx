import { GraduationCap, UserRound, DoorOpen } from 'lucide-react';
import { facultyPlaceholders, environmentPoints, facultyConfig } from '../../data/faculty';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function FacultySection() {
  return (
    <section className="py-20 text-white relative" aria-labelledby="faculty-heading">
      <div className="container-custom">
        <SectionHeading
          badge={facultyConfig.badge}
          headlineTop={facultyConfig.headlineTop}
          headlineGradient={facultyConfig.headlineGradient}
          support={facultyConfig.support}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 mt-10">
          {facultyPlaceholders.map((fp, i) => (
            <Reveal key={fp.id} delay={(i % 3) * 0.06}>
              <div className="h-full p-6 flex gap-4 items-start transition-all hover:-translate-y-1">
                <span className="shrink-0 w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
                  <GraduationCap className="w-6 h-6 text-teal-300" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-white">{fp.role}</h3>
                  <p className="text-sm font-bold text-[#F2B84B] mt-0.5">{fp.focus}</p>
                  <p className="mt-3 text-xs text-slate-300 flex items-start gap-1.5 leading-relaxed font-medium">
                    <UserRound className="w-3.5 h-3.5 mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
                    <span>{fp.note}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-6 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-extrabold text-white mb-6 flex items-center gap-2">
              <DoorOpen className="w-5 h-5 text-teal-300" aria-hidden="true" />
              Learning Environment
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {environmentPoints.map((point) => (
                <div key={point.title} className="p-5">
                  <h4 className="font-heading text-base font-bold text-white mb-1">{point.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}