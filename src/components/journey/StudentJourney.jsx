import { journeyMilestones, journeyConfig } from '../../data/journey';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function StudentJourney() {
  return (
    <section id="journey" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge={journeyConfig.badge}
          headlineTop={journeyConfig.headlineTop}
          headlineGradient={journeyConfig.headlineGradient}
          support={journeyConfig.support}
        />

        <ol className="relative max-w-3xl mx-auto">
          <span className="absolute left-[19px] sm:left-1/2 top-2 bottom-2 w-px bg-[var(--border)]" aria-hidden="true" />
          {journeyMilestones.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.05}>
              <li className="relative grid sm:grid-cols-2 gap-4 pb-10 last:pb-0">
                <span
                  className={`absolute sm:static left-3 top-1 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full border-2 border-[var(--border-accent)] bg-[var(--surface)] text-sm font-extrabold font-mono-tech text-[var(--accent-green-deep)] shadow-sm ${
                    i % 2 === 0 ? 'sm:col-start-1 sm:justify-self-end' : 'sm:col-start-2 sm:justify-self-start'
                  }`}
                  aria-hidden="true"
                >
                  {m.num}
                </span>
                <div
                  className={`pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:col-start-1 sm:text-right sm:pr-10' : 'sm:col-start-2 sm:pl-10'}`}
                >
                  <div className="surface-base h-full p-6">
                    <h3 className="font-heading text-lg font-extrabold text-[var(--text-primary)] mb-1">{m.title}</h3>
                    <p className="text-sm font-semibold text-[var(--accent-green-deep)] mb-2">{m.short}</p>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{m.text}</p>
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