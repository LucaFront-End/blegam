import { Crosshair, Cpu, Shield, Lock, Headphones, Layers } from 'lucide-react';
import { coreValues } from '../../data/content';
import './DNAGrid.css';

const iconMap = {
  crosshair: Crosshair,
  cpu: Cpu,
  shield: Shield,
  lock: Lock,
  headphones: Headphones,
  layers: Layers,
};

export default function DNAGrid() {
  return (
    <section className="dna-section grid-bg">
      <div className="container">
        <span className="section-label">ADN Corporativo</span>
        <h2 className="section-title">
          Los Valores que nos <span className="accent">Definen</span>
        </h2>
        <p className="section-description" style={{ marginBottom: '48px' }}>
          Cada proyecto que entregamos refleja estos principios fundamentales.
        </p>

        <div className="dna-grid">
          {/* Decorative circuit lines */}
          <svg className="dna-circuits" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M 200,0 L 200,200 L 600,200 L 600,400" stroke="rgba(18,212,201,0.08)" strokeWidth="2" fill="none" />
            <path d="M 600,0 L 600,100 L 1000,100 L 1000,400" stroke="rgba(18,212,201,0.08)" strokeWidth="2" fill="none" />
            <path d="M 400,400 L 400,600 L 800,600 L 800,800" stroke="rgba(18,212,201,0.08)" strokeWidth="2" fill="none" />
            {/* Animated dots on the circuit paths */}
            <circle r="4" fill="var(--accent-primary)" opacity="0.6">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 200,0 L 200,200 L 600,200 L 600,400" />
            </circle>
            <circle r="4" fill="var(--accent-primary)" opacity="0.6">
              <animateMotion dur="8s" repeatCount="indefinite" path="M 600,0 L 600,100 L 1000,100 L 1000,400" />
            </circle>
          </svg>

          {coreValues.map((value, i) => {
            const IconComp = iconMap[value.icon];
            return (
              <div key={i} className={`dna-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="dna-card-glow" />
                <div className="dna-icon-wrap">
                  {IconComp && <IconComp size={28} strokeWidth={1.5} />}
                  <div className="dna-icon-ring" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="dna-card-index">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
