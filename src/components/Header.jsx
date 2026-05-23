import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Cpu, Monitor, Terminal } from 'lucide-react';
import { portfolioData } from '../portfolioData.js';

export default function Header({
  currentSection,
  onNavigate,
  syntaxTheme,
  setSyntaxTheme,
  darkMode,
  setDarkMode,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { developer, meta } = portfolioData;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cycleSyntaxTheme = () => {
    if (syntaxTheme === 'blue') setSyntaxTheme('purple');
    else if (syntaxTheme === 'purple') setSyntaxTheme('terminal');
    else setSyntaxTheme('blue');
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-border/80 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-20">
        
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center gap-2 group"
          id="nav-logo"
        >
          <div className={`w-8 h-8 ${
            syntaxTheme === 'blue' ? 'bg-indigo-600' :
            syntaxTheme === 'purple' ? 'bg-purple-600' :
            'bg-emerald-600'
          } rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 duration-300`}>
            <span className="text-white font-bold text-base">D</span>
          </div>
          <span className="font-extrabold text-lg tracking-tight uppercase text-text font-sans">
            {meta.siteTitle}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            const activeColorClass = 
              syntaxTheme === 'blue' ? 'text-indigo-600 font-bold' : 
              syntaxTheme === 'purple' ? 'text-purple-600 font-bold' : 
              'text-emerald-600 font-bold';
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xs uppercase tracking-wider transition-all duration-300 relative py-2 ${
                  isActive 
                    ? activeColorClass 
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${
                    syntaxTheme === 'blue' ? 'bg-indigo-600' : 
                    syntaxTheme === 'purple' ? 'bg-purple-600' : 
                    'bg-emerald-600'
                  }`} />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4" id="header-tools">
          {/* Dark/Light toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg transition-all active:scale-95 text-text-secondary hover:text-text hover:bg-surface-hover"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Accent cycle */}
          <button
            onClick={cycleSyntaxTheme}
            title="Cycle Accent Color"
            className={`p-2 rounded-lg border border-transparent transition-all active:scale-95 ${
              syntaxTheme === 'blue' ? 'text-indigo-600 hover:bg-indigo-50 hover:border-indigo-100 dark:hover:bg-indigo-900/30 dark:hover:border-indigo-800/50' : 
              syntaxTheme === 'purple' ? 'text-purple-600 hover:bg-purple-50 hover:border-purple-100 dark:hover:bg-purple-900/30 dark:hover:border-purple-800/50' : 
              'text-emerald-600 hover:bg-emerald-50 hover:border-emerald-100 dark:hover:bg-emerald-900/30 dark:hover:border-emerald-800/50'
            }`}
            id="theme-accent-switcher"
          >
            {syntaxTheme === 'blue' && <Monitor className="h-5 w-5" />}
            {syntaxTheme === 'purple' && <Cpu className="h-5 w-5" />}
            {syntaxTheme === 'terminal' && <Terminal className="h-5 w-5" />}
          </button>

          <div className="w-10 h-10 rounded-full border border-border overflow-hidden shrink-0 hidden sm:block shadow-sm">
            <img 
              alt={`${developer.fullName} Profile`} 
              src={developer.avatarUrl}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-text md:hidden hover:bg-surface-hover transition-colors"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-6 py-6 shadow-md" id="mobile-nav-drawer">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-sans text-xs uppercase tracking-wider py-2 px-4 border-l-2 transition-all duration-200 ${
                    isActive 
                      ? `${
                          syntaxTheme === 'blue' ? 'border-indigo-600 text-indigo-600 bg-indigo-50/40 dark:bg-indigo-900/30' : 
                          syntaxTheme === 'purple' ? 'border-purple-600 text-purple-600 bg-purple-50/40 dark:bg-purple-900/30' : 
                          'border-emerald-600 text-emerald-600 bg-emerald-50/40 dark:bg-emerald-900/30'
                        } font-bold`
                      : 'border-transparent text-text-secondary hover:text-text hover:border-border-light hover:bg-surface-hover'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
