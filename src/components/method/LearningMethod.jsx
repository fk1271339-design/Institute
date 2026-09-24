import { useState } from 'react';
import { methodSteps, methodConfig } from '../../data/method';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function LearningMethod() {
  const [activeId, setActiveId] = useState(methodSteps[0].id);
  const active = methodSteps.find((s) => s.id === activeId);

  return (
    <section id="method" className="section-padding bg-[var(--color-paper)] border-b border-[var(--color-border)]">
      <div className="container-custom">
        <SectionHeading
          badge={methodConfig.badge}
          headlineTop={methodConfig.headlineTop}
          headlineGradient={methodConfig.headlineGradient}
          support={methodConfig.support}
        />

        <div role="group" aria-label="Select a learning stage" className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {methodSteps.map((step) => {
            const selected = step.id === activeId;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveId(step.id)}
                aria-pressed={selected}
                className={`group text-left rounded-2xl border p-4 sm:p-5 transition-all cursor-pointer focus-visible:outline-2 ${
                  selected
                    ? 'border-[var(--color-teal)] bg-[var(--color-mint-strong)] shadow-md shadow-[#087F78]/10'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-teal)] hover:bg-[var(--color-mint)]'
                }`}
              >
                <span
                  className={`block font-mono-tech text-xs mb-2 font-bold ${
                    selected ? 'text-[var(--color-teal)]' : 'text-[var(--color-muted)]'
                  }`}
                >
                  {step.num}
                </span>
                <span
                  className={`block font-heading text-lg font-extrabold mb-1 ${
                    selected ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink)]'
                  }`}
                >
                  {step.title}
                </span>
                <span
                  className={`block text-xs leading-relaxed ${
                    selected ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)]'
                  }`}
                >
                  {step.short}
                </span>
              </button>
            );
          })}
        </div>

        <Reveal key={activeId}>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-9 grid lg:grid-cols-[auto_1fr] gap-6 items-start shadow-sm">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-navy)] text-white font-mono-tech text-xl font-extrabold shadow-md">
              {active.num}
            </span>
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-[var(--color-ink)] mb-2">{active.heading}</h3>
              <p className="text-[var(--color-text)] leading-relaxed max-w-2xl mb-5">{active.description}</p>
              <span className="badge badge-green">{active.quality}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}