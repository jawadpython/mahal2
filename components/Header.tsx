'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function Header({ locale }: { locale: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = getTranslations(locale);
  const isRTL = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/portfolio`, label: t.nav.portfolio },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link href={`/${locale}`} className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'} space-x-2 group`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-display tracking-tight"
            >
              <span className="text-white">MAESTRO</span>
              <span className="text-primary-green"> Print</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-8'} space-x-8`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-primary-green transition-colors duration-300 relative group"
              >
                {link.label}
                <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full`} />
              </Link>
            ))}
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="px-6 py-2 bg-primary-green text-black font-semibold rounded-md hover:bg-primary-green/90 transition-all duration-300 hover:scale-105"
            >
              {t.nav.getQuote}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className={`md:hidden flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'} space-x-2`}>
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-primary-green transition-colors duration-300 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-primary-green text-black font-semibold rounded-md hover:bg-primary-green/90 transition-all duration-300 mt-4"
              >
                {t.nav.getQuote}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
