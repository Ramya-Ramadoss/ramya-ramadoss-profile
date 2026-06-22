import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 4,    suffix: '',  label: 'Projects Built',   prefix: '' },
  { value: 8.58, suffix: '',  label: 'CGPA at VIT',      prefix: '' },
  { value: 10,   suffix: '+', label: 'Tech Skills',      prefix: '' },
  { value: 1,    suffix: '',  label: 'Industry Internship', prefix: '' },
];

function CountUp({ target, suffix, prefix, decimals = 0 }: { target: number; suffix: string; prefix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count === 0 ? '0' : count.toFixed(decimals)}{suffix}
    </span>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative py-12 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(93,60,100,0.08) 0%, rgba(211,145,176,0.06) 50%, rgba(93,60,100,0.08) 100%)',
          borderTop: '1px solid rgba(211,145,176,0.1)',
          borderBottom: '1px solid rgba(211,145,176,0.1)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(211,145,176,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-2">
              <div
                className="text-4xl md:text-5xl font-bold font-sans tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #D391B0 0%, #BA6E8F 60%, #9F6496 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 12px rgba(211,145,176,0.5))',
                }}
              >
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  decimals={s.value % 1 !== 0 ? 2 : 0}
                />
              </div>
              <motion.div
                className="absolute -inset-2 rounded-full"
                animate={inView ? {
                  boxShadow: ['0 0 0px rgba(211,145,176,0)', '0 0 20px rgba(211,145,176,0.15)', '0 0 0px rgba(211,145,176,0)'],
                } : {}}
                transition={{ delay: i * 0.12 + 0.8, duration: 1.5, ease: 'easeInOut' }}
              />
            </div>
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-primary to-transparent mb-2 opacity-60" />
            <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
