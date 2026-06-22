import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Education</h2>
          <div className="h-1 w-20 bg-primary glow-primary rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-8 max-w-3xl border-l-4 border-l-primary"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{profile.education.institution}</h3>
              <p className="text-lg text-primary mb-4">{profile.education.degree}</p>
              
              <div className="flex flex-wrap gap-4 text-sm font-mono text-muted-foreground">
                <div className="bg-secondary/20 px-3 py-1 rounded">
                  CGPA: <span className="text-foreground">{profile.education.cgpa}</span>
                </div>
                <div className="bg-secondary/20 px-3 py-1 rounded">
                  Graduation: <span className="text-foreground">{profile.education.graduation}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
