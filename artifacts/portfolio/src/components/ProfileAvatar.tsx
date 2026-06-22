import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const orbitTags = ['Python', 'AI/ML', 'React', 'ROS2', 'CV', 'Node.js'];

export function ProfileAvatar() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 420, height: 420 }}>

      {/* Outermost ambient glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(211,145,176,0.11) 0%, transparent 68%)',
          filter: 'blur(28px)',
        }}
      />

      {/* Orbit ring 1 — slowest, dashed */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 380, height: 380,
          border: '1px dashed rgba(211,145,176,0.18)',
          top: '50%', left: '50%',
          marginTop: -190, marginLeft: -190,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        {/* Dot on orbit 1 */}
        <div
          className="absolute"
          style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#D391B0',
            boxShadow: '0 0 10px 3px rgba(211,145,176,0.7)',
            top: -3.5, left: '50%', marginLeft: -3.5,
          }}
        />
      </motion.div>

      {/* Orbit ring 2 — medium, solid */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 310, height: 310,
          border: '1px solid rgba(186,110,143,0.22)',
          top: '50%', left: '50%',
          marginTop: -155, marginLeft: -155,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {/* Dot on orbit 2 */}
        <div
          className="absolute"
          style={{
            width: 5, height: 5, borderRadius: '50%',
            background: '#BA6E8F',
            boxShadow: '0 0 8px 2px rgba(186,110,143,0.7)',
            bottom: -2.5, left: '50%', marginLeft: -2.5,
          }}
        />
      </motion.div>

      {/* Orbit ring 3 — inner, fastest */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 245, height: 245,
          border: '1px solid rgba(159,100,150,0.15)',
          top: '50%', left: '50%',
          marginTop: -122.5, marginLeft: -122.5,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="absolute"
          style={{
            width: 4, height: 4, borderRadius: '50%',
            background: '#9F6496',
            boxShadow: '0 0 7px 2px rgba(159,100,150,0.7)',
            top: -2, right: '15%',
          }}
        />
      </motion.div>

      {/* Floating tech tags on orbit */}
      {orbitTags.map((tag, i) => {
        const angle = (i / orbitTags.length) * 360;
        const radius = 185;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <motion.div
            key={tag}
            className="absolute z-20 pointer-events-none"
            style={{
              left: '50%', top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.55, 0.9, 0.55],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            <span
              className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{
                background: 'rgba(22,10,40,0.85)',
                border: '1px solid rgba(211,145,176,0.28)',
                color: 'rgba(211,145,176,0.85)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {tag}
            </span>
          </motion.div>
        );
      })}

      {/* Avatar circle — photo placeholder */}
      <motion.div
        className="relative z-10 rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: 180, height: 180,
          background: 'linear-gradient(135deg, rgba(93,60,100,0.6) 0%, rgba(22,10,40,0.9) 100%)',
          border: '2px solid rgba(211,145,176,0.35)',
          boxShadow: '0 0 0 6px rgba(211,145,176,0.06), 0 0 40px rgba(211,145,176,0.18), 0 0 80px rgba(211,145,176,0.07)',
        }}
        animate={{
          boxShadow: [
            '0 0 0 6px rgba(211,145,176,0.06), 0 0 40px rgba(211,145,176,0.18), 0 0 80px rgba(211,145,176,0.07)',
            '0 0 0 8px rgba(211,145,176,0.1), 0 0 55px rgba(211,145,176,0.28), 0 0 90px rgba(211,145,176,0.12)',
            '0 0 0 6px rgba(211,145,176,0.06), 0 0 40px rgba(211,145,176,0.18), 0 0 80px rgba(211,145,176,0.07)',
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Gradient shimmer inside */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(211,145,176,0.15) 0%, transparent 55%)',
          }}
        />

        {/* Initials / icon — replace with <img> when photo is ready */}
        <div className="relative z-10 flex flex-col items-center gap-1 select-none">
          <User className="w-10 h-10 text-primary/40" />
          <span
            className="font-mono text-xs tracking-widest uppercase text-primary/40"
          >
            Photo
          </span>
        </div>
      </motion.div>

      {/* Pulse rings expanding outward */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 180, height: 180,
            border: '1px solid rgba(211,145,176,0.4)',
            top: '50%', left: '50%',
            marginTop: -90, marginLeft: -90,
          }}
          animate={{
            scale: [1, 2.8],
            opacity: [0.35, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 1.07,
          }}
        />
      ))}
    </div>
  );
}
