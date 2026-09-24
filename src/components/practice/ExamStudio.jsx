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
    <section id="practice" className="section-padding bg-[var(--color-paper)] border-b border-[var(--color-border)]">
      <div className="container-custom">
        <SectionHeading
          badge={practiceConfig.badge}
          headlineTop={practiceConfig.headlineTop}
          headlineGradient={practiceConfig.headlineGradient}
          support={practiceConfig.support}
        />

        <div className="grid lg:grid-cols-[1fr_300px] gap-6 max-w-5xl mx-auto">
          <Reveal className="lg:col-span-2">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-navy)] text-white">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#f1b04b]" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-[#e06c6c]" aria-hidden="true" />
                  <span className="w-3 h-3 rounded-full bg-[#16A394]" aria-hidden="true" />
                  <span className="ml-3 text-xs font-mono-tech text-[#C1D2D7]">
                    Sample interface · not a real test
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-extrabold font-mono-tech text-teal-300">
                  <Timer className="w-4 h-4" aria-hidden="true" />
                  {formatTime(timeLeft)}
                </span>
              </div>

              <div className="grid md:grid-cols-[1fr_220px]">
                {/* Question area */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--color-muted)] mb-3 font-bold">
                    {sampleTest.subject} · {sampleTest.section}
                  </p>
                  <h3 className="font-heading text-lg font-extrabold text-[var(--color-ink)] mb-6 leading-snug">
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
                          className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all cursor-pointer disabled:cursor-default ${
                            isAnswer
                              ? 'border-[var(--color-teal)] bg-[var(--color-mint)] text-[var(--color-ink)]'
                              : isWrongPick
                                ? 'border-[#dc2626]/50 bg-[rgba(220,38,38,0.06)] text-[var(--color-ink)]'
                                : isSelected
                                  ? 'border-[var(--color-teal)] bg-[var(--color-mint-strong)] text-[var(--color-ink)]'
                                  : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-teal)] hover:bg-[var(--color-mint)]'
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
                    <p className="text-xs text-[var(--color-muted)]">{practiceConfig.sampleNote}</p>
                  </div>

                  {submitted && (
                    <div className="mt-6" aria-live="polite">
                      <div
                        className={`rounded-xl border p-4 flex gap-3 items-start ${
                          result
                            ? 'border-[var(--color-teal)] bg-[var(--color-mint)]'
                            : 'border-[#dc2626]/40 bg-[rgba(220,38,38,0.05)]'
                        }`}
                      >
                        {result ? (
                          <CheckCircle2 className="w-5 h-5 shrink-0 text-[var(--color-teal)]" aria-hidden="true" />
                        ) : (
                          <XCircle className="w-5 h-5 shrink-0 text-[#dc2626]" aria-hidden="true" />
                        )}
                        <div>
                          <p className="font-heading font-extrabold text-[var(--color-ink)]">
                            {result ? 'Correct — well spotted.' : selected ? 'Try again — not this time.' : 'No answer was selected.'}
                          </p>
                          <p className="text-sm text-[var(--color-text)] mt-1 leading-relaxed">{sampleTest.explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Palette */}
                <aside className="border-t md:border-t-0 md:border-l border-[var(--color-border)] p-6 bg-[var(--color-paper)]/50" aria-label="Question navigation sample">
                  <p className="text-xs font-mono-tech uppercase tracking-widest text-[var(--color-muted)] mb-3 font-bold">Palette</p>
                  <div className="grid grid-cols-5 md:grid-cols-4 gap-2">
                    {palette.map((q) => (
                      <span
                        key={q.n}
                        className={`h-9 rounded-lg border flex items-center justify-center text-xs font-extrabold ${
                          q.answered
                            ? 'bg-[var(--color-mint-strong)] border-[var(--color-teal)] text-[var(--color-teal)]'
                            : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-muted)]'
                        }`}
                      >
                        {q.n}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-[var(--color-muted)] leading-relaxed">
                    Question navigation is shown as a static sample for layout demonstration.
                  </p>
                </aside>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto mt-10 grid sm:grid-cols-3 gap-5">
          {practiceOutcomes.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06}>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-full p-6 shadow-sm">
                <h3 className="font-heading text-base font-extrabold text-[var(--color-ink)] mb-2">{o.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text)]">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}