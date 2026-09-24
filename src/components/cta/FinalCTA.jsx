import { CalendarCheck, ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section id="contact" className="py-24 text-white relative">
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="headline-lg text-white mb-4">
                Start with a free, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-[#F2B84B]">no-pressure</span> session
              </h2>
              <p className="text-slate-200 text-base leading-relaxed max-w-xl mx-auto mb-8 font-medium">
                A short call with an academic advisor to hear where your preparation stands and whether the Nexora method fits. Demo booking — no information is sent.
              </p>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn btn-primary bg-gradient-to-r from-[#087F78] to-[#16A394] text-white py-4 px-9 text-base shadow-xl shadow-teal-500/30 cursor-pointer"
              >
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