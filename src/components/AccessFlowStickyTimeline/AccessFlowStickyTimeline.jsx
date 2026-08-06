import { useState, useEffect, useRef } from 'react';
import { 
  ClipboardCheck, 
  Compass, 
  Wrench, 
  Award, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Server,
  FileText,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './AccessFlowStickyTimeline.css';

const SERVICE_PROCESS_STEPS = [
  {
    step: "01",
    id: "step-1",
    title: "Levantamiento Técnico & Diagnóstico en Sitio",
    subtitle: "Auditoría Perimetral & Conteo de Flujo (Día 1 - 2)",
    desc: "Nuestros ingenieros inspeccionan tus instalaciones en todo México para auditar accesos, analizar la densidad de tránsito en horas pico y detectar vulnerabilidades.",
    icon: ClipboardCheck,
    badge: "Diagnóstico Inicial",
    techHighlights: [
      { name: "Mapa de vulnerabilidades perimetrales y puertas", icon: ShieldCheck },
      { name: "Conteo de flujo peatonal y vehicular en horas pico", icon: Clock },
      { name: "Definición de requerimientos de hardware y biometría", icon: FileText }
    ],
    metrics: "Entregable: Dictamen técnico sin costo"
  },
  {
    step: "02",
    id: "step-2",
    title: "Ingeniería de Proyecto & Diseño CAD",
    subtitle: "Arquitectura Llave en Mano & Propuesta MXN (Día 3 - 5)",
    desc: "Diseñamos el plano ejecutivo de la instalación (diagramación CAD/BIM), seleccionando la combinación óptima de torniquetes, lectoras biométricas y cableado.",
    icon: Compass,
    badge: "Diseño Ejecutivo",
    techHighlights: [
      { name: "Planos ejecutivos de infraestructura y canalizaciones", icon: FileText },
      { name: "Selección de torniquetes, barreras y lectoras 3D", icon: Cpu },
      { name: "Cotización transparente en MXN sin gastos ocultos", icon: Zap }
    ],
    metrics: "Entregables: Carpetas CAD y propuesta económica"
  },
  {
    step: "03",
    id: "step-3",
    title: "Instalación Física & Cableado Estructurado",
    subtitle: "Montaje de Hardware, Canalización & Energía (Día 6 - 10)",
    desc: "Técnicos certificados ejecutan la fijación de torniquetes y chapas electromagnéticas, tirado de cableado norma ANSI/TIA/EIA y respaldo de energía.",
    icon: Wrench,
    badge: "Implementación en Sitio",
    techHighlights: [
      { name: "Montaje físico de torniquetes, barreras y lectoras", icon: Wrench },
      { name: "Canalización y tirado de cable UTP / Fibra Óptica", icon: Server },
      { name: "Pruebas de continuidad eléctrica y respaldo de batería", icon: Zap }
    ],
    metrics: "Ejecución: Técnicos certificados BLEGAM"
  },
  {
    step: "04",
    id: "step-4",
    title: "Comisionamiento BLEGAM OS & Entrega 24/7",
    subtitle: "Capacitación, Memoria Técnica & Póliza SLA (Día 11+)",
    desc: "Alta de base de datos de usuarios, reglas anti-passback, integración CCTV, capacitación al personal de seguridad y entrega de memoria técnica 'As-Built'.",
    icon: Award,
    badge: "Operación Garantizada",
    techHighlights: [
      { name: "Carga masiva de credenciales y rostros 3D en Nube", icon: Cpu },
      { name: "Capacitación al personal de administración y seguridad", icon: CheckCircle2 },
      { name: "Entrega de carpetas 'As-Built' y Póliza SLA 24/7", icon: ShieldCheck }
    ],
    metrics: "Garantía: Soporte 24/7 por contrato"
  }
];

export default function AccessFlowStickyTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.45;

      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const top = ref.offsetTop;
          const height = ref.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveStepIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index) => {
    setActiveStepIndex(index);
    const targetRef = stepRefs.current[index];
    if (targetRef) {
      const yOffset = -100;
      const y = targetRef.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="flow-sticky-container">
      {/* Header */}
      <div className="section-header text-center">
        <span className="badge badge-accent mb-2">
          <Sparkles size={14} className="mr-1 inline-block" />
          Proceso del Servicio de Principio a Fin
        </span>
        <h2 className="section-title">
          ¿Cómo <span className="accent-gradient">funciona el proceso</span> de implementación?
        </h2>
        <p className="section-subtitle">
          De la ingeniería inicial a la operación garantizada: 4 pasos transparentes para equipar tu inmueble sin contratiempos.
        </p>
      </div>

      {/* Main Sticky Grid */}
      <div className="sticky-timeline-grid">
        {/* Left Sticky Progress Track Sidebar */}
        <div className="sticky-track-sidebar">
          <div className="sticky-track-inner">
            <span className="track-title font-mono">ETAPAS DEL SERVICIO:</span>

            {/* Glowing Vertical Line */}
            <div className="track-line-bg">
              <div 
                className="track-line-progress" 
                style={{ height: `${((activeStepIndex + 1) / SERVICE_PROCESS_STEPS.length) * 100}%` }}
              />
            </div>

            {/* Step Track Buttons */}
            <div className="track-steps-list">
              {SERVICE_PROCESS_STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStepIndex === idx;

                return (
                  <button
                    key={step.id}
                    className={`track-step-btn ${isActive ? 'active' : ''}`}
                    onClick={() => scrollToStep(idx)}
                  >
                    <div className="step-btn-badge">
                      <span className="step-btn-num">{step.step}</span>
                    </div>
                    <div className="step-btn-content">
                      <span className="step-btn-title">{step.title.split('&')[0]}</span>
                      <span className="step-btn-sub">{step.badge}</span>
                    </div>
                    <IconComponent size={18} className="step-btn-icon" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Scrollable Step Cards */}
        <div className="sticky-content-column">
          {SERVICE_PROCESS_STEPS.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStepIndex === idx;

            return (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[idx] = el)}
                className={`step-scroll-card ${isActive ? 'is-active' : ''}`}
              >
                <div className="card-step-header">
                  <div className="step-icon-box">
                    <StepIcon size={28} />
                  </div>
                  <div>
                    <span className="badge badge-accent mb-1">FASE {step.step}</span>
                    <h3 className="card-step-title">{step.title}</h3>
                    <span className="card-step-sub">{step.subtitle}</span>
                  </div>
                </div>

                <p className="card-step-desc">{step.desc}</p>

                {/* Tech Highlights Inside Step Card */}
                <div className="step-highlights-box">
                  <span className="hl-title-label">ENTREGABLES Y ACCIONES CLAVE:</span>
                  <div className="hl-grid">
                    {step.techHighlights.map((hl, i) => {
                      const HlIcon = hl.icon;
                      return (
                        <div key={i} className="hl-tech-item">
                          <HlIcon size={16} className="text-accent flex-shrink-0" />
                          <span>{hl.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Metric Footer Bar */}
                <div className="step-metric-bar">
                  <Zap size={15} className="text-accent mr-1 inline-block" />
                  <span>{step.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
