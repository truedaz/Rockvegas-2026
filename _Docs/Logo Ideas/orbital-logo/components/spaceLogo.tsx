import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { LOGO_PATHS } from '../constants';

const SpaceLogo: React.FC = () => {
  // We track which indices have been "activated" by a hover event.
  // They stay active until the mouse leaves the entire SVG container.
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  // Center of the SVG viewBox (0 0 220 44.7)
  const centerX = 110;
  const centerY = 22.35;

  // Generate orbit parameters for each path on mount
  const orbitConfigs = useMemo(() => {
    return LOGO_PATHS.map((d) => {
      // 1. Extract the starting X position of the path to calculate proper offsets.
      // This allows us to center the orbit relative to the logo center, not the path position.
      const match = d.match(/M\s*([\d\.]+)/);
      const startX = match ? parseFloat(match[1]) : 110;

      // 2. Randomize orbit physics
      const radius = 60 + Math.random() * 100; // Orbit radius
      const duration = 5 + Math.random() * 10; // Speed of revolution
      const direction = Math.random() > 0.5 ? 1 : -1; // Clockwise or Counter-clockwise
      const initialAngle = Math.random() * 360; // Random starting position on the ring
      const tumbleSpeed = 2 + Math.random() * 4; // Self-rotation speed of the debris

      return { startX, radius, duration, direction, initialAngle, tumbleSpeed };
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

  // CRITICAL FIX: Ensure rotation happens around the SVG ViewBox center.
  // "transformBox: view-box" forces the transform origin to be relative to the SVG coordinate space,
  // not the individual element's bounding box.
  const rotationStyle: React.CSSProperties = {
    transformBox: "view-box",
    transformOrigin: `${centerX}px ${centerY}px`
  };

  return (
    <div
      className="relative p-20 cursor-crosshair"
      onMouseLeave={handleMouseLeaveContainer}
    >
      <motion.svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 220 44.7"
        className="w-[600px] max-w-full overflow-visible pointer-events-none"
      >
        {LOGO_PATHS.map((d, index) => {
          const config = orbitConfigs[index];
          const isActive = activeIndices.has(index);

          // Calculate the translation needed to place the piece at 'radius' distance from center.
          // Formula: (Center - CurrentPos) + Radius
          // This cancels out the piece's original position offset, effectively centering it, then moves it out.
          const offsetX = (centerX - config.startX);
          const targetTranslation = offsetX + config.radius;

          // 1. Swirl Group: Rotates from 0 to the random starting angle.
          // This creates the "explosion" effect in different directions.
          const swirlVariants: Variants = {
            idle: {
              rotate: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            },
            orbit: {
              rotate: config.initialAngle,
              transition: { duration: 1.2, ease: "easeOut" }
            }
          };

          // 2. Spin Group: Handles the continuous infinite orbit.
          const spinVariants: Variants = {
            idle: {
              rotate: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            },
            orbit: {
              rotate: config.direction * 360,
              transition: {
                repeat: Infinity,
                duration: config.duration,
                ease: "linear",
              }
            }
          };

          // 3. Path Variants: Handles the radial fly-out and self-tumble.
          const pathVariants: Variants = {
            idle: {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              rotate: 0,
              fill: "#FFFFFF",
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 20
              }
            },
            orbit: {
              x: targetTranslation, // Move to calculated orbit radius
              y: 0,
              scale: 0.6 + Math.random() * 0.4,
              rotate: 360, // Self-tumble
              opacity: 0.9,
              fill: "#a5b4fc",
              transition: {
                x: { type: "spring", stiffness: 30, damping: 15 },
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
            // Layer 1: Swirl (Initial Angle Distribution)
            <motion.g
              key={index}
              initial="idle"
              animate={isActive ? "orbit" : "idle"}
              variants={swirlVariants}
              style={rotationStyle}
            >
              {/* Layer 2: Spin (Continuous Orbit) */}
              <motion.g
                variants={spinVariants}
                style={rotationStyle}
              >
                {/* Layer 3: Translation (Radial Distance & Visuals) */}
                <motion.path
                  d={d}
                  variants={pathVariants}
                  onMouseEnter={() => handleMouseEnterPath(index)}
                  className="pointer-events-auto cursor-pointer"
                  stroke="transparent"
                  strokeWidth="12" // Invisible stroke increases hit area for easier interaction
                />
              </motion.g>
            </motion.g>
          );
        })}
      </motion.svg>
    </div>
  );
};

export default SpaceLogo;