import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Tech Stack</h2>
          <div className="h-1 w-20 bg-primary glow-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {profile.skills.map((category, catIdx) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-foreground mb-6 font-mono flex items-center gap-2"
              >
                <span className="text-primary">#</span> {category.category}
              </motion.h3>
              
              <div className="space-y-6">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.1 }}
                  >
                    <div className="flex justify-between text-sm font-mono mb-2">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary/70">{skill.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary"
                        style={{ boxShadow: "0 0 10px rgba(211, 145, 176, 0.5)" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
