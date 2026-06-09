import { useEffect, useState } from 'react';

/**
 * Hook pour gérer la navbar sticky : transparente en haut → blanche avec ombre au scroll.
 * Seuil de déclenchement : 80px de scroll vertical.
 */
export function useNavbar(scrollThreshold: number = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    // Vérifier l'état initial (si la page est déjà scrollée au chargement)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup de l'event listener au démontage
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  return { isScrolled };
}
