import React from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, Zap } from "lucide-react";
import { comparisonRows, whyConfig } from "../../data/whyUs";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function WhyNexora() {
  return (
    <section id="why-nexora" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)] bg-grid-pattern">
      <div className="absolute top-1/3 left-[-8rem] w-96 h-96 bg-violet-500/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={whyConfig.badge}
          badgeIcon={Zap}
          headlineTop={whyConfig.headlineTop}
          headlineGradient={whyConfig.headlineGradient}
          support={whyConfig.support}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="surface-base overflow-hidden rounded-[1.75rem] border-[var(--border)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)]/60">
                  <th scope="col" className="p-5 font-heading text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider w-[30%]">
                    Dimension
                  </th>
                  <th scope="col" className="p-5 font-heading text-sm font-bold text-[var(--text-tertiary)] uppercase tracking-wider w-[35%]">
                    Traditional Coaching
                  </th>
                  <th scope="col" className="p-5 bg-cyan-500/[0.06] w-[35%] border-l border-cyan-500/20">
                    <div className="flex items-center gap-2 font-heading text-sm font-extrabold text-cyan-300 uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>Nexora Academy</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="group transition-colors duration-200 hover:bg-[var(--surface)]/60">
                    <td className="p-5 font-semibold text-sm text-white">
                      <div className="flex items-center gap-2">
                        <span>{row.feature}</span>
                        {row.badge && (
                          <span className="hidden md:inline-flex badge !py-0.5 !px-2 !text-[9px] badge-cyan">{row.badge}</span>
                        )}
                      </div>
                    </td>
                    <td className="p-5 text-xs sm:text-sm text-[var(--text-tertiary)]">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-[var(--danger)] mt-0.5 shrink-0 opacity-80" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-5 text-xs sm:text-sm text-white bg-cyan-500/[0.04] border-l border-cyan-500/20 group-hover:bg-cyan-500/[0.07] transition-colors">
                      <div className="flex items-start gap-2.5 font-medium">
                        <Check className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />
                        <span>{row.nexora}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}