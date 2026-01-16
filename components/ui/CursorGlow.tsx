
import React from 'react';

interface CursorGlowProps {
  x: number;
  y: number;
}

export const CursorGlow: React.FC<CursorGlowProps> = ({ x, y }) => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-30 opacity-40 transition-opacity duration-300"
      style={{
        background: `radial-gradient(450px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.08), transparent 80%)`
      }}
    />
  );
};
