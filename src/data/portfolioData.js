export const personalInfo = {
  name: "Sachin Yadav",
  title: "Software Engineer & Software Developer",
  college: "ABES Engineering College, Ghaziabad",
  batch: "2023 – 2027",
  degree: "B.Tech in Information Technology",
  location: "Ghaziabad / Delhi NCR, India",
  email: "sachinyadav1234sysy@gmail.com",
  tagline: "Building robust, scalable software applications with modern full-stack web architecture, clean API design, and solid Data Structures & Algorithms foundations.",
  about: `I am a proactive and driven B.Tech Information Technology student at ABES Engineering College (2023–2027) with a strong passion for software engineering, web development, and problem solving. 

My primary expertise spans full-stack software development (MongoDB, Express.js, React.js, Node.js), developing performant RESTful APIs, securing applications with JWT authentication, and designing responsive, accessible user interfaces. Concurrently, I actively hone my analytical skills through Data Structures and Algorithms in Java, having solved 150+ problems on LeetCode.

I thrive on turning complex backend logic and user requirements into seamless, high-performance digital products.`,
  socials: {
    github: "https://github.com/sachinyadav1234-art",
    linkedin: "https://www.linkedin.com/in/sy6386/",
    leetcode: "https://leetcode.com/u/sachinyadav78/",
    email: "mailto:sachinyadav1234sysy@gmail.com",
  },
  stats: [
    { label: "LeetCode Problems", value: "150+", suffix: "Solved", icon: "Code" },
    { label: "B.Tech IT", value: "2023-27", suffix: "ABES EC", icon: "GraduationCap" },
    { label: "Focus", value: "Software Dev", suffix: "Full-Stack", icon: "Layers" },
    { label: "Production Projects", value: "4+", suffix: "Built", icon: "FolderGit2" }
  ]
};

export const educationData = [
  {
    institution: "ABES Engineering College",
    degree: "Bachelor of Technology in Information Technology (B.Tech IT)",
    period: "2023 – 2027",
    location: "Ghaziabad, Uttar Pradesh",
    status: "Currently in 2nd/3rd Year",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (DBMS), Operating Systems, Computer Networks, Web Development.",
      "Active participant in collegiate hackathons, technical clubs, and coding competitions.",
      "Consistently maintaining strong academic standing while building real-world software projects."
    ]
  }
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", tag: "Frontend & Backend" },
      { name: "Java (DSA)", level: "Intermediate", icon: "Cpu", tag: "Algorithms & OOP" },
      { name: "SQL", level: "Intermediate", icon: "Database", tag: "Relational Queries" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout", tag: "Web Standards" },
      { name: "Python", level: "Intermediate", icon: "Terminal", tag: "Scripting & Basics" }
    ]
  },
  {
    category: "System Design",
    skills: [
      { name: "MVC Architecture", level: "Advanced", icon: "Layers", tag: "Separation of Concerns" },
      { name: "Database Indexing", level: "Intermediate", icon: "Database", tag: "B-Tree & Query Plan" },
      { name: "ACID Transactions", level: "Intermediate", icon: "ShieldCheck", tag: "Financial Invariants" },
      { name: "REST API & Idempotency", level: "Advanced", icon: "Send", tag: "API Contracts & Retries" },
      { name: "JWT & RBAC Security", level: "Intermediate", icon: "Lock", tag: "Token Auth & Access" },
      { name: "Rate Limiting & Security", level: "Intermediate", icon: "Shield", tag: "DDoS & Injection Guard" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom", tag: "Hooks, Context, State" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette", tag: "Responsive & Modern UI" },
      { name: "Responsive Web Design", level: "Advanced", icon: "Smartphone", tag: "Mobile-First" },
      { name: "REST API Integration", level: "Advanced", icon: "Network", tag: "Axios & Fetch" }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server", tag: "Runtime & Async" },
      { name: "Express.js", level: "Advanced", icon: "Zap", tag: "RESTful Framework" },
      { name: "RESTful APIs", level: "Advanced", icon: "Send", tag: "API Architecture" },
      { name: "JWT Authentication", level: "Intermediate", icon: "ShieldCheck", tag: "Token Security & RBAC" },
      { name: "Middleware & Error Handling", level: "Advanced", icon: "Layers", tag: "Backend Patterns" }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB & Mongoose", level: "Advanced", icon: "Database", tag: "NoSQL & Schemas" },
      { name: "Postman", level: "Advanced", icon: "Activity", tag: "API Testing & Docs" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", tag: "Version Control & CI/CD" },
      { name: "Vite & npm", level: "Advanced", icon: "Boxes", tag: "Build Tooling" },
      { name: "VS Code", level: "Advanced", icon: "Code2", tag: "Dev Environment" }
    ]
  }
];

