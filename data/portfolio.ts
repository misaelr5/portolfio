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
        title: "WordPress Malware Remediation & Security Hardening",
        context:
          "A real compromised WordPress environment requiring investigation, cleanup and recovery while preserving legitimate data.",
        solution:
          "Backed up files and the database, analyzed indicators of compromise, detected and removed webshells and injected code, replaced the WordPress core with a verified installation, and applied hardening measures to reduce the risk of persistence or reinfection.",
        role: "Cybersecurity & WordPress Security",
        technicalDetails: [
          "File and database backups",
          "Indicators of compromise, webshells and injected code",
          "Verified core replacement and security hardening",
        ],
      },
      {
        title: "Más Servicios",
        context:
          "Commercial website for an integrated services center.",
        solution:
          "A self-managed website with services, branches, maps, FAQ, forms and WhatsApp access.",
        role: "Web Developer",
        technicalDetails: [
          "WordPress",
          "Web design",
          "Content-management training",
        ],
      },
      {
        title: "Reac Studio",
        context:
          "Commercial website and digital platform for Reac Studio.",
        solution:
          "A production web presence designed to communicate the studio's services and create a direct path to contact.",
        role: "Co-Founder & Full-Stack Developer",
        technicalDetails: ["Website development", "Contact journey"],
        links: [
          {
            label: "Live site",
            href: "https://reacstudio.com/",
          },
        ],
      },
      {
        title: "Modular Admin Panel",
        context:
          "Commercial internal system designed to organize operations through modular workflows.",
        solution:
          "A modular structure with access control, forms and operational reports.",
        role: "Developer",
        technicalDetails: [
          "Custom internal system",
          "Final technologies and scope pending confirmation",
        ],
      },
      {
        title: "Misael Ledesma Portfolio",
        context:
          "Personal full-stack developer portfolio that brings together professional information, projects and contact options.",
        solution:
          "A personal website with a professional introduction, projects and contact links in one place.",
        role: "Full-Stack Developer",
        technicalDetails: ["Website design", "Website development"],
        links: [
          {
            label: "Live site",
            href: "https://misaelr5.vercel.app/",
          },
        ],
      },
      {
        title: "Commercial CRM",
        context:
          "Academic management system for centralizing customer information and commercial follow-up.",
        solution:
          "A central dashboard for managing customers, projects, leads, payments and notes.",
        role: "Developer",
        technicalDetails: [
          "Web management system",
          "Final technologies and scope pending confirmation",
        ],
      },
      {
        title: "Fashion E-commerce",
        context:
          "Academic online store designed to showcase and sell clothing products.",
        solution:
          "A catalog, product pages and a shopping-cart flow prepared for payment integration.",
        role: "Developer",
        technicalDetails: [
          "Online store",
          "Final technologies and scope pending confirmation",
        ],
      },
      {
        title: "Professional Landing Page",
        context:
          "Academic landing page designed to present professional services and make contact easier.",
        solution:
          "A responsive page with a commercial structure, direct contact and a focus on conversion.",
        role: "Developer",
        technicalDetails: [
          "Landing page",
          "Final technologies and scope pending confirmation",
        ],
      },
      {
        title: "Tax Fraud Detection",
        context:
          "Academic data-science project for analyzing tax declarations.",
        solution:
          "A classification model to analyze patterns that may indicate declarations at risk of fraud.",
        role: "Developer",
        technicalDetails: ["Python", "Machine Learning"],
      },
      {
        title: "Pomodoro Focus App",
        context:
          "Personal productivity application focused on concentration and distraction-free work or study sessions.",
        solution:
          "An app with focus modes, session tasks, history and exportable statistics.",
        role: "Developer",
        technicalDetails: [
          "Productivity application",
          "Final technologies pending confirmation",
        ],
      },
      {
        title: "Portfolio Website",
        context:
          "Personal website for bringing services, work and contact options into one digital presence.",
        solution:
          "A portfolio with a services catalog, selected work and a contact form.",
        role: "Developer",
        technicalDetails: [
          "Personal website",
          "Final technologies and scope pending confirmation",
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
        title: "Remediación de malware y hardening de WordPress",
        context:
          "Un entorno real de WordPress comprometido que requería investigación, limpieza y recuperación, preservando los datos legítimos.",
        solution:
          "Realicé backups de archivos y base de datos, analicé indicadores de compromiso, detecté y eliminé webshells y código inyectado, reemplacé el core de WordPress por una instalación verificada y apliqué medidas de hardening para reducir el riesgo de persistencia o reinfección.",
        role: "Ciberseguridad y seguridad WordPress",
        technicalDetails: [
          "Backups de archivos y base de datos",
          "Indicadores de compromiso, webshells y código inyectado",
          "Reemplazo de core verificado y hardening de seguridad",
        ],
      },
      {
        title: "Más Servicios",
        context:
          "Sitio web comercial para un centro integral de servicios.",
        solution:
          "Un sitio autogestionable con servicios, sucursales, mapas, FAQ, formularios y acceso a WhatsApp.",
        role: "Desarrollador web",
        technicalDetails: [
          "WordPress",
          "Diseño web",
          "Capacitación de gestión",
        ],
      },
      {
        title: "Reac Studio",
        context:
          "Sitio web y plataforma digital comercial para Reac Studio.",
        solution:
          "Una presencia web en producción diseñada para comunicar los servicios del estudio y crear un camino directo al contacto.",
        role: "Cofundador y desarrollador Full-Stack",
        technicalDetails: ["Desarrollo web", "Flujo de contacto"],
        links: [
          {
            label: "Ver sitio",
            href: "https://reacstudio.com/",
          },
        ],
      },
      {
        title: "Panel Administrativo Modular",
        context:
          "Sistema interno comercial pensado para ordenar operaciones mediante flujos modulares.",
        solution:
          "Una estructura modular con control de acceso, formularios y reportes operativos.",
        role: "Desarrollador",
        technicalDetails: [
          "Sistema interno a medida",
          "Tecnologías y alcance final pendientes de confirmar",
        ],
      },
      {
        title: "Portfolio de Misael Ledesma",
        context:
          "Portfolio personal de desarrollador full-stack que reúne información profesional, proyectos y vías de contacto.",
        solution:
          "Un sitio personal con presentación profesional, proyectos y enlaces de contacto en un solo lugar.",
        role: "Desarrollador Full-Stack",
        technicalDetails: ["Diseño de sitio web", "Desarrollo de sitio web"],
        links: [
          {
            label: "Ver sitio",
            href: "https://misaelr5.vercel.app/",
          },
        ],
      },
      {
        title: "CRM Comercial",
        context:
          "Sistema académico de gestión para centralizar información de clientes y seguimiento comercial.",
        solution:
          "Un panel centralizado para gestionar clientes, proyectos, leads, pagos y notas.",
        role: "Desarrollador",
        technicalDetails: [
          "Sistema de gestión web",
          "Tecnologías y alcance final pendientes de confirmar",
        ],
      },
      {
        title: "E-commerce de Indumentaria",
        context:
          "Tienda online académica orientada a presentar y vender productos de indumentaria.",
        solution:
          "Un catálogo, fichas de producto y flujo de carrito preparado para integrar pagos.",
        role: "Desarrollador",
        technicalDetails: [
          "Tienda online",
          "Tecnologías y alcance final pendientes de confirmar",
        ],
      },
      {
        title: "Landing para Profesional",
        context:
          "Landing académica orientada a presentar servicios profesionales y facilitar el contacto.",
        solution:
          "Una página responsive con estructura comercial, contacto directo y foco en conversión.",
        role: "Desarrollador",
        technicalDetails: [
          "Landing page",
          "Tecnologías y alcance final pendientes de confirmar",
        ],
      },
      {
        title: "Detección de Fraude Fiscal",
        context:
          "Proyecto académico de ciencia de datos orientado al análisis de declaraciones impositivas.",
        solution:
          "Un modelo de clasificación para analizar patrones que pueden señalar declaraciones con riesgo de fraude.",
        role: "Desarrollador",
        technicalDetails: ["Python", "Machine Learning"],
      },
      {
        title: "App de Enfoque Pomodoro",
        context:
          "Aplicación personal de productividad enfocada en concentración y sesiones de trabajo o estudio sin distracciones.",
        solution:
          "Una aplicación con modos de enfoque, tareas por sesión, historial y estadísticas exportables.",
        role: "Desarrollador",
        technicalDetails: [
          "Aplicación de productividad",
          "Tecnologías finales pendientes de confirmar",
        ],
      },
      {
        title: "Portfolio Web",
        context:
          "Sitio personal para reunir servicios, trabajos y vías de contacto en una sola presencia digital.",
        solution:
          "Un portfolio con catálogo de servicios, trabajos seleccionados y formulario de contacto.",
        role: "Desarrollador",
        technicalDetails: [
          "Sitio personal",
          "Tecnologías y alcance final pendientes de confirmar",
        ],
      },
    ],
  },
} as const satisfies PortfolioContent;

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: englishContent,
  es: spanishContent,
};
