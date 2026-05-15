import { Link } from 'react-router-dom';
import { brand, nav } from '../../data/content';
import './Footer.css';

export default function Footer() {
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
              <span className="footer-badge">ISO 9001</span>
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
            <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="tu@email.com" className="footer-input" />
              <button type="submit" className="btn btn-primary footer-subscribe">→</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {brand.fullName}. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <Link to="/politica-de-privacidad">Aviso de Privacidad</Link>
            <span>|</span>
            <span>Sitio diseñado por Grupo DDMX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
