import React from 'react';

// ============================================================
// Bouton cinématique — minimaliste, uppercase, bords nets
// Effet de balayage doré au hover
// ============================================================

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
  'aria-label'?: string;
}

const VARIANT_CLASSES: Record<string, string> = {
  primary:
    'bg-charcoal text-cream border border-charcoal hover:bg-gold hover:border-gold hover:text-charcoal',
  secondary:
    'bg-gold text-charcoal border border-gold hover:bg-gold-light',
  outline:
    'bg-transparent border border-white/40 text-white hover:bg-white hover:text-charcoal',
  ghost:
    'bg-transparent text-gold border border-transparent hover:border-gold/40',
};

const SIZE_CLASSES: Record<string, string> = {
  sm: 'px-6 py-2.5 text-[10px]',
  md: 'px-8 py-3.5 text-[11px]',
  lg: 'px-12 py-4 text-xs',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'inline-block font-headline font-semibold uppercase tracking-[0.25em] transition-all duration-500 text-center focus-gold relative overflow-hidden';

  const classes = `${baseClasses} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
