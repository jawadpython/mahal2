'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function CTA({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const isRTL = locale === 'ar';

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-dark via-black to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            <span className="text-white">{t.cta.title}</span>{' '}
            <span className="text-primary-green">{t.cta.highlight}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href={`/${locale}/contact`}
              className={`group px-8 py-4 bg-primary-green text-black font-semibold text-lg rounded-md hover:bg-primary-green/90 transition-all duration-300 hover:scale-105 flex items-center justify-center ${isRTL ? 'space-x-reverse flex-row-reverse' : 'space-x-2'} space-x-2 shadow-lg shadow-primary-green/20`}
            >
              <span>{t.cta.getStarted}</span>
              <ArrowRight className={`group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} size={20} />
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className={`group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center justify-center ${isRTL ? 'space-x-reverse flex-row-reverse' : 'space-x-2'} space-x-2`}
            >
              <span>{t.cta.viewPortfolio}</span>
              <ArrowRight className={`group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
