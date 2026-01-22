'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import { aboutImage } from '@/lib/images';

export default function AboutContent({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  
  return (
    <section className="py-20 lg:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-white">
              {t.about.story.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {t.about.story.p1}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {t.about.story.p2}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.about.story.p3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16"
          >
            <div className="relative aspect-video rounded-lg border border-gray-700 overflow-hidden">
              <Image
                src={aboutImage}
                alt="MAESTRO Print Company"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
