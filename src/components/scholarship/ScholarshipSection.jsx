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
    <section id="scholarship" className="section-padding bg-[var(--color-mint)] border-b border-[var(--color-border)]">
      <div className="container-custom">
        <SectionHeading
          badge={scholarshipConfig.badge}
          headlineTop={scholarshipConfig.headlineTop}
          headlineGradient={scholarshipConfig.headlineGradient}
          support={scholarshipConfig.support}
        />

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Reveal>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full p-7 shadow-sm">
              <h3 className="font-heading text-lg font-extrabold text-[var(--color-ink)] mb-1 flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--color-teal)]" aria-hidden="true" />
                {scholarshipConfig.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-6">{scholarshipConfig.tierDisclaimer}</p>

              <label htmlFor="scholar-percent" className="block text-sm font-bold text-[var(--color-ink)] mb-2">
                Estimated test score: <span className="font-mono-tech text-[var(--color-teal)] font-extrabold">{percent}%</span>
              </label>
              <input
                id="scholar-percent"
                type="range"
                min={scholarshipConfig.sliderMin}
                max={scholarshipConfig.sliderMax}
                value={percent}
                onChange={(e) => setPercent(Number(e.target.value))}
                className="range-input mb-2"
                aria-valuetext={`${percent} percent estimated score`}
              />

              <div className="mt-6 rounded-xl border border-[var(--color-teal)]/30 bg-[var(--color-mint-strong)] p-5 shadow-inner" aria-live="polite">
                <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--color-muted)] mb-1 font-bold">
                  Chosen tier
                </p>
                <p className="font-heading text-2xl font-extrabold text-[var(--color-ink)] flex items-center justify-between">
                  <span>{tier.label}</span>
                  <span className="text-[var(--color-teal)] font-extrabold">{tier.value}% waiver</span>
                </p>
                <p className="mt-2 text-xs text-[var(--color-muted)]">Illustrative demo — not an offer of aid.</p>
              </div>

              <ol className="mt-6 space-y-2.5">
                {scholarshipSteps.map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm text-[var(--color-text)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-teal-bright)] shrink-0" aria-hidden="true" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {confirmed ? (
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full flex flex-col items-center justify-center text-center p-8 shadow-sm">
                <span className="w-16 h-16 rounded-full bg-[var(--color-mint-strong)] text-[var(--color-teal)] flex items-center justify-center border border-[var(--color-teal)] mb-4 shadow-sm">
                  <Award className="w-7 h-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-extrabold text-[var(--color-ink)] mb-2">
                  {scholarshipConfig.confirmedTitle}
                </h3>
                <p className="text-sm text-[var(--color-text)] leading-relaxed max-w-sm">{scholarshipConfig.confirmedBody}</p>
                <button type="button" onClick={() => setConfirmed(false)} className="btn btn-ghost btn-sm mt-6">
                  Back to estimate
                </button>
              </div>
            ) : (
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full p-7 flex flex-col justify-between shadow-sm">
                <div>
                  <h4 className="font-heading text-lg font-extrabold text-[var(--color-ink)] mb-2">Claim Demo Waiver</h4>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed mb-6">
                    Use the estimate on the left, or skip straight to an enquiry. No data you enter here leaves your browser.
                  </p>
                </div>
                <div>
                  <button type="button" onClick={() => setConfirmed(true)} className="btn btn-primary w-full">
                    <Send className="w-4 h-4" aria-hidden="true" />
                    {scholarshipConfig.cta}
                  </button>
                  <p className="mt-4 flex items-start gap-2 text-xs text-[var(--color-muted)] leading-relaxed">
                    <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-teal)]" aria-hidden="true" />
                    <span>{scholarshipConfig.tierDisclaimer}</span>
                  </p>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}