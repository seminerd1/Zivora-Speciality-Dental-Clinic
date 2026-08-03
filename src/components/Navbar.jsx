import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';
import logoImg from '../images/logo.png';

export const Navbar = ({ onOpenBooking, activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: t('navAbout') },
    { id: 'services', label: t('navServices') },
    { id: 'faq', label: t('navFaq') },
    { id: 'location', label: t('navContact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl transition-all duration-500 border ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-[#bae6fd] shadow-[0_12px_35px_rgba(2,132,199,0.12)] py-2.5 px-4 sm:px-6'
            : 'bg-[#f0f9ff]/85 backdrop-blur-md border-[#7dd3fc]/60 shadow-lg py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo & Title */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer group focus:outline-none shrink-0"
          >
            <img 
              src={logoImg} 
              alt="Zivora Logo" 
              className="w-9 h-9 sm:w-10 sm:h-10 object-cover rounded-xl sm:rounded-2xl border border-[#7dd3fc] shadow-[0_4px_16px_rgba(2,132,199,0.35)] group-hover:scale-105 transition-all"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="editorial-serif text-lg sm:text-2xl font-normal text-[#0f172a] tracking-wider block leading-none group-hover:text-[#0284c7] transition-colors">
                  {t('brandName')}
                </span>
              </div>
              <span className="text-[8px] sm:text-[9.5px] font-mono tracking-[0.2em] sm:tracking-[0.28em] text-[#0284c7] uppercase font-bold block mt-0.5">
                {t('brandSub')}
              </span>
            </div>
          </button>

          {/* Floating Pill Navigation Menu (Desktop) */}
          <nav className="hidden lg:flex items-center bg-white/80 border border-[#bae6fd] rounded-full px-5 py-1.5 gap-6 xl:gap-8 shadow-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs uppercase tracking-[0.16em] font-semibold transition-all cursor-pointer py-1 text-[#334155] hover:text-[#0284c7] relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0284c7] to-[#38bdf8] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle Pill */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3.5 py-2 border border-[#bae6fd] hover:border-[#0284c7] text-xs font-mono bg-white hover:bg-[#e0f2fe] text-[#0f172a] transition-all cursor-pointer rounded-xl active:scale-95 shadow-sm group"
              title="Switch Language (ENG / AMH)"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#0284c7] group-hover:rotate-45 transition-transform duration-500" />
              <span className="font-mono text-xs font-bold tracking-wider">
                {lang === 'en' ? 'AMH' : 'ENG'}
              </span>
            </button>

            {/* Book Appointment Pill CTA */}
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0ea5e9] hover:from-[#0f172a] hover:to-[#1e293b] text-white text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer rounded-xl shadow-[0_4px_20px_rgba(2,132,199,0.3)] active:scale-95"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{t('navBook')}</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-200 animate-pulse" />
            </button>
          </div>

          {/* Mobile & Tablet Control Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#bae6fd] bg-white text-xs font-mono text-[#0f172a] rounded-xl shadow-sm cursor-pointer active:scale-95 min-h-[38px]"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#0284c7]" />
              <span className="font-mono text-xs font-bold tracking-wider">
                {lang === 'en' ? 'AMH' : 'ENG'}
              </span>
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0f172a] hover:text-[#0284c7] focus:outline-none cursor-pointer rounded-xl border border-[#bae6fd] bg-white transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#0284c7]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Slide-Down Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-[#bae6fd] space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            
            {/* Mobile Drawer Language Switcher Bar */}
            <div className="flex items-center justify-between p-3 bg-white border border-[#bae6fd] rounded-xl">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0284c7]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#475569]">
                  {lang === 'en' ? 'Language' : 'ቋንቋ'}
                </span>
              </div>
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#e0f2fe] hover:bg-[#0284c7] hover:text-white border border-[#0284c7]/30 text-xs font-mono font-bold text-[#0f172a] rounded-lg transition-all cursor-pointer active:scale-95"
              >
                <span className="font-mono text-xs font-bold tracking-wider">
                  {lang === 'en' ? 'AMH' : 'ENG'}
                </span>
              </button>
            </div>

            {/* Mobile Navigation Links List */}
            <nav className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all flex items-center justify-between font-semibold text-[#334155] hover:text-[#0284c7] hover:bg-[#e0f2fe]"
                >
                  <span>{link.label}</span>
                </button>
              ))}
            </nav>

            {/* Full-width Book Appointment CTA inside Mobile Drawer */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0ea5e9] text-white text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer rounded-xl shadow-lg min-h-[44px]"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('navBook')}</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </header>
  );
};