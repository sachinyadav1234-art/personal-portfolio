export const personalInfo = {
  name: "Sachin Yadav",
  title: "Software Engineer & Software Developer",
  college: "ABES Engineering College, Ghaziabad",
  batch: "Sep 2023 – Jul 2027",
  degree: "B.Tech in Information Technology",
  location: "Ghaziabad, Uttar Pradesh",
  phone: "6386032483",
  email: "sachinyadav1234sysy@gmail.com",
  tagline: "Building robust, scalable software applications with modern full-stack web architecture, clean API design, and solid Data Structures & Algorithms foundations.",
  about: `I am a proactive and driven B.Tech Information Technology student at ABES Engineering College (Sep 2023–Jul 2027) with a strong passion for software engineering, web development, and problem solving. 

My primary expertise spans full-stack software development (MongoDB, Express.js, React.js, Node.js), developing performant RESTful APIs, securing applications with JWT authentication, and designing responsive user interfaces. Concurrently, I actively hone my analytical skills through Data Structures and Algorithms in Java, having solved 150+ problems on LeetCode.`,
  socials: {
    github: "https://github.com/sachinyadav1234-art",
    linkedin: "https://linkedin.com/in/sy6386",
    leetcode: "https://leetcode.com/u/sachinyadav78",
    email: "mailto:sachinyadav1234sysy@gmail.com",
    phone: "tel:6386032483",
  },
  stats: [
    { label: "LeetCode Problems", value: "150+", suffix: "Solved in Java", icon: "Code" },
    { label: "B.Tech IT", value: "2023-27", suffix: "ABES EC", icon: "GraduationCap" },
    { label: "B.Tech SGPA", value: "7.31", suffix: "ABES EC", icon: "Award" },
    { label: "Projects", value: "2+", suffix: "Full-Stack & Backend", icon: "FolderGit2" }
  ]
};

export const educationData = [
  {
    institution: "ABES Engineering College, Ghaziabad",
    degree: "B.Tech in Information Technology",
    period: "Sep 2023 – Jul 2027",
    location: "Ghaziabad, Uttar Pradesh",
    score: "SGPA: 7.31",
    highlights: [
      "Currently pursuing B.Tech in IT with core focus on Software Development and Algorithms.",
      "Key Coursework: Data Structures & Algorithms, OOPs in Java, DBMS, Computer Networks (CN), System Design, Web Development."
    ]
  },
  {
    institution: "Harihar Singh Public School",
    degree: "Class 12th (CBSE)",
    period: "2021",
    location: "Uttar Pradesh",
    score: "Percentage: 64.2%",
    highlights: [
      "Senior Secondary Education (CBSE) with focus on Science & Mathematics."
    ]
  },
  {
    institution: "Suryabali Singh Public School, Jaunpur",
    degree: "Class 10th (CBSE)",
    period: "2019",
    location: "Jaunpur, Uttar Pradesh",
    score: "Percentage: 75.2%",
    highlights: [
      "Secondary School Education (CBSE)."
    ]
  }
];

export const trainingData = [
  {
    title: "Web Development Training",
    organization: "ABES Engineering College",
    period: "College Training Program",
    description: "Completed a training program in web development at ABES Engineering College, building real-world web applications using the MERN stack, including authentication, CRUD operations, and deployment."
  }
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: "Advanced", icon: "FileCode", tag: "Frontend & Backend" },
      { name: "SQL", level: "Intermediate", icon: "Database", tag: "Relational Queries" },
      { name: "DSA in Java", level: "Advanced", icon: "Cpu", tag: "Data Structures & Algorithms" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: "Advanced", icon: "Layout", tag: "Markup & Semantics" },
      { name: "CSS", level: "Advanced", icon: "Palette", tag: "Responsive Styling" },
      { name: "React.js", level: "Advanced", icon: "Atom", tag: "UI Components & Hooks" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server", tag: "Runtime Environment" },
      { name: "Express.js", level: "Advanced", icon: "Zap", tag: "REST API Framework" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "Database", tag: "NoSQL Database & Schemas" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch", tag: "Version Control" },
      { name: "GitHub", level: "Advanced", icon: "Code2", tag: "Repository Management" },
      { name: "Postman", level: "Advanced", icon: "Activity", tag: "API Testing & Docs" }
    ]
  },
  {
    category: "Concepts",
    skills: [
      { name: "OOPs", level: "Advanced", icon: "Layers", tag: "Object-Oriented Programming" },
      { name: "DBMS", level: "Advanced", icon: "Database", tag: "Database Management Systems" },
      { name: "Basic CN", level: "Intermediate", icon: "Network", tag: "Computer Networks" },
      { name: "Basic System Design", level: "Intermediate", icon: "Boxes", tag: "System Architecture" }
    ]
  }
];

