import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Video, Mic, Monitor, Server, CheckCircle2 } from 'lucide-react';
import { salaCategories } from '../../data/content';
import './SalaConfigurator.css';

// Hardware details map for desktop interactive 3D scene
const hardwareDetails = {
  'video': { title: 'Video & Cámaras 4K', desc: 'Cámaras PTZ 4K con auto-tracking inteligente por voz.' },
  'audio': { title: 'Audio & Microfonía DSP', desc: 'Micrófonos de condensador DSP y amplificación en sala.' },
  'pantallas': { title: 'Pantallas & Monitores', desc: 'Monitores para el Juez y pantalla de evidencias de 86".' },
  'estaciones': { title: 'Servidores & MASOD® Core', desc: 'Rack de servidores NAS inmutables con software MASOD.' }
};

// Static mobile hardware breakdown items
const mobileHardwareShowcase = [
  {
    icon: <Video size={24} className="text-accent" />,
    title: 'Video & Cámaras PTZ 4K',
    subtitle: 'Seguimiento inteligente por voz',
    description: 'Sistema de video 4K Ultra HD con seguimiento automático del orador, conmutación inteligente y cobertura multi-ángulo en estrados.',
    tags: ['4K Ultra HD', 'Auto-Tracking', 'Multi-Cámara']
  },
  {
    icon: <Mic size={24} className="text-accent" />,
    title: 'Audio & Microfonía DSP',
    subtitle: 'Claridad vocal sin distorsión',
    description: 'Arreglos de micrófonos de condensador con procesador de señal digital (DSP), cancelación activa de eco y cifrado de audio.',
    tags: ['DSP Avanzado', 'Filtro Anti-Eco', 'Audio Cifrado']
  },
  {
    icon: <Monitor size={24} className="text-accent" />,
    title: 'Pantallas & Visualización',
    subtitle: 'Presentación clara de pruebas',
    description: 'Pantalla central de evidencias de 86" con superficie antirreflejo y monitores táctiles e individuales en el estrado del juzgador.',
    tags: ['Display 86"', 'Panel Táctil Juez', 'HDMI Judicial']
  },
  {
    icon: <Server size={24} className="text-accent" />,
    title: 'Servidores NAS & MASOD® Core',
    subtitle: 'Resguardo inmutable de audiencias',
    description: 'Rack de servidores redundantes con almacenamiento NAS, firma de hash criptográfico AES-256 e indexación automatizada.',
    tags: ['Cifrado AES-256', 'Almacenamiento NAS', 'Kernel MASOD®']
  }
];

