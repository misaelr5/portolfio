import type { Locale } from "@/lib/i18n";

export type CaseStudy = {
  slug: string;
  category: "client" | "security";
  title: string;
  overview: string;
  challenge: string;
  role: string;
  approach: string;
  architecture: readonly string[];
  technologies: readonly string[];
  features: readonly string[];
  decisions: readonly string[];
  results: string;
  status?: string;
  image?: string;
  imageAlt?: string;
  galleryNote?: string;
  links: readonly { label: string; href: string }[];
};

export const caseLabels = {
  en: {
    back: "All projects",
    caseStudy: "View Case Study",
    overview: "Project overview",
    challenge: "The challenge",
    role: "My role",
    approach: "Technical approach",
    architecture: "Architecture",
    technologies: "Technologies",
    features: "Key features",
    decisions: "Engineering decisions",
    results: "Results & scope",
    gallery: "Desktop & mobile",
    links: "External links",
    desktop: "Desktop",
    mobile: "Mobile",
    client: "Client projects",
    security: "Engineering & security",
    secondary: "More client, personal & academic work",
  },
  es: {
    back: "Todos los proyectos",
    caseStudy: "Ver caso de estudio",
    overview: "Resumen del proyecto",
    challenge: "El desafío",
    role: "Mi contribución",
    approach: "Enfoque técnico",
    architecture: "Arquitectura",
    technologies: "Tecnologías",
    features: "Funcionalidades",
    decisions: "Decisiones de ingeniería",
    results: "Resultados y alcance",
    gallery: "Escritorio y móvil",
    links: "Enlaces externos",
    desktop: "Escritorio",
    mobile: "Móvil",
    client: "Proyectos para clientes",
    security: "Ingeniería y seguridad",
    secondary: "Más trabajos para clientes, personales y académicos",
  },
} as const;

