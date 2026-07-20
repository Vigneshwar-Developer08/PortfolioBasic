import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Database, Settings, Code2, Cloud } from 'lucide-react';
import { portfolioData } from '../portfolioData.js';
import { useAccent } from '../theme.js';

export default function Skills({ syntaxTheme }) {
  const [activeSkill, setActiveSkill] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const accent = useAccent(syntaxTheme);
  const categoryTheme = {
    frontend: { icon: 'layout', colorClass: 'text-indigo-600 dark:text-indigo-400' },
    backend: { icon: 'server', colorClass: 'text-purple-600 dark:text-purple-400' },
    database: { icon: 'database', colorClass: 'text-emerald-600 dark:text-emerald-400' },
    deployment: { icon: 'cloud', colorClass: 'text-cyan-600 dark:text-cyan-400' },
    tools: { icon: 'settings', colorClass: 'text-indigo-600 dark:text-indigo-400' },
  };

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener?.('change', updatePreference);
    return () => media.removeEventListener?.('change', updatePreference);
  }, []);

  const skillCategories = portfolioData.skills.categories.map((category) => ({
    ...category,
    icon: categoryTheme[category.id]?.icon || 'code',
    colorClass: categoryTheme[category.id]?.colorClass || 'text-text-secondary',
  }));

  const getCategoryIcon = (iconName, colorClass) => {
    switch (iconName) {
      case 'layout':
        return <Layout className={`h-5 w-5 ${colorClass}`} />;
      case 'server':
        return <Server className={`h-5 w-5 ${colorClass}`} />;
      case 'database':
        return <Database className={`h-5 w-5 ${colorClass}`} />;
      case 'settings':
        return <Settings className={`h-5 w-5 ${colorClass}`} />;
      case 'cloud':
        return <Cloud className={`h-5 w-5 ${colorClass}`} />;
      default:
        return <Code2 className={`h-5 w-5 ${colorClass}`} />;
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" id="skills">
      <div className="text-center mb-12">
        <div className="section-pill mb-6">Core competencies</div>
        <h2 className="text-3xl md:text-5xl font-sans font-extrabold mb-4 text-text">
          A focused stack for <span className={`bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}>modern product delivery</span>.
        </h2>
        <p className="text-sm text-text-secondary max-w-2xl mx-auto font-sans font-medium leading-relaxed">
          I build with a deliberate mix of frontend clarity, backend reliability, and data-aware product thinking so each project is both elegant and maintainable.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mb-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="section-shell rounded-[1.5rem] p-4 sm:p-6 md:p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              {getCategoryIcon(category.icon, category.colorClass)}
              <h3 className="text-lg font-sans font-extrabold text-text">{category.title}</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {category.skills.map((skill) => {
                const isActive = activeSkill === skill.name;

                return (
                  <motion.button
                    key={skill.name}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveSkill(isActive ? null : skill.name)}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                    whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01, rotate: -0.3 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.8 }}
                    className={`rounded-[1.3rem] border p-4 text-left shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? 'border-indigo-300 bg-surface shadow-[0_18px_40px_-20px_rgba(79,70,229,0.35)] dark:border-indigo-700' : 'border-border bg-surface/70 hover:border-indigo-200 hover:bg-surface-muted dark:hover:border-indigo-800'
                    }`}
                  >
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-text">{skill.name}</p>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'mt-3 max-h-[12rem] opacity-100 translate-y-0' : 'mt-0 max-h-0 opacity-0 -translate-y-2'}`}>
                      <p className="text-sm text-text-secondary leading-relaxed">{skill.desc}</p>
                    </div>
                    {!isActive && <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-text-muted">Tap to view details</p>}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="section-shell rounded-[1.75rem] p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-text-muted">Delivery style</p>
            <h3 className="mt-2 text-2xl font-bold text-text">Built for clarity, speed, and long-term maintainability.</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 w-full md:max-w-xl">
            <div className="rounded-2xl border border-border bg-surface/70 p-4">
              <p className="text-sm font-semibold text-text">Product-first thinking</p>
              <p className="mt-2 text-sm text-text-secondary">I shape solutions around real user needs and business outcomes, not just implementation details.</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/70 p-4">
              <p className="text-sm font-semibold text-text">Reliable execution</p>
              <p className="mt-2 text-sm text-text-secondary">Focus stays on robust architecture, clear states, and polished handoff so builds remain dependable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
