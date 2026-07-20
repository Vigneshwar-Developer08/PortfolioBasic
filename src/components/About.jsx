import React, { useState } from 'react';
import { Target, Award, Calendar, FolderCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../portfolioData.js';

export default function About({ syntaxTheme }) {
  const [activeStat, setActiveStat] = useState(null);

  const getStatIcon = (id) => {
    switch (id) {
      case 'projects':
        return <FolderCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />;
      case 'experience':
        return <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />;
      case 'contributions':
        return <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  const { stats } = portfolioData;
  const { aboutText } = portfolioData.meta;
  const pillars = [
    { title: 'Product-minded engineering', text: 'I translate business goals into thoughtful interfaces and dependable systems that feel clear from day one.' },
    { title: 'Clean, scalable architecture', text: 'My work leans on maintainable structure, strong boundaries, and pragmatic implementation choices.' },
    { title: 'Polished user experience', text: 'Animation, hierarchy, spacing, and responsiveness all matter when the experience should feel effortless.' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" id="about">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <div id="about-text-content">
          <div className="section-pill mb-6">About me</div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold mb-6 text-text leading-tight">
            Building digital products that feel <span className={`bg-gradient-to-r ${syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' : syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' : 'from-emerald-600 to-emerald-800'} bg-clip-text text-transparent`}>clear, fast, and thoughtful</span>.
          </h2>

          <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed mb-8">
            {aboutText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="about-stats-grid">
            {stats.map((stat) => (
              <div
                key={stat.id}
                onClick={() => setActiveStat(activeStat === stat.id ? null : stat.id)}
                className={`glass-card hover:glass-card-active p-5 rounded-xl text-center cursor-pointer relative shadow-sm transition-all duration-300 flex flex-col justify-between min-h-[128px] ${activeStat === stat.id ? 'glass-card-active scale-[0.98]' : ''}`}
              >
                <div className="flex justify-center mb-2">{getStatIcon(stat.id)}</div>
                <div className={`text-2xl font-extrabold ${stat.colorClass} mb-1 font-sans`}>{stat.num}</div>
                <div className="text-[11px] uppercase tracking-[0.24em] font-sans font-bold text-text-muted leading-tight px-1 break-words">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 min-h-[84px]">
            <AnimatePresence mode="wait">
              {activeStat && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="p-5 rounded-2xl border border-border bg-surface-muted">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase font-sans tracking-wider font-extrabold text-text">Metric highlight: {stats.find((s) => s.id === activeStat)?.label}</h4>
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed">{stats.find((s) => s.id === activeStat)?.details}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="section-shell rounded-[1.75rem] p-4 sm:p-6 md:p-8">
          <div className="space-y-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-text-muted">How I work</p>
              <h3 className="mt-2 text-2xl font-bold text-text">Thoughtful execution from concept to launch.</h3>
            </div>
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-border bg-surface/70 p-4">
                <h4 className="text-sm font-semibold text-text">{pillar.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{pillar.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-surface-muted/70 p-5">
            <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-text-muted">What I bring</p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">I combine product thinking, reliable architecture, and polished UI detail so the end result feels calm, fast, and intentional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
