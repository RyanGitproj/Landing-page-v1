import { useState } from 'react';
import { useNavbar } from '../../hooks/useNavbar';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../constants';

// ============================================================
// Navbar cinématique — ultra-minimale, transparente
// Fine ligne dorée en bas, typographie espacée
// ============================================================

export function Navbar() {
  const { isScrolled } = useNavbar();
  const { scrollTo } = useSmoothScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
      role="navigation"
      aria-label="Navigation principale"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-lg border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo — typographie pure, pas de brackets visibles */}
          <button
            onClick={() => scrollTo('#')}
            className="group flex flex-col items-start leading-none focus-gold"
            aria-label="Retour en haut de page"
          >
            <span className="font-headline font-bold text-sm tracking-[0.3em] uppercase text-white transition-colors duration-300 group-hover:text-gold">
              Célébrations
            </span>
            <span className="font-sans font-light text-[9px] tracking-[0.4em] uppercase text-gold/70">
              Voyages France
            </span>
          </button>

          {/* Liens — desktop */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className="font-sans font-light text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors duration-300 focus-gold"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className="border-gold/40 text-gold hover:bg-gold hover:text-navy ml-4"
            >
              Réserver
            </Button>
          </div>

          {/* Burger mobile — croix cinématique */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-7 h-px bg-white transition-all duration-500 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
            />
            <span
              className={`block w-7 h-px bg-white transition-all duration-500 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>
      </div>
      </nav>

      {/* Menu mobile — plein écran cinématique */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-navy/98 backdrop-blur-xl transition-all duration-700 flex flex-col items-center justify-center ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Bouton fermer en haut */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-6 text-white/60 hover:text-gold transition-colors duration-300 focus-gold"
          aria-label="Fermer le menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href)}
              className="font-display font-bold text-3xl text-white hover:text-gold transition-all duration-300 focus-gold"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {link.label}
            </button>
          ))}
          <div className="cine-line w-16 my-4" />
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleNavClick('#contact')}
            className="border-gold text-gold hover:bg-gold hover:text-navy"
          >
            Réserver
          </Button>
        </div>
      </div>
    </>
  );
}
