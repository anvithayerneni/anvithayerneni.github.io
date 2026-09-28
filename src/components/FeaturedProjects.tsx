"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PROJECTS, ProjectCategoryFilter } from "@/data/projects";
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Workflow,
  ChevronRight,
  Sparkles,
  Database,
  Cpu,
  ShieldAlert,
  Clock,
  Code
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategoryFilter>("ALL");

  const filterTabs: ProjectCategoryFilter[] = [
    "ALL",
    "AI / GENAI",
    "SOFTWARE ENGINEERING",
    "FULL STACK",
    "DATA",
    "BACKEND",
    "CLOUD"
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Production-oriented software platforms, agentic AI systems, lakehouse data pipelines, and event-driven architectures.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 uppercase tracking-wider font-mono transition-colors"
          >
            <span>Browse All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 shadow-xs">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-[#090e1a]/95 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Core Narrative & Problem/Solution */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80">
                        {project.featuredRole}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        {project.domain}
                      </span>
                      {project.metrics && project.metrics[0] && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span>{project.metrics[0].value}</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {project.tagline}
                    </p>

                    {/* Problem / Solution Snapshot */}
                    {project.caseStudy && (
                      <div className="mt-5 space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 font-mono">
                            The Problem:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 line-clamp-2 mt-0.5 leading-relaxed">
                            {project.caseStudy.problem}
                          </p>
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-mono">
                            The Architectural Solution:
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 line-clamp-2 mt-0.5 leading-relaxed">
                            {project.caseStudy.solution}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Key Capabilities */}
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 font-mono block mb-2">
                      Key Capabilities & Invariants:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.capabilities.slice(0, 5).map((cap, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/50 font-medium"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 uppercase tracking-wider font-mono"
                    >
                      <span>View Full Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    {project.githubStatus === "coming_soon" ? (
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono">
                        <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                        <span>Repository coming soon</span>
                      </span>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                        <span>GitHub Source</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    )}

                    {project.liveUrl && project.liveUrl.startsWith("http") && !project.liveUrl.includes("localhost") && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs sm:text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Architecture Preview & Tech Matrix */}
                <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-6">
                  {/* Architecture Subsystem Nodes */}
                  {project.caseStudy && (
                    <div>
                      <div className="flex items-center justify-between mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="text-xs uppercase font-bold tracking-wider text-indigo-700 dark:text-indigo-400 font-mono flex items-center gap-1.5">
                          <Workflow className="w-3.5 h-3.5" />
                          <span>Architecture Breakdown</span>
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                          {project.caseStudy.architectureComponents.length} Subsystems
                        </span>
                      </div>

                      <div className="space-y-2">
                        {project.caseStudy.architectureComponents.slice(0, 4).map((comp, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-xs space-y-1 shadow-2xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900 dark:text-white">
                                {comp.name}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 font-mono border border-indigo-200 dark:border-slate-800">
                                {comp.role}
                              </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-[11px] font-mono line-clamp-1">
                              {comp.tech}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Verified Tech Stack Chips */}
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 font-mono block mb-2">
                      Verified Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-[11px] rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-mono shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Seeded Demo Accounts or Verified Outcome */}
                  {project.demoAccounts && project.demoAccounts.length > 0 ? (
                    <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/40 text-xs">
                      <span className="font-bold text-indigo-800 dark:text-indigo-300 font-mono block mb-1">
                        Seeded Demo Personas:
                      </span>
                      <div className="flex flex-wrap gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                        {project.demoAccounts.map((acc, idx) => (
                          <span key={idx} className="font-medium">
                            • {acc.role} ({acc.email})
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : project.metrics && project.metrics[1] ? (
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 text-xs flex items-center justify-between">
                      <span className="text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                        {project.metrics[1].label}
                      </span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 font-mono text-[11px]">
                        {project.metrics[1].value}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
