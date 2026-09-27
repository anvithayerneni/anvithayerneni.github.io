"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SKILL_CATEGORIES } from "@/data/capabilities";
import { Cpu, CheckCircle2, ChevronRight, BrainCircuit, Server, Database, Cloud, Layers, Radio, Layout } from "lucide-react";

export function CapabilitiesGrid() {
  const [activeGroup, setActiveGroup] = useState<string>("all");

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

  const filteredCategories = activeGroup === "all" 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter((g) => g.id === activeGroup);

  return (
    <section className="py-16 lg:py-24 relative" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical & Applied Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Core Capabilities Matrix
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Organized technical disciplines backed by real source code and enterprise experience.
            </p>
          </div>

          <Link
            href="/capabilities"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors font-mono uppercase tracking-wider"
          >
            <span>Explore Full Capability Index</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-xl hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-900/60 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {cat.title}
                      </h3>
                      <p className="text-[10px] font-mono text-slate-400">
                        {cat.skills.length} Technologies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-800">
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
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
