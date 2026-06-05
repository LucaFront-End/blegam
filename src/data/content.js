// ─── BLEGAM Content Data Layer ───
// Centralized content for all pages. Future Wix Headless integration will replace this.

export const brand = {
  name: 'BLEGAM',
  fullName: 'BLEGAM CORP',
  tagline: 'Infraestructura Crítica para el Futuro Digital',
  description: 'Empresa integradora 100% mexicana especializada en proyectos de misión crítica para sectores públicos y privados.',
  founded: 2010,
  logo: 'https://static.wixstatic.com/media/45119e_2272013f9e404654886839a31f616e81~mv2.png/v1/crop/x_336,y_380,w_3269,h_1035/fill/w_293,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/da2d14_6aea49ab4c4147119b2127f409173c57~mv2.png',
  favicon: 'https://static.wixstatic.com/media/8daf66_aec981e8c4ef4e1085911bfb63c507d9~mv2.png/v1/fill/w_192,h_192,lg_1,usm_0.66_1.00_0.01/8daf66_aec981e8c4ef4e1085911bfb63c507d9~mv2.png',
  contact: {
    phone: '55 5532 1985',
    whatsapp: '55 1739 0097',
    whatsappLink: 'https://wa.link/nf8gq3',
    email: 'info@blegam.com.mx',
    address: 'Alonso Cano 8, Alfonso XIII, Álvaro Obregón, 01460, CDMX',
    mapLink: 'https://maps.app.goo.gl/gsawBQHFqk9GAPy2A',
  },
};

export const nav = {
  links: [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Salas de Oralidad', path: '/salas-de-oralidad', highlight: true },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Contacto', path: '/contacto' },
  ],
};

export const stats = [
  { value: 15, suffix: '+', label: 'Años de Experiencia' },
  { value: 200, suffix: '+', label: 'Salas Implementadas' },
  { value: 50, suffix: '+', label: 'Clientes Satisfechos' },
  { value: 6, suffix: '', label: 'Estados con Presencia' },
];

export const services = [
  {
    id: 'justicia-digital',
    icon: '⚖️',
    title: 'Justicia Digital',
    description: 'Ecosistemas tecnológicos para salas orales digitales y procesos judiciales modernos. Integración de audio, video, almacenamiento, redes y software especializado.',
    features: ['Diseño e ingeniería de salas orales', 'Software MASOD®', 'Gestión de audiencias', 'Videoconferencia judicial'],
  },
  {
    id: 'seguridad-integral',
    icon: '🛡️',
    title: 'Seguridad Integral',
    description: 'Soluciones avanzadas de seguridad física, tecnológica y ciberseguridad para entornos críticos.',
    features: ['CCTV y VMS multi-marca', 'Monitoreo inteligente', 'Ciberseguridad', 'Comunicaciones seguras cifradas'],
  },
  {
    id: 'ingenieria-software',
    icon: '💻',
    title: 'Ingeniería & Software',
    description: 'Desarrollo de soluciones tecnológicas e infraestructura especializada para digitalización, monitoreo y automatización.',
    features: ['Software a la medida', 'Cableado estructurado', 'Automatización de procesos', 'Sistema SICEM'],
  },
  {
    id: 'broadcast',
    icon: '📡',
    title: 'Broadcast',
    description: 'Diseño de unidades móviles, producción audiovisual, equipos para TV y radio con tecnología de vanguardia.',
    features: ['Unidades móviles', 'Audio profesional', 'Transmisión satelital', 'Gráficos y sets virtuales'],
  },
];

export const valueProps = [
  {
    title: 'Altamente Personalizable',
    description: 'Realizamos un análisis profundo de tus necesidades y procesos para diseñar una solución personalizada que se adapte perfectamente a tu negocio.',
    icon: '🎯',
  },
  {
    title: 'Siempre Receptivo',
    description: 'Comunicación fluida durante todo el proceso, desde la evaluación inicial hasta la implementación final. Soporte técnico y mantenimiento preventivo.',
    icon: '🤝',
  },
  {
    title: 'Tecnología de Punta',
    description: 'Nos mantenemos a la vanguardia de las tendencias tecnológicas para ofrecerte las soluciones más efectivas y escalables.',
    icon: '⚡',
  },
];

