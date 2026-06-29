import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brand, valueProps } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import StatsStrip from '../components/StatsStrip/StatsStrip';
import ServicesGrid from '../components/ServicesGrid/ServicesGrid';
import ValueFlow from '../components/ValueFlow/ValueFlow';
import MexicoMap from '../components/MexicoMap/MexicoMap';
import LogosMarquee from '../components/LogosMarquee/LogosMarquee';
import IsometricHero from '../components/IsometricHero/IsometricHero';
import { useLanding } from '../context/LandingContext';
import './Home.css';

export default function Home() {
  const vpRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const landing = useLanding();

  // Custom hero content based on dynamic landing context
  let displayTitle = (
    <>
      Infraestructura <span className="accent-gradient">Crítica</span> para el Futuro Digital
    </>
  );
  let displaySubtitle = "Tecnología aplicada a entornos de misión crítica. Soluciones integrales para justicia, seguridad y comunicaciones.";
  let displayBadge = "Empresa 100% Mexicana · Fundada en 2010";

  if (landing) {
    displayBadge = `Cobertura: ${landing.ciudad}, ${landing.estado}`;
    
    // Split "Instalación de Salas de Juicios Orales en [Ciudad]" to wrap [Ciudad] in a gradient
    const parts = (landing.titulo || '').split(' en ');
    if (parts.length > 1) {
      displayTitle = (
        <>
          {parts[0]} <span className="accent-gradient">en {parts.slice(1).join(' en ')}</span>
        </>
      );
    } else {
      displayTitle = landing.titulo;
    }
    displaySubtitle = landing.excerpt || displaySubtitle;
  }

  return (
    <main className="page-home">
      {!landing && (
        <Helmet>
          <title>Instalación de Salas de Juicios Orales e Implementación de IT a Empresas | Blegam Corp</title>
          <meta name="description" content="Blegam Corp es especialista en instalación de Salas de Juicios Orales e implementación de IT a empresas. Integramos audio, video, redes, videoconferencia e infraestructura tecnológica para instituciones y corporativos." />
        </Helmet>
      )}
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
              {displayBadge}
            </span>
            <h1 className="hero-title">
              {displayTitle}
            </h1>
            <p className="hero-subtitle">
              {displaySubtitle}
            </p>
            <div className="hero-actions">

              <Link to={landing ? `/contacto?ciudad=${encodeURIComponent(landing.ciudad)}&type=${landing.type}` : "/contacto"} className="btn btn-primary">
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
      <div className="home-map-intro container" style={{ textAlign: 'center', paddingTop: '120px', paddingBottom: '24px' }}>
        <span className="section-label">Cobertura Nacional</span>
        <h2 className="section-title">
          Proyectos en <span className="accent">{landing ? landing.ciudad : 'Todo México'}</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, fontSize: '1rem' }}>
          {landing
            ? `Proyectos ejecutados a nivel nacional. Cotiza la instalación y mantenimiento de salas de oralidad e infraestructura IT en ${landing.ciudad}, ${landing.estado}.`
            : "Más de 200 proyectos ejecutados en múltiples estados. Selecciona un pin en el mapa para explorar los detalles."}
        </p>
      </div>
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
                  <span className="accent-gradient">{landing ? `en ${landing.ciudad}` : 'Comienza Aquí'}</span>
                </h2>
                <p className="cta-desc">
                  {landing
                    ? `Tecnología de misión crítica, integración perfecta y soporte continuo en la zona de ${landing.ciudad}, ${landing.estado}.`
                    : "Tecnología de misión crítica, integración perfecta y soporte continuo. Únete a las instituciones de alto nivel que ya confían en Blegam."}
                </p>
                <div className="cta-actions">
                  <Link to={landing ? `/contacto?ciudad=${encodeURIComponent(landing.ciudad)}&type=${landing.type}` : "/contacto"} className="btn btn-primary cta-btn">
                    Solicitar Diagnóstico
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a href={landing ? landing.whatsappUrl : brand.contact.whatsappLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
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
