
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 border-y border-white/5 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <h2 className="text-white font-bold tracking-[0.3em] uppercase text-[10px]">Pricing</h2>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Investment models built <br /> <span className="text-zinc-500">for transparency.</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">No hidden fees. No hourly fluff. Just high-performance output delivered at speed.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Foundation - Plan 1 */}
          <div className="group p-12 rounded-[40px] bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] relative">
            <div className="mb-10 text-left">
              <h4 className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-3 group-hover:text-zinc-400 transition-colors">The Foundation</h4>
              <h5 className="text-3xl font-bold mb-4 tracking-tight leading-tight">Premium Landing Page</h5>
              <div className="text-5xl font-bold mb-4 tracking-tighter">$399</div>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">Everything you need to capture attention and convert visitors into leads instantly.</p>
            </div>
            
            <ul className="space-y-4 mb-12 flex-grow">
              {[
                "Premium landing site", 
                "Conversion copy", 
                "Mobile optimized", 
                "SEO setup", 
                "48-hour response", 
                "Unlimited revisions (limited period)",
                "Add-On : Domain and Hosting (Price Varies)"
              ].map((item, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm transition-colors ${i === 6 ? 'text-zinc-500 italic' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                  <Check className={`w-4 h-4 shrink-0 ${i === 6 ? 'text-zinc-600' : 'text-emerald-500/70'}`} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative">
              <button 
                data-cal-link="aditya-9ekae9/project-scope-call"
                data-cal-namespace="project-scope-call"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="w-full py-5 bg-white/5 hover:bg-white text-white hover:text-black font-extrabold rounded-2xl transition-all duration-300 border border-white/10 active:scale-[0.98] group/btn flex items-center justify-center gap-2 overflow-hidden shadow-xl"
              >
                <span className="relative z-10">Book a Call</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Scale - Plan 2 */}
          <div className="group p-12 rounded-[40px] bg-zinc-900 border border-purple-500/30 relative overflow-hidden transition-all duration-500 flex flex-col scale-105 shadow-[0_0_80px_rgba(139,92,246,0.1)] hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(139,92,246,0.2)]">
            <div className="absolute top-6 right-6 bg-purple-500 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-lg group-hover:scale-110 transition-transform">Best Value</div>
            
            <div className="mb-10 text-left">
              <h4 className="text-purple-400/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">The Scale</h4>
              <h5 className="text-3xl font-bold mb-4 tracking-tight leading-tight">Business Website + Lead Capture</h5>
              <div className="text-5xl font-bold mb-4 tracking-tighter">$999</div>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">Full-scale digital presence for businesses ready to dominate their market with advanced tools.</p>
            </div>
            
            <ul className="space-y-4 mb-12 flex-grow">
              {[
                "Multi-page website", 
                "Contact/lead form", 
                "Email notifications", 
                "Mobile optimized", 
                "SEO setup", 
                "48-hour response", 
                "Unlimited revisions (limited period)",
                "Add-On : Domain and Hosting (Price Varies)"
              ].map((item, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm transition-colors ${i === 7 ? 'text-zinc-400 italic' : 'text-zinc-300 group-hover:text-white'}`}>
                  <Check className={`w-4 h-4 shrink-0 ${i === 7 ? 'text-purple-400/50' : 'text-purple-500'}`} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-100 transition-opacity"></div>
              <button 
                data-cal-link="aditya-9ekae9/project-scope-call"
                data-cal-namespace="project-scope-call"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="relative w-full py-5 bg-white text-black font-extrabold rounded-2xl transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[30deg] -translate-x-full group-hover:animate-[shimmer-p_3s_infinite]" />
                <span className="relative z-10">Book a Call</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform" />
              </button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer-p {
          0% { transform: translateX(-150%) skewX(-30deg); }
          50% { transform: translateX(250%) skewX(-30deg); }
          100% { transform: translateX(250%) skewX(-30deg); }
        }
      `}</style>
    </section>
  );
};