export const caseStudies = [
  {
    title: 'Televisoras Mexicanas',
    category: 'Audio y TV',
    description: 'Instalación de equipos de última generación para los analistas deportivos de uno de los canales más importantes de televisión mexicana.',
    image: 'https://static.wixstatic.com/media/45119e_f9bf515511d34a71abe789e9bd72bd8a~mv2.jpg/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_f9bf515511d34a71abe789e9bd72bd8a~mv2.jpg',
  },
  {
    title: 'Secretaría de Justicia',
    category: 'Gobierno',
    description: 'Instalación de un sistema integral de cámaras de seguridad para disuadir robos, vandalismo y otras actividades delictivas.',
    image: 'https://static.wixstatic.com/media/45119e_46cf0e643d904898841f764a999053a0~mv2.jpeg/v1/fill/w_565,h_380,al_c,q_80,enc_avif,quality_auto/45119e_46cf0e643d904898841f764a999053a0~mv2.jpeg',
  },
  {
    title: 'Juguetón 2023',
    category: 'Audio y TV',
    description: 'Suministro de equipos de producción audiovisual de alta calidad para el evento infantil más grande de México.',
    image: 'https://static.wixstatic.com/media/45119e_7ec832f7af534fd3ba6852ff32bf3501~mv2.jpg/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_7ec832f7af534fd3ba6852ff32bf3501~mv2.jpg',
  },
  {
    title: 'Suburbano',
    category: 'Seguridad',
    description: 'Implementación de un robusto sistema de seguridad de datos e instalación de equipos de audio de última tecnología.',
    image: 'https://static.wixstatic.com/media/45119e_6147714d162c4b8da1015528134fd680~mv2.webp/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_6147714d162c4b8da1015528134fd680~mv2.webp',
  },
];

export const clientLogos = [
  { name: 'Poder Judicial CDMX', domain: 'poderjudicialcdmx.gob.mx' },
  { name: 'Suprema Corte', domain: 'scjn.gob.mx' },
  { name: 'Poder Judicial Puebla', domain: 'htsjpuebla.gob.mx' },
  { name: 'Televisa', domain: 'televisa.com' },
  { name: 'Casa del Congreso', domain: 'diputados.gob.mx' },
  { name: 'ChyronHego', domain: 'chyron.com' },
];

// ─── LANDING: Salas de Oralidad ───

