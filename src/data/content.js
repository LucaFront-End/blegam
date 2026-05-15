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
    { label: 'Servicios', path: '/servicios' },
    { label: 'Salas de Oralidad', path: '/salas-de-oralidad', highlight: true },
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
