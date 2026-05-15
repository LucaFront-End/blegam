import { useState } from 'react';
import { salaTypes } from '../../data/content';
import './TacticalRoomTabs.css';

export default function TacticalRoomTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabClick = (index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 200); // Fast tactical switch
  };

  const activeRoom = salaTypes[activeIndex];

  return (
    <div className="trt-container">
      {/* LEFT: Tactical Buttons */}
      <div className="trt-sidebar">
        {salaTypes.map((type, i) => (
          <button 
            key={i} 
            className={`trt-tab-btn ${activeIndex === i ? 'active' : ''}`}
            onClick={() => handleTabClick(i)}
          >
            <span className="trt-btn-icon">{type.icon}</span>
            <span className="trt-btn-text">{type.title}</span>
          </button>
        ))}
      </div>

      {/* RIGHT: Display Panel */}
      <div className="trt-display-panel glass-card">
        <div className={`trt-display-content ${isTransitioning ? 'fading' : ''}`}>
          
          <div className="trt-display-header">
            <div className="trt-header-icon">{activeRoom.icon}</div>
            <div className="trt-header-text">
              <span className="trt-system-label">SYS_CONFIG: ACTIVE</span>
              <h3>{activeRoom.title}</h3>
            </div>
          </div>
          
          <p className="trt-description">{activeRoom.description}</p>
          
          <div className="trt-specs-grid">
            {activeRoom.specs.map((spec, j) => (
              <div key={j} className="trt-spec-item">
                <svg width="16" height="16" fill="none" stroke="var(--accent-primary)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{spec}</span>
              </div>
            ))}
          </div>

          {/* Blueprint decorations */}
          <div className="trt-blueprint-deco">
             <div className="bd-line"></div>
             <div className="bd-line"></div>
             <div className="bd-line"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