export const salaElements = [
  {
    id: 'camera-judge',
    name: 'Cámara del Juez',
    category: 'video',
    icon: '📹',
    description: 'Cámara PTZ de alta definición enfocada en el área del juez para captura precisa de las intervenciones.',
    position: { x: 50, y: 15 },
    specs: ['Resolución 4K', 'Zoom óptico 30x', 'Seguimiento automático', 'Visión nocturna'],
  },
  {
    id: 'camera-parties',
    name: 'Cámara de Partes',
    category: 'video',
    icon: '📹',
    description: 'Cámara dedicada a la captura de las intervenciones de las partes procesales.',
    position: { x: 20, y: 45 },
    specs: ['Gran angular 120°', 'Resolución Full HD', 'Bajo ruido', 'IR integrado'],
  },
  {
    id: 'camera-general',
    name: 'Cámara General',
    category: 'video',
    icon: '📹',
    description: 'Cámara panorámica que captura la vista general de toda la sala de audiencias.',
    position: { x: 80, y: 45 },
    specs: ['Vista 180°', '4K Ultra HD', 'Montaje en techo', 'Anti-vandalismo'],
  },
  {
    id: 'mic-judge',
    name: 'Micrófono del Juez',
    category: 'audio',
    icon: '🎙️',
    description: 'Micrófono de cuello de ganso de alta sensibilidad con cancelación de ruido para el podio del juez.',
    position: { x: 50, y: 25 },
    specs: ['Cardioide', 'Phantom Power', 'Anti-pop', 'LED indicador'],
  },
  {
    id: 'mic-parties',
    name: 'Micrófonos de Partes',
    category: 'audio',
    icon: '🎙️',
    description: 'Sistema de micrófonos distribuidos para capturar las intervenciones de todas las partes.',
    position: { x: 30, y: 55 },
    specs: ['Omnidireccional', 'Conector XLR', 'Bajo perfil', 'Respuesta plana'],
  },
  {
    id: 'screen-main',
    name: 'Pantalla Principal',
    category: 'pantallas',
    icon: '🖥️',
    description: 'Monitor profesional de gran formato para la presentación de evidencias y documentos durante la audiencia.',
    position: { x: 50, y: 50 },
    specs: ['86" 4K UHD', 'Brillo 500 nits', 'Touch opcional', 'HDMI/DisplayPort'],
  },
  {
    id: 'screen-witness',
    name: 'Monitor del Testigo',
    category: 'pantallas',
    icon: '🖥️',
    description: 'Pantalla dedicada para el testigo donde puede visualizar evidencias y documentos relevantes.',
    position: { x: 70, y: 30 },
    specs: ['24" Full HD', 'Anti-reflejo', 'Ángulo ajustable', 'Entrada múltiple'],
  },
  {
    id: 'workstation',
    name: 'Estación del Secretario',
    category: 'estaciones',
    icon: '💻',
    description: 'Estación de trabajo principal desde donde se controla toda la operación de la sala: grabación, cámaras y audio.',
    position: { x: 50, y: 75 },
    specs: ['Intel i7/Xeon', 'Doble monitor', 'Software MASOD®', 'Control unificado'],
  },
  {
    id: 'server',
    name: 'Servidor de Grabación',
    category: 'estaciones',
    icon: '🖲️',
    description: 'Servidor dedicado para la grabación, almacenamiento y respaldo de todas las audiencias.',
    position: { x: 85, y: 75 },
    specs: ['RAID redundante', 'Almacenamiento 24TB+', 'Respaldo automático', 'Cifrado AES-256'],
  },
  {
    id: 'videoconf',
    name: 'Sistema de Videoconferencia',
    category: 'video',
    icon: '📺',
    description: 'Equipo de videoconferencia para audiencias remotas y participación a distancia de las partes.',
    position: { x: 15, y: 25 },
    specs: ['Codec H.265', 'Dual stream', 'Cifrado end-to-end', 'Audio integrado'],
  },
];

export const salaCategories = [
  { id: 'video', label: 'Video & Cámaras', color: '#12D4C9' },
  { id: 'audio', label: 'Audio & Microfonía', color: '#00ff88' },
  { id: 'pantallas', label: 'Pantallas & Monitores', color: '#ff6b35' },
  { id: 'estaciones', label: 'Estaciones & Servidores', color: '#f3f4f6' },
];

export const audienceProcess = [
  { step: 1, title: 'Programación', description: 'Se agenda la audiencia en el sistema y se asigna sala, juez y partes procesales.' },
  { step: 2, title: 'Grabación', description: 'El sistema inicia la videograbación multicámara automática al comenzar la audiencia.' },
  { step: 3, title: 'Indexación', description: 'Cada intervención se indexa por participante, facilitando la búsqueda posterior.' },
  { step: 4, title: 'Respaldo', description: 'Los archivos se respaldan automáticamente en servidores redundantes con cifrado.' },
  { step: 5, title: 'Reproducción', description: 'Cualquier audiencia puede reproducirse inmediatamente para consulta o revisión.' },
  { step: 6, title: 'Consulta Histórica', description: 'Archivo permanente accesible para consulta, auditoría o procedimientos legales.' },
];

