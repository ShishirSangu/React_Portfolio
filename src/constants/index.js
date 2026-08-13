export const HERO_CONTENT = `Backend Engineer with 2 years of experience designing and developing enterprise SaaS applications using Python, Django, Django REST Framework, PostgreSQL, and React.js. Experienced in building scalable REST APIs, database-per-tenant multi-tenant architectures, AI-powered workflows, CrewAI agents, RAG pipelines, vector databases, and microservices. Passionate about building scalable backend systems and solving complex engineering problems.`;

export const ABOUT_TEXT = `I am a Backend Engineer at Infanion Software Solutions, Bengaluru, working across enterprise SaaS platforms built with Python, Django, Laravel, React.js, and PostgreSQL. My work spans backend architecture, REST API development, AI-powered automation with CrewAI agents and RAG pipelines, multi-tenant architectures, microservices, and third-party integrations like Microsoft Outlook OAuth. I have hands-on production experience — investigating live issues, optimizing PostgreSQL queries, building queue-based background processing, and supporting enterprise releases. I hold a B.E. in Information Science & Engineering and enjoy solving complex engineering problems while continuously exploring new technologies in backend systems and AI.`;

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Present",
    role: "Associate Developer",
    company: "Infanion Software Solutions, Bengaluru",
    description: `Working as a Full Stack Developer across enterprise SaaS platforms involving Python, Django, Laravel, React.js, PostgreSQL, AI-powered automation, multi-tenant architectures, microservices, REST APIs, and third-party integrations. Contributed to backend architecture, AI workflows (CrewAI agents, RAG, multi-LLM orchestration), production support, PostgreSQL optimization, queue-based background processing, and enterprise application development across three major projects — The Fraim AI, Absolute Jobs, and Maxicon.`,
    technologies: [
      "Python",
      "Django",
      "DRF",
      "Laravel",
      "PostgreSQL",
      "React.js",
      "CrewAI",
      "Docker",
    ],
  },
];

export const PROJECTS = [
  {
    title: "The Fraim AI — AI-Powered Multi-Tenant SaaS Platform",
    description:
      "A multi-tenant SaaS platform that lets organizations build AI-powered workflows using configurable AI agents, RAG, and multiple LLMs. Designed and implemented a database-per-tenant architecture with runtime tenant routing and automated provisioning. Built configurable CrewAI agents, an end-to-end RAG pipeline with LangChain and Qdrant, a WebSocket-based conversational chatbot with human-in-the-loop workflows, and multi-LLM integration with GPT-4o, Claude, AWS Bedrock, and Mistral.",
    technologies: [
      "Python",
      "Django",
      "DRF",
      "CrewAI",
      "LangChain",
      "Qdrant",
      "OpenAI",
      "Claude",
      "AWS Bedrock",
      "PostgreSQL",
      "WebSockets",
      "React.js",
    ],
  },
  {
    title: "Absolute Jobs — Recruitment Management Platform (Production)",
    description:
      "A production recruitment platform built on a microservices architecture, covering candidate management, company onboarding, payroll, interview scheduling, and AI-powered recruitment workflows. Built a reusable Microsoft Outlook OAuth 2.0 integration with refresh token management, converted long-running exports to asynchronous queue-based processing, implemented AI-powered recruitment content generation using OpenAI, and optimized PostgreSQL performance through indexing, EXPLAIN ANALYZE, and N+1 query elimination. Provided end-to-end production support including RCA, data correction, and release deployments.",
    technologies: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "React.js",
      "Django",
      "FastAPI",
      "OAuth 2.0",
      "Laravel Queues",
      "Supervisor",
      "OpenAI",
      "Docker",
    ],
  },
  {
    title: "Maxicon — Enterprise Workforce Management Platform",
    description:
      "An enterprise workforce management platform supporting project planning, employee management, multilingual document generation, and reporting. Developed backend and frontend features across business modules, built legacy data migration workflows with mapping, validation, and import mechanisms, implemented internationalization allowing administrators to manage translations without code changes, and drove performance optimization using API Gateway execution metrics.",
    technologies: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "React.js",
      "TypeScript",
      "Python",
      "Docker",
      "REST APIs",
    ],
  },
  {
    title: "Task Management System (Personal Project)",
    description:
      "A full-stack task management application built with production-oriented architecture. Developed REST APIs using Django REST Framework, configured a Dockerized development environment, integrated PostgreSQL, designed a modular backend following production-ready practices, and built a React.js frontend. Currently implementing JWT-based authentication and Role-Based Access Control (RBAC), with background job processing planned.",
    technologies: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "Docker",
      "React.js",
      "JWT",
    ],
  },
];

export const CONTACT = {
  address: "Bengaluru, India",
  phoneNo: "+91 95383 98740",
  email: "sangameshshishir@gmail.com",
};
