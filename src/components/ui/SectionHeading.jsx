import React from "react";
import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export function SectionHeading({ badge, badgeIcon: Icon, headlineTop, headlineGradient, support, align = "center", tone = "cyan" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-12 md:mb-16`}
    >
      <span className={`badge ${tone === "gold" ? "badge-gold" : "badge-cyan"} mb-5`}>
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {badge}
      </span>
      <h2 className="headline-lg text-white">
        {headlineTop}{" "}
        <span className={tone === "gold" ? "text-gradient-gold" : "text-gradient-cyan"}>
          {headlineGradient}
        </span>
      </h2>
      {support && (
        <p className="lead mt-4 u-width" style={align === "center" ? { margin: "1rem auto 0" } : undefined}>
          {support}
        </p>
      )}
    </motion.div>
  );
}