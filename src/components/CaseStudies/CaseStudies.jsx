import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { caseStudies } from '../../data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CaseStudies.css';

export default function CaseStudies() {
  const ref = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="cases-section" id="proyectos">
      <div className="container" ref={ref}>
        <div className="cases-header reveal">
          <div className="cases-title-area">
            <span className="section-label">Proyectos Destacados</span>
            <h2 className="section-title">
              Casos de <span className="accent">Éxito</span>
            </h2>
          </div>
          
          <div className="cases-nav">
            <button className="case-nav-btn" onClick={handlePrev} aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
            <button className="case-nav-btn" onClick={handleNext} aria-label="Siguiente">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="coverflow-container reveal reveal-delay-1">
          {caseStudies.map((cs, i) => {
            let offset = i - activeIndex;
            
            // Wrap around logic for 4 items so it feels continuous
            if (offset < -1) offset += caseStudies.length;
            if (offset > 2) offset -= caseStudies.length;

            const zIndex = 10 - Math.abs(offset);
            const isActive = offset === 0;
            // 3D Transform formula: Translate X, Scale down, and Rotate Y based on offset
            const transformStr = `translateX(${offset * 55}%) scale(${1 - Math.abs(offset) * 0.2}) rotateY(${offset * -15}deg)`;
            const opacity = Math.abs(offset) >= 2 ? 0 : 1;

            return (
              <div 
                key={i} 
                className={`coverflow-card ${isActive ? 'is-active' : ''}`}
                style={{ 
                  transform: transformStr, 
                  zIndex: zIndex,
                  opacity: opacity,
                  pointerEvents: opacity === 0 ? 'none' : 'auto'
                }}
                onClick={() => !isActive && setActiveIndex(i)}
              >
                <div className="cf-image-wrapper">
                  <img src={cs.image} alt={cs.title} loading="lazy" />
                  <div className="cf-overlay" />
                  <span className="cf-category">{cs.category}</span>
                </div>
                <div className="cf-content">
                  <h3>{cs.title}</h3>
                  <p>{cs.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
