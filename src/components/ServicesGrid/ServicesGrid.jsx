import { useState, useEffect, useRef } from 'react';
import { services } from '../../data/content';
import './ServicesGrid.css';

export default function ServicesGrid() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef(null);

  // Track scroll position to determine active card
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.service-scroll-card');
      let minDistance = Infinity;
      let activeIndex = 0;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Distance to the middle of the viewport
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = index;
        }
      });

      setActiveService(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="services-scroll-section" id="servicios">
      <div className="container scroll-layout" ref={containerRef}>
        
        {/* Sticky Left Panel */}
        <div className="scroll-sticky-panel">
          <div className="sticky-content">
            <span className="section-label">Ejes Estratégicos</span>
            <h2 className="section-title">
              Una solución para todas sus <span className="accent">necesidades</span>
            </h2>
            <p className="section-description">
              Combinamos experiencia en telecomunicaciones, audio, video, software e infraestructura para desarrollar ecosistemas integrales.
            </p>
            
            <div className="sticky-visual-wrapper">
              <DynamicVisual activeId={services[activeService].id} />
            </div>
          </div>
        </div>

        {/* Scrollable Right Panel */}
        <div className="scroll-cards-panel">
          {services.map((service, i) => (
            <div 
              key={service.id} 
              className={`service-scroll-card ${activeService === i ? 'is-active' : ''}`}
            >
              <div className="card-glass">
                <div className="service-icon-large">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((f, j) => (
                    <li key={j}>
                      <span className="feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { Scale, Cctv, Server, RadioTower } from 'lucide-react';

function DynamicVisual({ activeId }) {
  const iconConfig = {
    'justicia-digital': {
      Icon: Scale,
      label: 'SYS.JUSTICE_CORE',
      color: '#12D4C9'
    },
    'seguridad-integral': {
      Icon: Cctv,
      label: 'SYS.SECURITY_GRID',
      color: '#10b981'
    },
    'ingenieria-software': {
      Icon: Server,
      label: 'SYS.SOFTWARE_NET',
      color: '#f59e0b'
    },
    'broadcast': {
      Icon: RadioTower,
      label: 'SYS.BROADCAST_HUB',
      color: '#8b5cf6'
    }
  };

  const activeData = iconConfig[activeId] || iconConfig['justicia-digital'];

  return (
    <div className="dv-icon-container">
      {/* Background ambient glow based on state */}
      <div 
        className="dv-glow" 
        style={{ backgroundColor: activeData.color }} 
      />
      
      <div className="dv-icon-wrapper">
        {Object.entries(iconConfig).map(([id, data]) => {
          const IconComp = data.Icon;
          return (
            <div 
              key={id}
              className={`dv-icon-slide ${activeId === id ? 'is-active' : ''}`}
            >
              <div 
                className="dv-icon-box"
                style={{ 
                  color: data.color, 
                  backgroundColor: `${data.color}08`, // 08 hex for very low opacity
                  borderColor: `${data.color}30`
                }}
              >
                <IconComp size={110} strokeWidth={1} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative Technical Label */}
      <div className="dv-tech-label">
        <span 
          className="dv-dot" 
          style={{ 
            backgroundColor: activeData.color, 
            boxShadow: `0 0 8px ${activeData.color}` 
          }} 
        />
        {activeData.label}
        <span className="dv-cursor">_</span>
      </div>
    </div>
  );
}
