import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Monitor, Cpu, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../portfolioData.js';

export default function Header({
  currentSection,
  onNavigate,
  syntaxTheme,
  setSyntaxTheme,
  darkMode,
  setDarkMode,
  initials,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { developer } = portfolioData;

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const cycleSyntaxTheme = () => {
    if (syntaxTheme === 'blue') setSyntaxTheme('purple');
    else if (syntaxTheme === 'purple') setSyntaxTheme('terminal');
    else setSyntaxTheme('blue');
  };

  const accentColor =
    syntaxTheme === 'blue'
      ? 'text-indigo-600 dark:text-indigo-400'
      : syntaxTheme === 'purple'
        ? 'text-purple-600 dark:text-purple-400'
        : 'text-emerald-600 dark:text-emerald-400';

  const accentBg =
    syntaxTheme === 'blue'
      ? 'bg-indigo-600'
      : syntaxTheme === 'purple'
        ? 'bg-purple-600'
        : 'bg-emerald-600';

  const accentBar =
    syntaxTheme === 'blue'
      ? 'bg-indigo-600'
      : syntaxTheme === 'purple'
        ? 'bg-purple-600'
        : 'bg-emerald-600';

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-border/70 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-16 md:h-[4.5rem]">
        <button
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center gap-2.5 group"
          id="nav-logo"
        >
          <div className={`w-8 h-8 ${accentBg} rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-sm`}>
            <span className="text-white font-bold text-xs">{initials}</span>
          </div>
          <span className="font-semibold text-sm md:text-base tracking-tight text-text hidden sm:block">
            {developer.firstName}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? `${accentColor} bg-surface-hover`
                    : 'text-text-secondary hover:text-text hover:bg-surface-hover/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${accentBar}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3" id="header-tools">
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Light mode' : 'Dark mode'}
            className="p-2 rounded-lg transition-all text-text-secondary hover:text-text hover:bg-surface-hover"
          >
            {darkMode ? <Sun className="h-4 w-4 md:h-5 md:w-5" /> : <Moon className="h-4 w-4 md:h-5 md:w-5" />}
          </button>

          <button
            onClick={cycleSyntaxTheme}
            title="Change accent color"
            className={`p-2 rounded-lg transition-all hover:bg-surface-hover ${accentColor}`}
            id="theme-accent-switcher"
          >
            {syntaxTheme === 'blue' && <Monitor className="h-4 w-4 md:h-5 md:w-5" />}
            {syntaxTheme === 'purple' && <Cpu className="h-4 w-4 md:h-5 md:w-5" />}
            {syntaxTheme === 'terminal' && <Terminal className="h-4 w-4 md:h-5 md:w-5" />}
          </button>

          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-border overflow-hidden shrink-0 hidden sm:block shadow-sm">
            <img
              alt={developer.fullName}
              src={developer.avatarUrl}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-text md:hidden hover:bg-surface-hover transition-colors"
            id="mobile-nav-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-border bg-surface/95 backdrop-blur-xl"
            id="mobile-nav-drawer"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => {
                const isActive = currentSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-sm font-medium py-2.5 px-3 rounded-lg transition-all ${
                      isActive
                        ? `${accentColor} bg-surface-hover`
                        : 'text-text-secondary hover:text-text hover:bg-surface-hover/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
