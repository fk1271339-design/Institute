import React from "react";
import { ArrowUp, MapPin, PhoneCall, Mail } from "lucide-react";
import { OrbLogo } from "../navbar/Navbar";
import { brand, contact, footerColumns, socials, demoNotice } from "../../data/site";
import { footerColumnIcons } from "./Footer.config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--surface)]/60 border-t border-[var(--border-subtle)] pt-16 pb-8 relative text-xs sm:text-sm text-[var(--text-secondary)]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" aria-label="Back to top" className="inline-flex items-center gap-3">
              <OrbLogo />
              <span className="flex flex-col">
                <span className="font-heading text-xl font-extrabold text-white">{brand.name.toUpperCase()}</span>
                <span className="text-[10px] tracking-widest text-[var(--text-tertiary)] font-mono-tech uppercase">
                  {brand.tagline.toUpperCase()}
                </span>
              </span>
            </a>

            <p className="text-[11px] leading-relaxed text-[var(--text-secondary)] max-w-sm">{brand.description}</p>

            <div className="flex items-center gap-2.5 pt-1">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-cyan-300 hover:border-cyan-500/40 transition-colors text-[11px] font-mono-tech font-bold"
                >
                  {s.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col, i) => {
            const Icon = footerColumnIcons[i];
            return (
              <div key={col.title} className="lg:col-span-2">
                <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4 text-cyan-300" />}
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-[11px]">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="hover:text-cyan-300 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Contact column (4th) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">Apex Helpline</h4>
            <ul className="space-y-3.5 text-[11px]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5 flex-wrap">
                <PhoneCall className="w-4 h-4 text-cyan-300 shrink-0" />
                <a href="tel:1800639672" className="hover:text-cyan-300 transition-colors">
                  {contact.phoneLabel}
                </a>
              </li>
              <li className="flex items-center gap-2.5 flex-wrap">
                <Mail className="w-4 h-4 text-cyan-300 shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-cyan-300 transition-colors break-all">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo notice */}
        <p className="max-w-3xl mx-auto text-center text-[10px] font-mono-tech italic leading-relaxed text-[var(--text-tertiary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 mb-8">
          {demoNotice}
        </p>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech text-[var(--text-tertiary)]">
          <p>
            © {new Date().getFullYear()} {brand.name} of Competitive Excellence. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-cyan-300 transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true">•</span>
            <a href="#top" className="hover:text-cyan-300 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[var(--surface-raised)] border border-[var(--border-subtle)] text-cyan-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}