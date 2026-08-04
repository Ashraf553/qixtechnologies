import { create } from 'zustand';

export const useSynthesizerStore = create((set) => ({
  // Fluid settings
  speed: 0.85,
  gooeyness: 1.20,
  
  // Dot matrix
  ditherEnabled: true,
  dotSize: 5.0,
  dotGap: 2.5,
  brightness: 0.85,
  contrast: 0.60,
  
  // Crosshatch
  crossEnabled: false,
  crossIntensity: 0.95,
  
  // Bloom
  bloomEnabled: true,
  bloomIntensity: 0.55,
  bloomSize: 1.50,
  
  // CRT
  crtEnabled: true,
  scanlines: 0.75,
  curvature: 0.0,
  vignette: 2.00,
  chroma: 0.10,

  gpuTier: 'detecting…',

  // Actions
  setSpeed: (val) => set({ speed: val }),
  setGooeyness: (val) => set({ gooeyness: val }),
  setDitherEnabled: (val) => set({ ditherEnabled: val }),
  setDotSize: (val) => set({ dotSize: val }),
  setDotGap: (val) => set({ dotGap: val }),
  setBrightness: (val) => set({ brightness: val }),
  setContrast: (val) => set({ contrast: val }),
  setCrossEnabled: (val) => set({ crossEnabled: val }),
  setCrossIntensity: (val) => set({ crossIntensity: val }),
  setBloomEnabled: (val) => set({ bloomEnabled: val }),
  setBloomIntensity: (val) => set({ bloomIntensity: val }),
  setBloomSize: (val) => set({ bloomSize: val }),
  setCrtEnabled: (val) => set({ crtEnabled: val }),
  setScanlines: (val) => set({ scanlines: val }),
  setCurvature: (val) => set({ curvature: val }),
  setVignette: (val) => set({ vignette: val }),
  setChroma: (val) => set({ chroma: val }),
  setGpuTier: (val) => set({ gpuTier: val })
}));
