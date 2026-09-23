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
    <section id="faq" className="section-padding">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          badge={faqConfig.badge}
          headlineTop={faqConfig.headlineTop}
          headlineGradient={faqConfig.headlineGradient}
          support={faqConfig.support}
        />

        <div className="relative mb-6">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" aria-hidden="true" />
          <label htmlFor="faq-search" className="sr-only">
            {faqConfig.searchPlaceholder}
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={faqConfig.searchPlaceholder}
            className="field-input !pl-11"
            autoComplete="off"
          />
        </div>

        <div role="group" aria-label="Filter FAQs by category" className="flex flex-wrap gap-2 mb-8">
          {faqCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-pointer ${
                  active
                    ? 'bg-[var(--accent-green-deep)] text-white border-[var(--accent-green-deep)]'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--border-accent)] hover:text-[var(--accent-green-deep)]'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center py-10 text-[var(--text-secondary)]">{faqConfig.noResults}</p>
        ) : (
          <div className="space-y-3">
            {filtered.map((faq) => {
              const open = openId === faq.question;
              return (
                <Reveal key={faq.question}>
                  <div className="surface-base surface-accent overflow-hidden">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : faq.question)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${faq.question.replace(/\W+/g, '-').toLowerCase()}`}
                        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 cursor-pointer"
                      >
                        <span className="font-heading text-sm sm:text-base font-bold text-[var(--text-primary)]">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 text-[var(--text-tertiary)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {open && (
                      <div
                        id={`faq-panel-${faq.question.replace(/\W+/g, '-').toLowerCase()}`}
                        className="px-5 pb-5 -mt-1 text-sm leading-relaxed text-[var(--text-secondary)]"
                      >
                        {faq.answer}
                        <span className="badge mt-4 block w-fit">{faq.category}</span>
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