import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brand, nav } from '../../data/content';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" aria-label="BLEGAM Home">
          <img src={brand.logo} alt={brand.fullName} />
        </Link>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {nav.links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''} ${link.highlight ? 'highlight' : ''}`}
            >
              {link.highlight && <span className="nav-pulse" />}
              {link.label}
            </Link>
          ))}
          <a href={brand.contact.whatsappLink} className="btn btn-primary nav-cta" target="_blank" rel="noopener noreferrer">
            Contactar
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
