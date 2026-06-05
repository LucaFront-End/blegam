import { useState, useEffect } from 'react';
import { testimonials } from '../../data/content';
import './TestimonialsCarousel.css';

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <span className="section-label">Testimonios</span>
        <h2 className="section-title">
          Lo que Dicen Nuestros <span className="accent">Clientes</span>
        </h2>

        <div className="testi-carousel">
          <div className="testi-track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testi-slide">
                <div className="testi-card glass-card">
                  <div className="testi-quote-mark">"</div>
                  <blockquote className="testi-quote">{t.quote}</blockquote>
                  <div className="testi-author">
                    <div className="testi-avatar">
                      {t.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                  <div className="testi-stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="testi-star">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testi-dot ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
