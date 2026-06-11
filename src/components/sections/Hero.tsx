import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Button } from '../ui/Button';

// Importer l'image de fond
import heroBg from '../../assets/images/hero-bg.jpeg';

// ============================================================
// Hero — mobile-first, premium
// ============================================================

export function Hero() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-navy pt-20"
      aria-label="Section héro — Présentation du domaine"
    >
      {/* Image de fond avec Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Domaine des Élégances"
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-navy/60" /> {/* Overlay sombre pour la lisibilité */}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 text-center md:text-left pt-12 md:pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Titre */}
          <h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] mb-6 animate-fade-up drop-shadow-md"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            Privatisez le<br />
            <span className="text-gold">Domaine des Élégances</span>
          </h1>

          {/* Sous-titre */}
          <p
            className="font-sans font-light text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-up drop-shadow-sm"
            style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
          >
            Un domaine élégant avec piscine intérieure, grand jardin et barnums de réception professionnels pour vos événements privés, familiaux et professionnels.
          </p>

          {/* CTA — deux boutons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo('#disponibilites')}
              className="flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Voir les disponibilités
            </Button>
            
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="w-full flex items-center justify-center gap-2 border-white/30 text-white hover:bg-white/10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Recevoir la brochure WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
