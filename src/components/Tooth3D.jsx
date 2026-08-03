import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scan, Zap, Eye } from 'lucide-react';

export const Tooth3D = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mode, setMode] = useState('360'); // '360', 'xray', 'whitening'

  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none">
      
      {/* Interactive Mode Control Bar */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 z-30 bg-white/90 border border-[#bae6fd] p-1 rounded-full shadow-sm backdrop-blur-md">
        <button
          onClick={() => setMode('360')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
            mode === '360'
              ? 'bg-[#0284c7] text-white shadow-2xs'
              : 'text-[#475569] hover:text-[#0284c7]'
          }`}
        >
          <Scan className="w-3 h-3" />
          <span>360° View</span>
        </button>
        <button
          onClick={() => setMode('xray')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
            mode === 'xray'
              ? 'bg-[#6366f1] text-white shadow-2xs'
              : 'text-[#475569] hover:text-[#6366f1]'
          }`}
        >
          <Eye className="w-3 h-3" />
          <span>X-Ray</span>
        </button>
        <button
          onClick={() => setMode('whitening')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
            mode === 'whitening'
              ? 'bg-[#0ea5e9] text-white shadow-2xs'
              : 'text-[#475569] hover:text-[#0ea5e9]'
          }`}
        >
          <Zap className="w-3 h-3" />
          <span>Laser</span>
        </button>
      </div>

      <div 
        className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center cursor-pointer group my-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Radial Aura Glow */}
        <div className={`absolute inset-0 rounded-full blur-2xl pointer-events-none transition-all duration-500 ${
          mode === 'xray' 
            ? 'bg-radial from-[#38bdf8]/35 via-[#6366f1]/20 to-transparent' 
            : mode === 'whitening' 
            ? 'bg-radial from-[#e0f2fe]/80 via-[#38bdf8]/35 to-transparent' 
            : 'bg-radial from-[#38bdf8]/40 via-[#0284c7]/20 to-transparent'
        }`} />

        {/* Outer Orbital Vector Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-1 rounded-full border border-dashed border-[#0284c7]/35 flex items-center justify-center pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#0284c7] rounded-full shadow-[0_0_10px_#38bdf8]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#0ea5e9] rounded-full shadow-[0_0_8px_#0ea5e9]" />
        </motion.div>

        {/* Inner Orbital Vector Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-6 rounded-full border border-[#0284c7]/20 p-2 pointer-events-none"
        >
          <div className="w-full h-full rounded-full border border-dotted border-[#0284c7]/25" />
        </motion.div>

        {/* Main 3D Floating Vector Container */}
        <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center [perspective:1000px]">
          <motion.div
            animate={{
              rotateY: [0, 360],
              y: [-6, 6, -6],
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{
              rotateY: { duration: isHovered ? 5 : 12, repeat: Infinity, ease: 'linear' },
              y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.3 },
            }}
            className="w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
          >
            <div className="relative flex items-center justify-center">
              
              <svg
                viewBox="0 0 160 170"
                className="w-36 h-44 sm:w-40 sm:h-48 drop-shadow-[0_12px_24px_rgba(2,132,199,0.18)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Soft Blue Enamel Gradient */}
                  <linearGradient id="vectorEnamelLight" x1="15%" y1="0%" x2="85%" y2="100%">
                    <stop offset="0%" stopColor={mode === 'xray' ? '#38bdf8' : '#FFFFFF'} />
                    <stop offset="35%" stopColor={mode === 'xray' ? '#0284c7' : '#F0F9FF'} />
                    <stop offset="70%" stopColor={mode === 'xray' ? '#0369a1' : '#E0F2FE'} />
                    <stop offset="100%" stopColor={mode === 'xray' ? '#0c4a6e' : '#BAE6FD'} />
                  </linearGradient>

                  {/* Root Dentin Gradient */}
                  <linearGradient id="vectorRootLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={mode === 'xray' ? '#0284c7' : '#FFFFFF'} />
                    <stop offset="45%" stopColor={mode === 'xray' ? '#0369a1' : '#F0F9FF'} />
                    <stop offset="100%" stopColor={mode === 'xray' ? '#082f49' : '#CBD5E1'} />
                  </linearGradient>
                </defs>

                {/* Roots */}
                <path
                  d="M 52 92 C 45 110, 55 132, 48 152 C 46 158, 58 158, 62 152 C 68 132, 74 116, 80 106 C 86 116, 92 132, 98 152 C 102 158, 114 158, 112 152 C 105 132, 115 110, 108 92 Z"
                  fill="url(#vectorRootLight)"
                  stroke={mode === 'xray' ? '#38bdf8' : '#0284c7'}
                  strokeWidth="1.5"
                />

                {/* Crown */}
                <path
                  d="M 38 48 C 38 32, 58 32, 70 42 C 75 46, 85 46, 90 42 C 102 32, 122 32, 122 48 C 126 65, 120 82, 108 92 Q 80 100 52 92 C 40 82, 34 65, 38 48 Z"
                  fill="url(#vectorEnamelLight)"
                  stroke={mode === 'xray' ? '#e0f2fe' : '#0284c7'}
                  strokeWidth="2"
                />

                {/* Cusps & Highlights */}
                <path
                  d="M 40 46 C 46 34, 62 34, 70 44 C 60 48, 48 48, 40 46 Z"
                  fill={mode === 'xray' ? '#38bdf8' : '#FFFFFF'}
                  opacity="0.9"
                />
                <path
                  d="M 90 44 C 98 34, 114 34, 120 46 C 112 48, 100 48, 90 44 Z"
                  fill={mode === 'xray' ? '#38bdf8' : '#FFFFFF'}
                  opacity="0.9"
                />

                {/* Occlusal Fissures */}
                <path
                  d="M 48 50 Q 80 58 112 50 M 80 44 L 80 72 M 62 52 Q 80 62 98 52"
                  stroke={mode === 'xray' ? '#e0f2fe' : '#0284c7'}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>

              {/* Laser / Whitening Scan Beam Effect */}
              {(mode === 'whitening' || mode === 'xray') && (
                <motion.div
                  animate={{
                    top: ['5%', '90%', '5%'],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute left-2 right-2 h-1 bg-gradient-to-r from-transparent via-[#0284c7] to-transparent shadow-[0_0_18px_#38bdf8] rounded-full pointer-events-none"
                />
              )}

            </div>
          </motion.div>
        </div>

        {/* Ambient Floating Micro Star Sparkles */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-3 right-4 text-[#0284c7] text-sm select-none pointer-events-none drop-shadow-2xs"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 left-4 text-[#0ea5e9] text-xs select-none pointer-events-none"
        >
          ✨
        </motion.div>
      </div>

    </div>
  );
};
