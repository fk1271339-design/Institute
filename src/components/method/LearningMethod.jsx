import { useState } from 'react';
import { methodSteps, methodConfig } from '../../data/method';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

export default function LearningMethod() {
  const [activeId, setActiveId] = useState(methodSteps[0].id);
  const active = methodSteps.find((s) => s.id === activeId) || methodSteps[0];

  return (
    <section id="method" className="py-20 text-white relative">
      <div className="container-custom">
        <SectionHeading
          badge={methodConfig.badge}
          headlineTop={methodConfig.headlineTop}
          headlineGradient={methodConfig.headlineGradient}
          support={methodConfig.support}
        />

        {/* Tab triggers without boxy borders */}
        <div role="group" aria-label="Select a learning stage" className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {methodSteps.map((step) => {
            const selected = step.id === activeId;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveId(step.id)}
                aria-pressed={selected}
                className={`group text-left p-5 transition-all cursor-pointer rounded-2xl ${
                  selected
                    ? 'bg-teal-500/20 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300'
                }`}
              >
                <span className={`block font-mono-tech text-xs mb-1.5 font-bold ${selected ? 'text-[#F2B84B]' : 'text-teal-400'}`}>
                  {step.num}
                </span>
                <span className="block font-heading text-lg font-extrabold mb-1 text-white">
                  {step.title}
                </span>
                <span className="block text-xs leading-relaxed text-slate-300">
                  {step.short}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Details (Frameless Floating Content) */}
        <Reveal key={activeId}>
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-teal-500/20">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#087F78] to-[#16A394] text-white font-mono-tech text-2xl font-extrabold shadow-lg">
              {active.num}
            </span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-heading text-2xl font-extrabold text-white">{active.heading}</h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F2B84B]" />
                  {active.quality}
                </span>
              </div>
              <p className="text-slate-200 leading-relaxed text-base">{active.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}