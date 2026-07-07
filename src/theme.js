import React, { createContext, useContext } from 'react';

export const ACCENT_THEMES = {
  blue: {
    accentTheme: 'blue',
    text: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-200/70 dark:border-indigo-800/50',
    button: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20',
    background: 'bg-indigo-600',
    backgroundHover: 'hover:bg-indigo-700',
    gradient: 'from-indigo-600 via-indigo-500 to-sky-500',
    pill: 'text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-900/30 border-indigo-200/60 dark:border-indigo-800/50',
    soft: 'bg-indigo-400/15',
  },
  purple: {
    accentTheme: 'purple',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200/70 dark:border-purple-800/50',
    button: 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-500/20',
    background: 'bg-purple-600',
    backgroundHover: 'hover:bg-purple-700',
    gradient: 'from-purple-600 via-fuchsia-500 to-violet-500',
    pill: 'text-purple-700 dark:text-purple-300 bg-purple-50/80 dark:bg-purple-900/30 border-purple-200/60 dark:border-purple-800/50',
    soft: 'bg-purple-400/15',
  },
  terminal: {
    accentTheme: 'terminal',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200/70 dark:border-emerald-800/50',
    button: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/20',
    background: 'bg-emerald-600',
    backgroundHover: 'hover:bg-emerald-700',
    gradient: 'from-emerald-600 via-lime-500 to-teal-500',
    pill: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-900/30 border-emerald-200/60 dark:border-emerald-800/50',
    soft: 'bg-emerald-400/15',
  },
};

export function resolveAccentTheme(themeName = 'blue') {
  return ACCENT_THEMES[themeName] || ACCENT_THEMES.blue;
}

export const AccentThemeContext = createContext(null);

export function AccentThemeProvider({ value, children }) {
  return React.createElement(AccentThemeContext.Provider, { value }, children);
}

export function useAccentTheme(themeName = 'blue') {
  const context = useContext(AccentThemeContext);
  if (context) {
    return context;
  }

  return resolveAccentTheme(themeName);
}

export function useAccent(themeName = 'blue') {
  return useAccentTheme(themeName);
}
