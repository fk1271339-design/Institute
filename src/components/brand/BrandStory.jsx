import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { pillars, brandConfig } from "../../data/brand";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function BrandStory() {
  return (
    <section className="section-padding relative bg-[var(--background)] bg-dots-pattern [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,black,transparent)]">
      <div className="container-custom relative z-10">
        <SectionHeading
          badge={brandConfig.badge}
          badgeIcon={Sparkles}
          headlineTop={brandConfig.headlineTop}
          headlineGradient={brandConfig.headlineGradient}
          support={brandConfig.support}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: EASE }}
              className={`surface-base surface-hover p-6 flex flex-col justify-between ${pillar.border}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)]">
                    <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <span className="badge !py-1 !px-2.5 !text-[10px]">{pillar.badge}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-semibold text-[var(--text-tertiary)] group-hover:text-white transition-colors">
                <span>Standard of excellence</span>
                <ArrowUpRight className={`w-4 h-4 ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}