export const salaTypes = [
  { 
    name: 'Salas Penales', 
    title: 'Salas Penales',
    icon: '⚖️',
    description: 'Equipamiento de alta redundancia diseñado para juicios orales penales, donde la captura perfecta de audio y video es obligatoria legalmente.',
    specs: ['4+ Cámaras PTZ 4K', 'Micrófonos de Cuello de Ganso', 'Indexación MASOD®', 'Grabación Redundante', 'Pantallas para Evidencia']
  },
  { 
    name: 'Salas Civiles', 
    title: 'Salas Civiles / Familiares',
    icon: '📋',
    description: 'Espacios optimizados para la resolución de conflictos civiles, priorizando la claridad vocal y la fácil presentación de documentos probatorios.',
    specs: ['2-3 Cámaras HD', 'Micrófonos Omnidireccionales', 'Monitor Testigo', 'Sistema de Grabación Básico']
  },
  { 
    name: 'Laborales', 
    title: 'Salas Laborales',
    icon: '👷',
    description: 'Sistemas ágiles y robustos para juntas de conciliación, con herramientas rápidas para la generación de actas.',
    specs: ['Audio Multicanal', 'Generación de Actas Rápidas', 'Cámara Panorámica', 'Grabación Cloud/Local']
  },
  { 
    name: 'Testigos Protegidos', 
    title: 'Testigos Protegidos',
    icon: '🛡️',
    description: 'Módulos altamente seguros con ofuscación en tiempo real. Permite la declaración sin comprometer la identidad visual ni vocal.',
    specs: ['Distorsión de Voz DSP', 'Ofuscación de Rostro en Tiempo Real', 'Conexión Cifrada a Sala Principal', 'Sistema Aislado']
  },
  { 
    name: 'Entrevistas a Menores', 
    title: 'Entrevistas a Menores',
    icon: '👶',
    description: 'Cámaras Gesell de circuito cerrado invisibles para el menor, con comunicación bidireccional por auricular para psicólogos.',
    specs: ['Cámaras Domo Ocultas', 'Audio Ambiental de Alta Sensibilidad', 'Monitoreo Adyacente', 'Grabación Continua']
  },
  { 
    name: 'Videoconferencia', 
    title: 'Nodos de Videoconferencia',
    icon: '📺',
    description: 'Integración transparente con Microsoft Teams, Zoom o SIP para audiencias remotas e híbridas con validez legal.',
    specs: ['Integración SIP/H.323', 'Cancelación de Eco Acústico (AEC)', 'Video Dual-Stream', 'Enrutamiento MASOD®']
  }
];

export const benefits = [
  { 
    title: 'Cero Margen de Error', 
    description: 'Eliminación del error humano en actas mediante registro automatizado y redundancia física.',
    highlight: '-99%',
    highlightLabel: 'ERRORES DE CAPTURA',
    iconType: 'shield'
  },
  { 
    title: 'Trazabilidad Total', 
    description: 'Cada evento de la audiencia queda estampado con tiempo, hash criptográfico y usuario responsable.',
    highlight: 'AES-256',
    highlightLabel: 'ENCRIPTACIÓN MILITAR',
    iconType: 'lock'
  },
  { 
    title: 'Búsqueda Forense', 
    description: 'Encuentra el segundo exacto de una intervención fiscal o de un testigo en segundos, no en horas.',
    highlight: 'x10',
    highlightLabel: 'VELOCIDAD DE CONSULTA',
    iconType: 'search'
  },
  { 
    title: 'Agnóstico a Marcas', 
    description: 'Se integra con hardware legado de Sony, Panasonic o Bosch, protegiendo tu inversión anterior.',
    highlight: '100%',
    highlightLabel: 'COMPATIBILIDAD API',
    iconType: 'link'
  },
  { 
    title: 'Despliegue Masivo', 
    description: 'Arquitectura escalable. Desde una sala única hasta 300 salas centralizadas en la nube estatal.',
    highlight: 'N+',
    highlightLabel: 'ESCALABILIDAD ILIMITADA',
    iconType: 'server'
  },
  { 
    title: 'Soporte Proactivo', 
    description: 'Monitoreo de estado de equipos (Health Check) en vivo para reemplazar piezas antes de que fallen.',
    highlight: '99.9%',
    highlightLabel: 'UPTIME GARANTIZADO',
    iconType: 'uptime'
  }
];

// ─── PAGE: Nosotros ───

