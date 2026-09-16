# Notifications du formulaire de contact

`POST /api/contact` valide les champs, enregistre le contact dans Prisma, puis appelle `POST https://api.resend.com/emails`. Le schéma Prisma et ses champs sont conservés ; aucune migration n’est nécessaire.

## Configuration serveur

Consulter `.env.example`. Renseigner `RESEND_API_KEY` et `RESEND_FROM_EMAIL` dans l’environnement serveur, en conservant `DATABASE_URL`. L’expéditeur doit utiliser un domaine vérifié dans Resend. Redémarrer le serveur après configuration. Ne pas mettre ces valeurs dans une variable `NEXT_PUBLIC_`.

Le destinataire est fixé à `contact@terrepaysage.com`. Le champ `reply_to` contient l’adresse validée du client. Le message inclut nom, e-mail, téléphone et message en HTML échappé et en texte brut.

Documentation Resend : https://resend.com/docs/api-reference/emails/send-email

## Résultats

| HTTP | Corps JSON | Interface |
| --- | --- | --- |
| 400 | `ok: false, saved: false, error` | Champs invalides ou JSON illisible ; correction possible. |
| 500 | `ok: false, saved: false, error` | Échec du stockage ; réessai possible. Aucun appel Resend. |
| 201 | `ok: true, saved: true, notification: "sent", contact` | Demande enregistrée, notification acceptée par Resend ; formulaire verrouillé. |
| 201 | `ok: true, saved: true, notification: "failed", contact` | Demande enregistrée, avis échoué ou non confirmé ; ne pas renvoyer le formulaire. |

L’envoi attend au maximum dix secondes. Une erreur Resend ou une configuration absente ne supprime jamais le contact enregistré. Les logs ne contiennent ni clé API ni contenu du formulaire. L’acceptation par Resend ne constitue pas une confirmation de livraison.

L’interface bloque les doubles clics immédiatement et conserve les messages de résultat. Si la réponse réseau est perdue, elle signale que l’état est incertain et bloque le renvoi pour éviter un doublon. Il n’y a ni effacement automatique ni nouvelle tentative de notification en arrière-plan. La clé d’idempotence Resend est liée à l’identifiant du contact ; elle ne déduplique pas des requêtes API distinctes créant de nouveaux contacts.

## Vérification

`node --test tests/contact.test.mjs` vérifie la validation, l’ordre stockage/courrier, les champs et l’échappement HTML, ainsi que les échecs Prisma, Resend, réseau et configuration. Ces tests isolent les services externes : ils ne créent aucun contact réel et n’envoient aucun courrier.
