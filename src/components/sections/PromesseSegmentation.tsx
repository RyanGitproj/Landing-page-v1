import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';

// Import des images
import ceremonieImg from '../../assets/images/grande salle.jpeg';
import seminaireImg from '../../assets/images/seminaire.jpeg';
import anniversaireImg from '../../assets/images/Piscine.jpeg';

// ============================================================
// Promesse et Segmentation — Style cinématique split-screen
// ============================================================

const SEGMENTS = [
  {
    id: 'ceremonies',
    title: 'Cérémonies & réceptions familiales',
    description: 'Mariages, baptêmes, communions, bar mitzvah et réceptions familiales. Un cadre élégant et chaleureux pour réunir vos proches dans un lieu privé d\'exception.',
    imageUrl: ceremonieImg,
  },
  {
    id: 'seminaires',
    title: 'Séminaires & événements corporate',
    description: 'Séminaires, team building, business club, cocktails et garden parties professionnelles. Un environnement calme et valorisant pour vos équipes et partenaires.',
    imageUrl: seminaireImg,
  },
  {
    id: 'anniversaires',
    title: 'Anniversaires & fêtes privées',
    description: "Anniversaires d'exception, EVG/EVJF, cousinades et fêtes entre amis. Un lieu privé et mémorable pour vos invités, avec piscine intérieure et grand jardin.",
    imageUrl: anniversaireImg,
  },
];

export function PromesseSegmentation() {
  return (
    <section
      id="segments"
      className="bg-navy"
      aria-label="Nos espaces et événements"
    >
      {/* Phrase de segmentation immédiate */}
      <div className="py-20 md:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="Pour tous vos événements"
            title="Le cadre idéal pour vos moments précieux"
            subtitle="Mariages, baptêmes, communions, bar mitzvah • Séminaires, team building, garden party, business club • Anniversaires d'exception, EVG/EVJF (fêtes des futurs mariés entre amis)."
            align="center"
            light
          />
        </RevealWrapper>
      </div>

      {/* Scènes split-screen alternées (style conservé de l'ancien site) */}
      {SEGMENTS.map((segment, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={segment.id}
            className="split-screen min-h-[70vh] md:min-h-screen"
          >
            {/* Image — plein côté */}
            <RevealWrapper
              animation={isReversed ? 'slide-left' : 'slide-right'}
              className={`relative overflow-hidden ${isReversed ? 'md:order-2' : ''}`}
            >
              <img
                src={segment.imageUrl}
                alt={segment.title}
                className="w-full h-full object-cover min-h-[40vh] md:min-h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent" />
            </RevealWrapper>

            {/* Contenu texte — côté opposé */}
            <div
              className={`flex items-center bg-navy px-8 md:px-16 lg:px-24 py-16 md:py-0 ${
                isReversed ? 'md:order-1' : ''
              }`}
            >
              <RevealWrapper
                animation={isReversed ? 'slide-right' : 'slide-left'}
                delay={200}
              >
                <div className="max-w-md">
                  <p className="scene-number mb-6 text-gold">
                    Option {String(index + 1).padStart(2, '0')}
                  </p>

                  <h3 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
                    {segment.title}
                  </h3>

                  <div className="cine-line w-12 mb-6 bg-gold" />

                  <p className="font-sans font-light text-white/70 text-base md:text-lg leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </RevealWrapper>
            </div>
          </div>
        );
      })}
    </section>
  );
}
