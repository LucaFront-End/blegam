import { useEffect, useState } from 'react';
import './IsometricHero.css';

const nodeData = {
  camera: { title: 'Captura Óptica', desc: 'Sistemas PTZ 4K y Gran Angular', color: '#12D4C9', pos: { x: 25, y: 35 } },
  rack: { title: 'Misión Crítica', desc: 'Almacenamiento y Procesamiento MASOD®', color: '#10b981', pos: { x: 50, y: 55 } },
  screen: { title: 'Justicia Digital', desc: 'Despliegue de Evidencias en Alta Resolución', color: '#f59e0b', pos: { x: 75, y: 35 } },
  cloud: { title: 'Nube Segura', desc: 'Respaldo Cifrado AES-256', color: '#8b5cf6', pos: { x: 50, y: 15 } }
};

export default function IsometricHero() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`isometric-assembler ${mounted ? 'animate' : ''}`}>
      
      {/* Interactive Floating Tooltip */}
      <div className={`iso-tooltip ${hovered ? 'visible' : ''}`} 
           style={{ 
             left: hovered ? `${nodeData[hovered].pos.x}%` : '50%',
             top: hovered ? `${nodeData[hovered].pos.y}%` : '50%',
             '--tt-color': hovered ? nodeData[hovered].color : '#12D4C9'
           }}>
        {hovered && (
          <>
            <div className="tt-header">
              <span className="tt-dot" />
              <h4>{nodeData[hovered].title}</h4>
            </div>
            <p>{nodeData[hovered].desc}</p>
          </>
        )}
      </div>

      <svg viewBox="0 0 800 600" className="iso-svg" preserveAspectRatio="xMidYMid meet">
        {/* Glow behind the whole structure to make it pop against white */}
        <ellipse cx="400" cy="400" rx="300" ry="150" fill="url(#floorGlow)" opacity="0.6" className="iso-floor-glow" />
        
        <defs>
          <radialGradient id="floorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#12D4C9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#12D4C9" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Decorative Grid Floor */}
        <g className="iso-grid-floor">
          <path d="M400,550 L100,400 L400,250 L700,400 Z" className="iso-grid-base" />
          <path d="M400,550 L100,400 L400,250 L700,400 Z" className="iso-grid-lines" />
        </g>

        {/* Central Hub (Server Rack) */}
        <g className={`iso-node iso-rack ${hovered === 'rack' ? 'is-hovered' : ''}`}
           onMouseEnter={() => setHovered('rack')}
           onMouseLeave={() => setHovered(null)}>
          <path d="M400,480 L320,440 L400,400 L480,440 Z" className="iso-shadow" />
          <path d="M400,450 L320,410 L400,370 L480,410 Z" className="iso-surface" />
          <path d="M320,410 L400,450 L400,250 L320,210 Z" className="iso-face-left" />
          <path d="M400,450 L480,410 L480,210 L400,250 Z" className="iso-face-right" />
          <path d="M400,250 L320,210 L400,170 L480,210 Z" className="iso-surface-top" />
          
          <g className="iso-blades">
            <line x1="410" y1="265" x2="470" y2="235" className="iso-blade" />
            <line x1="410" y1="285" x2="470" y2="255" className="iso-blade active" />
            <line x1="410" y1="305" x2="470" y2="275" className="iso-blade active-pulse" />
            <line x1="410" y1="325" x2="470" y2="295" className="iso-blade" />
            <line x1="410" y1="345" x2="470" y2="315" className="iso-blade active-pulse" />
            <line x1="410" y1="365" x2="470" y2="335" className="iso-blade" />
          </g>
          
          <g className="iso-ports">
            <circle cx="380" cy="280" r="3" className="iso-port" />
            <circle cx="360" cy="270" r="3" className="iso-port active" />
            <circle cx="340" cy="260" r="3" className="iso-port" />
          </g>
        </g>

        {/* Left Node (Camera) */}
        <g className={`iso-node iso-camera ${hovered === 'camera' ? 'is-hovered' : ''}`}
           onMouseEnter={() => setHovered('camera')}
           onMouseLeave={() => setHovered(null)}>
          <path d="M250,350 L190,320 L250,290 L310,320 Z" className="iso-shadow" />
          <path d="M250,320 L250,360 L320,395" className="iso-wire" />
          
          {/* Base Mount */}
          <path d="M250,320 L190,290 L250,260 L310,290 Z" className="iso-surface-top" />
          <path d="M190,290 L250,320 L250,270 L190,240 Z" className="iso-face-left" />
          <path d="M250,320 L310,290 L310,240 L250,270 Z" className="iso-face-right" />
          <path d="M250,270 L190,240 L250,210 L310,240 Z" className="iso-surface" />
          
          <ellipse cx="280" cy="265" rx="12" ry="18" className="iso-lens" transform="rotate(30 280 265)" />
          <circle cx="280" cy="265" r="4" className="iso-lens-core" />
        </g>

        {/* Right Node (Screen) */}
        <g className={`iso-node iso-screen ${hovered === 'screen' ? 'is-hovered' : ''}`}
           onMouseEnter={() => setHovered('screen')}
           onMouseLeave={() => setHovered(null)}>
          <path d="M550,350 L490,320 L550,290 L610,320 Z" className="iso-shadow" />
          <path d="M550,320 L550,360 L480,395" className="iso-wire" />
          
          <path d="M550,310 L490,280 L550,250 L610,280 Z" className="iso-surface-top" />
          <path d="M490,280 L550,310 L550,210 L490,180 Z" className="iso-face-left active-screen" />
          <path d="M550,310 L610,280 L610,180 L550,210 Z" className="iso-face-right" />
          <path d="M550,210 L490,180 L550,150 L610,180 Z" className="iso-surface" />
          
          {/* Screen Content Graphic showing chart/data */}
          <path d="M500,260 L540,280 L540,230 L500,210 Z" className="iso-screen-bg" />
          <polyline points="505,240 515,225 525,245 535,220" className="iso-screen-chart" fill="none" />
          <circle cx="535" cy="220" r="2" className="iso-screen-dot" />
        </g>

        {/* Top Node (Cloud) */}
        <g className={`iso-node iso-cloud ${hovered === 'cloud' ? 'is-hovered' : ''}`}
           onMouseEnter={() => setHovered('cloud')}
           onMouseLeave={() => setHovered(null)}>
          <path d="M400,170 L400,120" className="iso-wire" />
          
          <path d="M400,120 L340,90 L400,60 L460,90 Z" className="iso-surface-top cloud-glow" />
          <path d="M340,90 L400,120 L400,100 L340,70 Z" className="iso-face-left" />
          <path d="M400,120 L460,90 L460,70 L400,100 Z" className="iso-face-right" />
          <path d="M400,100 L340,70 L400,40 L460,70 Z" className="iso-surface" />

          {/* Floating Data Rings */}
          <ellipse cx="400" cy="55" rx="40" ry="20" className="iso-ring" />
          <ellipse cx="400" cy="45" rx="55" ry="27.5" className="iso-ring delay-1" />
          <ellipse cx="400" cy="35" rx="70" ry="35" className="iso-ring delay-2" />
        </g>

        {/* Animated Data Packets */}
        <g className="iso-data-packets">
          <circle cx="250" cy="320" r="5" className="iso-packet packet-1" />
          <circle cx="480" cy="395" r="5" className="iso-packet packet-2" />
          <circle cx="400" cy="170" r="5" className="iso-packet packet-3" />
        </g>

        {/* Background particles */}
        <g className="iso-particles">
          <circle cx="200" cy="150" r="3" className="iso-particle p-1" />
          <circle cx="650" cy="120" r="4" className="iso-particle p-2" />
          <circle cx="700" cy="400" r="2" className="iso-particle p-3" />
          <circle cx="150" cy="450" r="3" className="iso-particle p-4" />
        </g>
      </svg>
    </div>
  );
}
