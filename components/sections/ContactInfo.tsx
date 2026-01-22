'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function ContactInfo({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const isRTL = locale === 'ar';

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.info.phone,
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890',
    },
    {
      icon: Mail,
      title: t.contact.info.email,
      content: 'info@maestroprint.com',
      link: 'mailto:info@maestroprint.com',
    },
    {
      icon: MapPin,
      title: t.contact.info.address,
      content: '123 Business Street\nCity, State 12345',
      link: null,
    },
    {
      icon: Clock,
      title: t.contact.info.hours,
      content: t.contact.info.hoursContent,
      link: null,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = info.content.split('\n');
            
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary-green/50 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <Icon className="text-primary-green" size={32} />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-primary-green transition-colors duration-300">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-300 hover:text-primary-green transition-colors duration-300 block"
                  >
                    {content.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < content.length - 1 && <br />}
                      </span>
                    ))}
                  </a>
                ) : (
                  <div className="text-gray-300">
                    {content.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < content.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
