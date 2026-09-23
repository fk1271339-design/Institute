import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { navLinks } from "../../data/site";
import { EASE } from "../ui/SectionHeading";

export function OrbLogo({ size = 40 }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      className="drop-shadow-[0_0_14px_rgba(34,211,238,0.35)]"
    >
      <defs>
        <linearGradient id="orbGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="45%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="16" fill="none" stroke="url(#orbGrad)" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="20" cy="20" r="9" fill="url(#orbGrad)" opacity="0.9" />
      <ellipse cx="20" cy="20" rx="9" ry="3.6" fill="none" stroke="#0b1220" strokeWidth="1" strokeOpacity="0.6" transform="rotate(-24 20 20)" />
      <ellipse cx="20" cy="20" rx="9" ry="3.6" fill="none" stroke="#0b1220" strokeWidth="1" strokeOpacity="0.6" transform="rotate(34 20 20)" />
      <circle cx="20" cy="20" r="3" fill="#04121f" stroke="#22d3ee" strokeWidth="1" />
    </svg>
  );
}

export default function Navbar({ onOpenConsultation, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [matches, setMatches] = useState({ lg: false, xl: false });

  useEffect(() => {
    const compute = () => {
      setMatches({ lg: window.innerWidth >= 1024, xl: window.innerWidth >= 1280 });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator via IntersectionObserver.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        onOpenSearch && false;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-[var(--background)]/85 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_8px_32px_-16px_rgba(2,6,23,0.8)]"
          : "py-3.5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group shrink-0" aria-label="Nexora Academy — home">
            <OrbLogo size={scrolled ? 36 : 40} />
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  NEXORA
                </span>
                <span className="badge badge-cyan !py-0 !px-1.5 !text-[9px] !tracking-widest">PRO</span>
              </div>
              <span className="mt-1 text-[9px] tracking-[0.22em] uppercase text-[var(--text-secondary)] font-mono-tech">
                Academy of Excellence
              </span>
            </div>
          </a>

          {/* Desktop nav — full links at xl, core links at lg */}
          <nav
            aria-label="Primary"
            className={`${matches.lg ? "flex" : "hidden"} items-center gap-0.5 bg-[var(--surface-raised)]/70 backdrop-blur-xl border border-[var(--border-subtle)] rounded-full px-2 py-1`}
          >
            {(matches.xl ? navLinks : navLinks.slice(0, 6)).map((link) => {
              const active = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "true" : undefined}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 whitespace-nowrap ${
                    active
                      ? "text-cyan-300"
                      : "text-[var(--text-secondary)] hover:text-white hover:bg-[var(--surface)]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-500/30"
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenSearch}
              aria-label="Search courses and content"
              className="p-2.5 rounded-full text-[var(--text-secondary)] hover:text-cyan-300 bg-[var(--surface-raised)]/70 border border-[var(--border-subtle)] hover:border-cyan-500/40 transition-all cursor-pointer"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href="#scholarship"
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 hover:bg-cyan-500/15 transition-all"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Scholarship</span>
            </a>

            <button onClick={onOpenConsultation} className="btn btn-primary btn-sm !hidden md:inline-flex group">
              <span>Book Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              aria-label="Search courses and content"
              className="p-2.5 rounded-xl text-[var(--text-secondary)] bg-[var(--surface-raised)]/80 border border-[var(--border-subtle)] cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="p-2.5 rounded-xl text-white bg-[var(--surface-raised)]/80 border border-[var(--border-subtle)] cursor-pointer"
            >
              {open ? <X className="w-5 h-5 text-cyan-300" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="lg:hidden overflow-hidden bg-[var(--background)]/95 backdrop-blur-2xl border-b border-[var(--border)]"
          >
            <div className="container-custom py-5">
              <nav aria-label="Mobile" className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="px-4 py-3 text-xs font-semibold text-[var(--text-secondary)] bg-[var(--surface-raised)]/70 border border-[var(--border-subtle)] rounded-xl hover:text-cyan-300 hover:border-cyan-500/30 transition-all flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-40" />
                  </a>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    closeMenu();
                    onOpenConsultation();
                  }}
                  className="btn btn-primary btn-sm w-full"
                >
                  Book Free Counselling
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#scholarship"
                  onClick={closeMenu}
                  className="btn btn-ghost btn-sm w-full"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  NSAT Scholarship Test
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}