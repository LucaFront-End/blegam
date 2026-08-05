import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  GitCommit, 
  CreditCard, 
  Fingerprint, 
  Building2, 
  Briefcase, 
  Landmark, 
  Building, 
  GraduationCap, 
  ArrowLeftRight, 
  Lock, 
  UserCheck, 
  ShieldAlert, 
  Sliders, 
  FileText, 
  Clock, 
  Maximize, 
  Cpu, 
  CheckCircle2, 
  Award, 
  Layers, 
  KeyRound, 
  Wrench, 
  Headphones, 
  ArrowRight, 
  Shield, 
  Check, 
  Zap, 
  Activity,
  ScanFace,
  ChevronRight
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { controlAccesosData, projectsDetailed as projects } from '../data/content';
import AccessBuildingInteractive from '../components/AccessBuildingInteractive/AccessBuildingInteractive';
import ProjectGallery from '../components/ProjectGallery/ProjectGallery';
import './ControlAccesos.css';

const ICON_MAP = {
  ShieldCheck: ShieldCheck,
  GitCommit: GitCommit,
  CreditCard: CreditCard,
  Fingerprint: Fingerprint,
  Building2: Building2,
  Briefcase: Briefcase,
  Landmark: Landmark,
  Building: Building,
  GraduationCap: GraduationCap,
  ArrowLeftRight: ArrowLeftRight,
  Lock: Lock,
  UserCheck: UserCheck,
  ShieldAlert: ShieldAlert,
  Sliders: Sliders,
  FileText: FileText,
  Clock: Clock,
  Maximize: Maximize,
  Cpu: Cpu,
  Award: Award,
  Layers: Layers,
  KeyRound: KeyRound,
  Wrench: Wrench,
  Headphones: Headphones
};

