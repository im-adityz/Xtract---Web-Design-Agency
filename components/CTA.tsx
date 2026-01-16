
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-10">
        <div className="relative rounded-[48px] bg-zinc-900/50 border border-white/5 overflow-hidden p-16 md:p-24 text-center">
          {/* Subtle Ambient Light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(139,92,246,0.15)_0%,transparent_60%)]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl mx-auto leading-[1.1]">
              Ready to stop the scroll and <br />
              <span className="relative inline-block mt-8">
                <span className="relative z-10 text-white font-semibold tracking-tight px-10 py-3 block border border-white/10 backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl">
                  start the sale?
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-blue-500/40 rounded-3xl blur-md opacity-50" />
              </span>
            </h2>
            
            <p className="text-zinc-500 text-lg md:text-xl mt-16 mb-12 max-w-xl mx-auto leading-relaxed">
              Book a 15-minute performance audit. We'll show you exactly where your current site is leaking revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full blur-md opacity-25 group-hover:opacity-100 group-hover:blur-xl transition duration-500 animate-[pulse_2s_infinite]"></div>
                
                <button 
                  data-cal-link="aditya-9ekae9/project-scope-call"
                  data-cal-namespace="project-scope-call"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className="relative px-12 py-5 bg-white text-black font-extrabold text-lg rounded-full flex items-center gap-3 hover:bg-zinc-50 transition-all transform hover:scale-[1.05] active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] overflow-hidden"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-[30deg] -translate-x-full animate-[shimmer_2.5s_infinite]" />
                  <span className="relative z-10">Book a Call</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              
              <button 
                onClick={scrollToPricing}
                className="px-10 py-5 bg-zinc-900/80 border border-white/10 text-zinc-400 font-bold rounded-full hover:bg-zinc-800 hover:text-white transition-all transform hover:scale-105 cursor-pointer active:scale-95"
              >
                See Pricing Models
              </button>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 blur-[80px] rounded-full" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 blur-[80px] rounded-full" />
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-30deg); }
          40% { transform: translateX(250%) skewX(-30deg); }
          100% { transform: translateX(250%) skewX(-30deg); }
        }
      `}</style>
    </section>
  );
};
