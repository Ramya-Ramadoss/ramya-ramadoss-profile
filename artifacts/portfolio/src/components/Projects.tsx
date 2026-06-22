import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ExternalLink, ImagePlus } from 'lucide-react';

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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-xl overflow-hidden flex flex-col h-full group hover:border-primary/50 transition-colors"
              data-testid={`card-project-${idx}`}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-[#160a28]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 border-b border-primary/10">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(211,145,176,0.08)', border: '1px dashed rgba(211,145,176,0.25)' }}>
                      <ImagePlus className="w-6 h-6 text-primary/40" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">
                      Add project image
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/30">
                      profile.ts → projects[{idx}].image
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0420]/80 via-transparent to-transparent" />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-4 leading-snug">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-primary transition-colors mt-0.5 shrink-0"
                    aria-label={`View ${project.title}`}
                    data-testid={`link-project-${idx}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-secondary/40 text-primary-foreground font-mono text-xs rounded-md border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
