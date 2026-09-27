"use client";

import React, { useState } from "react";
import { CaseStudyWorkflow } from "@/data/projects";
import { Workflow, ChevronRight, User } from "lucide-react";

interface WorkflowViewerProps {
  workflows: CaseStudyWorkflow[];
}

export function WorkflowViewer({ workflows }: WorkflowViewerProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = workflows[activeStepIndex] || workflows[0];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <Workflow className="w-4 h-4" />
            <span>Interactive Workflow Sequence</span>
          </span>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Step-by-Step Execution Journey
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono">
          Step {activeStepIndex + 1} of {workflows.length}
        </span>
      </div>

      {/* Steps Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {workflows.map((wf, idx) => {
          const isActive = activeStepIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                isActive
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                  : "bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-mono ${
                isActive ? "bg-white text-indigo-600 font-bold" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}>
                {idx + 1}
              </span>
              <span>{wf.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Card */}
      <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3 animate-fade-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <User className="w-3.5 h-3.5" />
            <span>Actor / Component: {activeStep.actor}</span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Phase: {activeStep.step}
          </span>
        </div>

        <h5 className="text-base font-bold text-slate-900 dark:text-white">
          {activeStep.title}
        </h5>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {activeStep.description}
        </p>

        <div className="flex justify-between items-center pt-2 border-t border-slate-200/60 dark:border-slate-800">
          <button
            disabled={activeStepIndex === 0}
            onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
            className="text-xs font-semibold text-slate-500 disabled:opacity-30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            ← Previous Phase
          </button>
          <button
            disabled={activeStepIndex === workflows.length - 1}
            onClick={() => setActiveStepIndex((prev) => Math.min(workflows.length - 1, prev + 1))}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 disabled:opacity-30 hover:underline inline-flex items-center gap-1"
          >
            <span>Next Phase</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
