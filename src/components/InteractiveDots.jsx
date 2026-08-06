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

    // Mouse coordinates tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 150, // Repulsion hover radius
    };

    // Active click ripples (shockwaves) in document space
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
      // Do not trigger shockwaves when clicking buttons, links, or inputs
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

      // Origin in document space (clientY + scrollY)
      ripples.push({
        x: e.clientX,
        y: e.clientY + window.scrollY,
        radius: 0,
        maxRadius: 380, // Expand up to 380px
        speed: 9.0,     // Speed of wave front propagation
        force: 110,     // Physical impact force
        width: 65,      // Width of the wave crest
      });
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.targetX = touch.clientX;
        mouse.targetY = touch.clientY;

        // Check target element to avoid triggering ripples on links/buttons/etc.
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
          y: touch.clientY + window.scrollY,
          radius: 0,
          maxRadius: 280, // slightly smaller on mobile for visual density
          speed: 8.0,
          force: 90,
          width: 50,
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

    // Grid dots structure in document space
    let dots = [];
    const spacing = 40; // Spacing between dots in pixels
    let cols = Math.ceil(width / spacing) + 1;
    let documentHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      window.innerHeight
    );
    let rows = Math.ceil(documentHeight / spacing) + 1;

    const initDots = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      );

      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(documentHeight / spacing) + 1;
      dots = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const homeX = c * spacing - (cols * spacing - width) / 2;
          const homeY = r * spacing; // starts from 0 to documentHeight

          dots.push({
            homeX,
            homeY,
            x: homeX + (Math.random() - 0.5) * 8, // slight initial random displacement
            y: homeY + (Math.random() - 0.5) * 8,
            vx: 0,
            vy: 0,
            radius: 1.5 + Math.random() * 0.7,
            activation: 0,
          });
        }
      }
    };

    initDots();
    window.addEventListener('resize', initDots);

    // Physics parameters for premium, smooth elastic return
    let time = 0;
    const springStrength = 0.045;
    const damping = 0.88;
    const maxRepulsion = 48; // Max pixels a dot can be pushed away by hover

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const currentScrollY = window.scrollY;

      // Periodically check if document height has changed
      if (time % 100 === 0) {
        const currentDocHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight,
          window.innerHeight
        );
        if (Math.abs(currentDocHeight - documentHeight) > 100) {
          initDots();
        }
      }

      // Mouse position in document space
      let mouseDocX = -1000;
      let mouseDocY = -1000;

      // Smoothly interpolate the mouse position in viewport space first
      if (mouse.targetX === -1000) {
        mouse.x += (-1000 - mouse.x) * 0.1;
        mouse.y += (-1000 - mouse.y) * 0.1;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.18;
        mouse.y += (mouse.targetY - mouse.y) * 0.18;
        mouseDocX = mouse.x;
        mouseDocY = mouse.y + currentScrollY;
      }

      // Update active ripples in document space
      ripples.forEach((ripple) => {
        ripple.radius += ripple.speed;
      });
      // Remove finished ripples
      ripples = ripples.filter((ripple) => ripple.radius < ripple.maxRadius);

      // 1. Update dot positions with spring physics, mouse hover and click shockwaves
      dots.forEach((dot) => {
        // Natural background sway (organic water ripple movement)
        const swayX = Math.sin(time * 0.015 + dot.homeY * 0.008) * 2.5;
        const swayY = Math.cos(time * 0.012 + dot.homeX * 0.008) * 2.5;

        // Hover Repulsion in Document Space
        let pushX = 0;
        let pushY = 0;

        if (mouseDocX !== -1000) {
          const dx = dot.x - mouseDocX;
          const dy = dot.y - mouseDocY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const hoverForce = (mouse.radius - dist) / mouse.radius; // 0 to 1
            const easeForce = Math.pow(hoverForce, 1.5);
            const angle = Math.atan2(dy, dx);
            pushX = Math.cos(angle) * easeForce * maxRepulsion;
            pushY = Math.sin(angle) * easeForce * maxRepulsion;
            // Keep dot active
            dot.activation = Math.max(dot.activation, hoverForce);
          } else {
            // Slow decay of activation state for a trailing glow effect
            dot.activation *= 0.94;
          }
        } else {
          dot.activation *= 0.94;
        }

        // Apply Click Ripples (Shockwaves) in Document Space
        ripples.forEach((ripple) => {
          const rdx = dot.x - ripple.x;
          const rdy = dot.y - ripple.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);

          // Calculate proximity to the expanding wave front
          const waveDiff = Math.abs(rdist - ripple.radius);
          if (waveDiff < ripple.width) {
            const crestProximity = 1 - waveDiff / ripple.width; // 0 to 1
            const expansionFade = 1 - ripple.radius / ripple.maxRadius; // 1 at start, 0 at end
            const totalImpact = crestProximity * expansionFade;

            const angle = Math.atan2(rdy, rdx);
            const impulse = totalImpact * ripple.force * 0.12;

            // Push dot velocity outwards
            dot.vx += Math.cos(angle) * impulse;
            dot.vy += Math.sin(angle) * impulse;

            // Ignite dot color glow
            dot.activation = Math.max(dot.activation, totalImpact * 0.85);
          }
        });

        const targetX = dot.homeX + pushX + swayX;
        const targetY = dot.homeY + pushY + swayY;

        // Elastic spring acceleration towards the target position
        dot.vx += (targetX - dot.x) * springStrength;
        dot.vy += (targetY - dot.y) * springStrength;
        dot.vx *= damping;
        dot.vy *= damping;

        dot.x += dot.vx;
        dot.y += dot.vy;
      });

      // 2. Draw connections and dots (rendering optimization: only draw dots inside viewport)
      ctx.lineWidth = 0.8;
      
      const startRow = Math.max(0, Math.floor((currentScrollY - 80) / spacing));
      const endRow = Math.min(rows, Math.ceil((currentScrollY + height + 80) / spacing));

      for (let r = startRow; r < endRow; r++) {
        for (let c = 0; c < cols; c++) {
          const idx1 = r * cols + c;
          const p1 = dots[idx1];
          if (!p1) continue;

          // Convert document Y coordinates to viewport coordinates for drawing
          const p1DrawX = p1.x;
          const p1DrawY = p1.y - currentScrollY;

          // Connect to right neighbor
          if (c < cols - 1) {
            const idx2 = r * cols + (c + 1);
            const p2 = dots[idx2];
            if (p2) {
              const maxAct = Math.max(p1.activation, p2.activation);
              const lineOpacity = 0.08 + maxAct * 0.16;
              
              if (maxAct > 0.01) {
                // Glow neon cyan/purple mix when activated
                ctx.strokeStyle = `hsla(${265 - maxAct * 85}, 80%, 60%, ${lineOpacity})`;
              } else {
                ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`;
              }
              
              ctx.beginPath();
              ctx.moveTo(p1DrawX, p1DrawY);
              ctx.lineTo(p2.x, p2.y - currentScrollY);
              ctx.stroke();
            }
          }

          // Connect to bottom neighbor
          if (r < rows - 1) {
            const idx3 = (r + 1) * cols + c;
            const p3 = dots[idx3];
            if (p3) {
              const maxAct = Math.max(p1.activation, p3.activation);
              const lineOpacity = 0.08 + maxAct * 0.16;
              
              if (maxAct > 0.01) {
                ctx.strokeStyle = `hsla(${265 - maxAct * 85}, 80%, 60%, ${lineOpacity})`;
              } else {
                ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`;
              }
              
              ctx.beginPath();
              ctx.moveTo(p1DrawX, p1DrawY);
              ctx.lineTo(p3.x, p3.y - currentScrollY);
              ctx.stroke();
            }
          }

          // Draw the dot itself
          const hue = 265 - p1.activation * 85;
          const saturation = 55 + p1.activation * 45;
          const lightness = 48 + p1.activation * 22;
          const opacity = 0.32 + p1.activation * 0.55;
          const radius = p1.radius + p1.activation * 1.6;

          // Draw outer soft glow aura
          if (p1.activation > 0.05) {
            ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${p1.activation * 0.12})`;
            ctx.beginPath();
            ctx.arc(p1DrawX, p1DrawY, radius * 3.5, 0, Math.PI * 2);
            ctx.fill();
          }

          // Draw core dot
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
          ctx.beginPath();
          ctx.arc(p1DrawX, p1DrawY, radius, 0, Math.PI * 2);
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
