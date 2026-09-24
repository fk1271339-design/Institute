import { useEffect, useState } from 'react';
import { Menu, X, Search, CalendarCheck } from 'lucide-react';
import { brand, navLinks } from '../../data/site';

function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="drop-shadow-[0_2px_8px_rgba(24,169,153,0.35)]">
      <rect width="40" height="40" rx="11" fill="#071B2B" />
      <rect x="1.5" y="1.5" width="37" height="37" rx="9.5" stroke="url(#nxg)" strokeWidth="3" />
      <path d="M13 27.5 V12.5 h3.2 l8.8 11.2 V12.5 h3.2 v15 h-3.2 l-8.8-11.2 v11.2 Z" fill="#18A999" />
      <defs>
        <linearGradient id="nxg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#087F78" />
          <stop offset="1" stopColor="#18A999" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar({ onOpenConsultation, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-surface)]/95 backdrop-blur-xl border-b border-[var(--color-border)] shadow-md shadow-[#082538]/5 text-[var(--color-ink)]'
            : 'bg-[#082538]/95 backdrop-blur-md border-b border-[#10384A] text-white'
        }`}
      >
        <nav aria-label="Primary navigation" className="container-custom flex items-center justify-between gap-4 py-3">
          <a href="#main" className="flex items-center gap-2.5 shrink-0 group" onClick={closeMenu}>
            <LogoMark />
            <span className="flex flex-col leading-none">
              <span className={`font-heading text-lg font-extrabold tracking-tight transition-colors ${
                scrolled ? 'text-[var(--color-ink)]' : 'text-white'
              }`}>
                {brand.shortName}
              </span>
              <span className={`text-[10px] font-mono-tech uppercase tracking-[0.18em] ${
                scrolled ? 'text-[var(--color-muted)]' : 'text-[var(--color-muted-on-dark)]'
              }`}>
                Academy · EdTech
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                    scrolled
                      ? 'text-[var(--color-text)] hover:text-[var(--color-teal)] hover:bg-[var(--color-mint)]'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenSearch}
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                scrolled
                  ? 'border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-text)] hover:text-[var(--color-teal)] hover:border-[var(--color-teal)]'
                  : 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40'
              }`}
              aria-label="Search FAQs and programs (Ctrl K)"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              Book a free session
            </button>
            <button
              type="button"
              className={`lg:hidden p-2.5 rounded-full border transition-all cursor-pointer ${
                scrolled
                  ? 'border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-ink)]'
                  : 'border-white/20 bg-white/10 text-white'
              }`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 z-40 bg-[#082538]/98 backdrop-blur-2xl text-white border-t border-[#10384A]">
          <div className="container-custom py-6 h-full flex flex-col justify-between overflow-y-auto">
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-bold text-white hover:text-teal-300 hover:bg-white/10 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-6 pb-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenConsultation();
                }}
                className="btn btn-primary w-full py-3.5 text-base"
              >
                <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                Book a free session
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}