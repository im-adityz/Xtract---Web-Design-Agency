import React from 'react';
import { Target, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: <Target className="w-5 h-5 text-purple-400" />,
    title: "Conversion-First Strategy",
    description: "Most agencies focus on how it looks. We focus on who's buying. Every pixel is calculated to guide your user toward the checkout or contact button.",
    tag: "ROI Focused"
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-400" />,
    title: "Light-Speed Engineering",
    description: "Every millisecond of latency costs you money. Our sites are engineered with the latest Vercel-optimized tech stacks for near-instant load times.",
    tag: "99+ Lighthouse"
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    title: "The Xtract Guarantee",
    description: "We don't just deliver code; we deliver results. If your site doesn't outperform your current benchmarks within 90 days, we work until it does.",
    tag: "Risk Free"
  }
];

export const ValueProp: React.FC = () => {
  return (
    <section id="value" className="relative py-20 overflow-hidden border-t border-white/5">
      {/* Section-specific Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-10">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <h2 className="text-white font-bold tracking-[0.3em] uppercase text-[10px]">Value Prop</h2>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
            Average is the enemy <br />
            <span className="text-zinc-500">of your bottom line.</span>
          </h3>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            In a digital world, your website is your best salesperson. If it’s slow, confusing, or just "okay," you're leaving hundreds of thousands on the table.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[32px] bg-zinc-900/30 border border-white/5 transition-all duration-500 hover:bg-zinc-900/50 hover:border-white/20 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
            >
              {/* Pop-up Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.4)] z-20 flex items-center gap-2">
                {v.tag}
                <ArrowRight className="w-3 h-3" />
              </div>

              {/* Animated Border Beam (Only visible on hover) */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
                 <div className="absolute inset-0 border border-white/20 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer-horizontal_2s_infinite]" />
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
              
              <div className="relative z-10">
                <div className="mb-8 p-3 bg-zinc-800/50 border border-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:border-white/20 group-hover:bg-zinc-800 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                  {v.title}
                </h4>
                <p className="text-zinc-500 text-[15px] leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {v.description}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shimmer-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};