"use client";
import React, { useEffect, useRef, useState } from "react";

const LusionLoader = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [showL, setShowL] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const barFillRef = useRef(null);
  const percentRef = useRef(null);
  const lShapeRef = useRef(null);

  useEffect(() => {
    let prog = 0;
    const duration = 2000;
    const interval = 18;
    const step = 100 / (duration / interval);
    const loaderInterval = setInterval(() => {
      prog += step;
      if (prog > 100) prog = 100;
      setProgress(Math.floor(prog));
      if (prog >= 100) {
        clearInterval(loaderInterval);
        setTimeout(() => setShowL(true), 350);
        setTimeout(() => {
          if (lShapeRef.current) {
            lShapeRef.current.style.transform = 'translate(-50%, -50%) scale(10)';
          }
        }, 950);
        setTimeout(() => setHideLoader(true), 1700);
      }
    }, interval);
    return () => clearInterval(loaderInterval);
  }, []);

  if (hideLoader) return children;

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-[99999] transition-opacity duration-700 ${hideLoader ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)' }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[340px] h-[38px] bg-[#222] rounded-[19px] overflow-hidden mb-10 shadow-lg max-w-[90vw] sm:w-[180px] sm:h-[22px]">
          <div
            ref={barFillRef}
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-white to-gray-400 rounded-l-[19px] transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
          <span
            ref={percentRef}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl font-mono opacity-80 z-10 select-none sm:text-base sm:left-2"
          >
            {progress}%
          </span>
        </div>
        <div
          ref={lShapeRef}
          className={`absolute left-1/2 top-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 transition-all duration-700 sm:w-10 sm:h-10`}
          style={{ opacity: showL ? 1 : 0, transition: 'opacity 0.5s, transform 0.7s cubic-bezier(.22,1,.36,1)' }}
        >
          <div className="absolute bg-white rounded-md w-[18px] h-20 left-0 top-0 sm:w-2 sm:h-10"></div>
          <div className="absolute bg-white rounded-md w-[60px] h-[18px] left-[18px] top-[62px] sm:w-7 sm:h-2 sm:left-2 sm:top-8"></div>
        </div>
      </div>
    </div>
  );
};

export default LusionLoader; 