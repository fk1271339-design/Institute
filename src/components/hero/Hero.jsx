import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronRight, Trophy, Users, Zap, MessageSquare } from "lucide-react";
import { heroConfig, heroStats } from "../../data/site";
import Counter from "../ui/Counter";
import Magnetic from "../ui/Magnetic";
import { EASE } from "../ui/SectionHeading";

const statIcons = {
  cyan: Trophy,
  blue: Users,
  indigo: Zap,
  violet: MessageSquare,
};

const statAccent = {
  cyan: "text-cyan-300",
  blue: "text-blue-300",
  indigo: "text-indigo-300",
  violet: "text-violet-300",
};

const sequence = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Hero({ onOpenConsultation }) {
  return (
    <section id="top" className="relative min-h-[92vh] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden flex items-center bg-[var(--background)]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[560px] bg-gradient-to-tr from-cyan-500/12 via-blue-600/8 to-indigo-600/12 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDuration: "9s" }} aria-hidden="true" />
      {/* Orbital lines */}
      <div className="orbital-line top-[12%] left-1/2 -translate-x-1/2 w-[760px] max-w-[90vw] h-[760px] animate-spin-slow" style={{ animationDuration: "90s" }} aria-hidden="true" />
      <div className="orbital-line top-[12%] left-1/2 -translate-x-1/2 w-[540px] max-w-[90vw] h-[540px] animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "70s", borderColor: "rgba(99,102,241,0.1)" }} aria-hidden="true" />
      {/* Minimal particles */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <motion.div variants={sequence} initial="hidden" animate="visible" className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <motion.div variants={item} className="mb-7">
            <button
              onClick={onOpenConsultation}
              className="badge badge-cyan !py-2 !pl-2 hover:bg-cyan-500/15 transition-colors group cursor-pointer"
              aria-label="Admissions open — register for NSAT scholarship test"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="!normal-case !tracking-normal !font-normal text-[11px] sm:text-xs text-slate-200">
                {heroConfig.badge.label}
                <span className="text-cyan-300 font-semibold"> {heroConfig.badge.highlight}</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="headline-xl text-white">
            {heroConfig.headlineTop}
            <br />
            <span className="text-gradient-cyan">{heroConfig.headlineGradient}</span>
          </motion.h1>

          {/* Support */}
          <motion.p variants={item} className="lead mt-6 max-w-2xl">
            {heroConfig.support}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Magnetic className="w-full sm:w-auto">
              <button onClick={onOpenConsultation} className="btn btn-primary w-full sm:w-auto group">
                {heroConfig.primaryCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Magnetic>
            <a href="#scholarship" className="btn btn-ghost w-full sm:w-auto">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              {heroConfig.secondaryCta}
            </a>
          </motion.div>

          {/* Statistics — deliberately secondary */}
          <motion.div variants={item} className="mt-14 w-full">
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--border-subtle)]">
              {heroStats.map((stat) => {
                const Icon = statIcons[stat.accent] || Trophy;
                return (
                  <div key={stat.id} className="bg-[var(--surface-raised)]/90 backdrop-blur p-4 sm:p-5 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 ${statAccent[stat.accent]}`} />
                      <dd className={`font-heading font-extrabold text-xl sm:text-2xl ${statAccent[stat.accent]}`}>
                        <Counter value={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                      </dd>
                    </div>
                    <dt className="text-[11px] sm:text-xs text-[var(--text-secondary)] mt-0.5 leading-snug">
                      {stat.label}
                    </dt>
                  </div>
                );
              })}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}