export default function SalaConfigurator() {
  const [activeCategories, setActiveCategories] = useState(new Set());
  
  const toggleCategory = (catId) => {
    const next = new Set(activeCategories);
    if (next.has(catId)) next.delete(catId);
    else next.add(catId);
    setActiveCategories(next);
  };

  const isComplete = activeCategories.size === salaCategories.length;

  return (
    <>
      {/* DESKTOP VIEW: Original 3D Interactive Morph Scene (UNTOUCHED) */}
      <div className={`config-morph-wrapper hp-desktop-only ${isComplete ? 'is-complete' : ''}`}>
        {/* Sidebar Controls */}
        <div className="config-morph-sidebar">
           <h3 className="cm-title">
             <span className="cm-icon">◈</span> Inventario de Equipamiento
           </h3>
           <p className="cm-desc">Selecciona los sistemas modulares para añadirlos a la sala. Activa todos para completar la integración.</p>
           
           <div className="config-morph-options">
              {salaCategories.map(cat => {
                const isActive = activeCategories.has(cat.id);
                const detail = hardwareDetails[cat.id] || { title: cat.label, desc: 'Sistema de grado judicial.' };
                return (
                  <button 
                    key={cat.id} 
                    className={`morph-btn ${isActive ? 'active' : ''}`}
                    onClick={() => toggleCategory(cat.id)}
                    style={{'--cat-color': cat.color}}
                  >
                    <div className="morph-btn-indicator"></div>
                    <div className="morph-btn-content">
                      <span className="cat-title">{detail.title}</span>
                      <span className="cat-hardware-desc">{detail.desc}</span>
                      <span className="cat-status">{isActive ? '✓ INSTALADO EN SALA' : 'PENDIENTE DE INSTALACIÓN'}</span>
                    </div>
                  </button>
                );
              })}
           </div>

           <div className={`config-morph-status ${isComplete ? 'success' : ''}`}>
             <div className="status-dot"></div>
             <span className="status-text">
               {isComplete ? 'ECOSISTEMA INTEGRAL EN LÍNEA' : 'SISTEMA INCOMPLETO'}
             </span>
           </div>
        </div>

        {/* 3D Scene Visualization */}
        <div className="config-morph-scene">
          <div className="scene-3d-container">
             
             {/* The Room */}
             <div className={`room-3d ${isComplete ? 'room-real' : 'room-blueprint'}`}>
               
               {/* Floor */}
               <div className="r-floor">
                 <div className="grid-lines"></div>
               </div>

               {/* Wall Back */}
               <div className="r-wall-back"></div>
               {/* Wall Right */}
               <div className="r-wall-right"></div>

               {/* Juez Desk (Back center) */}
               <div className="r-desk r-juez">
                 <div className="wire-box desk-base">
                   <span className="desk-label">ESTRADO DEL JUEZ</span>
                 </div>
                 
                 {/* Pantallas */}
                 <div className={`r-module r-pantallas ${activeCategories.has('pantallas') ? 'on' : ''}`}>
                   <div className="hw-tag tag-juez-screen">Monitor Interactivo</div>
                   <div className="m-screen"></div>
                 </div>
                 {/* Audio */}
                 <div className={`r-module r-audio ${activeCategories.has('audio') ? 'on' : ''}`}>
                   <div className="hw-tag tag-juez-mic">Micrófono DSP</div>
                   <div className="m-mic"></div>
                   <div className="m-mic right-mic"></div>
                 </div>
               </div>

               {/* Defensa Desk (Left) */}
               <div className="r-desk r-defensa">
                 <div className="wire-box desk-base">
                   <span className="desk-label">DEFENSA</span>
                 </div>
                 <div className={`r-module r-audio ${activeCategories.has('audio') ? 'on' : ''}`}>
                   <div className="hw-tag tag-def-mic">Micrófono DSP</div>
                   <div className="m-mic"></div>
                 </div>
               </div>

               {/* Fiscalia Desk (Right) */}
               <div className="r-desk r-fiscalia">
                 <div className="wire-box desk-base">
                   <span className="desk-label">FISCALÍA</span>
                 </div>
                 <div className={`r-module r-audio ${activeCategories.has('audio') ? 'on' : ''}`}>
                   <div className="hw-tag tag-fisc-mic">Micrófono DSP</div>
                   <div className="m-mic"></div>
                 </div>
               </div>

               {/* Central Screen (Wall back) */}
               <div className={`r-module r-wall-screen ${activeCategories.has('pantallas') ? 'on' : ''}`}>
                 <div className="hw-tag tag-wall-tv">Pantalla Evidencias 86"</div>
                 <div className="wall-tv"></div>
               </div>

               {/* Racks & Stations (Wall right) */}
               <div className={`r-module r-estaciones ${activeCategories.has('estaciones') ? 'on' : ''}`}>
                 <div className="hw-tag tag-rack">Rack NAS MASOD</div>
                 <div className="rack-cabinet"></div>
               </div>

               {/* Cameras (Corners) */}
               <div className={`r-module r-video ${activeCategories.has('video') ? 'on' : ''}`}>
                 <div className="hw-tag tag-cam-1">Cámara PTZ Juez</div>
                 <div className="cam-unit cam-left">
                   <div className="laser-beam"></div>
                 </div>
                 <div className="cam-unit cam-right">
                   <div className="laser-beam"></div>
                 </div>
               </div>

               <div className="r-completion-hologram">
                  <span>SALA 100% OPERATIVA</span>
               </div>

             </div>

          </div>
        </div>
      </div>

      {/* MOBILE VIEW: Non-Interactive Executive Hardware Breakdown */}
      <div className="scm-mobile-showcase hp-mobile-only">
        {/* 4 Clean Executive Hardware Cards */}
        <div className="scm-mobile-showcase-list">
          {mobileHardwareShowcase.map((item, idx) => (
            <div key={idx} className="scm-mobile-showcase-card">
              <div className="scm-card-header">
                <div className="scm-icon-wrap">{item.icon}</div>
                <div>
                  <h4 className="scm-item-title">{item.title}</h4>
                  <span className="scm-item-subtitle font-mono">{item.subtitle}</span>
                </div>
              </div>

              <p className="scm-item-desc">{item.description}</p>

              <div className="scm-item-tags">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="scm-tag-pill font-mono">
                    <CheckCircle2 size={13} className="text-accent mr-1 inline-block" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action CTA */}
        <div className="scm-mobile-cta-box">
          <h4>¿Necesitas Cotizar una Sala Oral?</h4>
          <p>Te enviamos la memoria de cálculo y catálogo de equipos en menos de 24 horas.</p>
          <Link to="/contacto?origen=salas" className="btn btn-primary w-full justify-center py-3 text-base mt-3 scm-mobile-btn">
            Solicitar Cotización →
          </Link>
        </div>
      </div>
    </>
  );
}
