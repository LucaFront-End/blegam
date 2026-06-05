import { Link } from 'react-router-dom';
import { brand } from '../data/content';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import MexicoMap from '../components/MexicoMap/MexicoMap';
import TestimonialsCarousel from '../components/TestimonialsCarousel/TestimonialsCarousel';
import './Proyectos.css';

export default function Proyectos() {
  const ctaRef = useScrollReveal();
  const countRef = useCountUp(200, 2500);

  return (
    <main className="page-proyectos">
      {/* ─── 1. COMPACT HERO ─── */}
      <section className="proy-hero-compact">
        <div className="proy-hero-bg-grad" />
        <div className="container reveal" style={{ position: 'relative', zIndex: 1 }}>
          <div className="proy-hero-row">
            <div className="proy-hero-left">
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                Track Record Comprobado
              </span>
              <h1 className="proy-title">
                Proyectos <span className="accent-gradient">Exitosos</span>
              </h1>
              <p className="proy-sub">
                Cada pin en el mapa representa un proyecto donde hemos transformado la infraestructura tecnológica de nuestros clientes.
              </p>
            </div>
            <div className="proy-hero-stats">
              <div className="proy-stat-big">
                <span className="proy-stat-number" ref={countRef}>0</span>
                <span className="proy-stat-plus">+</span>
              </div>
              <span className="proy-stat-label">Proyectos Completados</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MAP (Full-Width Hero Section) ─── */}
      <MexicoMap />

      {/* ─── 3. TESTIMONIALS ─── */}
      <TestimonialsCarousel />

      {/* ─── 4. CTA ─── */}
      <section className="proyectos-cta" ref={ctaRef}>
        <div className="matrix-bg">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="matrix-col" style={{ animationDelay: `${i * 0.3}s`, left: `${(i / 12) * 100}%` }}>
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="matrix-char">
                  {String.fromCharCode(48 + Math.floor(Math.random() * 10))}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="container reveal" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 className="cta-title">
            Tu proyecto puede ser el <span className="accent-gradient">siguiente</span>
          </h2>
          <p className="cta-desc">
            Contáctanos y descubre cómo podemos transformar tu infraestructura tecnológica.
          </p>
          <div className="cta-actions">
            <Link to="/contacto" className="btn btn-primary">Iniciar mi Proyecto →</Link>
            <Link to="/servicios" className="btn btn-outline">Ver Servicios</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
