import { useEffect, useRef } from 'react';
import './VoiceWaveform.css';

export default function VoiceWaveform() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let time = 0;
    
    const resize = () => {
      // Set canvas to match its container exactly
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      // Map mouse coordinates to be relative to the canvas
      mouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };
    
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    // Smooth out the random jitter so it looks like real audio peaks
    let targetHeights = new Array(150).fill(0);
    let currentHeights = new Array(150).fill(0);
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const totalBars = Math.min(150, Math.floor(canvas.width / 12));
      const barWidth = canvas.width / totalBars;
      // Center the waveform vertically inside its 250px container
      const centerY = canvas.height / 2 + 20; 
      
      for (let i = 0; i < totalBars; i++) {
        const x = i * barWidth;
        const normalizedX = i / totalBars;
        
        // Base sine wave for organic ambient shape
        const baseSin = Math.sin(normalizedX * Math.PI * 4 + time * 0.02);
        const baseSin2 = Math.sin(normalizedX * Math.PI * 2 - time * 0.04);
        const envelope = Math.sin(normalizedX * Math.PI); // Taper edges
        
        // Base ambient height
        let target = (Math.abs(baseSin) * 30 + Math.abs(baseSin2) * 15) * envelope;
        
        // Mouse interaction
        const distX = Math.abs(x - mouseRef.current.x);
        const distY = Math.abs(centerY - mouseRef.current.y);
        
        const influenceX = Math.max(0, 400 - distX) / 400; 
        const influenceY = Math.max(0, 300 - distY) / 300;
        
        const influence = influenceX * (influenceY + 0.2); 
        
        if (influence > 0) {
           const jitter = Math.sin(time * 0.5 + i) * Math.random() * 80;
           target += influence * (80 + Math.abs(jitter));
        }
        
        // Smooth interpolation for fluid audio peaks
        currentHeights[i] += (target - (currentHeights[i] || 0)) * 0.15;
        
        const finalHeight = Math.max(4, currentHeights[i]); 
        
        // Draw the bar
        const gradient = ctx.createLinearGradient(0, centerY - finalHeight, 0, centerY + finalHeight);
        gradient.addColorStop(0, 'rgba(18, 212, 201, 0.02)'); 
        gradient.addColorStop(0.5, 'rgba(18, 212, 201, 0.95)'); 
        gradient.addColorStop(1, 'rgba(18, 212, 201, 0.02)'); 
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        if(ctx.roundRect) {
            ctx.roundRect(x + (barWidth * 0.2), centerY - finalHeight, barWidth * 0.6, finalHeight * 2, 50);
        } else {
            ctx.rect(x + (barWidth * 0.2), centerY - finalHeight, barWidth * 0.6, finalHeight * 2);
        }
        ctx.fill();
      }
      
      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="voice-waveform-container">
      <canvas ref={canvasRef} className="voice-canvas" />
      <div className="waveform-overlay-top" />
      <div className="waveform-overlay-bottom" />
    </div>
  );
}
