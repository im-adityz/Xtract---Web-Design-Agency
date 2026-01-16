import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
}

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;
    const connectionDistance = 150;
    const mouseRadius = 150;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const opacity = Math.random() * 0.5 + 0.1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5 + 0.5,
          opacity: opacity,
          baseOpacity: opacity
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const { x: mx, y: my } = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Dispersion Logic: Move away from mouse
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          // Apply a "push" force
          p.x += Math.cos(angle) * force * 4;
          p.y += Math.sin(angle) * force * 4;
          p.opacity = Math.min(1, p.baseOpacity + force * 0.5);
        } else {
          p.opacity = p.baseOpacity;
        }

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.4})`;
        ctx.fill();

        // Draw Connections (Constellation effect)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < connectionDistance) {
            const connOpacity = (1 - dist2 / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${connOpacity})`; // Purple-ish connections
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-black overflow-hidden animate-[hue-rotate_30s_infinite_linear]">
      {/* Dynamic Global Mesh Gradient System */}
      <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-purple-600/15 blur-[200px] rounded-full animate-[morph_30s_infinite_alternate] opacity-60 mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[100%] bg-blue-600/15 blur-[220px] rounded-full animate-[morph_40s_infinite_alternate-reverse] [animation-delay:4s] opacity-60 mix-blend-screen"></div>
      
      {/* Secondary Morphs for Depth */}
      <div className="absolute top-[30%] right-[-20%] w-[60%] h-[60%] bg-indigo-500/10 blur-[150px] rounded-full animate-[morph_25s_infinite_alternate-reverse] [animation-delay:10s] opacity-40 mix-blend-soft-light"></div>
      <div className="absolute bottom-[20%] left-[-20%] w-[50%] h-[50%] bg-cyan-500/10 blur-[130px] rounded-full animate-[morph_35s_infinite_alternate] [animation-delay:2s] opacity-30 mix-blend-screen"></div>

      {/* Global slow drifting overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]"></div>
      
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      <style>{`
        @keyframes morph {
          0% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%; transform: translate(15vw, 10vh) scale(1.2) rotate(10deg); }
          66% { border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%; transform: translate(-10vw, 20vh) scale(0.8) rotate(-15deg); }
          100% { border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%; transform: translate(10vw, -15vh) scale(1.1) rotate(5deg); }
        }
        @keyframes hue-rotate {
          from { filter: hue-rotate(0deg); }
          to { filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
