# Actualización local del portfolio

Fecha: 4 de noviembre de 2026. Informe de implementación y validación local. El usuario autorizó posteriormente commit, push y despliegue en Vercel; sus resultados se verifican por separado.

## Objetivo y criterio de producto

Presentar a Misael como desarrollador Full Stack y cofundador de Reac Studio, con trabajos reales, contribución técnica concreta y formación continua. La portada prioriza proyectos y contacto; los casos permiten profundizar sin convertir la home en documentación extensa.

Se conserva la identidad oscura, tipografía Geist y columna editorial. No se incorporaron filtros: cinco proyectos destacados y una sección secundaria resultan más simples de recorrer.

## Implementado

- Hero solicitado en inglés y español; profesión principal conservada.
- About con formación autodidacta constante y desarrollo de proyectos de código abierto. No se inventaron contribuciones a terceros.
- Orden destacado: Travel Days, CCVS, Reac Studio, WordPress Security y Más Servicios.
- Tarjetas con tecnologías, contribución, enlaces y capturas reales cuando están disponibles.
- Otros trabajos conservados como proyectos para clientes, personales o académicos, con identificadores estables y categoría explícita.
- Reac Studio destacado en experiencia y en una sección propia: descripción institucional, contribución individual y cinco áreas de servicios comerciales desplegables.
- Stack organizado en frontend, backend/APIs, datos, cloud/DevOps, ciberseguridad y conocimientos adicionales. Se distingue experiencia aplicada de formación; la experiencia aplicada incluye proyectos personales y académicos.
- Seguridad e ingeniería incorpora Cybersecurity & Digital Investigations y el texto solicitado, junto con el caso documentado de WordPress.
- Cuatro casos de estudio, cada uno en EN y ES, con resumen, desafío, rol, enfoque, arquitectura, tecnologías, funcionalidades, decisiones, resultados, galería o explicación de ausencia y enlaces.
- El único selector existente conserva `/projects/<slug>` al cambiar idioma. La marca vuelve al inicio del idioma actual.
- Metadata, canonical y hreflang por caso; sitemap con diez páginas localizadas; imágenes Open Graph bilingües y datos estructurados CreativeWork en los casos.
- Origen canónico por defecto corregido a `https://misaelr5.vercel.app`; los previews no toman su URL temporal como canonical.
- Navegación de secciones adaptable al móvil, estados focus, objetivos de interacción y soporte de movimiento reducido. El correo del encabezado se mantiene en una sola línea.

## Arquitectura y soluciones reutilizadas

REUSE: App Router, rutas `/en` y `/es`, componentes existentes, Next Image, Metadata API, ImageResponse y estilos base.

ADAPT: selector actual con un sufijo de ruta explícito y servidor; no requiere un segundo selector ni leer la ruta en el cliente.

BUILD: una plantilla de casos estáticos para cuatro slugs, con datos tipados bilingües. No hay CMS, backend, base de datos ni autenticación añadidos al portfolio.

No se agregaron paquetes ni se modificó el lockfile. Playwright, axe y Prettier disponibles en la máquina se usaron como herramientas de verificación/formato. El runner local de QA está en `.inspection/`, ignorado por Git y ESLint; usa Playwright instalado en el workspace CCVS y no representa una nueva suite portable del repositorio.

## Archivos

Contenido:

- `data/portfolio.ts`: perfil, hero, About, experiencia y proyectos secundarios.
- `data/professional.ts`: stack, agencia y seguridad EN/ES.
- `data/case-studies.ts`: cuatro casos, estados, tecnologías y etiquetas EN/ES.

Interfaz:

- `components/sections/Projects.tsx`, `Stack.tsx`.
- Nuevos `components/sections/Agency.tsx`, `Security.tsx`.
- `components/layout/Header.tsx`, `components/ui/LanguageSwitcher.tsx`.
- `app/[locale]/page.tsx`, `app/globals.css`.
- Nuevo `app/[locale]/projects/[slug]/page.tsx`.

SEO y configuración:

- `app/[locale]/layout.tsx`, nuevo `app/[locale]/opengraph-image.tsx`.
- `app/sitemap.ts`, `lib/site.ts`, `eslint.config.mjs`.
- `README.md`, `public/projects/README.md`, este informe.
- Cuatro capturas WebP de Travel Days/Reac Studio y logo real `public/projects/reac-symbol.svg`.

## Fuentes y límites verificados

