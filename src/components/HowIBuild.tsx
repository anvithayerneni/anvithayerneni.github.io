"use client";

import React from "react";
import { 
  Workflow, 
  Target, 
  Users, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  RefreshCw
} from "lucide-react";

export function HowIBuild() {
  const steps = [
    {
      num: "01",
      title: "Domain Problem & Constraint Framing",
      icon: Target,
      tag: "Problem Space",
      description: "Deconstruct the real-world domain (e.g. food delivery race conditions, healthcare appointment overlaps, shopping hallucinations). Identify non-negotiable business invariants before writing a single line of code."
    },
    {
      num: "02",
      title: "Multi-Persona Workflow Mapping",
      icon: Users,
      tag: "Product Design",
      description: "Map distinct user perspectives (e.g. Customer, Kitchen, Driver, Admin) and design synchronized interaction loops where each role gets high-signal ergonomics without cognitive overload."
    },
    {
      num: "03",
      title: "Architecture & Data Integrity Guarantees",
      icon: Layers,
      tag: "System Design",
      description: "Enforce invariants at the database and messaging layers: PostgreSQL exclusion constraints, Kafka partitioned event topics, Redis ephemeral hold locks, and clean RESTful API contracts."
    },
    {
      num: "04",
      title: "Deterministic Guardrails + AI Augmentation",
      icon: Cpu,
      tag: "AI & Logic Separation",
      description: "Strictly separate deterministic software (budget limits, inventory, rating math) from generative AI. Use LLMs for conversational synthesis and vector embeddings for semantic retrieval, guarded by 100% attribute grounding."
    },
    {
      num: "05",
      title: "Hermetic Testing & Observability",
      icon: CheckCircle2,
      tag: "Quality & Reliability",
      description: "Author comprehensive automated test suites (e.g. 118 Pytest unit/integration tests, JUnit 5 concurrent race condition tests, Playwright E2E suites) and instrument services with Prometheus and Grafana."
    },
    {
      num: "06",
      title: "Scalability Hardening & Iteration",
      icon: RefreshCw,
      tag: "Production Ready",
      description: "Deploy containerized microservices with Docker and Kubernetes manifests, provide graceful in-memory fallbacks for zero-cost review, and iterate based on quantitative evaluation benchmarks."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-100/60 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>Engineering & Product Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Build Intelligent Software Systems
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A disciplined engineering lifecycle that connects ambiguous business requirements to interview-defensible, high-integrity software architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                      {step.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <Icon className="w-4 h-4" />
                  <span>Evidence in GitHub Projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
