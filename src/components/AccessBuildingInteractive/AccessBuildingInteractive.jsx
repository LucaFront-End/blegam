import { useState } from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  Fingerprint, 
  ScanFace, 
  Monitor, 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Lock,
  Layers
} from 'lucide-react';
import './AccessBuildingInteractive.css';

const ICON_MAP = {
  ShieldCheck: ShieldCheck,
  CreditCard: CreditCard,
  Fingerprint: Fingerprint,
  ScanFace: ScanFace,
  Monitor: Monitor
};

export default function AccessBuildingInteractive({ zones }) {
  const [selectedId, setSelectedId] = useState('entrada');

  const selectedZone = zones.find((z) => z.id === selectedId) || zones[0];
  const ActiveIcon = ICON_MAP[selectedZone.icon] || ShieldCheck;

  return (
    <div className="building-interactive-wrapper">
      <div className="building-interactive-header text-center">
        <span className="badge badge-accent mb-3">
          <Zap size={14} className="mr-1" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
          Simulador Arquitectónico Interactivo
        </span>
        <h3 className="building-interactive-title">
          Explora los Puntos de Control en un <span className="accent-gradient">Edificio Corporativo</span>
        </h3>
        <p className="building-interactive-subtitle">
          Haz clic en cada punto del inmueble para ver la tecnología integrada, el método de validación y los usos recomendados.
        </p>
      </div>

      <div className="building-interactive-grid">
        {/* Visual Building Diagram Side */}
        <div className="building-diagram-container">
          <div className="building-diagram-frame">
            {/* Background Grid Pattern */}
            <div className="building-bg-grid" />
            
            {/* Header Status Bar */}
            <div className="building-status-bar">
              <div className="status-indicator">
                <span className="status-dot pulsing" />
                <span className="status-text">SISTEMA CONTROL DE ACCESOS ACTIVO — BLEGAM OS</span>
              </div>
              <div className="status-meta">
                <Layers size={14} /> 5 Zonas Monitoreadas
              </div>
            </div>

            {/* Building Floor Representation */}
            <div className="building-floors-stack">
              {/* Top Floor: Monitoreo & Servidores */}
              <div className={`building-floor floor-top ${selectedId === 'monitoreo' ? 'active-floor' : ''}`}>
                <div className="floor-label">Nivel 4 — Penthouse & TI</div>
                <div className="floor-room">
                  <span className="room-tag">Centro de Monitoreo & Servidores</span>
                </div>
              </div>

              {/* High Security Floor */}
              <div className={`building-floor floor-high ${selectedId === 'restringida' ? 'active-floor' : ''}`}>
                <div className="floor-label">Nivel 3 — Bóveda & Dirección</div>
                <div className="floor-room">
                  <span className="room-tag">Área Restringida Biométrica</span>
                </div>
              </div>

              {/* Office Floor */}
              <div className={`building-floor floor-mid ${selectedId === 'oficinas' ? 'active-floor' : ''}`}>
                <div className="floor-label">Nivel 2 — Oficinas & Departamentos</div>
                <div className="floor-room">
                  <span className="room-tag">Acceso Huella Dactilar</span>
                </div>
              </div>

              {/* Reception Floor */}
              <div className={`building-floor floor-lobby ${selectedId === 'recepcion' ? 'active-floor' : ''}`}>
                <div className="floor-label">Nivel 1 — Lobby & Visitantes</div>
                <div className="floor-room">
                  <span className="room-tag">Módulo RFID / Tarjetas</span>
                </div>
              </div>

              {/* Main Entrance Floor */}
              <div className={`building-floor floor-ground ${selectedId === 'entrada' ? 'active-floor' : ''}`}>
                <div className="floor-label">Planta Baja — Perímetro</div>
                <div className="floor-room">
                  <span className="room-tag">Torniquetes de Flujo Continuo</span>
                </div>
              </div>
            </div>

            {/* Interactive Node Buttons Overlay */}
            <div className="building-hotspots">
              {zones.map((zone, index) => {
                const IconComponent = ICON_MAP[zone.icon] || ShieldCheck;
                const isSelected = zone.id === selectedId;

                return (
                  <button
                    key={zone.id}
                    className={`hotspot-btn hotspot-${zone.id} ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedId(zone.id)}
                    aria-label={`Seleccionar ${zone.name}`}
                  >
                    <span className="hotspot-pulse" />
                    <span className="hotspot-badge">{index + 1}</span>
                    <IconComponent size={18} className="hotspot-icon" />
                    <span className="hotspot-tooltip">{zone.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Zone Detail Panel */}
        <div className="building-detail-panel">
          <div className="zone-card">
            <div className="zone-card-header">
              <div className="zone-icon-box">
                <ActiveIcon size={32} className="zone-icon" />
              </div>
              <div>
                <span className="zone-number-tag">Punto Control #{zones.findIndex(z => z.id === selectedId) + 1}</span>
                <h4 className="zone-title">{selectedZone.name}</h4>
                <span className="zone-subtitle">{selectedZone.subtitle}</span>
              </div>
            </div>

            <div className="zone-card-body">
              <div className="zone-tech-box">
                <span className="tech-label">Tecnología BLEGAM Implementada:</span>
                <div className="tech-value">
                  <Lock size={16} className="text-accent mr-2" />
                  {selectedZone.tech}
                </div>
              </div>

              <p className="zone-description">
                {selectedZone.desc}
              </p>

              <div className="zone-usecase">
                <span className="usecase-title">Recomendado para:</span>
                <p className="usecase-text">{selectedZone.recommendedFor}</p>
              </div>

              <div className="zone-benefits-list">
                <div className="benefit-item">
                  <CheckCircle2 size={16} className="benefit-check" />
                  <span>Monitoreo centralizado y bitácora automatizada</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle2 size={16} className="benefit-check" />
                  <span>Protocolos anti-passback y fail-safe de emergencia</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle2 size={16} className="benefit-check" />
                  <span>Integración nativa con cámaras CCTV y alarmas</span>
                </div>
              </div>
            </div>

            <div className="zone-card-footer">
              <div className="zone-nav-buttons">
                {zones.map((z, idx) => (
                  <button
                    key={z.id}
                    className={`zone-chip ${z.id === selectedId ? 'active' : ''}`}
                    onClick={() => setSelectedId(z.id)}
                  >
                    0{idx + 1}. {z.id.toUpperCase()}
                  </button>
                ))}
              </div>
              <a href="#contacto" className="btn btn-sm btn-primary w-full mt-4 justify-center">
                Cotizar esta Solución <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
