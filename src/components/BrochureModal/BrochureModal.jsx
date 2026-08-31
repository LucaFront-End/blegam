import { useState, useEffect } from 'react';
import { X, FileText, Download, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { submitLeadToWix } from '../../lib/leadService';
import './BrochureModal.css';

const ESTADOS_MEXICO = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas"
];

export default function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', estado: '' });
  const [sending, setSending] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    // Check if user has already closed/submitted the brochure modal in this session
    const isClosed = sessionStorage.getItem('blegam_brochure_modal_dismissed');
    if (!isClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('blegam_brochure_modal_dismissed', 'true');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // 1. Send data to Wix CMS Collection (Cotizacionformulario)
    const wixPromise = submitLeadToWix({
      name: form.name,
      phone: form.phone,
      email: form.email,
      estado: form.estado,
      service: 'Brochure Salas de Juicios Orales',
      documento: 'Brochure Salas de Juicios Orales',
      origin: 'Popup Salas de Oralidad (Brochure)'
    });

    // 2. Send email notification via FormSubmit
    const body = new FormData();
    body.append('Nombre', form.name);
    body.append('Teléfono', form.phone);
    body.append('Email', form.email);
    body.append('Estado', form.estado);
    body.append('Documento', 'Brochure Salas de Juicios Orales');
    body.append('Origen', 'Popup Salas de Oralidad');
    body.append('_subject', `[Descarga Brochure - Salas de Oralidad] Lead de ${form.name} (${form.estado})`);
    body.append('_captcha', 'false');
    body.append('_template', 'box');
    body.append('_language', 'es');
    body.append('_autoresponse', 'Gracias por solicitar el Brochure de Salas de Oralidad de Blegam Corp.');

    const formSubmitPromise = fetch('https://formsubmit.co/ajax/info@blegam.com.mx', {
      method: 'POST',
      body,
    }).catch(() => null);

    try {
      await Promise.allSettled([wixPromise, formSubmitPromise]);
    } catch {
      // Proceed even if any service fails
    } finally {
      setSending(false);
      setDownloaded(true);
      sessionStorage.setItem('blegam_brochure_modal_dismissed', 'true');

      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/assets/brochure-blegam-2026.pdf';
      link.download = 'Brochure-Blegam-2026.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Auto close after 3.5 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="brochure-modal-overlay">
      <div className="brochure-modal-box">
        {/* Close Button X */}
        <button 
          className="brochure-close-btn" 
          onClick={handleClose} 
          title="Cerrar ventana"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="brochure-modal-header">
          <div className="modal-icon-badge">
            <FileText size={22} />
          </div>
          <span className="badge badge-accent mb-1 text-xs">
            <Sparkles size={11} className="mr-1 inline-block" />
            Documentación Técnica Ejecutiva
          </span>
          <h2 className="modal-title">
            Descargar Brochure de <span className="accent-gradient">Salas de Juicios Orales</span>
          </h2>
          <p className="modal-subtitle">
            Obtén la carpeta técnica completa con arquitectura MASOD®, microfonía DSP, audio/video y esquemas tipo de instalación.
          </p>
        </div>

        {/* Content Body */}
        {downloaded ? (
          <div className="modal-success-box">
            <div className="success-check-circle">
              <CheckCircle2 size={32} />
            </div>
            <h3>¡Descarga Iniciada!</h3>
            <p>El archivo PDF del Brochure de Salas de Oralidad se ha descargado a tu dispositivo.</p>
            <span className="text-xs text-accent font-mono">Un ejecutivo de BLEGAM te contactará para apoyarte con tu proyecto.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="brochure-form">
            <div className="brochure-form-grid">
              {/* Nombre */}
              <div className="form-group">
                <label>NOMBRE COMPLETO *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Ej: Lic. Alejandro Silva" 
                />
              </div>

              {/* Teléfono */}
              <div className="form-group">
                <label>TELÉFONO *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={form.phone} 
                  onChange={handleChange} 
                  required 
                  placeholder="+52 55 1234 5678" 
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>CORREO ELECTRÓNICO *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="alejandro@gobierno.gob.mx" 
                />
              </div>

              {/* Estado (Lista Desplegable de Estados de México) */}
              <div className="form-group">
                <label>ESTADO DE MÉXICO *</label>
                <select 
                  name="estado" 
                  value={form.estado} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Seleccionar Estado...</option>
                  {ESTADOS_MEXICO.map((edo) => (
                    <option key={edo} value={edo}>{edo}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Submit Button */}
            <button 
              type="submit" 
              className="brochure-submit-btn"
              disabled={sending}
            >
              <Download size={18} className="brochure-btn-icon" />
              <span>{sending ? 'Iniciando Descarga...' : 'Descargar Brochure PDF Gratis →'}</span>
            </button>

            <div className="modal-privacy-note font-mono">
              <ShieldCheck size={12} className="text-accent mr-1 inline-block" />
              <span>Tus datos están protegidos bajo aviso de privacidad corporativo.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
