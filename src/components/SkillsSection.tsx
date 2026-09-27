"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/capabilities";
import { 
  BrainCircuit, 
  Server, 
  Database, 
  Cloud, 
  Layers, 
  Radio, 
  Layout, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck 
} from "lucide-react";

export function SkillsSection() {
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
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Skills & Core Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Engineering Disciplines
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Structured technical stack across applied AI, distributed backends, lakehouse data pipelines, cloud infrastructure, and automated testing.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || Cpu;
            return (
              <div
                key={category.id}
                className="p-6 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-900/60 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {category.skills.length} Technologies
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:border-indigo-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
