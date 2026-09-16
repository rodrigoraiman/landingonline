# Notifications du formulaire de contact

`POST /api/contact` valide les champs, enregistre le contact dans Prisma, puis appelle `POST https://api.resend.com/emails`. Les champs historiques sont conservés ; la migration `20260916120000_contact_qualification` ajoute la qualification et le suivi interne.

## Configuration serveur

Consulter `.env.example`. Renseigner `RESEND_API_KEY` et `RESEND_FROM_EMAIL` dans l’environnement serveur, en conservant `DATABASE_URL`. L’expéditeur doit utiliser un domaine vérifié dans Resend. Redémarrer le serveur après configuration. Ne pas mettre ces valeurs dans une variable `NEXT_PUBLIC_`.

Le destinataire est fixé à `contact@terrepaysage.com`. Le champ `reply_to` contient l’adresse validée du client. Le message inclut nom, e-mail, téléphone, service, commune, préférence de contact et message en HTML échappé et en texte brut.

Documentation Resend : https://resend.com/docs/api-reference/emails/send-email

## Résultats

| HTTP | Corps JSON | Interface |
| --- | --- | --- |
| 400 | `ok: false, saved: false, error` | Champs invalides ou JSON illisible ; correction possible. |
| 500 | `ok: false, saved: false, error` | Échec du stockage ; réessai possible. Aucun appel Resend. |
| 201 | `ok: true, saved: true, notification: "sent"` | Demande enregistrée, notification acceptée par Resend ; formulaire verrouillé. |
| 201 | `ok: true, saved: true, notification: "failed"` | Demande enregistrée, avis échoué ou non confirmé ; ne pas renvoyer le formulaire. |

L’envoi attend au maximum dix secondes. Une erreur Resend ou une configuration absente ne supprime jamais le contact enregistré. Les logs ne contiennent ni clé API ni contenu du formulaire. L’acceptation par Resend ne constitue pas une confirmation de livraison.

L’interface bloque les doubles clics immédiatement et conserve les messages de résultat. Si la réponse réseau est perdue, elle signale que l’état est incertain et bloque le renvoi pour éviter un doublon. Il n’y a ni effacement automatique ni nouvelle tentative de notification en arrière-plan. La clé d’idempotence Resend est liée à l’identifiant du contact ; elle ne déduplique pas des requêtes API distinctes créant de nouveaux contacts.

## Vérification

`node --test tests/contact.test.mjs` vérifie la validation, l’ordre stockage/courrier, les champs et l’échappement HTML, ainsi que les échecs Prisma, Resend, réseau et configuration. Ces tests isolent les services externes : ils ne créent aucun contact réel et n’envoient aucun courrier.


## Qualification et suivi

Service, commune et préférence de contact sont requis pour les nouvelles demandes. L’e-mail reste requis pour le reply_to ; le téléphone est demandé et requis uniquement pour un rappel. Une commune hors suggestions est acceptée. Les anciens contacts gardent leurs champs ; les nouveaux champs de qualification restent NULL pour eux, sans inventer de service ou de préférence.

Dans Prisma Studio (`npx prisma studio`, sur un poste de confiance, sans exposer son port sur Internet), utiliser Contact : `status` (nouveau, contacte, visite_prevue, devis_envoye, accepte, perdu), `internalNote`, `nextFollowUpAt`. Toutes les lignes reçoivent le statut initial nouveau, y compris les anciennes : reclasser celles déjà traitées. Les dates Prisma sont stockées en UTC : vérifier le fuseau lors de la saisie. La date de suivi est un repère manuel, pas un rappel automatique. Aucun écran public d’administration. La route ignore les champs internes envoyés par un client et ne renvoie plus l’objet Contact.

Les protections existantes sont conservées : validation serveur, limites de longueur, échappement HTML, verrou de soumission et idempotence de notification. Aucun CAPTCHA, honeypot ou rate limit applicatif n’était présent dans les fichiers inspectés ; le verrou anti-doublon ne bloque pas un robot qui appelle directement l’API. Les éventuelles règles Vercel ne sont pas gérées ici.

## Migration de production — avant de déployer le nouveau code

1. Vérifier le diff, sauvegarder PostgreSQL et confirmer la bonne base cible. Tester d’abord la migration sur une copie/staging. Ne pas exposer l’URL de connexion dans les logs.
2. Depuis un environnement sécurisé avec les variables serveur de production configurées : `npx prisma migrate status`, puis `npx prisma migrate deploy`. Ne pas utiliser `migrate dev`, `db push` ou `migrate reset` en production.
3. Confirmer avec `npx prisma migrate status`. La migration ajoute seulement des types, colonnes et un index ; aucune suppression de données. L’ancien code peut continuer à créer des contacts pendant la transition grâce aux colonnes optionnelles et au statut par défaut.
4. Générer le client (`npx prisma generate`), construire (`npm run build`), puis déployer après validation. Le script postinstall existant génère aussi le client. Ne pas publier la nouvelle API avant la migration : elle attend les nouvelles colonnes.
5. Faire une demande de contrôle, vérifier Prisma Studio et le courrier reçu, puis classer le contact de test. Les anciens formulaires ouverts avant le déploiement devront être actualisés si les nouveaux champs manquent (erreur de validation, sans création).

En cas de retour à l’ancien code, conserver les colonnes ajoutées : elles restent compatibles. Ne pas supprimer la migration ni les données de suivi.

## GA4 préparé, non activé

Aucun tag GA4 actif ni identifiant de mesure n’a été trouvé. La dépendance Vercel Analytics ne constitue pas une installation GA4. `lib/contact-analytics.ts` attend un `window.gtag` initialisé et `window.terreVivaAnalyticsConsent === true`. Sans ces deux conditions, aucun événement ne part. Le formulaire appelle cet adaptateur seulement après HTTP réussi et `saved: true`, y compris si seul le courrier échoue, car la demande existe alors en base. Ni clic, ni erreur, ni réponse incertaine ne génèrent de conversion. Aucune file d’attente ni conversion rétroactive après consentement.

Pour activer : fournir l’identifiant réel du flux Web GA4 au format G-…, raccorder une bannière de consentement avec accepter/refuser et retrait, restaurer le choix au chargement, initialiser analytics_storage à denied avant toute mesure, puis actualiser le consentement et le booléen de l’adaptateur. Ne charger le tag qu’après accord pour cette première intégration. Le CookieBanner existant est affiché sur la homepage mais n’est pas raccordé à GA4 ; il ne suffit pas de renseigner un identifiant. Ne pas activer la collecte de données utilisateur ni capturer les valeurs du formulaire dans GTM/GA4. Le seul paramètre fourni par cet adaptateur est `form_id: contact` ; aucun nom, e-mail, téléphone, message, commune ni identifiant Prisma.

Documentation : https://developers.google.com/tag-platform/security/guides/consent

## Contrôles de cette version

- `node --test tests/contact.test.mjs` : validation des nouveaux champs, courrier échappé, erreurs, protection des champs internes, analytics sans données personnelles.
- `npx tsc --noEmit --incremental false` et ESLint ciblé.
- Migration et POST avec Prisma réel dans PostgreSQL temporaire local ; transport Resend simulé pour inspecter HTML/texte sans envoyer de courrier.
- Test navigateur mobile : choix téléphone, commune libre, succès, courrier échoué, erreur serveur, réponse incertaine, double envoi et événement GA4 simulé.

Aucune migration de production ni publication effectuée pendant cette modification.
