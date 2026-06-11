import { Link } from 'react-router-dom';
import { RevealWrapper } from '../components/ui/RevealWrapper';
import { Button } from '../components/ui/Button';

// ============================================================
// Page Confirmation Acompte — Post-paiement Stripe
// ============================================================

export function ConfirmationAcomptePage() {
  return (
    <main className="bg-navy min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-[600px] mx-auto text-center">
        <RevealWrapper animation="fade-up">
          {/* Icône de paiement confirmé */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold text-gold mb-8">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Paiement confirmé
          </h1>

          <div className="cine-line w-16 mx-auto mb-8" />

          <p className="font-sans font-light text-white/80 text-lg md:text-xl leading-relaxed mb-4">
            Votre acompte a été enregistré avec succès.
          </p>
          <p className="font-sans font-light text-white/60 text-base leading-relaxed mb-12">
            Un e-mail de confirmation vous a été envoyé. Votre conseiller dédié vous contactera prochainement pour finaliser les détails de votre événement au <strong className="text-gold">Domaine des Élégances</strong>.
          </p>

          {/* Récapitulatif */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12 text-left">
            <h2 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-gold mb-6">
              Ce qu'il se passe maintenant
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="font-headline font-bold text-gold/40 text-xl leading-none mt-0.5">01</span>
                <p className="font-sans font-light text-white/70 text-sm">
                  Votre date est bloquée et réservée dans notre planning.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-headline font-bold text-gold/40 text-xl leading-none mt-0.5">02</span>
                <p className="font-sans font-light text-white/70 text-sm">
                  Vous recevez un contrat de privatisation détaillé par e-mail.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-headline font-bold text-gold/40 text-xl leading-none mt-0.5">03</span>
                <p className="font-sans font-light text-white/70 text-sm">
                  Nous organisons un appel de préparation pour personnaliser votre événement.
                </p>
              </li>
            </ol>
          </div>

          {/* Contact d'urgence */}
          <div className="mb-12">
            <p className="font-sans font-light text-white/40 text-sm">
              Une question urgente ? Contactez-nous directement :
            </p>
            <p className="font-sans text-gold/70 text-sm mt-2">
              Téléphone : <span className="text-white/60 italic">à confirmer</span>
            </p>
          </div>

          <Link to="/domaine-des-elegances">
            <Button variant="outline" size="lg" className="border-gold/40 text-gold hover:bg-gold hover:text-navy">
              Retour au Domaine
            </Button>
          </Link>
        </RevealWrapper>
      </div>
    </main>
  );
}
