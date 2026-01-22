'use client';

import { motion } from 'framer-motion';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function ContactHero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-black via-primary-dark to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-6">
            <span className="text-white">{t.contact.title.split(' ')[0]} {t.contact.title.split(' ')[1]}</span>{' '}
            <span className="text-primary-green">{t.contact.title.split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
