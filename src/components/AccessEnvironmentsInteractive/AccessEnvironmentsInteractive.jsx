import { useState } from 'react';
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
  MessageSquare,
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
        title: "Torniquetes de Alta Velocidad",
        tech: "Carnet RFID Estudiantil / Lectura QR",
        desc: "Ingreso masivo de miles de alumnos por hora con validación de credencial activa y prevención de sustitución de alumnos.",
        tag: "Ingreso Alumnos",
        svgCoords: { x: 300, y: 310 },
        tagCoords: { x: 300, y: 260 },
        highlights: [
          "Validación en < 0.2 seg",
          "Alerta automática a tutores por App",
          "Mecanismo de uso continuo de alto flujo"
        ]
      },
      {
        id: "school_visitor",
        number: 2,
        title: "Módulo de Registro de Tutores",
        tech: "Escáner de Identificación & Pase Visual",
        desc: "Validación obligatoria de padres de familia y proveedores con impresión de distintivo temporal con fotografía y QR.",
        tag: "Control de Tutores",
        svgCoords: { x: 640, y: 240 },
        tagCoords: { x: 640, y: 190 },
        highlights: [
          "Validación de tutor autorizado",
          "Gafete de visita con QR temporal",
          "Filtro obligatorio en recepción"
        ]
      },
      {
        id: "school_failsafe",
        number: 3,
        title: "Evacuación Fail-Safe Emergencia",
        tech: "Liberación Automática por Protección Civil",
        desc: "Caída inmediata de brazos de torniquetes y apertura de puertas ante señal de alarma sísmica, conato de incendio o corte de luz.",
        tag: "Fail-Safe Evacuación",
        svgCoords: { x: 500, y: 130 },
        tagCoords: { x: 500, y: 75 },
        highlights: [
          "Desbloqueo instantáneo sin energía",
          "Liberación por contacto de alarma",
          "Cumplimiento normativo Protección Civil"
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
        tagCoords: { x: 280, y: 120 },
        highlights: [
          "Apertura por doble autorización",
          "Registro forense inalterable",
          "Cierre electroimán de alta presión"
        ]
      },
      {
        id: "bank_cajas",
        number: 2,
        title: "Esclusa & Control de Cajas",
        tech: "Lector Dactilar Anti-Suplantación + Esclusa",
        desc: "Validación de identidad de cajeros y supervisores previa a autorizar transacciones o apertura de gavetas de valores.",
        tag: "Zona de Cajas",
        svgCoords: { x: 560, y: 280 },
        tagCoords: { x: 560, y: 225 },
        highlights: [
          "Sensor óptico anti-huella falsa",
          "Verificación en cada apertura",
          "Historial por operador de caja"
        ]
      },
      {
        id: "bank_monitoreo",
        number: 3,
        title: "Centro de Monitoreo & CCTV",
        tech: "Integración VMS IP + Logs de Acceso en Vivo",
        desc: "Sincronización simultánea de videoclips HD con cada intento de acceso o evento de lectura de credencial.",
        tag: "Auditoría 24/7",
        svgCoords: { x: 650, y: 140 },
        tagCoords: { x: 650, y: 85 },
        highlights: [
          "Videowall en tiempo real",
          "Alertas por intento fallido",
          "Resguardo inmutable en la nube"
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
        title: "Speed Gates Ópticos de Cristal",
        tech: "Sensores Anti-Tailgating + Lector RFID / Móvil",
        desc: "Desahogo continuo de colaboradores en horas pico previniendo pasos simultáneos sin autorización mediante cortina infrarroja.",
        tag: "Flujo Masivo",
        svgCoords: { x: 330, y: 300 },
        tagCoords: { x: 330, y: 245 },
        highlights: [
          "Apertura veloz (< 0.3 seg)",
          "16 sensores anti-tailgating",
          "Integración directa con Nómina/RH"
        ]
      },
      {
        id: "office_server",
        number: 2,
        title: "Acceso Data Center / Servidores TI",
        tech: "Doble Autenticación Facial 3D",
        desc: "Restricción exclusiva a personal informático autorizado con monitoreo de tiempo de permanencia y alerta por puerta abierta.",
        tag: "Infraestructura TI",
        svgCoords: { x: 280, y: 160 },
        tagCoords: { x: 280, y: 105 },
        highlights: [
          "Facial 3D liveness anti-foto",
          "Alerta por puerta abierta >30s",
          "Bitácora exclusiva para TI"
        ]
      },
      {
        id: "office_nfc",
        number: 3,
        title: "Recepción & Acceso Móvil NFC",
        tech: "Pases Virtuales Apple Wallet / Google Pay",
        desc: "Asignación instantánea de permisos temporales a empleados y consultores sin necesidad de tarjetas plásticas físicas.",
        tag: "NFC Smartphone",
        svgCoords: { x: 620, y: 230 },
        tagCoords: { x: 620, y: 175 },
        highlights: [
          "Acceso sin contacto con móvil",
          "Baja de credencial con 1 clic",
          "Envío por WhatsApp o Email"
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
        title: "Kiosco Interactivo de Visitantes QR",
        tech: "Pases QR Dinámicos + Escaneo de Identificación",
        desc: "Autocomprobación de identidad y registro fotográfico con notificación automática al residente o anfitrión corporativo.",
        tag: "Autogestión QR",
        svgCoords: { x: 310, y: 290 },
        tagCoords: { x: 310, y: 235 },
        highlights: [
          "Ticket o distintivo con código QR",
          "QR dinámico de un solo uso",
          "Notificación push al residente"
        ]
      },
      {
        id: "building_elevator",
        number: 2,
        title: "Control de Elevadores por Piso",
        tech: "Lector RFID & Relevador Inteligente",
        desc: "El elevador habilita exclusivamente la botonera del piso asignado a la tarjeta o credencial del usuario.",
        tag: "Pisos Restringidos",
        svgCoords: { x: 560, y: 170 },
        tagCoords: { x: 560, y: 115 },
        highlights: [
          "Compatible con Otis, Schindler, KONE",
          "Permisos por perfil de residente",
          "Bloqueo nocturno de pisos ejecutivos"
        ]
      },
      {
        id: "building_barrier",
        number: 3,
        title: "Barrera Vehicular con Tag UHF",
        tech: "Lectura a Distancia sin Bajar Ventanilla (8m)",
        desc: "Apertura automatizada de barreras de estacionamiento para vehículos registrados con historial completo de entradas.",
        tag: "Tag Vehicular",
        svgCoords: { x: 600, y: 340 },
        tagCoords: { x: 600, y: 285 },
        highlights: [
          "Antena UHF alcance 6 a 10m",
          "Apertura en 1.5 segundos",
          "Integración con pensiones/cobro"
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
        title: "Reconocimiento Facial en Pasillo",
        tech: "Identificación a Distancia sobre la Marcha (3m)",
        desc: "Verificación de identidad sin detener el paso de funcionarios y directores con alta precisión anti-suplantación.",
        tag: "Reconocimiento Facial",
        svgCoords: { x: 310, y: 190 },
        tagCoords: { x: 310, y: 135 },
        highlights: [
          "Lectura al caminar a 3m",
          "Sensor liveness infrarrojo 3D",
          "Acceso sin contacto físico"
        ]
      },
      {
        id: "gov_filter",
        number: 2,
        title: "Filtro Perimetral Institucional",
        tech: "Torniquetes Electromecánicos + Arco Detector",
        desc: "Punto de control institucional que canaliza el flujo del público general previo a ingresar a áreas gubernamentales.",
        tag: "Filtro Institucional",
        svgCoords: { x: 550, y: 300 },
        tagCoords: { x: 550, y: 245 },
        highlights: [
          "Acero inoxidable 304 anti-vandalismo",
          "Integración con detector de metales",
          "Conteo de aforo en tiempo real"
        ]
      },
      {
        id: "gov_archive",
        number: 3,
        title: "Archivo Confidencial [600 lbs]",
        tech: "Cerradura Electroimán + Biometría Dual",
        desc: "Control riguroso de ingreso a repositorios de documentos oficiales con sello de tiempo inalterable.",
        tag: "Archivos Clasificados",
        svgCoords: { x: 570, y: 130 },
        tagCoords: { x: 570, y: 75 },
        highlights: [
          "Retención magnética 600 lbs",
          "Huella o rostro obligatorio",
          "Bitácora forense de aperturas"
        ]
      }
    ]
  }
];

export default function AccessEnvironmentsInteractive() {
  const [activeEnvId, setActiveEnvId] = useState('escuelas');
  const [activeCheckpointIndex, setActiveCheckpointIndex] = useState(0);

  const selectedEnv = ENVIRONMENTS_DATA.find((e) => e.id === activeEnvId) || ENVIRONMENTS_DATA[0];
  const ActiveIcon = selectedEnv.icon;
  const currentCheckpoint = selectedEnv.checkpoints[activeCheckpointIndex] || selectedEnv.checkpoints[0];

  const handleSelectIndustry = (envId) => {
    setActiveEnvId(envId);
    setActiveCheckpointIndex(0);
  };

  const handleSelectCheckpoint = (idx) => {
    setActiveCheckpointIndex(idx);
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
         DESKTOP VIEW: Sidebar (320px) + Clean Blueprint Stage + Docked HUD Ficha
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

        {/* RIGHT AREA: UNIFIED ISOMETRIC VECTOR BLUEPRINT STAGE */}
        <div className="env-blueprint-stage">
          
          {/* 1. Header Bar */}
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

          {/* 2. ISOMETRIC BLUEPRINT CANVAS (Pure Vector Architecture) */}
          <div className="blueprint-canvas-container">
            <div className="blueprint-grid-overlay" />

            <svg 
              className="blueprint-svg-scene" 
              viewBox="0 0 940 480" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
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
                <linearGradient id="floorGrad" x1="0" y1="0" x2="940" y2="480" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#12d4c9" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.04" />
                </linearGradient>
                <linearGradient id="wallBackGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Isometric Room Floor & Grid */}
              <g className="iso-room-floor">
                <path d="M470 40 L870 240 L470 440 L70 240 Z" fill="url(#floorGrad)" stroke="#12d4c9" strokeWidth="1.8" strokeOpacity="0.45" />
                <path d="M470 100 L770 245 L470 390 L170 245 Z" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 5" />
                <path d="M470 160 L670 250 L470 340 L270 250 Z" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.15" />
                <line x1="470" y1="40" x2="470" y2="440" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="3 3" />
                <line x1="70" y1="240" x2="870" y2="240" stroke="#12d4c9" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="3 3" />
              </g>

              {/* Isometric Architectural Walls */}
              <g className="iso-room-walls">
                <path d="M70 240 L470 40 L470 0 L70 200 Z" fill="url(#wallBackGrad)" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M470 40 L870 240 L870 200 L470 0 Z" fill="url(#wallBackGrad)" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="470" y1="0" x2="470" y2="40" stroke="#12d4c9" strokeWidth="2.5" strokeOpacity="0.9" filter="url(#cyanGlow)" />
                <line x1="70" y1="200" x2="70" y2="240" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="870" y1="200" x2="870" y2="240" stroke="#12d4c9" strokeWidth="1.5" strokeOpacity="0.5" />
                <text x="210" y="80" fill="#38bdf8" opacity="0.5" fontSize="11" fontFamily="monospace" fontWeight="bold">CORREDOR DE ACCESO // PERÍMETRO</text>
                <text x="560" y="80" fill="#38bdf8" opacity="0.5" fontSize="11" fontFamily="monospace" fontWeight="bold">NÚCLEO DE CONTROL // RECEPCIÓN</text>
              </g>

              {/* DYNAMIC VECTOR HARDWARE BY INDUSTRY */}
              
              {/* === ESCUELAS === */}
              {activeEnvId === 'escuelas' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Torniquetes */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(0)} style={{ cursor: 'pointer' }}>
                    <path d="M260 290 L305 268 L315 273 L270 295 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M260 290 L270 295 L270 335 L260 330 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M270 295 L315 273 L315 313 L270 335 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <circle cx="288" cy="285" r="4.5" fill="#12d4c9" filter="url(#cyanGlow)" />
                    <line x1="288" y1="285" x2="338" y2="308" stroke="#10b981" strokeWidth="3" strokeLinecap="round" filter="url(#cyanGlow)" />

                    <path d="M340 328 L385 306 L395 311 L350 333 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M340 328 L350 333 L350 373 L340 368 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M350 333 L395 311 L395 351 L350 373 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <circle cx="368" cy="323" r="4.5" fill="#12d4c9" filter="url(#cyanGlow)" />
                    <line x1="368" y1="323" x2="418" y2="346" stroke="#10b981" strokeWidth="3" strokeLinecap="round" filter="url(#cyanGlow)" />
                    <text x="220" y="380" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">FLUJO ALUMNOS RFID ▶</text>
                  </g>

                  {/* Punto 2: Módulo Tutores */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(1)} style={{ cursor: 'pointer' }}>
                    <path d="M600 205 L670 170 L700 185 L630 220 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M600 205 L630 220 L630 260 L600 245 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M630 220 L700 185 L700 225 L630 260 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M640 195 L665 182 L665 200 L640 213 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" filter="url(#cyanGlow)" />
                    <text x="610" y="160" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">MÓDULO TUTORES</text>
                  </g>

                  {/* Punto 3: Salida Emergencia */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(2)} style={{ cursor: 'pointer' }}>
                    <path d="M470 95 L520 70 L520 150 L470 175 Z" fill="#020617" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
                    <path d="M470 95 L510 115 L510 195 L470 175 Z" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" filter="url(#intenseGlow)" />
                    <line x1="475" y1="140" x2="505" y2="155" stroke="#ffffff" strokeWidth="3" />
                    <rect x="480" y="80" width="30" height="8" fill="#ef4444" filter="url(#cyanGlow)" />
                    <text x="440" y="55" fill="#ef4444" fontSize="11" fontFamily="monospace" fontWeight="bold">SALIDA FAIL-SAFE ⚡</text>
                  </g>
                </g>
              )}

              {/* === BANCOS === */}
              {activeEnvId === 'bancos' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Bóveda */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(0)} style={{ cursor: 'pointer' }}>
                    <path d="M230 120 L320 75 L320 210 L230 255 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="2" />
                    <ellipse cx="275" cy="165" rx="34" ry="48" fill="#020617" stroke="#38bdf8" strokeWidth="2.5" filter="url(#cyanGlow)" />
                    <ellipse cx="275" cy="165" rx="16" ry="24" fill="rgba(18,212,201,0.25)" stroke="#12d4c9" strokeWidth="1.8" />
                    <line x1="275" y1="135" x2="275" y2="195" stroke="#12d4c9" strokeWidth="2.5" />
                    <line x1="250" y1="165" x2="300" y2="165" stroke="#12d4c9" strokeWidth="2.5" />
                    <rect x="315" y="145" width="12" height="22" fill="#12d4c9" filter="url(#cyanGlow)" />
                    <text x="200" y="55" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">BÓVEDA DE VALORES [AES-256]</text>
                  </g>

                  {/* Punto 2: Esclusa Cajas */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(1)} style={{ cursor: 'pointer' }}>
                    <path d="M520 240 L580 210 L615 228 L555 258 Z" fill="#0f172a" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M520 240 L555 258 L555 320 L520 300 Z" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M555 258 L615 228 L615 290 L555 320 Z" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" strokeWidth="1.8" />
                    <line x1="568" y1="240" x2="568" y2="300" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" filter="url(#cyanGlow)" />
                    <text x="490" y="345" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">ESCLUSA UNIPERSONAL CAJAS</text>
                  </g>

                  {/* Punto 3: CCTV Rack */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(2)} style={{ cursor: 'pointer' }}>
                    <path d="M630 105 L680 80 L705 92 L655 117 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M630 105 L655 117 L655 190 L630 178 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M655 117 L705 92 L705 165 L655 190 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.8" />
                    <circle cx="665" cy="130" r="2" fill="#10b981" filter="url(#cyanGlow)" />
                    <circle cx="680" cy="122" r="2" fill="#10b981" filter="url(#cyanGlow)" />
                    <circle cx="665" cy="145" r="2" fill="#38bdf8" filter="url(#cyanGlow)" />
                    <text x="600" y="60" fill="#12d4c9" fontSize="11" fontFamily="monospace" fontWeight="bold">MONITOREO CCTV 24/7</text>
                  </g>
                </g>
              )}

              {/* === OFICINAS === */}
              {activeEnvId === 'oficinas' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Speed Gates */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(0)} style={{ cursor: 'pointer' }}>
                    <path d="M280 275 L325 253 L335 258 L290 280 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M280 275 L290 280 L290 325 L280 320 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M290 280 L335 253 L335 298 L290 325 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <polygon points="310,265 355,287 355,255 310,233" fill="rgba(18,212,201,0.35)" stroke="#12d4c9" strokeWidth="1.8" filter="url(#cyanGlow)" />

                    <path d="M360 315 L405 293 L415 298 L370 320 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M360 315 L370 320 L370 365 L360 360 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M370 320 L415 293 L415 338 L370 365 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <polygon points="390,305 435,327 435,295 390,273" fill="rgba(18,212,201,0.35)" stroke="#12d4c9" strokeWidth="1.8" filter="url(#cyanGlow)" />
                    <text x="250" y="360" fill="#12d4c9" fontSize="11" fontFamily="monospace" fontWeight="bold">PASILLO SPEED GATES ▶</text>
                  </g>

                  {/* Punto 2: Data Center */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(1)} style={{ cursor: 'pointer' }}>
                    <path d="M230 110 L300 75 L300 185 L230 220 Z" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
                    <rect x="295" y="125" width="10" height="18" fill="#38bdf8" filter="url(#cyanGlow)" />
                    <text x="200" y="50" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">SALA TI // SERVIDORES [FACIAL 3D]</text>
                  </g>

                  {/* Punto 3: Recepción NFC */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(2)} style={{ cursor: 'pointer' }}>
                    <path d="M580 195 L660 155 L690 170 L610 210 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M580 195 L610 210 L610 245 L580 230 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.5" />
                    <path d="M610 210 L690 170 L690 205 L610 245 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.5" />
                    <ellipse cx="640" cy="180" rx="10" ry="5" stroke="#10b981" strokeWidth="1.8" fill="none" filter="url(#cyanGlow)" />
                    <text x="590" y="140" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">NFC SMARTPHONE DESK</text>
                  </g>
                </g>
              )}

              {/* === EDIFICIOS === */}
              {activeEnvId === 'edificios' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Kiosco QR */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(0)} style={{ cursor: 'pointer' }}>
                    <path d="M290 255 L325 238 L335 243 L300 260 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M290 255 L300 260 L300 330 L290 325 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M300 260 L335 243 L335 313 L300 330 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.8" />
                    <polygon points="302,267 330,253 330,290 302,304" fill="#12d4c9" opacity="0.9" filter="url(#cyanGlow)" />
                    <text x="250" y="355" fill="#12d4c9" fontSize="11" fontFamily="monospace" fontWeight="bold">KIOSCO VISITANTES QR</text>
                  </g>

                  {/* Punto 2: Elevador */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(1)} style={{ cursor: 'pointer' }}>
                    <path d="M530 125 L600 90 L600 210 L530 245 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="565" y1="107" x2="565" y2="227" stroke="#38bdf8" strokeWidth="1.8" />
                    <rect x="545" y="95" width="40" height="10" fill="#020617" stroke="#10b981" strokeWidth="1.2" />
                    <text x="552" y="103" fill="#10b981" fontSize="8" fontFamily="monospace">PISO 18 ▲</text>
                    <text x="500" y="65" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">ELEVADOR // ACCESO POR PISO</text>
                  </g>

                  {/* Punto 3: Barrera Vehicular */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(2)} style={{ cursor: 'pointer' }}>
                    <path d="M580 305 L610 290 L620 295 L590 310 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.8" />
                    <path d="M580 305 L590 310 L590 355 L580 350 Z" fill="#020617" stroke="#f59e0b" strokeWidth="1.8" />
                    <path d="M590 310 L620 295 L620 340 L590 355 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.8" />
                    <line x1="590" y1="315" x2="660" y2="280" stroke="#f59e0b" strokeWidth="4.5" strokeDasharray="10 7" filter="url(#cyanGlow)" />
                    <text x="540" y="375" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">BARRERA VEHICULAR TAG UHF</text>
                  </g>
                </g>
              )}

              {/* === GOBIERNO === */}
              {activeEnvId === 'gobierno' && (
                <g className="iso-env-graphics">
                  {/* Punto 1: Reconocimiento Facial */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 0 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(0)} style={{ cursor: 'pointer' }}>
                    <path d="M270 150 L340 115 L350 120 L280 155 Z" fill="#0f172a" stroke="#10b981" strokeWidth="1.8" />
                    <path d="M270 150 L280 155 L280 245 L270 240 Z" fill="#020617" stroke="#10b981" strokeWidth="2" />
                    <path d="M340 115 L350 120 L350 210 L340 205 Z" fill="#020617" stroke="#10b981" strokeWidth="2" />
                    <polygon points="310,130 260,230 370,180" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1.2" strokeDasharray="4 3" filter="url(#cyanGlow)" />
                    <text x="240" y="90" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">RECONOCIMIENTO FACIAL 3D (3M)</text>
                  </g>

                  {/* Punto 2: Filtro Perimetral */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 1 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(1)} style={{ cursor: 'pointer' }}>
                    <path d="M510 265 L560 240 L570 245 L520 270 Z" fill="#0f172a" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M510 265 L520 270 L520 315 L510 310 Z" fill="#020617" stroke="#12d4c9" strokeWidth="1.8" />
                    <path d="M520 270 L570 245 L570 290 L520 315 Z" fill="#1e293b" stroke="#12d4c9" strokeWidth="1.8" />
                    <line x1="535" y1="260" x2="585" y2="285" stroke="#12d4c9" strokeWidth="3" />
                    <text x="480" y="340" fill="#12d4c9" fontSize="11" fontFamily="monospace" fontWeight="bold">FILTRO SEGURIDAD INSTITUCIONAL</text>
                  </g>

                  {/* Punto 3: Archivo Clasificado */}
                  <g className={`iso-hw-group ${activeCheckpointIndex === 2 ? 'is-active-hw' : ''}`} onClick={() => handleSelectCheckpoint(2)} style={{ cursor: 'pointer' }}>
                    <path d="M540 90 L610 55 L610 160 L540 195 Z" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
                    <rect x="560" y="65" width="30" height="8" fill="#ef4444" filter="url(#cyanGlow)" />
                    <circle cx="615" cy="110" r="3.5" fill="#12d4c9" />
                    <text x="510" y="35" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">ARCHIVO CLASIFICADO [600 LBS]</text>
                  </g>
                </g>
              )}

              {/* FLOATING CYBER CALLOUT TAGS ANCHORED ON CANVAS */}
              {selectedEnv.checkpoints.map((cp, idx) => {
                const isSelected = activeCheckpointIndex === idx;
                const { x, y } = cp.tagCoords;
                const targetPoint = cp.svgCoords;

                return (
                  <g 
                    key={`tag-${cp.id}`} 
                    className={`iso-canvas-tag ${isSelected ? 'tag-selected' : ''}`}
                    onClick={() => handleSelectCheckpoint(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Leader Line from Tag to Equipment */}
                    <line 
                      x1={x} 
                      y1={y + 12} 
                      x2={targetPoint.x} 
                      y2={targetPoint.y} 
                      stroke={isSelected ? '#12d4c9' : '#64748b'} 
                      strokeWidth={isSelected ? '1.8' : '1'} 
                      strokeDasharray={isSelected ? 'none' : '3 3'}
                      strokeOpacity={isSelected ? '0.9' : '0.4'}
                    />

                    {/* Tag Background Pill */}
                    <rect 
                      x={x - 85} 
                      y={y - 12} 
                      width="170" 
                      height="24" 
                      rx="12" 
                      fill={isSelected ? '#020617' : '#0f172a'} 
                      stroke={isSelected ? '#12d4c9' : '#334155'} 
                      strokeWidth={isSelected ? '1.8' : '1'}
                      filter={isSelected ? 'url(#cyanGlow)' : 'none'}
                    />

                    {/* Tag Number Circle */}
                    <circle 
                      cx={x - 72} 
                      cy={y} 
                      r="7.5" 
                      fill={isSelected ? '#12d4c9' : '#334155'} 
                    />
                    <text 
                      x={x - 72} 
                      y={y + 3} 
                      fill={isSelected ? '#020617' : '#ffffff'} 
                      fontSize="9" 
                      fontWeight="bold" 
                      fontFamily="monospace" 
                      textAnchor="middle"
                    >
                      {cp.number}
                    </text>

                    {/* Tag Text */}
                    <text 
                      x={x - 58} 
                      y={y + 3.5} 
                      fill={isSelected ? '#ffffff' : '#94a3b8'} 
                      fontSize="9.5" 
                      fontWeight="bold" 
                      fontFamily="sans-serif"
                    >
                      {cp.tag}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 3. DOCKED BOTTOM EXECUTIVE HUD FICHA STRIP (Zero Overlap, Premium Architecture) */}
          <div className="blueprint-docked-hud">
            <div className="hud-left-details">
              <div className="flex items-center gap-2 mb-1">
                <span className="hud-tag-pill font-mono">
                  <ShieldCheck size={13} className="inline mr-1 text-accent" />
                  PUNTO {currentCheckpoint.number}: {currentCheckpoint.tag}
                </span>
                <span className="hud-tech-text font-mono">
                  <Zap size={12} className="text-accent inline mr-1" />
                  {currentCheckpoint.tech}
                </span>
              </div>
              <h4 className="hud-unit-title">{currentCheckpoint.title}</h4>
              <p className="hud-unit-desc">{currentCheckpoint.desc}</p>
            </div>

            <div className="hud-center-specs">
              <span className="specs-label font-mono">ESPECIFICACIONES CLAVE:</span>
              <div className="specs-pills-list">
                {currentCheckpoint.highlights.map((h, i) => (
                  <div key={i} className="spec-pill-item">
                    <CheckCircle2 size={13} className="text-accent flex-shrink-0 mr-1.5 inline" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hud-right-action">
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full justify-center text-sm py-3"
              >
                <MessageSquare size={16} className="mr-1.5 inline" />
                Cotizar este Punto →
              </a>
            </div>
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
