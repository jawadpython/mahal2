'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
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
          
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-primary-green mx-auto mb-4" size={48} />
                <p className="text-gray-500 text-sm mb-2">Google Maps Integration</p>
                <p className="text-gray-600 text-xs">123 Business Street, City, State 12345</p>
              </div>
            </div>
            {/* Replace this div with actual Google Maps embed */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
