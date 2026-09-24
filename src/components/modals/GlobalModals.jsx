import { useMemo, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Search, Sparkles } from 'lucide-react';
import Dialog from '../ui/Dialog';
import { faqsData } from '../../data/faqs';
import { programsData } from '../../data/courses';

const programOptions = ['IIT-JEE', 'NEET-UG', 'Olympiad & Foundation', 'STEM / AI'];

function useFormValidation() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter an email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Please enter a valid email address.';
    return next;
  }, [values]);

  const valid = Object.keys(errors).length === 0;

  const setValue = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };
  const touch = (field) => () => setTouched((t) => ({ ...t, [field]: true }));

  return { values, setValue, touch, errors, touched, valid };
}

export function ConsultationModal({ isOpen, onClose }) {
  const { values, setValue, touch, errors, touched, valid } = useFormValidation();
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!valid) return;
    setDone(true);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} labelledBy="consultation-title" title="Book a free session">
      {done ? (
        <div className="text-center py-4" aria-live="polite">
          <span className="w-16 h-16 rounded-full bg-[var(--color-mint-strong)] text-[var(--color-teal)] flex items-center justify-center mx-auto border border-[var(--color-teal)] mb-4 shadow-sm">
            <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
          </span>
          <h3 className="font-heading text-xl font-extrabold text-[var(--color-ink)] mb-2">
            Demo submitted. Nothing was sent.
          </h3>
          <p className="text-sm text-[var(--color-text)] max-w-xs mx-auto leading-relaxed">
            This is a demo form — details stay in your browser. A real admissions form will replace it before launch.
          </p>
          <button type="button" onClick={onClose} className="btn btn-primary btn-sm mt-6">
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="c-name" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] mb-1.5">
                Full name <span className="text-[#dc2626]">*</span>
              </label>
              <input
                id="c-name"
                type="text"
                value={values.name}
                onChange={setValue('name')}
                onBlur={touch('name')}
                aria-invalid={!!(touched.name && errors.name)}
                aria-describedby={errors.name ? 'c-name-error' : undefined}
                className="field-input border-[var(--color-border)] shadow-sm"
                placeholder="Your name"
              />
              {touched.name && errors.name && (
                <p id="c-name-error" className="text-xs text-[#dc2626] mt-1 font-semibold" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="c-email" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] mb-1.5">
                Email <span className="text-[#dc2626]">*</span>
              </label>
              <input
                id="c-email"
                type="email"
                value={values.email}
                onChange={setValue('email')}
                onBlur={touch('email')}
                aria-invalid={!!(touched.email && errors.email)}
                aria-describedby={errors.email ? 'c-email-error' : undefined}
                className="field-input border-[var(--color-border)] shadow-sm"
                placeholder="you@example.com"
              />
              {touched.email && errors.email && (
                <p id="c-email-error" className="text-xs text-[#dc2626] mt-1 font-semibold" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="c-phone" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] mb-1.5">
              Phone <span className="text-[var(--color-muted)] font-normal font-sans">(optional)</span>
            </label>
            <input id="c-phone" type="tel" value={values.phone} onChange={setValue('phone')} className="field-input border-[var(--color-border)] shadow-sm" placeholder="+91 …" />
          </div>

          <div>
            <label htmlFor="c-program" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] mb-1.5">
              Program of interest
            </label>
            <select id="c-program" value={values.program} onChange={setValue('program')} className="field-input border-[var(--color-border)] shadow-sm">
              <option value="">Choose a program…</option>
              {programOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="c-message" className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] mb-1.5">
              Anything you would like to ask?
            </label>
            <textarea
              id="c-message"
              value={values.message}
              onChange={setValue('message')}
              rows={3}
              className="field-input border-[var(--color-border)] shadow-sm resize-none"
              placeholder="Optional — e.g. target exam, current class"
            />
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button type="submit" className="btn btn-primary w-full py-3">
              Submit demo enquiry
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            {submitted && !valid && (
              <p className="text-xs text-[#dc2626] font-semibold text-center" role="alert">
                Please fix the highlighted fields before continuing.
              </p>
            )}
            <p className="text-xs text-[var(--color-muted)] text-center leading-relaxed">
              Demo form — nothing is transmitted or stored. Remove before connecting a real admissions service.
            </p>
          </div>
        </form>
      )}
    </Dialog>
  );
}

export function QuickSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const listRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const programs = programsData
      .filter((p) => p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q))
      .map((p) => ({ type: 'program', label: `Program · ${p.title}`, id: p.id, data: p }));
    const faqs = faqsData
      .filter((f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
      .map((f) => ({ type: 'faq', label: `FAQ · ${f.question}`, id: f.question, data: f }));
    return [...programs, ...faqs].slice(0, 8);
  }, [query]);

  const jump = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePick = (result) => {
    onClose();
    jump(result.type === 'program' ? '#programs' : '#faq');
  };

  return (
    <Dialog open={isOpen} onClose={onClose} labelledBy="search-title" title="Search Nexora Academy">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" aria-hidden="true" />
        <label htmlFor="site-search" className="sr-only">
          Search programs and FAQ questions
        </label>
        <input
          id="site-search"
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search programs, topics, and FAQ questions…"
          className="field-input !pl-11 border-[var(--color-border)] shadow-sm"
          autoComplete="off"
          aria-controls="site-search-results"
          aria-expanded={results.length > 0}
        />
      </div>

      {query.trim() && (
        <ul id="site-search-results" ref={listRef} className="mt-4 space-y-2 max-h-[60vh] overflow-y-auto" aria-label="Search results">
          {results.length === 0 ? (
            <li className="text-sm text-[var(--color-muted)] py-4 text-center">No matching programs or FAQs found.</li>
          ) : (
            results.map((result) => (
              <li key={`${result.type}-${result.id}`}>
                <button
                  type="button"
                  onClick={() => handlePick(result)}
                  className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-teal)] hover:bg-[var(--color-mint)] text-sm text-[var(--color-ink)] font-semibold transition-all cursor-pointer"
                >
                  <span
                    className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech uppercase tracking-wider font-bold ${
                      result.type === 'program' ? 'badge-green' : 'badge-violet'
                    }`}
                  >
                    {result.type === 'program' ? 'Program' : 'FAQ'}
                  </span>
                  <span className="truncate">{result.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-auto text-[var(--color-teal)]" aria-hidden="true" />
                </button>
              </li>
            ))
          )}
        </ul>
      )}

      <p className="mt-4 flex items-start gap-2 text-xs text-[var(--color-muted)] leading-relaxed">
        <Sparkles className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-teal)]" aria-hidden="true" />
        <span>Search works over real page content — programs and FAQ questions. Esc closes this dialog.</span>
      </p>
    </Dialog>
  );
}