import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { salaTypes } from '../../data/content';
import './TacticalRoomTabs.css';

export default function TacticalRoomTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState(0);

  const handleTabClick = (index) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const toggleMobileAccordion = (index) => {
    setOpenMobileIndex(openMobileIndex === index ? null : index);
  };

  const activeRoom = salaTypes[activeIndex];

  return (
    <>
      {/* DESKTOP VIEW: Sidebar + Display Panel */}
      <div className="trt-container hp-desktop-only">
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

      {/* MOBILE VIEW: Clean Vertical Accordion List */}
      <div className="trt-mobile-accordion hp-mobile-only">
        {salaTypes.map((type, i) => {
          const isOpen = openMobileIndex === i;
          return (
            <div key={i} className={`trt-mobile-card ${isOpen ? 'active-mobile-card' : ''}`}>
              <button 
                className="trt-mobile-card-header"
                onClick={() => toggleMobileAccordion(i)}
              >
                <div className="trt-mobile-header-left">
                  <span className="trt-mobile-icon">{type.icon}</span>
                  <span className="trt-mobile-title">{type.title}</span>
                </div>
                <div className="trt-mobile-chevron">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              {isOpen && (
                <div className="trt-mobile-card-body">
                  <p className="trt-mobile-desc">{type.description}</p>
                  <div className="trt-mobile-specs-list">
                    {type.specs.map((spec, j) => (
                      <div key={j} className="trt-mobile-spec-row">
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
