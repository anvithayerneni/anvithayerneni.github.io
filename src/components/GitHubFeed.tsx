"use client";

import React, { useState } from "react";
import { GITHUB_PROFILE, VERIFIED_REPOSITORIES } from "@/data/github";
import { ExternalLink, Star, ArrowUpRight, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export function GitHubFeed() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");

  const languages = ["All", ...Array.from(new Set(VERIFIED_REPOSITORIES.map((r) => r.language).filter(Boolean)))];

  const filteredRepos = selectedLanguage === "All"
    ? VERIFIED_REPOSITORIES
    : VERIFIED_REPOSITORIES.filter((r) => r.language === selectedLanguage);

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source of Truth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Verified GitHub Repositories
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Inspect the raw source code, CI workflows, and commit history on GitHub at{" "}
              <a
                href={GITHUB_PROFILE.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-2"
              >
                github.com/anvithayerneni
              </a>.
            </p>
          </div>

          <a
            href={GITHUB_PROFILE.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Open GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Language Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedLanguage === lang
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    <FolderGit2 className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {repo.description || "Public repository on GitHub."}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span>{repo.language || "Multi-language"}</span>
                </div>

                <div className="flex items-center gap-3">
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-[11px]">
                      <Star className="w-3 h-3 text-amber-500" />
                      {repo.stars}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-slate-400">
                    {repo.updatedAt}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
