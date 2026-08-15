import { useState } from 'react';
import { 
  ShieldCheck, 
  GitCommit, 
  CreditCard, 
  Fingerprint, 
  ChevronRight, 
  Zap, 
  Cpu, 
  Shield, 
  Activity, 
  Sparkles,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import './AccessSolutionsInteractive.css';

const SOLUTIONS_SPEC_DATA = [
  {
    id: "torniquetes",
    title: "Control de Acceso con Torniquetes",
    subtitle: "Administración Física de Alto Tránsito",
    desc: "Sistemas electromecánicos u ópticos diseñados para encauzar personas una a una, previniendo accesos simultáneos sin autorización mediante barreras físicas de alta cadencia.",
    tag: "Flujo Masivo & Restricción Física",
    icon: ShieldCheck,
    badgeColor: "cyan",
    image: "/assets/images/control-accesos/office_turnstile.png",
    specs: {
      speed: "60 personas / min",
      securityLevel: "4.8 / 5.0",
      failSafe: "Apertura Automática por Alarma",
      durability: "Acero Inoxidable AISI 304 / IP65"
    },
    idealFor: ["Corporativos", "Oficinas", "Gobierno", "Escuelas", "Bancos"],
    highlights: [
      "Brazos colapsables automáticos ante emergencias",
      "Sensores ópticos anti-tailgating (anti-cola)",
      "Contador bidireccional de aforo en tiempo real"
    ]
  },
  {
    id: "riel",
    title: "Control de Acceso de Riel",
    subtitle: "Canalización Guiada y Control Perimetral",
    desc: "Soluciones de barrera física de carril continuo para organizar el tránsito en vestíbulos, pasillos y áreas de recepción restringida con diseño arquitectónico estilizado.",
    tag: "Tránsito Guiado & Canalizado",
    icon: GitCommit,
    badgeColor: "purple",
    image: "/assets/images/control-accesos/building_entrance.png",
    specs: {
      speed: "35 personas / min",
      securityLevel: "4.2 / 5.0",
      failSafe: "Libre Desbloqueo Manual",
      durability: "Estructura de Aluminio Anodizado"
    },
    idealFor: ["Edificios", "Corporativos", "Instituciones", "Áreas restringidas"],
    highlights: [
      "Direccionamiento de flujo bi-direccional programable",
      "Integración nativa con lectoras remotas y tótems",
      "Diseño corporativo estilizado con perfil ultra-delgado"
    ]
  },
  {
    id: "tarjeta",
    title: "Control de Acceso con Tarjeta RFID",
    subtitle: "Credencialización Proximidad & Permisos",
    desc: "Autorización de paso mediante tarjetas inteligentes RFID/MIFARE con asignación de roles por usuario, ventanas de horario y áreas jerarquizadas.",
    tag: "Credenciales RFID & Smartphone NFC",
    icon: CreditCard,
    badgeColor: "blue",
    image: "/assets/images/control-accesos/office_nfc.png",
    specs: {
      speed: "30 personas / min",
      securityLevel: "4.5 / 5.0",
      failSafe: "Retención de Estado / Batería respaldo",
      durability: "Lectores Estancos IP67 Anti-vandalismo"
    },
    idealFor: ["Oficinas", "Edificios", "Escuelas", "Gobierno", "Bancos"],
    highlights: [
      "Cifrado de datos AES-256 bits anti-duplicación",
      "Desactivación instantánea por extravío desde la consola",
      "Formatos virtuales compatibles con Apple Wallet y Google Pay"
    ]
  },
  {
    id: "biometrico",
    title: "Control de Acceso Biométrico y Huella",
    subtitle: "Validación Facial y Dactilar de Alta Identación",
    desc: "Verificación de identidad única mediante rasgos físicos infalsificables para recintos de máxima seguridad, bóvedas bancarias y centros de cómputo.",
    tag: "Biometría Facial & Dactilar Anti-Clon",
    icon: Fingerprint,
    badgeColor: "emerald",
    image: "/assets/images/control-accesos/gov_facial.png",
    specs: {
      speed: "25 personas / min",
      securityLevel: "5.0 / 5.0 (Máximo)",
      failSafe: "Fail-Secure con Chapa Electromagnética",
      durability: "Sensor Óptico Templado Anti-Rayaduras"
    },
    idealFor: ["Áreas restringidas", "Bancos", "Gobierno", "Corporativos", "Instalaciones críticas"],
    highlights: [
      "Detección de vida en tiempo real (Liveness Anti-Foto/Video)",
      "Reconocimiento sin contacto sobre la marcha a 3 metros",
      "Doble factor de autenticación (Biometría + PIN criptográfico)"
    ]
  }
];

export default function AccessSolutionsInteractive() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState({});

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

      {/* HORIZONTAL STICKY STACKING CARDS DECK */}
      <div className="solutions-sticky-stack">
        {filteredSolutions.map((sol, index) => {
          const IconComponent = sol.icon;
          const activeInd = selectedIndustry[sol.id];
          
          // Generate WhatsApp Direct URL with customized pre-filled message
          const waMessage = `Hola, quisiera más información de "${sol.title}".`;
          const waUrl = `https://api.whatsapp.com/send?phone=525541692770&text=${encodeURIComponent(waMessage)}`;

          // Calculate sticky stacking top offset (each sticks 24px below the previous one)
          const stickyTopOffset = 85 + (index * 24);

          return (
            <div
              key={sol.id}
              className={`holo-sticky-card card-badge-${sol.badgeColor}`}
              style={{
                top: `${stickyTopOffset}px`,
                zIndex: index + 1
              }}
            >
              {/* Left Column: Premium Photo Media with Tech Overlays */}
              <div className="holo-card-media-col">
                <img src={sol.image} alt={sol.title} className="holo-card-img" />
                <div className="holo-card-img-overlay" />
                
                {/* Floating Top Tag */}
                <div className="holo-media-tag-badge font-mono">
                  <Sparkles size={13} className="text-accent inline mr-1" />
                  <span>{sol.tag}</span>
                </div>

                {/* Bottom Overlay Summary */}
                <div className="holo-media-bottom-badge">
                  <div className="flex items-center gap-2">
                    <span className="media-stat-val font-mono">{sol.specs.speed}</span>
                    <span className="media-stat-sep">•</span>
                    <span className="media-stat-lbl">Nivel {sol.specs.securityLevel}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Structured Executive Content Area */}
              <div className="holo-card-content-col">
                
                {/* Top Title & Icon Row */}
                <div className="holo-card-header">
                  <div className="holo-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="holo-card-title">{sol.title}</h3>
                    <span className="holo-card-subtitle">{sol.subtitle}</span>
                  </div>
                </div>

                <p className="holo-card-desc">{sol.desc}</p>

                {/* 4-Box Technical Specifications Dashboard */}
                <div className="holo-specs-grid">
                  <div className="spec-box-item">
                    <div className="spec-box-header">
                      <Zap size={13} className="text-accent" />
                      <span className="spec-box-label font-mono">CAPACIDAD / VELOCIDAD</span>
                    </div>
                    <span className="spec-box-val font-mono text-accent">{sol.specs.speed}</span>
                  </div>

                  <div className="spec-box-item">
                    <div className="spec-box-header">
                      <Shield size={13} className="text-accent" />
                      <span className="spec-box-label font-mono">NIVEL DE SEGURIDAD</span>
                    </div>
                    <span className="spec-box-val font-mono text-accent">{sol.specs.securityLevel}</span>
                  </div>

                  <div className="spec-box-item">
                    <div className="spec-box-header">
                      <Activity size={13} className="text-accent" />
                      <span className="spec-box-label font-mono">MODO DE EMERGENCIA</span>
                    </div>
                    <span className="spec-box-val">{sol.specs.failSafe}</span>
                  </div>

                  <div className="spec-box-item">
                    <div className="spec-box-header">
                      <Cpu size={13} className="text-accent" />
                      <span className="spec-box-label font-mono">RESISTENCIA & CHASIS</span>
                    </div>
                    <span className="spec-box-val">{sol.specs.durability}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="holo-highlights-section">
                  <div className="holo-hl-grid">
                    {sol.highlights.map((h, i) => (
                      <div key={i} className="holo-hl-item">
                        <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Deployment & WhatsApp CTA Footer Row */}
                <div className="holo-card-footer-row">
                  <div className="holo-industry-box">
                    <span className="ind-box-label font-mono">Despliegue Recomendado:</span>
                    <div className="ind-chips-wrap">
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
                  </div>

                  <a 
                    href={waUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="holo-sticky-cta-btn"
                  >
                    <MessageSquare size={16} className="flex-shrink-0" />
                    <span>Solicitar Especificación por WhatsApp →</span>
                  </a>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
