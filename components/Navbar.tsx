
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div 
          className="flex items-center group cursor-pointer"
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
          aria-label="Back to top"
        >
          {/* 
              LOGO CONTAINER 
              To use your own logo PNG:
              1. Upload your PNG to the root folder as 'logo.png'
              2. Uncomment the <img> tag below and remove the text container
          */}
          <div className="flex items-center gap-3">
            {/* <img src="./logo.png" alt="Xtract Logo" className="h-8 md:h-9 w-auto object-contain" /> */}
            
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white rounded-[4px] flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                 <span className="text-black font-black text-base leading-none">X</span>
              </div>
              <span className="text-white font-black text-xl tracking-[-0.05em] uppercase">
                XTRACT
              </span>
            </div>
          </div>
        </div>

        <button 
          data-cal-link="aditya-9ekae9/project-scope-call"
          data-cal-namespace="project-scope-call"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          className="relative group overflow-hidden px-5 py-2 bg-white text-black text-sm font-bold rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-95"
        >
          <span className="relative z-10">Book a Call</span>
          <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </nav>
  );
};
