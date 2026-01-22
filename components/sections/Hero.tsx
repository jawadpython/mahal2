'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function Hero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const isRTL = locale === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-primary-dark to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">{t.hero.title}</span>
              <br />
              <span className="text-primary-green">{t.hero.subtitle}</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href={`/${locale}/contact`}
                className={`group px-8 py-4 bg-primary-green text-black font-semibold text-lg rounded-md hover:bg-primary-green/90 transition-all duration-300 hover:scale-105 flex items-center ${isRTL ? 'space-x-reverse flex-row-reverse' : 'space-x-2'} space-x-2 shadow-lg shadow-primary-green/20`}
              >
                <span>{t.hero.getQuote}</span>
                <ArrowRight className={`group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} size={20} />
              </Link>
              <Link
                href={`/${locale}/portfolio`}
                className={`group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center ${isRTL ? 'space-x-reverse flex-row-reverse' : 'space-x-2'} space-x-2`}
              >
                <span>{t.hero.viewWork}</span>
                <ArrowRight className={`group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
