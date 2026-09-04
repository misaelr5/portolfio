import type { Locale } from "@/lib/i18n";

export type PortfolioContent = {
  meta: {
    title: string;
    description: string;
    locale: "en_US" | "es_AR";
  };
  accessibility: {
    skipToContent: string;
    backToTop: string;
    primaryLinks: string;
    socialLinks: string;
  };
  languageSwitcher: {
    label: string;
    switchTo: string;
  };
  emailControl: {
    copy: string;
    copied: string;
    copyAriaLabel: string;
    copiedAriaLabel: string;
  };
  profile: {
    role: string;
    availability: string;
    location: string;
    languages: string;
    emailLabel: string;
  };
  hero: {
    statement: string;
    supporting: string;
  };
  about: {
    label: string;
    paragraphs: readonly string[];
    cta: string;
  };
  stack: {
    label: string;
    groups: readonly {
      title: string;
      items: readonly string[];
    }[];
  };
  experience: {
    label: string;
    entries: readonly {
      organization: string;
      role: string;
      period: string;
      highlights: readonly string[];
    }[];
  };
  projects: {
    label: string;
    fieldLabels: {
      context: string;
      solution: string;
      role: string;
      selectedDetails: string;
    };
    entries: readonly {
      title: string;
      context: string;
      solution: string;
      role?: string;
      technicalDetails?: readonly string[];
      image?: {
        src: string;
        alt: string;
      };
      links?: readonly {
        label: string;
        href: string;
      }[];
    }[];
  };
};

const englishContent = {
  meta: {
    title: "Misael Ledesma — Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer based in Córdoba, Argentina, building modern web applications, business systems and digital products.",
    locale: "en_US",
  },
  accessibility: {
    skipToContent: "Skip to content",
    backToTop: "Back to top",
    primaryLinks: "Primary links",
    socialLinks: "Social and contact links",
  },
  languageSwitcher: {
    label: "Language",
    switchTo: "Switch to Spanish",
  },
  emailControl: {
    copy: "Copy",
    copied: "Copied",
    copyAriaLabel: "Copy email address",
    copiedAriaLabel: "Email address copied",
  },
  profile: {
    role: "Full-Stack Web Developer",
    availability: "Open to full-time, remote and freelance work",
    location: "Córdoba, Argentina",
    languages: "Spanish, English",
    emailLabel: "Email",
  },
  hero: {
    statement: "I build modern full-stack web products from idea to production.",
    supporting:
      "Focused on building reliable digital products and business solutions. Open to remote and freelance opportunities.",
  },
  about: {
    label: "About",
    paragraphs: [
      "I'm a Full-Stack Web Developer focused on building modern, reliable and scalable web applications. I combine frontend development, backend logic and databases to build complete digital products.",
      "I've worked on real-world projects including custom CRM systems, business management tools, real-time currency solutions and production websites. I care about clean architecture, maintainable code, performance, security and creating software that solves actual business problems — not just projects made to complete a course.",
      "I'm based in Córdoba, Argentina, and open to remote, full-time, contract and freelance opportunities. I'm especially interested in teams where I can keep growing as an engineer, take ownership of real products and contribute from development to production.",
    ],
    cta: "Explore projects",
  },
  stack: {
    label: "Stack",
    groups: [
      {
        title: "Frontend",
        items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Backend & Data",
        items: ["Node.js", "PostgreSQL", "SQL", "REST APIs", "Authentication"],
      },
      {
        title: "Development & Deployment",
        items: [
          "Git / GitHub",
          "Vercel",
          "Responsive Design",
          "Web Performance",
          "SEO",
        ],
      },
      {
        title: "Additional Experience",
        items: [
          "Python",
          "PHP / Laravel",
          "WordPress / WooCommerce",
          "Database Modeling",
          "Cybersecurity Fundamentals",
        ],
      },
    ],
  },
  experience: {
    label: "Experience",
    entries: [
      {
        organization: "Reac Studio",
        role: "Full-Stack Developer & Co-Founder",
        period: "Aug 2026 — Present",
        highlights: [
          "Build web solutions and custom systems for businesses, covering frontend, backend, databases and integrations.",
          "Transform business needs and operational processes into functional digital solutions aimed at reducing manual work and improving organization.",
          "Design and implement websites, dashboards, management systems and process automations.",
          "Participate across the product lifecycle, from requirements and architecture to development, deployment and continuous improvement.",
        ],
      },
      {
        organization: "Freelance",
        role: "Full-Stack Web Developer",
        period: "2026 — Present",
        highlights: [
          "Built and maintained production websites and custom web solutions for real businesses.",
          "Developed business tools including real-time currency solutions, customer management systems and operational dashboards.",
          "Integrated APIs, databases, authentication and business logic into responsive web interfaces.",
          "Worked across development, deployment, debugging, security and ongoing technical improvements.",
        ],
      },
    ],
  },
  projects: {
    label: "Selected Projects",
    fieldLabels: {
      context: "Context",
      solution: "Solution",
      role: "Role",
      selectedDetails: "Selected details",
    },
    entries: [
      {
        title: "Business Management System / CRM",
        context:
          "A custom operational system designed around real business workflows.",
        solution:
          "A focused management and customer relationship solution shaped around the business process it supports.",
      },
      {
        title: "Real-Time Currency Solution",
        context:
          "A currency conversion and quotation solution integrated into a real business website.",
        solution:
          "A real-time experience that brings current currency information into the website's customer journey.",
      },
      {
        title: "Reac Studio",
        context: "Website and digital platform for Reac Studio.",
        solution:
          "A production web presence designed to communicate the studio's services and create a direct path to contact.",
        role: "Co-Founder & Full-Stack Developer",
        links: [
          {
            label: "Live site",
            href: "https://reacs-studio.vercel.app/",
          },
        ],
      },
    ],
  },
} as const satisfies PortfolioContent;

