"use client";

import React from "react";
import { CERTIFICATIONS } from "@/data/capabilities";
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-[#080c16]/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Industry Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Professional Certifications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Official cloud architecture and generative AI certifications validating industry-standard expertise.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-xl hover:border-indigo-500/40 transition-all duration-300 space-y-6 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-900/60 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-bold">
                      {cert.issuer} {cert.code && `• ${cert.code}`}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white mt-0.5 group-hover:text-indigo-300 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 shrink-0 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{cert.credentialStatus}</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {cert.description}
              </p>

              {/* Verified Competencies */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                  Core Validated Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
