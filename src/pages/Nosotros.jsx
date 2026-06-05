import { Link } from 'react-router-dom';
import { brand, certifications } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useScrollReveal';
import AnimatedTimeline from '../components/AnimatedTimeline/AnimatedTimeline';
import DNAGrid from '../components/DNAGrid/DNAGrid';
import CommandCenter from '../components/CommandCenter/CommandCenter';
import './Nosotros.css';

export default function Nosotros() {
  const heroRef = useScrollReveal();
  const certRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const yearsRef = useCountUp(15, 2000);
  const salasRef = useCountUp(200, 2500);

  return (
    <main className="page-nosotros">
      {/* ─── 1. HERO STATEMENT ─── */}
      <section className="nosotros-hero" ref={heroRef}>
        <div className="nosotros-hero-bg">
          <div className="nosotros-hero-gradient" />
          <div className="nosotros-hero-grid" />
          <div className="glow-orb blue" style={{ width: '500px', height: '500px', top: '-100px', left: '-100px' }} />
        </div>

        <div className="container reveal" style={{ position: 'relative', zIndex: 1 }}>
          <div className="nosotros-hero-content">
            <span className="hero-badge" style={{ margin: '0 auto 28px' }}>
              <span className="hero-badge-dot" />
              Sobre BLEGAM CORP
            </span>

            <h1 className="nosotros-hero-title">
              Construimos la<br />
              <span className="accent-gradient">Infraestructura del Futuro</span>
            </h1>

            <p className="nosotros-hero-sub">
              Desde 2010, somos la empresa integradora mexicana que transforma la justicia,
              la seguridad y las comunicaciones con tecnología de misión crítica.
            </p>

            <div className="nosotros-hero-counters">
              <div className="nhc-item">
                <span className="nhc-value" ref={yearsRef}>0</span>
                <span className="nhc-suffix">+</span>
                <span className="nhc-label">Años de Experiencia</span>
              </div>
              <div className="nhc-divider" />
              <div className="nhc-item">
                <span className="nhc-value" ref={salasRef}>0</span>
                <span className="nhc-suffix">+</span>
                <span className="nhc-label">Salas Implementadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. TIMELINE ─── */}
      <AnimatedTimeline />

      {/* ─── 3. DNA VALUES GRID ─── */}
      <DNAGrid />

      {/* ─── 4. COMMAND CENTER ─── */}
      <CommandCenter />

      {/* ─── 5. CERTIFICATIONS ─── */}
      <section className="cert-section grid-bg" ref={certRef}>
        <div className="container reveal">
          <span className="section-label">Respaldo Institucional</span>
          <h2 className="section-title">
            Certificaciones & <span className="accent">Partners</span>
          </h2>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div key={i} className={`cert-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="cert-type-badge">{cert.type}</div>
                <h4>{cert.name}</h4>
                <div className="cert-shine" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA RADAR ─── */}
      <section className="radar-cta-section" ref={ctaRef}>
        <div className="radar-bg">
          <div className="radar-ring r1" />
          <div className="radar-ring r2" />
          <div className="radar-ring r3" />
          <div className="radar-sweep" />
          <div className="radar-center-dot" />
        </div>
        <div className="container reveal" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 className="cta-title">
            ¿Listo para ser parte de la <span className="accent-gradient">Misión</span>?
          </h2>
          <p className="cta-desc">
            Nuestro equipo de expertos está listo para diseñar la solución perfecta para tu organización.
          </p>
          <div className="cta-actions">
            <Link to="/contacto" className="btn btn-primary">Hablar con el Equipo →</Link>
            <a href={brand.contact.whatsappLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp Directo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
