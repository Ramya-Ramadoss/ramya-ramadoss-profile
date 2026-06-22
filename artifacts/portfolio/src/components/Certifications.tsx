import React from 'react';
import { motion } from 'framer-motion';

export function Certifications() {
  const certs = [
    { title: "Coming Soon", issuer: "To be announced", date: "-" },
    { title: "Coming Soon", issuer: "To be announced", date: "-" },
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Certifications</h2>
          <div className="h-1 w-20 bg-primary glow-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl border border-dashed border-muted-foreground/30 opacity-70"
            >
              <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
              <div className="text-xs font-mono text-primary">{cert.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
