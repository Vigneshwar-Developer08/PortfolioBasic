import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Database, Layout, FileText, CheckCircle, User, Code2, FolderKanban, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../portfolioData.js';

export default function Hero({ syntaxTheme, onNavigate }) {
  const { developer, meta } = portfolioData;
  const titles = developer.secondaryRoles;

  const [titleIdx, setTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = titles[titleIdx];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 35 : 70);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIdx, typingSpeed]);

  const accentColorClass =
    syntaxTheme === 'blue' ? 'text-brand-primary' :
    syntaxTheme === 'purple' ? 'text-brand-secondary' :
    'text-emerald-400';

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
    <section className="relative min-h-[82vh] flex items-center justify-center overflow-hidden px-6 md:px-12 py-20 md:py-24" id="home">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full z-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="section-pill mb-6">Available for select opportunities</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold mb-6 tracking-tight leading-tight text-text">
              Hi, I’m <span className="gradient-text">{developer.fullName}</span><br />
              <span className={`typing ${accentColorClass} font-sans font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl border-r-2 border-text-muted pr-1`}>
                {currentText}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-8 max-w-2xl font-sans font-normal leading-relaxed">
              {meta.siteDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className={`px-7 py-3.5 ${syntaxTheme === 'blue' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : syntaxTheme === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-emerald-600 text-white hover:bg-emerald-700'} font-bold rounded-2xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer duration-300 w-full sm:w-auto`}
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-7 py-3.5 border border-border bg-surface hover:bg-surface-muted text-text font-semibold rounded-2xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 duration-300 w-full sm:w-auto cursor-pointer shadow-sm"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {focusHighlights.map((item) => (
                <span key={item} className="rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-semibold text-text-secondary">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="section-shell rounded-[1.75rem] p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {portfolioData.stats.map((stat) => (
                <div key={stat.id} className="rounded-2xl border border-border bg-surface/70 p-4 shadow-sm">
                  <div className={`text-2xl font-bold ${stat.colorClass}`}>{stat.num}</div>
                  <div className="text-xs uppercase tracking-[0.24em] text-text-muted font-semibold mt-1">{stat.label}</div>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">{stat.details}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl border border-border bg-surface-muted/70 p-5">
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
                <button key={id} onClick={() => onNavigate(id)} className="group glass-card rounded-2xl p-4 text-left hover:glass-card-active">
                  <Icon className={`h-5 w-5 mb-3 ${syntaxTheme === 'blue' ? 'text-indigo-600 dark:text-indigo-400' : syntaxTheme === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-emerald-600 dark:text-emerald-400'}`} />
                  <p className="text-sm font-semibold text-text group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{label}</p>
                  <p className="text-xs text-text-muted mt-0.5">{desc}</p>
                </button>
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
                <button key={project.id} onClick={() => onNavigate('projects')} className="overflow-hidden rounded-[1.5rem] border border-border shadow-sm bg-surface transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                  <div className="p-4 text-left">
                    <h3 className="text-sm font-semibold text-text mb-1">{project.title}</h3>
                    <p className="text-xs text-text-muted">Preview</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden max-w-full mx-auto mt-10">
            <div className="mb-5">
              <p className="text-xs uppercase tracking-widest text-text-muted font-semibold mb-3 text-center">Insights</p>
              <h3 className="text-xl font-semibold text-text text-center">Thoughtful engineering quotes</h3>
            </div>
            <div className="marquee flex gap-4 items-stretch py-2">
              {[...quoteCards, ...quoteCards].map((card, idx) => (
                <div key={`${idx}-${card.author}`} className="min-w-[20rem] max-w-[20rem] shrink-0 group bg-surface border border-border rounded-[1.5rem] p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 dark:bg-slate-900 dark:border-slate-700">
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

              <div className="bg-surface text-text p-8 md:p-12 overflow-y-auto max-h-[70vh] font-sans">
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
              <div className="bg-surface-muted px-6 py-4 border-t border-border flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
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
