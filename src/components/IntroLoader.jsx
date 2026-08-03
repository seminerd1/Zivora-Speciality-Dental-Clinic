import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const IntroLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!isVisible && onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#bae6fd] flex flex-col items-center justify-center overflow-hidden text-[#0f172a] border-b border-[#7dd3fc]"
          onAnimationComplete={handleAnimationComplete}
        >
          {/* Subtle background grid & radial light glow matching Hero section */}
          <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.14] pointer-events-none" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#38bdf8]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center [perspective:1000px]">
            
            {/* Teeth Vector Graphic with light blue aesthetic */}
            <motion.div
              initial={{ y: 90, opacity: 0, scale: 0.5, rotateY: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                rotateY: [0, 0, 360],
              }}
              transition={{
                y: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.5 },
                scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                rotateY: { 
                  duration: 1.2, 
                  delay: 0.5, 
                  ease: [0.25, 1, 0.35, 1],
                  times: [0, 0.25, 1]
                }
              }}
              className="relative p-7 rounded-full bg-white/90 border border-[#bae6fd] backdrop-blur-md shadow-[0_12px_40px_rgba(2,132,199,0.2)] [transform-style:preserve-3d]"
            >
              <svg 
                viewBox="0 0 100 100" 
                className="w-20 h-20 text-[#0284c7] filter drop-shadow-[0_4px_12px_rgba(2,132,199,0.35)]" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M 50 12 C 34 12, 20 20, 20 38 C 20 54, 26 66, 32 76 C 36 83, 38 90, 42 94 C 44 96, 47 95, 48 89 C 49 84, 50 74, 50 65 C 50 74, 51 84, 52 89 C 53 95, 56 96, 58 94 C 62 90, 64 83, 68 76 C 74 66, 80 54, 80 38 C 80 20, 66 12, 50 12 Z" fill="#F0F9FF" />
                <path d="M 36 30 C 42 26, 58 26, 64 30" strokeWidth="2" strokeOpacity="0.7" />
                <path d="M 44 24 C 48 22, 52 22, 56 24" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx="50" cy="46" r="3" fill="currentColor" fillOpacity="0.4" />
              </svg>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.4] }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="absolute inset-0 rounded-full border border-[#0284c7]/40 pointer-events-none"
              />
            </motion.div>

            {/* Editorial Brand Reveal Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-center space-y-2"
            >
              <h1 className="editorial-serif text-3xl sm:text-4xl text-[#0f172a] tracking-[0.2em] uppercase font-normal">
                Zivora <span className="font-semibold text-[#0284c7]">Speciality</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.35em] font-mono font-bold text-[#0369a1]">
                Dental Clinic
              </p>
            </motion.div>

            {/* Subtle progress indicator line */}
            <motion.div 
              className="mt-10 w-48 h-[3px] bg-[#bae6fd] rounded-full overflow-hidden relative shadow-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
