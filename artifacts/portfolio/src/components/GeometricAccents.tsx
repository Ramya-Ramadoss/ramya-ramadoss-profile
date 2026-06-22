import React from 'react';
import { motion } from 'framer-motion';

export function GeometricAccents() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute top-16 right-16 opacity-15"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <polygon
            points="60,4 112,34 112,86 60,116 8,86 8,34"
            stroke="rgba(211,145,176,0.8)"
            strokeWidth="1"
            fill="none"
          />
          <polygon
            points="60,18 98,40 98,80 60,102 22,80 22,40"
            stroke="rgba(186,110,143,0.5)"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-12 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <polygon
            points="45,3 84,25 84,65 45,87 6,65 6,25"
            stroke="rgba(211,145,176,0.7)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-8 opacity-8"
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="32" stroke="rgba(211,145,176,0.6)" strokeWidth="0.8" strokeDasharray="4 6" fill="none" />
          <circle cx="35" cy="35" r="20" stroke="rgba(159,100,150,0.4)" strokeWidth="0.6" fill="none" />
          <circle cx="35" cy="35" r="3" fill="rgba(211,145,176,0.6)" />
        </svg>
      </motion.div>

      <div className="absolute top-32 left-6 flex flex-col gap-1.5 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{ width: 40 + i * 8 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="absolute bottom-32 right-6 flex flex-col gap-1.5 opacity-20 items-end">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="h-px bg-gradient-to-l from-transparent via-primary to-transparent"
            style={{ width: 40 + i * 8 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.18 + 1.2, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="rgba(211,145,176,1)" strokeWidth="0.5" strokeDasharray="2 12" />
          <circle cx="300" cy="300" r="200" stroke="rgba(186,110,143,1)" strokeWidth="0.5" strokeDasharray="2 8" />
          <circle cx="300" cy="300" r="120" stroke="rgba(159,100,150,1)" strokeWidth="0.5" strokeDasharray="2 6" />
        </svg>
      </motion.div>
    </div>
  );
}


export function SectionGlow({ side = 'left' }: { side?: 'left' | 'right' }) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        [side]: -120,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: side === 'left'
          ? 'radial-gradient(circle, rgba(211,145,176,0.07) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(93,60,100,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      aria-hidden="true"
    />
  );
}
