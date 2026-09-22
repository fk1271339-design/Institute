import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { upcomingBatches, batchConfig } from "../../data/batches";
import { SectionHeading, EASE } from "../ui/SectionHeading";

export default function UpcomingBatches({ onReserveSeat }) {
  return (
    <section id="batches" className="section-padding relative bg-[var(--background)] border-y border-[var(--border-subtle)]">
      <div className="absolute top-1/3 left-[-6rem] w-80 h-80 bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={batchConfig.badge}
          badgeIcon={Calendar}
          headlineTop={batchConfig.headlineTop}
          headlineGradient={batchConfig.headlineGradient}
          support={batchConfig.support}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {upcomingBatches.map((batch, idx) => {
            const filled = batch.totalSeats - batch.seatsRemaining;
            const pct = Math.round((filled / batch.totalSeats) * 100);
            const isNearlyFull = batch.seatsRemaining <= batchConfig.urgentThreshold;

            return (
              <motion.article
                key={batch.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: EASE }}
                className="surface-base surface-hover p-6 sm:p-7 flex flex-col justify-between bg-[var(--surface-raised)]/60 group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="badge badge-cyan !normal-case !font-bold !text-[11px]">
                      {batch.exam} · {batch.grade}
                    </span>
                    <span
                      className={`badge !py-1 !px-2.5 !text-[10px] ${
                        isNearlyFull ? "badge-gold" : "badge-success"
                      }`}
                    >
                      {isNearlyFull ? "Limited seats" : `${batch.seatsRemaining} seats available`}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {batch.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    <Info icon={Calendar} label="Start Date" value={batch.startDate} />
                    <Info icon={Clock} label="Timing" value={batch.timings} />
                    <Info icon={Users} label="Mode" value={batch.mode} tone="text-indigo-300" />
                    <Info icon={MapPin} label="Center" value={batch.center} tone="text-violet-300" />
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex justify-between text-xs font-mono-tech mb-1.5">
                    <span className="text-[var(--text-tertiary)]">Capacity</span>
                    <span className="text-cyan-300 font-bold">
                      {filled} / {batch.totalSeats} enrolled
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--surface-hover)] rounded-full overflow-hidden mb-5 border border-[var(--border-subtle)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: EASE }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-full"
                    />
                  </div>

                  <button
                    onClick={() => onReserveSeat(batch)}
                    className="btn btn-primary w-full group/btn"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value, tone = "text-cyan-300" }) {
  return (
    <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
      <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${tone}`} />
      <span>
        <span className="block text-[10px] uppercase font-mono-tech text-[var(--text-tertiary)]">{label}</span>
        <strong className="text-white font-medium">{value}</strong>
      </span>
    </div>
  );
}