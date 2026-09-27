"use client";

import React from "react";
import Link from "next/link";
import { 
  User, 
  CheckCircle2, 
  Mail,
  ArrowRight,
  GraduationCap,
  Building2,
  Cpu,
  BrainCircuit,
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function AboutPage() {
  const principles = [
    {
      title: "Defensive Persistence Over Hopeful Code",
      description: "When building mission-critical systems, integrity must be enforced at the storage and event layers (e.g. PostgreSQL GiST exclusion locks and Kafka partitioned logs), ensuring data remains consistent regardless of server restarts or concurrent browser tabs."
    },
    {
      title: "Grounded AI Over Unchecked Hallucination",
      description: "Generative AI excels at natural communication and semantic indexing, but commercial facts (prices, inventory, clinical slots) must always be governed by deterministic software rules and anti-hallucination validation layers."
    },
    {
      title: "Multi-Persona Product Ergonomics",
      description: "A system isn't complete until all stakeholders have intuitive tooling: whether it's a doctor reviewing a clinical roster, a courier viewing turn directions, or a customer watching live delivery progress."
    },
    {
      title: "Hermetic Testing & Zero Flakiness",
      description: "Writing extensive automated test suites (118+ Pytest tests, Spring MockMvc integration tests) with hermetically mocked external cloud dependencies ensures rapid, confident deployments."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Background & Architecture Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Anvitha Yerneni
          </h1>

          <p className="text-base sm:text-lg text-indigo-400 font-mono font-semibold">
            Software Engineer | AI Engineer | Full Stack Engineer | Data Engineer
          </p>
        </div>

        {/* Core Narrative */}
        <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            I am a software engineer focused on designing scalable backend architectures, high-throughput event-driven data platforms, and grounded generative AI applications.
          </p>
          <p>
            I hold a Master of Science in Computer Science from <strong className="text-white">Clemson University (December 2024)</strong> and a Bachelor of Technology in Computer Science from <strong className="text-white">Amrita Vishwa Vidyapeetham</strong>. My engineering experience spans real-world enterprise systems at <strong className="text-white">Susser Bank</strong> (Dallas, TX) and <strong className="text-white">Toshiba Software</strong> (Bangalore, India).
          </p>
          <p>
            My engineering work is rooted in practical systems problem-solving:
          </p>
          <ul className="space-y-3 pl-2 text-xs sm:text-sm font-mono">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong className="text-white">AI E-Commerce Assistant:</strong> LangGraph state graph + Azure AI Search with 118 automated tests and 100% deterministic catalog grounding.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong className="text-white">CareFlow:</strong> Clinical scheduling platform built with Java 21, Spring Boot 3, and PostgreSQL GiST exclusion locks guaranteeing zero doctor double-booking.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong className="text-white">AeroSight:</strong> Lakehouse data engineering platform processing BTS flight data with PySpark medallion pipelines, DuckDB OLAP star schema, and delay ML models.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">•</span>
              <span><strong className="text-white">LogiFlow:</strong> Distributed logistics platform synchronizing 4 distinct user roles with Kafka event streams, Redis pub/sub, and sub-100ms WebSockets.</span>
            </li>
          </ul>
        </div>

        {/* Engineering Principles */}
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white">
            Core Engineering Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-sm space-y-2.5"
              >
                <div className="flex items-center gap-2 text-indigo-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Connect Box */}
        <div className="p-8 rounded-2xl bg-[#090e1a] text-white border border-slate-800 space-y-4 shadow-xl">
          <h3 className="text-xl font-bold text-white">
            Let&apos;s build something meaningful.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            I am open to discussions regarding Software Engineering, AI & GenAI Systems, Distributed Backends, and Data Platform Engineering.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-mono shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>
            <a
              href="https://github.com/anvithayerneni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yernenianvitha22/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