export const projectsData = [
  {
    id: "expense-tracker",
    title: "Expense Tracker / Budget App",
    shortDescription: "A full-stack personal finance application built with the MERN stack featuring JWT authentication, RESTful APIs, and spending visualization charts.",
    category: "Full-Stack MERN",
    featured: true,
    techStack: ["MERN Stack", "JWT", "REST APIs", "React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/sachinyadav1234-art/mern-expense-tracker",
    liveUrl: "https://expense-tracer-frontend-gamma.vercel.app",
    architectureBadge: "Full-Stack MERN • JWT Auth",
    bullets: [
      "Built a full-stack personal finance app using the MERN stack with JWT authentication and RESTful APIs for managing income and expense transactions.",
      "Designed MongoDB schemas for transactions and categories, enabling users to add, edit, filter, and categorize their spending.",
      "Developed a React.js dashboard with charts to visualize spending patterns and monthly summaries for clearer financial tracking."
    ],
    architectureHighlights: [
      "Secure JWT authentication and password hashing for user data isolation",
      "MongoDB schema design for complex transactional and categorization queries",
      "Interactive React dashboard with real-time spending summaries and chart analytics"
    ]
  },
  {
    id: "backend-ledger-system",
    title: "Backend Ledger System for Banking",
    shortDescription: "A backend-focused double-entry banking ledger system implementing ACID compliant transactions, secure RESTful APIs, and role-based access control.",
    category: "Backend & System Design",
    featured: true,
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "ACID Transactions"],
    githubUrl: "https://github.com/sachinyadav1234-art/backend-ledger-system",
    liveUrl: "https://backend-ledger-v8el.onrender.com",
    architectureBadge: "Banking Ledger • Double-Entry Engine",
    bullets: [
      "Developed a backend-focused double-entry ledger system simulating core banking operations, including account creation, deposits, withdrawals, and fund transfers.",
      "Designed secure RESTful APIs with JWT authentication and role-based access to ensure controlled and auditable handling of financial transactions.",
      "Implemented transaction-safe MongoDB operations using sessions/transactions to maintain ledger consistency and prevent balance mismatches or double-spending."
    ],
    architectureHighlights: [
      "Double-entry bookkeeping engine ensuring mathematical equality across debits and credits",
      "Atomic MongoDB session transactions with immediate rollback on error",
      "Role-Based Access Control (RBAC) with granular JWT authorization"
    ]
  }
];

export const achievementsData = [
  {
    id: "leetcode-150",
    title: "150+ DSA Problems Solved",
    category: "Algorithms & Problem Solving",
    organization: "LeetCode & College Coding Platform",
    date: "Ongoing",
    badgeText: "150+ Solved",
    description: "Solved 150+ problems in Java on LeetCode and college coding platform, demonstrating algorithmic problem-solving skills.",
    link: "https://leetcode.com/u/sachinyadav78",
    icon: "Code",
    metrics: [
      { label: "Language", value: "Java" },
      { label: "Platform", value: "LeetCode" },
      { label: "Focus", value: "DSA & Logic" }
    ]
  },
  {
    id: "hackathon-finalist",
    title: "Code-War Hackathon Finalist",
    category: "Competitive Hackathon",
    organization: "ABES Engineering College",
    date: "Finalist",
    badgeText: "Finalist",
    description: "Selected as a finalist in the Code-War Hackathon at ABES Engineering College, competing against 50+ teams on real-world logic challenges.",
    link: "#",
    icon: "Trophy",
    metrics: [
      { label: "Event", value: "Code-War" },
      { label: "Competition", value: "50+ Teams" },
      { label: "Outcome", value: "Finalist" }
    ]
  }
];

