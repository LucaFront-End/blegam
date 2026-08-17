import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { brand } from '../data/content';
import { fetchAllLandings } from '../lib/landingService';
import { submitLeadToWix } from '../lib/leadService';
import './Contact.css';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const queryCiudad = searchParams.get('ciudad');
  const queryType = searchParams.get('type');
  const queryOrigen = searchParams.get('origen');

  const [activeLanding, setActiveLanding] = useState(null);

  const [form, setForm] = useState({ name:'', email:'', company:'', phone:'', service:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const origen = queryOrigen || queryType;
    let initialService = '';
    let initialMessage = '';

    if (origen === 'salas') {
      initialService = 'Justicia Digital / Salas de Oralidad';
      initialMessage = 'Hola, me interesa una cotización para proyecto de Salas de Juicios Orales.';
    } else if (origen === 'control-accesos' || origen === 'accesos') {
      initialService = 'Seguridad Integral / Control de Accesos';
      initialMessage = 'Hola, me interesa una cotización para sistema de Control de Accesos.';
    } else if (origen === 'servicios') {
      initialService = 'Ingeniería y Software';
      initialMessage = 'Hola, me interesa una consulta sobre servicios de ingeniería e infraestructura IT.';
    }

    if (queryCiudad) {
      fetchAllLandings().then(list => {
        const found = list.find(l => l.ciudad === queryCiudad && (l.type === queryType || l.type === queryOrigen));
        if (found) {
          setActiveLanding(found);
          setForm(prev => ({
            ...prev,
            service: found.type === 'salas' ? 'Justicia Digital / Salas de Oralidad' : 'Seguridad Integral / Control de Accesos',
            message: `Hola, me interesa una cotización para la zona de ${found.ciudad}, ${found.estado}.`
          }));
        }
      });
    } else if (initialService) {
      setForm(prev => ({
        ...prev,
        service: initialService,
        message: prev.message || initialMessage
      }));
    }
  }, [queryCiudad, queryType, queryOrigen]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const origenRef = queryOrigen || queryType || 'Directo';

    // 1. Send data to Wix CMS Collection (Cotizacionformulario)
    const wixPromise = submitLeadToWix({
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      service: form.service,
      message: form.message,
      origin: `Página Contacto [${origenRef}]`
    });

    // 2. Send email notification via FormSubmit
    const body = new FormData();
    body.append('Nombre', form.name);
    body.append('Email', form.email);
    body.append('Empresa', form.company);
    body.append('Teléfono', form.phone);
    body.append('Servicio de interés', form.service);
    body.append('Origen / Referencia', origenRef);
    body.append('Mensaje', form.message);
    
    // FormSubmit config - Clean White Template & Spanish Language
    body.append('_subject', `Nueva solicitud de cotización [Origen: ${origenRef.toUpperCase()}] desde blegam.com`);
    body.append('_captcha', 'false');
    body.append('_template', 'box');
    body.append('_language', 'es');
    body.append('_autoresponse', 'Gracias por contactar a Blegam Corp. Hemos recibido tu solicitud y un ejecutivo especializado te contactará a la brevedad.');

    const formSubmitPromise = fetch('https://formsubmit.co/ajax/info@blegam.com.mx', {
      method: 'POST',
      body,
    });

    try {
      await Promise.allSettled([wixPromise, formSubmitPromise]);
      setSubmitted(true);
    } catch {
      alert('Hubo un error al enviar. Por favor intenta de nuevo.');
    } finally {
      setSending(false);
    }
  };

  const currentOrigen = queryOrigen || queryType;

  return (
    <main className="page-contact">
      <Helmet>
        <title>
          {activeLanding 
            ? `${activeLanding.seoTitle} | Contacto` 
            : currentOrigen === 'salas'
            ? 'Contacto | Cotizar Salas de Juicios Orales | Blegam Corp'
            : currentOrigen === 'control-accesos' || currentOrigen === 'accesos'
            ? 'Contacto | Cotizar Control de Accesos | Blegam Corp'
            : 'Contacto Blegam Corp | Cotiza tu Proyecto de IT'}
        </title>
        <meta 
          name="description" 
          content={activeLanding 
            ? activeLanding.seoDescription 
            : 'Solicita una cotización con Blegam Corp para instalación de Salas de Juicios Orales, infraestructura tecnológica e implementación de IT para empresas.'} 
        />
      </Helmet>

      {/* Hero Header */}
      <section className="contact-hero text-center">
        <div className="contact-hero-bg" />
        <div className="container">
          <span className="badge badge-accent mb-2">
            <Sparkles size={14} className="mr-1 inline-block" />
            {activeLanding 
              ? `Zona ${activeLanding.ciudad}` 
              : currentOrigen === 'salas'
              ? 'Justicia Digital & Salas de Oralidad'
              : currentOrigen === 'control-accesos' || currentOrigen === 'accesos'
              ? 'Control de Accesos & Seguridad'
              : 'Atención Ejecutiva & Soporte Directo'}
          </span>
          <h1 className="section-title">
            Háblanos de tu <span className="accent-gradient">Proyecto {activeLanding ? `en ${activeLanding.ciudad}` : currentOrigen ? `de ${currentOrigen.replace('-', ' ')}` : ''}</span>
          </h1>
          <p className="section-subtitle text-center">
            {activeLanding 
              ? `Implementación a medida y soporte en la zona de ${activeLanding.ciudad}, ${activeLanding.estado}.` 
              : currentOrigen === 'salas'
              ? "Cotización e ingeniería especializada para Salas de Juicios Orales y recintos judiciales en todo México."
              : currentOrigen === 'control-accesos' || currentOrigen === 'accesos'
              ? "Diseño e implementación de sistemas de control de acceso, torniquetes, biometría y automatización."
              : "Nuestro equipo de consultores e ingenieros analizará tus requerimientos para presentarte una propuesta a medida."}
          </p>
        </div>
      </section>

      {/* Form & Info Side-by-Side Section */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Form Card */}
            <div className="contact-form-wrap contact-card-box">
              <div className="card-box-header">
                <Send size={20} className="text-accent mr-2" />
                <h3 className="card-box-title">Formulario de Cotización Directa</h3>
              </div>

              {submitted ? (
                <div className="contact-success">
                  <div className="success-icon">✓</div>
                  <h3>¡Solicitud Recibida con Éxito!</h3>
                  <p>Un ejecutivo especializado analizará tus datos y te contactará en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>NOMBRE COMPLETO *</label>
                      <input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Ej: Ing. Carlos Mendoza" />
                    </div>
                    <div className="form-group">
                      <label>EMAIL CORPORATIVO *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="carlos@empresa.com" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>EMPRESA / INSTITUCIÓN</label>
                      <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Nombre de tu empresa u organismo" />
                    </div>
                    <div className="form-group">
                      <label>TELÉFONO DE CONTACTO</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+52 55 1234 5678" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>SERVICIO DE INTERÉS *</label>
                    <select name="service" value={form.service} onChange={handleChange} required>
                      <option value="">Seleccionar servicio...</option>
                      <option value="Justicia Digital / Salas de Oralidad">Justicia Digital / Salas de Oralidad</option>
                      <option value="Seguridad Integral / Control de Accesos">Seguridad Integral / Control de Accesos</option>
                      <option value="Ingeniería y Software">Ingeniería y Software</option>
                      <option value="Broadcast">Broadcast</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>MENSAJE / DETALLES DEL PROYECTO</label>
                    <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Detalla el número de accesos, salas, ubicación u otras especificaciones clave..." />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn w-full justify-center py-3 text-base" disabled={sending}>
                    {sending ? 'Enviando Solicitud...' : 'Enviar Solicitud de Cotización →'}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Info Card */}
            <div className="contact-info contact-card-box info-panel-side">
              <div>
                <div className="card-box-header">
                  <Phone size={20} className="text-accent mr-2" />
                  <h3 className="card-box-title">Información Directa & Atención</h3>
                </div>

                <div className="live-status-pill mb-4 font-mono">
                  <span className="pulse-dot mr-2" />
                  EN LÍNEA — RESPUESTA EN &lt; 15 MINUTOS
                </div>

                <div className="info-items">
                  <a href={`tel:${brand.contact.phone.replace(/\s/g,'')}`} className="info-item">
                    <div className="info-icon-box">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="info-label font-mono">TELÉFONO CORPORATIVO</span>
                      <span className="info-value font-mono">{brand.contact.phone}</span>
                    </div>
                  </a>

                  <a href={activeLanding ? activeLanding.whatsappUrl : brand.contact.whatsappLink} className="info-item wa-item" target="_blank" rel="noopener noreferrer">
                    <div className="info-icon-box wa-icon-bg">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <span className="info-label font-mono">WHATSAPP DIRECTO</span>
                      <span className="info-value font-mono text-emerald-400 font-bold">{brand.contact.whatsapp}</span>
                    </div>
                  </a>

                  <a href={`mailto:${brand.contact.email}`} className="info-item">
                    <div className="info-icon-box">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="info-label font-mono">EMAIL CORPORATIVO</span>
                      <span className="info-value font-mono">{brand.contact.email}</span>
                    </div>
                  </a>

                  <a href={brand.contact.mapLink} className="info-item" target="_blank" rel="noopener noreferrer">
                    <div className="info-icon-box">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="info-label font-mono">OFICINAS CENTRALES</span>
                      <span className="info-value">{brand.contact.address}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* SLA Guarantees Box at bottom of right card */}
              <div className="contact-sla-guarantees">
                <span className="sla-box-title font-mono">COMPROMISOS BLEGAM:</span>
                <div className="sla-items-list">
                  <div className="sla-item">
                    <CheckCircle2 size={15} className="text-accent mr-2 flex-shrink-0" />
                    <span>Cotizaciones ejecutivas en Pesos Mexicanos (MXN).</span>
                  </div>
                  <div className="sla-item">
                    <CheckCircle2 size={15} className="text-accent mr-2 flex-shrink-0" />
                    <span>Levantamiento técnico sin costo en todo México.</span>
                  </div>
                  <div className="sla-item">
                    <CheckCircle2 size={15} className="text-accent mr-2 flex-shrink-0" />
                    <span>Pólizas de soporte y mantenimiento SLA 24/7.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
