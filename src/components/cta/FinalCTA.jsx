import { CalendarCheck, ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[#0b2430] border border-[rgba(255,255,255,0.08)] p-8 sm:p-14 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.28),transparent_65%)]" aria-hidden="true" />

            <div className="relative">
              <h2 className="headline-lg text-white mb-4">
                Start with a free, <span className="text-gradient-green">no-pressure</span> session
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                A short call with an academic advisor to hear where your preparation stands and whether the Nexora method fits. Demo booking — no information is sent.
              </p>
              <button type="button" onClick={onOpenConsultation} className="btn btn-primary">
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                Book a free session
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}