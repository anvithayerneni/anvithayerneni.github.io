"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LENSES, LensDefinition } from "@/data/lenses";
import { PROJECTS } from "@/data/projects";
import { IconRenderer } from "./IconRenderer";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight,
  ExternalLink
} from "lucide-react";

export function LensSelector({ defaultLens = "engineering" }: { defaultLens?: string }) {
  const [activeLensId, setActiveLensId] = useState<string>(defaultLens);

  const lensKeys = Object.keys(LENSES);
  const activeLens: LensDefinition = LENSES[activeLensId] || LENSES.engineering;

  // Filter projects recommended for this lens
  const relevantProjects = PROJECTS.filter((p) => 
    activeLens.recommendedProjects.includes(p.slug) || activeLens.recommendedProjects.includes(p.id)
  );

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore My Work by Perspective</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              One Portfolio. Multiple Engineering Perspectives.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Discover verified architectural evidence tailored to your specific engineering priorities.
            </p>
          </div>

          <Link
            href="/lenses"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors font-mono uppercase tracking-wider"
          >
            <span>View All Perspectives</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Lens Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none border-b border-slate-800">
          {lensKeys.map((key) => {
            const lens = LENSES[key];
            const isActive = activeLensId === key;
            return (
              <button
                key={key}
                onClick={() => setActiveLensId(key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 focus:outline-none ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "bg-[#090e1a] text-slate-300 border border-slate-800 hover:bg-slate-900"
                }`}
              >
                <IconRenderer name={lens.iconName} className={`w-4 h-4 ${isActive ? "text-white" : "text-indigo-400"}`} />
                <span>{lens.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Lens Detail Panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Lens Persona & Highlight Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {activeLens.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">Perspective View</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeLens.headline}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeLens.description}
              </p>

              {/* Key Capabilities */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 font-mono mb-3">
                  Verified Skills for this Discipline
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeLens.keySkills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Project Evidence Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 font-mono mb-3">
                  Key Evidence in My Work
                </h4>
                <ul className="space-y-2">
                  {activeLens.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interview Prep / Perspective Q&A Box */}
            <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-900/50">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider font-mono mb-2">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                <span>Interview Discussion Point</span>
              </div>
              <p className="text-sm font-semibold text-white">
                &quot;{activeLens.interviewQuestion}&quot;
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                &quot;{activeLens.interviewAnswer}&quot;
              </p>
            </div>
          </div>

          {/* Right Column: Relevant Evidence Projects */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Relevant Projects ({relevantProjects.length})
              </h4>
              <Link
                href="/work"
                className="text-xs font-semibold text-indigo-400 hover:underline flex items-center gap-1 font-mono"
              >
                <span>Filter all work</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-3">
              {relevantProjects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-xl bg-[#090e1a]/95 border border-slate-800 hover:border-indigo-500/40 shadow-sm transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {project.domain}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800">
                      {project.featuredRole}
                    </span>
                  </div>

                  <h5 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h5>

                  <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                    <Link
                      href={`/work/${project.slug}`}
                      className="font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>Read Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
