import { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { projectsDetailed, mexicoPresence } from '../../data/content';
import { MapPin, X, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import './MexicoMap.css';

// Fix Leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;

const createIcon = (isActive) => new L.DivIcon({
  className: 'blegam-map-pin',
  html: `<div style="
    width:${isActive ? 28 : 20}px;height:${isActive ? 28 : 20}px;
    background:#12D4C9;border-radius:50%;
    box-shadow:0 0 0 ${isActive ? 6 : 3}px rgba(18,212,201,${isActive ? 0.25 : 0.12}), 0 4px 12px rgba(18,212,201,0.4);
    border:3px solid white;
    transition:all 0.3s;cursor:pointer;
    ${isActive ? 'animation:pulseGlow 2s infinite;' : ''}
  "></div>`,
  iconSize: [isActive ? 28 : 20, isActive ? 28 : 20],
  iconAnchor: [isActive ? 14 : 10, isActive ? 14 : 10],
  popupAnchor: [0, isActive ? -16 : -12],
});

// Map projects to approximate coordinates
const projectGeo = {
  'Salas de Oralidad — CDMX': { coords: [19.4326, -99.1332], region: 'CDMX' },
  'Televisa — Estudio Deportivo': { coords: [19.3937, -99.1885], region: 'CDMX' },
  'Juguetón — Producción AV': { coords: [19.4363, -99.1406], region: 'CDMX' },
  'Tren Suburbano — CCTV': { coords: [19.5253, -99.1578], region: 'Edomex' },
  'Salas de Oralidad — Puebla': { coords: [19.0414, -98.2063], region: 'Puebla' },
  'SSC CDMX — Videovigilancia': { coords: [19.4128, -99.1750], region: 'CDMX' },
  'Nuevas Salas — Atlixco, Puebla': { coords: [18.9069, -98.4328], region: 'Puebla' },
  'Mantenimiento — Pachuca, Hidalgo': { coords: [20.1011, -98.7591], region: 'Hidalgo' },
  'Mantenimiento — Puebla Centro': { coords: [19.0300, -98.1900], region: 'Puebla' },
  'Mantenimiento — San Andrés Cholula': { coords: [19.0550, -98.2970], region: 'Puebla' },
};

const regionList = ['Todos', ...new Set(Object.values(projectGeo).map(p => p.region))];

const regionCoords = {
  'Todos': [20.0, -99.2, 6],
  'CDMX': [19.42, -99.16, 12],
  'Edomex': [19.52, -99.16, 11],
  'Puebla': [19.04, -98.21, 11],
  'Hidalgo': [20.10, -98.76, 12],
};

function MapController({ activeRegion, selectedProject }) {
  const map = useMap();
  useEffect(() => {
    if (selectedProject) {
      const geo = projectGeo[selectedProject];
      if (geo) {
        map.flyTo(geo.coords, 13, { duration: 1 });
        return;
      }
    }
    const target = regionCoords[activeRegion] || regionCoords['Todos'];
    map.flyTo([target[0], target[1]], target[2], { duration: 1.2 });
  }, [activeRegion, selectedProject, map]);
  return null;
}

export default function MexicoMap() {
  const [activeRegion, setActiveRegion] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const filtered = useMemo(() => {
    if (activeRegion === 'Todos') return projectsDetailed;
    return projectsDetailed.filter(p => {
      const geo = projectGeo[p.title];
      return geo && geo.region === activeRegion;
    });
  }, [activeRegion]);

  const activeProject = selectedProject
    ? projectsDetailed.find(p => p.title === selectedProject)
    : null;

  const projectImages = activeProject?.images || (activeProject ? [activeProject.image] : []);

  // Reset carousel when project changes
  useEffect(() => {
    setCarouselIdx(0);
  }, [selectedProject]);

  return (
    <section className="map-hero-section">
      {/* Full-width map container */}
      <div className="mh-map-container">
        <MapContainer
          center={[20.5, -99.5]}
          zoom={6}
          style={{ width: '100%', height: '100%' }}
          zoomControl={false}
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
          <MapController activeRegion={activeRegion} selectedProject={selectedProject} />

          {filtered.map((project) => {
            const geo = projectGeo[project.title];
            if (!geo) return null;
            const isSelected = selectedProject === project.title;

            return (
              <Marker
                key={project.title}
                position={geo.coords}
                icon={createIcon(isSelected)}
                eventHandlers={{
                  click: () => setSelectedProject(isSelected ? null : project.title),
                }}
              >
                <Popup>
                  <div className="lm-popup">
                    <strong>{project.title}</strong>
                    <span>{project.category}</span>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* Top-left: Region filters */}
        <div className="mh-controls">
          <div className="mh-filter-group">
            {regionList.map((r) => (
              <button
                key={r}
                className={`mh-filter ${activeRegion === r ? 'active' : ''}`}
                onClick={() => { setActiveRegion(r); setSelectedProject(null); }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom-left: Project count overlay */}
        <div className="mh-info-bar">
          <div className="mh-info-left">
            <MapPin size={14} />
            <span><strong>{filtered.length}</strong> proyectos · {activeRegion === 'Todos' ? 'Todo México' : activeRegion}</span>
          </div>
          <div className="mh-info-hint">Click en un pin para ver detalles</div>
        </div>

        {/* RIGHT SIDEBAR: Project cards */}
        <div className="mh-sidebar">
          <div className="mh-sidebar-header">
            <h3>Proyectos</h3>
            <span className="mh-sidebar-count">{filtered.length}</span>
          </div>
          <div className="mh-sidebar-list">
            {filtered.map((project) => {
              const isSelected = selectedProject === project.title;
              const geo = projectGeo[project.title];
              return (
                <div
                  key={project.title}
                  className={`mh-sidebar-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedProject(isSelected ? null : project.title)}
                >
                  <div className="mh-sc-thumb">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="mh-sc-info">
                    <h4>{project.title}</h4>
                    <div className="mh-sc-meta">
                      <span className="mh-sc-cat">{project.category}</span>
                      <span className="mh-sc-year">{project.year}</span>
                    </div>
                  </div>
                  <ChevronRight size={14} className="mh-sc-arrow" />
                </div>
              );
            })}
          </div>
        </div>

        {/* SELECTED PROJECT DETAIL PANEL (overlay on map) */}
        {activeProject && (
          <div className="mh-detail-panel" key={activeProject.title}>
            <button className="mh-detail-close" onClick={() => setSelectedProject(null)}>
              <X size={18} />
            </button>

            <div className="mh-detail-image">
              <img src={projectImages[carouselIdx]} alt={`${activeProject.title} ${carouselIdx + 1}`} />
              <div className="mh-detail-image-overlay">
                <span className="mh-detail-cat">{activeProject.category}</span>
              </div>

              {/* Carousel Controls */}
              {projectImages.length > 1 && (
                <>
                  <button
                    className="mh-carousel-btn mh-carousel-prev"
                    onClick={(e) => { e.stopPropagation(); setCarouselIdx((carouselIdx - 1 + projectImages.length) % projectImages.length); }}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    className="mh-carousel-btn mh-carousel-next"
                    onClick={(e) => { e.stopPropagation(); setCarouselIdx((carouselIdx + 1) % projectImages.length); }}
                  >
                    <ChevronRight size={16} />
                  </button>
                  <div className="mh-carousel-dots">
                    {projectImages.map((_, i) => (
                      <button
                        key={i}
                        className={`mh-carousel-dot ${i === carouselIdx ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setCarouselIdx(i); }}
                      />
                    ))}
                  </div>
                  <span className="mh-carousel-counter">{carouselIdx + 1}/{projectImages.length}</span>
                </>
              )}
            </div>

            <div className="mh-detail-body">
              <h3 className="mh-detail-title">{activeProject.title}</h3>
              <div className="mh-detail-year">
                <Calendar size={13} />
                <span>{activeProject.year}</span>
              </div>
              <p className="mh-detail-desc">{activeProject.description}</p>
              <div className="mh-detail-specs">
                {activeProject.specs.map((spec, j) => (
                  <span key={j} className="mh-detail-spec">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
