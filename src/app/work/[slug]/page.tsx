import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { WorkflowViewer } from "@/components/case-study/WorkflowViewer";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Terminal, 
  User, 
  HelpCircle,
  Clock
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Case Study Not Found | Anvitha Yerneni",
    };
  }

  return {
    title: `${project.title} | Case Study — Anvitha Yerneni`,
    description: project.tagline,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Hero */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {project.domain}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
              {project.featuredRole}
            </span>
            {project.metrics && project.metrics[0] && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{project.metrics[0].value}</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {project.tagline}
          </p>

          {/* Action Links & Demo Accounts */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubStatus === "coming_soon" ? (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono shadow-sm">
                <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Repository coming soon</span>
              </div>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span>View Source Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            {project.liveUrl && project.liveUrl.startsWith("http") && !project.liveUrl.includes("localhost") && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            )}

            {project.apiDocsUrl && project.apiDocsUrl.startsWith("http") && !project.apiDocsUrl.includes("localhost") && (
              <a
                href={project.apiDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Interactive Swagger / API Docs</span>
              </a>
            )}
          </div>

          {/* Seeded Demo Accounts Banner (if available) */}
          {project.demoAccounts && project.demoAccounts.length > 0 && (
            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 font-mono">
                Seeded Interactive Demo Roles (Ready in Live Demo):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {project.demoAccounts.map((acc, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/60 text-xs shadow-2xs">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      {acc.role}
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-[11px] block truncate">
                      {acc.email}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5 line-clamp-1">
                      {acc.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Technologies Strip */}
          <div className="pt-2">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 font-mono block mb-2">
              Verified Tech Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono border border-slate-200 dark:border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 13-Section Deep Dive */}
        {caseStudy ? (
          <div className="space-y-12 pt-6 border-t border-slate-200 dark:border-slate-800">
            {/* 01 The Problem */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  The Problem
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                {caseStudy.problem}
              </p>
            </section>

            {/* 02 The Users */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  The Users & Personas Supported
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-11">
                {caseStudy.users.map((user, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {user.role}
                      </h3>
                      <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {user.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {user.capabilities.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded text-[10px] bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-medium border border-indigo-200 dark:border-indigo-900"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 03 Product Goal */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Product Goal
                </h2>
              </div>
              <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 pl-11">
                <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {caseStudy.productGoal}
                </p>
              </div>
            </section>

            {/* 04 Key Workflows */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Key Workflows
                </h2>
              </div>
              <div className="pl-11">
                <WorkflowViewer workflows={caseStudy.keyWorkflows} />
              </div>
            </section>

            {/* 05 Solution */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  The Architectural Solution
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                {caseStudy.solution}
              </p>
            </section>

            {/* 06 Architecture Map */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Architecture & Subsystems
                </h2>
              </div>
              <div className="pl-11">
                <ArchitectureDiagram
                  projectSlug={project.slug}
                  components={caseStudy.architectureComponents}
                  summary={caseStudy.architectureSummary}
                />
              </div>
            </section>

            {/* 07 Technical Implementation */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Technical Implementation & Engineering Decisions
                </h2>
              </div>
              <div className="space-y-4 pl-11">
                {caseStudy.technicalImplementation.map((impl, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>{impl.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {impl.detail}
                    </p>
                    {impl.codeSnippet && (
                      <pre className="p-3.5 rounded-lg bg-slate-900 dark:bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
                        <code>{impl.codeSnippet}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 08 AI / Intelligence Layer */}
            {caseStudy.aiLayer && (
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    AI & Intelligence Layer
                  </h2>
                </div>
                <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/60 space-y-5 pl-11">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      AI Model & Embeddings Pipeline
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {caseStudy.aiLayer.overview} ({caseStudy.aiLayer.model})
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-mono">
                        Retrieval & Search Stages
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        {caseStudy.aiLayer.retrievalPipeline.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-mono">
                        Anti-Hallucination Grounding Rules
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        {caseStudy.aiLayer.groundingRules.map((rule, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 09 Product Lens */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Product Lens & Decision Log
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 pl-11 shadow-xs">
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    Problem Framing & User Need
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                    {caseStudy.productLens.problemFraming} — {caseStudy.productLens.userNeed}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-mono mb-2">
                      Key Workflow Decisions
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {caseStudy.productLens.workflowDecisions.map((d, idx) => (
                        <li key={idx}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 font-mono mb-2">
                      Deliberate Tradeoffs
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {caseStudy.productLens.tradeoffs.map((t, idx) => (
                        <li key={idx}>• {t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 10 Engineering Lens */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Engineering Lens & Reliability
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 pl-11 shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      Architecture Style:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-0.5">
                      {caseStudy.engineeringLens.architectureStyle}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      Concurrency & Events:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-0.5">
                      {caseStudy.engineeringLens.concurrencyAndEvents}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      API & Schema Design:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-0.5">
                      {caseStudy.engineeringLens.apiDesign}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                      Persistence & Caching:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 mt-0.5">
                      {caseStudy.engineeringLens.persistenceStrategy}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-mono block mb-2">
                    Scalability Considerations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.engineeringLens.scalabilityConsiderations.map((scale, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 font-mono"
                      >
                        • {scale}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 11 Quality & Testing */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Quality, Testing & Verification
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-4 pl-11">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 font-mono">
                    Automated Testing Strategy & Verification Points
                  </h3>
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                    {caseStudy.qualityTesting.testFrameworks.join(", ")}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {caseStudy.qualityTesting.methodology}
                </p>

                <div className="space-y-2 pt-2 border-t border-emerald-200 dark:border-emerald-900/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 font-mono">
                    Key Automated Verification Points:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.qualityTesting.verificationPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 12 Challenges & Tradeoffs */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Challenges & Technical Takeaways
                </h2>
              </div>
              <div className="space-y-4 pl-11">
                {caseStudy.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      Challenge: {c.challenge}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <strong className="text-indigo-700 dark:text-indigo-400 font-mono">Solution:</strong> {c.solution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                      Takeaway: {c.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 13 Demonstrated Capabilities */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  13
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Demonstrated Capabilities
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 pl-11">
                {project.capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm font-semibold"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </section>

            {/* Interview Highlights & Discussion Guide */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#090e1a] text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
                <HelpCircle className="w-4 h-4" />
                <span>Interview Defense: How I Discuss This System</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Why I Built It</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudy.interviewHighlights.whyBuilt}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Key Tradeoffs Made</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudy.interviewHighlights.tradeoffsMade}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Scalability Roadmap</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudy.interviewHighlights.scaleRoadmap}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Primary Takeaway</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {caseStudy.interviewHighlights.keyLearning}
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* Supporting Project Layout */
          <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Project Overview & Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.capabilities.map((cap, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-xs font-medium"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