const spanishContent = {
  meta: {
    title: "Misael Ledesma — Desarrollador web Full-Stack",
    description:
      "Desarrollador web Full-Stack en Córdoba, Argentina, especializado en aplicaciones web modernas, sistemas de gestión y productos digitales.",
    locale: "es_AR",
  },
  accessibility: {
    skipToContent: "Saltar al contenido",
    backToTop: "Volver arriba",
    primaryLinks: "Enlaces principales",
    socialLinks: "Enlaces sociales y de contacto",
  },
  languageSwitcher: {
    label: "Idioma",
    switchTo: "Cambiar a inglés",
  },
  emailControl: {
    copy: "Copiar",
    copied: "Copiado",
    copyAriaLabel: "Copiar dirección de email",
    copiedAriaLabel: "Dirección de email copiada",
  },
  profile: {
    role: "Desarrollador web Full-Stack",
    availability: "Disponible para trabajo full-time, remoto y freelance",
    location: "Córdoba, Argentina",
    languages: "Español, Inglés",
    emailLabel: "Correo",
  },
  hero: {
    statement:
      "Construyo productos web full-stack modernos, desde la idea hasta producción.",
    supporting:
      "Enfocado en crear productos digitales confiables y soluciones para negocios. Disponible para oportunidades remotas y freelance.",
  },
  about: {
    label: "Sobre mí",
    paragraphs: [
      "Soy desarrollador web Full-Stack, enfocado en crear aplicaciones web modernas, confiables y escalables. Combino desarrollo frontend, lógica de backend y bases de datos para construir productos digitales completos.",
      "Trabajé en proyectos reales que incluyen sistemas CRM personalizados, herramientas de gestión empresarial, soluciones de cotización de monedas en tiempo real y sitios web en producción. Me importan la arquitectura limpia, el código mantenible, el rendimiento, la seguridad y crear software que resuelva problemas reales de negocio, no solamente proyectos para completar un curso.",
      "Vivo en Córdoba, Argentina, y estoy disponible para oportunidades remotas, full-time, por contrato y freelance. Me interesan especialmente los equipos donde pueda seguir creciendo como ingeniero, asumir responsabilidad sobre productos reales y contribuir desde el desarrollo hasta producción.",
    ],
    cta: "Ver proyectos",
  },
  stack: {
    label: "Tecnologías",
    groups: [
      {
        title: "Frontend",
        items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Backend y datos",
        items: ["Node.js", "PostgreSQL", "SQL", "APIs REST", "Autenticación"],
      },
      {
        title: "Desarrollo y despliegue",
        items: [
          "Git / GitHub",
          "Vercel",
          "Diseño responsive",
          "Rendimiento web",
          "SEO",
        ],
      },
      {
        title: "Experiencia adicional",
        items: [
          "Python",
          "PHP / Laravel",
          "WordPress / WooCommerce",
          "Modelado de bases de datos",
          "Fundamentos de ciberseguridad",
        ],
      },
    ],
  },
  experience: {
    label: "Experiencia",
    entries: [
      {
        organization: "Reac Studio",
        role: "Desarrollador Full-Stack y cofundador",
        period: "Ago 2026 — Actualidad",
        highlights: [
          "Desarrollo soluciones web y sistemas personalizados para empresas, cubriendo frontend, backend, bases de datos e integraciones.",
          "Transformo necesidades de negocio y procesos operativos en soluciones digitales funcionales orientadas a reducir trabajo manual y mejorar la organización.",
          "Diseño e implemento sitios web, paneles, sistemas de gestión y automatizaciones de procesos.",
          "Participo en todo el ciclo del producto: requerimientos, arquitectura, desarrollo, despliegue y mejora continua.",
        ],
      },
      {
        organization: "Freelance",
        role: "Desarrollador web Full-Stack",
        period: "2026 — Actualidad",
        highlights: [
          "Desarrollé y mantuve sitios web en producción y soluciones web personalizadas para negocios reales.",
          "Construí herramientas empresariales, incluyendo soluciones de cotización de monedas en tiempo real, sistemas de gestión de clientes y paneles operativos.",
          "Integré APIs, bases de datos, autenticación y lógica de negocio en interfaces web responsive.",
          "Trabajé en desarrollo, despliegue, depuración, seguridad y mejoras técnicas continuas.",
        ],
      },
    ],
  },
  projects: {
    label: "Proyectos seleccionados",
    fieldLabels: {
      context: "Contexto",
      solution: "Solución",
      role: "Rol",
      selectedDetails: "Detalles seleccionados",
    },
    entries: [
      {
        title: "Sistema de gestión empresarial / CRM",
        context:
          "Un sistema operativo personalizado, diseñado alrededor de flujos de trabajo reales de una empresa.",
        solution:
          "Una solución enfocada en la gestión y la relación con clientes, adaptada al proceso de negocio que acompaña.",
      },
      {
        title: "Solución de cotización de monedas en tiempo real",
        context:
          "Una solución de conversión y cotización de monedas integrada en el sitio web de un negocio real.",
        solution:
          "Una experiencia en tiempo real que incorpora información cambiaria actualizada al recorrido del cliente dentro del sitio.",
      },
      {
        title: "Reac Studio",
        context: "Sitio web y plataforma digital para Reac Studio.",
        solution:
          "Una presencia web en producción diseñada para comunicar los servicios del estudio y crear un camino directo al contacto.",
        role: "Cofundador y desarrollador Full-Stack",
        links: [
          {
            label: "Ver sitio",
            href: "https://reacs-studio.vercel.app/",
          },
        ],
      },
    ],
  },
} as const satisfies PortfolioContent;

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: englishContent,
  es: spanishContent,
};
