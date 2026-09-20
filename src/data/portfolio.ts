// ─── Personal ────────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Sriniketh Jeevangi",
  initials: "SJ",
  role: "Software Engineer",
  tagline: "Building full-stack & AI-powered systems — from backend APIs to cloud infrastructure.",
  email: "jsriniketh777@gmail.com",
  linkedin: "https://www.linkedin.com/in/srinikethjeevangi/",
  github: "https://github.com/Sriniketh-J7",
  leetcode: "https://leetcode.com/u/Sriniketh7/",
  location: "Hyderabad, Telangana, India",
  available: true,
  summary: "Computer Science graduate specialised in Data Science with hands-on experience building full-stack and AI-enabled applications. Proven ability to deliver end-to-end solutions from development to cloud deployment.",
};

// ─── Navbar ──────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "AI/ML Engineer",
  "Cloud Deployer",
];

// iconKey maps to lucide icon names resolved in Hero.tsx
export const heroStats = [
  { iconKey: "Folder",      value: "10+",   label: "Systems Shipped" },
  { iconKey: "Code2",       value: "200+",  label: "LeetCode Problems" },
  { iconKey: "GitBranch",   value: "1000+", label: "Git Commits" },
  { iconKey: "GraduationCap", value: "8.1", label: "CGPA" },
];

// ─── Social Profiles ──────────────────────────────────────────────────────────
export const profiles = [
  { name: "LinkedIn", image: "./icons/linkedin.png", link: "https://www.linkedin.com/in/srinikethjeevangi/" },
  { name: "GitHub",   image: "./icons/github.png",   link: "https://github.com/Sriniketh-J7" },
  { name: "LeetCode", image: "./icons/LeetCode.png", link: "https://leetcode.com/u/Sriniketh7/" },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    title: "Full Stack Developer Intern",
    company: "Inspiring Wave Digitech",
    location: "Hyderabad",
    period: "April 2025 – August 2025",
    bullets: [
      "Architected 12+ RESTful APIs handling 50K+ daily requests; optimised MongoDB queries reducing response time by 81% (800ms → 150ms).",
      "Implemented JWT + role-based access control, reducing unauthorised access by 98% across 4 user roles.",
      "Deployed applications on AWS (EC2, S3) with Docker containers, reducing deployment time by 40%.",
      "Diagnosed and resolved production issues in Agile SDLC environment, maintaining stable deployments.",
    ],
    stack: ["Node.js", "React.js", "Express.js", "MongoDB", "AWS", "Docker", "Supabase"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    specialisation: "Data Science",
    institution: "Swami Vivekananda Institute of Technology",
    university: "Jawaharlal Nehru Technological University Hyderabad",
    period: "November 2022 – May 2026",
    cgpa: "8.1",
    location: "Hyderabad, Telangana, India",
  },
];

// certIconKey maps to CertIcon components resolved in Education.tsx
export const certifications = [
  { iconKey: "Trophy",  name: "Smart India Hackathon 2024", issuer: "Govt. of India", badge: "Finalist",  badgeColor: "border-yellow-500/30 text-yellow-400 bg-yellow-500/10" },
  { iconKey: "Bot",     name: "AI Fundamentals",            issuer: "IBM",             badge: "Certified", badgeColor: "border-green-500/30 text-green-400 bg-green-500/10" },
  { iconKey: "Sparkles",name: "Generative AI",              issuer: "Google",          badge: "Certified", badgeColor: "border-green-500/30 text-green-400 bg-green-500/10" },
];

export const coursework = [
  "Data Structures", "DBMS", "Machine Learning", "OOP",
  "Cloud Computing", "SDLC", "OS", "Computer Networks", "Big Data Analytics", "Data Science", "Devops"
];

