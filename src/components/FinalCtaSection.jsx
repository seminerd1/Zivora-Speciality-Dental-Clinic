import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';

export const FinalCtaSection = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const scrollToLocation = () => {
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0ea5e9] text-white relative overflow-hidden shadow-inner">
      {/* Soft Luminous Background Circles */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6 max-w-3xl"
      >
        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-[#0f172a] bg-white/90 px-4 py-1.5 rounded-full shadow-md">
          {t('zivoraClinicName')}
        </span>

        <h2 className="editorial-serif text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
          {t('ctaTitle')}
        </h2>

        <p className="text-sm sm:text-base text-sky-100 font-medium max-w-xl mx-auto">
          {t('ctaBody1')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenBooking}
            className="group relative overflow-hidden flex items-center gap-2.5 px-8 py-3.5 bg-white hover:bg-[#0f172a] text-[#0f172a] hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer rounded-xl shadow-xl active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#0284c7] group-hover:text-white transition-colors" />
            <span>{t('btnScheduleAppt')}</span>
            <ArrowRight className="w-4 h-4 text-[#0284c7] group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToLocation}
            className="flex items-center gap-2.5 px-7 py-3.5 bg-[#0284c7]/40 hover:bg-[#0284c7] text-white border border-white/40 text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer rounded-xl shadow-sm"
          >
            <Phone className="w-4 h-4 text-sky-200" />
            <span>{t('btnContactTeam')}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
