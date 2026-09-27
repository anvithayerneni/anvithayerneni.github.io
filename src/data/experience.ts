export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Professional Experience" | "Education";
  domain: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const EXPERIENCES: WorkExperience[] = [
  {
    id: "susser-bank",
    role: "Software Engineer",
    company: "Susser Bank",
    location: "Dallas, TX",
    period: "May 2024 – Present",
    type: "Professional Experience",
    domain: "Financial Services & Banking Systems",
    summary: "Engineered scalable backend services, automated data processing pipelines, and AI-enabled workflows for financial operations, transaction validation, and reconciliation.",
    highlights: [
      "Designed and developed high-performance backend microservices using Python, FastAPI, and PostgreSQL for financial transaction processing and automated reconciliation.",
      "Engineered resilient data pipelines and validation workflows processing complex financial records, ensuring strict schema enforcement, auditability, and data integrity.",
      "Integrated AWS cloud services to support scalable asynchronous processing, secure data storage, and automated cloud workflows.",
      "Implemented AI-enabled automation pipelines and intelligent document processing workflows to accelerate internal operational verification.",
      "Established comprehensive automated test suites using Pytest and integrated CI/CD pipelines to ensure zero-regression deployments in a regulated financial environment."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "SQL",
      "PostgreSQL",
      "Data Processing",
      "AWS",
      "Financial Workflows",
      "Validation & Reconciliation",
      "AI Workflows",
      "Pytest",
      "CI/CD"
    ]
  },
  {
    id: "toshiba-software",
    role: "Software Engineer",
    company: "Toshiba Software Pvt. Ltd.",
    location: "Bangalore, India",
    period: "January 2022 – December 2022",
    type: "Professional Experience",
    domain: "Enterprise Backend Systems & Distributed Infrastructure",
    summary: "Architected and deployed enterprise RESTful microservices, event-driven message streaming, and distributed caching layers for high-throughput backend systems.",
    highlights: [
      "Architected and deployed scalable RESTful APIs and backend services using Java, Spring Boot, and PostgreSQL.",
      "Engineered event-driven messaging pipelines utilizing Apache Kafka and distributed caching with Redis to process high-volume asynchronous events.",
      "Developed robust persistence layers and optimized relational database queries utilizing JPA/Hibernate and PostgreSQL.",
      "Implemented comprehensive unit and integration test suites using JUnit and Mockito, ensuring high code quality and test coverage across service layers.",
      "Collaborated with distributed engineering teams on API specifications, architectural reviews, and production releases."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "JPA / Hibernate",
      "Apache Kafka",
      "Redis",
      "Backend Services",
      "Event-Driven Architecture",
      "JUnit",
      "Mockito"
    ]
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  details: string[];
  focusAreas: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science (M.S. CS)",
    institution: "Clemson University",
    location: "Clemson, SC, USA",
    graduationDate: "December 2024",
    details: [
      "Focused on Distributed Systems, Artificial Intelligence, Machine Learning, Database Systems, and Advanced Software Engineering.",
      "Built large-scale data engineering pipelines, agentic AI workflows, and high-concurrency distributed systems."
    ],
    focusAreas: ["Distributed Systems", "Artificial Intelligence & ML", "Database Systems", "Software Architecture"]
  },
  {
    degree: "Bachelor of Technology in Computer Science (B.Tech CS)",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "India",
    graduationDate: "Completed",
    details: [
      "Rigorous core curriculum in Data Structures & Algorithms, Operating Systems, Database Management Systems, Object-Oriented Design, and Computer Networks.",
      "Hands-on project work in backend systems, distributed computing, and full-stack software development."
    ],
    focusAreas: ["Data Structures & Algorithms", "Operating Systems", "Object-Oriented Design", "Computer Networks"]
  }
];