// ─── Skills ───────────────────────────────────────────────────────────────────
// categoryIcon & skill iconKey are resolved to components in Skills.tsx
export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    description: "Programming languages I use",
    categoryIcon: "Code2",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    skills: [
      { name: "Java", iconKey: "java" },
      { name: "Python", iconKey: "python" },
      { name: "JavaScript", iconKey: "js" },
      { name: "TypeScript", iconKey: "ts" },
      { name: "C language", iconKey: "c" },
      { name: "R programming", iconKey: "r" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server-side technologies",
    categoryIcon: "Server",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    skills: [
      { name: "Node.js", iconKey: "node" },
      { name: "Express.js", iconKey: "express" },
      { name: "SQL", iconKey: "sql" },
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "MongoDB", iconKey: "mongo" },
      { name: "Supabase", iconKey: "supabase" },
      { name: "REST APIs", iconKey: "rest" },
      { name: "GraphQL", iconKey: "graphql" },
      { name: "WebSockets", iconKey: "websocket" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive interfaces",
    categoryIcon: "Monitor",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    skills: [
      { name: "React.js", iconKey: "react" },
      { name: "Next.js", iconKey: "next" },
      { name: "Redux", iconKey: "redux" },
      { name: "HTML", iconKey: "html" },
      { name: "CSS", iconKey: "css" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    description: "Artificial Intelligence & ML",
    categoryIcon: "Brain",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    skills: [
      { name: "Machine Learning", iconKey: "ml" },
      { name: "Scikit", iconKey: "scikit" },
      { name: "Deep Learning", iconKey: "dl" },
      { name: "LLM Integration", iconKey: "llm" },
      { name: "Pytorch", iconKey: "pytorch" },
      { name: "NLP", iconKey: "nlp" },
      { name: "RAG", iconKey: "rag" },
      { name: "GenAI", iconKey: "genai" },
      { name: "Speech APIs", iconKey: "speech" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Tools & platforms I use",
    categoryIcon: "Cloud",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
    skills: [
      { name: "Linux", iconKey: "linux" },
      { name: "AWS", iconKey: "aws" },
      { name: "Docker", iconKey: "docker" },
      { name: "CI/CD", iconKey: "cicd" },
      { name: "Git", iconKey: "git" },
      { name: "GitHub", iconKey: "github" },
    ],
  },
  {
    id: "concepts",
    title: "Concepts",
    description: "Fundamental CS concepts",
    categoryIcon: "Layers",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    skills: [
      { name: "Data Structures", iconKey: "ds" },
      { name: "DBMS", iconKey: "dbms" },
      { name: "OOP", iconKey: "oop" },
      { name: "OS", iconKey: "os" },
      { name: "SDLC", iconKey: "sdlc" },
      { name: "Agile", iconKey: "agile" },
    ],
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    description: "Data analysis & visualization",
    categoryIcon: "BarChart3",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    skills: [
      { name: "Excel", iconKey: "excel" },
      { name: "Power BI", iconKey: "powerbi" },
      { name: "SQL", iconKey: "sqlda" },
      { name: "EDA", iconKey: "eda" },
      { name: "Feature Engineering", iconKey: "feature" },
      { name: "Statistical Analysis", iconKey: "stats" },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const allProjects = [
  {
    id: 1,
    tags: "Full Stack, AI",
    image: "projects/snapfix.jpg",
    title: "SnapFix",
    description:
      "AI-powered civic reporting platform that classifies issues from images and provides real-time resolution tracking.",
    stack: ["React", "Node.js", "Image classifier", "Web Sockets", "MongoDB"],
    github: "https://github.com/Sriniketh-J7/SnapFix",
    live: "https://snapfix-rouge.vercel.app/",
    demo: "https://www.youtube.com/watch?v=UuZyAWHL5uk&feature=youtu.be",
    color: "#5b8cff",
  },

  {
    id: 2,
    tags: "Full Stack",
    image: "projects/chatapp.png",
    title: "Real-time Chat App",
    description:
      "Real-time messaging platform with instant communication, media sharing, and WebSocket-powered updates.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "Express.js",
      "Socket.io",
    ],
    github: "https://github.com/Sriniketh-J7/chat-app-1",
    live: "https://chat-app-eta-eight-11.vercel.app/login",
    color: "#5b8cff",
  },

  {
    id: 3,
    tags: "AI-ML",
    image: "projects/sales.png",
    title: "Sales Forecasting on Walmart Data",
    description:
      "Analyzes historical sales patterns and uses multiple machine learning and time-series models to predict future demand.",
    stack: [
      "Python",
      "Random Forest",
      "XG Boost",
      "Arima",
      "TensorFlow",
      "Prophet",
    ],
    github: "https://github.com/Sriniketh-J7/Sales-Forecasting-on-Walmart-data",
    live: "https://sales-forecast-realtime.streamlit.app/",
    demo: "https://sales-forecasting-ar.streamlit.app/",
    color: "#5b8cff",
  },

  {
    id: 4,
    tags: "AI-ML",
    image: "projects/segment.png",
    title: "Smart-Cart Customer Segmentation",
    description:
      "Analyzes customer purchasing behavior and uses clustering to group shoppers into distinct segments for targeted insights.",
    stack: [
      "Hierarichial Clustering",
      "K-means",
      "Streamlit",
      "Sklearn",
      "PCA",
    ],
    github: "https://github.com/Sriniketh-J7/Smart-Cart",
    live: "https://sj-smart-cart.streamlit.app/",
    color: "#5b8cff",
  },

  {
    id: 5,
    tags: "AI-ML",
    image: "projects/customer.png",
    title: "Customer Churn Predictor",
    description:
      "Analyzes customer data to identify patterns associated with churn and predicts which customers are likely to leave.",
    stack: ["Random Forest", "XG Boost", "Pandas", "Numpy", "Streamlit"],
    github: "https://github.com/Sriniketh-J7/Customer-Churn-Prediction",
    live: "https://customer-churn-prediction-sriniketh-j7.streamlit.app/",
    color: "#5b8cff",
  },

  {
    id: 6,
    tags: ["GenAI, LLM"],
    image: "projects/ai_interviewer.png",
    title: "AI Virtual Interviewer",
    description:
      "Conducts interactive voice-based mock interviews, generates questions using an LLM, converts speech to text, and responds using synthesized voice.",
    stack: [
      "Python",
      "Gemini AI LLM",
      "Google Speech-to-Text",
      "Google Text-to-Speech",
    ],
    github: "https://github.com/Sriniketh-J7/AI-Powered-Virtual-Interviewer",
    demo: "https://www.youtube.com/watch?v=osNQKdPzRTA&feature=youtu.be",
    color: "#5b8cff",
  },
];
