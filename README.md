# Anvitha Yerneni — Software Engineering Portfolio

> Personal software engineering portfolio website showcasing scalable backend systems, agentic AI workflows, lakehouse data engineering pipelines, and real-time distributed platforms.

[![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

---

## 🚀 Overview

This website serves as my primary professional portfolio as a Software Engineer / AI Engineer / Data Engineer. Built from first principles using Next.js 14 (App Router), TypeScript, and Tailwind CSS, it demonstrates engineering depth through a data-driven architecture, interactive system topologies, multi-stakeholder role perspectives, and comprehensive case studies backed directly by verified GitHub repositories.

### Key Highlights
- **Interactive System Visualizer**: Real-time simulation of request lifecycles, latency benchmarks, and architectural data flows across AI agents, Kafka event buses, and lakehouse pipelines.
- **7-Category Interactive Project Filters**: Dynamic filtering across `ALL`, `AI / GENAI`, `SOFTWARE ENGINEERING`, `FULL STACK`, `DATA`, `BACKEND`, and `CLOUD`.
- **Deep 8-Part Case Studies**: Technical deep-dives covering problem framing, system architecture, database-level concurrency, AI grounding rules, and automated verification suites.
- **Role-Flexible Exploration (Recruiter Lenses)**: Tailored perspectives for Engineering Managers, AI/ML Leads, and Technical Product teams.
- **Interactive Resume & Print View**: Instant browser print/PDF generation and downloadable formatted credentials.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework & Runtime** | Next.js 14 (App Router), React 18, Node.js |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling & UI** | Tailwind CSS 3.4, Lucide Icons, Custom Design Tokens |
| **State & Navigation** | Client state hooks, Next.js dynamic routing (`[slug]`) |
| **SEO & Performance** | Server-side Static Generation (SSG), OpenGraph metadata, Sitemap, Robots.txt |

---

## 📂 Project Structure

```text
anvitha-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, theme provider & SEO metadata
│   │   ├── page.tsx                # Single-page home experience with all sections
│   │   ├── about/                  # About & philosophy deep-dive
│   │   ├── experience/             # Susser Bank & Toshiba Software details
│   │   ├── capabilities/           # Technical skills & certifications index
│   │   ├── lenses/                 # Recruiter-specific perspectives
│   │   ├── resume/                 # Formatted resume & print view
│   │   ├── contact/                # Direct contact methods & message composer
│   │   ├── work/                   # Project catalog & category filters
│   │   │   └── [slug]/             # Dynamic 8-part case study pages
│   │   ├── robots.ts               # Search engine crawler configuration
│   │   └── sitemap.ts              # Automated sitemap generator
│   ├── components/
│   │   ├── Hero.tsx                # Hero section with interactive system visualizer
│   │   ├── Navbar.tsx              # Sticky navigation with scroll spy & mobile drawer
│   │   ├── AboutSection.tsx        # Professional evolution story
│   │   ├── ExperienceTimeline.tsx  # Timeline cards for Susser Bank & Toshiba
│   │   ├── FeaturedProjects.tsx    # Centerpiece project showcase with 7 filters
│   │   ├── ArchitectureVisualizationSection.tsx # Interactive system topologies
│   │   ├── SkillsSection.tsx       # Domain-categorized skills matrix
│   │   ├── CertificationsSection.tsx # OCI GenAI 2025 & AWS Solutions Architect
│   │   ├── ResumeSection.tsx       # Resume preview with print/download
│   │   ├── ContactSection.tsx      # Contact cards & mailto launcher
│   │   ├── Footer.tsx              # Footer navigation & profile links
│   │   └── case-study/             # Architecture diagrams & workflow viewers
│   └── data/
│       ├── projects.ts             # Structured project schemas & case studies
│       ├── experience.ts           # Career history & education data
│       ├── capabilities.ts         # Skill categories & certifications
│       └── lenses.ts               # Perspective definitions & interview Q&As
├── public/                         # Static assets & icons
├── tailwind.config.ts              # Design tokens, custom palette & typography
├── tsconfig.json                   # TypeScript compiler configuration
└── package.json                    # Project dependencies & build scripts
```

---

## 💻 Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anvithayerneni/anvitha-portfolio.git
   cd anvitha-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📝 How to Update Content

### Adding / Modifying Projects
All project data is decoupled from UI components. Edit `src/data/projects.ts` to add new projects or update existing ones:
```typescript
{
  id: "new-project",
  slug: "new-project-slug",
  title: "Project Name",
  tagline: "High-impact summary...",
  categories: ["AI / GENAI", "BACKEND"],
  technologies: ["Python", "FastAPI", "PostgreSQL"],
  githubUrl: "https://github.com/anvithayerneni/...",
  caseStudy: { ... }
}
```

### Updating Work Experience & Education
Edit `src/data/experience.ts` to update companies, responsibilities, or degrees.

### Updating Skills & Certifications
Edit `src/data/capabilities.ts` to modify skill categories or add new industry certifications.

---

## 🚢 Deployment

This Next.js application can be deployed instantly to **Vercel**, **GitHub Pages**, or **Cloudflare Pages**:

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub (`https://github.com/anvithayerneni/anvitha-portfolio`).
2. Log into [Vercel](https://vercel.com) with your GitHub account.
3. Click **"Add New Project"** and select `anvitha-portfolio`.
4. Leave standard Next.js build settings (`npm run build`) and click **"Deploy"**.

---

## 👤 Author

**Anvitha Yerneni**
- **Location**: Dallas, TX
- **Email**: [anvithayerneni22@gmail.com](mailto:anvithayerneni22@gmail.com)
- **LinkedIn**: [linkedin.com/in/yernenianvitha22](https://www.linkedin.com/in/yernenianvitha22/)
- **GitHub**: [github.com/anvithayerneni](https://github.com/anvithayerneni)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
