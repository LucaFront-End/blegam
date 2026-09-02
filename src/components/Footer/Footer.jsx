import { useState } from 'react';
import { Link } from 'react-router-dom';
import { brand, nav } from '../../data/content';
import { submitLeadToWix } from '../../lib/leadService';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSending(true);

    // 1. Send data to Wix CMS Collection (Cotizacionformulario)
    const wixPromise = submitLeadToWix({
      email,
      service: 'Suscripción Newsletter',
      origin: 'Footer Newsletter'
    });

    // 2. Send email notification via FormSubmit
    const body = new FormData();
    body.append('Email de suscripción', email);
    body.append('_subject', 'Nueva suscripción a Newsletter de Blegam Corp');
    body.append('_captcha', 'false');
    body.append('_template', 'box');
    body.append('_language', 'es');

    const formSubmitPromise = fetch('https://formsubmit.co/ajax/info@blegam.com.mx', {
      method: 'POST',
      body,
    });

    try {
      await Promise.allSettled([wixPromise, formSubmitPromise]);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
      alert('Ocurrió un error al procesar el registro. Intente nuevamente.');
    } finally {
      setSending(false);
    }
  };
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <img src={brand.logo} alt={brand.fullName} className="footer-logo" />
            <p className="footer-desc">{brand.description}</p>
            <div className="footer-social">
              <span className="footer-badge">Empresa 100% Mexicana</span>
            </div>
          </div>

          {/* Menu */}
          <div className="footer-col">
            <h4>Menú</h4>
            {nav.links.map((link) => (
              <Link key={link.path} to={link.path} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href={`tel:${brand.contact.phone.replace(/\s/g, '')}`} className="footer-link">
              📞 {brand.contact.phone}
            </a>
            <a href={brand.contact.whatsappLink} className="footer-link" target="_blank" rel="noopener noreferrer">
              💬 WA: {brand.contact.whatsapp}
            </a>
            <a href={`mailto:${brand.contact.email}`} className="footer-link">
              ✉️ {brand.contact.email}
            </a>
            <a href={brand.contact.mapLink} className="footer-link" target="_blank" rel="noopener noreferrer">
              📍 {brand.contact.address}
            </a>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p className="footer-newsletter-text">Suscríbete para recibir las últimas noticias tecnológicas.</p>
            {submitted ? (
              <p className="footer-newsletter-success" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginTop: '12px' }}>
                ¡Gracias por suscribirte!
              </p>
            ) : (
              <form className="footer-newsletter" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="footer-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={sending}
                />
                <button type="submit" className="btn btn-primary footer-subscribe" disabled={sending}>
                  {sending ? '...' : '→'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {brand.fullName}. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <Link to="/zonas">Zonas de Servicio</Link>
            <span>|</span>
            <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link>
            <span>|</span>
            <span>Sitio diseñado por Grupo DDMX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
