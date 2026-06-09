// ============================================================
// Données statiques — Célébrations Voyages France
// Toutes les constantes sont ici, jamais en dur dans les composants
// ============================================================

import type { NavLink, Service, Advantage, GalleryImage } from '../types';

/** Liens de navigation principaux */
export const NAV_LINKS: NavLink[] = [
  { id: 'nav-events', label: 'Événements', href: '#evenements' },
  { id: 'nav-domaine', label: 'Le Domaine', href: '#domaine' },
  { id: 'nav-galerie', label: 'Galerie', href: '#galerie' },
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
];

/** Services / types d'événements proposés */
export const SERVICES: Service[] = [
  {
    id: 'service-anniversaires',
    title: 'VOTRE ANNIVERSAIRE, ÉPIQUE ET INOUBLIABLE',
    description:
      'Ne célébrez pas, marquez l\'histoire. Privatisez notre domaine d\'exception et offrez-vous un moment de pur prestige. De l\'arrivée majestueuse à la soirée mémorable, chaque instant est pensé pour l\'émerveillement absolu.',
    icon: '🎂',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'service-evg-evjf',
    title: 'EVG/EVJF : L\'EXPÉRIENCE ULTIME AVANT LE JOUR J',
    description:
      'Poussez les portes du luxe. Oubliez les standards, vivez l\'extraordinaire. Adrénaline, fête exclusive et confort absolu dans un cadre privé où tout est permis pour célébrer la fin du célibat avec éclat.',
    icon: '🥂',
    imageUrl: 'https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'service-seminaires',
    title: 'SÉMINAIRES : COHÉSION ET PRESTIGE',
    description:
      'Inspirez vos équipes. Changez de dimension avec un séminaire qui impose le respect. Un domaine d\'exception privé pour allier travail intensif et détente luxueuse. L\'impact direct sur la motivation de vos collaborateurs.',
    icon: '💼',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'service-pool-party',
    title: 'POOL PARTY : LE LUXE À L\'ÉTAT PUR',
    description:
      'L\'Oasis dont vous rêviez, juste pour vous. Musique, cocktails et baignade dans une piscine d\'exception. Ne cherchez plus l\'endroit parfait, privatisez-le et vivez une journée hors du temps.',
    icon: '🏊',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80',
  },
];

/** Avantages / arguments de vente */
export const ADVANTAGES: Advantage[] = [
  {
    id: 'advantage-paris',
    title: 'Sanctuaires Accessibles',
    description:
      'L\'exclusivité d\'un havre de paix champêtre à moins d\'une heure des grandes métropoles, préservant l\'accessibilité sans compromettre l\'intimité.',
    icon: '📍',
  },
  {
    id: 'advantage-piscine',
    title: 'Installations Premium',
    description:
      'Piscines intérieures majestueuses, spas et espaces bien-être exclusifs. Des équipements pensés pour une relaxation absolue et intemporelle.',
    icon: '🏊',
  },
  {
    id: 'advantage-capacite',
    title: 'Réceptions Majestueuses',
    description:
      'Des espaces architecturaux modulables capables d\'accueillir les dîners intimes comme les galas prestigieux allant jusqu\'à 200 convives.',
    icon: '👥',
  },
  {
    id: 'advantage-cle-en-main',
    title: 'Orchestration Totale',
    description:
      'Une direction artistique et logistique invisible. De la scénographie au traiteur, nous signons chaque détail de votre séjour pour une tranquillité parfaite.',
    icon: '🎯',
  },
  {
    id: 'advantage-animations',
    title: 'Moments Suspendus',
    description:
      'Des expériences sensorielles uniques : performances artistiques, mixologie, DJ sets privés ou expéditions aventure sur-mesure.',
    icon: '🎩',
  },
  {
    id: 'advantage-privatisation',
    title: 'Exclusivité Absolue',
    description:
      'Votre domaine devient votre royaume fermé au monde. Aucune interférence, seulement vous et vos invités dans un cadre souverain et confidentiel.',
    icon: '🔐',
  },
];

/** Images de la galerie — Images Unsplash premium */
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'gallery-1', src: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=80', alt: 'Architecture classique d\'un domaine d\'exception' },
  { id: 'gallery-2', src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80', alt: 'Piscine luxueuse et espace de relaxation' },
  { id: 'gallery-3', src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80', alt: 'Dîner gastronomique en extérieur de prestige' },
  { id: 'gallery-4', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80', alt: 'Intérieur prestigieux et salons de réception' },
  { id: 'gallery-5', src: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=1200&q=80', alt: 'Coupes de champagne lors d\'une célébration' },
  { id: 'gallery-6', src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80', alt: 'Vue panoramique sur les jardins du domaine' },
  { id: 'gallery-7', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80', alt: 'Ambiance lumineuse lors d\'un événement nocturne' },
  { id: 'gallery-8', src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80', alt: 'Détails architecturaux et pierres chargées d\'histoire' },
];

/** Options du formulaire de contact — types d'événements */
export const EVENT_TYPE_OPTIONS: string[] = [
  'Anniversaire d\'Exception',
  'EVG / EVJF',
  'Séminaire d\'entreprise',
  'Pool Party / Week-end prestige',
  'Autre demande sur-mesure',
];
