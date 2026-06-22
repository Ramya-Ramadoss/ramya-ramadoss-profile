import React from 'react';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 flex flex-col justify-center relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-text text-foreground tracking-tight">
            Let's Build<br />Something
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            {profile.contact.location}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
            { label: "LinkedIn", value: "Connect", href: profile.contact.linkedin },
            { label: "GitHub", value: "Follow", href: profile.contact.github },
            { label: "LeetCode", value: "View Profile", href: profile.contact.leetcode }
          ].map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-2 hover:glow-primary transition-all duration-300 group"
            >
              <span className="text-muted-foreground font-mono text-sm">{item.label}</span>
              <span className="text-primary font-bold text-xl group-hover:text-foreground transition-colors">{item.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
