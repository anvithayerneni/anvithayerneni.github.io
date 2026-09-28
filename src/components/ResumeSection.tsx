"use client";

import React, { useState } from "react";
import { EXPERIENCES, EDUCATION } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { 
  FileText, 
  Printer, 
  Download, 
  Eye, 
  ExternalLink, 
  Building2, 
  GraduationCap, 
  Layers, 
  Mail, 
  Phone,
  Sparkles,
  X,
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function ResumeSection() {
  const [showModal, setShowModal] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Professional Resume
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Explore the complete engineering resume formatted for recruiters and hiring managers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-mono shadow-sm transition-all"
            >
              <Eye className="w-4 h-4" />
              <span>View Interactive Resume</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono transition-colors"
            >
              <Printer className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Embedded Resume Preview Sheet */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#090e1a]/95 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl space-y-10 text-slate-700 dark:text-slate-200">
          {/* Header Strip */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  ANVITHA YERNENI
                </h3>
                <div className="text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 mt-1 font-mono">
                  Software Engineer | AI Engineer | Full Stack Engineer | Data Engineer
                </div>
              </div>

              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                864-788-2122
              </span>
            </div>

            {/* Links Row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <a
                href="mailto:anvithayerneni22@gmail.com"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>anvithayerneni22@gmail.com</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/yernenianvitha22/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1.5 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                <span>linkedin.com/in/yernenianvitha22</span>
              </a>
              <span>•</span>
              <a
                href="https://github.com/anvithayerneni"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                <span>github.com/anvithayerneni</span>
              </a>
            </div>

            {/* Executive Summary */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              Software Engineer with an M.S. in Computer Science from Clemson University and experience engineering high-performance backend microservices, financial validation pipelines, event-driven streaming architectures (Kafka, Redis), and production generative AI workflows (LangGraph, Azure AI Search, anti-hallucination grounding).
            </p>
          </div>

          {/* Education Row */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 font-mono flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-1 text-xs p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white text-sm">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-normal">{edu.graduationDate}</span>
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-300 font-mono">{edu.institution}</div>
                  <div className="pt-2 text-slate-600 dark:text-slate-300 space-y-1">
                    {edu.details.map((d, dIdx) => (
                      <p key={dIdx}>• {d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Work Experience */}
          <div className="space-y-6 border-b border-slate-200 dark:border-slate-800 pb-8">
            <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 font-mono flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>Professional Experience</span>
            </h4>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-base">
                        {exp.role}
                      </span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold ml-2">
                        @ {exp.company}
                      </span>
                    </div>
                    <span className="font-mono text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pl-1 pt-1">
                    {exp.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <strong className="text-slate-700 dark:text-slate-300">Stack:</strong> {exp.technologies.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div className="space-y-6 border-b border-slate-200 dark:border-slate-800 pb-8">
            <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Featured Engineering Systems</span>
            </h4>

            <div className="space-y-5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{proj.title}</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs ml-2">({proj.featuredRole})</span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                      {proj.githubStatus === "coming_soon" ? "Repository coming soon" : `github.com/anvithayerneni/${proj.slug}`}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {proj.tagline}
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                    <strong className="text-slate-700 dark:text-slate-300">Technologies:</strong> {proj.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Technical Skills & Tools</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white font-mono block">Languages & Frameworks:</strong>
                <p className="text-slate-600 dark:text-slate-400 font-mono mt-1">Python 3.11, Java 21, FastAPI, Spring Boot 3, TypeScript, React 18, Next.js 14, SQL</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white font-mono block">AI & Generative Systems:</strong>
                <p className="text-slate-600 dark:text-slate-400 font-mono mt-1">LangGraph, Azure OpenAI (GPT-4o), Azure AI Search, Vector Embeddings, RAG, scikit-learn</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white font-mono block">Data & Messaging:</strong>
                <p className="text-slate-600 dark:text-slate-400 font-mono mt-1">PySpark, DuckDB Star Schema, Delta Lake, Apache Kafka, WebSockets, Redis, PostgreSQL (GiST Locks)</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white font-mono block">Cloud & DevOps:</strong>
                <p className="text-slate-600 dark:text-slate-400 font-mono mt-1">AWS, Azure, Docker, CI/CD Pipelines, GitHub Actions, Terraform IaC, Pytest, JUnit 5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for full screen view if requested */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Interactive Resume Viewer</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Print
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                You can save this resume as a clean PDF using your browser print menu (Cmd+P / Ctrl+P).
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
