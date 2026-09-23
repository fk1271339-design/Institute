import { useEffect, useState } from 'react';
import { Menu, X, Search, CalendarCheck } from 'lucide-react';
import { brand, navLinks } from '../../data/site';

function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="drop-shadow-[0_2px_8px_rgba(16,185,129,0.35)]">
      <rect width="40" height="40" rx="11" fill="#0b2430" />
      <rect x="1.5" y="1.5" width="37" height="37" rx="9.5" stroke="url(#nxg)" strokeWidth="3" />
      <path d="M12 27.5 V12.5 h6.4 c3.6 0 5.8 1.9 5.8 5.1 0 2.2-1.2 3.9-3.2 4.7 l4.2 5.2 h-4.6 l-3.6-4.6 h-1.4 v4.6 Z m2.6-6.6 h3.5 c1.6 0 2.5-0.8 2.5-2.1 0-1.3-0.9-2.1-2.5-2.1 h-3.5 Z" fill="#35e0a5" />
      <defs>
        <linearGradient id="nxg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#34d399" />
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
            ? 'bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_8px_30px_-18px_rgba(11,36,48,0.3)]'
            : 'bg-[var(--background)]/80 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <nav aria-label="Primary" className="container-custom flex items-center justify-between gap-4 py-3.5">
          <a href="#main" className="flex items-center gap-2.5 shrink-0" onClick={closeMenu}>
            <LogoMark />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-extrabold tracking-tight text-[var(--text-primary)]">
                {brand.shortName}
              </span>
              <span className="text-[10px] font-mono-tech uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                Academy · demo
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="px-3 py-2 rounded-full text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-green-deep)] hover:bg-[var(--surface-hover)] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--accent-green-deep)] hover:border-[var(--border-accent)] transition-colors cursor-pointer"
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
              className="lg:hidden p-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] cursor-pointer"
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
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 bg-[var(--background)]/95 backdrop-blur-xl">
          <div className="container-custom py-6 h-full flex flex-col">
            <ul className="flex flex-col gap-1 overflow-y-auto">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-[var(--text-primary)] hover:text-[var(--accent-green-deep)] hover:bg-[var(--surface-hover)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 pb-4">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onOpenConsultation();
                }}
                className="btn btn-primary w-full"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                Book a free session
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}