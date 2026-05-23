import React, { useState } from 'react';
import { Target, Terminal, Award, GitPullRequest, Code, Coffee, Calendar } from 'lucide-react';
import { portfolioData } from '../portfolioData.js';

export default function Contributions({ syntaxTheme }) {
  const [selectedDay, setSelectedDay] = useState(null);

  const accomplishments = portfolioData.accomplishments;

  const generateHeatmapDays = () => {
    const list = [];
    const baseDate = new Date('2026-05-22T13:33:22Z');
    
    for (let i = 119; i >= 0; i--) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() - i);
      
      const count = Math.floor(Math.random() * 12);
      let accomplishment = 'Rest day / research cycles.';
      if (count > 0) {
        accomplishment = accomplishments[Math.floor(Math.random() * accomplishments.length)];
      }

      list.push({
        dayNum: 120 - i,
        dateString: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        contributionsCount: count,
        accomplishment
      });
    }
    return list;
  };

  const [heatmapDays] = useState(generateHeatmapDays());

  const getHeatmapColor = (count) => {
    if (count === 0) return 'bg-surface-hover hover:bg-slate-200';
    if (count <= 3) {
      return syntaxTheme === 'blue' ? 'bg-indigo-100 border border-indigo-200/60' :
             syntaxTheme === 'purple' ? 'bg-purple-100 border border-purple-200/60' :
             'bg-emerald-100 border border-emerald-200/60';
    }
    if (count <= 7) {
      return syntaxTheme === 'blue' ? 'bg-indigo-400/80 border border-indigo-400/20' :
             syntaxTheme === 'purple' ? 'bg-purple-400/80 border border-purple-400/20' :
             'bg-emerald-400/80 border border-emerald-400/20';
    }
    return syntaxTheme === 'blue' ? 'bg-indigo-600' :
           syntaxTheme === 'purple' ? 'bg-purple-600' :
           'bg-emerald-600';
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto" id="contributions">
      <div className="bg-surface p-5 md:p-8 rounded-3xl border border-border relative overflow-hidden shadow-sm">
        
        {/* Background gradient hint */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-border-light pb-6 mb-6 gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400">
              <GitPullRequest className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl md:text-3xl font-sans font-extrabold text-text leading-tight">
                Open Source <span className={`bg-gradient-to-r ${
                  syntaxTheme === 'blue' ? 'from-indigo-600 to-indigo-800' : 
                  syntaxTheme === 'purple' ? 'from-purple-600 to-purple-800' : 
                  'from-emerald-600 to-emerald-800'
                } bg-clip-text text-transparent`}>Contributions</span>
              </h2>
              <p className="text-xs text-text-muted font-sans font-bold uppercase tracking-wider mt-1">
                Real-time simulated VCS repository syncing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-sans text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 border border-indigo-100 dark:border-indigo-800/50 rounded-lg font-bold">
            <Coffee className="h-4 w-4 text-indigo-600 dark:text-indigo-400 animate-bounce" />
            <span>22 commits today</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Heatmap Grid on Left */}
          <div className="md:col-span-8 space-y-3">
            <div className="flex justify-between items-center text-xs font-sans font-semibold text-text-secondary border-b border-border-light pb-2">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                VCS Activity Grid (Last 120 Days)
              </span>
              <span>Less • • • • More</span>
            </div>

            <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-12 gap-1.5">
              {heatmapDays.map((day) => {
                const isSelected = selectedDay?.dayNum === day.dayNum;
                return (
                  <div
                    key={day.dayNum}
                    onClick={() => setSelectedDay(isSelected ? null : day)}
                    title={`${day.dateString} : ${day.contributionsCount} commits`}
                    className={`aspect-square rounded-sm cursor-pointer transition-all duration-300 hover:scale-125 ${getHeatmapColor(day.contributionsCount)} ${
                      isSelected ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 scale-125' : ''
                    }`}
                  />
                );
              })}
            </div>

            <p className="text-[10px] font-sans font-bold uppercase tracking-normal text-text-muted">
              *Hover or click over any daily contribution grid pixel block to analyze code action events.
            </p>
          </div>

          {/* Languages breakdown charts */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-sans text-xs uppercase tracking-widest text-text font-extrabold border-b border-border-light pb-2 mb-4">
                Global Codebase Share
              </div>
              
              {/* Complex progress percentage divider line */}
              <div className="w-full bg-surface-hover h-6 rounded-xl overflow-hidden flex mb-4 shadow-inner">
                <div className={`h-full ${
                  syntaxTheme === 'blue' ? 'bg-indigo-600' : 
                  syntaxTheme === 'purple' ? 'bg-purple-600' : 
                  'bg-emerald-500'
                }`} style={{ width: '60%' }} title="JavaScript" />
                <div className={`h-full ${
                  syntaxTheme === 'blue' ? 'bg-purple-600' : 
                  syntaxTheme === 'purple' ? 'bg-indigo-600' : 
                  'bg-emerald-700'
                }`} style={{ width: '25%' }} title="TypeScript" />
                <div className="h-full bg-emerald-500" style={{ width: '15%' }} title="CSS" />
              </div>

              {/* Language keys bullet guides */}
              <ul className="space-y-2">
                <li className="flex items-center justify-between font-sans text-xs text-text-secondary font-semibold">
                  <span className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${
                      syntaxTheme === 'blue' ? 'bg-indigo-600' : 
                      syntaxTheme === 'purple' ? 'bg-purple-600' : 
                      'bg-emerald-500'
                    }`} />
                    JavaScript
                  </span>
                  <span className="font-extrabold text-text text-right">60%</span>
                </li>
                <li className="flex items-center justify-between font-sans text-xs text-text-secondary font-semibold">
                  <span className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${
                      syntaxTheme === 'blue' ? 'bg-purple-600' : 
                      syntaxTheme === 'purple' ? 'bg-indigo-600' : 
                      'bg-emerald-700'
                    }`} />
                    TypeScript
                  </span>
                  <span className="font-extrabold text-text text-right">25%</span>
                </li>
                <li className="flex items-center justify-between font-sans text-xs text-text-secondary font-semibold">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    CSS / Styled Layers
                  </span>
                  <span className="font-extrabold text-text text-right">15%</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Selected day activity inspector */}
        <div className="mt-6 min-h-[80px]">
          {selectedDay ? (
            <div className="bg-surface-muted border border-border p-5 rounded-2xl">
              <div className="flex justify-between items-center border-b border-border pb-2 mb-2 flex-wrap gap-2">
                <span className="font-sans font-bold text-text text-sm">{selectedDay.dateString}</span>
                <span className={`font-sans text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                  selectedDay.contributionsCount > 0 ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50' : 'bg-slate-200/65 text-text-secondary'
                }`}>
                  {selectedDay.contributionsCount} VCS events
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed font-sans font-medium">
                {selectedDay.accomplishment}
              </p>
            </div>
          ) : (
            <div className="text-center text-xs text-text-muted font-sans font-bold uppercase py-4 border border-dashed border-border rounded-xl bg-surface-muted">
              Inspect simulated Git commits by clicking on any colored day square block in the VCS matrix.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
