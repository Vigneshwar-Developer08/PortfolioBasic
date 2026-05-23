import React, { useState } from 'react';
import { Target, Server, Layout, Sparkles, Check, Command } from 'lucide-react';
import { portfolioData } from '../portfolioData.js';

export default function Services({ syntaxTheme }) {
  const [selectedService, setSelectedService] = useState(null);

  const { services } = portfolioData;

  const getServiceIcon = (icon) => {
    switch (icon) {
      case 'server':
        return <Server className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />;
      case 'layout':
        return <Layout className="h-6 w-6 text-purple-600 dark:text-purple-400" />;
      default:
        return <Command className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800/50 text-[10px] font-sans uppercase tracking-wider text-purple-700 mb-3 font-bold">
          <Sparkles className="h-3 w-3" />
          Collaborative Agreements
        </div>
        <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-text leading-tight">
          Premium <span className={`bg-gradient-to-r ${
            syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' : 
            syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' : 
            'from-emerald-600 to-emerald-800'
          } bg-clip-text text-transparent`}>Services</span>
        </h2>
        <p className="text-sm text-text-secondary max-w-lg mx-auto mt-4 font-sans font-medium uppercase tracking-wider">
          Professional development packages prepared to deploy
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((srv) => {
          const isSelected = selectedService === srv.id;
          return (
            <div
              key={srv.id}
              onClick={() => setSelectedService(isSelected ? null : srv.id)}
              className={`bg-surface hover:border-indigo-200 dark:hover:border-indigo-700 p-6 md:p-8 rounded-2xl border cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 ${
                    isSelected ? 'border-indigo-600 dark:border-indigo-400 ring-1 ring-indigo-600/30 dark:ring-indigo-400/30 scale-95' : 'border-border'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="p-3 bg-surface-muted border border-border-light rounded-xl">
                    {getServiceIcon(srv.icon)}
                  </div>
                  <span className="font-sans text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 px-3 py-1 rounded-full flex items-center">
                    {srv.pricing}
                  </span>
                </div>

                <h3 className="text-xl font-sans font-extrabold text-text mb-4">{srv.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-normal mb-8 md:min-h-[5.5rem] flex items-start">
                  {srv.description}
                </p>

                {/* Features point checklist lists */}
                <ul className="space-y-3.5 border-t border-border-light pt-6">
                  {srv.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-xs font-semibold text-text-secondary">
                      <span className="p-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border-light">
                <button
                  className={`w-full py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isSelected ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-surface-hover hover:bg-slate-200 dark:hover:bg-slate-700 text-text-secondary bg-surface-hover/80'
                  }`}
                >
                  {isSelected ? 'Service Active - Send Request' : 'Inspect Service'}
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
