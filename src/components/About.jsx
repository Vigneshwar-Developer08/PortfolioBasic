import React, { useState } from 'react';
import { Target, Award, Calendar, FolderCheck, CheckCircle2, AwardIcon } from 'lucide-react';
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
  const { headline, aboutText } = portfolioData.meta;

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 max-w-7xl mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Profile Image Column */}
        <div className="relative group" id="about-image-wrapper">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <div className="relative glass-card aspect-square rounded-2xl overflow-hidden border border-border group-hover:border-slate-300 transition-all duration-300 shadow-md">
            <img 
              alt="Professional Developer Profile" 
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJjLKLRHPeNLSEPHSHrZbJRXgVNgkZ6OKn0g5oBDzZWN5JKW_6JJ8qS6Qae67TouGKXEoB37rieW5dxo85XAALspp2DQYwJRv0_0qcvPqvOF-6ra5eiwspf4zM_o6xE9npZPIbiNOo7R30ivGFm54BMwjUds2wG1UfgEP1qZnU_Z_qLyeZYMoUo81ea7cxyyFpjRwnE1B2wpvprzLxbEmi2RPxBwR0qX6WkZAFfOpelKtWci8gP7VUR9iL_q4MrCpIiEog7c4_fXg"
              referrerPolicy="no-referrer"
            />
            {/* Top-left glass highlight layout overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/5 via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>

        {/* Text Details Column */}
        <div id="about-text-content">
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold mb-8 text-text leading-tight">
            Engineering Digital <span className={`bg-gradient-to-r ${
              syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' :
              syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' :
              'from-emerald-600 to-emerald-800'
            } bg-clip-text text-transparent`}>Masterpieces</span>
          </h2>
          
          <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed mb-8">
            {aboutText}
          </p>

          {/* Stats Bento Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4" id="about-stats-grid">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                onClick={() => setActiveStat(activeStat === stat.id ? null : stat.id)}
                className={`glass-card hover:glass-card-active p-5 sm:p-4 md:p-5 lg:p-4 xl:p-6 rounded-xl text-center cursor-pointer relative shadow-sm transition-all duration-300 flex flex-col justify-between min-h-[120px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[115px] xl:min-h-[130px] ${
                  activeStat === stat.id ? 'glass-card-active ring-1 ring-indigo-600/30 dark:ring-indigo-400/30 scale-95' : ''
                }`}
              >
                <div className="w-full">
                  <div className="flex justify-center mb-2">
                    {getStatIcon(stat.id)}
                  </div>
                  <div className={`text-2xl sm:text-xl md:text-2xl lg:text-xl xl:text-3xl font-extrabold ${stat.colorClass} mb-1 font-sans`}>
                    {stat.num}
                  </div>
                  <div className="text-xs sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs uppercase tracking-tight font-sans font-bold text-text-muted leading-tight px-1 break-words">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute top-2.5 right-2.5 text-[8px] font-mono text-text-muted font-bold bg-surface-muted border border-border-light px-1 rounded uppercase tracking-wider">
                  info
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Details block for clicked bento stats */}
          <div className="mt-8 min-h-[80px]">
            <AnimatePresence mode="wait">
              {activeStat && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-xl border border-border bg-surface-muted"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase font-sans tracking-wider font-extrabold text-text">
                        Metric Highlight: {stats.find(s => s.id === activeStat)?.label}
                      </h4>
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                        {stats.find(s => s.id === activeStat)?.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