export const timeline = [
  { year: 2010, title: 'Fundación', description: 'BLEGAM CORP nace en la Ciudad de México como empresa integradora de tecnología.' },
  { year: 2012, title: 'Primera Sala Oral', description: 'Implementación de la primera sala de juicios orales digitales en el Estado de México.' },
  { year: 2014, title: 'Software MASOD®', description: 'Desarrollo y lanzamiento de MASOD®, nuestro sistema propietario de gestión de audiencias.' },
  { year: 2016, title: 'Expansión Nacional', description: 'Presencia en 4 estados con más de 50 salas implementadas para el Poder Judicial.' },
  { year: 2018, title: 'División Broadcast', description: 'Integración de soluciones audiovisuales para televisoras y eventos de gran escala.' },
  { year: 2020, title: 'Transformación Digital', description: 'Implementación de videoconferencia judicial y audiencias remotas durante la pandemia.' },
  { year: 2022, title: '150+ Salas', description: 'Hito de 150 salas implementadas. Certificación ISO 9001 y alianzas con fabricantes globales.' },
  { year: 2024, title: '200+ Salas', description: 'Más de 200 salas activas en 6 estados. Expansión a ciberseguridad y Smart Cities.' },
];

export const coreValues = [
  { title: 'Precisión Técnica', description: 'Cada instalación es ejecutada con estándares de ingeniería de grado militar.', icon: 'crosshair' },
  { title: 'Innovación Constante', description: 'Investigamos y adoptamos tecnología de vanguardia antes que el mercado.', icon: 'cpu' },
  { title: 'Compromiso Institucional', description: 'Entendemos la responsabilidad de servir a la justicia y la seguridad pública.', icon: 'shield' },
  { title: 'Integridad Operativa', description: 'Transparencia total en cada proceso, desde cotización hasta entrega final.', icon: 'lock' },
  { title: 'Soporte Continuo', description: 'No desaparecemos después de la instalación. Monitoreo y mantenimiento 24/7.', icon: 'headphones' },
  { title: 'Escalabilidad', description: 'Arquitecturas que crecen con tu institución, desde 1 hasta 300+ salas.', icon: 'layers' },
];

export const teamCapabilities = [
  { area: 'Ingeniería Audiovisual', specialists: 12, projects: 200, status: 'ACTIVE', color: '#12D4C9' },
  { area: 'Desarrollo de Software', specialists: 8, projects: 15, status: 'ACTIVE', color: '#10b981' },
  { area: 'Ciberseguridad', specialists: 5, projects: 30, status: 'ACTIVE', color: '#f59e0b' },
  { area: 'Redes & Cableado', specialists: 10, projects: 180, status: 'ACTIVE', color: '#8b5cf6' },
  { area: 'Soporte & NOC', specialists: 6, projects: 50, status: 'STANDBY', color: '#ef4444' },
];

export const certifications = [
  { name: 'ISO 9001:2015', type: 'Calidad' },
  { name: 'Empresa 100% Mexicana', type: 'Origen' },
  { name: 'Padrón de Proveedores Confiables', type: 'Gobierno' },
  { name: 'Certificación Bosch', type: 'Partner' },
  { name: 'Partner Panasonic', type: 'Partner' },
  { name: 'Integrador Autorizado Shure', type: 'Partner' },
];

// ─── PAGE: Servicios ───

export const methodology = [
  { phase: 1, title: 'Diagnóstico', description: 'Levantamiento arquitectónico, análisis de necesidades y evaluación de infraestructura existente.', icon: 'search' },
  { phase: 2, title: 'Diseño', description: 'Ingeniería de detalle, planos ejecutivos y selección de equipamiento óptimo.', icon: 'pencil' },
  { phase: 3, title: 'Implementación', description: 'Instalación física, cableado estructurado, montaje de equipos y configuración.', icon: 'wrench' },
  { phase: 4, title: 'Testing', description: 'Pruebas integrales de audio, video, red y software. Certificación de rendimiento.', icon: 'check' },
  { phase: 5, title: 'Soporte', description: 'Capacitación al usuario, mantenimiento preventivo y monitoreo remoto permanente.', icon: 'headphones' },
];

