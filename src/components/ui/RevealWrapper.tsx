import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// ============================================================
// RevealWrapper cinématique — fade-up, slide-left, slide-right, scale
// Animations cinéma avec easing cubique premium
// ============================================================

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'wipe-in';

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  animation?: AnimationType;
  className?: string;
}

/** Correspondance type d'animation → classes Tailwind */
const ANIMATION_CLASSES: Record<AnimationType, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'slide-left': {
    hidden: 'opacity-0 translate-x-16',
    visible: 'opacity-100 translate-x-0',
  },
  'slide-right': {
    hidden: 'opacity-0 -translate-x-16',
    visible: 'opacity-100 translate-x-0',
  },
  'scale-in': {
    hidden: 'opacity-0 scale-105',
    visible: 'opacity-100 scale-100',
  },
  'wipe-in': {
    hidden: 'clip-hidden',
    visible: 'clip-visible',
  },
};

export function RevealWrapper({
  children,
  delay = 0,
  animation = 'fade-up',
  className = '',
}: RevealWrapperProps) {
  const { ref, isVisible } = useScrollReveal();
  const anim = ANIMATION_CLASSES[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? anim.visible : anim.hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