export const caseStudies: Record<Locale, readonly CaseStudy[]> = {
  en: [
    {
      slug: "travel-days",
      category: "client",
      title: "Travel Days — Tourism Website",
      overview:
        "A tourism website bringing together destinations, school travel programs and multimedia content for an agency in Villa Dolores, Córdoba.",
      challenge:
        "Organize different travel programs and rich media into a clear mobile experience that helps visitors find a trip and start an inquiry.",
      role: "Full-Stack Web Developer — Reac Studio. Responsive implementation, reusable components, technical SEO, production optimization, Cloudflare deployment and domain configuration.",
      approach:
        "Built the commercial website with Next.js, React and TypeScript. Reusable sections organize destinations and school trips; photographs and videos support the content, while WhatsApp provides the inquiry channel.",
      architecture: [
        "Next.js / React → destination and program pages",
        "Typed content + reusable UI → responsive presentation",
        "Contact form → prepared WhatsApp message → visitor sends the inquiry",
        "Cloudflare → production delivery and custom domain",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Cloudflare",
      ],
      features: [
        "Eight destinations and school travel programs",
        "Passenger testimonial videos and multimedia content",
        "WhatsApp inquiry flows",
        "Metadata, canonical URLs, sitemap and structured data",
      ],
      decisions: [
        "Use consultation flows appropriate to the agency's current operation.",
        "Keep multimedia and reusable presentation components organized for maintenance.",
        "Treat any passenger system as a separate future product requiring its own requirements and implementation.",
      ],
      results:
        "The public site presents travel programs and prepares WhatsApp inquiries. It does not include passenger accounts, bookings, payments or an administrative application. No conversion or performance uplift is claimed.",
      image: "/projects/travel-days-desktop.webp",
      imageAlt:
        "Travel Days destinations page with travel imagery and destination navigation",
      links: [
        { label: "Visit Website", href: "https://traveldays.tur.ar" },
        { label: "Repository", href: "https://github.com/misaelr5/TDAYS" },
      ],
    },
    {
      slug: "comunidad-cristiana",
      category: "client",
      title: "Comunidad Cristiana Villa Sarmiento",
      overview:
        "A multi-page community website designed to communicate identity, meetings, ministries and practical information for visitors.",
      challenge:
        "Make community information easy to explore through an editorial interface, with accessible navigation and a lightweight delivery model.",
      role: "Web Developer. Multi-page implementation, responsive layouts, structured content, accessible navigation and reduced-motion behavior.",
      approach:
        "Used Astro, TypeScript and Tailwind CSS to generate static pages. Content lives in typed data files; JavaScript supports navigation and progressive interactions.",
      architecture: [
        "Typed community content → Astro templates",
        "Astro build → static HTML and CSS",
        "Progressive JavaScript → navigation and accordions",
        "Publication approval flag → indexing controls",
      ],
      technologies: [
        "Astro",
        "TypeScript",
        "Tailwind CSS",
        "Static Site Generation",
        "Accessibility",
      ],
      features: [
        "Identity, beliefs, ministries and visitor pages",
        "Responsive editorial layouts",
        "Accessible navigation and accordions",
        "Reduced-motion support and structured content",
      ],
      decisions: [
        "Generate static pages because the content does not require a database or application backend.",
        "Respect reduced-motion preferences.",
        "Keep institutional approval separate from technical delivery and domain availability.",
      ],
      results:
        "The repository documents a developed review version. The local publication flag remains false; institutional approval has not been confirmed. This portfolio does not label it an officially published institutional site.",
      status: "Developed · institutional approval pending",
      galleryNote:
        "Screenshots are pending institutional and image-use approval. Community photography is not republished here.",
      links: [
        { label: "Repository", href: "https://github.com/misaelr5/CCVS" },
      ],
    },
    {
      slug: "reac-studio",
      category: "client",
      title: "Reac Studio — Agency Website",
      overview:
        "The commercial website for the software development and digital marketing agency I co-founded in Córdoba, Argentina. This case study covers the website itself.",
      challenge:
        "Present the agency's services clearly, provide dedicated service pages and create a maintainable contact journey.",
      role: "Co-Founder & Full-Stack Developer. Technical solution design, responsive website development, serverless contact logic, SEO, deployment, domain configuration and maintenance, collaborating with marketing.",
      approach:
        "A custom build script generates complete static HTML, service pages, metadata and structured data. A separate TypeScript serverless endpoint handles contact requests.",
      architecture: [
        "HTML + service content → build script → static dist/",
        "CSS + JavaScript → responsive UI and progressive interactions",
        "Contact form → Vercel function → validation + Upstash rate limit → Resend",
        "Vercel → static delivery, function routing and custom domain",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Vercel",
        "Serverless Functions",
      ],
      features: [
        "Dedicated service pages and responsive interface",
        "Canonical metadata, sitemap and linked structured data",
        "Keyboard navigation and accessibility considerations",
        "Server-side validation, honeypot, body-size limits and origin checks",
        "Documented Redis rate limiting and controlled provider errors",
      ],
      decisions: [
        "Use static delivery for a content-led commercial site.",
        "Isolate contact processing from public assets; keep secrets in environment variables.",
        "Fail safely when delivery providers are not configured.",
        "Separate the agency's service offering from completed work and the architecture of this site.",
      ],
      results:
        "The repository documents the commercial site on Vercel and its custom domain. Contact delivery still requires provider configuration and a real reception check according to the README. This site has no Next.js application, PostgreSQL database or user authentication. No measured speed or business outcome is claimed.",
      image: "/projects/reac-studio-desktop.webp",
      imageAlt:
        "Reac Studio commercial homepage presenting the agency and its services",
      links: [
        { label: "Visit Agency", href: "https://reacstudio.com" },
        { label: "Repository", href: "https://github.com/misaelr5/reacs" },
      ],
    },
    {
      slug: "wordpress-security",
      category: "security",
      title: "WordPress Malware Remediation & Security Hardening",
      overview:
        "Investigation and remediation of a compromised WordPress environment, as documented in the existing portfolio.",
      challenge:
        "Investigate indicators of compromise and remove malicious code while preserving legitimate files and database content.",
      role: "WordPress investigation, backups, malware remediation and security hardening. Client identity and sensitive operational details are withheld.",
      approach:
        "Backed up files and the database, analyzed indicators of compromise, identified webshells and injected code, replaced the WordPress core with a verified installation and applied hardening measures.",
      architecture: [
        "Compromised WordPress files + database → backups",
        "Indicators of compromise → code inspection → remediation",
        "Verified WordPress core → replacement → hardening",
      ],
      technologies: [
        "WordPress",
        "Malware Analysis",
        "Backups",
        "Security Hardening",
      ],
      features: [
        "File and database backups",
        "Investigation of indicators of compromise",
        "Webshell and injected-code identification",
        "Core replacement and hardening",
      ],
      decisions: [
        "Back up the environment before remediation.",
        "Distinguish legitimate content from malicious changes.",
        "Limit public details to the existing documented scope.",
      ],
      results:
        "The existing record describes cleanup and hardening activities. It does not establish an independent security audit, a penetration test, long-term absence of reinfection or quantified risk reduction.",
      galleryNote:
        "No approved screenshots are available. Private infrastructure, client data and malicious payloads are not exposed.",
      links: [],
    },
  ],
  es: [
    {
      slug: "travel-days",
      category: "client",
      title: "Travel Days — Sitio web de turismo",
      overview:
        "Un sitio de turismo que reúne destinos, viajes escolares y contenido multimedia para una agencia de Villa Dolores, Córdoba.",
      challenge:
        "Organizar distintas propuestas y recursos multimedia en una experiencia móvil clara que facilite encontrar un viaje y realizar una consulta.",
      role: "Desarrollador web Full Stack — Reac Studio. Implementación responsive, componentes reutilizables, SEO técnico, optimización para producción, despliegue en Cloudflare y configuración del dominio.",
      approach:
        "Desarrollé el sitio comercial con Next.js, React y TypeScript. Las secciones reutilizables organizan destinos y viajes escolares; las fotos y los videos acompañan el contenido y WhatsApp funciona como canal de consulta.",
      architecture: [
        "Next.js / React → páginas de destinos y programas",
        "Contenido tipado + componentes reutilizables → interfaz responsive",
        "Formulario → mensaje preparado para WhatsApp → envío por el visitante",
        "Cloudflare → entrega en producción y dominio propio",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Cloudflare",
      ],
      features: [
        "Ocho destinos y programas de viajes escolares",
        "Videos testimoniales y contenido multimedia",
        "Consultas por WhatsApp",
        "Metadata, URLs canónicas, sitemap y datos estructurados",
      ],
      decisions: [
        "Usar un flujo de consultas acorde a la operación actual de la agencia.",
        "Organizar los recursos multimedia y componentes para facilitar el mantenimiento.",
        "Tratar el sistema de pasajeros como un producto futuro independiente, con su propio análisis y desarrollo.",
      ],
      results:
        "El sitio público presenta viajes y prepara consultas por WhatsApp. No incluye cuentas de pasajeros, reservas, pagos ni una aplicación administrativa. No se atribuyen mejoras de conversión o rendimiento sin mediciones.",
      image: "/projects/travel-days-desktop.webp",
      imageAlt:
        "Página de destinos de Travel Days con imágenes de viajes y navegación",
      links: [
        { label: "Visitar sitio", href: "https://traveldays.tur.ar" },
        { label: "Repositorio", href: "https://github.com/misaelr5/TDAYS" },
      ],
    },
    {
      slug: "comunidad-cristiana",
      category: "client",
      title: "Comunidad Cristiana Villa Sarmiento",
      overview:
        "Un sitio de varias páginas para comunicar la identidad de la comunidad, sus reuniones, ministerios e información para visitantes.",
      challenge:
        "Hacer que la información de la comunidad sea fácil de recorrer, con diseño editorial, navegación accesible y una arquitectura liviana.",
      role: "Desarrollador web. Implementación multipágina, diseño responsive, contenido estructurado, navegación accesible y soporte para movimiento reducido.",
      approach:
        "Usé Astro, TypeScript y Tailwind CSS para generar páginas estáticas. El contenido se organiza en archivos tipados y JavaScript acompaña la navegación y las interacciones progresivas.",
      architecture: [
        "Contenido tipado → plantillas Astro",
        "Build de Astro → HTML y CSS estáticos",
        "JavaScript progresivo → navegación y acordeones",
        "Estado de aprobación → controles de indexación",
      ],
      technologies: [
        "Astro",
        "TypeScript",
        "Tailwind CSS",
        "Generación estática",
        "Accesibilidad",
      ],
      features: [
        "Páginas de identidad, creencias, ministerios y visitas",
        "Diseño editorial responsive",
        "Navegación y acordeones accesibles",
        "Movimiento reducido y contenido estructurado",
      ],
      decisions: [
        "Generar páginas estáticas porque el contenido no requiere base de datos ni backend de aplicación.",
        "Respetar la preferencia de movimiento reducido.",
        "Separar la aprobación institucional de la entrega técnica y la disponibilidad del dominio.",
      ],
      results:
        "El repositorio documenta una versión desarrollada para revisión. La configuración local mantiene la aprobación de publicación desactivada; no se confirmó la aprobación institucional. El portfolio no lo presenta como sitio institucional publicado oficialmente.",
      status: "Desarrollado · aprobación institucional pendiente",
      galleryNote:
        "Las capturas quedan pendientes de aprobación institucional y autorización de imágenes. No se republican fotografías de la comunidad.",
      links: [
        { label: "Repositorio", href: "https://github.com/misaelr5/CCVS" },
      ],
    },
    {
      slug: "reac-studio",
      category: "client",
      title: "Reac Studio — Sitio de la agencia",
      overview:
        "El sitio comercial de la agencia de software y marketing digital que cofundé en Córdoba, Argentina. Este caso describe exclusivamente el sitio web.",
      challenge:
        "Presentar los servicios con claridad, crear páginas específicas y construir un recorrido de contacto fácil de mantener.",
      role: "Cofundador y desarrollador Full Stack. Diseño de la solución técnica, desarrollo responsive, lógica serverless de contacto, SEO, despliegue, dominio y mantenimiento, en colaboración con marketing.",
      approach:
        "Un script de build genera HTML completo, páginas de servicios, metadata y datos estructurados. Un endpoint serverless separado, escrito en TypeScript, procesa el contacto.",
      architecture: [
        "HTML + contenido de servicios → script de build → dist/ estático",
        "CSS + JavaScript → interfaz responsive e interacciones progresivas",
        "Formulario → función Vercel → validación + límite Upstash → Resend",
        "Vercel → archivos estáticos, función y dominio propio",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Vercel",
        "Funciones serverless",
      ],
      features: [
        "Páginas de servicios e interfaz responsive",
        "Metadata canónica, sitemap y datos estructurados vinculados",
        "Navegación por teclado y criterios de accesibilidad",
        "Validación en servidor, honeypot, límites de tamaño y control de origen",
        "Rate limiting con Redis y errores de proveedores controlados",
      ],
      decisions: [
        "Elegir entrega estática para un sitio comercial centrado en contenido.",
        "Separar el contacto de los recursos públicos y guardar secretos en variables de entorno.",
        "Responder de forma segura si faltan proveedores configurados.",
        "Diferenciar los servicios de la agencia de los trabajos realizados y la arquitectura de este sitio.",
      ],
      results:
        "El repositorio documenta el sitio comercial en Vercel y su dominio propio. Según el README, el contacto aún requiere configurar proveedores y verificar recepción real. Este sitio no usa Next.js, PostgreSQL ni autenticación de usuarios. No se atribuyen mejoras de velocidad o resultados comerciales sin medir.",
      image: "/projects/reac-studio-desktop.webp",
      imageAlt:
        "Inicio del sitio comercial de Reac Studio con presentación de la agencia y servicios",
      links: [
        { label: "Visitar agencia", href: "https://reacstudio.com" },
        { label: "Repositorio", href: "https://github.com/misaelr5/reacs" },
      ],
    },
    {
      slug: "wordpress-security",
      category: "security",
      title: "Remediación de malware y hardening de WordPress",
      overview:
        "Investigación y remediación de un WordPress comprometido, según el alcance documentado en el portfolio existente.",
      challenge:
        "Investigar indicadores de compromiso y eliminar código malicioso preservando los archivos y datos legítimos.",
      role: "Investigación de WordPress, backups, remediación y hardening. Se reserva la identidad del cliente y los detalles operativos sensibles.",
      approach:
        "Realicé backups de archivos y base de datos, analicé indicadores de compromiso, identifiqué webshells y código inyectado, reemplacé el core por una instalación verificada y apliqué medidas de hardening.",
      architecture: [
        "Archivos y base de datos comprometidos → backups",
        "Indicadores de compromiso → inspección de código → remediación",
        "Core WordPress verificado → reemplazo → hardening",
      ],
      technologies: [
        "WordPress",
        "Análisis de malware",
        "Backups",
        "Hardening",
      ],
      features: [
        "Backups de archivos y base de datos",
        "Análisis de indicadores de compromiso",
        "Identificación de webshells y código inyectado",
        "Reemplazo de core y hardening",
      ],
      decisions: [
        "Respaldar el entorno antes de intervenir.",
        "Distinguir contenido legítimo de modificaciones maliciosas.",
        "Limitar la información pública al alcance ya documentado.",
      ],
      results:
        "El registro existente describe tareas de limpieza y hardening. No acredita una auditoría independiente, un pentest, ausencia de reinfección a largo plazo ni una reducción de riesgo cuantificada.",
      galleryNote:
        "No hay capturas autorizadas disponibles. No se exponen infraestructura privada, datos del cliente ni payloads maliciosos.",
      links: [],
    },
  ],
};
