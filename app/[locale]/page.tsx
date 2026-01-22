import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import { Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  
  return (
    <>
      <Hero locale={locale} />
      <ServicesPreview locale={locale} />
      <WhyChooseUs locale={locale} />
      <CTA locale={locale} />
    </>
  );
}
