import React from 'react';

export function AuroraBg() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Translucent grid / graph-paper boxes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="rgba(211,145,176,0.09)"
              strokeWidth="1"
            />
          </pattern>
          <pattern id="grid-accent" x="0" y="0" width="192" height="192" patternUnits="userSpaceOnUse">
            <path
              d="M 192 0 L 0 0 0 192"
              fill="none"
              stroke="rgba(211,145,176,0.05)"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid-accent)" />
      </svg>

      {/* Subtle aurora glow blobs — stay behind grid */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', left: '-5%',
          width: '60vw', height: '55vh',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(186,110,143,0.22) 0%, rgba(93,60,100,0.08) 55%, transparent 80%)',
          filter: 'blur(80px)',
          zIndex: 0,
          animation: 'aurora1 22s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%', right: '-10%',
          width: '50vw', height: '60vh',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(93,60,100,0.28) 0%, rgba(159,100,150,0.08) 55%, transparent 80%)',
          filter: 'blur(90px)',
          zIndex: 0,
          animation: 'aurora2 28s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-5%', left: '25%',
          width: '45vw', height: '45vh',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(211,145,176,0.14) 0%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 0,
          animation: 'aurora3 18s ease-in-out infinite alternate',
        }}
      />

      {/* Vignette — darkens edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 85% 75% at 50% 45%, transparent 25%, rgba(12,4,32,0.82) 100%)',
          zIndex: 2,
        }}
      />
    </div>
  );
}
