import { useCallback, useEffect, useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';

import heroImg from '../../assets/images/domaine-hero-nuit.jpeg';
import piscineImg from '../../assets/images/pool-house-piscine-interieure.jpeg';
import saunaImg from '../../assets/images/sauna-interieur.jpeg';
import barnumImg from '../../assets/images/reception-barnum-nuit.jpeg';
import grandeSalleImg from '../../assets/images/grande salle.jpeg';
import grandeSalle2Img from '../../assets/images/grande salle 2.jpeg';
import seminaireImg from '../../assets/images/seminaire.jpeg';
import verandaImg from '../../assets/images/veranda.jpeg';
import pianoImg from '../../assets/images/piano.jpeg';
import chambre1Img from '../../assets/images/chambre 1.jpeg';
import chambre2Img from '../../assets/images/chambre 2.jpeg';
import baignoireImg from '../../assets/images/baignoire.jpeg';
import salleEauImg from "../../assets/images/salle d'eau.jpeg";
import salleBainImg from '../../assets/images/salle de bain.jpeg';
import imageImg from '../../assets/images/image.jpeg';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  span: string;
}

// Galerie commerciale — photos réelles uniquement, pas de placeholder
const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'exterieur',
    src: heroImg,
    alt: 'Vue extérieure du domaine',
    title: 'Extérieur du domaine',
    caption: 'Le Domaine des Élégances vu depuis ses espaces extérieurs',
    span: 'col-span-12 md:col-span-7 row-span-2',
  },
  {
    id: 'parc',
    src: imageImg,
    alt: 'Parc du domaine',
    title: 'Parc du domaine',
    caption: 'Le parc du domaine pour vos cocktails, photos et réceptions',
    span: 'col-span-6 md:col-span-5',
  },
  {
    id: 'pool-house',
    src: piscineImg,
    alt: 'Pool house 250 m² avec piscine intérieure',
    title: 'Pool house 250 m²',
    caption: 'Pool house 250 m² avec piscine intérieure',
    span: 'col-span-6 md:col-span-5',
  },
  {
    id: 'sauna',
    src: saunaImg,
    alt: 'Sauna du domaine',
    title: 'Sauna',
    caption: 'Sauna accessible pendant le séjour',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'barnums',
    src: barnumImg,
    alt: 'Barnums professionnels installés dans le parc du domaine',
    title: 'Barnums professionnels',
    caption: 'Barnums professionnels disponibles en supplément avec nos partenaires',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'interieurs',
    src: grandeSalleImg,
    alt: 'Espaces intérieurs du domaine',
    title: 'Espaces intérieurs',
    caption: 'Espaces intérieurs et zones de vie pour le séjour',
    span: 'col-span-12 md:col-span-8 row-span-2',
  },
  {
    id: 'couchages',
    src: chambre1Img,
    alt: 'Couchages sur place',
    title: 'Couchages sur place',
    caption: 'Espaces nuit disponibles sur place, capacité à confirmer commercialement',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'reception',
    src: grandeSalle2Img,
    alt: 'Ambiance réception et tables',
    title: 'Réception & décoration',
    caption: 'Espaces modulables pour vos réceptions privées et événements',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'ambiance-evenementielle',
    src: seminaireImg,
    alt: 'Ambiance événementielle professionnelle',
    title: 'Ambiance événementielle',
    caption: 'Configurations possibles pour événements professionnels et privés',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'chambre-double',
    src: chambre2Img,
    alt: 'Chambre double',
    title: 'Chambre double',
    caption: 'Chambre double pour couchages sur place',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'veranda',
    src: verandaImg,
    alt: 'Véranda lumineuse du domaine',
    title: 'Véranda',
    caption: 'Véranda lumineuse pour moments de détente et accueil',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'salon-piano',
    src: pianoImg,
    alt: 'Salon avec piano',
    title: 'Salon piano',
    caption: 'Espace intérieur de caractère pour accueillir vos invités',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'baignoire',
    src: baignoireImg,
    alt: 'Baignoire de standing',
    title: 'Baignoire',
    caption: 'Salle de bain de standing pour les séjours sur place',
    span: 'col-span-12 md:col-span-5',
  },
  {
    id: 'salle-bain',
    src: salleBainImg,
    alt: 'Salle de bain élégante',
    title: 'Salle de bain',
    caption: 'Salle de bain élégante pour les couchages du domaine',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'salle-eau',
    src: salleEauImg,
    alt: "Salle d'eau moderne",
    title: "Salle d'eau",
    caption: "Salle d'eau moderne pour les invités hébergés",
    span: 'col-span-6 md:col-span-3',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
      const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedImage(GALLERY_IMAGES[(currentIndex + 1) % GALLERY_IMAGES.length]);
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedImage(GALLERY_IMAGES[(currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length]);
      }
    },
    [selectedImage]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const goToNext = () => {
    if (!selectedImage) return;
    const i = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
    setSelectedImage(GALLERY_IMAGES[(i + 1) % GALLERY_IMAGES.length]);
  };

  const goToPrev = () => {
    if (!selectedImage) return;
    const i = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
    setSelectedImage(GALLERY_IMAGES[(i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length]);
  };

  return (
    <section
      id="galerie"
      className="bg-navy py-24 md:py-36 px-6 lg:px-12"
      aria-label="Galerie photos du domaine"
    >
      <div className="max-w-[1400px] mx-auto">
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="Galerie"
            title="Découvrez le domaine en images"
            subtitle="Extérieur, parc arboré, pool house 250 m², piscine intérieure, sauna, barnums, couchages et espaces intérieurs — 100% photos réelles du domaine."
            align="center"
            light
          />
        </RevealWrapper>

        <div className="grid grid-cols-12 gap-2 md:gap-3 mt-16 md:mt-24 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
          {GALLERY_IMAGES.map((image, index) => (
            <RevealWrapper
              key={image.id}
              animation="fade-in"
              delay={index * 50}
              className={image.span}
            >
              <button
                onClick={() => setSelectedImage(image)}
                className="group relative w-full h-full overflow-hidden block focus-gold text-left"
                aria-label={`Voir en grand : ${image.title}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="w-8 h-px bg-gold mb-3" />
                  <p className="font-display font-semibold text-white text-sm md:text-base tracking-wider drop-shadow-lg">
                    {image.title}
                  </p>
                  <p className="font-sans font-light text-white/65 text-xs mt-2 leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </button>
            </RevealWrapper>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image agrandie : ${selectedImage.title}`}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors duration-300 z-10"
            aria-label="Fermer la lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-gold transition-colors duration-300 z-10 p-2"
            aria-label="Image précédente"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-gold transition-colors duration-300 z-10 p-2"
            aria-label="Image suivante"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center max-w-[80vw]">
            <p className="font-display font-semibold text-white text-lg tracking-wider mb-1">
              {selectedImage.title}
            </p>
            <p className="font-sans font-light text-white/50 text-sm">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
