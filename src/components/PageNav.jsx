import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

  const accent =
    syntaxTheme === 'blue'
      ? 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/50'
      : syntaxTheme === 'purple'
        ? 'text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40 border-purple-200 dark:border-purple-800/50'
        : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/50';

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-4">
      <div className="flex items-center justify-between gap-4 pt-8">
        {prev ? (
          <button
            onClick={() => onNavigate(prev.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-surface text-sm font-medium transition-all ${accent}`}
          >
            <ArrowLeft className="h-4 w-4" />
            {prev.label}
          </button>
        ) : (
          <div />
        )}

        <div>
          {next ? (
            <button
              onClick={() => onNavigate(next.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-surface text-sm font-medium transition-all ${accent}`}
            >
              {next.label}
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export { PAGE_ORDER };
