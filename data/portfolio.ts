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
    applied?: string;
    learning?: string;
    note?: string;
    groups: readonly {
      title: string;
      items: readonly string[];
      learning?: readonly string[];
    }[];
  };
  experience: {
    label: string;
    entries: readonly {
      projectId: string;
      organization: string;
      role: string;
      period?: string;
      links?: readonly { label: string; href: string }[];
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
      id: string;
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

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    meta: {
      title: "Misael Ledesma — Full-Stack Developer",
      description:
        "Full-Stack Developer and Reac Studio co-founder in Córdoba, Argentina. Client projects, web applications, APIs, databases, cloud infrastructure and security-conscious engineering.",
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
      role: "Full-Stack Developer",
      availability: "Open to full-time, remote and freelance work",
      location: "Córdoba, Argentina",
      languages: "Spanish, English",
      emailLabel: "Email",
    },
    hero: {
      statement:
        "Full-Stack Developer building scalable, secure and production-ready web applications.",
      supporting:
        "Focused on React, Next.js, TypeScript, backend engineering, databases and cloud infrastructure. Building real-world digital solutions through software development, automation and security-conscious engineering.",
    },
    about: {
      label: "About",
      paragraphs: [
        "I'm a Full-Stack Web Developer focused on building modern, reliable and scalable web applications. I combine frontend development, backend logic and databases to build complete digital products.",
        "I've worked on real-world projects including custom CRM systems, business management tools, real-time currency solutions and production websites. I care about clean architecture, maintainable code, performance, security and creating software that solves actual business problems — not just projects made to complete a course.",
        "I'm based in Córdoba, Argentina, and open to remote, full-time, contract and freelance opportunities. I'm especially interested in teams where I can keep growing as an engineer, take ownership of real products and contribute from development to production.",
        "Alongside client work as a co-founder of Reac Studio, I keep learning independently and building open-source projects. Self-directed study and hands-on experimentation help me develop my engineering judgment and explore new technical problems.",
        "I'm particularly interested in cybersecurity, open-source intelligence (OSINT), digital investigations and data-driven analysis. I aim to combine my software engineering background with investigative methodologies, information analysis and security research.",
      ],
      cta: "Explore projects",
    },
    stack: {
      label: "Technologies",
      applied: "Applied experience",
      learning: "Developing knowledge",
      note: "Applied experience reflects client work and personal or academic projects. Developing knowledge identifies areas of ongoing study, without implying professional delivery.",
      groups: [
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
    },
    experience: {
      label: "Selected projects",
      entries: [
        {
          organization: "WordPress Malware Remediation",
          role: "Investigation & Security Hardening",
          highlights: [
            "Investigated a compromised WordPress environment and analyzed indicators of compromise, webshells and injected code.",
            "Backed up files and the database before remediation to preserve legitimate content.",
            "Removed identified malicious code and replaced the WordPress core with a verified installation.",
            "Applied security hardening measures as part of the website recovery.",
          ],
          projectId: "wordpress-security",
        },
        {
          organization: "Reac Studio",
          role: "Co-Founder & Full-Stack Developer",
          period: "Aug 2026 — Present",
          highlights: [
            "Analyze client requirements, design technical solutions and application architecture, and communicate engineering decisions directly with clients.",
            "Develop Full Stack websites, API integrations and database-backed systems, and collaborate with the marketing team on technical delivery.",
            "Configure infrastructure and domains, deploy to production, and maintain performance and application security.",
            "Built the agency website with static HTML, CSS and JavaScript, dedicated service pages, technical SEO and structured data on Vercel.",
            "Implemented TypeScript serverless contact processing with validation and documented antispam controls.",
          ],
          links: [
            {
              label: "Visit agency",
              href: "https://reacstudio.com",
            },
          ],
          projectId: "reac-studio",
        },
        {
          organization: "Travel Days",
          role: "Full-Stack Web Developer — Reac Studio",
          highlights: [
            "Developed a responsive tourism website with Next.js, React, TypeScript and Tailwind CSS for a travel agency in Villa Dolores, Córdoba.",
            "Organized destinations, school travel programs, photographs, videos and testimonials through reusable components.",
            "Implemented WhatsApp inquiry flows, technical SEO, Cloudflare deployment and domain configuration.",
            "Delivered the commercial website scope; passenger accounts, bookings and payments are not part of this implementation.",
          ],
          links: [
            {
              label: "Visit website",
              href: "https://traveldays.tur.ar",
            },
          ],
          projectId: "travel-days",
        },
        {
          organization: "Modular Admin Panel",
          role: "Internal Business System Developer",
          highlights: [
            "Worked on a custom internal system to organize business operations through modular workflows.",
            "Structured access control, forms and operational reports.",
          ],
          projectId: "modular-admin",
        },
        {
          organization: "Más Servicios",
          role: "Web Developer",
          highlights: [
            "Developed a self-managed WordPress website for an integrated services center.",
            "Organized services, branches, maps and frequently asked questions, with forms and direct WhatsApp access.",
            "Provided content-management training so the business could maintain the website.",
          ],
          projectId: "mas-servicios",
        },
        {
          organization: "Institutional website",
          role: "",
          highlights: [
            "Developed a multi-page community website with Astro, TypeScript and Tailwind CSS to present identity, meetings, ministries and visitor information.",
            "Implemented static pages, structured content, responsive layouts, accessible navigation and reduced-motion support.",
            "Kept technical delivery separate from institutional publication approval; the project remains presented as under review.",
          ],
          links: [
            {
              label: "View website · under review",
              href: "https://comunidadcristianavillasarmiento.com",
            },
          ],
          projectId: "comunidad-cristiana",
        },
      ],
    },
    projects: {
      label: "Other projects",
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
          id: "wordpress-security",
        },
        {
          title: "Más Servicios",
          context: "Commercial website for an integrated services center.",
          solution:
            "A self-managed website with services, branches, maps, FAQ, forms and WhatsApp access.",
          role: "Web Developer",
          technicalDetails: [
            "WordPress",
            "Web design",
            "Content-management training",
          ],
          id: "mas-servicios",
        },
        {
          title: "Reac Studio",
          context:
            "Reac Studio is a software development and digital marketing agency based in Córdoba, Argentina. We help businesses modernize their digital presence, streamline operations and build technology-driven solutions through custom software, web development, digital marketing and automation.",
          solution:
            "A production web presence designed to communicate the studio's services and create a direct path to contact.",
          role: "Co-Founder & Full-Stack Developer",
          technicalDetails: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Vercel",
          ],
          links: [
            {
              label: "Live site",
              href: "https://reacstudio.com/",
            },
          ],
          id: "reac-studio",
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
          id: "modular-admin",
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
          id: "misael-portfolio",
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
          id: "crm",
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
          id: "ecommerce",
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
          id: "professional-landing",
        },
        {
          title: "Tax Fraud Detection",
          context:
            "Academic data-science project for analyzing tax declarations.",
          solution:
            "A classification model to analyze patterns that may indicate declarations at risk of fraud.",
          role: "Developer",
          technicalDetails: ["Python", "Machine Learning"],
          id: "fraud-detection",
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
          id: "pomodoro",
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
          id: "portfolio-website",
        },
        {
          title: "Travel Days — Tourism Website",
          context:
            "A tourism website bringing together destinations, school travel programs and multimedia content for an agency in Villa Dolores, Córdoba.",
          solution:
            "Eight destinations and school travel programs. Passenger testimonial videos and multimedia content. WhatsApp inquiry flows. Metadata, canonical URLs, sitemap and structured data.",
          role: "Full-Stack Web Developer — Reac Studio",
          technicalDetails: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Cloudflare",
          ],
          links: [
            {
              label: "Visit website",
              href: "https://traveldays.tur.ar",
            },
          ],
          id: "travel-days",
        },
        {
          title: "Comunidad Cristiana Villa Sarmiento",
          context:
            "A multi-page community website designed to communicate identity, meetings, ministries and practical information for visitors.",
          solution:
            "Identity, beliefs, ministries and visitor pages. Responsive editorial layouts. Accessible navigation and accordions. Reduced-motion support and structured content. Developed · institutional approval pending.",
          role: "Web Developer",
          technicalDetails: [
            "Astro",
            "TypeScript",
            "Tailwind CSS",
            "Static Site Generation",
            "Accessibility",
          ],
          links: [
            {
              label: "View website · under review",
              href: "https://comunidadcristianavillasarmiento.com",
            },
          ],
          id: "comunidad-cristiana",
        },
      ],
    },
  },
  es: {
    meta: {
      title: "Misael Ledesma — Desarrollador Full Stack",
      description:
        "Desarrollador Full Stack y cofundador de Reac Studio en Córdoba, Argentina. Proyectos para clientes, aplicaciones web, APIs, bases de datos, cloud y seguridad.",
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
      role: "Desarrollador Full Stack",
      availability: "Disponible para trabajo full-time, remoto y freelance",
      location: "Córdoba, Argentina",
      languages: "Español, Inglés",
      emailLabel: "Correo",
    },
    hero: {
      statement:
        "Desarrollador Full Stack especializado en aplicaciones web escalables, seguras y preparadas para producción.",
      supporting:
        "Trabajo con React, Next.js, TypeScript, desarrollo backend, bases de datos e infraestructura cloud. Desarrollo soluciones digitales reales, combinando ingeniería de software, automatización y buenas prácticas de seguridad.",
    },
    about: {
      label: "Sobre mí",
      paragraphs: [
        "Soy desarrollador web Full-Stack, enfocado en crear aplicaciones web modernas, confiables y escalables. Combino desarrollo frontend, lógica de backend y bases de datos para construir productos digitales completos.",
        "Trabajé en proyectos reales que incluyen sistemas CRM personalizados, herramientas de gestión empresarial, soluciones de cotización de monedas en tiempo real y sitios web en producción. Me importan la arquitectura limpia, el código mantenible, el rendimiento, la seguridad y crear software que resuelva problemas reales de negocio, no solamente proyectos para completar un curso.",
        "Vivo en Córdoba, Argentina, y estoy disponible para oportunidades remotas, full-time, por contrato y freelance. Me interesan especialmente los equipos donde pueda seguir creciendo como ingeniero, asumir responsabilidad sobre productos reales y contribuir desde el desarrollo hasta producción.",
        "Además del trabajo con empresas como cofundador de Reac Studio, mantengo una formación autodidacta constante y desarrollo proyectos de código abierto. El estudio independiente y la experimentación práctica me ayudan a mejorar mi criterio de ingeniería y explorar nuevos problemas técnicos.",
        "Me interesan especialmente la ciberseguridad, la inteligencia de fuentes abiertas (OSINT), la investigación digital y el análisis de datos. Busco combinar mis conocimientos de ingeniería de software con metodologías de investigación, análisis de información e investigación en seguridad.",
      ],
      cta: "Ver proyectos",
    },
    stack: {
      label: "Tecnologías",
      applied: "Experiencia aplicada",
      learning: "En formación",
      note: "La experiencia aplicada incluye trabajos para clientes y proyectos personales o académicos. Las áreas en formación corresponden al aprendizaje continuo y no implican entregas profesionales.",
      groups: [
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
    },
    experience: {
      label: "Proyectos seleccionados",
      entries: [
        {
          organization: "Remediación de malware en WordPress",
          role: "Investigación y hardening de seguridad",
          highlights: [
            "Investigué un entorno WordPress comprometido y analicé indicadores de compromiso, webshells y código inyectado.",
            "Realicé backups de archivos y base de datos antes de intervenir para preservar el contenido legítimo.",
            "Eliminé el código malicioso identificado y reemplacé el core de WordPress por una instalación verificada.",
            "Apliqué medidas de hardening como parte de la recuperación del sitio.",
          ],
          projectId: "wordpress-security",
        },
        {
          organization: "Reac Studio",
          role: "Cofundador y desarrollador Full Stack",
          period: "Ago 2026 — Actualidad",
          highlights: [
            "Analizo requerimientos de clientes, diseño soluciones técnicas y arquitectura de aplicaciones, y comunico decisiones de ingeniería directamente con los clientes.",
            "Desarrollo sitios Full Stack, integraciones de APIs y sistemas con bases de datos, y colaboro con marketing en la entrega técnica.",
            "Configuro infraestructura y dominios, realizo despliegues y mantengo el rendimiento y la seguridad de las aplicaciones.",
            "Desarrollé la web de la agencia con HTML estático, CSS y JavaScript, páginas de servicios, SEO técnico y datos estructurados en Vercel.",
            "Implementé el procesamiento de contacto serverless en TypeScript con validación y controles antispam documentados.",
          ],
          links: [
            {
              label: "Visitar agencia",
              href: "https://reacstudio.com",
            },
          ],
          projectId: "reac-studio",
        },
        {
          organization: "Travel Days",
          role: "Desarrollador web Full Stack — Reac Studio",
          highlights: [
            "Desarrollé un sitio de turismo responsive con Next.js, React, TypeScript y Tailwind CSS para una agencia de Villa Dolores, Córdoba.",
            "Organicé destinos, viajes escolares, fotografías, videos y testimonios mediante componentes reutilizables.",
            "Implementé consultas por WhatsApp, SEO técnico, despliegue en Cloudflare y configuración del dominio.",
            "El alcance entregado es el sitio comercial; no incluye cuentas de pasajeros, reservas ni pagos.",
          ],
          links: [
            {
              label: "Visitar web",
              href: "https://traveldays.tur.ar",
            },
          ],
          projectId: "travel-days",
        },
        {
          organization: "Panel Administrativo Modular",
          role: "Desarrollador de sistema interno",
          highlights: [
            "Trabajé en un sistema interno a medida para organizar operaciones de negocio mediante flujos modulares.",
            "Estructuré control de acceso, formularios y reportes operativos.",
          ],
          projectId: "modular-admin",
        },
        {
          organization: "Más Servicios",
          role: "Desarrollador web",
          highlights: [
            "Desarrollé un sitio autogestionable en WordPress para un centro integral de servicios.",
            "Organicé servicios, sucursales, mapas y preguntas frecuentes, con formularios y acceso directo a WhatsApp.",
            "Brindé capacitación de gestión de contenido para que el negocio pudiera mantener el sitio.",
          ],
          projectId: "mas-servicios",
        },
        {
          organization: "Página web institucional",
          role: "",
          highlights: [
            "Desarrollé un sitio comunitario de varias páginas con Astro, TypeScript y Tailwind CSS para presentar identidad, reuniones, ministerios e información para visitantes.",
            "Implementé páginas estáticas, contenido estructurado, diseño responsive, navegación accesible y soporte de movimiento reducido.",
            "Separé la entrega técnica de la aprobación institucional de publicación; el proyecto sigue presentado como en revisión.",
          ],
          links: [
            {
              label: "Ver web · en revisión",
              href: "https://comunidadcristianavillasarmiento.com",
            },
          ],
          projectId: "comunidad-cristiana",
        },
      ],
    },
    projects: {
      label: "Otros proyectos",
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
          id: "wordpress-security",
        },
        {
          title: "Más Servicios",
          context: "Sitio web comercial para un centro integral de servicios.",
          solution:
            "Un sitio autogestionable con servicios, sucursales, mapas, FAQ, formularios y acceso a WhatsApp.",
          role: "Desarrollador web",
          technicalDetails: [
            "WordPress",
            "Diseño web",
            "Capacitación de gestión",
          ],
          id: "mas-servicios",
        },
        {
          title: "Reac Studio",
          context:
            "Reac Studio es una agencia de desarrollo de software y marketing digital con sede en Córdoba, Argentina. Ayudamos a empresas y profesionales a fortalecer su presencia digital, optimizar procesos y desarrollar soluciones tecnológicas mediante software a medida, desarrollo web, marketing digital y automatizaciones.",
          solution:
            "Una presencia web en producción diseñada para comunicar los servicios del estudio y crear un camino directo al contacto.",
          role: "Cofundador y desarrollador Full Stack",
          technicalDetails: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Vercel",
          ],
          links: [
            {
              label: "Ver sitio",
              href: "https://reacstudio.com/",
            },
          ],
          id: "reac-studio",
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
          id: "modular-admin",
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
          id: "misael-portfolio",
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
          id: "crm",
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
          id: "ecommerce",
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
          id: "professional-landing",
        },
        {
          title: "Detección de Fraude Fiscal",
          context:
            "Proyecto académico de ciencia de datos orientado al análisis de declaraciones impositivas.",
          solution:
            "Un modelo de clasificación para analizar patrones que pueden señalar declaraciones con riesgo de fraude.",
          role: "Desarrollador",
          technicalDetails: ["Python", "Machine Learning"],
          id: "fraud-detection",
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
          id: "pomodoro",
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
          id: "portfolio-website",
        },
        {
          title: "Travel Days — Sitio web de turismo",
          context:
            "Un sitio de turismo que reúne destinos, viajes escolares y contenido multimedia para una agencia de Villa Dolores, Córdoba.",
          solution:
            "Ocho destinos y programas de viajes escolares. Videos testimoniales y contenido multimedia. Consultas por WhatsApp. Metadata, URLs canónicas, sitemap y datos estructurados.",
          role: "Desarrollador web Full Stack — Reac Studio",
          technicalDetails: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Cloudflare",
          ],
          links: [
            {
              label: "Visitar web",
              href: "https://traveldays.tur.ar",
            },
          ],
          id: "travel-days",
        },
        {
          title: "Comunidad Cristiana Villa Sarmiento",
          context:
            "Un sitio de varias páginas para comunicar la identidad de la comunidad, sus reuniones, ministerios e información para visitantes.",
          solution:
            "Páginas de identidad, creencias, ministerios y visitas. Diseño editorial responsive. Navegación y acordeones accesibles. Movimiento reducido y contenido estructurado. Desarrollado · aprobación institucional pendiente.",
          role: "Desarrollador web",
          technicalDetails: [
            "Astro",
            "TypeScript",
            "Tailwind CSS",
            "Generación estática",
            "Accesibilidad",
          ],
          links: [
            {
              label: "Ver web · en revisión",
              href: "https://comunidadcristianavillasarmiento.com",
            },
          ],
          id: "comunidad-cristiana",
        },
      ],
    },
  },
};
