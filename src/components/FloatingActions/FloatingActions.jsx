import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { brand } from '../../data/content';
import { useLanding } from '../../context/LandingContext';
import { submitLeadToWix } from '../../lib/leadService';
import './FloatingActions.css';

export default function FloatingActions() {
  const landing = useLanding();
  const location = useLocation();
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'sugerencia',
    project: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const typeLabels = {
    sugerencia: 'Sugerencia',
    experiencia: 'Experiencia',
    queja: 'Queja',
    otro: 'Otro',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const tipoText = typeLabels[form.type] || form.type;

    // 1. Send data to Wix CMS Collection (Cotizacionformulario)
    const wixPromise = submitLeadToWix({
      name: form.name,
      email: form.email,
      service: `Buzón: ${tipoText}`,
      empresa: form.project || 'No especificado',
      message: form.message,
      origin: `Buzón Flotante [${location.pathname}]`
    });

    // 2. Send email notification via FormSubmit
    const body = new FormData();
    body.append('Nombre', form.name);
    body.append('Correo', form.email);
    body.append('Tipo', tipoText);
    body.append('Proyecto', form.project || 'No especificado');
    body.append('Mensaje', form.message);
    // FormSubmit config - Clean White Template & Spanish Language
    body.append('_subject', `Buzón de comentarios: ${tipoText}`);
    body.append('_captcha', 'false');
    body.append('_template', 'box');
    body.append('_language', 'es');
    body.append('_autoresponse', 'Gracias por tu comentario. En Blegam Corp valoramos tu opinión y nos pondremos en contacto contigo si es necesario.');

    const formSubmitPromise = fetch('https://formsubmit.co/ajax/info@blegam.com.mx', {
      method: 'POST',
      body,
    });

    try {
      await Promise.allSettled([wixPromise, formSubmitPromise]);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFeedbackOpen(false);
        setForm({ name: '', email: '', type: 'sugerencia', project: '', message: '' });
      }, 3000);
    } catch {
      alert('Hubo un error al enviar. Por favor intenta de nuevo.');
    } finally {
      setSending(false);
    }
  };

  // Determine WhatsApp URL based on current page location
  let whatsappUrl = landing ? landing.whatsappUrl : brand.contact.whatsappLink;

  if (location.pathname.includes('/control-de-accesos')) {
    whatsappUrl = `https://api.whatsapp.com/send?phone=525541692770&text=${encodeURIComponent('Hola, quisiera más información de Control de acceso.')}`;
  } else if (location.pathname.includes('/salas-de-oralidad')) {
    whatsappUrl = `https://api.whatsapp.com/send?phone=525541692770&text=${encodeURIComponent('Hola, quisiera más información de Salas de Juicios Orales.')}`;
  }

  return (
    <>
      {/* Floating buttons */}
      <div className="fab-container">
        {/* Feedback button */}
        <button
          className="fab-btn fab-feedback"
          onClick={() => setFeedbackOpen(true)}
          aria-label="Enviar comentario o queja"
          title="Buzón de comentarios"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </button>

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          className="fab-btn fab-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          title="WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Feedback Modal */}
      {feedbackOpen && (
        <div className="fb-overlay" onClick={() => setFeedbackOpen(false)}>
          <div className="fb-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              className="fb-close"
              onClick={() => setFeedbackOpen(false)}
              aria-label="Cerrar"
            >
              &times;
            </button>

            <div className="fb-header">
              <div className="fb-icon">💬</div>
              <h3>Buzón de Comentarios</h3>
              <p>Tu opinión nos ayuda a mejorar. Envíanos tu sugerencia, experiencia o reporte.</p>
            </div>

            {submitted ? (
              <div className="fb-success">
                <span className="fb-check">✓</span>
                <h4>¡Gracias por tu comentario!</h4>
                <p>Hemos recibido tu mensaje correctamente.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="fb-form">
                <div className="fb-field">
                  <label htmlFor="fb-type">Tipo de mensaje</label>
                  <select
                    id="fb-type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option value="sugerencia">💡 Sugerencia de mejora</option>
                    <option value="experiencia">⭐ Experiencia con nuestro servicio</option>
                    <option value="queja">⚠️ Queja o reporte</option>
                    <option value="otro">💬 Otro asunto</option>
                  </select>
                </div>

                <div className="fb-row">
                  <div className="fb-field">
                    <label htmlFor="fb-name">Nombre completo *</label>
                    <input
                      id="fb-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="fb-field">
                    <label htmlFor="fb-email">Correo electrónico *</label>
                    <input
                      id="fb-email"
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="fb-field">
                  <label htmlFor="fb-project">Proyecto u Organización (opcional)</label>
                  <input
                    id="fb-project"
                    type="text"
                    name="project"
                    placeholder="Ej. Poder Judicial Estado de X, Empresa Y"
                    value={form.project}
                    onChange={handleChange}
                  />
                </div>

                <div className="fb-field">
                  <label htmlFor="fb-message">Mensaje *</label>
                  <textarea
                    id="fb-message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Escribe aquí tu comentario, sugerencia o detalle de tu experiencia..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="fb-submit" disabled={sending}>
                  {sending ? 'Enviando...' : 'Enviar Comentario'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
