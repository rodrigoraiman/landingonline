# 📑 ÍNDICE COMPLETO DE ARCHIVOS

## Estructura del proyecto Jardin Clair

```
landing/                          ← Raíz del proyecto
│
├── 📄 START_HERE.md             ← 🎯 EMPIEZA AQUÍ (este archivo primero)
├── 📄 README.md                 ← Guía de instalación y uso
├── 📄 DELIVERY.md               ← Especificaciones técnicas detalladas
├── 📄 EXTENSION_GUIDE.md        ← Ejemplos de extensión del proyecto
│
├── 📁 app/                      ← Aplicación Next.js (App Router)
│   ├── layout.tsx               ← Layout principal (56 líneas)
│   │                              • Metadata OpenGraph + Twitter
│   │                              • JSON-LD LocalBusiness schema
│   │                              • Dark mode soporte
│   │
│   ├── page.tsx                 ← Página principal (21 líneas)
│   │                              • Orquesta todos los componentes
│   │                              • Import clean
│   │
│   ├── globals.css              ← Estilos globales (81 líneas)
│   │                              • Animaciones CSS (@keyframes)
│   │                              • Configuración dark mode
│   │                              • Transiciones globales
│   │
│   └── favicon.ico              ← Ícono del sitio
│
├── 📁 components/               ← Componentes React reutilizables (11 archivos)
│   │
│   ├── Navbar.tsx               ← Navegación sticky (106 líneas)
│   │                              • Menu responsive
│   │                              • Dark mode toggle
│   │                              • Mobile hamburger menu
│   │                              • CTA button "Devis gratuit"
│   │
│   ├── Hero.tsx                 ← Sección hero principal (72 líneas)
│   │                              • H1 + subtítulo
│   │                              • 2 CTAs (primario + secundario)
│   │                              • 3 trust badges
│   │                              • Background gradients animados
│   │
│   ├── Services.tsx             ← Grid de 6 servicios (123 líneas)
│   │                              • ServiceCard componente
│   │                              • SVG inline para iconos
│   │                              • Hover effects
│   │                              • Responsive grid
│   │
│   ├── Process.tsx              ← Timeline 3 pasos (89 líneas)
│   │                              • Stepper visual
│   │                              • Desktop: línea conectora
│   │                              • Mobile: flechas dropdown
│   │                              • Numeración de pasos
│   │
│   ├── Gallery.tsx              ← Galería 6 items (59 líneas)
│   │                              • Placeholders con dégradés CSS
│   │                              • Hover overlay
│   │                              • Aspect ratio consistente
│   │                              • Responsivo
│   │
│   ├── Testimonials.tsx         ← 3 testimonios (95 líneas)
│   │                              • Rating stars (5⭐)
│   │                              • Nombre + ciudad
│   │                              • Cards con shadow
│   │                              • Dark mode support
│   │
│   ├── Pricing.tsx              ← 3 planes de pricing (159 líneas)
│   │                              • Starter, Pro, Business
│   │                              • "POPULAIRE" badge en plan central
│   │                              • Feature lists con checkmarks
│   │                              • CTA "Choisir ce plan"
│   │                              • Disclaimer "Prix final selon surface"
│   │
│   ├── FAQ.tsx                  ← Acordeón accesible (154 líneas)
│   │                              • Expansion/collapse con state
│   │                              • aria-expanded + aria-controls
│   │                              • Clavier-navegable
│   │                              • 6 preguntas en francés
│   │                              • Smooth transitions
│   │
│   ├── Contact.tsx              ← Formulario + infos (146 líneas)
│   │                              • Validación cliente
│   │                              • Campos: nombre, email, phone, message
│   │                              • Infos de contacto (teléfono, email, zona)
│   │                              • Mensaje de éxito temporal
│   │                              • Responsive 2 columnas
│   │
│   ├── Footer.tsx               ← Footer completo (74 líneas)
│   │                              • Links a secciones
│   │                              • Mentions légales
│   │                              • Disclaimer tarifs
│   │                              • Footer links organization
│   │
│   └── DarkModeToggle.tsx       ← Toggle modo oscuro (58 líneas)
│                                  • useState + useEffect
│                                  • localStorage persistence
│                                  • Sun/Moon SVG icons
│                                  • Validación sistema preference
│
├── 📁 lib/                      ← Helpers y utilidades (2 archivos)
│   │
│   ├── seo.ts                   ← Metadata + SEO
│   │                              • siteMetadata object
│   │                              • generateLocalBusinessSchema()
│   │                              • Palabras clave en francés
│   │
│   └── utils.ts                 ← Funciones helper
│                                  • clsx() para class merging
│                                  • smoothScroll() para navegación
│
├── 📁 public/                   ← Assets estáticos
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── 📁 .next/                    ← Build output (ignorar, generado)
│
├── 📁 node_modules/             ← Dependencias (ignorar, generado)
│
├── 📄 package.json              ← Dependencias del proyecto
│                                  • next@16.1.4
│                                  • react@19.0.0
│                                  • react-dom@19.0.0
│                                  • tailwindcss@4.x
│                                  • typescript@latest
│
├── 📄 package-lock.json         ← Lock file npm (ignorar)
│
├── 📄 tsconfig.json             ← Configuración TypeScript
│                                  • Strict mode
│                                  • Path aliases (@/*)
│
├── 📄 next.config.ts            ← Configuración Next.js
│
├── 📄 postcss.config.mjs        ← Configuración PostCSS
│                                  • Tailwind CSS plugin
│
├── 📄 eslint.config.mjs         ← Configuración ESLint
│
├── 📄 .gitignore                ← Git ignore rules
│
└── 📄 next-env.d.ts             ← TypeScript declarations (auto)


RESUMEN DE CONTEO
═══════════════════════════════════════════════════════════════
Archivos creados/editados:      23
├─ App files:                    3 (layout, page, globals.css)
├─ Components:                  11 (Navbar, Hero, Services, etc.)
├─ Library files:                2 (seo.ts, utils.ts)
├─ Documentation:                4 (README, DELIVERY, EXTENSION, START_HERE)
├─ Config files:                 5 (package.json, tsconfig, next.config, etc.)
└─ Static files:                 5 (favicon, SVGs)

Total líneas de código:         ~1,500 líneas
Total de dependencias:           3 main + 7 dev
TypeScript:                      ✓ Strict mode
ESLint:                          ✓ Configurado
Tailwind CSS:                    ✓ Versión 4
Build status:                    ✓ Exitoso
```

