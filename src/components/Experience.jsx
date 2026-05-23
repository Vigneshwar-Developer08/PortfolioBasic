import React, { useState } from 'react';
import { Calendar, Building, Sparkles, Plus, Minus, GraduationCap } from 'lucide-react';
import { portfolioData } from '../portfolioData.js';

export default function Experience({ syntaxTheme }) {
  const [expandedId, setExpandedId] = useState(null);

  const { experiences } = portfolioData;

  const getColorClass = (color) => {
    switch (color) {
      case 'primary':
        return 'border-indigo-600 text-indigo-600 dark:text-indigo-400';
      case 'secondary':
        return 'border-purple-600 text-purple-600 dark:text-purple-400';
      case 'tertiary':
        return 'border-emerald-600 text-emerald-600 dark:text-emerald-400';
    }
  };

  const getBulletBg = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-indigo-600';
      case 'secondary':
        return 'bg-purple-600';
      case 'tertiary':
        return 'bg-emerald-600';
    }
  };

  const lineGradient = 
    syntaxTheme === 'blue' ? 'from-indigo-600 via-purple-600 to-transparent' : 
    syntaxTheme === 'purple' ? 'from-purple-600 via-emerald-600 to-transparent' : 
    'from-emerald-600 via-indigo-600 to-transparent';

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto" id="experience">
      <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-center mb-20 text-text leading-tight">
        Professional <span className={`bg-gradient-to-r ${
          syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' : 
          syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' : 
          'from-emerald-600 to-emerald-800'
        } bg-clip-text text-transparent`}>Journey</span>
      </h2>

      <div className="relative">
        {/* Center Vertical Timeline bar Line */}
        <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b ${lineGradient}`} />

        <div className="space-y-16 relative">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            const isExpanded = expandedId === idx;

            return (
              <div 
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between relative pl-10 md:pl-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Visual anchor text details card */}
                <div className={`w-full md:w-[44%] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  <div 
                    onClick={() => setExpandedId(isExpanded ? null : idx)}
                    className="bg-surface border border-border hover:border-indigo-200 dark:hover:border-indigo-700 p-6 md:p-8 rounded-2xl cursor-pointer inline-block w-full text-left shadow-sm hover:shadow transition-all"
                  >
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className={`text-lg font-sans font-extrabold text-text flex items-center gap-1.5`}>
                        {idx === 2 ? <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" /> : <Building className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />}
                        {exp.role}
                      </h3>
                      <span className="shrink-0 text-text-muted hover:text-text mt-1">
                        {isExpanded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-sans text-xs uppercase text-purple-600 dark:text-purple-400 tracking-wider font-bold">
                        {exp.company}
                      </span>
                      <span className="text-text-muted text-xs">•</span>
                      <span className="font-sans text-xs text-text-secondary font-semibold flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-text-secondary font-normal leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Expandable Tag block lists */}
                    {isExpanded && (
                      <div className="mt-5 pt-4 border-t border-border-light space-y-3">
                        <h4 className="text-[10px] uppercase font-sans tracking-widest text-[#565969] font-bold">Integrated Stack Technologies</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techUsed.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-900/30 border border-purple-200/60 dark:border-purple-800/50 font-sans font-bold text-[10px] text-purple-700 dark:text-purple-300 uppercase tracking-base"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline center bullet knob */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center cursor-pointer shrink-0 z-10 shadow-md hover:scale-110 active:scale-95 transition-all"
                  onClick={() => setExpandedId(isExpanded ? null : idx)}
                  style={{ top: '10px' }}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${getBulletBg(exp.color)} ${exp.color === 'primary' ? 'animate-pulse' : ''}`} />
                </div>

                {/* Counter balance column side */}
                <div className="hidden md:block md:w-[44%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
