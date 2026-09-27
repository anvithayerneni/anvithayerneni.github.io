export interface CaseStudyWorkflow {
  title: string;
  actor: string;
  step: string;
  description: string;
}

export interface ArchitectureComponent {
  name: string;
  role: string;
  tech: string;
  description: string;
}

export interface CaseStudySection {
  problem: string;
  users: Array<{ role: string; description: string; capabilities: string[] }>;
  productGoal: string;
  keyWorkflows: CaseStudyWorkflow[];
  solution: string;
  architectureSummary: string;
  architectureComponents: ArchitectureComponent[];
  technicalImplementation: Array<{ title: string; detail: string; codeSnippet?: string }>;
  aiLayer?: {
    overview: string;
    model: string;
    retrievalPipeline: string[];
    groundingRules: string[];
    guardrails: string[];
  };
  productLens: {
    problemFraming: string;
    userNeed: string;
    workflowDecisions: string[];
    tradeoffs: string[];
    productConsiderations: string[];
  };
  engineeringLens: {
    architectureStyle: string;
    concurrencyAndEvents: string;
    apiDesign: string;
    persistenceStrategy: string;
    scalabilityConsiderations: string[];
  };
  qualityTesting: {
    methodology: string;
    coverageDetails: string[];
    testFrameworks: string[];
    verificationPoints: string[];
  };
  challenges: Array<{ challenge: string; solution: string; takeaway: string }>;
  interviewHighlights: {
    whyBuilt: string;
    tradeoffsMade: string;
    scaleRoadmap: string;
    keyLearning: string;
  };
}

export type ProjectCategoryFilter =
  | "ALL"
  | "AI / GENAI"
  | "SOFTWARE ENGINEERING"
  | "FULL STACK"
  | "DATA"
  | "BACKEND"
  | "CLOUD";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  tier: "tier-1" | "tier-2" | "tier-3";
  domain: string;
  featuredRole: string;
  featured: boolean;
  categories: ProjectCategoryFilter[];
  capabilities: string[];
  technologies: string[];
  githubUrl: string;
  githubStatus?: "available" | "coming_soon";
  liveUrl?: string;
  apiDocsUrl?: string;
  demoAccounts?: Array<{ role: string; email: string; note: string }>;
  metrics?: Array<{ label: string; value: string }>;
  caseStudy?: CaseStudySection;
}

