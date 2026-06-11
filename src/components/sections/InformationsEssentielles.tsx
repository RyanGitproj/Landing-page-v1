import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';

// ============================================================
// Informations Essentielles
// ============================================================

const INFOS = [
  {
    label: 'Capacité réception',
    value: 'Selon configuration (barnum / cocktail / repas assis) - À confirmer',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    label: 'Couchages',
    value: (
      <div className="space-y-4">
        <div>
          <p className="font-medium text-white mb-1">Résidence principale</p>
          <ul className="list-disc list-outside ml-4 space-y-1">
            <li>Chambre du RDC : un lit double et un canapé-lit (4 personnes)</li>
            <li>Chambre à l’étage 1 : un lit double et un canapé (4 personnes)</li>
            <li>Chambre à l’étage 2 : un lit double et un canapé-lit (4 personnes)</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-white mb-1">Dépendances</p>
          <ul className="list-disc list-outside ml-4 space-y-1">
            <li>Dépendance 1 : un canapé-lit et un lit double (4 personnes)</li>
            <li>Dépendance 2 : un canapé-lit, un lit double, deux lits simples (6 personnes)</li>
          </ul>
        </div>
        <p className="font-semibold text-gold mt-2">Capacité totale : 22 couchages</p>
      </div>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16"></path>
        <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
        <path d="M2 17h20"></path>
        <path d="M6 8v9"></path>
      </svg>
    ),
  },
  {
    label: 'Parking',
    value: 'Sur le domaine (capacité à confirmer)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    label: 'Configuration',
    value: 'Barnums de réception installables',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"></path>
        <path d="M3 10h18"></path>
        <path d="M5 6l7-3 7 3"></path>
        <path d="M4 10v11"></path>
        <path d="M20 10v11"></path>
        <path d="M8 14v3"></path>
        <path d="M12 14v3"></path>
        <path d="M16 14v3"></path>
      </svg>
    ),
  },
  {
    label: 'Prestataires partenaires',
    value: 'Traiteurs, décorateurs, DJ, photographes...',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    label: 'Acompte Stripe après validation',
    value: 'Réservation sécurisée et flexible',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
];

export function InformationsEssentielles() {
  return (
    <section id="informations" className="bg-navy py-24 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="Fiche technique"
            title="Informations essentielles"
            align="center"
            light
          />
        </RevealWrapper>

        <div className="mt-16 bg-white/5 border border-white/10 rounded-lg overflow-hidden">
          <ul className="divide-y divide-white/10">
            {INFOS.map((info, index) => (
              <RevealWrapper key={info.label} animation="fade-in" delay={index * 50}>
                <li className="flex flex-col md:flex-row md:items-center p-6 md:px-8 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 md:w-1/3 mb-2 md:mb-0">
                    <span className="text-gold/70">{info.icon}</span>
                    <span className="font-sans font-medium text-white/90 text-sm md:text-base uppercase tracking-wider">
                      {info.label}
                    </span>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <span className="font-sans font-light text-white/70 text-sm md:text-base">
                      {info.value}
                    </span>
                  </div>
                </li>
              </RevealWrapper>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
