'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Printer, Box, Lightbulb, Scissors, Settings, Palette, Check } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import { serviceImages } from '@/lib/images';

export default function ServicesList({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const isRTL = locale === 'ar';

  const services = [
    {
      icon: Printer,
      title: t.services.digitalPrinting.title,
      description: t.services.digitalPrinting.description,
      features: t.services.digitalPrinting.features,
      image: serviceImages.digitalPrinting,
    },
    {
      icon: Box,
      title: t.services.largeFormat.title,
      description: t.services.largeFormat.description,
      features: t.services.largeFormat.features,
      image: serviceImages.largeFormat,
    },
    {
      icon: Lightbulb,
      title: t.services.signage.title,
      description: t.services.signage.description,
      features: t.services.signage.features,
      image: serviceImages.signage,
    },
    {
      icon: Scissors,
      title: t.services.laserCutting.title,
      description: t.services.laserCutting.description,
      features: t.services.laserCutting.features,
      image: serviceImages.laserCutting,
    },
    {
      icon: Settings,
      title: t.services.cncCutting.title,
      description: t.services.cncCutting.description,
      features: t.services.cncCutting.features,
      image: serviceImages.cncCutting,
    },
    {
      icon: Palette,
      title: t.services.branding.title,
      description: t.services.branding.description,
      features: t.services.branding.features,
      image: serviceImages.branding,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const flexDirection = isRTL 
              ? (isEven ? 'lg:flex-row-reverse' : 'lg:flex-row')
              : (isEven ? 'lg:flex-row' : 'lg:flex-row-reverse');
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${flexDirection} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse flex-row-reverse' : 'space-x-4'} space-x-4 mb-6`}>
                    <div className="p-4 bg-primary-green/10 rounded-lg">
                      <Icon className="text-primary-green" size={40} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-3'} space-x-3`}>
                        <Check className="text-primary-green mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-lg border border-gray-700 overflow-hidden bg-gray-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center', objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
