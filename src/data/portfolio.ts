// ============================================================
// Portfolio Data — All structured content for the portfolio
// Update this file to change any portfolio content.
// ============================================================

// --- Types ---

export interface NavLink {
  label: string;
  href: string;
}

export interface CoreSkill {
  name: string;
  icon: string; // Filename for the SVG in /public/icons/skills/
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface Project {
  number: string;
  title: string;
  subtitle?: string;
  role?: string;
  summary: string;
  points: string[];
  stack: string[];
  skills: string[];
  /** Small label shown on the image, e.g. "Lab Operations" */
  badge: string;
  /** Screenshot path under /public, e.g. "/Image/projects/smile.png". Leave empty to show the placeholder. */
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  certificationNo?: string;
  registrationNo?: string;
  tools?: string[];
  description?: string;
  isFlagship?: boolean;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  linkedin: string;
}

// --- Navigation ---

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// --- Hero ---

export const hero = {
  statusLabel: "Available for software engineering roles",
  name: "Avinkumar Subburam",
  role: "Software Developer & Full Stack Engineer",
  description:
    "I build scalable enterprise web applications, backend services, API-driven systems, and responsive user experiences using ASP.NET Core, React.js, Next.js, SQL Server, and PostgreSQL.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: {
    label: "Download Resume",
    href: "/resume/AvinkumarSubburamResume_20260710.pdf",
  },
};

// --- About ---

export const about = {
  eyebrow: "01 / ABOUT",
  heading: ["I build enterprise software that", "connects UI, APIs and data."],
  paragraphs: [
    "I'm Avinkumar Subburam, a Software Developer focused on building scalable enterprise web applications, backend services, and database-driven systems.",
    "My work spans frontend development, backend APIs, database workflows, debugging, and production support for real-world business applications.",
  ],
  capabilitiesLabel: "What I work across",
  capabilities: [
    "Enterprise Applications",
    "Full Stack Engineering",
    "API Integration",
    "Database-Driven Systems",
    "Production Support",
  ],
  facts: [
    { label: "Currently", value: "Software Developer at Vaanam Technologies" },
    { label: "Core Stack", value: "ASP.NET Core / React.js / Next.js" },
    { label: "Based In", value: "Coimbatore, India" },
  ],
  cta: { lead: "More about my work", label: "View Experience", href: "#experience" },
};

// --- Core Technology Stack ---

export const coreSkillsRow1: CoreSkill[] = [
  { name: "C#", icon: "csharp.png" },
  { name: "ASP.NET Core", icon: "dotnet.png" },
  { name: "ASP.NET MVC Core", icon: "ASP.NET Core MVC Badge.png" },
  { name: "ASP.NET Core Web API", icon: "dotnet.png" },
  { name: "React.js", icon: "react.svg" },
  { name: "Next.js", icon: "nextjs.png" },
];

export const coreSkillsRow2: CoreSkill[] = [
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "SQL Server", icon: "sqlserver.svg" },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "MySQL", icon: "mysql.svg" },
  { name: "SSMS", icon: "ssms.svg" },
  { name: "Git", icon: "git.svg" },
];

// --- Experience ---

export const experiences: Experience[] = [
  {
    company: "Vaanam Technologies",
    location: "Coimbatore, India",
    role: "Software Developer",
    period: "Apr 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Worked across: ASP.NET Core, React.js, Next.js, SQL Server, PostgreSQL, REST APIs.",
      "Build responsive frontend components and integrate them with scalable backend services and APIs to support business workflows.",
      "Develop and maintain backend functionality including business logic, API endpoints, database operations, and application integrations.",
      "Work with SQL Server and PostgreSQL for data retrieval, query optimization, and application data management.",
      "Support application debugging, issue resolution, performance improvements, and responsive UI/UX enhancements.",
      "Contribute to enterprise applications used in real-world business environments, including development, debugging, defect resolution, database verification, and QA/UAT/Production deployment support.",
    ],
  },
  {
    company: "YASH Technology",
    location: "Hyderabad, India — Remote",
    role: "Software Development Intern",
    period: "Dec 2024 – Mar 2025",
    type: "Internship",
    responsibilities: [
      "Worked across: ASP.NET MVC Core, SQL Server.",
      "Developed an Admin Module using ASP.NET MVC Core to support application administration.",
      "Integrated the application with SQL Server for structured data storage, retrieval, and database operations.",
      "Worked with conditional logic, database connectivity, and backend application development.",
    ],
  },
];

// --- Projects ---