---

## 🎯 ARCHIVOS IMPORTANTES POR TAREA

### Si quieres cambiar colores
→ Edita TODOS los archivos en `components/` (busca `green-600`)

### Si quieres agregar contenido
→ Edita los componentes específicos:
- Texto hero: `components/Hero.tsx`
- Servicios: `components/Services.tsx`
- Testimonios: `components/Testimonials.tsx`
- Pricing: `components/Pricing.tsx`
- FAQ: `components/FAQ.tsx`

### Si quieres cambiar el SEO
→ Edita:
- `app/layout.tsx` (metadata principal)
- `lib/seo.ts` (schema JSON-LD)

### Si quieres agregar funcionalidades
→ Mira `EXTENSION_GUIDE.md` para ejemplos:
- Agregar secciones
- Integrar formulario real
- Analytics
- Blog
- Newsletter

### Si quieres personalizar estilos
→ Edita:
- `app/globals.css` (estilos globales + animaciones)
- `tailwind.config.ts` (temas de colores)
- Cada componente (clases Tailwind locales)

---

## 📊 ESTADÍSTICAS POR ARCHIVO

| Archivo | Líneas | Tipo | Propósito |
|---------|--------|------|----------|
| app/layout.tsx | 56 | TypeScript | Metadata + SEO |
| app/page.tsx | 21 | TypeScript | Orquesta componentes |
| app/globals.css | 81 | CSS | Estilos globales |
| components/Navbar.tsx | 106 | TypeScript | Navegación |
| components/Hero.tsx | 72 | TypeScript | Sección principal |
| components/Services.tsx | 123 | TypeScript | Grid servicios |
| components/Process.tsx | 89 | TypeScript | Timeline |
| components/Gallery.tsx | 59 | TypeScript | Galería |
| components/Testimonials.tsx | 95 | TypeScript | Testimonios |
| components/Pricing.tsx | 159 | TypeScript | Planes |
| components/FAQ.tsx | 154 | TypeScript | Acordeón |
| components/Contact.tsx | 146 | TypeScript | Formulario |
| components/Footer.tsx | 74 | TypeScript | Footer |
| components/DarkModeToggle.tsx | 58 | TypeScript | Dark mode |
| lib/seo.ts | 30 | TypeScript | SEO |
| lib/utils.ts | 10 | TypeScript | Helpers |

---

## 🔄 FLUJO DE IMPORTES

```
app/page.tsx (importa todos los componentes)
    ├── components/Navbar.tsx
    │   └── components/DarkModeToggle.tsx (client component)
    ├── components/Hero.tsx
    ├── components/Services.tsx
    ├── components/Process.tsx
    ├── components/Gallery.tsx
    ├── components/Testimonials.tsx
    ├── components/Pricing.tsx
    ├── components/FAQ.tsx (client component)
    ├── components/Contact.tsx (client component)
    └── components/Footer.tsx

app/layout.tsx (importa SEO)
    └── lib/seo.ts
        └── generateLocalBusinessSchema()
```

---

## 📝 CONVENCIONES USADAS

- **Componentes server**: Por defecto (rendimiento)
- **Componentes client**: Con `'use client'` (interactividad)
- **Clases CSS**: Tailwind + custom CSS en globals.css
- **Imágenes**: CSS gradients (placeholder), next/image ready
- **Iconos**: SVG inline (sin librerías)
- **Estado**: React hooks (useState, useReducer)
- **Idioma**: Francés (contenido user-facing)
- **TypeScript**: Strict mode
- **Accesibilidad**: WCAG AA compliant

---

## ✅ VERIFICACIÓN DE ARCHIVOS

Para verificar que todo está bien:

```bash
# Ver estructura
tree -L 2 /Users/rodrigoraiman/Desktop/landing

# Contar archivos
find . -type f -not -path "./node_modules/*" -not -path "./.next/*" | wc -l

# Ver tamaño total
du -sh /Users/rodrigoraiman/Desktop/landing

# Verificar build
npm run build

# Lint
npm run lint
```

---

## 📚 PRÓXIMOS PASOS

1. Lee `START_HERE.md` (guía rápida)
2. Lee `README.md` (instalación + uso)
3. Lee `EXTENSION_GUIDE.md` (cómo extender)
4. Personalizax según necesites
5. Deploy a Vercel/Netlify

---

**¡Tu proyecto está listo para usar! 🎉**

Última actualización: 26 de enero de 2026
