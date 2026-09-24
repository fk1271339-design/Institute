import { ClipboardCheck, CalendarClock, Timer, MessageSquareText } from 'lucide-react';
import Reveal from '../ui/Reveal';

const features = [
  {
    id: 'diagnostic',
    icon: ClipboardCheck,
    title: 'Diagnostic learning plans',
    text: 'A timed diagnostic starts every journey and turns into a weekly plan. The plan reflects where you actually are — not a generic roadmap.',
  },
  {
    id: 'mentor',
    icon: CalendarClock,
    title: 'Mentor check-ins',
    text: 'A named mentor reviews the plan, progress and next priorities on a regular cadence. No one is left to judge their own progress alone.',
  },
  {
    id: 'pressure',
    icon: Timer,
    title: 'Exam-pressure practice',
    text: 'Timed mock cycles in the exam format train pace and review habits, so performance under a clock is practised, not hoped for.',
  },
  {
    id: 'doubt',
    icon: MessageSquareText,
    title: 'Doubt support',
    text: 'Questions are routed to subject mentors with clear, worked answers. Support response times and channels are confirmed by admissions.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="section-padding bg-[var(--color-navy)] text-[var(--color-on-dark)] relative overflow-hidden" aria-labelledby="why-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="container-custom relative z-10">
        <h2 id="why-heading" className="sr-only">
          Why this approach
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.id} delay={i * 0.06}>
                <div className="bg-[var(--color-navy-soft)] border border-[#16A394]/30 rounded-2xl h-full p-6 transition-all hover:-translate-y-1 hover:border-[#16A394]/60 shadow-lg">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#087F78]/30 text-teal-300 mb-4 border border-[#16A394]/40">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-base font-extrabold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted-on-dark)]">{f.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}