// Contenu propre à Meylan : les autres pages locales conservent leur modèle.
export const meylanSeo = {
  title: 'Jardinier à Meylan | Entretien jardin & taille de haies',
  description: 'Jardinier à Meylan pour taille de haies, débroussaillage, remise en état et entretien régulier de votre jardin. Demandez votre devis Terre Viva Paysage.',
};

// Photos déjà présentes dans la galerie du site. Leur commune n’est pas documentée.
// Pour les remplacer : déposer les fichiers dans public/images/meylan/ et adapter
// src, width, height, alt et caption ci-dessous. Ne localiser que les photos vérifiées.
export const meylanPhotos = [
  { src: '/images/IMG_6407.webp', width: 2000, height: 1500, alt: 'Pelouse entretenue bordée de haies et de massifs, devant une terrasse', caption: 'Pelouse et bordures' },
  { src: '/images/IMG_6387.webp', width: 2000, height: 1500, alt: 'Haie taillée le long d’une bande de gazon près d’une maison', caption: 'Taille de haies' },
  { src: '/images/IMG_6673.webp', width: 2000, height: 1500, alt: 'Débroussailleuse en cours de passage dans les herbes hautes d’un terrain en pente', caption: 'Débroussaillage' },
  { src: '/images/IMG_6247.webp', width: 2000, height: 1500, alt: 'Trois arbustes taillés en boule devant un treillage fleuri', caption: 'Taille des arbustes' },
];

export const meylanFaq = [
  { q: 'Quel est le tarif d’un jardinier à Meylan ?', a: 'Le prix dépend de la surface, de l’état du jardin, de la hauteur des haies, de l’accès et de la fréquence souhaitée. Envoyez-nous quelques photos et décrivez vos besoins : nous vous proposons un devis gratuit précisant les travaux et la gestion des déchets verts.' },
  { q: 'Proposez-vous l’entretien régulier des jardins ?', a: 'Oui. Nous définissons avec vous les tâches et la fréquence des passages selon votre jardin et les saisons. Vous pouvez aussi commencer par une intervention ponctuelle avant de prévoir un suivi régulier.' },
  { q: 'Faites-vous la taille de haies à Meylan ?', a: 'Oui, nous proposons la taille des haies et des arbustes à Meylan. La hauteur, la longueur, les végétaux et les conditions d’accès permettent de définir la méthode de taille et le devis.' },
  { q: 'Quelles prestations peuvent bénéficier du crédit d’impôt ?', a: 'Certains petits travaux de jardinage, dont l’entretien courant et le débroussaillage, peuvent être éligibles dans le cadre des services à la personne. Le crédit d’impôt de 50 % reste soumis aux conditions et plafonds applicables ainsi qu’au recours à un prestataire déclaré. Toutes les prestations paysagères ne sont pas éligibles ; le périmètre doit être vérifié avant intervention.' },
];
