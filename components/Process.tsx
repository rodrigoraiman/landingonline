export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Prise de contact',
      description: 'Appelez-nous ou remplissez le formulaire pour décrire vos besoins et la superficie de votre jardin.',
    },
    {
      number: 2,
      title: 'Visite & estimation',
      description: 'Nous visitons votre propriété pour évaluer précisément le travail et vous proposer un devis sans engagement.',
    },
    {
      number: 3,
      title: 'Intervention & suivi',
      description: 'Nos équipes interviennent selon vos préférences. Suivi régulier et ajustements selon les saisons.',
    },
  ];

  return (
    <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comment ça fonctionne
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Un processus simple et transparent du début à la fin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line (visible on desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-1 bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-500 dark:to-blue-500 transform -translate-y-1/2 z-0" style={{ top: '3rem' }}></div>

          {steps.map((step, index) => (
            <div key={step.number} className="relative z-10">
              {/* Step circle */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-6 shadow-lg hover:shadow-xl transition-shadow">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <svg className="w-6 h-6 text-green-500 dark:text-green-400 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
