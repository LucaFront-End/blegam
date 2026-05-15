import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { initGlobalReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SalasOralidad from './pages/SalasOralidad';
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
        <Route path="/contacto" element={<Contact />} />
        <Route path="/salas-de-oralidad" element={<SalasOralidad />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
