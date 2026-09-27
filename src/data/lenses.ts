export interface LensDefinition {
  id: "engineering" | "ai" | "product" | "data" | "healthcare" | "finance" | "logistics" | "ecommerce" | "testing";
  label: string;
  badge: string;
  tagline: string;
  headline: string;
  description: string;
  keySkills: string[];
  keyHighlights: string[];
  recommendedProjects: string[]; // slugs
  experienceRef?: string;
  iconName: string;
  interviewQuestion: string;
  interviewAnswer: string;
}

export const LENSES: Record<string, LensDefinition> = {
  engineering: {
    id: "engineering",
    label: "Engineering Lens",
    badge: "Software Architecture & Systems",
    tagline: "Software architecture, distributed microservices, APIs, databases, and concurrency",
    headline: "System Architecture, Real-Time Streams & Production Rigor",
    description: "Evaluates software systems through architectural integrity, clean API contracts, event-driven streaming with Apache Kafka, sub-second WebSocket telemetry, and resilient persistence strategies.",
    keySkills: [
      "Distributed Microservices Architecture",
      "Event Streaming with Apache Kafka",
      "Real-Time WebSockets & Redis Pub/Sub",
      "Python (FastAPI, Asyncio) & Java (Spring Boot 3)",
      "PostgreSQL (Exclusion Constraints & Spatial Indexing)",
      "Docker, Kubernetes & Infrastructure as Code (Terraform)"
    ],
    keyHighlights: [
      "Built LogiFlow's Kafka-backed finite state machine ensuring zero race conditions across 4 concurrent user roles.",
      "Engineered CareFlow's PostgreSQL GiST exclusion lock preventing concurrent double-booking of doctors.",
      "Architected FastAPI modular backends with Pydantic v2 schemas and automated database migrations."
    ],
    recommendedProjects: ["logiflow", "careflow", "ai-ecommerce-shopping-assistant"],
    iconName: "Terminal",
    interviewQuestion: "How do you design high-concurrency systems that prevent data corruption and race conditions?",
    interviewAnswer: "I enforce integrity at the persistence and event layers: using PostgreSQL exclusion constraints and row-level locks for atomic commits, pairing them with strict Finite State Machines and idempotent Kafka consumers that gracefully handle out-of-order or duplicate messages."
  },
  ai: {
    id: "ai",
    label: "AI & GenAI Lens",
    badge: "AI Systems & Anti-Hallucination",
    tagline: "LangGraph agents, semantic vector search, Azure OpenAI, embeddings, and deterministic grounding",
    headline: "Agentic AI, Semantic Retrieval & Grounded Production Workflows",
    description: "Focuses on intelligent systems that solve real-world problems by combining semantic vector retrieval with deterministic software guardrails to eliminate hallucinations.",
    keySkills: [
      "Agentic State Graphs with LangGraph",
      "Vector Semantic Search with Azure AI Search",
      "Dense Embeddings (all-MiniLM-L6-v2)",
      "Anti-Hallucination Deterministic Grounding",
      "Azure OpenAI (GPT-4o/mini) API Integration",
      "Quantitative Evaluation Frameworks"
    ],
    keyHighlights: [
      "Architected an AI shopping assistant with 118 automated tests and 100% deterministic constraint grounding.",
      "Implemented multi-node LangGraph agent state machines managing conversational context and follow-up query resolution.",
      "Pre-computed 384-dimensional vector embeddings across 1,010 products for sub-100ms hybrid search."
    ],
    recommendedProjects: ["ai-ecommerce-shopping-assistant"],
    iconName: "BrainCircuit",
    interviewQuestion: "How do you prevent LLMs from hallucinating in commercial and high-stakes product workflows?",
    interviewAnswer: "By separating deterministic logic from generative copy. I use the LLM for natural-language parsing and conversational synthesis, but enforce all hard business rules (price ceilings, stock, confirmed attributes) deterministically in Python/SQL before response generation."
  },
  product: {
    id: "product",
    label: "Product Lens",
    badge: "Product & User Experience",
    tagline: "Problem framing, user personas, multi-role workflows, requirement tradeoffs, and scoping",
    headline: "User Journeys, Problem Framing & Intentional Tradeoffs",
    description: "Analyzes products through the clarity of problem definition, deep user empathy, multi-persona synchronization, and pragmatic engineering tradeoffs.",
    keySkills: [
      "Multi-Persona Product Architecture",
      "User Journey & Workflow Mapping",
      "Requirements Deconstruction & Scoping",
      "Deterministic vs. AI Strategic Tradeoffs",
      "Usability Ergonomics & Information Hierarchy",
      "Edge-Case & Boundary Condition Modeling"
    ],
    keyHighlights: [
      "Designed LogiFlow's 4-in-1 synchronized workspace for Customers, Kitchens, Couriers, and Operations Admins.",
      "Structured CareFlow's clinical intake workflow around patient clarity and clinician agenda density.",
      "Framed the AI Shopping Assistant around natural follow-up queries ('show me cheaper ones') rather than rigid filters."
    ],
    recommendedProjects: ["logiflow", "careflow", "ai-ecommerce-shopping-assistant"],
    iconName: "Layers",
    interviewQuestion: "How do you approach product decisions when engineering constraints conflict with user desires?",
    interviewAnswer: "I start by identifying the core user invariant—for example, in e-commerce, the user's trust in price accuracy is sacred. I prioritize deterministic accuracy over open-ended chatbot creativity, making tradeoffs transparent through clear UX feedback."
  },
  healthcare: {
    id: "healthcare",
    label: "Healthcare Lens",
    badge: "Healthcare Technology",
    tagline: "Clinical workflows, scheduling integrity, patient/doctor portals, and data governance",
    headline: "Clinical Operations, Appointment Integrity & Safe Architecture",
    description: "Highlights technical and product contributions to healthcare operations, scheduling grids, clinical encounter workflows, and strict data boundary enforcement.",
    keySkills: [
      "Clinical Scheduling & Operations Systems",
      "Database-Level Exclusion Locks (btree_gist)",
      "Patient Intake & Medical History Portals",
      "Asynchronous Kafka Notifications",
      "Synthetic Healthcare Data Governance",
      "Modular Monolith Architecture with Spring Boot 3"
    ],
    keyHighlights: [
      "Engineered CareFlow to eliminate doctor double-bookings using PostgreSQL exclusion constraints.",
      "Built multi-role workspaces for Patients, Clinicians, and Clinic Administrators with TanStack Query and Recharts.",
      "Architected private MinIO S3 object storage for medical documents, decoupling binary payloads from relational tables."
    ],
    recommendedProjects: ["careflow"],
    iconName: "HeartPulse",
    interviewQuestion: "What are the primary architectural considerations when designing healthcare scheduling platforms?",
    interviewAnswer: "Data integrity and schedule invariants are non-negotiable. I enforce non-overlapping time ranges at the database layer with GiST constraints, implement temporary Redis holds during slot checkout, and strictly isolate binary attachments into dedicated object storage."
  },
  finance: {
    id: "finance",
    label: "FinTech Lens",
    badge: "Finance & Risk Technology",
    tagline: "Professional experience at Susser Bank, financial data validation, loan workflows, and risk systems",
    headline: "Financial Data Integrity, Loan Workflows & Risk Engineering",
    description: "Brings forward professional software engineering experience at Susser Bank, focusing on loan assessment, credit evaluation workflows, risk systems, and regulatory auditability.",
    keySkills: [
      "Financial Software Engineering (Susser Bank)",
      "Loan & Credit Evaluation Workflows",
      "Financial Data Validation & Integrity Pipelines",
      "Regulated Banking Environment Compliance",
      "Transactional Consistency & Audit Logging",
      "Cross-Functional Risk & Compliance Alignment"
    ],
    keyHighlights: [
      "Engineered enterprise software workflows for loan evaluation and risk assessment at Susser Bank.",
      "Enforced strict data integrity, auditability, and validation standards across relational banking databases.",
      "Collaborated closely with credit risk and compliance teams to translate complex financial regulations into resilient code."
    ],
    recommendedProjects: ["logiflow", "careflow"],
    experienceRef: "susser-bank",
    iconName: "BadgeDollarSign",
    interviewQuestion: "How does engineering in a regulated banking environment differ from general software development?",
    interviewAnswer: "In banking and risk technology, auditability, deterministic correctness, and compliance are paramount. Every transactional state change must be traceable, data validation must be defensive, and system integrations must account for failure recovery without data loss."
  },
  logistics: {
    id: "logistics",
    label: "Logistics Lens",
    badge: "Logistics & On-Demand Dispatch",
    tagline: "Real-time dispatch, LogiFlow platform, live GPS simulation, Kafka event bus, and kitchen Kanban",
    headline: "Real-Time Dispatch, Fleet Telemetry & Event-Driven Logistics",
    description: "Spotlights real-time dispatch algorithms, live GPS geospatial broadcasting, kitchen Kanban ticket boards, and fleet telemetry monitoring.",
    keySkills: [
      "Haversine Dynamic Courier Dispatch",
      "Real-Time WebSocket Geolocation Streaming",
      "Apache Kafka Order State Lifecycle",
      "Interactive Leaflet Geospatial Tracking",
      "Kitchen Kanban with Aging Timers",
      "Prometheus & Grafana Order Velocity Telemetry"
    ],
    keyHighlights: [
      "Built LogiFlow's sub-second courier tracking with realistic San Francisco street trajectory simulation.",
      "Implemented dynamic driver matching calculating nearest available couriers in O(N) time.",
      "Orchestrated Docker Compose and Kubernetes deployments with Prometheus/Grafana monitoring."
    ],
    recommendedProjects: ["logiflow"],
    iconName: "Truck",
    interviewQuestion: "How do you coordinate multiple stakeholders in real-time during an active delivery lifecycle?",
    interviewAnswer: "Using an event-driven architecture with Apache Kafka and WebSockets. When a kitchen confirms an order, Kafka triggers dispatch matching; as the courier moves, simulated GPS telemetry broadcasts over WebSocket rooms to update the customer map and ETA instantaneously."
  },
  data: {
    id: "data",
    label: "Data & Analytics Lens",
    badge: "Data Pipelines & Observability",
    tagline: "Event streams, database migrations, vector indexing, Redis caching, and telemetry",
    headline: "Data Modeling, Event Streams & Telemetry",
    description: "Evaluates data pipelines, relational schema versioning with Flyway and Alembic, dense vector embeddings, caching strategies, and telemetry monitoring.",
    keySkills: [
      "PostgreSQL Relational Schema Design & Flyway Migrations",
      "Azure AI Search Vector Indexing & Embeddings",
      "Apache Kafka Event Bus Architecture",
      "Redis 7 Caching & Pub/Sub Channels",
      "Prometheus & Grafana Observability Dashboards",
      "MinIO S3-Compatible Object Storage"
    ],
    keyHighlights: [
      "Engineered automated relational migrations with Alembic and Flyway across high-concurrency systems.",
      "Pre-computed and normalized 384-dimensional vector embeddings for 1,010 catalog products.",
      "Configured Prometheus scraping and Grafana dashboards for order throughput and API latency."
    ],
    recommendedProjects: ["ai-ecommerce-shopping-assistant", "logiflow", "careflow"],
    iconName: "BarChart3",
    interviewQuestion: "What is your philosophy on database schema migrations and schema evolution?",
    interviewAnswer: "Schema changes must always be version-controlled, automated, and backward-compatible. I use Flyway or Alembic to ensure migrations are repeatable across environments, and structure changes so application code can deploy without downtime."
  },
  testing: {
    id: "testing",
    label: "Quality & Testing Lens",
    badge: "Verification & Automated Testing",
    tagline: "Pytest 118 tests, integration testing, boundary validation, and hermetic mocking",
    headline: "Comprehensive Automated Testing, Mocking & Boundary Verification",
    description: "Demonstrates an unwavering commitment to software quality through extensive automated test suites, hermetic dependency mocking, and rigorous boundary validation.",
    keySkills: [
      "Pytest Suites with 118+ Passing Tests",
      "Spring Boot Test & JUnit 5 Integration Testing",
      "Playwright End-to-End Browser Testing",
      "Hermetic Cloud Service Mocking (Azure, Kafka)",
      "Strict Finite State Machine Boundary Testing",
      "Quantitative Retrieval & Recommendation Evaluation"
    ],
    keyHighlights: [
      "Authored 118 passing tests in the AI Shopping Assistant covering ranking math, agent state transitions, and API contracts.",
      "Created Playwright E2E suites verifying multi-role switching and live Leaflet map rendering in LogiFlow.",
      "Tested database exclusion constraints under simulated concurrent race conditions in CareFlow."
    ],
    recommendedProjects: ["ai-ecommerce-shopping-assistant", "logiflow", "careflow"],
    iconName: "CheckCircle2",
    interviewQuestion: "How do you ensure test suites remain fast and reliable when testing distributed or AI systems?",
    interviewAnswer: "I decouple external cloud services using hermetic mock harnesses for rapid CI runs, write unit tests for mathematical and deterministic logic, and maintain dedicated quantitative evaluation datasets (like retrieval_eval.json) to measure model quality independently."
  }
};
