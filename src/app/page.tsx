import React from "react";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ArchitectureVisualizationSection } from "@/components/ArchitectureVisualizationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid-pattern">
      <Hero />
      <AboutSection />
      <ExperienceTimeline />
      <FeaturedProjects />
      <ArchitectureVisualizationSection />
      <SkillsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
