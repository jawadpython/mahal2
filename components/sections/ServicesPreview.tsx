'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Printer, Box, Lightbulb, Scissors, Settings, Palette } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function ServicesPreview({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const isRTL = locale === 'ar';

  const services = [
    {
      icon: Printer,
      title: t.services.digitalPrinting.title,
      description: t.services.digitalPrinting.description.split('.')[0] + '.',
      color: 'text-blue-400',
    },
    {
      icon: Box,
      title: t.services.largeFormat.title,
      description: t.services.largeFormat.description.split('.')[0] + '.',
      color: 'text-purple-400',
    },
    {
      icon: Lightbulb,
      title: t.services.signage.title,
      description: t.services.signage.description.split('.')[0] + '.',
      color: 'text-yellow-400',
    },
    {
      icon: Scissors,
      title: t.services.laserCutting.title,
      description: t.services.laserCutting.description.split('.')[0] + '.',
      color: 'text-red-400',
    },
    {
      icon: Settings,
      title: t.services.cncCutting.title,
      description: t.services.cncCutting.description.split('.')[0] + '.',
      color: 'text-green-400',
    },
    {
      icon: Palette,
      title: t.services.branding.title,
      description: t.services.branding.description.split('.')[0] + '.',
      color: 'text-pink-400',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-4">
            <span className="text-white">{t.services.title.split(' ')[0]}</span>{' '}
            <span className="text-primary-green">{t.services.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary-green/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/10"
              >
                <div className={`mb-4 ${service.color}`}>
                  <Icon size={48} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/${locale}/services`}
                  className={`text-primary-green font-medium hover:underline inline-flex items-center ${isRTL ? 'space-x-reverse flex-row-reverse' : 'space-x-2'} space-x-2`}
                >
                  <span>{t.services.learnMore}</span>
                  <span>{isRTL ? '←' : '→'}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/services`}
            className="inline-block px-8 py-4 bg-primary-green text-black font-semibold rounded-md hover:bg-primary-green/90 transition-all duration-300 hover:scale-105"
          >
            {t.services.viewAll}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
