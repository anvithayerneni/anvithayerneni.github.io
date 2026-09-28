"use client";

import React from "react";
import Link from "next/link";
import { User, ArrowRight, Terminal, ShieldCheck, Database, BrainCircuit, GraduationCap, Building2 } from "lucide-react";

export function AboutSection() {
  const evolutionStages = [
    {
      step: "01",
      title: "Core Software Engineering",
      role: "Object-Oriented Design & Algorithms",
      desc: "Built foundational depth in Data Structures, Algorithms, and clean architecture at Amrita Vishwa Vidyapeetham (B.Tech CS) and enterprise services at Toshiba Software."
    },
    {
      step: "02",
      title: "Backend & Distributed Systems",
      role: "Microservices, Kafka & Concurrency",
      desc: "Engineered high-throughput event-driven microservices with Java, Spring Boot, Python, FastAPI, and PostgreSQL with database-level GiST exclusion locks."
    },
    {
      step: "03",
      title: "Cloud & Data Engineering",
      role: "AWS, Lakehouse & Financial Pipelines",
      desc: "Engineered financial validation pipelines at Susser Bank and PySpark medallion lakehouse architectures with DuckDB star schemas and AWS cloud infrastructure."
    },
    {
      step: "04",
      title: "AI & Generative Systems",
      role: "LangGraph, RAG & Anti-Hallucination",
      desc: "Designing production GenAI workflows where LLMs are grounded by dense vector search (Azure AI Search) and programmatic deterministic business constraints."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-100/60 dark:bg-[#080c16]/70 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
              <User className="w-3.5 h-3.5" />
              <span>About Anvitha Yerneni</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering scalable systems from data pipelines to intelligent products.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I am a software engineer with an M.S. in Computer Science from <strong className="text-slate-900 dark:text-white">Clemson University (December 2024)</strong> and a B.Tech in Computer Science from <strong className="text-slate-900 dark:text-white">Amrita Vishwa Vidyapeetham</strong>. My engineering background bridges core backend architecture, distributed real-time data pipelines, and applied generative AI systems.
              </p>
              <p>
                At <strong className="text-slate-900 dark:text-white">Susser Bank</strong>, I engineer high-reliability financial data processing pipelines, transaction validation routines, and AI-enabled workflows using Python, FastAPI, and AWS. Previously at <strong className="text-slate-900 dark:text-white">Toshiba Software</strong>, I developed enterprise microservices and event-driven data streaming using Java, Spring Boot, Kafka, and Redis.
              </p>
              <p className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-indigo-900 dark:text-indigo-300 font-medium leading-relaxed shadow-xs">
                <strong>What kind of engineer am I?</strong> I am a product-oriented software engineer who builds resilient systems with defensive architectures. I enforce critical invariants at the database and state machine layers—preventing race conditions in distributed workflows and eliminating hallucinations in conversational AI applications.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-all uppercase tracking-wider"
              >
                <span>View Career Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/80 font-semibold text-xs sm:text-sm transition-colors uppercase tracking-wider"
              >
                <span>Explore Featured Projects</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Evolution Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 font-mono">
                  Technical Evolution
                </span>
                <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  Software → AI → Product
                </span>
              </div>

              <div className="space-y-3">
                {evolutionStages.map((stage) => (
                  <div
                    key={stage.step}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors space-y-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900">
                          {stage.step}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                          {stage.title}
                        </h4>
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                        {stage.role}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                      {stage.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Education Mini-Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 shadow-xs">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-800 dark:text-slate-300 font-medium">Clemson University (MS CS)</span>
              </div>
              <span className="text-slate-500 font-mono">Dec 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
