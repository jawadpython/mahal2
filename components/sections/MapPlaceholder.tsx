'use client';

import { motion } from 'framer-motion';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function MapPlaceholder({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  
  return (
    <section className="py-20 lg:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
              <span className="text-white">{t.contact.findUs.title.split(' ')[0]}</span>{' '}
              <span className="text-primary-green">{t.contact.findUs.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-gray-400">
              {t.contact.findUs.description}
            </p>
          </div>
          
          <div className="relative aspect-video rounded-lg border border-gray-700 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3325.5878442455964!2d-7.5879!3d33.5381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xc8c1bc69ee52c868!2sGCQ6%2B8Q%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1770220081293!5m2!1sen!2sma"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MAESTRO Print - Casablanca"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
