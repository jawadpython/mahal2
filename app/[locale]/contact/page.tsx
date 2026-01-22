import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import MapPlaceholder from "@/components/sections/MapPlaceholder";
import { Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  
  return (
    <>
      <ContactHero locale={locale} />
      <ContactInfo locale={locale} />
      <ContactForm locale={locale} />
      <MapPlaceholder locale={locale} />
    </>
  );
}