export default function ControlAccesos() {
  const [activeSolution, setActiveSolution] = useState('all');
  const [activeEnv, setActiveEnv] = useState('edificios');

  // Scroll reveal refs
  const heroRef = useScrollReveal();
  const introRef = useScrollReveal();
  const solutionsRef = useScrollReveal();
  const envRef = useScrollReveal();
  const howRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const integrationRef = useScrollReveal();
  const interactiveRef = useScrollReveal();
  const processRef = useScrollReveal();
  const whyRef = useScrollReveal();
  const casesRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const filteredSolutions = activeSolution === 'all' 
    ? controlAccesosData.solutions 
    : controlAccesosData.solutions.filter(s => s.id === activeSolution);

  const selectedEnv = controlAccesosData.environments.find(e => e.id === activeEnv) || controlAccesosData.environments[0];

  return (
    <main className="page-control-accesos">
      <Helmet>
        <title>Sistemas de Control de Acceso para Empresas e Instituciones | BLEGAM Corp</title>
        <meta 
          name="description" 
          content="Sistemas integrales de control de acceso: torniquetes, riel, tarjetas RFID y biométricos de huella y rostro. Soluciones para edificios, oficinas, bancos, gobierno y escuelas." 
        />
        <meta property="og:title" content="Control Inteligente. Accesos Seguros | BLEGAM Corp" />
        <meta property="og:description" content="Diseñamos e implementamos sistemas de control de acceso adaptados a cada operación. Soluciones llave en mano e integración de seguridad." />
      </Helmet>

      {/* ─── 1. HERO ─── */}
      <section className="accesos-hero" ref={heroRef}>
        <div className="hero-glow-bg" />
        <div className="container reveal" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-grid">
            <div className="hero-text-content">
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                {controlAccesosData.hero.badge}
              </span>
              <span className="hero-hook-tag">{controlAccesosData.hero.hook}</span>
              <h1 className="hero-h1-title">
                Sistemas de <span className="accent-gradient">Control de Acceso</span> para Empresas e Instituciones
              </h1>
              <p className="hero-excerpt">
                {controlAccesosData.hero.excerpt}
              </p>
              <div className="hero-actions">
                <Link to="/contacto?type=control-accesos" className="btn btn-primary btn-lg">
                  {controlAccesosData.hero.ctaPrimary} <ArrowRight size={18} className="ml-1" />
                </Link>
                <a href="#simulador" className="btn btn-outline btn-lg">
                  {controlAccesosData.hero.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Interactive Terminal Badge Simulator Card */}
            <div className="hero-visual-card">
              <div className="badge-simulator">
                <div className="badge-header">
                  <div className="badge-chip">
                    <Shield size={20} className="text-accent" />
                    <span>BLEGAM ACCESS CONTROL</span>
                  </div>
                  <span className="live-status">LIVE MONITOR</span>
                </div>
                
                <div className="badge-scanner-box">
                  <div className="scanner-line" />
                  <ScanFace size={64} className="scanner-icon" />
                  <div className="scan-target">
                    <span className="scan-corner top-left" />
                    <span className="scan-corner top-right" />
                    <span className="scan-corner bottom-left" />
                    <span className="scan-corner bottom-right" />
                  </div>
                </div>

                <div className="badge-details">
                  <div className="badge-row">
                    <span className="detail-label">AUTENTICACIÓN</span>
                    <span className="detail-val text-accent font-bold">BIOMÉTRICA + RFID</span>
                  </div>
                  <div className="badge-row">
                    <span className="detail-label">TIEMPO RESPUESTA</span>
                    <span className="detail-val font-mono">&lt; 0.2 seg</span>
                  </div>
                  <div className="badge-row">
                    <span className="detail-label">ESTADO DE ACCESO</span>
                    <span className="badge-granted">
                      <CheckCircle2 size={14} className="mr-1 inline-block" /> PERMITIDO
                    </span>
                  </div>
                </div>

                <div className="badge-footer-tags">
                  <span className="tag-pill">Torniquetes</span>
                  <span className="tag-pill">Riel</span>
                  <span className="tag-pill">Tarjetas</span>
                  <span className="tag-pill">Huella/Rostro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SEGURIDAD QUE COMIENZA DESDE EL ACCESO ─── */}
      <section className="accesos-intro-section" ref={introRef}>
        <div className="container reveal">
          <div className="section-header text-center">
            <span className="badge badge-accent mb-2">{controlAccesosData.intro.hook}</span>
            <h2 className="section-title">
              Seguridad que comienza <span className="accent-gradient">desde el acceso</span>
            </h2>
          </div>
          
          <div className="intro-card-box">
            <div className="intro-main-text">
              <p className="intro-paragraph">{controlAccesosData.intro.text}</p>
              <p className="intro-subparagraph">{controlAccesosData.intro.subtext}</p>
            </div>
            <div className="intro-metrics-grid">
              <div className="metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-label">Integración Multi-Marca</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">24/7</span>
                <span className="metric-label">Continuidad Operativa</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">+15</span>
                <span className="metric-label">Años de Experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SOLUCIONES DE CONTROL DE ACCESO ─── */}
      <section className="accesos-solutions-section" ref={solutionsRef} id="soluciones">
        <div className="container reveal">
          <div className="section-header text-center">
            <span className="badge badge-accent mb-2">Tecnologías Principales</span>
            <h2 className="section-title">
              Soluciones de <span className="accent-gradient">Control de Acceso</span>
            </h2>
            <p className="section-subtitle">
              Sistemas adaptados según el volumen de tránsito, nivel de seguridad y requerimientos de cada instalación.
            </p>

            {/* Filter Tabs */}
            <div className="solutions-filter-tabs">
              <button 
                className={`filter-btn ${activeSolution === 'all' ? 'active' : ''}`}
                onClick={() => setActiveSolution('all')}
              >
                Todas las Soluciones
              </button>
              {controlAccesosData.solutions.map((s) => (
                <button
                  key={s.id}
                  className={`filter-btn ${activeSolution === s.id ? 'active' : ''}`}
                  onClick={() => setActiveSolution(s.id)}
                >
                  {s.title.replace('Control de Acceso ', '')}
                </button>
              ))}
            </div>
          </div>

          <div className="solutions-cards-grid">
            {filteredSolutions.map((sol) => {
              const IconComp = ICON_MAP[sol.icon] || ShieldCheck;
              return (
                <div key={sol.id} className="sol-card">
                  <div className="sol-card-header">
                    <div className="sol-icon-wrapper">
                      <IconComp size={28} />
                    </div>
                    <span className="sol-tag-badge">{sol.tag}</span>
                  </div>
                  <h3 className="sol-title">{sol.title}</h3>
                  <p className="sol-desc">{sol.desc}</p>
                  
                  <div className="sol-ideal-block">
                    <span className="ideal-title">Ideal para:</span>
                    <div className="ideal-tags-wrap">
                      {sol.idealFor.map((item, i) => (
                        <span key={i} className="ideal-chip">{item}</span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contacto?type=control-accesos" className="sol-card-link">
                    Solicitar especificación <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. UNA SOLUCIÓN PARA CADA ENTORNO ─── */}
      <section className="accesos-env-section" ref={envRef}>
        <div className="container reveal">
          <div className="section-header text-center">
            <span className="badge badge-accent mb-2">Sectores e Industrias</span>
            <h2 className="section-title">
              Una solución para <span className="accent-gradient">cada entorno</span>
            </h2>
            <p className="section-subtitle">
              Cada espacio requiere un nivel diferente de control. Diseñamos e implementamos perfiles específicos.
            </p>
          </div>

          <div className="env-interactive-wrapper">
            <div className="env-tabs-sidebar">
              {controlAccesosData.environments.map((env) => {
                const IconComp = ICON_MAP[env.icon] || Building2;
                return (
                  <button
                    key={env.id}
                    className={`env-tab-btn ${activeEnv === env.id ? 'active' : ''}`}
                    onClick={() => setActiveEnv(env.id)}
                  >
                    <IconComp size={22} className="env-tab-icon" />
                    <span>{env.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="env-detail-content">
              <div className="env-card-display">
                <div className="env-display-header">
                  <div className="env-big-icon">
                    {(() => {
                      const IconComponent = ICON_MAP[selectedEnv.icon] || Building2;
                      return <IconComponent size={40} />;
                    })()}
                  </div>
                  <div>
                    <span className="env-tag font-mono">ARQUITECTURA ADAPTATIVA</span>
                    <h3 className="env-display-title">{selectedEnv.title}</h3>
                  </div>
                </div>

                <p className="env-display-desc">{selectedEnv.desc}</p>

                <div className="env-features-grid">
                  {selectedEnv.features.map((feat, idx) => (
                    <div key={idx} className="env-feat-item">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="env-display-footer">
                  <Link to="/contacto?type=control-accesos" className="btn btn-primary">
                    Cotizar para {selectedEnv.title} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. ¿CÓMO FUNCIONA? ─── */}
      <section className="accesos-how-section" ref={howRef}>
        <div className="container reveal">
          <div className="section-header text-center">
            <span className="badge badge-accent mb-2">{controlAccesosData.howItWorks.hook}</span>
            <h2 className="section-title">
              ¿Cómo <span className="accent-gradient">funciona</span>?
            </h2>
            <p className="section-subtitle">
              Flujo automatizado de 4 pasos para garantizar seguridad inmediata y trazabilidad.
            </p>
          </div>

          <div className="how-steps-timeline">
            {controlAccesosData.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="how-step-card">
                <div className="step-num-badge">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                {idx < controlAccesosData.howItWorks.steps.length - 1 && (
                  <div className="step-arrow-line" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. MUCHO MÁS QUE ABRIR UNA PUERTA ─── */}
      <section className="accesos-benefits-section" ref={benefitsRef}>
        <div className="container reveal">
          <div className="section-header text-center">
            <span className="badge badge-accent mb-2">{controlAccesosData.benefits.hook}</span>
            <h2 className="section-title">
              Mucho más que <span className="accent-gradient">abrir una puerta</span>
            </h2>
            <p className="section-subtitle">
              Beneficios estratégicos que transforman los accesos en puntos de inteligencia operativa.
            </p>
          </div>

          <div className="benefits-cards-grid">
            {controlAccesosData.benefits.items.map((item, idx) => {
              const IconComp = ICON_MAP[item.icon] || ShieldCheck;
              return (
                <div key={idx} className="benefit-card">
                  <div className="benefit-icon-box">
                    <IconComp size={24} />
                  </div>
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. INTEGRACIÓN CON TU ECOSISTEMA DE SEGURIDAD ─── */}
      <section className="accesos-integration-section" ref={integrationRef}>
        <div className="container reveal">
          <div className="integration-banner">
            <div className="integration-content">
              <span className="badge badge-accent mb-3">{controlAccesosData.integration.hook}</span>
              <h2 className="integration-title">
                Integración con tu <span className="accent-gradient">ecosistema de seguridad</span>
              </h2>
              <p className="integration-desc">
                {controlAccesosData.integration.desc}
              </p>
              <p className="integration-subtext">
                {controlAccesosData.integration.subtext}
              </p>
              <div className="integration-tags">
                <span className="integ-tag"><Cpu size={14} className="mr-1" /> CCTV / VMS Multi-marca</span>
                <span className="integ-tag"><Layers size={14} className="mr-1" /> Alarmas e Intrusión</span>
                <span className="integ-tag"><Activity size={14} className="mr-1" /> Redes & Servidores</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. SECCIÓN INTERACTIVA — DISEÑADOR ─── */}
      <section className="accesos-interactive-section" ref={interactiveRef} id="simulador">
        <div className="container reveal">
          <AccessBuildingInteractive zones={controlAccesosData.interactiveZones} />
        </div>
      </section>

      {/* ─── 9. NUESTRO PROCESO ─── */}
      <section className="accesos-process-section" ref={processRef}>
        <div className="container reveal">
          <div className="section-header text-center">
            <span className="badge badge-accent mb-2">{controlAccesosData.process.hook}</span>
            <h2 className="section-title">
              Nuestro <span className="accent-gradient">Proceso</span> Llave en Mano
            </h2>
            <p className="section-subtitle">
              De la ingeniería a la operación: 8 etapas garantizadas por SLA.
            </p>
          </div>

          <div className="process-pipeline-grid">
            {controlAccesosData.process.steps.map((proc, idx) => (
              <div key={idx} className="process-pipeline-card">
                <div className="pipeline-num">{proc.num}</div>
                <h4 className="pipeline-title">{proc.title}</h4>
                <p className="pipeline-desc">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. ¿POR QUÉ BLEGAM? ─── */}
      <section className="accesos-why-section" ref={whyRef}>
        <div className="container reveal">
          <div className="why-card-box">
            <div className="why-text-side">
              <span className="badge badge-accent mb-2">{controlAccesosData.whyBlegam.hook}</span>
              <h2 className="why-title">¿Por qué <span className="accent-gradient">BLEGAM</span>?</h2>
              <p className="why-desc">{controlAccesosData.whyBlegam.desc}</p>
            </div>

            <div className="why-highlights-side">
              {controlAccesosData.whyBlegam.highlights.map((h, i) => {
                const IconComp = ICON_MAP[h.icon] || Award;
                return (
                  <div key={i} className="why-hl-item">
                    <div className="why-hl-icon">
                      <IconComp size={20} />
                    </div>
                    <span className="why-hl-label">{h.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. PROYECTOS / CASOS DE ÉXITO ─── */}
      <section className="accesos-cases-section" ref={casesRef}>
        <div className="container reveal">
          <div className="section-header text-center">
            <span className="badge badge-accent mb-2">Proyectos Destacados</span>
            <h2 className="section-title">
              Seguridad <span className="accent-gradient">diseñada para operar</span>
            </h2>
            <p className="section-subtitle">
              Fotografías reales de instalaciones e infraestructura implementada por BLEGAM.
            </p>
          </div>

          <ProjectGallery projects={projects} />
        </div>
      </section>

      {/* ─── 12. CTA FINAL ─── */}
      <section className="accesos-cta-section" ref={ctaRef} id="contacto">
        <div className="container reveal">
          <div className="cta-banner-box">
            <span className="badge badge-accent mb-3">{controlAccesosData.ctaFinal.hook}</span>
            <h2 className="cta-banner-title">
              Controla tus accesos. <span className="accent-gradient">Fortalece tu seguridad.</span>
            </h2>
            <p className="cta-banner-desc">
              {controlAccesosData.ctaFinal.desc}
            </p>
            <div className="cta-banner-actions">
              <Link to="/contacto?type=control-accesos" className="btn btn-primary btn-lg">
                {controlAccesosData.ctaFinal.ctaPrimary} <ArrowRight size={18} className="ml-1" />
              </Link>
              <a href="https://wa.link/nf8gq3" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
                {controlAccesosData.ctaFinal.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
