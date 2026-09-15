import Image from 'next/image';
import Link from 'next/link';
import RelatedLocations from '@/components/RelatedLocations';
import { meylanFaq, meylanPhotos } from '@/lib/meylan';

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
const heading = 'text-3xl font-bold tracking-tight text-white sm:text-4xl';
const eyebrow = 'text-xs font-bold uppercase tracking-[0.2em] text-green-400';
const primaryButton = 'inline-flex min-h-12 items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-center font-bold text-white hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400';

// Pas de pages de services générales dans le projet : aucun lien artificiel.
const solutions = [
  { title: 'Taille de haies', text: 'Une haie trop large ou qui masque la lumière ? Nous ajustons sa forme et taillons les arbustes en tenant compte des végétaux et de la saison.', photo: meylanPhotos[1] },
  { title: 'Débroussaillage', text: 'Les herbes hautes et les broussailles gagnent du terrain ? Nous dégageons les zones envahies pour retrouver des extérieurs accessibles et plus faciles à entretenir.', photo: meylanPhotos[2] },
  { title: 'Entretien régulier', text: 'Vous manquez de temps pour suivre votre jardin ? Nous organisons les tontes, les finitions et les tailles selon vos besoins et le rythme des saisons.', photo: meylanPhotos[0] },
  { title: 'Remise en état', text: 'Votre jardin a besoin de repartir sur de bonnes bases ? Nous définissons les priorités : débroussailler, reprendre les végétaux et nettoyer les espaces à retrouver.', photo: meylanPhotos[3] },
];

const commitments = [
  ['Entreprise locale', 'Un service de proximité pour les jardins de Meylan et du Grésivaudan.'],
  ['Devis gratuit', 'Des travaux définis ensemble et un prix annoncé avant votre accord.'],
  ['Travail soigné', 'Une attention portée aux végétaux, aux bordures et aux finitions.'],
  ['Interlocuteur unique', 'Un contact pour expliquer vos attentes et suivre votre entretien.'],
  ['À votre rythme', 'Une intervention ponctuelle ou des passages réguliers, selon vos besoins.'],
];

type Props = {
  localPages: Record<string, { city: string; primaryService: string }>;
};