export const techStack = [
  { name: 'Bosch', category: 'Audio', description: 'Sistemas de conferencia y PA profesional', logo: '/logos/bosch.png', color: '#EA0016' },
  { name: 'Shure', category: 'Audio', description: 'Microfonía inalámbrica y de cuello de ganso', logo: '/logos/shure.png', color: '#1B365D' },
  { name: 'Panasonic', category: 'Video', description: 'Cámaras PTZ y sistemas de proyección', logo: '/logos/panasonic.png', color: '#0068B5' },
  { name: 'Sony', category: 'Video', description: 'Cámaras broadcast y monitores profesionales', logo: '/logos/sony.png', color: '#000000' },
  { name: 'Cisco', category: 'Redes', description: 'Switches y routers de misión crítica', logo: '/logos/cisco.png', color: '#049FD9' },
  { name: 'Hikvision', category: 'Seguridad', description: 'CCTV, NVRs y analítica de video', logo: '/logos/hikvision.png', color: '#ED1C24' },
  { name: 'Crestron', category: 'Control', description: 'Automatización y control de salas', logo: '/logos/crestron.png', color: '#000000' },
  { name: 'Extron', category: 'AV', description: 'Distribución y procesamiento de señal', logo: '/logos/extron.png', color: '#005BAA' },
  { name: 'MASOD®', category: 'Software', description: 'Plataforma propia de gestión judicial', logo: '/logos/masod.png', color: '#12D4C9' },
  { name: 'SICEM', category: 'Software', description: 'Sistema de monitoreo y control', logo: '/logos/sicem.png', color: '#10b981' },
  { name: 'Synology', category: 'Storage', description: 'NAS y soluciones de almacenamiento', logo: '/logos/synology.png', color: '#000000' },
  { name: 'APC', category: 'Energía', description: 'UPS y protección eléctrica', logo: '/logos/apc.png', color: '#FF0000' },
];

export const servicesDetailed = [
  {
    id: 'justicia-digital',
    title: 'Justicia Digital',
    subtitle: 'Ecosistemas para la justicia del siglo XXI',
    description: 'Diseñamos, implementamos y mantenemos salas de audiencia oral completamente digitales. Desde el cableado estructurado hasta el software de gestión MASOD®, cada elemento está pensado para garantizar la integridad del proceso judicial.',
    capabilities: ['Salas de Juicios Orales', 'Cámaras Gesell', 'Nodos de Videoconferencia', 'Software MASOD®', 'Servidores de Grabación', 'Sistemas de Firma Digital'],
    metrics: { projects: '200+', uptime: '99.9%', states: '6' },
  },
  {
    id: 'seguridad-integral',
    title: 'Seguridad Integral',
    subtitle: 'Protección inteligente para entornos críticos',
    description: 'Implementamos soluciones de seguridad física y lógica que van desde CCTV con analítica inteligente hasta redes cifradas de comunicación. Nuestros sistemas protegen instalaciones gubernamentales, industriales y comerciales.',
    capabilities: ['CCTV Analítico', 'Control de Acceso', 'Detección de Intrusos', 'Comunicaciones Cifradas', 'Monitoreo 24/7', 'Ciberseguridad Perimetral'],
    metrics: { cameras: '5000+', sites: '50+', response: '<2min' },
  },
  {
    id: 'ingenieria-software',
    title: 'Ingeniería & Software',
    subtitle: 'Soluciones a la medida de tu operación',
    description: 'Desarrollamos software especializado y diseñamos infraestructura de red para digitalizar y automatizar procesos críticos. Desde el cableado hasta la aplicación final.',
    capabilities: ['Software a Medida', 'Cableado Estructurado', 'Data Centers', 'Automatización', 'Sistema SICEM', 'APIs e Integraciones'],
    metrics: { apps: '15+', uptime: '99.5%', users: '10K+' },
  },
  {
    id: 'broadcast',
    title: 'Broadcast & Producción',
    subtitle: 'Tecnología profesional para medios',
    description: 'Equipamos estudios de televisión, unidades móviles y eventos con tecnología de producción audiovisual de última generación. Trabajamos con las principales televisoras de México.',
    capabilities: ['Unidades Móviles', 'Estudios de TV', 'Audio Profesional', 'Graficación en Vivo', 'Transmisión Satelital', 'Sets Virtuales'],
    metrics: { events: '100+', channels: '5', live: '24/7' },
  },
];

// ─── PAGE: Proyectos ───

