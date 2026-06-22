import React, { useEffect, useRef } from 'react';

export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -300, y: -300 });
  const smooth = useRef({ x: -300, y: -300 });
  const trail = useRef<{ x: number; y: number; t: number }[]>([]);
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

    const onMove = (e: MouseEvent) => {
      visible.current = true;
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => { visible.current = false; };
    const onEnter = () => { visible.current = true; };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const MAX_AGE = 1000;
    let lastTs = performance.now();

    const draw = (now: number) => {
      const dt = Math.min(now - lastTs, 40);
      lastTs = now;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (visible.current) {
        // Frame-rate-independent lerp — gives the smooth "elastic" lag
        const factor = 1 - Math.pow(0.88, dt / 16);
        smooth.current.x = lerp(smooth.current.x, mouse.current.x, factor);
        smooth.current.y = lerp(smooth.current.y, mouse.current.y, factor);

        // Accumulate trail from the smoothed position (not raw mouse)
        const prev = trail.current[trail.current.length - 1];
        const dx = smooth.current.x - (prev?.x ?? smooth.current.x);
        const dy = smooth.current.y - (prev?.y ?? smooth.current.y);
        if (!prev || dx * dx + dy * dy > 3) {
          trail.current.push({ x: smooth.current.x, y: smooth.current.y, t: now });
        }
        trail.current = trail.current.filter(p => now - p.t < MAX_AGE);

        const pts = trail.current;

        // Draw smooth ribbon using quadratic bezier through midpoints (catmull-rom style)
        if (pts.length > 2) {
          for (let i = 1; i < pts.length - 1; i++) {
            const age = now - pts[i].t;
            const p = Math.pow(1 - age / MAX_AGE, 1.8);
            const alpha = p * 0.6;
            const width = p * 9;

            // Midpoint bezier keeps the line glassy-smooth
            const mx0 = (pts[i - 1].x + pts[i].x) / 2;
            const my0 = (pts[i - 1].y + pts[i].y) / 2;
            const mx1 = (pts[i].x + pts[i + 1].x) / 2;
            const my1 = (pts[i].y + pts[i + 1].y) / 2;

            ctx.beginPath();
            ctx.moveTo(mx0, my0);
            ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx1, my1);
            ctx.strokeStyle = `rgba(211,145,176,${alpha})`;
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.shadowColor = `rgba(211,145,176,${alpha * 0.5})`;
            ctx.shadowBlur = width * 2;
            ctx.stroke();
          }
          ctx.shadowBlur = 0;
        }

        // Outer glow halo at smooth cursor position
        const grd = ctx.createRadialGradient(
          smooth.current.x, smooth.current.y, 0,
          smooth.current.x, smooth.current.y, 22
        );
        grd.addColorStop(0, 'rgba(211,145,176,0.95)');
        grd.addColorStop(0.35, 'rgba(186,110,143,0.55)');
        grd.addColorStop(1, 'rgba(159,100,150,0)');
        ctx.beginPath();
        ctx.arc(smooth.current.x, smooth.current.y, 22, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.shadowColor = 'rgba(211,145,176,0.7)';
        ctx.shadowBlur = 28;
        ctx.fill();

        // Bright core dot
        ctx.beginPath();
        ctx.arc(smooth.current.x, smooth.current.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#D391B0';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
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
