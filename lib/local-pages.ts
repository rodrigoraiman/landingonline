import type { LocalSlug } from './local-routes';
const meylanSeo = {
  title: 'Jardinier à Meylan | Entretien jardin & taille de haies',
  description: 'Jardinier à Meylan pour taille de haies, débroussaillage, remise en état et entretien régulier de votre jardin. Demandez votre devis Terre Viva Paysage.',
};

const meylanFaq = [
  { q: 'Quel est le tarif d’un jardinier à Meylan ?', a: 'Le prix dépend de la surface, de l’état du jardin, de la hauteur des haies, de l’accès et de la fréquence souhaitée. Envoyez-nous quelques photos et décrivez vos besoins : nous vous proposons un devis gratuit précisant les travaux et la gestion des déchets verts.' },
  { q: 'Proposez-vous l’entretien régulier des jardins ?', a: 'Oui. Nous définissons avec vous les tâches et la fréquence des passages selon votre jardin et les saisons. Vous pouvez aussi commencer par une intervention ponctuelle avant de prévoir un suivi régulier.' },
  { q: 'Faites-vous la taille de haies à Meylan ?', a: 'Oui, nous proposons la taille des haies et des arbustes à Meylan. La hauteur, la longueur, les végétaux et les conditions d’accès permettent de définir la méthode de taille et le devis.' },
  { q: 'Quelles prestations peuvent bénéficier du crédit d’impôt ?', a: 'Certains petits travaux de jardinage, dont l’entretien courant et le débroussaillage, peuvent être éligibles dans le cadre des services à la personne. Le crédit d’impôt de 50 % reste soumis aux conditions et plafonds applicables ainsi qu’au recours à un prestataire déclaré. Toutes les prestations paysagères ne sont pas éligibles ; le périmètre doit être vérifié avant intervention.' },
];

export type LocalPhoto = { subject: 'lawn' | 'hedge' | 'clearing' | 'shrubs'; src: string; width: number; height: number; alt: string; caption: string };
export type LocalPageContent = {
  h1: string;
  subtitle: string;
  seo: { title: string; description: string };
  intro: string;
  serviceIntro: string;
  // Ordre : taille de haies, débroussaillage, entretien régulier, remise en état.
  solutions: [string, string, string, string];
  content: { heading: string; lead: string; paragraphs: string[] };
  faq: { q: string; a: string }[];
  cta: { primary: string; secondary: string; title: string; text: string };
  related: LocalSlug[];
  photoDirectory: string;
  hero: LocalPhoto;
  photos: LocalPhoto[];
};

// Photos réelles déjà utilisées sur le site, examinées visuellement.
// Aucune commune de prise de vue n’est documentée : les alt restent descriptifs.
// Chaque entrée ci-dessous expose hero et photos : ces emplacements sont indépendants
// et peuvent recevoir des fichiers dans son photoDirectory, avec leurs dimensions réelles.
const assets = {
  lawn: { src: '/images/IMG_6407.webp', caption: 'Pelouse et bordures' },
  hedge: { src: '/images/IMG_6387.webp', caption: 'Taille de haies' },
  clearing: { src: '/images/IMG_6673.webp', caption: 'Débroussaillage en cours' },
  shrubs: { src: '/images/IMG_6247.webp', caption: 'Soin des arbustes' },
};
const photo = (key: keyof typeof assets, alt: string): LocalPhoto => ({ ...assets[key], subject: key, width: 2000, height: 1500, alt });

const saintIsmierPhotos = [
  photo('lawn', 'Gazon tondu avec bordure courbe et haies autour du jardin'),
  photo('hedge', 'Haie feuillue entretenue à côté d’une maison et d’un passage engazonné'),
  photo('shrubs', 'Arbustes arrondis au pied de plantes grimpantes sur un treillage'),
  photo('clearing', 'Passage de débroussailleuse entre les herbes hautes et une zone coupée'),
];
const meylanPhotos = [
  photo('lawn', 'Pelouse entretenue bordée de haies et de massifs, devant une terrasse'),
  photo('hedge', 'Haie taillée le long d’une bande de gazon près d’une maison'),
  photo('clearing', 'Débroussailleuse en cours de passage dans les herbes hautes d’un terrain en pente'),
  photo('shrubs', 'Trois arbustes taillés en boule devant un treillage fleuri'),
];
const biviersPhotos = [
  photo('shrubs', 'Trois arbustes aux formes arrondies devant une clôture en bois fleurie'),
  photo('hedge', 'Vue sur la face et le sommet d’une haie longeant un jardin'),
  photo('clearing', 'Herbes hautes partiellement coupées autour des arbres avec une débroussailleuse'),
  photo('lawn', 'Pelouse bordée d’arbustes avec une terrasse au premier plan'),
];
const montbonnotPhotos = [
  photo('lawn', 'Jardin engazonné entretenu entre une terrasse et des haies'),
  photo('shrubs', 'Feuillage de trois arbustes taillés devant des fleurs grimpantes'),
  photo('hedge', 'Bande de pelouse dégagée entre une maison et une haie dense'),
  photo('clearing', 'Outil de débroussaillage au milieu d’un terrain herbeux en cours de coupe'),
];
const crollesPhotos = [
  photo('hedge', 'Longue haie feuillue taillée sur le côté d’une maison'),
  photo('shrubs', 'Arbustes taillés en formes rondes au pied d’un treillage'),
  photo('lawn', 'Haies délimitant une pelouse avec des bordures dessinées'),
  photo('clearing', 'Débroussailleuse dégageant les herbes hautes sous les arbres'),
];
const berninPhotos = [
  photo('clearing', 'Débroussaillage d’une zone herbeuse avec une partie du terrain déjà coupée'),
  photo('lawn', 'Surface de gazon entretenue avec un massif bordé de pierres'),
  photo('hedge', 'Haie verte taillée au-dessus d’un passage de pelouse'),
  photo('shrubs', 'Arbustes en boule devant une palissade et des plantes fleuries'),
];
const grenoblePhotos = [
  photo('lawn', 'Vue d’ensemble d’un jardin avec gazon, terrasse et haies'),
  photo('clearing', 'Coupe des herbes hautes à la débroussailleuse près d’arbres'),
  photo('shrubs', 'Détail de trois arbustes arrondis devant un support en bois'),
  photo('hedge', 'Haie dense et bande de gazon en bordure d’une habitation'),
];
const corencPhotos = [
  photo('hedge', 'Ligne de haie entretenue le long d’un espace de circulation engazonné'),
  photo('lawn', 'Gazon tondu au contact d’une terrasse et d’une bordure de massif'),
  photo('shrubs', 'Petits arbustes sculptés en boule dans un massif fleuri'),
  photo('clearing', 'Débroussailleuse utilisée dans une zone d’herbes hautes et d’arbres'),
];

