import React from 'react';
import { profile } from '../data/profile';
import { Sidebar } from '../components/Sidebar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Research } from '../components/Research';
import { Certifications } from '../components/Certifications';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';

export default function Portfolio() {
  return (
    <div className="bg-background text-foreground min-h-screen dark font-sans">
      <Sidebar />
      <main className="ml-0 md:ml-20 overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Research />
        <Certifications />
        <Achievements />
        <Contact />
        <footer className="py-8 text-center border-t border-border/50 text-muted-foreground font-mono text-sm px-6">
          <p>© 2026 {profile.name} · Built with passion for Artificial Intelligence, Research, and Innovation.</p>
        </footer>
      </main>
    </div>
  );
}
