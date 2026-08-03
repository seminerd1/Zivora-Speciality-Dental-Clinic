import React, { useState } from 'react';
import { Compass, ShieldCheck, HeartPulse, Sparkles, CheckCircle2, ChevronRight, UserCheck, Stethoscope, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';

export const PatientExperienceAndProcessSection = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: '01', titleKey: 'step1Title', descKey: 'step1Desc', icon: Compass, duration: '10 Mins' },
    { num: '02', titleKey: 'step2Title', descKey: 'step2Desc', icon: ShieldCheck, duration: '15 Mins' },
    { num: '03', titleKey: 'step3Title', descKey: 'step3Desc', icon: Stethoscope, duration: '20 Mins' },
    { num: '04', titleKey: 'step4Title', descKey: 'step4Desc', icon: HeartPulse, duration: '30-60 Mins' },
    { num: '05', titleKey: 'step5Title', descKey: 'step5Desc', icon: Sparkles, duration: '5 Mins' },
  ];

  return (
    <section id="patient-experience" className="py-24 bg-[#faf8f5] text-[#1c2826] border-b border-[#e2ded5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#0284c7] bg-[#e0f2fe] px-4 py-1.5 rounded-full border border-[#38bdf8]/40 shadow-sm">
            {t('processTag')}
          </span>
          <h2 className="editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1c2826] tracking-tight">
            {t('processTitle')}
          </h2>
          <p className="text-[#4e6359] text-base font-light leading-relaxed">
            {t('processSub')}
          </p>
        </div>

        {/* Interactive Step Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-[#e8efe9] p-2 rounded-2xl border border-[#cbd8d0] shadow-inner">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl transition-all text-center cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? 'bg-[#1c2826] text-[#e0f2fe] shadow-md scale-105'
                    : 'text-[#4e6359] hover:bg-[#d8e3dc]/60 hover:text-[#1c2826]'
                }`}
              >
                <span className="text-[10px] font-mono font-bold tracking-widest">{step.num}</span>
                <span className="text-xs font-serif font-semibold truncate w-full">{t(step.titleKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Step Details Display Box */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#e2ded5] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#e0f2fe] rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-xl relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0284c7] bg-[#e0f2fe] px-3.5 py-1 rounded-full border border-[#38bdf8]/40">
                STEP {steps[activeStep].num}
              </span>
              <span className="text-xs font-mono text-[#789082] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {steps[activeStep].duration}
              </span>
            </div>

            <h3 className="editorial-serif text-3xl sm:text-4xl text-[#1c2826]">
              {t(steps[activeStep].titleKey)}
            </h3>

            <p className="text-base text-[#4e6359] font-light leading-relaxed">
              {t(steps[activeStep].descKey)}
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#1c2826] to-[#121a18] text-white rounded-3xl border border-[#2e473b] shadow-xl w-full md:w-80 shrink-0 text-center space-y-4 relative z-10">
            <div className="w-14 h-14 bg-[#23382e] text-[#38bdf8] rounded-2xl flex items-center justify-center mx-auto border border-[#38bdf8]/30 shadow-md">
              {React.createElement(steps[activeStep].icon, { className: 'w-7 h-7' })}
            </div>
            <h4 className="editorial-serif text-xl text-white">Patient Assurance</h4>
            <p className="text-xs text-[#c2d4cb] font-light leading-relaxed">
              Every step is explained in detail by your attending dentist before execution.
            </p>
          </div>
        </div>

        {/* All 5 Steps Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 bg-white ${
                  activeStep === idx
                    ? 'border-[#0284c7] ring-2 ring-[#38bdf8]/20 shadow-md'
                    : 'border-[#e2ded5] hover:border-[#8ca898]'
                }`}
              >
                <div className="flex items-center justify-between text-[#789082] font-mono text-xs">
                  <span>{step.num}</span>
                  <Icon className="w-4 h-4 text-[#0284c7]" />
                </div>
                <h4 className="editorial-serif text-lg text-[#1c2826] font-semibold">
                  {t(step.titleKey)}
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
