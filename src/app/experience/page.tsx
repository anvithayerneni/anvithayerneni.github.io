"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCES, EDUCATION } from "@/data/experience";
import { 
  Briefcase, 
  GraduationCap, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  FileText
} from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career & Education</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience & Academic Background
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hands-on software engineering across banking, financial workflows, and enterprise distributed systems, complemented by an M.S. in Computer Science from Clemson University.
          </p>
        </div>

        {/* Professional Experience Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-indigo-400" />
              <span>Software Engineering Positions</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              Verified Experience
            </span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                id={exp.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-xl space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.location}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 mt-0.5">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono block">
                    Key Engineering Contributions:
                  </span>
                  <ul className="space-y-2">
                    {exp.highlights.map((hl, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
              <span>Academic Degrees</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              Computer Science Degrees
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-400 border border-indigo-800">
                      {edu.graduationDate}
                    </span>
                    <span className="text-xs text-slate-400">
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-300">
                    {edu.institution}
                  </p>

                  <div className="space-y-2 text-xs text-slate-300 pt-1">
                    {edu.details.map((d, dIdx) => (
                      <p key={dIdx} className="leading-relaxed">
                        • {d}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {edu.focusAreas.map((area, aIdx) => (
                    <span
                      key={aIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-mono border border-slate-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Bottom */}
        <div className="p-6 rounded-2xl bg-[#090e1a]/95 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-white text-base">
              Looking for the full resume summary?
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              View the printable resume sheet or save directly to PDF.
            </p>
          </div>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-mono shadow-sm whitespace-nowrap"
          >
            <FileText className="w-4 h-4" />
            <span>Open Resume View</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
