import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';
import { Button } from '../ui/Button';
import { EVENT_TYPE_OPTIONS } from '../../constants';
import type { ContactFormData, ContactFormState } from '../../types';

// ============================================================
// Formulaire Court de Conversion — `#disponibilites`
// Checklist : Type d'événement, date, nombre de personnes,
// téléphone, email. Pas plus.
// ============================================================

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  eventType: '',
  eventDate: '',
  guests: '',
  phone: '',
  email: '',
};

export function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [formState, setFormState] = useState<ContactFormState>({ status: 'idle' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.eventType || !formData.phone.trim() || !formData.email.trim()) {
      setFormState({
        status: 'error',
        error: 'Veuillez remplir les champs obligatoires (Nom, Type, Téléphone, Email).',
      });
      return;
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      setFormState({
        status: 'error',
        error: 'Veuillez entrer une adresse email valide.',
      });
      return;
    }

    setFormState({ status: 'submitting' });
    setTimeout(() => {
      setFormData(INITIAL_FORM_DATA);
      setFormState({ status: 'idle' });
      navigate('/merci');
    }, 1500);
  };

  const inputClasses =
    'w-full bg-transparent border-0 border-b border-stone/40 px-0 py-4 text-navy font-sans font-light text-sm placeholder:text-navy/60 outline-none transition-all duration-300 focus:border-gold rounded-none';

  return (
    <section
      id="disponibilites"
      className="bg-cream py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden"
      aria-label="Vérifier les disponibilités"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Colonne gauche : Rassurance et infos */}
        <RevealWrapper animation="slide-right">
          <div>
            <SectionTitle
              tag="Disponibilités & Réservation"
              title="Sécurisez votre date au Domaine"
              subtitle="Notre équipe vous recontacte avec les disponibilités, la brochure, les options possibles et une proposition de rappel commercial."
              align="left"
            />
            
            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-gold-dark mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-xl mb-1">Réponse express garantie</h4>
                  <p className="font-sans font-light text-warm text-sm">Un conseiller dédié vous répond en moins d'une heure (heures ouvrées).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-gold-dark mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-xl mb-1">Visite sur rendez-vous</h4>
                  <p className="font-sans font-light text-warm text-sm">Possibilité de visiter le domaine avant confirmation de votre réservation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-gold-dark mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-xl mb-1">Paiement sécurisé</h4>
                  <p className="font-sans font-light text-warm text-sm">Acompte possible en ligne via plateforme sécurisée (Stripe) après validation.</p>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Colonne droite : Formulaire court — 5 champs max (checklist) */}
        <RevealWrapper animation="fade-up" delay={200}>
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-stone/20 relative">
            {/* Ligne dorée en haut */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            
            <h3 className="font-display font-bold text-2xl text-navy mb-8 text-center uppercase tracking-wider">
              Vérifier ma date
            </h3>

            {formState.status === 'success' && (
              <div className="border border-gold/30 bg-gold/5 px-6 py-5 mb-8 text-center">
                <p className="font-display font-bold text-navy text-lg mb-1">
                  Demande envoyée avec succès
                </p>
                <p className="font-sans font-light text-warm text-sm">
                  Notre équipe vous contacte sous peu.
                </p>
              </div>
            )}

            {formState.status === 'error' && formState.error && (
              <div className="border border-red-300/50 bg-red-50/50 px-6 py-4 mb-8 text-center">
                <p className="font-sans font-light text-red-600 text-sm">{formState.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                {/* 1. Nom / prénom */}
                <div>
                  <label htmlFor="name" className="sr-only">Nom et prénom</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom / prénom *"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* 2. Type d'événement */}
                <div>
                  <label htmlFor="eventType" className="sr-only">Type d'événement</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`${inputClasses} ${formData.eventType === '' ? 'text-navy/60' : ''}`}
                    required
                  >
                    <option value="" disabled>Type d'événement *</option>
                    {EVENT_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* 3. Date */}
                <div>
                  <label htmlFor="eventDate" className="sr-only">Date souhaitée</label>
                  <input
                    id="eventDate"
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={`${inputClasses} ${formData.eventDate === '' ? 'text-navy/60' : ''}`}
                    aria-label="Date souhaitée"
                  />
                </div>

                {/* 4. Nombre de personnes */}
                <div>
                  <label htmlFor="guests" className="sr-only">Nombre d'invités estimé</label>
                  <input
                    id="guests"
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Nombre d'invités estimé"
                    className={inputClasses}
                  />
                </div>

                {/* 5. Téléphone */}
                <div>
                  <label htmlFor="phone" className="sr-only">Téléphone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Numéro de téléphone *"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* 6. Email */}
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Adresse e-mail *"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mt-10">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className={`w-full ${formState.status === 'submitting' ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  {formState.status === 'submitting' ? 'Envoi en cours…' : 'Vérifier les disponibilités'}
                </Button>
              </div>
            </form>
            
            <p className="font-sans text-[10px] text-warm/60 text-center mt-6 uppercase tracking-wider">
              Vos données sont protégées et ne seront jamais partagées.
            </p>

            <div className="mt-6 pt-6 border-t border-stone/20 text-center">
              <p className="font-sans text-xs text-warm/50">
                Vous préférez nous appeler ?
              </p>
              <p className="font-sans text-sm text-navy/70 mt-1">
                Téléphone : <span className="italic text-warm/60">à confirmer</span>
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
