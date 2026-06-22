import React, { useEffect, useRef } from 'react';

export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; t: number }[]>([]);
  const rafRef = useRef<number>(0);
  const visible = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMove = (e: MouseEvent) => {
      visible.current = true;
      points.current.push({ x: e.clientX, y: e.clientY, t: Date.now() });
      if (points.current.length > 80) points.current.shift();
    };
    const handleLeave = () => { visible.current = false; };
    const handleEnter = () => { visible.current = true; };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (visible.current) {
        const now = Date.now();
        const maxAge = 700;
        const pts = points.current.filter(p => now - p.t < maxAge);

        if (pts.length > 1) {
          for (let i = 1; i < pts.length; i++) {
            const age = now - pts[i].t;
            const progress = Math.pow(1 - age / maxAge, 1.4);
            const alpha = progress * 0.72;
            const width = progress * 7;

            ctx.beginPath();
            ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
            ctx.lineTo(pts[i].x, pts[i].y);
            ctx.strokeStyle = `rgba(211,145,176,${alpha})`;
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.shadowColor = 'rgba(211,145,176,0.6)';
            ctx.shadowBlur = width * 3;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        if (pts.length > 0) {
          const last = pts[pts.length - 1];
          const grd = ctx.createRadialGradient(last.x, last.y, 0, last.x, last.y, 18);
          grd.addColorStop(0, 'rgba(211,145,176,1)');
          grd.addColorStop(0.35, 'rgba(186,110,143,0.65)');
          grd.addColorStop(1, 'rgba(159,100,150,0)');
          ctx.beginPath();
          ctx.arc(last.x, last.y, 18, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.shadowColor = 'rgba(211,145,176,0.9)';
          ctx.shadowBlur = 20;
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.beginPath();
          ctx.arc(last.x, last.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#D391B0';
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  );
}
