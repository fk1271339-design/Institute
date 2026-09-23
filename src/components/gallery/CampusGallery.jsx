import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Eye, X } from "lucide-react";
import { campusGallery, galleryCategories, galleryConfig } from "../../data/gallery";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function CampusGallery() {
  const [category, setCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items = campusGallery.filter((i) => category === "All" || i.category === category);
  const featured = items.find((i) => i.featured) || items[0];
  const rest = items.filter((i) => i !== featured);

  return (
    <section id="gallery" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)]">
      <div className="container-custom relative z-10">
        <SectionHeading
          badge={galleryConfig.badge}
          badgeIcon={Building2}
          headlineTop={galleryConfig.headlineTop}
          headlineGradient={galleryConfig.headlineGradient}
          support={galleryConfig.support}
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((c) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Featured image — spans 2x2 of the card grid */}
          {featured && (
            <motion.button
              key={featured.title}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={() => setLightbox(featured)}
              className="relative lg:col-span-2 lg:row-span-2 overflow-hidden rounded-[1.5rem] border border-[var(--border-subtle)] cursor-pointer group text-left aspect-[4/3] lg:aspect-auto lg:h-full"
            >
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/95 via-[var(--background)]/10 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="badge badge-cyan mb-2">{featured.category}</span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-2 max-w-md">{featured.desc}</p>
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-[var(--background)]/60 backdrop-blur border border-[var(--border)] text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </motion.button>
          )}

          {/* Supporting cards */}
          {rest.map((item) => (
            <motion.button
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={() => setLightbox(item)}
              className="relative overflow-hidden rounded-[1.5rem] border border-[var(--border-subtle)] cursor-pointer group text-left aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute top-3 left-3 badge !py-1 !px-2.5 !text-[9px] badge-cyan">{item.category}</div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--background)]/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="surface-base max-w-4xl w-full p-3 sm:p-5 rounded-[1.5rem] relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[var(--surface)]">
                <img src={lightbox.image} alt={lightbox.title} className="w-full max-h-[60vh] object-cover" />
                <button
                  onClick={() => setLightbox(null)}
                  aria-label="Close preview"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-[var(--background)]/80 border border-[var(--border)] text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-3">
                <span className="eyebrow-label block text-[10px] mb-1">{lightbox.category}</span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">{lightbox.title}</h3>
                <p className="text-xs sm:text-sm mt-1.5 text-[var(--text-secondary)]">{lightbox.desc}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}