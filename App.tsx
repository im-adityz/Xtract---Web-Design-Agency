
import React, { useState, useEffect, useCallback } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ValueProp } from './components/ValueProp';
import { Deliverables } from './components/Deliverables';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { BackgroundEffects } from './components/ui/BackgroundEffects';
import { CursorGlow } from './components/ui/CursorGlow';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cal.com initialization
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "project-scope-call", { origin: "https://app.cal.com" });
      Cal.ns["project-scope-call"]("ui", {
        "theme": "dark",
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-hidden">
      <BackgroundEffects />
      <CursorGlow x={mousePos.x} y={mousePos.y} />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ValueProp />
          <Deliverables />
          <Stats />
          <Pricing />
          <Testimonials />
          <CTA />
        </main>
        
        <footer className="py-12 border-t border-white/5 text-center text-sm text-zinc-500">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Xtract Digital Agency. All rights reserved.</p>
            <p className="mt-2 text-zinc-600">Built for speed, engineered for conversion.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
