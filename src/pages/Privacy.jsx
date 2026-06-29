import { Helmet } from 'react-helmet-async';
import { brand } from '../data/content';
import { Shield, Lock, Eye, CheckCircle, FileText, Smartphone, Mail, Globe } from 'lucide-react';
import './Privacy.css';

export default function Privacy() {
  const sections = [
    { id: 'responsable', title: '1. Responsable del Tratamiento', icon: Shield },
    { id: 'datos', title: '2. Datos Personales que Recabamos', icon: FileText },
    { id: 'finalidades', title: '3. Finalidades del Tratamiento', icon: CheckCircle },
    { id: 'transferencias', title: '4. Transferencia de Datos', icon: Globe },
    { id: 'cookies', title: '5. Cookies y Tecnologías de Rastreo', icon: Eye },
    { id: 'derechos-arco', title: '6. Derechos ARCO y Revocación', icon: Lock },
    { id: 'seguridad-conservacion', title: '7. Seguridad y Conservación', icon: Shield },
    { id: 'modificaciones-contacto', title: '8. Modificaciones y Contacto', icon: Smartphone }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="page-privacy">
      <Helmet>
        <title>Aviso de Privacidad Integral | Blegam Corp</title>
        <meta name="description" content="Consulta el Aviso de Privacidad Integral de Blegam Corp. Conoce cómo recopilamos, utilizamos, protegemos y tratamos tus datos personales de acuerdo con la LFPDPPP." />
      </Helmet>

      {/* ─── HERO HEADER ─── */}
      <section className="privacy-hero">
        <div className="privacy-hero-bg">
          <div className="privacy-hero-gradient" />
          <div className="privacy-hero-grid" />
          <div className="glow-orb blue" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }} />
        </div>

        <div className="container">
          <span className="section-label">Legal y Transparencia</span>
          <h1 className="privacy-title">Aviso de Privacidad Integral</h1>
          <p className="privacy-subtitle">
            En Blegam Corp protegemos tu información. Conoce nuestras políticas de tratamiento y seguridad de datos personales.
          </p>
          <div className="privacy-meta">
            <span>Última actualización: 29 de junio de 2026</span>
          </div>
        </div>
      </section>

      {/* ─── CONTENT GRID ─── */}
      <section className="privacy-content-section">
        <div className="container privacy-layout">
          
          {/* Sticky Side Navigation */}
          <aside className="privacy-sidebar">
            <div className="privacy-nav-card">
              <h3>Índice del Documento</h3>
              <nav className="privacy-nav-links">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className="privacy-nav-btn"
                    >
                      <Icon size={16} className="nav-btn-icon" />
                      <span>{sec.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Legal Text Panel */}
          <div className="privacy-text-panel">
            
            {/* Section 1 */}
            <article id="responsable" className="privacy-article card-glass">
              <div className="article-header">
                <Shield className="article-icon" size={28} />
                <h2>1. Responsable del Tratamiento</h2>
              </div>
              <p>
                En cumplimiento con lo dispuesto por la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y su Reglamento, <strong>Blegam Corp</strong> (en lo sucesivo "Blegam Corp"), con domicilio en <strong>{brand.contact.address}</strong>, es responsable del tratamiento, uso y protección de los datos personales que recaba de sus clientes, prospectos, proveedores, usuarios del sitio web y cualquier persona que interactúe con nuestros servicios.
              </p>
              <p>
                Al proporcionar sus datos personales a través de nuestro sitio web, formularios de contacto, correo electrónico, teléfono o cualquier otro medio, usted acepta los términos del presente Aviso de Privacidad.
              </p>
            </article>

            {/* Section 2 */}
            <article id="datos" className="privacy-article card-glass">
              <div className="article-header">
                <FileText className="article-icon" size={28} />
                <h2>2. Datos Personales que Recabamos</h2>
              </div>
              <p>
                Dependiendo del servicio solicitado, podremos recabar la siguiente información de manera directa o a través de nuestros canales digitales:
              </p>
              <ul className="legal-list">
                <li>Nombre completo.</li>
                <li>Empresa u organización.</li>
                <li>Cargo o puesto.</li>
                <li>Correo electrónico corporativo o personal.</li>
                <li>Número telefónico (fijo y/o móvil).</li>
                <li>Ciudad, estado y código postal.</li>
                <li>Dirección física o de entrega.</li>
                <li>Información fiscal para facturación (RFC, Régimen Fiscal, Domicilio Fiscal).</li>
                <li>Información relacionada con especificaciones de proyectos tecnológicos.</li>
                <li>Información técnica necesaria para la elaboración de propuestas comerciales y cotizaciones.</li>
                <li>Cualquier otra información proporcionada voluntariamente por el titular de los datos.</li>
              </ul>
              <div className="legal-alert alert-info">
                <strong>Nota importante:</strong> No recabamos datos personales sensibles salvo que sea estrictamente necesario para la contratación o entrega de un servicio específico y exista el consentimiento expreso y por escrito del titular.
              </div>
            </article>

            {/* Section 3 */}
            <article id="finalidades" className="privacy-article card-glass">
              <div className="article-header">
                <CheckCircle className="article-icon" size={28} />
                <h2>3. Finalidades del Tratamiento de los Datos</h2>
              </div>
              
              <h3>Finalidades Primarias</h3>
              <p>
                Los datos personales serán utilizados indispensablemente para las siguientes finalidades que dan origen y son necesarias para la relación jurídica entre usted y Blegam Corp:
              </p>
              <ul className="legal-list">
                <li>Atender y dar seguimiento a sus solicitudes de información, cotizaciones y presupuestos.</li>
                <li>Elaborar propuestas comerciales y cotizaciones personalizadas de proyectos.</li>
                <li>Proporcionar asesoría técnica, soporte e ingeniería de preventa.</li>
                <li>Gestionar y formalizar la contratación de servicios de integración tecnológica.</li>
                <li>Desarrollar, programar y ejecutar proyectos de implementación tecnológica contratados.</li>
                <li>Instalación y configuración física y lógica de Salas de Juicios Orales y tecnologías de misión crítica.</li>
                <li>Implementación de infraestructura de TI para empresas, corporativos e instituciones públicas.</li>
                <li>Emitir facturas fiscales digitales (CFDI) y gestionar los procesos internos de cobranza y pagos.</li>
                <li>Dar seguimiento posventa a proyectos entregados y gestionar las garantías correspondientes.</li>
                <li>Proporcionar soporte técnico remoto o en sitio.</li>
                <li>Cumplir con obligaciones legales, fiscales, regulatorias y contractuales aplicables.</li>
              </ul>

              <h3>Finalidades Secundarias</h3>
              <p>
                De manera adicional, podremos utilizar su información personal para las siguientes finalidades secundarias que no son estrictamente necesarias, pero nos permiten brindarle una mejor atención:
              </p>
              <ul className="legal-list">
                <li>Envío de boletines informativos, actualizaciones tecnológicas y noticias relevantes de Blegam Corp.</li>
                <li>Invitaciones a webinars, eventos corporativos, demostraciones en vivo o exposiciones industriales.</li>
                <li>Envío de información y presentaciones sobre nuevos servicios, herramientas o productos disponibles.</li>
                <li>Realización de encuestas de satisfacción para mejorar la calidad de nuestros servicios y soporte.</li>
                <li>Estadísticas comerciales y análisis internos de mercado.</li>
                <li>Campañas de marketing, remarketing digital y publicidad personalizada en medios digitales.</li>
              </ul>
              <p className="legal-note">
                En caso de que no desee que sus datos personales sean tratados para estas finalidades secundarias, podrá manifestarlo en cualquier momento mediante un correo electrónico a la dirección <strong>privacidad@blegamcorp.com</strong>.
              </p>
            </article>

            {/* Section 4 */}
            <article id="transferencias" className="privacy-article card-glass">
              <div className="article-header">
                <Globe className="article-icon" size={28} />
                <h2>4. Transferencia de Datos Personales</h2>
              </div>
              <p>
                Blegam Corp <strong>no vende, renta ni comercializa</strong> su información personal bajo ninguna circunstancia.
              </p>
              <p>
                Únicamente compartiremos sus datos con terceros aliados y proveedores tecnológicos cuando sea estrictamente necesario para cumplir con el servicio contratado, o bien cuando lo exijan las autoridades competentes de acuerdo con la legislación vigente. Las transferencias posibles incluyen:
              </p>
              <ul className="legal-list">
                <li><strong>Autoridades competentes:</strong> En los casos legalmente previstos y cuando sea requerido formalmente para el cumplimiento de normativas gubernamentales.</li>
                <li><strong>Proveedores tecnológicos y de servicios especializados:</strong> Socios estratégicos que nos apoyan en el desarrollo de infraestructura, soporte e integraciones de hardware y software bajo estrictos contratos de confidencialidad.</li>
                <li><strong>Empresas de alojamiento web y servidores en la nube:</strong> Proveedores de nube e infraestructura (como Amazon Web Services o Microsoft Azure) encargados del almacenamiento seguro de las bases de datos de la empresa.</li>
                <li><strong>Plataformas de CRM y correos masivos:</strong> Herramientas para la gestión y seguimiento ordenado de la relación con el cliente y comunicaciones oficiales.</li>
                <li><strong>Servicios de facturación autorizados:</strong> Proveedores Autorizados de Certificación (PAC) para el timbrado y emisión de facturación electrónica.</li>
                <li><strong>Empresas subcontratadas asociadas a proyectos específicos:</strong> Solo cuando sea indispensable para la ejecución física o la obra civil en el sitio del proyecto tecnológico.</li>
              </ul>
              <p>
                Todo tercero receptor de datos personales estará obligado por contrato a cumplir con las mismas medidas de confidencialidad, privacidad y seguridad establecidas en este Aviso.
              </p>
            </article>

            {/* Section 5 */}
            <article id="cookies" className="privacy-article card-glass">
              <div className="article-header">
                <Eye className="article-icon" size={28} />
                <h2>5. Uso de Cookies y Tecnologías de Rastreo</h2>
              </div>
              <p>
                Nuestro sitio web utiliza cookies y otras tecnologías de seguimiento analítico y técnico para mejorar la experiencia del usuario, analizar el rendimiento del sitio y optimizar campañas de publicidad.
              </p>
              <p>El sitio web de Blegam Corp puede utilizar:</p>
              <ul className="legal-list">
                <li>Cookies técnicas esenciales (necesarias para el correcto funcionamiento del portal).</li>
                <li>Google Analytics y Google Tag Manager (analítica web para medir el tráfico y uso de secciones).</li>
                <li>Meta Pixel (rastreo de campañas publicitarias en redes sociales).</li>
                <li>Cookies de sesión y de rendimiento.</li>
                <li>Cookies publicitarias para mostrar contenido relevante de forma personalizada.</li>
              </ul>
              <p>Estas tecnologías nos permiten conocer información como:</p>
              <ul className="legal-list">
                <li>Tiempo de navegación dentro del sitio web.</li>
                <li>Páginas y secciones específicas visitadas por el usuario.</li>
                <li>Tipo de dispositivo utilizado para navegar (móvil, tablet, computadora de escritorio).</li>
                <li>Ubicación geográfica aproximada a nivel ciudad/país.</li>
                <li>Fuente de tráfico (búsqueda orgánica, enlaces directos, redes sociales, anuncios).</li>
                <li>Interacciones con formularios o herramientas interactivas del sitio.</li>
              </ul>
              <p>
                Usted puede configurar, deshabilitar o bloquear el uso de cookies en cualquier momento directamente desde los ajustes de privacidad de su navegador de Internet.
              </p>
            </article>

            {/* Section 6 */}
            <article id="derechos-arco" className="privacy-article card-glass">
              <div className="article-header">
                <Lock className="article-icon" size={28} />
                <h2>6. Derechos ARCO y Revocación del Consentimiento</h2>
              </div>
              <p>
                Usted o su representante legal debidamente acreditado tienen el derecho constitucional de acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales, así como de revocar el consentimiento otorgado para su uso.
              </p>
              
              <div className="arco-grid">
                <div className="arco-card">
                  <span>A</span>
                  <h4>Acceso</h4>
                  <p>Conocer qué datos personales tenemos, para qué los utilizamos y las condiciones de su uso.</p>
                </div>
                <div className="arco-card">
                  <span>R</span>
                  <h4>Rectificación</h4>
                  <p>Solicitar la corrección o actualización de su información personal en caso de ser inexacta o incompleta.</p>
                </div>
                <div className="arco-card">
                  <span>C</span>
                  <h4>Cancelación</h4>
                  <p>Solicitar que sus datos personales sean eliminados de nuestros registros y bases de datos cuando no cumplan principios legales.</p>
                </div>
                <div className="arco-card">
                  <span>O</span>
                  <h4>Oposición</h4>
                  <p>Oponerse al uso de sus datos personales para finalidades específicas (como publicidad o mercadotecnia).</p>
                </div>
              </div>

              <h3>Procedimiento para ejercer Derechos ARCO</h3>
              <p>
                Para presentar una solicitud de derechos ARCO o revocar su consentimiento, deberá enviar un correo electrónico formal a la cuenta: <strong>privacidad@blegamcorp.com</strong>.
              </p>
              <p>La solicitud deberá contener la siguiente información y anexos:</p>
              <ul className="legal-list">
                <li>Nombre completo del titular de los datos personales.</li>
                <li>Copia digitalizada de un documento oficial que acredite su identidad (INE, Pasaporte, Cédula Profesional) o, en su caso, carta poder e identificación del representante legal.</li>
                <li>Descripción clara y precisa de los datos personales respecto de los cuales busca ejercer alguno de los derechos ARCO.</li>
                <li>Cualquier otro elemento o documento que facilite la localización de sus datos personales en nuestros sistemas.</li>
                <li>Medio de contacto elegido para recibir la respuesta (correo electrónico por defecto).</li>
              </ul>
              <p>
                El área de Privacidad de Blegam Corp responderá a su solicitud en un plazo máximo de <strong>20 (veinte) días hábiles</strong> contados a partir de la fecha de recepción de la solicitud completa, informándole sobre la procedencia de la misma.
              </p>
            </article>

            {/* Section 7 */}
            <article id="seguridad-conservacion" className="privacy-article card-glass">
              <div className="article-header">
                <Shield className="article-icon" size={28} />
                <h2>7. Medidas de Seguridad y Conservación</h2>
              </div>
              
              <h3>Medidas de Seguridad</h3>
              <p>
                Blegam Corp implementa estrictas medidas de seguridad administrativas, técnicas y físicas diseñadas específicamente para proteger sus datos personales contra cualquier acceso no autorizado, pérdida accidental, alteración de registros, destrucción indebida, uso o divulgación no permitida.
              </p>
              <p>
                Nuestra infraestructura tecnológica de almacenamiento cuenta con cifrado de datos en reposo y en tránsito, cortafuegos perimetrales, controles de acceso por privilegios y auditorías periódicas de sistemas. Nuestro personal y proveedores autorizados están sujetos a estrictas obligaciones de confidencialidad por contrato.
              </p>

              <h3>Conservación de la Información</h3>
              <p>
                Sus datos personales serán conservados únicamente durante el tiempo estrictamente necesario para cumplir con las finalidades descritas en este Aviso de Privacidad, o bien mientras exista una relación comercial, contractual, fiscal o legal vigente con Blegam Corp.
              </p>
              <p>
                Posteriormente, sus datos personales serán eliminados, bloqueados o anonimizados de manera definitiva conforme a las disposiciones establecidas por la legislación aplicable en la materia.
              </p>
            </article>

            {/* Section 8 */}
            <article id="modificaciones-contacto" className="privacy-article card-glass">
              <div className="article-header">
                <Smartphone className="article-icon" size={28} />
                <h2>8. Modificaciones y Datos de Contacto</h2>
              </div>
              
              <h3>Modificaciones al presente Aviso de Privacidad</h3>
              <p>
                Blegam Corp se reserva el derecho de modificar, actualizar o reformular el presente Aviso de Privacidad en cualquier momento. Esto con el fin de cumplir con reformas legales, adecuaciones regulatorias, criterios jurisprudenciales o mejoras en nuestros procesos y políticas operativas.
              </p>
              <p>
                Todas las modificaciones estarán disponibles de manera pública para su consulta en:
              </p>
              <div className="legal-link-block">
                <Globe size={18} />
                <a href="https://www.blegamcorp.com/aviso-de-privacidad" target="_blank" rel="noopener noreferrer">
                  https://www.blegamcorp.com/aviso-de-privacidad
                </a>
              </div>

              <h3>Datos de Contacto de Blegam Corp</h3>
              <p>
                Si tiene cualquier duda, comentario o inquietud respecto a los términos de este Aviso de Privacidad Integral o al tratamiento que damos a sus datos personales, por favor póngase en contacto con nosotros:
              </p>
              
              <div className="contact-grid">
                <div className="contact-info-card">
                  <Mail className="contact-icon" size={20} />
                  <div>
                    <h4>Correo Electrónico</h4>
                    <p>{brand.contact.email}</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <Smartphone className="contact-icon" size={20} />
                  <div>
                    <h4>Teléfono Oficial</h4>
                    <p>{brand.contact.phone}</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <Shield className="contact-icon" size={20} />
                  <div>
                    <h4>Área Responsable</h4>
                    <p>Departamento de Privacidad de Datos</p>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </main>
  );
}
