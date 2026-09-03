import React, { useState } from 'react';
import { personalInfo, resumeData } from '../data/portfolioData';
import profileImg from '../assets/sachin.jpg';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  MapPin, 
  Mail 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(resumeData.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative text-left my-auto">
        
        {/* Sticky Header with Action Controls */}
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Sachin Yadav - Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer size={18} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-800 dark:text-slate-200 text-sm">
          
          {/* Header Info */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              src={profileImg}
              alt="Sachin Yadav"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-indigo-500 shadow-md shrink-0"
            />
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Sachin Yadav
              </h1>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm sm:text-base mt-1">
                B.Tech IT Student (2023–2027) | Software Engineer & Software Developer
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin size={13} /> {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={13} /> {personalInfo.email}
                </span>
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-indigo-500 flex items-center gap-1">
                  <GithubIcon size={13} /> GitHub
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-500 flex items-center gap-1">
                  <LinkedinIcon size={13} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Professional Summary
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {resumeData.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
              Education
            </h4>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-bold text-slate-900 dark:text-white">
                  {resumeData.education.degree}
                </span>
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                  {resumeData.education.duration}
                </span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                {resumeData.education.college}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
              Technical Skills
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Languages: </span>
                <span className="text-slate-600 dark:text-slate-300">{resumeData.technicalSkills.languages}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Frontend: </span>
                <span className="text-slate-600 dark:text-slate-300">{resumeData.technicalSkills.frontend}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">System Design: </span>
                <span className="text-slate-600 dark:text-slate-300">{resumeData.technicalSkills.systemDesign}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Backend & APIs: </span>
                <span className="text-slate-600 dark:text-slate-300">{resumeData.technicalSkills.backend}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Databases: </span>
                <span className="text-slate-600 dark:text-slate-300">{resumeData.technicalSkills.databases}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Tools & Workflow: </span>
                <span className="text-slate-600 dark:text-slate-300">{resumeData.technicalSkills.developerTools}</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
              Key Projects
            </h4>
            <div className="space-y-3">
              {resumeData.keyProjects.map((p, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                  <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1">
                    {p.name}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Achievements & Certifications
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {resumeData.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 cursor-pointer"
          >
            {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
            <span>{copied ? 'Summary Copied' : 'Copy Summary'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 cursor-pointer"
            >
              <Download size={16} />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
