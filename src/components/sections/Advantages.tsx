import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';
import { ADVANTAGES } from '../../constants';

// ============================================================
// Avantages cinématique — section sombre, grille aérée,
// grands chiffres dorés, lignes fines, pas d'emojis
// ============================================================

/** Icônes SVG minimalistes — remplacent les emojis pour un style plus cinéma */
const ADVANTAGE_ICONS: Record<string, JSX.Element> = {
  '📍': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  '🏊': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
      <path d="M2 17c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
      <circle cx="12" cy="7" r="3" />
    </svg>
  ),
  '👥': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  '🎯': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  '🎩': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  '🔐': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
};

export function Advantages() {
  return (
    <section
      id="domaine"
      className="bg-cream py-24 md:py-36"
      aria-label="Pourquoi nous choisir"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="02 · Le domaine"
            title="Tout est pensé pour l'exceptionnel"
            subtitle="Un seul lieu, zéro stress, des souvenirs pour toute la vie."
            align="left"
          />
        </RevealWrapper>

        {/* Grille aérée — 2 colonnes desktop, pas de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {ADVANTAGES.map((advantage, index) => (
            <RevealWrapper
              key={advantage.id}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group">
                {/* Numéro doré + icône */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-headline font-bold text-4xl text-gold/20 leading-none mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-2">
                    {ADVANTAGE_ICONS[advantage.icon]}
                  </div>
                </div>

                {/* Titre */}
                <h3 className="font-display font-bold text-navy text-xl md:text-2xl mb-3 tracking-tight">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-light text-warm text-sm leading-relaxed">
                  {advantage.description}
                </p>

                {/* Ligne fine — s'étend au hover */}
                <div className="h-px bg-gold/20 mt-6 w-12 group-hover:w-full transition-all duration-700" />
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