export const projects: Project[] = [
  {
    number: "01",
    title: "SMIL-e",
    subtitle: "EMC Lab Management System",
    summary:
      "A large-scale enterprise laboratory management application used across Bosch operations in Coimbatore and Bengaluru.",
    points: [
      "Application modules and laboratory / project business workflows",
      "Role-based access control, reporting and email notifications",
      "Production data verification with QA, UAT and production support",
    ],
    stack: ["ASP.NET MVC Core", "SQL Server", "SSMS"],
    skills: [
      "CRUD Operations",
      "Role-Based Access Control",
      "Reporting",
      "Database Verification",
      "Debugging",
      "Production Support",
    ],
    badge: "Lab Operations",
    // Add screenshot: /public/Image/projects/smile.png
    image: "",
  },
  {
    number: "02",
    title: "Enterprise CRM Solution",
    role: "Core Feature Developer",
    summary:
      "An enterprise CRM platform supporting business operations, events, customer workflows and payment processing.",
    points: [
      "Dynamic form workflows across frontend and backend",
      "Secure payment integration through ASP.NET Core Web APIs",
      "Optimized PostgreSQL queries for scalability and performance",
    ],
    stack: ["Next.js", "ASP.NET Core Web API", "PostgreSQL"],
    skills: [
      "REST API Integration",
      "Dynamic Form Workflows",
      "Payment Integration",
      "Query Optimization",
      "Frontend / Backend Integration",
    ],
    badge: "Customer Workflows",
    // Add screenshot: /public/Image/projects/crm.png
    image: "",
  },
  {
    number: "03",
    title: "Marketing CMS Platform",
    role: "Full Stack Developer",
    summary:
      "A modern marketing platform built with Next.js and a Strapi headless CMS.",
    points: [
      "SEO-focused marketing pages",
      "REST APIs for real-time lead capture",
      "60% reduction in content deployment time",
    ],
    stack: ["Next.js", "Strapi CMS", "REST APIs"],
    skills: [
      "SEO",
      "REST API Integration",
      "Content Management",
      "Lead Capture",
      "Performance Optimization",
    ],
    badge: "Content → Leads",
    // Add screenshot: /public/Image/projects/cms.png
    image: "",
  },
  {
    number: "04",
    title: "Cara E-Commerce Website",
    summary:
      "A responsive clothing e-commerce website with login, home, about and product category pages.",
    points: [
      "Mobile-friendly layouts with Bootstrap 5",
      "Product category pages for browsing the catalogue",
      "Login, home and about pages in one consistent UI",
    ],
    stack: ["HTML5", "CSS3", "Bootstrap 5"],
    skills: ["Responsive Web Design", "Mobile-Friendly UI", "Bootstrap Layouts"],
    badge: "Responsive UI",
    // Add screenshot: /public/Image/projects/cara.png
    image: "",
  },
];

// --- Education ---

export const education: Education[] = [
  {
    institution: "Karpagam College of Engineering",
    location: "Coimbatore, India",
    degree: "Master of Computer Applications",
    period: "2023 – 2025",
  },
  {
    institution: "Sri Ramakrishna College of Arts & Science",
    location: "Coimbatore, India",
    degree: "Bachelor of Science in Computer Science",
    period: "2020 – 2023",
  },
];

// --- Certifications ---

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: SQL AI Developer Associate",
    issuer: "Microsoft",
    date: "Earned Oct 3, 2026",
    credentialId: "ED1F8DD34F1CC091",
    certificationNo: "C1XAE6-9A5FB3",
    isFlagship: true,
  },
  {
    title: "Artificial Intelligence Specialization",
    issuer: "IBM",
    description:
      "Completed as part of B.Sc. Computer Science in association with IBM.",
    registrationNo: "KA2D23061543/03",
    tools: ["Cognos BI", "Cognos Insight", "IBM SPSS", "Watson"],
  },
  {
    title: "Full Stack Web Development Certification",
    issuer: "Edureka",
    credentialId: "BKG3SJ8NY",
    date: "Completed Nov 18, 2025",
    description: "Full-stack web application development.",
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "Training Provider",
    description: "Completed 100 hours of training.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive Layouts",
      "Mobile-Friendly Web Development",
    ],
  },
];

// --- Contact ---

export const contactInfo: ContactInfo = {
  email: "avinkumarsubburam09@gmail.com",
  phone: "+91 93453 06018",
  location: "Coimbatore, Tamil Nadu, India",
  portfolio: "https://avinkumar.vercel.app/",
  linkedin: "https://www.linkedin.com/in/avinkumarsubburam-s",
};

export const contactSection = {
  eyebrow: "07 / Contact",
  heading: "Let's build something meaningful.",
  description:
    "I'm open to Software Developer, Full Stack Developer, and .NET opportunities.",
};
