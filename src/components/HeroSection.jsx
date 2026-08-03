import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, ChevronRight, Sparkles, Award, Star, Activity, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext.jsx';
import { Tooth3D } from './Tooth3D.jsx';

export const HeroSection = ({ onOpenBooking, introDone = true }) => {
  const { t, lang } = useLanguage();
  const isAm = lang === 'am';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-[#0c4a6e] via-[#0284c7] to-[#0f172a] text-[#0f172a] overflow-hidden border-b border-[#38bdf8]/30 pt-20 sm:pt-24 pb-16 lg:pb-20">
      {/* Dynamic Animated Ambient Background Orbs & Radial Meshes */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.18] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-gradient-to-br from-[#38bdf8]/40 via-[#0284c7]/30 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 -right-40 w-[38rem] h-[38rem] bg-gradient-to-tl from-[#0ea5e9]/35 via-[#38bdf8]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#0369a1]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* GRAND HERO CONTAINER STAGE WITH TRANSLUCENT GLASSY LIGHT BLUE & WHITE GRADIENT */}
        <motion.div 
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full bg-gradient-to-br from-white/75 via-[#f0f9ff]/85 to-[#e0f2fe]/75 backdrop-blur-2xl border border-white/80 shadow-[0_25px_80px_rgba(2,132,199,0.3)] p-6 sm:p-10 lg:p-12 rounded-3xl relative overflow-hidden space-y-8"
        >
          
          {/* Decorative Subtle Background Watermark */}
          <div className="absolute -right-8 -bottom-10 text-[190px] font-serif font-extrabold text-[#0284c7]/5 pointer-events-none select-none leading-none">
            ZIVORA
          </div>

          {/* 1st REVEAL: Top Status & Location Badge Bar */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#bae6fd]/80"
          >
            <div className="flex items-center gap-3 bg-[#e0f2fe] border border-[#7dd3fc] px-4 py-2 rounded-full shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284c7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0284c7]"></span>
              </span>
              <span className={`text-[10px] sm:text-xs font-mono font-bold ${isAm ? 'tracking-normal' : 'uppercase tracking-[0.18em]'} text-[#0369a1]`}>
                {isAm ? 'ዚቮራ የጥርስ ሕክምና ክሊኒክ • ቦሌ አስረስ ህንፃ፣ አዲስ አበባ' : `${t('zivoraClinicName')} • Bole Asres 4th Floor, Addis Ababa`}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-[#0284c7]">
              <span className={`flex items-center gap-1.5 bg-[#f0f9ff] border border-[#bae6fd] px-3.5 py-1.5 rounded-full shadow-2xs ${isAm ? 'tracking-normal' : 'uppercase tracking-wider'}`}>
                <CheckCircle className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>WHO Sterilization Standards</span>
              </span>
            </div>
          </motion.div>

          {/* SPLIT HERO LAYOUT: LEFT EDITORIAL & RIGHT 3D MODEL CANVAS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* 2nd REVEAL: Welcome Badge */}
              <motion.div 
                variants={itemVariants}
                className={`inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#e0f2fe] via-[#f0f9ff] to-[#e0f2fe] border border-[#7dd3fc] text-[10px] sm:text-xs font-mono font-bold ${isAm ? 'tracking-normal' : 'uppercase tracking-[0.18em]'} text-[#0284c7] rounded-full shadow-2xs`}
              >
                <Star className="w-3.5 h-3.5 text-[#0284c7] fill-[#38bdf8]" />
                <span>{t('heroWelcome')}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
              </motion.div>

              {/* 3rd REVEAL: Main Hero Title */}
              <motion.h1 
                variants={itemVariants}
                className="editorial-serif text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#0f172a]"
              >
                {t('heroTitle')}
              </motion.h1>

              {/* 4th REVEAL: Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-[#334155] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {t('heroSub')}
              </motion.p>

              {/* 5th & 6th REVEAL: Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                {/* 5th REVEAL: 1st Action Button - Book Appointment */}
                <motion.button
                  variants={itemVariants}
                  onClick={() => onOpenBooking()}
                  className={`group flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0ea5e9] hover:from-[#0f172a] hover:to-[#1e293b] text-white text-xs sm:text-sm font-bold ${isAm ? 'tracking-normal font-sans' : 'uppercase tracking-[0.18em]'} whitespace-nowrap transition-all duration-300 cursor-pointer rounded-2xl shadow-xl shadow-[#0284c7]/30 hover:shadow-2xl active:scale-98`}
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">{t('btnBookAppt')}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* 6th REVEAL: 2nd Action Button - Explore Services */}
                <motion.button
                  variants={itemVariants}
                  onClick={() => scrollToSection('services')}
                  className={`flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#f0f9ff] hover:bg-[#e0f2fe] text-[#0f172a] border border-[#7dd3fc] hover:border-[#0284c7] text-xs sm:text-sm font-bold ${isAm ? 'tracking-normal font-sans' : 'uppercase tracking-[0.18em]'} whitespace-nowrap transition-all duration-300 cursor-pointer rounded-2xl shadow-xs active:scale-98`}
                >
                  <span className="whitespace-nowrap">{t('btnExploreServices')}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 text-[#0284c7]" />
                </motion.button>
              </div>

            </div>

            {/* 7th REVEAL: RIGHT COLUMN 3D INTERACTIVE CANVAS SHOWCASE STAGE */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5"
            >
              <div className="relative w-full bg-gradient-to-b from-white/80 via-[#f0f9ff]/85 to-[#e0f2fe]/75 backdrop-blur-xl rounded-3xl border border-white/90 p-5 sm:p-6 shadow-xl shadow-[#0284c7]/12 flex flex-col items-center justify-between min-h-[360px] overflow-hidden group space-y-4">
                
                {/* Glow Aura behind 3D Canvas */}
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#38bdf8]/25 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                {/* Top Banner Tag */}
                <div className="w-full flex items-center justify-between z-10">
                  <span className="px-3 py-1 bg-white/95 border border-[#bae6fd] text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284c7] rounded-full shadow-2xs backdrop-blur-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>Digital Radiography Scan</span>
                  </span>
                  <span className="px-2.5 py-1 bg-[#0284c7]/10 border border-[#0284c7]/25 text-[10px] font-mono font-bold text-[#0369a1] rounded-full">
                    3D Interactive 🔄
                  </span>
                </div>

                {/* Central 3D Canvas */}
                <div className="relative w-full flex items-center justify-center my-auto z-10 py-1">
                  <Tooth3D />
                </div>

                {/* Bottom Floating Stats Pill Bar */}
                <div className="w-full grid grid-cols-2 gap-2 pt-2 border-t border-[#bae6fd]/70 z-10">
                  <div className="p-2 bg-white/90 border border-[#bae6fd] rounded-xl shadow-2xs backdrop-blur-md flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
                    <div className="truncate">
                      <div className="text-[8px] font-mono font-bold text-[#0284c7] uppercase">3D Scan Tech</div>
                      <div className="text-[10px] font-bold text-[#0f172a] truncate">Low Radiation</div>
                    </div>
                  </div>

                  <div className="p-2 bg-white/90 border border-[#bae6fd] rounded-xl shadow-2xs backdrop-blur-md flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 text-[#0284c7] fill-[#0284c7] shrink-0" />
                    <div className="truncate">
                      <div className="text-[8px] font-mono font-bold text-[#0284c7] uppercase">Clinic Rating</div>
                      <div className="text-[10px] font-bold text-[#0f172a] truncate">4.95 / 5.0 Exceptional</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* 8th, 9th & 10th REVEAL: Bottom Feature Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#bae6fd]/80">
            {/* 8th REVEAL: Personalized Plan Card */}
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-2xl bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe]/60 border border-[#bae6fd] flex items-center gap-3.5 shadow-2xs hover:border-[#0284c7] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#bae6fd] text-[#0284c7] flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0f172a]">{t('heroPlanTitle')}</div>
                <div className="text-[10px] font-mono text-[#0284c7] font-semibold">{t('heroPlanBadge')}</div>
              </div>
            </motion.div>

            {/* 9th REVEAL: Modern Equipment Card */}
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-2xl bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe]/60 border border-[#bae6fd] flex items-center gap-3.5 shadow-2xs hover:border-[#0284c7] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#bae6fd] text-[#0ea5e9] flex items-center justify-center shrink-0 shadow-2xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0f172a]">{t('heroEquipTitle')}</div>
                <div className="text-[10px] font-mono text-[#0ea5e9] font-semibold">{t('heroEquipBadge')}</div>
              </div>
            </motion.div>

            {/* 10th REVEAL: Experienced Specialists Card */}
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-2xl bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe]/60 border border-[#bae6fd] flex items-center gap-3.5 shadow-2xs hover:border-[#0284c7] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#bae6fd] text-[#0369a1] flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0f172a]">{t('heroSpecTitle')}</div>
                <div className="text-[10px] font-mono text-[#0369a1] font-semibold">{t('heroSpecBadge')}</div>
              </div>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};


