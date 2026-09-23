import { Video, CalendarDays } from 'lucide-react';
import { sampleEvents, eventsConfig } from '../../data/events';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function EventsSection({ onNotify }) {
  return (
    <section className="section-padding bg-[var(--surface)] border-y border-[var(--border-subtle)]" aria-labelledby="events-heading">
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

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {sampleEvents.map((ev, i) => (
            <Reveal key={ev.id} delay={i * 0.06}>
              <div className="surface-base surface-hover h-full flex flex-col p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-[#0b2430] text-white flex items-center justify-center">
                    <Video className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="badge badge-gold">Sample content</span>
                </div>
                <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-1">{ev.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{ev.format}</p>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-tertiary)] mb-4">
                  <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                  {ev.schedule}
                </p>
                <p className="text-xs text-[var(--text-tertiary)] mt-auto">{ev.note}</p>
                <button type="button" onClick={onNotify} className="btn btn-ghost btn-sm mt-4 self-start">
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