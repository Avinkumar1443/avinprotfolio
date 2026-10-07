// ============================================================
// Portfolio Data — All structured content for the portfolio
// Update this file to change any portfolio content.
// ============================================================

// --- Types ---

export interface NavLink {
  label: string;
  href: string;
}

export interface TechCategory {
  name: string;
  items: string[];
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
  tech: string[];
  role?: string;
  description: string[];
  highlights?: string[];
  metric?: { value: string; label: string };
  image: string;
  isFlagship?: boolean;
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
  statusLabel: "Available for Software Engineering Opportunities",
  headline: {
    greeting: "Hi, I'm Avinkumar.",
    roles: ["Software Developer", "& Full Stack Engineer."],
  },
  description:
    "I build scalable enterprise web applications, backend services, API-driven systems, and responsive user experiences using ASP.NET Core, React.js, Next.js, SQL Server, and PostgreSQL.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: {
    label: "Download Resume",
    href: "/resume/Avinkumar-Subburam-Resume.pdf",
  },
  techPills: ["ASP.NET Core", "React.js", "Next.js", "SQL Server", "PostgreSQL"],
};

// --- About ---

export const about = {
  eyebrow: "01 / About",
  heading: "Building reliable digital products from interface to database.",
  paragraphs: [
    "Software Developer with hands-on experience building enterprise web applications using React.js, Next.js, ASP.NET Core, REST APIs, SQL Server, and PostgreSQL.",
    "Experienced in frontend and backend development, API integration, database-driven workflows, debugging, and production support. Strong focus on clean code, application performance, responsive UI/UX, and maintainable software solutions.",
  ],
  cards: [
    {
      title: "Enterprise Development",
      description:
        "Building and maintaining large-scale enterprise applications used in real-world business environments.",
      icon: "Building2" as const,
    },
    {
      title: "Full Stack Engineering",
      description:
        "End-to-end development from responsive frontend interfaces to scalable backend services and databases.",
      icon: "Layers" as const,
    },
    {
      title: "Production Support",
      description:
        "Debugging, defect resolution, performance optimization, and deployment support across QA, UAT, and Production.",
      icon: "ShieldCheck" as const,
    },
  ],
};

// --- Technology Stack ---

export const techStack: TechCategory[] = [
  {
    name: "Languages",
    items: ["C#", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    name: "Frontend",
    items: ["React.js", "Next.js", "Bootstrap 5", "Responsive Web Design", "UI/UX"],
  },
  {
    name: "Backend",
    items: [
      "ASP.NET Core",
      "ASP.NET MVC Core",
      "ASP.NET Core Web API",
      "RESTful APIs",
      "Microservices",
    ],
  },
  {
    name: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    name: "Development Tools",
    items: [
      "Visual Studio",
      "Visual Studio Code",
      "SQL Server Management Studio (SSMS)",
      "Git",
    ],
  },
  {
    name: "Concepts",
    items: [
      "CRUD Operations",
      "REST API Integration",
      "Authentication",
      "Role-Based Access Control",
      "Database Design",
      "Query Optimization",
      "Debugging",
      "Performance Optimization",
    ],
  },
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
      "Develop and maintain enterprise web applications using React.js, ASP.NET Core, REST APIs, SQL Server, and PostgreSQL.",
      "Build responsive frontend components and integrate them with scalable backend services and APIs to support business workflows.",
      "Develop and maintain backend functionality using ASP.NET Core, including business logic, API endpoints, database operations, and application integrations.",
      "Work with SQL Server and PostgreSQL for CRUD operations, data retrieval, query optimization, and application data management.",
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
      "Developed an Admin Module using ASP.NET MVC Core to support application administration and CRUD operations.",
      "Integrated the application with SQL Server for structured data storage, retrieval, and database operations.",
      "Worked with ASP.NET MVC Core architecture, conditional logic, database connectivity, and backend application development.",
    ],
  },
];

// --- Projects ---

export const projects: Project[] = [
  {
    number: "01",
    title: "SMIL-e",
    subtitle: "EMC Lab Management System",
    tech: ["ASP.NET MVC Core", "SQL Server", "SSMS"],
    description: [
      "Contributed to SMIL-e, a large-scale enterprise laboratory management application used across Bosch operations in Coimbatore and Bengaluru.",
      "Developed and maintained application modules and business workflows using ASP.NET MVC Core, supporting laboratory and project management operations.",
      "Worked extensively with SQL Server and SQL Server Management Studio (SSMS) for data retrieval, CRUD operations, production data verification, and database-driven workflows.",
    ],
    highlights: [
      "Project processing and test-related modules",
      "Reporting and role-based functionality",
      "Email notifications and production issue resolution",
      "Debugging, defect fixes, and deployment support across QA, UAT, and Production environments",
    ],
    // Replace with actual screenshot: /public/images/projects/smile.png
    image: "/images/projects/smile.png",
    isFlagship: true,
  },
  {
    number: "02",
    title: "Enterprise CRM Solution",
    tech: ["Next.js", "ASP.NET Core Web API", "PostgreSQL"],
    role: "Core Feature Developer",
    description: [
      "Enterprise CRM platform supporting large-scale business operations, events, customer workflows, and payment processing.",
      "Developed application features using Next.js and ASP.NET Core Web API, including dynamic form workflows and frontend-backend integrations.",
      "Integrated secure payment functionality and worked with optimized PostgreSQL queries to improve scalability and application performance.",
    ],
    // Replace with actual screenshot: /public/images/projects/crm.png
    image: "/images/projects/crm.png",
  },
  {
    number: "03",
    title: "Marketing CMS Platform",
    tech: ["Next.js", "Strapi CMS", "REST APIs"],
    role: "Full Stack Developer",
    description: [
      "Modern marketing platform using Next.js and Strapi headless CMS.",
      "Built SEO-focused marketing pages and integrated REST APIs for real-time lead capture and application communication.",
    ],
    metric: { value: "60%", label: "Reduction in content deployment time" },
    // Replace with actual screenshot: /public/images/projects/cms.png
    image: "/images/projects/cms.png",
  },
  {
    number: "04",
    title: "Cara E-Commerce Website",
    tech: ["HTML5", "CSS3", "Bootstrap 5"],
    description: [
      "Responsive clothing-focused e-commerce website with login, home, about, and product category pages.",
      "Implemented mobile-friendly layouts using HTML5, CSS3, and Bootstrap 5.",
    ],
    // Replace with actual screenshot: /public/images/projects/cara.png
    image: "/images/projects/cara.png",
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
