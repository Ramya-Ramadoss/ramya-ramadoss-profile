import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Featured Work</h2>
          <div className="h-1 w-20 bg-primary glow-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-xl p-8 flex flex-col h-full group hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors pr-4">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="text-muted-foreground hover:text-primary transition-colors mt-1 shrink-0"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-muted-foreground mb-8 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/40 text-primary-foreground font-mono text-xs rounded-md border border-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
