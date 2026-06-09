// ============================================================
// SectionTitle cinématique — épuré, ligne dorée animée,
// numéro de scène, typographie contrastée
// ============================================================

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  tag?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  light = false,
  tag,
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-charcoal';
  const subtitleColor = light ? 'text-white/60' : 'text-warm';

  return (
    <div className={`${alignClass} mb-12 md:mb-20 ${className}`}>
      {/* Numéro de scène / tag */}
      {tag && (
        <p className="scene-number mb-6">
          {tag}
        </p>
      )}

      {/* Titre principal — display serif, taille cinématique */}
      <h2
        className={`font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight ${titleColor}`}
      >
        {title}
      </h2>

      {/* Ligne dorée sous le titre */}
      <div className={`cine-line w-16 mt-6 mb-6 ${align === 'center' ? 'mx-auto' : ''}`} />

      {/* Sous-titre — sans-serif light */}
      {subtitle && (
        <p
          className={`font-sans font-light text-base md:text-lg leading-relaxed max-w-xl ${subtitleColor} ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
