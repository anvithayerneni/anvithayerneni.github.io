"use client";

import React from "react";
import Link from "next/link";
import { SKILL_CATEGORIES } from "@/data/capabilities";
import { PROJECTS } from "@/data/projects";
import { 
  Cpu, 
  CheckCircle2, 
  ChevronRight,
  BrainCircuit,
  Server,
  Database,
  Cloud,
  Layers,
  Radio,
  Layout
} from "lucide-react";

export default function CapabilitiesPage() {
  const iconMap: Record<string, any> = {
    BrainCircuit: BrainCircuit,
    Server: Server,
    Database: Database,
    Cloud: Cloud,
    Layers: Layers,
    Radio: Radio,
    Layout: Layout,
    CheckCircle2: CheckCircle2,
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities & Engineering Skills</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Capabilities & Engineering Disciplines
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Organized across applied AI/GenAI systems, distributed microservices, lakehouse data engineering, cloud infrastructure, and automated testing.
          </p>
        </div>

        {/* Capability Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <div
                key={cat.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#090e1a]/95 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5"
              >
                <div className="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {cat.skills.length} Core Technologies
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
