import { useState } from 'react';
import { methodSteps, methodConfig } from '../../data/method';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function LearningMethod() {
  const [activeId, setActiveId] = useState(methodSteps[0].id);
  const active = methodSteps.find((s) => s.id === activeId);

  return (
    <section id="method" className="section-padding">
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
                    ? 'border-[var(--border-accent)] bg-[rgba(16,185,129,0.08)] shadow-[0_16px_36px_-22px_rgba(16,185,129,0.5)]'
                    : 'border-[var(--border-subtle)] bg-[var(--surface)] hover:border-[var(--border-strong)]'
                }`}
              >
                <span
                  className={`block font-mono-tech text-xs mb-2 ${
                    selected ? 'text-[var(--accent-green-deep)]' : 'text-[var(--text-tertiary)]'
                  }`}
                >
                  {step.num}
                </span>
                <span
                  className={`block font-heading text-lg font-extrabold mb-1 ${
                    selected ? 'text-[var(--accent-green-deep)]' : 'text-[var(--text-primary)]'
                  }`}
                >
                  {step.title}
                </span>
                <span
                  className={`block text-xs leading-relaxed ${
                    selected ? 'text-[var(--text-secondary)]' : 'text-[var(--text-tertiary)]'
                  }`}
                >
                  {step.short}
                </span>
              </button>
            );
          })}
        </div>

        <Reveal key={activeId}>
          <div className="surface-base surface-accent p-6 sm:p-9 grid lg:grid-cols-[auto_1fr] gap-6 items-start">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0b2430] text-white font-mono-tech text-lg">
              {active.num}
            </span>
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-[var(--text-primary)] mb-2">{active.heading}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4">{active.description}</p>
              <span className="badge badge-green">{active.quality}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}