import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';

const INFOS = [
  ['Capacité invités en journée', 'À confirmer'],
  ['Capacité réception', 'Selon configuration'],
  ['Nombre de couchages', '22 couchages à confirmer commercialement'],
  ['Parking', 'Parking disponible sur le domaine, capacité à confirmer'],
  ['Pool house', '250 m²'],
  ['Piscine', 'Intérieure, accessible pendant le séjour'],
  ['Sauna', 'Accessible pendant le séjour'],
  ['Barnums', 'Possibles en supplément avec partenaire'],
  ['Traiteur', 'Possible avec partenaire'],
  ['DJ', 'Possible avec partenaire'],
  ['Barman', 'Possible avec partenaire'],
  ['Visite', 'Possible uniquement sur rendez-vous'],
  ['Horaires possibles', 'À préciser selon formule, événement et conditions du domaine'],
  ['Paiement', 'Acompte Stripe possible après validation commerciale'],
  ['Contact', 'WhatsApp / appel commercial'],
];

export function InformationsEssentielles() {
  return (
    <section id="informations" className="bg-navy py-24 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="Informations pratiques"
            title="Informations essentielles du domaine"
            subtitle="Les données non validées restent indiquées à confirmer ou selon configuration afin de ne pas promettre un chiffre non vérifié."
            align="center"
            light
          />
        </RevealWrapper>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {INFOS.map(([label, value], index) => (
            <RevealWrapper key={label} animation="fade-in" delay={index * 35}>
              <div className="h-full border border-white/10 bg-white/5 p-5 rounded-sm hover:border-gold/30 transition-colors">
                <p className="font-headline text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-3">
                  {label}
                </p>
                <p className="font-sans font-light text-white/75 text-sm leading-relaxed">
                  {value}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
