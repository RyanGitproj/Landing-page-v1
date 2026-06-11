import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useNavbar } from '../../hooks/useNavbar';
import { Button } from '../ui/Button';
import { DOMAINE_NAV_LINKS, HOME_NAV_LINKS } from '../../constants';

// ============================================================
// Navbar cinématique — Context-aware
// S'adapte si on est sur la home ou sur la page du Domaine
// ============================================================

export function Navbar() {
  const { isScrolled } = useNavbar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isDomainePage = location.pathname.includes('domaine-des-elegances');
  const navLinks = isDomainePage ? DOMAINE_NAV_LINKS : HOME_NAV_LINKS;

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Si c'est une ancre
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Si l'ancre n'est pas sur la page actuelle, rediriger vers la bonne page
        if (!isDomainePage && href === '#disponibilites') {
          navigate('/domaine-des-elegances#disponibilites');
        }
      }
    }
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
            {/* Logo — dynamique selon la page */}
            <Link
              to="/"
              className="group flex flex-col items-start leading-none focus-gold"
              aria-label="Retour à l'accueil"
            >
              <span className="font-headline font-bold text-sm tracking-[0.3em] uppercase text-white transition-colors duration-300 group-hover:text-gold">
                Lieu de Célébration
              </span>
              <span className="font-sans font-light text-[9px] tracking-[0.4em] uppercase text-gold/70 mt-1">
                {isDomainePage ? 'Domaine des Élégances' : 'Voyages France'}
              </span>
            </Link>

            {/* Liens — desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
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
                onClick={() => isDomainePage ? handleNavClick('#disponibilites') : navigate('/domaine-des-elegances')}
                className="border-gold/40 text-gold hover:bg-gold hover:text-navy ml-4"
              >
                {isDomainePage ? 'Vérifier la date' : 'Voir les Domaines'}
              </Button>
            </div>

            {/* Burger mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 focus-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`block w-7 h-px bg-white transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block w-7 h-px bg-white transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-navy/98 backdrop-blur-xl transition-all duration-700 flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
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
          {navLinks.map((link, i) => (
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
            onClick={() => isDomainePage ? handleNavClick('#disponibilites') : navigate('/domaine-des-elegances')}
            className="border-gold text-gold hover:bg-gold hover:text-navy"
          >
            {isDomainePage ? 'Vérifier la date' : 'Voir les Domaines'}
          </Button>
        </div>
      </div>
    </>
  );
}
