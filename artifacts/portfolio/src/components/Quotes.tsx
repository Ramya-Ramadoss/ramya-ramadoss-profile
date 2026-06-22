import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

export function Quotes() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % profile.quotes.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const quote = profile.quotes[current];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Subtle glow behind the card */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(211,145,176,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Decorative quote mark */}
        <div
          className="absolute -top-6 -left-4 font-serif leading-none select-none pointer-events-none"
          style={{ fontSize: '8rem', color: 'rgba(211,145,176,0.06)', lineHeight: 1 }}
          aria-hidden="true"
        >
          "
        </div>

        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(15, 7, 30, 0.6)',
            border: '1px solid rgba(211,145,176,0.13)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(211,145,176,0.4), transparent)' }}
          />

          <div className="px-10 py-12 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                <p
                  className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground/90 italic"
                >
                  "{quote.text}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8" style={{ background: 'rgba(211,145,176,0.3)' }} />
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(211,145,176,0.6)' }}>
                    {quote.author}
                  </span>
                  <div className="h-px w-8" style={{ background: 'rgba(211,145,176,0.3)' }} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {profile.quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    background: i === current
                      ? 'rgba(211,145,176,0.8)'
                      : 'rgba(211,145,176,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-label={`Go to quote ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
