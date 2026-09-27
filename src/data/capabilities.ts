export interface SkillItem {
  name: string;
  category: string;
  highlight?: string;
  evidenceProjects?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-genai",
    title: "AI & Generative AI",
    icon: "BrainCircuit",
    description: "Agentic workflows, retrieval-augmented generation (RAG), semantic vector search, prompt orchestration, and anti-hallucination guardrails.",
    skills: [
      "Azure OpenAI (GPT-4o)",
      "LangGraph State Graphs",
      "RAG Architecture",
      "Semantic Vector Search",
      "Azure AI Search",
      "all-MiniLM-L6-v2 Embeddings",
      "Deterministic Grounding",
      "scikit-learn ML (Ensembles)",
      "Prompt Engineering",
      "Guardrails & Validation"
    ]
  },
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "Server",
    description: "Distributed microservices, asynchronous web APIs, enterprise application frameworks, and domain-driven design.",
    skills: [
      "Python 3.11",
      "Java 21",
      "FastAPI",
      "Spring Boot 3",
      "REST APIs & OpenAPI",
      "Microservices Architecture",
      "Spring Security",
      "Pydantic v2",
      "SQLAlchemy",
      "JPA / Hibernate"
    ]
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Analytics",
    icon: "Database",
    description: "Lakehouse medallion architectures, large-scale ETL pipelines, columnar OLAP data warehousing, and statistical quality gates.",
    skills: [
      "PySpark",
      "SQL (Advanced)",
      "DuckDB OLAP Star Schema",
      "Delta Lake",
      "Pandas & NumPy",
      "Medallion Architecture (Bronze/Silver/Gold)",
      "ETL / ELT Pipelines",
      "Data Quality & Validation Gates",
      "Statistical Analysis (ANOVA, t-test)",
      "Automated Reporting (OpenPyXL)"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    description: "Cloud-native infrastructure, containerization, Infrastructure as Code, and automated CI/CD continuous deployment pipelines.",
    skills: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Oracle Cloud Infrastructure (OCI)",
      "Docker & Containerization",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Kubernetes Manifests",
      "Terraform IaC",
      "Linux / Shell Scripting"
    ]
  },
  {
    id: "databases-caching",
    title: "Databases & Caching",
    icon: "Layers",
    description: "ACID relational databases, database-level concurrency locks, high-throughput in-memory caching, and versioned schema migrations.",
    skills: [
      "PostgreSQL 16",
      "Redis 7",
      "GiST Exclusion Constraints (tsrange)",
      "Flyway Migrations",
      "Alembic",
      "Relational Data Modeling",
      "Distributed Ephemeral Slot Locks",
      "Query Optimization & Indexing"
    ]
  },
  {
    id: "messaging-realtime",
    title: "Messaging & Real-Time Systems",
    icon: "Radio",
    description: "Event-driven distributed architectures, sub-second bi-directional streaming, and high-concurrency state synchronization.",
    skills: [
      "Apache Kafka",
      "WebSockets",
      "Server-Sent Events (SSE)",
      "Event-Driven Architecture",
      "Pub / Sub Message Brokers",
      "Finite State Machines (FSM)",
      "Real-Time Telemetry Streaming"
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    description: "Modern reactive user interfaces, component design systems, state management, and geospatial map simulations.",
    skills: [
      "React 18",
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Leaflet & OpenStreetMap",
      "Responsive Web Design",
      "Recharts Data Visualization"
    ]
  },
  {
    id: "testing-quality",
    title: "Testing & Quality Assurance",
    icon: "CheckCircle2",
    description: "Hermetic automated test suites, boundary condition verification, integration testing, and contract testing.",
    skills: [
      "Pytest (118+ Suite)",
      "JUnit 5 & Mockito",
      "Spring Boot Test",
      "HTTPX TestClient",
      "Testcontainers",
      "Integration & Contract Testing",
      "Playwright / E2E Testing",
      "Ruff & Static Analysis"
    ]
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  code?: string;
  year: string;
  badgeUrl?: string;
  description: string;
  skills: string[];
  credentialStatus: "Active" | "Certified";
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "oci-genai-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    code: "1Z0-1127-24",
    year: "2025",
    description: "Comprehensive professional credential validating architecture and implementation expertise across Large Language Models (LLMs), RAG pipelines, fine-tuning methodologies, vector databases, and OCI Generative AI services.",
    skills: [
      "Generative AI Architecture",
      "LLM Fine-Tuning & Prompting",
      "RAG & Vector Retrieval",
      "OCI GenAI Service",
      "Agentic AI Frameworks"
    ],
    credentialStatus: "Certified"
  },
  {
    id: "aws-csa-associate",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    code: "SAA-C03",
    year: "Certified",
    description: "Industry-standard certification validating end-to-end cloud architecture expertise: designing highly available, cost-optimized, fault-tolerant, and secure distributed cloud systems on AWS.",
    skills: [
      "High-Availability Cloud Architecture",
      "VPC & Network Security",
      "IAM & Access Controls",
      "AWS S3, RDS, DynamoDB, Lambda",
      "Scalability & Cost Optimization"
    ],
    credentialStatus: "Certified"
  }
];
