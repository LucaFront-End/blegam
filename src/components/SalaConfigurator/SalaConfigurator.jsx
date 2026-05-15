import { useState } from 'react';
import { salaCategories } from '../../data/content';
import './SalaConfigurator.css';

// Detalle exacto del hardware por categoría
const hardwareDetails = {
  'audio': { title: 'Audio & Microfonía', desc: 'Arreglo de micrófonos de condensador DSP y sistema de amplificación en sala.' },
  'video': { title: 'Video & Cámaras', desc: 'Sistema de cámaras PTZ 4K con auto-tracking inteligente por voz.' },
  'pantallas': { title: 'Pantallas & Monitores', desc: 'Monitores interactivos para el Juez y pantalla central de evidencias de 86".' },
  'estaciones': { title: 'Estaciones & Servidores', desc: 'Rack de servidores NAS inmutables y estación de operador del sistema MASOD.' }
};

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
    <div className={`config-morph-wrapper ${isComplete ? 'is-complete' : ''}`}>
      {/* Sidebar Controls */}
      <div className="config-morph-sidebar">
         <h3 className="cm-title">
           <span className="cm-icon">◈</span> Inventario de Equipamiento
         </h3>
         <p className="cm-desc">Selecciona los sistemas modulares para añadirlos a la sala. Activa todos para completar la integración.</p>
         
         <div className="config-morph-options">
            {salaCategories.map(cat => {
              const isActive = activeCategories.has(cat.id);
              const detail = hardwareDetails[cat.id];
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

             {/* === FURNITURE & MODULES === */}

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

             {/* Parties Desks (Left & Right) */}
             <div className="r-desk r-partes-left">
                <div className="wire-box desk-base"><span className="desk-label">DEFENSA</span></div>
                <div className={`r-module r-audio ${activeCategories.has('audio') ? 'on' : ''}`}>
                  <div className="hw-tag tag-defensa">Micrófono</div>
                  <div className="m-mic"></div>
                </div>
             </div>
             <div className="r-desk r-partes-right">
                <div className="wire-box desk-base"><span className="desk-label">FISCALÍA</span></div>
                <div className={`r-module r-audio ${activeCategories.has('audio') ? 'on' : ''}`}>
                  <div className="hw-tag tag-fiscalia">Micrófono</div>
                  <div className="m-mic"></div>
                </div>
             </div>

             {/* Center Evidence Screen / Table */}
             <div className="r-desk r-center-table">
               <div className="wire-box desk-base"><span className="desk-label">EVIDENCIAS</span></div>
               <div className={`r-module r-pantallas ${activeCategories.has('pantallas') ? 'on' : ''}`}>
                 <div className="hw-tag tag-evidencia">Smart TV 86" 4K</div>
                 <div className="m-screen big-screen"></div>
               </div>
             </div>

             {/* Server Rack (Estaciones) (Right corner) */}
             <div className="r-rack">
               <div className="wire-box rack-base"><span className="desk-label">SITE</span></div>
               <div className={`r-module r-estaciones ${activeCategories.has('estaciones') ? 'on' : ''}`}>
                 <div className="hw-tag tag-rack">Servidores NAS RAID</div>
                 <div className="m-server"></div>
                 <div className="m-server s2"></div>
                 <div className="m-server s3"></div>
               </div>
             </div>

             {/* Operator Desk (Left corner) */}
             <div className="r-desk r-operator">
               <div className="wire-box desk-base"><span className="desk-label">CONTROL MASOD</span></div>
               <div className={`r-module r-estaciones ${activeCategories.has('estaciones') ? 'on' : ''}`}>
                 <div className="hw-tag tag-op">Terminal de Operador</div>
                 <div className="m-screen op-screen"></div>
                 <div className="m-screen op-screen s2"></div>
               </div>
             </div>

             {/* PTZ Cameras (Video) (High up on walls) */}
             <div className={`r-module r-video ${activeCategories.has('video') ? 'on' : ''}`}>
               <div className="m-cam cam-left">
                  <div className="hw-tag tag-cam-l">Cámara PTZ (Auto-Tracking)</div>
                  <div className="laser-beam"></div>
               </div>
               <div className="m-cam cam-right">
                  <div className="hw-tag tag-cam-r">Cámara PTZ</div>
                  <div className="laser-beam"></div>
               </div>
             </div>

             {/* Completion Overlay inside the room */}
             <div className="r-completion-hologram">
               SISTEMA INMUTABLE ACTIVO
             </div>

           </div>
        </div>
      </div>
    </div>
  );
}
