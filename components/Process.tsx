import React, { useEffect } from 'react';
import Link from 'next/link';

type Step = {
  number: number;
  title: string;
  description: string;
};

type Props = {
  steps?: Step[];
  currentStep?: number;
  onStepClick?: (stepNumber: number) => void;
};

const localPages = [
  { slug: 'jardinier-saint-ismier', label: 'Saint-Ismier' },
  { slug: 'entretien-jardin-meylan', label: 'Meylan' },
  { slug: 'jardinier-montbonnot-saint-martin', label: 'Montbonnot-Saint-Martin' },
  { slug: 'taille-haie-crolles', label: 'Crolles' },
  { slug: 'debroussaillage-bernin', label: 'Bernin' },
  { slug: 'jardinier-biviers', label: 'Biviers' },
  { slug: 'entretien-jardin-grenoble', label: 'Grenoble' },
];

export default function Process({ steps: propsSteps, currentStep, onStepClick }: Props) {
  useEffect(() => {
    const basePath = '/logo.png'; // asegúrate que exista en /public/logo.png
    const logoPath = `${basePath}?v=${Date.now()}`;

    // borra favicons previos para evitar que el navegador siga usando el antiguo
    document
      .querySelectorAll("link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']")
      .forEach((el) => el.parentNode?.removeChild(el));

    ['icon', 'shortcut icon', 'apple-touch-icon'].forEach((rel) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.type = 'image/png';
      link.href = logoPath;
      document.head.appendChild(link);
    });
  }, []);

  const defaultSteps: Step[] = [
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

  const steps = propsSteps ?? defaultSteps;

  return (
    <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors" aria-label="Processus">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comment ça fonctionne
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Un processus simple et transparent du début à la fin
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 relative list-none" role="list" aria-label="Étapes du processus">
          {/* Connection line (visible on desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-1 bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-500 dark:to-blue-500 transform -translate-y-1/2 z-0" style={{ top: '3rem' }}></div>

          {steps.map((step, index) => {
            const isActive = currentStep === step.number;
            return (
              <li key={step.number} className="relative z-10">
                {/* Step circle */}
                <div className="flex flex-col items-center text-center">
                  <div
                    // make interactive if onStepClick exists
                    role={onStepClick ? 'button' : undefined}
                    tabIndex={onStepClick ? 0 : undefined}
                    aria-label={`Paso ${step.number}: ${step.title}`}
                    aria-current={isActive ? 'step' : undefined}
                    onClick={onStepClick ? () => onStepClick(step.number) : undefined}
                    onKeyDown={
                      onStepClick
                        ? (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              onStepClick(step.number);
                            }
                          }
                        : undefined
                    }
                    className={
                      'w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-6 shadow-lg hover:shadow-xl transition-shadow focus:outline-none ' +
                      (isActive ? 'ring-4 ring-green-200 dark:ring-green-700 scale-105' : 'focus:ring-2 focus:ring-offset-2 focus:ring-green-300 dark:focus:ring-green-600')
                    }
                  >
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
              </li>
            );
          })}
        </ol>

        <div className="mt-14 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Zones locales</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {localPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