export const PROJECTS: Project[] = [
  {
    id: "ai-ecommerce",
    slug: "ai-ecommerce-shopping-assistant",
    title: "AI-Powered E-Commerce Shopping & Recommendation Assistant",
    tagline: "Conversational recommendation engine combining Azure AI Search vector retrieval, deterministic catalog filtering, LangGraph multi-step workflows, and anti-hallucination grounding.",
    tier: "tier-1",
    domain: "AI & E-Commerce",
    featuredRole: "Featured AI Project",
    featured: true,
    categories: ["AI / GENAI", "SOFTWARE ENGINEERING", "DATA", "BACKEND", "CLOUD"],
    capabilities: [
      "Agentic AI Workflows",
      "LangGraph State Graphs",
      "Vector Semantic Search",
      "Deterministic Filtering",
      "Product Reranking",
      "Anti-Hallucination Grounding",
      "FastAPI Backend",
      "PostgreSQL Database",
      "Automated Testing (118 Tests)",
      "Azure OpenAI Integration"
    ],
    technologies: [
      "Python 3.11",
      "FastAPI",
      "LangGraph",
      "Azure OpenAI (GPT-4o)",
      "Azure AI Search",
      "all-MiniLM-L6-v2 Embeddings",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic v2",
      "Pytest (118 tests)",
      "Docker"
    ],
    githubUrl: "https://github.com/anvithayerneni/ai-ecommerce-shopping-assistant",
    githubStatus: "available",
    liveUrl: "https://claims-java-ceremony-restrict.trycloudflare.com/demo/",
    apiDocsUrl: "https://claims-java-ceremony-restrict.trycloudflare.com/docs",
    metrics: [
      { label: "Passing Pytest Suite", value: "118 Tests" },
      { label: "Grounded Catalog Size", value: "1,010 Products" },
      { label: "Grounding Accuracy", value: "100% Deterministic Rules" },
      { label: "Deployment Blueprint", value: "Docker / Cloud Native" }
    ],
    caseStudy: {
      problem: "Traditional e-commerce search relies heavily on rigid keyword matching and manual facet filtering, while naive LLM chatbots suffer from severe hallucinations—inventing non-existent products, misrepresenting prices, or conflating feature sets across different models. Shoppers need a conversational interface that understands nuanced natural-language queries (e.g., 'laptop under $1000 for programming') without sacrificing factual catalog integrity.",
      users: [
        {
          role: "Online Shopper",
          description: "Searches using conversational constraints, requests product comparisons, asks budget-conscious follow-ups ('show me cheaper ones'), and expects grounded product reasoning.",
          capabilities: ["Natural language query", "Multi-attribute filtering", "Head-to-head comparison", "Conversational refinement"]
        },
        {
          role: "Catalog & ML Engineer",
          description: "Evaluates retrieval accuracy, manages offline embedding generation, tunes reranking models, and audits anti-hallucination compliance.",
          capabilities: ["Offline vector indexing", "Offline evaluation datasets", "Deterministic constraint auditing", "API telemetry"]
        }
      ],
      productGoal: "Build a production-grade AI shopping assistant that achieves high conversational flexibility while programmatically enforcing catalog constraints (price, category, rating, use-case) through a clear separation of generative and deterministic layers.",
      keyWorkflows: [
        {
          actor: "Shopper",
          step: "Query Ingestion & Understanding",
          title: "Natural Query Parsing",
          description: "Extracts explicit and implicit constraints: category ('laptop'), price cap ($1000), target use-case ('programming') via Pydantic schemas."
        },
        {
          actor: "System",
          step: "Hybrid Retrieval & Filtering",
          title: "Vector Search + Deterministic Guard",
          description: "Queries Azure AI Search with all-MiniLM-L6-v2 embeddings while applying hard SQL/Python filters for budget and rating thresholds."
        },
        {
          actor: "LangGraph Agent",
          step: "Agentic Tool Execution",
          title: "Multi-Node State Graph Routing",
          description: "Executes catalog tools (search, compare, details) using authoritative database records rather than allowing the LLM to hallucinate specifications."
        },
        {
          actor: "System",
          step: "Reranking & Grounded Synthesis",
          title: "Grounded Response Generation",
          description: "Reranks candidates based on relevance signals and formats an Azure OpenAI prompt strictly constrained by confirmed catalog attributes."
        }
      ],
      solution: "A layered architecture that combines semantic vector search in Azure AI Search with deterministic PostgreSQL filtering, LangGraph conversation state management, and a strict attribute grounding pipeline that prevents hallucinated product capabilities.",
      architectureSummary: "The client interacts through FastAPI endpoints. The request enters Query Understanding, routes through a LangGraph StateGraph, executes tools against Azure AI Search and PostgreSQL, processes through deterministic filters and rerankers, validates grounding, and synthesizes the final response via Azure OpenAI.",
      architectureComponents: [
        {
          name: "FastAPI REST API Gateway",
          role: "API Gateway & Ingestion",
          tech: "FastAPI, Uvicorn, Pydantic v2",
          description: "Handles chat sessions, product search endpoints, health checks, and OpenAPI contract documentation."
        },
        {
          name: "LangGraph Agentic Orchestrator",
          role: "Stateful Workflow Engine",
          tech: "LangGraph, LangChain Core",
          description: "Coordinates multi-step reasoning, tool dispatching, follow-up resolution, and conversation memory across graph nodes."
        },
        {
          name: "Semantic Vector Search",
          role: "Dense Vector Retrieval",
          tech: "Azure AI Search + sentence-transformers (all-MiniLM-L6-v2)",
          description: "Performs dense vector retrieval against pre-computed 384-dimensional catalog embeddings."
        },
        {
          name: "Catalog Persistence Layer",
          role: "Relational Source of Truth",
          tech: "PostgreSQL, SQLAlchemy, Alembic",
          description: "Stores 1,010 normalized product records with structured features, price decimals, and use-case arrays."
        },
        {
          name: "Deterministic Filter & Reranker",
          role: "Constraint Enforcer",
          tech: "Python service layer",
          description: "Guarantees that hard constraints (price <= $1000, category boundaries) are computed in code, never left to LLM guesswork."
        },
        {
          name: "Grounded Response Synthesizer",
          role: "Anti-Hallucination Interface",
          tech: "Azure OpenAI (GPT-4o)",
          description: "Generates natural conversational copy restricted strictly to catalog-verified attributes and verified specs."
        }
      ],
      technicalImplementation: [
        {
          title: "Deterministic vs. Generative Separation",
          detail: "All hard constraints (price boundaries, category membership, minimum star ratings, verified use-case tags) are computed in Python/SQL. The LLM is restricted to conversational phrasing and agent tool selection.",
          codeSnippet: `# Enforce strict price boundary deterministically in Python/SQL
def filter_by_budget(products: list[Product], max_price: float) -> list[Product]:
    return [p for p in products if p.price <= max_price]`
        },
        {
          title: "Conversational State & Follow-up Resolution",
          detail: "LangGraph conversation state tracks active candidate sets across turns. When a user asks 'show me cheaper ones' or 'which has higher rating?', the system resolves the intent against the active context rather than re-querying from scratch."
        },
        {
          title: "Offline Embedding Pre-computation",
          detail: "Generated 384-dimensional embeddings for 1,010 catalog items offline using sentence-transformers (all-MiniLM-L6-v2), avoiding costly real-time embedding generation on static catalog queries."
        }
      ],
      aiLayer: {
        overview: "An agentic RAG and tool-use pipeline designed for zero-hallucination recommendation in commercial e-commerce scenarios.",
        model: "Azure OpenAI (GPT-4o) + all-MiniLM-L6-v2 Vector Embeddings",
        retrievalPipeline: [
          "Query Parsing into structured intent (category, budget, use-case, brand)",
          "Vector search on Azure AI Search with dense embedding similarity",
          "Deterministic constraint enforcement against PostgreSQL catalog",
          "Heuristic and feature-weighted product reranking",
          "Grounding validation before context injection"
        ],
        groundingRules: [
          "Only reference features explicitly listed in the product's catalog record.",
          "Never infer a use case (e.g. 'programming') from product category or brand unless explicitly present in catalog data.",
          "A missing attribute indicates unconfirmed capability—never hallucinate an affirmative answer.",
          "Prevent cross-contamination of feature specs during comparative queries."
        ],
        guardrails: [
          "Pydantic schema validation on all agent tool calls",
          "Pre-response grounding audit on comparative matrices",
          "Structured fallback when zero products satisfy strict budget filters"
        ]
      },
      productLens: {
        problemFraming: "Shoppers get frustrated with traditional multi-select filter UIs on mobile, yet distrust chatbot suggestions when prices or features turn out inaccurate.",
        userNeed: "Instant conversational discovery that respects explicit budget constraints and provides clear, truthful product comparisons.",
        workflowDecisions: [
          "Preserved conversation state across turns to support natural follow-up queries like 'show me Windows ones'.",
          "Designed head-to-head comparison cards that highlight distinct pros, cons, and verified use-cases side by side.",
          "Implemented transparent reasoning ('MacBook Air M3: $999.99 is within your $1000 budget and explicitly lists programming')."
        ],
        tradeoffs: [
          "Chose deterministic attribute gating over pure LLM flexibility to guarantee 100% pricing accuracy.",
          "Used offline vector indexing rather than dynamic runtime embedding generation to keep response latency low and costs minimal."
        ],
        productConsiderations: [
          "Catalog extensibility for 100k+ SKUs",
          "Mobile-first responsive conversational UI",
          "Audit trail for commercial compliance"
        ]
      },
      engineeringLens: {
        architectureStyle: "Service-oriented modular monolith with LangGraph agent orchestration and async FastAPI routers.",
        concurrencyAndEvents: "Async request lifecycle with connection pooling on PostgreSQL; stateless worker architecture ready for horizontal scaling.",
        apiDesign: "RESTful OpenAPI specification with versioned endpoints (/api/v1/assistant, /api/v1/products, /health).",
        persistenceStrategy: "PostgreSQL relational tables for structured catalog attributes; Azure AI Search for high-dimensional vector index.",
        scalabilityConsiderations: [
          "Stateless FastAPI instances deployed on container runners (Docker / Cloud).",
          "Externalized vector search offloads compute-heavy nearest-neighbor searches from the primary database.",
          "Cached query embeddings for common shopping prompts."
        ]
      },
      qualityTesting: {
        methodology: "Comprehensive multi-layered testing using Pytest, covering API contracts, vector search fallback, ranking math, comparison logic, and agent state transitions.",
        coverageDetails: [
          "118 passing tests across unit, integration, and mocking layers.",
          "Mocked Azure OpenAI and Azure Search clients for hermetic, fast CI runs.",
          "Evaluation datasets (retrieval_eval.json, recommendation_eval.json) for quantitative benchmark tracking."
        ],
        testFrameworks: ["Pytest", "HTTPX TestClient", "Pydantic Test Suites", "Custom Retrieval Evaluator"],
        verificationPoints: [
          "Strict budget boundary validation (boundary value testing at $999.99 vs $1000.01)",
          "Anti-hallucination verification on unconfirmed features",
          "Multi-turn conversation context retention",
          "Database transaction integrity and rollback safety"
        ]
      },
      challenges: [
        {
          challenge: "LLM Hallucinations on Edge Case Specifications",
          solution: "Introduced a deterministic grounding validation layer that intercepts the LLM context and removes any unverified claims prior to response generation.",
          takeaway: "Never trust an LLM with quantitative or strict commercial facts; let software enforce constraints and let the LLM handle human communication."
        },
        {
          challenge: "Handling Ambiguous Natural-Language Follow-ups",
          solution: "Implemented LangGraph state graph memory that retains the previous search candidate list and applies incremental filter deltas.",
          takeaway: "Stateful agent graphs provide vastly better user experience for conversational commerce than stateless prompts."
        }
      ],
      interviewHighlights: {
        whyBuilt: "To demonstrate how to build an enterprise-credible AI product that eliminates LLM hallucinations in retail by marrying semantic search with deterministic business rules.",
        tradeoffsMade: "Sacrificed unbounded creative conversational flexibility in favor of strict catalog-grounded truth and 100% price accuracy.",
        scaleRoadmap: "Add distributed Redis caching for vector queries, implement hybrid sparse-dense reciprocal rank fusion (RRF), and support dynamic multi-vendor catalog ingestion.",
        keyLearning: "The strongest AI systems are not purely generative; they are hybrid architectures where deterministic software guards generative creativity."
      }
    }
  },
  {
    id: "careflow",
    slug: "careflow",
    title: "CareFlow — Healthcare Operations & Clinical Scheduling Platform",
    tagline: "Enterprise clinical operations platform engineered with Java 21, Spring Boot 3, React, TypeScript, PostgreSQL exclusion constraints for zero double-booking, and event-driven notifications.",
    tier: "tier-1",
    domain: "Healthcare",
    featuredRole: "Featured Software Engineering Project",
    featured: true,
    categories: ["SOFTWARE ENGINEERING", "FULL STACK", "BACKEND", "AI / GENAI", "CLOUD"],
    capabilities: [
      "Java 21 & Spring Boot 3",
      "PostgreSQL GiST Exclusion Constraints",
      "Zero Double-Booking Guarantee",
      "Redis Ephemeral Slot Locks",
      "Kafka Notification Pipeline",
      "Multi-Role Clinical Portals (3 Roles)",
      "Flyway Database Migrations",
      "MinIO S3 Object Storage",
      "Synthetic Healthcare Data Model",
      "AI-Enabled Clinical Summaries"
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "Spring Data JPA / Hibernate",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "Docker",
      "Tailwind CSS",
      "TanStack Query",
      "Flyway"
    ],
    githubUrl: "https://github.com/anvithayerneni/CareFlow",
    githubStatus: "available",
    liveUrl: "https://careflow-frontend-bzw3.onrender.com/",
    apiDocsUrl: "https://careflow-frontend-bzw3.onrender.com/swagger-ui.html",
    demoAccounts: [
      { role: "Patient", email: "sophie@example.test", note: "Demo patient booking appointments and reviewing medical summaries" },
      { role: "Doctor", email: "maya@example.test", note: "Clinician schedule cockpit with appointment triage & patient notes" },
      { role: "Admin", email: "admin@example.test", note: "Healthcare facility operations, doctor availability & capacity analytics" }
    ],
    metrics: [
      { label: "Double-Booking Prevention", value: "100% DB Exclusion Lock" },
      { label: "Core Backend Stack", value: "Java 21 / Spring Boot 3" },
      { label: "Data Architecture", value: "Flyway Managed Relational" },
      { label: "Compliance Posture", value: "Synthetic Data Sandbox" }
    ],
    caseStudy: {
      problem: "Healthcare scheduling systems face severe operational challenges: double-booked provider slots due to concurrent browser tabs, disconnected patient-provider communication, and complex data privacy boundaries. Overlapping appointments disrupt clinic throughput, create physician burnout, and cause administrative waste.",
      users: [
        {
          role: "Patient",
          description: "Searches available specialist doctors, holds consultation slots with temporary Redis reservation locks, books visits, and views educational care instructions.",
          capabilities: ["Doctor directory search", "Slot reservation", "Appointment confirmation", "Medical history summary"]
        },
        {
          role: "Clinician / Doctor",
          description: "Manages daily appointment rosters, reviews patient intake summaries, updates appointment statuses (Checked-In, In-Consultation, Completed), and records clinical notes.",
          capabilities: ["Daily roster schedule", "Consultation state triage", "Encounter notes", "Availability management"]
        },
        {
          role: "Healthcare Administrator",
          description: "Oversees clinic operations, doctor schedule templates, patient volume metrics, room assignments, and departmental throughput analytics.",
          capabilities: ["Facility capacity analytics", "Schedule template configuration", "Departmental metrics", "Audit logs"]
        }
      ],
      productGoal: "Engineer an enterprise-grade clinical scheduling and operations platform that mathematically guarantees zero overlapping appointment bookings while providing an intuitive, accessible experience for patients, clinicians, and administrators.",
      keyWorkflows: [
        {
          actor: "Patient",
          step: "Search & Slot Selection",
          title: "Provider Discovery & Slot Holding",
          description: "Patient finds an open slot; system places an ephemeral 5-minute Redis hold lock to prevent collision with other active users."
        },
        {
          actor: "System",
          step: "Booking Commitment",
          title: "Atomic Booking & Exclusion Check",
          description: "Booking transaction executes against PostgreSQL with database-level btree exclusion constraints, verifying slot uniqueness."
        },
        {
          actor: "Kafka Pipeline",
          step: "Event Notification",
          title: "Asynchronous Notification Fan-Out",
          description: "Publishes appointment.booked event to Kafka; notification consumers trigger automated confirmation emails and update doctor schedules."
        },
        {
          actor: "Doctor & Admin",
          step: "Encounter Lifecycle",
          title: "Clinical Consultation Management",
          description: "Doctor marks patient Checked-In, records encounter summary, and transitions state to Completed; clinic analytics update in real-time."
        }
      ],
      solution: "A domain-organized modular monolith backend using Spring Boot 3 and Java 21, coupled with a reactive TypeScript/React frontend, backed by PostgreSQL exclusion constraints, Redis hold caches, Kafka event notifications, and MinIO object storage.",
      architectureSummary: "The React single-page application communicates via Axios and TanStack Query with Spring Boot 3 REST controllers. Workflows are managed across domain service layers. Flyway migrations enforce relational schema integrity. PostgreSQL guarantees zero double-booking, while MinIO securely manages binary medical documents.",
      architectureComponents: [
        {
          name: "React + TypeScript Frontend",
          role: "Clinical & Patient Portal",
          tech: "React 18, TypeScript, Vite, TanStack Query, Tailwind CSS",
          description: "Type-safe user interfaces with dynamic role switching, appointment booking calendars, and clinical dashboards."
        },
        {
          name: "Spring Boot 3 Core Backend",
          role: "Healthcare API Server",
          tech: "Java 21, Spring Boot 3.2, Spring Security, JPA/Hibernate",
          description: "Domain-partitioned backend services handling patient intake, appointment scheduling, and doctor roster management."
        },
        {
          name: "PostgreSQL with Exclusion Constraints",
          role: "Relational Persistence & Lock Enforcer",
          tech: "PostgreSQL, btree_gist extension",
          description: "Enforces non-overlapping time range exclusion locks (tsrange) to guarantee at the database level that no doctor has overlapping active visits."
        },
        {
          name: "Redis Ephemeral Hold Engine",
          role: "Distributed Slot Hold Cache",
          tech: "Redis",
          description: "Provides expiring 5-minute TTL locks on calendar slots while patients enter intake information."
        },
        {
          name: "Apache Kafka Message Broker",
          role: "Asynchronous Event Pipeline",
          tech: "Kafka, Spring Kafka",
          description: "Transports appointment lifecycle events to decouple booking execution from email/SMS dispatching."
        },
        {
          name: "MinIO S3-Compatible Storage",
          role: "Private Object Storage",
          tech: "MinIO, S3 Java SDK",
          description: "Separates unstructured binary files (e.g. intake attachments) from relational database tables."
        }
      ],
      technicalImplementation: [
        {
          title: "Database-Level Exclusion Constraint for Zero Double-Booking",
          detail: "Utilized PostgreSQL btree_gist extension with tsrange to prevent overlapping appointments directly in the storage engine, eliminating race condition bugs that application-level validation can miss.",
          codeSnippet: `-- PostgreSQL Flyway Migration snippet
ALTER TABLE appointments
ADD CONSTRAINT no_overlapping_doctor_appointments
EXCLUDE USING gist (
  doctor_id WITH =,
  tsrange(start_time, end_time) WITH &&
) WHERE (status NOT IN ('CANCELLED', 'REJECTED'));`
        },
        {
          title: "Two-Tier Concurrency Control (Redis Hold + DB Exclusion)",
          detail: "Layer 1: Redis sets an expiring 5-minute key during UI checkout. Layer 2: PostgreSQL exclusion constraint executes on commit. If two users click simultaneously, exactly one succeeds and the other receives a clean conflict error."
        },
        {
          title: "Strict Synthetic Data & Safety Boundaries",
          detail: "Architected strictly around synthetic test datasets and clearly demarcated educational boundaries, ensuring no false clinical claims or HIPAA misunderstandings."
        }
      ],
      productLens: {
        problemFraming: "In healthcare operations, schedule friction degrades care quality. Doctors need predictable rosters and patients need immediate, friction-free booking confirmations.",
        userNeed: "Patients need intuitive multi-step booking with clear time slot visibility; doctors need high-density daily schedule agendas with instant status controls.",
        workflowDecisions: [
          "Implemented demo role switcher with seeded accounts (Sophie, Maya, Admin) for immediate evaluation.",
          "Separated binary medical attachments into MinIO object storage to keep database queries lightning fast.",
          "Designed clear appointment status badges (Scheduled, Checked In, In Progress, Completed, Cancelled)."
        ],
        tradeoffs: [
          "Chose PostgreSQL exclusion constraints over application-level synchronization to make double-booking physically impossible regardless of server instance count.",
          "Provided a zero-dependency 'free deployment profile' that runs reliably on cloud free tiers without requiring managed Kafka/Redis clusters."
        ],
        productConsiderations: [
          "Patient privacy and compartmentalized access controls",
          "Automated waitlist notifications on cancellation",
          "Integration with HL7 / FHIR healthcare standards"
        ]
      },
      engineeringLens: {
        architectureStyle: "Domain-driven modular monolith with clean controller-service-repository layering.",
        concurrencyAndEvents: "Optimistic locking on entities combined with pessimistic database exclusion constraints on time ranges.",
        apiDesign: "Standardized RESTful JSON API with Spring Security JWT authentication and Swagger UI documentation.",
        persistenceStrategy: "Flyway version-controlled migrations establishing UUID primary keys, foreign key constraints, and spatial GiST indexes.",
        scalabilityConsiderations: [
          "Stateless Spring Boot application nodes scalable across Kubernetes pods.",
          "Redis caching for doctor availability queries to minimize heavy database joins.",
          "Kafka asynchronous consumer workers for non-blocking notification delivery."
        ]
      },
      qualityTesting: {
        methodology: "Rigorous test suite combining Spring Boot @SpringBootTest integration tests, Flyway migration regression checks, and React component tests.",
        coverageDetails: [
          "Spring Boot MockMvc API test suites covering patient, doctor, and admin endpoints.",
          "Concurrent booking collision tests verifying PostgreSQL exclusion constraint enforcement.",
          "Frontend form validation checks with React Hook Form."
        ],
        testFrameworks: ["JUnit 5", "Spring Boot Test", "Testcontainers", "React Testing Library"],
        verificationPoints: [
          "Concurrent booking collision test: 10 parallel threads attempting the same slot result in exactly 1 success and 9 handled rejections",
          "Redis slot lock expiration after TTL",
          "Flyway migration rollback and forward migration verification",
          "Authorization boundary checks: Patient token cannot mutate Doctor roster"
        ]
      },
      challenges: [
        {
          challenge: "Preventing Concurrent Slot Collision Across Clustered Servers",
          solution: "Implemented PostgreSQL GiST exclusion constraints with time ranges rather than relying on in-memory JVM synchronization, ensuring bulletproof multi-pod consistency.",
          takeaway: "True concurrency guarantees must be enforced at the persistence layer when scaling distributed application servers."
        },
        {
          challenge: "Managing Cloud Resource Limits on Demonstration Tiers",
          solution: "Engineered a flexible Spring Profile architecture (free-deployment) that gracefully falls back to in-memory event queues and direct database updates when Kafka/Redis are not provisioned.",
          takeaway: "Production architecture should be resilient and adaptable to varied infrastructure environments."
        }
      ],
      interviewHighlights: {
        whyBuilt: "To demonstrate enterprise software engineering rigor using Java 21 and Spring Boot 3, solving real-world concurrency and data integrity challenges in healthcare operations.",
        tradeoffsMade: "Leveraged database-level GiST exclusion constraints over application locks to guarantee ACID integrity across distributed instances.",
        scaleRoadmap: "Add FHIR/HL7 interoperability adapters, implement Elasticsearch for clinical document search, and introduce Redis cluster caching for multi-hospital scheduling grids.",
        keyLearning: "Mission-critical applications require defensive data architecture where the database itself enforces core business invariants."
      }
    }
  },
  {
    id: "aerosight",
    slug: "aerosight",
    title: "AeroSight — End-to-End Airline Operations Intelligence & Data Platform",
    tagline: "Lakehouse data engineering and real-time operations intelligence platform processing BTS flight telemetry through PySpark medallion pipelines, DuckDB OLAP star schema, and delay prediction ML models.",
    tier: "tier-1",
    domain: "Airline Operations & Data Intelligence",
    featuredRole: "Featured Data / AI Project",
    featured: true,
    categories: ["DATA", "AI / GENAI", "BACKEND", "CLOUD"],
    capabilities: [
      "PySpark Medallion Pipeline (Bronze/Silver/Gold)",
      "DuckDB OLAP Star Schema",
      "Flight Delay ML (Random Forest / Gradient Boosting)",
      "FastAPI & SSE Streaming Telemetry",
      "Kafka Flight Event Replay Producer",
      "React 18 & TypeScript Operations Dashboard",
      "Statistical Hypothesis Testing (ANOVA, Welch's t-test)",
      "Automated Excel Reporting (OpenPyXL)",
      "Data Ingestion & Transformation Quality Gates",
      "Docker Containerized Deployment"
    ],
    technologies: [
      "Python 3.11",
      "PySpark",
      "DuckDB",
      "Delta Lake",
      "Apache Kafka",
      "scikit-learn",
      "FastAPI",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "SQL",
      "Docker",
      "Pytest",
      "Pandas / NumPy"
    ],
    githubUrl: "https://github.com/anvithayerneni/AeroSight",
    githubStatus: "coming_soon",
    liveUrl: "https://pmid-griffin-powerful-triumph.trycloudflare.com",
    apiDocsUrl: "https://pmid-griffin-powerful-triumph.trycloudflare.com/docs",
    metrics: [
      { label: "Data Pipeline Architecture", value: "PySpark Medallion Lakehouse" },
      { label: "Analytical Data Warehouse", value: "DuckDB Star Schema" },
      { label: "Flight Delay ML Models", value: "Random Forest + Gradient Boosting" },
      { label: "Live Telemetry Streaming", value: "FastAPI + SSE Real-Time Feed" }
    ],
    caseStudy: {
      problem: "Commercial airline operations generate millions of daily flight records, turnaround timestamps, weather reports, and delay logs. Without unified lakehouse data engineering and OLAP data modeling, flight dispatchers and operations managers experience high analytical query latencies, slow anomaly identification, and zero predictive visibility into cascading flight delays across hub airports.",
      users: [
        {
          role: "Flight Operations Dispatcher",
          description: "Monitors active flight routes, tracks delay risks, simulates turnaround impacts, and adjusts scheduling buffers in real time.",
          capabilities: ["Real-time flight board", "Interactive delay simulator", "Weather delay alerts", "Route-level telemetry"]
        },
        {
          role: "Airline Data Engineer / Analyst",
          description: "Maintains lakehouse ETL pipelines, executes complex OLAP queries, audits data quality metrics, and generates executive operational reports.",
          capabilities: ["Medallion pipeline monitoring", "Star schema OLAP querying", "Data quality threshold verification", "Automated Excel report generation"]
        }
      ],
      productGoal: "Engineer an end-to-end data lakehouse and real-time operations intelligence platform that ingests real BTS flight datasets, transforms raw records through PySpark medallion stages, powers sub-millisecond OLAP analytics in DuckDB, and serves ML-driven delay predictions to an interactive dispatcher dashboard.",
      keyWorkflows: [
        {
          actor: "PySpark Ingestion",
          step: "Bronze Lakehouse Ingestion",
          title: "Raw Data Ingestion & Schema Enforcing",
          description: "Ingests raw US BTS flight records and airport weather data into Bronze Delta Lake tables preserving original telemetry with audit metadata."
        },
        {
          actor: "PySpark Transformation",
          step: "Silver Cleaning & Enrichment",
          title: "Data Quality & Cleansing",
          description: "Applies data quality gates: deduplication, schema validation, timestamp parsing, missing value handling, and carrier code normalization."
        },
        {
          actor: "PySpark Aggregation",
          step: "Gold Star Schema Loading",
          title: "OLAP Dimensional Modeling",
          description: "Computes route KPIs, airport congestion indices, and loads fact_flights, dim_airports, and dim_carriers into DuckDB analytical warehouse."
        },
        {
          actor: "ML Pipeline & API",
          step: "Delay Prediction & Telemetry Stream",
          title: "Inference & Live Dashboard Streaming",
          description: "FastAPI serves REST endpoints and Server-Sent Events (SSE) streaming live flight status updates and real-time delay probability predictions to the React UI."
        }
      ],
      solution: "A modern data engineering and AI platform built on a PySpark medallion lakehouse architecture, DuckDB analytical star schema, scikit-learn machine learning delay models, and an interactive React 18 / TypeScript operations dashboard.",
      architectureSummary: "Raw BTS flight data flows into PySpark Bronze tables, cleans into Silver, and aggregates into Gold analytical dimensional tables in DuckDB. Scikit-learn models predict flight delays based on weather, route congestion, and departure buffers. FastAPI streams live flight states and inference outputs to the React frontend dashboard.",
      architectureComponents: [
        {
          name: "PySpark Medallion Lakehouse",
          role: "Distributed ETL & Batch Transformation",
          tech: "PySpark, Delta Lake, Python 3.11",
          description: "Processes large-scale flight datasets through Bronze (raw), Silver (cleansed/validated), and Gold (aggregated KPI) lakehouse tiers."
        },
        {
          name: "DuckDB OLAP Data Warehouse",
          role: "High-Performance Analytical Store",
          tech: "DuckDB, SQL Star Schema",
          description: "Provides columnar star-schema storage with fact_flights and dimension tables for sub-millisecond analytical aggregations."
        },
        {
          name: "Flight Delay ML Engine",
          role: "Predictive Analytics & Classification",
          tech: "scikit-learn, Random Forest, Gradient Boosting",
          description: "Trains classification and regression models on historical BTS data to predict arrival delay probabilities and estimated delay durations."
        },
        {
          name: "FastAPI & SSE Streaming Gateway",
          role: "Real-Time Telemetry & REST API",
          tech: "FastAPI, Server-Sent Events (SSE), Pydantic",
          description: "Exposes flight tracking APIs, delay simulation endpoints, and real-time SSE telemetry streams to connected clients."
        },
        {
          name: "React 18 Operations Dashboard",
          role: "Interactive Dispatcher UI",
          tech: "React 18, TypeScript, Tailwind CSS, Recharts, Vite",
          description: "Rich frontend featuring live flight maps, route delay heatmaps, what-if delay simulators, and operational charts."
        },
        {
          name: "Kafka Telemetry Replay Engine",
          role: "Streaming Event Generator",
          tech: "Apache Kafka, Python Kafka Producer",
          description: "Replays historical flight telemetry streams to simulate high-frequency operational events in real time."
        }
      ],
      technicalImplementation: [
        {
          title: "PySpark Medallion Lakehouse Pipeline",
          detail: "Engineered 3-tier medallion architecture in PySpark: Bronze preserves raw CSV/JSON records with ingestion timestamps, Silver enforces strict schema constraints and handles nulls, and Gold generates fact/dimension tables.",
          codeSnippet: `# PySpark Silver Transformation snippet
def transform_silver_flights(bronze_df):
    return (
        bronze_df
        .filter(col("FL_DATE").isNotNull() & col("OP_CARRIER").isNotNull())
        .withColumn("DEP_DELAY", col("DEP_DELAY").cast("double"))
        .withColumn("ARR_DELAY", col("ARR_DELAY").cast("double"))
        .withColumn("IS_DELAYED", when(col("ARR_DELAY") > 15, 1).otherwise(0))
        .dropDuplicates(["FL_DATE", "OP_CARRIER_FL_NUM", "ORIGIN", "DEST"])
    )`
        },
        {
          title: "Star Schema OLAP Dimensional Modeling in DuckDB",
          detail: "Modeled normalized dimension tables (dim_carriers, dim_airports, dim_date) and partitioned fact_flights in DuckDB, enabling instant analytical queries on millions of records without cluster overhead."
        },
        {
          title: "Statistical Hypothesis Testing & Delay Inference",
          detail: "Implemented ANOVA and Welch's t-test statistical validation across departure hubs and weather bands to quantify statistically significant delay drivers before feature engineering."
        }
      ],
      productLens: {
        problemFraming: "Flight dispatchers make high-stakes decisions under intense time pressure. They need instant visual clarity into delay root causes and predictive risk forecasts.",
        userNeed: "Dispatchers need real-time route health metrics, weather delay indicators, and an interactive simulator to test scheduling buffer adjustments.",
        workflowDecisions: [
          "Built an interactive delay simulator enabling dispatchers to input planned departure adjustments and view predicted arrival outcomes.",
          "Designed color-coded delay status badges (On Time, Minor Delay, Severe Delay, Cancelled) with immediate visual alerts.",
          "Integrated automated Excel report export with pre-formatted charts for executive operations meetings."
        ],
        tradeoffs: [
          "Chose DuckDB for local and containerized OLAP workloads over costly cloud data warehouses to deliver sub-millisecond query performance with zero cloud operational bills.",
          "Used ensemble tree models (Random Forest + Gradient Boosting) for delay prediction to provide fast inference latency (<10ms) and explainable feature importances."
        ],
        productConsiderations: [
          "Multi-hub airline route network expansion",
          "Automated crew turnaround scheduling constraints",
          "FAA / BTS data synchronization pipelines"
        ]
      },
      engineeringLens: {
        architectureStyle: "Lakehouse Medallion Data Architecture paired with microservice API and real-time SSE streaming.",
        concurrencyAndEvents: "Kafka event producer for high-throughput flight replay; async FastAPI event generators for SSE broadcast.",
        apiDesign: "Standardized OpenAPI REST endpoints (/api/v1/flights, /api/v1/predict-delay, /api/v1/analytics) with SSE stream (/api/v1/stream).",
        persistenceStrategy: "DuckDB columnar storage for OLAP fact/dimension queries; Parquet files for lakehouse stages.",
        scalabilityConsiderations: [
          "PySpark jobs scalable across Databricks / EMR distributed clusters for full historical BTS dataset processing.",
          "Stateless FastAPI instances capable of horizontal scaling behind load balancers.",
          "DuckDB in-process execution minimizing serialization and network round-trips."
        ]
      },
      qualityTesting: {
        methodology: "Multi-layered testing with Pytest covering PySpark transformations, DuckDB SQL queries, scikit-learn model serialization, and FastAPI API routes.",
        coverageDetails: [
          "Pytest suite verifying data quality rules, schema assertions, and boundary conditions.",
          "Statistical validation checking ANOVA and t-test calculation correctness.",
          "API contract tests verifying schema compliance on delay prediction inputs."
        ],
        testFrameworks: ["Pytest", "FastAPI TestClient", "DuckDB Test Harness", "Ruff"],
        verificationPoints: [
          "Bronze-to-Silver transformation deduplication and null-filter verification",
          "DuckDB star schema join consistency and aggregation accuracy",
          "ML model inference input bounds checking and output probability ranges (0.0 to 1.0)",
          "SSE stream connection handling and event formatting"
        ]
      },
      challenges: [
        {
          challenge: "Handling Missing and Irregular Flight Telemetry Timestamps",
          solution: "Implemented robust PySpark imputation and cleansing routines that validate flight duration consistency against scheduled block times while isolating corrupted records into quarantine tables.",
          takeaway: "Production data lakehouse pipelines must always handle dirty raw telemetry defensively without failing downstream pipelines."
        },
        {
          challenge: "Serving Sub-Second Analytical Queries on Large Flight Volumes",
          solution: "Engineered DuckDB star schema indexing and pre-aggregated Gold dimension tables, reducing query latency from seconds to under 5ms.",
          takeaway: "Columnar OLAP engines paired with dimensional star schemas dramatically outperform row-based databases for operational analytics."
        }
      ],
      interviewHighlights: {
        whyBuilt: "To demonstrate full-lifecycle data engineering and applied ML capabilities—from distributed lakehouse PySpark pipelines and OLAP star schemas to real-time ML inference and interactive operational dashboards.",
        tradeoffsMade: "Selected DuckDB as the analytical engine to deliver instant local analytical performance without requiring heavyweight cloud warehouse clusters.",
        scaleRoadmap: "Deploy PySpark jobs onto Databricks Delta Live Tables, implement Great Expectations for automated pipeline data quality assertions, and scale model serving via Triton Inference Server.",
        keyLearning: "Data platforms deliver maximum business value when clean data modeling (medallion architecture) feeds directly into real-time operational decision tools."
      }
    }
  },
  {
    id: "logiflow",
    slug: "logiflow",
    title: "LogiFlow — Real-Time Delivery & Logistics Platform",
    tagline: "High-concurrency delivery platform featuring live courier GPS simulation, sub-second WebSocket tracking, dynamic dispatch, and Kafka-backed state machines across 4 synchronized user roles.",
    tier: "tier-1",
    domain: "Real-Time Logistics & Distributed Systems",
    featuredRole: "Featured Distributed Systems Project",
    featured: true,
    categories: ["SOFTWARE ENGINEERING", "BACKEND", "DATA", "FULL STACK", "CLOUD"],
    capabilities: [
      "Real-Time WebSockets (<100ms)",
      "Kafka Event-Driven Architecture",
      "Dynamic Haversine Courier Dispatch",
      "Finite State Machine (FSM)",
      "Multi-Persona Portals (4 Roles)",
      "Interactive Leaflet GPS Simulation",
      "PostgreSQL + Redis Caching",
      "Prometheus & Grafana Telemetry",
      "Docker & Kubernetes Ready",
      "Terraform Azure IaC"
    ],
    technologies: [
      "Python 3.11",
      "FastAPI",
      "Next.js 14",
      "TypeScript",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "SQLAlchemy",
      "Leaflet",
      "WebSockets",
      "Docker",
      "Prometheus & Grafana",
      "Pytest"
    ],
    githubUrl: "https://github.com/anvithayerneni/LogiFlow",
    githubStatus: "available",
    liveUrl: "http://localhost:3000",
    apiDocsUrl: "http://localhost:8000/docs",
    demoAccounts: [
      { role: "Customer", email: "customer@example.com", note: "Active order currently in transit with live map polyline" },
      { role: "Restaurant", email: "restaurant@example.com", note: "Manager of Bella Napoli Trattoria with live kitchen ticket board" },
      { role: "Driver", email: "driver@example.com", note: "Courier cockpit with live GPS simulator on SF streets" },
      { role: "Admin", email: "admin@example.com", note: "Full platform analytics, order velocity metrics & fleet dispatch" }
    ],
    metrics: [
      { label: "Active Synchronized Roles", value: "4 Distinct Personas" },
      { label: "Real-Time Tracking Latency", value: "< 100ms WebSocket" },
      { label: "Dispatch State Integrity", value: "100% Strict FSM Enforced" },
      { label: "Seeded Infrastructure", value: "5 Restaurants, 30+ Menu Items, 10 Couriers" }
    ],
    caseStudy: {
      problem: "On-demand food and parcel delivery platforms must coordinate four distinct stakeholders (Customers, Kitchens, Couriers, and Operations Admins) in real-time under high concurrency. Race conditions in order state changes, inaccurate ETAs, and disconnected location tracking create operational chaos, missed pickups, and customer dissatisfaction.",
      users: [
        {
          role: "Customer",
          description: "Explores restaurant menus, places orders, watches live courier location updates on an interactive Leaflet map, and receives dynamic ETA predictions.",
          capabilities: ["Catalog browsing", "Cart & checkout", "Live map tracking", "Order history & receipt"]
        },
        {
          role: "Restaurant Kitchen Manager",
          description: "Manages live incoming order queue via a Kanban board with aging ticket timers, confirms orders, and signals when food is ready for courier pickup.",
          capabilities: ["Kitchen Kanban board", "Ticket aging timers", "Menu availability toggling", "Preparation state updates"]
        },
        {
          role: "Delivery Courier / Driver",
          description: "Operates a mobile courier cockpit showing guaranteed payout, step-by-step pickup/drop-off directions, and a realistic GPS simulator navigating San Francisco streets.",
          capabilities: ["Delivery assignment acceptance", "GPS location broadcasting", "Guaranteed payout preview", "Delivery confirmation"]
        },
        {
          role: "Operations Admin",
          description: "Monitors platform KPIs in real-time: order velocity charts, active fleet density, revenue metrics, and fulfillment cycle times.",
          capabilities: ["Real-time KPI dashboard", "Fleet tracking overlay", "Velocity telemetry", "Fulfillment bottleneck auditing"]
        }
      ],
      productGoal: "Create an end-to-end real-time logistics ecosystem that seamlessly synchronizes order state transitions across customer tracking, kitchen operations, courier navigation, and administrative oversight with sub-second latency.",
      keyWorkflows: [
        {
          actor: "Customer",
          step: "Order Creation",
          title: "Order Placement & Validation",
          description: "Customer checks out items; backend creates an order with PENDING status and publishes an order.created event to Kafka."
        },
        {
          actor: "Restaurant",
          step: "Kitchen Preparation",
          title: "Ticket Acceptance & Cooking",
          description: "Kitchen receives event via WebSocket, transitions status to CONFIRMED -> PREPARING -> READY_FOR_PICKUP."
        },
        {
          actor: "Dispatch Engine",
          step: "Courier Matching",
          title: "Dynamic Haversine Dispatch",
          description: "Dispatch algorithm calculates nearest available couriers using Haversine distance, assigns driver, and triggers routing."
        },
        {
          actor: "Courier & Customer",
          step: "Real-Time In-Transit Tracking",
          title: "GPS Simulation & Live Broadcast",
          description: "Courier cockpit streams simulated GPS coords at 1Hz via WebSockets; customer map updates live with smooth interpolation and recalculated ETA."
        },
        {
          actor: "Courier",
          step: "Fulfillment",
          title: "Proof of Delivery",
          description: "Courier marks delivered; system transitions order to DELIVERED, records timestamped telemetry, and updates revenue metrics."
        }
      ],
      solution: "A scalable event-driven architecture pairing FastAPI and Next.js 14 with Apache Kafka event streaming, Redis pub/sub caching, WebSocket connection multiplexing, and strict finite state machine validation.",
      architectureSummary: "Frontend clients connect to FastAPI REST routers and WebSocket hubs. All state mutations trigger Kafka events (orders, couriers, telemetry). Redis manages connection heartbeats and caching. PostgreSQL stores ACID-compliant business state, while Prometheus/Grafana capture operational telemetry.",
      architectureComponents: [
        {
          name: "Next.js 14 Frontend Client",
          role: "Multi-Role Web Client",
          tech: "Next.js 14, React, TypeScript, Leaflet, Tailwind CSS",
          description: "Responsive 4-in-1 portal with instant role switching, interactive maps, and real-time WebSocket listeners."
        },
        {
          name: "FastAPI Real-Time Gateway",
          role: "REST & WebSocket Gateway",
          tech: "FastAPI, Python 3.11, Uvicorn, WebSockets",
          description: "Handles authentication, order lifecycle REST endpoints, WebSocket connection management, and dispatch logic."
        },
        {
          name: "Apache Kafka Event Bus",
          role: "Asynchronous Message Backbone",
          tech: "Kafka, Partitioned Topics",
          description: "Guarantees reliable, decoupled event distribution for order lifecycle transitions and telemetry events."
        },
        {
          name: "Redis Cache & Geospatial Pub/Sub",
          role: "High-Throughput Ephemeral Store",
          tech: "Redis",
          description: "Maintains driver geospatial heartbeats, active WebSocket channel sessions, and short-lived order caches."
        },
        {
          name: "PostgreSQL Primary Store",
          role: "ACID Relational Persistence",
          tech: "PostgreSQL, SQLAlchemy 2, Alembic",
          description: "Stores restaurants, menu items, user credentials, orders, deliveries, and historical audit logs."
        },
        {
          name: "Prometheus & Grafana Observability",
          role: "Telemetry & Performance Metrics",
          tech: "Prometheus, Grafana Dashboards",
          description: "Monitors HTTP latency, active WebSocket connections, Kafka consumer lag, and order throughput."
        }
      ],
      technicalImplementation: [
        {
          title: "Strict Finite State Machine (FSM)",
          detail: "Implemented a non-bypassable state machine for orders (PENDING -> CONFIRMED -> PREPARING -> READY -> IN_TRANSIT -> DELIVERED) preventing invalid jumps or concurrency race conditions.",
          codeSnippet: `ALLOWED_TRANSITIONS = {
    OrderStatus.PENDING: [OrderStatus.CONFIRMED, OrderStatus.CANCELLED],
    OrderStatus.CONFIRMED: [OrderStatus.PREPARING, OrderStatus.CANCELLED],
    OrderStatus.PREPARING: [OrderStatus.READY_FOR_PICKUP],
    OrderStatus.READY_FOR_PICKUP: [OrderStatus.IN_TRANSIT],
    OrderStatus.IN_TRANSIT: [OrderStatus.DELIVERED],
}`
        },
        {
          title: "Haversine Dynamic Dispatch Algorithm",
          detail: "Calculates great-circle distance between available active couriers and restaurant pickup locations to match optimal couriers in O(N) time."
        },
        {
          title: "Graceful In-Memory Event Fallback",
          detail: "Engineered dual-mode architecture: runs with enterprise Kafka/Redis in Docker/Kubernetes mode, or automatically falls back to an in-memory async event bus and SQLite for zero-dependency local review."
        }
      ],
      productLens: {
        problemFraming: "In logistics, lack of real-time visibility creates friction between hungry customers, stressed kitchen staff, and waiting drivers.",
        userNeed: "Each persona requires high information clarity suited to their context: kitchen needs ticket urgency timers, drivers need route geometry and payouts, customers need map reassurance.",
        workflowDecisions: [
          "Added one-click demo role switcher in navigation to allow stakeholders to experience all 4 viewpoints seamlessly.",
          "Designed driver cockpit with simplified high-contrast UI suitable for mobile mounting in a vehicle.",
          "Built kitchen view around visual Kanban columns with colored aging indicators for overdue orders."
        ],
        tradeoffs: [
          "Chose WebSocket persistent duplex connections over HTTP polling to minimize server load and eliminate latency jitter.",
          "Implemented simulated San Francisco street trajectories to demonstrate realistic geospatial tracking without requiring live physical drivers."
        ],
        productConsiderations: [
          "Batch dispatch vs single-order assignment",
          "Dynamic surge pricing and delivery fee calculation",
          "Courier ratings and automated tip payout calculations"
        ]
      },
      engineeringLens: {
        architectureStyle: "Event-driven microservices architecture with decoupled pub/sub message brokers.",
        concurrencyAndEvents: "Kafka partitioned topics (orders, courier_locations, telemetry) ensure ordered event processing per order entity.",
        apiDesign: "REST API for transactional mutations; WebSocket endpoints for real-time bi-directional telemetry broadcasting.",
        persistenceStrategy: "Relational database with normalized schemas, foreign key cascade constraints, and indexed spatial coordinates.",
        scalabilityConsiderations: [
          "Docker Compose orchestration with Kubernetes manifests ready for AKS/EKS cluster auto-scaling.",
          "Terraform scripts for provisioning Azure Kubernetes Service, Azure Database for PostgreSQL, and Redis.",
          "Stateless WebSocket workers backed by Redis pub/sub channel multiplexing."
        ]
      },
      qualityTesting: {
        methodology: "Dual testing strategy with Pytest for backend state machine verification, dispatch math, and WebSocket managers; Playwright for end-to-end role switching and map rendering.",
        coverageDetails: [
          "Pytest suite covering auth JWT, FSM transition guards, Haversine formula, and driver matching.",
          "Playwright E2E browser tests validating order placement to delivery completion.",
          "ESLint and TypeScript strict compiler checks."
        ],
        testFrameworks: ["Pytest", "FastAPI TestClient", "Jest / Testing Library"],
        verificationPoints: [
          "Illegal state transition rejection (e.g. jumping from PENDING directly to DELIVERED raises 400)",
          "Haversine calculation accuracy within 0.1% margin of error",
          "WebSocket disconnect and reconnection state recovery",
          "Seed script data integrity across 5 restaurants and 10 couriers"
        ]
      },
      challenges: [
        {
          challenge: "Managing WebSocket Connection Lifecycle at Scale",
          solution: "Built a centralized WebSocket connection manager in FastAPI that categorizes active sockets by order ID and role, auto-cleaning dead sockets on disconnect.",
          takeaway: "Connection multiplexing must always account for client drops and reconnections without holding stale socket references in memory."
        },
        {
          challenge: "Eventual Consistency in Event-Driven State Changes",
          solution: "Combined database-level row locking with idempotent Kafka consumer handlers, ensuring messages delivered more than once do not corrupt order state.",
          takeaway: "In distributed logistics, at-least-once messaging requires strict consumer idempotency."
        }
      ],
      interviewHighlights: {
        whyBuilt: "To demonstrate full architectural mastery over real-time distributed systems, event-driven streaming with Kafka, and complex multi-role product experiences.",
        tradeoffsMade: "Implemented dual-mode execution (Kafka mode for production, in-memory bus for local testing) to ensure ease of evaluation without sacrificing enterprise architectural design.",
        scaleRoadmap: "Incorporate spatial indexing with PostGIS, implement OSRM (Open Source Routing Machine) for turn-by-turn road snapping, and deploy Redis Cluster for geo-sharded location caching.",
        keyLearning: "Real-time products succeed when engineering state guarantees (FSM) match the psychological needs of the user (immediate visual feedback)."
      }
    }
  }
];
