import React, { useRef, useEffect } from 'react';

export default function Magnetic({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationFrameId = null;

    const animate = () => {
      // Linear interpolation (lerp) for smooth easing
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;

      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      // Continue animating if we haven't reached the target
      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Snap to exact target to stop RAF loop
        currentX = targetX;
        currentY = targetY;
        el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        animationFrameId = null;
      }
    };

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Proximity range for magnetic activation (75px for better reach)
      const distance = Math.hypot(distanceX, distanceY);
      
      if (distance < 75) {
        // Attenuated pull vector toward the cursor (38% attraction strength)
        targetX = distanceX * 0.38;
        targetY = distanceY * 0.38;
      } else {
        targetX = 0;
        targetY = 0;
      }

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      style={{
        display: 'inline-block',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
