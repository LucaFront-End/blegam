import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { brand } from '../data/content';
import { fetchAllLandings } from '../lib/landingService';
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

    const body = new FormData();
    body.append('Nombre', form.name);
    body.append('Email', form.email);
    body.append('Empresa', form.company);
    body.append('Teléfono', form.phone);
    body.append('Servicio de interés', form.service);
    body.append('Origen / Referencia', origenRef);
    body.append('Mensaje', form.message);
    
    // FormSubmit config
    body.append('_subject', `Nueva solicitud de cotización [Origen: ${origenRef.toUpperCase()}] desde blegam.com`);
    body.append('_captcha', 'false');
    body.append('_template', 'table');
    body.append('_autoresponse', 'Gracias por contactar a Blegam Corp. Hemos recibido tu solicitud y un ejecutivo te contactará en las próximas 24 horas.');

    try {
      await fetch('https://formsubmit.co/ajax/info@blegam.com.mx', {
        method: 'POST',
        body,
      });
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
      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="container">
          <span className="section-label">
            {activeLanding 
              ? `Zona ${activeLanding.ciudad}` 
              : currentOrigen === 'salas'
              ? 'Justicia Digital & Salas de Oralidad'
              : currentOrigen === 'control-accesos' || currentOrigen === 'accesos'
              ? 'Control de Accesos & Seguridad'
              : 'Contáctanos'}
          </span>
          <h1 className="section-title">
            Háblanos de tu <span className="accent">Proyecto {activeLanding ? `en ${activeLanding.ciudad}` : currentOrigen ? `de ${currentOrigen.replace('-', ' ')}` : ''}</span>
          </h1>
          <p className="section-description">
            {activeLanding 
              ? `Implementación a medida y soporte en la zona de ${activeLanding.ciudad}, ${activeLanding.estado}.` 
              : currentOrigen === 'salas'
              ? "Cotización e ingeniería especializada para Salas de Juicios Orales y recintos judiciales en todo México."
              : currentOrigen === 'control-accesos' || currentOrigen === 'accesos'
              ? "Diseño e implementación de sistemas de control de acceso, torniquetes, biometría y automatización."
              : "Nuestro equipo de expertos está comprometido a comprender sus requisitos únicos."}
          </p>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Form Wrap */}
            <div className="contact-form-wrap glass-card">
              {submitted ? (
                <div className="contact-success">
                  <div className="success-icon">✓</div>
                  <h3>¡Registro Exitoso!</h3>
                  <p>Te contactará un ejecutivo especializado en menos de 24 hrs.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre completo</label>
                      <input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Tu nombre" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Empresa / Institución</label>
                      <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Nombre de tu empresa u organismo" />
                    </div>
                    <div className="form-group">
                      <label>Teléfono de Contacto</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+52 55 1234 5678" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Servicio de interés</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Seleccionar servicio...</option>
                      <option value="Justicia Digital / Salas de Oralidad">Justicia Digital / Salas de Oralidad</option>
                      <option value="Seguridad Integral / Control de Accesos">Seguridad Integral / Control de Accesos</option>
                      <option value="Ingeniería y Software">Ingeniería y Software</option>
                      <option value="Broadcast">Broadcast</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mensaje / Detalles del Proyecto</label>
                    <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Cuéntanos sobre tu proyecto..." />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                    {sending ? 'Enviando...' : 'Cotizar Ahora →'}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Info Card */}
            <div className="contact-info">
              <div className="info-card glass-card">
                <h3>Información Directa</h3>
                <div className="info-items">
                  <a href={`tel:${brand.contact.phone.replace(/\s/g,'')}`} className="info-item">
                    <span className="info-icon">📞</span>
                    <div><span className="info-label">Teléfono</span><span className="info-value">{brand.contact.phone}</span></div>
                  </a>
                  <a href={activeLanding ? activeLanding.whatsappUrl : brand.contact.whatsappLink} className="info-item" target="_blank" rel="noopener noreferrer">
                    <span className="info-icon">💬</span>
                    <div><span className="info-label">WhatsApp Directo</span><span className="info-value">{brand.contact.whatsapp}</span></div>
                  </a>
                  <a href={`mailto:${brand.contact.email}`} className="info-item">
                    <span className="info-icon">✉️</span>
                    <div><span className="info-label">Email Corporativo</span><span className="info-value">{brand.contact.email}</span></div>
                  </a>
                  <a href={brand.contact.mapLink} className="info-item" target="_blank" rel="noopener noreferrer">
                    <span className="info-icon">📍</span>
                    <div><span className="info-label">Oficinas Principales</span><span className="info-value">{brand.contact.address}</span></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
