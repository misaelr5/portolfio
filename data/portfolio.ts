import type { Locale } from "@/lib/i18n";
import { professionalContent } from "@/data/professional";

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
      id: string;
      category: "client" | "personal" | "academic";
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
        "Alongside client work as a co-founder of Reac Studio, I keep learning independently and building open-source projects. Self-directed study and hands-on experimentation help me develop my engineering judgment and explore new technical problems.",
        "I'm based in Córdoba, Argentina, and open to remote, full-time, contract and freelance opportunities. I'm especially interested in teams where I can keep growing as an engineer, take ownership of real products and contribute from development to production.",
      ],
      cta: "Explore projects",
    },
    stack: professionalContent.en.stack,
    experience: {
      label: "Experience",
      entries: [
        {
          organization: "Reac Studio",
          role: "Co-Founder & Full-Stack Developer",
          period: "Aug 2026 — Present",
          highlights: [
            "Analyze client requirements and design technical solutions and application architecture.",
            "Develop Full Stack websites, API integrations and database-backed systems.",
            "Configure infrastructure and domains, deploy to production, and maintain performance and application security.",
            "Communicate technical decisions to clients and collaborate with marketing on project delivery.",
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
          category: "client",
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
          category: "client",
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
          category: "personal",
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
          category: "academic",
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
          category: "academic",
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
          category: "academic",
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
          category: "academic",
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
          category: "personal",
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
          category: "personal",
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
        "Además del trabajo con empresas como cofundador de Reac Studio, mantengo una formación autodidacta constante y desarrollo proyectos de código abierto. El estudio independiente y la experimentación práctica me ayudan a mejorar mi criterio de ingeniería y explorar nuevos problemas técnicos.",
        "Vivo en Córdoba, Argentina, y estoy disponible para oportunidades remotas, full-time, por contrato y freelance. Me interesan especialmente los equipos donde pueda seguir creciendo como ingeniero, asumir responsabilidad sobre productos reales y contribuir desde el desarrollo hasta producción.",
      ],
      cta: "Ver proyectos",
    },
    stack: professionalContent.es.stack,
    experience: {
      label: "Experiencia",
      entries: [
        {
          organization: "Reac Studio",
          role: "Cofundador y desarrollador Full Stack",
          period: "Ago 2026 — Actualidad",
          highlights: [
            "Analizo requerimientos de clientes y diseño soluciones técnicas y arquitectura de aplicaciones.",
            "Desarrollo sitios Full Stack, integraciones de APIs y sistemas con bases de datos.",
            "Configuro infraestructura y dominios, realizo despliegues y mantengo el rendimiento y la seguridad de las aplicaciones.",
            "Comunico decisiones técnicas a clientes y colaboro con marketing en la entrega de proyectos.",
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
          category: "client",
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
          category: "client",
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
          category: "personal",
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
          category: "academic",
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
          category: "academic",
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
          category: "academic",
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
          category: "academic",
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
          category: "personal",
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
          category: "personal",
        },
      ],
    },
  },
};