export const projectsData = [
  {
    id: "backend-ledger-system",
    title: "Backend Ledger System",
    shortDescription: "A high-reliability transactional accounting and double-entry ledger engine engineered for strict ACID compliance, zero-balance drift, and idempotent operations.",
    category: "Backend & System Design",
    featured: true,
    techStack: ["Node.js", "Express.js", "MongoDB", "ACID Transactions", "JWT RBAC", "Postman", "REST APIs"],
    githubUrl: "https://github.com/sachinyadav1234-art/backend-ledger-system",
    liveUrl: "https://documenter.getpostman.com/view/ledger-api-docs",
    architectureBadge: "Double-Entry Engine • ACID Invariants",
    bullets: [
      "Engineered double-entry bookkeeping logic to guarantee zero discrepancy between credits and debits (Σ Debits = Σ Credits) across all multi-party ledger transfers.",
      "Implemented distributed idempotency control via unique Idempotency-Key headers, preventing double-spending and duplicate mutations on network retries.",
      "Secured system via Role-Based Access Control (RBAC) with granular JWT token scopes for Admin, Auditor, and Merchant roles.",
      "Built complete automated test coverage with Postman API collections and error-handling middleware for edge-case recovery."
    ],
    architectureHighlights: [
      "Double-entry ledger invariant engine preventing balance overdraft and phantom discrepancies",
      "Atomic multi-document sessions with automatic rollback on validation failure",
      "Strict payload schema validation using Joi with sanitized inputs",
      "Comprehensive Postman test runner simulating concurrent transactional load"
    ],
    systemDesign: {
      pattern: "Double-Entry Transaction Engine with Atomic Sessions",
      summary: "Financial accounting system prioritizing consistency and auditability over eventual consistency, utilizing strict double-entry invariants and atomic session transactions.",
      layers: [
        {
          tier: "Client & Ingress Layer",
          title: "API Consumers & Postman Runner",
          components: ["Merchant Webhooks", "Admin Console", "Postman Automated Test Suites"],
          protocol: "HTTPS / REST (JSON)",
          responsibility: "Issues transactional requests with cryptographic JWT bearer tokens and idempotency keys."
        },
        {
          tier: "Security & Middleware Gateway",
          title: "Ingress Guard & Idempotency Filter",
          components: ["Rate Limiter (100 req/min)", "CORS & Helmet", "Idempotency Cache", "JWT RBAC Authenticator"],
          protocol: "Express Middleware Chain",
          responsibility: "Validates caller roles, verifies unique request keys to eliminate double-charges, and rejects unauthenticated traffic."
        },
        {
          tier: "Business & Invariant Engine",
          title: "Double-Entry Balancing Service",
          components: ["Transaction Coordinator", "Debit/Credit Balance Evaluator", "Overdraft Prevention Guard"],
          protocol: "Service Layer (Domain Logic)",
          responsibility: "Asserts that sum of debits strictly equals sum of credits prior to any database mutation."
        },
        {
          tier: "Persistence & Audit Layer",
          title: "Atomic Database & Append-Only Log",
          components: ["MongoDB Multi-Document Transactions", "Immutable Journal Entries", "Indexed Account Balances"],
          protocol: "Mongoose ODM / Native Driver",
          responsibility: "Executes ACID atomic commits; automatically aborts and rolls back entire transaction if any entry fails."
        }
      ],
      tradeoffs: [
        {
          title: "Double-Entry Journal vs Single Mutable Balance",
          decision: "Used an append-only ledger of debit/credit journal entries instead of directly mutating a single balance column.",
          rationale: "Directly updating balances introduces race conditions and leaves zero audit trail. Double-entry ensures immutable forensic tracking and mathematical zero-drift.",
          impact: "Guarantees 100% auditability; eliminates phantom discrepancies and balance corruption."
        },
        {
          title: "Idempotency-Key Header for Distributed Safety",
          decision: "Required an Idempotency-Key header on all state-mutating transaction endpoints.",
          rationale: "Network timeouts or mobile retries can cause clients to re-send requests, risking double debits.",
          impact: "Zero duplicate transaction charges even under flaky network connections or duplicate user clicks."
        },
        {
          title: "Atomic Session Rollbacks (ACID) vs Eventual Consistency",
          decision: "Enforced MongoDB session transactions (`session.withTransaction`) across multi-document ledger writes.",
          rationale: "Financial transfers must never leave one account debited if the corresponding credit fails.",
          impact: "Eliminates orphaned financial states; 100% atomic execution."
        }
      ],
      databaseSchema: [
        {
          model: "Account",
          indexes: "accountNumber (Unique), userId (Indexed)",
          fields: "_id, accountNumber, accountType (ASSET|LIABILITY|EQUITY), balance, currency, status, createdAt"
        },
        {
          model: "Transaction",
          indexes: "idempotencyKey (Unique Index), reference (Indexed), createdAt (-1)",
          fields: "_id, idempotencyKey, reference, status (POSTED|FAILED|PENDING), totalAmount, description, createdAt"
        },
        {
          model: "JournalEntry",
          indexes: "transactionId (Indexed), accountId (Indexed)",
          fields: "_id, transactionId, accountId, entryType (DEBIT|CREDIT), amount, currency, postedAt"
        }
      ],
      endpoints: [
        { method: "POST", path: "/api/v1/ledger/transactions", auth: "JWT (Merchant/Admin)", status: "201 Created", description: "Executes idempotent atomic double-entry transfer" },
        { method: "GET", path: "/api/v1/ledger/accounts/:id/statement", auth: "JWT (Account Owner)", status: "200 OK", description: "Streams chronological ledger entries and statement" },
        { method: "GET", path: "/api/v1/ledger/audit/trial-balance", auth: "JWT (Auditor/Admin)", status: "200 OK", description: "Verifies system-wide equality between total debits & credits" },
        { method: "POST", path: "/api/v1/auth/token", auth: "Public / API Key", status: "200 OK", description: "Authenticates client and issues role-scoped JWT token" }
      ]
    }
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker (MERN Stack)",
    shortDescription: "A full-stack personal finance application with server-side MongoDB aggregation pipelines, compound B-tree indexing, and stateless JWT session management.",
    category: "Full-Stack Web App",
    featured: true,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/sachinyadav1234-art/mern-expense-tracker",
    liveUrl: "https://mern-expense-tracker-demo.vercel.app",
    architectureBadge: "Layered MVC • Aggregation Pipelines",
    bullets: [
      "Architected secure RESTful APIs with Node.js & Express using JWT authentication and Bcrypt password hashing (12 salt rounds).",
      "Offloaded dynamic monthly categorization, expense distribution, and budget analytics directly to MongoDB aggregation pipelines ($group, $facet, $match).",
      "Optimized query performance using compound B-Tree indexes on (userId, date), shifting query execution plan from COLLSCAN to IXSCAN.",
      "Engineered a responsive mobile-first UI in React.js and Tailwind CSS featuring date range filters, category summaries, and export functionality."
    ],
    architectureHighlights: [
      "Modular MVC architecture cleanly isolating routing, validation, business logic, and data models",
      "Server-side MongoDB aggregation pipelines reducing API payload transfer by ~70%",
      "Compound indexing strategy ensuring O(log N) query time for high-volume transactions",
      "Security hardening with express-rate-limit, CORS origin locking, and NoSQL injection sanitization"
    ],
    systemDesign: {
      pattern: "Layered Client-Server Architecture (MVC + Service Layer)",
      summary: "High-performance full-stack dashboard utilizing server-side database aggregations, stateless JWT authentication, and optimized compound indexing.",
      layers: [
        {
          tier: "Client Tier (SPA)",
          title: "React 18 Dashboard",
          components: ["React 18 Components", "Axios Interceptor Pipeline", "Context API State", "Tailwind CSS UI"],
          protocol: "HTTPS / JSON",
          responsibility: "Renders responsive data visualizations, manages client state, and intercepts 401 token expirations."
        },
        {
          tier: "Security & API Gateway",
          title: "Express Security Layer",
          components: ["Express Rate Limiter", "CORS Policy", "Mongo Sanitize", "JWT Auth Guard"],
          protocol: "Node.js / Express Middleware",
          responsibility: "Protects against brute force (100 req/15 min), scrubs malicious NoSQL query operators, and decodes JWT."
        },
        {
          tier: "Controller & Aggregation Layer",
          title: "Express Controllers & Services",
          components: ["Auth Controller (Bcrypt)", "Expense Service", "Aggregation Pipeline Builder"],
          protocol: "Service Layer",
          responsibility: "Applies validation rules and orchestrates multi-stage aggregation pipelines for analytics."
        },
        {
          tier: "Database & Storage Layer",
          title: "MongoDB Atlas Cluster",
          components: ["Users Collection", "Expenses Collection", "Compound B-Tree Indexes", "Mongoose ODM"],
          protocol: "MongoDB Wire Protocol (BSON)",
          responsibility: "Persists records and computes aggregation stages in database memory without heavy server overhead."
        }
      ],
      tradeoffs: [
        {
          title: "Server-Side Aggregations vs In-Memory Client Processing",
          decision: "Utilized MongoDB `$facet` and `$group` aggregation pipelines instead of transferring raw records for client-side filtering.",
          rationale: "Sending thousands of expense documents to the browser degrades network performance and increases mobile memory usage.",
          impact: "Cut network payload size by over 70% and reduced frontend computation time to near zero."
        },
        {
          title: "Compound Indexing on (userId: 1, date: -1)",
          decision: "Created a compound index covering both user ownership and chronological ordering.",
          rationale: "Expenses are always filtered by the authenticated user and sorted by date. Without an index, every query results in a full collection scan (COLLSCAN).",
          impact: "Query execution plan shifted to index scan (IXSCAN), maintaining sub-15ms response times as datasets scale."
        },
        {
          title: "Stateless JWT Auth vs Stateful Server Sessions",
          decision: "Employed stateless JWT tokens containing user identity and role claims.",
          rationale: "Avoided server-side session memory stores (like Redis) for this tier while preserving horizontal scalability.",
          impact: "Enables server instances to remain completely stateless with zero session lookup latency."
        }
      ],
      databaseSchema: [
        {
          model: "User",
          indexes: "email (Unique Index)",
          fields: "_id, name, email, passwordHash (Bcrypt), createdAt, updatedAt"
        },
        {
          model: "Expense",
          indexes: "compound(userId: 1, date: -1), category (Indexed)",
          fields: "_id, userId (Foreign Ref), title, amount, category, date, notes, createdAt"
        },
        {
          model: "Category",
          indexes: "compound(userId: 1, name: 1)",
          fields: "_id, userId, name, budgetLimit, color, icon"
        }
      ],
      endpoints: [
        { method: "POST", path: "/api/v1/auth/login", auth: "Public", status: "200 OK", description: "Authenticates user credentials and returns signed JWT" },
        { method: "GET", path: "/api/v1/expenses", auth: "JWT Required", status: "200 OK", description: "Retrieves paginated and filtered transactions for user" },
        { method: "GET", path: "/api/v1/expenses/analytics/monthly", auth: "JWT Required", status: "200 OK", description: "Executes MongoDB aggregation for monthly distribution" },
        { method: "POST", path: "/api/v1/expenses", auth: "JWT Required", status: "201 Created", description: "Creates expense entry with schema validation" }
      ]
    }
  },
  {
    id: "dev-hub-portfolio",
    title: "Modern Developer Portfolio",
    shortDescription: "A blazing-fast, accessible personal portfolio website with dark/light mode toggle, smooth interactive animations, and centralized content management.",
    category: "Frontend & UI/UX",
    featured: false,
    techStack: ["React.js", "Tailwind CSS", "Vite", "Lucide Icons", "Responsive Design"],
    githubUrl: "https://github.com/sachinyadav1234-art/react-portfolio",
    liveUrl: "https://sachinyadav.dev",
    architectureBadge: "Static Site Generation • Edge CDN",
    bullets: [
      "Designed a sleek glassmorphic UI with dynamic dark/light mode support adhering to system preference and persistent local storage.",
      "Integrated smooth section scrolling, mobile navigation drawer, and modular component architecture.",
      "Achieved 100/100 Lighthouse performance, SEO, and accessibility metrics with zero cumulative layout shift (CLS: 0)."
    ],
    architectureHighlights: [
      "Zero layout shift design with Tailwind v4 & Vite",
      "Accessible ARIA landmarks and keyboard navigable modals",
      "Type-safe centralized content architecture for instantaneous page hydration"
    ],
    systemDesign: {
      pattern: "Static Jamstack Architecture with Client-Side Hydration",
      summary: "Zero-latency, globally edge-distributed personal platform designed for maximum accessibility, instantaneous interaction, and 100 Lighthouse scores.",
      layers: [
        {
          tier: "Edge CDN & Delivery",
          title: "Global Edge Network",
          components: ["Vercel / Cloudflare Edge CDN", "HTTP/2 Multiplexing", "Brotli Compression"],
          protocol: "HTTPS / Edge Cache",
          responsibility: "Serves pre-compiled HTML, CSS, and minified JS bundles from edge locations with <50ms TTFB."
        },
        {
          tier: "Client Runtime & State",
          title: "React 18 & Virtual DOM",
          components: ["React 18 Hydration", "LocalStorage Theme Store", "System Color-Scheme Watcher"],
          protocol: "Browser Engine",
          responsibility: "Handles zero-layout-shift UI interactions and modal keyboard accessibility (ESC traps, focus)."
        },
        {
          tier: "Styling & Asset Pipeline",
          title: "Tailwind CSS JIT Engine",
          components: ["Tailwind CSS v4", "Lucide SVG Icons", "Optimized WebP/JPG Images"],
          protocol: "Vite Asset Pipeline",
          responsibility: "Purges unused CSS, leaving ultra-lightweight stylesheets (<15KB gzipped)."
        }
      ],
      tradeoffs: [
        {
          title: "Centralized Data Architecture vs External Headless CMS",
          decision: "Structured portfolio data into a single, modular TypeScript/JavaScript schema instead of querying a remote CMS API.",
          rationale: "Remote CMS calls introduce network latency, API rate limits, and failure modes on personal portfolio visits.",
          impact: "100% uptime, 0ms network latency for content rendering, and zero build complexity."
        },
        {
          title: "Client-Side LocalStorage Theme Sync vs Server Cookies",
          decision: "Implemented theme preference synchronization via `localStorage` with immediate DOM class toggling.",
          rationale: "Prevents flashing unstyled content (FOUC) while honoring the visitor's OS dark/light mode preference.",
          impact: "Seamless theme switching without page reloads or layout flickers."
        }
      ],
      databaseSchema: [
        {
          model: "PortfolioData Module",
          indexes: "In-Memory Indexed Arrays",
          fields: "personalInfo, educationData, skillCategories, projectsData, achievementsData, resumeData"
        }
      ],
      endpoints: [
        { method: "GET", path: "/", auth: "Public", status: "200 OK", description: "Serves pre-rendered HTML with embedded critical CSS" },
        { method: "GET", path: "/assets/*", auth: "Public", status: "200 OK", description: "Serves immutable, cache-busted static asset bundles" }
      ]
    }
  }
];