export const certificatesData = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank Role Certification",
    date: "Aug 2026",
    link: "https://www.hackerrank.com/certificates/"
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank Skill Certification",
    date: "Jun 2025",
    link: "https://www.hackerrank.com/certificates/"
  }
];

export const extracurricularData = [
  "Volunteered in organizing and mentoring junior students during college-level coding workshops and hackathons at ABES Engineering College.",
  "Actively participated in technical fests at ABES Engineering College, collaborating with peers on team-based problem-solving challenges."
];

export const resumeData = {
  header: {
    name: "SACHIN YADAV",
    location: "Ghaziabad, Uttar Pradesh",
    phone: "6386032483",
    email: "sachinyadav1234sysy@gmail.com",
    leetcode: "leetcode.com/u/sachinyadav78",
    github: "github.com/sachinyadav1234-art",
    linkedin: "linkedin.com/in/sy6386"
  },
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "ABES Engineering College, Ghaziabad",
      period: "Sep 2023 - Jul 2027",
      score: "SGPA: 7.31"
    },
    {
      degree: "Class 12th (CBSE)",
      institution: "Harihar Singh Public School",
      period: "2021",
      score: "Percentage: 64.2%"
    },
    {
      degree: "Class 10th (CBSE)",
      institution: "Suryabali Singh Public School, Jaunpur",
      period: "2019",
      score: "Percentage: 75.2%"
    }
  ],
  technicalSkills: {
    languages: "JavaScript, SQL, DSA in Java",
    frontend: "HTML, CSS, React.js",
    backend: "Node.js, Express.js",
    database: "MongoDB",
    tools: "Git, GitHub, Postman",
    concepts: "OOPs, DBMS, Basic CN, Basic System Design"
  },
  training: [
    "Completed a training program in web development at ABES Engineering College, building real-world web applications using the MERN stack, including authentication, CRUD operations, and deployment."
  ],
  projects: [
    {
      title: "Expense Tracker / Budget App",
      tech: "MERN Stack, JWT, REST APIs",
      live: "expense-tracer-frontend-gamma.vercel.app",
      bullets: [
        "Built a full-stack personal finance app using the MERN stack with JWT authentication and RESTful APIs for managing income and expense transactions.",
        "Designed MongoDB schemas for transactions and categories, enabling users to add, edit, filter, and categorize their spending.",
        "Developed a React.js dashboard with charts to visualize spending patterns and monthly summaries for clearer financial tracking."
      ]
    },
    {
      title: "Backend Ledger System for Banking",
      tech: "Node.js, Express.js, MongoDB, JWT",
      live: "backend-ledger-v8el.onrender.com",
      bullets: [
        "Developed a backend-focused double-entry ledger system simulating core banking operations, including account creation, deposits, withdrawals, and fund transfers.",
        "Designed secure RESTful APIs with JWT authentication and role-based access to ensure controlled and auditable handling of financial transactions.",
        "Implemented transaction-safe MongoDB operations using sessions/transactions to maintain ledger consistency and prevent balance mismatches or double-spending."
      ]
    }
  ],
  achievements: [
    "Solved 150+ problems in Java on LeetCode and college coding platform, demonstrating algorithmic problem-solving skills.",
    "Selected as a finalist in the Code-War Hackathon at ABES Engineering College, competing against 50+ teams on real-world logic challenges."
  ],
  certificates: [
    "Frontend Developer (React) — HackerRank Role Certification (Aug 2026)",
    "Python (Basic) — HackerRank Skill Certification (Jun 2025)"
  ],
  extracurricular: [
    "Volunteered in organizing and mentoring junior students during college-level coding workshops and hackathons at ABES Engineering College.",
    "Actively participated in technical fests at ABES Engineering College, collaborating with peers on team-based problem-solving challenges."
  ]
};
