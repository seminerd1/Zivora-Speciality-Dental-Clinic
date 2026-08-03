import React from 'react';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Award, 
  Star, 
  Activity, 
  CheckCircle2, 
  Globe,
  Zap,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext.jsx';
import { Tooth3D } from './Tooth3D.jsx';

export const HeroSection = ({ onOpenBooking, introDone = true }) => {
  const { t, lang, setLang } = useLanguage();
  const isAm = lang === 'am';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#070e1c] text-slate-100 overflow-hidden pt-20 sm:pt-24 pb-16 lg:pb-24 border-b border-sky-500/20">
      
      {/* ================= BACKGROUND GLOWS & CYBERNETIC NEON GRID ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.12] pointer-events-none" />
      
      {/* Floating Animated Ambient Glowing Orbs */}
      <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-gradient-to-br from-sky-500/35 via-cyan-400/25 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-32 w-[40rem] h-[40rem] bg-gradient-to-tl from-blue-600/30 via-sky-400/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[30rem] h-[30rem] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Grid Lighting Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent shadow-[0_0_15px_#38bdf8]" />

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* ================= GRAND HERO GLASS CANVAS CONTAINER ================= */}
        <motion.div 
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full bg-slate-900/60 backdrop-blur-3xl border border-sky-500/30 shadow-[0_20px_80px_rgba(2,132,199,0.35)] p-8 sm:p-12 lg:p-16 rounded-3xl relative overflow-hidden space-y-10"
        >
          {/* Subtle Cyber Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sky-400/80 rounded-tl-3xl shadow-[0_0_10px_#38bdf8]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-sky-400/80 rounded-tr-3xl shadow-[0_0_10px_#38bdf8]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-sky-400/80 rounded-bl-3xl shadow-[0_0_10px_#38bdf8]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-400/80 rounded-br-3xl shadow-[0_0_10px_#38bdf8]" />

          {/* Watermark Branding Background */}
          <div className="absolute -right-10 -bottom-12 text-[210px] font-extrabold text-sky-500/[0.03] pointer-events-none select-none tracking-tighter leading-none">
            ZIVORA
          </div>

          {/* ---------------- 1st REVEAL: Top Status, Location & Language Bar ---------------- */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-sky-500/20"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2.5 bg-slate-950/80 border border-sky-400/40 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                </span>
                <span className={`text-xs font-mono font-bold ${isAm ? 'tracking-normal' : 'uppercase tracking-wider'} text-sky-200`}>
                  {isAm ? 'ዚቮራ የጥርስ ሕክምና ክሊኒክ • ቦሌ አስረስ ህንፃ፣ 4ኛ ፎቅ' : `${t('zivoraClinicName')} • Bole Asres 4th Floor, Addis Ababa`}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 bg-slate-950/60 border border-sky-500/20 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 drop-shadow-[0_0_5px_#22d3ee]" />
                <span>WHO Sterilization Standards</span>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-950/80 border border-sky-400/30 p-1 rounded-full shadow-[0_0_15px_rgba(2,132,199,0.2)]">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                  lang === 'en' 
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 shadow-[0_0_12px_#38bdf8]' 
                    : 'text-sky-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('am')}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                  lang === 'am' 
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 shadow-[0_0_12px_#38bdf8]' 
                    : 'text-sky-300 hover:text-white'
                }`}
              >
                አማርኛ
              </button>
            </div>
          </motion.div>

          {/* ---------------- MAIN SPLIT HERO SECTION LAYOUT ---------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT EDITORIAL COLUMN */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* 2nd REVEAL: Neon Welcome Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-950/60 border border-sky-400/50 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{t('heroWelcome')}</span>
                <Zap className="w-3.5 h-3.5 text-sky-400" />
              </motion.div>

              {/* 3rd REVEAL: Top Headline & Secondary Glowing Headline */}
              <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                  {isAm ? 'የተሻለ ፈገግታ የተሻለ ህይወት።' : 'Smile Brighter. Live Better.'}
                </h1>
                <h2 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tight bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.85)]">
                  {isAm ? 'ዘመናዊ የጥርስ ሕክምና' : 'Where Advanced Dentistry'}
                </h2>
              </motion.div>

              {/* 4th REVEAL: Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm"
              >
                {isAm ? 'ከእውነተኛ ትኩረትና እንክብካቤ ጋር የሚገናኝበት።' : 'Meets Genuine Care.'}
              </motion.p>

              {/* 5th & 6th REVEAL: ACTION BUTTONS WITH RADIANT GLOW & HOVER EFFECTS */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2"
              >
                {/* 5th REVEAL: 1st Action Button - Radiant Glowing Primary Button */}
                <button
                  onClick={() => onOpenBooking ? onOpenBooking() : scrollToSection('booking')}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 hover:from-sky-400 hover:to-cyan-400 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-2xl cursor-pointer shadow-[0_0_30px_rgba(56,189,248,0.65)] hover:shadow-[0_0_55px_rgba(56,189,248,0.95)] hover:scale-105 active:scale-95 transition-all duration-300 border border-sky-200/80 overflow-hidden"
                >
                  {/* Subtle Light Beam Sweep Effect */}
                  <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                  
                  <Calendar className="w-4 h-4 shrink-0 text-slate-950" />
                  <span className="relative z-10 whitespace-nowrap">{t('btnBookAppt')}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
                </button>

                {/* 6th REVEAL: 2nd Action Button - Glowing Outline Glassmorphic Button */}
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center gap-2.5 px-7 py-4 bg-slate-950/70 hover:bg-sky-500/15 text-sky-200 hover:text-white border border-sky-400/50 hover:border-sky-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-2xl cursor-pointer shadow-[0_0_20px_rgba(2,132,199,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] active:scale-95 transition-all duration-300 backdrop-blur-lg"
                >
                  <span className="whitespace-nowrap">{t('btnExploreServices')}</span>
                  <ChevronRight className="w-4 h-4 text-cyan-300 shrink-0" />
                </button>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: 3D DISPLAY STAGE WITH NEON GLOWS */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5"
            >
              <div className="relative w-full bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-sky-950/80 backdrop-blur-2xl rounded-3xl border border-sky-400/40 p-6 shadow-[0_0_50px_rgba(2,132,199,0.3)] flex flex-col items-center justify-between min-h-[400px] overflow-hidden group space-y-4">
                
                {/* Radiant Backdrop Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/25 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                {/* Top Badge Overlay */}
                <div className="w-full flex items-center justify-start z-10">
                  <span className="px-3.5 py-1 bg-slate-950/90 border border-sky-400/50 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.3)] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    <span>3D Radiography Scan</span>
                  </span>
                </div>

                {/* Interactive 3D Tooth Canvas Component */}
                <div className="relative w-full flex items-center justify-center my-auto z-10 py-2">
                  <Tooth3D />
                </div>

                {/* Bottom Floating Stats Bar */}
                <div className="w-full grid grid-cols-2 gap-3 pt-3 border-t border-sky-500/30 z-10">
                  <div className="p-2.5 bg-slate-950/80 border border-sky-500/30 rounded-xl shadow-inner flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-cyan-400 shrink-0 drop-shadow-[0_0_8px_#22d3ee]" />
                    <div className="truncate">
                      <div className="text-[9px] font-mono font-bold text-sky-400 uppercase">3D Scan Tech</div>
                      <div className="text-xs font-bold text-slate-100 truncate">Low Radiation</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-950/80 border border-sky-500/30 rounded-xl shadow-inner flex items-center gap-2.5">
                    <Star className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0 drop-shadow-[0_0_8px_#fcd34d]" />
                    <div className="truncate">
                      <div className="text-[9px] font-mono font-bold text-sky-400 uppercase">Clinic Rating</div>
                      <div className="text-xs font-bold text-slate-100 truncate">4.95 / 5.0 (500+ Reviews)</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* ---------------- 8th, 9th & 10th REVEAL: Bottom Glowing Feature Cards ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-sky-500/20">
            
            {/* Card 1 */}
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-2xl bg-slate-950/60 border border-sky-500/30 hover:border-cyan-400/80 flex items-center gap-4 shadow-[0_0_15px_rgba(2,132,199,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-950/80 border border-sky-400/40 text-cyan-300 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-100">{t('heroPlanTitle')}</div>
                <div className="text-[10px] font-mono text-cyan-300 font-semibold mt-0.5">{t('heroPlanBadge')}</div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-2xl bg-slate-950/60 border border-sky-500/30 hover:border-cyan-400/80 flex items-center gap-4 shadow-[0_0_15px_rgba(2,132,199,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-950/80 border border-sky-400/40 text-cyan-300 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-100">{t('heroEquipTitle')}</div>
                <div className="text-[10px] font-mono text-cyan-300 font-semibold mt-0.5">{t('heroEquipBadge')}</div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-2xl bg-slate-950/60 border border-sky-500/30 hover:border-cyan-400/80 flex items-center gap-4 shadow-[0_0_15px_rgba(2,132,199,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-950/80 border border-sky-400/40 text-cyan-300 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.3)] group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-100">{t('heroSpecTitle')}</div>
                <div className="text-[10px] font-mono text-cyan-300 font-semibold mt-0.5">{t('heroSpecBadge')}</div>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};