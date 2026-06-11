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
