import { useState } from 'react';
import { 
  ClipboardCheck, 
  Compass, 
  Wrench, 
  Cpu, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import './AccessServiceProcessPipeline.css';

const END_TO_END_PROCESS = [
  {
    phase: "01",
    id: "fase-1",
    title: "Levantamiento Técnico & Análisis en Sitio",
    subtitle: "Diagnóstico de Vulnerabilidades & Conteo de Flujo",
    timeline: "Día 1 a 2",
    icon: ClipboardCheck,
    tag: "Diagnóstico Inicial",
    desc: "Nuestros ingenieros visitan tus instalaciones para auditar los puntos de acceso, calcular la densidad de tránsito en horas pico y definir los requerimientos de seguridad.",
    deliverables: ["Mapa de vulnerabilidades perimetrales", "Conteo estimado de flujo peato-vehicular", "Matriz de requerimientos de hardware"]
  },
  {
    phase: "02",
    id: "fase-2",
    title: "Ingeniería de Proyecto & Arquitectura CAD",
    subtitle: "Diseño Llave en Mano & Selección de Equipos",
    desc: "Diseñamos el plano ejecutivo de la instalación (diagramación CAD/BIM), seleccionando la combinación óptima de torniquetes, lectoras biométricas y controladores.",
    timeline: "Día 3 a 5",
    icon: Compass,
    tag: "Ingeniería Ejecutiva",
    deliverables: ["Planos ejecutivos de infraestructura", "Especificación técnica de torniquetes y sensores", "Propuesta económica sin costos ocultos"]
  },
  {
    phase: "03",
    id: "fase-3",
    title: "Instalación Física & Cableado Estructurado",
    subtitle: "Montaje de Hardware, Canalización & Electricidad",
    desc: "Técnicos certificados ejecutan la fijación de equipos, obra menor, tirado de cableado de datos UTP/Fibra óptica y conexionado de energía con respaldo de batería.",
    timeline: "Día 6 a 10",
    icon: Wrench,
    tag: "Implementación en Sitio",
    deliverables: ["Montaje físico de torniquetes y lectoras", "Canalización norma ANSI/TIA/EIA", "Pruebas de continuidad eléctrica y datos"]
  },
  {
    phase: "04",
    id: "fase-4",
    title: "Configuración de BLEGAM OS & Nube",
    subtitle: "Carga de Usuarios, Permisos & Integración CCTV",
    desc: "Comisionamiento del software central: alta de base de datos de empleados, reglas de acceso, horarios, integración con cámaras CCTV y protocolo anti-passback.",
    timeline: "Día 11 a 13",
    icon: Cpu,
    tag: "Comisionamiento Digital",
    deliverables: ["Carga masiva de credenciales y rostros 3D", "Integración con sistema VMS de video", "Pruebas de estrés y respuesta en milisegundos"]
  },
  {
    phase: "05",
    id: "fase-5",
    title: "Capacitación, Entrega & Soporte 24/7",
    subtitle: "Memoria Técnica, Certificación & Póliza SLA",
    desc: "Capacitamos a tu equipo de seguridad y administración, entregamos la memoria técnica completa 'As-Built' y activamos tu garantía y soporte post-venta.",
    timeline: "Día 14 en adelante",
    icon: Award,
    tag: "Operación Garantizada",
    deliverables: ["Capacitación presencial/virtual al personal", "Entrega de carpeta técnica 'As-Built'", "Póliza de mantenimiento y soporte SLA 24/7"]
  }
];

export default function AccessServiceProcessPipeline() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const currentStep = END_TO_END_PROCESS[activeStepIdx];
  const ActiveIcon = currentStep.icon;

  return (
    <div className="service-process-wrapper">
      {/* Section Header */}
      <div className="section-header text-center">
        <span className="badge badge-accent mb-2">
          <Sparkles size={14} className="mr-1 inline-block" />
          Proceso Llave en Mano de Principio a Fin
        </span>
        <h2 className="section-title">
          Nuestro <span className="accent-gradient">Proceso del Servicio</span>
        </h2>
        <p className="section-subtitle">
          De la ingeniería inicial al soporte continuo: 5 fases transparentes con entregables garantizados por contrato.
        </p>
      </div>

      {/* Process Pipeline Navigation */}
      <div className="pipeline-steps-nav">
        {END_TO_END_PROCESS.map((p, idx) => {
          const StepIcon = p.icon;
          const isActive = activeStepIdx === idx;
          const isCompleted = idx < activeStepIdx;

          return (
            <button
              key={p.id}
              className={`pipeline-nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
              onClick={() => setActiveStepIdx(idx)}
            >
              <div className="nav-step-circle">
                {isCompleted ? <CheckCircle2 size={18} /> : <StepIcon size={20} />}
                <span className="nav-step-num font-mono">{p.phase}</span>
              </div>

              <div className="nav-step-info">
                <span className="nav-step-time font-mono">{p.timeline}</span>
                <span className="nav-step-title">{p.title.split('&')[0]}</span>
              </div>

              {idx < END_TO_END_PROCESS.length - 1 && (
                <div className="nav-step-connector" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep-Detail Stage */}
      <div className="phase-detail-stage">
        <div className="phase-stage-grid">
          {/* Left Info Column */}
          <div className="phase-info-col">
            <div className="phase-badge-row">
              <span className="badge badge-accent">{currentStep.tag}</span>
              <span className="phase-time-pill font-mono">
                <Clock size={14} className="mr-1 inline-block text-accent" />
                {currentStep.timeline}
              </span>
            </div>

            <div className="phase-title-group">
              <div className="phase-icon-box">
                <ActiveIcon size={32} />
              </div>
              <div>
                <span className="phase-num-tag font-mono">FASE {currentStep.phase} DE 05</span>
                <h3 className="phase-main-title">{currentStep.title}</h3>
                <span className="phase-main-sub">{currentStep.subtitle}</span>
              </div>
            </div>

            <p className="phase-main-desc">{currentStep.desc}</p>
          </div>

          {/* Right Deliverables Column */}
          <div className="phase-deliverables-col">
            <div className="deliverables-box-title font-mono">
              <ShieldCheck size={16} className="text-accent mr-2 inline-block" />
              ENTREGABLES & GARANTÍAS DE ESTA FASE:
            </div>

            <div className="deliverables-list">
              {currentStep.deliverables.map((deliv, i) => (
                <div key={i} className="deliv-item">
                  <div className="deliv-check-pill">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>

            <div className="phase-footer-note font-mono">
              <Zap size={14} className="text-accent mr-1 inline-block" />
              <span>Supervisado bajo estándar de calidad e ingeniería BLEGAM ISO 9001.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
