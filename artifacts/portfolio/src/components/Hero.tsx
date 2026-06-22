import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';
import { ChevronDown, Download } from 'lucide-react';
import { AuroraBg } from './AuroraBg';
import { ProfileAvatar } from './ProfileAvatar';

export function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % profile.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden py-20 px-6 md:px-12">
      {/* Aurora gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <AuroraBg />
      </div>

      {/* Two-column layout: text + neural sphere */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT — text content */}
        <div className="flex-1 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-2"
          >
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-primary/70 mb-4 block">
              — Portfolio 2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mb-4 relative"
          >
            <div className="absolute -left-4 -top-6 opacity-[0.04] select-none pointer-events-none">
              <span className="text-[7rem] md:text-[10rem] font-bold text-primary leading-none">RAMYA</span>
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-foreground glow-text leading-[1.0]">
              {profile.name.split(' ')[0]}<br />
              <span style={{
                background: 'linear-gradient(135deg, #D391B0 0%, #BA6E8F 55%, #9F6496 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {profile.name.split(' ')[1]}
              </span>
            </h1>
          </motion.div>

          <div className="h-10 mb-6 flex items-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTagline}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
                className="absolute text-lg md:text-2xl font-mono text-primary/90 font-medium"
              >
                <span className="text-primary/40 mr-2">&gt;</span>
                {profile.taglines[currentTagline]}
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse align-middle" />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              data-testid="button-view-work"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg glow-primary hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
            >
              View My Work
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#"
              data-testid="button-download-resume"
              className="px-8 py-4 bg-transparent border border-primary/30 text-foreground font-bold rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all flex items-center justify-center gap-2"
            >
              Download Resume
              <Download className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-16 flex items-center gap-3 text-muted-foreground/50"
          >
            <div className="flex flex-col gap-1">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="h-px bg-primary/40"
                  style={{ width: 8 + i * 8 }}
                  animate={{ opacity: [0.3, 1, 0.3], x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase">Scroll to explore</span>
          </motion.div>
        </div>

        {/* RIGHT — profile avatar with orbits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: 'easeOut' }}
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
        >
          <ProfileAvatar />
        </motion.div>
      </div>
    </section>
  );
}
