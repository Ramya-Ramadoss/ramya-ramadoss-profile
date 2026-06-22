import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ExternalLink, ImagePlus, ChevronDown } from 'lucide-react';

function StatusBadge({ status }: { status: 'completed' | 'ongoing' }) {
  const isCompleted = status === 'completed';
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold tracking-wide uppercase"
      style={{
        background: isCompleted ? 'rgba(16,185,129,0.18)' : 'rgba(251,191,36,0.18)',
        border: `1px solid ${isCompleted ? 'rgba(16,185,129,0.4)' : 'rgba(251,191,36,0.4)'}`,
        color: isCompleted ? '#6ee7b7' : '#fcd34d',
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{
          background: isCompleted ? '#6ee7b7' : '#fcd34d',
          boxShadow: isCompleted ? '0 0 5px rgba(110,231,183,0.7)' : '0 0 5px rgba(252,211,77,0.7)',
        }}
      />
      {isCompleted ? 'Completed' : 'Ongoing'}
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[11px] tracking-wide"
      style={{
        background: 'rgba(12,4,32,0.65)',
        border: '1px solid rgba(211,145,176,0.2)',
        backdropFilter: 'blur(8px)',
        color: 'rgba(211,145,176,0.75)',
      }}
    >
      {category}
    </span>
  );
}

function ProjectCard({ project, idx }: { project: typeof profile.projects[0]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.55 }}
      className="group rounded-xl overflow-hidden flex flex-col h-full"
      style={{
        background: 'rgba(15, 7, 30, 0.75)',
        border: '1px solid rgba(211,145,176,0.12)',
        backdropFilter: 'blur(16px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(211,145,176,0.3)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(211,145,176,0.08)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(211,145,176,0.12)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
      data-testid={`card-project-${idx}`}
    >
      {/* Image area */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#0a0418]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: 'linear-gradient(160deg, rgba(93,60,100,0.18) 0%, rgba(12,4,32,0.6) 100%)' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(211,145,176,0.06)', border: '1px dashed rgba(211,145,176,0.2)' }}
            >
              <ImagePlus className="w-5 h-5 text-primary/30" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground/35 tracking-widest uppercase">
              project image
            </span>
            <motion.div
              className="absolute left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(211,145,176,0.2), transparent)' }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
            />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0418]/95 via-[#0a0418]/20 to-transparent" />

        {/* Badges over image */}
        <div className="absolute top-3 left-3">
          <CategoryBadge category={project.category} />
        </div>
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-bold text-foreground leading-snug mb-2"
          style={{ textShadow: '0 0 24px rgba(211,145,176,0.1)' }}
        >
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-5 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags — show first 4 + overflow count */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 font-mono text-[11px] rounded"
              style={{
                background: 'rgba(93,60,100,0.25)',
                border: '1px solid rgba(211,145,176,0.1)',
                color: 'rgba(211,145,176,0.7)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span
              className="px-2 py-0.5 font-mono text-[11px] rounded"
              style={{
                background: 'rgba(93,60,100,0.15)',
                border: '1px solid rgba(211,145,176,0.08)',
                color: 'rgba(211,145,176,0.4)',
              }}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* View Details link */}
        <a
          href={project.link}
          className="inline-flex items-center gap-2 font-mono text-xs group/link transition-colors duration-200"
          style={{ color: 'rgba(211,145,176,0.55)' }}
          data-testid={`link-project-${idx}`}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#D391B0'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(211,145,176,0.55)'; }}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View Details
          <ChevronDown className="w-3 h-3 rotate-[-90deg] group-hover/link:translate-x-0.5 transition-transform" />
        </a>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
