import { Hero } from '../components/sections/Hero';
import { PromesseSegmentation } from '../components/sections/PromesseSegmentation';
import { BeneficesRassurance } from '../components/sections/BeneficesRassurance';
import { Gallery } from '../components/sections/Gallery';
import { InformationsEssentielles } from '../components/sections/InformationsEssentielles';
import { Contact } from '../components/sections/Contact';
import { ConversionFinale } from '../components/sections/ConversionFinale';

export function DomainePage() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />
      
      {/* 2 & 3. Promesse et Segments */}
      <PromesseSegmentation />
      
      {/* 4. Rassurance et Bénéfices */}
      <BeneficesRassurance />
      
      {/* 5. Galerie photos réelles */}
      <Gallery />
      
      {/* 6. Informations essentielles */}
      <InformationsEssentielles />
      
      {/* 7. Contact Court (Disponibilités) */}
      <Contact />
      
      {/* 8. Conversion finale */}
      <ConversionFinale />
    </main>
  );
}
