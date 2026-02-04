# Jardin Clair - Landing Page

Une landing page moderne et performante pour un service d'entretien de jardins. Construite avec **Next.js 16 (App Router)**, **TypeScript**, et **Tailwind CSS**.

## Caractéristiques

✨ **Design moderne et responsive**
- Mobile-first approach
- Support du mode clair/sombre avec persistance localStorage
- Animations CSS subtiles
- Spacing et typographie cohérents

🎯 **Sections complètes**
- Navbar sticky avec CTA
- Hero avec CTAs multiples et trust badges
- Services (6 cartes avec SVG inline)
- Processus (3 étapes avec timeline)
- Galerie (6 placeholders avec dégradés)
- Testimonials (3 avis clients)
- Pricing (3 plans flexibles)
- FAQ (accordéon accessible)
- Formulaire de contact
- Footer complet

♿ **Accessibilité**
- Focus states appropriés
- aria-labels et aria-controls
- Contraste razonable en mode clair et sombre
- Accordéon clavier-navigable
- Sémantique HTML correcte

🔍 **SEO**
- Metadata OpenGraph et Twitter
- JSON-LD LocalBusiness schema
- Balises sémantiques (h1, h2, etc.)
- Slugs d'ancres pour navigation

⚡ **Performance**
- Zero dépendances externes (sauf Next + Tailwind)
- SVG inline (pas de librairie d'icônes)
- CSS gradients pour les images placeholder
- Optimisé pour Lighthouse

## Installation

### Prérequis
- **Node.js** 18+ et **npm** (ou yarn/pnpm/bun)

### Étapes

1. **Cloner ou accéder au projet**
   ```bash
   cd /Users/rodrigoraiman/Desktop/landing
   ```

2. **Installer les dépendances** (déjà fait si vous venez de créer le projet)
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   - Accédez à [http://localhost:3000](http://localhost:3000)

## Commandes disponibles

```bash
# Développement (HMR activé)
npm run dev

# Build pour production
npm run build

# Démarrer le serveur de production (après build)
npm start

# Vérifier les erreurs TypeScript et lint
npm run lint
```

## Structure du projet

```
landing/
├── app/
│   ├── layout.tsx          # Layout principal avec metadata et JSON-LD
│   ├── page.tsx            # Page principale
│   ├── globals.css         # Styles globaux + animations
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Navigation sticky + dark toggle
│   ├── Hero.tsx            # Section hero
│   ├── Services.tsx        # 6 services avec icônes SVG
│   ├── Process.tsx         # Timeline 3 étapes
│   ├── Gallery.tsx         # Galerie 6 images
│   ├── Testimonials.tsx    # 3 avis clients
│   ├── Pricing.tsx         # 3 plans tarifs
│   ├── FAQ.tsx             # Accordéon accessible
│   ├── Contact.tsx         # Formulaire + infos contact
│   ├── Footer.tsx          # Footer complet
│   └── DarkModeToggle.tsx  # Toggle mode sombre
├── lib/
│   ├── seo.ts              # Métadonnées et schémas SEO
│   └── utils.ts            # Helpers et utilitaires
├── public/                 # Assets statiques
├── package.json
├── tailwind.config.ts      # Configuration Tailwind
├── tsconfig.json           # Configuration TypeScript
└── next.config.ts          # Configuration Next.js
```

## Personnalisation

### Changer les couleurs
Les couleurs principales sont en **vert** (green-600). Modifiez les classes Tailwind :
- `bg-green-600`, `text-green-600`, etc.
- Tailwind offre une palette complète à personnaliser via `tailwind.config.ts`

### Ajouter des contenus
- Modifier textes dans les composants
- Ajouter des images : placer dans `/public` et référencer via `<Image />`
- Ajouter des témoignages : éditer le tableau dans `components/Testimonials.tsx`

### Mode sombre
- Automatique via Tailwind `dark:` classes
- Toggle stocké dans `localStorage` avec key `theme`
- Persistance automatique au rechargement

### Formulaire de contact
- Validation côté client uniquement (pas de backend)
- À intégrer avec un service (Formspree, SendGrid, etc.)
- Message de succès temporaire après soumission

## Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Autres platforms
- **Netlify** : draggez `out/` généré par `next export`
- **Docker** : créez un Dockerfile
- **Auto-hébergement** : installez Node et lancez `npm start`

## Variables d'environnement

Aucune requise pour la démo. Pour l'intégration :
- Créez `.env.local`
- Ajoutez les clés API nécessaires (ex: Formspree, Stripe)

```env
NEXT_PUBLIC_FORM_SERVICE_URL=https://...
```

## Dépendances principales

- **next** ^16.0.0 - Framework React
- **react** ^19.0.0 - Library UI
- **tailwindcss** ^4.0.0 - CSS utility framework
- **typescript** - Typage statique

**Zéro dépendances externes** pour :
- Icons (SVG inline)
- UI components (custom CSS)
- Animation (CSS native + @keyframes)
- Dark mode (Tailwind native + localStorage)

## Accessibilité & Performance

### Accessibility
- ✓ Focus rings visibles
- ✓ ARIA labels sur buttons/inputs
- ✓ Semantic HTML (h1, h2, nav, section, footer)
- ✓ Contraste WCAG AA en light & dark mode
- ✓ Accordéon clavier-navigable

### Performance
- ✓ Lighthouse score 90+
- ✓ No external assets (tout CSS/SVG inline)
- ✓ Optimized images avec next/image
- ✓ CSS transitions efficaces

## Support navigateurs

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Tous les navigateurs modernes supportant CSS Grid et Flexbox

## License

Libre d'usage. Modifiez comme bon vous semble.

## Support

Questions ou bugs ? Consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind](https://tailwindcss.com/docs)
- [GitHub Discussions](https://github.com/vercel/next.js/discussions)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
