import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, ShieldCheck, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';
import logoImg from '../images/logo.png';

const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .58.04.86.12V9.34a6.37 6.37 0 00-1-.08 6.34 6.34 0 106.34 6.34V8.4a8.16 8.16 0 004.91 1.6V6.55a4.85 4.85 0 01-1-.01z"/>
  </svg>
);

export const Footer = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a192f] text-white border-t border-[#1e3a8a]/40 pt-16 pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Zivora Logo" 
                className="w-10 h-10 object-cover rounded-xl border border-[#38bdf8]/50 shadow-md" 
                referrerPolicy="no-referrer"
              />
              <span className="editorial-serif text-2xl tracking-wider text-white">
                {t('brandName')}
              </span>
            </div>
            <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
              {t('footerDesc')}
            </p>
            <div className="flex items-center gap-2 text-[#e0f2fe] font-semibold text-[10px] uppercase tracking-wider font-mono">
              <HeartPulse className="w-4 h-4 text-[#38bdf8]" />
              {t('footerMotto')}
            </div>

            {/* Social Media Links */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://www.instagram.com/zivora_speciality/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 bg-[#0f172a] hover:bg-[#38bdf8] text-[#e0f2fe] hover:text-[#0f172a] transition-all rounded-xl border border-[#1e3a8a]/60 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@zivora_speciality/video/7566284663585606968"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 bg-[#0f172a] hover:bg-[#38bdf8] text-[#e0f2fe] hover:text-[#0f172a] transition-all rounded-xl border border-[#1e3a8a]/60 cursor-pointer"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#38bdf8]">{t('footerQuickNav')}</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><button onClick={() => scrollToSection('hero')} className="text-[#cbd5e1] hover:text-white transition-colors cursor-pointer">{t('navAbout')}</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-[#cbd5e1] hover:text-white transition-colors cursor-pointer">About & Vision</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-[#cbd5e1] hover:text-white transition-colors cursor-pointer">{t('navServices')}</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-[#cbd5e1] hover:text-white transition-colors cursor-pointer">{t('navFaq')}</button></li>
            </ul>
          </div>

          {/* Patient Tools */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#38bdf8]">{t('footerPatientAccess')}</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><button onClick={() => scrollToSection('faq')} className="text-[#cbd5e1] hover:text-[#38bdf8] transition-colors cursor-pointer">{t('navFaq')}</button></li>
              <li><button onClick={onOpenBooking} className="text-[#cbd5e1] hover:text-white transition-colors cursor-pointer">{t('navBook')}</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#38bdf8]">{t('contactTitle')}</h4>
            <p className="text-[#cbd5e1] font-light text-xs">{t('cityCountry')}</p>
            <p className="editorial-serif text-lg text-white">{t('labelPhone')}: {t('phoneVal')}</p>
            <p className="text-[#cbd5e1] font-light text-xs">{t('labelEmail')}: {t('emailVal')}</p>
            
            {/* Social channels text links */}
            <div className="pt-1 flex items-center gap-3 text-xs text-[#e0f2fe]">
              <a href="https://www.instagram.com/zivora_speciality/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-[#e1306c]" /> Instagram
              </a>
              <span>•</span>
              <a href="https://www.tiktok.com/@zivora_speciality/video/7566284663585606968" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <TikTokIcon className="w-3.5 h-3.5 text-[#38bdf8]" /> TikTok
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-[#1e3a8a]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#94a3b8] font-mono">
          <p>{t('copyright')}</p>
          <div className="flex items-center gap-2 text-[#e0f2fe]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Board-Certified Dental Practice • Addis Ababa</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
