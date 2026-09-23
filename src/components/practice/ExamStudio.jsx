import { useEffect, useState } from 'react';
import { Timer, Send, CheckCircle2, XCircle } from 'lucide-react';
import { sampleTest, practiceOutcomes, practiceConfig } from '../../data/testSeries';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

function useCountdown(seconds, running) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [running]);
  return left;
}

function formatTime(total) {
  const m = Math.floor(total / 60)
    .toString()
    .padStart(2, '0');
  const s = (total % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

const palette = [
  { n: 1, answered: false },
  { n: 2, answered: false },
  { n: 3, answered: true },
  { n: 4, answered: false },
  { n: 5, answered: false },
];

export default function ExamStudio() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const running = !submitted;
  const timeLeft = useCountdown(sampleTest.timerSeconds, running);

  const handleSubmit = () => setSubmitted(true);

  const result = submitted ? selected === sampleTest.answerId : null;

  return (
    <section id="practice" className="section-padding bg-[var(--surface)] border-y border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeading
          badge={practiceConfig.badge}
          headlineTop={practiceConfig.headlineTop}
          headlineGradient={practiceConfig.headlineGradient}
          support={practiceConfig.support}
        />

        <div className="grid lg:grid-cols-[1fr_300px] gap-6 max-w-5xl mx-auto">
          <Reveal className="lg:col-span-2">
            <div className="surface-base overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-subtle)] bg-[var(--surface-muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#f1b04b]" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-[#e06c6c]" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-[#53a57b]" aria-hidden="true" />
                  <span className="ml-3 text-xs font-mono-tech text-[var(--text-tertiary)]">
                    Sample interface · not a real test
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-extrabold font-mono-tech text-[var(--accent-green-deep)]">
                  <Timer className="w-4 h-4" aria-hidden="true" />
                  {formatTime(timeLeft)}
                </span>
              </div>

              <div className="grid md:grid-cols-[1fr_220px]">
                {/* Question area */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--text-tertiary)] mb-3">
                    {sampleTest.subject} · {sampleTest.section}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-6 leading-snug">
                    {sampleTest.question}
                  </h3>

                  <div role="radiogroup" aria-label="Answer options" className="grid gap-3">
                    {sampleTest.options.map((opt) => {
                      const isSelected = selected === opt.id;
                      const isAnswer = submitted && opt.id === sampleTest.answerId;
                      const isWrongPick = submitted && isSelected && opt.id !== sampleTest.answerId;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          disabled={submitted}
                          onClick={() => setSelected(opt.id)}
                          className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors cursor-pointer disabled:cursor-default ${
                            isAnswer
                              ? 'border-[var(--border-accent)] bg-[rgba(16,185,129,0.1)] text-[var(--text-primary)]'
                              : isWrongPick
                                ? 'border-[#dc2626]/50 bg-[rgba(220,38,38,0.06)] text-[var(--text-primary)]'
                                : isSelected
                                  ? 'border-[var(--border-accent)] bg-[rgba(16,185,129,0.08)] text-[var(--text-primary)]'
                                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                          }`}
                        >
                          <span className="shrink-0 w-7 h-7 rounded-lg border border-current flex items-center justify-center text-xs font-extrabold">
                            {opt.id}
                          </span>
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button type="button" onClick={handleSubmit} disabled={submitted} className="btn btn-primary">
                      <Send className="w-4 h-4" aria-hidden="true" />
                      {practiceConfig.submitDemoLabel}
                    </button>
                    <p className="text-xs text-[var(--text-tertiary)]">{practiceConfig.sampleNote}</p>
                  </div>

                  {submitted && (
                    <div className="mt-6" aria-live="polite">
                      <div
                        className={`rounded-xl border p-4 flex gap-3 items-start ${
                          result
                            ? 'border-[var(--border-accent)] bg-[rgba(16,185,129,0.08)]'
                            : 'border-[#dc2626]/40 bg-[rgba(220,38,38,0.05)]'
                        }`}
                      >
                        {result ? (
                          <CheckCircle2 className="w-5 h-5 shrink-0 text-[var(--accent-green-deep)]" aria-hidden="true" />
                        ) : (
                          <XCircle className="w-5 h-5 shrink-0 text-[#dc2626]" aria-hidden="true" />
                        )}
                        <div>
                          <p className="font-heading font-bold text-[var(--text-primary)]">
                            {result ? 'Correct — well spotted.' : selected ? 'Try again — not this time.' : 'No answer was selected.'}
                          </p>
                          <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">{sampleTest.explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Palette */}
                <aside className="border-t md:border-t-0 md:border-l border-[var(--border-subtle)] p-6" aria-label="Question navigation sample">
                  <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--text-tertiary)] mb-3">Palette</p>
                  <div className="grid grid-cols-5 md:grid-cols-4 gap-2">
                    {palette.map((q) => (
                      <span
                        key={q.n}
                        className={`h-9 rounded-lg border flex items-center justify-center text-xs font-bold ${
                          q.answered
                            ? 'bg-[rgba(16,185,129,0.12)] border-[var(--border-accent)] text-[var(--accent-green-deep)]'
                            : 'bg-[var(--surface-muted)] border-[var(--border)] text-[var(--text-tertiary)]'
                        }`}
                      >
                        {q.n}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-[var(--text-tertiary)]">
                    Question navigation is shown as a static sample for layout demonstration.
                  </p>
                </aside>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto mt-10 grid sm:grid-cols-3 gap-4">
          {practiceOutcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06}>
              <div className="surface-base h-full p-6">
                <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-1.5">{o.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}