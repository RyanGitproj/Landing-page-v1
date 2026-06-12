import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { usePopup } from '../../context/PopupContext';
import { formService } from '../../services/formService';
import { Button } from './Button';

export function WhatsAppPopup() {
  const { isPopupOpen, closePopup } = usePopup();
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Réinitialiser le formulaire à chaque ouverture
  useEffect(() => {
    if (isPopupOpen) {
      setStatus('idle');
      setName('');
      setWhatsapp('');
      setBotField('');
      setErrorMessage('');
    }
  }, [isPopupOpen]);

  if (!isPopupOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !whatsapp) {
      setStatus('error');
      setErrorMessage('Veuillez remplir votre nom et numéro WhatsApp.');
      return;
    }

    setStatus('submitting');

    // Honeypot
    if (botField) {
      setTimeout(() => {
        setStatus('success');
      }, 500);
      return;
    }

    const result = await formService.submitBrochureRequest({
      name,
      whatsapp_number: whatsapp,
    });

    if (!result.success) {
      setStatus('error');
      setErrorMessage(`Erreur : ${result.error || 'Veuillez réessayer.'}`);
      return;
    }

    setStatus('success');
  };

  const inputClasses = 'w-full bg-white border-0 border-b border-stone/40 px-0 py-3 text-navy font-sans font-light text-sm placeholder:text-navy/60 outline-none transition-all duration-300 focus:border-gold focus-within:border-gold rounded-none';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white p-8 md:p-10 w-full max-w-md relative shadow-2xl">
        {/* Close button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-stone-400 hover:text-navy transition-colors"
          aria-label="Fermer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-6 animate-fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 border border-green-200 text-green-600 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-navy mb-4">
              Demande envoyée
            </h3>
            <p className="font-sans font-light text-warm mb-8">
              L'envoi de votre brochure est en cours de traitement. Vous la recevrez très prochainement sur WhatsApp.
            </p>
            <Button variant="primary" className="w-full" onClick={closePopup}>
              Fermer
            </Button>
          </div>
        ) : (
          <>
            <h3 className="font-display font-bold text-2xl text-navy mb-2 text-center">
              Brochure WhatsApp
            </h3>
            <p className="font-sans font-light text-sm text-warm mb-8 text-center">
              Où devons-nous vous l'envoyer ?
            </p>

            {status === 'error' && (
              <div className="border border-red-300/50 bg-red-50/50 px-4 py-3 mb-6 text-center">
                <p className="font-sans font-light text-red-600 text-sm">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
                <label htmlFor="botFieldPopup">Ne pas remplir</label>
                <input
                  id="botFieldPopup"
                  type="text"
                  name="botField"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="popup-name" className="sr-only">Nom / prénom</label>
                  <input
                    id="popup-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom / prénom *"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="popup-whatsapp" className="sr-only">Numéro WhatsApp</label>
                  <PhoneInput
                    id="popup-whatsapp"
                    defaultCountry="FR"
                    value={whatsapp}
                    onChange={(val) => setWhatsapp(val || '')}
                    placeholder="Numéro WhatsApp (ex: 06 12 34 56 78) *"
                    required
                    className={inputClasses}
                    numberInputProps={{
                      className: 'bg-transparent border-none outline-none w-full p-0 text-navy placeholder:text-navy/60 font-sans font-light focus:ring-0',
                    }}
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className={`w-full ${status === 'submitting' ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  {status === 'submitting' ? 'Envoi en cours...' : 'Recevoir la brochure'}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
