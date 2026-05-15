import { useRef, useState } from 'react';
import { clientLogos } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ShieldCheck } from 'lucide-react';
import './LogosMarquee.css';

function ClientCard({ client, delayIndex }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt (max 15 degrees for snappier feel)
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    const glare = cardRef.current.querySelector('.client-glare');
    if (glare) {
      glare.style.left = `${x}px`;
      glare.style.top = `${y}px`;
      glare.style.opacity = '0.2';
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    const glare = cardRef.current.querySelector('.client-glare');
    if (glare) {
      glare.style.opacity = '0';
    }
  };

  return (
    <div className={`reveal reveal-delay-${delayIndex + 1}`}>
      <div 
        className="client-card-wrapper"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="client-glare" />
        <div className="client-card-inner">
          <div className="client-logo-container">
            <img 
              src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${client.domain}&size=128`} 
              alt={client.name} 
              className="client-logo-img"
            />
          </div>
          <span className="client-name">{client.name}</span>
        </div>
      </div>
    </div>
  );
}

export default function LogosMarquee() {
  const ref = useScrollReveal();

  return (
    <section className="client-matrix-section">
      <div className="container" ref={ref}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Nivel de Acceso Autorizado</span>
          <h2 className="section-title">
            Infraestructura <span className="accent">Validada Por</span>
          </h2>
        </div>
        
        <div className="client-bento-grid">
          {clientLogos.map((client, i) => (
            <ClientCard key={i} client={client} delayIndex={i % 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
