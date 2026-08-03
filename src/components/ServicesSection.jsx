import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';

export const ServicesSection = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const servicesList = [
    {
      id: 's1',
      category: 'Preventive',
      titleKey: 's1Title',
      descKey: 's1Desc',
      badge: 'ROUTINE & DIAGNOSTIC CARE',
      priceEstimate: 'Consultation & Cleaning',
      // These must match the keys we added to LanguageContext
      highlights: ['hUltrasonic', 'hPolishing', 'hDigitalScan', 'hOralExams'],
      accentColor: 'border-[#0284c7] bg-gradient-to-r from-[#e0f2fe] via-white to-[#e0f2fe]',
    },
    {
      id: 's3',
      category: 'Cosmetic',
      titleKey: 's3Title',
      descKey: 's3Desc',
      badge: 'POPULAR • SMILE TRANSFORM',
      priceEstimate: 'Veneers, Whitening & Makeovers',
      highlights: ['hLaserWhitening', 'hPorcelainVeneers', 'hCosmeticBonding', 'hContouring'],
      accentColor: 'border-[#0284c7] bg-gradient-to-r from-[#e0f2fe] via-white to-[#e0f2fe]',
    },
    {
      id: 's4',
      category: 'Orthodontics',
      titleKey: 's4Title',
      descKey: 's4Desc',
      badge: 'ALIGNMENT & BITE CORRECTION',
      priceEstimate: 'Clear & Standard Braces',
      highlights: ['hClearAligners', 'hBiteCorrection', 'hPedAdultAlign', 'hEnhancedAesthetics'],
      accentColor: 'border-[#0284c7] bg-gradient-to-r from-[#e0f2fe] via-white to-[#e0f2fe]',
    },
    {
      id: 's6',
      category: 'Surgical & Endodontics',
      titleKey: 's6Title',
      descKey: 's6Desc',
      badge: 'PAIN-FREE SURGERY & PULP',
      priceEstimate: 'Root Canal & Implants',
      highlights: ['hMicroEndo', 'hTitaniumImplants', 'hPreservation', 'hInstantRelief'],
      accentColor: 'border-[#0284c7] bg-gradient-to-r from-[#e0f2fe] via-white to-[#e0f2fe]',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#e0f2fe]/40 via-[#f0f9ff] to-[#f8fafc] text-[#0f172a] border-b border-[#bae6fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0f172a] tracking-tight">
            {t('servTitle')}
          </h2>
        </motion.div>

        {/* 2 Above & 2 Below Balanced 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`${service.accentColor} p-6 sm:p-8 rounded-3xl border space-y-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(2,132,199,0.08)] hover:shadow-xl hover:border-[#0284c7] transition-all group relative overflow-hidden`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-[#0284c7]/30 bg-[#e0f2fe] text-[#0284c7]">
                    {service.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="editorial-serif text-2xl sm:text-3xl text-[#0f172a] font-normal group-hover:text-[#0284c7] transition-colors">
                    {t(service.titleKey)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>

                {/* Highlights Grid - UPDATED TO USE t() */}
                <div className="pt-2 grid grid-cols-2 gap-2.5 border-t border-[#bae6fd]/60 text-xs font-mono text-[#334155]">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/80 p-2 rounded-xl border border-[#bae6fd]">
                      <Check className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
                      {/* This line t(h) converts the key into the translated text */}
                      <span className="truncate">{t(h)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Book CTA */}
              <div className="pt-4 border-t border-[#bae6fd]/60 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#64748b] block">Treatment Focus</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0284c7]">
                    {service.priceEstimate}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking({ name: t(service.titleKey), id: service.id })}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0284c7] hover:bg-[#0f172a] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-xl shadow-md active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>{t('btnBookService')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Diagnostic Consultation Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0f172a] text-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#7dd3fc]">
              {t('diagBannerTag')}
            </span>
            <h4 className="editorial-serif text-2xl sm:text-3xl text-white">{t('diagBannerTitle')}</h4>
            <p className="text-xs text-[#bae6fd] font-light max-w-xl">
              {t('diagBannerDesc')}
            </p>
          </div>
          <button
            onClick={() => onOpenBooking({ name: 'Diagnostic Consultation' })}
            className="px-8 py-4 bg-white text-[#0284c7] hover:bg-[#e0f2fe] text-xs font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-md shrink-0 active:scale-98"
          >
            {t('diagBannerBtn')}
          </button>
        </motion.div>

      </div>
    </section>
  );
};