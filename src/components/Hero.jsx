import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Database, Shield, Layout, FileText, CheckCircle } from 'lucide-react';
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
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const fullText = titles[titleIdx];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at peak
          timer = setTimeout(() => setIsDeleting(true), 2000);
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

      setTypingSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIdx, typingSpeed]);

  const accentColorClass = 
    syntaxTheme === 'blue' ? 'text-brand-primary' : 
    syntaxTheme === 'purple' ? 'text-brand-secondary' : 
    'text-emerald-400';

  const accentBgClass =
    syntaxTheme === 'blue' ? 'bg-brand-primary/10 border-brand-primary/30' : 
    syntaxTheme === 'purple' ? 'bg-brand-secondary/10 border-brand-secondary/30' : 
    'bg-emerald-500/10 border-emerald-500/30';

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 md:px-12 py-20" id="home">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Interactive Icons (Anchored relative to max-7xl layout for precise alignment but hidden on narrow viewports to avoid overlapping) */}
      <div className="absolute inset-x-0 top-0 bottom-0 max-w-7xl mx-auto pointer-events-none hidden xl:block" id="floating-badges-container">
        <div className="absolute top-24 left-8 float-icon" style={{ animationDelay: '0s' }}>
          <div className="glass-card hover:glass-card-active p-4 rounded-xl flex items-center gap-3 pointer-events-auto">
            <Layout className={`h-5 w-5 ${
              syntaxTheme === 'blue' ? 'text-indigo-600' :
              syntaxTheme === 'purple' ? 'text-purple-600' :
              'text-emerald-600'
            }`} />
            <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">React / Next.js</span>
          </div>
        </div>

        <div className="absolute top-44 right-8 float-icon" style={{ animationDelay: '1.8s' }}>
          <div className="glass-card hover:glass-card-active p-4 rounded-xl flex items-center gap-3 pointer-events-auto">
            <Database className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">MongoDB</span>
          </div>
        </div>

        <div className="absolute bottom-24 left-16 float-icon" style={{ animationDelay: '3.2s' }}>
          <div className="glass-card hover:glass-card-active p-4 rounded-xl flex items-center gap-3 pointer-events-auto">
            <Terminal className={`h-5 w-5 ${
              syntaxTheme === 'blue' ? 'text-indigo-600' :
              syntaxTheme === 'purple' ? 'text-purple-600' :
              'text-emerald-600'
            }`} />
            <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">Express / Node</span>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="max-w-4xl text-center z-10">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase mb-8 transition-colors duration-300 ${
          syntaxTheme === 'blue' ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200/80 dark:border-indigo-800/50 text-indigo-700' : 
          syntaxTheme === 'purple' ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-200/80 dark:border-purple-800/50 text-purple-700' : 
          'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200/80 dark:border-emerald-800/50 text-emerald-800'
        }`}>
          <span className={`w-2 h-2 rounded-full animate-pulse ${
            syntaxTheme === 'blue' ? 'bg-indigo-500' :
            syntaxTheme === 'purple' ? 'bg-purple-500' :
            'bg-emerald-500'
          }`} />
          Available for new opportunities
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold mb-6 tracking-tight leading-tight text-text">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">{developer.fullName}</span><br />
          <span className={`typing ${accentColorClass} font-sans font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-5xl border-r-2 border-text-muted pr-1`}>
            {currentText}
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-10 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
          {meta.siteDescription}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            onClick={() => {
              onNavigate('projects');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-8 py-4 ${
              syntaxTheme === 'blue' ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700' : 
              syntaxTheme === 'purple' ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700' : 
              'bg-emerald-600 text-white shadow-md hover:bg-emerald-700'
            } font-bold rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer duration-300 w-full sm:w-auto`}
          >
            View Projects 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => setShowResumeModal(true)}
            className="px-8 py-4 border border-border bg-surface hover:bg-surface-muted text-text font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 duration-300 w-full sm:w-auto cursor-pointer shadow-sm"
          >
            Download Resume 
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Resume Simulation Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-surface dark:bg-surface rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              {/* Header */}
              <div className="flex justify-between items-center bg-surface-muted px-6 py-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-sans text-sm tracking-wide text-text font-semibold">Alex_Rivera_CV_2026.pdf</span>
                </div>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="text-text-secondary hover:text-text font-sans text-sm uppercase px-2 py-1 rounded hover:bg-surface-hover transition-all"
                >
                  Close
                </button>
              </div>

              {/* PDF Mock Content */}
              <div className="bg-surface text-text p-8 md:p-12 overflow-y-auto max-h-[70vh] font-sans">
                <div className="text-center border-b border-border pb-6 mb-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Alex Rivera</h2>
                  <p className="text-indigo-600 dark:text-indigo-400 font-sans text-sm uppercase font-bold tracking-wider mt-1">Full Stack MERN Developer</p>
                  <p className="text-xs text-text-secondary mt-2">hello@devarch.io • linkedin.com/in/devarch • Redmond, WA</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="md:col-span-1 space-y-6">
                    <div>
                      <h3 className="text-xs font-sans font-bold tracking-wider text-text uppercase border-b-2 border-slate-900 pb-1 mb-2">Technical Core</h3>
                      <div className="flex flex-wrap gap-1 text-[11px] font-sans text-text-secondary">
                        {['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'Vite', 'Docker', 'GraphQL', 'D3.js'].map(tech => (
                          <span key={tech} className="bg-surface-hover px-2 py-0.5 rounded font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-sans font-bold tracking-wider text-text uppercase border-b-2 border-slate-900 pb-1 mb-2">Education</h3>
                      <p className="text-xs font-bold text-slate-950">B.Tech Computer Science</p>
                      <p className="text-[11px] text-text-secondary">State Tech University</p>
                      <p className="text-[10px] text-text-muted font-sans">2017 - 2021 | GPA: 3.9/4.0</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xs font-sans font-bold tracking-wider text-text uppercase border-b-2 border-slate-900 pb-1 mb-2">Work History</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-950">Full Stack Developer</span>
                            <span className="text-[10px] text-text-secondary font-sans">2021 - Present</span>
                          </div>
                          <p className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-300">TechNova Solutions</p>
                          <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 mt-1 font-sans">
                            <li>Leading 5 developers to migrate legacy monoliths to modern modular MERN apps.</li>
                            <li>Engineered microservices scaling to over 10M monthly concurrent visitors.</li>
                            <li>Decreased database load times by 45% using optimized query and indexing structures.</li>
                          </ul>
                        </div>
                        <div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-950">Backend Intern</span>
                            <span className="text-[10px] text-text-secondary font-sans">2020 - 2021</span>
                          </div>
                          <p className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-300">CloudStream AI</p>
                          <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 mt-1 font-sans">
                            <li>Optimized REST and WebSocket endpoints in Node/Express for real-time telemetry.</li>
                            <li>Reduced server response latencies by 40% and fortified token security.</li>
                          </ul>
                        </div>
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
