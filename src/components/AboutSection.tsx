"use client";

import React from "react";
import Link from "next/link";
import { 
  User, 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Database, 
  BrainCircuit, 
  GraduationCap, 
  Building2,
  FileText,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function AboutSection({ isTopSection = true }: { isTopSection?: boolean }) {
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
    <section 
      id="about" 
      className={`relative ${
        isTopSection 
          ? "pt-28 pb-16 md:pt-36 md:pb-24" 
          : "py-20 lg:py-28 bg-slate-100/60 dark:bg-[#080c16]/70 border-t border-slate-200 dark:border-slate-800/80"
      } overflow-hidden`}
    >
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-teal-500/10 dark:from-indigo-500/15 dark:via-sky-500/15 dark:to-teal-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Story & Primary Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-indigo-950/60 border border-slate-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs md:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-900 dark:text-white font-bold">ANVITHA YERNENI</span>
              <span className="text-slate-400 dark:text-slate-500">|</span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">Software Engineer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering scalable systems from data pipelines to intelligent products.
            </h1>

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

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/20 transition-all uppercase tracking-wider group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700/60 shadow-xs transition-colors uppercase tracking-wider"
              >
                <span>Experience</span>
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium text-xs sm:text-sm transition-colors uppercase tracking-wider"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Resume</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium text-xs sm:text-sm transition-colors uppercase tracking-wider"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Direct Social / Connect Links */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
              <a
                href="https://github.com/anvithayerneni"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors font-medium text-slate-700 dark:text-slate-300"
              >
                <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span>github.com/anvithayerneni</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/yernenianvitha22/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 flex items-center gap-1.5 transition-colors font-medium text-slate-700 dark:text-slate-300"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500" />
              </a>

              <a
                href="mailto:anvithayerneni22@gmail.com"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors font-medium text-slate-700 dark:text-slate-300"
              >
                <span>anvithayerneni22@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Evolution Cards & Education */}
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
