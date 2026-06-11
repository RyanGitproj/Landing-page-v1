import { Link } from 'react-router-dom';
import { RevealWrapper } from '../components/ui/RevealWrapper';
import { Button } from '../components/ui/Button';

// ============================================================
// Page Merci — Affichée après soumission du formulaire
// ============================================================

export function MerciPage() {
  return (
    <main className="bg-navy min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-[600px] mx-auto text-center">
        <RevealWrapper animation="fade-up">
          {/* Icône de succès */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold text-gold mb-8">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Merci pour votre demande
          </h1>

          <div className="cine-line w-16 mx-auto mb-8" />

          <p className="font-sans font-light text-white/80 text-lg md:text-xl leading-relaxed mb-4">
            Votre demande de disponibilités a bien été enregistrée.
          </p>
          <p className="font-sans font-light text-white/60 text-base leading-relaxed mb-12">
            Un conseiller dédié vous recontacte <strong className="text-gold">sous 1 heure</strong> (heures ouvrées) avec la brochure tarifaire, les disponibilités et les options possibles pour votre événement.
          </p>

          {/* Prochaines étapes */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12 text-left">
            <h2 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-gold mb-6">
              Prochaines étapes
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="font-headline font-bold text-gold/40 text-xl leading-none mt-0.5">01</span>
                <p className="font-sans font-light text-white/70 text-sm">
                  Nous vérifions les disponibilités pour votre date souhaitée.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-headline font-bold text-gold/40 text-xl leading-none mt-0.5">02</span>
                <p className="font-sans font-light text-white/70 text-sm">
                  Vous recevez la brochure complète et le devis personnalisé.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-headline font-bold text-gold/40 text-xl leading-none mt-0.5">03</span>
                <p className="font-sans font-light text-white/70 text-sm">
                  Si vous le souhaitez, nous organisons une visite du domaine.
                </p>
              </li>
            </ol>
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
