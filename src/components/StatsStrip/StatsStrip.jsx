import { useEffect, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stats as statsData } from '../../data/content';
import './StatsStrip.css';

export default function StatsStrip() {
  const ref = useScrollReveal();

  return (
    <section className="stats-strip" ref={ref}>
      <div className="stats-strip-inner container reveal">
        {statsData.map((stat, i) => (
          <StatItem key={i} stat={stat} delay={i * 150} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ stat, delay }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Slight delay to trigger animation when it scrolls into view
    const timer = setTimeout(() => {
      setInView(true);
    }, 100 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="stat-item">
      <div className="stat-value">
        <Odometer value={stat.value} trigger={inView} />
        {stat.suffix && (
          <span className={`stat-suffix ${inView ? 'visible' : ''}`}>
            {stat.suffix}
          </span>
        )}
      </div>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

function Odometer({ value, trigger }) {
  const valueStr = value.toString();
  const digits = valueStr.split('');

  return (
    <div className="odometer">
      {digits.map((digit, i) => {
        const num = parseInt(digit, 10);
        return (
          <div key={i} className="odo-digit">
            <div 
              className="odo-digit-track" 
              style={{ 
                transform: trigger ? `translateY(-${num * 10}%)` : `translateY(0)`,
                transitionDuration: `${1.8 + (i * 0.3)}s`
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                <div key={d} className="odo-num">{d}</div>
              ))}
            </div>
            {/* Glossy overlay for realism */}
            <div className="odo-glass-overlay" />
          </div>
        );
      })}
    </div>
  );
}
