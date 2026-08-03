import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext.jsx';

export const TestimonialsAndStats = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(0);

  const reviews = [
    {
      nameKey: 'test1Name',
      treatmentKey: 'test1Treatment',
      textKey: 'test1',
    },
    {
      nameKey: 'test2Name',
      treatmentKey: 'test2Treatment',
      textKey: 'test2',
    },
    {
      nameKey: 'test3Name',
      treatmentKey: 'test3Treatment',
      textKey: 'test3',
    },
  ];

  const faqs = [
    { qKey: 'faq1Q', aKey: 'faq1A' },
    { qKey: 'faq2Q', aKey: 'faq2A' },
    { qKey: 'faq3Q', aKey: 'faq3A' },
    { qKey: 'faq4Q', aKey: 'faq4A' },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#f8fafc] via-[#f0f9ff] to-[#f8fafc] text-[#0f172a] border-b border-[#bae6fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* TESTIMONIALS */}
        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0f172a] tracking-tight">
              {t('testTitle')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#bae6fd] space-y-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(2,132,199,0.06)] hover:shadow-lg hover:border-[#0284c7] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed italic">
                    "{t(rev.textKey)}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0f9ff] flex items-center justify-between">
                  <div>
                    <h4 className="editorial-serif text-lg text-[#0f172a] font-semibold">{t(rev.nameKey)}</h4>
                    <span className="text-[10px] uppercase tracking-wider text-[#0284c7] font-mono block mt-0.5">
                      {t(rev.treatmentKey)}
                    </span>
                  </div>
                  <div className="p-2 bg-[#e0f2fe] text-[#0284c7] rounded-xl border border-[#bae6fd]">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-10 pt-10 border-t border-[#bae6fd]">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0f172a] tracking-tight">
              {t('faqTitle')}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto space-y-3"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#bae6fd] rounded-2xl transition-all overflow-hidden shadow-sm hover:border-[#0284c7]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f0f9ff] transition-colors"
                  >
                    <span className="editorial-serif text-lg sm:text-xl text-[#0f172a]">
                      {t(faq.qKey)}
                    </span>
                    <div className="p-2 rounded-xl bg-[#e0f2fe] text-[#0284c7] shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] font-light leading-relaxed border-t border-[#f0f9ff] bg-[#f8fafc]">
                      {t(faq.aKey)}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
