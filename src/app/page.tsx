import React from "react";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ArchitectureVisualizationSection } from "@/components/ArchitectureVisualizationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid-pattern">
      <AboutSection isTopSection={true} />
      <ExperienceTimeline />
      <FeaturedProjects />
      <ArchitectureVisualizationSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
