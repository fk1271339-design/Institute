import { Video, CalendarDays } from 'lucide-react';
import { sampleEvents, eventsConfig } from '../../data/events';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function EventsSection({ onNotify }) {
  return (
    <section className="section-padding bg-[var(--color-paper)] border-b border-[var(--color-border)]" aria-labelledby="events-heading">
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

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {sampleEvents.map((ev, i) => (
            <Reveal key={ev.id} delay={i * 0.06}>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full flex flex-col p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-[var(--color-navy)] text-white flex items-center justify-center shadow-md">
                    <Video className="w-4 h-4 text-teal-300" aria-hidden="true" />
                  </span>
                  <span className="badge badge-gold">Sample content</span>
                </div>
                <h3 className="font-heading text-base font-extrabold text-[var(--color-ink)] mb-1">{ev.title}</h3>
                <p className="text-sm font-semibold text-[var(--color-teal)] mb-3">{ev.format}</p>
                <p className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-muted)] font-mono-tech mb-4">
                  <CalendarDays className="w-3.5 h-3.5 text-[var(--color-teal)]" aria-hidden="true" />
                  {ev.schedule}
                </p>
                <p className="text-xs text-[var(--color-muted)] mt-auto pt-3 border-t border-[var(--color-border)]">{ev.note}</p>
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