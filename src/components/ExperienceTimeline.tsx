"use client";

import React from "react";
import { EXPERIENCES, EDUCATION } from "@/data/experience";
import { 
  Building2, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Terminal,
  Layers,
  ArrowUpRight
} from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Career History & Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Real-world software engineering across financial technology systems, enterprise backend microservices, and distributed data infrastructure.
            </p>
          </div>
        </div>

        {/* Work Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-xl hover:border-indigo-500/40 transition-all duration-300 space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-lg font-bold text-indigo-400">
                      @ {exp.company}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono">
                    {exp.domain}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {exp.summary}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-2.5">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 font-mono block">
                  Key Engineering Responsibilities & Outcomes:
                </span>
                <div className="grid grid-cols-1 gap-2 pl-1">
                  {exp.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 font-mono block mb-2">
                  Applied Technologies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="pt-8 border-t border-slate-800/80 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-md space-y-4 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-indigo-400 font-mono mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {edu.graduationDate}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300">
                  {edu.details.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {edu.focusAreas.map((area, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-400 font-mono border border-slate-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
