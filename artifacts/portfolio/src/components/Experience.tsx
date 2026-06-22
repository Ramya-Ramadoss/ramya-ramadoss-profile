import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Experience</h2>
          <div className="h-1 w-20 bg-primary glow-primary rounded-full" />
        </motion.div>

        <div className="relative border-l border-primary/20 pl-8 ml-4 md:ml-8 space-y-12">
          {profile.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary glow-primary" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="hidden md:inline text-muted-foreground">•</span>
                <span className="text-primary font-medium">{exp.company}</span>
              </div>
              <div className="text-sm font-mono text-muted-foreground mb-4">{exp.period}</div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
