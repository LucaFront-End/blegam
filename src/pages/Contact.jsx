import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { brand } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', company:'', phone:'', service:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const heroRef = useScrollReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const body = new FormData();
    body.append('Nombre', form.name);
    body.append('Email', form.email);
    body.append('Empresa', form.company);
    body.append('Teléfono', form.phone);
    body.append('Servicio de interés', form.service);
    body.append('Mensaje', form.message);
    // FormSubmit config — clean email, no template, Spanish subject
    body.append('_subject', 'Nueva solicitud de cotización desde blegam.com');
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

  return (
    <main className="page-contact">
      <Helmet>
        <title>Contacto Blegam Corp | Cotiza tu Proyecto de IT o Sala de Juicios Orales</title>
        <meta name="description" content="Solicita una cotización con Blegam Corp para instalación de Salas de Juicios Orales, infraestructura tecnológica e implementación de IT para empresas, corporativos e instituciones." />
      </Helmet>

      <section className="contact-hero" ref={heroRef}>
        <div className="contact-hero-bg" />
        <div className="container reveal">
          <span className="section-label">Contáctanos</span>
          <h1 className="section-title">Háblanos de tu <span className="accent">Proyecto</span></h1>
          <p className="section-description">Nuestro equipo de expertos está comprometido a comprender sus requisitos únicos.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrap glass-card">
              {submitted ? (
                <div className="contact-success">
                  <div className="success-icon">✓</div>
                  <h3>¡Registro Exitoso!</h3>
                  <p>Te contactará un ejecutivo en 24 hrs</p>
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
                      <label>Empresa</label>
                      <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Nombre de tu empresa" />
                    </div>
                    <div className="form-group">
                      <label>Teléfono</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+52 55 1234 5678" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Servicio de interés</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Seleccionar servicio...</option>
                      <option value="Justicia Digital / Salas de Oralidad">Justicia Digital / Salas de Oralidad</option>
                      <option value="Seguridad Integral">Seguridad Integral</option>
                      <option value="Ingeniería y Software">Ingeniería y Software</option>
                      <option value="Broadcast">Broadcast</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mensaje</label>
                    <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Cuéntanos sobre tu proyecto..." />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                    {sending ? 'Enviando...' : 'Cotizar Ahora →'}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="info-card glass-card">
                <h3>Información Directa</h3>
                <div className="info-items">
                  <a href={`tel:${brand.contact.phone.replace(/\s/g,'')}`} className="info-item">
                    <span className="info-icon">📞</span>
                    <div><span className="info-label">Teléfono</span><span className="info-value">{brand.contact.phone}</span></div>
                  </a>
                  <a href={brand.contact.whatsappLink} className="info-item" target="_blank" rel="noopener noreferrer">
                    <span className="info-icon">💬</span>
                    <div><span className="info-label">WhatsApp</span><span className="info-value">{brand.contact.whatsapp}</span></div>
                  </a>
                  <a href={`mailto:${brand.contact.email}`} className="info-item">
                    <span className="info-icon">✉️</span>
                    <div><span className="info-label">Email</span><span className="info-value">{brand.contact.email}</span></div>
                  </a>
                  <a href={brand.contact.mapLink} className="info-item" target="_blank" rel="noopener noreferrer">
                    <span className="info-icon">📍</span>
                    <div><span className="info-label">Dirección</span><span className="info-value">{brand.contact.address}</span></div>
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
