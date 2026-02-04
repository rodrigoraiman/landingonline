export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Terre Paysage</h3>
            <p className="text-sm leading-relaxed">
              Entretien professionnel de jardins depuis 2024. Qualit&eacute;, ponctualit&eacute; et respect de l&rsquo;environnement.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-green-400 transition-colors">Tonte &amp; bordures</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Taille de haies</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Désherbage</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Nettoyage</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Liens</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#process" className="hover:text-green-400 transition-colors">Comment ça fonctionne</a></li>
              <li><a href="#pricing" className="hover:text-green-400 transition-colors">Tarification</a></li>
              <li><a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Mentions légales</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Conditions d&rsquo;utilisation</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Politique de confidentialit&eacute;</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center text-xs text-gray-500">
              <p className="mb-2">
                © {currentYear} Terre Paysage. Tous droits réservés. Les devis sont gratuits et sans engagement. 
                Tarifs variables selon surface et accès du jardin.
              </p>
              <p>
                Siège social : Région Rhône-Alpes | SIRET : [À compléter] | Contact : contact@terrepaysage.fr
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <a
                href="https://www.instagram.com/jardinclair" // Remplacez par le vrai lien si besoin
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Jardin Clair"
                className="hover:text-green-400 transition-colors text-2xl"
              >
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.26 0a1.13 1.13 0 0 1 2.26 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
