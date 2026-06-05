import { useEffect, useRef, useState } from 'react';
import { Search, PenTool, Wrench, CheckCircle, Headphones } from 'lucide-react';
import { methodology } from '../../data/content';
import './MethodologyPipeline.css';

const iconMap = {
  search: Search,
  pencil: PenTool,
  wrench: Wrench,
  check: CheckCircle,
  headphones: Headphones,
};

export default function MethodologyPipeline() {
  const [activePhase, setActivePhase] = useState(0);
  const sectionRef = useRef(null);
  const phaseRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const phases = phaseRefs.current;
      if (!phases.length) return;

      let closest = 0;
      let minDist = Infinity;

      phases.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight * 0.45;
        const dist = Math.abs(center - viewCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setActivePhase(closest);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = ((activePhase + 1) / methodology.length) * 100;

  return (
    <section className="methodology-section grid-bg" ref={sectionRef}>
      <div className="container meth-layout">

        {/* Sticky Left Panel */}
        <div className="meth-sticky-panel">
          <div className="meth-sticky-inner">
            <span className="section-label">Cómo Trabajamos</span>
            <h2 className="section-title">
              Metodología <span className="accent">Probada</span>
            </h2>
            <p className="section-description">
              Un proceso riguroso de 5 fases que garantiza resultados impecables en cada proyecto.
            </p>

            {/* Visual Progress */}
            <div className="meth-visual-progress">
              <div className="meth-progress-track">
                <div className="meth-progress-fill" style={{ height: `${progress}%` }} />
              </div>
              <div className="meth-progress-nodes">
                {methodology.map((phase, i) => {
                  const IconComp = iconMap[phase.icon];
                  const isActive = i <= activePhase;
                  const isCurrent = i === activePhase;
                  return (
                    <div key={i} className={`meth-progress-node ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                      <div className="mpn-dot">
                        {IconComp && <IconComp size={14} strokeWidth={2} />}
                      </div>
                      <span className="mpn-label">{phase.title}</span>
                      {isCurrent && <div className="mpn-ring" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Right Panel — Phase Cards */}
        <div className="meth-scroll-panel">
          {methodology.map((phase, i) => {
            const IconComp = iconMap[phase.icon];
            const isActive = i <= activePhase;
            const isCurrent = i === activePhase;

            return (
              <div
                key={i}
                ref={(el) => (phaseRefs.current[i] = el)}
                className={`meth-card ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}
              >
                <div className="meth-card-inner">
                  <div className="meth-card-header">
                    <div className="meth-card-icon">
                      {IconComp && <IconComp size={24} strokeWidth={1.5} />}
                    </div>
                    <span className="meth-card-phase">Fase {phase.phase}</span>
                  </div>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                  <div className="meth-card-bar">
                    <div className="meth-card-bar-fill" style={{ width: isActive ? '100%' : '0%' }} />
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
