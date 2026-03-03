"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
}

const COLS = 28;
const ROWS = 18;
const MOUSE_RADIUS = 180;
const REPEL_STRENGTH = 0.38;
const SPRING = 0.06;
const DAMPING = 0.78;

export default function InteractiveHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const buildGrid = () => {
      const W = canvas.width;
      const H = canvas.height;
      const dots: Dot[] = [];
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const bx = (col / (COLS - 1)) * W;
          const by = (row / (ROWS - 1)) * H;
          const edge = Math.min(col, COLS - 1 - col, row, ROWS - 1 - row);
          const baseOpacity = 0.08 + Math.min(edge / 6, 1) * 0.3;
          dots.push({
            x: bx,
            y: by,
            baseX: bx,
            baseY: by,
            vx: 0,
            vy: 0,
            size: 1.5,
            opacity: baseOpacity,
            baseOpacity,
          });
        }
      }
      dotsRef.current = dots;
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildGrid();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const dot of dotsRef.current) {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Mouse push force
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * REPEL_STRENGTH;
          dot.vx += (dx / dist) * force * 14;
          dot.vy += (dy / dist) * force * 14;
        }

        // Spring back to origin
        dot.vx += (dot.baseX - dot.x) * SPRING;
        dot.vy += (dot.baseY - dot.y) * SPRING;

        // Damping
        dot.vx *= DAMPING;
        dot.vy *= DAMPING;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Opacity pulse near cursor
        const proximity = Math.max(0, 1 - dist / MOUSE_RADIUS);
        dot.opacity = dot.baseOpacity + proximity * 0.6;

        // Draw dot
        const displacement = Math.sqrt(
          (dot.x - dot.baseX) ** 2 + (dot.y - dot.baseY) ** 2,
        );
        const glow = Math.min(displacement / 12, 1);
        const r = Math.round(255 * (1 - glow * 0.1));
        const g = Math.round(234 - glow * 150);
        const b = Math.round(84 * (1 - glow));

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size + glow * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(dot.opacity, 0.95)})`;
        ctx.fill();
      }

      // Draw connecting lines between nearby displaced dots
      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 70) {
            const disp =
              Math.sqrt((a.x - a.baseX) ** 2 + (a.y - a.baseY) ** 2) +
              Math.sqrt((b.x - b.baseX) ** 2 + (b.y - b.baseY) ** 2);
            if (disp > 2) {
              const alpha = (1 - d / 70) * Math.min(disp / 20, 1) * 0.25;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(255,220,80,${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}
