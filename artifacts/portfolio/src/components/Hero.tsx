import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { AuroraBg } from './AuroraBg';

export function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % profile.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden py-20 px-6 md:px-16">
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <AuroraBg />
      </div>

      {/* Content — full width, centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start">

        {/* Open to Work badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full font-mono text-xs tracking-[0.25em] uppercase"
            style={{
              background: 'rgba(22, 10, 40, 0.7)',
              border: '1px solid rgba(211,145,176,0.3)',
              backdropFilter: 'blur(12px)',
              color: 'rgba(211,145,176,0.9)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: '#6ee7b7',
                boxShadow: '0 0 8px 2px rgba(110,231,183,0.6)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            Open to Work · 2026
          </span>
        </motion.div>

        {/* HELLO, I'M label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-sm tracking-[0.4em] uppercase mb-4"
          style={{ color: 'rgba(211,145,176,0.55)' }}
        >
          Hello, I'm
        </motion.p>

        {/* Big name */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mb-6 relative"
        >
          {/* Ghost watermark text */}
          <div className="absolute -left-2 -top-4 opacity-[0.035] select-none pointer-events-none leading-none">
            <span className="text-[8rem] md:text-[11rem] xl:text-[14rem] font-black text-primary tracking-tighter">
              {profile.name.split(' ')[0]}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl xl:text-[9rem] font-black tracking-tighter leading-[0.92] glow-text">
            {profile.name.split(' ')[0]}<br />
            <span style={{
              background: 'linear-gradient(135deg, #D391B0 0%, #BA6E8F 50%, #9F6496 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {profile.name.split(' ')[1]}
            </span>
          </h1>
        </motion.div>

        {/* Typewriter tagline */}
        <div className="h-10 mb-6 flex items-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTagline}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="absolute font-mono text-lg md:text-2xl font-medium"
              style={{ color: 'rgba(211,145,176,0.85)' }}
            >
              <span style={{ color: 'rgba(211,145,176,0.35)' }} className="mr-2">&gt;</span>
              {profile.taglines[currentTagline]}
              <span className="inline-block w-0.5 h-5 ml-1 align-middle animate-pulse" style={{ background: '#D391B0' }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
        >
          {profile.intro}
        </motion.p>

        {/* Social icon links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          {[
            { href: profile.contact.github, icon: Github, label: 'GitHub' },
            { href: profile.contact.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${profile.contact.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(22, 10, 40, 0.6)',
                border: '1px solid rgba(211,145,176,0.2)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(211,145,176,0.65)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(211,145,176,0.55)';
                (e.currentTarget as HTMLElement).style.color = '#D391B0';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(211,145,176,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(211,145,176,0.2)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(211,145,176,0.65)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
            </a>
          ))}
          <div className="w-px h-6 mx-1" style={{ background: 'rgba(211,145,176,0.15)' }} />
          <span className="font-mono text-xs" style={{ color: 'rgba(211,145,176,0.35)' }}>
            {profile.contact.location}
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
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
            className="px-8 py-4 bg-transparent font-bold rounded-lg transition-all flex items-center justify-center gap-2"
            style={{ border: '1px solid rgba(211,145,176,0.28)', color: 'inherit' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(211,145,176,0.08)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(211,145,176,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(211,145,176,0.28)';
            }}
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
          className="mt-20 flex items-center gap-3"
          style={{ color: 'rgba(211,145,176,0.3)' }}
        >
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="h-px"
                style={{ width: 8 + i * 8, background: 'rgba(211,145,176,0.4)' }}
                animate={{ opacity: [0.3, 1, 0.3], x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
