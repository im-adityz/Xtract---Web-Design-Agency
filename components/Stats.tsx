import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rotate-[15deg] scale-150" />
      </div>
      
      <div className="max-w-5xl mx-auto px-10 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <h3 className="text-white font-bold tracking-[0.3em] uppercase text-[10px]">The Cost of Inaction</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 md:gap-8 items-start">
          <div className="group relative py-10 px-6 transition-all duration-500 hover:-translate-y-2">
            <div className="text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-purple-400 transition-colors duration-500">$4.2B</div>
            <div className="text-zinc-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Lost Annually</div>
            <p className="text-zinc-500 text-sm leading-relaxed px-4">Revenue lost globally due to slow-loading mobile websites.</p>
            <div className="absolute inset-0 bg-purple-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          </div>
          
          <div className="relative group py-10 px-6 rounded-[32px] bg-white/[0.02] border border-white/[0.05] transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
            <div className="text-7xl font-bold text-red-500/80 mb-4 tracking-tighter group-hover:text-red-500 transition-colors duration-500">74%</div>
            <div className="text-zinc-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-4">User Bounce Rate</div>
            <p className="text-zinc-500 text-sm leading-relaxed">Visitors leave after 3 seconds of loading delay.</p>
            <div className="absolute inset-0 bg-red-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          </div>

          <div className="group relative py-10 px-6 transition-all duration-500 hover:-translate-y-2">
            <div className="text-7xl font-bold text-white mb-4 tracking-tighter group-hover:text-blue-400 transition-colors duration-500">-38%</div>
            <div className="text-zinc-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-4">Engagement Loss</div>
            <p className="text-zinc-500 text-sm leading-relaxed px-4">People stop engaging if the layout is unattractive.</p>
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          </div>
        </div>

        <div className="mt-16 p-12 rounded-[32px] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 inline-block w-full max-w-3xl transition-all duration-700 hover:border-white/10 hover:bg-white/[0.04]">
          <p className="text-xl italic text-zinc-400 leading-relaxed">
            "Your website isn't a digital business card. It's either your greatest growth asset or your biggest bottleneck. <span className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">Which one is it for you today?</span>"
          </p>
        </div>
      </div>
    </section>
  );
};