export const LOCAL_PAGES = {
  'jardinier-saint-ismier': {
    h1: 'Jardinier à Saint-Ismier', subtitle: 'Un jardin suivi au fil des saisons',
    seo: { title: 'Jardinier à Saint-Ismier | Entretien au fil des saisons', description: 'Organisez l’entretien de votre jardin à Saint-Ismier : tonte, taille de haies et débroussaillage. Terre Viva Paysage prépare votre devis gratuit.' },
    intro: 'Pour garder un jardin agréable sans laisser les travaux s’accumuler, Terre Viva Paysage vous accompagne à Saint-Ismier : entretien régulier, taille des haies et débroussaillage selon vos besoins.',
    serviceIntro: 'Définir les bons passages permet de répartir le travail et de garder la maîtrise de votre jardin.',
    solutions: [
      'Anticiper plutôt que rabattre trop tard : une taille adaptée contient le volume de vos haies et préserve les passages.',
      'Quand les herbes gagnent les zones moins fréquentées, nous définissons les surfaces à dégager et les plantations à préserver.',
      'Tonte, bordures et petites tailles se répartissent sur des passages convenus ensemble, selon la pousse et vos usages.',
      'Un entretien interrompu ? Nous listons les travaux de reprise avant d’envisager un calendrier plus facile à suivre.',
    ],
    content: { heading: 'Organiser l’entretien de votre jardin à Saint-Ismier', lead: 'Un calendrier utile commence par vos priorités, pas par un nombre de passages imposé.', paragraphs: [
      'L’entretien de jardin à Saint-Ismier peut commencer par un point simple : quelles tâches reviennent le plus souvent et lesquelles deviennent difficiles à réaliser ? Une pelouse à tondre, des bordures envahies ou des arbustes à contenir ne demandent pas le même suivi. Nous distinguons les opérations récurrentes des travaux ponctuels pour proposer un programme compréhensible, avec un devis avant votre engagement.',
      'Au fil des saisons, nous ajustons les interventions à la végétation présente. La tonte se raisonne selon la pousse ; le nettoyage des massifs et le ramassage se prévoient lorsque le jardin en a besoin. Vous pouvez choisir quelques passages ciblés ou un entretien régulier, sans programmer automatiquement toutes les tâches à chaque visite.',
      'Pour la taille de haies à Saint-Ismier, indiquez la longueur approximative, la hauteur souhaitée et les côtés accessibles. Ces éléments aident à prévoir le travail et le volume de coupe. Nous échangeons aussi sur les arbustes à conserver en forme libre et ceux dont vous souhaitez maîtriser le développement.',
      'Le débroussaillage à Saint-Ismier complète ce suivi lorsque certaines zones sont envahies. Avant de couper, il est utile de repérer les jeunes plantations, les limites et les obstacles peu visibles. Une fois les travaux prioritaires définis, la gestion des déchets verts et les finitions sont précisées dans le devis. Votre jardinier peut ainsi intervenir sur un périmètre clair, que la demande soit ponctuelle ou saisonnière.',
    ] },
    faq: [
      { q: 'Comment prévoir le budget d’un jardinier à Saint-Ismier ?', a: 'Séparez les travaux de départ du suivi souhaité : remise en état, tonte, taille et déchets verts. Le devis gratuit tient compte de ces postes, de la surface et de l’accès, sans tarif uniforme pour tous les jardins.' },
      { q: 'Faut-il programmer le même entretien toute l’année ?', a: 'Non. Les besoins changent avec la pousse, l’état des massifs et vos usages. Nous pouvons ajuster les tâches des passages prévus plutôt que répéter systématiquement les mêmes opérations.' },
      { q: 'Peut-on associer taille de haies et débroussaillage ?', a: 'Oui, ces travaux peuvent être étudiés ensemble. Leur réalisation sur un même passage dépend du volume à traiter, de la saison et du temps nécessaire, à préciser au devis.' },
      { q: 'L’entretien saisonnier peut-il ouvrir droit au crédit d’impôt ?', a: 'Certains petits travaux de jardinage peuvent être éligibles dans le cadre des services à la personne. La nature exacte des travaux, les plafonds et les conditions du prestataire doivent être vérifiés ; un programme annuel n’est pas éligible dans son ensemble par défaut.' },
    ],
    cta: { primary: 'Prévoir mon entretien à Saint-Ismier', secondary: 'Choisir les travaux utiles', title: 'Préparons les prochains passages', text: 'Précisez ce que vous faites déjà et les tâches que vous souhaitez confier à votre jardinier. Nous établirons un devis gratuit adapté.' },
    related: ['jardinier-biviers', 'jardinier-montbonnot-saint-martin', 'entretien-jardin-meylan', 'debroussaillage-bernin'],
    photoDirectory: 'public/images/communes/saint-ismier', hero: saintIsmierPhotos[0], photos: saintIsmierPhotos,
  },
  'entretien-jardin-meylan': {
    h1: 'Jardinier à Meylan', subtitle: 'Entretien de jardin & taille de haies', seo: meylanSeo,
    intro: 'Besoin d’entretenir votre jardin à Meylan ? Terre Viva Paysage intervient pour la taille de haies, le débroussaillage, la remise en état et l’entretien régulier de vos extérieurs.',
    serviceIntro: 'De la haie à reprendre au jardin à remettre en état, choisissez un entretien adapté à vos extérieurs.',
    solutions: [
      'Une haie trop large ou qui masque la lumière ? Nous ajustons sa forme et taillons les arbustes en tenant compte des végétaux et de la saison.',
      'Les herbes hautes et les broussailles gagnent du terrain ? Nous dégageons les zones envahies pour retrouver des extérieurs accessibles et plus faciles à entretenir.',
      'Vous manquez de temps pour suivre votre jardin ? Nous organisons les tontes, les finitions et les tailles selon vos besoins et le rythme des saisons.',
      'Votre jardin a besoin de repartir sur de bonnes bases ? Nous définissons les priorités : débroussailler, reprendre les végétaux et nettoyer les espaces à retrouver.',
    ],
    content: { heading: 'Entretien de jardin à Meylan', lead: 'Retrouver le plaisir du jardin, avec un entretien adapté à votre quotidien.', paragraphs: [
      'À Meylan, votre jardin peut demander une aide ponctuelle ou un suivi au fil des mois. Avant de définir une intervention, nous échangeons sur ce qui vous gêne : une haie devenue trop volumineuse, des herbes hautes, des bordures à reprendre ou simplement un manque de temps. La surface, l’accès au terrain et l’état des végétaux permettent de préparer un devis adapté.',
      'La taille de haies à Meylan comprend d’abord le choix du résultat souhaité : contenir la largeur, retrouver une ligne nette ou dégager un passage. Pour les arbustes, la taille tient compte de leur développement et de leur floraison. Le calendrier se décide selon les plantes et les conditions du moment, plutôt que selon une date identique pour tous les jardins.',
      'Pour un débroussaillage à Meylan ou une remise en état, nous identifions les zones à traiter et les végétaux à conserver. L’objectif est de retrouver un terrain praticable, puis de prévoir un entretien qui évite de laisser les broussailles reprendre toute la place. La gestion des déchets verts est précisée dans le devis.',
      'L’entretien des espaces verts à Meylan peut ensuite associer tonte, finitions, taille et nettoyage saisonnier. Au printemps, en été ou à l’automne, les tâches et la fréquence évoluent avec la pousse et vos usages. Si vous recherchez un paysagiste à Meylan pour entretenir un jardin existant, décrivez-nous vos priorités : nous construisons avec vous un programme ponctuel ou régulier, sans ajouter de prestations inutiles.',
    ] },
    faq: meylanFaq,
    cta: { primary: 'Demander un devis gratuit à Meylan', secondary: 'Voir nos services', title: 'Parlons de votre jardin à Meylan', text: 'Indiquez la surface, les travaux souhaités et vos disponibilités. Quelques photos nous aideront à comprendre votre besoin.' },
    related: ['jardinier-saint-ismier', 'jardinier-biviers', 'jardinier-montbonnot-saint-martin', 'jardinier-corenc', 'entretien-jardin-grenoble'],
    photoDirectory: 'public/images/communes/meylan', hero: meylanPhotos[0], photos: meylanPhotos,
  },
  'jardinier-biviers': {
    h1: 'Jardinier à Biviers', subtitle: 'Des haies maîtrisées, des arbustes préservés',
    seo: { title: 'Jardinier à Biviers | Taille de haies & soin du jardin', description: 'À Biviers, confiez vos haies, arbustes et travaux d’entretien à Terre Viva Paysage. Débroussaillage ou suivi du jardin : demandez un devis gratuit.' },
    intro: 'Une haie qui déborde ou des arbustes dont vous souhaitez conserver la forme ? Votre jardinier à Biviers prépare avec vous les tailles, le débroussaillage et l’entretien des espaces autour des plantations.',
    serviceIntro: 'Retrouver des proportions agréables tout en tenant compte des végétaux que vous souhaitez garder.',
    solutions: [
      'Nous précisons avec vous les faces à tailler et le volume à conserver pour dégager le jardin sans décider d’une coupe excessive.',
      'Autour des plantations, les zones envahies sont repérées avant la coupe afin de distinguer broussailles et végétaux à garder.',
      'Un suivi de la pelouse, des bordures et des arbustes permet d’entretenir l’ensemble sans attendre une reprise importante.',
      'Nous organisons la reprise par étapes : dégager les accès, contenir les végétaux et terminer les zones que vous utilisez.',
    ],
    content: { heading: 'Entretenir les volumes et les passages à Biviers', lead: 'Une taille se prépare en regardant la plante et la place que vous souhaitez lui laisser.', paragraphs: [
      'Pour l’entretien de votre jardin à Biviers, commencez par identifier ce qui doit changer et ce qui vous plaît déjà. Une haie peut protéger un espace tout en prenant trop de largeur ; un arbuste peut gêner un passage sans nécessiter une taille de toute sa ramure. Ces attentes orientent le travail et évitent de traiter chaque végétal de la même façon.',
      'La taille de haies à Biviers se prépare avec quelques informations concrètes : longueur, hauteur actuelle, résultat recherché et accès de chaque côté. Si vous ignorez le nom des plantes, des photographies du feuillage et une vue d’ensemble sont utiles. Nous adaptons la proposition à l’état observé, sans promettre qu’une coupe sévère conviendra à toutes les espèces.',
      'Le débroussaillage à Biviers peut concerner les abords des haies, un fond de jardin ou une surface devenue difficile à parcourir. Signalez les petites plantations et les objets qui pourraient être masqués par la végétation. La zone à couper et la gestion des résidus sont définies avant le passage, avec une attention particulière aux espaces que vous souhaitez conserver.',
      'Après cette intervention, un suivi plus léger peut réunir tonte, entretien des bordures et contrôle du développement des arbustes. Nous convenons des priorités selon la saison et votre disponibilité. Vous gardez la possibilité de confier seulement une tâche à votre jardinier ou de demander un devis pour plusieurs opérations. Le choix repose sur votre jardin réel, et non sur une formule identique pour tous.',
    ] },
    faq: [
      { q: 'Que faut-il mesurer pour une taille de haies à Biviers ?', a: 'La longueur et la hauteur approximatives suffisent pour un premier échange. Précisez aussi les faces à tailler, les accès et le résultat souhaité. Des photos permettent de compléter ces indications avant le devis.' },
      { q: 'Pouvez-vous tailler uniquement certains arbustes ?', a: 'Oui. Désignez les végétaux concernés et ceux à laisser en l’état. Nous examinons la taille possible selon leur forme, leur développement et la période envisagée.' },
      { q: 'Comment préparer un débroussaillage près des plantations ?', a: 'Repérez les jeunes plants, tuteurs et éléments cachés dans les herbes. Le périmètre de coupe doit être clair pour différencier les végétaux à préserver de la zone à dégager.' },
      { q: 'Proposez-vous un suivi après la première taille ?', a: 'Un entretien régulier peut être prévu pour les nouvelles pousses, la pelouse et les finitions. La fréquence est discutée après avoir identifié les besoins, plutôt que fixée d’avance pour toutes les plantes.' },
    ],
    cta: { primary: 'Faire évaluer mon jardin à Biviers', secondary: 'Découvrir les soins proposés', title: 'Quelle place souhaitez-vous retrouver dans votre jardin ?', text: 'Décrivez les haies ou arbustes concernés et le résultat attendu. Nous vous aidons à définir les travaux avant de chiffrer le devis gratuit.' },
    related: ['jardinier-saint-ismier', 'jardinier-montbonnot-saint-martin', 'entretien-jardin-meylan', 'jardinier-corenc'],
    photoDirectory: 'public/images/communes/biviers', hero: biviersPhotos[0], photos: biviersPhotos,
  },
  'jardinier-montbonnot-saint-martin': {
    h1: 'Jardinier à Montbonnot-Saint-Martin', subtitle: 'Un entretien organisé autour de vos besoins',
    seo: { title: 'Jardinier à Montbonnot-Saint-Martin | Entretien jardin', description: 'Tonte, taille de haies et débroussaillage à Montbonnot-Saint-Martin : organisez vos travaux avec Terre Viva Paysage. Devis gratuit, suivi à votre rythme.' },
    intro: 'Confier votre jardin doit vous simplifier l’organisation. À Montbonnot-Saint-Martin, Terre Viva Paysage définit avec vous les tâches, les accès et le rythme des interventions, pour un entretien ponctuel ou régulier.',
    serviceIntro: 'Regroupez les tâches utiles et gardez une vision claire de ce qui sera réalisé lors du passage.',
    solutions: [
      'La longueur des haies, les côtés accessibles et le volume de coupe permettent de préparer une intervention adaptée.',
      'Une zone délaissée peut être intégrée au programme de travaux, avec un périmètre précis et des consignes sur les plantations.',
      'Nous établissons une liste de tâches récurrentes et de priorités saisonnières pour faciliter le suivi de vos extérieurs.',
      'Avant de reprendre un entretien courant, nous évaluons séparément les travaux nécessaires pour remettre le jardin en ordre.',
    ],
    content: { heading: 'Simplifier le suivi de votre jardin à Montbonnot-Saint-Martin', lead: 'Savoir ce qui est prévu, comment se déroule le passage et quelles seront les finitions.', paragraphs: [
      'Vous cherchez un jardinier à Montbonnot-Saint-Martin pour vous décharger des tâches régulières ? Le premier échange sert à décrire votre organisation autant que votre jardin. Indiquez les zones concernées, ce que vous entretenez vous-même et les travaux que vous préférez déléguer. Nous pouvons ainsi distinguer un besoin récurrent d’un rattrapage ponctuel et préparer une proposition cohérente.',
      'L’entretien de jardin à Montbonnot-Saint-Martin gagne à être présenté comme une liste de travaux concrets : tondre une surface, reprendre des bordures, tailler certains arbustes ou dégager un massif. Chaque poste peut être discuté. Les possibilités d’accès, les éléments à protéger et la gestion des déchets verts sont également utiles pour éviter les malentendus le jour du passage.',
      'Pour la taille de haies à Montbonnot-Saint-Martin, expliquez si vous souhaitez surtout contenir les nouvelles pousses ou retrouver un volume plus réduit. La méthode et le moment de taille dépendent des végétaux. Une photo prise de chaque côté aide à comprendre les contraintes, mais le devis doit rester fondé sur le travail réellement nécessaire.',
      'Si un débroussaillage à Montbonnot-Saint-Martin est aussi nécessaire, nous le distinguons de l’entretien courant. Il peut servir de première étape avant des passages plus légers. Le suivi se construit ensuite autour de la pousse et de vos attentes : certaines tâches reviennent, d’autres ne sont utiles qu’à une période donnée. Vous disposez d’un interlocuteur unique pour ajuster le programme et poser vos questions.',
    ] },
    faq: [
      { q: 'Quelles informations donner avant un devis à Montbonnot-Saint-Martin ?', a: 'Indiquez la surface approximative, les travaux attendus, l’état du jardin et les accès. Précisez également si la demande concerne un passage isolé ou un entretien à organiser sur plusieurs mois.' },
      { q: 'Puis-je garder une partie des travaux à ma charge ?', a: 'Oui. Vous pouvez par exemple garder la tonte et confier les haies, ou demander seulement un débroussaillage. Le devis indique le périmètre retenu pour que chacun sache ce qui est prévu.' },
      { q: 'La remise en état est-elle comprise dans l’entretien régulier ?', a: 'Elle doit être évaluée séparément si le jardin demande une reprise importante. Cette distinction permet de comprendre le coût du premier passage et celui du suivi proposé ensuite.' },
      { q: 'Comment faire évoluer les tâches au fil des passages ?', a: 'Signalez vos nouvelles priorités avant l’intervention. Un changement de volume ou de prestation doit être discuté et, si nécessaire, chiffré avant réalisation.' },
    ],
    cta: { primary: 'Organiser mon entretien à Montbonnot', secondary: 'Définir les prestations', title: 'Un programme clair pour votre jardin', text: 'Dites-nous quelles tâches vous souhaitez déléguer et à quelle fréquence. Nous préparerons un devis gratuit pour Montbonnot-Saint-Martin.' },
    related: ['jardinier-biviers', 'jardinier-saint-ismier', 'entretien-jardin-meylan', 'debroussaillage-bernin', 'taille-haie-crolles'],
    photoDirectory: 'public/images/communes/montbonnot-saint-martin', hero: montbonnotPhotos[0], photos: montbonnotPhotos,
  },
  'taille-haie-crolles': {
    h1: 'Jardinier à Crolles', subtitle: 'Taille de haies & entretien des extérieurs',
    seo: { title: 'Jardinier à Crolles | Taille de haies & entretien jardin', description: 'Préparez votre taille de haies à Crolles avec Terre Viva Paysage : volumes, accès et finitions. Entretien de jardin et débroussaillage sur devis gratuit.' },
    intro: 'Vos haies ont besoin d’être reprises ? À Crolles, Terre Viva Paysage prépare la taille selon leur volume et vos attentes, puis peut compléter le passage par l’entretien du jardin ou le débroussaillage.',
    serviceIntro: 'De la ligne de haie aux abords du jardin, un périmètre de travaux défini avant la coupe.',
    solutions: [
      'Précisez le sommet, les faces et la hauteur visée : nous étudions une taille compatible avec les végétaux et leurs accès.',
      'Nous pouvons dégager les herbes hautes autour des zones à entretenir, en identifiant les végétaux et obstacles à préserver.',
      'La maîtrise des nouvelles pousses peut s’inscrire dans un suivi associant tontes et entretien des bordures.',
      'Pour une haie ou un jardin resté sans entretien, nous discutons les possibilités de reprise avant de choisir les travaux.',
    ],
    content: { heading: 'Préparer une taille de haies à Crolles', lead: 'Le bon résultat dépend autant de la préparation que de la coupe.', paragraphs: [
      'Une demande de taille de haies à Crolles mérite plus qu’une indication de longueur. Le travail change selon la hauteur, l’épaisseur, les faces à reprendre et l’espace disponible pour intervenir. Décrivez le résultat attendu : une ligne plus nette, un passage dégagé ou un volume contenu. Votre jardinier pourra ainsi vous proposer un devis correspondant à la prestation souhaitée.',
      'Avant la taille, pensez à montrer la haie dans son ensemble et à préciser les obstacles proches. Une clôture, un massif ou un équipement de jardin peut influencer l’accès. Nous tenons compte de l’état des végétaux pour définir la coupe possible : réduire fortement une haie n’est pas toujours la réponse adaptée, et la période d’intervention se discute selon les plantes.',
      'Le devis doit aussi expliquer les finitions et la gestion des déchets verts. Ces éléments prennent une place différente selon le volume coupé. Si vous souhaitez garder certains résidus sur place ou faire traiter une autre zone, indiquez-le dès la préparation. Les attentes sont ainsi connues avant le début du travail, sans présumer d’une évacuation identique pour chaque demande.',
      'L’entretien de jardin à Crolles peut compléter la taille par la tonte et le soin des bordures. Un débroussaillage à Crolles peut également être étudié si des herbes hautes gênent l’accès ou envahissent une partie du terrain. Après cette intervention, nous pouvons prévoir des passages pour contenir les repousses. L’objectif est de choisir un suivi utile, en fonction de votre jardin et du temps que vous souhaitez lui consacrer.',
    ] },
    faq: [
      { q: 'Quel est le prix d’une taille de haies à Crolles ?', a: 'La longueur ne suffit pas à déterminer le prix. La hauteur, l’épaisseur, le nombre de faces accessibles et la gestion des coupes entrent aussi dans le devis gratuit.' },
      { q: 'Une haie trop haute peut-elle être fortement abaissée ?', a: 'Cela dépend du végétal et de son état. Nous discutons la réduction souhaitée avant de proposer une coupe ; une reprise sévère ne convient pas à toutes les haies.' },
      { q: 'Faut-il prévoir la gestion des branches dès le devis ?', a: 'Oui. Indiquez si vous souhaitez conserver des résidus et quelles zones doivent être nettoyées. Le volume de coupe et la solution retenue sont à préciser avant intervention.' },
      { q: 'Intervenez-vous aussi pour la tonte et le débroussaillage ?', a: 'Oui, votre demande à Crolles peut réunir plusieurs tâches d’entretien. Nous évaluons chacune pour vous proposer un ensemble cohérent, réalisable en un ou plusieurs passages selon le travail.' },
    ],
    cta: { primary: 'Chiffrer ma taille de haies à Crolles', secondary: 'Voir les travaux complémentaires', title: 'Décrivons ensemble la taille souhaitée', text: 'Longueur, hauteur, faces à couper et quelques photos : ces éléments nous aideront à préparer votre devis gratuit.' },
    related: ['debroussaillage-bernin', 'jardinier-saint-ismier', 'jardinier-montbonnot-saint-martin'],
    photoDirectory: 'public/images/communes/crolles', hero: crollesPhotos[0], photos: crollesPhotos,
  },
  'debroussaillage-bernin': {
    h1: 'Jardinier à Bernin', subtitle: 'Débroussaillage & remise en état du jardin',
    seo: { title: 'Jardinier à Bernin | Débroussaillage & remise en état', description: 'Herbes hautes ou jardin à reprendre à Bernin ? Terre Viva Paysage propose débroussaillage, taille de haies et entretien. Faites préciser votre devis gratuit.' },
    intro: 'Retrouver un terrain accessible commence par des priorités claires. Votre jardinier à Bernin prend en charge le débroussaillage et la remise en état, avec la possibilité de poursuivre par un entretien régulier.',
    serviceIntro: 'Dégager, reprendre les végétaux puis entretenir : chaque étape répond à un besoin identifié.',
    solutions: [
      'Une fois les abords accessibles, nous étudions les haies à contenir pour rendre les passages plus agréables.',
      'Définissez la surface envahie et les éléments à conserver : nous préparons la coupe des herbes et broussailles sur ce périmètre.',
      'Après la reprise, des passages adaptés aident à maîtriser la pousse sans attendre que toute la zone soit de nouveau envahie.',
      'Nous séparons le dégagement initial, les tailles et les finitions pour établir un ordre de travail compréhensible.',
    ],
    content: { heading: 'Du débroussaillage au suivi du jardin à Bernin', lead: 'Reprendre un extérieur par étapes permet de concentrer le travail là où il est utile.', paragraphs: [
      'Lorsque la végétation a pris de la place, la première question est celle du périmètre à retrouver. Pour un débroussaillage à Bernin, indiquez les espaces que vous voulez rendre accessibles, ceux à conserver et les obstacles connus. Une vue générale du terrain est utile, mais signalez aussi les jeunes plants, les piquets et les objets que les herbes peuvent masquer.',
      'Le travail n’est pas identique sur une surface légèrement enherbée et dans une zone de broussailles plus denses. Nous examinons les accès, le type de végétation et les finitions attendues afin de définir la prestation. Le devis précise les travaux retenus et la gestion des résidus ; il ne suppose pas qu’un seul passage supprimera définitivement les repousses.',
      'Une remise en état peut ensuite comprendre la taille de haies à Bernin, la reprise de bordures et l’entretien des espaces que vous utilisez. Ces opérations sont organisées selon leur utilité, plutôt que réalisées indistinctement sur tout le jardin. Si vous souhaitez avancer progressivement, expliquez vos priorités : nous pouvons distinguer le nécessaire immédiatement des tâches à programmer ensuite.',
      'L’entretien de jardin à Bernin prend le relais une fois les zones dégagées. Selon les surfaces et la pousse, il peut associer tonte, débroussaillage ciblé et tailles ponctuelles. La fréquence des passages se discute sur cette base. Vous pouvez solliciter votre jardinier pour un rattrapage isolé ou construire un suivi, en gardant une vision claire du travail prévu et des limites de chaque intervention.',
    ] },
    faq: [
      { q: 'Comment est évalué un débroussaillage à Bernin ?', a: 'L’évaluation tient compte de la surface, de la densité des végétaux, des obstacles et des accès. Précisez les zones à conserver et les finitions attendues pour obtenir un devis adapté.' },
      { q: 'Que dois-je signaler avant la coupe ?', a: 'Les jeunes plantations, tuyaux, piquets et objets cachés peuvent être difficiles à voir. Indiquez leur position et les limites de la zone à traiter avant le passage.' },
      { q: 'Un passage empêche-t-il les broussailles de revenir ?', a: 'Non, une coupe ne supprime pas toute possibilité de repousse. Un suivi peut être prévu selon la végétation et l’usage souhaité pour éviter un nouveau rattrapage important.' },
      { q: 'Peut-on remettre le jardin en état progressivement ?', a: 'Oui. Nous pouvons commencer par les accès et les espaces prioritaires, puis prévoir les haies et les finitions dans un programme distinct, avec un périmètre chiffré pour chaque étape.' },
    ],
    cta: { primary: 'Préparer mon débroussaillage à Bernin', secondary: 'Explorer les étapes de reprise', title: 'Quelle zone souhaitez-vous retrouver en premier ?', text: 'Décrivez l’état du terrain et les surfaces à dégager. Nous vous proposerons un devis gratuit pour les travaux prioritaires.' },
    related: ['taille-haie-crolles', 'jardinier-saint-ismier', 'jardinier-montbonnot-saint-martin'],
    photoDirectory: 'public/images/communes/bernin', hero: berninPhotos[0], photos: berninPhotos,
  },
  'entretien-jardin-grenoble': {
    h1: 'Jardinier à Grenoble', subtitle: 'Un passage ciblé ou un jardin suivi',
    seo: { title: 'Jardinier à Grenoble | Entretien ponctuel ou régulier', description: 'Besoin d’un jardinier à Grenoble ? Tonte, taille de haies, débroussaillage et entretien ciblé avec Terre Viva Paysage. Un devis gratuit selon vos priorités.' },
    intro: 'Vous avez besoin d’aide pour une tâche précise ou pour l’ensemble du jardin ? Terre Viva Paysage intervient à Grenoble avec une proposition centrée sur vos priorités : tonte, haies, débroussaillage ou suivi régulier.',
    serviceIntro: 'Vous choisissez ce que vous souhaitez confier, du travail ponctuel à un ensemble de prestations.',
    solutions: [
      'Pour une seule haie ou plusieurs côtés du jardin, nous étudions la coupe attendue et les conditions d’accès.',
      'Les herbes hautes peuvent être traitées sur une zone précise, sans étendre automatiquement le travail à tous les extérieurs.',
      'Un programme peut réunir les tâches que vous ne souhaitez plus réaliser, tout en vous laissant celles que vous appréciez.',
      'Avant de repartir sur un suivi, nous identifions les opérations de rattrapage et leur ordre de priorité.',
    ],
    content: { heading: 'Choisir les travaux à confier à votre jardinier à Grenoble', lead: 'Un besoin ponctuel mérite un devis aussi précis qu’un programme d’entretien.', paragraphs: [
      'Il n’est pas nécessaire de confier tout votre extérieur pour faire appel à un jardinier à Grenoble. Vous pouvez demander une taille difficile à réaliser seul, un dégagement de végétation ou une aide pour la tonte. Commencez par préciser les tâches qui vous prennent du temps et le résultat attendu. Nous définissons ensuite un périmètre de travail, sans imposer un entretien complet du jardin.',
      'Pour préparer l’entretien de jardin à Grenoble, les conditions d’accès comptent autant que la surface. Indiquez comment rejoindre les zones concernées, quels passages doivent rester libres et où se trouvent les éléments à protéger. Ces informations facilitent l’organisation et permettent de discuter la gestion des déchets verts dès le devis, avec les finitions réellement souhaitées.',
      'La taille de haies à Grenoble peut être demandée indépendamment des autres travaux. Décrivez les côtés à reprendre, la hauteur actuelle et le volume à conserver. Si un débroussaillage à Grenoble est également utile, montrez la zone concernée séparément : les outils et le temps de travail à prévoir dépendent de la végétation et des obstacles présents.',
      'Après un premier passage, vous pouvez décider de garder une organisation ponctuelle ou de prévoir un suivi. Le choix dépend de la pousse et de votre disponibilité, pas seulement de la taille du terrain. Nous échangeons sur les tâches à renouveler, celles à laisser à votre charge et les périodes où une aide serait utile. Votre devis reste ainsi lié à des besoins identifiables et à un programme que vous comprenez.',
    ] },
    faq: [
      { q: 'Puis-je appeler un jardinier à Grenoble pour une seule tâche ?', a: 'Oui. Présentez la tâche souhaitée et les conditions d’accès. Une intervention ciblée peut être chiffrée sans prévoir automatiquement un contrat d’entretien complet.' },
      { q: 'Quels accès faut-il décrire pour préparer le passage ?', a: 'Expliquez le chemin jusqu’au jardin, les passages étroits éventuels et les zones qui doivent rester libres. Des photos d’ensemble aident à préparer le travail et la gestion des déchets.' },
      { q: 'Le devis peut-il distinguer les haies du débroussaillage ?', a: 'Oui, ces tâches peuvent être détaillées pour comprendre leur périmètre et choisir les travaux prioritaires. Leur regroupement dépend ensuite du volume et de l’organisation retenue.' },
      { q: 'Peut-on passer d’une aide ponctuelle à un entretien régulier ?', a: 'Vous pouvez demander un programme après le premier passage. Nous identifions les tâches récurrentes et la fréquence utile selon votre jardin, sans reprendre automatiquement toutes les opérations initiales.' },
    ],
    cta: { primary: 'Demander une intervention à Grenoble', secondary: 'Choisir une prestation', title: 'Une tâche précise à nous confier ?', text: 'Expliquez ce que vous souhaitez faire réaliser, les accès et vos contraintes d’organisation. Votre devis est gratuit.' },
    related: ['entretien-jardin-meylan', 'jardinier-corenc', 'jardinier-montbonnot-saint-martin'],
    photoDirectory: 'public/images/communes/grenoble', hero: grenoblePhotos[0], photos: grenoblePhotos,
  },
  'jardinier-corenc': {
    h1: 'Jardinier à Corenc', subtitle: 'Retrouver des extérieurs agréables à utiliser',
    seo: { title: 'Jardinier à Corenc | Remise en état & suivi du jardin', description: 'À Corenc, retrouvez des passages dégagés et un jardin soigné : taille de haies, débroussaillage et entretien avec Terre Viva Paysage. Devis gratuit.' },
    intro: 'Un passage envahi, une bordure oubliée ou une haie trop large peuvent gêner l’usage du jardin. À Corenc, Terre Viva Paysage vous aide à reprendre ces espaces puis à prévoir les soins nécessaires pour les entretenir.',
    serviceIntro: 'Partir des espaces que vous utilisez permet de choisir des travaux dont vous verrez l’utilité.',
    solutions: [
      'Nous étudions la taille des faces qui débordent sur les espaces de circulation, en tenant compte du volume à conserver.',
      'Le dégagement des zones envahies se prépare avec le repérage des bordures, des plantations et des obstacles masqués.',
      'Un suivi des accès, du gazon et des arbustes aide à garder les espaces utiles agréables au quotidien.',
      'Nous hiérarchisons la reprise selon vos usages : accès à retrouver, végétation à contenir puis finitions autour des zones dégagées.',
    ],
    content: { heading: 'Reprendre les espaces utiles de votre jardin à Corenc', lead: 'Une intervention réussie commence par la façon dont vous souhaitez profiter de votre extérieur.', paragraphs: [
      'Pour définir l’entretien de votre jardin à Corenc, regardez d’abord les espaces que vous utilisez : accès, bordures de pelouse, abords d’une terrasse ou zones autour des plantations. Quand la végétation gêne ces usages, il peut être plus utile de traiter quelques points précis que de reprendre tout le terrain. Votre jardinier vous aide à ordonner les travaux selon le résultat recherché.',
      'La taille de haies à Corenc peut servir à libérer un passage ou à contenir un volume devenu encombrant. Nous distinguons la taille d’entretien d’une réduction plus importante, à discuter selon les plantes. Indiquez les côtés accessibles et ce que vous souhaitez préserver, notamment les écrans de végétation qui participent à l’usage de votre jardin.',
      'Un débroussaillage à Corenc permet de reprendre les surfaces où les herbes et broussailles se sont installées. Avant la coupe, signalez les bordures, les réseaux apparents et les végétaux peu visibles à conserver. Nous définissons la limite des travaux, puis les finitions et la gestion des résidus, pour éviter qu’un dégagement ponctuel soit confondu avec une transformation complète du terrain.',
      'Une fois les espaces retrouvés, le suivi peut rester ciblé : tonte de certaines surfaces, contrôle des repousses et petites tailles aux périodes adaptées. Nous pouvons également étudier une remise en état plus large si vous le souhaitez. Dans les deux cas, le devis gratuit précise le périmètre retenu. Le rythme d’entretien se choisit ensuite en fonction de votre disponibilité et du développement réel de la végétation.',
    ] },
    faq: [
      { q: 'Par où commencer pour remettre un jardin en état à Corenc ?', a: 'Indiquez les espaces que vous voulez réutiliser en priorité. Nous pouvons distinguer le dégagement des accès, la reprise des haies et les finitions pour établir un ordre de travail utile.' },
      { q: 'Peut-on dégager un passage sans tailler toute la haie ?', a: 'La demande peut porter sur certaines faces, selon l’état et la forme des végétaux. Précisez le passage à libérer et les parties de la haie que vous souhaitez conserver.' },
      { q: 'Le débroussaillage comprend-il une transformation du terrain ?', a: 'Non. Couper la végétation d’une zone ne revient pas à refaire son aménagement. Le devis doit distinguer le dégagement prévu des autres travaux éventuellement nécessaires.' },
      { q: 'Quel suivi prévoir après la remise en état ?', a: 'Nous regardons les repousses, les surfaces à tondre et les végétaux à contenir. Des passages ciblés peuvent suffire ; leur fréquence doit correspondre à l’état du jardin et à vos attentes.' },
    ],
    cta: { primary: 'Préparer mon projet de jardin à Corenc', secondary: 'Voir les solutions d’entretien', title: 'Quels espaces aimeriez-vous retrouver ?', text: 'Indiquez les passages et zones à reprendre. Nous définirons les travaux utiles et leur devis gratuit avant intervention.' },
    related: ['entretien-jardin-meylan', 'entretien-jardin-grenoble', 'jardinier-biviers', 'jardinier-saint-ismier'],
    photoDirectory: 'public/images/communes/corenc', hero: corencPhotos[0], photos: corencPhotos,
  },
} satisfies Record<LocalSlug, LocalPageContent>;

// Les routes ci-dessous sont des pages service + commune, pas des services génériques.
// Leur libellé conserve donc toujours la commune de destination.
export const SERVICE_LINKS = [
  { solutionIndex: 0, slug: 'taille-haie-crolles', label: 'Taille de haies à Crolles' },
  { solutionIndex: 1, slug: 'debroussaillage-bernin', label: 'Débroussaillage à Bernin' },
] satisfies { solutionIndex: number; slug: LocalSlug; label: string }[];
