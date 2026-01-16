import React from 'react';
import { Layout, Smartphone, Search, BarChart3, Cloud, Palette } from 'lucide-react';

const items = [
  { icon: <Layout className="w-5 h-5" />, label: "Custom UI/UX Architecture" },
  { icon: <Smartphone className="w-5 h-5" />, label: "Mobile-First Optimization" },
  { icon: <Search className="w-5 h-5" />, label: "Advanced SEO Framework" },
  { icon: <Cloud className="w-5 h-5" />, label: "Global Edge Hosting" },
  { icon: <Palette className="w-5 h-5" />, label: "Brand Visual System" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Conversion Tracking" },
];

export const Deliverables: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration to fill space subtly */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto px-10 text-center">
        <div className="inline-flex items-center gap-2 mb-8 justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <h3 className="text-white font-bold tracking-[0.3em] uppercase text-[10px]">Deliverables</h3>
        </div>
        
        <h4 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Everything you need to <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">dominate your niche.</span>
        </h4>
        
        <p className="text-zinc-500 mb-20 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We don't build features. We build solutions. Every Xtract project includes our proprietary growth-stack, ensuring you're ready to scale from day one.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center p-8 rounded-[32px] bg-zinc-900/30 border border-white/5 hover:border-emerald-500/20 hover:bg-zinc-900/50 transition-all duration-500 group cursor-default hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
            >
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-zinc-800 transition-all duration-300 shadow-xl mb-6 relative overflow-hidden">
                {/* Micro-interaction green glow */}
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Fix: Cast item.icon to React.ReactElement<any> to allow injecting className via cloneElement */}
                {React.cloneElement(item.icon as React.ReactElement<any>, { 
                  className: "w-6 h-6 text-emerald-500/60 group-hover:text-emerald-400 transition-colors relative z-10" 
                })}
              </div>
              
              <span className="font-bold text-lg text-zinc-400 group-hover:text-white transition-colors tracking-tight">
                {item.label}
              </span>
              
              {/* Subtle green underline effect */}
              <div className="w-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent group-hover:w-full transition-all duration-700 mt-4 opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};