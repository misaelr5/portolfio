import type { Locale } from "@/lib/i18n";

const groups = {
  en: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Astro",
        "Tailwind CSS",
        "HTML & CSS",
      ],
      learning: [],
    },
    {
      title: "Backend & APIs",
      items: [
        "Node.js",
        "REST APIs",
        "API Integration",
        "Backend Architecture",
        "Server-Side Logic",
      ],
      learning: ["Authentication", "Authorization"],
    },
    {
      title: "Databases & Data",
      items: ["PostgreSQL", "SQL", "Database Modeling", "Python"],
      learning: ["Supabase", "Row Level Security"],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "Cloudflare",
        "Cloudflare DNS",
        "Vercel",
        "Git & GitHub",
        "Production Deployment",
        "Domain Configuration",
      ],
      learning: ["Cloudflare Workers", "CI/CD Fundamentals"],
    },
    {
      title: "Cybersecurity",
      items: ["WordPress Remediation", "Security Hardening"],
      learning: [
        "Web Application Security",
        "Secure Coding",
        "Vulnerability Assessment",
        "OSINT",
        "OWASP Top 10",
        "Access Control",
      ],
    },
    {
      title: "Additional",
      items: ["PHP", "Laravel", "WordPress", "Automation"],
      learning: [],
    },
  ],
  es: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Astro",
        "Tailwind CSS",
        "HTML y CSS",
      ],
      learning: [],
    },
    {
      title: "Backend y APIs",
      items: [
        "Node.js",
        "APIs REST",
        "Integración de APIs",
        "Arquitectura backend",
        "Lógica del servidor",
      ],
      learning: ["Autenticación", "Autorización"],
    },
    {
      title: "Bases de datos y datos",
      items: ["PostgreSQL", "SQL", "Modelado de bases de datos", "Python"],
      learning: ["Supabase", "Row Level Security"],
    },
    {
      title: "Cloud y DevOps",
      items: [
        "Cloudflare",
        "Cloudflare DNS",
        "Vercel",
        "Git y GitHub",
        "Despliegues en producción",
        "Configuración de dominios",
      ],
      learning: ["Cloudflare Workers", "Fundamentos de CI/CD"],
    },
    {
      title: "Ciberseguridad",
      items: ["Remediación WordPress", "Hardening"],
      learning: [
        "Seguridad de aplicaciones web",
        "Código seguro",
        "Evaluación de vulnerabilidades",
        "OSINT",
        "OWASP Top 10",
        "Control de acceso",
      ],
    },
    {
      title: "Conocimientos adicionales",
      items: ["PHP", "Laravel", "WordPress", "Automatización"],
      learning: [],
    },
  ],
};

