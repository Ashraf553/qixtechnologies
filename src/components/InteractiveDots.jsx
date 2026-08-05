import React, { useEffect, useRef } from 'react';

export default function InteractiveDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 130, // Repulsion radius
    };

    let ripples = [];

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleMouseDown = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('input') ||
        e.target.closest('textarea') ||
        e.target.closest('.user-profile-badge') ||
        e.target.closest('.settings-toggle')
      ) {
        return;
      }

      // Ripple origin in viewport coordinates
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 300,
        speed: 8.0,
        force: 80,
        width: 50,
      });
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.targetX = touch.clientX;
        mouse.targetY = touch.clientY;

        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target) {
          if (
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('a') ||
            target.closest('button') ||
            target.closest('input') ||
            target.closest('textarea') ||
            target.closest('.user-profile-badge') ||
            target.closest('.settings-toggle')
          ) {
            return;
          }
        }

        ripples.push({
          x: touch.clientX,
          y: touch.clientY,
          radius: 0,
          maxRadius: 220,
          speed: 7.0,
          force: 70,
          width: 40,
        });
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.targetX = touch.clientX;
        mouse.targetY = touch.clientY;
      }
    };

    const handleTouchEnd = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    let dots = [];
    // Spacing increases on mobile to reduce active node calculations by 60%
    const isMobile = width < 768;
    const spacing = isMobile ? 65 : 46; 
    let cols = Math.ceil(width / spacing) + 1;
    let rows = Math.ceil(height / spacing) + 1;

    const initDots = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const currentIsMobile = width < 768;
      const currentSpacing = currentIsMobile ? 65 : 46;

      cols = Math.ceil(width / currentSpacing) + 1;
      rows = Math.ceil(height / currentSpacing) + 1;
      dots = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const homeX = c * currentSpacing - (cols * currentSpacing - width) / 2;
          const homeY = r * currentSpacing - (rows * currentSpacing - height) / 2;

          dots.push({
            homeX,
            homeY,
            x: homeX + (Math.random() - 0.5) * 6,
            y: homeY + (Math.random() - 0.5) * 6,
            vx: 0,
            vy: 0,
            radius: 1.2 + Math.random() * 0.6,
            activation: 0,
          });
        }
      }
    };

    initDots();
    window.addEventListener('resize', initDots);

    let time = 0;
    const springStrength = 0.06;
    const damping = 0.85;
    const maxRepulsion = 40;

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Lerp mouse
      if (mouse.targetX === -1000) {
        mouse.x += (-1000 - mouse.x) * 0.1;
        mouse.y += (-1000 - mouse.y) * 0.1;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.18;
        mouse.y += (mouse.targetY - mouse.y) * 0.18;
      }

      // Update ripples
      ripples.forEach((ripple) => {
        ripple.radius += ripple.speed;
      });
      ripples = ripples.filter((ripple) => ripple.radius < ripple.maxRadius);

      // 1. Update positions in viewport space
      dots.forEach((dot) => {
        const swayX = Math.sin(time * 0.015 + dot.homeY * 0.008) * 2.0;
        const swayY = Math.cos(time * 0.012 + dot.homeX * 0.008) * 2.0;

        let pushX = 0;
        let pushY = 0;

        if (mouse.x !== -1000) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const hoverForce = (mouse.radius - dist) / mouse.radius;
            const easeForce = Math.pow(hoverForce, 1.5);
            const angle = Math.atan2(dy, dx);
            pushX = Math.cos(angle) * easeForce * maxRepulsion;
            pushY = Math.sin(angle) * easeForce * maxRepulsion;
            dot.activation = Math.max(dot.activation, hoverForce);
          } else {
            dot.activation *= 0.94;
          }
        } else {
          dot.activation *= 0.94;
        }

        ripples.forEach((ripple) => {
          const rdx = dot.x - ripple.x;
          const rdy = dot.y - ripple.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);

          const waveDiff = Math.abs(rdist - ripple.radius);
          if (waveDiff < ripple.width) {
            const crestProximity = 1 - waveDiff / ripple.width;
            const expansionFade = 1 - ripple.radius / ripple.maxRadius;
            const totalImpact = crestProximity * expansionFade;

            const angle = Math.atan2(rdy, rdx);
            const impulse = totalImpact * ripple.force * 0.12;

            dot.vx += Math.cos(angle) * impulse;
            dot.vy += Math.sin(angle) * impulse;
            dot.activation = Math.max(dot.activation, totalImpact * 0.85);
          }
        });

        const targetX = dot.homeX + pushX + swayX;
        const targetY = dot.homeY + pushY + swayY;

        dot.vx += (targetX - dot.x) * springStrength;
        dot.vy += (targetY - dot.y) * springStrength;
        dot.vx *= damping;
        dot.vy *= damping;

        dot.x += dot.vx;
        dot.y += dot.vy;
      });

      // 2. Draw connections and dots (all inside viewport now!)
      ctx.lineWidth = 0.8;
      
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx1 = r * cols + c;
          const p1 = dots[idx1];
          if (!p1) continue;

          // Connect to right neighbor
          if (c < cols - 1) {
            const idx2 = r * cols + (c + 1);
            const p2 = dots[idx2];
            if (p2) {
              const maxAct = Math.max(p1.activation, p2.activation);
              const lineOpacity = 0.06 + maxAct * 0.14;
              
              if (maxAct > 0.01) {
                ctx.strokeStyle = `hsla(${265 - maxAct * 85}, 80%, 60%, ${lineOpacity})`;
              } else {
                ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`;
              }
              
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          // Connect to bottom neighbor
          if (r < rows - 1) {
            const idx3 = (r + 1) * cols + c;
            const p3 = dots[idx3];
            if (p3) {
              const maxAct = Math.max(p1.activation, p3.activation);
              const lineOpacity = 0.06 + maxAct * 0.14;
              
              if (maxAct > 0.01) {
                ctx.strokeStyle = `hsla(${265 - maxAct * 85}, 80%, 60%, ${lineOpacity})`;
              } else {
                ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`;
              }
              
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p3.x, p3.y);
              ctx.stroke();
            }
          }

          // Draw the dot
          const hue = 265 - p1.activation * 85;
          const saturation = 55 + p1.activation * 45;
          const lightness = 48 + p1.activation * 22;
          const opacity = 0.28 + p1.activation * 0.55;
          const radius = p1.radius + p1.activation * 1.5;

          if (p1.activation > 0.05) {
            ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${p1.activation * 0.1})`;
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, radius * 3.2, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', initDots);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-dots-canvas" />;
}