export const achievementsData = [
  {
    id: "leetcode-150",
    title: "LeetCode 150+ Problems Solved",
    category: "Data Structures & Algorithms",
    organization: "LeetCode",
    date: "Ongoing",
    badgeText: "150+ Solved",
    description: "Solved 150+ algorithmic coding challenges covering Arrays, Strings, Linked Lists, Binary Trees, Recursion, Binary Search, and Dynamic Programming in Java.",
    link: "https://leetcode.com/u/sachinyadav78/",
    icon: "Code",
    metrics: [
      { label: "Language", value: "Java" },
      { label: "Key Topics", value: "Trees, Graphs, DP, Arrays" },
      { label: "Focus", value: "Time & Space Optimization" }
    ]
  },
  {
    id: "hackathon-finalist",
    title: "Code-War Hackathon Finalist",
    category: "Competitive Hackathon",
    organization: "Technical Innovation Club",
    date: "2024",
    badgeText: "Finalist",
    description: "Selected as a finalist in a high-intensity hackathon, collaborating with a 3-member team to design, build, and pitch a functional prototype within 24 hours.",
    link: "#",
    icon: "Trophy",
    metrics: [
      { label: "Format", value: "24-Hour Sprint" },
      { label: "Role", value: "Full-Stack Dev" },
      { label: "Outcome", value: "Top 10 Finalist" }
    ]
  },
  {
    id: "hackerrank-react",
    title: "HackerRank React (Basic) Certificate",
    category: "Skill Certification",
    organization: "HackerRank",
    date: "Verified",
    badgeText: "Certified",
    description: "Demonstrated proficiency in React fundamentals, Component Lifecycle, Hooks (useState, useEffect), Props, and State Management patterns.",
    link: "https://www.hackerrank.com/certificates/",
    icon: "Award",
    metrics: [
      { label: "Platform", value: "HackerRank" },
      { label: "Domain", value: "Frontend / React" },
      { label: "Status", value: "Verified Skill" }
    ]
  },
  {
    id: "hackerrank-python",
    title: "HackerRank Python Certificate",
    category: "Skill Certification",
    organization: "HackerRank",
    date: "Verified",
    badgeText: "Certified",
    description: "Passed rigorous problem-solving tests assessing Python syntax, data structures, functional constructs, and standard libraries.",
    link: "https://www.hackerrank.com/certificates/",
    icon: "Award",
    metrics: [
      { label: "Platform", value: "HackerRank" },
      { label: "Domain", value: "Python Core" },
      { label: "Status", value: "Verified Skill" }
    ]
  }
];

