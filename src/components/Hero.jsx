import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/sachin.jpg';
import { 
  ArrowRight, 
  FileText, 
  Copy, 
  Check, 
  GraduationCap, 
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{
            backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering & Developer Roles</span>
            </div>

            {/* Academic Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400 mb-3">
              <GraduationCap size={18} className="text-indigo-600 dark:text-indigo-400" />
              <span>B.Tech IT (2023–2027) • ABES Engineering College</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Sachin Yadav
              </span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Aspiring <span className="font-semibold text-slate-900 dark:text-white">Software Engineer & Software Developer</span> and problem solver. Building performant web applications, scalable backend systems, and solving Data Structures & Algorithms in Java.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all text-sm sm:text-base w-full sm:w-auto cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all text-sm sm:text-base w-full sm:w-auto cursor-pointer"
              >
                <FileText size={18} className="text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors text-sm sm:text-base"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social & Coding Profiles */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full justify-center lg:justify-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect & Profiles:
              </span>
              
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 hover:scale-110 transition-all shadow-sm group"
                  title="GitHub"
                >
                  <GithubIcon size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 hover:scale-110 transition-all shadow-sm group"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>

                {/* LeetCode with 150+ Solved Pill */}
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-300 dark:border-amber-700/60 text-amber-700 dark:text-amber-400 hover:scale-105 transition-all shadow-sm font-mono text-xs font-semibold"
                  title="LeetCode Profile"
                >
                  <LeetCodeIcon size={18} />
                  <span>LeetCode 150+</span>
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 text-xs font-medium transition-all shadow-sm cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={16} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="hidden sm:inline">Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo & Interactive Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/25 to-purple-500/25 rounded-3xl blur-3xl -z-10 transform scale-105" />

            {/* Photo Card Container */}
            <div className="relative w-full max-w-sm rounded-3xl p-2.5 bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-slate-200/50 dark:to-slate-800/50 backdrop-blur-md shadow-2xl border border-white/60 dark:border-slate-700/60 group">
              
              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-inner">
                <img
                  src={profileImg}
                  alt="Sachin Yadav"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Gradient Overlay on Photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Software Engineer & Developer</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Sachin Yadav
                  </h3>
                  <p className="text-xs text-slate-300">
                    ABES EC (2023–2027) • Ghaziabad
                  </p>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 animate-float">
                <Sparkles size={14} className="text-amber-500" />
                <span>Software Dev & DSA</span>
              </div>
            </div>

            {/* Floating Stat Badges Under Photo */}
            <div className="grid grid-cols-2 gap-3 mt-5 w-full max-w-sm">
              <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg backdrop-blur-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <LeetCodeIcon size={20} />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 dark:text-white text-base">150+ Solved</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">LeetCode DSA Java</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-lg backdrop-blur-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Layers size={20} />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 dark:text-white text-base">Full-Stack Dev</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">React, Node, Java, SQL</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
