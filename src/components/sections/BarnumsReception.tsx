import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';
import heroImg from '../../assets/images/hero-bg.jpeg';
import receptionImg from '../../assets/images/grande salle 2.jpeg';

const BARNUM_POINTS = [
  'Barnums professionnels en supplément',
  'Installation par partenaire',
  'Configuration selon événement',
  'Tables, décoration, traiteur, DJ et lumière possibles',
  'Photos partenaires à ajouter',
];

export function BarnumsReception() {
  return (
    <section id="barnums" className="bg-navy py-24 md:py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="Barnums & réception"
            title="Une réception professionnelle dans le parc du domaine"
            subtitle="Le Domaine ne dispose pas d'une salle de réception fixe. En revanche, nous travaillons avec des partenaires spécialisés capables d'installer des barnums de réception professionnels dans le parc du domaine."
            align="center"
            light
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealWrapper animation="slide-right">
            <div className="grid grid-cols-2 gap-3">
              <figure className="relative overflow-hidden rounded-sm">
                <img
                  src={heroImg}
                  alt="Parc du domaine pouvant accueillir des installations de réception"
                  className="w-full h-72 md:h-96 object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-navy/80 p-4 font-sans text-xs text-white/70">
                  Le parc du domaine pour vos cocktails et réceptions
                </figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-sm mt-10">
                <img
                  src={receptionImg}
                  alt="Exemple d'ambiance de réception à compléter avec photos barnums partenaires"
                  className="w-full h-72 md:h-96 object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-navy/80 p-4 font-sans text-xs text-white/70">
                  Photos barnums partenaires à ajouter
                </figcaption>
              </figure>
            </div>
          </RevealWrapper>

          <RevealWrapper animation="slide-left" delay={150}>
            <div className="space-y-8">
              <p className="font-sans font-light text-white/70 text-base md:text-lg leading-relaxed">
                Ces installations permettent de créer une véritable salle de réception élégante en plein
                cœur du domaine, adaptée aux mariages, baptêmes, bar mitzvah, séminaires, anniversaires,
                cocktails et réceptions privées.
              </p>

              <div className="border border-gold/40 bg-gold/10 px-6 py-5">
                <p className="font-headline uppercase tracking-[0.18em] text-gold text-xs mb-2">
                  À retenir
                </p>
                <p className="font-display font-bold text-white text-xl">
                  Option disponible en supplément avec nos partenaires.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BARNUM_POINTS.map((point) => (
                  <div key={point} className="border border-white/10 bg-white/5 p-4">
                    <p className="font-sans text-white/80 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
