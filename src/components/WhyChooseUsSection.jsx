import React, { useState } from 'react';
import { Award, ShieldCheck, HeartPulse, Sparkles, Stethoscope, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';

export const WhyChooseUsSection = () => {
  const { t } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      icon: Award,
      titleKey: 'whyPillar1Title',
      descKey: 'whyPillar1Desc',
      badge: 'BOARD-CERTIFIED',
      tagColor: 'bg-[#e0f2fe] text-[#0284c7] border-[#38bdf8]/40',
      accentBorder: 'hover:border-[#38bdf8]',
      details: 'Our clinical director and associates are board-certified specialists with over 15 years of combined hospital experience.'
    },
    {
      icon: HeartPulse,
      titleKey: 'whyPillar2Title',
      descKey: 'whyPillar2Desc',
      badge: 'PAIN-FREE TECH',
      tagColor: 'bg-[#e8efe9] text-[#2e473b] border-[#cbd8d0]',
      accentBorder: 'hover:border-[#5a7867]',
      details: 'Gentle computerized anesthetics, quiet ultrasonic handpieces, and climate-controlled suites eliminate dental anxiety.'
    },
    {
      icon: ShieldCheck,
      titleKey: 'whyPillar3Title',
      descKey: 'whyPillar3Desc',
      badge: 'ISO-STERILE',
      tagColor: 'bg-[#f0f9ff] text-[#0369a1] border-[#bae6fd]',
      accentBorder: 'hover:border-[#0284c7]',
      details: 'Multi-stage autoclave sterilization protocols, disposable barrier systems, and negative-pressure air purifiers.'
    },
    {
      icon: Sparkles,
      titleKey: 'whyPillar4Title',
      descKey: 'whyPillar4Desc',
      badge: '3D PREVIEW',
      tagColor: 'bg-[#f3efe6] text-[#63533b] border-[#e2ded5]',
      accentBorder: 'hover:border-[#38bdf8]',
      details: 'Digital intraoral scans and 3D smile design simulations allow you to preview your treatment outcomes before beginning.'
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#faf8f5] text-[#1c2826] border-b border-[#e2ded5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#0284c7] bg-[#e0f2fe] px-4 py-1.5 rounded-full border border-[#38bdf8]/40 shadow-sm">
            {t('whyTag')}
          </span>
          <h2 className="editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1c2826] tracking-tight">
            {t('whyTitle')}
          </h2>
          <p className="text-[#4e6359] text-base font-light leading-relaxed">
            {t('whySub')}
          </p>
        </div>

        {/* Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedPillar(idx)}
                className={`bg-white p-8 sm:p-10 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ${
                  isSelected
                    ? 'border-[#0284c7] ring-2 ring-[#38bdf8]/20 shadow-md'
                    : `border-[#e2ded5] ${pillar.accentBorder}`
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 bg-[#f0f7f3] text-[#2e473b] rounded-2xl border border-[#cbd8d0]">
                      <Icon className="w-6 h-6 text-[#0284c7]" />
                    </div>

                    <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${pillar.tagColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="editorial-serif text-2xl text-[#1c2826] font-normal">
                    {t(pillar.titleKey)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4e6359] font-light leading-relaxed">
                    {t(pillar.descKey)}
                  </p>
                </div>

                {/* Interactive Expandable Insight Box */}
                <div className="pt-4 border-t border-[#e8e4db] space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0284c7]">
                    <span>Clinical Standard Insight</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </div>
                  {isSelected && (
                    <p className="text-xs text-[#2e473b] font-mono bg-[#f0f9ff] p-3 rounded-xl border border-[#bae6fd] animate-in fade-in duration-300">
                      {pillar.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#1c2826] via-[#16221f] to-[#0f1715] text-white p-8 rounded-3xl border border-[#2e473b] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="editorial-serif text-2xl text-white">Ethical, Transparent & Patient-Centered</h4>
            <p className="text-xs text-[#c2d4cb] font-light">
              Detailed digital estimates before treatment • Zero hidden fees • Flexible care financing
            </p>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-[#38bdf8] text-[#0f1412] font-mono text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shrink-0">
            <Check className="w-4 h-4" />
            <span>Guaranteed Satisfaction</span>
          </div>
        </div>

      </div>
    </section>
  );
};
