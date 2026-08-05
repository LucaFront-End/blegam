import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { initGlobalReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import Contact from './pages/Contact';
import SalasOralidad from './pages/SalasOralidad';
import Privacy from './pages/Privacy';
import Zones from './pages/Zones';
import LandingPage from './pages/LandingPage';
import ControlAccesos from './pages/ControlAccesos';
import FloatingActions from './components/FloatingActions/FloatingActions';
import { LandingProvider } from './context/LandingContext';
import './styles/index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function RevealInit() {
  useEffect(() => {
    const cleanup = initGlobalReveal();
    return cleanup;
  }, []);
  return null;
}

export default function App() {
  return (
    <LandingProvider>
      <BrowserRouter>
        <ScrollToTop />
        <RevealInit />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/control-de-accesos" element={<ControlAccesos />} />
          <Route path="/salas-de-oralidad" element={<SalasOralidad />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-de-privacidad" element={<Privacy />} />
          <Route path="/zonas" element={<Zones />} />
          <Route path="/ciudades/:slug" element={<LandingPage />} />
        </Routes>
        <FloatingActions />
        <Footer />
      </BrowserRouter>
    </LandingProvider>
  );
}

