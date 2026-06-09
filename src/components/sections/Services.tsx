import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';
import { SERVICES } from '../../constants';

// ============================================================
// Services cinématique — alternance split-screen gauche/droite
// Image plein côté + texte côté opposé. Comme des scènes de film.
// ============================================================

export function Services() {
  return (
    <section
      id="evenements"
      className="bg-charcoal"
      aria-label="Nos événements"
    >
      {/* Titre de section — sur fond sombre, centré */}
      <div className="py-20 md:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="01 · Nos événements"
            title="Chaque célébration mérite son décor"
            subtitle="Quatre expériences uniques, un seul standard : l'excellence."
            align="left"
            light
          />
        </RevealWrapper>
      </div>

      {/* Scènes split-screen alternées */}
      {SERVICES.map((service, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={service.id}
            className="split-screen min-h-[70vh] md:min-h-screen"
          >
            {/* Image — plein côté */}
            <RevealWrapper
              animation={isReversed ? 'slide-left' : 'slide-right'}
              className={`relative overflow-hidden ${isReversed ? 'md:order-2' : ''}`}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover min-h-[40vh] md:min-h-full"
                loading="lazy"
              />
              {/* Vignette douce */}
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 to-transparent" />
            </RevealWrapper>

            {/* Contenu texte — côté opposé */}
            <div
              className={`flex items-center bg-charcoal px-8 md:px-16 lg:px-24 py-16 md:py-0 ${
                isReversed ? 'md:order-1' : ''
              }`}
            >
              <RevealWrapper
                animation={isReversed ? 'slide-right' : 'slide-left'}
                delay={200}
              >
                <div className="max-w-md">
                  {/* Numéro de scène */}
                  <p className="scene-number mb-6">
                    Scène {String(index + 1).padStart(2, '0')}
                  </p>

                  {/* Titre */}
                  <h3 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
                    {service.title}
                  </h3>

                  {/* Ligne dorée */}
                  <div className="cine-line w-12 mb-6" />

                  {/* Description */}
                  <p className="font-sans font-light text-white/50 text-sm md:text-base leading-relaxed">
                    {service.description}
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
