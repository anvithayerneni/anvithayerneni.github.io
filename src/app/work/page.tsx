"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PROJECTS, ProjectCategoryFilter } from "@/data/projects";
import { 
  Search, 
  Layers, 
  ExternalLink, 
  ChevronRight, 
  X, 
  Clock, 
  Sparkles 
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

function WorkPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ProjectCategoryFilter) || "ALL";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryFilter>(initialCategory);

  const categories: ProjectCategoryFilter[] = [
    "ALL",
    "AI / GENAI",
    "SOFTWARE ENGINEERING",
    "FULL STACK",
    "DATA",
    "BACKEND",
    "CLOUD"
  ];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesTagline = project.tagline.toLowerCase().includes(q);
        const matchesDomain = project.domain.toLowerCase().includes(q);
        const matchesTech = project.technologies.some((t) => t.toLowerCase().includes(q));
        const matchesCap = project.capabilities.some((c) => c.toLowerCase().includes(q));
        if (!matchesTitle && !matchesTagline && !matchesDomain && !matchesTech && !matchesCap) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== "ALL") {
        if (!project.categories.includes(selectedCategory)) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "ALL";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("ALL");
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Project Index</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work & Engineering Case Studies
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Architected and implemented production-oriented systems across generative AI, real-time logistics, healthcare clinical operations, and airline telemetry.
          </p>
        </div>

        {/* Filter Controls Panel */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#090e1a]/95 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology (Kafka, PySpark, LangGraph, Spring Boot), domain, or capability..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
              Filter by Category
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider font-mono transition-colors ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono">
              <span className="text-slate-500 dark:text-slate-400">
                Showing {filteredProjects.length} of {PROJECTS.length} projects
              </span>
              <button
                onClick={clearFilters}
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Project Results Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-slate-800 space-y-3">
            <p className="text-base font-bold text-slate-900 dark:text-white">
              No projects match your current filter.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              Try broadening your search query or resetting filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-indigo-500"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#090e1a]/95 border border-slate-200 dark:border-slate-800 shadow-xl hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-200 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {project.featuredRole}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                      {project.domain}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                  <Link
                    href={`/work/${project.slug}`}
                    className="font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 uppercase tracking-wider inline-flex items-center gap-1"
                  >
                    <span>Read Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.githubStatus === "coming_soon" ? (
                    <span className="text-slate-500 text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500 dark:text-amber-400" />
                      <span>Repo coming soon</span>
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 text-center font-mono text-slate-400">Loading Work Catalog...</div>}>
      <WorkPageContent />
    </Suspense>
  );
}
