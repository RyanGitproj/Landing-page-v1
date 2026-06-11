import { useState, useEffect, useCallback } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';

// Import de TOUTES les photos réelles du domaine
import heroImg from '../../assets/images/hero-bg.jpeg';
import piscineImg from '../../assets/images/Piscine.jpeg';
import grandeSalleImg from '../../assets/images/grande salle.jpeg';
import grandeSalle2Img from '../../assets/images/grande salle 2.jpeg';
import seminaireImg from '../../assets/images/seminaire.jpeg';
import verandaImg from '../../assets/images/veranda.jpeg';
import cuisineImg from '../../assets/images/cuisine.jpeg';
import pianoImg from '../../assets/images/piano.jpeg';
import chambre1Img from '../../assets/images/chambre 1.jpeg';
import chambre2Img from '../../assets/images/chambre 2.jpeg';
import chambre3Img from '../../assets/images/chambre 3.jpeg';
import chambre4Img from '../../assets/images/chambre 4.jpeg';
import baignoireImg from '../../assets/images/baignoire.jpeg';
import salleEauImg from "../../assets/images/salle d'eau.jpeg";
import salleBainImg from '../../assets/images/salle de bain.jpeg';
import imageImg from '../../assets/images/image.jpeg';

// ============================================================
// Galerie cinématique — layout asymétrique dramatique
// Grille masonry-like avec tailles variées, hover premium
// ============================================================

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  // Tailwind classes pour le positionnement dans la grille 12 colonnes
  span: string;
}

// Layout asymétrique inspiré du cinéma — alternance de grands et petits formats
const GALLERY_IMAGES: GalleryItem[] = [
  // --- Rangée 1 : héro large + portrait ---
  {
    id: 'exterieur',
    src: heroImg,
    alt: 'Vue extérieure du domaine',
    title: 'Le Domaine',
    span: 'col-span-12 md:col-span-7 row-span-2',
  },
  {
    id: 'veranda',
    src: verandaImg,
    alt: 'Véranda lumineuse',
    title: 'Véranda',
    span: 'col-span-6 md:col-span-5',
  },
  {
    id: 'piano',
    src: pianoImg,
    alt: 'Piano à queue dans le salon',
    title: 'Salon Piano',
    span: 'col-span-6 md:col-span-5',
  },
  // --- Rangée 2 : trio moyen ---
  {
    id: 'grande-salle',
    src: grandeSalleImg,
    alt: 'Grande salle de réception',
    title: 'Salle de Réception',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'seminaire',
    src: seminaireImg,
    alt: 'Espace séminaire professionnel',
    title: 'Espace Séminaire',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'grande-salle-2',
    src: grandeSalle2Img,
    alt: 'Grande salle — vue alternative',
    title: 'Réception',
    span: 'col-span-6 md:col-span-4',
  },
  // --- Rangée 3 : piscine large + cuisine ---
  {
    id: 'piscine',
    src: piscineImg,
    alt: 'Piscine intérieure chauffée',
    title: 'Piscine Intérieure',
    span: 'col-span-12 md:col-span-8 row-span-2',
  },
  {
    id: 'cuisine',
    src: cuisineImg,
    alt: 'Cuisine équipée professionnelle',
    title: 'Cuisine',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'image',
    src: imageImg,
    alt: 'Vue du domaine',
    title: 'Ambiance',
    span: 'col-span-6 md:col-span-4',
  },
  // --- Rangée 4 : les chambres ---
  {
    id: 'chambre-1',
    src: chambre1Img,
    alt: 'Chambre principale',
    title: 'Suite Principale',
    span: 'col-span-6 md:col-span-3',
  },
  {
    id: 'chambre-2',
    src: chambre2Img,
    alt: 'Chambre double',
    title: 'Chambre Double',
    span: 'col-span-6 md:col-span-3',
  },
  {
    id: 'chambre-3',
    src: chambre3Img,
    alt: 'Chambre avec vue jardin',
    title: 'Chambre Jardin',
    span: 'col-span-6 md:col-span-3',
  },
  {
    id: 'chambre-4',
    src: chambre4Img,
    alt: 'Chambre cosy',
    title: 'Chambre Cosy',
    span: 'col-span-6 md:col-span-3',
  },
  // --- Rangée 5 : salles de bain en trio ---
  {
    id: 'baignoire',
    src: baignoireImg,
    alt: 'Baignoire de standing',
    title: 'Baignoire',
    span: 'col-span-12 md:col-span-5',
  },
  {
    id: 'salle-bain',
    src: salleBainImg,
    alt: 'Salle de bain élégante',
    title: 'Salle de Bain',
    span: 'col-span-6 md:col-span-4',
  },
  {
    id: 'salle-eau',
    src: salleEauImg,
    alt: "Salle d'eau moderne",
    title: "Salle d'Eau",
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
      // Navigation au clavier dans la lightbox
      const currentIndex = GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const next = (currentIndex + 1) % GALLERY_IMAGES.length;
        setSelectedImage(GALLERY_IMAGES[next]);
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        setSelectedImage(GALLERY_IMAGES[prev]);
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
        {/* Titre */}
        <RevealWrapper animation="fade-up">
          <SectionTitle
            tag="En images"
            title="Le Domaine en toute transparence"
            subtitle="Découvrez chaque espace du Domaine des Élégances à travers nos photos réelles."
            align="center"
            light
          />
        </RevealWrapper>

        {/* Grille asymétrique cinématique */}
        <div className="grid grid-cols-12 gap-2 md:gap-3 mt-16 md:mt-24 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
          {GALLERY_IMAGES.map((image, index) => (
            <RevealWrapper
              key={image.id}
              animation="fade-in"
              delay={index * 60}
              className={image.span}
            >
              <button
                onClick={() => setSelectedImage(image)}
                className="group relative w-full h-full overflow-hidden block focus-gold"
                aria-label={`Voir en grand : ${image.title}`}
              >
                {/* Photo */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />

                {/* Overlay au hover — dégradé bas + titre */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Ligne dorée + Titre */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="w-8 h-px bg-gold mb-2" />
                  <p className="font-display font-semibold text-white text-sm md:text-base tracking-wider drop-shadow-lg">
                    {image.title}
                  </p>
                </div>

                {/* Icône zoom subtile */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white/60">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </button>
            </RevealWrapper>
          ))}
        </div>
      </div>

      {/* ====== Lightbox cinéma ====== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image agrandie : ${selectedImage.title}`}
        >
          {/* Bouton fermer */}
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

          {/* Flèche précédente */}
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

          {/* Flèche suivante */}
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

          {/* Image centrée */}
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Légende en bas */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display font-semibold text-white text-lg tracking-wider mb-1">
              {selectedImage.title}
            </p>
            <p className="font-sans font-light text-white/30 text-xs tracking-[0.2em] uppercase">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
