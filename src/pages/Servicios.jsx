import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brand } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ParticleHero from '../components/ParticleHero/ParticleHero';
import ServiceAccordion from '../components/ServiceAccordion/ServiceAccordion';
import MethodologyPipeline from '../components/MethodologyPipeline/MethodologyPipeline';
import HoneycombGrid from '../components/HoneycombGrid/HoneycombGrid';
import './Servicios.css';

export default function Servicios() {
  const ctaRef = useScrollReveal();

  return (
    <main className="page-servicios">
      <Helmet>
        <title>Servicios de Implementación de IT e Integración Tecnológica | Blegam Corp</title>
        <meta name="description" content="Descubre los servicios de Blegam Corp: instalación de Salas de Juicios Orales, infraestructura tecnológica, videoconferencia, redes, audio profesional y soluciones IT para empresas." />
      </Helmet>
      {/* ─── 1. PARTICLE HERO ─── */}
      <ParticleHero
        badge="Soluciones End-to-End"
        title="Servicios de"
        titleAccent="Misión Crítica"
        subtitle="Diseño, implementación y soporte de infraestructura tecnológica para los sectores más exigentes de México."
      />

      {/* ─── 2. SERVICE ACCORDION ─── */}
      <ServiceAccordion />

      {/* ─── 3. METHODOLOGY PIPELINE ─── */}
      <MethodologyPipeline />

      {/* ─── 4. TECH STACK HONEYCOMB ─── */}
      <HoneycombGrid />

      {/* ─── 5. CTA ─── */}
      <section className="servicios-cta" ref={ctaRef}>
        <div className="blob-bg">
          <div className="blob b1" />
          <div className="blob b2" />
        </div>
        <div className="container reveal" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="cta-badge" style={{ display: 'inline-block', marginBottom: '24px' }}>
            Cotización Sin Compromiso
          </span>
          <h2 className="cta-title">
            Cotiza tu <span className="accent-gradient">Proyecto</span>
          </h2>
          <p className="cta-desc">
            Nuestro equipo analizará tus requerimientos y te presentará la solución óptima en 48 horas.
          </p>
          <div className="cta-actions">
            <Link to="/contacto" className="btn btn-primary">Solicitar Cotización →</Link>
            <a href={brand.contact.whatsappLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
