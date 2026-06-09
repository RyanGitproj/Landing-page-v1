import { useEffect, useRef, useState } from 'react';

/**
 * Hook cinématique — Intersection Observer avec support de différents
 * types d'animation (fade-up, slide-left, slide-right, scale-in).
 * Respecte prefers-reduced-motion.
 */
export function useScrollReveal(
  threshold: number = 0.15,
  rootMargin: string = '0px 0px -60px 0px'
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
