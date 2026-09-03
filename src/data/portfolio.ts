import aiResumeAnalyzerImage from "@/assets/ai-resume-analyzer-preview.png.asset.json";
import littleLemonImage from "@/assets/little-lemon-preview.png.asset.json";
import inventoryMasterImage from "@/assets/inventory-master-preview.png.asset.json";

export const profile = {
  name: "Musaddiq Hussain",
  title: "Junior Python Developer",
  fullTitle: "Junior Python Developer | Django & REST APIs | Backend Development",
  location: "Lahore, Punjab, Pakistan",
  email: "musaddiqh02@gmail.com",
  phone: "+92 306 9744983",
  phoneHref: "tel:+923069744983",
  github: "https://github.com/Musaddiq174",
  linkedin: "https://linkedin.com/in/musaddiq-hussain/",
  intro:
    "I build reliable backend applications, RESTful APIs, and database-driven solutions using Python and Django, with a focus on clean code, secure authentication, and practical problem solving.",
  about:
    "Results-driven Junior Python Developer skilled in Django, RESTful API development, and database management. Strong foundation in backend engineering, secure authentication, and performance optimization. Experienced in collaborative team projects focused on scalable web applications, efficient data handling, and clean, maintainable code. Passionate about learning new technologies and applying them to solve real-world problems.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Central Punjab",
    period: "2021 – 2025",
    location: "Lahore, Pakistan",
  },
};

export const skillGroups = [
  {
    title: "Backend Development",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "CRUD Operations",
      "Authentication",
      "API Integration",
    ],
  },
  { title: "Databases", items: ["SQL", "SQLite", "MySQL"] },
  { title: "Programming", items: ["C", "C++", "OOP", "Data Structures"] },
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "TypeScript",
      "React.js",
      "Next.js",
      "Responsive Web Design",
    ],
  },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "PyCharm"] },
  {
    title: "Professional Skills",
    items: ["Problem Solving", "Team Collaboration", "Testing", "Deployment"],
  },
];

