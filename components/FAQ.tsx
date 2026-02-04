'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'Intervenez-vous toute l\'année ?',
      answer: 'Oui, nous intervenons toute l\'année selon les besoins saisonniers. L\'entretien varie d\'une saison à l\'autre (tonte plus fréquente en printemps/été, nettoyage en automne, etc.). Nous ajustons nos services en fonction du calendrier botanique.',
    },
    {
      id: 2,
      question: 'Que faites-vous des déchets verts ?',
      answer: 'Tous les déchets verts (tontes, branches, feuilles) sont évacués directement lors de chaque intervention. Nous respectons les réglementations locales de compostage ou d\'évacuation. Aucun déchet ne reste sur votre propriété.',
    },
    {
      id: 3,
      question: 'Comment fonctionne le devis ?',
      answer: 'Le devis est gratuit et sans engagement. Nous visitons votre jardin, évaluons la superficie, l\'accès, et le type de travaux nécessaires. Nous vous proposons ensuite une estimation précise et personnalisée avant d\'intervenir.',
    },
    {
      id: 4,
      question: 'Proposez-vous des contrats d\'entretien régulier ?',
      answer: 'Oui, nous proposons des contrats flexibles (mensuel, saisonnier, ou ponctuel). Ces contrats incluent un suivi régulier et des ajustements selon vos attentes et les conditions climatiques.',
    },
    {
      id: 5,
      question: 'Quels sont vos délais d\'intervention ?',
      answer: 'Nous répondons aux devis dans les 24 heures. Pour les interventions ponctuelles, nous pouvons généralement vous proposer des dates dans la semaine. Pour les contrats, nous établissons un calendrier régulier convenant aux deux parties.',
    },
    {
      id: 6,
      question: 'Avez-vous une assurance ?',
      answer: 'Bien sûr ! Nous sommes pleinement assurés pour tous types d\'interventions. Notre assurance responsabilité couvre les dommages éventuels à votre propriété. Vous pouvez demander les justificatifs lors du devis.',
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Questions fréquemment posées
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Trouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full px-6 py-4 text-left font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
                    openId === faq.id ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {openId === faq.id && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
