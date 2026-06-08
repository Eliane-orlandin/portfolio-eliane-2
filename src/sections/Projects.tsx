import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import type { ProjectType } from '../data/projects';
import type { TranslationType } from '../data/translations';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface ProjectsProps {
  language: 'pt' | 'en';
  t: TranslationType;
}

export default function Projects({ language, t }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile'>('all');

  const categories = [
    { id: 'all', label: t.projects.all },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Fullstack' },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading m-0 mb-4 text-text-title">
            {t.projects.title}
          </h2>
          <p className="text-base sm:text-lg text-text-body max-w-xl mx-auto mb-6">
            {t.projects.subtitle}
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer relative ${
                filter === cat.id
                  ? 'text-white'
                  : 'text-text-body hover:text-text-title border border-border-card bg-bg-card'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
              {filter === cat.id && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectType) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group flex flex-col rounded-3xl bg-bg-card border border-border-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-video bg-slate-100 border-b border-border-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover ${project.imageAlign === 'top' ? 'object-top' : project.imageAlign === 'bottom' ? 'object-bottom' : 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-hover hover:scale-110 transition-all shadow-lg"
                      title={t.projects.viewCode}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-hover hover:scale-110 transition-all shadow-lg flex items-center justify-center"
                        title="LinkedIn Post"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-hover hover:scale-110 transition-all shadow-lg"
                        title={t.projects.viewLive}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Wrap */}
                <div className="flex-1 p-6 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight font-heading m-0 mb-2.5 text-text-title group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-body line-clamp-3 mb-6">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-bg-base text-text-body border border-border-card"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-text-body text-lg">{t.projects.noProjects}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
