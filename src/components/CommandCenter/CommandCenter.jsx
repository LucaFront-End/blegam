import { useEffect, useRef } from 'react';
import { teamCapabilities } from '../../data/content';
import { useCountUp } from '../../hooks/useScrollReveal';
import './CommandCenter.css';

function AnimatedBar({ value, max, color, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          setTimeout(() => {
            barRef.current.style.width = `${(value / max) * 100}%`;
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [value, max, delay]);

  return (
    <div className="cc-bar-track">
      <div className="cc-bar-fill" ref={barRef} style={{ backgroundColor: color, width: 0 }} />
    </div>
  );
}

export default function CommandCenter() {
  const maxProjects = Math.max(...teamCapabilities.map(c => c.projects));

  return (
    <section className="cc-section">
      <div className="container">
        <span className="section-label">Centro de Operaciones</span>
        <h2 className="section-title">
          Capacidades <span className="accent">Técnicas</span>
        </h2>
        <p className="section-description" style={{ marginBottom: '48px' }}>
          Un equipo multidisciplinario con expertise en todas las capas de infraestructura crítica.
        </p>

        <div className="cc-dashboard">
          {/* Status Header */}
          <div className="cc-header">
            <div className="cc-status-row">
              <span className="cc-status-dot" />
              <span className="cc-status-text">SISTEMAS OPERATIVOS</span>
            </div>
            <span className="cc-timestamp">{new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          </div>

          {/* Module Cards */}
          <div className="cc-modules">
            {teamCapabilities.map((cap, i) => {
              const specRef = useCountUp(cap.specialists, 1500);
              const projRef = useCountUp(cap.projects, 2000);

              return (
                <div key={i} className="cc-module reveal" style={{ '--module-color': cap.color }}>
                  <div className="cc-module-header">
                    <h4>{cap.area}</h4>
                    <span className={`cc-status-badge ${cap.status.toLowerCase()}`}>
                      {cap.status}
                    </span>
                  </div>
                  <div className="cc-module-stats">
                    <div className="cc-stat">
                      <span className="cc-stat-value" ref={specRef}>0</span>
                      <span className="cc-stat-label">Especialistas</span>
                    </div>
                    <div className="cc-stat">
                      <span className="cc-stat-value" ref={projRef}>0</span>
                      <span className="cc-stat-label">Proyectos</span>
                    </div>
                  </div>
                  <AnimatedBar value={cap.projects} max={maxProjects} color={cap.color} delay={i * 200} />
                </div>
              );
            })}
          </div>

          {/* Summary Bar */}
          <div className="cc-summary">
            <div className="cc-summary-item">
              <span className="cc-summary-value">41+</span>
              <span className="cc-summary-label">Especialistas Totales</span>
            </div>
            <div className="cc-summary-divider" />
            <div className="cc-summary-item">
              <span className="cc-summary-value">475+</span>
              <span className="cc-summary-label">Proyectos Completados</span>
            </div>
            <div className="cc-summary-divider" />
            <div className="cc-summary-item">
              <span className="cc-summary-value">15+</span>
              <span className="cc-summary-label">Años de Experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
