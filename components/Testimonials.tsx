import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full">
             <div className="relative p-10 md:p-14 rounded-[40px] bg-zinc-900/30 border border-white/5 group overflow-hidden">
                {/* Large outlined quote mark */}
                <div className="absolute top-6 right-10 opacity-[0.05] group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Quote className="w-24 h-24 rotate-12 stroke-[1px]" />
                </div>
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="relative">
                    <img src="https://i.pravatar.cc/150?u=jonathan" alt="CEO" className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                  </div>
                  <div>
                    <h5 className="font-bold text-base tracking-tight">Jonathan Reed</h5>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-[0.2em] font-bold">CEO @ HALOSTUDIOS</p>
                  </div>
                </div>

                <p className="text-xl md:text-3xl font-medium leading-[1.4] mb-10 tracking-tight text-zinc-100">
                  "Xtract didn't just rebuild our site; they rebuilt our conversion funnel. We saw a <span className="text-emerald-400 font-bold">140% increase in lead quality</span> within the first two weeks post-launch."
                </p>

                <div className="flex gap-1.5">
                  {[1,2,3,4,5].map(s => <div key={s} className="w-5 h-0.5 bg-purple-500/60 rounded-full" />)}
                </div>
             </div>
          </div>

          <div className="lg:w-[300px] shrink-0 flex flex-col gap-6">
            <div className="flex items-center gap-2 px-4 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <h4 className="text-zinc-100 uppercase tracking-[0.3em] font-bold text-[9px]">Social Proof</h4>
            </div>
            <div className="space-y-3">
              <div className="p-5 rounded-[20px] bg-zinc-900/40 border border-dashed border-white/10 flex items-center justify-between group cursor-default transition-all hover:border-white/20">
                 <span className="text-zinc-500 text-xs font-medium">Coming Soon</span>
                 <span className="text-[8px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 font-bold uppercase tracking-widest">Writing...</span>
              </div>
              <div className="p-5 rounded-[20px] bg-zinc-900/20 border border-dashed border-white/[0.05] flex items-center justify-between opacity-50">
                 <span className="text-zinc-600 text-xs font-medium">Coming Soon</span>
                 <span className="text-[8px] bg-zinc-900 px-2 py-1 rounded text-zinc-500 font-bold uppercase tracking-widest">Queue</span>
              </div>
              <div className="p-5 rounded-[20px] bg-zinc-900/10 border border-dashed border-white/[0.03] flex items-center justify-between opacity-30">
                 <span className="text-zinc-700 text-xs font-medium">Coming Soon</span>
                 <span className="text-[8px] bg-zinc-900 px-2 py-1 rounded text-zinc-600 font-bold uppercase tracking-widest">Queue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};