import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSynthesizerStore } from '../store/useSynthesizerStore';

export default function FluidBackground() {
  const containerRef = useRef(null);
  const uniformsRef = useRef(null);

  // Subscribe to all Zustand store settings
  const {
    speed,
    gooeyness,
    ditherEnabled,
    dotSize,
    dotGap,
    brightness,
    contrast,
    crossEnabled,
    crossIntensity,
    bloomEnabled,
    bloomIntensity,
    bloomSize,
    crtEnabled,
    scanlines,
    curvature,
    vignette,
    chroma,
    setGpuTier
  } = useSynthesizerStore();

  // Detect GPU Tier on mount
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const dbgRenderInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (dbgRenderInfo) {
        const renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
        if (/rtx|gtx|radeon|rx\s\d|apple\sm/i.test(renderer)) {
          setGpuTier(`High Tier GPU (${renderer.split(' ')[0]})`);
        } else if (/intel|uhd|hd\sgraphics|iris/i.test(renderer)) {
          setGpuTier('Integrated Intel GPU (Medium Tier)');
        } else {
          setGpuTier('Standard WebGL GPU');
        }
      } else {
        setGpuTier('Standard Software/Hardware WebGL');
      }
    } else {
      setGpuTier('WebGL Unsupported');
    }
  }, [setGpuTier]);

  // Sync React State changes to WebGL Uniforms
  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.uSpeed.value = speed;
      uniformsRef.current.uGooeyness.value = gooeyness;
      uniformsRef.current.uDitherEnabled.value = ditherEnabled ? 1.0 : 0.0;
      uniformsRef.current.uDotSize.value = dotSize;
      uniformsRef.current.uDotGap.value = dotGap;
      uniformsRef.current.uBrightness.value = brightness;
      uniformsRef.current.uContrast.value = contrast;
      uniformsRef.current.uCrossEnabled.value = crossEnabled ? 1.0 : 0.0;
      uniformsRef.current.uCrossIntensity.value = crossIntensity;
      uniformsRef.current.uBloomEnabled.value = bloomEnabled ? 1.0 : 0.0;
      uniformsRef.current.uBloomIntensity.value = bloomIntensity;
      uniformsRef.current.uBloomSize.value = bloomSize;
      uniformsRef.current.uCrtEnabled.value = crtEnabled ? 1.0 : 0.0;
      uniformsRef.current.uScanlineIntensity.value = scanlines;
      uniformsRef.current.uCurvature.value = curvature;
      uniformsRef.current.uVignetteIntensity.value = vignette;
      uniformsRef.current.uChroma.value = chroma;
    }
  }, [
    speed,
    gooeyness,
    ditherEnabled,
    dotSize,
    dotGap,
    brightness,
    contrast,
    crossEnabled,
    crossIntensity,
    bloomEnabled,
    bloomIntensity,
    bloomSize,
    crtEnabled,
    scanlines,
    curvature,
    vignette,
    chroma
  ]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 2. Setup render target for Pass 1 (Liquid Glass logic)
    const pr = renderer.getPixelRatio();
    let rTarget = new THREE.WebGLRenderTarget(window.innerWidth * pr, window.innerHeight * pr, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat
    });

    // 3. Define WebGL Shader Uniforms
    const uniforms = {
      uTime: { value: 0.0 },
      uSpeed: { value: speed },
      uGooeyness: { value: gooeyness },
      tTexture: { value: rTarget.texture },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uDitherEnabled: { value: ditherEnabled ? 1.0 : 0.0 },
      uDotSize: { value: dotSize },
      uDotGap: { value: dotGap },
      uBrightness: { value: brightness },
      uContrast: { value: contrast },
      uCrossEnabled: { value: crossEnabled ? 1.0 : 0.0 },
      uCrossIntensity: { value: crossIntensity },
      uBloomEnabled: { value: bloomEnabled ? 1.0 : 0.0 },
      uBloomIntensity: { value: bloomIntensity },
      uBloomSize: { value: bloomSize },
      uCrtEnabled: { value: crtEnabled ? 1.0 : 0.0 },
      uScanlineIntensity: { value: scanlines },
      uCurvature: { value: curvature },
      uVignetteIntensity: { value: vignette },
      uChroma: { value: chroma }
    };
    uniformsRef.current = uniforms;

    // PASS 1: Liquid Glass Refraction & Specular Shader
    const fluidVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fluidFragmentShader = `
      uniform float uTime;
      uniform float uSpeed;
      uniform float uGooeyness;
      varying vec2 vUv;

      // Hash and Noise utilities
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                   mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 4; ++i) {
          v += a * noise(p);
          p = rot * p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      // Generate base background color swirls (Deep space indigo/violet)
      vec3 getBaseBackground(vec2 uv, float t) {
        float n = fbm(uv * 1.8 + vec2(t * 0.04));
        vec3 c1 = vec3(0.015, 0.01, 0.035);   // Deep obsidian carbon
        vec3 c2 = vec3(0.07, 0.06, 0.15);    // Velvet indigo
        vec3 c3 = vec3(0.18, 0.12, 0.28);    // Rich violet
        
        vec3 col = mix(c1, c2, uv.y);
        col = mix(col, c3, n * 1.2);
        return col;
      }

      void main() {
        // Spatial coordinate scaling for gooey simulation
        vec2 p = (vUv - 0.5) * uGooeyness * 4.5;
        float t = uTime * uSpeed * 0.28;
        
        // Domain warping for organic liquid glass movement
        vec2 q = vec2(0.0);
        q.x = fbm(p + vec2(0.0, t));
        q.y = fbm(p + vec2(1.0, t * 0.8));

        vec2 r = vec2(0.0);
        r.x = fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 0.15);
        r.y = fbm(p + 3.0 * q + vec2(8.3, 2.8) + t * 0.1);

        float gooeyHeight = fbm(p + 3.0 * r);

        // Finite differences to compute gooey glass normals
        vec2 eps = vec2(0.015, 0.0);
        float h_x = fbm(p + eps.xy + 3.0 * r);
        float h_y = fbm(p + eps.yx + 3.0 * r);
        vec3 normal = normalize(vec3(-(h_x - gooeyHeight) / eps.x, -(h_y - gooeyHeight) / eps.x, 2.0));

        // Refracted coordinates mapping with chromatic dispersion (Rainbow edges!)
        vec2 uvR = vUv + normal.xy * 0.11;
        vec2 uvG = vUv + normal.xy * 0.09;
        vec2 uvB = vUv + normal.xy * 0.07;

        vec3 refractedColor = vec3(
          getBaseBackground(uvR, t).r,
          getBaseBackground(uvG, t).g,
          getBaseBackground(uvB, t).b
        );

        // Fresnel reflection (brightens edges of glass blobs)
        float fresnel = pow(1.0 - max(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0), 3.5);

        // Two bright specular highlights (molten glass shine)
        vec3 silverLight = normalize(vec3(0.6, 0.6, 1.0));
        vec3 reflectSilver = reflect(-silverLight, normal);
        float specSilver = pow(max(reflectSilver.z, 0.0), 128.0);

        vec3 goldLight = normalize(vec3(-0.6, -0.4, 0.8));
        vec3 reflectGold = reflect(-goldLight, normal);
        float specGold = pow(max(reflectGold.z, 0.0), 48.0);

        // Blend refracted background, fresnel glow, and bright glass highlights
        vec3 finalColor = refractedColor;
        finalColor += vec3(1.0) * specSilver * 2.2;                     // Shiny platinum highlight
        finalColor += vec3(0.95, 0.78, 0.38) * specGold * 0.85;        // Shiny warm gold highlight
        finalColor += vec3(1.0) * fresnel * 0.4;                       // Edge reflections

        finalColor = clamp(finalColor, 0.0, 1.0);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const fluidMaterial = new THREE.ShaderMaterial({
      vertexShader: fluidVertexShader,
      fragmentShader: fluidFragmentShader,
      uniforms: uniforms
    });

    const fluidMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fluidMaterial);
    scene.add(fluidMesh);

    // PASS 2: Post-Processing Shader
    const postVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const postFragmentShader = `
      uniform sampler2D tTexture;
      uniform vec2 uResolution;
      varying vec2 vUv;

      uniform float uDitherEnabled;
      uniform float uCrossEnabled;
      uniform float uBloomEnabled;
      uniform float uCrtEnabled;

      uniform float uDotSize;
      uniform float uDotGap;
      uniform float uBrightness;
      uniform float uContrast;
      uniform float uCrossIntensity;
      uniform float uBloomIntensity;
      uniform float uBloomSize;
      uniform float uScanlineIntensity;
      uniform float uCurvature;
      uniform float uVignetteIntensity;
      uniform float uChroma;

      vec2 curve(vec2 uv, float curv) {
        vec2 d = uv - 0.5;
        float r2 = d.x*d.x + d.y*d.y;
        return 0.5 + d * (1.0 + curv * 0.025 * r2);
      }

      void main() {
        vec2 uv = vUv;
        vec2 d = uv - 0.5;

        // Curvature
        if (uCrtEnabled > 0.5 && uCurvature > 0.0) {
          uv = curve(uv, uCurvature);
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
          }
        }

        // Chromatic Aberration
        vec4 baseColor;
        if (uCrtEnabled > 0.5 && uChroma > 0.0) {
          vec2 rOffset = d * (uChroma * 0.0035);
          baseColor.r = texture2D(tTexture, uv - rOffset).r;
          baseColor.g = texture2D(tTexture, uv).g;
          baseColor.b = texture2D(tTexture, uv + rOffset).b;
          baseColor.a = 1.0;
        } else {
          baseColor = texture2D(tTexture, uv);
        }

        vec4 color = baseColor;

        // Bloom
        if (uBloomEnabled > 0.5 && uBloomIntensity > 0.0) {
          vec4 blur = vec4(0.0);
          float totalWeight = 0.0;
          float bSize = uBloomSize * 0.003;
          
          for(float x = -1.5; x <= 1.5; x += 1.0) {
            for(float y = -1.5; y <= 1.5; y += 1.0) {
              vec2 offset = vec2(x, y) * bSize;
              vec4 sCol = texture2D(tTexture, uv + offset);
              float brightnessVal = dot(sCol.rgb, vec3(0.299, 0.587, 0.114));
              float weight = smoothstep(0.3, 0.7, brightnessVal);
              
              blur += sCol * weight;
              totalWeight += weight;
            }
          }
          if (totalWeight > 0.0) {
            blur /= totalWeight;
            color.rgb += blur.rgb * uBloomIntensity * 0.65;
          }
        }

        // Brightness & Contrast
        color.rgb = (color.rgb - 0.5) * uContrast + 0.5 + (uBrightness - 1.0);
        color.rgb = clamp(color.rgb, 0.0, 1.0);

        // Crosshatch
        if (uCrossEnabled > 0.5 && uCrossIntensity > 0.0) {
          float lum = dot(color.rgb, vec3(0.299, 0.587, 0.114));
          float hatch = 1.0;
          vec2 screenPos = gl_FragCoord.xy;
          
          if (lum < 0.75) {
            if (mod(screenPos.x + screenPos.y, 8.0) < 1.1) hatch -= 0.25 * uCrossIntensity;
          }
          if (lum < 0.5) {
            if (mod(screenPos.x - screenPos.y, 8.0) < 1.1) hatch -= 0.25 * uCrossIntensity;
          }
          if (lum < 0.3) {
            if (mod(screenPos.x + screenPos.y - 4.0, 8.0) < 1.1) hatch -= 0.25 * uCrossIntensity;
          }
          if (lum < 0.15) {
            if (mod(screenPos.x - screenPos.y - 4.0, 8.0) < 1.1) hatch -= 0.25 * uCrossIntensity;
          }
          color.rgb *= hatch;
        }

        // Dot Matrix
        if (uDitherEnabled > 0.5) {
          vec2 grid = vec2(uDotSize + uDotGap);
          vec2 localCoord = mod(gl_FragCoord.xy, grid);
          float dist = length(localCoord - grid * 0.5);
          
          float dotRadius = uDotSize * 0.5;
          float dotMask = smoothstep(dotRadius, dotRadius - 0.5, dist);
          
          vec2 cellCenterUv = (floor(gl_FragCoord.xy / grid) * grid + grid * 0.5) / uResolution;
          vec4 cellColor = texture2D(tTexture, cellCenterUv);
          
          color.rgb = mix(color.rgb * 0.05, cellColor.rgb, dotMask);
        }

        // CRT Scanlines
        if (uCrtEnabled > 0.5 && uScanlineIntensity > 0.0) {
          float scanline = sin(uv.y * uResolution.y * 1.5) * 0.5 + 0.5;
          color.rgb *= mix(1.0, scanline, uScanlineIntensity * 0.28);
        }

        // Vignette
        if (uCrtEnabled > 0.5 && uVignetteIntensity > 0.0) {
          float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
          vignette = clamp(pow(16.0 * vignette, uVignetteIntensity * 0.22), 0.0, 1.0);
          color.rgb *= vignette;
        }

        gl_FragColor = vec4(color.rgb, 1.0);
      }
    `;

    const postScene = new THREE.Scene();
    const postMaterial = new THREE.ShaderMaterial({
      vertexShader: postVertexShader,
      fragmentShader: postFragmentShader,
      uniforms: uniforms
    });

    const postMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMaterial);
    postScene.add(postMesh);

    // Resize listener
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      const prRatio = renderer.getPixelRatio();
      rTarget.setSize(w * prRatio, h * prRatio);
      uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render Loop
    const clock = new THREE.Clock();
    let animId = null;

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      uniforms.uTime.value = clock.getElapsedTime();

      // Pass 1: Render Fluid Mesh to Target
      renderer.setRenderTarget(rTarget);
      renderer.render(scene, camera);

      // Pass 2: Process target texture to screen
      renderer.setRenderTarget(null);
      renderer.render(postScene, camera);
    };

    renderLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      fluidMaterial.dispose();
      postMaterial.dispose();
      rTarget.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="crt-frame" ref={containerRef} className="visible" />;
}
