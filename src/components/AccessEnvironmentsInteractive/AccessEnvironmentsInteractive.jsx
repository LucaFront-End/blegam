import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Briefcase, 
  Landmark, 
  Building, 
  GraduationCap, 
  CheckCircle2, 
  Zap, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Eye,
  MessageSquare
} from 'lucide-react';
import './AccessEnvironmentsInteractive.css';

const ENVIRONMENTS_3PHOTO_DATA = [
  {
    id: "bancos",
    title: "Bancos e Inst. Financieras",
    subtitle: "Protección de Misión Crítica & Custodia de Valores",
    desc: "Sistemas de alta seguridad con autenticación biométrica multinivel, trazabilidad inalterable de bóvedas y auditoría continua 24/7.",
    icon: Landmark,
    badge: "Misión Crítica & Bóvedas",
    checkpoints: [
      {
        id: "bank_boveda",
        number: 1,
        title: "Bóveda Principal de Valores",
        tech: "Biométrico Facial 3D + Doble PIN",
        desc: "Acceso con regla de doble custodia obligatoria, bitácora AES-256 inalterable y protocolo silencioso anti-coacción.",
        tag: "Bóvedas & Custodia",
        image: "/assets/images/control-accesos/bank_vault.png",
        pinTop: 45,
        pinLeft: 42,
        highlights: ["Apertura por doble autorización", "Registro con sello de tiempo inalterable", "Cierre electroimán de alta presión"]
      },
      {
        id: "bank_cajas",
        number: 2,
        title: "Control de Zona de Cajas",
        tech: "Lector Dactilar Anti-Suplantación",
        desc: "Validación de identidad de cajeros y supervisores previa a autorizar transacciones o apertura de gavetas de valores.",
        tag: "Zona de Cajas",
        image: "/assets/images/control-accesos/bank_teller.png",
        pinTop: 40,
        pinLeft: 55,
        highlights: ["Sensor óptico anti-huella de silicona", "Verificación previa a transacción", "Historial por operador de caja"]
      },
      {
        id: "bank_monitoreo",
        number: 3,
        title: "Centro de Monitoreo & CCTV",
        tech: "Integración VMS IP + Access Logs",
        desc: "Sincronización simultánea de videoclips HD con cada intento de acceso o evento de lectura de credencial.",
        tag: "Auditoría 24/7",
        image: "/assets/images/control-accesos/bank_cctv.png",
        pinTop: 38,
        pinLeft: 50,
        highlights: ["Videowall de control en tiempo real", "Alertas instantáneas por intento fallido", "Resguardo de bitácora en la nube"]
      }
    ]
  },
  {
    id: "oficinas",
    title: "Oficinas & Corporativos",
    subtitle: "Lobbies Inteligentes, Perfiles Jerárquicos & Cuartos de TI",
    desc: "Canalización de colaboradores con torniquetes ópticos de cristal, credenciales móviles NFC y restricción por área y horario.",
    icon: Briefcase,
    badge: "Lobbies & Perfiles Jerárquicos",
    checkpoints: [
      {
        id: "office_turnstile",
        number: 1,
        title: "Torniquetes Ópticos de Cristal",
        tech: "Sensores Anti-Tailgating + Lector RFID",
        desc: "Desahogo continuo de hasta 60 colaboradores por minuto en horas pico previniendo pasos simultáneos sin autorización.",
        tag: "Flujo Masivo",
        image: "/assets/images/control-accesos/office_turnstile.png",
        pinTop: 50,
        pinLeft: 45,
        highlights: ["Brazos/cristales retráctiles de velocidad", "Sensor infrarrojo anti-cola", "Integración con sistema de nómina"]
      },
      {
        id: "office_server",
        number: 2,
        title: "Acceso a Sala de Servidores / TI",
        tech: "Doble Autenticación Biométrica",
        desc: "Restricción exclusiva a personal informático autorizado con monitoreo de tiempo de permanencia y puerta abierta.",
        tag: "Infraestructura TI",
        image: "/assets/images/control-accesos/office_server.png",
        pinTop: 35,
        pinLeft: 50,
        highlights: ["Biometría facial liveness anti-foto", "Alerta automática por puerta abierta", "Bitácora exclusiva para auditoría de TI"]
      },
      {
        id: "office_nfc",
        number: 3,
        title: "Recepción & Credenciales Móviles",
        tech: "Pases Virtuales NFC / Smartphone Bluetooth",
        desc: "Asignación instantánea de permisos temporales a empleados y consultores sin necesidad de tarjetas plásticas físicas.",
        tag: "NFC Smartphone",
        image: "/assets/images/control-accesos/office_nfc.png",
        pinTop: 48,
        pinLeft: 52,
        highlights: ["Acceso con smartphone Apple/Android", "Baja de credenciales con 1 clic", "Enviado por WhatsApp o email"]
      }
    ]
  },
  {
    id: "edificios",
    title: "Edificios & Condominios",
    subtitle: "Kioscos de Visitantes, Control de Elevadores & Estacionamiento",
    desc: "Gestión integral de residentes, empleados y visitantes desde accesos peatonales, elevadores y barreras vehiculares.",
    icon: Building2,
    badge: "Acceso Peatonal & Elevadores",
    checkpoints: [
      {
        id: "building_kiosk",
        number: 1,
        title: "Kiosco Interactivo de Visitantes",
        tech: "Pases QR Temporales + Escaneo ID",
        desc: "Autocomprobación de identidad y registro fotográfico con notificación automática al residente o anfitrión corporativo.",
        tag: "Autogestión QR",
        image: "/assets/images/control-accesos/building_kiosk.png",
        pinTop: 45,
        pinLeft: 42,
        highlights: ["Impresión de distintivo de visita", "Validación de código QR dinámico", "Notificación instantánea por App"]
      },
      {
        id: "building_elevator",
        number: 2,
        title: "Control de Elevadores Inteligentes",
        tech: "Lector RFID & Relevador por Piso",
        desc: "El elevador habilita exclusivamente la botonera del piso asignado a la tarjeta o credencial del usuario.",
        tag: "Pisos Restringidos",
        image: "/assets/images/control-accesos/building_elevator.png",
        pinTop: 40,
        pinLeft: 58,
        highlights: ["Integración con botoneras de marcas líderes", "Permisos según perfil de residente/empleado", "Bloqueo nocturno de pisos ejecutivos"]
      },
      {
        id: "building_barrier",
        number: 3,
        title: "Acceso Vehicular con Tag UHF",
        tech: "Lectura a Distancia sin Bajar Ventanilla",
        desc: "Apertura automatizada de barreras de estacionamiento para vehículos registrados con historial completo de entradas.",
        tag: "Tag Vehicular",
        image: "/assets/images/control-accesos/building_barrier.png",
        pinTop: 52,
        pinLeft: 55,
        highlights: ["Antena RFID alcance 6 a 10 metros", "Apertura de pluma en 1.5 segundos", "Integración con sistema de cobro o pensiones"]
      }
    ]
  },
  {
    id: "gobierno",
    title: "Instituciones de Gobierno",
    subtitle: "Pasillos con Reconocimiento Facial & Filtros de Seguridad",
    desc: "Soluciones de máxima institucionalidad para la segregación de personal clasificado, funcionarios y atención a la ciudadanía.",
    icon: Building,
    badge: "Seguridad Nacional & CNPP",
    checkpoints: [
      {
        id: "gov_facial",
        number: 1,
        title: "Cámara Facial de Largo Alcance",
        tech: "Reconocimiento a Distancia en Pasillo",
        desc: "Verificación de identidad sin detener el paso de funcionarios y directores con alta precisión anti-suplantación.",
        tag: "Reconocimiento Facial",
        image: "/assets/images/control-accesos/gov_facial.png",
        pinTop: 32,
        pinLeft: 50,
        highlights: ["Lectura sobre la marcha a 3 metros", "Detección liveness anti-fotos", "Sin contacto físico en accesos"]
      },
      {
        id: "gov_filter",
        number: 2,
        title: "Filtro Perimetral de Seguridad",
        tech: "Torniquetes Restringidos Electromecánicos",
        desc: "Punto de control institucional que canaliza el flujo del público general previo a las áreas gubernamentales.",
        tag: "Filtro Institucional",
        image: "/assets/images/control-accesos/gov_filter.png",
        pinTop: 52,
        pinLeft: 45,
        highlights: ["Chasis reforzado anti-vandalismo", "Integración con detector de metales", "Control de entrada/salida segregado"]
      },
      {
        id: "gov_archive",
        number: 3,
        title: "Archivo Confidencial & Expedientes",
        tech: "Cerradura Electroimán 600lbs + Biométrico",
        desc: "Control riguroso de ingreso a repositorios de documentos oficiales con sello de tiempo inalterable.",
        tag: "Archivos Clasificados",
        image: "/assets/images/control-accesos/gov_archive.png",
        pinTop: 45,
        pinLeft: 58,
        highlights: ["Electroimán de 600 libras de retención", "Huella o rostro para cada apertura", "Historial de consulta de archivos"]
      }
    ]
  },
  {
    id: "escuelas",
    title: "Escuelas e Inst. Educativas",
    subtitle: "Torniquetes Estudiantiles, Registro de Tutores & Fail-Safe",
    desc: "Protección perimetral de campus escolares y universidades con torniquetes de desahogo masivo y notificación en tiempo real.",
    icon: GraduationCap,
    badge: "Seguridad Escolar & Campus",
    checkpoints: [
      {
        id: "school_turnstile",
        number: 1,
        title: "Torniquete Escolar de Alta Velocidad",
        tech: "Carnet RFID Estudiantil / Lectura QR",
        desc: "Ingreso masivo de miles de alumnos por hora con validación de credencial activa y prevención de sustitución.",
        tag: "Ingreso Alumnos",
        image: "/assets/images/control-accesos/school_turnstile.png",
        pinTop: 55,
        pinLeft: 48,
        highlights: ["Validación de credencial activa", "Alerta automática de entrada a tutores", "Resistencia a uso continuo por alumnos"]
      },
      {
        id: "school_visitor",
        number: 2,
        title: "Módulo de Registro de Tutores",
        tech: "Escáner de Identificación & Pase Visual",
        desc: "Validación obligatoria de padres y proveedores con impresión de distintivo temporal de visita.",
        tag: "Control de Tutores",
        image: "/assets/images/control-accesos/school_visitor.png",
        pinTop: 45,
        pinLeft: 40,
        highlights: ["Verificación de tutor autorizado", "Impresión de gafete de visitante con foto", "Filtro obligatorio en recepción"]
      },
      {
        id: "school_failsafe",
        number: 3,
        title: "Evacuación Emergencia Fail-Safe",
        tech: "Liberación Automática por Protección Civil",
        desc: "Caída de brazos de torniquetes y apertura inmediata de puertas ante señal de alarma sísmica o incendio.",
        tag: "Fail-Safe Evacuación",
        image: "/assets/images/control-accesos/school_failsafe.png",
        pinTop: 48,
        pinLeft: 52,
        highlights: ["Desbloqueo instantáneo sin energía", "Liberación por contacto de alarma", "Cumplimiento normativo de Protección Civil"]
      }
    ]
  }
];

