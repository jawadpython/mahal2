'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Award, Users } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function Values({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  const values = [
    {
      icon: Target,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description,
    },
    {
      icon: Heart,
      title: t.about.values.passion.title,
      description: t.about.values.passion.description,
    },
    {
      icon: Award,
      title: t.about.values.quality.title,
      description: t.about.values.quality.description,
    },
    {
      icon: Users,
      title: t.about.values.partnership.title,
      description: t.about.values.partnership.description,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-4">
            <span className="text-white">{t.about.values.title.split(' ')[0]}</span>{' '}
            <span className="text-primary-green">{t.about.values.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.about.values.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-green/10 mb-6 group-hover:bg-primary-green/20 transition-all duration-300">
                  <Icon className="text-primary-green" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
