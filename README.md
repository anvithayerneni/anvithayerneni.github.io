# Anvitha Yerneni — Software Engineering Portfolio

> Personal software engineering portfolio website showcasing scalable backend systems, agentic AI workflows, lakehouse data engineering pipelines, and real-time distributed platforms.

🌐 **Live Website**: [https://anvithayerneni.github.io](https://anvithayerneni.github.io)

[![Live Website](https://img.shields.io/badge/Live%20Website-anvithayerneni.github.io-059669?style=for-the-badge&logo=github&logoColor=white)](https://anvithayerneni.github.io)
[![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?style=flat-square&logo=githubpages)](https://anvithayerneni.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

---

## 🚀 Overview

This website serves as my primary professional portfolio as a Software Engineer / AI Engineer / Data Engineer. Built from first principles using Next.js 14 (App Router), TypeScript, and Tailwind CSS, it demonstrates engineering depth through a clean, accessible interface, comprehensive case studies, and live architecture breakdowns.

🔗 **Explore Live**: **[https://anvithayerneni.github.io](https://anvithayerneni.github.io)**

### Key Highlights
- **Engineering Case Studies**: In-depth technical deep-dives covering problem framing, system architecture, data flow, concurrency, and automated verification suites.
- **7-Category Interactive Project Filters**: Dynamic filtering across `ALL`, `AI / GENAI`, `SOFTWARE ENGINEERING`, `FULL STACK`, `DATA`, `BACKEND`, and `CLOUD`.
- **Role-Flexible Exploration**: Tailored perspectives for Engineering Managers, AI/ML Leads, and Technical Product teams.
- **Interactive Resume & Print View**: Instant browser print/PDF generation and formatted career history.
- **Theme Support**: Seamless toggle between Dark and Light mode.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework & Runtime** | Next.js 14 (App Router), React 18, Node.js |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling & UI** | Tailwind CSS 3.4, Lucide Icons, Custom Design Tokens |
| **State & Navigation** | Client state hooks, Next.js dynamic routing (`[slug]`) |
| **Hosting & CI/CD** | GitHub Pages, GitHub Actions (`deploy.yml`) |
| **SEO & Performance** | Server-side Static Generation (SSG), OpenGraph metadata, Sitemap, Robots.txt |

---

## 📂 Project Structure

```text
anvitha-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, theme provider & SEO metadata
│   │   ├── page.tsx                # Clean single-page home experience
│   │   ├── about/                  # About & philosophy deep-dive
│   │   ├── experience/             # Career history and work experience
│   │   ├── capabilities/           # Technical skills & capabilities index
│   │   ├── lenses/                 # Recruiter-specific perspectives
│   │   ├── resume/                 # Formatted resume & print view
│   │   ├── contact/                # Direct contact methods & message composer
│   │   ├── work/                   # Project catalog & category filters
│   │   │   └── [slug]/             # Dynamic 8-part case study pages
│   │   ├── robots.ts               # Search engine crawler configuration
│   │   └── sitemap.ts              # Automated sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation with theme switcher
│   │   ├── AboutSection.tsx        # Professional evolution story
│   │   ├── ExperienceTimeline.tsx  # Interactive career timeline
│   │   ├── FeaturedProjects.tsx    # Project showcase with category filters
│   │   ├── SkillsSection.tsx       # Domain-categorized skills matrix
│   │   ├── ResumeSection.tsx       # Resume preview with print/download
│   │   ├── ContactSection.tsx      # Contact cards & mailto launcher
│   │   ├── Footer.tsx              # Footer navigation & profile links
│   │   └── case-study/             # Architecture diagrams & workflow viewers
│   └── data/
│       ├── projects.ts             # Structured project schemas & case studies
│       ├── experience.ts           # Career history & education data
│       ├── capabilities.ts         # Skill categories & technologies
│       └── lenses.ts               # Perspective definitions & interview Q&As
├── public/                         # Static assets & .nojekyll
├── .github/workflows/deploy.yml    # GitHub Actions workflow for Pages deployment
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
   git clone https://github.com/anvithayerneni/anvithayerneni.github.io.git
   cd anvithayerneni.github.io
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

5. **Build for static export**:
   ```bash
   npm run build
   ```

---

## 🚢 Deployment (GitHub Pages)

This project is automatically deployed to **GitHub Pages** via GitHub Actions whenever changes are pushed to `main`:

- **Production URL**: [https://anvithayerneni.github.io](https://anvithayerneni.github.io)
- **Workflow File**: `.github/workflows/deploy.yml`

---

## 👤 Author

**Anvitha Yerneni**
- **Portfolio**: [https://anvithayerneni.github.io](https://anvithayerneni.github.io)
- **Email**: [anvithayerneni22@gmail.com](mailto:anvithayerneni22@gmail.com)
- **LinkedIn**: [linkedin.com/in/yernenianvitha22](https://www.linkedin.com/in/yernenianvitha22/)
- **GitHub**: [github.com/anvithayerneni](https://github.com/anvithayerneni)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
