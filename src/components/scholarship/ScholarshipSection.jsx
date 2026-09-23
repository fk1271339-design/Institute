import { useMemo, useState } from 'react';
import { Award, Info, Send } from 'lucide-react';
import { scholarshipTiers, scholarshipConfig, scholarshipSteps } from '../../data/scholarship';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

function getTier(percent) {
  return scholarshipTiers.find((t) => percent >= t.min);
}

export default function ScholarshipSection() {
  const [percent, setPercent] = useState(scholarshipConfig.percentDefault);
  const [confirmed, setConfirmed] = useState(false);
  const tier = useMemo(() => getTier(percent), [percent]);

  return (
    <section id="scholarship" className="section-padding bg-[var(--surface)] border-y border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeading
          badge={scholarshipConfig.badge}
          headlineTop={scholarshipConfig.headlineTop}
          headlineGradient={scholarshipConfig.headlineGradient}
          support={scholarshipConfig.support}
        />

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Reveal>
            <div className="surface-base h-full p-7">
              <h3 className="font-heading text-lg font-extrabold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--accent-green-deep)]" aria-hidden="true" />
                {scholarshipConfig.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">{scholarshipConfig.tierDisclaimer}</p>

              <label htmlFor="scholar-percent" className="block text-sm font-bold text-[var(--text-primary)] mb-2">
                Estimated test score: <span className="font-mono-tech text-[var(--accent-green-deep)]">{percent}%</span>
              </label>
              <input
                id="scholar-percent"
                type="range"
                min={scholarshipConfig.sliderMin}
                max={scholarshipConfig.sliderMax}
                value={percent}
                onChange={(e) => setPercent(Number(e.target.value))}
                className="range-input"
                aria-valuetext={`${percent} percent estimated score`}
              />

              <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-5" aria-live="polite">
                <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--text-tertiary)] mb-2">
                  Chosen tier
                </p>
                <p className="font-heading text-2xl font-extrabold text-[var(--text-primary)]">
                  {tier.label}
                  <span className="ml-2 text-[var(--accent-green-deep)]">{tier.value}% waiver</span>
                </p>
                <p className="mt-2 text-xs text-[var(--text-tertiary)]">Illustrative demo — not an offer of aid.</p>
              </div>

              <ol className="mt-6 space-y-2">
                {scholarshipSteps.map((step) => (
                  <li key={step} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] shrink-0" aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {confirmed ? (
              <div className="surface-base h-full flex flex-col items-center justify-center text-center p-8">
                <span className="w-16 h-16 rounded-full bg-[rgba(16,185,129,0.1)] text-[var(--accent-green-deep)] flex items-center justify-center border border-[var(--border-accent)] mb-4">
                  <Award className="w-7 h-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-extrabold text-[var(--text-primary)] mb-2">
                  {scholarshipConfig.confirmedTitle}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{scholarshipConfig.confirmedBody}</p>
                <button type="button" onClick={() => setConfirmed(false)} className="btn btn-ghost btn-sm mt-6">
                  Back to estimate
                </button>
              </div>
            ) : (
              <div className="surface-base h-full p-7 flex flex-col">
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                  Use the estimate on the left, or skip straight to an enquiry. No data you enter here leaves your browser.
                </p>
                <button type="button" onClick={() => setConfirmed(true)} className="btn btn-primary self-start mt-auto">
                  <Send className="w-4 h-4" aria-hidden="true" />
                  {scholarshipConfig.cta}
                </button>
                <p className="mt-4 flex items-start gap-2 text-xs text-[var(--text-tertiary)]">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
                  {scholarshipConfig.tierDisclaimer}
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}