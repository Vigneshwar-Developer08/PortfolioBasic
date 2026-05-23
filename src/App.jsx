import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contributions from './components/Contributions.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import { Cpu, Github, Linkedin, Mail, Twitter, ChevronUp, Sun, Moon } from 'lucide-react';
import { portfolioData } from './portfolioData.js';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [syntaxTheme, setSyntaxTheme] = useState('blue');
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Monitor active sections on scroll to light up navigation links
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button visibility
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg text-text font-sans overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-950 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-200">
      {/* Dynamic Background Grid Pattern overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f46e504_1px,transparent_1px),linear-gradient(to_bottom,#4f46e504_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-[1]" />
      
      {/* Top sticky blur Header panel */}
      <Header 
        currentSection={currentSection} 
        onNavigate={setCurrentSection} 
        syntaxTheme={syntaxTheme} 
        setSyntaxTheme={setSyntaxTheme}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Container core sections */}
      <main className="relative z-10 animate-fade-in">
        <Hero syntaxTheme={syntaxTheme} onNavigate={setCurrentSection} />
        <About syntaxTheme={syntaxTheme} />
        <Skills syntaxTheme={syntaxTheme} />
        <Projects syntaxTheme={syntaxTheme} />
        <Experience syntaxTheme={syntaxTheme} />
        <Contributions syntaxTheme={syntaxTheme} />
        <Services syntaxTheme={syntaxTheme} />
        <Contact syntaxTheme={syntaxTheme} />
      </main>

      {/* High-End Footer matching the Professional Polish specifications */}
      <footer className="relative border-t border-border bg-surface py-16 z-20 overflow-hidden text-text-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm border-b border-border-light pb-10 mb-10">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-surface-muted border border-border">
                <Cpu className="h-4 w-4 text-indigo-600" />
              </div>
              <span className="font-sans text-lg font-bold text-text tracking-tight uppercase">
                {portfolioData.meta.siteTitle}
              </span>
            </div>
            <p className="text-text-secondary font-light max-w-sm leading-relaxed text-xs">
              {portfolioData.meta.siteDescription}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-wider text-text font-bold">Architecture Index</h4>
            <div className="flex flex-col gap-2 text-xs">
              {['Home', 'About', 'Skills', 'Projects'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => {
                    const id = sec.toLowerCase();
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-indigo-600 text-text-secondary transition-colors text-left font-medium"
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-wider text-text font-bold">Syndicates</h4>
            <div className="flex gap-3" id="footer-social-links">
              <a href={portfolioData.developer.socials.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-surface-muted border border-border text-text-secondary hover:text-indigo-600 hover:border-indigo-600 hover:bg-surface transition-all shadow-sm">
                <Github className="h-4 w-4" />
              </a>
              <a href={portfolioData.developer.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-surface-muted border border-border text-text-secondary hover:text-indigo-600 hover:border-indigo-600 hover:bg-surface transition-all shadow-sm">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={portfolioData.developer.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-surface-muted border border-border text-text-secondary hover:text-indigo-600 hover:border-indigo-600 hover:bg-surface transition-all shadow-sm">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={`mailto:${portfolioData.developer.socials.email}`} className="p-2.5 rounded-lg bg-surface-muted border border-border text-text-secondary hover:text-indigo-600 hover:border-indigo-600 hover:bg-surface transition-all shadow-sm">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans tracking-wider text-text-muted gap-4 uppercase font-bold">
          <span>© 2026 {portfolioData.developer.fullName.toUpperCase()} {portfolioData.meta.siteTitle.toUpperCase()}. ALL SERVICES SECURED BY DESIGN CODES.</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-pulse"></span>
            ACTIVE STATUS: LOOKING FOR NEW CHALLENGES
          </div>
        </div>
      </footer>

      {/* Floating Scroll to top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          title="Scroll To Top"
          className={`fixed bottom-8 right-8 z-40 p-3 rounded-full text-white hover:scale-110 active:scale-95 shadow-[0_4px_16px_rgba(79,70,229,0.3)] hover:shadow-indigo-600/50 cursor-pointer transition-all duration-300 ${
            syntaxTheme === 'blue' ? 'bg-indigo-600' :
            syntaxTheme === 'purple' ? 'bg-purple-600' :
            'bg-emerald-600'
          }`}
          id="scroll-to-top-btn"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
