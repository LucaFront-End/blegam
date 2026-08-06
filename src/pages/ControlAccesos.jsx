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
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { controlAccesosData, projectsDetailed as projects } from '../data/content';
import AccessBuildingInteractive from '../components/AccessBuildingInteractive/AccessBuildingInteractive';
import AccessComparisonInteractive from '../components/AccessComparisonInteractive/AccessComparisonInteractive';
import AccessSolutionsInteractive from '../components/AccessSolutionsInteractive/AccessSolutionsInteractive';
import AccessEnvironmentsInteractive from '../components/AccessEnvironmentsInteractive/AccessEnvironmentsInteractive';
import AccessFlowStickyTimeline from '../components/AccessFlowStickyTimeline/AccessFlowStickyTimeline';
import AccessBenefitsROICalculator from '../components/AccessBenefitsROICalculator/AccessBenefitsROICalculator';
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
                <a href="https://wa.link/nf8gq3" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  {controlAccesosData.hero.ctaPrimary} <ArrowRight size={18} className="ml-1" />
                </a>
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

      {/* ─── 2. SEGURIDAD QUE COMIENZA DESDE EL ACCESO (COMPARATIVA DENSIDAD & RENDIMIENTO) ─── */}
      <section className="accesos-intro-section" ref={introRef}>
        <div className="container reveal">
          <AccessComparisonInteractive />
        </div>
      </section>

      {/* ─── 3. SOLUCIONES DE CONTROL DE ACCESO (SHOWCASE HOLOGRÁFICO 3D) ─── */}
      <section className="accesos-solutions-section" ref={solutionsRef} id="soluciones">
        <div className="container reveal">
          <AccessSolutionsInteractive />
        </div>
      </section>

      {/* ─── 4. UNA SOLUCIÓN PARA CADA ENTORNO (SIMULADOR ARQUITECTÓNICO DE SECTORES) ─── */}
      <section className="accesos-env-section" ref={envRef}>
        <div className="container reveal">
          <AccessEnvironmentsInteractive />
        </div>
      </section>

      {/* ─── 5. ¿CÓMO FUNCIONA? (TIMELINE INTERACTIVA STICKY SCROLL) ─── */}
      <section className="accesos-how-section" ref={howRef}>
        <div className="container">
          <AccessFlowStickyTimeline />
        </div>
      </section>

      {/* ─── 6. MUCHO MÁS QUE ABRIR UNA PUERTA (SIMULADOR DE ROI & BENEFICIOS ESTRATÉGICOS) ─── */}
      <section className="accesos-benefits-section" ref={benefitsRef}>
        <div className="container reveal">
          <AccessBenefitsROICalculator />
        </div>
      </section>

      {/* ─── 7. CTA FINAL Y CIERRE ─── */}
      <section className="accesos-cta-section" ref={ctaRef} id="contacto">
        <div className="container reveal">
          <div className="cta-banner-box text-center">
            <span className="badge badge-accent mb-3">Cotización & Levantamiento en Sitio</span>
            <h2 className="cta-banner-title">
              Controla tus accesos. <span className="accent-gradient">Fortalece tu seguridad.</span>
            </h2>
            <p className="cta-banner-desc">
              Protege tu infraestructura con la tecnología e ingeniería llave en mano de BLEGAM. Asesoría y levantamiento inicial sin costo en todo México.
            </p>

            <div className="cta-banner-actions">
              <a href="https://wa.link/nf8gq3" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Solicitar Cotización y Levantamiento <ArrowRight size={20} className="ml-1" />
              </a>
              <a href="https://wa.link/nf8gq3" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg flex items-center justify-center">
                <MessageCircle size={20} className="mr-2 text-emerald-400" />
                Asesoría Inmediata por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
