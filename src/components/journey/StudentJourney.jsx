import { journeyMilestones, journeyConfig } from '../../data/journey';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function StudentJourney() {
  return (
    <section id="journey" className="py-20 text-white relative">
      <div className="container-custom">
        <SectionHeading
          badge={journeyConfig.badge}
          headlineTop={journeyConfig.headlineTop}
          headlineGradient={journeyConfig.headlineGradient}
          support={journeyConfig.support}
        />

        <ol className="relative max-w-3xl mx-auto mt-12">
          <span className="absolute left-[19px] sm:left-1/2 top-3 bottom-3 w-0.5 bg-teal-500/30" aria-hidden="true" />
          {journeyMilestones.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.05}>
              <li className="relative grid sm:grid-cols-2 gap-4 pb-12 last:pb-0">
                <span
                  className={`absolute sm:static left-2 top-1 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-400 bg-[#04101A] text-sm font-extrabold font-mono-tech text-teal-300 shadow-lg ${
                    i % 2 === 0 ? 'sm:col-start-1 sm:justify-self-end' : 'sm:col-start-2 sm:justify-self-start'
                  }`}
                  aria-hidden="true"
                >
                  {m.num}
                </span>
                <div
                  className={`pl-14 sm:pl-0 ${i % 2 === 0 ? 'sm:col-start-1 sm:text-right sm:pr-8' : 'sm:col-start-2 sm:pl-8'}`}
                >
                  <div className="p-4 transition-all">
                    <h3 className="font-heading text-xl font-extrabold text-white mb-1">{m.title}</h3>
                    <p className="text-sm font-bold text-[#F2B84B] mb-2">{m.short}</p>
                    <p className="text-sm leading-relaxed text-slate-300 font-medium">{m.text}</p>
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