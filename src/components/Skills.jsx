import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Wrench, 
  Code, 
  Server, 
  Database, 
  Terminal, 
  Layers, 
  FileCode, 
  Cpu, 
  Layout, 
  Binary, 
  Atom, 
  Palette, 
  Smartphone, 
  Network, 
  Zap, 
  Send, 
  ShieldCheck, 
  Activity, 
  GitBranch, 
  Boxes, 
  Code2,
  CheckCircle2,
  Lock,
  Shield
} from 'lucide-react';

const iconMap = {
  FileCode,
  Cpu,
  Database,
  Layout,
  Terminal,
  Binary,
  Atom,
  Palette,
  Smartphone,
  Network,
  Server,
  Zap,
  Send,
  ShieldCheck,
  Layers,
  Activity,
  GitBranch,
  Boxes,
  Code2,
  Code,
  Lock,
  Shield
};

export default function Skills() {
  const tabs = skillCategories.map(c => c.category);
  const [activeTab, setActiveTab] = useState(tabs[0] || 'Languages');

  const displayedSkills = (skillCategories.find(c => c.category === activeTab)?.skills || []).map(s => ({ ...s, category: activeTab }));

  return (
    <section id="skills" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench size={14} />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Technologies, frameworks, and engineering tools I utilize to craft full-stack digital solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {displayedSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <IconComponent size={20} />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      skill.level === 'Advanced'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60'
                        : skill.level === 'Intermediate'
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}>
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {skill.tag}
                  </span>
                  <CheckCircle2 size={14} className="text-indigo-500/80 group-hover:text-indigo-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Summary Banner */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1">
                MERN Stack
              </div>
              <p className="text-xs sm:text-sm text-indigo-100">
                End-to-End React, Node, Express & MongoDB development with JWT security.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-indigo-700/60 pt-4 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">
                150+ LeetCode
              </div>
              <p className="text-xs sm:text-sm text-indigo-100">
                Proficient in Data Structures & Algorithms (Trees, Graphs, DP) in Java.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-indigo-700/60 pt-4 md:pt-0 md:pl-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 mb-1">
                REST & APIs
              </div>
              <p className="text-xs sm:text-sm text-indigo-100">
                Robust API testing via Postman, Git version control, and modular architecture.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
