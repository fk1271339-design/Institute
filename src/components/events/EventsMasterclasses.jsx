import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Presentation, Calendar, Clock, Users, Radio, CheckCircle2 } from "lucide-react";
import { upcomingEvents, eventConfig } from "../../data/events";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function EventsMasterclasses({ onRegisterEvent }) {
  const [registeredIds, setRegisteredIds] = useState([]);

  const handleRegister = (event) => {
    setRegisteredIds((ids) => (ids.includes(event.id) ? ids : [...ids, event.id]));
    if (onRegisterEvent) onRegisterEvent(event);
  };

  return (
    <section id="masterclasses" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="absolute top-1/4 left-[-6rem] w-96 h-96 bg-violet-500/[0.07] blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={eventConfig.badge}
          badgeIcon={Presentation}
          headlineTop={eventConfig.headlineTop}
          headlineGradient={eventConfig.headlineGradient}
          support={eventConfig.support}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <AnimatePresence>
            {upcomingEvents.map((ev, idx) => {
              const isRegistered = registeredIds.includes(ev.id);
              return (
                <motion.article
                  key={ev.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07, ease: EASE }}
                  className="surface-base surface-hover p-6 sm:p-8 flex flex-col justify-between bg-[var(--surface-raised)]/60 group"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                      <span className="badge badge-cyan !font-bold !text-[11px]">{ev.format}</span>
                      <span className="badge !text-[10px] badge-gold">{eventConfig.liveTag}</span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-4 leading-snug group-hover:text-cyan-300 transition-colors">
                      {ev.title}
                    </h3>

                    <p className="text-xs text-violet-300 font-semibold mb-6">{ev.speaker}</p>

                    <div className="grid grid-cols-3 gap-3 mb-7">
                      <Meta icon={Calendar} label="Date" value={ev.date} />
                      <Meta icon={Clock} label="Time" value={ev.time} />
                      <Meta icon={Users} label="Registered" value={ev.registeredCount.toLocaleString("en-IN")} tone="text-cyan-300" />
                    </div>
                  </div>

                  {isRegistered ? (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      Spot reserved — a 4K stream link will reach your inbox.
                    </div>
                  ) : (
                    <button onClick={() => handleRegister(ev)} className="btn btn-primary w-full group/btn">
                      <Radio className="w-4 h-4" />
                      {eventConfig.cta}
                    </button>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Meta({ icon: Icon, label, value, tone = "text-slate-200" }) {
  return (
    <div className="p-3 rounded-xl bg-[var(--surface)]/70 border border-[var(--border)]">
      <Icon className={`w-4 h-4 mb-2 ${tone}`} />
      <span className="block text-[10px] font-mono-tech uppercase text-[var(--text-tertiary)]">{label}</span>
      <span className="text-xs font-semibold text-white block mt-0.5">{value}</span>
    </div>
  );
}