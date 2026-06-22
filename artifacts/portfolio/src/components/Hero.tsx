import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';
import { ChevronDown, Download } from 'lucide-react';

export function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % profile.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 relative"
        >
          {/* Echo text behind */}
          <div className="absolute -inset-x-20 -inset-y-10 flex items-center justify-center opacity-5 select-none pointer-events-none">
            <h1 className="text-[8rem] md:text-[12rem] font-bold text-primary whitespace-nowrap">RAMYA</h1>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground glow-text">
            {profile.name}
          </h1>
        </motion.div>

        <div className="h-12 md:h-16 mb-8 flex items-center justify-center w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute text-xl md:text-3xl font-mono text-primary font-medium"
            >
              {profile.taglines[currentTagline]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
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
            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg glow-primary hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            View My Work
            <ChevronDown className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-transparent border border-primary/30 text-foreground font-bold rounded-lg hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
          >
            Download Resume
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
