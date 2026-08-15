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
  MessageSquare,
  X,
  Layers,
  Activity,
  ArrowRight
} from 'lucide-react';
import './AccessEnvironmentsInteractive.css';

const ENVIRONMENTS_DATA = [
  {
    id: "escuelas",
    title: "Escuelas e Inst. Educativas",
    subtitle: "Torniquetes Estudiantiles, Registro de Tutores & Fail-Safe",
    desc: "Protección perimetral de campus escolares y universidades con torniquetes de desahogo masivo y notificación en tiempo real.",
    icon: GraduationCap,
    badge: "Seguridad Escolar & Campus",
    stats: "Desahogo de 1,200 alumnos/hora",
    checkpoints: [
      {
        id: "school_turnstile",
        number: 1,
        title: "Torniquete Escolar de Alta Velocidad",
        tech: "Carnet RFID Estudiantil / Lectura QR",
        desc: "Ingreso masivo de miles de alumnos por hora con validación de credencial activa y prevención de sustitución.",
        tag: "Ingreso Alumnos",
        svgCoords: { x: 310, y: 290 },
        highlights: [
          "Validación de credencial activa en < 0.2s",
          "Alerta automática de entrada a tutores por App",
          "Mecanismo de uso rudo continuo para alto flujo"
        ]
      },
      {
        id: "school_visitor",
        number: 2,
        title: "Módulo de Registro de Tutores",
        tech: "Escáner de Identificación & Pase Visual",
        desc: "Validación obligatoria de padres de familia y proveedores con impresión de distintivo temporal con fotografía.",
        tag: "Control de Tutores",
        svgCoords: { x: 530, y: 220 },
        highlights: [
          "Verificación biométrica y validación de tutor autorizado",
          "Impresión de gafete de visitante con código QR temporal",
          "Filtro obligatorio en recepción previa al ingreso"
        ]
      },
      {
        id: "school_failsafe",
        number: 3,
        title: "Evacuación Emergencia Fail-Safe",
        tech: "Liberación Automática por Protección Civil",
        desc: "Caída de brazos de torniquetes y apertura inmediata de puertas ante señal de alarma sísmica, conato de incendio o corte de energía.",
        tag: "Fail-Safe Evacuación",
        svgCoords: { x: 440, y: 120 },
        highlights: [
          "Desbloqueo instantáneo electromecánico sin energía",
          "Liberación por contacto seco con panel de alarma sísmica",
          "Cumplimiento normativo estricto de Protección Civil"
        ]
      }
    ]
  },
  {
    id: "bancos",
    title: "Bancos e Inst. Financieras",
    subtitle: "Protección de Misión Crítica & Custodia de Valores",
    desc: "Sistemas de alta seguridad con autenticación biométrica multinivel, trazabilidad inalterable de bóvedas y auditoría continua 24/7.",
    icon: Landmark,
    badge: "Misión Crítica & Bóvedas",
    stats: "Cero suplantación en bóvedas",
    checkpoints: [
      {
        id: "bank_boveda",
        number: 1,
        title: "Bóveda Principal de Valores",
        tech: "Biométrico Facial 3D + Doble PIN Criptográfico",
        desc: "Acceso con regla de doble custodia obligatoria, bitácora AES-256 inalterable y protocolo silencioso anti-coacción.",
        tag: "Bóvedas & Custodia",
        svgCoords: { x: 260, y: 170 },
        highlights: [
          "Apertura condicionada por doble autorización simultánea",
          "Registro forense con sello de tiempo inalterable",
          "Cierre electroimán de alta presión con sensor de estado"
        ]
      },
      {
        id: "bank_cajas",
        number: 2,
        title: "Control de Zona de Cajas & Esclusa",
        tech: "Lector Dactilar Anti-Suplantación + Esclusa Unipersonal",
        desc: "Validación de identidad de cajeros y supervisores previa a autorizar transacciones o apertura de gavetas de valores.",
        tag: "Zona de Cajas",
        svgCoords: { x: 480, y: 260 },
        highlights: [
          "Sensor óptico anti-huella de silicona o película",
          "Verificación de presencia obligatoria en cada apertura",
          "Historial detallado por operador y supervisor de caja"
        ]
      },
      {
        id: "bank_monitoreo",
        number: 3,
        title: "Centro de Monitoreo & CCTV Core",
        tech: "Integración VMS IP + Logs de Acceso en Tiempo Real",
        desc: "Sincronización simultánea de videoclips HD con cada intento de acceso o evento de lectura de credencial.",
        tag: "Auditoría 24/7",
        svgCoords: { x: 550, y: 130 },
        highlights: [
          "Videowall de control y supervisión en tiempo real",
          "Alertas instantáneas por intento fallido o puerta forzada",
          "Resguardo inmutable de bitácora en la nube privada"
        ]
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
    stats: "Hasta 60 personas/minuto por carril",
    checkpoints: [
      {
        id: "office_turnstile",
        number: 1,
        title: "Torniquetes Ópticos de Cristal (Speed Gates)",
        tech: "Sensores Anti-Tailgating + Lector RFID / Móvil",
        desc: "Desahogo continuo de colaboradores en horas pico previniendo pasos simultáneos sin autorización mediante cortina infrarroja.",
        tag: "Flujo Masivo",
        svgCoords: { x: 310, y: 280 },
        highlights: [
          "Cristales batientes de apertura veloz (< 0.3 seg)",
          "Matriz de 16 sensores infrarrojos anti-cola (tailgating)",
          "Integración bidireccional con sistema de nómina y RH"
        ]
      },
      {
        id: "office_server",
        number: 2,
        title: "Acceso a Sala de Servidores / Data Center",
        tech: "Doble Autenticación Biométrica Facial 3D",
        desc: "Restricción exclusiva a personal informático autorizado con monitoreo de tiempo de permanencia y alerta por puerta abierta.",
        tag: "Infraestructura TI",
        svgCoords: { x: 260, y: 150 },
        highlights: [
          "Biometría facial liveness anti-foto y anti-video",
          "Alarma automática por puerta abierta más de 30 segundos",
          "Bitácora exclusiva para auditorías de seguridad informática"
        ]
      },
      {
        id: "office_nfc",
        number: 3,
        title: "Recepción & Credenciales Móviles NFC",
        tech: "Pases Virtuales Smartphone Apple Wallet / Google Pay",
        desc: "Asignación instantánea de permisos temporales a empleados y consultores sin necesidad de tarjetas plásticas físicas.",
        tag: "NFC Smartphone",
        svgCoords: { x: 530, y: 210 },
        highlights: [
          "Acceso sin contacto con smartphone o Apple Watch",
          "Revocación de credenciales con 1 clic desde el portal",
          "Envío automático por correo electrónico o WhatsApp"
        ]
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
    stats: "Control de 50+ pisos y 300+ autos",
    checkpoints: [
      {
        id: "building_kiosk",
        number: 1,
        title: "Kiosco Interactivo de Visitantes",
        tech: "Pases QR Dinámicos + Escaneo de Identificación",
        desc: "Autocomprobación de identidad y registro fotográfico con notificación automática al residente o anfitrión corporativo.",
        tag: "Autogestión QR",
        svgCoords: { x: 300, y: 270 },
        highlights: [
          "Impresión de distintivo de visita o ticket con QR",
          "Validación de código QR dinámico de un solo uso",
          "Notificación push instantánea a la app del inquilino"
        ]
      },
      {
        id: "building_elevator",
        number: 2,
        title: "Control de Elevadores Inteligentes",
        tech: "Lector RFID & Relevador por Piso",
        desc: "El elevador habilita exclusivamente la botonera del piso asignado a la tarjeta o credencial del usuario.",
        tag: "Pisos Restringidos",
        svgCoords: { x: 490, y: 160 },
        highlights: [
          "Integración con botoneras Otis, Schindler, KONE y Thyssen",
          "Permisos programables según perfil de residente/empleado",
          "Bloqueo nocturno de pisos ejecutivos y penthouses"
        ]
      },
      {
        id: "building_barrier",
        number: 3,
        title: "Acceso Vehicular con Tag UHF",
        tech: "Lectura a Distancia sin Bajar Ventanilla (Alcance 8m)",
        desc: "Apertura automatizada de barreras de estacionamiento para vehículos registrados con historial completo de entradas.",
        tag: "Tag Vehicular",
        svgCoords: { x: 520, y: 310 },
        highlights: [
          "Antena RFID de largo alcance (6 a 10 metros)",
          "Apertura ultrarrápida de pluma en 1.5 segundos",
          "Integración con sistemas de pensiones o cobro automático"
        ]
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
    stats: "Máxima certificación institucional",
    checkpoints: [
      {
        id: "gov_facial",
        number: 1,
        title: "Cámara Facial de Largo Alcance en Pasillo",
        tech: "Reconocimiento a Distancia sobre la Marcha (3m)",
        desc: "Verificación de identidad sin detener el paso de funcionarios y directores con alta precisión anti-suplantación.",
        tag: "Reconocimiento Facial",
        svgCoords: { x: 300, y: 180 },
        highlights: [
          "Lectura fluida sobre la marcha a 3 metros de distancia",
          "Detección liveness 3D con luz infrarroja anti-fotos",
          "Acceso sin contacto físico para alta higiene y velocidad"
        ]
      },
      {
        id: "gov_filter",
        number: 2,
        title: "Filtro Perimetral de Seguridad Institucional",
        tech: "Torniquetes Electromecánicos + Detector de Metales",
        desc: "Punto de control institucional que canaliza el flujo del público general previo a ingresar a áreas gubernamentales.",
        tag: "Filtro Institucional",
        svgCoords: { x: 490, y: 280 },
        highlights: [
          "Chasis de acero inoxidable 304 reforzado anti-vandalismo",
          "Integración con pórtico detector de metales y rayos X",
          "Control de entrada y salida segregado con conteo de aforo"
        ]
      },
      {
        id: "gov_archive",
        number: 3,
        title: "Archivo Confidencial & Expedientes Clasificados",
        tech: "Cerradura Electroimán 600lbs + Biometría Dual",
        desc: "Control riguroso de ingreso a repositorios de documentos oficiales con sello de tiempo inalterable.",
        tag: "Archivos Clasificados",
        svgCoords: { x: 500, y: 120 },
        highlights: [
          "Electroimán de 600 libras de retención magnética",
          "Validación obligatoria de huella o rostro para cada apertura",
          "Historial inalterable de apertura para auditorías oficiales"
        ]
      }
    ]
  }
];

export default function AccessEnvironmentsInteractive() {
  const [activeEnvId, setActiveEnvId] = useState('escuelas');
  const [activeCheckpointIndex, setActiveCheckpointIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  const selectedEnv = ENVIRONMENTS_DATA.find((e) => e.id === activeEnvId) || ENVIRONMENTS_DATA[0];
  const ActiveIcon = selectedEnv.icon;
  const currentCheckpoint = selectedEnv.checkpoints[activeCheckpointIndex] || selectedEnv.checkpoints[0];

  const handleSelectIndustry = (envId) => {
    setActiveEnvId(envId);
    setActiveCheckpointIndex(0);
    setShowPopup(true);
  };

  const handleSelectCheckpoint = (idx) => {
    setActiveCheckpointIndex(idx);
    setShowPopup(true);
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
          Selecciona una industria y explora el <strong>plano arquitectónico vectorial</strong> con sus puntos de control interactivos.
        </p>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
         DESKTOP VIEW: Left Sticky Sidebar (RED) + Right Isometric Vector Blueprint (BLUE)
         ════════════════════════════════════════════════════════════════════ */}
      <div className="env-main-layout hp-desktop-only">
        
        {/* STICKY LEFT SIDEBAR: "ENTORNOS DISPONIBLES" (PRESERVED) */}
        <aside className="env-sidebar-menu">
          <div className="sidebar-header font-mono">
            <MapPin size={16} className="text-accent mr-1 inline-block" />
            ENTORNOS DISPONIBLES
          </div>

          <div className="env-sidebar-list">
            {ENVIRONMENTS_DATA.map((env) => {
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

        {/* RIGHT AREA: ISOMETRIC CYBER VECTOR BLUEPRINT STAGE */}
        <div className="env-blueprint-stage">
          
          {/* Blueprint Header */}
          <div className="blueprint-top-bar">
            <div className="blueprint-meta-info">
              <div className="flex items-center gap-2 mb-1">
                <span className="badge badge-accent text-xs font-mono">{selectedEnv.badge}</span>
                <span className="blueprint-live-tag font-mono">
                  <Activity size={12} className="inline mr-1 text-emerald-400" />
                  PLANO VECTORIAL INTERACTIVO
                </span>
              </div>
              <h3 className="blueprint-env-title">{selectedEnv.title}</h3>
              <p className="blueprint-env-desc">{selectedEnv.desc}</p>
            </div>
            <div className="blueprint-stat-box">
              <span className="stat-label font-mono">RENDIMIENTO</span>
              <span className="stat-val font-mono">{selectedEnv.stats}</span>
            </div>
          </div>

          {/* Blueprint Checkpoints Bar */}
          <div className="blueprint-hotspots-bar">
            <span className="hotspot-bar-label font-mono">PUNTOS DE CONTROL EN PLANO:</span>
            <div className="hotspot-bar-pills">
              {selectedEnv.checkpoints.map((cp, idx) => {
                const isSelected = activeCheckpointIndex === idx;
                return (
                  <button
                    key={cp.id}
                    className={`blueprint-pill-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelectCheckpoint(idx)}
                  >
                    <span className="pill-circle">{cp.number}</span>
                    <span className="pill-text">{cp.title}</span>
                    <Eye size={13} className="ml-auto opacity-70" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ISOMETRIC BLUEPRINT CANVAS STAGE */}
          <div className="blueprint-canvas-container">
            {/* Cyber Blueprint Grid Background */}
            <div className="blueprint-grid-overlay" />

            {/* SVG Vector Schematic Engine */}
            <svg 
              className="blueprint-svg-scene" 
              viewBox="0 0 800 480" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow Filter */}
                <filter id="neon-cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="neon-glow-high" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur1" />
                  <feGaussianBlur stdDeviation="3" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="gridGrad" x1="0" y1="0" x2="800" y2="480" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#12d4c9" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* 1. Isometric Floor Grid Wireframe */}
              <g className="iso-grid-lines" opacity="0.6">
                {/* Isometric Grid Diamonds */}
                <path d="M400 40 L720 220 L400 400 L80 220 Z" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.4" fill="url(#gridGrad)" />
                <path d="M400 90 L640 225 L400 360 L160 225 Z" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
                <path d="M400 140 L560 230 L400 320 L240 230 Z" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.2" />

                {/* Subdividing grid axes */}
                <line x1="400" y1="40" x2="400" y2="400" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
                <line x1="80" y1="220" x2="720" y2="220" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3" />
                
                {/* Diagonal guides */}
                <line x1="240" y1="130" x2="560" y2="310" stroke="#12d4c9" strokeWidth="0.8" strokeOpacity="0.15" />
                <line x1="560" y1="130" x2="240" y2="310" stroke="#12d4c9" strokeWidth="0.8" strokeOpacity="0.15" />
              </g>

              {/* 2. Isometric Architectural Walls & Zones */}
              <g className="iso-walls">
                {/* Back Left Wall */}
                <path d="M80 220 L400 40 L400 0 L80 180 Z" fill="url(#wallGrad)" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                {/* Back Right Wall */}
                <path d="M400 40 L720 220 L720 180 L400 0 Z" fill="url(#wallGrad)" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                {/* Wall Accents */}
                <line x1="400" y1="0" x2="400" y2="40" stroke="#12d4c9" strokeWidth="2" strokeOpacity="0.8" filter="url(#neon-cyan-glow)" />
                <line x1="80" y1="180" x2="80" y2="220" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="720" y1="180" x2="720" y2="220" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                
                {/* Architectural Zone Labels */}
                <text x="220" y="80" fill="#38bdf8" opacity="0.6" fontSize="11" fontFamily="monospace" fontWeight="bold">ZONA DE ACCESO PERIMETRAL // CORREDOR</text>
                <text x="470" y="80" fill="#38bdf8" opacity="0.6" fontSize="11" fontFamily="monospace" fontWeight="bold">NÚCLEO DE CONTROL // SISTEMAS</text>
              </g>

              {/* 3. DYNAMIC VECTOR SCHEMATIC BY ACTIVE INDUSTRY */}
              
              {/* === INDUSTRY: ESCUELAS === */}
              {activeEnvId === 'escuelas' && (
                <g className="iso-industry-art">
                  {/* Punto 1: Torniquetes Escolares Triples (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 0 ? 'highlight-active' : ''}`}>
                    {/* Pedestal 1 */}
                    <path d="M260 280 L300 260 L310 265 L270 285 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M260 280 L270 285 L270 315 L260 310 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M270 285 L310 265 L310 295 L270 315 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    {/* Rotating Bars & Reader */}
                    <circle cx="285" cy="275" r="4" fill="#12d4c9" filter="url(#neon-cyan-glow)" />
                    <line x1="285" y1="275" x2="330" y2="295" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" filter="url(#neon-cyan-glow)" />
                    <line x1="285" y1="275" x2="250" y2="260" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                    <line x1="285" y1="275" x2="295" y2="250" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

                    {/* Pedestal 2 */}
                    <path d="M330 315 L370 295 L380 300 L340 320 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M330 315 L340 320 L340 350 L330 345 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M340 320 L380 300 L380 330 L340 350 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <circle cx="355" cy="310" r="4" fill="#12d4c9" filter="url(#neon-cyan-glow)" />
                    <line x1="355" y1="310" x2="400" y2="330" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" filter="url(#neon-cyan-glow)" />

                    {/* Laser Flow Arrow on Floor */}
                    <path d="M240 340 L310 300 L330 310" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.8" />
                    <text x="240" y="360" fill="#10b981" fontSize="10" fontFamily="monospace">ACCESO ALUMNOS RFID ▶</text>
                  </g>

                  {/* Punto 2: Módulo de Registro de Tutores (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 1 ? 'highlight-active' : ''}`}>
                    {/* Security Desk */}
                    <path d="M500 200 L560 170 L590 185 L530 215 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M500 200 L530 215 L530 245 L500 230 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M530 215 L590 185 L590 215 L530 245 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    {/* ID Scanner & Monitor on Desk */}
                    <path d="M535 190 L555 180 L555 195 L535 205 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" filter="url(#neon-cyan-glow)" />
                    <circle cx="560" cy="180" r="3" fill="#12d4c9" />
                    <text x="510" y="160" fill="#38bdf8" fontSize="10" fontFamily="monospace">MÓDULO TUTORES</text>
                  </g>

                  {/* Punto 3: Evacuación Fail-Safe Emergencia (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 2 ? 'highlight-active' : ''}`}>
                    {/* Emergency Exit Door Frame on Wall */}
                    <path d="M420 100 L460 80 L460 140 L420 160 Z" fill="#020617" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="3 2" />
                    <path d="M420 100 L450 115 L450 175 L420 160 Z" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="2" filter="url(#neon-glow-high)" />
                    {/* Panic Bar & Maglock */}
                    <line x1="425" y1="135" x2="445" y2="145" stroke="#ffffff" strokeWidth="2.5" />
                    <rect x="430" y="88" width="20" height="6" fill="#ef4444" filter="url(#neon-cyan-glow)" />
                    <text x="390" y="65" fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold">SALIDA FAIL-SAFE ⚡</text>
                  </g>
                </g>
              )}

              {/* === INDUSTRY: BANCOS === */}
              {activeEnvId === 'bancos' && (
                <g className="iso-industry-art">
                  {/* Punto 1: Bóveda Principal de Valores (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 0 ? 'highlight-active' : ''}`}>
                    {/* Heavy Vault Door on Back Wall */}
                    <path d="M220 130 L300 90 L300 200 L220 240 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="2" />
                    {/* Vault Circular Locking Ring */}
                    <ellipse cx="260" cy="165" rx="28" ry="38" fill="#020617" stroke="#38bdf8" strokeWidth="2" filter="url(#neon-cyan-glow)" />
                    <ellipse cx="260" cy="165" rx="14" ry="20" fill="rgba(18,212,201,0.2)" stroke="#12d4c9" strokeWidth="1.5" />
                    <line x1="260" y1="145" x2="260" y2="185" stroke="#12d4c9" strokeWidth="2" />
                    <line x1="245" y1="165" x2="275" y2="165" stroke="#12d4c9" strokeWidth="2" />
                    {/* Biometric Laser Keypad */}
                    <rect x="295" y="150" width="10" height="18" fill="#12d4c9" filter="url(#neon-cyan-glow)" />
                    <text x="210" y="70" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">BÓVEDA DE VALORES [AES-256]</text>
                  </g>

                  {/* Punto 2: Esclusa y Zona de Cajas (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 1 ? 'highlight-active' : ''}`}>
                    {/* Airlock Booth Cylinder / Cube */}
                    <path d="M450 240 L500 215 L530 230 L480 255 Z" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                    <path d="M450 240 L480 255 L480 305 L450 290 Z" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" />
                    <path d="M480 255 L530 230 L530 280 L480 305 Z" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="1.5" />
                    {/* Optical Scan Ray inside Airlock */}
                    <line x1="490" y1="240" x2="490" y2="290" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" filter="url(#neon-cyan-glow)" />
                    <text x="440" y="330" fill="#10b981" fontSize="10" fontFamily="monospace">ESCLUSA UNIPERSONAL CAJAS</text>
                  </g>

                  {/* Punto 3: Centro de Monitoreo & Servidores (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 2 ? 'highlight-active' : ''}`}>
                    {/* Server Rack Tower */}
                    <path d="M530 110 L570 90 L590 100 L550 120 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M530 110 L550 120 L550 180 L530 170 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M550 120 L590 100 L590 160 L550 180 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    {/* Blinking LEDs */}
                    <circle cx="558" cy="130" r="1.5" fill="#10b981" filter="url(#neon-cyan-glow)" />
                    <circle cx="568" cy="125" r="1.5" fill="#10b981" filter="url(#neon-cyan-glow)" />
                    <circle cx="558" cy="140" r="1.5" fill="#38bdf8" filter="url(#neon-cyan-glow)" />
                    <circle cx="568" cy="135" r="1.5" fill="#ef4444" filter="url(#neon-cyan-glow)" />
                    <text x="520" y="75" fill="#12d4c9" fontSize="10" fontFamily="monospace">MONITOREO CCTV 24/7</text>
                  </g>
                </g>
              )}

              {/* === INDUSTRY: OFICINAS === */}
              {activeEnvId === 'oficinas' && (
                <g className="iso-industry-art">
                  {/* Punto 1: Torniquetes Ópticos de Cristal Speed Gates (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 0 ? 'highlight-active' : ''}`}>
                    {/* Left Gate Column */}
                    <path d="M260 270 L300 250 L308 254 L268 274 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M260 270 L268 274 L268 314 L260 310 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M268 274 L308 254 L308 294 L268 314 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    {/* Glass Flap 1 */}
                    <polygon points="285,260 325,280 325,250 285,230" fill="rgba(18,212,201,0.3)" stroke="#12d4c9" strokeWidth="1.5" filter="url(#neon-cyan-glow)" />

                    {/* Middle Gate Column */}
                    <path d="M330 305 L370 285 L378 289 L338 309 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M330 305 L338 309 L338 349 L330 345 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M338 309 L378 289 L378 329 L338 349 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    {/* Glass Flap 2 */}
                    <polygon points="355,295 395,315 395,285 355,265" fill="rgba(18,212,201,0.3)" stroke="#12d4c9" strokeWidth="1.5" filter="url(#neon-cyan-glow)" />

                    <line x1="285" y1="262" x2="355" y2="297" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" filter="url(#neon-cyan-glow)" />
                    <text x="240" y="345" fill="#12d4c9" fontSize="10" fontFamily="monospace">PASILLO SPEED GATES ▶</text>
                  </g>

                  {/* Punto 2: Data Center & IT Access (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 1 ? 'highlight-active' : ''}`}>
                    {/* Secure Server Room Door */}
                    <path d="M220 115 L280 85 L280 175 L220 205 Z" fill="#020617" stroke="#38bdf8" strokeWidth="1.8" />
                    <path d="M220 115 L270 140 L270 230 L220 205 Z" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="1.5" />
                    {/* Facial Scanner Array */}
                    <rect x="275" y="125" width="8" height="15" fill="#38bdf8" filter="url(#neon-cyan-glow)" />
                    <line x1="285" y1="130" x2="320" y2="148" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
                    <text x="210" y="65" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">SALA TI / SERVIDORES [BIOMÉTRICO]</text>
                  </g>

                  {/* Punto 3: Recepción & Credencial Móvil NFC (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 2 ? 'highlight-active' : ''}`}>
                    {/* Curved Reception Desk */}
                    <path d="M490 190 L560 155 L585 168 L515 203 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M490 190 L515 203 L515 233 L490 220 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M515 203 L585 168 L585 198 L515 233 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    {/* NFC Smartphone Signal Waves */}
                    <ellipse cx="540" cy="175" rx="8" ry="4" stroke="#10b981" strokeWidth="1.5" fill="none" filter="url(#neon-cyan-glow)" />
                    <ellipse cx="540" cy="175" rx="14" ry="7" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
                    <text x="500" y="140" fill="#10b981" fontSize="10" fontFamily="monospace">NFC SMARTPHONE DESK</text>
                  </g>
                </g>
              )}

              {/* === INDUSTRY: EDIFICIOS === */}
              {activeEnvId === 'edificios' && (
                <g className="iso-industry-art">
                  {/* Punto 1: Kiosco Interactivo de Visitantes QR (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 0 ? 'highlight-active' : ''}`}>
                    {/* Modern Totem Kiosk */}
                    <path d="M280 250 L310 235 L320 240 L290 255 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M280 250 L290 255 L290 315 L280 310 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M290 255 L320 240 L320 300 L290 315 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    {/* Glowing QR Screen */}
                    <polygon points="292,260 315,248 315,280 292,292" fill="#12d4c9" opacity="0.8" filter="url(#neon-cyan-glow)" />
                    <text x="250" y="335" fill="#12d4c9" fontSize="10" fontFamily="monospace">KIOSCO VISITANTES QR</text>
                  </g>

                  {/* Punto 2: Elevadores Inteligentes con Relevador por Piso (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 1 ? 'highlight-active' : ''}`}>
                    {/* Dual Elevator Bank on Right Wall */}
                    <path d="M460 130 L520 100 L520 200 L460 230 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
                    <line x1="490" y1="115" x2="490" y2="215" stroke="#38bdf8" strokeWidth="1.5" />
                    {/* Floor Indicator Arrow & Display */}
                    <rect x="475" y="105" width="30" height="8" fill="#020617" stroke="#10b981" strokeWidth="1" />
                    <text x="480" y="112" fill="#10b981" fontSize="7" fontFamily="monospace">PISO 14 ▲</text>
                    <circle cx="525" cy="155" r="3" fill="#12d4c9" filter="url(#neon-cyan-glow)" />
                    <text x="440" y="80" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">ELEVADOR // SELECTOR DE PISOS</text>
                  </g>

                  {/* Punto 3: Barrera Vehicular & Antena UHF (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 2 ? 'highlight-active' : ''}`}>
                    {/* Boom Barrier Housing */}
                    <path d="M500 290 L525 278 L535 283 L510 295 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
                    <path d="M500 290 L510 295 L510 335 L500 330 Z" fill="#020617" stroke="#f59e0b" strokeWidth="1.5" />
                    <path d="M510 295 L535 283 L535 323 L510 335 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                    {/* Striped Boom Arm */}
                    <line x1="510" y1="298" x2="570" y2="268" stroke="#f59e0b" strokeWidth="4" strokeDasharray="8 6" filter="url(#neon-cyan-glow)" />
                    {/* UHF Antenna Pole */}
                    <line x1="490" y1="270" x2="490" y2="240" stroke="#38bdf8" strokeWidth="2" />
                    <polygon points="485,240 495,240 490,230" fill="#38bdf8" filter="url(#neon-cyan-glow)" />
                    <text x="460" y="355" fill="#f59e0b" fontSize="10" fontFamily="monospace">BARRERA VEHICULAR TAG UHF</text>
                  </g>
                </g>
              )}

              {/* === INDUSTRY: GOBIERNO === */}
              {activeEnvId === 'gobierno' && (
                <g className="iso-industry-art">
                  {/* Punto 1: Reconocimiento Facial Largo Alcance (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 0 ? 'highlight-active' : ''}`}>
                    {/* Walkthrough Detection Arch */}
                    <path d="M260 150 L320 120 L330 125 L270 155 Z" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                    <path d="M260 150 L270 155 L270 235 L260 230 Z" fill="#020617" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M320 120 L330 125 L330 205 L320 200 Z" fill="#020617" stroke="#10b981" strokeWidth="1.8" />
                    {/* Facial Scan Cone Rays */}
                    <polygon points="295,135 250,220 340,180" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" filter="url(#neon-cyan-glow)" />
                    <text x="230" y="100" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">RECONOCIMIENTO FACIAL 3D (3M)</text>
                  </g>

                  {/* Punto 2: Filtro Perimetral Institucional (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 1 ? 'highlight-active' : ''}`}>
                    {/* Reinforced Turnstiles */}
                    <path d="M460 260 L500 240 L510 245 L470 265 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M460 260 L470 265 L470 305 L460 300 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M470 265 L510 245 L510 285 L470 305 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <line x1="485" y1="255" x2="525" y2="275" stroke="#12d4c9" strokeWidth="2.5" />
                    <text x="440" y="325" fill="#12d4c9" fontSize="10" fontFamily="monospace">FILTRO SEGURIDAD INSTITUCIONAL</text>
                  </g>

                  {/* Punto 3: Archivo Confidencial 600lbs Maglock (Vector) */}
                  <g className={`iso-hw-unit ${activeCheckpointIndex === 2 ? 'highlight-active' : ''}`}>
                    {/* Vault style Archive Door */}
                    <path d="M470 95 L530 65 L530 155 L470 185 Z" fill="#020617" stroke="#38bdf8" strokeWidth="1.8" />
                    <rect x="490" y="70" width="25" height="6" fill="#ef4444" filter="url(#neon-cyan-glow)" />
                    <circle cx="535" cy="115" r="3" fill="#12d4c9" />
                    <text x="450" y="45" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">ARCHIVO CLASIFICADO [600 LBS]</text>
                  </g>
                </g>
              )}

              {/* 4. ISOMETRIC CYBER HOTSPOT PINS (Vector Elements) */}
              {selectedEnv.checkpoints.map((cp, idx) => {
                const isSelected = activeCheckpointIndex === idx;
                const { x, y } = cp.svgCoords;

                return (
                  <g 
                    key={cp.id} 
                    className={`iso-hotspot-pin-node ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleSelectCheckpoint(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Animated Pulsing Rings */}
                    <circle cx={x} cy={y} r="18" fill="none" stroke="#12d4c9" strokeWidth="1.2" className="pin-svg-wave" />
                    <circle cx={x} cy={y} r="11" fill="none" stroke="#12d4c9" strokeWidth="1.8" className="pin-svg-ring" />
                    
                    {/* Main Core Pin */}
                    <circle 
                      cx={x} 
                      cy={y} 
                      r="8" 
                      fill={isSelected ? '#12d4c9' : '#0f172a'} 
                      stroke={isSelected ? '#ffffff' : '#12d4c9'} 
                      strokeWidth="2" 
                      filter="url(#neon-cyan-glow)" 
                    />
                    
                    {/* Number text */}
                    <text 
                      x={x} 
                      y={y + 3.5} 
                      fill={isSelected ? '#020617' : '#ffffff'} 
                      fontSize="9" 
                      fontWeight="bold" 
                      fontFamily="monospace" 
                      textAnchor="middle"
                    >
                      {cp.number}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* 5. INTERACTIVE HUD POPUP CARD ("pop o algo que muestre la info de el hotspot") */}
            {showPopup && (
              <div className="blueprint-hud-popup">
                <button 
                  className="hud-popup-close-btn" 
                  onClick={() => setShowPopup(false)}
                  title="Cerrar ficha"
                >
                  <X size={15} />
                </button>

                <div className="hud-popup-header">
                  <div className="hud-popup-tag-badge font-mono">
                    <ShieldCheck size={13} className="inline mr-1 text-accent" />
                    <span>PUNTO {currentCheckpoint.number}: {currentCheckpoint.tag}</span>
                  </div>
                  <h4 className="hud-popup-title">{currentCheckpoint.title}</h4>
                  <div className="hud-popup-tech font-mono">
                    <Zap size={13} className="text-accent inline mr-1" />
                    <span>{currentCheckpoint.tech}</span>
                  </div>
                </div>

                <p className="hud-popup-desc">{currentCheckpoint.desc}</p>

                <div className="hud-popup-highlights">
                  <span className="hud-hl-label font-mono">ESPECIFICACIONES CLAVE:</span>
                  <div className="hud-hl-list">
                    {currentCheckpoint.highlights.map((h, i) => (
                      <div key={i} className="hud-hl-item">
                        <CheckCircle2 size={13} className="text-accent flex-shrink-0 mr-1.5 inline" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hud-popup-actions">
                  <Link 
                    to={`/contacto?origen=control-accesos&sector=${selectedEnv.id}&cp=${currentCheckpoint.id}`}
                    className="btn btn-primary w-full justify-center text-sm py-2.5"
                  >
                    Cotizar este Punto de Control →
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* ════════════════════════════════════════════════════════════════════
         MOBILE VIEW: Clean 2-Column Grid Selector + Feed (< 769px) (PRESERVED)
         ════════════════════════════════════════════════════════════════════ */}
      <div className="env-mobile-stream hp-mobile-only">
        {/* Clean 2-Column Industry Selector Grid */}
        <div className="env-mobile-grid-selector">
          {ENVIRONMENTS_DATA.map((env) => {
            const IconComponent = env.icon;
            const isActive = env.id === activeEnvId;

            return (
              <button
                key={env.id}
                className={`env-mobile-grid-chip ${isActive ? 'active' : ''}`}
                onClick={() => handleSelectIndustry(env.id)}
              >
                <div className="chip-icon-wrap">
                  <IconComponent size={16} />
                </div>
                <span className="chip-label">{env.title.split(' ')[0]}</span>
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
                {/* Card Content Body */}
                <div className="env-mobile-card-body">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="env-mobile-tag-badge font-mono">
                      Punto {cp.number}: {cp.tag}
                    </span>
                  </div>

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
