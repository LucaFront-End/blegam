import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Search, ArrowRight, MessageSquare } from 'lucide-react';
import { fetchAllLandings } from '../lib/landingService';
import './Zones.css';

export default function Zones() {
  const [landings, setLandings] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchAllLandings();
      setLandings(data);
      setLoading(false);
    }
    load();
  }, []);

  // Filter landings based on search term (city or state)
  const filtered = landings.filter(
    (l) =>
      (l.ciudad || '').toLowerCase().includes(search.toLowerCase()) ||
      (l.estado || '').toLowerCase().includes(search.toLowerCase())
  );

  // Group filtered landings by State
  const grouped = filtered.reduce((acc, curr) => {
    const state = curr.estado || 'Otros';
    if (!acc[state]) {
      acc[state] = [];
    }
    acc[state].push(curr);
    return acc;
  }, {});

  // Sort states alphabetically
  const sortedStates = Object.keys(grouped).sort();

  return (
    <main className="page-zones">
      <Helmet>
        <title>Zonas de Servicio | Blegam Corp</title>
        <meta name="description" content="Instalación de Salas de Juicios Orales en todo México. Encuentra tu delegación, municipio o estado y cotiza soluciones tecnológicas de oralidad mercantil y penal." />
      </Helmet>

      {/* ─── HERO HEADER ─── */}
      <section className="zones-hero">
        <div className="zones-hero-bg">
          <div className="zones-hero-gradient" />
          <div className="zones-hero-grid" />
          <div className="glow-orb blue" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }} />
        </div>

        <div className="container">
          <span className="section-label">Cobertura Nacional</span>
          <h1 className="zones-title">Zonas de Servicio</h1>
          <p className="zones-subtitle">
            Implementamos infraestructura tecnológica y Salas de Juicios Orales en las principales delegaciones, municipios y estados de la República Mexicana.
          </p>
        </div>
      </section>

      {/* ─── SEARCH & GRID ─── */}
      <section className="zones-content">
        <div className="container">
          {/* Search bar */}
          <div className="search-wrapper card-glass">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Buscar por ciudad, municipio, alcaldía o estado..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button onClick={() => setSearch('')} className="search-clear">
                ✕
              </button>
            )}
          </div>

          {loading ? (
            <div className="zones-loading">
              <div className="zones-spinner" />
              <p>Cargando cobertura...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="zones-empty card-glass">
              <MapPin size={48} className="empty-icon" />
              <h3>No se encontraron zonas</h3>
              <p>Intenta buscar con otros términos o contáctanos directamente para cotizar cobertura especial.</p>
            </div>
          ) : (
            <div className="zones-grouped-list">
              <div className="zones-stats">
                Se encontraron <strong>{filtered.length}</strong> zonas de servicio en {sortedStates.length} estados.
              </div>

              {sortedStates.map((state) => (
                <div key={state} className="state-group-section">
                  <h2 className="state-title-heading">
                    <span className="state-dot" /> {state}
                  </h2>
                  <div className="zones-grid">
                    {grouped[state].map((zone) => (
                      <div key={zone.id || zone.slug} className="zone-card card-glass">
                        <div className="zone-card-header">
                          <div className="zone-pin-icon">
                            <MapPin size={18} />
                          </div>
                          <div>
                            <span className={`zone-type-badge ${zone.type}`}>
                              {zone.type === 'salas' ? 'Juicios Orales' : 'Infraestructura IT'}
                            </span>
                            <h3 className="zone-city-title">{zone.ciudad}</h3>
                            <span className="zone-state-subtitle">{zone.estado}</span>
                          </div>
                        </div>

                        <p className="zone-excerpt">
                          {zone.excerpt || `Instalación y modernización tecnológica de salas orales en la zona de ${zone.ciudad}, ${zone.estado}.`}
                        </p>

                        <div className="zone-actions">
                          <Link to={`/ciudades/${zone.slug}`} className="btn-zone-link btn-zone-primary">
                            <span>Ver cobertura</span>
                            <ArrowRight size={14} />
                          </Link>
                          {zone.whatsappUrl && (
                            <a
                              href={zone.whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-zone-link btn-zone-wa"
                            >
                              <MessageSquare size={14} />
                              <span>WhatsApp</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
