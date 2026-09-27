"use client";

import React, { useState } from "react";
import { EXPERIENCES, EDUCATION } from "@/data/experience";
import { CERTIFICATIONS } from "@/data/capabilities";
import { PROJECTS } from "@/data/projects";
import { 
  Printer, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  Layers, 
  MapPin, 
  Mail,
  Award,
  Phone,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-24 pb-20 print:pt-4 print:pb-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Action Bar (Hidden during Print) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1a] border border-slate-800 shadow-sm print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Formatted for Software & AI Engineering Roles</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold font-mono uppercase tracking-wider transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <a
              href="mailto:anvithayerneni22@gmail.com?subject=Software%20Engineer%20Role%20Inquiry%20-%20Anvitha%20Yerneni"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold font-mono uppercase tracking-wider transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090e1a]/95 border border-slate-800 shadow-2xl space-y-8 text-slate-200 print:bg-white print:text-black print:border-none print:p-0 print:shadow-none">
          {/* Header */}
          <div className="border-b border-slate-800 print:border-gray-300 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white print:text-black">
                ANVITHA YERNENI
              </h1>
              <span className="text-sm font-bold text-indigo-400 font-mono print:text-gray-800">
                Software Engineer | AI Engineer
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400 print:text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Dallas, TX
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                864-788-2122
              </span>
              <span>•</span>
              <a
                href="mailto:anvithayerneni22@gmail.com"
                className="hover:underline flex items-center gap-1 text-indigo-400 print:text-black"
              >
                <Mail className="w-3.5 h-3.5" />
                anvithayerneni22@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/yernenianvitha22/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 text-sky-400 print:text-black"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                linkedin.com/in/yernenianvitha22
              </a>
              <span>•</span>
              <a
                href="https://github.com/anvithayerneni"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 text-slate-300 print:text-black"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                github.com/anvithayerneni
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed pt-2">
              Software Engineer with an M.S. in Computer Science from Clemson University and experience engineering scalable backend microservices, financial validation pipelines, event-driven streaming architectures (Kafka, Redis), and production generative AI workflows (LangGraph, Azure AI Search, anti-hallucination grounding).
            </p>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-800 print:border-gray-300 pb-6">
            {/* Education */}
            <section className="space-y-3">
              <h2 className="text-xs uppercase font-bold tracking-wider text-indigo-400 print:text-black font-mono border-b border-slate-800 print:border-gray-300 pb-1 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="space-y-3">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5 text-xs">
                    <div className="flex justify-between font-bold text-white print:text-black text-sm">
                      <span>{edu.degree}</span>
                      <span className="font-mono text-slate-400 print:text-gray-600 font-normal">{edu.graduationDate}</span>
                    </div>
                    <div className="text-indigo-300 print:text-gray-700 font-mono">{edu.institution} • {edu.location}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="space-y-3">
              <h2 className="text-xs uppercase font-bold tracking-wider text-indigo-400 print:text-black font-mono border-b border-slate-800 print:border-gray-300 pb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </h2>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="space-y-0.5 text-xs">
                    <div className="font-bold text-white print:text-black text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{cert.title}</span>
                    </div>
                    <div className="text-slate-400 print:text-gray-600 font-mono pl-5">
                      {cert.issuer} {cert.code && `(${cert.code})`}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Professional Experience */}
          <section className="space-y-4 border-b border-slate-800 print:border-gray-300 pb-6">
            <h2 className="text-xs uppercase font-bold tracking-wider text-indigo-400 print:text-black font-mono border-b border-slate-800 print:border-gray-300 pb-1 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span>Professional Experience</span>
            </h2>
            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <div>
                      <span className="font-bold text-white print:text-black text-sm">
                        {exp.role}
                      </span>
                      <span className="text-indigo-400 print:text-gray-800 font-bold ml-2">
                        @ {exp.company}
                      </span>
                    </div>
                    <span className="font-mono text-slate-400 print:text-gray-600">
                      {exp.location} | {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 print:text-gray-700 italic">
                    {exp.summary}
                  </p>

                  <ul className="text-xs text-slate-300 print:text-gray-800 space-y-1 pl-1">
                    {exp.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-1 text-[11px] font-mono text-slate-400 print:text-gray-600">
                    <strong className="text-slate-200 print:text-black">Technologies:</strong> {exp.technologies.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Featured Engineering Projects */}
          <section className="space-y-4 border-b border-slate-800 print:border-gray-300 pb-6">
            <h2 className="text-xs uppercase font-bold tracking-wider text-indigo-400 print:text-black font-mono border-b border-slate-800 print:border-gray-300 pb-1 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Featured Engineering Systems</span>
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <div>
                      <span className="font-bold text-white print:text-black text-sm">
                        {proj.title}
                      </span>
                      <span className="text-indigo-400 print:text-gray-600 font-mono text-xs ml-2">
                        ({proj.featuredRole})
                      </span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {proj.githubStatus === "coming_soon" ? "Repository coming soon" : `github.com/anvithayerneni/${proj.slug}`}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                    {proj.tagline}
                  </p>

                  <div className="text-[10px] font-mono text-slate-400 print:text-gray-600">
                    <strong className="text-slate-300 print:text-black">Stack:</strong> {proj.technologies.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Technical Skills Summary */}
          <section className="space-y-2">
            <h2 className="text-xs uppercase font-bold tracking-wider text-indigo-400 print:text-black font-mono border-b border-slate-800 print:border-gray-300 pb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Technical Skills & Core Disciplines</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-white print:text-black font-mono">Languages & Frameworks:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700 font-mono">Python 3.11, Java 21, FastAPI, Spring Boot 3, TypeScript, React 18, Next.js 14, SQL</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-mono">AI & Generative Systems:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700 font-mono">LangGraph, Azure OpenAI (GPT-4o), Azure AI Search, Vector Embeddings, RAG, scikit-learn</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-mono">Data & Messaging:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700 font-mono">PySpark, DuckDB Star Schema, Delta Lake, Apache Kafka, WebSockets, Redis, PostgreSQL (GiST Locks)</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-mono">Cloud & DevOps:</strong>{" "}
                <span className="text-slate-400 print:text-gray-700 font-mono">AWS (Solutions Architect), Azure, Docker, CI/CD, GitHub Actions, Terraform IaC, Pytest, JUnit 5</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
