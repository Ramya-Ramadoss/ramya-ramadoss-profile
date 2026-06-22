import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ExternalLink, ImagePlus } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';

function ProjectCard({ project, idx }: { project: typeof profile.projects[0]; idx: number }) {
  const { ref, shineRef, onMouseMove, onMouseLeave } = useTilt(10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.12, duration: 0.6 }}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-testid={`card-project-${idx}`}
        className="relative rounded-xl overflow-hidden flex flex-col h-full cursor-default"
        style={{
          background: 'rgba(22, 10, 40, 0.7)',
          border: '1px solid rgba(211,145,176,0.15)',
          backdropFilter: 'blur(16px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Holographic shine overlay */}
        <div
          ref={shineRef}
          className="absolute inset-0 z-20 pointer-events-none rounded-xl transition-opacity duration-300"
          style={{ opacity: 0 }}
        />

        {/* Glowing border on hover — CSS only */}
        <div
          className="absolute inset-0 z-10 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: '0 0 0 1px rgba(211,145,176,0.3) inset, 0 0 40px rgba(211,145,176,0.06) inset' }}
        />

        {/* Project image */}
        <div className="relative w-full aspect-video overflow-hidden bg-[#0e0720]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(211,145,176,0.07)', border: '1px dashed rgba(211,145,176,0.22)' }}
              >
                <ImagePlus className="w-6 h-6 text-primary/35" />
              </div>
              <span className="font-mono text-xs text-muted-foreground/40 tracking-widest uppercase">
                Add project image
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/25">
                profile.ts → projects[{idx}].image
              </span>
              {/* subtle animated scan line in placeholder */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(211,145,176,0.25), transparent)' }}
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0420]/90 via-transparent to-transparent" />
        </div>

        {/* Card body */}
        <div className="p-7 flex flex-col flex-1">
          {/* Number badge */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 pr-4">
              <span className="font-mono text-xs text-primary/40 tracking-widest">0{idx + 1}</span>
              <h3 className="text-lg font-bold text-foreground leading-snug mt-1"
                style={{ textShadow: '0 0 30px rgba(211,145,176,0.12)' }}
              >
                {project.title}
              </h3>
            </div>
            <a
              href={project.link}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all shrink-0 mt-4"
              aria-label={`View ${project.title}`}
              data-testid={`link-project-${idx}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-primary/8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 font-mono text-xs rounded-md"
                style={{
                  background: 'rgba(93,60,100,0.3)',
                  border: '1px solid rgba(211,145,176,0.12)',
                  color: 'rgba(211,145,176,0.8)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary/60 mb-3 block">— Selected Projects</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Featured Work</h2>
          <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent" style={{ boxShadow: '0 0 12px rgba(211,145,176,0.4)' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
