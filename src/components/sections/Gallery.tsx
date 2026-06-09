import { useState, useEffect, useCallback } from 'react';
import { RevealWrapper } from '../ui/RevealWrapper';
import { GALLERY_IMAGES } from '../../constants';
import type { GalleryImage } from '../../types';

// ============================================================
// Galerie cinématique — images plein écran empilées,
// layout dramatique, lightbox cinéma avec fond noir
// ============================================================

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    },
    [selectedImage]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  return (
    <section
      id="galerie"
      className="bg-charcoal py-24 md:py-36"
      aria-label="Galerie photos du domaine"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Titre */}
        <RevealWrapper animation="fade-up">
          <div className="mb-16 md:mb-24">
            <p className="scene-number mb-6">03 · Galerie</p>
            <h2 className="font-display font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Le cadre,{' '}
              <span className="italic font-normal text-gold">en images</span>
            </h2>
          </div>
        </RevealWrapper>

        {/* Grille cinématique — layout asymétrique dramatique */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((image, index) => {
            // Layout asymétrique : les images ont des tailles variées
            const layouts = [
              'col-span-12 md:col-span-7 aspect-[16/10]',   // Grande à gauche
              'col-span-6 md:col-span-5 aspect-square',      // Carrée à droite
              'col-span-6 md:col-span-4 aspect-[3/4]',       // Portrait
              'col-span-12 md:col-span-8 aspect-[21/9]',     // Panoramique
              'col-span-6 md:col-span-5 aspect-[4/5]',       // Portrait
              'col-span-6 md:col-span-7 aspect-[16/10]',     // Paysage
              'col-span-12 md:col-span-6 aspect-[16/10]',    // Moyenne
              'col-span-12 md:col-span-6 aspect-[16/10]',    // Moyenne
            ];

            return (
              <RevealWrapper
                key={image.id}
                animation="fade-in"
                delay={index * 80}
                className={layouts[index]}
              >
                <button
                  onClick={() => setSelectedImage(image)}
                  className="group relative w-full h-full overflow-hidden focus-gold block"
                  aria-label={`Voir en grand : ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Overlay subtil au hover — pas d'icône, juste un fondu */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500" />
                  {/* Texte alt visible au hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-sans font-light text-white/80 text-xs tracking-wider">
                      {image.alt}
                    </p>
                  </div>
                </button>
              </RevealWrapper>
            );
          })}
        </div>
      </div>

      {/* Lightbox cinéma — plein écran noir */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image agrandie : ${selectedImage.alt}`}
        >
          {/* Bouton fermer — minimal */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white/40 hover:text-gold transition-colors duration-300 focus-gold z-10"
            aria-label="Fermer la lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          {/* Légende en bas */}
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-sans font-light text-white/30 text-xs tracking-[0.2em] uppercase">
            {selectedImage.alt}
          </p>

          {/* Image centrée */}
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
