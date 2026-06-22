import React from 'react';
import { User, Code2, Cpu, FolderOpen, Briefcase, GraduationCap, FlaskConical, Award, Mail } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { id: 'hero', icon: User, label: 'Top' },
  { id: 'about', icon: Code2, label: 'About' },
  { id: 'skills', icon: Cpu, label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'research', icon: FlaskConical, label: 'Research' },
  { id: 'achievements', icon: Award, label: 'Achievements' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export function Sidebar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-20 bg-background/80 backdrop-blur-xl border-r border-border/50 z-50 hidden md:flex flex-col items-center py-8">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-12 glow-primary text-primary font-bold text-xl border border-primary/50">
        R
      </div>
      
      <div className="flex-1 flex flex-col items-center gap-6 w-full">
        {navItems.map((item) => (
          <Tooltip key={item.id} delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                onClick={() => scrollTo(item.id)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all group"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" className="ml-2 font-mono text-xs bg-secondary border-secondary text-foreground">
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
}
