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
    <section id="faq" className="py-20 text-white relative">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          badge={faqConfig.badge}
          headlineTop={faqConfig.headlineTop}
          headlineGradient={faqConfig.headlineGradient}
          support={faqConfig.support}
        />

        <div className="relative mb-6 mt-8">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-teal-300" aria-hidden="true" />
          <label htmlFor="faq-search" className="sr-only">
            {faqConfig.searchPlaceholder}
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={faqConfig.searchPlaceholder}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400"
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
                    ? 'bg-[#087F78] text-white border-teal-400 shadow-lg'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center py-10 text-slate-400 font-medium">{faqConfig.noResults}</p>
        ) : (
          <div className="space-y-3.5">
            {filtered.map((faq) => {
              const open = openId === faq.question;
              return (
                <Reveal key={faq.question}>
                  <div className="rounded-2xl border-b border-white/10 overflow-hidden transition-all">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : faq.question)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${faq.question.replace(/\W+/g, '-').toLowerCase()}`}
                        className="w-full flex items-center justify-between gap-4 text-left px-4 py-4 cursor-pointer hover:text-teal-300 transition-colors"
                      >
                        <span className="font-heading text-lg font-extrabold text-white">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 text-teal-300 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {open && (
                      <div
                        id={`faq-panel-${faq.question.replace(/\W+/g, '-').toLowerCase()}`}
                        className="px-4 pb-6 text-sm leading-relaxed text-slate-200 pt-2"
                      >
                        {faq.answer}
                        <span className="badge border-teal-500/30 bg-teal-500/15 text-teal-300 mt-4 block w-fit">{faq.category}</span>
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