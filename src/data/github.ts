export interface GitHubRepoMeta {
  name: string;
  fullName: string;
  description: string;
  htmlUrl: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  topics?: string[];
}

export const GITHUB_PROFILE = {
  username: "anvithayerneni",
  profileUrl: "https://github.com/anvithayerneni",
  name: "Anvitha Yerneni",
  headline: "AI & Product Builder",
  verifiedReposCount: 3,
  topLanguages: ["Python", "Java", "TypeScript", "SQL"]
};

export const VERIFIED_REPOSITORIES: GitHubRepoMeta[] = [
  {
    name: "ai-ecommerce-shopping-assistant",
    fullName: "anvithayerneni/ai-ecommerce-shopping-assistant",
    description: "AI-powered e-commerce shopping and product recommendation assistant built with Python, FastAPI, Azure OpenAI, Azure AI Search, LangGraph, and PostgreSQL.",
    htmlUrl: "https://github.com/anvithayerneni/ai-ecommerce-shopping-assistant",
    language: "Python",
    stars: 1,
    forks: 0,
    updatedAt: "2024-11-20"
  },
  {
    name: "CareFlow",
    fullName: "anvithayerneni/CareFlow",
    description: "Full-stack healthcare platform built with React, TypeScript, Spring Boot, PostgreSQL, Redis, Kafka, Docker, and AI.",
    htmlUrl: "https://github.com/anvithayerneni/CareFlow",
    language: "Java",
    stars: 1,
    forks: 0,
    updatedAt: "2024-11-15"
  },
  {
    name: "LogiFlow-Real-Time-Logistics",
    fullName: "anvithayerneni/LogiFlow-Real-Time-Logistics",
    description: "LogiFlow: Real-Time Delivery & Logistics Platform (FastAPI, Next.js 14, Kafka, Redis, WebSockets, Docker, Kubernetes)",
    htmlUrl: "https://github.com/anvithayerneni/LogiFlow-Real-Time-Logistics",
    language: "Python",
    stars: 1,
    forks: 0,
    updatedAt: "2024-11-10"
  }
];
