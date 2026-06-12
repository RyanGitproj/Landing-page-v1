import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';
import piscineImg from '../../assets/images/Piscine.jpeg';

const POOL_HOUSE_POINTS = [
  'Pool house 250 m²',
  'Piscine intérieure',
  'Sauna',
  'Accessible 24h/24 pendant le séjour',
  'Idéal pool party',
  'DJ / barman / traiteur possibles',
  'Espace abrité',
];

export function PoolHouse() {
  return (
    <section id="pool-house" className="bg-cream py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <RevealWrapper animation="slide-right">
          <div>
            <SectionTitle
              tag="Pool house & piscine"
              title="Un pool house de 250 m² pour créer un moment unique"
              subtitle="Le Domaine des Élégances dispose d'un véritable pool house de 250 m² avec piscine intérieure et sauna, accessible pendant toute la durée de votre séjour, 24h/24 et 7j/7."
              align="left"
            />

            <div className="space-y-5 font-sans font-light text-warm leading-relaxed">
              <p>
                Cet espace est idéal pour les pool parties, les moments de détente, les fêtes privées,
                les anniversaires, les EVG/EVJF et les événements entre amis.
              </p>
              <p>
                Avec nos partenaires DJ, traiteur et barman, cet espace peut devenir un véritable lieu
                d'expérience, festif, confortable et à l'abri, tout en limitant les problématiques liées
                aux nuisances sonores extérieures.
              </p>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper animation="slide-left" delay={150}>
          <div className="relative">
            <img
              src={piscineImg}
              alt="Pool house avec piscine intérieure du Domaine des Élégances"
              className="w-full aspect-[4/5] md:aspect-[5/4] object-cover rounded-sm shadow-2xl"
              loading="lazy"
            />
            <div className="absolute inset-x-6 bottom-6 bg-navy/90 backdrop-blur-sm border border-gold/30 p-5">
              <p className="font-headline text-[10px] uppercase tracking-[0.24em] text-gold mb-3">
                Points clés
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {POOL_HOUSE_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-white/80 text-sm font-sans">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