export default function AccessEnvironmentsInteractive() {
  const [activeEnvId, setActiveEnvId] = useState('escuelas');
  const [activeCheckpointIndex, setActiveCheckpointIndex] = useState(0);

  const selectedEnv = ENVIRONMENTS_3PHOTO_DATA.find((e) => e.id === activeEnvId) || ENVIRONMENTS_3PHOTO_DATA[4];
  const ActiveIcon = selectedEnv.icon;

  const currentCheckpoint = selectedEnv.checkpoints[activeCheckpointIndex] || selectedEnv.checkpoints[0];

  const handleSelectIndustry = (envId) => {
    setActiveEnvId(envId);
    setActiveCheckpointIndex(0);
  };

  return (
    <div className="env-interactive-container">
      {/* Section Header */}
      <div className="section-header text-center mb-8">
        <span className="badge badge-accent mb-2">
          <Sparkles size={14} className="mr-1 inline-block" />
          Galería de Puntos de Control por Industria
        </span>
        <h2 className="section-title">
          Una solución para <span className="accent-gradient">cada entorno</span>
        </h2>
        <p className="section-subtitle">
          Selecciona una industria y explora sus <strong>3 puntos de control clave</strong> con imágenes reales y fichas técnicas.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════
         DESKTOP VIEW: 2-Column Interactive Stage (UNTOUCHED)
         ═══════════════════════════════════════════════════ */}
      <div className="env-main-layout hp-desktop-only">
        {/* STICKY LEFT SIDEBAR: "entornos" Menu */}
        <aside className="env-sidebar-menu">
          <div className="sidebar-header font-mono">
            <MapPin size={16} className="text-accent mr-1 inline-block" />
            ENTORNOS DISPONIBLES
          </div>

          <div className="env-sidebar-list">
            {ENVIRONMENTS_3PHOTO_DATA.map((env) => {
              const IconComponent = env.icon;
              const isActive = env.id === activeEnvId;

              return (
                <button
                  key={env.id}
                  className={`env-sidebar-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectIndustry(env.id)}
                >
                  <div className="env-btn-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div className="env-btn-text">
                    <span className="env-btn-title">{env.title}</span>
                    <span className="env-btn-badge">{env.badge}</span>
                  </div>
                  <ChevronRight size={18} className="env-btn-arrow" />
                </button>
              );
            })}
          </div>
        </aside>

        {/* RIGHT INTERACTIVE STAGE: Dynamic Photo Viewer + Spec Ficha Card */}
        <div className="env-stage-area">
          {/* Header of Active Environment */}
          <div className="stage-top-banner">
            <div className="banner-icon-bg">
              <ActiveIcon size={24} />
            </div>
            <div>
              <span className="badge badge-accent mb-1">{selectedEnv.badge}</span>
              <h3 className="banner-title">{selectedEnv.title}</h3>
              <p className="banner-desc">{selectedEnv.desc}</p>
            </div>
          </div>

          {/* Hotspots Control Point Selector Bar */}
          <div className="hotspots-nav-bar">
            <span className="hotspot-bar-title font-mono">SELECCIONA EL PUNTO DE CONTROL A INSPECCIONAR:</span>
            <div className="hotspot-pills">
              {selectedEnv.checkpoints.map((cp, idx) => {
                const isSelected = activeCheckpointIndex === idx;

                return (
                  <button
                    key={cp.id}
                    className={`hotspot-pill-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setActiveCheckpointIndex(idx)}
                  >
                    <span className="pill-num">{cp.number}</span>
                    <span className="pill-title">{cp.title}</span>
                    <Eye size={14} className="pill-eye-icon ml-auto opacity-60" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ARCHITECTURAL DYNAMIC PHOTO STAGE & FICHA CARD */}
          <div className="env-architectural-grid">
            {/* Left: Dynamic Photo Stage for the Selected Control Point */}
            <div className="arch-visual-container">
              <div className="arch-image-wrapper">
                <img 
                  key={currentCheckpoint.id}
                  src={currentCheckpoint.image} 
                  alt={currentCheckpoint.title} 
                  className="arch-bg-image fade-in-img"
                />

                <div className="arch-image-overlay" />

                <div 
                  className="hotspot-pin-btn active"
                  style={{ top: `${currentCheckpoint.pinTop}%`, left: `${currentCheckpoint.pinLeft}%` }}
                >
                  <span className="pin-pulse-wave" />
                  <span className="pin-pulse-ring" />
                  <span className="pin-number">{currentCheckpoint.number}</span>
                  <span className="pin-tooltip font-mono">{currentCheckpoint.title}</span>
                </div>

                <div className="arch-badge-tag font-mono">
                  <ShieldCheck size={14} className="text-accent mr-1 inline-block" />
                  <span>Punto {currentCheckpoint.number}: {currentCheckpoint.tag}</span>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Ficha Card with Detailed Technical Specs */}
            <div className="ficha-spec-card">
              <div className="ficha-body">
                <div className="ficha-header">
                  <span className="badge badge-accent mb-2">{currentCheckpoint.tag}</span>
                  <h4 className="ficha-title">Punto {currentCheckpoint.number}: {currentCheckpoint.title}</h4>
                  
                  <div className="ficha-tech font-mono">
                    <Zap size={14} className="text-accent mr-1 inline-block" />
                    <span>{currentCheckpoint.tech}</span>
                  </div>
                </div>

                <p className="ficha-desc">{currentCheckpoint.desc}</p>

                <div className="ficha-highlights">
                  <span className="highlights-label font-mono">CARACTERÍSTICAS TÉCNICAS CLAVE:</span>
                  <div className="highlights-list">
                    {currentCheckpoint.highlights.map((h, i) => (
                      <div key={i} className="hl-row">
                        <CheckCircle2 size={15} className="text-accent flex-shrink-0 mr-2 inline-block" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to={`/contacto?origen=control-accesos&sector=${selectedEnv.id}&cp=${currentCheckpoint.id}`} 
                  className="btn btn-primary w-full justify-center mt-auto text-base py-3"
                >
                  Cotizar {currentCheckpoint.title} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
         MOBILE VIEW: Sleek Executive Hardware Stream (< 769px)
         ═══════════════════════════════════════════════════ */}
      <div className="env-mobile-stream hp-mobile-only">
        {/* Industry Selector Tabs Bar */}
        <div className="env-mobile-tabs-scroll">
          {ENVIRONMENTS_3PHOTO_DATA.map((env) => {
            const IconComponent = env.icon;
            const isActive = env.id === activeEnvId;

            return (
              <button
                key={env.id}
                className={`env-mobile-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleSelectIndustry(env.id)}
              >
                <IconComponent size={16} className="tab-icon" />
                <span>{env.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Banner */}
        <div className="env-mobile-banner">
          <div className="flex items-center gap-3 mb-2">
            <div className="env-mobile-icon-box">
              <ActiveIcon size={22} />
            </div>
            <div>
              <span className="badge badge-accent text-xs">{selectedEnv.badge}</span>
              <h3 className="env-mobile-title">{selectedEnv.title}</h3>
            </div>
          </div>
          <p className="env-mobile-desc">{selectedEnv.desc}</p>
        </div>

        {/* 3 Executive Hardware Cards Feed */}
        <div className="env-mobile-cards-feed">
          {selectedEnv.checkpoints.map((cp) => {
            const waMessage = `Hola, quisiera más información de "${cp.title}" para el sector ${selectedEnv.title}.`;
            const waUrl = `https://api.whatsapp.com/send?phone=525541692770&text=${encodeURIComponent(waMessage)}`;

            return (
              <div key={cp.id} className="env-mobile-card">
                {/* Photo Banner Header */}
                <div className="env-mobile-card-img-wrap">
                  <img src={cp.image} alt={cp.title} className="env-mobile-card-img" />
                  <span className="env-mobile-tag-badge font-mono">
                    Punto {cp.number}: {cp.tag}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="env-mobile-card-body">
                  <h4 className="env-mobile-card-title">{cp.title}</h4>
                  
                  <div className="env-mobile-tech-pill font-mono">
                    <Zap size={13} className="text-accent mr-1 inline-block" />
                    <span>{cp.tech}</span>
                  </div>

                  <p className="env-mobile-card-desc">{cp.desc}</p>

                  <div className="env-mobile-highlights font-mono">
                    {cp.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="env-mobile-hl-pill">
                        <CheckCircle2 size={13} className="text-accent mr-1 inline-block" />
                        {h}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={waUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-full justify-center text-sm py-2.5 mt-3"
                  >
                    <MessageSquare size={15} className="mr-1.5 inline-block" />
                    Cotizar por WhatsApp →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