export const professionalContent = {
  en: {
    stack: {
      label: "Technologies",
      applied: "Applied experience",
      learning: "Developing knowledge",
      note: "Applied experience reflects client work and personal or academic projects. Developing knowledge identifies areas of ongoing study, without implying professional delivery.",
      groups: groups.en,
    },
    agency: {
      label: "Building Reac Studio",
      category: "Software Development & Digital Marketing Agency",
      role: "Co-Founder & Full-Stack Developer",
      description:
        "Reac Studio is a software development and digital marketing agency based in Córdoba, Argentina. We help businesses modernize their digital presence, streamline operations and build technology-driven solutions through custom software, web development, digital marketing and automation.",
      contributionLabel: "My contribution",
      contribution:
        "I work with clients on requirements and technical communication, design solutions and application architecture, develop Full Stack websites and integrations, configure infrastructure and domains, and handle production deployments, performance, application security and ongoing maintenance. I collaborate with the marketing team on the technical side of projects.",
      servicesLabel: "Agency services",
      note: "These are the agency's commercial service areas, not a list of projects delivered or marketing activities performed by me individually.",
      services: [
        {
          title: "Software Development",
          items: [
            "Custom Web Applications",
            "Internal Management Systems",
            "CRM Solutions",
            "Business Dashboards",
            "Database-Driven Applications",
            "API Integrations",
          ],
        },
        {
          title: "Web Development",
          items: [
            "Corporate Websites",
            "Landing Pages",
            "Responsive Websites",
            "Technical SEO",
            "Performance Optimization",
            "Maintenance",
          ],
        },
        {
          title: "Digital Marketing",
          items: [
            "Digital Strategy",
            "Google Ads",
            "Meta Ads",
            "Campaign Landing Pages",
            "Conversion Optimization",
            "Analytics and Measurement",
          ],
        },
        {
          title: "Automation",
          items: [
            "Business Process Automation",
            "Workflow Integration",
            "AI-Assisted Automation",
            "Systems Integration",
          ],
        },
        {
          title: "Cybersecurity",
          items: [
            "Web Application Security",
            "Security Audits",
            "Vulnerability Assessment",
            "Security Hardening",
            "OSINT and Attack Surface Analysis",
            "Authorized Penetration Testing Services",
          ],
        },
      ],
      visit: "Visit Agency",
      caseStudy: "Explore the website case study",
    },
    security: {
      label: "Security & Engineering",
      title: "Cybersecurity & Digital Investigations",
      description:
        "I'm particularly interested in cybersecurity, open-source intelligence (OSINT), digital investigations and data-driven analysis. I aim to combine my software engineering background with investigative methodologies, information analysis and security research.",
      note: "Ongoing learning and engineering interests. The WordPress case below describes my documented applied work; this section does not imply certifications or completed penetration tests.",
      topics: [
        "Application Security",
        "Authentication & Authorization",
        "Vulnerability Assessment",
        "Secure Coding",
        "Security Hardening",
        "OSINT",
        "Access Control",
      ],
      cta: "Read the WordPress security case",
    },
    about:
      "Alongside client work as a co-founder of Reac Studio, I keep learning independently and building open-source projects. Self-directed study and hands-on experimentation help me develop my engineering judgment and explore new technical problems.",
  },
  es: {
    stack: {
      label: "Tecnologías",
      applied: "Experiencia aplicada",
      learning: "En formación",
      note: "La experiencia aplicada incluye trabajos para clientes y proyectos personales o académicos. Las áreas en formación corresponden al aprendizaje continuo y no implican entregas profesionales.",
      groups: groups.es,
    },
    agency: {
      label: "Construyendo Reac Studio",
      category: "Agencia de desarrollo de software y marketing digital",
      role: "Cofundador y desarrollador Full Stack",
      description:
        "Reac Studio es una agencia de desarrollo de software y marketing digital con sede en Córdoba, Argentina. Ayudamos a empresas y profesionales a fortalecer su presencia digital, optimizar procesos y desarrollar soluciones tecnológicas mediante software a medida, desarrollo web, marketing digital y automatizaciones.",
      contributionLabel: "Mi contribución",
      contribution:
        "Trabajo con clientes en el análisis de requerimientos y la comunicación técnica. Diseño soluciones y arquitectura de aplicaciones, desarrollo sitios Full Stack e integraciones, configuro infraestructura y dominios, y me ocupo de despliegues, rendimiento, seguridad y mantenimiento. Colaboro con el equipo de marketing desde el área técnica de los proyectos.",
      servicesLabel: "Servicios de la agencia",
      note: "Estas son áreas de servicios comerciales de la agencia; no representan una lista de proyectos entregados ni actividades de marketing realizadas individualmente por mí.",
      services: [
        {
          title: "Desarrollo de software",
          items: [
            "Aplicaciones web a medida",
            "Sistemas de gestión interna",
            "Soluciones CRM",
            "Paneles de negocio",
            "Aplicaciones con bases de datos",
            "Integraciones de APIs",
          ],
        },
        {
          title: "Desarrollo web",
          items: [
            "Sitios corporativos",
            "Landing pages",
            "Sitios responsive",
            "SEO técnico",
            "Optimización de rendimiento",
            "Mantenimiento",
          ],
        },
        {
          title: "Marketing digital",
          items: [
            "Estrategia digital",
            "Google Ads",
            "Meta Ads",
            "Landing pages para campañas",
            "Optimización de conversión",
            "Analítica y medición",
          ],
        },
        {
          title: "Automatización",
          items: [
            "Automatización de procesos",
            "Integración de flujos de trabajo",
            "Automatización asistida por IA",
            "Integración de sistemas",
          ],
        },
        {
          title: "Ciberseguridad",
          items: [
            "Seguridad de aplicaciones web",
            "Auditorías de seguridad",
            "Evaluación de vulnerabilidades",
            "Hardening",
            "OSINT y análisis de superficie de ataque",
            "Pentesting con autorización",
          ],
        },
      ],
      visit: "Visitar agencia",
      caseStudy: "Conocer el caso del sitio web",
    },
    security: {
      label: "Seguridad e ingeniería",
      title: "Ciberseguridad e investigación digital",
      description:
        "Me interesan especialmente la ciberseguridad, la inteligencia de fuentes abiertas (OSINT), la investigación digital y el análisis de datos. Busco combinar mis conocimientos de ingeniería de software con metodologías de investigación, análisis de información e investigación en seguridad.",
      note: "Intereses técnicos y formación continua. El caso de WordPress describe mi experiencia aplicada documentada; esta sección no implica certificaciones ni pentests realizados.",
      topics: [
        "Seguridad de aplicaciones",
        "Autenticación y autorización",
        "Evaluación de vulnerabilidades",
        "Código seguro",
        "Hardening",
        "OSINT",
        "Control de acceso",
      ],
      cta: "Ver el caso de seguridad WordPress",
    },
    about:
      "Además del trabajo con empresas como cofundador de Reac Studio, mantengo una formación autodidacta constante y desarrollo proyectos de código abierto. El estudio independiente y la experimentación práctica me ayudan a mejorar mi criterio de ingeniería y explorar nuevos problemas técnicos.",
  },
} satisfies Record<Locale, unknown>;
