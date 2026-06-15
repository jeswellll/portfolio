export const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export interface HeroInfo {
  name: string;
  title: string;
  subHeadline: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  resumePdfPath: string;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  sortDate: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  dates: string;
  sortDate: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  imagePath?: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  category: "AI & Analytics" | "Product & Strategy" | "Automation";
  coreMetrics: string[];
  technicalStack: string[];
  links: {
    label: string;
    url: string;
  }[];
  imagePath?: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  icon: string;
  date: string;
}

export interface Leadership {
  role: string;
  organization: string;
  dates: string;
  bullets: string[];
}

export const heroInfo: HeroInfo = {
  name: "Jeswell Mathew",
  title: "Technical Product Manager & Business Strategist",
  subHeadline: "Professional software developer and technology management graduate student with ~2 years of industry experience bridging the gap between technical execution and strategic business outcomes. Specialized in Technical Product Management, Business Strategy, and AI Transformation.",
  socialLinks: {
    github: "https://github.com/jeswellll",
    linkedin: "https://www.linkedin.com/in/jeswellmathew/",
    email: "jeswellmathew@gmail.com",
  },
  resumePdfPath: "/resume.pdf",
};

export const experiences: Experience[] = [
  {
    company: "University of Illinois Urbana-Champaign",
    role: "Teaching Assistant - Business Practicum",
    dates: "Jan 2026 – Present",
    sortDate: "2026-01",
    startDate: "2026-01",
    endDate: "Present",
    bullets: [
      "Strategic Partnerships (Bosch): Directed the technical execution and project scope for a corporate partnership, prototyping an automated issue-tracking portal using RPA and APIs to streamline operational workflows.",
      "Data Strategy (AWG): Conducted complex market analysis on sales data using Python to map competitive pricing responses, delivering actionable intelligence frameworks to senior leadership for pricing strategy optimization.",
      "Consulting Mentorship: Partnered with faculty to mentor student consulting teams on navigating unstructured business problems, bridging the gap between technical implementation and strategic project execution.",
    ],
  },
  {
    company: "MRO Corp",
    role: "Software Engineering Analyst",
    dates: "Aug 2023 – Aug 2025",
    sortDate: "2023-08",
    startDate: "2023-08",
    endDate: "2025-08",
    bullets: [
      "Release Management: Orchestrated CI/CD pipeline strategy in Azure DevOps, accelerating deployment frequency by 70% and ensuring 99.9% reliability for critical enterprise healthcare products.",
      "Agile Transformation: Led cross-functional team retrospectives and implemented Scrum process improvements, reducing sprint carry-over by 70% and significantly enhancing delivery predictability and sprint velocity.",
      "System Optimization: Directed the architectural optimization of 5+ microservices, achieving a 40% reduction in data retrieval latency to directly improve the user experience and operational efficiency of clinical platforms.",
      "Stakeholder Alignment: Partnered with business stakeholders to translate clinical requirements into actionable UI/UX strategies for an Angular-based frontend, supporting the daily workflows of 300+ healthcare professionals.",
      "Recognition: Awarded the 'Extreme Ownership Award' for driving proactive solutions and rapidly translating complex technical challenges into strategic business outcomes.",
    ],
  },
  {
    company: "Spinebiz Services",
    role: "Intern – Automation and Datamation",
    dates: "May 2022 – July 2022",
    sortDate: "2022-05",
    startDate: "2022-05",
    endDate: "2022-07",
    bullets: [
      "Operational Efficiency: Identified critical workflow bottlenecks in visa processing and architected a Power Automate solution, eliminating 12 hours of manual data entry per week.",
      "Product Rollout: Led the end-to-end design and rollout of a Zoho Creator capacity management application, defining business logic and driving successful internal adoption across the enterprise.",
    ],
  },
];

