import { useRef, useCallback } from 'react';

export function useTilt(maxTilt = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * maxTilt * 2;
      const rotateY = (x - 0.5) * maxTilt * 2;
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025,1.025,1.025)`;
      el.style.transition = 'transform 0.08s ease-out';
      if (shineRef.current) {
        const shineX = x * 100;
        const shineY = y * 100;
        shineRef.current.style.background =
          `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(211,145,176,0.18) 0%, rgba(186,110,143,0.06) 40%, transparent 70%)`;
        shineRef.current.style.opacity = '1';
      }
    });
  }, [maxTilt]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frameRef.current);
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    el.style.transition = 'transform 0.5s ease-out';
    if (shineRef.current) {
      shineRef.current.style.opacity = '0';
      shineRef.current.style.transition = 'opacity 0.5s ease-out';
    }
  }, []);

  return { ref, shineRef, onMouseMove, onMouseLeave };
}
