import { CalendarCheck, ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section id="contact" className="section-padding bg-[var(--color-paper)]">
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-navy)] border border-[#16A394]/30 p-8 sm:p-14 text-center shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(22,163,148,0.35),transparent_65%)] blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="headline-lg text-white mb-4">
                Start with a free, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-[#F2B84B]">no-pressure</span> session
              </h2>
              <p className="text-[#C1D2D7] text-base leading-relaxed max-w-xl mx-auto mb-8 font-normal">
                A short call with an academic advisor to hear where your preparation stands and whether the Nexora method fits. Demo booking — no information is sent.
              </p>
              <button type="button" onClick={onOpenConsultation} className="btn btn-primary bg-gradient-to-r from-[#087F78] to-[#16A394] text-white py-3.5 px-8 text-base shadow-lg shadow-[#087F78]/30">
                <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                Book a free session
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}