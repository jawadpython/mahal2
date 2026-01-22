import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/translations";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  
  return {
    title: "MAESTRO Print - Professional Printing & Advertising Solutions",
    description: locale === 'ar' 
      ? "حلول طباعة وإعلان وإشارات احترافية. اجعل علامتك التجارية مرئية مع MAESTRO Print."
      : "Solutions professionnelles d'impression, de signalétique et de publicité. Rendez votre marque visible avec MAESTRO Print.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={`antialiased ${isRTL ? 'rtl' : 'ltr'}`}>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <WhatsAppButton locale={locale} />
      </body>
    </html>
  );
}
