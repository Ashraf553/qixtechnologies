import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ResearchCanvas({ activeFormation }) {
  const containerRef = useRef(null);
  const targetStateRef = useRef(null);
  const particleSystemRef = useRef(null);
  const positionsAttrRef = useRef(null);

  const pCount = 1800;

  // Pre-calculate target states
  const state1Positions = useRef([]); // Topological Wave Grid
  const state2Positions = useRef([]); // Cosmological Galaxy
  const state3Positions = useRef([]); // Molecular Double Helix

  // Generate target coordinates once
  if (state1Positions.current.length === 0) {
    // State 1: Topological Wave Grid
    const gridRows = 36;
    const gridCols = 50;
    for (let r = 0; r < pCount; r++) {
      const row = Math.floor(r / gridCols);
      const col = r % gridCols;
      const px = (col - gridCols / 2) * 0.35;
      const pz = (row - gridRows / 2) * 0.35;
      const py = Math.sin(col * 0.18) * Math.cos(row * 0.22) * 1.5;
      state1Positions.current.push(px, py, pz);
    }

    // State 2: Cosmological Galaxy
    for (let i = 0; i < pCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 2.0) * 8.5; // denser in center
      let py = (Math.random() - 0.5) * 1.5 * (8.5 - r) / 8.5; // flatter disk
      
      const arm = Math.floor(Math.random() * 2) * Math.PI;
      const spiral = r * 0.5 + arm;
      let px = Math.cos(spiral) * r + (Math.random() - 0.5) * 0.4;
      let pz = Math.sin(spiral) * r + (Math.random() - 0.5) * 0.4;

      state2Positions.current.push(px, py, pz);
    }

    // State 3: Molecular Double Helix
    for (let i = 0; i < pCount; i++) {
      const isStrand2 = Math.random() > 0.5;
      const isConnectingLine = Math.random() > 0.85;
      
      const t = (i / pCount) * Math.PI * 6.5; // spiral speed
      const helixRadius = 3.2;
      let py = (t - Math.PI * 3.25) * 1.25; // helical height
      
      let px, pz;
      if (isConnectingLine) {
        const ratio = Math.random();
        const angle1 = t;
        const angle2 = t + Math.PI;
        px = THREE.MathUtils.lerp(Math.cos(angle1), Math.cos(angle2), ratio) * helixRadius;
        pz = THREE.MathUtils.lerp(Math.sin(angle1), Math.sin(angle2), ratio) * helixRadius;
      } else {
        const angle = t + (isStrand2 ? Math.PI : 0);
        px = Math.cos(angle) * helixRadius;
        pz = Math.sin(angle) * helixRadius;
      }
      
      px += (Math.random() - 0.5) * 0.18;
      py += (Math.random() - 0.5) * 0.18;
      pz += (Math.random() - 0.5) * 0.18;
      
      state3Positions.current.push(px, py, pz);
    }
  }

  // Handle formation morph shifts from React props
  useEffect(() => {
    let chosenState = state1Positions.current;
    if (activeFormation === 1) chosenState = state1Positions.current;
    else if (activeFormation === 2) chosenState = state2Positions.current;
    else if (activeFormation === 3) chosenState = state3Positions.current;
    
    targetStateRef.current = chosenState;
  }, [activeFormation]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 400;

    // Renderer
    const rRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rRenderer.setSize(width, height);
    rRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(rRenderer.domElement);

    const rScene = new THREE.Scene();
    const rCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    rCamera.position.z = 18;

    // Build geometry and allocate arrays
    const geometry = new THREE.BufferGeometry();
    const currentPositions = new Float32Array(pCount * 3);
    
    // Set initial coordinates based on current active state
    let chosenState = state1Positions.current;
    if (activeFormation === 2) chosenState = state2Positions.current;
    else if (activeFormation === 3) chosenState = state3Positions.current;
    targetStateRef.current = chosenState;

    for (let i = 0; i < pCount * 3; i++) {
      currentPositions[i] = chosenState[i];
    }

    const posAttr = new THREE.BufferAttribute(currentPositions, 3);
    geometry.setAttribute('position', posAttr);
    positionsAttrRef.current = posAttr;

    // Glowing particle material
    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    // Vertex color maps (Silver / Chrome / Slate monochrome palette)
    const colors = [];
    const colorPalette = [
      new THREE.Color(0xFFFFFF), // Bright White
      new THREE.Color(0xCBD5E1), // Light Silver
      new THREE.Color(0x94A3B8), // Metallic Slate Grey
      new THREE.Color(0x64748B)  // Steel Grey
    ];

    for (let i = 0; i < pCount; i++) {
      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors.push(col.r, col.g, col.b);
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const particleSystem = new THREE.Points(geometry, material);
    particleSystemRef.current = particleSystem;
    rScene.add(particleSystem);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      rCamera.aspect = w / h;
      rCamera.updateProjectionMatrix();
      rRenderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Anim loop
    let animId = null;
    const rAnimate = () => {
      animId = requestAnimationFrame(rAnimate);
      
      // Rotate system
      particleSystem.rotation.y += 0.0035;
      particleSystem.rotation.x += 0.001;

      // Lerp coordinates
      const positions = posAttr.array;
      const target = targetStateRef.current;
      if (target) {
        for (let i = 0; i < pCount * 3; i++) {
          positions[i] += (target[i] - positions[i]) * 0.075;
        }
        posAttr.needsUpdate = true;
      }

      rRenderer.render(rScene, rCamera);
    };
    rAnimate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      rRenderer.dispose();
      material.dispose();
      geometry.dispose();
      if (container.contains(rRenderer.domElement)) {
        container.removeChild(rRenderer.domElement);
      }
    };
  }, []);

  return <div className="research-canvas-inner" id="research-canvas" ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
