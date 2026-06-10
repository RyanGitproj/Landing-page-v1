import { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { RevealWrapper } from '../ui/RevealWrapper';
import { Button } from '../ui/Button';
import { EVENT_TYPE_OPTIONS } from '../../constants';
import type { ContactFormData, ContactFormState } from '../../types';

// ============================================================
// Contact cinématique — split-screen : image + formulaire
// Design épuré, inputs minimalistes façon cinéma
// ============================================================

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  message: '',
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [formState, setFormState] = useState<ContactFormState>({ status: 'idle' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormState({
        status: 'error',
        error: 'Veuillez remplir tous les champs obligatoires.',
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
      setFormState({ status: 'success' });
      setFormData(INITIAL_FORM_DATA);
    }, 1500);
  };

  // Inputs minimalistes — seulement une ligne en bas, pas de bordure complète
  const inputClasses =
    'w-full bg-transparent border-0 border-b border-stone/40 px-0 py-4 text-charcoal font-sans font-light text-sm placeholder:text-charcoal/60 outline-none transition-all duration-300 focus:border-gold rounded-none';

  return (
    <section
      id="contact"
      className="min-h-screen split-screen bg-cream"
      aria-label="Formulaire de contact"
    >
      {/* Côté gauche — image d'ambiance plein côté avec informations */}
      <div className="relative hidden md:block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80"
          alt="Terrasse du domaine au coucher du soleil"
          className="w-full h-full object-cover blur-[3px] scale-105"
        />
        <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm" />
        
        {/* Informations de contact en surimpression */}
        <div className="absolute top-20 lg:top-32 left-12 right-12 text-white">
          <RevealWrapper animation="slide-right">
            <h3 className="font-display text-3xl lg:text-4xl mb-10 text-white">Le Domaine</h3>
          </RevealWrapper>
          
          <div className="space-y-8">
            <RevealWrapper animation="slide-right" delay={100}>
              <div>
                <p className="font-sans font-bold text-xs tracking-widest uppercase text-gold mb-2">Adresse</p>
                <p className="font-sans font-light text-lg text-white/90">15 Route des Châteaux<br/>33460 Margaux, France</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 font-sans text-xs tracking-widest uppercase text-white/70 hover:text-gold transition-colors duration-300 focus-gold"
                >
                  <span>Ouvrir dans Google Maps</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </RevealWrapper>

            <RevealWrapper animation="slide-right" delay={200}>
              <div className="h-px w-12 bg-white/20 my-2" />
            </RevealWrapper>

            <RevealWrapper animation="slide-right" delay={300}>
              <div>
                <p className="font-sans font-bold text-xs tracking-widest uppercase text-gold mb-2">Téléphone</p>
                <a 
                  href="tel:+33123456789" 
                  className="font-sans font-light text-lg text-white/90 hover:text-gold transition-colors duration-300 focus-gold"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
            </RevealWrapper>

            <RevealWrapper animation="slide-right" delay={400}>
              <div className="h-px w-12 bg-white/20 my-2" />
            </RevealWrapper>

            <RevealWrapper animation="slide-right" delay={500}>
              <div>
                <p className="font-sans font-bold text-xs tracking-widest uppercase text-gold mb-2">Email</p>
                <a 
                  href="mailto:contact@celebrations-voyages.com" 
                  className="font-sans font-light text-lg text-white/90 hover:text-gold transition-colors duration-300 focus-gold"
                >
                  contact@celebrations-voyages.com
                </a>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Citation superposée */}
        <div className="absolute bottom-12 left-12 right-12">
          <RevealWrapper animation="fade-up" delay={600}>
            <div className="cine-line w-12 mb-6 opacity-50 bg-gold/50" />
            <p className="font-display italic text-white/80 text-xl lg:text-2xl leading-snug cine-text-shadow">
              "Chaque détail compte,
              <br />
              chaque moment est unique."
            </p>
          </RevealWrapper>
        </div>
      </div>

      {/* Côté droit — formulaire */}
      <div className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-24 md:pt-32 md:pb-24 overflow-y-auto">
        <div className="w-full max-w-md mt-12 md:mt-16">
          <RevealWrapper animation="fade-up">
            <SectionTitle
              tag="04 · Contact"
              title="Parlons de votre événement"
              subtitle="Nous vous recontactons sous 24h."
              align="left"
            />
          </RevealWrapper>

          <RevealWrapper animation="fade-up" delay={200}>
            {/* Message de succès */}
            {formState.status === 'success' && (
              <div className="border border-gold/30 px-6 py-5 mb-8">
                <p className="font-display font-bold text-charcoal text-lg mb-1">
                  Demande envoyée
                </p>
                <p className="font-sans font-light text-warm text-sm">
                  Notre équipe vous recontactera très bientôt.
                </p>
              </div>
            )}

            {/* Message d'erreur */}
            {formState.status === 'error' && formState.error && (
              <div className="border border-red-300/50 px-6 py-4 mb-8">
                <p className="font-sans font-light text-red-600 text-sm">{formState.error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Nom complet</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom complet *"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="sr-only">Téléphone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-event" className="sr-only">Type d'événement</label>
                  <select
                    id="contact-event"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`${inputClasses} ${
                      formData.eventType === '' ? 'text-charcoal/60' : ''
                    }`}
                  >
                    <option value="">Type d'événement</option>
                    {EVENT_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet *"
                    required
                    rows={4}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </div>

              <div className="mt-10">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className={`w-full ${
                    formState.status === 'submitting'
                      ? 'opacity-50 pointer-events-none'
                      : ''
                  }`}
                >
                  {formState.status === 'submitting'
                    ? 'Envoi en cours…'
                    : 'Envoyer ma demande'}
                </Button>
              </div>
            </form>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
