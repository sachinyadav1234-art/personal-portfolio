import React from 'react';
import { achievementsData, personalInfo } from '../data/portfolioData';
import { 
  Award, 
  Trophy, 
  Code, 
  ExternalLink, 
  Flame, 
  FileCheck 
} from 'lucide-react';

const iconMap = {
  Code,
  Trophy,
  Award,
  FileCheck
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy size={14} />
            <span>Milestones & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Validation of problem-solving rigor, hackathon teamwork, and technical capabilities.
          </p>
        </div>

        {/* Highlight Banner: LeetCode Milestone */}
        <div className="mb-12 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-indigo-500/10 dark:from-amber-950/30 dark:via-slate-900 dark:to-indigo-950/30 rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-amber-800/60 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold mb-3">
                <Flame size={14} className="text-amber-500" />
                <span>DSA Milestone • Java</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                150+ LeetCode Challenges Solved
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Consistent daily practice tackling Data Structures & Algorithms problems in Java. Proficient in optimizing time and space complexity across Arrays, Strings, Binary Trees, Graphs, Recursion, and Dynamic Programming.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  ⚡ 150+ Solved
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  ☕ Primary: Java
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  🎯 Trees, DP & Graphs
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto lg:w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md shadow-amber-500/25 transition-all"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>

          </div>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.slice(1).map((item) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col justify-between group card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                      {item.badgeText}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
                    {item.organization} • {item.date}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
                    {item.metrics.map((m, i) => (
                      <div key={i} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                        <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {item.link && item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