export const projectsDetailed = [
  {
    title: 'Salas de Oralidad — CDMX',
    category: 'Justicia Digital',
    description: 'Implementación de 45 salas de juicios orales con sistema MASOD® integrado, cámaras PTZ 4K, microfonía Shure y servidores de grabación redundante.',
    image: '/projects/instalacion-salas-1.jpg',
    images: ['/projects/instalacion-salas-1.jpg', '/projects/instalacion-salas-2.jpg', '/projects/instalacion-salas-3.jpg', '/projects/instalacion-salas-4.jpg', '/projects/instalacion-salas-5.jpg'],
    specs: ['45 Salas', '180+ Cámaras PTZ', 'MASOD® Centralizado', 'Redundancia Total'],
    year: 2022,
  },
  {
    title: 'Televisa — Estudio Deportivo',
    category: 'Broadcast',
    description: 'Instalación de equipos profesionales de análisis deportivo para uno de los canales más importantes de televisión en México.',
    image: 'https://static.wixstatic.com/media/45119e_f9bf515511d34a71abe789e9bd72bd8a~mv2.jpg/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_f9bf515511d34a71abe789e9bd72bd8a~mv2.jpg',
    images: ['https://static.wixstatic.com/media/45119e_f9bf515511d34a71abe789e9bd72bd8a~mv2.jpg/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_f9bf515511d34a71abe789e9bd72bd8a~mv2.jpg'],
    specs: ['Audio Profesional Shure', 'Graficación en Vivo', '4K HDR', 'Transmisión Satelital'],
    year: 2023,
  },
  {
    title: 'Juguetón — Producción AV',
    category: 'Broadcast',
    description: 'Producción audiovisual integral para el evento infantil más grande de México, incluyendo multicámara, streaming en vivo y audio PA.',
    image: 'https://static.wixstatic.com/media/45119e_7ec832f7af534fd3ba6852ff32bf3501~mv2.jpg/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_7ec832f7af534fd3ba6852ff32bf3501~mv2.jpg',
    images: ['https://static.wixstatic.com/media/45119e_7ec832f7af534fd3ba6852ff32bf3501~mv2.jpg/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_7ec832f7af534fd3ba6852ff32bf3501~mv2.jpg'],
    specs: ['Multicámara', 'Audio PA', 'Streaming en Vivo', 'Iluminación LED'],
    year: 2023,
  },
  {
    title: 'Tren Suburbano — CCTV',
    category: 'Seguridad',
    description: 'Sistema integral de videovigilancia y seguridad de datos para la infraestructura del Tren Suburbano del área metropolitana.',
    image: 'https://static.wixstatic.com/media/45119e_6147714d162c4b8da1015528134fd680~mv2.webp/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_6147714d162c4b8da1015528134fd680~mv2.webp',
    images: ['https://static.wixstatic.com/media/45119e_6147714d162c4b8da1015528134fd680~mv2.webp/v1/fill/w_565,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/45119e_6147714d162c4b8da1015528134fd680~mv2.webp'],
    specs: ['200+ Cámaras', 'NVR Redundante', 'Analítica AI', 'Monitoreo 24/7'],
    year: 2022,
  },
  {
    title: 'Salas de Oralidad — Puebla',
    category: 'Justicia Digital',
    description: 'Modernización de 30 salas de audiencia oral con videoconferencia HD para audiencias remotas y sistema MASOD® centralizado.',
    image: '/projects/mantto-puebla24-1.jpg',
    images: ['/projects/mantto-puebla24-1.jpg', '/projects/mantto-puebla24-2.jpg', '/projects/mantto-puebla24-3.jpg'],
    specs: ['30 Salas', 'Videoconferencia', 'MASOD®', 'Cámaras Gesell'],
    year: 2021,
  },
  {
    title: 'SSC CDMX — Videovigilancia',
    category: 'Seguridad',
    description: 'Red de videovigilancia con analítica inteligente y reconocimiento facial para edificios gubernamentales de alta seguridad.',
    image: '/projects/instalacion-salas-3.jpg',
    images: ['/projects/instalacion-salas-3.jpg', '/projects/instalacion-salas-4.jpg', '/projects/instalacion-salas-5.jpg'],
    specs: ['500+ Cámaras', 'Analítica Facial', 'Centro de Monitoreo', 'Cifrado End-to-End'],
    year: 2023,
  },
  {
    title: 'Nuevas Salas — Atlixco, Puebla',
    category: 'Justicia Digital',
    description: 'Diseño, instalación y puesta en marcha de 3 salas de audiencia oral de nueva generación con equipamiento completo.',
    image: '/projects/instalacion-salas-2.jpg',
    images: ['/projects/instalacion-salas-1.jpg', '/projects/instalacion-salas-2.jpg', '/projects/instalacion-salas-3.jpg', '/projects/instalacion-salas-4.jpg', '/projects/instalacion-salas-5.jpg'],
    specs: ['3 Salas Nuevas', 'Audio DSP', 'Cámaras PTZ', 'MASOD®'],
    year: 2025,
  },
  {
    title: 'Mantenimiento — Pachuca, Hidalgo',
    category: 'Mantenimiento',
    description: 'Servicio de mantenimiento preventivo y correctivo en salas de oralidad del Poder Judicial del Estado de Hidalgo.',
    image: '/projects/mantto-pachuca-1.jpg',
    images: ['/projects/mantto-pachuca-1.jpg', '/projects/mantto-pachuca-2.jpg', '/projects/mantto-pachuca-3.jpg', '/projects/mantto-pachuca-4.jpg', '/projects/mantto-pachuca-5.jpg'],
    specs: ['Mantenimiento Preventivo', 'Calibración Audio', 'Limpieza Óptica', 'Firmware Update'],
    year: 2024,
  },
  {
    title: 'Mantenimiento — Puebla Centro',
    category: 'Mantenimiento',
    description: 'Mantenimiento integral en sedes de Puebla Centro, Tehuacán, Tepeaca y Cd. Serdán con servicio en 16+ salas simultáneas.',
    image: '/projects/mantto-puebla24-1.jpg',
    images: ['/projects/mantto-puebla24-1.jpg', '/projects/mantto-puebla24-2.jpg', '/projects/mantto-puebla24-3.jpg', '/projects/mantto-puebla24-4.jpg', '/projects/mantto-puebla24-5.jpg'],
    specs: ['16+ Salas', 'Puebla Centro', 'Tehuacán', 'Cd. Serdán'],
    year: 2024,
  },
  {
    title: 'Mantenimiento — San Andrés Cholula',
    category: 'Mantenimiento',
    description: 'Actualización de firmware MASOD®, recalibración de audio/video y diagnóstico integral en sedes de la región Puebla.',
    image: '/projects/mantto-puebla26-1.jpg',
    images: ['/projects/mantto-puebla26-1.jpg', '/projects/mantto-puebla26-2.jpg', '/projects/mantto-puebla26-3.jpg', '/projects/mantto-puebla26-4.jpg', '/projects/mantto-puebla26-5.jpg'],
    specs: ['MASOD® Update', 'Recalibración', 'Diagnóstico Integral', 'Soporte Continuo'],
    year: 2026,
  },
];

