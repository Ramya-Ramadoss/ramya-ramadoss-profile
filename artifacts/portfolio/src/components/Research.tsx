import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export function Research() {
  return (
    <section id="research" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Research Interests</h2>
          <div className="h-1 w-20 bg-primary glow-primary rounded-full" />
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {profile.research.map((interest, idx) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-6 py-3 glass-card rounded-lg text-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default text-lg"
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
