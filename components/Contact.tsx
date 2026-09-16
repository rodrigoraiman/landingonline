'use client';

import { FormEvent, useRef, useState } from 'react';
import { CONTACT_LIMITS, CONTACT_SERVICES } from '@/lib/contact-validation';

import { LOCAL_ROUTES } from '@/lib/local-routes';
import { trackContactLead } from '@/lib/contact-analytics';

type SubmissionState =
  | { status: 'idle' | 'sending' | 'success' | 'saved-warning' | 'uncertain' }
  | { status: 'error'; message: string };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    commune: '',
    contactPreference: 'email',
  });
  const [submission, setSubmission] = useState<SubmissionState>({ status: 'idle' });
  // Le verrou est immédiat, avant le rendu React, pour bloquer les doubles clics.
  const submissionLocked = useRef(false);
  const disabled = !['idle', 'error'].includes(submission.status);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submissionLocked.current) return;
    submissionLocked.current = true;
    setSubmission({ status: 'sending' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result: unknown = await res.json();
      if (result && typeof result === 'object' && 'saved' in result) {
        if (res.ok && result.saved === true) {
          trackContactLead();
          setSubmission({ status: 'notification' in result && result.notification === 'sent' ? 'success' : 'saved-warning' });
          return; // Ne jamais proposer de renvoyer un contact déjà enregistré.
        }
        if (!res.ok && result.saved === false && 'error' in result && typeof result.error === 'string') {
          submissionLocked.current = false;
          setSubmission({ status: 'error', message: result.error });
          return;
        }
      }
      setSubmission({ status: 'uncertain' });
    } catch {
      // La réponse peut être perdue après le commit Prisma : pas de nouvel envoi aveugle.
      setSubmission({ status: 'uncertain' });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Vous avez un projet d&apos;entretien de jardin ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Laissez-nous vos coordonnées et nous vous recontacterons pour échanger sur vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.086c.51 0 .994.192 1.36.54l1.32 1.236c.366.347.85.54 1.36.54h2.208c.51 0 .994-.193 1.36-.54l1.32-1.236a1.875 1.875 0 0 1 1.36-.54h2.086a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5h6m-3 3v-3" />
                  </svg>
                  Téléphone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">+33 (6) 65 19 27 66</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </h3>
                <a href="mailto:contact@terrepaysage.com" className="text-gray-600 dark:text-gray-400 break-all">contact@terrepaysage.com</a>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Zone de service
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Saint-Ismier, Biviers, Montbonnot-Saint-Martin, Meylan, Bernin, Crolles, La Tronche, Corenc, Domène, Le Versoud, Grenoble et l&apos;ensemble du Grésivaudan.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} aria-busy={submission.status === 'sending'} aria-describedby="contact-feedback" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  disabled={disabled}
                  maxLength={CONTACT_LIMITS.name}
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  disabled={disabled}
                  maxLength={CONTACT_LIMITS.email}
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-semibold mb-2">Quel service vous intéresse ? *</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required disabled={disabled} className="w-full min-h-11 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
                  <option value="">Choisissez un service</option>
                  {Object.entries(CONTACT_SERVICES).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="commune" className="block text-sm font-semibold mb-2">Dans quelle commune se situe le jardin ? *</label>
                <input id="commune" name="commune" list="contact-communes" autoComplete="address-level2" maxLength={CONTACT_LIMITS.commune} value={formData.commune} onChange={handleChange} required disabled={disabled} placeholder="Votre commune" className="w-full min-h-11 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700" />
                <datalist id="contact-communes">
                  {[...Object.values(LOCAL_ROUTES).map(route => route.city), 'La Tronche', 'Domène', 'Le Versoud'].map(city => <option key={city} value={city} />)}
                </datalist>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Vous pouvez aussi saisir une autre commune.</p>
              </div>
              <fieldset className="mb-6" disabled={disabled}>
                <legend className="text-sm font-semibold mb-2">Comment préférez-vous être recontacté ?</legend>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 min-h-11"><input type="radio" name="contactPreference" value="email" checked={formData.contactPreference === 'email'} onChange={handleChange} /> E-mail</label>
                  <label className="flex items-center gap-2 min-h-11"><input type="radio" name="contactPreference" value="telephone" checked={formData.contactPreference === 'telephone'} onChange={handleChange} /> Téléphone</label>
                </div>
              </fieldset>
              {formData.contactPreference === 'telephone' && <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  disabled={disabled}
                  maxLength={CONTACT_LIMITS.phone}
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+33 6 XX XX XX XX"
                  required
                />
              </div>}

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Décrivez le travail souhaité *
                </label>
                <textarea
                  id="message"
                  name="message"
                  disabled={disabled}
                  maxLength={CONTACT_LIMITS.message}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Décrivez vos besoins en entretien..."
                  required
                ></textarea>
              </div>

              <div id="contact-feedback" aria-live="polite" aria-atomic="true">
                {submission.status === 'sending' && <p className="mb-6 text-gray-700 dark:text-gray-300">Enregistrement de votre demande en cours…</p>}
                {submission.status === 'success' && (
                  <p className="mb-6 rounded-lg border border-green-400 bg-green-100 p-4 text-green-900 dark:bg-green-950 dark:text-green-200">
                    Merci ! Nous vous recontacterons pour préciser votre projet et, si nécessaire, organiser une visite.
                  </p>
                )}
                {submission.status === 'saved-warning' && (
                  <p className="mb-6 rounded-lg border border-amber-400 bg-amber-50 p-4 text-amber-950 dark:bg-amber-950 dark:text-amber-100">
                    Votre demande est bien enregistrée, mais l’avis par e-mail n’a pas pu être envoyé ou confirmé. Ne renvoyez pas le formulaire. Vous pouvez nous joindre au <a className="underline" href="tel:+33665192766">06 65 19 27 66</a> pour le suivi.
                  </p>
                )}
                {submission.status === 'error' && <p role="alert" className="mb-6 rounded-lg border border-red-400 bg-red-50 p-4 text-red-900 dark:bg-red-950 dark:text-red-200">{submission.message}</p>}
                {submission.status === 'uncertain' && (
                  <p role="alert" className="mb-6 rounded-lg border border-amber-400 bg-amber-50 p-4 text-amber-950 dark:bg-amber-950 dark:text-amber-100">
                    La connexion n’a pas permis de confirmer l’enregistrement. Votre demande a peut-être déjà été reçue. Pour éviter un doublon, ne renvoyez pas le formulaire et contactez-nous au <a className="underline" href="tel:+33665192766">06 65 19 27 66</a>.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={disabled}
                className="w-full bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submission.status === 'sending' ? 'Envoi en cours…' : submission.status === 'success' || submission.status === 'saved-warning' ? 'Demande enregistrée' : submission.status === 'uncertain' ? 'Envoi à vérifier' : 'Demander une visite ou un devis'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
