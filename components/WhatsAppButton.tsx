'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function WhatsAppButton({ locale }: { locale: Locale }) {
  const whatsappNumber = '212668679435';
  const t = getTranslations(locale);
  const message = encodeURIComponent(t.whatsapp.message);
  const isRTL = locale === 'ar';

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${isRTL ? 'left-6' : 'right-6'} bottom-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 group`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
      <span className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} bg-primary-green text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse`}>
        {t.whatsapp.chat}
      </span>
    </motion.a>
  );
}
