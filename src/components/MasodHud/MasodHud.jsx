import { useEffect, useState } from 'react';
import './MasodHud.css';

export default function MasodHud() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 100);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', { hour12: false }) + ':' + date.getMilliseconds().toString().padStart(3, '0').slice(0, 2);
  };

  return (
    <div className="masod-hud-wrapper">
      <div className="masod-hud-container">
        
        {/* Header */}
        <header className="mh-header">
          <div className="mh-logo">MASOD <span className="version">v4.0</span></div>
          <div className="mh-status">
            <div className="status-rec">
              <span className="rec-dot"></span> REC
            </div>
            <div className="status-time">{formatTime(time)}</div>
          </div>
          <div className="mh-meta">
            <span className="meta-tag">SALA 04</span>
            <span className="meta-tag hash">AES-256</span>
          </div>
        </header>

        {/* Body */}
        <div className="mh-body">
          
          {/* Left: Multicam Streams */}
          <aside className="mh-sidebar-left">
            <div className="mh-panel-title">FEEDS (4)</div>
            <div className="mh-feeds-grid">
              <div className="mh-feed active"><span className="feed-lbl">CAM 1 - JUEZ</span></div>
              <div className="mh-feed"><span className="feed-lbl">CAM 2 - FISCAL</span></div>
              <div className="mh-feed"><span className="feed-lbl">CAM 3 - DEFENSA</span></div>
              <div className="mh-feed"><span className="feed-lbl">CAM 4 - EVIDENCIA</span></div>
            </div>
          </aside>

          {/* Center: Main View & Waveform */}
          <main className="mh-main-view">
            <div className="mh-video-feed">
              <div className="feed-crosshair ch-tl"></div>
              <div className="feed-crosshair ch-tr"></div>
              <div className="feed-crosshair ch-bl"></div>
              <div className="feed-crosshair ch-br"></div>
              
              <div className="tracking-box">
                <span className="tb-label">VOCAL_TRACKING: ACTIVE</span>
              </div>
            </div>
            
            <div className="mh-waveform-panel">
              <div className="mh-panel-title">DSP AUDIO LEVEL</div>
              <div className="waveform-bars">
                {[...Array(60)].map((_, i) => (
                  <div key={i} className="w-bar" style={{ animationDelay: `${Math.random() * 0.5}s` }}></div>
                ))}
              </div>
            </div>
          </main>

          {/* Right: Event Log */}
          <aside className="mh-sidebar-right">
            <div className="mh-panel-title">INDEXACIÓN EN VIVO</div>
            <div className="mh-log-list">
              <div className="mh-log-item">
                <span className="log-time">[10:14:02]</span>
                <span className="log-event">Apertura de Audiencia</span>
              </div>
              <div className="mh-log-item">
                <span className="log-time">[10:15:30]</span>
                <span className="log-event highlight">Intervención: Fiscal</span>
              </div>
              <div className="mh-log-item">
                <span className="log-time">[10:18:45]</span>
                <span className="log-event">Presentación Evidencia A</span>
              </div>
              <div className="mh-log-item active">
                <span className="log-time">[{formatTime(time).slice(0, 8)}]</span>
                <span className="log-event typing">Esperando...</span>
              </div>
            </div>
            
            <div className="mh-hash-panel">
              <div className="mh-panel-title">FIRMA DIGITAL</div>
              <div className="hash-code">
                0x8F4A2B...99C1E5
                <div className="hash-scan-line"></div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
