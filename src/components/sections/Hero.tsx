import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Button } from '../ui/Button';
import { RevealWrapper } from '../ui/RevealWrapper';
import { NICHES } from '../../constants';
import heroBg from '../../assets/images/hero-bg.jpeg';

// ============================================================
// Hero — mobile-first, premium, conversion immédiate
// Contient les 3 portes d'entrée (niches) visibles sans scroller
// ============================================================

export function Hero() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-end md:justify-center overflow-hidden bg-navy pb-10 md:pb-0 pt-24"
      aria-label="Section héro — Présentation du domaine"
    >
      {/* Image de fond avec effet cinématique */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Domaine des Élégances"
          className="w-full h-full object-cover animate-ken-burns opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/30" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
        
        {/* Colonne gauche : Promesse immédiate */}
        <div className="max-w-2xl text-center md:text-left">
          <RevealWrapper animation="fade-up" delay={200}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-4 drop-shadow-lg">
              Privatisez le<br />
              <span className="text-gold">Domaine des Élégances</span>
            </h1>
            <p className="font-sans font-light text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl drop-shadow-md mx-auto md:mx-0">
              Un domaine élégant avec piscine intérieure, grand jardin et barnums de réception professionnels pour vos événements privés, familiaux et professionnels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo('#disponibilites')}
                className="w-full sm:w-auto"
              >
                Vérifier les disponibilités
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo('#disponibilites')}
                className="w-full sm:w-auto border-white/30"
              >
                Recevoir la brochure
              </Button>
            </div>
          </RevealWrapper>
        </div>

        {/* Colonne droite : Les 3 portes d'entrée (Niches) */}
        <div className="w-full md:w-80 flex flex-col gap-3">
          <RevealWrapper animation="fade-up" delay={500}>
            <p className="font-headline text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-2 md:text-right hidden md:block">
              Sélectionnez votre projet
            </p>
            {NICHES.map((niche, index) => (
              <button
                key={niche.id}
                onClick={() => scrollTo('#segments')}
                className="w-full flex items-center justify-between p-4 bg-navy/40 hover:bg-navy/80 border border-white/10 hover:border-gold/50 backdrop-blur-sm transition-all duration-300 group text-left rounded-sm"
                style={{ animationDelay: `${700 + (index * 100)}ms`, animationFillMode: 'both' }}
              >
                <div>
                  <h3 className="font-display font-bold text-white text-lg group-hover:text-gold transition-colors">
                    {niche.title}
                  </h3>
                  <p className="font-sans font-light text-white/50 text-[11px] uppercase tracking-wider mt-1">
                    {niche.subtitle}
                  </p>
                </div>
                <div className="text-white/30 group-hover:text-gold transition-colors ml-4 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            ))}
          </RevealWrapper>
        </div>

      </div>
    </section>
  );
}
