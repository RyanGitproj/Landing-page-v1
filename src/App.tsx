// ============================================================
// App.tsx — Point d'entrée de l'application
// Architecture multi-pages avec React Router
// ============================================================

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { HomePage } from './pages/HomePage';
import { DomainePage } from './pages/DomainePage';
import { MerciPage } from './pages/MerciPage';

/** Reset scroll on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Header discret, context-aware via les hooks internes */}
        <Navbar />

        {/* Routes de l'application */}
        <div className="flex-grow">
          <Routes>
            {/* Funnel Domaine des Élégances = page d'entrée directe (Meta Ads) */}
            <Route path="/" element={<DomainePage />} />
            <Route path="/domaine-des-elegances" element={<DomainePage />} />
            {/* Portail marque (usage futur) */}
            <Route path="/marque" element={<HomePage />} />
            <Route path="/merci" element={<MerciPage />} />
          </Routes>
        </div>

        {/* Pied de page commun */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
