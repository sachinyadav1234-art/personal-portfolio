import React, { useState } from 'react';
import { resumeData } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  MapPin, 
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `${resumeData.header.name}\n${resumeData.header.location} | ${resumeData.header.phone} | ${resumeData.header.email}\nhttps://${resumeData.header.leetcode} | https://${resumeData.header.github} | https://${resumeData.header.linkedin}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { header, education, technicalSkills, training, projects, achievements, certificates, extracurricular } = resumeData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[94vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative text-left my-auto flex flex-col">
        
        {/* Sticky Header with Action Controls */}
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Sachin Yadav - Official Resume
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

        {/* Formal Printable Resume Document */}
        <div className="p-6 sm:p-10 space-y-6 text-slate-900 dark:text-slate-100 font-sans text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto w-full">
          
          {/* Resume Header */}
          <div className="text-center pb-4 border-b-2 border-slate-800 dark:border-slate-200">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider mb-2 text-slate-900 dark:text-white">
              {header.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span>{header.location}</span>
              <span>|</span>
              <span>{header.phone}</span>
              <span>|</span>
              <span>{header.email}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs mt-2 text-indigo-600 dark:text-indigo-400 font-medium">
              <a href={`https://${header.leetcode}`} target="_blank" rel="noreferrer" className="underline hover:text-indigo-800 dark:hover:text-indigo-300">
                {header.leetcode}
              </a>
              <span>|</span>
              <a href={`https://${header.github}`} target="_blank" rel="noreferrer" className="underline hover:text-indigo-800 dark:hover:text-indigo-300">
                {header.github}
              </a>
              <span>|</span>
              <a href={`https://${header.linkedin}`} target="_blank" rel="noreferrer" className="underline hover:text-indigo-800 dark:hover:text-indigo-300">
                {header.linkedin}
              </a>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold">
                    <span>{edu.degree}, {edu.institution}</span>
                    <span className="italic font-normal text-slate-600 dark:text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    • {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL SKILLS SECTION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div><span className="font-bold">• Languages:</span> {technicalSkills.languages}</div>
              <div><span className="font-bold">• Frontend:</span> {technicalSkills.frontend}</div>
              <div><span className="font-bold">• Backend:</span> {technicalSkills.backend}</div>
              <div><span className="font-bold">• Database:</span> {technicalSkills.database}</div>
              <div><span className="font-bold">• Tools:</span> {technicalSkills.tools}</div>
              <div><span className="font-bold">• Concepts:</span> {technicalSkills.concepts}</div>
            </div>
          </div>

          {/* TRAINING SECTION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-1 mb-3">
              Training
            </h2>
            <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1">
              {training.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </div>

          {/* PROJECTS SECTION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold">
                    <span>{proj.title}</span>
                    <span className="italic font-normal text-slate-600 dark:text-slate-400">{proj.tech}</span>
                  </div>
                  <div className="text-xs italic text-indigo-600 dark:text-indigo-400 mb-1">
                    Live: <a href={`https://${proj.live}`} target="_blank" rel="noreferrer" className="underline">{proj.live}</a>
                  </div>
                  <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS SECTION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-1 mb-3">
              Achievements
            </h2>
            <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
              {achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>

          {/* CERTIFICATES SECTION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-1 mb-3">
              Certificates
            </h2>
            <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
              {certificates.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>

          {/* EXTRACURRICULAR SECTION */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-400 dark:border-slate-600 pb-1 mb-3">
              Extracurricular
            </h2>
            <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300">
              {extracurricular.map((extra, idx) => (
                <li key={idx}>{extra}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 mt-auto">
          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 cursor-pointer"
          >
            {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
            <span>{copied ? 'Header Copied' : 'Copy Contact Info'}</span>
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
