import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  GitCommit, 
  CreditCard, 
  Fingerprint, 
  ChevronRight, 
  Zap, 
  Cpu, 
  Shield, 
  Building2, 
  Lock, 
  Activity, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import './AccessSolutionsInteractive.css';

const SOLUTIONS_SPEC_DATA = [
  {
    id: "torniquetes",
    title: "Control de Acceso con Torniquetes",
    subtitle: "Administración Física de Alto Tránsito",
    desc: "Sistemas electromecánicos u ópticos diseñados para encauzar personas una a una, previniendo accesos simultáneos sin autorización.",
    tag: "Flujo Masivo & Restricción Física",
    icon: ShieldCheck,
    badgeColor: "cyan",
    specs: {
      speed: "60 personas / min",
      securityLevel: "4.8 / 5.0",
      failSafe: "Apertura Automática por Alarma",
      durability: "Acero Inoxidable AISI 304 / IP65"
    },
    idealFor: ["Corporativos", "Oficinas", "Gobierno", "Escuelas", "Bancos"],
    highlights: ["Brazos colapsables de emergencia", "Sensores ópticos anti-tailgating", "Contador de accesos integrado"]
  },
  {
    id: "riel",
    title: "Control de Acceso de Riel",
    subtitle: "Canalización Guiada y Control Perimetral",
    desc: "Soluciones de barrera física de carril continuo para organizar el tránsito en vestíbulos, pasillos y áreas de recepción restringida.",
    tag: "Tránsito Guiado & Canalizado",
    icon: GitCommit,
    badgeColor: "purple",
    specs: {
      speed: "35 personas / min",
      securityLevel: "4.2 / 5.0",
      failSafe: "Libre Desbloqueo Manual",
      durability: "Estructura de Aluminio Anodizado"
    },
    idealFor: ["Edificios", "Corporativos", "Instituciones", "Áreas restringidas"],
    highlights: ["Direccionamiento de flujo bi-direccional", "Integración con lectoras remotas", "Diseño corporativo estilizado"]
  },
  {
    id: "tarjeta",
    title: "Control de Acceso con Tarjeta RFID",
    subtitle: "Credencialización Proximidad & Permisos",
    desc: "Autorización de paso mediante tarjetas inteligentes RFID/MIFARE con asignación de roles por usuario, horarios y áreas autorizadas.",
    tag: "Credenciales RFID & Proximidad",
    icon: CreditCard,
    badgeColor: "blue",
    specs: {
      speed: "30 personas / min",
      securityLevel: "4.5 / 5.0",
      failSafe: "Retención de Estado / Batería respaldo",
      durability: "Lectores Estancos IP67 Anti-vandalismo"
    },
    idealFor: ["Oficinas", "Edificios", "Escuelas", "Gobierno", "Bancos"],
    highlights: ["Cifrado de datos AES-256 bits", "Desactivación instantánea por pérdida", "Formatos virtuales para Smartphone NFC"]
  },
  {
    id: "biometrico",
    title: "Control de Acceso Biométrico y Huella",
    subtitle: "Validación Facial y Dactilar de Alta Identación",
    desc: "Verificación de identidad única mediante rasgos físicos infalsificables para recintos de máxima seguridad o áreas confidenciales.",
    tag: "Biometría Facial & Dactilar Anti-Clon",
    icon: Fingerprint,
    badgeColor: "emerald",
    specs: {
      speed: "25 personas / min",
      securityLevel: "5.0 / 5.0 (Máximo)",
      failSafe: "Fail-Secure con Chapa Electromagnética",
      durability: "Sensor Óptico Templado Anti-Rayaduras"
    },
    idealFor: ["Áreas restringidas", "Bancos", "Gobierno", "Corporativos", "Instalaciones críticas"],
    highlights: ["Detección de vida (Liveness Anti-Foto)", "Reconocimiento sin contacto a distancia", "Doble factor de autenticación (Huella + PIN)"]
  }
];

