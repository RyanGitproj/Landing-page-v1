// ============================================================
// App.tsx — Point d'entrée de l'application
// Architecture multi-pages avec React Router
// ============================================================

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { HomePage } from './pages/HomePage';
import { DomainePage } from './pages/DomainePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header discret, context-aware via les hooks internes */}
        <Navbar />

        {/* Routes de l'application */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/domaine-des-elegances" element={<DomainePage />} />
          </Routes>
        </div>

        {/* Pied de page commun */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
