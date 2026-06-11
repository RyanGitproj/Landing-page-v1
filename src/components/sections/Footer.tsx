import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAV_LINKS } from '../../constants';

// ============================================================
// Footer cinématique — sombre, minimal, une seule ligne de liens
// Style générique de fin de film : logo + copyright
// ============================================================

export function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer
      className="bg-navy border-t border-white/5"
      role="contentinfo"
      aria-label="Pied de page"
    >
      {/* Section principale */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo — col large */}
          <div className="md:col-span-5">
            <button
              onClick={() => scrollTo('#')}
              className="group flex flex-col items-start leading-none mb-6 focus-gold"
              aria-label="Retour en haut de page"
            >
              <span className="font-display font-bold text-2xl text-white group-hover:text-gold transition-colors duration-300">
                Célébrations
              </span>
              <span className="font-sans font-light text-[10px] tracking-[0.4em] uppercase text-gold/50 mt-1">
                Voyages France
              </span>
            </button>

            <p className="font-sans font-light text-white/30 text-sm leading-relaxed max-w-sm">
              Villas, châteaux et domaines privatisés pour vos événements
              de prestige en France et DOM-TOM.
            </p>

            <p className="font-sans text-gold/60 text-sm mt-4">
              célébrations-voyages.fr
            </p>

            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="font-sans font-light text-white/25 text-xs uppercase tracking-wider mb-2">
                Téléphone commercial
              </p>
              <p className="font-sans text-white/40 text-sm">
                <span className="italic">à confirmer</span>
              </p>
            </div>

          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="font-headline font-bold text-[10px] uppercase tracking-[0.25em] text-white/20 mb-6">
              Navigation
            </p>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-sans font-light text-white/40 text-sm hover:text-gold transition-colors duration-300 focus-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div className="md:col-span-4">
            <p className="font-headline font-bold text-[10px] uppercase tracking-[0.25em] text-white/20 mb-6">
              Informations
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-sans font-light text-white/40 text-sm cursor-default">
                  Mentions légales
                </span>
              </li>
              <li>
                <span className="font-sans font-light text-white/40 text-sm cursor-default">
                  Politique de confidentialité
                </span>
              </li>
              <li>
                <span className="font-sans font-light text-white/40 text-sm cursor-default">
                  Conditions générales
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright — tout en bas */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/15 text-[10px] tracking-[0.15em] uppercase">
            © 2026 Célébrations Voyages France — Tous droits réservés
          </p>
          <button
            onClick={() => scrollTo('#')}
            className="font-sans text-white/15 text-[10px] tracking-[0.15em] uppercase hover:text-gold/40 transition-colors duration-300 focus-gold"
          >
            Retour en haut ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
