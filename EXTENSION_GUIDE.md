# 🛠️ GUÍA DE EXTENSIÓN - Landing Page Jardin Clair

Este documento contiene ejemplos prácticos para extender la landing page.

---

## 1️⃣ Agregar una nueva sección

### Ejemplo: Sección "Antes/Después"

**Crear archivo**: `components/BeforeAfter.tsx`

```tsx
'use client';

import { useState } from 'react';

export default function BeforeAfter() {
  const cases = [
    { id: 1, before: 'Jardin sauvage', after: 'Jardin entretenu' },
    { id: 2, before: 'Terrasse sale', after: 'Terrasse impeccable' },
    { id: 3, before: 'Haies désordonnées', after: 'Haies bien taillées' },
  ];

  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <section id="before-after" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Résultats visibles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoverId(item.id)}
              onMouseLeave={() => setHoverId(null)}
              className="relative cursor-pointer overflow-hidden rounded-lg"
            >
              {/* Before state */}
              <div className={`absolute inset-0 bg-gray-300 dark:bg-gray-700 opacity-${hoverId === item.id ? 0 : 100} transition-opacity duration-300`}>
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4">
                  {item.before}
                </p>
              </div>

              {/* After state */}
              <div className={`absolute inset-0 bg-green-400 opacity-${hoverId === item.id ? 100 : 0} transition-opacity duration-300`}>
                <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4">
                  {item.after}
                </p>
              </div>

              <div className="aspect-video" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Agregar en page.tsx**:
```tsx
import BeforeAfter from '@/components/BeforeAfter';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BeforeAfter />  {/* ← Aquí */}
      <Services />
      ...
    </>
  );
}
```

---

## 2️⃣ Integrar formulario real

### Opción A: Formspree (gratis, fácil)

**1. Registrarse**: https://formspree.io

**2. Obtener tu endpoint**: `https://formspree.io/f/YOUR_FORM_ID`

**3. Actualizar Contact.tsx**:

```tsx
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  try {
    const response = await fetch(
      'https://formspree.io/f/YOUR_FORM_ID',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Opción B: Backend propio (Node.js + MongoDB)

**API Route**: `app/api/contact/route.ts`

```tsx
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validación
  if (!body.email || !body.message) {
    return NextResponse.json(
      { error: 'Campos requeridos' },
      { status: 400 }
    );
  }

  // Guardar en DB o enviar email
  // await db.contact.create({ ...body });

  return NextResponse.json({ success: true });
}
```

**En Contact.tsx**:
```tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## 3️⃣ Agregar animaciones avanzadas

### Ejemplo: Fade-in al scroll

**En globals.css**:
```css
@keyframes fadeInOnScroll {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-on-scroll {
  animation: fadeInOnScroll 0.6s ease-out forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```

**En componentes**:
```tsx
<div className="fade-in-on-scroll">
  <h2>Sección con fade-in</h2>
</div>
```

> Funciona en navegadores modernos sin librerías

---

## 4️⃣ Agregar blog con MDX

**1. Instalar MDX**:
```bash
npm install @next/mdx remark-gfm
```

**2. Crear `next.config.ts`**:
```ts
import createMDX from '@next/mdx';

const withMDX = createMDX();

export default withMDX({
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
});
```

**3. Crear blog post**: `app/blog/entretien-automnal/page.mdx`

```mdx
# Entretien d'automne : Guide complet

L'automne est la saison idéale pour préparer votre jardin...

## Étapes clés

1. **Nettoyage des feuilles**
2. **Préparation du sol**
3. **Taille d'automne**

[Demander devis](#contact)
```

**4. Listar posts**: `app/blog/page.tsx`

```tsx
import fs from 'fs';
import path from 'path';

export default function BlogIndex() {
  const postsDir = path.join(process.cwd(), 'app/blog');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));

  return (
    <div className="max-w-4xl mx-auto">
      <h1>Blog</h1>
      {files.map(file => (
        <a key={file} href={`/blog/${file.replace('.mdx', '')}`}>
          {file.replace('.mdx', '')}
        </a>
      ))}
    </div>
  );
}
```

---

## 5️⃣ Agregar newsletter signup

