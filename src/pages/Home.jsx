import { Link } from 'react-router-dom';
import { brand, valueProps } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import StatsStrip from '../components/StatsStrip/StatsStrip';
import ServicesGrid from '../components/ServicesGrid/ServicesGrid';
import ValueFlow from '../components/ValueFlow/ValueFlow';
import MexicoMap from '../components/MexicoMap/MexicoMap';
import LogosMarquee from '../components/LogosMarquee/LogosMarquee';
import IsometricHero from '../components/IsometricHero/IsometricHero';
import './Home.css';

export default function Home() {
  const vpRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <main className="page-home">
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-grid-overlay" />
          <div className="glow-orb blue" style={{ width: '600px', height: '600px', top: '-200px', right: '-100px' }} />
          <div className="glow-orb purple" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px' }} />
        </div>

        <div className="hero-content container">
          <div className="hero-text">
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Empresa 100% Mexicana · Fundada en 2010
            </span>
            <h1 className="hero-title">
              Infraestructura <span className="accent-gradient">Crítica</span> para el Futuro Digital
            </h1>
            <p className="hero-subtitle">
              Tecnología aplicada a entornos de misión crítica. Soluciones integrales para justicia, seguridad y comunicaciones.
            </p>
            <div className="hero-actions">
              <Link to="/contacto" className="btn btn-primary">
                Solicitar Cotización
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/salas-de-oralidad" className="btn btn-outline">
                Explorar Salas de Oralidad
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <IsometricHero />
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <StatsStrip />

      {/* ─── SERVICES ─── */}
      <ServicesGrid />

      {/* ─── VALUE PROPS (ValueFlow) ─── */}
      <ValueFlow />

      {/* ─── PROJECTS MAP ─── */}
      <MexicoMap />

      {/* ─── LOGOS ─── */}
      <LogosMarquee />

      {/* ─── CTA ─── */}
      <section className="cta-section" ref={ctaRef}>
        <div className="container">
          <div className="cta-card reveal">
            <div className="cta-gradient-border" />
            <div className="cta-card-inner">
              <div className="cta-grid-bg" />
              <div className="cta-content">
                <span className="cta-badge">Inicio Inmediato</span>
                <h2 className="cta-title">
                  El Futuro de tu Infraestructura<br />
                  <span className="accent-gradient">Comienza Aquí</span>
                </h2>
                <p className="cta-desc">
                  Tecnología de misión crítica, integración perfecta y soporte continuo. Únete a las instituciones de alto nivel que ya confían en Blegam.
                </p>
                <div className="cta-actions">
                  <Link to="/contacto" className="btn btn-primary cta-btn">
                    Solicitar Diagnóstico
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a href={brand.contact.whatsappLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    Hablar con un Experto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