export const educations: Education[] = [
  {
    institution: "University of Illinois at Urbana-Champaign",
    degree: "Master of Science in Technology Management (MSTM)",
    location: "Champaign, IL",
    dates: "Aug 2025 – Aug 2026 (Expected)",
    sortDate: "2025-08",
    startDate: "2025-08",
    endDate: "2026-08",
    bullets: [
      "Gies College of Business | GPA: 3.92/4.00",
      "Relevant Coursework: Analytics for Management Decision Making, Big Data Analytics, Information Systems",
      "Highlights: First Place Winner at Gies AI for Impact Challenge (April 2026), Graduate Teaching Assistant at Gies College of Business (Feb 2026 - May 2026)"
    ],
    imagePath: "/images/education/uiuc-ms.webp"
  },
  {
    institution: "National Institute of Technology, Calicut",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    location: "Calicut, India",
    dates: "Aug 2019 – May 2023",
    sortDate: "2019-08",
    startDate: "2019-08",
    endDate: "2023-05",
    bullets: [
      "Graduated First Class"
    ],
    imagePath: "/images/education/nitc-btech.jpg"
  }
];

export const projects: Project[] = [
  {
    title: "Magelli Scout Prospect Intelligence System",
    tagline: "AI-Powered Prospect Intelligence System (AI for Impact Winner)",
    description: "Developed an end-to-end prospect intelligence system designed to automate manual enterprise scouting workflows. Architected an AI-driven multi-agent system, evaluating market viability and defining the operational business case for automating data ingestion to accelerate enterprise go-to-market workflows.",
    category: "AI & Analytics",
    coreMetrics: [
      "Secured 1st place out of 22 competing teams at the Gies AI for Impact Challenge (April 2026).",
      "Automated 90% of manual prospecting workflows for research teams.",
    ],
    technicalStack: [
      "Copilot Studio", "Power Automate", "Power BI", "AI Agents", "GTM Strategy"
    ],
    links: [
      { label: "Live Demo", url: "https://www.youtube.com/watch?v=LXDRdg8BAf0" },
    ],
    imagePath: "/images/projects/magelli-scout.webp"
  },
  {
    title: "Zolve (ZKart) Product Strategy Case Study",
    tagline: "E-Commerce User Journey Analysis & GTM Strategy",
    description: "Conducted an end-to-end product analysis on the ZKart e-commerce marketplace, mapping the user journey to identify technical friction points (routing, infinite scroll bugs) and conversion bottlenecks. Developed comprehensive retention and GTM strategies designed to boost daily order volumes and drive credit card utilization within a 30-day target window.",
    category: "Product & Strategy",
    coreMetrics: [
      "Mapped end-to-end user journey to isolate critical conversion friction points.",
      "Designed GTM and credit card utilization models targeting 30-day adoption."
    ],
    technicalStack: [
      "Product Strategy", "User Journey Mapping", "GTM Models", "Market Analysis", "Conversion Funnel Optimization"
    ],
    links: [],
    imagePath: "/images/projects/zolve-case-study.jpg"
  },
  {
    title: "ILL 101 Campus Workspace Dashboard",
    tagline: "Figma Prototyped Campus Workspace & Resource Platform",
    description: "Led the product design and UX prototyping in Figma for an Information Systems campus workspace application (BADM 555 Final Project), mapping the technical infrastructure to operationalize resource management.",
    category: "Product & Strategy",
    coreMetrics: [
      "Designed UX mockups and Figma prototypes for campus workspace applications.",
      "Mapped the technical infrastructure to operationalize resource management."
    ],
    technicalStack: [
      "Figma Prototyping", "UX Design", "System Architecture", "Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/jeswellll/v0-ill-101" },
      { label: "Live Demo", url: "https://v0-ill-101.vercel.app/" },
      { label: "LinkedIn Post", url: "https://www.linkedin.com/posts/jeswellmathew_productmanagement-systemdevelopment-informationarchitecture-ugcPost-7456822428166434816-lR0E/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACz4Ol4BTOWQceSWU2mX_IUB12N7zDuyAi8" },
    ],
    imagePath: "/images/projects/uiuc-dashboard.jpg"
  },
  {
    title: "F1 Autonomous Predictive Analytics Pipeline",
    tagline: "Autonomous Predictive Analytics Pipeline using RAG & Multi-Agents",
    description: "Designed the system architecture for an autonomous predictive model utilizing RAG pipelines and automated data orchestration, aligning notion outputs with rigid time constraints to optimize strategic decision-making.",
    category: "AI & Analytics",
    coreMetrics: [
      "Designed system architecture utilizing RAG pipelines and CrewAI agents.",
      "Aligned Notion outputs with rigid time constraints to optimize decision-making."
    ],
    technicalStack: [
      "Python", "RAG (LlamaIndex, ChromaDB)", "Multi-Agents (CrewAI)", "LLMs (Gemini)", "FastF1 API", "Notion", "APIs"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/jeswellll/f1-telemetry" },
    ],
    imagePath: "/images/projects/f1-telemetry.png"
  },
  {
    title: "AWG Price Elasticity & Gap Analysis",
    tagline: "Data-Driven Pricing Engine for Wholesale Distribution",
    description: "Analyzed complex sales data to map competitive pricing responses for Associated Wholesale Grocers (AWG), translating raw data into actionable enterprise pricing strategies.",
    category: "AI & Analytics",
    coreMetrics: [
      "Processed and analyzed 156,672 historical sales records.",
      "Delivered actionable pricing models used to adjust competitive pricing strategies."
    ],
    technicalStack: [
      "Python", "SQL", "Business Intelligence", "Data Analysis", "Data Visualization"
    ],
    links: [
      { label: "Colab Notebook", url: "https://colab.research.google.com/drive/15eoh1rK4zRTruJCdfVhuT1ELjyXqNQt7?usp=sharing" }
    ],
    imagePath: "/images/projects/awg-pricing.png"
  },
  {
    title: "Bosch Automated Issue-Tracking Portal",
    tagline: "RPA & API Integrated Project Management Platform",
    description: "Prototyped an automated issue-tracking portal integrating Robotic Process Automation (RPA) and APIs for a corporate partnership with Bosch. Managed project scope and technical deliverables for cross-functional corporate integration.",
    category: "Automation",
    coreMetrics: [
      "Reduced manual issue logging time significantly by integrating RPA.",
      "Successfully managed technical scope and deliverables."
    ],
    technicalStack: [
      "Power Automate", "RPA", "APIs", "HTML", "CSS"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/poorva120900/Bosch" },
      { label: "Solution Demo", url: ".context/bosch_demo.html" }
    ],
    imagePath: "/images/projects/bosch-portal.webp"
  },
];

