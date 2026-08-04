import React from 'react';
import { useSynthesizerStore } from '../store/useSynthesizerStore';

export default function SettingsPanel({ isOpen, onClose }) {
  const store = useSynthesizerStore();

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`settings-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose} 
      />

      {/* Slide-out Panel */}
      <div className={`settings-panel ${isOpen ? 'open' : ''}`} id="settings-panel">
        <div className="settings-panel-header">
          <span className="settings-panel-title">Visual Synthesizer</span>
          <button className="settings-panel-close" onClick={onClose} aria-label="Close settings">
            <svg viewBox="0 0 16 16"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
          </button>
        </div>

        <div className="settings-panel-body">
          
          {/* FLUID CONTROLS */}
          <div className="settings-section">
            <div className="settings-section-title">Fluid Aura</div>
            
            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Flow Speed</span>
                <span className="settings-value">{store.speed.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0" 
                max="2" 
                step="0.05" 
                value={store.speed} 
                onChange={(e) => store.setSpeed(parseFloat(e.target.value))} 
              />
            </div>
            
            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Gooeyness</span>
                <span className="settings-value">{store.gooeyness.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0.1" 
                max="3" 
                step="0.05" 
                value={store.gooeyness} 
                onChange={(e) => store.setGooeyness(parseFloat(e.target.value))} 
              />
            </div>
          </div>

          <div className="settings-divider" />

          {/* DOT MATRIX CONTROLS */}
          <div className="settings-section">
            <div className="settings-section-title">Dot Matrix</div>
            
            <div className="settings-row">
              <span className="settings-label">Enabled</span>
              <div 
                className={`s-toggle ${store.ditherEnabled ? 'on' : ''}`} 
                onClick={() => store.setDitherEnabled(!store.ditherEnabled)} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Dot Size</span>
                <span className="settings-value">{store.dotSize.toFixed(1)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="1" 
                max="12" 
                step="0.5" 
                value={store.dotSize} 
                onChange={(e) => store.setDotSize(parseFloat(e.target.value))} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Dot Gap</span>
                <span className="settings-value">{store.dotGap.toFixed(1)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0" 
                max="6" 
                step="0.5" 
                value={store.dotGap} 
                onChange={(e) => store.setDotGap(parseFloat(e.target.value))} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Brightness</span>
                <span className="settings-value">{store.brightness.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0.1" 
                max="2" 
                step="0.05" 
                value={store.brightness} 
                onChange={(e) => store.setBrightness(parseFloat(e.target.value))} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Contrast</span>
                <span className="settings-value">{store.contrast.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0.1" 
                max="2" 
                step="0.05" 
                value={store.contrast} 
                onChange={(e) => store.setContrast(parseFloat(e.target.value))} 
              />
            </div>
          </div>

          <div className="settings-divider" />

          {/* CROSSHATCH CONTROLS */}
          <div className="settings-section">
            <div className="settings-section-title">Crosshatch</div>
            
            <div className="settings-row">
              <span className="settings-label">Enabled</span>
              <div 
                className={`s-toggle ${store.crossEnabled ? 'on' : ''}`} 
                onClick={() => store.setCrossEnabled(!store.crossEnabled)} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Intensity</span>
                <span className="settings-value">{store.crossIntensity.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0" 
                max="1" 
                step="0.05" 
                value={store.crossIntensity} 
                onChange={(e) => store.setCrossIntensity(parseFloat(e.target.value))} 
              />
            </div>
          </div>

          <div className="settings-divider" />

          {/* BLOOM CONTROLS */}
          <div className="settings-section">
            <div className="settings-section-title">Bloom Glow</div>
            
            <div className="settings-row">
              <span className="settings-label">Enabled</span>
              <div 
                className={`s-toggle ${store.bloomEnabled ? 'on' : ''}`} 
                onClick={() => store.setBloomEnabled(!store.bloomEnabled)} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Intensity</span>
                <span className="settings-value">{store.bloomIntensity.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0" 
                max="2" 
                step="0.05" 
                value={store.bloomIntensity} 
                onChange={(e) => store.setBloomIntensity(parseFloat(e.target.value))} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Size</span>
                <span className="settings-value">{store.bloomSize.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0.5" 
                max="4" 
                step="0.1" 
                value={store.bloomSize} 
                onChange={(e) => store.setBloomSize(parseFloat(e.target.value))} 
              />
            </div>
          </div>

          <div className="settings-divider" />

          {/* CRT SHADER CONTROLS */}
          <div className="settings-section">
            <div className="settings-section-title">CRT Shader</div>
            
            <div className="settings-row">
              <span className="settings-label">Enabled</span>
              <div 
                className={`s-toggle ${store.crtEnabled ? 'on' : ''}`} 
                onClick={() => store.setCrtEnabled(!store.crtEnabled)} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Scanlines</span>
                <span className="settings-value">{store.scanlines.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0" 
                max="1" 
                step="0.05" 
                value={store.scanlines} 
                onChange={(e) => store.setScanlines(parseFloat(e.target.value))} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Curvature</span>
                <span className="settings-value">{store.curvature.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0" 
                max="5" 
                step="0.1" 
                value={store.curvature} 
                onChange={(e) => store.setCurvature(parseFloat(e.target.value))} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Vignette</span>
                <span className="settings-value">{store.vignette.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0" 
                max="5" 
                step="0.1" 
                value={store.vignette} 
                onChange={(e) => store.setVignette(parseFloat(e.target.value))} 
              />
            </div>

            <div className="settings-slider-row">
              <div className="settings-slider-header">
                <span className="settings-label">Chroma</span>
                <span className="settings-value">{store.chroma.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                className="s-range" 
                min="0" 
                max="5" 
                step="0.1" 
                value={store.chroma} 
                onChange={(e) => store.setChroma(parseFloat(e.target.value))} 
              />
            </div>
          </div>

          <div className="settings-divider" />

          {/* GPU Info */}
          <div className="settings-tier" id="settings-tier">
            GPU Tier: {store.gpuTier}
          </div>
        </div>
      </div>
    </>
  );
}
