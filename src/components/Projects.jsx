import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code, Sparkles } from 'lucide-react';
import ProjectShowcaseModal from './ProjectShowcaseModal.jsx';
import { portfolioData } from '../portfolioData.js';
import { useAccent } from '../theme.js';

export default function Projects({ syntaxTheme }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalViewMode, setModalViewMode] = useState('demo');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const accent = useAccent(syntaxTheme);

  const { projects } = portfolioData;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener?.('change', updatePreference);
    return () => media.removeEventListener?.('change', updatePreference);
  }, []);

  const handleOpenPlayground = (project, mode) => {
    setSelectedProject(project);
    setModalViewMode(mode);
  };

  const badgeColors = {
    'Next.js': 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200/60 dark:border-indigo-800/50',
    'Redux': 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 border-purple-200/60 dark:border-purple-800/50',
    'Stripe': 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200/60 dark:border-emerald-800/50',
    'OpenAI API': 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 border-purple-200/60 dark:border-purple-800/50',
    'Node.js': 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200/60 dark:border-emerald-800/50',
    'Socket.io': 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200/60 dark:border-indigo-800/50',
    'React Native': 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200/60 dark:border-indigo-800/50',
    'Express': 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200/60 dark:border-emerald-800/50',
    'Mapbox': 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200/60 dark:border-emerald-800/50',
    'D3.js': 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200/60 dark:border-indigo-800/50',
    'IoT Systems': 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200/60 dark:border-emerald-800/50',
    'GraphQL': 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 border-purple-200/60 dark:border-purple-800/50',
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-surface-muted/70 border-t border-b border-border" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-end mb-12">
          <div className="flex-1">
            <div className="section-pill mb-4"><Sparkles className="h-3 w-3" />Selected work</div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-text leading-tight">
              Featured <span className={`bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}>projects</span>
            </h2>
            <p className="text-sm text-text-secondary max-w-xl mt-4 font-sans font-normal leading-relaxed">
              A portfolio of production-minded solutions crafted for reliability, performance, and a calm, modern user experience.
            </p>
          </div>

          <div className="section-shell rounded-[1.5rem] p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-text">4+</p>
                <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Launches</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-text">MERN</p>
                <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Stack</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-text">UI</p>
                <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Focus</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" id="projects-grid">
          {projects.map((project, index) => {
            const featured = index === 0;
            return (
              <motion.article
                key={project.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01, rotate: -0.4 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-[1.7rem] border border-border/80 bg-surface/85 p-0 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur ${featured ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  {project.image ? (
                    <img alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={project.image} referrerPolicy="no-referrer" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
                      <span className="text-indigo-300 dark:text-indigo-400 font-sans text-xs uppercase tracking-[0.35em] font-bold">Preview</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] ${badgeColors[tag] || 'text-white/80 border-white/25 bg-white/10'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-6 sm:p-7">
                  <h3 className="text-xl font-sans font-extrabold text-text mb-3">{project.title}</h3>
                  <p className="text-sm text-text-secondary font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <button onClick={() => handleOpenPlayground(project, 'demo')} className={`flex-1 rounded-2xl border border-border/80 bg-white/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-text transition-all hover:${accent.backgroundHover} hover:text-white hover:border-transparent active:scale-95 dark:bg-slate-900/70`}>
                      Live Demo
                    </button>
                    <button onClick={() => handleOpenPlayground(project, 'code')} title="View source blueprint" className="rounded-2xl border border-border/80 bg-surface-muted p-3 text-text-secondary transition-all hover:bg-surface-hover hover:text-text active:scale-95">
                      <Code className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectShowcaseModal project={selectedProject} viewMode={modalViewMode} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
