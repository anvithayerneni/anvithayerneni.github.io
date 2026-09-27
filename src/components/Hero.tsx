"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  ArrowUpRight,
  Database,
  Cpu,
  Server,
  BrainCircuit,
  Cloud,
  Layers,
  Radio,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Activity
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

interface FlowNode {
  id: string;
  name: string;
  role: string;
  tech: string;
  icon: any;
  status: string;
  latency: string;
  color: string;
  activePacket: boolean;
}

export function Hero() {
  const [activeTab, setActiveTab] = useState<"ai" | "realtime" | "data">("ai");
  const [activeStep, setActiveStep] = useState(0);

  // System flow animation step
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, [activeTab]);

  const flowProfiles = {
    ai: {
      title: "AI E-Commerce Grounding & Agent Flow",
      subtitle: "LangGraph StateGraph + Azure AI Search + Deterministic Guardrails",
      nodes: [
        {
          id: "n1",
          name: "Client Ingestion",
          role: "Natural Language Query",
          tech: "FastAPI REST / JSON",
          icon: Layers,
          status: "Active (200 OK)",
          latency: "12ms",
          color: "border-sky-500 text-sky-400 bg-sky-950/40",
          activePacket: activeStep === 0
        },
        {
          id: "n2",
          name: "LangGraph Agent",
          role: "Multi-Step Orchestration",
          tech: "StateGraph & Routing",
          icon: BrainCircuit,
          status: "Evaluating Intent",
          latency: "45ms",
          color: "border-indigo-500 text-indigo-400 bg-indigo-950/40",
          activePacket: activeStep === 1
        },
        {
          id: "n3",
          name: "Hybrid Retrieval",
          role: "Vector Search + SQL",
          tech: "Azure AI Search + PostgreSQL",
          icon: Database,
          status: "1,010 SKUs Indexed",
          latency: "68ms",
          color: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
          activePacket: activeStep === 2
        },
        {
          id: "n4",
          name: "Grounded Synthesis",
          role: "Zero-Hallucination Output",
          tech: "Azure OpenAI (GPT-4o)",
          icon: ShieldCheck,
          status: "100% Truth Grounded",
          latency: "280ms",
          color: "border-purple-500 text-purple-400 bg-purple-950/40",
          activePacket: activeStep === 3
        }
      ]
    },
    realtime: {
      title: "Logistics Event-Driven Pipeline",
      subtitle: "Kafka Event Bus + Redis Geospatial Pub/Sub + FSM Locks",
      nodes: [
        {
          id: "n1",
          name: "Role Portals",
          role: "Customer / Kitchen / Driver",
          tech: "Next.js 14 / TypeScript",
          icon: Layers,
          status: "4 Sync Personas",
          latency: "8ms",
          color: "border-sky-500 text-sky-400 bg-sky-950/40",
          activePacket: activeStep === 0
        },
        {
          id: "n2",
          name: "FastAPI Gateway",
          role: "WebSocket Hub & FSM",
          tech: "Uvicorn Async Hub",
          icon: Server,
          status: "Strict Transitions",
          latency: "15ms",
          color: "border-indigo-500 text-indigo-400 bg-indigo-950/40",
          activePacket: activeStep === 1
        },
        {
          id: "n3",
          name: "Kafka Event Bus",
          role: "Partitioned Messaging",
          tech: "Apache Kafka Topics",
          icon: Radio,
          status: "Sub-Second Ingestion",
          latency: "24ms",
          color: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
          activePacket: activeStep === 2
        },
        {
          id: "n4",
          name: "Redis & Persistence",
          role: "Geospatial GPS Broadcast",
          tech: "Redis Pub/Sub + Postgres",
          icon: Database,
          status: "< 100ms Live Telemetry",
          latency: "32ms",
          color: "border-purple-500 text-purple-400 bg-purple-950/40",
          activePacket: activeStep === 3
        }
      ]
    },
    data: {
      title: "AeroSight Lakehouse & Delay ML",
      subtitle: "PySpark Medallion + DuckDB Star Schema + ML Inference",
      nodes: [
        {
          id: "n1",
          name: "Raw BTS Flights",
          role: "Bronze Telemetry Stream",
          tech: "PySpark Ingestion",
          icon: Database,
          status: "Raw Telemetry Logged",
          latency: "Batch/Stream",
          color: "border-sky-500 text-sky-400 bg-sky-950/40",
          activePacket: activeStep === 0
        },
        {
          id: "n2",
          name: "Silver Quality Gate",
          role: "Validation & Deduplication",
          tech: "PySpark Cleanse",
          icon: ShieldCheck,
          status: "Schema Enforced",
          latency: "Quality Verified",
          color: "border-indigo-500 text-indigo-400 bg-indigo-950/40",
          activePacket: activeStep === 1
        },
        {
          id: "n3",
          name: "Gold Star Schema",
          role: "OLAP Analytical Storage",
          tech: "DuckDB Columnar",
          icon: Cpu,
          status: "Sub-5ms Query Time",
          latency: "3.8ms",
          color: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
          activePacket: activeStep === 2
        },
        {
          id: "n4",
          name: "Delay ML & Stream",
          role: "Ensemble Prediction + SSE",
          tech: "FastAPI + scikit-learn",
          icon: BrainCircuit,
          status: "Real-Time Prediction",
          latency: "18ms",
          color: "border-purple-500 text-purple-400 bg-purple-950/40",
          activePacket: activeStep === 3
        }
      ]
    }
  };

  const currentFlow = flowProfiles[activeTab];

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-500/15 via-sky-500/15 to-teal-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-3/4 left-1/4 w-[400px] h-[300px] bg-indigo-600/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs md:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white font-bold">ANVITHA YERNENI</span>
              <span className="text-slate-500 dark:text-slate-400">|</span>
              <span className="text-slate-300 font-medium">Dallas, TX</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                Software Engineer
              </h1>
              <div className="mt-2 text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-500 via-sky-400 to-teal-400 bg-clip-text text-transparent">
                AI • DATA • CLOUD • FULL STACK
              </div>
            </div>

            {/* Concise Value Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Software engineer building scalable backend systems, intelligent agentic applications, resilient data platforms, and high-performance full-stack products.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              M.S. in Computer Science from Clemson University. Experienced in production microservices, LangGraph agent workflows, database concurrency locks, and lakehouse data engineering.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md shadow-indigo-500/20 transition-all duration-200 group"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700/60 shadow-sm transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>VIEW / DOWNLOAD RESUME</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium text-sm transition-colors"
              >
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Secondary Direct Profile Links */}
            <div className="pt-2 flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
              <a
                href="https://github.com/anvithayerneni"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors font-medium"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>github.com/anvithayerneni</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/yernenianvitha22/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 flex items-center gap-1.5 transition-colors font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href="mailto:anvithayerneni22@gmail.com"
                className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors font-medium"
              >
                <span>anvithayerneni22@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture & Data-Flow Visualizer */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#090e1a]/95 border border-slate-800 p-5 sm:p-6 shadow-2xl backdrop-blur-xl relative space-y-5">
              {/* Header with Switcher Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                    System Architecture Engine
                  </span>
                </div>

                {/* Profile Tabs */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-900 border border-slate-800">
                  <button
                    onClick={() => { setActiveTab("ai"); setActiveStep(0); }}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                      activeTab === "ai"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    AI Agent Flow
                  </button>
                  <button
                    onClick={() => { setActiveTab("realtime"); setActiveStep(0); }}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                      activeTab === "realtime"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Real-Time Kafka
                  </button>
                  <button
                    onClick={() => { setActiveTab("data"); setActiveStep(0); }}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                      activeTab === "data"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Lakehouse / ML
                  </button>
                </div>
              </div>

              {/* Title & Subtitle for current flow */}
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {currentFlow.title}
                </h4>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {currentFlow.subtitle}
                </p>
              </div>

              {/* Flow Nodes Pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentFlow.nodes.map((node, idx) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className={`p-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                        node.activePacket
                          ? `${node.color} shadow-lg ring-1 ring-indigo-400/50 scale-[1.02]`
                          : "bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      {/* Active Packet Indicator Banner */}
                      {node.activePacket && (
                        <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse" />
                      )}

                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                            Stage 0{idx + 1}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          {node.latency}
                        </span>
                      </div>

                      <h5 className="text-xs font-bold text-white">
                        {node.name}
                      </h5>

                      <p className="text-[11px] text-slate-400 mt-0.5 font-medium line-clamp-1">
                        {node.role}
                      </p>

                      <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>{node.tech}</span>
                        <span className="text-slate-300 font-medium">{node.status}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Flow Status Telemetry Bar */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Pipeline State: <strong className="text-emerald-400">Executing Node 0{activeStep + 1}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span>Guaranteed Invariants: <strong className="text-slate-200">ACID / Grounded</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
