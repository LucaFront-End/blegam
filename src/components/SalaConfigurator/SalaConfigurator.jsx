import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Plus, Sparkles, ShieldCheck, Monitor, Mic, Video, Server } from 'lucide-react';
import { salaCategories } from '../../data/content';
import './SalaConfigurator.css';

// Hardware details map
const hardwareDetails = {
  'video': { title: 'Video & Cámaras 4K', desc: 'Cámaras PTZ 4K con auto-tracking inteligente por voz.', icon: <Video size={20} /> },
  'audio': { title: 'Audio & Microfonía DSP', desc: 'Micrófonos de condensador DSP y amplificación en sala.', icon: <Mic size={20} /> },
  'pantallas': { title: 'Pantallas & Monitores', desc: 'Monitores para el Juez y pantalla de evidencias de 86".', icon: <Monitor size={20} /> },
  'estaciones': { title: 'Servidores & MASOD® Core', desc: 'Rack de servidores NAS inmutables con software MASOD.', icon: <Server size={20} /> }
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
  const activeCount = activeCategories.size;
  const progressPercentage = (activeCount / salaCategories.length) * 100;

  return (
    <>
      {/* DESKTOP VIEW: Original 3D Morph Scene */}
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

      {/* MOBILE VIEW: Top Fixed HUD + Tap-to-Build Hardware Grid */}
      <div className="scm-mobile-builder hp-mobile-only">
        {/* Top HUD Monitor */}
        <div className={`scm-mobile-hud ${isComplete ? 'hud-complete' : ''}`}>
          <div className="scm-hud-header">
            <div className="scm-hud-badge">
              <Sparkles size={14} className="mr-1 inline-block text-accent" />
              SIMULADOR DE SALA ORAL
            </div>
            <span className={`scm-hud-status ${isComplete ? 'status-ready' : ''}`}>
              {isComplete ? '✓ 100% OPERATIVA' : `${activeCount}/4 SISTEMAS`}
            </span>
          </div>

          <h3 className="scm-hud-title">
            {isComplete ? '¡Sala Oral Completa & Certificada!' : 'Selecciona Equipamiento para Integrar'}
          </h3>

          {/* Progress Bar */}
          <div className="scm-progress-bar-bg">
            <div 
              className="scm-progress-bar-fill" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Active Module Indicators */}
          <div className="scm-active-chips">
            {salaCategories.map(cat => {
              const isActive = activeCategories.has(cat.id);
              const detail = hardwareDetails[cat.id] || { title: cat.label };
              return (
                <div key={cat.id} className={`scm-chip ${isActive ? 'chip-on' : 'chip-off'}`}>
                  <span className="scm-chip-icon">{detail.icon}</span>
                  <span className="scm-chip-name">{detail.title.split(' ')[0]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tap-to-Add Hardware List */}
        <div className="scm-mobile-options-list">
          {salaCategories.map(cat => {
            const isActive = activeCategories.has(cat.id);
            const detail = hardwareDetails[cat.id] || { title: cat.label, desc: 'Sistema judicial.' };
            return (
              <div 
                key={cat.id} 
                className={`scm-mobile-card ${isActive ? 'card-active' : ''}`}
                onClick={() => toggleCategory(cat.id)}
              >
                <div className="scm-card-top">
                  <div className="scm-card-title-wrap">
                    <span className="scm-card-icon">{detail.icon}</span>
                    <div>
                      <h4 className="scm-card-title">{detail.title}</h4>
                      <span className="scm-card-subtitle">{isActive ? '✓ Módulo Instalado' : 'Pendiente de agregar'}</span>
                    </div>
                  </div>
                  <button className={`scm-toggle-btn ${isActive ? 'btn-active' : ''}`}>
                    {isActive ? (
                      <>
                        <CheckCircle2 size={16} className="mr-1 inline-block" />
                        INSTALADO
                      </>
                    ) : (
                      <>
                        <Plus size={16} className="mr-1 inline-block" />
                        AÑADIR
                      </>
                    )}
                  </button>
                </div>
                <p className="scm-card-desc">{detail.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA when complete */}
        {isComplete && (
          <div className="scm-mobile-complete-cta">
            <ShieldCheck size={20} className="text-accent mb-1 inline-block" />
            <h4>Configuración Lista para Cotizar</h4>
            <p>Has seleccionado la arquitectura completa de Misión Crítica para Sala Oral.</p>
            <Link to="/contacto?origen=salas" className="btn btn-primary w-full justify-center text-base py-3 mt-2">
              Solicitar Cotización de Esta Sala →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
