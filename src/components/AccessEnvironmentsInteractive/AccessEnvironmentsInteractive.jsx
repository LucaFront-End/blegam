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
  Activity,
  ArrowRight
} from 'lucide-react';
import './AccessEnvironmentsInteractive.css';

const ENVIRONMENTS_DATA = [
  {
    id: "escuelas",
    title: "Escuelas e Inst. Educativas",
    subtitle: "Torniquetes Estudiantiles, Registro de Tutores & Fail-Safe",
    desc: "Protección perimetral de campus escolares y universidades con torniquetes de desahogo masivo y notificación en tiempo real a tutores.",
    icon: GraduationCap,
    badge: "Seguridad Escolar & Campus",
    stats: "Desahogo de 1,200 alumnos/hora",
    checkpoints: [
      {
        id: "school_turnstile",
        number: 1,
        title: "Torniquete Escolar de Alta Velocidad",
        tech: "Carnet RFID Estudiantil / Lectura QR",
        desc: "Ingreso masivo de miles de alumnos por hora con validación de credencial activa y prevención de sustitución de alumnos.",
        tag: "Ingreso Alumnos",
        svgCoords: { x: 320, y: 310 },
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
        desc: "Validación obligatoria de padres de familia y proveedores con impresión de distintivo temporal con fotografía y QR.",
        tag: "Control de Tutores",
        svgCoords: { x: 620, y: 240 },
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
        desc: "Caída inmediata de brazos de torniquetes y apertura de puertas ante señal de alarma sísmica, conato de incendio o corte de luz.",
        tag: "Fail-Safe Evacuación",
        svgCoords: { x: 500, y: 130 },
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
        svgCoords: { x: 280, y: 180 },
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
        svgCoords: { x: 550, y: 280 },
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
        svgCoords: { x: 640, y: 140 },
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
        svgCoords: { x: 330, y: 300 },
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
        svgCoords: { x: 280, y: 160 },
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
        svgCoords: { x: 610, y: 230 },
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
        svgCoords: { x: 310, y: 290 },
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
        svgCoords: { x: 560, y: 170 },
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
        svgCoords: { x: 600, y: 340 },
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
        svgCoords: { x: 310, y: 190 },
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
        svgCoords: { x: 550, y: 300 },
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
        svgCoords: { x: 570, y: 130 },
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

  const waMessage = `Hola, quisiera más información sobre "${currentCheckpoint.title}" para ${selectedEnv.title}.`;
  const waUrl = `https://api.whatsapp.com/send?phone=525541692770&text=${encodeURIComponent(waMessage)}`;

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
         DESKTOP VIEW: Left Sidebar (320px) + Right Isometric Vector Blueprint Stage
         ════════════════════════════════════════════════════════════════════ */}
      <div className="env-main-layout hp-desktop-only">
        
        {/* STICKY LEFT SIDEBAR: "ENTORNOS DISPONIBLES" */}
        <aside className="env-sidebar-menu">
          <div className="sidebar-header font-mono">
            <MapPin size={15} className="text-accent mr-1 inline-block" />
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
                    <IconComponent size={22} />
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
          
          {/* Blueprint Top Bar Header & Checkpoint Pills */}
          <div className="blueprint-top-bar">
            <div className="blueprint-meta-info">
              <div className="flex items-center gap-2 mb-1">
                <span className="badge badge-accent text-xs font-mono">{selectedEnv.badge}</span>
                <span className="blueprint-live-tag font-mono">
                  <Activity size={12} className="inline mr-1 text-emerald-400" />
                  PLANO ISOMÉTRICO ACTIVO
                </span>
              </div>
              <h3 className="blueprint-env-title">{selectedEnv.title}</h3>
              <p className="blueprint-env-desc">{selectedEnv.desc}</p>
            </div>

            {/* Checkpoints Selector Tabs */}
            <div className="blueprint-checkpoints-tabs">
              <span className="tabs-label font-mono">PUNTOS DE CONTROL:</span>
              <div className="tabs-row">
                {selectedEnv.checkpoints.map((cp, idx) => {
                  const isSelected = activeCheckpointIndex === idx;
                  return (
                    <button
                      key={cp.id}
                      className={`blueprint-tab-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => handleSelectCheckpoint(idx)}
                    >
                      <span className="tab-num">{cp.number}</span>
                      <span className="tab-title">{cp.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ISOMETRIC BLUEPRINT CANVAS STAGE */}
          <div className="blueprint-canvas-container">
            {/* Cyber Blueprint Grid Background */}
            <div className="blueprint-grid-overlay" />

            {/* SVG Vector Schematic Scene */}
            <svg 
              className="blueprint-svg-scene" 
              viewBox="0 0 940 540" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow Filters */}
                <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="9" result="blur1" />
                  <feGaussianBlur stdDeviation="3" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="floorGrad" x1="0" y1="0" x2="940" y2="540" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#12d4c9" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.04" />
                </linearGradient>
                <linearGradient id="wallBackGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* 1. Isometric Room Floor & Grid */}
              <g className="iso-room-floor">
                {/* Outer Isometric Diamond Floor */}
                <path d="M470 50 L870 255 L470 460 L70 255 Z" fill="url(#floorGrad)" stroke="#12d4c9" strokeWidth="1.8" strokeOpacity="0.4" />
                
                {/* Inner Grid Lines */}
                <path d="M470 110 L770 260 L470 410 L170 260 Z" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 5" />
                <path d="M470 170 L670 265 L470 360 L270 265 Z" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.15" />
                
                {/* Axes */}
                <line x1="470" y1="50" x2="470" y2="460" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="3 3" />
                <line x1="70" y1="255" x2="870" y2="255" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="3 3" />
              </g>

              {/* 2. Isometric Architectural Walls */}
              <g className="iso-room-walls">
                {/* Back Left Wall */}
                <path d="M70 255 L470 50 L470 0 L70 205 Z" fill="url(#wallBackGrad)" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                {/* Back Right Wall */}
                <path d="M470 50 L870 255 L870 205 L470 0 Z" fill="url(#wallBackGrad)" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                {/* Center Column / Vertex Light */}
                <line x1="470" y1="0" x2="470" y2="50" stroke="#12d4c9" strokeWidth="2.5" strokeOpacity="0.9" filter="url(#cyanGlow)" />
                <line x1="70" y1="205" x2="70" y2="255" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="870" y1="205" x2="870" y2="255" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />

                {/* Architectural Blueprint Zone Guide Marks */}
                <text x="210" y="90" fill="#38bdf8" opacity="0.5" fontSize="11" fontFamily="monospace" fontWeight="bold">PASILLO DE ACCESO // ENTRADA</text>
                <text x="560" y="90" fill="#38bdf8" opacity="0.5" fontSize="11" fontFamily="monospace" fontWeight="bold">NÚCLEO DE CONTROL // RECEPCIÓN</text>
              </g>

              {/* 3. DYNAMIC VECTOR SCHEMATIC BY ACTIVE INDUSTRY */}
              
              {/* === ESCUELAS === */}
              {activeEnvId === 'escuelas' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Torniquetes Escolares Triples */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`}>
                    {/* Pedestal 1 */}
                    <path d="M260 300 L305 278 L315 283 L270 305 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M260 300 L270 305 L270 345 L260 340 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M270 305 L315 283 L315 323 L270 345 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <circle cx="288" cy="295" r="4.5" fill="#12d4c9" filter="url(#cyanGlow)" />
                    <line x1="288" y1="295" x2="338" y2="318" stroke="#10b981" strokeWidth="3" strokeLinecap="round" filter="url(#cyanGlow)" />
                    <line x1="288" y1="295" x2="250" y2="280" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Pedestal 2 */}
                    <path d="M340 338 L385 316 L395 321 L350 343 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M340 338 L350 343 L350 383 L340 378 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M350 343 L395 321 L395 361 L350 383 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <circle cx="368" cy="333" r="4.5" fill="#12d4c9" filter="url(#cyanGlow)" />
                    <line x1="368" y1="333" x2="418" y2="356" stroke="#10b981" strokeWidth="3" strokeLinecap="round" filter="url(#cyanGlow)" />

                    {/* Flow arrow on floor */}
                    <path d="M230 365 L310 325 L335 338" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 3" />
                    <text x="220" y="390" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">FLUJO ALUMNOS RFID ▶</text>
                  </g>

                  {/* Punto 2: Módulo Registro Tutores */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`}>
                    {/* Security Desk */}
                    <path d="M580 215 L650 180 L680 195 L610 230 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M580 215 L610 230 L610 270 L580 255 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M610 230 L680 195 L680 235 L610 270 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    {/* Touchscreen on desk */}
                    <path d="M620 205 L645 192 L645 210 L620 223 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" filter="url(#cyanGlow)" />
                    <circle cx="655" cy="190" r="3" fill="#12d4c9" />
                    <text x="590" y="170" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">MÓDULO TUTORES</text>
                  </g>

                  {/* Punto 3: Salida Fail-Safe Emergencia */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`}>
                    {/* Door Frame on Back Wall */}
                    <path d="M470 105 L520 80 L520 160 L470 185 Z" fill="#020617" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
                    <path d="M470 105 L510 125 L510 205 L470 185 Z" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" filter="url(#intenseGlow)" />
                    <line x1="475" y1="150" x2="505" y2="165" stroke="#ffffff" strokeWidth="3" />
                    <rect x="480" y="90" width="30" height="8" fill="#ef4444" filter="url(#cyanGlow)" />
                    <text x="440" y="65" fill="#ef4444" fontSize="11" fontFamily="monospace" fontWeight="bold">SALIDA FAIL-SAFE ⚡</text>
                  </g>
                </g>
              )}

              {/* === BANCOS === */}
              {activeEnvId === 'bancos' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Bóveda de Valores */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`}>
                    <path d="M230 130 L320 85 L320 220 L230 265 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="2" />
                    {/* Vault Wheel */}
                    <ellipse cx="275" cy="175" rx="34" ry="48" fill="#020617" stroke="#38bdf8" strokeWidth="2.5" filter="url(#cyanGlow)" />
                    <ellipse cx="275" cy="175" rx="16" ry="24" fill="rgba(18,212,201,0.25)" stroke="#12d4c9" strokeWidth="1.8" />
                    <line x1="275" y1="145" x2="275" y2="205" stroke="#12d4c9" strokeWidth="2.5" />
                    <line x1="250" y1="175" x2="300" y2="175" stroke="#12d4c9" strokeWidth="2.5" />
                    {/* Biometric Keypad */}
                    <rect x="315" y="155" width="12" height="22" fill="#12d4c9" filter="url(#cyanGlow)" />
                    <text x="200" y="65" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">BÓVEDA DE VALORES [AES-256]</text>
                  </g>

                  {/* Punto 2: Esclusa de Cajas */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`}>
                    <path d="M510 250 L570 220 L605 238 L545 268 Z" fill="#0f172a" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M510 250 L545 268 L545 330 L510 310 Z" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M545 268 L605 238 L605 300 L545 330 Z" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="1.8" />
                    <line x1="558" y1="250" x2="558" y2="310" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" filter="url(#cyanGlow)" />
                    <text x="480" y="355" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">ESCLUSA UNIPERSONAL CAJAS</text>
                  </g>

                  {/* Punto 3: Centro de Monitoreo CCTV */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`}>
                    <path d="M620 115 L670 90 L695 102 L645 127 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M620 115 L645 127 L645 200 L620 188 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M645 127 L695 102 L695 175 L645 200 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.8" />
                    <circle cx="655" cy="140" r="2" fill="#10b981" filter="url(#cyanGlow)" />
                    <circle cx="670" cy="132" r="2" fill="#10b981" filter="url(#cyanGlow)" />
                    <circle cx="655" cy="155" r="2" fill="#38bdf8" filter="url(#cyanGlow)" />
                    <circle cx="670" cy="147" r="2" fill="#ef4444" filter="url(#cyanGlow)" />
                    <text x="590" y="70" fill="#12d4c9" fontSize="11" fontFamily="monospace" fontWeight="bold">MONITOREO CCTV 24/7</text>
                  </g>
                </g>
              )}

              {/* === OFICINAS === */}
              {activeEnvId === 'oficinas' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Speed Gates Ópticos */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`}>
                    <path d="M280 285 L325 263 L335 268 L290 290 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M280 285 L290 290 L290 335 L280 330 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M290 290 L335 268 L335 313 L290 335 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <polygon points="310,275 355,297 355,265 310,243" fill="rgba(18,212,201,0.35)" stroke="#12d4c9" strokeWidth="1.8" filter="url(#cyanGlow)" />

                    <path d="M360 325 L405 303 L415 308 L370 330 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M360 325 L370 330 L370 375 L360 370 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M370 330 L415 308 L415 353 L370 375 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <polygon points="390,315 435,337 435,305 390,283" fill="rgba(18,212,201,0.35)" stroke="#12d4c9" strokeWidth="1.8" filter="url(#cyanGlow)" />

                    <line x1="310" y1="277" x2="390" y2="317" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4 3" filter="url(#cyanGlow)" />
                    <text x="250" y="370" fill="#12d4c9" fontSize="11" fontFamily="monospace" fontWeight="bold">PASILLO SPEED GATES ▶</text>
                  </g>

                  {/* Punto 2: Sala de Servidores */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`}>
                    <path d="M230 120 L300 85 L300 195 L230 230 Z" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
                    <rect x="295" y="135" width="10" height="18" fill="#38bdf8" filter="url(#cyanGlow)" />
                    <text x="200" y="60" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">SALA TI // SERVIDORES [FACIAL 3D]</text>
                  </g>

                  {/* Punto 3: Recepción NFC */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`}>
                    <path d="M570 205 L650 165 L680 180 L600 220 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M570 205 L600 220 L600 255 L570 240 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M600 220 L680 180 L680 215 L600 255 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <ellipse cx="630" cy="190" rx="10" ry="5" stroke="#10b981" strokeWidth="1.8" fill="none" filter="url(#cyanGlow)" />
                    <ellipse cx="630" cy="190" rx="18" ry="9" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
                    <text x="580" y="150" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">NFC SMARTPHONE DESK</text>
                  </g>
                </g>
              )}

              {/* === EDIFICIOS === */}
              {activeEnvId === 'edificios' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Kiosco QR */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`}>
                    <path d="M290 265 L325 248 L335 253 L300 270 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M290 265 L300 270 L300 340 L290 335 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M300 270 L335 253 L335 323 L300 340 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.8" />
                    <polygon points="302,277 330,263 330,300 302,314" fill="#12d4c9" opacity="0.9" filter="url(#cyanGlow)" />
                    <text x="250" y="365" fill="#12d4c9" fontSize="11" fontFamily="monospace" fontWeight="bold">KIOSCO VISITANTES QR</text>
                  </g>

                  {/* Punto 2: Elevador Inteligente */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`}>
                    <path d="M520 135 L590 100 L590 220 L520 255 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="555" y1="117" x2="555" y2="237" stroke="#38bdf8" strokeWidth="1.8" />
                    <rect x="535" y="105" width="40" height="10" fill="#020617" stroke="#10b981" strokeWidth="1.2" />
                    <text x="542" y="113" fill="#10b981" fontSize="8" fontFamily="monospace">PISO 18 ▲</text>
                    <text x="490" y="75" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">ELEVADOR // ACCESO POR PISO</text>
                  </g>

                  {/* Punto 3: Barrera Vehicular UHF */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`}>
                    <path d="M580 315 L610 300 L620 305 L590 320 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.8" />
                    <path d="M580 315 L590 320 L590 365 L580 360 Z" fill="#020617" stroke="#f59e0b" strokeWidth="1.8" />
                    <path d="M590 320 L620 305 L620 350 L590 365 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.8" />
                    <line x1="590" y1="325" x2="660" y2="290" stroke="#f59e0b" strokeWidth="4.5" strokeDasharray="10 7" filter="url(#cyanGlow)" />
                    <line x1="565" y1="290" x2="565" y2="250" stroke="#38bdf8" strokeWidth="2.5" />
                    <polygon points="560,250 570,250 565,240" fill="#38bdf8" filter="url(#cyanGlow)" />
                    <text x="540" y="385" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">BARRERA VEHICULAR TAG UHF</text>
                  </g>
                </g>
              )}

              {/* === GOBIERNO === */}
              {activeEnvId === 'gobierno' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Reconocimiento Facial 3D */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`}>
                    <path d="M270 160 L340 125 L350 130 L280 165 Z" fill="#0f172a" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M270 160 L280 165 L280 255 L270 250 Z" fill="#020617" stroke="#10b981" strokeWidth="2" />
                    <path d="M340 125 L350 130 L350 220 L340 215 Z" fill="#020617" stroke="#10b981" strokeWidth="2" />
                    <polygon points="310,140 260,240 370,190" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1.2" strokeDasharray="4 3" filter="url(#cyanGlow)" />
                    <text x="240" y="100" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">RECONOCIMIENTO FACIAL 3D (3M)</text>
                  </g>

                  {/* Punto 2: Filtro Perimetral */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`}>
                    <path d="M510 275 L560 250 L570 255 L520 280 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M510 275 L520 280 L520 325 L510 320 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M520 280 L570 255 L570 300 L520 325 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.8" />
                    <line x1="535" y1="270" x2="585" y2="295" stroke="#12d4c9" strokeWidth="3" />
                    <text x="480" y="350" fill="#12d4c9" fontSize="11" fontFamily="monospace" fontWeight="bold">FILTRO SEGURIDAD INSTITUCIONAL</text>
                  </g>

                  {/* Punto 3: Archivo Clasificado */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`}>
                    <path d="M530 100 L600 65 L600 170 L530 205 Z" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
                    <rect x="550" y="75" width="30" height="8" fill="#ef4444" filter="url(#cyanGlow)" />
                    <circle cx="605" cy="120" r="3.5" fill="#12d4c9" />
                    <text x="500" y="45" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">ARCHIVO CLASIFICADO [600 LBS]</text>
                  </g>
                </g>
              )}

              {/* 4. ISOMETRIC CYBER HOTSPOT PINS */}
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
                    <circle cx={x} cy={y} r="20" fill="none" stroke="#12d4c9" strokeWidth="1.2" className="pin-svg-wave" />
                    <circle cx={x} cy={y} r="12" fill="none" stroke="#12d4c9" strokeWidth="1.8" className="pin-svg-ring" />
                    
                    {/* Main Core Pin */}
                    <circle 
                      cx={x} 
                      cy={y} 
                      r="9" 
                      fill={isSelected ? '#12d4c9' : '#0f172a'} 
                      stroke={isSelected ? '#ffffff' : '#12d4c9'} 
                      strokeWidth="2.2" 
                      filter="url(#cyanGlow)" 
                    />
                    
                    {/* Number text */}
                    <text 
                      x={x} 
                      y={y + 4} 
                      fill={isSelected ? '#020617' : '#ffffff'} 
                      fontSize="10" 
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

            {/* 5. INTERACTIVE HUD POPUP CARD ("Pop que muestra la información") */}
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
                  <a 
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full justify-center text-sm py-2.5"
                  >
                    Cotizar este Punto de Control →
                  </a>
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
            const cardWaMessage = `Hola, quisiera más información de "${cp.title}" para el sector ${selectedEnv.title}.`;
            const cardWaUrl = `https://api.whatsapp.com/send?phone=525541692770&text=${encodeURIComponent(cardWaMessage)}`;

            return (
              <div key={cp.id} className="env-mobile-card">
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
                    href={cardWaUrl} 
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
