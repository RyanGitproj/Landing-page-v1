import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { usePopup } from '../../context/PopupContext';
import { Button } from '../ui/Button';

// ============================================================
// Conversion Finale
// ============================================================

export function ConversionFinale() {
  const { scrollTo } = useSmoothScroll();
  const { openPopup } = usePopup();

  const handleBrochureClick = () => {
    openPopup();
  };

  return (
    <section id="conversion" className="bg-navy py-20 px-6 lg:px-12 border-t border-gold/20 pb-32">
      <div className="max-w-[800px] mx-auto text-center border border-gold/30 rounded-xl p-8 md:p-12 bg-gold/5 relative overflow-hidden">
        {/* Lueur subtile en arrière-plan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/40 text-gold mb-6 bg-navy">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>

          <h2 className="font-display font-bold text-white text-2xl md:text-3xl mb-8 uppercase tracking-widest drop-shadow-sm">
            Vous souhaitez une réponse rapide ?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo('#disponibilites')}
              className="flex items-center justify-center gap-2 px-8"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Voir les disponibilités
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleBrochureClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 border-gold/50 text-gold hover:bg-gold/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Recevoir la brochure WhatsApp
            </Button>
          </div>

          <p className="font-sans font-light text-white/50 text-sm mt-8">
            Disponibilités, brochure, options et mise en relation commerciale.
          </p>
        </div>
      </div>
    </section>
  );
}
