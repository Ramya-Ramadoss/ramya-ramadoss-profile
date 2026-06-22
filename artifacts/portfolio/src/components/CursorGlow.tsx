import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 22, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const trailConfig = { damping: 38, stiffness: 180, mass: 0.8 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailRef = useRef(trail);
  trailRef.current = trail;
  const counterRef = useRef(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      counterRef.current += 1;
      const id = counterRef.current;
      setTrail(prev => [...prev.slice(-14), { x: e.clientX, y: e.clientY, id }]);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {trail.map((point, i) => {
        const age = trail.length - 1 - i;
        const opacity = Math.max(0, (1 - age / trail.length) * 0.55);
        const size = Math.max(2, (1 - age / trail.length) * 9);
        return (
          <div
            key={point.id}
            style={{
              position: 'fixed',
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, rgba(211,145,176,${opacity}) 0%, rgba(186,110,143,${opacity * 0.5}) 60%, transparent 100%)`,
              boxShadow: `0 0 ${size * 3}px ${size}px rgba(211,145,176,${opacity * 0.4})`,
              transition: 'opacity 0.1s',
              pointerEvents: 'none',
            }}
          />
        );
      })}

      <motion.div
        style={{
          position: 'fixed',
          left: trailX,
          top: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(211,145,176,0.25) 0%, transparent 70%)',
            border: '1px solid rgba(211,145,176,0.2)',
          }}
        />
      </motion.div>

      <motion.div
        style={{
          position: 'fixed',
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#D391B0',
            boxShadow: '0 0 12px 4px rgba(211,145,176,0.9), 0 0 30px 8px rgba(186,110,143,0.45)',
          }}
        />
      </motion.div>
    </div>
  );
}