export const experience = [
  {
    role: "Associate Trainee Intern",
    company: "VisNext Software Solutions",
    location: "Lahore, Pakistan",
    period: "March 2026 – April 2026",
    highlight: "30% performance improvement",
    points: [
      "Improved system performance by 30% by developing robust backend solutions using Python and Django.",
      "Assisted in developing and maintaining RESTful APIs for web applications.",
      "Collaborated with senior developers to improve application functionality and performance.",
      "Participated in debugging, testing, and database-related tasks.",
      "Contributed to team projects while following clean coding practices and version control workflows.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  filters: string[];
  demo: string;
  repo: string;
  accent: "emerald" | "cyan" | "violet" | "amber";
  note?: string;
  metrics?: string[];
  featured?: boolean;
  core?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "resume-insight-ai",
    name: "AI Resume Analyzer",
    category: "AI Application",
    description:
      "An AI-focused resume analysis interface designed to help users evaluate resumes, review ATS-style insights, analyze skills, and compare profiles with job requirements.",
    features: [
      "Resume analysis",
      "ATS-style score",
      "Skills analysis",
      "Missing skills",
      "Job matching",
      "Resume insights",
      "Dashboard",
      "Responsive interface",
    ],
    tags: ["AI", "Resume Analysis", "ATS", "Job Matching", "Frontend"],
    filters: ["AI"],
    demo: "https://resume-insight-ai-82.vercel.app/",
    repo: "https://github.com/Musaddiq174/resume-insight-ai-82",
    accent: "violet",
    image: aiResumeAnalyzerImage.url,
    note: "Presented as an AI resume analysis interface / prototype — no real LLM backend is claimed.",
    featured: true,
  },
  {
    slug: "assistai-suite",
    name: "AI Customer Support Assistant",
    category: "AI / Customer Support",
    description:
      "A modern AI customer-support interface designed around intelligent conversations, knowledge-base search, FAQs, customer feedback, and support analytics.",
    features: [
      "AI chat interface",
      "Suggested questions",
      "Conversation history",
      "Knowledge base",
      "FAQ system",
      "Customer feedback",
      "Support analytics",
      "Admin dashboard",
    ],
    tags: ["AI", "Customer Support", "Chat Interface", "Knowledge Base", "Analytics"],
    filters: ["AI"],
    demo: "https://assistai-suite-3q5t15dyj-musaddiqh0123-7969s-projects.vercel.app/",
    repo: "https://github.com/Musaddiq174/assistai-suite",
    accent: "cyan",
    note: "Presented as an AI customer support interface / prototype — no real LLM backend is claimed.",
    featured: true,
  },
  {
    slug: "ai-insights-hub",
    name: "AI Knowledge Base & Document Assistant",
    category: "AI / Knowledge Management",
    description:
      "A modern AI knowledge-management interface designed to help users explore documents, search a knowledge base, ask questions, review AI-style responses, and monitor usage analytics.",
    features: [
      "Document management",
      "AI assistant interface",
      "Knowledge base",
      "Document summaries",
      "Search",
      "Conversation history",
      "Analytics",
      "Responsive dashboard",
    ],
    tags: ["AI", "Document Management", "Knowledge Base", "Search", "Analytics"],
    filters: ["AI"],
    demo: "https://ai-insights-hub-kappa.vercel.app/",
    repo: "https://github.com/Musaddiq174/ai-insights-hub",
    accent: "amber",
    note: "Presented as an AI document assistant interface / prototype — no real document-processing backend is claimed.",
    featured: true,
  },
  {
    slug: "css-success-path",
    name: "CSS Success Path",
    category: "Backend Development / REST APIs",
    description:
      "A mock testing platform built with RESTful APIs for creating, retrieving, and submitting mock tests and results.",
    features: [
      "RESTful APIs",
      "Dynamic question selection",
      "Secure authentication",
      "Automated test evaluation",
      "Admin dashboard",
      "User performance tracking",
      "Pagination",
      "Filtering",
    ],
    tags: ["Python", "Django", "Django REST Framework", "SQLite", "REST APIs", "Authentication"],
    filters: ["Backend", "Django", "REST APIs"],
    demo: "https://path-to-proficiency.vercel.app/",
    repo: "https://github.com/Musaddiq174/path-to-proficiency",
    accent: "emerald",
    core: true,
  },
  {
    slug: "smart-assess",
    name: "Smart Assess",
    category: "Backend Development / API",
    description:
      "A quiz and assessment platform focused on user management, quiz creation, authentication, and performance tracking.",
    features: [
      "User management",
      "Quiz creation",
      "Performance tracking",
      "Role-based authentication",
      "Unit testing",
      "API integration",
    ],
    tags: ["Python", "Django", "Django REST Framework", "REST APIs", "Authentication", "Testing"],
    filters: ["Backend", "Django", "REST APIs"],
    demo: "https://smart-assess-platform.vercel.app/",
    repo: "https://github.com/Musaddiq174/smart-assess-platform",
    accent: "emerald",
    core: true,
  },
  {
    slug: "little-lemon",
    name: "Little Lemon Restaurant Website",
    category: "Web Application",
    description:
      "A responsive restaurant website designed to improve customer engagement with menu management and a database-connected contact system.",
    features: [
      "Responsive design",
      "Menu management",
      "Contact form",
      "Database connectivity",
      "Mobile responsiveness",
    ],
    tags: ["HTML", "CSS", "Bootstrap", "Django", "Database"],
    filters: ["Web Applications", "Django"],
    demo: "https://little-lemon-zeta-bice.vercel.app/",
    repo: "https://github.com/Musaddiq174/little-lemon-showcase",
    accent: "amber",
    image: littleLemonImage.url,
    metrics: ["50% customer engagement improvement", "20% mobile responsiveness improvement"],
    note: "Metrics are as stated in my CV.",
  },
  {
    slug: "inventory-master",
    name: "Inventory & Sales Management System",
    category: "Business Management / Dashboard",
    description:
      "A modern business management dashboard designed to manage products, inventory, customers, orders, suppliers, sales analytics, and business reports.",
    features: [
      "Product management",
      "Inventory tracking",
      "Low-stock monitoring",
      "Customer management",
      "Order management",
      "Supplier management",
      "Sales analytics",
      "Business reports",
      "Responsive dashboard",
    ],
    tags: ["React", "TypeScript", "Dashboard", "Inventory", "Sales", "Business Management"],
    filters: ["Business Applications", "Web Applications"],
    demo: "https://inventory-master-liart.vercel.app/",
    repo: "https://github.com/Musaddiq174/inventory-master",
    accent: "cyan",
    note: "Presented as a frontend business application.",
  },
];

export const projectFilters = [
  "All",
  "Backend",
  "Django",
  "REST APIs",
  "AI",
  "Web Applications",
  "Business Applications",
];

export const certifications = [
  { name: "APIs", platform: "Coursera", url: "https://coursera.org/verify/2YQLAM88ED4Q" },
  {
    name: "Backend Development and API Creation",
    platform: "Coursera",
    url: "https://coursera.org/verify/P9AR4AWWSIXW",
  },
  {
    name: "Django Application Development with SQL and Databases",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/CRRFEGR4VAS3",
  },
  {
    name: "Django Web Framework",
    platform: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/V0TFBPECU03D",
  },
];
