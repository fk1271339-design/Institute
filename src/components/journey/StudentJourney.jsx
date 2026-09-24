import { journeyMilestones, journeyConfig } from '../../data/journey';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function StudentJourney() {
  return (
    <section id="journey" className="section-padding bg-[var(--color-mint)] border-b border-[var(--color-border)]">
      <div className="container-custom">
        <SectionHeading
          badge={journeyConfig.badge}
          headlineTop={journeyConfig.headlineTop}
          headlineGradient={journeyConfig.headlineGradient}
          support={journeyConfig.support}
        />

        <ol className="relative max-w-3xl mx-auto">
          <span className="absolute left-[19px] sm:left-1/2 top-3 bottom-3 w-0.5 bg-[var(--color-border)]" aria-hidden="true" />
          {journeyMilestones.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.05}>
              <li className="relative grid sm:grid-cols-2 gap-4 pb-10 last:pb-0">
                <span
                  className={`absolute sm:static left-2 top-1 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[var(--color-teal)] bg-[var(--color-surface)] text-sm font-extrabold font-mono-tech text-[var(--color-teal)] shadow-md ${
                    i % 2 === 0 ? 'sm:col-start-1 sm:justify-self-end' : 'sm:col-start-2 sm:justify-self-start'
                  }`}
                  aria-hidden="true"
                >
                  {m.num}
                </span>
                <div
                  className={`pl-14 sm:pl-0 ${i % 2 === 0 ? 'sm:col-start-1 sm:text-right sm:pr-8' : 'sm:col-start-2 sm:pl-8'}`}
                >
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full p-6 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-heading text-lg font-extrabold text-[var(--color-ink)] mb-1">{m.title}</h3>
                    <p className="text-sm font-bold text-[var(--color-teal)] mb-2">{m.short}</p>
                    <p className="text-sm leading-relaxed text-[var(--color-text)]">{m.text}</p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}