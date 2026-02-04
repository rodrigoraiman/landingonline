'use client';

interface Plan {
  id: number;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
}

export default function Pricing() {
  const plans: Plan[] = [
    {
      id: 1,
      name: 'Ponctuel',
      description: 'Pour une intervention unique',
      price: 'à partir de 49€',
      period: 'par intervention',
      features: [
        'Tonte ou taille simple',
        'Désherbage basique',
        'Nettoyage allées',
        'Enlèvement déchets inclus',
        'Devis sur mesure',
      ],
      highlighted: false,
    },
    {
      id: 2,
      name: 'Saisonnier',
      description: 'Entretien printemps/été',
      price: 'à partir de 299€',
      period: 'par saison',
      features: [
        'Tonte bi-mensuelle',
        'Taille arbustes 2x',
        'Désherbage complet',
        'Nettoyage terrasse',
        'Enlèvement déchets inclus',
        'Support prioritaire',
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: 'Contrat',
      description: 'Entretien tout au long de l\'année',
      price: 'à partir de 99€',
      period: 'par mois',
      features: [
        'Tonte mensuelle',
        'Entretien massifs',
        'Taille haies 4x/an',
        'Nettoyage saisonnier',
        'Enlèvement déchets inclus',
        'Accès direct équipe',
        'Support prioritaire',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tarification simple et transparente
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Flexible selon vos besoins et la surface de votre jardin
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
            * Prix final selon surface et accès. Devis gratuit sur demande.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-lg p-8 transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl dark:from-green-600 dark:to-green-700'
                  : 'bg-white dark:bg-gray-900 shadow-md hover:shadow-lg dark:shadow-gray-700 dark:hover:shadow-gray-600 text-gray-900 dark:text-white'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                    POPULAIRE
                  </span>
                </div>
              )}

              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlighted ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                <p className={`text-sm ${plan.highlighted ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.period}
                </p>
              </div>

              <button
                className={`w-full font-semibold px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900 mb-8 ${
                  plan.highlighted
                    ? 'bg-white text-green-600 hover:bg-gray-100'
                    : 'bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600'
                }`}
              >
                Choisir ce plan
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-green-100' : 'text-green-600 dark:text-green-400'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.highlighted ? '' : 'text-gray-700 dark:text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
