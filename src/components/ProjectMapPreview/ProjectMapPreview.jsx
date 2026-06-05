import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projectsDetailed } from '../../data/content';
import { MapPin, ArrowRight } from 'lucide-react';
import './ProjectMapPreview.css';

const projectPins = [
  { title: 'Poder Judicial CDMX', x: 48, y: 62 },
  { title: 'Televisa — Análisis Deportivo', x: 44, y: 64 },
  { title: 'Juguetón 2023', x: 52, y: 60 },
  { title: 'Tren Suburbano — Seguridad', x: 46, y: 56 },
  { title: 'Poder Judicial Puebla', x: 58, y: 66 },
  { title: 'Secretaría de Seguridad CDMX', x: 50, y: 58 },
];

export default function ProjectMapPreview() {
  const ref = useScrollReveal();
  const [hoveredProject, setHoveredProject] = useState(null);

  const activeProject = hoveredProject
    ? projectsDetailed.find(p => p.title === hoveredProject)
    : null;

  return (
    <section className="pmp-section" id="proyectos">
      <div className="container" ref={ref}>
        <div className="pmp-layout reveal">
          {/* Left: Map */}
          <div className="pmp-map-area">
            <div className="pmp-map-card">
              {/* SVG Mexico outline (simplified) */}
              <svg className="pmp-mexico-svg" viewBox="0 0 100 100" fill="none">
                {/* Simplified Mexico silhouette */}
                <path
                  d="M15 35 Q18 28, 25 25 Q30 22, 35 20 Q40 18, 45 19 Q48 18, 50 17 Q55 16, 58 18 Q62 20, 65 22 Q68 25, 70 28 L72 32 Q74 36, 73 40 Q72 44, 70 48 L68 52 Q66 56, 64 58 Q62 60, 60 62 Q58 64, 56 66 Q54 68, 52 70 Q50 72, 48 74 Q45 76, 42 75 Q38 74, 35 72 Q32 70, 30 68 Q28 66, 26 64 Q24 62, 22 58 Q20 54, 18 50 Q16 46, 15 42 Q14 38, 15 35Z"
                  fill="rgba(18, 212, 201, 0.04)"
                  stroke="rgba(18, 212, 201, 0.15)"
                  strokeWidth="0.5"
                />
                {/* Grid lines */}
                {[20, 35, 50, 65, 80].map(v => (
                  <line key={`h${v}`} x1="10" y1={v} x2="90" y2={v} stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" />
                ))}
                {[20, 35, 50, 65, 80].map(v => (
                  <line key={`v${v}`} x1={v} y1="10" x2={v} y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" />
                ))}
              </svg>

              {/* Pins */}
              {projectPins.map((pin) => {
                const isHovered = hoveredProject === pin.title;
                return (
                  <div
                    key={pin.title}
                    className={`pmp-pin ${isHovered ? 'active' : ''}`}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    onMouseEnter={() => setHoveredProject(pin.title)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="pmp-pin-dot" />
                    {isHovered && (
                      <div className="pmp-pin-ripple" />
                    )}
                  </div>
                );
              })}

              {/* Hover tooltip card */}
              {activeProject && (() => {
                const pin = projectPins.find(p => p.title === hoveredProject);
                if (!pin) return null;
                const panelLeft = pin.x > 55;
                return (
                  <div
                    className={`pmp-tooltip ${panelLeft ? 'left' : 'right'}`}
                    style={{
                      top: `${pin.y}%`,
                      ...(panelLeft
                        ? { right: `${100 - pin.x + 4}%` }
                        : { left: `${pin.x + 4}%` }),
                    }}
                  >
                    <div className="pmp-tooltip-img">
                      <img src={activeProject.image} alt={activeProject.title} />
                    </div>
                    <div className="pmp-tooltip-body">
                      <span className="pmp-tooltip-cat">{activeProject.category}</span>
                      <h4>{activeProject.title}</h4>
                      <div className="pmp-tooltip-specs">
                        {activeProject.specs.slice(0, 2).map((s, i) => (
                          <span key={i}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Map label */}
              <div className="pmp-map-label">
                <MapPin size={12} />
                <span>200+ proyectos en México</span>
              </div>
            </div>
          </div>

          {/* Right: Content + project list */}
          <div className="pmp-content">
            <span className="section-label">Cobertura Nacional</span>
            <h2 className="section-title">
              Proyectos en <span className="accent">Todo México</span>
            </h2>
            <p className="pmp-desc">
              Cada punto en el mapa representa un proyecto donde hemos desplegado infraestructura crítica. Hover sobre los pines para explorar.
            </p>

            {/* Mini project list */}
            <div className="pmp-project-list">
              {projectsDetailed.slice(0, 4).map((project) => (
                <div
                  key={project.title}
                  className={`pmp-project-item ${hoveredProject === project.title ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="pmp-pi-thumb">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="pmp-pi-info">
                    <h4>{project.title}</h4>
                    <span>{project.category} · {project.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/proyectos" className="btn btn-outline pmp-cta">
              Ver todos los proyectos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
