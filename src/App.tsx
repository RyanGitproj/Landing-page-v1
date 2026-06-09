// ============================================================
// App.tsx — Point d'entrée de l'application one-page
// Toutes les sections sont assemblées ici, pas de React Router
// ============================================================

import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Advantages } from './components/sections/Advantages';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation principale sticky */}
      <Navbar />

      {/* Contenu principal sémantique */}
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Gallery />
        <Contact />
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default App;
