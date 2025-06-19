"use client";
import React, { useEffect, useRef } from "react";

const RippleCursor = () => {
  const rippleRef = useRef(null);
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let rippleX = mouseX;
  let rippleY = mouseY;

  useEffect(() => {
    const ripple = rippleRef.current;
    if (!ripple) return;

    const moveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      ripple.style.opacity = 0.7;
    };
    const downHandler = () => {
      ripple.style.transform = 'translate(-50%, -50%) scale(1.4)';
      ripple.style.opacity = 1;
    };
    const upHandler = () => {
      ripple.style.transform = 'translate(-50%, -50%) scale(1)';
      ripple.style.opacity = 0.7;
    };
    function animateRipple() {
      rippleX += (mouseX - rippleX) * 0.18;
      rippleY += (mouseY - rippleY) * 0.18;
      ripple.style.left = rippleX + 'px';
      ripple.style.top = rippleY + 'px';
      requestAnimationFrame(animateRipple);
    }
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mousedown', downHandler);
    window.addEventListener('mouseup', upHandler);
    animateRipple();
    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mousedown', downHandler);
      window.removeEventListener('mouseup', upHandler);
    };
  }, []);

  return (
    <div
      ref={rippleRef}
      id="ripple-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 120,
        height: 120,
        pointerEvents: 'none',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.01) 100%)',
        boxShadow: '0 0 32px 8px rgba(255,255,255,0.15)',
        mixBlendMode: 'lighten',
        filter: 'blur(2px) contrast(1.2)',
        opacity: 0.7,
        zIndex: 99999,
        transform: 'translate(-50%, -50%) scale(1)',
        transition: 'transform 0.18s cubic-bezier(.22,1,.36,1), opacity 0.18s',
      }}
    />
  );
};

export default RippleCursor; 