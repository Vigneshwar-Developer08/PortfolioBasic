import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, FileText, CheckCircle, User, Code2, FolderKanban, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../portfolioData.js';
import { useAccent } from '../theme.js';

export default function Hero({ syntaxTheme, onNavigate }) {
  const { developer, meta } = portfolioData;
  const accent = useAccent(syntaxTheme);
  const titles = developer.secondaryRoles;
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener?.('change', updatePreference);
    return () => media.removeEventListener?.('change', updatePreference);
  }, []);

  const quoteCards = [
    {
      quote: 'Great code is its own best documentation — write it so others want to read it.',
      author: 'Steve McConnell',
    },
    {
      quote: 'Simplicity is the soul of efficiency. Keep solutions clean and easy to understand.',
      author: 'Austin Freeman',
    },
    {
      quote: 'Every line of code should solve a problem, not create a new one.',
      author: 'Unknown',
    },
    {
      quote: 'Debugging is like being the detective in a crime movie where you are also the murderer.',
      author: 'Filipe Fortes',
    },
    {
      quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
      author: 'Harold Abelson',
    },
    {
      quote: 'First, solve the problem. Then, write the code.',
      author: 'John Johnson',
    },
    {
      quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      author: 'Martin Fowler',
    },
    {
      quote: 'Before software can be reusable it first has to be usable.',
      author: 'Ralph Johnson',
    },
    {
      quote: 'Code is like humor. When you have to explain it, it’s bad.',
      author: 'Cory House',
    },
    {
      quote: 'Make it work, make it right, make it fast.',
      author: 'Kent Beck',
    },
  ];

  const projectPreviews = portfolioData.projects
    .filter((project) => project.image)
    .slice(0, 3);

  const focusHighlights = ['React + Next.js', 'Node.js APIs', 'MongoDB performance', 'Accessible UI'];

  return (
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24" id="home">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute left-[-8rem] top-[-2rem] h-64 w-64 rounded-full blur-[120px] opacity-70 ${accent.soft}`} />
        <div className={`absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full blur-[140px] opacity-70 ${accent.soft}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.35),transparent_35%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />
      </div>

      <div className="max-w-7xl w-full z-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="section-pill mb-6">Available for select opportunities</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold mb-6 tracking-tight leading-tight text-text">
              Hi, I’m <span className="gradient-text">{developer.fullName}</span><br />
              <motion.span
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className={`mt-2 block font-sans font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl ${accent.text}`}
              >
                {developer.role}
              </motion.span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-8 max-w-2xl font-sans font-normal leading-relaxed">
              {meta.siteDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01, rotate: -0.5 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97, y: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                onClick={() => onNavigate('projects')}
                className={`px-7 py-3.5 ${accent.button} font-bold rounded-2xl flex items-center justify-center gap-2 group cursor-pointer duration-300 w-full sm:w-auto shadow-lg`}
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                onClick={() => setShowResumeModal(true)}
                className="px-7 py-3.5 border border-border bg-surface/80 hover:bg-surface-muted text-text font-semibold rounded-2xl flex items-center justify-center gap-2 duration-300 w-full sm:w-auto cursor-pointer shadow-sm backdrop-blur"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </motion.button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {focusHighlights.map((item) => (
                <span key={item} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${accent.pill}`}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="section-shell rounded-[1.75rem] p-4 sm:p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {portfolioData.stats.map((stat) => (
                <div key={stat.id} className="rounded-2xl border border-border/80 bg-surface/70 p-4 shadow-sm backdrop-blur">
                  <div className={`text-2xl font-bold ${stat.colorClass}`}>{stat.num}</div>
                  <div className="text-xs uppercase tracking-[0.24em] text-text-muted font-semibold mt-1">{stat.label}</div>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">{stat.details}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl border border-border/80 bg-surface-muted/70 p-5 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-text-muted">Current focus</p>
                <div className="mt-3 space-y-2 text-sm text-text-secondary">
                  <p>• Designing polished full-stack experiences that feel calm, fast, and deliberate.</p>
                  <p>• Building dependable React and Node systems with thoughtful UI details.</p>
                  <p>• Turning product goals into reliable, maintainable interfaces and APIs.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-4 text-center">Explore</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                { id: 'about', label: 'About', icon: User, desc: 'My story' },
                { id: 'skills', label: 'Skills', icon: Code2, desc: 'Tech stack' },
                { id: 'projects', label: 'Projects', icon: FolderKanban, desc: 'My work' },
                { id: 'contact', label: 'Contact', icon: Mail, desc: 'Get in touch' },
              ].map(({ id, label, icon: Icon, desc }) => (
                <motion.button
                  key={id}
                  whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
                  onClick={() => onNavigate(id)}
                  className="group glass-card rounded-2xl p-4 text-left hover:glass-card-active"
                >
                  <Icon className={`h-5 w-5 mb-3 ${accent.text}`} />
                  <p className="text-sm font-semibold text-text transition-colors">{label}</p>
                  <p className="text-xs text-text-muted mt-0.5">{desc}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-4 text-center">Project previews</p>
              <h3 className="text-xl font-semibold text-text text-center">Recent work highlights</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projectPreviews.map((project) => (
                <motion.button
                  key={project.id}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
                  onClick={() => onNavigate('projects')}
                  className="overflow-hidden rounded-[1.5rem] border border-border/80 shadow-sm bg-surface/80 backdrop-blur transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                  <div className="p-4 text-left">
                    <h3 className="text-sm font-semibold text-text mb-1">{project.title}</h3>
                    <p className="text-xs text-text-muted">Preview</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden max-w-full mx-auto mt-10">
            <div className="mb-5">
              <p className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-3 text-center">Insights</p>
              <h3 className="text-xl font-semibold text-text text-center">Thoughtful engineering quotes</h3>
            </div>
            <div className="marquee flex gap-4 items-stretch py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
              {[...quoteCards, ...quoteCards].map((card, idx) => (
                <div key={`${idx}-${card.author}`} className="min-w-[16rem] sm:min-w-[20rem] max-w-[16rem] sm:max-w-[20rem] shrink-0 group bg-surface/80 border border-border rounded-[1.5rem] p-4 sm:p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 dark:bg-slate-900/70 dark:border-slate-700 backdrop-blur">
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4 group-hover:text-text transition-colors duration-300">“{card.quote}”</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-text-muted font-semibold">{card.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-surface dark:bg-surface rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <div className="flex justify-between items-center bg-surface-muted px-6 py-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-sans text-sm tracking-wide text-text font-semibold">{developer.cvFilename}</span>
                </div>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="text-text-secondary hover:text-text font-sans text-sm uppercase px-2 py-1 rounded hover:bg-surface-hover transition-all"
                >
                  Close
                </button>
              </div>

              <div className="bg-surface text-text p-5 sm:p-8 md:p-12 overflow-y-auto max-h-[70vh] font-sans">
                <div className="text-center border-b border-border pb-6 mb-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-text">{developer.fullName}</h2>
                  <p className="text-indigo-600 dark:text-indigo-400 font-sans text-sm uppercase font-bold tracking-wider mt-1">{developer.role}</p>
                  <p className="text-xs text-text-secondary mt-2">{developer.email} · {developer.contactLocation}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 space-y-6">
                    <div>
                      <h3 className="text-xs font-sans font-bold tracking-wider text-text uppercase border-b border-border pb-1 mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-1 text-[11px] font-sans text-text-secondary">
                        {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'TailwindCSS', 'Vite'].map((tech) => (
                          <span key={tech} className="bg-surface-hover px-2 py-0.5 rounded font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-sans font-bold tracking-wider text-text uppercase border-b border-border pb-1 mb-2">Education</h3>
                      <p className="text-xs font-bold text-text">{developer.education.degree}</p>
                      <p className="text-[11px] text-text-secondary">{developer.education.school}</p>
                      <p className="text-[10px] text-text-muted font-sans">{developer.education.period} · GPA {developer.education.gpa}</p>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xs font-sans font-bold tracking-wider text-text uppercase border-b border-border pb-1 mb-2">Experience</h3>
                      <div className="space-y-4">
                        {portfolioData.experiences.slice(0, 2).map((exp, i) => (
                          <div key={i}>
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-bold text-text">{exp.role}</span>
                              <span className="text-[10px] text-text-secondary font-sans">{exp.period}</span>
                            </div>
                            <p className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-300">{exp.company}</p>
                            <p className="text-xs text-text-secondary mt-1">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Footer */}
              <div className="bg-surface-muted px-4 sm:px-6 py-4 border-t border-border flex flex-col sm:flex-row gap-3 sm:justify-between items-center">
                <span className="text-xs text-text-secondary font-sans">
                  {downloadSuccess ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4" />
                      CV layout processed successfully! Ready for download.
                    </span>
                  ) : (
                    "Ready to download in premium layouts"
                  )}
                </span>
                <button
                  onClick={() => {
                    setDownloadSuccess(true);
                    setTimeout(() => setDownloadSuccess(false), 4000);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle className="h-3.5 w-3.5" />
                  {downloadSuccess ? "Success!" : "Confirm Download"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
