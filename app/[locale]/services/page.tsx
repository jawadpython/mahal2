import ServicesHero from "@/components/sections/ServicesHero";
import ServicesList from "@/components/sections/ServicesList";
import { Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  
  return (
    <>
      <ServicesHero locale={locale} />
      <ServicesList locale={locale} />
    </>
  );
}
