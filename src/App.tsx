// ============================================================
// App.tsx — Point d'entrée de l'application one-page
// Architecture de tunnel de vente premium : Domaine des Élégances
// ============================================================

import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { PromesseSegmentation } from './components/sections/PromesseSegmentation';
import { BeneficesRassurance } from './components/sections/BeneficesRassurance';
import { Gallery } from './components/sections/Gallery';
import { InformationsEssentielles } from './components/sections/InformationsEssentielles';
import { ConversionFinale } from './components/sections/ConversionFinale';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* 1. Header discret */}
      <Navbar />

      {/* Contenu principal du tunnel de vente */}
      <main>
        {/* 2. Hero */}
        <Hero />
        
        {/* 3 & 7. Promesse et Segments */}
        <PromesseSegmentation />
        
        {/* 5 & 6. Rassurance et Bénéfices */}
        <BeneficesRassurance />
        
        {/* 8. Galerie photos réelles */}
        <Gallery />
        
        {/* 9. Informations essentielles */}
        <InformationsEssentielles />
        
        {/* 10. Conversion finale */}
        <ConversionFinale />
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default App;
