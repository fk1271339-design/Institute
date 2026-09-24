import { Video, CalendarDays } from 'lucide-react';
import { sampleEvents, eventsConfig } from '../../data/events';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function EventsSection({ onNotify }) {
  return (
    <section className="py-20 text-white relative" aria-labelledby="events-heading">
      <div className="container-custom">
        <h2 id="events-heading" className="sr-only">
          Events and webinars
        </h2>
        <SectionHeading
          badge={eventsConfig.badge}
          headlineTop={eventsConfig.headlineTop}
          headlineGradient={eventsConfig.headlineGradient}
          support={eventsConfig.support}
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
          {sampleEvents.map((ev, i) => (
            <Reveal key={ev.id} delay={i * 0.06}>
              <div className="h-full flex flex-col p-6 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30">
                    <Video className="w-5 h-5 text-teal-300" aria-hidden="true" />
                  </span>
                  <span className="badge border-amber-500/30 bg-amber-500/15 text-[#F2B84B]">Sample content</span>
                </div>
                <h3 className="font-heading text-lg font-extrabold text-white mb-1">{ev.title}</h3>
                <p className="text-sm font-semibold text-teal-300 mb-3">{ev.format}</p>
                <p className="flex items-center gap-1.5 text-xs font-bold text-slate-300 font-mono-tech mb-4">
                  <CalendarDays className="w-3.5 h-3.5 text-[#F2B84B]" aria-hidden="true" />
                  {ev.schedule}
                </p>
                <p className="text-xs text-slate-400 mt-auto pt-3 border-t border-white/10">{ev.note}</p>
                <button
                  type="button"
                  onClick={onNotify}
                  className="btn text-white bg-white/10 hover:bg-white/20 border border-white/20 btn-sm mt-4 self-start cursor-pointer"
                >
                  {eventsConfig.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}