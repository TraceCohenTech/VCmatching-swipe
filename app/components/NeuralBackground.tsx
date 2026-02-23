"use client";

import { useEffect, useRef } from "react";

interface Particle {
  index: number;
  total: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: { x: number; y: number }[];
  layer: number;
  angle: number;
  radius: number;
  pulseOffset: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let centerX = width / 2;
    let centerY = height / 2;

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles in neural network pattern
    const particleCount = 80;
    const layers = 5;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const layer = Math.floor(i / (particleCount / layers));
      const nodeInLayer = (i % (particleCount / layers)) / (particleCount / layers);
      const layerRadius = (layer / layers) * Math.min(width, height) * 0.35 + 80;
      const angle = nodeInLayer * Math.PI * 2 + layer * 0.5;

      particles.push({
        index: i,
        total: particleCount,
        x: centerX + Math.cos(angle) * layerRadius,
        y: centerY + Math.sin(angle) * layerRadius,
        vx: 0,
        vy: 0,
        trail: [],
        layer,
        angle,
        radius: layerRadius,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    particlesRef.current = particles;

    const animate = () => {
      timeRef.current += 0.008;
      const t = timeRef.current;

      // Fade effect for trails
      ctx.fillStyle = "rgba(5, 10, 20, 0.15)";
      ctx.fillRect(0, 0, width, height);

      // Update particle positions
      particles.forEach((p) => {
        const pulse = Math.sin(t * 2 + p.pulseOffset) * 0.15 + 1;
        const wobble = Math.sin(t * 3 + p.index * 0.3) * 15;
        const newAngle = p.angle + t * 0.3;

        const targetX = centerX + Math.cos(newAngle) * p.radius * pulse + wobble;
        const targetY = centerY + Math.sin(newAngle) * p.radius * pulse + wobble * 0.5;

        // Smooth movement
        p.vx = (targetX - p.x) * 0.02;
        p.vy = (targetY - p.y) * 0.02;
        p.x += p.vx;
        p.y += p.vy;

        // Update trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 20) p.trail.shift();
      });

      // Draw connections between nearby particles
      ctx.lineCap = "round";
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect particles within range
          const maxDist = 150;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.4;

            // Color based on layer blend
            const hue1 = 180 + p1.layer * 25; // cyan to purple
            const hue2 = 180 + p2.layer * 25;
            const hue = (hue1 + hue2) / 2 + Math.sin(t * 2) * 10;

            // Animated pulse along the connection
            const pulsePos = (Math.sin(t * 4 + i * 0.1) + 1) / 2;

            // Draw the connection line
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `hsla(${hue}, 100%, 60%, ${alpha * 0.3})`);
            gradient.addColorStop(pulsePos, `hsla(${hue}, 100%, 80%, ${alpha})`);
            gradient.addColorStop(1, `hsla(${hue}, 100%, 60%, ${alpha * 0.3})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Draw traveling signal dot
            if (Math.random() < 0.01) {
              const signalX = p1.x + dx * pulsePos;
              const signalY = p1.y + dy * pulsePos;

              ctx.fillStyle = `hsla(${hue}, 100%, 90%, ${alpha * 2})`;
              ctx.beginPath();
              ctx.arc(signalX, signalY, 3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw particle trails
      particles.forEach((p) => {
        if (p.trail.length < 2) return;

        const hue = 180 + p.layer * 25 + Math.sin(t + p.index * 0.1) * 15;

        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);

        for (let i = 1; i < p.trail.length; i++) {
          const alpha = (i / p.trail.length) * 0.3;
          ctx.strokeStyle = `hsla(${hue}, 100%, 60%, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.lineTo(p.trail[i].x, p.trail[i].y);
        }
        ctx.stroke();
      });

      // Draw particles with glow
      particles.forEach((p) => {
        const hue = 180 + p.layer * 25 + Math.sin(t * 2 + p.index * 0.1) * 15;
        const pulse = Math.sin(t * 3 + p.pulseOffset) * 0.3 + 1;
        const size = (6 + p.layer * 2) * pulse;

        // Outer glow
        ctx.shadowBlur = 25;
        ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.8)`;

        // Particle gradient
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        gradient.addColorStop(0, `hsla(${hue}, 100%, 95%, 1)`);
        gradient.addColorStop(0.3, `hsla(${hue}, 100%, 70%, 0.9)`);
        gradient.addColorStop(0.6, `hsla(${hue}, 100%, 50%, 0.5)`);
        gradient.addColorStop(1, `hsla(${hue}, 100%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      // Add occasional "spark" connections
      if (Math.random() < 0.05) {
        const p1 = particles[Math.floor(Math.random() * particles.length)];
        const p2 = particles[Math.floor(Math.random() * particles.length)];

        if (p1 !== p2) {
          const hue = 200 + Math.random() * 60;
          ctx.strokeStyle = `hsla(${hue}, 100%, 80%, 0.6)`;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 20;
          ctx.shadowColor = `hsla(${hue}, 100%, 70%, 1)`;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);

          // Curved connection
          const midX = (p1.x + p2.x) / 2 + (Math.random() - 0.5) * 50;
          const midY = (p1.y + p2.y) / 2 + (Math.random() - 0.5) * 50;
          ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
          ctx.stroke();

          ctx.shadowBlur = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: "linear-gradient(135deg, #050a14 0%, #0a1628 50%, #050a14 100%)" }}
    />
  );
}
