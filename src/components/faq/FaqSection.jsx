import { useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { faqsData, faqCategories, faqConfig } from '../../data/faqs';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function FaqSection() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = faqsData;
    if (category !== 'All') items = items.filter((f) => f.category === category);
    if (q) items = items.filter((f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q) || f.category.toLowerCase().includes(q));
    return items;
  }, [query, category]);

  return (
    <section id="faq" className="section-padding bg-[var(--color-mint)] border-b border-[var(--color-border)]">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          badge={faqConfig.badge}
          headlineTop={faqConfig.headlineTop}
          headlineGradient={faqConfig.headlineGradient}
          support={faqConfig.support}
        />

        <div className="relative mb-6">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" aria-hidden="true" />
          <label htmlFor="faq-search" className="sr-only">
            {faqConfig.searchPlaceholder}
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={faqConfig.searchPlaceholder}
            className="field-input !pl-11 border-[var(--color-border)] shadow-sm"
            autoComplete="off"
          />
        </div>

        <div role="group" aria-label="Filter FAQs by category" className="flex flex-wrap gap-2.5 mb-8">
          {faqCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={`min-h-[38px] px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  active
                    ? 'bg-[var(--color-teal)] text-white border-[var(--color-teal)] shadow-sm'
                    : 'bg-[var(--color-surface)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center py-10 text-[var(--color-muted)] font-medium">{faqConfig.noResults}</p>
        ) : (
          <div className="space-y-3.5">
            {filtered.map((faq) => {
              const open = openId === faq.question;
              return (
                <Reveal key={faq.question}>
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:border-[var(--color-teal)] transition-all">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : faq.question)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${faq.question.replace(/\W+/g, '-').toLowerCase()}`}
                        className="w-full flex items-center justify-between gap-4 text-left px-6 py-4.5 cursor-pointer"
                      >
                        <span className="font-heading text-base font-extrabold text-[var(--color-ink)]">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 text-[var(--color-teal)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {open && (
                      <div
                        id={`faq-panel-${faq.question.replace(/\W+/g, '-').toLowerCase()}`}
                        className="px-6 pb-6 -mt-1 text-sm leading-relaxed text-[var(--color-text)] border-t border-[var(--color-border)]/50 pt-4"
                      >
                        {faq.answer}
                        <span className="badge badge-green mt-4 block w-fit">{faq.category}</span>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}