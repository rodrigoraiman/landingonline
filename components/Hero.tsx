import Image from 'next/image';

const reassuranceItems = [
  'Interventions rapides',
  'Respect des saisons',
  'Devis gratuit',
];

const sapBenefits = [
  'Avance immédiate',
  'Démarche simple',
  'Prestations éligibles',
];

const featuredServices = [
  'Taille de haies et arbustes',
  'Tonte et entretien pelouse',
  'Débroussaillage et remise en état',
  'Entretien de massifs et petits arbres',
  'Gestion des déchets verts',
  'Mise en valeur de votre propriété',
];

function CheckIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9m0 5c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7Zm0-3c0-4.5 2.5-7 7-7 0 4.5-2.5 7-7 7Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-950 text-white">
      <div className="relative isolate">
        <Image
          src="/images/hero-jardinier-gresivaudan.png"
          alt="Jardinier professionnel taillant une haie dans le Grésivaudan"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[55%_center] sm:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/45 to-black/65 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/45 lg:to-black/20" />

        <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 py-14 sm:px-6 sm:py-16 lg:min-h-[570px] lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:px-8 lg:py-20">
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-green-300 sm:text-sm">
            Jardinier professionnel à Saint-Ismier
          </p>

          <h1 className="text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Votre jardin,
            <span className="mt-2 block text-green-400">notre passion</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-100 sm:text-xl">
            Entretien, taille, débroussaillage et remise en état.
            <span className="block">Un jardin soigné toute l&apos;année dans le Grésivaudan.</span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-black/20 transition hover:bg-green-500 focus-visible:ring-green-400 sm:text-lg"
            >
              Demander un devis
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white/80 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/15 focus-visible:ring-white sm:text-lg"
            >
              Nos services
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-3 text-sm font-semibold text-gray-100 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
            {reassuranceItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 shrink-0 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

          <aside
          id="services-a-la-personne"
          className="w-full max-w-md justify-self-center rounded-2xl border border-white/60 bg-white p-6 text-gray-900 shadow-2xl shadow-black/25 sm:p-8 lg:justify-self-end"
          aria-labelledby="sap-title"
        >
          <div className="mb-5 h-[82px] w-[112px] overflow-hidden" role="img" aria-label="Logo officiel Services à la personne">
            <Image
              src="/images/banner-services-a-la-personne.png"
              alt=""
              width={396}
              height={151}
              className="h-[82px] w-auto max-w-none"
            />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
            Services à la personne
          </p>
          <h2 id="sap-title" className="mt-2 text-3xl font-bold tracking-tight text-gray-950">
            50 % de crédit d&apos;impôt
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Sur les prestations d&apos;entretien de jardin éligibles.
          </p>

          <ul className="my-6 space-y-3 border-y border-gray-200 py-5 text-sm font-semibold text-gray-700">
            {sapBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="inline-flex items-center font-bold text-green-700 underline-offset-4 transition hover:text-green-800 hover:underline"
          >
            En savoir plus <span aria-hidden="true" className="ml-1">→</span>
          </a>
          </aside>
        </div>
      </div>

      <div className="relative z-10 bg-white text-gray-800 shadow-[0_-12px_35px_rgba(0,0,0,0.12)]">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-200 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:divide-y-0 lg:px-8">
          {featuredServices.map((service) => (
            <li key={service} className="flex min-h-24 flex-col items-center justify-center gap-2 px-3 py-4 text-center text-xs font-semibold leading-snug text-gray-700">
              <span className="text-green-700"><LeafIcon /></span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
