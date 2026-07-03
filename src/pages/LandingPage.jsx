import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { fetchLandingBySlug } from '../lib/landingService';
import { useSetLanding } from '../context/LandingContext';
import Home from './Home';
import SalasOralidad from './SalasOralidad';

export default function LandingPage() {
  const { slug } = useParams();
  const [landing, setLanding] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [prevSlug, setPrevSlug] = useState(slug);

  if (slug !== prevSlug) {
    setPrevSlug(slug);
    setLoading(true);
    setNotFound(false);
  }

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchLandingBySlug(slug);
        if (cancelled) return;
        if (data) {
          setLanding(data);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error('Error loading landing:', err);
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Register landing data in global context
  useSetLanding(landing);

  if (loading) {
    return (
      <main className="landing-loading" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="zones-spinner" />
          <p style={{ color: 'var(--text-secondary)' }}>Cargando zona de servicio...</p>
        </div>
      </main>
    );
  }

  if (notFound || !landing) {
    return (
      <main className="landing-404" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h1 style={{ fontSize: '4rem', color: 'var(--text-primary)', marginBottom: '16px' }}>404</h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>Zona no encontrada</h2>
          <p style={{ color: 'var(--text-tertiary)', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
            La delegación, municipio o estado que buscas no está en nuestro catálogo de zonas activas.
          </p>
          <Link to="/zonas" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            Ver todas las zonas
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{landing.seoTitle}</title>
        <meta name="description" content={landing.seoDescription} />
      </Helmet>
      
      {/* Renders the appropriate layout which will dynamically consume the active landing context */}
      {landing.type === 'salas' ? <SalasOralidad landing={landing} /> : <Home landing={landing} />}
    </>
  );
}
