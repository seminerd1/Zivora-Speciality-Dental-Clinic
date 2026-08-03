import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, Navigation, Instagram, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';

const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .58.04.86.12V9.34a6.37 6.37 0 00-1-.08 6.34 6.34 0 106.34 6.34V8.4a8.16 8.16 0 004.91 1.6V6.55a4.85 4.85 0 01-1-.01z"/>
  </svg>
);

export const ClinicInfoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-[#f8fafc] via-[#f0f9ff] to-[#e0f2fe]/40 text-[#0f172a] border-b border-[#bae6fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-[#0284c7] bg-[#e0f2fe] px-4 py-1.5 rounded-full border border-[#bae6fd] shadow-sm">
            {t('contactTitle')}
          </span>
          <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0f172a] tracking-tight">
            {t('visitClinicTitle')}
          </h2>
          <p className="text-[#475569] text-sm font-light leading-relaxed">
            {t('visitClinicSub')}
          </p>

          {/* Social Media Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/zivora_speciality/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 bg-white hover:bg-[#e0f2fe] text-[#0f172a] border border-[#bae6fd] text-xs font-mono tracking-wider uppercase font-semibold transition-all shadow-sm rounded-xl group cursor-pointer active:scale-95"
            >
              <div className="p-1 bg-[#e1306c]/10 rounded-lg group-hover:bg-[#e1306c] transition-colors">
                <Instagram className="w-4 h-4 text-[#e1306c] group-hover:text-white transition-colors" />
              </div>
              <span>Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@zivora_speciality/video/7566284663585606968"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 bg-white hover:bg-[#e0f2fe] text-[#0f172a] border border-[#bae6fd] text-xs font-mono tracking-wider uppercase font-semibold transition-all shadow-sm rounded-xl group cursor-pointer active:scale-95"
            >
              <div className="p-1 bg-[#0284c7]/10 rounded-lg group-hover:bg-[#0284c7] transition-colors">
                <TikTokIcon className="w-4 h-4 text-[#0284c7] group-hover:text-white transition-colors" />
              </div>
              <span>TikTok</span>
            </a>
          </div>
        </motion.div>

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-[#bae6fd] space-y-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(2,132,199,0.06)] hover:border-[#0284c7] transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#e0f2fe] text-[#0284c7] rounded-2xl border border-[#bae6fd]">
                  <MapPin className="w-6 h-6 text-[#0284c7]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0284c7]">{t('addressTitle')}</h4>
                  <p className="editorial-serif text-xl text-[#0f172a] font-semibold mt-0.5">{t('addressVal')}</p>
                  <p className="text-xs text-[#475569] font-light mt-0.5">{t('cityCountry')}</p>
                </div>
              </div>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#0284c7] font-bold block pt-3 border-t border-[#f0f9ff]">
              {t('parkingInfo')}
            </span>
          </motion.div>

          {/* Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-[#bae6fd] space-y-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(2,132,199,0.06)] hover:border-[#0284c7] transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#e0f2fe] text-[#0284c7] rounded-2xl border border-[#bae6fd]">
                  <Clock className="w-6 h-6 text-[#0284c7]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0284c7]">{t('hoursTitle')}</h4>
                  <p className="text-xs text-[#0f172a] font-semibold mt-1">{t('hoursMonFri')}</p>
                  <p className="text-xs text-[#475569] mt-0.5">{t('hoursSat')}</p>
                  <p className="text-xs text-[#64748b] mt-0.5">{t('hoursSun')}</p>
                </div>
              </div>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#0284c7] font-bold block pt-3 border-t border-[#f0f9ff]">
              {t('triageInfo')}
            </span>
          </motion.div>

          {/* Direct Lines & Email */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-[#bae6fd] space-y-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(2,132,199,0.06)] hover:border-[#0284c7] transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#e0f2fe] text-[#0284c7] rounded-2xl border border-[#bae6fd]">
                  <Phone className="w-6 h-6 text-[#0284c7]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0284c7]">{t('phoneTitle')}</h4>
                  <p className="editorial-serif text-xl text-[#0f172a] font-semibold mt-0.5">{t('phoneVal')}</p>
                  <p className="text-xs text-[#64748b] font-medium mt-0.5">{t('emergencyTitle')}: {t('emergencyVal')}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-[#f0f9ff] flex items-center gap-2 text-xs text-[#475569]">
                <Mail className="w-4 h-4 text-[#0284c7]" />
                <span>{t('emailVal')}</span>
              </div>
            </div>

            {/* Social Media Links inside contact card */}
            <div className="pt-3 border-t border-[#f0f9ff] space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0284c7] block">
                Social Channels
              </span>
              <div className="flex items-center gap-3 text-xs font-semibold text-[#0f172a]">
                <a
                  href="https://www.instagram.com/zivora_speciality/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#e1306c] transition-colors cursor-pointer group"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
                  <span>Instagram</span>
                </a>
                <span className="text-[#bae6fd]">•</span>
                <a
                  href="https://www.tiktok.com/@zivora_speciality/video/7566284663585606968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#0284c7] transition-colors cursor-pointer group"
                >
                  <TikTokIcon className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
