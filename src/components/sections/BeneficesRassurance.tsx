import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';

// ============================================================
// Réassurance & Bénéfices
// ============================================================

const REASSURANCES = [
  {
    id: 'photos',
    title: 'Photos réelles',
    subtitle: 'du domaine',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    ),
  },
  {
    id: 'reponse',
    title: 'Réponse rapide',
    subtitle: 'sous 1h',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <polyline points="12 7 12 11 15 11"></polyline>
      </svg>
    ),
  },
  {
    id: 'accompagnement',
    title: 'Accompagnement',
    subtitle: 'humain',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    id: 'reservation',
    title: 'Réservation',
    subtitle: 'sécurisée',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
];

const BENEFICES = [
  {
    id: 'piscine',
    title: 'Piscine intérieure',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20M2 16h20M2 20h20"></path>
        <path d="M12 2v6"></path>
      </svg>
    ),
  },
  {
    id: 'barnum',
    title: 'Barnums de réception professionnels',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l9-18 9 18M3 21h18"></path>
        <path d="M12 12v9"></path>
      </svg>
    ),
  },
  {
    id: 'jardin',
    title: 'Grand jardin',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21v-8"></path>
        <path d="M12 13a4 4 0 1 0-4-4c0 2.21 1.79 4 4 4z"></path>
        <path d="M12 13a4 4 0 1 1 4-4c0 2.21-1.79 4-4 4z"></path>
      </svg>
    ),
  },
  {
    id: 'parking',
    title: 'Parking sur place',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    id: 'couchages',
    title: 'Couchages sur place',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16"></path>
        <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
        <path d="M2 17h20"></path>
        <path d="M6 8v9"></path>
      </svg>
    ),
  },
  {
    id: 'prestataires',
    title: 'Prestataires & options',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    ),
  },
];

export function BeneficesRassurance() {
  return (
    <section id="rassurance" className="bg-navy py-20 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="Pourquoi nous choisir"
            title="Votre sérénité avant tout"
            align="center"
            light
          />
        </RevealWrapper>

        {/* Section Réassurance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 mb-24">
          {REASSURANCES.map((item, i) => (
            <RevealWrapper key={item.id} animation="fade-up" delay={i * 100}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-display font-semibold text-white text-lg tracking-wide uppercase">
                  {item.title}
                </h4>
                <p className="font-sans font-light text-white/60 text-sm mt-1">
                  {item.subtitle}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Section Bénéfices */}
        <div className="text-center mb-10">
          <h3 className="font-display font-semibold text-gold text-2xl uppercase tracking-widest mb-4">
            Ce que le domaine vous offre
          </h3>
          <div className="cine-line w-16 mx-auto mb-10" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {BENEFICES.map((item, i) => (
            <RevealWrapper key={item.id} animation="scale-in" delay={i * 100}>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center h-full hover:border-gold/30 transition-colors">
                <div className="text-gold/80 mb-4">{item.icon}</div>
                <h4 className="font-sans font-medium text-white/90 text-sm">
                  {item.title}
                </h4>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
