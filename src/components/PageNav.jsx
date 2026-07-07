import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useAccent } from '../theme.js';

const PAGE_ORDER = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function PageNav({ currentSection, onNavigate, syntaxTheme }) {
  const currentIndex = PAGE_ORDER.findIndex((p) => p.id === currentSection);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? PAGE_ORDER[currentIndex - 1] : null;
  const next = currentIndex < PAGE_ORDER.length - 1 ? PAGE_ORDER[currentIndex + 1] : null;
  const accent = useAccent(syntaxTheme);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-4">
      <div className="sticky bottom-4 z-30 flex items-center justify-between gap-4 rounded-full border border-border/80 bg-surface/75 px-3 py-3 shadow-[0_20px_45px_-24px_rgba(15,23,42,0.4)] backdrop-blur-xl">
        {prev ? (
          <motion.button
            whileHover={{ x: -2, scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate(prev.id)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${accent.border} ${accent.text} bg-white/70 dark:bg-slate-950/40`}
          >
            <ArrowLeft className="h-4 w-4" />
            {prev.label}
          </motion.button>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-2 py-1.5 shadow-inner">
          {PAGE_ORDER.map((item) => {
            const active = item.id === currentSection;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative rounded-full px-3 py-1.5 text-sm font-medium text-text-secondary transition-colors"
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full ${accent.background} shadow-lg`}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  />
                ) : null}
                <span className={`relative z-10 ${active ? 'text-white' : 'text-text-secondary'}`}>{item.label}</span>
              </button>
            );
          })}
        </div>

        {next ? (
          <motion.button
            whileHover={{ x: 2, scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate(next.id)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${accent.border} ${accent.text} bg-white/70 dark:bg-slate-950/40`}
          >
            {next.label}
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export { PAGE_ORDER };