export const skills: Skills = {
  "Business & Strategy": [
    "Product Management", "Go-to-Market (GTM) Strategy", "Market Analysis",
    "Cross-Functional Leadership", "Agile/Scrum Methodologies", "SDLC Management",
    "Roadmap Planning", "Business Intelligence"
  ],
  "Technical Literacy": [
    "Agentic AI", "Multi-Agent Systems", "RAG Pipelines",
    "Cloud Infrastructure (Azure, AWS)", "CI/CD Pipelines", "Microservices Architecture",
    "Python", "SQL", "Full-Stack Architecture (Angular, React, Next.js, .NET)"
  ],
  "Languages": [
    "C", "C++", "C#", "Python", "JavaScript", "TypeScript", "PHP"
  ]
};

export const achievements: Achievement[] = [
  {
    title: "1st Place Winner",
    organization: "Gies AI for Impact Challenge",
    description: "Secured first place out of 22 competing teams (April 2026) for engineering Magelli Scout, an automated prospect intelligence platform.",
    icon: "🏆",
    date: "Apr 2026",
  },
  {
    title: "Extreme Ownership Award",
    organization: "MRO Corp",
    description: "Awarded for proactive problem-solving, rapid onboarding in complex healthcare product environments, and microservice optimization.",
    icon: "🔑",
    date: "2024",
  },
  {
    title: "First Class Honors",
    organization: "NIT Calicut",
    description: "Graduated with First Class honors in Computer Science and Engineering, demonstrating consistent academic excellence.",
    icon: "🎓",
    date: "May 2023",
  },
];

export const leaderships: Leadership[] = [
  {
    role: "Program Committee & Joint Coordinator",
    organization: "Ragam '21/'22 (Cultural Fest)",
    dates: "2021 - 2022",
    bullets: [
      "Event Operations & Team Leadership: Directed logistics and operational planning for a large-scale event with 30,000+ attendees, leading a cross-functional team of 40 volunteers through task delegation and real-time problem-solving to ensure seamless execution across multiple venues.",
    ],
  },
  {
    role: "Joint Secretary",
    organization: "NITC Industrial and Planning Forum",
    dates: "2021 - 2023",
    bullets: [
      "Strategic Partnerships: Co-hosted NITCMUN in collaboration with the London School of Economics, managing stakeholder relationships and coordinating with delegates from 50+ institutions.",
    ],
  },
];
