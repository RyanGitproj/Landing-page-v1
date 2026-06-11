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
import { ConfirmationAcomptePage } from './pages/ConfirmationAcomptePage';

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
            <Route path="/" element={<HomePage />} />
            <Route path="/domaine-des-elegances" element={<DomainePage />} />
            <Route path="/merci" element={<MerciPage />} />
            <Route path="/confirmation-acompte" element={<ConfirmationAcomptePage />} />
          </Routes>
        </div>

        {/* Pied de page commun */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
