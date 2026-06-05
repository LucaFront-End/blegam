import { useEffect, useRef, useState } from 'react';
import { timeline } from '../../data/content';
import './AnimatedTimeline.css';

export default function AnimatedTimeline() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex((prev) => Math.max(prev, idx));
          }
        });
      },
      { threshold: 0.4, rootMargin: '0px 0px -100px 0px' }
    );

    container.querySelectorAll('.tl-node').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const progress = timeline.length > 0 ? ((activeIndex + 1) / timeline.length) * 100 : 0;

  return (
    <section className="timeline-section">
      <div className="container">
        <span className="section-label">Nuestra Historia</span>
        <h2 className="section-title">
          Más de una <span className="accent">Década</span> de Innovación
        </h2>

        <div className="timeline-container" ref={containerRef}>
          {/* The animated line */}
          <div className="tl-track">
            <div className="tl-track-fill" ref={lineRef} style={{ height: `${progress}%` }} />
          </div>

          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`tl-node ${i <= activeIndex ? 'active' : ''}`}
              data-index={i}
            >
              <div className="tl-node-dot">
                <div className="tl-dot-inner" />
                <div className="tl-dot-ring" />
              </div>

              <div className="tl-node-content">
                <span className="tl-year">{item.year}</span>
                <h3 className="tl-title">{item.title}</h3>
                <p className="tl-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
