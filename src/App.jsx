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
import FloatingActions from './components/FloatingActions/FloatingActions';
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
    <BrowserRouter>
      <ScrollToTop />
      <RevealInit />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/salas-de-oralidad" element={<SalasOralidad />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <FloatingActions />
      <Footer />
    </BrowserRouter>
  );
}

