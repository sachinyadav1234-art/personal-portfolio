export const personalInfo = {
  name: "Sachin Yadav",
  title: "Software Engineer & Software Developer",
  college: "ABES Engineering College, Ghaziabad",
  batch: "2023 – 2027",
  degree: "B.Tech in Information Technology",
  location: "Ghaziabad / Delhi NCR, India",
  email: "sachin.yadav.dev@example.com",
  tagline: "Building robust, scalable software applications with modern full-stack web architecture, clean API design, and solid Data Structures & Algorithms foundations.",
  about: `I am a proactive and driven B.Tech Information Technology student at ABES Engineering College (2023–2027) with a strong passion for software engineering, web development, and problem solving. 

My primary expertise spans full-stack software development (MongoDB, Express.js, React.js, Node.js), developing performant RESTful APIs, securing applications with JWT authentication, and designing responsive, accessible user interfaces. Concurrently, I actively hone my analytical skills through Data Structures and Algorithms in Java, having solved 150+ problems on LeetCode.

I thrive on turning complex backend logic and user requirements into seamless, high-performance digital products.`,
  socials: {
    github: "https://github.com/sachinyadav1234-art",
    linkedin: "https://www.linkedin.com/in/sy6386/",
    leetcode: "https://leetcode.com/u/sachinyadav78/",
    email: "mailto:sachin.yadav.dev@example.com",
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
      { name: "Python", level: "Intermediate", icon: "Terminal", tag: "Scripting & Basics" },
      { name: "C / C++", level: "Fundamental", icon: "Binary", tag: "Core Concepts" }
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
    id: "expense-tracker",
    title: "Expense Tracker (MERN Stack)",
    shortDescription: "Comprehensive full-stack personal finance application with secure JWT authentication, dynamic expense categorization, and interactive visual analytics.",
    category: "Full-Stack Web App",
    featured: true,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/sachinyadav1234-art/mern-expense-tracker",
    liveUrl: "https://mern-expense-tracker-demo.vercel.app",
    bullets: [
      "Architected secure RESTful APIs with Node.js & Express using JWT authentication and Bcrypt password hashing for robust user sessions.",
      "Implemented MongoDB aggregation pipelines to calculate monthly income vs. expense trends, custom category breakdowns, and dynamic budget thresholds.",
      "Crafted a responsive mobile-first UI in React.js and Tailwind CSS featuring interactive charts, date range filtering, and CSV export functionality."
    ],
    architectureHighlights: [
      "MVC Backend Structure (Controllers, Models, Routes, Middlewares)",
      "Protected Route Guards & Refresh Token Handling in React",
      "Optimized MongoDB Indexes for lightning-fast transaction queries"
    ]
  },
  {
    id: "backend-ledger-system",
    title: "Backend Ledger System",
    shortDescription: "A robust transactional accounting and double-entry ledger backend engineered for high reliability, ACID compliance, and secure financial records.",
    category: "Backend Engine & APIs",
    featured: true,
    techStack: ["Node.js", "Express.js", "MongoDB / SQL", "JWT Auth", "Postman", "REST APIs"],
    githubUrl: "https://github.com/sachinyadav1234-art/backend-ledger-system",
    liveUrl: "https://documenter.getpostman.com/view/ledger-api-docs",
    bullets: [
      "Engineered double-entry bookkeeping logic to guarantee zero discrepancy between credits and debits across multi-party transactions.",
      "Implemented role-based access control (RBAC) with JWT tokens to separate admin audits, customer balances, and merchant payouts.",
      "Built comprehensive automated test suites and Postman API collections with complete error-handling middleware for edge-case idempotency."
    ],
    architectureHighlights: [
      "Double-entry ledger validation rules preventing overdraft and balance corruption",
      "Transaction rollback mechanisms simulating distributed transaction safety",
      "Strict schema validation using Joi / Express-validator"
    ]
  },
  {
    id: "dev-hub-portfolio",
    title: "Modern Developer Portfolio",
    shortDescription: "A blazing-fast, accessible, and responsive personal portfolio website with dark/light mode toggle, smooth interactive animations, and centralized content management.",
    category: "Frontend & UI/UX",
    featured: false,
    techStack: ["React.js", "Tailwind CSS", "Vite", "Lucide Icons", "Responsive Design"],
    githubUrl: "https://github.com/sachinyadav1234-art/react-portfolio",
    liveUrl: "https://sachinyadav.dev",
    bullets: [
      "Designed a sleek glassmorphic UI with dynamic dark/light mode support adhering to system preference and persistent local storage.",
      "Integrated smooth section scrolling, mobile navigation drawer, and modular component architecture.",
      "Achieved 100/100 Lighthouse performance, SEO, and accessibility metrics."
    ],
    architectureHighlights: [
      "Zero layout shift design with Tailwind v4 & Vite",
      "Accessible ARIA landmarks and keyboard navigable modals"
    ]
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
