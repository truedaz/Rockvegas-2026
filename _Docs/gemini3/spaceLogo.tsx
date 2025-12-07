import React, { useState, useMemo } from 'react';
import { motion, Transition } from 'framer-motion';
import { LOGO_PATHS } from '../constants';

const SpaceLogo: React.FC = () => {
// We track which indices have been "activated" by a hover event.
// They stay active until the mouse leaves the entire SVG container.
const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  // Configuration for the orbit animation
  // Center of the SVG viewBox (0 0 220 44.7)
  const centerX = 110;
  const centerY = 22.35;

  // Generate random orbit parameters for each path on mount
  // This ensures consistent behavior for each piece during the session
  const orbitConfigs = useMemo(() => {
  return LOGO_PATHS.map(() => {
  const radius = 60 + Math.random() * 140; // Random orbit radius between 60 and 200
  const duration = 4 + Math.random() * 8; // Random speed between 4s and 12s per revolution
  const direction = Math.random() > 0.5 ? 1 : -1; // Random orbit direction
  const initialAngle = Math.random() * 360; // Start at random angle to spread them out immediately
  const tumbleSpeed = 2 + Math.random() * 5; // Self-rotation speed
  return { radius, duration, direction, initialAngle, tumbleSpeed };
  });
  }, []);

  const handleMouseEnterPath = (index: number) => {
  setActiveIndices((prev) => {
  const newSet = new Set(prev);
  newSet.add(index);
  return newSet;
  });
  };

  const handleMouseLeaveContainer = () => {
  setActiveIndices(new Set());
  };

  return (
  <div className="relative p-20 cursor-crosshair" onMouseLeave={handleMouseLeaveContainer}>
    <motion.svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 220 44.7" // We use overflow-visible so the "orbiting" pieces can fly outside the original bounding
      box className="w-[600px] max-w-full overflow-visible pointer-events-none">
      {LOGO_PATHS.map((d, index) => {
      const config = orbitConfigs[index];
      const isActive = activeIndices.has(index);

      // Variants for the outer group: Handles the orbital rotation around the center
      const orbitVariants = {
      idle: {
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
      },
      orbit: {
      rotate: config.direction === 1 ? 360 : -360,
      transition: {
      rotate: {
      repeat: Infinity,
      duration: config.duration,
      ease: "linear",
      }
      }
      }
      };

      // Variants for the inner path: Handles the "fly out" translation radius and self-tumble
      const flyOutVariants = {
      idle: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      rotate: 0,
      fill: "#FFFFFF",
      transition: {
      type: "spring",
      stiffness: 70,
      damping: 20
      }
      },
      orbit: {
      x: config.radius, // Move out to radius. Because parent is rotating, this traces a circle.
      y: 0,
      scale: 0.6 + Math.random() * 0.4, // Random debris size
      rotate: 360, // Tumble
      opacity: 0.9,
      fill: "#a5b4fc", // Slight blue tint for "energy"
      transition: {
      x: { type: "spring", stiffness: 40, damping: 12 }, // Spring out
      scale: { duration: 0.5 },
      rotate: {
      repeat: Infinity,
      duration: config.tumbleSpeed,
      ease: "linear"
      },
      fill: { duration: 0.3 }
      }
      }
      };

      return (
      // Outer Group: Sets the center of rotation to the SVG center
      // This allows the "x" translation of the child to act as a radius for an orbit
      <motion.g key={index} initial="idle" animate={isActive ? "orbit" : "idle" } variants={orbitVariants} style={{
        originX: `${centerX}px`, originY: `${centerY}px`, }}>
        {/* Inner Path: The actual visual element */}
        {/* We enable pointer-events-auto here so we can hover individual pieces */}
        <motion.path d={d} variants={flyOutVariants} onMouseEnter={()=> handleMouseEnterPath(index)}
          className="pointer-events-auto cursor-pointer"
          stroke="transparent"
          strokeWidth="1"
          />
      </motion.g>
      );
      })}
    </motion.svg>
  </div>
  );
  };

  export default SpaceLogo;