import { useState, useEffect, useRef } from 'react';
import { Sliders, Activity, Cpu } from 'lucide-react';
import { valueProps } from '../../data/content';
import './ValueFlow.css';

const icons = [Sliders, Activity, Cpu];

export default function ValueFlow() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress of component through the viewport
      // Trigger when element's top is 70% down the screen
      const startTrigger = windowHeight * 0.7;
      // Finish when element's top is 20% down
      const endTrigger = windowHeight * 0.2;
      
      let p = (startTrigger - rect.top) / (startTrigger - endTrigger);
      p = Math.max(0, Math.min(1, p)); // Clamp 0-1
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="value-flow-section" id="por-que-blegam">
      <div className="container" ref={containerRef}>
        <div className="value-flow-header reveal">
          <span className="section-label">¿Por Qué BLEGAM?</span>
          <h2 className="section-title">
            Construyamos algo <span className="accent">Diferente</span>
          </h2>
        </div>

        <div className="flow-circuit-container">
          {/* Circuit background grid */}
          <div className="flow-circuit-grid" />

          {/* Connection Line */}
          <div className="circuit-track">
            <div 
              className="circuit-progress" 
              style={{ 
                '--desktop-width': `${progress * 100}%`,
                '--mobile-height': `${progress * 100}%`
              }} 
            />
          </div>

          <div className="flow-nodes-wrapper">
            {valueProps.map((vp, i) => {
              // Node activates when progress passes its horizontal threshold (roughly 15%, 50%, 85%)
              const threshold = (i * 0.35) + 0.1;
              const isActive = progress > threshold;
              const IconComp = icons[i];

              return (
                <div key={i} className={`flow-node-item ${isActive ? 'is-active' : ''}`}>
                  <div className="node-point">
                    <div className="node-pulse" />
                    <span className="node-icon">
                      <IconComp size={32} strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="node-content">
                    <h3>{vp.title}</h3>
                    <p>{vp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
