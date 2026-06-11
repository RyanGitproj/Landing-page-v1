// ============================================================
// Types et interfaces — Célébrations Voyages France
// Aucun `any` — typage strict sur l'ensemble du projet
// ============================================================

/** Lien de navigation principal */
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

/** Service / type d'événement proposé */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

/** Avantage / argument de vente */
export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/** Image de la galerie */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

/** Données du formulaire court de conversion */
export interface ContactFormData {
  eventType: string;
  eventDate: string;
  guests: string;
  phone: string;
  email: string;
}

/** État de soumission du formulaire */
export interface ContactFormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  error?: string;
}