export const resumeData = {
  summary: "Software Engineer & Software Developer (2nd/3rd year B.Tech IT student at ABES Engineering College, 2023–2027). Skilled in Java (DSA), JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, SQL, and system design fundamentals with 150+ LeetCode problems solved.",
  education: {
    degree: "B.Tech in Information Technology",
    college: "ABES Engineering College, Ghaziabad",
    duration: "2023 – 2027",
    score: "Pursuing"
  },
  technicalSkills: {
    languages: "JavaScript (ES6+), Java (DSA), SQL, HTML5, CSS3, Python (Basics)",
    systemDesign: "MVC Architecture, Database Indexing, ACID Transactions, Idempotent APIs, RBAC",
    frontend: "React.js, Tailwind CSS, Component Architecture, Responsive Web Design",
    backend: "Node.js, Express.js, RESTful APIs, JWT Authentication, Middleware",
    databases: "MongoDB, Mongoose ODM, MySQL",
    developerTools: "Git, GitHub, Postman, Vite, VS Code, npm"
  },
  keyProjects: [
    {
      name: "Expense Tracker (MERN Stack)",
      desc: "Full-stack finance tracking app with JWT auth, MongoDB aggregations for monthly category breakdowns, and interactive React UI."
    },
    {
      name: "Backend Ledger System",
      desc: "Secure transaction backend with double-entry bookkeeping rules, role-based access control, and complete Postman API coverage."
    }
  ],
  achievements: [
    "Solved 150+ DSA problems on LeetCode with Java.",
    "Finalist in Code-War 24-hour Hackathon.",
    "HackerRank Certified in React (Basic) & Python (Basic)."
  ]
};
