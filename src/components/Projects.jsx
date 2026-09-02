import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle, 
  Sparkles, 
  ArrowUpRight, 
  X, 
  ShieldCheck 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects & System Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Real-world web applications and backend systems built with modern MERN architecture, REST APIs, and robust security.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group card-hover"
            >
              <div className="p-6 sm:p-8">
                
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                    {project.category}
                  </span>
                  
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-700/60">
                      <Sparkles size={12} />
                      <span>Featured Project</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2.5 mb-6">
                  {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions Bar */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer focus:outline-none"
                >
                  <span>View Details</span>
                  <ArrowUpRight size={16} />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                    title="View Source Code"
                  >
                    <GithubIcon size={16} />
                    <span>Source</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-3.5 py-2 rounded-lg shadow-sm shadow-indigo-500/20 transition-colors"
                    title="Open Live Preview"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 relative text-left">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 mb-3 inline-block">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {selectedProject.shortDescription}
              </p>

              {/* Architecture & Engineering Highlights */}
              <div className="mb-6 p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 mb-3">
                  <ShieldCheck size={16} />
                  <span>Architecture & Technical Highlights</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {selectedProject.architectureHighlights.map((arch, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-500 font-bold">•</span>
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Implementation Points */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Key Features Implemented
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-xs sm:text-sm cursor-pointer"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/25 cursor-pointer"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
