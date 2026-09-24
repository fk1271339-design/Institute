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
    <section className="relative z-10 py-16 text-white" aria-labelledby="proof-heading">
      <div className="container-custom">
        <h2 id="proof-heading" className="sr-only">
          How the Nexora program design helps students
        </h2>

        <Reveal className="mb-12 text-center max-w-2xl mx-auto">
          <span className="badge border-teal-500/30 bg-teal-500/10 text-teal-300 mb-3">Program Architecture</span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3 drop-shadow">
            Engineered to Eliminate Coaching Drop-offs
          </h3>
          <p className="text-sm font-medium text-slate-300 leading-relaxed">
            Core features built from ground up to sustain student performance, retention, and rank building.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofPoints.map((point, i) => {
            const Icon = icons[point.id] || ShieldCheck;
            return (
              <Reveal key={point.id} delay={i * 0.06}>
                <div className="group h-full p-6 transition-all">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/15 text-teal-300 mb-4 border border-teal-500/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <h4 className="font-heading text-lg font-extrabold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300 font-medium">{point.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}