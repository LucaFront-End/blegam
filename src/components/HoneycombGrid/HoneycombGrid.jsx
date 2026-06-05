import { useState } from 'react';
import { techStack } from '../../data/content';
import './HoneycombGrid.css';

export default function HoneycombGrid() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const categories = [...new Set(techStack.map(t => t.category))];
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? techStack.filter(t => t.category === activeCategory)
    : techStack;

  return (
    <section className="techstack-section">
      <div className="container">
        <span className="section-label">Stack Tecnológico</span>
        <h2 className="section-title">
          Tecnologías que <span className="accent">Dominamos</span>
        </h2>
        <p className="section-description" style={{ marginBottom: '16px' }}>
          Trabajamos con las marcas líderes mundiales en audio, video, redes y seguridad.
        </p>

        <div className="ts-filters">
          <button
            className={`ts-filter-btn ${!activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ts-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="ts-grid">
          {filtered.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className={`ts-card ${hoveredIdx === i ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{ '--card-accent': tech.color }}
            >
              {/* Top accent line */}
              <div className="ts-card-accent-line" />

              {/* Logo */}
              <div className="ts-logo-area">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="ts-logo-img"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="ts-card-info">
                <h4 className="ts-card-name">{tech.name}</h4>
                <span className="ts-card-category">{tech.category}</span>
              </div>

              {/* Description revealed on hover */}
              <div className="ts-card-desc">
                <p>{tech.description}</p>
              </div>

              {/* Corner glow */}
              <div className="ts-card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
