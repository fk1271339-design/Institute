import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, MessageSquareQuote, BadgeCheck } from "lucide-react";
import { testimonialsData, testimonialCategories, testimonialsConfig } from "../../data/testimonials";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function Testimonials({ onPlayVideo }) {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => testimonialsData.filter((t) => category === "All" || t.category === category),
    [category]
  );

  const [featured, ...rest] = filtered;

  return (
    <section id="testimonials" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="absolute bottom-1/4 right-[-6rem] w-96 h-96 bg-cyan-500/8 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={testimonialsConfig.badge}
          badgeIcon={Quote}
          headlineTop={testimonialsConfig.headlineTop}
          headlineGradient={testimonialsConfig.headlineGradient}
          support={testimonialsConfig.support}
        />

        {/* Trust metrics */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-12">
          {testimonialsConfig.trustItems.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              className="p-3 sm:p-4 rounded-2xl bg-[var(--surface-raised)]/60 border border-[var(--border-subtle)] text-center"
            >
              <span className={`font-heading text-lg sm:text-xl font-extrabold block ${t.tone === "gold" ? "text-gradient-gold" : t.tone === "cyan" ? "text-gradient-cyan" : "text-emerald-300"}`}>
                {t.value}
              </span>
              <span className="text-[10px] font-mono-tech uppercase text-[var(--text-tertiary)] mt-1 block leading-tight">{t.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {testimonialCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                category === c
                  ? "text-[#04121f] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/25 font-bold"
                  : "text-[var(--text-secondary)] bg-[var(--surface-raised)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          {featured && (
            <motion.figure
              key={featured.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="surface-base p-6 sm:p-8 mb-5 bg-[var(--surface-raised)]/60 relative"
            >
              <Quote className="w-10 h-10 text-cyan-400/30 absolute top-6 right-6" aria-hidden="true" />
              <div className="flex items-center gap-4 mb-5 flex-wrap">
                <img src={featured.image} alt={featured.name} loading="lazy" className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-500/40" />
                <div>
                  <figcaption className="font-heading font-bold text-white text-base">{featured.name}</figcaption>
                  <p className="text-xs text-cyan-300 font-semibold">
                    {featured.exam} · {featured.year}
                  </p>
                  <span className="badge badge-gold mt-1.5 !py-0.5 !text-[10px]">
                    <Star className="w-3 h-3 fill-current" />
                    {featured.result}
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-1" aria-label={`${featured.rating} out of 5 stars`}>
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic">“{featured.text}”</blockquote>
              <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between flex-wrap gap-3">
                <span className="font-mono-tech text-[11px] text-[var(--text-tertiary)] flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-emerald-400" />
                  {featured.highlight}
                </span>
                {featured.videoTitle && onPlayVideo && (
                  <button
                    onClick={() => onPlayVideo(featured.videoTitle)}
                    className="btn btn-ghost btn-sm !text-xs"
                  >
                    <MessageSquareQuote className="w-3.5 h-3.5 text-cyan-300" />
                    Watch Story
                  </button>
                )}
              </div>
            </motion.figure>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((t, idx) => (
              <motion.figure
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: EASE }}
                className="surface-base surface-hover p-6 bg-[var(--surface-raised)]/50 relative"
              >
                <Quote className="w-7 h-7 text-cyan-400/25 absolute top-5 right-5" aria-hidden="true" />
                <div className="flex items-center gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-xs text-[var(--text-secondary)] leading-relaxed italic line-clamp-4 mb-5">
                  “{t.text}”
                </blockquote>
                <figcaption className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3">
                  <img src={t.image} alt={t.name} loading="lazy" className="w-10 h-10 rounded-xl object-cover border border-[var(--border)]" />
                  <div className="min-w-0">
                    <span className="font-heading text-sm font-bold text-white block truncate">{t.name}</span>
                    <span className="text-[10px] font-mono-tech uppercase text-cyan-300">{t.result}</span>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}