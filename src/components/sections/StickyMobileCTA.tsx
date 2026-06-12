import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { usePopup } from '../../context/PopupContext';

export function StickyMobileCTA() {
  const { scrollTo } = useSmoothScroll();
  const { openPopup } = usePopup();

  const handleBrochureClick = () => {
    openPopup();
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy/95 border-t border-gold/30 px-4 py-3 backdrop-blur-lg">
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => scrollTo('#disponibilites')}
          className="bg-gold text-charcoal font-headline font-semibold uppercase tracking-[0.14em] text-[10px] px-3 py-3 focus-gold"
        >
          Disponibilités
        </button>
        <button
          type="button"
          onClick={handleBrochureClick}
          className="border border-gold/50 text-gold font-headline font-semibold uppercase tracking-[0.14em] text-[10px] px-3 py-3 focus-gold"
        >
          Brochure WhatsApp
        </button>
      </div>
    </div>
  );
}
