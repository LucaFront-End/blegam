import { useRef, useEffect, useState } from 'react';
import { 
  Calendar, 
  Video, 
  Search, 
  ShieldCheck, 
  PlayCircle, 
  Database,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { audienceProcess } from '../../data/content';
import './HorizontalProcess.css';

const stepIcons = [
  <Calendar key="1" size={22} />,
  <Video key="2" size={22} />,
  <Search key="3" size={22} />,
  <ShieldCheck key="4" size={22} />,
  <PlayCircle key="5" size={22} />,
  <Database key="6" size={22} />
];

const stepPhaseLabels = [
  'FASE 01 · AGENDAMIENTO',
  'FASE 02 · VIDEOGRABACIÓN',
  'FASE 03 · METADATOS & IA',
  'FASE 04 · ENCRIPTACIÓN NAS',
  'FASE 05 · REVISIÓN INMEDIATA',
  'FASE 06 · ARCHIVO PERMANENTE'
];

const stepFeatures = [
  'Asignación automática de sala y juez',
  'Multi-cámara 4K con seguimiento activo',
  'Búsqueda por orador y marcas de tiempo',
  'Cifrado AES-256 en NAS redundante',
  'Streaming seguro y consulta en estrado',
  'Cadena de custodia e inmutabilidad legal'
];

export default function HorizontalProcess() {
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Recalculate dynamic scroll distance for exact 1:1 horizontal scroll on desktop
  useEffect(() => {
    const calculateDistance = () => {
      if (window.innerWidth <= 900) return;
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total horizontal distance the slider needs to move
        const totalDistance = Math.max(0, sliderWidth - viewportWidth + 140);
        setScrollDistance(totalDistance);
      }
    };

    calculateDistance();
    window.addEventListener('resize', calculateDistance);
    return () => window.removeEventListener('resize', calculateDistance);
  }, []);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 900 || !wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;

      if (totalScrollableHeight <= 0) return;

      const scrolledPx = -rect.top;
      let p = scrolledPx / totalScrollableHeight;
      p = Math.max(0, Math.min(1, p));
      
      setProgress(p);
      
      const stepIdx = Math.min(
        audienceProcess.length - 1, 
        Math.floor(p * audienceProcess.length)
      );
      setCurrentStepIndex(stepIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDistance]);

  return (
    <section 
      className="hp-process-wrapper" 
      ref={wrapperRef}
      style={{
        height: scrollDistance > 0 ? `calc(100vh + ${scrollDistance}px)` : 'auto'
      }}
    >
      {/* ─── DESKTOP STICKY HORIZONTAL VIEW (> 900px) ─── */}
      <div className="hp-desktop-stage">
        <div className="hp-stage-inner">
          
          {/* Top Bar: Header & Live Progress Indicators */}
          <div className="hp-desktop-header">
            <div className="hp-header-info">
              <span className="section-label dark">
                <Sparkles size={14} className="inline-icon" />
                Flujo Operativo
              </span>
              <h2 className="section-title dark">
                ¿Cómo Funciona una <span className="accent-dark">Audiencia</span>?
              </h2>
            </div>

            <div className="hp-progress-summary">
              <div className="hp-step-badge-counter font-mono">
                <span className="current-num">0{currentStepIndex + 1}</span>
                <span className="divider">/</span>
                <span className="total-num">0{audienceProcess.length}</span>
              </div>
              <div className="hp-progress-bar-track">
                <div 
                  className="hp-progress-bar-fill" 
                  style={{ width: `${Math.max(5, progress * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Horizontal Track Canvas */}
          <div className="hp-horizontal-canvas">
            <div 
              className="hp-slider-track" 
              ref={sliderRef}
              style={{
                transform: `translateX(-${progress * scrollDistance}px)`
              }}
            >
              {audienceProcess.map((step, i) => {
                const isPassed = i <= currentStepIndex;
                return (
                  <div 
                    key={i} 
                    className={`hp-card-item ${isPassed ? 'is-active' : ''}`}
                  >
                    <div className="hp-card-top">
                      <div className="hp-card-num-box font-mono">
                        {String(step.step).padStart(2, '0')}
                      </div>
                      <div className="hp-card-icon-circle">
                        {stepIcons[i]}
                      </div>
                    </div>

                    <div className="hp-card-body">
                      <span className="hp-card-phase-tag font-mono">
                        {stepPhaseLabels[i]}
                      </span>
                      <h3 className="hp-card-title">{step.title}</h3>
                      <p className="hp-card-desc">{step.description}</p>
                    </div>

                    <div className="hp-card-footer">
                      <div className="hp-feature-pill">
                        <CheckCircle2 size={14} className="check-icon" />
                        <span>{stepFeatures[i]}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ─── MOBILE STACKING STICKY CARDS (<= 900px) ─── */}
      <div className="hp-mobile-stack-container container">
        <div className="hp-mobile-header">
          <span className="section-label dark">
            <Sparkles size={14} className="inline-icon" />
            Flujo Operativo
          </span>
          <h2 className="section-title dark">
            ¿Cómo Funciona una <span className="accent-dark">Audiencia</span>?
          </h2>
          <p className="hp-mobile-subtitle">
            Ecosistema estandarizado de justicia digital de punta a punta: desde el agendamiento hasta el resguardo probatorio inmutable.
          </p>
        </div>

        {/* Stacking Cards Deck (Each card gets sticky top offset) */}
        <div className="hp-mobile-cards-deck">
          {audienceProcess.map((step, i) => (
            <div 
              key={i} 
              className="hp-stack-card"
              style={{
                top: `calc(var(--nav-height) + ${14 + i * 22}px)`,
                zIndex: i + 1
              }}
            >
              <div className="hp-sc-header">
                <div className="hp-sc-num font-mono">
                  {String(step.step).padStart(2, '0')}
                </div>
                <div className="hp-sc-title-group">
                  <span className="hp-sc-phase font-mono">{stepPhaseLabels[i]}</span>
                  <h3 className="hp-sc-title">{step.title}</h3>
                </div>
                <div className="hp-sc-icon">
                  {stepIcons[i]}
                </div>
              </div>

              <p className="hp-sc-desc">{step.description}</p>

              <div className="hp-sc-badge">
                <CheckCircle2 size={13} className="hp-sc-check" />
                <span>{stepFeatures[i]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
