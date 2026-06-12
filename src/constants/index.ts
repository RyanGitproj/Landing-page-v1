// ============================================================
// Données statiques — Célébrations Voyages France
// Toutes les constantes sont ici, jamais en dur dans les composants
// ============================================================

import type { NavLink } from '../types';

// ─────────────────────────────────────────────────────────────
// Navigation — Page Domaine des Élégances
// ─────────────────────────────────────────────────────────────

/** Liens de navigation pour la page Domaine — orientés conversion (5 liens max) */
export const DOMAINE_NAV_LINKS: NavLink[] = [
  { id: 'nav-events', label: 'Événements', href: '#segments' },
  { id: 'nav-pool-house', label: 'Pool House', href: '#pool-house' },
  { id: 'nav-galerie', label: 'Galerie', href: '#galerie' },
  { id: 'nav-infos', label: 'Infos', href: '#informations' },
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
    subtitle: 'Séminaires, team building, cocktails, garden parties',
    icon: 'corporate',
  },
  {
    id: 'fetes',
    title: 'Fêtes privées',
    subtitle: 'Anniversaires, EVG/EVJF, cousinades, pool parties',
    icon: 'party',
  },
];

// WhatsApp / WATI : remplacer la valeur vide par le vrai lien fourni par le client.
export const WHATSAPP_BROCHURE_URL: string = '';

export const WHATSAPP_QUALIFICATION_MESSAGE = [
  'Bonjour, je souhaite recevoir la brochure du Domaine des Élégances.',
  '',
  'Nom / prénom :',
  "Type d'événement :",
  'Date souhaitée :',
  "Nombre d'invités :",
  'Besoin de couchages :',
  'Besoin de barnum :',
  'Besoin traiteur / DJ / barman :',
  'Souhait de visite :',
  'Téléphone :',
  'Email :',
].join('\n');

export const getWhatsAppBrochureUrl = () => {
  if (!WHATSAPP_BROCHURE_URL) {
    return '';
  }

  const separator = WHATSAPP_BROCHURE_URL.includes('?') ? '&' : '?';
  return `${WHATSAPP_BROCHURE_URL}${separator}text=${encodeURIComponent(WHATSAPP_QUALIFICATION_MESSAGE)}`;
};
