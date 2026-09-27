"use client";

import React, { useState } from "react";
import { 
  Workflow, 
  ArrowRight, 
  Layers, 
  BrainCircuit, 
  Database, 
  Server, 
  ShieldCheck, 
  Radio, 
  Cpu, 
  Activity,
  CheckCircle2
} from "lucide-react";

interface ArchStep {
  name: string;
  role: string;
  tech: string;
  detail: string;
}

interface ArchDiagramData {
  id: string;
  title: string;
  tagline: string;
  domain: string;
  steps: ArchStep[];
  designHighlight: string;
  invariant: string;
}

export function ArchitectureVisualizationSection() {
  const [selectedArch, setSelectedArch] = useState<string>("ai-ecommerce");

  const architectures: ArchDiagramData[] = [
    {
      id: "ai-ecommerce",
      title: "AI E-Commerce: Zero-Hallucination Agentic RAG",
      tagline: "LangGraph StateGraph + Azure AI Search + Deterministic PostgreSQL Filter",
      domain: "AI & E-Commerce",
      designHighlight: "Hard separation between deterministic software constraints (budget, rating, catalog truth) and LLM conversational generation.",
      invariant: "100% price integrity; zero fabricated SKUs or unconfirmed feature assertions.",
      steps: [
        {
          name: "User Prompt",
          role: "Natural Language Query",
          tech: "Client Input",
          detail: "Captures conversational constraints (e.g., 'laptop under $1000 for programming')."
        },
        {
          name: "FastAPI Gateway",
          role: "Ingestion & Schema Guard",
          tech: "FastAPI / Pydantic v2",
          detail: "Parses request into structured session state and dispatches to agent orchestrator."
        },
        {
          name: "LangGraph Agent",
          role: "Stateful Graph Routing",
          tech: "LangGraph StateGraph",
          detail: "Coordinates multi-step tool calls, candidate tracking, and conversational refinement."
        },
        {
          name: "Azure AI Search",
          role: "Dense Vector Retrieval",
          tech: "all-MiniLM-L6-v2 Embeddings",
          detail: "Executes nearest-neighbor semantic search against 384-dimensional catalog embeddings."
        },
        {
          name: "Deterministic Filter",
          role: "PostgreSQL & Python Guard",
          tech: "PostgreSQL / SQLAlchemy",
          detail: "Applies hard budget filters (price <= max_price) and category constraints programmatically."
        },
        {
          name: "Azure OpenAI",
          role: "Grounded Synthesis",
          tech: "GPT-4o Prompting",
          detail: "Formats conversational recommendations restricted strictly to catalog-verified specs."
        }
      ]
    },
    {
      id: "careflow",
      title: "CareFlow: Zero Double-Booking Clinical Operations",
      tagline: "Java 21 / Spring Boot 3 + PostgreSQL GiST Exclusion Locks + Kafka Notifications",
      domain: "Healthcare Systems",
      designHighlight: "Database-level tsrange exclusion constraints make concurrent double-booking mathematically impossible across clustered servers.",
      invariant: "Zero overlapping active appointments per doctor; strict synthetic data privacy sandbox.",
      steps: [
        {
          name: "React Frontend",
          role: "Patient / Clinician Portals",
          tech: "React 18 / TypeScript",
          detail: "Type-safe appointment booking grids with instant provider schedule inspection."
        },
        {
          name: "Spring Boot 3 API",
          role: "Modular Monolith Services",
          tech: "Java 21 / Spring Security",
          detail: "Domain-partitioned REST controllers enforcing JWT authentication and validation."
        },
        {
          name: "Redis Hold Cache",
          role: "Ephemeral 5-Min Lock",
          tech: "Redis TTL Key",
          detail: "Places short-lived hold on chosen provider slot while patient inputs intake data."
        },
        {
          name: "PostgreSQL GiST",
          role: "Atomic Exclusion Lock",
          tech: "btree_gist (tsrange)",
          detail: "Storage engine atomically commits booking or rejects overlapping ranges with 409 conflict."
        },
        {
          name: "Kafka Pipeline",
          role: "Async Event Fan-Out",
          tech: "Apache Kafka Topics",
          detail: "Publishes appointment.booked event for non-blocking email notifications and telemetry."
        },
        {
          name: "MinIO S3 Storage",
          role: "Binary Document Store",
          tech: "MinIO S3 Java SDK",
          detail: "Decouples unstructured intake attachments from transactional relational tables."
        }
      ]
    },
    {
      id: "aerosight",
      title: "AeroSight: Lakehouse Telemetry & Delay ML Platform",
      tagline: "PySpark Medallion Lakehouse + DuckDB OLAP Star Schema + Delay Prediction ML",
      domain: "Airline Operations & Data",
      designHighlight: "3-tier medallion lakehouse pipeline feeding sub-millisecond DuckDB star schema queries and real-time ensemble delay prediction.",
      invariant: "Complete telemetry deduplication and null-quarantine; sub-5ms analytical query response.",
      steps: [
        {
          name: "Raw BTS Telemetry",
          role: "Bronze Ingestion",
          tech: "PySpark Ingestion",
          detail: "Ingests raw flight on-time performance datasets preserving original schema & audit tags."
        },
        {
          name: "Silver Quality Gate",
          role: "Cleansing & Enrichment",
          tech: "PySpark Transformations",
          detail: "Applies data quality gates: deduplication, timestamp formatting, null imputation."
        },
        {
          name: "DuckDB Star Schema",
          role: "Gold OLAP Data Warehouse",
          tech: "DuckDB Columnar Store",
          detail: "Houses fact_flights and dimension tables for sub-millisecond route KPI aggregations."
        },
        {
          name: "Flight Delay ML",
          role: "Predictive Inference",
          tech: "scikit-learn (Random Forest)",
          detail: "Predicts arrival delay probabilities based on route history, weather, and turnaround buffers."
        },
        {
          name: "FastAPI Gateway",
          role: "REST & SSE Streaming",
          tech: "FastAPI / Server-Sent Events",
          detail: "Streams real-time flight telemetry updates and what-if simulation results to clients."
        },
        {
          name: "React Operations UI",
          role: "Dispatcher Dashboard",
          tech: "React 18 / Recharts",
          detail: "Interactive delay simulator, live route health board, and automated Excel exports."
        }
      ]
    },
    {
      id: "logiflow",
      title: "LogiFlow: High-Concurrency Real-Time Delivery Engine",
      tagline: "Kafka Event Streaming + Redis Geospatial Caching + Strict FSM Order Transitions",
      domain: "Real-Time Logistics",
      designHighlight: "Centralized WebSocket connection manager with decoupled Kafka pub/sub and non-bypassable finite state machine.",
      invariant: "Zero illegal order state jumps (strict FSM); sub-100ms live geospatial broadcast.",
      steps: [
        {
          name: "4-Persona Client",
          role: "Customer / Kitchen / Driver / Admin",
          tech: "Next.js 14 / TypeScript",
          detail: "Real-time portals updating instantaneously via bi-directional WebSocket connections."
        },
        {
          name: "FastAPI Real-Time Hub",
          role: "WebSocket Connection Multiplexer",
          tech: "FastAPI / Uvicorn Async",
          detail: "Manages active socket channels per order and routes geospatial telemetry updates."
        },
        {
          name: "Kafka Event Bus",
          role: "Partitioned Messaging",
          tech: "Apache Kafka (orders, telemetry)",
          detail: "Ensures strictly ordered, at-least-once message distribution with idempotent consumer handlers."
        },
        {
          name: "Redis Pub/Sub",
          role: "Geospatial In-Memory Store",
          tech: "Redis 7 Geospatial",
          detail: "Maintains driver coordinates and broadcasts 1Hz live courier coordinates to subscribers."
        },
        {
          name: "FSM State Machine",
          role: "ACID Order Integrity",
          tech: "Python FSM + PostgreSQL",
          detail: "Guarantees valid transitions (PENDING -> CONFIRMED -> PREPARING -> READY -> IN_TRANSIT -> DELIVERED)."
        },
        {
          name: "Leaflet GPS Engine",
          role: "Live Route Simulation",
          tech: "Leaflet / Haversine Math",
          detail: "Simulates realistic SF street trajectories with dynamic Haversine ETA recalculations."
        }
      ]
    }
  ];

  const current = architectures.find((a) => a.id === selectedArch) || architectures[0];

  return (
    <section className="py-20 lg:py-28 bg-[#080c16]/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <Workflow className="w-3.5 h-3.5" />
              <span>System Architecture & Data Flows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Interactive System Topologies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Step-by-step data flows, concurrency guarantees, and architectural invariants implemented across featured systems.
            </p>
          </div>
        </div>

        {/* System Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {architectures.map((arch) => {
            const isSelected = selectedArch === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => setSelectedArch(arch.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 space-y-2 ${
                  isSelected
                    ? "bg-indigo-950/80 border-indigo-500 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500"
                    : "bg-[#090e1a]/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-indigo-400">
                    {arch.domain}
                  </span>
                  {isSelected && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  )}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                  {arch.title.split(":")[0]}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Architecture Viewer Box */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#090e1a] border border-slate-800 shadow-2xl space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
                {current.domain} Topography
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                {current.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                {current.steps.length} Pipeline Stages
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                Deterministic
              </span>
            </div>
          </div>

          {/* Sequential Pipeline Flow Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 relative overflow-hidden group hover:border-indigo-500/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-indigo-400 border border-slate-800">
                    Stage 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {step.tech}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {step.name}
                </h4>

                <p className="text-xs text-indigo-300 font-medium">
                  {step.role}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/60">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Architectural Design Highlight & Invariant */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-indigo-400" />
                <span>Key Architectural Decision</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {current.designHighlight}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enforced System Invariant</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {current.invariant}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
