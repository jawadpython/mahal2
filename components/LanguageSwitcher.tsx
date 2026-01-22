'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { Locale, localeNames, locales } from '@/lib/i18n';
import { removeLocaleFromPath } from '@/lib/i18n';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isRTL = currentLocale === 'ar';

  const handleLocaleChange = (locale: Locale) => {
    const pathWithoutLocale = removeLocaleFromPath(pathname);
    router.push(`/${locale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center ${isRTL ? 'space-x-reverse flex-row-reverse' : 'space-x-2'} space-x-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300`}
        aria-label="Change language"
      >
        <Globe size={18} className="text-gray-300" />
        <span className="text-sm font-medium text-gray-300">{localeNames[currentLocale]}</span>
        <ChevronDown 
          size={16} 
          className={`text-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50 min-w-[120px]`}
            >
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLocaleChange(locale)}
                  className={`w-full ${isRTL ? 'text-left' : 'text-right'} px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300 first:rounded-t-md last:rounded-b-md ${
                    currentLocale === locale
                      ? 'text-primary-green font-semibold bg-gray-800'
                      : 'text-gray-300'
                  }`}
                >
                  {localeNames[locale]}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
