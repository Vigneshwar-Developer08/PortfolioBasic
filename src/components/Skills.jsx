import React, { useState } from 'react';
import { Layout, Server, Database, Settings, HelpCircle, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Skills({ syntaxTheme }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'layout',
      colorClass: 'text-indigo-600 dark:text-indigo-400',
      items: [
        { name: 'React / Next.js', percentage: 95, level: 'Expert', details: 'Built SPA/SSR hubs with custom layouts, custom hooks, atomic components, and modern server solutions.' },
        { name: 'Tailwind CSS', percentage: 90, level: 'Expert', details: 'Crafted highly responsive setups with utility primitives, custom animations, fluid scaling, and pristine typography.' },
        { name: 'TypeScript', percentage: 85, level: 'Advanced', details: 'Strict type safety checks, utility generics, sound enum handling, and custom declarations.' }
      ]
    },
    {
      title: 'Backend',
      icon: 'server',
      colorClass: 'text-purple-600 dark:text-purple-400',
      items: [
        { name: 'Node.js / Express', percentage: 92, level: 'Expert', details: 'Configured highly optimal Event-Loop handlers, routing microservices, dynamic rate-limiting, and stateful socket bridges.' },
        { name: 'NestJS', percentage: 75, level: 'Advanced', details: 'Architected structured dependency frameworks, filters, request interceptors, and strict REST modules.' },
        { name: 'Python / Django', percentage: 70, level: 'Advanced', details: 'Python code execution, modular django models, routing modules, and seamless third party integrations.' }
      ]
    },
    {
      title: 'Database',
      icon: 'database',
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      items: [
        { name: 'MongoDB', percentage: 90, level: 'Expert', details: 'Optimized complex aggregations, compound indices, read/write replications, and robust Mongoose schemas.' },
        { name: 'PostgreSQL', percentage: 80, level: 'Advanced', details: 'Complex relational joins, triggers, ACID-transaction blocks, and solid index indexing.' },
        { name: 'GraphQL APIs', percentage: 65, level: 'Intermediate', details: 'Dynamic schema composition, optimized query-resolvers, database optimization, and high performance data orchestration layers.' }
      ]
    },
    {
      title: 'Tools',
      icon: 'settings',
      colorClass: 'text-indigo-600 dark:text-indigo-400',
      items: [
        { name: 'Docker', percentage: 85, level: 'Advanced', details: 'Wrote multi-stage lightweight Dockerfiles, solid compose bundles, and robust network overlays.' },
        { name: 'Linux / Cloud VPS', percentage: 75, level: 'Advanced', details: 'Configured secure network bridges, lightweight routing services, automated cron processes, and robust process managers.' },
        { name: 'Git / CI-CD', percentage: 90, level: 'Expert', details: 'Wrote GitHub Actions workflows, secure build pipelines, semantic versioning, and auto Cloud Run hooks.' }
      ]
    }
  ];

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
      default:
        return <Code2 className={`h-5 w-5 ${colorClass}`} />;
    }
  };

  const barColorClass = 
    syntaxTheme === 'blue' ? 'bg-indigo-600' : 
    syntaxTheme === 'purple' ? 'bg-purple-600' : 
    'bg-emerald-600';

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-sans font-extrabold mb-4 text-text animate-fade-in">
          Core <span className={`bg-gradient-to-r ${
            syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' : 
            syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' : 
            'from-emerald-600 to-emerald-800'
          } bg-clip-text text-transparent`}>Competencies</span>
        </h2>
        <div className={`w-16 h-1 mx-auto rounded-full ${
          syntaxTheme === 'blue' ? 'bg-indigo-600' : 
          syntaxTheme === 'purple' ? 'bg-purple-600' : 
          'bg-emerald-600'
        }`} />
        <p className="text-sm text-text-secondary max-w-lg mx-auto mt-4 font-sans font-medium uppercase tracking-wider">
          Click any skill to view core execution details
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {skillCategories.map((category) => (
          <div 
            key={category.title}
            className="bg-surface border border-border p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                {getCategoryIcon(category.icon, category.colorClass)}
                <h3 className="text-lg font-sans font-extrabold text-text">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((skill) => {
                  const isCurSelected = selectedSkill?.name === skill.name;
                  return (
                    <div 
                      key={skill.name}
                      onClick={() => setSelectedSkill(isCurSelected ? null : skill)}
                      className={`group cursor-pointer p-2 rounded-lg transition-all ${
                        isCurSelected 
                          ? syntaxTheme === 'blue' ? 'bg-indigo-50/70 dark:bg-indigo-900/30 ring-1 ring-indigo-200 dark:ring-indigo-800' 
                            : syntaxTheme === 'purple' ? 'bg-purple-50/70 dark:bg-purple-900/30 ring-1 ring-purple-200 dark:ring-purple-800' 
                            : 'bg-emerald-50/70 dark:bg-emerald-900/30 ring-1 ring-emerald-200 dark:ring-emerald-800'
                          : 'hover:bg-surface-muted'
                      }`}
                    >
                      <div className="flex justify-between mb-2 text-xs">
                        <span className={`font-sans font-semibold text-text-secondary transition-colors ${
                          syntaxTheme === 'blue' ? 'group-hover:text-indigo-600' :
                          syntaxTheme === 'purple' ? 'group-hover:text-purple-600' :
                          'group-hover:text-emerald-600'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`font-sans font-bold text-text-secondary transition-colors ${
                          syntaxTheme === 'blue' ? 'group-hover:text-indigo-600' :
                          syntaxTheme === 'purple' ? 'group-hover:text-purple-600' :
                          'group-hover:text-emerald-600'
                        }`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      
                      {/* Interactive Progress Bar */}
                      <div className="h-2 w-full bg-surface-hover rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full transition-all duration-300 ${
                            isCurSelected ? barColorClass : 'bg-text-muted/30'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-text-muted mt-6 text-center">
              Interactive Metrics
            </div>
          </div>
        ))}
      </div>

      {/* Selected skill info card */}
      <div className="min-h-[100px] max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {selectedSkill ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className={`${
                syntaxTheme === 'blue' ? 'bg-indigo-50/70 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800' :
                syntaxTheme === 'purple' ? 'bg-purple-50/70 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800' :
                'bg-emerald-50/70 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800'
              } border p-8 rounded-2xl relative shadow-md`}
            >
              <div className="absolute top-4 right-4">
                <Sparkles className={`h-5 w-5 ${
                  syntaxTheme === 'blue' ? 'text-indigo-600' :
                  syntaxTheme === 'purple' ? 'text-purple-600' :
                  'text-emerald-600'
                }`} />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className={`font-sans text-xs uppercase bg-surface border ${
                  syntaxTheme === 'blue' ? 'border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300' :
                  syntaxTheme === 'purple' ? 'border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300' :
                  'border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                } font-bold px-3 py-1 rounded`}>
                  {selectedSkill.level}
                </span>
                <h4 className="text-xl font-sans font-bold text-text">{selectedSkill.name}</h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed font-normal">
                {selectedSkill.details}
              </p>
            </motion.div>
          ) : (
            <div className="text-center text-xs text-text-muted font-sans font-medium uppercase py-8 flex items-center justify-center gap-2">
              <HelpCircle className="h-4 w-4 text-text-muted" />
              Select any competency row to view professional expertise summary
            </div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
