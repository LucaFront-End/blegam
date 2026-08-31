import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { brand, audienceProcess, salaTypes, benefits } from '../data/content';
import SalaConfigurator from '../components/SalaConfigurator/SalaConfigurator';
import VoiceWaveform from '../components/VoiceWaveform/VoiceWaveform';
import MasodHud from '../components/MasodHud/MasodHud';
import HorizontalProcess from '../components/HorizontalProcess/HorizontalProcess';
import TacticalRoomTabs from '../components/TacticalRoomTabs/TacticalRoomTabs';
import OperationalBenefits from '../components/OperationalBenefits/OperationalBenefits';
import BrochureModal from '../components/BrochureModal/BrochureModal';
import { useLanding } from '../context/LandingContext';
import './SalasOralidad.css';

export default function SalasOralidad({ landing: propLanding }) {
  const [activeBlueprint, setActiveBlueprint] = useState(null);
  const contextLanding = useLanding();
  const landing = propLanding || contextLanding;
  
  // Custom hero content based on dynamic landing context
  let displayTitle = (
    <>
      Instalación de Salas de<br />
      <span className="accent-gradient">Juicios Orales</span>
    </>
  );
  let displaySubtitle = "Soluciones integrales llave en mano para la modernización de salas de audiencia oral digital. Audio, video, software y almacenamiento en un solo ecosistema.";
  let displayBadge = "200+ Salas Implementadas en México";

  if (landing) {
    displayBadge = `Cobertura: ${landing.ciudad}, ${landing.estado}`;
    
    // Split "Instalación de Salas de Juicios Orales en [Ciudad]" to wrap [Ciudad] in a gradient
    const parts = (landing.titulo || '').split(' en ');
    if (parts.length > 1) {
      displayTitle = (
        <>
          {parts[0]} <span className="accent-gradient">en {parts.slice(1).join(' en ')}</span>
        </>
      );
    } else {
      displayTitle = landing.titulo;
    }
    displaySubtitle = landing.excerpt || displaySubtitle;
  }
  
  const blueprintNodes = [
    { id: 'video', label: 'Video PTZ', desc: 'Cámaras 4K con seguimiento en techo y esquinas.' },
    { id: 'audio', label: 'Audio DSP', desc: 'Micrófonos de alta fidelidad en los estrados.' },
    { id: 'redes', label: 'Redes Seguras', desc: 'Cableado estructurado bajo el piso falso.' },
    { id: 'storage', label: 'Storage NAS', desc: 'Grabación y respaldo en el rack de comunicaciones.' },
    { id: 'software', label: 'MASOD®', desc: 'Pantallas interactivas en el estrado del juez.' },
  ];

  const blueprintItemsRef = useRef([]);

  // Auto-activate 3D layer when cards reach their stacked sticky positions on mobile
  useEffect(() => {
    const handleMobileScroll = () => {
      if (window.innerWidth > 900) return;
      
      const navHeight = 64;
      const stageHeight = 270;
      const baseStickyTop = navHeight + 8 + stageHeight + 8; // ~350px
      
      let currentActiveId = blueprintNodes[0].id;

      blueprintItemsRef.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemStickyTop = baseStickyTop + (idx * 16);
        
        // If this card has scrolled up to or past its sticky threshold:
        if (rect.top <= itemStickyTop + 24) {
          currentActiveId = blueprintNodes[idx]?.id;
        }
      });

      if (currentActiveId && currentActiveId !== activeBlueprint) {
        setActiveBlueprint(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleMobileScroll, { passive: true });
    handleMobileScroll();
    return () => window.removeEventListener('scroll', handleMobileScroll);
  }, [activeBlueprint]);

  const heroRef = useScrollReveal();
  const whatRef = useScrollReveal();
  const probRef = useScrollReveal();
  const solRef = useScrollReveal();
  const configRef = useScrollReveal();
  const masodRef = useScrollReveal();
  const processRef = useScrollReveal();
  const typesRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <main className="page-salas">
      <BrochureModal />
      {!landing && (
        <Helmet>
          <title>Instalación de Salas de Juicios Orales con Tecnología Especializada | Blegam Corp</title>
          <meta name="description" content="Diseñamos e implementamos Salas de Juicios Orales con sistemas de audio, videograbación, videoconferencia, monitoreo y tecnología especializada para instituciones gubernamentales y judiciales." />
        </Helmet>
      )}
      {/* ─── 1. HERO ─── */}
      <section className="salas-hero waveform-hero" ref={heroRef}>
        <VoiceWaveform />
        
        <div className="container reveal" style={{ position: 'relative', zIndex: 10 }}>
          <div className="salas-hero-content-center">
            <span className="hero-badge" style={{ margin: '0 auto 32px' }}>
              <span className="hero-badge-dot" />
              {displayBadge}
            </span>
            <h1 className="salas-hero-title-center">
              {displayTitle}
            </h1>
            <p className="salas-hero-sub-center">
              {displaySubtitle}
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link to={landing ? `/contacto?ciudad=${encodeURIComponent(landing.ciudad)}&type=${landing.type}` : "/contacto"} className="btn btn-primary">Solicitar Diagnóstico →</Link>
              <a href="#configurador" className="btn btn-outline">Explorar Sala Interactiva</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEADLINE BANNER — Abril 2027 (Light Theme Overhaul) ─── */}
      <section className="dl-banner">
        {/* Decorative elements */}
        <div className="dl-corner dl-corner-tl" />
        <div className="dl-corner dl-corner-br" />

        <div className="container reveal">
          {/* Top: Alert strip */}
          <div className="dl-alert-strip">
            <span className="dl-alert-pulse" />
            <span className="dl-alert-text">MANDATO NACIONAL · REFORMA AL CÓDIGO NACIONAL DE PROCEDIMIENTOS CIVILES Y FAMILIARES</span>
          </div>

          {/* Hero headline */}
          <div className="dl-hero">
            <h2 className="dl-headline">
              Los 32 estados deben contar con <br />
              <span className="dl-headline-accent">salas de oralidad</span> antes de
            </h2>
            <div className="dl-date-badge">
              <span className="dl-date-month">Abril</span>
              <span className="dl-date-year">2027</span>
            </div>
          </div>

          {/* Progress bar: time remaining */}
          {(() => {
            const start = new Date(2023, 0, 1);
            const deadline = new Date(2027, 3, 1);
            const now = new Date();
            const totalSpan = deadline - start;
            const elapsed = now - start;
            const pct = Math.min(100, Math.max(0, (elapsed / totalSpan) * 100));
            const diffMs = deadline - now;
            const totalDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
            const months = Math.floor(totalDays / 30);
            const days = totalDays % 30;
            return (
              <div className="dl-progress-wrapper">
                <div className="dl-progress-bar">
                  <div className="dl-progress-fill" style={{ width: `${pct}%` }}>
                    <div className="dl-progress-glow" />
                  </div>
                  <div className="dl-progress-marker" style={{ left: `${pct}%` }}>
                    <span className="dl-marker-label">HOY</span>
                    <div className="dl-marker-dot" />
                  </div>
                </div>
                <div className="dl-progress-labels">
                  <span>2023 — Decreto publicado</span>
                  <span className="dl-time-remaining">
                    <strong>{months}</strong> meses y <strong>{days}</strong> días restantes
                  </span>
                  <span>Abril 2027 — Fecha límite</span>
                </div>
              </div>
            );
          })()}

          {/* Info paragraph */}
          <p className="dl-description">
            La fecha límite establecida a nivel nacional para la entrada en vigor del nuevo modelo de <strong>justicia oral en materias civil y familiar</strong> es abril de 2027. Para esta fecha, los gobiernos y poderes judiciales de los 32 estados deberán contar con la infraestructura y salas adaptadas.
          </p>

          {/* Two solution cards */}
          <div className="dl-solutions-grid">
            <div className="dl-sol-card">
              <div className="dl-sol-number">01</div>
              <div className="dl-sol-icon-wrap">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="dl-sol-title">Salas Nuevas</h3>
              <p className="dl-sol-desc">Diseño, ingeniería e instalación <strong>llave en mano</strong> de salas de audiencia oral con tecnología de punta en audio, video, redes y almacenamiento.</p>
              <ul className="dl-sol-tags">
                <li>Audio DSP</li>
                <li>Video 4K</li>
                <li>Redes</li>
                <li>Storage</li>
              </ul>
            </div>

            <div className="dl-sol-card dl-sol-card-accent">
              <div className="dl-sol-number">02</div>
              <div className="dl-sol-icon-wrap dl-sol-icon-accent">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="dl-sol-title">Adaptación Multimateria</h3>
              <p className="dl-sol-desc">Adaptamos con nuestro software <strong>MASOD®</strong> tus salas existentes y las convertimos en <strong>Multimateria</strong> — habilitadas para penal, civil y familiar.</p>
              <ul className="dl-sol-tags">
                <li>MASOD®</li>
                <li>Multimateria</li>
                <li>Sin obra civil</li>
                <li>Rápido</li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="dl-cta-strip">
            <div className="dl-cta-text">
              <strong>¿Tu estado ya tiene la infraestructura lista?</strong>
              <span>Agenda un diagnóstico gratuito y te ayudamos a cumplir con la normativa a tiempo.</span>
            </div>
            <Link to="/contacto" className="btn btn-primary dl-cta-btn">
              Solicitar Diagnóstico →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. ¿Qué es? (Holograma Arquitectónico) ─── */}
      <section className="salas-what grid-bg" ref={whatRef}>
        <div className="container">
          
          {/* Mobile Header (Shows above sticky stage on mobile) */}
          <div className="salas-what-header-mobile">
            <span className="section-label">Ingeniería de Espacios</span>
            <h2 className="section-title">Integración <span className="accent">Invisible</span></h2>
            <p className="section-description">
              Una sala oral moderna requiere la máxima precisión tecnológica sin invadir la solemnidad del espacio. Integramos todos los ecosistemas arquitectónicamente.
            </p>
          </div>

          <div className="salas-split reveal">
            
            <div className="split-text blueprint-text-panel">
              <div className="bp-desktop-header-block">
                <span className="section-label">Ingeniería de Espacios</span>
                <h2 className="section-title">Integración <span className="accent">Invisible</span></h2>
                <p className="section-description" style={{ marginBottom: '32px' }}>
                  Una sala oral moderna requiere la máxima precisión tecnológica sin invadir la solemnidad del espacio. Integramos todos los ecosistemas arquitectónicamente.
                </p>
              </div>
              
              <div className="blueprint-list">
                {blueprintNodes.map((node, i) => (
                  <div 
                    key={node.id}
                    ref={el => blueprintItemsRef.current[i] = el}
                    style={{ '--item-index': i, zIndex: 10 + i }}
                    className={`blueprint-list-item ${activeBlueprint === node.id ? 'active' : ''}`}
                    onClick={() => setActiveBlueprint(node.id)}
                    onMouseEnter={() => setActiveBlueprint(node.id)}
                    onMouseLeave={() => {
                      if (window.innerWidth > 900) setActiveBlueprint(null);
                    }}
                  >
                    <div className="bp-item-header">
                      <div className="bp-item-indicator" />
                      <h4>{node.label}</h4>
                    </div>
                    <p className="bp-item-desc">{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="split-visual blueprint-sticky-stage">
              <div className={`blueprint-3d-container ${activeBlueprint ? 'has-active' : ''}`}>
                {/* HUD Header Strip */}
                <div className="bp-hud-header">
                  <div className={`bp-hud-dot ${activeBlueprint ? 'active' : ''}`} />
                  <span className="bp-hud-title font-mono">
                    {activeBlueprint 
                      ? `CAPA: ${blueprintNodes.find(n => n.id === activeBlueprint)?.label.toUpperCase()}` 
                      : 'EXPLORADOR 3D · DESPLÁZATE O TOCA UNA CAPA'}
                  </span>
                </div>

                <div className="bp-exploded-wrapper">
                  
                  {/* Layer 1: Redes (Cables & Switches) */}
                  <div className={`bp-layer bp-layer-redes ${activeBlueprint === 'redes' ? 'active' : ''}`}>
                    <div className="bp-layer-surface">
                       <span className="bp-layer-label">CAPA FÍSICA & REDES</span>
                       <div className="bp-grid-pattern"></div>
                       <svg className="bp-realistic-svg" viewBox="0 0 280 280">
                         {/* Server to floor nodes cables */}
                         <path d="M 140,140 C 140,200 40,200 40,240" stroke="rgba(18,212,201,0.4)" strokeWidth="2" fill="none" />
                         <path d="M 140,140 C 140,200 240,200 240,240" stroke="rgba(18,212,201,0.6)" strokeWidth="3" fill="none" strokeDasharray="5,5" className="bp-anim-dash" />
                         <path d="M 140,140 C 140,80 80,80 80,40" stroke="rgba(18,212,201,0.3)" strokeWidth="2" fill="none" />
                         <path d="M 140,140 C 140,80 200,80 200,40" stroke="var(--accent-primary)" strokeWidth="2" fill="none" className="bp-anim-dash-fast" />
                         {/* Central Switch Hub */}
                         <rect x="120" y="130" width="40" height="20" rx="4" fill="#0f172a" stroke="var(--accent-primary)" strokeWidth="2" />
                         <circle cx="128" cy="140" r="2" fill="#12d4c9" className="bp-blink" />
                         <circle cx="136" cy="140" r="2" fill="#12d4c9" className="bp-blink-fast" />
                         <circle cx="144" cy="140" r="2" fill="#12d4c9" className="bp-blink" />
                         <circle cx="152" cy="140" r="2" fill="#12d4c9" className="bp-blink-fast" />
                       </svg>
                    </div>
                  </div>

                  {/* Layer 2: Storage (Racks) */}
                  <div className={`bp-layer bp-layer-storage ${activeBlueprint === 'storage' ? 'active' : ''}`}>
                    <div className="bp-layer-surface">
                       <span className="bp-layer-label">ALMACENAMIENTO (NAS)</span>
                       <svg className="bp-realistic-svg" viewBox="0 0 280 280">
                         {/* Floor footprints */}
                         <rect x="120" y="120" width="40" height="40" fill="rgba(18,212,201,0.1)" />
                       </svg>
                       {/* 3D Server Racks built with CSS */}
                       <div className="bp-hardware-box server-rack main-rack">
                          <div className="rack-unit"></div>
                          <div className="rack-unit"></div>
                          <div className="rack-unit"></div>
                          <div className="rack-unit"></div>
                          <div className="rack-unit active-unit"></div>
                       </div>
                    </div>
                  </div>

                  {/* Layer 3: Audio & Video (Mics, Desks, Cameras) */}
                  <div className={`bp-layer bp-layer-av ${activeBlueprint === 'audio' || activeBlueprint === 'video' ? 'active' : ''} ${activeBlueprint}`}>
                    <div className="bp-layer-surface">
                       <span className="bp-layer-label">AUDIO & VIDEO DSP</span>
                       <svg className="bp-realistic-svg" viewBox="0 0 280 280">
                         {/* Desks Outlines */}
                         <rect x="100" y="60" width="80" height="20" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" /> {/* Juez */}
                         <rect x="40" y="160" width="60" height="20" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" /> {/* Defensa */}
                         <rect x="180" y="160" width="60" height="20" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" /> {/* Fiscalia */}
                         
                         {/* Microphones */}
                         <g className="bp-mic-group">
                           <line x1="140" y1="70" x2="140" y2="60" stroke="#fff" strokeWidth="2" />
                           <circle cx="140" cy="58" r="3" fill="var(--accent-primary)" />
                         </g>
                         <g className="bp-mic-group">
                           <line x1="70" y1="170" x2="70" y2="160" stroke="#fff" strokeWidth="2" />
                           <circle cx="70" cy="158" r="3" fill="var(--accent-primary)" />
                         </g>
                         <g className="bp-mic-group">
                           <line x1="210" y1="170" x2="210" y2="160" stroke="#fff" strokeWidth="2" />
                           <circle cx="210" cy="158" r="3" fill="var(--accent-primary)" />
                         </g>

                         {/* Cameras */}
                         <g className="bp-camera-group" transform="translate(230, 10)">
                           <path d="M 15,25 L 25,25 L 30,15 L 10,15 Z" fill="rgba(255,255,255,0.8)" />
                           <circle cx="20" cy="20" r="4" fill="#000" />
                           <circle cx="20" cy="20" r="1.5" fill="var(--accent-primary)" />
                         </g>
                         <g className="bp-camera-group" transform="translate(240, 240) rotate(180)">
                           <path d="M 15,25 L 25,25 L 30,15 L 10,15 Z" fill="rgba(255,255,255,0.8)" />
                           <circle cx="20" cy="20" r="4" fill="#000" />
                           <circle cx="20" cy="20" r="1.5" fill="var(--accent-primary)" />
                         </g>
                       </svg>
                    </div>
                  </div>

                  {/* Layer 4: Software MASOD */}
                  <div className={`bp-layer bp-layer-software ${activeBlueprint === 'software' ? 'active' : ''}`}>
                    <div className="bp-layer-surface">
                       <span className="bp-layer-label">MASOD® CORE</span>
                       <div className="bp-ui-dashboard">
                         <div className="bp-ui-header"></div>
                         <div className="bp-ui-body">
                           <div className="bp-ui-sidebar"></div>
                           <div className="bp-ui-content">
                             <div className="bp-ui-card"></div>
                             <div className="bp-ui-card"></div>
                             <div className="bp-ui-graph">
                               <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                                 <polyline points="0,30 20,20 40,25 60,10 80,15 100,5" fill="none" stroke="var(--accent-primary)" strokeWidth="2"/>
                               </svg>
                             </div>
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>

                  <div className="bp-core-beam"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ─── 3. Problemática ─── */}
      <section className="salas-problem" ref={probRef}>
        <div className="container reveal">
          <span className="section-label">El Desafío</span>
          <h2 className="section-title">La Problemática <span className="accent">Actual</span></h2>
          <div className="problem-split">
            {/* Left: The Glitch Terminal */}
            <div className="glitch-terminal-wrapper reveal">
              <div className="glitch-terminal">
                <div className="terminal-header">
                  <div className="term-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="term-title">ROOM_STATUS // OFFLINE</span>
                </div>
                <div className="terminal-body">
                  <div className="term-line error glitched">
                    <span className="term-time">[09:14:02]</span> <span className="term-tag">[FATAL]</span> AUDIO_SYNC_LOST: Latency &gt; 1200ms
                  </div>
                  <div className="term-line warning">
                    <span className="term-time">[09:15:45]</span> <span className="term-tag">[WARN]</span> CAM_2_FEED: Video artefacts detected
                  </div>
                  <div className="term-line error glitched">
                    <span className="term-time">[09:18:11]</span> <span className="term-tag">[SYS_ERR]</span> NAS_STORAGE_FULL: Evidence not saved
                  </div>
                  <div className="term-line error">
                    <span className="term-time">[09:22:00]</span> <span className="term-tag">[FATAL]</span> SESSION_ABORTED: Manual override required
                  </div>
                  
                  {/* The Scanner Line that cleans the terminal */}
                  <div className="terminal-scanner"></div>
                  
                  {/* Clean State (Revealed by scanner) */}
                  <div className="terminal-clean-state">
                     <span className="term-time">[09:22:05]</span> <span className="term-tag clean">[SYS_OK]</span> BLEGAM_CORE_ENGAGED: All systems nominal
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Descriptive Cards */}
            <div className="problem-content">
              {[
                { icon: '⚠️', title: 'Grabaciones Deficientes', desc: 'Audio ininteligible y video de baja calidad que causan la nulidad del juicio.' },
                { icon: '🔌', title: 'Caos Tecnológico', desc: 'Equipos aislados y cables sueltos que fallan en el momento crítico.' },
                { icon: '💾', title: 'Riesgo de Evidencia', desc: 'Almacenamiento inseguro sin respaldo automatizado ni encriptación.' },
              ].map((p, i) => (
                <div key={i} className={`problem-detail-card reveal reveal-delay-${i+1}`}>
                  <div className="prob-icon-wrapper">{p.icon}</div>
                  <div className="prob-text">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Solución BLEGAM (End-to-End Pipeline) ─── */}
      <section className="salas-solution grid-bg" ref={solRef}>
        <div className="container reveal">
          <div className="solution-header-center">
            <span className="section-label">Nuestra Solución</span>
            <h2 className="section-title">El Ecosistema <span className="accent">Llave en Mano</span></h2>
            <p className="section-description">Aseguramos la integridad de la evidencia legal desde el momento en que se pronuncia la palabra, hasta su archivo definitivo.</p>
          </div>

          <div className="pipeline-container">
            {/* Desktop SVG Pipeline View */}
            <div className="pipeline-desktop-view hp-desktop-only">
              <svg className="pipeline-svg" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(18,212,201,0.1)" />
                    <stop offset="50%" stopColor="rgba(18,212,201,0.5)" />
                    <stop offset="100%" stopColor="rgba(18,212,201,0.1)" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Base Pipe */}
                <path d="M 50 150 C 250 150, 250 50, 500 50 C 750 50, 750 250, 950 250" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" strokeLinecap="round" />
                
                {/* Glowing Core */}
                <path d="M 50 150 C 250 150, 250 50, 500 50 C 750 50, 750 250, 950 250" fill="none" stroke="url(#pipeGrad)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" />
                
                {/* Animated Data Packets */}
                <path d="M 50 150 C 250 150, 250 50, 500 50 C 750 50, 750 250, 950 250" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" className="data-packet" filter="url(#glow)" />
              </svg>

              {/* Estaciones del Ecosistema */}
              <div className="pipeline-stations">
                {/* Estación 1 */}
                <div className="station station-1">
                  <div className="station-node pulse">
                    <div className="node-icon">🎙️</div>
                  </div>
                  <div className="station-card glass-card">
                    <h3>1. Captura Exacta</h3>
                    <p>Arreglos de micrófonos DSP y Cámaras PTZ 4K con seguimiento automático del orador.</p>
                  </div>
                </div>

                {/* Estación 2 */}
                <div className="station station-2">
                  <div className="station-node pulse-fast active">
                    <div className="node-icon">🧠</div>
                  </div>
                  <div className="station-card glass-card active-card">
                    <h3>2. Gestión MASOD®</h3>
                    <p>El núcleo del ecosistema. Sincroniza audio, video, metadatos y actas en tiempo real.</p>
                  </div>
                </div>

                {/* Estación 3 */}
                <div className="station station-3">
                  <div className="station-node pulse">
                    <div className="node-icon">🔒</div>
                  </div>
                  <div className="station-card glass-card">
                    <h3>3. Resguardo Seguro</h3>
                    <p>Almacenamiento en NAS redundante con cifrado militar para garantizar la inmutabilidad.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Stacked View */}
            <div className="pipeline-mobile-stack hp-mobile-only">
              <div className="pipeline-mobile-card">
                <div className="p-mobile-icon-box">🎙️</div>
                <div className="p-mobile-info">
                  <h3>1. Captura Exacta</h3>
                  <p>Arreglos de micrófonos DSP y Cámaras PTZ 4K con seguimiento automático del orador.</p>
                </div>
              </div>

              <div className="pipeline-mobile-card active-mobile-card">
                <div className="p-mobile-icon-box active-icon">🧠</div>
                <div className="p-mobile-info">
                  <h3>2. Gestión MASOD®</h3>
                  <p>El núcleo del ecosistema. Sincroniza audio, video, metadatos y actas en tiempo real.</p>
                </div>
              </div>

              <div className="pipeline-mobile-card">
                <div className="p-mobile-icon-box">🔒</div>
                <div className="p-mobile-info">
                  <h3>3. Resguardo Seguro</h3>
                  <p>Almacenamiento en NAS redundante con cifrado militar para garantizar la inmutabilidad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. CONFIGURADOR INTERACTIVO ─── */}
      <section className="salas-configurator" id="configurador" ref={configRef}>
        <div className="container reveal">
          <span className="section-label">Experiencia Interactiva</span>
          <h2 className="section-title" style={{marginBottom:'40px'}}>
            Configura tu <span className="accent">Sala Oral</span>
          </h2>
          <SalaConfigurator />
        </div>
      </section>

      {/* ─── 7. MASOD® (Software Propio) ─── */}
      <section className="salas-masod grid-bg" ref={masodRef}>
        <div className="container reveal">
          <div className="salas-split" style={{ alignItems: 'center' }}>
            <div className="split-text" style={{ paddingRight: '20px' }}>
              <span className="section-label">Software Propio</span>
              <h2 className="section-title">MASOD<span className="accent">®</span></h2>
              <p className="section-description">
                El núcleo tecnológico del ecosistema Blegam. Un panel de control centralizado diseñado bajo arquitectura de grado militar para sincronizar, indexar y asegurar la inmutabilidad de cada audiencia.
              </p>
              <ul className="masod-features" style={{ marginBottom: '40px' }}>
                {[
                  { text: 'Grabación Multi-Cámara', icon: <svg width="20" height="20" fill="none" stroke="var(--accent-primary)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> },
                  { text: 'Vocal Tracking & Indexación', icon: <svg width="20" height="20" fill="none" stroke="var(--accent-primary)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg> },
                  { text: 'Firma Criptográfica AES-256', icon: <svg width="20" height="20" fill="none" stroke="var(--accent-primary)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg> },
                  { text: 'Control de Operador en Vivo', icon: <svg width="20" height="20" fill="none" stroke="var(--accent-primary)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> }
                ].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {f.icon}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="split-visual masod-split-visual">
              <MasodHud />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. Proceso de Audiencia (Horizontal Scroll) ─── */}
      <HorizontalProcess />

      {/* ─── 9. Tipos de Sala (Light Theme) ─── */}
      <section className="salas-types" ref={typesRef} style={{ background: '#f8fafc', color: '#0f172a' }}>
        <div className="container reveal">
          <span className="section-label dark" style={{ color: '#64748b', borderColor: '#cbd5e1' }}>Adaptabilidad</span>
          <h2 className="section-title dark" style={{ color: '#0f172a' }}>Soluciones <span className="accent" style={{ color: '#0ea5e9' }}>Escalables</span></h2>
          <TacticalRoomTabs />
        </div>
      </section>

      {/* ─── 10. Beneficios Operativos ─── */}
      <OperationalBenefits />

      {/* ─── 15. CTA Final ─── */}
      <section className="salas-cta" ref={ctaRef}>
        <div className="salas-cta-glow" />
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <h2 className="cta-title">
            ¿Listo para modernizar su <span className="accent">{landing ? `sala de oralidad en ${landing.ciudad}` : 'infraestructura judicial'}</span>?
          </h2>
          <p className="cta-desc">
            {landing
              ? `Agende un diagnóstico gratuito en ${landing.ciudad}, ${landing.estado} con nuestros especialistas.`
              : 'Agende un diagnóstico gratuito con nuestros especialistas.'}
          </p>
          <div className="cta-actions">
            <Link to={landing ? `/contacto?ciudad=${encodeURIComponent(landing.ciudad)}&type=${landing.type}&origen=salas` : "/contacto?origen=salas"} className="btn btn-primary">Agendar Diagnóstico</Link>
            <a href={landing ? landing.whatsappUrl : brand.contact.whatsappLink} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">💬 WhatsApp Directo</a>
          </div>
        </div>
      </section>
    </main>
  );
}
