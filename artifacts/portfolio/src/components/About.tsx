import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">System.init<span className="text-primary">()</span></h2>
          <div className="h-1 w-20 bg-primary glow-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/50 relative flex items-center justify-center glow-primary bg-secondary/20 p-2 mb-8"
            >
              <div className="w-full h-full rounded-full bg-background overflow-hidden border border-border flex items-center justify-center text-muted-foreground text-sm font-mono relative group">
                <span className="group-hover:opacity-0 transition-opacity">avatar.png</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {profile.about.traits.map((trait, idx) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-4 py-2 rounded-full glass-card text-xs font-mono text-primary"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed mb-12"
            >
              {profile.about.bio}
            </motion.p>

            <div>
              <h3 className="text-xl font-bold mb-6 font-mono text-foreground">Current Runtime Processes</h3>
              <div className="space-y-6">
                {profile.about.roadmap.map((item, idx) => (
                  <motion.div
                    key={item.topic}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex justify-between text-sm font-mono mb-2">
                      <span className="text-muted-foreground">{item.topic}</span>
                      <span className="text-primary">{item.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary glow-primary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
