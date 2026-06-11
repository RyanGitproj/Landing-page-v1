import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';

// ============================================================
// Réassurance & Bénéfices
// Basé sur les 5 piliers d'audit : Proximité, Photos réelles, 
// Sélection, Accompagnement, Visite possible
// ============================================================

const REASSURANCES = [
  {
    id: 'proximite',
    title: 'Proximité immédiate',
    subtitle: 'Un lieu accessible pour tous vos invités',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    id: 'photos',
    title: '100% Photos réelles',
    subtitle: 'Aucune image générique ou trompeuse',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
  },
  {
    id: 'selection',
    title: 'Sélection rigoureuse',
    subtitle: 'Un domaine trié sur le volet pour l\'excellence',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    id: 'accompagnement',
    title: 'Accompagnement',
    subtitle: 'Un conseiller dédié à votre écoute',
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
    id: 'visite',
    title: 'Visite possible',
    subtitle: 'Venez découvrir le lieu sur rendez-vous',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
];

const BENEFICES = [
  {
    id: 'piscine',
    title: 'Piscine intérieure chauffée',
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
    title: 'Grand jardin arboré',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21v-8"></path>
        <path d="M12 13a4 4 0 1 0-4-4c0 2.21 1.79 4 4 4z"></path>
        <path d="M12 13a4 4 0 1 1 4-4c0 2.21-1.79 4-4 4z"></path>
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
];

export function BeneficesRassurance() {
  return (
    <section id="rassurance" className="bg-navy py-20 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="Notre engagement"
            title="Votre sérénité avant tout"
            align="center"
            light
          />
        </RevealWrapper>

        {/* Section Réassurance (Les 5 piliers) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16 mb-24">
          {REASSURANCES.map((item, i) => (
            <RevealWrapper key={item.id} animation="fade-up" delay={i * 100}>
              <div className="flex flex-col items-center text-center group w-40 md:w-48">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-display font-semibold text-white text-md tracking-wide uppercase">
                  {item.title}
                </h4>
                <p className="font-sans font-light text-white/60 text-xs mt-2">
                  {item.subtitle}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Section Bénéfices */}
        <div className="text-center mb-10">
          <h3 className="font-display font-semibold text-gold text-2xl uppercase tracking-widest mb-4">
            L'excellence du domaine
          </h3>
          <div className="cine-line w-16 mx-auto mb-10" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
