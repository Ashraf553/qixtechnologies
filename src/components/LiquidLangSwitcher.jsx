import React, { useState, useRef, useEffect } from 'react';
import { useLangStore } from '../store/useLangStore';

export default function LiquidLangSwitcher() {
  const lang = useLangStore((state) => state.lang);
  const setLang = useLangStore((state) => state.setLang);
  
  const languages = ['ru', 'uz', 'en'];
  const currentIndex = languages.indexOf(lang);
  
  const containerRef = useRef(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0); // Offset in pixels from initial position
  const [tempIndex, setTempIndex] = useState(currentIndex);
  
  const dragStartRef = useRef(0);
  const initialLeftRef = useRef(0);
  
  const containerWidth = 132;
  const padding = 2;
  const contentWidth = containerWidth - padding * 2; // 128px
  const segmentWidth = contentWidth / 3; // 42.66px
  
  // Update tempIndex when lang changes externally
  useEffect(() => {
    setTempIndex(currentIndex);
  }, [currentIndex]);
  
  // Mouse event handlers (attached to container)
  const onMouseDown = (e) => {
    e.preventDefault();
    if (!containerRef.current) return;
    
    const startX = e.clientX;
    const startTime = Date.now();
    const rect = containerRef.current.getBoundingClientRect();
    
    // Relative X position within the switcher container content bounds
    const clickXRelative = startX - rect.left - padding;
    const currentBubbleLeft = currentIndex * segmentWidth;
    
    // If the click is far from the current bubble, we snap initialLeft to the clicked spot
    let initialLeft = currentBubbleLeft;
    if (Math.abs(clickXRelative - (currentBubbleLeft + segmentWidth / 2)) > segmentWidth * 0.7) {
      initialLeft = Math.max(0, Math.min(contentWidth - segmentWidth, clickXRelative - segmentWidth / 2));
    }
    
    setIsDragging(true);
    dragStartRef.current = startX;
    initialLeftRef.current = initialLeft;
    setDragOffset(0);
    
    let hasMoved = false;
    
    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      if (Math.abs(deltaX) > 4) {
        hasMoved = true;
      }
      
      let newLeft = initialLeft + deltaX;
      newLeft = Math.max(0, Math.min(contentWidth - segmentWidth, newLeft));
      
      const newOffset = newLeft - initialLeft;
      setDragOffset(newOffset);
      
      const nearestIdx = Math.max(0, Math.min(2, Math.round(newLeft / segmentWidth)));
      setTempIndex(nearestIdx);
    };
    
    const handleMouseUp = (upEvent) => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      const duration = Date.now() - startTime;
      const deltaX = upEvent.clientX - startX;
      
      if (!hasMoved && duration < 300) {
        // Simple tap! Snaps to the tapped segment
        const tapXRelative = upEvent.clientX - rect.left - padding;
        const tapIdx = Math.max(0, Math.min(2, Math.floor(tapXRelative / segmentWidth)));
        setLang(languages[tapIdx]);
      } else {
        // Drag release: snaps to nearest segment
        const finalLeft = initialLeft + deltaX;
        const nearestIdx = Math.max(0, Math.min(2, Math.round(finalLeft / segmentWidth)));
        setLang(languages[nearestIdx]);
      }
      setDragOffset(0);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  // Touch event handlers (attached to container)
  const onTouchStart = (e) => {
    if (!containerRef.current) return;
    
    const startX = e.touches[0].clientX;
    const startTime = Date.now();
    const rect = containerRef.current.getBoundingClientRect();
    
    const clickXRelative = startX - rect.left - padding;
    const currentBubbleLeft = currentIndex * segmentWidth;
    
    let initialLeft = currentBubbleLeft;
    if (Math.abs(clickXRelative - (currentBubbleLeft + segmentWidth / 2)) > segmentWidth * 0.7) {
      initialLeft = Math.max(0, Math.min(contentWidth - segmentWidth, clickXRelative - segmentWidth / 2));
    }
    
    setIsDragging(true);
    dragStartRef.current = startX;
    initialLeftRef.current = initialLeft;
    setDragOffset(0);
    
    let hasMoved = false;
    
    const handleTouchMove = (moveEvent) => {
      if (moveEvent.cancelable) {
        moveEvent.preventDefault();
      }
      const deltaX = moveEvent.touches[0].clientX - startX;
      if (Math.abs(deltaX) > 4) {
        hasMoved = true;
      }
      
      let newLeft = initialLeft + deltaX;
      newLeft = Math.max(0, Math.min(contentWidth - segmentWidth, newLeft));
      
      const newOffset = newLeft - initialLeft;
      setDragOffset(newOffset);
      
      const nearestIdx = Math.max(0, Math.min(2, Math.round(newLeft / segmentWidth)));
      setTempIndex(nearestIdx);
    };
    
    const handleTouchEnd = (endEvent) => {
      setIsDragging(false);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      
      const duration = Date.now() - startTime;
      const endX = endEvent.changedTouches[0].clientX;
      const deltaX = endX - startX;
      
      if (!hasMoved && duration < 300) {
        const tapXRelative = endX - rect.left - padding;
        const tapIdx = Math.max(0, Math.min(2, Math.floor(tapXRelative / segmentWidth)));
        setLang(languages[tapIdx]);
      } else {
        const finalLeft = initialLeft + deltaX;
        const nearestIdx = Math.max(0, Math.min(2, Math.round(finalLeft / segmentWidth)));
        setLang(languages[nearestIdx]);
      }
      setDragOffset(0);
    };
    
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
  };
  
  // Calculate current rendered position of the bubble
  const currentLeft = isDragging
    ? initialLeftRef.current + dragOffset
    : currentIndex * segmentWidth;
    
  return (
    <div 
      ref={containerRef}
      className={`liquid-switcher-container ${isDragging ? 'dragging' : ''}`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Sliding liquid glass bubble */}
      <div 
        className="liquid-bubble"
        style={{
          left: `${currentLeft + padding}px`
        }}
      />
      
      {/* Language Buttons (pointer-events: none makes mouse events go through to container) */}
      {languages.map((item, idx) => (
        <button
          key={item}
          type="button"
          className={`liquid-lang-btn ${idx === tempIndex ? 'active' : ''}`}
          style={{ pointerEvents: 'none' }}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
