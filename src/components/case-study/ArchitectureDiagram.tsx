"use client";

import React, { useState } from "react";
import { ArchitectureComponent } from "@/data/projects";
import { 
  Workflow, 
  CheckCircle2
} from "lucide-react";

interface ArchitectureDiagramProps {
  projectSlug?: string;
  components: ArchitectureComponent[];
  summary: string;
}

export function ArchitectureDiagram({ components, summary }: ArchitectureDiagramProps) {
  const [selectedComponent, setSelectedComponent] = useState<ArchitectureComponent | null>(
    components[0] || null
  );

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <Workflow className="w-4 h-4" />
            <span>Interactive System Architecture Map</span>
          </span>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
            Subsystems & Data Flow Graph
          </h4>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          Click any node to inspect responsibilities
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {summary}
      </p>

      {/* Component Nodes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {components.map((comp) => {
          const isSelected = selectedComponent?.name === comp.name;
          return (
            <button
              key={comp.name}
              onClick={() => setSelectedComponent(comp)}
              className={`p-4 rounded-xl text-left border transition-all duration-200 focus:outline-none ${
                isSelected
                  ? "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-500 shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500"
                  : "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/70 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                  {comp.role}
                </span>
                {isSelected && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                )}
              </div>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                {comp.name}
              </h5>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-1 truncate">
                {comp.tech}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Node Inspector Box */}
      {selectedComponent && (
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-indigo-200 dark:border-indigo-500/40 space-y-2 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
              Selected Subsystem Details: {selectedComponent.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-semibold">
              {selectedComponent.role}
            </span>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Stack: <span className="text-slate-800 dark:text-slate-200">{selectedComponent.tech}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed pt-1">
            {selectedComponent.description}
          </p>
        </div>
      )}
    </div>
  );
}
