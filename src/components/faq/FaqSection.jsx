import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, MessageCircleQuestion } from "lucide-react";
import { faqsData, faqCategories, faqConfig } from "../../data/faqs";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function FaqSection() {
  const [category, setCategory] = useState("All");
  const [openId, setOpenId] = useState(faqsData[0]?.id ?? null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = faqsData.filter((f) => category === "All" || f.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      );
    }
    return list;
  }, [category, query]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)]">
      <div className="container-custom relative z-10">
        <SectionHeading
          badge={faqConfig.badge}
          badgeIcon={HelpCircle}
          headlineTop={faqConfig.headlineTop}
          headlineGradient={faqConfig.headlineGradient}
          support={faqConfig.support}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category sidebar + help card */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex flex-wrap lg:flex-col gap-2">
              {faqCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer text-left whitespace-nowrap lg:whitespace-normal ${
                    category === c
                      ? "text-[#04121f] bg-gradient-to-r from-cyan-400 to-blue-500 font-bold shadow-md shadow-cyan-500/20"
                      : "text-[var(--text-secondary)] bg-[var(--surface-raised)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[var(--surface-raised)]/60 border border-[var(--border)]">
              <MessageCircleQuestion className="w-6 h-6 text-cyan-300 mb-3" />
              <h3 className="font-heading text-sm font-bold text-white mb-1.5">{faqConfig.helpTitle}</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">{faqConfig.helpBody}</p>
              <a href="#contact" className="btn btn-ghost btn-sm !text-xs w-full">
                Talk to a Counselor
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-9">
            <div className="mb-6">
              <input
                type="search"
                placeholder={faqConfig.searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search FAQ"
                className="field-input"
              />
            </div>

            <AnimatePresence mode="popLayout">
              {filtered.map((f, idx) => (
                <motion.div
                  key={f.question}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: idx * 0.03, ease: EASE }}
                  className="mb-3"
                >
                  <button
                    onClick={() => toggle(f.question)}
                    aria-expanded={openId === f.question}
                    aria-controls={`faq-panel-${idx}`}
                    className={`w-full flex items-start justify-between gap-4 p-4 sm:p-5 text-left rounded-2xl border transition-all cursor-pointer ${
                      openId === f.question
                        ? "bg-[var(--surface-raised)] border-cyan-500/40"
                        : "bg-[var(--surface-raised)]/50 border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                      <span className="text-[10px] font-mono-tech uppercase text-cyan-300 block mb-1">{f.category}</span>
                      {f.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openId === f.question ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`p-2 rounded-full shrink-0 border ${
                        openId === f.question ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/40" : "bg-[var(--surface)] text-[var(--text-tertiary)] border-[var(--border)]"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openId === f.question && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 py-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-x border-b border-[var(--border-subtle)] rounded-b-2xl bg-[var(--surface)]/40">
                          {f.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="p-10 text-center rounded-2xl border border-dashed border-[var(--border-strong)] text-sm text-[var(--text-tertiary)]">
                No FAQ matches “{query}”. Try the Talk to a Counselor panel instead.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}