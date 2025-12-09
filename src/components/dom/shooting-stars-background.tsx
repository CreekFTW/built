'use client';

import { useEffect, useRef, useState } from 'react';

interface Star {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  duration: number;
  delay: number;
  tailLength: number;
  angle: number;
}

interface TwinkleStar {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const generateRandomStar = (id: number): Star => {
  // Stars move slowly from left to right with minimal vertical deviation
  const startX = -10; // Start just off the left edge
  const startY = Math.random() * 100; // Random vertical position
  const endX = 110; // End just off the right edge
  const verticalDeviation = (Math.random() - 0.5) * 10; // Small up/down movement (-5% to +5%)
  const endY = startY + verticalDeviation;

  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

  // Create variety by having different "classes" of stars
  const starType = Math.random();
  let size: number, duration: number, tailLength: number;

  if (starType < 0.3) {
    // Small, fast stars (30% chance)
    size = Math.random() * 1.5 + 1; // 1-2.5px
    duration = Math.random() * 10 + 10; // 10-20s
    tailLength = Math.random() * 40 + 50; // 50-90px
  } else if (starType < 0.7) {
    // Medium stars (40% chance)
    size = Math.random() * 2 + 2.5; // 2.5-4.5px
    duration = Math.random() * 15 + 20; // 20-35s
    tailLength = Math.random() * 60 + 80; // 80-140px
  } else {
    // Large, slow stars (30% chance)
    size = Math.random() * 2 + 4.5; // 4.5-6.5px
    duration = Math.random() * 20 + 30; // 30-50s
    tailLength = Math.random() * 80 + 120; // 120-200px
  }

  return {
    id,
    startX,
    startY,
    endX,
    endY,
    size,
    duration,
    delay: Math.random() * 15, // 0-15s initial delay
    tailLength,
    angle,
  };
};

const generateTwinkleStar = (id: number): TwinkleStar => ({
  id,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.2,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 3, // 3-5s twinkle duration
});

export default function ShootingStarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [twinkleStars, setTwinkleStars] = useState<TwinkleStar[]>([]);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  // Initialize stars only on client-side after mount
  useEffect(() => {
    setStars(Array.from({ length: 2 }, (_, i) => generateRandomStar(i)));
    setTwinkleStars(Array.from({ length: 30 }, (_, i) => generateTwinkleStar(i)));
  }, []);

  useEffect(() => {
    // Create and inject keyframe animations dynamically
    if (!styleRef.current) {
      styleRef.current = document.createElement('style');
      document.head.appendChild(styleRef.current);
    }

    const keyframes = stars.map(star => {
      const deltaX = star.endX - star.startX;
      const deltaY = star.endY - star.startY;
      return `
        @keyframes shoot-${star.id} {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            transform: translate(${deltaX}vw, ${deltaY}vh);
            opacity: 0;
          }
        }
      `;
    }).join('\n');

    styleRef.current.textContent = keyframes;

    return () => {
      if (styleRef.current?.parentNode) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [stars]);

  useEffect(() => {
    // Regenerate each shooting star after its animation completes
    const timeouts: NodeJS.Timeout[] = [];

    stars.forEach((star, index) => {
      const totalTime = (star.duration + star.delay) * 1000;

      const timeout = setTimeout(function regenerate() {
        setStars(prev => {
          const newStars = [...prev];
          newStars[index] = generateRandomStar(index);
          return newStars;
        });

        // Schedule next regeneration
        timeouts[index] = setTimeout(regenerate, totalTime);
      }, totalTime);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [stars]);

  // Don't render stars until client-side initialization is complete
  if (stars.length === 0 || twinkleStars.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20" />

      {/* Twinkling stars */}
      {twinkleStars.map(star => (
        <div
          key={`twinkle-${star.id}`}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {stars.map(star => (
        <div
          key={`star-${star.id}`}
          className="absolute will-change-transform"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `shoot-${star.id} ${star.duration}s linear ${star.delay}s infinite`,
          }}
        >
          {/* Star orb with glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 70%)',
              boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8), 0 0 ${star.size * 4}px rgba(255,255,255,0.4)`,
              filter: 'blur(0.5px)',
            }}
          />

          {/* Tail */}
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              right: `${star.size}px`,
              width: `${star.tailLength}px`,
              height: '2px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.9) 100%)',
              filter: 'blur(1px)',
              transformOrigin: 'right center',
              transform: `rotate(${star.angle}deg)`,
            }}
          />
        </div>
      ))}

      {/* Twinkle animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `
      }} />
    </div>
  );
}