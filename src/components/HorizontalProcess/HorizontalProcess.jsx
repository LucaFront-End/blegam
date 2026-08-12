import { useRef, useEffect, useState } from 'react';
import { audienceProcess } from '../../data/content';
import './HorizontalProcess.css';

export default function HorizontalProcess() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrollPx = -rect.top;
      const maxScroll = rect.height - viewportHeight;
      
      let newProgress = scrollPx / maxScroll;
      if (newProgress < 0) newProgress = 0;
      if (newProgress > 1) newProgress = 1;
      
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hp-wrapper-light" ref={sectionRef}>
      {/* Desktop Sticky Horizontal View */}
      <div className="hp-sticky-light hp-desktop-only">
        <div className="hp-header-light">
          <span className="section-label dark">Flujo Operativo</span>
          <h2 className="section-title dark">¿Cómo Funciona una <span className="accent-dark">Audiencia</span>?</h2>
        </div>

        <div className="hp-track-light">
           <div 
             className="hp-slider-light" 
             style={{ transform: `translateX(-${progress * 80}vw)` }}
           >
             {audienceProcess.map((step, i) => (
               <div key={i} className="hp-card-light">
                 <div className="hp-card-num">{String(step.step).padStart(2, '0')}</div>
                 <div className="hp-card-content">
                   <h3 className="hp-card-title">{step.title}</h3>
                   <p className="hp-card-desc">{step.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Mobile Stacked Vertical View */}
      <div className="hp-mobile-only container">
        <div className="hp-header-mobile">
          <span className="section-label dark">Flujo Operativo</span>
          <h2 className="section-title dark">¿Cómo Funciona una <span className="accent-dark">Audiencia</span>?</h2>
        </div>

        <div className="hp-mobile-vertical-list">
          {audienceProcess.map((step, i) => (
            <div key={i} className="hp-card-mobile">
              <div className="hp-mobile-card-header">
                <span className="hp-mobile-card-num">{String(step.step).padStart(2, '0')}</span>
                <h3 className="hp-mobile-card-title">{step.title}</h3>
              </div>
              <p className="hp-mobile-card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