- [Travel Days](https://traveldays.tur.ar): HTTP 200 observado en navegador; capturas desktop/mobile. [README TDAYS](https://github.com/misaelr5/TDAYS/blob/main/README.md): Next.js, React, TypeScript, Tailwind, Cloudflare, ocho destinos y consultas por WhatsApp. El sistema de pasajeros, reservas y pagos no forma parte de esta entrega.
- [Reac Studio](https://reacstudio.com): HTTP 200 observado; capturas y logo del sitio real. [README](https://github.com/misaelr5/reacs/blob/main/README.md) y [contact.ts](https://github.com/misaelr5/reacs/blob/main/lib/contact.ts): sitio estático, build propio, función Vercel, validación, honeypot, control de origen, límites de tamaño y rate limiting con Upstash. El README mantiene pendiente configurar proveedores y verificar recepción real. No se envió ningún formulario durante esta tarea.
- [CCVS](https://github.com/misaelr5/CCVS/blob/main/README.md): arquitectura Astro estática y versión de revisión. La configuración local `D:/CCVS/src/data/site.ts` conserva `publicationApproved: false`. El dominio solicitado agotó el tiempo de navegación; su operatividad no quedó confirmada. Se omite el botón de sitio oficial y se informa revisión pendiente. No se publican fotografías sin aprobación.
- WordPress: se reutilizó el alcance del contenido existente en el commit base del portfolio, no un informe forense independiente. No se añadieron certificaciones, pentests, métricas ni garantía de ausencia de reinfección.
- Las capturas de Travel Days usan su página de destinos para evitar exponer grupos escolares. Capturas reales no implican resultados de rendimiento, conversión o posicionamiento. Travel Days devolvió `noindex, nofollow` durante la comprobación; no se modificó ese sitio.

## Validación

- `npm run lint`: aprobado tras excluir los artefactos locales de inspección. El primer intento señaló imports CommonJS del runner de capturas dentro de `.inspection/`; se corrigió el alcance del lint.
- `npm run typecheck`: aprobado.
- `npm run build`: aprobado; portadas y ocho casos prerenderizados. La imagen OG se genera con ImageResponse.
- Playwright Chromium: veinte combinaciones de ruta/viewport (diez páginas en 390 y 1440 px), sin desborde horizontal ni imágenes rotas.
- Cambio real de idioma en las diez páginas: preserva el equivalente y existe un solo selector.
- Canonical, hreflang, idioma HTML y un solo H1 comprobados en las diez páginas.
- axe: cero infracciones WCAG A/AA detectadas en las veinte combinaciones. No sustituye una auditoría manual completa ni pruebas con lectores de pantalla.
- Comprobaciones adicionales: tres rutas inválidas 404, home a 320 px, enlace de salto y apertura de servicios con teclado, selector de idioma sin JavaScript, correo del header en una línea, diez URLs en sitemap e imágenes OG de ambos idiomas HTTP 200.
- Evidencia local: `.inspection/qa/results.json` y veinte capturas PNG. Se inspeccionaron visualmente la home en móvil y escritorio, el caso Travel Days en móvil y la captura real de destinos.

## Pendientes antes de desplegar

1. Confirmar aprobación institucional de CCVS, disponibilidad del dominio y autorización de capturas. WordPress también necesita imágenes autorizadas si se quiere una galería visual; actualmente se explica su ausencia.
2. Confirmar cuáles de Workers, Supabase/RLS, autenticación/autorización y CI/CD deben pasar de formación a experiencia aplicada, aportando el proyecto correspondiente.
3. Revisar las versiones idiomáticas y completar evidencia de los proyectos secundarios que todavía declaran tecnologías pendientes de confirmar.
4. Medir Core Web Vitals/Lighthouse sobre la versión desplegada y comprobar dispositivos físicos y lectores de pantalla. No se atribuye un puntaje ni cumplimiento de CWV en esta entrega.
5. Verificar `NEXT_PUBLIC_SITE_URL` en Vercel y revisar privacidad/medición antes de incorporar analytics. No se agregaron trackers.
6. La autorización posterior del usuario habilita publicar el portfolio. Esto no cambia el estado institucional de CCVS ni los pendientes de los proyectos descritos.

## Qué aprender

1. Modelar contenido con tipos e identificadores estables permite reutilizar vistas sin depender del orden de arrays.
2. La internacionalización incluye navegación y SEO: traducir textos no alcanza si el selector pierde la página o canonical apunta al idioma equivocado.
3. Disponibilidad HTTP, aprobación institucional y resultados comerciales son evidencias distintas; un portfolio creíble las presenta por separado.
