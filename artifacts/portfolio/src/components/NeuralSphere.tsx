import React, { useEffect, useRef } from 'react';

interface SpherePoint {
  x: number; y: number; z: number;
  ox: number; oy: number; oz: number;
}

export function NeuralSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) * 0.38;

    // Fibonacci sphere distribution
    const N = 110;
    const points: SpherePoint[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      points.push({ x, y, z, ox: x, oy: y, oz: z });
    }

    const MAX_EDGE = 0.45;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const a = angleRef.current;
      const cos = Math.cos(a);
      const sin = Math.sin(a);
      const cosT = Math.cos(a * 0.4);
      const sinT = Math.sin(a * 0.4);

      // Rotate points
      for (const p of points) {
        // Y-axis rotation
        const x1 = p.ox * cos - p.oz * sin;
        const z1 = p.ox * sin + p.oz * cos;
        // X-axis tilt
        const y2 = p.oy * cosT - z1 * sinT;
        const z2 = p.oy * sinT + z1 * cosT;
        p.x = x1; p.y = y2; p.z = z2;
      }

      // Sort by z (painter's algorithm)
      const sorted = [...points].sort((a, b) => a.z - b.z);

      // Draw edges first
      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i];
          const b = sorted[j];
          const dist = Math.sqrt(
            (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2
          );
          if (dist < MAX_EDGE) {
            const avgZ = (a.z + b.z) / 2;
            const fade = (avgZ + 1) / 2; // 0 (back) → 1 (front)
            const proximityAlpha = (1 - dist / MAX_EDGE) * 0.55 * (0.3 + fade * 0.7);

            const ax = cx + a.x * R;
            const ay = cy + a.y * R;
            const bx = cx + b.x * R;
            const by = cy + b.y * R;

            const grad = ctx.createLinearGradient(ax, ay, bx, by);
            grad.addColorStop(0, `rgba(211,145,176,${proximityAlpha})`);
            grad.addColorStop(0.5, `rgba(159,100,150,${proximityAlpha * 1.3})`);
            grad.addColorStop(1, `rgba(186,110,143,${proximityAlpha})`);

            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const p of sorted) {
        const px = cx + p.x * R;
        const py = cy + p.y * R;
        const depth = (p.z + 1) / 2;
        const radius = 1.2 + depth * 2.2;
        const alpha = 0.25 + depth * 0.75;

        const grd = ctx.createRadialGradient(px, py, 0, px, py, radius * 2.5);
        grd.addColorStop(0, `rgba(211,145,176,${alpha})`);
        grd.addColorStop(0.4, `rgba(186,110,143,${alpha * 0.6})`);
        grd.addColorStop(1, 'rgba(211,145,176,0)');

        ctx.beginPath();
        ctx.arc(px, py, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      // Outer glow ring
      const ringGrd = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.15);
      ringGrd.addColorStop(0, 'rgba(211,145,176,0)');
      ringGrd.addColorStop(0.5, 'rgba(211,145,176,0.04)');
      ringGrd.addColorStop(1, 'rgba(211,145,176,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(211,145,176,0.08)';
      ctx.lineWidth = R * 0.3;
      ctx.stroke();

      angleRef.current += 0.004;
      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ opacity: 0.75 }}
      aria-hidden="true"
    />
  );
}