export const testimonials = [
  { name: 'Lic. Roberto Méndez', role: 'Director de TI, Poder Judicial CDMX', quote: 'BLEGAM transformó completamente nuestra infraestructura judicial. La integración de MASOD® nos permitió reducir los tiempos de consulta de audiencias en un 90%.', rating: 5 },
  { name: 'Ing. Patricia Solís', role: 'Coordinadora de Proyectos, Televisa', quote: 'El profesionalismo y la calidad técnica del equipo de BLEGAM es excepcional. Cumplieron con todos los requerimientos de broadcast en tiempo récord.', rating: 5 },
  { name: 'Mtro. Carlos Fuentes', role: 'Magistrado, Tribunal Superior Puebla', quote: 'La implementación fue impecable. Las salas operan 24/7 sin interrupciones y el soporte de BLEGAM es inmediato ante cualquier eventualidad.', rating: 5 },
];

export const mexicoPresence = [
  { state: 'CDMX', projects: 85, coords: { x: 48, y: 62 } },
  { state: 'Estado de México', projects: 40, coords: { x: 46, y: 60 } },
  { state: 'Puebla', projects: 30, coords: { x: 52, y: 63 } },
  { state: 'Querétaro', projects: 15, coords: { x: 46, y: 55 } },
  { state: 'Jalisco', projects: 20, coords: { x: 35, y: 56 } },
  { state: 'Nuevo León', projects: 10, coords: { x: 50, y: 42 } },
];
