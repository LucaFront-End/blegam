import { useState, useEffect } from 'react';
import { X, FileText, Download, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
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

    const body = new FormData();
    body.append('Nombre', form.name);
    body.append('Teléfono', form.phone);
    body.append('Email', form.email);
    body.append('Estado', form.estado);
    body.append('Documento', 'Brochure Salas de Juicios Orales');
    body.append('_subject', `[Descarga Brochure - Salas de Oralidad] Lead de ${form.name} (${form.estado})`);
    body.append('_captcha', 'false');
    body.append('_template', 'table');

    try {
      await fetch('https://formsubmit.co/ajax/info@blegam.com.mx', {
        method: 'POST',
        body,
      });
    } catch {
      // Proceed even if formsubmit fails
    } finally {
      setSending(false);
      setDownloaded(true);
      sessionStorage.setItem('blegam_brochure_modal_dismissed', 'true');

      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/assets/brochure-salas-juicios-orales.pdf';
      link.download = 'Brochure-Salas-Juicios-Orales-BLEGAM.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Auto close after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="brochure-modal-overlay">
      <div className="brochure-modal-box glass-card">
        {/* Close Button X (Tache) */}
        <button 
          className="brochure-close-btn" 
          onClick={handleClose} 
          title="Cerrar ventana"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="brochure-modal-header">
          <div className="modal-icon-badge">
            <FileText size={28} />
          </div>
          <span className="badge badge-accent mb-1">
            <Sparkles size={12} className="mr-1 inline-block" />
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
              <CheckCircle2 size={36} />
            </div>
            <h3>¡Descarga Iniciada!</h3>
            <p>El archivo PDF del Brochure de Salas de Oralidad se ha descargado a tu dispositivo.</p>
            <span className="text-sm text-accent font-mono">Un ejecutivo de BLEGAM te contactará para apoyarte con tu proyecto.</span>
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
              className="btn btn-primary w-full justify-center text-base py-3 mt-4 brochure-submit-btn"
              disabled={sending}
            >
              <Download size={18} className="mr-2" />
              {sending ? 'Iniciando Descarga...' : 'Descargar Brochure PDF Gratis →'}
            </button>

            <div className="modal-privacy-note font-mono">
              <ShieldCheck size={13} className="text-accent mr-1 inline-block" />
              <span>Tus datos están protegidos bajo aviso de privacidad corporativo.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
