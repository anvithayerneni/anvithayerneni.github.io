"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LENSES, LensDefinition } from "@/data/lenses";
import { PROJECTS } from "@/data/projects";
import { IconRenderer } from "@/components/IconRenderer";
import { 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight,
  ExternalLink
} from "lucide-react";

export default function LensesPage() {
  const [selectedLensId, setSelectedLensId] = useState<string>("engineering");

  const lensKeys = Object.keys(LENSES);
  const activeLens: LensDefinition = LENSES[selectedLensId] || LENSES.engineering;

  // Filter projects for active lens
  const relevantProjects = PROJECTS.filter((p) =>
    activeLens.recommendedProjects.includes(p.slug) || activeLens.recommendedProjects.includes(p.id)
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Role-Specific Perspectives</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore My Work by Perspective
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Tailored engineering summaries, architectural invariants, and project evidence mapped to your technical hiring priorities.
          </p>
        </div>

        {/* Lens Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {lensKeys.map((key) => {
            const lens = LENSES[key];
            const isSelected = selectedLensId === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedLensId(key)}
                className={`p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between space-y-2 focus:outline-none ${
                  isSelected
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20"
                    : "bg-[#090e1a] border-slate-800 text-slate-300 hover:bg-slate-900"
                }`}
              >
                <IconRenderer name={lens.iconName} className={`w-5 h-5 ${isSelected ? "text-white" : "text-indigo-400"}`} />
                <div>
                  <span className="text-xs font-bold block leading-tight">
                    {lens.label}
                  </span>
                  <span className={`text-[10px] block mt-0.5 font-mono ${isSelected ? "text-indigo-100" : "text-slate-500"}`}>
                    {lens.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lens In-Depth Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Lens Narrative, Skills & Interview Defense */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {activeLens.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Tailored Perspective
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {activeLens.headline}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeLens.description}
              </p>

              {/* Skills */}
              <div className="pt-4 border-t border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  Verified Technical & Domain Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeLens.keySkills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Evidence Points */}
              <div className="pt-4 border-t border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  Concrete Evidence in My Work
                </h3>
                <ul className="space-y-2">
                  {activeLens.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5"></span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FinTech Specific Experience Banner */}
              {activeLens.id === "finance" && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-900/60 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-mono">
                    Industry Track Record: Susser Bank
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Engineered financial software systems, loan evaluation workflows, and regulatory validation pipelines. Enforced defensive data validation and transactional audit integrity across relational banking tables.
                  </p>
                  <Link
                    href="/#experience"
                    className="text-xs font-semibold text-emerald-400 underline inline-flex items-center gap-1 font-mono"
                  >
                    <span>View full Susser Bank experience breakdown</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Interview Prep / Perspective Q&A Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-indigo-950/30 border border-indigo-900/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider font-mono">
                <HelpCircle className="w-4 h-4 text-indigo-400" />
                <span>Interview Discussion Point</span>
              </div>
              <p className="text-sm font-bold text-white">
                &quot;{activeLens.interviewQuestion}&quot;
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                &quot;{activeLens.interviewAnswer}&quot;
              </p>
            </div>
          </div>

          {/* Right Column: Tailored Project Recommendations */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Primary Evidence Projects ({relevantProjects.length})
              </h3>
              <Link
                href="/work"
                className="text-xs font-semibold text-indigo-400 hover:underline inline-flex items-center gap-1 font-mono"
              >
                <span>All Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {relevantProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-xl bg-[#090e1a]/95 border border-slate-800 shadow-sm hover:border-indigo-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {project.domain}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800">
                      {project.featuredRole}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {project.title}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                    <Link
                      href={`/work/${project.slug}`}
                      className="font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>Inspect Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
