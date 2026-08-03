import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2, HeartPulse, Sparkles, Shield, Cpu, Activity, Stethoscope } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';

export const AboutMissionVisionSection = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#f8fafc] via-[#f0f9ff] to-[#e0f2fe]/50 border-b border-[#bae6fd] text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0f172a] tracking-tight">
            {t('aboutTitle')}
          </h2>
          <p className="text-sm text-[#475569] font-normal leading-relaxed">
            {t('aboutHeaderSub')}
          </p>
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          
          {/* Main Pillar Interactive Bento Box (Span 8) */}
          <div className="lg:col-span-8 bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#bae6fd] shadow-[0_8px_30px_rgba(2,132,199,0.06)] flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            {/* Background Light Watermark */}
            <div className="absolute right-0 bottom-0 text-[140px] font-bold font-serif text-[#0284c7]/5 pointer-events-none select-none leading-none -mr-8 -mb-8">
              ZIVORA
            </div>

            {/* Interactive Pillar Switcher Buttons */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#bae6fd] pb-4">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'about'
                    ? 'bg-[#0284c7] text-white shadow-md'
                    : 'bg-[#f0f9ff] text-[#334155] hover:bg-[#e0f2fe] hover:text-[#0284c7]'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>{t('tabExcellence')}</span>
              </button>

              <button
                onClick={() => setActiveTab('mission')}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'mission'
                    ? 'bg-[#0284c7] text-white shadow-md'
                    : 'bg-[#f0f9ff] text-[#334155] hover:bg-[#e0f2fe] hover:text-[#0284c7]'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>{t('missionTag')}</span>
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'vision'
                    ? 'bg-[#0284c7] text-white shadow-md'
                    : 'bg-[#f0f9ff] text-[#334155] hover:bg-[#e0f2fe] hover:text-[#0284c7]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{t('visionTag')}</span>
              </button>
            </div>

            {/* Dynamic Content Body based on activeTab */}
            <div className="space-y-6 relative z-10 min-h-[200px]">
              {activeTab === 'about' && (
                <div className="space-y-4 animate-fadeIn">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0284c7] block">
                    {t('aboutCardTitle')}
                  </span>
                  <h3 className="editorial-serif text-2xl sm:text-3xl text-[#0f172a]">
                    {t('aboutCoreSubtitle')}
                  </h3>
                  <p className="text-sm text-[#475569] font-normal leading-relaxed">
                    {t('aboutCardDesc')}
                  </p>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {t('aboutBody2')}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#f0f9ff]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7]">
                      <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <span>{t('aboutFeature1')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7]">
                      <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <span>{t('aboutFeature2')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7]">
                      <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <span>{t('aboutFeature3')}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-4 animate-fadeIn">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0284c7] block">
                    {t('missionTag')}
                  </span>
                  <h3 className="editorial-serif text-2xl sm:text-3xl text-[#0f172a]">
                    {t('missionTitle')}
                  </h3>
                  <p className="text-sm text-[#475569] font-normal leading-relaxed">
                    {t('missionBody1')}
                  </p>

                  <div className="p-4 bg-[#f0f9ff] border-l-4 border-[#0284c7] rounded-r-2xl">
                    <p className="text-xs text-[#0369a1] font-semibold leading-relaxed">
                      {t('missionBody2')}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-4 animate-fadeIn">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#0ea5e9] block">
                    {t('visionTag')}
                  </span>
                  <h3 className="editorial-serif text-2xl sm:text-3xl text-[#0f172a]">
                    {t('visionTitle')}
                  </h3>
                  <p className="text-sm text-[#475569] font-normal leading-relaxed">
                    {t('visionBody')}
                  </p>

                  <div className="p-4 bg-[#e0f2fe]/60 border border-[#bae6fd] rounded-2xl flex items-center justify-between text-xs font-mono text-[#0284c7] font-bold">
                    <span>{t('intlProtocols')}</span>
                    <Sparkles className="w-4 h-4 text-[#0ea5e9]" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#bae6fd]/60">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#0284c7]">100%</div>
                <div className="text-[10px] font-mono uppercase text-[#64748b] tracking-wider">Tailored Plans</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#0ea5e9]">360°</div>
                <div className="text-[10px] font-mono uppercase text-[#64748b] tracking-wider">Digital Scans</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#0369a1]">5,000+</div>
                <div className="text-[10px] font-mono uppercase text-[#64748b] tracking-wider">Healthy Smiles</div>
              </div>
            </div>

          </div>

          {/* Right Side Bento Card: Clinical Tech & Direct Consult Trigger (Span 4) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0f172a] text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            <div className="space-y-5">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-md">
                <Cpu className="w-6 h-6 text-[#7dd3fc]" />
              </div>

              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#7dd3fc] block">
                {t('techTag')}
              </span>

              <h3 className="editorial-serif text-2xl text-white">
                {t('techTitle')}
              </h3>

              <p className="text-xs text-[#bae6fd] font-light leading-relaxed">
                {t('techDesc')}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-white">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>{t('techFeat1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>{t('techFeat2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span>{t('techFeat3')}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking ? onOpenBooking() : null}
              className="w-full py-3.5 bg-white text-[#0284c7] hover:bg-[#e0f2fe] font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-md text-center active:scale-98"
            >
              {t('btnBookConsult')}
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

