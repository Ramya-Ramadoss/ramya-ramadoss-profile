import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Trophy } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Achievements & Leadership</h2>
          <div className="h-1 w-20 bg-primary glow-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profile.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl flex items-start gap-4"
            >
              <div className="p-2 bg-secondary/30 rounded-lg text-primary mt-1">
                <Trophy className="w-5 h-5" />
              </div>
              <p className="text-foreground text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
