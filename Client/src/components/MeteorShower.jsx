import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Meteor = ({ delay, duration, left, top, theme, angle }) => {
  // Enhanced colors for better 'Magic UI' feel
  const meteorColor = theme === 'dark' ? 'rgba(220, 220, 255, 0.9)' : 'rgba(100, 100, 120, 0.7)';
  const tailColorStart = theme === 'dark' ? 'rgba(220, 220, 255, 0.6)' : 'rgba(100, 100, 120, 0.4)';
  const meteorGlow = theme === 'dark' ? 'rgba(220, 220, 255, 0.5)' : 'rgba(100, 100, 120, 0.3)';
  const meteorGlow_OPACITY_LOW = theme === 'dark' ? 'rgba(220, 220, 255, 0.2)' : 'rgba(100, 100, 120, 0.1)';
  const meteorGlow_OPACITY_VERY_LOW = theme === 'dark' ? 'rgba(220, 220, 255, 0.1)' : 'rgba(100, 100, 120, 0.05)';

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, rotate: angle + 90 }} // Adjust rotation for tail
      animate={{
        x: [0, Math.cos(angle * Math.PI / 180) * 600, Math.cos(angle * Math.PI / 180) * 1200],
        y: [0, Math.sin(angle * Math.PI / 180) * 600, Math.sin(angle * Math.PI / 180) * 1200],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: duration, // Duration will be faster now
        delay: delay,
        ease: 'linear',
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 2, // Reduced repeat delay for more frequent meteors
      }}
      style={{
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        width: '2px',
        height: '2px',
        backgroundColor: meteorColor,
        borderRadius: '50%',
        boxShadow: `0 0 12px 3px ${meteorGlow}, 0 0 20px 5px ${meteorGlow_OPACITY_LOW}, 0 0 30px 8px ${meteorGlow_OPACITY_VERY_LOW}`,
      }}
    >
      {/* Meteor Tail */}
      <div
        style={{
          position: 'absolute',
          top: '1px', // Tail originates from the meteor head
          left: '50%',
          transform: 'translateX(-50%) rotate(0deg)', // Tail points away from direction of movement
          width: '1.5px',
          height: '120px',
          backgroundImage: `linear-gradient(to bottom, ${tailColorStart}, transparent)`,
          transformOrigin: 'top center',
        }}
      />
    </motion.div>
  );
};

const MeteorShower = ({ number = 20, minDelay = 0.2, maxDelay = 1.2, minDuration = 2, maxDuration = 10, angle = 215, theme = 'dark', className = '' }) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generateMeteors = () => {
      const newMeteors = [];
      for (let i = 0; i < number; i++) {
        newMeteors.push({
          id: i,
          delay: Math.random() * (maxDelay - minDelay) + minDelay,
          duration: Math.random() * (maxDuration - minDuration) + minDuration,
          left: Math.random() * 100, // Allow meteors to start from anywhere horizontally
          top: Math.random() * 100,   // Allow meteors to start from anywhere vertically
          angle: angle,
        });
      }
      setMeteors(newMeteors);
    };
    generateMeteors();
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <div className={className} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {meteors.map(meteor => (
        <Meteor
          key={meteor.id}
          delay={meteor.delay}
          duration={meteor.duration}
          left={meteor.left}
          top={meteor.top}
          angle={meteor.angle}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default MeteorShower;