import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import PageTransition from './components/PageTransition.jsx';
import PageNav from './components/PageNav.jsx';
import { Github, Linkedin, Mail, ChevronUp, ArrowUpRight } from 'lucide-react';
import { portfolioData } from './portfolioData.js';

const VALID_SECTIONS = PAGE_ORDER.map((p) => p.id);

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [syntaxTheme, setSyntaxTheme] = useState('blue');
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { developer, meta } = portfolioData;
  const initials = `${developer.firstName[0]}${developer.lastName[0]}`;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleNavigate = useCallback((id) => {
    if (!VALID_SECTIONS.includes(id)) return;
    setCurrentSection(id);
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && VALID_SECTIONS.includes(hash)) {
      setCurrentSection(hash);
    }
    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace('#', '');
      if (h && VALID_SECTIONS.includes(h)) setCurrentSection(h);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accentBg =
    syntaxTheme === 'blue'
      ? 'bg-indigo-600'
      : syntaxTheme === 'purple'
        ? 'bg-purple-600'
        : 'bg-emerald-600';

  const renderPage = () => {
    switch (currentSection) {
      case 'home':
        return <Hero syntaxTheme={syntaxTheme} onNavigate={handleNavigate} />;
      case 'about':
        return <About syntaxTheme={syntaxTheme} />;
      case 'skills':
        return <Skills syntaxTheme={syntaxTheme} />;
      case 'projects':
        return <Projects syntaxTheme={syntaxTheme} />;
      case 'contact':
        return <Contact syntaxTheme={syntaxTheme} />;
      default:
        return <Hero syntaxTheme={syntaxTheme} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text font-sans overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-950 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-200">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,70,229,0.07),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(129,140,248,0.05),transparent)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f46e504_1px,transparent_1px),linear-gradient(to_bottom,#4f46e504_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        syntaxTheme={syntaxTheme}
        setSyntaxTheme={setSyntaxTheme}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        initials={initials}
      />

      <main className="relative z-10 min-h-[calc(100vh-5rem)]">
        <AnimatePresence mode="wait">
          <PageTransition key={currentSection}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
        <PageNav currentSection={currentSection} onNavigate={handleNavigate} syntaxTheme={syntaxTheme} />
      </main>

      <footer className="relative border-t border-border bg-surface py-12 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 mb-8 border-b border-border">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 ${accentBg} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-xs">{initials}</span>
                </div>
                <span className="font-semibold text-text">{developer.fullName}</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                {meta.siteDescription}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text">Connect</h4>
              <div className="flex gap-3">
                <a href={developer.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-lg bg-surface-muted border border-border text-text-secondary hover:text-indigo-600 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                  <Github className="h-4 w-4" />
                </a>
                <a href={developer.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-lg bg-surface-muted border border-border text-text-secondary hover:text-indigo-600 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={`mailto:${developer.email}`} aria-label="Email" className="p-2.5 rounded-lg bg-surface-muted border border-border text-text-secondary hover:text-indigo-600 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
              <a href={`mailto:${developer.email}`} className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                {developer.email}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-muted">
            <span>© {new Date().getFullYear()} {developer.fullName}. All rights reserved.</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to top"
        className={`fixed bottom-8 right-8 z-40 p-3 rounded-full text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 ${accentBg} ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}
