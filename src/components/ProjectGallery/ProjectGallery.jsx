import { useState, useRef } from 'react';
import { projectsDetailed } from '../../data/content';
import './ProjectGallery.css';

export default function ProjectGallery() {
  const categories = ['Todas', ...new Set(projectsDetailed.map(p => p.category))];
  const [activeFilter, setActiveFilter] = useState('Todas');

  const filtered = activeFilter === 'Todas'
    ? projectsDetailed
    : projectsDetailed.filter(p => p.category === activeFilter);

  return (
    <section className="gallery-section">
      <div className="container">
        <span className="section-label">Portafolio</span>
        <h2 className="section-title">
          Proyectos <span className="accent">Destacados</span>
        </h2>

        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
    }
  };

  return (
    <div
      className="project-card reveal"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="pc-image-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="pc-overlay">
          <span className="pc-category">{project.category}</span>
          <span className="pc-year">{project.year}</span>
        </div>
      </div>
      <div className="pc-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="pc-specs">
          {project.specs.map((spec, j) => (
            <span key={j} className="pc-spec-tag">{spec}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