export default function MeylanPage({ localPages }: Props) {
  const heroPhoto = meylanPhotos[0];
  return (
    <main className="bg-gray-950 text-gray-300 selection:bg-green-400 selection:text-gray-950">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-8 sm:pb-20">
        <div className={container}>
          <nav aria-label="Fil d’Ariane" className="mb-10 flex items-center gap-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span aria-hidden="true">/</span><span aria-current="page">Jardinier à Meylan</span>
          </nav>
          <p className={eyebrow}>TERRE VIVA PAYSAGE • MEYLAN</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Jardinier à Meylan{' '}
            <span className="mt-3 block text-2xl text-green-400 sm:text-4xl lg:text-5xl">Entretien de jardin &amp; taille de haies</span>
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-300">
            Besoin d’entretenir votre jardin à Meylan ? Terre Viva Paysage intervient pour la taille de haies, le débroussaillage, la remise en état et l’entretien régulier de vos extérieurs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className={primaryButton}>Demander un devis gratuit</Link>
            <a href="#services" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-bold text-white hover:bg-white/10">Voir nos services <span aria-hidden="true" className="ml-3">↓</span></a>
          </div>
          <figure className="mt-12">
            <Image src={heroPhoto.src} width={heroPhoto.width} height={heroPhoto.height} alt={heroPhoto.alt} priority sizes="(max-width: 1280px) 100vw, 1216px" className="aspect-[4/3] w-full rounded-2xl object-cover sm:aspect-[21/9]" />
            <figcaption className="mt-3 text-sm text-gray-400">Pelouse, haies et massifs : le soin des extérieurs.</figcaption>
          </figure>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-16 sm:py-24">
        <div className={container}>
          <p className={eyebrow}>Un jardin plus facile à vivre</p>
          <h2 className={`${heading} mt-3`}>Une solution pour chaque besoin</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">De la haie à reprendre au jardin à remettre en état, choisissez un entretien adapté à vos extérieurs.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map(({ title, text, photo }) => (
              <article key={title} className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-4 leading-relaxed">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gray-900/60 py-16 sm:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-20`}>
          <div>
            <p className={eyebrow}>Ponctuel ou régulier</p>
            <h2 className={`${heading} mt-3`}>Entretien de jardin à Meylan</h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-green-300">Retrouver le plaisir du jardin, avec un entretien adapté à votre quotidien.</p>
          </div>
          <div className="max-w-prose space-y-5 text-base leading-8">
            <p>À Meylan, votre jardin peut demander une aide ponctuelle ou un suivi au fil des mois. Avant de définir une intervention, nous échangeons sur ce qui vous gêne : une haie devenue trop volumineuse, des herbes hautes, des bordures à reprendre ou simplement un manque de temps. La surface, l’accès au terrain et l’état des végétaux permettent de préparer un devis adapté.</p>
            <p>La taille de haies à Meylan comprend d’abord le choix du résultat souhaité : contenir la largeur, retrouver une ligne nette ou dégager un passage. Pour les arbustes, la taille tient compte de leur développement et de leur floraison. Le calendrier se décide selon les plantes et les conditions du moment, plutôt que selon une date identique pour tous les jardins.</p>
            <p>Pour un débroussaillage à Meylan ou une remise en état, nous identifions les zones à traiter et les végétaux à conserver. L’objectif est de retrouver un terrain praticable, puis de prévoir un entretien qui évite de laisser les broussailles reprendre toute la place. La gestion des déchets verts est précisée dans le devis.</p>
            <p>L’entretien des espaces verts à Meylan peut ensuite associer tonte, finitions, taille et nettoyage saisonnier. Au printemps, en été ou à l’automne, les tâches et la fréquence évoluent avec la pousse et vos usages. Si vous recherchez un paysagiste à Meylan pour entretenir un jardin existant, décrivez-nous vos priorités : nous construisons avec vous un programme ponctuel ou régulier, sans ajouter de prestations inutiles.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 py-16 sm:py-24">
        <div className={container}>
          <p className={eyebrow}>Le soin des extérieurs</p>
          <h2 className={`${heading} mt-3`}>Nos interventions</h2>
          <p className="mt-5 max-w-2xl leading-relaxed">Haies, pelouses, arbustes et débroussaillage : quelques photographies issues de notre galerie pour découvrir notre travail.</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {meylanPhotos.map((photo) => (
              <figure key={photo.src}>
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 592px" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                <figcaption className="mt-4 text-base font-semibold text-gray-200">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="credit-impot" className={`${container} scroll-mt-24 pb-16 sm:pb-24`}>
        <div className="grid gap-8 rounded-2xl border border-green-400/30 bg-green-950 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:p-12">
          <div>
            <p className={eyebrow}>Services à la personne</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">50 % de crédit d’impôt*</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-green-50">
            <p>Certaines prestations d’entretien de jardin peuvent ouvrir droit à un crédit d’impôt dans le cadre des services à la personne. L’éligibilité dépend de la nature des travaux et des conditions applicables à votre situation et au prestataire.</p>
            <p className="text-sm text-green-100">* Sous conditions et dans les plafonds en vigueur, pour des prestations éligibles réalisées dans le cadre des services à la personne par un prestataire déclaré. Toutes les prestations ne sont pas éligibles. Le périmètre applicable doit être confirmé avant intervention.</p>
            <a href="https://www.impots.gouv.fr/particulier/emploi-domicile" className="inline-block font-semibold underline underline-offset-4 hover:text-white">Consulter les conditions sur impots.gouv.fr <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section id="pourquoi" className="scroll-mt-24 border-y border-white/10 bg-gray-900/60 py-16 sm:py-24">
        <div className={container}>
          <p className={eyebrow}>Une relation simple, un jardin suivi</p>
          <h2 className={`${heading} mt-3`}>Pourquoi Terre Viva Paysage ?</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map(([title, text]) => (
              <li key={title} className="border-l-2 border-green-500 pl-5">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className={eyebrow}>Vos questions</p>
          <h2 className={`${heading} mt-3`}>Votre jardinier à Meylan : les réponses utiles</h2>
          <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {meylanFaq.map(({ q, a }) => (
              <div key={q} className="py-7">
                <h3 className="text-lg font-semibold text-white">{q}</h3>
                <p className="mt-3 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`${container} scroll-mt-24 pb-16 sm:pb-24`}>
        <div className="rounded-2xl border border-white/10 bg-gray-900 p-6 text-center sm:p-12">
          <h2 className={heading}>Parlons de votre jardin à Meylan</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed">Indiquez la surface, les travaux souhaités et vos disponibilités. Quelques photos nous aideront à comprendre votre besoin.</p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link href="/#contact" className={primaryButton}>Demander un devis gratuit</Link>
            <a href="tel:+33665192766" className="inline-flex min-h-12 items-center justify-center px-4 font-semibold text-green-400 hover:text-green-300">06 65 19 27 66</a>
          </div>
        </div>
      </section>

      <div className={`${container} border-t border-white/10 pb-16 pt-4`}>
        <RelatedLocations
          relatedSlugs={['jardinier-saint-ismier', 'jardinier-biviers', 'jardinier-montbonnot-saint-martin', 'debroussaillage-bernin', 'taille-haie-crolles', 'entretien-jardin-grenoble', 'jardinier-corenc']}
          currentSlug="entretien-jardin-meylan"
          localPages={localPages}
          title="Nos secteurs d’intervention"
          appearance="dark"
          limit={7}
        />
      </div>
    </main>
  );
}
