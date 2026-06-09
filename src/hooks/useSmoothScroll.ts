import { useCallback } from 'react';

/**
 * Hook pour le smooth scroll vers les ancres de la page.
 * Gère le cas spécial href="#" (retour en haut).
 */
export function useSmoothScroll() {
  const scrollTo = useCallback((href: string) => {
    // Cas spécial : retour en haut de page
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return { scrollTo };
}
