import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Button } from '../ui/Button';

// ============================================================
// Hero cinématique — plein écran, ken burns sur l'image,
// typographie massive avec révélation séquentielle,
// ambiance ouverture de film
// ============================================================

export function Hero() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden bg-charcoal pt-32"
      aria-label="Section héro — Présentation du domaine"
    >
      {/* Image de fond avec Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Domaine d'exception et jardins somptueux"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Vignette cinématique + gradient bas */}
        <div className="absolute inset-0 cine-vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        {/* Bande noire cinématique en haut — effet letterbox subtil */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-charcoal/80 to-transparent" />
      </div>

      {/* Contenu principal — en bas de l'écran, comme un titre de film */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 md:pb-32">
        <div className="max-w-4xl">
          {/* Tag doré — numéro de scène */}
          <p className="scene-number mb-6 animate-fade-in uppercase tracking-[0.2em]" style={{ animationDelay: '0.5s' }}>
            Célébrations Voyages France
          </p>

          {/* Titre L1 — massif, serif, cinématique */}
          <h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-8 cine-text-shadow animate-fade-up uppercase"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            Un domaine d'exception,
            <br />
            <span className="text-gold">et de prestige avec piscine</span>
          </h1>

          {/* Hook Neuromarketing et Liste de produits */}
          <div
            className="mb-10 animate-fade-up"
            style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
          >
            <p className="font-sans font-bold text-white text-3xl md:text-4xl mb-6 tracking-wide drop-shadow-lg">
              <span className="text-gold">⋙</span> À 15MIN D'ICI...
            </p>
            
            <div className="bg-charcoal/40 backdrop-blur-sm p-6 rounded-lg border border-gold/20 inline-block">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 font-sans font-bold text-white text-lg md:text-xl tracking-wider">
                <li className="flex items-center gap-3"><span className="text-gold text-2xl">•</span> ANNIVERSAIRES</li>
                <li className="flex items-center gap-3"><span className="text-gold text-2xl">•</span> SÉMINAIRES</li>
                <li className="flex items-center gap-3"><span className="text-gold text-2xl">•</span> EVG/EVJF</li>
                <li className="flex items-center gap-3"><span className="text-gold text-2xl">•</span> POOL PARTY</li>
              </ul>
            </div>
          </div>

          {/* CTA — deux boutons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '1.6s', animationFillMode: 'both' }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('#evenements')}
            >
              Découvrir
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollTo('#contact')}
            >
              Nous contacter →
            </Button>
          </div>
        </div>

        {/* URL en bas à droite — comme un watermark de film */}
        <p
          className="hidden md:block absolute bottom-32 right-12 font-sans font-light text-white/20 text-[10px] tracking-[0.3em] uppercase animate-fade-in"
          style={{ animationDelay: '2s', animationFillMode: 'both' }}
        >
          célébrations-voyages.fr
        </p>
      </div>

      {/* Indicateur de scroll — barre verticale dorée qui pulse */}
      <button
        onClick={() => scrollTo('#evenements')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 group focus-gold"
        aria-label="Défiler vers le contenu"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/30 group-hover:text-gold/60 transition-colors duration-300">
          Scroll
        </span>
        <span className="block w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-float" />
      </button>
    </section>
  );
}
