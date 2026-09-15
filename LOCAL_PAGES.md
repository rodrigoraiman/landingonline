# Pages locales : contenu et photographies

Les huit URL historiques sont conservées dans `lib/local-routes.ts`. Saint-Nazaire-les-Eymes n’a pas de route et n’est pas ajoutée automatiquement.

`components/LocalLandingPage.tsx` porte la présentation commune. `lib/local-pages.ts` contient les textes individuels, les métadonnées, les quatre FAQ, les CTA et les communes liées. Modifier une commune ne demande pas de recopier le composant. Le sitemap et le menu utilisent le registre des routes.

## Remplacer les photos

Les quatre photographies actuelles sont issues de la galerie existante. Elles ne sont attribuées à aucune commune. Leurs descriptions correspondent uniquement à ce qui est visible.

Chaque entrée de `LOCAL_PAGES` expose `hero`, `photos` et `photoDirectory`. Les tableaux nommés `saintIsmierPhotos`, `meylanPhotos`, etc. identifient les quatre emplacements de galerie. Le hero utilise actuellement l’une de ces photos ; il peut recevoir une photographie indépendante.

| Commune | Dossier à utiliser | À fournir si disponible |
| --- | --- | --- |
| Saint-Ismier | `public/images/communes/saint-ismier/` | 1 hero + 3–4 photos documentées |
| Meylan | `public/images/communes/meylan/` | 1 hero + 3–4 photos documentées |
| Biviers | `public/images/communes/biviers/` | 1 hero + 3–4 photos documentées |
| Montbonnot-Saint-Martin | `public/images/communes/montbonnot-saint-martin/` | 1 hero + 3–4 photos documentées |
| Crolles | `public/images/communes/crolles/` | 1 hero + 3–4 photos, notamment de taille de haies |
| Bernin | `public/images/communes/bernin/` | 1 hero + 3–4 photos, notamment de débroussaillage |
| Grenoble | `public/images/communes/grenoble/` | 1 hero + 3–4 photos documentées |
| Corenc | `public/images/communes/corenc/` | 1 hero + 3–4 photos documentées |

Utiliser de préférence WebP ou AVIF. Après dépôt, renseigner `src` (sans le préfixe `public`), les dimensions originales `width` / `height`, `alt` et `caption` dans `lib/local-pages.ts`. Conserver un `subject` correspondant au contenu de la photo : `lawn`, `hedge`, `clearing` ou `shrubs`. Il permet au bloc de service de réutiliser la bonne image indépendamment de son nom de fichier. La première image de galerie n’a pas besoin d’être renommée pour remplacer le hero.

Ne mentionner une commune, une date, un chantier ou un résultat avant/après que lorsque ces informations sont vérifiées. Il n’est pas nécessaire d’ajouter la commune dans l’alt d’une photo réutilisée.

## Liens et données structurées

Il n’existe pas de pages générales `/taille-de-haies` ou `/debroussaillage`. Les routes `/taille-haie-crolles` et `/debroussaillage-bernin` traitent d’un service dans une commune. Les cartes les citent donc avec leur commune, sans les présenter comme une page de service de la commune courante. Ces deux pages renvoient aussi vers les communes voisines via leur liste `related`.

La FAQ visible et le JSON-LD proviennent du même tableau. Chaque page référence le `LocalBusiness` du layout par son identifiant existant, sans créer d’adresse locale supplémentaire. Les conditions du crédit d’impôt et les engagements généraux restent des blocs communs ; les introductions, textes principaux, descriptions de services, réponses FAQ et CTA sont individualisés.

Avant publication d’une évolution : `npm run build`, lint des fichiers concernés, puis contrôle des huit URL, des liens, des images et du rendu mobile. Ne pas considérer une simple variation du nom de ville comme un nouveau contenu local.
