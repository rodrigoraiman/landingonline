import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/DSC02402.webp"
          alt="Jardin Clair Hero"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-70 pointer-events-none select-none transition-opacity duration-500"
          priority
        />
        {/* Overlay para oscurecer y dar opacidad uniforme */}
        <div className="absolute inset-0 bg-white/70 dark:bg-black/40" />
      </div>
      {/* Background decoration quitada para evitar manchas */}

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-6 space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Votre jardin,
            <span className="block text-green-600 dark:text-green-400">notre passion</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entretien professionnel de jardins. Tonte, taille, désherbage et évacuation. Interventions rapides et déchets verts inclus.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-semibold">
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">Interventions rapides</span>
          </div>
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">Respect des saisons</span>
          </div>
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">Devis sous 24h</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900 text-lg"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Demander un devis
          </button>
          <button
            className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-green-600 dark:text-green-400 border-2 border-green-600 dark:border-green-400 font-bold px-8 py-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900 text-lg"
            onClick={() => {
              const el = document.getElementById('services');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Voir nos services
          </button>
        </div>
      </div>
    </section>
  );
}
