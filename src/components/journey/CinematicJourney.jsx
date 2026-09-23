import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { journeyStages, journeyConfig, stageAccents } from "../../data/journey";
import { SectionHeading, EASE } from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const pinRef = useRef(null);
  const sectionRef = useRef(null);

  const stage = journeyStages[activeStage];
  const accent = stageAccents[stage.accent] || stageAccents.cyan;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const st = ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: () => "+=" + Math.min(240, window.innerWidth < 1280 ? 200 : 260) + "%",
        pin: true,
        anticipatePin: 1,
        scrub: 0.6,
        onUpdate: (self) => {
          const idx = Math.min(journeyStages.length - 1, Math.floor(self.progress * journeyStages.length));
          setActiveStage(idx);
        },
      });
      return () => st.kill();
    });

    return () => mm.revert();
  }, []);

  const go = (dir) =>
    setActiveStage((p) => (p + dir + journeyStages.length) % journeyStages.length);

  return (
    <section id="journey" ref={sectionRef} className="relative bg-[var(--background)] border-y border-[var(--border-subtle)] overflow-hidden">
      {/* scrolling header stacks above the pinned cinematic block */}
      <div className="container-custom section-padding pb-0">
        <SectionHeading
          badge={journeyConfig.badge}
          badgeIcon={Sparkles}
          headlineTop={journeyConfig.headlineTop}
          headlineGradient={journeyConfig.headlineGradient}
          support={journeyConfig.support}
        />

        {/* Stage quick-nav */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 md:mb-10">
          {journeyStages.map((stg, idx) => (
            <button
              key={stg.id}
              onClick={() => setActiveStage(idx)}
              aria-current={activeStage === idx}
              className={`text-left p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeStage === idx
                  ? "bg-[var(--surface-raised)] border-[var(--border-accent)] shadow-lg"
                  : "bg-transparent border-[var(--border-subtle)] text-[var(--text-tertiary)] hover:border-[var(--border-strong)] hover:text-[var(--text-secondary)]"
              }`}
            >
              <span className={`eyebrow-label block text-[10px] mb-1 ${activeStage === idx ? "" : "!text-[var(--text-tertiary)]"}`}>
                STAGE {stg.stageNum}
              </span>
              <span className="font-heading text-sm font-bold text-white block">{stg.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Scroll-linked progress line */}
        <div className="mb-0 h-1 bg-[var(--surface-hover)] rounded-full overflow-hidden" aria-hidden="true">
          <motion.div
            className={`h-full rounded-full ${accent.bar} transition-colors duration-500`}
            animate={{ width: `${((activeStage + 1) / journeyStages.length) * 100}%` }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        </div>
      </div>

      {/* Pinned cinematic stage */}
      <div ref={pinRef} className="flex items-center justify-center py-12 md:py-20">
        <div className="container-custom w-full">
          <div className="grid grid-cols-12 gap-8 items-stretch">
            {/* Image side */}
            <div className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-[1.75rem] border border-[var(--border-subtle)] shadow-2xl min-h-[280px] lg:min-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={stage.id}
                  src={stage.image}
                  alt={stage.title}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" aria-hidden="true" />

              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <span className="eyebrow-label block mb-1">{stage.tagline}</span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">{stage.title}</h3>
                </div>
                <span className={`badge hidden sm:inline-flex ${accent.chip}`}>{stage.subtitle}</span>
              </div>
            </div>

            {/* Text side */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between bg-[var(--surface-raised)]/50 border border-[var(--border-subtle)] rounded-[1.75rem] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <span className={`badge mb-4 ${accent.chip}`}>
                    STAGE {stage.stageNum} · {stage.subtitle}
                  </span>
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">{stage.title}</h4>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    {stage.description}
                  </p>
                  <ul className="space-y-3">
                    {stage.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                        <ShieldCheck className={`w-4 h-4 mt-0.5 shrink-0 ${accent.chip.split(" ")[2]}`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <button onClick={() => go(-1)} className="btn btn-ghost btn-sm" aria-label="Previous stage">
                  <ChevronLeft className="w-4 h-4 text-cyan-300" />
                  <span>Prev</span>
                </button>
                <div className="flex items-center gap-2" aria-hidden="true">
                  {journeyStages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-400 ${i === activeStage ? `w-6 ${accent.bar}` : "w-1.5 bg-[var(--text-tertiary)]"}`}
                    />
                  ))}
                </div>
                <button onClick={() => go(1)} className="btn btn-ghost btn-sm" aria-label="Next stage">
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4 text-cyan-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}