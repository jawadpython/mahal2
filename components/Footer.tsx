import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

export default function Footer({ locale }: { locale: Locale }) {
  const currentYear = new Date().getFullYear();
  const t = getTranslations(locale);
  const isRTL = locale === 'ar';

  const footerLinks = {
    services: [
      { href: `/${locale}/services`, label: t.services.digitalPrinting.title },
      { href: `/${locale}/services`, label: t.services.largeFormat.title },
      { href: `/${locale}/services`, label: t.services.signage.title },
      { href: `/${locale}/services`, label: t.services.laserCutting.title },
      { href: `/${locale}/services`, label: t.services.cncCutting.title },
      { href: `/${locale}/services`, label: t.services.branding.title },
    ],
    company: [
      { href: `/${locale}/about`, label: t.nav.about },
      { href: `/${locale}/portfolio`, label: t.nav.portfolio },
      { href: `/${locale}/contact`, label: t.nav.contact },
    ],
  };

  return (
    <footer className="bg-primary-dark border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-display mb-4">
              <span className="text-white">MAESTRO</span>
              <span className="text-primary-green"> Print</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-green transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-green transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
            <ul className={`space-y-3 ${isRTL ? 'space-x-reverse' : ''}`}>
              <li className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-3'} space-x-3`}>
                <Phone className="text-primary-green mt-1 flex-shrink-0" size={18} />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-primary-green transition-colors duration-300 text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-3'} space-x-3`}>
                <Mail className="text-primary-green mt-1 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@maestroprint.com"
                  className="text-gray-400 hover:text-primary-green transition-colors duration-300 text-sm"
                >
                  info@maestroprint.com
                </a>
              </li>
              <li className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-3'} space-x-3`}>
                <MapPin className="text-primary-green mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">
                  123 Business Street<br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''} space-y-4 md:space-y-0`}>
            <p className="text-gray-500 text-sm">
              © {currentYear} MAESTRO Print. {t.footer.rights}
            </p>
            <div className={`flex ${isRTL ? 'space-x-reverse' : 'space-x-6'} space-x-6`}>
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-500 hover:text-primary-green transition-colors duration-300 text-sm"
              >
                {t.footer.privacy}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-gray-500 hover:text-primary-green transition-colors duration-300 text-sm"
              >
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
