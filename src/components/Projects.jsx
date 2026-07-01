import React, { useState } from 'react';
import { ArrowRight, Code, Sparkles, CheckCircle } from 'lucide-react';
import ProjectShowcaseModal from './ProjectShowcaseModal.jsx';
import { portfolioData } from '../portfolioData.js';

export default function Projects({ syntaxTheme }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalViewMode, setModalViewMode] = useState('demo');
  const [archiveSuccess, setArchiveSuccess] = useState(false);

  const { projects } = portfolioData;

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
    <section className="py-20 md:py-24 px-6 md:px-12 bg-surface-muted/70 border-t border-b border-border" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-end mb-12">
          <div className="flex-1">
            <div className="section-pill mb-4"><Sparkles className="h-3 w-3" />Selected work</div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-text leading-tight">
              Featured <span className={`bg-gradient-to-r ${syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' : syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' : 'from-emerald-600 to-emerald-800'} bg-clip-text text-transparent`}>projects</span>
            </h2>
            <p className="text-sm text-text-secondary max-w-xl mt-4 font-sans font-normal leading-relaxed">
              A portfolio of production-minded solutions crafted for reliability, performance, and a calm, modern user experience.
            </p>
          </div>

          <div className="section-shell rounded-[1.5rem] p-6">
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

        <div className="grid md:grid-cols-2 gap-8" id="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-surface rounded-[1.5rem] overflow-hidden border border-border hover:border-indigo-300/80 dark:hover:border-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="aspect-video overflow-hidden relative">
                {project.image ? (
                  <img alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[5%] group-hover:grayscale-0" src={project.image} referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <span className="text-indigo-300 dark:text-indigo-400 font-sans text-xs uppercase tracking-wider font-bold">Preview</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-85" />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`px-3 py-1 border rounded-full font-sans text-[10px] uppercase font-bold tracking-wider ${badgeColors[tag] || 'text-text-secondary bg-surface-muted border-border/80'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-sans font-extrabold text-text mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p
                  className="text-sm text-text-secondary font-normal leading-relaxed mb-6 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-h-16 group-hover:max-h-[24rem]"
                  style={{ display: '-webkit-box', WebkitLineClamp: 10, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <button onClick={() => handleOpenPlayground(project, 'demo')} className="flex-1 py-3 bg-surface-hover hover:bg-indigo-600 text-text hover:text-white rounded-xl font-sans text-xs uppercase tracking-wider font-bold border border-border hover:border-transparent transition-all cursor-pointer duration-300 active:scale-95 text-center shadow-sm">
                    Live Demo
                  </button>
                  <button onClick={() => handleOpenPlayground(project, 'code')} title="View source blueprint" className="p-3 bg-surface-hover hover:bg-slate-200 border border-border rounded-xl text-text-secondary hover:text-slate-950 transition-all cursor-pointer active:scale-95 shadow-sm">
                    <Code className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectShowcaseModal project={selectedProject} viewMode={modalViewMode} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
