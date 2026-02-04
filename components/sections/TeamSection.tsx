'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import { teamImages } from '@/lib/images';

export default function TeamSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <section className="py-20 lg:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="text-white">{t.about.team.title.split(' ')[0]}</span>{' '}
            <span className="text-primary-green">{t.about.team.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.about.team.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {teamImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group flex justify-center"
            >
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900/80 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_rgba(0,255,136,0.15)] group-hover:-translate-y-2 ring-1 ring-white/5 group-hover:ring-primary-green/30">
                {/* Image with zoom on hover */}
                <div className="absolute inset-0">
                  <Image
                    src={src}
                    alt={`${t.about.team.title} - ${index + 1}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Bottom gradient - always visible for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-green to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="h-0.5 w-10 bg-primary-green rounded-full mb-3 opacity-90" />
                      <p className="text-white font-medium text-sm lg:text-base tracking-wide">
                        {t.about.team.subtitle.split('.')[0]}
                      </p>
                    </div>
                    <span className="text-primary-green/80 text-xs font-semibold tabular-nums">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