**Crear componente**: `components/Newsletter.tsx`

```tsx
'use client';

import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Integrar con Brevo, Mailchimp, etc.
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSuccess(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-gradient-to-r from-green-500 to-blue-500 py-12 px-4 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Conseils jardin gratuits
        </h2>
        <p className="mb-6">
          Recevez nos tips hebdomadaires
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded text-gray-900"
            required
          />
          <button className="bg-white text-green-600 font-bold px-6 py-2 rounded hover:bg-gray-100">
            S'inscrire
          </button>
        </form>

        {success && <p className="mt-4">✓ Merci!</p>}
      </div>
    </section>
  );
}
```

---

## 6️⃣ Agregar carrito de servicios

**Crear**: `components/ServiceCart.tsx`

```tsx
'use client';

import { useReducer } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type Action = 
  | { type: 'ADD'; item: CartItem }
  | { type: 'REMOVE'; id: number }
  | { type: 'UPDATE'; id: number; quantity: number };

function cartReducer(state: CartItem[], action: Action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);
    case 'UPDATE':
      return state.map(item =>
        item.id === action.id
          ? { ...item, quantity: action.quantity }
          : item
      );
    default:
      return state;
  }
}

export default function ServiceCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Mon panier</h3>

      {cart.length === 0 ? (
        <p>Panier vide</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center py-2">
              <span>{item.name}</span>
              <span className="font-bold">{item.price * item.quantity}€</span>
              <button
                onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <p className="text-xl font-bold">Total: {total}€</p>
            <button className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Passer la commande
            </button>
          </div>
        </>
      )}
    </div>
  );
}
```

---

## 7️⃣ Agregar búsqueda (search)

**API**: `app/api/search/route.ts`

```ts
import { NextRequest, NextResponse } from 'next/server';

const services = [
  { id: 1, name: 'Tonte', slug: 'tonte' },
  { id: 2, name: 'Taille', slug: 'taille' },
  // ...
];

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.toLowerCase() || '';
  
  const results = services.filter(s =>
    s.name.toLowerCase().includes(query)
  );

  return NextResponse.json(results);
}
```

**Componente**: `components/Search.tsx`

```tsx
'use client';

import { useState } from 'react';

export default function Search() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (value.length < 2) {
      setResults([]);
      return;
    }

    const res = await fetch(`/api/search?q=${value}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Chercher..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
      />

      {results.length > 0 && (
        <ul className="absolute bg-white border rounded mt-1 w-full">
          {results.map(result => (
            <li key={result.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

---

## 8️⃣ Internacionalización (i18n)

**Instalar**:
```bash
npm install next-intl
```

**Estructura**:
```
app/
  ├── [locale]/
  │   ├── page.tsx
  │   ├── layout.tsx
  │   └── blog/
  │       └── page.tsx
  └── i18n.config.ts
```

**i18n.config.ts**:
```ts
export const locales = ['fr', 'en', 'es'] as const;
export const defaultLocale = 'fr' as const;

export const messages = {
  fr: {
    hero: 'Votre jardin, notre passion',
  },
  en: {
    hero: 'Your garden, our passion',
  },
  es: {
    hero: 'Tu jardín, nuestra pasión',
  },
};
```

---

## 9️⃣ Analytics (Google Analytics)

**En layout.tsx**:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXXXXX" />
    </html>
  );
}
```

---

## 🔟 Variables de entorno

**Crear `.env.local`**:
```env
# APIs
NEXT_PUBLIC_FORM_SERVICE_URL=https://formspree.io/f/...
NEXT_PUBLIC_ANALYTICS_ID=G-...
DATABASE_URL=mongodb+srv://...

# Claves privadas (nunca en público)
SECRET_API_KEY=sk-...
```

**Usar en código**:
```ts
const apiUrl = process.env.NEXT_PUBLIC_FORM_SERVICE_URL;
const secretKey = process.env.SECRET_API_KEY; // Solo en server
```

---

## 📚 Recursos útiles

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Tailwind Plugins](https://tailwindcss.com/docs/plugins)
- [Web Vitals](https://web.dev/vitals/)
- [Accessibility WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

---

Happy extending! 🚀
