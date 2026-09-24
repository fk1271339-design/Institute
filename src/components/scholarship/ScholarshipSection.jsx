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
    <section id="scholarship" className="py-20 text-white relative">
      <div className="container-custom">
        <SectionHeading
          badge={scholarshipConfig.badge}
          headlineTop={scholarshipConfig.headlineTop}
          headlineGradient={scholarshipConfig.headlineGradient}
          support={scholarshipConfig.support}
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
          <Reveal>
            <div className="p-6 sm:p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-teal-500/20">
              <h3 className="font-heading text-xl font-extrabold text-white mb-1 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-300" aria-hidden="true" />
                {scholarshipConfig.title}
              </h3>
              <p className="text-sm text-slate-300 mb-6">{scholarshipConfig.tierDisclaimer}</p>

              <label htmlFor="scholar-percent" className="block text-sm font-bold text-white mb-2">
                Estimated Test Score: <span className="font-mono-tech text-[#F2B84B] font-extrabold">{percent}%</span>
              </label>
              <input
                id="scholar-percent"
                type="range"
                min={scholarshipConfig.sliderMin}
                max={scholarshipConfig.sliderMax}
                value={percent}
                onChange={(e) => setPercent(Number(e.target.value))}
                className="w-full accent-[#16A394] cursor-pointer mb-4"
                aria-valuetext={`${percent} percent estimated score`}
              />

              <div className="mt-6 rounded-2xl border border-teal-500/30 bg-teal-500/10 p-5" aria-live="polite">
                <p className="text-xs font-mono-tech uppercase tracking-widest text-teal-300 mb-1 font-bold">
                  Chosen Tier
                </p>
                <p className="font-heading text-2xl font-extrabold text-white flex items-center justify-between">
                  <span>{tier.label}</span>
                  <span className="text-[#F2B84B] font-extrabold">{tier.value}% Waiver</span>
                </p>
                <p className="mt-2 text-xs text-slate-400">Illustrative demo — not an offer of aid.</p>
              </div>

              <ol className="mt-6 space-y-2.5">
                {scholarshipSteps.map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#16A394] shrink-0" aria-hidden="true" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {confirmed ? (
              <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-teal-500/20 h-full flex flex-col items-center justify-center text-center">
                <span className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-400 mb-4 shadow-lg">
                  <Award className="w-8 h-8" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-white mb-2">
                  {scholarshipConfig.confirmedTitle}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">{scholarshipConfig.confirmedBody}</p>
                <button
                  type="button"
                  onClick={() => setConfirmed(false)}
                  className="btn text-white bg-white/10 hover:bg-white/20 border border-white/20 btn-sm mt-6 cursor-pointer"
                >
                  Back to estimate
                </button>
              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-teal-500/20 h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-heading text-xl font-extrabold text-white mb-2">Claim Demo Waiver</h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Use the estimate on the left, or skip straight to an enquiry. No data you enter here leaves your browser.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setConfirmed(true)}
                    className="btn btn-primary bg-gradient-to-r from-[#087F78] to-[#16A394] text-white w-full py-3.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    {scholarshipConfig.cta}
                  </button>
                  <p className="mt-4 flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                    <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
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