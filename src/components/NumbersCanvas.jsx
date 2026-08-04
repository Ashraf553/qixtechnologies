import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NumbersCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const nRenderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    nRenderer.setSize(width, height);
    nRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(nRenderer.domElement);

    const nScene = new THREE.Scene();
    const nCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    nCamera.position.z = 10;

    const dustCount = 180;
    const dustGeometry = new THREE.BufferGeometry();
    const coords = [];
    const dustVelocities = [];

    for (let i = 0; i < dustCount; i++) {
      coords.push(
        (Math.random() - 0.5) * 15, // x
        (Math.random() - 0.5) * 10, // y
        (Math.random() - 0.5) * 10  // z
      );
      dustVelocities.push([
        (Math.random() - 0.5) * 0.004,        // vx
        (Math.random() * 0.006) + 0.002,     // vy (drift up)
        (Math.random() - 0.5) * 0.004         // vz
      ]);
    }

    dustGeometry.setAttribute('position', new THREE.Float32BufferAttribute(coords, 3));

    const dustMaterial = new THREE.PointsMaterial({
      size: 0.07,
      color: 0xCBD5E1,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    nScene.add(dustPoints);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      nCamera.aspect = w / h;
      nCamera.updateProjectionMatrix();
      nRenderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Drift loop
    let animId = null;
    const nAnimate = () => {
      animId = requestAnimationFrame(nAnimate);
      
      const posAttr = dustGeometry.attributes.position;
      const positions = posAttr.array;
      
      for (let i = 0; i < dustCount; i++) {
        const idx = i * 3;
        
        positions[idx] += dustVelocities[i][0];
        positions[idx + 1] += dustVelocities[i][1];
        positions[idx + 2] += dustVelocities[i][2];
        
        // Loop boundary
        if (positions[idx + 1] > 5) {
          positions[idx + 1] = -5;
          positions[idx] = (Math.random() - 0.5) * 15;
        }
      }
      posAttr.needsUpdate = true;

      nRenderer.render(nScene, nCamera);
    };
    nAnimate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      nRenderer.dispose();
      dustMaterial.dispose();
      dustGeometry.dispose();
      if (container.contains(nRenderer.domElement)) {
        container.removeChild(nRenderer.domElement);
      }
    };
  }, []);

  return <div className="numbers-canvas-wrap" id="numbers-canvas" ref={containerRef} />;
}
