import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, Users, ArrowRight, CheckCircle, BookOpen, LayoutGrid } from "lucide-react";
import { coursesData, courseCategories } from "../../data/courses";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function CourseExplorer({ onSelectCourse }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return coursesData.filter((c) => {
      const matchesCat = category === "All" || c.category === category;
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.level.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [category, query]);

  return (
    <section id="courses" className="section-padding relative bg-[var(--background)] overflow-hidden">
      <div className="absolute top-1/4 right-[-6rem] w-96 h-96 bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Academic Programs 2026-27"
          badgeIcon={BookOpen}
          headlineTop="Curated Programs for"
          headlineGradient="Targeted Ranks"
          support="Choose your target goal. Every program ships with senior faculty, 3D visualization tools and an All-India mock test series."
        />

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-1.5 bg-[var(--surface-raised)]/70 backdrop-blur p-1.5 rounded-full border border-[var(--border-subtle)] w-full lg:w-auto">
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  category === cat
                    ? "text-[#04121f] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/25 font-bold"
                    : "text-[var(--text-secondary)] hover:text-white hover:bg-[var(--surface)] border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[var(--text-tertiary)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search course or topic…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search courses"
              className="field-input !rounded-full !pl-10"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.article
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="surface-base surface-hover p-6 flex flex-col justify-between group bg-[var(--surface-raised)]/60"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className={`badge !normal-case !font-bold !text-[11px] ${course.badgeColor}`}>{course.tag}</span>
                    <span className="badge badge-gold !normal-case !text-[11px]">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {course.rating}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="font-mono-tech text-xs text-[var(--text-tertiary)] mb-4">
                    {course.level} · {course.duration}
                  </p>

                  <p className="text-[13px] leading-relaxed mb-5 text-[var(--text-secondary)]">
                    {course.description}
                  </p>

                  {/* 3 benefits */}
                  <ul className="space-y-2 mb-5 pt-4 border-t border-[var(--border-subtle)]">
                    {course.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-300 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-4 pt-4 border-t border-[var(--border-subtle)] font-mono-tech">
                    <span className="flex items-center gap-1.5 text-[var(--text-tertiary)]">
                      <Users className="w-3.5 h-3.5" />
                      {course.enrolledCount} students
                    </span>
                    <span className="text-emerald-400 font-semibold">{course.successMetric}</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="eyebrow-label block text-[10px] mb-0.5">Annual Fee</span>
                      <span className="font-heading text-lg font-extrabold text-white">{course.price}</span>
                    </div>
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="btn btn-primary btn-sm group/btn"
                    >
                      <span>Course Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 flex flex-col items-center gap-3">
            <LayoutGrid className="w-10 h-10 text-[var(--text-tertiary)]" />
            <p className="text-sm text-[var(--text-secondary)]">
              No programs match “{query}”. Try another category or search term.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}