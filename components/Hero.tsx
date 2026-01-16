
import React from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-64 px-6 min-h-screen flex flex-col items-center text-center overflow-hidden">
      {/* Background Cinematic Light Beam Animation */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col justify-between items-center opacity-[0.15]">
          <div className="w-[150%] h-[40%] bg-blue-500/20 blur-[120px] rounded-[100%] -translate-y-1/2 animate-[beam-shift_10s_infinite_alternate]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_100px_rgba(147,197,253,0.5)] opacity-50" />
          <div className="w-[150%] h-[40%] bg-blue-600/20 blur-[120px] rounded-[100%] translate-y-1/2 animate-[beam-shift_12s_infinite_alternate-reverse]" />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-40 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-400 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        New: Performance Audit Engine v2.0
      </div>

      <h1 className="relative z-40 text-5xl md:text-8xl font-bold tracking-tight mb-12 max-w-6xl leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
        We build websites that <br />
        <span className="inline-block px-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic pr-8">actually attract customers.</span>
      </h1>

      <p className="relative z-40 text-zinc-400 text-lg md:text-xl max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
        Stop losing money to average design. Xtract engineers high-conversion web experiences that turn idle visitors into loyal revenue.
      </p>

      <div className="relative z-40 flex flex-col sm:flex-row gap-4 mb-28 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
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
      </div>

      {/* Floating Browser Preview Visual - Adjusted margins and z-index */}
      <div className="relative z-10 w-full max-w-5xl mx-auto group animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none" />
        
        <div className="relative rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01] group-hover:-translate-y-2">
          <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <div className="bg-black/20 rounded px-12 py-1 text-[10px] text-zinc-500 font-medium">xtract.agency/preview</div>
            <div className="w-10" />
          </div>
          
          <div className="aspect-[16/9] p-8 grid grid-cols-12 gap-6 bg-black/40">
            <div className="col-span-8 space-y-4 text-left">
              <div className="h-8 w-3/4 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-4 w-full bg-white/5 rounded-lg" />
              <div className="h-4 w-5/6 bg-white/5 rounded-lg" />
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="h-32 bg-purple-500/10 rounded-2xl border border-purple-500/20 flex flex-col items-center justify-center">
                   <div className="text-purple-400 font-bold text-2xl">+140%</div>
                   <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Conversion</div>
                </div>
                <div className="h-32 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex flex-col items-center justify-center">
                   <div className="text-blue-400 font-bold text-2xl">0.4s</div>
                   <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Load Time</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center p-6 relative overflow-hidden group/card">
               <MousePointer2 className="w-8 h-8 text-white/20 animate-bounce" />
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent" />
            </div>
          </div>
        </div>

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[80px] -z-10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[80px] -z-10 rounded-full" />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-30deg); }
          40% { transform: translateX(250%) skewX(-30deg); }
          100% { transform: translateX(250%) skewX(-30deg); }
        }
        @keyframes beam-shift {
          0% { transform: scale(1) translateX(-5%); opacity: 0.2; }
          100% { transform: scale(1.1) translateX(5%); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};
