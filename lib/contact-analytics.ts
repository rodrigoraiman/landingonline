// Adaptateur prêt pour GA4, inactif tant que le consentement et gtag ne sont pas raccordés.
// La future CMP doit mettre à jour ce consentement au chargement et à chaque choix/retrait.
declare global {
  interface Window {
    terreVivaAnalyticsConsent?: boolean;
    gtag?: (command: 'event', event: 'generate_lead', parameters: { form_id: string }) => void;
  }
}

export function trackContactLead(): void {
  if (typeof window === 'undefined' || window.terreVivaAnalyticsConsent !== true || typeof window.gtag !== 'function') return;
  try {
    // Aucune donnée du formulaire, aucun identifiant du contact.
    window.gtag('event', 'generate_lead', { form_id: 'contact' });
  } catch {
    // Une erreur de mesure ne doit jamais changer le résultat du formulaire.
  }
}
