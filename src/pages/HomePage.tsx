import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/ui/SectionTitle';
import { RevealWrapper } from '../components/ui/RevealWrapper';
import { Button } from '../components/ui/Button';
import heroBg from '../assets/images/hero-bg.jpeg';

// ============================================================
// Page d'accueil (Marque) — Lieu de Célébration
// Sert de portail / concept général de l'agence
// ============================================================

export function HomePage() {
  return (
    <main className="bg-navy min-h-screen">
      {/* Hero Marque */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Lieu de Célébration" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 text-center pt-20">
          <RevealWrapper animation="fade-up">
            <h1 className="font-headline font-bold text-sm tracking-[0.4em] uppercase text-gold mb-6">
              Lieu de Célébration
            </h1>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white leading-[1.1] mb-8">
              L'exception pour vos <br/>
              événements privés
            </h2>
            <p className="font-sans font-light text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Découvrez notre sélection de villas, châteaux et domaines privatisés
              avec piscine, pensés pour faire de vos réceptions un moment inoubliable.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById('lieux')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Découvrir nos domaines
            </Button>
          </RevealWrapper>
        </div>
      </section>

      {/* Liste des Domaines */}
      <section id="lieux" className="py-24 md:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <RevealWrapper animation="fade-up">
            <SectionTitle
              tag="Collection Exclusive"
              title="Nos Lieux de Célébration"
              subtitle="Des cadres majestueux, rigoureusement sélectionnés pour l'excellence de leurs prestations."
              align="center"
            />
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {/* Carte Domaine des Élégances */}
            <RevealWrapper animation="fade-up" delay={100}>
              <Link to="/domaine-des-elegances" className="block group">
                <div className="relative h-80 overflow-hidden mb-6 rounded-sm">
                  <img
                    src={heroBg}
                    alt="Domaine des Élégances"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="font-display font-bold text-navy text-2xl mb-2">
                  Domaine des Élégances
                </h3>
                <p className="font-sans font-light text-warm text-sm mb-4">
                  Domaine premium avec piscine intérieure, parc arboré du domaine et espaces modulables pour vos réceptions.
                </p>
                <span className="inline-flex items-center gap-2 font-headline uppercase tracking-widest text-[10px] text-gold-dark group-hover:text-gold transition-colors">
                  Visiter ce domaine <span aria-hidden="true">→</span>
                </span>
              </Link>
            </RevealWrapper>

            {/* Placeholder pour de futurs domaines */}
            <RevealWrapper animation="fade-up" delay={200}>
              <div className="block group cursor-not-allowed opacity-60">
                <div className="relative h-80 bg-stone/50 overflow-hidden mb-6 rounded-sm flex items-center justify-center">
                  <span className="font-headline tracking-[0.3em] uppercase text-navy/30 text-sm">Bientôt disponible</span>
                </div>
                <h3 className="font-display font-bold text-navy text-2xl mb-2">
                  Villa Horizon
                </h3>
                <p className="font-sans font-light text-warm text-sm mb-4">
                  Prochainement dans notre collection.
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