export default function AccessSolutionsInteractive() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState({});

  const cardRefs = useRef({});

  // Mouse move 3D tilt calculation
  const handleMouseMove = (e, id) => {
    const card = cardRefs.current[id];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8; // Tilt deg
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = (id) => {
    const card = cardRefs.current[id];
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    }
    setHoveredCard(null);
  };

  const filteredSolutions = activeFilter === 'all' 
    ? SOLUTIONS_SPEC_DATA 
    : SOLUTIONS_SPEC_DATA.filter(s => s.id === activeFilter);

  const toggleIndustry = (solId, indName) => {
    setSelectedIndustry((prev) => ({
      ...prev,
      [solId]: prev[solId] === indName ? null : indName
    }));
  };

  return (
    <div className="solutions-interactive-wrapper">
      {/* Header */}
      <div className="section-header text-center">
        <span className="badge badge-accent mb-2">
          <Sparkles size={14} className="mr-1 inline-block" />
          Hardware & Arquitectura de Acceso
        </span>
        <h2 className="section-title">
          Soluciones de <span className="accent-gradient">Control de Acceso</span>
        </h2>
        <p className="section-subtitle">
          Explora la ingeniería de hardware de BLEGAM con especificaciones técnicas en tiempo real e integración por industria.
        </p>

        {/* Interactive Filter Pills */}
        <div className="solutions-filter-tabs mt-6">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todas las Tecnologías
          </button>
          {SOLUTIONS_SPEC_DATA.map((s) => (
            <button
              key={s.id}
              className={`filter-btn ${activeFilter === s.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(s.id)}
            >
              {s.title.replace('Control de Acceso ', '').replace('con ', '').replace('de ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Holographic 3D Grid */}
      <div className="holo-grid-cards">
        {filteredSolutions.map((sol) => {
          const IconComponent = sol.icon;
          const isHovered = hoveredCard === sol.id;
          const activeInd = selectedIndustry[sol.id];

          return (
            <div
              key={sol.id}
              ref={(el) => (cardRefs.current[sol.id] = el)}
              className={`holo-card card-badge-${sol.badgeColor} ${isHovered ? 'is-hovered' : ''}`}
              onMouseMove={(e) => handleMouseMove(e, sol.id)}
              onMouseEnter={() => setHoveredCard(sol.id)}
              onMouseLeave={() => handleMouseLeave(sol.id)}
            >
              {/* Scan Overlay Line Effect */}
              <div className="holo-scan-line" />
              <div className="holo-glow-radial" />

              {/* Card Header */}
              <div className="holo-card-top">
                <div className="holo-icon-box">
                  <IconComponent size={28} />
                </div>
                <span className="holo-tag-badge">{sol.tag}</span>
              </div>

              {/* Title & Desc */}
              <h3 className="holo-card-title">{sol.title}</h3>
              <span className="holo-card-sub">{sol.subtitle}</span>
              <p className="holo-card-desc">{sol.desc}</p>

              {/* Interactive Specs Dashboard */}
              <div className="holo-specs-box">
                <div className="spec-item">
                  <div className="spec-item-header">
                    <Zap size={14} className="text-accent mr-1" />
                    <span className="spec-lbl">CAPACIDAD / VELOCIDAD</span>
                  </div>
                  <span className="spec-val font-mono text-accent">{sol.specs.speed}</span>
                </div>

                <div className="spec-item">
                  <div className="spec-item-header">
                    <Shield size={14} className="text-accent mr-1" />
                    <span className="spec-lbl">NIVEL DE SEGURIDAD</span>
                  </div>
                  <span className="spec-val font-mono text-accent">{sol.specs.securityLevel}</span>
                </div>

                <div className="spec-item">
                  <div className="spec-item-header">
                    <Activity size={14} className="text-accent mr-1" />
                    <span className="spec-lbl">MODO DE EMERGENCIA</span>
                  </div>
                  <span className="spec-val">{sol.specs.failSafe}</span>
                </div>

                <div className="spec-item">
                  <div className="spec-item-header">
                    <Cpu size={14} className="text-accent mr-1" />
                    <span className="spec-lbl">RESISTENCIA & CHASIS</span>
                  </div>
                  <span className="spec-val">{sol.specs.durability}</span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="holo-highlights-list">
                {sol.highlights.map((h, i) => (
                  <div key={i} className="holo-hl-point">
                    <div className="hl-check-pill">
                      <CheckCircle2 size={14} />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Industry Selector */}
              <div className="holo-industry-selector">
                <span className="ind-selector-title">Despliegue Recomendado en:</span>
                <div className="ind-chips-row">
                  {sol.idealFor.map((ind, idx) => (
                    <button
                      key={idx}
                      className={`ind-chip ${activeInd === ind ? 'active' : ''}`}
                      onClick={() => toggleIndustry(sol.id, ind)}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
                {activeInd && (
                  <div className="ind-active-preview">
                    <Zap size={14} className="text-accent mr-1 inline-block" />
                    <span>Configurado para <strong>{activeInd}</strong> con integración nativa BLEGAM OS.</span>
                  </div>
                )}
              </div>

              {/* Footer Link */}
              <div className="holo-card-footer">
                <a href="https://wa.link/nf8gq3" target="_blank" rel="noopener noreferrer" className="holo-btn-action">
                  Solicitar Especificación Técnica <ChevronRight size={16} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
