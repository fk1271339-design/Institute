import { Layers, Users, Target, ShieldCheck } from 'lucide-react';
import { proofPoints } from '../../data/site';
import Reveal from '../ui/Reveal';

const icons = {
  loop: Layers,
  batches: Users,
  practice: Target,
  honest: ShieldCheck,
};

export default function ProofPoints() {
  return (
    <section className="bg-[var(--color-mint)] border-y border-[var(--color-border)] relative z-10" aria-labelledby="proof-heading">
      <div className="container-custom section-padding">
        <h2 id="proof-heading" className="sr-only">
          How the Nexora program design helps students
        </h2>
        <Reveal className="mb-10 text-center max-w-2xl mx-auto">
          <span className="badge badge-green mb-3">Program Architecture</span>
          <p className="text-sm font-medium text-[var(--color-text)] leading-relaxed">
            Core features engineered to eliminate coaching drop-offs and build sustained performance.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {proofPoints.map((point, i) => {
            const Icon = icons[point.id] || ShieldCheck;
            return (
              <Reveal key={point.id} delay={i * 0.06}>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-mint)] text-[var(--color-teal)] mb-4 border border-[var(--color-mint-strong)]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-base font-extrabold text-[var(--color-ink)] mb-2">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text)]">{point.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}