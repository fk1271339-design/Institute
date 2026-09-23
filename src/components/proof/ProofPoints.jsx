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
    <section className="border-y border-[var(--border-subtle)] bg-[var(--surface)]" aria-labelledby="proof-heading">
      <div className="container-custom section-padding">
        <h2 id="proof-heading" className="sr-only">
          How the Nexora program design helps students
        </h2>
        <Reveal className="mb-10">
          <span className="badge badge-success">Illustrative demo metrics</span>
          <p className="mt-3 text-sm text-[var(--text-tertiary)] max-w-2xl">
            The statements below are non-numeric benefits of the intended program design. They are shown to demonstrate the layout, not as verified statistics.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proofPoints.map((point, i) => {
            const Icon = icons[point.id] || ShieldCheck;
            return (
              <Reveal key={point.id} delay={i * 0.06}>
                <div className="surface-base surface-hover surface-accent h-full p-6">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[rgba(16,185,129,0.1)] text-[var(--accent-green-deep)] mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-1.5">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{point.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}