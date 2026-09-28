import React from "react";
import Link from "next/link";
import { FileText, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#060911]/95 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white font-black text-base shadow-sm">
                AY
              </div>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">
                Anvitha Yerneni
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Engineering scalable backend systems, intelligent agentic applications, resilient data platforms, and cloud-native products.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                Clemson MS CS (Dec 2024)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="/#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#resume" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Verify */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white font-mono">
              Connect & Verify
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="https://github.com/anvithayerneni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  <span>github.com/anvithayerneni</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yernenianvitha22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                  <span>linkedin.com/in/yernenianvitha22</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:anvithayerneni22@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>anvithayerneni22@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="/#resume"
                  className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>View / Print Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} Anvitha Yerneni. Built with Next.js & TypeScript.</p>
          <div className="flex items-center gap-4">
            <span>Open to Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
