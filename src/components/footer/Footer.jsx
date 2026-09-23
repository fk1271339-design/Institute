import { Mail, Info } from 'lucide-react';
import { brand, footerColumns, socials, contact, demoNotice } from '../../data/site';

function LogoMark() {
  return (
    <span className="inline-flex w-10 h-10 rounded-xl bg-[#0b2430] items-center justify-center text-white font-heading font-extrabold text-lg">
      N
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0b2430] text-white/70" role="contentinfo">
      <div className="container-custom pt-14 pb-8">
        <div className="grid md:grid-cols-[1.2fr_2fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoMark />
              <span className="font-heading text-lg font-extrabold text-white">{brand.name}</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">{brand.description}</p>
            <p className="mt-4 flex items-start gap-2 text-sm">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="underline decoration-[rgba(255,255,255,0.3)] hover:text-[var(--accent-mint)] transition-colors">
                {contact.email}
              </a>
            </p>
          </div>

          <nav className="grid sm:grid-cols-3 gap-8" aria-label="Footer">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm hover:text-[var(--accent-mint)] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="flex items-start gap-2 text-xs text-white/50 mb-4">
            <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
            {demoNotice}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} {brand.name}. Concept demo website.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={`${s.name} (placeholder link)`}
                  className="px-3 py-1.5 rounded-full text-xs font-bold border border-white/15 text-white/70 hover:text-white hover:border-[var(--accent-mint)] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}