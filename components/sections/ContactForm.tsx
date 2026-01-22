'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const isRTL = locale === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1000);
  };

  const serviceOptions = [
    { value: 'digital-printing', label: t.services.digitalPrinting.title },
    { value: 'large-format', label: t.services.largeFormat.title },
    { value: 'signage', label: t.services.signage.title },
    { value: 'laser-cutting', label: t.services.laserCutting.title },
    { value: 'cnc-cutting', label: t.services.cncCutting.title },
    { value: 'branding', label: t.services.branding.title },
  ];

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
              <span className="text-white">{t.contact.sendMessage.title.split(' ').slice(0, -1).join(' ')}</span>{' '}
              <span className="text-primary-green">{t.contact.sendMessage.title.split(' ').slice(-1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-400">
              {t.contact.sendMessage.description}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-primary-green transition-colors duration-300"
                  placeholder={t.contact.form.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-primary-green transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-primary-green transition-colors duration-300"
                  placeholder="+1 (234) 567-890"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-white font-medium mb-2">
                  {t.contact.form.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary-green transition-colors duration-300"
                >
                  <option value="">{t.contact.form.selectService}</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                {t.contact.form.message} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-primary-green transition-colors duration-300 resize-none"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-primary-green/20 border border-primary-green rounded-md text-primary-green"
              >
                {t.contact.form.success}
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500 rounded-md text-red-400"
              >
                {t.contact.form.error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-4 bg-primary-green text-black font-semibold rounded-md hover:bg-primary-green/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${isRTL ? 'space-x-reverse flex-row-reverse' : 'space-x-2'} space-x-2`}
            >
              <span>{isSubmitting ? t.contact.form.sending : t.contact.form.send}</span>
              <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
