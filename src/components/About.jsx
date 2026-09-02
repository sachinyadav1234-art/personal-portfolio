import React from 'react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/sachin.jpg';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Cpu, 
  Server, 
  Sparkles, 
  CheckCircle, 
  Award, 
  Layers 
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: "Software Engineering",
      desc: "Architecting modern full-stack web applications using React.js, Node.js, Express.js, and MongoDB with secure REST APIs and JWT auth.",
      icon: Server,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "DSA & Problem Solving",
      desc: "Strong problem-solving foundation in Java, with 150+ LeetCode problems solved across Trees, Graphs, Dynamic Programming, and Arrays.",
      icon: Cpu,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Clean API & System Design",
      desc: "Designing modular MVC structures, robust database schemas, double-entry financial ledgers, and comprehensive Postman documentation.",
      icon: Layers,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Continuous Innovation",
      desc: "Finalist in Code-War Hackathon, eager to tackle real-world engineering challenges, learn emerging frameworks, and contribute to top engineering teams.",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate Developer, Problem Solver & Learner
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Bridging foundational Computer Science theory with modern full-stack web engineering.
          </p>
        </div>

        {/* Top Grid: Bio + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Bio Card */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={profileImg}
                    alt="Sachin Yadav"
                    className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-indigo-500 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center">
                    <CheckCircle size={12} className="text-white" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {personalInfo.title}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a motivated <span className="font-semibold text-slate-900 dark:text-white">B.Tech Information Technology student at ABES Engineering College (2023–2027)</span> with a strong drive to build scalable software and digital products that solve genuine problems.
                </p>
                <p>
                  My engineering focus revolves around the <span className="font-semibold text-slate-900 dark:text-white">MERN stack</span> (MongoDB, Express.js, React.js, Node.js), crafting modular RESTful APIs, securing backend pipelines with JWT, and engineering clean, accessible interfaces with Tailwind CSS.
                </p>
                <p>
                  Complementing my web development skills, I actively practice algorithmic problem solving with <span className="font-semibold text-slate-900 dark:text-white">Data Structures and Algorithms in Java</span>, having solved over 150+ problems on LeetCode.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-indigo-500" />
                <span>Ghaziabad / Delhi NCR, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-indigo-500" />
                <span>Graduation: 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-500" />
                <span>Open for Internships</span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-slate-100 dark:from-slate-900 dark:via-indigo-950/30 dark:to-slate-900 rounded-3xl p-6 sm:p-8 border border-indigo-100 dark:border-indigo-900/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
                  <GraduationCap size={16} />
                  <span>Academic Background</span>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  2023 – 2027
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                ABES Engineering College
              </h3>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                Bachelor of Technology (B.Tech) in Information Technology
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Coursework & Fundamentals:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>Data Structures & Algorithms</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>OOPs in Java</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>Database Management (DBMS)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>Operating Systems</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>Computer Networks</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>Web Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-800/60 flex items-center gap-3">
              <Award size={22} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="text-xs text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">Active Participant:</span> Technical events, coding rounds, and competitive hackathons at ABES EC.
              </div>
            </div>

          </div>
        </div>

        {/* Engineering Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 hover:shadow-lg transition-all card-hover group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
