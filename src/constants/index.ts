// ============================================================
// Données statiques — Célébrations Voyages France
// Toutes les constantes sont ici, jamais en dur dans les composants
// ============================================================

import type { NavLink, Service, Advantage } from '../types';
import piscineImg from '../assets/images/Piscine.jpeg';
import grandeSalleImg from '../assets/images/grande salle.jpeg';
import seminaireImg from '../assets/images/seminaire.jpeg';

// ─────────────────────────────────────────────────────────────
// Navigation — Page Domaine des Élégances
// ─────────────────────────────────────────────────────────────

/** Liens de navigation pour la page Domaine */
export const DOMAINE_NAV_LINKS: NavLink[] = [
  { id: 'nav-events', label: 'Événements', href: '#segments' },
  { id: 'nav-domaine', label: 'Le Domaine', href: '#rassurance' },
  { id: 'nav-galerie', label: 'Galerie', href: '#galerie' },
  { id: 'nav-infos', label: 'Infos', href: '#informations' },
  { id: 'nav-contact', label: 'Contact', href: '#disponibilites' },
];

/** Liens de navigation pour la page d'accueil (marque) */
export const HOME_NAV_LINKS: NavLink[] = [
  { id: 'nav-concept', label: 'Concept', href: '#concept' },
  { id: 'nav-lieux', label: 'Nos Lieux', href: '#lieux' },
  { id: 'nav-contact-home', label: 'Contact', href: '#contact-home' },
];

// Alias pour la compatibilité
export const NAV_LINKS = DOMAINE_NAV_LINKS;

// ─────────────────────────────────────────────────────────────
// Formulaire court — Options d'événements (3 niches)
// ─────────────────────────────────────────────────────────────

/** Options du formulaire — types d'événements segmentés en 3 niches */
export const EVENT_TYPE_OPTIONS: string[] = [
  // Niche 1 : Cérémonies familiales
  'Mariage',
  'Baptême / Communion',
  'Bar Mitzvah',
  'Réception familiale',
  // Niche 2 : Événements professionnels (Corporate)
  'Séminaire d\'entreprise',
  'Team building',
  'Cocktail / Garden party corporate',
  'Business club',
  // Niche 3 : Fêtes privées
  'Anniversaire',
  'EVG / EVJF',
  'Cousinade',
  'Pool party',
  // Autre
  'Autre événement',
];

// ─────────────────────────────────────────────────────────────
// Segments / Niches — les 3 portes d'entrée
// ─────────────────────────────────────────────────────────────

export const NICHES = [
  {
    id: 'ceremonies',
    title: 'Cérémonies familiales',
    subtitle: 'Mariages, baptêmes, communions, bar mitzvah',
    icon: 'ceremony',
  },
  {
    id: 'corporate',
    title: 'Événements professionnels',
    subtitle: 'Séminaires, team building, cocktails, business club',
    icon: 'corporate',
  },
  {
    id: 'fetes',
    title: 'Fêtes privées',
    subtitle: 'Anniversaires, EVG/EVJF, cousinades, pool parties',
    icon: 'party',
  },
];

// ─────────────────────────────────────────────────────────────
// Services (conservés pour la page d'accueil de la marque)
// ─────────────────────────────────────────────────────────────

/** Services / types d'événements proposés */
export const SERVICES: Service[] = [
  {
    id: 'service-anniversaires',
    title: 'VOTRE ANNIVERSAIRE, ÉPIQUE ET INOUBLIABLE',
    description:
      'Ne célébrez pas, marquez l\'histoire. Privatisez notre domaine d\'exception et offrez-vous un moment de pur prestige. De l\'arrivée majestueuse à la soirée mémorable, chaque instant est pensé pour l\'émerveillement absolu.',
    icon: '🎂',
    imageUrl: grandeSalleImg,
  },
  {
    id: 'service-evg-evjf',
    title: 'EVG/EVJF : L\'EXPÉRIENCE ULTIME AVANT LE JOUR J',
    description:
      'Poussez les portes du luxe. Oubliez les standards, vivez l\'extraordinaire. Adrénaline, fête exclusive et confort absolu dans un cadre privé où tout est permis pour célébrer la fin du célibat avec éclat.',
    icon: '🥂',
    imageUrl: piscineImg,
  },
  {
    id: 'service-seminaires',
    title: 'SÉMINAIRES : COHÉSION ET PRESTIGE',
    description:
      'Inspirez vos équipes. Changez de dimension avec un séminaire qui impose le respect. Un domaine d\'exception privé pour allier travail intensif et détente luxueuse. L\'impact direct sur la motivation de vos collaborateurs.',
    icon: '💼',
    imageUrl: seminaireImg,
  },
  {
    id: 'service-pool-party',
    title: 'POOL PARTY : LE LUXE À L\'ÉTAT PUR',
    description:
      'L\'Oasis dont vous rêviez, juste pour vous. Musique, cocktails et baignade dans une piscine d\'exception. Ne cherchez plus l\'endroit parfait, privatisez-le et vivez une journée hors du temps.',
    icon: '🏊',
    imageUrl: piscineImg,
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
