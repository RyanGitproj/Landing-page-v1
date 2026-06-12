import { Hero } from '../components/sections/Hero';
import { PromesseSegmentation } from '../components/sections/PromesseSegmentation';
import { PoolHouse } from '../components/sections/PoolHouse';
import { BarnumsReception } from '../components/sections/BarnumsReception';
import { Gallery } from '../components/sections/Gallery';
import { InformationsEssentielles } from '../components/sections/InformationsEssentielles';
import { ReservationSteps } from '../components/sections/ReservationSteps';
import { Contact } from '../components/sections/Contact';
import { ConversionFinale } from '../components/sections/ConversionFinale';
import { StickyMobileCTA } from '../components/sections/StickyMobileCTA';

export function DomainePage() {
  return (
    <main>
      {/* 1. Hero — Promesse + 2 CTA + 3 niches */}
      <Hero />
      
      {/* 2. Segments — 3 niches clients */}
      <PromesseSegmentation />

      {/* 3. Pool house 250 m² */}
      <PoolHouse />

      {/* 4. Barnums professionnels en supplément */}
      <BarnumsReception />
      
      {/* 5. Galerie photos réelles */}
      <Gallery />
      
      {/* 6. Informations essentielles */}
      <InformationsEssentielles />

      {/* 7. Parcours de réservation */}
      <ReservationSteps />
      
      {/* 8. Formulaire court (5 champs — checklist) */}
      <Contact />
      
      {/* 9. Conversion finale */}
      <ConversionFinale />

      {/* Sticky CTA mobile */}
      <StickyMobileCTA />
    </main>
  );
}

