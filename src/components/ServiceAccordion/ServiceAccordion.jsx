import { useState } from 'react';
import { Scale, Cctv, Server, RadioTower, ChevronDown } from 'lucide-react';
import { servicesDetailed } from '../../data/content';
import './ServiceAccordion.css';

const iconMap = {
  'justicia-digital': Scale,
  'seguridad-integral': Cctv,
  'ingenieria-software': Server,
  'broadcast': RadioTower,
};

const colorMap = {
  'justicia-digital': '#12D4C9',
  'seguridad-integral': '#10b981',
  'ingenieria-software': '#f59e0b',
  'broadcast': '#8b5cf6',
};

export default function ServiceAccordion() {
  const [openId, setOpenId] = useState(servicesDetailed[0]?.id || null);

  return (
    <section className="accordion-section">
      <div className="container">
        <span className="section-label">Nuestros Ejes</span>
        <h2 className="section-title">
          Soluciones <span className="accent">Integrales</span>
        </h2>
        <p className="section-description" style={{ marginBottom: '48px' }}>
          Cada servicio es una vertical completa de ingeniería, desde el diagnóstico hasta el soporte continuo.
        </p>

        <div className="accordion-list">
          {servicesDetailed.map((svc) => {
            const isOpen = openId === svc.id;
            const IconComp = iconMap[svc.id];
            const color = colorMap[svc.id];

            return (
              <div key={svc.id} className={`acc-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="acc-header"
                  onClick={() => setOpenId(isOpen ? null : svc.id)}
                  style={{ '--acc-color': color }}
                >
                  <div className="acc-header-left">
                    <div className="acc-icon-wrap" style={{ color, borderColor: `${color}30` }}>
                      {IconComp && <IconComp size={24} strokeWidth={1.5} />}
                    </div>
                    <div>
                      <h3>{svc.title}</h3>
                      <span className="acc-subtitle">{svc.subtitle}</span>
                    </div>
                  </div>
                  <ChevronDown size={20} className={`acc-chevron ${isOpen ? 'rotated' : ''}`} />
                </button>

                <div className={`acc-body ${isOpen ? 'expanded' : ''}`}>
                  <div className="acc-body-inner">
                    <p className="acc-description">{svc.description}</p>

                    <div className="acc-capabilities">
                      <h4>Capacidades</h4>
                      <div className="acc-caps-grid">
                        {svc.capabilities.map((cap, j) => (
                          <div key={j} className="acc-cap-item">
                            <span className="acc-cap-dot" style={{ background: color }} />
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="acc-metrics">
                      {Object.entries(svc.metrics).map(([key, val]) => (
                        <div key={key} className="acc-metric">
                          <span className="acc-metric-value" style={{ color }}>{val}</span>
                          <span className="acc-metric-label">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
