import { Mail, Info } from 'lucide-react';
import { brand, footerColumns, socials, contact, demoNotice } from '../../data/site';

function LogoMark() {
  return (
    <span className="inline-flex w-10 h-10 rounded-xl bg-gradient-to-tr from-[#087F78] to-[#16A394] items-center justify-center text-white font-heading font-extrabold text-lg shadow-lg">
      N
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 text-slate-300 py-12 bg-black/60 backdrop-blur-xl border-t border-white/10" role="contentinfo">
      <div className="container-custom">
        <div className="grid md:grid-cols-[1.2fr_2fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoMark />
              <span className="font-heading text-xl font-extrabold text-white">{brand.name}</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-300">{brand.description}</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-slate-300">
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="underline decoration-white/30 hover:text-teal-300 transition-colors">
                {contact.email}
              </a>
            </p>
          </div>

          <nav className="grid sm:grid-cols-3 gap-8" aria-label="Footer navigation">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-heading text-xs font-bold text-[#F2B84B] uppercase tracking-wider mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-300 hover:text-teal-300 transition-colors font-medium"
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
          <p className="flex items-start gap-2 text-xs text-slate-400 mb-4">
            <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#F2B84B]" aria-hidden="true" />
            <span>{demoNotice}</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} {brand.name}. Concept demo website.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={`${s.name} (placeholder link)`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold border border-white/15 text-slate-300 hover:text-white hover:border-teal-400 transition-colors"
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